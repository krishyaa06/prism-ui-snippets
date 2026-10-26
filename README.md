<!-- ═════════════ HEADER ═════════════ -->
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:07060f,50:00D2FF,100:FF6B9A&height=200&section=header&text=Prism%20UI%20Snippets&fontSize=48&fontColor=ffffff&animation=fadeIn&fontAlignY=36&desc=Copy-paste%20HTML%2FCSS%20components&descAlignY=58&descSize=16" width="100%" alt="Prism UI Snippets" />
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=19&duration=2600&pause=800&color=00D2FF&center=true&vCenter=true&width=680&lines=Glow+buttons;Glass+cards;Skeleton+loaders;Copy+as+JSX" alt="Typing SVG" />
</p>

<p align="center">
  <a href="https://github.com/krishyaa06/prism-ui-snippets/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/krishyaa06/prism-ui-snippets/ci.yml?branch=main&style=for-the-badge&label=CI&logo=githubactions&logoColor=white" alt="CI" /></a>
  <a href="https://krishyaa06.github.io/prism-ui-snippets/"><img src="https://img.shields.io/badge/Live_Demo-Open-00D2FF?style=for-the-badge&logo=githubpages&logoColor=black" alt="Live demo" /></a>
  <img src="https://img.shields.io/badge/Vanilla-HTML%20%7C%20CSS%20%7C%20JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="Vanilla JS" />
  <img src="https://img.shields.io/badge/dependencies-0-00D2FF?style=for-the-badge" alt="Zero dependencies" />
  <a href="LICENSE"><img src="https://img.shields.io/github/license/krishyaa06/prism-ui-snippets?style=for-the-badge&color=FF6B9A" alt="License" /></a>
</p>

<p align="center">
  <img src="assets/screenshots/desktop.png" width="90%" alt="Prism UI Snippets screenshot" />
</p>

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png" width="100%" />

## ⚡ Overview

**Prism UI Snippets** is a gallery of small, polished UI pieces you can drop into any project, with no framework or build step. Each component is plain HTML and namespaced CSS (`pui-*` classes), previewed live in an isolated Shadow DOM so styles never clash. Open one to copy its HTML, formatted CSS, a React-ready JSX version or a standalone HTML page.

## ✨ Features

- **18 components** across buttons, cards, badges, forms, loaders, feedback, text and effects
- **Live previews** in Shadow DOM — no style leakage
- **Namespaced CSS** (`pui-` prefix) safe to paste anywhere
- **4 exports**: HTML, pretty CSS, JSX (`className`, style objects, `defaultChecked`), standalone page
- Search + category filter
- Tests ensure every class has CSS and braces balance

## 📸 Screenshots

<table>
  <tr>
    <td width="68%"><img src="assets/screenshots/desktop.png" width="100%" alt="Prism UI Snippets on desktop" /></td>
    <td width="32%"><img src="assets/screenshots/mobile.png" width="100%" alt="Prism UI Snippets on mobile" /></td>
  </tr>
</table>

## 🚀 Quick Start

**Use it online:** [https://krishyaa06.github.io/prism-ui-snippets/](https://krishyaa06.github.io/prism-ui-snippets/)

**Run locally:**

```bash
git clone https://github.com/krishyaa06/prism-ui-snippets.git
cd prism-ui-snippets
# open index.html in your browser, or serve it:
npx serve .
```

## 🛠️ Usage

Browse or search the gallery, click a component, choose **HTML / CSS / JSX / Standalone** and hit **Copy**.

Add your own by appending to the `COMPONENTS` array in `js/core.js`.

## 📁 Project Structure

```
prism-ui-snippets/
├── assets/
│   ├── logo.png
│   └── logo.svg
├── css/
│   ├── app.css
│   └── prism.css
├── js/
│   ├── app.js   # gallery + dialog
│   ├── core.js   # component registry + exporters — tested in Node
│   └── prism.js
├── test/
│   └── core.test.js
├── .gitignore
├── LICENSE
├── index.html
└── package.json
```

## 🧪 Tests

```bash
npm test
```

Tests use the built-in `node:test` runner, so there is nothing to install. CI runs them on Node 20 and 22.

## 🤝 Contributing

1. Fork the repo and create a branch: `git checkout -b feature/my-idea`
2. Make your change and add a test in `test/`
3. Run `npm test` and open a Pull Request

## 🔷 Part of Prism Protocol

Prism UI Snippets is one of the open-source tools built by [Prism Protocol](https://dc.gg/prismprotocol), a tech community where young builders learn, ship and compete together.

## 👤 Author

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/krishyaa06"><img src="https://github.com/krishyaa06.png" width="90" style="border-radius:50%" /><br><b>Soumya Bhandare</b></a><br>
      <sub>Founder @ Prism Protocol</sub>
    </td>
    <td>
      <a href="https://dc.gg/prismprotocol"><img src="https://img.shields.io/badge/Discord-Prism%20Protocol-5865F2?style=for-the-badge&logo=discord&logoColor=white" /></a><br>
      <a href="https://instagram.com/prism_protocol_"><img src="https://img.shields.io/badge/Instagram-@prism__protocol__-E4405F?style=for-the-badge&logo=instagram&logoColor=white" /></a><br>
      <a href="https://x.com/krishyaa06"><img src="https://img.shields.io/badge/X-@krishyaa06-000000?style=for-the-badge&logo=x&logoColor=white" /></a>
    </td>
  </tr>
</table>

## 📄 License

Released under the [MIT License](LICENSE).

<p align="center">
  <b>If you like this project, consider giving it a ⭐</b><br>
  <sub>"Build. Create. Compete." · Made with ⚡ by Prism Protocol</sub>
</p>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:FF6B9A,50:00D2FF,100:07060f&height=110&section=footer" width="100%" />
