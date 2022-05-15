var $a = Object.defineProperty,
  La = Object.defineProperties
var Fa = Object.getOwnPropertyDescriptors
var Un = Object.getOwnPropertySymbols
var ci = Object.prototype.hasOwnProperty,
  fi = Object.prototype.propertyIsEnumerable
var ui = (e, t, n) =>
    t in e
      ? $a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  ie = (e, t) => {
    for (var n in t || (t = {})) ci.call(t, n) && ui(e, n, t[n])
    if (Un) for (var n of Un(t)) fi.call(t, n) && ui(e, n, t[n])
    return e
  },
  Ee = (e, t) => La(e, Fa(t))
var Kr = (e, t) => {
  var n = {}
  for (var o in e) ci.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o])
  if (e != null && Un)
    for (var o of Un(e)) t.indexOf(o) < 0 && fi.call(e, o) && (n[o] = e[o])
  return n
}
const qa = (function () {
    const t = document.createElement('link').relList
    return t && t.supports && t.supports('modulepreload')
      ? 'modulepreload'
      : 'preload'
  })(),
  di = {},
  Ba = '/',
  Lt = function (t, n) {
    return !n || n.length === 0
      ? t()
      : Promise.all(
          n.map((o) => {
            if (((o = `${Ba}${o}`), o in di)) return
            di[o] = !0
            const r = o.endsWith('.css'),
              i = r ? '[rel="stylesheet"]' : ''
            if (document.querySelector(`link[href="${o}"]${i}`)) return
            const s = document.createElement('link')
            if (
              ((s.rel = r ? 'stylesheet' : qa),
              r || ((s.as = 'script'), (s.crossOrigin = '')),
              (s.href = o),
              document.head.appendChild(s),
              r)
            )
              return new Promise((l, a) => {
                s.addEventListener('load', l),
                  s.addEventListener('error', () =>
                    a(new Error(`Unable to preload CSS for ${o}`))
                  )
              })
          })
        ).then(() => t())
  }
function $o(e, t) {
  const n = Object.create(null),
    o = e.split(',')
  for (let r = 0; r < o.length; r++) n[o[r]] = !0
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r]
}
const Na =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  Ia = $o(Na)
function Is(e) {
  return !!e || e === ''
}
function Tr(e) {
  if (te(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const o = e[n],
        r = Pe(o) ? Ha(o) : Tr(o)
      if (r) for (const i in r) t[i] = r[i]
    }
    return t
  } else {
    if (Pe(e)) return e
    if (ke(e)) return e
  }
}
const ja = /;(?![^(]*\))/g,
  Da = /:(.+)/
function Ha(e) {
  const t = {}
  return (
    e.split(ja).forEach((n) => {
      if (n) {
        const o = n.split(Da)
        o.length > 1 && (t[o[0].trim()] = o[1].trim())
      }
    }),
    t
  )
}
function Pr(e) {
  let t = ''
  if (Pe(e)) t = e
  else if (te(e))
    for (let n = 0; n < e.length; n++) {
      const o = Pr(e[n])
      o && (t += o + ' ')
    }
  else if (ke(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
const hi = (e) =>
    Pe(e)
      ? e
      : e == null
      ? ''
      : te(e) || (ke(e) && (e.toString === Vs || !oe(e.toString)))
      ? JSON.stringify(e, js, 2)
      : String(e),
  js = (e, t) =>
    t && t.__v_isRef
      ? js(e, t.value)
      : tn(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [o, r]) => ((n[`${o} =>`] = r), n),
            {}
          ),
        }
      : Ds(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : ke(t) && !te(t) && !zs(t)
      ? String(t)
      : t,
  ve = {},
  en = [],
  Ye = () => {},
  Va = () => !1,
  za = /^on[^a-z]/,
  Ar = (e) => za.test(e),
  Lo = (e) => e.startsWith('onUpdate:'),
  Me = Object.assign,
  Fo = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  Ua = Object.prototype.hasOwnProperty,
  ue = (e, t) => Ua.call(e, t),
  te = Array.isArray,
  tn = (e) => Mr(e) === '[object Map]',
  Ds = (e) => Mr(e) === '[object Set]',
  oe = (e) => typeof e == 'function',
  Pe = (e) => typeof e == 'string',
  qo = (e) => typeof e == 'symbol',
  ke = (e) => e !== null && typeof e == 'object',
  Hs = (e) => ke(e) && oe(e.then) && oe(e.catch),
  Vs = Object.prototype.toString,
  Mr = (e) => Vs.call(e),
  Ka = (e) => Mr(e).slice(8, -1),
  zs = (e) => Mr(e) === '[object Object]',
  Bo = (e) =>
    Pe(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  rr = $o(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  Or = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  Wa = /-(\w)/g,
  rt = Or((e) => e.replace(Wa, (t, n) => (n ? n.toUpperCase() : ''))),
  Qa = /\B([A-Z])/g,
  Ht = Or((e) => e.replace(Qa, '-$1').toLowerCase()),
  $r = Or((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  or = Or((e) => (e ? `on${$r(e)}` : '')),
  An = (e, t) => !Object.is(e, t),
  Wr = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t)
  },
  cr = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n })
  },
  Us = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  }
let mi
const Za = () =>
  mi ||
  (mi =
    typeof globalThis != 'undefined'
      ? globalThis
      : typeof self != 'undefined'
      ? self
      : typeof window != 'undefined'
      ? window
      : typeof global != 'undefined'
      ? global
      : {})
let it
class Ks {
  constructor(t = !1) {
    ;(this.active = !0),
      (this.effects = []),
      (this.cleanups = []),
      !t &&
        it &&
        ((this.parent = it),
        (this.index = (it.scopes || (it.scopes = [])).push(this) - 1))
  }
  run(t) {
    if (this.active)
      try {
        return (it = this), t()
      } finally {
        it = this.parent
      }
  }
  on() {
    it = this
  }
  off() {
    it = this.parent
  }
  stop(t) {
    if (this.active) {
      let n, o
      for (n = 0, o = this.effects.length; n < o; n++) this.effects[n].stop()
      for (n = 0, o = this.cleanups.length; n < o; n++) this.cleanups[n]()
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++) this.scopes[n].stop(!0)
      if (this.parent && !t) {
        const r = this.parent.scopes.pop()
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index))
      }
      this.active = !1
    }
  }
}
function Ya(e) {
  return new Ks(e)
}
function Ja(e, t = it) {
  t && t.active && t.effects.push(e)
}
const No = (e) => {
    const t = new Set(e)
    return (t.w = 0), (t.n = 0), t
  },
  Ws = (e) => (e.w & Et) > 0,
  Qs = (e) => (e.n & Et) > 0,
  Xa = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= Et
  },
  Ga = (e) => {
    const { deps: t } = e
    if (t.length) {
      let n = 0
      for (let o = 0; o < t.length; o++) {
        const r = t[o]
        Ws(r) && !Qs(r) ? r.delete(e) : (t[n++] = r), (r.w &= ~Et), (r.n &= ~Et)
      }
      t.length = n
    }
  },
  lo = new WeakMap()
let bn = 0,
  Et = 1
const ao = 30
let tt
const Nt = Symbol(''),
  uo = Symbol('')
class Io {
  constructor(t, n = null, o) {
    ;(this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      Ja(this, o)
  }
  run() {
    if (!this.active) return this.fn()
    let t = tt,
      n = xt
    for (; t; ) {
      if (t === this) return
      t = t.parent
    }
    try {
      return (
        (this.parent = tt),
        (tt = this),
        (xt = !0),
        (Et = 1 << ++bn),
        bn <= ao ? Xa(this) : pi(this),
        this.fn()
      )
    } finally {
      bn <= ao && Ga(this),
        (Et = 1 << --bn),
        (tt = this.parent),
        (xt = n),
        (this.parent = void 0)
    }
  }
  stop() {
    this.active && (pi(this), this.onStop && this.onStop(), (this.active = !1))
  }
}
function pi(e) {
  const { deps: t } = e
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e)
    t.length = 0
  }
}
let xt = !0
const Zs = []
function un() {
  Zs.push(xt), (xt = !1)
}
function cn() {
  const e = Zs.pop()
  xt = e === void 0 ? !0 : e
}
function Ve(e, t, n) {
  if (xt && tt) {
    let o = lo.get(e)
    o || lo.set(e, (o = new Map()))
    let r = o.get(n)
    r || o.set(n, (r = No())), Ys(r)
  }
}
function Ys(e, t) {
  let n = !1
  bn <= ao ? Qs(e) || ((e.n |= Et), (n = !Ws(e))) : (n = !e.has(tt)),
    n && (e.add(tt), tt.deps.push(e))
}
function ct(e, t, n, o, r, i) {
  const s = lo.get(e)
  if (!s) return
  let l = []
  if (t === 'clear') l = [...s.values()]
  else if (n === 'length' && te(e))
    s.forEach((a, u) => {
      ;(u === 'length' || u >= o) && l.push(a)
    })
  else
    switch ((n !== void 0 && l.push(s.get(n)), t)) {
      case 'add':
        te(e)
          ? Bo(n) && l.push(s.get('length'))
          : (l.push(s.get(Nt)), tn(e) && l.push(s.get(uo)))
        break
      case 'delete':
        te(e) || (l.push(s.get(Nt)), tn(e) && l.push(s.get(uo)))
        break
      case 'set':
        tn(e) && l.push(s.get(Nt))
        break
    }
  if (l.length === 1) l[0] && co(l[0])
  else {
    const a = []
    for (const u of l) u && a.push(...u)
    co(No(a))
  }
}
function co(e, t) {
  for (const n of te(e) ? e : [...e])
    (n !== tt || n.allowRecurse) && (n.scheduler ? n.scheduler() : n.run())
}
const eu = $o('__proto__,__v_isRef,__isVue'),
  Js = new Set(
    Object.getOwnPropertyNames(Symbol)
      .map((e) => Symbol[e])
      .filter(qo)
  ),
  tu = jo(),
  nu = jo(!1, !0),
  ru = jo(!0),
  gi = ou()
function ou() {
  const e = {}
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...n) {
        const o = ce(this)
        for (let i = 0, s = this.length; i < s; i++) Ve(o, 'get', i + '')
        const r = o[t](...n)
        return r === -1 || r === !1 ? o[t](...n.map(ce)) : r
      }
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...n) {
        un()
        const o = ce(this)[t].apply(this, n)
        return cn(), o
      }
    }),
    e
  )
}
function jo(e = !1, t = !1) {
  return function (o, r, i) {
    if (r === '__v_isReactive') return !e
    if (r === '__v_isReadonly') return e
    if (r === '__v_isShallow') return t
    if (r === '__v_raw' && i === (e ? (t ? _u : nl) : t ? tl : el).get(o))
      return o
    const s = te(o)
    if (!e && s && ue(gi, r)) return Reflect.get(gi, r, i)
    const l = Reflect.get(o, r, i)
    return (qo(r) ? Js.has(r) : eu(r)) || (e || Ve(o, 'get', r), t)
      ? l
      : Te(l)
      ? !s || !Bo(r)
        ? l.value
        : l
      : ke(l)
      ? e
        ? rl(l)
        : ft(l)
      : l
  }
}
const iu = Xs(),
  su = Xs(!0)
function Xs(e = !1) {
  return function (n, o, r, i) {
    let s = n[o]
    if (Mn(s) && Te(s) && !Te(r)) return !1
    if (
      !e &&
      !Mn(r) &&
      (ol(r) || ((r = ce(r)), (s = ce(s))), !te(n) && Te(s) && !Te(r))
    )
      return (s.value = r), !0
    const l = te(n) && Bo(o) ? Number(o) < n.length : ue(n, o),
      a = Reflect.set(n, o, r, i)
    return (
      n === ce(i) && (l ? An(r, s) && ct(n, 'set', o, r) : ct(n, 'add', o, r)),
      a
    )
  }
}
function lu(e, t) {
  const n = ue(e, t)
  e[t]
  const o = Reflect.deleteProperty(e, t)
  return o && n && ct(e, 'delete', t, void 0), o
}
function au(e, t) {
  const n = Reflect.has(e, t)
  return (!qo(t) || !Js.has(t)) && Ve(e, 'has', t), n
}
function uu(e) {
  return Ve(e, 'iterate', te(e) ? 'length' : Nt), Reflect.ownKeys(e)
}
const Gs = { get: tu, set: iu, deleteProperty: lu, has: au, ownKeys: uu },
  cu = {
    get: ru,
    set(e, t) {
      return !0
    },
    deleteProperty(e, t) {
      return !0
    },
  },
  fu = Me({}, Gs, { get: nu, set: su }),
  Do = (e) => e,
  Lr = (e) => Reflect.getPrototypeOf(e)
