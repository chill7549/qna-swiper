/* ==========================================================================
   Q&A SWIPER Application - Answer Order Update (1st: Left/No, 2nd: Right/Yes)
   ========================================================================== */

// Curated Pastel Gradient Presets
const PASTEL_PALETTES = [
  'linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%)',
  'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
  'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
  'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
  'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
  'linear-gradient(135deg, #fdcbf9 0%, #e6dee9 100%)',
  'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
  'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)'
];

// Rich iOS Emoji Paginated Dataset
const IOS_EMOJI_PAGES = [
  ['😀', '😃', '😄', '😁', '😆', '🥹', '😅', '😂', '🤣', '🥲', '☺️', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐'],
  ['💚', '❌', '💙', '💜', '🔥', '❤️', '🍕', '🎉', '🚀', '👍', '👎', '🌟', '💡', '🥑', '🍔', '💯', '💥', '✨', '⭐', '🤝', '👏', '🙌', '🫶', '✌️', '🤞', '🤙', '💪', '👑', '💎', '🎯'],
  ['🍟', '🌭', '🥓', '🥩', '🥞', '🧇', '🍳', '🥪', '🥗', '🍜', '🍣', '🥟', '🍦', '🍰', '🎂', '☕', '🥤', '🍺', '🍻', '🥂', '🍩', '🍫', '🍿', '🍇', '🍓', '🍒', '🍍', '🥭', '🍉', '🥝'],
  ['🌈', '🌸', '🍀', '🐶', '🐱', '🦊', '🐻', '🐼', '🦁', '🐯', '🦄', '🐝', '🐙', '🐬', '🌺', '☀️', '🌙', '⚡', '❄️', '🎈', '🎁', '🎮', '🎲', '🎨', '🎭', '🔮', '📱', '💻', '🏖️', '✈️']
];

// Reordered Default Choices: 1st Left/No (←), 2nd Right/Yes (→)
const DEFAULT_CHOICES = [
  { dir: 'LEFT', label: '아니오', emoji: '❌', color: '#f43f5e' },
  { dir: 'RIGHT', label: '예', emoji: '💚', color: '#10b981' },
  { dir: 'UP', label: '글쎄요', emoji: '💙', color: '#3b82f6' },
  { dir: 'DOWN', label: '상관없음', emoji: '💜', color: '#a855f7' },
  { dir: 'OPTION_5', label: '5번 대답', emoji: '🍊', color: '#f59e0b' },
  { dir: 'OPTION_6', label: '6번 대답', emoji: '🌸', color: '#ec4899' },
  { dir: 'OPTION_7', label: '7번 대답', emoji: '🍀', color: '#14b8a6' },
  { dir: 'OPTION_8', label: '8번 대답', emoji: '🔮', color: '#8b5cf6' }
];

// Built-in Preset Decks (Updated for 1st Left, 2nd Right)
const BUILTIN_PRESETS = {
  balance: {
    name: "🔥 밸런스 게임 덱",
    cards: [
      {
        id: 'b1', text: "탕수육 부먹 vs 찍먹, 당신의 선택은?", answerCount: 2, hasTextResponse: false,
        choices: [
          { dir: 'LEFT', label: '부먹', emoji: '❌', color: '#f43f5e' },
          { dir: 'RIGHT', label: '찍먹', emoji: '💚', color: '#10b981' }
        ],
        fontSizePx: 28, alignment: "center", textColor: "#ffffff", bgType: "pastel", pastelIndex: 0
      },
      {
        id: 'b2', text: "평생 사과만 먹기 vs 평생 바나나만 먹기", answerCount: 2, hasTextResponse: false,
        choices: [
          { dir: 'LEFT', label: '바나나', emoji: '🍌', color: '#f43f5e' },
          { dir: 'RIGHT', label: '사과', emoji: '🍎', color: '#10b981' }
        ],
        fontSizePx: 30, alignment: "center", textColor: "#ffffff", bgType: "pastel", pastelIndex: 1
      },
      {
        id: 'b3', text: "100억 받고 스마트폰 금지 vs 지금처럼 살기", answerCount: 2, hasTextResponse: false,
        choices: [
          { dir: 'LEFT', label: '지금처럼 살기', emoji: '📱', color: '#f43f5e' },
          { dir: 'RIGHT', label: '100억 받기', emoji: '💰', color: '#10b981' }
        ],
        fontSizePx: 26, alignment: "center", textColor: "#ffffff", bgType: "pastel", pastelIndex: 2
      }
    ]
  },
  food: {
    name: "🍕 점심 취향 앙케이트 (3선택 덱)",
    cards: [
      {
        id: 'f1', text: "오늘 점심 최애 메뉴는 무엇인가요?", answerCount: 3, hasTextResponse: true,
        choices: [
          { dir: 'LEFT', label: '한식/국물', emoji: '🍜', color: '#f43f5e' },
          { dir: 'RIGHT', label: '치킨/피자', emoji: '🍕', color: '#10b981' },
          { dir: 'UP', label: '일식/초밥', emoji: '🍣', color: '#3b82f6' }
        ],
        fontSizePx: 28, alignment: "center", textColor: "#ffffff", bgType: "pastel", pastelIndex: 3
      }
    ]
  },
  couple: {
    name: "❤️ 커플 연애 스타일 (4선택 덱)",
    cards: [
      {
        id: 'c1', text: "연인 사이 스마트폰 비밀번호에 대한 의견은?", answerCount: 4, hasTextResponse: false,
        choices: [
          { dir: 'LEFT', label: '절대 비공개', emoji: '🔒', color: '#f43f5e' },
          { dir: 'RIGHT', label: '전면 공개', emoji: '🔓', color: '#10b981' },
          { dir: 'UP', label: '상호 합의', emoji: '🤝', color: '#3b82f6' },
          { dir: 'DOWN', label: '관심 없음', emoji: '🤷', color: '#a855f7' }
        ],
        fontSizePx: 28, alignment: "center", textColor: "#ffffff", bgType: "pastel", pastelIndex: 6
      }
    ]
  }
};

// Global Application State
const state = {
  currentMode: 'questioner',
  currentDeckId: 'default-deck',
  currentDeckName: '기본 질문 덱',
  
  customPresets: {},

  // Active Deck Cards
  cards: [
    {
      id: 'card-default-1',
      text: "탕수육 부먹 vs 찍먹, 당신의 선택은?",
      answerCount: 2,
      hasTextResponse: false,
      choices: JSON.parse(JSON.stringify(DEFAULT_CHOICES.slice(0, 2))),
      fontSizePx: 28,
      alignment: "center",
      textColor: "#ffffff",
      bgType: "pastel",
      pastelIndex: 0,
      bgImage: null,
      bgPosX: 0, bgPosY: 0, bgScale: 100, bgRotate: 0
    }
  ],
  activeCardIndex: 0,

  // Caret Position Tracking for Card Text Editor
  savedCaretRange: null,

  // Interactive Background Editing Mode
  isEditingBg: false,

  // Emoji Picker Target & Pagination State
  emojiCurrentPage: 0,
  emojiPickerTarget: null,

  // Deck Frame Dimensions
  autoDeckSize: true,
  deckWidth: 360,
  deckHeight: 640,

  // Respondent Identification & Swipe Session State
  respondentId: 'USER-' + Math.random().toString(36).substring(2, 6).toUpperCase(),
  respondentStack: [],
  swipeHistory: [],
  mySessionAnswers: {},
  mySessionTypedTexts: {},

  // Global Response Data Stores by Deck ID
  responsesByDeck: {},
  participantRecordsByDeck: {}
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  loadCustomPresetsFromStorage();
  checkUrlSharedDeck();
  initModeNavigation();
  initQuestionerEvents();
  initRespondentEvents();
  initResultsEvents();
  initImageTransformDragEngine();
  initEmojiPickerPagination();

  ensureDeckResponsesInit(state.currentDeckId);
  updatePresetDropdownOptions();
  renderQuestionerSideList();
  renderAnswersConfigBar();
  updateEditorCardPreview();
  applyDeckSizeStyles();

  document.getElementById('input-respondent-id').value = state.respondentId;
});

/* ==========================================================================
   MULTI-DEVICE SHARING & URL DECK SYNC
   ========================================================================== */

function checkUrlSharedDeck() {
  try {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#sharedDeck=')) {
      const b64Data = hash.replace('#sharedDeck=', '');
      const jsonStr = decodeURIComponent(atob(b64Data));
      const sharedDeck = JSON.parse(jsonStr);

      if (sharedDeck && sharedDeck.cards && sharedDeck.cards.length > 0) {
        const deckId = 'shared-' + Date.now();
        loadPresetDeck(sharedDeck.cards, sharedDeck.name || '공유받은 덱', deckId);
        alert(`🌐 공유 링크를 통해 '${sharedDeck.name || '공유받은 덱'}'을 성공적으로 불러왔습니다!`);
      }
    }
  } catch (e) {
    console.error('Failed to parse shared deck from URL hash', e);
  }
}

function generateShareableLink() {
  try {
    const deckData = {
      name: state.currentDeckName || '나만의 덱',
      cards: state.cards
    };
    const jsonStr = JSON.stringify(deckData);
    const b64Data = btoa(encodeURIComponent(jsonStr));
    const fullUrl = `${window.location.origin}${window.location.pathname}#sharedDeck=${b64Data}`;

    navigator.clipboard.writeText(fullUrl).then(() => {
      alert("🔗 다른 기기(아이패드, 핸드폰 등)에서 즉시 열 수 있는 공유 링크가 클립보드에 복사되었습니다!\n\n카카오톡이나 메신저로 링크를 전달해 보세요!");
    }).catch(() => {
      prompt("아래 덱 공유 링크를 복사하여 전달하세요:", fullUrl);
    });
  } catch (e) {
    alert("공유 링크 생성 중 오류가 발생했습니다.");
  }
}

