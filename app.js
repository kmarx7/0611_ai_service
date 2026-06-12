const services = window.services || [];

const grid = document.querySelector("#service-grid");
const count = document.querySelector("#service-count");
const title = document.querySelector("#view-title");
const emptyState = document.querySelector("#empty-state");
const topTabs = document.querySelectorAll(".top-tab");
const sideItems = document.querySelectorAll(".side-item[data-subcategory]");
const serviceSearch = document.querySelector("#service-search");
const searchClear = document.querySelector("#search-clear");
const sortSelect = document.querySelector("#sort-select");
const favoriteFilter = document.querySelector("#favorite-filter");
const filterToggle = document.querySelector("#filter-toggle");
const sidebar = document.querySelector(".sidebar");
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
      ["AI 챗봇", "플랫폼/리서치", "생산성", "교육/학습"].includes(service.category) ||
      ["대화형 AI", "검색/리서치", "한국 AI 서비스", "모델 허브", "온라인 강의"].includes(
        service.subcategory,
      ),
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
      [
        "앱/웹 빌더",
        "AI 개발 플랫폼",
        "AI 코드 에디터",
        "AI 코딩 에이전트",
        "개발자 커뮤니티",
        "API/테스트",
      ].includes(service.subcategory),
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
let showFavoritesOnly = false;
let sortMode = "default";

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

function escapeHtml(value) {
  return value
    .toString()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
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

function highlightMatch(value) {
  const escaped = escapeHtml(value);
  if (!searchTerm || !normalizeSearchText(value).includes(searchTerm)) {
    return escaped;
  }

  const pattern = new RegExp(`(${escapeRegExp(serviceSearch.value.trim())})`, "gi");
  return escaped.replace(pattern, '<mark class="highlight">$1</mark>');
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

function sortServices(list) {
  return [...list].sort((a, b) => {
    if (sortMode === "popular") {
      return (
        getServiceClicks(b.name).total - getServiceClicks(a.name).total ||
        a.name.localeCompare(b.name)
      );
    }

    if (sortMode === "recent") {
      const aIndex = stats.recent.indexOf(a.name);
      const bIndex = stats.recent.indexOf(b.name);
      const aRank = aIndex === -1 ? Number.MAX_SAFE_INTEGER : aIndex;
      const bRank = bIndex === -1 ? Number.MAX_SAFE_INTEGER : bIndex;
      return aRank - bRank || a.name.localeCompare(b.name);
    }

    if (sortMode === "name") {
      return a.name.localeCompare(b.name);
    }

    return services.indexOf(a) - services.indexOf(b);
  });
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

function getSubcategoryCount(subcategory) {
  if (subcategory === "전체") {
    return services.length;
  }
  return services.filter((service) => service.subcategory === subcategory).length;
}

function renderSidebarCounts() {
  sideItems.forEach((button) => {
    const label = button.dataset.label || button.textContent.trim();
    button.dataset.label = label;
    button.innerHTML = `<span>${escapeHtml(label)}</span><strong>${getSubcategoryCount(button.dataset.subcategory)}</strong>`;
  });

  favoriteFilter.innerHTML = `<span>즐겨찾기</span><strong>${stats.favorites.length}</strong>`;
}

function render() {
  const filtered = sortServices(services.filter((service) => {
    const workflowMatch = workflows[activeWorkflow].match(service);
    const subcategoryMatch =
      activeSubcategory === "전체" || service.subcategory === activeSubcategory;
    const favoriteMatch = !showFavoritesOnly || isFavorite(service.name);
    return workflowMatch && subcategoryMatch && favoriteMatch && matchesSearch(service);
  }));

  grid.innerHTML = filtered
    .map(
      (service) => `
        <article class="service-card">
          <div class="card-top">
            <span class="logo" style="--tone: ${escapeHtml(service.tone)}">${getInitials(service.name)}</span>
            <div class="card-actions">
              <span class="badge">${highlightMatch(service.category)}</span>
              <button class="favorite-button ${isFavorite(service.name) ? "active" : ""}" type="button" data-favorite="${escapeHtml(service.name)}" aria-label="${escapeHtml(service.name)} 즐겨찾기" title="${isFavorite(service.name) ? "즐겨찾기에서 제거" : "즐겨찾기에 추가"}">
                ${isFavorite(service.name) ? "★" : "☆"}
              </button>
            </div>
          </div>
          <div>
            <h3>${highlightMatch(service.name)}</h3>
            <p>${highlightMatch(service.summary)}</p>
          </div>
          <div>
            <div class="url-row" title="${escapeHtml(service.url)}">
              <span>URL</span>
              <strong>${highlightMatch(getHost(service.url))}</strong>
              <button class="copy-button" type="button" data-copy="${escapeHtml(service.url)}">복사</button>
            </div>
            <div class="card-stats">
              <span class="stat-chip">오늘 ${getTodayClicks(service.name)}회</span>
              <span class="stat-chip">전체 ${getServiceClicks(service.name).total}회</span>
              ${isFavorite(service.name) ? `<span class="stat-chip">저장됨</span>` : ""}
            </div>
            <div class="card-meta">
              <span class="chip">${highlightMatch(service.subcategory)}</span>
              ${service.tags.map((tag) => `<span class="chip">${highlightMatch(tag)}</span>`).join("")}
            </div>
          </div>
          <a class="visit-link" href="${escapeHtml(service.url)}" target="_blank" rel="noopener noreferrer" data-visit="${escapeHtml(service.name)}">
            사이트 열기
          </a>
        </article>
      `,
    )
    .join("");

  count.textContent = filtered.length;
  emptyState.hidden = filtered.length > 0;
  emptyState.textContent = showFavoritesOnly
    ? "즐겨찾기한 사이트가 없습니다."
    : "선택한 조건에 맞는 서비스가 없습니다.";

  if (showFavoritesOnly && searchTerm) {
    title.textContent = `즐겨찾기 검색: "${serviceSearch.value.trim()}"`;
  } else if (showFavoritesOnly) {
    title.textContent = "즐겨찾기";
  } else if (searchTerm) {
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
  renderSidebarCounts();
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

  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      await copyUrl(button.dataset.copy);
      button.textContent = "복사됨";
      setTimeout(() => {
        button.textContent = "복사";
      }, 1200);
    });
  });
}

