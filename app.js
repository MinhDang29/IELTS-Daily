// State Manager with secure local multi-user support
class IELTSappState {
  constructor() {
    this.user = null;
    this.activeUnitId = 1;
    this.activeTab = "vocabulary";
    this.remediationPlan = null;
    this.radarChart = null;
    this.currentUnitSubmissions = {
      grammar: false,
      reading: false,
      listening: false,
      speaking: false,
      writing: false
    };
    
    // Auth & Chat states
    this.currentPhone = "";
    this.chatHistory = [];
    
    this.initTheme();
    this.init();
  }

  initTheme() {
    const savedTheme = localStorage.getItem("ielts_theme");
    const body = document.body;
    const darkIcon = document.querySelector("#theme-toggle-btn .theme-icon-dark");
    const lightIcon = document.querySelector("#theme-toggle-btn .theme-icon-light");
    
    if (savedTheme === "light") {
      body.classList.add("light-theme");
      if (darkIcon) darkIcon.style.display = "none";
      if (lightIcon) lightIcon.style.display = "block";
    } else {
      body.classList.remove("light-theme");
      if (darkIcon) darkIcon.style.display = "block";
      if (lightIcon) lightIcon.style.display = "none";
    }
  }

  toggleTheme() {
    const body = document.body;
    const darkIcon = document.querySelector("#theme-toggle-btn .theme-icon-dark");
    const lightIcon = document.querySelector("#theme-toggle-btn .theme-icon-light");
    
    if (body.classList.contains("light-theme")) {
      body.classList.remove("light-theme");
      if (darkIcon) darkIcon.style.display = "block";
      if (lightIcon) lightIcon.style.display = "none";
      localStorage.setItem("ielts_theme", "dark");
    } else {
      body.classList.add("light-theme");
      if (darkIcon) darkIcon.style.display = "none";
      if (lightIcon) lightIcon.style.display = "block";
      localStorage.setItem("ielts_theme", "light");
    }
  }

  init() {
    // We only check if there is an active session
    const activeSessionPhone = localStorage.getItem("ielts_active_session_phone");
    
    if (activeSessionPhone) {
      this.currentPhone = activeSessionPhone;
      const savedUser = localStorage.getItem(`ielts_user_${activeSessionPhone}`);
      
      if (savedUser) {
        this.user = JSON.parse(savedUser);
        
        // Securely Migrate/Sync new units data (Units 6-10) without losing existing study logs
        this.migrateNewUnitsData();

        const savedActiveUnit = localStorage.getItem(`ielts_active_unit_${this.currentPhone}`);
        const savedRemediation = localStorage.getItem(`ielts_remediation_${this.currentPhone}`);
        
        this.activeUnitId = savedActiveUnit ? parseInt(savedActiveUnit) : 1;
        this.remediationPlan = savedRemediation ? JSON.parse(savedRemediation) : null;
        
        // Update daily streak
        this.updateStreak();
        
        // Open Dashboard
        document.getElementById("auth-modal").classList.remove("active");
        this.renderAll();
        return;
      }
    }
    
    // No session -> open login modal
    this.showLoginScreen();
  }

  save() {
    if (!this.currentPhone || !this.user) return;
    
    localStorage.setItem(`ielts_user_${this.currentPhone}`, JSON.stringify(this.user));
    localStorage.setItem(`ielts_active_unit_${this.currentPhone}`, this.activeUnitId.toString());
    
    if (this.remediationPlan) {
      localStorage.setItem(`ielts_remediation_${this.currentPhone}`, JSON.stringify(this.remediationPlan));
    } else {
      localStorage.removeItem(`ielts_remediation_${this.currentPhone}`);
    }
  }

  // Multi-user data migration: Adds Units 6-10 vocab to existing users' decks without erasing current intervals
  migrateNewUnitsData() {
    if (!this.user || !this.user.vocabulary) return;
    
    let updated = false;
    ieltsData.units.forEach(unit => {
      unit.vocabulary.forEach(newV => {
        // If word not in user profile, add it as a new spaced repetition card
        const exists = this.user.vocabulary.some(v => v.word.toLowerCase() === newV.word.toLowerCase());
        if (!exists) {
          this.user.vocabulary.push({
            word: newV.word,
            ipa: newV.ipa,
            pos: newV.pos,
            meaning: newV.meaning,
            definition: newV.definition,
            example: newV.example,
            exampleVi: newV.exampleVi,
            unitId: unit.id,
            easiness: 2.5,
            interval: 0,
            repetitions: 0,
            nextReview: null
          });
          updated = true;
        }
      });
    });

    // Make sure new skills keys exist
    if (!this.user.skills) {
      this.user.skills = { Listening: 4.0, Reading: 4.0, Writing: 3.5, Speaking: 3.5 };
      updated = true;
    }
    
    // Make sure history is initialized
    if (!this.user.history) {
      this.user.history = [];
      updated = true;
    }

    if (updated) {
      this.save();
      console.log("Database successfully migrated to 10 Units for user:", this.currentPhone);
    }
  }

  showLoginScreen() {
    document.getElementById("auth-modal").classList.add("active");
    document.getElementById("auth-login-step").style.display = "block";
    document.getElementById("auth-diagnostic-step").style.display = "none";
  }

  handleLoginSubmit() {
    const phoneInput = document.getElementById("login-phone").value.trim();
    const passInput = document.getElementById("login-pass").value.trim();
    const errorEl = document.getElementById("login-error-msg");

    errorEl.style.display = "none";

    // Mật khẩu bắt buộc là 291199 cho tất cả
    if (passInput !== "291199") {
      errorEl.innerText = "Sai mật khẩu bảo mật!";
      errorEl.style.display = "block";
      return;
    }

    this.currentPhone = phoneInput;
    localStorage.setItem("ielts_active_session_phone", phoneInput);

    // Check if phone profile exists in database
    const savedProfile = localStorage.getItem(`ielts_user_${phoneInput}`);

    if (phoneInput === "0357422081") {
      // 1. ADMIN USER
      if (savedProfile) {
        // Load existing admin profile
        this.user = JSON.parse(savedProfile);
        this.migrateNewUnitsData();
      } else {
        // Create fresh admin profile
        this.user = {
          name: "Admin",
          streak: 1,
          lastActiveDate: new Date().toDateString(),
          studyMinutes: 0,
          initialBand: 6.0,
          skills: { Listening: 6.5, Reading: 6.5, Writing: 6.0, Speaking: 6.0 },
          vocabulary: [],
          completedUnits: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // Unlocks all units for admin
          history: [
            {
              date: new Date().toLocaleDateString('vi-VN'),
              activity: "Khởi tạo hệ thống Admin",
              details: "Chào mừng Quản trị viên 0357422081 đã đăng nhập."
            }
          ]
        };
        // Populate all vocab cards
        ieltsData.units.forEach(unit => {
          unit.vocabulary.forEach(v => {
            this.user.vocabulary.push({
              word: v.word, ipa: v.ipa, pos: v.pos, meaning: v.meaning, definition: v.definition,
              example: v.example, exampleVi: v.exampleVi, unitId: unit.id,
              easiness: 2.5, interval: 0, repetitions: 0, nextReview: null
            });
          });
        });
        this.save();
      }

      this.activeUnitId = 1;
      this.remediationPlan = null;
      document.getElementById("auth-modal").classList.remove("active");
      this.renderAll();

    } else {
      // 2. STANDARD USERS (e.g. 0393690452 or any other number)
      if (savedProfile) {
        // Log in immediately if profile already exists
        this.user = JSON.parse(savedProfile);
        this.migrateNewUnitsData();
        
        const savedActiveUnit = localStorage.getItem(`ielts_active_unit_${this.currentPhone}`);
        const savedRemediation = localStorage.getItem(`ielts_remediation_${this.currentPhone}`);
        this.activeUnitId = savedActiveUnit ? parseInt(savedActiveUnit) : 1;
        this.remediationPlan = savedRemediation ? JSON.parse(savedRemediation) : null;

        document.getElementById("auth-modal").classList.remove("active");
        this.renderAll();
      } else {
        // New standard user registration -> trigger Name + Diagnostic
        document.getElementById("auth-login-step").style.display = "none";
        document.getElementById("auth-diagnostic-step").style.display = "block";
        this.loadDiagnosticTest();
      }
    }
  }

  // Handle Diagnostic test and registration
  loadDiagnosticTest() {
    const questionsContainer = document.getElementById("diagnostic-questions");
    questionsContainer.innerHTML = "";
    
    ieltsData.placementTest.questions.forEach((q, idx) => {
      const qDiv = document.createElement("div");
      qDiv.className = "exercise-group";
      qDiv.innerHTML = `
        <div class="question-text">${idx + 1}. ${q.question}</div>
        <div class="options-list">
          ${q.options.map(opt => `
            <button type="button" class="option-item" onclick="app.selectDiagnosticOption(${q.id}, '${opt}', this)">
              ${opt}
            </button>
          `).join('')}
        </div>
      `;
      questionsContainer.appendChild(qDiv);
    });
    this.diagnosticAnswers = {};
  }

  selectDiagnosticOption(questionId, selectedValue, btnElement) {
    const parent = btnElement.parentElement;
    parent.querySelectorAll(".option-item").forEach(btn => btn.classList.remove("selected"));
    btnElement.classList.add("selected");
    this.diagnosticAnswers[questionId] = selectedValue;
  }

  submitDiagnostic() {
    const name = document.getElementById("register-name").value.trim();
    if (!name) {
      alert("Vui lòng nhập tên của bạn!");
      return;
    }

    const totalQuestions = ieltsData.placementTest.questions.length;
    if (Object.keys(this.diagnosticAnswers).length < totalQuestions) {
      alert("Vui lòng trả lời đầy đủ các câu hỏi trắc nghiệm!");
      return;
    }

    let correctCount = 0;
    ieltsData.placementTest.questions.forEach(q => {
      if (this.diagnosticAnswers[q.id] === q.answer) {
        correctCount++;
      }
    });

    let initialBand = 4.0;
    let scores = { Listening: 4.0, Reading: 4.0, Writing: 3.5, Speaking: 3.5 };

    if (correctCount >= 4) {
      initialBand = 5.0;
      scores = { Listening: 5.0, Reading: 5.0, Writing: 4.5, Speaking: 4.5 };
    } else if (correctCount >= 2) {
      initialBand = 4.5;
      scores = { Listening: 4.5, Reading: 4.5, Writing: 4.0, Speaking: 4.0 };
    }

    this.user = {
      name: name,
      streak: 1,
      lastActiveDate: new Date().toDateString(),
      studyMinutes: 0,
      initialBand: initialBand,
      skills: scores,
      vocabulary: [],
      completedUnits: [],
      history: [
        {
          date: new Date().toLocaleDateString('vi-VN'),
          activity: "Hoàn thành kiểm tra năng lực đầu vào",
          details: `Đạt ${correctCount}/${totalQuestions} điểm. Đánh giá ban đầu: Band ${initialBand}`
        }
      ]
    };

    // Prepopulate vocab
    ieltsData.units.forEach(unit => {
      unit.vocabulary.forEach(v => {
        this.user.vocabulary.push({
          word: v.word, ipa: v.ipa, pos: v.pos, meaning: v.meaning, definition: v.definition,
          example: v.example, exampleVi: v.exampleVi, unitId: unit.id,
          easiness: 2.5, interval: 0, repetitions: 0, nextReview: null
        });
      });
    });

    this.save();
    document.getElementById("auth-modal").classList.remove("active");
    this.renderAll();
  }

  updateStreak() {
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    
    if (this.user.lastActiveDate === yesterday) {
      this.user.streak += 1;
      this.user.lastActiveDate = today;
      this.save();
    } else if (this.user.lastActiveDate !== today) {
      this.user.streak = 1;
      this.user.lastActiveDate = today;
      this.save();
    }
  }

  switchPage(pageId) {
    document.querySelectorAll(".page-section").forEach(sec => sec.classList.remove("active"));
    document.querySelectorAll(".nav-item").forEach(item => item.classList.remove("active"));
    
    document.getElementById(pageId).classList.add("active");
    const navBtn = document.querySelector(`.nav-item button[onclick="app.switchPage('${pageId}')"]`);
    if (navBtn) {
      navBtn.parentElement.classList.add("active");
    }

    if (pageId === "dashboard") {
      this.renderDashboard();
    } else if (pageId === "roadmap") {
      this.renderRoadmap();
    } else if (pageId === "vocabulary-box") {
      this.renderVocabBox();
    } else if (pageId === "analytics") {
      this.renderAnalytics();
    } else if (pageId === "mock-test") {
      this.renderMockTest();
    }
  }

