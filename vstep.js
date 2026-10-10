/**
 * VSTEP B2 (Bậc 4) - Module Luyện Thi
 * Tích hợp vào IELTS Daily app
 * Bao gồm: Luyện từng kỹ năng + Thi thử Mock Test + Từ vựng học thuật + AI Chấm bài
 */
class VSTEPModule {
  constructor(appInstance) {
    this.app = appInstance;
    this.currentSkill = null;
    this.currentMode = 'hub'; // 'hub' | 'practice' | 'mock-test'
    this.mockTestState = null;
    this.userAnswers = {};
    this.timerInterval = null;
    this.timeRemaining = 0;
    this.vocabFlipStates = {};
    this.speakingRecorder = null;
    this.speakingRecordedBlob = null;
    this.aiApiKey = null; // User provides their API key
    this.aiApiProvider = 'gemini'; // 'openai' | 'gemini'

    // Load saved VSTEP progress
    this.loadProgress();
  }

  // =====================
  // PROGRESS MANAGEMENT
  // =====================
  loadProgress() {
    if (!this.app.currentPhone) return;
    const saved = localStorage.getItem(`vstep_progress_${this.app.currentPhone}`);
    if (saved) {
      this.progress = JSON.parse(saved);
    } else {
      this.progress = {
        practiceHistory: [],
        mockTestResults: [],
        vocabLearned: [],
        writingSubmissions: [],
        speakingSubmissions: [],
        bestScores: { listening: 0, reading: 0, writing: 0, speaking: 0 }
      };
    }
  }

  saveProgress() {
    if (!this.app.currentPhone) return;
    localStorage.setItem(`vstep_progress_${this.app.currentPhone}`, JSON.stringify(this.progress));
  }

  // =====================
  // MAIN HUB RENDERING
  // =====================
  renderHub() {
    this.currentMode = 'hub';
    this.stopTimer();
    const container = document.getElementById('vstep-hub-content');
    if (!container) return;

    const bestScores = this.progress.bestScores;
    const mockCount = this.progress.mockTestResults.length;
    const lastMock = mockCount > 0 ? this.progress.mockTestResults[mockCount - 1] : null;

    container.innerHTML = `
      <!-- VSTEP Overview Banner -->
      <div class="vstep-overview-banner">
        <div class="vstep-banner-content">
          <div class="vstep-banner-icon">🎯</div>
          <div>
            <h3>Chào mừng đến VSTEP B2 Training Center</h3>
            <p>Luyện thi VSTEP Bậc 4 — Chuẩn đầu ra Thạc sĩ. Chọn kỹ năng để bắt đầu luyện tập hoặc thử sức với đề thi thử toàn diện.</p>
          </div>
        </div>
        <div class="vstep-banner-stats">
          <div class="vstep-stat-pill">
            <span class="vstep-stat-num">${mockCount}</span>
            <span class="vstep-stat-label">Lần thi thử</span>
          </div>
          <div class="vstep-stat-pill">
            <span class="vstep-stat-num">${this.progress.vocabLearned.length}</span>
            <span class="vstep-stat-label">Từ vựng đã học</span>
          </div>
          <div class="vstep-stat-pill">
            <span class="vstep-stat-num">${lastMock ? this._calcAvgScore(lastMock) : '—'}</span>
            <span class="vstep-stat-label">Điểm gần nhất</span>
          </div>
        </div>
      </div>

      <!-- Skills Grid -->
      <div class="vstep-skills-grid">
        <div class="vstep-skill-card vstep-skill-listening" onclick="vstep.startPractice('listening')">
          <div class="vstep-skill-icon">🎧</div>
          <h4>Listening</h4>
          <p>3 phần • 35 câu hỏi • 40 phút</p>
          <div class="vstep-skill-score">Điểm cao: <strong>${bestScores.listening || '—'}</strong>/10</div>
          <button class="btn btn-primary vstep-skill-btn">Luyện Nghe →</button>
        </div>

        <div class="vstep-skill-card vstep-skill-reading" onclick="vstep.startPractice('reading')">
          <div class="vstep-skill-icon">📖</div>
          <h4>Reading</h4>
          <p>4 bài đọc • 40 câu hỏi • 60 phút</p>
          <div class="vstep-skill-score">Điểm cao: <strong>${bestScores.reading || '—'}</strong>/10</div>
          <button class="btn btn-primary vstep-skill-btn">Luyện Đọc →</button>
        </div>

        <div class="vstep-skill-card vstep-skill-writing" onclick="vstep.startPractice('writing')">
          <div class="vstep-skill-icon">✍️</div>
          <h4>Writing</h4>
          <p>2 bài • Email + Luận • 60 phút</p>
          <div class="vstep-skill-score">Điểm cao: <strong>${bestScores.writing || '—'}</strong>/10</div>
          <button class="btn btn-primary vstep-skill-btn">Luyện Viết →</button>
        </div>

        <div class="vstep-skill-card vstep-skill-speaking" onclick="vstep.startPractice('speaking')">
          <div class="vstep-skill-icon">🎤</div>
          <h4>Speaking</h4>
          <p>3 phần • Tương tác • 12 phút</p>
          <div class="vstep-skill-score">Điểm cao: <strong>${bestScores.speaking || '—'}</strong>/10</div>
          <button class="btn btn-primary vstep-skill-btn">Luyện Nói →</button>
        </div>
      </div>

      <!-- Vocabulary & Mock Test Row -->
      <div class="vstep-action-row">
        <div class="vstep-vocab-card" onclick="vstep.startPractice('vocabulary')">
          <div class="vstep-vocab-icon">📚</div>
          <div>
            <h4>Từ Vựng Học Thuật B2</h4>
            <p>40 từ vựng chuyên sâu theo 4 chủ đề: Giáo dục, Kinh tế, Môi trường, Công nghệ</p>
          </div>
          <button class="btn btn-secondary">Học Từ Vựng →</button>
        </div>

        <div class="vstep-mock-card" onclick="vstep.startMockTest()">
          <div class="vstep-mock-icon">⏱️</div>
          <div>
            <h4>Thi Thử VSTEP Toàn Diện</h4>
            <p>Mock Test đầy đủ 4 kỹ năng • Đồng hồ đếm ngược • Tự động nộp bài</p>
          </div>
          <button class="btn btn-success">Bắt Đầu Thi Thử →</button>
        </div>
      </div>

      <!-- AI Settings Panel -->
      <div class="vstep-ai-settings glass-panel">
        <h4>⚡ Cài đặt AI Chấm bài (Writing & Speaking)</h4>
        <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:1rem">Nhập API Key để AI tự động chấm bài Viết và đánh giá kỹ năng Nói theo tiêu chí VSTEP.</p>
        <div style="display:flex; gap:0.75rem; flex-wrap:wrap; align-items:center">
          <select id="vstep-ai-provider" class="form-input" style="max-width:160px" onchange="vstep.aiApiProvider = this.value">
            <option value="gemini" ${this.aiApiProvider === 'gemini' ? 'selected' : ''}>Google Gemini</option>
            <option value="openai" ${this.aiApiProvider === 'openai' ? 'selected' : ''}>OpenAI GPT</option>
          </select>
          <input type="password" id="vstep-ai-key" class="form-input" style="flex:1; min-width:200px" placeholder="Paste API Key tại đây..." value="${this.aiApiKey || ''}">
          <button class="btn btn-primary" onclick="vstep.saveAIKey()">Lưu Key</button>
        </div>
        <p id="vstep-ai-status" style="font-size:0.8rem; margin-top:0.5rem; color: var(--color-success); display:none">✅ API Key đã lưu thành công!</p>
      </div>

      <!-- Recent Test History -->
      ${this._renderTestHistory()}
    `;
  }

