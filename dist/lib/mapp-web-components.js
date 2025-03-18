var dn = Object.defineProperty;
var Gt = (e) => {
  throw TypeError(e);
};
var fn = (e, t, r) => t in e ? dn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ie = (e, t, r) => fn(e, typeof t != "symbol" ? t + "" : t, r), Jt = (e, t, r) => t.has(e) || Gt("Cannot " + r);
var K = (e, t, r) => (Jt(e, t, "read from private field"), r ? r.call(e) : t.get(e)), yt = (e, t, r) => t.has(e) ? Gt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), kt = (e, t, r, n) => (Jt(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r);
const hn = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(hn);
const pn = 1, _n = 2, gn = 16, mn = 1, bn = 4, xn = 8, wn = 16, yn = 4, kn = 1, En = 2, lr = "[", Rt = "[!", Mt = "]", Ue = {}, W = Symbol(), sr = !1;
function Ot(e) {
  console.warn("hydration_mismatch");
}
var Ht = Array.isArray, Lt = Array.from, ot = Object.keys, ut = Object.defineProperty, Ce = Object.getOwnPropertyDescriptor, $n = Object.getOwnPropertyDescriptors, qn = Object.prototype, Cn = Array.prototype, Et = Object.getPrototypeOf;
function Sn(e) {
  return typeof e == "function";
}
const Fe = () => {
};
function or(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const ge = 2, ur = 4, pt = 8, _t = 16, ce = 32, Je = 64, De = 128, vt = 256, X = 512, Ee = 1024, Ke = 2048, se = 4096, We = 8192, vr = 16384, gt = 32768, Nn = 1 << 18, cr = 1 << 19, Re = Symbol("$state"), An = Symbol("");
function dr(e) {
  return e === this.v;
}
function Tn(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function fr(e) {
  return !Tn(e, this.v);
}
function zn() {
  throw new Error("effect_update_depth_exceeded");
}
function In() {
  throw new Error("hydration_failed");
}
function Rn(e) {
  throw new Error("props_invalid_value");
}
function Mn() {
  throw new Error("state_descriptors_fixed");
}
function On() {
  throw new Error("state_prototype_fixed");
}
function Hn() {
  throw new Error("state_unsafe_local_read");
}
function Ln() {
  throw new Error("state_unsafe_mutation");
}
let hr = !1;
function ee(e) {
  return {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: dr,
    version: 0
  };
}
function Se(e) {
  return /* @__PURE__ */ jn(ee(e));
}
// @__NO_SIDE_EFFECTS__
function jt(e, t = !1) {
  const r = ee(e);
  return t || (r.equals = fr), r;
}
// @__NO_SIDE_EFFECTS__
function jn(e) {
  return M !== null && M.f & ge && (oe === null ? Yn([e]) : oe.push(e)), e;
}
function j(e, t) {
  return M !== null && Jn() && M.f & (ge | _t) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (oe === null || !oe.includes(e)) && Ln(), pr(e, t);
}
function pr(e, t) {
  return e.equals(t) || (e.v = t, e.version = zr(), _r(e, Ee), A !== null && A.f & X && !(A.f & ce) && (G !== null && G.includes(e) ? (me(A, Ee), bt(A)) : ke === null ? Gn([e]) : ke.push(e))), t;
}
function _r(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = r.length, i = 0; i < n; i++) {
      var a = r[i], l = a.f;
      l & Ee || (me(a, t), l & (X | De) && (l & ge ? _r(
        /** @type {Derived} */
        a,
        Ke
      ) : bt(
        /** @type {Effect} */
        a
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function gr(e) {
  var t = ge | Ee;
  A === null ? t |= De : A.f |= cr;
  const r = {
    children: null,
    ctx: ue,
    deps: null,
    equals: dr,
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
  if (M !== null && M.f & ge) {
    var n = (
      /** @type {Derived} */
      M
    );
    (n.children ?? (n.children = [])).push(r);
  }
  return r;
}
function mr(e) {
  var t = e.children;
  if (t !== null) {
    e.children = null;
    for (var r = 0; r < t.length; r += 1) {
      var n = t[r];
      n.f & ge ? Dt(
        /** @type {Derived} */
        n
      ) : Ae(
        /** @type {Effect} */
        n
      );
    }
  }
}
function br(e) {
  var t, r = A;
  te(e.parent);
  try {
    mr(e), t = Ir(e);
  } finally {
    te(r);
  }
  return t;
}
function xr(e) {
  var t = br(e), r = (Ie || e.f & De) && e.deps !== null ? Ke : X;
  me(e, r), e.equals(t) || (e.v = t, e.version = zr());
}
function Dt(e) {
  mr(e), Ge(e, 0), me(e, We), e.v = e.children = e.deps = e.ctx = e.reactions = null;
}
function Dn(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Ze(e, t, r, n = !0) {
  var i = (e & Je) !== 0, a = A, l = {
    ctx: ue,
    deps: null,
    deriveds: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Ee,
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
    var o = Me;
    try {
      Kt(!0), mt(l), l.f |= vr;
    } catch (v) {
      throw Ae(l), v;
    } finally {
      Kt(o);
    }
  } else t !== null && bt(l);
  var u = r && l.deps === null && l.first === null && l.nodes_start === null && l.teardown === null && (l.f & cr) === 0;
  if (!u && !i && n && (a !== null && Dn(l, a), M !== null && M.f & ge)) {
    var s = (
      /** @type {Derived} */
      M
    );
    (s.children ?? (s.children = [])).push(l);
  }
  return l;
}
function wr(e) {
  const t = Ze(Je, e, !0);
  return () => {
    Ae(t);
  };
}
function Xe(e) {
  return Ze(ur, e, !1);
}
function Pt(e) {
  return Ze(pt, e, !0);
}
function T(e) {
  return Ft(e);
}
function Ft(e, t = 0) {
  return Ze(pt | _t | t, e, !0);
}
function Be(e, t = !0) {
  return Ze(pt | ce, e, !0, t);
}
function yr(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = M;
    ve(null);
    try {
      t.call(null);
    } finally {
      ve(r);
    }
  }
}
function kr(e) {
  var t = e.deriveds;
  if (t !== null) {
    e.deriveds = null;
    for (var r = 0; r < t.length; r += 1)
      Dt(t[r]);
  }
}
function Er(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var n = r.next;
    Ae(r, t), r = n;
  }
}
function Pn(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    t.f & ce || Ae(t), t = r;
  }
}
function Ae(e, t = !0) {
  var r = !1;
  if ((t || e.f & Nn) && e.nodes_start !== null) {
    for (var n = e.nodes_start, i = e.nodes_end; n !== null; ) {
      var a = n === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ $e(n)
      );
      n.remove(), n = a;
    }
    r = !0;
  }
  Er(e, t && !r), kr(e), Ge(e, 0), me(e, We);
  var l = e.transitions;
  if (l !== null)
    for (const u of l)
      u.stop();
  yr(e);
  var o = e.parent;
  o !== null && o.first !== null && $r(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.parent = e.fn = e.nodes_start = e.nodes_end = null;
}
function $r(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function $t(e, t) {
  var r = [];
  Ut(e, r, !0), qr(r, () => {
    Ae(e), t && t();
  });
}
function qr(e, t) {
  var r = e.length;
  if (r > 0) {
    var n = () => --r || t();
    for (var i of e)
      i.out(n);
  } else
    t();
}
function Ut(e, t, r) {
  if (!(e.f & se)) {
    if (e.f ^= se, e.transitions !== null)
      for (const l of e.transitions)
        (l.is_global || r) && t.push(l);
    for (var n = e.first; n !== null; ) {
      var i = n.next, a = (n.f & gt) !== 0 || (n.f & ce) !== 0;
      Ut(n, t, a ? r : !1), n = i;
    }
  }
}
function ct(e) {
  Cr(e, !0);
}
function Cr(e, t) {
  if (e.f & se) {
    Qe(e) && mt(e), e.f ^= se;
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & gt) !== 0 || (r.f & ce) !== 0;
      Cr(r, i ? t : !1), r = n;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
const Fn = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let dt = !1, ft = !1, qt = [], Ct = [];
function Sr() {
  dt = !1;
  const e = qt.slice();
  qt = [], or(e);
}
function Nr() {
  ft = !1;
  const e = Ct.slice();
  Ct = [], or(e);
}
function Vt(e) {
  dt || (dt = !0, queueMicrotask(Sr)), qt.push(e);
}
function Un(e) {
  ft || (ft = !0, Fn(Nr)), Ct.push(e);
}
function Vn() {
  dt && Sr(), ft && Nr();
}
const Ar = 0, Bn = 1;
let at = Ar, Ye = !1, Me = !1;
function Kt(e) {
  Me = e;
}
let qe = [], Oe = 0;
let M = null;
function ve(e) {
  M = e;
}
let A = null;
function te(e) {
  A = e;
}
let oe = null;
function Yn(e) {
  oe = e;
}
let G = null, Z = 0, ke = null;
function Gn(e) {
  ke = e;
}
let Tr = 0, Ie = !1, ue = null;
function zr() {
  return ++Tr;
}
function Jn() {
  return !hr;
}
function Qe(e) {
  var l, o;
  var t = e.f;
  if (t & Ee)
    return !0;
  if (t & Ke) {
    var r = e.deps, n = (t & De) !== 0;
    if (r !== null) {
      var i;
      if (t & vt) {
        for (i = 0; i < r.length; i++)
          ((l = r[i]).reactions ?? (l.reactions = [])).push(e);
        e.f ^= vt;
      }
      for (i = 0; i < r.length; i++) {
        var a = r[i];
        if (Qe(
          /** @type {Derived} */
          a
        ) && xr(
          /** @type {Derived} */
          a
        ), n && A !== null && !Ie && !((o = a == null ? void 0 : a.reactions) != null && o.includes(e)) && (a.reactions ?? (a.reactions = [])).push(e), a.version > e.version)
          return !0;
      }
    }
    n || me(e, X);
  }
  return !1;
}
function Kn(e, t, r) {
  throw e;
}
function Ir(e) {
  var f;
  var t = G, r = Z, n = ke, i = M, a = Ie, l = oe, o = ue, u = e.f;
  G = /** @type {null | Value[]} */
  null, Z = 0, ke = null, M = u & (ce | Je) ? null : e, Ie = !Me && (u & De) !== 0, oe = null, ue = e.ctx;
  try {
    var s = (
      /** @type {Function} */
      (0, e.fn)()
    ), v = e.deps;
    if (G !== null) {
      var c;
      if (Ge(e, Z), v !== null && Z > 0)
        for (v.length = Z + G.length, c = 0; c < G.length; c++)
          v[Z + c] = G[c];
      else
        e.deps = v = G;
      if (!Ie)
        for (c = Z; c < v.length; c++)
          ((f = v[c]).reactions ?? (f.reactions = [])).push(e);
    } else v !== null && Z < v.length && (Ge(e, Z), v.length = Z);
    return s;
  } finally {
    G = t, Z = r, ke = n, M = i, Ie = a, oe = l, ue = o;
  }
}
function Wn(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = r.indexOf(e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  r === null && t.f & ge && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (G === null || !G.includes(t)) && (me(t, Ke), t.f & (De | vt) || (t.f ^= vt), Ge(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Ge(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Wn(e, r[n]);
}
function mt(e) {
  var t = e.f;
  if (!(t & We)) {
    me(e, X);
    var r = A;
    A = e;
    try {
      t & _t ? Pn(e) : Er(e), kr(e), yr(e);
      var n = Ir(e);
      e.teardown = typeof n == "function" ? n : null, e.version = Tr;
    } catch (i) {
      Kn(
        /** @type {Error} */
        i
      );
    } finally {
      A = r;
    }
  }
}
function Rr() {
  Oe > 1e3 && (Oe = 0, zn()), Oe++;
}
function Mr(e) {
  var t = e.length;
  if (t !== 0) {
    Rr();
    var r = Me;
    Me = !0;
    try {
      for (var n = 0; n < t; n++) {
        var i = e[n];
        i.f & X || (i.f ^= X);
        var a = [];
        Or(i, a), Zn(a);
      }
    } finally {
      Me = r;
    }
  }
}
function Zn(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var n = e[r];
      !(n.f & (We | se)) && Qe(n) && (mt(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? $r(n) : n.fn = null));
    }
}
function Xn() {
  if (Ye = !1, Oe > 1001)
    return;
  const e = qe;
  qe = [], Mr(e), Ye || (Oe = 0);
}
function bt(e) {
  at === Ar && (Ye || (Ye = !0, queueMicrotask(Xn)));
  for (var t = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (r & (Je | ce)) {
      if (!(r & X)) return;
      t.f ^= X;
    }
  }
  qe.push(t);
}
function Or(e, t) {
  var r = e.first, n = [];
  e: for (; r !== null; ) {
    var i = r.f, a = (i & ce) !== 0, l = a && (i & X) !== 0;
    if (!l && !(i & se))
      if (i & pt) {
        a ? r.f ^= X : Qe(r) && mt(r);
        var o = r.first;
        if (o !== null) {
          r = o;
          continue;
        }
      } else i & ur && n.push(r);
    var u = r.next;
    if (u === null) {
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
    r = u;
  }
  for (var v = 0; v < n.length; v++)
    o = n[v], t.push(o), Or(o, t);
}
function Hr(e) {
  var t = at, r = qe;
  try {
    Rr();
    const i = [];
    at = Bn, qe = i, Ye = !1, Mr(r);
    var n = e == null ? void 0 : e();
    return Vn(), (qe.length > 0 || i.length > 0) && Hr(), Oe = 0, n;
  } finally {
    at = t, qe = r;
  }
}
function m(e) {
  var o;
  var t = e.f, r = (t & ge) !== 0;
  if (r && t & We) {
    var n = br(
      /** @type {Derived} */
      e
    );
    return Dt(
      /** @type {Derived} */
      e
    ), n;
  }
  if (M !== null) {
    oe !== null && oe.includes(e) && Hn();
    var i = M.deps;
    G === null && i !== null && i[Z] === e ? Z++ : G === null ? G = [e] : G.push(e), ke !== null && A !== null && A.f & X && !(A.f & ce) && ke.includes(e) && (me(A, Ee), bt(A));
  } else if (r && /** @type {Derived} */
  e.deps === null) {
    var a = (
      /** @type {Derived} */
      e
    ), l = a.parent;
    l !== null && !((o = l.deriveds) != null && o.includes(a)) && (l.deriveds ?? (l.deriveds = [])).push(a);
  }
  return r && (a = /** @type {Derived} */
  e, Qe(a) && xr(a)), e.v;
}
function ht(e) {
  const t = M;
  try {
    return M = null, e();
  } finally {
    M = t;
  }
}
const Qn = ~(Ee | Ke | X);
function me(e, t) {
  e.f = e.f & Qn | t;
}
function re(e, t = !1, r) {
  ue = {
    p: ue,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
}
function ne(e) {
  const t = ue;
  if (t !== null) {
    const l = t.e;
    if (l !== null) {
      var r = A, n = M;
      t.e = null;
      try {
        for (var i = 0; i < l.length; i++) {
          var a = l[i];
          te(a.effect), ve(a.reaction), Xe(a.fn);
        }
      } finally {
        te(r), ve(n);
      }
    }
    ue = t.p, t.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
function O(e, t = null, r) {
  if (typeof e != "object" || e === null || Re in e)
    return e;
  const n = Et(e);
  if (n !== qn && n !== Cn)
    return e;
  var i = /* @__PURE__ */ new Map(), a = Ht(e), l = ee(0);
  a && i.set("length", ee(
    /** @type {any[]} */
    e.length
  ));
  var o;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(u, s, v) {
        (!("value" in v) || v.configurable === !1 || v.enumerable === !1 || v.writable === !1) && Mn();
        var c = i.get(s);
        return c === void 0 ? (c = ee(v.value), i.set(s, c)) : j(c, O(v.value, o)), !0;
      },
      deleteProperty(u, s) {
        var v = i.get(s);
        if (v === void 0)
          s in u && i.set(s, ee(W));
        else {
          if (a && typeof s == "string") {
            var c = (
              /** @type {Source<number>} */
              i.get("length")
            ), f = Number(s);
            Number.isInteger(f) && f < c.v && j(c, f);
          }
          j(v, W), Wt(l);
        }
        return !0;
      },
      get(u, s, v) {
        var h;
        if (s === Re)
          return e;
        var c = i.get(s), f = s in u;
        if (c === void 0 && (!f || (h = Ce(u, s)) != null && h.writable) && (c = ee(O(f ? u[s] : W, o)), i.set(s, c)), c !== void 0) {
          var d = m(c);
          return d === W ? void 0 : d;
        }
        return Reflect.get(u, s, v);
      },
      getOwnPropertyDescriptor(u, s) {
        var v = Reflect.getOwnPropertyDescriptor(u, s);
        if (v && "value" in v) {
          var c = i.get(s);
          c && (v.value = m(c));
        } else if (v === void 0) {
          var f = i.get(s), d = f == null ? void 0 : f.v;
          if (f !== void 0 && d !== W)
            return {
              enumerable: !0,
              configurable: !0,
              value: d,
              writable: !0
            };
        }
        return v;
      },
      has(u, s) {
        var d;
        if (s === Re)
          return !0;
        var v = i.get(s), c = v !== void 0 && v.v !== W || Reflect.has(u, s);
        if (v !== void 0 || A !== null && (!c || (d = Ce(u, s)) != null && d.writable)) {
          v === void 0 && (v = ee(c ? O(u[s], o) : W), i.set(s, v));
          var f = m(v);
          if (f === W)
            return !1;
        }
        return c;
      },
      set(u, s, v, c) {
        var y;
        var f = i.get(s), d = s in u;
        if (a && s === "length")
          for (var h = v; h < /** @type {Source<number>} */
          f.v; h += 1) {
            var p = i.get(h + "");
            p !== void 0 ? j(p, W) : h in u && (p = ee(W), i.set(h + "", p));
          }
        f === void 0 ? (!d || (y = Ce(u, s)) != null && y.writable) && (f = ee(void 0), j(f, O(v, o)), i.set(s, f)) : (d = f.v !== W, j(f, O(v, o)));
        var x = Reflect.getOwnPropertyDescriptor(u, s);
        if (x != null && x.set && x.set.call(c, v), !d) {
          if (a && typeof s == "string") {
            var g = (
              /** @type {Source<number>} */
              i.get("length")
            ), w = Number(s);
            Number.isInteger(w) && w >= g.v && j(g, w + 1);
          }
          Wt(l);
        }
        return !0;
      },
      ownKeys(u) {
        m(l);
        var s = Reflect.ownKeys(u).filter((f) => {
          var d = i.get(f);
          return d === void 0 || d.v !== W;
        });
        for (var [v, c] of i)
          c.v !== W && !(v in u) && s.push(v);
        return s;
      },
      setPrototypeOf() {
        On();
      }
    }
  );
}
function Wt(e, t = 1) {
  j(e, e.v + t);
}
function Zt(e) {
  return e !== null && typeof e == "object" && Re in e ? e[Re] : e;
}
function ei(e, t) {
  return Object.is(Zt(e), Zt(t));
}
var Xt, Lr, jr;
function St() {
  if (Xt === void 0) {
    Xt = window;
    var e = Element.prototype, t = Node.prototype;
    Lr = Ce(t, "firstChild").get, jr = Ce(t, "nextSibling").get, e.__click = void 0, e.__className = "", e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function je(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ne(e) {
  return Lr.call(e);
}
// @__NO_SIDE_EFFECTS__
function $e(e) {
  return jr.call(e);
}
function b(e, t) {
  if (!I)
    return /* @__PURE__ */ Ne(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ne(R)
  );
  if (r === null)
    r = R.appendChild(je());
  else if (t && r.nodeType !== 3) {
    var n = je();
    return r == null || r.before(n), ae(n), n;
  }
  return ae(r), r;
}
function Pe(e, t) {
  if (!I) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ne(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ $e(r) : r;
  }
  return R;
}
function S(e, t = 1, r = !1) {
  let n = I ? R : e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ $e(n);
  if (!I)
    return n;
  var i = n.nodeType;
  if (r && i !== 3) {
    var a = je();
    return n == null || n.before(a), ae(a), a;
  }
  return ae(n), /** @type {TemplateNode} */
  n;
}
function Dr(e) {
  e.textContent = "";
}
let I = !1;
function _e(e) {
  I = e;
}
let R;
function ae(e) {
  if (e === null)
    throw Ot(), Ue;
  return R = e;
}
function et() {
  return ae(
    /** @type {TemplateNode} */
    /* @__PURE__ */ $e(R)
  );
}
function _(e) {
  if (I) {
    if (/* @__PURE__ */ $e(R) !== null)
      throw Ot(), Ue;
    R = e;
  }
}
function Nt() {
  for (var e = 0, t = R; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === Mt) {
        if (e === 0) return t;
        e -= 1;
      } else (r === lr || r === Rt) && (e += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ $e(t)
    );
    t.remove(), t = n;
  }
}
let Qt = !1;
function Pr() {
  Qt || (Qt = !0, document.addEventListener(
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
function ti(e) {
  var t = M, r = A;
  ve(null), te(null);
  try {
    return e();
  } finally {
    ve(t), te(r);
  }
}
function Fr(e, t, r, n = r) {
  e.addEventListener(t, () => ti(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), n();
  } : e.__on_r = n, Pr();
}
const Ur = /* @__PURE__ */ new Set(), At = /* @__PURE__ */ new Set();
function de(e) {
  for (var t = 0; t < e.length; t++)
    Ur.add(e[t]);
  for (var r of At)
    r(e);
}
function rt(e) {
  var w;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = ((w = e.composedPath) == null ? void 0 : w.call(e)) || [], a = (
    /** @type {null | Element} */
    i[0] || e.target
  ), l = 0, o = e.__root;
  if (o) {
    var u = i.indexOf(o);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var s = i.indexOf(t);
    if (s === -1)
      return;
    u <= s && (l = u);
  }
  if (a = /** @type {Element} */
  i[l] || e.target, a !== t) {
    ut(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var v = M, c = A;
    ve(null), te(null);
    try {
      for (var f, d = []; a !== null; ) {
        var h = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var p = a["__" + n];
          if (p !== void 0 && !/** @type {any} */
          a.disabled)
            if (Ht(p)) {
              var [x, ...g] = p;
              x.apply(a, [e, ...g]);
            } else
              p.call(a, e);
        } catch (y) {
          f ? d.push(y) : f = y;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        a = h;
      }
      if (f) {
        for (let y of d)
          queueMicrotask(() => {
            throw y;
          });
        throw f;
      }
    } finally {
      e.__root = t, delete e.currentTarget, ve(v), te(c);
    }
  }
}
function ri(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function He(e, t) {
  var r = (
    /** @type {Effect} */
    A
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function $(e, t) {
  var r = (t & kn) !== 0, n = (t & En) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    if (I)
      return He(R, null), R;
    i === void 0 && (i = ri(a ? e : "<!>" + e), r || (i = /** @type {Node} */
    /* @__PURE__ */ Ne(i)));
    var l = (
      /** @type {TemplateNode} */
      n ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ne(l)
      ), u = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      He(o, u);
    } else
      He(l, l);
    return l;
  };
}
function Vr() {
  if (I)
    return He(R, null), R;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = je();
  return e.append(t, r), He(t, r), e;
}
function k(e, t) {
  if (I) {
    A.nodes_end = R, et();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const ni = ["touchstart", "touchmove"];
function ii(e) {
  return ni.includes(e);
}
let Tt = !0;
function L(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r == null ? "" : r + "");
}
function Br(e, t) {
  return Yr(e, t);
}
function ai(e, t) {
  St(), t.intro = t.intro ?? !1;
  const r = t.target, n = I, i = R;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ne(r)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== lr); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ $e(a);
    if (!a)
      throw Ue;
    _e(!0), ae(
      /** @type {Comment} */
      a
    ), et();
    const l = Yr(e, { ...t, anchor: a });
    if (R === null || R.nodeType !== 8 || /** @type {Comment} */
    R.data !== Mt)
      throw Ot(), Ue;
    return _e(!1), /**  @type {Exports} */
    l;
  } catch (l) {
    if (l === Ue)
      return t.recover === !1 && In(), St(), Dr(r), _e(!1), Br(e, t);
    throw l;
  } finally {
    _e(n), ae(i);
  }
}
const ze = /* @__PURE__ */ new Map();
function Yr(e, { target: t, anchor: r, props: n = {}, events: i, context: a, intro: l = !0 }) {
  St();
  var o = /* @__PURE__ */ new Set(), u = (c) => {
    for (var f = 0; f < c.length; f++) {
      var d = c[f];
      if (!o.has(d)) {
        o.add(d);
        var h = ii(d);
        t.addEventListener(d, rt, { passive: h });
        var p = ze.get(d);
        p === void 0 ? (document.addEventListener(d, rt, { passive: h }), ze.set(d, 1)) : ze.set(d, p + 1);
      }
    }
  };
  u(Lt(Ur)), At.add(u);
  var s = void 0, v = wr(() => {
    var c = r ?? t.appendChild(je());
    return Be(() => {
      if (a) {
        re({});
        var f = (
          /** @type {ComponentContext} */
          ue
        );
        f.c = a;
      }
      i && (n.$$events = i), I && He(
        /** @type {TemplateNode} */
        c,
        null
      ), Tt = l, s = e(c, n) || {}, Tt = !0, I && (A.nodes_end = R), a && ne();
    }), () => {
      var h;
      for (var f of o) {
        t.removeEventListener(f, rt);
        var d = (
          /** @type {number} */
          ze.get(f)
        );
        --d === 0 ? (document.removeEventListener(f, rt), ze.delete(f)) : ze.set(f, d);
      }
      At.delete(u), zt.delete(s), c !== r && ((h = c.parentNode) == null || h.removeChild(c));
    };
  });
  return zt.set(s, v), s;
}
let zt = /* @__PURE__ */ new WeakMap();
function li(e) {
  const t = zt.get(e);
  t && t();
}
function D(e, t, r, n = null, i = !1) {
  I && et();
  var a = e, l = null, o = null, u = null, s = i ? gt : 0;
  Ft(() => {
    if (u === (u = !!t())) return;
    let v = !1;
    if (I) {
      const c = (
        /** @type {Comment} */
        a.data === Rt
      );
      u === c && (a = Nt(), ae(a), _e(!1), v = !0);
    }
    u ? (l ? ct(l) : l = Be(() => r(a)), o && $t(o, () => {
      o = null;
    })) : (o ? ct(o) : n && (o = Be(() => n(a))), l && $t(l, () => {
      l = null;
    })), v && _e(!0);
  }, s), I && (a = R);
}
function F(e, t) {
  return t;
}
function si(e, t, r, n) {
  for (var i = [], a = t.length, l = 0; l < a; l++)
    Ut(t[l].e, i, !0);
  var o = a > 0 && i.length === 0 && r !== null;
  if (o) {
    var u = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    Dr(u), u.append(
      /** @type {Element} */
      r
    ), n.clear(), we(e, t[0].prev, t[a - 1].next);
  }
  qr(i, () => {
    for (var s = 0; s < a; s++) {
      var v = t[s];
      o || (n.delete(v.k), we(e, v.prev, v.next)), Ae(v.e, !o);
    }
  });
}
function U(e, t, r, n, i, a = null) {
  var l = e, o = { flags: t, items: /* @__PURE__ */ new Map(), first: null };
  {
    var u = (
      /** @type {Element} */
      e
    );
    l = I ? ae(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Ne(u)
    ) : u.appendChild(je());
  }
  I && et();
  var s = null, v = !1;
  Ft(() => {
    var c = r(), f = Ht(c) ? c : c == null ? [] : Lt(c), d = f.length;
    if (v && d === 0)
      return;
    v = d === 0;
    let h = !1;
    if (I) {
      var p = (
        /** @type {Comment} */
        l.data === Rt
      );
      p !== (d === 0) && (l = Nt(), ae(l), _e(!1), h = !0);
    }
    if (I) {
      for (var x = null, g, w = 0; w < d; w++) {
        if (R.nodeType === 8 && /** @type {Comment} */
        R.data === Mt) {
          l = /** @type {Comment} */
          R, h = !0, _e(!1);
          break;
        }
        var y = f[w], q = n(y, w);
        g = Gr(R, o, x, null, y, q, w, i, t), o.items.set(q, g), x = g;
      }
      d > 0 && ae(Nt());
    }
    if (!I) {
      var N = (
        /** @type {Effect} */
        M
      );
      oi(f, o, l, i, t, (N.f & se) !== 0, n);
    }
    a !== null && (d === 0 ? s ? ct(s) : s = Be(() => a(l)) : s !== null && $t(s, () => {
      s = null;
    })), h && _e(!0), r();
  }), I && (l = R);
}
function oi(e, t, r, n, i, a, l) {
  var o = e.length, u = t.items, s = t.first, v = s, c, f = null, d = [], h = [], p, x, g, w;
  for (w = 0; w < o; w += 1) {
    if (p = e[w], x = l(p, w), g = u.get(x), g === void 0) {
      var y = v ? (
        /** @type {TemplateNode} */
        v.e.nodes_start
      ) : r;
      f = Gr(
        y,
        t,
        f,
        f === null ? t.first : f.next,
        p,
        x,
        w,
        n,
        i
      ), u.set(x, f), d = [], h = [], v = f.next;
      continue;
    }
    if (ui(g, p, w), g.e.f & se && ct(g.e), g !== v) {
      if (c !== void 0 && c.has(g)) {
        if (d.length < h.length) {
          var q = h[0], N;
          f = q.prev;
          var C = d[0], P = d[d.length - 1];
          for (N = 0; N < d.length; N += 1)
            er(d[N], q, r);
          for (N = 0; N < h.length; N += 1)
            c.delete(h[N]);
          we(t, C.prev, P.next), we(t, f, C), we(t, P, q), v = q, f = P, w -= 1, d = [], h = [];
        } else
          c.delete(g), er(g, v, r), we(t, g.prev, g.next), we(t, g, f === null ? t.first : f.next), we(t, f, g), f = g;
        continue;
      }
      for (d = [], h = []; v !== null && v.k !== x; )
        (a || !(v.e.f & se)) && (c ?? (c = /* @__PURE__ */ new Set())).add(v), h.push(v), v = v.next;
      if (v === null)
        continue;
      g = v;
    }
    d.push(g), f = g, v = g.next;
  }
  if (v !== null || c !== void 0) {
    for (var H = c === void 0 ? [] : Lt(c); v !== null; )
      (a || !(v.e.f & se)) && H.push(v), v = v.next;
    var be = H.length;
    if (be > 0) {
      var fe = o === 0 ? r : null;
      si(t, H, fe, u);
    }
  }
  A.first = t.first && t.first.e, A.last = f && f.e;
}
function ui(e, t, r, n) {
  pr(e.v, t), e.i = r;
}
function Gr(e, t, r, n, i, a, l, o, u) {
  var s = (u & pn) !== 0, v = (u & gn) === 0, c = s ? v ? /* @__PURE__ */ jt(i) : ee(i) : i, f = u & _n ? ee(l) : l, d = {
    i: f,
    v: c,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: n
  };
  try {
    return d.e = Be(() => o(e, c, f), I), d.e.prev = r && r.e, d.e.next = n && n.e, r === null ? t.first = d : (r.next = d, r.e.next = d.e), n !== null && (n.prev = d, n.e.prev = d.e), d;
  } finally {
  }
}
function er(e, t, r) {
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
      /* @__PURE__ */ $e(a)
    );
    i.before(a), a = l;
  }
}
function we(e, t, r) {
  t === null ? e.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
}
function Jr(e, t, r, n, i) {
  var o;
  I && et();
  var a = (o = t.$$slots) == null ? void 0 : o[r], l = !1;
  a === !0 && (a = t.children, l = !0), a === void 0 || a(e, l ? () => n : n);
}
function V(e, t) {
  Vt(() => {
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
function xt(e) {
  if (I) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var n = e.value;
          z(e, "value", null), e.value = n;
        }
        if (e.hasAttribute("checked")) {
          var i = e.checked;
          z(e, "checked", null), e.checked = i;
        }
      }
    };
    e.__on_r = r, Un(r), Pr();
  }
}
function z(e, t, r, n) {
  var i = e.__attributes ?? (e.__attributes = {});
  I && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || i[t] !== (i[t] = r) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[An] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && vi(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
var tr = /* @__PURE__ */ new Map();
function vi(e) {
  var t = tr.get(e.nodeName);
  if (t) return t;
  tr.set(e.nodeName, t = []);
  for (var r, n = Et(e), i = Element.prototype; i !== n; ) {
    r = $n(n);
    for (var a in r)
      r[a].set && t.push(a);
    n = Et(n);
  }
  return t;
}
function lt(e, t) {
  var r = e.__className, n = ci(t);
  I && e.className === n ? e.__className = n : (r !== n || I && e.className !== n) && (t == null ? e.removeAttribute("class") : e.className = n, e.__className = n);
}
function ci(e) {
  return e ?? "";
}
function Le(e, t, r) {
  if (r) {
    if (e.classList.contains(t)) return;
    e.classList.add(t);
  } else {
    if (!e.classList.contains(t)) return;
    e.classList.remove(t);
  }
}
const di = () => performance.now(), ye = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (e) => requestAnimationFrame(e)
  ),
  now: () => di(),
  tasks: /* @__PURE__ */ new Set()
};
function Kr(e) {
  ye.tasks.forEach((t) => {
    t.c(e) || (ye.tasks.delete(t), t.f());
  }), ye.tasks.size !== 0 && ye.tick(Kr);
}
function fi(e) {
  let t;
  return ye.tasks.size === 0 && ye.tick(Kr), {
    promise: new Promise((r) => {
      ye.tasks.add(t = { c: e, f: r });
    }),
    abort() {
      ye.tasks.delete(t);
    }
  };
}
function nt(e, t) {
  e.dispatchEvent(new CustomEvent(t));
}
function hi(e) {
  if (e === "float") return "cssFloat";
  if (e === "offset") return "cssOffset";
  if (e.startsWith("--")) return e;
  const t = e.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(
    /** @param {any} word */
    (r) => r[0].toUpperCase() + r.slice(1)
  ).join("");
}
function rr(e) {
  const t = {}, r = e.split(";");
  for (const n of r) {
    const [i, a] = n.split(":");
    if (!i || a === void 0) break;
    const l = hi(i.trim());
    t[l] = a.trim();
  }
  return t;
}
const pi = (e) => e;
function _i(e, t, r, n) {
  var i = (e & yn) !== 0, a = "both", l, o = t.inert, u, s;
  function v() {
    var p = M, x = A;
    ve(null), te(null);
    try {
      return l ?? (l = r()(t, (n == null ? void 0 : n()) ?? /** @type {P} */
      {}, {
        direction: a
      }));
    } finally {
      ve(p), te(x);
    }
  }
  var c = {
    is_global: i,
    in() {
      t.inert = o, nt(t, "introstart"), u = It(t, v(), s, 1, () => {
        nt(t, "introend"), u == null || u.abort(), u = l = void 0;
      });
    },
    out(p) {
      t.inert = !0, nt(t, "outrostart"), s = It(t, v(), u, 0, () => {
        nt(t, "outroend"), p == null || p();
      });
    },
    stop: () => {
      u == null || u.abort(), s == null || s.abort();
    }
  }, f = (
    /** @type {Effect} */
    A
  );
  if ((f.transitions ?? (f.transitions = [])).push(c), Tt) {
    var d = i;
    if (!d) {
      for (var h = (
        /** @type {Effect | null} */
        f.parent
      ); h && h.f & gt; )
        for (; (h = h.parent) && !(h.f & _t); )
          ;
      d = !h || (h.f & vr) !== 0;
    }
    d && Xe(() => {
      ht(() => c.in());
    });
  }
}
function It(e, t, r, n, i) {
  var a = n === 1;
  if (Sn(t)) {
    var l, o = !1;
    return Vt(() => {
      if (!o) {
        var x = t({ direction: a ? "in" : "out" });
        l = It(e, x, r, n, i);
      }
    }), {
      abort: () => {
        o = !0, l == null || l.abort();
      },
      deactivate: () => l.deactivate(),
      reset: () => l.reset(),
      t: () => l.t()
    };
  }
  if (r == null || r.deactivate(), !(t != null && t.duration))
    return i(), {
      abort: Fe,
      deactivate: Fe,
      reset: Fe,
      t: () => n
    };
  const { delay: u = 0, css: s, tick: v, easing: c = pi } = t;
  var f = [];
  if (a && r === void 0 && (v && v(0, 1), s)) {
    var d = rr(s(0, 1));
    f.push(d, d);
  }
  var h = () => 1 - n, p = e.animate(f, { duration: u });
  return p.onfinish = () => {
    var x = (r == null ? void 0 : r.t()) ?? 1 - n;
    r == null || r.abort();
    var g = n - x, w = (
      /** @type {number} */
      t.duration * Math.abs(g)
    ), y = [];
    if (w > 0) {
      if (s)
        for (var q = Math.ceil(w / 16.666666666666668), N = 0; N <= q; N += 1) {
          var C = x + g * c(N / q), P = s(C, 1 - C);
          y.push(rr(P));
        }
      h = () => {
        var H = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          p.currentTime
        );
        return x + g * c(H / w);
      }, v && fi(() => {
        if (p.playState !== "running") return !1;
        var H = h();
        return v(H, 1 - H), !0;
      });
    }
    p = e.animate(y, { duration: w, fill: "forwards" }), p.onfinish = () => {
      h = () => n, v == null || v(n, 1 - n), i();
    };
  }, {
    abort: () => {
      p && (p.cancel(), p.effect = null, p.onfinish = Fe);
    },
    deactivate: () => {
      i = Fe;
    },
    reset: () => {
      n === 0 && (v == null || v(1, 0));
    },
    t: () => h()
  };
}
function wt(e, t, r = t) {
  Fr(e, "input", () => {
    var n = nr(e) ? ir(e.value) : e.value;
    r(n), n !== (n = t()) && (e.value = n ?? "");
  }), Pt(() => {
    var n = t();
    if (I && e.defaultValue !== e.value) {
      r(e.value);
      return;
    }
    nr(e) && n === ir(e.value) || e.type === "date" && !n && !e.value || n !== e.value && (e.value = n ?? "");
  });
}
function nr(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function ir(e) {
  return e === "" ? null : +e;
}
function Wr(e, t, r) {
  if (e.multiple)
    return bi(e, t);
  for (var n of e.options) {
    var i = Ve(n);
    if (ei(i, t)) {
      n.selected = !0;
      return;
    }
  }
  (!r || t !== void 0) && (e.selectedIndex = -1);
}
function gi(e, t) {
  Xe(() => {
    var r = new MutationObserver(() => {
      var n = e.__value;
      Wr(e, n);
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
function mi(e, t, r = t) {
  var n = !0;
  Fr(e, "change", () => {
    var i;
    if (e.multiple)
      i = [].map.call(e.querySelectorAll(":checked"), Ve);
    else {
      var a = e.querySelector(":checked");
      i = a && Ve(a);
    }
    r(i);
  }), Xe(() => {
    var i = t();
    if (Wr(e, i, n), n && i === void 0) {
      var a = e.querySelector(":checked");
      a !== null && (i = Ve(a), r(i));
    }
    e.__value = i, n = !1;
  }), gi(e);
}
function bi(e, t) {
  for (var r of e.options)
    r.selected = ~t.indexOf(Ve(r));
}
function Ve(e) {
  return "__value" in e ? e.__value : e.value;
}
function ar(e, t) {
  return e === t || (e == null ? void 0 : e[Re]) === t;
}
function xi(e = {}, t, r, n) {
  return Xe(() => {
    var i, a;
    return Pt(() => {
      i = a, a = (n == null ? void 0 : n()) || [], ht(() => {
        e !== r(...a) && (t(e, ...a), i && ar(r(...i), e) && t(null, ...i));
      });
    }), () => {
      Vt(() => {
        a && ar(r(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
let it = !1;
function wi(e) {
  var t = it;
  try {
    return it = !1, [e(), it];
  } finally {
    it = t;
  }
}
function yi(e) {
  for (var t = A, r = A; t !== null && !(t.f & (ce | Je)); )
    t = t.parent;
  try {
    return te(t), e();
  } finally {
    te(r);
  }
}
function E(e, t, r, n) {
  var N;
  var i = (r & mn) !== 0, a = !hr, l = (r & xn) !== 0, o = (r & wn) !== 0, u = !1, s;
  l ? [s, u] = wi(() => (
    /** @type {V} */
    e[t]
  )) : s = /** @type {V} */
  e[t];
  var v = (N = Ce(e, t)) == null ? void 0 : N.set, c = (
    /** @type {V} */
    n
  ), f = !0, d = !1, h = () => (d = !0, f && (f = !1, o ? c = ht(
    /** @type {() => V} */
    n
  ) : c = /** @type {V} */
  n), c);
  s === void 0 && n !== void 0 && (v && a && Rn(), s = h(), v && v(s));
  var p;
  if (p = () => {
    var C = (
      /** @type {V} */
      e[t]
    );
    return C === void 0 ? h() : (f = !0, d = !1, C);
  }, !(r & bn))
    return p;
  if (v) {
    var x = e.$$legacy;
    return function(C, P) {
      return arguments.length > 0 ? ((!P || x || u) && v(P ? p() : C), C) : p();
    };
  }
  var g = !1, w = !1, y = /* @__PURE__ */ jt(s), q = yi(
    () => /* @__PURE__ */ gr(() => {
      var C = p(), P = m(y);
      return g ? (g = !1, w = !0, P) : (w = !1, y.v = C);
    })
  );
  return i || (q.equals = fr), function(C, P) {
    if (arguments.length > 0) {
      const H = P ? m(q) : l ? O(C) : C;
      return q.equals(H) || (g = !0, j(y, H), d && c !== void 0 && (c = H), ht(() => m(q))), C;
    }
    return m(q);
  };
}
function ki(e) {
  return new Ei(e);
}
var pe, Q;
class Ei {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    yt(this, pe);
    /** @type {Record<string, any>} */
    yt(this, Q);
    var a;
    var r = /* @__PURE__ */ new Map(), n = (l, o) => {
      var u = /* @__PURE__ */ jt(o);
      return r.set(l, u), u;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(l, o) {
          return m(r.get(o) ?? n(o, Reflect.get(l, o)));
        },
        has(l, o) {
          return m(r.get(o) ?? n(o, Reflect.get(l, o))), Reflect.has(l, o);
        },
        set(l, o, u) {
          return j(r.get(o) ?? n(o, u), u), Reflect.set(l, o, u);
        }
      }
    );
    kt(this, Q, (t.hydrate ? ai : Br)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && Hr(), kt(this, pe, i.$$events);
    for (const l of Object.keys(K(this, Q)))
      l === "$set" || l === "$destroy" || l === "$on" || ut(this, l, {
        get() {
          return K(this, Q)[l];
        },
        /** @param {any} value */
        set(o) {
          K(this, Q)[l] = o;
        },
        enumerable: !0
      });
    K(this, Q).$set = /** @param {Record<string, any>} next */
    (l) => {
      Object.assign(i, l);
    }, K(this, Q).$destroy = () => {
      li(K(this, Q));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    K(this, Q).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    K(this, pe)[t] = K(this, pe)[t] || [];
    const n = (...i) => r.call(this, ...i);
    return K(this, pe)[t].push(n), () => {
      K(this, pe)[t] = K(this, pe)[t].filter(
        /** @param {any} fn */
        (i) => i !== n
      );
    };
  }
  $destroy() {
    K(this, Q).$destroy();
  }
}
pe = new WeakMap(), Q = new WeakMap();
let Zr;
typeof HTMLElement == "function" && (Zr = class extends HTMLElement {
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
      const r = {}, n = $i(this);
      for (const i of this.$$s)
        i in n && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), r.default = !0) : r[i] = t(i));
      for (const i of this.attributes) {
        const a = this.$$g_p(i.name);
        a in this.$$d || (this.$$d[a] = st(a, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = ki({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = wr(() => {
        Pt(() => {
          var i;
          this.$$r = !0;
          for (const a of ot(this.$$c)) {
            if (!((i = this.$$p_d[a]) != null && i.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const l = st(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = st(t, n, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
    return ot(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function st(e, t, r, n) {
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
function $i(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function B(e, t, r, n, i, a) {
  let l = class extends Zr {
    constructor() {
      super(e, r, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return ot(t).map(
        (o) => (t[o].attribute || o).toLowerCase()
      );
    }
  };
  return ot(t).forEach((o) => {
    ut(l.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(u) {
        var c;
        u = st(o, u, t), this.$$d[o] = u;
        var s = this.$$c;
        if (s) {
          var v = (c = Ce(s, o)) == null ? void 0 : c.get;
          v ? s[o] = u : s.$set({ [o]: u });
        }
      }
    });
  }), n.forEach((o) => {
    ut(l.prototype, o, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[o];
      }
    });
  }), e.element = /** @type {any} */
  l, l;
}
var qi = /* @__PURE__ */ $('<button type="button"><!></button>');
const Ci = {
  hash: "svelte-1bto172",
  code: ".button.svelte-1bto172 {display:inline-block;cursor:pointer;border:0;margin-left:14px;border-radius:3em;font-weight:700;line-height:1;font-family:'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;}.button--primary.svelte-1bto172 {background-color:#1ea7fd;color:white;}.button--secondary.svelte-1bto172 {box-shadow:rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;background-color:transparent;color:#333;}.button--small.svelte-1bto172 {padding:10px 16px;font-size:12px;}.button--medium.svelte-1bto172 {padding:11px 20px;font-size:14px;}.button--large.svelte-1bto172 {padding:12px 24px;font-size:16px;}"
};
function Si(e, t) {
  V(e, Ci);
  const r = E(t, "type", 3, "primary"), n = E(t, "size", 3, "medium");
  E(t, "label", 3, "Button");
  const i = E(t, "onClick", 3, void 0);
  var a = qi();
  a.__click = function(...o) {
    var u;
    (u = i()) == null || u.apply(this, o);
  };
  var l = b(a);
  Jr(l, t, "default", {}), _(a), T(() => lt(a, `${"button button--" + n() + " button--" + r()} svelte-1bto172`)), k(e, a);
}
de(["click"]);
customElements.define("mapp-button", B(Si, { type: {}, size: {}, label: {}, onClick: {} }, ["default"], [], !0));
var Ni = /* @__PURE__ */ $('<div class="input_label svelte-1hyy719"> </div>'), Ai = /* @__PURE__ */ $('<span class="input_icon svelte-1hyy719"><img width="16px" alt="in"></span>'), Ti = (e, t) => {
  t(e);
}, zi = /* @__PURE__ */ $('<div class="input_frame svelte-1hyy719"><!> <div class="input_box svelte-1hyy719"><!> <input class="input_field svelte-1hyy719"></div></div>');
const Ii = {
  hash: "svelte-1hyy719",
  code: `.input_frame.svelte-1hyy719 {padding-right:24px;margin-bottom:14px;}.input_label.svelte-1hyy719 {margin-bottom:6px;}.input_box.svelte-1hyy719 {display:flex;color:#4a5073;background-color:#fff;border:0.0625rem solid #d1d7e0;border-radius:0.5rem;
    /* padding-right: 14px; */}.input_icon.svelte-1hyy719 {width:32px;position:relative;top:12px;left:9px;}.input_field.svelte-1hyy719 {box-shadow:none;width:280px;border:0.0625rem solid #d1d7e0;color:#66799e;background-color:transparent;background-clip:padding-box;appearance:none;border:transparent;height:40px;font-size:16px;border-style:none;border-radius:0.5rem;margin-left:4px;margin-right:8px;width:98%;}.input_field.svelte-1hyy719:focus {outline:none;}`
};
function Xr(e, t) {
  re(t, !0), V(e, Ii);
  let r = E(t, "label", 3, ""), n = E(t, "icon", 3, ""), i = E(t, "type", 3, "text"), a = E(t, "placeholder", 3, ""), l = E(t, "input", 15, ""), o = E(t, "style", 3, "");
  const u = (h) => {
    h && h.target && h.target.value && t.$$host && t.$$host.dispatchEvent(new CustomEvent("update", { detail: { input: h.target.value } }));
  };
  var s = zi(), v = b(s);
  D(v, r, (h) => {
    var p = Ni(), x = b(p, !0);
    _(p), T(() => L(x, r())), k(h, p);
  });
  var c = S(v, 2), f = b(c);
  D(f, n, (h) => {
    var p = Ai(), x = b(p);
    _(p), T(() => z(x, "src", n())), k(h, p);
  });
  var d = S(f, 2);
  xt(d), d.__input = [Ti, u], _(c), _(s), T(() => {
    z(s, "style", o()), z(d, "type", i()), z(d, "placeholder", a());
  }), wt(d, l), k(e, s), ne();
}
de(["input"]);
customElements.define("apint-input", B(
  Xr,
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
var Ri = /* @__PURE__ */ $('<span class="user_button svelte-gns4bd"><img class="msg_icon svelte-gns4bd" alt="alerts" src="bell.svg"> <span class="msg_new svelte-gns4bd"></span> <img class="user_icon svelte-gns4bd" alt="profile"> <span class="user_name svelte-gns4bd"> </span></span>'), Mi = /* @__PURE__ */ $("<span></span>"), Oi = /* @__PURE__ */ $('<div class="header svelte-gns4bd"><div style="width: 364px;"><!> <span></span></div> <div><!></div></div>');
const Hi = {
  hash: "svelte-gns4bd",
  code: ".header.svelte-gns4bd {display:flex;justify-content:space-between;align-items:center;padding:26px 20px;font-family:'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;}.msg_icon.svelte-gns4bd {width:20px;margin-right:22px;}.msg_new.svelte-gns4bd {background-color:red;height:7px;width:7px;border-radius:50% !important;position:relative;top:4px;left:-22px;}.user_button.svelte-gns4bd {display:flex;position:relative;top:-6px;}.user_button.svelte-gns4bd:hover {cursor:pointer;}.user_name.svelte-gns4bd {padding-top:12px;padding-left:8px;}.user_icon.svelte-gns4bd {border-radius:50% !important;width:40px;}"
};
function Qr(e, t) {
  V(e, Hi), E(t, "title", 3, "Apint.org");
  const r = E(t, "searchicon", 3, ""), n = E(t, "supportuser", 3, !1), i = E(t, "username", 3, ""), a = E(t, "userpic", 3, "");
  let l = "";
  var o = Oi(), u = b(o), s = b(u);
  Xr(s, {
    get icon() {
      return r();
    },
    placeholder: "Search",
    input: l
  });
  var v = S(s, 2);
  v.textContent = l, _(u);
  var c = S(u, 2), f = b(c);
  D(
    f,
    n,
    (d) => {
      var h = Ri(), p = S(b(h), 4), x = S(p, 2), g = b(x, !0);
      _(x), _(h), T(() => {
        z(p, "src", a()), L(g, i());
      }), k(d, h);
    },
    (d) => {
      var h = Vr(), p = Pe(h);
      D(
        p,
        n,
        (x) => {
          var g = Mi();
          k(x, g);
        },
        null,
        !0
      ), k(d, h);
    }
  ), _(c), _(o), k(e, o);
}
customElements.define("mapp-headerlite", B(
  Qr,
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
function Li(e) {
  const t = e - 1;
  return t * t * t + 1;
}
function ji(e, { delay: t = 0, duration: r = 400, easing: n = Li, axis: i = "y" } = {}) {
  const a = getComputedStyle(e), l = +a.opacity, o = i === "y" ? "height" : "width", u = parseFloat(a[o]), s = i === "y" ? ["top", "bottom"] : ["left", "right"], v = s.map(
    (g) => (
      /** @type {'Left' | 'Right' | 'Top' | 'Bottom'} */
      `${g[0].toUpperCase()}${g.slice(1)}`
    )
  ), c = parseFloat(a[`padding${v[0]}`]), f = parseFloat(a[`padding${v[1]}`]), d = parseFloat(a[`margin${v[0]}`]), h = parseFloat(a[`margin${v[1]}`]), p = parseFloat(
    a[`border${v[0]}Width`]
  ), x = parseFloat(
    a[`border${v[1]}Width`]
  );
  return {
    delay: t,
    duration: r,
    easing: n,
    css: (g) => `overflow: hidden;opacity: ${Math.min(g * 20, 1) * l};${o}: ${g * u}px;padding-${s[0]}: ${g * c}px;padding-${s[1]}: ${g * f}px;margin-${s[0]}: ${g * d}px;margin-${s[1]}: ${g * h}px;border-${s[0]}-width: ${g * p}px;border-${s[1]}-width: ${g * x}px;`
  };
}
function Di(e) {
  return e;
}
var Pi = (e, t, r) => t(m(r).title), Fi = /* @__PURE__ */ $('<img alt="option" width="18px">'), Ui = /* @__PURE__ */ $('<svg width="18px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-pie" class="svg-inline--fa fa-chart-pie fa-w-17 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512"><path fill="currentColor" d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"></path></svg>'), Vi = /* @__PURE__ */ $('<span><svg class="icon icon-sm" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span>'), Bi = (e, t, r) => t(m(r).title), Yi = /* @__PURE__ */ $('<a><span><span class="menu_item_icon svelte-v1mgvt"></span> <span class="menu_item_text"> </span></span></a>'), Gi = /* @__PURE__ */ $('<div class="menu_item_frame svelte-v1mgvt"></div>'), Ji = /* @__PURE__ */ $('<a><span><span class="menu_item_icon svelte-v1mgvt"><!></span> <span class="menu_item_text"> </span> <!></span></a> <!>', 1), Ki = /* @__PURE__ */ $('<div class="outer_frame svelte-v1mgvt"><div class="left_menu svelte-v1mgvt"><div class="menu_frame svelte-v1mgvt"></div></div> <div class="right_panel svelte-v1mgvt"><!> <div class="right_panel_content svelte-v1mgvt"><!></div></div></div>');
const Wi = {
  hash: "svelte-v1mgvt",
  code: `a.svelte-v1mgvt:link {text-decoration:none;}a.svelte-v1mgvt:visited {text-decoration:none;color:#eaedf2;}a.svelte-v1mgvt:hover {text-decoration:none;color:#eaedf2;}a.svelte-v1mgvt:active {text-decoration:none;}.outer_frame.svelte-v1mgvt {position:fixed;left:0px;top:0px;display:flex;height:100vh;width:100vw;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}.left_menu.svelte-v1mgvt {display:flex;flex-flow:row nowrap;width:260px !important;min-width:260px;height:100%;background-color:#262b40 !important;color:#eaedf2;}.menu_frame.svelte-v1mgvt {margin:20px 30px 20px 30px;width:100%;}.menu_item.svelte-v1mgvt {display:block;width:100%;text-align:left;padding:10px 0px;color:#eaedf2;border-radius:.5rem;margin-bottom:8px;border:.0625rem solid transparent;}.menu_item.svelte-v1mgvt:hover {background-color:#2e3650;}.menu_item_active.svelte-v1mgvt {background-color:#2e3650;border:.0625rem solid #4c5680;}.menu_item_icon.svelte-v1mgvt {display:inline-block;margin-left:12px;margin-right:.5rem;color:#fff;position:relative;top:3px;width:18px;}.menu_item_expand.svelte-v1mgvt {float:right;width:22px;}.expanded.svelte-v1mgvt {position:relative;
    /* left: -4px; */
    /* top: -2px; */transform:rotate(90deg) translateX(-2px) translateY(4px);transition:all 0.2s ease;}.menu_item_frame.svelte-v1mgvt {width:100%;}.right_panel.svelte-v1mgvt {color:#4a5073;background-color:#f5f8fb;flex:auto;height:100%;overflow-y:auto;}.right_panel_content.svelte-v1mgvt {padding:0px 20px;}`
};
function Zi(e, t) {
  re(t, !0), V(e, Wi), E(t, "title", 3, "Mapp"), E(t, "icon", 3, "");
  let r = E(t, "searchicon", 3, ""), n = E(t, "supportuser", 3, !0), i = E(t, "username", 3, ""), a = E(t, "userpic", 3, ""), l = E(t, "activeitem", 3, ""), o = E(t, "menuconfig", 7, void 0);
  typeof o() == "string" && o(JSON.parse(o()));
  let u = O({}), s = (g) => {
    u[g] ? u[g] = !u[g] : u[g] = !0;
  };
  var v = Ki(), c = b(v), f = b(c);
  U(f, 21, () => o().items, F, (g, w) => {
    var y = Ji(), q = Pe(y);
    q.__click = [Pi, s, w];
    var N = b(q), C = b(N), P = b(C);
    D(
      P,
      () => m(w).icon,
      (Y) => {
        var J = Fi();
        T(() => z(J, "src", m(w).icon)), k(Y, J);
      },
      (Y) => {
        var J = Ui();
        k(Y, J);
      }
    ), _(C);
    var H = S(C, 2), be = b(H, !0);
    _(H);
    var fe = S(H, 2);
    D(fe, () => m(w).subitems, (Y) => {
      var J = Vi();
      T(() => lt(J, `${(u[m(w).title] ? "menu_item_expand expanded" : "menu_item_expand") ?? ""} svelte-v1mgvt`)), k(Y, J);
    }), _(N), _(q);
    var he = S(q, 2);
    D(he, () => u[m(w).title] && m(w).subitems, (Y) => {
      var J = Gi();
      U(J, 21, () => m(w).subitems, F, (le, xe) => {
        var Te = Yi();
        Te.__click = [Bi, s, xe];
        var Bt = b(Te), Yt = S(b(Bt), 2), cn = b(Yt, !0);
        _(Yt), _(Bt), _(Te), T(() => {
          z(Te, "href", m(xe).url), lt(Te, `${(m(xe).title == l() ? "menu_item menu_item_active" : "menu_item") ?? ""} svelte-v1mgvt`), L(cn, m(xe).title);
        }), k(le, Te);
      }), _(J), _i(3, J, () => ji, () => ({ duration: 300, easing: Di })), k(Y, J);
    }), T(() => {
      z(q, "href", m(w).url), lt(q, `${(m(w).title == l() ? "menu_item menu_item_active" : "menu_item") ?? ""} svelte-v1mgvt`), L(be, m(w).title);
    }), k(g, y);
  }), _(f), _(c);
  var d = S(c, 2), h = b(d);
  Qr(h, {
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
  var p = S(h, 2), x = b(p);
  Jr(x, t, "default", {}), _(p), _(d), _(v), k(e, v), ne();
}
de(["click"]);
customElements.define("mapp-menu", B(
  Zi,
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
function Xi(e, t, r, n, i, a) {
  if (m(t)) {
    let l = [];
    for (let o of r()) {
      let u = !1;
      for (let s of n())
        if ((i().length === 0 || i().includes(s)) && o[s].toString().toLowerCase().includes(m(t).toLowerCase())) {
          u = !0;
          break;
        }
      u && l.push(o);
    }
    j(a, O(l));
  } else
    j(a, O(r()));
}
var Qi = /* @__PURE__ */ $('<th class="svelte-15ql2st"> </th>'), ea = /* @__PURE__ */ $('<td class="svelte-15ql2st"><a class="table_row svelte-15ql2st"> </a></td>'), ta = /* @__PURE__ */ $('<tr class="svelte-15ql2st"></tr>'), ra = /* @__PURE__ */ $('<div class="card_frame svelte-15ql2st"><div class="filter svelte-15ql2st"><svg data-icon-name="filterIcon" viewBox="0 0 18 18" width="18" height="18" aria-hidden="true"><path fill-rule="evenodd" d="M2 4h14v2H2V4zm2 4h10v2H4V8zm2 4h6v2H6v-2z"></path></svg> <span class="filter_input_box svelte-15ql2st">Filter <input class="filter_input svelte-15ql2st" placeholder="Value to filter for"></span></div> <table class="svelte-15ql2st"><thead class="svelte-15ql2st"><tr class="svelte-15ql2st"></tr></thead><tbody class="svelte-15ql2st"></tbody></table></div>');
const na = {
  hash: "svelte-15ql2st",
  code: `.card_frame.svelte-15ql2st {border-color:#eaedf2 !important;box-shadow:0 2px 18px rgba(0, 0, 0, 0.02) !important;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:0.0625rem solid rgba(46, 54, 80, 0.125);border-radius:0.5rem;padding:22px 32px;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}table.svelte-15ql2st {width:100%;margin-bottom:1rem;color:#4a5073;vertical-align:top;border-color:#eaedf2;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;border-collapse:collapse;}table.svelte-15ql2st thead:where(.svelte-15ql2st) tr:where(.svelte-15ql2st) th:where(.svelte-15ql2st) {vertical-align:center;text-align:left;border-bottom:1px solid #eaedf2 !important;font-size:12px;font-weight:bold;padding-left:14px;padding-bottom:10px;}.table_row.svelte-15ql2st {padding-left:14px;padding-top:14px;padding-bottom:14px;border-bottom:1px solid #eaedf2 !important;}table.svelte-15ql2st tbody:where(.svelte-15ql2st) tr:where(.svelte-15ql2st):hover {background-color:#eff0f2;cursor:pointer;border-radius:0.5rem;}a.svelte-15ql2st:link {text-decoration:none;color:#4a5073;}a.svelte-15ql2st:visited {text-decoration:none;color:#4a5073;}a.svelte-15ql2st:hover {text-decoration:none;color:#4a5073;}a.svelte-15ql2st:active {text-decoration:none;}td.svelte-15ql2st a:where(.svelte-15ql2st) {display:block;}.filter.svelte-15ql2st {margin-top:20px;margin-bottom:8px;margin-left:8px;}.filter_input_box.svelte-15ql2st {position:relative;top:-3px;font-weight:bold;font-size:14px;}.filter_input.svelte-15ql2st {width:50%;margin-left:8px;font-family:Google Sans,
      Roboto,
      Helvetica,
      Arial,
      sans-serif;padding:var(--padding);
    /* border: 2px solid gray; */border:0px;outline:none;border-radius:0px;
    /* background-color: #f1f3f4; */background-color:rgb(255, 255, 255);}`
};
function ia(e, t) {
  re(t, !0), V(e, na);
  let r = E(t, "headers", 23, () => []), n = E(t, "headerssearchable", 23, () => []), i = E(t, "rows", 23, () => []), a = E(t, "linkprefix", 3, ""), l = E(t, "linkcolumnname", 3, ""), o = E(t, "update", 3, void 0);
  typeof r() == "string" && r(JSON.parse(r())), typeof n() == "string" && n(JSON.parse(n())), typeof i() == "string" && i(JSON.parse(i()));
  let u = Se(O(i())), s = Se("");
  const v = (y) => {
    t.$$host.dispatchEvent(new CustomEvent("update", { detail: { rowIndex: y } })), o() && o()({ detail: { rowIndex: y } });
  };
  var c = ra(), f = b(c), d = S(b(f), 2), h = S(b(d));
  xt(h), h.__keyup = [
    Xi,
    s,
    i,
    r,
    n,
    u
  ], _(d), _(f);
  var p = S(f, 2), x = b(p), g = b(x);
  U(g, 21, r, F, (y, q) => {
    var N = Qi(), C = b(N, !0);
    _(N), T(() => L(C, m(q))), k(y, N);
  }), _(g), _(x);
  var w = S(x);
  U(w, 21, () => m(u), F, (y, q, N) => {
    var C = ta();
    C.__click = () => {
      v(N);
    }, U(C, 21, () => Object.entries(m(q)), F, (H, be) => {
      var fe = ea(), he = b(fe), Y = b(he, !0);
      _(he), _(fe), T(() => {
        z(he, "href", a() + m(q)[l()]), L(Y, m(be)[1]);
      }), k(H, fe);
    }), _(C), k(y, C);
  }), _(w), _(p), _(c), wt(h, () => m(s), (y) => j(s, y)), k(e, c), ne();
}
de(["keyup", "click"]);
customElements.define("mapp-table", B(
  ia,
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
var aa = /* @__PURE__ */ $('<div class="menu_item svelte-15kv3ld"><a href="https://google.com" target="_blank"> </a></div>'), la = /* @__PURE__ */ $('<div class="menu_frame svelte-15kv3ld"><div class="arrow svelte-15kv3ld"></div> <div class="menu svelte-15kv3ld"></div></div>');
const sa = {
  hash: "svelte-15kv3ld",
  code: '.menu_frame.svelte-15kv3ld {position:fixed;top:"57px";left:calc(100vw-24);min-width:200px;min-height:200px;max-width:180px;background:#fff;box-shadow:#00000026 0 2px 10px;border:1px solid rgb(242, 242, 242);z-index:6;}.arrow.svelte-15kv3ld {position:relative;top:-31px;left:163px;border:1px solid rgb(242, 242, 242);box-shadow:#00000026 -1px -1px 1px -1px;transform:rotate(45deg) translate(16px, 16px);background:#fff;height:14px;width:14px;display:block;content:"";pointer-events:none;z-index:1;}.menu.svelte-15kv3ld {position:relative;top:-16px;background:#fff;min-height:140px;z-index:2;padding:14px;}.menu_item.svelte-15kv3ld {height:14px;width:100%;font-size:18px;padding-bottom:12px;}'
};
function en(e, t) {
  re(t, !0), V(e, sa);
  let r = E(t, "position", 19, () => ({})), n = E(t, "menuItems", 19, () => []);
  var i = la(), a = S(b(i), 2);
  U(a, 21, n, F, (l, o) => {
    var u = aa(), s = b(u), v = b(s, !0);
    _(s), _(u), T(() => L(v, m(o).title)), k(l, u);
  }), _(a), _(i), T(() => z(i, "style", `top: ${r().top}; left: ${r().left};`)), k(e, i), ne();
}
customElements.define("mv-elegant-dropdown", B(en, { position: {}, menuItems: {} }, [], [], !0));
var oa = /* @__PURE__ */ $('<img class="title_logo" alt="logo" width="36px" height="34px" style="padding: 6px; margin-top: 4px;">'), ua = /* @__PURE__ */ $('<span class="title_text svelte-zwv9rr"> </span>'), va = /* @__PURE__ */ $('<a href="https://google.com" target="_blank" class="title svelte-zwv9rr"><!> <!></a>'), ca = (e, t, r) => t(e, m(r).title), da = /* @__PURE__ */ $('<button class="menu_button svelte-zwv9rr"><img class="menu_icon svelte-zwv9rr"></button> <!>', 1), fa = /* @__PURE__ */ $('<div class="header svelte-zwv9rr"><!> <div class="right_menus svelte-zwv9rr"></div></div>');
const ha = {
  hash: "svelte-zwv9rr",
  code: ".header.svelte-zwv9rr {display:flex;flex-flow:row wrap;justify-content:space-between;align-items:flex-start;background-color:rgba(255, 255, 255, 1);height:57px;font-weight:560;color:#333;font-size:20px;padding:0px;margin:0px;position:sticky;top:0;z-index:2;border-bottom:solid 1px rgba(222, 222, 222, 1);}.title.svelte-zwv9rr {height:100%;display:flex;margin-left:12px;color:#111;font-family:'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;}.title.svelte-zwv9rr:link {text-decoration:none;}.title.svelte-zwv9rr:visited {text-decoration:none;color:#222;}.title.svelte-zwv9rr:hover {text-decoration:none;color:darkgray}.title.svelte-zwv9rr:active {text-decoration:none;}.title_text.svelte-zwv9rr {display:flex;align-items:center;}.right_menus.svelte-zwv9rr {display:flex;height:100%;flex:auto;flex-flow:row-reverse;}.menu_button.svelte-zwv9rr {height:100%;display:flex;align-items:center;margin-right:18px;cursor:pointer;border:0px;background-color:transparent;}.menu_icon.svelte-zwv9rr {height:30px;width:30px;object-fit:cover;}.menu_icon.svelte-zwv9rr:hover {cursor:pointer;}.round.svelte-zwv9rr {height:40px;width:40px;border-radius:50%;}"
};
function tn(e, t) {
  re(t, !0), V(e, ha);
  let r = E(t, "title", 3, ""), n = E(t, "titleImageUrl", 3, ""), i = E(t, "headerMenus", 23, () => []);
  typeof i() == "string" && i(JSON.parse(i()));
  let a = O({}), l = O({});
  function o(d, h) {
    d && d.stopPropagation();
    for (const p of Object.keys(a))
      p != h && (a[p] = !1);
    a[h] ? a[h] = !1 : a[h] = !0;
  }
  function u(d) {
    let h = {}, p;
    if (l[d] && (p = l[d]), p) {
      var x = p.getBoundingClientRect();
      h.top = (x.top + x.height + 12).toString() + "px", h.left = (x.left - 150).toString() + "px", console.log(h);
    } else
      console.log("Could not find element with id: " + d);
    return h;
  }
  function s(d) {
    return d.toLowerCase().replaceAll(" ", "_");
  }
  document.onclick = function() {
    for (const h of Object.keys(a))
      a[h] = !1;
  };
  var v = fa(), c = b(v);
  D(c, () => r() || n(), (d) => {
    var h = va(), p = b(h);
    D(p, n, (g) => {
      var w = oa();
      T(() => z(w, "src", n())), k(g, w);
    });
    var x = S(p, 2);
    D(x, r, (g) => {
      var w = ua(), y = b(w, !0);
      _(w), T(() => L(y, r())), k(g, w);
    }), _(h), k(d, h);
  });
  var f = S(c, 2);
  U(f, 21, i, F, (d, h) => {
    var p = da(), x = Pe(p);
    T(() => z(x, "id", s(m(h).title + "_button"))), x.__click = [ca, o, h];
    var g = b(x);
    xi(g, (y, q) => l[s(q.title + "_button")] = y, (y) => l == null ? void 0 : l[s(y.title + "_button")], () => [m(h)]), _(x);
    var w = S(x, 2);
    D(w, () => a[m(h).title], (y) => {
      var q = /* @__PURE__ */ gr(() => u(s(m(h).title + "_button")));
      en(y, {
        get menuItems() {
          return m(h).items;
        },
        get position() {
          return m(q);
        }
      });
    }), T(() => {
      z(g, "alt", m(h).title), z(g, "src", m(h).imageUrl), Le(g, "round", m(h).imageShape === "round");
    }), k(d, p);
  }), _(f), _(v), k(e, v), ne();
}
de(["click"]);
customElements.define("mv-elegant-header", B(
  tn,
  {
    title: {},
    titleImageUrl: {},
    headerMenus: {}
  },
  [],
  [],
  !0
));
function pa(e, t, r, n) {
  t.searchloadresults && j(r, O(t.searchloadresults(n())));
}
function _a(e, t, r, n) {
  e.key === "Escape" ? j(t, O([])) : e.key === "Enter" && (r.searchsubmit && r.searchsubmit(n()), document.dispatchEvent(new CustomEvent("SearchSubmit", { detail: { text: n() } })), n(""));
}
var ga = /* @__PURE__ */ $('<div class="result svelte-ihhy65"> </div>'), ma = /* @__PURE__ */ $('<div class="results svelte-ihhy65"><div class="results_frame svelte-ihhy65"><div class="results_list svelte-ihhy65"></div></div></div>'), ba = /* @__PURE__ */ $('<div class="input_frame svelte-ihhy65"><div class="search_frame svelte-ihhy65"><div class="search_icon svelte-ihhy65"><svg width="18px" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#9aa0a6" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></div> <input class="search_input svelte-ihhy65"></div></div> <!>', 1);
const xa = {
  hash: "svelte-ihhy65",
  code: `.input_frame.svelte-ihhy65 {min-height:44px;background:#fff;border:1px solid #dfe1e5;box-shadow:0px 2px 8px 0px rgba(60, 64, 67, 0.25);border-radius:24px;margin:0 auto;max-width:584px;}.search_frame.svelte-ihhy65 {display:flex;flex-flow:row wrap;width:100%;flex:1;padding:0 8px 0 0;}.search_icon.svelte-ihhy65 {display:flex;align-items:center;padding-right:13px;padding-left:14px;height:46px;color:#9aa0a6;z-index:11;}.search_input.svelte-ihhy65 {display:flex;flex-wrap:wrap;flex:1;border:none;border-radius:24px;font-size:18px;width:100%;z-index:11;background-color:transparent;}.search_input.svelte-ihhy65:focus,
  .search_input.svelte-ihhy65:focus {outline:none;}.results.svelte-ihhy65 {position:absolute;margin:0px 0px 0px 0px;width:398px;border:1px solid #dfe1e5;z-index:10;background:#fff;border-radius:0px 0px 24px 24px;}.results_list.svelte-ihhy65 {margin-top:10px;background:#fff;width:100%;z-index:10;}.results_frame.svelte-ihhy65 {position:relative;top:-22px;background:#fff;border-left:1px solid #dfe1e5;border-right:1px solid #dfe1e5;width:398px;left:-1px;z-index:10;height:300px;overflow-x:hidden;}.result.svelte-ihhy65 {width:100%;padding:4px 0px 4px 16px;}.result.svelte-ihhy65:hover {cursor:pointer;background-color:#dfe1e5;}`
};
function rn(e, t) {
  re(t, !0), V(e, xa);
  let r = E(t, "searchtext", 15), n = Se(O([]));
  document.addEventListener("SearchResults", (s) => {
    s.detail.results && j(n, O(s.detail.results));
  });
  var i = ba(), a = Pe(i), l = b(a), o = S(b(l), 2);
  xt(o), o.__input = [pa, t, n, r], o.__keyup = [_a, n, t, r], _(l), _(a);
  var u = S(a, 2);
  D(u, () => m(n).length > 0, (s) => {
    var v = ma(), c = b(v), f = b(c);
    U(f, 21, () => m(n), F, (d, h) => {
      var p = ga(), x = b(p, !0);
      _(p), T(() => L(x, m(h))), k(d, p);
    }), _(f), _(c), _(v), k(s, v);
  }), wt(o, r), k(e, i), ne();
}
de(["input", "keyup"]);
customElements.define("mv-elegant-search", B(
  rn,
  {
    searchtext: {},
    searchloadresults: {},
    searchsubmit: {}
  },
  [],
  [],
  !0
));
var wa = /* @__PURE__ */ $('<img class="hero_image svelte-pm9u4t" alt="logo">'), ya = /* @__PURE__ */ $('<div class="hero svelte-pm9u4t"><div class="hero_logo svelte-pm9u4t"><!> <div class="hero_logo_text svelte-pm9u4t"> </div></div> <div class="hero_search svelte-pm9u4t"><!></div></div>');
const ka = {
  hash: "svelte-pm9u4t",
  code: '.hero.svelte-pm9u4t {width:100%;display:flex;justify-content:center;flex-flow:row wrap;}.hero_logo.svelte-pm9u4t {display:flex;margin-top:150px;width:100%;justify-content:center;align-items:center;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:560;color:#333;font-size:20px;}.hero_image.svelte-pm9u4t {width:50px;height:50px;}.hero_logo_text.svelte-pm9u4t {padding-left:12px;}.hero_search.svelte-pm9u4t {width:400px;}'
};
function nn(e, t) {
  V(e, ka);
  let r = E(t, "height", 3, "80px"), n = E(t, "title", 3, ""), i = E(t, "titleImageUrl", 3, ""), a = E(t, "searchtext", 15);
  var l = ya(), o = b(l), u = b(o);
  D(u, i, (d) => {
    var h = wa();
    T(() => {
      z(h, "height", `${r()}`), z(h, "src", i());
    }), k(d, h);
  });
  var s = S(u, 2), v = b(s, !0);
  _(s), _(o);
  var c = S(o, 2), f = b(c);
  rn(f, {
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
  }), _(c), _(l), T(() => {
    z(o, "style", `height: ${r()};`), L(v, n());
  }), k(e, l);
}
customElements.define("mv-elegant-hero-search", B(
  nn,
  {
    text: { reflect: !0 },
    height: {},
    title: {},
    titleImageUrl: {},
    searchtext: {},
    searchloadresults: {},
    searchsubmit: {}
  },
  [],
  [],
  !0
));
function Ea(e, t, r) {
  e.srcElement && t(e.srcElement.value), r.onInput && r.onInput(t());
}
var $a = /* @__PURE__ */ $('<option class="svelte-1im86kb"> </option>'), qa = /* @__PURE__ */ $('<div class="select svelte-1im86kb"><select name="source" id="source" class="svelte-1im86kb"></select></div>');
const Ca = {
  hash: "svelte-1im86kb",
  code: `.select.svelte-1im86kb,
.select.svelte-1im86kb :where(.svelte-1im86kb) {margin:0;padding:0;position:relative;box-sizing:border-box;}.select.svelte-1im86kb {position:relative;background-color:#f0f0f0;border-radius:12px;width:200px;height:40px;}.select.svelte-1im86kb select:where(.svelte-1im86kb) {font-size:1rem;font-weight:normal;width:100%;padding:10px 24px 8px 10px;border:none;background-color:transparent;appearance:none;}.select.svelte-1im86kb select:where(.svelte-1im86kb):active, .select.svelte-1im86kb select:where(.svelte-1im86kb):focus {outline:none;box-shadow:none;}.select.svelte-1im86kb:after {content:"";position:absolute;top:50%;right:8px;width:0;height:0;margin-top:-2px;border-top:5px solid #aaa;border-right:5px solid transparent;border-left:5px solid transparent;}`
};
function an(e, t) {
  re(t, !0), V(e, Ca);
  let r = E(t, "input", 15), n = E(t, "options", 19, () => []);
  var i = qa(), a = b(i);
  a.__input = [Ea, r, t], U(a, 21, n, F, (l, o) => {
    var u = $a(), s = {}, v = b(u, !0);
    _(u), T(() => {
      s !== (s = m(o)) && (u.value = (u.__value = m(o)) == null ? "" : m(o)), L(v, m(o));
    }), k(l, u);
  }), _(a), _(i), mi(a, r), k(e, i), ne();
}
de(["input"]);
customElements.define("mv-elegant-select", B(an, { input: {}, onInput: {}, options: {} }, [], [], !0));
function Sa(e, t, r) {
  t() === "CARD" ? t("TABLE") : t("CARD"), r.viewselect && r.viewselect(t());
}
var Na = (e, t, r) => t(m(r).name), Aa = /* @__PURE__ */ $('<div class="icon svelte-lvweti">✓</div>'), Ta = /* @__PURE__ */ $('<div class="icon svelte-lvweti"> </div>'), za = /* @__PURE__ */ $('<div class="filterbar_option svelte-lvweti"><!> <div class="name svelte-lvweti"> </div></div>'), Ia = /* @__PURE__ */ $('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M3 9.5H21M3 14.5H21M8 4.5V19.5M6.2 19.5H17.8C18.9201 19.5 19.4802 19.5 19.908 19.282C20.2843 19.0903 20.5903 18.7843 20.782 18.408C21 17.9802 21 17.4201 21 16.3V7.7C21 6.5799 21 6.01984 20.782 5.59202C20.5903 5.21569 20.2843 4.90973 19.908 4.71799C19.4802 4.5 18.9201 4.5 17.8 4.5H6.2C5.0799 4.5 4.51984 4.5 4.09202 4.71799C3.71569 4.90973 3.40973 5.21569 3.21799 5.59202C3 6.01984 3 6.57989 3 7.7V16.3C3 17.4201 3 17.9802 3.21799 18.408C3.40973 18.7843 3.71569 19.0903 4.09202 19.282C4.51984 19.5 5.07989 19.5 6.2 19.5Z" stroke="#d8d8d8" stroke-width="2"></path></g></svg>'), Ra = /* @__PURE__ */ $('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#d8d8d8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><g id="Complete"><g id="grid"><g><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="14.5" y="2.5"></rect><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="14.5" y="14.5"></rect><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="2.5" y="2.5"></rect><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="2.5" y="14.5"></rect></g></g></g></g></svg>'), Ma = /* @__PURE__ */ $('<div class="filterbar_frame svelte-lvweti"><div class="options svelte-lvweti"></div> <div class="filter svelte-lvweti"><button class="view_toggle svelte-lvweti"><!></button> <!></div></div>');
const Oa = {
  hash: "svelte-lvweti",
  code: `.filterbar_frame.svelte-lvweti {display:flex;max-width:2000px;
    /* margin: 20px 10px 0px 16px; */margin:20px auto 0px auto;}.options.svelte-lvweti {display:flex;justify-content:left;width:100%;margin-left:16px;}.filter.svelte-lvweti {display:flex;margin-right:16px;}.filterbar_option.svelte-lvweti {display:flex;min-width:20px;height:40px;font-size:14px;font-weight:700;color:rgb(51, 103, 214);margin-right:6px;margin-bottom:4px;height:20px;padding:4px 8px 6px;border-radius:44px;border-width:1px;border-style:solid;border-color:lightgray;user-select:none;}.filterbar_option_selected.svelte-lvweti {background-color:rgb(209, 227, 255);}.filterbar_option.svelte-lvweti:hover {cursor:pointer;background-color:rgb(209, 227, 255);}.icon.svelte-lvweti {color:rgb(51, 103, 214);font-size:16px;font-weight:700;display:inline-block;width:18px;margin-right:6px;}.name.svelte-lvweti {float:right;margin-top:2px;font-size:14px;font-weight:700;color:rgb(51, 103, 214);}.view_toggle.svelte-lvweti {margin-right:12px;width:44px;border:0px;background-color:transparent;}.view_toggle.svelte-lvweti:hover {cursor:pointer;}`
};
function ln(e, t) {
  re(t, !0), V(e, Oa);
  let r = E(t, "view", 15, "card"), n = O({});
  function i(f) {
    n[f] ? n[f] = !1 : n[f] = !0, t.typeselect && t.typeselect(n);
  }
  function a(f) {
    t.sortselect && t.sortselect(f);
  }
  var l = Ma(), o = b(l);
  U(o, 21, () => t.types, F, (f, d) => {
    var h = za();
    h.__click = [Na, i, d];
    var p = b(h);
    D(
      p,
      () => n[m(d).name] === !0,
      (w) => {
        var y = Aa();
        k(w, y);
      },
      (w) => {
        var y = Ta(), q = b(y, !0);
        _(y), T(() => L(q, m(d).icon)), k(w, y);
      }
    );
    var x = S(p, 2), g = b(x, !0);
    _(x), _(h), T(() => {
      Le(h, "filterbar_option_selected", n[m(d).name]), L(g, m(d).name);
    }), k(f, h);
  }), _(o);
  var u = S(o, 2), s = b(u);
  s.__click = [Sa, r, t];
  var v = b(s);
  D(
    v,
    () => r() === "CARD",
    (f) => {
      var d = Ia();
      k(f, d);
    },
    (f) => {
      var d = Ra();
      k(f, d);
    }
  ), _(s);
  var c = S(s, 2);
  an(c, {
    input: "Latest",
    get options() {
      return t.sorts;
    },
    onInput: a
  }), _(u), _(l), k(e, l), ne();
}
de(["click"]);
customElements.define("mv-elegant-filtertypes", B(
  ln,
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
var Ha = /* @__PURE__ */ $('<img alt="type icon" class="svelte-1feueb0">'), La = /* @__PURE__ */ $('<img alt="type icon" class="svelte-1feueb0">'), ja = /* @__PURE__ */ $('<div class="card_frame svelte-1feueb0"><div class="top_left_label svelte-1feueb0"><span class="svelte-1feueb0"> </span> <div class="top_right_icons svelte-1feueb0"></div></div> <img class="header_image svelte-1feueb0" alt="header preview"> <a class="title svelte-1feueb0"> </a> <a class="author svelte-1feueb0" target="_blank"><img alt="profile" class="svelte-1feueb0"> </a> <div class="footer svelte-1feueb0"><div class="description svelte-1feueb0"> </div> <div class="link svelte-1feueb0"><a target="_blank" class="svelte-1feueb0">Open asset ↗</a> <div class="type_box svelte-1feueb0"></div></div></div></div>');
const Da = {
  hash: "svelte-1feueb0",
  code: ".card_frame.svelte-1feueb0 {display:flex;flex-wrap:wrap;width:288px;height:428px;border:1px solid var(--gm3-sys-color-surface-variant, #e1e3e1);border-radius:12px;margin:16px 16px 32px 16px;}.top_left_label.svelte-1feueb0 {display:flex;padding:12px 18px;color:#444746;width:100%;height:28px;}.top_left_label.svelte-1feueb0 span:where(.svelte-1feueb0) {white-space:nowrap;}.top_right_icons.svelte-1feueb0 {display:flex;justify-content:right;width:100%;}.top_right_icons.svelte-1feueb0 img:where(.svelte-1feueb0) {object-fit:cover;width:24px;height:24px;margin-left:4px;}.header_image.svelte-1feueb0 {width:calc(100% - 18px);margin:0px 18px;object-fit:cover;height:144px;border-radius:7px;}.title.svelte-1feueb0 {padding:12px 18px 4px;height:48px;color:#1f1f1f;font-weight:600;font-size:18px;overflow:hidden;text-overflow:ellipsis;line-height:1.5rem;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;}.title.svelte-1feueb0:hover {color:#7c7c7c;}.author.svelte-1feueb0 {display:flex;align-items:start;padding:0px 18px 4px;height:20px;color:#444746;font-size:.875rem;font-weight:400;line-height:1.25rem;overflow:hidden;text-overflow:ellipsis;}.author.svelte-1feueb0 img:where(.svelte-1feueb0) {border-radius:50%;object-fit:cover;width:18px;height:18px;margin-right:8px;}.author.svelte-1feueb0:hover {color:#757a79;}.footer.svelte-1feueb0 {display:flex;flex-direction:column;justify-content:space-between;min-height:134px;padding-top:9px;padding-bottom:3px;width:100%;}.description.svelte-1feueb0 {padding:3px 18px;height:54px;width:calc(100% - 36px);overflow:hidden;color:#444746;font-size:.875rem;font-weight:400;letter-spacing:0;line-height:1.25rem;outline:none;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;}.link.svelte-1feueb0 {display:flex;width:calc(100% - 36px);overflow:hidden;padding:0px 16px;padding-bottom:14px;}.link.svelte-1feueb0 a:where(.svelte-1feueb0) {color:#0b57d0;font-weight:600;font-size:.975rem;letter-spacing:0;line-height:1.25rem;white-space:nowrap;}.link.svelte-1feueb0 a:where(.svelte-1feueb0):hover {color:#82aae9;}.type_box.svelte-1feueb0 {display:flex;justify-content:right;flex-wrap:wrap;width:100%;}.type_box.svelte-1feueb0 img:where(.svelte-1feueb0) {object-fit:cover;width:24px;height:24px;margin-left:4px;}"
};
function sn(e, t) {
  re(t, !0), V(e, Da);
  let r = E(t, "item", 19, () => ({
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
  var n = ja(), i = b(n), a = b(i), l = b(a, !0);
  _(a);
  var o = S(a, 2);
  U(o, 21, () => r().categories, F, (q, N) => {
    var C = Ha();
    T(() => {
      z(C, "src", m(N).url), z(C, "title", m(N).title);
    }), k(q, C);
  }), _(o), _(i);
  var u = S(i, 2), s = S(u, 2), v = b(s, !0);
  _(s);
  var c = S(s, 2), f = b(c), d = S(f);
  _(c);
  var h = S(c, 2), p = b(h), x = b(p, !0);
  _(p);
  var g = S(p, 2), w = b(g), y = S(w, 2);
  U(y, 21, () => r().types, F, (q, N) => {
    var C = La();
    T(() => {
      z(C, "src", m(N).url), z(C, "title", m(N).title);
    }), k(q, C);
  }), _(y), _(g), _(h), _(n), T(() => {
    L(l, r().dateTime), z(u, "src", r().imageUrl), z(s, "href", r().link), L(v, r().description), z(c, "href", r().authorUrl), z(f, "src", r().authorImageUrl), L(d, ` ${r().authorName ?? ""}`), L(x, r().description), z(w, "href", r().link);
  }), k(e, n), ne();
}
customElements.define("mv-elegant-card", B(sn, { item: {} }, [], [], !0));
var Pa = /* @__PURE__ */ $('<div class="menu_frame svelte-1dvvvu9"></div>');
const Fa = {
  hash: "svelte-1dvvvu9",
  code: `.menu_frame.svelte-1dvvvu9 {max-width:2000px;margin:0px auto;display:flex;
    /* justify-content: center; */flex-wrap:wrap;}`
};
function on(e, t) {
  V(e, Fa);
  let r = E(t, "items", 7);
  typeof r() == "string" && r(JSON.parse(r()));
  var n = Pa();
  U(n, 21, r, F, (i, a) => {
    sn(i, {
      get item() {
        return m(a);
      }
    });
  }), _(n), k(e, n);
}
customElements.define("mv-elegant-cardpage", B(on, { items: {} }, [], [], !0));
var Ua = (e, t, r) => t(m(r).name), Va = /* @__PURE__ */ $('<div class="filterbar_option svelte-1d4e3jq"><div class="letter svelte-1d4e3jq"> </div> <div class="name svelte-1d4e3jq"> </div></div>'), Ba = /* @__PURE__ */ $('<div class="filterbar_frame svelte-1d4e3jq"></div>');
const Ya = {
  hash: "svelte-1d4e3jq",
  code: `.filterbar_frame.svelte-1d4e3jq {display:flex;justify-content:center;}.filterbar_option.svelte-1d4e3jq {display:flex;flex-flow:row wrap;width:60px;height:100px;margin:8px;user-select:none;
    /* background-color: red; */}.letter.svelte-1d4e3jq {display:flex;align-items:center;justify-content:center;width:100%;height:52px;margin:2px 2px 0px 2px;border-radius:80%;text-align:center;font-size:22px;font-weight:bold;color:#3367d6;border-width:1px;border-style:solid;border-color:transparent;}.letter_selected.svelte-1d4e3jq {background-color:rgb(228, 228, 228);}.letter.svelte-1d4e3jq:hover {cursor:pointer;border-color:lightgray;}.name.svelte-1d4e3jq {width:100%;position:relative;top:-8px;text-align:center;color:gray;font-size:14px;}`
};
function un(e, t) {
  re(t, !0), V(e, Ya);
  let r = O({});
  function n(a) {
    r[a] ? r[a] = !1 : r[a] = !0, t.categoryselect && t.categoryselect(r);
  }
  var i = Ba();
  U(i, 21, () => t.categories, F, (a, l) => {
    var o = Va(), u = b(o);
    u.__click = [Ua, n, l];
    var s = b(u, !0);
    _(u);
    var v = S(u, 2), c = b(v, !0);
    _(v), _(o), T(() => {
      Le(u, "letter_selected", r[m(l).name]), L(s, m(l).letter), L(c, m(l).name);
    }), k(a, o);
  }), _(i), k(e, i), ne();
}
de(["click"]);
customElements.define("mv-elegant-filtercats", B(un, { categories: {}, categoryselect: {} }, [], [], !0));
function Ga(e, t, r, n, i) {
  if (m(t)) {
    let a = [];
    for (let l of r()) {
      let o = !1;
      for (let u of n())
        if (u.searchable && l[u.name] && l[u.name].toString().toLowerCase().includes(m(t).toLowerCase())) {
          o = !0;
          break;
        }
      o && a.push(l);
    }
    j(i, O(a));
  } else
    j(i, O(r()));
}
var Ja = /* @__PURE__ */ $('<th class="svelte-1nbcvq9"> </th>'), Ka = /* @__PURE__ */ $('<a class="table_row svelte-1nbcvq9"> </a>'), Wa = /* @__PURE__ */ $('<span class="table_row svelte-1nbcvq9"> </span>'), Za = /* @__PURE__ */ $('<td class="svelte-1nbcvq9"><!></td>'), Xa = /* @__PURE__ */ $("<td></td>"), Qa = /* @__PURE__ */ $('<tr class="svelte-1nbcvq9"></tr>'), el = /* @__PURE__ */ $('<div class="frame svelte-1nbcvq9" style="container-type: inline-size;"><div class="filter svelte-1nbcvq9"><svg data-icon-name="filterIcon" viewBox="0 0 18 18" width="18" height="18" aria-hidden="true"><path fill-rule="evenodd" d="M2 4h14v2H2V4zm2 4h10v2H4V8zm2 4h6v2H6v-2z"></path></svg> <span class="filter_input_box svelte-1nbcvq9">Filter <input class="filter_input svelte-1nbcvq9" placeholder="Value to filter for"></span></div> <table class="svelte-1nbcvq9"><thead class="svelte-1nbcvq9"><tr class="svelte-1nbcvq9"></tr></thead><tbody class="svelte-1nbcvq9"></tbody></table></div>');
const tl = {
  hash: "svelte-1nbcvq9",
  code: `.frame.svelte-1nbcvq9 {
    /* border-color: #eaedf2 !important; */
    /* box-shadow: 0 2px 18px rgba(0, 0, 0, 0.02) !important; */min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;
    /* border: 0.0625rem solid rgba(46, 54, 80, 0.125); */border-radius:0.5rem;padding:22px 32px;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}table.svelte-1nbcvq9 {width:100%;margin-bottom:1rem;color:#4a5073;vertical-align:top;border-color:#eaedf2;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;border-collapse:collapse;}table.svelte-1nbcvq9 thead:where(.svelte-1nbcvq9) tr:where(.svelte-1nbcvq9) th:where(.svelte-1nbcvq9) {vertical-align:center;text-align:left;border-bottom:1px solid #eaedf2 !important;font-size:12px;font-weight:bold;padding-left:14px;padding-bottom:10px;}.table_row.svelte-1nbcvq9 {padding-left:14px;padding-top:14px;padding-bottom:14px;border-bottom:1px solid #eaedf2 !important;display:block;}table.svelte-1nbcvq9 tbody:where(.svelte-1nbcvq9) tr:where(.svelte-1nbcvq9):hover {background-color:#eff0f2;cursor:pointer;border-radius:0.5rem;}.table_row_selected.svelte-1nbcvq9 {background-color:#eff0f2;border-radius:0.5rem;}

  @container (width <= 768px) {.column_sm.svelte-1nbcvq9 {display:none;}
  }a.svelte-1nbcvq9:link {text-decoration:none;color:#4a5073;}a.svelte-1nbcvq9:visited {text-decoration:none;color:#4a5073;}a.svelte-1nbcvq9:hover {text-decoration:none;color:#4a5073;}a.svelte-1nbcvq9:active {text-decoration:none;}td.svelte-1nbcvq9 a:where(.svelte-1nbcvq9) {display:block;}.filter.svelte-1nbcvq9 {margin-top:20px;margin-bottom:8px;margin-left:8px;}.filter_input_box.svelte-1nbcvq9 {position:relative;top:-3px;font-weight:bold;font-size:14px;}.filter_input.svelte-1nbcvq9 {width:50%;margin-left:8px;font-family:Google Sans,
      Roboto,
      Helvetica,
      Arial,
      sans-serif;padding:var(--padding);
    /* border: 2px solid gray; */border:0px;outline:none;border-radius:0px;
    /* background-color: #f1f3f4; */background-color:rgb(255, 255, 255);}`
};
function vn(e, t) {
  re(t, !0), V(e, tl);
  let r = E(t, "tableHeaders", 23, () => []), n = E(t, "tableRows", 23, () => []), i = E(t, "linkprefix", 3, ""), a = E(t, "linkcolumnname", 3, ""), l = E(t, "tableRowClick", 3, void 0);
  typeof r() == "string" && r(JSON.parse(r())), typeof n() == "string" && n(JSON.parse(n()));
  let o = Se(O(n())), u = Se(""), s = Se(-1);
  const v = (y) => {
    j(s, O(y)), l() && l()({ detail: { rowIndex: y } }), document.dispatchEvent(new CustomEvent("TableRowClick", { detail: { rowIndex: y } }));
  };
  var c = el(), f = b(c), d = S(b(f), 2), h = S(b(d));
  xt(h), h.__keyup = [
    Ga,
    u,
    n,
    r,
    o
  ], _(d), _(f);
  var p = S(f, 2), x = b(p), g = b(x);
  U(g, 21, r, F, (y, q) => {
    var N = Ja(), C = b(N, !0);
    _(N), T(() => {
      Le(N, "column_sm", m(q).hideNarrow), L(C, m(q).displayName);
    }), k(y, N);
  }), _(g), _(x);
  var w = S(x);
  U(w, 21, () => m(o), F, (y, q, N) => {
    var C = Qa();
    C.__click = () => {
      v(N);
    }, U(C, 21, r, F, (P, H) => {
      var be = Vr(), fe = Pe(be);
      D(
        fe,
        () => m(q)[m(H).name],
        (he) => {
          var Y = Za(), J = b(Y);
          D(
            J,
            a,
            (tt) => {
              var le = Ka(), xe = b(le, !0);
              _(le), T(() => {
                z(le, "href", i() + m(q)[a()]), L(xe, m(q)[m(H).name]);
              }), k(tt, le);
            },
            (tt) => {
              var le = Wa(), xe = b(le, !0);
              _(le), T(() => L(xe, m(q)[m(H).name])), k(tt, le);
            }
          ), _(Y), T(() => Le(Y, "column_sm", m(H).hideNarrow)), k(he, Y);
        },
        (he) => {
          var Y = Xa();
          k(he, Y);
        }
      ), k(P, be);
    }), _(C), T(() => Le(C, "table_row_selected", N === m(s))), k(y, C);
  }), _(w), _(p), _(c), wt(h, () => m(u), (y) => j(u, y)), k(e, c), ne();
}
de(["keyup", "click"]);
customElements.define("mv-elegant-table", B(
  vn,
  {
    tableHeaders: {},
    tableRows: {},
    linkprefix: {},
    linkcolumnname: {},
    tableRowClick: {}
  },
  [],
  [],
  !0
));
var rl = /* @__PURE__ */ $("<!> <!> <!> <!> <!>", 1);
const nl = { hash: "svelte-32ttx", code: "" };
function il(e, t) {
  V(e, nl);
  let r = E(t, "title", 3, ""), n = E(t, "titleImageUrl", 3, ""), i = E(t, "headerMenus", 19, () => []), a = E(t, "searchtext", 7, ""), l = E(t, "categories", 19, () => []), o = E(t, "types", 19, () => []), u = E(t, "sorts", 19, () => []), s = Se("CARD"), v = O([
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
  var c = rl(), f = Pe(c);
  tn(f, {
    get title() {
      return r();
    },
    get titleImageUrl() {
      return n();
    },
    get headerMenus() {
      return i();
    }
  });
  var d = S(f, 2);
  nn(d, {
    get title() {
      return r();
    },
    get titleImageUrl() {
      return n();
    },
    get searchtext() {
      return a();
    },
    set searchtext(g) {
      a(g);
    },
    get searchloadresults() {
      return t.searchloadresults;
    },
    get searchsubmit() {
      return t.searchsubmit;
    }
  });
  var h = S(d, 2);
  un(h, {
    get categories() {
      return l();
    },
    get categoryselect() {
      return t.categoryselect;
    }
  });
  var p = S(h, 2);
  ln(p, {
    get types() {
      return o();
    },
    get sorts() {
      return u();
    },
    get typeselect() {
      return t.typeselect;
    },
    get sortselect() {
      return t.sortselect;
    },
    get view() {
      return m(s);
    },
    set view(g) {
      j(s, O(g));
    }
  });
  var x = S(p, 2);
  D(
    x,
    () => m(s) === "CARD",
    (g) => {
      on(g, {
        get items() {
          return t.items;
        }
      });
    },
    (g) => {
      vn(g, {
        get tableHeaders() {
          return v;
        },
        get tableRows() {
          return t.items;
        },
        linkprefix: "",
        linkcolumnname: "link",
        update: void 0
      });
    }
  ), k(e, c);
}
customElements.define("mv-elegant-buffet", B(
  il,
  {
    title: {},
    titleImageUrl: {},
    headerMenus: {},
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
var al = /* @__PURE__ */ $('<div class="lds-ring svelte-nag87b"><div class="svelte-nag87b"></div><div class="svelte-nag87b"></div><div class="svelte-nag87b"></div><div class="svelte-nag87b"></div></div>');
const ll = {
  hash: "svelte-nag87b",
  code: `.lds-ring.svelte-nag87b {
  /* display: inline-block;
  position: relative; */display:inline-block;position:absolute;width:99%;text-align:center;height:80px;}.lds-ring.svelte-nag87b div:where(.svelte-nag87b) {box-sizing:border-box;position:absolute;left:48%;top:42%;width:32px;height:32px;margin:8px;border:4px solid #3367d6;border-radius:50%;
  animation: svelte-nag87b-lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;border-color:#3367d6 transparent transparent transparent;}.lds-ring.svelte-nag87b div:where(.svelte-nag87b):nth-child(1) {animation-delay:-0.45s;}.lds-ring.svelte-nag87b div:where(.svelte-nag87b):nth-child(2) {animation-delay:-0.3s;}.lds-ring.svelte-nag87b div:where(.svelte-nag87b):nth-child(3) {animation-delay:-0.15s;}
@keyframes svelte-nag87b-lds-ring {
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
}`
};
function sl(e, t) {
  V(e, ll);
  var r = al();
  k(e, r);
}
customElements.define("mv-elegant-spinner", B(sl, {}, [], [], !0));
export {
  il as ElegantBuffet,
  tn as ElegantHeader,
  nn as ElegantHeroSearch,
  rn as ElegantSearch,
  sl as ElegantSpinner,
  vn as ElegantTable,
  Si as MappButton,
  Qr as MappHeaderLite,
  Xr as MappInput,
  Zi as MappMenu,
  ia as MappTable
};
