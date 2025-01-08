var zr = Object.defineProperty;
var It = (e) => {
  throw TypeError(e);
};
var Vr = (e, t, r) => t in e ? zr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Y = (e, t, r) => Vr(e, typeof t != "symbol" ? t + "" : t, r), Mt = (e, t, r) => t.has(e) || It("Cannot " + r);
var L = (e, t, r) => (Mt(e, t, "read from private field"), r ? r.call(e) : t.get(e)), st = (e, t, r) => t.has(e) ? It("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), at = (e, t, r, n) => (Mt(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r);
const Yr = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Yr);
const Ur = 1, jr = 2, Kr = 16, Wr = 1, Gr = 4, Jr = 8, Xr = 16, Zr = 4, Qr = 1, en = 2, jt = "[", yt = "[!", $t = "]", Te = {}, D = Symbol(), Kt = !1;
function bt(e) {
  console.warn("hydration_mismatch");
}
var wt = Array.isArray, xt = Array.from, Ve = Object.keys, Ye = Object.defineProperty, ve = Object.getOwnPropertyDescriptor, tn = Object.getOwnPropertyDescriptors, rn = Object.prototype, nn = Array.prototype, ot = Object.getPrototypeOf;
function sn(e) {
  return typeof e == "function";
}
const ke = () => {
};
function Wt(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const ae = 2, Gt = 4, Je = 8, Xe = 16, Z = 32, Se = 64, Ee = 128, Ue = 256, q = 512, le = 1024, Oe = 2048, G = 4096, Re = 8192, Jt = 16384, Ze = 32768, an = 1 << 18, Xt = 1 << 19, lt = Symbol("$state"), ln = Symbol("");
function Zt(e) {
  return e === this.v;
}
function on(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Qt(e) {
  return !on(e, this.v);
}
function un() {
  throw new Error("effect_update_depth_exceeded");
}
function fn() {
  throw new Error("hydration_failed");
}
function cn(e) {
  throw new Error("props_invalid_value");
}
function vn() {
  throw new Error("state_descriptors_fixed");
}
function dn() {
  throw new Error("state_prototype_fixed");
}
function _n() {
  throw new Error("state_unsafe_local_read");
}
function hn() {
  throw new Error("state_unsafe_mutation");
}
let er = !1;
function U(e) {
  return {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Zt,
    version: 0
  };
}
// @__NO_SIDE_EFFECTS__
function Et(e, t = !1) {
  const r = U(e);
  return t || (r.equals = Qt), r;
}
function K(e, t) {
  return k !== null && En() && k.f & (ae | Xe) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (de === null || !de.includes(e)) && hn(), tr(e, t);
}
function tr(e, t) {
  return e.equals(t) || (e.v = t, e.version = $r(), rr(e, le), g !== null && g.f & q && !(g.f & Z) && (R !== null && R.includes(e) ? (re(g, le), et(g)) : se === null ? xn([e]) : se.push(e))), t;
}
function rr(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = r.length, i = 0; i < n; i++) {
      var s = r[i], a = s.f;
      a & le || (re(s, t), a & (q | Ee) && (a & ae ? rr(
        /** @type {Derived} */
        s,
        Oe
      ) : et(
        /** @type {Effect} */
        s
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function pn(e) {
  var t = ae | le;
  g === null ? t |= Ee : g.f |= Xt;
  const r = {
    children: null,
    ctx: J,
    deps: null,
    equals: Zt,
    f: t,
    fn: e,
    reactions: null,
    v: (
      /** @type {V} */
      null
    ),
    version: 0,
    parent: g
  };
  if (k !== null && k.f & ae) {
    var n = (
      /** @type {Derived} */
      k
    );
    (n.children ?? (n.children = [])).push(r);
  }
  return r;
}
function nr(e) {
  var t = e.children;
  if (t !== null) {
    e.children = null;
    for (var r = 0; r < t.length; r += 1) {
      var n = t[r];
      n.f & ae ? kt(
        /** @type {Derived} */
        n
      ) : pe(
        /** @type {Effect} */
        n
      );
    }
  }
}
function ir(e) {
  var t, r = g;
  V(e.parent);
  try {
    nr(e), t = br(e);
  } finally {
    V(r);
  }
  return t;
}
function sr(e) {
  var t = ir(e), r = (ye || e.f & Ee) && e.deps !== null ? Oe : q;
  re(e, r), e.equals(t) || (e.v = t, e.version = $r());
}
function kt(e) {
  nr(e), Ce(e, 0), re(e, Re), e.v = e.children = e.deps = e.ctx = e.reactions = null;
}
function mn(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Ie(e, t, r, n = !0) {
  var i = (e & Se) !== 0, s = g, a = {
    ctx: J,
    deps: null,
    deriveds: null,
    nodes_start: null,
    nodes_end: null,
    f: e | le,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: i ? null : s,
    prev: null,
    teardown: null,
    transitions: null,
    version: 0
  };
  if (r) {
    var u = $e;
    try {
      Lt(!0), Qe(a), a.f |= Jt;
    } catch (l) {
      throw pe(a), l;
    } finally {
      Lt(u);
    }
  } else t !== null && et(a);
  var f = r && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & Xt) === 0;
  if (!f && !i && n && (s !== null && mn(a, s), k !== null && k.f & ae)) {
    var o = (
      /** @type {Derived} */
      k
    );
    (o.children ?? (o.children = [])).push(a);
  }
  return a;
}
function ar(e) {
  const t = Ie(Se, e, !0);
  return () => {
    pe(t);
  };
}
function lr(e) {
  return Ie(Gt, e, !1);
}
function or(e) {
  return Ie(Je, e, !0);
}
function ee(e) {
  return Tt(e);
}
function Tt(e, t = 0) {
  return Ie(Je | Xe | t, e, !0);
}
function Ae(e, t = !0) {
  return Ie(Je | Z, e, !0, t);
}
function ur(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = k;
    X(null);
    try {
      t.call(null);
    } finally {
      X(r);
    }
  }
}
function fr(e) {
  var t = e.deriveds;
  if (t !== null) {
    e.deriveds = null;
    for (var r = 0; r < t.length; r += 1)
      kt(t[r]);
  }
}
function cr(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var n = r.next;
    pe(r, t), r = n;
  }
}
function gn(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    t.f & Z || pe(t), t = r;
  }
}
function pe(e, t = !0) {
  var r = !1;
  if ((t || e.f & an) && e.nodes_start !== null) {
    for (var n = e.nodes_start, i = e.nodes_end; n !== null; ) {
      var s = n === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ oe(n)
      );
      n.remove(), n = s;
    }
    r = !0;
  }
  cr(e, t && !r), fr(e), Ce(e, 0), re(e, Re);
  var a = e.transitions;
  if (a !== null)
    for (const f of a)
      f.stop();
  ur(e);
  var u = e.parent;
  u !== null && u.first !== null && vr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.parent = e.fn = e.nodes_start = e.nodes_end = null;
}
function vr(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function ut(e, t) {
  var r = [];
  At(e, r, !0), dr(r, () => {
    pe(e), t && t();
  });
}
function dr(e, t) {
  var r = e.length;
  if (r > 0) {
    var n = () => --r || t();
    for (var i of e)
      i.out(n);
  } else
    t();
}
function At(e, t, r) {
  if (!(e.f & G)) {
    if (e.f ^= G, e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || r) && t.push(a);
    for (var n = e.first; n !== null; ) {
      var i = n.next, s = (n.f & Ze) !== 0 || (n.f & Z) !== 0;
      At(n, t, s ? r : !1), n = i;
    }
  }
}
function je(e) {
  _r(e, !0);
}
function _r(e, t) {
  if (e.f & G) {
    Me(e) && Qe(e), e.f ^= G;
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & Ze) !== 0 || (r.f & Z) !== 0;
      _r(r, i ? t : !1), r = n;
    }
    if (e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || t) && s.in();
  }
}
const yn = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Ke = !1, We = !1, ft = [], ct = [];
function hr() {
  Ke = !1;
  const e = ft.slice();
  ft = [], Wt(e);
}
function pr() {
  We = !1;
  const e = ct.slice();
  ct = [], Wt(e);
}
function mr(e) {
  Ke || (Ke = !0, queueMicrotask(hr)), ft.push(e);
}
function $n(e) {
  We || (We = !0, yn(pr)), ct.push(e);
}
function bn() {
  Ke && hr(), We && pr();
}
const gr = 0, wn = 1;
let He = gr, Ne = !1, $e = !1;
function Lt(e) {
  $e = e;
}
let ce = [], be = 0;
let k = null;
function X(e) {
  k = e;
}
let g = null;
function V(e) {
  g = e;
}
let de = null, R = null, F = 0, se = null;
function xn(e) {
  se = e;
}
let yr = 0, ye = !1, J = null;
function $r() {
  return ++yr;
}
function En() {
  return !er;
}
function Me(e) {
  var a, u;
  var t = e.f;
  if (t & le)
    return !0;
  if (t & Oe) {
    var r = e.deps, n = (t & Ee) !== 0;
    if (r !== null) {
      var i;
      if (t & Ue) {
        for (i = 0; i < r.length; i++)
          ((a = r[i]).reactions ?? (a.reactions = [])).push(e);
        e.f ^= Ue;
      }
      for (i = 0; i < r.length; i++) {
        var s = r[i];
        if (Me(
          /** @type {Derived} */
          s
        ) && sr(
          /** @type {Derived} */
          s
        ), n && g !== null && !ye && !((u = s == null ? void 0 : s.reactions) != null && u.includes(e)) && (s.reactions ?? (s.reactions = [])).push(e), s.version > e.version)
          return !0;
      }
    }
    n || re(e, q);
  }
  return !1;
}
function kn(e, t, r) {
  throw e;
}
function br(e) {
  var v;
  var t = R, r = F, n = se, i = k, s = ye, a = de, u = J, f = e.f;
  R = /** @type {null | Value[]} */
  null, F = 0, se = null, k = f & (Z | Se) ? null : e, ye = !$e && (f & Ee) !== 0, de = null, J = e.ctx;
  try {
    var o = (
      /** @type {Function} */
      (0, e.fn)()
    ), l = e.deps;
    if (R !== null) {
      var c;
      if (Ce(e, F), l !== null && F > 0)
        for (l.length = F + R.length, c = 0; c < R.length; c++)
          l[F + c] = R[c];
      else
        e.deps = l = R;
      if (!ye)
        for (c = F; c < l.length; c++)
          ((v = l[c]).reactions ?? (v.reactions = [])).push(e);
    } else l !== null && F < l.length && (Ce(e, F), l.length = F);
    return o;
  } finally {
    R = t, F = r, se = n, k = i, ye = s, de = a, J = u;
  }
}
function Tn(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = r.indexOf(e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  r === null && t.f & ae && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (R === null || !R.includes(t)) && (re(t, Oe), t.f & (Ee | Ue) || (t.f ^= Ue), Ce(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Ce(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Tn(e, r[n]);
}
function Qe(e) {
  var t = e.f;
  if (!(t & Re)) {
    re(e, q);
    var r = g;
    g = e;
    try {
      t & Xe ? gn(e) : cr(e), fr(e), ur(e);
      var n = br(e);
      e.teardown = typeof n == "function" ? n : null, e.version = yr;
    } catch (i) {
      kn(
        /** @type {Error} */
        i
      );
    } finally {
      g = r;
    }
  }
}
function wr() {
  be > 1e3 && (be = 0, un()), be++;
}
function xr(e) {
  var t = e.length;
  if (t !== 0) {
    wr();
    var r = $e;
    $e = !0;
    try {
      for (var n = 0; n < t; n++) {
        var i = e[n];
        i.f & q || (i.f ^= q);
        var s = [];
        Er(i, s), An(s);
      }
    } finally {
      $e = r;
    }
  }
}
function An(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var n = e[r];
      !(n.f & (Re | G)) && Me(n) && (Qe(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? vr(n) : n.fn = null));
    }
}
function Nn() {
  if (Ne = !1, be > 1001)
    return;
  const e = ce;
  ce = [], xr(e), Ne || (be = 0);
}
function et(e) {
  He === gr && (Ne || (Ne = !0, queueMicrotask(Nn)));
  for (var t = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (r & (Se | Z)) {
      if (!(r & q)) return;
      t.f ^= q;
    }
  }
  ce.push(t);
}
function Er(e, t) {
  var r = e.first, n = [];
  e: for (; r !== null; ) {
    var i = r.f, s = (i & Z) !== 0, a = s && (i & q) !== 0;
    if (!a && !(i & G))
      if (i & Je) {
        s ? r.f ^= q : Me(r) && Qe(r);
        var u = r.first;
        if (u !== null) {
          r = u;
          continue;
        }
      } else i & Gt && n.push(r);
    var f = r.next;
    if (f === null) {
      let c = r.parent;
      for (; c !== null; ) {
        if (e === c)
          break e;
        var o = c.next;
        if (o !== null) {
          r = o;
          continue e;
        }
        c = c.parent;
      }
    }
    r = f;
  }
  for (var l = 0; l < n.length; l++)
    u = n[l], t.push(u), Er(u, t);
}
function kr(e) {
  var t = He, r = ce;
  try {
    wr();
    const i = [];
    He = wn, ce = i, Ne = !1, xr(r);
    var n = e == null ? void 0 : e();
    return bn(), (ce.length > 0 || i.length > 0) && kr(), be = 0, n;
  } finally {
    He = t, ce = r;
  }
}
function w(e) {
  var u;
  var t = e.f, r = (t & ae) !== 0;
  if (r && t & Re) {
    var n = ir(
      /** @type {Derived} */
      e
    );
    return kt(
      /** @type {Derived} */
      e
    ), n;
  }
  if (k !== null) {
    de !== null && de.includes(e) && _n();
    var i = k.deps;
    R === null && i !== null && i[F] === e ? F++ : R === null ? R = [e] : R.push(e), se !== null && g !== null && g.f & q && !(g.f & Z) && se.includes(e) && (re(g, le), et(g));
  } else if (r && /** @type {Derived} */
  e.deps === null) {
    var s = (
      /** @type {Derived} */
      e
    ), a = s.parent;
    a !== null && !((u = a.deriveds) != null && u.includes(s)) && (a.deriveds ?? (a.deriveds = [])).push(s);
  }
  return r && (s = /** @type {Derived} */
  e, Me(s) && sr(s)), e.v;
}
function vt(e) {
  const t = k;
  try {
    return k = null, e();
  } finally {
    k = t;
  }
}
const Cn = ~(le | Oe | q);
function re(e, t) {
  e.f = e.f & Cn | t;
}
function Nt(e, t = !1, r) {
  J = {
    p: J,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
}
function Ct(e) {
  const t = J;
  if (t !== null) {
    const a = t.e;
    if (a !== null) {
      var r = g, n = k;
      t.e = null;
      try {
        for (var i = 0; i < a.length; i++) {
          var s = a[i];
          V(s.effect), X(s.reaction), lr(s.fn);
        }
      } finally {
        V(r), X(n);
      }
    }
    J = t.p, t.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
function fe(e, t = null, r) {
  if (typeof e != "object" || e === null || lt in e)
    return e;
  const n = ot(e);
  if (n !== rn && n !== nn)
    return e;
  var i = /* @__PURE__ */ new Map(), s = wt(e), a = U(0);
  s && i.set("length", U(
    /** @type {any[]} */
    e.length
  ));
  var u;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(f, o, l) {
        (!("value" in l) || l.configurable === !1 || l.enumerable === !1 || l.writable === !1) && vn();
        var c = i.get(o);
        return c === void 0 ? (c = U(l.value), i.set(o, c)) : K(c, fe(l.value, u)), !0;
      },
      deleteProperty(f, o) {
        var l = i.get(o);
        if (l === void 0)
          o in f && i.set(o, U(D));
        else {
          if (s && typeof o == "string") {
            var c = (
              /** @type {Source<number>} */
              i.get("length")
            ), v = Number(o);
            Number.isInteger(v) && v < c.v && K(c, v);
          }
          K(l, D), Pt(a);
        }
        return !0;
      },
      get(f, o, l) {
        var _;
        if (o === lt)
          return e;
        var c = i.get(o), v = o in f;
        if (c === void 0 && (!v || (_ = ve(f, o)) != null && _.writable) && (c = U(fe(v ? f[o] : D, u)), i.set(o, c)), c !== void 0) {
          var d = w(c);
          return d === D ? void 0 : d;
        }
        return Reflect.get(f, o, l);
      },
      getOwnPropertyDescriptor(f, o) {
        var l = Reflect.getOwnPropertyDescriptor(f, o);
        if (l && "value" in l) {
          var c = i.get(o);
          c && (l.value = w(c));
        } else if (l === void 0) {
          var v = i.get(o), d = v == null ? void 0 : v.v;
          if (v !== void 0 && d !== D)
            return {
              enumerable: !0,
              configurable: !0,
              value: d,
              writable: !0
            };
        }
        return l;
      },
      has(f, o) {
        var d;
        if (o === lt)
          return !0;
        var l = i.get(o), c = l !== void 0 && l.v !== D || Reflect.has(f, o);
        if (l !== void 0 || g !== null && (!c || (d = ve(f, o)) != null && d.writable)) {
          l === void 0 && (l = U(c ? fe(f[o], u) : D), i.set(o, l));
          var v = w(l);
          if (v === D)
            return !1;
        }
        return c;
      },
      set(f, o, l, c) {
        var b;
        var v = i.get(o), d = o in f;
        if (s && o === "length")
          for (var _ = l; _ < /** @type {Source<number>} */
          v.v; _ += 1) {
            var p = i.get(_ + "");
            p !== void 0 ? K(p, D) : _ in f && (p = U(D), i.set(_ + "", p));
          }
        v === void 0 ? (!d || (b = ve(f, o)) != null && b.writable) && (v = U(void 0), K(v, fe(l, u)), i.set(o, v)) : (d = v.v !== D, K(v, fe(l, u)));
        var m = Reflect.getOwnPropertyDescriptor(f, o);
        if (m != null && m.set && m.set.call(c, l), !d) {
          if (s && typeof o == "string") {
            var h = (
              /** @type {Source<number>} */
              i.get("length")
            ), y = Number(o);
            Number.isInteger(y) && y >= h.v && K(h, y + 1);
          }
          Pt(a);
        }
        return !0;
      },
      ownKeys(f) {
        w(a);
        var o = Reflect.ownKeys(f).filter((v) => {
          var d = i.get(v);
          return d === void 0 || d.v !== D;
        });
        for (var [l, c] of i)
          c.v !== D && !(l in f) && o.push(l);
        return o;
      },
      setPrototypeOf() {
        dn();
      }
    }
  );
}
function Pt(e, t = 1) {
  K(e, e.v + t);
}
var Dt, Tr, Ar;
function dt() {
  if (Dt === void 0) {
    Dt = window;
    var e = Element.prototype, t = Node.prototype;
    Tr = ve(t, "firstChild").get, Ar = ve(t, "nextSibling").get, e.__click = void 0, e.__className = "", e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function xe(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function he(e) {
  return Tr.call(e);
}
// @__NO_SIDE_EFFECTS__
function oe(e) {
  return Ar.call(e);
}
function A(e, t) {
  if (!$)
    return /* @__PURE__ */ he(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ he(x)
  );
  if (r === null)
    r = x.appendChild(xe());
  else if (t && r.nodeType !== 3) {
    var n = xe();
    return r == null || r.before(n), j(n), n;
  }
  return j(r), r;
}
function Nr(e, t) {
  if (!$) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ he(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ oe(r) : r;
  }
  return x;
}
function z(e, t = 1, r = !1) {
  let n = $ ? x : e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ oe(n);
  if (!$)
    return n;
  var i = n.nodeType;
  if (r && i !== 3) {
    var s = xe();
    return n == null || n.before(s), j(s), s;
  }
  return j(n), /** @type {TemplateNode} */
  n;
}
function Cr(e) {
  e.textContent = "";
}
let $ = !1;
function te(e) {
  $ = e;
}
let x;
function j(e) {
  if (e === null)
    throw bt(), Te;
  return x = e;
}
function Le() {
  return j(
    /** @type {TemplateNode} */
    /* @__PURE__ */ oe(x)
  );
}
function E(e) {
  if ($) {
    if (/* @__PURE__ */ oe(x) !== null)
      throw bt(), Te;
    x = e;
  }
}
function _t() {
  for (var e = 0, t = x; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === $t) {
        if (e === 0) return t;
        e -= 1;
      } else (r === jt || r === yt) && (e += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ oe(t)
    );
    t.remove(), t = n;
  }
}
let Ft = !1;
function Sr() {
  Ft || (Ft = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        var t;
        if (!e.defaultPrevented)
          for (
            const r of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            (t = r.__on_r) == null || t.call(r);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function Sn(e) {
  var t = k, r = g;
  X(null), V(null);
  try {
    return e();
  } finally {
    X(t), V(r);
  }
}
function On(e, t, r, n = r) {
  e.addEventListener(t, () => Sn(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), n();
  } : e.__on_r = n, Sr();
}
const Or = /* @__PURE__ */ new Set(), ht = /* @__PURE__ */ new Set();
function St(e) {
  for (var t = 0; t < e.length; t++)
    Or.add(e[t]);
  for (var r of ht)
    r(e);
}
function De(e) {
  var y;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = ((y = e.composedPath) == null ? void 0 : y.call(e)) || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  ), a = 0, u = e.__root;
  if (u) {
    var f = i.indexOf(u);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var o = i.indexOf(t);
    if (o === -1)
      return;
    f <= o && (a = f);
  }
  if (s = /** @type {Element} */
  i[a] || e.target, s !== t) {
    Ye(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var l = k, c = g;
    X(null), V(null);
    try {
      for (var v, d = []; s !== null; ) {
        var _ = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var p = s["__" + n];
          if (p !== void 0 && !/** @type {any} */
          s.disabled)
            if (wt(p)) {
              var [m, ...h] = p;
              m.apply(s, [e, ...h]);
            } else
              p.call(s, e);
        } catch (b) {
          v ? d.push(b) : v = b;
        }
        if (e.cancelBubble || _ === t || _ === null)
          break;
        s = _;
      }
      if (v) {
        for (let b of d)
          queueMicrotask(() => {
            throw b;
          });
        throw v;
      }
    } finally {
      e.__root = t, delete e.currentTarget, X(l), V(c);
    }
  }
}
function Rn(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function we(e, t) {
  var r = (
    /** @type {Effect} */
    g
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function P(e, t) {
  var r = (t & Qr) !== 0, n = (t & en) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    if ($)
      return we(x, null), x;
    i === void 0 && (i = Rn(s ? e : "<!>" + e), r || (i = /** @type {Node} */
    /* @__PURE__ */ he(i)));
    var a = (
      /** @type {TemplateNode} */
      n ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ he(a)
      ), f = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      we(u, f);
    } else
      we(a, a);
    return a;
  };
}
function In() {
  if ($)
    return we(x, null), x;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = xe();
  return e.append(t, r), we(t, r), e;
}
function I(e, t) {
  if ($) {
    g.nodes_end = x, Le();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Mn = ["touchstart", "touchmove"];
function Ln(e) {
  return Mn.includes(e);
}
let pt = !0;
function Ge(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r == null ? "" : r + "");
}
function Rr(e, t) {
  return Ir(e, t);
}
function Pn(e, t) {
  dt(), t.intro = t.intro ?? !1;
  const r = t.target, n = $, i = x;
  try {
    for (var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ he(r)
    ); s && (s.nodeType !== 8 || /** @type {Comment} */
    s.data !== jt); )
      s = /** @type {TemplateNode} */
      /* @__PURE__ */ oe(s);
    if (!s)
      throw Te;
    te(!0), j(
      /** @type {Comment} */
      s
    ), Le();
    const a = Ir(e, { ...t, anchor: s });
    if (x === null || x.nodeType !== 8 || /** @type {Comment} */
    x.data !== $t)
      throw bt(), Te;
    return te(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === Te)
      return t.recover === !1 && fn(), dt(), Cr(r), te(!1), Rr(e, t);
    throw a;
  } finally {
    te(n), j(i);
  }
}
const ge = /* @__PURE__ */ new Map();
function Ir(e, { target: t, anchor: r, props: n = {}, events: i, context: s, intro: a = !0 }) {
  dt();
  var u = /* @__PURE__ */ new Set(), f = (c) => {
    for (var v = 0; v < c.length; v++) {
      var d = c[v];
      if (!u.has(d)) {
        u.add(d);
        var _ = Ln(d);
        t.addEventListener(d, De, { passive: _ });
        var p = ge.get(d);
        p === void 0 ? (document.addEventListener(d, De, { passive: _ }), ge.set(d, 1)) : ge.set(d, p + 1);
      }
    }
  };
  f(xt(Or)), ht.add(f);
  var o = void 0, l = ar(() => {
    var c = r ?? t.appendChild(xe());
    return Ae(() => {
      if (s) {
        Nt({});
        var v = (
          /** @type {ComponentContext} */
          J
        );
        v.c = s;
      }
      i && (n.$$events = i), $ && we(
        /** @type {TemplateNode} */
        c,
        null
      ), pt = a, o = e(c, n) || {}, pt = !0, $ && (g.nodes_end = x), s && Ct();
    }), () => {
      var _;
      for (var v of u) {
        t.removeEventListener(v, De);
        var d = (
          /** @type {number} */
          ge.get(v)
        );
        --d === 0 ? (document.removeEventListener(v, De), ge.delete(v)) : ge.set(v, d);
      }
      ht.delete(f), mt.delete(o), c !== r && ((_ = c.parentNode) == null || _.removeChild(c));
    };
  });
  return mt.set(o, l), o;
}
let mt = /* @__PURE__ */ new WeakMap();
function Dn(e) {
  const t = mt.get(e);
  t && t();
}
function _e(e, t, r, n = null, i = !1) {
  $ && Le();
  var s = e, a = null, u = null, f = null, o = i ? Ze : 0;
  Tt(() => {
    if (f === (f = !!t())) return;
    let l = !1;
    if ($) {
      const c = (
        /** @type {Comment} */
        s.data === yt
      );
      f === c && (s = _t(), j(s), te(!1), l = !0);
    }
    f ? (a ? je(a) : a = Ae(() => r(s)), u && ut(u, () => {
      u = null;
    })) : (u ? je(u) : n && (u = Ae(() => n(s))), a && ut(a, () => {
      a = null;
    })), l && te(!0);
  }, o), $ && (s = x);
}
function qt(e, t) {
  return t;
}
function Fn(e, t, r, n) {
  for (var i = [], s = t.length, a = 0; a < s; a++)
    At(t[a].e, i, !0);
  var u = s > 0 && i.length === 0 && r !== null;
  if (u) {
    var f = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    Cr(f), f.append(
      /** @type {Element} */
      r
    ), n.clear(), ne(e, t[0].prev, t[s - 1].next);
  }
  dr(i, () => {
    for (var o = 0; o < s; o++) {
      var l = t[o];
      u || (n.delete(l.k), ne(e, l.prev, l.next)), pe(l.e, !u);
    }
  });
}
function Ht(e, t, r, n, i, s = null) {
  var a = e, u = { flags: t, items: /* @__PURE__ */ new Map(), first: null };
  {
    var f = (
      /** @type {Element} */
      e
    );
    a = $ ? j(
      /** @type {Comment | Text} */
      /* @__PURE__ */ he(f)
    ) : f.appendChild(xe());
  }
  $ && Le();
  var o = null, l = !1;
  Tt(() => {
    var c = r(), v = wt(c) ? c : c == null ? [] : xt(c), d = v.length;
    if (l && d === 0)
      return;
    l = d === 0;
    let _ = !1;
    if ($) {
      var p = (
        /** @type {Comment} */
        a.data === yt
      );
      p !== (d === 0) && (a = _t(), j(a), te(!1), _ = !0);
    }
    if ($) {
      for (var m = null, h, y = 0; y < d; y++) {
        if (x.nodeType === 8 && /** @type {Comment} */
        x.data === $t) {
          a = /** @type {Comment} */
          x, _ = !0, te(!1);
          break;
        }
        var b = v[y], C = n(b, y);
        h = Mr(x, u, m, null, b, C, y, i, t), u.items.set(C, h), m = h;
      }
      d > 0 && j(_t());
    }
    if (!$) {
      var T = (
        /** @type {Effect} */
        k
      );
      qn(v, u, a, i, t, (T.f & G) !== 0, n);
    }
    s !== null && (d === 0 ? o ? je(o) : o = Ae(() => s(a)) : o !== null && ut(o, () => {
      o = null;
    })), _ && te(!0), r();
  }), $ && (a = x);
}
function qn(e, t, r, n, i, s, a) {
  var u = e.length, f = t.items, o = t.first, l = o, c, v = null, d = [], _ = [], p, m, h, y;
  for (y = 0; y < u; y += 1) {
    if (p = e[y], m = a(p, y), h = f.get(m), h === void 0) {
      var b = l ? (
        /** @type {TemplateNode} */
        l.e.nodes_start
      ) : r;
      v = Mr(
        b,
        t,
        v,
        v === null ? t.first : v.next,
        p,
        m,
        y,
        n,
        i
      ), f.set(m, v), d = [], _ = [], l = v.next;
      continue;
    }
    if (Hn(h, p, y), h.e.f & G && je(h.e), h !== l) {
      if (c !== void 0 && c.has(h)) {
        if (d.length < _.length) {
          var C = _[0], T;
          v = C.prev;
          var S = d[0], O = d[d.length - 1];
          for (T = 0; T < d.length; T += 1)
            Bt(d[T], C, r);
          for (T = 0; T < _.length; T += 1)
            c.delete(_[T]);
          ne(t, S.prev, O.next), ne(t, v, S), ne(t, O, C), l = C, v = O, y -= 1, d = [], _ = [];
        } else
          c.delete(h), Bt(h, l, r), ne(t, h.prev, h.next), ne(t, h, v === null ? t.first : v.next), ne(t, v, h), v = h;
        continue;
      }
      for (d = [], _ = []; l !== null && l.k !== m; )
        (s || !(l.e.f & G)) && (c ?? (c = /* @__PURE__ */ new Set())).add(l), _.push(l), l = l.next;
      if (l === null)
        continue;
      h = l;
    }
    d.push(h), v = h, l = h.next;
  }
  if (l !== null || c !== void 0) {
    for (var M = c === void 0 ? [] : xt(c); l !== null; )
      (s || !(l.e.f & G)) && M.push(l), l = l.next;
    var nt = M.length;
    if (nt > 0) {
      var it = u === 0 ? r : null;
      Fn(t, M, it, f);
    }
  }
  g.first = t.first && t.first.e, g.last = v && v.e;
}
function Hn(e, t, r, n) {
  tr(e.v, t), e.i = r;
}
function Mr(e, t, r, n, i, s, a, u, f) {
  var o = (f & Ur) !== 0, l = (f & Kr) === 0, c = o ? l ? /* @__PURE__ */ Et(i) : U(i) : i, v = f & jr ? U(a) : a, d = {
    i: v,
    v: c,
    k: s,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: n
  };
  try {
    return d.e = Ae(() => u(e, c, v), $), d.e.prev = r && r.e, d.e.next = n && n.e, r === null ? t.first = d : (r.next = d, r.e.next = d.e), n !== null && (n.prev = d, n.e.prev = d.e), d;
  } finally {
  }
}
function Bt(e, t, r) {
  for (var n = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : r, i = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : r, s = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); s !== n; ) {
    var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ oe(s)
    );
    i.before(s), s = a;
  }
}
function ne(e, t, r) {
  t === null ? e.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
}
function Lr(e, t, r, n, i) {
  var u;
  $ && Le();
  var s = (u = t.$$slots) == null ? void 0 : u[r], a = !1;
  s === !0 && (s = t.children, a = !0), s === void 0 || s(e, a ? () => n : n);
}
function tt(e, t) {
  mr(() => {
    var r = e.getRootNode(), n = (
      /** @type {ShadowRoot} */
      r.host ? (
        /** @type {ShadowRoot} */
        r
      ) : (
        /** @type {Document} */
        r.head ?? /** @type {Document} */
        r.ownerDocument.head
      )
    );
    if (!n.querySelector("#" + t.hash)) {
      const i = document.createElement("style");
      i.id = t.hash, i.textContent = t.code, n.appendChild(i);
    }
  });
}
function Bn(e) {
  if ($) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var n = e.value;
          W(e, "value", null), e.value = n;
        }
        if (e.hasAttribute("checked")) {
          var i = e.checked;
          W(e, "checked", null), e.checked = i;
        }
      }
    };
    e.__on_r = r, $n(r), Sr();
  }
}
function W(e, t, r, n) {
  var i = e.__attributes ?? (e.__attributes = {});
  $ && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || i[t] !== (i[t] = r) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[ln] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && zn(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
var zt = /* @__PURE__ */ new Map();
function zn(e) {
  var t = zt.get(e.nodeName);
  if (t) return t;
  zt.set(e.nodeName, t = []);
  for (var r, n = ot(e), i = Element.prototype; i !== n; ) {
    r = tn(n);
    for (var s in r)
      r[s].set && t.push(s);
    n = ot(n);
  }
  return t;
}
function Be(e, t) {
  var r = e.__className, n = Vn(t);
  $ && e.className === n ? e.__className = n : (r !== n || $ && e.className !== n) && (t == null ? e.removeAttribute("class") : e.className = n, e.__className = n);
}
function Vn(e) {
  return e ?? "";
}
const Yn = () => performance.now(), ie = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (e) => requestAnimationFrame(e)
  ),
  now: () => Yn(),
  tasks: /* @__PURE__ */ new Set()
};
function Pr(e) {
  ie.tasks.forEach((t) => {
    t.c(e) || (ie.tasks.delete(t), t.f());
  }), ie.tasks.size !== 0 && ie.tick(Pr);
}
function Un(e) {
  let t;
  return ie.tasks.size === 0 && ie.tick(Pr), {
    promise: new Promise((r) => {
      ie.tasks.add(t = { c: e, f: r });
    }),
    abort() {
      ie.tasks.delete(t);
    }
  };
}
function Fe(e, t) {
  e.dispatchEvent(new CustomEvent(t));
}
function jn(e) {
  if (e === "float") return "cssFloat";
  if (e === "offset") return "cssOffset";
  if (e.startsWith("--")) return e;
  const t = e.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(
    /** @param {any} word */
    (r) => r[0].toUpperCase() + r.slice(1)
  ).join("");
}
function Vt(e) {
  const t = {}, r = e.split(";");
  for (const n of r) {
    const [i, s] = n.split(":");
    if (!i || s === void 0) break;
    const a = jn(i.trim());
    t[a] = s.trim();
  }
  return t;
}
const Kn = (e) => e;
function Wn(e, t, r, n) {
  var i = (e & Zr) !== 0, s = "both", a, u = t.inert, f, o;
  function l() {
    var p = k, m = g;
    X(null), V(null);
    try {
      return a ?? (a = r()(t, (n == null ? void 0 : n()) ?? /** @type {P} */
      {}, {
        direction: s
      }));
    } finally {
      X(p), V(m);
    }
  }
  var c = {
    is_global: i,
    in() {
      t.inert = u, Fe(t, "introstart"), f = gt(t, l(), o, 1, () => {
        Fe(t, "introend"), f == null || f.abort(), f = a = void 0;
      });
    },
    out(p) {
      t.inert = !0, Fe(t, "outrostart"), o = gt(t, l(), f, 0, () => {
        Fe(t, "outroend"), p == null || p();
      });
    },
    stop: () => {
      f == null || f.abort(), o == null || o.abort();
    }
  }, v = (
    /** @type {Effect} */
    g
  );
  if ((v.transitions ?? (v.transitions = [])).push(c), pt) {
    var d = i;
    if (!d) {
      for (var _ = (
        /** @type {Effect | null} */
        v.parent
      ); _ && _.f & Ze; )
        for (; (_ = _.parent) && !(_.f & Xe); )
          ;
      d = !_ || (_.f & Jt) !== 0;
    }
    d && lr(() => {
      vt(() => c.in());
    });
  }
}
function gt(e, t, r, n, i) {
  var s = n === 1;
  if (sn(t)) {
    var a, u = !1;
    return mr(() => {
      if (!u) {
        var m = t({ direction: s ? "in" : "out" });
        a = gt(e, m, r, n, i);
      }
    }), {
      abort: () => {
        u = !0, a == null || a.abort();
      },
      deactivate: () => a.deactivate(),
      reset: () => a.reset(),
      t: () => a.t()
    };
  }
  if (r == null || r.deactivate(), !(t != null && t.duration))
    return i(), {
      abort: ke,
      deactivate: ke,
      reset: ke,
      t: () => n
    };
  const { delay: f = 0, css: o, tick: l, easing: c = Kn } = t;
  var v = [];
  if (s && r === void 0 && (l && l(0, 1), o)) {
    var d = Vt(o(0, 1));
    v.push(d, d);
  }
  var _ = () => 1 - n, p = e.animate(v, { duration: f });
  return p.onfinish = () => {
    var m = (r == null ? void 0 : r.t()) ?? 1 - n;
    r == null || r.abort();
    var h = n - m, y = (
      /** @type {number} */
      t.duration * Math.abs(h)
    ), b = [];
    if (y > 0) {
      if (o)
        for (var C = Math.ceil(y / 16.666666666666668), T = 0; T <= C; T += 1) {
          var S = m + h * c(T / C), O = o(S, 1 - S);
          b.push(Vt(O));
        }
      _ = () => {
        var M = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          p.currentTime
        );
        return m + h * c(M / y);
      }, l && Un(() => {
        if (p.playState !== "running") return !1;
        var M = _();
        return l(M, 1 - M), !0;
      });
    }
    p = e.animate(b, { duration: y, fill: "forwards" }), p.onfinish = () => {
      _ = () => n, l == null || l(n, 1 - n), i();
    };
  }, {
    abort: () => {
      p && (p.cancel(), p.effect = null, p.onfinish = ke);
    },
    deactivate: () => {
      i = ke;
    },
    reset: () => {
      n === 0 && (l == null || l(1, 0));
    },
    t: () => _()
  };
}
function Gn(e, t, r = t) {
  On(e, "input", () => {
    var n = Yt(e) ? Ut(e.value) : e.value;
    r(n), n !== (n = t()) && (e.value = n ?? "");
  }), or(() => {
    var n = t();
    if ($ && e.defaultValue !== e.value) {
      r(e.value);
      return;
    }
    Yt(e) && n === Ut(e.value) || e.type === "date" && !n && !e.value || n !== e.value && (e.value = n ?? "");
  });
}
function Yt(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Ut(e) {
  return e === "" ? null : +e;
}
let qe = !1;
function Jn(e) {
  var t = qe;
  try {
    return qe = !1, [e(), qe];
  } finally {
    qe = t;
  }
}
function Xn(e) {
  for (var t = g, r = g; t !== null && !(t.f & (Z | Se)); )
    t = t.parent;
  try {
    return V(t), e();
  } finally {
    V(r);
  }
}
function N(e, t, r, n) {
  var T;
  var i = (r & Wr) !== 0, s = !er, a = (r & Jr) !== 0, u = (r & Xr) !== 0, f = !1, o;
  a ? [o, f] = Jn(() => (
    /** @type {V} */
    e[t]
  )) : o = /** @type {V} */
  e[t];
  var l = (T = ve(e, t)) == null ? void 0 : T.set, c = (
    /** @type {V} */
    n
  ), v = !0, d = !1, _ = () => (d = !0, v && (v = !1, u ? c = vt(
    /** @type {() => V} */
    n
  ) : c = /** @type {V} */
  n), c);
  o === void 0 && n !== void 0 && (l && s && cn(), o = _(), l && l(o));
  var p;
  if (p = () => {
    var S = (
      /** @type {V} */
      e[t]
    );
    return S === void 0 ? _() : (v = !0, d = !1, S);
  }, !(r & Gr))
    return p;
  if (l) {
    var m = e.$$legacy;
    return function(S, O) {
      return arguments.length > 0 ? ((!O || m || f) && l(O ? p() : S), S) : p();
    };
  }
  var h = !1, y = !1, b = /* @__PURE__ */ Et(o), C = Xn(
    () => /* @__PURE__ */ pn(() => {
      var S = p(), O = w(b);
      return h ? (h = !1, y = !0, O) : (y = !1, b.v = S);
    })
  );
  return i || (C.equals = Qt), function(S, O) {
    if (arguments.length > 0) {
      const M = O ? w(C) : a ? fe(S) : S;
      return C.equals(M) || (h = !0, K(b, M), d && c !== void 0 && (c = M), vt(() => w(C))), S;
    }
    return w(C);
  };
}
function Zn(e) {
  return new Qn(e);
}
var Q, B;
class Qn {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    st(this, Q);
    /** @type {Record<string, any>} */
    st(this, B);
    var s;
    var r = /* @__PURE__ */ new Map(), n = (a, u) => {
      var f = /* @__PURE__ */ Et(u);
      return r.set(a, f), f;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, u) {
          return w(r.get(u) ?? n(u, Reflect.get(a, u)));
        },
        has(a, u) {
          return w(r.get(u) ?? n(u, Reflect.get(a, u))), Reflect.has(a, u);
        },
        set(a, u, f) {
          return K(r.get(u) ?? n(u, f), f), Reflect.set(a, u, f);
        }
      }
    );
    at(this, B, (t.hydrate ? Pn : Rr)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((s = t == null ? void 0 : t.props) != null && s.$$host) || t.sync === !1) && kr(), at(this, Q, i.$$events);
    for (const a of Object.keys(L(this, B)))
      a === "$set" || a === "$destroy" || a === "$on" || Ye(this, a, {
        get() {
          return L(this, B)[a];
        },
        /** @param {any} value */
        set(u) {
          L(this, B)[a] = u;
        },
        enumerable: !0
      });
    L(this, B).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, L(this, B).$destroy = () => {
      Dn(L(this, B));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    L(this, B).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    L(this, Q)[t] = L(this, Q)[t] || [];
    const n = (...i) => r.call(this, ...i);
    return L(this, Q)[t].push(n), () => {
      L(this, Q)[t] = L(this, Q)[t].filter(
        /** @param {any} fn */
        (i) => i !== n
      );
    };
  }
  $destroy() {
    L(this, B).$destroy();
  }
}
Q = new WeakMap(), B = new WeakMap();
let Dr;
typeof HTMLElement == "function" && (Dr = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    Y(this, "$$ctor");
    /** Slots */
    Y(this, "$$s");
    /** @type {any} The Svelte component instance */
    Y(this, "$$c");
    /** Whether or not the custom element is connected */
    Y(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    Y(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    Y(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    Y(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    Y(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    Y(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    Y(this, "$$me");
    this.$$ctor = t, this.$$s = r, n && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, r, n) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(r), this.$$c) {
      const i = this.$$c.$on(t, r);
      this.$$l_u.set(r, i);
    }
    super.addEventListener(t, r, n);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, r, n) {
    if (super.removeEventListener(t, r, n), this.$$c) {
      const i = this.$$l_u.get(r);
      i && (i(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(i) {
        return (s) => {
          const a = document.createElement("slot");
          i !== "default" && (a.name = i), I(s, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = ei(this);
      for (const i of this.$$s)
        i in n && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), r.default = !0) : r[i] = t(i));
      for (const i of this.attributes) {
        const s = this.$$g_p(i.name);
        s in this.$$d || (this.$$d[s] = ze(s, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = Zn({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = ar(() => {
        or(() => {
          var i;
          this.$$r = !0;
          for (const s of Ve(this.$$c)) {
            if (!((i = this.$$p_d[s]) != null && i.reflect)) continue;
            this.$$d[s] = this.$$c[s];
            const a = ze(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            a == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, a);
          }
          this.$$r = !1;
        });
      });
      for (const i in this.$$l)
        for (const s of this.$$l[i]) {
          const a = this.$$c.$on(i, s);
          this.$$l_u.set(s, a);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(t, r, n) {
    var i;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = ze(t, n, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return Ve(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function ze(e, t, r, n) {
  var s;
  const i = (s = r[e]) == null ? void 0 : s.type;
  if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !n || !r[e])
    return t;
  if (n === "toAttribute")
    switch (i) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (i) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function ei(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function rt(e, t, r, n, i, s) {
  let a = class extends Dr {
    constructor() {
      super(e, r, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Ve(t).map(
        (u) => (t[u].attribute || u).toLowerCase()
      );
    }
  };
  return Ve(t).forEach((u) => {
    Ye(a.prototype, u, {
      get() {
        return this.$$c && u in this.$$c ? this.$$c[u] : this.$$d[u];
      },
      set(f) {
        var c;
        f = ze(u, f, t), this.$$d[u] = f;
        var o = this.$$c;
        if (o) {
          var l = (c = ve(o, u)) == null ? void 0 : c.get;
          l ? o[u] = f : o.$set({ [u]: f });
        }
      }
    });
  }), n.forEach((u) => {
    Ye(a.prototype, u, {
      get() {
        var f;
        return (f = this.$$c) == null ? void 0 : f[u];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
var ti = /* @__PURE__ */ P('<button type="button"><!></button>');
const ri = {
  hash: "svelte-1bto172",
  code: ".button.svelte-1bto172 {display:inline-block;cursor:pointer;border:0;margin-left:14px;border-radius:3em;font-weight:700;line-height:1;font-family:'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;}.button--primary.svelte-1bto172 {background-color:#1ea7fd;color:white;}.button--secondary.svelte-1bto172 {box-shadow:rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;background-color:transparent;color:#333;}.button--small.svelte-1bto172 {padding:10px 16px;font-size:12px;}.button--medium.svelte-1bto172 {padding:11px 20px;font-size:14px;}.button--large.svelte-1bto172 {padding:12px 24px;font-size:16px;}"
};
function ni(e, t) {
  tt(e, ri);
  const r = N(t, "type", 3, "primary"), n = N(t, "size", 3, "medium");
  N(t, "label", 3, "Button");
  const i = N(t, "onClick", 3, void 0);
  var s = ti();
  s.__click = function(...u) {
    var f;
    (f = i()) == null || f.apply(this, u);
  };
  var a = A(s);
  Lr(a, t, "default", {}), E(s), ee(() => Be(s, `${"button button--" + n() + " button--" + r()} svelte-1bto172`)), I(e, s);
}
St(["click"]);
customElements.define("mapp-button", rt(ni, { type: {}, size: {}, label: {}, onClick: {} }, ["default"], [], !0));
var ii = /* @__PURE__ */ P('<div class="input_label svelte-1hyy719"> </div>'), si = /* @__PURE__ */ P('<span class="input_icon svelte-1hyy719"><img width="16px" alt="in"></span>'), ai = (e, t) => {
  t(e);
}, li = /* @__PURE__ */ P('<div class="input_frame svelte-1hyy719"><!> <div class="input_box svelte-1hyy719"><!> <input class="input_field svelte-1hyy719"></div></div>');
const oi = {
  hash: "svelte-1hyy719",
  code: `.input_frame.svelte-1hyy719 {padding-right:24px;margin-bottom:14px;}.input_label.svelte-1hyy719 {margin-bottom:6px;}.input_box.svelte-1hyy719 {display:flex;color:#4a5073;background-color:#fff;border:0.0625rem solid #d1d7e0;border-radius:0.5rem;
    /* padding-right: 14px; */}.input_icon.svelte-1hyy719 {width:32px;position:relative;top:12px;left:9px;}.input_field.svelte-1hyy719 {box-shadow:none;width:280px;border:0.0625rem solid #d1d7e0;color:#66799e;background-color:transparent;background-clip:padding-box;appearance:none;border:transparent;height:40px;font-size:16px;border-style:none;border-radius:0.5rem;margin-left:4px;margin-right:8px;width:98%;}.input_field.svelte-1hyy719:focus {outline:none;}`
};
function Fr(e, t) {
  Nt(t, !0), tt(e, oi);
  let r = N(t, "label", 3, ""), n = N(t, "icon", 3, ""), i = N(t, "type", 3, "text"), s = N(t, "placeholder", 3, ""), a = N(t, "input", 15, ""), u = N(t, "style", 3, "");
  const f = (_) => {
    _ && _.target && _.target.value && t.$$host && t.$$host.dispatchEvent(new CustomEvent("update", { detail: { input: _.target.value } }));
  };
  var o = li(), l = A(o);
  _e(l, r, (_) => {
    var p = ii(), m = A(p, !0);
    E(p), ee(() => Ge(m, r())), I(_, p);
  });
  var c = z(l, 2), v = A(c);
  _e(v, n, (_) => {
    var p = si(), m = A(p);
    E(p), ee(() => W(m, "src", n())), I(_, p);
  });
  var d = z(v, 2);
  Bn(d), d.__input = [ai, f], E(c), E(o), ee(() => {
    W(o, "style", u()), W(d, "type", i()), W(d, "placeholder", s());
  }), Gn(d, a), I(e, o), Ct();
}
St(["input"]);
customElements.define("apint-input", rt(
  Fr,
  {
    label: {},
    icon: {},
    type: {},
    placeholder: {},
    input: {},
    style: {}
  },
  [],
  [],
  !0
));
var ui = /* @__PURE__ */ P('<span class="user_button svelte-gns4bd"><img class="msg_icon svelte-gns4bd" alt="alerts" src="bell.svg"> <span class="msg_new svelte-gns4bd"></span> <img class="user_icon svelte-gns4bd" alt="profile"> <span class="user_name svelte-gns4bd"> </span></span>'), fi = /* @__PURE__ */ P("<span>logged out</span>"), ci = /* @__PURE__ */ P('<div class="header svelte-gns4bd"><div style="width: 364px;"><!> <span></span></div> <div><!></div></div>');
const vi = {
  hash: "svelte-gns4bd",
  code: ".header.svelte-gns4bd {display:flex;justify-content:space-between;align-items:center;padding:26px 20px;font-family:'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;}.msg_icon.svelte-gns4bd {width:20px;margin-right:22px;}.msg_new.svelte-gns4bd {background-color:red;height:7px;width:7px;border-radius:50% !important;position:relative;top:4px;left:-22px;}.user_button.svelte-gns4bd {display:flex;position:relative;top:-6px;}.user_button.svelte-gns4bd:hover {cursor:pointer;}.user_name.svelte-gns4bd {padding-top:12px;padding-left:8px;}.user_icon.svelte-gns4bd {border-radius:50% !important;width:40px;}"
};
function qr(e, t) {
  tt(e, vi), N(t, "title", 3, "Apint.org");
  const r = N(t, "supportuser", 3, !1), n = N(t, "username", 3, ""), i = N(t, "userpic", 3, "");
  let s = "";
  var a = ci(), u = A(a), f = A(u);
  Fr(f, {
    icon: "search.svg",
    placeholder: "Search",
    input: s
  });
  var o = z(f, 2);
  o.textContent = s, E(u);
  var l = z(u, 2), c = A(l);
  _e(
    c,
    r,
    (v) => {
      var d = ui(), _ = z(A(d), 4), p = z(_, 2), m = A(p, !0);
      E(p), E(d), ee(() => {
        W(_, "src", i()), Ge(m, n());
      }), I(v, d);
    },
    (v) => {
      var d = In(), _ = Nr(d);
      _e(
        _,
        r,
        (p) => {
          var m = fi();
          I(p, m);
        },
        null,
        !0
      ), I(v, d);
    }
  ), E(l), E(a), I(e, a);
}
customElements.define("mapp-headerlite", rt(
  qr,
  {
    title: {},
    supportuser: {},
    username: {},
    userpic: {}
  },
  [],
  [],
  !0
));
function di(e) {
  const t = e - 1;
  return t * t * t + 1;
}
function _i(e, { delay: t = 0, duration: r = 400, easing: n = di, axis: i = "y" } = {}) {
  const s = getComputedStyle(e), a = +s.opacity, u = i === "y" ? "height" : "width", f = parseFloat(s[u]), o = i === "y" ? ["top", "bottom"] : ["left", "right"], l = o.map(
    (h) => (
      /** @type {'Left' | 'Right' | 'Top' | 'Bottom'} */
      `${h[0].toUpperCase()}${h.slice(1)}`
    )
  ), c = parseFloat(s[`padding${l[0]}`]), v = parseFloat(s[`padding${l[1]}`]), d = parseFloat(s[`margin${l[0]}`]), _ = parseFloat(s[`margin${l[1]}`]), p = parseFloat(
    s[`border${l[0]}Width`]
  ), m = parseFloat(
    s[`border${l[1]}Width`]
  );
  return {
    delay: t,
    duration: r,
    easing: n,
    css: (h) => `overflow: hidden;opacity: ${Math.min(h * 20, 1) * a};${u}: ${h * f}px;padding-${o[0]}: ${h * c}px;padding-${o[1]}: ${h * v}px;margin-${o[0]}: ${h * d}px;margin-${o[1]}: ${h * _}px;border-${o[0]}-width: ${h * p}px;border-${o[1]}-width: ${h * m}px;`
  };
}
function hi(e) {
  return e;
}
var pi = (e, t, r) => t(w(r).title), mi = /* @__PURE__ */ P('<img alt="option" width="18px">'), gi = /* @__PURE__ */ P('<svg width="18px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-pie" class="svg-inline--fa fa-chart-pie fa-w-17 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512"><path fill="currentColor" d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"></path></svg>'), yi = /* @__PURE__ */ P('<span><svg class="icon icon-sm" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span>'), $i = (e, t, r) => t(w(r).title), bi = /* @__PURE__ */ P('<a><span><span class="menu_item_icon svelte-v1mgvt"></span> <span class="menu_item_text"> </span></span></a>'), wi = /* @__PURE__ */ P('<div class="menu_item_frame svelte-v1mgvt"></div>'), xi = /* @__PURE__ */ P('<a><span><span class="menu_item_icon svelte-v1mgvt"><!></span> <span class="menu_item_text"> </span> <!></span></a> <!>', 1), Ei = /* @__PURE__ */ P('<div class="outer_frame svelte-v1mgvt"><div class="left_menu svelte-v1mgvt"><div class="menu_frame svelte-v1mgvt"></div></div> <div class="right_panel svelte-v1mgvt"><!> <div class="right_panel_content svelte-v1mgvt"><!></div></div></div>');
const ki = {
  hash: "svelte-v1mgvt",
  code: `a.svelte-v1mgvt:link {text-decoration:none;}a.svelte-v1mgvt:visited {text-decoration:none;color:#eaedf2;}a.svelte-v1mgvt:hover {text-decoration:none;color:#eaedf2;}a.svelte-v1mgvt:active {text-decoration:none;}.outer_frame.svelte-v1mgvt {position:fixed;left:0px;top:0px;display:flex;height:100vh;width:100vw;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}.left_menu.svelte-v1mgvt {display:flex;flex-flow:row nowrap;width:260px !important;min-width:260px;height:100%;background-color:#262b40 !important;color:#eaedf2;}.menu_frame.svelte-v1mgvt {margin:20px 30px 20px 30px;width:100%;}.menu_item.svelte-v1mgvt {display:block;width:100%;text-align:left;padding:10px 0px;color:#eaedf2;border-radius:.5rem;margin-bottom:8px;border:.0625rem solid transparent;}.menu_item.svelte-v1mgvt:hover {background-color:#2e3650;}.menu_item_active.svelte-v1mgvt {background-color:#2e3650;border:.0625rem solid #4c5680;}.menu_item_icon.svelte-v1mgvt {display:inline-block;margin-left:12px;margin-right:.5rem;color:#fff;position:relative;top:3px;width:18px;}.menu_item_expand.svelte-v1mgvt {float:right;width:22px;}.expanded.svelte-v1mgvt {position:relative;
    /* left: -4px; */
    /* top: -2px; */transform:rotate(90deg) translateX(-2px) translateY(4px);transition:all 0.2s ease;}.menu_item_frame.svelte-v1mgvt {width:100%;}.right_panel.svelte-v1mgvt {color:#4a5073;background-color:#f5f8fb;flex:auto;height:100%;overflow-y:auto;}.right_panel_content.svelte-v1mgvt {padding:0px 20px;}`
};
function Ti(e, t) {
  Nt(t, !0), tt(e, ki), N(t, "title", 3, "Apint.org"), N(t, "icon", 3, "");
  let r = N(t, "supportuser", 3, !0), n = N(t, "username", 3, ""), i = N(t, "userpic", 3, ""), s = N(t, "activeitem", 3, ""), a = N(t, "menuconfig", 7, void 0);
  typeof a() == "string" && a(JSON.parse(a()));
  let u = fe({}), f = (m) => {
    u[m] ? u[m] = !u[m] : u[m] = !0;
  };
  var o = Ei(), l = A(o), c = A(l);
  Ht(c, 21, () => a().items, qt, (m, h) => {
    var y = xi(), b = Nr(y);
    b.__click = [pi, f, h];
    var C = A(b), T = A(C), S = A(T);
    _e(
      S,
      () => w(h).icon,
      (ue) => {
        var H = mi();
        ee(() => W(H, "src", w(h).icon)), I(ue, H);
      },
      (ue) => {
        var H = gi();
        I(ue, H);
      }
    ), E(T);
    var O = z(T, 2), M = A(O, !0);
    E(O);
    var nt = z(O, 2);
    _e(nt, () => w(h).subitems, (ue) => {
      var H = yi();
      ee(() => Be(H, `${(u[w(h).title] ? "menu_item_expand expanded" : "menu_item_expand") ?? ""} svelte-v1mgvt`)), I(ue, H);
    }), E(C), E(b);
    var it = z(b, 2);
    _e(it, () => u[w(h).title] && w(h).subitems, (ue) => {
      var H = wi();
      Ht(H, 21, () => w(h).subitems, qt, (Hr, Pe) => {
        var me = bi();
        me.__click = [$i, f, Pe];
        var Ot = A(me), Rt = z(A(Ot), 2), Br = A(Rt, !0);
        E(Rt), E(Ot), E(me), ee(() => {
          W(me, "href", w(Pe).url), Be(me, `${(w(Pe).title == s() ? "menu_item menu_item_active" : "menu_item") ?? ""} svelte-v1mgvt`), Ge(Br, w(Pe).title);
        }), I(Hr, me);
      }), E(H), Wn(3, H, () => _i, () => ({ duration: 300, easing: hi })), I(ue, H);
    }), ee(() => {
      W(b, "href", w(h).url), Be(b, `${(w(h).title == s() ? "menu_item menu_item_active" : "menu_item") ?? ""} svelte-v1mgvt`), Ge(M, w(h).title);
    }), I(m, y);
  }), E(c), E(l);
  var v = z(l, 2), d = A(v);
  qr(d, {
    get supportuser() {
      return r();
    },
    get username() {
      return n();
    },
    get userpic() {
      return i();
    }
  });
  var _ = z(d, 2), p = A(_);
  Lr(p, t, "default", {}), E(_), E(v), E(o), I(e, o), Ct();
}
St(["click"]);
customElements.define("mapp-menu", rt(
  Ti,
  {
    title: {},
    icon: {},
    supportuser: {},
    username: {},
    userpic: {},
    activeitem: {},
    menuconfig: {}
  },
  ["default"],
  [],
  !0
));
export {
  ni as MappButton,
  qr as MappHeaderLite,
  Ti as MappMenu
};
