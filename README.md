# DLHub 下载站 — 免费部署说明

一个类似下载/展示站的静态网站模板，包含：品牌页头、访问/下载统计、下载专区（分类卡片）、定制服务区、联系客服区。

## 文件说明

| 文件 | 作用 |
|---|---|
| `index.html` | 网站主页 |
| `style.css` | 全部样式 |
| `script.js` | 卡片渲染、下载弹窗、访问/下载计数（本地演示） |

## 本地预览

直接用浏览器打开 `index.html` 即可看到效果（无需安装任何东西）。

## 免费部署（拿免费子域名，如 xxx.vercel.app）

### 方式一：Vercel（推荐，最省事）
1. 打开 https://vercel.com ，用 GitHub 账号登录（没有就先注册 GitHub）。
2. 点 "New Project" → 选择导入这个 `网站` 文件夹。
3. 保持默认设置，点 Deploy。
4. 完成后会得到一个 `https://你的项目名.vercel.app` 免费网址，直接可用。
   - 想改网址：项目 Settings → Domains，改成你想要的子域名。

### 方式二：Netlify
1. 打开 https://app.netlify.com ，用 GitHub 登录。
2. 把 `网站` 文件夹直接**拖进** Netlify 页面，自动部署。
3. 得到一个 `https://xxx.netlify.app` 免费网址。

### 方式三：GitHub Pages（网址为 xxx.github.io）
1. 在 GitHub 新建仓库，把 `网站` 文件夹里的 3 个文件上传。
2. 仓库 Settings → Pages → 选择部署分支 → Save。
3. 稍等得到 `https://你的用户名.github.io` 网址。

## 需要自己改的地方

- 首页 logo、站名：`index.html` 顶部
- 下载分类与内容：`script.js` 顶部的 `CATEGORIES` 数组
- 下载链接：`script.js` 中每个分类的 `download` 字段（替换成你的真实下载地址）
- 客服二维码：`index.html` 的 `.qr-placeholder` 位置换成你的二维码图片
- 访问/下载统计：目前是浏览器本地模拟，正式运营建议接后端或第三方统计（如 Umami）

## 重要提醒

请确保网站内容**合法合规**，不要上传游戏外挂/作弊辅助等违法内容。发布到公网即代表你同意遵守所在地区法律及平台规则。
