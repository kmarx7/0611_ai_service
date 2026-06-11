const services = [
  {
    name: "Claude",
    url: "https://claude.ai",
    category: "AI 챗봇",
    subcategory: "대화형 AI",
    summary: "Anthropic의 장문 분석, 글쓰기, 코딩에 강한 AI 어시스턴트.",
    tags: ["대화", "문서", "코딩"],
    tone: "#6f5a48",
  },
  {
    name: "Gemini",
    url: "https://gemini.google.com",
    category: "AI 챗봇",
    subcategory: "대화형 AI",
    summary: "Google 생태계와 연결되는 멀티모달 AI 어시스턴트.",
    tags: ["Google", "멀티모달", "생산성"],
    tone: "#4285f4",
  },
  {
    name: "Grok",
    url: "https://grok.com",
    category: "AI 챗봇",
    subcategory: "대화형 AI",
    summary: "xAI의 챗봇 서비스로 실시간 정보 탐색과 대화형 답변에 초점.",
    tags: ["xAI", "실시간", "챗봇"],
    tone: "#111827",
  },
  {
    name: "Genspark",
    url: "https://www.genspark.ai",
    category: "플랫폼/리서치",
    subcategory: "검색/리서치",
    summary: "AI 검색, 리서치, 자동 페이지 생성형 결과를 제공하는 탐색 도구.",
    tags: ["검색", "리서치", "요약"],
    tone: "#f97316",
  },
  {
    name: "Whisk",
    url: "https://labs.google/fx/tools/whisk",
    category: "이미지/영상",
    subcategory: "이미지 생성/편집",
    summary: "Google Labs의 이미지 기반 프롬프트와 시각 실험 도구.",
    tags: ["Google Labs", "이미지", "실험"],
    tone: "#0f8f72",
  },
  {
    name: "Suno",
    url: "https://suno.com",
    category: "음성/음악",
    subcategory: "음악/음성",
    summary: "텍스트 프롬프트로 보컬과 반주가 포함된 음악을 생성하는 서비스.",
    tags: ["음악", "보컬", "작곡"],
    tone: "#d94c42",
  },
  {
    name: "Lovable",
    url: "https://lovable.dev",
    category: "개발/코딩",
    subcategory: "앱/웹 빌더",
    summary: "자연어로 웹앱을 빠르게 설계하고 구현하는 AI 앱 빌더.",
    tags: ["웹앱", "프로토타입", "개발"],
    tone: "#e11d48",
  },
  {
    name: "v0",
    url: "https://v0.dev",
    category: "개발/코딩",
    subcategory: "앱/웹 빌더",
    summary: "Vercel의 UI 생성 도구로 React 기반 화면을 빠르게 제작.",
    tags: ["UI", "React", "Vercel"],
    tone: "#000000",
  },
  {
    name: "Hugging Face",
    url: "https://huggingface.co",
    category: "플랫폼/리서치",
    subcategory: "모델 허브",
    summary: "오픈 모델, 데이터셋, 데모 앱을 찾고 배포하는 AI 커뮤니티 허브.",
    tags: ["모델", "데이터셋", "오픈소스"],
    tone: "#ffb000",
  },
  {
    name: "GitHub",
    url: "https://github.com",
    category: "Git/저장소",
    subcategory: "코드/저장소",
    summary: "코드 저장소, 협업, GitHub Copilot 기반 개발 워크플로의 중심.",
    tags: ["Git", "협업", "Copilot"],
    tone: "#24292f",
  },
  {
    name: "Cursor",
    url: "https://cursor.com",
    category: "개발/코딩",
    subcategory: "AI 코드 에디터",
    summary: "프로젝트 전체 문맥을 바탕으로 코드 작성과 수정에 특화된 AI 에디터.",
    tags: ["에디터", "AI 코딩", "리팩터링"],
    tone: "#111827",
  },
  {
    name: "Windsurf",
    url: "https://windsurf.com",
    category: "개발/코딩",
    subcategory: "AI 코드 에디터",
    summary: "Cascade 기반 에이전트 코딩 흐름을 제공하는 AI 개발 환경.",
    tags: ["에디터", "에이전트", "개발"],
    tone: "#06b6d4",
  },
  {
    name: "Replit",
    url: "https://replit.com",
    category: "개발/코딩",
    subcategory: "앱/웹 빌더",
    summary: "브라우저에서 코딩, AI 생성, 실행, 배포까지 이어지는 개발 플랫폼.",
    tags: ["IDE", "실행", "배포"],
    tone: "#f26207",
  },
  {
    name: "StackBlitz",
    url: "https://stackblitz.com",
    category: "개발/코딩",
    subcategory: "앱/웹 빌더",
    summary: "웹 기반 프론트엔드 개발과 빠른 프로토타이핑에 유용한 IDE.",
    tags: ["웹 IDE", "프론트엔드", "프로토타입"],
    tone: "#1374ef",
  },
  {
    name: "Vercel",
    url: "https://vercel.com",
    category: "배포/호스팅",
    subcategory: "배포/호스팅",
    summary: "Next.js와 프론트엔드 앱 배포에 강한 글로벌 호스팅 플랫폼.",
    tags: ["배포", "프론트엔드", "Next.js"],
    tone: "#000000",
  },
  {
    name: "Netlify",
    url: "https://www.netlify.com",
    category: "배포/호스팅",
    subcategory: "배포/호스팅",
    summary: "정적 사이트와 JAMstack 프로젝트를 빠르게 배포하는 플랫폼.",
    tags: ["배포", "정적 사이트", "JAMstack"],
    tone: "#00ad9f",
  },
  {
    name: "Cloudflare Pages",
    url: "https://pages.cloudflare.com",
    category: "배포/호스팅",
    subcategory: "배포/호스팅",
    summary: "Cloudflare 네트워크 위에서 프론트엔드 사이트를 배포하는 서비스.",
    tags: ["CDN", "배포", "프론트엔드"],
    tone: "#f38020",
  },
  {
    name: "Railway",
    url: "https://railway.app",
    category: "배포/호스팅",
    subcategory: "배포/호스팅",
    summary: "웹앱, API, 데이터베이스를 간단히 띄우는 풀스택 배포 플랫폼.",
    tags: ["풀스택", "API", "DB"],
    tone: "#7957d5",
  },
  {
    name: "Render",
    url: "https://render.com",
    category: "배포/호스팅",
    subcategory: "배포/호스팅",
    summary: "웹 서비스, 백그라운드 작업, 정적 사이트를 운영하는 호스팅 서비스.",
    tags: ["웹서비스", "서버", "배포"],
    tone: "#46e3b7",
  },
  {
    name: "GitLab",
    url: "https://gitlab.com",
    category: "Git/저장소",
    subcategory: "코드/저장소",
    summary: "저장소, 이슈, CI/CD를 함께 제공하는 개발 협업 플랫폼.",
    tags: ["Git", "CI/CD", "협업"],
    tone: "#fc6d26",
  },
  {
    name: "Bitbucket",
    url: "https://bitbucket.org",
    category: "Git/저장소",
    subcategory: "코드/저장소",
    summary: "Atlassian 생태계와 연결되는 Git 저장소 및 협업 서비스.",
    tags: ["Git", "Atlassian", "협업"],
    tone: "#0052cc",
  },
  {
    name: "Supabase",
    url: "https://supabase.com",
    category: "데이터/백엔드",
    subcategory: "DB/백엔드",
    summary: "Postgres 기반 DB, 인증, 스토리지, Edge Functions를 제공하는 백엔드 플랫폼.",
    tags: ["Postgres", "Auth", "Backend"],
    tone: "#3ecf8e",
  },
  {
    name: "Firebase",
    url: "https://firebase.google.com",
    category: "데이터/백엔드",
    subcategory: "DB/백엔드",
    summary: "Google의 앱 백엔드 플랫폼으로 인증, DB, 호스팅, 분석을 제공.",
    tags: ["Google", "Auth", "DB"],
    tone: "#ffca28",
  },
  {
    name: "Neon",
    url: "https://neon.tech",
    category: "데이터/백엔드",
    subcategory: "DB/백엔드",
    summary: "서버리스 Postgres와 브랜치 기반 데이터베이스 워크플로를 제공.",
    tags: ["Postgres", "Serverless", "DB"],
    tone: "#00e599",
  },
  {
    name: "Postman",
    url: "https://www.postman.com",
    category: "개발/코딩",
    subcategory: "API/테스트",
    summary: "API 요청, 문서화, 테스트, 협업을 위한 대표적인 개발 도구.",
    tags: ["API", "테스트", "문서"],
    tone: "#ff6c37",
  },
  {
    name: "ChatGPT",
    url: "https://chatgpt.com",
    category: "AI 챗봇",
    subcategory: "대화형 AI",
    summary: "OpenAI의 대표 AI 어시스턴트로 글쓰기, 분석, 이미지, 코드 작업에 활용.",
    tags: ["OpenAI", "대화", "멀티모달"],
    tone: "#10a37f",
  },
  {
    name: "Perplexity",
    url: "https://www.perplexity.ai",
    category: "플랫폼/리서치",
    subcategory: "검색/리서치",
    summary: "출처 기반 답변과 웹 검색에 강한 AI 리서치 서비스.",
    tags: ["검색", "출처", "리서치"],
    tone: "#1f9ea7",
  },
  {
    name: "Midjourney",
    url: "https://www.midjourney.com",
    category: "이미지/영상",
    subcategory: "이미지 생성/편집",
    summary: "고품질 스타일 이미지 생성으로 널리 쓰이는 크리에이티브 AI 도구.",
    tags: ["이미지", "아트", "디자인"],
    tone: "#5b5f97",
  },
  {
    name: "Runway",
    url: "https://runwayml.com",
    category: "이미지/영상",
    subcategory: "영상 생성",
    summary: "AI 영상 생성, 편집, 모션 작업을 지원하는 크리에이티브 플랫폼.",
    tags: ["영상", "편집", "크리에이티브"],
    tone: "#0b1f3a",
  },
  {
    name: "Microsoft Copilot",
    url: "https://copilot.microsoft.com",
    category: "생산성",
    subcategory: "업무 생산성",
    summary: "Microsoft 365와 웹 작업에 연결되는 생산성 중심 AI 어시스턴트.",
    tags: ["Microsoft", "업무", "문서"],
    tone: "#0078d4",
  },
  {
    name: "Canva AI",
    url: "https://www.canva.com/ai",
    category: "이미지/영상",
    subcategory: "이미지 생성/편집",
    summary: "디자인 제작 과정에 이미지 생성, 편집, 문구 작성 AI를 통합.",
    tags: ["디자인", "마케팅", "이미지"],
    tone: "#00c4cc",
  },
  {
    name: "Notion AI",
    url: "https://www.notion.so/product/ai",
    category: "생산성",
    subcategory: "업무 생산성",
    summary: "노트, 문서, 지식관리 안에서 요약과 작성 보조를 제공.",
    tags: ["노트", "문서", "지식관리"],
    tone: "#111111",
  },
  {
    name: "DeepSeek",
    url: "https://chat.deepseek.com",
    category: "AI 챗봇",
    subcategory: "대화형 AI",
    summary: "추론과 코딩 작업에 많이 활용되는 AI 챗 서비스.",
    tags: ["추론", "코딩", "대화"],
    tone: "#2f6fed",
  },
  {
    name: "Kimi",
    url: "https://www.kimi.com",
    category: "AI 챗봇",
    subcategory: "대화형 AI",
    summary: "긴 문서 읽기, 요약, 분석에 강한 대화형 AI 어시스턴트.",
    tags: ["장문", "문서", "요약"],
    tone: "#5b7cfa",
  },
  {
    name: "Le Chat",
    url: "https://chat.mistral.ai",
    category: "AI 챗봇",
    subcategory: "대화형 AI",
    summary: "Mistral AI의 공식 챗봇으로 빠른 응답과 실무형 대화에 활용.",
    tags: ["Mistral", "대화", "업무"],
    tone: "#ff7000",
  },
  {
    name: "ElevenLabs",
    url: "https://elevenlabs.io",
    category: "음성/음악",
    subcategory: "음악/음성",
    summary: "자연스러운 음성 합성, 더빙, 보이스 클로닝에 특화된 서비스.",
    tags: ["TTS", "더빙", "음성"],
    tone: "#6c4cff",
  },
  {
    name: "Ideogram",
    url: "https://ideogram.ai",
    category: "이미지/영상",
    subcategory: "이미지 생성/편집",
    summary: "텍스트가 포함된 포스터, 로고, 시각 디자인 생성에 강한 이미지 AI.",
    tags: ["이미지", "타이포", "로고"],
    tone: "#c026d3",
  },
  {
    name: "Mobbin",
    url: "https://mobbin.com",
    category: "디자인/UX",
    subcategory: "디자인 레퍼런스",
    summary: "실제 모바일 앱과 웹 서비스의 화면, UI 패턴, 사용자 플로우를 찾는 레퍼런스 라이브러리.",
    tags: ["UI 패턴", "앱 화면", "플로우"],
    tone: "#111827",
  },
  {
    name: "Awwwards",
    url: "https://www.awwwards.com",
    category: "디자인/UX",
    subcategory: "디자인 레퍼런스",
    summary: "수준 높은 웹디자인, 인터랙션, 랜딩페이지 사례를 탐색하는 글로벌 웹 어워드 플랫폼.",
    tags: ["웹디자인", "인터랙션", "레퍼런스"],
    tone: "#121212",
  },
  {
    name: "Figma Community",
    url: "https://www.figma.com/community",
    category: "디자인/UX",
    subcategory: "디자인 시스템",
    summary: "UI 키트, 디자인 시스템, 템플릿, 플러그인을 찾아 바로 복제해 쓰는 Figma 자료실.",
    tags: ["UI Kit", "템플릿", "Figma"],
    tone: "#a259ff",
  },
  {
    name: "shadcn/ui",
    url: "https://ui.shadcn.com",
    category: "디자인/UX",
    subcategory: "디자인 시스템",
    summary: "복사해 프로젝트에 소유권을 두고 커스터마이즈하는 React 컴포넌트 기반 디자인 시스템.",
    tags: ["React", "컴포넌트", "Tailwind"],
    tone: "#09090b",
  },
  {
    name: "Relume",
    url: "https://www.relume.io",
    category: "디자인/UX",
    subcategory: "디자인 시스템",
    summary: "AI로 사이트맵, 와이어프레임, 스타일가이드를 빠르게 만들고 Figma나 React로 이어주는 도구.",
    tags: ["와이어프레임", "사이트맵", "AI"],
    tone: "#2563eb",
  },
  {
    name: "Lucide",
    url: "https://lucide.dev",
    category: "디자인/UX",
    subcategory: "아이콘/에셋",
    summary: "웹앱과 대시보드에 쓰기 좋은 일관된 선형 오픈소스 아이콘 세트.",
    tags: ["아이콘", "SVG", "오픈소스"],
    tone: "#f56565",
  },
  {
    name: "Realtime Colors",
    url: "https://www.realtimecolors.com",
    category: "디자인/UX",
    subcategory: "색상/폰트",
    summary: "텍스트, 배경, 강조색 조합을 실제 UI 화면에서 바로 확인하는 컬러 팔레트 도구.",
    tags: ["컬러", "팔레트", "접근성"],
    tone: "#7c3aed",
  },
  {
    name: "Google Fonts",
    url: "https://fonts.google.com",
    category: "디자인/UX",
    subcategory: "색상/폰트",
    summary: "웹 프로젝트에 바로 적용하기 좋은 무료 폰트를 검색하고 조합하는 공식 폰트 라이브러리.",
    tags: ["폰트", "타이포", "웹폰트"],
    tone: "#4285f4",
  },
  {
    name: "Unsplash",
    url: "https://unsplash.com",
    category: "디자인/UX",
    subcategory: "아이콘/에셋",
    summary: "랜딩페이지, 블로그, 목업에 사용할 고품질 사진을 찾는 이미지 라이브러리.",
    tags: ["사진", "이미지", "비주얼"],
    tone: "#000000",
  },
  {
    name: "Spline",
    url: "https://spline.design",
    category: "디자인/UX",
    subcategory: "아이콘/에셋",
    summary: "웹에서 사용할 3D 오브젝트와 인터랙티브 씬을 제작하는 디자인 도구.",
    tags: ["3D", "인터랙션", "웹"],
    tone: "#7057ff",
  },
  {
    name: "Freebuff",
    url: "https://freebuff.com",
    category: "개발/코딩",
    subcategory: "AI 코딩 에이전트",
    summary: "구독 없이 설치해 쓰는 무료 터미널 기반 AI 코딩 에이전트.",
    tags: ["CLI", "무료", "서브에이전트"],
    tone: "#111827",
  },
  {
    name: "Codebuff",
    url: "https://www.codebuff.com",
    category: "개발/코딩",
    subcategory: "AI 코딩 에이전트",
    summary: "자연어 지시로 코드베이스를 이해하고 여러 에이전트가 협업해 코드를 수정하는 오픈소스 코딩 어시스턴트.",
    tags: ["오픈소스", "멀티에이전트", "CLI"],
    tone: "#2563eb",
  },
  {
    name: "Claude Code",
    url: "https://code.claude.com",
    category: "개발/코딩",
    subcategory: "AI 코딩 에이전트",
    summary: "코드베이스를 읽고 파일 수정, 명령 실행, Git 작업까지 처리하는 Anthropic의 에이전트형 코딩 도구.",
    tags: ["Claude", "CLI", "에이전트"],
    tone: "#6f5a48",
  },
  {
    name: "OpenAI Codex",
    url: "https://developers.openai.com/codex",
    category: "개발/코딩",
    subcategory: "AI 코딩 에이전트",
    summary: "코드 생성, 수정, 자동화 작업을 위한 OpenAI의 소프트웨어 엔지니어링 에이전트 제품군.",
    tags: ["OpenAI", "Codex", "자동화"],
    tone: "#10a37f",
  },
  {
    name: "Gemini CLI",
    url: "https://github.com/google-gemini/gemini-cli",
    category: "개발/코딩",
    subcategory: "AI 코딩 에이전트",
    summary: "Gemini를 터미널에서 사용하는 Google의 오픈소스 AI 에이전트 CLI.",
    tags: ["Google", "Gemini", "CLI"],
    tone: "#4285f4",
  },
  {
    name: "OpenCode",
    url: "https://opencode.ai",
    category: "개발/코딩",
    subcategory: "AI 코딩 에이전트",
    summary: "터미널 중심으로 동작하는 오픈소스 AI 코딩 에이전트.",
    tags: ["오픈소스", "CLI", "코딩"],
    tone: "#111827",
  },
  {
    name: "Aider",
    url: "https://aider.chat",
    category: "개발/코딩",
    subcategory: "AI 코딩 에이전트",
    summary: "Git 저장소 안에서 대화하며 코드를 수정하고 커밋 흐름까지 돕는 터미널 AI 페어 프로그래밍 도구.",
    tags: ["터미널", "Git", "페어코딩"],
    tone: "#16a34a",
  },
  {
    name: "Cline",
    url: "https://cline.bot",
    category: "개발/코딩",
    subcategory: "AI 코딩 에이전트",
    summary: "VS Code 안에서 파일 수정, 명령 실행, 브라우저 작업까지 처리하는 오픈소스 AI 코딩 에이전트.",
    tags: ["VS Code", "오픈소스", "브라우저"],
    tone: "#7c3aed",
  },
  {
    name: "Continue",
    url: "https://www.continue.dev",
    category: "개발/코딩",
    subcategory: "AI 코딩 에이전트",
    summary: "팀이 자체 모델과 규칙을 연결해 코드 자동완성, 채팅, 에이전트 흐름을 구성하는 오픈소스 AI 개발 플랫폼.",
    tags: ["오픈소스", "팀", "커스텀"],
    tone: "#0f766e",
  },
  {
    name: "Amp",
    url: "https://ampcode.com",
    category: "개발/코딩",
    subcategory: "AI 코딩 에이전트",
    summary: "터미널, 웹, 모바일에서 이어서 사용할 수 있는 Sourcegraph 계열의 에이전트형 코딩 도구.",
    tags: ["CLI", "원격제어", "에이전트"],
    tone: "#f97316",
  },
  {
    name: "Devin",
    url: "https://devin.ai",
    category: "개발/코딩",
    subcategory: "AI 코딩 에이전트",
    summary: "코드 마이그레이션, 버그 수정, PR 리뷰 같은 엔지니어링 작업을 위임하는 자율형 AI 소프트웨어 엔지니어.",
    tags: ["자율 에이전트", "PR 리뷰", "마이그레이션"],
    tone: "#111827",
  },
];