async function copyUrl(url) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(url);
      return;
    } catch {
      // Fall back for local file previews and stricter browser permissions.
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = url;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.append(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
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
    showFavoritesOnly = false;
    favoriteFilter.classList.remove("active");
    favoriteFilter.setAttribute("aria-pressed", "false");
    sideItems.forEach((item) => item.classList.toggle("active", item === button));
    render();
  });
});

serviceSearch.addEventListener("input", () => {
  searchTerm = normalizeSearchText(serviceSearch.value.trim());
  searchClear.hidden = searchTerm.length === 0;
  render();
});

sortSelect.addEventListener("change", () => {
  sortMode = sortSelect.value;
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

favoriteFilter.addEventListener("click", () => {
  showFavoritesOnly = !showFavoritesOnly;
  favoriteFilter.classList.toggle("active", showFavoritesOnly);
  favoriteFilter.setAttribute("aria-pressed", showFavoritesOnly.toString());
  sideItems.forEach((item) => item.classList.remove("active"));
  activeSubcategory = "전체";
  if (!showFavoritesOnly) {
    const allButton = document.querySelector('[data-subcategory="전체"]');
    allButton?.classList.add("active");
  }
  render();
});

insightToggle.addEventListener("click", () => {
  setInsightVisibility(insightBoard.hidden);
});

filterToggle.addEventListener("click", () => {
  const isOpen = sidebar.classList.toggle("open");
  filterToggle.setAttribute("aria-expanded", isOpen.toString());
});

render();