function Kn(e, t, n = !1, o = !1) {
  e = e.__v_raw
  const r = ce(e),
    i = ce(t)
  t !== i && !n && Ve(r, 'get', t), !n && Ve(r, 'get', i)
  const { has: s } = Lr(r),
    l = o ? Do : n ? zo : On
  if (s.call(r, t)) return l(e.get(t))
  if (s.call(r, i)) return l(e.get(i))
  e !== r && e.get(t)
}
function Wn(e, t = !1) {
  const n = this.__v_raw,
    o = ce(n),
    r = ce(e)
  return (
    e !== r && !t && Ve(o, 'has', e),
    !t && Ve(o, 'has', r),
    e === r ? n.has(e) : n.has(e) || n.has(r)
  )
}
function Qn(e, t = !1) {
  return (
    (e = e.__v_raw), !t && Ve(ce(e), 'iterate', Nt), Reflect.get(e, 'size', e)
  )
}
function vi(e) {
  e = ce(e)
  const t = ce(this)
  return Lr(t).has.call(t, e) || (t.add(e), ct(t, 'add', e, e)), this
}
function bi(e, t) {
  t = ce(t)
  const n = ce(this),
    { has: o, get: r } = Lr(n)
  let i = o.call(n, e)
  i || ((e = ce(e)), (i = o.call(n, e)))
  const s = r.call(n, e)
  return (
    n.set(e, t), i ? An(t, s) && ct(n, 'set', e, t) : ct(n, 'add', e, t), this
  )
}
function yi(e) {
  const t = ce(this),
    { has: n, get: o } = Lr(t)
  let r = n.call(t, e)
  r || ((e = ce(e)), (r = n.call(t, e))), o && o.call(t, e)
  const i = t.delete(e)
  return r && ct(t, 'delete', e, void 0), i
}
function _i() {
  const e = ce(this),
    t = e.size !== 0,
    n = e.clear()
  return t && ct(e, 'clear', void 0, void 0), n
}
function Zn(e, t) {
  return function (o, r) {
    const i = this,
      s = i.__v_raw,
      l = ce(s),
      a = t ? Do : e ? zo : On
    return (
      !e && Ve(l, 'iterate', Nt), s.forEach((u, c) => o.call(r, a(u), a(c), i))
    )
  }
}
function Yn(e, t, n) {
  return function (...o) {
    const r = this.__v_raw,
      i = ce(r),
      s = tn(i),
      l = e === 'entries' || (e === Symbol.iterator && s),
      a = e === 'keys' && s,
      u = r[e](...o),
      c = n ? Do : t ? zo : On
    return (
      !t && Ve(i, 'iterate', a ? uo : Nt),
      {
        next() {
          const { value: h, done: f } = u.next()
          return f
            ? { value: h, done: f }
            : { value: l ? [c(h[0]), c(h[1])] : c(h), done: f }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function ht(e) {
  return function (...t) {
    return e === 'delete' ? !1 : this
  }
}
function du() {
  const e = {
      get(i) {
        return Kn(this, i)
      },
      get size() {
        return Qn(this)
      },
      has: Wn,
      add: vi,
      set: bi,
      delete: yi,
      clear: _i,
      forEach: Zn(!1, !1),
    },
    t = {
      get(i) {
        return Kn(this, i, !1, !0)
      },
      get size() {
        return Qn(this)
      },
      has: Wn,
      add: vi,
      set: bi,
      delete: yi,
      clear: _i,
      forEach: Zn(!1, !0),
    },
    n = {
      get(i) {
        return Kn(this, i, !0)
      },
      get size() {
        return Qn(this, !0)
      },
      has(i) {
        return Wn.call(this, i, !0)
      },
      add: ht('add'),
      set: ht('set'),
      delete: ht('delete'),
      clear: ht('clear'),
      forEach: Zn(!0, !1),
    },
    o = {
      get(i) {
        return Kn(this, i, !0, !0)
      },
      get size() {
        return Qn(this, !0)
      },
      has(i) {
        return Wn.call(this, i, !0)
      },
      add: ht('add'),
      set: ht('set'),
      delete: ht('delete'),
      clear: ht('clear'),
      forEach: Zn(!0, !0),
    }
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((i) => {
      ;(e[i] = Yn(i, !1, !1)),
        (n[i] = Yn(i, !0, !1)),
        (t[i] = Yn(i, !1, !0)),
        (o[i] = Yn(i, !0, !0))
    }),
    [e, n, t, o]
  )
}
const [hu, mu, pu, gu] = du()
function Ho(e, t) {
  const n = t ? (e ? gu : pu) : e ? mu : hu
  return (o, r, i) =>
    r === '__v_isReactive'
      ? !e
      : r === '__v_isReadonly'
      ? e
      : r === '__v_raw'
      ? o
      : Reflect.get(ue(n, r) && r in o ? n : o, r, i)
}
const vu = { get: Ho(!1, !1) },
  bu = { get: Ho(!1, !0) },
  yu = { get: Ho(!0, !1) },
  el = new WeakMap(),
  tl = new WeakMap(),
  nl = new WeakMap(),
  _u = new WeakMap()
function wu(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function xu(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : wu(Ka(e))
}
function ft(e) {
  return Mn(e) ? e : Vo(e, !1, Gs, vu, el)
}
function Cu(e) {
  return Vo(e, !1, fu, bu, tl)
}
function rl(e) {
  return Vo(e, !0, cu, yu, nl)
}
function Vo(e, t, n, o, r) {
  if (!ke(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const i = r.get(e)
  if (i) return i
  const s = xu(e)
  if (s === 0) return e
  const l = new Proxy(e, s === 2 ? o : n)
  return r.set(e, l), l
}
function nn(e) {
  return Mn(e) ? nn(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Mn(e) {
  return !!(e && e.__v_isReadonly)
}
function ol(e) {
  return !!(e && e.__v_isShallow)
}
function il(e) {
  return nn(e) || Mn(e)
}
function ce(e) {
  const t = e && e.__v_raw
  return t ? ce(t) : e
}
function Vt(e) {
  return cr(e, '__v_skip', !0), e
}
const On = (e) => (ke(e) ? ft(e) : e),
  zo = (e) => (ke(e) ? rl(e) : e)
function sl(e) {
  xt && tt && ((e = ce(e)), Ys(e.dep || (e.dep = No())))
}
function ll(e, t) {
  ;(e = ce(e)), e.dep && co(e.dep)
}
function Te(e) {
  return !!(e && e.__v_isRef === !0)
}
function fe(e) {
  return al(e, !1)
}
function Eu(e) {
  return al(e, !0)
}
function al(e, t) {
  return Te(e) ? e : new Su(e, t)
}
class Su {
  constructor(t, n) {
    ;(this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : ce(t)),
      (this._value = n ? t : On(t))
  }
  get value() {
    return sl(this), this._value
  }
  set value(t) {
    ;(t = this.__v_isShallow ? t : ce(t)),
      An(t, this._rawValue) &&
        ((this._rawValue = t),
        (this._value = this.__v_isShallow ? t : On(t)),
        ll(this))
  }
}
function xn(e) {
  return Te(e) ? e.value : e
}
const ku = {
  get: (e, t, n) => xn(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t]
    return Te(r) && !Te(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, o)
  },
}
function ul(e) {
  return nn(e) ? e : new Proxy(e, ku)
}
function op(e) {
  const t = te(e) ? new Array(e.length) : {}
  for (const n in e) t[n] = Tu(e, n)
  return t
}
class Ru {
  constructor(t, n, o) {
    ;(this._object = t),
      (this._key = n),
      (this._defaultValue = o),
      (this.__v_isRef = !0)
  }
  get value() {
    const t = this._object[this._key]
    return t === void 0 ? this._defaultValue : t
  }
  set value(t) {
    this._object[this._key] = t
  }
}
function Tu(e, t, n) {
  const o = e[t]
  return Te(o) ? o : new Ru(e, t, n)
}
class Pu {
  constructor(t, n, o, r) {
    ;(this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._dirty = !0),
      (this.effect = new Io(t, () => {
        this._dirty || ((this._dirty = !0), ll(this))
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = o)
  }
  get value() {
    const t = ce(this)
    return (
      sl(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    )
  }
  set value(t) {
    this._setter(t)
  }
}
function Au(e, t, n = !1) {
  let o, r
  const i = oe(e)
  return (
    i ? ((o = e), (r = Ye)) : ((o = e.get), (r = e.set)),
    new Pu(o, r, i || !r, n)
  )
}
Promise.resolve()
function Ct(e, t, n, o) {
  let r
  try {
    r = o ? e(...o) : e()
  } catch (i) {
    Fr(i, t, n)
  }
  return r
}
function We(e, t, n, o) {
  if (oe(e)) {
    const i = Ct(e, t, n, o)
    return (
      i &&
        Hs(i) &&
        i.catch((s) => {
          Fr(s, t, n)
        }),
      i
    )
  }
  const r = []
  for (let i = 0; i < e.length; i++) r.push(We(e[i], t, n, o))
  return r
}
function Fr(e, t, n, o = !0) {
  const r = t ? t.vnode : null
  if (t) {
    let i = t.parent
    const s = t.proxy,
      l = n
    for (; i; ) {
      const u = i.ec
      if (u) {
        for (let c = 0; c < u.length; c++) if (u[c](e, s, l) === !1) return
      }
      i = i.parent
    }
    const a = t.appContext.config.errorHandler
    if (a) {
      Ct(a, null, 10, [e, s, l])
      return
    }
  }
  Mu(e, n, r, o)
}
function Mu(e, t, n, o = !0) {
  console.error(e)
}
let fr = !1,
  fo = !1
const De = []
let at = 0
const Cn = []
let yn = null,
  Zt = 0
const En = []
let vt = null,
  Yt = 0
const cl = Promise.resolve()
let Uo = null,
  ho = null
function qe(e) {
  const t = Uo || cl
  return e ? t.then(this ? e.bind(this) : e) : t
}
function Ou(e) {
  let t = at + 1,
    n = De.length
  for (; t < n; ) {
    const o = (t + n) >>> 1
    $n(De[o]) < e ? (t = o + 1) : (n = o)
  }
  return t
}
function fl(e) {
  ;(!De.length || !De.includes(e, fr && e.allowRecurse ? at + 1 : at)) &&
    e !== ho &&
    (e.id == null ? De.push(e) : De.splice(Ou(e.id), 0, e), dl())
}
function dl() {
  !fr && !fo && ((fo = !0), (Uo = cl.then(pl)))
}
function $u(e) {
  const t = De.indexOf(e)
  t > at && De.splice(t, 1)
}
function hl(e, t, n, o) {
  te(e)
    ? n.push(...e)
    : (!t || !t.includes(e, e.allowRecurse ? o + 1 : o)) && n.push(e),
    dl()
}
function Lu(e) {
  hl(e, yn, Cn, Zt)
}
function Fu(e) {
  hl(e, vt, En, Yt)
}
function Ko(e, t = null) {
  if (Cn.length) {
    for (
      ho = t, yn = [...new Set(Cn)], Cn.length = 0, Zt = 0;
      Zt < yn.length;
      Zt++
    )
      yn[Zt]()
    ;(yn = null), (Zt = 0), (ho = null), Ko(e, t)
  }
}
function ml(e) {
  if (En.length) {
    const t = [...new Set(En)]
    if (((En.length = 0), vt)) {
      vt.push(...t)
      return
    }
    for (vt = t, vt.sort((n, o) => $n(n) - $n(o)), Yt = 0; Yt < vt.length; Yt++)
      vt[Yt]()
    ;(vt = null), (Yt = 0)
  }
}
const $n = (e) => (e.id == null ? 1 / 0 : e.id)
function pl(e) {
  ;(fo = !1), (fr = !0), Ko(e), De.sort((n, o) => $n(n) - $n(o))
  const t = Ye
  try {
    for (at = 0; at < De.length; at++) {
      const n = De[at]
      n && n.active !== !1 && Ct(n, null, 14)
    }
  } finally {
    ;(at = 0),
      (De.length = 0),
      ml(),
      (fr = !1),
      (Uo = null),
      (De.length || Cn.length || En.length) && pl(e)
  }
}
function qu(e, t, ...n) {
  const o = e.vnode.props || ve
  let r = n
  const i = t.startsWith('update:'),
    s = i && t.slice(7)
  if (s && s in o) {
    const c = `${s === 'modelValue' ? 'model' : s}Modifiers`,
      { number: h, trim: f } = o[c] || ve
    f ? (r = n.map((m) => m.trim())) : h && (r = n.map(Us))
  }
  let l,
    a = o[(l = or(t))] || o[(l = or(rt(t)))]
  !a && i && (a = o[(l = or(Ht(t)))]), a && We(a, e, 6, r)
  const u = o[l + 'Once']
  if (u) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[l]) return
    ;(e.emitted[l] = !0), We(u, e, 6, r)
  }
}
function gl(e, t, n = !1) {
  const o = t.emitsCache,
    r = o.get(e)
  if (r !== void 0) return r
  const i = e.emits
  let s = {},
    l = !1
  if (!oe(e)) {
    const a = (u) => {
      const c = gl(u, t, !0)
      c && ((l = !0), Me(s, c))
    }
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a)
  }
  return !i && !l
    ? (o.set(e, null), null)
    : (te(i) ? i.forEach((a) => (s[a] = null)) : Me(s, i), o.set(e, s), s)
}
function Wo(e, t) {
  return !e || !Ar(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      ue(e, t[0].toLowerCase() + t.slice(1)) || ue(e, Ht(t)) || ue(e, t))
}
let He = null,
  qr = null
function dr(e) {
  const t = He
  return (He = e), (qr = (e && e.type.__scopeId) || null), t
}
function Bu(e) {
  qr = e
}
function Nu() {
  qr = null
}
function _n(e, t = He, n) {
  if (!t || e._n) return e
  const o = (...r) => {
    o._d && Oi(-1)
    const i = dr(t),
      s = e(...r)
    return dr(i), o._d && Oi(1), s
  }
  return (o._n = !0), (o._c = !0), (o._d = !0), o
}
function Qr(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: r,
    props: i,
    propsOptions: [s],
    slots: l,
    attrs: a,
    emit: u,
    render: c,
    renderCache: h,
    data: f,
    setupState: m,
    ctx: v,
    inheritAttrs: T,
  } = e
  let g, _
  const E = dr(e)
  try {
    if (n.shapeFlag & 4) {
      const H = r || o
      ;(g = et(c.call(H, H, h, i, m, f, v))), (_ = a)
    } else {
      const H = t
      ;(g = et(
        H.length > 1 ? H(i, { attrs: a, slots: l, emit: u }) : H(i, null)
      )),
        (_ = t.props ? a : Iu(a))
    }
  } catch (H) {
    ;(kn.length = 0), Fr(H, e, 1), (g = Se(Je))
  }
  let D = g
  if (_ && T !== !1) {
    const H = Object.keys(_),
      { shapeFlag: Q } = D
    H.length && Q & 7 && (s && H.some(Lo) && (_ = ju(_, s)), (D = rn(D, _)))
  }
  return (
    n.dirs && (D.dirs = D.dirs ? D.dirs.concat(n.dirs) : n.dirs),
    n.transition && (D.transition = n.transition),
    (g = D),
    dr(E),
    g
  )
}
const Iu = (e) => {
    let t
    for (const n in e)
      (n === 'class' || n === 'style' || Ar(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  ju = (e, t) => {
    const n = {}
    for (const o in e) (!Lo(o) || !(o.slice(9) in t)) && (n[o] = e[o])
    return n
  }
function Du(e, t, n) {
  const { props: o, children: r, component: i } = e,
    { props: s, children: l, patchFlag: a } = t,
    u = i.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && a >= 0) {
    if (a & 1024) return !0
    if (a & 16) return o ? wi(o, s, u) : !!s
    if (a & 8) {
      const c = t.dynamicProps
      for (let h = 0; h < c.length; h++) {
        const f = c[h]
        if (s[f] !== o[f] && !Wo(u, f)) return !0
      }
    }
  } else
    return (r || l) && (!l || !l.$stable)
      ? !0
      : o === s
      ? !1
      : o
      ? s
        ? wi(o, s, u)
        : !0
      : !!s
  return !1
}
function wi(e, t, n) {
  const o = Object.keys(t)
  if (o.length !== Object.keys(e).length) return !0
  for (let r = 0; r < o.length; r++) {
    const i = o[r]
    if (t[i] !== e[i] && !Wo(n, i)) return !0
  }
  return !1
}
function Hu({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent)
}
const Vu = (e) => e.__isSuspense
function zu(e, t) {
  t && t.pendingBranch
    ? te(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Fu(e)
}
function ir(e, t) {
  if (Ae) {
    let n = Ae.provides
    const o = Ae.parent && Ae.parent.provides
    o === n && (n = Ae.provides = Object.create(o)), (n[e] = t)
  }
}
function ut(e, t, n = !1) {
  const o = Ae || He
  if (o) {
    const r =
      o.parent == null
        ? o.vnode.appContext && o.vnode.appContext.provides
        : o.parent.provides
    if (r && e in r) return r[e]
    if (arguments.length > 1) return n && oe(t) ? t.call(o.proxy) : t
  }
}
const xi = {}
function he(e, t, n) {
  return vl(e, t, n)
}
function vl(
  e,
  t,
  { immediate: n, deep: o, flush: r, onTrack: i, onTrigger: s } = ve
) {
  const l = Ae
  let a,
    u = !1,
    c = !1
  if (
    (Te(e)
      ? ((a = () => e.value), (u = ol(e)))
      : nn(e)
      ? ((a = () => e), (o = !0))
      : te(e)
      ? ((c = !0),
        (u = e.some(nn)),
        (a = () =>
          e.map((_) => {
            if (Te(_)) return _.value
            if (nn(_)) return Ft(_)
            if (oe(_)) return Ct(_, l, 2)
          })))
      : oe(e)
      ? t
        ? (a = () => Ct(e, l, 2))
        : (a = () => {
            if (!(l && l.isUnmounted)) return h && h(), We(e, l, 3, [f])
          })
      : (a = Ye),
    t && o)
  ) {
    const _ = a
    a = () => Ft(_())
  }
  let h,
    f = (_) => {
      h = g.onStop = () => {
        Ct(_, l, 4)
      }
    }
  if (qn)
    return (f = Ye), t ? n && We(t, l, 3, [a(), c ? [] : void 0, f]) : a(), Ye
  let m = c ? [] : xi
  const v = () => {
    if (!!g.active)
      if (t) {
        const _ = g.run()
        ;(o || u || (c ? _.some((E, D) => An(E, m[D])) : An(_, m))) &&
          (h && h(), We(t, l, 3, [_, m === xi ? void 0 : m, f]), (m = _))
      } else g.run()
  }
  v.allowRecurse = !!t
  let T
  r === 'sync'
    ? (T = v)
    : r === 'post'
    ? (T = () => Fe(v, l && l.suspense))
    : (T = () => {
        !l || l.isMounted ? Lu(v) : v()
      })
  const g = new Io(a, T)
  return (
    t
      ? n
        ? v()
        : (m = g.run())
      : r === 'post'
      ? Fe(g.run.bind(g), l && l.suspense)
      : g.run(),
    () => {
      g.stop(), l && l.scope && Fo(l.scope.effects, g)
    }
  )
}
function Uu(e, t, n) {
  const o = this.proxy,
    r = Pe(e) ? (e.includes('.') ? bl(o, e) : () => o[e]) : e.bind(o, o)
  let i
  oe(t) ? (i = t) : ((i = t.handler), (n = t))
  const s = Ae
  on(this)
  const l = vl(r, i.bind(o), n)
  return s ? on(s) : jt(), l
}
function bl(e, t) {
  const n = t.split('.')
  return () => {
    let o = e
    for (let r = 0; r < n.length && o; r++) o = o[n[r]]
    return o
  }
}
function Ft(e, t) {
  if (!ke(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e
  if ((t.add(e), Te(e))) Ft(e.value, t)
  else if (te(e)) for (let n = 0; n < e.length; n++) Ft(e[n], t)
  else if (Ds(e) || tn(e))
    e.forEach((n) => {
      Ft(n, t)
    })
  else if (zs(e)) for (const n in e) Ft(e[n], t)
  return e
}
function yl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  }
  return (
    fn(() => {
      e.isMounted = !0
    }),
    Be(() => {
      e.isUnmounting = !0
    }),
    e
  )
}
const ze = [Function, Array],
  Ku = {
    name: 'BaseTransition',
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: ze,
      onEnter: ze,
      onAfterEnter: ze,
      onEnterCancelled: ze,
      onBeforeLeave: ze,
      onLeave: ze,
      onAfterLeave: ze,
      onLeaveCancelled: ze,
      onBeforeAppear: ze,
      onAppear: ze,
      onAfterAppear: ze,
      onAppearCancelled: ze,
    },
    setup(e, { slots: t }) {
      const n = Ne(),
        o = yl()
      let r
      return () => {
        const i = t.default && Qo(t.default(), !0)
        if (!i || !i.length) return
        const s = ce(e),
          { mode: l } = s,
          a = i[0]
        if (o.isLeaving) return Zr(a)
        const u = Ci(a)
        if (!u) return Zr(a)
        const c = Ln(u, s, o, n)
        Fn(u, c)
        const h = n.subTree,
          f = h && Ci(h)
        let m = !1
        const { getTransitionKey: v } = u.type
        if (v) {
          const T = v()
          r === void 0 ? (r = T) : T !== r && ((r = T), (m = !0))
        }
        if (f && f.type !== Je && (!Ot(u, f) || m)) {
          const T = Ln(f, s, o, n)
          if ((Fn(f, T), l === 'out-in'))
            return (
              (o.isLeaving = !0),
              (T.afterLeave = () => {
                ;(o.isLeaving = !1), n.update()
              }),
              Zr(a)
            )
          l === 'in-out' &&
            u.type !== Je &&
            (T.delayLeave = (g, _, E) => {
              const D = wl(o, f)
              ;(D[String(f.key)] = f),
                (g._leaveCb = () => {
                  _(), (g._leaveCb = void 0), delete c.delayedLeave
                }),
                (c.delayedLeave = E)
            })
        }
        return a
      }
    },
  },
  _l = Ku
function wl(e, t) {
  const { leavingVNodes: n } = e
  let o = n.get(t.type)
  return o || ((o = Object.create(null)), n.set(t.type, o)), o
}
function Ln(e, t, n, o) {
  const {
      appear: r,
      mode: i,
      persisted: s = !1,
      onBeforeEnter: l,
      onEnter: a,
      onAfterEnter: u,
      onEnterCancelled: c,
      onBeforeLeave: h,
      onLeave: f,
      onAfterLeave: m,
      onLeaveCancelled: v,
      onBeforeAppear: T,
      onAppear: g,
      onAfterAppear: _,
      onAppearCancelled: E,
    } = t,
    D = String(e.key),
    H = wl(n, e),
    Q = (x, A) => {
      x && We(x, o, 9, A)
    },
    y = {
      mode: i,
      persisted: s,
      beforeEnter(x) {
        let A = l
        if (!n.isMounted)
          if (r) A = T || l
          else return
        x._leaveCb && x._leaveCb(!0)
        const M = H[D]
        M && Ot(e, M) && M.el._leaveCb && M.el._leaveCb(), Q(A, [x])
      },
      enter(x) {
        let A = a,
          M = u,
          B = c
        if (!n.isMounted)
          if (r) (A = g || a), (M = _ || u), (B = E || c)
          else return
        let $ = !1
        const R = (x._enterCb = (z) => {
          $ ||
            (($ = !0),
            z ? Q(B, [x]) : Q(M, [x]),
            y.delayedLeave && y.delayedLeave(),
            (x._enterCb = void 0))
        })
        A ? (A(x, R), A.length <= 1 && R()) : R()
      },
      leave(x, A) {
        const M = String(e.key)
        if ((x._enterCb && x._enterCb(!0), n.isUnmounting)) return A()
        Q(h, [x])
        let B = !1
        const $ = (x._leaveCb = (R) => {
          B ||
            ((B = !0),
            A(),
            R ? Q(v, [x]) : Q(m, [x]),
            (x._leaveCb = void 0),
            H[M] === e && delete H[M])
        })
        ;(H[M] = e), f ? (f(x, $), f.length <= 1 && $()) : $()
      },
      clone(x) {
        return Ln(x, t, n, o)
      },
    }
  return y
}
function Zr(e) {
  if (Br(e)) return (e = rn(e)), (e.children = null), e
}
function Ci(e) {
  return Br(e) ? (e.children ? e.children[0] : void 0) : e
}
function Fn(e, t) {
  e.shapeFlag & 6 && e.component
    ? Fn(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t)
}
function Qo(e, t = !1) {
  let n = [],
    o = 0
  for (let r = 0; r < e.length; r++) {
    const i = e[r]
    i.type === je
      ? (i.patchFlag & 128 && o++, (n = n.concat(Qo(i.children, t))))
      : (t || i.type !== Je) && n.push(i)
  }
  if (o > 1) for (let r = 0; r < n.length; r++) n[r].patchFlag = -2
  return n
}
function Hn(e) {
  return oe(e) ? { setup: e, name: e.name } : e
}
const mo = (e) => !!e.type.__asyncLoader,
  Br = (e) => e.type.__isKeepAlive
function xl(e, t) {
  El(e, 'a', t)
}
function Cl(e, t) {
  El(e, 'da', t)
}
function El(e, t, n = Ae) {
  const o =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n
      for (; r; ) {
        if (r.isDeactivated) return
        r = r.parent
      }
      return e()
    })
  if ((Nr(t, o, n), n)) {
    let r = n.parent
    for (; r && r.parent; ) Br(r.parent.vnode) && Wu(o, t, n, r), (r = r.parent)
  }
}
function Wu(e, t, n, o) {
  const r = Nr(t, e, o, !0)
  Zo(() => {
    Fo(o[t], r)
  }, n)
}
function Nr(e, t, n = Ae, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...s) => {
          if (n.isUnmounted) return
          un(), on(n)
          const l = We(t, n, e, s)
          return jt(), cn(), l
        })
    return o ? r.unshift(i) : r.push(i), i
  }
}
const dt =
    (e) =>
    (t, n = Ae) =>
      (!qn || e === 'sp') && Nr(e, t, n),
  Qu = dt('bm'),
  fn = dt('m'),
  Sl = dt('bu'),
  kl = dt('u'),
  Be = dt('bum'),
  Zo = dt('um'),
  Zu = dt('sp'),
  Yu = dt('rtg'),
  Ju = dt('rtc')
function Xu(e, t = Ae) {
  Nr('ec', e, t)
}
let po = !0
function Gu(e) {
  const t = Tl(e),
    n = e.proxy,
    o = e.ctx
  ;(po = !1), t.beforeCreate && Ei(t.beforeCreate, e, 'bc')
  const {
    data: r,
    computed: i,
    methods: s,
    watch: l,
    provide: a,
    inject: u,
    created: c,
    beforeMount: h,
    mounted: f,
    beforeUpdate: m,
    updated: v,
    activated: T,
    deactivated: g,
    beforeDestroy: _,
    beforeUnmount: E,
    destroyed: D,
    unmounted: H,
    render: Q,
    renderTracked: y,
    renderTriggered: x,
    errorCaptured: A,
    serverPrefetch: M,
    expose: B,
    inheritAttrs: $,
    components: R,
    directives: z,
    filters: ee,
  } = t
  if ((u && ec(u, o, null, e.appContext.config.unwrapInjectedRef), s))
    for (const w in s) {
      const U = s[w]
      oe(U) && (o[w] = U.bind(n))
    }
  if (r) {
    const w = r.call(n, n)
    ke(w) && (e.data = ft(w))
  }
  if (((po = !0), i))
    for (const w in i) {
      const U = i[w],
        L = oe(U) ? U.bind(n, n) : oe(U.get) ? U.get.bind(n, n) : Ye,
        le = !oe(U) && oe(U.set) ? U.set.bind(n) : Ye,
        Ce = O({ get: L, set: le })
      Object.defineProperty(o, w, {
        enumerable: !0,
        configurable: !0,
        get: () => Ce.value,
        set: (xe) => (Ce.value = xe),
      })
    }
  if (l) for (const w in l) Rl(l[w], o, n, w)
  if (a) {
    const w = oe(a) ? a.call(n) : a
    Reflect.ownKeys(w).forEach((U) => {
      ir(U, w[U])
    })
  }
  c && Ei(c, e, 'c')
  function Y(w, U) {
    te(U) ? U.forEach((L) => w(L.bind(n))) : U && w(U.bind(n))
  }
  if (
    (Y(Qu, h),
    Y(fn, f),
    Y(Sl, m),
    Y(kl, v),
    Y(xl, T),
    Y(Cl, g),
    Y(Xu, A),
    Y(Ju, y),
    Y(Yu, x),
    Y(Be, E),
    Y(Zo, H),
    Y(Zu, M),
    te(B))
  )
    if (B.length) {
      const w = e.exposed || (e.exposed = {})
      B.forEach((U) => {
        Object.defineProperty(w, U, { get: () => n[U], set: (L) => (n[U] = L) })
      })
    } else e.exposed || (e.exposed = {})
  Q && e.render === Ye && (e.render = Q),
    $ != null && (e.inheritAttrs = $),
    R && (e.components = R),
    z && (e.directives = z)
}
function ec(e, t, n = Ye, o = !1) {
  te(e) && (e = go(e))
  for (const r in e) {
    const i = e[r]
    let s
    ke(i)
      ? 'default' in i
        ? (s = ut(i.from || r, i.default, !0))
        : (s = ut(i.from || r))
      : (s = ut(i)),
      Te(s) && o
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => s.value,
            set: (l) => (s.value = l),
          })
        : (t[r] = s)
  }
}
function Ei(e, t, n) {
  We(te(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Rl(e, t, n, o) {
  const r = o.includes('.') ? bl(n, o) : () => n[o]
  if (Pe(e)) {
    const i = t[e]
    oe(i) && he(r, i)
  } else if (oe(e)) he(r, e.bind(n))
  else if (ke(e))
    if (te(e)) e.forEach((i) => Rl(i, t, n, o))
    else {
      const i = oe(e.handler) ? e.handler.bind(n) : t[e.handler]
      oe(i) && he(r, i, e)
    }
}
function Tl(e) {
  const t = e.type,
    { mixins: n, extends: o } = t,
    {
      mixins: r,
      optionsCache: i,
      config: { optionMergeStrategies: s },
    } = e.appContext,
    l = i.get(t)
  let a
  return (
    l
      ? (a = l)
      : !r.length && !n && !o
      ? (a = t)
      : ((a = {}), r.length && r.forEach((u) => hr(a, u, s, !0)), hr(a, t, s)),
    i.set(t, a),
    a
  )
}
function hr(e, t, n, o = !1) {
  const { mixins: r, extends: i } = t
  i && hr(e, i, n, !0), r && r.forEach((s) => hr(e, s, n, !0))
  for (const s in t)
    if (!(o && s === 'expose')) {
      const l = tc[s] || (n && n[s])
      e[s] = l ? l(e[s], t[s]) : t[s]
    }
  return e
}
const tc = {
  data: Si,
  props: At,
  emits: At,
  methods: At,
  computed: At,
  beforeCreate: Le,
  created: Le,
  beforeMount: Le,
  mounted: Le,
  beforeUpdate: Le,
  updated: Le,
  beforeDestroy: Le,
  beforeUnmount: Le,
  destroyed: Le,
  unmounted: Le,
  activated: Le,
  deactivated: Le,
  errorCaptured: Le,
  serverPrefetch: Le,
  components: At,
  directives: At,
  watch: rc,
  provide: Si,
  inject: nc,
}
function Si(e, t) {
  return t
    ? e
      ? function () {
          return Me(
            oe(e) ? e.call(this, this) : e,
            oe(t) ? t.call(this, this) : t
          )
        }
      : t
    : e
}
function nc(e, t) {
  return At(go(e), go(t))
}
function go(e) {
  if (te(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function Le(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function At(e, t) {
  return e ? Me(Me(Object.create(null), e), t) : t
}
function rc(e, t) {
  if (!e) return t
  if (!t) return e
  const n = Me(Object.create(null), e)
  for (const o in t) n[o] = Le(e[o], t[o])
  return n
}
function oc(e, t, n, o = !1) {
  const r = {},
    i = {}
  cr(i, Ir, 1), (e.propsDefaults = Object.create(null)), Pl(e, t, r, i)
  for (const s in e.propsOptions[0]) s in r || (r[s] = void 0)
  n ? (e.props = o ? r : Cu(r)) : e.type.props ? (e.props = r) : (e.props = i),
    (e.attrs = i)
}
function ic(e, t, n, o) {
  const {
      props: r,
      attrs: i,
      vnode: { patchFlag: s },
    } = e,
    l = ce(r),
    [a] = e.propsOptions
  let u = !1
  if ((o || s > 0) && !(s & 16)) {
    if (s & 8) {
      const c = e.vnode.dynamicProps
      for (let h = 0; h < c.length; h++) {
        let f = c[h]
        const m = t[f]
        if (a)
          if (ue(i, f)) m !== i[f] && ((i[f] = m), (u = !0))
          else {
            const v = rt(f)
            r[v] = vo(a, l, v, m, e, !1)
          }
        else m !== i[f] && ((i[f] = m), (u = !0))
      }
    }
  } else {
    Pl(e, t, r, i) && (u = !0)
    let c
    for (const h in l)
      (!t || (!ue(t, h) && ((c = Ht(h)) === h || !ue(t, c)))) &&
        (a
          ? n &&
            (n[h] !== void 0 || n[c] !== void 0) &&
            (r[h] = vo(a, l, h, void 0, e, !0))
          : delete r[h])
    if (i !== l)
      for (const h in i) (!t || (!ue(t, h) && !0)) && (delete i[h], (u = !0))
  }
  u && ct(e, 'set', '$attrs')
}
function Pl(e, t, n, o) {
  const [r, i] = e.propsOptions
  let s = !1,
    l
  if (t)
    for (let a in t) {
      if (rr(a)) continue
      const u = t[a]
      let c
      r && ue(r, (c = rt(a)))
        ? !i || !i.includes(c)
          ? (n[c] = u)
          : ((l || (l = {}))[c] = u)
        : Wo(e.emitsOptions, a) ||
          ((!(a in o) || u !== o[a]) && ((o[a] = u), (s = !0)))
    }
  if (i) {
    const a = ce(n),
      u = l || ve
    for (let c = 0; c < i.length; c++) {
      const h = i[c]
      n[h] = vo(r, a, h, u[h], e, !ue(u, h))
    }
  }
  return s
}
function vo(e, t, n, o, r, i) {
  const s = e[n]
  if (s != null) {
    const l = ue(s, 'default')
    if (l && o === void 0) {
      const a = s.default
      if (s.type !== Function && oe(a)) {
        const { propsDefaults: u } = r
        n in u ? (o = u[n]) : (on(r), (o = u[n] = a.call(null, t)), jt())
      } else o = a
    }
    s[0] && (i && !l ? (o = !1) : s[1] && (o === '' || o === Ht(n)) && (o = !0))
  }
  return o
}
function Al(e, t, n = !1) {
  const o = t.propsCache,
    r = o.get(e)
  if (r) return r
  const i = e.props,
    s = {},
    l = []
  let a = !1
  if (!oe(e)) {
    const c = (h) => {
      a = !0
      const [f, m] = Al(h, t, !0)
      Me(s, f), m && l.push(...m)
    }
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c)
  }
  if (!i && !a) return o.set(e, en), en
  if (te(i))
    for (let c = 0; c < i.length; c++) {
      const h = rt(i[c])
      ki(h) && (s[h] = ve)
    }
  else if (i)
    for (const c in i) {
      const h = rt(c)
      if (ki(h)) {
        const f = i[c],
          m = (s[h] = te(f) || oe(f) ? { type: f } : f)
        if (m) {
          const v = Pi(Boolean, m.type),
            T = Pi(String, m.type)
          ;(m[0] = v > -1),
            (m[1] = T < 0 || v < T),
            (v > -1 || ue(m, 'default')) && l.push(h)
        }
      }
    }
  const u = [s, l]
  return o.set(e, u), u
}
function ki(e) {
  return e[0] !== '$'
}
function Ri(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/)
  return t ? t[1] : e === null ? 'null' : ''
}
function Ti(e, t) {
  return Ri(e) === Ri(t)
}
function Pi(e, t) {
  return te(t) ? t.findIndex((n) => Ti(n, e)) : oe(t) && Ti(t, e) ? 0 : -1
}
const Ml = (e) => e[0] === '_' || e === '$stable',
  Yo = (e) => (te(e) ? e.map(et) : [et(e)]),
  sc = (e, t, n) => {
    const o = _n((...r) => Yo(t(...r)), n)
    return (o._c = !1), o
  },
  Ol = (e, t, n) => {
    const o = e._ctx
    for (const r in e) {
      if (Ml(r)) continue
      const i = e[r]
      if (oe(i)) t[r] = sc(r, i, o)
      else if (i != null) {
        const s = Yo(i)
        t[r] = () => s
      }
    }
  },
  $l = (e, t) => {
    const n = Yo(t)
    e.slots.default = () => n
  },
  lc = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._
      n ? ((e.slots = ce(t)), cr(t, '_', n)) : Ol(t, (e.slots = {}))
    } else (e.slots = {}), t && $l(e, t)
    cr(e.slots, Ir, 1)
  },
  ac = (e, t, n) => {
    const { vnode: o, slots: r } = e
    let i = !0,
      s = ve
    if (o.shapeFlag & 32) {
      const l = t._
      l
        ? n && l === 1
          ? (i = !1)
          : (Me(r, t), !n && l === 1 && delete r._)
        : ((i = !t.$stable), Ol(t, r)),
        (s = t)
    } else t && ($l(e, t), (s = { default: 1 }))
    if (i) for (const l in r) !Ml(l) && !(l in s) && delete r[l]
  }
function Ll(e, t) {
  const n = He
  if (n === null) return e
  const o = n.proxy,
    r = e.dirs || (e.dirs = [])
  for (let i = 0; i < t.length; i++) {
    let [s, l, a, u = ve] = t[i]
    oe(s) && (s = { mounted: s, updated: s }),
      s.deep && Ft(l),
      r.push({
        dir: s,
        instance: o,
        value: l,
        oldValue: void 0,
        arg: a,
        modifiers: u,
      })
  }
  return e
}
function Rt(e, t, n, o) {
  const r = e.dirs,
    i = t && t.dirs
  for (let s = 0; s < r.length; s++) {
    const l = r[s]
    i && (l.oldValue = i[s].value)
    let a = l.dir[o]
    a && (un(), We(a, n, 8, [e.el, l, e, t]), cn())
  }
}
function Fl() {
  return {
    app: null,
    config: {
      isNativeTag: Va,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  }
}
let uc = 0
function cc(e, t) {
  return function (o, r = null) {
    r != null && !ke(r) && (r = null)
    const i = Fl(),
      s = new Set()
    let l = !1
    const a = (i.app = {
      _uid: uc++,
      _component: o,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: qc,
      get config() {
        return i.config
      },
      set config(u) {},
      use(u, ...c) {
        return (
          s.has(u) ||
            (u && oe(u.install)
              ? (s.add(u), u.install(a, ...c))
              : oe(u) && (s.add(u), u(a, ...c))),
          a
        )
      },
      mixin(u) {
        return i.mixins.includes(u) || i.mixins.push(u), a
      },
      component(u, c) {
        return c ? ((i.components[u] = c), a) : i.components[u]
      },
      directive(u, c) {
        return c ? ((i.directives[u] = c), a) : i.directives[u]
      },
      mount(u, c, h) {
        if (!l) {
          const f = Se(o, r)
          return (
            (f.appContext = i),
            c && t ? t(f, u) : e(f, u, h),
            (l = !0),
            (a._container = u),
            (u.__vue_app__ = a),
            ti(f.component) || f.component.proxy
          )
        }
      },
      unmount() {
        l && (e(null, a._container), delete a._container.__vue_app__)
      },
      provide(u, c) {
        return (i.provides[u] = c), a
      },
    })
    return a
  }
}
function bo(e, t, n, o, r = !1) {
  if (te(e)) {
    e.forEach((f, m) => bo(f, t && (te(t) ? t[m] : t), n, o, r))
    return
  }
  if (mo(o) && !r) return
  const i = o.shapeFlag & 4 ? ti(o.component) || o.component.proxy : o.el,
    s = r ? null : i,
    { i: l, r: a } = e,
    u = t && t.r,
    c = l.refs === ve ? (l.refs = {}) : l.refs,
    h = l.setupState
  if (
    (u != null &&
      u !== a &&
      (Pe(u)
        ? ((c[u] = null), ue(h, u) && (h[u] = null))
        : Te(u) && (u.value = null)),
    oe(a))
  )
    Ct(a, l, 12, [s, c])
  else {
    const f = Pe(a),
      m = Te(a)
    if (f || m) {
      const v = () => {
        if (e.f) {
          const T = f ? c[a] : a.value
          r
            ? te(T) && Fo(T, i)
            : te(T)
            ? T.includes(i) || T.push(i)
            : f
            ? (c[a] = [i])
            : ((a.value = [i]), e.k && (c[e.k] = a.value))
        } else
          f
            ? ((c[a] = s), ue(h, a) && (h[a] = s))
            : Te(a) && ((a.value = s), e.k && (c[e.k] = s))
      }
      s ? ((v.id = -1), Fe(v, n)) : v()
    }
  }
}
const Fe = zu
function fc(e) {
  return dc(e)
}
function dc(e, t) {
  const n = Za()
  n.__VUE__ = !0
  const {
      insert: o,
      remove: r,
      patchProp: i,
      createElement: s,
      createText: l,
      createComment: a,
      setText: u,
      setElementText: c,
      parentNode: h,
      nextSibling: f,
      setScopeId: m = Ye,
      cloneNode: v,
      insertStaticContent: T,
    } = e,
    g = (
      d,
      p,
      b,
      k = null,
      S = null,
      q = null,
      K = !1,
      F = null,
      j = !!p.dynamicChildren
    ) => {
      if (d === p) return
      d && !Ot(d, p) && ((k = J(d)), de(d, S, q, !0), (d = null)),
        p.patchFlag === -2 && ((j = !1), (p.dynamicChildren = null))
      const { type: P, ref: X, shapeFlag: Z } = p
      switch (P) {
        case Xo:
          _(d, p, b, k)
          break
        case Je:
          E(d, p, b, k)
          break
        case sr:
          d == null && D(p, b, k, K)
          break
        case je:
          z(d, p, b, k, S, q, K, F, j)
          break
        default:
          Z & 1
            ? y(d, p, b, k, S, q, K, F, j)
            : Z & 6
            ? ee(d, p, b, k, S, q, K, F, j)
            : (Z & 64 || Z & 128) && P.process(d, p, b, k, S, q, K, F, j, be)
      }
      X != null && S && bo(X, d && d.ref, q, p || d, !p)
    },
    _ = (d, p, b, k) => {
      if (d == null) o((p.el = l(p.children)), b, k)
      else {
        const S = (p.el = d.el)
        p.children !== d.children && u(S, p.children)
      }
    },
    E = (d, p, b, k) => {
      d == null ? o((p.el = a(p.children || '')), b, k) : (p.el = d.el)
    },
    D = (d, p, b, k) => {
      ;[d.el, d.anchor] = T(d.children, p, b, k, d.el, d.anchor)
    },
    H = ({ el: d, anchor: p }, b, k) => {
      let S
      for (; d && d !== p; ) (S = f(d)), o(d, b, k), (d = S)
      o(p, b, k)
    },
    Q = ({ el: d, anchor: p }) => {
      let b
      for (; d && d !== p; ) (b = f(d)), r(d), (d = b)
      r(p)
    },
    y = (d, p, b, k, S, q, K, F, j) => {
      ;(K = K || p.type === 'svg'),
        d == null ? x(p, b, k, S, q, K, F, j) : B(d, p, S, q, K, F, j)
    },
    x = (d, p, b, k, S, q, K, F) => {
      let j, P
      const {
        type: X,
        props: Z,
        shapeFlag: G,
        transition: ne,
        patchFlag: ae,
        dirs: we,
      } = d
      if (d.el && v !== void 0 && ae === -1) j = d.el = v(d.el)
      else {
        if (
          ((j = d.el = s(d.type, q, Z && Z.is, Z)),
          G & 8
            ? c(j, d.children)
            : G & 16 &&
              M(d.children, j, null, k, S, q && X !== 'foreignObject', K, F),
          we && Rt(d, null, k, 'created'),
          Z)
        ) {
          for (const _e in Z)
            _e !== 'value' &&
              !rr(_e) &&
              i(j, _e, null, Z[_e], q, d.children, k, S, I)
          'value' in Z && i(j, 'value', null, Z.value),
            (P = Z.onVnodeBeforeMount) && Ge(P, k, d)
        }
        A(j, d, d.scopeId, K, k)
      }
      we && Rt(d, null, k, 'beforeMount')
      const pe = (!S || (S && !S.pendingBranch)) && ne && !ne.persisted
      pe && ne.beforeEnter(j),
        o(j, p, b),
        ((P = Z && Z.onVnodeMounted) || pe || we) &&
          Fe(() => {
            P && Ge(P, k, d), pe && ne.enter(j), we && Rt(d, null, k, 'mounted')
          }, S)
    },
    A = (d, p, b, k, S) => {
      if ((b && m(d, b), k)) for (let q = 0; q < k.length; q++) m(d, k[q])
      if (S) {
        let q = S.subTree
        if (p === q) {
          const K = S.vnode
          A(d, K, K.scopeId, K.slotScopeIds, S.parent)
        }
      }
    },
    M = (d, p, b, k, S, q, K, F, j = 0) => {
      for (let P = j; P < d.length; P++) {
        const X = (d[P] = F ? bt(d[P]) : et(d[P]))
        g(null, X, p, b, k, S, q, K, F)
      }
    },
    B = (d, p, b, k, S, q, K) => {
      const F = (p.el = d.el)
      let { patchFlag: j, dynamicChildren: P, dirs: X } = p
      j |= d.patchFlag & 16
      const Z = d.props || ve,
        G = p.props || ve
      let ne
      b && Tt(b, !1),
        (ne = G.onVnodeBeforeUpdate) && Ge(ne, b, p, d),
        X && Rt(p, d, b, 'beforeUpdate'),
        b && Tt(b, !0)
      const ae = S && p.type !== 'foreignObject'
      if (
        (P
          ? $(d.dynamicChildren, P, F, b, k, ae, q)
          : K || L(d, p, F, null, b, k, ae, q, !1),
        j > 0)
      ) {
        if (j & 16) R(F, p, Z, G, b, k, S)
        else if (
          (j & 2 && Z.class !== G.class && i(F, 'class', null, G.class, S),
          j & 4 && i(F, 'style', Z.style, G.style, S),
          j & 8)
        ) {
          const we = p.dynamicProps
          for (let pe = 0; pe < we.length; pe++) {
            const _e = we[pe],
              Qe = Z[_e],
              zt = G[_e]
            ;(zt !== Qe || _e === 'value') &&
              i(F, _e, Qe, zt, S, d.children, b, k, I)
          }
        }
        j & 1 && d.children !== p.children && c(F, p.children)
      } else !K && P == null && R(F, p, Z, G, b, k, S)
      ;((ne = G.onVnodeUpdated) || X) &&
        Fe(() => {
          ne && Ge(ne, b, p, d), X && Rt(p, d, b, 'updated')
        }, k)
    },
    $ = (d, p, b, k, S, q, K) => {
      for (let F = 0; F < p.length; F++) {
        const j = d[F],
          P = p[F],
          X =
            j.el && (j.type === je || !Ot(j, P) || j.shapeFlag & 70)
              ? h(j.el)
              : b
        g(j, P, X, null, k, S, q, K, !0)
      }
    },
    R = (d, p, b, k, S, q, K) => {
      if (b !== k) {
        for (const F in k) {
          if (rr(F)) continue
          const j = k[F],
            P = b[F]
          j !== P && F !== 'value' && i(d, F, P, j, K, p.children, S, q, I)
        }
        if (b !== ve)
          for (const F in b)
            !rr(F) && !(F in k) && i(d, F, b[F], null, K, p.children, S, q, I)
        'value' in k && i(d, 'value', b.value, k.value)
      }
    },
    z = (d, p, b, k, S, q, K, F, j) => {
      const P = (p.el = d ? d.el : l('')),
        X = (p.anchor = d ? d.anchor : l(''))
      let { patchFlag: Z, dynamicChildren: G, slotScopeIds: ne } = p
      ne && (F = F ? F.concat(ne) : ne),
        d == null
          ? (o(P, b, k), o(X, b, k), M(p.children, b, X, S, q, K, F, j))
          : Z > 0 && Z & 64 && G && d.dynamicChildren
          ? ($(d.dynamicChildren, G, b, S, q, K, F),
            (p.key != null || (S && p === S.subTree)) && Jo(d, p, !0))
          : L(d, p, b, X, S, q, K, F, j)
    },
    ee = (d, p, b, k, S, q, K, F, j) => {
      ;(p.slotScopeIds = F),
        d == null
          ? p.shapeFlag & 512
            ? S.ctx.activate(p, b, k, K, j)
            : V(p, b, k, S, q, K, j)
          : Y(d, p, j)
    },
    V = (d, p, b, k, S, q, K) => {
      const F = (d.component = Pc(d, k, S))
      if ((Br(d) && (F.ctx.renderer = be), Ac(F), F.asyncDep)) {
        if ((S && S.registerDep(F, w), !d.el)) {
          const j = (F.subTree = Se(Je))
          E(null, j, p, b)
        }
        return
      }
      w(F, d, p, b, S, q, K)
    },
    Y = (d, p, b) => {
      const k = (p.component = d.component)
      if (Du(d, p, b))
        if (k.asyncDep && !k.asyncResolved) {
          U(k, p, b)
          return
        } else (k.next = p), $u(k.update), k.update()
      else (p.component = d.component), (p.el = d.el), (k.vnode = p)
    },
    w = (d, p, b, k, S, q, K) => {
      const F = () => {
          if (d.isMounted) {
            let { next: X, bu: Z, u: G, parent: ne, vnode: ae } = d,
              we = X,
              pe
            Tt(d, !1),
              X ? ((X.el = ae.el), U(d, X, K)) : (X = ae),
              Z && Wr(Z),
              (pe = X.props && X.props.onVnodeBeforeUpdate) &&
                Ge(pe, ne, X, ae),
              Tt(d, !0)
            const _e = Qr(d),
              Qe = d.subTree
            ;(d.subTree = _e),
              g(Qe, _e, h(Qe.el), J(Qe), d, S, q),
              (X.el = _e.el),
              we === null && Hu(d, _e.el),
              G && Fe(G, S),
              (pe = X.props && X.props.onVnodeUpdated) &&
                Fe(() => Ge(pe, ne, X, ae), S)
          } else {
            let X
            const { el: Z, props: G } = p,
              { bm: ne, m: ae, parent: we } = d,
              pe = mo(p)
            if (
              (Tt(d, !1),
              ne && Wr(ne),
              !pe && (X = G && G.onVnodeBeforeMount) && Ge(X, we, p),
              Tt(d, !0),
              Z && re)
            ) {
              const _e = () => {
                ;(d.subTree = Qr(d)), re(Z, d.subTree, d, S, null)
              }
              pe
                ? p.type.__asyncLoader().then(() => !d.isUnmounted && _e())
                : _e()
            } else {
              const _e = (d.subTree = Qr(d))
              g(null, _e, b, k, d, S, q), (p.el = _e.el)
            }
            if ((ae && Fe(ae, S), !pe && (X = G && G.onVnodeMounted))) {
              const _e = p
              Fe(() => Ge(X, we, _e), S)
            }
            p.shapeFlag & 256 && d.a && Fe(d.a, S),
              (d.isMounted = !0),
              (p = b = k = null)
          }
        },
        j = (d.effect = new Io(F, () => fl(d.update), d.scope)),
        P = (d.update = j.run.bind(j))
      ;(P.id = d.uid), Tt(d, !0), P()
    },
    U = (d, p, b) => {
      p.component = d
      const k = d.vnode.props
      ;(d.vnode = p),
        (d.next = null),
        ic(d, p.props, k, b),
        ac(d, p.children, b),
        un(),
        Ko(void 0, d.update),
        cn()
    },
    L = (d, p, b, k, S, q, K, F, j = !1) => {
      const P = d && d.children,
        X = d ? d.shapeFlag : 0,
        Z = p.children,
        { patchFlag: G, shapeFlag: ne } = p
      if (G > 0) {
        if (G & 128) {
          Ce(P, Z, b, k, S, q, K, F, j)
          return
        } else if (G & 256) {
          le(P, Z, b, k, S, q, K, F, j)
          return
        }
      }
      ne & 8
        ? (X & 16 && I(P, S, q), Z !== P && c(b, Z))
        : X & 16
        ? ne & 16
          ? Ce(P, Z, b, k, S, q, K, F, j)
          : I(P, S, q, !0)
        : (X & 8 && c(b, ''), ne & 16 && M(Z, b, k, S, q, K, F, j))
    },
    le = (d, p, b, k, S, q, K, F, j) => {
      ;(d = d || en), (p = p || en)
      const P = d.length,
        X = p.length,
        Z = Math.min(P, X)
      let G
      for (G = 0; G < Z; G++) {
        const ne = (p[G] = j ? bt(p[G]) : et(p[G]))
        g(d[G], ne, b, null, S, q, K, F, j)
      }
      P > X ? I(d, S, q, !0, !1, Z) : M(p, b, k, S, q, K, F, j, Z)
    },
    Ce = (d, p, b, k, S, q, K, F, j) => {
      let P = 0
      const X = p.length
      let Z = d.length - 1,
        G = X - 1
      for (; P <= Z && P <= G; ) {
        const ne = d[P],
          ae = (p[P] = j ? bt(p[P]) : et(p[P]))
        if (Ot(ne, ae)) g(ne, ae, b, null, S, q, K, F, j)
        else break
        P++
      }
      for (; P <= Z && P <= G; ) {
        const ne = d[Z],
          ae = (p[G] = j ? bt(p[G]) : et(p[G]))
        if (Ot(ne, ae)) g(ne, ae, b, null, S, q, K, F, j)
        else break
        Z--, G--
      }
      if (P > Z) {
        if (P <= G) {
          const ne = G + 1,
            ae = ne < X ? p[ne].el : k
          for (; P <= G; )
            g(null, (p[P] = j ? bt(p[P]) : et(p[P])), b, ae, S, q, K, F, j), P++
        }
      } else if (P > G) for (; P <= Z; ) de(d[P], S, q, !0), P++
      else {
        const ne = P,
          ae = P,
          we = new Map()
        for (P = ae; P <= G; P++) {
          const Ie = (p[P] = j ? bt(p[P]) : et(p[P]))
          Ie.key != null && we.set(Ie.key, P)
        }
        let pe,
          _e = 0
        const Qe = G - ae + 1
        let zt = !1,
          si = 0
        const hn = new Array(Qe)
        for (P = 0; P < Qe; P++) hn[P] = 0
        for (P = ne; P <= Z; P++) {
          const Ie = d[P]
          if (_e >= Qe) {
            de(Ie, S, q, !0)
            continue
          }
          let Xe
          if (Ie.key != null) Xe = we.get(Ie.key)
          else
            for (pe = ae; pe <= G; pe++)
              if (hn[pe - ae] === 0 && Ot(Ie, p[pe])) {
                Xe = pe
                break
              }
          Xe === void 0
            ? de(Ie, S, q, !0)
            : ((hn[Xe - ae] = P + 1),
              Xe >= si ? (si = Xe) : (zt = !0),
              g(Ie, p[Xe], b, null, S, q, K, F, j),
              _e++)
        }
        const li = zt ? hc(hn) : en
        for (pe = li.length - 1, P = Qe - 1; P >= 0; P--) {
          const Ie = ae + P,
            Xe = p[Ie],
            ai = Ie + 1 < X ? p[Ie + 1].el : k
          hn[P] === 0
            ? g(null, Xe, b, ai, S, q, K, F, j)
            : zt && (pe < 0 || P !== li[pe] ? xe(Xe, b, ai, 2) : pe--)
        }
      }
    },
    xe = (d, p, b, k, S = null) => {
      const { el: q, type: K, transition: F, children: j, shapeFlag: P } = d
      if (P & 6) {
        xe(d.component.subTree, p, b, k)
        return
      }
      if (P & 128) {
        d.suspense.move(p, b, k)
        return
      }
      if (P & 64) {
        K.move(d, p, b, be)
        return
      }
      if (K === je) {
        o(q, p, b)
        for (let Z = 0; Z < j.length; Z++) xe(j[Z], p, b, k)
        o(d.anchor, p, b)
        return
      }
      if (K === sr) {
        H(d, p, b)
        return
      }
      if (k !== 2 && P & 1 && F)
        if (k === 0) F.beforeEnter(q), o(q, p, b), Fe(() => F.enter(q), S)
        else {
          const { leave: Z, delayLeave: G, afterLeave: ne } = F,
            ae = () => o(q, p, b),
            we = () => {
              Z(q, () => {
                ae(), ne && ne()
              })
            }
          G ? G(q, ae, we) : we()
        }
      else o(q, p, b)
    },
    de = (d, p, b, k = !1, S = !1) => {
      const {
        type: q,
        props: K,
        ref: F,
        children: j,
        dynamicChildren: P,
        shapeFlag: X,
        patchFlag: Z,
        dirs: G,
      } = d
      if ((F != null && bo(F, null, b, d, !0), X & 256)) {
        p.ctx.deactivate(d)
        return
      }
      const ne = X & 1 && G,
        ae = !mo(d)
      let we
      if ((ae && (we = K && K.onVnodeBeforeUnmount) && Ge(we, p, d), X & 6))
        W(d.component, b, k)
      else {
        if (X & 128) {
          d.suspense.unmount(b, k)
          return
        }
        ne && Rt(d, null, p, 'beforeUnmount'),
          X & 64
            ? d.type.remove(d, p, b, S, be, k)
            : P && (q !== je || (Z > 0 && Z & 64))
            ? I(P, p, b, !1, !0)
            : ((q === je && Z & 384) || (!S && X & 16)) && I(j, p, b),
          k && ye(d)
      }
      ;((ae && (we = K && K.onVnodeUnmounted)) || ne) &&
        Fe(() => {
          we && Ge(we, p, d), ne && Rt(d, null, p, 'unmounted')
        }, b)
    },
    ye = (d) => {
      const { type: p, el: b, anchor: k, transition: S } = d
      if (p === je) {
        C(b, k)
        return
      }
      if (p === sr) {
        Q(d)
        return
      }
      const q = () => {
        r(b), S && !S.persisted && S.afterLeave && S.afterLeave()
      }
      if (d.shapeFlag & 1 && S && !S.persisted) {
        const { leave: K, delayLeave: F } = S,
          j = () => K(b, q)
        F ? F(d.el, q, j) : j()
      } else q()
    },
    C = (d, p) => {
      let b
      for (; d !== p; ) (b = f(d)), r(d), (d = b)
      r(p)
    },
    W = (d, p, b) => {
      const { bum: k, scope: S, update: q, subTree: K, um: F } = d
      k && Wr(k),
        S.stop(),
        q && ((q.active = !1), de(K, d, p, b)),
        F && Fe(F, p),
        Fe(() => {
          d.isUnmounted = !0
        }, p),
        p &&
          p.pendingBranch &&
          !p.isUnmounted &&
          d.asyncDep &&
          !d.asyncResolved &&
          d.suspenseId === p.pendingId &&
          (p.deps--, p.deps === 0 && p.resolve())
    },
    I = (d, p, b, k = !1, S = !1, q = 0) => {
      for (let K = q; K < d.length; K++) de(d[K], p, b, k, S)
    },
    J = (d) =>
      d.shapeFlag & 6
        ? J(d.component.subTree)
        : d.shapeFlag & 128
        ? d.suspense.next()
        : f(d.anchor || d.el),
    me = (d, p, b) => {
      d == null
        ? p._vnode && de(p._vnode, null, null, !0)
        : g(p._vnode || null, d, p, null, null, null, b),
        ml(),
        (p._vnode = d)
    },
    be = { p: g, um: de, m: xe, r: ye, mt: V, mc: M, pc: L, pbc: $, n: J, o: e }
  let se, re
  return (
    t && ([se, re] = t(be)), { render: me, hydrate: se, createApp: cc(me, se) }
  )
}
function Tt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n
}
function Jo(e, t, n = !1) {
  const o = e.children,
    r = t.children
  if (te(o) && te(r))
    for (let i = 0; i < o.length; i++) {
      const s = o[i]
      let l = r[i]
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = r[i] = bt(r[i])), (l.el = s.el)),
        n || Jo(s, l))
    }
}
function hc(e) {
  const t = e.slice(),
    n = [0]
  let o, r, i, s, l
  const a = e.length
  for (o = 0; o < a; o++) {
    const u = e[o]
    if (u !== 0) {
      if (((r = n[n.length - 1]), e[r] < u)) {
        ;(t[o] = r), n.push(o)
        continue
      }
      for (i = 0, s = n.length - 1; i < s; )
        (l = (i + s) >> 1), e[n[l]] < u ? (i = l + 1) : (s = l)
      u < e[n[i]] && (i > 0 && (t[o] = n[i - 1]), (n[i] = o))
    }
  }
  for (i = n.length, s = n[i - 1]; i-- > 0; ) (n[i] = s), (s = t[s])
  return n
}
const mc = (e) => e.__isTeleport,
  Sn = (e) => e && (e.disabled || e.disabled === ''),
  Ai = (e) => typeof SVGElement != 'undefined' && e instanceof SVGElement,
  yo = (e, t) => {
    const n = e && e.to
    return Pe(n) ? (t ? t(n) : null) : n
  },
  pc = {
    __isTeleport: !0,
    process(e, t, n, o, r, i, s, l, a, u) {
      const {
          mc: c,
          pc: h,
          pbc: f,
          o: { insert: m, querySelector: v, createText: T, createComment: g },
        } = u,
        _ = Sn(t.props)
      let { shapeFlag: E, children: D, dynamicChildren: H } = t
      if (e == null) {
        const Q = (t.el = T('')),
          y = (t.anchor = T(''))
        m(Q, n, o), m(y, n, o)
        const x = (t.target = yo(t.props, v)),
          A = (t.targetAnchor = T(''))
        x && (m(A, x), (s = s || Ai(x)))
        const M = (B, $) => {
          E & 16 && c(D, B, $, r, i, s, l, a)
        }
        _ ? M(n, y) : x && M(x, A)
      } else {
        t.el = e.el
        const Q = (t.anchor = e.anchor),
          y = (t.target = e.target),
          x = (t.targetAnchor = e.targetAnchor),
          A = Sn(e.props),
          M = A ? n : y,
          B = A ? Q : x
        if (
          ((s = s || Ai(y)),
          H
            ? (f(e.dynamicChildren, H, M, r, i, s, l), Jo(e, t, !0))
            : a || h(e, t, M, B, r, i, s, l, !1),
          _)
        )
          A || Jn(t, n, Q, u, 1)
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const $ = (t.target = yo(t.props, v))
          $ && Jn(t, $, null, u, 0)
        } else A && Jn(t, y, x, u, 1)
      }
    },
    remove(e, t, n, o, { um: r, o: { remove: i } }, s) {
      const {
        shapeFlag: l,
        children: a,
        anchor: u,
        targetAnchor: c,
        target: h,
        props: f,
      } = e
      if ((h && i(c), (s || !Sn(f)) && (i(u), l & 16)))
        for (let m = 0; m < a.length; m++) {
          const v = a[m]
          r(v, t, n, !0, !!v.dynamicChildren)
        }
    },
    move: Jn,
    hydrate: gc,
  }
function Jn(e, t, n, { o: { insert: o }, m: r }, i = 2) {
  i === 0 && o(e.targetAnchor, t, n)
  const { el: s, anchor: l, shapeFlag: a, children: u, props: c } = e,
    h = i === 2
  if ((h && o(s, t, n), (!h || Sn(c)) && a & 16))
    for (let f = 0; f < u.length; f++) r(u[f], t, n, 2)
  h && o(l, t, n)
}
function gc(
  e,
  t,
  n,
  o,
  r,
  i,
  { o: { nextSibling: s, parentNode: l, querySelector: a } },
  u
) {
  const c = (t.target = yo(t.props, a))
  if (c) {
    const h = c._lpa || c.firstChild
    t.shapeFlag & 16 &&
      (Sn(t.props)
        ? ((t.anchor = u(s(e), t, l(e), n, o, r, i)), (t.targetAnchor = h))
        : ((t.anchor = s(e)), (t.targetAnchor = u(h, t, c, n, o, r, i))),
      (c._lpa = t.targetAnchor && s(t.targetAnchor)))
  }
  return t.anchor && s(t.anchor)
}
const vc = pc,
  ql = 'components',
  bc = 'directives'
function yc(e, t) {
  return Bl(ql, e, !0, t) || e
}
const _c = Symbol()
function ip(e) {
  return Bl(bc, e)
}
function Bl(e, t, n = !0, o = !1) {
  const r = He || Ae
  if (r) {
    const i = r.type
    if (e === ql) {
      const l = Lc(i)
      if (l && (l === t || l === rt(t) || l === $r(rt(t)))) return i
    }
    const s = Mi(r[e] || i[e], t) || Mi(r.appContext[e], t)
    return !s && o ? i : s
  }
}
function Mi(e, t) {
  return e && (e[t] || e[rt(t)] || e[$r(rt(t))])
}
const je = Symbol(void 0),
  Xo = Symbol(void 0),
  Je = Symbol(void 0),
  sr = Symbol(void 0),
  kn = []
let It = null
function qt(e = !1) {
  kn.push((It = e ? null : []))
}
function wc() {
  kn.pop(), (It = kn[kn.length - 1] || null)
}
let mr = 1
function Oi(e) {
  mr += e
}
function Nl(e) {
  return (
    (e.dynamicChildren = mr > 0 ? It || en : null),
    wc(),
    mr > 0 && It && It.push(e),
    e
  )
}
function Xn(e, t, n, o, r, i) {
  return Nl(lt(e, t, n, o, r, i, !0))
}
function Go(e, t, n, o, r) {
  return Nl(Se(e, t, n, o, r, !0))
}
function pr(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function Ot(e, t) {
  return e.type === t.type && e.key === t.key
}
const Ir = '__vInternal',
  Il = ({ key: e }) => (e != null ? e : null),
  lr = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null
      ? Pe(e) || Te(e) || oe(e)
        ? { i: He, r: e, k: t, f: !!n }
        : e
      : null
function lt(
  e,
  t = null,
  n = null,
  o = 0,
  r = null,
  i = e === je ? 0 : 1,
  s = !1,
  l = !1
) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Il(t),
    ref: t && lr(t),
    scopeId: qr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
  }
  return (
    l
      ? (ei(a, n), i & 128 && e.normalize(a))
      : n && (a.shapeFlag |= Pe(n) ? 8 : 16),
    mr > 0 &&
      !s &&
      It &&
      (a.patchFlag > 0 || i & 6) &&
      a.patchFlag !== 32 &&
      It.push(a),
    a
  )
}
const Se = xc
function xc(e, t = null, n = null, o = 0, r = null, i = !1) {
  if (((!e || e === _c) && (e = Je), pr(e))) {
    const l = rn(e, t, !0)
    return n && ei(l, n), l
  }
  if ((Fc(e) && (e = e.__vccOpts), t)) {
    t = Cc(t)
    let { class: l, style: a } = t
    l && !Pe(l) && (t.class = Pr(l)),
      ke(a) && (il(a) && !te(a) && (a = Me({}, a)), (t.style = Tr(a)))
  }
  const s = Pe(e) ? 1 : Vu(e) ? 128 : mc(e) ? 64 : ke(e) ? 4 : oe(e) ? 2 : 0
  return lt(e, t, n, o, r, s, i, !0)
}
function Cc(e) {
  return e ? (il(e) || Ir in e ? Me({}, e) : e) : null
}
function rn(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: i, children: s } = e,
    l = t ? Sc(o || {}, t) : o
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Il(l),
    ref:
      t && t.ref
        ? n && r
          ? te(r)
            ? r.concat(lr(t))
            : [r, lr(t)]
          : lr(t)
        : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: s,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== je ? (i === -1 ? 16 : i | 16) : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && rn(e.ssContent),
    ssFallback: e.ssFallback && rn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
  }
}
function Vn(e = ' ', t = 0) {
  return Se(Xo, null, e, t)
}
function Ec(e, t) {
  const n = Se(sr, null, e)
  return (n.staticCount = t), n
}
function Yr(e = '', t = !1) {
  return t ? (qt(), Go(Je, null, e)) : Se(Je, null, e)
}
function et(e) {
  return e == null || typeof e == 'boolean'
    ? Se(Je)
    : te(e)
    ? Se(je, null, e.slice())
    : typeof e == 'object'
    ? bt(e)
    : Se(Xo, null, String(e))
}
function bt(e) {
  return e.el === null || e.memo ? e : rn(e)
}
function ei(e, t) {
  let n = 0
  const { shapeFlag: o } = e
  if (t == null) t = null
  else if (te(t)) n = 16
  else if (typeof t == 'object')
    if (o & 65) {
      const r = t.default
      r && (r._c && (r._d = !1), ei(e, r()), r._c && (r._d = !0))
      return
    } else {
      n = 32
      const r = t._
      !r && !(Ir in t)
        ? (t._ctx = He)
        : r === 3 &&
          He &&
          (He.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    oe(t)
      ? ((t = { default: t, _ctx: He }), (n = 32))
      : ((t = String(t)), o & 64 ? ((n = 16), (t = [Vn(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function Sc(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const o = e[n]
    for (const r in o)
      if (r === 'class')
        t.class !== o.class && (t.class = Pr([t.class, o.class]))
      else if (r === 'style') t.style = Tr([t.style, o.style])
      else if (Ar(r)) {
        const i = t[r],
          s = o[r]
        s &&
          i !== s &&
          !(te(i) && i.includes(s)) &&
          (t[r] = i ? [].concat(i, s) : s)
      } else r !== '' && (t[r] = o[r])
  }
  return t
}
function Ge(e, t, n, o = null) {
  We(e, t, 7, [n, o])
}
function sp(e, t, n, o) {
  let r
  const i = n && n[o]
  if (te(e) || Pe(e)) {
    r = new Array(e.length)
    for (let s = 0, l = e.length; s < l; s++)
      r[s] = t(e[s], s, void 0, i && i[s])
  } else if (typeof e == 'number') {
    r = new Array(e)
    for (let s = 0; s < e; s++) r[s] = t(s + 1, s, void 0, i && i[s])
  } else if (ke(e))
    if (e[Symbol.iterator])
      r = Array.from(e, (s, l) => t(s, l, void 0, i && i[l]))
    else {
      const s = Object.keys(e)
      r = new Array(s.length)
      for (let l = 0, a = s.length; l < a; l++) {
        const u = s[l]
        r[l] = t(e[u], u, l, i && i[l])
      }
    }
  else r = []
  return n && (n[o] = r), r
}
function lp(e, t, n = {}, o, r) {
  if (He.isCE) return Se('slot', t === 'default' ? null : { name: t }, o && o())
  let i = e[t]
  i && i._c && (i._d = !1), qt()
  const s = i && jl(i(n)),
    l = Go(
      je,
      { key: n.key || `_${t}` },
      s || (o ? o() : []),
      s && e._ === 1 ? 64 : -2
    )
  return (
    !r && l.scopeId && (l.slotScopeIds = [l.scopeId + '-s']),
    i && i._c && (i._d = !0),
    l
  )
}
function jl(e) {
  return e.some((t) =>
    pr(t) ? !(t.type === Je || (t.type === je && !jl(t.children))) : !0
  )
    ? e
    : null
}
function ap(e) {
  const t = {}
  for (const n in e) t[or(n)] = e[n]
  return t
}
const _o = (e) => (e ? (Dl(e) ? ti(e) || e.proxy : _o(e.parent)) : null),
  gr = Me(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => _o(e.parent),
    $root: (e) => _o(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Tl(e),
    $forceUpdate: (e) => () => fl(e.update),
    $nextTick: (e) => qe.bind(e.proxy),
    $watch: (e) => Uu.bind(e),
  }),
  kc = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: o,
        data: r,
        props: i,
        accessCache: s,
        type: l,
        appContext: a,
      } = e
      let u
      if (t[0] !== '$') {
        const m = s[t]
        if (m !== void 0)
          switch (m) {
            case 1:
              return o[t]
            case 2:
              return r[t]
            case 4:
              return n[t]
            case 3:
              return i[t]
          }
        else {
          if (o !== ve && ue(o, t)) return (s[t] = 1), o[t]
          if (r !== ve && ue(r, t)) return (s[t] = 2), r[t]
          if ((u = e.propsOptions[0]) && ue(u, t)) return (s[t] = 3), i[t]
          if (n !== ve && ue(n, t)) return (s[t] = 4), n[t]
          po && (s[t] = 0)
        }
      }
      const c = gr[t]
      let h, f
      if (c) return t === '$attrs' && Ve(e, 'get', t), c(e)
      if ((h = l.__cssModules) && (h = h[t])) return h
      if (n !== ve && ue(n, t)) return (s[t] = 4), n[t]
      if (((f = a.config.globalProperties), ue(f, t))) return f[t]
    },
    set({ _: e }, t, n) {
      const { data: o, setupState: r, ctx: i } = e
      return r !== ve && ue(r, t)
        ? ((r[t] = n), !0)
        : o !== ve && ue(o, t)
        ? ((o[t] = n), !0)
        : ue(e.props, t) || (t[0] === '$' && t.slice(1) in e)
        ? !1
        : ((i[t] = n), !0)
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: o,
          appContext: r,
          propsOptions: i,
        },
      },
      s
    ) {
      let l
      return (
        !!n[s] ||
        (e !== ve && ue(e, s)) ||
        (t !== ve && ue(t, s)) ||
        ((l = i[0]) && ue(l, s)) ||
        ue(o, s) ||
        ue(gr, s) ||
        ue(r.config.globalProperties, s)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? this.set(e, t, n.get(), null)
          : n.value != null && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    },
  },
  Rc = Fl()
let Tc = 0
function Pc(e, t, n) {
  const o = e.type,
    r = (t ? t.appContext : e.appContext) || Rc,
    i = {
      uid: Tc++,
      vnode: e,
      type: o,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Ks(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Al(o, r),
      emitsOptions: gl(o, r),
      emit: null,
      emitted: null,
      propsDefaults: ve,
      inheritAttrs: o.inheritAttrs,
      ctx: ve,
      data: ve,
      props: ve,
      attrs: ve,
      slots: ve,
      refs: ve,
      setupState: ve,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    }
  return (
    (i.ctx = { _: i }),
    (i.root = t ? t.root : i),
    (i.emit = qu.bind(null, i)),
    e.ce && e.ce(i),
    i
  )
}
let Ae = null
const Ne = () => Ae || He,
  on = (e) => {
    ;(Ae = e), e.scope.on()
  },
  jt = () => {
    Ae && Ae.scope.off(), (Ae = null)
  }
function Dl(e) {
  return e.vnode.shapeFlag & 4
}
let qn = !1
function Ac(e, t = !1) {
  qn = t
  const { props: n, children: o } = e.vnode,
    r = Dl(e)
  oc(e, n, r, t), lc(e, o)
  const i = r ? Mc(e, t) : void 0
  return (qn = !1), i
}
function Mc(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = Vt(new Proxy(e.ctx, kc)))
  const { setup: o } = n
  if (o) {
    const r = (e.setupContext = o.length > 1 ? $c(e) : null)
    on(e), un()
    const i = Ct(o, e, 0, [e.props, r])
    if ((cn(), jt(), Hs(i))) {
      if ((i.then(jt, jt), t))
        return i
          .then((s) => {
            $i(e, s, t)
          })
          .catch((s) => {
            Fr(s, e, 0)
          })
      e.asyncDep = i
    } else $i(e, i, t)
  } else Hl(e, t)
}
function $i(e, t, n) {
  oe(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : ke(t) && (e.setupState = ul(t)),
    Hl(e, n)
}
let Li
function Hl(e, t, n) {
  const o = e.type
  if (!e.render) {
    if (!t && Li && !o.render) {
      const r = o.template
      if (r) {
        const { isCustomElement: i, compilerOptions: s } = e.appContext.config,
          { delimiters: l, compilerOptions: a } = o,
          u = Me(Me({ isCustomElement: i, delimiters: l }, s), a)
        o.render = Li(r, u)
      }
    }
    e.render = o.render || Ye
  }
  on(e), un(), Gu(e), cn(), jt()
}
function Oc(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return Ve(e, 'get', '$attrs'), t[n]
    },
  })
}
function $c(e) {
  const t = (o) => {
    e.exposed = o || {}
  }
  let n
  return {
    get attrs() {
      return n || (n = Oc(e))
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  }
}
function ti(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(ul(Vt(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n]
          if (n in gr) return gr[n](e)
        },
      }))
    )
}
function Lc(e) {
  return (oe(e) && e.displayName) || e.name
}
function Fc(e) {
  return oe(e) && '__vccOpts' in e
}
const O = (e, t) => Au(e, t, qn)
function N(e, t, n) {
  const o = arguments.length
  return o === 2
    ? ke(t) && !te(t)
      ? pr(t)
        ? Se(e, null, [t])
        : Se(e, t)
      : Se(e, null, t)
    : (o > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : o === 3 && pr(n) && (n = [n]),
      Se(e, t, n))
}
const qc = '3.2.31',
  Bc = 'http://www.w3.org/2000/svg',
  $t = typeof document != 'undefined' ? document : null,
  Fi = $t && $t.createElement('template'),
  Nc = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, o) => {
      const r = t
        ? $t.createElementNS(Bc, e)
        : $t.createElement(e, n ? { is: n } : void 0)
      return (
        e === 'select' &&
          o &&
          o.multiple != null &&
          r.setAttribute('multiple', o.multiple),
        r
      )
    },
    createText: (e) => $t.createTextNode(e),
    createComment: (e) => $t.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => $t.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    cloneNode(e) {
      const t = e.cloneNode(!0)
      return '_value' in e && (t._value = e._value), t
    },
    insertStaticContent(e, t, n, o, r, i) {
      const s = n ? n.previousSibling : t.lastChild
      if (r && (r === i || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === i || !(r = r.nextSibling));

        );
      else {
        Fi.innerHTML = o ? `<svg>${e}</svg>` : e
        const l = Fi.content
        if (o) {
          const a = l.firstChild
          for (; a.firstChild; ) l.appendChild(a.firstChild)
          l.removeChild(a)
        }
        t.insertBefore(l, n)
      }
      return [
        s ? s.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ]
    },
  }
