var Nl = Object.defineProperty,
  Dl = Object.defineProperties
var Il = Object.getOwnPropertyDescriptors
var Fn = Object.getOwnPropertySymbols
var fi = Object.prototype.hasOwnProperty,
  di = Object.prototype.propertyIsEnumerable
var ci = (e, t, n) =>
    t in e
      ? Nl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Ee = (e, t) => {
    for (var n in t || (t = {})) fi.call(t, n) && ci(e, n, t[n])
    if (Fn) for (var n of Fn(t)) di.call(t, n) && ci(e, n, t[n])
    return e
  },
  Ze = (e, t) => Dl(e, Il(t))
var Ir = (e, t) => {
  var n = {}
  for (var s in e) fi.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s])
  if (e != null && Fn)
    for (var s of Fn(e)) t.indexOf(s) < 0 && di.call(e, s) && (n[s] = e[s])
  return n
}
const Bl = (function () {
    const t = document.createElement('link').relList
    return t && t.supports && t.supports('modulepreload')
      ? 'modulepreload'
      : 'preload'
  })(),
  hi = {},
  jl = '/',
  Tt = function (t, n) {
    return !n || n.length === 0
      ? t()
      : Promise.all(
          n.map((s) => {
            if (((s = `${jl}${s}`), s in hi)) return
            hi[s] = !0
            const r = s.endsWith('.css'),
              i = r ? '[rel="stylesheet"]' : ''
            if (document.querySelector(`link[href="${s}"]${i}`)) return
            const o = document.createElement('link')
            if (
              ((o.rel = r ? 'stylesheet' : Bl),
              r || ((o.as = 'script'), (o.crossOrigin = '')),
              (o.href = s),
              document.head.appendChild(o),
              r)
            )
              return new Promise((l, a) => {
                o.addEventListener('load', l),
                  o.addEventListener('error', () =>
                    a(new Error(`Unable to preload CSS for ${s}`))
                  )
              })
          })
        ).then(() => t())
  }
function Es(e, t) {
  const n = Object.create(null),
    s = e.split(',')
  for (let r = 0; r < s.length; r++) n[s[r]] = !0
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r]
}
const ql =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  Fl = Es(ql)
function Do(e) {
  return !!e || e === ''
}
function Dn(e) {
  if (X(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = xe(s) ? zl(s) : Dn(s)
      if (r) for (const i in r) t[i] = r[i]
    }
    return t
  } else {
    if (xe(e)) return e
    if (be(e)) return e
  }
}
const Hl = /;(?![^(]*\))/g,
  Ul = /:(.+)/
function zl(e) {
  const t = {}
  return (
    e.split(Hl).forEach((n) => {
      if (n) {
        const s = n.split(Ul)
        s.length > 1 && (t[s[0].trim()] = s[1].trim())
      }
    }),
    t
  )
}
function In(e) {
  let t = ''
  if (xe(e)) t = e
  else if (X(e))
    for (let n = 0; n < e.length; n++) {
      const s = In(e[n])
      s && (t += s + ' ')
    }
  else if (be(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
const et = (e) =>
    xe(e)
      ? e
      : e == null
      ? ''
      : X(e) || (be(e) && (e.toString === qo || !re(e.toString)))
      ? JSON.stringify(e, Io, 2)
      : String(e),
  Io = (e, t) =>
    t && t.__v_isRef
      ? Io(e, t.value)
      : Gt(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [s, r]) => ((n[`${s} =>`] = r), n),
            {}
          ),
        }
      : Bo(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : be(t) && !X(t) && !Fo(t)
      ? String(t)
      : t,
  ve = {},
  Zt = [],
  Je = () => {},
  Kl = () => !1,
  Wl = /^on[^a-z]/,
  br = (e) => Wl.test(e),
  Cs = (e) => e.startsWith('onUpdate:'),
  Se = Object.assign,
  Ss = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  Vl = Object.prototype.hasOwnProperty,
  ce = (e, t) => Vl.call(e, t),
  X = Array.isArray,
  Gt = (e) => wr(e) === '[object Map]',
  Bo = (e) => wr(e) === '[object Set]',
  re = (e) => typeof e == 'function',
  xe = (e) => typeof e == 'string',
  $s = (e) => typeof e == 'symbol',
  be = (e) => e !== null && typeof e == 'object',
  jo = (e) => be(e) && re(e.then) && re(e.catch),
  qo = Object.prototype.toString,
  wr = (e) => qo.call(e),
  Jl = (e) => wr(e).slice(8, -1),
  Fo = (e) => wr(e) === '[object Object]',
  ks = (e) =>
    xe(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Yn = Es(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  xr = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  Ql = /-(\w)/g,
  rt = xr((e) => e.replace(Ql, (t, n) => (n ? n.toUpperCase() : ''))),
  Yl = /\B([A-Z])/g,
  Dt = xr((e) => e.replace(Yl, '-$1').toLowerCase()),
  Er = xr((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Xn = xr((e) => (e ? `on${Er(e)}` : '')),
  $n = (e, t) => !Object.is(e, t),
  Br = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t)
  },
  or = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n })
  },
  Ho = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  }
let pi
const Xl = () =>
  pi ||
  (pi =
    typeof globalThis != 'undefined'
      ? globalThis
      : typeof self != 'undefined'
      ? self
      : typeof window != 'undefined'
      ? window
      : typeof global != 'undefined'
      ? global
      : {})
let st
class Uo {
  constructor(t = !1) {
    ;(this.active = !0),
      (this.effects = []),
      (this.cleanups = []),
      !t &&
        st &&
        ((this.parent = st),
        (this.index = (st.scopes || (st.scopes = [])).push(this) - 1))
  }
  run(t) {
    if (this.active)
      try {
        return (st = this), t()
      } finally {
        st = this.parent
      }
  }
  on() {
    st = this
  }
  off() {
    st = this.parent
  }
  stop(t) {
    if (this.active) {
      let n, s
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop()
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]()
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0)
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
function Zl(e) {
  return new Uo(e)
}
function Gl(e, t = st) {
  t && t.active && t.effects.push(e)
}
const Ps = (e) => {
    const t = new Set(e)
    return (t.w = 0), (t.n = 0), t
  },
  zo = (e) => (e.w & wt) > 0,
  Ko = (e) => (e.n & wt) > 0,
  eu = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= wt
  },
  tu = (e) => {
    const { deps: t } = e
    if (t.length) {
      let n = 0
      for (let s = 0; s < t.length; s++) {
        const r = t[s]
        zo(r) && !Ko(r) ? r.delete(e) : (t[n++] = r), (r.w &= ~wt), (r.n &= ~wt)
      }
      t.length = n
    }
  },
  es = new WeakMap()
let gn = 0,
  wt = 1
const ts = 30
let nt
const Rt = Symbol(''),
  ns = Symbol('')
class Ts {
  constructor(t, n = null, s) {
    ;(this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      Gl(this, s)
  }
  run() {
    if (!this.active) return this.fn()
    let t = nt,
      n = yt
    for (; t; ) {
      if (t === this) return
      t = t.parent
    }
    try {
      return (
        (this.parent = nt),
        (nt = this),
        (yt = !0),
        (wt = 1 << ++gn),
        gn <= ts ? eu(this) : mi(this),
        this.fn()
      )
    } finally {
      gn <= ts && tu(this),
        (wt = 1 << --gn),
        (nt = this.parent),
        (yt = n),
        (this.parent = void 0)
    }
  }
  stop() {
    this.active && (mi(this), this.onStop && this.onStop(), (this.active = !1))
  }
}
function mi(e) {
  const { deps: t } = e
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e)
    t.length = 0
  }
}
let yt = !0
const Wo = []
function on() {
  Wo.push(yt), (yt = !1)
}
function an() {
  const e = Wo.pop()
  yt = e === void 0 ? !0 : e
}
function Ie(e, t, n) {
  if (yt && nt) {
    let s = es.get(e)
    s || es.set(e, (s = new Map()))
    let r = s.get(n)
    r || s.set(n, (r = Ps())), Vo(r)
  }
}
function Vo(e, t) {
  let n = !1
  gn <= ts ? Ko(e) || ((e.n |= wt), (n = !zo(e))) : (n = !e.has(nt)),
    n && (e.add(nt), nt.deps.push(e))
}
function at(e, t, n, s, r, i) {
  const o = es.get(e)
  if (!o) return
  let l = []
  if (t === 'clear') l = [...o.values()]
  else if (n === 'length' && X(e))
    o.forEach((a, u) => {
      ;(u === 'length' || u >= s) && l.push(a)
    })
  else
    switch ((n !== void 0 && l.push(o.get(n)), t)) {
      case 'add':
        X(e)
          ? ks(n) && l.push(o.get('length'))
          : (l.push(o.get(Rt)), Gt(e) && l.push(o.get(ns)))
        break
      case 'delete':
        X(e) || (l.push(o.get(Rt)), Gt(e) && l.push(o.get(ns)))
        break
      case 'set':
        Gt(e) && l.push(o.get(Rt))
        break
    }
  if (l.length === 1) l[0] && rs(l[0])
  else {
    const a = []
    for (const u of l) u && a.push(...u)
    rs(Ps(a))
  }
}
function rs(e, t) {
  for (const n of X(e) ? e : [...e])
    (n !== nt || n.allowRecurse) && (n.scheduler ? n.scheduler() : n.run())
}
const nu = Es('__proto__,__v_isRef,__isVue'),
  Jo = new Set(
    Object.getOwnPropertyNames(Symbol)
      .map((e) => Symbol[e])
      .filter($s)
  ),
  ru = As(),
  su = As(!1, !0),
  iu = As(!0),
  gi = ou()
function ou() {
  const e = {}
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...n) {
        const s = fe(this)
        for (let i = 0, o = this.length; i < o; i++) Ie(s, 'get', i + '')
        const r = s[t](...n)
        return r === -1 || r === !1 ? s[t](...n.map(fe)) : r
      }
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...n) {
        on()
        const s = fe(this)[t].apply(this, n)
        return an(), s
      }
    }),
    e
  )
}
function As(e = !1, t = !1) {
  return function (s, r, i) {
    if (r === '__v_isReactive') return !e
    if (r === '__v_isReadonly') return e
    if (r === '__v_isShallow') return t
    if (r === '__v_raw' && i === (e ? (t ? xu : Go) : t ? Zo : Xo).get(s))
      return s
    const o = X(s)
    if (!e && o && ce(gi, r)) return Reflect.get(gi, r, i)
    const l = Reflect.get(s, r, i)
    return ($s(r) ? Jo.has(r) : nu(r)) || (e || Ie(s, 'get', r), t)
      ? l
      : we(l)
      ? !o || !ks(r)
        ? l.value
        : l
      : be(l)
      ? e
        ? ea(l)
        : It(l)
      : l
  }
}
const au = Qo(),
  lu = Qo(!0)
function Qo(e = !1) {
  return function (n, s, r, i) {
    let o = n[s]
    if (kn(o) && we(o) && !we(r)) return !1
    if (
      !e &&
      !kn(r) &&
      (ta(r) || ((r = fe(r)), (o = fe(o))), !X(n) && we(o) && !we(r))
    )
      return (o.value = r), !0
    const l = X(n) && ks(s) ? Number(s) < n.length : ce(n, s),
      a = Reflect.set(n, s, r, i)
    return (
      n === fe(i) && (l ? $n(r, o) && at(n, 'set', s, r) : at(n, 'add', s, r)),
      a
    )
  }
}
function uu(e, t) {
  const n = ce(e, t)
  e[t]
  const s = Reflect.deleteProperty(e, t)
  return s && n && at(e, 'delete', t, void 0), s
}
function cu(e, t) {
  const n = Reflect.has(e, t)
  return (!$s(t) || !Jo.has(t)) && Ie(e, 'has', t), n
}
function fu(e) {
  return Ie(e, 'iterate', X(e) ? 'length' : Rt), Reflect.ownKeys(e)
}
const Yo = { get: ru, set: au, deleteProperty: uu, has: cu, ownKeys: fu },
  du = {
    get: iu,
    set(e, t) {
      return !0
    },
    deleteProperty(e, t) {
      return !0
    },
  },
  hu = Se({}, Yo, { get: su, set: lu }),
  Rs = (e) => e,
  Cr = (e) => Reflect.getPrototypeOf(e)
function Hn(e, t, n = !1, s = !1) {
  e = e.__v_raw
  const r = fe(e),
    i = fe(t)
  t !== i && !n && Ie(r, 'get', t), !n && Ie(r, 'get', i)
  const { has: o } = Cr(r),
    l = s ? Rs : n ? Ls : Pn
  if (o.call(r, t)) return l(e.get(t))
  if (o.call(r, i)) return l(e.get(i))
  e !== r && e.get(t)
}
function Un(e, t = !1) {
  const n = this.__v_raw,
    s = fe(n),
    r = fe(e)
  return (
    e !== r && !t && Ie(s, 'has', e),
    !t && Ie(s, 'has', r),
    e === r ? n.has(e) : n.has(e) || n.has(r)
  )
}
function zn(e, t = !1) {
  return (
    (e = e.__v_raw), !t && Ie(fe(e), 'iterate', Rt), Reflect.get(e, 'size', e)
  )
}
function vi(e) {
  e = fe(e)
  const t = fe(this)
  return Cr(t).has.call(t, e) || (t.add(e), at(t, 'add', e, e)), this
}
function yi(e, t) {
  t = fe(t)
  const n = fe(this),
    { has: s, get: r } = Cr(n)
  let i = s.call(n, e)
  i || ((e = fe(e)), (i = s.call(n, e)))
  const o = r.call(n, e)
  return (
    n.set(e, t), i ? $n(t, o) && at(n, 'set', e, t) : at(n, 'add', e, t), this
  )
}
function _i(e) {
  const t = fe(this),
    { has: n, get: s } = Cr(t)
  let r = n.call(t, e)
  r || ((e = fe(e)), (r = n.call(t, e))), s && s.call(t, e)
  const i = t.delete(e)
  return r && at(t, 'delete', e, void 0), i
}
function bi() {
  const e = fe(this),
    t = e.size !== 0,
    n = e.clear()
  return t && at(e, 'clear', void 0, void 0), n
}
function Kn(e, t) {
  return function (s, r) {
    const i = this,
      o = i.__v_raw,
      l = fe(o),
      a = t ? Rs : e ? Ls : Pn
    return (
      !e && Ie(l, 'iterate', Rt), o.forEach((u, c) => s.call(r, a(u), a(c), i))
    )
  }
}
function Wn(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      i = fe(r),
      o = Gt(i),
      l = e === 'entries' || (e === Symbol.iterator && o),
      a = e === 'keys' && o,
      u = r[e](...s),
      c = n ? Rs : t ? Ls : Pn
    return (
      !t && Ie(i, 'iterate', a ? ns : Rt),
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
function ut(e) {
  return function (...t) {
    return e === 'delete' ? !1 : this
  }
}
function pu() {
  const e = {
      get(i) {
        return Hn(this, i)
      },
      get size() {
        return zn(this)
      },
      has: Un,
      add: vi,
      set: yi,
      delete: _i,
      clear: bi,
      forEach: Kn(!1, !1),
    },
    t = {
      get(i) {
        return Hn(this, i, !1, !0)
      },
      get size() {
        return zn(this)
      },
      has: Un,
      add: vi,
      set: yi,
      delete: _i,
      clear: bi,
      forEach: Kn(!1, !0),
    },
    n = {
      get(i) {
        return Hn(this, i, !0)
      },
      get size() {
        return zn(this, !0)
      },
      has(i) {
        return Un.call(this, i, !0)
      },
      add: ut('add'),
      set: ut('set'),
      delete: ut('delete'),
      clear: ut('clear'),
      forEach: Kn(!0, !1),
    },
    s = {
      get(i) {
        return Hn(this, i, !0, !0)
      },
      get size() {
        return zn(this, !0)
      },
      has(i) {
        return Un.call(this, i, !0)
      },
      add: ut('add'),
      set: ut('set'),
      delete: ut('delete'),
      clear: ut('clear'),
      forEach: Kn(!0, !0),
    }
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((i) => {
      ;(e[i] = Wn(i, !1, !1)),
        (n[i] = Wn(i, !0, !1)),
        (t[i] = Wn(i, !1, !0)),
        (s[i] = Wn(i, !0, !0))
    }),
    [e, n, t, s]
  )
}
const [mu, gu, vu, yu] = pu()
function Os(e, t) {
  const n = t ? (e ? yu : vu) : e ? gu : mu
  return (s, r, i) =>
    r === '__v_isReactive'
      ? !e
      : r === '__v_isReadonly'
      ? e
      : r === '__v_raw'
      ? s
      : Reflect.get(ce(n, r) && r in s ? n : s, r, i)
}
const _u = { get: Os(!1, !1) },
  bu = { get: Os(!1, !0) },
  wu = { get: Os(!0, !1) },
  Xo = new WeakMap(),
  Zo = new WeakMap(),
  Go = new WeakMap(),
  xu = new WeakMap()
function Eu(e) {
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
function Cu(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Eu(Jl(e))
}
function It(e) {
  return kn(e) ? e : Ms(e, !1, Yo, _u, Xo)
}
function Su(e) {
  return Ms(e, !1, hu, bu, Zo)
}
function ea(e) {
  return Ms(e, !0, du, wu, Go)
}
function Ms(e, t, n, s, r) {
  if (!be(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const i = r.get(e)
  if (i) return i
  const o = Cu(e)
  if (o === 0) return e
  const l = new Proxy(e, o === 2 ? s : n)
  return r.set(e, l), l
}
function en(e) {
  return kn(e) ? en(e.__v_raw) : !!(e && e.__v_isReactive)
}
function kn(e) {
  return !!(e && e.__v_isReadonly)
}
function ta(e) {
  return !!(e && e.__v_isShallow)
}
function na(e) {
  return en(e) || kn(e)
}
function fe(e) {
  const t = e && e.__v_raw
  return t ? fe(t) : e
}
function Bt(e) {
  return or(e, '__v_skip', !0), e
}
const Pn = (e) => (be(e) ? It(e) : e),
  Ls = (e) => (be(e) ? ea(e) : e)
function ra(e) {
  yt && nt && ((e = fe(e)), Vo(e.dep || (e.dep = Ps())))
}
function sa(e, t) {
  ;(e = fe(e)), e.dep && rs(e.dep)
}
function we(e) {
  return !!(e && e.__v_isRef === !0)
}
function We(e) {
  return ia(e, !1)
}
function $u(e) {
  return ia(e, !0)
}
function ia(e, t) {
  return we(e) ? e : new ku(e, t)
}
class ku {
  constructor(t, n) {
    ;(this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : fe(t)),
      (this._value = n ? t : Pn(t))
  }
  get value() {
    return ra(this), this._value
  }
  set value(t) {
    ;(t = this.__v_isShallow ? t : fe(t)),
      $n(t, this._rawValue) &&
        ((this._rawValue = t),
        (this._value = this.__v_isShallow ? t : Pn(t)),
        sa(this))
  }
}
function _n(e) {
  return we(e) ? e.value : e
}
const Pu = {
  get: (e, t, n) => _n(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t]
    return we(r) && !we(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s)
  },
}
function oa(e) {
  return en(e) ? e : new Proxy(e, Pu)
}
function yg(e) {
  const t = X(e) ? new Array(e.length) : {}
  for (const n in e) t[n] = Au(e, n)
  return t
}
class Tu {
  constructor(t, n, s) {
    ;(this._object = t),
      (this._key = n),
      (this._defaultValue = s),
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
function Au(e, t, n) {
  const s = e[t]
  return we(s) ? s : new Tu(e, t, n)
}
class Ru {
  constructor(t, n, s, r) {
    ;(this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._dirty = !0),
      (this.effect = new Ts(t, () => {
        this._dirty || ((this._dirty = !0), sa(this))
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = s)
  }
  get value() {
    const t = fe(this)
    return (
      ra(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    )
  }
  set value(t) {
    this._setter(t)
  }
}
function Ou(e, t, n = !1) {
  let s, r
  const i = re(e)
  return (
    i ? ((s = e), (r = Je)) : ((s = e.get), (r = e.set)),
    new Ru(s, r, i || !r, n)
  )
}
Promise.resolve()
function _t(e, t, n, s) {
  let r
  try {
    r = s ? e(...s) : e()
  } catch (i) {
    Sr(i, t, n)
  }
  return r
}
function Ue(e, t, n, s) {
  if (re(e)) {
    const i = _t(e, t, n, s)
    return (
      i &&
        jo(i) &&
        i.catch((o) => {
          Sr(o, t, n)
        }),
      i
    )
  }
  const r = []
  for (let i = 0; i < e.length; i++) r.push(Ue(e[i], t, n, s))
  return r
}
function Sr(e, t, n, s = !0) {
  const r = t ? t.vnode : null
  if (t) {
    let i = t.parent
    const o = t.proxy,
      l = n
    for (; i; ) {
      const u = i.ec
      if (u) {
        for (let c = 0; c < u.length; c++) if (u[c](e, o, l) === !1) return
      }
      i = i.parent
    }
    const a = t.appContext.config.errorHandler
    if (a) {
      _t(a, null, 10, [e, o, l])
      return
    }
  }
  Mu(e, n, r, s)
}
function Mu(e, t, n, s = !0) {
  console.error(e)
}
let ar = !1,
  ss = !1
const Ne = []
let ot = 0
const bn = []
let vn = null,
  Jt = 0
const wn = []
let ht = null,
  Qt = 0
const aa = Promise.resolve()
let Ns = null,
  is = null
function la(e) {
  const t = Ns || aa
  return e ? t.then(this ? e.bind(this) : e) : t
}
function Lu(e) {
  let t = ot + 1,
    n = Ne.length
  for (; t < n; ) {
    const s = (t + n) >>> 1
    Tn(Ne[s]) < e ? (t = s + 1) : (n = s)
  }
  return t
}
function ua(e) {
  ;(!Ne.length || !Ne.includes(e, ar && e.allowRecurse ? ot + 1 : ot)) &&
    e !== is &&
    (e.id == null ? Ne.push(e) : Ne.splice(Lu(e.id), 0, e), ca())
}
function ca() {
  !ar && !ss && ((ss = !0), (Ns = aa.then(ha)))
}
function Nu(e) {
  const t = Ne.indexOf(e)
  t > ot && Ne.splice(t, 1)
}
function fa(e, t, n, s) {
  X(e)
    ? n.push(...e)
    : (!t || !t.includes(e, e.allowRecurse ? s + 1 : s)) && n.push(e),
    ca()
}
function Du(e) {
  fa(e, vn, bn, Jt)
}
function Iu(e) {
  fa(e, ht, wn, Qt)
}
function Ds(e, t = null) {
  if (bn.length) {
    for (
      is = t, vn = [...new Set(bn)], bn.length = 0, Jt = 0;
      Jt < vn.length;
      Jt++
    )
      vn[Jt]()
    ;(vn = null), (Jt = 0), (is = null), Ds(e, t)
  }
}
function da(e) {
  if (wn.length) {
    const t = [...new Set(wn)]
    if (((wn.length = 0), ht)) {
      ht.push(...t)
      return
    }
    for (ht = t, ht.sort((n, s) => Tn(n) - Tn(s)), Qt = 0; Qt < ht.length; Qt++)
      ht[Qt]()
    ;(ht = null), (Qt = 0)
  }
}
const Tn = (e) => (e.id == null ? 1 / 0 : e.id)
function ha(e) {
  ;(ss = !1), (ar = !0), Ds(e), Ne.sort((n, s) => Tn(n) - Tn(s))
  const t = Je
  try {
    for (ot = 0; ot < Ne.length; ot++) {
      const n = Ne[ot]
      n && n.active !== !1 && _t(n, null, 14)
    }
  } finally {
    ;(ot = 0),
      (Ne.length = 0),
      da(),
      (ar = !1),
      (Ns = null),
      (Ne.length || bn.length || wn.length) && ha(e)
  }
}
function Bu(e, t, ...n) {
  const s = e.vnode.props || ve
  let r = n
  const i = t.startsWith('update:'),
    o = i && t.slice(7)
  if (o && o in s) {
    const c = `${o === 'modelValue' ? 'model' : o}Modifiers`,
      { number: h, trim: f } = s[c] || ve
    f ? (r = n.map((p) => p.trim())) : h && (r = n.map(Ho))
  }
  let l,
    a = s[(l = Xn(t))] || s[(l = Xn(rt(t)))]
  !a && i && (a = s[(l = Xn(Dt(t)))]), a && Ue(a, e, 6, r)
  const u = s[l + 'Once']
  if (u) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[l]) return
    ;(e.emitted[l] = !0), Ue(u, e, 6, r)
  }
}
function pa(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e)
  if (r !== void 0) return r
  const i = e.emits
  let o = {},
    l = !1
  if (!re(e)) {
    const a = (u) => {
      const c = pa(u, t, !0)
      c && ((l = !0), Se(o, c))
    }
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a)
  }
  return !i && !l
    ? (s.set(e, null), null)
    : (X(i) ? i.forEach((a) => (o[a] = null)) : Se(o, i), s.set(e, o), o)
}
function Is(e, t) {
  return !e || !br(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      ce(e, t[0].toLowerCase() + t.slice(1)) || ce(e, Dt(t)) || ce(e, t))
}
let De = null,
  $r = null
function lr(e) {
  const t = De
  return (De = e), ($r = (e && e.type.__scopeId) || null), t
}
function ju(e) {
  $r = e
}
function qu() {
  $r = null
}
function Fu(e, t = De, n) {
  if (!t || e._n) return e
  const s = (...r) => {
    s._d && Oi(-1)
    const i = lr(t),
      o = e(...r)
    return lr(i), s._d && Oi(1), o
  }
  return (s._n = !0), (s._c = !0), (s._d = !0), s
}
function jr(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    props: i,
    propsOptions: [o],
    slots: l,
    attrs: a,
    emit: u,
    render: c,
    renderCache: h,
    data: f,
    setupState: p,
    ctx: y,
    inheritAttrs: k,
  } = e
  let x, C
  const B = lr(e)
  try {
    if (n.shapeFlag & 4) {
      const K = r || s
      ;(x = tt(c.call(K, K, h, i, p, f, y))), (C = a)
    } else {
      const K = t
      ;(x = tt(
        K.length > 1 ? K(i, { attrs: a, slots: l, emit: u }) : K(i, null)
      )),
        (C = t.props ? a : Hu(a))
    }
  } catch (K) {
    ;(En.length = 0), Sr(K, e, 1), (x = Ae(Qe))
  }
  let V = x
  if (C && k !== !1) {
    const K = Object.keys(C),
      { shapeFlag: ne } = V
    K.length && ne & 7 && (o && K.some(Cs) && (C = Uu(C, o)), (V = tn(V, C)))
  }
  return (
    n.dirs && (V.dirs = V.dirs ? V.dirs.concat(n.dirs) : n.dirs),
    n.transition && (V.transition = n.transition),
    (x = V),
    lr(B),
    x
  )
}
const Hu = (e) => {
    let t
    for (const n in e)
      (n === 'class' || n === 'style' || br(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  Uu = (e, t) => {
    const n = {}
    for (const s in e) (!Cs(s) || !(s.slice(9) in t)) && (n[s] = e[s])
    return n
  }
function zu(e, t, n) {
  const { props: s, children: r, component: i } = e,
    { props: o, children: l, patchFlag: a } = t,
    u = i.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && a >= 0) {
    if (a & 1024) return !0
    if (a & 16) return s ? wi(s, o, u) : !!o
    if (a & 8) {
      const c = t.dynamicProps
      for (let h = 0; h < c.length; h++) {
        const f = c[h]
        if (o[f] !== s[f] && !Is(u, f)) return !0
      }
    }
  } else
    return (r || l) && (!l || !l.$stable)
      ? !0
      : s === o
      ? !1
      : s
      ? o
        ? wi(s, o, u)
        : !0
      : !!o
  return !1
}
function wi(e, t, n) {
  const s = Object.keys(t)
  if (s.length !== Object.keys(e).length) return !0
  for (let r = 0; r < s.length; r++) {
    const i = s[r]
    if (t[i] !== e[i] && !Is(n, i)) return !0
  }
  return !1
}
function Ku({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent)
}
const Wu = (e) => e.__isSuspense
function Vu(e, t) {
  t && t.pendingBranch
    ? X(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Iu(e)
}
function Zn(e, t) {
  if (Ce) {
    let n = Ce.provides
    const s = Ce.parent && Ce.parent.provides
    s === n && (n = Ce.provides = Object.create(s)), (n[e] = t)
  }
}
function bt(e, t, n = !1) {
  const s = Ce || De
  if (s) {
    const r =
      s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
    if (r && e in r) return r[e]
    if (arguments.length > 1) return n && re(t) ? t.call(s.proxy) : t
  }
}
const xi = {}
function Gn(e, t, n) {
  return ma(e, t, n)
}
function ma(
  e,
  t,
  { immediate: n, deep: s, flush: r, onTrack: i, onTrigger: o } = ve
) {
  const l = Ce
  let a,
    u = !1,
    c = !1
  if (
    (we(e)
      ? ((a = () => e.value), (u = ta(e)))
      : en(e)
      ? ((a = () => e), (s = !0))
      : X(e)
      ? ((c = !0),
        (u = e.some(en)),
        (a = () =>
          e.map((C) => {
            if (we(C)) return C.value
            if (en(C)) return At(C)
            if (re(C)) return _t(C, l, 2)
          })))
      : re(e)
      ? t
        ? (a = () => _t(e, l, 2))
        : (a = () => {
            if (!(l && l.isUnmounted)) return h && h(), Ue(e, l, 3, [f])
          })
      : (a = Je),
    t && s)
  ) {
    const C = a
    a = () => At(C())
  }
  let h,
    f = (C) => {
      h = x.onStop = () => {
        _t(C, l, 4)
      }
    }
  if (On)
    return (f = Je), t ? n && Ue(t, l, 3, [a(), c ? [] : void 0, f]) : a(), Je
  let p = c ? [] : xi
  const y = () => {
    if (!!x.active)
      if (t) {
        const C = x.run()
        ;(s || u || (c ? C.some((B, V) => $n(B, p[V])) : $n(C, p))) &&
          (h && h(), Ue(t, l, 3, [C, p === xi ? void 0 : p, f]), (p = C))
      } else x.run()
  }
  y.allowRecurse = !!t
  let k
  r === 'sync'
    ? (k = y)
    : r === 'post'
    ? (k = () => Me(y, l && l.suspense))
    : (k = () => {
        !l || l.isMounted ? Du(y) : y()
      })
  const x = new Ts(a, k)
  return (
    t
      ? n
        ? y()
        : (p = x.run())
      : r === 'post'
      ? Me(x.run.bind(x), l && l.suspense)
      : x.run(),
    () => {
      x.stop(), l && l.scope && Ss(l.scope.effects, x)
    }
  )
}
function Ju(e, t, n) {
  const s = this.proxy,
    r = xe(e) ? (e.includes('.') ? ga(s, e) : () => s[e]) : e.bind(s, s)
  let i
  re(t) ? (i = t) : ((i = t.handler), (n = t))
  const o = Ce
  nn(this)
  const l = ma(r, i.bind(s), n)
  return o ? nn(o) : Mt(), l
}
function ga(e, t) {
  const n = t.split('.')
  return () => {
    let s = e
    for (let r = 0; r < n.length && s; r++) s = s[n[r]]
    return s
  }
}
function At(e, t) {
  if (!be(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e
  if ((t.add(e), we(e))) At(e.value, t)
  else if (X(e)) for (let n = 0; n < e.length; n++) At(e[n], t)
  else if (Bo(e) || Gt(e))
    e.forEach((n) => {
      At(n, t)
    })
  else if (Fo(e)) for (const n in e) At(e[n], t)
  return e
}
function va() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  }
  return (
    wa(() => {
      e.isMounted = !0
    }),
    js(() => {
      e.isUnmounting = !0
    }),
    e
  )
}
const qe = [Function, Array],
  Qu = {
    name: 'BaseTransition',
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: qe,
      onEnter: qe,
      onAfterEnter: qe,
      onEnterCancelled: qe,
      onBeforeLeave: qe,
      onLeave: qe,
      onAfterLeave: qe,
      onLeaveCancelled: qe,
      onBeforeAppear: qe,
      onAppear: qe,
      onAfterAppear: qe,
      onAppearCancelled: qe,
    },
    setup(e, { slots: t }) {
      const n = Bn(),
        s = va()
      let r
      return () => {
        const i = t.default && Bs(t.default(), !0)
        if (!i || !i.length) return
        const o = fe(e),
          { mode: l } = o,
          a = i[0]
        if (s.isLeaving) return qr(a)
        const u = Ei(a)
        if (!u) return qr(a)
        const c = An(u, o, s, n)
        Rn(u, c)
        const h = n.subTree,
          f = h && Ei(h)
        let p = !1
        const { getTransitionKey: y } = u.type
        if (y) {
          const k = y()
          r === void 0 ? (r = k) : k !== r && ((r = k), (p = !0))
        }
        if (f && f.type !== Qe && (!kt(u, f) || p)) {
          const k = An(f, o, s, n)
          if ((Rn(f, k), l === 'out-in'))
            return (
              (s.isLeaving = !0),
              (k.afterLeave = () => {
                ;(s.isLeaving = !1), n.update()
              }),
              qr(a)
            )
          l === 'in-out' &&
            u.type !== Qe &&
            (k.delayLeave = (x, C, B) => {
              const V = _a(s, f)
              ;(V[String(f.key)] = f),
                (x._leaveCb = () => {
                  C(), (x._leaveCb = void 0), delete c.delayedLeave
                }),
                (c.delayedLeave = B)
            })
        }
        return a
      }
    },
  },
  ya = Qu
function _a(e, t) {
  const { leavingVNodes: n } = e
  let s = n.get(t.type)
  return s || ((s = Object.create(null)), n.set(t.type, s)), s
}
function An(e, t, n, s) {
  const {
      appear: r,
      mode: i,
      persisted: o = !1,
      onBeforeEnter: l,
      onEnter: a,
      onAfterEnter: u,
      onEnterCancelled: c,
      onBeforeLeave: h,
      onLeave: f,
      onAfterLeave: p,
      onLeaveCancelled: y,
      onBeforeAppear: k,
      onAppear: x,
      onAfterAppear: C,
      onAppearCancelled: B,
    } = t,
    V = String(e.key),
    K = _a(n, e),
    ne = (J, ie) => {
      J && Ue(J, s, 9, ie)
    },
    se = {
      mode: i,
      persisted: o,
      beforeEnter(J) {
        let ie = l
        if (!n.isMounted)
          if (r) ie = k || l
          else return
        J._leaveCb && J._leaveCb(!0)
        const H = K[V]
        H && kt(e, H) && H.el._leaveCb && H.el._leaveCb(), ne(ie, [J])
      },
      enter(J) {
        let ie = a,
          H = u,
          W = c
        if (!n.isMounted)
          if (r) (ie = x || a), (H = C || u), (W = B || c)
          else return
        let de = !1
        const L = (J._enterCb = (N) => {
          de ||
            ((de = !0),
            N ? ne(W, [J]) : ne(H, [J]),
            se.delayedLeave && se.delayedLeave(),
            (J._enterCb = void 0))
        })
        ie ? (ie(J, L), ie.length <= 1 && L()) : L()
      },
      leave(J, ie) {
        const H = String(e.key)
        if ((J._enterCb && J._enterCb(!0), n.isUnmounting)) return ie()
        ne(h, [J])
        let W = !1
        const de = (J._leaveCb = (L) => {
          W ||
            ((W = !0),
            ie(),
            L ? ne(y, [J]) : ne(p, [J]),
            (J._leaveCb = void 0),
            K[H] === e && delete K[H])
        })
        ;(K[H] = e), f ? (f(J, de), f.length <= 1 && de()) : de()
      },
      clone(J) {
        return An(J, t, n, s)
      },
    }
  return se
}
function qr(e) {
  if (kr(e)) return (e = tn(e)), (e.children = null), e
}
function Ei(e) {
  return kr(e) ? (e.children ? e.children[0] : void 0) : e
}
function Rn(e, t) {
  e.shapeFlag & 6 && e.component
    ? Rn(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t)
}
function Bs(e, t = !1) {
  let n = [],
    s = 0
  for (let r = 0; r < e.length; r++) {
    const i = e[r]
    i.type === Oe
      ? (i.patchFlag & 128 && s++, (n = n.concat(Bs(i.children, t))))
      : (t || i.type !== Qe) && n.push(i)
  }
  if (s > 1) for (let r = 0; r < n.length; r++) n[r].patchFlag = -2
  return n
}
function ln(e) {
  return re(e) ? { setup: e, name: e.name } : e
}
const os = (e) => !!e.type.__asyncLoader,
  kr = (e) => e.type.__isKeepAlive
function Yu(e, t) {
  ba(e, 'a', t)
}
function Xu(e, t) {
  ba(e, 'da', t)
}
function ba(e, t, n = Ce) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n
      for (; r; ) {
        if (r.isDeactivated) return
        r = r.parent
      }
      return e()
    })
  if ((Pr(t, s, n), n)) {
    let r = n.parent
    for (; r && r.parent; ) kr(r.parent.vnode) && Zu(s, t, n, r), (r = r.parent)
  }
}
function Zu(e, t, n, s) {
  const r = Pr(t, e, s, !0)
  Ea(() => {
    Ss(s[t], r)
  }, n)
}
function Pr(e, t, n = Ce, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          if (n.isUnmounted) return
          on(), nn(n)
          const l = Ue(t, n, e, o)
          return Mt(), an(), l
        })
    return s ? r.unshift(i) : r.push(i), i
  }
}
const lt =
    (e) =>
    (t, n = Ce) =>
      (!On || e === 'sp') && Pr(e, t, n),
  Gu = lt('bm'),
  wa = lt('m'),
  ec = lt('bu'),
  xa = lt('u'),
  js = lt('bum'),
  Ea = lt('um'),
  tc = lt('sp'),
  nc = lt('rtg'),
  rc = lt('rtc')