function exportDeckAsJson() {
  const deckData = {
    name: state.currentDeckName || '나만의 덱',
    version: '6.1',
    cards: state.cards
  };
  const jsonStr = JSON.stringify(deckData, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = `${(state.currentDeckName || 'deck').replace(/\s+/g, '_')}_qna_swiper.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function importDeckFromJson(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const imported = JSON.parse(e.target.result);
      if (imported && imported.cards && imported.cards.length > 0) {
        const deckId = 'custom-' + Date.now();
        const deckName = imported.name || file.name.replace('.json', '');
        
        state.customPresets[deckId.replace('custom-', '')] = {
          name: deckName,
          cards: imported.cards
        };
        saveCustomPresetsToStorage();

        loadPresetDeck(imported.cards, deckName, deckId);
        alert(`📥 '${deckName}' 덱을 성공적으로 불러왔습니다!`);
      } else {
        alert("올바른 Q&A SWIPER JSON 덱 파일이 아닙니다.");
      }
    } catch (err) {
      alert("JSON 파일 읽기 중 오류가 발생했습니다.");
    }
  };
  reader.readAsText(file);
}

/* ==========================================================================
   PERSISTENCE & PRESET STORAGE
   ========================================================================== */

function loadCustomPresetsFromStorage() {
  try {
    const stored = localStorage.getItem('swipe_survey_user_presets');
    if (stored) {
      state.customPresets = JSON.parse(stored);
    }
  } catch (e) {
    state.customPresets = {};
  }
}

function saveCustomPresetsToStorage() {
  try {
    localStorage.setItem('swipe_survey_user_presets', JSON.stringify(state.customPresets));
  } catch (e) {
    console.error('Failed to save custom presets', e);
  }
}

function updatePresetDropdownOptions() {
  const select = document.getElementById('preset-select');
  select.innerHTML = '<option value="">-- 덱 목록 선택 --</option>';

  const builtinGroup = document.createElement('optgroup');
  builtinGroup.label = '기본 제공 덱';
  for (const [key, preset] of Object.entries(BUILTIN_PRESETS)) {
    const opt = document.createElement('option');
    opt.value = `builtin:${key}`;
    opt.innerText = preset.name;
    if (state.currentDeckId === `preset-${key}`) opt.selected = true;
    builtinGroup.appendChild(opt);
  }
  select.appendChild(builtinGroup);

  const customGroup = document.createElement('optgroup');
  customGroup.label = '내가 만든 덱';
  
  const currentOpt = document.createElement('option');
  currentOpt.value = `current:${state.currentDeckId}`;
  currentOpt.innerText = `▶ [현재 작성 중인 덱] ${state.currentDeckName}`;
  if (!state.currentDeckId.startsWith('preset-') && !state.currentDeckId.startsWith('custom-')) {
    currentOpt.selected = true;
  }
  customGroup.appendChild(currentOpt);

  for (const [key, preset] of Object.entries(state.customPresets)) {
    const opt = document.createElement('option');
    opt.value = `custom:${key}`;
    opt.innerText = `⭐ ${preset.name}`;
    if (state.currentDeckId === `custom-${key}`) opt.selected = true;
    customGroup.appendChild(opt);
  }
  select.appendChild(customGroup);
}

/* ==========================================================================
   NAVIGATION & MODE SWITCHING
   ========================================================================== */

function initModeNavigation() {
  const navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetMode = btn.dataset.mode;
      switchMode(targetMode);
    });
  });

  document.getElementById('btn-go-to-results').addEventListener('click', () => switchMode('results'));
  document.getElementById('btn-restart-swipe').addEventListener('click', () => startRespondentSession());
}

function switchMode(mode) {
  state.currentMode = mode;
  
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === mode);
  });

  document.querySelectorAll('.mode-section').forEach(sec => {
    sec.classList.remove('active');
  });
  document.getElementById(`mode-${mode}`).classList.add('active');

  if (mode === 'respondent') {
    startRespondentSession();
  } else if (mode === 'results') {
    renderResultsDashboard(state.currentDeckId);
  }
}

/* ==========================================================================
   MODE 1: QUESTIONER MODULE
   ========================================================================== */

function initQuestionerEvents() {
  const textEditor = document.getElementById('editor-card-text');

  const saveCaretPosition = () => {
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0 && textEditor.contains(sel.anchorNode)) {
      state.savedCaretRange = sel.getRangeAt(0).cloneRange();
    }
  };

  textEditor.addEventListener('keyup', saveCaretPosition);
  textEditor.addEventListener('mouseup', saveCaretPosition);
  textEditor.addEventListener('touchend', saveCaretPosition);
  textEditor.addEventListener('blur', saveCaretPosition);

  document.getElementById('btn-save-current-deck').addEventListener('click', saveCurrentActiveDeckState);
  document.getElementById('btn-share-deck-link').addEventListener('click', generateShareableLink);
  document.getElementById('btn-export-deck-json').addEventListener('click', exportDeckAsJson);
  
  document.getElementById('import-deck-json-input').addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
      importDeckFromJson(e.target.files[0]);
      e.target.value = '';
    }
  });

  document.getElementById('preset-select').addEventListener('change', (e) => {
    const val = e.target.value;
    if (!val) return;

    if (val.startsWith('builtin:')) {
      const key = val.replace('builtin:', '');
      if (BUILTIN_PRESETS[key]) {
        loadPresetDeck(BUILTIN_PRESETS[key].cards, BUILTIN_PRESETS[key].name, `preset-${key}`);
      }
    } else if (val.startsWith('custom:')) {
      const key = val.replace('custom:', '');
      if (state.customPresets[key]) {
        loadPresetDeck(state.customPresets[key].cards, state.customPresets[key].name, `custom-${key}`);
      }
    }
  });

  document.getElementById('btn-save-as-preset').addEventListener('click', saveCurrentDeckAsPreset);
  document.getElementById('btn-rename-preset').addEventListener('click', renamePreset);

  textEditor.addEventListener('input', () => {
    const activeCard = getActiveCard();
    if (activeCard) {
      activeCard.text = textEditor.innerHTML.trim() || "질문을 입력하세요";
      renderQuestionerSideList();
    }
  });

  document.getElementById('btn-toggle-bold').addEventListener('click', () => formatTextSelection('bold'));
  document.getElementById('btn-toggle-underline').addEventListener('click', () => formatTextSelection('underline'));

  document.getElementById('text-color-picker').addEventListener('input', (e) => {
    const color = e.target.value;
    const selection = window.getSelection();
    
    if (selection && selection.rangeCount > 0 && !selection.isCollapsed && textEditor.contains(selection.anchorNode)) {
      document.execCommand('foreColor', false, color);
      const activeCard = getActiveCard();
      if (activeCard) activeCard.text = textEditor.innerHTML.trim();
    } else {
      const activeCard = getActiveCard();
      if (activeCard) {
        activeCard.textColor = color;
        updateEditorCardPreview();
      }
    }
  });

  document.getElementById('btn-open-emoji-picker').addEventListener('click', () => openEmojiPicker(null));
  document.getElementById('btn-close-emoji-picker').addEventListener('click', () => {
    document.getElementById('emoji-picker-popover').classList.add('hidden');
  });

  const fontSizeSlider = document.getElementById('font-size-slider');
  fontSizeSlider.addEventListener('input', (e) => {
    const sizeVal = parseInt(e.target.value, 10);
    document.getElementById('font-size-slider-val').innerText = `${sizeVal}px`;
    const activeCard = getActiveCard();
    if (activeCard) {
      activeCard.fontSizePx = sizeVal;
      updateEditorCardPreview();
    }
  });

  document.querySelectorAll('.font-size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const sizeMap = { small: 20, medium: 28, large: 34, xlarge: 42 };
      const val = sizeMap[btn.dataset.size] || 28;
      fontSizeSlider.value = val;
      document.getElementById('font-size-slider-val').innerText = `${val}px`;
      
      const activeCard = getActiveCard();
      if (activeCard) {
        activeCard.fontSizePx = val;
        updateEditorCardPreview();
      }
    });
  });

  document.querySelectorAll('.align-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const activeCard = getActiveCard();
      if (!activeCard) return;
      
      activeCard.alignment = btn.dataset.align;
      document.querySelectorAll('.align-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updateEditorCardPreview();
    });
  });

  const answerCountSlider = document.getElementById('answer-count-slider');
  answerCountSlider.addEventListener('input', (e) => {
    const count = parseInt(e.target.value, 10);
    document.getElementById('answer-count-val').innerText = `${count}개`;
    
    const activeCard = getActiveCard();
    if (activeCard) {
      activeCard.answerCount = count;
      ensureCardChoices(activeCard, count);
      renderAnswersConfigBar();
      updateEditorCardPreview();
    }
  });

  const toggleTextResponse = document.getElementById('toggle-text-response');
  toggleTextResponse.addEventListener('change', (e) => {
    const activeCard = getActiveCard();
    if (!activeCard) return;
    activeCard.hasTextResponse = e.target.checked;
    document.getElementById('text-response-val').innerText = activeCard.hasTextResponse ? 'ON' : 'OFF';
    updateEditorCardPreview();
  });

  document.getElementById('bg-file-input').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const activeCard = getActiveCard();
      if (!activeCard) return;
      activeCard.bgType = 'image';
      activeCard.bgImage = event.target.result;
      updateEditorCardPreview();
      renderQuestionerSideList();
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  });

  document.getElementById('batch-bg-file-input').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const bgData = event.target.result;
      state.cards.forEach(card => {
        card.bgType = 'image';
        card.bgImage = bgData;
      });
      updateEditorCardPreview();
      renderQuestionerSideList();
      alert("모든 질문 카드에 배경 이미지가 일괄 적용되었습니다!");
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  });

  const toggleBgEditBtn = document.getElementById('btn-toggle-bg-edit');
  toggleBgEditBtn.addEventListener('click', () => toggleImageEditMode());
  document.getElementById('btn-lock-bg-transform').addEventListener('click', () => toggleImageEditMode(false));

  document.getElementById('btn-reset-bg-transform').addEventListener('click', () => {
    const activeCard = getActiveCard();
    if (!activeCard) return;
    activeCard.bgPosX = 0; activeCard.bgPosY = 0; activeCard.bgScale = 100; activeCard.bgRotate = 0;
    document.getElementById('bg-scale-slider').value = 100;
    document.getElementById('bg-rotate-slider').value = 0;
    updateEditorCardPreview();
  });

  document.getElementById('bg-scale-slider').addEventListener('input', (e) => {
    const activeCard = getActiveCard();
    if (activeCard) {
      activeCard.bgScale = parseInt(e.target.value, 10);
      updateEditorCardPreview();
    }
  });

  document.getElementById('bg-rotate-slider').addEventListener('input', (e) => {
    const activeCard = getActiveCard();
    if (activeCard) {
      activeCard.bgRotate = parseInt(e.target.value, 10);
      updateEditorCardPreview();
    }
  });

  document.getElementById('btn-change-pastel').addEventListener('click', () => {
    const activeCard = getActiveCard();
    if (!activeCard) return;
    activeCard.bgType = 'pastel';
    activeCard.bgImage = null;
    activeCard.pastelIndex = (activeCard.pastelIndex + 1) % PASTEL_PALETTES.length;
    updateEditorCardPreview();
    renderQuestionerSideList();
  });

  document.getElementById('btn-remove-bg').addEventListener('click', () => {
    const activeCard = getActiveCard();
    if (!activeCard) return;
    activeCard.bgType = 'pastel';
    activeCard.bgImage = null;
    updateEditorCardPreview();
    renderQuestionerSideList();
  });

  document.getElementById('btn-delete-current-card').addEventListener('click', deleteCurrentCard);

  const toggleAuto = document.getElementById('toggle-auto-size');
  const manualControls = document.getElementById('manual-size-controls');
  const widthSlider = document.getElementById('deck-width-slider');
  const heightSlider = document.getElementById('deck-height-slider');

  toggleAuto.addEventListener('change', (e) => {
    state.autoDeckSize = e.target.checked;
    manualControls.style.display = state.autoDeckSize ? 'none' : 'flex';
    applyDeckSizeStyles();
  });

  widthSlider.addEventListener('input', (e) => {
    state.deckWidth = parseInt(e.target.value, 10);
    document.getElementById('deck-size-val').innerText = `${state.deckWidth}x${state.deckHeight}`;
    applyDeckSizeStyles();
  });

  heightSlider.addEventListener('input', (e) => {
    state.deckHeight = parseInt(e.target.value, 10);
    document.getElementById('deck-size-val').innerText = `${state.deckWidth}x${state.deckHeight}`;
    applyDeckSizeStyles();
  });
}

function saveCurrentActiveDeckState() {
  if (state.currentDeckId.startsWith('custom-')) {
    const key = state.currentDeckId.replace('custom-', '');
    if (state.customPresets[key]) {
      state.customPresets[key].cards = JSON.parse(JSON.stringify(state.cards));
    }
  } else {
    const key = 'preset_' + Date.now();
    state.currentDeckId = `custom-${key}`;
    state.customPresets[key] = {
      name: state.currentDeckName || "저장된 덱",
      cards: JSON.parse(JSON.stringify(state.cards))
    };
  }

  saveCustomPresetsToStorage();
  updatePresetDropdownOptions();
  alert(`💾 '${state.currentDeckName}' 덱의 질문 카드 목록과 모든 설정이 성공적으로 저장되었습니다!`);
}

function initEmojiPickerPagination() {
  document.getElementById('emoji-prev-page').addEventListener('click', () => {
    if (state.emojiCurrentPage > 0) {
      state.emojiCurrentPage--;
      renderEmojiPickerPage();
    }
  });

  document.getElementById('emoji-next-page').addEventListener('click', () => {
    if (state.emojiCurrentPage < IOS_EMOJI_PAGES.length - 1) {
      state.emojiCurrentPage++;
      renderEmojiPickerPage();
    }
  });
}

function openEmojiPicker(targetChoiceObj) {
  state.emojiPickerTarget = targetChoiceObj;
  state.emojiCurrentPage = 0;
  renderEmojiPickerPage();
  document.getElementById('emoji-picker-popover').classList.remove('hidden');
}

function renderEmojiPickerPage() {
  const grid = document.getElementById('emoji-grid');
  grid.innerHTML = '';

  const currentPageEmojis = IOS_EMOJI_PAGES[state.emojiCurrentPage] || IOS_EMOJI_PAGES[0];
  document.getElementById('emoji-page-indicator').innerText = `${state.emojiCurrentPage + 1} / ${IOS_EMOJI_PAGES.length} 페이지`;

  currentPageEmojis.forEach(emojiChar => {
    const span = document.createElement('span');
    span.innerText = emojiChar;
    span.addEventListener('click', () => {
      if (state.emojiPickerTarget) {
        state.emojiPickerTarget.emoji = emojiChar;
        renderAnswersConfigBar();
        updateEditorCardPreview();
      } else {
        insertEmojiAtCaretPosition(emojiChar);
      }
      document.getElementById('emoji-picker-popover').classList.add('hidden');
    });
    grid.appendChild(span);
  });
}

function insertEmojiAtCaretPosition(emojiChar) {
  const textEditor = document.getElementById('editor-card-text');
  textEditor.focus();

  const sel = window.getSelection();
  let range = state.savedCaretRange;

  if (!range || !textEditor.contains(range.commonAncestorContainer)) {
    sel.selectAllChildren(textEditor);
    sel.collapseToEnd();
    range = sel.getRangeAt(0);
  }

  sel.removeAllRanges();
  sel.addRange(range);

  const node = document.createTextNode(emojiChar);
  range.insertNode(node);
  range.setStartAfter(node);
  range.setEndAfter(node);
  sel.removeAllRanges();
  sel.addRange(range);

  state.savedCaretRange = range.cloneRange();

  const activeCard = getActiveCard();
  if (activeCard) {
    activeCard.text = textEditor.innerHTML.trim();
    renderQuestionerSideList();
  }
}

function toggleImageEditMode(forceState) {
  state.isEditingBg = forceState !== undefined ? forceState : !state.isEditingBg;
  const toggleBtn = document.getElementById('btn-toggle-bg-edit');
  const noticeBanner = document.getElementById('bg-edit-notice');

  if (state.isEditingBg) {
    toggleBtn.classList.add('editing');
    toggleBtn.innerText = '📐 이미지 수정 중 (클릭시 고정)';
    noticeBanner.classList.remove('hidden');
  } else {
    toggleBtn.classList.remove('editing');
    toggleBtn.innerText = '📐 이미지 수정 모드 (OFF)';
    noticeBanner.classList.add('hidden');
  }
}

function initImageTransformDragEngine() {
  const stage = document.getElementById('editor-card-element');
  let isDraggingBg = false;
  let startX = 0; let startY = 0;
  let initPosX = 0; let initPosY = 0;

  const onStart = (e) => {
    if (!state.isEditingBg) return;
    const card = getActiveCard();
    if (!card || card.bgType !== 'image') return;

    isDraggingBg = true;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    startX = clientX; startY = clientY;
    initPosX = card.bgPosX || 0; initPosY = card.bgPosY || 0;
  };

  const onMove = (e) => {
    if (!isDraggingBg) return;
    const card = getActiveCard();
    if (!card) return;

    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);

    card.bgPosX = initPosX + (clientX - startX);
    card.bgPosY = initPosY + (clientY - startY);
    updateEditorCardPreview();
  };

  const onEnd = () => { isDraggingBg = false; };

  stage.addEventListener('mousedown', onStart);
  window.addEventListener('mousemove', onMove);
  window.addEventListener('mouseup', onEnd);

  stage.addEventListener('touchstart', onStart, { passive: true });
  window.addEventListener('touchmove', onMove, { passive: true });
  window.addEventListener('touchend', onEnd);

  stage.addEventListener('wheel', (e) => {
    if (!state.isEditingBg) return;
    const card = getActiveCard();
    if (!card || card.bgType !== 'image') return;

    e.preventDefault();
    let currentScale = card.bgScale || 100;
    currentScale += e.deltaY < 0 ? 10 : -10;
    currentScale = Math.min(Math.max(currentScale, 50), 300);
    card.bgScale = currentScale;

    document.getElementById('bg-scale-slider').value = currentScale;
    updateEditorCardPreview();
  }, { passive: false });
}

function getActiveCard() {
  return state.cards[state.activeCardIndex];
}

function formatTextSelection(command) {
  const textEditor = document.getElementById('editor-card-text');
  textEditor.focus();
  
  if (command === 'bold') {
    document.execCommand('bold', false, null);
  } else if (command === 'underline') {
    document.execCommand('underline', false, null);
  }

  const activeCard = getActiveCard();
  if (activeCard) {
    activeCard.text = textEditor.innerHTML.trim();
    renderQuestionerSideList();
  }
}

function ensureCardChoices(card, count) {
  if (!card.choices) card.choices = [];
  while (card.choices.length < count) {
    const idx = card.choices.length;
    card.choices.push(JSON.parse(JSON.stringify(DEFAULT_CHOICES[idx % 8])));
  }
  card.choices = card.choices.slice(0, count);
}

function renderAnswersConfigBar() {
  const bar = document.getElementById('answers-config-bar');
  bar.innerHTML = '';

  const activeCard = getActiveCard();
  if (!activeCard) return;
  const count = activeCard.answerCount || 2;

  ensureCardChoices(activeCard, count);

  // Direction display label tags: 1st Left(←), 2nd Right(→)
  const dirNames = {
    LEFT: '왼쪽(←)', RIGHT: '오른쪽(→)', UP: '위쪽(↑)', DOWN: '아래쪽(↓)',
    OPTION_5: '대답5', OPTION_6: '대답6', OPTION_7: '대답7', OPTION_8: '대답8'
  };

  activeCard.choices.forEach((choice, idx) => {
    const item = document.createElement('div');
    item.className = 'ans-config-item';
    item.innerHTML = `
      <span class="ans-dir-tag">${dirNames[choice.dir] || (idx+1)}</span>
      <input type="text" class="tool-input-text" value="${choice.label}" title="문구 수정" placeholder="문구">
      <button class="tool-btn-emoji-trigger" title="이모티콘 선택">${choice.emoji}</button>
      <input type="color" class="color-picker-mini" value="${choice.color}" title="대답 창/뱃지 색상">
    `;

    const labelInput = item.querySelector('.tool-input-text');
    const emojiBtn = item.querySelector('.tool-btn-emoji-trigger');
    const colorInput = item.querySelector('.color-picker-mini');

    labelInput.addEventListener('input', (e) => {
      choice.label = e.target.value.trim() || '대답';
      updateEditorCardPreview();
    });

    emojiBtn.addEventListener('click', () => openEmojiPicker(choice));

    colorInput.addEventListener('input', (e) => {
      choice.color = e.target.value;
      updateEditorCardPreview();
    });

    bar.appendChild(item);
  });
}

function applyDeckSizeStyles() {
  const root = document.documentElement;
  if (state.autoDeckSize) {
    root.style.setProperty('--card-width', '360px');
    root.style.setProperty('--card-height', '640px');
  } else {
    root.style.setProperty('--card-width', `${state.deckWidth}px`);
    root.style.setProperty('--card-height', `${state.deckHeight}px`);
  }
}

function addNewCard() {
  const activeCard = getActiveCard();
  const currentCount = activeCard ? (activeCard.answerCount || 2) : 2;

  const newCard = {
    id: 'card-' + Date.now() + '-' + Math.floor(Math.random()*1000),
    text: "새 질문을 입력하세요",
    answerCount: currentCount,
    hasTextResponse: false,
    choices: JSON.parse(JSON.stringify(DEFAULT_CHOICES.slice(0, currentCount))),
    fontSizePx: 28,
    alignment: "center",
    textColor: "#ffffff",
    bgType: "pastel",
    pastelIndex: state.cards.length % PASTEL_PALETTES.length,
    bgImage: null,
    bgPosX: 0, bgPosY: 0, bgScale: 100, bgRotate: 0
  };
  state.cards.push(newCard);
  state.activeCardIndex = state.cards.length - 1;
  ensureDeckResponsesInit(state.currentDeckId);
  renderQuestionerSideList();
  renderAnswersConfigBar();
  updateEditorCardPreview();
}

function deleteCurrentCard() {
  if (state.cards.length <= 1) {
    alert("최소 1개 이상의 질문 카드가 필요합니다.");
    return;
  }
  state.cards.splice(state.activeCardIndex, 1);
  if (state.activeCardIndex >= state.cards.length) {
    state.activeCardIndex = state.cards.length - 1;
  }
  renderQuestionerSideList();
  renderAnswersConfigBar();
  updateEditorCardPreview();
}

function saveCurrentDeckAsPreset() {
  const presetName = prompt("저장할 덱의 이름을 입력하세요:", state.currentDeckName || "나만의 덱");
  if (!presetName) return;

  const key = 'preset_' + Date.now();
  state.currentDeckId = `custom-${key}`;
  state.currentDeckName = presetName;
  state.customPresets[key] = {
    name: presetName,
    cards: JSON.parse(JSON.stringify(state.cards))
  };

  saveCustomPresetsToStorage();
  updatePresetDropdownOptions();
  alert(`'${presetName}' 덱이 목록에 성공적으로 저장되었습니다!`);
}

function renamePreset() {
  const select = document.getElementById('preset-select');
  const val = select.value;
  if (!val || !val.startsWith('custom:')) {
    alert("이름을 변경할 '내가 만든 덱'을 먼저 선택해주세요.");
    return;
  }

  const key = val.replace('custom:', '');
  const preset = state.customPresets[key];
  if (!preset) return;

  const newName = prompt("새로운 덱 이름을 입력하세요:", preset.name);
  if (!newName) return;

  preset.name = newName;
  state.currentDeckName = newName;
  saveCustomPresetsToStorage();
  updatePresetDropdownOptions();
  alert("덱 이름이 변경되었습니다.");
}

function loadPresetDeck(cardsData, deckName, deckId) {
  state.currentDeckId = deckId || 'deck-' + Date.now();
  state.currentDeckName = deckName || '선택한 덱';

  state.cards = cardsData.map((c, i) => {
    const cardChoices = c.choices || JSON.parse(JSON.stringify(DEFAULT_CHOICES.slice(0, c.answerCount || 2)));
    return {
      ...c,
      id: c.id || ('card-' + Date.now() + '-' + i),
      answerCount: c.answerCount || cardChoices.length,
      hasTextResponse: c.hasTextResponse || false,
      choices: cardChoices,
      fontSizePx: c.fontSizePx || 28,
      alignment: c.alignment || 'center',
      bgPosX: c.bgPosX || 0, bgPosY: c.bgPosY || 0, bgScale: c.bgScale || 100, bgRotate: c.bgRotate || 0
    };
  });

  state.activeCardIndex = 0;
  ensureDeckResponsesInit(state.currentDeckId);
  updatePresetDropdownOptions();
  renderQuestionerSideList();
  renderAnswersConfigBar();
  updateEditorCardPreview();
}

function renderQuestionerSideList() {
  const container = document.getElementById('card-thumbnails-container');
  container.innerHTML = '';

  document.getElementById('card-count-badge').innerText = state.cards.length;

  state.cards.forEach((card, idx) => {
    const item = document.createElement('div');
    item.className = `thumbnail-item ${idx === state.activeCardIndex ? 'active' : ''}`;
    
    if (card.bgType === 'image' && card.bgImage) {
      item.style.backgroundImage = `url(${card.bgImage})`;
      item.style.backgroundSize = 'cover';
    } else {
      item.style.background = PASTEL_PALETTES[card.pastelIndex % PASTEL_PALETTES.length];
    }

    const cleanText = card.text.replace(/<[^>]*>?/gm, '');

    item.innerHTML = `
      <div class="thumb-overlay"></div>
      <div class="thumb-text">${idx + 1}. ${cleanText}</div>
    `;

    item.addEventListener('click', () => {
      state.activeCardIndex = idx;
      renderQuestionerSideList();
      renderAnswersConfigBar();
      updateEditorCardPreview();
    });

    container.appendChild(item);
  });

  const addBtn = document.createElement('button');
  addBtn.className = 'add-card-thumb-btn';
  addBtn.innerHTML = '<span>+ 새 질문 카드 추가</span>';
  addBtn.addEventListener('click', () => addNewCard());
  container.appendChild(addBtn);
}

function updateEditorCardPreview() {
  const card = getActiveCard();
  if (!card) return;

  const bgLayer = document.getElementById('editor-bg-layer');
  const textElement = document.getElementById('editor-card-text');
  const watermarkElement = document.getElementById('editor-card-watermark');
  const textboxPreview = document.getElementById('editor-textbox-preview');

  if (card.bgType === 'image' && card.bgImage) {
    bgLayer.style.backgroundImage = `url(${card.bgImage})`;
    bgLayer.style.backgroundSize = 'cover';
    bgLayer.style.transform = `translate3d(${card.bgPosX || 0}px, ${card.bgPosY || 0}px, 0) scale(${(card.bgScale || 100) / 100}) rotate(${card.bgRotate || 0}deg)`;
  } else {
    bgLayer.style.backgroundImage = 'none';
    bgLayer.style.background = PASTEL_PALETTES[card.pastelIndex % PASTEL_PALETTES.length];
    bgLayer.style.transform = 'none';
  }

  if (textElement.innerHTML !== card.text) {
    textElement.innerHTML = card.text;
  }
  
  textElement.style.color = card.textColor || '#ffffff';
  textElement.style.fontSize = `${card.fontSizePx || 28}px`;
  textElement.style.textAlign = card.alignment || 'center';
  textElement.style.display = 'block';
  textElement.style.visibility = 'visible';
  textElement.className = `card-question-text align-${card.alignment || 'center'}`;

  if (card.hasTextResponse) {
    textboxPreview.classList.remove('hidden');
  } else {
    textboxPreview.classList.add('hidden');
  }

  watermarkElement.innerHTML = '';
  const choices = card.choices || DEFAULT_CHOICES.slice(0, card.answerCount || 2);
  choices.forEach(ch => {
    const span = document.createElement('span');
    span.innerHTML = `<strong style="color:${ch.color}">${ch.emoji} ${ch.label}</strong>`;
    watermarkElement.appendChild(span);
  });

  document.getElementById('font-size-slider').value = card.fontSizePx || 28;
  document.getElementById('font-size-slider-val').innerText = `${card.fontSizePx || 28}px`;

  document.getElementById('answer-count-slider').value = card.answerCount || choices.length;
  document.getElementById('answer-count-val').innerText = `${card.answerCount || choices.length}개`;

  document.getElementById('toggle-text-response').checked = card.hasTextResponse || false;
  document.getElementById('text-response-val').innerText = card.hasTextResponse ? 'ON' : 'OFF';

  document.getElementById('bg-scale-slider').value = card.bgScale || 100;
  document.getElementById('bg-rotate-slider').value = card.bgRotate || 0;

  document.querySelectorAll('.align-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.align === card.alignment);
  });
  document.getElementById('text-color-picker').value = card.textColor || '#ffffff';
}

/* ==========================================================================
   MODE 2: RESPONDENT MODULE (SWIPE MAPPING: ← LEFT: Index 0, → RIGHT: Index 1)
   ========================================================================== */

function initRespondentEvents() {
  const idInput = document.getElementById('input-respondent-id');
  idInput.addEventListener('change', (e) => {
    state.respondentId = e.target.value.trim() || 'USER-ANON';
  });

  // KEYBOARD ARROW MAPPING:
  // ← Left Arrow: Selects Index 0 (Direction: LEFT, default label: '아니오')
  // → Right Arrow: Selects Index 1 (Direction: RIGHT, default label: '예')
  // ↑ Up Arrow: Selects Index 2 (Direction: UP, default label: '글쎄요')
  // ↓ Down Arrow: Selects Index 3 (Direction: DOWN, default label: '상관없음')
  window.addEventListener('keydown', (e) => {
    if (state.currentMode !== 'respondent') return;
    const currentCard = state.respondentStack[0];
    if (!currentCard) return;

    const count = currentCard.answerCount || (currentCard.choices ? currentCard.choices.length : 2);

    if (count <= 4) {
      if (e.key === 'ArrowLeft') executeSwipe(0);
      else if (e.key === 'ArrowRight') executeSwipe(1);
      else if (e.key === 'ArrowUp' && count >= 3) executeSwipe(2);
      else if (e.key === 'ArrowDown' && count === 4) executeSwipe(3);
    }
  });
}

function startRespondentSession() {
  state.respondentStack = JSON.parse(JSON.stringify(state.cards));
  state.swipeHistory = [];
  state.mySessionAnswers = {};
  state.mySessionTypedTexts = {};
  
  document.getElementById('completion-view').classList.add('hidden');
  document.getElementById('respondent-card-stack').style.display = 'block';

  renderRespondentCardStack();
  updateRespondentProgressBar();
}

function updateRespondentProgressBar() {
  const total = state.cards.length;
  const swipedCount = state.swipeHistory.length;
  const currentNum = Math.min(swipedCount + 1, total);

  document.getElementById('current-card-num').innerText = currentNum;
  document.getElementById('total-card-num').innerText = total;

  const percent = (swipedCount / total) * 100;
  document.getElementById('respondent-progress-fill').style.width = `${percent}%`;
}

function renderRespondentCardStack() {
  const stackContainer = document.getElementById('respondent-card-stack');
  stackContainer.innerHTML = '';

  if (state.respondentStack.length === 0) {
    saveParticipantSubmissionRecord();
    stackContainer.style.display = 'none';
    document.getElementById('completion-view').classList.remove('hidden');
    return;
  }

  const visibleCards = state.respondentStack.slice(0, 3);
  
  visibleCards.forEach((card, index) => {
    const cardEl = document.createElement('div');
    cardEl.className = 'swipe-card';
    cardEl.dataset.cardId = card.id;

    const bgLayer = document.createElement('div');
    bgLayer.className = 'card-bg-layer';
    if (card.bgType === 'image' && card.bgImage) {
      bgLayer.style.backgroundImage = `url(${card.bgImage})`;
      bgLayer.style.backgroundSize = 'cover';
      bgLayer.style.transform = `translate3d(${card.bgPosX || 0}px, ${card.bgPosY || 0}px, 0) scale(${(card.bgScale || 100) / 100}) rotate(${card.bgRotate || 0}deg)`;
    } else {
      bgLayer.style.background = PASTEL_PALETTES[card.pastelIndex % PASTEL_PALETTES.length];
    }
    cardEl.appendChild(bgLayer);

    const overlay = document.createElement('div');
    overlay.className = 'card-bg-overlay';
    cardEl.appendChild(overlay);

    const contentBox = document.createElement('div');
    contentBox.className = 'card-content-area';

    const textEl = document.createElement('div');
    textEl.className = `card-question-text align-${card.alignment || 'center'}`;
    textEl.innerHTML = card.text;
    textEl.style.color = card.textColor || '#ffffff';
    textEl.style.fontSize = `${card.fontSizePx || 28}px`;
    textEl.style.textAlign = card.alignment || 'center';
    contentBox.appendChild(textEl);

    if (card.hasTextResponse && index === 0) {
      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'respondent-text-input';
      input.placeholder = '✍️ 대답을 직접 입력하세요 (엔터 또는 선택시 제출)...';
      input.value = state.mySessionTypedTexts[card.id] || '';
      
      input.addEventListener('input', (e) => {
        state.mySessionTypedTexts[card.id] = e.target.value;
      });
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          executeSwipe(0);
        }
      });
      contentBox.appendChild(input);
    }

    cardEl.appendChild(contentBox);

    const choices = card.choices || DEFAULT_CHOICES.slice(0, card.answerCount || 2);
    
    // 2~4 Swipe Stamps Rendering (Choice Index 0: Left/stamp-no, Choice Index 1: Right/stamp-yes)
    if (card.answerCount <= 4) {
      if (choices[0]) {
        const stampNo = document.createElement('div');
        stampNo.className = 'swipe-stamp stamp-no';
        stampNo.style.borderColor = choices[0].color;
        stampNo.style.color = choices[0].color;
        stampNo.innerText = `${choices[0].emoji} ${choices[0].label}`;
        cardEl.appendChild(stampNo);
      }
      if (choices[1]) {
        const stampYes = document.createElement('div');
        stampYes.className = 'swipe-stamp stamp-yes';
        stampYes.style.borderColor = choices[1].color;
        stampYes.style.color = choices[1].color;
        stampYes.innerText = `${choices[1].emoji} ${choices[1].label}`;
        cardEl.appendChild(stampYes);
      }
      if (choices[2]) {
        const stampUp = document.createElement('div');
        stampUp.className = 'swipe-stamp stamp-up';
        stampUp.style.borderColor = choices[2].color;
        stampUp.style.color = choices[2].color;
        stampUp.innerText = `${choices[2].emoji} ${choices[2].label}`;
        cardEl.appendChild(stampUp);
      }
      if (choices[3]) {
        const stampDown = document.createElement('div');
        stampDown.className = 'swipe-stamp stamp-down';
        stampDown.style.borderColor = choices[3].color;
        stampDown.style.color = choices[3].color;
        stampDown.innerText = `${choices[3].emoji} ${choices[3].label}`;
        cardEl.appendChild(stampDown);
      }
    }

    stackContainer.insertBefore(cardEl, stackContainer.firstChild);

    if (index === 0) {
      renderSwipeActionButtons(card);
      if (card.answerCount <= 4) {
        attach4WayCardDragPhysics(cardEl, card);
      }
    }
  });
}

function renderSwipeActionButtons(card) {
  const container = document.getElementById('respondent-swipe-controls');
  container.innerHTML = '';

  const count = card.answerCount || 2;
  const choices = card.choices || DEFAULT_CHOICES.slice(0, count);

  if (count <= 4) {
    choices.forEach((ch, idx) => {
      const btn = document.createElement('button');
      btn.className = 'swipe-btn';
      btn.style.background = `${ch.color}22`;
      btn.style.border = `2px solid ${ch.color}`;
      btn.style.color = ch.color;
      btn.innerHTML = `<span class="btn-icon">${ch.emoji}</span> <span class="btn-text">${ch.label}</span>`;
      btn.addEventListener('click', () => executeSwipe(idx));
      container.appendChild(btn);
    });
  } else {
    const boxGrid = document.createElement('div');
    boxGrid.className = 'box-choices-grid';

    choices.forEach((ch, idx) => {
      const boxBtn = document.createElement('button');
      boxBtn.className = 'choice-box-btn';
      boxBtn.style.borderColor = ch.color;
      boxBtn.style.color = ch.color;
      boxBtn.innerHTML = `<span>${ch.emoji}</span> <span>${ch.label}</span>`;
      boxBtn.addEventListener('click', () => executeSwipe(idx));
      boxGrid.appendChild(boxBtn);
    });

    container.appendChild(boxGrid);
  }

  const undoBtn = document.createElement('button');
  undoBtn.className = 'swipe-btn btn-undo';
  undoBtn.title = '되돌리기';
  undoBtn.innerHTML = '<span class="btn-icon">↺</span>';
  undoBtn.addEventListener('click', undoLastSwipe);
  container.appendChild(undoBtn);
}

// 4-WAY DRAG PHYSICS:
// Left drag (currentX < -threshold) -> Choice 0 (Direction: LEFT, default label: '아니오')
// Right drag (currentX > threshold) -> Choice 1 (Direction: RIGHT, default label: '예')
function attach4WayCardDragPhysics(cardEl, cardData) {
  let isDragging = false;
  let startX = 0; let startY = 0;
  let currentX = 0; let currentY = 0;

  const stampNo = cardEl.querySelector('.stamp-no');
  const stampYes = cardEl.querySelector('.stamp-yes');
  const stampUp = cardEl.querySelector('.stamp-up');
  const stampDown = cardEl.querySelector('.stamp-down');

  const answerCount = cardData.answerCount || 2;

  const onPointerDown = (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    isDragging = true;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    startX = clientX; startY = clientY;
    cardEl.style.transition = 'none';
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    if (e.cancelable) e.preventDefault();

    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    
    currentX = clientX - startX;
    currentY = clientY - startY;

    cardEl.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) rotate(${currentX * 0.08}deg)`;

    if (stampNo) stampNo.style.opacity = 0;
    if (stampYes) stampYes.style.opacity = 0;
    if (stampUp) stampUp.style.opacity = 0;
    if (stampDown) stampDown.style.opacity = 0;

    if (Math.abs(currentX) > Math.abs(currentY)) {
      if (currentX < -20 && stampNo) stampNo.style.opacity = Math.min(Math.abs(currentX) / 100, 1);
      else if (currentX > 20 && stampYes) stampYes.style.opacity = Math.min(currentX / 100, 1);
    } else {
      if (currentY < -20 && stampUp && answerCount >= 3) stampUp.style.opacity = Math.min(Math.abs(currentY) / 100, 1);
      else if (currentY > 20 && stampDown && answerCount === 4) stampDown.style.opacity = Math.min(currentY / 100, 1);
    }
  };

  const onPointerUp = () => {
    if (!isDragging) return;
    isDragging = false;
    cardEl.style.transition = 'transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)';

    const threshold = 90;

    if (Math.abs(currentX) > Math.abs(currentY)) {
      if (currentX < -threshold) { executeSwipe(0); return; } // Left -> Choice 0 (아니오)
      else if (currentX > threshold) { executeSwipe(1); return; } // Right -> Choice 1 (예)
    } else {
      if (currentY < -threshold && answerCount >= 3) { executeSwipe(2); return; }
      else if (currentY > threshold && answerCount === 4) { executeSwipe(3); return; }
    }

    cardEl.style.transform = 'translate3d(0, 0, 0) rotate(0deg)';
    if (stampNo) stampNo.style.opacity = 0;
    if (stampYes) stampYes.style.opacity = 0;
    if (stampUp) stampUp.style.opacity = 0;
    if (stampDown) stampDown.style.opacity = 0;
  };

  cardEl.addEventListener('mousedown', onPointerDown);
  window.addEventListener('mousemove', onPointerMove);
  window.addEventListener('mouseup', onPointerUp);

  cardEl.addEventListener('touchstart', onPointerDown, { passive: true });
  window.addEventListener('touchmove', onPointerMove, { passive: false });
  window.addEventListener('touchend', onPointerUp);
}