function Ic(e, t, n) {
  const o = e._vtc
  o && (t = (t ? [t, ...o] : [...o]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : n
      ? e.setAttribute('class', t)
      : (e.className = t)
}
function jc(e, t, n) {
  const o = e.style,
    r = Pe(n)
  if (n && !r) {
    for (const i in n) wo(o, i, n[i])
    if (t && !Pe(t)) for (const i in t) n[i] == null && wo(o, i, '')
  } else {
    const i = o.display
    r ? t !== n && (o.cssText = n) : t && e.removeAttribute('style'),
      '_vod' in e && (o.display = i)
  }
}
const qi = /\s*!important$/
function wo(e, t, n) {
  if (te(n)) n.forEach((o) => wo(e, t, o))
  else if (t.startsWith('--')) e.setProperty(t, n)
  else {
    const o = Dc(e, t)
    qi.test(n)
      ? e.setProperty(Ht(o), n.replace(qi, ''), 'important')
      : (e[o] = n)
  }
}
const Bi = ['Webkit', 'Moz', 'ms'],
  Jr = {}
function Dc(e, t) {
  const n = Jr[t]
  if (n) return n
  let o = rt(t)
  if (o !== 'filter' && o in e) return (Jr[t] = o)
  o = $r(o)
  for (let r = 0; r < Bi.length; r++) {
    const i = Bi[r] + o
    if (i in e) return (Jr[t] = i)
  }
  return t
}
const Ni = 'http://www.w3.org/1999/xlink'
function Hc(e, t, n, o, r) {
  if (o && t.startsWith('xlink:'))
    n == null
      ? e.removeAttributeNS(Ni, t.slice(6, t.length))
      : e.setAttributeNS(Ni, t, n)
  else {
    const i = Ia(t)
    n == null || (i && !Is(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? '' : n)
  }
}
function Vc(e, t, n, o, r, i, s) {
  if (t === 'innerHTML' || t === 'textContent') {
    o && s(o, r, i), (e[t] = n == null ? '' : n)
    return
  }
  if (t === 'value' && e.tagName !== 'PROGRESS' && !e.tagName.includes('-')) {
    e._value = n
    const l = n == null ? '' : n
    ;(e.value !== l || e.tagName === 'OPTION') && (e.value = l),
      n == null && e.removeAttribute(t)
    return
  }
  if (n === '' || n == null) {
    const l = typeof e[t]
    if (l === 'boolean') {
      e[t] = Is(n)
      return
    } else if (n == null && l === 'string') {
      ;(e[t] = ''), e.removeAttribute(t)
      return
    } else if (l === 'number') {
      try {
        e[t] = 0
      } catch {}
      e.removeAttribute(t)
      return
    }
  }
  try {
    e[t] = n
  } catch {}
}
let vr = Date.now,
  Vl = !1
if (typeof window != 'undefined') {
  vr() > document.createEvent('Event').timeStamp &&
    (vr = () => performance.now())
  const e = navigator.userAgent.match(/firefox\/(\d+)/i)
  Vl = !!(e && Number(e[1]) <= 53)
}
let xo = 0
const zc = Promise.resolve(),
  Uc = () => {
    xo = 0
  },
  Kc = () => xo || (zc.then(Uc), (xo = vr()))
function Wc(e, t, n, o) {
  e.addEventListener(t, n, o)
}
function Qc(e, t, n, o) {
  e.removeEventListener(t, n, o)
}
function Zc(e, t, n, o, r = null) {
  const i = e._vei || (e._vei = {}),
    s = i[t]
  if (o && s) s.value = o
  else {
    const [l, a] = Yc(t)
    if (o) {
      const u = (i[t] = Jc(o, r))
      Wc(e, l, u, a)
    } else s && (Qc(e, l, s, a), (i[t] = void 0))
  }
}
const Ii = /(?:Once|Passive|Capture)$/
function Yc(e) {
  let t
  if (Ii.test(e)) {
    t = {}
    let n
    for (; (n = e.match(Ii)); )
      (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0)
  }
  return [Ht(e.slice(2)), t]
}
function Jc(e, t) {
  const n = (o) => {
    const r = o.timeStamp || vr()
    ;(Vl || r >= n.attached - 1) && We(Xc(o, n.value), t, 5, [o])
  }
  return (n.value = e), (n.attached = Kc()), n
}
function Xc(e, t) {
  if (te(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((o) => (r) => !r._stopped && o && o(r))
    )
  } else return t
}
const ji = /^on[a-z]/,
  Gc = (e, t, n, o, r = !1, i, s, l, a) => {
    t === 'class'
      ? Ic(e, o, r)
      : t === 'style'
      ? jc(e, n, o)
      : Ar(t)
      ? Lo(t) || Zc(e, t, n, o, s)
      : (
          t[0] === '.'
            ? ((t = t.slice(1)), !0)
            : t[0] === '^'
            ? ((t = t.slice(1)), !1)
            : ef(e, t, o, r)
        )
      ? Vc(e, t, o, i, s, l, a)
      : (t === 'true-value'
          ? (e._trueValue = o)
          : t === 'false-value' && (e._falseValue = o),
        Hc(e, t, o, r))
  }
function ef(e, t, n, o) {
  return o
    ? !!(
        t === 'innerHTML' ||
        t === 'textContent' ||
        (t in e && ji.test(t) && oe(n))
      )
    : t === 'spellcheck' ||
      t === 'draggable' ||
      t === 'form' ||
      (t === 'list' && e.tagName === 'INPUT') ||
      (t === 'type' && e.tagName === 'TEXTAREA') ||
      (ji.test(t) && Pe(n))
    ? !1
    : t in e
}
const mt = 'transition',
  mn = 'animation',
  zn = (e, { slots: t }) => N(_l, Ul(e), t)
zn.displayName = 'Transition'
const zl = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  tf = (zn.props = Me({}, _l.props, zl)),
  Pt = (e, t = []) => {
    te(e) ? e.forEach((n) => n(...t)) : e && e(...t)
  },
  Di = (e) => (e ? (te(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1)
function Ul(e) {
  const t = {}
  for (const R in e) R in zl || (t[R] = e[R])
  if (e.css === !1) return t
  const {
      name: n = 'v',
      type: o,
      duration: r,
      enterFromClass: i = `${n}-enter-from`,
      enterActiveClass: s = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: a = i,
      appearActiveClass: u = s,
      appearToClass: c = l,
      leaveFromClass: h = `${n}-leave-from`,
      leaveActiveClass: f = `${n}-leave-active`,
      leaveToClass: m = `${n}-leave-to`,
    } = e,
    v = nf(r),
    T = v && v[0],
    g = v && v[1],
    {
      onBeforeEnter: _,
      onEnter: E,
      onEnterCancelled: D,
      onLeave: H,
      onLeaveCancelled: Q,
      onBeforeAppear: y = _,
      onAppear: x = E,
      onAppearCancelled: A = D,
    } = t,
    M = (R, z, ee) => {
      Mt(R, z ? c : l), Mt(R, z ? u : s), ee && ee()
    },
    B = (R, z) => {
      Mt(R, m), Mt(R, f), z && z()
    },
    $ = (R) => (z, ee) => {
      const V = R ? x : E,
        Y = () => M(z, R, ee)
      Pt(V, [z, Y]),
        Hi(() => {
          Mt(z, R ? a : i), st(z, R ? c : l), Di(V) || Vi(z, o, T, Y)
        })
    }
  return Me(t, {
    onBeforeEnter(R) {
      Pt(_, [R]), st(R, i), st(R, s)
    },
    onBeforeAppear(R) {
      Pt(y, [R]), st(R, a), st(R, u)
    },
    onEnter: $(!1),
    onAppear: $(!0),
    onLeave(R, z) {
      const ee = () => B(R, z)
      st(R, h),
        Wl(),
        st(R, f),
        Hi(() => {
          Mt(R, h), st(R, m), Di(H) || Vi(R, o, g, ee)
        }),
        Pt(H, [R, ee])
    },
    onEnterCancelled(R) {
      M(R, !1), Pt(D, [R])
    },
    onAppearCancelled(R) {
      M(R, !0), Pt(A, [R])
    },
    onLeaveCancelled(R) {
      B(R), Pt(Q, [R])
    },
  })
}
function nf(e) {
  if (e == null) return null
  if (ke(e)) return [Xr(e.enter), Xr(e.leave)]
  {
    const t = Xr(e)
    return [t, t]
  }
}
function Xr(e) {
  return Us(e)
}
function st(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e._vtc || (e._vtc = new Set())).add(t)
}
function Mt(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.remove(o))
  const { _vtc: n } = e
  n && (n.delete(t), n.size || (e._vtc = void 0))
}
function Hi(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let rf = 0
function Vi(e, t, n, o) {
  const r = (e._endId = ++rf),
    i = () => {
      r === e._endId && o()
    }
  if (n) return setTimeout(i, n)
  const { type: s, timeout: l, propCount: a } = Kl(e, t)
  if (!s) return o()
  const u = s + 'end'
  let c = 0
  const h = () => {
      e.removeEventListener(u, f), i()
    },
    f = (m) => {
      m.target === e && ++c >= a && h()
    }
  setTimeout(() => {
    c < a && h()
  }, l + 1),
    e.addEventListener(u, f)
}
function Kl(e, t) {
  const n = window.getComputedStyle(e),
    o = (v) => (n[v] || '').split(', '),
    r = o(mt + 'Delay'),
    i = o(mt + 'Duration'),
    s = zi(r, i),
    l = o(mn + 'Delay'),
    a = o(mn + 'Duration'),
    u = zi(l, a)
  let c = null,
    h = 0,
    f = 0
  t === mt
    ? s > 0 && ((c = mt), (h = s), (f = i.length))
    : t === mn
    ? u > 0 && ((c = mn), (h = u), (f = a.length))
    : ((h = Math.max(s, u)),
      (c = h > 0 ? (s > u ? mt : mn) : null),
      (f = c ? (c === mt ? i.length : a.length) : 0))
  const m = c === mt && /\b(transform|all)(,|$)/.test(n[mt + 'Property'])
  return { type: c, timeout: h, propCount: f, hasTransform: m }
}
function zi(e, t) {
  for (; e.length < t.length; ) e = e.concat(e)
  return Math.max(...t.map((n, o) => Ui(n) + Ui(e[o])))
}
function Ui(e) {
  return Number(e.slice(0, -1).replace(',', '.')) * 1e3
}
function Wl() {
  return document.body.offsetHeight
}
const Ql = new WeakMap(),
  Zl = new WeakMap(),
  of = {
    name: 'TransitionGroup',
    props: Me({}, tf, { tag: String, moveClass: String }),
    setup(e, { slots: t }) {
      const n = Ne(),
        o = yl()
      let r, i
      return (
        kl(() => {
          if (!r.length) return
          const s = e.moveClass || `${e.name || 'v'}-move`
          if (!cf(r[0].el, n.vnode.el, s)) return
          r.forEach(lf), r.forEach(af)
          const l = r.filter(uf)
          Wl(),
            l.forEach((a) => {
              const u = a.el,
                c = u.style
              st(u, s),
                (c.transform = c.webkitTransform = c.transitionDuration = '')
              const h = (u._moveCb = (f) => {
                ;(f && f.target !== u) ||
                  ((!f || /transform$/.test(f.propertyName)) &&
                    (u.removeEventListener('transitionend', h),
                    (u._moveCb = null),
                    Mt(u, s)))
              })
              u.addEventListener('transitionend', h)
            })
        }),
        () => {
          const s = ce(e),
            l = Ul(s)
          let a = s.tag || je
          ;(r = i), (i = t.default ? Qo(t.default()) : [])
          for (let u = 0; u < i.length; u++) {
            const c = i[u]
            c.key != null && Fn(c, Ln(c, l, o, n))
          }
          if (r)
            for (let u = 0; u < r.length; u++) {
              const c = r[u]
              Fn(c, Ln(c, l, o, n)), Ql.set(c, c.el.getBoundingClientRect())
            }
          return Se(a, null, i)
        }
      )
    },
  },
  sf = of
function lf(e) {
  const t = e.el
  t._moveCb && t._moveCb(), t._enterCb && t._enterCb()
}
function af(e) {
  Zl.set(e, e.el.getBoundingClientRect())
}
function uf(e) {
  const t = Ql.get(e),
    n = Zl.get(e),
    o = t.left - n.left,
    r = t.top - n.top
  if (o || r) {
    const i = e.el.style
    return (
      (i.transform = i.webkitTransform = `translate(${o}px,${r}px)`),
      (i.transitionDuration = '0s'),
      e
    )
  }
}
function cf(e, t, n) {
  const o = e.cloneNode()
  e._vtc &&
    e._vtc.forEach((s) => {
      s.split(/\s+/).forEach((l) => l && o.classList.remove(l))
    }),
    n.split(/\s+/).forEach((s) => s && o.classList.add(s)),
    (o.style.display = 'none')
  const r = t.nodeType === 1 ? t : t.parentNode
  r.appendChild(o)
  const { hasTransform: i } = Kl(o)
  return r.removeChild(o), i
}
const ff = ['ctrl', 'shift', 'alt', 'meta'],
  df = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => 'button' in e && e.button !== 0,
    middle: (e) => 'button' in e && e.button !== 1,
    right: (e) => 'button' in e && e.button !== 2,
    exact: (e, t) => ff.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  up =
    (e, t) =>
    (n, ...o) => {
      for (let r = 0; r < t.length; r++) {
        const i = df[t[r]]
        if (i && i(n, t)) return
      }
      return e(n, ...o)
    },
  hf = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace',
  },
  cp = (e, t) => (n) => {
    if (!('key' in n)) return
    const o = Ht(n.key)
    if (t.some((r) => r === o || hf[r] === o)) return e(n)
  },
  fp = {
    beforeMount(e, { value: t }, { transition: n }) {
      ;(e._vod = e.style.display === 'none' ? '' : e.style.display),
        n && t ? n.beforeEnter(e) : pn(e, t)
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e)
    },
    updated(e, { value: t, oldValue: n }, { transition: o }) {
      !t != !n &&
        (o
          ? t
            ? (o.beforeEnter(e), pn(e, !0), o.enter(e))
            : o.leave(e, () => {
                pn(e, !1)
              })
          : pn(e, t))
    },
    beforeUnmount(e, { value: t }) {
      pn(e, t)
    },
  }
function pn(e, t) {
  e.style.display = t ? e._vod : 'none'
}
const mf = Me({ patchProp: Gc }, Nc)
let Ki
function pf() {
  return Ki || (Ki = fc(mf))
}
const Yl = (...e) => {
  const t = pf().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (o) => {
      const r = gf(o)
      if (!r) return
      const i = t._component
      !oe(i) && !i.render && !i.template && (i.template = r.innerHTML),
        (r.innerHTML = '')
      const s = n(r, !1, r instanceof SVGElement)
      return (
        r instanceof Element &&
          (r.removeAttribute('v-cloak'), r.setAttribute('data-v-app', '')),
        s
      )
    }),
    t
  )
}
function gf(e) {
  return Pe(e) ? document.querySelector(e) : e
}
function jr(e, t, n, o) {
  Object.defineProperty(e, t, { get: n, set: o, enumerable: !0 })
}
const St = fe(!1)
let Dr
function vf(e, t) {
  const n =
    /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) ||
    /(opr)[\/]([\w.]+)/.exec(e) ||
    /(vivaldi)[\/]([\w.]+)/.exec(e) ||
    /(chrome|crios)[\/]([\w.]+)/.exec(e) ||
    /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) ||
    /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(
      e
    ) ||
    /(firefox|fxios)[\/]([\w.]+)/.exec(e) ||
    /(webkit)[\/]([\w.]+)/.exec(e) ||
    /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) ||
    []
  return {
    browser: n[5] || n[3] || n[1] || '',
    version: n[2] || n[4] || '0',
    versionNumber: n[4] || n[2] || '0',
    platform: t[0] || '',
  }
}
function bf(e) {
  return (
    /(ipad)/.exec(e) ||
    /(ipod)/.exec(e) ||
    /(windows phone)/.exec(e) ||
    /(iphone)/.exec(e) ||
    /(kindle)/.exec(e) ||
    /(silk)/.exec(e) ||
    /(android)/.exec(e) ||
    /(win)/.exec(e) ||
    /(mac)/.exec(e) ||
    /(linux)/.exec(e) ||
    /(cros)/.exec(e) ||
    /(playbook)/.exec(e) ||
    /(bb)/.exec(e) ||
    /(blackberry)/.exec(e) ||
    []
  )
}
const Jl = 'ontouchstart' in window || window.navigator.maxTouchPoints > 0
function yf(e) {
  ;(Dr = { is: ie({}, e) }), delete e.mac, delete e.desktop
  const t =
    Math.min(window.innerHeight, window.innerWidth) > 414 ? 'ipad' : 'iphone'
  Object.assign(e, { mobile: !0, ios: !0, platform: t, [t]: !0 })
}
function _f(e) {
  const t = e.toLowerCase(),
    n = bf(t),
    o = vf(t, n),
    r = {}
  o.browser &&
    ((r[o.browser] = !0),
    (r.version = o.version),
    (r.versionNumber = parseInt(o.versionNumber, 10))),
    o.platform && (r[o.platform] = !0)
  const i =
    r.android ||
    r.ios ||
    r.bb ||
    r.blackberry ||
    r.ipad ||
    r.iphone ||
    r.ipod ||
    r.kindle ||
    r.playbook ||
    r.silk ||
    r['windows phone']
  return (
    i === !0 || t.indexOf('mobile') > -1
      ? ((r.mobile = !0),
        r.edga || r.edgios
          ? ((r.edge = !0), (o.browser = 'edge'))
          : r.crios
          ? ((r.chrome = !0), (o.browser = 'chrome'))
          : r.fxios && ((r.firefox = !0), (o.browser = 'firefox')))
      : (r.desktop = !0),
    (r.ipod || r.ipad || r.iphone) && (r.ios = !0),
    r['windows phone'] && ((r.winphone = !0), delete r['windows phone']),
    (r.chrome ||
      r.opr ||
      r.safari ||
      r.vivaldi ||
      (r.mobile === !0 && r.ios !== !0 && i !== !0)) &&
      (r.webkit = !0),
    r.edg && ((o.browser = 'edgechromium'), (r.edgeChromium = !0)),
    ((r.safari && r.blackberry) || r.bb) &&
      ((o.browser = 'blackberry'), (r.blackberry = !0)),
    r.safari && r.playbook && ((o.browser = 'playbook'), (r.playbook = !0)),
    r.opr && ((o.browser = 'opera'), (r.opera = !0)),
    r.safari && r.android && ((o.browser = 'android'), (r.android = !0)),
    r.safari && r.kindle && ((o.browser = 'kindle'), (r.kindle = !0)),
    r.safari && r.silk && ((o.browser = 'silk'), (r.silk = !0)),
    r.vivaldi && ((o.browser = 'vivaldi'), (r.vivaldi = !0)),
    (r.name = o.browser),
    (r.platform = o.platform),
    t.indexOf('electron') > -1
      ? (r.electron = !0)
      : document.location.href.indexOf('-extension://') > -1
      ? (r.bex = !0)
      : (window.Capacitor !== void 0
          ? ((r.capacitor = !0),
            (r.nativeMobile = !0),
            (r.nativeMobileWrapper = 'capacitor'))
          : (window._cordovaNative !== void 0 || window.cordova !== void 0) &&
            ((r.cordova = !0),
            (r.nativeMobile = !0),
            (r.nativeMobileWrapper = 'cordova')),
        Jl === !0 &&
          r.mac === !0 &&
          ((r.desktop === !0 && r.safari === !0) ||
            (r.nativeMobile === !0 &&
              r.android !== !0 &&
              r.ios !== !0 &&
              r.ipad !== !0)) &&
          yf(r)),
    r
  )
}
const Wi = navigator.userAgent || navigator.vendor || window.opera,
  wf = { has: { touch: !1, webStorage: !1 }, within: { iframe: !1 } },
  Ke = {
    userAgent: Wi,
    is: _f(Wi),
    has: { touch: Jl },
    within: { iframe: window.self !== window.top },
  },
  br = {
    install(e) {
      const { $q: t } = e
      St.value === !0
        ? (e.onSSRHydrated.push(() => {
            ;(St.value = !1), Object.assign(t.platform, Ke), (Dr = void 0)
          }),
          (t.platform = ft(this)))
        : (t.platform = this)
    },
  }
{
  let e
  jr(Ke.has, 'webStorage', () => {
    if (e !== void 0) return e
    try {
      if (window.localStorage) return (e = !0), !0
    } catch {}
    return (e = !1), !1
  }),
    Ke.is.ios === !0 && window.navigator.vendor.toLowerCase().indexOf('apple'),
    St.value === !0 ? Object.assign(br, Ke, Dr, wf) : Object.assign(br, Ke)
}
var Hr = (e, t) => {
  const n = ft(e)
  for (const o in e)
    jr(
      t,
      o,
      () => n[o],
      (r) => {
        n[o] = r
      }
    )
  return t
}
const ot = { hasPassive: !1, passiveCapture: !0, notPassiveCapture: !0 }
try {
  const e = Object.defineProperty({}, 'passive', {
    get() {
      Object.assign(ot, {
        hasPassive: !0,
        passive: { passive: !0 },
        notPassive: { passive: !1 },
        passiveCapture: { passive: !0, capture: !0 },
        notPassiveCapture: { passive: !1, capture: !0 },
      })
    },
  })
  window.addEventListener('qtest', null, e),
    window.removeEventListener('qtest', null, e)
} catch {}
function Bn() {}
function dp(e) {
  return e.button === 0
}
function xf(e) {
  return (
    e.touches && e.touches[0]
      ? (e = e.touches[0])
      : e.changedTouches && e.changedTouches[0]
      ? (e = e.changedTouches[0])
      : e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]),
    { top: e.clientY, left: e.clientX }
  )
}
function hp(e) {
  if (e.path) return e.path
  if (e.composedPath) return e.composedPath()
  const t = []
  let n = e.target
  for (; n; ) {
    if ((t.push(n), n.tagName === 'HTML'))
      return t.push(document), t.push(window), t
    n = n.parentElement
  }
}
function yr(e) {
  e.stopPropagation()
}
function nt(e) {
  e.cancelable !== !1 && e.preventDefault()
}
function yt(e) {
  e.cancelable !== !1 && e.preventDefault(), e.stopPropagation()
}
function mp(e, t) {
  if (e === void 0 || (t === !0 && e.__dragPrevented === !0)) return
  const n =
    t === !0
      ? (o) => {
          ;(o.__dragPrevented = !0),
            o.addEventListener('dragstart', nt, ot.notPassiveCapture)
        }
      : (o) => {
          delete o.__dragPrevented,
            o.removeEventListener('dragstart', nt, ot.notPassiveCapture)
        }
  e.querySelectorAll('a, img').forEach(n)
}
function Nn(e, t, n) {
  const o = `__q_${t}_evt`
  ;(e[o] = e[o] !== void 0 ? e[o].concat(n) : n),
    n.forEach((r) => {
      r[0].addEventListener(r[1], e[r[2]], ot[r[3]])
    })
}
function _r(e, t) {
  const n = `__q_${t}_evt`
  e[n] !== void 0 &&
    (e[n].forEach((o) => {
      o[0].removeEventListener(o[1], e[o[2]], ot[o[3]])
    }),
    (e[n] = void 0))
}
function Xl(e, t = 250, n) {
  let o
  function r() {
    const i = arguments,
      s = () => {
        ;(o = void 0), n !== !0 && e.apply(this, i)
      }
    clearTimeout(o),
      n === !0 && o === void 0 && e.apply(this, i),
      (o = setTimeout(s, t))
  }
  return (
    (r.cancel = () => {
      clearTimeout(o)
    }),
    r
  )
}
const Gr = ['sm', 'md', 'lg', 'xl'],
  { passive: Qi } = ot