function sc(e, t = Ce) {
  Pr('ec', e, t)
}
let as = !0
function ic(e) {
  const t = Sa(e),
    n = e.proxy,
    s = e.ctx
  ;(as = !1), t.beforeCreate && Ci(t.beforeCreate, e, 'bc')
  const {
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: a,
    inject: u,
    created: c,
    beforeMount: h,
    mounted: f,
    beforeUpdate: p,
    updated: y,
    activated: k,
    deactivated: x,
    beforeDestroy: C,
    beforeUnmount: B,
    destroyed: V,
    unmounted: K,
    render: ne,
    renderTracked: se,
    renderTriggered: J,
    errorCaptured: ie,
    serverPrefetch: H,
    expose: W,
    inheritAttrs: de,
    components: L,
    directives: N,
    filters: R,
  } = t
  if ((u && oc(u, s, null, e.appContext.config.unwrapInjectedRef), o))
    for (const E in o) {
      const D = o[E]
      re(D) && (s[E] = D.bind(n))
    }
  if (r) {
    const E = r.call(n, n)
    be(E) && (e.data = It(E))
  }
  if (((as = !0), i))
    for (const E in i) {
      const D = i[E],
        F = re(D) ? D.bind(n, n) : re(D.get) ? D.get.bind(n, n) : Je,
        oe = !re(D) && re(D.set) ? D.set.bind(n) : Je,
        he = G({ get: F, set: oe })
      Object.defineProperty(s, E, {
        enumerable: !0,
        configurable: !0,
        get: () => he.value,
        set: (le) => (he.value = le),
      })
    }
  if (l) for (const E in l) Ca(l[E], s, n, E)
  if (a) {
    const E = re(a) ? a.call(n) : a
    Reflect.ownKeys(E).forEach((D) => {
      Zn(D, E[D])
    })
  }
  c && Ci(c, e, 'c')
  function $(E, D) {
    X(D) ? D.forEach((F) => E(F.bind(n))) : D && E(D.bind(n))
  }
  if (
    ($(Gu, h),
    $(wa, f),
    $(ec, p),
    $(xa, y),
    $(Yu, k),
    $(Xu, x),
    $(sc, ie),
    $(rc, se),
    $(nc, J),
    $(js, B),
    $(Ea, K),
    $(tc, H),
    X(W))
  )
    if (W.length) {
      const E = e.exposed || (e.exposed = {})
      W.forEach((D) => {
        Object.defineProperty(E, D, { get: () => n[D], set: (F) => (n[D] = F) })
      })
    } else e.exposed || (e.exposed = {})
  ne && e.render === Je && (e.render = ne),
    de != null && (e.inheritAttrs = de),
    L && (e.components = L),
    N && (e.directives = N)
}
function oc(e, t, n = Je, s = !1) {
  X(e) && (e = ls(e))
  for (const r in e) {
    const i = e[r]
    let o
    be(i)
      ? 'default' in i
        ? (o = bt(i.from || r, i.default, !0))
        : (o = bt(i.from || r))
      : (o = bt(i)),
      we(o) && s
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (l) => (o.value = l),
          })
        : (t[r] = o)
  }
}
function Ci(e, t, n) {
  Ue(X(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Ca(e, t, n, s) {
  const r = s.includes('.') ? ga(n, s) : () => n[s]
  if (xe(e)) {
    const i = t[e]
    re(i) && Gn(r, i)
  } else if (re(e)) Gn(r, e.bind(n))
  else if (be(e))
    if (X(e)) e.forEach((i) => Ca(i, t, n, s))
    else {
      const i = re(e.handler) ? e.handler.bind(n) : t[e.handler]
      re(i) && Gn(r, i, e)
    }
}
function Sa(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: i,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    l = i.get(t)
  let a
  return (
    l
      ? (a = l)
      : !r.length && !n && !s
      ? (a = t)
      : ((a = {}), r.length && r.forEach((u) => ur(a, u, o, !0)), ur(a, t, o)),
    i.set(t, a),
    a
  )
}
function ur(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t
  i && ur(e, i, n, !0), r && r.forEach((o) => ur(e, o, n, !0))
  for (const o in t)
    if (!(s && o === 'expose')) {
      const l = ac[o] || (n && n[o])
      e[o] = l ? l(e[o], t[o]) : t[o]
    }
  return e
}
const ac = {
  data: Si,
  props: St,
  emits: St,
  methods: St,
  computed: St,
  beforeCreate: Re,
  created: Re,
  beforeMount: Re,
  mounted: Re,
  beforeUpdate: Re,
  updated: Re,
  beforeDestroy: Re,
  beforeUnmount: Re,
  destroyed: Re,
  unmounted: Re,
  activated: Re,
  deactivated: Re,
  errorCaptured: Re,
  serverPrefetch: Re,
  components: St,
  directives: St,
  watch: uc,
  provide: Si,
  inject: lc,
}
function Si(e, t) {
  return t
    ? e
      ? function () {
          return Se(
            re(e) ? e.call(this, this) : e,
            re(t) ? t.call(this, this) : t
          )
        }
      : t
    : e
}
function lc(e, t) {
  return St(ls(e), ls(t))
}
function ls(e) {
  if (X(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function Re(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function St(e, t) {
  return e ? Se(Se(Object.create(null), e), t) : t
}
function uc(e, t) {
  if (!e) return t
  if (!t) return e
  const n = Se(Object.create(null), e)
  for (const s in t) n[s] = Re(e[s], t[s])
  return n
}
function cc(e, t, n, s = !1) {
  const r = {},
    i = {}
  or(i, Ar, 1), (e.propsDefaults = Object.create(null)), $a(e, t, r, i)
  for (const o in e.propsOptions[0]) o in r || (r[o] = void 0)
  n ? (e.props = s ? r : Su(r)) : e.type.props ? (e.props = r) : (e.props = i),
    (e.attrs = i)
}
function fc(e, t, n, s) {
  const {
      props: r,
      attrs: i,
      vnode: { patchFlag: o },
    } = e,
    l = fe(r),
    [a] = e.propsOptions
  let u = !1
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const c = e.vnode.dynamicProps
      for (let h = 0; h < c.length; h++) {
        let f = c[h]
        const p = t[f]
        if (a)
          if (ce(i, f)) p !== i[f] && ((i[f] = p), (u = !0))
          else {
            const y = rt(f)
            r[y] = us(a, l, y, p, e, !1)
          }
        else p !== i[f] && ((i[f] = p), (u = !0))
      }
    }
  } else {
    $a(e, t, r, i) && (u = !0)
    let c
    for (const h in l)
      (!t || (!ce(t, h) && ((c = Dt(h)) === h || !ce(t, c)))) &&
        (a
          ? n &&
            (n[h] !== void 0 || n[c] !== void 0) &&
            (r[h] = us(a, l, h, void 0, e, !0))
          : delete r[h])
    if (i !== l)
      for (const h in i) (!t || (!ce(t, h) && !0)) && (delete i[h], (u = !0))
  }
  u && at(e, 'set', '$attrs')
}
function $a(e, t, n, s) {
  const [r, i] = e.propsOptions
  let o = !1,
    l
  if (t)
    for (let a in t) {
      if (Yn(a)) continue
      const u = t[a]
      let c
      r && ce(r, (c = rt(a)))
        ? !i || !i.includes(c)
          ? (n[c] = u)
          : ((l || (l = {}))[c] = u)
        : Is(e.emitsOptions, a) ||
          ((!(a in s) || u !== s[a]) && ((s[a] = u), (o = !0)))
    }
  if (i) {
    const a = fe(n),
      u = l || ve
    for (let c = 0; c < i.length; c++) {
      const h = i[c]
      n[h] = us(r, a, h, u[h], e, !ce(u, h))
    }
  }
  return o
}
function us(e, t, n, s, r, i) {
  const o = e[n]
  if (o != null) {
    const l = ce(o, 'default')
    if (l && s === void 0) {
      const a = o.default
      if (o.type !== Function && re(a)) {
        const { propsDefaults: u } = r
        n in u ? (s = u[n]) : (nn(r), (s = u[n] = a.call(null, t)), Mt())
      } else s = a
    }
    o[0] && (i && !l ? (s = !1) : o[1] && (s === '' || s === Dt(n)) && (s = !0))
  }
  return s
}
function ka(e, t, n = !1) {
  const s = t.propsCache,
    r = s.get(e)
  if (r) return r
  const i = e.props,
    o = {},
    l = []
  let a = !1
  if (!re(e)) {
    const c = (h) => {
      a = !0
      const [f, p] = ka(h, t, !0)
      Se(o, f), p && l.push(...p)
    }
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c)
  }
  if (!i && !a) return s.set(e, Zt), Zt
  if (X(i))
    for (let c = 0; c < i.length; c++) {
      const h = rt(i[c])
      $i(h) && (o[h] = ve)
    }
  else if (i)
    for (const c in i) {
      const h = rt(c)
      if ($i(h)) {
        const f = i[c],
          p = (o[h] = X(f) || re(f) ? { type: f } : f)
        if (p) {
          const y = Ti(Boolean, p.type),
            k = Ti(String, p.type)
          ;(p[0] = y > -1),
            (p[1] = k < 0 || y < k),
            (y > -1 || ce(p, 'default')) && l.push(h)
        }
      }
    }
  const u = [o, l]
  return s.set(e, u), u
}
function $i(e) {
  return e[0] !== '$'
}
function ki(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/)
  return t ? t[1] : e === null ? 'null' : ''
}
function Pi(e, t) {
  return ki(e) === ki(t)
}
function Ti(e, t) {
  return X(t) ? t.findIndex((n) => Pi(n, e)) : re(t) && Pi(t, e) ? 0 : -1
}
const Pa = (e) => e[0] === '_' || e === '$stable',
  qs = (e) => (X(e) ? e.map(tt) : [tt(e)]),
  dc = (e, t, n) => {
    const s = Fu((...r) => qs(t(...r)), n)
    return (s._c = !1), s
  },
  Ta = (e, t, n) => {
    const s = e._ctx
    for (const r in e) {
      if (Pa(r)) continue
      const i = e[r]
      if (re(i)) t[r] = dc(r, i, s)
      else if (i != null) {
        const o = qs(i)
        t[r] = () => o
      }
    }
  },
  Aa = (e, t) => {
    const n = qs(t)
    e.slots.default = () => n
  },
  hc = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._
      n ? ((e.slots = fe(t)), or(t, '_', n)) : Ta(t, (e.slots = {}))
    } else (e.slots = {}), t && Aa(e, t)
    or(e.slots, Ar, 1)
  },
  pc = (e, t, n) => {
    const { vnode: s, slots: r } = e
    let i = !0,
      o = ve
    if (s.shapeFlag & 32) {
      const l = t._
      l
        ? n && l === 1
          ? (i = !1)
          : (Se(r, t), !n && l === 1 && delete r._)
        : ((i = !t.$stable), Ta(t, r)),
        (o = t)
    } else t && (Aa(e, t), (o = { default: 1 }))
    if (i) for (const l in r) !Pa(l) && !(l in o) && delete r[l]
  }
function Ra(e, t) {
  const n = De
  if (n === null) return e
  const s = n.proxy,
    r = e.dirs || (e.dirs = [])
  for (let i = 0; i < t.length; i++) {
    let [o, l, a, u = ve] = t[i]
    re(o) && (o = { mounted: o, updated: o }),
      o.deep && At(l),
      r.push({
        dir: o,
        instance: s,
        value: l,
        oldValue: void 0,
        arg: a,
        modifiers: u,
      })
  }
  return e
}
function xt(e, t, n, s) {
  const r = e.dirs,
    i = t && t.dirs
  for (let o = 0; o < r.length; o++) {
    const l = r[o]
    i && (l.oldValue = i[o].value)
    let a = l.dir[s]
    a && (on(), Ue(a, n, 8, [e.el, l, e, t]), an())
  }
}
function Oa() {
  return {
    app: null,
    config: {
      isNativeTag: Kl,
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
let mc = 0
function gc(e, t) {
  return function (s, r = null) {
    r != null && !be(r) && (r = null)
    const i = Oa(),
      o = new Set()
    let l = !1
    const a = (i.app = {
      _uid: mc++,
      _component: s,
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
          o.has(u) ||
            (u && re(u.install)
              ? (o.add(u), u.install(a, ...c))
              : re(u) && (o.add(u), u(a, ...c))),
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
          const f = Ae(s, r)
          return (
            (f.appContext = i),
            c && t ? t(f, u) : e(f, u, h),
            (l = !0),
            (a._container = u),
            (u.__vue_app__ = a),
            Ks(f.component) || f.component.proxy
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
function cs(e, t, n, s, r = !1) {
  if (X(e)) {
    e.forEach((f, p) => cs(f, t && (X(t) ? t[p] : t), n, s, r))
    return
  }
  if (os(s) && !r) return
  const i = s.shapeFlag & 4 ? Ks(s.component) || s.component.proxy : s.el,
    o = r ? null : i,
    { i: l, r: a } = e,
    u = t && t.r,
    c = l.refs === ve ? (l.refs = {}) : l.refs,
    h = l.setupState
  if (
    (u != null &&
      u !== a &&
      (xe(u)
        ? ((c[u] = null), ce(h, u) && (h[u] = null))
        : we(u) && (u.value = null)),
    re(a))
  )
    _t(a, l, 12, [o, c])
  else {
    const f = xe(a),
      p = we(a)
    if (f || p) {
      const y = () => {
        if (e.f) {
          const k = f ? c[a] : a.value
          r
            ? X(k) && Ss(k, i)
            : X(k)
            ? k.includes(i) || k.push(i)
            : f
            ? (c[a] = [i])
            : ((a.value = [i]), e.k && (c[e.k] = a.value))
        } else
          f
            ? ((c[a] = o), ce(h, a) && (h[a] = o))
            : we(a) && ((a.value = o), e.k && (c[e.k] = o))
      }
      o ? ((y.id = -1), Me(y, n)) : y()
    }
  }
}
const Me = Vu
function vc(e) {
  return yc(e)
}
function yc(e, t) {
  const n = Xl()
  n.__VUE__ = !0
  const {
      insert: s,
      remove: r,
      patchProp: i,
      createElement: o,
      createText: l,
      createComment: a,
      setText: u,
      setElementText: c,
      parentNode: h,
      nextSibling: f,
      setScopeId: p = Je,
      cloneNode: y,
      insertStaticContent: k,
    } = e,
    x = (
      d,
      m,
      g,
      w = null,
      b = null,
      A = null,
      M = !1,
      P = null,
      O = !!m.dynamicChildren
    ) => {
      if (d === m) return
      d && !kt(d, m) && ((w = j(d)), pe(d, b, A, !0), (d = null)),
        m.patchFlag === -2 && ((O = !1), (m.dynamicChildren = null))
      const { type: S, ref: U, shapeFlag: q } = m
      switch (S) {
        case Hs:
          C(d, m, g, w)
          break
        case Qe:
          B(d, m, g, w)
          break
        case er:
          d == null && V(m, g, w, M)
          break
        case Oe:
          N(d, m, g, w, b, A, M, P, O)
          break
        default:
          q & 1
            ? se(d, m, g, w, b, A, M, P, O)
            : q & 6
            ? R(d, m, g, w, b, A, M, P, O)
            : (q & 64 || q & 128) && S.process(d, m, g, w, b, A, M, P, O, ae)
      }
      U != null && b && cs(U, d && d.ref, A, m || d, !m)
    },
    C = (d, m, g, w) => {
      if (d == null) s((m.el = l(m.children)), g, w)
      else {
        const b = (m.el = d.el)
        m.children !== d.children && u(b, m.children)
      }
    },
    B = (d, m, g, w) => {
      d == null ? s((m.el = a(m.children || '')), g, w) : (m.el = d.el)
    },
    V = (d, m, g, w) => {
      ;[d.el, d.anchor] = k(d.children, m, g, w, d.el, d.anchor)
    },
    K = ({ el: d, anchor: m }, g, w) => {
      let b
      for (; d && d !== m; ) (b = f(d)), s(d, g, w), (d = b)
      s(m, g, w)
    },
    ne = ({ el: d, anchor: m }) => {
      let g
      for (; d && d !== m; ) (g = f(d)), r(d), (d = g)
      r(m)
    },
    se = (d, m, g, w, b, A, M, P, O) => {
      ;(M = M || m.type === 'svg'),
        d == null ? J(m, g, w, b, A, M, P, O) : W(d, m, b, A, M, P, O)
    },
    J = (d, m, g, w, b, A, M, P) => {
      let O, S
      const {
        type: U,
        props: q,
        shapeFlag: z,
        transition: Z,
        patchFlag: ue,
        dirs: _e,
      } = d
      if (d.el && y !== void 0 && ue === -1) O = d.el = y(d.el)
      else {
        if (
          ((O = d.el = o(d.type, A, q && q.is, q)),
          z & 8
            ? c(O, d.children)
            : z & 16 &&
              H(d.children, O, null, w, b, A && U !== 'foreignObject', M, P),
          _e && xt(d, null, w, 'created'),
          q)
        ) {
          for (const ye in q)
            ye !== 'value' &&
              !Yn(ye) &&
              i(O, ye, null, q[ye], A, d.children, w, b, T)
          'value' in q && i(O, 'value', null, q.value),
            (S = q.onVnodeBeforeMount) && Ge(S, w, d)
        }
        ie(O, d, d.scopeId, M, w)
      }
      _e && xt(d, null, w, 'beforeMount')
      const me = (!b || (b && !b.pendingBranch)) && Z && !Z.persisted
      me && Z.beforeEnter(O),
        s(O, m, g),
        ((S = q && q.onVnodeMounted) || me || _e) &&
          Me(() => {
            S && Ge(S, w, d), me && Z.enter(O), _e && xt(d, null, w, 'mounted')
          }, b)
    },
    ie = (d, m, g, w, b) => {
      if ((g && p(d, g), w)) for (let A = 0; A < w.length; A++) p(d, w[A])
      if (b) {
        let A = b.subTree
        if (m === A) {
          const M = b.vnode
          ie(d, M, M.scopeId, M.slotScopeIds, b.parent)
        }
      }
    },
    H = (d, m, g, w, b, A, M, P, O = 0) => {
      for (let S = O; S < d.length; S++) {
        const U = (d[S] = P ? mt(d[S]) : tt(d[S]))
        x(null, U, m, g, w, b, A, M, P)
      }
    },
    W = (d, m, g, w, b, A, M) => {
      const P = (m.el = d.el)
      let { patchFlag: O, dynamicChildren: S, dirs: U } = m
      O |= d.patchFlag & 16
      const q = d.props || ve,
        z = m.props || ve
      let Z
      g && Et(g, !1),
        (Z = z.onVnodeBeforeUpdate) && Ge(Z, g, m, d),
        U && xt(m, d, g, 'beforeUpdate'),
        g && Et(g, !0)
      const ue = b && m.type !== 'foreignObject'
      if (
        (S
          ? de(d.dynamicChildren, S, P, g, w, ue, A)
          : M || F(d, m, P, null, g, w, ue, A, !1),
        O > 0)
      ) {
        if (O & 16) L(P, m, q, z, g, w, b)
        else if (
          (O & 2 && q.class !== z.class && i(P, 'class', null, z.class, b),
          O & 4 && i(P, 'style', q.style, z.style, b),
          O & 8)
        ) {
          const _e = m.dynamicProps
          for (let me = 0; me < _e.length; me++) {
            const ye = _e[me],
              ze = q[ye],
              qt = z[ye]
            ;(qt !== ze || ye === 'value') &&
              i(P, ye, ze, qt, b, d.children, g, w, T)
          }
        }
        O & 1 && d.children !== m.children && c(P, m.children)
      } else !M && S == null && L(P, m, q, z, g, w, b)
      ;((Z = z.onVnodeUpdated) || U) &&
        Me(() => {
          Z && Ge(Z, g, m, d), U && xt(m, d, g, 'updated')
        }, w)
    },
    de = (d, m, g, w, b, A, M) => {
      for (let P = 0; P < m.length; P++) {
        const O = d[P],
          S = m[P],
          U =
            O.el && (O.type === Oe || !kt(O, S) || O.shapeFlag & 70)
              ? h(O.el)
              : g
        x(O, S, U, null, w, b, A, M, !0)
      }
    },
    L = (d, m, g, w, b, A, M) => {
      if (g !== w) {
        for (const P in w) {
          if (Yn(P)) continue
          const O = w[P],
            S = g[P]
          O !== S && P !== 'value' && i(d, P, S, O, M, m.children, b, A, T)
        }
        if (g !== ve)
          for (const P in g)
            !Yn(P) && !(P in w) && i(d, P, g[P], null, M, m.children, b, A, T)
        'value' in w && i(d, 'value', g.value, w.value)
      }
    },
    N = (d, m, g, w, b, A, M, P, O) => {
      const S = (m.el = d ? d.el : l('')),
        U = (m.anchor = d ? d.anchor : l(''))
      let { patchFlag: q, dynamicChildren: z, slotScopeIds: Z } = m
      Z && (P = P ? P.concat(Z) : Z),
        d == null
          ? (s(S, g, w), s(U, g, w), H(m.children, g, U, b, A, M, P, O))
          : q > 0 && q & 64 && z && d.dynamicChildren
          ? (de(d.dynamicChildren, z, g, b, A, M, P),
            (m.key != null || (b && m === b.subTree)) && Fs(d, m, !0))
          : F(d, m, g, U, b, A, M, P, O)
    },
    R = (d, m, g, w, b, A, M, P, O) => {
      ;(m.slotScopeIds = P),
        d == null
          ? m.shapeFlag & 512
            ? b.ctx.activate(m, g, w, M, O)
            : v(m, g, w, b, A, M, O)
          : $(d, m, O)
    },
    v = (d, m, g, w, b, A, M) => {
      const P = (d.component = Mc(d, w, b))
      if ((kr(d) && (P.ctx.renderer = ae), Lc(P), P.asyncDep)) {
        if ((b && b.registerDep(P, E), !d.el)) {
          const O = (P.subTree = Ae(Qe))
          B(null, O, m, g)
        }
        return
      }
      E(P, d, m, g, b, A, M)
    },
    $ = (d, m, g) => {
      const w = (m.component = d.component)
      if (zu(d, m, g))
        if (w.asyncDep && !w.asyncResolved) {
          D(w, m, g)
          return
        } else (w.next = m), Nu(w.update), w.update()
      else (m.component = d.component), (m.el = d.el), (w.vnode = m)
    },
    E = (d, m, g, w, b, A, M) => {
      const P = () => {
          if (d.isMounted) {
            let { next: U, bu: q, u: z, parent: Z, vnode: ue } = d,
              _e = U,
              me
            Et(d, !1),
              U ? ((U.el = ue.el), D(d, U, M)) : (U = ue),
              q && Br(q),
              (me = U.props && U.props.onVnodeBeforeUpdate) && Ge(me, Z, U, ue),
              Et(d, !0)
            const ye = jr(d),
              ze = d.subTree
            ;(d.subTree = ye),
              x(ze, ye, h(ze.el), j(ze), d, b, A),
              (U.el = ye.el),
              _e === null && Ku(d, ye.el),
              z && Me(z, b),
              (me = U.props && U.props.onVnodeUpdated) &&
                Me(() => Ge(me, Z, U, ue), b)
          } else {
            let U
            const { el: q, props: z } = m,
              { bm: Z, m: ue, parent: _e } = d,
              me = os(m)
            if (
              (Et(d, !1),
              Z && Br(Z),
              !me && (U = z && z.onVnodeBeforeMount) && Ge(U, _e, m),
              Et(d, !0),
              q && Y)
            ) {
              const ye = () => {
                ;(d.subTree = jr(d)), Y(q, d.subTree, d, b, null)
              }
              me
                ? m.type.__asyncLoader().then(() => !d.isUnmounted && ye())
                : ye()
            } else {
              const ye = (d.subTree = jr(d))
              x(null, ye, g, w, d, b, A), (m.el = ye.el)
            }
            if ((ue && Me(ue, b), !me && (U = z && z.onVnodeMounted))) {
              const ye = m
              Me(() => Ge(U, _e, ye), b)
            }
            m.shapeFlag & 256 && d.a && Me(d.a, b),
              (d.isMounted = !0),
              (m = g = w = null)
          }
        },
        O = (d.effect = new Ts(P, () => ua(d.update), d.scope)),
        S = (d.update = O.run.bind(O))
      ;(S.id = d.uid), Et(d, !0), S()
    },
    D = (d, m, g) => {
      m.component = d
      const w = d.vnode.props
      ;(d.vnode = m),
        (d.next = null),
        fc(d, m.props, w, g),
        pc(d, m.children, g),
        on(),
        Ds(void 0, d.update),
        an()
    },
    F = (d, m, g, w, b, A, M, P, O = !1) => {
      const S = d && d.children,
        U = d ? d.shapeFlag : 0,
        q = m.children,
        { patchFlag: z, shapeFlag: Z } = m
      if (z > 0) {
        if (z & 128) {
          he(S, q, g, w, b, A, M, P, O)
          return
        } else if (z & 256) {
          oe(S, q, g, w, b, A, M, P, O)
          return
        }
      }
      Z & 8
        ? (U & 16 && T(S, b, A), q !== S && c(g, q))
        : U & 16
        ? Z & 16
          ? he(S, q, g, w, b, A, M, P, O)
          : T(S, b, A, !0)
        : (U & 8 && c(g, ''), Z & 16 && H(q, g, w, b, A, M, P, O))
    },
    oe = (d, m, g, w, b, A, M, P, O) => {
      ;(d = d || Zt), (m = m || Zt)
      const S = d.length,
        U = m.length,
        q = Math.min(S, U)
      let z
      for (z = 0; z < q; z++) {
        const Z = (m[z] = O ? mt(m[z]) : tt(m[z]))
        x(d[z], Z, g, null, b, A, M, P, O)
      }
      S > U ? T(d, b, A, !0, !1, q) : H(m, g, w, b, A, M, P, O, q)
    },
    he = (d, m, g, w, b, A, M, P, O) => {
      let S = 0
      const U = m.length
      let q = d.length - 1,
        z = U - 1
      for (; S <= q && S <= z; ) {
        const Z = d[S],
          ue = (m[S] = O ? mt(m[S]) : tt(m[S]))
        if (kt(Z, ue)) x(Z, ue, g, null, b, A, M, P, O)
        else break
        S++
      }
      for (; S <= q && S <= z; ) {
        const Z = d[q],
          ue = (m[z] = O ? mt(m[z]) : tt(m[z]))
        if (kt(Z, ue)) x(Z, ue, g, null, b, A, M, P, O)
        else break
        q--, z--
      }
      if (S > q) {
        if (S <= z) {
          const Z = z + 1,
            ue = Z < U ? m[Z].el : w
          for (; S <= z; )
            x(null, (m[S] = O ? mt(m[S]) : tt(m[S])), g, ue, b, A, M, P, O), S++
        }
      } else if (S > z) for (; S <= q; ) pe(d[S], b, A, !0), S++
      else {
        const Z = S,
          ue = S,
          _e = new Map()
        for (S = ue; S <= z; S++) {
          const Le = (m[S] = O ? mt(m[S]) : tt(m[S]))
          Le.key != null && _e.set(Le.key, S)
        }
        let me,
          ye = 0
        const ze = z - ue + 1
        let qt = !1,
          ai = 0
        const cn = new Array(ze)
        for (S = 0; S < ze; S++) cn[S] = 0
        for (S = Z; S <= q; S++) {
          const Le = d[S]
          if (ye >= ze) {
            pe(Le, b, A, !0)
            continue
          }
          let Xe
          if (Le.key != null) Xe = _e.get(Le.key)
          else
            for (me = ue; me <= z; me++)
              if (cn[me - ue] === 0 && kt(Le, m[me])) {
                Xe = me
                break
              }
          Xe === void 0
            ? pe(Le, b, A, !0)
            : ((cn[Xe - ue] = S + 1),
              Xe >= ai ? (ai = Xe) : (qt = !0),
              x(Le, m[Xe], g, null, b, A, M, P, O),
              ye++)
        }
        const li = qt ? _c(cn) : Zt
        for (me = li.length - 1, S = ze - 1; S >= 0; S--) {
          const Le = ue + S,
            Xe = m[Le],
            ui = Le + 1 < U ? m[Le + 1].el : w
          cn[S] === 0
            ? x(null, Xe, g, ui, b, A, M, P, O)
            : qt && (me < 0 || S !== li[me] ? le(Xe, g, ui, 2) : me--)
        }
      }
    },
    le = (d, m, g, w, b = null) => {
      const { el: A, type: M, transition: P, children: O, shapeFlag: S } = d
      if (S & 6) {
        le(d.component.subTree, m, g, w)
        return
      }
      if (S & 128) {
        d.suspense.move(m, g, w)
        return
      }
      if (S & 64) {
        M.move(d, m, g, ae)
        return
      }
      if (M === Oe) {
        s(A, m, g)
        for (let q = 0; q < O.length; q++) le(O[q], m, g, w)
        s(d.anchor, m, g)
        return
      }
      if (M === er) {
        K(d, m, g)
        return
      }
      if (w !== 2 && S & 1 && P)
        if (w === 0) P.beforeEnter(A), s(A, m, g), Me(() => P.enter(A), b)
        else {
          const { leave: q, delayLeave: z, afterLeave: Z } = P,
            ue = () => s(A, m, g),
            _e = () => {
              q(A, () => {
                ue(), Z && Z()
              })
            }
          z ? z(A, ue, _e) : _e()
        }
      else s(A, m, g)
    },
    pe = (d, m, g, w = !1, b = !1) => {
      const {
        type: A,
        props: M,
        ref: P,
        children: O,
        dynamicChildren: S,
        shapeFlag: U,
        patchFlag: q,
        dirs: z,
      } = d
      if ((P != null && cs(P, null, g, d, !0), U & 256)) {
        m.ctx.deactivate(d)
        return
      }
      const Z = U & 1 && z,
        ue = !os(d)
      let _e
      if ((ue && (_e = M && M.onVnodeBeforeUnmount) && Ge(_e, m, d), U & 6))
        I(d.component, g, w)
      else {
        if (U & 128) {
          d.suspense.unmount(g, w)
          return
        }
        Z && xt(d, null, m, 'beforeUnmount'),
          U & 64
            ? d.type.remove(d, m, g, b, ae, w)
            : S && (A !== Oe || (q > 0 && q & 64))
            ? T(S, m, g, !1, !0)
            : ((A === Oe && q & 384) || (!b && U & 16)) && T(O, m, g),
          w && je(d)
      }
      ;((ue && (_e = M && M.onVnodeUnmounted)) || Z) &&
        Me(() => {
          _e && Ge(_e, m, d), Z && xt(d, null, m, 'unmounted')
        }, g)
    },
    je = (d) => {
      const { type: m, el: g, anchor: w, transition: b } = d
      if (m === Oe) {
        _(g, w)
        return
      }
      if (m === er) {
        ne(d)
        return
      }
      const A = () => {
        r(g), b && !b.persisted && b.afterLeave && b.afterLeave()
      }
      if (d.shapeFlag & 1 && b && !b.persisted) {
        const { leave: M, delayLeave: P } = b,
          O = () => M(g, A)
        P ? P(d.el, A, O) : O()
      } else A()
    },
    _ = (d, m) => {
      let g
      for (; d !== m; ) (g = f(d)), r(d), (d = g)
      r(m)
    },
    I = (d, m, g) => {
      const { bum: w, scope: b, update: A, subTree: M, um: P } = d
      w && Br(w),
        b.stop(),
        A && ((A.active = !1), pe(M, d, m, g)),
        P && Me(P, m),
        Me(() => {
          d.isUnmounted = !0
        }, m),
        m &&
          m.pendingBranch &&
          !m.isUnmounted &&
          d.asyncDep &&
          !d.asyncResolved &&
          d.suspenseId === m.pendingId &&
          (m.deps--, m.deps === 0 && m.resolve())
    },
    T = (d, m, g, w = !1, b = !1, A = 0) => {
      for (let M = A; M < d.length; M++) pe(d[M], m, g, w, b)
    },
    j = (d) =>
      d.shapeFlag & 6
        ? j(d.component.subTree)
        : d.shapeFlag & 128
        ? d.suspense.next()
        : f(d.anchor || d.el),
    ee = (d, m, g) => {
      d == null
        ? m._vnode && pe(m._vnode, null, null, !0)
        : x(m._vnode || null, d, m, null, null, null, g),
        da(),
        (m._vnode = d)
    },
    ae = {
      p: x,
      um: pe,
      m: le,
      r: je,
      mt: v,
      mc: H,
      pc: F,
      pbc: de,
      n: j,
      o: e,
    }
  let te, Y
  return (
    t && ([te, Y] = t(ae)), { render: ee, hydrate: te, createApp: gc(ee, te) }
  )
}
function Et({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n
}
function Fs(e, t, n = !1) {
  const s = e.children,
    r = t.children
  if (X(s) && X(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i]
      let l = r[i]
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = r[i] = mt(r[i])), (l.el = o.el)),
        n || Fs(o, l))
    }
}
function _c(e) {
  const t = e.slice(),
    n = [0]
  let s, r, i, o, l
  const a = e.length
  for (s = 0; s < a; s++) {
    const u = e[s]
    if (u !== 0) {
      if (((r = n[n.length - 1]), e[r] < u)) {
        ;(t[s] = r), n.push(s)
        continue
      }
      for (i = 0, o = n.length - 1; i < o; )
        (l = (i + o) >> 1), e[n[l]] < u ? (i = l + 1) : (o = l)
      u < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), (n[i] = s))
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) (n[i] = o), (o = t[o])
  return n
}
const bc = (e) => e.__isTeleport,
  xn = (e) => e && (e.disabled || e.disabled === ''),
  Ai = (e) => typeof SVGElement != 'undefined' && e instanceof SVGElement,
  fs = (e, t) => {
    const n = e && e.to
    return xe(n) ? (t ? t(n) : null) : n
  },
  wc = {
    __isTeleport: !0,
    process(e, t, n, s, r, i, o, l, a, u) {
      const {
          mc: c,
          pc: h,
          pbc: f,
          o: { insert: p, querySelector: y, createText: k, createComment: x },
        } = u,
        C = xn(t.props)
      let { shapeFlag: B, children: V, dynamicChildren: K } = t
      if (e == null) {
        const ne = (t.el = k('')),
          se = (t.anchor = k(''))
        p(ne, n, s), p(se, n, s)
        const J = (t.target = fs(t.props, y)),
          ie = (t.targetAnchor = k(''))
        J && (p(ie, J), (o = o || Ai(J)))
        const H = (W, de) => {
          B & 16 && c(V, W, de, r, i, o, l, a)
        }
        C ? H(n, se) : J && H(J, ie)
      } else {
        t.el = e.el
        const ne = (t.anchor = e.anchor),
          se = (t.target = e.target),
          J = (t.targetAnchor = e.targetAnchor),
          ie = xn(e.props),
          H = ie ? n : se,
          W = ie ? ne : J
        if (
          ((o = o || Ai(se)),
          K
            ? (f(e.dynamicChildren, K, H, r, i, o, l), Fs(e, t, !0))
            : a || h(e, t, H, W, r, i, o, l, !1),
          C)
        )
          ie || Vn(t, n, ne, u, 1)
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const de = (t.target = fs(t.props, y))
          de && Vn(t, de, null, u, 0)
        } else ie && Vn(t, se, J, u, 1)
      }
    },
    remove(e, t, n, s, { um: r, o: { remove: i } }, o) {
      const {
        shapeFlag: l,
        children: a,
        anchor: u,
        targetAnchor: c,
        target: h,
        props: f,
      } = e
      if ((h && i(c), (o || !xn(f)) && (i(u), l & 16)))
        for (let p = 0; p < a.length; p++) {
          const y = a[p]
          r(y, t, n, !0, !!y.dynamicChildren)
        }
    },
    move: Vn,
    hydrate: xc,
  }
function Vn(e, t, n, { o: { insert: s }, m: r }, i = 2) {
  i === 0 && s(e.targetAnchor, t, n)
  const { el: o, anchor: l, shapeFlag: a, children: u, props: c } = e,
    h = i === 2
  if ((h && s(o, t, n), (!h || xn(c)) && a & 16))
    for (let f = 0; f < u.length; f++) r(u[f], t, n, 2)
  h && s(l, t, n)
}
function xc(
  e,
  t,
  n,
  s,
  r,
  i,
  { o: { nextSibling: o, parentNode: l, querySelector: a } },
  u
) {
  const c = (t.target = fs(t.props, a))
  if (c) {
    const h = c._lpa || c.firstChild
    t.shapeFlag & 16 &&
      (xn(t.props)
        ? ((t.anchor = u(o(e), t, l(e), n, s, r, i)), (t.targetAnchor = h))
        : ((t.anchor = o(e)), (t.targetAnchor = u(h, t, c, n, s, r, i))),
      (c._lpa = t.targetAnchor && o(t.targetAnchor)))
  }
  return t.anchor && o(t.anchor)
}
const _g = wc,
  Ma = 'components',
  Ec = 'directives'
function La(e, t) {
  return Na(Ma, e, !0, t) || e
}
const Cc = Symbol()
function bg(e) {
  return Na(Ec, e)
}
function Na(e, t, n = !0, s = !1) {
  const r = De || Ce
  if (r) {
    const i = r.type
    if (e === Ma) {
      const l = Bc(i)
      if (l && (l === t || l === rt(t) || l === Er(rt(t)))) return i
    }
    const o = Ri(r[e] || i[e], t) || Ri(r.appContext[e], t)
    return !o && s ? i : o
  }
}
function Ri(e, t) {
  return e && (e[t] || e[rt(t)] || e[Er(rt(t))])
}
const Oe = Symbol(void 0),
  Hs = Symbol(void 0),
  Qe = Symbol(void 0),
  er = Symbol(void 0),
  En = []
let Ot = null
function He(e = !1) {
  En.push((Ot = e ? null : []))
}
function Sc() {
  En.pop(), (Ot = En[En.length - 1] || null)
}
let cr = 1
function Oi(e) {
  cr += e
}
function Da(e) {
  return (
    (e.dynamicChildren = cr > 0 ? Ot || Zt : null),
    Sc(),
    cr > 0 && Ot && Ot.push(e),
    e
  )
}
function pt(e, t, n, s, r, i) {
  return Da($e(e, t, n, s, r, i, !0))
}
function Tr(e, t, n, s, r) {
  return Da(Ae(e, t, n, s, r, !0))
}
function fr(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function kt(e, t) {
  return e.type === t.type && e.key === t.key
}
const Ar = '__vInternal',
  Ia = ({ key: e }) => (e != null ? e : null),
  tr = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null
      ? xe(e) || we(e) || re(e)
        ? { i: De, r: e, k: t, f: !!n }
        : e
      : null
function $e(
  e,
  t = null,
  n = null,
  s = 0,
  r = null,
  i = e === Oe ? 0 : 1,
  o = !1,
  l = !1
) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ia(t),
    ref: t && tr(t),
    scopeId: $r,
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
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
  }
  return (
    l
      ? (zs(a, n), i & 128 && e.normalize(a))
      : n && (a.shapeFlag |= xe(n) ? 8 : 16),
    cr > 0 &&
      !o &&
      Ot &&
      (a.patchFlag > 0 || i & 6) &&
      a.patchFlag !== 32 &&
      Ot.push(a),
    a
  )
}
const Ae = $c
function $c(e, t = null, n = null, s = 0, r = null, i = !1) {
  if (((!e || e === Cc) && (e = Qe), fr(e))) {
    const l = tn(e, t, !0)
    return n && zs(l, n), l
  }
  if ((jc(e) && (e = e.__vccOpts), t)) {
    t = kc(t)
    let { class: l, style: a } = t
    l && !xe(l) && (t.class = In(l)),
      be(a) && (na(a) && !X(a) && (a = Se({}, a)), (t.style = Dn(a)))
  }
  const o = xe(e) ? 1 : Wu(e) ? 128 : bc(e) ? 64 : be(e) ? 4 : re(e) ? 2 : 0
  return $e(e, t, n, s, r, o, i, !0)
}
function kc(e) {
  return e ? (na(e) || Ar in e ? Se({}, e) : e) : null
}
function tn(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: i, children: o } = e,
    l = t ? Pc(s || {}, t) : s
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Ia(l),
    ref:
      t && t.ref ? (n && r ? (X(r) ? r.concat(tr(t)) : [r, tr(t)]) : tr(t)) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Oe ? (i === -1 ? 16 : i | 16) : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && tn(e.ssContent),
    ssFallback: e.ssFallback && tn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
  }
}
function Us(e = ' ', t = 0) {
  return Ae(Hs, null, e, t)
}
function wg(e, t) {
  const n = Ae(er, null, e)
  return (n.staticCount = t), n
}
function fn(e = '', t = !1) {
  return t ? (He(), Tr(Qe, null, e)) : Ae(Qe, null, e)
}
function tt(e) {
  return e == null || typeof e == 'boolean'
    ? Ae(Qe)
    : X(e)
    ? Ae(Oe, null, e.slice())
    : typeof e == 'object'
    ? mt(e)
    : Ae(Hs, null, String(e))
}
function mt(e) {
  return e.el === null || e.memo ? e : tn(e)
}
function zs(e, t) {
  let n = 0
  const { shapeFlag: s } = e
  if (t == null) t = null
  else if (X(t)) n = 16
  else if (typeof t == 'object')
    if (s & 65) {
      const r = t.default
      r && (r._c && (r._d = !1), zs(e, r()), r._c && (r._d = !0))
      return
    } else {
      n = 32
      const r = t._
      !r && !(Ar in t)
        ? (t._ctx = De)
        : r === 3 &&
          De &&
          (De.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    re(t)
      ? ((t = { default: t, _ctx: De }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [Us(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function Pc(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const s = e[n]
    for (const r in s)
      if (r === 'class')
        t.class !== s.class && (t.class = In([t.class, s.class]))
      else if (r === 'style') t.style = Dn([t.style, s.style])
      else if (br(r)) {
        const i = t[r],
          o = s[r]
        o &&
          i !== o &&
          !(X(i) && i.includes(o)) &&
          (t[r] = i ? [].concat(i, o) : o)
      } else r !== '' && (t[r] = s[r])
  }
  return t
}
function Ge(e, t, n, s = null) {
  Ue(e, t, 7, [n, s])
}
function Tc(e, t, n, s) {
  let r
  const i = n && n[s]
  if (X(e) || xe(e)) {
    r = new Array(e.length)
    for (let o = 0, l = e.length; o < l; o++)
      r[o] = t(e[o], o, void 0, i && i[o])
  } else if (typeof e == 'number') {
    r = new Array(e)
    for (let o = 0; o < e; o++) r[o] = t(o + 1, o, void 0, i && i[o])
  } else if (be(e))
    if (e[Symbol.iterator])
      r = Array.from(e, (o, l) => t(o, l, void 0, i && i[l]))
    else {
      const o = Object.keys(e)
      r = new Array(o.length)
      for (let l = 0, a = o.length; l < a; l++) {
        const u = o[l]
        r[l] = t(e[u], u, l, i && i[l])
      }
    }
  else r = []
  return n && (n[s] = r), r
}
function xg(e, t, n = {}, s, r) {
  if (De.isCE) return Ae('slot', t === 'default' ? null : { name: t }, s && s())
  let i = e[t]
  i && i._c && (i._d = !1), He()
  const o = i && Ba(i(n)),
    l = Tr(
      Oe,
      { key: n.key || `_${t}` },
      o || (s ? s() : []),
      o && e._ === 1 ? 64 : -2
    )
  return (
    !r && l.scopeId && (l.slotScopeIds = [l.scopeId + '-s']),
    i && i._c && (i._d = !0),
    l
  )
}
function Ba(e) {
  return e.some((t) =>
    fr(t) ? !(t.type === Qe || (t.type === Oe && !Ba(t.children))) : !0
  )
    ? e
    : null
}
function Eg(e) {
  const t = {}
  for (const n in e) t[Xn(n)] = e[n]
  return t
}
const ds = (e) => (e ? (ja(e) ? Ks(e) || e.proxy : ds(e.parent)) : null),
  dr = Se(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ds(e.parent),
    $root: (e) => ds(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Sa(e),
    $forceUpdate: (e) => () => ua(e.update),
    $nextTick: (e) => la.bind(e.proxy),
    $watch: (e) => Ju.bind(e),
  }),
  Ac = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: i,
        accessCache: o,
        type: l,
        appContext: a,
      } = e
      let u
      if (t[0] !== '$') {
        const p = o[t]
        if (p !== void 0)
          switch (p) {
            case 1:
              return s[t]
            case 2:
              return r[t]
            case 4:
              return n[t]
            case 3:
              return i[t]
          }
        else {
          if (s !== ve && ce(s, t)) return (o[t] = 1), s[t]
          if (r !== ve && ce(r, t)) return (o[t] = 2), r[t]
          if ((u = e.propsOptions[0]) && ce(u, t)) return (o[t] = 3), i[t]
          if (n !== ve && ce(n, t)) return (o[t] = 4), n[t]
          as && (o[t] = 0)
        }
      }
      const c = dr[t]
      let h, f
      if (c) return t === '$attrs' && Ie(e, 'get', t), c(e)
      if ((h = l.__cssModules) && (h = h[t])) return h
      if (n !== ve && ce(n, t)) return (o[t] = 4), n[t]
      if (((f = a.config.globalProperties), ce(f, t))) return f[t]
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: i } = e
      return r !== ve && ce(r, t)
        ? ((r[t] = n), !0)
        : s !== ve && ce(s, t)
        ? ((s[t] = n), !0)
        : ce(e.props, t) || (t[0] === '$' && t.slice(1) in e)
        ? !1
        : ((i[t] = n), !0)
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: r,
          propsOptions: i,
        },
      },
      o
    ) {
      let l
      return (
        !!n[o] ||
        (e !== ve && ce(e, o)) ||
        (t !== ve && ce(t, o)) ||
        ((l = i[0]) && ce(l, o)) ||
        ce(s, o) ||
        ce(dr, o) ||
        ce(r.config.globalProperties, o)
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
  Rc = Oa()
let Oc = 0
function Mc(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || Rc,
    i = {
      uid: Oc++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Uo(!0),
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
      propsOptions: ka(s, r),
      emitsOptions: pa(s, r),
      emit: null,
      emitted: null,
      propsDefaults: ve,
      inheritAttrs: s.inheritAttrs,
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
    (i.emit = Bu.bind(null, i)),
    e.ce && e.ce(i),
    i
  )
}
let Ce = null
const Bn = () => Ce || De,
  nn = (e) => {
    ;(Ce = e), e.scope.on()
  },
  Mt = () => {
    Ce && Ce.scope.off(), (Ce = null)
  }
function ja(e) {
  return e.vnode.shapeFlag & 4
}
let On = !1
function Lc(e, t = !1) {
  On = t
  const { props: n, children: s } = e.vnode,
    r = ja(e)
  cc(e, n, r, t), hc(e, s)
  const i = r ? Nc(e, t) : void 0
  return (On = !1), i
}
function Nc(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = Bt(new Proxy(e.ctx, Ac)))
  const { setup: s } = n
  if (s) {
    const r = (e.setupContext = s.length > 1 ? Ic(e) : null)
    nn(e), on()
    const i = _t(s, e, 0, [e.props, r])
    if ((an(), Mt(), jo(i))) {
      if ((i.then(Mt, Mt), t))
        return i
          .then((o) => {
            Mi(e, o, t)
          })
          .catch((o) => {
            Sr(o, e, 0)
          })
      e.asyncDep = i
    } else Mi(e, i, t)
  } else qa(e, t)
}
function Mi(e, t, n) {
  re(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : be(t) && (e.setupState = oa(t)),
    qa(e, n)
}
let Li
function qa(e, t, n) {
  const s = e.type
  if (!e.render) {
    if (!t && Li && !s.render) {
      const r = s.template
      if (r) {
        const { isCustomElement: i, compilerOptions: o } = e.appContext.config,
          { delimiters: l, compilerOptions: a } = s,
          u = Se(Se({ isCustomElement: i, delimiters: l }, o), a)
        s.render = Li(r, u)
      }
    }
    e.render = s.render || Je
  }
  nn(e), on(), ic(e), an(), Mt()
}
function Dc(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return Ie(e, 'get', '$attrs'), t[n]
    },
  })
}
function Ic(e) {
  const t = (s) => {
    e.exposed = s || {}
  }
  let n
  return {
    get attrs() {
      return n || (n = Dc(e))
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  }
}
function Ks(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(oa(Bt(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n]
          if (n in dr) return dr[n](e)
        },
      }))
    )
}
function Bc(e) {
  return (re(e) && e.displayName) || e.name
}
function jc(e) {
  return re(e) && '__vccOpts' in e
}
const G = (e, t) => Ou(e, t, On)
function Q(e, t, n) {
  const s = arguments.length
  return s === 2
    ? be(t) && !X(t)
      ? fr(t)
        ? Ae(e, null, [t])
        : Ae(e, t)
      : Ae(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && fr(n) && (n = [n]),
      Ae(e, t, n))
}
const qc = '3.2.31',
  Fc = 'http://www.w3.org/2000/svg',
  Pt = typeof document != 'undefined' ? document : null,
  Ni = Pt && Pt.createElement('template'),
  Hc = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, s) => {
      const r = t
        ? Pt.createElementNS(Fc, e)
        : Pt.createElement(e, n ? { is: n } : void 0)
      return (
        e === 'select' &&
          s &&
          s.multiple != null &&
          r.setAttribute('multiple', s.multiple),
        r
      )
    },
    createText: (e) => Pt.createTextNode(e),
    createComment: (e) => Pt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Pt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    cloneNode(e) {
      const t = e.cloneNode(!0)
      return '_value' in e && (t._value = e._value), t
    },
    insertStaticContent(e, t, n, s, r, i) {
      const o = n ? n.previousSibling : t.lastChild
      if (r && (r === i || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === i || !(r = r.nextSibling));

        );
      else {
        Ni.innerHTML = s ? `<svg>${e}</svg>` : e
        const l = Ni.content
        if (s) {
          const a = l.firstChild
          for (; a.firstChild; ) l.appendChild(a.firstChild)
          l.removeChild(a)
        }
        t.insertBefore(l, n)
      }
      return [
        o ? o.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ]
    },
  }