  renderAll() {
    document.getElementById("profile-widget-name").innerText = this.user.name;
    document.getElementById("profile-widget-streak").innerText = `${this.user.streak} ngày học`;
    document.getElementById("avatar-letter").innerText = this.user.name.charAt(0).toUpperCase();
    this.switchPage("dashboard");
  }

  renderDashboard() {
    document.getElementById("dash-welcome-name").innerText = this.user.name;
    document.getElementById("dash-streak-val").innerText = `${this.user.streak} ngày`;
    
    const vocabDue = this.user.vocabulary.filter(v => {
      if (!v.nextReview) return true;
      return new Date(v.nextReview) <= new Date();
    }).length;
    document.getElementById("dash-vocab-val").innerText = `${vocabDue} từ`;
    
    const bands = Object.values(this.user.skills);
    const avgBand = (bands.reduce((a, b) => a + b, 0) / 4).toFixed(2);
    document.getElementById("dash-band-val").innerText = `Band ${avgBand}`;
    
    const targetEl = document.getElementById("dash-guidance-text");
    if (avgBand < 5.0) {
      targetEl.innerHTML = `<span style="color:var(--color-danger)">Mức hiện tại: ~4.0 - 4.5.</span> Cần học kỹ từ vựng và làm trắc nghiệm ngữ pháp. Vui lòng bấm vào icon nút **Hỗ trợ (?)** màu xanh góc phải bên dưới để xem hướng dẫn học 5 bước hàng ngày.`;
    } else if (avgBand < 6.0) {
      targetEl.innerHTML = `<span style="color:var(--color-warning)">Mức hiện tại: ~5.0 - 5.5.</span> Tiến bộ tốt! Bạn hãy tận dụng mục Speaking để tập trả lời to rõ qua micro và viết nhiều hơn ở phần Writing.`;
    } else {
      targetEl.innerHTML = `<span style="color:var(--color-success)">Mức hiện tại: ~6.0+.</span> Mục tiêu đã đạt! Hãy thử sức đề thi Mock Test tổng quan hoặc mở mục Trợ Lý Ảo để trò chuyện bằng Tiếng Anh.`;
    }

    const remediationContainer = document.getElementById("dash-remediation-container");
    if (this.remediationPlan) {
      const unit = ieltsData.units.find(u => u.id === this.remediationPlan.unitId);
      remediationContainer.style.display = "flex";
      
      const vDone = this.remediationPlan.tasks.vocabReviewed ? "<s>Review Flashcards</s> ✅" : "Review toàn bộ Flashcards từ vựng (cho điểm đánh giá >= 4)";
      const gDone = this.remediationPlan.tasks.grammarPassed ? "<s>Luyện tập Ngữ pháp đạt 100%</s> ✅" : "Làm lại bài luyện tập Ngữ pháp đạt điểm tuyệt đối";
      
      remediationContainer.innerHTML = `
        <div class="remediation-icon"><svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg></div>
        <div class="remediation-details">
          <h4>Kế hoạch Khắc phục & Cải thiện - Unit ${unit.id}: ${unit.title}</h4>
          <p>Bài kiểm tra chưa đạt 60%. Vui lòng thực hiện các bước khắc phục dưới đây để được thi lại:</p>
          <ul class="remediation-list">
            <li>• ${vDone}</li>
            <li>• ${gDone}</li>
          </ul>
          <button class="btn btn-primary" style="margin-top: 1rem" onclick="app.startUnitPractice(${unit.id})">Tới trang khắc phục lỗi Unit ${unit.id}</button>
        </div>
      `;
    } else {
      remediationContainer.style.display = "none";
    }

    const historyList = document.getElementById("dash-history-list");
    historyList.innerHTML = "";
    
    const recentLogs = this.user.history.slice(-3).reverse();
    if (recentLogs.length === 0) {
      historyList.innerHTML = `<li style="color:var(--text-muted)">Chưa có lịch sử học tập.</li>`;
    } else {
      recentLogs.forEach(log => {
        const li = document.createElement("li");
        li.style.marginBottom = "1rem";
        li.style.borderBottom = "1px solid rgba(255,255,255,0.03)";
        li.style.paddingBottom = "0.5rem";
        li.innerHTML = `
          <div style="display:flex; justify-content:space-between; font-size:0.85rem; color:var(--color-primary)">
            <strong>${log.activity}</strong>
            <span>${log.date}</span>
          </div>
          <div style="font-size:0.9rem; color:var(--text-main); margin-top:0.25rem">${log.details}</div>
        `;
        historyList.appendChild(li);
      });
    }
  }

  renderRoadmap() {
    const container = document.getElementById("roadmap-list");
    container.innerHTML = "";

    ieltsData.units.forEach(unit => {
      const isCompleted = this.user.completedUnits.includes(unit.id);
      const isActive = unit.id === this.activeUnitId && !this.remediationPlan;
      const isLocked = unit.id > this.activeUnitId || (this.remediationPlan && unit.id !== this.remediationPlan.unitId);

      let statusClass = "locked";
      let badgeHtml = `<span class="node-badge badge-locked">Đang khóa</span>`;
      let actionBtnText = "Bắt đầu học";
      
      if (isCompleted) {
        statusClass = "completed";
        badgeHtml = `<span class="node-badge badge-completed">Hoàn thành</span>`;
        actionBtnText = "Học lại";
      } else if (isActive) {
        statusClass = "active";
        badgeHtml = `<span class="node-badge badge-active">Đang học</span>`;
        actionBtnText = "Tiếp tục học";
      } else if (this.remediationPlan && unit.id === this.remediationPlan.unitId) {
        statusClass = "active";
        badgeHtml = `<span class="node-badge badge-locked" style="background:var(--color-danger-glow); color:var(--color-danger)">Cần cải thiện</span>`;
        actionBtnText = "Khắc phục lỗi";
      }

      const nodeDiv = document.createElement("div");
      nodeDiv.className = `roadmap-node ${statusClass}`;
      nodeDiv.innerHTML = `
        <div class="node-bullet"></div>
        <div class="node-content">
          <div class="node-info">
            <h4>Unit ${unit.id}: ${unit.title} (${unit.vietnameseTitle})</h4>
            <p>${unit.description}</p>
            <div style="margin-top: 0.5rem">${badgeHtml}</div>
          </div>
          <button class="node-action-btn" onclick="app.startUnitPractice(${unit.id})" ${isLocked ? 'disabled' : ''}>
            ${actionBtnText}
          </button>
        </div>
      `;
      container.appendChild(nodeDiv);
    });
  }

  // --- Vocabulary Box & Grammar Roadmap Sub-tabs logic ---
  switchVocabSubTab(subtabId) {
    this.activeVocabSubTab = subtabId;
    
    // Toggle active button
    document.querySelectorAll("[id^='vsub-btn-']").forEach(btn => btn.classList.remove("active"));
    const activeBtn = document.getElementById(`vsub-btn-${subtabId}`);
    if (activeBtn) activeBtn.classList.add("active");

    // Toggle active subtab content
    document.querySelectorAll(".vocab-subtab-content").forEach(el => el.style.display = "none");
    const activeTabEl = document.getElementById(`vsub-tab-${subtabId}`);
    if (activeTabEl) activeTabEl.style.display = "block";

    if (subtabId === "flashcards") {
      this.renderFlashcards();
    } else if (subtabId === "learned") {
      this.renderLearnedVocabBank();
    } else if (subtabId === "grammar-roadmap") {
      this.renderGrammarRoadmap();
    } else if (subtabId === "interactive-reading") {
      this.renderInteractiveReading();
    } else if (subtabId === "pronunciation") {
      this.renderPronunciationDrill();
    }
  }