var Cf = Hr(
  {
    width: 0,
    height: 0,
    name: 'xs',
    sizes: { sm: 600, md: 1024, lg: 1440, xl: 1920 },
    lt: { sm: !0, md: !0, lg: !0, xl: !0 },
    gt: { xs: !1, sm: !1, md: !1, lg: !1 },
    xs: !0,
    sm: !1,
    md: !1,
    lg: !1,
    xl: !1,
  },
  {
    setSizes: Bn,
    setDebounce: Bn,
    install({ $q: e, onSSRHydrated: t }) {
      if (((e.screen = this), this.__installed === !0)) {
        e.config.screen !== void 0 &&
          (e.config.screen.bodyClasses === !1
            ? document.body.classList.remove(`screen--${this.name}`)
            : this.__update(!0))
        return
      }
      const { visualViewport: n } = window,
        o = n || window,
        r = document.scrollingElement || document.documentElement,
        i =
          n === void 0 || Ke.is.mobile === !0
            ? () => [
                Math.max(window.innerWidth, r.clientWidth),
                Math.max(window.innerHeight, r.clientHeight),
              ]
            : () => [
                n.width * n.scale + window.innerWidth - r.clientWidth,
                n.height * n.scale + window.innerHeight - r.clientHeight,
              ],
        s = e.config.screen !== void 0 && e.config.screen.bodyClasses === !0
      this.__update = (h) => {
        const [f, m] = i()
        if ((m !== this.height && (this.height = m), f !== this.width))
          this.width = f
        else if (h !== !0) return
        let v = this.sizes
        ;(this.gt.xs = f >= v.sm),
          (this.gt.sm = f >= v.md),
          (this.gt.md = f >= v.lg),
          (this.gt.lg = f >= v.xl),
          (this.lt.sm = f < v.sm),
          (this.lt.md = f < v.md),
          (this.lt.lg = f < v.lg),
          (this.lt.xl = f < v.xl),
          (this.xs = this.lt.sm),
          (this.sm = this.gt.xs === !0 && this.lt.md === !0),
          (this.md = this.gt.sm === !0 && this.lt.lg === !0),
          (this.lg = this.gt.md === !0 && this.lt.xl === !0),
          (this.xl = this.gt.lg),
          (v =
            (this.xs === !0 && 'xs') ||
            (this.sm === !0 && 'sm') ||
            (this.md === !0 && 'md') ||
            (this.lg === !0 && 'lg') ||
            'xl'),
          v !== this.name &&
            (s === !0 &&
              (document.body.classList.remove(`screen--${this.name}`),
              document.body.classList.add(`screen--${v}`)),
            (this.name = v))
      }
      let l,
        a = {},
        u = 16
      ;(this.setSizes = (h) => {
        Gr.forEach((f) => {
          h[f] !== void 0 && (a[f] = h[f])
        })
      }),
        (this.setDebounce = (h) => {
          u = h
        })
      const c = () => {
        const h = getComputedStyle(document.body)
        h.getPropertyValue('--q-size-sm') &&
          Gr.forEach((f) => {
            this.sizes[f] = parseInt(h.getPropertyValue(`--q-size-${f}`), 10)
          }),
          (this.setSizes = (f) => {
            Gr.forEach((m) => {
              f[m] && (this.sizes[m] = f[m])
            }),
              this.__update(!0)
          }),
          (this.setDebounce = (f) => {
            l !== void 0 && o.removeEventListener('resize', l, Qi),
              (l = f > 0 ? Xl(this.__update, f) : this.__update),
              o.addEventListener('resize', l, Qi)
          }),
          this.setDebounce(u),
          Object.keys(a).length > 0
            ? (this.setSizes(a), (a = void 0))
            : this.__update(),
          s === !0 &&
            this.name === 'xs' &&
            document.body.classList.add('screen--xs')
      }
      St.value === !0 ? t.push(c) : c()
    },
  }
)
const $e = Hr(
    { isActive: !1, mode: !1 },
    {
      __media: void 0,
      set(e) {
        ;($e.mode = e),
          e === 'auto'
            ? ($e.__media === void 0 &&
                (($e.__media = window.matchMedia(
                  '(prefers-color-scheme: dark)'
                )),
                ($e.__updateMedia = () => {
                  $e.set('auto')
                }),
                $e.__media.addListener($e.__updateMedia)),
              (e = $e.__media.matches))
            : $e.__media !== void 0 &&
              ($e.__media.removeListener($e.__updateMedia),
              ($e.__media = void 0)),
          ($e.isActive = e === !0),
          document.body.classList.remove(
            `body--${e === !0 ? 'light' : 'dark'}`
          ),
          document.body.classList.add(`body--${e === !0 ? 'dark' : 'light'}`)
      },
      toggle() {
        $e.set($e.isActive === !1)
      },
      install({ $q: e, onSSRHydrated: t, ssrContext: n }) {
        const { dark: o } = e.config
        if (((e.dark = this), this.__installed === !0 && o === void 0)) return
        this.isActive = o === !0
        const r = o !== void 0 ? o : !1
        if (St.value === !0) {
          const i = (l) => {
              this.__fromSSR = l
            },
            s = this.set
          ;(this.set = i),
            i(r),
            t.push(() => {
              ;(this.set = s), this.set(this.__fromSSR)
            })
        } else this.set(r)
      },
    }
  ),
  Gl = () => !0
function Ef(e) {
  return typeof e == 'string' && e !== '' && e !== '/' && e !== '#/'
}
function Sf(e) {
  return (
    e.startsWith('#') === !0 && (e = e.substr(1)),
    e.startsWith('/') === !1 && (e = '/' + e),
    e.endsWith('/') === !0 && (e = e.substr(0, e.length - 1)),
    '#' + e
  )
}
function kf(e) {
  if (e.backButtonExit === !1) return () => !1
  if (e.backButtonExit === '*') return Gl
  const t = ['#/']
  return (
    Array.isArray(e.backButtonExit) === !0 &&
      t.push(...e.backButtonExit.filter(Ef).map(Sf)),
    () => t.includes(window.location.hash)
  )
}
var Rf = {
    __history: [],
    add: Bn,
    remove: Bn,
    install({ $q: e }) {
      if (this.__installed === !0) return
      const { cordova: t, capacitor: n } = Ke.is
      if (t !== !0 && n !== !0) return
      const o = e.config[t === !0 ? 'cordova' : 'capacitor']
      if (
        (o !== void 0 && o.backButton === !1) ||
        (n === !0 &&
          (window.Capacitor === void 0 ||
            window.Capacitor.Plugins.App === void 0))
      )
        return
      ;(this.add = (s) => {
        s.condition === void 0 && (s.condition = Gl), this.__history.push(s)
      }),
        (this.remove = (s) => {
          const l = this.__history.indexOf(s)
          l >= 0 && this.__history.splice(l, 1)
        })
      const r = kf(Object.assign({ backButtonExit: !0 }, o)),
        i = () => {
          if (this.__history.length) {
            const s = this.__history[this.__history.length - 1]
            s.condition() === !0 && (this.__history.pop(), s.handler())
          } else r() === !0 ? navigator.app.exitApp() : window.history.back()
        }
      t === !0
        ? document.addEventListener('deviceready', () => {
            document.addEventListener('backbutton', i, !1)
          })
        : window.Capacitor.Plugins.App.addListener('backButton', i)
    },
  },
  Zi = {
    isoName: 'en-US',
    nativeName: 'English (US)',
    label: {
      clear: 'Clear',
      ok: 'OK',
      cancel: 'Cancel',
      close: 'Close',
      set: 'Set',
      select: 'Select',
      reset: 'Reset',
      remove: 'Remove',
      update: 'Update',
      create: 'Create',
      search: 'Search',
      filter: 'Filter',
      refresh: 'Refresh',
    },
    date: {
      days: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
        '_'
      ),
      daysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
      months:
        'January_February_March_April_May_June_July_August_September_October_November_December'.split(
          '_'
        ),
      monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
      firstDayOfWeek: 0,
      format24h: !1,
      pluralDay: 'days',
    },
    table: {
      noData: 'No data available',
      noResults: 'No matching records found',
      loading: 'Loading...',
      selectedRecords: (e) =>
        e === 1
          ? '1 record selected.'
          : (e === 0 ? 'No' : e) + ' records selected.',
      recordsPerPage: 'Records per page:',
      allRows: 'All',
      pagination: (e, t, n) => e + '-' + t + ' of ' + n,
      columns: 'Columns',
    },
    editor: {
      url: 'URL',
      bold: 'Bold',
      italic: 'Italic',
      strikethrough: 'Strikethrough',
      underline: 'Underline',
      unorderedList: 'Unordered List',
      orderedList: 'Ordered List',
      subscript: 'Subscript',
      superscript: 'Superscript',
      hyperlink: 'Hyperlink',
      toggleFullscreen: 'Toggle Fullscreen',
      quote: 'Quote',
      left: 'Left align',
      center: 'Center align',
      right: 'Right align',
      justify: 'Justify align',
      print: 'Print',
      outdent: 'Decrease indentation',
      indent: 'Increase indentation',
      removeFormat: 'Remove formatting',
      formatting: 'Formatting',
      fontSize: 'Font Size',
      align: 'Align',
      hr: 'Insert Horizontal Rule',
      undo: 'Undo',
      redo: 'Redo',
      heading1: 'Heading 1',
      heading2: 'Heading 2',
      heading3: 'Heading 3',
      heading4: 'Heading 4',
      heading5: 'Heading 5',
      heading6: 'Heading 6',
      paragraph: 'Paragraph',
      code: 'Code',
      size1: 'Very small',
      size2: 'A bit small',
      size3: 'Normal',
      size4: 'Medium-large',
      size5: 'Big',
      size6: 'Very big',
      size7: 'Maximum',
      defaultFont: 'Default Font',
      viewSource: 'View Source',
    },
    tree: {
      noNodes: 'No nodes available',
      noResults: 'No matching nodes found',
    },
  }
function Yi() {
  const e =
    Array.isArray(navigator.languages) === !0 && navigator.languages.length > 0
      ? navigator.languages[0]
      : navigator.language
  if (typeof e == 'string')
    return e
      .split(/[-_]/)
      .map((t, n) =>
        n === 0
          ? t.toLowerCase()
          : n > 1 || t.length < 4
          ? t.toUpperCase()
          : t[0].toUpperCase() + t.slice(1).toLowerCase()
      )
      .join('-')
}
const _t = Hr(
  { __langPack: {} },
  {
    getLocale: Yi,
    set(e = Zi, t) {
      const n = Ee(ie({}, e), { rtl: e.rtl === !0, getLocale: Yi })
      {
        const o = document.documentElement
        o.setAttribute('dir', n.rtl === !0 ? 'rtl' : 'ltr'),
          o.setAttribute('lang', n.isoName),
          (n.set = _t.set),
          Object.assign(_t.__langPack, n),
          (_t.props = n),
          (_t.isoName = n.isoName),
          (_t.nativeName = n.nativeName)
      }
    },
    install({ $q: e, lang: t, ssrContext: n }) {
      ;(e.lang = _t.__langPack),
        this.__installed === !0
          ? t !== void 0 && this.set(t)
          : this.set(t || Zi)
    },
  }
)
function Tf(e, t, n = document.body) {
  if (typeof e != 'string') throw new TypeError('Expected a string as propName')
  if (typeof t != 'string') throw new TypeError('Expected a string as value')
  if (!(n instanceof Element)) throw new TypeError('Expected a DOM element')
  n.style.setProperty(`--q-${e}`, t)
}
let ea = !1
function Pf(e) {
  ea = e.isComposing === !0
}
function ta(e) {
  return (
    ea === !0 || e !== Object(e) || e.isComposing === !0 || e.qKeyEvent === !0
  )
}
function wr(e, t) {
  return ta(e) === !0 ? !1 : [].concat(t).includes(e.keyCode)
}
function Af(e) {
  if (e.ios === !0) return 'ios'
  if (e.android === !0) return 'android'
}
function Mf({ is: e, has: t, within: n }, o) {
  const r = [
    e.desktop === !0 ? 'desktop' : 'mobile',
    `${t.touch === !1 ? 'no-' : ''}touch`,
  ]
  if (e.mobile === !0) {
    const i = Af(e)
    i !== void 0 && r.push('platform-' + i)
  }
  if (e.nativeMobile === !0) {
    const i = e.nativeMobileWrapper
    r.push(i),
      r.push('native-mobile'),
      e.ios === !0 &&
        (o[i] === void 0 || o[i].iosStatusBarPadding !== !1) &&
        r.push('q-ios-padding')
  } else e.electron === !0 ? r.push('electron') : e.bex === !0 && r.push('bex')
  return n.iframe === !0 && r.push('within-iframe'), r
}
function Of() {
  const e = document.body.className
  let t = e
  Dr !== void 0 && (t = t.replace('desktop', 'platform-ios mobile')),
    Ke.has.touch === !0 && (t = t.replace('no-touch', 'touch')),
    Ke.within.iframe === !0 && (t += ' within-iframe'),
    e !== t && (document.body.className = t)
}
function $f(e) {
  for (const t in e) Tf(t, e[t])
}
var Lf = {
    install(e) {
      if (this.__installed !== !0) {
        if (St.value === !0) Of()
        else {
          const { $q: t } = e
          t.config.brand !== void 0 && $f(t.config.brand)
          const n = Mf(Ke, t.config)
          document.body.classList.add.apply(document.body.classList, n)
        }
        Ke.is.ios === !0 && document.body.addEventListener('touchstart', Bn),
          window.addEventListener('keydown', Pf, !0)
      }
    },
  },
  Ff = {
    name: 'material-icons',
    type: {
      positive: 'check_circle',
      negative: 'warning',
      info: 'info',
      warning: 'priority_high',
    },
    arrow: {
      up: 'arrow_upward',
      right: 'arrow_forward',
      down: 'arrow_downward',
      left: 'arrow_back',
      dropdown: 'arrow_drop_down',
    },
    chevron: { left: 'chevron_left', right: 'chevron_right' },
    colorPicker: { spectrum: 'gradient', tune: 'tune', palette: 'style' },
    pullToRefresh: { icon: 'refresh' },
    carousel: {
      left: 'chevron_left',
      right: 'chevron_right',
      up: 'keyboard_arrow_up',
      down: 'keyboard_arrow_down',
      navigationIcon: 'lens',
    },
    chip: { remove: 'cancel', selected: 'check' },
    datetime: {
      arrowLeft: 'chevron_left',
      arrowRight: 'chevron_right',
      now: 'access_time',
      today: 'today',
    },
    editor: {
      bold: 'format_bold',
      italic: 'format_italic',
      strikethrough: 'strikethrough_s',
      underline: 'format_underlined',
      unorderedList: 'format_list_bulleted',
      orderedList: 'format_list_numbered',
      subscript: 'vertical_align_bottom',
      superscript: 'vertical_align_top',
      hyperlink: 'link',
      toggleFullscreen: 'fullscreen',
      quote: 'format_quote',
      left: 'format_align_left',
      center: 'format_align_center',
      right: 'format_align_right',
      justify: 'format_align_justify',
      print: 'print',
      outdent: 'format_indent_decrease',
      indent: 'format_indent_increase',
      removeFormat: 'format_clear',
      formatting: 'text_format',
      fontSize: 'format_size',
      align: 'format_align_left',
      hr: 'remove',
      undo: 'undo',
      redo: 'redo',
      heading: 'format_size',
      code: 'code',
      size: 'format_size',
      font: 'font_download',
      viewSource: 'code',
    },
    expansionItem: {
      icon: 'keyboard_arrow_down',
      denseIcon: 'arrow_drop_down',
    },
    fab: { icon: 'add', activeIcon: 'close' },
    field: { clear: 'cancel', error: 'error' },
    pagination: {
      first: 'first_page',
      prev: 'keyboard_arrow_left',
      next: 'keyboard_arrow_right',
      last: 'last_page',
    },
    rating: { icon: 'grade' },
    stepper: { done: 'check', active: 'edit', error: 'warning' },
    tabs: {
      left: 'chevron_left',
      right: 'chevron_right',
      up: 'keyboard_arrow_up',
      down: 'keyboard_arrow_down',
    },
    table: {
      arrowUp: 'arrow_upward',
      warning: 'warning',
      firstPage: 'first_page',
      prevPage: 'chevron_left',
      nextPage: 'chevron_right',
      lastPage: 'last_page',
    },
    tree: { icon: 'play_arrow' },
    uploader: {
      done: 'done',
      clear: 'clear',
      add: 'add_box',
      upload: 'cloud_upload',
      removeQueue: 'clear_all',
      removeUploaded: 'done_all',
    },
  }
const xr = Hr(
    { iconMapFn: null, __icons: {} },
    {
      set(e, t) {
        const n = Ee(ie({}, e), { rtl: e.rtl === !0 })
        ;(n.set = xr.set), Object.assign(xr.__icons, n)
      },
      install({ $q: e, iconSet: t, ssrContext: n }) {
        e.config.iconMapFn !== void 0 && (this.iconMapFn = e.config.iconMapFn),
          (e.iconSet = this.__icons),
          jr(
            e,
            'iconMapFn',
            () => this.iconMapFn,
            (o) => {
              this.iconMapFn = o
            }
          ),
          this.__installed === !0
            ? t !== void 0 && this.set(t)
            : this.set(t || Ff)
      },
    }
  ),
  qf = '_q_',
  pp = '_q_l_',
  gp = '_q_pc_',
  Bf = '_q_fo_',
  Cr = {}
let na = !1
function Nf() {
  na = !0
}
function In(e) {
  return e !== null && typeof e == 'object' && Array.isArray(e) !== !0
}
const Ji = [br, Lf, $e, Cf, Rf, _t, xr]
function If(e, t) {
  const n = Yl(e)
  n.config.globalProperties = t.config.globalProperties
  const i = t._context,
    { reload: o } = i,
    r = Kr(i, ['reload'])
  return Object.assign(n._context, r), n
}
function Xi(e, t) {
  t.forEach((n) => {
    n.install(e), (n.__installed = !0)
  })
}
function jf(e, t, n) {
  ;(e.config.globalProperties.$q = n.$q),
    e.provide(qf, n.$q),
    Xi(n, Ji),
    t.components !== void 0 &&
      Object.values(t.components).forEach((o) => {
        In(o) === !0 && o.name !== void 0 && e.component(o.name, o)
      }),
    t.directives !== void 0 &&
      Object.values(t.directives).forEach((o) => {
        In(o) === !0 && o.name !== void 0 && e.directive(o.name, o)
      }),
    t.plugins !== void 0 &&
      Xi(
        n,
        Object.values(t.plugins).filter(
          (o) => typeof o.install == 'function' && Ji.includes(o) === !1
        )
      ),
    St.value === !0 &&
      (n.$q.onSSRHydrated = () => {
        n.onSSRHydrated.forEach((o) => {
          o()
        }),
          (n.$q.onSSRHydrated = () => {})
      })
}
var Df = function (e, t = {}) {
    const n = { version: '2.6.5' }
    na === !1
      ? (t.config !== void 0 && Object.assign(Cr, t.config),
        (n.config = ie({}, Cr)),
        Nf())
      : (n.config = t.config || {}),
      jf(e, t, {
        parentApp: e,
        $q: n,
        lang: t.lang,
        iconSet: t.iconSet,
        onSSRHydrated: [],
      })
  },
  Hf = { version: '2.6.5', install: Df, lang: _t, iconSet: xr }
function Co() {
  if (window.getSelection !== void 0) {
    const e = window.getSelection()
    e.empty !== void 0
      ? e.empty()
      : e.removeAllRanges !== void 0 &&
        (e.removeAllRanges(),
        br.is.mobile !== !0 && e.addRange(document.createRange()))
  } else document.selection !== void 0 && document.selection.empty()
}
const Vf = {
  target: { default: !0 },
  noParentEvent: Boolean,
  contextMenu: Boolean,
}
function zf({ showing: e, avoidEmit: t, configureAnchorEl: n }) {
  const { props: o, proxy: r, emit: i } = Ne(),
    s = fe(null)
  let l
  function a(m) {
    return s.value === null
      ? !1
      : m === void 0 || m.touches === void 0 || m.touches.length <= 1
  }
  const u = {}
  n === void 0 &&
    (Object.assign(u, {
      hide(m) {
        r.hide(m)
      },
      toggle(m) {
        r.toggle(m), (m.qAnchorHandled = !0)
      },
      toggleKey(m) {
        wr(m, 13) === !0 && u.toggle(m)
      },
      contextClick(m) {
        r.hide(m),
          nt(m),
          qe(() => {
            r.show(m), (m.qAnchorHandled = !0)
          })
      },
      prevent: nt,
      mobileTouch(m) {
        if ((u.mobileCleanup(m), a(m) !== !0)) return
        r.hide(m), s.value.classList.add('non-selectable')
        const v = m.target
        Nn(u, 'anchor', [
          [v, 'touchmove', 'mobileCleanup', 'passive'],
          [v, 'touchend', 'mobileCleanup', 'passive'],
          [v, 'touchcancel', 'mobileCleanup', 'passive'],
          [s.value, 'contextmenu', 'prevent', 'notPassive'],
        ]),
          (l = setTimeout(() => {
            r.show(m), (m.qAnchorHandled = !0)
          }, 300))
      },
      mobileCleanup(m) {
        s.value.classList.remove('non-selectable'),
          clearTimeout(l),
          e.value === !0 && m !== void 0 && Co()
      },
    }),
    (n = function (m = o.contextMenu) {
      if (o.noParentEvent === !0 || s.value === null) return
      let v
      m === !0
        ? r.$q.platform.is.mobile === !0
          ? (v = [[s.value, 'touchstart', 'mobileTouch', 'passive']])
          : (v = [
              [s.value, 'mousedown', 'hide', 'passive'],
              [s.value, 'contextmenu', 'contextClick', 'notPassive'],
            ])
        : (v = [
            [s.value, 'click', 'toggle', 'passive'],
            [s.value, 'keyup', 'toggleKey', 'passive'],
          ]),
        Nn(u, 'anchor', v)
    }))
  function c() {
    _r(u, 'anchor')
  }
  function h(m) {
    for (s.value = m; s.value.classList.contains('q-anchor--skip'); )
      s.value = s.value.parentNode
    n()
  }
  function f() {
    if (o.target === !1 || o.target === '') s.value = null
    else if (o.target === !0) h(r.$el.parentNode)
    else {
      let m = o.target
      if (typeof o.target == 'string')
        try {
          m = document.querySelector(o.target)
        } catch {
          m = void 0
        }
      m != null
        ? ((s.value = m.$el || m), n())
        : ((s.value = null),
          console.error(`Anchor: target "${o.target}" not found`))
    }
  }
  return (
    he(
      () => o.contextMenu,
      (m) => {
        s.value !== null && (c(), n(m))
      }
    ),
    he(
      () => o.target,
      () => {
        s.value !== null && c(), f()
      }
    ),
    he(
      () => o.noParentEvent,
      (m) => {
        s.value !== null && (m === !0 ? c() : n())
      }
    ),
    fn(() => {
      f(),
        t !== !0 &&
          o.modelValue === !0 &&
          s.value === null &&
          i('update:modelValue', !1)
    }),
    Be(() => {
      clearTimeout(l), c()
    }),
    { anchorEl: s, canShow: a, anchorEvents: u }
  )
}
function Uf(e, t) {
  const n = fe(null)
  let o
  function r(l, a) {
    const u = `${a !== void 0 ? 'add' : 'remove'}EventListener`,
      c = a !== void 0 ? a : o
    l !== window && l[u]('scroll', c, ot.passive),
      window[u]('scroll', c, ot.passive),
      (o = a)
  }
  function i() {
    n.value !== null && (r(n.value), (n.value = null))
  }
  const s = he(
    () => e.noParentEvent,
    () => {
      n.value !== null && (i(), t())
    }
  )
  return (
    Be(s),
    { localScrollTarget: n, unconfigureScrollTarget: i, changeScrollEvent: r }
  )
}
function ra(e) {
  return e.appContext.config.globalProperties.$router !== void 0
}
const Kf = {
    modelValue: { type: Boolean, default: null },
    'onUpdate:modelValue': [Function, Array],
  },
  Wf = ['before-show', 'show', 'before-hide', 'hide']
function Qf({
  showing: e,
  canShow: t,
  hideOnRouteChange: n,
  handleShow: o,
  handleHide: r,
  processOnMount: i,
}) {
  const s = Ne(),
    { props: l, emit: a, proxy: u } = s
  let c
  function h(E) {
    e.value === !0 ? v(E) : f(E)
  }
  function f(E) {
    if (
      l.disable === !0 ||
      (E !== void 0 && E.qAnchorHandled === !0) ||
      (t !== void 0 && t(E) !== !0)
    )
      return
    const D = l['onUpdate:modelValue'] !== void 0
    D === !0 &&
      (a('update:modelValue', !0),
      (c = E),
      qe(() => {
        c === E && (c = void 0)
      })),
      (l.modelValue === null || D === !1) && m(E)
  }
  function m(E) {
    e.value !== !0 &&
      ((e.value = !0), a('before-show', E), o !== void 0 ? o(E) : a('show', E))
  }
  function v(E) {
    if (l.disable === !0) return
    const D = l['onUpdate:modelValue'] !== void 0
    D === !0 &&
      (a('update:modelValue', !1),
      (c = E),
      qe(() => {
        c === E && (c = void 0)
      })),
      (l.modelValue === null || D === !1) && T(E)
  }
  function T(E) {
    e.value !== !1 &&
      ((e.value = !1), a('before-hide', E), r !== void 0 ? r(E) : a('hide', E))
  }
  function g(E) {
    l.disable === !0 && E === !0
      ? l['onUpdate:modelValue'] !== void 0 && a('update:modelValue', !1)
      : (E === !0) !== e.value && (E === !0 ? m : T)(c)
  }
  he(() => l.modelValue, g),
    n !== void 0 &&
      ra(s) === !0 &&
      he(
        () => u.$route.fullPath,
        () => {
          n.value === !0 && e.value === !0 && v()
        }
      ),
    i === !0 &&
      fn(() => {
        g(l.modelValue)
      })
  const _ = { show: f, hide: v, toggle: h }
  return Object.assign(u, _), _
}
let Bt = [],
  jn = []
function oa(e) {
  jn = jn.filter((t) => t !== e)
}
function Zf(e) {
  oa(e), jn.push(e)
}
function Gi(e) {
  oa(e), jn.length === 0 && Bt.length > 0 && (Bt[Bt.length - 1](), (Bt = []))
}
function ia(e) {
  jn.length === 0 ? e() : Bt.push(e)
}
function Yf(e) {
  Bt = Bt.filter((t) => t !== e)
}
let Jf = document.body
function sa(e) {
  const t = document.createElement('div')
  if ((e !== void 0 && (t.id = e), Cr.globalNodes !== void 0)) {
    const n = Cr.globalNodes.class
    n !== void 0 && (t.className = n)
  }
  return Jf.appendChild(t), t
}
function Xf(e) {
  e.remove()
}
const Rn = []
function Gf(e) {
  for (e = e.parent; e != null; ) {
    if (e.type.name === 'QGlobalDialog') return !0
    if (e.type.name === 'QDialog' || e.type.name === 'QMenu') return !1
    e = e.parent
  }
  return !1
}
function ed(e, t, n, o) {
  const r = fe(!1)
  let i = null
  const s = {},
    l = o === !0 && Gf(e)
  function a(c) {
    if (c === !0) {
      Gi(s)
      return
    }
    r.value === !1 &&
      (l === !1 && i === null && (i = sa()),
      (r.value = !0),
      Rn.push(e.proxy),
      Zf(s))
  }
  function u() {
    Gi(s), (r.value = !1)
    const c = Rn.indexOf(e.proxy)
    c > -1 && Rn.splice(c, 1), i !== null && (Xf(i), (i = null))
  }
  return (
    Zo(u),
    Object.assign(e.proxy, { __qPortalInnerRef: t }),
    {
      showPortal: a,
      hidePortal: u,
      portalIsActive: r,
      renderPortal: () =>
        l === !0 ? n() : r.value === !0 ? [N(vc, { to: i }, n())] : void 0,
    }
  )
}
const td = {
  transitionShow: { type: String, default: 'fade' },
  transitionHide: { type: String, default: 'fade' },
  transitionDuration: { type: [String, Number], default: 300 },
}
function nd(e, t) {
  const n = fe(t.value)
  return (
    he(t, (o) => {
      qe(() => {
        n.value = o
      })
    }),
    {
      transition: O(
        () =>
          'q-transition--' +
          (n.value === !0 ? e.transitionHide : e.transitionShow)
      ),
      transitionStyle: O(
        () => `--q-transition-duration: ${e.transitionDuration}ms`
      ),
    }
  )
}
function rd() {
  let e
  return (
    Be(() => {
      e = void 0
    }),
    {
      registerTick(t) {
        ;(e = t),
          qe(() => {
            e === t && (e(), (e = void 0))
          })
      },
      removeTick() {
        e = void 0
      },
    }
  )
}
function od() {
  let e
  return (
    Be(() => {
      clearTimeout(e)
    }),
    {
      registerTimeout(t, n) {
        clearTimeout(e), (e = setTimeout(t, n))
      },
      removeTimeout() {
        clearTimeout(e)
      },
    }
  )
}
const kt = (e) => Vt(Hn(e)),
  id = (e) => Vt(e)
function Eo(e, t) {
  const n = e.style
  for (const o in t) n[o] = t[o]
}
function sd(e) {
  if (e == null) return
  if (typeof e == 'string')
    try {
      return document.querySelector(e) || void 0
    } catch {
      return
    }
  const t = Te(e) === !0 ? e.value : e
  if (t) return t.$el || t
}
const ld = [
  null,
  document,
  document.body,
  document.scrollingElement,
  document.documentElement,
]
function ad(e, t) {
  let n = sd(t)
  if (n === void 0) {
    if (e == null) return window
    n = e.closest('.scroll,.scroll-y,.overflow-auto')
  }
  return ld.includes(n) ? window : n
}
function vp(e) {
  return e === window
    ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0
    : e.scrollTop
}
function bp(e) {
  return e === window
    ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0
    : e.scrollLeft
}
let Gn
function ud() {
  if (Gn !== void 0) return Gn
  const e = document.createElement('p'),
    t = document.createElement('div')
  Eo(e, { width: '100%', height: '200px' }),
    Eo(t, {
      position: 'absolute',
      top: '0px',
      left: '0px',
      visibility: 'hidden',
      width: '200px',
      height: '150px',
      overflow: 'hidden',
    }),
    t.appendChild(e),
    document.body.appendChild(t)
  const n = e.offsetWidth
  t.style.overflow = 'scroll'
  let o = e.offsetWidth
  return n === o && (o = t.clientWidth), t.remove(), (Gn = n - o), Gn
}
function yp(e, t = !0) {
  return !e || e.nodeType !== Node.ELEMENT_NODE
    ? !1
    : t
    ? e.scrollHeight > e.clientHeight &&
      (e.classList.contains('scroll') ||
        e.classList.contains('overflow-auto') ||
        ['auto', 'scroll'].includes(window.getComputedStyle(e)['overflow-y']))
    : e.scrollWidth > e.clientWidth &&
      (e.classList.contains('scroll') ||
        e.classList.contains('overflow-auto') ||
        ['auto', 'scroll'].includes(window.getComputedStyle(e)['overflow-x']))
}
function Gt(e, t) {
  return (e !== void 0 && e()) || t
}
function _p(e, t) {
  if (e !== void 0) {
    const n = e()
    if (n != null) return n.slice()
  }
  return t
}
function wn(e, t) {
  return e !== void 0 ? t.concat(e()) : t
}
function la(e, t) {
  return e === void 0 ? t : t !== void 0 ? t.concat(e()) : e()
}
function wp(e, t, n, o, r, i) {
  t.key = o + r
  const s = N(e, t, n)
  return r === !0 ? Ll(s, i()) : s
}
let aa
const { notPassiveCapture: Er } = ot,
  Dt = []