function Uc(e, t, n) {
  const s = e._vtc
  s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : n
      ? e.setAttribute('class', t)
      : (e.className = t)
}
function zc(e, t, n) {
  const s = e.style,
    r = xe(n)
  if (n && !r) {
    for (const i in n) hs(s, i, n[i])
    if (t && !xe(t)) for (const i in t) n[i] == null && hs(s, i, '')
  } else {
    const i = s.display
    r ? t !== n && (s.cssText = n) : t && e.removeAttribute('style'),
      '_vod' in e && (s.display = i)
  }
}
const Di = /\s*!important$/
function hs(e, t, n) {
  if (X(n)) n.forEach((s) => hs(e, t, s))
  else if (t.startsWith('--')) e.setProperty(t, n)
  else {
    const s = Kc(e, t)
    Di.test(n)
      ? e.setProperty(Dt(s), n.replace(Di, ''), 'important')
      : (e[s] = n)
  }
}
const Ii = ['Webkit', 'Moz', 'ms'],
  Fr = {}
function Kc(e, t) {
  const n = Fr[t]
  if (n) return n
  let s = rt(t)
  if (s !== 'filter' && s in e) return (Fr[t] = s)
  s = Er(s)
  for (let r = 0; r < Ii.length; r++) {
    const i = Ii[r] + s
    if (i in e) return (Fr[t] = i)
  }
  return t
}
const Bi = 'http://www.w3.org/1999/xlink'
function Wc(e, t, n, s, r) {
  if (s && t.startsWith('xlink:'))
    n == null
      ? e.removeAttributeNS(Bi, t.slice(6, t.length))
      : e.setAttributeNS(Bi, t, n)
  else {
    const i = Fl(t)
    n == null || (i && !Do(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? '' : n)
  }
}
function Vc(e, t, n, s, r, i, o) {
  if (t === 'innerHTML' || t === 'textContent') {
    s && o(s, r, i), (e[t] = n == null ? '' : n)
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
      e[t] = Do(n)
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
let hr = Date.now,
  Fa = !1
if (typeof window != 'undefined') {
  hr() > document.createEvent('Event').timeStamp &&
    (hr = () => performance.now())
  const e = navigator.userAgent.match(/firefox\/(\d+)/i)
  Fa = !!(e && Number(e[1]) <= 53)
}
let ps = 0
const Jc = Promise.resolve(),
  Qc = () => {
    ps = 0
  },
  Yc = () => ps || (Jc.then(Qc), (ps = hr()))
function Xc(e, t, n, s) {
  e.addEventListener(t, n, s)
}
function Zc(e, t, n, s) {
  e.removeEventListener(t, n, s)
}
function Gc(e, t, n, s, r = null) {
  const i = e._vei || (e._vei = {}),
    o = i[t]
  if (s && o) o.value = s
  else {
    const [l, a] = ef(t)
    if (s) {
      const u = (i[t] = tf(s, r))
      Xc(e, l, u, a)
    } else o && (Zc(e, l, o, a), (i[t] = void 0))
  }
}
const ji = /(?:Once|Passive|Capture)$/
function ef(e) {
  let t
  if (ji.test(e)) {
    t = {}
    let n
    for (; (n = e.match(ji)); )
      (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0)
  }
  return [Dt(e.slice(2)), t]
}
function tf(e, t) {
  const n = (s) => {
    const r = s.timeStamp || hr()
    ;(Fa || r >= n.attached - 1) && Ue(nf(s, n.value), t, 5, [s])
  }
  return (n.value = e), (n.attached = Yc()), n
}
function nf(e, t) {
  if (X(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    )
  } else return t
}
const qi = /^on[a-z]/,
  rf = (e, t, n, s, r = !1, i, o, l, a) => {
    t === 'class'
      ? Uc(e, s, r)
      : t === 'style'
      ? zc(e, n, s)
      : br(t)
      ? Cs(t) || Gc(e, t, n, s, o)
      : (
          t[0] === '.'
            ? ((t = t.slice(1)), !0)
            : t[0] === '^'
            ? ((t = t.slice(1)), !1)
            : sf(e, t, s, r)
        )
      ? Vc(e, t, s, i, o, l, a)
      : (t === 'true-value'
          ? (e._trueValue = s)
          : t === 'false-value' && (e._falseValue = s),
        Wc(e, t, s, r))
  }
function sf(e, t, n, s) {
  return s
    ? !!(
        t === 'innerHTML' ||
        t === 'textContent' ||
        (t in e && qi.test(t) && re(n))
      )
    : t === 'spellcheck' ||
      t === 'draggable' ||
      t === 'form' ||
      (t === 'list' && e.tagName === 'INPUT') ||
      (t === 'type' && e.tagName === 'TEXTAREA') ||
      (qi.test(t) && xe(n))
    ? !1
    : t in e
}
const ct = 'transition',
  dn = 'animation',
  Ws = (e, { slots: t }) => Q(ya, Ua(e), t)
Ws.displayName = 'Transition'
const Ha = {
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
  of = (Ws.props = Se({}, ya.props, Ha)),
  Ct = (e, t = []) => {
    X(e) ? e.forEach((n) => n(...t)) : e && e(...t)
  },
  Fi = (e) => (e ? (X(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1)
function Ua(e) {
  const t = {}
  for (const L in e) L in Ha || (t[L] = e[L])
  if (e.css === !1) return t
  const {
      name: n = 'v',
      type: s,
      duration: r,
      enterFromClass: i = `${n}-enter-from`,
      enterActiveClass: o = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: a = i,
      appearActiveClass: u = o,
      appearToClass: c = l,
      leaveFromClass: h = `${n}-leave-from`,
      leaveActiveClass: f = `${n}-leave-active`,
      leaveToClass: p = `${n}-leave-to`,
    } = e,
    y = af(r),
    k = y && y[0],
    x = y && y[1],
    {
      onBeforeEnter: C,
      onEnter: B,
      onEnterCancelled: V,
      onLeave: K,
      onLeaveCancelled: ne,
      onBeforeAppear: se = C,
      onAppear: J = B,
      onAppearCancelled: ie = V,
    } = t,
    H = (L, N, R) => {
      $t(L, N ? c : l), $t(L, N ? u : o), R && R()
    },
    W = (L, N) => {
      $t(L, p), $t(L, f), N && N()
    },
    de = (L) => (N, R) => {
      const v = L ? J : B,
        $ = () => H(N, L, R)
      Ct(v, [N, $]),
        Hi(() => {
          $t(N, L ? a : i), it(N, L ? c : l), Fi(v) || Ui(N, s, k, $)
        })
    }
  return Se(t, {
    onBeforeEnter(L) {
      Ct(C, [L]), it(L, i), it(L, o)
    },
    onBeforeAppear(L) {
      Ct(se, [L]), it(L, a), it(L, u)
    },
    onEnter: de(!1),
    onAppear: de(!0),
    onLeave(L, N) {
      const R = () => W(L, N)
      it(L, h),
        Ka(),
        it(L, f),
        Hi(() => {
          $t(L, h), it(L, p), Fi(K) || Ui(L, s, x, R)
        }),
        Ct(K, [L, R])
    },
    onEnterCancelled(L) {
      H(L, !1), Ct(V, [L])
    },
    onAppearCancelled(L) {
      H(L, !0), Ct(ie, [L])
    },
    onLeaveCancelled(L) {
      W(L), Ct(ne, [L])
    },
  })
}
function af(e) {
  if (e == null) return null
  if (be(e)) return [Hr(e.enter), Hr(e.leave)]
  {
    const t = Hr(e)
    return [t, t]
  }
}
function Hr(e) {
  return Ho(e)
}
function it(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e._vtc || (e._vtc = new Set())).add(t)
}
function $t(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s))
  const { _vtc: n } = e
  n && (n.delete(t), n.size || (e._vtc = void 0))
}
function Hi(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let lf = 0
function Ui(e, t, n, s) {
  const r = (e._endId = ++lf),
    i = () => {
      r === e._endId && s()
    }
  if (n) return setTimeout(i, n)
  const { type: o, timeout: l, propCount: a } = za(e, t)
  if (!o) return s()
  const u = o + 'end'
  let c = 0
  const h = () => {
      e.removeEventListener(u, f), i()
    },
    f = (p) => {
      p.target === e && ++c >= a && h()
    }
  setTimeout(() => {
    c < a && h()
  }, l + 1),
    e.addEventListener(u, f)
}
function za(e, t) {
  const n = window.getComputedStyle(e),
    s = (y) => (n[y] || '').split(', '),
    r = s(ct + 'Delay'),
    i = s(ct + 'Duration'),
    o = zi(r, i),
    l = s(dn + 'Delay'),
    a = s(dn + 'Duration'),
    u = zi(l, a)
  let c = null,
    h = 0,
    f = 0
  t === ct
    ? o > 0 && ((c = ct), (h = o), (f = i.length))
    : t === dn
    ? u > 0 && ((c = dn), (h = u), (f = a.length))
    : ((h = Math.max(o, u)),
      (c = h > 0 ? (o > u ? ct : dn) : null),
      (f = c ? (c === ct ? i.length : a.length) : 0))
  const p = c === ct && /\b(transform|all)(,|$)/.test(n[ct + 'Property'])
  return { type: c, timeout: h, propCount: f, hasTransform: p }
}
function zi(e, t) {
  for (; e.length < t.length; ) e = e.concat(e)
  return Math.max(...t.map((n, s) => Ki(n) + Ki(e[s])))
}
function Ki(e) {
  return Number(e.slice(0, -1).replace(',', '.')) * 1e3
}
function Ka() {
  return document.body.offsetHeight
}
const Wa = new WeakMap(),
  Va = new WeakMap(),
  uf = {
    name: 'TransitionGroup',
    props: Se({}, of, { tag: String, moveClass: String }),
    setup(e, { slots: t }) {
      const n = Bn(),
        s = va()
      let r, i
      return (
        xa(() => {
          if (!r.length) return
          const o = e.moveClass || `${e.name || 'v'}-move`
          if (!pf(r[0].el, n.vnode.el, o)) return
          r.forEach(ff), r.forEach(df)
          const l = r.filter(hf)
          Ka(),
            l.forEach((a) => {
              const u = a.el,
                c = u.style
              it(u, o),
                (c.transform = c.webkitTransform = c.transitionDuration = '')
              const h = (u._moveCb = (f) => {
                ;(f && f.target !== u) ||
                  ((!f || /transform$/.test(f.propertyName)) &&
                    (u.removeEventListener('transitionend', h),
                    (u._moveCb = null),
                    $t(u, o)))
              })
              u.addEventListener('transitionend', h)
            })
        }),
        () => {
          const o = fe(e),
            l = Ua(o)
          let a = o.tag || Oe
          ;(r = i), (i = t.default ? Bs(t.default()) : [])
          for (let u = 0; u < i.length; u++) {
            const c = i[u]
            c.key != null && Rn(c, An(c, l, s, n))
          }
          if (r)
            for (let u = 0; u < r.length; u++) {
              const c = r[u]
              Rn(c, An(c, l, s, n)), Wa.set(c, c.el.getBoundingClientRect())
            }
          return Ae(a, null, i)
        }
      )
    },
  },
  cf = uf
function ff(e) {
  const t = e.el
  t._moveCb && t._moveCb(), t._enterCb && t._enterCb()
}
function df(e) {
  Va.set(e, e.el.getBoundingClientRect())
}
function hf(e) {
  const t = Wa.get(e),
    n = Va.get(e),
    s = t.left - n.left,
    r = t.top - n.top
  if (s || r) {
    const i = e.el.style
    return (
      (i.transform = i.webkitTransform = `translate(${s}px,${r}px)`),
      (i.transitionDuration = '0s'),
      e
    )
  }
}
function pf(e, t, n) {
  const s = e.cloneNode()
  e._vtc &&
    e._vtc.forEach((o) => {
      o.split(/\s+/).forEach((l) => l && s.classList.remove(l))
    }),
    n.split(/\s+/).forEach((o) => o && s.classList.add(o)),
    (s.style.display = 'none')
  const r = t.nodeType === 1 ? t : t.parentNode
  r.appendChild(s)
  const { hasTransform: i } = za(s)
  return r.removeChild(s), i
}
const mf = ['ctrl', 'shift', 'alt', 'meta'],
  gf = {
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
    exact: (e, t) => mf.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  Cg =
    (e, t) =>
    (n, ...s) => {
      for (let r = 0; r < t.length; r++) {
        const i = gf[t[r]]
        if (i && i(n, t)) return
      }
      return e(n, ...s)
    },
  vf = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace',
  },
  Sg = (e, t) => (n) => {
    if (!('key' in n)) return
    const s = Dt(n.key)
    if (t.some((r) => r === s || vf[r] === s)) return e(n)
  },
  $g = {
    beforeMount(e, { value: t }, { transition: n }) {
      ;(e._vod = e.style.display === 'none' ? '' : e.style.display),
        n && t ? n.beforeEnter(e) : hn(e, t)
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e)
    },
    updated(e, { value: t, oldValue: n }, { transition: s }) {
      !t != !n &&
        (s
          ? t
            ? (s.beforeEnter(e), hn(e, !0), s.enter(e))
            : s.leave(e, () => {
                hn(e, !1)
              })
          : hn(e, t))
    },
    beforeUnmount(e, { value: t }) {
      hn(e, t)
    },
  }
function hn(e, t) {
  e.style.display = t ? e._vod : 'none'
}
const yf = Se({ patchProp: rf }, Hc)
let Wi
function _f() {
  return Wi || (Wi = vc(yf))
}
const Ja = (...e) => {
  const t = _f().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (s) => {
      const r = bf(s)
      if (!r) return
      const i = t._component
      !re(i) && !i.render && !i.template && (i.template = r.innerHTML),
        (r.innerHTML = '')
      const o = n(r, !1, r instanceof SVGElement)
      return (
        r instanceof Element &&
          (r.removeAttribute('v-cloak'), r.setAttribute('data-v-app', '')),
        o
      )
    }),
    t
  )
}
function bf(e) {
  return xe(e) ? document.querySelector(e) : e
}
function Vs(e, t, n, s) {
  Object.defineProperty(e, t, { get: n, set: s, enumerable: !0 })
}
const Lt = We(!1)
let Rr
function wf(e, t) {
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
function xf(e) {
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
const Qa = 'ontouchstart' in window || window.navigator.maxTouchPoints > 0
function Ef(e) {
  ;(Rr = { is: Ee({}, e) }), delete e.mac, delete e.desktop
  const t =
    Math.min(window.innerHeight, window.innerWidth) > 414 ? 'ipad' : 'iphone'
  Object.assign(e, { mobile: !0, ios: !0, platform: t, [t]: !0 })
}
function Cf(e) {
  const t = e.toLowerCase(),
    n = xf(t),
    s = wf(t, n),
    r = {}
  s.browser &&
    ((r[s.browser] = !0),
    (r.version = s.version),
    (r.versionNumber = parseInt(s.versionNumber, 10))),
    s.platform && (r[s.platform] = !0)
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
          ? ((r.edge = !0), (s.browser = 'edge'))
          : r.crios
          ? ((r.chrome = !0), (s.browser = 'chrome'))
          : r.fxios && ((r.firefox = !0), (s.browser = 'firefox')))
      : (r.desktop = !0),
    (r.ipod || r.ipad || r.iphone) && (r.ios = !0),
    r['windows phone'] && ((r.winphone = !0), delete r['windows phone']),
    (r.chrome ||
      r.opr ||
      r.safari ||
      r.vivaldi ||
      (r.mobile === !0 && r.ios !== !0 && i !== !0)) &&
      (r.webkit = !0),
    r.edg && ((s.browser = 'edgechromium'), (r.edgeChromium = !0)),
    ((r.safari && r.blackberry) || r.bb) &&
      ((s.browser = 'blackberry'), (r.blackberry = !0)),
    r.safari && r.playbook && ((s.browser = 'playbook'), (r.playbook = !0)),
    r.opr && ((s.browser = 'opera'), (r.opera = !0)),
    r.safari && r.android && ((s.browser = 'android'), (r.android = !0)),
    r.safari && r.kindle && ((s.browser = 'kindle'), (r.kindle = !0)),
    r.safari && r.silk && ((s.browser = 'silk'), (r.silk = !0)),
    r.vivaldi && ((s.browser = 'vivaldi'), (r.vivaldi = !0)),
    (r.name = s.browser),
    (r.platform = s.platform),
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
        Qa === !0 &&
          r.mac === !0 &&
          ((r.desktop === !0 && r.safari === !0) ||
            (r.nativeMobile === !0 &&
              r.android !== !0 &&
              r.ios !== !0 &&
              r.ipad !== !0)) &&
          Ef(r)),
    r
  )
}
const Vi = navigator.userAgent || navigator.vendor || window.opera,
  Sf = { has: { touch: !1, webStorage: !1 }, within: { iframe: !1 } },
  Ve = {
    userAgent: Vi,
    is: Cf(Vi),
    has: { touch: Qa },
    within: { iframe: window.self !== window.top },
  },
  ms = {
    install(e) {
      const { $q: t } = e
      Lt.value === !0
        ? (e.onSSRHydrated.push(() => {
            ;(Lt.value = !1), Object.assign(t.platform, Ve), (Rr = void 0)
          }),
          (t.platform = It(this)))
        : (t.platform = this)
    },
  }
{
  let e
  Vs(Ve.has, 'webStorage', () => {
    if (e !== void 0) return e
    try {
      if (window.localStorage) return (e = !0), !0
    } catch {}
    return (e = !1), !1
  }),
    Ve.is.ios === !0 && window.navigator.vendor.toLowerCase().indexOf('apple'),
    Lt.value === !0 ? Object.assign(ms, Ve, Rr, Sf) : Object.assign(ms, Ve)
}
var Or = (e, t) => {
  const n = It(e)
  for (const s in e)
    Vs(
      t,
      s,
      () => n[s],
      (r) => {
        n[s] = r
      }
    )
  return t
}
const Nt = { hasPassive: !1, passiveCapture: !0, notPassiveCapture: !0 }
try {
  const e = Object.defineProperty({}, 'passive', {
    get() {
      Object.assign(Nt, {
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
function Mn() {}
function kg(e) {
  return e.button === 0
}
function $f(e) {
  return (
    e.touches && e.touches[0]
      ? (e = e.touches[0])
      : e.changedTouches && e.changedTouches[0]
      ? (e = e.changedTouches[0])
      : e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]),
    { top: e.clientY, left: e.clientX }
  )
}
function Pg(e) {
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
function Ya(e) {
  e.stopPropagation()
}
function pr(e) {
  e.cancelable !== !1 && e.preventDefault()
}
function Ft(e) {
  e.cancelable !== !1 && e.preventDefault(), e.stopPropagation()
}
function Tg(e, t) {
  if (e === void 0 || (t === !0 && e.__dragPrevented === !0)) return
  const n =
    t === !0
      ? (s) => {
          ;(s.__dragPrevented = !0),
            s.addEventListener('dragstart', pr, Nt.notPassiveCapture)
        }
      : (s) => {
          delete s.__dragPrevented,
            s.removeEventListener('dragstart', pr, Nt.notPassiveCapture)
        }
  e.querySelectorAll('a, img').forEach(n)
}
function kf(e, t, n) {
  const s = `__q_${t}_evt`
  ;(e[s] = e[s] !== void 0 ? e[s].concat(n) : n),
    n.forEach((r) => {
      r[0].addEventListener(r[1], e[r[2]], Nt[r[3]])
    })
}
function Pf(e, t) {
  const n = `__q_${t}_evt`
  e[n] !== void 0 &&
    (e[n].forEach((s) => {
      s[0].removeEventListener(s[1], e[s[2]], Nt[s[3]])
    }),
    (e[n] = void 0))
}
function Tf(e, t = 250, n) {
  let s
  function r() {
    const i = arguments,
      o = () => {
        ;(s = void 0), n !== !0 && e.apply(this, i)
      }
    clearTimeout(s),
      n === !0 && s === void 0 && e.apply(this, i),
      (s = setTimeout(o, t))
  }
  return (
    (r.cancel = () => {
      clearTimeout(s)
    }),
    r
  )
}
const Ur = ['sm', 'md', 'lg', 'xl'],
  { passive: Ji } = Nt
var Af = Or(
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
    setSizes: Mn,
    setDebounce: Mn,
    install({ $q: e, onSSRHydrated: t }) {
      if (((e.screen = this), this.__installed === !0)) {
        e.config.screen !== void 0 &&
          (e.config.screen.bodyClasses === !1
            ? document.body.classList.remove(`screen--${this.name}`)
            : this.__update(!0))
        return
      }
      const { visualViewport: n } = window,
        s = n || window,
        r = document.scrollingElement || document.documentElement,
        i =
          n === void 0 || Ve.is.mobile === !0
            ? () => [
                Math.max(window.innerWidth, r.clientWidth),
                Math.max(window.innerHeight, r.clientHeight),
              ]
            : () => [
                n.width * n.scale + window.innerWidth - r.clientWidth,
                n.height * n.scale + window.innerHeight - r.clientHeight,
              ],
        o = e.config.screen !== void 0 && e.config.screen.bodyClasses === !0
      this.__update = (h) => {
        const [f, p] = i()
        if ((p !== this.height && (this.height = p), f !== this.width))
          this.width = f
        else if (h !== !0) return
        let y = this.sizes
        ;(this.gt.xs = f >= y.sm),
          (this.gt.sm = f >= y.md),
          (this.gt.md = f >= y.lg),
          (this.gt.lg = f >= y.xl),
          (this.lt.sm = f < y.sm),
          (this.lt.md = f < y.md),
          (this.lt.lg = f < y.lg),
          (this.lt.xl = f < y.xl),
          (this.xs = this.lt.sm),
          (this.sm = this.gt.xs === !0 && this.lt.md === !0),
          (this.md = this.gt.sm === !0 && this.lt.lg === !0),
          (this.lg = this.gt.md === !0 && this.lt.xl === !0),
          (this.xl = this.gt.lg),
          (y =
            (this.xs === !0 && 'xs') ||
            (this.sm === !0 && 'sm') ||
            (this.md === !0 && 'md') ||
            (this.lg === !0 && 'lg') ||
            'xl'),
          y !== this.name &&
            (o === !0 &&
              (document.body.classList.remove(`screen--${this.name}`),
              document.body.classList.add(`screen--${y}`)),
            (this.name = y))
      }
      let l,
        a = {},
        u = 16
      ;(this.setSizes = (h) => {
        Ur.forEach((f) => {
          h[f] !== void 0 && (a[f] = h[f])
        })
      }),
        (this.setDebounce = (h) => {
          u = h
        })
      const c = () => {
        const h = getComputedStyle(document.body)
        h.getPropertyValue('--q-size-sm') &&
          Ur.forEach((f) => {
            this.sizes[f] = parseInt(h.getPropertyValue(`--q-size-${f}`), 10)
          }),
          (this.setSizes = (f) => {
            Ur.forEach((p) => {
              f[p] && (this.sizes[p] = f[p])
            }),
              this.__update(!0)
          }),
          (this.setDebounce = (f) => {
            l !== void 0 && s.removeEventListener('resize', l, Ji),
              (l = f > 0 ? Tf(this.__update, f) : this.__update),
              s.addEventListener('resize', l, Ji)
          }),
          this.setDebounce(u),
          Object.keys(a).length > 0
            ? (this.setSizes(a), (a = void 0))
            : this.__update(),
          o === !0 &&
            this.name === 'xs' &&
            document.body.classList.add('screen--xs')
      }
      Lt.value === !0 ? t.push(c) : c()
    },
  }
)
const Te = Or(
    { isActive: !1, mode: !1 },
    {
      __media: void 0,
      set(e) {
        ;(Te.mode = e),
          e === 'auto'
            ? (Te.__media === void 0 &&
                ((Te.__media = window.matchMedia(
                  '(prefers-color-scheme: dark)'
                )),
                (Te.__updateMedia = () => {
                  Te.set('auto')
                }),
                Te.__media.addListener(Te.__updateMedia)),
              (e = Te.__media.matches))
            : Te.__media !== void 0 &&
              (Te.__media.removeListener(Te.__updateMedia),
              (Te.__media = void 0)),
          (Te.isActive = e === !0),
          document.body.classList.remove(
            `body--${e === !0 ? 'light' : 'dark'}`
          ),
          document.body.classList.add(`body--${e === !0 ? 'dark' : 'light'}`)
      },
      toggle() {
        Te.set(Te.isActive === !1)
      },
      install({ $q: e, onSSRHydrated: t, ssrContext: n }) {
        const { dark: s } = e.config
        if (((e.dark = this), this.__installed === !0 && s === void 0)) return
        this.isActive = s === !0
        const r = s !== void 0 ? s : !1
        if (Lt.value === !0) {
          const i = (l) => {
              this.__fromSSR = l
            },
            o = this.set
          ;(this.set = i),
            i(r),
            t.push(() => {
              ;(this.set = o), this.set(this.__fromSSR)
            })
        } else this.set(r)
      },
    }
  ),
  Xa = () => !0
function Rf(e) {
  return typeof e == 'string' && e !== '' && e !== '/' && e !== '#/'
}
function Of(e) {
  return (
    e.startsWith('#') === !0 && (e = e.substr(1)),
    e.startsWith('/') === !1 && (e = '/' + e),
    e.endsWith('/') === !0 && (e = e.substr(0, e.length - 1)),
    '#' + e
  )
}
function Mf(e) {
  if (e.backButtonExit === !1) return () => !1
  if (e.backButtonExit === '*') return Xa
  const t = ['#/']
  return (
    Array.isArray(e.backButtonExit) === !0 &&
      t.push(...e.backButtonExit.filter(Rf).map(Of)),
    () => t.includes(window.location.hash)
  )
}
var Lf = {
    __history: [],
    add: Mn,
    remove: Mn,
    install({ $q: e }) {
      if (this.__installed === !0) return
      const { cordova: t, capacitor: n } = Ve.is
      if (t !== !0 && n !== !0) return
      const s = e.config[t === !0 ? 'cordova' : 'capacitor']
      if (
        (s !== void 0 && s.backButton === !1) ||
        (n === !0 &&
          (window.Capacitor === void 0 ||
            window.Capacitor.Plugins.App === void 0))
      )
        return
      ;(this.add = (o) => {
        o.condition === void 0 && (o.condition = Xa), this.__history.push(o)
      }),
        (this.remove = (o) => {
          const l = this.__history.indexOf(o)
          l >= 0 && this.__history.splice(l, 1)
        })
      const r = Mf(Object.assign({ backButtonExit: !0 }, s)),
        i = () => {
          if (this.__history.length) {
            const o = this.__history[this.__history.length - 1]
            o.condition() === !0 && (this.__history.pop(), o.handler())
          } else r() === !0 ? navigator.app.exitApp() : window.history.back()
        }
      t === !0
        ? document.addEventListener('deviceready', () => {
            document.addEventListener('backbutton', i, !1)
          })
        : window.Capacitor.Plugins.App.addListener('backButton', i)
    },
  },
  Qi = {
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
const gt = Or(
  { __langPack: {} },
  {
    getLocale: Yi,
    set(e = Qi, t) {
      const n = Ze(Ee({}, e), { rtl: e.rtl === !0, getLocale: Yi })
      {
        const s = document.documentElement
        s.setAttribute('dir', n.rtl === !0 ? 'rtl' : 'ltr'),
          s.setAttribute('lang', n.isoName),
          (n.set = gt.set),
          Object.assign(gt.__langPack, n),
          (gt.props = n),
          (gt.isoName = n.isoName),
          (gt.nativeName = n.nativeName)
      }
    },
    install({ $q: e, lang: t, ssrContext: n }) {
      ;(e.lang = gt.__langPack),
        this.__installed === !0
          ? t !== void 0 && this.set(t)
          : this.set(t || Qi)
    },
  }
)
function Nf(e, t, n = document.body) {
  if (typeof e != 'string') throw new TypeError('Expected a string as propName')
  if (typeof t != 'string') throw new TypeError('Expected a string as value')
  if (!(n instanceof Element)) throw new TypeError('Expected a DOM element')
  n.style.setProperty(`--q-${e}`, t)
}
let Za = !1
function Df(e) {
  Za = e.isComposing === !0
}
function If(e) {
  return (
    Za === !0 || e !== Object(e) || e.isComposing === !0 || e.qKeyEvent === !0
  )
}
function gs(e, t) {
  return If(e) === !0 ? !1 : [].concat(t).includes(e.keyCode)
}
function Bf(e) {
  if (e.ios === !0) return 'ios'
  if (e.android === !0) return 'android'
}
function jf({ is: e, has: t, within: n }, s) {
  const r = [
    e.desktop === !0 ? 'desktop' : 'mobile',
    `${t.touch === !1 ? 'no-' : ''}touch`,
  ]
  if (e.mobile === !0) {
    const i = Bf(e)
    i !== void 0 && r.push('platform-' + i)
  }
  if (e.nativeMobile === !0) {
    const i = e.nativeMobileWrapper
    r.push(i),
      r.push('native-mobile'),
      e.ios === !0 &&
        (s[i] === void 0 || s[i].iosStatusBarPadding !== !1) &&
        r.push('q-ios-padding')
  } else e.electron === !0 ? r.push('electron') : e.bex === !0 && r.push('bex')
  return n.iframe === !0 && r.push('within-iframe'), r
}
function qf() {
  const e = document.body.className
  let t = e
  Rr !== void 0 && (t = t.replace('desktop', 'platform-ios mobile')),
    Ve.has.touch === !0 && (t = t.replace('no-touch', 'touch')),
    Ve.within.iframe === !0 && (t += ' within-iframe'),
    e !== t && (document.body.className = t)
}
function Ff(e) {
  for (const t in e) Nf(t, e[t])
}
var Hf = {
    install(e) {
      if (this.__installed !== !0) {
        if (Lt.value === !0) qf()
        else {
          const { $q: t } = e
          t.config.brand !== void 0 && Ff(t.config.brand)
          const n = jf(Ve, t.config)
          document.body.classList.add.apply(document.body.classList, n)
        }
        Ve.is.ios === !0 && document.body.addEventListener('touchstart', Mn),
          window.addEventListener('keydown', Df, !0)
      }
    },
  },
  Uf = {
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
const mr = Or(
    { iconMapFn: null, __icons: {} },
    {
      set(e, t) {
        const n = Ze(Ee({}, e), { rtl: e.rtl === !0 })
        ;(n.set = mr.set), Object.assign(mr.__icons, n)
      },
      install({ $q: e, iconSet: t, ssrContext: n }) {
        e.config.iconMapFn !== void 0 && (this.iconMapFn = e.config.iconMapFn),
          (e.iconSet = this.__icons),
          Vs(
            e,
            'iconMapFn',
            () => this.iconMapFn,
            (s) => {
              this.iconMapFn = s
            }
          ),
          this.__installed === !0
            ? t !== void 0 && this.set(t)
            : this.set(t || Uf)
      },
    }
  ),
  zf = '_q_',
  Ag = '_q_l_',
  Rg = '_q_pc_',
  Og = '_q_fo_',
  gr = {}
let Ga = !1
function Kf() {
  Ga = !0
}
function Ln(e) {
  return e !== null && typeof e == 'object' && Array.isArray(e) !== !0
}
const Xi = [ms, Hf, Te, Af, Lf, gt, mr]
function Wf(e, t) {
  const n = Ja(e)
  n.config.globalProperties = t.config.globalProperties
  const i = t._context,
    { reload: s } = i,
    r = Ir(i, ['reload'])
  return Object.assign(n._context, r), n
}
function Zi(e, t) {
  t.forEach((n) => {
    n.install(e), (n.__installed = !0)
  })
}
function Vf(e, t, n) {
  ;(e.config.globalProperties.$q = n.$q),
    e.provide(zf, n.$q),
    Zi(n, Xi),
    t.components !== void 0 &&
      Object.values(t.components).forEach((s) => {
        Ln(s) === !0 && s.name !== void 0 && e.component(s.name, s)
      }),
    t.directives !== void 0 &&
      Object.values(t.directives).forEach((s) => {
        Ln(s) === !0 && s.name !== void 0 && e.directive(s.name, s)
      }),
    t.plugins !== void 0 &&
      Zi(
        n,
        Object.values(t.plugins).filter(
          (s) => typeof s.install == 'function' && Xi.includes(s) === !1
        )
      ),
    Lt.value === !0 &&
      (n.$q.onSSRHydrated = () => {
        n.onSSRHydrated.forEach((s) => {
          s()
        }),
          (n.$q.onSSRHydrated = () => {})
      })
}
var Jf = function (e, t = {}) {
    const n = { version: '2.6.5' }
    Ga === !1
      ? (t.config !== void 0 && Object.assign(gr, t.config),
        (n.config = Ee({}, gr)),
        Kf())
      : (n.config = t.config || {}),
      Vf(e, t, {
        parentApp: e,
        $q: n,
        lang: t.lang,
        iconSet: t.iconSet,
        onSSRHydrated: [],
      })
  },
  Qf = { version: '2.6.5', install: Jf, lang: gt, iconSet: mr }
function Gi(e, t = window.location.href) {
  e = e.replace(/[\[\]]/g, '\\$&')
  var n = new RegExp('[?&]' + e + '(=([^&#]*)|&|#|$)'),
    s = n.exec(t)
  return s ? (s[2] ? decodeURIComponent(s[2].replace(/\+/g, ' ')) : '') : null
}
var Yf =
    typeof globalThis != 'undefined'
      ? globalThis
      : typeof window != 'undefined'
      ? window
      : typeof global != 'undefined'
      ? global
      : typeof self != 'undefined'
      ? self
      : {},
  Js = { exports: {} },
  el = function (t, n) {
    return function () {
      for (var r = new Array(arguments.length), i = 0; i < r.length; i++)
        r[i] = arguments[i]
      return t.apply(n, r)
    }
  },
  Xf = el,
  jt = Object.prototype.toString
function Qs(e) {
  return jt.call(e) === '[object Array]'
}
function vs(e) {
  return typeof e == 'undefined'
}
function Zf(e) {
  return (
    e !== null &&
    !vs(e) &&
    e.constructor !== null &&
    !vs(e.constructor) &&
    typeof e.constructor.isBuffer == 'function' &&
    e.constructor.isBuffer(e)
  )
}
function Gf(e) {
  return jt.call(e) === '[object ArrayBuffer]'
}
function ed(e) {
  return typeof FormData != 'undefined' && e instanceof FormData
}
function td(e) {
  var t
  return (
    typeof ArrayBuffer != 'undefined' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && e.buffer instanceof ArrayBuffer),
    t
  )
}
function nd(e) {
  return typeof e == 'string'
}
function rd(e) {
  return typeof e == 'number'
}
function tl(e) {
  return e !== null && typeof e == 'object'
}
function nr(e) {
  if (jt.call(e) !== '[object Object]') return !1
  var t = Object.getPrototypeOf(e)
  return t === null || t === Object.prototype
}
function sd(e) {
  return jt.call(e) === '[object Date]'
}
function id(e) {
  return jt.call(e) === '[object File]'
}
function od(e) {
  return jt.call(e) === '[object Blob]'
}
function nl(e) {
  return jt.call(e) === '[object Function]'
}
function ad(e) {
  return tl(e) && nl(e.pipe)
}
function ld(e) {
  return typeof URLSearchParams != 'undefined' && e instanceof URLSearchParams
}
function ud(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, '')
}
function cd() {
  return typeof navigator != 'undefined' &&
    (navigator.product === 'ReactNative' ||
      navigator.product === 'NativeScript' ||
      navigator.product === 'NS')
    ? !1
    : typeof window != 'undefined' && typeof document != 'undefined'
}
function Ys(e, t) {
  if (!(e === null || typeof e == 'undefined'))
    if ((typeof e != 'object' && (e = [e]), Qs(e)))
      for (var n = 0, s = e.length; n < s; n++) t.call(null, e[n], n, e)
    else
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.call(null, e[r], r, e)
}
function ys() {
  var e = {}
  function t(r, i) {
    nr(e[i]) && nr(r)
      ? (e[i] = ys(e[i], r))
      : nr(r)
      ? (e[i] = ys({}, r))
      : Qs(r)
      ? (e[i] = r.slice())
      : (e[i] = r)
  }
  for (var n = 0, s = arguments.length; n < s; n++) Ys(arguments[n], t)
  return e
}
function fd(e, t, n) {
  return (
    Ys(t, function (r, i) {
      n && typeof r == 'function' ? (e[i] = Xf(r, n)) : (e[i] = r)
    }),
    e
  )
}
function dd(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e
}
var Be = {
    isArray: Qs,
    isArrayBuffer: Gf,
    isBuffer: Zf,
    isFormData: ed,
    isArrayBufferView: td,
    isString: nd,
    isNumber: rd,
    isObject: tl,
    isPlainObject: nr,
    isUndefined: vs,
    isDate: sd,
    isFile: id,
    isBlob: od,
    isFunction: nl,
    isStream: ad,
    isURLSearchParams: ld,
    isStandardBrowserEnv: cd,
    forEach: Ys,
    merge: ys,
    extend: fd,
    trim: ud,
    stripBOM: dd,
  },
  Ht = Be
function eo(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
var rl = function (t, n, s) {
    if (!n) return t
    var r
    if (s) r = s(n)
    else if (Ht.isURLSearchParams(n)) r = n.toString()
    else {
      var i = []
      Ht.forEach(n, function (a, u) {
        a === null ||
          typeof a == 'undefined' ||
          (Ht.isArray(a) ? (u = u + '[]') : (a = [a]),
          Ht.forEach(a, function (h) {
            Ht.isDate(h)
              ? (h = h.toISOString())
              : Ht.isObject(h) && (h = JSON.stringify(h)),
              i.push(eo(u) + '=' + eo(h))
          }))
      }),
        (r = i.join('&'))
    }
    if (r) {
      var o = t.indexOf('#')
      o !== -1 && (t = t.slice(0, o)),
        (t += (t.indexOf('?') === -1 ? '?' : '&') + r)
    }
    return t
  },
  hd = Be
function Mr() {
  this.handlers = []
}
Mr.prototype.use = function (t, n, s) {
  return (
    this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: s ? s.synchronous : !1,
      runWhen: s ? s.runWhen : null,
    }),
    this.handlers.length - 1
  )
}
Mr.prototype.eject = function (t) {
  this.handlers[t] && (this.handlers[t] = null)
}
Mr.prototype.forEach = function (t) {
  hd.forEach(this.handlers, function (s) {
    s !== null && t(s)
  })
}
var pd = Mr,
  md = Be,
  gd = function (t, n) {
    md.forEach(t, function (r, i) {
      i !== n &&
        i.toUpperCase() === n.toUpperCase() &&
        ((t[n] = r), delete t[i])
    })
  },
  sl = function (t, n, s, r, i) {
    return (
      (t.config = n),
      s && (t.code = s),
      (t.request = r),
      (t.response = i),
      (t.isAxiosError = !0),
      (t.toJSON = function () {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code,
        }
      }),
      t
    )
  },
  vd = sl,
  il = function (t, n, s, r, i) {
    var o = new Error(t)
    return vd(o, n, s, r, i)
  },
  yd = il,
  _d = function (t, n, s) {
    var r = s.config.validateStatus
    !s.status || !r || r(s.status)
      ? t(s)
      : n(
          yd(
            'Request failed with status code ' + s.status,
            s.config,
            null,
            s.request,
            s
          )
        )
  },
  Jn = Be,
  bd = Jn.isStandardBrowserEnv()
    ? (function () {
        return {
          write: function (n, s, r, i, o, l) {
            var a = []
            a.push(n + '=' + encodeURIComponent(s)),
              Jn.isNumber(r) && a.push('expires=' + new Date(r).toGMTString()),
              Jn.isString(i) && a.push('path=' + i),
              Jn.isString(o) && a.push('domain=' + o),
              l === !0 && a.push('secure'),
              (document.cookie = a.join('; '))
          },
          read: function (n) {
            var s = document.cookie.match(
              new RegExp('(^|;\\s*)(' + n + ')=([^;]*)')
            )
            return s ? decodeURIComponent(s[3]) : null
          },
          remove: function (n) {
            this.write(n, '', Date.now() - 864e5)
          },
        }
      })()
    : (function () {
        return {
          write: function () {},
          read: function () {
            return null
          },
          remove: function () {},
        }
      })(),
  wd = function (t) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
  },
  xd = function (t, n) {
    return n ? t.replace(/\/+$/, '') + '/' + n.replace(/^\/+/, '') : t
  },
  Ed = wd,
  Cd = xd,
  Sd = function (t, n) {
    return t && !Ed(n) ? Cd(t, n) : n
  },
  zr = Be,
  $d = [
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ],
  kd = function (t) {
    var n = {},
      s,
      r,
      i
    return (
      t &&
        zr.forEach(
          t.split(`
`),
          function (l) {
            if (
              ((i = l.indexOf(':')),
              (s = zr.trim(l.substr(0, i)).toLowerCase()),
              (r = zr.trim(l.substr(i + 1))),
              s)
            ) {
              if (n[s] && $d.indexOf(s) >= 0) return
              s === 'set-cookie'
                ? (n[s] = (n[s] ? n[s] : []).concat([r]))
                : (n[s] = n[s] ? n[s] + ', ' + r : r)
            }
          }
        ),
      n
    )
  },
  to = Be,
  Pd = to.isStandardBrowserEnv()
    ? (function () {
        var t = /(msie|trident)/i.test(navigator.userAgent),
          n = document.createElement('a'),
          s
        function r(i) {
          var o = i
          return (
            t && (n.setAttribute('href', o), (o = n.href)),
            n.setAttribute('href', o),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, '') : '',
              hash: n.hash ? n.hash.replace(/^#/, '') : '',
              hostname: n.hostname,
              port: n.port,
              pathname:
                n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname,
            }
          )
        }
        return (
          (s = r(window.location.href)),
          function (o) {
            var l = to.isString(o) ? r(o) : o
            return l.protocol === s.protocol && l.host === s.host
          }
        )
      })()
    : (function () {
        return function () {
          return !0
        }
      })(),
  Qn = Be,
  Td = _d,
  Ad = bd,
  Rd = rl,
  Od = Sd,
  Md = kd,
  Ld = Pd,
  Kr = il,
  no = function (t) {
    return new Promise(function (s, r) {
      var i = t.data,
        o = t.headers,
        l = t.responseType
      Qn.isFormData(i) && delete o['Content-Type']
      var a = new XMLHttpRequest()
      if (t.auth) {
        var u = t.auth.username || '',
          c = t.auth.password
            ? unescape(encodeURIComponent(t.auth.password))
            : ''
        o.Authorization = 'Basic ' + btoa(u + ':' + c)
      }
      var h = Od(t.baseURL, t.url)
      a.open(t.method.toUpperCase(), Rd(h, t.params, t.paramsSerializer), !0),
        (a.timeout = t.timeout)
      function f() {
        if (!!a) {
          var y =
              'getAllResponseHeaders' in a
                ? Md(a.getAllResponseHeaders())
                : null,
            k =
              !l || l === 'text' || l === 'json' ? a.responseText : a.response,
            x = {
              data: k,
              status: a.status,
              statusText: a.statusText,
              headers: y,
              config: t,
              request: a,
            }
          Td(s, r, x), (a = null)
        }
      }
      if (
        ('onloadend' in a
          ? (a.onloadend = f)
          : (a.onreadystatechange = function () {
              !a ||
                a.readyState !== 4 ||
                (a.status === 0 &&
                  !(a.responseURL && a.responseURL.indexOf('file:') === 0)) ||
                setTimeout(f)
            }),
        (a.onabort = function () {
          !a || (r(Kr('Request aborted', t, 'ECONNABORTED', a)), (a = null))
        }),
        (a.onerror = function () {
          r(Kr('Network Error', t, null, a)), (a = null)
        }),
        (a.ontimeout = function () {
          var k = 'timeout of ' + t.timeout + 'ms exceeded'
          t.timeoutErrorMessage && (k = t.timeoutErrorMessage),
            r(
              Kr(
                k,
                t,
                t.transitional && t.transitional.clarifyTimeoutError
                  ? 'ETIMEDOUT'
                  : 'ECONNABORTED',
                a
              )
            ),
            (a = null)
        }),
        Qn.isStandardBrowserEnv())
      ) {
        var p =
          (t.withCredentials || Ld(h)) && t.xsrfCookieName
            ? Ad.read(t.xsrfCookieName)
            : void 0
        p && (o[t.xsrfHeaderName] = p)
      }
      'setRequestHeader' in a &&
        Qn.forEach(o, function (k, x) {
          typeof i == 'undefined' && x.toLowerCase() === 'content-type'
            ? delete o[x]
            : a.setRequestHeader(x, k)
        }),
        Qn.isUndefined(t.withCredentials) ||
          (a.withCredentials = !!t.withCredentials),
        l && l !== 'json' && (a.responseType = t.responseType),
        typeof t.onDownloadProgress == 'function' &&
          a.addEventListener('progress', t.onDownloadProgress),
        typeof t.onUploadProgress == 'function' &&
          a.upload &&
          a.upload.addEventListener('progress', t.onUploadProgress),
        t.cancelToken &&
          t.cancelToken.promise.then(function (k) {
            !a || (a.abort(), r(k), (a = null))
          }),
        i || (i = null),
        a.send(i)
    })
  },
  ke = Be,
  ro = gd,
  Nd = sl,
  Dd = { 'Content-Type': 'application/x-www-form-urlencoded' }