function executeSwipe(choiceIdx) {
  if (state.respondentStack.length === 0) return;

  const currentCard = state.respondentStack[0];
  const stackContainer = document.getElementById('respondent-card-stack');
  const topCardEl = stackContainer.lastElementChild;

  if (!topCardEl) return;

  // Flight vectors: Index 0 is Left (-1000, 0), Index 1 is Right (1000, 0)
  const flyDirs = [
    { x: -1000, y: 0, r: -45 }, // Index 0 (LEFT)
    { x: 1000, y: 0, r: 45 },   // Index 1 (RIGHT)
    { x: 0, y: -1000, r: 0 },   // Index 2 (UP)
    { x: 0, y: 1000, r: 0 },    // Index 3 (DOWN)
    { x: -500, y: 500, r: -25 },
    { x: 500, y: 500, r: 25 },
    { x: -500, y: -500, r: -25 },
    { x: 500, y: -500, r: 25 }
  ];

  const fly = flyDirs[choiceIdx] || flyDirs[0];

  topCardEl.style.transition = 'transform 0.35s ease-out, opacity 0.35s ease-out';
  topCardEl.style.transform = `translate3d(${fly.x}px, ${fly.y}px, 0) rotate(${fly.r}deg)`;
  topCardEl.style.opacity = '0';

  state.mySessionAnswers[currentCard.id] = choiceIdx;
  recordDeckChoiceResponse(state.currentDeckId, currentCard.id, choiceIdx);

  state.swipeHistory.push({
    card: currentCard,
    choiceIdx: choiceIdx,
    typedText: state.mySessionTypedTexts[currentCard.id] || ''
  });
  
  state.respondentStack.shift();

  setTimeout(() => {
    renderRespondentCardStack();
    updateRespondentProgressBar();
  }, 250);
}

