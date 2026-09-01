# ⚡ Q&A SWIPER - 틱톡 & 틴더 스타일 앙케이트 프로그램

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![PWA Ready](https://img.shields.io/badge/PWA-iPad%20%26%20Mobile-brightgreen.svg)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)

> **Q&A SWIPER**는 틱톡(TikTok)과 틴더(Tinder) 특유의 감각적인 3D 카드 스와이프 제스처를 결합한 **인터랙티브 앙케이트 / 설문조사 웹 애플리케이션**입니다.
> PC, 아이패드(iPadOS), 타블렛 및 모바일 환경에서 별도 서버 설치 없이 브라우저 단독으로 즉시 작동합니다.

---

## 🌟 주요 핵심 기능

### 1. ✏️ 질문자 모드 (Questioner Mode)
* **질문 덱 & 카드 커스텀 에디터**: 질문 카드 추가, 삭제 및 실시간 썸네일 미리보기.
* **`💾 덱 저장` 및 `덱 목록` 관리**:
  * 작성 중인 덱의 모든 설정(텍스트, 색상, 이미지, 서식 등)을 클릭 한 번으로 저장.
  * `덱 목록:` 드롭다운에서 선택 시 해당 덱이 에디터 화면에 즉시 로드.
* **텍스트 서식 & 커서(캐럿) 위치 이모지 삽입**:
  * 텍스트 영역 드래그 선택을 통한 **굵게(Bold)**, **밑줄(Underline)**, **개별 글자색** 지정.
  * 마우스 커서가 찍힌 위치에 **100여 개 이상의 iOS 스타일 이모티콘 즉시 생성**.
* **인터랙티브 배경/GIF 편집 모드**:
  * 배경 이미지 및 움직이는 **GIF 지원**.
  * 화면 드래그(위치 이동), 마우스 휠/슬라이더(크기 50~300%, 회전 0~360°) 조절 후 고정.
* **카드별 독립 대답 문구 (2~4선택)**:
  * 질문 카드마다 독립된 대답 개수(2개~4개) 설정 가능.
  * 오른쪽(→), 왼쪽(←), 위쪽(↑), 아래쪽(↓) 방향별 문구, 색상, 이모지 커스텀.

### 2. 🔥 대답자 모드 (Respondent Mode)
* **3D 제스처 물리 엔진**: 터치/마우스 드래그 기울기 및 4방향 스탬프(예/아니오/위/아래) 연동 스와이프.
* **키보드 방향키 조작**: 키보드 `←`, `→`, `↑`, `↓` 방향키 완벽 지원.
* **대답자 식별 코드**: 대답자 고유 ID(예: `USER-7A9B`)를 지정하여 응답 내역 관리.

### 3. 📊 결과 모드 (Results Dashboard)
* **인터랙티브 KPI 카운터 & 질문 랭킹 순위표**:
  * `최고 찬성/선택 질문` 및 `최고 반대/최소 질문` 클릭 시 **질문 랭킹 순위표 팝업** 노출.
  * 순위표 클릭 시 해당 질문 차트로 부드러운 스크롤 이동 및 **네온 하이라이트 이펙트**.
* **대답자별 응답 표(`👥`)**: 제출 시각, 대답자 ID, 질문별 대답 뱃지 전체 내역 표 표출.
* **주제 맞춤 분석 지수**: 🔥 밸런스 도파민 지수, 🍕 미식가 미각 선호 지수, ❤️ 연애 스타일 친밀도 지수 등 주제별 자동 표출.

---

## 📱 아이패드(iPad) & 모바일 PWA 사용 가이드

**Q&A SWIPER**는 iPadOS Touch Retina 디스플레이 및 PWA 메타 태그가 완료되어 있습니다.

### 로컬 실행 (동일 Wi-Fi 환경)
```bash
npx http-server ./ -p 8080
```
1. PC의 IP 주소 확인 (`ipconfig` -> 예: `192.168.0.15`).
2. 아이패드 Safari에서 `http://192.168.0.15:8080` 접속.
3. Safari 공유 버튼 `[공유 📤]` -> `[홈 화면에 추가 ➕]` 선택 시 **독립된 풀스크린 앱**으로 설치됩니다.

---

## 📂 프로젝트 구조

```
tiktok-survey-app/
├── index.html       # 애플리케이션 HTML5 레이아웃 및 PWA 메타 태그
├── styles.css       # Glassmorphism, 3D 카드 스택, iOS 터치 반응형 스타일시트
├── app.js           # 3D 스와이프 물리 엔진, 캐럿 이모지 생성기, 데이터 통계 엔진
└── README.md        # 프로젝트 설명서
```

---

## 📄 라이선스

MIT License - 자유롭게 수정 및 배포가 가능합니다.