function so(e, t) {
  !ke.isUndefined(e) &&
    ke.isUndefined(e['Content-Type']) &&
    (e['Content-Type'] = t)
}
function Id() {
  var e
  return (
    (typeof XMLHttpRequest != 'undefined' ||
      (typeof process != 'undefined' &&
        Object.prototype.toString.call(process) === '[object process]')) &&
      (e = no),
    e
  )
}
function Bd(e, t, n) {
  if (ke.isString(e))
    try {
      return (t || JSON.parse)(e), ke.trim(e)
    } catch (s) {
      if (s.name !== 'SyntaxError') throw s
    }
  return (n || JSON.stringify)(e)
}
var Lr = {
  transitional: {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  adapter: Id(),
  transformRequest: [
    function (t, n) {
      return (
        ro(n, 'Accept'),
        ro(n, 'Content-Type'),
        ke.isFormData(t) ||
        ke.isArrayBuffer(t) ||
        ke.isBuffer(t) ||
        ke.isStream(t) ||
        ke.isFile(t) ||
        ke.isBlob(t)
          ? t
          : ke.isArrayBufferView(t)
          ? t.buffer
          : ke.isURLSearchParams(t)
          ? (so(n, 'application/x-www-form-urlencoded;charset=utf-8'),
            t.toString())
          : ke.isObject(t) || (n && n['Content-Type'] === 'application/json')
          ? (so(n, 'application/json'), Bd(t))
          : t
      )
    },
  ],
  transformResponse: [
    function (t) {
      var n = this.transitional,
        s = n && n.silentJSONParsing,
        r = n && n.forcedJSONParsing,
        i = !s && this.responseType === 'json'
      if (i || (r && ke.isString(t) && t.length))
        try {
          return JSON.parse(t)
        } catch (o) {
          if (i)
            throw o.name === 'SyntaxError' ? Nd(o, this, 'E_JSON_PARSE') : o
        }
      return t
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  validateStatus: function (t) {
    return t >= 200 && t < 300
  },
}
Lr.headers = { common: { Accept: 'application/json, text/plain, */*' } }
ke.forEach(['delete', 'get', 'head'], function (t) {
  Lr.headers[t] = {}
})
ke.forEach(['post', 'put', 'patch'], function (t) {
  Lr.headers[t] = ke.merge(Dd)
})
var Xs = Lr,
  jd = Be,
  qd = Xs,
  Fd = function (t, n, s) {
    var r = this || qd
    return (
      jd.forEach(s, function (o) {
        t = o.call(r, t, n)
      }),
      t
    )
  },
  ol = function (t) {
    return !!(t && t.__CANCEL__)
  },
  io = Be,
  Wr = Fd,
  Hd = ol,
  Ud = Xs
function Vr(e) {
  e.cancelToken && e.cancelToken.throwIfRequested()
}
var zd = function (t) {
    Vr(t),
      (t.headers = t.headers || {}),
      (t.data = Wr.call(t, t.data, t.headers, t.transformRequest)),
      (t.headers = io.merge(
        t.headers.common || {},
        t.headers[t.method] || {},
        t.headers
      )),
      io.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        function (r) {
          delete t.headers[r]
        }
      )
    var n = t.adapter || Ud.adapter
    return n(t).then(
      function (r) {
        return (
          Vr(t),
          (r.data = Wr.call(t, r.data, r.headers, t.transformResponse)),
          r
        )
      },
      function (r) {
        return (
          Hd(r) ||
            (Vr(t),
            r &&
              r.response &&
              (r.response.data = Wr.call(
                t,
                r.response.data,
                r.response.headers,
                t.transformResponse
              ))),
          Promise.reject(r)
        )
      }
    )
  },
  Pe = Be,
  al = function (t, n) {
    n = n || {}
    var s = {},
      r = ['url', 'method', 'data'],
      i = ['headers', 'auth', 'proxy', 'params'],
      o = [
        'baseURL',
        'transformRequest',
        'transformResponse',
        'paramsSerializer',
        'timeout',
        'timeoutMessage',
        'withCredentials',
        'adapter',
        'responseType',
        'xsrfCookieName',
        'xsrfHeaderName',
        'onUploadProgress',
        'onDownloadProgress',
        'decompress',
        'maxContentLength',
        'maxBodyLength',
        'maxRedirects',
        'transport',
        'httpAgent',
        'httpsAgent',
        'cancelToken',
        'socketPath',
        'responseEncoding',
      ],
      l = ['validateStatus']
    function a(f, p) {
      return Pe.isPlainObject(f) && Pe.isPlainObject(p)
        ? Pe.merge(f, p)
        : Pe.isPlainObject(p)
        ? Pe.merge({}, p)
        : Pe.isArray(p)
        ? p.slice()
        : p
    }
    function u(f) {
      Pe.isUndefined(n[f])
        ? Pe.isUndefined(t[f]) || (s[f] = a(void 0, t[f]))
        : (s[f] = a(t[f], n[f]))
    }
    Pe.forEach(r, function (p) {
      Pe.isUndefined(n[p]) || (s[p] = a(void 0, n[p]))
    }),
      Pe.forEach(i, u),
      Pe.forEach(o, function (p) {
        Pe.isUndefined(n[p])
          ? Pe.isUndefined(t[p]) || (s[p] = a(void 0, t[p]))
          : (s[p] = a(void 0, n[p]))
      }),
      Pe.forEach(l, function (p) {
        p in n ? (s[p] = a(t[p], n[p])) : p in t && (s[p] = a(void 0, t[p]))
      })
    var c = r.concat(i).concat(o).concat(l),
      h = Object.keys(t)
        .concat(Object.keys(n))
        .filter(function (p) {
          return c.indexOf(p) === -1
        })
    return Pe.forEach(h, u), s
  }
const Kd = 'axios@^0.21.1',
  Wd = 'axios@0.21.4',
  Vd = !1,
  Jd =
    'sha512-ut5vewkiu8jjGBdqpM44XxjuCjq9LAKeHVmoVfHVzy8eHgxxq8SbAVQNovDA8mVi05kP0Ea/n/UzcSHcTJQfNg==',
  Qd = '/axios',
  Yd = {},
  Xd = {
    type: 'range',
    registry: !0,
    raw: 'axios@^0.21.1',
    name: 'axios',
    escapedName: 'axios',
    rawSpec: '^0.21.1',
    saveSpec: null,
    fetchSpec: '^0.21.1',
  },
  Zd = ['/'],
  Gd = 'https://registry.npmmirror.com/axios/-/axios-0.21.4.tgz',
  eh = 'c67b90dc0568e5c1cf2b0b858c43ba28e2eda575',
  th = 'axios@^0.21.1',
  nh = '/Volumes/data/workplace/vps/metis/Token_front_v02_A/afan-front-web',
  rh = { name: 'Matt Zabriskie' },
  sh = { './lib/adapters/http.js': './lib/adapters/xhr.js' },
  ih = { url: 'https://github.com/axios/axios/issues' },
  oh = !1,
  ah = [{ path: './dist/axios.min.js', threshold: '5kB' }],
  lh = { 'follow-redirects': '^1.14.0' },
  uh = !1,
  ch = 'Promise based HTTP client for the browser and node.js',
  fh = {
    coveralls: '^3.0.0',
    'es6-promise': '^4.2.4',
    grunt: '^1.3.0',
    'grunt-banner': '^0.6.0',
    'grunt-cli': '^1.2.0',
    'grunt-contrib-clean': '^1.1.0',
    'grunt-contrib-watch': '^1.0.0',
    'grunt-eslint': '^23.0.0',
    'grunt-karma': '^4.0.0',
    'grunt-mocha-test': '^0.13.3',
    'grunt-ts': '^6.0.0-beta.19',
    'grunt-webpack': '^4.0.2',
    'istanbul-instrumenter-loader': '^1.0.0',
    'jasmine-core': '^2.4.1',
    karma: '^6.3.2',
    'karma-chrome-launcher': '^3.1.0',
    'karma-firefox-launcher': '^2.1.0',
    'karma-jasmine': '^1.1.1',
    'karma-jasmine-ajax': '^0.1.13',
    'karma-safari-launcher': '^1.0.0',
    'karma-sauce-launcher': '^4.3.6',
    'karma-sinon': '^1.0.5',
    'karma-sourcemap-loader': '^0.3.8',
    'karma-webpack': '^4.0.2',
    'load-grunt-tasks': '^3.5.2',
    minimist: '^1.2.0',
    mocha: '^8.2.1',
    sinon: '^4.5.0',
    'terser-webpack-plugin': '^4.2.3',
    typescript: '^4.0.5',
    'url-search-params': '^0.10.0',
    webpack: '^4.44.2',
    'webpack-dev-server': '^3.11.0',
  },
  dh = 'https://axios-http.com',
  hh = 'dist/axios.min.js',
  ph = ['xhr', 'http', 'ajax', 'promise', 'node'],
  mh = 'MIT',
  gh = 'index.js',
  vh = 'axios',
  yh = { type: 'git', url: 'git+https://github.com/axios/axios.git' },
  _h = {
    build: 'NODE_ENV=production grunt build',
    coveralls:
      'cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js',
    examples: 'node ./examples/server.js',
    fix: 'eslint --fix lib/**/*.js',
    postversion: 'git push && git push --tags',
    preversion: 'npm test',
    start: 'node ./sandbox/server.js',
    test: 'grunt test',
    version:
      'npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json',
  },
  bh = './index.d.ts',
  wh = 'dist/axios.min.js',
  xh = '0.21.4'
var Eh = {
    _from: Kd,
    _id: Wd,
    _inBundle: Vd,
    _integrity: Jd,
    _location: Qd,
    _phantomChildren: Yd,
    _requested: Xd,
    _requiredBy: Zd,
    _resolved: Gd,
    _shasum: eh,
    _spec: th,
    _where: nh,
    author: rh,
    browser: sh,
    bugs: ih,
    bundleDependencies: oh,
    bundlesize: ah,
    dependencies: lh,
    deprecated: uh,
    description: ch,
    devDependencies: fh,
    homepage: dh,
    jsdelivr: hh,
    keywords: ph,
    license: mh,
    main: gh,
    name: vh,
    repository: yh,
    scripts: _h,
    typings: bh,
    unpkg: wh,
    version: xh,
  },
  ll = Eh,
  Zs = {}
;['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  function (e, t) {
    Zs[e] = function (s) {
      return typeof s === e || 'a' + (t < 1 ? 'n ' : ' ') + e
    }
  }
)
var oo = {},
  Ch = ll.version.split('.')
function ul(e, t) {
  for (var n = t ? t.split('.') : Ch, s = e.split('.'), r = 0; r < 3; r++) {
    if (n[r] > s[r]) return !0
    if (n[r] < s[r]) return !1
  }
  return !1
}
Zs.transitional = function (t, n, s) {
  var r = n && ul(n)
  function i(o, l) {
    return (
      '[Axios v' +
      ll.version +
      "] Transitional option '" +
      o +
      "'" +
      l +
      (s ? '. ' + s : '')
    )
  }
  return function (o, l, a) {
    if (t === !1) throw new Error(i(l, ' has been removed in ' + n))
    return (
      r &&
        !oo[l] &&
        ((oo[l] = !0),
        console.warn(
          i(
            l,
            ' has been deprecated since v' +
              n +
              ' and will be removed in the near future'
          )
        )),
      t ? t(o, l, a) : !0
    )
  }
}
function Sh(e, t, n) {
  if (typeof e != 'object') throw new TypeError('options must be an object')
  for (var s = Object.keys(e), r = s.length; r-- > 0; ) {
    var i = s[r],
      o = t[i]
    if (o) {
      var l = e[i],
        a = l === void 0 || o(l, i, e)
      if (a !== !0) throw new TypeError('option ' + i + ' must be ' + a)
      continue
    }
    if (n !== !0) throw Error('Unknown option ' + i)
  }
}
var $h = { isOlderVersion: ul, assertOptions: Sh, validators: Zs },
  cl = Be,
  kh = rl,
  ao = pd,
  lo = zd,
  Nr = al,
  fl = $h,
  Ut = fl.validators
function jn(e) {
  ;(this.defaults = e),
    (this.interceptors = { request: new ao(), response: new ao() })
}
jn.prototype.request = function (t) {
  typeof t == 'string'
    ? ((t = arguments[1] || {}), (t.url = arguments[0]))
    : (t = t || {}),
    (t = Nr(this.defaults, t)),
    t.method
      ? (t.method = t.method.toLowerCase())
      : this.defaults.method
      ? (t.method = this.defaults.method.toLowerCase())
      : (t.method = 'get')
  var n = t.transitional
  n !== void 0 &&
    fl.assertOptions(
      n,
      {
        silentJSONParsing: Ut.transitional(Ut.boolean, '1.0.0'),
        forcedJSONParsing: Ut.transitional(Ut.boolean, '1.0.0'),
        clarifyTimeoutError: Ut.transitional(Ut.boolean, '1.0.0'),
      },
      !1
    )
  var s = [],
    r = !0
  this.interceptors.request.forEach(function (f) {
    ;(typeof f.runWhen == 'function' && f.runWhen(t) === !1) ||
      ((r = r && f.synchronous), s.unshift(f.fulfilled, f.rejected))
  })
  var i = []
  this.interceptors.response.forEach(function (f) {
    i.push(f.fulfilled, f.rejected)
  })
  var o
  if (!r) {
    var l = [lo, void 0]
    for (
      Array.prototype.unshift.apply(l, s),
        l = l.concat(i),
        o = Promise.resolve(t);
      l.length;

    )
      o = o.then(l.shift(), l.shift())
    return o
  }
  for (var a = t; s.length; ) {
    var u = s.shift(),
      c = s.shift()
    try {
      a = u(a)
    } catch (h) {
      c(h)
      break
    }
  }
  try {
    o = lo(a)
  } catch (h) {
    return Promise.reject(h)
  }
  for (; i.length; ) o = o.then(i.shift(), i.shift())
  return o
}
jn.prototype.getUri = function (t) {
  return (
    (t = Nr(this.defaults, t)),
    kh(t.url, t.params, t.paramsSerializer).replace(/^\?/, '')
  )
}
cl.forEach(['delete', 'get', 'head', 'options'], function (t) {
  jn.prototype[t] = function (n, s) {
    return this.request(
      Nr(s || {}, { method: t, url: n, data: (s || {}).data })
    )
  }
})
cl.forEach(['post', 'put', 'patch'], function (t) {
  jn.prototype[t] = function (n, s, r) {
    return this.request(Nr(r || {}, { method: t, url: n, data: s }))
  }
})
var Ph = jn
function Gs(e) {
  this.message = e
}
Gs.prototype.toString = function () {
  return 'Cancel' + (this.message ? ': ' + this.message : '')
}
Gs.prototype.__CANCEL__ = !0
var dl = Gs,
  Th = dl
function vr(e) {
  if (typeof e != 'function')
    throw new TypeError('executor must be a function.')
  var t
  this.promise = new Promise(function (r) {
    t = r
  })
  var n = this
  e(function (r) {
    n.reason || ((n.reason = new Th(r)), t(n.reason))
  })
}
vr.prototype.throwIfRequested = function () {
  if (this.reason) throw this.reason
}
vr.source = function () {
  var t,
    n = new vr(function (r) {
      t = r
    })
  return { token: n, cancel: t }
}
var Ah = vr,
  Rh = function (t) {
    return function (s) {
      return t.apply(null, s)
    }
  },
  Oh = function (t) {
    return typeof t == 'object' && t.isAxiosError === !0
  },
  uo = Be,
  Mh = el,
  rr = Ph,
  Lh = al,
  Nh = Xs
function hl(e) {
  var t = new rr(e),
    n = Mh(rr.prototype.request, t)
  return uo.extend(n, rr.prototype, t), uo.extend(n, t), n
}
var Ye = hl(Nh)
Ye.Axios = rr
Ye.create = function (t) {
  return hl(Lh(Ye.defaults, t))
}
Ye.Cancel = dl
Ye.CancelToken = Ah
Ye.isCancel = ol
Ye.all = function (t) {
  return Promise.all(t)
}
Ye.spread = Rh
Ye.isAxiosError = Oh
Js.exports = Ye
Js.exports.default = Ye
var ei = Js.exports
function pl(e) {
  const t = ei.create({
    baseURL: 'https://devapi.qweather.com/v7/weather/',
    timeout: 15e3,
  })
  return (
    t.interceptors.request.use(
      (n) => ((n.params.key = '893d1c02fdcc46879165294141c41f22'), n)
    ),
    t(e)
  )
}
function Dh(e) {
  const t = ei.create({
    baseURL: 'https://geoapi.heweather.net/v2/city/lookup',
    timeout: 15e3,
  })
  return (
    t.interceptors.request.use(
      (n) => (
        (n.params.mode = 'fuzzy'),
        (n.params.range = 'cn'),
        (n.params.key = '893d1c02fdcc46879165294141c41f22'),
        n
      )
    ),
    t(e)
  )
}
function Ih(e) {
  return pl({ url: '/now', params: { location: e } })
}
function Bh(e) {
  return pl({ url: '/7d', params: { location: e } })
}
function jh(e) {
  return Dh({ params: { location: e } })
}
var ml = { exports: {} }
;(function (e, t) {
  ;(function (n, s) {
    e.exports = s()
  })(Yf, function () {
    var n = 1e3,
      s = 6e4,
      r = 36e5,
      i = 'millisecond',
      o = 'second',
      l = 'minute',
      a = 'hour',
      u = 'day',
      c = 'week',
      h = 'month',
      f = 'quarter',
      p = 'year',
      y = 'date',
      k = 'Invalid Date',
      x =
        /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      C =
        /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      B = {
        name: 'en',
        weekdays:
          'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        months:
          'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_'
          ),
      },
      V = function (N, R, v) {
        var $ = String(N)
        return !$ || $.length >= R
          ? N
          : '' + Array(R + 1 - $.length).join(v) + N
      },
      K = {
        s: V,
        z: function (N) {
          var R = -N.utcOffset(),
            v = Math.abs(R),
            $ = Math.floor(v / 60),
            E = v % 60
          return (R <= 0 ? '+' : '-') + V($, 2, '0') + ':' + V(E, 2, '0')
        },
        m: function N(R, v) {
          if (R.date() < v.date()) return -N(v, R)
          var $ = 12 * (v.year() - R.year()) + (v.month() - R.month()),
            E = R.clone().add($, h),
            D = v - E < 0,
            F = R.clone().add($ + (D ? -1 : 1), h)
          return +(-($ + (v - E) / (D ? E - F : F - E)) || 0)
        },
        a: function (N) {
          return N < 0 ? Math.ceil(N) || 0 : Math.floor(N)
        },
        p: function (N) {
          return (
            { M: h, y: p, w: c, d: u, D: y, h: a, m: l, s: o, ms: i, Q: f }[
              N
            ] ||
            String(N || '')
              .toLowerCase()
              .replace(/s$/, '')
          )
        },
        u: function (N) {
          return N === void 0
        },
      },
      ne = 'en',
      se = {}
    se[ne] = B
    var J = function (N) {
        return N instanceof de
      },
      ie = function N(R, v, $) {
        var E
        if (!R) return ne
        if (typeof R == 'string') {
          var D = R.toLowerCase()
          se[D] && (E = D), v && ((se[D] = v), (E = D))
          var F = R.split('-')
          if (!E && F.length > 1) return N(F[0])
        } else {
          var oe = R.name
          ;(se[oe] = R), (E = oe)
        }
        return !$ && E && (ne = E), E || (!$ && ne)
      },
      H = function (N, R) {
        if (J(N)) return N.clone()
        var v = typeof R == 'object' ? R : {}
        return (v.date = N), (v.args = arguments), new de(v)
      },
      W = K
    ;(W.l = ie),
      (W.i = J),
      (W.w = function (N, R) {
        return H(N, { locale: R.$L, utc: R.$u, x: R.$x, $offset: R.$offset })
      })
    var de = (function () {
        function N(v) {
          ;(this.$L = ie(v.locale, null, !0)), this.parse(v)
        }
        var R = N.prototype
        return (
          (R.parse = function (v) {
            ;(this.$d = (function ($) {
              var E = $.date,
                D = $.utc
              if (E === null) return new Date(NaN)
              if (W.u(E)) return new Date()
              if (E instanceof Date) return new Date(E)
              if (typeof E == 'string' && !/Z$/i.test(E)) {
                var F = E.match(x)
                if (F) {
                  var oe = F[2] - 1 || 0,
                    he = (F[7] || '0').substring(0, 3)
                  return D
                    ? new Date(
                        Date.UTC(
                          F[1],
                          oe,
                          F[3] || 1,
                          F[4] || 0,
                          F[5] || 0,
                          F[6] || 0,
                          he
                        )
                      )
                    : new Date(
                        F[1],
                        oe,
                        F[3] || 1,
                        F[4] || 0,
                        F[5] || 0,
                        F[6] || 0,
                        he
                      )
                }
              }
              return new Date(E)
            })(v)),
              (this.$x = v.x || {}),
              this.init()
          }),
          (R.init = function () {
            var v = this.$d
            ;(this.$y = v.getFullYear()),
              (this.$M = v.getMonth()),
              (this.$D = v.getDate()),
              (this.$W = v.getDay()),
              (this.$H = v.getHours()),
              (this.$m = v.getMinutes()),
              (this.$s = v.getSeconds()),
              (this.$ms = v.getMilliseconds())
          }),
          (R.$utils = function () {
            return W
          }),
          (R.isValid = function () {
            return this.$d.toString() !== k
          }),
          (R.isSame = function (v, $) {
            var E = H(v)
            return this.startOf($) <= E && E <= this.endOf($)
          }),
          (R.isAfter = function (v, $) {
            return H(v) < this.startOf($)
          }),
          (R.isBefore = function (v, $) {
            return this.endOf($) < H(v)
          }),
          (R.$g = function (v, $, E) {
            return W.u(v) ? this[$] : this.set(E, v)
          }),
          (R.unix = function () {
            return Math.floor(this.valueOf() / 1e3)
          }),
          (R.valueOf = function () {
            return this.$d.getTime()
          }),
          (R.startOf = function (v, $) {
            var E = this,
              D = !!W.u($) || $,
              F = W.p(v),
              oe = function (j, ee) {
                var ae = W.w(
                  E.$u ? Date.UTC(E.$y, ee, j) : new Date(E.$y, ee, j),
                  E
                )
                return D ? ae : ae.endOf(u)
              },
              he = function (j, ee) {
                return W.w(
                  E.toDate()[j].apply(
                    E.toDate('s'),
                    (D ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ee)
                  ),
                  E
                )
              },
              le = this.$W,
              pe = this.$M,
              je = this.$D,
              _ = 'set' + (this.$u ? 'UTC' : '')
            switch (F) {
              case p:
                return D ? oe(1, 0) : oe(31, 11)
              case h:
                return D ? oe(1, pe) : oe(0, pe + 1)
              case c:
                var I = this.$locale().weekStart || 0,
                  T = (le < I ? le + 7 : le) - I
                return oe(D ? je - T : je + (6 - T), pe)
              case u:
              case y:
                return he(_ + 'Hours', 0)
              case a:
                return he(_ + 'Minutes', 1)
              case l:
                return he(_ + 'Seconds', 2)
              case o:
                return he(_ + 'Milliseconds', 3)
              default:
                return this.clone()
            }
          }),
          (R.endOf = function (v) {
            return this.startOf(v, !1)
          }),
          (R.$set = function (v, $) {
            var E,
              D = W.p(v),
              F = 'set' + (this.$u ? 'UTC' : ''),
              oe = ((E = {}),
              (E[u] = F + 'Date'),
              (E[y] = F + 'Date'),
              (E[h] = F + 'Month'),
              (E[p] = F + 'FullYear'),
              (E[a] = F + 'Hours'),
              (E[l] = F + 'Minutes'),
              (E[o] = F + 'Seconds'),
              (E[i] = F + 'Milliseconds'),
              E)[D],
              he = D === u ? this.$D + ($ - this.$W) : $
            if (D === h || D === p) {
              var le = this.clone().set(y, 1)
              le.$d[oe](he),
                le.init(),
                (this.$d = le.set(y, Math.min(this.$D, le.daysInMonth())).$d)
            } else oe && this.$d[oe](he)
            return this.init(), this
          }),
          (R.set = function (v, $) {
            return this.clone().$set(v, $)
          }),
          (R.get = function (v) {
            return this[W.p(v)]()
          }),
          (R.add = function (v, $) {
            var E,
              D = this
            v = Number(v)
            var F = W.p($),
              oe = function (pe) {
                var je = H(D)
                return W.w(je.date(je.date() + Math.round(pe * v)), D)
              }
            if (F === h) return this.set(h, this.$M + v)
            if (F === p) return this.set(p, this.$y + v)
            if (F === u) return oe(1)
            if (F === c) return oe(7)
            var he = ((E = {}), (E[l] = s), (E[a] = r), (E[o] = n), E)[F] || 1,
              le = this.$d.getTime() + v * he
            return W.w(le, this)
          }),
          (R.subtract = function (v, $) {
            return this.add(-1 * v, $)
          }),
          (R.format = function (v) {
            var $ = this,
              E = this.$locale()
            if (!this.isValid()) return E.invalidDate || k
            var D = v || 'YYYY-MM-DDTHH:mm:ssZ',
              F = W.z(this),
              oe = this.$H,
              he = this.$m,
              le = this.$M,
              pe = E.weekdays,
              je = E.months,
              _ = function (ee, ae, te, Y) {
                return (ee && (ee[ae] || ee($, D))) || te[ae].substr(0, Y)
              },
              I = function (ee) {
                return W.s(oe % 12 || 12, ee, '0')
              },
              T =
                E.meridiem ||
                function (ee, ae, te) {
                  var Y = ee < 12 ? 'AM' : 'PM'
                  return te ? Y.toLowerCase() : Y
                },
              j = {
                YY: String(this.$y).slice(-2),
                YYYY: this.$y,
                M: le + 1,
                MM: W.s(le + 1, 2, '0'),
                MMM: _(E.monthsShort, le, je, 3),
                MMMM: _(je, le),
                D: this.$D,
                DD: W.s(this.$D, 2, '0'),
                d: String(this.$W),
                dd: _(E.weekdaysMin, this.$W, pe, 2),
                ddd: _(E.weekdaysShort, this.$W, pe, 3),
                dddd: pe[this.$W],
                H: String(oe),
                HH: W.s(oe, 2, '0'),
                h: I(1),
                hh: I(2),
                a: T(oe, he, !0),
                A: T(oe, he, !1),
                m: String(he),
                mm: W.s(he, 2, '0'),
                s: String(this.$s),
                ss: W.s(this.$s, 2, '0'),
                SSS: W.s(this.$ms, 3, '0'),
                Z: F,
              }
            return D.replace(C, function (ee, ae) {
              return ae || j[ee] || F.replace(':', '')
            })
          }),
          (R.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
          }),
          (R.diff = function (v, $, E) {
            var D,
              F = W.p($),
              oe = H(v),
              he = (oe.utcOffset() - this.utcOffset()) * s,
              le = this - oe,
              pe = W.m(this, oe)
            return (
              (pe =
                ((D = {}),
                (D[p] = pe / 12),
                (D[h] = pe),
                (D[f] = pe / 3),
                (D[c] = (le - he) / 6048e5),
                (D[u] = (le - he) / 864e5),
                (D[a] = le / r),
                (D[l] = le / s),
                (D[o] = le / n),
                D)[F] || le),
              E ? pe : W.a(pe)
            )
          }),
          (R.daysInMonth = function () {
            return this.endOf(h).$D
          }),
          (R.$locale = function () {
            return se[this.$L]
          }),
          (R.locale = function (v, $) {
            if (!v) return this.$L
            var E = this.clone(),
              D = ie(v, $, !0)
            return D && (E.$L = D), E
          }),
          (R.clone = function () {
            return W.w(this.$d, this)
          }),
          (R.toDate = function () {
            return new Date(this.valueOf())
          }),
          (R.toJSON = function () {
            return this.isValid() ? this.toISOString() : null
          }),
          (R.toISOString = function () {
            return this.$d.toISOString()
          }),
          (R.toString = function () {
            return this.$d.toUTCString()
          }),
          N
        )
      })(),
      L = de.prototype
    return (
      (H.prototype = L),
      [
        ['$ms', i],
        ['$s', o],
        ['$m', l],
        ['$H', a],
        ['$W', u],
        ['$M', h],
        ['$y', p],
        ['$D', y],
      ].forEach(function (N) {
        L[N[1]] = function (R) {
          return this.$g(R, N[0], N[1])
        }
      }),
      (H.extend = function (N, R) {
        return N.$i || (N(R, de, H), (N.$i = !0)), H
      }),
      (H.locale = ie),
      (H.isDayjs = J),
      (H.unix = function (N) {
        return H(1e3 * N)
      }),
      (H.en = se[ne]),
      (H.Ls = se),
      (H.p = {}),
      H
    )
  })
})(ml)
var co = ml.exports
var ti = (e, t) => {
  const n = e.__vccOpts || e
  for (const [s, r] of t) n[s] = r
  return n
}
const qh = ln({
    name: 'WeatherDailyCard',
    components: {},
    props: {
      tempMin: String,
      tempMax: String,
      icon: String,
      weekName: String,
      date: Number,
      index: Number,
    },
    setup() {
      return {}
    },
  }),
  Fh = { class: 'week-name text-center' },
  Hh = { class: 'pic' },
  Uh = { class: 'min-max' }