const grid = document.querySelector("#service-grid");
const count = document.querySelector("#service-count");
const title = document.querySelector("#view-title");
const emptyState = document.querySelector("#empty-state");
const topTabs = document.querySelectorAll(".top-tab");
const sideItems = document.querySelectorAll(".side-item");
const serviceSearch = document.querySelector("#service-search");
const searchClear = document.querySelector("#search-clear");
const insightToggle = document.querySelector("#insight-toggle");
const insightBoard = document.querySelector("#insight-board");
const todayVisits = document.querySelector("#today-visits");
const totalVisits = document.querySelector("#total-visits");
const favoriteTotal = document.querySelector("#favorite-total");
const todayClickTotal = document.querySelector("#today-click-total");
const todayPopularList = document.querySelector("#today-popular-list");
const recentList = document.querySelector("#recent-list");
const categoryStats = document.querySelector("#category-stats");

const workflows = {
  전체: {
    title: "전체 워크플로우",
    match: () => true,
  },
  "아이디어/리서치": {
    title: "아이디어와 리서치",
    match: (service) =>
      ["AI 챗봇", "플랫폼/리서치", "생산성"].includes(service.category) ||
      ["대화형 AI", "검색/리서치", "모델 허브"].includes(service.subcategory),
  },
  "디자인/UX": {
    title: "디자인과 UX",
    match: (service) =>
      service.category === "디자인/UX" ||
      ["디자인 레퍼런스", "디자인 시스템", "아이콘/에셋", "색상/폰트"].includes(
        service.subcategory,
      ),
  },
  "콘텐츠 생성": {
    title: "콘텐츠 생성",
    match: (service) =>
      ["이미지/영상", "음성/음악"].includes(service.category) ||
      ["이미지 생성/편집", "영상 생성", "음악/음성"].includes(service.subcategory),
  },
  "코딩/빌드": {
    title: "코딩과 빌드",
    match: (service) =>
      service.category === "개발/코딩" ||
      ["앱/웹 빌더", "AI 코드 에디터", "AI 코딩 에이전트", "API/테스트"].includes(
        service.subcategory,
      ),
  },
  "저장소/협업": {
    title: "저장소와 협업",
    match: (service) => service.category === "Git/저장소" || service.subcategory === "코드/저장소",
  },
  "배포/운영": {
    title: "배포와 운영",
    match: (service) =>
      ["배포/호스팅", "데이터/백엔드"].includes(service.category) ||
      ["배포/호스팅", "DB/백엔드", "API/테스트"].includes(service.subcategory),
  },
};