function undoLastSwipe() {
  if (state.swipeHistory.length === 0) return;

  const lastSwiped = state.swipeHistory.pop();
  delete state.mySessionAnswers[lastSwiped.card.id];
  delete state.mySessionTypedTexts[lastSwiped.card.id];
  
  const deckResp = state.responsesByDeck[state.currentDeckId];
  if (deckResp && deckResp[lastSwiped.card.id]) {
    deckResp[lastSwiped.card.id][lastSwiped.choiceIdx] = Math.max(0, (deckResp[lastSwiped.card.id][lastSwiped.choiceIdx] || 0) - 1);
  }

  state.respondentStack.unshift(lastSwiped.card);
  document.getElementById('completion-view').classList.add('hidden');
  document.getElementById('respondent-card-stack').style.display = 'block';

  renderRespondentCardStack();
  updateRespondentProgressBar();
}

function recordDeckChoiceResponse(deckId, cardId, choiceIdx) {
  ensureDeckResponsesInit(deckId);
  if (!state.responsesByDeck[deckId][cardId]) {
    state.responsesByDeck[deckId][cardId] = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 };
  }
  if (!state.responsesByDeck[deckId][cardId][choiceIdx]) {
    state.responsesByDeck[deckId][cardId][choiceIdx] = 0;
  }
  state.responsesByDeck[deckId][cardId][choiceIdx]++;
}