function Sr(e) {
  clearTimeout(aa)
  const t = e.target
  if (
    t === void 0 ||
    t.nodeType === 8 ||
    t.classList.contains('no-pointer-events') === !0
  )
    return
  let n = Rn.length - 1
  for (; n >= 0; ) {
    const o = Rn[n].$
    if (o.type.name !== 'QDialog') break
    if (o.props.seamless !== !0) return
    n--
  }
  for (let o = Dt.length - 1; o >= 0; o--) {
    const r = Dt[o]
    if (
      (r.anchorEl.value === null || r.anchorEl.value.contains(t) === !1) &&
      (t === document.body ||
        (r.innerRef.value !== null && r.innerRef.value.contains(t) === !1))
    )
      (e.qClickOutside = !0), r.onClickOutside(e)
    else return
  }
}
function cd(e) {
  Dt.push(e),
    Dt.length === 1 &&
      (document.addEventListener('mousedown', Sr, Er),
      document.addEventListener('touchstart', Sr, Er))
}
function es(e) {
  const t = Dt.findIndex((n) => n === e)
  t > -1 &&
    (Dt.splice(t, 1),
    Dt.length === 0 &&
      (clearTimeout(aa),
      document.removeEventListener('mousedown', Sr, Er),
      document.removeEventListener('touchstart', Sr, Er)))
}
let ts, ns
function rs(e) {
  const t = e.split(' ')
  return t.length !== 2
    ? !1
    : ['top', 'center', 'bottom'].includes(t[0]) !== !0
    ? (console.error(
        'Anchor/Self position must start with one of top/center/bottom'
      ),
      !1)
    : ['left', 'middle', 'right', 'start', 'end'].includes(t[1]) !== !0
    ? (console.error(
        'Anchor/Self position must end with one of left/middle/right/start/end'
      ),
      !1)
    : !0
}
function fd(e) {
  return e
    ? !(e.length !== 2 || typeof e[0] != 'number' || typeof e[1] != 'number')
    : !0
}
const So = {
  'start#ltr': 'left',
  'start#rtl': 'right',
  'end#ltr': 'right',
  'end#rtl': 'left',
}
;['left', 'middle', 'right'].forEach((e) => {
  ;(So[`${e}#ltr`] = e), (So[`${e}#rtl`] = e)
})
function os(e, t) {
  const n = e.split(' ')
  return {
    vertical: n[0],
    horizontal: So[`${n[1]}#${t === !0 ? 'rtl' : 'ltr'}`],
  }
}
function dd(e, t) {
  let {
    top: n,
    left: o,
    right: r,
    bottom: i,
    width: s,
    height: l,
  } = e.getBoundingClientRect()
  return (
    t !== void 0 &&
      ((n -= t[1]),
      (o -= t[0]),
      (i += t[1]),
      (r += t[0]),
      (s += t[0]),
      (l += t[1])),
    {
      top: n,
      left: o,
      right: r,
      bottom: i,
      width: s,
      height: l,
      middle: o + (r - o) / 2,
      center: n + (i - n) / 2,
    }
  )
}
function hd(e) {
  return {
    top: 0,
    center: e.offsetHeight / 2,
    bottom: e.offsetHeight,
    left: 0,
    middle: e.offsetWidth / 2,
    right: e.offsetWidth,
  }
}
function md(e) {
  if (Ke.is.ios === !0 && window.visualViewport !== void 0) {
    const l = document.body.style,
      { offsetLeft: a, offsetTop: u } = window.visualViewport
    a !== ts && (l.setProperty('--q-pe-left', a + 'px'), (ts = a)),
      u !== ns && (l.setProperty('--q-pe-top', u + 'px'), (ns = u))
  }
  let t
  const { scrollLeft: n, scrollTop: o } = e.el
  if (e.absoluteOffset === void 0)
    t = dd(e.anchorEl, e.cover === !0 ? [0, 0] : e.offset)
  else {
    const { top: l, left: a } = e.anchorEl.getBoundingClientRect(),
      u = l + e.absoluteOffset.top,
      c = a + e.absoluteOffset.left
    t = {
      top: u,
      left: c,
      width: 1,
      height: 1,
      right: c + 1,
      center: u,
      middle: c,
      bottom: u + 1,
    }
  }
  let r = {
    maxHeight: e.maxHeight,
    maxWidth: e.maxWidth,
    visibility: 'visible',
  }
  ;(e.fit === !0 || e.cover === !0) &&
    ((r.minWidth = t.width + 'px'),
    e.cover === !0 && (r.minHeight = t.height + 'px')),
    Object.assign(e.el.style, r)
  const i = hd(e.el),
    s = {
      top: t[e.anchorOrigin.vertical] - i[e.selfOrigin.vertical],
      left: t[e.anchorOrigin.horizontal] - i[e.selfOrigin.horizontal],
    }
  pd(s, t, i, e.anchorOrigin, e.selfOrigin),
    (r = { top: s.top + 'px', left: s.left + 'px' }),
    s.maxHeight !== void 0 &&
      ((r.maxHeight = s.maxHeight + 'px'),
      t.height > s.maxHeight && (r.minHeight = r.maxHeight)),
    s.maxWidth !== void 0 &&
      ((r.maxWidth = s.maxWidth + 'px'),
      t.width > s.maxWidth && (r.minWidth = r.maxWidth)),
    Object.assign(e.el.style, r),
    e.el.scrollTop !== o && (e.el.scrollTop = o),
    e.el.scrollLeft !== n && (e.el.scrollLeft = n)
}
function pd(e, t, n, o, r) {
  const i = n.bottom,
    s = n.right,
    l = ud(),
    a = window.innerHeight - l,
    u = document.body.clientWidth
  if (e.top < 0 || e.top + i > a)
    if (r.vertical === 'center')
      (e.top = t[o.vertical] > a / 2 ? Math.max(0, a - i) : 0),
        (e.maxHeight = Math.min(i, a))
    else if (t[o.vertical] > a / 2) {
      const c = Math.min(
        a,
        o.vertical === 'center'
          ? t.center
          : o.vertical === r.vertical
          ? t.bottom
          : t.top
      )
      ;(e.maxHeight = Math.min(i, c)), (e.top = Math.max(0, c - i))
    } else
      (e.top = Math.max(
        0,
        o.vertical === 'center'
          ? t.center
          : o.vertical === r.vertical
          ? t.top
          : t.bottom
      )),
        (e.maxHeight = Math.min(i, a - e.top))
  if (e.left < 0 || e.left + s > u)
    if (((e.maxWidth = Math.min(s, u)), r.horizontal === 'middle'))
      e.left = t[o.horizontal] > u / 2 ? Math.max(0, u - s) : 0
    else if (t[o.horizontal] > u / 2) {
      const c = Math.min(
        u,
        o.horizontal === 'middle'
          ? t.middle
          : o.horizontal === r.horizontal
          ? t.right
          : t.left
      )
      ;(e.maxWidth = Math.min(s, c)), (e.left = Math.max(0, c - e.maxWidth))
    } else
      (e.left = Math.max(
        0,
        o.horizontal === 'middle'
          ? t.middle
          : o.horizontal === r.horizontal
          ? t.left
          : t.right
      )),
        (e.maxWidth = Math.min(s, u - e.left))
}
var is = kt({
  name: 'QTooltip',
  inheritAttrs: !1,
  props: Ee(ie(ie(ie({}, Vf), Kf), td), {
    maxHeight: { type: String, default: null },
    maxWidth: { type: String, default: null },
    transitionShow: { default: 'jump-down' },
    transitionHide: { default: 'jump-up' },
    anchor: { type: String, default: 'bottom middle', validator: rs },
    self: { type: String, default: 'top middle', validator: rs },
    offset: { type: Array, default: () => [14, 14], validator: fd },
    scrollTarget: { default: void 0 },
    delay: { type: Number, default: 0 },
    hideDelay: { type: Number, default: 0 },
  }),
  emits: [...Wf],
  setup(e, { slots: t, emit: n, attrs: o }) {
    let r, i
    const s = Ne(),
      {
        proxy: { $q: l },
      } = s,
      a = fe(null),
      u = fe(!1),
      c = O(() => os(e.anchor, l.lang.rtl)),
      h = O(() => os(e.self, l.lang.rtl)),
      f = O(() => e.persistent !== !0),
      { registerTick: m, removeTick: v } = rd(),
      { registerTimeout: T, removeTimeout: g } = od(),
      { transition: _, transitionStyle: E } = nd(e, u),
      {
        localScrollTarget: D,
        changeScrollEvent: H,
        unconfigureScrollTarget: Q,
      } = Uf(e, Ce),
      {
        anchorEl: y,
        canShow: x,
        anchorEvents: A,
      } = zf({ showing: u, configureAnchorEl: le }),
      { show: M, hide: B } = Qf({
        showing: u,
        canShow: x,
        handleShow: ee,
        handleHide: V,
        hideOnRouteChange: f,
        processOnMount: !0,
      })
    Object.assign(A, { delayShow: U, delayHide: L })
    const { showPortal: $, hidePortal: R, renderPortal: z } = ed(s, a, de)
    if (l.platform.is.mobile === !0) {
      const ye = {
          anchorEl: y,
          innerRef: a,
          onClickOutside(W) {
            return (
              B(W),
              W.target.classList.contains('q-dialog__backdrop') && yt(W),
              !0
            )
          },
        },
        C = O(
          () => e.modelValue === null && e.persistent !== !0 && u.value === !0
        )
      he(C, (W) => {
        ;(W === !0 ? cd : es)(ye)
      }),
        Be(() => {
          es(ye)
        })
    }
    function ee(ye) {
      v(),
        g(),
        $(),
        m(() => {
          ;(i = new MutationObserver(() => w())),
            i.observe(a.value, {
              attributes: !1,
              childList: !0,
              characterData: !0,
              subtree: !0,
            }),
            w(),
            Ce()
        }),
        r === void 0 &&
          (r = he(
            () =>
              l.screen.width +
              '|' +
              l.screen.height +
              '|' +
              e.self +
              '|' +
              e.anchor +
              '|' +
              l.lang.rtl,
            w
          )),
        T(() => {
          $(!0), n('show', ye)
        }, e.transitionDuration)
    }
    function V(ye) {
      v(),
        g(),
        Y(),
        T(() => {
          R(), n('hide', ye)
        }, e.transitionDuration)
    }
    function Y() {
      i !== void 0 && (i.disconnect(), (i = void 0)),
        r !== void 0 && (r(), (r = void 0)),
        Q(),
        _r(A, 'tooltipTemp')
    }
    function w() {
      const ye = a.value
      y.value === null ||
        !ye ||
        md({
          el: ye,
          offset: e.offset,
          anchorEl: y.value,
          anchorOrigin: c.value,
          selfOrigin: h.value,
          maxHeight: e.maxHeight,
          maxWidth: e.maxWidth,
        })
    }
    function U(ye) {
      if (l.platform.is.mobile === !0) {
        Co(), document.body.classList.add('non-selectable')
        const C = y.value,
          W = ['touchmove', 'touchcancel', 'touchend', 'click'].map((I) => [
            C,
            I,
            'delayHide',
            'passiveCapture',
          ])
        Nn(A, 'tooltipTemp', W)
      }
      T(() => {
        M(ye)
      }, e.delay)
    }
    function L(ye) {
      g(),
        l.platform.is.mobile === !0 &&
          (_r(A, 'tooltipTemp'),
          Co(),
          setTimeout(() => {
            document.body.classList.remove('non-selectable')
          }, 10)),
        T(() => {
          B(ye)
        }, e.hideDelay)
    }
    function le() {
      if (e.noParentEvent === !0 || y.value === null) return
      const ye =
        l.platform.is.mobile === !0
          ? [[y.value, 'touchstart', 'delayShow', 'passive']]
          : [
              [y.value, 'mouseenter', 'delayShow', 'passive'],
              [y.value, 'mouseleave', 'delayHide', 'passive'],
            ]
      Nn(A, 'anchor', ye)
    }
    function Ce() {
      if (y.value !== null || e.scrollTarget !== void 0) {
        D.value = ad(y.value, e.scrollTarget)
        const ye = e.noParentEvent === !0 ? w : B
        H(D.value, ye)
      }
    }
    function xe() {
      return u.value === !0
        ? N(
            'div',
            Ee(ie({}, o), {
              ref: a,
              class: [
                'q-tooltip q-tooltip--style q-position-engine no-pointer-events',
                o.class,
              ],
              style: [o.style, E.value],
              role: 'complementary',
            }),
            Gt(t.default)
          )
        : null
    }
    function de() {
      return N(zn, { name: _.value, appear: !0 }, xe)
    }
    return Be(Y), Object.assign(s.proxy, { updatePosition: w }), z
  },
})
const ko = { xs: 18, sm: 24, md: 32, lg: 38, xl: 46 },
  Vr = { size: String }
function zr(e, t = ko) {
  return O(() =>
    e.size !== void 0
      ? { fontSize: e.size in t ? `${t[e.size]}px` : e.size }
      : null
  )
}
const ss = '0 0 24 24',
  ls = (e) => e,
  eo = (e) => `ionicons ${e}`,
  ua = {
    'mdi-': (e) => `mdi ${e}`,
    'icon-': ls,
    'bt-': (e) => `bt ${e}`,
    'eva-': (e) => `eva ${e}`,
    'ion-md': eo,
    'ion-ios': eo,
    'ion-logo': eo,
    'iconfont ': ls,
    'ti-': (e) => `themify-icon ${e}`,
    'bi-': (e) => `bootstrap-icons ${e}`,
  },
  ca = { o_: '-outlined', r_: '-round', s_: '-sharp' },
  gd = new RegExp('^(' + Object.keys(ua).join('|') + ')'),
  vd = new RegExp('^(' + Object.keys(ca).join('|') + ')'),
  bd = /^[Mm]\s?[-+]?\.?\d/,
  yd = /^img:/,
  _d = /^svguse:/,
  wd = /^ion-/,
  xd = /^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /
var sn = kt({
  name: 'QIcon',
  props: Ee(ie({}, Vr), {
    tag: { type: String, default: 'i' },
    name: String,
    color: String,
    left: Boolean,
    right: Boolean,
  }),
  setup(e, { slots: t }) {
    const {
        proxy: { $q: n },
      } = Ne(),
      o = zr(e),
      r = O(
        () =>
          'q-icon' +
          (e.left === !0 ? ' on-left' : '') +
          (e.right === !0 ? ' on-right' : '') +
          (e.color !== void 0 ? ` text-${e.color}` : '')
      ),
      i = O(() => {
        let s,
          l = e.name
        if (l === 'none' || !l) return { none: !0 }
        if (n.iconMapFn !== null) {
          const c = n.iconMapFn(l)
          if (c !== void 0)
            if (c.icon !== void 0) {
              if (((l = c.icon), l === 'none' || !l)) return { none: !0 }
            } else
              return {
                cls: c.cls,
                content: c.content !== void 0 ? c.content : ' ',
              }
        }
        if (bd.test(l) === !0) {
          const [c, h = ss] = l.split('|')
          return {
            svg: !0,
            viewBox: h,
            nodes: c.split('&&').map((f) => {
              const [m, v, T] = f.split('@@')
              return N('path', { style: v, d: m, transform: T })
            }),
          }
        }
        if (yd.test(l) === !0) return { img: !0, src: l.substring(4) }
        if (_d.test(l) === !0) {
          const [c, h = ss] = l.split('|')
          return { svguse: !0, src: c.substring(7), viewBox: h }
        }
        let a = ' '
        const u = l.match(gd)
        if (u !== null) s = ua[u[1]](l)
        else if (xd.test(l) === !0) s = l
        else if (wd.test(l) === !0)
          s = `ionicons ion-${
            n.platform.is.ios === !0 ? 'ios' : 'md'
          }${l.substr(3)}`
        else {
          s = 'notranslate material-icons'
          const c = l.match(vd)
          c !== null && ((l = l.substring(2)), (s += ca[c[1]])), (a = l)
        }
        return { cls: s, content: a }
      })
    return () => {
      const s = {
        class: r.value,
        style: o.value,
        'aria-hidden': 'true',
        role: 'presentation',
      }
      return i.value.none === !0
        ? N(e.tag, s, Gt(t.default))
        : i.value.img === !0
        ? N('span', s, wn(t.default, [N('img', { src: i.value.src })]))
        : i.value.svg === !0
        ? N(
            'span',
            s,
            wn(t.default, [
              N('svg', { viewBox: i.value.viewBox }, i.value.nodes),
            ])
          )
        : i.value.svguse === !0
        ? N(
            'span',
            s,
            wn(t.default, [
              N('svg', { viewBox: i.value.viewBox }, [
                N('use', { 'xlink:href': i.value.src }),
              ]),
            ])
          )
        : (i.value.cls !== void 0 && (s.class += ' ' + i.value.cls),
          N(e.tag, s, wn(t.default, [i.value.content])))
    }
  },
})
const Cd = { size: { type: [Number, String], default: '1em' }, color: String }
function Ed(e) {
  return {
    cSize: O(() => (e.size in ko ? `${ko[e.size]}px` : e.size)),
    classes: O(() => 'q-spinner' + (e.color ? ` text-${e.color}` : '')),
  }
}
var ni = kt({
  name: 'QSpinner',
  props: Ee(ie({}, Cd), { thickness: { type: Number, default: 5 } }),
  setup(e) {
    const { cSize: t, classes: n } = Ed(e)
    return () =>
      N(
        'svg',
        {
          class: n.value + ' q-spinner-mat',
          width: t.value,
          height: t.value,
          viewBox: '25 25 50 50',
        },
        [
          N('circle', {
            class: 'path',
            cx: '50',
            cy: '50',
            r: '20',
            fill: 'none',
            stroke: 'currentColor',
            'stroke-width': e.thickness,
            'stroke-miterlimit': '10',
          }),
        ]
      )
  },
})
function Sd(e, t = 250) {
  let n = !1,
    o
  return function () {
    return (
      n === !1 &&
        ((n = !0),
        setTimeout(() => {
          n = !1
        }, t),
        (o = e.apply(this, arguments))),
      o
    )
  }
}
function as(e, t, n, o) {
  n.modifiers.stop === !0 && yr(e)
  const r = n.modifiers.color
  let i = n.modifiers.center
  i = i === !0 || o === !0
  const s = document.createElement('span'),
    l = document.createElement('span'),
    a = xf(e),
    { left: u, top: c, width: h, height: f } = t.getBoundingClientRect(),
    m = Math.sqrt(h * h + f * f),
    v = m / 2,
    T = `${(h - m) / 2}px`,
    g = i ? T : `${a.left - u - v}px`,
    _ = `${(f - m) / 2}px`,
    E = i ? _ : `${a.top - c - v}px`
  ;(l.className = 'q-ripple__inner'),
    Eo(l, {
      height: `${m}px`,
      width: `${m}px`,
      transform: `translate3d(${g},${E},0) scale3d(.2,.2,1)`,
      opacity: 0,
    }),
    (s.className = `q-ripple${r ? ' text-' + r : ''}`),
    s.setAttribute('dir', 'ltr'),
    s.appendChild(l),
    t.appendChild(s)
  const D = () => {
    s.remove(), clearTimeout(H)
  }
  n.abort.push(D)
  let H = setTimeout(() => {
    l.classList.add('q-ripple__inner--enter'),
      (l.style.transform = `translate3d(${T},${_},0) scale3d(1,1,1)`),
      (l.style.opacity = 0.2),
      (H = setTimeout(() => {
        l.classList.remove('q-ripple__inner--enter'),
          l.classList.add('q-ripple__inner--leave'),
          (l.style.opacity = 0),
          (H = setTimeout(() => {
            s.remove(), n.abort.splice(n.abort.indexOf(D), 1)
          }, 275))
      }, 250))
  }, 50)
}
function us(e, { modifiers: t, value: n, arg: o, instance: r }) {
  const i = Object.assign({}, r.$q.config.ripple, t, n)
  e.modifiers = {
    early: i.early === !0,
    stop: i.stop === !0,
    center: i.center === !0,
    color: i.color || o,
    keyCodes: [].concat(i.keyCodes || 13),
  }
}
var kd = id({
  name: 'ripple',
  beforeMount(e, t) {
    const n = {
      enabled: t.value !== !1,
      modifiers: {},
      abort: [],
      start(o) {
        n.enabled === !0 &&
          o.qSkipRipple !== !0 &&
          (n.modifiers.early === !0
            ? ['mousedown', 'touchstart'].includes(o.type) === !0
            : o.type === 'click') &&
          as(o, e, n, o.qKeyEvent === !0)
      },
      keystart: Sd((o) => {
        n.enabled === !0 &&
          o.qSkipRipple !== !0 &&
          wr(o, n.modifiers.keyCodes) === !0 &&
          o.type === `key${n.modifiers.early === !0 ? 'down' : 'up'}` &&
          as(o, e, n, !0)
      }, 300),
    }
    us(n, t),
      (e.__qripple = n),
      Nn(n, 'main', [
        [e, 'mousedown', 'start', 'passive'],
        [e, 'touchstart', 'start', 'passive'],
        [e, 'click', 'start', 'passive'],
        [e, 'keydown', 'keystart', 'passive'],
        [e, 'keyup', 'keystart', 'passive'],
      ])
  },
  updated(e, t) {
    if (t.oldValue !== t.value) {
      const n = e.__qripple
      ;(n.enabled = t.value !== !1),
        n.enabled === !0 && Object(t.value) === t.value && us(n, t)
    }
  },
  beforeUnmount(e) {
    const t = e.__qripple
    t.abort.forEach((n) => {
      n()
    }),
      _r(t, 'main'),
      delete e._qripple
  },
})
const fa = {
    left: 'start',
    center: 'center',
    right: 'end',
    between: 'between',
    around: 'around',
    evenly: 'evenly',
    stretch: 'stretch',
  },
  Rd = Object.keys(fa),
  Td = { align: { type: String, validator: (e) => Rd.includes(e) } }
function Pd(e) {
  return O(() => {
    const t =
      e.align === void 0 ? (e.vertical === !0 ? 'stretch' : 'left') : e.align
    return `${e.vertical === !0 ? 'items' : 'justify'}-${fa[t]}`
  })
}
function cs(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
function fs(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function Ad(e, t) {
  for (const n in t) {
    const o = t[n],
      r = e[n]
    if (typeof o == 'string') {
      if (o !== r) return !1
    } else if (
      Array.isArray(r) === !1 ||
      r.length !== o.length ||
      o.some((i, s) => i !== r[s])
    )
      return !1
  }
  return !0
}
function ds(e, t) {
  return Array.isArray(t) === !0
    ? e.length === t.length && e.every((n, o) => n === t[o])
    : e.length === 1 && e[0] === t
}
function Md(e, t) {
  return Array.isArray(e) === !0
    ? ds(e, t)
    : Array.isArray(t) === !0
    ? ds(t, e)
    : e === t
}
function Od(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (Md(e[n], t[n]) === !1) return !1
  return !0
}
const $d = {
  to: [String, Object],
  replace: Boolean,
  exact: Boolean,
  activeClass: { type: String, default: 'q-router-link--active' },
  exactActiveClass: { type: String, default: 'q-router-link--exact-active' },
  href: String,
  target: String,
  disable: Boolean,
}
function Ld(e) {
  const t = Ne(),
    { props: n, proxy: o } = t,
    r = ra(t),
    i = O(() => n.disable !== !0 && n.href !== void 0),
    s = O(
      () =>
        r === !0 &&
        n.disable !== !0 &&
        i.value !== !0 &&
        n.to !== void 0 &&
        n.to !== null &&
        n.to !== ''
    ),
    l = O(() => {
      if (s.value === !0)
        try {
          return o.$router.resolve(n.to)
        } catch {}
      return null
    }),
    a = O(() => l.value !== null),
    u = O(() => i.value === !0 || a.value === !0),
    c = O(() => (n.type === 'a' || u.value === !0 ? 'a' : n.tag || e || 'div')),
    h = O(() =>
      i.value === !0
        ? { href: n.href, target: n.target }
        : a.value === !0
        ? { href: l.value.href, target: n.target }
        : {}
    ),
    f = O(() => {
      if (a.value === !1) return null
      const { matched: _ } = l.value,
        { length: E } = _,
        D = _[E - 1]
      if (D === void 0) return -1
      const H = o.$route.matched
      if (H.length === 0) return -1
      const Q = H.findIndex(fs.bind(null, D))
      if (Q > -1) return Q
      const y = cs(_[E - 2])
      return E > 1 && cs(D) === y && H[H.length - 1].path !== y
        ? H.findIndex(fs.bind(null, _[E - 2]))
        : Q
    }),
    m = O(
      () =>
        a.value === !0 && f.value > -1 && Ad(o.$route.params, l.value.params)
    ),
    v = O(
      () =>
        m.value === !0 &&
        f.value === o.$route.matched.length - 1 &&
        Od(o.$route.params, l.value.params)
    ),
    T = O(() =>
      a.value === !0
        ? v.value === !0
          ? ` ${n.exactActiveClass} ${n.activeClass}`
          : n.exact === !0
          ? ''
          : m.value === !0
          ? ` ${n.activeClass}`
          : ''
        : ''
    )
  function g(_) {
    return n.disable === !0 ||
      _.metaKey ||
      _.altKey ||
      _.ctrlKey ||
      _.shiftKey ||
      (_.__qNavigate !== !0 && _.defaultPrevented === !0) ||
      (_.button !== void 0 && _.button !== 0) ||
      n.target === '_blank'
      ? !1
      : (nt(_),
        o.$router[n.replace === !0 ? 'replace' : 'push'](n.to).catch((E) => E))
  }
  return {
    hasRouterLink: a,
    hasHrefLink: i,
    hasLink: u,
    linkTag: c,
    linkRoute: l,
    linkIsActive: m,
    linkIsExactActive: v,
    linkClass: T,
    linkProps: h,
    navigateToRouterLink: g,
  }
}
const hs = { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
  Fd = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 },
  qd = ['button', 'submit', 'reset'],
  Bd = /[^\s]\/[^\s]/,
  Nd = Ee(ie(ie({}, Vr), $d), {
    type: { type: String, default: 'button' },
    label: [Number, String],
    icon: String,
    iconRight: String,
    round: Boolean,
    outline: Boolean,
    flat: Boolean,
    unelevated: Boolean,
    rounded: Boolean,
    push: Boolean,
    glossy: Boolean,
    size: String,
    fab: Boolean,
    fabMini: Boolean,
    padding: String,
    color: String,
    textColor: String,
    noCaps: Boolean,
    noWrap: Boolean,
    dense: Boolean,
    tabindex: [Number, String],
    ripple: { type: [Boolean, Object], default: !0 },
    align: Ee(ie({}, Td.align), { default: 'center' }),
    stack: Boolean,
    stretch: Boolean,
    loading: { type: Boolean, default: null },
    disable: Boolean,
  })
function Id(e) {
  const t = zr(e, Fd),
    n = Pd(e),
    {
      hasRouterLink: o,
      hasLink: r,
      linkTag: i,
      linkProps: s,
      navigateToRouterLink: l,
    } = Ld('button'),
    a = O(() => {
      const g = e.fab === !1 && e.fabMini === !1 ? t.value : {}
      return e.padding !== void 0
        ? Object.assign({}, g, {
            padding: e.padding
              .split(/\s+/)
              .map((_) => (_ in hs ? hs[_] + 'px' : _))
              .join(' '),
            minWidth: '0',
            minHeight: '0',
          })
        : g
    }),
    u = O(() => e.rounded === !0 || e.fab === !0 || e.fabMini === !0),
    c = O(() => e.disable !== !0 && e.loading !== !0),
    h = O(() => (c.value === !0 ? e.tabindex || 0 : -1)),
    f = O(() =>
      e.flat === !0
        ? 'flat'
        : e.outline === !0
        ? 'outline'
        : e.push === !0
        ? 'push'
        : e.unelevated === !0
        ? 'unelevated'
        : 'standard'
    ),
    m = O(() => {
      const g = { tabindex: h.value }
      return (
        r.value === !0
          ? Object.assign(g, s.value)
          : qd.includes(e.type) === !0 && (g.type = e.type),
        i.value === 'a'
          ? (e.disable === !0
              ? (g['aria-disabled'] = 'true')
              : g.href === void 0 && (g.role = 'button'),
            o.value !== !0 && Bd.test(e.type) === !0 && (g.type = e.type))
          : e.disable === !0 &&
            ((g.disabled = ''), (g['aria-disabled'] = 'true')),
        e.loading === !0 &&
          e.percentage !== void 0 &&
          Object.assign(g, {
            role: 'progressbar',
            'aria-valuemin': 0,
            'aria-valuemax': 100,
            'aria-valuenow': e.percentage,
          }),
        g
      )
    }),
    v = O(() => {
      let g
      return (
        e.color !== void 0
          ? e.flat === !0 || e.outline === !0
            ? (g = `text-${e.textColor || e.color}`)
            : (g = `bg-${e.color} text-${e.textColor || 'white'}`)
          : e.textColor && (g = `text-${e.textColor}`),
        `q-btn--${f.value} q-btn--${
          e.round === !0
            ? 'round'
            : `rectangle${u.value === !0 ? ' q-btn--rounded' : ''}`
        }` +
          (g !== void 0 ? ' ' + g : '') +
          (c.value === !0
            ? ' q-btn--actionable q-focusable q-hoverable'
            : e.disable === !0
            ? ' disabled'
            : '') +
          (e.fab === !0
            ? ' q-btn--fab'
            : e.fabMini === !0
            ? ' q-btn--fab-mini'
            : '') +
          (e.noCaps === !0 ? ' q-btn--no-uppercase' : '') +
          (e.dense === !0 ? ' q-btn--dense' : '') +
          (e.stretch === !0 ? ' no-border-radius self-stretch' : '') +
          (e.glossy === !0 ? ' glossy' : '')
      )
    }),
    T = O(
      () =>
        n.value +
        (e.stack === !0 ? ' column' : ' row') +
        (e.noWrap === !0 ? ' no-wrap text-no-wrap' : '') +
        (e.loading === !0 ? ' q-btn__content--hidden' : '')
    )
  return {
    classes: v,
    style: a,
    innerClasses: T,
    attributes: m,
    hasRouterLink: o,
    hasLink: r,
    linkTag: i,
    navigateToRouterLink: l,
    isActionable: c,
  }
}
const { passiveCapture: Ue } = ot
let Ut = null,
  Kt = null,
  Wt = null
var da = kt({
  name: 'QBtn',
  props: Ee(ie({}, Nd), { percentage: Number, darkPercentage: Boolean }),
  emits: ['click', 'keydown', 'touchstart', 'mousedown', 'keyup'],
  setup(e, { slots: t, emit: n }) {
    const { proxy: o } = Ne(),
      {
        classes: r,
        style: i,
        innerClasses: s,
        attributes: l,
        hasRouterLink: a,
        hasLink: u,
        linkTag: c,
        navigateToRouterLink: h,
        isActionable: f,
      } = Id(e),
      m = fe(null),
      v = fe(null)
    let T = null,
      g,
      _
    const E = O(() => e.label !== void 0 && e.label !== null && e.label !== ''),
      D = O(() =>
        e.disable === !0 || e.ripple === !1
          ? !1
          : ie(
              { keyCodes: u.value === !0 ? [13, 32] : [13] },
              e.ripple === !0 ? {} : e.ripple
            )
      ),
      H = O(() => ({ center: e.round })),
      Q = O(() => {
        const V = Math.max(0, Math.min(100, e.percentage))
        return V > 0
          ? {
              transition: 'transform 0.6s',
              transform: `translateX(${V - 100}%)`,
            }
          : {}
      }),
      y = O(() =>
        e.loading === !0
          ? {
              onMousedown: ee,
              onTouchstartPassive: ee,
              onClick: ee,
              onKeydown: ee,
              onKeyup: ee,
            }
          : f.value === !0
          ? { onClick: A, onKeydown: M, onMousedown: $, onTouchstart: B }
          : { onClick: yt }
      ),
      x = O(() =>
        ie(
          ie(
            {
              ref: m,
              class: 'q-btn q-btn-item non-selectable no-outline ' + r.value,
              style: i.value,
            },
            l.value
          ),
          y.value
        )
      )
    function A(V) {
      if (m.value !== null) {
        if (V !== void 0) {
          if (V.defaultPrevented === !0) return
          const Y = document.activeElement
          if (
            e.type === 'submit' &&
            Y !== document.body &&
            m.value.contains(Y) === !1 &&
            Y.contains(m.value) === !1
          ) {
            m.value.focus()
            const w = () => {
              document.removeEventListener('keydown', yt, !0),
                document.removeEventListener('keyup', w, Ue),
                m.value !== null && m.value.removeEventListener('blur', w, Ue)
            }
            document.addEventListener('keydown', yt, !0),
              document.addEventListener('keyup', w, Ue),
              m.value.addEventListener('blur', w, Ue)
          }
        }
        if (a.value === !0) {
          const Y = () => {
            ;(V.__qNavigate = !0), h(V)
          }
          n('click', V, Y), V.defaultPrevented !== !0 && Y()
        } else n('click', V)
      }
    }
    function M(V) {
      m.value !== null &&
        (n('keydown', V),
        wr(V, [13, 32]) === !0 &&
          Kt !== m.value &&
          (Kt !== null && z(),
          V.defaultPrevented !== !0 &&
            (m.value.focus(),
            (Kt = m.value),
            m.value.classList.add('q-btn--active'),
            document.addEventListener('keyup', R, !0),
            m.value.addEventListener('blur', R, Ue)),
          yt(V)))
    }
    function B(V) {
      m.value !== null &&
        (n('touchstart', V),
        V.defaultPrevented !== !0 &&
          (Ut !== m.value &&
            (Ut !== null && z(),
            (Ut = m.value),
            (T = V.target),
            T.addEventListener('touchcancel', R, Ue),
            T.addEventListener('touchend', R, Ue)),
          (g = !0),
          clearTimeout(_),
          (_ = setTimeout(() => {
            g = !1
          }, 200))))
    }
    function $(V) {
      m.value !== null &&
        ((V.qSkipRipple = g === !0),
        n('mousedown', V),
        V.defaultPrevented !== !0 &&
          Wt !== m.value &&
          (Wt !== null && z(),
          (Wt = m.value),
          m.value.classList.add('q-btn--active'),
          document.addEventListener('mouseup', R, Ue)))
    }
    function R(V) {
      if (
        m.value !== null &&
        !(
          V !== void 0 &&
          V.type === 'blur' &&
          document.activeElement === m.value
        )
      ) {
        if (V !== void 0 && V.type === 'keyup') {
          if (Kt === m.value && wr(V, [13, 32]) === !0) {
            const Y = new MouseEvent('click', V)
            ;(Y.qKeyEvent = !0),
              V.defaultPrevented === !0 && nt(Y),
              V.cancelBubble === !0 && yr(Y),
              m.value.dispatchEvent(Y),
              yt(V),
              (V.qKeyEvent = !0)
          }
          n('keyup', V)
        }
        z()
      }
    }
    function z(V) {
      const Y = v.value
      V !== !0 &&
        (Ut === m.value || Wt === m.value) &&
        Y !== null &&
        Y !== document.activeElement &&
        (Y.setAttribute('tabindex', -1), Y.focus()),
        Ut === m.value &&
          (T !== null &&
            (T.removeEventListener('touchcancel', R, Ue),
            T.removeEventListener('touchend', R, Ue)),
          (Ut = T = null)),
        Wt === m.value &&
          (document.removeEventListener('mouseup', R, Ue), (Wt = null)),
        Kt === m.value &&
          (document.removeEventListener('keyup', R, !0),
          m.value !== null && m.value.removeEventListener('blur', R, Ue),
          (Kt = null)),
        m.value !== null && m.value.classList.remove('q-btn--active')
    }
    function ee(V) {
      yt(V), (V.qSkipRipple = !0)
    }
    return (
      Be(() => {
        z(!0)
      }),
      Object.assign(o, { click: A }),
      () => {
        let V = []
        e.icon !== void 0 &&
          V.push(
            N(sn, {
              name: e.icon,
              left: e.stack === !1 && E.value === !0,
              role: 'img',
              'aria-hidden': 'true',
            })
          ),
          E.value === !0 && V.push(N('span', { class: 'block' }, [e.label])),
          (V = wn(t.default, V)),
          e.iconRight !== void 0 &&
            e.round === !1 &&
            V.push(
              N(sn, {
                name: e.iconRight,
                right: e.stack === !1 && E.value === !0,
                role: 'img',
                'aria-hidden': 'true',
              })
            )
        const Y = [N('span', { class: 'q-focus-helper', ref: v })]
        return (
          e.loading === !0 &&
            e.percentage !== void 0 &&
            Y.push(
              N(
                'span',
                { class: 'q-btn__progress absolute-full overflow-hidden' },
                [
                  N('span', {
                    class:
                      'q-btn__progress-indicator fit block' +
                      (e.darkPercentage === !0 ? ' q-btn__progress--dark' : ''),
                    style: Q.value,
                  }),
                ]
              )
            ),
          Y.push(
            N(
              'span',
              {
                class:
                  'q-btn__content text-center col items-center q-anchor--skip ' +
                  s.value,
              },
              V
            )
          ),
          e.loading !== null &&
            Y.push(
              N(zn, { name: 'q-transition--fade' }, () =>
                e.loading === !0
                  ? [
                      N(
                        'span',
                        {
                          key: 'loading',
                          class: 'absolute-full flex flex-center',
                        },
                        t.loading !== void 0 ? t.loading() : [N(ni)]
                      ),
                    ]
                  : null
              )
            ),
          Ll(N(c.value, x.value, Y), [[kd, D.value, void 0, H.value]])
        )
      }
    )
  },
})
const jd = { dark: { type: Boolean, default: null } }
function Dd(e, t) {
  return O(() => (e.dark === null ? t.dark.isActive : e.dark))
}
function Hd({ validate: e, resetValidation: t, requiresQForm: n }) {
  const o = ut(Bf, !1)
  if (o !== !1) {
    const { props: r, proxy: i } = Ne()
    Object.assign(i, { validate: e, resetValidation: t }),
      he(
        () => r.disable,
        (s) => {
          s === !0
            ? (typeof t == 'function' && t(), o.unbindComponent(i))
            : o.bindComponent(i)
        }
      ),
      r.disable !== !0 && o.bindComponent(i),
      Be(() => {
        r.disable !== !0 && o.unbindComponent(i)
      })
  } else n === !0 && console.error('Parent QForm not found on useFormChild()!')
}
const ms = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,
  ps = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,
  gs = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,
  er =
    /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,
  tr =
    /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,
  vs = {
    date: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),
    time: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),
    fulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),
    timeOrFulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),
    hexColor: (e) => ms.test(e),
    hexaColor: (e) => ps.test(e),
    hexOrHexaColor: (e) => gs.test(e),
    rgbColor: (e) => er.test(e),
    rgbaColor: (e) => tr.test(e),
    rgbOrRgbaColor: (e) => er.test(e) || tr.test(e),
    hexOrRgbColor: (e) => ms.test(e) || er.test(e),
    hexaOrRgbaColor: (e) => ps.test(e) || tr.test(e),
    anyColor: (e) => gs.test(e) || er.test(e) || tr.test(e),
  },
  Vd = {}
