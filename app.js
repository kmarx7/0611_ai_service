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
];

const grid = document.querySelector("#service-grid");
const count = document.querySelector("#service-count");
const title = document.querySelector("#view-title");
const emptyState = document.querySelector("#empty-state");
const topTabs = document.querySelectorAll(".top-tab");
const sideItems = document.querySelectorAll(".side-item");

let activeCategory = "전체";
let activeSubcategory = "전체";

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

function render() {
  const filtered = services.filter((service) => {
    const categoryMatch = activeCategory === "전체" || service.category === activeCategory;
    const subcategoryMatch =
      activeSubcategory === "전체" || service.subcategory === activeSubcategory;
    return categoryMatch && subcategoryMatch;
  });

  grid.innerHTML = filtered
    .map(
      (service) => `
        <article class="service-card">
          <div class="card-top">
            <span class="logo" style="--tone: ${service.tone}">${getInitials(service.name)}</span>
            <span class="badge">${service.category}</span>
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
            <div class="card-meta">
              <span class="chip">${service.subcategory}</span>
              ${service.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}
            </div>
          </div>
          <a class="visit-link" href="${service.url}" target="_blank" rel="noopener noreferrer">
            사이트 열기
          </a>
        </article>
      `,
    )
    .join("");

  count.textContent = filtered.length;
  emptyState.hidden = filtered.length > 0;

  if (activeCategory === "전체" && activeSubcategory === "전체") {
    title.textContent = "전체 AI 서비스";
  } else if (activeSubcategory === "전체") {
    title.textContent = activeCategory;
  } else if (activeCategory === "전체") {
    title.textContent = activeSubcategory;
  } else {
    title.textContent = `${activeCategory} · ${activeSubcategory}`;
  }
}

topTabs.forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
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

render();