function saveParticipantSubmissionRecord() {
  const deckId = state.currentDeckId;
  if (!state.participantRecordsByDeck[deckId]) {
    state.participantRecordsByDeck[deckId] = [];
  }

  const record = {
    respondentId: state.respondentId || 'USER-ANON',
    timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    answers: { ...state.mySessionAnswers },
    typedTexts: { ...state.mySessionTypedTexts }
  };

  state.participantRecordsByDeck[deckId].push(record);
}

function ensureDeckResponsesInit(deckId) {
  if (!state.responsesByDeck[deckId]) {
    state.responsesByDeck[deckId] = {};
  }
  
  let deckCards = state.cards;
  if (deckId.startsWith('preset-')) {
    const key = deckId.replace('preset-', '');
    if (BUILTIN_PRESETS[key]) deckCards = BUILTIN_PRESETS[key].cards;
  } else if (deckId.startsWith('custom-')) {
    const key = deckId.replace('custom-', '');
    if (state.customPresets[key]) deckCards = state.customPresets[key].cards;
  }

  deckCards.forEach(card => {
    if (!state.responsesByDeck[deckId][card.id]) {
      state.responsesByDeck[deckId][card.id] = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 };
    }
  });
}

/* ==========================================================================
   MODE 3: RESULTS MODULE
   ========================================================================== */

