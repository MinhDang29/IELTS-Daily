class IELTSspeechEngine {
  constructor() {
    this.recognition = null;
    this.synth = window.speechSynthesis;
    this.isRecording = false;
    this.initSpeechRecognition();
  }

  initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = false;
      this.recognition.lang = 'en-US';
    } else {
      console.warn("Web Speech Recognition is not supported in this browser. Use Chrome or Edge.");
    }
  }

  // Speak a text with specific voice accent
  speak(text, accent = 'US', onStart = null, onEnd = null) {
    if (!this.synth) return;
    if (this.synth.speaking) {
      this.synth.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    const voices = this.synth.getVoices();
    
    // Choose voice based on accent preference
    let selectedVoice = null;
    if (accent === 'UK') {
      selectedVoice = voices.find(v => v.lang.includes('en-GB') && v.name.includes('Google'));
      if (!selectedVoice) selectedVoice = voices.find(v => v.lang.includes('en-GB'));
    } else { // default US
      selectedVoice = voices.find(v => v.lang.includes('en-US') && v.name.includes('Google'));
      if (!selectedVoice) selectedVoice = voices.find(v => v.lang.includes('en-US'));
    }

    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }
    utterance.rate = 0.9; // Slightly slower for learning purposes

    if (onStart) utterance.onstart = onStart;
    if (onEnd) utterance.onend = onEnd;

    this.synth.speak(utterance);
  }

  stopSpeaking() {
    if (this.synth && this.synth.speaking) {
      this.synth.cancel();
    }
  }

  // Start speech recognition
  startListening(onResult, onError, onEnd) {
    if (!this.recognition) {
      onError("Speech recognition is not supported in this browser. Please use Google Chrome or Microsoft Edge.");
      return;
    }

    if (this.isRecording) return;

    this.isRecording = true;
    this.recognition.onresult = (event) => {
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript + ' ';
        }
      }
      if (finalTranscript) {
        onResult(finalTranscript.trim());
      }
    };

    this.recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      onError(event.error);
    };

    this.recognition.onend = () => {
      this.isRecording = false;
      if (onEnd) onEnd();
    };

    this.recognition.start();
  }

  stopListening() {
    if (this.recognition && this.isRecording) {
      this.recognition.stop();
      this.isRecording = false;
    }
  }

  // Compare user transcript with model answer or keywords
  // Returns match percentage and statistics
  evaluateSpeech(userSpeech, targetKeywords = [], sampleSentence = "") {
    const cleanUser = userSpeech.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"").split(/\s+/).filter(Boolean);
    
    // Check keywords included
    let keywordsFound = [];
    let keywordsMissed = [];
    
    targetKeywords.forEach(kw => {
      const cleanKw = kw.toLowerCase().trim();
      if (cleanUser.some(w => w.includes(cleanKw) || cleanKw.includes(w))) {
        keywordsFound.push(kw);
      } else {
        keywordsMissed.push(kw);
      }
    });

    const keywordScore = targetKeywords.length > 0 
      ? Math.round((keywordsFound.length / targetKeywords.length) * 100) 
      : 100;

    // Check similarity with sample sentence if provided
    let similarityScore = 0;
    if (sampleSentence) {
      const cleanSample = sampleSentence.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"").split(/\s+/).filter(Boolean);
      let matches = 0;
      cleanSample.forEach(w => {
        if (cleanUser.includes(w)) matches++;
      });
      similarityScore = Math.round((matches / Math.max(cleanSample.length, 1)) * 100);
    }

    // Fluency indicator (Words Per Minute)
    // Assuming speaking session is measured or estimated. Let's return general statistics.
    const wordCount = cleanUser.length;

    return {
      wordCount,
      keywordScore,
      keywordsFound,
      keywordsMissed,
      similarityScore,
      overallScore: sampleSentence ? Math.round((keywordScore * 0.4) + (similarityScore * 0.6)) : keywordScore
    };
  }
}

// Export global engine
window.speechEngine = new IELTSspeechEngine();
