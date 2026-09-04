/* ============ 下载分类数据（替换成你自己的内容） ============ */
const CATEGORIES = [
  {
    icon: "🖥️",
    name: "效率工具",
    desc: "精选办公与效率软件合集",
    version: "V3.1",
    date: "2026-09-02",
    download: "#",
    detail: "包含截图、录屏、压缩等常用工具，持续维护更新。"
  },
  {
    icon: "🎮",
    name: "游戏攻略",
    desc: "热门游戏实用攻略与资料",
    version: "V2.4",
    date: "2026-09-02",
    download: "#",
    detail: "涵盖地图、任务、技巧等图文攻略，合规内容整理。"
  },
  {
    icon: "🎨",
    name: "素材模板",
    desc: "PPT、海报、视频素材模板",
    version: "V1.8",
    date: "2026-09-01",
    download: "#",
    detail: "设计模板与素材包，供个人学习使用。"
  },
  {
    icon: "🧰",
    name: "开发资源",
    desc: "程序员常用工具与资源",
    version: "V5.0",
    date: "2026-08-28",
    download: "#",
    detail: "开发辅助工具与文档资源集合。"
  },
  {
    icon: "📖",
    name: "学习资料",
    desc: "教程、文档与知识整理",
    version: "V4.2",
    date: "2026-08-25",
    download: "#",
    detail: "各学科学习资料与笔记整理。"
  },
  {
    icon: "🔧",
    name: "敬请期待",
    desc: "更多分类正在开发中",
    version: "-",
    date: "-",
    download: "#",
    detail: "更多功能正在开发中，敬请期待！"
  }
];

/* ============ 渲染卡片 ============ */
function renderCards() {
  const grid = document.getElementById("cardGrid");
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

/* ============ 下载弹窗（没有后端时先用占位提示） ============ */
function handleDownload(e, name) {
  e.preventDefault();
  // 前端计数演示：把下载次数记录到浏览器本地
  let dl = Number(localStorage.getItem("dlCount") || 0) + 1;
  localStorage.setItem("dlCount", dl);
  updateStats();
  openModal(name);
}

function openModal(name) {
  const mask = document.getElementById("modalMask");
  document.getElementById("modalTitle").textContent = name;
  document.getElementById("modalText").textContent =
    "这里是下载链接占位：正式部署时，把这里替换成你的真实下载地址（如网盘链接或服务器文件地址）。";
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
  const visits = Number(localStorage.getItem("visitCount") || 28697);
  const dls = Number(localStorage.getItem("dlCount") || 24853);
  document.getElementById("visitCount").textContent = visits.toLocaleString("en-US");
  document.getElementById("dlCount").textContent = dls.toLocaleString("en-US");
}

function initCounters() {
  // 每次打开页面访问 +1（本地演示，仅示意）
  const visits = Number(localStorage.getItem("visitCount") || 28697) + 1;
  localStorage.setItem("visitCount", visits);
  updateStats();
}

/* ============ 初始化 ============ */
document.addEventListener("DOMContentLoaded", () => {
  renderCards();
  initCounters();
  document.getElementById("modalMask").addEventListener("click", (e) => {
    if (e.target.id === "modalMask") closeModal();
  });
});