function initResultsEvents() {
  document.getElementById('results-deck-select').addEventListener('change', (e) => {
    renderResultsDashboard(e.target.value);
  });

  const tabBtns = document.querySelectorAll('.res-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetTab = btn.dataset.tab;
      document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
      document.getElementById(`tab-${targetTab}`).classList.add('active');
    });
  });

  document.getElementById('kpi-card-top-yes').addEventListener('click', () => openQuestionRankingModal('highest'));
  document.getElementById('kpi-card-top-no').addEventListener('click', () => openQuestionRankingModal('lowest'));

  document.getElementById('btn-close-ranking-popover').addEventListener('click', () => {
    document.getElementById('ranking-popover').classList.add('hidden');
  });

  document.getElementById('btn-add-demo-data').addEventListener('click', () => {
    const activeDeckId = document.getElementById('results-deck-select').value || state.currentDeckId;
    addSimulationData(activeDeckId, 10);
    renderResultsDashboard(activeDeckId);
  });

  document.getElementById('btn-copy-summary').addEventListener('click', () => {
    const activeDeckId = document.getElementById('results-deck-select').value || state.currentDeckId;
    copyResultsSummary(activeDeckId);
  });

  document.getElementById('btn-reset-results').addEventListener('click', () => {
    const activeDeckId = document.getElementById('results-deck-select').value || state.currentDeckId;
    if (confirm("이 덱의 모든 응답 통계 데이터를 초기화하시겠습니까?")) {
      resetResponses(activeDeckId);
      renderResultsDashboard(activeDeckId);
    }
  });
}

function updateResultsDeckDropdown(activeDeckId) {
  const select = document.getElementById('results-deck-select');
  select.innerHTML = '';

  const currentOpt = document.createElement('option');
  currentOpt.value = state.currentDeckId;
  currentOpt.innerText = `▶ [현재 질문자 덱] ${state.currentDeckName}`;
  select.appendChild(currentOpt);

  for (const [key, preset] of Object.entries(BUILTIN_PRESETS)) {
    const deckId = `preset-${key}`;
    if (deckId !== state.currentDeckId) {
      const opt = document.createElement('option');
      opt.value = deckId;
      opt.innerText = preset.name;
      select.appendChild(opt);
    }
  }

  for (const [key, preset] of Object.entries(state.customPresets)) {
    const deckId = `custom-${key}`;
    if (deckId !== state.currentDeckId) {
      const opt = document.createElement('option');
      opt.value = deckId;
      opt.innerText = `⭐ ${preset.name}`;
      select.appendChild(opt);
    }
  }

  select.value = activeDeckId || state.currentDeckId;
}

