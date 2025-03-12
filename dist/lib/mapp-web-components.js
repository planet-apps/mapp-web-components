var un = Object.defineProperty;
var Bt = (e) => {
  throw TypeError(e);
};
var fn = (e, t, r) => t in e ? un(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ie = (e, t, r) => fn(e, typeof t != "symbol" ? t + "" : t, r), Ut = (e, t, r) => t.has(e) || Bt("Cannot " + r);
var J = (e, t, r) => (Ut(e, t, "read from private field"), r ? r.call(e) : t.get(e)), mt = (e, t, r) => t.has(e) ? Bt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), xt = (e, t, r, n) => (Ut(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r);
const vn = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(vn);
const cn = 1, dn = 2, hn = 16, pn = 1, _n = 4, gn = 8, mn = 16, xn = 4, bn = 1, wn = 2, tr = "[", qt = "[!", Ot = "]", je = {}, W = Symbol(), rr = !1;
function It(e) {
  console.warn("hydration_mismatch");
}
var zt = Array.isArray, Rt = Array.from, it = Object.keys, at = Object.defineProperty, $e = Object.getOwnPropertyDescriptor, yn = Object.getOwnPropertyDescriptors, kn = Object.prototype, En = Array.prototype, bt = Object.getPrototypeOf;
function $n(e) {
  return typeof e == "function";
}
const Le = () => {
};
function nr(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const _e = 2, ir = 4, ft = 8, vt = 16, ce = 32, Ve = 64, Me = 128, lt = 256, X = 512, we = 1024, Ye = 2048, oe = 4096, Ge = 8192, ar = 16384, ct = 32768, Cn = 1 << 18, lr = 1 << 19, De = Symbol("$state"), Sn = Symbol("");
function sr(e) {
  return e === this.v;
}
function Nn(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function or(e) {
  return !Nn(e, this.v);
}
function An() {
  throw new Error("effect_update_depth_exceeded");
}
function Tn() {
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
  return R !== null && R.f & _e && (ue === null ? Un([e]) : ue.push(e)), e;
}
function j(e, t) {
  return R !== null && Yn() && R.f & (_e | vt) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (ue === null || !ue.includes(e)) && Rn(), fr(e, t);
}
function fr(e, t) {
  return e.equals(t) || (e.v = t, e.version = Nr(), vr(e, we), T !== null && T.f & X && !(T.f & ce) && (U !== null && U.includes(e) ? (ge(T, we), pt(T)) : be === null ? Vn([e]) : be.push(e))), t;
}
function vr(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = r.length, i = 0; i < n; i++) {
      var a = r[i], l = a.f;
      l & we || (ge(a, t), l & (X | Me) && (l & _e ? vr(
        /** @type {Derived} */
        a,
        Ye
      ) : pt(
        /** @type {Effect} */
        a
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Hn(e) {
  var t = _e | we;
  T === null ? t |= Me : T.f |= lr;
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
    parent: T
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
function cr(e) {
  var t = e.children;
  if (t !== null) {
    e.children = null;
    for (var r = 0; r < t.length; r += 1) {
      var n = t[r];
      n.f & _e ? Ht(
        /** @type {Derived} */
        n
      ) : Se(
        /** @type {Effect} */
        n
      );
    }
  }
}
function dr(e) {
  var t, r = T;
  te(e.parent);
  try {
    cr(e), t = Ar(e);
  } finally {
    te(r);
  }
  return t;
}
function hr(e) {
  var t = dr(e), r = (Te || e.f & Me) && e.deps !== null ? Ye : X;
  ge(e, r), e.equals(t) || (e.v = t, e.version = Nr());
}
function Ht(e) {
  cr(e), Ue(e, 0), ge(e, Ge), e.v = e.children = e.deps = e.ctx = e.reactions = null;
}
function Ln(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Je(e, t, r, n = !0) {
  var i = (e & Ve) !== 0, a = T, l = {
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
    parent: i ? null : a,
    prev: null,
    teardown: null,
    transitions: null,
    version: 0
  };
  if (r) {
    var u = qe;
    try {
      Vt(!0), ht(l), l.f |= ar;
    } catch (o) {
      throw Se(l), o;
    } finally {
      Vt(u);
    }
  } else t !== null && pt(l);
  var f = r && l.deps === null && l.first === null && l.nodes_start === null && l.teardown === null && (l.f & lr) === 0;
  if (!f && !i && n && (a !== null && Ln(l, a), R !== null && R.f & _e)) {
    var s = (
      /** @type {Derived} */
      R
    );
    (s.children ?? (s.children = [])).push(l);
  }
  return l;
}
function pr(e) {
  const t = Je(Ve, e, !0);
  return () => {
    Se(t);
  };
}
function dt(e) {
  return Je(ir, e, !1);
}
function _r(e) {
  return Je(ft, e, !0);
}
function I(e) {
  return Lt(e);
}
function Lt(e, t = 0) {
  return Je(ft | vt | t, e, !0);
}
function Fe(e, t = !0) {
  return Je(ft | ce, e, !0, t);
}
function gr(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = R;
    ve(null);
    try {
      t.call(null);
    } finally {
      ve(r);
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
function xr(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var n = r.next;
    Se(r, t), r = n;
  }
}
function jn(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    t.f & ce || Se(t), t = r;
  }
}
function Se(e, t = !0) {
  var r = !1;
  if ((t || e.f & Cn) && e.nodes_start !== null) {
    for (var n = e.nodes_start, i = e.nodes_end; n !== null; ) {
      var a = n === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ye(n)
      );
      n.remove(), n = a;
    }
    r = !0;
  }
  xr(e, t && !r), mr(e), Ue(e, 0), ge(e, Ge);
  var l = e.transitions;
  if (l !== null)
    for (const f of l)
      f.stop();
  gr(e);
  var u = e.parent;
  u !== null && u.first !== null && br(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.parent = e.fn = e.nodes_start = e.nodes_end = null;
}
function br(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function wt(e, t) {
  var r = [];
  jt(e, r, !0), wr(r, () => {
    Se(e), t && t();
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
      for (const l of e.transitions)
        (l.is_global || r) && t.push(l);
    for (var n = e.first; n !== null; ) {
      var i = n.next, a = (n.f & ct) !== 0 || (n.f & ce) !== 0;
      jt(n, t, a ? r : !1), n = i;
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
      var n = r.next, i = (r.f & ct) !== 0 || (r.f & ce) !== 0;
      yr(r, i ? t : !1), r = n;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
const Dn = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let ot = !1, ut = !1, yt = [], kt = [];
function kr() {
  ot = !1;
  const e = yt.slice();
  yt = [], nr(e);
}
function Er() {
  ut = !1;
  const e = kt.slice();
  kt = [], nr(e);
}
function $r(e) {
  ot || (ot = !0, queueMicrotask(kr)), yt.push(e);
}
function Pn(e) {
  ut || (ut = !0, Dn(Er)), kt.push(e);
}
function Fn() {
  ot && kr(), ut && Er();
}
const Cr = 0, Bn = 1;
let tt = Cr, Be = !1, qe = !1;
function Vt(e) {
  qe = e;
}
let Ee = [], Oe = 0;
let R = null;
function ve(e) {
  R = e;
}
let T = null;
function te(e) {
  T = e;
}
let ue = null;
function Un(e) {
  ue = e;
}
let U = null, Z = 0, be = null;
function Vn(e) {
  be = e;
}
let Sr = 0, Te = !1, fe = null;
function Nr() {
  return ++Sr;
}
function Yn() {
  return !ur;
}
function Ke(e) {
  var l, u;
  var t = e.f;
  if (t & we)
    return !0;
  if (t & Ye) {
    var r = e.deps, n = (t & Me) !== 0;
    if (r !== null) {
      var i;
      if (t & lt) {
        for (i = 0; i < r.length; i++)
          ((l = r[i]).reactions ?? (l.reactions = [])).push(e);
        e.f ^= lt;
      }
      for (i = 0; i < r.length; i++) {
        var a = r[i];
        if (Ke(
          /** @type {Derived} */
          a
        ) && hr(
          /** @type {Derived} */
          a
        ), n && T !== null && !Te && !((u = a == null ? void 0 : a.reactions) != null && u.includes(e)) && (a.reactions ?? (a.reactions = [])).push(e), a.version > e.version)
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
function Ar(e) {
  var v;
  var t = U, r = Z, n = be, i = R, a = Te, l = ue, u = fe, f = e.f;
  U = /** @type {null | Value[]} */
  null, Z = 0, be = null, R = f & (ce | Ve) ? null : e, Te = !qe && (f & Me) !== 0, ue = null, fe = e.ctx;
  try {
    var s = (
      /** @type {Function} */
      (0, e.fn)()
    ), o = e.deps;
    if (U !== null) {
      var c;
      if (Ue(e, Z), o !== null && Z > 0)
        for (o.length = Z + U.length, c = 0; c < U.length; c++)
          o[Z + c] = U[c];
      else
        e.deps = o = U;
      if (!Te)
        for (c = Z; c < o.length; c++)
          ((v = o[c]).reactions ?? (v.reactions = [])).push(e);
    } else o !== null && Z < o.length && (Ue(e, Z), o.length = Z);
    return s;
  } finally {
    U = t, Z = r, be = n, R = i, Te = a, ue = l, fe = u;
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
  (U === null || !U.includes(t)) && (ge(t, Ye), t.f & (Me | lt) || (t.f ^= lt), Ue(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Ue(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Jn(e, r[n]);
}
function ht(e) {
  var t = e.f;
  if (!(t & Ge)) {
    ge(e, X);
    var r = T;
    T = e;
    try {
      t & vt ? jn(e) : xr(e), mr(e), gr(e);
      var n = Ar(e);
      e.teardown = typeof n == "function" ? n : null, e.version = Sr;
    } catch (i) {
      Gn(
        /** @type {Error} */
        i
      );
    } finally {
      T = r;
    }
  }
}
function Tr() {
  Oe > 1e3 && (Oe = 0, An()), Oe++;
}
function qr(e) {
  var t = e.length;
  if (t !== 0) {
    Tr();
    var r = qe;
    qe = !0;
    try {
      for (var n = 0; n < t; n++) {
        var i = e[n];
        i.f & X || (i.f ^= X);
        var a = [];
        Or(i, a), Kn(a);
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
      !(n.f & (Ge | oe)) && Ke(n) && (ht(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? br(n) : n.fn = null));
    }
}
function Wn() {
  if (Be = !1, Oe > 1001)
    return;
  const e = Ee;
  Ee = [], qr(e), Be || (Oe = 0);
}
function pt(e) {
  tt === Cr && (Be || (Be = !0, queueMicrotask(Wn)));
  for (var t = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (r & (Ve | ce)) {
      if (!(r & X)) return;
      t.f ^= X;
    }
  }
  Ee.push(t);
}
function Or(e, t) {
  var r = e.first, n = [];
  e: for (; r !== null; ) {
    var i = r.f, a = (i & ce) !== 0, l = a && (i & X) !== 0;
    if (!l && !(i & oe))
      if (i & ft) {
        a ? r.f ^= X : Ke(r) && ht(r);
        var u = r.first;
        if (u !== null) {
          r = u;
          continue;
        }
      } else i & ir && n.push(r);
    var f = r.next;
    if (f === null) {
      let c = r.parent;
      for (; c !== null; ) {
        if (e === c)
          break e;
        var s = c.next;
        if (s !== null) {
          r = s;
          continue e;
        }
        c = c.parent;
      }
    }
    r = f;
  }
  for (var o = 0; o < n.length; o++)
    u = n[o], t.push(u), Or(u, t);
}
function Ir(e) {
  var t = tt, r = Ee;
  try {
    Tr();
    const i = [];
    tt = Bn, Ee = i, Be = !1, qr(r);
    var n = e == null ? void 0 : e();
    return Fn(), (Ee.length > 0 || i.length > 0) && Ir(), Oe = 0, n;
  } finally {
    tt = t, Ee = r;
  }
}
function g(e) {
  var u;
  var t = e.f, r = (t & _e) !== 0;
  if (r && t & Ge) {
    var n = dr(
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
    U === null && i !== null && i[Z] === e ? Z++ : U === null ? U = [e] : U.push(e), be !== null && T !== null && T.f & X && !(T.f & ce) && be.includes(e) && (ge(T, we), pt(T));
  } else if (r && /** @type {Derived} */
  e.deps === null) {
    var a = (
      /** @type {Derived} */
      e
    ), l = a.parent;
    l !== null && !((u = l.deriveds) != null && u.includes(a)) && (l.deriveds ?? (l.deriveds = [])).push(a);
  }
  return r && (a = /** @type {Derived} */
  e, Ke(a) && hr(a)), e.v;
}
function Et(e) {
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
function le(e, t = !1, r) {
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
    const l = t.e;
    if (l !== null) {
      var r = T, n = R;
      t.e = null;
      try {
        for (var i = 0; i < l.length; i++) {
          var a = l[i];
          te(a.effect), ve(a.reaction), dt(a.fn);
        }
      } finally {
        te(r), ve(n);
      }
    }
    fe = t.p, t.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
function M(e, t = null, r) {
  if (typeof e != "object" || e === null || De in e)
    return e;
  const n = bt(e);
  if (n !== kn && n !== En)
    return e;
  var i = /* @__PURE__ */ new Map(), a = zt(e), l = ee(0);
  a && i.set("length", ee(
    /** @type {any[]} */
    e.length
  ));
  var u;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(f, s, o) {
        (!("value" in o) || o.configurable === !1 || o.enumerable === !1 || o.writable === !1) && On();
        var c = i.get(s);
        return c === void 0 ? (c = ee(o.value), i.set(s, c)) : j(c, M(o.value, u)), !0;
      },
      deleteProperty(f, s) {
        var o = i.get(s);
        if (o === void 0)
          s in f && i.set(s, ee(W));
        else {
          if (a && typeof s == "string") {
            var c = (
              /** @type {Source<number>} */
              i.get("length")
            ), v = Number(s);
            Number.isInteger(v) && v < c.v && j(c, v);
          }
          j(o, W), Yt(l);
        }
        return !0;
      },
      get(f, s, o) {
        var h;
        if (s === De)
          return e;
        var c = i.get(s), v = s in f;
        if (c === void 0 && (!v || (h = $e(f, s)) != null && h.writable) && (c = ee(M(v ? f[s] : W, u)), i.set(s, c)), c !== void 0) {
          var d = g(c);
          return d === W ? void 0 : d;
        }
        return Reflect.get(f, s, o);
      },
      getOwnPropertyDescriptor(f, s) {
        var o = Reflect.getOwnPropertyDescriptor(f, s);
        if (o && "value" in o) {
          var c = i.get(s);
          c && (o.value = g(c));
        } else if (o === void 0) {
          var v = i.get(s), d = v == null ? void 0 : v.v;
          if (v !== void 0 && d !== W)
            return {
              enumerable: !0,
              configurable: !0,
              value: d,
              writable: !0
            };
        }
        return o;
      },
      has(f, s) {
        var d;
        if (s === De)
          return !0;
        var o = i.get(s), c = o !== void 0 && o.v !== W || Reflect.has(f, s);
        if (o !== void 0 || T !== null && (!c || (d = $e(f, s)) != null && d.writable)) {
          o === void 0 && (o = ee(c ? M(f[s], u) : W), i.set(s, o));
          var v = g(o);
          if (v === W)
            return !1;
        }
        return c;
      },
      set(f, s, o, c) {
        var $;
        var v = i.get(s), d = s in f;
        if (a && s === "length")
          for (var h = o; h < /** @type {Source<number>} */
          v.v; h += 1) {
            var _ = i.get(h + "");
            _ !== void 0 ? j(_, W) : h in f && (_ = ee(W), i.set(h + "", _));
          }
        v === void 0 ? (!d || ($ = $e(f, s)) != null && $.writable) && (v = ee(void 0), j(v, M(o, u)), i.set(s, v)) : (d = v.v !== W, j(v, M(o, u)));
        var w = Reflect.getOwnPropertyDescriptor(f, s);
        if (w != null && w.set && w.set.call(c, o), !d) {
          if (a && typeof s == "string") {
            var m = (
              /** @type {Source<number>} */
              i.get("length")
            ), b = Number(s);
            Number.isInteger(b) && b >= m.v && j(m, b + 1);
          }
          Yt(l);
        }
        return !0;
      },
      ownKeys(f) {
        g(l);
        var s = Reflect.ownKeys(f).filter((v) => {
          var d = i.get(v);
          return d === void 0 || d.v !== W;
        });
        for (var [o, c] of i)
          c.v !== W && !(o in f) && s.push(o);
        return s;
      },
      setPrototypeOf() {
        In();
      }
    }
  );
}
function Yt(e, t = 1) {
  j(e, e.v + t);
}
function Gt(e) {
  return e !== null && typeof e == "object" && De in e ? e[De] : e;
}
function Xn(e, t) {
  return Object.is(Gt(e), Gt(t));
}
var Jt, zr, Rr;
function $t() {
  if (Jt === void 0) {
    Jt = window;
    var e = Element.prototype, t = Node.prototype;
    zr = $e(t, "firstChild").get, Rr = $e(t, "nextSibling").get, e.__click = void 0, e.__className = "", e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Re(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ce(e) {
  return zr.call(e);
}
// @__NO_SIDE_EFFECTS__
function ye(e) {
  return Rr.call(e);
}
function x(e, t) {
  if (!O)
    return /* @__PURE__ */ Ce(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ce(z)
  );
  if (r === null)
    r = z.appendChild(Re());
  else if (t && r.nodeType !== 3) {
    var n = Re();
    return r == null || r.before(n), ae(n), n;
  }
  return ae(r), r;
}
function He(e, t) {
  if (!O) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ce(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ ye(r) : r;
  }
  return z;
}
function C(e, t = 1, r = !1) {
  let n = O ? z : e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ ye(n);
  if (!O)
    return n;
  var i = n.nodeType;
  if (r && i !== 3) {
    var a = Re();
    return n == null || n.before(a), ae(a), a;
  }
  return ae(n), /** @type {TemplateNode} */
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
function ae(e) {
  if (e === null)
    throw It(), je;
  return z = e;
}
function We() {
  return ae(
    /** @type {TemplateNode} */
    /* @__PURE__ */ ye(z)
  );
}
function p(e) {
  if (O) {
    if (/* @__PURE__ */ ye(z) !== null)
      throw It(), je;
    z = e;
  }
}
function Ct() {
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
  var t = R, r = T;
  ve(null), te(null);
  try {
    return e();
  } finally {
    ve(t), te(r);
  }
}
function Lr(e, t, r, n = r) {
  e.addEventListener(t, () => Qn(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), n();
  } : e.__on_r = n, Hr();
}
const jr = /* @__PURE__ */ new Set(), St = /* @__PURE__ */ new Set();
function de(e) {
  for (var t = 0; t < e.length; t++)
    jr.add(e[t]);
  for (var r of St)
    r(e);
}
function Xe(e) {
  var b;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = ((b = e.composedPath) == null ? void 0 : b.call(e)) || [], a = (
    /** @type {null | Element} */
    i[0] || e.target
  ), l = 0, u = e.__root;
  if (u) {
    var f = i.indexOf(u);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var s = i.indexOf(t);
    if (s === -1)
      return;
    f <= s && (l = f);
  }
  if (a = /** @type {Element} */
  i[l] || e.target, a !== t) {
    at(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var o = R, c = T;
    ve(null), te(null);
    try {
      for (var v, d = []; a !== null; ) {
        var h = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var _ = a["__" + n];
          if (_ !== void 0 && !/** @type {any} */
          a.disabled)
            if (zt(_)) {
              var [w, ...m] = _;
              w.apply(a, [e, ...m]);
            } else
              _.call(a, e);
        } catch ($) {
          v ? d.push($) : v = $;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        a = h;
      }
      if (v) {
        for (let $ of d)
          queueMicrotask(() => {
            throw $;
          });
        throw v;
      }
    } finally {
      e.__root = t, delete e.currentTarget, ve(o), te(c);
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
    T
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function E(e, t) {
  var r = (t & bn) !== 0, n = (t & wn) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    if (O)
      return Ie(z, null), z;
    i === void 0 && (i = ei(a ? e : "<!>" + e), r || (i = /** @type {Node} */
    /* @__PURE__ */ Ce(i)));
    var l = (
      /** @type {TemplateNode} */
      n ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ce(l)
      ), f = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      Ie(u, f);
    } else
      Ie(l, l);
    return l;
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
    T.nodes_end = z, We();
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
  $t(), t.intro = t.intro ?? !1;
  const r = t.target, n = O, i = z;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ce(r)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== tr); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ ye(a);
    if (!a)
      throw je;
    pe(!0), ae(
      /** @type {Comment} */
      a
    ), We();
    const l = Fr(e, { ...t, anchor: a });
    if (z === null || z.nodeType !== 8 || /** @type {Comment} */
    z.data !== Ot)
      throw It(), je;
    return pe(!1), /**  @type {Exports} */
    l;
  } catch (l) {
    if (l === je)
      return t.recover === !1 && Tn(), $t(), Mr(r), pe(!1), Pr(e, t);
    throw l;
  } finally {
    pe(n), ae(i);
  }
}
const Ae = /* @__PURE__ */ new Map();
function Fr(e, { target: t, anchor: r, props: n = {}, events: i, context: a, intro: l = !0 }) {
  $t();
  var u = /* @__PURE__ */ new Set(), f = (c) => {
    for (var v = 0; v < c.length; v++) {
      var d = c[v];
      if (!u.has(d)) {
        u.add(d);
        var h = ri(d);
        t.addEventListener(d, Xe, { passive: h });
        var _ = Ae.get(d);
        _ === void 0 ? (document.addEventListener(d, Xe, { passive: h }), Ae.set(d, 1)) : Ae.set(d, _ + 1);
      }
    }
  };
  f(Rt(jr)), St.add(f);
  var s = void 0, o = pr(() => {
    var c = r ?? t.appendChild(Re());
    return Fe(() => {
      if (a) {
        le({});
        var v = (
          /** @type {ComponentContext} */
          fe
        );
        v.c = a;
      }
      i && (n.$$events = i), O && Ie(
        /** @type {TemplateNode} */
        c,
        null
      ), Nt = l, s = e(c, n) || {}, Nt = !0, O && (T.nodes_end = z), a && se();
    }), () => {
      var h;
      for (var v of u) {
        t.removeEventListener(v, Xe);
        var d = (
          /** @type {number} */
          Ae.get(v)
        );
        --d === 0 ? (document.removeEventListener(v, Xe), Ae.delete(v)) : Ae.set(v, d);
      }
      St.delete(f), At.delete(s), c !== r && ((h = c.parentNode) == null || h.removeChild(c));
    };
  });
  return At.set(s, o), s;
}
let At = /* @__PURE__ */ new WeakMap();
function ii(e) {
  const t = At.get(e);
  t && t();
}
function P(e, t, r, n = null, i = !1) {
  O && We();
  var a = e, l = null, u = null, f = null, s = i ? ct : 0;
  Lt(() => {
    if (f === (f = !!t())) return;
    let o = !1;
    if (O) {
      const c = (
        /** @type {Comment} */
        a.data === qt
      );
      f === c && (a = Ct(), ae(a), pe(!1), o = !0);
    }
    f ? (l ? st(l) : l = Fe(() => r(a)), u && wt(u, () => {
      u = null;
    })) : (u ? st(u) : n && (u = Fe(() => n(a))), l && wt(l, () => {
      l = null;
    })), o && pe(!0);
  }, s), O && (a = z);
}
function F(e, t) {
  return t;
}
function ai(e, t, r, n) {
  for (var i = [], a = t.length, l = 0; l < a; l++)
    jt(t[l].e, i, !0);
  var u = a > 0 && i.length === 0 && r !== null;
  if (u) {
    var f = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    Mr(f), f.append(
      /** @type {Element} */
      r
    ), n.clear(), me(e, t[0].prev, t[a - 1].next);
  }
  wr(i, () => {
    for (var s = 0; s < a; s++) {
      var o = t[s];
      u || (n.delete(o.k), me(e, o.prev, o.next)), Se(o.e, !u);
    }
  });
}
function B(e, t, r, n, i, a = null) {
  var l = e, u = { flags: t, items: /* @__PURE__ */ new Map(), first: null };
  {
    var f = (
      /** @type {Element} */
      e
    );
    l = O ? ae(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Ce(f)
    ) : f.appendChild(Re());
  }
  O && We();
  var s = null, o = !1;
  Lt(() => {
    var c = r(), v = zt(c) ? c : c == null ? [] : Rt(c), d = v.length;
    if (o && d === 0)
      return;
    o = d === 0;
    let h = !1;
    if (O) {
      var _ = (
        /** @type {Comment} */
        l.data === qt
      );
      _ !== (d === 0) && (l = Ct(), ae(l), pe(!1), h = !0);
    }
    if (O) {
      for (var w = null, m, b = 0; b < d; b++) {
        if (z.nodeType === 8 && /** @type {Comment} */
        z.data === Ot) {
          l = /** @type {Comment} */
          z, h = !0, pe(!1);
          break;
        }
        var $ = v[b], S = n($, b);
        m = Br(z, u, w, null, $, S, b, i, t), u.items.set(S, m), w = m;
      }
      d > 0 && ae(Ct());
    }
    if (!O) {
      var N = (
        /** @type {Effect} */
        R
      );
      li(v, u, l, i, t, (N.f & oe) !== 0, n);
    }
    a !== null && (d === 0 ? s ? st(s) : s = Fe(() => a(l)) : s !== null && wt(s, () => {
      s = null;
    })), h && pe(!0), r();
  }), O && (l = z);
}
function li(e, t, r, n, i, a, l) {
  var u = e.length, f = t.items, s = t.first, o = s, c, v = null, d = [], h = [], _, w, m, b;
  for (b = 0; b < u; b += 1) {
    if (_ = e[b], w = l(_, b), m = f.get(w), m === void 0) {
      var $ = o ? (
        /** @type {TemplateNode} */
        o.e.nodes_start
      ) : r;
      v = Br(
        $,
        t,
        v,
        v === null ? t.first : v.next,
        _,
        w,
        b,
        n,
        i
      ), f.set(w, v), d = [], h = [], o = v.next;
      continue;
    }
    if (si(m, _, b), m.e.f & oe && st(m.e), m !== o) {
      if (c !== void 0 && c.has(m)) {
        if (d.length < h.length) {
          var S = h[0], N;
          v = S.prev;
          var A = d[0], D = d[d.length - 1];
          for (N = 0; N < d.length; N += 1)
            Wt(d[N], S, r);
          for (N = 0; N < h.length; N += 1)
            c.delete(h[N]);
          me(t, A.prev, D.next), me(t, v, A), me(t, D, S), o = S, v = D, b -= 1, d = [], h = [];
        } else
          c.delete(m), Wt(m, o, r), me(t, m.prev, m.next), me(t, m, v === null ? t.first : v.next), me(t, v, m), v = m;
        continue;
      }
      for (d = [], h = []; o !== null && o.k !== w; )
        (a || !(o.e.f & oe)) && (c ?? (c = /* @__PURE__ */ new Set())).add(o), h.push(o), o = o.next;
      if (o === null)
        continue;
      m = o;
    }
    d.push(m), v = m, o = m.next;
  }
  if (o !== null || c !== void 0) {
    for (var H = c === void 0 ? [] : Rt(c); o !== null; )
      (a || !(o.e.f & oe)) && H.push(o), o = o.next;
    var ke = H.length;
    if (ke > 0) {
      var re = u === 0 ? r : null;
      ai(t, H, re, f);
    }
  }
  T.first = t.first && t.first.e, T.last = v && v.e;
}
function si(e, t, r, n) {
  fr(e.v, t), e.i = r;
}
function Br(e, t, r, n, i, a, l, u, f) {
  var s = (f & cn) !== 0, o = (f & hn) === 0, c = s ? o ? /* @__PURE__ */ Mt(i) : ee(i) : i, v = f & dn ? ee(l) : l, d = {
    i: v,
    v: c,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: n
  };
  try {
    return d.e = Fe(() => u(e, c, v), O), d.e.prev = r && r.e, d.e.next = n && n.e, r === null ? t.first = d : (r.next = d, r.e.next = d.e), n !== null && (n.prev = d, n.e.prev = d.e), d;
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
  ) : r, a = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); a !== n; ) {
    var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ye(a)
    );
    i.before(a), a = l;
  }
}
function me(e, t, r) {
  t === null ? e.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
}
function Ur(e, t, r, n, i) {
  var u;
  O && We();
  var a = (u = t.$$slots) == null ? void 0 : u[r], l = !1;
  a === !0 && (a = t.children, l = !0), a === void 0 || a(e, l ? () => n : n);
}
function V(e, t) {
  $r(() => {
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
  O && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || i[t] !== (i[t] = r) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[Sn] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && oi(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
var Zt = /* @__PURE__ */ new Map();
function oi(e) {
  var t = Zt.get(e.nodeName);
  if (t) return t;
  Zt.set(e.nodeName, t = []);
  for (var r, n = bt(e), i = Element.prototype; i !== n; ) {
    r = yn(n);
    for (var a in r)
      r[a].set && t.push(a);
    n = bt(n);
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
const fi = () => performance.now(), xe = {
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
function Vr(e) {
  xe.tasks.forEach((t) => {
    t.c(e) || (xe.tasks.delete(t), t.f());
  }), xe.tasks.size !== 0 && xe.tick(Vr);
}
function vi(e) {
  let t;
  return xe.tasks.size === 0 && xe.tick(Vr), {
    promise: new Promise((r) => {
      xe.tasks.add(t = { c: e, f: r });
    }),
    abort() {
      xe.tasks.delete(t);
    }
  };
}
function Qe(e, t) {
  e.dispatchEvent(new CustomEvent(t));
}
function ci(e) {
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
    const [i, a] = n.split(":");
    if (!i || a === void 0) break;
    const l = ci(i.trim());
    t[l] = a.trim();
  }
  return t;
}
const di = (e) => e;
function hi(e, t, r, n) {
  var i = (e & xn) !== 0, a = "both", l, u = t.inert, f, s;
  function o() {
    var _ = R, w = T;
    ve(null), te(null);
    try {
      return l ?? (l = r()(t, (n == null ? void 0 : n()) ?? /** @type {P} */
      {}, {
        direction: a
      }));
    } finally {
      ve(_), te(w);
    }
  }
  var c = {
    is_global: i,
    in() {
      t.inert = u, Qe(t, "introstart"), f = Tt(t, o(), s, 1, () => {
        Qe(t, "introend"), f == null || f.abort(), f = l = void 0;
      });
    },
    out(_) {
      t.inert = !0, Qe(t, "outrostart"), s = Tt(t, o(), f, 0, () => {
        Qe(t, "outroend"), _ == null || _();
      });
    },
    stop: () => {
      f == null || f.abort(), s == null || s.abort();
    }
  }, v = (
    /** @type {Effect} */
    T
  );
  if ((v.transitions ?? (v.transitions = [])).push(c), Nt) {
    var d = i;
    if (!d) {
      for (var h = (
        /** @type {Effect | null} */
        v.parent
      ); h && h.f & ct; )
        for (; (h = h.parent) && !(h.f & vt); )
          ;
      d = !h || (h.f & ar) !== 0;
    }
    d && dt(() => {
      Et(() => c.in());
    });
  }
}
function Tt(e, t, r, n, i) {
  var a = n === 1;
  if ($n(t)) {
    var l, u = !1;
    return $r(() => {
      if (!u) {
        var w = t({ direction: a ? "in" : "out" });
        l = Tt(e, w, r, n, i);
      }
    }), {
      abort: () => {
        u = !0, l == null || l.abort();
      },
      deactivate: () => l.deactivate(),
      reset: () => l.reset(),
      t: () => l.t()
    };
  }
  if (r == null || r.deactivate(), !(t != null && t.duration))
    return i(), {
      abort: Le,
      deactivate: Le,
      reset: Le,
      t: () => n
    };
  const { delay: f = 0, css: s, tick: o, easing: c = di } = t;
  var v = [];
  if (a && r === void 0 && (o && o(0, 1), s)) {
    var d = Xt(s(0, 1));
    v.push(d, d);
  }
  var h = () => 1 - n, _ = e.animate(v, { duration: f });
  return _.onfinish = () => {
    var w = (r == null ? void 0 : r.t()) ?? 1 - n;
    r == null || r.abort();
    var m = n - w, b = (
      /** @type {number} */
      t.duration * Math.abs(m)
    ), $ = [];
    if (b > 0) {
      if (s)
        for (var S = Math.ceil(b / 16.666666666666668), N = 0; N <= S; N += 1) {
          var A = w + m * c(N / S), D = s(A, 1 - A);
          $.push(Xt(D));
        }
      h = () => {
        var H = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          _.currentTime
        );
        return w + m * c(H / b);
      }, o && vi(() => {
        if (_.playState !== "running") return !1;
        var H = h();
        return o(H, 1 - H), !0;
      });
    }
    _ = e.animate($, { duration: b, fill: "forwards" }), _.onfinish = () => {
      h = () => n, o == null || o(n, 1 - n), i();
    };
  }, {
    abort: () => {
      _ && (_.cancel(), _.effect = null, _.onfinish = Le);
    },
    deactivate: () => {
      i = Le;
    },
    reset: () => {
      n === 0 && (o == null || o(1, 0));
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
  dt(() => {
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
      var a = e.querySelector(":checked");
      i = a && Pe(a);
    }
    r(i);
  }), dt(() => {
    var i = t();
    if (Yr(e, i, n), n && i === void 0) {
      var a = e.querySelector(":checked");
      a !== null && (i = Pe(a), r(i));
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
function xi(e) {
  for (var t = T, r = T; t !== null && !(t.f & (ce | Ve)); )
    t = t.parent;
  try {
    return te(t), e();
  } finally {
    te(r);
  }
}
function y(e, t, r, n) {
  var N;
  var i = (r & pn) !== 0, a = !ur, l = (r & gn) !== 0, u = (r & mn) !== 0, f = !1, s;
  l ? [s, f] = mi(() => (
    /** @type {V} */
    e[t]
  )) : s = /** @type {V} */
  e[t];
  var o = (N = $e(e, t)) == null ? void 0 : N.set, c = (
    /** @type {V} */
    n
  ), v = !0, d = !1, h = () => (d = !0, v && (v = !1, u ? c = Et(
    /** @type {() => V} */
    n
  ) : c = /** @type {V} */
  n), c);
  s === void 0 && n !== void 0 && (o && a && qn(), s = h(), o && o(s));
  var _;
  if (_ = () => {
    var A = (
      /** @type {V} */
      e[t]
    );
    return A === void 0 ? h() : (v = !0, d = !1, A);
  }, !(r & _n))
    return _;
  if (o) {
    var w = e.$$legacy;
    return function(A, D) {
      return arguments.length > 0 ? ((!D || w || f) && o(D ? _() : A), A) : _();
    };
  }
  var m = !1, b = !1, $ = /* @__PURE__ */ Mt(s), S = xi(
    () => /* @__PURE__ */ Hn(() => {
      var A = _(), D = g($);
      return m ? (m = !1, b = !0, D) : (b = !1, $.v = A);
    })
  );
  return i || (S.equals = or), function(A, D) {
    if (arguments.length > 0) {
      const H = D ? g(S) : l ? M(A) : A;
      return S.equals(H) || (m = !0, j($, H), d && c !== void 0 && (c = H), Et(() => g(S))), A;
    }
    return g(S);
  };
}
function bi(e) {
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
    var a;
    var r = /* @__PURE__ */ new Map(), n = (l, u) => {
      var f = /* @__PURE__ */ Mt(u);
      return r.set(l, f), f;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(l, u) {
          return g(r.get(u) ?? n(u, Reflect.get(l, u)));
        },
        has(l, u) {
          return g(r.get(u) ?? n(u, Reflect.get(l, u))), Reflect.has(l, u);
        },
        set(l, u, f) {
          return j(r.get(u) ?? n(u, f), f), Reflect.set(l, u, f);
        }
      }
    );
    xt(this, Q, (t.hydrate ? ni : Pr)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && Ir(), xt(this, he, i.$$events);
    for (const l of Object.keys(J(this, Q)))
      l === "$set" || l === "$destroy" || l === "$on" || at(this, l, {
        get() {
          return J(this, Q)[l];
        },
        /** @param {any} value */
        set(u) {
          J(this, Q)[l] = u;
        },
        enumerable: !0
      });
    J(this, Q).$set = /** @param {Record<string, any>} next */
    (l) => {
      Object.assign(i, l);
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
        return (a) => {
          const l = document.createElement("slot");
          i !== "default" && (l.name = i), k(a, l);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = yi(this);
      for (const i of this.$$s)
        i in n && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), r.default = !0) : r[i] = t(i));
      for (const i of this.attributes) {
        const a = this.$$g_p(i.name);
        a in this.$$d || (this.$$d[a] = nt(a, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = bi({
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
          for (const a of it(this.$$c)) {
            if (!((i = this.$$p_d[a]) != null && i.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const l = nt(
              a,
              this.$$d[a],
              this.$$p_d,
              "toAttribute"
            );
            l == null ? this.removeAttribute(this.$$p_d[a].attribute || a) : this.setAttribute(this.$$p_d[a].attribute || a, l);
          }
          this.$$r = !1;
        });
      });
      for (const i in this.$$l)
        for (const a of this.$$l[i]) {
          const l = this.$$c.$on(i, a);
          this.$$l_u.set(a, l);
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
  var a;
  const i = (a = r[e]) == null ? void 0 : a.type;
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
function Y(e, t, r, n, i, a) {
  let l = class extends Gr {
    constructor() {
      super(e, r, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return it(t).map(
        (u) => (t[u].attribute || u).toLowerCase()
      );
    }
  };
  return it(t).forEach((u) => {
    at(l.prototype, u, {
      get() {
        return this.$$c && u in this.$$c ? this.$$c[u] : this.$$d[u];
      },
      set(f) {
        var c;
        f = nt(u, f, t), this.$$d[u] = f;
        var s = this.$$c;
        if (s) {
          var o = (c = $e(s, u)) == null ? void 0 : c.get;
          o ? s[u] = f : s.$set({ [u]: f });
        }
      }
    });
  }), n.forEach((u) => {
    at(l.prototype, u, {
      get() {
        var f;
        return (f = this.$$c) == null ? void 0 : f[u];
      }
    });
  }), e.element = /** @type {any} */
  l, l;
}
var ki = /* @__PURE__ */ E('<button type="button"><!></button>');
const Ei = {
  hash: "svelte-1bto172",
  code: ".button.svelte-1bto172 {display:inline-block;cursor:pointer;border:0;margin-left:14px;border-radius:3em;font-weight:700;line-height:1;font-family:'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;}.button--primary.svelte-1bto172 {background-color:#1ea7fd;color:white;}.button--secondary.svelte-1bto172 {box-shadow:rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;background-color:transparent;color:#333;}.button--small.svelte-1bto172 {padding:10px 16px;font-size:12px;}.button--medium.svelte-1bto172 {padding:11px 20px;font-size:14px;}.button--large.svelte-1bto172 {padding:12px 24px;font-size:16px;}"
};
function $i(e, t) {
  V(e, Ei);
  const r = y(t, "type", 3, "primary"), n = y(t, "size", 3, "medium");
  y(t, "label", 3, "Button");
  const i = y(t, "onClick", 3, void 0);
  var a = ki();
  a.__click = function(...u) {
    var f;
    (f = i()) == null || f.apply(this, u);
  };
  var l = x(a);
  Ur(l, t, "default", {}), p(a), I(() => rt(a, `${"button button--" + n() + " button--" + r()} svelte-1bto172`)), k(e, a);
}
de(["click"]);
customElements.define("mapp-button", Y($i, { type: {}, size: {}, label: {}, onClick: {} }, ["default"], [], !0));
var Ci = /* @__PURE__ */ E('<div class="input_label svelte-1hyy719"> </div>'), Si = /* @__PURE__ */ E('<span class="input_icon svelte-1hyy719"><img width="16px" alt="in"></span>'), Ni = (e, t) => {
  t(e);
}, Ai = /* @__PURE__ */ E('<div class="input_frame svelte-1hyy719"><!> <div class="input_box svelte-1hyy719"><!> <input class="input_field svelte-1hyy719"></div></div>');
const Ti = {
  hash: "svelte-1hyy719",
  code: `.input_frame.svelte-1hyy719 {padding-right:24px;margin-bottom:14px;}.input_label.svelte-1hyy719 {margin-bottom:6px;}.input_box.svelte-1hyy719 {display:flex;color:#4a5073;background-color:#fff;border:0.0625rem solid #d1d7e0;border-radius:0.5rem;
    /* padding-right: 14px; */}.input_icon.svelte-1hyy719 {width:32px;position:relative;top:12px;left:9px;}.input_field.svelte-1hyy719 {box-shadow:none;width:280px;border:0.0625rem solid #d1d7e0;color:#66799e;background-color:transparent;background-clip:padding-box;appearance:none;border:transparent;height:40px;font-size:16px;border-style:none;border-radius:0.5rem;margin-left:4px;margin-right:8px;width:98%;}.input_field.svelte-1hyy719:focus {outline:none;}`
};
function Jr(e, t) {
  le(t, !0), V(e, Ti);
  let r = y(t, "label", 3, ""), n = y(t, "icon", 3, ""), i = y(t, "type", 3, "text"), a = y(t, "placeholder", 3, ""), l = y(t, "input", 15, ""), u = y(t, "style", 3, "");
  const f = (h) => {
    h && h.target && h.target.value && t.$$host && t.$$host.dispatchEvent(new CustomEvent("update", { detail: { input: h.target.value } }));
  };
  var s = Ai(), o = x(s);
  P(o, r, (h) => {
    var _ = Ci(), w = x(_, !0);
    p(_), I(() => L(w, r())), k(h, _);
  });
  var c = C(o, 2), v = x(c);
  P(v, n, (h) => {
    var _ = Si(), w = x(_);
    p(_), I(() => q(w, "src", n())), k(h, _);
  });
  var d = C(v, 2);
  _t(d), d.__input = [Ni, f], p(c), p(s), I(() => {
    q(s, "style", u()), q(d, "type", i()), q(d, "placeholder", a());
  }), gt(d, l), k(e, s), se();
}
de(["input"]);
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
  V(e, zi), y(t, "title", 3, "Apint.org");
  const r = y(t, "searchicon", 3, ""), n = y(t, "supportuser", 3, !1), i = y(t, "username", 3, ""), a = y(t, "userpic", 3, "");
  let l = "";
  var u = Ii(), f = x(u), s = x(f);
  Jr(s, {
    get icon() {
      return r();
    },
    placeholder: "Search",
    input: l
  });
  var o = C(s, 2);
  o.textContent = l, p(f);
  var c = C(f, 2), v = x(c);
  P(
    v,
    n,
    (d) => {
      var h = qi(), _ = C(x(h), 4), w = C(_, 2), m = x(w, !0);
      p(w), p(h), I(() => {
        q(_, "src", a()), L(m, i());
      }), k(d, h);
    },
    (d) => {
      var h = Dr(), _ = He(h);
      P(
        _,
        n,
        (w) => {
          var m = Oi();
          k(w, m);
        },
        null,
        !0
      ), k(d, h);
    }
  ), p(c), p(u), k(e, u);
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
  const a = getComputedStyle(e), l = +a.opacity, u = i === "y" ? "height" : "width", f = parseFloat(a[u]), s = i === "y" ? ["top", "bottom"] : ["left", "right"], o = s.map(
    (m) => (
      /** @type {'Left' | 'Right' | 'Top' | 'Bottom'} */
      `${m[0].toUpperCase()}${m.slice(1)}`
    )
  ), c = parseFloat(a[`padding${o[0]}`]), v = parseFloat(a[`padding${o[1]}`]), d = parseFloat(a[`margin${o[0]}`]), h = parseFloat(a[`margin${o[1]}`]), _ = parseFloat(
    a[`border${o[0]}Width`]
  ), w = parseFloat(
    a[`border${o[1]}Width`]
  );
  return {
    delay: t,
    duration: r,
    easing: n,
    css: (m) => `overflow: hidden;opacity: ${Math.min(m * 20, 1) * l};${u}: ${m * f}px;padding-${s[0]}: ${m * c}px;padding-${s[1]}: ${m * v}px;margin-${s[0]}: ${m * d}px;margin-${s[1]}: ${m * h}px;border-${s[0]}-width: ${m * _}px;border-${s[1]}-width: ${m * w}px;`
  };
}
function Hi(e) {
  return e;
}
var Li = (e, t, r) => t(g(r).title), ji = /* @__PURE__ */ E('<img alt="option" width="18px">'), Di = /* @__PURE__ */ E('<svg width="18px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-pie" class="svg-inline--fa fa-chart-pie fa-w-17 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512"><path fill="currentColor" d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"></path></svg>'), Pi = /* @__PURE__ */ E('<span><svg class="icon icon-sm" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span>'), Fi = (e, t, r) => t(g(r).title), Bi = /* @__PURE__ */ E('<a><span><span class="menu_item_icon svelte-v1mgvt"></span> <span class="menu_item_text"> </span></span></a>'), Ui = /* @__PURE__ */ E('<div class="menu_item_frame svelte-v1mgvt"></div>'), Vi = /* @__PURE__ */ E('<a><span><span class="menu_item_icon svelte-v1mgvt"><!></span> <span class="menu_item_text"> </span> <!></span></a> <!>', 1), Yi = /* @__PURE__ */ E('<div class="outer_frame svelte-v1mgvt"><div class="left_menu svelte-v1mgvt"><div class="menu_frame svelte-v1mgvt"></div></div> <div class="right_panel svelte-v1mgvt"><!> <div class="right_panel_content svelte-v1mgvt"><!></div></div></div>');
const Gi = {
  hash: "svelte-v1mgvt",
  code: `a.svelte-v1mgvt:link {text-decoration:none;}a.svelte-v1mgvt:visited {text-decoration:none;color:#eaedf2;}a.svelte-v1mgvt:hover {text-decoration:none;color:#eaedf2;}a.svelte-v1mgvt:active {text-decoration:none;}.outer_frame.svelte-v1mgvt {position:fixed;left:0px;top:0px;display:flex;height:100vh;width:100vw;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}.left_menu.svelte-v1mgvt {display:flex;flex-flow:row nowrap;width:260px !important;min-width:260px;height:100%;background-color:#262b40 !important;color:#eaedf2;}.menu_frame.svelte-v1mgvt {margin:20px 30px 20px 30px;width:100%;}.menu_item.svelte-v1mgvt {display:block;width:100%;text-align:left;padding:10px 0px;color:#eaedf2;border-radius:.5rem;margin-bottom:8px;border:.0625rem solid transparent;}.menu_item.svelte-v1mgvt:hover {background-color:#2e3650;}.menu_item_active.svelte-v1mgvt {background-color:#2e3650;border:.0625rem solid #4c5680;}.menu_item_icon.svelte-v1mgvt {display:inline-block;margin-left:12px;margin-right:.5rem;color:#fff;position:relative;top:3px;width:18px;}.menu_item_expand.svelte-v1mgvt {float:right;width:22px;}.expanded.svelte-v1mgvt {position:relative;
    /* left: -4px; */
    /* top: -2px; */transform:rotate(90deg) translateX(-2px) translateY(4px);transition:all 0.2s ease;}.menu_item_frame.svelte-v1mgvt {width:100%;}.right_panel.svelte-v1mgvt {color:#4a5073;background-color:#f5f8fb;flex:auto;height:100%;overflow-y:auto;}.right_panel_content.svelte-v1mgvt {padding:0px 20px;}`
};
function Ji(e, t) {
  le(t, !0), V(e, Gi), y(t, "title", 3, "Mapp"), y(t, "icon", 3, "");
  let r = y(t, "searchicon", 3, ""), n = y(t, "supportuser", 3, !0), i = y(t, "username", 3, ""), a = y(t, "userpic", 3, ""), l = y(t, "activeitem", 3, ""), u = y(t, "menuconfig", 7, void 0);
  typeof u() == "string" && u(JSON.parse(u()));
  let f = M({}), s = (m) => {
    f[m] ? f[m] = !f[m] : f[m] = !0;
  };
  var o = Yi(), c = x(o), v = x(c);
  B(v, 21, () => u().items, F, (m, b) => {
    var $ = Vi(), S = He($);
    S.__click = [Li, s, b];
    var N = x(S), A = x(N), D = x(A);
    P(
      D,
      () => g(b).icon,
      (K) => {
        var G = ji();
        I(() => q(G, "src", g(b).icon)), k(K, G);
      },
      (K) => {
        var G = Di();
        k(K, G);
      }
    ), p(A);
    var H = C(A, 2), ke = x(H, !0);
    p(H);
    var re = C(H, 2);
    P(re, () => g(b).subitems, (K) => {
      var G = Pi();
      I(() => rt(G, `${(f[g(b).title] ? "menu_item_expand expanded" : "menu_item_expand") ?? ""} svelte-v1mgvt`)), k(K, G);
    }), p(N), p(S);
    var ne = C(S, 2);
    P(ne, () => f[g(b).title] && g(b).subitems, (K) => {
      var G = Ui();
      B(G, 21, () => g(b).subitems, F, (sn, Ze) => {
        var Ne = Bi();
        Ne.__click = [Fi, s, Ze];
        var Pt = x(Ne), Ft = C(x(Pt), 2), on = x(Ft, !0);
        p(Ft), p(Pt), p(Ne), I(() => {
          q(Ne, "href", g(Ze).url), rt(Ne, `${(g(Ze).title == l() ? "menu_item menu_item_active" : "menu_item") ?? ""} svelte-v1mgvt`), L(on, g(Ze).title);
        }), k(sn, Ne);
      }), p(G), hi(3, G, () => Mi, () => ({ duration: 300, easing: Hi })), k(K, G);
    }), I(() => {
      q(S, "href", g(b).url), rt(S, `${(g(b).title == l() ? "menu_item menu_item_active" : "menu_item") ?? ""} svelte-v1mgvt`), L(ke, g(b).title);
    }), k(m, $);
  }), p(v), p(c);
  var d = C(c, 2), h = x(d);
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
      return a();
    }
  });
  var _ = C(h, 2), w = x(_);
  Ur(w, t, "default", {}), p(_), p(d), p(o), k(e, o), se();
}
de(["click"]);
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
function Ki(e, t, r, n, i, a) {
  if (g(t)) {
    let l = [];
    for (let u of r()) {
      let f = !1;
      for (let s of n())
        if ((i().length === 0 || i().includes(s)) && u[s].toString().toLowerCase().includes(g(t).toLowerCase())) {
          f = !0;
          break;
        }
      f && l.push(u);
    }
    j(a, M(l));
  } else
    j(a, M(r()));
}
var Wi = /* @__PURE__ */ E('<th class="svelte-15ql2st"> </th>'), Zi = /* @__PURE__ */ E('<td class="svelte-15ql2st"><a class="table_row svelte-15ql2st"> </a></td>'), Xi = /* @__PURE__ */ E('<tr class="svelte-15ql2st"></tr>'), Qi = /* @__PURE__ */ E('<div class="card_frame svelte-15ql2st"><div class="filter svelte-15ql2st"><svg data-icon-name="filterIcon" viewBox="0 0 18 18" width="18" height="18" aria-hidden="true"><path fill-rule="evenodd" d="M2 4h14v2H2V4zm2 4h10v2H4V8zm2 4h6v2H6v-2z"></path></svg> <span class="filter_input_box svelte-15ql2st">Filter <input class="filter_input svelte-15ql2st" placeholder="Value to filter for"></span></div> <table class="svelte-15ql2st"><thead class="svelte-15ql2st"><tr class="svelte-15ql2st"></tr></thead><tbody class="svelte-15ql2st"></tbody></table></div>');
const ea = {
  hash: "svelte-15ql2st",
  code: `.card_frame.svelte-15ql2st {border-color:#eaedf2 !important;box-shadow:0 2px 18px rgba(0, 0, 0, 0.02) !important;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:0.0625rem solid rgba(46, 54, 80, 0.125);border-radius:0.5rem;padding:22px 32px;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}table.svelte-15ql2st {width:100%;margin-bottom:1rem;color:#4a5073;vertical-align:top;border-color:#eaedf2;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;border-collapse:collapse;}table.svelte-15ql2st thead:where(.svelte-15ql2st) tr:where(.svelte-15ql2st) th:where(.svelte-15ql2st) {vertical-align:center;text-align:left;border-bottom:1px solid #eaedf2 !important;font-size:12px;font-weight:bold;padding-left:14px;padding-bottom:10px;}.table_row.svelte-15ql2st {padding-left:14px;padding-top:14px;padding-bottom:14px;border-bottom:1px solid #eaedf2 !important;}table.svelte-15ql2st tbody:where(.svelte-15ql2st) tr:where(.svelte-15ql2st):hover {background-color:#eff0f2;cursor:pointer;border-radius:0.5rem;}a.svelte-15ql2st:link {text-decoration:none;color:#4a5073;}a.svelte-15ql2st:visited {text-decoration:none;color:#4a5073;}a.svelte-15ql2st:hover {text-decoration:none;color:#4a5073;}a.svelte-15ql2st:active {text-decoration:none;}td.svelte-15ql2st a:where(.svelte-15ql2st) {display:block;}.filter.svelte-15ql2st {margin-top:20px;margin-bottom:8px;margin-left:8px;}.filter_input_box.svelte-15ql2st {position:relative;top:-3px;font-weight:bold;font-size:14px;}.filter_input.svelte-15ql2st {width:50%;margin-left:8px;font-family:Google Sans,
      Roboto,
      Helvetica,
      Arial,
      sans-serif;padding:var(--padding);
    /* border: 2px solid gray; */border:0px;outline:none;border-radius:0px;
    /* background-color: #f1f3f4; */background-color:rgb(255, 255, 255);}`
};
function ta(e, t) {
  le(t, !0), V(e, ea);
  let r = y(t, "headers", 23, () => []), n = y(t, "headerssearchable", 23, () => []), i = y(t, "rows", 23, () => []), a = y(t, "linkprefix", 3, ""), l = y(t, "linkcolumnname", 3, ""), u = y(t, "update", 3, void 0);
  typeof r() == "string" && r(JSON.parse(r())), typeof n() == "string" && n(JSON.parse(n())), typeof i() == "string" && i(JSON.parse(i()));
  let f = ze(M(i())), s = ze("");
  const o = ($) => {
    t.$$host.dispatchEvent(new CustomEvent("update", { detail: { rowIndex: $ } })), u() && u()({ detail: { rowIndex: $ } });
  };
  var c = Qi(), v = x(c), d = C(x(v), 2), h = C(x(d));
  _t(h), h.__keyup = [
    Ki,
    s,
    i,
    r,
    n,
    f
  ], p(d), p(v);
  var _ = C(v, 2), w = x(_), m = x(w);
  B(m, 21, r, F, ($, S) => {
    var N = Wi(), A = x(N, !0);
    p(N), I(() => L(A, g(S))), k($, N);
  }), p(m), p(w);
  var b = C(w);
  B(b, 21, () => g(f), F, ($, S, N) => {
    var A = Xi();
    A.__click = () => {
      o(N);
    }, B(A, 21, () => Object.entries(g(S)), F, (H, ke) => {
      var re = Zi(), ne = x(re), K = x(ne, !0);
      p(ne), p(re), I(() => {
        q(ne, "href", a() + g(S)[l()]), L(K, g(ke)[1]);
      }), k(H, re);
    }), p(A), k($, A);
  }), p(b), p(_), p(c), gt(h, () => g(s), ($) => j(s, $)), k(e, c), se();
}
de(["keyup", "click"]);
customElements.define("mapp-table", Y(
  ta,
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
var ra = /* @__PURE__ */ E('<div class="menu_item svelte-uzkebs"><a href="https://google.com" target="_blank"> </a></div>'), na = /* @__PURE__ */ E('<div class="menu_frame svelte-uzkebs"><div class="arrow svelte-uzkebs"></div> <div class="menu svelte-uzkebs"></div></div>');
const ia = {
  hash: "svelte-uzkebs",
  code: '.menu_frame.svelte-uzkebs {position:fixed;min-width:200px;min-height:200px;max-width:180px;background:#fff;box-shadow:#00000026 0 2px 10px;border:1px solid rgb(242, 242, 242);z-index:6;}.arrow.svelte-uzkebs {position:relative;top:-31px;left:163px;border:1px solid rgb(242, 242, 242);box-shadow:#00000026 -1px -1px 1px -1px;transform:rotate(45deg) translate(16px, 16px);background:#fff;height:14px;width:14px;display:block;content:"";pointer-events:none;z-index:1;}.menu.svelte-uzkebs {position:relative;top:-16px;background:#fff;min-height:140px;z-index:2;padding:14px;}.menu_item.svelte-uzkebs {height:14px;width:100%;font-size:18px;padding-bottom:12px;}'
};
function Wr(e, t) {
  V(e, ia);
  let r = y(t, "top", 3, "54px"), n = y(t, "left", 3, "12px"), i = y(t, "menuItems", 19, () => []);
  var a = na(), l = C(x(a), 2);
  B(l, 21, i, F, (u, f) => {
    var s = ra(), o = x(s), c = x(o, !0);
    p(o), p(s), I(() => L(c, g(f).title)), k(u, s);
  }), p(l), p(a), I(() => q(a, "style", `top: ${r()}; left: ${n()}`)), k(e, a);
}
customElements.define("mountainview-elegant-dropdown", Y(Wr, { top: {}, left: {}, menuItems: {} }, [], [], !0));
var aa = /* @__PURE__ */ E('<img class="title_logo" alt="logo" width="36px" height="34px" style="padding: 6px; margin-top: 4px;">'), la = /* @__PURE__ */ E('<span class="title_text svelte-1bu8l9f"> </span>'), sa = /* @__PURE__ */ E('<a href="https://google.com" target="_blank" class="title svelte-1bu8l9f"><!> <!></a>'), oa = (e, t, r) => t(e, g(r).title), ua = /* @__PURE__ */ E('<button class="menu_button svelte-1bu8l9f"><img class="menu_icon svelte-1bu8l9f"></button> <!>', 1), fa = /* @__PURE__ */ E('<div class="header svelte-1bu8l9f"><!> <div class="right_menus svelte-1bu8l9f"></div></div>');
const va = {
  hash: "svelte-1bu8l9f",
  code: ".header.svelte-1bu8l9f {display:flex;flex-flow:row wrap;justify-content:space-between;align-items:flex-start;background-color:rgba(255, 255, 255, 1);height:57px;font-weight:560;color:#333;font-size:20px;padding:0px;margin:0px;position:sticky;top:0;z-index:2;border-bottom:solid 1px rgba(222, 222, 222, 1);}.title.svelte-1bu8l9f {height:100%;display:flex;margin-left:12px;color:#111;font-family:'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;}.title.svelte-1bu8l9f:link {text-decoration:none;}.title.svelte-1bu8l9f:visited {text-decoration:none;color:#222;}.title.svelte-1bu8l9f:hover {text-decoration:none;color:darkgray}.title.svelte-1bu8l9f:active {text-decoration:none;}.title_text.svelte-1bu8l9f {display:flex;align-items:center;}.right_menus.svelte-1bu8l9f {display:flex;height:100%;flex:auto;flex-flow:row-reverse;}.menu_button.svelte-1bu8l9f {height:100%;display:flex;align-items:center;margin-right:18px;cursor:pointer;border:0px;background-color:transparent;}.menu_icon.svelte-1bu8l9f {height:30px;width:30px;object-fit:cover;}.menu_icon.svelte-1bu8l9f:hover {cursor:pointer;}.round.svelte-1bu8l9f {height:40px;width:40px;border-radius:50%;}"
};
function Zr(e, t) {
  le(t, !0), V(e, va);
  let r = y(t, "title", 3, ""), n = y(t, "logoUrl", 3, ""), i = y(t, "menus", 23, () => []);
  typeof i() == "string" && i(JSON.parse(i()));
  let a = M({});
  function l(c, v) {
    c && c.stopPropagation();
    for (const d of Object.keys(a))
      d != v && (a[d] = !1);
    a[v] ? a[v] = !1 : a[v] = !0;
  }
  function u(c) {
    let v = { top: "54px", left: "12px" }, d = document.getElementById(c);
    if (d) {
      var h = d.getBoundingClientRect();
      v.top = (h.top + h.height + 4).toString() + "px", v.left = (h.right - 200).toString() + "px";
    }
    return v;
  }
  document.onclick = function() {
    for (const v of Object.keys(a))
      a[v] = !1;
  };
  var f = fa(), s = x(f);
  P(s, () => r() || n(), (c) => {
    var v = sa(), d = x(v);
    P(d, n, (_) => {
      var w = aa();
      I(() => q(w, "src", n())), k(_, w);
    });
    var h = C(d, 2);
    P(h, r, (_) => {
      var w = la(), m = x(w, !0);
      p(w), I(() => L(m, r())), k(_, w);
    }), p(v), k(c, v);
  });
  var o = C(s, 2);
  B(o, 21, i, F, (c, v) => {
    var d = ua(), h = He(d);
    h.__click = [oa, l, v];
    var _ = x(h);
    p(h);
    var w = C(h, 2);
    P(w, () => a[g(v).title], (m) => {
      Wr(m, {
        get menuItems() {
          return g(v).items;
        },
        get top() {
          return u(g(v).title + "_button").top;
        },
        get left() {
          return u(g(v).title + "_button").left;
        }
      });
    }), I(() => {
      q(h, "id", g(v).title + "_button"), q(_, "alt", g(v).title), q(_, "src", g(v).imageUrl), Dt(_, "round", g(v).imageShape === "round");
    }), k(c, d);
  }), p(o), p(f), k(e, f), se();
}
de(["click"]);
customElements.define("mountainview-elegant-header", Y(Zr, { title: {}, logoUrl: {}, menus: {} }, [], [], !0));
function ca(e, t, r, n) {
  t.searchloadresults && j(r, M(t.searchloadresults(n())));
}
function da(e, t, r, n) {
  e.key === "Escape" ? j(t, M([])) : e.key === "Enter" && (r.searchsubmit && r.searchsubmit(n()), document.dispatchEvent(new CustomEvent("SearchSubmit", { detail: { text: n() } })));
}
var ha = /* @__PURE__ */ E('<div class="result svelte-ihhy65"> </div>'), pa = /* @__PURE__ */ E('<div class="results svelte-ihhy65"><div class="results_frame svelte-ihhy65"><div class="results_list svelte-ihhy65"></div></div></div>'), _a = /* @__PURE__ */ E('<div class="input_frame svelte-ihhy65"><div class="search_frame svelte-ihhy65"><div class="search_icon svelte-ihhy65"><svg width="18px" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#9aa0a6" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></div> <input class="search_input svelte-ihhy65"></div></div> <!>', 1);
const ga = {
  hash: "svelte-ihhy65",
  code: `.input_frame.svelte-ihhy65 {min-height:44px;background:#fff;border:1px solid #dfe1e5;box-shadow:0px 2px 8px 0px rgba(60, 64, 67, 0.25);border-radius:24px;margin:0 auto;max-width:584px;}.search_frame.svelte-ihhy65 {display:flex;flex-flow:row wrap;width:100%;flex:1;padding:0 8px 0 0;}.search_icon.svelte-ihhy65 {display:flex;align-items:center;padding-right:13px;padding-left:14px;height:46px;color:#9aa0a6;z-index:11;}.search_input.svelte-ihhy65 {display:flex;flex-wrap:wrap;flex:1;border:none;border-radius:24px;font-size:18px;width:100%;z-index:11;background-color:transparent;}.search_input.svelte-ihhy65:focus,
  .search_input.svelte-ihhy65:focus {outline:none;}.results.svelte-ihhy65 {position:absolute;margin:0px 0px 0px 0px;width:398px;border:1px solid #dfe1e5;z-index:10;background:#fff;border-radius:0px 0px 24px 24px;}.results_list.svelte-ihhy65 {margin-top:10px;background:#fff;width:100%;z-index:10;}.results_frame.svelte-ihhy65 {position:relative;top:-22px;background:#fff;border-left:1px solid #dfe1e5;border-right:1px solid #dfe1e5;width:398px;left:-1px;z-index:10;height:300px;overflow-x:hidden;}.result.svelte-ihhy65 {width:100%;padding:4px 0px 4px 16px;}.result.svelte-ihhy65:hover {cursor:pointer;background-color:#dfe1e5;}`
};
function Xr(e, t) {
  le(t, !0), V(e, ga);
  let r = y(t, "searchtext", 15), n = ze(M([]));
  document.addEventListener("SearchResults", (s) => {
    s.detail.results && j(n, M(s.detail.results));
  });
  var i = _a(), a = He(i), l = x(a), u = C(x(l), 2);
  _t(u), u.__input = [ca, t, n, r], u.__keyup = [da, n, t, r], p(l), p(a);
  var f = C(a, 2);
  P(f, () => g(n).length > 0, (s) => {
    var o = pa(), c = x(o), v = x(c);
    B(v, 21, () => g(n), F, (d, h) => {
      var _ = ha(), w = x(_, !0);
      p(_), I(() => L(w, g(h))), k(d, _);
    }), p(v), p(c), p(o), k(s, o);
  }), gt(u, r), k(e, i), se();
}
de(["input", "keyup"]);
customElements.define("mountainview-elegant-search", Y(
  Xr,
  {
    searchtext: {},
    searchloadresults: {},
    searchsubmit: {}
  },
  [],
  [],
  !0
));
var ma = /* @__PURE__ */ E('<img class="hero_image svelte-pm9u4t" alt="logo">'), xa = /* @__PURE__ */ E('<div class="hero svelte-pm9u4t"><div class="hero_logo svelte-pm9u4t"><!> <div class="hero_logo_text svelte-pm9u4t"> </div></div> <div class="hero_search svelte-pm9u4t"><!></div></div>');
const ba = {
  hash: "svelte-pm9u4t",
  code: '.hero.svelte-pm9u4t {width:100%;display:flex;justify-content:center;flex-flow:row wrap;}.hero_logo.svelte-pm9u4t {display:flex;margin-top:150px;width:100%;justify-content:center;align-items:center;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:560;color:#333;font-size:20px;}.hero_image.svelte-pm9u4t {width:50px;height:50px;}.hero_logo_text.svelte-pm9u4t {padding-left:12px;}.hero_search.svelte-pm9u4t {width:400px;}'
};
function Qr(e, t) {
  V(e, ba);
  let r = y(t, "height", 3, "80px"), n = y(t, "title", 3, ""), i = y(t, "logoUrl", 3, ""), a = y(t, "searchtext", 15);
  var l = xa(), u = x(l), f = x(u);
  P(f, i, (d) => {
    var h = ma();
    I(() => {
      q(h, "height", `${r()}`), q(h, "src", i());
    }), k(d, h);
  });
  var s = C(f, 2), o = x(s, !0);
  p(s), p(u);
  var c = C(u, 2), v = x(c);
  Xr(v, {
    get searchtext() {
      return a();
    },
    set searchtext(d) {
      a(d);
    },
    get searchloadresults() {
      return t.searchloadresults;
    },
    get searchsubmit() {
      return t.searchsubmit;
    }
  }), p(c), p(l), I(() => {
    q(u, "style", `height: ${r()};`), L(o, n());
  }), k(e, l);
}
customElements.define("mountainview-elegant-hero-search", Y(
  Qr,
  {
    text: { reflect: !0 },
    height: {},
    title: {},
    logoUrl: {},
    searchtext: {},
    searchloadresults: {},
    searchsubmit: {}
  },
  [],
  [],
  !0
));
function wa(e, t, r) {
  e.srcElement && t(e.srcElement.value), r.onInput && r.onInput(t());
}
var ya = /* @__PURE__ */ E('<option class="svelte-1im86kb"> </option>'), ka = /* @__PURE__ */ E('<div class="select svelte-1im86kb"><select name="source" id="source" class="svelte-1im86kb"></select></div>');
const Ea = {
  hash: "svelte-1im86kb",
  code: `.select.svelte-1im86kb,
.select.svelte-1im86kb :where(.svelte-1im86kb) {margin:0;padding:0;position:relative;box-sizing:border-box;}.select.svelte-1im86kb {position:relative;background-color:#f0f0f0;border-radius:12px;width:200px;height:40px;}.select.svelte-1im86kb select:where(.svelte-1im86kb) {font-size:1rem;font-weight:normal;width:100%;padding:10px 24px 8px 10px;border:none;background-color:transparent;appearance:none;}.select.svelte-1im86kb select:where(.svelte-1im86kb):active, .select.svelte-1im86kb select:where(.svelte-1im86kb):focus {outline:none;box-shadow:none;}.select.svelte-1im86kb:after {content:"";position:absolute;top:50%;right:8px;width:0;height:0;margin-top:-2px;border-top:5px solid #aaa;border-right:5px solid transparent;border-left:5px solid transparent;}`
};
function en(e, t) {
  le(t, !0), V(e, Ea);
  let r = y(t, "input", 15), n = y(t, "options", 19, () => []);
  var i = ka(), a = x(i);
  a.__input = [wa, r, t], B(a, 21, n, F, (l, u) => {
    var f = ya(), s = {}, o = x(f, !0);
    p(f), I(() => {
      s !== (s = g(u)) && (f.value = (f.__value = g(u)) == null ? "" : g(u)), L(o, g(u));
    }), k(l, f);
  }), p(a), p(i), _i(a, r), k(e, i), se();
}
de(["input"]);
customElements.define("mountainview-elegant-select", Y(en, { input: {}, onInput: {}, options: {} }, [], [], !0));
function $a(e, t, r) {
  t() === "CARD" ? t("TABLE") : t("CARD"), r.viewselect && r.viewselect(t());
}
var Ca = (e, t, r) => t(g(r).name), Sa = /* @__PURE__ */ E('<div class="icon svelte-lvweti">✓</div>'), Na = /* @__PURE__ */ E('<div class="icon svelte-lvweti"> </div>'), Aa = /* @__PURE__ */ E('<div class="filterbar_option svelte-lvweti"><!> <div class="name svelte-lvweti"> </div></div>'), Ta = /* @__PURE__ */ E('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M3 9.5H21M3 14.5H21M8 4.5V19.5M6.2 19.5H17.8C18.9201 19.5 19.4802 19.5 19.908 19.282C20.2843 19.0903 20.5903 18.7843 20.782 18.408C21 17.9802 21 17.4201 21 16.3V7.7C21 6.5799 21 6.01984 20.782 5.59202C20.5903 5.21569 20.2843 4.90973 19.908 4.71799C19.4802 4.5 18.9201 4.5 17.8 4.5H6.2C5.0799 4.5 4.51984 4.5 4.09202 4.71799C3.71569 4.90973 3.40973 5.21569 3.21799 5.59202C3 6.01984 3 6.57989 3 7.7V16.3C3 17.4201 3 17.9802 3.21799 18.408C3.40973 18.7843 3.71569 19.0903 4.09202 19.282C4.51984 19.5 5.07989 19.5 6.2 19.5Z" stroke="#d8d8d8" stroke-width="2"></path></g></svg>'), qa = /* @__PURE__ */ E('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#d8d8d8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><g id="Complete"><g id="grid"><g><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="14.5" y="2.5"></rect><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="14.5" y="14.5"></rect><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="2.5" y="2.5"></rect><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="2.5" y="14.5"></rect></g></g></g></g></svg>'), Oa = /* @__PURE__ */ E('<div class="filterbar_frame svelte-lvweti"><div class="options svelte-lvweti"></div> <div class="filter svelte-lvweti"><button class="view_toggle svelte-lvweti"><!></button> <!></div></div>');
const Ia = {
  hash: "svelte-lvweti",
  code: `.filterbar_frame.svelte-lvweti {display:flex;max-width:2000px;
    /* margin: 20px 10px 0px 16px; */margin:20px auto 0px auto;}.options.svelte-lvweti {display:flex;justify-content:left;width:100%;margin-left:16px;}.filter.svelte-lvweti {display:flex;margin-right:16px;}.filterbar_option.svelte-lvweti {display:flex;min-width:20px;height:40px;font-size:14px;font-weight:700;color:rgb(51, 103, 214);margin-right:6px;margin-bottom:4px;height:20px;padding:4px 8px 6px;border-radius:44px;border-width:1px;border-style:solid;border-color:lightgray;user-select:none;}.filterbar_option_selected.svelte-lvweti {background-color:rgb(209, 227, 255);}.filterbar_option.svelte-lvweti:hover {cursor:pointer;background-color:rgb(209, 227, 255);}.icon.svelte-lvweti {color:rgb(51, 103, 214);font-size:16px;font-weight:700;display:inline-block;width:18px;margin-right:6px;}.name.svelte-lvweti {float:right;margin-top:2px;font-size:14px;font-weight:700;color:rgb(51, 103, 214);}.view_toggle.svelte-lvweti {margin-right:12px;width:44px;border:0px;background-color:transparent;}.view_toggle.svelte-lvweti:hover {cursor:pointer;}`
};
function tn(e, t) {
  le(t, !0), V(e, Ia);
  let r = y(t, "view", 15, "card"), n = M({});
  function i(v) {
    n[v] ? n[v] = !1 : n[v] = !0, t.typeselect && t.typeselect(n);
  }
  function a(v) {
    t.sortselect && t.sortselect(v);
  }
  var l = Oa(), u = x(l);
  B(u, 21, () => t.types, F, (v, d) => {
    var h = Aa();
    h.__click = [Ca, i, d];
    var _ = x(h);
    P(
      _,
      () => n[g(d).name] === !0,
      (b) => {
        var $ = Sa();
        k(b, $);
      },
      (b) => {
        var $ = Na(), S = x($, !0);
        p($), I(() => L(S, g(d).icon)), k(b, $);
      }
    );
    var w = C(_, 2), m = x(w, !0);
    p(w), p(h), I(() => {
      Dt(h, "filterbar_option_selected", n[g(d).name]), L(m, g(d).name);
    }), k(v, h);
  }), p(u);
  var f = C(u, 2), s = x(f);
  s.__click = [$a, r, t];
  var o = x(s);
  P(
    o,
    () => r() === "CARD",
    (v) => {
      var d = Ta();
      k(v, d);
    },
    (v) => {
      var d = qa();
      k(v, d);
    }
  ), p(s);
  var c = C(s, 2);
  en(c, {
    input: "Latest",
    get options() {
      return t.sorts;
    },
    onInput: a
  }), p(f), p(l), k(e, l), se();
}
de(["click"]);
customElements.define("mountainview-elegant-filtertypes", Y(
  tn,
  {
    types: {},
    sorts: {},
    typeselect: {},
    sortselect: {},
    view: {},
    viewselect: {}
  },
  [],
  [],
  !0
));
var za = /* @__PURE__ */ E('<img alt="type icon" class="svelte-1feueb0">'), Ra = /* @__PURE__ */ E('<img alt="type icon" class="svelte-1feueb0">'), Ma = /* @__PURE__ */ E('<div class="card_frame svelte-1feueb0"><div class="top_left_label svelte-1feueb0"><span class="svelte-1feueb0"> </span> <div class="top_right_icons svelte-1feueb0"></div></div> <img class="header_image svelte-1feueb0" alt="header preview"> <a class="title svelte-1feueb0"> </a> <a class="author svelte-1feueb0" target="_blank"><img alt="profile" class="svelte-1feueb0"> </a> <div class="footer svelte-1feueb0"><div class="description svelte-1feueb0"> </div> <div class="link svelte-1feueb0"><a target="_blank" class="svelte-1feueb0">Open asset ↗</a> <div class="type_box svelte-1feueb0"></div></div></div></div>');
const Ha = {
  hash: "svelte-1feueb0",
  code: ".card_frame.svelte-1feueb0 {display:flex;flex-wrap:wrap;width:288px;height:428px;border:1px solid var(--gm3-sys-color-surface-variant, #e1e3e1);border-radius:12px;margin:16px 16px 32px 16px;}.top_left_label.svelte-1feueb0 {display:flex;padding:12px 18px;color:#444746;width:100%;height:28px;}.top_left_label.svelte-1feueb0 span:where(.svelte-1feueb0) {white-space:nowrap;}.top_right_icons.svelte-1feueb0 {display:flex;justify-content:right;width:100%;}.top_right_icons.svelte-1feueb0 img:where(.svelte-1feueb0) {object-fit:cover;width:24px;height:24px;margin-left:4px;}.header_image.svelte-1feueb0 {width:calc(100% - 18px);margin:0px 18px;object-fit:cover;height:144px;border-radius:7px;}.title.svelte-1feueb0 {padding:12px 18px 4px;height:48px;color:#1f1f1f;font-weight:600;font-size:18px;overflow:hidden;text-overflow:ellipsis;line-height:1.5rem;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;}.title.svelte-1feueb0:hover {color:#7c7c7c;}.author.svelte-1feueb0 {display:flex;align-items:start;padding:0px 18px 4px;height:20px;color:#444746;font-size:.875rem;font-weight:400;line-height:1.25rem;overflow:hidden;text-overflow:ellipsis;}.author.svelte-1feueb0 img:where(.svelte-1feueb0) {border-radius:50%;object-fit:cover;width:18px;height:18px;margin-right:8px;}.author.svelte-1feueb0:hover {color:#757a79;}.footer.svelte-1feueb0 {display:flex;flex-direction:column;justify-content:space-between;min-height:134px;padding-top:9px;padding-bottom:3px;width:100%;}.description.svelte-1feueb0 {padding:3px 18px;height:54px;width:calc(100% - 36px);overflow:hidden;color:#444746;font-size:.875rem;font-weight:400;letter-spacing:0;line-height:1.25rem;outline:none;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;}.link.svelte-1feueb0 {display:flex;width:calc(100% - 36px);overflow:hidden;padding:0px 16px;padding-bottom:14px;}.link.svelte-1feueb0 a:where(.svelte-1feueb0) {color:#0b57d0;font-weight:600;font-size:.975rem;letter-spacing:0;line-height:1.25rem;white-space:nowrap;}.link.svelte-1feueb0 a:where(.svelte-1feueb0):hover {color:#82aae9;}.type_box.svelte-1feueb0 {display:flex;justify-content:right;flex-wrap:wrap;width:100%;}.type_box.svelte-1feueb0 img:where(.svelte-1feueb0) {object-fit:cover;width:24px;height:24px;margin-left:4px;}"
};
function rn(e, t) {
  le(t, !0), V(e, Ha);
  let r = y(t, "item", 19, () => ({
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
  var n = Ma(), i = x(n), a = x(i), l = x(a, !0);
  p(a);
  var u = C(a, 2);
  B(u, 21, () => r().categories, F, (S, N) => {
    var A = za();
    I(() => {
      q(A, "src", g(N).url), q(A, "title", g(N).title);
    }), k(S, A);
  }), p(u), p(i);
  var f = C(i, 2), s = C(f, 2), o = x(s, !0);
  p(s);
  var c = C(s, 2), v = x(c), d = C(v);
  p(c);
  var h = C(c, 2), _ = x(h), w = x(_, !0);
  p(_);
  var m = C(_, 2), b = x(m), $ = C(b, 2);
  B($, 21, () => r().types, F, (S, N) => {
    var A = Ra();
    I(() => {
      q(A, "src", g(N).url), q(A, "title", g(N).title);
    }), k(S, A);
  }), p($), p(m), p(h), p(n), I(() => {
    L(l, r().dateTime), q(f, "src", r().imageUrl), q(s, "href", r().link), L(o, r().description), q(c, "href", r().authorUrl), q(v, "src", r().authorImageUrl), L(d, ` ${r().authorName ?? ""}`), L(w, r().description), q(b, "href", r().link);
  }), k(e, n), se();
}
customElements.define("mountainview-elegant-card", Y(rn, { item: {} }, [], [], !0));
var La = /* @__PURE__ */ E('<div class="menu_frame svelte-1dvvvu9"></div>');
const ja = {
  hash: "svelte-1dvvvu9",
  code: `.menu_frame.svelte-1dvvvu9 {max-width:2000px;margin:0px auto;display:flex;
    /* justify-content: center; */flex-wrap:wrap;}`
};
function nn(e, t) {
  V(e, ja);
  var r = La();
  B(r, 21, () => t.items, F, (n, i) => {
    rn(n, {
      get item() {
        return g(i);
      }
    });
  }), p(r), k(e, r);
}
customElements.define("mountainview-elegant-cardpage", Y(nn, { items: {} }, [], [], !0));
var Da = (e, t, r) => t(g(r).name), Pa = /* @__PURE__ */ E('<div class="filterbar_option svelte-1d4e3jq"><div class="letter svelte-1d4e3jq"> </div> <div class="name svelte-1d4e3jq"> </div></div>'), Fa = /* @__PURE__ */ E('<div class="filterbar_frame svelte-1d4e3jq"></div>');
const Ba = {
  hash: "svelte-1d4e3jq",
  code: `.filterbar_frame.svelte-1d4e3jq {display:flex;justify-content:center;}.filterbar_option.svelte-1d4e3jq {display:flex;flex-flow:row wrap;width:60px;height:100px;margin:8px;user-select:none;
    /* background-color: red; */}.letter.svelte-1d4e3jq {display:flex;align-items:center;justify-content:center;width:100%;height:52px;margin:2px 2px 0px 2px;border-radius:80%;text-align:center;font-size:22px;font-weight:bold;color:#3367d6;border-width:1px;border-style:solid;border-color:transparent;}.letter_selected.svelte-1d4e3jq {background-color:rgb(228, 228, 228);}.letter.svelte-1d4e3jq:hover {cursor:pointer;border-color:lightgray;}.name.svelte-1d4e3jq {width:100%;position:relative;top:-8px;text-align:center;color:gray;font-size:14px;}`
};
function an(e, t) {
  le(t, !0), V(e, Ba);
  let r = M({});
  function n(a) {
    r[a] ? r[a] = !1 : r[a] = !0, t.categoryselect && t.categoryselect(r);
  }
  var i = Fa();
  B(i, 21, () => t.categories, F, (a, l) => {
    var u = Pa(), f = x(u);
    f.__click = [Da, n, l];
    var s = x(f, !0);
    p(f);
    var o = C(f, 2), c = x(o, !0);
    p(o), p(u), I(() => {
      Dt(f, "letter_selected", r[g(l).name]), L(s, g(l).letter), L(c, g(l).name);
    }), k(a, u);
  }), p(i), k(e, i), se();
}
de(["click"]);
customElements.define("mountainview-elegant-filtercats", Y(an, { categories: {}, categoryselect: {} }, [], [], !0));
function Ua(e, t, r, n, i) {
  if (g(t)) {
    let a = [];
    for (let l of r()) {
      let u = !1;
      for (let f of n())
        if (f.searchable && l[f.name] && l[f.name].toString().toLowerCase().includes(g(t).toLowerCase())) {
          u = !0;
          break;
        }
      u && a.push(l);
    }
    j(i, M(a));
  } else
    j(i, M(r()));
}
var Va = /* @__PURE__ */ E('<th class="svelte-1nhk8gr"> </th>'), Ya = /* @__PURE__ */ E('<td class="svelte-1nhk8gr"><a class="table_row svelte-1nhk8gr"> </a></td>'), Ga = /* @__PURE__ */ E('<td class="svelte-1nhk8gr"></td>'), Ja = /* @__PURE__ */ E('<tr class="svelte-1nhk8gr"></tr>'), Ka = /* @__PURE__ */ E('<div class="card_frame svelte-1nhk8gr"><div class="filter svelte-1nhk8gr"><svg data-icon-name="filterIcon" viewBox="0 0 18 18" width="18" height="18" aria-hidden="true"><path fill-rule="evenodd" d="M2 4h14v2H2V4zm2 4h10v2H4V8zm2 4h6v2H6v-2z"></path></svg> <span class="filter_input_box svelte-1nhk8gr">Filter <input class="filter_input svelte-1nhk8gr" placeholder="Value to filter for"></span></div> <table class="svelte-1nhk8gr"><thead class="svelte-1nhk8gr"><tr class="svelte-1nhk8gr"></tr></thead><tbody class="svelte-1nhk8gr"></tbody></table></div>');
const Wa = {
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
function ln(e, t) {
  le(t, !0), V(e, Wa);
  let r = y(t, "headers", 23, () => []), n = y(t, "rows", 23, () => []), i = y(t, "linkprefix", 3, ""), a = y(t, "linkcolumnname", 3, ""), l = y(t, "update", 3, void 0);
  typeof r() == "string" && r(JSON.parse(r())), typeof n() == "string" && n(JSON.parse(n()));
  let u = ze(M(n())), f = ze("");
  const s = (b) => {
    t.$$host.dispatchEvent(new CustomEvent("update", { detail: { rowIndex: b } })), l() && l()({ detail: { rowIndex: b } });
  };
  var o = Ka(), c = x(o), v = C(x(c), 2), d = C(x(v));
  _t(d), d.__keyup = [
    Ua,
    f,
    n,
    r,
    u
  ], p(v), p(c);
  var h = C(c, 2), _ = x(h), w = x(_);
  B(w, 21, r, F, (b, $) => {
    var S = Va(), N = x(S, !0);
    p(S), I(() => L(N, g($).displayName)), k(b, S);
  }), p(w), p(_);
  var m = C(_);
  B(m, 21, () => g(u), F, (b, $, S) => {
    var N = Ja();
    N.__click = () => {
      s(S);
    }, B(N, 21, r, F, (A, D) => {
      var H = Dr(), ke = He(H);
      P(
        ke,
        () => g($)[g(D).name],
        (re) => {
          var ne = Ya(), K = x(ne), G = x(K, !0);
          p(K), p(ne), I(() => {
            q(K, "href", i() + g($)[a()]), L(G, g($)[g(D).name]);
          }), k(re, ne);
        },
        (re) => {
          var ne = Ga();
          k(re, ne);
        }
      ), k(A, H);
    }), p(N), k(b, N);
  }), p(m), p(h), p(o), gt(d, () => g(f), (b) => j(f, b)), k(e, o), se();
}
de(["keyup", "click"]);
customElements.define("mountainview-elegant-table", Y(
  ln,
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
var Za = /* @__PURE__ */ E("<!> <!> <!> <!> <!>", 1);
const Xa = { hash: "svelte-32ttx", code: "" };
function Qa(e, t) {
  V(e, Xa);
  let r = y(t, "title", 3, ""), n = y(t, "logoUrl", 3, ""), i = y(t, "menus", 19, () => []), a = y(t, "searchtext", 7, ""), l = y(t, "categories", 19, () => []), u = y(t, "types", 19, () => []), f = y(t, "sorts", 19, () => []), s = y(t, "items", 7);
  typeof s() == "string" && s(JSON.parse(s()));
  let o = ze("CARD"), c = M([
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
  var v = Za(), d = He(v);
  Zr(d, {
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
  var h = C(d, 2);
  Qr(h, {
    get title() {
      return r();
    },
    get logoUrl() {
      return n();
    },
    get searchtext() {
      return a();
    },
    set searchtext(b) {
      a(b);
    },
    get searchloadresults() {
      return t.searchloadresults;
    },
    get searchsubmit() {
      return t.searchsubmit;
    }
  });
  var _ = C(h, 2);
  an(_, {
    get categories() {
      return l();
    },
    get categoryselect() {
      return t.categoryselect;
    }
  });
  var w = C(_, 2);
  tn(w, {
    get types() {
      return u();
    },
    get sorts() {
      return f();
    },
    get typeselect() {
      return t.typeselect;
    },
    get sortselect() {
      return t.sortselect;
    },
    get view() {
      return g(o);
    },
    set view(b) {
      j(o, M(b));
    }
  });
  var m = C(w, 2);
  P(
    m,
    () => g(o) === "CARD",
    (b) => {
      nn(b, {
        get items() {
          return s();
        }
      });
    },
    (b) => {
      ln(b, {
        get headers() {
          return c;
        },
        get rows() {
          return s();
        },
        linkprefix: "",
        linkcolumnname: "link",
        update: void 0
      });
    }
  ), k(e, v);
}
customElements.define("mountainview-elegant-buffet", Y(
  Qa,
  {
    title: {},
    logoUrl: {},
    menus: {},
    searchtext: {},
    searchloadresults: {},
    searchsubmit: {},
    categories: {},
    categoryselect: {},
    types: {},
    typeselect: {},
    sorts: {},
    sortselect: {},
    items: {}
  },
  [],
  [],
  !0
));
export {
  Qa as ElegantBuffet,
  Zr as ElegantHeader,
  Qr as ElegantHeroSearch,
  Xr as ElegantSearch,
  ln as ElegantTable,
  $i as MappButton,
  Kr as MappHeaderLite,
  Jr as MappInput,
  Ji as MappMenu,
  ta as MappTable
};