'Boolean Number String Function Array Date RegExp Object'
  .split(' ')
  .forEach((e) => {
    Vd['[object ' + e + ']'] = e.toLowerCase()
  })
const zd = Ee(ie({}, Vr), {
  min: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
  color: String,
  centerColor: String,
  trackColor: String,
  fontSize: String,
  thickness: { type: Number, default: 0.2, validator: (e) => e >= 0 && e <= 1 },
  angle: { type: Number, default: 0 },
  showValue: Boolean,
  reverse: Boolean,
  instantFeedback: Boolean,
})
function Ud(e, t, n) {
  return n <= t ? t : Math.min(n, Math.max(t, e))
}
const Ro = 50,
  ha = 2 * Ro,
  ma = ha * Math.PI,
  Kd = Math.round(ma * 1e3) / 1e3
kt({
  name: 'QCircularProgress',
  props: Ee(ie({}, zd), {
    value: { type: Number, default: 0 },
    animationSpeed: { type: [String, Number], default: 600 },
    indeterminate: Boolean,
  }),
  setup(e, { slots: t }) {
    const {
        proxy: { $q: n },
      } = Ne(),
      o = zr(e),
      r = O(() => {
        const f = (n.lang.rtl === !0 ? -1 : 1) * e.angle
        return {
          transform:
            e.reverse !== (n.lang.rtl === !0)
              ? `scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90 - f}deg)`
              : `rotate3d(0, 0, 1, ${f - 90}deg)`,
        }
      }),
      i = O(() =>
        e.instantFeedback !== !0 && e.indeterminate !== !0
          ? {
              transition: `stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`,
            }
          : ''
      ),
      s = O(() => ha / (1 - e.thickness / 2)),
      l = O(() => `${s.value / 2} ${s.value / 2} ${s.value} ${s.value}`),
      a = O(() => Ud(e.value, e.min, e.max)),
      u = O(() => ma * (1 - (a.value - e.min) / (e.max - e.min))),
      c = O(() => (e.thickness / 2) * s.value)
    function h({ thickness: f, offset: m, color: v, cls: T }) {
      return N('circle', {
        class: 'q-circular-progress__' + T + (v !== void 0 ? ` text-${v}` : ''),
        style: i.value,
        fill: 'transparent',
        stroke: 'currentColor',
        'stroke-width': f,
        'stroke-dasharray': Kd,
        'stroke-dashoffset': m,
        cx: s.value,
        cy: s.value,
        r: Ro,
      })
    }
    return () => {
      const f = []
      e.centerColor !== void 0 &&
        e.centerColor !== 'transparent' &&
        f.push(
          N('circle', {
            class: `q-circular-progress__center text-${e.centerColor}`,
            fill: 'currentColor',
            r: Ro - c.value / 2,
            cx: s.value,
            cy: s.value,
          })
        ),
        e.trackColor !== void 0 &&
          e.trackColor !== 'transparent' &&
          f.push(
            h({
              cls: 'track',
              thickness: c.value,
              offset: 0,
              color: e.trackColor,
            })
          ),
        f.push(
          h({
            cls: 'circle',
            thickness: c.value,
            offset: u.value,
            color: e.color,
          })
        )
      const m = [
        N(
          'svg',
          {
            class: 'q-circular-progress__svg',
            style: r.value,
            viewBox: l.value,
            'aria-hidden': 'true',
          },
          f
        ),
      ]
      return (
        e.showValue === !0 &&
          m.push(
            N(
              'div',
              {
                class:
                  'q-circular-progress__text absolute-full row flex-center content-center',
                style: { fontSize: e.fontSize },
              },
              t.default !== void 0 ? t.default() : [N('div', a.value)]
            )
          ),
        N(
          'div',
          {
            class: `q-circular-progress q-circular-progress--${
              e.indeterminate === !0 ? 'in' : ''
            }determinate`,
            style: o.value,
            role: 'progressbar',
            'aria-valuemin': e.min,
            'aria-valuemax': e.max,
            'aria-valuenow': e.indeterminate === !0 ? void 0 : a.value,
          },
          la(t.internal, m)
        )
      )
    }
  },
})
const Wd = ['rejected'],
  Qd = [...Wd, 'start', 'finish', 'added', 'removed'],
  Zd = () => !0
function Yd(e) {
  const t = {}
  return (
    e.forEach((n) => {
      t[n] = Zd
    }),
    t
  )
}
Yd(Qd)
let to,
  nr = 0
const Oe = new Array(256)
for (let e = 0; e < 256; e++) Oe[e] = (e + 256).toString(16).substr(1)
const Jd = (() => {
    const e =
      typeof crypto != 'undefined'
        ? crypto
        : typeof window != 'undefined'
        ? window.crypto || window.msCrypto
        : void 0
    if (e !== void 0) {
      if (e.randomBytes !== void 0) return e.randomBytes
      if (e.getRandomValues !== void 0)
        return (t) => {
          const n = new Uint8Array(t)
          return e.getRandomValues(n), n
        }
    }
    return (t) => {
      const n = []
      for (let o = t; o > 0; o--) n.push(Math.floor(Math.random() * 256))
      return n
    }
  })(),
  bs = 4096
function Xd() {
  ;(to === void 0 || nr + 16 > bs) && ((nr = 0), (to = Jd(bs)))
  const e = Array.prototype.slice.call(to, nr, (nr += 16))
  return (
    (e[6] = (e[6] & 15) | 64),
    (e[8] = (e[8] & 63) | 128),
    Oe[e[0]] +
      Oe[e[1]] +
      Oe[e[2]] +
      Oe[e[3]] +
      '-' +
      Oe[e[4]] +
      Oe[e[5]] +
      '-' +
      Oe[e[6]] +
      Oe[e[7]] +
      '-' +
      Oe[e[8]] +
      Oe[e[9]] +
      '-' +
      Oe[e[10]] +
      Oe[e[11]] +
      Oe[e[12]] +
      Oe[e[13]] +
      Oe[e[14]] +
      Oe[e[15]]
  )
}
const Gd = [!0, !1, 'ondemand'],
  eh = {
    modelValue: {},
    error: { type: Boolean, default: null },
    errorMessage: String,
    noErrorIcon: Boolean,
    rules: Array,
    reactiveRules: Boolean,
    lazyRules: { type: [Boolean, String], validator: (e) => Gd.includes(e) },
  }
function th(e, t) {
  const { props: n, proxy: o } = Ne(),
    r = fe(!1),
    i = fe(null),
    s = fe(null)
  Hd({ validate: v, resetValidation: m })
  let l = 0,
    a
  const u = O(
      () => n.rules !== void 0 && n.rules !== null && n.rules.length > 0
    ),
    c = O(() => n.disable !== !0 && u.value === !0),
    h = O(() => n.error === !0 || r.value === !0),
    f = O(() =>
      typeof n.errorMessage == 'string' && n.errorMessage.length > 0
        ? n.errorMessage
        : i.value
    )
  he(
    () => n.modelValue,
    () => {
      T()
    }
  ),
    he(
      () => n.reactiveRules,
      (_) => {
        _ === !0
          ? a === void 0 &&
            (a = he(
              () => n.rules,
              () => {
                T(!0)
              }
            ))
          : a !== void 0 && (a(), (a = void 0))
      },
      { immediate: !0 }
    ),
    he(e, (_) => {
      _ === !0
        ? s.value === null && (s.value = !1)
        : s.value === !1 &&
          ((s.value = !0),
          c.value === !0 && n.lazyRules !== 'ondemand' && t.value === !1 && g())
    })
  function m() {
    l++,
      (t.value = !1),
      (s.value = null),
      (r.value = !1),
      (i.value = null),
      g.cancel()
  }
  function v(_ = n.modelValue) {
    if (c.value !== !0) return !0
    const E = ++l
    t.value !== !0 && n.lazyRules !== !0 && (s.value = !0)
    const D = (Q, y) => {
        r.value !== Q && (r.value = Q)
        const x = y || void 0
        i.value !== x && (i.value = x), (t.value = !1)
      },
      H = []
    for (let Q = 0; Q < n.rules.length; Q++) {
      const y = n.rules[Q]
      let x
      if (
        (typeof y == 'function'
          ? (x = y(_))
          : typeof y == 'string' && vs[y] !== void 0 && (x = vs[y](_)),
        x === !1 || typeof x == 'string')
      )
        return D(!0, x), !1
      x !== !0 && x !== void 0 && H.push(x)
    }
    return H.length === 0
      ? (D(!1), !0)
      : ((t.value = !0),
        Promise.all(H).then(
          (Q) => {
            if (Q === void 0 || Array.isArray(Q) === !1 || Q.length === 0)
              return E === l && D(!1), !0
            const y = Q.find((x) => x === !1 || typeof x == 'string')
            return E === l && D(y !== void 0, y), y === void 0
          },
          (Q) => (E === l && (console.error(Q), D(!0)), !1)
        ))
  }
  function T(_) {
    c.value === !0 &&
      n.lazyRules !== 'ondemand' &&
      (s.value === !0 || (n.lazyRules !== !0 && _ !== !0)) &&
      g()
  }
  const g = Xl(v, 0)
  return (
    Be(() => {
      a !== void 0 && a(), g.cancel()
    }),
    Object.assign(o, { resetValidation: m, validate: v }),
    jr(o, 'hasError', () => h.value),
    {
      isDirtyModel: s,
      hasRules: u,
      hasError: h,
      errorMessage: f,
      validate: v,
      resetValidation: m,
    }
  )
}
const ys = /^on[A-Z]/
function nh(e, t) {
  const n = { listeners: fe({}), attributes: fe({}) }
  function o() {
    const r = {},
      i = {}
    for (const s in e)
      s !== 'class' && s !== 'style' && ys.test(s) === !1 && (r[s] = e[s])
    for (const s in t.props) ys.test(s) === !0 && (i[s] = t.props[s])
    ;(n.attributes.value = r), (n.listeners.value = i)
  }
  return Sl(o), o(), n
}
function To(e) {
  return e === void 0 ? `f_${Xd()}` : e
}
function Po(e) {
  return e != null && ('' + e).length > 0
}
const rh = Ee(ie(ie({}, jd), eh), {
    label: String,
    stackLabel: Boolean,
    hint: String,
    hideHint: Boolean,
    prefix: String,
    suffix: String,
    labelColor: String,
    color: String,
    bgColor: String,
    filled: Boolean,
    outlined: Boolean,
    borderless: Boolean,
    standout: [Boolean, String],
    square: Boolean,
    loading: Boolean,
    labelSlot: Boolean,
    bottomSlots: Boolean,
    hideBottomSpace: Boolean,
    rounded: Boolean,
    dense: Boolean,
    itemAligned: Boolean,
    counter: Boolean,
    clearable: Boolean,
    clearIcon: String,
    disable: Boolean,
    readonly: Boolean,
    autofocus: Boolean,
    for: String,
    maxlength: [Number, String],
  }),
  oh = [
    'update:modelValue',
    'clear',
    'focus',
    'blur',
    'popup-show',
    'popup-hide',
  ]
function ih() {
  const { props: e, attrs: t, proxy: n, vnode: o } = Ne()
  return {
    isDark: Dd(e, n.$q),
    editable: O(() => e.disable !== !0 && e.readonly !== !0),
    innerLoading: fe(!1),
    focused: fe(!1),
    hasPopupOpen: !1,
    splitAttrs: nh(t, o),
    targetUid: fe(To(e.for)),
    rootRef: fe(null),
    targetRef: fe(null),
    controlRef: fe(null),
  }
}
function sh(e) {
  const { props: t, emit: n, slots: o, attrs: r, proxy: i } = Ne(),
    { $q: s } = i
  let l
  e.hasValue === void 0 && (e.hasValue = O(() => Po(t.modelValue))),
    e.emitValue === void 0 &&
      (e.emitValue = (w) => {
        n('update:modelValue', w)
      }),
    e.controlEvents === void 0 &&
      (e.controlEvents = { onFocusin: M, onFocusout: B }),
    Object.assign(e, {
      clearValue: $,
      onControlFocusin: M,
      onControlFocusout: B,
      focus: x,
    }),
    e.computedCounter === void 0 &&
      (e.computedCounter = O(() => {
        if (t.counter !== !1) {
          const w =
              typeof t.modelValue == 'string' || typeof t.modelValue == 'number'
                ? ('' + t.modelValue).length
                : Array.isArray(t.modelValue) === !0
                ? t.modelValue.length
                : 0,
            U = t.maxlength !== void 0 ? t.maxlength : t.maxValues
          return w + (U !== void 0 ? ' / ' + U : '')
        }
      }))
  const {
      isDirtyModel: a,
      hasRules: u,
      hasError: c,
      errorMessage: h,
      resetValidation: f,
    } = th(e.focused, e.innerLoading),
    m =
      e.floatingLabel !== void 0
        ? O(
            () =>
              t.stackLabel === !0 ||
              e.focused.value === !0 ||
              e.floatingLabel.value === !0
          )
        : O(
            () =>
              t.stackLabel === !0 ||
              e.focused.value === !0 ||
              e.hasValue.value === !0
          ),
    v = O(
      () =>
        t.bottomSlots === !0 ||
        t.hint !== void 0 ||
        u.value === !0 ||
        t.counter === !0 ||
        t.error !== null
    ),
    T = O(() =>
      t.filled === !0
        ? 'filled'
        : t.outlined === !0
        ? 'outlined'
        : t.borderless === !0
        ? 'borderless'
        : t.standout
        ? 'standout'
        : 'standard'
    ),
    g = O(
      () =>
        `q-field row no-wrap items-start q-field--${T.value}` +
        (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : '') +
        (t.rounded === !0 ? ' q-field--rounded' : '') +
        (t.square === !0 ? ' q-field--square' : '') +
        (m.value === !0 ? ' q-field--float' : '') +
        (E.value === !0 ? ' q-field--labeled' : '') +
        (t.dense === !0 ? ' q-field--dense' : '') +
        (t.itemAligned === !0 ? ' q-field--item-aligned q-item-type' : '') +
        (e.isDark.value === !0 ? ' q-field--dark' : '') +
        (e.getControl === void 0 ? ' q-field--auto-height' : '') +
        (e.focused.value === !0 ? ' q-field--focused' : '') +
        (c.value === !0 ? ' q-field--error' : '') +
        (c.value === !0 || e.focused.value === !0
          ? ' q-field--highlighted'
          : '') +
        (t.hideBottomSpace !== !0 && v.value === !0
          ? ' q-field--with-bottom'
          : '') +
        (t.disable === !0
          ? ' q-field--disabled'
          : t.readonly === !0
          ? ' q-field--readonly'
          : '')
    ),
    _ = O(
      () =>
        'q-field__control relative-position row no-wrap' +
        (t.bgColor !== void 0 ? ` bg-${t.bgColor}` : '') +
        (c.value === !0
          ? ' text-negative'
          : typeof t.standout == 'string' &&
            t.standout.length > 0 &&
            e.focused.value === !0
          ? ` ${t.standout}`
          : t.color !== void 0
          ? ` text-${t.color}`
          : '')
    ),
    E = O(() => t.labelSlot === !0 || t.label !== void 0),
    D = O(
      () =>
        'q-field__label no-pointer-events absolute ellipsis' +
        (t.labelColor !== void 0 && c.value !== !0
          ? ` text-${t.labelColor}`
          : '')
    ),
    H = O(() => ({
      id: e.targetUid.value,
      editable: e.editable.value,
      focused: e.focused.value,
      floatingLabel: m.value,
      modelValue: t.modelValue,
      emitValue: e.emitValue,
    })),
    Q = O(() => {
      const w = { for: e.targetUid.value }
      return (
        t.disable === !0
          ? (w['aria-disabled'] = 'true')
          : t.readonly === !0 && (w['aria-readonly'] = 'true'),
        w
      )
    })
  he(
    () => t.for,
    (w) => {
      e.targetUid.value = To(w)
    }
  )
  function y() {
    const w = document.activeElement
    let U = e.targetRef !== void 0 && e.targetRef.value
    U &&
      (w === null || w.id !== e.targetUid.value) &&
      (U.hasAttribute('tabindex') === !0 || (U = U.querySelector('[tabindex]')),
      U && U !== w && U.focus({ preventScroll: !0 }))
  }
  function x() {
    ia(y)
  }
  function A() {
    Yf(y)
    const w = document.activeElement
    w !== null && e.rootRef.value.contains(w) && w.blur()
  }
  function M(w) {
    clearTimeout(l),
      e.editable.value === !0 &&
        e.focused.value === !1 &&
        ((e.focused.value = !0), n('focus', w))
  }
  function B(w, U) {
    clearTimeout(l),
      (l = setTimeout(() => {
        ;(document.hasFocus() === !0 &&
          (e.hasPopupOpen === !0 ||
            e.controlRef === void 0 ||
            e.controlRef.value === null ||
            e.controlRef.value.contains(document.activeElement) !== !1)) ||
          (e.focused.value === !0 && ((e.focused.value = !1), n('blur', w)),
          U !== void 0 && U())
      }))
  }
  function $(w) {
    yt(w),
      s.platform.is.mobile !== !0
        ? (
            (e.targetRef !== void 0 && e.targetRef.value) ||
            e.rootRef.value
          ).focus()
        : e.rootRef.value.contains(document.activeElement) === !0 &&
          document.activeElement.blur(),
      t.type === 'file' && (e.inputRef.value.value = null),
      n('update:modelValue', null),
      n('clear', t.modelValue),
      qe(() => {
        f(), s.platform.is.mobile !== !0 && (a.value = !1)
      })
  }
  function R() {
    const w = []
    return (
      o.prepend !== void 0 &&
        w.push(
          N(
            'div',
            {
              class:
                'q-field__prepend q-field__marginal row no-wrap items-center',
              key: 'prepend',
              onClick: nt,
            },
            o.prepend()
          )
        ),
      w.push(
        N(
          'div',
          {
            class:
              'q-field__control-container col relative-position row no-wrap q-anchor--skip',
          },
          z()
        )
      ),
      c.value === !0 &&
        t.noErrorIcon === !1 &&
        w.push(
          V('error', [
            N(sn, { name: s.iconSet.field.error, color: 'negative' }),
          ])
        ),
      t.loading === !0 || e.innerLoading.value === !0
        ? w.push(
            V(
              'inner-loading-append',
              o.loading !== void 0 ? o.loading() : [N(ni, { color: t.color })]
            )
          )
        : t.clearable === !0 &&
          e.hasValue.value === !0 &&
          e.editable.value === !0 &&
          w.push(
            V('inner-clearable-append', [
              N(sn, {
                class: 'q-field__focusable-action',
                tag: 'button',
                name: t.clearIcon || s.iconSet.field.clear,
                tabindex: 0,
                type: 'button',
                'aria-hidden': null,
                role: null,
                onClick: $,
              }),
            ])
          ),
      o.append !== void 0 &&
        w.push(
          N(
            'div',
            {
              class:
                'q-field__append q-field__marginal row no-wrap items-center',
              key: 'append',
              onClick: nt,
            },
            o.append()
          )
        ),
      e.getInnerAppend !== void 0 &&
        w.push(V('inner-append', e.getInnerAppend())),
      e.getControlChild !== void 0 && w.push(e.getControlChild()),
      w
    )
  }
  function z() {
    const w = []
    return (
      t.prefix !== void 0 &&
        t.prefix !== null &&
        w.push(
          N(
            'div',
            { class: 'q-field__prefix no-pointer-events row items-center' },
            t.prefix
          )
        ),
      e.getShadowControl !== void 0 &&
        e.hasShadow.value === !0 &&
        w.push(e.getShadowControl()),
      e.getControl !== void 0
        ? w.push(e.getControl())
        : o.rawControl !== void 0
        ? w.push(o.rawControl())
        : o.control !== void 0 &&
          w.push(
            N(
              'div',
              Ee(
                ie(
                  { ref: e.targetRef, class: 'q-field__native row' },
                  e.splitAttrs.attributes.value
                ),
                { 'data-autofocus': t.autofocus === !0 || void 0 }
              ),
              o.control(H.value)
            )
          ),
      E.value === !0 &&
        w.push(N('div', { class: D.value }, Gt(o.label, t.label))),
      t.suffix !== void 0 &&
        t.suffix !== null &&
        w.push(
          N(
            'div',
            { class: 'q-field__suffix no-pointer-events row items-center' },
            t.suffix
          )
        ),
      w.concat(Gt(o.default))
    )
  }
  function ee() {
    let w, U
    c.value === !0
      ? h.value !== null
        ? ((w = [N('div', { role: 'alert' }, h.value)]),
          (U = `q--slot-error-${h.value}`))
        : ((w = Gt(o.error)), (U = 'q--slot-error'))
      : (t.hideHint !== !0 || e.focused.value === !0) &&
        (t.hint !== void 0
          ? ((w = [N('div', t.hint)]), (U = `q--slot-hint-${t.hint}`))
          : ((w = Gt(o.hint)), (U = 'q--slot-hint')))
    const L = t.counter === !0 || o.counter !== void 0
    if (t.hideBottomSpace === !0 && L === !1 && w === void 0) return
    const le = N('div', { key: U, class: 'q-field__messages col' }, w)
    return N(
      'div',
      {
        class:
          'q-field__bottom row items-start q-field__bottom--' +
          (t.hideBottomSpace !== !0 ? 'animated' : 'stale'),
      },
      [
        t.hideBottomSpace === !0
          ? le
          : N(zn, { name: 'q-transition--field-message' }, () => le),
        L === !0
          ? N(
              'div',
              { class: 'q-field__counter' },
              o.counter !== void 0 ? o.counter() : e.computedCounter.value
            )
          : null,
      ]
    )
  }
  function V(w, U) {
    return U === null
      ? null
      : N(
          'div',
          {
            key: w,
            class:
              'q-field__append q-field__marginal row no-wrap items-center q-anchor--skip',
          },
          U
        )
  }
  Object.assign(i, { focus: x, blur: A })
  let Y = !1
  return (
    Cl(() => {
      Y = !0
    }),
    xl(() => {
      Y === !0 && t.autofocus === !0 && i.focus()
    }),
    fn(() => {
      St.value === !0 && t.for === void 0 && (e.targetUid.value = To()),
        t.autofocus === !0 && i.focus()
    }),
    Be(() => {
      clearTimeout(l)
    }),
    function () {
      const U =
        e.getControl === void 0 && o.control === void 0
          ? ie(
              Ee(ie({}, e.splitAttrs.attributes.value), {
                'data-autofocus': t.autofocus,
              }),
              Q.value
            )
          : Q.value
      return N(
        'label',
        ie({ ref: e.rootRef, class: [g.value, r.class], style: r.style }, U),
        [
          o.before !== void 0
            ? N(
                'div',
                {
                  class:
                    'q-field__before q-field__marginal row no-wrap items-center',
                  onClick: nt,
                },
                o.before()
              )
            : null,
          N(
            'div',
            { class: 'q-field__inner relative-position col self-stretch' },
            [
              N(
                'div',
                ie(
                  { ref: e.controlRef, class: _.value, tabindex: -1 },
                  e.controlEvents
                ),
                R()
              ),
              v.value === !0 ? ee() : null,
            ]
          ),
          o.after !== void 0
            ? N(
                'div',
                {
                  class:
                    'q-field__after q-field__marginal row no-wrap items-center',
                  onClick: nt,
                },
                o.after()
              )
            : null,
        ]
      )
    }
  )
}
const _s = {
    date: '####/##/##',
    datetime: '####/##/## ##:##',
    time: '##:##',
    fulltime: '##:##:##',
    phone: '(###) ### - ####',
    card: '#### #### #### ####',
  },
  kr = {
    '#': { pattern: '[\\d]', negate: '[^\\d]' },
    S: { pattern: '[a-zA-Z]', negate: '[^a-zA-Z]' },
    N: { pattern: '[0-9a-zA-Z]', negate: '[^0-9a-zA-Z]' },
    A: {
      pattern: '[a-zA-Z]',
      negate: '[^a-zA-Z]',
      transform: (e) => e.toLocaleUpperCase(),
    },
    a: {
      pattern: '[a-zA-Z]',
      negate: '[^a-zA-Z]',
      transform: (e) => e.toLocaleLowerCase(),
    },
    X: {
      pattern: '[0-9a-zA-Z]',
      negate: '[^0-9a-zA-Z]',
      transform: (e) => e.toLocaleUpperCase(),
    },
    x: {
      pattern: '[0-9a-zA-Z]',
      negate: '[^0-9a-zA-Z]',
      transform: (e) => e.toLocaleLowerCase(),
    },
  },
  pa = Object.keys(kr)
pa.forEach((e) => {
  kr[e].regex = new RegExp(kr[e].pattern)
})
const lh = new RegExp(
    '\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([' + pa.join('') + '])|(.)',
    'g'
  ),
  ws = /[.*+?^${}()|[\]\\]/g,
  Re = String.fromCharCode(1),
  ah = {
    mask: String,
    reverseFillMask: Boolean,
    fillMask: [Boolean, String],
    unmaskedValue: Boolean,
  }
function uh(e, t, n, o) {
  let r, i, s, l
  const a = fe(null),
    u = fe(h())
  function c() {
    return (
      e.autogrow === !0 ||
      ['textarea', 'text', 'search', 'url', 'tel', 'password'].includes(e.type)
    )
  }
  he(() => e.type + e.autogrow, m),
    he(
      () => e.mask,
      (y) => {
        if (y !== void 0) v(u.value, !0)
        else {
          const x = H(u.value)
          m(), e.modelValue !== x && t('update:modelValue', x)
        }
      }
    ),
    he(
      () => e.fillMask + e.reverseFillMask,
      () => {
        a.value === !0 && v(u.value, !0)
      }
    ),
    he(
      () => e.unmaskedValue,
      () => {
        a.value === !0 && v(u.value)
      }
    )
  function h() {
    if ((m(), a.value === !0)) {
      const y = E(H(e.modelValue))
      return e.fillMask !== !1 ? Q(y) : y
    }
    return e.modelValue
  }
  function f(y) {
    if (y < r.length) return r.slice(-y)
    let x = '',
      A = r
    const M = A.indexOf(Re)
    if (M > -1) {
      for (let B = y - A.length; B > 0; B--) x += Re
      A = A.slice(0, M) + x + A.slice(M)
    }
    return A
  }
  function m() {
    if (
      ((a.value = e.mask !== void 0 && e.mask.length > 0 && c()),
      a.value === !1)
    ) {
      ;(l = void 0), (r = ''), (i = '')
      return
    }
    const y = _s[e.mask] === void 0 ? e.mask : _s[e.mask],
      x =
        typeof e.fillMask == 'string' && e.fillMask.length > 0
          ? e.fillMask.slice(0, 1)
          : '_',
      A = x.replace(ws, '\\$&'),
      M = [],
      B = [],
      $ = []
    let R = e.reverseFillMask === !0,
      z = '',
      ee = ''
    y.replace(lh, (U, L, le, Ce, xe) => {
      if (Ce !== void 0) {
        const de = kr[Ce]
        $.push(de),
          (ee = de.negate),
          R === !0 &&
            (B.push(
              '(?:' +
                ee +
                '+)?(' +
                de.pattern +
                '+)?(?:' +
                ee +
                '+)?(' +
                de.pattern +
                '+)?'
            ),
            (R = !1)),
          B.push('(?:' + ee + '+)?(' + de.pattern + ')?')
      } else if (le !== void 0)
        (z = '\\' + (le === '\\' ? '' : le)),
          $.push(le),
          M.push('([^' + z + ']+)?' + z + '?')
      else {
        const de = L !== void 0 ? L : xe
        ;(z = de === '\\' ? '\\\\\\\\' : de.replace(ws, '\\\\$&')),
          $.push(de),
          M.push('([^' + z + ']+)?' + z + '?')
      }
    })
    const V = new RegExp(
        '^' + M.join('') + '(' + (z === '' ? '.' : '[^' + z + ']') + '+)?$'
      ),
      Y = B.length - 1,
      w = B.map((U, L) =>
        L === 0 && e.reverseFillMask === !0
          ? new RegExp('^' + A + '*' + U)
          : L === Y
          ? new RegExp(
              '^' +
                U +
                '(' +
                (ee === '' ? '.' : ee) +
                '+)?' +
                (e.reverseFillMask === !0 ? '$' : A + '*')
            )
          : new RegExp('^' + U)
      )
    ;(s = $),
      (l = (U) => {
        const L = V.exec(U)
        L !== null && (U = L.slice(1).join(''))
        const le = [],
          Ce = w.length
        for (let xe = 0, de = U; xe < Ce; xe++) {
          const ye = w[xe].exec(de)
          if (ye === null) break
          ;(de = de.slice(ye.shift().length)), le.push(...ye)
        }
        return le.length > 0 ? le.join('') : U
      }),
      (r = $.map((U) => (typeof U == 'string' ? U : Re)).join('')),
      (i = r.split(Re).join(x))
  }
  function v(y, x, A) {
    const M = o.value,
      B = M.selectionEnd,
      $ = M.value.length - B,
      R = H(y)
    x === !0 && m()
    const z = E(R),
      ee = e.fillMask !== !1 ? Q(z) : z,
      V = u.value !== ee
    M.value !== ee && (M.value = ee),
      V === !0 && (u.value = ee),
      document.activeElement === M &&
        qe(() => {
          if (ee === i) {
            const w = e.reverseFillMask === !0 ? i.length : 0
            M.setSelectionRange(w, w, 'forward')
            return
          }
          if (A === 'insertFromPaste' && e.reverseFillMask !== !0) {
            const w = B - 1
            g.right(M, w, w)
            return
          }
          if (
            ['deleteContentBackward', 'deleteContentForward'].indexOf(A) > -1
          ) {
            const w =
              e.reverseFillMask === !0
                ? B === 0
                  ? ee.length > z.length
                    ? 1
                    : 0
                  : Math.max(
                      0,
                      ee.length - (ee === i ? 0 : Math.min(z.length, $) + 1)
                    ) + 1
                : B
            M.setSelectionRange(w, w, 'forward')
            return
          }
          if (e.reverseFillMask === !0)
            if (V === !0) {
              const w = Math.max(
                0,
                ee.length - (ee === i ? 0 : Math.min(z.length, $ + 1))
              )
              w === 1 && B === 1
                ? M.setSelectionRange(w, w, 'forward')
                : g.rightReverse(M, w, w)
            } else {
              const w = ee.length - $
              M.setSelectionRange(w, w, 'backward')
            }
          else if (V === !0) {
            const w = Math.max(0, r.indexOf(Re), Math.min(z.length, B) - 1)
            g.right(M, w, w)
          } else {
            const w = B - 1
            g.right(M, w, w)
          }
        })
    const Y = e.unmaskedValue === !0 ? H(ee) : ee
    String(e.modelValue) !== Y && n(Y, !0)
  }
  function T(y, x, A) {
    const M = E(H(y.value))
    ;(x = Math.max(0, r.indexOf(Re), Math.min(M.length, x))),
      y.setSelectionRange(x, A, 'forward')
  }
  const g = {
    left(y, x, A, M) {
      const B = r.slice(x - 1).indexOf(Re) === -1
      let $ = Math.max(0, x - 1)
      for (; $ >= 0; $--)
        if (r[$] === Re) {
          ;(x = $), B === !0 && x++
          break
        }
      if ($ < 0 && r[x] !== void 0 && r[x] !== Re) return g.right(y, 0, 0)
      x >= 0 && y.setSelectionRange(x, M === !0 ? A : x, 'backward')
    },
    right(y, x, A, M) {
      const B = y.value.length
      let $ = Math.min(B, A + 1)
      for (; $ <= B; $++)
        if (r[$] === Re) {
          A = $
          break
        } else r[$ - 1] === Re && (A = $)
      if ($ > B && r[A - 1] !== void 0 && r[A - 1] !== Re)
        return g.left(y, B, B)
      y.setSelectionRange(M ? x : A, A, 'forward')
    },
    leftReverse(y, x, A, M) {
      const B = f(y.value.length)
      let $ = Math.max(0, x - 1)
      for (; $ >= 0; $--)
        if (B[$ - 1] === Re) {
          x = $
          break
        } else if (B[$] === Re && ((x = $), $ === 0)) break
      if ($ < 0 && B[x] !== void 0 && B[x] !== Re)
        return g.rightReverse(y, 0, 0)
      x >= 0 && y.setSelectionRange(x, M === !0 ? A : x, 'backward')
    },
    rightReverse(y, x, A, M) {
      const B = y.value.length,
        $ = f(B),
        R = $.slice(0, A + 1).indexOf(Re) === -1
      let z = Math.min(B, A + 1)
      for (; z <= B; z++)
        if ($[z - 1] === Re) {
          ;(A = z), A > 0 && R === !0 && A--
          break
        }
      if (z > B && $[A - 1] !== void 0 && $[A - 1] !== Re)
        return g.leftReverse(y, B, B)
      y.setSelectionRange(M === !0 ? x : A, A, 'forward')
    },
  }
  function _(y) {
    if (ta(y) === !0) return
    const x = o.value,
      A = x.selectionStart,
      M = x.selectionEnd
    if (y.keyCode === 37 || y.keyCode === 39) {
      const B =
        g[
          (y.keyCode === 39 ? 'right' : 'left') +
            (e.reverseFillMask === !0 ? 'Reverse' : '')
        ]
      y.preventDefault(), B(x, A, M, y.shiftKey)
    } else
      y.keyCode === 8 && e.reverseFillMask !== !0 && A === M
        ? g.left(x, A, M, !0)
        : y.keyCode === 46 &&
          e.reverseFillMask === !0 &&
          A === M &&
          g.rightReverse(x, A, M, !0)
  }
  function E(y) {
    if (y == null || y === '') return ''
    if (e.reverseFillMask === !0) return D(y)
    const x = s
    let A = 0,
      M = ''
    for (let B = 0; B < x.length; B++) {
      const $ = y[A],
        R = x[B]
      if (typeof R == 'string') (M += R), $ === R && A++
      else if ($ !== void 0 && R.regex.test($))
        (M += R.transform !== void 0 ? R.transform($) : $), A++
      else return M
    }
    return M
  }
  function D(y) {
    const x = s,
      A = r.indexOf(Re)
    let M = y.length - 1,
      B = ''
    for (let $ = x.length - 1; $ >= 0 && M > -1; $--) {
      const R = x[$]
      let z = y[M]
      if (typeof R == 'string') (B = R + B), z === R && M--
      else if (z !== void 0 && R.regex.test(z))
        do
          (B = (R.transform !== void 0 ? R.transform(z) : z) + B),
            M--,
            (z = y[M])
        while (A === $ && z !== void 0 && R.regex.test(z))
      else return B
    }
    return B
  }
  function H(y) {
    return typeof y != 'string' || l === void 0
      ? typeof y == 'number'
        ? l('' + y)
        : y
      : l(y)
  }
  function Q(y) {
    return i.length - y.length <= 0
      ? y
      : e.reverseFillMask === !0 && y.length > 0
      ? i.slice(0, -y.length) + y
      : y + i.slice(y.length)
  }
  return {
    innerValue: u,
    hasMask: a,
    moveCursorForPaste: T,
    updateMaskValue: v,
    onMaskedKeydown: _,
  }
}
const ch = { name: String }
function fh(e) {
  return O(() => e.name || e.for)
}
function dh(e, t) {
  function n() {
    const o = e.modelValue
    try {
      const r =
        'DataTransfer' in window
          ? new DataTransfer()
          : 'ClipboardEvent' in window
          ? new ClipboardEvent('').clipboardData
          : void 0
      return (
        Object(o) === o &&
          ('length' in o ? Array.from(o) : [o]).forEach((i) => {
            r.items.add(i)
          }),
        { files: r.files }
      )
    } catch {
      return { files: void 0 }
    }
  }
  return O(
    t === !0
      ? () => {
          if (e.type === 'file') return n()
        }
      : n
  )
}
const hh =
    /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,
  mh =
    /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,
  ph = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/