  // --- Sub-tab 4: Interactive Reading (KippyAI-style) ---
  renderInteractiveReading() {
    const container = document.getElementById("interactive-reading-container");
    if (!container || !ieltsData.readingPracticeData) return;
    container.innerHTML = "";

    const headerPanel = document.createElement("div");
    headerPanel.className = "glass-panel";
    headerPanel.style.marginBottom = "1.5rem";
    headerPanel.innerHTML = `
      <h3 class="section-title" style="font-size:1.35rem; margin-bottom:0.5rem;">📖 Đọc Tương Tác - Bấm Từ Xem Nghĩa & Nghe Phát Âm</h3>
      <p style="color:var(--text-muted); font-size:0.9rem;">Bấm vào <strong>bất kỳ từ nào</strong> trong đoạn văn để xem nghĩa tiếng Việt + phiên âm IPA + nghe phát âm. Bấm 🔊 để nghe toàn bộ câu.</p>
    `;
    container.appendChild(headerPanel);

    ieltsData.readingPracticeData.forEach(passage => {
      const card = document.createElement("div");
      card.className = "ir-passage-card";
      
      let badgeColor = passage.level === "Band 5.0" ? "var(--color-success)" : "var(--color-warning)";
      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
          <div>
            <h4>${passage.title}</h4>
            <span style="font-size:0.85rem; color:var(--text-muted)">${passage.titleVi}</span>
          </div>
          <span style="background:rgba(99,102,241,0.1); color:${badgeColor}; padding:0.25rem 0.6rem; border-radius:8px; font-size:0.78rem; font-weight:600; border:1px solid rgba(99,102,241,0.2)">${passage.level}</span>
        </div>
        <div class="ir-sentences-area" id="ir-passage-${passage.id}"></div>
      `;
      container.appendChild(card);
      
      const sentencesArea = document.getElementById(`ir-passage-${passage.id}`);
      
      passage.sentences.forEach((sentence, sIdx) => {
        const row = document.createElement("div");
        row.className = "ir-sentence-row";
        
        const allTextWords = sentence.text.split(/\s+/);
        
        allTextWords.forEach(rawWord => {
          const cleanWord = rawWord.replace(/[.,!?;:'"()]/g, "");
          const punctuation = rawWord.replace(cleanWord, "");
          
          const wordData = sentence.words.find(w => w.w.toLowerCase() === cleanWord.toLowerCase());
          
          const wordSpan = document.createElement("span");
          wordSpan.className = "ir-word";
          wordSpan.textContent = rawWord;
          
          if (wordData) {
            wordSpan.setAttribute("data-vi", wordData.vi);
            wordSpan.setAttribute("data-ipa", wordData.ipa);
            wordSpan.setAttribute("data-speak", cleanWord);
            
            wordSpan.addEventListener("click", (e) => {
              e.stopPropagation();
              // Remove all other active tooltips
              document.querySelectorAll(".ir-word-tooltip").forEach(t => t.remove());
              document.querySelectorAll(".ir-word.active-word").forEach(w => w.classList.remove("active-word"));
              
              wordSpan.classList.add("active-word");
              
              const tooltip = document.createElement("div");
              tooltip.className = "ir-word-tooltip";
              tooltip.innerHTML = `
                <span class="ir-tooltip-vi">${wordData.vi}</span>
                <span class="ir-tooltip-ipa">${wordData.ipa}</span>
              `;
              wordSpan.appendChild(tooltip);
              
              // Speak the word
              speechEngine.speak(cleanWord, "US");
              
              // Auto remove tooltip after 3s
              setTimeout(() => {
                tooltip.remove();
                wordSpan.classList.remove("active-word");
              }, 3000);
            });
          }
          
          row.appendChild(wordSpan);
        });
        
        // Listen to full sentence button
        const listenBtn = document.createElement("button");
        listenBtn.className = "ir-listen-sentence-btn";
        listenBtn.innerHTML = `🔊 Nghe câu`;
        listenBtn.addEventListener("click", () => {
          speechEngine.speak(sentence.text, "US");
        });
        row.appendChild(listenBtn);
        
        sentencesArea.appendChild(row);
      });
    });

    // Close tooltips when clicking outside
    document.addEventListener("click", () => {
      document.querySelectorAll(".ir-word-tooltip").forEach(t => t.remove());
      document.querySelectorAll(".ir-word.active-word").forEach(w => w.classList.remove("active-word"));
    }, { once: true });
  }

  // --- Sub-tab 5: Pronunciation Drill ---
  renderPronunciationDrill() {
    const container = document.getElementById("pronunciation-container");
    if (!container || !ieltsData.pronunciationDrills) return;
    container.innerHTML = "";

    const headerPanel = document.createElement("div");
    headerPanel.className = "glass-panel";
    headerPanel.style.marginBottom = "1.5rem";
    headerPanel.innerHTML = `
      <h3 class="section-title" style="font-size:1.35rem; margin-bottom:0.5rem;">🎤 Luyện Phát Âm Từ Vựng IELTS</h3>
      <p style="color:var(--text-muted); font-size:0.9rem;">Bấm <strong>🔊</strong> để nghe mẫu phát âm chuẩn. Sau đó bấm <strong>🎙</strong> để ghi âm giọng của bạn. Hệ thống sẽ so sánh và chấm điểm ngay lập tức.</p>
    `;
    container.appendChild(headerPanel);

    // Group by level
    const levels = [
      { num: 1, label: "Cơ bản (Easy)", color: "var(--color-success)" },
      { num: 2, label: "Trung bình (Medium)", color: "var(--color-warning)" },
      { num: 3, label: "Nâng cao (Hard)", color: "var(--color-danger)" }
    ];

    levels.forEach(lv => {
      const words = ieltsData.pronunciationDrills.filter(d => d.level === lv.num);
      if (words.length === 0) return;

      const sectionDiv = document.createElement("div");
      sectionDiv.style.marginBottom = "1.5rem";
      sectionDiv.innerHTML = `
        <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.75rem;">
          <span style="width:10px; height:10px; border-radius:50%; background:${lv.color}; display:inline-block;"></span>
          <strong style="font-size:1rem; color:var(--text-bright);">${lv.label}</strong>
          <span style="font-size:0.8rem; color:var(--text-muted);">(${words.length} từ)</span>
        </div>
      `;

      words.forEach(drill => {
        const card = document.createElement("div");
        card.className = "pron-card";
        card.id = `pron-card-${drill.id}`;
        card.innerHTML = `
          <div class="pron-word-section">
            <span class="pron-word-main">${drill.word}</span>
            <span class="pron-ipa">${drill.ipa}</span>
            <span class="pron-vi">${drill.vi}</span>
            <div class="pron-transcript" id="pron-transcript-${drill.id}"></div>
          </div>
          <div class="pron-controls">
            <div id="pron-result-${drill.id}"></div>
            <button class="pron-listen-btn" onclick="speechEngine.speak('${drill.word}', 'US')" title="Nghe mẫu phát âm chuẩn">
              <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M12 18.75V5.25L7.75 9.5H4.5v5h3.25L12 18.75z"/></svg>
            </button>
            <button class="pron-record-btn" id="pron-rec-${drill.id}" onclick="app.startPronunciationRecord(${drill.id}, '${drill.word}')" title="Ghi âm phát âm của bạn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/></svg>
            </button>
          </div>
        `;
        sectionDiv.appendChild(card);
      });

      container.appendChild(sectionDiv);
    });
  }

  startPronunciationRecord(drillId, targetWord) {
    const recBtn = document.getElementById(`pron-rec-${drillId}`);
    const resultDiv = document.getElementById(`pron-result-${drillId}`);
    const transcriptDiv = document.getElementById(`pron-transcript-${drillId}`);

    if (speechEngine.isRecording) {
      speechEngine.stopListening();
      if (recBtn) recBtn.classList.remove("recording");
      return;
    }

    if (recBtn) recBtn.classList.add("recording");
    if (resultDiv) resultDiv.innerHTML = "";
    if (transcriptDiv) transcriptDiv.innerText = "Đang nghe...";

    speechEngine.startListening(
      (transcript) => {
        if (recBtn) recBtn.classList.remove("recording");
        if (transcriptDiv) transcriptDiv.innerText = `Bạn nói: "${transcript}"`;

        // Compare pronunciation
        const target = targetWord.toLowerCase().trim();
        const spoken = transcript.toLowerCase().trim();
        
        let resultClass = "";
        let resultText = "";

        if (spoken === target || spoken.includes(target) || target.includes(spoken)) {
          resultClass = "correct";
          resultText = "✓ Đúng!";
        } else {
          // Check partial match (at least 60% of characters match)
          let matchChars = 0;
          const shorter = Math.min(target.length, spoken.length);
          for (let i = 0; i < shorter; i++) {
            if (target[i] === spoken[i]) matchChars++;
          }
          const similarity = matchChars / target.length;
          
          if (similarity >= 0.6) {
            resultClass = "partial";
            resultText = "~ Gần đúng";
          } else {
            resultClass = "incorrect";
            resultText = "✗ Sai";
          }
        }

        if (resultDiv) {
          resultDiv.innerHTML = `<span class="pron-result-badge ${resultClass}">${resultText}</span>`;
        }

        // Log to history
        this.user.history.push({
          date: new Date().toLocaleDateString('vi-VN'),
          activity: `Luyện phát âm: "${targetWord}"`,
          details: `Bạn nói: "${transcript}" → ${resultText}`
        });
        this.save();
      },
      (error) => {
        if (recBtn) recBtn.classList.remove("recording");
        if (transcriptDiv) transcriptDiv.innerText = `Lỗi: ${error}. Vui lòng dùng Chrome/Edge.`;
      },
      () => {
        if (recBtn) recBtn.classList.remove("recording");
      }
    );
  }


  toggleGrammarCheatsheetModal(show) {
    const modal = document.getElementById("grammar-cheatsheet-modal");
    if (!modal) return;

    if (show) {
      modal.classList.add("active");
      this.renderGrammarCheatsheetContent();
    } else {
      modal.classList.remove("active");
    }
  }

  renderGrammarCheatsheetContent() {
    const bodyEl = document.getElementById("grammar-cheatsheet-body");
    if (!bodyEl) return;

    const data = ieltsData.grammarCheatsheet;
    let html = `<p style="margin-bottom:1.25rem; color:var(--text-muted)">Bảng tra cứu quy tắc nhận biết dạng từ & cấu trúc giúp bạn làm đúng bài tập điền từ Reading nhanh chóng:</p>`;

    data.sections.forEach(sec => {
      html += `
        <div class="grammar-cheatsheet-section">
          <h4>${sec.heading}</h4>
          ${sec.rules.map(r => `
            <div class="cheatsheet-rule-item">
              <strong>• ${r.label}:</strong> ${r.detail}
            </div>
          `).join('')}
        </div>
      `;
    });

    bodyEl.innerHTML = html;
  }

  renderVocabBox() {
    if (!this.activeVocabSubTab) this.activeVocabSubTab = "flashcards";
    this.switchVocabSubTab(this.activeVocabSubTab);
  }

  renderFlashcards() {
    const listContainer = document.getElementById("vocab-box-list");
    if (!listContainer) return;
    listContainer.innerHTML = "";

    const userVocab = this.user.vocabulary;
    const sorted = [...userVocab].sort((a, b) => {
      const aDue = !a.nextReview || new Date(a.nextReview) <= new Date();
      const bDue = !b.nextReview || new Date(b.nextReview) <= new Date();
      if (aDue && !bDue) return -1;
      if (!aDue && bDue) return 1;
      return a.word.localeCompare(b.word);
    });

    if (sorted.length === 0) {
      listContainer.innerHTML = `<p style="color:var(--text-muted)">Chưa có từ vựng nào trong danh sách học.</p>`;
      return;
    }

    sorted.forEach(v => {
      const isDue = !v.nextReview || new Date(v.nextReview) <= new Date();
      const statusBadge = isDue 
        ? `<span style="color:var(--color-danger); font-size:0.75rem; background:rgba(239,68,68,0.1); padding:0.2rem 0.5rem; border-radius:10px; border: 1px solid rgba(239,68,68,0.3)">Cần ôn tập</span>`
        : `<span style="color:var(--color-success); font-size:0.75rem; background:var(--color-success-glow); padding:0.2rem 0.5rem; border-radius:10px">Thuộc bài</span>`;

      const card = document.createElement("div");
      card.className = "glass-panel";
      card.style.padding = "1.25rem";
      card.style.display = "flex";
      card.style.justifyContent = "space-between";
      card.style.alignItems = "center";
      card.style.marginBottom = "1rem";
      card.innerHTML = `
        <div>
          <div style="display:flex; align-items:center; gap:0.5rem">
            <strong style="font-size:1.25rem; font-family:var(--font-heading); color:var(--text-bright)">${v.word}</strong>
            <span style="font-size:0.8rem; color:var(--text-muted)">(${v.pos})</span>
            ${statusBadge}
          </div>
          <div style="font-size:0.9rem; color:var(--color-primary); margin-top:0.25rem">${v.meaning}</div>
          <div style="font-size:0.85rem; color:var(--text-muted); font-style:italic; margin-top:0.5rem">"${v.example}"</div>
        </div>
        <div style="display:flex; gap:0.5rem">
          <button class="audio-btn" onclick="speechEngine.speak('${v.word}')">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M12 18.75V5.25L7.75 9.5H4.5v5h3.25L12 18.75z"/></svg>
          </button>
          <button class="node-action-btn" onclick="app.showSingleFlashcard('${v.word}')">Ôn tập</button>
        </div>
      `;
      listContainer.appendChild(card);
    });
  }

  // --- Sub-tab 2: Learned Vocab Bank from exercises ---
  renderLearnedVocabBank() {
    const container = document.getElementById("learned-vocab-container");
    if (!container) return;
    container.innerHTML = "";

    if (!this.user.learnedSentenceVocab) {
      this.user.learnedSentenceVocab = [];
    }

    const learnedList = this.user.learnedSentenceVocab;

    if (learnedList.length === 0) {
      container.innerHTML = `
        <div class="glass-panel" style="text-align:center; padding:2.5rem;">
          <h4 style="color:var(--text-muted); margin-bottom:0.5rem;">Chưa có từ vựng bài tập được tích lũy</h4>
          <p style="font-size:0.9rem; color:var(--text-muted)">Khi bạn thực hành các bài tập trong Lộ trình Ngữ pháp, từ vựng và giải thích trong câu sẽ tự động được thu thập vào đây để bạn tra cứu bất kỳ lúc nào!</p>
          <button class="btn btn-primary" style="margin-top:1rem;" onclick="app.switchVocabSubTab('grammar-roadmap')">Làm Bài Tập Ngữ Pháp Ngay</button>
        </div>
      `;
      return;
    }

    learnedList.forEach(v => {
      const card = document.createElement("div");
      card.className = "learned-vocab-card";
      card.innerHTML = `
        <div>
          <div style="display:flex; align-items:center; gap:0.5rem;">
            <strong style="font-size:1.15rem; color:var(--text-bright);">${v.word}</strong>
            <span style="font-size:0.8rem; color:var(--text-muted);">(${v.pos || 'vocab'})</span>
          </div>
          <div style="font-size:0.9rem; color:var(--color-primary); margin-top:0.2rem;">${v.meaning}</div>
        </div>
        <button class="audio-btn" onclick="speechEngine.speak('${v.word}')" title="Nghe phát âm">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M12 18.75V5.25L7.75 9.5H4.5v5h3.25L12 18.75z"/></svg>
        </button>
      `;
      container.appendChild(card);
    });
  }

  // --- Sub-tab 3: Grammar & Gap-fill Roadmap Trainer ---
  renderGrammarRoadmap() {
    const container = document.getElementById("grammar-roadmap-container");
    if (!container) return;

    const data = ieltsData.grammarRoadmapData;
    let html = `
      <div class="glass-panel" style="margin-bottom:1.5rem;">
        <h3 class="section-title" style="font-size:1.35rem; margin-bottom:0.5rem;">${data.title}</h3>
        <p style="color:var(--text-muted); font-size:0.95rem;">${data.vietnameseTitle}</p>
      </div>
    `;

    data.modules.forEach((mod, mIdx) => {
      html += `
        <div class="glass-panel" style="margin-bottom:1.5rem;">
          <h4 style="font-family:var(--font-heading); color:var(--color-primary); font-size:1.2rem; margin-bottom:0.4rem;">
            📌 Phần ${mIdx + 1}: ${mod.title}
          </h4>
          <p style="font-size:0.88rem; color:var(--text-muted); margin-bottom:1.25rem;">${mod.description}</p>

          <div class="grammar-questions-group">
            ${mod.questions.map((q, qIdx) => `
              <div class="exercise-group" id="groadmap-q-${q.id}">
                <div class="question-text"><strong>Câu ${qIdx + 1}:</strong> ${q.question}</div>
                <div class="options-list">
                  ${q.options.map(opt => `
                    <button type="button" class="option-item" onclick="app.answerGrammarRoadmap(${q.id}, '${opt}', this)">
                      ${opt}
                    </button>
                  `).join('')}
                </div>
                
                <!-- Explanation and Sentence Vocab Breakdown Box -->
                <div class="explanation-box" id="groadmap-exp-${q.id}" style="margin-top:1rem; display:none;">
                  <div style="color:var(--color-primary); margin-bottom:0.75rem; font-size:0.9rem;">
                    <strong>💡 Giải thích ngữ pháp:</strong> ${q.explanation}
                  </div>
                  
                  <div style="background:rgba(0,0,0,0.2); padding:0.85rem; border-radius:10px; border:1px solid var(--border-glass);">
                    <strong style="font-size:0.85rem; color:var(--text-bright); display:block; margin-bottom:0.35rem;">📚 Từ vựng & Cấu trúc trong câu:</strong>
                    <div>
                      ${q.vocabInSentence.map(v => `
                        <span class="sentence-vocab-badge">
                          <strong>${v.word}</strong> (${v.pos}): ${v.meaning}
                        </span>
                      `).join('')}
                    </div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  answerGrammarRoadmap(qId, selectedOpt, btn) {
    const parentGroup = document.getElementById(`groadmap-q-${qId}`);
    if (!parentGroup) return;

    // Find question object
    let matchedQ = null;
    ieltsData.grammarRoadmapData.modules.forEach(m => {
      m.questions.forEach(q => {
        if (q.id === qId) matchedQ = q;
      });
    });

    if (!matchedQ) return;

    const options = parentGroup.querySelectorAll(".option-item");
    options.forEach(b => {
      const val = b.innerText.trim();
      if (val === matchedQ.answer) {
        b.classList.add("correct");
      } else if (val === selectedOpt) {
        b.classList.add("wrong");
      }
      b.disabled = true;
    });

    // Reveal explanation & sentence vocabulary
    const expBox = document.getElementById(`groadmap-exp-${qId}`);
    if (expBox) expBox.style.display = "block";

    // Auto add sentence vocabulary to user's learned vocabulary bank
    if (!this.user.learnedSentenceVocab) this.user.learnedSentenceVocab = [];
    matchedQ.vocabInSentence.forEach(v => {
      const exists = this.user.learnedSentenceVocab.some(item => item.word.toLowerCase() === v.word.toLowerCase());
      if (!exists) {
        this.user.learnedSentenceVocab.push(v);
      }
    });

    this.save();
  }


  showSingleFlashcard(wordText) {
    const vocabObj = this.user.vocabulary.find(v => v.word === wordText);
    if (!vocabObj) return;

    this.activeUnitId = vocabObj.unitId;
    this.startUnitPractice(this.activeUnitId);
    
    this.switchTab("vocabulary");
    const matchedIdx = ieltsData.units[this.activeUnitId-1].vocabulary.findIndex(v => v.word === wordText);
    if (matchedIdx !== -1) {
      this.currentVocabIndex = matchedIdx;
      this.renderFlashcard();
    }
  }

  renderAnalytics() {
    const ctx = document.getElementById("analytics-chart-canvas");
    if (!ctx) return;

    const skills = this.user.skills;
    const dataValues = [skills.Listening, skills.Speaking, skills.Reading, skills.Writing];
    
    if (this.radarChart) {
      this.radarChart.destroy();
    }

    if (window.Chart) {
      this.radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
          labels: ['Nghe (Listening)', 'Nói (Speaking)', 'Đọc (Reading)', 'Viết (Writing)'],
          datasets: [{
            label: 'Band Điểm Kỹ Năng',
            data: dataValues,
            fill: true,
            backgroundColor: 'rgba(99, 102, 241, 0.2)',
            borderColor: 'rgb(99, 102, 241)',
            pointBackgroundColor: 'rgb(168, 85, 247)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(99, 102, 241)'
          }]
        },
        options: {
          elements: { line: { borderWidth: 3 } },
          scales: {
            r: {
              angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
              grid: { color: 'rgba(255, 255, 255, 0.1)' },
              pointLabels: { color: '#9ca3af', font: { family: 'Outfit', size: 13 } },
              ticks: { color: '#6b7280', backdropColor: 'transparent', stepSize: 1.0, min: 0, max: 9 }
            }
          },
          plugins: { legend: { labels: { color: '#f3f4f6', font: { family: 'Outfit' } } } }
        }
      });
    }

    const average = (dataValues.reduce((a,b)=>a+b, 0)/4).toFixed(2);
    document.getElementById("avg-score-badge").innerText = `Band ${average}`;
    
    let advice = "";
    if (average < 5.0) {
      advice = "<strong>Định hướng học tập:</strong> Bạn đang ở giai đoạn xây dựng nền tảng. Hãy tập trung học hết từ vựng Unit 1 và Unit 2. Hệ thống ghi nhận vốn từ vựng của bạn còn mỏng, dễ bị quên nếu không ôn tập hàng ngày. Hãy duy trì thói quen review Flashcard tối thiểu 10 từ/ngày.";
    } else if (average < 6.0) {
      advice = "<strong>Định hướng học tập:</strong> Bạn đang tiệm cận mục tiêu 6.0. Kỹ năng Viết (Writing) và Nói (Speaking) hiện tại là rào cản lớn nhất. Nên cải thiện tính mạch lạc (Coherence) bằng cách sử dụng các liên từ trong Task 2 và tập nói to các câu dài trong phần Speaking Part 2.";
    } else {
      advice = "<strong>Định hướng học tập:</strong> Chúc mừng bạn đã vượt mốc 6.0! Kỹ năng đọc hiểu học thuật và nghe chi tiết của bạn đã ở mức tốt. Bạn nên tập trung vào từ vựng chuyên sâu (academic collocations) và làm các bài thi thử hoàn chỉnh để nâng band lên cao hơn.";
    }
    document.getElementById("analytics-advice").innerHTML = advice;
  }

  // --- Help Modal Trigger ---
  toggleHelpGuideModal(show) {
    const modal = document.getElementById("help-guide-modal");
    if (show) {
      modal.classList.add("active");
    } else {
      modal.classList.remove("active");
    }
  }

  // --- Unit Learning Session ---
  startUnitPractice(unitId) {
    this.activeUnitId = unitId;
    this.switchPage("unit-practice");
    
    const unit = ieltsData.units[unitId - 1];
    document.getElementById("practice-unit-title").innerText = `Unit ${unit.id}: ${unit.title}`;
    document.getElementById("practice-unit-vi").innerText = unit.vietnameseTitle;
    
    this.currentUnitSubmissions = {
      grammar: false,
      reading: false,
      listening: false,
      speaking: false,
      writing: false
    };

    // Auto show/hide start unit test button if Writing completed
    const testBtn = document.getElementById("start-unit-test-btn");
    testBtn.style.display = "none";

    this.currentVocabIndex = 0;
    this.switchTab("vocabulary");
  }

  switchTab(tabId) {
    this.activeTab = tabId;
    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
    document.querySelectorAll(".skill-tab-content").forEach(content => content.classList.remove("active"));
    
    const targetBtn = document.querySelector(`.tab-btn[onclick="app.switchTab('${tabId}')"]`);
    if (targetBtn) targetBtn.classList.add("active");
    
    const targetContent = document.getElementById(`tab-${tabId}`);
    if (targetContent) targetContent.classList.add("active");

    if (tabId === "vocabulary") {
      this.renderFlashcard();
    } else if (tabId === "grammar") {
      this.renderGrammar();
    } else if (tabId === "reading") {
      this.renderReading();
    } else if (tabId === "listening") {
      this.renderListening();
    } else if (tabId === "speaking") {
      this.renderSpeaking();
    } else if (tabId === "writing") {
      this.renderWriting();
    }
  }

  // Vocabulary Tab
  renderFlashcard() {
    const unit = ieltsData.units[this.activeUnitId - 1];
    const vocabList = unit.vocabulary;
    const currentWord = vocabList[this.currentVocabIndex];

    const wrapper = document.getElementById("flashcard-container");
    wrapper.innerHTML = `
      <div class="flashcard-wrapper">
        <div class="flashcard" id="active-flashcard" onclick="this.classList.toggle('flipped')">
          <div class="card-face card-front">
            <div class="card-top">
              <div>
                <span class="card-pos">${currentWord.pos}</span>
                <span class="card-ipa">${currentWord.ipa}</span>
              </div>
              <button class="audio-btn" onclick="event.stopPropagation(); speechEngine.speak('${currentWord.word}')">
                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M12 18.75V5.25L7.75 9.5H4.5v5h3.25L12 18.75z"/></svg>
              </button>
            </div>
            <div class="card-middle">
              <div class="card-word">${currentWord.word}</div>
              <p style="font-size:0.85rem; color:var(--text-muted); margin-top:1.5rem">Click để lật xem định nghĩa nghĩa & ví dụ</p>
            </div>
            <div></div>
          </div>
          <div class="card-face card-back">
            <div class="card-top">
              <span class="card-pos">${currentWord.pos}</span>
              <strong style="color:var(--text-muted)">Unit ${unit.id}</strong>
            </div>
            <div class="card-middle">
              <div class="card-meaning">${currentWord.meaning}</div>
              <div class="card-def">${currentWord.definition}</div>
            </div>
            <div class="card-bottom">
              <div class="card-example">"${currentWord.example}"</div>
              <div class="card-example-vi">${currentWord.exampleVi}</div>
            </div>
          </div>
        </div>
      </div>

      <div style="text-align:center; margin-bottom: 1.5rem">
        <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom: 0.5rem">Độ nhớ từ vựng này của bạn (1 = Quên hoàn toàn, 5 = Nhớ kỹ):</p>
        <div class="rating-bar">
          <button class="rating-btn" data-rating="1" onclick="app.rateVocabWord('${currentWord.word}', 1)">1 (Quên)</button>
          <button class="rating-btn" data-rating="2" onclick="app.rateVocabWord('${currentWord.word}', 2)">2</button>
          <button class="rating-btn" data-rating="3" onclick="app.rateVocabWord('${currentWord.word}', 3)">3</button>
          <button class="rating-btn" data-rating="4" onclick="app.rateVocabWord('${currentWord.word}', 4)">4</button>
          <button class="rating-btn" data-rating="5" onclick="app.rateVocabWord('${currentWord.word}', 5)">5 (Thuộc)</button>
        </div>
      </div>

      <div style="display:flex; justify-content:space-between; width:100%; max-width:480px; align-items:center">
        <button class="btn btn-secondary" onclick="app.changeVocabPage(-1)" ${this.currentVocabIndex === 0 ? 'disabled' : ''}>Trước đó</button>
        <span style="font-size:0.9rem; color:var(--text-muted)">Từ ${this.currentVocabIndex + 1} / ${vocabList.length}</span>
        <button class="btn btn-secondary" onclick="app.changeVocabPage(1)" ${this.currentVocabIndex === vocabList.length - 1 ? 'disabled' : ''}>Kế tiếp</button>
      </div>
    `;
  }

  changeVocabPage(dir) {
    this.currentVocabIndex += dir;
    this.renderFlashcard();
  }

  rateVocabWord(word, rating) {
    const wordObj = this.user.vocabulary.find(v => v.word === word);
    if (!wordObj) return;

    let easiness = wordObj.easiness || 2.5;
    let repetitions = wordObj.repetitions || 0;
    let interval = wordObj.interval || 0;

    if (rating >= 3) {
      if (repetitions === 0) {
        interval = 1;
      } else if (repetitions === 1) {
        interval = 3;
      } else {
        interval = Math.round(interval * easiness);
      }
      repetitions++;
    } else {
      repetitions = 0;
      interval = 1;
    }

    easiness = easiness + (0.1 - (5 - rating) * (0.08 + (5 - rating) * 0.02));
    if (easiness < 1.3) easiness = 1.3;

    const nextReviewDate = new Date();
    nextReviewDate.setDate(nextReviewDate.getDate() + interval);

    wordObj.easiness = easiness;
    wordObj.repetitions = repetitions;
    wordObj.interval = interval;
    wordObj.nextReview = nextReviewDate.toISOString();

    this.save();
    
    const cardEl = document.getElementById("active-flashcard");
    if (cardEl) {
      cardEl.style.borderColor = rating >= 4 ? "var(--color-success)" : "var(--color-warning)";
    }
    
    this.user.studyMinutes += 1;
    this.save();

    if (this.remediationPlan && this.remediationPlan.unitId === this.activeUnitId) {
      const unitVocabList = this.user.vocabulary.filter(v => v.unitId === this.activeUnitId);
      const allPassed = unitVocabList.every(v => v.repetitions > 0 && v.interval >= 3);
      if (allPassed) {
        this.remediationPlan.tasks.vocabReviewed = true;
        this.save();
      }
    }

    setTimeout(() => {
      const unit = ieltsData.units[this.activeUnitId - 1];
      if (this.currentVocabIndex < unit.vocabulary.length - 1) {
        this.changeVocabPage(1);
      } else {
        alert("Đã học xong danh sách từ vựng của Unit! Vui lòng chuyển sang tab Ngữ pháp.");
      }
    }, 600);
  }

  // Grammar Tab
  renderGrammar() {
    const unit = ieltsData.units[this.activeUnitId - 1];
    const grammar = unit.grammar;

    const container = document.getElementById("tab-grammar");
    container.innerHTML = `
      <div class="glass-panel">
        <h3 class="section-title" style="font-size:1.5rem; margin-bottom:1rem">${grammar.title}</h3>
        <p style="color:#a5b4fc; font-weight:bold; margin-bottom:0.75rem">${grammar.explanation}</p>
        <div style="background:rgba(0,0,0,0.2); padding:1rem; border-radius:12px; border:1px solid var(--border-glass)">
          ${grammar.rules.map(r => `
            <div style="margin-bottom:0.75rem">
              <strong style="color:var(--text-bright)">${r.eng}</strong>
              <div style="font-size:0.85rem; color:var(--text-muted)">${r.vi}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="glass-panel">
        <h4 style="font-family:var(--font-heading); font-size:1.25rem; margin-bottom:1.5rem">Bài tập Ngữ pháp áp dụng:</h4>
        <form id="grammar-form" onsubmit="event.preventDefault(); app.submitGrammar();">
          ${grammar.exercises.map((ex, idx) => `
            <div class="exercise-group" data-idx="${idx}">
              <div class="question-text">${idx+1}. ${ex.question}</div>
              <div class="options-list">
                ${ex.options.map(opt => `
                  <button type="button" class="option-item" onclick="app.selectGrammarOption(${idx}, '${opt}', this)">
                    ${opt}
                  </button>
                `).join('')}
              </div>
              <div class="explanation-box" style="margin-top:0.75rem; display:none; font-size:0.85rem; color:var(--color-primary)">
                <strong>Giải thích:</strong> ${ex.explanation}
              </div>
            </div>
          `).join('')}
          <div style="display:flex; justify-content:flex-end">
            <button type="submit" class="btn btn-primary" id="grammar-submit-btn">Nộp bài ngữ pháp</button>
          </div>
        </form>
      </div>
    `;
    this.grammarAnswers = {};
  }

  selectGrammarOption(exerciseIdx, selectedVal, btnElement) {
    if (this.currentUnitSubmissions.grammar) return;

    const parent = btnElement.parentElement;
    parent.querySelectorAll(".option-item").forEach(btn => btn.classList.remove("selected"));
    btnElement.classList.add("selected");
    
    this.grammarAnswers[exerciseIdx] = selectedVal;
  }

  submitGrammar() {
    if (this.currentUnitSubmissions.grammar) return;

    const unit = ieltsData.units[this.activeUnitId - 1];
    const exercises = unit.grammar.exercises;

    if (Object.keys(this.grammarAnswers).length < exercises.length) {
      alert("Vui lòng trả lời đầy đủ tất cả câu hỏi trước khi nộp!");
      return;
    }

    let correctCount = 0;
    exercises.forEach((ex, idx) => {
      const selected = this.grammarAnswers[idx];
      const card = document.querySelector(`.exercise-group[data-idx="${idx}"]`);
      const options = card.querySelectorAll(".option-item");
      const expBox = card.querySelector(".explanation-box");

      expBox.style.display = "block";

      options.forEach(btn => {
        const val = btn.innerText.trim();
        if (val === ex.answer) {
          btn.classList.add("correct");
        } else if (val === selected) {
          btn.classList.add("wrong");
        }
        btn.disabled = true;
      });

      if (selected === ex.answer) {
        correctCount++;
      }
    });

    this.currentUnitSubmissions.grammar = true;
    document.getElementById("grammar-submit-btn").style.display = "none";
    
    this.user.studyMinutes += 10;
    
    const pct = Math.round((correctCount / exercises.length) * 100);
    this.user.history.push({
      date: new Date().toLocaleDateString('vi-VN'),
      activity: `Luyện tập Ngữ pháp Unit ${this.activeUnitId}`,
      details: `Đạt ${correctCount}/${exercises.length} câu đúng (${pct}%).`
    });

    if (this.remediationPlan && this.remediationPlan.unitId === this.activeUnitId) {
      if (correctCount === exercises.length) {
        this.remediationPlan.tasks.grammarPassed = true;
        alert("Tuyệt vời! Bạn đã vượt qua bài tập ngữ pháp với điểm tuyệt đối.");
      } else {
        alert(`Bạn đạt ${correctCount}/${exercises.length} câu. Để hoàn thành mục tiêu cải thiện, bạn cần làm đúng toàn bộ 100% câu hỏi. Bạn có thể nhấn Học lại để thử sức.`);
        setTimeout(() => {
          this.currentUnitSubmissions.grammar = false;
          this.renderGrammar();
        }, 3000);
      }
    } else {
      alert(`Bài làm của bạn: ${correctCount}/${exercises.length} câu đúng. Hãy chuyển sang phần Reading.`);
    }

    this.save();
  }

  // Reading Tab
  renderReading() {
    const unit = ieltsData.units[this.activeUnitId - 1];
    const reading = unit.reading;

    const container = document.getElementById("tab-reading");
    container.innerHTML = `
      <div class="reading-layout">
        <div class="glass-panel" style="margin-bottom:0">
          <button class="passage-translation-toggle" onclick="app.toggleReadingTranslation()">
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 5h12M9 3v2m0 8a5 5 0 01-5-5h10a5 5 0 01-5 5zm5 2l5 5m0-5l-5 5"/></svg>
            Hiển thị dịch tiếng Việt
          </button>
          <div class="passage-box">
            <h3 style="font-family:var(--font-heading); font-size:1.5rem; margin-bottom:1rem">${reading.title}</h3>
            <p>${reading.passage}</p>
            <div class="vi-text" id="reading-vi-translation">
              <strong style="color:var(--text-bright)">Bản dịch Tiếng Việt:</strong>
              <p style="margin-top:0.5rem">${reading.passageVi}</p>
            </div>
          </div>
        </div>

        <div class="glass-panel" style="margin-bottom:0; max-height: 550px; overflow-y: auto;">
          <h4 style="font-family:var(--font-heading); font-size:1.25rem; margin-bottom:1.5rem">Câu hỏi Đọc hiểu (Reading Questions)</h4>
          <form id="reading-form" onsubmit="event.preventDefault(); app.submitReading();">
            ${reading.questions.map((q, idx) => `
              <div class="exercise-group" data-ridx="${idx}">
                <div style="font-size:0.75rem; color:var(--color-secondary); font-weight:bold; margin-bottom:0.25rem">
                  ${q.type === 'tfng' ? 'TRUE / FALSE / NOT GIVEN' : 'MULTIPLE CHOICE QUESTION'}
                </div>
                <div class="question-text">${idx+1}. ${q.question}</div>
                <div class="options-list">
                  ${q.options.map(opt => `
                    <button type="button" class="option-item" onclick="app.selectReadingOption(${idx}, '${opt}', this)">
                      ${opt}
                    </button>
                  `).join('')}
                </div>
                <div class="explanation-box" style="margin-top:0.75rem; display:none; font-size:0.85rem; color:var(--color-primary)">
                  <strong>Giải thích:</strong> ${q.explanation}
                </div>
              </div>
            `).join('')}
            <div style="display:flex; justify-content:flex-end">
              <button type="submit" class="btn btn-primary" id="reading-submit-btn">Nộp bài đọc</button>
            </div>
          </form>
        </div>
      </div>
    `;
    this.readingAnswers = {};
  }

  toggleReadingTranslation() {
    const translationDiv = document.getElementById("reading-vi-translation");
    translationDiv.classList.toggle("show");
  }

  selectReadingOption(qIdx, val, btn) {
    if (this.currentUnitSubmissions.reading) return;

    const parent = btn.parentElement;
    parent.querySelectorAll(".option-item").forEach(item => item.classList.remove("selected"));
    btn.classList.add("selected");
    
    this.readingAnswers[qIdx] = val;
  }

  submitReading() {
    if (this.currentUnitSubmissions.reading) return;

    const unit = ieltsData.units[this.activeUnitId - 1];
    const questions = unit.reading.questions;

    if (Object.keys(this.readingAnswers).length < questions.length) {
      alert("Vui lòng trả lời toàn bộ câu hỏi đọc hiểu!");
      return;
    }

    let correctCount = 0;
    questions.forEach((q, idx) => {
      const selected = this.readingAnswers[idx];
      const qBlock = document.querySelector(`.exercise-group[data-ridx="${idx}"]`);
      const options = qBlock.querySelectorAll(".option-item");
      const exp = qBlock.querySelector(".explanation-box");

      exp.style.display = "block";

      options.forEach(btn => {
        const val = btn.innerText.trim();
        if (val === q.answer) {
          btn.classList.add("correct");
        } else if (val === selected) {
          btn.classList.add("wrong");
        }
        btn.disabled = true;
      });

      if (selected === q.answer) {
        correctCount++;
      }
    });

    this.currentUnitSubmissions.reading = true;
    document.getElementById("reading-submit-btn").style.display = "none";

    this.user.studyMinutes += 15;
    const accuracy = correctCount / questions.length;
    this.user.skills.Reading = Math.min(9.0, parseFloat((this.user.skills.Reading + (accuracy * 0.1)).toFixed(2)));

    this.user.history.push({
      date: new Date().toLocaleDateString('vi-VN'),
      activity: `Luyện tập Reading Unit ${this.activeUnitId}`,
      details: `Đúng ${correctCount}/${questions.length} câu. Điểm đọc hiện tại: Band ${this.user.skills.Reading}`
    });

    this.save();
    alert(`Nộp bài đọc thành công! Đúng ${correctCount}/${questions.length} câu. Hãy chuyển sang phần Listening.`);
  }

  // Listening Tab
  renderListening() {
    const unit = ieltsData.units[this.activeUnitId - 1];
    const listening = unit.listening;

    const container = document.getElementById("tab-listening");
    container.innerHTML = `
      <div class="glass-panel">
        <h3 class="section-title" style="font-size:1.5rem; margin-bottom:1rem">Phần Nghe: ${listening.title}</h3>
        <p style="color:var(--text-muted); margin-bottom:1.5rem">Nhấn nút phát âm thanh bên dưới để nghe cuộc đối thoại, sau đó hoàn thành các câu hỏi trắc nghiệm bên phải.</p>
        
        <div class="audio-player-widget">
          <button class="play-controls-btn" id="listening-play-btn" onclick="app.toggleListeningAudio()">
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" id="play-icon"><path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653z"/></svg>
          </button>
          <div class="audio-progress-container">
            <div class="audio-title-bar">
              <span>Đang đọc âm thanh mô phỏng (IELTS Speaking)</span>
              <span id="audio-timer">00:00</span>
            </div>
            <div class="audio-progress-track">
              <div class="audio-progress-fill" id="listening-progress-bar"></div>
            </div>
          </div>
          <div>
            <select class="accent-select" id="listening-accent" onchange="app.stopListeningAudio()">
              <option value="US">Giọng Mỹ (US)</option>
              <option value="UK">Giọng Anh (UK)</option>
            </select>
          </div>
        </div>

        <button class="passage-translation-toggle" style="margin-bottom:1.5rem" onclick="document.getElementById('listening-transcript-block').classList.toggle('show')">
          Hiển thị lời thoại (Transcript & Bản dịch)
        </button>
        <div class="vi-text" id="listening-transcript-block" style="background:rgba(0,0,0,0.2); padding:1rem; border-radius:12px">
          <strong style="color:var(--text-bright)">Transcript cuộc đối thoại:</strong>
          <pre style="white-space:pre-wrap; font-family:var(--font-body); font-size:0.9rem; margin-top:0.5rem; color:var(--text-main)">${listening.transcript}</pre>
        </div>
      </div>

      <div class="glass-panel">
        <h4 style="font-family:var(--font-heading); font-size:1.25rem; margin-bottom:1.5rem">Câu hỏi nghe hiểu:</h4>
        <form id="listening-form" onsubmit="event.preventDefault(); app.submitListening();">
          ${listening.questions.map((q, idx) => `
            <div class="exercise-group" data-lidx="${idx}">
              <div class="question-text">${idx+1}. ${q.question}</div>
              <div class="options-list">
                ${q.options.map(opt => `
                  <button type="button" class="option-item" onclick="app.selectListeningOption(${idx}, '${opt}', this)">
                    ${opt}
                  </button>
                `).join('')}
              </div>
              <div class="explanation-box" style="margin-top:0.75rem; display:none; font-size:0.85rem; color:var(--color-primary)">
                <strong>Giải thích:</strong> ${q.explanation}
              </div>
            </div>
          `).join('')}
          <div style="display:flex; justify-content:flex-end">
            <button type="submit" class="btn btn-primary" id="listening-submit-btn">Nộp bài nghe</button>
          </div>
        </form>
      </div>
    `;
    this.listeningAnswers = {};
    this.isAudioPlaying = false;
  }

  toggleListeningAudio() {
    const unit = ieltsData.units[this.activeUnitId - 1];
    const textToSpeak = unit.listening.audioText;
    const accent = document.getElementById("listening-accent").value;
    const playBtn = document.getElementById("listening-play-btn");
    const progressFill = document.getElementById("listening-progress-bar");
    const timerText = document.getElementById("audio-timer");

    if (this.isAudioPlaying) {
      this.stopListeningAudio();
    } else {
      this.isAudioPlaying = true;
      if (playBtn) playBtn.innerHTML = `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15.75 5.25v13.5m-7.5-13.5v13.5"/></svg>`;
      
      let progress = 0;
      if (timerText) timerText.innerText = "00:00";
      if (progressFill) progressFill.style.width = "0%";
      
      const durationSeconds = textToSpeak.split(' ').length * 0.55;
      let elapsed = 0;
      
      this.audioInterval = setInterval(() => {
        elapsed++;
        const mins = Math.floor(elapsed / 60).toString().padStart(2, '0');
        const secs = (elapsed % 60).toString().padStart(2, '0');
        if (timerText) timerText.innerText = `${mins}:${secs}`;
        
        progress = (elapsed / durationSeconds) * 100;
        if (progressFill && progress < 100) {
          progressFill.style.width = `${progress}%`;
        }
      }, 1000);

      speechEngine.speak(textToSpeak, accent, null, () => {
        this.stopListeningAudio();
      });
    }
  }

  stopListeningAudio() {
    this.isAudioPlaying = false;
    clearInterval(this.audioInterval);
    speechEngine.stopSpeaking();
    
    const playBtn = document.getElementById("listening-play-btn");
    if (playBtn) {
      playBtn.innerHTML = `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653z"/></svg>`;
    }
  }

  selectListeningOption(qIdx, val, btn) {
    if (this.currentUnitSubmissions.listening) return;

    const parent = btn.parentElement;
    parent.querySelectorAll(".option-item").forEach(item => item.classList.remove("selected"));
    btn.classList.add("selected");
    
    this.listeningAnswers[qIdx] = val;
  }

  submitListening() {
    if (this.currentUnitSubmissions.listening) return;

    const unit = ieltsData.units[this.activeUnitId - 1];
    const questions = unit.listening.questions;

    if (Object.keys(this.listeningAnswers).length < questions.length) {
      alert("Vui lòng trả lời toàn bộ câu hỏi nghe hiểu!");
      return;
    }

    this.stopListeningAudio();

    let correctCount = 0;
    questions.forEach((q, idx) => {
      const selected = this.listeningAnswers[idx];
      const qBlock = document.querySelector(`.exercise-group[data-lidx="${idx}"]`);
      const options = qBlock.querySelectorAll(".option-item");
      const exp = qBlock.querySelector(".explanation-box");

      exp.style.display = "block";

      options.forEach(btn => {
        const val = btn.innerText.trim();
        if (val === q.answer) {
          btn.classList.add("correct");
        } else if (val === selected) {
          btn.classList.add("wrong");
        }
        btn.disabled = true;
      });

      if (selected === q.answer) {
        correctCount++;
      }
    });

    this.currentUnitSubmissions.listening = true;
    document.getElementById("listening-submit-btn").style.display = "none";

    this.user.studyMinutes += 15;
    const accuracy = correctCount / questions.length;
    this.user.skills.Listening = Math.min(9.0, parseFloat((this.user.skills.Listening + (accuracy * 0.15)).toFixed(2)));

    this.user.history.push({
      date: new Date().toLocaleDateString('vi-VN'),
      activity: `Luyện tập Listening Unit ${this.activeUnitId}`,
      details: `Đúng ${correctCount}/${questions.length} câu. Điểm nghe hiện tại: Band ${this.user.skills.Listening}`
    });

    this.save();
    alert(`Nộp bài nghe thành công! Đúng ${correctCount}/${questions.length} câu. Hãy chuyển sang phần Speaking.`);
  }

  // Speaking Tab
  renderSpeaking() {
    const unit = ieltsData.units[this.activeUnitId - 1];
    const speaking = unit.speaking;

    const container = document.getElementById("tab-speaking");
    container.innerHTML = `
      <div class="glass-panel">
        <h3 class="section-title" style="font-size:1.5rem; margin-bottom:1rem">Phần Nói (IELTS Speaking)</h3>
        <p style="color:var(--text-muted); margin-bottom:1.5rem">Chọn phần muốn luyện tập để hiển thị câu hỏi. Bật micro và nói để hệ thống tự động nhận diện giọng nói và chấm điểm từ vựng.</p>
        
        <div style="display:flex; gap:0.5rem; margin-bottom:1.5rem">
          <button class="btn btn-secondary active" id="sp-btn-p1" onclick="app.switchSpeakingPart(1)">Part 1: Câu hỏi ngắn</button>
          <button class="btn btn-secondary" id="sp-btn-p2" onclick="app.switchSpeakingPart(2)">Part 2: Cue Card (Độc thoại)</button>
          <button class="btn btn-secondary" id="sp-btn-p3" onclick="app.switchSpeakingPart(3)">Part 3: Thảo luận rộng</button>
        </div>

        <div class="speaking-workspace">
          <div id="speaking-question-display" style="font-size:1.25rem; font-weight:600; color:var(--text-bright)"></div>
          <div class="speaking-cue-card" id="speaking-vi-hint"></div>

          <div class="record-btn-container">
            <button class="record-pulse-btn" id="speak-record-btn" onclick="app.toggleSpeakingRecording()">
              <svg viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/></svg>
            </button>
            <div class="recording-halo"></div>
          </div>

          <div style="font-size:0.9rem; color:var(--color-primary)" id="speak-status-text">Bấm nút đỏ để nói qua Micro</div>
          <div class="live-transcript-box" id="speak-transcript">Bạn chưa nói gì...</div>

          <div class="feedback-score-widget" id="speak-feedback-results" style="display:none">
            <div class="score-cell">
              <span class="score-num" id="sp-score-overall">0%</span>
              <span class="score-txt">Độ Trôi Chảy (Fluency)</span>
            </div>
            <div class="score-cell">
              <span class="score-num" id="sp-score-lexical">0%</span>
              <span class="score-txt">Từ vựng IELTS (Lexical)</span>
            </div>
            <div class="score-cell">
              <span class="score-num" id="sp-score-words">0</span>
              <span class="score-txt">Tổng số từ</span>
            </div>
          </div>

          <div style="width:100%; text-align:left; display:none" id="sp-answers-reveal">
            <strong style="color:var(--text-bright)">Câu trả lời mẫu khuyên dùng (Band 6.0):</strong>
            <p style="font-style:italic; margin-top:0.25rem; color:#a5b4fc" id="sp-sample-answer-text"></p>
          </div>
        </div>
      </div>
    `;

    this.currentSpeakingPart = 1;
    this.switchSpeakingPart(1);
  }

  switchSpeakingPart(partNum) {
    this.currentSpeakingPart = partNum;
    speechEngine.stopListening();
    
    document.querySelectorAll("[id^='sp-btn-']").forEach(btn => btn.classList.remove("active"));
    const activeBtn = document.getElementById(`sp-btn-p${partNum}`);
    if (activeBtn) activeBtn.classList.add("active");

    const feedback = document.getElementById("speak-feedback-results");
    if (feedback) feedback.style.display = "none";
    
    const reveal = document.getElementById("sp-answers-reveal");
    if (reveal) reveal.style.display = "none";
    
    const trans = document.getElementById("speak-transcript");
    if (trans) {
      trans.innerText = "Bạn chưa nói gì...";
      trans.classList.remove("has-text");
    }

    const status = document.getElementById("speak-status-text");
    if (status) status.innerText = "Bấm nút đỏ để nói qua Micro";
    
    const unit = ieltsData.units[this.activeUnitId - 1];
    const speaking = unit.speaking;
    
    let question = "";
    let hint = "";
    this.currentKeywords = [];
    this.currentSampleAnswer = "";

    if (partNum === 1) {
      question = speaking.part1.question;
      hint = `<strong>Gợi ý Tiếng Việt:</strong> ${speaking.part1.vietnameseHint}`;
      this.currentKeywords = speaking.part1.keywords;
      this.currentSampleAnswer = speaking.part1.sampleAnswer;
    } else if (partNum === 2) {
      question = speaking.part2.cueCard.replace(/\n/g, '<br>');
      hint = `<strong>Gợi ý Tiếng Việt:</strong> ${speaking.part2.vietnameseHint}`;
      this.currentKeywords = speaking.part2.keywords;
      this.currentSampleAnswer = speaking.part2.sampleAnswer;
    } else {
      question = speaking.part3.question;
      hint = `<strong>Gợi ý Tiếng Việt:</strong> ${speaking.part3.vietnameseHint}`;
      this.currentKeywords = speaking.part3.keywords;
      this.currentSampleAnswer = speaking.part3.sampleAnswer;
    }

    const qDisplay = document.getElementById("speaking-question-display");
    if (qDisplay) qDisplay.innerHTML = question;
    
    const hintDisplay = document.getElementById("speaking-vi-hint");
    if (hintDisplay) hintDisplay.innerHTML = hint;
  }

  toggleSpeakingRecording() {
    const btn = document.getElementById("speak-record-btn");
    const statusText = document.getElementById("speak-status-text");
    const transcriptBox = document.getElementById("speak-transcript");

    if (speechEngine.isRecording) {
      speechEngine.stopListening();
      if (btn) btn.classList.remove("recording");
      if (statusText) statusText.innerText = "Đạt tắt mic. Đang chấm điểm...";
    } else {
      if (btn) btn.classList.add("recording");
      if (statusText) statusText.innerText = "Đang thu âm... Hãy nói to rõ!";
      if (transcriptBox) {
        transcriptBox.innerText = "Hệ thống đang nghe...";
        transcriptBox.classList.add("has-text");
      }
      
      this.speakingStartTime = Date.now();

      speechEngine.startListening(
        (resultText) => {
          if (transcriptBox) transcriptBox.innerText = resultText;
          this.evaluateUserSpeaking(resultText);
        },
        (errorMsg) => {
          if (statusText) statusText.innerText = `Lỗi: ${errorMsg}`;
          if (btn) btn.classList.remove("recording");
        },
        () => {
          if (btn) btn.classList.remove("recording");
          if (statusText) statusText.innerText = "Đã dừng thu âm.";
        }
      );
    }
  }

  evaluateUserSpeaking(transcript) {
    if (!transcript || transcript.trim() === "") return;

    const evaluation = speechEngine.evaluateSpeech(transcript, this.currentKeywords, this.currentSampleAnswer);

    document.getElementById("speak-feedback-results").style.display = "grid";
    document.getElementById("sp-score-overall").innerText = `${evaluation.overallScore}%`;
    document.getElementById("sp-score-lexical").innerText = `${evaluation.keywordScore}%`;
    document.getElementById("sp-score-words").innerText = evaluation.wordCount;

    document.getElementById("sp-answers-reveal").style.display = "block";
    document.getElementById("sp-sample-answer-text").innerText = this.currentSampleAnswer;

    const speakDuration = Math.round((Date.now() - this.speakingStartTime) / 1000 / 60);
    this.user.studyMinutes += Math.max(1, speakDuration);

    const relativeAccuracy = evaluation.overallScore / 100;
    this.user.skills.Speaking = Math.min(9.0, parseFloat((this.user.skills.Speaking + (relativeAccuracy * 0.1)).toFixed(2)));

    this.user.history.push({
      date: new Date().toLocaleDateString('vi-VN'),
      activity: `Luyện tập Speaking Part ${this.currentSpeakingPart} - Unit ${this.activeUnitId}`,
      details: `Độ khớp: ${evaluation.similarityScore}% | Từ vựng chủ đề: ${evaluation.keywordScore}%. Band nói: Band ${this.user.skills.Speaking}`
    });

    this.save();
  }

  // Writing Tab
  renderWriting() {
    const unit = ieltsData.units[this.activeUnitId - 1];
    const writing = unit.writing;

    const container = document.getElementById("tab-writing");
    container.innerHTML = `
      <div class="writing-layout">
        <div class="writing-prompt-info glass-panel" style="margin-bottom:0">
          <h3 class="section-title" style="font-size:1.5rem">${writing.taskType} Prompt</h3>
          <p style="font-weight:600; color:var(--text-bright); line-height:1.5">${writing.prompt}</p>
          <div style="background:rgba(0,0,0,0.15); padding:1rem; border-radius:12px; font-size:0.9rem; border:1px solid var(--border-glass)">
            <strong>Gợi ý Tiếng Việt:</strong>
            <p style="margin-top:0.25rem; color:var(--text-muted)">${writing.vietnameseHint}</p>
          </div>
          
          <h5 style="margin-top:1rem; font-family:var(--font-heading)">Các từ vựng gợi ý nên dùng (dùng để tăng điểm Lexical):</h5>
          <div class="vocab-checklist" id="writing-vocab-list">
            ${writing.suggestedVocab.map(v => `<span class="checklist-chip" id="chip-${v}">${v}</span>`).join('')}
          </div>
        </div>

        <div class="glass-panel" style="margin-bottom:0; display:flex; flex-direction:column; gap:1rem">
          <div class="writing-input-area">
            <textarea class="writing-textbox" id="writing-response" placeholder="Nhập bài viết của bạn tại đây (ít nhất ${writing.minWords} từ)..." oninput="app.checkWritingStats()"></textarea>
            <div class="writing-meta-bar">
              <span id="writing-word-counter">0 từ (Mục tiêu: ${writing.minWords})</span>
              <span id="writing-timer">Thời gian: 00:00</span>
            </div>
          </div>

          <div style="display:flex; justify-content:flex-end">
            <button class="btn btn-primary" onclick="app.submitWriting()">Nộp bài viết (Submit)</button>
          </div>

          <div id="writing-report-box" style="display:none; background:rgba(255,255,255,0.02); border:1px solid var(--border-glass); border-radius:16px; padding:1.5rem">
            <h4 style="font-family:var(--font-heading); color:var(--color-primary); margin-bottom:1rem">Báo cáo đánh giá bài viết (AI-Evaluator)</h4>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:1rem">
              <div style="background:rgba(0,0,0,0.2); padding:0.75rem; border-radius:8px">
                <div style="font-size:0.8rem; color:var(--text-muted)">Band ước lượng</div>
                <strong style="font-size:1.5rem; color:var(--color-secondary)" id="ai-w-band">Band 5.0</strong>
              </div>
              <div style="background:rgba(0,0,0,0.2); padding:0.75rem; border-radius:8px">
                <div style="font-size:0.8rem; color:var(--text-muted)">Từ vựng sử dụng</div>
                <strong style="font-size:1.5rem; color:var(--color-success)" id="ai-w-vocab">0%</strong>
              </div>
            </div>
            <div id="ai-w-feedback" style="font-size:0.9rem; color:var(--text-main); line-height:1.5"></div>
            
            <button class="passage-translation-toggle" style="margin-top:1.5rem" onclick="document.getElementById('writing-model-answer').classList.toggle('show')">
              Hiển thị bài viết mẫu tham khảo (Band 7.0+)
            </button>
            <div class="vi-text" id="writing-model-answer" style="background:rgba(0,0,0,0.25); padding:1rem; border-radius:12px">
              <pre style="white-space:pre-wrap; font-family:var(--font-body); font-size:0.9rem; color:var(--text-bright)">${writing.sampleAnswer}</pre>
            </div>
          </div>
        </div>
      </div>
    `;

    this.writingStartTime = Date.now();
    this.startWritingTimer();
  }

  startWritingTimer() {
    this.writingTimerVal = 0;
    clearInterval(this.writingTimerInterval);
    this.writingTimerInterval = setInterval(() => {
      this.writingTimerVal++;
      const mins = Math.floor(this.writingTimerVal / 60).toString().padStart(2, '0');
      const secs = (this.writingTimerVal % 60).toString().padStart(2, '0');
      const el = document.getElementById("writing-timer");
      if (el) el.innerText = `Thời gian: ${mins}:${secs}`;
    }, 1000);
  }

  checkWritingStats() {
    const text = document.getElementById("writing-response").value;
    const cleanWords = text.trim().split(/\s+/).filter(Boolean);
    const wordCount = cleanWords.length;
    
    const unit = ieltsData.units[this.activeUnitId - 1];
    const minWords = unit.writing.minWords;
    
    document.getElementById("writing-word-counter").innerText = `${wordCount} từ (Mục tiêu: ${minWords})`;

    unit.writing.suggestedVocab.forEach(v => {
      const cleanV = v.toLowerCase().trim();
      const chip = document.getElementById(`chip-${v}`);
      if (chip) {
        if (text.toLowerCase().includes(cleanV.substring(0, cleanV.length - 2))) {
          chip.classList.add("used");
        } else {
          chip.classList.remove("used");
        }
      }
    });
  }

  submitWriting() {
    clearInterval(this.writingTimerInterval);
    const text = document.getElementById("writing-response").value.trim();
    if (!text) {
      alert("Vui lòng viết nội dung trước khi nộp!");
      return;
    }

    const unit = ieltsData.units[this.activeUnitId - 1];
    const minWords = unit.writing.minWords;
    const cleanWords = text.split(/\s+/).filter(Boolean);
    const wordCount = cleanWords.length;

    if (wordCount < 30) {
      alert("Bài viết quá ngắn!");
      return;
    }

    let matchCount = 0;
    unit.writing.suggestedVocab.forEach(v => {
      const cleanV = v.toLowerCase().trim();
      if (text.toLowerCase().includes(cleanV.substring(0, cleanV.length - 2))) matchCount++;
    });

    const vocabRate = Math.round((matchCount / unit.writing.suggestedVocab.length) * 100);

    const connectors = ["however", "furthermore", "moreover", "in conclusion", "therefore", "consequently"];
    let connectorCount = 0;
    connectors.forEach(c => {
      if (text.toLowerCase().includes(c)) connectorCount++;
    });

    let score = 4.0;
    let feedback = "";

    if (wordCount >= minWords) {
      score += 1.0;
    } else {
      feedback += `• Số từ (${wordCount}) chưa đạt mức yêu cầu ${minWords} từ.<br>`;
    }

    if (matchCount >= 2) {
      score += 0.5;
    } else {
      feedback += `• Lexical Resource: Bạn cần đan xen các từ vựng chủ đề tốt hơn.<br>`;
    }

    if (connectorCount >= 2) {
      score += 0.5;
    } else {
      feedback += `• Cohesion: Nên bổ sung từ nối liên kết câu (e.g. however, furthermore).<br>`;
    }

    score = Math.min(6.5, score);
    
    document.getElementById("writing-report-box").style.display = "block";
    document.getElementById("ai-w-band").innerText = `Band ${score.toFixed(1)}`;
    document.getElementById("ai-w-vocab").innerText = `${vocabRate}%`;
    
    if (feedback === "") {
      document.getElementById("ai-w-feedback").innerHTML = `🎉 Bài viết đạt chuẩn số từ, cấu trúc tốt. Bạn hãy xem bài viết mẫu để học hỏi thêm.`;
    } else {
      document.getElementById("ai-w-feedback").innerHTML = `<strong>Lưu ý cải thiện:</strong><br>${feedback}`;
    }

    this.user.studyMinutes += Math.round(this.writingTimerVal / 60);
    this.user.skills.Writing = Math.min(9.0, parseFloat((this.user.skills.Writing * 0.7 + score * 0.3).toFixed(2)));

    this.user.history.push({
      date: new Date().toLocaleDateString('vi-VN'),
      activity: `Luyện tập Writing Unit ${this.activeUnitId}`,
      details: `Đạt Band ước lượng ${score.toFixed(1)}. Độ dài: ${wordCount} từ.`
    });

    this.save();
    
    this.currentUnitSubmissions.writing = true;
    const testBtn = document.getElementById("start-unit-test-btn");
    if (testBtn) testBtn.style.display = "inline-flex";
  }

  // --- Assessment / Testing Path ---
  startUnitTest() {
    this.switchPage("unit-test");
    const unit = ieltsData.units[this.activeUnitId - 1];
    
    document.getElementById("test-unit-title").innerText = `Bài Kiểm Tra Đánh Giá - Unit ${unit.id}`;
    const container = document.getElementById("test-questions-area");
    container.innerHTML = "";

    const q1 = unit.grammar.exercises[0];
    const q2 = unit.grammar.exercises[1];
    const q3 = unit.reading.questions[0];
    const q4 = unit.reading.questions[2];
    const q5 = unit.listening.questions[0];

    this.testQuestions = [
      { id: 1, type: "Grammar", data: q1 },
      { id: 2, type: "Grammar", data: q2 },
      { id: 3, type: "Reading", data: q3 },
      { id: 4, type: "Reading", data: q4 },
      { id: 5, type: "Listening", data: q5 }
    ];

    this.testQuestions.forEach((q, idx) => {
      const div = document.createElement("div");
      div.className = "exercise-group";
      div.innerHTML = `
        <div style="font-size:0.75rem; color:var(--color-primary); font-weight:bold; margin-bottom:0.25rem">${q.type} Assessment</div>
        <div class="question-text">${idx+1}. ${q.data.question}</div>
        <div class="options-list">
          ${q.data.options.map(opt => `
            <button type="button" class="option-item" onclick="app.selectTestOption(${q.id}, '${opt}', this)">
              ${opt}
            </button>
          `).join('')}
        </div>
      `;
      container.appendChild(div);
    });

    this.testAnswers = {};
  }

  selectTestOption(qId, val, btn) {
    const parent = btn.parentElement;
    parent.querySelectorAll(".option-item").forEach(item => item.classList.remove("selected"));
    btn.classList.add("selected");
    this.testAnswers[qId] = val;
  }

  submitUnitTest() {
    if (Object.keys(this.testAnswers).length < this.testQuestions.length) {
      alert("Vui lòng làm đầy đủ bài Test!");
      return;
    }

    let correctCount = 0;
    this.testQuestions.forEach(q => {
      if (this.testAnswers[q.id] === q.data.answer) correctCount++;
    });

    const scorePct = Math.round((correctCount / this.testQuestions.length) * 100);
    
    this.user.history.push({
      date: new Date().toLocaleDateString('vi-VN'),
      activity: `Thi đánh giá cuối Unit ${this.activeUnitId}`,
      details: `Đúng ${correctCount}/${this.testQuestions.length} câu (${scorePct}%).`
    });

    this.save();

    if (scorePct >= 60) {
      if (!this.user.completedUnits.includes(this.activeUnitId)) {
        this.user.completedUnits.push(this.activeUnitId);
      }
      
      this.user.skills.Listening = Math.min(9.0, parseFloat((this.user.skills.Listening + 0.2).toFixed(2)));
      this.user.skills.Reading = Math.min(9.0, parseFloat((this.user.skills.Reading + 0.2).toFixed(2)));
      
      this.activeUnitId = Math.min(10, this.activeUnitId + 1); // 10 units maximum
      
      if (this.remediationPlan && this.remediationPlan.unitId === ieltsData.units[this.activeUnitId-2].id) {
        this.remediationPlan = null;
      }
      
      this.save();
      alert(`Chúc mừng! Bạn đã đạt ${scorePct}%. Đã mở khóa Unit tiếp theo.`);
      this.switchPage("roadmap");
    } else {
      this.remediationPlan = {
        unitId: this.activeUnitId,
        tasks: { vocabReviewed: false, grammarPassed: false }
      };
      this.save();

      alert(`Kết quả đạt ${scorePct}%, chưa đủ 60% để đỗ. Hệ thống đã khóa Unit tiếp theo. Hãy ôn luyện theo kế hoạch sửa đổi trên Dashboard.`);
      this.switchPage("dashboard");
    }
  }

  // --- Mock Test View ---
  renderMockTest() {
    const container = document.getElementById("mock-test-body");
    container.innerHTML = `
      <div class="glass-panel">
        <h3 class="section-title" style="font-size:1.5rem">Chào mừng đến với Kỳ Thi Thử IELTS</h3>
        <p style="color:var(--text-muted); margin-bottom:1.5rem">Đây là bài kiểm tra IELTS thiết kế rút gọn mô phỏng cấu trúc Band 5.0 - 6.0 nhằm đánh giá tổng quát sự tiến bộ của bạn.</p>
        
        <div style="background:rgba(99, 102, 241, 0.05); border:1px solid rgba(99, 102, 241, 0.3); padding:1rem; border-radius:12px; margin-bottom:2rem">
          <strong>Cấu trúc Đề thi:</strong>
          <ul style="list-style:none; font-size:0.9rem; margin-top:0.5rem; display:flex; flex-direction:column; gap:0.25rem">
            <li>• Section 1 (Listening): Nghe bài giảng, trả lời 3 câu hỏi.</li>
            <li>• Section 2 (Reading): Đọc hiểu 1 đoạn văn, trả lời 3 câu hỏi.</li>
            <li>• Section 3 (Writing): Phân tích & Trả lời một câu hỏi nghị luận xã hội (compulsory community service).</li>
          </ul>
        </div>

        <button class="btn btn-primary" onclick="app.startMockTestSession()">Bắt đầu thi thử (Start Exam)</button>
      </div>
    `;
  }

  startMockTestSession() {
    this.switchPage("mock-test-workspace");
    this.mockAnswers = { listening: {}, reading: {}, writingText: "" };

    const examData = ieltsData.mockTest;
    
    document.getElementById("mock-listening-panel").innerHTML = `
      <div class="audio-player-widget">
        <button class="play-controls-btn" onclick="app.playMockListeningAudio(this)">
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653z"/></svg>
        </button>
        <div class="audio-progress-container">
          <div class="audio-title-bar"><span>Bài nghe chính thức: Section 1</span></div>
          <div class="audio-progress-track"><div class="audio-progress-fill" style="width:100%"></div></div>
        </div>
      </div>
      
      <div style="margin-top:1.5rem">
        ${examData.listening.questions.map((q, idx) => `
          <div class="exercise-group" data-mlidx="${idx}">
            <div class="question-text">${idx+1}. ${q.question}</div>
            <div class="options-list">
              ${q.options.map(opt => `
                <button class="option-item" onclick="app.selectMockL(${idx}, '${opt}', this)">${opt}</button>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;

    document.getElementById("mock-reading-panel").innerHTML = `
      <div class="reading-layout">
        <div class="passage-box" style="max-height:400px">
          <h4>The Future of Remote Working</h4>
          <p>${examData.reading.passage}</p>
        </div>
        <div>
          ${examData.reading.questions.map((q, idx) => `
            <div class="exercise-group" data-mridx="${idx}">
              <div class="question-text">${idx+4}. ${q.question}</div>
              <div class="options-list">
                ${q.options.map(opt => `
                  <button class="option-item" onclick="app.selectMockR(${idx}, '${opt}', this)">${opt}</button>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    document.getElementById("mock-writing-panel").innerHTML = `
      <div style="margin-bottom:1rem">
        <strong>Prompt:</strong> ${examData.writing.prompt}
        <div style="font-size:0.85rem; color:var(--text-muted); margin-top:0.25rem">Gợi ý tiếng Việt: ${examData.writing.vietnameseHint}</div>
      </div>
      <textarea class="writing-textbox" style="width:100%" id="mock-writing-response" placeholder="Nhập bài luận tối thiểu 150 từ của bạn..." oninput="app.checkMockWritingStats()"></textarea>
      <div style="display:flex; justify-content:space-between; margin-top:0.5rem; font-size:0.85rem">
        <span id="mock-w-count">0 từ (Yêu cầu: 150)</span>
      </div>
    `;
    this.mockWCount = 0;
  }

  playMockListeningAudio(btn) {
    const text = ieltsData.mockTest.listening.audioText;
    if (btn) btn.innerHTML = `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15.75 5.25v13.5m-7.5-13.5v13.5"/></svg>`;
    speechEngine.speak(text, 'UK', null, () => {
      if (btn) btn.innerHTML = `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653z"/></svg>`;
    });
  }

  selectMockL(idx, val, btn) {
    const parent = btn.parentElement;
    parent.querySelectorAll(".option-item").forEach(item => item.classList.remove("selected"));
    btn.classList.add("selected");
    this.mockAnswers.listening[idx] = val;
  }

  selectMockR(idx, val, btn) {
    const parent = btn.parentElement;
    parent.querySelectorAll(".option-item").forEach(item => item.classList.remove("selected"));
    btn.classList.add("selected");
    this.mockAnswers.reading[idx] = val;
  }

  checkMockWritingStats() {
    const txt = document.getElementById("mock-writing-response").value;
    this.mockWCount = txt.trim().split(/\s+/).filter(Boolean).length;
    document.getElementById("mock-w-count").innerText = `${this.mockWCount} từ (Yêu cầu: 150)`;
  }

  submitMockTest() {
    const totalL = ieltsData.mockTest.listening.questions.length;
    const totalR = ieltsData.mockTest.reading.questions.length;

    if (Object.keys(this.mockAnswers.listening).length < totalL || Object.keys(this.mockAnswers.reading).length < totalR) {
      alert("Vui lòng điền đầy đủ câu trả lời!");
      return;
    }

    const writingText = document.getElementById("mock-writing-response").value.trim();
    if (this.mockWCount < 30) {
      alert("Bài viết quá ngắn!");
      return;
    }

    let correctL = 0;
    ieltsData.mockTest.listening.questions.forEach((q, idx) => {
      if (this.mockAnswers.listening[idx] === q.answer) correctL++;
    });

    let correctR = 0;
    ieltsData.mockTest.reading.questions.forEach((q, idx) => {
      if (this.mockAnswers.reading[idx] === q.answer) correctR++;
    });

    let scoreW = 4.0;
    if (this.mockWCount >= 150) scoreW += 1.0;
    
    let countKw = 0;
    const suggested = ieltsData.mockTest.writing.suggestedVocab;
    suggested.forEach(v => {
      if (writingText.toLowerCase().includes(v.toLowerCase())) countKw++;
    });
    if (countKw >= 2) scoreW += 1.0;
    scoreW = Math.min(8.0, scoreW);

    const bandL = parseFloat((3 + (correctL/totalL) * 4).toFixed(1));
    const bandR = parseFloat((3 + (correctR/totalR) * 4).toFixed(1));
    const bandS = this.user.skills.Speaking;

    this.user.skills.Listening = bandL;
    this.user.skills.Reading = bandR;
    this.user.skills.Writing = scoreW;

    const overallBand = ((bandL + bandR + scoreW + bandS) / 4).toFixed(2);

    this.user.history.push({
      date: new Date().toLocaleDateString('vi-VN'),
      activity: "Thi thử Mock Test tổng quan",
      details: `KẾT QUẢ: L:${bandL} | R:${bandR} | W:${scoreW} | S:${bandS} => TB: Band ${overallBand}`
    });

    this.save();
    alert(`Hoàn thành! Điểm thi thử ước lượng: Band ${overallBand}. Vui lòng xem Báo Cáo để đối soát.`);
    this.switchPage("dashboard");
  }

  // --- AI Assistant Chat Page Section ---
  sendChatMessage() {
    const inputEl = document.getElementById("chat-user-input");
    const msg = inputEl.value.trim();
    if (!msg) return;

    inputEl.value = "";
    
    // Add user message to UI
    this.appendChatMsg(msg, "right");

    // Add typing indicator
    const indicator = document.getElementById("chat-indicator");
    indicator.style.display = "inline-flex";

    // Simulate AI thinking and replying
    setTimeout(() => {
      indicator.style.display = "none";
      const reply = this.generateAIResponse(msg);
      
      // Typewriter writing effect
      this.appendChatMsg(reply, "left", true);

      // Auto speak aloud if checked
      const voiceCheck = document.getElementById("chat-voice-output");
      if (voiceCheck && voiceCheck.checked) {
        // Use Vietnamese accent if the reply contains Vietnamese characters and Vietnamese is selected, otherwise English
        const hasVietnamese = /[\u00C0-\u1EF9]/i.test(reply);
        const lang = document.getElementById("chat-voice-lang")?.value || "en-US";
        const accent = (hasVietnamese && lang.startsWith("vi")) ? "VI" : "US";
        speechEngine.speak(reply.replace(/<[^>]*>/g, ""), accent);
      }
    }, 1500);
  }

  toggleChatSpeech() {
    const btn = document.getElementById("chat-mic-btn");
    const inputEl = document.getElementById("chat-user-input");

    // Security warning: Web Speech API requires HTTPS on mobile/external network
    if (window.location.protocol === 'http:' && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
      alert("⚠️ Thiết bị di động (như iPhone) bắt buộc phải dùng kết nối bảo mật HTTPS mới có thể sử dụng Microphone. Trình duyệt sẽ khóa ghi âm nếu chạy qua HTTP thường.");
    }

    if (speechEngine.isRecording) {
      speechEngine.stopListening();
      if (btn) btn.classList.remove("recording");
      if (inputEl) inputEl.placeholder = "Nhập câu hỏi hoặc nhấn mic để nói...";
    } else {
      if (btn) btn.classList.add("recording");
      if (inputEl) {
        inputEl.value = "";
        inputEl.placeholder = "Đang lắng nghe... Hãy nói!";
      }
      
      const lang = document.getElementById("chat-voice-lang")?.value || "en-US";
      speechEngine.setLanguage(lang);
      
      // Stop text to speech if speaking so user can speak
      speechEngine.stopSpeaking();

      // Listen continuously. Works on iOS Safari (which auto-stops after silence) and Chrome
      speechEngine.startListening(
        (resultText) => {
          if (inputEl) {
            inputEl.value = resultText;
            inputEl.placeholder = "Đang nghe: " + resultText;
          }
        },
        (errorMsg) => {
          console.error("Chat Speech Error:", errorMsg);
          alert("Lỗi Microphone: " + errorMsg + "\nVui lòng cấp quyền Micro hoặc kiểm tra kết nối HTTPS.");
          if (btn) btn.classList.remove("recording");
          if (inputEl) inputEl.placeholder = "Nhập câu hỏi hoặc nhấn mic để nói...";
        },
        () => {
          if (btn) btn.classList.remove("recording");
          if (inputEl) {
            inputEl.placeholder = "Nhập câu hỏi hoặc nhấn mic để nói...";
            // Automatically send the message if there's text (covers both manual stop and iOS Safari auto-cutoff)
            setTimeout(() => {
              if (inputEl.value.trim()) {
                this.sendChatMessage();
              }
            }, 300);
          }
        },
        true // continuous = true
      );
    }
  }

  appendChatMsg(text, align, runTypewriter = false) {
    const box = document.getElementById("chat-messages-box");
    const msgDiv = document.createElement("div");
    msgDiv.className = `chat-msg chat-msg-${align}`;
    
    const time = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
    
    if (runTypewriter) {
      msgDiv.innerHTML = `
        <div class="chat-bubble" id="typing-bubble"></div>
        <div class="chat-time">${time}</div>
      `;
      box.appendChild(msgDiv);
      box.scrollTop = box.scrollHeight;
      
      const bubble = document.getElementById("typing-bubble");
      let idx = 0;
      const interval = setInterval(() => {
        if (idx < text.length) {
          bubble.innerHTML += text.charAt(idx);
          idx++;
          box.scrollTop = box.scrollHeight;
        } else {
          clearInterval(interval);
          bubble.removeAttribute("id"); // remove temporary id
        }
      }, 20);
    } else {
      msgDiv.innerHTML = `
        <div class="chat-bubble">${text}</div>
        <div class="chat-time">${time}</div>
      `;
      box.appendChild(msgDiv);
      box.scrollTop = box.scrollHeight;
    }
  }

  generateAIResponse(msg) {
    const text = msg.toLowerCase();
    
    // 1. Career Advice (Công việc)
    if (text.includes("work") || text.includes("job") || text.includes("career") || text.includes("công việc") || text.includes("xin việc") || text.includes("sự nghiệp") || text.includes("đồng nghiệp")) {
      return "Regarding work and careers (Công việc & Sự nghiệp): In the modern workplace, having strong communication skills and professional agility is vital. If you want to increase your remuneration (thù lao) or get a promotion (thăng chức), try to improve your English. My advice is: build a good relationship with your colleagues (đồng nghiệp) and study daily to adapt to rapid automation (tự động hóa). Do you want tips on writing a CV or passing a job interview?";
    }

    // 2. IELTS / Study tips (Học hành)
    if (text.includes("study") || text.includes("ielts") || text.includes("học") || text.includes("nghe") || text.includes("nói") || text.includes("đọc") || text.includes("viết") || text.includes("speaking") || text.includes("writing") || text.includes("từ vựng")) {
      return "Regarding study and learning: Since your target is IELTS 5.0 - 6.0, you must study consistently for 1-2 hours daily. To avoid forgetting vocabulary, please use our Spaced Repetition (Hộp từ vựng) to review flashcards regularly. For the Speaking section, use the Web Speech recorder to check your fluency (độ trôi chảy). For Writing, practice using transition words like 'however' or 'moreover' to boost Coherence. Keep trying!";
    }

    // 3. Lifestyle / Life balance / Health (Đời sống)
    if (text.includes("life") || text.includes("health") || text.includes("đời sống") || text.includes("sức khỏe") || text.includes("yoga") || text.includes("thể thao") || text.includes("béo phì") || text.includes("căng thẳng") || text.includes("mệt mỏi")) {
      return "Regarding lifestyle & well-being (Đời sống & Sức khỏe): Avoid leading a sedentary lifestyle (ngồi nhiều ít vận động). Office workers often spend 8 hours sitting, which damages their long-term well-being. Try to eat nutrient-dense meals and do a simple 20-minute walk to help your brain cope with stress. Regular exercise is a great preventative measure against chronic diseases like obesity. Take care of yourself!";
    }

    // 4. Greetings
    if (text.includes("hi") || text.includes("hello") || text.includes("chào") || text.includes("khỏe không") || text.includes("help")) {
      return `Hello! How can I help you today, ${this.user.name}? I can chat with you about studies (IELTS), career development (Jobs/Colleagues), or lifestyle advice (Health/Well-being). What is on your mind?`;
    }

    // 5. Default Response
    return "I see! That is very interesting. In English, we would say: 'Every small effort counts.' If you have questions about studies, work, or lifestyle habits, feel free to ask me. I am always here to support your IELTS journey!";
  }
}

// Global instance
window.app = new IELTSappState();
