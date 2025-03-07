var un = Object.defineProperty;
var Vt = (e) => {
  throw TypeError(e);
};
var fn = (e, t, r) => t in e ? un(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ie = (e, t, r) => fn(e, typeof t != "symbol" ? t + "" : t, r), Bt = (e, t, r) => t.has(e) || Vt("Cannot " + r);
var J = (e, t, r) => (Bt(e, t, "read from private field"), r ? r.call(e) : t.get(e)), mt = (e, t, r) => t.has(e) ? Vt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), bt = (e, t, r, n) => (Bt(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r);
const dn = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(dn);
const vn = 1, cn = 2, hn = 16, pn = 1, _n = 4, gn = 8, mn = 16, bn = 4, xn = 1, wn = 2, tr = "[", qt = "[!", Ot = "]", je = {}, W = Symbol(), rr = !1;
function It(e) {
  console.warn("hydration_mismatch");
}
var zt = Array.isArray, Rt = Array.from, it = Object.keys, lt = Object.defineProperty, Ee = Object.getOwnPropertyDescriptor, yn = Object.getOwnPropertyDescriptors, kn = Object.prototype, $n = Array.prototype, xt = Object.getPrototypeOf;
function En(e) {
  return typeof e == "function";
}
const Le = () => {
};
function nr(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const _e = 2, ir = 4, ft = 8, dt = 16, ve = 32, Ue = 64, Me = 128, at = 256, X = 512, we = 1024, Ye = 2048, oe = 4096, Ge = 8192, lr = 16384, vt = 32768, Sn = 1 << 18, ar = 1 << 19, De = Symbol("$state"), Cn = Symbol("");
function sr(e) {
  return e === this.v;
}
function Nn(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function or(e) {
  return !Nn(e, this.v);
}
function Tn() {
  throw new Error("effect_update_depth_exceeded");
}
function An() {
  throw new Error("hydration_failed");
}
function qn(e) {
  throw new Error("props_invalid_value");
}
function On() {
  throw new Error("state_descriptors_fixed");
}
function In() {
  throw new Error("state_prototype_fixed");
}
function zn() {
  throw new Error("state_unsafe_local_read");
}
function Rn() {
  throw new Error("state_unsafe_mutation");
}
let ur = !1;
function ee(e) {
  return {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: sr,
    version: 0
  };
}
function ze(e) {
  return /* @__PURE__ */ Mn(ee(e));
}
// @__NO_SIDE_EFFECTS__
function Mt(e, t = !1) {
  const r = ee(e);
  return t || (r.equals = or), r;
}
// @__NO_SIDE_EFFECTS__
function Mn(e) {
  return R !== null && R.f & _e && (ue === null ? Bn([e]) : ue.push(e)), e;
}
function D(e, t) {
  return R !== null && Yn() && R.f & (_e | dt) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (ue === null || !ue.includes(e)) && Rn(), fr(e, t);
}
function fr(e, t) {
  return e.equals(t) || (e.v = t, e.version = Nr(), dr(e, we), A !== null && A.f & X && !(A.f & ve) && (B !== null && B.includes(e) ? (ge(A, we), pt(A)) : xe === null ? Un([e]) : xe.push(e))), t;
}
function dr(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = r.length, i = 0; i < n; i++) {
      var l = r[i], a = l.f;
      a & we || (ge(l, t), a & (X | Me) && (a & _e ? dr(
        /** @type {Derived} */
        l,
        Ye
      ) : pt(
        /** @type {Effect} */
        l
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Hn(e) {
  var t = _e | we;
  A === null ? t |= Me : A.f |= ar;
  const r = {
    children: null,
    ctx: fe,
    deps: null,
    equals: sr,
    f: t,
    fn: e,
    reactions: null,
    v: (
      /** @type {V} */
      null
    ),
    version: 0,
    parent: A
  };
  if (R !== null && R.f & _e) {
    var n = (
      /** @type {Derived} */
      R
    );
    (n.children ?? (n.children = [])).push(r);
  }
  return r;
}
function vr(e) {
  var t = e.children;
  if (t !== null) {
    e.children = null;
    for (var r = 0; r < t.length; r += 1) {
      var n = t[r];
      n.f & _e ? Ht(
        /** @type {Derived} */
        n
      ) : Ce(
        /** @type {Effect} */
        n
      );
    }
  }
}
function cr(e) {
  var t, r = A;
  te(e.parent);
  try {
    vr(e), t = Tr(e);
  } finally {
    te(r);
  }
  return t;
}
function hr(e) {
  var t = cr(e), r = (Ae || e.f & Me) && e.deps !== null ? Ye : X;
  ge(e, r), e.equals(t) || (e.v = t, e.version = Nr());
}
function Ht(e) {
  vr(e), Be(e, 0), ge(e, Ge), e.v = e.children = e.deps = e.ctx = e.reactions = null;
}
function Ln(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Je(e, t, r, n = !0) {
  var i = (e & Ue) !== 0, l = A, a = {
    ctx: fe,
    deps: null,
    deriveds: null,
    nodes_start: null,
    nodes_end: null,
    f: e | we,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: i ? null : l,
    prev: null,
    teardown: null,
    transitions: null,
    version: 0
  };
  if (r) {
    var o = qe;
    try {
      Ut(!0), ht(a), a.f |= lr;
    } catch (s) {
      throw Ce(a), s;
    } finally {
      Ut(o);
    }
  } else t !== null && pt(a);
  var u = r && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & ar) === 0;
  if (!u && !i && n && (l !== null && Ln(a, l), R !== null && R.f & _e)) {
    var f = (
      /** @type {Derived} */
      R
    );
    (f.children ?? (f.children = [])).push(a);
  }
  return a;
}
function pr(e) {
  const t = Je(Ue, e, !0);
  return () => {
    Ce(t);
  };
}
function ct(e) {
  return Je(ir, e, !1);
}
function _r(e) {
  return Je(ft, e, !0);
}
function I(e) {
  return Lt(e);
}
function Lt(e, t = 0) {
  return Je(ft | dt | t, e, !0);
}
function Fe(e, t = !0) {
  return Je(ft | ve, e, !0, t);
}
function gr(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = R;
    de(null);
    try {
      t.call(null);
    } finally {
      de(r);
    }
  }
}
function mr(e) {
  var t = e.deriveds;
  if (t !== null) {
    e.deriveds = null;
    for (var r = 0; r < t.length; r += 1)
      Ht(t[r]);
  }
}
function br(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var n = r.next;
    Ce(r, t), r = n;
  }
}
function jn(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    t.f & ve || Ce(t), t = r;
  }
}
function Ce(e, t = !0) {
  var r = !1;
  if ((t || e.f & Sn) && e.nodes_start !== null) {
    for (var n = e.nodes_start, i = e.nodes_end; n !== null; ) {
      var l = n === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ye(n)
      );
      n.remove(), n = l;
    }
    r = !0;
  }
  br(e, t && !r), mr(e), Be(e, 0), ge(e, Ge);
  var a = e.transitions;
  if (a !== null)
    for (const u of a)
      u.stop();
  gr(e);
  var o = e.parent;
  o !== null && o.first !== null && xr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.parent = e.fn = e.nodes_start = e.nodes_end = null;
}
function xr(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function wt(e, t) {
  var r = [];
  jt(e, r, !0), wr(r, () => {
    Ce(e), t && t();
  });
}
function wr(e, t) {
  var r = e.length;
  if (r > 0) {
    var n = () => --r || t();
    for (var i of e)
      i.out(n);
  } else
    t();
}
function jt(e, t, r) {
  if (!(e.f & oe)) {
    if (e.f ^= oe, e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || r) && t.push(a);
    for (var n = e.first; n !== null; ) {
      var i = n.next, l = (n.f & vt) !== 0 || (n.f & ve) !== 0;
      jt(n, t, l ? r : !1), n = i;
    }
  }
}
function st(e) {
  yr(e, !0);
}
function yr(e, t) {
  if (e.f & oe) {
    Ke(e) && ht(e), e.f ^= oe;
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & vt) !== 0 || (r.f & ve) !== 0;
      yr(r, i ? t : !1), r = n;
    }
    if (e.transitions !== null)
      for (const l of e.transitions)
        (l.is_global || t) && l.in();
  }
}
const Dn = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let ot = !1, ut = !1, yt = [], kt = [];
function kr() {
  ot = !1;
  const e = yt.slice();
  yt = [], nr(e);
}
function $r() {
  ut = !1;
  const e = kt.slice();
  kt = [], nr(e);
}
function Er(e) {
  ot || (ot = !0, queueMicrotask(kr)), yt.push(e);
}
function Pn(e) {
  ut || (ut = !0, Dn($r)), kt.push(e);
}
function Fn() {
  ot && kr(), ut && $r();
}
const Sr = 0, Vn = 1;
let tt = Sr, Ve = !1, qe = !1;
function Ut(e) {
  qe = e;
}
let $e = [], Oe = 0;
let R = null;
function de(e) {
  R = e;
}
let A = null;
function te(e) {
  A = e;
}
let ue = null;
function Bn(e) {
  ue = e;
}
let B = null, Z = 0, xe = null;
function Un(e) {
  xe = e;
}
let Cr = 0, Ae = !1, fe = null;
function Nr() {
  return ++Cr;
}
function Yn() {
  return !ur;
}
function Ke(e) {
  var a, o;
  var t = e.f;
  if (t & we)
    return !0;
  if (t & Ye) {
    var r = e.deps, n = (t & Me) !== 0;
    if (r !== null) {
      var i;
      if (t & at) {
        for (i = 0; i < r.length; i++)
          ((a = r[i]).reactions ?? (a.reactions = [])).push(e);
        e.f ^= at;
      }
      for (i = 0; i < r.length; i++) {
        var l = r[i];
        if (Ke(
          /** @type {Derived} */
          l
        ) && hr(
          /** @type {Derived} */
          l
        ), n && A !== null && !Ae && !((o = l == null ? void 0 : l.reactions) != null && o.includes(e)) && (l.reactions ?? (l.reactions = [])).push(e), l.version > e.version)
          return !0;
      }
    }
    n || ge(e, X);
  }
  return !1;
}
function Gn(e, t, r) {
  throw e;
}
function Tr(e) {
  var d;
  var t = B, r = Z, n = xe, i = R, l = Ae, a = ue, o = fe, u = e.f;
  B = /** @type {null | Value[]} */
  null, Z = 0, xe = null, R = u & (ve | Ue) ? null : e, Ae = !qe && (u & Me) !== 0, ue = null, fe = e.ctx;
  try {
    var f = (
      /** @type {Function} */
      (0, e.fn)()
    ), s = e.deps;
    if (B !== null) {
      var v;
      if (Be(e, Z), s !== null && Z > 0)
        for (s.length = Z + B.length, v = 0; v < B.length; v++)
          s[Z + v] = B[v];
      else
        e.deps = s = B;
      if (!Ae)
        for (v = Z; v < s.length; v++)
          ((d = s[v]).reactions ?? (d.reactions = [])).push(e);
    } else s !== null && Z < s.length && (Be(e, Z), s.length = Z);
    return f;
  } finally {
    B = t, Z = r, xe = n, R = i, Ae = l, ue = a, fe = o;
  }
}
function Jn(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = r.indexOf(e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  r === null && t.f & _e && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (B === null || !B.includes(t)) && (ge(t, Ye), t.f & (Me | at) || (t.f ^= at), Be(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Be(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Jn(e, r[n]);
}
function ht(e) {
  var t = e.f;
  if (!(t & Ge)) {
    ge(e, X);
    var r = A;
    A = e;
    try {
      t & dt ? jn(e) : br(e), mr(e), gr(e);
      var n = Tr(e);
      e.teardown = typeof n == "function" ? n : null, e.version = Cr;
    } catch (i) {
      Gn(
        /** @type {Error} */
        i
      );
    } finally {
      A = r;
    }
  }
}
function Ar() {
  Oe > 1e3 && (Oe = 0, Tn()), Oe++;
}
function qr(e) {
  var t = e.length;
  if (t !== 0) {
    Ar();
    var r = qe;
    qe = !0;
    try {
      for (var n = 0; n < t; n++) {
        var i = e[n];
        i.f & X || (i.f ^= X);
        var l = [];
        Or(i, l), Kn(l);
      }
    } finally {
      qe = r;
    }
  }
}
function Kn(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var n = e[r];
      !(n.f & (Ge | oe)) && Ke(n) && (ht(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? xr(n) : n.fn = null));
    }
}
function Wn() {
  if (Ve = !1, Oe > 1001)
    return;
  const e = $e;
  $e = [], qr(e), Ve || (Oe = 0);
}
function pt(e) {
  tt === Sr && (Ve || (Ve = !0, queueMicrotask(Wn)));
  for (var t = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (r & (Ue | ve)) {
      if (!(r & X)) return;
      t.f ^= X;
    }
  }
  $e.push(t);
}
function Or(e, t) {
  var r = e.first, n = [];
  e: for (; r !== null; ) {
    var i = r.f, l = (i & ve) !== 0, a = l && (i & X) !== 0;
    if (!a && !(i & oe))
      if (i & ft) {
        l ? r.f ^= X : Ke(r) && ht(r);
        var o = r.first;
        if (o !== null) {
          r = o;
          continue;
        }
      } else i & ir && n.push(r);
    var u = r.next;
    if (u === null) {
      let v = r.parent;
      for (; v !== null; ) {
        if (e === v)
          break e;
        var f = v.next;
        if (f !== null) {
          r = f;
          continue e;
        }
        v = v.parent;
      }
    }
    r = u;
  }
  for (var s = 0; s < n.length; s++)
    o = n[s], t.push(o), Or(o, t);
}
function Ir(e) {
  var t = tt, r = $e;
  try {
    Ar();
    const i = [];
    tt = Vn, $e = i, Ve = !1, qr(r);
    var n = e == null ? void 0 : e();
    return Fn(), ($e.length > 0 || i.length > 0) && Ir(), Oe = 0, n;
  } finally {
    tt = t, $e = r;
  }
}
function m(e) {
  var o;
  var t = e.f, r = (t & _e) !== 0;
  if (r && t & Ge) {
    var n = cr(
      /** @type {Derived} */
      e
    );
    return Ht(
      /** @type {Derived} */
      e
    ), n;
  }
  if (R !== null) {
    ue !== null && ue.includes(e) && zn();
    var i = R.deps;
    B === null && i !== null && i[Z] === e ? Z++ : B === null ? B = [e] : B.push(e), xe !== null && A !== null && A.f & X && !(A.f & ve) && xe.includes(e) && (ge(A, we), pt(A));
  } else if (r && /** @type {Derived} */
  e.deps === null) {
    var l = (
      /** @type {Derived} */
      e
    ), a = l.parent;
    a !== null && !((o = a.deriveds) != null && o.includes(l)) && (a.deriveds ?? (a.deriveds = [])).push(l);
  }
  return r && (l = /** @type {Derived} */
  e, Ke(l) && hr(l)), e.v;
}
function $t(e) {
  const t = R;
  try {
    return R = null, e();
  } finally {
    R = t;
  }
}
const Zn = ~(we | Ye | X);
function ge(e, t) {
  e.f = e.f & Zn | t;
}
function ae(e, t = !1, r) {
  fe = {
    p: fe,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
}
function se(e) {
  const t = fe;
  if (t !== null) {
    const a = t.e;
    if (a !== null) {
      var r = A, n = R;
      t.e = null;
      try {
        for (var i = 0; i < a.length; i++) {
          var l = a[i];
          te(l.effect), de(l.reaction), ct(l.fn);
        }
      } finally {
        te(r), de(n);
      }
    }
    fe = t.p, t.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
function H(e, t = null, r) {
  if (typeof e != "object" || e === null || De in e)
    return e;
  const n = xt(e);
  if (n !== kn && n !== $n)
    return e;
  var i = /* @__PURE__ */ new Map(), l = zt(e), a = ee(0);
  l && i.set("length", ee(
    /** @type {any[]} */
    e.length
  ));
  var o;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(u, f, s) {
        (!("value" in s) || s.configurable === !1 || s.enumerable === !1 || s.writable === !1) && On();
        var v = i.get(f);
        return v === void 0 ? (v = ee(s.value), i.set(f, v)) : D(v, H(s.value, o)), !0;
      },
      deleteProperty(u, f) {
        var s = i.get(f);
        if (s === void 0)
          f in u && i.set(f, ee(W));
        else {
          if (l && typeof f == "string") {
            var v = (
              /** @type {Source<number>} */
              i.get("length")
            ), d = Number(f);
            Number.isInteger(d) && d < v.v && D(v, d);
          }
          D(s, W), Yt(a);
        }
        return !0;
      },
      get(u, f, s) {
        var h;
        if (f === De)
          return e;
        var v = i.get(f), d = f in u;
        if (v === void 0 && (!d || (h = Ee(u, f)) != null && h.writable) && (v = ee(H(d ? u[f] : W, o)), i.set(f, v)), v !== void 0) {
          var c = m(v);
          return c === W ? void 0 : c;
        }
        return Reflect.get(u, f, s);
      },
      getOwnPropertyDescriptor(u, f) {
        var s = Reflect.getOwnPropertyDescriptor(u, f);
        if (s && "value" in s) {
          var v = i.get(f);
          v && (s.value = m(v));
        } else if (s === void 0) {
          var d = i.get(f), c = d == null ? void 0 : d.v;
          if (d !== void 0 && c !== W)
            return {
              enumerable: !0,
              configurable: !0,
              value: c,
              writable: !0
            };
        }
        return s;
      },
      has(u, f) {
        var c;
        if (f === De)
          return !0;
        var s = i.get(f), v = s !== void 0 && s.v !== W || Reflect.has(u, f);
        if (s !== void 0 || A !== null && (!v || (c = Ee(u, f)) != null && c.writable)) {
          s === void 0 && (s = ee(v ? H(u[f], o) : W), i.set(f, s));
          var d = m(s);
          if (d === W)
            return !1;
        }
        return v;
      },
      set(u, f, s, v) {
        var S;
        var d = i.get(f), c = f in u;
        if (l && f === "length")
          for (var h = s; h < /** @type {Source<number>} */
          d.v; h += 1) {
            var p = i.get(h + "");
            p !== void 0 ? D(p, W) : h in u && (p = ee(W), i.set(h + "", p));
          }
        d === void 0 ? (!c || (S = Ee(u, f)) != null && S.writable) && (d = ee(void 0), D(d, H(s, o)), i.set(f, d)) : (c = d.v !== W, D(d, H(s, o)));
        var x = Reflect.getOwnPropertyDescriptor(u, f);
        if (x != null && x.set && x.set.call(v, s), !c) {
          if (l && typeof f == "string") {
            var g = (
              /** @type {Source<number>} */
              i.get("length")
            ), y = Number(f);
            Number.isInteger(y) && y >= g.v && D(g, y + 1);
          }
          Yt(a);
        }
        return !0;
      },
      ownKeys(u) {
        m(a);
        var f = Reflect.ownKeys(u).filter((d) => {
          var c = i.get(d);
          return c === void 0 || c.v !== W;
        });
        for (var [s, v] of i)
          v.v !== W && !(s in u) && f.push(s);
        return f;
      },
      setPrototypeOf() {
        In();
      }
    }
  );
}
function Yt(e, t = 1) {
  D(e, e.v + t);
}
function Gt(e) {
  return e !== null && typeof e == "object" && De in e ? e[De] : e;
}
function Xn(e, t) {
  return Object.is(Gt(e), Gt(t));
}
var Jt, zr, Rr;
function Et() {
  if (Jt === void 0) {
    Jt = window;
    var e = Element.prototype, t = Node.prototype;
    zr = Ee(t, "firstChild").get, Rr = Ee(t, "nextSibling").get, e.__click = void 0, e.__className = "", e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Re(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Se(e) {
  return zr.call(e);
}
// @__NO_SIDE_EFFECTS__
function ye(e) {
  return Rr.call(e);
}
function b(e, t) {
  if (!O)
    return /* @__PURE__ */ Se(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Se(z)
  );
  if (r === null)
    r = z.appendChild(Re());
  else if (t && r.nodeType !== 3) {
    var n = Re();
    return r == null || r.before(n), le(n), n;
  }
  return le(r), r;
}
function He(e, t) {
  if (!O) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Se(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ ye(r) : r;
  }
  return z;
}
function N(e, t = 1, r = !1) {
  let n = O ? z : e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ ye(n);
  if (!O)
    return n;
  var i = n.nodeType;
  if (r && i !== 3) {
    var l = Re();
    return n == null || n.before(l), le(l), l;
  }
  return le(n), /** @type {TemplateNode} */
  n;
}
function Mr(e) {
  e.textContent = "";
}
let O = !1;
function pe(e) {
  O = e;
}
let z;
function le(e) {
  if (e === null)
    throw It(), je;
  return z = e;
}
function We() {
  return le(
    /** @type {TemplateNode} */
    /* @__PURE__ */ ye(z)
  );
}
function _(e) {
  if (O) {
    if (/* @__PURE__ */ ye(z) !== null)
      throw It(), je;
    z = e;
  }
}
function St() {
  for (var e = 0, t = z; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === Ot) {
        if (e === 0) return t;
        e -= 1;
      } else (r === tr || r === qt) && (e += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ye(t)
    );
    t.remove(), t = n;
  }
}
let Kt = !1;
function Hr() {
  Kt || (Kt = !0, document.addEventListener(
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
function Qn(e) {
  var t = R, r = A;
  de(null), te(null);
  try {
    return e();
  } finally {
    de(t), te(r);
  }
}
function Lr(e, t, r, n = r) {
  e.addEventListener(t, () => Qn(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), n();
  } : e.__on_r = n, Hr();
}
const jr = /* @__PURE__ */ new Set(), Ct = /* @__PURE__ */ new Set();
function ce(e) {
  for (var t = 0; t < e.length; t++)
    jr.add(e[t]);
  for (var r of Ct)
    r(e);
}
function Xe(e) {
  var y;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = ((y = e.composedPath) == null ? void 0 : y.call(e)) || [], l = (
    /** @type {null | Element} */
    i[0] || e.target
  ), a = 0, o = e.__root;
  if (o) {
    var u = i.indexOf(o);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var f = i.indexOf(t);
    if (f === -1)
      return;
    u <= f && (a = u);
  }
  if (l = /** @type {Element} */
  i[a] || e.target, l !== t) {
    lt(e, "currentTarget", {
      configurable: !0,
      get() {
        return l || r;
      }
    });
    var s = R, v = A;
    de(null), te(null);
    try {
      for (var d, c = []; l !== null; ) {
        var h = l.assignedSlot || l.parentNode || /** @type {any} */
        l.host || null;
        try {
          var p = l["__" + n];
          if (p !== void 0 && !/** @type {any} */
          l.disabled)
            if (zt(p)) {
              var [x, ...g] = p;
              x.apply(l, [e, ...g]);
            } else
              p.call(l, e);
        } catch (S) {
          d ? c.push(S) : d = S;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        l = h;
      }
      if (d) {
        for (let S of c)
          queueMicrotask(() => {
            throw S;
          });
        throw d;
      }
    } finally {
      e.__root = t, delete e.currentTarget, de(s), te(v);
    }
  }
}
function ei(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Ie(e, t) {
  var r = (
    /** @type {Effect} */
    A
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function E(e, t) {
  var r = (t & xn) !== 0, n = (t & wn) !== 0, i, l = !e.startsWith("<!>");
  return () => {
    if (O)
      return Ie(z, null), z;
    i === void 0 && (i = ei(l ? e : "<!>" + e), r || (i = /** @type {Node} */
    /* @__PURE__ */ Se(i)));
    var a = (
      /** @type {TemplateNode} */
      n ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Se(a)
      ), u = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      Ie(o, u);
    } else
      Ie(a, a);
    return a;
  };
}
function Dr() {
  if (O)
    return Ie(z, null), z;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Re();
  return e.append(t, r), Ie(t, r), e;
}
function k(e, t) {
  if (O) {
    A.nodes_end = z, We();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const ti = ["touchstart", "touchmove"];
function ri(e) {
  return ti.includes(e);
}
let Nt = !0;
function L(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r == null ? "" : r + "");
}
function Pr(e, t) {
  return Fr(e, t);
}
function ni(e, t) {
  Et(), t.intro = t.intro ?? !1;
  const r = t.target, n = O, i = z;
  try {
    for (var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Se(r)
    ); l && (l.nodeType !== 8 || /** @type {Comment} */
    l.data !== tr); )
      l = /** @type {TemplateNode} */
      /* @__PURE__ */ ye(l);
    if (!l)
      throw je;
    pe(!0), le(
      /** @type {Comment} */
      l
    ), We();
    const a = Fr(e, { ...t, anchor: l });
    if (z === null || z.nodeType !== 8 || /** @type {Comment} */
    z.data !== Ot)
      throw It(), je;
    return pe(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === je)
      return t.recover === !1 && An(), Et(), Mr(r), pe(!1), Pr(e, t);
    throw a;
  } finally {
    pe(n), le(i);
  }
}
const Te = /* @__PURE__ */ new Map();
function Fr(e, { target: t, anchor: r, props: n = {}, events: i, context: l, intro: a = !0 }) {
  Et();
  var o = /* @__PURE__ */ new Set(), u = (v) => {
    for (var d = 0; d < v.length; d++) {
      var c = v[d];
      if (!o.has(c)) {
        o.add(c);
        var h = ri(c);
        t.addEventListener(c, Xe, { passive: h });
        var p = Te.get(c);
        p === void 0 ? (document.addEventListener(c, Xe, { passive: h }), Te.set(c, 1)) : Te.set(c, p + 1);
      }
    }
  };
  u(Rt(jr)), Ct.add(u);
  var f = void 0, s = pr(() => {
    var v = r ?? t.appendChild(Re());
    return Fe(() => {
      if (l) {
        ae({});
        var d = (
          /** @type {ComponentContext} */
          fe
        );
        d.c = l;
      }
      i && (n.$$events = i), O && Ie(
        /** @type {TemplateNode} */
        v,
        null
      ), Nt = a, f = e(v, n) || {}, Nt = !0, O && (A.nodes_end = z), l && se();
    }), () => {
      var h;
      for (var d of o) {
        t.removeEventListener(d, Xe);
        var c = (
          /** @type {number} */
          Te.get(d)
        );
        --c === 0 ? (document.removeEventListener(d, Xe), Te.delete(d)) : Te.set(d, c);
      }
      Ct.delete(u), Tt.delete(f), v !== r && ((h = v.parentNode) == null || h.removeChild(v));
    };
  });
  return Tt.set(f, s), f;
}
let Tt = /* @__PURE__ */ new WeakMap();
function ii(e) {
  const t = Tt.get(e);
  t && t();
}
function P(e, t, r, n = null, i = !1) {
  O && We();
  var l = e, a = null, o = null, u = null, f = i ? vt : 0;
  Lt(() => {
    if (u === (u = !!t())) return;
    let s = !1;
    if (O) {
      const v = (
        /** @type {Comment} */
        l.data === qt
      );
      u === v && (l = St(), le(l), pe(!1), s = !0);
    }
    u ? (a ? st(a) : a = Fe(() => r(l)), o && wt(o, () => {
      o = null;
    })) : (o ? st(o) : n && (o = Fe(() => n(l))), a && wt(a, () => {
      a = null;
    })), s && pe(!0);
  }, f), O && (l = z);
}
function F(e, t) {
  return t;
}
function li(e, t, r, n) {
  for (var i = [], l = t.length, a = 0; a < l; a++)
    jt(t[a].e, i, !0);
  var o = l > 0 && i.length === 0 && r !== null;
  if (o) {
    var u = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    Mr(u), u.append(
      /** @type {Element} */
      r
    ), n.clear(), me(e, t[0].prev, t[l - 1].next);
  }
  wr(i, () => {
    for (var f = 0; f < l; f++) {
      var s = t[f];
      o || (n.delete(s.k), me(e, s.prev, s.next)), Ce(s.e, !o);
    }
  });
}
function V(e, t, r, n, i, l = null) {
  var a = e, o = { flags: t, items: /* @__PURE__ */ new Map(), first: null };
  {
    var u = (
      /** @type {Element} */
      e
    );
    a = O ? le(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Se(u)
    ) : u.appendChild(Re());
  }
  O && We();
  var f = null, s = !1;
  Lt(() => {
    var v = r(), d = zt(v) ? v : v == null ? [] : Rt(v), c = d.length;
    if (s && c === 0)
      return;
    s = c === 0;
    let h = !1;
    if (O) {
      var p = (
        /** @type {Comment} */
        a.data === qt
      );
      p !== (c === 0) && (a = St(), le(a), pe(!1), h = !0);
    }
    if (O) {
      for (var x = null, g, y = 0; y < c; y++) {
        if (z.nodeType === 8 && /** @type {Comment} */
        z.data === Ot) {
          a = /** @type {Comment} */
          z, h = !0, pe(!1);
          break;
        }
        var S = d[y], T = n(S, y);
        g = Vr(z, o, x, null, S, T, y, i, t), o.items.set(T, g), x = g;
      }
      c > 0 && le(St());
    }
    if (!O) {
      var C = (
        /** @type {Effect} */
        R
      );
      ai(d, o, a, i, t, (C.f & oe) !== 0, n);
    }
    l !== null && (c === 0 ? f ? st(f) : f = Fe(() => l(a)) : f !== null && wt(f, () => {
      f = null;
    })), h && pe(!0), r();
  }), O && (a = z);
}
function ai(e, t, r, n, i, l, a) {
  var o = e.length, u = t.items, f = t.first, s = f, v, d = null, c = [], h = [], p, x, g, y;
  for (y = 0; y < o; y += 1) {
    if (p = e[y], x = a(p, y), g = u.get(x), g === void 0) {
      var S = s ? (
        /** @type {TemplateNode} */
        s.e.nodes_start
      ) : r;
      d = Vr(
        S,
        t,
        d,
        d === null ? t.first : d.next,
        p,
        x,
        y,
        n,
        i
      ), u.set(x, d), c = [], h = [], s = d.next;
      continue;
    }
    if (si(g, p, y), g.e.f & oe && st(g.e), g !== s) {
      if (v !== void 0 && v.has(g)) {
        if (c.length < h.length) {
          var T = h[0], C;
          d = T.prev;
          var $ = c[0], j = c[c.length - 1];
          for (C = 0; C < c.length; C += 1)
            Wt(c[C], T, r);
          for (C = 0; C < h.length; C += 1)
            v.delete(h[C]);
          me(t, $.prev, j.next), me(t, d, $), me(t, j, T), s = T, d = j, y -= 1, c = [], h = [];
        } else
          v.delete(g), Wt(g, s, r), me(t, g.prev, g.next), me(t, g, d === null ? t.first : d.next), me(t, d, g), d = g;
        continue;
      }
      for (c = [], h = []; s !== null && s.k !== x; )
        (l || !(s.e.f & oe)) && (v ?? (v = /* @__PURE__ */ new Set())).add(s), h.push(s), s = s.next;
      if (s === null)
        continue;
      g = s;
    }
    c.push(g), d = g, s = g.next;
  }
  if (s !== null || v !== void 0) {
    for (var M = v === void 0 ? [] : Rt(v); s !== null; )
      (l || !(s.e.f & oe)) && M.push(s), s = s.next;
    var ke = M.length;
    if (ke > 0) {
      var re = o === 0 ? r : null;
      li(t, M, re, u);
    }
  }
  A.first = t.first && t.first.e, A.last = d && d.e;
}
function si(e, t, r, n) {
  fr(e.v, t), e.i = r;
}
function Vr(e, t, r, n, i, l, a, o, u) {
  var f = (u & vn) !== 0, s = (u & hn) === 0, v = f ? s ? /* @__PURE__ */ Mt(i) : ee(i) : i, d = u & cn ? ee(a) : a, c = {
    i: d,
    v,
    k: l,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: n
  };
  try {
    return c.e = Fe(() => o(e, v, d), O), c.e.prev = r && r.e, c.e.next = n && n.e, r === null ? t.first = c : (r.next = c, r.e.next = c.e), n !== null && (n.prev = c, n.e.prev = c.e), c;
  } finally {
  }
}
function Wt(e, t, r) {
  for (var n = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : r, i = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : r, l = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); l !== n; ) {
    var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ye(l)
    );
    i.before(l), l = a;
  }
}
function me(e, t, r) {
  t === null ? e.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
}
function Br(e, t, r, n, i) {
  var o;
  O && We();
  var l = (o = t.$$slots) == null ? void 0 : o[r], a = !1;
  l === !0 && (l = t.children, a = !0), l === void 0 || l(e, a ? () => n : n);
}
function U(e, t) {
  Er(() => {
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
function _t(e) {
  if (O) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var n = e.value;
          q(e, "value", null), e.value = n;
        }
        if (e.hasAttribute("checked")) {
          var i = e.checked;
          q(e, "checked", null), e.checked = i;
        }
      }
    };
    e.__on_r = r, Pn(r), Hr();
  }
}
function q(e, t, r, n) {
  var i = e.__attributes ?? (e.__attributes = {});
  O && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || i[t] !== (i[t] = r) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[Cn] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && oi(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
var Zt = /* @__PURE__ */ new Map();
function oi(e) {
  var t = Zt.get(e.nodeName);
  if (t) return t;
  Zt.set(e.nodeName, t = []);
  for (var r, n = xt(e), i = Element.prototype; i !== n; ) {
    r = yn(n);
    for (var l in r)
      r[l].set && t.push(l);
    n = xt(n);
  }
  return t;
}
function rt(e, t) {
  var r = e.__className, n = ui(t);
  O && e.className === n ? e.__className = n : (r !== n || O && e.className !== n) && (t == null ? e.removeAttribute("class") : e.className = n, e.__className = n);
}
function ui(e) {
  return e ?? "";
}
function Dt(e, t, r) {
  if (r) {
    if (e.classList.contains(t)) return;
    e.classList.add(t);
  } else {
    if (!e.classList.contains(t)) return;
    e.classList.remove(t);
  }
}
const fi = () => performance.now(), be = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (e) => requestAnimationFrame(e)
  ),
  now: () => fi(),
  tasks: /* @__PURE__ */ new Set()
};
function Ur(e) {
  be.tasks.forEach((t) => {
    t.c(e) || (be.tasks.delete(t), t.f());
  }), be.tasks.size !== 0 && be.tick(Ur);
}
function di(e) {
  let t;
  return be.tasks.size === 0 && be.tick(Ur), {
    promise: new Promise((r) => {
      be.tasks.add(t = { c: e, f: r });
    }),
    abort() {
      be.tasks.delete(t);
    }
  };
}
function Qe(e, t) {
  e.dispatchEvent(new CustomEvent(t));
}
function vi(e) {
  if (e === "float") return "cssFloat";
  if (e === "offset") return "cssOffset";
  if (e.startsWith("--")) return e;
  const t = e.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(
    /** @param {any} word */
    (r) => r[0].toUpperCase() + r.slice(1)
  ).join("");
}
function Xt(e) {
  const t = {}, r = e.split(";");
  for (const n of r) {
    const [i, l] = n.split(":");
    if (!i || l === void 0) break;
    const a = vi(i.trim());
    t[a] = l.trim();
  }
  return t;
}
const ci = (e) => e;
function hi(e, t, r, n) {
  var i = (e & bn) !== 0, l = "both", a, o = t.inert, u, f;
  function s() {
    var p = R, x = A;
    de(null), te(null);
    try {
      return a ?? (a = r()(t, (n == null ? void 0 : n()) ?? /** @type {P} */
      {}, {
        direction: l
      }));
    } finally {
      de(p), te(x);
    }
  }
  var v = {
    is_global: i,
    in() {
      t.inert = o, Qe(t, "introstart"), u = At(t, s(), f, 1, () => {
        Qe(t, "introend"), u == null || u.abort(), u = a = void 0;
      });
    },
    out(p) {
      t.inert = !0, Qe(t, "outrostart"), f = At(t, s(), u, 0, () => {
        Qe(t, "outroend"), p == null || p();
      });
    },
    stop: () => {
      u == null || u.abort(), f == null || f.abort();
    }
  }, d = (
    /** @type {Effect} */
    A
  );
  if ((d.transitions ?? (d.transitions = [])).push(v), Nt) {
    var c = i;
    if (!c) {
      for (var h = (
        /** @type {Effect | null} */
        d.parent
      ); h && h.f & vt; )
        for (; (h = h.parent) && !(h.f & dt); )
          ;
      c = !h || (h.f & lr) !== 0;
    }
    c && ct(() => {
      $t(() => v.in());
    });
  }
}
function At(e, t, r, n, i) {
  var l = n === 1;
  if (En(t)) {
    var a, o = !1;
    return Er(() => {
      if (!o) {
        var x = t({ direction: l ? "in" : "out" });
        a = At(e, x, r, n, i);
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
      abort: Le,
      deactivate: Le,
      reset: Le,
      t: () => n
    };
  const { delay: u = 0, css: f, tick: s, easing: v = ci } = t;
  var d = [];
  if (l && r === void 0 && (s && s(0, 1), f)) {
    var c = Xt(f(0, 1));
    d.push(c, c);
  }
  var h = () => 1 - n, p = e.animate(d, { duration: u });
  return p.onfinish = () => {
    var x = (r == null ? void 0 : r.t()) ?? 1 - n;
    r == null || r.abort();
    var g = n - x, y = (
      /** @type {number} */
      t.duration * Math.abs(g)
    ), S = [];
    if (y > 0) {
      if (f)
        for (var T = Math.ceil(y / 16.666666666666668), C = 0; C <= T; C += 1) {
          var $ = x + g * v(C / T), j = f($, 1 - $);
          S.push(Xt(j));
        }
      h = () => {
        var M = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          p.currentTime
        );
        return x + g * v(M / y);
      }, s && di(() => {
        if (p.playState !== "running") return !1;
        var M = h();
        return s(M, 1 - M), !0;
      });
    }
    p = e.animate(S, { duration: y, fill: "forwards" }), p.onfinish = () => {
      h = () => n, s == null || s(n, 1 - n), i();
    };
  }, {
    abort: () => {
      p && (p.cancel(), p.effect = null, p.onfinish = Le);
    },
    deactivate: () => {
      i = Le;
    },
    reset: () => {
      n === 0 && (s == null || s(1, 0));
    },
    t: () => h()
  };
}
function gt(e, t, r = t) {
  Lr(e, "input", () => {
    var n = Qt(e) ? er(e.value) : e.value;
    r(n), n !== (n = t()) && (e.value = n ?? "");
  }), _r(() => {
    var n = t();
    if (O && e.defaultValue !== e.value) {
      r(e.value);
      return;
    }
    Qt(e) && n === er(e.value) || e.type === "date" && !n && !e.value || n !== e.value && (e.value = n ?? "");
  });
}
function Qt(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function er(e) {
  return e === "" ? null : +e;
}
function Yr(e, t, r) {
  if (e.multiple)
    return gi(e, t);
  for (var n of e.options) {
    var i = Pe(n);
    if (Xn(i, t)) {
      n.selected = !0;
      return;
    }
  }
  (!r || t !== void 0) && (e.selectedIndex = -1);
}
function pi(e, t) {
  ct(() => {
    var r = new MutationObserver(() => {
      var n = e.__value;
      Yr(e, n);
    });
    return r.observe(e, {
      // Listen to option element changes
      childList: !0,
      subtree: !0,
      // because of <optgroup>
      // Listen to option element value attribute changes
      // (doesn't get notified of select value changes,
      // because that property is not reflected as an attribute)
      attributes: !0,
      attributeFilter: ["value"]
    }), () => {
      r.disconnect();
    };
  });
}
function _i(e, t, r = t) {
  var n = !0;
  Lr(e, "change", () => {
    var i;
    if (e.multiple)
      i = [].map.call(e.querySelectorAll(":checked"), Pe);
    else {
      var l = e.querySelector(":checked");
      i = l && Pe(l);
    }
    r(i);
  }), ct(() => {
    var i = t();
    if (Yr(e, i, n), n && i === void 0) {
      var l = e.querySelector(":checked");
      l !== null && (i = Pe(l), r(i));
    }
    e.__value = i, n = !1;
  }), pi(e);
}
function gi(e, t) {
  for (var r of e.options)
    r.selected = ~t.indexOf(Pe(r));
}
function Pe(e) {
  return "__value" in e ? e.__value : e.value;
}
let et = !1;
function mi(e) {
  var t = et;
  try {
    return et = !1, [e(), et];
  } finally {
    et = t;
  }
}
function bi(e) {
  for (var t = A, r = A; t !== null && !(t.f & (ve | Ue)); )
    t = t.parent;
  try {
    return te(t), e();
  } finally {
    te(r);
  }
}
function w(e, t, r, n) {
  var C;
  var i = (r & pn) !== 0, l = !ur, a = (r & gn) !== 0, o = (r & mn) !== 0, u = !1, f;
  a ? [f, u] = mi(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t];
  var s = (C = Ee(e, t)) == null ? void 0 : C.set, v = (
    /** @type {V} */
    n
  ), d = !0, c = !1, h = () => (c = !0, d && (d = !1, o ? v = $t(
    /** @type {() => V} */
    n
  ) : v = /** @type {V} */
  n), v);
  f === void 0 && n !== void 0 && (s && l && qn(), f = h(), s && s(f));
  var p;
  if (p = () => {
    var $ = (
      /** @type {V} */
      e[t]
    );
    return $ === void 0 ? h() : (d = !0, c = !1, $);
  }, !(r & _n))
    return p;
  if (s) {
    var x = e.$$legacy;
    return function($, j) {
      return arguments.length > 0 ? ((!j || x || u) && s(j ? p() : $), $) : p();
    };
  }
  var g = !1, y = !1, S = /* @__PURE__ */ Mt(f), T = bi(
    () => /* @__PURE__ */ Hn(() => {
      var $ = p(), j = m(S);
      return g ? (g = !1, y = !0, j) : (y = !1, S.v = $);
    })
  );
  return i || (T.equals = or), function($, j) {
    if (arguments.length > 0) {
      const M = j ? m(T) : a ? H($) : $;
      return T.equals(M) || (g = !0, D(S, M), c && v !== void 0 && (v = M), $t(() => m(T))), $;
    }
    return m(T);
  };
}
function xi(e) {
  return new wi(e);
}
var he, Q;
class wi {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    mt(this, he);
    /** @type {Record<string, any>} */
    mt(this, Q);
    var l;
    var r = /* @__PURE__ */ new Map(), n = (a, o) => {
      var u = /* @__PURE__ */ Mt(o);
      return r.set(a, u), u;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, o) {
          return m(r.get(o) ?? n(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return m(r.get(o) ?? n(o, Reflect.get(a, o))), Reflect.has(a, o);
        },
        set(a, o, u) {
          return D(r.get(o) ?? n(o, u), u), Reflect.set(a, o, u);
        }
      }
    );
    bt(this, Q, (t.hydrate ? ni : Pr)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((l = t == null ? void 0 : t.props) != null && l.$$host) || t.sync === !1) && Ir(), bt(this, he, i.$$events);
    for (const a of Object.keys(J(this, Q)))
      a === "$set" || a === "$destroy" || a === "$on" || lt(this, a, {
        get() {
          return J(this, Q)[a];
        },
        /** @param {any} value */
        set(o) {
          J(this, Q)[a] = o;
        },
        enumerable: !0
      });
    J(this, Q).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, J(this, Q).$destroy = () => {
      ii(J(this, Q));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    J(this, Q).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    J(this, he)[t] = J(this, he)[t] || [];
    const n = (...i) => r.call(this, ...i);
    return J(this, he)[t].push(n), () => {
      J(this, he)[t] = J(this, he)[t].filter(
        /** @param {any} fn */
        (i) => i !== n
      );
    };
  }
  $destroy() {
    J(this, Q).$destroy();
  }
}
he = new WeakMap(), Q = new WeakMap();
let Gr;
typeof HTMLElement == "function" && (Gr = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    ie(this, "$$ctor");
    /** Slots */
    ie(this, "$$s");
    /** @type {any} The Svelte component instance */
    ie(this, "$$c");
    /** Whether or not the custom element is connected */
    ie(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    ie(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    ie(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    ie(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    ie(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    ie(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    ie(this, "$$me");
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
        return (l) => {
          const a = document.createElement("slot");
          i !== "default" && (a.name = i), k(l, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = yi(this);
      for (const i of this.$$s)
        i in n && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), r.default = !0) : r[i] = t(i));
      for (const i of this.attributes) {
        const l = this.$$g_p(i.name);
        l in this.$$d || (this.$$d[l] = nt(l, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = xi({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = pr(() => {
        _r(() => {
          var i;
          this.$$r = !0;
          for (const l of it(this.$$c)) {
            if (!((i = this.$$p_d[l]) != null && i.reflect)) continue;
            this.$$d[l] = this.$$c[l];
            const a = nt(
              l,
              this.$$d[l],
              this.$$p_d,
              "toAttribute"
            );
            a == null ? this.removeAttribute(this.$$p_d[l].attribute || l) : this.setAttribute(this.$$p_d[l].attribute || l, a);
          }
          this.$$r = !1;
        });
      });
      for (const i in this.$$l)
        for (const l of this.$$l[i]) {
          const a = this.$$c.$on(i, l);
          this.$$l_u.set(l, a);
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = nt(t, n, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
    return it(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function nt(e, t, r, n) {
  var l;
  const i = (l = r[e]) == null ? void 0 : l.type;
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
function yi(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Y(e, t, r, n, i, l) {
  let a = class extends Gr {
    constructor() {
      super(e, r, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return it(t).map(
        (o) => (t[o].attribute || o).toLowerCase()
      );
    }
  };
  return it(t).forEach((o) => {
    lt(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(u) {
        var v;
        u = nt(o, u, t), this.$$d[o] = u;
        var f = this.$$c;
        if (f) {
          var s = (v = Ee(f, o)) == null ? void 0 : v.get;
          s ? f[o] = u : f.$set({ [o]: u });
        }
      }
    });
  }), n.forEach((o) => {
    lt(a.prototype, o, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[o];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
var ki = /* @__PURE__ */ E('<button type="button"><!></button>');
const $i = {
  hash: "svelte-1bto172",
  code: ".button.svelte-1bto172 {display:inline-block;cursor:pointer;border:0;margin-left:14px;border-radius:3em;font-weight:700;line-height:1;font-family:'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;}.button--primary.svelte-1bto172 {background-color:#1ea7fd;color:white;}.button--secondary.svelte-1bto172 {box-shadow:rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;background-color:transparent;color:#333;}.button--small.svelte-1bto172 {padding:10px 16px;font-size:12px;}.button--medium.svelte-1bto172 {padding:11px 20px;font-size:14px;}.button--large.svelte-1bto172 {padding:12px 24px;font-size:16px;}"
};
function Ei(e, t) {
  U(e, $i);
  const r = w(t, "type", 3, "primary"), n = w(t, "size", 3, "medium");
  w(t, "label", 3, "Button");
  const i = w(t, "onClick", 3, void 0);
  var l = ki();
  l.__click = function(...o) {
    var u;
    (u = i()) == null || u.apply(this, o);
  };
  var a = b(l);
  Br(a, t, "default", {}), _(l), I(() => rt(l, `${"button button--" + n() + " button--" + r()} svelte-1bto172`)), k(e, l);
}
ce(["click"]);
customElements.define("mapp-button", Y(Ei, { type: {}, size: {}, label: {}, onClick: {} }, ["default"], [], !0));
var Si = /* @__PURE__ */ E('<div class="input_label svelte-1hyy719"> </div>'), Ci = /* @__PURE__ */ E('<span class="input_icon svelte-1hyy719"><img width="16px" alt="in"></span>'), Ni = (e, t) => {
  t(e);
}, Ti = /* @__PURE__ */ E('<div class="input_frame svelte-1hyy719"><!> <div class="input_box svelte-1hyy719"><!> <input class="input_field svelte-1hyy719"></div></div>');
const Ai = {
  hash: "svelte-1hyy719",
  code: `.input_frame.svelte-1hyy719 {padding-right:24px;margin-bottom:14px;}.input_label.svelte-1hyy719 {margin-bottom:6px;}.input_box.svelte-1hyy719 {display:flex;color:#4a5073;background-color:#fff;border:0.0625rem solid #d1d7e0;border-radius:0.5rem;
    /* padding-right: 14px; */}.input_icon.svelte-1hyy719 {width:32px;position:relative;top:12px;left:9px;}.input_field.svelte-1hyy719 {box-shadow:none;width:280px;border:0.0625rem solid #d1d7e0;color:#66799e;background-color:transparent;background-clip:padding-box;appearance:none;border:transparent;height:40px;font-size:16px;border-style:none;border-radius:0.5rem;margin-left:4px;margin-right:8px;width:98%;}.input_field.svelte-1hyy719:focus {outline:none;}`
};
function Jr(e, t) {
  ae(t, !0), U(e, Ai);
  let r = w(t, "label", 3, ""), n = w(t, "icon", 3, ""), i = w(t, "type", 3, "text"), l = w(t, "placeholder", 3, ""), a = w(t, "input", 15, ""), o = w(t, "style", 3, "");
  const u = (h) => {
    h && h.target && h.target.value && t.$$host && t.$$host.dispatchEvent(new CustomEvent("update", { detail: { input: h.target.value } }));
  };
  var f = Ti(), s = b(f);
  P(s, r, (h) => {
    var p = Si(), x = b(p, !0);
    _(p), I(() => L(x, r())), k(h, p);
  });
  var v = N(s, 2), d = b(v);
  P(d, n, (h) => {
    var p = Ci(), x = b(p);
    _(p), I(() => q(x, "src", n())), k(h, p);
  });
  var c = N(d, 2);
  _t(c), c.__input = [Ni, u], _(v), _(f), I(() => {
    q(f, "style", o()), q(c, "type", i()), q(c, "placeholder", l());
  }), gt(c, a), k(e, f), se();
}
ce(["input"]);
customElements.define("apint-input", Y(
  Jr,
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
var qi = /* @__PURE__ */ E('<span class="user_button svelte-gns4bd"><img class="msg_icon svelte-gns4bd" alt="alerts" src="bell.svg"> <span class="msg_new svelte-gns4bd"></span> <img class="user_icon svelte-gns4bd" alt="profile"> <span class="user_name svelte-gns4bd"> </span></span>'), Oi = /* @__PURE__ */ E("<span></span>"), Ii = /* @__PURE__ */ E('<div class="header svelte-gns4bd"><div style="width: 364px;"><!> <span></span></div> <div><!></div></div>');
const zi = {
  hash: "svelte-gns4bd",
  code: ".header.svelte-gns4bd {display:flex;justify-content:space-between;align-items:center;padding:26px 20px;font-family:'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;}.msg_icon.svelte-gns4bd {width:20px;margin-right:22px;}.msg_new.svelte-gns4bd {background-color:red;height:7px;width:7px;border-radius:50% !important;position:relative;top:4px;left:-22px;}.user_button.svelte-gns4bd {display:flex;position:relative;top:-6px;}.user_button.svelte-gns4bd:hover {cursor:pointer;}.user_name.svelte-gns4bd {padding-top:12px;padding-left:8px;}.user_icon.svelte-gns4bd {border-radius:50% !important;width:40px;}"
};
function Kr(e, t) {
  U(e, zi), w(t, "title", 3, "Apint.org");
  const r = w(t, "searchicon", 3, ""), n = w(t, "supportuser", 3, !1), i = w(t, "username", 3, ""), l = w(t, "userpic", 3, "");
  let a = "";
  var o = Ii(), u = b(o), f = b(u);
  Jr(f, {
    get icon() {
      return r();
    },
    placeholder: "Search",
    input: a
  });
  var s = N(f, 2);
  s.textContent = a, _(u);
  var v = N(u, 2), d = b(v);
  P(
    d,
    n,
    (c) => {
      var h = qi(), p = N(b(h), 4), x = N(p, 2), g = b(x, !0);
      _(x), _(h), I(() => {
        q(p, "src", l()), L(g, i());
      }), k(c, h);
    },
    (c) => {
      var h = Dr(), p = He(h);
      P(
        p,
        n,
        (x) => {
          var g = Oi();
          k(x, g);
        },
        null,
        !0
      ), k(c, h);
    }
  ), _(v), _(o), k(e, o);
}
customElements.define("mapp-headerlite", Y(
  Kr,
  {
    title: {},
    searchicon: {},
    supportuser: {},
    username: {},
    userpic: {}
  },
  [],
  [],
  !0
));
function Ri(e) {
  const t = e - 1;
  return t * t * t + 1;
}
function Mi(e, { delay: t = 0, duration: r = 400, easing: n = Ri, axis: i = "y" } = {}) {
  const l = getComputedStyle(e), a = +l.opacity, o = i === "y" ? "height" : "width", u = parseFloat(l[o]), f = i === "y" ? ["top", "bottom"] : ["left", "right"], s = f.map(
    (g) => (
      /** @type {'Left' | 'Right' | 'Top' | 'Bottom'} */
      `${g[0].toUpperCase()}${g.slice(1)}`
    )
  ), v = parseFloat(l[`padding${s[0]}`]), d = parseFloat(l[`padding${s[1]}`]), c = parseFloat(l[`margin${s[0]}`]), h = parseFloat(l[`margin${s[1]}`]), p = parseFloat(
    l[`border${s[0]}Width`]
  ), x = parseFloat(
    l[`border${s[1]}Width`]
  );
  return {
    delay: t,
    duration: r,
    easing: n,
    css: (g) => `overflow: hidden;opacity: ${Math.min(g * 20, 1) * a};${o}: ${g * u}px;padding-${f[0]}: ${g * v}px;padding-${f[1]}: ${g * d}px;margin-${f[0]}: ${g * c}px;margin-${f[1]}: ${g * h}px;border-${f[0]}-width: ${g * p}px;border-${f[1]}-width: ${g * x}px;`
  };
}
function Hi(e) {
  return e;
}
var Li = (e, t, r) => t(m(r).title), ji = /* @__PURE__ */ E('<img alt="option" width="18px">'), Di = /* @__PURE__ */ E('<svg width="18px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-pie" class="svg-inline--fa fa-chart-pie fa-w-17 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512"><path fill="currentColor" d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"></path></svg>'), Pi = /* @__PURE__ */ E('<span><svg class="icon icon-sm" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span>'), Fi = (e, t, r) => t(m(r).title), Vi = /* @__PURE__ */ E('<a><span><span class="menu_item_icon svelte-v1mgvt"></span> <span class="menu_item_text"> </span></span></a>'), Bi = /* @__PURE__ */ E('<div class="menu_item_frame svelte-v1mgvt"></div>'), Ui = /* @__PURE__ */ E('<a><span><span class="menu_item_icon svelte-v1mgvt"><!></span> <span class="menu_item_text"> </span> <!></span></a> <!>', 1), Yi = /* @__PURE__ */ E('<div class="outer_frame svelte-v1mgvt"><div class="left_menu svelte-v1mgvt"><div class="menu_frame svelte-v1mgvt"></div></div> <div class="right_panel svelte-v1mgvt"><!> <div class="right_panel_content svelte-v1mgvt"><!></div></div></div>');
const Gi = {
  hash: "svelte-v1mgvt",
  code: `a.svelte-v1mgvt:link {text-decoration:none;}a.svelte-v1mgvt:visited {text-decoration:none;color:#eaedf2;}a.svelte-v1mgvt:hover {text-decoration:none;color:#eaedf2;}a.svelte-v1mgvt:active {text-decoration:none;}.outer_frame.svelte-v1mgvt {position:fixed;left:0px;top:0px;display:flex;height:100vh;width:100vw;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}.left_menu.svelte-v1mgvt {display:flex;flex-flow:row nowrap;width:260px !important;min-width:260px;height:100%;background-color:#262b40 !important;color:#eaedf2;}.menu_frame.svelte-v1mgvt {margin:20px 30px 20px 30px;width:100%;}.menu_item.svelte-v1mgvt {display:block;width:100%;text-align:left;padding:10px 0px;color:#eaedf2;border-radius:.5rem;margin-bottom:8px;border:.0625rem solid transparent;}.menu_item.svelte-v1mgvt:hover {background-color:#2e3650;}.menu_item_active.svelte-v1mgvt {background-color:#2e3650;border:.0625rem solid #4c5680;}.menu_item_icon.svelte-v1mgvt {display:inline-block;margin-left:12px;margin-right:.5rem;color:#fff;position:relative;top:3px;width:18px;}.menu_item_expand.svelte-v1mgvt {float:right;width:22px;}.expanded.svelte-v1mgvt {position:relative;
    /* left: -4px; */
    /* top: -2px; */transform:rotate(90deg) translateX(-2px) translateY(4px);transition:all 0.2s ease;}.menu_item_frame.svelte-v1mgvt {width:100%;}.right_panel.svelte-v1mgvt {color:#4a5073;background-color:#f5f8fb;flex:auto;height:100%;overflow-y:auto;}.right_panel_content.svelte-v1mgvt {padding:0px 20px;}`
};
function Ji(e, t) {
  ae(t, !0), U(e, Gi), w(t, "title", 3, "Mapp"), w(t, "icon", 3, "");
  let r = w(t, "searchicon", 3, ""), n = w(t, "supportuser", 3, !0), i = w(t, "username", 3, ""), l = w(t, "userpic", 3, ""), a = w(t, "activeitem", 3, ""), o = w(t, "menuconfig", 7, void 0);
  typeof o() == "string" && o(JSON.parse(o()));
  let u = H({}), f = (g) => {
    u[g] ? u[g] = !u[g] : u[g] = !0;
  };
  var s = Yi(), v = b(s), d = b(v);
  V(d, 21, () => o().items, F, (g, y) => {
    var S = Ui(), T = He(S);
    T.__click = [Li, f, y];
    var C = b(T), $ = b(C), j = b($);
    P(
      j,
      () => m(y).icon,
      (K) => {
        var G = ji();
        I(() => q(G, "src", m(y).icon)), k(K, G);
      },
      (K) => {
        var G = Di();
        k(K, G);
      }
    ), _($);
    var M = N($, 2), ke = b(M, !0);
    _(M);
    var re = N(M, 2);
    P(re, () => m(y).subitems, (K) => {
      var G = Pi();
      I(() => rt(G, `${(u[m(y).title] ? "menu_item_expand expanded" : "menu_item_expand") ?? ""} svelte-v1mgvt`)), k(K, G);
    }), _(C), _(T);
    var ne = N(T, 2);
    P(ne, () => u[m(y).title] && m(y).subitems, (K) => {
      var G = Bi();
      V(G, 21, () => m(y).subitems, F, (sn, Ze) => {
        var Ne = Vi();
        Ne.__click = [Fi, f, Ze];
        var Pt = b(Ne), Ft = N(b(Pt), 2), on = b(Ft, !0);
        _(Ft), _(Pt), _(Ne), I(() => {
          q(Ne, "href", m(Ze).url), rt(Ne, `${(m(Ze).title == a() ? "menu_item menu_item_active" : "menu_item") ?? ""} svelte-v1mgvt`), L(on, m(Ze).title);
        }), k(sn, Ne);
      }), _(G), hi(3, G, () => Mi, () => ({ duration: 300, easing: Hi })), k(K, G);
    }), I(() => {
      q(T, "href", m(y).url), rt(T, `${(m(y).title == a() ? "menu_item menu_item_active" : "menu_item") ?? ""} svelte-v1mgvt`), L(ke, m(y).title);
    }), k(g, S);
  }), _(d), _(v);
  var c = N(v, 2), h = b(c);
  Kr(h, {
    get searchicon() {
      return r();
    },
    get supportuser() {
      return n();
    },
    get username() {
      return i();
    },
    get userpic() {
      return l();
    }
  });
  var p = N(h, 2), x = b(p);
  Br(x, t, "default", {}), _(p), _(c), _(s), k(e, s), se();
}
ce(["click"]);
customElements.define("mapp-menu", Y(
  Ji,
  {
    title: {},
    icon: {},
    searchicon: {},
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
function Ki(e, t, r, n, i, l) {
  if (m(t)) {
    let a = [];
    for (let o of r()) {
      let u = !1;
      for (let f of n())
        if ((i().length === 0 || i().includes(f)) && o[f].toString().toLowerCase().includes(m(t).toLowerCase())) {
          u = !0;
          break;
        }
      u && a.push(o);
    }
    D(l, H(a));
  } else
    D(l, H(r()));
}
var Wi = /* @__PURE__ */ E('<th class="svelte-15ql2st"> </th>'), Zi = /* @__PURE__ */ E('<td class="svelte-15ql2st"><a class="table_row svelte-15ql2st"> </a></td>'), Xi = /* @__PURE__ */ E('<tr class="svelte-15ql2st"></tr>'), Qi = /* @__PURE__ */ E('<div class="card_frame svelte-15ql2st"><div class="filter svelte-15ql2st"><svg data-icon-name="filterIcon" viewBox="0 0 18 18" width="18" height="18" aria-hidden="true"><path fill-rule="evenodd" d="M2 4h14v2H2V4zm2 4h10v2H4V8zm2 4h6v2H6v-2z"></path></svg> <span class="filter_input_box svelte-15ql2st">Filter <input class="filter_input svelte-15ql2st" placeholder="Value to filter for"></span></div> <table class="svelte-15ql2st"><thead class="svelte-15ql2st"><tr class="svelte-15ql2st"></tr></thead><tbody class="svelte-15ql2st"></tbody></table></div>');
const el = {
  hash: "svelte-15ql2st",
  code: `.card_frame.svelte-15ql2st {border-color:#eaedf2 !important;box-shadow:0 2px 18px rgba(0, 0, 0, 0.02) !important;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:0.0625rem solid rgba(46, 54, 80, 0.125);border-radius:0.5rem;padding:22px 32px;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}table.svelte-15ql2st {width:100%;margin-bottom:1rem;color:#4a5073;vertical-align:top;border-color:#eaedf2;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;border-collapse:collapse;}table.svelte-15ql2st thead:where(.svelte-15ql2st) tr:where(.svelte-15ql2st) th:where(.svelte-15ql2st) {vertical-align:center;text-align:left;border-bottom:1px solid #eaedf2 !important;font-size:12px;font-weight:bold;padding-left:14px;padding-bottom:10px;}.table_row.svelte-15ql2st {padding-left:14px;padding-top:14px;padding-bottom:14px;border-bottom:1px solid #eaedf2 !important;}table.svelte-15ql2st tbody:where(.svelte-15ql2st) tr:where(.svelte-15ql2st):hover {background-color:#eff0f2;cursor:pointer;border-radius:0.5rem;}a.svelte-15ql2st:link {text-decoration:none;color:#4a5073;}a.svelte-15ql2st:visited {text-decoration:none;color:#4a5073;}a.svelte-15ql2st:hover {text-decoration:none;color:#4a5073;}a.svelte-15ql2st:active {text-decoration:none;}td.svelte-15ql2st a:where(.svelte-15ql2st) {display:block;}.filter.svelte-15ql2st {margin-top:20px;margin-bottom:8px;margin-left:8px;}.filter_input_box.svelte-15ql2st {position:relative;top:-3px;font-weight:bold;font-size:14px;}.filter_input.svelte-15ql2st {width:50%;margin-left:8px;font-family:Google Sans,
      Roboto,
      Helvetica,
      Arial,
      sans-serif;padding:var(--padding);
    /* border: 2px solid gray; */border:0px;outline:none;border-radius:0px;
    /* background-color: #f1f3f4; */background-color:rgb(255, 255, 255);}`
};
function tl(e, t) {
  ae(t, !0), U(e, el);
  let r = w(t, "headers", 23, () => []), n = w(t, "headerssearchable", 23, () => []), i = w(t, "rows", 23, () => []), l = w(t, "linkprefix", 3, ""), a = w(t, "linkcolumnname", 3, ""), o = w(t, "update", 3, void 0);
  typeof r() == "string" && r(JSON.parse(r())), typeof n() == "string" && n(JSON.parse(n())), typeof i() == "string" && i(JSON.parse(i()));
  let u = ze(H(i())), f = ze("");
  const s = (S) => {
    t.$$host.dispatchEvent(new CustomEvent("update", { detail: { rowIndex: S } })), o() && o()({ detail: { rowIndex: S } });
  };
  var v = Qi(), d = b(v), c = N(b(d), 2), h = N(b(c));
  _t(h), h.__keyup = [
    Ki,
    f,
    i,
    r,
    n,
    u
  ], _(c), _(d);
  var p = N(d, 2), x = b(p), g = b(x);
  V(g, 21, r, F, (S, T) => {
    var C = Wi(), $ = b(C, !0);
    _(C), I(() => L($, m(T))), k(S, C);
  }), _(g), _(x);
  var y = N(x);
  V(y, 21, () => m(u), F, (S, T, C) => {
    var $ = Xi();
    $.__click = () => {
      s(C);
    }, V($, 21, () => Object.entries(m(T)), F, (M, ke) => {
      var re = Zi(), ne = b(re), K = b(ne, !0);
      _(ne), _(re), I(() => {
        q(ne, "href", l() + m(T)[a()]), L(K, m(ke)[1]);
      }), k(M, re);
    }), _($), k(S, $);
  }), _(y), _(p), _(v), gt(h, () => m(f), (S) => D(f, S)), k(e, v), se();
}
ce(["keyup", "click"]);
customElements.define("mapp-table", Y(
  tl,
  {
    headers: {},
    headerssearchable: {},
    rows: {},
    linkprefix: {},
    linkcolumnname: {},
    update: {}
  },
  [],
  [],
  !0
));
var rl = /* @__PURE__ */ E('<div class="menu_item svelte-uzkebs"><a href="https://google.com" target="_blank"> </a></div>'), nl = /* @__PURE__ */ E('<div class="menu_frame svelte-uzkebs"><div class="arrow svelte-uzkebs"></div> <div class="menu svelte-uzkebs"></div></div>');
const il = {
  hash: "svelte-uzkebs",
  code: '.menu_frame.svelte-uzkebs {position:fixed;min-width:200px;min-height:200px;max-width:180px;background:#fff;box-shadow:#00000026 0 2px 10px;border:1px solid rgb(242, 242, 242);z-index:6;}.arrow.svelte-uzkebs {position:relative;top:-31px;left:163px;border:1px solid rgb(242, 242, 242);box-shadow:#00000026 -1px -1px 1px -1px;transform:rotate(45deg) translate(16px, 16px);background:#fff;height:14px;width:14px;display:block;content:"";pointer-events:none;z-index:1;}.menu.svelte-uzkebs {position:relative;top:-16px;background:#fff;min-height:140px;z-index:2;padding:14px;}.menu_item.svelte-uzkebs {height:14px;width:100%;font-size:18px;padding-bottom:12px;}'
};
function Wr(e, t) {
  U(e, il);
  let r = w(t, "top", 3, "54px"), n = w(t, "left", 3, "12px"), i = w(t, "menuItems", 19, () => []);
  var l = nl(), a = N(b(l), 2);
  V(a, 21, i, F, (o, u) => {
    var f = rl(), s = b(f), v = b(s, !0);
    _(s), _(f), I(() => L(v, m(u).title)), k(o, f);
  }), _(a), _(l), I(() => q(l, "style", `top: ${r()}; left: ${n()}`)), k(e, l);
}
customElements.define("mountainview-elegant-dropdown", Y(Wr, { top: {}, left: {}, menuItems: {} }, [], [], !0));
var ll = /* @__PURE__ */ E('<img class="title_logo" alt="logo" width="36px" height="34px" style="padding: 6px; margin-top: 4px;">'), al = /* @__PURE__ */ E('<span class="title_text svelte-1bu8l9f"> </span>'), sl = /* @__PURE__ */ E('<a href="https://google.com" target="_blank" class="title svelte-1bu8l9f"><!> <!></a>'), ol = (e, t, r) => t(e, m(r).title), ul = /* @__PURE__ */ E('<button class="menu_button svelte-1bu8l9f"><img class="menu_icon svelte-1bu8l9f"></button> <!>', 1), fl = /* @__PURE__ */ E('<div class="header svelte-1bu8l9f"><!> <div class="right_menus svelte-1bu8l9f"></div></div>');
const dl = {
  hash: "svelte-1bu8l9f",
  code: ".header.svelte-1bu8l9f {display:flex;flex-flow:row wrap;justify-content:space-between;align-items:flex-start;background-color:rgba(255, 255, 255, 1);height:57px;font-weight:560;color:#333;font-size:20px;padding:0px;margin:0px;position:sticky;top:0;z-index:2;border-bottom:solid 1px rgba(222, 222, 222, 1);}.title.svelte-1bu8l9f {height:100%;display:flex;margin-left:12px;color:#111;font-family:'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;}.title.svelte-1bu8l9f:link {text-decoration:none;}.title.svelte-1bu8l9f:visited {text-decoration:none;color:#222;}.title.svelte-1bu8l9f:hover {text-decoration:none;color:darkgray}.title.svelte-1bu8l9f:active {text-decoration:none;}.title_text.svelte-1bu8l9f {display:flex;align-items:center;}.right_menus.svelte-1bu8l9f {display:flex;height:100%;flex:auto;flex-flow:row-reverse;}.menu_button.svelte-1bu8l9f {height:100%;display:flex;align-items:center;margin-right:18px;cursor:pointer;border:0px;background-color:transparent;}.menu_icon.svelte-1bu8l9f {height:30px;width:30px;object-fit:cover;}.menu_icon.svelte-1bu8l9f:hover {cursor:pointer;}.round.svelte-1bu8l9f {height:40px;width:40px;border-radius:50%;}"
};
function Zr(e, t) {
  ae(t, !0), U(e, dl);
  let r = w(t, "title", 3, ""), n = w(t, "logoUrl", 3, ""), i = w(t, "menus", 23, () => []);
  typeof i() == "string" && i(JSON.parse(i()));
  let l = H({});
  function a(v, d) {
    v && v.stopPropagation();
    for (const c of Object.keys(l))
      c != d && (l[c] = !1);
    l[d] ? l[d] = !1 : l[d] = !0;
  }
  function o(v) {
    let d = { top: "54px", left: "12px" }, c = document.getElementById(v);
    if (c) {
      var h = c.getBoundingClientRect();
      d.top = (h.top + h.height + 4).toString() + "px", d.left = (h.right - 200).toString() + "px";
    }
    return d;
  }
  document.onclick = function() {
    for (const d of Object.keys(l))
      l[d] = !1;
  };
  var u = fl(), f = b(u);
  P(f, () => r() || n(), (v) => {
    var d = sl(), c = b(d);
    P(c, n, (p) => {
      var x = ll();
      I(() => q(x, "src", n())), k(p, x);
    });
    var h = N(c, 2);
    P(h, r, (p) => {
      var x = al(), g = b(x, !0);
      _(x), I(() => L(g, r())), k(p, x);
    }), _(d), k(v, d);
  });
  var s = N(f, 2);
  V(s, 21, i, F, (v, d) => {
    var c = ul(), h = He(c);
    h.__click = [ol, a, d];
    var p = b(h);
    _(h);
    var x = N(h, 2);
    P(x, () => l[m(d).title], (g) => {
      Wr(g, {
        get menuItems() {
          return m(d).items;
        },
        get top() {
          return o(m(d).title + "_button").top;
        },
        get left() {
          return o(m(d).title + "_button").left;
        }
      });
    }), I(() => {
      q(h, "id", m(d).title + "_button"), q(p, "alt", m(d).title), q(p, "src", m(d).imageUrl), Dt(p, "round", m(d).imageShape === "round");
    }), k(v, c);
  }), _(s), _(u), k(e, u), se();
}
ce(["click"]);
customElements.define("mountainview-elegant-header", Y(Zr, { title: {}, logoUrl: {}, menus: {} }, [], [], !0));
function vl(e, t, r, n) {
  t.onSearch && D(r, H(t.onSearch(n())));
}
function cl(e, t) {
  e.key === "Escape" && D(t, H([]));
}
var hl = /* @__PURE__ */ E('<div class="result svelte-eb7hdl"> </div>'), pl = /* @__PURE__ */ E('<div class="results svelte-eb7hdl"><div class="results_frame svelte-eb7hdl"><div class="results_list svelte-eb7hdl"></div></div></div>'), _l = /* @__PURE__ */ E('<div class="input_frame svelte-eb7hdl"><div class="search_frame svelte-eb7hdl"><div class="search_icon svelte-eb7hdl"><svg width="18px" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#9aa0a6" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></div> <input class="search_input svelte-eb7hdl"></div></div> <!>', 1);
const gl = {
  hash: "svelte-eb7hdl",
  code: ".input_frame.svelte-eb7hdl {min-height:44px;background:#fff;border:1px solid #dfe1e5;box-shadow:0px 2px 8px 0px rgba(60, 64, 67, 0.25);border-radius:24px;margin:0 auto;max-width:584px;}.search_frame.svelte-eb7hdl {display:flex;flex-flow:row wrap;width:100%;flex:1;padding:0 8px 0 0;}.search_icon.svelte-eb7hdl {display:flex;align-items:center;padding-right:13px;padding-left:14px;height:46px;color:#9aa0a6;z-index:11;}.search_input.svelte-eb7hdl {display:flex;flex-wrap:wrap;flex:1;border:none;border-radius:24px;font-size:18px;width:100%;z-index:11;background-color:transparent;}.search_input.svelte-eb7hdl:focus, .search_input.svelte-eb7hdl:focus{outline:none;}.results.svelte-eb7hdl {position:absolute;margin:0px 0px 0px 0px;width:398px;border:1px solid #dfe1e5;z-index:10;background:#fff;border-radius:0px 0px 24px 24px;}.results_list.svelte-eb7hdl {margin-top:10px;background:#fff;width:100%;z-index:10;}.results_frame.svelte-eb7hdl {position:relative;top:-22px;background:#fff;border-left:1px solid #dfe1e5;border-right:1px solid #dfe1e5;width:398px;left:-1px;z-index:10;height:300px;overflow-x:hidden;}.result.svelte-eb7hdl {width:100%;padding:4px 0px 4px 16px;}.result.svelte-eb7hdl:hover {cursor:pointer;background-color:#dfe1e5;}"
};
function Xr(e, t) {
  ae(t, !0), U(e, gl);
  let r = w(t, "search", 15), n = ze(H([]));
  var i = _l(), l = He(i), a = b(l), o = N(b(a), 2);
  _t(o), o.__input = [vl, t, n, r], o.__keyup = [cl, n], _(a), _(l);
  var u = N(l, 2);
  P(u, () => m(n).length > 0, (f) => {
    var s = pl(), v = b(s), d = b(v);
    V(d, 21, () => m(n), F, (c, h) => {
      var p = hl(), x = b(p, !0);
      _(p), I(() => L(x, m(h))), k(c, p);
    }), _(d), _(v), _(s), k(f, s);
  }), gt(o, r), k(e, i), se();
}
ce(["input", "keyup"]);
customElements.define("mountainview-elegant-search", Y(Xr, { search: {}, onSearch: {} }, [], [], !0));
var ml = /* @__PURE__ */ E('<img class="hero_image svelte-15t9eiv" alt="logo">'), bl = /* @__PURE__ */ E('<div class="hero svelte-15t9eiv"><div class="hero_logo svelte-15t9eiv"><!> <div class="hero_logo_text svelte-15t9eiv"> </div></div> <div class="hero_search svelte-15t9eiv"><!></div></div>');
const xl = {
  hash: "svelte-15t9eiv",
  code: ".hero.svelte-15t9eiv {width:100%;display:flex;justify-content:center;flex-flow:row wrap;}.hero_logo.svelte-15t9eiv {display:flex;margin-top:150px;width:100%;justify-content:center;align-items:center;font-family:'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-weight:560;color:#333;font-size:20px;}.hero_image.svelte-15t9eiv {width:50px;height:50px;}.hero_logo_text.svelte-15t9eiv {padding-left:12px;}.hero_search.svelte-15t9eiv {width:400px;}"
};
function Qr(e, t) {
  U(e, xl);
  let r = w(t, "height", 3, "80px"), n = w(t, "title", 3, ""), i = w(t, "logoUrl", 3, ""), l = w(t, "search", 15);
  var a = bl(), o = b(a), u = b(o);
  P(u, i, (c) => {
    var h = ml();
    I(() => {
      q(h, "height", `${r()}`), q(h, "src", i());
    }), k(c, h);
  });
  var f = N(u, 2), s = b(f, !0);
  _(f), _(o);
  var v = N(o, 2), d = b(v);
  Xr(d, {
    get search() {
      return l();
    },
    set search(c) {
      l(c);
    },
    get onSearch() {
      return t.onSearch;
    }
  }), _(v), _(a), I(() => {
    q(o, "style", `height: ${r()};`), L(s, n());
  }), k(e, a);
}
customElements.define("mountainview-elegant-hero-search", Y(
  Qr,
  {
    height: {},
    title: {},
    logoUrl: {},
    search: {},
    onSearch: {}
  },
  [],
  [],
  !0
));
function wl(e, t, r) {
  e.srcElement && t(e.srcElement.value), r.onInput && r.onInput(t());
}
var yl = /* @__PURE__ */ E('<option class="svelte-1im86kb"> </option>'), kl = /* @__PURE__ */ E('<div class="select svelte-1im86kb"><select name="source" id="source" class="svelte-1im86kb"></select></div>');
const $l = {
  hash: "svelte-1im86kb",
  code: `.select.svelte-1im86kb,
.select.svelte-1im86kb :where(.svelte-1im86kb) {margin:0;padding:0;position:relative;box-sizing:border-box;}.select.svelte-1im86kb {position:relative;background-color:#f0f0f0;border-radius:12px;width:200px;height:40px;}.select.svelte-1im86kb select:where(.svelte-1im86kb) {font-size:1rem;font-weight:normal;width:100%;padding:10px 24px 8px 10px;border:none;background-color:transparent;appearance:none;}.select.svelte-1im86kb select:where(.svelte-1im86kb):active, .select.svelte-1im86kb select:where(.svelte-1im86kb):focus {outline:none;box-shadow:none;}.select.svelte-1im86kb:after {content:"";position:absolute;top:50%;right:8px;width:0;height:0;margin-top:-2px;border-top:5px solid #aaa;border-right:5px solid transparent;border-left:5px solid transparent;}`
};
function en(e, t) {
  ae(t, !0), U(e, $l);
  let r = w(t, "input", 15), n = w(t, "options", 19, () => []);
  var i = kl(), l = b(i);
  l.__input = [wl, r, t], V(l, 21, n, F, (a, o) => {
    var u = yl(), f = {}, s = b(u, !0);
    _(u), I(() => {
      f !== (f = m(o)) && (u.value = (u.__value = m(o)) == null ? "" : m(o)), L(s, m(o));
    }), k(a, u);
  }), _(l), _(i), _i(l, r), k(e, i), se();
}
ce(["input"]);
customElements.define("mountainview-elegant-select", Y(en, { input: {}, onInput: {}, options: {} }, [], [], !0));
function El(e, t, r) {
  t() === "CARD" ? t("TABLE") : t("CARD"), r() && r()(t());
}
var Sl = (e, t, r) => t(m(r).name), Cl = /* @__PURE__ */ E('<div class="icon svelte-lvweti">✓</div>'), Nl = /* @__PURE__ */ E('<div class="icon svelte-lvweti"> </div>'), Tl = /* @__PURE__ */ E('<div class="filterbar_option svelte-lvweti"><!> <div class="name svelte-lvweti"> </div></div>'), Al = /* @__PURE__ */ E('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M3 9.5H21M3 14.5H21M8 4.5V19.5M6.2 19.5H17.8C18.9201 19.5 19.4802 19.5 19.908 19.282C20.2843 19.0903 20.5903 18.7843 20.782 18.408C21 17.9802 21 17.4201 21 16.3V7.7C21 6.5799 21 6.01984 20.782 5.59202C20.5903 5.21569 20.2843 4.90973 19.908 4.71799C19.4802 4.5 18.9201 4.5 17.8 4.5H6.2C5.0799 4.5 4.51984 4.5 4.09202 4.71799C3.71569 4.90973 3.40973 5.21569 3.21799 5.59202C3 6.01984 3 6.57989 3 7.7V16.3C3 17.4201 3 17.9802 3.21799 18.408C3.40973 18.7843 3.71569 19.0903 4.09202 19.282C4.51984 19.5 5.07989 19.5 6.2 19.5Z" stroke="#d8d8d8" stroke-width="2"></path></g></svg>'), ql = /* @__PURE__ */ E('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#d8d8d8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><g id="Complete"><g id="grid"><g><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="14.5" y="2.5"></rect><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="14.5" y="14.5"></rect><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="2.5" y="2.5"></rect><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="2.5" y="14.5"></rect></g></g></g></g></svg>'), Ol = /* @__PURE__ */ E('<div class="filterbar_frame svelte-lvweti"><div class="options svelte-lvweti"></div> <div class="filter svelte-lvweti"><button class="view_toggle svelte-lvweti"><!></button> <!></div></div>');
const Il = {
  hash: "svelte-lvweti",
  code: `.filterbar_frame.svelte-lvweti {display:flex;max-width:2000px;
    /* margin: 20px 10px 0px 16px; */margin:20px auto 0px auto;}.options.svelte-lvweti {display:flex;justify-content:left;width:100%;margin-left:16px;}.filter.svelte-lvweti {display:flex;margin-right:16px;}.filterbar_option.svelte-lvweti {display:flex;min-width:20px;height:40px;font-size:14px;font-weight:700;color:rgb(51, 103, 214);margin-right:6px;margin-bottom:4px;height:20px;padding:4px 8px 6px;border-radius:44px;border-width:1px;border-style:solid;border-color:lightgray;user-select:none;}.filterbar_option_selected.svelte-lvweti {background-color:rgb(209, 227, 255);}.filterbar_option.svelte-lvweti:hover {cursor:pointer;background-color:rgb(209, 227, 255);}.icon.svelte-lvweti {color:rgb(51, 103, 214);font-size:16px;font-weight:700;display:inline-block;width:18px;margin-right:6px;}.name.svelte-lvweti {float:right;margin-top:2px;font-size:14px;font-weight:700;color:rgb(51, 103, 214);}.view_toggle.svelte-lvweti {margin-right:12px;width:44px;border:0px;background-color:transparent;}.view_toggle.svelte-lvweti:hover {cursor:pointer;}`
};
function tn(e, t) {
  ae(t, !0), U(e, Il);
  let r = w(t, "onTypeSelect", 3, void 0), n = w(t, "onSortSelect", 3, void 0), i = w(t, "view", 15, "card"), l = w(t, "onViewSelect", 3, void 0), a = H({});
  function o(p) {
    a[p] ? a[p] = !1 : a[p] = !0, r() && r()(a);
  }
  function u(p) {
    n() && n()(p);
  }
  var f = Ol(), s = b(f);
  V(s, 21, () => t.types, F, (p, x) => {
    var g = Tl();
    g.__click = [Sl, o, x];
    var y = b(g);
    P(
      y,
      () => a[m(x).name] === !0,
      (C) => {
        var $ = Cl();
        k(C, $);
      },
      (C) => {
        var $ = Nl(), j = b($, !0);
        _($), I(() => L(j, m(x).icon)), k(C, $);
      }
    );
    var S = N(y, 2), T = b(S, !0);
    _(S), _(g), I(() => {
      Dt(g, "filterbar_option_selected", a[m(x).name]), L(T, m(x).name);
    }), k(p, g);
  }), _(s);
  var v = N(s, 2), d = b(v);
  d.__click = [El, i, l];
  var c = b(d);
  P(
    c,
    () => i() === "CARD",
    (p) => {
      var x = Al();
      k(p, x);
    },
    (p) => {
      var x = ql();
      k(p, x);
    }
  ), _(d);
  var h = N(d, 2);
  en(h, {
    input: "Latest",
    get options() {
      return t.sorts;
    },
    onInput: u
  }), _(v), _(f), k(e, f), se();
}
ce(["click"]);
customElements.define("mountainview-elegant-filtertypes", Y(
  tn,
  {
    types: {},
    sorts: {},
    onTypeSelect: {},
    onSortSelect: {},
    view: {},
    onViewSelect: {}
  },
  [],
  [],
  !0
));
var zl = /* @__PURE__ */ E('<img alt="type icon" class="svelte-1feueb0">'), Rl = /* @__PURE__ */ E('<img alt="type icon" class="svelte-1feueb0">'), Ml = /* @__PURE__ */ E('<div class="card_frame svelte-1feueb0"><div class="top_left_label svelte-1feueb0"><span class="svelte-1feueb0"> </span> <div class="top_right_icons svelte-1feueb0"></div></div> <img class="header_image svelte-1feueb0" alt="header preview"> <a class="title svelte-1feueb0"> </a> <a class="author svelte-1feueb0" target="_blank"><img alt="profile" class="svelte-1feueb0"> </a> <div class="footer svelte-1feueb0"><div class="description svelte-1feueb0"> </div> <div class="link svelte-1feueb0"><a target="_blank" class="svelte-1feueb0">Open asset ↗</a> <div class="type_box svelte-1feueb0"></div></div></div></div>');
const Hl = {
  hash: "svelte-1feueb0",
  code: ".card_frame.svelte-1feueb0 {display:flex;flex-wrap:wrap;width:288px;height:428px;border:1px solid var(--gm3-sys-color-surface-variant, #e1e3e1);border-radius:12px;margin:16px 16px 32px 16px;}.top_left_label.svelte-1feueb0 {display:flex;padding:12px 18px;color:#444746;width:100%;height:28px;}.top_left_label.svelte-1feueb0 span:where(.svelte-1feueb0) {white-space:nowrap;}.top_right_icons.svelte-1feueb0 {display:flex;justify-content:right;width:100%;}.top_right_icons.svelte-1feueb0 img:where(.svelte-1feueb0) {object-fit:cover;width:24px;height:24px;margin-left:4px;}.header_image.svelte-1feueb0 {width:calc(100% - 18px);margin:0px 18px;object-fit:cover;height:144px;border-radius:7px;}.title.svelte-1feueb0 {padding:12px 18px 4px;height:48px;color:#1f1f1f;font-weight:600;font-size:18px;overflow:hidden;text-overflow:ellipsis;line-height:1.5rem;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;}.title.svelte-1feueb0:hover {color:#7c7c7c;}.author.svelte-1feueb0 {display:flex;align-items:start;padding:0px 18px 4px;height:20px;color:#444746;font-size:.875rem;font-weight:400;line-height:1.25rem;overflow:hidden;text-overflow:ellipsis;}.author.svelte-1feueb0 img:where(.svelte-1feueb0) {border-radius:50%;object-fit:cover;width:18px;height:18px;margin-right:8px;}.author.svelte-1feueb0:hover {color:#757a79;}.footer.svelte-1feueb0 {display:flex;flex-direction:column;justify-content:space-between;min-height:134px;padding-top:9px;padding-bottom:3px;width:100%;}.description.svelte-1feueb0 {padding:3px 18px;height:54px;width:calc(100% - 36px);overflow:hidden;color:#444746;font-size:.875rem;font-weight:400;letter-spacing:0;line-height:1.25rem;outline:none;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;}.link.svelte-1feueb0 {display:flex;width:calc(100% - 36px);overflow:hidden;padding:0px 16px;padding-bottom:14px;}.link.svelte-1feueb0 a:where(.svelte-1feueb0) {color:#0b57d0;font-weight:600;font-size:.975rem;letter-spacing:0;line-height:1.25rem;white-space:nowrap;}.link.svelte-1feueb0 a:where(.svelte-1feueb0):hover {color:#82aae9;}.type_box.svelte-1feueb0 {display:flex;justify-content:right;flex-wrap:wrap;width:100%;}.type_box.svelte-1feueb0 img:where(.svelte-1feueb0) {object-fit:cover;width:24px;height:24px;margin-left:4px;}"
};
function rn(e, t) {
  ae(t, !0), U(e, Hl);
  let r = w(t, "item", 19, () => ({
    dateTime: "",
    categories: [],
    imageUrl: "",
    title: "",
    authorImageUrl: "",
    authorName: "",
    authorUrl: "",
    description: "",
    link: "",
    types: []
  }));
  var n = Ml(), i = b(n), l = b(i), a = b(l, !0);
  _(l);
  var o = N(l, 2);
  V(o, 21, () => r().categories, F, (T, C) => {
    var $ = zl();
    I(() => {
      q($, "src", m(C).url), q($, "title", m(C).title);
    }), k(T, $);
  }), _(o), _(i);
  var u = N(i, 2), f = N(u, 2), s = b(f, !0);
  _(f);
  var v = N(f, 2), d = b(v), c = N(d);
  _(v);
  var h = N(v, 2), p = b(h), x = b(p, !0);
  _(p);
  var g = N(p, 2), y = b(g), S = N(y, 2);
  V(S, 21, () => r().types, F, (T, C) => {
    var $ = Rl();
    I(() => {
      q($, "src", m(C).url), q($, "title", m(C).title);
    }), k(T, $);
  }), _(S), _(g), _(h), _(n), I(() => {
    L(a, r().dateTime), q(u, "src", r().imageUrl), q(f, "href", r().link), L(s, r().description), q(v, "href", r().authorUrl), q(d, "src", r().authorImageUrl), L(c, ` ${r().authorName ?? ""}`), L(x, r().description), q(y, "href", r().link);
  }), k(e, n), se();
}
customElements.define("mountainview-elegant-card", Y(rn, { item: {} }, [], [], !0));
var Ll = /* @__PURE__ */ E('<div class="menu_frame svelte-1dvvvu9"></div>');
const jl = {
  hash: "svelte-1dvvvu9",
  code: `.menu_frame.svelte-1dvvvu9 {max-width:2000px;margin:0px auto;display:flex;
    /* justify-content: center; */flex-wrap:wrap;}`
};
function nn(e, t) {
  U(e, jl);
  var r = Ll();
  V(r, 21, () => t.items, F, (n, i) => {
    rn(n, {
      get item() {
        return m(i);
      }
    });
  }), _(r), k(e, r);
}
customElements.define("mountainview-elegant-cardpage", Y(nn, { items: {} }, [], [], !0));
var Dl = (e, t, r) => t(m(r).name), Pl = /* @__PURE__ */ E('<div class="filterbar_option svelte-1d4e3jq"><div class="letter svelte-1d4e3jq"> </div> <div class="name svelte-1d4e3jq"> </div></div>'), Fl = /* @__PURE__ */ E('<div class="filterbar_frame svelte-1d4e3jq"></div>');
const Vl = {
  hash: "svelte-1d4e3jq",
  code: `.filterbar_frame.svelte-1d4e3jq {display:flex;justify-content:center;}.filterbar_option.svelte-1d4e3jq {display:flex;flex-flow:row wrap;width:60px;height:100px;margin:8px;user-select:none;
    /* background-color: red; */}.letter.svelte-1d4e3jq {display:flex;align-items:center;justify-content:center;width:100%;height:52px;margin:2px 2px 0px 2px;border-radius:80%;text-align:center;font-size:22px;font-weight:bold;color:#3367d6;border-width:1px;border-style:solid;border-color:transparent;}.letter_selected.svelte-1d4e3jq {background-color:rgb(228, 228, 228);}.letter.svelte-1d4e3jq:hover {cursor:pointer;border-color:lightgray;}.name.svelte-1d4e3jq {width:100%;position:relative;top:-8px;text-align:center;color:gray;font-size:14px;}`
};
function ln(e, t) {
  ae(t, !0), U(e, Vl);
  let r = H({});
  function n(l) {
    r[l] ? r[l] = !1 : r[l] = !0, t.onCategorySelect && t.onCategorySelect(r);
  }
  var i = Fl();
  V(i, 21, () => t.categories, F, (l, a) => {
    var o = Pl(), u = b(o);
    u.__click = [Dl, n, a];
    var f = b(u, !0);
    _(u);
    var s = N(u, 2), v = b(s, !0);
    _(s), _(o), I(() => {
      Dt(u, "letter_selected", r[m(a).name]), L(f, m(a).letter), L(v, m(a).name);
    }), k(l, o);
  }), _(i), k(e, i), se();
}
ce(["click"]);
customElements.define("mountainview-elegant-filtercats", Y(ln, { categories: {}, onCategorySelect: {} }, [], [], !0));
function Bl(e, t, r, n, i) {
  if (m(t)) {
    let l = [];
    for (let a of r()) {
      let o = !1;
      for (let u of n())
        if (u.searchable && a[u.name] && a[u.name].toString().toLowerCase().includes(m(t).toLowerCase())) {
          o = !0;
          break;
        }
      o && l.push(a);
    }
    D(i, H(l));
  } else
    D(i, H(r()));
}
var Ul = /* @__PURE__ */ E('<th class="svelte-1nhk8gr"> </th>'), Yl = /* @__PURE__ */ E('<td class="svelte-1nhk8gr"><a class="table_row svelte-1nhk8gr"> </a></td>'), Gl = /* @__PURE__ */ E('<td class="svelte-1nhk8gr"></td>'), Jl = /* @__PURE__ */ E('<tr class="svelte-1nhk8gr"></tr>'), Kl = /* @__PURE__ */ E('<div class="card_frame svelte-1nhk8gr"><div class="filter svelte-1nhk8gr"><svg data-icon-name="filterIcon" viewBox="0 0 18 18" width="18" height="18" aria-hidden="true"><path fill-rule="evenodd" d="M2 4h14v2H2V4zm2 4h10v2H4V8zm2 4h6v2H6v-2z"></path></svg> <span class="filter_input_box svelte-1nhk8gr">Filter <input class="filter_input svelte-1nhk8gr" placeholder="Value to filter for"></span></div> <table class="svelte-1nhk8gr"><thead class="svelte-1nhk8gr"><tr class="svelte-1nhk8gr"></tr></thead><tbody class="svelte-1nhk8gr"></tbody></table></div>');
const Wl = {
  hash: "svelte-1nhk8gr",
  code: `.card_frame.svelte-1nhk8gr {
    /* border-color: #eaedf2 !important; */
    /* box-shadow: 0 2px 18px rgba(0, 0, 0, 0.02) !important; */min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;
    /* border: 0.0625rem solid rgba(46, 54, 80, 0.125); */border-radius:0.5rem;padding:22px 32px;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}table.svelte-1nhk8gr {width:100%;margin-bottom:1rem;color:#4a5073;vertical-align:top;border-color:#eaedf2;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;border-collapse:collapse;}table.svelte-1nhk8gr thead:where(.svelte-1nhk8gr) tr:where(.svelte-1nhk8gr) th:where(.svelte-1nhk8gr) {vertical-align:center;text-align:left;border-bottom:1px solid #eaedf2 !important;font-size:12px;font-weight:bold;padding-left:14px;padding-bottom:10px;}.table_row.svelte-1nhk8gr {padding-left:14px;padding-top:14px;padding-bottom:14px;border-bottom:1px solid #eaedf2 !important;}table.svelte-1nhk8gr tbody:where(.svelte-1nhk8gr) tr:where(.svelte-1nhk8gr):hover {background-color:#eff0f2;cursor:pointer;border-radius:0.5rem;}a.svelte-1nhk8gr:link {text-decoration:none;color:#4a5073;}a.svelte-1nhk8gr:visited {text-decoration:none;color:#4a5073;}a.svelte-1nhk8gr:hover {text-decoration:none;color:#4a5073;}a.svelte-1nhk8gr:active {text-decoration:none;}td.svelte-1nhk8gr a:where(.svelte-1nhk8gr) {display:block;}.filter.svelte-1nhk8gr {margin-top:20px;margin-bottom:8px;margin-left:8px;}.filter_input_box.svelte-1nhk8gr {position:relative;top:-3px;font-weight:bold;font-size:14px;}.filter_input.svelte-1nhk8gr {width:50%;margin-left:8px;font-family:Google Sans,
      Roboto,
      Helvetica,
      Arial,
      sans-serif;padding:var(--padding);
    /* border: 2px solid gray; */border:0px;outline:none;border-radius:0px;
    /* background-color: #f1f3f4; */background-color:rgb(255, 255, 255);}`
};
function an(e, t) {
  ae(t, !0), U(e, Wl);
  let r = w(t, "headers", 23, () => []), n = w(t, "rows", 23, () => []), i = w(t, "linkprefix", 3, ""), l = w(t, "linkcolumnname", 3, ""), a = w(t, "update", 3, void 0);
  typeof r() == "string" && r(JSON.parse(r())), typeof n() == "string" && n(JSON.parse(n()));
  let o = ze(H(n())), u = ze("");
  const f = (y) => {
    t.$$host.dispatchEvent(new CustomEvent("update", { detail: { rowIndex: y } })), a() && a()({ detail: { rowIndex: y } });
  };
  var s = Kl(), v = b(s), d = N(b(v), 2), c = N(b(d));
  _t(c), c.__keyup = [
    Bl,
    u,
    n,
    r,
    o
  ], _(d), _(v);
  var h = N(v, 2), p = b(h), x = b(p);
  V(x, 21, r, F, (y, S) => {
    var T = Ul(), C = b(T, !0);
    _(T), I(() => L(C, m(S).displayName)), k(y, T);
  }), _(x), _(p);
  var g = N(p);
  V(g, 21, () => m(o), F, (y, S, T) => {
    var C = Jl();
    C.__click = () => {
      f(T);
    }, V(C, 21, r, F, ($, j) => {
      var M = Dr(), ke = He(M);
      P(
        ke,
        () => m(S)[m(j).name],
        (re) => {
          var ne = Yl(), K = b(ne), G = b(K, !0);
          _(K), _(ne), I(() => {
            q(K, "href", i() + m(S)[l()]), L(G, m(S)[m(j).name]);
          }), k(re, ne);
        },
        (re) => {
          var ne = Gl();
          k(re, ne);
        }
      ), k($, M);
    }), _(C), k(y, C);
  }), _(g), _(h), _(s), gt(c, () => m(u), (y) => D(u, y)), k(e, s), se();
}
ce(["keyup", "click"]);
customElements.define("mountainview-elegant-table", Y(
  an,
  {
    headers: {},
    rows: {},
    linkprefix: {},
    linkcolumnname: {},
    update: {}
  },
  [],
  [],
  !0
));
var Zl = /* @__PURE__ */ E("<!> <!> <!> <!> <!>", 1);
const Xl = { hash: "svelte-32ttx", code: "" };
function Ql(e, t) {
  U(e, Xl);
  let r = w(t, "title", 3, ""), n = w(t, "logoUrl", 3, ""), i = w(t, "menus", 19, () => []), l = w(t, "search", 7, ""), a = w(t, "onSearch", 3, void 0), o = w(t, "categories", 19, () => []), u = w(t, "onCategorySelect", 3, void 0), f = w(t, "types", 19, () => []), s = w(t, "onTypeSelect", 3, void 0), v = w(t, "sorts", 19, () => []), d = w(t, "onSortSelect", 3, void 0), c = w(t, "items", 23, () => []);
  typeof c() == "string" && c(JSON.parse(c()));
  let h = ze("CARD"), p = H([
    {
      name: "dateTime",
      displayName: "Date",
      searchable: !1
    },
    {
      name: "authorName",
      displayName: "Author",
      searchable: !0
    },
    {
      name: "title",
      displayName: "Title",
      searchable: !0
    }
  ]);
  var x = Zl(), g = He(x);
  Zr(g, {
    get title() {
      return r();
    },
    get logoUrl() {
      return n();
    },
    get menus() {
      return i();
    }
  });
  var y = N(g, 2);
  Qr(y, {
    get title() {
      return r();
    },
    get logoUrl() {
      return n();
    },
    get search() {
      return l();
    },
    set search($) {
      l($);
    },
    get onSearch() {
      return a();
    }
  });
  var S = N(y, 2);
  ln(S, {
    get categories() {
      return o();
    },
    get onCategorySelect() {
      return u();
    }
  });
  var T = N(S, 2);
  tn(T, {
    get types() {
      return f();
    },
    get sorts() {
      return v();
    },
    get onTypeSelect() {
      return s();
    },
    get onSortSelect() {
      return d();
    },
    get view() {
      return m(h);
    },
    set view($) {
      D(h, H($));
    }
  });
  var C = N(T, 2);
  P(
    C,
    () => m(h) === "CARD",
    ($) => {
      nn($, {
        get items() {
          return c();
        }
      });
    },
    ($) => {
      an($, {
        get headers() {
          return p;
        },
        get rows() {
          return c();
        },
        linkprefix: "",
        linkcolumnname: "link",
        update: void 0
      });
    }
  ), k(e, x);
}
customElements.define("mountainview-elegant-buffet", Y(
  Ql,
  {
    title: {},
    logoUrl: {},
    menus: {},
    search: {},
    onSearch: {},
    categories: {},
    onCategorySelect: {},
    types: {},
    onTypeSelect: {},
    sorts: {},
    onSortSelect: {},
    items: {}
  },
  [],
  [],
  !0
));
export {
  Ql as ElegantBuffet,
  Zr as ElegantHeader,
  Qr as ElegantHeroSearch,
  Xr as ElegantSearch,
  an as ElegantTable,
  Ei as MappButton,
  Kr as MappHeaderLite,
  Jr as MappInput,
  Ji as MappMenu,
  tl as MappTable
};