function gh(e) {
  return function (n) {
    if (n.type === 'compositionend' || n.type === 'change') {
      if (n.target.composing !== !0) return
      ;(n.target.composing = !1), e(n)
    } else
      n.type === 'compositionupdate'
        ? typeof n.data == 'string' &&
          hh.test(n.data) === !1 &&
          mh.test(n.data) === !1 &&
          ph.test(n.data) === !1 &&
          (n.target.composing = !1)
        : (n.target.composing = !0)
  }
}
var vh = kt({
  name: 'QInput',
  inheritAttrs: !1,
  props: Ee(ie(ie(ie({}, rh), ah), ch), {
    modelValue: { required: !1 },
    shadowText: String,
    type: { type: String, default: 'text' },
    debounce: [String, Number],
    autogrow: Boolean,
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object],
  }),
  emits: [...oh, 'paste', 'change'],
  setup(e, { emit: t, attrs: n }) {
    const o = {}
    let r = NaN,
      i,
      s,
      l,
      a
    const u = fe(null),
      c = fh(e),
      {
        innerValue: h,
        hasMask: f,
        moveCursorForPaste: m,
        updateMaskValue: v,
        onMaskedKeydown: T,
      } = uh(e, t, R, u),
      g = dh(e, !0),
      _ = O(() => Po(h.value)),
      E = gh($),
      D = ih(),
      H = O(() => e.type === 'textarea' || e.autogrow === !0),
      Q = O(
        () =>
          H.value === !0 ||
          ['text', 'search', 'url', 'tel', 'password'].includes(e.type)
      ),
      y = O(() => {
        const L = Ee(ie({}, D.splitAttrs.listeners.value), {
          onInput: $,
          onPaste: B,
          onChange: ee,
          onBlur: V,
          onFocus: yr,
        })
        return (
          (L.onCompositionstart =
            L.onCompositionupdate =
            L.onCompositionend =
              E),
          f.value === !0 && (L.onKeydown = T),
          e.autogrow === !0 && (L.onAnimationend = z),
          L
        )
      }),
      x = O(() => {
        const L = Ee(
          ie(
            {
              tabindex: 0,
              'data-autofocus': e.autofocus === !0 || void 0,
              rows: e.type === 'textarea' ? 6 : void 0,
              'aria-label': e.label,
              name: c.value,
            },
            D.splitAttrs.attributes.value
          ),
          {
            id: D.targetUid.value,
            maxlength: e.maxlength,
            disabled: e.disable === !0,
            readonly: e.readonly === !0,
          }
        )
        return (
          H.value === !1 && (L.type = e.type),
          e.autogrow === !0 && (L.rows = 1),
          L
        )
      })
    he(
      () => e.type,
      () => {
        u.value && (u.value.value = e.modelValue)
      }
    ),
      he(
        () => e.modelValue,
        (L) => {
          if (f.value === !0) {
            if (s === !0 && ((s = !1), String(L) === r)) return
            v(L)
          } else
            h.value !== L &&
              ((h.value = L),
              e.type === 'number' &&
                o.hasOwnProperty('value') === !0 &&
                (i === !0 ? (i = !1) : delete o.value))
          e.autogrow === !0 && qe(z)
        }
      ),
      he(
        () => e.autogrow,
        (L) => {
          L === !0
            ? qe(z)
            : u.value !== null && n.rows > 0 && (u.value.style.height = 'auto')
        }
      ),
      he(
        () => e.dense,
        () => {
          e.autogrow === !0 && qe(z)
        }
      )
    function A() {
      ia(() => {
        const L = document.activeElement
        u.value !== null &&
          u.value !== L &&
          (L === null || L.id !== D.targetUid.value) &&
          u.value.focus({ preventScroll: !0 })
      })
    }
    function M() {
      u.value !== null && u.value.select()
    }
    function B(L) {
      if (f.value === !0 && e.reverseFillMask !== !0) {
        const le = L.target
        m(le, le.selectionStart, le.selectionEnd)
      }
      t('paste', L)
    }
    function $(L) {
      if (!L || !L.target || L.target.composing === !0) return
      if (e.type === 'file') {
        t('update:modelValue', L.target.files)
        return
      }
      const le = L.target.value
      if (f.value === !0) v(le, !1, L.inputType)
      else if ((R(le), Q.value === !0 && L.target === document.activeElement)) {
        const { selectionStart: Ce, selectionEnd: xe } = L.target
        Ce !== void 0 &&
          xe !== void 0 &&
          qe(() => {
            L.target === document.activeElement &&
              le.indexOf(L.target.value) === 0 &&
              L.target.setSelectionRange(Ce, xe)
          })
      }
      e.autogrow === !0 && z()
    }
    function R(L, le) {
      ;(a = () => {
        e.type !== 'number' &&
          o.hasOwnProperty('value') === !0 &&
          delete o.value,
          e.modelValue !== L &&
            r !== L &&
            (le === !0 && (s = !0),
            t('update:modelValue', L),
            qe(() => {
              r === L && (r = NaN)
            })),
          (a = void 0)
      }),
        e.type === 'number' && ((i = !0), (o.value = L)),
        e.debounce !== void 0
          ? (clearTimeout(l), (o.value = L), (l = setTimeout(a, e.debounce)))
          : a()
    }
    function z() {
      const L = u.value
      if (L !== null) {
        const le = L.parentNode.style
        ;(le.marginBottom = L.scrollHeight - 1 + 'px'),
          (L.style.height = '1px'),
          (L.style.height = L.scrollHeight + 'px'),
          (le.marginBottom = '')
      }
    }
    function ee(L) {
      E(L), clearTimeout(l), a !== void 0 && a(), t('change', L.target.value)
    }
    function V(L) {
      L !== void 0 && yr(L),
        clearTimeout(l),
        a !== void 0 && a(),
        (i = !1),
        (s = !1),
        delete o.value,
        e.type !== 'file' &&
          setTimeout(() => {
            u.value !== null &&
              (u.value.value = h.value !== void 0 ? h.value : '')
          })
    }
    function Y() {
      return o.hasOwnProperty('value') === !0
        ? o.value
        : h.value !== void 0
        ? h.value
        : ''
    }
    Be(() => {
      V()
    }),
      fn(() => {
        e.autogrow === !0 && z()
      }),
      Object.assign(D, {
        innerValue: h,
        fieldClass: O(
          () =>
            `q-${H.value === !0 ? 'textarea' : 'input'}` +
            (e.autogrow === !0 ? ' q-textarea--autogrow' : '')
        ),
        hasShadow: O(
          () =>
            e.type !== 'file' &&
            typeof e.shadowText == 'string' &&
            e.shadowText.length > 0
        ),
        inputRef: u,
        emitValue: R,
        hasValue: _,
        floatingLabel: O(() => _.value === !0 || Po(e.displayValue)),
        getControl: () =>
          N(
            H.value === !0 ? 'textarea' : 'input',
            ie(
              ie(
                ie(
                  {
                    ref: u,
                    class: ['q-field__native q-placeholder', e.inputClass],
                    style: e.inputStyle,
                  },
                  x.value
                ),
                y.value
              ),
              e.type !== 'file' ? { value: Y() } : g.value
            )
          ),
        getShadowControl: () =>
          N(
            'div',
            {
              class:
                'q-field__native q-field__shadow absolute-bottom no-pointer-events' +
                (H.value === !0 ? '' : ' text-no-wrap'),
            },
            [N('span', { class: 'invisible' }, Y()), N('span', e.shadowText)]
          ),
      })
    const w = sh(D),
      U = Ne()
    return (
      Object.assign(U.proxy, {
        focus: A,
        select: M,
        getNativeElement: () => u.value,
      }),
      w
    )
  },
})
function xs(e = 60, t, n, o = !1) {
  console.log(Number(e))
  let r = ft({ seconds: String(e), millSeconds10: '999', timer: null })
  function i() {
    t && t(),
      u(),
      (r.seconds = String(e)),
      (r.timer = setInterval(() => {
        ;(r.millSeconds10 = String(
          Number.parseInt(r.millSeconds10, 10) - 10
        ).padStart(3, '0')),
          Number.parseInt(r.millSeconds10, 10) <= 0 &&
            ((r.seconds = String(Number.parseInt(r.seconds, 10) - 1)),
            Number.parseInt(r.seconds, 10) <= 0
              ? (r.millSeconds10 = '000')
              : (r.millSeconds10 = '999')),
          Number.parseInt(r.seconds, 10) <= 0 &&
            (o
              ? ((r.seconds = String(e)), (r.millSeconds10 = '999'))
              : (u(), n && n()))
      }, 10))
  }
  function s() {
    u()
  }
  function l() {
    u(),
      (r.timer = setInterval(() => {
        ;(r.millSeconds10 = String(
          Number.parseInt(r.millSeconds10, 10) - 10
        ).padStart(3, '0')),
          Number.parseInt(r.millSeconds10, 10) <= 0 &&
            ((r.seconds = String(Number.parseInt(r.seconds, 10) - 1)),
            Number.parseInt(r.seconds, 10) <= 0
              ? (r.millSeconds10 = '000')
              : (r.millSeconds10 = '999')),
          Number.parseInt(r.seconds, 10) <= 0 &&
            (o ? ((r.seconds = String(e)), (r.millSeconds10 = '999')) : u())
      }, 10))
  }
  function a() {
    u()
  }
  function u() {
    r.timer && clearInterval(r.timer)
  }
  return (
    Be(() => {
      u()
    }),
    { state: r, start: i, pause: s, resume: l, stop: a }
  )
}
var ga = (e, t) => {
  const n = e.__vccOpts || e
  for (const [o, r] of t) n[o] = r
  return n
}
function bh(e) {
  switch (e) {
    case 'hhsid1':
      return {
        name: 'pink-2',
        deepest: '#FA1B5E',
        middle: '#FA6693',
        lightest: '#FB99B6',
      }
    case 'ggsid1':
      return {
        name: 'green-2',
        deepest: '#a6cd8e',
        middle: '#d6d38e',
        lightest: '#D6D38E',
      }
    case 'kksid1':
      return {
        name: 'blue-2',
        deepest: '#6E7BB0',
        middle: '#6EA8B0',
        lightest: '#8DBAA9',
      }
    case 'vanli':
      return {
        name: 'purple-2',
        deepest: '#A7A7DB',
        middle: '#D6BCFF',
        lightest: '#E5DEEB',
      }
    case 'T8uULBr':
      return {
        deepest: '#262626',
        middle: '#464646',
        lightest: '#6d6d6d',
        noneshadow: !0,
      }
  }
}
const yh = Hn({
    name: 'TomatoClock',
    components: {},
    setup() {
      const e = fe(''),
        t = fe(!1),
        n = fe('BEFORE'),
        o = fe('NOT_START'),
        r = fe(null)
      function i(_, E = window.location.href) {
        _ = _.replace(/[\[\]]/g, '\\$&')
        var D = new RegExp('[?&]' + _ + '(=([^&#]*)|&|#|$)'),
          H = D.exec(E)
        return H
          ? H[2]
            ? decodeURIComponent(H[2].replace(/\+/g, ' '))
            : ''
          : null
      }
      const s = bh(i('cclor')),
        l = {
          '--color-dee': s.deepest,
          '--color-mid': s.middle,
          '--color-lig': s.lightest,
        }
      let {
          state: a,
          start: u,
          pause: c,
          resume: h,
          stop: f,
        } = xs(
          Number(e.value),
          function () {
            t.value = !1
          },
          function () {
            ;(n.value = 'BEFORE'),
              (o.value = 'NOT_START'),
              r.value && r.value.play(),
              (t.value = !0)
          }
        ),
        g = ft({
          inputNumber: e,
          screenState: n,
          startState: o,
          timeState: a,
          startReal: u,
          pauseReal: c,
          resumeReal: h,
          stopReal: f,
          go: () => {
            u(), (o.value = 'STARTED'), (n.value = 'AFTER')
          },
          pause: () => null,
          resume: () => null,
          goBack: () => {
            f(), (o.value = 'NOT_STARTED'), (n.value = 'BEFORE'), (e.value = '')
          },
          goNext: () => {
            n.value = 'AFTER'
          },
          over: t,
        })
      return (
        he(e, () => {
          const {
            state: _,
            start: E,
            pause: D,
            resume: H,
            stop: Q,
          } = xs(
            Number(e.value),
            function () {
              g.over = !1
            },
            function () {
              ;(g.screenState = 'BEFORE'),
                (g.startState = 'NOT_START'),
                (g.inputNumber = ''),
                r.value && r.value.play(),
                (g.over = !0)
            }
          )
          ;(g.timeState = _),
            (g.startReal = E),
            (g.pauseReal = D),
            (g.resumeReal = H),
            (g.stopReal = Q),
            (g.go = () => {
              g.startReal(),
                (g.startState = 'STARTED'),
                (g.screenState = 'AFTER')
            }),
            (g.pause = () => {
              console.log('- call pause'),
                g.pauseReal(),
                (g.startState = 'PAUSED')
            }),
            (g.resume = () => {
              console.log('- call resume'),
                g.resumeReal(),
                (g.startState = 'STARTED')
            }),
            (g.goBack = () => {
              g.stopReal(),
                (g.startState = 'NOT_STARTED'),
                (g.screenState = 'BEFORE'),
                (g.inputNumber = '')
            })
        }),
        {
          data: g,
          inputNumber: e,
          audioRef: r,
          color: s,
          styleVar: l,
          noShadow: !!s.noneshadow,
        }
      )
    },
    mounted() {
      this.audioRef = this.$refs.timeoutRef
    },
  }),
  _h = (e) => (Bu('data-v-c615913c'), (e = e()), Nu(), e),
  wh = Vn(' \uE649 '),
  xh = Vn(' \u91CD\u65B0\u8BA1\u65F6 '),
  Ch = {
    key: 1,
    class: 'inner inner-before flex column items-center justify-around',
  },
  Eh = Ec(
    '<div class="preview-area flex items-center justify-center relative" data-v-c615913c><div class="circle1 flex items-center justify-center relative" data-v-c615913c></div><div class="circle2 flex items-center justify-center absolute" data-v-c615913c><span data-v-c615913c><span class="text" data-v-c615913c>0</span><span class="text-body2" data-v-c615913c>.00</span></span></div></div>',
    1
  ),
  Sh = Vn('Go'),
  kh = {
    key: 2,
    class: 'inner inner-after flex column items-center justify-center relative',
  },
  Rh = _h(() =>
    lt(
      'div',
      { class: 'circle1 flex items-center justify-center relative' },
      null,
      -1
    )
  ),
  Th = { class: 'text' },
  Ph = { class: 'text-body2' },
  Ah = Vn(' \u70B9\u51FB\u6682\u505C/\u7EE7\u7EED '),
  Mh = { ref: 'timeoutRef', src: 'http://afan.goea.xyz/timeout.mp3' }