let activeWorkflow = "전체";
let activeSubcategory = "전체";
let searchTerm = "";

const hangulInitials = [
  "ㄱ",
  "ㄲ",
  "ㄴ",
  "ㄷ",
  "ㄸ",
  "ㄹ",
  "ㅁ",
  "ㅂ",
  "ㅃ",
  "ㅅ",
  "ㅆ",
  "ㅇ",
  "ㅈ",
  "ㅉ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
];

const storageKey = "vibeCodingServiceStats";
const insightVisibilityKey = "vibeCodingInsightVisible";
const todayKey = getTodayKey();
const defaultStats = {
  visits: {
    total: 0,
    byDate: {},
  },
  clicks: {},
  favorites: [],
  recent: [],
};

const stats = loadStats();
recordPageVisit();
setInsightVisibility(localStorage.getItem(insightVisibilityKey) === "true");

function getInitials(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function getHost(url) {
  return new URL(url).host.replace(/^www\./, "");
}

function normalizeSearchText(value) {
  return value.toString().normalize("NFC").toLowerCase();
}

function getHangulInitials(value) {
  return Array.from(value)
    .map((char) => {
      const code = char.charCodeAt(0) - 44032;
      if (code < 0 || code > 11171) {
        return char;
      }
      return hangulInitials[Math.floor(code / 588)];
    })
    .join("");
}

function matchesSearch(service) {
  if (!searchTerm) {
    return true;
  }

  const searchableText = [
    service.name,
    service.url,
    service.category,
    service.subcategory,
    service.summary,
    ...service.tags,
  ]
    .join(" ");
  const haystack = normalizeSearchText(searchableText);
  const initialHaystack = getHangulInitials(haystack);

  return haystack.includes(searchTerm) || initialHaystack.includes(searchTerm);
}

function getTodayKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const date = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${date}`;
}

function loadStats() {
  try {
    const parsed = JSON.parse(localStorage.getItem(storageKey));
    return {
      ...defaultStats,
      ...parsed,
      visits: {
        ...defaultStats.visits,
        ...parsed?.visits,
        byDate: parsed?.visits?.byDate || {},
      },
      clicks: parsed?.clicks || {},
      favorites: parsed?.favorites || [],
      recent: parsed?.recent || [],
    };
  } catch {
    return structuredClone(defaultStats);
  }
}

function saveStats() {
  localStorage.setItem(storageKey, JSON.stringify(stats));
}

function setInsightVisibility(isVisible) {
  insightBoard.hidden = !isVisible;
  insightToggle.textContent = isVisible ? "통계 숨기기" : "통계 보기";
  insightToggle.setAttribute("aria-expanded", isVisible.toString());
  localStorage.setItem(insightVisibilityKey, isVisible.toString());
}

function getService(name) {
  return services.find((service) => service.name === name);
}

function getServiceClicks(name) {
  return stats.clicks[name] || { total: 0, byDate: {} };
}

function getTodayClicks(name) {
  return getServiceClicks(name).byDate[todayKey] || 0;
}

function isFavorite(name) {
  return stats.favorites.includes(name);
}

function recordPageVisit() {
  stats.visits.total += 1;
  stats.visits.byDate[todayKey] = (stats.visits.byDate[todayKey] || 0) + 1;
  saveStats();
}

function recordServiceClick(name) {
  const serviceClicks = getServiceClicks(name);
  serviceClicks.total += 1;
  serviceClicks.byDate[todayKey] = (serviceClicks.byDate[todayKey] || 0) + 1;
  stats.clicks[name] = serviceClicks;
  stats.recent = [name, ...stats.recent.filter((item) => item !== name)].slice(0, 5);
  saveStats();
  render();
}

function toggleFavorite(name) {
  if (isFavorite(name)) {
    stats.favorites = stats.favorites.filter((item) => item !== name);
  } else {
    stats.favorites = [name, ...stats.favorites];
  }
  saveStats();
  render();
}

function getTopTodayServices() {
  return services
    .map((service) => ({
      ...service,
      todayClicks: getTodayClicks(service.name),
    }))
    .filter((service) => service.todayClicks > 0)
    .sort((a, b) => b.todayClicks - a.todayClicks || a.name.localeCompare(b.name))
    .slice(0, 5);
}

function getTopTotalServices() {
  return services
    .map((service) => ({
      ...service,
      totalClicks: getServiceClicks(service.name).total,
    }))
    .filter((service) => service.totalClicks > 0)
    .sort((a, b) => b.totalClicks - a.totalClicks || a.name.localeCompare(b.name))
    .slice(0, 5);
}

function getCategoryUsage() {
  const totals = services.reduce((acc, service) => {
    const clicks = getServiceClicks(service.name).total;
    acc[service.category] = (acc[service.category] || 0) + clicks;
    return acc;
  }, {});
  const totalClicks = Object.values(totals).reduce((sum, value) => sum + value, 0);

  if (totalClicks === 0) {
    const serviceCounts = services.reduce((acc, service) => {
      acc[service.category] = (acc[service.category] || 0) + 1;
      return acc;
    }, {});
    const totalServices = services.length;
    return Object.entries(serviceCounts)
      .map(([category, value]) => ({
        category,
        value,
        percent: Math.round((value / totalServices) * 100),
        unit: "개",
      }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 4);
  }

  return Object.entries(totals)
    .map(([category, value]) => ({
      category,
      value,
      percent: Math.round((value / totalClicks) * 100),
      unit: "회",
    }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 4);
}

function renderInsights() {
  const topToday = getTopTodayServices();
  const fallbackTop = getTopTotalServices();
  const totalTodayClicks = services.reduce((sum, service) => sum + getTodayClicks(service.name), 0);

  todayVisits.textContent = stats.visits.byDate[todayKey] || 0;
  totalVisits.textContent = stats.visits.total;
  favoriteTotal.textContent = stats.favorites.length;
  todayClickTotal.textContent = `${totalTodayClicks} 클릭`;

  const popularItems = (topToday.length > 0 ? topToday : fallbackTop).slice(0, 3);
  todayPopularList.innerHTML =
    popularItems.length > 0
      ? popularItems
          .map(
            (service, index) => `
              <li class="rank-item">
                <span class="rank-index">${index + 1}</span>
                <span class="rank-name">${service.name}</span>
                <span class="rank-count">${topToday.length > 0 ? service.todayClicks : service.totalClicks}회</span>
              </li>
            `,
          )
          .join("")
      : `<li class="empty-mini">아직 클릭 기록이 없습니다.</li>`;

  recentList.innerHTML =
    stats.recent.length > 0
      ? stats.recent
          .slice(0, 3)
          .map((name) => {
            const service = getService(name);
            return service ? `<div class="recent-item">${service.name}</div>` : "";
          })
          .join("")
      : `<div class="empty-mini">사이트를 열면 최근 방문에 표시됩니다.</div>`;

  categoryStats.innerHTML = getCategoryUsage()
    .map(
      (item) => `
        <div class="category-stat">
          <div class="category-stat-top">
            <span>${item.category}</span>
            <span>${item.value}${item.unit} · ${item.percent}%</span>
          </div>
          <div class="stat-bar"><span class="stat-fill" style="--value: ${item.percent}%"></span></div>
        </div>
      `,
    )
    .join("");
}

function render() {
  const filtered = services.filter((service) => {
    const workflowMatch = workflows[activeWorkflow].match(service);
    const subcategoryMatch =
      activeSubcategory === "전체" || service.subcategory === activeSubcategory;
    return workflowMatch && subcategoryMatch && matchesSearch(service);
  });

  grid.innerHTML = filtered
    .map(
      (service) => `
        <article class="service-card">
          <div class="card-top">
            <span class="logo" style="--tone: ${service.tone}">${getInitials(service.name)}</span>
            <div class="card-actions">
              <span class="badge">${service.category}</span>
              <button class="favorite-button ${isFavorite(service.name) ? "active" : ""}" type="button" data-favorite="${service.name}" aria-label="${service.name} 즐겨찾기">
                ${isFavorite(service.name) ? "★" : "☆"}
              </button>
            </div>
          </div>
          <div>
            <h3>${service.name}</h3>
            <p>${service.summary}</p>
          </div>
          <div>
            <div class="url-row" title="${service.url}">
              <span>URL</span>
              <strong>${getHost(service.url)}</strong>
            </div>
            <div class="card-stats">
              <span class="stat-chip">오늘 ${getTodayClicks(service.name)}회</span>
              <span class="stat-chip">전체 ${getServiceClicks(service.name).total}회</span>
              ${isFavorite(service.name) ? `<span class="stat-chip">저장됨</span>` : ""}
            </div>
            <div class="card-meta">
              <span class="chip">${service.subcategory}</span>
              ${service.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}
            </div>
          </div>
          <a class="visit-link" href="${service.url}" target="_blank" rel="noopener noreferrer" data-visit="${service.name}">
            사이트 열기
          </a>
        </article>
      `,
    )
    .join("");

  count.textContent = filtered.length;
  emptyState.hidden = filtered.length > 0;

  if (searchTerm) {
    title.textContent = `검색 결과: "${serviceSearch.value.trim()}"`;
  } else if (activeWorkflow === "전체" && activeSubcategory === "전체") {
    title.textContent = workflows[activeWorkflow].title;
  } else if (activeSubcategory === "전체") {
    title.textContent = workflows[activeWorkflow].title;
  } else if (activeWorkflow === "전체") {
    title.textContent = activeSubcategory;
  } else {
    title.textContent = `${workflows[activeWorkflow].title} · ${activeSubcategory}`;
  }

  renderInsights();
  bindCardActions();
}

function bindCardActions() {
  document.querySelectorAll("[data-visit]").forEach((link) => {
    link.addEventListener("click", () => {
      recordServiceClick(link.dataset.visit);
    });
  });

  document.querySelectorAll("[data-favorite]").forEach((button) => {
    button.addEventListener("click", () => {
      toggleFavorite(button.dataset.favorite);
    });
  });
}

topTabs.forEach((button) => {
  button.addEventListener("click", () => {
    activeWorkflow = button.dataset.workflow;
    topTabs.forEach((tab) => tab.classList.toggle("active", tab === button));
    render();
  });
});

sideItems.forEach((button) => {
  button.addEventListener("click", () => {
    activeSubcategory = button.dataset.subcategory;
    sideItems.forEach((item) => item.classList.toggle("active", item === button));
    render();
  });
});

serviceSearch.addEventListener("input", () => {
  searchTerm = normalizeSearchText(serviceSearch.value.trim());
  searchClear.hidden = searchTerm.length === 0;
  render();
});

serviceSearch.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    serviceSearch.value = "";
    searchTerm = "";
    searchClear.hidden = true;
    render();
  }
});

searchClear.addEventListener("click", () => {
  serviceSearch.value = "";
  searchTerm = "";
  searchClear.hidden = true;
  serviceSearch.focus();
  render();
});

insightToggle.addEventListener("click", () => {
  setInsightVisibility(insightBoard.hidden);
});

render();
