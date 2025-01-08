var Vr = Object.defineProperty;
var Rt = (e) => {
  throw TypeError(e);
};
var Ur = (e, t, r) => t in e ? Vr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var U = (e, t, r) => Ur(e, typeof t != "symbol" ? t + "" : t, r), Mt = (e, t, r) => t.has(e) || Rt("Cannot " + r);
var L = (e, t, r) => (Mt(e, t, "read from private field"), r ? r.call(e) : t.get(e)), st = (e, t, r) => t.has(e) ? Rt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), at = (e, t, r, n) => (Mt(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r);
const Yr = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Yr);
const jr = 1, Kr = 2, Wr = 16, Gr = 1, Jr = 4, Xr = 8, Zr = 16, Qr = 1, en = 2, tn = 4, rn = 1, nn = 2, Kt = "[", yt = "[!", $t = "]", Te = {}, D = Symbol(), Wt = !1;
function bt(e) {
  console.warn("hydration_mismatch");
}
var wt = Array.isArray, xt = Array.from, Ve = Object.keys, Ue = Object.defineProperty, ve = Object.getOwnPropertyDescriptor, sn = Object.getOwnPropertyDescriptors, an = Object.prototype, ln = Array.prototype, ot = Object.getPrototypeOf;
function on(e) {
  return typeof e == "function";
}
const ke = () => {
};
function Gt(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const ae = 2, Jt = 4, Je = 8, Xe = 16, Z = 32, Se = 64, Ee = 128, Ye = 256, q = 512, le = 1024, Oe = 2048, G = 4096, Ie = 8192, Xt = 16384, Ze = 32768, un = 1 << 18, Zt = 1 << 19, lt = Symbol("$state"), fn = Symbol("");
function Qt(e) {
  return e === this.v;
}
function cn(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function er(e) {
  return !cn(e, this.v);
}
function vn() {
  throw new Error("effect_update_depth_exceeded");
}
function dn() {
  throw new Error("hydration_failed");
}
function _n(e) {
  throw new Error("props_invalid_value");
}
function hn() {
  throw new Error("state_descriptors_fixed");
}
function pn() {
  throw new Error("state_prototype_fixed");
}
function mn() {
  throw new Error("state_unsafe_local_read");
}
function gn() {
  throw new Error("state_unsafe_mutation");
}
let tr = !1;
function Y(e) {
  return {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Qt,
    version: 0
  };
}
// @__NO_SIDE_EFFECTS__
function Et(e, t = !1) {
  const r = Y(e);
  return t || (r.equals = er), r;
}
function K(e, t) {
  return k !== null && Nn() && k.f & (ae | Xe) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (de === null || !de.includes(e)) && gn(), rr(e, t);
}
function rr(e, t) {
  return e.equals(t) || (e.v = t, e.version = br(), nr(e, le), y !== null && y.f & q && !(y.f & Z) && (I !== null && I.includes(e) ? (re(y, le), et(y)) : se === null ? Tn([e]) : se.push(e))), t;
}
function nr(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = r.length, i = 0; i < n; i++) {
      var s = r[i], a = s.f;
      a & le || (re(s, t), a & (q | Ee) && (a & ae ? nr(
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
function yn(e) {
  var t = ae | le;
  y === null ? t |= Ee : y.f |= Zt;
  const r = {
    children: null,
    ctx: J,
    deps: null,
    equals: Qt,
    f: t,
    fn: e,
    reactions: null,
    v: (
      /** @type {V} */
      null
    ),
    version: 0,
    parent: y
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
function ir(e) {
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
function sr(e) {
  var t, r = y;
  V(e.parent);
  try {
    ir(e), t = wr(e);
  } finally {
    V(r);
  }
  return t;
}
function ar(e) {
  var t = sr(e), r = (ye || e.f & Ee) && e.deps !== null ? Oe : q;
  re(e, r), e.equals(t) || (e.v = t, e.version = br());
}
function kt(e) {
  ir(e), Ce(e, 0), re(e, Ie), e.v = e.children = e.deps = e.ctx = e.reactions = null;
}
function $n(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Re(e, t, r, n = !0) {
  var i = (e & Se) !== 0, s = y, a = {
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
    var o = $e;
    try {
      Lt(!0), Qe(a), a.f |= Xt;
    } catch (l) {
      throw pe(a), l;
    } finally {
      Lt(o);
    }
  } else t !== null && et(a);
  var v = r && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & Zt) === 0;
  if (!v && !i && n && (s !== null && $n(a, s), k !== null && k.f & ae)) {
    var u = (
      /** @type {Derived} */
      k
    );
    (u.children ?? (u.children = [])).push(a);
  }
  return a;
}
function lr(e) {
  const t = Re(Se, e, !0);
  return () => {
    pe(t);
  };
}
function or(e) {
  return Re(Jt, e, !1);
}
function ur(e) {
  return Re(Je, e, !0);
}
function ee(e) {
  return Tt(e);
}
function Tt(e, t = 0) {
  return Re(Je | Xe | t, e, !0);
}
function Ne(e, t = !0) {
  return Re(Je | Z, e, !0, t);
}
function fr(e) {
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
function cr(e) {
  var t = e.deriveds;
  if (t !== null) {
    e.deriveds = null;
    for (var r = 0; r < t.length; r += 1)
      kt(t[r]);
  }
}
function vr(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var n = r.next;
    pe(r, t), r = n;
  }
}
function bn(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    t.f & Z || pe(t), t = r;
  }
}
function pe(e, t = !0) {
  var r = !1;
  if ((t || e.f & un) && e.nodes_start !== null) {
    for (var n = e.nodes_start, i = e.nodes_end; n !== null; ) {
      var s = n === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ oe(n)
      );
      n.remove(), n = s;
    }
    r = !0;
  }
  vr(e, t && !r), cr(e), Ce(e, 0), re(e, Ie);
  var a = e.transitions;
  if (a !== null)
    for (const v of a)
      v.stop();
  fr(e);
  var o = e.parent;
  o !== null && o.first !== null && dr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.parent = e.fn = e.nodes_start = e.nodes_end = null;
}
function dr(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function ut(e, t) {
  var r = [];
  Nt(e, r, !0), _r(r, () => {
    pe(e), t && t();
  });
}
function _r(e, t) {
  var r = e.length;
  if (r > 0) {
    var n = () => --r || t();
    for (var i of e)
      i.out(n);
  } else
    t();
}
function Nt(e, t, r) {
  if (!(e.f & G)) {
    if (e.f ^= G, e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || r) && t.push(a);
    for (var n = e.first; n !== null; ) {
      var i = n.next, s = (n.f & Ze) !== 0 || (n.f & Z) !== 0;
      Nt(n, t, s ? r : !1), n = i;
    }
  }
}
function je(e) {
  hr(e, !0);
}
function hr(e, t) {
  if (e.f & G) {
    Me(e) && Qe(e), e.f ^= G;
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & Ze) !== 0 || (r.f & Z) !== 0;
      hr(r, i ? t : !1), r = n;
    }
    if (e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || t) && s.in();
  }
}
const wn = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Ke = !1, We = !1, ft = [], ct = [];
function pr() {
  Ke = !1;
  const e = ft.slice();
  ft = [], Gt(e);
}
function mr() {
  We = !1;
  const e = ct.slice();
  ct = [], Gt(e);
}
function gr(e) {
  Ke || (Ke = !0, queueMicrotask(pr)), ft.push(e);
}
function xn(e) {
  We || (We = !0, wn(mr)), ct.push(e);
}
function En() {
  Ke && pr(), We && mr();
}
const yr = 0, kn = 1;
let He = yr, Ae = !1, $e = !1;
function Lt(e) {
  $e = e;
}
let ce = [], be = 0;
let k = null;
function X(e) {
  k = e;
}
let y = null;
function V(e) {
  y = e;
}
let de = null, I = null, F = 0, se = null;
function Tn(e) {
  se = e;
}
let $r = 0, ye = !1, J = null;
function br() {
  return ++$r;
}
function Nn() {
  return !tr;
}
function Me(e) {
  var a, o;
  var t = e.f;
  if (t & le)
    return !0;
  if (t & Oe) {
    var r = e.deps, n = (t & Ee) !== 0;
    if (r !== null) {
      var i;
      if (t & Ye) {
        for (i = 0; i < r.length; i++)
          ((a = r[i]).reactions ?? (a.reactions = [])).push(e);
        e.f ^= Ye;
      }
      for (i = 0; i < r.length; i++) {
        var s = r[i];
        if (Me(
          /** @type {Derived} */
          s
        ) && ar(
          /** @type {Derived} */
          s
        ), n && y !== null && !ye && !((o = s == null ? void 0 : s.reactions) != null && o.includes(e)) && (s.reactions ?? (s.reactions = [])).push(e), s.version > e.version)
          return !0;
      }
    }
    n || re(e, q);
  }
  return !1;
}
function An(e, t, r) {
  throw e;
}
function wr(e) {
  var c;
  var t = I, r = F, n = se, i = k, s = ye, a = de, o = J, v = e.f;
  I = /** @type {null | Value[]} */
  null, F = 0, se = null, k = v & (Z | Se) ? null : e, ye = !$e && (v & Ee) !== 0, de = null, J = e.ctx;
  try {
    var u = (
      /** @type {Function} */
      (0, e.fn)()
    ), l = e.deps;
    if (I !== null) {
      var f;
      if (Ce(e, F), l !== null && F > 0)
        for (l.length = F + I.length, f = 0; f < I.length; f++)
          l[F + f] = I[f];
      else
        e.deps = l = I;
      if (!ye)
        for (f = F; f < l.length; f++)
          ((c = l[f]).reactions ?? (c.reactions = [])).push(e);
    } else l !== null && F < l.length && (Ce(e, F), l.length = F);
    return u;
  } finally {
    I = t, F = r, se = n, k = i, ye = s, de = a, J = o;
  }
}
function Cn(e, t) {
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
  (I === null || !I.includes(t)) && (re(t, Oe), t.f & (Ee | Ye) || (t.f ^= Ye), Ce(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Ce(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Cn(e, r[n]);
}
function Qe(e) {
  var t = e.f;
  if (!(t & Ie)) {
    re(e, q);
    var r = y;
    y = e;
    try {
      t & Xe ? bn(e) : vr(e), cr(e), fr(e);
      var n = wr(e);
      e.teardown = typeof n == "function" ? n : null, e.version = $r;
    } catch (i) {
      An(
        /** @type {Error} */
        i
      );
    } finally {
      y = r;
    }
  }
}
function xr() {
  be > 1e3 && (be = 0, vn()), be++;
}
function Er(e) {
  var t = e.length;
  if (t !== 0) {
    xr();
    var r = $e;
    $e = !0;
    try {
      for (var n = 0; n < t; n++) {
        var i = e[n];
        i.f & q || (i.f ^= q);
        var s = [];
        kr(i, s), Sn(s);
      }
    } finally {
      $e = r;
    }
  }
}
function Sn(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var n = e[r];
      !(n.f & (Ie | G)) && Me(n) && (Qe(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? dr(n) : n.fn = null));
    }
}
function On() {
  if (Ae = !1, be > 1001)
    return;
  const e = ce;
  ce = [], Er(e), Ae || (be = 0);
}
function et(e) {
  He === yr && (Ae || (Ae = !0, queueMicrotask(On)));
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
function kr(e, t) {
  var r = e.first, n = [];
  e: for (; r !== null; ) {
    var i = r.f, s = (i & Z) !== 0, a = s && (i & q) !== 0;
    if (!a && !(i & G))
      if (i & Je) {
        s ? r.f ^= q : Me(r) && Qe(r);
        var o = r.first;
        if (o !== null) {
          r = o;
          continue;
        }
      } else i & Jt && n.push(r);
    var v = r.next;
    if (v === null) {
      let f = r.parent;
      for (; f !== null; ) {
        if (e === f)
          break e;
        var u = f.next;
        if (u !== null) {
          r = u;
          continue e;
        }
        f = f.parent;
      }
    }
    r = v;
  }
  for (var l = 0; l < n.length; l++)
    o = n[l], t.push(o), kr(o, t);
}
function Tr(e) {
  var t = He, r = ce;
  try {
    xr();
    const i = [];
    He = kn, ce = i, Ae = !1, Er(r);
    var n = e == null ? void 0 : e();
    return En(), (ce.length > 0 || i.length > 0) && Tr(), be = 0, n;
  } finally {
    He = t, ce = r;
  }
}
function w(e) {
  var o;
  var t = e.f, r = (t & ae) !== 0;
  if (r && t & Ie) {
    var n = sr(
      /** @type {Derived} */
      e
    );
    return kt(
      /** @type {Derived} */
      e
    ), n;
  }
  if (k !== null) {
    de !== null && de.includes(e) && mn();
    var i = k.deps;
    I === null && i !== null && i[F] === e ? F++ : I === null ? I = [e] : I.push(e), se !== null && y !== null && y.f & q && !(y.f & Z) && se.includes(e) && (re(y, le), et(y));
  } else if (r && /** @type {Derived} */
  e.deps === null) {
    var s = (
      /** @type {Derived} */
      e
    ), a = s.parent;
    a !== null && !((o = a.deriveds) != null && o.includes(s)) && (a.deriveds ?? (a.deriveds = [])).push(s);
  }
  return r && (s = /** @type {Derived} */
  e, Me(s) && ar(s)), e.v;
}
function vt(e) {
  const t = k;
  try {
    return k = null, e();
  } finally {
    k = t;
  }
}
const In = ~(le | Oe | q);
function re(e, t) {
  e.f = e.f & In | t;
}
function At(e, t = !1, r) {
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
      var r = y, n = k;
      t.e = null;
      try {
        for (var i = 0; i < a.length; i++) {
          var s = a[i];
          V(s.effect), X(s.reaction), or(s.fn);
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
  if (n !== an && n !== ln)
    return e;
  var i = /* @__PURE__ */ new Map(), s = wt(e), a = Y(0);
  s && i.set("length", Y(
    /** @type {any[]} */
    e.length
  ));
  var o;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(v, u, l) {
        (!("value" in l) || l.configurable === !1 || l.enumerable === !1 || l.writable === !1) && hn();
        var f = i.get(u);
        return f === void 0 ? (f = Y(l.value), i.set(u, f)) : K(f, fe(l.value, o)), !0;
      },
      deleteProperty(v, u) {
        var l = i.get(u);
        if (l === void 0)
          u in v && i.set(u, Y(D));
        else {
          if (s && typeof u == "string") {
            var f = (
              /** @type {Source<number>} */
              i.get("length")
            ), c = Number(u);
            Number.isInteger(c) && c < f.v && K(f, c);
          }
          K(l, D), Pt(a);
        }
        return !0;
      },
      get(v, u, l) {
        var h;
        if (u === lt)
          return e;
        var f = i.get(u), c = u in v;
        if (f === void 0 && (!c || (h = ve(v, u)) != null && h.writable) && (f = Y(fe(c ? v[u] : D, o)), i.set(u, f)), f !== void 0) {
          var d = w(f);
          return d === D ? void 0 : d;
        }
        return Reflect.get(v, u, l);
      },
      getOwnPropertyDescriptor(v, u) {
        var l = Reflect.getOwnPropertyDescriptor(v, u);
        if (l && "value" in l) {
          var f = i.get(u);
          f && (l.value = w(f));
        } else if (l === void 0) {
          var c = i.get(u), d = c == null ? void 0 : c.v;
          if (c !== void 0 && d !== D)
            return {
              enumerable: !0,
              configurable: !0,
              value: d,
              writable: !0
            };
        }
        return l;
      },
      has(v, u) {
        var d;
        if (u === lt)
          return !0;
        var l = i.get(u), f = l !== void 0 && l.v !== D || Reflect.has(v, u);
        if (l !== void 0 || y !== null && (!f || (d = ve(v, u)) != null && d.writable)) {
          l === void 0 && (l = Y(f ? fe(v[u], o) : D), i.set(u, l));
          var c = w(l);
          if (c === D)
            return !1;
        }
        return f;
      },
      set(v, u, l, f) {
        var $;
        var c = i.get(u), d = u in v;
        if (s && u === "length")
          for (var h = l; h < /** @type {Source<number>} */
          c.v; h += 1) {
            var p = i.get(h + "");
            p !== void 0 ? K(p, D) : h in v && (p = Y(D), i.set(h + "", p));
          }
        c === void 0 ? (!d || ($ = ve(v, u)) != null && $.writable) && (c = Y(void 0), K(c, fe(l, o)), i.set(u, c)) : (d = c.v !== D, K(c, fe(l, o)));
        var m = Reflect.getOwnPropertyDescriptor(v, u);
        if (m != null && m.set && m.set.call(f, l), !d) {
          if (s && typeof u == "string") {
            var _ = (
              /** @type {Source<number>} */
              i.get("length")
            ), g = Number(u);
            Number.isInteger(g) && g >= _.v && K(_, g + 1);
          }
          Pt(a);
        }
        return !0;
      },
      ownKeys(v) {
        w(a);
        var u = Reflect.ownKeys(v).filter((c) => {
          var d = i.get(c);
          return d === void 0 || d.v !== D;
        });
        for (var [l, f] of i)
          f.v !== D && !(l in v) && u.push(l);
        return u;
      },
      setPrototypeOf() {
        pn();
      }
    }
  );
}
function Pt(e, t = 1) {
  K(e, e.v + t);
}
var Dt, Nr, Ar;
function dt() {
  if (Dt === void 0) {
    Dt = window;
    var e = Element.prototype, t = Node.prototype;
    Nr = ve(t, "firstChild").get, Ar = ve(t, "nextSibling").get, e.__click = void 0, e.__className = "", e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function xe(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function he(e) {
  return Nr.call(e);
}
// @__NO_SIDE_EFFECTS__
function oe(e) {
  return Ar.call(e);
}
function N(e, t) {
  if (!b)
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
function Cr(e, t) {
  if (!b) {
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
  let n = b ? x : e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ oe(n);
  if (!b)
    return n;
  var i = n.nodeType;
  if (r && i !== 3) {
    var s = xe();
    return n == null || n.before(s), j(s), s;
  }
  return j(n), /** @type {TemplateNode} */
  n;
}
function Sr(e) {
  e.textContent = "";
}
let b = !1;
function te(e) {
  b = e;
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
  if (b) {
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
      } else (r === Kt || r === yt) && (e += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ oe(t)
    );
    t.remove(), t = n;
  }
}
let Ft = !1;
function Or() {
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
function Rn(e) {
  var t = k, r = y;
  X(null), V(null);
  try {
    return e();
  } finally {
    X(t), V(r);
  }
}
function Mn(e, t, r, n = r) {
  e.addEventListener(t, () => Rn(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), n();
  } : e.__on_r = n, Or();
}
const Ir = /* @__PURE__ */ new Set(), ht = /* @__PURE__ */ new Set();
function St(e) {
  for (var t = 0; t < e.length; t++)
    Ir.add(e[t]);
  for (var r of ht)
    r(e);
}
function De(e) {
  var g;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = ((g = e.composedPath) == null ? void 0 : g.call(e)) || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  ), a = 0, o = e.__root;
  if (o) {
    var v = i.indexOf(o);
    if (v !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    v <= u && (a = v);
  }
  if (s = /** @type {Element} */
  i[a] || e.target, s !== t) {
    Ue(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var l = k, f = y;
    X(null), V(null);
    try {
      for (var c, d = []; s !== null; ) {
        var h = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var p = s["__" + n];
          if (p !== void 0 && !/** @type {any} */
          s.disabled)
            if (wt(p)) {
              var [m, ..._] = p;
              m.apply(s, [e, ..._]);
            } else
              p.call(s, e);
        } catch ($) {
          c ? d.push($) : c = $;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        s = h;
      }
      if (c) {
        for (let $ of d)
          queueMicrotask(() => {
            throw $;
          });
        throw c;
      }
    } finally {
      e.__root = t, delete e.currentTarget, X(l), V(f);
    }
  }
}
function Ln(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function we(e, t) {
  var r = (
    /** @type {Effect} */
    y
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function P(e, t) {
  var r = (t & rn) !== 0, n = (t & nn) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    if (b)
      return we(x, null), x;
    i === void 0 && (i = Ln(s ? e : "<!>" + e), r || (i = /** @type {Node} */
    /* @__PURE__ */ he(i)));
    var a = (
      /** @type {TemplateNode} */
      n ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ he(a)
      ), v = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      we(o, v);
    } else
      we(a, a);
    return a;
  };
}
function Pn() {
  if (b)
    return we(x, null), x;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = xe();
  return e.append(t, r), we(t, r), e;
}
function R(e, t) {
  if (b) {
    y.nodes_end = x, Le();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Dn = ["touchstart", "touchmove"];
function Fn(e) {
  return Dn.includes(e);
}
let pt = !0;
function Ge(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r == null ? "" : r + "");
}
function Rr(e, t) {
  return Mr(e, t);
}
function qn(e, t) {
  dt(), t.intro = t.intro ?? !1;
  const r = t.target, n = b, i = x;
  try {
    for (var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ he(r)
    ); s && (s.nodeType !== 8 || /** @type {Comment} */
    s.data !== Kt); )
      s = /** @type {TemplateNode} */
      /* @__PURE__ */ oe(s);
    if (!s)
      throw Te;
    te(!0), j(
      /** @type {Comment} */
      s
    ), Le();
    const a = Mr(e, { ...t, anchor: s });
    if (x === null || x.nodeType !== 8 || /** @type {Comment} */
    x.data !== $t)
      throw bt(), Te;
    return te(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === Te)
      return t.recover === !1 && dn(), dt(), Sr(r), te(!1), Rr(e, t);
    throw a;
  } finally {
    te(n), j(i);
  }
}
const ge = /* @__PURE__ */ new Map();
function Mr(e, { target: t, anchor: r, props: n = {}, events: i, context: s, intro: a = !0 }) {
  dt();
  var o = /* @__PURE__ */ new Set(), v = (f) => {
    for (var c = 0; c < f.length; c++) {
      var d = f[c];
      if (!o.has(d)) {
        o.add(d);
        var h = Fn(d);
        t.addEventListener(d, De, { passive: h });
        var p = ge.get(d);
        p === void 0 ? (document.addEventListener(d, De, { passive: h }), ge.set(d, 1)) : ge.set(d, p + 1);
      }
    }
  };
  v(xt(Ir)), ht.add(v);
  var u = void 0, l = lr(() => {
    var f = r ?? t.appendChild(xe());
    return Ne(() => {
      if (s) {
        At({});
        var c = (
          /** @type {ComponentContext} */
          J
        );
        c.c = s;
      }
      i && (n.$$events = i), b && we(
        /** @type {TemplateNode} */
        f,
        null
      ), pt = a, u = e(f, n) || {}, pt = !0, b && (y.nodes_end = x), s && Ct();
    }), () => {
      var h;
      for (var c of o) {
        t.removeEventListener(c, De);
        var d = (
          /** @type {number} */
          ge.get(c)
        );
        --d === 0 ? (document.removeEventListener(c, De), ge.delete(c)) : ge.set(c, d);
      }
      ht.delete(v), mt.delete(u), f !== r && ((h = f.parentNode) == null || h.removeChild(f));
    };
  });
  return mt.set(u, l), u;
}
let mt = /* @__PURE__ */ new WeakMap();
function Hn(e) {
  const t = mt.get(e);
  t && t();
}
function _e(e, t, r, n = null, i = !1) {
  b && Le();
  var s = e, a = null, o = null, v = null, u = i ? Ze : 0;
  Tt(() => {
    if (v === (v = !!t())) return;
    let l = !1;
    if (b) {
      const f = (
        /** @type {Comment} */
        s.data === yt
      );
      v === f && (s = _t(), j(s), te(!1), l = !0);
    }
    v ? (a ? je(a) : a = Ne(() => r(s)), o && ut(o, () => {
      o = null;
    })) : (o ? je(o) : n && (o = Ne(() => n(s))), a && ut(a, () => {
      a = null;
    })), l && te(!0);
  }, u), b && (s = x);
}
function qt(e, t) {
  return t;
}
function Bn(e, t, r, n) {
  for (var i = [], s = t.length, a = 0; a < s; a++)
    Nt(t[a].e, i, !0);
  var o = s > 0 && i.length === 0 && r !== null;
  if (o) {
    var v = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    Sr(v), v.append(
      /** @type {Element} */
      r
    ), n.clear(), ne(e, t[0].prev, t[s - 1].next);
  }
  _r(i, () => {
    for (var u = 0; u < s; u++) {
      var l = t[u];
      o || (n.delete(l.k), ne(e, l.prev, l.next)), pe(l.e, !o);
    }
  });
}
function Ht(e, t, r, n, i, s = null) {
  var a = e, o = { flags: t, items: /* @__PURE__ */ new Map(), first: null };
  {
    var v = (
      /** @type {Element} */
      e
    );
    a = b ? j(
      /** @type {Comment | Text} */
      /* @__PURE__ */ he(v)
    ) : v.appendChild(xe());
  }
  b && Le();
  var u = null, l = !1;
  Tt(() => {
    var f = r(), c = wt(f) ? f : f == null ? [] : xt(f), d = c.length;
    if (l && d === 0)
      return;
    l = d === 0;
    let h = !1;
    if (b) {
      var p = (
        /** @type {Comment} */
        a.data === yt
      );
      p !== (d === 0) && (a = _t(), j(a), te(!1), h = !0);
    }
    if (b) {
      for (var m = null, _, g = 0; g < d; g++) {
        if (x.nodeType === 8 && /** @type {Comment} */
        x.data === $t) {
          a = /** @type {Comment} */
          x, h = !0, te(!1);
          break;
        }
        var $ = c[g], C = n($, g);
        _ = Lr(x, o, m, null, $, C, g, i, t), o.items.set(C, _), m = _;
      }
      d > 0 && j(_t());
    }
    if (!b) {
      var T = (
        /** @type {Effect} */
        k
      );
      zn(c, o, a, i, t, (T.f & G) !== 0, n);
    }
    s !== null && (d === 0 ? u ? je(u) : u = Ne(() => s(a)) : u !== null && ut(u, () => {
      u = null;
    })), h && te(!0), r();
  }), b && (a = x);
}
function zn(e, t, r, n, i, s, a) {
  var o = e.length, v = t.items, u = t.first, l = u, f, c = null, d = [], h = [], p, m, _, g;
  for (g = 0; g < o; g += 1) {
    if (p = e[g], m = a(p, g), _ = v.get(m), _ === void 0) {
      var $ = l ? (
        /** @type {TemplateNode} */
        l.e.nodes_start
      ) : r;
      c = Lr(
        $,
        t,
        c,
        c === null ? t.first : c.next,
        p,
        m,
        g,
        n,
        i
      ), v.set(m, c), d = [], h = [], l = c.next;
      continue;
    }
    if (Vn(_, p, g), _.e.f & G && je(_.e), _ !== l) {
      if (f !== void 0 && f.has(_)) {
        if (d.length < h.length) {
          var C = h[0], T;
          c = C.prev;
          var S = d[0], O = d[d.length - 1];
          for (T = 0; T < d.length; T += 1)
            Bt(d[T], C, r);
          for (T = 0; T < h.length; T += 1)
            f.delete(h[T]);
          ne(t, S.prev, O.next), ne(t, c, S), ne(t, O, C), l = C, c = O, g -= 1, d = [], h = [];
        } else
          f.delete(_), Bt(_, l, r), ne(t, _.prev, _.next), ne(t, _, c === null ? t.first : c.next), ne(t, c, _), c = _;
        continue;
      }
      for (d = [], h = []; l !== null && l.k !== m; )
        (s || !(l.e.f & G)) && (f ?? (f = /* @__PURE__ */ new Set())).add(l), h.push(l), l = l.next;
      if (l === null)
        continue;
      _ = l;
    }
    d.push(_), c = _, l = _.next;
  }
  if (l !== null || f !== void 0) {
    for (var M = f === void 0 ? [] : xt(f); l !== null; )
      (s || !(l.e.f & G)) && M.push(l), l = l.next;
    var nt = M.length;
    if (nt > 0) {
      var it = o === 0 ? r : null;
      Bn(t, M, it, v);
    }
  }
  y.first = t.first && t.first.e, y.last = c && c.e;
}
function Vn(e, t, r, n) {
  rr(e.v, t), e.i = r;
}
function Lr(e, t, r, n, i, s, a, o, v) {
  var u = (v & jr) !== 0, l = (v & Wr) === 0, f = u ? l ? /* @__PURE__ */ Et(i) : Y(i) : i, c = v & Kr ? Y(a) : a, d = {
    i: c,
    v: f,
    k: s,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: n
  };
  try {
    return d.e = Ne(() => o(e, f, c), b), d.e.prev = r && r.e, d.e.next = n && n.e, r === null ? t.first = d : (r.next = d, r.e.next = d.e), n !== null && (n.prev = d, n.e.prev = d.e), d;
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
function Pr(e, t, r, n, i) {
  var o;
  b && Le();
  var s = (o = t.$$slots) == null ? void 0 : o[r], a = !1;
  s === !0 && (s = t.children, a = !0), s === void 0 || s(e, a ? () => n : n);
}
function tt(e, t) {
  gr(() => {
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
function Un(e) {
  if (b) {
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
    e.__on_r = r, xn(r), Or();
  }
}
function W(e, t, r, n) {
  var i = e.__attributes ?? (e.__attributes = {});
  b && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || i[t] !== (i[t] = r) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[fn] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Yn(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
var zt = /* @__PURE__ */ new Map();
function Yn(e) {
  var t = zt.get(e.nodeName);
  if (t) return t;
  zt.set(e.nodeName, t = []);
  for (var r, n = ot(e), i = Element.prototype; i !== n; ) {
    r = sn(n);
    for (var s in r)
      r[s].set && t.push(s);
    n = ot(n);
  }
  return t;
}
function Be(e, t) {
  var r = e.__className, n = jn(t);
  b && e.className === n ? e.__className = n : (r !== n || b && e.className !== n) && (t == null ? e.removeAttribute("class") : e.className = n, e.__className = n);
}
function jn(e) {
  return e ?? "";
}
const Kn = () => performance.now(), ie = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (e) => requestAnimationFrame(e)
  ),
  now: () => Kn(),
  tasks: /* @__PURE__ */ new Set()
};
function Dr(e) {
  ie.tasks.forEach((t) => {
    t.c(e) || (ie.tasks.delete(t), t.f());
  }), ie.tasks.size !== 0 && ie.tick(Dr);
}
function Wn(e) {
  let t;
  return ie.tasks.size === 0 && ie.tick(Dr), {
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
function Gn(e) {
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
    const a = Gn(i.trim());
    t[a] = s.trim();
  }
  return t;
}
const Jn = (e) => e;
function Ut(e, t, r, n) {
  var i = (e & Qr) !== 0, s = (e & en) !== 0, a = i && s, o = (e & tn) !== 0, v = a ? "both" : i ? "in" : "out", u, l = t.inert, f, c;
  function d() {
    var g = k, $ = y;
    X(null), V(null);
    try {
      return u ?? (u = r()(t, (n == null ? void 0 : n()) ?? /** @type {P} */
      {}, {
        direction: v
      }));
    } finally {
      X(g), V($);
    }
  }
  var h = {
    is_global: o,
    in() {
      var g;
      if (t.inert = l, !i) {
        c == null || c.abort(), (g = c == null ? void 0 : c.reset) == null || g.call(c);
        return;
      }
      s || f == null || f.abort(), Fe(t, "introstart"), f = gt(t, d(), c, 1, () => {
        Fe(t, "introend"), f == null || f.abort(), f = u = void 0;
      });
    },
    out(g) {
      if (!s) {
        g == null || g(), u = void 0;
        return;
      }
      t.inert = !0, Fe(t, "outrostart"), c = gt(t, d(), f, 0, () => {
        Fe(t, "outroend"), g == null || g();
      });
    },
    stop: () => {
      f == null || f.abort(), c == null || c.abort();
    }
  }, p = (
    /** @type {Effect} */
    y
  );
  if ((p.transitions ?? (p.transitions = [])).push(h), i && pt) {
    var m = o;
    if (!m) {
      for (var _ = (
        /** @type {Effect | null} */
        p.parent
      ); _ && _.f & Ze; )
        for (; (_ = _.parent) && !(_.f & Xe); )
          ;
      m = !_ || (_.f & Xt) !== 0;
    }
    m && or(() => {
      vt(() => h.in());
    });
  }
}
function gt(e, t, r, n, i) {
  var s = n === 1;
  if (on(t)) {
    var a, o = !1;
    return gr(() => {
      if (!o) {
        var m = t({ direction: s ? "in" : "out" });
        a = gt(e, m, r, n, i);
      }
    }), {
      abort: () => {
        o = !0, a == null || a.abort();
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
  const { delay: v = 0, css: u, tick: l, easing: f = Jn } = t;
  var c = [];
  if (s && r === void 0 && (l && l(0, 1), u)) {
    var d = Vt(u(0, 1));
    c.push(d, d);
  }
  var h = () => 1 - n, p = e.animate(c, { duration: v });
  return p.onfinish = () => {
    var m = (r == null ? void 0 : r.t()) ?? 1 - n;
    r == null || r.abort();
    var _ = n - m, g = (
      /** @type {number} */
      t.duration * Math.abs(_)
    ), $ = [];
    if (g > 0) {
      if (u)
        for (var C = Math.ceil(g / 16.666666666666668), T = 0; T <= C; T += 1) {
          var S = m + _ * f(T / C), O = u(S, 1 - S);
          $.push(Vt(O));
        }
      h = () => {
        var M = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          p.currentTime
        );
        return m + _ * f(M / g);
      }, l && Wn(() => {
        if (p.playState !== "running") return !1;
        var M = h();
        return l(M, 1 - M), !0;
      });
    }
    p = e.animate($, { duration: g, fill: "forwards" }), p.onfinish = () => {
      h = () => n, l == null || l(n, 1 - n), i();
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
    t: () => h()
  };
}
function Xn(e, t, r = t) {
  Mn(e, "input", () => {
    var n = Yt(e) ? jt(e.value) : e.value;
    r(n), n !== (n = t()) && (e.value = n ?? "");
  }), ur(() => {
    var n = t();
    if (b && e.defaultValue !== e.value) {
      r(e.value);
      return;
    }
    Yt(e) && n === jt(e.value) || e.type === "date" && !n && !e.value || n !== e.value && (e.value = n ?? "");
  });
}
function Yt(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function jt(e) {
  return e === "" ? null : +e;
}
let qe = !1;
function Zn(e) {
  var t = qe;
  try {
    return qe = !1, [e(), qe];
  } finally {
    qe = t;
  }
}
function Qn(e) {
  for (var t = y, r = y; t !== null && !(t.f & (Z | Se)); )
    t = t.parent;
  try {
    return V(t), e();
  } finally {
    V(r);
  }
}
function A(e, t, r, n) {
  var T;
  var i = (r & Gr) !== 0, s = !tr, a = (r & Xr) !== 0, o = (r & Zr) !== 0, v = !1, u;
  a ? [u, v] = Zn(() => (
    /** @type {V} */
    e[t]
  )) : u = /** @type {V} */
  e[t];
  var l = (T = ve(e, t)) == null ? void 0 : T.set, f = (
    /** @type {V} */
    n
  ), c = !0, d = !1, h = () => (d = !0, c && (c = !1, o ? f = vt(
    /** @type {() => V} */
    n
  ) : f = /** @type {V} */
  n), f);
  u === void 0 && n !== void 0 && (l && s && _n(), u = h(), l && l(u));
  var p;
  if (p = () => {
    var S = (
      /** @type {V} */
      e[t]
    );
    return S === void 0 ? h() : (c = !0, d = !1, S);
  }, !(r & Jr))
    return p;
  if (l) {
    var m = e.$$legacy;
    return function(S, O) {
      return arguments.length > 0 ? ((!O || m || v) && l(O ? p() : S), S) : p();
    };
  }
  var _ = !1, g = !1, $ = /* @__PURE__ */ Et(u), C = Qn(
    () => /* @__PURE__ */ yn(() => {
      var S = p(), O = w($);
      return _ ? (_ = !1, g = !0, O) : (g = !1, $.v = S);
    })
  );
  return i || (C.equals = er), function(S, O) {
    if (arguments.length > 0) {
      const M = O ? w(C) : a ? fe(S) : S;
      return C.equals(M) || (_ = !0, K($, M), d && f !== void 0 && (f = M), vt(() => w(C))), S;
    }
    return w(C);
  };
}
function ei(e) {
  return new ti(e);
}
var Q, B;
class ti {
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
    var r = /* @__PURE__ */ new Map(), n = (a, o) => {
      var v = /* @__PURE__ */ Et(o);
      return r.set(a, v), v;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, o) {
          return w(r.get(o) ?? n(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return w(r.get(o) ?? n(o, Reflect.get(a, o))), Reflect.has(a, o);
        },
        set(a, o, v) {
          return K(r.get(o) ?? n(o, v), v), Reflect.set(a, o, v);
        }
      }
    );
    at(this, B, (t.hydrate ? qn : Rr)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((s = t == null ? void 0 : t.props) != null && s.$$host) || t.sync === !1) && Tr(), at(this, Q, i.$$events);
    for (const a of Object.keys(L(this, B)))
      a === "$set" || a === "$destroy" || a === "$on" || Ue(this, a, {
        get() {
          return L(this, B)[a];
        },
        /** @param {any} value */
        set(o) {
          L(this, B)[a] = o;
        },
        enumerable: !0
      });
    L(this, B).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, L(this, B).$destroy = () => {
      Hn(L(this, B));
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
let Fr;
typeof HTMLElement == "function" && (Fr = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    U(this, "$$ctor");
    /** Slots */
    U(this, "$$s");
    /** @type {any} The Svelte component instance */
    U(this, "$$c");
    /** Whether or not the custom element is connected */
    U(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    U(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    U(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    U(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    U(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    U(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    U(this, "$$me");
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
          i !== "default" && (a.name = i), R(s, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = ri(this);
      for (const i of this.$$s)
        i in n && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), r.default = !0) : r[i] = t(i));
      for (const i of this.attributes) {
        const s = this.$$g_p(i.name);
        s in this.$$d || (this.$$d[s] = ze(s, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = ei({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = lr(() => {
        ur(() => {
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
function ri(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function rt(e, t, r, n, i, s) {
  let a = class extends Fr {
    constructor() {
      super(e, r, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Ve(t).map(
        (o) => (t[o].attribute || o).toLowerCase()
      );
    }
  };
  return Ve(t).forEach((o) => {
    Ue(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(v) {
        var f;
        v = ze(o, v, t), this.$$d[o] = v;
        var u = this.$$c;
        if (u) {
          var l = (f = ve(u, o)) == null ? void 0 : f.get;
          l ? u[o] = v : u.$set({ [o]: v });
        }
      }
    });
  }), n.forEach((o) => {
    Ue(a.prototype, o, {
      get() {
        var v;
        return (v = this.$$c) == null ? void 0 : v[o];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
var ni = /* @__PURE__ */ P('<button type="button"><!></button>');
const ii = {
  hash: "svelte-1bto172",
  code: ".button.svelte-1bto172 {display:inline-block;cursor:pointer;border:0;margin-left:14px;border-radius:3em;font-weight:700;line-height:1;font-family:'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;}.button--primary.svelte-1bto172 {background-color:#1ea7fd;color:white;}.button--secondary.svelte-1bto172 {box-shadow:rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;background-color:transparent;color:#333;}.button--small.svelte-1bto172 {padding:10px 16px;font-size:12px;}.button--medium.svelte-1bto172 {padding:11px 20px;font-size:14px;}.button--large.svelte-1bto172 {padding:12px 24px;font-size:16px;}"
};
function si(e, t) {
  tt(e, ii);
  const r = A(t, "type", 3, "primary"), n = A(t, "size", 3, "medium");
  A(t, "label", 3, "Button");
  const i = A(t, "onClick", 3, void 0);
  var s = ni();
  s.__click = function(...o) {
    var v;
    (v = i()) == null || v.apply(this, o);
  };
  var a = N(s);
  Pr(a, t, "default", {}), E(s), ee(() => Be(s, `${"button button--" + n() + " button--" + r()} svelte-1bto172`)), R(e, s);
}
St(["click"]);
customElements.define("mapp-button", rt(si, { type: {}, size: {}, label: {}, onClick: {} }, ["default"], [], !0));
var ai = /* @__PURE__ */ P('<div class="input_label svelte-1hyy719"> </div>'), li = /* @__PURE__ */ P('<span class="input_icon svelte-1hyy719"><img width="16px" alt="in"></span>'), oi = (e, t) => {
  t(e);
}, ui = /* @__PURE__ */ P('<div class="input_frame svelte-1hyy719"><!> <div class="input_box svelte-1hyy719"><!> <input class="input_field svelte-1hyy719"></div></div>');
const fi = {
  hash: "svelte-1hyy719",
  code: `.input_frame.svelte-1hyy719 {padding-right:24px;margin-bottom:14px;}.input_label.svelte-1hyy719 {margin-bottom:6px;}.input_box.svelte-1hyy719 {display:flex;color:#4a5073;background-color:#fff;border:0.0625rem solid #d1d7e0;border-radius:0.5rem;
    /* padding-right: 14px; */}.input_icon.svelte-1hyy719 {width:32px;position:relative;top:12px;left:9px;}.input_field.svelte-1hyy719 {box-shadow:none;width:280px;border:0.0625rem solid #d1d7e0;color:#66799e;background-color:transparent;background-clip:padding-box;appearance:none;border:transparent;height:40px;font-size:16px;border-style:none;border-radius:0.5rem;margin-left:4px;margin-right:8px;width:98%;}.input_field.svelte-1hyy719:focus {outline:none;}`
};
function qr(e, t) {
  At(t, !0), tt(e, fi);
  let r = A(t, "label", 3, ""), n = A(t, "icon", 3, ""), i = A(t, "type", 3, "text"), s = A(t, "placeholder", 3, ""), a = A(t, "input", 15, ""), o = A(t, "style", 3, "");
  const v = (h) => {
    h && h.target && h.target.value && t.$$host && t.$$host.dispatchEvent(new CustomEvent("update", { detail: { input: h.target.value } }));
  };
  var u = ui(), l = N(u);
  _e(l, r, (h) => {
    var p = ai(), m = N(p, !0);
    E(p), ee(() => Ge(m, r())), R(h, p);
  });
  var f = z(l, 2), c = N(f);
  _e(c, n, (h) => {
    var p = li(), m = N(p);
    E(p), ee(() => W(m, "src", n())), R(h, p);
  });
  var d = z(c, 2);
  Un(d), d.__input = [oi, v], E(f), E(u), ee(() => {
    W(u, "style", o()), W(d, "type", i()), W(d, "placeholder", s());
  }), Xn(d, a), R(e, u), Ct();
}
St(["input"]);
customElements.define("apint-input", rt(
  qr,
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
var ci = /* @__PURE__ */ P('<span class="user_button svelte-gns4bd"><img class="msg_icon svelte-gns4bd" alt="alerts" src="bell.svg"> <span class="msg_new svelte-gns4bd"></span> <img class="user_icon svelte-gns4bd" alt="profile"> <span class="user_name svelte-gns4bd"> </span></span>'), vi = /* @__PURE__ */ P("<span>logged out</span>"), di = /* @__PURE__ */ P('<div class="header svelte-gns4bd"><div style="width: 364px;"><!> <span></span></div> <div><!></div></div>');
const _i = {
  hash: "svelte-gns4bd",
  code: ".header.svelte-gns4bd {display:flex;justify-content:space-between;align-items:center;padding:26px 20px;font-family:'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;}.msg_icon.svelte-gns4bd {width:20px;margin-right:22px;}.msg_new.svelte-gns4bd {background-color:red;height:7px;width:7px;border-radius:50% !important;position:relative;top:4px;left:-22px;}.user_button.svelte-gns4bd {display:flex;position:relative;top:-6px;}.user_button.svelte-gns4bd:hover {cursor:pointer;}.user_name.svelte-gns4bd {padding-top:12px;padding-left:8px;}.user_icon.svelte-gns4bd {border-radius:50% !important;width:40px;}"
};
function Hr(e, t) {
  tt(e, _i), A(t, "title", 3, "Apint.org");
  const r = A(t, "supportuser", 3, !1), n = A(t, "username", 3, ""), i = A(t, "userpic", 3, "");
  let s = "";
  var a = di(), o = N(a), v = N(o);
  qr(v, {
    icon: "search.svg",
    placeholder: "Search",
    input: s
  });
  var u = z(v, 2);
  u.textContent = s, E(o);
  var l = z(o, 2), f = N(l);
  _e(
    f,
    r,
    (c) => {
      var d = ci(), h = z(N(d), 4), p = z(h, 2), m = N(p, !0);
      E(p), E(d), ee(() => {
        W(h, "src", i()), Ge(m, n());
      }), R(c, d);
    },
    (c) => {
      var d = Pn(), h = Cr(d);
      _e(
        h,
        r,
        (p) => {
          var m = vi();
          R(p, m);
        },
        null,
        !0
      ), R(c, d);
    }
  ), E(l), E(a), R(e, a);
}
customElements.define("mapp-headerlite", rt(
  Hr,
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
const hi = (e) => e;
function pi(e) {
  const t = e - 1;
  return t * t * t + 1;
}
function mi(e, { delay: t = 0, duration: r = 400, easing: n = hi } = {}) {
  const i = +getComputedStyle(e).opacity;
  return {
    delay: t,
    duration: r,
    easing: n,
    css: (s) => `opacity: ${s * i}`
  };
}
function gi(e, { delay: t = 0, duration: r = 400, easing: n = pi, axis: i = "y" } = {}) {
  const s = getComputedStyle(e), a = +s.opacity, o = i === "y" ? "height" : "width", v = parseFloat(s[o]), u = i === "y" ? ["top", "bottom"] : ["left", "right"], l = u.map(
    (_) => (
      /** @type {'Left' | 'Right' | 'Top' | 'Bottom'} */
      `${_[0].toUpperCase()}${_.slice(1)}`
    )
  ), f = parseFloat(s[`padding${l[0]}`]), c = parseFloat(s[`padding${l[1]}`]), d = parseFloat(s[`margin${l[0]}`]), h = parseFloat(s[`margin${l[1]}`]), p = parseFloat(
    s[`border${l[0]}Width`]
  ), m = parseFloat(
    s[`border${l[1]}Width`]
  );
  return {
    delay: t,
    duration: r,
    easing: n,
    css: (_) => `overflow: hidden;opacity: ${Math.min(_ * 20, 1) * a};${o}: ${_ * v}px;padding-${u[0]}: ${_ * f}px;padding-${u[1]}: ${_ * c}px;margin-${u[0]}: ${_ * d}px;margin-${u[1]}: ${_ * h}px;border-${u[0]}-width: ${_ * p}px;border-${u[1]}-width: ${_ * m}px;`
  };
}
function yi(e) {
  return e;
}
var $i = (e, t, r) => t(w(r).title), bi = /* @__PURE__ */ P('<img alt="option" width="18px">'), wi = /* @__PURE__ */ P('<svg width="18px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-pie" class="svg-inline--fa fa-chart-pie fa-w-17 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512"><path fill="currentColor" d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"></path></svg>'), xi = /* @__PURE__ */ P('<span><svg class="icon icon-sm" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span>'), Ei = (e, t, r) => t(w(r).title), ki = /* @__PURE__ */ P('<a><span><span class="menu_item_icon svelte-v1mgvt"></span> <span class="menu_item_text"> </span></span></a>'), Ti = /* @__PURE__ */ P('<div class="menu_item_frame svelte-v1mgvt"></div>'), Ni = /* @__PURE__ */ P('<a><span><span class="menu_item_icon svelte-v1mgvt"><!></span> <span class="menu_item_text"> </span> <!></span></a> <!>', 1), Ai = /* @__PURE__ */ P('<div class="outer_frame svelte-v1mgvt"><div class="left_menu svelte-v1mgvt"><div class="menu_frame svelte-v1mgvt"></div></div> <div class="right_panel svelte-v1mgvt"><!> <div class="right_panel_content svelte-v1mgvt"><!></div></div></div>');
const Ci = {
  hash: "svelte-v1mgvt",
  code: `a.svelte-v1mgvt:link {text-decoration:none;}a.svelte-v1mgvt:visited {text-decoration:none;color:#eaedf2;}a.svelte-v1mgvt:hover {text-decoration:none;color:#eaedf2;}a.svelte-v1mgvt:active {text-decoration:none;}.outer_frame.svelte-v1mgvt {position:fixed;left:0px;top:0px;display:flex;height:100vh;width:100vw;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}.left_menu.svelte-v1mgvt {display:flex;flex-flow:row nowrap;width:260px !important;min-width:260px;height:100%;background-color:#262b40 !important;color:#eaedf2;}.menu_frame.svelte-v1mgvt {margin:20px 30px 20px 30px;width:100%;}.menu_item.svelte-v1mgvt {display:block;width:100%;text-align:left;padding:10px 0px;color:#eaedf2;border-radius:.5rem;margin-bottom:8px;border:.0625rem solid transparent;}.menu_item.svelte-v1mgvt:hover {background-color:#2e3650;}.menu_item_active.svelte-v1mgvt {background-color:#2e3650;border:.0625rem solid #4c5680;}.menu_item_icon.svelte-v1mgvt {display:inline-block;margin-left:12px;margin-right:.5rem;color:#fff;position:relative;top:3px;width:18px;}.menu_item_expand.svelte-v1mgvt {float:right;width:22px;}.expanded.svelte-v1mgvt {position:relative;
    /* left: -4px; */
    /* top: -2px; */transform:rotate(90deg) translateX(-2px) translateY(4px);transition:all 0.2s ease;}.menu_item_frame.svelte-v1mgvt {width:100%;}.right_panel.svelte-v1mgvt {color:#4a5073;background-color:#f5f8fb;flex:auto;height:100%;overflow-y:auto;}.right_panel_content.svelte-v1mgvt {padding:0px 20px;}`
};
function Si(e, t) {
  At(t, !0), tt(e, Ci), A(t, "title", 3, "Apint.org"), A(t, "icon", 3, "");
  let r = A(t, "supportuser", 3, !0), n = A(t, "username", 3, ""), i = A(t, "userpic", 3, ""), s = A(t, "activeitem", 3, ""), a = A(t, "menuconfig", 7, void 0);
  typeof a() == "string" && a(JSON.parse(a()));
  let o = fe({}), v = (m) => {
    o[m] ? o[m] = !o[m] : o[m] = !0;
  };
  var u = Ai(), l = N(u), f = N(l);
  Ht(f, 21, () => a().items, qt, (m, _) => {
    var g = Ni(), $ = Cr(g);
    $.__click = [$i, v, _];
    var C = N($), T = N(C), S = N(T);
    _e(
      S,
      () => w(_).icon,
      (ue) => {
        var H = bi();
        ee(() => W(H, "src", w(_).icon)), R(ue, H);
      },
      (ue) => {
        var H = wi();
        R(ue, H);
      }
    ), E(T);
    var O = z(T, 2), M = N(O, !0);
    E(O);
    var nt = z(O, 2);
    _e(nt, () => w(_).subitems, (ue) => {
      var H = xi();
      ee(() => Be(H, `${(o[w(_).title] ? "menu_item_expand expanded" : "menu_item_expand") ?? ""} svelte-v1mgvt`)), R(ue, H);
    }), E(C), E($);
    var it = z($, 2);
    _e(it, () => o[w(_).title] && w(_).subitems, (ue) => {
      var H = Ti();
      Ht(H, 21, () => w(_).subitems, qt, (Br, Pe) => {
        var me = ki();
        me.__click = [Ei, v, Pe];
        var Ot = N(me), It = z(N(Ot), 2), zr = N(It, !0);
        E(It), E(Ot), E(me), ee(() => {
          W(me, "href", w(Pe).url), Be(me, `${(w(Pe).title == s() ? "menu_item menu_item_active" : "menu_item") ?? ""} svelte-v1mgvt`), Ge(zr, w(Pe).title);
        }), R(Br, me);
      }), E(H), Ut(3, H, () => gi, () => ({ duration: 300, easing: yi })), R(ue, H);
    }), ee(() => {
      W($, "href", w(_).url), Be($, `${(w(_).title == s() ? "menu_item menu_item_active" : "menu_item") ?? ""} svelte-v1mgvt`), Ge(M, w(_).title);
    }), R(m, g);
  }), E(f), E(l);
  var c = z(l, 2), d = N(c);
  Hr(d, {
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
  var h = z(d, 2), p = N(h);
  Pr(p, t, "default", {}), E(h), E(c), E(u), Ut(1, f, () => mi), R(e, u), Ct();
}
St(["click"]);
customElements.define("mapp-menu", rt(
  Si,
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
  si as MappButton,
  Hr as MappHeaderLite,
  Si as MappMenu
};