  _calcAvgScore(result) {
    const scores = [
      parseFloat(result.listening || 0),
      parseFloat(result.reading || 0),
      parseFloat(result.writing || 0),
      parseFloat(result.speaking || 0)
    ];
    const avg = scores.reduce((a, b) => a + b, 0) / scores.filter(s => s > 0).length;
    return avg > 0 ? avg.toFixed(1) : '—';
  }

  _renderTestHistory() {
    if (this.progress.mockTestResults.length === 0) {
      return `<div class="glass-panel" style="text-align:center; padding:2rem; color:var(--text-muted)">
        <p>📝 Chưa có kết quả thi thử nào. Hãy bắt đầu luyện tập!</p>
      </div>`;
    }

    const rows = this.progress.mockTestResults.slice(-5).reverse().map((r, i) => `
      <tr>
        <td>${r.date || '—'}</td>
        <td><span class="vstep-score-badge ${parseFloat(r.listening) >= 6 ? 'pass' : 'fail'}">${r.listening}</span></td>
        <td><span class="vstep-score-badge ${parseFloat(r.reading) >= 6 ? 'pass' : 'fail'}">${r.reading}</span></td>
        <td><span class="vstep-score-badge ${parseFloat(r.writing) >= 6 ? 'pass' : 'fail'}">${r.writing}</span></td>
        <td><span class="vstep-score-badge ${parseFloat(r.speaking) >= 6 ? 'pass' : 'fail'}">${r.speaking}</span></td>
        <td><strong>${this._calcAvgScore(r)}</strong></td>
        <td><span class="vstep-result-badge ${this._isPassed(r) ? 'passed' : 'not-passed'}">${this._isPassed(r) ? 'ĐẠT B2' : 'Chưa đạt'}</span></td>
      </tr>
    `).join('');

    return `
      <div class="glass-panel">
        <h4 style="font-family:var(--font-heading); margin-bottom:1rem">📊 Lịch sử Thi thử Gần đây</h4>
        <div style="overflow-x:auto">
          <table class="vstep-history-table">
            <thead>
              <tr><th>Ngày</th><th>Nghe</th><th>Đọc</th><th>Viết</th><th>Nói</th><th>TB</th><th>Kết quả</th></tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>
    `;
  }

  _isPassed(result) {
    return parseFloat(result.listening || 0) >= 6 &&
           parseFloat(result.reading || 0) >= 6 &&
           parseFloat(result.writing || 0) >= 6 &&
           parseFloat(result.speaking || 0) >= 6;
  }

  saveAIKey() {
    const key = document.getElementById('vstep-ai-key')?.value?.trim();
    const provider = document.getElementById('vstep-ai-provider')?.value;
    if (key) {
      this.aiApiKey = key;
      this.aiApiProvider = provider;
      localStorage.setItem(`vstep_ai_key_${this.app.currentPhone}`, key);
      localStorage.setItem(`vstep_ai_provider_${this.app.currentPhone}`, provider);
      const status = document.getElementById('vstep-ai-status');
      if (status) {
        status.style.display = 'block';
        setTimeout(() => status.style.display = 'none', 3000);
      }
    }
  }

