(() => {
  const { $, $$, copy, tabs, esc } = Prism;
  let cat = "", cur = null, view = "html";
  const mount = (el, c) => { const root = el.attachShadow ? el.shadowRoot || el.attachShadow({ mode: "open" }) : el; root.innerHTML = `<style>:host{display:grid;place-items:center}${c.css}</style>${c.html}`; };
  $("#cats").innerHTML = [`<button data-c="" class="on">All</button>`, ...Core.cats().map((c) => `<button data-c="${esc(c)}">${esc(c)}</button>`)].join("");
  $$("#cats button").forEach((b) => (b.onclick = () => { cat = b.dataset.c; $$("#cats button").forEach((x) => x.classList.toggle("on", x === b)); render(); }));
  function render() {
    const q = $("#q").value.toLowerCase();
    const list = Core.COMPONENTS.filter((c) => (!cat || c.cat === cat) && (!q || `${c.name} ${c.cat} ${c.html}`.toLowerCase().includes(q)));
    $("#count").textContent = `${list.length} components`;
    $("#gal").innerHTML = list.map((c) => `<button class="tile" data-id="${c.id}"><div class="stage"></div><div class="meta"><b>${esc(c.name)}</b><small>${esc(c.cat)}</small></div></button>`).join("");
    $$(".tile").forEach((t) => { const c = Core.COMPONENTS.find((x) => x.id === t.dataset.id); mount($(".stage", t), c); t.onclick = () => open(c); });
  }
  const code = () => view === "html" ? cur.html : view === "css" ? Core.prettyCSS(cur.css) : view === "jsx" ? Core.toJSX(cur.html) : Core.standalone(cur);
  function open(c) { cur = c; $("#dName").textContent = c.name; const p = $("#dPrev"); p.replaceWith(p.cloneNode(false)); mount($("#dPrev"), c); $("#dCode").textContent = code(); $("#dlg").showModal(); }
  tabs($("#dTab"), (v) => { view = v; $("#dCode").textContent = code(); });
  $("#dCopy").onclick = () => copy(code());
  $("#dClose").onclick = () => $("#dlg").close();
  $("#dlg").addEventListener("click", (e) => { if (e.target === $("#dlg")) $("#dlg").close(); });
  $("#q").addEventListener("input", render);
  render();
})();