function Oh(e, t, n, o, r, i) {
  return (
    qt(),
    Xn(
      'div',
      { class: 'clock-container q-mx-auto', style: Tr(e.styleVar) },
      [
        lt(
          'div',
          {
            class: Pr({
              'square flex items-center justify-center relative-position': !0,
              blink: e.data.over,
              'box-shadow': !e.noShadow,
              'no-shadow': !!e.noShadow,
            }),
          },
          [
            e.data.screenState === 'AFTER'
              ? (qt(),
                Xn(
                  'i',
                  {
                    key: 0,
                    onClick:
                      t[0] ||
                      (t[0] = (...s) => e.data.goBack && e.data.goBack(...s)),
                    class:
                      'icon-back iconfont absolute-top-left cursor-pointer',
                  },
                  [wh, Se(is, null, { default: _n(() => [xh]), _: 1 })]
                ))
              : Yr('', !0),
            e.data.screenState === 'BEFORE'
              ? (qt(),
                Xn('div', Ch, [
                  Eh,
                  Se(
                    vh,
                    {
                      rounded: '',
                      dense: '',
                      outlined: '',
                      modelValue: e.inputNumber,
                      'onUpdate:modelValue':
                        t[1] || (t[1] = (s) => (e.inputNumber = s)),
                      placeholder: '\u8F93\u5165\u65F6\u95F4(\u79D2)',
                      class: 'input-time-area q-mb-md',
                      color: e.color.name,
                    },
                    {
                      append: _n(() => [
                        Se(
                          da,
                          {
                            class: 'btn-go',
                            dense: '',
                            rounded: '',
                            flat: '',
                            padding: '4px 12px',
                            onClick: e.data.go,
                          },
                          { default: _n(() => [Sh]), _: 1 },
                          8,
                          ['onClick']
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ['modelValue', 'color']
                  ),
                ]))
              : Yr('', !0),
            e.data.screenState === 'AFTER'
              ? (qt(),
                Xn('div', kh, [
                  Rh,
                  lt(
                    'div',
                    {
                      class:
                        'circle2 flex items-center justify-center cursor-pointer absolute',
                      onClick:
                        t[2] ||
                        (t[2] = () => {
                          e.data.startState === 'PAUSED'
                            ? e.data.resume()
                            : e.data.startState === 'STARTED' && e.data.pause()
                        }),
                    },
                    [
                      lt('span', null, [
                        lt('span', Th, hi(e.data.timeState.seconds), 1),
                        lt(
                          'span',
                          Ph,
                          '.' + hi(e.data.timeState.millSeconds10.slice(0, 2)),
                          1
                        ),
                        Se(is, null, { default: _n(() => [Ah]), _: 1 }),
                      ]),
                    ]
                  ),
                ]))
              : Yr('', !0),
          ],
          2
        ),
        lt('audio', Mh, null, 512),
      ],
      4
    )
  )
}
var va = ga(yh, [
    ['render', Oh],
    ['__scopeId', 'data-v-c615913c'],
  ]),
  $h = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: va },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  )
const Lh = Hn({ name: 'App', components: { TomatoClock: va } })
function Fh(e, t, n, o, r, i) {
  const s = yc('tomato-clock')
  return qt(), Go(s)
}
var qh = ga(Lh, [['render', Fh]])
function xp(e) {
  return e
}
var Bh = !1
/*!
 * pinia v2.0.13
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const Nh = (e) => e,
  Ih = Symbol()
var Cs
;(function (e) {
  ;(e.direct = 'direct'),
    (e.patchObject = 'patch object'),
    (e.patchFunction = 'patch function')
})(Cs || (Cs = {}))
function jh() {
  const e = Ya(!0),
    t = e.run(() => fe({}))
  let n = [],
    o = []
  const r = Vt({
    install(i) {
      Nh(r),
        (r._a = i),
        i.provide(Ih, r),
        (i.config.globalProperties.$pinia = r),
        o.forEach((s) => n.push(s)),
        (o = [])
    },
    use(i) {
      return !this._a && !Bh ? o.push(i) : n.push(i), this
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  })
  return r
}
var no = () => jh()
/*!
 * vue-router v4.0.14
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const ba =
    typeof Symbol == 'function' && typeof Symbol.toStringTag == 'symbol',
  dn = (e) => (ba ? Symbol(e) : '_vr_' + e),
  Dh = dn('rvlm'),
  Es = dn('rvd'),
  ri = dn('r'),
  ya = dn('rl'),
  Ao = dn('rvl'),
  Jt = typeof window != 'undefined'
function Hh(e) {
  return e.__esModule || (ba && e[Symbol.toStringTag] === 'Module')
}
const ge = Object.assign
function ro(e, t) {
  const n = {}
  for (const o in t) {
    const r = t[o]
    n[o] = Array.isArray(r) ? r.map(e) : e(r)
  }
  return n
}
const Tn = () => {},
  Vh = /\/$/,
  zh = (e) => e.replace(Vh, '')
function oo(e, t, n = '/') {
  let o,
    r = {},
    i = '',
    s = ''
  const l = t.indexOf('?'),
    a = t.indexOf('#', l > -1 ? l : 0)
  return (
    l > -1 &&
      ((o = t.slice(0, l)),
      (i = t.slice(l + 1, a > -1 ? a : t.length)),
      (r = e(i))),
    a > -1 && ((o = o || t.slice(0, a)), (s = t.slice(a, t.length))),
    (o = Qh(o != null ? o : t, n)),
    { fullPath: o + (i && '?') + i + s, path: o, query: r, hash: s }
  )
}
function Uh(e, t) {
  const n = t.query ? e(t.query) : ''
  return t.path + (n && '?') + n + (t.hash || '')
}
function Ss(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || '/'
}
function Kh(e, t, n) {
  const o = t.matched.length - 1,
    r = n.matched.length - 1
  return (
    o > -1 &&
    o === r &&
    ln(t.matched[o], n.matched[r]) &&
    _a(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function ln(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function _a(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!Wh(e[n], t[n])) return !1
  return !0
}
function Wh(e, t) {
  return Array.isArray(e) ? ks(e, t) : Array.isArray(t) ? ks(t, e) : e === t
}
function ks(e, t) {
  return Array.isArray(t)
    ? e.length === t.length && e.every((n, o) => n === t[o])
    : e.length === 1 && e[0] === t
}
function Qh(e, t) {
  if (e.startsWith('/')) return e
  if (!e) return t
  const n = t.split('/'),
    o = e.split('/')
  let r = n.length - 1,
    i,
    s
  for (i = 0; i < o.length; i++)
    if (((s = o[i]), !(r === 1 || s === '.')))
      if (s === '..') r--
      else break
  return (
    n.slice(0, r).join('/') +
    '/' +
    o.slice(i - (i === o.length ? 1 : 0)).join('/')
  )
}
var Dn
;(function (e) {
  ;(e.pop = 'pop'), (e.push = 'push')
})(Dn || (Dn = {}))
var Pn
;(function (e) {
  ;(e.back = 'back'), (e.forward = 'forward'), (e.unknown = '')
})(Pn || (Pn = {}))
function Zh(e) {
  if (!e)
    if (Jt) {
      const t = document.querySelector('base')
      ;(e = (t && t.getAttribute('href')) || '/'),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ''))
    } else e = '/'
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), zh(e)
}
const Yh = /^[^#]+#/
function Jh(e, t) {
  return e.replace(Yh, '#') + t
}
function Xh(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    o = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0),
  }
}
const Ur = () => ({ left: window.pageXOffset, top: window.pageYOffset })
function Gh(e) {
  let t
  if ('el' in e) {
    const n = e.el,
      o = typeof n == 'string' && n.startsWith('#'),
      r =
        typeof n == 'string'
          ? o
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n
    if (!r) return
    t = Xh(r, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset
      )
}
function Rs(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const Mo = new Map()
function em(e, t) {
  Mo.set(e, t)
}
function tm(e) {
  const t = Mo.get(e)
  return Mo.delete(e), t
}
let nm = () => location.protocol + '//' + location.host
function wa(e, t) {
  const { pathname: n, search: o, hash: r } = t,
    i = e.indexOf('#')
  if (i > -1) {
    let l = r.includes(e.slice(i)) ? e.slice(i).length : 1,
      a = r.slice(l)
    return a[0] !== '/' && (a = '/' + a), Ss(a, '')
  }
  return Ss(n, e) + o + r
}
function rm(e, t, n, o) {
  let r = [],
    i = [],
    s = null
  const l = ({ state: f }) => {
    const m = wa(e, location),
      v = n.value,
      T = t.value
    let g = 0
    if (f) {
      if (((n.value = m), (t.value = f), s && s === v)) {
        s = null
        return
      }
      g = T ? f.position - T.position : 0
    } else o(m)
    r.forEach((_) => {
      _(n.value, v, {
        delta: g,
        type: Dn.pop,
        direction: g ? (g > 0 ? Pn.forward : Pn.back) : Pn.unknown,
      })
    })
  }
  function a() {
    s = n.value
  }
  function u(f) {
    r.push(f)
    const m = () => {
      const v = r.indexOf(f)
      v > -1 && r.splice(v, 1)
    }
    return i.push(m), m
  }
  function c() {
    const { history: f } = window
    !f.state || f.replaceState(ge({}, f.state, { scroll: Ur() }), '')
  }
  function h() {
    for (const f of i) f()
    ;(i = []),
      window.removeEventListener('popstate', l),
      window.removeEventListener('beforeunload', c)
  }
  return (
    window.addEventListener('popstate', l),
    window.addEventListener('beforeunload', c),
    { pauseListeners: a, listen: u, destroy: h }
  )
}
function Ts(e, t, n, o = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: r ? Ur() : null,
  }
}
function om(e) {
  const { history: t, location: n } = window,
    o = { value: wa(e, n) },
    r = { value: t.state }
  r.value ||
    i(
      o.value,
      {
        back: null,
        current: o.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    )
  function i(a, u, c) {
    const h = e.indexOf('#'),
      f =
        h > -1
          ? (n.host && document.querySelector('base') ? e : e.slice(h)) + a
          : nm() + e + a
    try {
      t[c ? 'replaceState' : 'pushState'](u, '', f), (r.value = u)
    } catch (m) {
      console.error(m), n[c ? 'replace' : 'assign'](f)
    }
  }
  function s(a, u) {
    const c = ge({}, t.state, Ts(r.value.back, a, r.value.forward, !0), u, {
      position: r.value.position,
    })
    i(a, c, !0), (o.value = a)
  }
  function l(a, u) {
    const c = ge({}, r.value, t.state, { forward: a, scroll: Ur() })
    i(c.current, c, !0)
    const h = ge({}, Ts(o.value, a, null), { position: c.position + 1 }, u)
    i(a, h, !1), (o.value = a)
  }
  return { location: o, state: r, push: l, replace: s }
}
function im(e) {
  e = Zh(e)
  const t = om(e),
    n = rm(e, t.state, t.location, t.replace)
  function o(i, s = !0) {
    s || n.pauseListeners(), history.go(i)
  }
  const r = ge(
    { location: '', base: e, go: o, createHref: Jh.bind(null, e) },
    t,
    n
  )
  return (
    Object.defineProperty(r, 'location', {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(r, 'state', {
      enumerable: !0,
      get: () => t.state.value,
    }),
    r
  )
}
function sm(e) {
  return typeof e == 'string' || (e && typeof e == 'object')
}
function xa(e) {
  return typeof e == 'string' || typeof e == 'symbol'
}
const pt = {
    path: '/',
    name: void 0,
    params: {},
    query: {},
    hash: '',
    fullPath: '/',
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  Ca = dn('nf')
var Ps
;(function (e) {
  ;(e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated')
})(Ps || (Ps = {}))
function an(e, t) {
  return ge(new Error(), { type: e, [Ca]: !0 }, t)
}
function gt(e, t) {
  return e instanceof Error && Ca in e && (t == null || !!(e.type & t))
}
const As = '[^/]+?',
  lm = { sensitive: !1, strict: !1, start: !0, end: !0 },
  am = /[.+*?^${}()[\]/\\]/g
function um(e, t) {
  const n = ge({}, lm, t),
    o = []
  let r = n.start ? '^' : ''
  const i = []
  for (const u of e) {
    const c = u.length ? [] : [90]
    n.strict && !u.length && (r += '/')
    for (let h = 0; h < u.length; h++) {
      const f = u[h]
      let m = 40 + (n.sensitive ? 0.25 : 0)
      if (f.type === 0)
        h || (r += '/'), (r += f.value.replace(am, '\\$&')), (m += 40)
      else if (f.type === 1) {
        const { value: v, repeatable: T, optional: g, regexp: _ } = f
        i.push({ name: v, repeatable: T, optional: g })
        const E = _ || As
        if (E !== As) {
          m += 10
          try {
            new RegExp(`(${E})`)
          } catch (H) {
            throw new Error(
              `Invalid custom RegExp for param "${v}" (${E}): ` + H.message
            )
          }
        }
        let D = T ? `((?:${E})(?:/(?:${E}))*)` : `(${E})`
        h || (D = g && u.length < 2 ? `(?:/${D})` : '/' + D),
          g && (D += '?'),
          (r += D),
          (m += 20),
          g && (m += -8),
          T && (m += -20),
          E === '.*' && (m += -50)
      }
      c.push(m)
    }
    o.push(c)
  }
  if (n.strict && n.end) {
    const u = o.length - 1
    o[u][o[u].length - 1] += 0.7000000000000001
  }
  n.strict || (r += '/?'), n.end ? (r += '$') : n.strict && (r += '(?:/|$)')
  const s = new RegExp(r, n.sensitive ? '' : 'i')
  function l(u) {
    const c = u.match(s),
      h = {}
    if (!c) return null
    for (let f = 1; f < c.length; f++) {
      const m = c[f] || '',
        v = i[f - 1]
      h[v.name] = m && v.repeatable ? m.split('/') : m
    }
    return h
  }
  function a(u) {
    let c = '',
      h = !1
    for (const f of e) {
      ;(!h || !c.endsWith('/')) && (c += '/'), (h = !1)
      for (const m of f)
        if (m.type === 0) c += m.value
        else if (m.type === 1) {
          const { value: v, repeatable: T, optional: g } = m,
            _ = v in u ? u[v] : ''
          if (Array.isArray(_) && !T)
            throw new Error(
              `Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`
            )
          const E = Array.isArray(_) ? _.join('/') : _
          if (!E)
            if (g)
              f.length < 2 &&
                (c.endsWith('/') ? (c = c.slice(0, -1)) : (h = !0))
            else throw new Error(`Missing required param "${v}"`)
          c += E
        }
    }
    return c
  }
  return { re: s, score: o, keys: i, parse: l, stringify: a }
}
function cm(e, t) {
  let n = 0
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n]
    if (o) return o
    n++
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0
}
function fm(e, t) {
  let n = 0
  const o = e.score,
    r = t.score
  for (; n < o.length && n < r.length; ) {
    const i = cm(o[n], r[n])
    if (i) return i
    n++
  }
  return r.length - o.length
}
const dm = { type: 0, value: '' },
  hm = /[a-zA-Z0-9_]/
function mm(e) {
  if (!e) return [[]]
  if (e === '/') return [[dm]]
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`)
  function t(m) {
    throw new Error(`ERR (${n})/"${u}": ${m}`)
  }
  let n = 0,
    o = n
  const r = []
  let i
  function s() {
    i && r.push(i), (i = [])
  }
  let l = 0,
    a,
    u = '',
    c = ''
  function h() {
    !u ||
      (n === 0
        ? i.push({ type: 0, value: u })
        : n === 1 || n === 2 || n === 3
        ? (i.length > 1 &&
            (a === '*' || a === '+') &&
            t(
              `A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`
            ),
          i.push({
            type: 1,
            value: u,
            regexp: c,
            repeatable: a === '*' || a === '+',
            optional: a === '*' || a === '?',
          }))
        : t('Invalid state to consume buffer'),
      (u = ''))
  }
  function f() {
    u += a
  }
  for (; l < e.length; ) {
    if (((a = e[l++]), a === '\\' && n !== 2)) {
      ;(o = n), (n = 4)
      continue
    }
    switch (n) {
      case 0:
        a === '/' ? (u && h(), s()) : a === ':' ? (h(), (n = 1)) : f()
        break
      case 4:
        f(), (n = o)
        break
      case 1:
        a === '('
          ? (n = 2)
          : hm.test(a)
          ? f()
          : (h(), (n = 0), a !== '*' && a !== '?' && a !== '+' && l--)
        break
      case 2:
        a === ')'
          ? c[c.length - 1] == '\\'
            ? (c = c.slice(0, -1) + a)
            : (n = 3)
          : (c += a)
        break
      case 3:
        h(), (n = 0), a !== '*' && a !== '?' && a !== '+' && l--, (c = '')
        break
      default:
        t('Unknown state')
        break
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), h(), s(), r
}
function pm(e, t, n) {
  const o = um(mm(e.path), n),
    r = ge(o, { record: e, parent: t, children: [], alias: [] })
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r
}
function gm(e, t) {
  const n = [],
    o = new Map()
  t = Os({ strict: !1, end: !0, sensitive: !1 }, t)
  function r(c) {
    return o.get(c)
  }
  function i(c, h, f) {
    const m = !f,
      v = bm(c)
    v.aliasOf = f && f.record
    const T = Os(t, c),
      g = [v]
    if ('alias' in c) {
      const D = typeof c.alias == 'string' ? [c.alias] : c.alias
      for (const H of D)
        g.push(
          ge({}, v, {
            components: f ? f.record.components : v.components,
            path: H,
            aliasOf: f ? f.record : v,
          })
        )
    }
    let _, E
    for (const D of g) {
      const { path: H } = D
      if (h && H[0] !== '/') {
        const Q = h.record.path,
          y = Q[Q.length - 1] === '/' ? '' : '/'
        D.path = h.record.path + (H && y + H)
      }
      if (
        ((_ = pm(D, h, T)),
        f
          ? f.alias.push(_)
          : ((E = E || _),
            E !== _ && E.alias.push(_),
            m && c.name && !Ms(_) && s(c.name)),
        'children' in v)
      ) {
        const Q = v.children
        for (let y = 0; y < Q.length; y++) i(Q[y], _, f && f.children[y])
      }
      ;(f = f || _), a(_)
    }
    return E
      ? () => {
          s(E)
        }
      : Tn
  }
  function s(c) {
    if (xa(c)) {
      const h = o.get(c)
      h &&
        (o.delete(c),
        n.splice(n.indexOf(h), 1),
        h.children.forEach(s),
        h.alias.forEach(s))
    } else {
      const h = n.indexOf(c)
      h > -1 &&
        (n.splice(h, 1),
        c.record.name && o.delete(c.record.name),
        c.children.forEach(s),
        c.alias.forEach(s))
    }
  }
  function l() {
    return n
  }
  function a(c) {
    let h = 0
    for (
      ;
      h < n.length &&
      fm(c, n[h]) >= 0 &&
      (c.record.path !== n[h].record.path || !Ea(c, n[h]));

    )
      h++
    n.splice(h, 0, c), c.record.name && !Ms(c) && o.set(c.record.name, c)
  }
  function u(c, h) {
    let f,
      m = {},
      v,
      T
    if ('name' in c && c.name) {
      if (((f = o.get(c.name)), !f)) throw an(1, { location: c })
      ;(T = f.record.name),
        (m = ge(
          vm(
            h.params,
            f.keys.filter((E) => !E.optional).map((E) => E.name)
          ),
          c.params
        )),
        (v = f.stringify(m))
    } else if ('path' in c)
      (v = c.path),
        (f = n.find((E) => E.re.test(v))),
        f && ((m = f.parse(v)), (T = f.record.name))
    else {
      if (((f = h.name ? o.get(h.name) : n.find((E) => E.re.test(h.path))), !f))
        throw an(1, { location: c, currentLocation: h })
      ;(T = f.record.name),
        (m = ge({}, h.params, c.params)),
        (v = f.stringify(m))
    }
    const g = []
    let _ = f
    for (; _; ) g.unshift(_.record), (_ = _.parent)
    return { name: T, path: v, params: m, matched: g, meta: _m(g) }
  }
  return (
    e.forEach((c) => i(c)),
    {
      addRoute: i,
      resolve: u,
      removeRoute: s,
      getRoutes: l,
      getRecordMatcher: r,
    }
  )
}
function vm(e, t) {
  const n = {}
  for (const o of t) o in e && (n[o] = e[o])
  return n
}
function bm(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: ym(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      'components' in e ? e.components || {} : { default: e.component },
  }
}
function ym(e) {
  const t = {},
    n = e.props || !1
  if ('component' in e) t.default = n
  else for (const o in e.components) t[o] = typeof n == 'boolean' ? n : n[o]
  return t
}
function Ms(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function _m(e) {
  return e.reduce((t, n) => ge(t, n.meta), {})
}
function Os(e, t) {
  const n = {}
  for (const o in e) n[o] = o in t ? t[o] : e[o]
  return n
}
function Ea(e, t) {
  return t.children.some((n) => n === e || Ea(e, n))
}
const Sa = /#/g,
  wm = /&/g,
  xm = /\//g,
  Cm = /=/g,
  Em = /\?/g,
  ka = /\+/g,
  Sm = /%5B/g,
  km = /%5D/g,
  Ra = /%5E/g,
  Rm = /%60/g,
  Ta = /%7B/g,
  Tm = /%7C/g,
  Pa = /%7D/g,
  Pm = /%20/g
function oi(e) {
  return encodeURI('' + e)
    .replace(Tm, '|')
    .replace(Sm, '[')
    .replace(km, ']')
}
function Am(e) {
  return oi(e).replace(Ta, '{').replace(Pa, '}').replace(Ra, '^')
}
function Oo(e) {
  return oi(e)
    .replace(ka, '%2B')
    .replace(Pm, '+')
    .replace(Sa, '%23')
    .replace(wm, '%26')
    .replace(Rm, '`')
    .replace(Ta, '{')
    .replace(Pa, '}')
    .replace(Ra, '^')
}
function Mm(e) {
  return Oo(e).replace(Cm, '%3D')
}
function Om(e) {
  return oi(e).replace(Sa, '%23').replace(Em, '%3F')
}
function $m(e) {
  return e == null ? '' : Om(e).replace(xm, '%2F')
}
function Rr(e) {
  try {
    return decodeURIComponent('' + e)
  } catch {}
  return '' + e
}
function Lm(e) {
  const t = {}
  if (e === '' || e === '?') return t
  const o = (e[0] === '?' ? e.slice(1) : e).split('&')
  for (let r = 0; r < o.length; ++r) {
    const i = o[r].replace(ka, ' '),
      s = i.indexOf('='),
      l = Rr(s < 0 ? i : i.slice(0, s)),
      a = s < 0 ? null : Rr(i.slice(s + 1))
    if (l in t) {
      let u = t[l]
      Array.isArray(u) || (u = t[l] = [u]), u.push(a)
    } else t[l] = a
  }
  return t
}
function $s(e) {
  let t = ''
  for (let n in e) {
    const o = e[n]
    if (((n = Mm(n)), o == null)) {
      o !== void 0 && (t += (t.length ? '&' : '') + n)
      continue
    }
    ;(Array.isArray(o) ? o.map((i) => i && Oo(i)) : [o && Oo(o)]).forEach(
      (i) => {
        i !== void 0 &&
          ((t += (t.length ? '&' : '') + n), i != null && (t += '=' + i))
      }
    )
  }
  return t
}
function Fm(e) {
  const t = {}
  for (const n in e) {
    const o = e[n]
    o !== void 0 &&
      (t[n] = Array.isArray(o)
        ? o.map((r) => (r == null ? null : '' + r))
        : o == null
        ? o
        : '' + o)
  }
  return t
}
function gn() {
  let e = []
  function t(o) {
    return (
      e.push(o),
      () => {
        const r = e.indexOf(o)
        r > -1 && e.splice(r, 1)
      }
    )
  }
  function n() {
    e = []
  }
  return { add: t, list: () => e, reset: n }
}
function wt(e, t, n, o, r) {
  const i = o && (o.enterCallbacks[r] = o.enterCallbacks[r] || [])
  return () =>
    new Promise((s, l) => {
      const a = (h) => {
          h === !1
            ? l(an(4, { from: n, to: t }))
            : h instanceof Error
            ? l(h)
            : sm(h)
            ? l(an(2, { from: t, to: h }))
            : (i &&
                o.enterCallbacks[r] === i &&
                typeof h == 'function' &&
                i.push(h),
              s())
        },
        u = e.call(o && o.instances[r], t, n, a)
      let c = Promise.resolve(u)
      e.length < 3 && (c = c.then(a)), c.catch((h) => l(h))
    })
}
function io(e, t, n, o) {
  const r = []
  for (const i of e)
    for (const s in i.components) {
      let l = i.components[s]
      if (!(t !== 'beforeRouteEnter' && !i.instances[s]))
        if (qm(l)) {
          const u = (l.__vccOpts || l)[t]
          u && r.push(wt(u, n, o, i, s))
        } else {
          let a = l()
          r.push(() =>
            a.then((u) => {
              if (!u)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${s}" at "${i.path}"`)
                )
              const c = Hh(u) ? u.default : u
              i.components[s] = c
              const f = (c.__vccOpts || c)[t]
              return f && wt(f, n, o, i, s)()
            })
          )
        }
    }
  return r
}
function qm(e) {
  return (
    typeof e == 'object' ||
    'displayName' in e ||
    'props' in e ||
    '__vccOpts' in e
  )
}
function Ls(e) {
  const t = ut(ri),
    n = ut(ya),
    o = O(() => t.resolve(xn(e.to))),
    r = O(() => {
      const { matched: a } = o.value,
        { length: u } = a,
        c = a[u - 1],
        h = n.matched
      if (!c || !h.length) return -1
      const f = h.findIndex(ln.bind(null, c))
      if (f > -1) return f
      const m = Fs(a[u - 2])
      return u > 1 && Fs(c) === m && h[h.length - 1].path !== m
        ? h.findIndex(ln.bind(null, a[u - 2]))
        : f
    }),
    i = O(() => r.value > -1 && jm(n.params, o.value.params)),
    s = O(
      () =>
        r.value > -1 &&
        r.value === n.matched.length - 1 &&
        _a(n.params, o.value.params)
    )
  function l(a = {}) {
    return Im(a)
      ? t[xn(e.replace) ? 'replace' : 'push'](xn(e.to)).catch(Tn)
      : Promise.resolve()
  }
  return {
    route: o,
    href: O(() => o.value.href),
    isActive: i,
    isExactActive: s,
    navigate: l,
  }
}
const Bm = Hn({
    name: 'RouterLink',
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' },
    },
    useLink: Ls,
    setup(e, { slots: t }) {
      const n = ft(Ls(e)),
        { options: o } = ut(ri),
        r = O(() => ({
          [qs(e.activeClass, o.linkActiveClass, 'router-link-active')]:
            n.isActive,
          [qs(
            e.exactActiveClass,
            o.linkExactActiveClass,
            'router-link-exact-active'
          )]: n.isExactActive,
        }))
      return () => {
        const i = t.default && t.default(n)
        return e.custom
          ? i
          : N(
              'a',
              {
                'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: r.value,
              },
              i
            )
      }
    },
  }),
  Nm = Bm
function Im(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target')
      if (/\b_blank\b/i.test(t)) return
    }
    return e.preventDefault && e.preventDefault(), !0
  }
}
function jm(e, t) {
  for (const n in t) {
    const o = t[n],
      r = e[n]
    if (typeof o == 'string') {
      if (o !== r) return !1
    } else if (
      !Array.isArray(r) ||
      r.length !== o.length ||
      o.some((i, s) => i !== r[s])
    )
      return !1
  }
  return !0
}
function Fs(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const qs = (e, t, n) => (e != null ? e : t != null ? t : n),
  Dm = Hn({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    setup(e, { attrs: t, slots: n }) {
      const o = ut(Ao),
        r = O(() => e.route || o.value),
        i = ut(Es, 0),
        s = O(() => r.value.matched[i])
      ir(Es, i + 1), ir(Dh, s), ir(Ao, r)
      const l = fe()
      return (
        he(
          () => [l.value, s.value, e.name],
          ([a, u, c], [h, f, m]) => {
            u &&
              ((u.instances[c] = a),
              f &&
                f !== u &&
                a &&
                a === h &&
                (u.leaveGuards.size || (u.leaveGuards = f.leaveGuards),
                u.updateGuards.size || (u.updateGuards = f.updateGuards))),
              a &&
                u &&
                (!f || !ln(u, f) || !h) &&
                (u.enterCallbacks[c] || []).forEach((v) => v(a))
          },
          { flush: 'post' }
        ),
        () => {
          const a = r.value,
            u = s.value,
            c = u && u.components[e.name],
            h = e.name
          if (!c) return Bs(n.default, { Component: c, route: a })
          const f = u.props[e.name],
            m = f
              ? f === !0
                ? a.params
                : typeof f == 'function'
                ? f(a)
                : f
              : null,
            T = N(
              c,
              ge({}, m, t, {
                onVnodeUnmounted: (g) => {
                  g.component.isUnmounted && (u.instances[h] = null)
                },
                ref: l,
              })
            )
          return Bs(n.default, { Component: T, route: a }) || T
        }
      )
    },
  })
function Bs(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const Hm = Dm
function Vm(e) {
  const t = gm(e.routes, e),
    n = e.parseQuery || Lm,
    o = e.stringifyQuery || $s,
    r = e.history,
    i = gn(),
    s = gn(),
    l = gn(),
    a = Eu(pt)
  let u = pt
  Jt &&
    e.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual')
  const c = ro.bind(null, (C) => '' + C),
    h = ro.bind(null, $m),
    f = ro.bind(null, Rr)
  function m(C, W) {
    let I, J
    return (
      xa(C) ? ((I = t.getRecordMatcher(C)), (J = W)) : (J = C), t.addRoute(J, I)
    )
  }
  function v(C) {
    const W = t.getRecordMatcher(C)
    W && t.removeRoute(W)
  }
  function T() {
    return t.getRoutes().map((C) => C.record)
  }
  function g(C) {
    return !!t.getRecordMatcher(C)
  }
  function _(C, W) {
    if (((W = ge({}, W || a.value)), typeof C == 'string')) {
      const re = oo(n, C, W.path),
        d = t.resolve({ path: re.path }, W),
        p = r.createHref(re.fullPath)
      return ge(re, d, {
        params: f(d.params),
        hash: Rr(re.hash),
        redirectedFrom: void 0,
        href: p,
      })
    }
    let I
    if ('path' in C) I = ge({}, C, { path: oo(n, C.path, W.path).path })
    else {
      const re = ge({}, C.params)
      for (const d in re) re[d] == null && delete re[d]
      ;(I = ge({}, C, { params: h(C.params) })), (W.params = h(W.params))
    }
    const J = t.resolve(I, W),
      me = C.hash || ''
    J.params = c(f(J.params))
    const be = Uh(o, ge({}, C, { hash: Am(me), path: J.path })),
      se = r.createHref(be)
    return ge(
      { fullPath: be, hash: me, query: o === $s ? Fm(C.query) : C.query || {} },
      J,
      { redirectedFrom: void 0, href: se }
    )
  }
  function E(C) {
    return typeof C == 'string' ? oo(n, C, a.value.path) : ge({}, C)
  }
  function D(C, W) {
    if (u !== C) return an(8, { from: W, to: C })
  }
  function H(C) {
    return x(C)
  }
  function Q(C) {
    return H(ge(E(C), { replace: !0 }))
  }
  function y(C) {
    const W = C.matched[C.matched.length - 1]
    if (W && W.redirect) {
      const { redirect: I } = W
      let J = typeof I == 'function' ? I(C) : I
      return (
        typeof J == 'string' &&
          ((J = J.includes('?') || J.includes('#') ? (J = E(J)) : { path: J }),
          (J.params = {})),
        ge({ query: C.query, hash: C.hash, params: C.params }, J)
      )
    }
  }
  function x(C, W) {
    const I = (u = _(C)),
      J = a.value,
      me = C.state,
      be = C.force,
      se = C.replace === !0,
      re = y(I)
    if (re) return x(ge(E(re), { state: me, force: be, replace: se }), W || I)
    const d = I
    d.redirectedFrom = W
    let p
    return (
      !be &&
        Kh(o, J, I) &&
        ((p = an(16, { to: d, from: J })), le(J, J, !0, !1)),
      (p ? Promise.resolve(p) : M(d, J))
        .catch((b) => (gt(b) ? (gt(b, 2) ? b : L(b)) : w(b, d, J)))
        .then((b) => {
          if (b) {
            if (gt(b, 2))
              return x(
                ge(E(b.to), { state: me, force: be, replace: se }),
                W || d
              )
          } else b = $(d, J, !0, se, me)
          return B(d, J, b), b
        })
    )
  }
  function A(C, W) {
    const I = D(C, W)
    return I ? Promise.reject(I) : Promise.resolve()
  }
  function M(C, W) {
    let I
    const [J, me, be] = zm(C, W)
    I = io(J.reverse(), 'beforeRouteLeave', C, W)
    for (const re of J)
      re.leaveGuards.forEach((d) => {
        I.push(wt(d, C, W))
      })
    const se = A.bind(null, C, W)
    return (
      I.push(se),
      Qt(I)
        .then(() => {
          I = []
          for (const re of i.list()) I.push(wt(re, C, W))
          return I.push(se), Qt(I)
        })
        .then(() => {
          I = io(me, 'beforeRouteUpdate', C, W)
          for (const re of me)
            re.updateGuards.forEach((d) => {
              I.push(wt(d, C, W))
            })
          return I.push(se), Qt(I)
        })
        .then(() => {
          I = []
          for (const re of C.matched)
            if (re.beforeEnter && !W.matched.includes(re))
              if (Array.isArray(re.beforeEnter))
                for (const d of re.beforeEnter) I.push(wt(d, C, W))
              else I.push(wt(re.beforeEnter, C, W))
          return I.push(se), Qt(I)
        })
        .then(
          () => (
            C.matched.forEach((re) => (re.enterCallbacks = {})),
            (I = io(be, 'beforeRouteEnter', C, W)),
            I.push(se),
            Qt(I)
          )
        )
        .then(() => {
          I = []
          for (const re of s.list()) I.push(wt(re, C, W))
          return I.push(se), Qt(I)
        })
        .catch((re) => (gt(re, 8) ? re : Promise.reject(re)))
    )
  }
  function B(C, W, I) {
    for (const J of l.list()) J(C, W, I)
  }
  function $(C, W, I, J, me) {
    const be = D(C, W)
    if (be) return be
    const se = W === pt,
      re = Jt ? history.state : {}
    I &&
      (J || se
        ? r.replace(C.fullPath, ge({ scroll: se && re && re.scroll }, me))
        : r.push(C.fullPath, me)),
      (a.value = C),
      le(C, W, I, se),
      L()
  }
  let R
  function z() {
    R = r.listen((C, W, I) => {
      const J = _(C),
        me = y(J)
      if (me) {
        x(ge(me, { replace: !0 }), J).catch(Tn)
        return
      }
      u = J
      const be = a.value
      Jt && em(Rs(be.fullPath, I.delta), Ur()),
        M(J, be)
          .catch((se) =>
            gt(se, 12)
              ? se
              : gt(se, 2)
              ? (x(se.to, J)
                  .then((re) => {
                    gt(re, 20) && !I.delta && I.type === Dn.pop && r.go(-1, !1)
                  })
                  .catch(Tn),
                Promise.reject())
              : (I.delta && r.go(-I.delta, !1), w(se, J, be))
          )
          .then((se) => {
            ;(se = se || $(J, be, !1)),
              se &&
                (I.delta
                  ? r.go(-I.delta, !1)
                  : I.type === Dn.pop && gt(se, 20) && r.go(-1, !1)),
              B(J, be, se)
          })
          .catch(Tn)
    })
  }
  let ee = gn(),
    V = gn(),
    Y
  function w(C, W, I) {
    L(C)
    const J = V.list()
    return (
      J.length ? J.forEach((me) => me(C, W, I)) : console.error(C),
      Promise.reject(C)
    )
  }
  function U() {
    return Y && a.value !== pt
      ? Promise.resolve()
      : new Promise((C, W) => {
          ee.add([C, W])
        })
  }
  function L(C) {
    return (
      Y ||
        ((Y = !C),
        z(),
        ee.list().forEach(([W, I]) => (C ? I(C) : W())),
        ee.reset()),
      C
    )
  }
  function le(C, W, I, J) {
    const { scrollBehavior: me } = e
    if (!Jt || !me) return Promise.resolve()
    const be =
      (!I && tm(Rs(C.fullPath, 0))) ||
      ((J || !I) && history.state && history.state.scroll) ||
      null
    return qe()
      .then(() => me(C, W, be))
      .then((se) => se && Gh(se))
      .catch((se) => w(se, C, W))
  }
  const Ce = (C) => r.go(C)
  let xe
  const de = new Set()
  return {
    currentRoute: a,
    addRoute: m,
    removeRoute: v,
    hasRoute: g,
    getRoutes: T,
    resolve: _,
    options: e,
    push: H,
    replace: Q,
    go: Ce,
    back: () => Ce(-1),
    forward: () => Ce(1),
    beforeEach: i.add,
    beforeResolve: s.add,
    afterEach: l.add,
    onError: V.add,
    isReady: U,
    install(C) {
      const W = this
      C.component('RouterLink', Nm),
        C.component('RouterView', Hm),
        (C.config.globalProperties.$router = W),
        Object.defineProperty(C.config.globalProperties, '$route', {
          enumerable: !0,
          get: () => xn(a),
        }),
        Jt &&
          !xe &&
          a.value === pt &&
          ((xe = !0), H(r.location).catch((me) => {}))
      const I = {}
      for (const me in pt) I[me] = O(() => a.value[me])
      C.provide(ri, W), C.provide(ya, ft(I)), C.provide(Ao, a)
      const J = C.unmount
      de.add(C),
        (C.unmount = function () {
          de.delete(C),
            de.size < 1 &&
              ((u = pt), R && R(), (a.value = pt), (xe = !1), (Y = !1)),
            J()
        })
    },
  }
}
function Qt(e) {
  return e.reduce((t, n) => t.then(() => n()), Promise.resolve())
}
function zm(e, t) {
  const n = [],
    o = [],
    r = [],
    i = Math.max(t.matched.length, e.matched.length)
  for (let s = 0; s < i; s++) {
    const l = t.matched[s]
    l && (e.matched.find((u) => ln(u, l)) ? o.push(l) : n.push(l))
    const a = e.matched[s]
    a && (t.matched.find((u) => ln(u, a)) || r.push(a))
  }
  return [n, o, r]
}
const Um = [
  {
    path: '/',
    component: () =>
      Lt(
        () => import('./MainLayout.84179613.js'),
        [
          'assets/MainLayout.84179613.js',
          'assets/MainLayout.846d53a1.css',
          'assets/QCard.568c79e5.js',
        ]
      ),
    children: [
      {
        path: '',
        component: () =>
          Lt(
            () => import('./IndexPage.a97d368c.js'),
            ['assets/IndexPage.a97d368c.js', 'assets/QCard.568c79e5.js']
          ),
      },
    ],
  },
  {
    path: '/widgets/tomatoClock',
    component: () =>
      Lt(
        () =>
          Promise.resolve().then(function () {
            return $h
          }),
        void 0
      ),
  },
  {
    path: '/:catchAll(.*)*',
    component: () => Lt(() => import('./ErrorNotFound.95f4fa00.js'), []),
  },
]
var so = function () {
  return Vm({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes: Um,
    history: im('/'),
  })
}
async function Km(e, t) {
  const n = e(qh)
  n.use(Hf, t)
  const o = typeof no == 'function' ? await no({}) : no
  n.use(o)
  const r = Vt(typeof so == 'function' ? await so({ store: o }) : so)
  return (
    o.use(({ store: i }) => {
      i.router = r
    }),
    { app: n, store: o, router: r }
  )
}
var Wm = kt({
  name: 'QAvatar',
  props: Ee(ie({}, Vr), {
    fontSize: String,
    color: String,
    textColor: String,
    icon: String,
    square: Boolean,
    rounded: Boolean,
  }),
  setup(e, { slots: t }) {
    const n = zr(e),
      o = O(
        () =>
          'q-avatar' +
          (e.color ? ` bg-${e.color}` : '') +
          (e.textColor ? ` text-${e.textColor} q-chip--colored` : '') +
          (e.square === !0
            ? ' q-avatar--square'
            : e.rounded === !0
            ? ' rounded-borders'
            : '')
      ),
      r = O(() => (e.fontSize ? { fontSize: e.fontSize } : null))
    return () => {
      const i = e.icon !== void 0 ? [N(sn, { name: e.icon })] : void 0
      return N('div', { class: o.value, style: n.value }, [
        N(
          'div',
          {
            class: 'q-avatar__content row flex-center overflow-hidden',
            style: r.value,
          },
          la(t.default, i)
        ),
      ])
    }
  },
})
let Qm = 0
const ar = {},
  ur = {},
  Ze = {},
  Aa = {},
  Zm = /^\s*$/,
  Ma = [],
  ii = [
    'top-left',
    'top-right',
    'bottom-left',
    'bottom-right',
    'top',
    'bottom',
    'left',
    'right',
    'center',
  ],
  Ym = ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
  Xt = {
    positive: { icon: (e) => e.iconSet.type.positive, color: 'positive' },
    negative: { icon: (e) => e.iconSet.type.negative, color: 'negative' },
    warning: {
      icon: (e) => e.iconSet.type.warning,
      color: 'warning',
      textColor: 'dark',
    },
    info: { icon: (e) => e.iconSet.type.info, color: 'info' },
    ongoing: { group: !1, timeout: 0, spinner: !0, color: 'grey-8' },
  }
function Oa(e, t, n) {
  if (!e) return vn('parameter required')
  let o
  const r = { textColor: 'white' }
  if (
    (e.ignoreDefaults !== !0 && Object.assign(r, ar),
    In(e) === !1 &&
      (r.type && Object.assign(r, Xt[r.type]), (e = { message: e })),
    Object.assign(r, Xt[e.type || r.type], e),
    typeof r.icon == 'function' && (r.icon = r.icon(t)),
    r.spinner
      ? (r.spinner === !0 && (r.spinner = ni), (r.spinner = Vt(r.spinner)))
      : (r.spinner = !1),
    (r.meta = {
      hasMedia: Boolean(r.spinner !== !1 || r.icon || r.avatar),
      hasText: Ns(r.message) || Ns(r.caption),
    }),
    r.position)
  ) {
    if (ii.includes(r.position) === !1) return vn('wrong position', e)
  } else r.position = 'bottom'
  if (r.timeout === void 0) r.timeout = 5e3
  else {
    const a = parseInt(r.timeout, 10)
    if (isNaN(a) || a < 0) return vn('wrong timeout', e)
    r.timeout = a
  }
  r.timeout === 0
    ? (r.progress = !1)
    : r.progress === !0 &&
      ((r.meta.progressClass =
        'q-notification__progress' +
        (r.progressClass ? ` ${r.progressClass}` : '')),
      (r.meta.progressStyle = { animationDuration: `${r.timeout + 1e3}ms` }))
  const i = (Array.isArray(e.actions) === !0 ? e.actions : [])
      .concat(
        e.ignoreDefaults !== !0 && Array.isArray(ar.actions) === !0
          ? ar.actions
          : []
      )
      .concat(
        Xt[e.type] !== void 0 && Array.isArray(Xt[e.type].actions) === !0
          ? Xt[e.type].actions
          : []
      ),
    { closeBtn: s } = r
  if (
    (s && i.push({ label: typeof s == 'string' ? s : t.lang.label.close }),
    (r.actions = i.map((h) => {
      var f = h,
        { handler: a, noDismiss: u } = f,
        c = Kr(f, ['handler', 'noDismiss'])
      return Ee(ie({ flat: !0 }, c), {
        onClick:
          typeof a == 'function'
            ? () => {
                a(), u !== !0 && l()
              }
            : () => {
                l()
              },
      })
    })),
    r.multiLine === void 0 && (r.multiLine = r.actions.length > 1),
    Object.assign(r.meta, {
      class:
        `q-notification row items-stretch q-notification--${
          r.multiLine === !0 ? 'multi-line' : 'standard'
        }` +
        (r.color !== void 0 ? ` bg-${r.color}` : '') +
        (r.textColor !== void 0 ? ` text-${r.textColor}` : '') +
        (r.classes !== void 0 ? ` ${r.classes}` : ''),
      wrapperClass:
        'q-notification__wrapper col relative-position border-radius-inherit ' +
        (r.multiLine === !0
          ? 'column no-wrap justify-center'
          : 'row items-center'),
      contentClass:
        'q-notification__content row items-center' +
        (r.multiLine === !0 ? '' : ' col'),
      leftClass: r.meta.hasText === !0 ? 'additional' : 'single',
      attrs: ie({ role: 'alert' }, r.attrs),
    }),
    r.group === !1
      ? ((r.group = void 0), (r.meta.group = void 0))
      : ((r.group === void 0 || r.group === !0) &&
          (r.group = [r.message, r.caption, r.multiline]
            .concat(r.actions.map((a) => `${a.label}*${a.icon}`))
            .join('|')),
        (r.meta.group = r.group + '|' + r.position)),
    r.actions.length === 0
      ? (r.actions = void 0)
      : (r.meta.actionsClass =
          'q-notification__actions row items-center ' +
          (r.multiLine === !0 ? 'justify-end' : 'col-auto') +
          (r.meta.hasMedia === !0
            ? ' q-notification__actions--with-media'
            : '')),
    n !== void 0)
  ) {
    clearTimeout(n.notif.meta.timer), (r.meta.uid = n.notif.meta.uid)
    const a = Ze[r.position].value.indexOf(n.notif)
    Ze[r.position].value[a] = r
  } else {
    const a = ur[r.meta.group]
    if (a === void 0) {
      if (
        ((r.meta.uid = Qm++),
        (r.meta.badge = 1),
        ['left', 'right', 'center'].indexOf(r.position) !== -1)
      )
        Ze[r.position].value.splice(
          Math.floor(Ze[r.position].value.length / 2),
          0,
          r
        )
      else {
        const u = r.position.indexOf('top') > -1 ? 'unshift' : 'push'
        Ze[r.position].value[u](r)
      }
      r.group !== void 0 && (ur[r.meta.group] = r)
    } else {
      if ((clearTimeout(a.meta.timer), r.badgePosition !== void 0)) {
        if (Ym.includes(r.badgePosition) === !1)
          return vn('wrong badgePosition', e)
      } else
        r.badgePosition = `top-${
          r.position.indexOf('left') > -1 ? 'right' : 'left'
        }`
      ;(r.meta.uid = a.meta.uid),
        (r.meta.badge = a.meta.badge + 1),
        (r.meta.badgeClass =
          `q-notification__badge q-notification__badge--${r.badgePosition}` +
          (r.badgeColor !== void 0 ? ` bg-${r.badgeColor}` : '') +
          (r.badgeTextColor !== void 0 ? ` text-${r.badgeTextColor}` : '') +
          (r.badgeClass ? ` ${r.badgeClass}` : ''))
      const u = Ze[r.position].value.indexOf(a)
      Ze[r.position].value[u] = ur[r.meta.group] = r
    }
  }
  const l = () => {
    Jm(r), (o = void 0)
  }
  if (
    (r.timeout > 0 &&
      (r.meta.timer = setTimeout(() => {
        l()
      }, r.timeout + 1e3)),
    r.group !== void 0)
  )
    return (a) => {
      a !== void 0
        ? vn('trying to update a grouped one which is forbidden', e)
        : l()
    }
  if (((o = { dismiss: l, config: e, notif: r }), n !== void 0)) {
    Object.assign(n, o)
    return
  }
  return (a) => {
    if (o !== void 0)
      if (a === void 0) o.dismiss()
      else {
        const u = Object.assign({}, o.config, a, {
          group: !1,
          position: r.position,
        })
        Oa(u, t, o)
      }
  }
}
function Jm(e) {
  clearTimeout(e.meta.timer)
  const t = Ze[e.position].value.indexOf(e)
  if (t !== -1) {
    e.group !== void 0 && delete ur[e.meta.group]
    const n = Ma['' + e.meta.uid]
    if (n) {
      const { width: o, height: r } = getComputedStyle(n)
      ;(n.style.left = `${n.offsetLeft}px`),
        (n.style.width = o),
        (n.style.height = r)
    }
    Ze[e.position].value.splice(t, 1),
      typeof e.onDismiss == 'function' && e.onDismiss()
  }
}
function Ns(e) {
  return e != null && Zm.test(e) !== !0
}
function vn(e, t) {
  return console.error(`Notify: ${e}`, t), !1
}
function Xm() {
  return kt({
    name: 'QNotifications',
    devtools: { hide: !0 },
    setup() {
      return () =>
        N(
          'div',
          { class: 'q-notifications' },
          ii.map((e) =>
            N(
              sf,
              {
                key: e,
                class: Aa[e],
                tag: 'div',
                name: `q-notification--${e}`,
              },
              () =>
                Ze[e].value.map((t) => {
                  const n = t.meta,
                    o = []
                  if (
                    (n.hasMedia === !0 &&
                      (t.spinner !== !1
                        ? o.push(
                            N(t.spinner, {
                              class:
                                'q-notification__spinner q-notification__spinner--' +
                                n.leftClass,
                              color: t.spinnerColor,
                              size: t.spinnerSize,
                            })
                          )
                        : t.icon
                        ? o.push(
                            N(sn, {
                              class:
                                'q-notification__icon q-notification__icon--' +
                                n.leftClass,
                              name: t.icon,
                              color: t.iconColor,
                              size: t.iconSize,
                              role: 'img',
                            })
                          )
                        : t.avatar &&
                          o.push(
                            N(
                              Wm,
                              {
                                class:
                                  'q-notification__avatar q-notification__avatar--' +
                                  n.leftClass,
                              },
                              () =>
                                N('img', {
                                  src: t.avatar,
                                  'aria-hidden': 'true',
                                })
                            )
                          )),
                    n.hasText === !0)
                  ) {
                    let i
                    const s = { class: 'q-notification__message col' }
                    if (t.html === !0)
                      s.innerHTML = t.caption
                        ? `<div>${t.message}</div><div class="q-notification__caption">${t.caption}</div>`
                        : t.message
                    else {
                      const l = [t.message]
                      i = t.caption
                        ? [
                            N('div', l),
                            N('div', { class: 'q-notification__caption' }, [
                              t.caption,
                            ]),
                          ]
                        : l
                    }
                    o.push(N('div', s, i))
                  }
                  const r = [N('div', { class: n.contentClass }, o)]
                  return (
                    t.progress === !0 &&
                      r.push(
                        N('div', {
                          key: `${n.uid}|p|${n.badge}`,
                          class: n.progressClass,
                          style: n.progressStyle,
                        })
                      ),
                    t.actions !== void 0 &&
                      r.push(
                        N(
                          'div',
                          { class: n.actionsClass },
                          t.actions.map((i) => N(da, i))
                        )
                      ),
                    n.badge > 1 &&
                      r.push(
                        N(
                          'div',
                          {
                            key: `${n.uid}|${n.badge}`,
                            class: t.meta.badgeClass,
                            style: t.badgeStyle,
                          },
                          [n.badge]
                        )
                      ),
                    N(
                      'div',
                      ie(
                        {
                          ref: (i) => {
                            Ma['' + n.uid] = i
                          },
                          key: n.uid,
                          class: n.class,
                        },
                        n.attrs
                      ),
                      [N('div', { class: n.wrapperClass }, r)]
                    )
                  )
                })
            )
          )
        )
    },
  })
}
var Gm = {
    setDefaults(e) {
      In(e) === !0 && Object.assign(ar, e)
    },
    registerType(e, t) {
      In(t) === !0 && (Xt[e] = t)
    },
    install({ $q: e, parentApp: t }) {
      if (
        ((e.notify = this.create = (n) => Oa(n, e)),
        (e.notify.setDefaults = this.setDefaults),
        (e.notify.registerType = this.registerType),
        e.config.notify !== void 0 && this.setDefaults(e.config.notify),
        this.__installed !== !0)
      ) {
        ii.forEach((o) => {
          Ze[o] = fe([])
          const r =
              ['left', 'center', 'right'].includes(o) === !0
                ? 'center'
                : o.indexOf('top') > -1
                ? 'top'
                : 'bottom',
            i =
              o.indexOf('left') > -1
                ? 'start'
                : o.indexOf('right') > -1
                ? 'end'
                : 'center',
            s = ['left', 'right'].includes(o)
              ? `items-${o === 'left' ? 'start' : 'end'} justify-center`
              : o === 'center'
              ? 'flex-center'
              : `items-${i}`
          Aa[
            o
          ] = `q-notifications__list q-notifications__list--${r} fixed column no-wrap ${s}`
        })
        const n = sa('q-notify')
        If(Xm(), t).mount(n)
      }
    },
  },
  ep = { config: {}, plugins: { Notify: Gm } }
const tp = '/'
async function np({ app: e, router: t, store: n }, o) {
  let r = !1
  const i = (a) => {
      try {
        return t.resolve(a).href
      } catch {}
      return Object(a) === a ? null : a
    },
    s = (a) => {
      if (((r = !0), typeof a == 'string' && /^https?:\/\//.test(a))) {
        window.location.href = a
        return
      }
      const u = i(a)
      u !== null && (window.location.href = u)
    },
    l = window.location.href.replace(window.location.origin, '')
  for (let a = 0; r === !1 && a < o.length; a++)
    try {
      await o[a]({
        app: e,
        router: t,
        store: n,
        ssrContext: null,
        redirect: s,
        urlPath: l,
        publicPath: tp,
      })
    } catch (u) {
      if (u && u.url) {
        s(u.url)
        return
      }
      console.error('[Quasar] boot error:', u)
      return
    }
  r !== !0 && (e.use(t), e.mount('#q-app'))
}
Km(Yl, ep).then((e) =>
  Promise.all([
    Lt(() => import('./i18n.f1f5d789.js'), []),
    Lt(() => import('./axios.97d403ac.js'), []),
    Lt(
      () => import('./equal.0bc922be.js'),
      ['tc-assets/equal.0bc922be.js', 'tc-assets/equal.22bb2993.css']
    ),
  ]).then((t) => {
    const n = t.map((o) => o.default).filter((o) => typeof o == 'function')
    np(e, n)
  })
)
export {
  yt as $,
  Ll as A,
  ap as B,
  Yl as C,
  cp as D,
  up as E,
  je as F,
  qe as G,
  sp as H,
  fp as I,
  Tu as J,
  Vn as K,
  Sl as L,
  xn as M,
  St as N,
  kt as O,
  Be as P,
  Bn as Q,
  ot as R,
  pp as S,
  Xo as T,
  _p as U,
  Gt as V,
  ni as W,
  Rf as X,
  Ke as Y,
  bp as Z,
  vp as _,
  ut as a,
  hp as a0,
  yp as a1,
  id as a2,
  dp as a3,
  Nn as a4,
  mp as a5,
  nt as a6,
  yr as a7,
  xf as a8,
  _r as a9,
  Co as aa,
  Kf as ab,
  jd as ac,
  Wf as ad,
  Dd as ae,
  od as af,
  Qf as ag,
  Ud as ah,
  wp as ai,
  gp as aj,
  ad as ak,
  ud as al,
  ft as am,
  wn as an,
  ga as ao,
  lt as ap,
  Wm as aq,
  da as ar,
  Bu as as,
  Nu as at,
  $d as au,
  Ld as av,
  wr as aw,
  Xn as ax,
  Zo as b,
  O as c,
  Se as d,
  xp as e,
  Hn as f,
  Ne as g,
  N as h,
  Te as i,
  yc as j,
  qt as k,
  Go as l,
  _n as m,
  zn as n,
  fn as o,
  ir as p,
  kl as q,
  fe as r,
  lp as s,
  hi as t,
  Yr as u,
  Sc as v,
  he as w,
  op as x,
  vc as y,
  ip as z,
}
