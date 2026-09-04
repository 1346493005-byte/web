/* ============ 最新发布列表（替换成你自己的内容） ============ */
const RELEASES = [
  { icon: "🧩", title: "Vortex v1.15.10 发布更新", desc: "Nexus Mods 官方免费 Mod 管理器", tag: "Mod 管理", date: "09-03" },
  { icon: "🧩", title: "Mod Organizer 2 v2.5.2 发布更新", desc: "开源免费、配置隔离的 Mod 管理器", tag: "Mod 管理", date: "09-02" },
  { icon: "💾", title: "存档备份与还原教程上线", desc: "Steam 云存档与本地双备份方法", tag: "教程", date: "09-01" },
  { icon: "🛠️", title: "Thunderstore Mod Manager 新版", desc: "热门联机游戏 Mod 管理工具", tag: "Mod 管理", date: "08-30" },
  { icon: "📚", title: "新手入门：如何选 Mod 管理器", desc: "Vortex / MO2 对比与选择建议", tag: "教程", date: "08-28" },
  { icon: "📦", title: "正版 Mod 资源社区导航", desc: "Nexus Mods 等官方社区入口整理", tag: "资源", date: "08-26" }
];

/* ============ 工具下载分类 ============ */
const CATEGORIES = [
  {
    icon: "🧩",
    name: "Vortex",
    desc: "Nexus Mods 官方免费 Mod 管理器",
    version: "V1.15.10",
    date: "2026-09-03",
    download: "#",
    detail: "Vortex 是 Nexus Mods 出品的免费 Mod 管理器，支持大量热门游戏，安装与启停 Mod 直观方便。官方下载地址：nexusmods.com"
  },
  {
    icon: "🧩",
    name: "Mod Organizer 2",
    desc: "开源免费、配置隔离的 Mod 管理器",
    version: "V2.5.2",
    date: "2026-09-02",
    download: "#",
    detail: "Mod Organizer 2（MO2）开源免费，通过虚拟文件系统隔离 Mod，不改动游戏本体，适合需要精细控制的老滚、辐射等游戏。官方 GitHub 发布页可下载。"
  },
  {
    icon: "💾",
    name: "存档备份管理器",
    desc: "游戏存档自动备份与还原工具",
    version: "V1.4",
    date: "2026-08-28",
    download: "#",
    detail: "支持自动定时备份游戏存档、一键还原，防止坏档丢档。建议配合 Steam 云存档使用双保险。"
  },
  {
    icon: "🛠️",
    name: "Thunderstore",
    desc: "热门联机游戏 Mod 管理工具",
    version: "V5.2.1",
    date: "2026-08-25",
    download: "#",
    detail: "Thunderstore Mod Manager 是开源免费的联机游戏 Mod 管理客户端，支持多款热门联机游戏，一键安装与更新 Mod。"
  },
  {
    icon: "📦",
    name: "资源导航",
    desc: "正版 Mod 社区与下载源导航",
    version: "V2.0",
    date: "2026-08-20",
    download: "#",
    detail: "收录 Nexus Mods、ModDB、CurseForge 等正版 Mod 社区入口与搜索技巧，帮助快速找到合规 Mod 资源。"
  },
  {
    icon: "🔧",
    name: "敬请期待",
    desc: "更多工具正在整理中",
    version: "-",
    date: "-",
    download: "#",
    detail: "更多 Mod 管理与游戏工具正在整理中，敬请期待！"
  }
];

/* ============ 教程列表 ============ */
const TUTORIALS = [
  { tag: "入门", title: "如何选择适合你的 Mod 管理器", desc: "Vortex 与 MO2 核心差异、适用游戏与选择建议，一张表看懂。", meta: "阅读约 5 分钟" },
  { tag: "进阶", title: "Vortex 从安装到加载 Mod 全流程", desc: "下载安装、设置游戏路径、启用 Mod、排序与冲突处理。", meta: "阅读约 10 分钟" },
  { tag: "技巧", title: "游戏存档备份与还原指南", desc: "云存档 + 本地双备份，防止坏档丢档的完整操作。", meta: "阅读约 6 分钟" }
];

/* ============ 渲染：最新发布 ============ */
function renderReleases() {
  const list = document.getElementById("releaseList");
  if (!list) return;
  list.innerHTML = RELEASES.map((r, i) => `
    <div class="release-item" onclick="openModal('${r.title}')">
      <div class="r-icon">${r.icon}</div>
      <div class="r-title"><b>${r.title}</b><small>${r.desc}</small></div>
      <div class="r-tag">${r.tag}</div>
      <div class="r-date">${r.date}</div>
    </div>
  `).join("");
}

/* ============ 渲染：工具卡片 ============ */
function renderCards() {
  const grid = document.getElementById("cardGrid");
  if (!grid) return;
  grid.innerHTML = CATEGORIES.map((c, i) => `
    <div class="card">
      <div class="card-icon">${c.icon}</div>
      <h3>${c.name}</h3>
      <p class="desc">${c.desc}</p>
      <div class="meta">版本：<b>${c.version}</b> ｜ 更新：${c.date}</div>
      <div class="card-btns">
        <a class="btn btn-dl" href="${c.download}" onclick="handleDownload(event, '${c.name}')">⬇ 立即下载</a>
        <a class="btn btn-info" href="#" onclick="showDetail(event, ${i})">查看详情</a>
      </div>
    </div>
  `).join("");
}

/* ============ 渲染：教程 ============ */
function renderTutorials() {
  const grid = document.getElementById("tutorialGrid");
  if (!grid) return;
  grid.innerHTML = TUTORIALS.map((t, i) => `
    <div class="tut-card" onclick="openModal('${t.title}')">
      <div class="tut-tag">${t.tag}</div>
      <h3>${t.title}</h3>
      <p>${t.desc}</p>
      <div class="tut-meta">${t.meta}</div>
    </div>
  `).join("");
}

/* ============ 下载弹窗 ============ */
function handleDownload(e, name) {
  e.preventDefault();
  let dl = Number(localStorage.getItem("dlCount") || 0) + 1;
  localStorage.setItem("dlCount", dl);
  updateStats();
  openModal(name);
}

function openModal(title) {
  const mask = document.getElementById("modalMask");
  if (!mask) return;
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalText").textContent =
    "详情占位：正式运营时，把这里替换成工具介绍、官方下载链接或教程正文。";
  mask.classList.add("show");
}

function closeModal() {
  document.getElementById("modalMask").classList.remove("show");
}

/* ============ 详情弹窗 ============ */
function showDetail(e, i) {
  e.preventDefault();
  const c = CATEGORIES[i];
  openModal(c.name + " - 详情");
  document.getElementById("modalText").textContent = c.detail;
}

/* ============ 访问 / 下载统计（本地演示） ============ */
function updateStats() {
  const visits = Number(localStorage.getItem("visitCount") || 28699);
  const dls = Number(localStorage.getItem("dlCount") || 24853);
  document.getElementById("visitCount").textContent = visits.toLocaleString("en-US");
  document.getElementById("dlCount").textContent = dls.toLocaleString("en-US");
}

function initCounters() {
  const visits = Number(localStorage.getItem("visitCount") || 28699) + 1;
  localStorage.setItem("visitCount", visits);
  updateStats();
}

/* ============ 初始化 ============ */
document.addEventListener("DOMContentLoaded", () => {
  renderReleases();
  renderCards();
  renderTutorials();
  initCounters();
  const mask = document.getElementById("modalMask");
  if (mask) mask.addEventListener("click", (e) => {
    if (e.target.id === "modalMask") closeModal();
  });
});