function zh(e, t, n, s, r, i) {
  return (
    He(),
    pt(
      'div',
      {
        class: 'container',
        style: Dn({
          borderColor:
            Number(e.index) === 0 ? 'var(--color-background)' : 'transparent',
        }),
      },
      [
        $e('div', Fh, et(e.weekName) + '\xA0' + et(e.date), 1),
        $e('div', Hh, [$e('i', { class: In(`qi-${e.icon}`) }, null, 2)]),
        $e('div', Uh, et(e.tempMin) + '\u2103~' + et(e.tempMax) + '\u2103', 1),
      ],
      4
    )
  )
}
var Kh = ti(qh, [
  ['render', zh],
  ['__scopeId', 'data-v-90adf9a4'],
])
const Wh = '\u4E0A\u6D77',
  Vh = (e) =>
    [
      '\u5468\u65E5',
      '\u5468\u4E00',
      '\u5468\u4E8C',
      '\u5468\u4E09',
      '\u5468\u56DB',
      '\u5468\u4E94',
      '\u5468\u516D',
    ][e]
function Jh(e) {
  switch (e) {
    case 'LEme5U1':
      return { name: '\u6D45\u6731\u7EA2', background: '#F9D5D5' }
    case '6kn3x':
      return { name: '\u6D45\u9EC4\u8272', background: '#F9E8A2' }
    case '3qiB4a':
      return { name: '\u6D45\u7EFF\u8272', background: '#D4FDD1' }
    case 'dgLS2CB':
      return { name: '\u6D45\u84DD\u8272', background: '#B1FAFF' }
  }
}
const Qh = ln({
    name: 'WeatherOne',
    components: { WeatherDailyCard: Kh },
    setup() {
      const e = Jh(Gi('color')),
        t = Gi('size'),
        n = We(Wh),
        s = We(1),
        r = We({ time: '', temp: '', tempText: '', icon: '', daily: [] }),
        i = We(t === 'short'),
        o = We([]),
        l = {
          '--color-background': e == null ? void 0 : e.background,
          '--width': i.value ? '320px' : '700px',
        }
      return {
        placeName: n,
        status: r,
        cid: s,
        isMobile: i,
        weeks: o,
        styleVar: l,
      }
    },
    mounted() {
      ei.get('https://afanapi.goea.xyz/api/ipAndCity').then((e) => {
        e.status === 200 && e.data.ip && e.data.cid
          ? ((this.cid = e.data.cid),
            jh(e.data.cid).then((t) => {
              if (
                t.status === 200 &&
                t.data &&
                t.data.code === '200' &&
                Array.isArray(t.data.location) &&
                t.data.location.length
              ) {
                let n = {
                  lat: t.data.location[0].lat,
                  lon: t.data.location[0].lon,
                }
                ;(this.placeName = t.data.location[0].name),
                  Ih(
                    `${n == null ? void 0 : n.lon},${
                      n == null ? void 0 : n.lat
                    }`
                  ).then((s) => {
                    if (s.status === 200 && s.data && s.data.code === '200') {
                      console.log(s.data)
                      const r = s.data.now
                      ;(this.status.temp = r.temp),
                        (this.status.tempText = r.text),
                        (this.status.icon = r.icon),
                        (this.status.time = s.data.updateTime)
                    }
                    Bh(
                      `${n == null ? void 0 : n.lon},${
                        n == null ? void 0 : n.lat
                      }`
                    ).then((r) => {
                      if (r.status === 200 && r.data && r.data.code === '200') {
                        console.log(r.data.daily),
                          (this.status.daily = r.data.daily)
                        const i = co().day(),
                          o = new Date().getHours()
                        this.weeks = new Array(7)
                          .fill(i)
                          .map((l, a) => (l + a) % 7)
                          .map((l, a) => ({
                            weekName: Vh(l),
                            icon:
                              r.data.daily[a] &&
                              r.data.daily[a][
                                o >= 6 && o <= 18 ? 'iconDay' : 'iconNight'
                              ],
                            tempMin: r.data.daily[a] && r.data.daily[a].tempMin,
                            tempMax: r.data.daily[a] && r.data.daily[a].tempMax,
                            date:
                              r.data.daily[a] &&
                              co(r.data.daily[a].fxDate).date(),
                          }))
                      }
                    })
                  })
              } else this.cid = -1
            }))
          : (this.cid = -1)
      })
    },
  }),
  Yh = (e) => (ju('data-v-33028f6c'), (e = e()), qu(), e),
  Xh = { class: 'square q-pa-md flex justify-around' },
  Zh = { key: 0, class: 'not-valid' },
  Gh = { key: 1, class: 'not-valid' },
  ep = Us(' \u4EC5\u652F\u6301\u56FD\u5185\u4F7F\u7528 '),
  tp = Yh(() => $e('br', null, null, -1)),
  np = Us(' \u6216\u68C0\u67E5\u662F\u5426\u5F00\u4E86\u4EE3\u7406 '),
  rp = [ep, tp, np],
  sp = { class: 'left' },
  ip = { class: 'place-name' },
  op = { class: 'temp' },
  ap = { class: 'temp-text' },
  lp = { key: 0, class: 'right' },
  up = { class: 'date' },
  cp = { class: 'pic' },
  fp = { class: 'min-max' },
  dp = { key: 1, class: 'right' },
  hp = { class: 'right-inner flex justify-around' }