function renderResultsDashboard(targetDeckId) {
  const deckId = targetDeckId || state.currentDeckId;
  ensureDeckResponsesInit(deckId);
  updateResultsDeckDropdown(deckId);

  let deckCards = state.cards;
  if (deckId.startsWith('preset-')) {
    const key = deckId.replace('preset-', '');
    if (BUILTIN_PRESETS[key]) deckCards = BUILTIN_PRESETS[key].cards;
  } else if (deckId.startsWith('custom-')) {
    const key = deckId.replace('custom-', '');
    if (state.customPresets[key]) deckCards = state.customPresets[key].cards;
  }

  const responses = state.responsesByDeck[deckId] || {};

  let totalQuestions = deckCards.length;
  let totalResponses = 0;
  let highestStatCard = null;
  let highestStatPct = -1;
  let lowestStatCard = null;
  let lowestStatPct = 101;

  deckCards.forEach(card => {
    const res = responses[card.id] || { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 };
    const choices = card.choices || DEFAULT_CHOICES.slice(0, card.answerCount || 2);
    let qTotal = 0;
    choices.forEach((_, cIdx) => { qTotal += (res[cIdx] || 0); });
    totalResponses += qTotal;

    if (qTotal > 0) {
      const topChoicePct = ((res[1] || 0) / qTotal) * 100; // Right/Yes choice pct
      if (topChoicePct > highestStatPct) {
        highestStatPct = topChoicePct;
        highestStatCard = card;
      }
      if (topChoicePct < lowestStatPct) {
        lowestStatPct = topChoicePct;
        lowestStatCard = card;
      }
    }
  });

  const participantsList = state.participantRecordsByDeck[deckId] || [];
  const uniqueParticipantsCount = Math.max(participantsList.length, Math.ceil(totalResponses / Math.max(totalQuestions, 1)));

  document.getElementById('kpi-total-questions').innerText = totalQuestions;
  document.getElementById('kpi-total-responses').innerText = `${uniqueParticipantsCount}명 (${totalResponses}응답)`;
  
  const cleanTopYes = highestStatCard ? highestStatCard.text.replace(/<[^>]*>?/gm, '') : '-';
  const cleanTopNo = lowestStatCard ? lowestStatCard.text.replace(/<[^>]*>?/gm, '') : '-';

  document.getElementById('kpi-top-yes').innerText = highestStatCard ? `${cleanTopYes} (${Math.round(highestStatPct)}%)` : '-';
  document.getElementById('kpi-top-no').innerText = lowestStatCard ? `${cleanTopNo} (${Math.round(lowestStatPct)}%)` : '-';

  renderChartsTab(deckCards, responses);
  renderParticipantsTableTab(deckCards, deckId);
  renderCardBreakdownTab(deckCards, responses);
  renderTopicSpecificCustomAnalysisTab(deckCards, responses, deckId);
  renderTypedResponsesTab(deckCards, deckId);
}

function renderTypedResponsesTab(deckCards, deckId) {
  const container = document.getElementById('typed-responses-container');
  container.innerHTML = '';

  const records = state.participantRecordsByDeck[deckId] || [];

  deckCards.forEach((card, idx) => {
    const cleanQ = card.text.replace(/<[^>]*>?/gm, '');
    const group = document.createElement('div');
    group.className = 'typed-card-group';
    
    let itemsHtml = '';
    records.forEach(rec => {
      const typedText = rec.typedTexts ? rec.typedTexts[card.id] : null;
      if (typedText && typedText.trim() !== '') {
        itemsHtml += `
          <div class="typed-item-row">
            <span class="typed-item-user">👤 ${rec.respondentId}</span>
            <span class="typed-item-text">"${typedText}"</span>
            <span class="typed-item-time">${rec.timestamp}</span>
          </div>
        `;
      }
    });

    if (itemsHtml === '') {
      itemsHtml = `<div style="color:var(--text-muted); font-size:12px; padding:6px 0;">작성된 자유 텍스트 대답이 없습니다.</div>`;
    }

    group.innerHTML = `
      <div class="typed-card-title">${idx + 1}. ${cleanQ} ${card.hasTextResponse ? '✍️ (대답 텍스트 박스 ON)' : ''}</div>
      <div class="typed-items-grid">${itemsHtml}</div>
    `;

    container.appendChild(group);
  });
}

