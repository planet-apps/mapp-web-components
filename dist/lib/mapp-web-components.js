var jr = Object.defineProperty;
var Lt = (e) => {
  throw TypeError(e);
};
var Jr = (e, t, r) => t in e ? jr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var j = (e, t, r) => Jr(e, typeof t != "symbol" ? t + "" : t, r), Dt = (e, t, r) => t.has(e) || Lt("Cannot " + r);
var D = (e, t, r) => (Dt(e, t, "read from private field"), r ? r.call(e) : t.get(e)), ct = (e, t, r) => t.has(e) ? Lt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), vt = (e, t, r, n) => (Dt(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r);
const Kr = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Kr);
const Wr = 1, Gr = 2, Xr = 16, Zr = 1, Qr = 4, en = 8, tn = 16, rn = 4, nn = 1, sn = 2, Kt = "[", kt = "[!", Nt = "]", Se = {}, P = Symbol(), Wt = !1;
function Tt(e) {
  console.warn("hydration_mismatch");
}
var At = Array.isArray, Ct = Array.from, Xe = Object.keys, Ze = Object.defineProperty, _e = Object.getOwnPropertyDescriptor, an = Object.getOwnPropertyDescriptors, ln = Object.prototype, on = Array.prototype, _t = Object.getPrototypeOf;
function un(e) {
  return typeof e == "function";
}
const Ce = () => {
};
function Gt(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const se = 2, Xt = 4, nt = 8, it = 16, te = 32, Le = 64, Ne = 128, Qe = 256, B = 512, fe = 1024, De = 2048, X = 4096, Pe = 8192, Zt = 16384, st = 32768, fn = 1 << 18, Qt = 1 << 19, dt = Symbol("$state"), cn = Symbol("");
function er(e) {
  return e === this.v;
}
function vn(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function tr(e) {
  return !vn(e, this.v);
}
function dn() {
  throw new Error("effect_update_depth_exceeded");
}
function _n() {
  throw new Error("hydration_failed");
}
function hn(e) {
  throw new Error("props_invalid_value");
}
function pn() {
  throw new Error("state_descriptors_fixed");
}
function mn() {
  throw new Error("state_prototype_fixed");
}
function gn() {
  throw new Error("state_unsafe_local_read");
}
function bn() {
  throw new Error("state_unsafe_mutation");
}
let rr = !1;
function Y(e) {
  return {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: er,
    version: 0
  };
}
function Pt(e) {
  return /* @__PURE__ */ yn(Y(e));
}
// @__NO_SIDE_EFFECTS__
function St(e, t = !1) {
  const r = Y(e);
  return t || (r.equals = tr), r;
}
// @__NO_SIDE_EFFECTS__
function yn(e) {
  return S !== null && S.f & se && (Z === null ? An([e]) : Z.push(e)), e;
}
function H(e, t) {
  return S !== null && Sn() && S.f & (se | it) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (Z === null || !Z.includes(e)) && bn(), nr(e, t);
}
function nr(e, t) {
  return e.equals(t) || (e.v = t, e.version = xr(), ir(e, fe), w !== null && w.f & B && !(w.f & te) && (M !== null && M.includes(e) ? (ae(w, fe), lt(w)) : ue === null ? Cn([e]) : ue.push(e))), t;
}
function ir(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = r.length, i = 0; i < n; i++) {
      var s = r[i], a = s.f;
      a & fe || (ae(s, t), a & (B | Ne) && (a & se ? ir(
        /** @type {Derived} */
        s,
        De
      ) : lt(
        /** @type {Effect} */
        s
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function wn(e) {
  var t = se | fe;
  w === null ? t |= Ne : w.f |= Qt;
  const r = {
    children: null,
    ctx: Q,
    deps: null,
    equals: er,
    f: t,
    fn: e,
    reactions: null,
    v: (
      /** @type {V} */
      null
    ),
    version: 0,
    parent: w
  };
  if (S !== null && S.f & se) {
    var n = (
      /** @type {Derived} */
      S
    );
    (n.children ?? (n.children = [])).push(r);
  }
  return r;
}
function sr(e) {
  var t = e.children;
  if (t !== null) {
    e.children = null;
    for (var r = 0; r < t.length; r += 1) {
      var n = t[r];
      n.f & se ? qt(
        /** @type {Derived} */
        n
      ) : me(
        /** @type {Effect} */
        n
      );
    }
  }
}
function ar(e) {
  var t, r = w;
  U(e.parent);
  try {
    sr(e), t = $r(e);
  } finally {
    U(r);
  }
  return t;
}
function lr(e) {
  var t = ar(e), r = (ye || e.f & Ne) && e.deps !== null ? De : B;
  ae(e, r), e.equals(t) || (e.v = t, e.version = xr());
}
function qt(e) {
  sr(e), Re(e, 0), ae(e, Pe), e.v = e.children = e.deps = e.ctx = e.reactions = null;
}
function xn(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Fe(e, t, r, n = !0) {
  var i = (e & Le) !== 0, s = w, a = {
    ctx: Q,
    deps: null,
    deriveds: null,
    nodes_start: null,
    nodes_end: null,
    f: e | fe,
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
    var u = we;
    try {
      Ft(!0), at(a), a.f |= Zt;
    } catch (l) {
      throw me(a), l;
    } finally {
      Ft(u);
    }
  } else t !== null && lt(a);
  var f = r && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & Qt) === 0;
  if (!f && !i && n && (s !== null && xn(a, s), S !== null && S.f & se)) {
    var o = (
      /** @type {Derived} */
      S
    );
    (o.children ?? (o.children = [])).push(a);
  }
  return a;
}
function or(e) {
  const t = Fe(Le, e, !0);
  return () => {
    me(t);
  };
}
function ur(e) {
  return Fe(Xt, e, !1);
}
function fr(e) {
  return Fe(nt, e, !0);
}
function J(e) {
  return Ot(e);
}
function Ot(e, t = 0) {
  return Fe(nt | it | t, e, !0);
}
function Ie(e, t = !0) {
  return Fe(nt | te, e, !0, t);
}
function cr(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = S;
    ee(null);
    try {
      t.call(null);
    } finally {
      ee(r);
    }
  }
}
function vr(e) {
  var t = e.deriveds;
  if (t !== null) {
    e.deriveds = null;
    for (var r = 0; r < t.length; r += 1)
      qt(t[r]);
  }
}
function dr(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var n = r.next;
    me(r, t), r = n;
  }
}
function $n(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    t.f & te || me(t), t = r;
  }
}
function me(e, t = !0) {
  var r = !1;
  if ((t || e.f & fn) && e.nodes_start !== null) {
    for (var n = e.nodes_start, i = e.nodes_end; n !== null; ) {
      var s = n === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ce(n)
      );
      n.remove(), n = s;
    }
    r = !0;
  }
  dr(e, t && !r), vr(e), Re(e, 0), ae(e, Pe);
  var a = e.transitions;
  if (a !== null)
    for (const f of a)
      f.stop();
  cr(e);
  var u = e.parent;
  u !== null && u.first !== null && _r(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.parent = e.fn = e.nodes_start = e.nodes_end = null;
}
function _r(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function ht(e, t) {
  var r = [];
  It(e, r, !0), hr(r, () => {
    me(e), t && t();
  });
}
function hr(e, t) {
  var r = e.length;
  if (r > 0) {
    var n = () => --r || t();
    for (var i of e)
      i.out(n);
  } else
    t();
}
function It(e, t, r) {
  if (!(e.f & X)) {
    if (e.f ^= X, e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || r) && t.push(a);
    for (var n = e.first; n !== null; ) {
      var i = n.next, s = (n.f & st) !== 0 || (n.f & te) !== 0;
      It(n, t, s ? r : !1), n = i;
    }
  }
}
function et(e) {
  pr(e, !0);
}
function pr(e, t) {
  if (e.f & X) {
    He(e) && at(e), e.f ^= X;
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & st) !== 0 || (r.f & te) !== 0;
      pr(r, i ? t : !1), r = n;
    }
    if (e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || t) && s.in();
  }
}
const En = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let tt = !1, rt = !1, pt = [], mt = [];
function mr() {
  tt = !1;
  const e = pt.slice();
  pt = [], Gt(e);
}
function gr() {
  rt = !1;
  const e = mt.slice();
  mt = [], Gt(e);
}
function br(e) {
  tt || (tt = !0, queueMicrotask(mr)), pt.push(e);
}
function kn(e) {
  rt || (rt = !0, En(gr)), mt.push(e);
}
function Nn() {
  tt && mr(), rt && gr();
}
const yr = 0, Tn = 1;
let Ke = yr, Me = !1, we = !1;
function Ft(e) {
  we = e;
}
let de = [], xe = 0;
let S = null;
function ee(e) {
  S = e;
}
let w = null;
function U(e) {
  w = e;
}
let Z = null;
function An(e) {
  Z = e;
}
let M = null, F = 0, ue = null;
function Cn(e) {
  ue = e;
}
let wr = 0, ye = !1, Q = null;
function xr() {
  return ++wr;
}
function Sn() {
  return !rr;
}
function He(e) {
  var a, u;
  var t = e.f;
  if (t & fe)
    return !0;
  if (t & De) {
    var r = e.deps, n = (t & Ne) !== 0;
    if (r !== null) {
      var i;
      if (t & Qe) {
        for (i = 0; i < r.length; i++)
          ((a = r[i]).reactions ?? (a.reactions = [])).push(e);
        e.f ^= Qe;
      }
      for (i = 0; i < r.length; i++) {
        var s = r[i];
        if (He(
          /** @type {Derived} */
          s
        ) && lr(
          /** @type {Derived} */
          s
        ), n && w !== null && !ye && !((u = s == null ? void 0 : s.reactions) != null && u.includes(e)) && (s.reactions ?? (s.reactions = [])).push(e), s.version > e.version)
          return !0;
      }
    }
    n || ae(e, B);
  }
  return !1;
}
function qn(e, t, r) {
  throw e;
}
function $r(e) {
  var v;
  var t = M, r = F, n = ue, i = S, s = ye, a = Z, u = Q, f = e.f;
  M = /** @type {null | Value[]} */
  null, F = 0, ue = null, S = f & (te | Le) ? null : e, ye = !we && (f & Ne) !== 0, Z = null, Q = e.ctx;
  try {
    var o = (
      /** @type {Function} */
      (0, e.fn)()
    ), l = e.deps;
    if (M !== null) {
      var c;
      if (Re(e, F), l !== null && F > 0)
        for (l.length = F + M.length, c = 0; c < M.length; c++)
          l[F + c] = M[c];
      else
        e.deps = l = M;
      if (!ye)
        for (c = F; c < l.length; c++)
          ((v = l[c]).reactions ?? (v.reactions = [])).push(e);
    } else l !== null && F < l.length && (Re(e, F), l.length = F);
    return o;
  } finally {
    M = t, F = r, ue = n, S = i, ye = s, Z = a, Q = u;
  }
}
function On(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = r.indexOf(e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  r === null && t.f & se && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (M === null || !M.includes(t)) && (ae(t, De), t.f & (Ne | Qe) || (t.f ^= Qe), Re(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Re(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      On(e, r[n]);
}
function at(e) {
  var t = e.f;
  if (!(t & Pe)) {
    ae(e, B);
    var r = w;
    w = e;
    try {
      t & it ? $n(e) : dr(e), vr(e), cr(e);
      var n = $r(e);
      e.teardown = typeof n == "function" ? n : null, e.version = wr;
    } catch (i) {
      qn(
        /** @type {Error} */
        i
      );
    } finally {
      w = r;
    }
  }
}
function Er() {
  xe > 1e3 && (xe = 0, dn()), xe++;
}
function kr(e) {
  var t = e.length;
  if (t !== 0) {
    Er();
    var r = we;
    we = !0;
    try {
      for (var n = 0; n < t; n++) {
        var i = e[n];
        i.f & B || (i.f ^= B);
        var s = [];
        Nr(i, s), In(s);
      }
    } finally {
      we = r;
    }
  }
}
function In(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var n = e[r];
      !(n.f & (Pe | X)) && He(n) && (at(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? _r(n) : n.fn = null));
    }
}
function Mn() {
  if (Me = !1, xe > 1001)
    return;
  const e = de;
  de = [], kr(e), Me || (xe = 0);
}
function lt(e) {
  Ke === yr && (Me || (Me = !0, queueMicrotask(Mn)));
  for (var t = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (r & (Le | te)) {
      if (!(r & B)) return;
      t.f ^= B;
    }
  }
  de.push(t);
}
function Nr(e, t) {
  var r = e.first, n = [];
  e: for (; r !== null; ) {
    var i = r.f, s = (i & te) !== 0, a = s && (i & B) !== 0;
    if (!a && !(i & X))
      if (i & nt) {
        s ? r.f ^= B : He(r) && at(r);
        var u = r.first;
        if (u !== null) {
          r = u;
          continue;
        }
      } else i & Xt && n.push(r);
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
    u = n[l], t.push(u), Nr(u, t);
}
function Tr(e) {
  var t = Ke, r = de;
  try {
    Er();
    const i = [];
    Ke = Tn, de = i, Me = !1, kr(r);
    var n = e == null ? void 0 : e();
    return Nn(), (de.length > 0 || i.length > 0) && Tr(), xe = 0, n;
  } finally {
    Ke = t, de = r;
  }
}
function y(e) {
  var u;
  var t = e.f, r = (t & se) !== 0;
  if (r && t & Pe) {
    var n = ar(
      /** @type {Derived} */
      e
    );
    return qt(
      /** @type {Derived} */
      e
    ), n;
  }
  if (S !== null) {
    Z !== null && Z.includes(e) && gn();
    var i = S.deps;
    M === null && i !== null && i[F] === e ? F++ : M === null ? M = [e] : M.push(e), ue !== null && w !== null && w.f & B && !(w.f & te) && ue.includes(e) && (ae(w, fe), lt(w));
  } else if (r && /** @type {Derived} */
  e.deps === null) {
    var s = (
      /** @type {Derived} */
      e
    ), a = s.parent;
    a !== null && !((u = a.deriveds) != null && u.includes(s)) && (a.deriveds ?? (a.deriveds = [])).push(s);
  }
  return r && (s = /** @type {Derived} */
  e, He(s) && lr(s)), e.v;
}
function gt(e) {
  const t = S;
  try {
    return S = null, e();
  } finally {
    S = t;
  }
}
const Rn = ~(fe | De | B);
function ae(e, t) {
  e.f = e.f & Rn | t;
}
function ot(e, t = !1, r) {
  Q = {
    p: Q,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
}
function ut(e) {
  const t = Q;
  if (t !== null) {
    const a = t.e;
    if (a !== null) {
      var r = w, n = S;
      t.e = null;
      try {
        for (var i = 0; i < a.length; i++) {
          var s = a[i];
          U(s.effect), ee(s.reaction), ur(s.fn);
        }
      } finally {
        U(r), ee(n);
      }
    }
    Q = t.p, t.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
function G(e, t = null, r) {
  if (typeof e != "object" || e === null || dt in e)
    return e;
  const n = _t(e);
  if (n !== ln && n !== on)
    return e;
  var i = /* @__PURE__ */ new Map(), s = At(e), a = Y(0);
  s && i.set("length", Y(
    /** @type {any[]} */
    e.length
  ));
  var u;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(f, o, l) {
        (!("value" in l) || l.configurable === !1 || l.enumerable === !1 || l.writable === !1) && pn();
        var c = i.get(o);
        return c === void 0 ? (c = Y(l.value), i.set(o, c)) : H(c, G(l.value, u)), !0;
      },
      deleteProperty(f, o) {
        var l = i.get(o);
        if (l === void 0)
          o in f && i.set(o, Y(P));
        else {
          if (s && typeof o == "string") {
            var c = (
              /** @type {Source<number>} */
              i.get("length")
            ), v = Number(o);
            Number.isInteger(v) && v < c.v && H(c, v);
          }
          H(l, P), Ht(a);
        }
        return !0;
      },
      get(f, o, l) {
        var _;
        if (o === dt)
          return e;
        var c = i.get(o), v = o in f;
        if (c === void 0 && (!v || (_ = _e(f, o)) != null && _.writable) && (c = Y(G(v ? f[o] : P, u)), i.set(o, c)), c !== void 0) {
          var d = y(c);
          return d === P ? void 0 : d;
        }
        return Reflect.get(f, o, l);
      },
      getOwnPropertyDescriptor(f, o) {
        var l = Reflect.getOwnPropertyDescriptor(f, o);
        if (l && "value" in l) {
          var c = i.get(o);
          c && (l.value = y(c));
        } else if (l === void 0) {
          var v = i.get(o), d = v == null ? void 0 : v.v;
          if (v !== void 0 && d !== P)
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
        if (o === dt)
          return !0;
        var l = i.get(o), c = l !== void 0 && l.v !== P || Reflect.has(f, o);
        if (l !== void 0 || w !== null && (!c || (d = _e(f, o)) != null && d.writable)) {
          l === void 0 && (l = Y(c ? G(f[o], u) : P), i.set(o, l));
          var v = y(l);
          if (v === P)
            return !1;
        }
        return c;
      },
      set(f, o, l, c) {
        var x;
        var v = i.get(o), d = o in f;
        if (s && o === "length")
          for (var _ = l; _ < /** @type {Source<number>} */
          v.v; _ += 1) {
            var h = i.get(_ + "");
            h !== void 0 ? H(h, P) : _ in f && (h = Y(P), i.set(_ + "", h));
          }
        v === void 0 ? (!d || (x = _e(f, o)) != null && x.writable) && (v = Y(void 0), H(v, G(l, u)), i.set(o, v)) : (d = v.v !== P, H(v, G(l, u)));
        var g = Reflect.getOwnPropertyDescriptor(f, o);
        if (g != null && g.set && g.set.call(c, l), !d) {
          if (s && typeof o == "string") {
            var p = (
              /** @type {Source<number>} */
              i.get("length")
            ), m = Number(o);
            Number.isInteger(m) && m >= p.v && H(p, m + 1);
          }
          Ht(a);
        }
        return !0;
      },
      ownKeys(f) {
        y(a);
        var o = Reflect.ownKeys(f).filter((v) => {
          var d = i.get(v);
          return d === void 0 || d.v !== P;
        });
        for (var [l, c] of i)
          c.v !== P && !(l in f) && o.push(l);
        return o;
      },
      setPrototypeOf() {
        mn();
      }
    }
  );
}
function Ht(e, t = 1) {
  H(e, e.v + t);
}
var Bt, Ar, Cr;
function bt() {
  if (Bt === void 0) {
    Bt = window;
    var e = Element.prototype, t = Node.prototype;
    Ar = _e(t, "firstChild").get, Cr = _e(t, "nextSibling").get, e.__click = void 0, e.__className = "", e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Ee(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
  return Ar.call(e);
}
// @__NO_SIDE_EFFECTS__
function ce(e) {
  return Cr.call(e);
}
function $(e, t) {
  if (!T)
    return /* @__PURE__ */ pe(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ pe(C)
  );
  if (r === null)
    r = C.appendChild(Ee());
  else if (t && r.nodeType !== 3) {
    var n = Ee();
    return r == null || r.before(n), W(n), n;
  }
  return W(r), r;
}
function Sr(e, t) {
  if (!T) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ pe(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ ce(r) : r;
  }
  return C;
}
function R(e, t = 1, r = !1) {
  let n = T ? C : e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ ce(n);
  if (!T)
    return n;
  var i = n.nodeType;
  if (r && i !== 3) {
    var s = Ee();
    return n == null || n.before(s), W(s), s;
  }
  return W(n), /** @type {TemplateNode} */
  n;
}
function qr(e) {
  e.textContent = "";
}
let T = !1;
function ie(e) {
  T = e;
}
let C;
function W(e) {
  if (e === null)
    throw Tt(), Se;
  return C = e;
}
function Be() {
  return W(
    /** @type {TemplateNode} */
    /* @__PURE__ */ ce(C)
  );
}
function b(e) {
  if (T) {
    if (/* @__PURE__ */ ce(C) !== null)
      throw Tt(), Se;
    C = e;
  }
}
function yt() {
  for (var e = 0, t = C; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === Nt) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Kt || r === kt) && (e += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ce(t)
    );
    t.remove(), t = n;
  }
}
let zt = !1;
function Or() {
  zt || (zt = !0, document.addEventListener(
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
function Ln(e) {
  var t = S, r = w;
  ee(null), U(null);
  try {
    return e();
  } finally {
    ee(t), U(r);
  }
}
function Dn(e, t, r, n = r) {
  e.addEventListener(t, () => Ln(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), n();
  } : e.__on_r = n, Or();
}
const Ir = /* @__PURE__ */ new Set(), wt = /* @__PURE__ */ new Set();
function ft(e) {
  for (var t = 0; t < e.length; t++)
    Ir.add(e[t]);
  for (var r of wt)
    r(e);
}
function Ue(e) {
  var m;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = ((m = e.composedPath) == null ? void 0 : m.call(e)) || [], s = (
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
    Ze(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var l = S, c = w;
    ee(null), U(null);
    try {
      for (var v, d = []; s !== null; ) {
        var _ = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var h = s["__" + n];
          if (h !== void 0 && !/** @type {any} */
          s.disabled)
            if (At(h)) {
              var [g, ...p] = h;
              g.apply(s, [e, ...p]);
            } else
              h.call(s, e);
        } catch (x) {
          v ? d.push(x) : v = x;
        }
        if (e.cancelBubble || _ === t || _ === null)
          break;
        s = _;
      }
      if (v) {
        for (let x of d)
          queueMicrotask(() => {
            throw x;
          });
        throw v;
      }
    } finally {
      e.__root = t, delete e.currentTarget, ee(l), U(c);
    }
  }
}
function Pn(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function $e(e, t) {
  var r = (
    /** @type {Effect} */
    w
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function I(e, t) {
  var r = (t & nn) !== 0, n = (t & sn) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    if (T)
      return $e(C, null), C;
    i === void 0 && (i = Pn(s ? e : "<!>" + e), r || (i = /** @type {Node} */
    /* @__PURE__ */ pe(i)));
    var a = (
      /** @type {TemplateNode} */
      n ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ pe(a)
      ), f = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      $e(u, f);
    } else
      $e(a, a);
    return a;
  };
}
function Fn() {
  if (T)
    return $e(C, null), C;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Ee();
  return e.append(t, r), $e(t, r), e;
}
function q(e, t) {
  if (T) {
    w.nodes_end = C, Be();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Hn = ["touchstart", "touchmove"];
function Bn(e) {
  return Hn.includes(e);
}
let xt = !0;
function ke(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r == null ? "" : r + "");
}
function Mr(e, t) {
  return Rr(e, t);
}
function zn(e, t) {
  bt(), t.intro = t.intro ?? !1;
  const r = t.target, n = T, i = C;
  try {
    for (var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ pe(r)
    ); s && (s.nodeType !== 8 || /** @type {Comment} */
    s.data !== Kt); )
      s = /** @type {TemplateNode} */
      /* @__PURE__ */ ce(s);
    if (!s)
      throw Se;
    ie(!0), W(
      /** @type {Comment} */
      s
    ), Be();
    const a = Rr(e, { ...t, anchor: s });
    if (C === null || C.nodeType !== 8 || /** @type {Comment} */
    C.data !== Nt)
      throw Tt(), Se;
    return ie(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === Se)
      return t.recover === !1 && _n(), bt(), qr(r), ie(!1), Mr(e, t);
    throw a;
  } finally {
    ie(n), W(i);
  }
}
const be = /* @__PURE__ */ new Map();
function Rr(e, { target: t, anchor: r, props: n = {}, events: i, context: s, intro: a = !0 }) {
  bt();
  var u = /* @__PURE__ */ new Set(), f = (c) => {
    for (var v = 0; v < c.length; v++) {
      var d = c[v];
      if (!u.has(d)) {
        u.add(d);
        var _ = Bn(d);
        t.addEventListener(d, Ue, { passive: _ });
        var h = be.get(d);
        h === void 0 ? (document.addEventListener(d, Ue, { passive: _ }), be.set(d, 1)) : be.set(d, h + 1);
      }
    }
  };
  f(Ct(Ir)), wt.add(f);
  var o = void 0, l = or(() => {
    var c = r ?? t.appendChild(Ee());
    return Ie(() => {
      if (s) {
        ot({});
        var v = (
          /** @type {ComponentContext} */
          Q
        );
        v.c = s;
      }
      i && (n.$$events = i), T && $e(
        /** @type {TemplateNode} */
        c,
        null
      ), xt = a, o = e(c, n) || {}, xt = !0, T && (w.nodes_end = C), s && ut();
    }), () => {
      var _;
      for (var v of u) {
        t.removeEventListener(v, Ue);
        var d = (
          /** @type {number} */
          be.get(v)
        );
        --d === 0 ? (document.removeEventListener(v, Ue), be.delete(v)) : be.set(v, d);
      }
      wt.delete(f), $t.delete(o), c !== r && ((_ = c.parentNode) == null || _.removeChild(c));
    };
  });
  return $t.set(o, l), o;
}
let $t = /* @__PURE__ */ new WeakMap();
function Vn(e) {
  const t = $t.get(e);
  t && t();
}
function he(e, t, r, n = null, i = !1) {
  T && Be();
  var s = e, a = null, u = null, f = null, o = i ? st : 0;
  Ot(() => {
    if (f === (f = !!t())) return;
    let l = !1;
    if (T) {
      const c = (
        /** @type {Comment} */
        s.data === kt
      );
      f === c && (s = yt(), W(s), ie(!1), l = !0);
    }
    f ? (a ? et(a) : a = Ie(() => r(s)), u && ht(u, () => {
      u = null;
    })) : (u ? et(u) : n && (u = Ie(() => n(s))), a && ht(a, () => {
      a = null;
    })), l && ie(!0);
  }, o), T && (s = C);
}
function qe(e, t) {
  return t;
}
function Yn(e, t, r, n) {
  for (var i = [], s = t.length, a = 0; a < s; a++)
    It(t[a].e, i, !0);
  var u = s > 0 && i.length === 0 && r !== null;
  if (u) {
    var f = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    qr(f), f.append(
      /** @type {Element} */
      r
    ), n.clear(), le(e, t[0].prev, t[s - 1].next);
  }
  hr(i, () => {
    for (var o = 0; o < s; o++) {
      var l = t[o];
      u || (n.delete(l.k), le(e, l.prev, l.next)), me(l.e, !u);
    }
  });
}
function Oe(e, t, r, n, i, s = null) {
  var a = e, u = { flags: t, items: /* @__PURE__ */ new Map(), first: null };
  {
    var f = (
      /** @type {Element} */
      e
    );
    a = T ? W(
      /** @type {Comment | Text} */
      /* @__PURE__ */ pe(f)
    ) : f.appendChild(Ee());
  }
  T && Be();
  var o = null, l = !1;
  Ot(() => {
    var c = r(), v = At(c) ? c : c == null ? [] : Ct(c), d = v.length;
    if (l && d === 0)
      return;
    l = d === 0;
    let _ = !1;
    if (T) {
      var h = (
        /** @type {Comment} */
        a.data === kt
      );
      h !== (d === 0) && (a = yt(), W(a), ie(!1), _ = !0);
    }
    if (T) {
      for (var g = null, p, m = 0; m < d; m++) {
        if (C.nodeType === 8 && /** @type {Comment} */
        C.data === Nt) {
          a = /** @type {Comment} */
          C, _ = !0, ie(!1);
          break;
        }
        var x = v[m], k = n(x, m);
        p = Lr(C, u, g, null, x, k, m, i, t), u.items.set(k, p), g = p;
      }
      d > 0 && W(yt());
    }
    if (!T) {
      var A = (
        /** @type {Effect} */
        S
      );
      Un(v, u, a, i, t, (A.f & X) !== 0, n);
    }
    s !== null && (d === 0 ? o ? et(o) : o = Ie(() => s(a)) : o !== null && ht(o, () => {
      o = null;
    })), _ && ie(!0), r();
  }), T && (a = C);
}
function Un(e, t, r, n, i, s, a) {
  var u = e.length, f = t.items, o = t.first, l = o, c, v = null, d = [], _ = [], h, g, p, m;
  for (m = 0; m < u; m += 1) {
    if (h = e[m], g = a(h, m), p = f.get(g), p === void 0) {
      var x = l ? (
        /** @type {TemplateNode} */
        l.e.nodes_start
      ) : r;
      v = Lr(
        x,
        t,
        v,
        v === null ? t.first : v.next,
        h,
        g,
        m,
        n,
        i
      ), f.set(g, v), d = [], _ = [], l = v.next;
      continue;
    }
    if (jn(p, h, m), p.e.f & X && et(p.e), p !== l) {
      if (c !== void 0 && c.has(p)) {
        if (d.length < _.length) {
          var k = _[0], A;
          v = k.prev;
          var N = d[0], L = d[d.length - 1];
          for (A = 0; A < d.length; A += 1)
            Vt(d[A], k, r);
          for (A = 0; A < _.length; A += 1)
            c.delete(_[A]);
          le(t, N.prev, L.next), le(t, v, N), le(t, L, k), l = k, v = L, m -= 1, d = [], _ = [];
        } else
          c.delete(p), Vt(p, l, r), le(t, p.prev, p.next), le(t, p, v === null ? t.first : v.next), le(t, v, p), v = p;
        continue;
      }
      for (d = [], _ = []; l !== null && l.k !== g; )
        (s || !(l.e.f & X)) && (c ?? (c = /* @__PURE__ */ new Set())).add(l), _.push(l), l = l.next;
      if (l === null)
        continue;
      p = l;
    }
    d.push(p), v = p, l = p.next;
  }
  if (l !== null || c !== void 0) {
    for (var O = c === void 0 ? [] : Ct(c); l !== null; )
      (s || !(l.e.f & X)) && O.push(l), l = l.next;
    var Te = O.length;
    if (Te > 0) {
      var ve = u === 0 ? r : null;
      Yn(t, O, ve, f);
    }
  }
  w.first = t.first && t.first.e, w.last = v && v.e;
}
function jn(e, t, r, n) {
  nr(e.v, t), e.i = r;
}
function Lr(e, t, r, n, i, s, a, u, f) {
  var o = (f & Wr) !== 0, l = (f & Xr) === 0, c = o ? l ? /* @__PURE__ */ St(i) : Y(i) : i, v = f & Gr ? Y(a) : a, d = {
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
    return d.e = Ie(() => u(e, c, v), T), d.e.prev = r && r.e, d.e.next = n && n.e, r === null ? t.first = d : (r.next = d, r.e.next = d.e), n !== null && (n.prev = d, n.e.prev = d.e), d;
  } finally {
  }
}
function Vt(e, t, r) {
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
      /* @__PURE__ */ ce(s)
    );
    i.before(s), s = a;
  }
}
function le(e, t, r) {
  t === null ? e.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
}
function Dr(e, t, r, n, i) {
  var u;
  T && Be();
  var s = (u = t.$$slots) == null ? void 0 : u[r], a = !1;
  s === !0 && (s = t.children, a = !0), s === void 0 || s(e, a ? () => n : n);
}
function ze(e, t) {
  br(() => {
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
function Pr(e) {
  if (T) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var n = e.value;
          K(e, "value", null), e.value = n;
        }
        if (e.hasAttribute("checked")) {
          var i = e.checked;
          K(e, "checked", null), e.checked = i;
        }
      }
    };
    e.__on_r = r, kn(r), Or();
  }
}
function K(e, t, r, n) {
  var i = e.__attributes ?? (e.__attributes = {});
  T && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || i[t] !== (i[t] = r) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[cn] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Jn(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
var Yt = /* @__PURE__ */ new Map();
function Jn(e) {
  var t = Yt.get(e.nodeName);
  if (t) return t;
  Yt.set(e.nodeName, t = []);
  for (var r, n = _t(e), i = Element.prototype; i !== n; ) {
    r = an(n);
    for (var s in r)
      r[s].set && t.push(s);
    n = _t(n);
  }
  return t;
}
function We(e, t) {
  var r = e.__className, n = Kn(t);
  T && e.className === n ? e.__className = n : (r !== n || T && e.className !== n) && (t == null ? e.removeAttribute("class") : e.className = n, e.__className = n);
}
function Kn(e) {
  return e ?? "";
}
const Wn = () => performance.now(), oe = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (e) => requestAnimationFrame(e)
  ),
  now: () => Wn(),
  tasks: /* @__PURE__ */ new Set()
};
function Fr(e) {
  oe.tasks.forEach((t) => {
    t.c(e) || (oe.tasks.delete(t), t.f());
  }), oe.tasks.size !== 0 && oe.tick(Fr);
}
function Gn(e) {
  let t;
  return oe.tasks.size === 0 && oe.tick(Fr), {
    promise: new Promise((r) => {
      oe.tasks.add(t = { c: e, f: r });
    }),
    abort() {
      oe.tasks.delete(t);
    }
  };
}
function je(e, t) {
  e.dispatchEvent(new CustomEvent(t));
}
function Xn(e) {
  if (e === "float") return "cssFloat";
  if (e === "offset") return "cssOffset";
  if (e.startsWith("--")) return e;
  const t = e.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(
    /** @param {any} word */
    (r) => r[0].toUpperCase() + r.slice(1)
  ).join("");
}
function Ut(e) {
  const t = {}, r = e.split(";");
  for (const n of r) {
    const [i, s] = n.split(":");
    if (!i || s === void 0) break;
    const a = Xn(i.trim());
    t[a] = s.trim();
  }
  return t;
}
const Zn = (e) => e;
function Qn(e, t, r, n) {
  var i = (e & rn) !== 0, s = "both", a, u = t.inert, f, o;
  function l() {
    var h = S, g = w;
    ee(null), U(null);
    try {
      return a ?? (a = r()(t, (n == null ? void 0 : n()) ?? /** @type {P} */
      {}, {
        direction: s
      }));
    } finally {
      ee(h), U(g);
    }
  }
  var c = {
    is_global: i,
    in() {
      t.inert = u, je(t, "introstart"), f = Et(t, l(), o, 1, () => {
        je(t, "introend"), f == null || f.abort(), f = a = void 0;
      });
    },
    out(h) {
      t.inert = !0, je(t, "outrostart"), o = Et(t, l(), f, 0, () => {
        je(t, "outroend"), h == null || h();
      });
    },
    stop: () => {
      f == null || f.abort(), o == null || o.abort();
    }
  }, v = (
    /** @type {Effect} */
    w
  );
  if ((v.transitions ?? (v.transitions = [])).push(c), xt) {
    var d = i;
    if (!d) {
      for (var _ = (
        /** @type {Effect | null} */
        v.parent
      ); _ && _.f & st; )
        for (; (_ = _.parent) && !(_.f & it); )
          ;
      d = !_ || (_.f & Zt) !== 0;
    }
    d && ur(() => {
      gt(() => c.in());
    });
  }
}
function Et(e, t, r, n, i) {
  var s = n === 1;
  if (un(t)) {
    var a, u = !1;
    return br(() => {
      if (!u) {
        var g = t({ direction: s ? "in" : "out" });
        a = Et(e, g, r, n, i);
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
      abort: Ce,
      deactivate: Ce,
      reset: Ce,
      t: () => n
    };
  const { delay: f = 0, css: o, tick: l, easing: c = Zn } = t;
  var v = [];
  if (s && r === void 0 && (l && l(0, 1), o)) {
    var d = Ut(o(0, 1));
    v.push(d, d);
  }
  var _ = () => 1 - n, h = e.animate(v, { duration: f });
  return h.onfinish = () => {
    var g = (r == null ? void 0 : r.t()) ?? 1 - n;
    r == null || r.abort();
    var p = n - g, m = (
      /** @type {number} */
      t.duration * Math.abs(p)
    ), x = [];
    if (m > 0) {
      if (o)
        for (var k = Math.ceil(m / 16.666666666666668), A = 0; A <= k; A += 1) {
          var N = g + p * c(A / k), L = o(N, 1 - N);
          x.push(Ut(L));
        }
      _ = () => {
        var O = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          h.currentTime
        );
        return g + p * c(O / m);
      }, l && Gn(() => {
        if (h.playState !== "running") return !1;
        var O = _();
        return l(O, 1 - O), !0;
      });
    }
    h = e.animate(x, { duration: m, fill: "forwards" }), h.onfinish = () => {
      _ = () => n, l == null || l(n, 1 - n), i();
    };
  }, {
    abort: () => {
      h && (h.cancel(), h.effect = null, h.onfinish = Ce);
    },
    deactivate: () => {
      i = Ce;
    },
    reset: () => {
      n === 0 && (l == null || l(1, 0));
    },
    t: () => _()
  };
}
function Hr(e, t, r = t) {
  Dn(e, "input", () => {
    var n = jt(e) ? Jt(e.value) : e.value;
    r(n), n !== (n = t()) && (e.value = n ?? "");
  }), fr(() => {
    var n = t();
    if (T && e.defaultValue !== e.value) {
      r(e.value);
      return;
    }
    jt(e) && n === Jt(e.value) || e.type === "date" && !n && !e.value || n !== e.value && (e.value = n ?? "");
  });
}
function jt(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Jt(e) {
  return e === "" ? null : +e;
}
let Je = !1;
function ei(e) {
  var t = Je;
  try {
    return Je = !1, [e(), Je];
  } finally {
    Je = t;
  }
}
function ti(e) {
  for (var t = w, r = w; t !== null && !(t.f & (te | Le)); )
    t = t.parent;
  try {
    return U(t), e();
  } finally {
    U(r);
  }
}
function E(e, t, r, n) {
  var A;
  var i = (r & Zr) !== 0, s = !rr, a = (r & en) !== 0, u = (r & tn) !== 0, f = !1, o;
  a ? [o, f] = ei(() => (
    /** @type {V} */
    e[t]
  )) : o = /** @type {V} */
  e[t];
  var l = (A = _e(e, t)) == null ? void 0 : A.set, c = (
    /** @type {V} */
    n
  ), v = !0, d = !1, _ = () => (d = !0, v && (v = !1, u ? c = gt(
    /** @type {() => V} */
    n
  ) : c = /** @type {V} */
  n), c);
  o === void 0 && n !== void 0 && (l && s && hn(), o = _(), l && l(o));
  var h;
  if (h = () => {
    var N = (
      /** @type {V} */
      e[t]
    );
    return N === void 0 ? _() : (v = !0, d = !1, N);
  }, !(r & Qr))
    return h;
  if (l) {
    var g = e.$$legacy;
    return function(N, L) {
      return arguments.length > 0 ? ((!L || g || f) && l(L ? h() : N), N) : h();
    };
  }
  var p = !1, m = !1, x = /* @__PURE__ */ St(o), k = ti(
    () => /* @__PURE__ */ wn(() => {
      var N = h(), L = y(x);
      return p ? (p = !1, m = !0, L) : (m = !1, x.v = N);
    })
  );
  return i || (k.equals = tr), function(N, L) {
    if (arguments.length > 0) {
      const O = L ? y(k) : a ? G(N) : N;
      return k.equals(O) || (p = !0, H(x, O), d && c !== void 0 && (c = O), gt(() => y(k))), N;
    }
    return y(k);
  };
}
function ri(e) {
  return new ni(e);
}
var ne, V;
class ni {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    ct(this, ne);
    /** @type {Record<string, any>} */
    ct(this, V);
    var s;
    var r = /* @__PURE__ */ new Map(), n = (a, u) => {
      var f = /* @__PURE__ */ St(u);
      return r.set(a, f), f;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, u) {
          return y(r.get(u) ?? n(u, Reflect.get(a, u)));
        },
        has(a, u) {
          return y(r.get(u) ?? n(u, Reflect.get(a, u))), Reflect.has(a, u);
        },
        set(a, u, f) {
          return H(r.get(u) ?? n(u, f), f), Reflect.set(a, u, f);
        }
      }
    );
    vt(this, V, (t.hydrate ? zn : Mr)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((s = t == null ? void 0 : t.props) != null && s.$$host) || t.sync === !1) && Tr(), vt(this, ne, i.$$events);
    for (const a of Object.keys(D(this, V)))
      a === "$set" || a === "$destroy" || a === "$on" || Ze(this, a, {
        get() {
          return D(this, V)[a];
        },
        /** @param {any} value */
        set(u) {
          D(this, V)[a] = u;
        },
        enumerable: !0
      });
    D(this, V).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, D(this, V).$destroy = () => {
      Vn(D(this, V));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    D(this, V).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    D(this, ne)[t] = D(this, ne)[t] || [];
    const n = (...i) => r.call(this, ...i);
    return D(this, ne)[t].push(n), () => {
      D(this, ne)[t] = D(this, ne)[t].filter(
        /** @param {any} fn */
        (i) => i !== n
      );
    };
  }
  $destroy() {
    D(this, V).$destroy();
  }
}
ne = new WeakMap(), V = new WeakMap();
let Br;
typeof HTMLElement == "function" && (Br = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    j(this, "$$ctor");
    /** Slots */
    j(this, "$$s");
    /** @type {any} The Svelte component instance */
    j(this, "$$c");
    /** Whether or not the custom element is connected */
    j(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    j(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    j(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    j(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    j(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    j(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    j(this, "$$me");
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
          i !== "default" && (a.name = i), q(s, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = ii(this);
      for (const i of this.$$s)
        i in n && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), r.default = !0) : r[i] = t(i));
      for (const i of this.attributes) {
        const s = this.$$g_p(i.name);
        s in this.$$d || (this.$$d[s] = Ge(s, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = ri({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = or(() => {
        fr(() => {
          var i;
          this.$$r = !0;
          for (const s of Xe(this.$$c)) {
            if (!((i = this.$$p_d[s]) != null && i.reflect)) continue;
            this.$$d[s] = this.$$c[s];
            const a = Ge(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Ge(t, n, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
    return Xe(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function Ge(e, t, r, n) {
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
function ii(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Ve(e, t, r, n, i, s) {
  let a = class extends Br {
    constructor() {
      super(e, r, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Xe(t).map(
        (u) => (t[u].attribute || u).toLowerCase()
      );
    }
  };
  return Xe(t).forEach((u) => {
    Ze(a.prototype, u, {
      get() {
        return this.$$c && u in this.$$c ? this.$$c[u] : this.$$d[u];
      },
      set(f) {
        var c;
        f = Ge(u, f, t), this.$$d[u] = f;
        var o = this.$$c;
        if (o) {
          var l = (c = _e(o, u)) == null ? void 0 : c.get;
          l ? o[u] = f : o.$set({ [u]: f });
        }
      }
    });
  }), n.forEach((u) => {
    Ze(a.prototype, u, {
      get() {
        var f;
        return (f = this.$$c) == null ? void 0 : f[u];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
var si = /* @__PURE__ */ I('<button type="button"><!></button>');
const ai = {
  hash: "svelte-1bto172",
  code: ".button.svelte-1bto172 {display:inline-block;cursor:pointer;border:0;margin-left:14px;border-radius:3em;font-weight:700;line-height:1;font-family:'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;}.button--primary.svelte-1bto172 {background-color:#1ea7fd;color:white;}.button--secondary.svelte-1bto172 {box-shadow:rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;background-color:transparent;color:#333;}.button--small.svelte-1bto172 {padding:10px 16px;font-size:12px;}.button--medium.svelte-1bto172 {padding:11px 20px;font-size:14px;}.button--large.svelte-1bto172 {padding:12px 24px;font-size:16px;}"
};
function li(e, t) {
  ze(e, ai);
  const r = E(t, "type", 3, "primary"), n = E(t, "size", 3, "medium");
  E(t, "label", 3, "Button");
  const i = E(t, "onClick", 3, void 0);
  var s = si();
  s.__click = function(...u) {
    var f;
    (f = i()) == null || f.apply(this, u);
  };
  var a = $(s);
  Dr(a, t, "default", {}), b(s), J(() => We(s, `${"button button--" + n() + " button--" + r()} svelte-1bto172`)), q(e, s);
}
ft(["click"]);
customElements.define("mapp-button", Ve(li, { type: {}, size: {}, label: {}, onClick: {} }, ["default"], [], !0));
var oi = /* @__PURE__ */ I('<div class="input_label svelte-1hyy719"> </div>'), ui = /* @__PURE__ */ I('<span class="input_icon svelte-1hyy719"><img width="16px" alt="in"></span>'), fi = (e, t) => {
  t(e);
}, ci = /* @__PURE__ */ I('<div class="input_frame svelte-1hyy719"><!> <div class="input_box svelte-1hyy719"><!> <input class="input_field svelte-1hyy719"></div></div>');
const vi = {
  hash: "svelte-1hyy719",
  code: `.input_frame.svelte-1hyy719 {padding-right:24px;margin-bottom:14px;}.input_label.svelte-1hyy719 {margin-bottom:6px;}.input_box.svelte-1hyy719 {display:flex;color:#4a5073;background-color:#fff;border:0.0625rem solid #d1d7e0;border-radius:0.5rem;
    /* padding-right: 14px; */}.input_icon.svelte-1hyy719 {width:32px;position:relative;top:12px;left:9px;}.input_field.svelte-1hyy719 {box-shadow:none;width:280px;border:0.0625rem solid #d1d7e0;color:#66799e;background-color:transparent;background-clip:padding-box;appearance:none;border:transparent;height:40px;font-size:16px;border-style:none;border-radius:0.5rem;margin-left:4px;margin-right:8px;width:98%;}.input_field.svelte-1hyy719:focus {outline:none;}`
};
function zr(e, t) {
  ot(t, !0), ze(e, vi);
  let r = E(t, "label", 3, ""), n = E(t, "icon", 3, ""), i = E(t, "type", 3, "text"), s = E(t, "placeholder", 3, ""), a = E(t, "input", 15, ""), u = E(t, "style", 3, "");
  const f = (_) => {
    _ && _.target && _.target.value && t.$$host && t.$$host.dispatchEvent(new CustomEvent("update", { detail: { input: _.target.value } }));
  };
  var o = ci(), l = $(o);
  he(l, r, (_) => {
    var h = oi(), g = $(h, !0);
    b(h), J(() => ke(g, r())), q(_, h);
  });
  var c = R(l, 2), v = $(c);
  he(v, n, (_) => {
    var h = ui(), g = $(h);
    b(h), J(() => K(g, "src", n())), q(_, h);
  });
  var d = R(v, 2);
  Pr(d), d.__input = [fi, f], b(c), b(o), J(() => {
    K(o, "style", u()), K(d, "type", i()), K(d, "placeholder", s());
  }), Hr(d, a), q(e, o), ut();
}
ft(["input"]);
customElements.define("apint-input", Ve(
  zr,
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
var di = /* @__PURE__ */ I('<span class="user_button svelte-gns4bd"><img class="msg_icon svelte-gns4bd" alt="alerts" src="bell.svg"> <span class="msg_new svelte-gns4bd"></span> <img class="user_icon svelte-gns4bd" alt="profile"> <span class="user_name svelte-gns4bd"> </span></span>'), _i = /* @__PURE__ */ I("<span></span>"), hi = /* @__PURE__ */ I('<div class="header svelte-gns4bd"><div style="width: 364px;"><!> <span></span></div> <div><!></div></div>');
const pi = {
  hash: "svelte-gns4bd",
  code: ".header.svelte-gns4bd {display:flex;justify-content:space-between;align-items:center;padding:26px 20px;font-family:'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;}.msg_icon.svelte-gns4bd {width:20px;margin-right:22px;}.msg_new.svelte-gns4bd {background-color:red;height:7px;width:7px;border-radius:50% !important;position:relative;top:4px;left:-22px;}.user_button.svelte-gns4bd {display:flex;position:relative;top:-6px;}.user_button.svelte-gns4bd:hover {cursor:pointer;}.user_name.svelte-gns4bd {padding-top:12px;padding-left:8px;}.user_icon.svelte-gns4bd {border-radius:50% !important;width:40px;}"
};
function Vr(e, t) {
  ze(e, pi), E(t, "title", 3, "Apint.org");
  const r = E(t, "searchicon", 3, ""), n = E(t, "supportuser", 3, !1), i = E(t, "username", 3, ""), s = E(t, "userpic", 3, "");
  let a = "";
  var u = hi(), f = $(u), o = $(f);
  zr(o, {
    get icon() {
      return r();
    },
    placeholder: "Search",
    input: a
  });
  var l = R(o, 2);
  l.textContent = a, b(f);
  var c = R(f, 2), v = $(c);
  he(
    v,
    n,
    (d) => {
      var _ = di(), h = R($(_), 4), g = R(h, 2), p = $(g, !0);
      b(g), b(_), J(() => {
        K(h, "src", s()), ke(p, i());
      }), q(d, _);
    },
    (d) => {
      var _ = Fn(), h = Sr(_);
      he(
        h,
        n,
        (g) => {
          var p = _i();
          q(g, p);
        },
        null,
        !0
      ), q(d, _);
    }
  ), b(c), b(u), q(e, u);
}
customElements.define("mapp-headerlite", Ve(
  Vr,
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
function mi(e) {
  const t = e - 1;
  return t * t * t + 1;
}
function gi(e, { delay: t = 0, duration: r = 400, easing: n = mi, axis: i = "y" } = {}) {
  const s = getComputedStyle(e), a = +s.opacity, u = i === "y" ? "height" : "width", f = parseFloat(s[u]), o = i === "y" ? ["top", "bottom"] : ["left", "right"], l = o.map(
    (p) => (
      /** @type {'Left' | 'Right' | 'Top' | 'Bottom'} */
      `${p[0].toUpperCase()}${p.slice(1)}`
    )
  ), c = parseFloat(s[`padding${l[0]}`]), v = parseFloat(s[`padding${l[1]}`]), d = parseFloat(s[`margin${l[0]}`]), _ = parseFloat(s[`margin${l[1]}`]), h = parseFloat(
    s[`border${l[0]}Width`]
  ), g = parseFloat(
    s[`border${l[1]}Width`]
  );
  return {
    delay: t,
    duration: r,
    easing: n,
    css: (p) => `overflow: hidden;opacity: ${Math.min(p * 20, 1) * a};${u}: ${p * f}px;padding-${o[0]}: ${p * c}px;padding-${o[1]}: ${p * v}px;margin-${o[0]}: ${p * d}px;margin-${o[1]}: ${p * _}px;border-${o[0]}-width: ${p * h}px;border-${o[1]}-width: ${p * g}px;`
  };
}
function bi(e) {
  return e;
}
var yi = (e, t, r) => t(y(r).title), wi = /* @__PURE__ */ I('<img alt="option" width="18px">'), xi = /* @__PURE__ */ I('<svg width="18px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-pie" class="svg-inline--fa fa-chart-pie fa-w-17 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512"><path fill="currentColor" d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"></path></svg>'), $i = /* @__PURE__ */ I('<span><svg class="icon icon-sm" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span>'), Ei = (e, t, r) => t(y(r).title), ki = /* @__PURE__ */ I('<a><span><span class="menu_item_icon svelte-v1mgvt"></span> <span class="menu_item_text"> </span></span></a>'), Ni = /* @__PURE__ */ I('<div class="menu_item_frame svelte-v1mgvt"></div>'), Ti = /* @__PURE__ */ I('<a><span><span class="menu_item_icon svelte-v1mgvt"><!></span> <span class="menu_item_text"> </span> <!></span></a> <!>', 1), Ai = /* @__PURE__ */ I('<div class="outer_frame svelte-v1mgvt"><div class="left_menu svelte-v1mgvt"><div class="menu_frame svelte-v1mgvt"></div></div> <div class="right_panel svelte-v1mgvt"><!> <div class="right_panel_content svelte-v1mgvt"><!></div></div></div>');
const Ci = {
  hash: "svelte-v1mgvt",
  code: `a.svelte-v1mgvt:link {text-decoration:none;}a.svelte-v1mgvt:visited {text-decoration:none;color:#eaedf2;}a.svelte-v1mgvt:hover {text-decoration:none;color:#eaedf2;}a.svelte-v1mgvt:active {text-decoration:none;}.outer_frame.svelte-v1mgvt {position:fixed;left:0px;top:0px;display:flex;height:100vh;width:100vw;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}.left_menu.svelte-v1mgvt {display:flex;flex-flow:row nowrap;width:260px !important;min-width:260px;height:100%;background-color:#262b40 !important;color:#eaedf2;}.menu_frame.svelte-v1mgvt {margin:20px 30px 20px 30px;width:100%;}.menu_item.svelte-v1mgvt {display:block;width:100%;text-align:left;padding:10px 0px;color:#eaedf2;border-radius:.5rem;margin-bottom:8px;border:.0625rem solid transparent;}.menu_item.svelte-v1mgvt:hover {background-color:#2e3650;}.menu_item_active.svelte-v1mgvt {background-color:#2e3650;border:.0625rem solid #4c5680;}.menu_item_icon.svelte-v1mgvt {display:inline-block;margin-left:12px;margin-right:.5rem;color:#fff;position:relative;top:3px;width:18px;}.menu_item_expand.svelte-v1mgvt {float:right;width:22px;}.expanded.svelte-v1mgvt {position:relative;
    /* left: -4px; */
    /* top: -2px; */transform:rotate(90deg) translateX(-2px) translateY(4px);transition:all 0.2s ease;}.menu_item_frame.svelte-v1mgvt {width:100%;}.right_panel.svelte-v1mgvt {color:#4a5073;background-color:#f5f8fb;flex:auto;height:100%;overflow-y:auto;}.right_panel_content.svelte-v1mgvt {padding:0px 20px;}`
};
function Si(e, t) {
  ot(t, !0), ze(e, Ci), E(t, "title", 3, "Mapp"), E(t, "icon", 3, "");
  let r = E(t, "searchicon", 3, ""), n = E(t, "supportuser", 3, !0), i = E(t, "username", 3, ""), s = E(t, "userpic", 3, ""), a = E(t, "activeitem", 3, ""), u = E(t, "menuconfig", 7, void 0);
  typeof u() == "string" && u(JSON.parse(u()));
  let f = G({}), o = (p) => {
    f[p] ? f[p] = !f[p] : f[p] = !0;
  };
  var l = Ai(), c = $(l), v = $(c);
  Oe(v, 21, () => u().items, qe, (p, m) => {
    var x = Ti(), k = Sr(x);
    k.__click = [yi, o, m];
    var A = $(k), N = $(A), L = $(N);
    he(
      L,
      () => y(m).icon,
      (re) => {
        var z = wi();
        J(() => K(z, "src", y(m).icon)), q(re, z);
      },
      (re) => {
        var z = xi();
        q(re, z);
      }
    ), b(N);
    var O = R(N, 2), Te = $(O, !0);
    b(O);
    var ve = R(O, 2);
    he(ve, () => y(m).subitems, (re) => {
      var z = $i();
      J(() => We(z, `${(f[y(m).title] ? "menu_item_expand expanded" : "menu_item_expand") ?? ""} svelte-v1mgvt`)), q(re, z);
    }), b(A), b(k);
    var Ae = R(k, 2);
    he(Ae, () => f[y(m).title] && y(m).subitems, (re) => {
      var z = Ni();
      Oe(z, 21, () => y(m).subitems, qe, (Yr, Ye) => {
        var ge = ki();
        ge.__click = [Ei, o, Ye];
        var Mt = $(ge), Rt = R($(Mt), 2), Ur = $(Rt, !0);
        b(Rt), b(Mt), b(ge), J(() => {
          K(ge, "href", y(Ye).url), We(ge, `${(y(Ye).title == a() ? "menu_item menu_item_active" : "menu_item") ?? ""} svelte-v1mgvt`), ke(Ur, y(Ye).title);
        }), q(Yr, ge);
      }), b(z), Qn(3, z, () => gi, () => ({ duration: 300, easing: bi })), q(re, z);
    }), J(() => {
      K(k, "href", y(m).url), We(k, `${(y(m).title == a() ? "menu_item menu_item_active" : "menu_item") ?? ""} svelte-v1mgvt`), ke(Te, y(m).title);
    }), q(p, x);
  }), b(v), b(c);
  var d = R(c, 2), _ = $(d);
  Vr(_, {
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
      return s();
    }
  });
  var h = R(_, 2), g = $(h);
  Dr(g, t, "default", {}), b(h), b(d), b(l), q(e, l), ut();
}
ft(["click"]);
customElements.define("mapp-menu", Ve(
  Si,
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
function qi(e, t, r, n, i, s) {
  if (y(t)) {
    let a = [];
    for (let u of r()) {
      let f = !1;
      for (let o of n())
        if ((i().length === 0 || i().includes(o)) && u[o].toString().toLowerCase().includes(y(t).toLowerCase())) {
          f = !0;
          break;
        }
      f && a.push(u);
    }
    H(s, G(a));
  } else
    H(s, G(r()));
}
var Oi = /* @__PURE__ */ I('<th class="svelte-15ql2st"> </th>'), Ii = /* @__PURE__ */ I('<td class="svelte-15ql2st"><a class="table_row svelte-15ql2st"> </a></td>'), Mi = /* @__PURE__ */ I('<tr class="svelte-15ql2st"></tr>'), Ri = /* @__PURE__ */ I('<div class="card_frame svelte-15ql2st"><div class="filter svelte-15ql2st"><svg data-icon-name="filterIcon" viewBox="0 0 18 18" width="18" height="18" aria-hidden="true"><path fill-rule="evenodd" d="M2 4h14v2H2V4zm2 4h10v2H4V8zm2 4h6v2H6v-2z"></path></svg> <span class="filter_input_box svelte-15ql2st">Filter <input class="filter_input svelte-15ql2st" placeholder="Value to filter for"></span></div> <table class="svelte-15ql2st"><thead class="svelte-15ql2st"><tr class="svelte-15ql2st"></tr></thead><tbody class="svelte-15ql2st"></tbody></table></div>');
const Li = {
  hash: "svelte-15ql2st",
  code: `.card_frame.svelte-15ql2st {border-color:#eaedf2 !important;box-shadow:0 2px 18px rgba(0, 0, 0, 0.02) !important;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:0.0625rem solid rgba(46, 54, 80, 0.125);border-radius:0.5rem;padding:22px 32px;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}table.svelte-15ql2st {width:100%;margin-bottom:1rem;color:#4a5073;vertical-align:top;border-color:#eaedf2;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;border-collapse:collapse;}table.svelte-15ql2st thead:where(.svelte-15ql2st) tr:where(.svelte-15ql2st) th:where(.svelte-15ql2st) {vertical-align:center;text-align:left;border-bottom:1px solid #eaedf2 !important;font-size:12px;font-weight:bold;padding-left:14px;padding-bottom:10px;}.table_row.svelte-15ql2st {padding-left:14px;padding-top:14px;padding-bottom:14px;border-bottom:1px solid #eaedf2 !important;}table.svelte-15ql2st tbody:where(.svelte-15ql2st) tr:where(.svelte-15ql2st):hover {background-color:#eff0f2;cursor:pointer;border-radius:0.5rem;}a.svelte-15ql2st:link {text-decoration:none;color:#4a5073;}a.svelte-15ql2st:visited {text-decoration:none;color:#4a5073;}a.svelte-15ql2st:hover {text-decoration:none;color:#4a5073;}a.svelte-15ql2st:active {text-decoration:none;}td.svelte-15ql2st a:where(.svelte-15ql2st) {display:block;}.filter.svelte-15ql2st {margin-top:20px;margin-bottom:8px;margin-left:8px;}.filter_input_box.svelte-15ql2st {position:relative;top:-3px;font-weight:bold;font-size:14px;}.filter_input.svelte-15ql2st {width:50%;margin-left:8px;font-family:Google Sans,
      Roboto,
      Helvetica,
      Arial,
      sans-serif;padding:var(--padding);
    /* border: 2px solid gray; */border:0px;outline:none;border-radius:0px;
    /* background-color: #f1f3f4; */background-color:rgb(255, 255, 255);}`
};
function Di(e, t) {
  ot(t, !0), ze(e, Li);
  let r = E(t, "headers", 23, () => []), n = E(t, "headerssearchable", 23, () => []), i = E(t, "rows", 23, () => []), s = E(t, "linkprefix", 3, ""), a = E(t, "linkcolumnname", 3, ""), u = E(t, "update", 3, void 0);
  typeof r() == "string" && r(JSON.parse(r())), typeof n() == "string" && n(JSON.parse(n())), typeof i() == "string" && i(JSON.parse(i()));
  let f = Pt(G(i())), o = Pt("");
  const l = (x) => {
    t.$$host.dispatchEvent(new CustomEvent("update", { detail: { rowIndex: x } })), u() && u()({ detail: { rowIndex: x } });
  };
  var c = Ri(), v = $(c), d = R($(v), 2), _ = R($(d));
  Pr(_), _.__keyup = [
    qi,
    o,
    i,
    r,
    n,
    f
  ], b(d), b(v);
  var h = R(v, 2), g = $(h), p = $(g);
  Oe(p, 21, r, qe, (x, k) => {
    var A = Oi(), N = $(A, !0);
    b(A), J(() => ke(N, y(k))), q(x, A);
  }), b(p), b(g);
  var m = R(g);
  Oe(m, 21, () => y(f), qe, (x, k, A) => {
    var N = Mi();
    N.__click = () => {
      l(A);
    }, Oe(N, 21, () => Object.entries(y(k)), qe, (O, Te) => {
      var ve = Ii(), Ae = $(ve), re = $(Ae, !0);
      b(Ae), b(ve), J(() => {
        K(Ae, "href", s() + y(k)[a()]), ke(re, y(Te)[1]);
      }), q(O, ve);
    }), b(N), q(x, N);
  }), b(m), b(h), b(c), Hr(_, () => y(o), (x) => H(o, x)), q(e, c), ut();
}
ft(["keyup", "click"]);
customElements.define("mapp-table", Ve(
  Di,
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
export {
  li as MappButton,
  Vr as MappHeaderLite,
  zr as MappInput,
  Si as MappMenu,
  Di as MappTable
};