function pp(e, t, n, s, r, i) {
  const o = La('weather-daily-card')
  return (
    He(),
    pt(
      'div',
      { class: 'weather-container q-mx-auto', style: Dn(e.styleVar) },
      [
        $e('div', Xh, [
          e.cid === 1
            ? (He(),
              pt(
                'div',
                Zh,
                '\u6B63\u5728\u83B7\u53D6\u5F53\u524D\u57CE\u5E02...'
              ))
            : fn('', !0),
          e.cid === -1 ? (He(), pt('div', Gh, rp)) : fn('', !0),
          e.cid !== -1 && e.cid !== 1
            ? (He(),
              pt(
                Oe,
                { key: 2 },
                [
                  $e('div', sp, [
                    $e('div', ip, et(e.placeName), 1),
                    $e('div', op, et(e.status.temp) + '\u2103', 1),
                    $e('div', ap, et(e.status.tempText), 1),
                  ]),
                  e.isMobile
                    ? (He(),
                      pt('div', lp, [
                        $e(
                          'div',
                          up,
                          et(e.status.daily[0] && e.status.daily[0].fxDate),
                          1
                        ),
                        $e('div', cp, [
                          $e(
                            'i',
                            { class: In(`qi-${e.status.icon}`) },
                            null,
                            2
                          ),
                        ]),
                        $e(
                          'div',
                          fp,
                          et(e.status.daily[0] && e.status.daily[0].tempMin) +
                            '\u2103~' +
                            et(e.status.daily[0] && e.status.daily[0].tempMax) +
                            '\u2103 ',
                          1
                        ),
                      ]))
                    : fn('', !0),
                  e.isMobile
                    ? fn('', !0)
                    : (He(),
                      pt('div', dp, [
                        $e('div', hp, [
                          (He(!0),
                          pt(
                            Oe,
                            null,
                            Tc(
                              e.weeks,
                              (l, a) => (
                                He(),
                                Tr(
                                  o,
                                  {
                                    key: a,
                                    index: a,
                                    weekName: l.weekName,
                                    tempMin: l.tempMin,
                                    tempMax: l.tempMax,
                                    icon: l.icon,
                                    date: l.date,
                                  },
                                  null,
                                  8,
                                  [
                                    'index',
                                    'weekName',
                                    'tempMin',
                                    'tempMax',
                                    'icon',
                                    'date',
                                  ]
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                      ])),
                ],
                64
              ))
            : fn('', !0),
        ]),
      ],
      4
    )
  )
}
var mp = ti(Qh, [
  ['render', pp],
  ['__scopeId', 'data-v-33028f6c'],
])
const gp = ln({ name: 'App', components: { WeatherOne: mp } })
function vp(e, t, n, s, r, i) {
  const o = La('weather-one')
  return He(), Tr(o)
}
var yp = ti(gp, [['render', vp]])
function Mg(e) {
  return e
}
var _p = !1
/*!
 * pinia v2.0.13
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const bp = (e) => e,
  wp = Symbol()
var fo
;(function (e) {
  ;(e.direct = 'direct'),
    (e.patchObject = 'patch object'),
    (e.patchFunction = 'patch function')
})(fo || (fo = {}))
function xp() {
  const e = Zl(!0),
    t = e.run(() => We({}))
  let n = [],
    s = []
  const r = Bt({
    install(i) {
      bp(r),
        (r._a = i),
        i.provide(wp, r),
        (i.config.globalProperties.$pinia = r),
        s.forEach((o) => n.push(o)),
        (s = [])
    },
    use(i) {
      return !this._a && !_p ? s.push(i) : n.push(i), this
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  })
  return r
}
var Jr = () => xp()
/*!
 * vue-router v4.0.14
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const gl =
    typeof Symbol == 'function' && typeof Symbol.toStringTag == 'symbol',
  un = (e) => (gl ? Symbol(e) : '_vr_' + e),
  Ep = un('rvlm'),
  ho = un('rvd'),
  ni = un('r'),
  vl = un('rl'),
  _s = un('rvl'),
  Yt = typeof window != 'undefined'
function Cp(e) {
  return e.__esModule || (gl && e[Symbol.toStringTag] === 'Module')
}
const ge = Object.assign
function Qr(e, t) {
  const n = {}
  for (const s in t) {
    const r = t[s]
    n[s] = Array.isArray(r) ? r.map(e) : e(r)
  }
  return n
}
const Cn = () => {},
  Sp = /\/$/,
  $p = (e) => e.replace(Sp, '')
function Yr(e, t, n = '/') {
  let s,
    r = {},
    i = '',
    o = ''
  const l = t.indexOf('?'),
    a = t.indexOf('#', l > -1 ? l : 0)
  return (
    l > -1 &&
      ((s = t.slice(0, l)),
      (i = t.slice(l + 1, a > -1 ? a : t.length)),
      (r = e(i))),
    a > -1 && ((s = s || t.slice(0, a)), (o = t.slice(a, t.length))),
    (s = Ap(s != null ? s : t, n)),
    { fullPath: s + (i && '?') + i + o, path: s, query: r, hash: o }
  )
}
function kp(e, t) {
  const n = t.query ? e(t.query) : ''
  return t.path + (n && '?') + n + (t.hash || '')
}
function po(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || '/'
}
function Pp(e, t, n) {
  const s = t.matched.length - 1,
    r = n.matched.length - 1
  return (
    s > -1 &&
    s === r &&
    rn(t.matched[s], n.matched[r]) &&
    yl(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function rn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function yl(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!Tp(e[n], t[n])) return !1
  return !0
}
function Tp(e, t) {
  return Array.isArray(e) ? mo(e, t) : Array.isArray(t) ? mo(t, e) : e === t
}
function mo(e, t) {
  return Array.isArray(t)
    ? e.length === t.length && e.every((n, s) => n === t[s])
    : e.length === 1 && e[0] === t
}
function Ap(e, t) {
  if (e.startsWith('/')) return e
  if (!e) return t
  const n = t.split('/'),
    s = e.split('/')
  let r = n.length - 1,
    i,
    o
  for (i = 0; i < s.length; i++)
    if (((o = s[i]), !(r === 1 || o === '.')))
      if (o === '..') r--
      else break
  return (
    n.slice(0, r).join('/') +
    '/' +
    s.slice(i - (i === s.length ? 1 : 0)).join('/')
  )
}
var Nn
;(function (e) {
  ;(e.pop = 'pop'), (e.push = 'push')
})(Nn || (Nn = {}))
var Sn
;(function (e) {
  ;(e.back = 'back'), (e.forward = 'forward'), (e.unknown = '')
})(Sn || (Sn = {}))
function Rp(e) {
  if (!e)
    if (Yt) {
      const t = document.querySelector('base')
      ;(e = (t && t.getAttribute('href')) || '/'),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ''))
    } else e = '/'
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), $p(e)
}
const Op = /^[^#]+#/
function Mp(e, t) {
  return e.replace(Op, '#') + t
}
function Lp(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    s = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0),
  }
}
const Dr = () => ({ left: window.pageXOffset, top: window.pageYOffset })
function Np(e) {
  let t
  if ('el' in e) {
    const n = e.el,
      s = typeof n == 'string' && n.startsWith('#'),
      r =
        typeof n == 'string'
          ? s
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n
    if (!r) return
    t = Lp(r, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset
      )
}
function go(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const bs = new Map()
function Dp(e, t) {
  bs.set(e, t)
}
function Ip(e) {
  const t = bs.get(e)
  return bs.delete(e), t
}
let Bp = () => location.protocol + '//' + location.host
function _l(e, t) {
  const { pathname: n, search: s, hash: r } = t,
    i = e.indexOf('#')
  if (i > -1) {
    let l = r.includes(e.slice(i)) ? e.slice(i).length : 1,
      a = r.slice(l)
    return a[0] !== '/' && (a = '/' + a), po(a, '')
  }
  return po(n, e) + s + r
}
function jp(e, t, n, s) {
  let r = [],
    i = [],
    o = null
  const l = ({ state: f }) => {
    const p = _l(e, location),
      y = n.value,
      k = t.value
    let x = 0
    if (f) {
      if (((n.value = p), (t.value = f), o && o === y)) {
        o = null
        return
      }
      x = k ? f.position - k.position : 0
    } else s(p)
    r.forEach((C) => {
      C(n.value, y, {
        delta: x,
        type: Nn.pop,
        direction: x ? (x > 0 ? Sn.forward : Sn.back) : Sn.unknown,
      })
    })
  }
  function a() {
    o = n.value
  }
  function u(f) {
    r.push(f)
    const p = () => {
      const y = r.indexOf(f)
      y > -1 && r.splice(y, 1)
    }
    return i.push(p), p
  }
  function c() {
    const { history: f } = window
    !f.state || f.replaceState(ge({}, f.state, { scroll: Dr() }), '')
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
function vo(e, t, n, s = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: r ? Dr() : null,
  }
}
function qp(e) {
  const { history: t, location: n } = window,
    s = { value: _l(e, n) },
    r = { value: t.state }
  r.value ||
    i(
      s.value,
      {
        back: null,
        current: s.value,
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
          : Bp() + e + a
    try {
      t[c ? 'replaceState' : 'pushState'](u, '', f), (r.value = u)
    } catch (p) {
      console.error(p), n[c ? 'replace' : 'assign'](f)
    }
  }
  function o(a, u) {
    const c = ge({}, t.state, vo(r.value.back, a, r.value.forward, !0), u, {
      position: r.value.position,
    })
    i(a, c, !0), (s.value = a)
  }
  function l(a, u) {
    const c = ge({}, r.value, t.state, { forward: a, scroll: Dr() })
    i(c.current, c, !0)
    const h = ge({}, vo(s.value, a, null), { position: c.position + 1 }, u)
    i(a, h, !1), (s.value = a)
  }
  return { location: s, state: r, push: l, replace: o }
}
function Fp(e) {
  e = Rp(e)
  const t = qp(e),
    n = jp(e, t.state, t.location, t.replace)
  function s(i, o = !0) {
    o || n.pauseListeners(), history.go(i)
  }
  const r = ge(
    { location: '', base: e, go: s, createHref: Mp.bind(null, e) },
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
function Hp(e) {
  return typeof e == 'string' || (e && typeof e == 'object')
}
function bl(e) {
  return typeof e == 'string' || typeof e == 'symbol'
}
const ft = {
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
  wl = un('nf')
var yo
;(function (e) {
  ;(e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated')
})(yo || (yo = {}))
function sn(e, t) {
  return ge(new Error(), { type: e, [wl]: !0 }, t)
}
function dt(e, t) {
  return e instanceof Error && wl in e && (t == null || !!(e.type & t))
}
const _o = '[^/]+?',
  Up = { sensitive: !1, strict: !1, start: !0, end: !0 },
  zp = /[.+*?^${}()[\]/\\]/g
function Kp(e, t) {
  const n = ge({}, Up, t),
    s = []
  let r = n.start ? '^' : ''
  const i = []
  for (const u of e) {
    const c = u.length ? [] : [90]
    n.strict && !u.length && (r += '/')
    for (let h = 0; h < u.length; h++) {
      const f = u[h]
      let p = 40 + (n.sensitive ? 0.25 : 0)
      if (f.type === 0)
        h || (r += '/'), (r += f.value.replace(zp, '\\$&')), (p += 40)
      else if (f.type === 1) {
        const { value: y, repeatable: k, optional: x, regexp: C } = f
        i.push({ name: y, repeatable: k, optional: x })
        const B = C || _o
        if (B !== _o) {
          p += 10
          try {
            new RegExp(`(${B})`)
          } catch (K) {
            throw new Error(
              `Invalid custom RegExp for param "${y}" (${B}): ` + K.message
            )
          }
        }
        let V = k ? `((?:${B})(?:/(?:${B}))*)` : `(${B})`
        h || (V = x && u.length < 2 ? `(?:/${V})` : '/' + V),
          x && (V += '?'),
          (r += V),
          (p += 20),
          x && (p += -8),
          k && (p += -20),
          B === '.*' && (p += -50)
      }
      c.push(p)
    }
    s.push(c)
  }
  if (n.strict && n.end) {
    const u = s.length - 1
    s[u][s[u].length - 1] += 0.7000000000000001
  }
  n.strict || (r += '/?'), n.end ? (r += '$') : n.strict && (r += '(?:/|$)')
  const o = new RegExp(r, n.sensitive ? '' : 'i')
  function l(u) {
    const c = u.match(o),
      h = {}
    if (!c) return null
    for (let f = 1; f < c.length; f++) {
      const p = c[f] || '',
        y = i[f - 1]
      h[y.name] = p && y.repeatable ? p.split('/') : p
    }
    return h
  }
  function a(u) {
    let c = '',
      h = !1
    for (const f of e) {
      ;(!h || !c.endsWith('/')) && (c += '/'), (h = !1)
      for (const p of f)
        if (p.type === 0) c += p.value
        else if (p.type === 1) {
          const { value: y, repeatable: k, optional: x } = p,
            C = y in u ? u[y] : ''
          if (Array.isArray(C) && !k)
            throw new Error(
              `Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`
            )
          const B = Array.isArray(C) ? C.join('/') : C
          if (!B)
            if (x)
              f.length < 2 &&
                (c.endsWith('/') ? (c = c.slice(0, -1)) : (h = !0))
            else throw new Error(`Missing required param "${y}"`)
          c += B
        }
    }
    return c
  }
  return { re: o, score: s, keys: i, parse: l, stringify: a }
}
function Wp(e, t) {
  let n = 0
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n]
    if (s) return s
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
function Vp(e, t) {
  let n = 0
  const s = e.score,
    r = t.score
  for (; n < s.length && n < r.length; ) {
    const i = Wp(s[n], r[n])
    if (i) return i
    n++
  }
  return r.length - s.length
}
const Jp = { type: 0, value: '' },
  Qp = /[a-zA-Z0-9_]/
function Yp(e) {
  if (!e) return [[]]
  if (e === '/') return [[Jp]]
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`)
  function t(p) {
    throw new Error(`ERR (${n})/"${u}": ${p}`)
  }
  let n = 0,
    s = n
  const r = []
  let i
  function o() {
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
      ;(s = n), (n = 4)
      continue
    }
    switch (n) {
      case 0:
        a === '/' ? (u && h(), o()) : a === ':' ? (h(), (n = 1)) : f()
        break
      case 4:
        f(), (n = s)
        break
      case 1:
        a === '('
          ? (n = 2)
          : Qp.test(a)
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
  return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), h(), o(), r
}
function Xp(e, t, n) {
  const s = Kp(Yp(e.path), n),
    r = ge(s, { record: e, parent: t, children: [], alias: [] })
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r
}
function Zp(e, t) {
  const n = [],
    s = new Map()
  t = wo({ strict: !1, end: !0, sensitive: !1 }, t)
  function r(c) {
    return s.get(c)
  }
  function i(c, h, f) {
    const p = !f,
      y = em(c)
    y.aliasOf = f && f.record
    const k = wo(t, c),
      x = [y]
    if ('alias' in c) {
      const V = typeof c.alias == 'string' ? [c.alias] : c.alias
      for (const K of V)
        x.push(
          ge({}, y, {
            components: f ? f.record.components : y.components,
            path: K,
            aliasOf: f ? f.record : y,
          })
        )
    }
    let C, B
    for (const V of x) {
      const { path: K } = V
      if (h && K[0] !== '/') {
        const ne = h.record.path,
          se = ne[ne.length - 1] === '/' ? '' : '/'
        V.path = h.record.path + (K && se + K)
      }
      if (
        ((C = Xp(V, h, k)),
        f
          ? f.alias.push(C)
          : ((B = B || C),
            B !== C && B.alias.push(C),
            p && c.name && !bo(C) && o(c.name)),
        'children' in y)
      ) {
        const ne = y.children
        for (let se = 0; se < ne.length; se++) i(ne[se], C, f && f.children[se])
      }
      ;(f = f || C), a(C)
    }
    return B
      ? () => {
          o(B)
        }
      : Cn
  }
  function o(c) {
    if (bl(c)) {
      const h = s.get(c)
      h &&
        (s.delete(c),
        n.splice(n.indexOf(h), 1),
        h.children.forEach(o),
        h.alias.forEach(o))
    } else {
      const h = n.indexOf(c)
      h > -1 &&
        (n.splice(h, 1),
        c.record.name && s.delete(c.record.name),
        c.children.forEach(o),
        c.alias.forEach(o))
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
      Vp(c, n[h]) >= 0 &&
      (c.record.path !== n[h].record.path || !xl(c, n[h]));

    )
      h++
    n.splice(h, 0, c), c.record.name && !bo(c) && s.set(c.record.name, c)
  }
  function u(c, h) {
    let f,
      p = {},
      y,
      k
    if ('name' in c && c.name) {
      if (((f = s.get(c.name)), !f)) throw sn(1, { location: c })
      ;(k = f.record.name),
        (p = ge(
          Gp(
            h.params,
            f.keys.filter((B) => !B.optional).map((B) => B.name)
          ),
          c.params
        )),
        (y = f.stringify(p))
    } else if ('path' in c)
      (y = c.path),
        (f = n.find((B) => B.re.test(y))),
        f && ((p = f.parse(y)), (k = f.record.name))
    else {
      if (((f = h.name ? s.get(h.name) : n.find((B) => B.re.test(h.path))), !f))
        throw sn(1, { location: c, currentLocation: h })
      ;(k = f.record.name),
        (p = ge({}, h.params, c.params)),
        (y = f.stringify(p))
    }
    const x = []
    let C = f
    for (; C; ) x.unshift(C.record), (C = C.parent)
    return { name: k, path: y, params: p, matched: x, meta: nm(x) }
  }
  return (
    e.forEach((c) => i(c)),
    {
      addRoute: i,
      resolve: u,
      removeRoute: o,
      getRoutes: l,
      getRecordMatcher: r,
    }
  )
}
function Gp(e, t) {
  const n = {}
  for (const s of t) s in e && (n[s] = e[s])
  return n
}
function em(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: tm(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      'components' in e ? e.components || {} : { default: e.component },
  }
}
function tm(e) {
  const t = {},
    n = e.props || !1
  if ('component' in e) t.default = n
  else for (const s in e.components) t[s] = typeof n == 'boolean' ? n : n[s]
  return t
}
function bo(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function nm(e) {
  return e.reduce((t, n) => ge(t, n.meta), {})
}
function wo(e, t) {
  const n = {}
  for (const s in e) n[s] = s in t ? t[s] : e[s]
  return n
}
function xl(e, t) {
  return t.children.some((n) => n === e || xl(e, n))
}
const El = /#/g,
  rm = /&/g,
  sm = /\//g,
  im = /=/g,
  om = /\?/g,
  Cl = /\+/g,
  am = /%5B/g,
  lm = /%5D/g,
  Sl = /%5E/g,
  um = /%60/g,
  $l = /%7B/g,
  cm = /%7C/g,
  kl = /%7D/g,
  fm = /%20/g
function ri(e) {
  return encodeURI('' + e)
    .replace(cm, '|')
    .replace(am, '[')
    .replace(lm, ']')
}
function dm(e) {
  return ri(e).replace($l, '{').replace(kl, '}').replace(Sl, '^')
}
function ws(e) {
  return ri(e)
    .replace(Cl, '%2B')
    .replace(fm, '+')
    .replace(El, '%23')
    .replace(rm, '%26')
    .replace(um, '`')
    .replace($l, '{')
    .replace(kl, '}')
    .replace(Sl, '^')
}
function hm(e) {
  return ws(e).replace(im, '%3D')
}
function pm(e) {
  return ri(e).replace(El, '%23').replace(om, '%3F')
}
function mm(e) {
  return e == null ? '' : pm(e).replace(sm, '%2F')
}
function yr(e) {
  try {
    return decodeURIComponent('' + e)
  } catch {}
  return '' + e
}
function gm(e) {
  const t = {}
  if (e === '' || e === '?') return t
  const s = (e[0] === '?' ? e.slice(1) : e).split('&')
  for (let r = 0; r < s.length; ++r) {
    const i = s[r].replace(Cl, ' '),
      o = i.indexOf('='),
      l = yr(o < 0 ? i : i.slice(0, o)),
      a = o < 0 ? null : yr(i.slice(o + 1))
    if (l in t) {
      let u = t[l]
      Array.isArray(u) || (u = t[l] = [u]), u.push(a)
    } else t[l] = a
  }
  return t
}
function xo(e) {
  let t = ''
  for (let n in e) {
    const s = e[n]
    if (((n = hm(n)), s == null)) {
      s !== void 0 && (t += (t.length ? '&' : '') + n)
      continue
    }
    ;(Array.isArray(s) ? s.map((i) => i && ws(i)) : [s && ws(s)]).forEach(
      (i) => {
        i !== void 0 &&
          ((t += (t.length ? '&' : '') + n), i != null && (t += '=' + i))
      }
    )
  }
  return t
}
function vm(e) {
  const t = {}
  for (const n in e) {
    const s = e[n]
    s !== void 0 &&
      (t[n] = Array.isArray(s)
        ? s.map((r) => (r == null ? null : '' + r))
        : s == null
        ? s
        : '' + s)
  }
  return t
}
function pn() {
  let e = []
  function t(s) {
    return (
      e.push(s),
      () => {
        const r = e.indexOf(s)
        r > -1 && e.splice(r, 1)
      }
    )
  }
  function n() {
    e = []
  }
  return { add: t, list: () => e, reset: n }
}
function vt(e, t, n, s, r) {
  const i = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || [])
  return () =>
    new Promise((o, l) => {
      const a = (h) => {
          h === !1
            ? l(sn(4, { from: n, to: t }))
            : h instanceof Error
            ? l(h)
            : Hp(h)
            ? l(sn(2, { from: t, to: h }))
            : (i &&
                s.enterCallbacks[r] === i &&
                typeof h == 'function' &&
                i.push(h),
              o())
        },
        u = e.call(s && s.instances[r], t, n, a)
      let c = Promise.resolve(u)
      e.length < 3 && (c = c.then(a)), c.catch((h) => l(h))
    })
}
function Xr(e, t, n, s) {
  const r = []
  for (const i of e)
    for (const o in i.components) {
      let l = i.components[o]
      if (!(t !== 'beforeRouteEnter' && !i.instances[o]))
        if (ym(l)) {
          const u = (l.__vccOpts || l)[t]
          u && r.push(vt(u, n, s, i, o))
        } else {
          let a = l()
          r.push(() =>
            a.then((u) => {
              if (!u)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${o}" at "${i.path}"`)
                )
              const c = Cp(u) ? u.default : u
              i.components[o] = c
              const f = (c.__vccOpts || c)[t]
              return f && vt(f, n, s, i, o)()
            })
          )
        }
    }
  return r
}
function ym(e) {
  return (
    typeof e == 'object' ||
    'displayName' in e ||
    'props' in e ||
    '__vccOpts' in e
  )
}
function Eo(e) {
  const t = bt(ni),
    n = bt(vl),
    s = G(() => t.resolve(_n(e.to))),
    r = G(() => {
      const { matched: a } = s.value,
        { length: u } = a,
        c = a[u - 1],
        h = n.matched
      if (!c || !h.length) return -1
      const f = h.findIndex(rn.bind(null, c))
      if (f > -1) return f
      const p = Co(a[u - 2])
      return u > 1 && Co(c) === p && h[h.length - 1].path !== p
        ? h.findIndex(rn.bind(null, a[u - 2]))
        : f
    }),
    i = G(() => r.value > -1 && xm(n.params, s.value.params)),
    o = G(
      () =>
        r.value > -1 &&
        r.value === n.matched.length - 1 &&
        yl(n.params, s.value.params)
    )
  function l(a = {}) {
    return wm(a)
      ? t[_n(e.replace) ? 'replace' : 'push'](_n(e.to)).catch(Cn)
      : Promise.resolve()
  }
  return {
    route: s,
    href: G(() => s.value.href),
    isActive: i,
    isExactActive: o,
    navigate: l,
  }
}
const _m = ln({
    name: 'RouterLink',
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' },
    },
    useLink: Eo,
    setup(e, { slots: t }) {
      const n = It(Eo(e)),
        { options: s } = bt(ni),
        r = G(() => ({
          [So(e.activeClass, s.linkActiveClass, 'router-link-active')]:
            n.isActive,
          [So(
            e.exactActiveClass,
            s.linkExactActiveClass,
            'router-link-exact-active'
          )]: n.isExactActive,
        }))
      return () => {
        const i = t.default && t.default(n)
        return e.custom
          ? i
          : Q(
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
  bm = _m
function wm(e) {
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
function xm(e, t) {
  for (const n in t) {
    const s = t[n],
      r = e[n]
    if (typeof s == 'string') {
      if (s !== r) return !1
    } else if (
      !Array.isArray(r) ||
      r.length !== s.length ||
      s.some((i, o) => i !== r[o])
    )
      return !1
  }
  return !0
}
function Co(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const So = (e, t, n) => (e != null ? e : t != null ? t : n),
  Em = ln({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    setup(e, { attrs: t, slots: n }) {
      const s = bt(_s),
        r = G(() => e.route || s.value),
        i = bt(ho, 0),
        o = G(() => r.value.matched[i])
      Zn(ho, i + 1), Zn(Ep, o), Zn(_s, r)
      const l = We()
      return (
        Gn(
          () => [l.value, o.value, e.name],
          ([a, u, c], [h, f, p]) => {
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
                (!f || !rn(u, f) || !h) &&
                (u.enterCallbacks[c] || []).forEach((y) => y(a))
          },
          { flush: 'post' }
        ),
        () => {
          const a = r.value,
            u = o.value,
            c = u && u.components[e.name],
            h = e.name
          if (!c) return $o(n.default, { Component: c, route: a })
          const f = u.props[e.name],
            p = f
              ? f === !0
                ? a.params
                : typeof f == 'function'
                ? f(a)
                : f
              : null,
            k = Q(
              c,
              ge({}, p, t, {
                onVnodeUnmounted: (x) => {
                  x.component.isUnmounted && (u.instances[h] = null)
                },
                ref: l,
              })
            )
          return $o(n.default, { Component: k, route: a }) || k
        }
      )
    },
  })
function $o(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const Cm = Em
function Sm(e) {
  const t = Zp(e.routes, e),
    n = e.parseQuery || gm,
    s = e.stringifyQuery || xo,
    r = e.history,
    i = pn(),
    o = pn(),
    l = pn(),
    a = $u(ft)
  let u = ft
  Yt &&
    e.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual')
  const c = Qr.bind(null, (_) => '' + _),
    h = Qr.bind(null, mm),
    f = Qr.bind(null, yr)
  function p(_, I) {
    let T, j
    return (
      bl(_) ? ((T = t.getRecordMatcher(_)), (j = I)) : (j = _), t.addRoute(j, T)
    )
  }
  function y(_) {
    const I = t.getRecordMatcher(_)
    I && t.removeRoute(I)
  }
  function k() {
    return t.getRoutes().map((_) => _.record)
  }
  function x(_) {
    return !!t.getRecordMatcher(_)
  }
  function C(_, I) {
    if (((I = ge({}, I || a.value)), typeof _ == 'string')) {
      const Y = Yr(n, _, I.path),
        d = t.resolve({ path: Y.path }, I),
        m = r.createHref(Y.fullPath)
      return ge(Y, d, {
        params: f(d.params),
        hash: yr(Y.hash),
        redirectedFrom: void 0,
        href: m,
      })
    }
    let T
    if ('path' in _) T = ge({}, _, { path: Yr(n, _.path, I.path).path })
    else {
      const Y = ge({}, _.params)
      for (const d in Y) Y[d] == null && delete Y[d]
      ;(T = ge({}, _, { params: h(_.params) })), (I.params = h(I.params))
    }
    const j = t.resolve(T, I),
      ee = _.hash || ''
    j.params = c(f(j.params))
    const ae = kp(s, ge({}, _, { hash: dm(ee), path: j.path })),
      te = r.createHref(ae)
    return ge(
      { fullPath: ae, hash: ee, query: s === xo ? vm(_.query) : _.query || {} },
      j,
      { redirectedFrom: void 0, href: te }
    )
  }
  function B(_) {
    return typeof _ == 'string' ? Yr(n, _, a.value.path) : ge({}, _)
  }
  function V(_, I) {
    if (u !== _) return sn(8, { from: I, to: _ })
  }
  function K(_) {
    return J(_)
  }
  function ne(_) {
    return K(ge(B(_), { replace: !0 }))
  }
  function se(_) {
    const I = _.matched[_.matched.length - 1]
    if (I && I.redirect) {
      const { redirect: T } = I
      let j = typeof T == 'function' ? T(_) : T
      return (
        typeof j == 'string' &&
          ((j = j.includes('?') || j.includes('#') ? (j = B(j)) : { path: j }),
          (j.params = {})),
        ge({ query: _.query, hash: _.hash, params: _.params }, j)
      )
    }
  }
  function J(_, I) {
    const T = (u = C(_)),
      j = a.value,
      ee = _.state,
      ae = _.force,
      te = _.replace === !0,
      Y = se(T)
    if (Y) return J(ge(B(Y), { state: ee, force: ae, replace: te }), I || T)
    const d = T
    d.redirectedFrom = I
    let m
    return (
      !ae &&
        Pp(s, j, T) &&
        ((m = sn(16, { to: d, from: j })), oe(j, j, !0, !1)),
      (m ? Promise.resolve(m) : H(d, j))
        .catch((g) => (dt(g) ? (dt(g, 2) ? g : F(g)) : E(g, d, j)))
        .then((g) => {
          if (g) {
            if (dt(g, 2))
              return J(
                ge(B(g.to), { state: ee, force: ae, replace: te }),
                I || d
              )
          } else g = de(d, j, !0, te, ee)
          return W(d, j, g), g
        })
    )
  }
  function ie(_, I) {
    const T = V(_, I)
    return T ? Promise.reject(T) : Promise.resolve()
  }
  function H(_, I) {
    let T
    const [j, ee, ae] = $m(_, I)
    T = Xr(j.reverse(), 'beforeRouteLeave', _, I)
    for (const Y of j)
      Y.leaveGuards.forEach((d) => {
        T.push(vt(d, _, I))
      })
    const te = ie.bind(null, _, I)
    return (
      T.push(te),
      zt(T)
        .then(() => {
          T = []
          for (const Y of i.list()) T.push(vt(Y, _, I))
          return T.push(te), zt(T)
        })
        .then(() => {
          T = Xr(ee, 'beforeRouteUpdate', _, I)
          for (const Y of ee)
            Y.updateGuards.forEach((d) => {
              T.push(vt(d, _, I))
            })
          return T.push(te), zt(T)
        })
        .then(() => {
          T = []
          for (const Y of _.matched)
            if (Y.beforeEnter && !I.matched.includes(Y))
              if (Array.isArray(Y.beforeEnter))
                for (const d of Y.beforeEnter) T.push(vt(d, _, I))
              else T.push(vt(Y.beforeEnter, _, I))
          return T.push(te), zt(T)
        })
        .then(
          () => (
            _.matched.forEach((Y) => (Y.enterCallbacks = {})),
            (T = Xr(ae, 'beforeRouteEnter', _, I)),
            T.push(te),
            zt(T)
          )
        )
        .then(() => {
          T = []
          for (const Y of o.list()) T.push(vt(Y, _, I))
          return T.push(te), zt(T)
        })
        .catch((Y) => (dt(Y, 8) ? Y : Promise.reject(Y)))
    )
  }
  function W(_, I, T) {
    for (const j of l.list()) j(_, I, T)
  }
  function de(_, I, T, j, ee) {
    const ae = V(_, I)
    if (ae) return ae
    const te = I === ft,
      Y = Yt ? history.state : {}
    T &&
      (j || te
        ? r.replace(_.fullPath, ge({ scroll: te && Y && Y.scroll }, ee))
        : r.push(_.fullPath, ee)),
      (a.value = _),
      oe(_, I, T, te),
      F()
  }
  let L
  function N() {
    L = r.listen((_, I, T) => {
      const j = C(_),
        ee = se(j)
      if (ee) {
        J(ge(ee, { replace: !0 }), j).catch(Cn)
        return
      }
      u = j
      const ae = a.value
      Yt && Dp(go(ae.fullPath, T.delta), Dr()),
        H(j, ae)
          .catch((te) =>
            dt(te, 12)
              ? te
              : dt(te, 2)
              ? (J(te.to, j)
                  .then((Y) => {
                    dt(Y, 20) && !T.delta && T.type === Nn.pop && r.go(-1, !1)
                  })
                  .catch(Cn),
                Promise.reject())
              : (T.delta && r.go(-T.delta, !1), E(te, j, ae))
          )
          .then((te) => {
            ;(te = te || de(j, ae, !1)),
              te &&
                (T.delta
                  ? r.go(-T.delta, !1)
                  : T.type === Nn.pop && dt(te, 20) && r.go(-1, !1)),
              W(j, ae, te)
          })
          .catch(Cn)
    })
  }
  let R = pn(),
    v = pn(),
    $
  function E(_, I, T) {
    F(_)
    const j = v.list()
    return (
      j.length ? j.forEach((ee) => ee(_, I, T)) : console.error(_),
      Promise.reject(_)
    )
  }
  function D() {
    return $ && a.value !== ft
      ? Promise.resolve()
      : new Promise((_, I) => {
          R.add([_, I])
        })
  }
  function F(_) {
    return (
      $ ||
        (($ = !_),
        N(),
        R.list().forEach(([I, T]) => (_ ? T(_) : I())),
        R.reset()),
      _
    )
  }
  function oe(_, I, T, j) {
    const { scrollBehavior: ee } = e
    if (!Yt || !ee) return Promise.resolve()
    const ae =
      (!T && Ip(go(_.fullPath, 0))) ||
      ((j || !T) && history.state && history.state.scroll) ||
      null
    return la()
      .then(() => ee(_, I, ae))
      .then((te) => te && Np(te))
      .catch((te) => E(te, _, I))
  }
  const he = (_) => r.go(_)
  let le
  const pe = new Set()
  return {
    currentRoute: a,
    addRoute: p,
    removeRoute: y,
    hasRoute: x,
    getRoutes: k,
    resolve: C,
    options: e,
    push: K,
    replace: ne,
    go: he,
    back: () => he(-1),
    forward: () => he(1),
    beforeEach: i.add,
    beforeResolve: o.add,
    afterEach: l.add,
    onError: v.add,
    isReady: D,
    install(_) {
      const I = this
      _.component('RouterLink', bm),
        _.component('RouterView', Cm),
        (_.config.globalProperties.$router = I),
        Object.defineProperty(_.config.globalProperties, '$route', {
          enumerable: !0,
          get: () => _n(a),
        }),
        Yt &&
          !le &&
          a.value === ft &&
          ((le = !0), K(r.location).catch((ee) => {}))
      const T = {}
      for (const ee in ft) T[ee] = G(() => a.value[ee])
      _.provide(ni, I), _.provide(vl, It(T)), _.provide(_s, a)
      const j = _.unmount
      pe.add(_),
        (_.unmount = function () {
          pe.delete(_),
            pe.size < 1 &&
              ((u = ft), L && L(), (a.value = ft), (le = !1), ($ = !1)),
            j()
        })
    },
  }
}
function zt(e) {
  return e.reduce((t, n) => t.then(() => n()), Promise.resolve())
}
function $m(e, t) {
  const n = [],
    s = [],
    r = [],
    i = Math.max(t.matched.length, e.matched.length)
  for (let o = 0; o < i; o++) {
    const l = t.matched[o]
    l && (e.matched.find((u) => rn(u, l)) ? s.push(l) : n.push(l))
    const a = e.matched[o]
    a && (t.matched.find((u) => rn(u, a)) || r.push(a))
  }
  return [n, s, r]
}
const km = [
  {
    path: '/',
    component: () =>
      Tt(
        () => import('./MainLayout.ca5f5714.js'),
        [
          'assets/MainLayout.ca5f5714.js',
          'assets/MainLayout.846d53a1.css',
          'assets/QCard.07e15bd8.js',
          'assets/use-dark.1c5e07f2.js',
          'assets/format.8dccd22e.js',
        ]
      ),
    children: [
      {
        path: '',
        component: () =>
          Tt(
            () => import('./IndexPage.299e3223.js'),
            [
              'assets/IndexPage.299e3223.js',
              'assets/use-dark.1c5e07f2.js',
              'assets/QCard.07e15bd8.js',
            ]
          ),
      },
    ],
  },
  {
    path: '/widgets/tomatoClock',
    component: () =>
      Tt(
        () => import('./TomatoClock.8063d893.js'),
        [
          'assets/TomatoClock.8063d893.js',
          'assets/TomatoClock.fbbfb83a.css',
          'assets/format.8dccd22e.js',
          'assets/use-dark.1c5e07f2.js',
        ]
      ),
  },
  {
    path: '/:catchAll(.*)*',
    component: () => Tt(() => import('./ErrorNotFound.fbaa71f1.js'), []),
  },
]
var Zr = function () {
  return Sm({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes: km,
    history: Fp('/'),
  })
}
async function Pm(e, t) {
  const n = e(yp)
  n.use(Qf, t)
  const s = typeof Jr == 'function' ? await Jr({}) : Jr
  n.use(s)
  const r = Bt(typeof Zr == 'function' ? await Zr({ store: s }) : Zr)
  return (
    s.use(({ store: i }) => {
      i.router = r
    }),
    { app: n, store: s, router: r }
  )
}
const xs = { xs: 18, sm: 24, md: 32, lg: 38, xl: 46 },
  si = { size: String }
function ii(e, t = xs) {
  return G(() =>
    e.size !== void 0
      ? { fontSize: e.size in t ? `${t[e.size]}px` : e.size }
      : null
  )
}
const qn = (e) => Bt(ln(e)),
  Tm = (e) => Bt(e)
function Am(e, t) {
  return (e !== void 0 && e()) || t
}
function Lg(e, t) {
  if (e !== void 0) {
    const n = e()
    if (n != null) return n.slice()
  }
  return t
}
function yn(e, t) {
  return e !== void 0 ? t.concat(e()) : t
}
function Rm(e, t) {
  return e === void 0 ? t : t !== void 0 ? t.concat(e()) : e()
}
function Ng(e, t, n, s, r, i) {
  t.key = s + r
  const o = Q(e, t, n)
  return r === !0 ? Ra(o, i()) : o
}
const ko = '0 0 24 24',
  Po = (e) => e,
  Gr = (e) => `ionicons ${e}`,
  Pl = {
    'mdi-': (e) => `mdi ${e}`,
    'icon-': Po,
    'bt-': (e) => `bt ${e}`,
    'eva-': (e) => `eva ${e}`,
    'ion-md': Gr,
    'ion-ios': Gr,
    'ion-logo': Gr,
    'iconfont ': Po,
    'ti-': (e) => `themify-icon ${e}`,
    'bi-': (e) => `bootstrap-icons ${e}`,
  },
  Tl = { o_: '-outlined', r_: '-round', s_: '-sharp' },
  Om = new RegExp('^(' + Object.keys(Pl).join('|') + ')'),
  Mm = new RegExp('^(' + Object.keys(Tl).join('|') + ')'),
  Lm = /^[Mm]\s?[-+]?\.?\d/,
  Nm = /^img:/,
  Dm = /^svguse:/,
  Im = /^ion-/,
  Bm = /^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /
var _r = qn({
    name: 'QIcon',
    props: Ze(Ee({}, si), {
      tag: { type: String, default: 'i' },
      name: String,
      color: String,
      left: Boolean,
      right: Boolean,
    }),
    setup(e, { slots: t }) {
      const {
          proxy: { $q: n },
        } = Bn(),
        s = ii(e),
        r = G(
          () =>
            'q-icon' +
            (e.left === !0 ? ' on-left' : '') +
            (e.right === !0 ? ' on-right' : '') +
            (e.color !== void 0 ? ` text-${e.color}` : '')
        ),
        i = G(() => {
          let o,
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
          if (Lm.test(l) === !0) {
            const [c, h = ko] = l.split('|')
            return {
              svg: !0,
              viewBox: h,
              nodes: c.split('&&').map((f) => {
                const [p, y, k] = f.split('@@')
                return Q('path', { style: y, d: p, transform: k })
              }),
            }
          }
          if (Nm.test(l) === !0) return { img: !0, src: l.substring(4) }
          if (Dm.test(l) === !0) {
            const [c, h = ko] = l.split('|')
            return { svguse: !0, src: c.substring(7), viewBox: h }
          }
          let a = ' '
          const u = l.match(Om)
          if (u !== null) o = Pl[u[1]](l)
          else if (Bm.test(l) === !0) o = l
          else if (Im.test(l) === !0)
            o = `ionicons ion-${
              n.platform.is.ios === !0 ? 'ios' : 'md'
            }${l.substr(3)}`
          else {
            o = 'notranslate material-icons'
            const c = l.match(Mm)
            c !== null && ((l = l.substring(2)), (o += Tl[c[1]])), (a = l)
          }
          return { cls: o, content: a }
        })
      return () => {
        const o = {
          class: r.value,
          style: s.value,
          'aria-hidden': 'true',
          role: 'presentation',
        }
        return i.value.none === !0
          ? Q(e.tag, o, Am(t.default))
          : i.value.img === !0
          ? Q('span', o, yn(t.default, [Q('img', { src: i.value.src })]))
          : i.value.svg === !0
          ? Q(
              'span',
              o,
              yn(t.default, [
                Q('svg', { viewBox: i.value.viewBox }, i.value.nodes),
              ])
            )
          : i.value.svguse === !0
          ? Q(
              'span',
              o,
              yn(t.default, [
                Q('svg', { viewBox: i.value.viewBox }, [
                  Q('use', { 'xlink:href': i.value.src }),
                ]),
              ])
            )
          : (i.value.cls !== void 0 && (o.class += ' ' + i.value.cls),
            Q(e.tag, o, yn(t.default, [i.value.content])))
      }
    },
  }),
  jm = qn({
    name: 'QAvatar',
    props: Ze(Ee({}, si), {
      fontSize: String,
      color: String,
      textColor: String,
      icon: String,
      square: Boolean,
      rounded: Boolean,
    }),
    setup(e, { slots: t }) {
      const n = ii(e),
        s = G(
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
        r = G(() => (e.fontSize ? { fontSize: e.fontSize } : null))
      return () => {
        const i = e.icon !== void 0 ? [Q(_r, { name: e.icon })] : void 0
        return Q('div', { class: s.value, style: n.value }, [
          Q(
            'div',
            {
              class: 'q-avatar__content row flex-center overflow-hidden',
              style: r.value,
            },
            Rm(t.default, i)
          ),
        ])
      }
    },
  })
const qm = { size: { type: [Number, String], default: '1em' }, color: String }
function Fm(e) {
  return {
    cSize: G(() => (e.size in xs ? `${xs[e.size]}px` : e.size)),
    classes: G(() => 'q-spinner' + (e.color ? ` text-${e.color}` : '')),
  }
}
var Al = qn({
  name: 'QSpinner',
  props: Ze(Ee({}, qm), { thickness: { type: Number, default: 5 } }),
  setup(e) {
    const { cSize: t, classes: n } = Fm(e)
    return () =>
      Q(
        'svg',
        {
          class: n.value + ' q-spinner-mat',
          width: t.value,
          height: t.value,
          viewBox: '25 25 50 50',
        },
        [
          Q('circle', {
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
function Hm(e, t) {
  const n = e.style
  for (const s in t) n[s] = t[s]
}
function Dg(e) {
  if (e == null) return
  if (typeof e == 'string')
    try {
      return document.querySelector(e) || void 0
    } catch {
      return
    }
  const t = we(e) === !0 ? e.value : e
  if (t) return t.$el || t
}
function Um(e, t = 250) {
  let n = !1,
    s
  return function () {
    return (
      n === !1 &&
        ((n = !0),
        setTimeout(() => {
          n = !1
        }, t),
        (s = e.apply(this, arguments))),
      s
    )
  }
}
function To(e, t, n, s) {
  n.modifiers.stop === !0 && Ya(e)
  const r = n.modifiers.color
  let i = n.modifiers.center
  i = i === !0 || s === !0
  const o = document.createElement('span'),
    l = document.createElement('span'),
    a = $f(e),
    { left: u, top: c, width: h, height: f } = t.getBoundingClientRect(),
    p = Math.sqrt(h * h + f * f),
    y = p / 2,
    k = `${(h - p) / 2}px`,
    x = i ? k : `${a.left - u - y}px`,
    C = `${(f - p) / 2}px`,
    B = i ? C : `${a.top - c - y}px`
  ;(l.className = 'q-ripple__inner'),
    Hm(l, {
      height: `${p}px`,
      width: `${p}px`,
      transform: `translate3d(${x},${B},0) scale3d(.2,.2,1)`,
      opacity: 0,
    }),
    (o.className = `q-ripple${r ? ' text-' + r : ''}`),
    o.setAttribute('dir', 'ltr'),
    o.appendChild(l),
    t.appendChild(o)
  const V = () => {
    o.remove(), clearTimeout(K)
  }
  n.abort.push(V)
  let K = setTimeout(() => {
    l.classList.add('q-ripple__inner--enter'),
      (l.style.transform = `translate3d(${k},${C},0) scale3d(1,1,1)`),
      (l.style.opacity = 0.2),
      (K = setTimeout(() => {
        l.classList.remove('q-ripple__inner--enter'),
          l.classList.add('q-ripple__inner--leave'),
          (l.style.opacity = 0),
          (K = setTimeout(() => {
            o.remove(), n.abort.splice(n.abort.indexOf(V), 1)
          }, 275))
      }, 250))
  }, 50)
}
function Ao(e, { modifiers: t, value: n, arg: s, instance: r }) {
  const i = Object.assign({}, r.$q.config.ripple, t, n)
  e.modifiers = {
    early: i.early === !0,
    stop: i.stop === !0,
    center: i.center === !0,
    color: i.color || s,
    keyCodes: [].concat(i.keyCodes || 13),
  }
}
var zm = Tm({
  name: 'ripple',
  beforeMount(e, t) {
    const n = {
      enabled: t.value !== !1,
      modifiers: {},
      abort: [],
      start(s) {
        n.enabled === !0 &&
          s.qSkipRipple !== !0 &&
          (n.modifiers.early === !0
            ? ['mousedown', 'touchstart'].includes(s.type) === !0
            : s.type === 'click') &&
          To(s, e, n, s.qKeyEvent === !0)
      },
      keystart: Um((s) => {
        n.enabled === !0 &&
          s.qSkipRipple !== !0 &&
          gs(s, n.modifiers.keyCodes) === !0 &&
          s.type === `key${n.modifiers.early === !0 ? 'down' : 'up'}` &&
          To(s, e, n, !0)
      }, 300),
    }
    Ao(n, t),
      (e.__qripple = n),
      kf(n, 'main', [
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
        n.enabled === !0 && Object(t.value) === t.value && Ao(n, t)
    }
  },
  beforeUnmount(e) {
    const t = e.__qripple
    t.abort.forEach((n) => {
      n()
    }),
      Pf(t, 'main'),
      delete e._qripple
  },
})
const Rl = {
    left: 'start',
    center: 'center',
    right: 'end',
    between: 'between',
    around: 'around',
    evenly: 'evenly',
    stretch: 'stretch',
  },
  Km = Object.keys(Rl),
  Wm = { align: { type: String, validator: (e) => Km.includes(e) } }
function Vm(e) {
  return G(() => {
    const t =
      e.align === void 0 ? (e.vertical === !0 ? 'stretch' : 'left') : e.align
    return `${e.vertical === !0 ? 'items' : 'justify'}-${Rl[t]}`
  })
}
function Jm(e) {
  return e.appContext.config.globalProperties.$router !== void 0
}
function Ro(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
function Oo(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function Qm(e, t) {
  for (const n in t) {
    const s = t[n],
      r = e[n]
    if (typeof s == 'string') {
      if (s !== r) return !1
    } else if (
      Array.isArray(r) === !1 ||
      r.length !== s.length ||
      s.some((i, o) => i !== r[o])
    )
      return !1
  }
  return !0
}
function Mo(e, t) {
  return Array.isArray(t) === !0
    ? e.length === t.length && e.every((n, s) => n === t[s])
    : e.length === 1 && e[0] === t
}
function Ym(e, t) {
  return Array.isArray(e) === !0
    ? Mo(e, t)
    : Array.isArray(t) === !0
    ? Mo(t, e)
    : e === t
}
function Xm(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (Ym(e[n], t[n]) === !1) return !1
  return !0
}
const Zm = {
  to: [String, Object],
  replace: Boolean,
  exact: Boolean,
  activeClass: { type: String, default: 'q-router-link--active' },
  exactActiveClass: { type: String, default: 'q-router-link--exact-active' },
  href: String,
  target: String,
  disable: Boolean,
}
function Gm(e) {
  const t = Bn(),
    { props: n, proxy: s } = t,
    r = Jm(t),
    i = G(() => n.disable !== !0 && n.href !== void 0),
    o = G(
      () =>
        r === !0 &&
        n.disable !== !0 &&
        i.value !== !0 &&
        n.to !== void 0 &&
        n.to !== null &&
        n.to !== ''
    ),
    l = G(() => {
      if (o.value === !0)
        try {
          return s.$router.resolve(n.to)
        } catch {}
      return null
    }),
    a = G(() => l.value !== null),
    u = G(() => i.value === !0 || a.value === !0),
    c = G(() => (n.type === 'a' || u.value === !0 ? 'a' : n.tag || e || 'div')),
    h = G(() =>
      i.value === !0
        ? { href: n.href, target: n.target }
        : a.value === !0
        ? { href: l.value.href, target: n.target }
        : {}
    ),
    f = G(() => {
      if (a.value === !1) return null
      const { matched: C } = l.value,
        { length: B } = C,
        V = C[B - 1]
      if (V === void 0) return -1
      const K = s.$route.matched
      if (K.length === 0) return -1
      const ne = K.findIndex(Oo.bind(null, V))
      if (ne > -1) return ne
      const se = Ro(C[B - 2])
      return B > 1 && Ro(V) === se && K[K.length - 1].path !== se
        ? K.findIndex(Oo.bind(null, C[B - 2]))
        : ne
    }),
    p = G(
      () =>
        a.value === !0 && f.value > -1 && Qm(s.$route.params, l.value.params)
    ),
    y = G(
      () =>
        p.value === !0 &&
        f.value === s.$route.matched.length - 1 &&
        Xm(s.$route.params, l.value.params)
    ),
    k = G(() =>
      a.value === !0
        ? y.value === !0
          ? ` ${n.exactActiveClass} ${n.activeClass}`
          : n.exact === !0
          ? ''
          : p.value === !0
          ? ` ${n.activeClass}`
          : ''
        : ''
    )
  function x(C) {
    return n.disable === !0 ||
      C.metaKey ||
      C.altKey ||
      C.ctrlKey ||
      C.shiftKey ||
      (C.__qNavigate !== !0 && C.defaultPrevented === !0) ||
      (C.button !== void 0 && C.button !== 0) ||
      n.target === '_blank'
      ? !1
      : (pr(C),
        s.$router[n.replace === !0 ? 'replace' : 'push'](n.to).catch((B) => B))
  }
  return {
    hasRouterLink: a,
    hasHrefLink: i,
    hasLink: u,
    linkTag: c,
    linkRoute: l,
    linkIsActive: p,
    linkIsExactActive: y,
    linkClass: k,
    linkProps: h,
    navigateToRouterLink: x,
  }
}
const Lo = { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
  eg = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 },
  tg = ['button', 'submit', 'reset'],
  ng = /[^\s]\/[^\s]/,
  rg = Ze(Ee(Ee({}, si), Zm), {
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
    align: Ze(Ee({}, Wm.align), { default: 'center' }),
    stack: Boolean,
    stretch: Boolean,
    loading: { type: Boolean, default: null },
    disable: Boolean,
  })
function sg(e) {
  const t = ii(e, eg),
    n = Vm(e),
    {
      hasRouterLink: s,
      hasLink: r,
      linkTag: i,
      linkProps: o,
      navigateToRouterLink: l,
    } = Gm('button'),
    a = G(() => {
      const x = e.fab === !1 && e.fabMini === !1 ? t.value : {}
      return e.padding !== void 0
        ? Object.assign({}, x, {
            padding: e.padding
              .split(/\s+/)
              .map((C) => (C in Lo ? Lo[C] + 'px' : C))
              .join(' '),
            minWidth: '0',
            minHeight: '0',
          })
        : x
    }),
    u = G(() => e.rounded === !0 || e.fab === !0 || e.fabMini === !0),
    c = G(() => e.disable !== !0 && e.loading !== !0),
    h = G(() => (c.value === !0 ? e.tabindex || 0 : -1)),
    f = G(() =>
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
    p = G(() => {
      const x = { tabindex: h.value }
      return (
        r.value === !0
          ? Object.assign(x, o.value)
          : tg.includes(e.type) === !0 && (x.type = e.type),
        i.value === 'a'
          ? (e.disable === !0
              ? (x['aria-disabled'] = 'true')
              : x.href === void 0 && (x.role = 'button'),
            s.value !== !0 && ng.test(e.type) === !0 && (x.type = e.type))
          : e.disable === !0 &&
            ((x.disabled = ''), (x['aria-disabled'] = 'true')),
        e.loading === !0 &&
          e.percentage !== void 0 &&
          Object.assign(x, {
            role: 'progressbar',
            'aria-valuemin': 0,
            'aria-valuemax': 100,
            'aria-valuenow': e.percentage,
          }),
        x
      )
    }),
    y = G(() => {
      let x
      return (
        e.color !== void 0
          ? e.flat === !0 || e.outline === !0
            ? (x = `text-${e.textColor || e.color}`)
            : (x = `bg-${e.color} text-${e.textColor || 'white'}`)
          : e.textColor && (x = `text-${e.textColor}`),
        `q-btn--${f.value} q-btn--${
          e.round === !0
            ? 'round'
            : `rectangle${u.value === !0 ? ' q-btn--rounded' : ''}`
        }` +
          (x !== void 0 ? ' ' + x : '') +
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
    k = G(
      () =>
        n.value +
        (e.stack === !0 ? ' column' : ' row') +
        (e.noWrap === !0 ? ' no-wrap text-no-wrap' : '') +
        (e.loading === !0 ? ' q-btn__content--hidden' : '')
    )
  return {
    classes: y,
    style: a,
    innerClasses: k,
    attributes: p,
    hasRouterLink: s,
    hasLink: r,
    linkTag: i,
    navigateToRouterLink: l,
    isActionable: c,
  }
}
const { passiveCapture: Fe } = Nt
let Kt = null,
  Wt = null,
  Vt = null
var ig = qn({
  name: 'QBtn',
  props: Ze(Ee({}, rg), { percentage: Number, darkPercentage: Boolean }),
  emits: ['click', 'keydown', 'touchstart', 'mousedown', 'keyup'],
  setup(e, { slots: t, emit: n }) {
    const { proxy: s } = Bn(),
      {
        classes: r,
        style: i,
        innerClasses: o,
        attributes: l,
        hasRouterLink: a,
        hasLink: u,
        linkTag: c,
        navigateToRouterLink: h,
        isActionable: f,
      } = sg(e),
      p = We(null),
      y = We(null)
    let k = null,
      x,
      C
    const B = G(() => e.label !== void 0 && e.label !== null && e.label !== ''),
      V = G(() =>
        e.disable === !0 || e.ripple === !1
          ? !1
          : Ee(
              { keyCodes: u.value === !0 ? [13, 32] : [13] },
              e.ripple === !0 ? {} : e.ripple
            )
      ),
      K = G(() => ({ center: e.round })),
      ne = G(() => {
        const v = Math.max(0, Math.min(100, e.percentage))
        return v > 0
          ? {
              transition: 'transform 0.6s',
              transform: `translateX(${v - 100}%)`,
            }
          : {}
      }),
      se = G(() =>
        e.loading === !0
          ? {
              onMousedown: R,
              onTouchstartPassive: R,
              onClick: R,
              onKeydown: R,
              onKeyup: R,
            }
          : f.value === !0
          ? { onClick: ie, onKeydown: H, onMousedown: de, onTouchstart: W }
          : { onClick: Ft }
      ),
      J = G(() =>
        Ee(
          Ee(
            {
              ref: p,
              class: 'q-btn q-btn-item non-selectable no-outline ' + r.value,
              style: i.value,
            },
            l.value
          ),
          se.value
        )
      )
    function ie(v) {
      if (p.value !== null) {
        if (v !== void 0) {
          if (v.defaultPrevented === !0) return
          const $ = document.activeElement
          if (
            e.type === 'submit' &&
            $ !== document.body &&
            p.value.contains($) === !1 &&
            $.contains(p.value) === !1
          ) {
            p.value.focus()
            const E = () => {
              document.removeEventListener('keydown', Ft, !0),
                document.removeEventListener('keyup', E, Fe),
                p.value !== null && p.value.removeEventListener('blur', E, Fe)
            }
            document.addEventListener('keydown', Ft, !0),
              document.addEventListener('keyup', E, Fe),
              p.value.addEventListener('blur', E, Fe)
          }
        }
        if (a.value === !0) {
          const $ = () => {
            ;(v.__qNavigate = !0), h(v)
          }
          n('click', v, $), v.defaultPrevented !== !0 && $()
        } else n('click', v)
      }
    }
    function H(v) {
      p.value !== null &&
        (n('keydown', v),
        gs(v, [13, 32]) === !0 &&
          Wt !== p.value &&
          (Wt !== null && N(),
          v.defaultPrevented !== !0 &&
            (p.value.focus(),
            (Wt = p.value),
            p.value.classList.add('q-btn--active'),
            document.addEventListener('keyup', L, !0),
            p.value.addEventListener('blur', L, Fe)),
          Ft(v)))
    }
    function W(v) {
      p.value !== null &&
        (n('touchstart', v),
        v.defaultPrevented !== !0 &&
          (Kt !== p.value &&
            (Kt !== null && N(),
            (Kt = p.value),
            (k = v.target),
            k.addEventListener('touchcancel', L, Fe),
            k.addEventListener('touchend', L, Fe)),
          (x = !0),
          clearTimeout(C),
          (C = setTimeout(() => {
            x = !1
          }, 200))))
    }
    function de(v) {
      p.value !== null &&
        ((v.qSkipRipple = x === !0),
        n('mousedown', v),
        v.defaultPrevented !== !0 &&
          Vt !== p.value &&
          (Vt !== null && N(),
          (Vt = p.value),
          p.value.classList.add('q-btn--active'),
          document.addEventListener('mouseup', L, Fe)))
    }
    function L(v) {
      if (
        p.value !== null &&
        !(
          v !== void 0 &&
          v.type === 'blur' &&
          document.activeElement === p.value
        )
      ) {
        if (v !== void 0 && v.type === 'keyup') {
          if (Wt === p.value && gs(v, [13, 32]) === !0) {
            const $ = new MouseEvent('click', v)
            ;($.qKeyEvent = !0),
              v.defaultPrevented === !0 && pr($),
              v.cancelBubble === !0 && Ya($),
              p.value.dispatchEvent($),
              Ft(v),
              (v.qKeyEvent = !0)
          }
          n('keyup', v)
        }
        N()
      }
    }
    function N(v) {
      const $ = y.value
      v !== !0 &&
        (Kt === p.value || Vt === p.value) &&
        $ !== null &&
        $ !== document.activeElement &&
        ($.setAttribute('tabindex', -1), $.focus()),
        Kt === p.value &&
          (k !== null &&
            (k.removeEventListener('touchcancel', L, Fe),
            k.removeEventListener('touchend', L, Fe)),
          (Kt = k = null)),
        Vt === p.value &&
          (document.removeEventListener('mouseup', L, Fe), (Vt = null)),
        Wt === p.value &&
          (document.removeEventListener('keyup', L, !0),
          p.value !== null && p.value.removeEventListener('blur', L, Fe),
          (Wt = null)),
        p.value !== null && p.value.classList.remove('q-btn--active')
    }
    function R(v) {
      Ft(v), (v.qSkipRipple = !0)
    }
    return (
      js(() => {
        N(!0)
      }),
      Object.assign(s, { click: ie }),
      () => {
        let v = []
        e.icon !== void 0 &&
          v.push(
            Q(_r, {
              name: e.icon,
              left: e.stack === !1 && B.value === !0,
              role: 'img',
              'aria-hidden': 'true',
            })
          ),
          B.value === !0 && v.push(Q('span', { class: 'block' }, [e.label])),
          (v = yn(t.default, v)),
          e.iconRight !== void 0 &&
            e.round === !1 &&
            v.push(
              Q(_r, {
                name: e.iconRight,
                right: e.stack === !1 && B.value === !0,
                role: 'img',
                'aria-hidden': 'true',
              })
            )
        const $ = [Q('span', { class: 'q-focus-helper', ref: y })]
        return (
          e.loading === !0 &&
            e.percentage !== void 0 &&
            $.push(
              Q(
                'span',
                { class: 'q-btn__progress absolute-full overflow-hidden' },
                [
                  Q('span', {
                    class:
                      'q-btn__progress-indicator fit block' +
                      (e.darkPercentage === !0 ? ' q-btn__progress--dark' : ''),
                    style: ne.value,
                  }),
                ]
              )
            ),
          $.push(
            Q(
              'span',
              {
                class:
                  'q-btn__content text-center col items-center q-anchor--skip ' +
                  o.value,
              },
              v
            )
          ),
          e.loading !== null &&
            $.push(
              Q(Ws, { name: 'q-transition--fade' }, () =>
                e.loading === !0
                  ? [
                      Q(
                        'span',
                        {
                          key: 'loading',
                          class: 'absolute-full flex flex-center',
                        },
                        t.loading !== void 0 ? t.loading() : [Q(Al)]
                      ),
                    ]
                  : null
              )
            ),
          Ra(Q(c.value, J.value, $), [[zm, V.value, void 0, K.value]])
        )
      }
    )
  },
})
let og = document.body
function ag(e) {
  const t = document.createElement('div')
  if ((e !== void 0 && (t.id = e), gr.globalNodes !== void 0)) {
    const n = gr.globalNodes.class
    n !== void 0 && (t.className = n)
  }
  return og.appendChild(t), t
}
function Ig(e) {
  e.remove()
}
let lg = 0
const sr = {},
  ir = {},
  Ke = {},
  Ol = {},
  ug = /^\s*$/,
  Ml = [],
  oi = [
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
  cg = ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
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
function Ll(e, t, n) {
  if (!e) return mn('parameter required')
  let s
  const r = { textColor: 'white' }
  if (
    (e.ignoreDefaults !== !0 && Object.assign(r, sr),
    Ln(e) === !1 &&
      (r.type && Object.assign(r, Xt[r.type]), (e = { message: e })),
    Object.assign(r, Xt[e.type || r.type], e),
    typeof r.icon == 'function' && (r.icon = r.icon(t)),
    r.spinner
      ? (r.spinner === !0 && (r.spinner = Al), (r.spinner = Bt(r.spinner)))
      : (r.spinner = !1),
    (r.meta = {
      hasMedia: Boolean(r.spinner !== !1 || r.icon || r.avatar),
      hasText: No(r.message) || No(r.caption),
    }),
    r.position)
  ) {
    if (oi.includes(r.position) === !1) return mn('wrong position', e)
  } else r.position = 'bottom'
  if (r.timeout === void 0) r.timeout = 5e3
  else {
    const a = parseInt(r.timeout, 10)
    if (isNaN(a) || a < 0) return mn('wrong timeout', e)
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
        e.ignoreDefaults !== !0 && Array.isArray(sr.actions) === !0
          ? sr.actions
          : []
      )
      .concat(
        Xt[e.type] !== void 0 && Array.isArray(Xt[e.type].actions) === !0
          ? Xt[e.type].actions
          : []
      ),
    { closeBtn: o } = r
  if (
    (o && i.push({ label: typeof o == 'string' ? o : t.lang.label.close }),
    (r.actions = i.map((h) => {
      var f = h,
        { handler: a, noDismiss: u } = f,
        c = Ir(f, ['handler', 'noDismiss'])
      return Ze(Ee({ flat: !0 }, c), {
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
      attrs: Ee({ role: 'alert' }, r.attrs),
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
    const a = Ke[r.position].value.indexOf(n.notif)
    Ke[r.position].value[a] = r
  } else {
    const a = ir[r.meta.group]
    if (a === void 0) {
      if (
        ((r.meta.uid = lg++),
        (r.meta.badge = 1),
        ['left', 'right', 'center'].indexOf(r.position) !== -1)
      )
        Ke[r.position].value.splice(
          Math.floor(Ke[r.position].value.length / 2),
          0,
          r
        )
      else {
        const u = r.position.indexOf('top') > -1 ? 'unshift' : 'push'
        Ke[r.position].value[u](r)
      }
      r.group !== void 0 && (ir[r.meta.group] = r)
    } else {
      if ((clearTimeout(a.meta.timer), r.badgePosition !== void 0)) {
        if (cg.includes(r.badgePosition) === !1)
          return mn('wrong badgePosition', e)
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
      const u = Ke[r.position].value.indexOf(a)
      Ke[r.position].value[u] = ir[r.meta.group] = r
    }
  }
  const l = () => {
    fg(r), (s = void 0)
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
        ? mn('trying to update a grouped one which is forbidden', e)
        : l()
    }
  if (((s = { dismiss: l, config: e, notif: r }), n !== void 0)) {
    Object.assign(n, s)
    return
  }
  return (a) => {
    if (s !== void 0)
      if (a === void 0) s.dismiss()
      else {
        const u = Object.assign({}, s.config, a, {
          group: !1,
          position: r.position,
        })
        Ll(u, t, s)
      }
  }
}
function fg(e) {
  clearTimeout(e.meta.timer)
  const t = Ke[e.position].value.indexOf(e)
  if (t !== -1) {
    e.group !== void 0 && delete ir[e.meta.group]
    const n = Ml['' + e.meta.uid]
    if (n) {
      const { width: s, height: r } = getComputedStyle(n)
      ;(n.style.left = `${n.offsetLeft}px`),
        (n.style.width = s),
        (n.style.height = r)
    }
    Ke[e.position].value.splice(t, 1),
      typeof e.onDismiss == 'function' && e.onDismiss()
  }
}
function No(e) {
  return e != null && ug.test(e) !== !0
}
function mn(e, t) {
  return console.error(`Notify: ${e}`, t), !1
}
function dg() {
  return qn({
    name: 'QNotifications',
    devtools: { hide: !0 },
    setup() {
      return () =>
        Q(
          'div',
          { class: 'q-notifications' },
          oi.map((e) =>
            Q(
              cf,
              {
                key: e,
                class: Ol[e],
                tag: 'div',
                name: `q-notification--${e}`,
              },
              () =>
                Ke[e].value.map((t) => {
                  const n = t.meta,
                    s = []
                  if (
                    (n.hasMedia === !0 &&
                      (t.spinner !== !1
                        ? s.push(
                            Q(t.spinner, {
                              class:
                                'q-notification__spinner q-notification__spinner--' +
                                n.leftClass,
                              color: t.spinnerColor,
                              size: t.spinnerSize,
                            })
                          )
                        : t.icon
                        ? s.push(
                            Q(_r, {
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
                          s.push(
                            Q(
                              jm,
                              {
                                class:
                                  'q-notification__avatar q-notification__avatar--' +
                                  n.leftClass,
                              },
                              () =>
                                Q('img', {
                                  src: t.avatar,
                                  'aria-hidden': 'true',
                                })
                            )
                          )),
                    n.hasText === !0)
                  ) {
                    let i
                    const o = { class: 'q-notification__message col' }
                    if (t.html === !0)
                      o.innerHTML = t.caption
                        ? `<div>${t.message}</div><div class="q-notification__caption">${t.caption}</div>`
                        : t.message
                    else {
                      const l = [t.message]
                      i = t.caption
                        ? [
                            Q('div', l),
                            Q('div', { class: 'q-notification__caption' }, [
                              t.caption,
                            ]),
                          ]
                        : l
                    }
                    s.push(Q('div', o, i))
                  }
                  const r = [Q('div', { class: n.contentClass }, s)]
                  return (
                    t.progress === !0 &&
                      r.push(
                        Q('div', {
                          key: `${n.uid}|p|${n.badge}`,
                          class: n.progressClass,
                          style: n.progressStyle,
                        })
                      ),
                    t.actions !== void 0 &&
                      r.push(
                        Q(
                          'div',
                          { class: n.actionsClass },
                          t.actions.map((i) => Q(ig, i))
                        )
                      ),
                    n.badge > 1 &&
                      r.push(
                        Q(
                          'div',
                          {
                            key: `${n.uid}|${n.badge}`,
                            class: t.meta.badgeClass,
                            style: t.badgeStyle,
                          },
                          [n.badge]
                        )
                      ),
                    Q(
                      'div',
                      Ee(
                        {
                          ref: (i) => {
                            Ml['' + n.uid] = i
                          },
                          key: n.uid,
                          class: n.class,
                        },
                        n.attrs
                      ),
                      [Q('div', { class: n.wrapperClass }, r)]
                    )
                  )
                })
            )
          )
        )
    },
  })
}
var hg = {
    setDefaults(e) {
      Ln(e) === !0 && Object.assign(sr, e)
    },
    registerType(e, t) {
      Ln(t) === !0 && (Xt[e] = t)
    },
    install({ $q: e, parentApp: t }) {
      if (
        ((e.notify = this.create = (n) => Ll(n, e)),
        (e.notify.setDefaults = this.setDefaults),
        (e.notify.registerType = this.registerType),
        e.config.notify !== void 0 && this.setDefaults(e.config.notify),
        this.__installed !== !0)
      ) {
        oi.forEach((s) => {
          Ke[s] = We([])
          const r =
              ['left', 'center', 'right'].includes(s) === !0
                ? 'center'
                : s.indexOf('top') > -1
                ? 'top'
                : 'bottom',
            i =
              s.indexOf('left') > -1
                ? 'start'
                : s.indexOf('right') > -1
                ? 'end'
                : 'center',
            o = ['left', 'right'].includes(s)
              ? `items-${s === 'left' ? 'start' : 'end'} justify-center`
              : s === 'center'
              ? 'flex-center'
              : `items-${i}`
          Ol[
            s
          ] = `q-notifications__list q-notifications__list--${r} fixed column no-wrap ${o}`
        })
        const n = ag('q-notify')
        Wf(dg(), t).mount(n)
      }
    },
  },
  pg = { config: {}, plugins: { Notify: hg } }
const mg = '/'
async function gg({ app: e, router: t, store: n }, s) {
  let r = !1
  const i = (a) => {
      try {
        return t.resolve(a).href
      } catch {}
      return Object(a) === a ? null : a
    },
    o = (a) => {
      if (((r = !0), typeof a == 'string' && /^https?:\/\//.test(a))) {
        window.location.href = a
        return
      }
      const u = i(a)
      u !== null && (window.location.href = u)
    },
    l = window.location.href.replace(window.location.origin, '')
  for (let a = 0; r === !1 && a < s.length; a++)
    try {
      await s[a]({
        app: e,
        router: t,
        store: n,
        ssrContext: null,
        redirect: o,
        urlPath: l,
        publicPath: mg,
      })
    } catch (u) {
      if (u && u.url) {
        o(u.url)
        return
      }
      console.error('[Quasar] boot error:', u)
      return
    }
  r !== !0 && (e.use(t), e.mount('#q-app'))
}
Pm(Ja, pg).then((e) =>
  Promise.all([
    Tt(() => import('./i18n.7fd2de44.js'), []),
    Tt(() => import('./axios.2c0f95a0.js'), []),
    Tt(
      () => import('./equal.213cc415.js'),
      ['wo-assets/equal.213cc415.js', 'wo-assets/equal.22bb2993.css']
    ),
  ]).then((t) => {
    const n = t.map((s) => s.default).filter((s) => typeof s == 'function')
    gg(e, n)
  })
)
export {
  Ft as $,
  bg as A,
  Ra as B,
  Eg as C,
  Ja as D,
  Sg as E,
  Oe as F,
  Cg as G,
  la as H,
  Tc as I,
  $g as J,
  Au as K,
  Us as L,
  ec as M,
  _n as N,
  Yf as O,
  Lt as P,
  qn as Q,
  js as R,
  Mn as S,
  Hs as T,
  Nt as U,
  Ag as V,
  Lg as W,
  Am as X,
  Al as Y,
  Lf as Z,
  Ve as _,
  bt as a,
  Pg as a0,
  Tm as a1,
  kg as a2,
  kf as a3,
  Tg as a4,
  pr as a5,
  Ya as a6,
  $f as a7,
  Pf as a8,
  Ng as a9,
  Yu as aA,
  _r as aB,
  If as aC,
  In as aD,
  Dn as aE,
  wg as aF,
  Rg as aa,
  It as ab,
  yn as ac,
  ti as ad,
  $e as ae,
  jm as af,
  ig as ag,
  ju as ah,
  qu as ai,
  Jm as aj,
  Dg as ak,
  Hm as al,
  ms as am,
  Zm as an,
  Gm as ao,
  gs as ap,
  pt as aq,
  ag as ar,
  Ig as as,
  Og as at,
  si as au,
  ii as av,
  Rm as aw,
  Tf as ax,
  Vs as ay,
  Xu as az,
  Ea as b,
  G as c,
  Ae as d,
  Mg as e,
  ei as f,
  Bn as g,
  Q as h,
  we as i,
  ln as j,
  La as k,
  He as l,
  Tr as m,
  Fu as n,
  wa as o,
  Ws as p,
  Zn as q,
  We as r,
  xa as s,
  et as t,
  xg as u,
  fn as v,
  Gn as w,
  Pc as x,
  yg as y,
  _g as z,
}