  showSettingsModal() {
    const existing = document.getElementById('vstep-settings-modal');
    if (existing) {
      existing.classList.add('active');
      const input = document.getElementById('vstep-modal-ai-key');
      if (input) input.value = this.aiApiKey || '';
      return;
    }
    const modal = document.createElement('div');
    modal.className = 'modal-overlay active';
    modal.id = 'vstep-settings-modal';
    modal.innerHTML = `
      <div class="modal-content" style="max-width: 520px;">
        <h3 class="modal-title" style="display:flex; justify-content:space-between; align-items:center;">
          <span>⚙️ Cài Đặt AI Chấm Điểm VSTEP</span>
          <button class="btn btn-secondary" onclick="document.getElementById('vstep-settings-modal').classList.remove('active')" style="padding:0.2rem 0.5rem; font-size:0.8rem;">✕</button>
        </h3>
        <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:1rem">
          Nhập API Key để AI tự động chấm bài Writing Task 1 & 2 và hỗ trợ chấm Speaking chuẩn định dạng VSTEP Bậc 4 (chuẩn đầu ra Thạc sĩ).
        </p>
        <div class="form-group">
          <label>Nhà cung cấp AI:</label>
          <select id="vstep-modal-ai-provider" class="form-input">
            <option value="gemini" ${this.aiApiProvider === 'gemini' ? 'selected' : ''}>Google Gemini (Khuyên dùng - Nhanh & Miễn phí)</option>
            <option value="openai" ${this.aiApiProvider === 'openai' ? 'selected' : ''}>OpenAI GPT-4o-mini</option>
          </select>
        </div>
        <div class="form-group">
          <label>API Key:</label>
          <input type="password" id="vstep-modal-ai-key" class="form-input" placeholder="Dán Gemini hoặc OpenAI API Key..." value="${this.aiApiKey || ''}">
          <small style="color:var(--text-muted); font-size:0.75rem; display:block; margin-top:0.35rem">
            * Khóa API được lưu an toàn trên trình duyệt của bạn (Local Storage) và không bao giờ chia sẻ ra ngoài.
          </small>
        </div>
        <div id="vstep-modal-save-status" style="color:var(--color-success); font-size:0.85rem; margin-bottom:1rem; display:none;">
          ✅ Đã lưu cấu hình AI thành công!
        </div>
        <div style="display:flex; justify-content:flex-end; gap:0.5rem;">
          <button class="btn btn-secondary" onclick="document.getElementById('vstep-settings-modal').classList.remove('active')">Đóng</button>
          <button class="btn btn-primary" onclick="vstep.saveModalAIKey()">Lưu Cấu Hình</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  saveModalAIKey() {
    const key = document.getElementById('vstep-modal-ai-key')?.value?.trim();
    const provider = document.getElementById('vstep-modal-ai-provider')?.value;
    if (key) {
      this.aiApiKey = key;
      this.aiApiProvider = provider;
      localStorage.setItem(`vstep_ai_key_${this.app.currentPhone}`, key);
      localStorage.setItem(`vstep_ai_provider_${this.app.currentPhone}`, provider);
      const status = document.getElementById('vstep-modal-save-status');
      if (status) {
        status.style.display = 'block';
        setTimeout(() => {
          status.style.display = 'none';
          document.getElementById('vstep-settings-modal').classList.remove('active');
          if (this.currentMode === 'hub') this.renderHub();
        }, 1200);
      }
    }
  }

  // =====================
  // PRACTICE MODE
  // =====================
  startPractice(skill) {
    this.currentSkill = skill;
    this.currentMode = 'practice';
    this.userAnswers = {};

    const workspace = document.getElementById('vstep-hub-content');
    if (!workspace) return;

    switch (skill) {
      case 'listening': this.renderListeningPractice(workspace); break;
      case 'reading': this.renderReadingPractice(workspace); break;
      case 'writing': this.renderWritingPractice(workspace); break;
      case 'speaking': this.renderSpeakingPractice(workspace); break;
      case 'vocabulary': this.renderVocabularyPractice(workspace); break;
    }
  }

  // =====================
  // LISTENING PRACTICE
  // =====================
  renderListeningPractice(container) {
    const data = vstepData.listening;
    let html = `
      <div class="vstep-practice-header">
        <button class="btn btn-secondary" onclick="vstep.renderHub()">← Quay lại</button>
        <h3>🎧 Luyện Nghe VSTEP B2</h3>
        <span class="vstep-timer-badge" id="vstep-practice-timer">Chế độ luyện tập — Không giới hạn thời gian</span>
      </div>
    `;

    data.parts.forEach(part => {
      html += `
        <div class="glass-panel vstep-part-panel">
          <div class="vstep-part-header">
            <h4>${part.title}</h4>
            <span class="vstep-part-title-vi">${part.titleVi}</span>
          </div>
          <div class="vstep-instructions">
            <p><strong>Instructions:</strong> ${part.instructions}</p>
            <p style="color:var(--text-muted); font-size:0.85rem"><em>${part.instructionsVi}</em></p>
          </div>
      `;

      let currentGroup = null;
      part.questions.forEach(q => {
        // Show conversation group header if applicable
        if (q.conversationGroup && q.conversationGroup !== currentGroup) {
          currentGroup = q.conversationGroup;
          // Show transcript for the first question in the group
          if (q.transcript) {
            html += `
              <div class="vstep-transcript-block">
                <div class="vstep-transcript-header" onclick="this.parentElement.classList.toggle('expanded')">
                  <span>📝 ${currentGroup}</span>
                  <span class="vstep-expand-icon">▼</span>
                </div>
                <div class="vstep-transcript-body">
                  <p>${q.transcript}</p>
                  <p style="color:var(--text-muted); font-size:0.85rem; margin-top:0.5rem"><em>${q.transcriptVi}</em></p>
                </div>
              </div>
            `;
          }
        } else if (!q.conversationGroup && q.transcript) {
          html += `
            <div class="vstep-transcript-block">
              <div class="vstep-transcript-header" onclick="this.parentElement.classList.toggle('expanded')">
                <span>📝 Xem Script / Transcript</span>
                <span class="vstep-expand-icon">▼</span>
              </div>
              <div class="vstep-transcript-body">
                <p>${q.transcript}</p>
                <p style="color:var(--text-muted); font-size:0.85rem; margin-top:0.5rem"><em>${q.transcriptVi}</em></p>
              </div>
            </div>
          `;
        }

        html += this._renderMCQuestion(q, 'listening');
      });

      html += `</div>`; // end part panel
    });

    html += `
      <div style="display:flex; justify-content:flex-end; gap:0.75rem; margin-top:1.5rem">
        <button class="btn btn-primary" onclick="vstep.checkListeningAnswers()">Kiểm tra & Xem Đáp án</button>
      </div>
      <div id="vstep-listening-result" style="margin-top:1.5rem"></div>
    `;

    container.innerHTML = html;
  }

  _renderMCQuestion(q, skill) {
    const qKey = `${skill}_${q.id}`;
    return `
      <div class="vstep-question-block" id="vstep-q-${qKey}">
        <p class="vstep-question-text"><strong>Câu ${q.id}.</strong> ${q.question}</p>
        <div class="vstep-options-list">
          ${q.options.map((opt, idx) => `
            <label class="vstep-option-label" id="vstep-opt-${qKey}-${idx}">
              <input type="radio" name="vstep-${qKey}" value="${idx}" onchange="vstep.userAnswers['${qKey}'] = ${idx}">
              <span class="vstep-radio-mark"></span>
              <span>${opt}</span>
            </label>
          `).join('')}
        </div>
        <div class="vstep-explanation" id="vstep-explain-${qKey}" style="display:none">
          <div class="vstep-explanation-inner"></div>
        </div>
      </div>
    `;
  }

  checkListeningAnswers() {
    let correct = 0;
    let total = 0;
    vstepData.listening.parts.forEach(part => {
      part.questions.forEach(q => {
        total++;
        const qKey = `listening_${q.id}`;
        const userAns = this.userAnswers[qKey];
        const isCorrect = userAns === q.correctAnswer;
        if (isCorrect) correct++;

        // Highlight correct/incorrect
        const qBlock = document.getElementById(`vstep-q-${qKey}`);
        if (qBlock) {
          q.options.forEach((_, idx) => {
            const optLabel = document.getElementById(`vstep-opt-${qKey}-${idx}`);
            if (!optLabel) return;
            optLabel.classList.remove('correct', 'incorrect', 'missed');
            if (idx === q.correctAnswer) {
              optLabel.classList.add('correct');
            } else if (idx === userAns && !isCorrect) {
              optLabel.classList.add('incorrect');
            }
          });

          // Show explanation
          const explainEl = document.getElementById(`vstep-explain-${qKey}`);
          if (explainEl) {
            explainEl.style.display = 'block';
            explainEl.querySelector('.vstep-explanation-inner').innerHTML = `
              <span class="${isCorrect ? 'vstep-correct-tag' : 'vstep-incorrect-tag'}">${isCorrect ? '✅ Đúng!' : '❌ Sai!'}</span>
              <p>${q.explanation}</p>
            `;
          }
        }
      });
    });

    const score = ((correct / total) * 10).toFixed(1);
    if (parseFloat(score) > (this.progress.bestScores.listening || 0)) {
      this.progress.bestScores.listening = parseFloat(score);
    }
    this.progress.practiceHistory.push({
      skill: 'listening', date: new Date().toLocaleDateString('vi-VN'),
      correct, total, score: parseFloat(score)
    });
    this.saveProgress();

    const resultDiv = document.getElementById('vstep-listening-result');
    if (resultDiv) {
      resultDiv.innerHTML = `
        <div class="vstep-result-summary glass-panel">
          <h4>📊 Kết quả Listening</h4>
          <div class="vstep-result-grid">
            <div class="vstep-result-item">
              <span class="vstep-result-num">${correct}</span>
              <span>/ ${total} câu đúng</span>
            </div>
            <div class="vstep-result-item">
              <span class="vstep-result-num vstep-score-big ${parseFloat(score) >= 6 ? 'pass' : 'fail'}">${score}</span>
              <span>/ 10 điểm</span>
            </div>
            <div class="vstep-result-item">
              <span class="vstep-result-badge ${parseFloat(score) >= 6 ? 'passed' : 'not-passed'}">${parseFloat(score) >= 6 ? '✅ ĐẠT B2' : '❌ Chưa đạt B2'}</span>
            </div>
          </div>
        </div>
      `;
      resultDiv.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // =====================
  // READING PRACTICE
  // =====================
  renderReadingPractice(container) {
    const data = vstepData.reading;
    let html = `
      <div class="vstep-practice-header">
        <button class="btn btn-secondary" onclick="vstep.renderHub()">← Quay lại</button>
        <h3>📖 Luyện Đọc VSTEP B2</h3>
        <span class="vstep-timer-badge">Chế độ luyện tập — Không giới hạn thời gian</span>
      </div>
    `;

    data.passages.forEach(passage => {
      html += `
        <div class="glass-panel vstep-part-panel">
          <div class="vstep-part-header">
            <h4>Passage ${passage.id}: ${passage.title}</h4>
            <span class="vstep-part-title-vi">${passage.titleVi}</span>
          </div>

          <!-- Reading Passage with toggle translation -->
          <div class="vstep-passage-container">
            <div class="vstep-passage-text" id="vstep-passage-${passage.id}">
              ${passage.passage.split('\n\n').map(p => `<p>${p}</p>`).join('')}
            </div>
            <button class="vstep-translate-btn" onclick="vstep.togglePassageTranslation(${passage.id})">
              🔄 Hiện / Ẩn bản dịch
            </button>
            <div class="vstep-passage-translation" id="vstep-passage-vi-${passage.id}" style="display:none">
              ${passage.passageVi.split('\n\n').map(p => `<p>${p}</p>`).join('')}
            </div>
          </div>

          <!-- Questions -->
          <div class="vstep-reading-questions">
            <h5 style="margin-bottom:1rem; color:var(--color-primary)">Câu hỏi cho Passage ${passage.id}</h5>
            ${passage.questions.map(q => this._renderMCQuestion(q, 'reading')).join('')}
          </div>
        </div>
      `;
    });

    html += `
      <div style="display:flex; justify-content:flex-end; gap:0.75rem; margin-top:1.5rem">
        <button class="btn btn-primary" onclick="vstep.checkReadingAnswers()">Kiểm tra & Xem Đáp án</button>
      </div>
      <div id="vstep-reading-result" style="margin-top:1.5rem"></div>
    `;

    container.innerHTML = html;
  }

  togglePassageTranslation(passageId) {
    const el = document.getElementById(`vstep-passage-vi-${passageId}`);
    if (el) {
      el.style.display = el.style.display === 'none' ? 'block' : 'none';
    }
  }

  checkReadingAnswers() {
    let correct = 0;
    let total = 0;
    vstepData.reading.passages.forEach(passage => {
      passage.questions.forEach(q => {
        total++;
        const qKey = `reading_${q.id}`;
        const userAns = this.userAnswers[qKey];
        const isCorrect = userAns === q.correctAnswer;
        if (isCorrect) correct++;

        q.options.forEach((_, idx) => {
          const optLabel = document.getElementById(`vstep-opt-${qKey}-${idx}`);
          if (!optLabel) return;
          optLabel.classList.remove('correct', 'incorrect');
          if (idx === q.correctAnswer) optLabel.classList.add('correct');
          else if (idx === userAns && !isCorrect) optLabel.classList.add('incorrect');
        });

        const explainEl = document.getElementById(`vstep-explain-${qKey}`);
        if (explainEl) {
          explainEl.style.display = 'block';
          explainEl.querySelector('.vstep-explanation-inner').innerHTML = `
            <span class="${isCorrect ? 'vstep-correct-tag' : 'vstep-incorrect-tag'}">${isCorrect ? '✅ Đúng!' : '❌ Sai!'}</span>
            <p>${q.explanation}</p>
          `;
        }
      });
    });

    const score = ((correct / total) * 10).toFixed(1);
    if (parseFloat(score) > (this.progress.bestScores.reading || 0)) {
      this.progress.bestScores.reading = parseFloat(score);
    }
    this.progress.practiceHistory.push({
      skill: 'reading', date: new Date().toLocaleDateString('vi-VN'),
      correct, total, score: parseFloat(score)
    });
    this.saveProgress();

    const resultDiv = document.getElementById('vstep-reading-result');
    if (resultDiv) {
      resultDiv.innerHTML = `
        <div class="vstep-result-summary glass-panel">
          <h4>📊 Kết quả Reading</h4>
          <div class="vstep-result-grid">
            <div class="vstep-result-item">
              <span class="vstep-result-num">${correct}</span>
              <span>/ ${total} câu đúng</span>
            </div>
            <div class="vstep-result-item">
              <span class="vstep-result-num vstep-score-big ${parseFloat(score) >= 6 ? 'pass' : 'fail'}">${score}</span>
              <span>/ 10 điểm</span>
            </div>
            <div class="vstep-result-item">
              <span class="vstep-result-badge ${parseFloat(score) >= 6 ? 'passed' : 'not-passed'}">${parseFloat(score) >= 6 ? '✅ ĐẠT B2' : '❌ Chưa đạt B2'}</span>
            </div>
          </div>
        </div>
      `;
      resultDiv.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // =====================
  // WRITING PRACTICE
  // =====================
  renderWritingPractice(container) {
    const data = vstepData.writing;
    let html = `
      <div class="vstep-practice-header">
        <button class="btn btn-secondary" onclick="vstep.renderHub()">← Quay lại</button>
        <h3>✍️ Luyện Viết VSTEP B2</h3>
        <span class="vstep-timer-badge">Tổng thời gian khuyến nghị: ${data.totalTime} phút</span>
      </div>
    `;

    data.tasks.forEach(task => {
      html += `
        <div class="glass-panel vstep-part-panel">
          <div class="vstep-part-header">
            <h4>${task.title}</h4>
            <span class="vstep-part-title-vi">${task.titleVi} • ${task.wordCount.min}–${task.wordCount.max} từ • ${task.timeRecommended} phút</span>
          </div>

          <div class="vstep-writing-prompt">
            <p><strong>Prompt:</strong></p>
            <div class="vstep-prompt-box">${task.prompt.replace(/\n/g, '<br>')}</div>
            <details class="vstep-prompt-vi">
              <summary>📝 Xem đề bằng Tiếng Việt</summary>
              <p>${task.promptVi.replace(/\n/g, '<br>')}</p>
            </details>
          </div>

          <div class="vstep-writing-workspace">
            <div class="vstep-writing-toolbar">
              <span id="vstep-wc-${task.id}">0 từ</span>
              <span class="vstep-wc-target">(Yêu cầu: ${task.wordCount.min}–${task.wordCount.max} từ)</span>
            </div>
            <textarea 
              class="vstep-writing-textarea" 
              id="vstep-writing-${task.id}" 
              placeholder="Viết bài tại đây..."
              oninput="vstep.updateWordCount(${task.id})"
              rows="12"
            ></textarea>
          </div>

          <div class="vstep-writing-actions">
            <button class="btn btn-primary" onclick="vstep.submitWriting(${task.id})">
              🤖 AI Chấm bài Task ${task.id}
            </button>
            <button class="btn btn-secondary" onclick="vstep.showSampleWriting(${task.id})">
              📄 Xem Bài mẫu
            </button>
          </div>

          <div id="vstep-writing-feedback-${task.id}" class="vstep-ai-feedback" style="display:none"></div>
          <div id="vstep-writing-sample-${task.id}" class="vstep-sample-response" style="display:none">
            <h5>📄 Bài mẫu tham khảo (Sample Response)</h5>
            <div class="vstep-sample-text">${task.sampleResponse.replace(/\n/g, '<br>')}</div>
            <div class="vstep-criteria-list">
              <h6>Tiêu chí chấm điểm:</h6>
              ${task.criteria.map(c => `
                <div class="vstep-criteria-item">
                  <strong>${c.name}</strong> (${c.maxScore} điểm): ${c.description}
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  updateWordCount(taskId) {
    const textarea = document.getElementById(`vstep-writing-${taskId}`);
    const wcEl = document.getElementById(`vstep-wc-${taskId}`);
    if (textarea && wcEl) {
      const words = textarea.value.trim().split(/\s+/).filter(w => w.length > 0).length;
      wcEl.textContent = `${words} từ`;
      if (words < vstepData.writing.tasks[taskId - 1].wordCount.min) {
        wcEl.style.color = 'var(--color-warning)';
      } else if (words > vstepData.writing.tasks[taskId - 1].wordCount.max) {
        wcEl.style.color = 'var(--color-danger)';
      } else {
        wcEl.style.color = 'var(--color-success)';
      }
    }
  }

  showSampleWriting(taskId) {
    const el = document.getElementById(`vstep-writing-sample-${taskId}`);
    if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
  }

  async submitWriting(taskId) {
    const textarea = document.getElementById(`vstep-writing-${taskId}`);
    const feedbackEl = document.getElementById(`vstep-writing-feedback-${taskId}`);
    if (!textarea || !feedbackEl) return;

    const text = textarea.value.trim();
    if (text.length < 20) {
      alert('Vui lòng viết ít nhất vài câu trước khi nộp bài!');
      return;
    }

    const task = vstepData.writing.tasks[taskId - 1];
    const wordCount = text.split(/\s+/).filter(w => w.length > 0).length;

    feedbackEl.style.display = 'block';

    if (!this.aiApiKey) {
      // Offline scoring
      feedbackEl.innerHTML = this._offlineWritingFeedback(text, task, wordCount);
      return;
    }

    // AI-powered scoring
    feedbackEl.innerHTML = `
      <div class="vstep-loading">
        <div class="vstep-spinner"></div>
        <p>🤖 AI đang phân tích bài viết của bạn theo tiêu chí VSTEP...</p>
      </div>
    `;

    try {
      const feedback = await this._callAI_Writing(text, task);
      feedbackEl.innerHTML = feedback;
    } catch (err) {
      feedbackEl.innerHTML = this._offlineWritingFeedback(text, task, wordCount);
    }
  }

  _offlineWritingFeedback(text, task, wordCount) {
    const wcOk = wordCount >= task.wordCount.min && wordCount <= task.wordCount.max;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    const paragraphs = text.split(/\n\n+/).filter(p => p.trim().length > 0).length;

    // Basic scoring heuristics
    let taskScore = 1.5;
    let coherenceScore = 1.5;
    let lexicalScore = 1.5;
    let grammarScore = 1.5;

    if (wcOk) taskScore += 0.5;
    if (wordCount >= task.wordCount.min) taskScore += 0.25;
    if (paragraphs >= 3) coherenceScore += 0.5;
    if (paragraphs >= 4) coherenceScore += 0.25;
    if (sentences >= 8) grammarScore += 0.25;
    // Check for academic words
    const academicWords = ['however', 'moreover', 'furthermore', 'consequently', 'therefore', 'nevertheless', 'in conclusion', 'in my opinion', 'on the other hand', 'for instance', 'in addition'];
    const foundAcademic = academicWords.filter(w => text.toLowerCase().includes(w));
    lexicalScore += Math.min(foundAcademic.length * 0.15, 0.75);

    const total = (taskScore + coherenceScore + lexicalScore + grammarScore).toFixed(1);

    if (parseFloat(total) > (this.progress.bestScores.writing || 0)) {
      this.progress.bestScores.writing = parseFloat(total);
      this.saveProgress();
    }

    return `
      <div class="vstep-feedback-card">
        <h5>📝 Đánh giá bài viết (Chế độ Offline — không dùng AI)</h5>
        <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:1rem">
          ⚠️ Đây là đánh giá sơ bộ dựa trên tiêu chí cơ bản. Để có phản hồi chi tiết, hãy nhập API Key ở phần cài đặt AI.
        </p>
        <div class="vstep-score-breakdown">
          <div class="vstep-criterion-score">
            <span class="vstep-criterion-name">Task Achievement</span>
            <span class="vstep-criterion-val">${taskScore.toFixed(1)} / 2.5</span>
          </div>
          <div class="vstep-criterion-score">
            <span class="vstep-criterion-name">Coherence & Cohesion</span>
            <span class="vstep-criterion-val">${coherenceScore.toFixed(1)} / 2.5</span>
          </div>
          <div class="vstep-criterion-score">
            <span class="vstep-criterion-name">Lexical Resource</span>
            <span class="vstep-criterion-val">${lexicalScore.toFixed(1)} / 2.5</span>
          </div>
          <div class="vstep-criterion-score">
            <span class="vstep-criterion-name">Grammar Range & Accuracy</span>
            <span class="vstep-criterion-val">${grammarScore.toFixed(1)} / 2.5</span>
          </div>
          <div class="vstep-criterion-total">
            <span>Tổng điểm:</span>
            <span class="vstep-total-score ${parseFloat(total) >= 6 ? 'pass' : 'fail'}">${total} / 10</span>
          </div>
        </div>
        <div class="vstep-feedback-details">
          <p>📊 <strong>Số từ:</strong> ${wordCount} ${wcOk ? '✅' : `⚠️ (Yêu cầu ${task.wordCount.min}–${task.wordCount.max})`}</p>
          <p>📝 <strong>Số câu:</strong> ${sentences} | <strong>Số đoạn:</strong> ${paragraphs}</p>
          <p>📚 <strong>Từ vựng học thuật tìm thấy:</strong> ${foundAcademic.length > 0 ? foundAcademic.join(', ') : 'Không tìm thấy — hãy thêm linking words!'}</p>
        </div>
      </div>
    `;
  }

  async _callAI_Writing(text, task) {
    const prompt = `You are a VSTEP B2 writing examiner. Score this ${task.type === 'email' ? 'email/letter' : 'opinion essay'} on a scale of 0-10 (VSTEP Bậc 4 standard).

TASK PROMPT: ${task.prompt}

STUDENT'S RESPONSE:
${text}

Please evaluate using these 4 criteria (max 2.5 each, total 10):
1. Task Achievement/Response
2. Coherence & Cohesion  
3. Lexical Resource
4. Grammar Range & Accuracy

Response format (in Vietnamese for the student):
- Score for each criterion with brief explanation
- Total score
- 3 specific strengths
- 3 specific areas for improvement
- Suggested improved sentences (rewrite 2-3 weak sentences)
- Overall assessment: ĐẠT B2 or Chưa đạt B2`;

    let responseText = '';

    if (this.aiApiProvider === 'gemini') {
      const resp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${this.aiApiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      });
      const data = await resp.json();
      responseText = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Không nhận được phản hồi từ AI.';
    } else {
      const resp = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.aiApiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [{ role: 'user', content: prompt }],
          max_tokens: 2000
        })
      });
      const data = await resp.json();
      responseText = data?.choices?.[0]?.message?.content || 'Không nhận được phản hồi từ AI.';
    }

    return `
      <div class="vstep-feedback-card vstep-ai-result">
        <h5>🤖 AI VSTEP Examiner — Đánh giá chi tiết</h5>
        <div class="vstep-ai-response">${this._formatAIResponse(responseText)}</div>
      </div>
    `;
  }

  _formatAIResponse(text) {
    // Simple markdown to HTML
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/^### (.*$)/gm, '<h5>$1</h5>')
      .replace(/^## (.*$)/gm, '<h4>$1</h4>')
      .replace(/^# (.*$)/gm, '<h3>$1</h3>')
      .replace(/^- (.*$)/gm, '<li>$1</li>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n/g, '<br>');
  }

  // =====================
  // SPEAKING PRACTICE
  // =====================
  renderSpeakingPractice(container) {
    const data = vstepData.speaking;
    let html = `
      <div class="vstep-practice-header">
        <button class="btn btn-secondary" onclick="vstep.renderHub()">← Quay lại</button>
        <h3>🎤 Luyện Nói VSTEP B2</h3>
        <span class="vstep-timer-badge">Tổng thời gian: ${data.totalTime} phút</span>
      </div>
    `;

    data.parts.forEach(part => {
      html += `
        <div class="glass-panel vstep-part-panel">
          <div class="vstep-part-header">
            <h4>${part.title}</h4>
            <span class="vstep-part-title-vi">${part.titleVi} • ${part.time} phút</span>
          </div>
          <div class="vstep-instructions">
            <p><strong>Instructions:</strong> ${part.instructions}</p>
            <p style="color:var(--text-muted); font-size:0.85rem"><em>${part.instructionsVi}</em></p>
          </div>
      `;

      part.questions.forEach(q => {
        html += `
          <div class="vstep-speaking-question">
            <div class="vstep-speaking-prompt-card">
              <p class="vstep-speaking-q"><strong>Question ${q.id}:</strong> ${q.question || q.topic || ''}</p>
              <p class="vstep-speaking-q-vi">${q.questionVi || q.topicVi || ''}</p>
              ${q.points ? `
                <div class="vstep-speaking-points">
                  <p><strong>Points to address:</strong></p>
                  <ul>${q.points.map((p, i) => `<li>${p} <em style="color:var(--text-muted)">— ${q.pointsVi[i]}</em></li>`).join('')}</ul>
                </div>
              ` : ''}
              ${q.tips ? `<p class="vstep-speaking-tip">💡 <strong>Mẹo:</strong> ${q.tips}</p>` : ''}
            </div>

            <!-- Recording Controls -->
            <div class="vstep-speaking-controls">
              <button class="vstep-record-btn" id="vstep-rec-btn-${q.id}" onclick="vstep.toggleRecording(${q.id})">
                <span class="vstep-rec-icon">🎙️</span>
                <span id="vstep-rec-label-${q.id}">Bắt đầu Ghi âm</span>
              </button>
              <div id="vstep-rec-status-${q.id}" class="vstep-rec-status"></div>
              <div id="vstep-rec-playback-${q.id}" class="vstep-rec-playback"></div>
            </div>

            <!-- Transcript from Speech-to-Text -->
            <div id="vstep-stt-result-${q.id}" class="vstep-stt-result" style="display:none"></div>

            <!-- Sample Response Toggle -->
            <details class="vstep-sample-toggle">
              <summary>📄 Xem câu trả lời mẫu (Sample Response)</summary>
              <div class="vstep-sample-text">${q.sampleResponse.replace(/\n/g, '<br>')}</div>
            </details>
          </div>
        `;
      });

      html += `</div>`;
    });

    container.innerHTML = html;
  }

  toggleRecording(questionId) {
    const btn = document.getElementById(`vstep-rec-btn-${questionId}`);
    const label = document.getElementById(`vstep-rec-label-${questionId}`);
    const statusEl = document.getElementById(`vstep-rec-status-${questionId}`);
    const playbackEl = document.getElementById(`vstep-rec-playback-${questionId}`);

    if (this.speakingRecorder && this.speakingRecorder.state === 'recording') {
      // Stop recording
      this.speakingRecorder.stop();
      btn.classList.remove('recording');
      label.textContent = 'Bắt đầu Ghi âm';
      statusEl.innerHTML = '<span style="color:var(--color-success)">✅ Đã dừng ghi âm</span>';
      return;
    }

    // Start recording
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        this.speakingRecorder = new MediaRecorder(stream);
        const chunks = [];

        this.speakingRecorder.ondataavailable = e => chunks.push(e.data);
        this.speakingRecorder.onstop = () => {
          const blob = new Blob(chunks, { type: 'audio/webm' });
          this.speakingRecordedBlob = blob;
          const url = URL.createObjectURL(blob);
          playbackEl.innerHTML = `
            <audio controls src="${url}" style="width:100%; margin-top:0.5rem"></audio>
          `;
          stream.getTracks().forEach(t => t.stop());

          // Run Speech-to-Text
          this._runSpeechToText(questionId);
        };

        this.speakingRecorder.start();
        btn.classList.add('recording');
        label.textContent = '⏹️ Dừng Ghi âm';
        statusEl.innerHTML = '<span style="color:var(--color-danger)" class="vstep-pulse">🔴 Đang ghi âm...</span>';
      })
      .catch(err => {
        statusEl.innerHTML = `<span style="color:var(--color-danger)">❌ Không thể truy cập micro: ${err.message}</span>`;
      });
  }

  _runSpeechToText(questionId) {
    const resultEl = document.getElementById(`vstep-stt-result-${questionId}`);
    if (!resultEl) return;

    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      resultEl.style.display = 'block';
      resultEl.innerHTML = '<p style="color:var(--text-muted)">⚠️ Trình duyệt không hỗ trợ Speech-to-Text. Hãy dùng Chrome để có trải nghiệm tốt nhất.</p>';
      return;
    }

    // Note: MediaRecorder and SpeechRecognition work differently.
    // For proper STT, we need to run recognition during recording.
    // This is a simplified version that shows a message.
    resultEl.style.display = 'block';
    resultEl.innerHTML = `
      <div class="vstep-stt-card">
        <h6>🎙️ Ghi chú phát âm</h6>
        <p>Để đánh giá phát âm chính xác, hãy sử dụng tính năng <strong>AI Đánh giá</strong> với API key ở phần cài đặt. 
        AI sẽ phân tích độ trôi chảy, phát âm và nội dung câu trả lời của bạn.</p>
        <p style="color:var(--text-muted); font-size:0.85rem">💡 Mẹo: Nói to, rõ ràng và với tốc độ vừa phải. Tránh ngắt quãng quá lâu giữa các câu.</p>
      </div>
    `;
  }

  // =====================
  // VOCABULARY PRACTICE
  // =====================
  renderVocabularyPractice(container) {
    const data = vstepData.vocabulary;
    let html = `
      <div class="vstep-practice-header">
        <button class="btn btn-secondary" onclick="vstep.renderHub()">← Quay lại</button>
        <h3>📚 Từ Vựng Học Thuật VSTEP B2</h3>
        <span class="vstep-timer-badge">4 chủ đề • 40 từ vựng cốt lõi</span>
      </div>

      <div class="vstep-vocab-topics">
    `;

    data.topics.forEach(topic => {
      html += `
        <div class="glass-panel vstep-vocab-topic-panel">
          <div class="vstep-vocab-topic-header" onclick="document.getElementById('vstep-vocab-${topic.id}').classList.toggle('expanded')">
            <span class="vstep-vocab-topic-icon">${topic.icon}</span>
            <h4>${topic.name}</h4>
            <span class="vstep-vocab-count">${topic.words.length} từ</span>
            <span class="vstep-expand-icon">▼</span>
          </div>
          <div class="vstep-vocab-words-grid" id="vstep-vocab-${topic.id}">
            ${topic.words.map((w, idx) => {
              const cardId = `${topic.id}_${idx}`;
              const isLearned = this.progress.vocabLearned.includes(w.word);
              return `
                <div class="vstep-vocab-card ${isLearned ? 'learned' : ''}" id="vstep-vc-${cardId}" onclick="vstep.flipVocabCard('${cardId}')">
                  <div class="vstep-vocab-card-front">
                    <span class="vstep-vocab-word">${w.word}</span>
                    <span class="vstep-vocab-ipa">${w.ipa}</span>
                    <span class="vstep-vocab-pos">${w.pos}</span>
                    ${isLearned ? '<span class="vstep-learned-badge">✅ Đã học</span>' : ''}
                    <span class="vstep-flip-hint">Bấm để lật</span>
                  </div>
                  <div class="vstep-vocab-card-back">
                    <span class="vstep-vocab-meaning">${w.meaning}</span>
                    <p class="vstep-vocab-example">"${w.example}"</p>
                    <button class="vstep-vocab-learn-btn" onclick="event.stopPropagation(); vstep.markVocabLearned('${w.word}', '${cardId}')">
                      ${isLearned ? '✅ Đã học' : '📌 Đánh dấu đã học'}
                    </button>
                    <button class="vstep-vocab-speak-btn" onclick="event.stopPropagation(); vstep.speakWord('${w.word}')">
                      🔊 Phát âm
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    });

    html += `</div>`;
    container.innerHTML = html;
  }

  flipVocabCard(cardId) {
    const card = document.getElementById(`vstep-vc-${cardId}`);
    if (card) card.classList.toggle('flipped');
  }

  markVocabLearned(word, cardId) {
    if (!this.progress.vocabLearned.includes(word)) {
      this.progress.vocabLearned.push(word);
      this.saveProgress();
    }
    const card = document.getElementById(`vstep-vc-${cardId}`);
    if (card) card.classList.add('learned');
  }

  speakWord(word) {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      speechSynthesis.speak(utterance);
    }
  }

  // =====================
  // MOCK TEST MODE
  // =====================
  startMockTest() {
    if (!confirm('Bạn sắp bắt đầu Thi thử VSTEP B2 toàn diện. Thời gian thi: 180 phút (3 tiếng). Bài thi sẽ tự động nộp khi hết giờ. Bạn đã sẵn sàng?')) {
      return;
    }

    this.currentMode = 'mock-test';
    this.userAnswers = {};
    this.mockTestState = {
      currentSection: 0,
      startTime: Date.now(),
      sections: ['listening', 'reading', 'writing', 'speaking'],
      sectionTimes: [40, 60, 60, 12], // minutes
      completed: {}
    };

    this._renderMockTestSection(0);
  }

  _renderMockTestSection(sectionIndex) {
    const container = document.getElementById('vstep-hub-content');
    if (!container) return;

    const state = this.mockTestState;
    const skill = state.sections[sectionIndex];
    const time = state.sectionTimes[sectionIndex];

    let navButtons = state.sections.map((s, i) => {
      const label = { listening: '🎧 Nghe', reading: '📖 Đọc', writing: '✍️ Viết', speaking: '🎤 Nói' }[s];
      const isCurrent = i === sectionIndex;
      const isDone = state.completed[s];
      return `<button class="vstep-mock-nav-btn ${isCurrent ? 'active' : ''} ${isDone ? 'done' : ''}" 
                onclick="vstep._renderMockTestSection(${i})">${label}</button>`;
    }).join('');

    let sectionHTML = `
      <div class="vstep-mock-header">
        <div class="vstep-mock-title">
          <h3>⏱️ THI THỬ VSTEP B2 — Phần: ${skill.toUpperCase()}</h3>
          <div class="vstep-mock-nav">${navButtons}</div>
        </div>
        <div class="vstep-mock-timer" id="vstep-mock-timer">
          <span class="vstep-timer-icon">⏱️</span>
          <span id="vstep-mock-time-display">${time}:00</span>
        </div>
      </div>
    `;

    // Start timer
    this.startTimer(time * 60, () => {
      alert(`⏰ Hết giờ phần ${skill.toUpperCase()}! Tự động chuyển sang phần tiếp theo.`);
      state.completed[skill] = true;
      if (sectionIndex < state.sections.length - 1) {
        this._renderMockTestSection(sectionIndex + 1);
      } else {
        this.submitMockTest();
      }
    });

    // Render section content
    if (skill === 'listening') {
      sectionHTML += this._renderMockListening();
    } else if (skill === 'reading') {
      sectionHTML += this._renderMockReading();
    } else if (skill === 'writing') {
      sectionHTML += this._renderMockWriting();
    } else if (skill === 'speaking') {
      sectionHTML += this._renderMockSpeaking();
    }

    // Navigation
    sectionHTML += `
      <div class="vstep-mock-footer">
        ${sectionIndex > 0 ? `<button class="btn btn-secondary" onclick="vstep._renderMockTestSection(${sectionIndex - 1})">← Phần trước</button>` : '<div></div>'}
        ${sectionIndex < state.sections.length - 1 
          ? `<button class="btn btn-primary" onclick="vstep.mockTestState.completed['${skill}'] = true; vstep._renderMockTestSection(${sectionIndex + 1})">Phần tiếp theo →</button>`
          : `<button class="btn btn-success" onclick="vstep.submitMockTest()">🏁 Nộp Bài Thi</button>`
        }
      </div>
    `;

    container.innerHTML = sectionHTML;
  }

  _renderMockListening() {
    let html = '';
    vstepData.listening.parts.forEach(part => {
      html += `<div class="glass-panel vstep-mock-section-panel">
        <h4>${part.title}</h4>
        <p class="vstep-instructions-brief">${part.instructionsVi}</p>`;
      
      let currentGroup = null;
      part.questions.forEach(q => {
        if (q.conversationGroup && q.conversationGroup !== currentGroup) {
          currentGroup = q.conversationGroup;
          html += `<div class="vstep-mock-group-label">${currentGroup}</div>`;
        }
        html += this._renderMCQuestion(q, 'mock_listening');
      });
      html += `</div>`;
    });
    return html;
  }

  _renderMockReading() {
    let html = '';
    vstepData.reading.passages.forEach(passage => {
      html += `
        <div class="glass-panel vstep-mock-section-panel">
          <h4>Passage ${passage.id}: ${passage.title}</h4>
          <div class="vstep-passage-container vstep-mock-passage">
            <div class="vstep-passage-text">
              ${passage.passage.split('\n\n').map(p => `<p>${p}</p>`).join('')}
            </div>
          </div>
          ${passage.questions.map(q => this._renderMCQuestion(q, 'mock_reading')).join('')}
        </div>
      `;
    });
    return html;
  }

  _renderMockWriting() {
    let html = '';
    vstepData.writing.tasks.forEach(task => {
      html += `
        <div class="glass-panel vstep-mock-section-panel">
          <h4>${task.title}</h4>
          <div class="vstep-prompt-box">${task.prompt.replace(/\n/g, '<br>')}</div>
          <div class="vstep-writing-toolbar">
            <span id="vstep-mock-wc-${task.id}">0 từ</span>
            <span>(Yêu cầu: ${task.wordCount.min}–${task.wordCount.max} từ)</span>
          </div>
          <textarea class="vstep-writing-textarea" id="vstep-mock-writing-${task.id}" rows="12" 
            placeholder="Viết bài tại đây..."
            oninput="vstep.updateMockWordCount(${task.id})"></textarea>
        </div>
      `;
    });
    return html;
  }

  _renderMockSpeaking() {
    let html = '<div class="glass-panel vstep-mock-section-panel"><h4>🎤 Speaking — Ghi âm câu trả lời</h4>';
    vstepData.speaking.parts.forEach(part => {
      html += `<h5 style="margin:1rem 0 0.5rem">${part.title}</h5>`;
      part.questions.forEach(q => {
        html += `
          <div class="vstep-speaking-question" style="margin-bottom:1rem">
            <p><strong>Q${q.id}:</strong> ${q.question || q.topic}</p>
            <div class="vstep-speaking-controls">
              <button class="vstep-record-btn" id="vstep-mock-rec-${q.id}" onclick="vstep.toggleRecording(${q.id})">
                🎙️ <span id="vstep-rec-label-${q.id}">Ghi âm</span>
              </button>
              <div id="vstep-rec-status-${q.id}"></div>
              <div id="vstep-rec-playback-${q.id}"></div>
            </div>
          </div>
        `;
      });
    });
    html += '</div>';
    return html;
  }

  updateMockWordCount(taskId) {
    const textarea = document.getElementById(`vstep-mock-writing-${taskId}`);
    const wcEl = document.getElementById(`vstep-mock-wc-${taskId}`);
    if (textarea && wcEl) {
      const words = textarea.value.trim().split(/\s+/).filter(w => w.length > 0).length;
      wcEl.textContent = `${words} từ`;
    }
  }

  submitMockTest() {
    this.stopTimer();

    // Calculate listening score
    let listeningCorrect = 0, listeningTotal = 0;
    vstepData.listening.parts.forEach(part => {
      part.questions.forEach(q => {
        listeningTotal++;
        if (this.userAnswers[`mock_listening_${q.id}`] === q.correctAnswer) listeningCorrect++;
      });
    });

    // Calculate reading score
    let readingCorrect = 0, readingTotal = 0;
    vstepData.reading.passages.forEach(passage => {
      passage.questions.forEach(q => {
        readingTotal++;
        if (this.userAnswers[`mock_reading_${q.id}`] === q.correctAnswer) readingCorrect++;
      });
    });

    const listeningScore = ((listeningCorrect / listeningTotal) * 10).toFixed(1);
    const readingScore = ((readingCorrect / readingTotal) * 10).toFixed(1);
    const writingScore = '—'; // Needs AI grading
    const speakingScore = '—'; // Needs AI grading

    const result = {
      date: new Date().toLocaleDateString('vi-VN'),
      listening: listeningScore,
      reading: readingScore,
      writing: writingScore,
      speaking: speakingScore,
      listeningDetail: `${listeningCorrect}/${listeningTotal}`,
      readingDetail: `${readingCorrect}/${readingTotal}`
    };

    this.progress.mockTestResults.push(result);
    if (parseFloat(listeningScore) > (this.progress.bestScores.listening || 0)) {
      this.progress.bestScores.listening = parseFloat(listeningScore);
    }
    if (parseFloat(readingScore) > (this.progress.bestScores.reading || 0)) {
      this.progress.bestScores.reading = parseFloat(readingScore);
    }
    this.saveProgress();

    // Show results
    this._renderMockTestResults(result, listeningCorrect, listeningTotal, readingCorrect, readingTotal);
  }

  _renderMockTestResults(result, lCorrect, lTotal, rCorrect, rTotal) {
    const container = document.getElementById('vstep-hub-content');
    if (!container) return;

    container.innerHTML = `
      <div class="vstep-result-page">
        <div class="vstep-result-banner">
          <div class="vstep-result-crown">🏆</div>
          <h2>Kết Quả Thi Thử VSTEP B2</h2>
          <p class="vstep-result-date">Ngày thi: ${result.date}</p>
        </div>

        <div class="vstep-result-cards-grid">
          <div class="vstep-result-card listening-card">
            <div class="vstep-result-card-icon">🎧</div>
            <h4>Listening</h4>
            <div class="vstep-result-card-score ${parseFloat(result.listening) >= 6 ? 'pass' : 'fail'}">${result.listening}/10</div>
            <p>${lCorrect}/${lTotal} câu đúng</p>
          </div>
          <div class="vstep-result-card reading-card">
            <div class="vstep-result-card-icon">📖</div>
            <h4>Reading</h4>
            <div class="vstep-result-card-score ${parseFloat(result.reading) >= 6 ? 'pass' : 'fail'}">${result.reading}/10</div>
            <p>${rCorrect}/${rTotal} câu đúng</p>
          </div>
          <div class="vstep-result-card writing-card">
            <div class="vstep-result-card-icon">✍️</div>
            <h4>Writing</h4>
            <div class="vstep-result-card-score pending">Chờ AI chấm</div>
            <p>Nộp bài viết ở mục Luyện Viết để chấm</p>
          </div>
          <div class="vstep-result-card speaking-card">
            <div class="vstep-result-card-icon">🎤</div>
            <h4>Speaking</h4>
            <div class="vstep-result-card-score pending">Chờ AI đánh giá</div>
            <p>Nộp ghi âm ở mục Luyện Nói để đánh giá</p>
          </div>
        </div>

        <div class="vstep-result-summary-final glass-panel">
          <h4>📊 Tổng kết</h4>
          <p>Listening + Reading trung bình: <strong>${((parseFloat(result.listening) + parseFloat(result.reading)) / 2).toFixed(1)}/10</strong></p>
          <p>Để đạt VSTEP B2 (Bậc 4), bạn cần <strong>≥ 6.0 điểm ở mỗi kỹ năng</strong>.</p>
          ${parseFloat(result.listening) >= 6 && parseFloat(result.reading) >= 6 
            ? `<p class="vstep-pass-msg">✅ Nghe & Đọc đạt yêu cầu! Hãy hoàn thành thêm phần Viết và Nói.</p>`
            : `<p class="vstep-fail-msg">⚠️ Bạn cần cải thiện thêm. Hãy luyện tập nhiều hơn ở phần chưa đạt.</p>`
          }
        </div>

        <div style="display:flex; justify-content:center; gap:1rem; margin-top:2rem">
          <button class="btn btn-primary" onclick="vstep.renderHub()">← Quay lại Trang Chính</button>
          <button class="btn btn-success" onclick="vstep.startMockTest()">🔄 Thi Lại</button>
        </div>
      </div>
    `;
  }

  // =====================
  // TIMER
  // =====================
  startTimer(totalSeconds, onExpire) {
    this.stopTimer();
    this.timeRemaining = totalSeconds;

    this.timerInterval = setInterval(() => {
      this.timeRemaining--;
      const mins = Math.floor(this.timeRemaining / 60);
      const secs = this.timeRemaining % 60;
      const display = document.getElementById('vstep-mock-time-display');
      if (display) {
        display.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        if (this.timeRemaining <= 300) display.style.color = 'var(--color-danger)';
      }

      if (this.timeRemaining <= 0) {
        this.stopTimer();
        if (onExpire) onExpire();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }
}

// Global instance & initialization helper
function ensureVSTEPInstance() {
  if (!window.vstep && window.app) {
    window.vstep = new VSTEPModule(window.app);
    vstep = window.vstep;
  }
  if (window.vstep && window.app && window.app.currentPhone) {
    window.vstep.loadProgress();
    const savedKey = localStorage.getItem(`vstep_ai_key_${window.app.currentPhone}`);
    const savedProvider = localStorage.getItem(`vstep_ai_provider_${window.app.currentPhone}`);
    if (savedKey) window.vstep.aiApiKey = savedKey;
    if (savedProvider) window.vstep.aiApiProvider = savedProvider;
  }
  return window.vstep;
}

let vstep;
document.addEventListener('DOMContentLoaded', () => {
  // Wait for app to be ready
  const checkApp = setInterval(() => {
    if (window.app && window.app.user) {
      vstep = ensureVSTEPInstance();
      clearInterval(checkApp);
    }
  }, 300);
});