function openQuestionRankingModal(rankType) {
  const activeDeckId = document.getElementById('results-deck-select').value || state.currentDeckId;
  let deckCards = state.cards;
  if (activeDeckId.startsWith('preset-')) {
    const key = activeDeckId.replace('preset-', '');
    if (BUILTIN_PRESETS[key]) deckCards = BUILTIN_PRESETS[key].cards;
  } else if (activeDeckId.startsWith('custom-')) {
    const key = activeDeckId.replace('custom-', '');
    if (state.customPresets[key]) deckCards = state.customPresets[key].cards;
  }

  const responses = state.responsesByDeck[activeDeckId] || {};

  const rankedList = deckCards.map((card, idx) => {
    const res = responses[card.id] || { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 };
    const choices = card.choices || DEFAULT_CHOICES.slice(0, card.answerCount || 2);
    let qTotal = 0;
    choices.forEach((_, cIdx) => { qTotal += (res[cIdx] || 0); });
    const topPct = qTotal > 0 ? Math.round(((res[1] || 0) / qTotal) * 100) : 0;
    return { card, originalIdx: idx, topPct, total: qTotal, topChoice: choices[1] || choices[0] };
  });

  if (rankType === 'highest') {
    rankedList.sort((a, b) => b.topPct - a.topPct);
    document.getElementById('ranking-title').innerText = '🏆 질문 찬성/선택 높은 순위표 (클릭시 바로 이동)';
  } else {
    rankedList.sort((a, b) => a.topPct - b.topPct);
    document.getElementById('ranking-title').innerText = '🔻 질문 찬성/선택 낮은 순위표 (클릭시 바로 이동)';
  }

  const container = document.getElementById('ranking-list');
  container.innerHTML = '';

  rankedList.forEach((item, rIdx) => {
    const cleanText = item.card.text.replace(/<[^>]*>?/gm, '');
    const row = document.createElement('div');
    row.className = 'ranking-item';
    row.innerHTML = `
      <span class="rank-badge">${rIdx + 1}위</span>
      <span class="rank-question-text">${cleanText}</span>
      <span class="rank-stat-pct" style="color: ${item.topChoice.color};">${item.topChoice.emoji} ${item.topPct}%</span>
    `;

    row.addEventListener('click', () => {
      document.getElementById('ranking-popover').classList.add('hidden');
      
      document.querySelectorAll('.res-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelector('.res-tab-btn[data-tab="chart"]').classList.add('active');
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
      document.getElementById('tab-chart').classList.add('active');

      const chartEl = document.getElementById(`chart-card-item-${item.originalIdx}`);
      if (chartEl) {
        chartEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        chartEl.classList.remove('highlighted');
        void chartEl.offsetWidth;
        chartEl.classList.add('highlighted');
      }
    });

    container.appendChild(row);
  });

  document.getElementById('ranking-popover').classList.remove('hidden');
}

function renderChartsTab(deckCards, responses) {
  const container = document.getElementById('charts-container');
  container.innerHTML = '';

  deckCards.forEach((card, idx) => {
    const res = responses[card.id] || { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 };
    const choices = card.choices || DEFAULT_CHOICES.slice(0, card.answerCount || 2);
    
    let qTotal = 0;
    choices.forEach((_, cIdx) => { qTotal += (res[cIdx] || 0); });

    const cleanText = card.text.replace(/<[^>]*>?/gm, '');

    const item = document.createElement('div');
    item.className = 'chart-card-item';
    item.id = `chart-card-item-${idx}`;

    let barSegmentsHtml = '';
    choices.forEach((ch, cIdx) => {
      const count = res[cIdx] || 0;
      const pct = qTotal > 0 ? Math.round((count / qTotal) * 100) : Math.round(100 / choices.length);
      barSegmentsHtml += `
        <div class="bar-segment" style="width: ${pct}%; background: ${ch.color};">
          ${pct > 5 ? `${ch.emoji} ${ch.label} ${pct}% (${count}표)` : ''}
        </div>
      `;
    });

    item.innerHTML = `
      <div class="chart-card-header">
        <div class="chart-question-title">${idx + 1}. ${cleanText}</div>
        <div class="chart-total-count">총 응답 ${qTotal}회</div>
      </div>
      <div class="bar-chart-track">
        ${barSegmentsHtml}
      </div>
    `;
    container.appendChild(item);
  });
}

function renderParticipantsTableTab(deckCards, deckId) {
  const headTr = document.getElementById('participant-table-head');
  const tbody = document.getElementById('participant-table-body');
  headTr.innerHTML = '';
  tbody.innerHTML = '';

  const records = state.participantRecordsByDeck[deckId] || [];
  document.getElementById('participant-count-val').innerText = records.length;

  headTr.innerHTML = `
    <th>대답자 식별 코드</th>
    <th>응답 제출 시각</th>
  `;

  deckCards.forEach((card, idx) => {
    const cleanQ = card.text.replace(/<[^>]*>?/gm, '');
    const shortQ = cleanQ.length > 14 ? cleanQ.substring(0, 14) + '...' : cleanQ;
    const th = document.createElement('th');
    th.innerText = `Q${idx + 1}. ${shortQ}`;
    headTr.appendChild(th);
  });

  if (records.length === 0) {
    tbody.innerHTML = `<tr><td colspan="${deckCards.length + 2}" style="text-align:center; color:var(--text-muted); padding:30px;">아직 응답을 완료한 대답자 기록이 없습니다. 대답자 모드에서 응답을 완료해 보세요!</td></tr>`;
    return;
  }

  records.forEach(rec => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>👤 ${rec.respondentId}</strong></td>
      <td><span style="color:var(--text-muted);">${rec.timestamp}</span></td>
    `;

    deckCards.forEach(card => {
      const choiceIdx = rec.answers[card.id];
      const choices = card.choices || DEFAULT_CHOICES.slice(0, card.answerCount || 2);
      const chosen = choices[choiceIdx];
      const typedText = rec.typedTexts ? rec.typedTexts[card.id] : null;

      const td = document.createElement('td');
      let cellHtml = '';
      if (chosen) {
        cellHtml += `<span class="badge-choice" style="background:${chosen.color}22; color:${chosen.color}; border:1px solid ${chosen.color};">${chosen.emoji} ${chosen.label}</span>`;
      }
      if (typedText && typedText.trim() !== '') {
        cellHtml += `<div style="font-size:11px; color:var(--accent-cyan); margin-top:2px;">✍️ "${typedText}"</div>`;
      }
      if (!cellHtml) cellHtml = `<span style="color:var(--text-muted);">-</span>`;

      td.innerHTML = cellHtml;
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });
}

function renderCardBreakdownTab(deckCards, responses) {
  const container = document.getElementById('card-breakdown-container');
  container.innerHTML = '';

  deckCards.forEach((card) => {
    const res = responses[card.id] || { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 };
    const choices = card.choices || DEFAULT_CHOICES.slice(0, card.answerCount || 2);

    let qTotal = 0;
    choices.forEach((_, cIdx) => { qTotal += (res[cIdx] || 0); });

    const bCard = document.createElement('div');
    bCard.className = 'breakdown-card';

    const bgLayer = document.createElement('div');
    bgLayer.className = 'card-bg-layer';
    if (card.bgType === 'image' && card.bgImage) {
      bgLayer.style.backgroundImage = `url(${card.bgImage})`;
      bgLayer.style.backgroundSize = 'cover';
    } else {
      bgLayer.style.background = PASTEL_PALETTES[card.pastelIndex % PASTEL_PALETTES.length];
    }
    bCard.appendChild(bgLayer);

    const overlay = document.createElement('div');
    overlay.className = 'breakdown-card-overlay';
    bCard.appendChild(overlay);

    const content = document.createElement('div');
    content.className = 'breakdown-card-content';
    content.style.color = card.textColor || '#ffffff';
    content.innerHTML = card.text;
    bCard.appendChild(content);

    const stats = document.createElement('div');
    stats.className = 'breakdown-card-stats';
    
    choices.forEach((ch, cIdx) => {
      const count = res[cIdx] || 0;
      const pct = qTotal > 0 ? Math.round((count / qTotal) * 100) : 0;
      const badge = document.createElement('span');
      badge.style.color = ch.color;
      badge.innerText = `${ch.emoji} ${ch.label}: ${count}표 (${pct}%)`;
      stats.appendChild(badge);
    });

    bCard.appendChild(stats);
    container.appendChild(bCard);
  });
}

function renderTopicSpecificCustomAnalysisTab(deckCards, responses, deckId) {
  let firstChoiceCount = 0;
  let grandTotal = 0;

  deckCards.forEach(card => {
    const res = responses[card.id] || { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 };
    const choices = card.choices || DEFAULT_CHOICES.slice(0, card.answerCount || 2);
    firstChoiceCount += (res[0] || 0);
    choices.forEach((_, cIdx) => { grandTotal += (res[cIdx] || 0); });
  });

  const overallRate = grandTotal > 0 ? Math.round((firstChoiceCount / grandTotal) * 100) : 0;

  let topicTitle = "✨ 앙케이트 주제 맞춤 분석 지수";
  let topicDesc = "응답 성향을 주제별로 종합 분석한 맞춤형 통계 지수입니다.";

  let deckName = state.currentDeckName;
  if (deckId.startsWith('preset-balance') || deckName.includes('밸런스')) {
    topicTitle = "🔥 밸런스 도파민 지수";
    topicDesc = "호불호 대립 선택지 중 1번 옵션을 선택한 짜릿한 결단력 비율입니다.";
  } else if (deckId.startsWith('preset-food') || deckName.includes('점심') || deckName.includes('취향')) {
    topicTitle = "🍕 미식가 미각 선호 지수";
    topicDesc = "앙케이트 응답자들의 미식 취향 선호도 비율을 분석한 지수입니다.";
  } else if (deckId.startsWith('preset-couple') || deckName.includes('커플') || deckName.includes('연애')) {
    topicTitle = "❤️ 연애 스타일 친밀도 지수";
    topicDesc = "연애 과몰입 선택지에 따른 커플 가치관 지수입니다.";
  } else {
    topicTitle = `✨ [${deckName}] 대표 선호 지수`;
    topicDesc = `'${deckName}' 앙케이트 주제에서 대표 선택지가 차지하는 통계 비율입니다.`;
  }

  document.getElementById('custom-topic-index-title').innerText = topicTitle;
  document.getElementById('custom-yes-desc').innerText = topicDesc;

  document.getElementById('custom-yes-gauge').style.width = `${overallRate}%`;
  document.getElementById('custom-yes-percentage').innerText = `${overallRate}%`;

  const personalityTag = document.getElementById('balance-personality-tag');
  const personalityDesc = document.getElementById('balance-personality-desc');

  if (grandTotal === 0) {
    personalityTag.innerText = "데이터 수집 대기 중";
    personalityDesc.innerText = "대답자 모드에서 스와이프 응답을 진행하거나 시뮬레이션 데이터를 추가하세요.";
  } else if (overallRate >= 70) {
    personalityTag.innerText = "🔥 단합력 넘치는 적극파 앙케이트";
    personalityDesc.innerText = "특정 대표 선택지에 압도적으로 많은 표가 쏠린 열정적인 결과입니다!";
  } else if (overallRate <= 30) {
    personalityTag.innerText = "🛡️ 신중하고 다양한 개성파 앙케이트";
    personalityDesc.innerText = "다양한 선택지에 응답이 고루 분산된 개성 넘치는 결과입니다.";
  } else {
    personalityTag.innerText = "⚖️ 황금 밸런스 앙케이트";
    personalityDesc.innerText = "선택지간 팽팽한 겨루기가 돋보이는 최상의 황금 밸런스 결과입니다!";
  }

  const compContainer = document.getElementById('my-answer-comparison-list');
  compContainer.innerHTML = '';

  deckCards.forEach((card, idx) => {
    const myChoiceIdx = state.mySessionAnswers[card.id];
    const choices = card.choices || DEFAULT_CHOICES.slice(0, card.answerCount || 2);
    const chosen = choices[myChoiceIdx];
    const cleanText = card.text.replace(/<[^>]*>?/gm, '');

    const compItem = document.createElement('div');
    compItem.className = 'comparison-item';
    compItem.innerHTML = `
      <div class="comp-question">${idx + 1}. ${cleanText}</div>
      <div class="comp-badges">
        <span>내 선택: <strong>${chosen ? `${chosen.emoji} ${chosen.label}` : '미응답'}</strong></span>
      </div>
    `;
    compContainer.appendChild(compItem);
  });
}

function addSimulationData(deckId, count = 10) {
  let deckCards = state.cards;
  if (deckId.startsWith('preset-')) {
    const key = deckId.replace('preset-', '');
    if (BUILTIN_PRESETS[key]) deckCards = BUILTIN_PRESETS[key].cards;
  } else if (deckId.startsWith('custom-')) {
    const key = deckId.replace('custom-', '');
    if (state.customPresets[key]) deckCards = state.customPresets[key].cards;
  }

  ensureDeckResponsesInit(deckId);

  if (!state.participantRecordsByDeck[deckId]) {
    state.participantRecordsByDeck[deckId] = [];
  }

  for (let sim = 0; sim < count; sim++) {
    const simUser = 'SIM-' + Math.random().toString(36).substring(2, 6).toUpperCase();
    const simAnswers = {};
    const simTyped = {};

    deckCards.forEach(card => {
      const choices = card.choices || DEFAULT_CHOICES.slice(0, card.answerCount || 2);
      const randomIdx = Math.floor(Math.random() * choices.length);
      
      if (!state.responsesByDeck[deckId][card.id][randomIdx]) {
        state.responsesByDeck[deckId][card.id][randomIdx] = 0;
      }
      state.responsesByDeck[deckId][card.id][randomIdx]++;
      simAnswers[card.id] = randomIdx;

      if (card.hasTextResponse) {
        const sampleComments = ["좋은 질문이네요!", "완전 적극 추천합니다", "이유는 비밀입니다 ㅎㅎ", "최고의 선택!"];
        simTyped[card.id] = sampleComments[Math.floor(Math.random() * sampleComments.length)];
      }
    });

    state.participantRecordsByDeck[deckId].push({
      respondentId: simUser,
      timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      answers: simAnswers,
      typedTexts: simTyped
    });
  }
}

function resetResponses(deckId) {
  if (state.responsesByDeck[deckId]) {
    state.responsesByDeck[deckId] = {};
  }
  if (state.participantRecordsByDeck[deckId]) {
    state.participantRecordsByDeck[deckId] = [];
  }
  state.mySessionAnswers = {};
  state.mySessionTypedTexts = {};
  ensureDeckResponsesInit(deckId);
}

function copyResultsSummary(deckId) {
  let deckCards = state.cards;
  if (deckId.startsWith('preset-')) {
    const key = deckId.replace('preset-', '');
    if (BUILTIN_PRESETS[key]) deckCards = BUILTIN_PRESETS[key].cards;
  } else if (deckId.startsWith('custom-')) {
    const key = deckId.replace('custom-', '');
    if (state.customPresets[key]) deckCards = state.customPresets[key].cards;
  }

  const responses = state.responsesByDeck[deckId] || {};
  let summary = `📊 [Q&A SWIPER 앙케이트 결과 요약]\n\n`;

  deckCards.forEach((card, idx) => {
    const res = responses[card.id] || { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 };
    const choices = card.choices || DEFAULT_CHOICES.slice(0, card.answerCount || 2);
    const cleanText = card.text.replace(/<[^>]*>?/gm, '');

    summary += `${idx + 1}. ${cleanText}\n`;
    choices.forEach((ch, cIdx) => {
      summary += `- ${ch.emoji} ${ch.label}: ${res[cIdx] || 0}표\n`;
    });
    summary += `\n`;
  });

  navigator.clipboard.writeText(summary).then(() => {
    alert("결과 요약이 클립보드에 복사되었습니다!");
  }).catch(() => {
    alert("복사에 실패했습니다.");
  });
}
