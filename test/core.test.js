const test = require("node:test");
const assert = require("node:assert/strict");
const C = require("../js/core.js");
test("registry is well-formed", () => {
  const ids = new Set();
  for (const c of C.COMPONENTS) {
    assert.ok(c.id && c.name && c.cat && c.html && c.css, c.id);
    assert.ok(!ids.has(c.id), `dup ${c.id}`); ids.add(c.id);
    for (const m of c.html.matchAll(/class="([^"]+)"/g)) for (const cls of m[1].split(" ")) if (cls.startsWith("pui-")) assert.ok(c.css.includes(`.${cls}`), `${c.id}: .${cls} has no css`);
    assert.equal((c.css.match(/\{/g) || []).length, (c.css.match(/\}/g) || []).length, `${c.id} braces`);
  }
  assert.ok(C.COMPONENTS.length >= 16);
});
test("standalone html", () => { const h = C.standalone(C.COMPONENTS[0]); assert.match(h, /^<!doctype html>/); assert.ok(h.includes(C.COMPONENTS[0].css)); });
test("prettyCSS", () => { assert.equal(C.prettyCSS(".a{color:red;top:0}.b:hover{x:1}"), ".a {\n  color:red;\n  top:0;\n}\n.b:hover {\n  x:1;\n}"); });
test("toJSX", () => { assert.equal(C.toJSX('<label class="a"><input type="checkbox" checked /><i style="width:5%"></i></label>'), '<label className="a"><input type="checkbox" defaultChecked /><i style={{ width: "5%" }}></i></label>'); });
