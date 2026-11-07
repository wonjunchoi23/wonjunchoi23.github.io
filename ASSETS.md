# 필요한 에셋 체크리스트

직접 준비해서 아래 경로에 넣어주시면 됩니다. 사이트는 빌드 없이 **레포 루트의 정적 파일**을 그대로 서빙하므로,
경로가 곧 URL입니다 (`images/profile.jpg` → `https://wonjunchoi23.github.io/images/profile.jpg`).

---

## 1. 필수

| 파일 | 경로 | 규격 | 용도 |
| --- | --- | --- | --- |
| 프로필 사진 | `images/profile.jpg` | 정사각형, 최소 800×800, 얼굴 중앙 | About 섹션 |
| ~~파비콘~~ | `images/favicon.png` | 512×512 PNG | 브라우저 탭. **완료** — 세이지 그린 라운드 사각형 + 흰 `W` |
| ~~애플 터치 아이콘~~ | `images/favicon.png` | — | iOS 홈 화면. **완료** — 파비콘과 동일 파일 사용 |
| OG 이미지 | `images/og-image.png` | **1200×630** PNG | 카카오톡·슬랙·트위터 링크 미리보기 |
| CV | `files/curriculum_vitae.pdf` | — | CV 다운로드 버튼 |

> **OG 이미지 팁:** 히어로 화면(뉴럴넷 배경 + 이름)을 1200×630으로 스크린샷 떠서 쓰면 가장 잘 어울립니다.
> 준비되면 제가 캡처용 페이지를 따로 만들어 드릴 수도 있습니다.

---

## 2. 선택

| 파일 | 경로 | 규격 | 비고 |
| --- | --- | --- | --- |
| 논문 썸네일 | `images/pubs/<slug>.png` | 16:9, 800×450 | 논문 카드용. 없으면 텍스트만으로도 깔끔하게 나옵니다 |
| 고려대 로고 | `images/logo-ku.svg` | SVG 선호 | 소속 표기용. **사용 규정 확인 필요** |
| DAIS Lab 로고 | `images/logo-dais.svg` | SVG 선호 | 위와 동일 |
| 배경 대체 이미지 | — | — | 캔버스 미지원 환경 fallback. 없어도 무방 (흰 배경으로 폴백) |

---

## 3. 다운로드 불필요 (코드에서 처리)

- **소셜 아이콘** (GitHub / LinkedIn / Google Scholar / Email) → SVG를 코드에 인라인으로 넣습니다. 파일 준비 불필요.
- **뉴럴넷 배경** → canvas 실시간 렌더링. 이미지·GIF 불필요.
- **폰트: Inter** → Google Fonts CDN에서 불러옵니다. 파일 준비 불필요.
  - 한글 병기가 필요하면 Pretendard 또는 Noto Sans KR을 추가합니다. → **결정 필요**

---

## 4. 확인이 필요한 사항

- [x] **GitHub 사용자명**: `wonjunchoi23`으로 확정. 레포명도 `wonjunchoi23.github.io`, 사이트 주소는 `https://wonjunchoi23.github.io/` 입니다.
- [ ] 로고 사용 시 고려대·DAIS Lab 로고의 외부 사용 허용 여부
- [ ] 커스텀 도메인 사용 여부 (사용 시 `public/CNAME` 파일 추가)
