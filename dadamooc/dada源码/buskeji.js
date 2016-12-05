! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Vue = t()
}(this, function() {
    "use strict";

    function e(e) {
        return null == e ? "" : "object" == typeof e ? JSON.stringify(e, null, 2) : String(e)
    }

    function t(e) {
        var t = parseFloat(e, 10);
        return t || 0 === t ? t : e
    }

    function n(e, t) {
        for (var n = Object.create(null), r = e.split(","), i = 0; i < r.length; i++)
            n[r[i]] = !0;
        return t ? function(e) {
            return n[e.toLowerCase()]
        } : function(e) {
            return n[e]
        }
    }

    function r(e, t) {
        if (e.length) {
            var n = e.indexOf(t);
            if (n > -1)
                return e.splice(n, 1)
        }
    }

    function i(e, t) {
        return oi.call(e, t)
    }

    function o(e) {
        return "string" == typeof e || "number" == typeof e
    }

    function a(e) {
        var t = Object.create(null);
        return function(n) {
            var r = t[n];
            return r || (t[n] = e(n))
        }
    }

    function s(e, t) {
        function n(n) {
            var r = arguments.length;
            return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t)
        }
        return n._length = e.length,
            n
    }

    function c(e, t) {
        t = t || 0;
        for (var n = e.length - t, r = new Array(n); n--;)
            r[n] = e[n + t];
        return r
    }

    function u(e, t) {
        for (var n in t)
            e[n] = t[n];
        return e
    }

    function d(e) {
        return null !== e && "object" == typeof e
    }

    function l(e) {
        return li.call(e) === pi
    }

    function p(e) {
        for (var t = e[0] || {}, n = 1; n < e.length; n++)
            e[n] && u(t, e[n]);
        return t
    }

    function f() {}

    function h(e) {
        return e.reduce(function(e, t) {
            return e.concat(t.staticKeys || [])
        }, []).join(",")
    }

    function v(e) {
        var t = (e + "").charCodeAt(0);
        return 36 === t || 95 === t
    }

    function m(e, t, n, r) {
        Object.defineProperty(e, t, {
            value: n,
            enumerable: !!r,
            writable: !0,
            configurable: !0
        })
    }

    function g(e) {
        if (!vi.test(e)) {
            var t = function() {
                var t = e.split(".");
                return {
                    v: function(e) {
                        for (var n = 0; n < t.length; n++) {
                            if (!e)
                                return;
                            e = e[t[n]]
                        }
                        return e
                    }
                }
            }();
            return "object" == typeof t ? t.v : void 0
        }
    }

    function y(e) {
        Ai.target && Ei.push(Ai.target),
            Ai.target = e
    }

    function b() {
        Ai.target = Ei.pop()
    }

    function _() {
        Di.length = 0,
            $i = {},
            Oi = Ni = !1
    }

    function w() {
        for (Ni = !0,
            Di.sort(function(e, t) {
                return e.id - t.id
            }),
            ji = 0; ji < Di.length; ji++) {
            var e = Di[ji],
                t = e.id;
            $i[t] = null,
                e.run()
        }
        yi && hi.devtools && yi.emit("flush"),
            _()
    }

    function x(e) {
        var t = e.id;
        if (null == $i[t]) {
            if ($i[t] = !0,
                Ni) {
                for (var n = Di.length - 1; n >= 0 && Di[n].id > e.id;)
                    n--;
                Di.splice(Math.max(n, ji) + 1, 0, e)
            } else
                Di.push(e);
            Oi || (Oi = !0,
                Ti(w))
        }
    }

    function k(e, t) {
        var n = void 0,
            r = void 0;
        t || (t = Pi,
            t.clear());
        var i = Array.isArray(e),
            o = d(e);
        if ((i || o) && Object.isExtensible(e)) {
            if (e.__ob__) {
                var a = e.__ob__.dep.id;
                if (t.has(a))
                    return;
                t.add(a)
            }
            if (i)
                for (n = e.length; n--;)
                    k(e[n], t);
            else if (o)
                for (r = Object.keys(e),
                    n = r.length; n--;)
                    k(e[r[n]], t)
        }
    }

    function T(e, t) {
        e.__proto__ = t
    }

    function C(e, t, n) {
        for (var r = 0, i = n.length; i > r; r++) {
            var o = n[r];
            m(e, o, t[o])
        }
    }

    function S(e) {
        if (d(e)) {
            var t = void 0;
            return i(e, "__ob__") && e.__ob__ instanceof Hi ? t = e.__ob__ : qi.shouldConvert && !hi._isServer && (Array.isArray(e) || l(e)) && Object.isExtensible(e) && !e._isVue && (t = new Hi(e)),
                t
        }
    }

    function A(e, t, n) {
        var r = new Ai,
            i = Object.getOwnPropertyDescriptor(e, t);
        if (!i || i.configurable !== !1) {
            var o = i && i.get,
                a = i && i.set,
                s = S(n);
            Object.defineProperty(e, t, {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    var t = o ? o.call(e) : n;
                    if (Ai.target && (r.depend(),
                            s && s.dep.depend(),
                            Array.isArray(t)))
                        for (var i, a = 0, c = t.length; c > a; a++)
                            i = t[a],
                            i && i.__ob__ && i.__ob__.dep.depend();
                    return t
                },
                set: function(t) {
                    var i = o ? o.call(e) : n;
                    t !== i && (a ? a.call(e, t) : n = t,
                        s = S(t),
                        r.notify())
                }
            })
        }
    }

    function E(e, t, n) {
        if (Array.isArray(e))
            return e.splice(t, 1, n),
                n;
        if (i(e, t))
            return void(e[t] = n);
        var r = e.__ob__;
        return e._isVue || r && r.vmCount ? void 0 : r ? (A(r.value, t, n),
            r.dep.notify(),
            n) : void(e[t] = n)
    }

    function D(e, t) {
        var n = e.__ob__;
        e._isVue || n && n.vmCount || i(e, t) && (delete e[t],
            n && n.dep.notify())
    }

    function $(e) {
        e._watchers = [],
            O(e),
            N(e),
            j(e),
            I(e),
            P(e)
    }

    function O(e) {
        var t = e.$options.props,
            n = e.$options.propsData;
        if (t) {
            var r = e.$options._propKeys = Object.keys(t),
                i = !e.$parent;
            qi.shouldConvert = i;
            for (var o = function(i) {
                    var o = r[i];
                    A(e, o, St(o, t, n, e))
                }, a = 0; a < r.length; a++)
                o(a);
            qi.shouldConvert = !0
        }
    }

    function N(e) {
        var t = e.$options.data;
        t = e._data = "function" == typeof t ? t.call(e) : t || {},
            l(t) || (t = {});
        for (var n = Object.keys(t), r = e.$options.props, o = n.length; o--;)
            r && i(r, n[o]) || R(e, n[o]);
        S(t),
            t.__ob__ && t.__ob__.vmCount++
    }

    function j(e) {
        var t = e.$options.computed;
        if (t)
            for (var n in t) {
                var r = t[n];
                "function" == typeof r ? (Fi.get = L(r, e),
                        Fi.set = f) : (Fi.get = r.get ? r.cache !== !1 ? L(r.get, e) : s(r.get, e) : f,
                        Fi.set = r.set ? s(r.set, e) : f),
                    Object.defineProperty(e, n, Fi)
            }
    }

    function L(e, t) {
        var n = new Ii(t, e, f, {
            lazy: !0
        });
        return function() {
            return n.dirty && n.evaluate(),
                Ai.target && n.depend(),
                n.value
        }
    }

    function I(e) {
        var t = e.$options.methods;
        if (t)
            for (var n in t)
                e[n] = s(t[n], e)
    }

    function P(e) {
        var t = e.$options.watch;
        if (t)
            for (var n in t) {
                var r = t[n];
                if (Array.isArray(r))
                    for (var i = 0; i < r.length; i++)
                        M(e, n, r[i]);
                else
                    M(e, n, r)
            }
    }

    function M(e, t, n) {
        var r = void 0;
        l(n) && (r = n,
                n = n.handler),
            "string" == typeof n && (n = e[n]),
            e.$watch(t, n, r)
    }

    function B(e) {
        var t = {};
        t.get = function() {
                return this._data
            },
            Object.defineProperty(e.prototype, "$data", t),
            e.prototype.$set = E,
            e.prototype.$delete = D,
            e.prototype.$watch = function(e, t, n) {
                var r = this;
                n = n || {},
                    n.user = !0;
                var i = new Ii(r, e, t, n);
                return n.immediate && t.call(r, i.value),
                    function() {
                        i.teardown()
                    }
            }
    }

    function R(e, t) {
        v(t) || Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return e._data[t]
            },
            set: function(n) {
                e._data[t] = n
            }
        })
    }

    function q(e, t) {
        if (o(e))
            return [H(e)];
        if (Array.isArray(e)) {
            for (var n = [], r = 0, i = e.length; i > r; r++) {
                var a = e[r],
                    s = n[n.length - 1];
                Array.isArray(a) ? n.push.apply(n, q(a, t)) : o(a) ? s && s.text ? s.text += String(a) : "" !== a && n.push(H(a)) : a instanceof Wi && (a.text && s && s.text ? s.text += a.text : (t && F(a, t),
                    n.push(a)))
            }
            return n
        }
    }

    function H(e) {
        return new Wi(void 0, void 0, void 0, String(e))
    }

    function F(e, t) {
        if (e.tag && !e.ns && (e.ns = t,
                e.children))
            for (var n = 0, r = e.children.length; r > n; n++)
                F(e.children[n], t)
    }

    function W(e) {
        return e && e.filter(function(e) {
            return e && e.componentOptions
        })[0]
    }

    function U(e, t, n) {
        var r = e[t];
        e[t] = r ? function() {
            r.apply(this, arguments),
                n.apply(this, arguments)
        } : n
    }

    function J(e, t, n, r) {
        var i = void 0,
            o = void 0,
            a = void 0,
            s = void 0,
            c = void 0,
            u = void 0;
        for (i in e)
            if (o = e[i],
                a = t[i],
                o)
                if (a)
                    if (Array.isArray(a)) {
                        a.length = o.length;
                        for (var d = 0; d < a.length; d++)
                            a[d] = o[d];
                        e[i] = a
                    } else
                        a.fn = o,
                        e[i] = a;
        else
            u = "!" === i.charAt(0),
            c = u ? i.slice(1) : i,
            Array.isArray(o) ? n(c, o.invoker = G(o), u) : (s = o,
                o = e[i] = {},
                o.fn = s,
                n(c, o.invoker = z(o), u));
        for (i in t)
            e[i] || (c = "!" === i.charAt(0) ? i.slice(1) : i,
                r(c, t[i].invoker))
    }

    function G(e) {
        return function(t) {
            for (var n = 1 === arguments.length, r = 0; r < e.length; r++)
                n ? e[r](t) : e[r].apply(null, arguments)
        }
    }

    function z(e) {
        return function(t) {
            var n = 1 === arguments.length;
            n ? e.fn(t) : e.fn.apply(null, arguments)
        }
    }

    function V(e) {
        var t = e.$options,
            n = t.parent;
        if (n && !t.abstract) {
            for (; n.$options.abstract && n.$parent;)
                n = n.$parent;
            n.$children.push(e)
        }
        e.$parent = n,
            e.$root = n ? n.$root : e,
            e.$children = [],
            e.$refs = {},
            e._watcher = null,
            e._inactive = !1,
            e._isMounted = !1,
            e._isDestroyed = !1,
            e._isBeingDestroyed = !1
    }

    function K(e) {
        e.prototype._mount = function(e, t) {
                var n = this;
                return n.$el = e,
                    n.$options.render || (n.$options.render = Ui),
                    X(n, "beforeMount"),
                    n._watcher = new Ii(n, function() {
                        n._update(n._render(), t)
                    }, f),
                    t = !1,
                    n.$root === n && (n._isMounted = !0,
                        X(n, "mounted")),
                    n
            },
            e.prototype._update = function(e, t) {
                var n = this;
                n._isMounted && X(n, "beforeUpdate");
                var r = n.$el,
                    i = Ji;
                Ji = n;
                var o = n._vnode;
                n._vnode = e,
                    n.$el = o ? n.__patch__(o, e) : n.__patch__(n.$el, e, t),
                    Ji = i,
                    r && (r.__vue__ = null),
                    n.$el && (n.$el.__vue__ = n),
                    n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el),
                    n._isMounted && X(n, "updated")
            },
            e.prototype._updateFromParent = function(e, t, n, r) {
                var i = this,
                    o = !(!i.$options._renderChildren && !r);
                if (i.$options._parentVnode = n,
                    i.$options._renderChildren = r,
                    e && i.$options.props) {
                    qi.shouldConvert = !1;
                    for (var a = i.$options._propKeys || [], s = 0; s < a.length; s++) {
                        var c = a[s];
                        i[c] = St(c, i.$options.props, e, i)
                    }
                    qi.shouldConvert = !0
                }
                if (t) {
                    var u = i.$options._parentListeners;
                    i.$options._parentListeners = t,
                        i._updateListeners(t, u)
                }
                o && (i.$slots = ft(r),
                    i.$forceUpdate())
            },
            e.prototype.$forceUpdate = function() {
                var e = this;
                e._watcher && e._watcher.update()
            },
            e.prototype.$destroy = function() {
                var e = this;
                if (!e._isBeingDestroyed) {
                    X(e, "beforeDestroy"),
                        e._isBeingDestroyed = !0;
                    var t = e.$parent;
                    !t || t._isBeingDestroyed || e.$options.abstract || r(t.$children, e),
                        e._watcher && e._watcher.teardown();
                    for (var n = e._watchers.length; n--;)
                        e._watchers[n].teardown();
                    e._data.__ob__ && e._data.__ob__.vmCount--,
                        e._isDestroyed = !0,
                        X(e, "destroyed"),
                        e.$off(),
                        e.$el && (e.$el.__vue__ = null)
                }
            }
    }

    function X(e, t) {
        var n = e.$options[t];
        if (n)
            for (var r = 0, i = n.length; i > r; r++)
                n[r].call(e);
        e.$emit("hook:" + t)
    }

    function Q(e, t, n, r, i) {
        if (e && (d(e) && (e = gt.extend(e)),
                "function" == typeof e)) {
            if (!e.cid)
                if (e.resolved)
                    e = e.resolved;
                else if (e = it(e, function() {
                    n.$forceUpdate()
                }), !e)
                return;
            t = t || {};
            var o = ot(t, e);
            if (e.options.functional)
                return Y(e, o, t, n, r);
            var a = t.on;
            t.on = t.nativeOn,
                e.options.abstract && (t = {}),
                st(t);
            var s = e.options.name || i,
                c = new Wi("vue-component-" + e.cid + (s ? "-" + s : ""), t, void 0, void 0, void 0, void 0, n, {
                    Ctor: e,
                    propsData: o,
                    listeners: a,
                    tag: i,
                    children: r
                });
            return c
        }
    }

    function Y(e, t, n, r, i) {
        var o = {},
            a = e.options.props;
        if (a)
            for (var s in a)
                o[s] = St(s, a, t);
        return e.options.render.call(null, r.$createElement, {
            props: o,
            data: n,
            parent: r,
            children: q(i),
            slots: function() {
                return ft(i)
            }
        })
    }

    function Z(e, t) {
        var n = e.componentOptions,
            r = {
                _isComponent: !0,
                parent: t,
                propsData: n.propsData,
                _componentTag: n.tag,
                _parentVnode: e,
                _parentListeners: n.listeners,
                _renderChildren: n.children
            },
            i = e.data.inlineTemplate;
        return i && (r.render = i.render,
                r.staticRenderFns = i.staticRenderFns),
            new n.Ctor(r)
    }

    function et(e, t) {
        if (!e.child || e.child._isDestroyed) {
            var n = e.child = Z(e, Ji);
            n.$mount(t ? e.elm : void 0, t)
        }
    }

    function tt(e, t) {
        var n = t.componentOptions,
            r = t.child = e.child;
        r._updateFromParent(n.propsData, n.listeners, t, n.children)
    }

    function nt(e) {
        e.child._isMounted || (e.child._isMounted = !0,
                X(e.child, "mounted")),
            e.data.keepAlive && (e.child._inactive = !1,
                X(e.child, "activated"))
    }

    function rt(e) {
        e.child._isDestroyed || (e.data.keepAlive ? (e.child._inactive = !0,
            X(e.child, "deactivated")) : e.child.$destroy())
    }

    function it(e, t) {
        if (e.requested)
            e.pendingCallbacks.push(t);
        else {
            var n = function() {
                e.requested = !0;
                var n = e.pendingCallbacks = [t],
                    r = !0;
                return e(function(t) {
                        if (d(t) && (t = gt.extend(t)),
                            e.resolved = t, !r)
                            for (var i = 0, o = n.length; o > i; i++)
                                n[i](t)
                    }, function() {}),
                    r = !1, {
                        v: e.resolved
                    }
            }();
            if ("object" == typeof n)
                return n.v
        }
    }

    function ot(e, t) {
        var n = t.options.props;
        if (n) {
            var r = {},
                i = e.attrs,
                o = e.props,
                a = e.domProps;
            if (i || o || a)
                for (var s in n) {
                    var c = di(s);
                    at(r, o, s, c, !0) || at(r, i, s, c) || at(r, a, s, c)
                }
            return r
        }
    }

    function at(e, t, n, r, o) {
        if (t) {
            if (i(t, n))
                return e[n] = t[n],
                    o || delete t[n], !0;
            if (i(t, r))
                return e[n] = t[r],
                    o || delete t[r], !0
        }
        return !1
    }

    function st(e) {
        e.hook || (e.hook = {});
        for (var t = 0; t < zi.length; t++) {
            var n = zi[t],
                r = e.hook[n],
                i = Gi[n];
            e.hook[n] = r ? ct(i, r) : i
        }
    }

    function ct(e, t) {
        return function(n, r) {
            e(n, r),
                t(n, r)
        }
    }

    function ut(e, t, n) {
        return t && (Array.isArray(t) || "object" != typeof t) && (n = t,
                t = void 0),
            dt(this._self, e, t, n)
    }

    function dt(e, t, n, r) {
        if (!n || !n.__ob__) {
            if (!t)
                return Ui();
            if ("string" == typeof t) {
                var i = void 0,
                    o = hi.getTagNamespace(t);
                return hi.isReservedTag(t) ? new Wi(t, n, q(r, o), void 0, void 0, o, e) : (i = Ct(e.$options, "components", t)) ? Q(i, n, e, r, t) : new Wi(t, n, q(r, o), void 0, void 0, o, e)
            }
            return Q(t, n, e, r)
        }
    }

    function lt(e) {
        e.$vnode = null,
            e._vnode = null,
            e._staticTrees = null,
            e.$slots = ft(e.$options._renderChildren),
            e.$createElement = s(ut, e),
            e.$options.el && e.$mount(e.$options.el)
    }

    function pt(n) {
        n.prototype.$nextTick = function(e) {
                Ti(e, this)
            },
            n.prototype._render = function() {
                var e = this,
                    t = e.$options,
                    n = t.render,
                    r = t.staticRenderFns,
                    i = t._parentVnode;
                r && !e._staticTrees && (e._staticTrees = []),
                    e.$vnode = i;
                var o = void 0;
                try {
                    o = n.call(e._renderProxy, e.$createElement)
                } catch (t) {
                    if (hi.errorHandler)
                        hi.errorHandler.call(null, t, e);
                    else {
                        if (hi._isServer)
                            throw t;
                        setTimeout(function() {
                            throw t
                        }, 0)
                    }
                    o = e._vnode
                }
                return o instanceof Wi || (o = Ui()),
                    o.parent = i,
                    o
            },
            n.prototype._h = ut,
            n.prototype._s = e,
            n.prototype._n = t,
            n.prototype._m = function(e, t) {
                var n = this._staticTrees[e];
                if (n && !t)
                    return n;
                if (n = this._staticTrees[e] = this.$options.staticRenderFns[e].call(this._renderProxy),
                    Array.isArray(n))
                    for (var r = 0; r < n.length; r++)
                        n[r].isStatic = !0,
                        n[r].key = "__static__" + e + "_" + r;
                else
                    n.isStatic = !0,
                    n.key = "__static__" + e;
                return n
            };
        var r = function(e) {
            return e
        };
        n.prototype._f = function(e) {
                return Ct(this.$options, "filters", e, !0) || r
            },
            n.prototype._l = function(e, t) {
                var n = void 0,
                    r = void 0,
                    i = void 0,
                    o = void 0,
                    a = void 0;
                if (Array.isArray(e))
                    for (n = new Array(e.length),
                        r = 0,
                        i = e.length; i > r; r++)
                        n[r] = t(e[r], r);
                else if ("number" == typeof e)
                    for (n = new Array(e),
                        r = 0; e > r; r++)
                        n[r] = t(r + 1, r);
                else if (d(e))
                    for (o = Object.keys(e),
                        n = new Array(o.length),
                        r = 0,
                        i = o.length; i > r; r++)
                        a = o[r],
                        n[r] = t(e[a], a, r);
                return n
            },
            n.prototype._b = function(e, t, n) {
                if (t && d(t)) {
                    Array.isArray(t) && (t = p(t));
                    var r = e.data;
                    for (var i in t)
                        if ("class" === i || "style" === i)
                            r[i] = t[i];
                        else {
                            var o = n || hi.mustUseProp(i) ? r.domProps || (r.domProps = {}) : r.attrs || (r.attrs = {});
                            o[i] = t[i]
                        }
                }
            },
            n.prototype._k = function(e) {
                return hi.keyCodes[e]
            }
    }

    function ft(e) {
        var t = {};
        if (!e)
            return t;
        for (var n = q(e) || [], r = [], i = void 0, o = void 0, a = 0, s = n.length; s > a; a++)
            if (o = n[a],
                o.data && (i = o.data.slot)) {
                delete o.data.slot;
                var c = t[i] || (t[i] = []);
                "template" === o.tag ? c.push.apply(c, o.children) : c.push(o)
            } else
                r.push(o);
        return !r.length || 1 === r.length && " " === r[0].text || (t.default = r),
            t
    }

    function ht(e) {
        e._events = Object.create(null);
        var t = e.$options._parentListeners,
            n = s(e.$on, e),
            r = s(e.$off, e);
        e._updateListeners = function(e, t) {
                J(e, t || {}, n, r)
            },
            t && e._updateListeners(t)
    }

    function vt(e) {
        e.prototype.$on = function(e, t) {
                var n = this;
                return (n._events[e] || (n._events[e] = [])).push(t),
                    n
            },
            e.prototype.$once = function(e, t) {
                function n() {
                    r.$off(e, n),
                        t.apply(r, arguments)
                }
                var r = this;
                return n.fn = t,
                    r.$on(e, n),
                    r
            },
            e.prototype.$off = function(e, t) {
                var n = this;
                if (!arguments.length)
                    return n._events = Object.create(null),
                        n;
                var r = n._events[e];
                if (!r)
                    return n;
                if (1 === arguments.length)
                    return n._events[e] = null,
                        n;
                for (var i = void 0, o = r.length; o--;)
                    if (i = r[o],
                        i === t || i.fn === t) {
                        r.splice(o, 1);
                        break
                    }
                return n
            },
            e.prototype.$emit = function(e) {
                var t = this,
                    n = t._events[e];
                if (n) {
                    n = n.length > 1 ? c(n) : n;
                    for (var r = c(arguments, 1), i = 0, o = n.length; o > i; i++)
                        n[i].apply(t, r)
                }
                return t
            }
    }

    function mt(e) {
        function t(e, t) {
            var r = e.$options = Object.create(n(e));
            r.parent = t.parent,
                r.propsData = t.propsData,
                r._parentVnode = t._parentVnode,
                r._parentListeners = t._parentListeners,
                r._renderChildren = t._renderChildren,
                r._componentTag = t._componentTag,
                t.render && (r.render = t.render,
                    r.staticRenderFns = t.staticRenderFns)
        }

        function n(e) {
            var t = e.constructor,
                n = t.options;
            if (t.super) {
                var r = t.super.options,
                    i = t.superOptions;
                r !== i && (t.superOptions = r,
                    n = t.options = Tt(r, t.extendOptions),
                    n.name && (n.components[n.name] = t))
            }
            return n
        }
        e.prototype._init = function(e) {
            var r = this;
            r._uid = Vi++,
                r._isVue = !0,
                e && e._isComponent ? t(r, e) : r.$options = Tt(n(r), e || {}, r),
                r._renderProxy = r,
                r._self = r,
                V(r),
                ht(r),
                X(r, "beforeCreate"),
                $(r),
                X(r, "created"),
                lt(r)
        }
    }

    function gt(e) {
        this._init(e)
    }

    function yt(e, t) {
        var n = void 0,
            r = void 0,
            o = void 0;
        for (n in t)
            r = e[n],
            o = t[n],
            i(e, n) ? d(r) && d(o) && yt(r, o) : E(e, n, o);
        return e
    }

    function bt(e, t) {
        return t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e
    }

    function _t(e, t) {
        var n = Object.create(e || null);
        return t ? u(n, t) : n
    }

    function wt(e) {
        if (e.components) {
            var t = e.components,
                n = void 0;
            for (var r in t) {
                var i = r.toLowerCase();
                ii(i) || hi.isReservedTag(i) || (n = t[r],
                    l(n) && (t[r] = gt.extend(n)))
            }
        }
    }

    function xt(e) {
        var t = e.props;
        if (t) {
            var n = {},
                r = void 0,
                i = void 0,
                o = void 0;
            if (Array.isArray(t))
                for (r = t.length; r--;)
                    i = t[r],
                    "string" == typeof i && (o = si(i),
                        n[o] = {
                            type: null
                        });
            else if (l(t))
                for (var a in t)
                    i = t[a],
                    o = si(a),
                    n[o] = l(i) ? i : {
                        type: i
                    };
            e.props = n
        }
    }

    function kt(e) {
        var t = e.directives;
        if (t)
            for (var n in t) {
                var r = t[n];
                "function" == typeof r && (t[n] = {
                    bind: r,
                    update: r
                })
            }
    }

    function Tt(e, t, n) {
        function r(r) {
            var i = Qi[r] || Yi;
            u[r] = i(e[r], t[r], n, r)
        }
        wt(t),
            xt(t),
            kt(t);
        var o = t.extends;
        if (o && (e = "function" == typeof o ? Tt(e, o.options, n) : Tt(e, o, n)),
            t.mixins)
            for (var a = 0, s = t.mixins.length; s > a; a++) {
                var c = t.mixins[a];
                c.prototype instanceof gt && (c = c.options),
                    e = Tt(e, c, n)
            }
        var u = {},
            d = void 0;
        for (d in e)
            r(d);
        for (d in t)
            i(e, d) || r(d);
        return u
    }

    function Ct(e, t, n) {
        if ("string" == typeof n) {
            var r = e[t],
                i = r[n] || r[si(n)] || r[ci(si(n))];
            return i
        }
    }

    function St(e, t, n, r) {
        if (n) {
            var o = t[e],
                a = !i(n, e),
                s = n[e];
            if ("Boolean" === Et(o.type) && (a && !i(o, "default") ? s = !1 : "" !== s && s !== di(e) || (s = !0)),
                void 0 === s) {
                s = At(r, o, e);
                var c = qi.shouldConvert;
                qi.shouldConvert = !0,
                    S(s),
                    qi.shouldConvert = c
            }
            return s
        }
    }

    function At(e, t) {
        if (i(t, "default")) {
            var n = t.default;
            return d(n),
                "function" == typeof n && t.type !== Function ? n.call(e) : n
        }
    }

    function Et(e) {
        var t = e && e.toString().match(/^\s*function (\w+)/);
        return t && t[1]
    }

    function Dt(e) {
        e.use = function(e) {
            if (!e.installed) {
                var t = c(arguments, 1);
                return t.unshift(this),
                    "function" == typeof e.install ? e.install.apply(e, t) : e.apply(null, t),
                    e.installed = !0,
                    this
            }
        }
    }

    function $t(e) {
        e.mixin = function(t) {
            e.options = Tt(e.options, t)
        }
    }

    function Ot(e) {
        e.cid = 0;
        var t = 1;
        e.extend = function(e) {
            e = e || {};
            var n = this,
                r = 0 === n.cid;
            if (r && e._Ctor)
                return e._Ctor;
            var i = e.name || n.options.name,
                o = function(e) {
                    this._init(e)
                };
            return o.prototype = Object.create(n.prototype),
                o.prototype.constructor = o,
                o.cid = t++,
                o.options = Tt(n.options, e),
                o.super = n,
                o.extend = n.extend,
                hi._assetTypes.forEach(function(e) {
                    o[e] = n[e]
                }),
                i && (o.options.components[i] = o),
                o.superOptions = n.options,
                o.extendOptions = e,
                r && (e._Ctor = o),
                o
        }
    }

    function Nt(e) {
        hi._assetTypes.forEach(function(t) {
            e[t] = function(n, r) {
                return r ? ("component" === t && l(r) && (r.name = r.name || n,
                        r = e.extend(r)),
                    "directive" === t && "function" == typeof r && (r = {
                        bind: r,
                        update: r
                    }),
                    this.options[t + "s"][n] = r,
                    r) : this.options[t + "s"][n]
            }
        })
    }

    function jt(e) {
        var t = {};
        t.get = function() {
                return hi
            },
            Object.defineProperty(e, "config", t),
            e.util = Zi,
            e.set = E,
            e.delete = D,
            e.nextTick = Ti,
            e.options = Object.create(null),
            hi._assetTypes.forEach(function(t) {
                e.options[t + "s"] = Object.create(null)
            }),
            u(e.options.components, to),
            Dt(e),
            $t(e),
            Ot(e),
            Nt(e)
    }

    function Lt(e) {
        for (var t = e.data, n = e, r = e; r.child;)
            r = r.child._vnode,
            r.data && (t = It(r.data, t));
        for (; n = n.parent;)
            n.data && (t = It(t, n.data));
        return Pt(t)
    }

    function It(e, t) {
        return {
            staticClass: Mt(e.staticClass, t.staticClass),
            "class": e.class ? [e.class, t.class] : t.class
        }
    }

    function Pt(e) {
        var t = e.class,
            n = e.staticClass;
        return n || t ? Mt(n, Bt(t)) : ""
    }

    function Mt(e, t) {
        return e ? t ? e + " " + t : e : t || ""
    }

    function Bt(e) {
        var t = "";
        if (!e)
            return t;
        if ("string" == typeof e)
            return e;
        if (Array.isArray(e)) {
            for (var n = void 0, r = 0, i = e.length; i > r; r++)
                e[r] && (n = Bt(e[r])) && (t += n + " ");
            return t.slice(0, -1)
        }
        if (d(e)) {
            for (var o in e)
                e[o] && (t += o + " ");
            return t.slice(0, -1)
        }
        return t
    }

    function Rt(e) {
        return vo(e) ? "svg" : "math" === e ? "math" : void 0
    }

    function qt(e) {
        if (!gi)
            return !0;
        if (go(e))
            return !1;
        if (e = e.toLowerCase(),
            null != yo[e])
            return yo[e];
        var t = document.createElement(e);
        return yo[e] = e.indexOf("-") > -1 ? t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : /HTMLUnknownElement/.test(t.toString())
    }

    function Ht(e) {
        return "string" != typeof e || (e = document.querySelector(e)) ? e : document.createElement("div")
    }

    function Ft(e) {
        return document.createElement(e)
    }

    function Wt(e, t) {
        return document.createElementNS(uo[e], t)
    }

    function Ut(e) {
        return document.createTextNode(e)
    }

    function Jt(e) {
        return document.createComment(e)
    }

    function Gt(e, t, n) {
        e.insertBefore(t, n)
    }

    function zt(e, t) {
        e.removeChild(t)
    }

    function Vt(e, t) {
        e.appendChild(t)
    }

    function Kt(e) {
        return e.parentNode
    }

    function Xt(e) {
        return e.nextSibling
    }

    function Qt(e) {
        return e.tagName
    }

    function Yt(e, t) {
        e.textContent = t
    }

    function Zt(e) {
        return e.childNodes
    }

    function en(e, t, n) {
        e.setAttribute(t, n)
    }

    function tn(e, t) {
        var n = e.data.ref;
        if (n) {
            var i = e.context,
                o = e.child || e.elm,
                a = i.$refs;
            t ? Array.isArray(a[n]) ? r(a[n], o) : a[n] === o && (a[n] = void 0) : e.data.refInFor ? Array.isArray(a[n]) ? a[n].push(o) : a[n] = [o] : a[n] = o
        }
    }

    function nn(e) {
        return null == e
    }

    function rn(e) {
        return null != e
    }

    function on(e, t) {
        return e.key === t.key && e.tag === t.tag && e.isComment === t.isComment && !e.data == !t.data
    }

    function an(e, t, n) {
        var r = void 0,
            i = void 0,
            o = {};
        for (r = t; n >= r; ++r)
            i = e[r].key,
            rn(i) && (o[i] = r);
        return o
    }

    function sn(e) {
        function t(e) {
            return new Wi(x.tagName(e).toLowerCase(), {}, [], void 0, e)
        }

        function n(e, t) {
            function n() {
                0 === --n.listeners && r(e)
            }
            return n.listeners = t,
                n
        }

        function r(e) {
            var t = x.parentNode(e);
            x.removeChild(t, e)
        }

        function i(e, t, n) {
            var r = void 0,
                a = void 0,
                d = e.data;
            if (e.isRootInsert = !n,
                rn(d) && (rn(r = d.hook) && rn(r = r.init) && r(e),
                    rn(r = e.child)))
                return c(e, t),
                    e.elm;
            var l = e.children,
                p = e.tag;
            if (rn(p)) {
                if (a = e.elm = e.ns ? x.createElementNS(e.ns, p) : x.createElement(p),
                    u(e),
                    Array.isArray(l))
                    for (r = 0; r < l.length; ++r)
                        x.appendChild(a, i(l[r], t, !0));
                else
                    o(e.text) && x.appendChild(a, x.createTextNode(e.text));
                rn(d) && s(e, t)
            } else
                a = e.elm = e.isComment ? x.createComment(e.text) : x.createTextNode(e.text);
            return e.elm
        }

        function a(e) {
            for (; e.child;)
                e = e.child._vnode;
            return rn(e.tag)
        }

        function s(e, t) {
            for (var n = 0; n < _.create.length; ++n)
                _.create[n](Ao, e);
            y = e.data.hook,
                rn(y) && (y.create && y.create(Ao, e),
                    y.insert && t.push(e))
        }

        function c(e, t) {
            e.data.pendingInsert && t.push.apply(t, e.data.pendingInsert),
                e.elm = e.child.$el,
                a(e) ? (s(e, t),
                    u(e)) : (tn(e),
                    t.push(e))
        }

        function u(e) {
            var t = void 0;
            rn(t = e.context) && rn(t = t.$options._scopeId) && x.setAttribute(e.elm, t, ""),
                rn(t = Ji) && t !== e.context && rn(t = t.$options._scopeId) && x.setAttribute(e.elm, t, "")
        }

        function d(e, t, n, r, o, a) {
            for (; o >= r; ++r)
                x.insertBefore(e, i(n[r], a), t)
        }

        function l(e) {
            var t = void 0,
                n = void 0,
                r = e.data;
            if (rn(r))
                for (rn(t = r.hook) && rn(t = t.destroy) && t(e),
                    t = 0; t < _.destroy.length; ++t)
                    _.destroy[t](e);
            if (rn(t = e.child) && !r.keepAlive && l(t._vnode),
                rn(t = e.children))
                for (n = 0; n < e.children.length; ++n)
                    l(e.children[n])
        }

        function p(e, t, n, r) {
            for (; r >= n; ++n) {
                var i = t[n];
                rn(i) && (rn(i.tag) ? (f(i),
                    l(i)) : x.removeChild(e, i.elm))
            }
        }

        function f(e, t) {
            if (t || rn(e.data)) {
                var i = _.remove.length + 1;
                for (t ? t.listeners += i : t = n(e.elm, i),
                    rn(y = e.child) && rn(y = y._vnode) && rn(y.data) && f(y, t),
                    y = 0; y < _.remove.length; ++y)
                    _.remove[y](e, t);
                rn(y = e.data.hook) && rn(y = y.remove) ? y(e, t) : t()
            } else
                r(e.elm)
        }

        function h(e, t, n, r, o) {
            for (var a = 0, s = 0, c = t.length - 1, u = t[0], l = t[c], f = n.length - 1, h = n[0], m = n[f], g = void 0, y = void 0, b = void 0, _ = void 0, w = !o; c >= a && f >= s;)
                nn(u) ? u = t[++a] : nn(l) ? l = t[--c] : on(u, h) ? (v(u, h, r),
                    u = t[++a],
                    h = n[++s]) : on(l, m) ? (v(l, m, r),
                    l = t[--c],
                    m = n[--f]) : on(u, m) ? (v(u, m, r),
                    w && x.insertBefore(e, u.elm, x.nextSibling(l.elm)),
                    u = t[++a],
                    m = n[--f]) : on(l, h) ? (v(l, h, r),
                    w && x.insertBefore(e, l.elm, u.elm),
                    l = t[--c],
                    h = n[++s]) : (nn(g) && (g = an(t, a, c)),
                    y = rn(h.key) ? g[h.key] : null,
                    nn(y) ? (x.insertBefore(e, i(h, r), u.elm),
                        h = n[++s]) : (b = t[y],
                        b.tag !== h.tag ? (x.insertBefore(e, i(h, r), u.elm),
                            h = n[++s]) : (v(b, h, r),
                            t[y] = void 0,
                            w && x.insertBefore(e, h.elm, u.elm),
                            h = n[++s])));
            a > c ? (_ = nn(n[f + 1]) ? null : n[f + 1].elm,
                d(e, _, n, s, f, r)) : s > f && p(e, t, a, c)
        }

        function v(e, t, n, r) {
            if (e !== t) {
                if (t.isStatic && e.isStatic && t.key === e.key)
                    return void(t.elm = e.elm);
                var i = void 0,
                    o = void 0,
                    s = rn(i = t.data);
                s && rn(o = i.hook) && rn(i = o.prepatch) && i(e, t);
                var c = t.elm = e.elm,
                    u = e.children,
                    l = t.children;
                if (s && a(t)) {
                    for (i = 0; i < _.update.length; ++i)
                        _.update[i](e, t);
                    rn(o) && rn(i = o.update) && i(e, t)
                }
                if (nn(t.text) ? rn(u) && rn(l) ? u !== l && h(c, u, l, n, r) : rn(l) ? (rn(e.text) && x.setTextContent(c, ""),
                        d(c, null, l, 0, l.length - 1, n)) : rn(u) ? p(c, u, 0, u.length - 1) : rn(e.text) && x.setTextContent(c, "") : e.text !== t.text && x.setTextContent(c, t.text),
                    s) {
                    for (i = 0; i < _.postpatch.length; ++i)
                        _.postpatch[i](e, t);
                    rn(o) && rn(i = o.postpatch) && i(e, t)
                }
            }
        }

        function m(e, t, n) {
            if (n && e.parent)
                e.parent.data.pendingInsert = t;
            else
                for (var r = 0; r < t.length; ++r)
                    t[r].data.hook.insert(t[r])
        }

        function g(e, t, n) {
            t.elm = e;
            var r = t.tag,
                i = t.data,
                o = t.children;
            if (rn(i) && (rn(y = i.hook) && rn(y = y.init) && y(t, !0),
                    rn(y = t.child)))
                return c(t, n), !0;
            if (rn(r)) {
                if (rn(o)) {
                    var a = x.childNodes(e),
                        u = !0;
                    if (a.length !== o.length)
                        u = !1;
                    else
                        for (var d = 0; d < o.length; d++)
                            if (!g(a[d], o[d], n)) {
                                u = !1;
                                break
                            }
                    if (!u)
                        return !1
                }
                rn(i) && s(t, n)
            }
            return !0
        }
        var y = void 0,
            b = void 0,
            _ = {},
            w = e.modules,
            x = e.nodeOps;
        for (y = 0; y < Eo.length; ++y)
            for (_[Eo[y]] = [],
                b = 0; b < w.length; ++b)
                void 0 !== w[b][Eo[y]] && _[Eo[y]].push(w[b][Eo[y]]);
        return function(e, n, r, o) {
            var s = void 0,
                c = void 0,
                u = !1,
                d = [];
            if (e) {
                var f = rn(e.nodeType);
                if (!f && on(e, n))
                    v(e, n, d, o);
                else {
                    if (f) {
                        if (1 === e.nodeType && e.hasAttribute("server-rendered") && (e.removeAttribute("server-rendered"),
                                r = !0),
                            r && g(e, n, d))
                            return m(n, d, !0),
                                e;
                        e = t(e)
                    }
                    if (s = e.elm,
                        c = x.parentNode(s),
                        i(n, d),
                        n.parent && (n.parent.elm = n.elm,
                            a(n)))
                        for (var h = 0; h < _.create.length; ++h)
                            _.create[h](Ao, n.parent);
                    null !== c ? (x.insertBefore(c, n.elm, x.nextSibling(s)),
                        p(c, [e], 0, 0)) : rn(e.tag) && l(e)
                }
            } else
                u = !0,
                i(n, d);
            return m(n, d, u),
                n.elm
        }
    }

    function cn(e, t, n) {
        var r = t.data.directives;
        if (r)
            for (var i = e.data.directives, o = "update" === n, a = 0; a < r.length; a++) {
                var s = r[a],
                    c = Ct(t.context.$options, "directives", s.name, !0),
                    u = c && c[n];
                u && (o && i && (s.oldValue = i[a].value),
                    s.modifiers || (s.modifiers = $o),
                    u(t.elm, s, t, e))
            }
    }

    function un(e, t) {
        if (e.data.attrs || t.data.attrs) {
            var n = void 0,
                r = void 0,
                i = void 0,
                o = t.elm,
                a = e.data.attrs || {},
                s = t.data.attrs || {};
            s.__ob__ && (s = t.data.attrs = u({}, s));
            for (n in s)
                r = s[n],
                i = a[n],
                i !== r && dn(o, n, r);
            for (n in a)
                null == s[n] && (ao(n) ? o.removeAttributeNS(oo, so(n)) : ro(n) || o.removeAttribute(n))
        }
    }

    function dn(e, t, n) {
        io(t) ? co(n) ? e.removeAttribute(t) : e.setAttribute(t, t) : ro(t) ? e.setAttribute(t, co(n) || "false" === n ? "false" : "true") : ao(t) ? co(n) ? e.removeAttributeNS(oo, so(t)) : e.setAttributeNS(oo, t, n) : co(n) ? e.removeAttribute(t) : e.setAttribute(t, n)
    }

    function ln(e, t) {
        var n = t.elm,
            r = t.data,
            i = e.data;
        if (r.staticClass || r.class || i && (i.staticClass || i.class)) {
            var o = Lt(t),
                a = n._transitionClasses;
            a && (o = Mt(o, Bt(a))),
                o !== n._prevClass && (n.setAttribute("class", o),
                    n._prevClass = o)
        }
    }

    function pn(e, t) {
        if (e.data.on || t.data.on) {
            var n = t.data.on || {},
                r = e.data.on || {},
                i = t.elm._v_add || (t.elm._v_add = function(e, n, r) {
                    t.elm.addEventListener(e, n, r)
                }),
                o = t.elm._v_remove || (t.elm._v_remove = function(e, n) {
                    t.elm.removeEventListener(e, n)
                });
            J(n, r, i, o)
        }
    }

    function fn(e, t) {
        if (e.data.domProps || t.data.domProps) {
            var n = void 0,
                r = void 0,
                i = t.elm,
                o = e.data.domProps || {},
                a = t.data.domProps || {};
            a.__ob__ && (a = t.data.domProps = u({}, a));
            for (n in o)
                null == a[n] && (i[n] = void 0);
            for (n in a)
                if ("textContent" !== n && "innerHTML" !== n || !t.children || (t.children.length = 0),
                    r = a[n],
                    "value" === n) {
                    i._value = r;
                    var s = null == r ? "" : String(r);
                    i.value !== s && (i.value = s)
                } else
                    i[n] = r
        }
    }

    function hn(e, t) {
        if (e.data && e.data.style || t.data.style) {
            var n = void 0,
                r = void 0,
                i = t.elm,
                o = e.data.style || {},
                a = t.data.style || {};
            if ("string" == typeof a)
                return void(i.style.cssText = a);
            var s = a.__ob__;
            Array.isArray(a) && (a = t.data.style = p(a)),
                s && (a = t.data.style = u({}, a));
            for (r in o)
                a[r] || (i.style[Bo(r)] = "");
            for (r in a)
                n = a[r],
                n !== o[r] && (i.style[Bo(r)] = n || "")
        }
    }

    function vn(e, t) {
        if (e.classList)
            t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function(t) {
                return e.classList.add(t)
            }) : e.classList.add(t);
        else {
            var n = " " + e.getAttribute("class") + " ";
            n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim())
        }
    }

    function mn(e, t) {
        if (e.classList)
            t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function(t) {
                return e.classList.remove(t)
            }) : e.classList.remove(t);
        else {
            for (var n = " " + e.getAttribute("class") + " ", r = " " + t + " "; n.indexOf(r) >= 0;)
                n = n.replace(r, " ");
            e.setAttribute("class", n.trim())
        }
    }

    function gn(e) {
        zo(function() {
            zo(e)
        })
    }

    function yn(e, t) {
        (e._transitionClasses || (e._transitionClasses = [])).push(t),
            vn(e, t)
    }

    function bn(e, t) {
        e._transitionClasses && r(e._transitionClasses, t),
            mn(e, t)
    }

    function _n(e, t, n) {
        var r = wn(e, t),
            i = r.type,
            o = r.timeout,
            a = r.propCount;
        if (!i)
            return n();
        var s = i === Ho ? Uo : Go,
            c = 0,
            u = function() {
                e.removeEventListener(s, d),
                    n()
            },
            d = function() {
                ++c >= a && u()
            };
        setTimeout(function() {
                a > c && u()
            }, o + 1),
            e.addEventListener(s, d)
    }

    function wn(e, t) {
        var n = window.getComputedStyle(e),
            r = n[Wo + "Delay"].split(", "),
            i = n[Wo + "Duration"].split(", "),
            o = xn(r, i),
            a = n[Jo + "Delay"].split(", "),
            s = n[Jo + "Duration"].split(", "),
            c = xn(a, s),
            u = void 0,
            d = 0,
            l = 0;
        t === Ho ? o > 0 && (u = Ho,
            d = o,
            l = i.length) : t === Fo ? c > 0 && (u = Fo,
            d = c,
            l = s.length) : (d = Math.max(o, c),
            u = d > 0 ? o > c ? Ho : Fo : null,
            l = u ? u === Ho ? i.length : s.length : 0);
        var p = u === Ho && Vo.test(n[Wo + "Property"]);
        return {
            type: u,
            timeout: d,
            propCount: l,
            hasTransform: p
        }
    }

    function xn(e, t) {
        return Math.max.apply(null, t.map(function(t, n) {
            return kn(t) + kn(e[n])
        }))
    }

    function kn(e) {
        return 1e3 * Number(e.slice(0, -1))
    }

    function Tn(e) {
        var t = e.elm;
        t._leaveCb && (t._leaveCb.cancelled = !0,
            t._leaveCb());
        var n = Sn(e.data.transition);
        if (n && !t._enterCb && 1 === t.nodeType) {
            var r = n.css,
                i = n.type,
                o = n.enterClass,
                a = n.enterActiveClass,
                s = n.appearClass,
                c = n.appearActiveClass,
                u = n.beforeEnter,
                d = n.enter,
                l = n.afterEnter,
                p = n.enterCancelled,
                f = n.beforeAppear,
                h = n.appear,
                v = n.afterAppear,
                m = n.appearCancelled,
                g = Ji.$vnode,
                y = g && g.parent ? g.parent.context : Ji,
                b = !y._isMounted || !e.isRootInsert;
            if (!b || h || "" === h) {
                var _ = b ? s : o,
                    w = b ? c : a,
                    x = b ? f || u : u,
                    k = b && "function" == typeof h ? h : d,
                    T = b ? v || l : l,
                    C = b ? m || p : p,
                    S = r !== !1 && !wo,
                    A = k && (k._length || k.length) > 1,
                    E = t._enterCb = An(function() {
                        S && bn(t, w),
                            E.cancelled ? (S && bn(t, _),
                                C && C(t)) : T && T(t),
                            t._enterCb = null
                    });
                if (!e.data.show) {
                    var D = e.data.hook || (e.data.hook = {});
                    D._transitionInsert = function() {
                            var n = t.parentNode,
                                r = n && n._pending && n._pending[e.key];
                            r && r.tag === e.tag && r.elm._leaveCb && r.elm._leaveCb(),
                                k && k(t, E)
                        },
                        e.data.transitionInjected || (e.data.transitionInjected = !0,
                            U(D, "insert", function() {
                                D._transitionInsert()
                            }))
                }
                x && x(t),
                    S && (yn(t, _),
                        yn(t, w),
                        gn(function() {
                            bn(t, _),
                                E.cancelled || A || _n(t, i, E)
                        })),
                    e.data.show && k && k(t, E),
                    S || A || E()
            }
        }
    }

    function Cn(e, t) {
        function n() {
            m.cancelled || (e.data.show || ((r.parentNode._pending || (r.parentNode._pending = {}))[e.key] = e),
                u && u(r),
                h && (yn(r, s),
                    yn(r, c),
                    gn(function() {
                        bn(r, s),
                            m.cancelled || v || _n(r, a, m)
                    })),
                d && d(r, m),
                h || v || m())
        }
        var r = e.elm;
        r._enterCb && (r._enterCb.cancelled = !0,
            r._enterCb());
        var i = Sn(e.data.transition);
        if (!i)
            return t();
        if (!r._leaveCb && 1 === r.nodeType) {
            var o = i.css,
                a = i.type,
                s = i.leaveClass,
                c = i.leaveActiveClass,
                u = i.beforeLeave,
                d = i.leave,
                l = i.afterLeave,
                p = i.leaveCancelled,
                f = i.delayLeave,
                h = o !== !1 && !wo,
                v = d && (d._length || d.length) > 1,
                m = r._leaveCb = An(function() {
                    r.parentNode && r.parentNode._pending && (r.parentNode._pending[e.key] = null),
                        h && bn(r, c),
                        m.cancelled ? (h && bn(r, s),
                            p && p(r)) : (t(),
                            l && l(r)),
                        r._leaveCb = null
                });
            f ? f(n) : n()
        }
    }

    function Sn(e) {
        if (e) {
            if ("object" == typeof e) {
                var t = {};
                return e.css !== !1 && u(t, Ko(e.name || "v")),
                    u(t, e),
                    t
            }
            return "string" == typeof e ? Ko(e) : void 0
        }
    }

    function An(e) {
        var t = !1;
        return function() {
            t || (t = !0,
                e())
        }
    }

    function En(e, t) {
        var n = t.value,
            r = e.multiple;
        if (r) {
            if (!Array.isArray(n))
                return
        } else
            e.selectedIndex = -1;
        for (var i = 0, o = e.options.length; o > i; i++) {
            var a = e.options[i];
            if (r)
                a.selected = n.indexOf($n(a)) > -1;
            else if ($n(a) === n) {
                e.selectedIndex = i;
                break
            }
        }
    }

    function Dn(e, t) {
        for (var n = 0, r = t.length; r > n; n++)
            if ($n(t[n]) === e)
                return !1;
        return !0
    }

    function $n(e) {
        return "_value" in e ? e._value : e.value || e.text
    }

    function On(e) {
        e.target.composing = !0
    }

    function Nn(e) {
        e.target.composing = !1,
            jn(e.target, "input")
    }

    function jn(e, t) {
        var n = document.createEvent("HTMLEvents");
        n.initEvent(t, !0, !0),
            e.dispatchEvent(n)
    }

    function Ln(e) {
        return !e.child || e.data && e.data.transition ? e : Ln(e.child._vnode)
    }

    function In(e) {
        var t = e && e.componentOptions;
        return t && t.Ctor.options.abstract ? In(W(t.children)) : e
    }

    function Pn(e) {
        var t = {},
            n = e.$options;
        for (var r in n.propsData)
            t[r] = e[r];
        var i = n._parentListeners;
        for (var o in i)
            t[si(o)] = i[o].fn;
        return t
    }

    function Mn(e, t) {
        return /\d-keep-alive$/.test(t.tag) ? e("keep-alive") : null
    }

    function Bn(e) {
        for (; e = e.parent;)
            if (e.data.transition)
                return !0
    }

    function Rn(e) {
        return ca.innerHTML = e,
            ca.textContent
    }

    function qn(e, t) {
        return t && (e = e.replace(ka, "<").replace(Ta, ">")),
            e.replace(xa, "&").replace(Ca, '"')
    }

    function Hn(e, t) {
        function n(t) {
            l += t,
                e = e.substring(t)
        }

        function r() {
            var t = e.match(va);
            if (t) {
                var r = {
                    tagName: t[1],
                    attrs: [],
                    start: l
                };
                n(t[0].length);
                for (var i = void 0, o = void 0; !(i = e.match(ma)) && (o = e.match(pa));)
                    n(o[0].length),
                    r.attrs.push(o);
                if (i)
                    return r.unarySlash = i[1],
                        n(i[0].length),
                        r.end = l,
                        r
            }
        }

        function i(e) {
            var n = e.tagName,
                r = e.unarySlash;
            s && ("p" === f && ho(n) && o("", f),
                fo(n) && f === n && o("", n));
            for (var i = c(n) || "html" === n && "head" === f || !!r, l = e.attrs.length, p = new Array(l), h = 0; l > h; h++) {
                var v = e.attrs[h];
                ba && -1 === v[0].indexOf('""') && ("" === v[3] && delete v[3],
                    "" === v[4] && delete v[4],
                    "" === v[5] && delete v[5]);
                var m = v[3] || v[4] || v[5] || "";
                p[h] = {
                    name: v[1],
                    value: u ? qn(m, d) : m
                }
            }
            i || (a.push({
                        tag: n,
                        attrs: p
                    }),
                    f = n,
                    r = ""),
                t.start && t.start(n, p, i, e.start, e.end)
        }

        function o(e, n, r, i) {
            var o = void 0;
            if (null == r && (r = l),
                null == i && (i = l),
                n) {
                var s = n.toLowerCase();
                for (o = a.length - 1; o >= 0 && a[o].tag.toLowerCase() !== s; o--)
                ;
            } else
                o = 0;
            if (o >= 0) {
                for (var c = a.length - 1; c >= o; c--)
                    t.end && t.end(a[c].tag, r, i);
                a.length = o,
                    f = o && a[o - 1].tag
            } else
                "br" === n.toLowerCase() ? t.start && t.start(n, [], !0, r, i) : "p" === n.toLowerCase() && (t.start && t.start(n, [], !1, r, i),
                    t.end && t.end(n, r, i))
        }
        for (var a = [], s = t.expectHTML, c = t.isUnaryTag || fi, u = t.isFromDOM, d = t.shouldDecodeTags, l = 0, p = void 0, f = void 0; e;) {
            if (p = e,
                f && _a(f)) {
                var h = f.toLowerCase(),
                    v = wa[h] || (wa[h] = new RegExp("([\\s\\S]*?)(</" + h + "[^>]*>)", "i")),
                    m = 0,
                    g = e.replace(v, function(e, n, r) {
                        return m = r.length,
                            "script" !== h && "style" !== h && "noscript" !== h && (n = n.replace(/<!--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")),
                            t.chars && t.chars(n),
                            ""
                    });
                l += e.length - g.length,
                    e = g,
                    o("</" + h + ">", h, l - m, l)
            } else {
                var y = e.indexOf("<");
                if (0 === y) {
                    if (/^<!--/.test(e)) {
                        var b = e.indexOf("-->");
                        if (b >= 0) {
                            n(b + 3);
                            continue
                        }
                    }
                    if (/^<!\[/.test(e)) {
                        var _ = e.indexOf("]>");
                        if (_ >= 0) {
                            n(_ + 2);
                            continue
                        }
                    }
                    var w = e.match(ya);
                    if (w) {
                        n(w[0].length);
                        continue
                    }
                    var x = e.match(ga);
                    if (x) {
                        var k = l;
                        n(x[0].length),
                            o(x[0], x[1], k, l);
                        continue
                    }
                    var T = r();
                    if (T) {
                        i(T);
                        continue
                    }
                }
                var C = void 0;
                y >= 0 ? (C = e.substring(0, y),
                        n(y)) : (C = e,
                        e = ""),
                    t.chars && t.chars(C)
            }
            if (e === p)
                throw new Error("Error parsing template:\n\n" + e)
        }
        o()
    }

    function Fn(e) {
        function t() {
            (p || (p = [])).push(e.slice(s, d).trim()),
                s = d + 1
        }
        var n = !1,
            r = !1,
            i = 0,
            o = 0,
            a = 0,
            s = 0,
            c = void 0,
            u = void 0,
            d = void 0,
            l = void 0,
            p = void 0;
        for (d = 0; d < e.length; d++)
            if (u = c,
                c = e.charCodeAt(d),
                n)
                39 === c && 92 !== u && (n = !n);
            else if (r)
            34 === c && 92 !== u && (r = !r);
        else if (124 !== c || 124 === e.charCodeAt(d + 1) || 124 === e.charCodeAt(d - 1) || i || o || a)
            switch (c) {
                case 34:
                    r = !0;
                    break;
                case 39:
                    n = !0;
                    break;
                case 40:
                    a++;
                    break;
                case 41:
                    a--;
                    break;
                case 91:
                    o++;
                    break;
                case 93:
                    o--;
                    break;
                case 123:
                    i++;
                    break;
                case 125:
                    i--
            }
        else
            void 0 === l ? (s = d + 1,
                l = e.slice(0, d).trim()) : t();
        if (void 0 === l ? l = e.slice(0, d).trim() : 0 !== s && t(),
            p)
            for (d = 0; d < p.length; d++)
                l = Wn(l, p[d]);
        return l
    }

    function Wn(e, t) {
        var n = t.indexOf("(");
        if (0 > n)
            return '_f("' + t + '")(' + e + ")";
        var r = t.slice(0, n),
            i = t.slice(n + 1);
        return '_f("' + r + '")(' + e + "," + i
    }

    function Un(e, t) {
        var n = t ? Ea(t) : Sa;
        if (n.test(e)) {
            for (var r = [], i = n.lastIndex = 0, o = void 0, a = void 0; o = n.exec(e);) {
                a = o.index,
                    a > i && r.push(JSON.stringify(e.slice(i, a)));
                var s = Fn(o[1].trim());
                r.push("_s(" + s + ")"),
                    i = a + o[0].length
            }
            return i < e.length && r.push(JSON.stringify(e.slice(i))),
                r.join("+")
        }
    }

    function Jn(e) {
        console.error("[Vue parser]: " + e)
    }

    function Gn(e, t) {
        return e ? e.map(function(e) {
            return e[t]
        }).filter(function(e) {
            return e
        }) : []
    }

    function zn(e, t, n) {
        (e.props || (e.props = [])).push({
            name: t,
            value: n
        })
    }

    function Vn(e, t, n) {
        (e.attrs || (e.attrs = [])).push({
            name: t,
            value: n
        })
    }

    function Kn(e, t, n, r, i) {
        (e.directives || (e.directives = [])).push({
            name: t,
            value: n,
            arg: r,
            modifiers: i
        })
    }

    function Xn(e, t, n) {
        var r = e.hooks || (e.hooks = {}),
            i = r[t];
        i ? i.push(n) : r[t] = [n]
    }

    function Qn(e, t, n, r, i) {
        r && r.capture && (delete r.capture,
            t = "!" + t);
        var o = void 0;
        r && r.native ? (delete r.native,
            o = e.nativeEvents || (e.nativeEvents = {})) : o = e.events || (e.events = {});
        var a = {
                value: n,
                modifiers: r
            },
            s = o[t];
        Array.isArray(s) ? i ? s.unshift(a) : s.push(a) : o[t] = s ? i ? [a, s] : [s, a] : a
    }

    function Yn(e, t, n) {
        var r = Zn(e, ":" + t) || Zn(e, "v-bind:" + t);
        if (null != r)
            return r;
        if (n !== !1) {
            var i = Zn(e, t);
            if (null != i)
                return JSON.stringify(i)
        }
    }

    function Zn(e, t) {
        var n = void 0;
        if (null != (n = e.attrsMap[t]))
            for (var r = e.attrsList, i = 0, o = r.length; o > i; i++)
                if (r[i].name === t) {
                    r.splice(i, 1);
                    break
                }
        return n
    }

    function er(e, t) {
        Ma = t.warn || Jn,
            Ba = t.getTagNamespace || fi,
            Ra = t.mustUseProp || fi,
            qa = t.isPreTag || fi,
            Ha = Gn(t.modules, "preTransformNode"),
            Fa = Gn(t.modules, "transformNode"),
            Wa = Gn(t.modules, "postTransformNode"),
            Ua = t.delimiters,
            Ja = Object.create(null);
        var n = [],
            r = t.preserveWhitespace !== !1,
            i = void 0,
            o = void 0,
            a = !1,
            s = !1;
        return Hn(e, {
                expectHTML: t.expectHTML,
                isUnaryTag: t.isUnaryTag,
                isFromDOM: t.isFromDOM,
                shouldDecodeTags: t.shouldDecodeTags,
                start: function(e, r, c) {
                    function u() {}
                    var d = o && o.ns || Ba(e);
                    t.isIE && "svg" === d && (r = gr(r));
                    var l = {
                        type: 1,
                        tag: e,
                        attrsList: r,
                        attrsMap: hr(r),
                        parent: o,
                        children: []
                    };
                    d && (l.ns = d),
                        mr(l) && (l.forbidden = !0);
                    for (var p = 0; p < Ha.length; p++)
                        Ha[p](l, t);
                    if (a || (tr(l),
                            l.pre && (a = !0)),
                        qa(l.tag) && (s = !0),
                        a)
                        nr(l);
                    else {
                        or(l),
                            ar(l),
                            cr(l),
                            l.plain = !l.key && !r.length,
                            rr(l),
                            ir(l),
                            ur(l),
                            dr(l);
                        for (var f = 0; f < Fa.length; f++)
                            Fa[f](l, t);
                        lr(l)
                    }
                    i || (i = l,
                            u(i)),
                        o && !l.forbidden && (l.else ? sr(l, o) : (o.children.push(l),
                            l.parent = o)),
                        c || (o = l,
                            n.push(l));
                    for (var h = 0; h < Wa.length; h++)
                        Wa[h](l, t)
                },
                end: function() {
                    var e = n[n.length - 1],
                        t = e.children[e.children.length - 1];
                    t && 3 === t.type && " " === t.text && e.children.pop(),
                        n.length -= 1,
                        o = n[n.length - 1],
                        e.pre && (a = !1),
                        qa(e.tag) && (s = !1)
                },
                chars: function(e) {
                    if (o && (e = s || e.trim() ? Pa(e) : r && o.children.length ? " " : "")) {
                        var t = void 0;
                        !a && " " !== e && (t = Un(e, Ua)) ? o.children.push({
                            type: 2,
                            expression: t,
                            text: e
                        }) : o.children.push({
                            type: 3,
                            text: e
                        })
                    }
                }
            }),
            i
    }

    function tr(e) {
        null != Zn(e, "v-pre") && (e.pre = !0)
    }

    function nr(e) {
        var t = e.attrsList.length;
        if (t)
            for (var n = e.attrs = new Array(t), r = 0; t > r; r++)
                n[r] = {
                    name: e.attrsList[r].name,
                    value: JSON.stringify(e.attrsList[r].value)
                };
        else
            e.pre || (e.plain = !0)
    }

    function rr(e) {
        var t = Yn(e, "key");
        t && (e.key = t)
    }

    function ir(e) {
        var t = Yn(e, "ref");
        t && (e.ref = t,
            e.refInFor = pr(e))
    }

    function or(e) {
        var t = void 0;
        if (t = Zn(e, "v-for")) {
            var n = t.match($a);
            if (!n)
                return;
            e.for = n[2].trim();
            var r = n[1].trim(),
                i = r.match(Oa);
            i ? (e.alias = i[1].trim(),
                e.iterator1 = i[2].trim(),
                i[3] && (e.iterator2 = i[3].trim())) : e.alias = r
        }
    }

    function ar(e) {
        var t = Zn(e, "v-if");
        t && (e.if = t),
            null != Zn(e, "v-else") && (e.else = !0)
    }

    function sr(e, t) {
        var n = vr(t.children);
        n && n.if && (n.elseBlock = e)
    }

    function cr(e) {
        var t = Zn(e, "v-once");
        null != t && (e.once = !0)
    }

    function ur(e) {
        if ("slot" === e.tag)
            e.slotName = Yn(e, "name");
        else {
            var t = Yn(e, "slot");
            t && (e.slotTarget = t)
        }
    }

    function dr(e) {
        var t = void 0;
        (t = Yn(e, "is")) && (e.component = t),
        null != Zn(e, "inline-template") && (e.inlineTemplate = !0)
    }

    function lr(e) {
        var t = e.attrsList,
            n = void 0,
            r = void 0,
            i = void 0,
            o = void 0,
            a = void 0,
            s = void 0,
            c = void 0;
        for (n = 0,
            r = t.length; r > n; n++)
            if (i = t[n].name,
                o = t[n].value,
                Da.test(i))
                if (e.hasBindings = !0,
                    s = fr(i),
                    s && (i = i.replace(Ia, "")),
                    Na.test(i))
                    i = i.replace(Na, ""),
                    s && s.prop && (c = !0,
                        i = si(i),
                        "innerHtml" === i && (i = "innerHTML")),
                    c || Ra(i) ? zn(e, i, o) : Vn(e, i, o);
                else if (ja.test(i))
            i = i.replace(ja, ""),
            Qn(e, i, o, s);
        else {
            i = i.replace(Da, "");
            var u = i.match(La);
            u && (a = u[1]) && (i = i.slice(0, -(a.length + 1))),
                Kn(e, i, o, a, s)
        } else
            Vn(e, i, JSON.stringify(o))
    }

    function pr(e) {
        for (var t = e; t;) {
            if (void 0 !== t.for)
                return !0;
            t = t.parent
        }
        return !1
    }

    function fr(e) {
        var t = e.match(Ia);
        if (t) {
            var n = function() {
                var e = {};
                return t.forEach(function(t) {
                    e[t.slice(1)] = !0
                }), {
                    v: e
                }
            }();
            if ("object" == typeof n)
                return n.v
        }
    }

    function hr(e) {
        for (var t = {}, n = 0, r = e.length; r > n; n++)
            t[e[n].name] = e[n].value;
        return t
    }

    function vr(e) {
        for (var t = e.length; t--;)
            if (e[t].tag)
                return e[t]
    }

    function mr(e) {
        return "style" === e.tag || "script" === e.tag && (!e.attrsMap.type || "text/javascript" === e.attrsMap.type)
    }

    function gr(e) {
        for (var t = [], n = 0; n < e.length; n++) {
            var r = e[n];
            Ga.test(r.name) || (r.name = r.name.replace(za, ""),
                t.push(r))
        }
        return t
    }

    function yr(e, t) {
        e && (Va = Xa(t.staticKeys || ""),
            Ka = t.isReservedTag || function() {
                return !1
            },
            _r(e),
            wr(e, !1))
    }

    function br(e) {
        return n("type,tag,attrsList,attrsMap,plain,parent,children,attrs" + (e ? "," + e : ""))
    }

    function _r(e) {
        if (e.static = xr(e),
            1 === e.type)
            for (var t = 0, n = e.children.length; n > t; t++) {
                var r = e.children[t];
                _r(r),
                    r.static || (e.static = !1)
            }
    }

    function wr(e, t) {
        if (1 === e.type) {
            if (e.once || e.static)
                return e.staticRoot = !0,
                    void(e.staticInFor = t);
            if (e.children)
                for (var n = 0, r = e.children.length; r > n; n++)
                    wr(e.children[n], !!e.for)
        }
    }

    function xr(e) {
        return 2 !== e.type && (3 === e.type || !(!e.pre && (e.hasBindings || e.if || e.for || ii(e.tag) || !Ka(e.tag) || !Object.keys(e).every(Va))))
    }

    function kr(e, t) {
        var n = t ? "nativeOn:{" : "on:{";
        for (var r in e)
            n += '"' + r + '":' + Tr(e[r]) + ",";
        return n.slice(0, -1) + "}"
    }

    function Tr(e) {
        if (e) {
            if (Array.isArray(e))
                return "[" + e.map(Tr).join(",") + "]";
            if (e.modifiers) {
                var t = "",
                    n = [];
                for (var r in e.modifiers)
                    Za[r] ? t += Za[r] : n.push(r);
                n.length && (t = Cr(n) + t);
                var i = Qa.test(e.value) ? e.value + "($event)" : e.value;
                return "function($event){" + t + i + "}"
            }
            return Qa.test(e.value) ? e.value : "function($event){" + e.value + "}"
        }
        return "function(){}"
    }

    function Cr(e) {
        var t = 1 === e.length ? Sr(e[0]) : Array.prototype.concat.apply([], e.map(Sr));
        return Array.isArray(t) ? "if(" + t.map(function(e) {
            return "$event.keyCode!==" + e
        }).join("&&") + ")return;" : "if($event.keyCode!==" + t + ")return;"
    }

    function Sr(e) {
        return parseInt(e, 10) || Ya[e] || "_k(" + JSON.stringify(e) + ")"
    }

    function Ar(e, t) {
        Xn(e, "construct", "_b(n1," + t.value + (t.modifiers && t.modifiers.prop ? ",true" : "") + ")")
    }

    function Er(e, t) {
        var n = os,
            r = os = [];
        as = t,
            ts = t.warn || Jn,
            ns = Gn(t.modules, "transformCode"),
            rs = Gn(t.modules, "genData"),
            is = t.directives || {};
        var i = e ? Dr(e) : '_h("div")';
        return os = n, {
            render: "with(this){return " + i + "}",
            staticRenderFns: r
        }
    }

    function Dr(e) {
        if (e.staticRoot && !e.staticProcessed)
            return e.staticProcessed = !0,
                os.push("with(this){return " + Dr(e) + "}"),
                "_m(" + (os.length - 1) + (e.staticInFor ? ",true" : "") + ")";
        if (e.for && !e.forProcessed)
            return Nr(e);
        if (e.if && !e.ifProcessed)
            return $r(e);
        if ("template" !== e.tag || e.slotTarget) {
            if ("slot" === e.tag)
                return Br(e);
            var t = void 0;
            if (e.component)
                t = Rr(e);
            else {
                var n = jr(e),
                    r = e.inlineTemplate ? null : Ir(e);
                t = "_h('" + e.tag + "'" + (n ? "," + n : "") + (r ? "," + r : "") + ")"
            }
            for (var i = 0; i < ns.length; i++)
                t = ns[i](e, t);
            return t
        }
        return Ir(e) || "void 0"
    }

    function $r(e) {
        var t = e.if;
        return e.ifProcessed = !0,
            "(" + t + ")?" + Dr(e) + ":" + Or(e)
    }

    function Or(e) {
        return e.elseBlock ? Dr(e.elseBlock) : "void 0"
    }

    function Nr(e) {
        var t = e.for,
            n = e.alias,
            r = e.iterator1 ? "," + e.iterator1 : "",
            i = e.iterator2 ? "," + e.iterator2 : "";
        return e.forProcessed = !0,
            "(" + t + ")&&_l((" + t + ")," + ("function(" + n + r + i + "){") + ("return " + Dr(e)) + "})"
    }

    function jr(e) {
        if (!e.plain) {
            var t = "{",
                n = Lr(e);
            n && (t += n + ","),
                e.key && (t += "key:" + e.key + ","),
                e.ref && (t += "ref:" + e.ref + ","),
                e.refInFor && (t += "refInFor:true,"),
                e.component && (t += 'tag:"' + e.tag + '",'),
                e.slotTarget && (t += "slot:" + e.slotTarget + ",");
            for (var r = 0; r < rs.length; r++)
                t += rs[r](e);
            if (e.attrs && (t += "attrs:{" + qr(e.attrs) + "},"),
                e.props && (t += "domProps:{" + qr(e.props) + "},"),
                e.hooks && (t += "hook:{" + Hr(e.hooks) + "},"),
                e.events && (t += kr(e.events) + ","),
                e.nativeEvents && (t += kr(e.nativeEvents, !0) + ","),
                e.inlineTemplate) {
                var i = e.children[0];
                if (1 === i.type) {
                    var o = Er(i, as);
                    t += "inlineTemplate:{render:function(){" + o.render + "},staticRenderFns:[" + o.staticRenderFns.map(function(e) {
                        return "function(){" + e + "}"
                    }).join(",") + "]}"
                }
            }
            return t.replace(/,$/, "") + "}"
        }
    }

    function Lr(e) {
        var t = e.directives;
        if (t) {
            var n = "directives:[",
                r = !1,
                i = void 0,
                o = void 0,
                a = void 0,
                s = void 0;
            for (i = 0,
                o = t.length; o > i; i++) {
                a = t[i],
                    s = !0;
                var c = is[a.name] || es[a.name];
                c && (s = !!c(e, a, ts)),
                    s && (r = !0,
                        n += '{name:"' + a.name + '"' + (a.value ? ",value:(" + a.value + "),expression:" + JSON.stringify(a.value) : "") + (a.arg ? ',arg:"' + a.arg + '"' : "") + (a.modifiers ? ",modifiers:" + JSON.stringify(a.modifiers) : "") + "},")
            }
            return r ? n.slice(0, -1) + "]" : void 0
        }
    }

    function Ir(e) {
        return e.children.length ? "[" + e.children.map(Pr).join(",") + "]" : void 0
    }

    function Pr(e) {
        return 1 === e.type ? Dr(e) : Mr(e)
    }

    function Mr(e) {
        return 2 === e.type ? e.expression : JSON.stringify(e.text)
    }

    function Br(e) {
        var t = "$slots[" + (e.slotName || '"default"') + "]",
            n = Ir(e);
        return n ? "(" + t + "||" + n + ")" : t
    }

    function Rr(e) {
        var t = Ir(e);
        return "_h(" + e.component + "," + jr(e) + (t ? "," + t : "") + ")"
    }

    function qr(e) {
        for (var t = "", n = 0; n < e.length; n++) {
            var r = e[n];
            t += '"' + r.name + '":' + r.value + ","
        }
        return t.slice(0, -1)
    }

    function Hr(e) {
        var t = "";
        for (var n in e)
            t += '"' + n + '":function(n1,n2){' + e[n].join(";") + "},";
        return t.slice(0, -1)
    }

    function Fr(e, t) {
        var n = er(e.trim(), t);
        yr(n, t);
        var r = Er(n, t);
        return {
            ast: n,
            render: r.render,
            staticRenderFns: r.staticRenderFns
        }
    }

    function Wr(e, t) {
        var n = (t.warn || Jn,
            Zn(e, "class"));
        n && (e.staticClass = JSON.stringify(n));
        var r = Yn(e, "class", !1);
        r && (e.classBinding = r)
    }

    function Ur(e) {
        var t = "";
        return e.staticClass && (t += "staticClass:" + e.staticClass + ","),
            e.classBinding && (t += "class:" + e.classBinding + ","),
            t
    }

    function Jr(e) {
        var t = Yn(e, "style", !1);
        t && (e.styleBinding = t)
    }

    function Gr(e) {
        return e.styleBinding ? "style:(" + e.styleBinding + ")," : ""
    }

    function zr(e, t, n) {
        ds = n;
        var r = t.value,
            i = t.modifiers;
        if ("select" === e.tag)
            return Qr(e, r);
        switch (e.attrsMap.type) {
            case "checkbox":
                Vr(e, r);
                break;
            case "radio":
                Kr(e, r);
                break;
            default:
                return Xr(e, r, i)
        }
    }

    function Vr(e, t) {
        var n = Yn(e, "value"),
            r = Yn(e, "true-value") || "true",
            i = Yn(e, "false-value") || "false";
        zn(e, "checked", "Array.isArray(" + t + ")" + ("?(" + t + ").indexOf(" + n + ")>-1") + (":(" + t + ")===(" + r + ")")),
            Qn(e, "change", "var $$a=" + t + ",$$el=$event.target," + ("$$c=$$el.checked?(" + r + "):(" + i + ");") + "if(Array.isArray($$a)){" + ("var $$v=" + n + ",") + "$$i=$$a.indexOf($$v);" + ("if($$c){$$i<0&&(" + t + "=$$a.concat($$v))}") + ("else{$$i>-1&&(" + t + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}") + ("}else{" + t + "=$$c}"), null, !0)
    }

    function Kr(e, t) {
        var n = Yn(e, "value");
        zn(e, "checked", "(" + t + ")===(" + n + ")"),
            Qn(e, "change", t + "=" + n, null, !0)
    }

    function Xr(e, t, n) {
        var r = e.attrsMap.type,
            i = n || {},
            o = i.lazy,
            a = i.number,
            s = i.trim,
            c = o || _o && "range" === r ? "change" : "input",
            u = !o && "range" !== r,
            d = "input" === e.tag || "textarea" === e.tag,
            l = d ? "$event.target.value" + (s ? ".trim()" : "") : "$event",
            p = a || "number" === r ? t + "=_n(" + l + ")" : t + "=" + l;
        return d && u && (p = "if($event.target.composing)return;" + p),
            zn(e, "value", d ? "_s(" + t + ")" : "(" + t + ")"),
            Qn(e, c, p, null, !0),
            u ? !0 : void 0
    }

    function Qr(e, t) {
        var n = t + '=Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){return "_value" in o ? o._value : o.value})' + (null == e.attrsMap.multiple ? "[0]" : "");
        return Qn(e, "change", n, null, !0), !0
    }

    function Yr(e, t) {
        t.value && zn(e, "textContent", "_s(" + t.value + ")")
    }

    function Zr(e, t) {
        t.value && zn(e, "innerHTML", "_s(" + t.value + ")")
    }

    function ei(e, t) {
        return t = t ? u(u({}, fs), t) : fs,
            Fr(e, t)
    }

    function ti(e, t) {
        var n = (t && t.warn || Ki,
            t && t.delimiters ? String(t.delimiters) + e : e);
        if (ps[n])
            return ps[n];
        var r = {},
            i = ei(e, t);
        r.render = ni(i.render);
        var o = i.staticRenderFns.length;
        r.staticRenderFns = new Array(o);
        for (var a = 0; o > a; a++)
            r.staticRenderFns[a] = ni(i.staticRenderFns[a]);
        return ps[n] = r
    }

    function ni(e) {
        try {
            return new Function(e)
        } catch (e) {
            return f
        }
    }

    function ri(e) {
        if (e.outerHTML)
            return e.outerHTML;
        var t = document.createElement("div");
        return t.appendChild(e.cloneNode(!0)),
            t.innerHTML
    }
    var ii = n("slot,component", !0),
        oi = Object.prototype.hasOwnProperty,
        ai = /-(\w)/g,
        si = a(function(e) {
            return e.replace(ai, function(e, t) {
                return t ? t.toUpperCase() : ""
            })
        }),
        ci = a(function(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }),
        ui = /([^-])([A-Z])/g,
        di = a(function(e) {
            return e.replace(ui, "$1-$2").replace(ui, "$1-$2").toLowerCase()
        }),
        li = Object.prototype.toString,
        pi = "[object Object]",
        fi = function() {
            return !1
        },
        hi = {
            optionMergeStrategies: Object.create(null),
            silent: !1,
            devtools: !1,
            errorHandler: null,
            ignoredElements: null,
            keyCodes: Object.create(null),
            isReservedTag: fi,
            isUnknownElement: fi,
            getTagNamespace: f,
            mustUseProp: fi,
            _assetTypes: ["component", "directive", "filter"],
            _lifecycleHooks: ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated"],
            _maxUpdateCount: 100,
            _isServer: !1
        },
        vi = /[^\w\.\$]/,
        mi = "__proto__" in {},
        gi = "undefined" != typeof window && "[object Object]" !== Object.prototype.toString.call(window),
        yi = gi && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
        bi = gi && window.navigator.userAgent.toLowerCase(),
        _i = bi && /(iphone|ipad|ipod|ios)/i.test(bi),
        wi = bi && _i && bi.match(/os ([\d_]+)/),
        xi = wi && wi[1].split("_"),
        ki = xi && Number(xi[0]) >= 9 && Number(xi[1]) >= 3 && !window.indexedDB,
        Ti = function() {
            function e() {
                n = !1;
                var e = t.slice(0);
                t = [];
                for (var r = 0; r < e.length; r++)
                    e[r]()
            }
            var t = [],
                n = !1,
                r = void 0;
            if ("undefined" == typeof MutationObserver || ki) {
                var i = gi ? window : "undefined" != typeof global ? global : {};
                r = i.setImmediate || setTimeout
            } else {
                var o = 1,
                    a = new MutationObserver(e),
                    s = document.createTextNode(String(o));
                a.observe(s, {
                        characterData: !0
                    }),
                    r = function() {
                        o = (o + 1) % 2,
                            s.data = String(o)
                    }
            }
            return function(i, o) {
                var a = o ? function() {
                    i.call(o)
                } : i;
                t.push(a),
                    n || (n = !0,
                        r(e, 0))
            }
        }(),
        Ci = void 0;
    Ci = "undefined" != typeof Set && /native code/.test(Set.toString()) ? Set : function() {
        function e() {
            this.set = Object.create(null)
        }
        return e.prototype.has = function(e) {
                return void 0 !== this.set[e]
            },
            e.prototype.add = function(e) {
                this.set[e] = 1
            },
            e.prototype.clear = function() {
                this.set = Object.create(null)
            },
            e
    }();
    var Si = 0,
        Ai = function() {
            function e() {
                this.id = Si++,
                    this.subs = []
            }
            return e.prototype.addSub = function(e) {
                    this.subs.push(e)
                },
                e.prototype.removeSub = function(e) {
                    r(this.subs, e)
                },
                e.prototype.depend = function() {
                    e.target && e.target.addDep(this)
                },
                e.prototype.notify = function() {
                    for (var e = this.subs.slice(), t = 0, n = e.length; n > t; t++)
                        e[t].update()
                },
                e
        }();
    Ai.target = null;
    var Ei = [],
        Di = [],
        $i = {},
        Oi = !1,
        Ni = !1,
        ji = 0,
        Li = 0,
        Ii = function() {
            function e(e, t, n) {
                var r = arguments.length <= 3 || void 0 === arguments[3] ? {} : arguments[3];
                this.vm = e,
                    e._watchers.push(this),
                    this.deep = !!r.deep,
                    this.user = !!r.user,
                    this.lazy = !!r.lazy,
                    this.sync = !!r.sync,
                    this.expression = t.toString(),
                    this.cb = n,
                    this.id = ++Li,
                    this.active = !0,
                    this.dirty = this.lazy,
                    this.deps = [],
                    this.newDeps = [],
                    this.depIds = new Ci,
                    this.newDepIds = new Ci,
                    "function" == typeof t ? this.getter = t : (this.getter = g(t),
                        this.getter || (this.getter = function() {})),
                    this.value = this.lazy ? void 0 : this.get()
            }
            return e.prototype.get = function() {
                    y(this);
                    var e = this.getter.call(this.vm, this.vm);
                    return this.deep && k(e),
                        b(),
                        this.cleanupDeps(),
                        e
                },
                e.prototype.addDep = function(e) {
                    var t = e.id;
                    this.newDepIds.has(t) || (this.newDepIds.add(t),
                        this.newDeps.push(e),
                        this.depIds.has(t) || e.addSub(this))
                },
                e.prototype.cleanupDeps = function() {
                    for (var e = this.deps.length; e--;) {
                        var t = this.deps[e];
                        this.newDepIds.has(t.id) || t.removeSub(this)
                    }
                    var n = this.depIds;
                    this.depIds = this.newDepIds,
                        this.newDepIds = n,
                        this.newDepIds.clear(),
                        n = this.deps,
                        this.deps = this.newDeps,
                        this.newDeps = n,
                        this.newDeps.length = 0
                },
                e.prototype.update = function() {
                    this.lazy ? this.dirty = !0 : this.sync ? this.run() : x(this)
                },
                e.prototype.run = function() {
                    if (this.active) {
                        var e = this.get();
                        if (e !== this.value || d(e) || this.deep) {
                            var t = this.value;
                            if (this.value = e,
                                this.user)
                                try {
                                    this.cb.call(this.vm, e, t)
                                } catch (e) {
                                    if (!hi.errorHandler)
                                        throw e;
                                    hi.errorHandler.call(null, e, this.vm)
                                }
                            else
                                this.cb.call(this.vm, e, t)
                        }
                    }
                },
                e.prototype.evaluate = function() {
                    this.value = this.get(),
                        this.dirty = !1
                },
                e.prototype.depend = function() {
                    for (var e = this.deps.length; e--;)
                        this.deps[e].depend()
                },
                e.prototype.teardown = function() {
                    if (this.active) {
                        this.vm._isBeingDestroyed || this.vm._vForRemoving || r(this.vm._watchers, this);
                        for (var e = this.deps.length; e--;)
                            this.deps[e].removeSub(this);
                        this.active = !1
                    }
                },
                e
        }(),
        Pi = new Ci,
        Mi = Array.prototype,
        Bi = Object.create(Mi);
    ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(e) {
        var t = Mi[e];
        m(Bi, e, function() {
            for (var n = arguments.length, r = new Array(n); n--;)
                r[n] = arguments[n];
            var i = t.apply(this, r),
                o = this.__ob__,
                a = void 0;
            switch (e) {
                case "push":
                    a = r;
                    break;
                case "unshift":
                    a = r;
                    break;
                case "splice":
                    a = r.slice(2)
            }
            return a && o.observeArray(a),
                o.dep.notify(),
                i
        })
    });
    var Ri = Object.getOwnPropertyNames(Bi),
        qi = {
            shouldConvert: !0,
            isSettingProps: !1
        },
        Hi = function() {
            function e(e) {
                if (this.value = e,
                    this.dep = new Ai,
                    this.vmCount = 0,
                    m(e, "__ob__", this),
                    Array.isArray(e)) {
                    var t = mi ? T : C;
                    t(e, Bi, Ri),
                        this.observeArray(e)
                } else
                    this.walk(e)
            }
            return e.prototype.walk = function(e) {
                    var t = this.value;
                    for (var n in e)
                        A(t, n, e[n])
                },
                e.prototype.observeArray = function(e) {
                    for (var t = 0, n = e.length; n > t; t++)
                        S(e[t])
                },
                e
        }(),
        Fi = {
            enumerable: !0,
            configurable: !0,
            get: f,
            set: f
        },
        Wi = function(e, t, n, r, i, o, a, s) {
            this.tag = e,
                this.data = t,
                this.children = n,
                this.text = r,
                this.elm = i,
                this.ns = o,
                this.context = a,
                this.key = t && t.key,
                this.componentOptions = s,
                this.child = void 0,
                this.parent = void 0,
                this.raw = !1,
                this.isStatic = !1,
                this.isRootInsert = !0,
                this.isComment = !1;
            var c = t && t.hook && t.hook.construct;
            c && c(this)
        },
        Ui = function() {
            var e = new Wi;
            return e.text = "",
                e.isComment = !0,
                e
        },
        Ji = null,
        Gi = {
            init: et,
            prepatch: tt,
            insert: nt,
            destroy: rt
        },
        zi = Object.keys(Gi),
        Vi = 0;
    mt(gt),
        B(gt),
        vt(gt),
        K(gt),
        pt(gt);
    var Ki = void 0,
        Xi = void 0,
        Qi = hi.optionMergeStrategies;
    Qi.data = function(e, t, n) {
            return n ? e || t ? function() {
                var r = "function" == typeof t ? t.call(n) : t,
                    i = "function" == typeof e ? e.call(n) : void 0;
                return r ? yt(r, i) : i
            } : void 0 : t ? "function" != typeof t ? e : e ? function() {
                return yt(t.call(this), e.call(this))
            } : t : e
        },
        hi._lifecycleHooks.forEach(function(e) {
            Qi[e] = bt
        }),
        hi._assetTypes.forEach(function(e) {
            Qi[e + "s"] = _t
        }),
        Qi.watch = function(e, t) {
            if (!t)
                return e;
            if (!e)
                return t;
            var n = {};
            u(n, e);
            for (var r in t) {
                var i = n[r],
                    o = t[r];
                i && !Array.isArray(i) && (i = [i]),
                    n[r] = i ? i.concat(o) : [o]
            }
            return n
        },
        Qi.props = Qi.methods = Qi.computed = function(e, t) {
            if (!t)
                return e;
            if (!e)
                return t;
            var n = Object.create(null);
            return u(n, e),
                u(n, t),
                n
        };
    var Yi = function(e, t) {
            return void 0 === t ? e : t
        },
        Zi = Object.freeze({
            defineReactive: A,
            _toString: e,
            toNumber: t,
            makeMap: n,
            isBuiltInTag: ii,
            remove: r,
            hasOwn: i,
            isPrimitive: o,
            cached: a,
            camelize: si,
            capitalize: ci,
            hyphenate: di,
            bind: s,
            toArray: c,
            extend: u,
            isObject: d,
            isPlainObject: l,
            toObject: p,
            noop: f,
            no: fi,
            genStaticKeys: h,
            isReserved: v,
            def: m,
            parsePath: g,
            hasProto: mi,
            inBrowser: gi,
            devtools: yi,
            UA: bi,
            nextTick: Ti,
            get _Set() {
                return Ci
            },
            mergeOptions: Tt,
            resolveAsset: Ct,
            warn: Ki,
            formatComponentName: Xi,
            validateProp: St
        }),
        eo = {
            name: "keep-alive",
            "abstract": !0,
            created: function() {
                this.cache = Object.create(null)
            },
            render: function() {
                var e = W(this.$slots.default);
                if (e && e.componentOptions) {
                    var t = e.componentOptions,
                        n = null == e.key ? t.Ctor.cid + "::" + t.tag : e.key;
                    this.cache[n] ? e.child = this.cache[n].child : this.cache[n] = e,
                        e.data.keepAlive = !0
                }
                return e
            },
            destroyed: function() {
                for (var e in this.cache) {
                    var t = this.cache[e];
                    X(t.child, "deactivated"),
                        t.child.$destroy()
                }
            }
        },
        to = {
            KeepAlive: eo
        };
    jt(gt),
        Object.defineProperty(gt.prototype, "$isServer", {
            get: function() {
                return hi._isServer
            }
        }),
        gt.version = "2.0.0-rc.3";
    var no = n("value,selected,checked,muted"),
        ro = n("contenteditable,draggable,spellcheck"),
        io = n("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
        oo = "http://www.w3.org/1999/xlink",
        ao = function(e) {
            return ":" === e.charAt(5) && "xlink" === e.slice(0, 5)
        },
        so = function(e) {
            return ao(e) ? e.slice(6, e.length) : ""
        },
        co = function(e) {
            return null == e || e === !1
        },
        uo = {
            svg: "http://www.w3.org/2000/svg",
            math: "http://www.w3.org/1998/Math/MathML"
        },
        lo = n("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template"),
        po = n("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr", !0),
        fo = n("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source", !0),
        ho = n("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track", !0),
        vo = n("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font,font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
        mo = function(e) {
            return "pre" === e
        },
        go = function(e) {
            return lo(e) || vo(e)
        },
        yo = Object.create(null),
        bo = gi && window.navigator.userAgent.toLowerCase(),
        _o = bo && /msie|trident/.test(bo),
        wo = bo && bo.indexOf("msie 9.0") > 0,
        xo = bo && bo.indexOf("android") > 0,
        ko = !!gi && function() {
            var e = document.createElement("div");
            return e.innerHTML = '<div a=">">',
                e.innerHTML.indexOf("&gt;") > 0
        }(),
        To = Object.freeze({
            createElement: Ft,
            createElementNS: Wt,
            createTextNode: Ut,
            createComment: Jt,
            insertBefore: Gt,
            removeChild: zt,
            appendChild: Vt,
            parentNode: Kt,
            nextSibling: Xt,
            tagName: Qt,
            setTextContent: Yt,
            childNodes: Zt,
            setAttribute: en
        }),
        Co = {
            create: function(e, t) {
                tn(t)
            },
            update: function(e, t) {
                e.data.ref !== t.data.ref && (tn(e, !0),
                    tn(t))
            },
            destroy: function(e) {
                tn(e, !0)
            }
        },
        So = {},
        Ao = new Wi("", So, []),
        Eo = ["create", "update", "postpatch", "remove", "destroy"],
        Do = {
            create: function(e, t) {
                cn(e, t, "bind")
            },
            update: function(e, t) {
                cn(e, t, "update")
            },
            postpatch: function(e, t) {
                cn(e, t, "componentUpdated")
            },
            destroy: function(e) {
                cn(e, e, "unbind")
            }
        },
        $o = Object.create(null),
        Oo = [Co, Do],
        No = {
            create: un,
            update: un
        },
        jo = {
            create: ln,
            update: ln
        },
        Lo = {
            create: pn,
            update: pn
        },
        Io = {
            create: fn,
            update: fn
        },
        Po = ["Webkit", "Moz", "ms"],
        Mo = void 0,
        Bo = a(function(e) {
            if (Mo = Mo || document.createElement("div"),
                e = si(e),
                "filter" !== e && e in Mo.style)
                return e;
            for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < Po.length; n++) {
                var r = Po[n] + t;
                if (r in Mo.style)
                    return r
            }
        }),
        Ro = {
            create: hn,
            update: hn
        },
        qo = gi && !wo,
        Ho = "transition",
        Fo = "animation",
        Wo = "transition",
        Uo = "transitionend",
        Jo = "animation",
        Go = "animationend";
    qo && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (Wo = "WebkitTransition",
            Uo = "webkitTransitionEnd"),
        void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Jo = "WebkitAnimation",
            Go = "webkitAnimationEnd"));
    var zo = gi && window.requestAnimationFrame || setTimeout,
        Vo = /\b(transform|all)(,|$)/,
        Ko = a(function(e) {
            return {
                enterClass: e + "-enter",
                leaveClass: e + "-leave",
                appearClass: e + "-enter",
                enterActiveClass: e + "-enter-active",
                leaveActiveClass: e + "-leave-active",
                appearActiveClass: e + "-enter-active"
            }
        }),
        Xo = gi ? {
            create: function(e, t) {
                t.data.show || Tn(t)
            },
            remove: function(e, t) {
                e.data.show ? t() : Cn(e, t)
            }
        } : {},
        Qo = [No, jo, Lo, Io, Ro, Xo],
        Yo = Qo.concat(Oo),
        Zo = sn({
            nodeOps: To,
            modules: Yo
        });
    wo && document.addEventListener("selectionchange", function() {
        var e = document.activeElement;
        e && e.vmodel && jn(e, "input")
    });
    var ea = {
            bind: function(e, t, n) {
                "select" === n.tag ? En(e, t, n.context) : (xo || (e.addEventListener("compositionstart", On),
                        e.addEventListener("compositionend", Nn)),
                    wo && (e.vmodel = !0))
            },
            componentUpdated: function(e, t, n) {
                if ("select" === n.tag) {
                    En(e, t, n.context);
                    var r = e.multiple ? t.value.some(function(t) {
                        return Dn(t, e.options)
                    }) : Dn(t.value, e.options);
                    r && jn(e, "change")
                }
            }
        },
        ta = {
            bind: function(e, t, n) {
                var r = t.value;
                n = Ln(n);
                var i = n.data && n.data.transition;
                r && i && i.appear && !wo && Tn(n);
                var o = "none" === e.style.display ? "" : e.style.display;
                e.style.display = r ? o : "none",
                    e.__vOriginalDisplay = o
            },
            update: function(e, t, n) {
                var r = t.value,
                    i = t.oldValue;
                if (r !== i) {
                    n = Ln(n);
                    var o = n.data && n.data.transition;
                    o && !wo ? r ? (Tn(n),
                        e.style.display = e.__vOriginalDisplay) : Cn(n, function() {
                        e.style.display = "none"
                    }) : e.style.display = r ? e.__vOriginalDisplay : "none"
                }
            }
        },
        na = {
            model: ea,
            show: ta
        },
        ra = {
            name: String,
            appear: Boolean,
            css: Boolean,
            mode: String,
            type: String,
            enterClass: String,
            leaveClass: String,
            enterActiveClass: String,
            leaveActiveClass: String,
            appearClass: String,
            appearActiveClass: String
        },
        ia = {
            name: "transition",
            props: ra,
            "abstract": !0,
            render: function(e) {
                var t = this,
                    n = this.$slots.default;
                if (n && (n = n.filter(function(e) {
                            return e.tag
                        }),
                        n.length)) {
                    var r = this.mode,
                        i = n[0];
                    if (Bn(this.$vnode))
                        return i;
                    var o = In(i);
                    if (!o)
                        return i;
                    if (this._leaving)
                        return Mn(e, i);
                    o.key = null == o.key ? "__v" + (o.tag + this._uid) + "__" : o.key;
                    var a = (o.data || (o.data = {})).transition = Pn(this),
                        s = this._vnode,
                        c = In(s);
                    if (o.data.directives && o.data.directives.some(function(e) {
                            return "show" === e.name
                        }) && (o.data.show = !0),
                        c && c.data && c.key !== o.key) {
                        var d = c.data.transition = u({}, a);
                        if ("out-in" === r)
                            return this._leaving = !0,
                                U(d, "afterLeave", function() {
                                    t._leaving = !1,
                                        t.$forceUpdate()
                                }),
                                Mn(e, i);
                        if ("in-out" === r) {
                            var l, p = function() {
                                l()
                            };
                            U(a, "afterEnter", p),
                                U(a, "enterCancelled", p),
                                U(d, "delayLeave", function(e) {
                                    l = e
                                })
                        }
                    }
                    return i
                }
            }
        },
        oa = u({
            tag: String,
            moveClass: String
        }, ra);
    delete oa.mode;
    var aa = {
            props: oa,
            render: function(e) {
                for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, i = this.$slots.default || [], o = this.children = [], a = Pn(this), s = 0; s < i.length; s++) {
                    var c = i[s];
                    c.tag && null != c.key && (o.push(c),
                        n[c.key] = c,
                        (c.data || (c.data = {})).transition = a)
                }
                if (r) {
                    for (var u = [], d = [], l = 0; l < r.length; l++) {
                        var p = r[l];
                        p.data.transition = a,
                            p.data.pos = p.elm.getBoundingClientRect(),
                            n[p.key] ? u.push(p) : d.push(p)
                    }
                    this.kept = e(t, null, u),
                        this.removed = d
                }
                return e(t, null, o)
            },
            beforeUpdate: function() {
                this.__patch__(this._vnode, this.kept, !1, !0),
                    this._vnode = this.kept
            },
            updated: function() {
                var e = this.prevChildren,
                    t = this.moveClass || this.name + "-move";
                e.length && this.hasMove(e[0].elm, t) && (e.forEach(function(e) {
                        e.elm._moveCb && e.elm._moveCb(),
                            e.elm._enterCb && e.elm._enterCb();
                        var t = e.data.pos,
                            n = e.data.pos = e.elm.getBoundingClientRect(),
                            r = t.left - n.left,
                            i = t.top - n.top;
                        if (r || i) {
                            e.data.moved = !0;
                            var o = e.elm.style;
                            o.transform = o.WebkitTransform = "translate(" + r + "px," + i + "px)",
                                o.transitionDuration = "0s"
                        }
                    }),
                    document.body.offsetHeight,
                    e.forEach(function(e) {
                        if (e.data.moved) {
                            var n = e.elm,
                                r = n.style;
                            yn(n, t),
                                r.transform = r.WebkitTransform = r.transitionDuration = "",
                                n._moveDest = e.data.pos,
                                n.addEventListener(Uo, n._moveCb = function i(e) {
                                    e && !/transform$/.test(e.propertyName) || (n.removeEventListener(Uo, i),
                                        n._moveCb = null,
                                        bn(n, t))
                                })
                        }
                    }))
            },
            methods: {
                hasMove: function(e, t) {
                    if (!qo)
                        return !1;
                    if (null != this._hasMove)
                        return this._hasMove;
                    yn(e, t);
                    var n = wn(e);
                    return bn(e, t),
                        this._hasMove = n.hasTransform
                }
            }
        },
        sa = {
            Transition: ia,
            TransitionGroup: aa
        };
    gt.config.isUnknownElement = qt,
        gt.config.isReservedTag = go,
        gt.config.getTagNamespace = Rt,
        gt.config.mustUseProp = no,
        u(gt.options.directives, na),
        u(gt.options.components, sa),
        gt.prototype.__patch__ = hi._isServer ? f : Zo,
        gt.prototype.$mount = function(e, t) {
            return e = e && !hi._isServer ? Ht(e) : void 0,
                this._mount(e, t)
        },
        setTimeout(function() {
            hi.devtools && yi && yi.emit("init", gt)
        }, 0);
    var ca = document.createElement("div"),
        ua = /([^\s"'<>\/=]+)/,
        da = /(?:=)/,
        la = [/"([^"]*)"+/.source, /'([^']*)'+/.source, /([^\s"'=<>`]+)/.source],
        pa = new RegExp("^\\s*" + ua.source + "(?:\\s*(" + da.source + ")\\s*(?:" + la.join("|") + "))?"),
        fa = "[a-zA-Z_][\\w\\-\\.]*",
        ha = "((?:" + fa + "\\:)?" + fa + ")",
        va = new RegExp("^<" + ha),
        ma = /^\s*(\/?)>/,
        ga = new RegExp("^<\\/" + ha + "[^>]*>"),
        ya = /^<!DOCTYPE [^>]+>/i,
        ba = !1;
    "x".replace(/x(.)?/g, function(e, t) {
        ba = "" === t
    });
    var _a = n("script,style", !0),
        wa = {},
        xa = /&amp;/g,
        ka = /&lt;/g,
        Ta = /&gt;/g,
        Ca = /&quot;/g,
        Sa = /\{\{((?:.|\\n)+?)\}\}/g,
        Aa = /[-.*+?^${}()|[\]\/\\]/g,
        Ea = a(function(e) {
            var t = e[0].replace(Aa, "\\$&"),
                n = e[1].replace(Aa, "\\$&");
            return new RegExp(t + "((?:.|\\n)+?)" + n, "g")
        }),
        Da = /^v-|^@|^:/,
        $a = /(.*)\s+(?:in|of)\s+(.*)/,
        Oa = /\(([^,]*),([^,]*)(?:,([^,]*))?\)/,
        Na = /^:|^v-bind:/,
        ja = /^@|^v-on:/,
        La = /:(.*)$/,
        Ia = /\.[^\.]+/g,
        Pa = a(Rn),
        Ma = void 0,
        Ba = void 0,
        Ra = void 0,
        qa = void 0,
        Ha = void 0,
        Fa = void 0,
        Wa = void 0,
        Ua = void 0,
        Ja = void 0,
        Ga = /^xmlns:NS\d+/,
        za = /^NS\d+:/,
        Va = void 0,
        Ka = void 0,
        Xa = a(br),
        Qa = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/,
        Ya = {
            esc: 27,
            tab: 9,
            enter: 13,
            space: 32,
            up: 38,
            left: 37,
            right: 39,
            down: 40,
            "delete": [8, 46]
        },
        Za = {
            stop: "$event.stopPropagation();",
            prevent: "$event.preventDefault();",
            self: "if($event.target !== $event.currentTarget)return;"
        },
        es = {
            bind: Ar,
            cloak: f
        },
        ts = void 0,
        ns = void 0,
        rs = void 0,
        is = void 0,
        os = void 0,
        as = void 0,
        ss = (new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b"), {
            staticKeys: ["staticClass"],
            transformNode: Wr,
            genData: Ur
        }),
        cs = {
            transformNode: Jr,
            genData: Gr
        },
        us = [ss, cs],
        ds = void 0,
        ls = {
            model: zr,
            text: Yr,
            html: Zr
        },
        ps = Object.create(null),
        fs = {
            isIE: _o,
            expectHTML: !0,
            modules: us,
            staticKeys: h(us),
            directives: ls,
            isReservedTag: go,
            isUnaryTag: po,
            mustUseProp: no,
            getTagNamespace: Rt,
            isPreTag: mo
        },
        hs = a(function(e) {
            var t = Ht(e);
            return t && t.innerHTML
        }),
        vs = gt.prototype.$mount;
    return gt.prototype.$mount = function(e, t) {
            if (e = e && Ht(e),
                e === document.body || e === document.documentElement)
                return this;
            var n = this.$options;
            if (!n.render) {
                var r = n.template,
                    i = !1;
                if (r)
                    if ("string" == typeof r)
                        "#" === r.charAt(0) && (i = !0,
                            r = hs(r));
                    else {
                        if (!r.nodeType)
                            return this;
                        i = !0,
                            r = r.innerHTML
                    }
                else
                    e && (i = !0,
                        r = ri(e));
                if (r) {
                    var o = ti(r, {
                            warn: Ki,
                            isFromDOM: i,
                            shouldDecodeTags: ko,
                            delimiters: n.delimiters
                        }, this),
                        a = o.render,
                        s = o.staticRenderFns;
                    n.render = a,
                        n.staticRenderFns = s
                }
            }
            return vs.call(this, e, t)
        },
        gt.compile = ti,
        gt
}), ! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";

    function n(e, t) {
        t = t || Z;
        var n = t.createElement("script");
        n.text = e,
            t.head.appendChild(n).parentNode.removeChild(n)
    }

    function r(e) {
        var t = !!e && "length" in e && e.length,
            n = pt.type(e);
        return "function" === n || pt.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function i(e, t, n) {
        if (pt.isFunction(t))
            return pt.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            });
        if (t.nodeType)
            return pt.grep(e, function(e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (xt.test(t))
                return pt.filter(t, e, n);
            t = pt.filter(t, e)
        }
        return pt.grep(e, function(e) {
            return it.call(t, e) > -1 !== n && 1 === e.nodeType
        })
    }

    function o(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;)
        ;
        return e
    }

    function a(e) {
        var t = {};
        return pt.each(e.match(Et) || [], function(e, n) {
                t[n] = !0
            }),
            t
    }

    function s(e) {
        return e
    }

    function c(e) {
        throw e
    }

    function u(e, t, n) {
        var r;
        try {
            e && pt.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && pt.isFunction(r = e.then) ? r.call(e, t, n) : t.call(void 0, e)
        } catch (e) {
            n.call(void 0, e)
        }
    }

    function d() {
        Z.removeEventListener("DOMContentLoaded", d),
            e.removeEventListener("load", d),
            pt.ready()
    }

    function l() {
        this.expando = pt.expando + l.uid++
    }

    function p(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Pt, "-$&").toLowerCase(),
                n = e.getAttribute(r),
                "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : It.test(n) ? JSON.parse(n) : n
                } catch (i) {}
                Lt.set(e, t, n)
            } else
                n = void 0;
        return n
    }

    function f(e, t, n, r) {
        var i, o = 1,
            a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return pt.css(e, t, "")
            },
            c = s(),
            u = n && n[3] || (pt.cssNumber[t] ? "" : "px"),
            d = (pt.cssNumber[t] || "px" !== u && +c) && Bt.exec(pt.css(e, t));
        if (d && d[3] !== u) {
            u = u || d[3],
                n = n || [],
                d = +c || 1;
            do
                o = o || ".5",
                d /= o,
                pt.style(e, t, d + u);
            while (o !== (o = s() / c) && 1 !== o && --a)
        }
        return n && (d = +d || +c || 0,
                i = n[1] ? d + (n[1] + 1) * n[2] : +n[2],
                r && (r.unit = u,
                    r.start = d,
                    r.end = i)),
            i
    }

    function h(e) {
        var t, n = e.ownerDocument,
            r = e.nodeName,
            i = Ft[r];
        return i ? i : (t = n.body.appendChild(n.createElement(r)),
            i = pt.css(t, "display"),
            t.parentNode.removeChild(t),
            "none" === i && (i = "block"),
            Ft[r] = i,
            i)
    }

    function v(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; a > o; o++)
            r = e[o],
            r.style && (n = r.style.display,
                t ? ("none" === n && (i[o] = jt.get(r, "display") || null,
                        i[o] || (r.style.display = "")),
                    "" === r.style.display && qt(r) && (i[o] = h(r))) : "none" !== n && (i[o] = "none",
                    jt.set(r, "display", n)));
        for (o = 0; a > o; o++)
            null != i[o] && (e[o].style.display = i[o]);
        return e
    }

    function m(e, t) {
        var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && pt.nodeName(e, t) ? pt.merge([e], n) : n
    }

    function g(e, t) {
        for (var n = 0, r = e.length; r > n; n++)
            jt.set(e[n], "globalEval", !t || jt.get(t[n], "globalEval"))
    }

    function y(e, t, n, r, i) {
        for (var o, a, s, c, u, d, l = t.createDocumentFragment(), p = [], f = 0, h = e.length; h > f; f++)
            if (o = e[f],
                o || 0 === o)
                if ("object" === pt.type(o))
                    pt.merge(p, o.nodeType ? [o] : o);
                else if (zt.test(o)) {
            for (a = a || l.appendChild(t.createElement("div")),
                s = (Ut.exec(o) || ["", ""])[1].toLowerCase(),
                c = Gt[s] || Gt._default,
                a.innerHTML = c[1] + pt.htmlPrefilter(o) + c[2],
                d = c[0]; d--;)
                a = a.lastChild;
            pt.merge(p, a.childNodes),
                a = l.firstChild,
                a.textContent = ""
        } else
            p.push(t.createTextNode(o));
        for (l.textContent = "",
            f = 0; o = p[f++];)
            if (r && pt.inArray(o, r) > -1)
                i && i.push(o);
            else if (u = pt.contains(o.ownerDocument, o),
            a = m(l.appendChild(o), "script"),
            u && g(a),
            n)
            for (d = 0; o = a[d++];)
                Jt.test(o.type || "") && n.push(o);
        return l
    }

    function b() {
        return !0
    }

    function _() {
        return !1
    }

    function w() {
        try {
            return Z.activeElement
        } catch (e) {}
    }

    function x(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n,
                n = void 0);
            for (s in t)
                x(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
                r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
                r = void 0) : (i = r,
                r = n,
                n = void 0)),
            i === !1)
            i = _;
        else if (!i)
            return e;
        return 1 === o && (a = i,
                i = function(e) {
                    return pt().off(e),
                        a.apply(this, arguments)
                },
                i.guid = a.guid || (a.guid = pt.guid++)),
            e.each(function() {
                pt.event.add(this, t, i, r, n)
            })
    }

    function k(e, t) {
        return pt.nodeName(e, "table") && pt.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
    }

    function T(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
            e
    }

    function C(e) {
        var t = tn.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
            e
    }

    function S(e, t) {
        var n, r, i, o, a, s, c, u;
        if (1 === t.nodeType) {
            if (jt.hasData(e) && (o = jt.access(e),
                    a = jt.set(t, o),
                    u = o.events)) {
                delete a.handle,
                    a.events = {};
                for (i in u)
                    for (n = 0,
                        r = u[i].length; r > n; n++)
                        pt.event.add(t, i, u[i][n])
            }
            Lt.hasData(e) && (s = Lt.access(e),
                c = pt.extend({}, s),
                Lt.set(t, c))
        }
    }

    function A(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Wt.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function E(e, t, r, i) {
        t = nt.apply([], t);
        var o, a, s, c, u, d, l = 0,
            p = e.length,
            f = p - 1,
            h = t[0],
            v = pt.isFunction(h);
        if (v || p > 1 && "string" == typeof h && !dt.checkClone && en.test(h))
            return e.each(function(n) {
                var o = e.eq(n);
                v && (t[0] = h.call(this, n, o.html())),
                    E(o, t, r, i)
            });
        if (p && (o = y(t, e[0].ownerDocument, !1, e, i),
                a = o.firstChild,
                1 === o.childNodes.length && (o = a),
                a || i)) {
            for (s = pt.map(m(o, "script"), T),
                c = s.length; p > l; l++)
                u = o,
                l !== f && (u = pt.clone(u, !0, !0),
                    c && pt.merge(s, m(u, "script"))),
                r.call(e[l], u, l);
            if (c)
                for (d = s[s.length - 1].ownerDocument,
                    pt.map(s, C),
                    l = 0; c > l; l++)
                    u = s[l],
                    Jt.test(u.type || "") && !jt.access(u, "globalEval") && pt.contains(d, u) && (u.src ? pt._evalUrl && pt._evalUrl(u.src) : n(u.textContent.replace(nn, ""), d))
        }
        return e
    }

    function D(e, t, n) {
        for (var r, i = t ? pt.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || pt.cleanData(m(r)),
            r.parentNode && (n && pt.contains(r.ownerDocument, r) && g(m(r, "script")),
                r.parentNode.removeChild(r));
        return e
    }

    function $(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || an(e),
            n && (a = n.getPropertyValue(t) || n[t],
                "" !== a || pt.contains(e.ownerDocument, e) || (a = pt.style(e, t)), !dt.pixelMarginRight() && on.test(a) && rn.test(t) && (r = s.width,
                    i = s.minWidth,
                    o = s.maxWidth,
                    s.minWidth = s.maxWidth = s.width = a,
                    a = n.width,
                    s.width = r,
                    s.minWidth = i,
                    s.maxWidth = o)),
            void 0 !== a ? a + "" : a
    }

    function O(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function N(e) {
        if (e in ln)
            return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = dn.length; n--;)
            if (e = dn[n] + t,
                e in ln)
                return e
    }

    function j(e, t, n) {
        var r = Bt.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function L(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)
            "margin" === n && (a += pt.css(e, n + Rt[o], !0, i)),
            r ? ("content" === n && (a -= pt.css(e, "padding" + Rt[o], !0, i)),
                "margin" !== n && (a -= pt.css(e, "border" + Rt[o] + "Width", !0, i))) : (a += pt.css(e, "padding" + Rt[o], !0, i),
                "padding" !== n && (a += pt.css(e, "border" + Rt[o] + "Width", !0, i)));
        return a
    }

    function I(e, t, n) {
        var r, i = !0,
            o = an(e),
            a = "border-box" === pt.css(e, "boxSizing", !1, o);
        if (e.getClientRects().length && (r = e.getBoundingClientRect()[t]),
            0 >= r || null == r) {
            if (r = $(e, t, o),
                (0 > r || null == r) && (r = e.style[t]),
                on.test(r))
                return r;
            i = a && (dt.boxSizingReliable() || r === e.style[t]),
                r = parseFloat(r) || 0
        }
        return r + L(e, t, n || (a ? "border" : "content"), i, o) + "px"
    }

    function P(e, t, n, r, i) {
        return new P.prototype.init(e, t, n, r, i)
    }

    function M() {
        fn && (e.requestAnimationFrame(M),
            pt.fx.tick())
    }

    function B() {
        return e.setTimeout(function() {
                pn = void 0
            }),
            pn = pt.now()
    }

    function R(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > r; r += 2 - t)
            n = Rt[r],
            i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
            i
    }

    function q(e, t, n) {
        for (var r, i = (W.tweeners[t] || []).concat(W.tweeners["*"]), o = 0, a = i.length; a > o; o++)
            if (r = i[o].call(n, t, e))
                return r
    }

    function H(e, t, n) {
        var r, i, o, a, s, c, u, d, l = "width" in t || "height" in t,
            p = this,
            f = {},
            h = e.style,
            m = e.nodeType && qt(e),
            g = jt.get(e, "fxshow");
        n.queue || (a = pt._queueHooks(e, "fx"),
            null == a.unqueued && (a.unqueued = 0,
                s = a.empty.fire,
                a.empty.fire = function() {
                    a.unqueued || s()
                }
            ),
            a.unqueued++,
            p.always(function() {
                p.always(function() {
                    a.unqueued--,
                        pt.queue(e, "fx").length || a.empty.fire()
                })
            }));
        for (r in t)
            if (i = t[r],
                hn.test(i)) {
                if (delete t[r],
                    o = o || "toggle" === i,
                    i === (m ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[r])
                        continue;
                    m = !0
                }
                f[r] = g && g[r] || pt.style(e, r)
            }
        if (c = !pt.isEmptyObject(t),
            c || !pt.isEmptyObject(f)) {
            l && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                    u = g && g.display,
                    null == u && (u = jt.get(e, "display")),
                    d = pt.css(e, "display"),
                    "none" === d && (u ? d = u : (v([e], !0),
                        u = e.style.display || u,
                        d = pt.css(e, "display"),
                        v([e]))),
                    ("inline" === d || "inline-block" === d && null != u) && "none" === pt.css(e, "float") && (c || (p.done(function() {
                                h.display = u
                            }),
                            null == u && (d = h.display,
                                u = "none" === d ? "" : d)),
                        h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                    p.always(function() {
                        h.overflow = n.overflow[0],
                            h.overflowX = n.overflow[1],
                            h.overflowY = n.overflow[2]
                    })),
                c = !1;
            for (r in f)
                c || (g ? "hidden" in g && (m = g.hidden) : g = jt.access(e, "fxshow", {
                        display: u
                    }),
                    o && (g.hidden = !m),
                    m && v([e], !0),
                    p.done(function() {
                        m || v([e]),
                            jt.remove(e, "fxshow");
                        for (r in f)
                            pt.style(e, r, f[r])
                    })),
                c = q(m ? g[r] : 0, r, p),
                r in g || (g[r] = c.start,
                    m && (c.end = c.start,
                        c.start = 0))
        }
    }

    function F(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = pt.camelCase(n),
                i = t[r],
                o = e[n],
                pt.isArray(o) && (i = o[1],
                    o = e[n] = o[0]),
                n !== r && (e[r] = o,
                    delete e[n]),
                a = pt.cssHooks[r],
                a && "expand" in a) {
                o = a.expand(o),
                    delete e[r];
                for (n in o)
                    n in e || (e[n] = o[n],
                        t[n] = i)
            } else
                t[r] = i
    }

    function W(e, t, n) {
        var r, i, o = 0,
            a = W.prefilters.length,
            s = pt.Deferred().always(function() {
                delete c.elem
            }),
            c = function() {
                if (i)
                    return !1;
                for (var t = pn || B(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, a = 0, c = u.tweens.length; c > a; a++)
                    u.tweens[a].run(o);
                return s.notifyWith(e, [u, o, n]),
                    1 > o && c ? n : (s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: pt.extend({}, t),
                opts: pt.extend(!0, {
                    specialEasing: {},
                    easing: pt.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: pn || B(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = pt.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r),
                        r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if (i)
                        return this;
                    for (i = !0; r > n; n++)
                        u.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [u, 1, 0]),
                            s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]),
                        this
                }
            }),
            d = u.props;
        for (F(d, u.opts.specialEasing); a > o; o++)
            if (r = W.prefilters[o].call(u, e, d, u.opts))
                return pt.isFunction(r.stop) && (pt._queueHooks(u.elem, u.opts.queue).stop = pt.proxy(r.stop, r)),
                    r;
        return pt.map(d, q, u),
            pt.isFunction(u.opts.start) && u.opts.start.call(e, u),
            pt.fx.timer(pt.extend(c, {
                elem: e,
                anim: u,
                queue: u.opts.queue
            })),
            u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function U(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function J(e, t, n, r) {
        var i;
        if (pt.isArray(t))
            pt.each(t, function(t, i) {
                n || An.test(e) ? r(e, i) : J(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== pt.type(t))
            r(e, t);
        else
            for (i in t)
                J(e + "[" + i + "]", t[i], n, r)
    }

    function G(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
                t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(Et) || [];
            if (pt.isFunction(n))
                for (; r = o[i++];)
                    "+" === r[0] ? (r = r.slice(1) || "*",
                        (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function z(e, t, n, r) {
        function i(s) {
            var c;
            return o[s] = !0,
                pt.each(e[s] || [], function(e, s) {
                    var u = s(t, n, r);
                    return "string" != typeof u || a || o[u] ? a ? !(c = u) : void 0 : (t.dataTypes.unshift(u),
                        i(u), !1)
                }),
                c
        }
        var o = {},
            a = e === Rn;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function V(e, t) {
        var n, r, i = pt.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && pt.extend(!0, e, r),
            e
    }

    function K(e, t, n) {
        for (var r, i, o, a, s = e.contents, c = e.dataTypes;
            "*" === c[0];)
            c.shift(),
            void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    c.unshift(i);
                    break
                }
        if (c[0] in n)
            o = c[0];
        else {
            for (i in n) {
                if (!c[0] || e.converters[i + " " + c[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        return o ? (o !== c[0] && c.unshift(o),
            n[o]) : void 0
    }

    function X(e, t, n, r) {
        var i, o, a, s, c, u = {},
            d = e.dataTypes.slice();
        if (d[1])
            for (a in e.converters)
                u[a.toLowerCase()] = e.converters[a];
        for (o = d.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                c = o,
                o = d.shift())
                if ("*" === o)
                    o = c;
                else if ("*" !== c && c !== o) {
            if (a = u[c + " " + o] || u["* " + o], !a)
                for (i in u)
                    if (s = i.split(" "),
                        s[1] === o && (a = u[c + " " + s[0]] || u["* " + s[0]])) {
                        a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0],
                            d.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"])
                    t = a(t);
                else
                    try {
                        t = a(t)
                    } catch (l) {
                        return {
                            state: "parsererror",
                            error: a ? l : "No conversion from " + c + " to " + o
                        }
                    }
        }
        return {
            state: "success",
            data: t
        }
    }

    function Q(e) {
        return pt.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var Y = [],
        Z = e.document,
        et = Object.getPrototypeOf,
        tt = Y.slice,
        nt = Y.concat,
        rt = Y.push,
        it = Y.indexOf,
        ot = {},
        at = ot.toString,
        st = ot.hasOwnProperty,
        ct = st.toString,
        ut = ct.call(Object),
        dt = {},
        lt = "3.0.0",
        pt = function(e, t) {
            return new pt.fn.init(e, t)
        },
        ft = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ht = /^-ms-/,
        vt = /-([a-z])/g,
        mt = function(e, t) {
            return t.toUpperCase()
        };
    pt.fn = pt.prototype = {
            jquery: lt,
            constructor: pt,
            length: 0,
            toArray: function() {
                return tt.call(this)
            },
            get: function(e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : tt.call(this)
            },
            pushStack: function(e) {
                var t = pt.merge(this.constructor(), e);
                return t.prevObject = this,
                    t
            },
            each: function(e) {
                return pt.each(this, e)
            },
            map: function(e) {
                return this.pushStack(pt.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(tt.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: rt,
            sort: Y.sort,
            splice: Y.splice
        },
        pt.extend = pt.fn.extend = function() {
            var e, t, n, r, i, o, a = arguments[0] || {},
                s = 1,
                c = arguments.length,
                u = !1;
            for ("boolean" == typeof a && (u = a,
                    a = arguments[s] || {},
                    s++),
                "object" == typeof a || pt.isFunction(a) || (a = {}),
                s === c && (a = this,
                    s--); c > s; s++)
                if (null != (e = arguments[s]))
                    for (t in e)
                        n = a[t],
                        r = e[t],
                        a !== r && (u && r && (pt.isPlainObject(r) || (i = pt.isArray(r))) ? (i ? (i = !1,
                                o = n && pt.isArray(n) ? n : []) : o = n && pt.isPlainObject(n) ? n : {},
                            a[t] = pt.extend(u, o, r)) : void 0 !== r && (a[t] = r));
            return a
        },
        pt.extend({
            expando: "jQuery" + (lt + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === pt.type(e)
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                var t = pt.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            },
            isPlainObject: function(e) {
                var t, n;
                return e && "[object Object]" === at.call(e) ? (t = et(e)) ? (n = st.call(t, "constructor") && t.constructor,
                    "function" == typeof n && ct.call(n) === ut) : !0 : !1
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ot[at.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                n(e)
            },
            camelCase: function(e) {
                return e.replace(ht, "ms-").replace(vt, mt)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t) {
                var n, i = 0;
                if (r(e))
                    for (n = e.length; n > i && t.call(e[i], i, e[i]) !== !1; i++)
                ;
                else
                    for (i in e)
                        if (t.call(e[i], i, e[i]) === !1)
                            break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(ft, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (r(Object(e)) ? pt.merge(n, "string" == typeof e ? [e] : e) : rt.call(n, e)),
                    n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : it.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, i = e.length; n > r; r++)
                    e[i++] = t[r];
                return e.length = i,
                    e
            },
            grep: function(e, t, n) {
                for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++)
                    r = !t(e[o], o),
                    r !== s && i.push(e[o]);
                return i
            },
            map: function(e, t, n) {
                var i, o, a = 0,
                    s = [];
                if (r(e))
                    for (i = e.length; i > a; a++)
                        o = t(e[a], a, n),
                        null != o && s.push(o);
                else
                    for (a in e)
                        o = t(e[a], a, n),
                        null != o && s.push(o);
                return nt.apply([], s)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, r, i;
                return "string" == typeof t && (n = e[t],
                        t = e,
                        e = n),
                    pt.isFunction(e) ? (r = tt.call(arguments, 2),
                        i = function() {
                            return e.apply(t || this, r.concat(tt.call(arguments)))
                        },
                        i.guid = e.guid = e.guid || pt.guid++,
                        i) : void 0
            },
            now: Date.now,
            support: dt
        }),
        "function" == typeof Symbol && (pt.fn[Symbol.iterator] = Y[Symbol.iterator]),
        pt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            ot["[object " + t + "]"] = t.toLowerCase()
        });
    var gt = function(e) {
        function t(e, t, n, r) {
            var i, o, a, s, c, u, d, p = t && t.ownerDocument,
                h = t ? t.nodeType : 9;
            if (n = n || [],
                "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h)
                return n;
            if (!r && ((t ? t.ownerDocument || t : H) !== j && N(t),
                    t = t || j,
                    I)) {
                if (11 !== h && (c = gt.exec(e)))
                    if (i = c[1]) {
                        if (9 === h) {
                            if (!(a = t.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a),
                                    n
                        } else if (p && (a = p.getElementById(i)) && R(t, a) && a.id === i)
                            return n.push(a),
                                n
                    } else {
                        if (c[2])
                            return Y.apply(n, t.getElementsByTagName(e)),
                                n;
                        if ((i = c[3]) && x.getElementsByClassName && t.getElementsByClassName)
                            return Y.apply(n, t.getElementsByClassName(i)),
                                n
                    }
                if (!(!x.qsa || G[e + " "] || P && P.test(e))) {
                    if (1 !== h)
                        p = t,
                        d = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(wt, xt) : t.setAttribute("id", s = q),
                            u = S(e),
                            o = u.length; o--;)
                            u[o] = "#" + s + " " + f(u[o]);
                        d = u.join(","),
                            p = yt.test(e) && l(t.parentNode) || t
                    }
                    if (d)
                        try {
                            return Y.apply(n, p.querySelectorAll(d)),
                                n
                        } catch (v) {} finally {
                            s === q && t.removeAttribute("id")
                        }
                }
            }
            return E(e.replace(st, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > k.cacheLength && delete e[t.shift()],
                    e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[q] = !0,
                e
        }

        function i(e) {
            var t = j.createElement("fieldset");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                    t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--;)
                k.attrHandle[n[r]] = t
        }

        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function c(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function u(e) {
            return function(t) {
                return "label" in t && t.disabled === e || "form" in t && t.disabled === e || "form" in t && t.disabled === !1 && (t.isDisabled === e || t.isDisabled !== !e && ("label" in t || !Tt(t)) !== e)
            }
        }

        function d(e) {
            return r(function(t) {
                return t = +t,
                    r(function(n, r) {
                        for (var i, o = e([], n.length, t), a = o.length; a--;)
                            n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
            })
        }

        function l(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function p() {}

        function f(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++)
                r += e[t].value;
            return r
        }

        function h(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = W++;
            return t.first ? function(t, n, i) {
                for (; t = t[r];)
                    if (1 === t.nodeType || a)
                        return e(t, n, i)
            } : function(t, n, c) {
                var u, d, l, p = [F, s];
                if (c) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || a) && e(t, n, c))
                            return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || a)
                            if (l = t[q] || (t[q] = {}),
                                d = l[t.uniqueID] || (l[t.uniqueID] = {}),
                                i && i === t.nodeName.toLowerCase())
                                t = t[r] || t;
                            else {
                                if ((u = d[o]) && u[0] === F && u[1] === s)
                                    return p[2] = u[2];
                                if (d[o] = p,
                                    p[2] = e(t, n, c))
                                    return !0
                            }
            }
        }

        function v(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            } : e[0]
        }

        function m(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++)
                t(e, n[i], r);
            return r
        }

        function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, c = e.length, u = null != t; c > s; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                    u && t.push(s)));
            return a
        }

        function y(e, t, n, i, o, a) {
            return i && !i[q] && (i = y(i)),
                o && !o[q] && (o = y(o, a)),
                r(function(r, a, s, c) {
                    var u, d, l, p = [],
                        f = [],
                        h = a.length,
                        v = r || m(t || "*", s.nodeType ? [s] : s, []),
                        y = !e || !r && t ? v : g(v, p, e, s, c),
                        b = n ? o || (r ? e : h || i) ? [] : a : y;
                    if (n && n(y, b, s, c),
                        i)
                        for (u = g(b, f),
                            i(u, [], s, c),
                            d = u.length; d--;)
                            (l = u[d]) && (b[f[d]] = !(y[f[d]] = l));
                    if (r) {
                        if (o || e) {
                            if (o) {
                                for (u = [],
                                    d = b.length; d--;)
                                    (l = b[d]) && u.push(y[d] = l);
                                o(null, b = [], u, c)
                            }
                            for (d = b.length; d--;)
                                (l = b[d]) && (u = o ? et(r, l) : p[d]) > -1 && (r[u] = !(a[u] = l))
                        }
                    } else
                        b = g(b === a ? b.splice(h, b.length) : b),
                        o ? o(null, a, b, c) : Y.apply(a, b)
                })
        }

        function b(e) {
            for (var t, n, r, i = e.length, o = k.relative[e[0].type], a = o || k.relative[" "], s = o ? 1 : 0, c = h(function(e) {
                    return e === t
                }, a, !0), u = h(function(e) {
                    return et(t, e) > -1
                }, a, !0), d = [function(e, n, r) {
                    var i = !o && (r || n !== D) || ((t = n).nodeType ? c(e, n, r) : u(e, n, r));
                    return t = null,
                        i
                }]; i > s; s++)
                if (n = k.relative[e[s].type])
                    d = [h(v(d), n)];
                else {
                    if (n = k.filter[e[s].type].apply(null, e[s].matches),
                        n[q]) {
                        for (r = ++s; i > r && !k.relative[e[r].type]; r++)
                        ;
                        return y(s > 1 && v(d), s > 1 && f(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(st, "$1"), n, r > s && b(e.slice(s, r)), i > r && b(e = e.slice(r)), i > r && f(e))
                    }
                    d.push(n)
                }
            return v(d)
        }

        function _(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                a = function(r, a, s, c, u) {
                    var d, l, p, f = 0,
                        h = "0",
                        v = r && [],
                        m = [],
                        y = D,
                        b = r || o && k.find.TAG("*", u),
                        _ = F += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (u && (D = a === j || a || u); h !== w && null != (d = b[h]); h++) {
                        if (o && d) {
                            for (l = 0,
                                a || d.ownerDocument === j || (N(d),
                                    s = !I); p = e[l++];)
                                if (p(d, a || j, s)) {
                                    c.push(d);
                                    break
                                }
                            u && (F = _)
                        }
                        i && ((d = !p && d) && f--,
                            r && v.push(d))
                    }
                    if (f += h,
                        i && h !== f) {
                        for (l = 0; p = n[l++];)
                            p(v, m, a, s);
                        if (r) {
                            if (f > 0)
                                for (; h--;)
                                    v[h] || m[h] || (m[h] = X.call(c));
                            m = g(m)
                        }
                        Y.apply(c, m),
                            u && !r && m.length > 0 && f + n.length > 1 && t.uniqueSort(c)
                    }
                    return u && (F = _,
                            D = y),
                        v
                };
            return i ? r(a) : a
        }
        var w, x, k, T, C, S, A, E, D, $, O, N, j, L, I, P, M, B, R, q = "sizzle" + 1 * new Date,
            H = e.document,
            F = 0,
            W = 0,
            U = n(),
            J = n(),
            G = n(),
            z = function(e, t) {
                return e === t && (O = !0),
                    0
            },
            V = {}.hasOwnProperty,
            K = [],
            X = K.pop,
            Q = K.push,
            Y = K.push,
            Z = K.slice,
            et = function(e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                    if (e[n] === t)
                        return n;
                return -1
            },
            tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            nt = "[\\x20\\t\\r\\n\\f]",
            rt = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",
            it = "\\[" + nt + "*(" + rt + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + nt + "*\\]",
            ot = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)",
            at = new RegExp(nt + "+", "g"),
            st = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
            ct = new RegExp("^" + nt + "*," + nt + "*"),
            ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
            dt = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
            lt = new RegExp(ot),
            pt = new RegExp("^" + rt + "$"),
            ft = {
                ID: new RegExp("^#(" + rt + ")"),
                CLASS: new RegExp("^\\.(" + rt + ")"),
                TAG: new RegExp("^(" + rt + "|[*])"),
                ATTR: new RegExp("^" + it),
                PSEUDO: new RegExp("^" + ot),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + tt + ")$", "i"),
                needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
            },
            ht = /^(?:input|select|textarea|button)$/i,
            vt = /^h\d$/i,
            mt = /^[^{]+\{\s*\[native \w/,
            gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            yt = /[+~]/,
            bt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
            _t = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            wt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
            xt = function(e, t) {
                return t ? "\x00" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            kt = function() {
                N()
            },
            Tt = h(function(e) {
                return e.disabled === !0
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            Y.apply(K = Z.call(H.childNodes), H.childNodes),
                K[H.childNodes.length].nodeType
        } catch (Ct) {
            Y = {
                apply: K.length ? function(e, t) {
                    Q.apply(e, Z.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];)
                    ;
                    e.length = n - 1
                }
            }
        }
        x = t.support = {},
            C = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            },
            N = t.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : H;
                return r !== j && 9 === r.nodeType && r.documentElement ? (j = r,
                    L = j.documentElement,
                    I = !C(j),
                    H !== j && (n = j.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", kt, !1) : n.attachEvent && n.attachEvent("onunload", kt)),
                    x.attributes = i(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }),
                    x.getElementsByTagName = i(function(e) {
                        return e.appendChild(j.createComment("")), !e.getElementsByTagName("*").length
                    }),
                    x.getElementsByClassName = mt.test(j.getElementsByClassName),
                    x.getById = i(function(e) {
                        return L.appendChild(e).id = q, !j.getElementsByName || !j.getElementsByName(q).length
                    }),
                    x.getById ? (k.find.ID = function(e, t) {
                            if ("undefined" != typeof t.getElementById && I) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        },
                        k.filter.ID = function(e) {
                            var t = e.replace(bt, _t);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }
                    ) : (delete k.find.ID,
                        k.filter.ID = function(e) {
                            var t = e.replace(bt, _t);
                            return function(e) {
                                var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }
                    ),
                    k.find.TAG = x.getElementsByTagName ? function(e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
                    } : function(e, t) {
                        var n, r = [],
                            i = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = o[i++];)
                                1 === n.nodeType && r.push(n);
                            return r
                        }
                        return o
                    },
                    k.find.CLASS = x.getElementsByClassName && function(e, t) {
                        return "undefined" != typeof t.getElementsByClassName && I ? t.getElementsByClassName(e) : void 0
                    },
                    M = [],
                    P = [],
                    (x.qsa = mt.test(j.querySelectorAll)) && (i(function(e) {
                            L.appendChild(e).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                                e.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + nt + "*(?:''|\"\")"),
                                e.querySelectorAll("[selected]").length || P.push("\\[" + nt + "*(?:value|" + tt + ")"),
                                e.querySelectorAll("[id~=" + q + "-]").length || P.push("~="),
                                e.querySelectorAll(":checked").length || P.push(":checked"),
                                e.querySelectorAll("a#" + q + "+*").length || P.push(".#.+[+~]")
                        }),
                        i(function(e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = j.createElement("input");
                            t.setAttribute("type", "hidden"),
                                e.appendChild(t).setAttribute("name", "D"),
                                e.querySelectorAll("[name=d]").length && P.push("name" + nt + "*[*^$|!~]?="),
                                2 !== e.querySelectorAll(":enabled").length && P.push(":enabled", ":disabled"),
                                L.appendChild(e).disabled = !0,
                                2 !== e.querySelectorAll(":disabled").length && P.push(":enabled", ":disabled"),
                                e.querySelectorAll("*,:x"),
                                P.push(",.*:")
                        })),
                    (x.matchesSelector = mt.test(B = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && i(function(e) {
                        x.disconnectedMatch = B.call(e, "*"),
                            B.call(e, "[s!='']:x"),
                            M.push("!=", ot)
                    }),
                    P = P.length && new RegExp(P.join("|")),
                    M = M.length && new RegExp(M.join("|")),
                    t = mt.test(L.compareDocumentPosition),
                    R = t || mt.test(L.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e)
                                    return !0;
                        return !1
                    },
                    z = t ? function(e, t) {
                        if (e === t)
                            return O = !0,
                                0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                            1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === j || e.ownerDocument === H && R(H, e) ? -1 : t === j || t.ownerDocument === H && R(H, t) ? 1 : $ ? et($, e) - et($, t) : 0 : 4 & n ? -1 : 1)
                    } : function(e, t) {
                        if (e === t)
                            return O = !0,
                                0;
                        var n, r = 0,
                            i = e.parentNode,
                            o = t.parentNode,
                            s = [e],
                            c = [t];
                        if (!i || !o)
                            return e === j ? -1 : t === j ? 1 : i ? -1 : o ? 1 : $ ? et($, e) - et($, t) : 0;
                        if (i === o)
                            return a(e, t);
                        for (n = e; n = n.parentNode;)
                            s.unshift(n);
                        for (n = t; n = n.parentNode;)
                            c.unshift(n);
                        for (; s[r] === c[r];)
                            r++;
                        return r ? a(s[r], c[r]) : s[r] === H ? -1 : c[r] === H ? 1 : 0
                    },
                    j) : j
            },
            t.matches = function(e, n) {
                return t(e, null, null, n)
            },
            t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== j && N(e),
                    n = n.replace(dt, "='$1']"), !(!x.matchesSelector || !I || G[n + " "] || M && M.test(n) || P && P.test(n)))
                    try {
                        var r = B.call(e, n);
                        if (r || x.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                            return r
                    } catch (i) {}
                return t(n, j, null, [e]).length > 0
            },
            t.contains = function(e, t) {
                return (e.ownerDocument || e) !== j && N(e),
                    R(e, t)
            },
            t.attr = function(e, t) {
                (e.ownerDocument || e) !== j && N(e);
                var n = k.attrHandle[t.toLowerCase()],
                    r = n && V.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !I) : void 0;
                return void 0 !== r ? r : x.attributes || !I ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            },
            t.escape = function(e) {
                return (e + "").replace(wt, xt)
            },
            t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            },
            t.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (O = !x.detectDuplicates,
                    $ = !x.sortStable && e.slice(0),
                    e.sort(z),
                    O) {
                    for (; t = e[i++];)
                        t === e[i] && (r = n.push(i));
                    for (; r--;)
                        e.splice(n[r], 1)
                }
                return $ = null,
                    e
            },
            T = t.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            n += T(e)
                    } else if (3 === i || 4 === i)
                        return e.nodeValue
                } else
                    for (; t = e[r++];)
                        n += T(t);
                return n
            },
            k = t.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: ft,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(bt, _t),
                            e[3] = (e[3] || e[4] || e[5] || "").replace(bt, _t),
                            "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(),
                            "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                                e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                                e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                            e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return ft.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && lt.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                                e[2] = n.slice(0, t)),
                            e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(bt, _t).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = U[e + " "];
                        return t || (t = new RegExp("(^|" + nt + ")" + e + "(" + nt + "|$)")) && U(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, r) {
                        return function(i) {
                            var o = t.attr(i, e);
                            return null == o ? "!=" === n : n ? (o += "",
                                "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(at, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, c) {
                            var u, d, l, p, f, h, v = o !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                g = s && t.nodeName.toLowerCase(),
                                y = !c && !s,
                                b = !1;
                            if (m) {
                                if (o) {
                                    for (; v;) {
                                        for (p = t; p = p[v];)
                                            if (s ? p.nodeName.toLowerCase() === g : 1 === p.nodeType)
                                                return !1;
                                        h = v = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? m.firstChild : m.lastChild],
                                    a && y) {
                                    for (p = m,
                                        l = p[q] || (p[q] = {}),
                                        d = l[p.uniqueID] || (l[p.uniqueID] = {}),
                                        u = d[e] || [],
                                        f = u[0] === F && u[1],
                                        b = f && u[2],
                                        p = f && m.childNodes[f]; p = ++f && p && p[v] || (b = f = 0) || h.pop();)
                                        if (1 === p.nodeType && ++b && p === t) {
                                            d[e] = [F, f, b];
                                            break
                                        }
                                } else if (y && (p = t,
                                        l = p[q] || (p[q] = {}),
                                        d = l[p.uniqueID] || (l[p.uniqueID] = {}),
                                        u = d[e] || [],
                                        f = u[0] === F && u[1],
                                        b = f),
                                    b === !1)
                                    for (;
                                        (p = ++f && p && p[v] || (b = f = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++b || (y && (l = p[q] || (p[q] = {}),
                                                d = l[p.uniqueID] || (l[p.uniqueID] = {}),
                                                d[e] = [F, b]),
                                            p !== t));)
                                ;
                                return b -= i,
                                    b === r || b % r === 0 && b / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var i, o = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[q] ? o(n) : o.length > 1 ? (i = [e, e, "", n],
                            k.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                                for (var r, i = o(e, n), a = i.length; a--;)
                                    r = et(e, i[a]),
                                    e[r] = !(t[r] = i[a])
                            }) : function(e) {
                                return o(e, 0, i)
                            }
                        ) : o
                    }
                },
                pseudos: {
                    not: r(function(e) {
                        var t = [],
                            n = [],
                            i = A(e.replace(st, "$1"));
                        return i[q] ? r(function(e, t, n, r) {
                            for (var o, a = i(e, null, r, []), s = e.length; s--;)
                                (o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, r, o) {
                            return t[0] = e,
                                i(t, null, o, n),
                                t[0] = null, !n.pop()
                        }
                    }),
                    has: r(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: r(function(e) {
                        return e = e.replace(bt, _t),
                            function(t) {
                                return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                            }
                    }),
                    lang: r(function(e) {
                        return pt.test(e || "") || t.error("unsupported lang: " + e),
                            e = e.replace(bt, _t).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = I ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                        return n = n.toLowerCase(),
                                            n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === L
                    },
                    focus: function(e) {
                        return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: u(!1),
                    disabled: u(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                            e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !k.pseudos.empty(e)
                    },
                    header: function(e) {
                        return vt.test(e.nodeName)
                    },
                    input: function(e) {
                        return ht.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: d(function() {
                        return [0]
                    }),
                    last: d(function(e, t) {
                        return [t - 1]
                    }),
                    eq: d(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: d(function(e, t) {
                        for (var n = 0; t > n; n += 2)
                            e.push(n);
                        return e
                    }),
                    odd: d(function(e, t) {
                        for (var n = 1; t > n; n += 2)
                            e.push(n);
                        return e
                    }),
                    lt: d(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; --r >= 0;)
                            e.push(r);
                        return e
                    }),
                    gt: d(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; ++r < t;)
                            e.push(r);
                        return e
                    })
                }
            },
            k.pseudos.nth = k.pseudos.eq;
        for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
            k.pseudos[w] = s(w);
        for (w in {
                submit: !0,
                reset: !0
            })
            k.pseudos[w] = c(w);
        return p.prototype = k.filters = k.pseudos,
            k.setFilters = new p,
            S = t.tokenize = function(e, n) {
                var r, i, o, a, s, c, u, d = J[e + " "];
                if (d)
                    return n ? 0 : d.slice(0);
                for (s = e,
                    c = [],
                    u = k.preFilter; s;) {
                    r && !(i = ct.exec(s)) || (i && (s = s.slice(i[0].length) || s),
                            c.push(o = [])),
                        r = !1,
                        (i = ut.exec(s)) && (r = i.shift(),
                            o.push({
                                value: r,
                                type: i[0].replace(st, " ")
                            }),
                            s = s.slice(r.length));
                    for (a in k.filter)
                        !(i = ft[a].exec(s)) || u[a] && !(i = u[a](i)) || (r = i.shift(),
                            o.push({
                                value: r,
                                type: a,
                                matches: i
                            }),
                            s = s.slice(r.length));
                    if (!r)
                        break
                }
                return n ? s.length : s ? t.error(e) : J(e, c).slice(0)
            },
            A = t.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    o = G[e + " "];
                if (!o) {
                    for (t || (t = S(e)),
                        n = t.length; n--;)
                        o = b(t[n]),
                        o[q] ? r.push(o) : i.push(o);
                    o = G(e, _(i, r)),
                        o.selector = e
                }
                return o
            },
            E = t.select = function(e, t, n, r) {
                var i, o, a, s, c, u = "function" == typeof e && e,
                    d = !r && S(e = u.selector || e);
                if (n = n || [],
                    1 === d.length) {
                    if (o = d[0] = d[0].slice(0),
                        o.length > 2 && "ID" === (a = o[0]).type && x.getById && 9 === t.nodeType && I && k.relative[o[1].type]) {
                        if (t = (k.find.ID(a.matches[0].replace(bt, _t), t) || [])[0], !t)
                            return n;
                        u && (t = t.parentNode),
                            e = e.slice(o.shift().value.length)
                    }
                    for (i = ft.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !k.relative[s = a.type]);)
                        if ((c = k.find[s]) && (r = c(a.matches[0].replace(bt, _t), yt.test(o[0].type) && l(t.parentNode) || t))) {
                            if (o.splice(i, 1),
                                e = r.length && f(o), !e)
                                return Y.apply(n, r),
                                    n;
                            break
                        }
                }
                return (u || A(e, d))(r, t, !I, n, !t || yt.test(e) && l(t.parentNode) || t),
                    n
            },
            x.sortStable = q.split("").sort(z).join("") === q,
            x.detectDuplicates = !!O,
            N(),
            x.sortDetached = i(function(e) {
                return 1 & e.compareDocumentPosition(j.createElement("fieldset"))
            }),
            i(function(e) {
                return e.innerHTML = "<a href='#'></a>",
                    "#" === e.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }),
            x.attributes && i(function(e) {
                return e.innerHTML = "<input/>",
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
            }) || o("value", function(e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }),
            i(function(e) {
                return null == e.getAttribute("disabled")
            }) || o(tt, function(e, t, n) {
                var r;
                return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }),
            t
    }(e);
    pt.find = gt,
        pt.expr = gt.selectors,
        pt.expr[":"] = pt.expr.pseudos,
        pt.uniqueSort = pt.unique = gt.uniqueSort,
        pt.text = gt.getText,
        pt.isXMLDoc = gt.isXML,
        pt.contains = gt.contains,
        pt.escapeSelector = gt.escape;
    var yt = function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && pt(e).is(n))
                        break;
                    r.push(e)
                }
            return r
        },
        bt = function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        _t = pt.expr.match.needsContext,
        wt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        xt = /^.[^:#\[\.,]*$/;
    pt.filter = function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"),
                1 === t.length && 1 === r.nodeType ? pt.find.matchesSelector(r, e) ? [r] : [] : pt.find.matches(e, pt.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
        },
        pt.fn.extend({
            find: function(e) {
                var t, n, r = this.length,
                    i = this;
                if ("string" != typeof e)
                    return this.pushStack(pt(e).filter(function() {
                        for (t = 0; r > t; t++)
                            if (pt.contains(i[t], this))
                                return !0
                    }));
                for (n = this.pushStack([]),
                    t = 0; r > t; t++)
                    pt.find(e, i[t], n);
                return r > 1 ? pt.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(i(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(i(this, e || [], !0))
            },
            is: function(e) {
                return !!i(this, "string" == typeof e && _t.test(e) ? pt(e) : e || [], !1).length
            }
        });
    var kt, Tt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        Ct = pt.fn.init = function(e, t, n) {
            var r, i;
            if (!e)
                return this;
            if (n = n || kt,
                "string" == typeof e) {
                if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Tt.exec(e), !r || !r[1] && t)
                    return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof pt ? t[0] : t,
                        pt.merge(this, pt.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : Z, !0)),
                        wt.test(r[1]) && pt.isPlainObject(t))
                        for (r in t)
                            pt.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return i = Z.getElementById(r[2]),
                    i && (this[0] = i,
                        this.length = 1),
                    this
            }
            return e.nodeType ? (this[0] = e,
                this.length = 1,
                this) : pt.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(pt) : pt.makeArray(e, this)
        };
    Ct.prototype = pt.fn,
        kt = pt(Z);
    var St = /^(?:parents|prev(?:Until|All))/,
        At = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    pt.fn.extend({
            has: function(e) {
                var t = pt(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; n > e; e++)
                        if (pt.contains(this, t[e]))
                            return !0
                })
            },
            closest: function(e, t) {
                var n, r = 0,
                    i = this.length,
                    o = [],
                    a = "string" != typeof e && pt(e);
                if (!_t.test(e))
                    for (; i > r; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && pt.find.matchesSelector(n, e))) {
                                o.push(n);
                                break
                            }
                return this.pushStack(o.length > 1 ? pt.uniqueSort(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? it.call(pt(e), this[0]) : it.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(pt.uniqueSort(pt.merge(this.get(), pt(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }),
        pt.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return yt(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return yt(e, "parentNode", n)
            },
            next: function(e) {
                return o(e, "nextSibling")
            },
            prev: function(e) {
                return o(e, "previousSibling")
            },
            nextAll: function(e) {
                return yt(e, "nextSibling")
            },
            prevAll: function(e) {
                return yt(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return yt(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return yt(e, "previousSibling", n)
            },
            siblings: function(e) {
                return bt((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return bt(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || pt.merge([], e.childNodes)
            }
        }, function(e, t) {
            pt.fn[e] = function(n, r) {
                var i = pt.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n),
                    r && "string" == typeof r && (i = pt.filter(r, i)),
                    this.length > 1 && (At[e] || pt.uniqueSort(i),
                        St.test(e) && i.reverse()),
                    this.pushStack(i)
            }
        });
    var Et = /\S+/g;
    pt.Callbacks = function(e) {
            e = "string" == typeof e ? a(e) : pt.extend({}, e);
            var t, n, r, i, o = [],
                s = [],
                c = -1,
                u = function() {
                    for (i = e.once,
                        r = t = !0; s.length; c = -1)
                        for (n = s.shift(); ++c < o.length;)
                            o[c].apply(n[0], n[1]) === !1 && e.stopOnFalse && (c = o.length,
                                n = !1);
                    e.memory || (n = !1),
                        t = !1,
                        i && (o = n ? [] : "")
                },
                d = {
                    add: function() {
                        return o && (n && !t && (c = o.length - 1,
                                    s.push(n)),
                                function r(t) {
                                    pt.each(t, function(t, n) {
                                        pt.isFunction(n) ? e.unique && d.has(n) || o.push(n) : n && n.length && "string" !== pt.type(n) && r(n)
                                    })
                                }(arguments),
                                n && !t && u()),
                            this
                    },
                    remove: function() {
                        return pt.each(arguments, function(e, t) {
                                for (var n;
                                    (n = pt.inArray(t, o, n)) > -1;)
                                    o.splice(n, 1),
                                    c >= n && c--
                            }),
                            this
                    },
                    has: function(e) {
                        return e ? pt.inArray(e, o) > -1 : o.length > 0
                    },
                    empty: function() {
                        return o && (o = []),
                            this
                    },
                    disable: function() {
                        return i = s = [],
                            o = n = "",
                            this
                    },
                    disabled: function() {
                        return !o
                    },
                    lock: function() {
                        return i = s = [],
                            n || t || (o = n = ""),
                            this
                    },
                    locked: function() {
                        return !!i
                    },
                    fireWith: function(e, n) {
                        return i || (n = n || [],
                                n = [e, n.slice ? n.slice() : n],
                                s.push(n),
                                t || u()),
                            this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments),
                            this
                    },
                    fired: function() {
                        return !!r
                    }
                };
            return d
        },
        pt.extend({
            Deferred: function(t) {
                var n = [
                        ["notify", "progress", pt.Callbacks("memory"), pt.Callbacks("memory"), 2],
                        ["resolve", "done", pt.Callbacks("once memory"), pt.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", pt.Callbacks("once memory"), pt.Callbacks("once memory"), 1, "rejected"]
                    ],
                    r = "pending",
                    i = {
                        state: function() {
                            return r
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments),
                                this
                        },
                        "catch": function(e) {
                            return i.then(null, e)
                        },
                        pipe: function() {
                            var e = arguments;
                            return pt.Deferred(function(t) {
                                pt.each(n, function(n, r) {
                                        var i = pt.isFunction(e[r[4]]) && e[r[4]];
                                        o[r[1]](function() {
                                            var e = i && i.apply(this, arguments);
                                            e && pt.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                        })
                                    }),
                                    e = null
                            }).promise()
                        },
                        then: function(t, r, i) {
                            function o(t, n, r, i) {
                                return function() {
                                    var u = this,
                                        d = arguments,
                                        l = function() {
                                            var e, l;
                                            if (!(a > t)) {
                                                if (e = r.apply(u, d),
                                                    e === n.promise())
                                                    throw new TypeError("Thenable self-resolution");
                                                l = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                                    pt.isFunction(l) ? i ? l.call(e, o(a, n, s, i), o(a, n, c, i)) : (a++,
                                                        l.call(e, o(a, n, s, i), o(a, n, c, i), o(a, n, s, n.notifyWith))) : (r !== s && (u = void 0,
                                                            d = [e]),
                                                        (i || n.resolveWith)(u, d))
                                            }
                                        },
                                        p = i ? l : function() {
                                            try {
                                                l()
                                            } catch (e) {
                                                pt.Deferred.exceptionHook && pt.Deferred.exceptionHook(e, p.stackTrace),
                                                    t + 1 >= a && (r !== c && (u = void 0,
                                                            d = [e]),
                                                        n.rejectWith(u, d))
                                            }
                                        };
                                    t ? p() : (pt.Deferred.getStackHook && (p.stackTrace = pt.Deferred.getStackHook()),
                                        e.setTimeout(p))
                                }
                            }
                            var a = 0;
                            return pt.Deferred(function(e) {
                                n[0][3].add(o(0, e, pt.isFunction(i) ? i : s, e.notifyWith)),
                                    n[1][3].add(o(0, e, pt.isFunction(t) ? t : s)),
                                    n[2][3].add(o(0, e, pt.isFunction(r) ? r : c))
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? pt.extend(e, i) : i
                        }
                    },
                    o = {};
                return pt.each(n, function(e, t) {
                        var a = t[2],
                            s = t[5];
                        i[t[1]] = a.add,
                            s && a.add(function() {
                                r = s
                            }, n[3 - e][2].disable, n[0][2].lock),
                            a.add(t[3].fire),
                            o[t[0]] = function() {
                                return o[t[0] + "With"](this === o ? void 0 : this, arguments),
                                    this
                            },
                            o[t[0] + "With"] = a.fireWith
                    }),
                    i.promise(o),
                    t && t.call(o, o),
                    o
            },
            when: function(e) {
                var t = arguments.length,
                    n = t,
                    r = Array(n),
                    i = tt.call(arguments),
                    o = pt.Deferred(),
                    a = function(e) {
                        return function(n) {
                            r[e] = this,
                                i[e] = arguments.length > 1 ? tt.call(arguments) : n,
                                --t || o.resolveWith(r, i)
                        }
                    };
                if (1 >= t && (u(e, o.done(a(n)).resolve, o.reject),
                        "pending" === o.state() || pt.isFunction(i[n] && i[n].then)))
                    return o.then();
                for (; n--;)
                    u(i[n], a(n), o.reject);
                return o.promise()
            }
        });
    var Dt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    pt.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && Dt.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    };
    var $t = pt.Deferred();
    pt.fn.ready = function(e) {
            return $t.then(e),
                this
        },
        pt.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? pt.readyWait++ : pt.ready(!0)
            },
            ready: function(e) {
                (e === !0 ? --pt.readyWait : pt.isReady) || (pt.isReady = !0,
                    e !== !0 && --pt.readyWait > 0 || $t.resolveWith(Z, [pt]))
            }
        }),
        pt.ready.then = $t.then,
        "complete" === Z.readyState || "loading" !== Z.readyState && !Z.documentElement.doScroll ? e.setTimeout(pt.ready) : (Z.addEventListener("DOMContentLoaded", d),
            e.addEventListener("load", d));
    var Ot = function(e, t, n, r, i, o, a) {
            var s = 0,
                c = e.length,
                u = null == n;
            if ("object" === pt.type(n)) {
                i = !0;
                for (s in n)
                    Ot(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== r && (i = !0,
                    pt.isFunction(r) || (a = !0),
                    u && (a ? (t.call(e, r),
                        t = null) : (u = t,
                        t = function(e, t, n) {
                            return u.call(pt(e), n)
                        }
                    )),
                    t))
                for (; c > s; s++)
                    t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : u ? t.call(e) : c ? t(e[0], n) : o
        },
        Nt = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    l.uid = 1,
        l.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {},
                        Nt(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0
                        }))),
                    t
            },
            set: function(e, t, n) {
                var r, i = this.cache(e);
                if ("string" == typeof t)
                    i[pt.camelCase(t)] = n;
                else
                    for (r in t)
                        i[pt.camelCase(r)] = t[r];
                return i
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][pt.camelCase(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
                    void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        pt.isArray(t) ? t = t.map(pt.camelCase) : (t = pt.camelCase(t),
                                t = t in r ? [t] : t.match(Et) || []),
                            n = t.length;
                        for (; n--;)
                            delete r[t[n]]
                    }
                    (void 0 === t || pt.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !pt.isEmptyObject(t)
            }
        };
    var jt = new l,
        Lt = new l,
        It = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Pt = /[A-Z]/g;
    pt.extend({
            hasData: function(e) {
                return Lt.hasData(e) || jt.hasData(e)
            },
            data: function(e, t, n) {
                return Lt.access(e, t, n)
            },
            removeData: function(e, t) {
                Lt.remove(e, t)
            },
            _data: function(e, t, n) {
                return jt.access(e, t, n)
            },
            _removeData: function(e, t) {
                jt.remove(e, t)
            }
        }),
        pt.fn.extend({
            data: function(e, t) {
                var n, r, i, o = this[0],
                    a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (i = Lt.get(o),
                            1 === o.nodeType && !jt.get(o, "hasDataAttrs"))) {
                        for (n = a.length; n--;)
                            a[n] && (r = a[n].name,
                                0 === r.indexOf("data-") && (r = pt.camelCase(r.slice(5)),
                                    p(o, r, i[r])));
                        jt.set(o, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each(function() {
                    Lt.set(this, e)
                }) : Ot(this, function(t) {
                    var n;
                    if (o && void 0 === t) {
                        if (n = Lt.get(o, e),
                            void 0 !== n)
                            return n;
                        if (n = p(o, e),
                            void 0 !== n)
                            return n
                    } else
                        this.each(function() {
                            Lt.set(this, e, t)
                        })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    Lt.remove(this, e)
                })
            }
        }),
        pt.extend({
            queue: function(e, t, n) {
                var r;
                return e ? (t = (t || "fx") + "queue",
                    r = jt.get(e, t),
                    n && (!r || pt.isArray(n) ? r = jt.access(e, t, pt.makeArray(n)) : r.push(n)),
                    r || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = pt.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = pt._queueHooks(e, t),
                    a = function() {
                        pt.dequeue(e, t)
                    };
                "inprogress" === i && (i = n.shift(),
                        r--),
                    i && ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        i.call(e, a, o)), !r && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return jt.get(e, n) || jt.access(e, n, {
                    empty: pt.Callbacks("once memory").add(function() {
                        jt.remove(e, [t + "queue", n])
                    })
                })
            }
        }),
        pt.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e,
                        e = "fx",
                        n--),
                    arguments.length < n ? pt.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var n = pt.queue(this, e, t);
                        pt._queueHooks(this, e),
                            "fx" === e && "inprogress" !== n[0] && pt.dequeue(this, e)
                    })
            },
            dequeue: function(e) {
                return this.each(function() {
                    pt.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1,
                    i = pt.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {
                        --r || i.resolveWith(o, [o])
                    };
                for ("string" != typeof e && (t = e,
                        e = void 0),
                    e = e || "fx"; a--;)
                    n = jt.get(o[a], e + "queueHooks"),
                    n && n.empty && (r++,
                        n.empty.add(s));
                return s(),
                    i.promise(t)
            }
        });
    var Mt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Bt = new RegExp("^(?:([+-])=|)(" + Mt + ")([a-z%]*)$", "i"),
        Rt = ["Top", "Right", "Bottom", "Left"],
        qt = function(e, t) {
            return e = t || e,
                "none" === e.style.display || "" === e.style.display && pt.contains(e.ownerDocument, e) && "none" === pt.css(e, "display")
        },
        Ht = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t)
                a[o] = e.style[o],
                e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t)
                e.style[o] = a[o];
            return i
        },
        Ft = {};
    pt.fn.extend({
        show: function() {
            return v(this, !0)
        },
        hide: function() {
            return v(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                qt(this) ? pt(this).show() : pt(this).hide()
            })
        }
    });
    var Wt = /^(?:checkbox|radio)$/i,
        Ut = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Jt = /^$|\/(?:java|ecma)script/i,
        Gt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Gt.optgroup = Gt.option,
        Gt.tbody = Gt.tfoot = Gt.colgroup = Gt.caption = Gt.thead,
        Gt.th = Gt.td;
    var zt = /<|&#?\w+;/;
    ! function() {
        var e = Z.createDocumentFragment(),
            t = e.appendChild(Z.createElement("div")),
            n = Z.createElement("input");
        n.setAttribute("type", "radio"),
            n.setAttribute("checked", "checked"),
            n.setAttribute("name", "t"),
            t.appendChild(n),
            dt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
            t.innerHTML = "<textarea>x</textarea>",
            dt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Vt = Z.documentElement,
        Kt = /^key/,
        Xt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Qt = /^([^.]*)(?:\.(.+)|)/;
    pt.event = {
            global: {},
            add: function(e, t, n, r, i) {
                var o, a, s, c, u, d, l, p, f, h, v, m = jt.get(e);
                if (m)
                    for (n.handler && (o = n,
                            n = o.handler,
                            i = o.selector),
                        i && pt.find.matchesSelector(Vt, i),
                        n.guid || (n.guid = pt.guid++),
                        (c = m.events) || (c = m.events = {}),
                        (a = m.handle) || (a = m.handle = function(t) {
                            return "undefined" != typeof pt && pt.event.triggered !== t.type ? pt.event.dispatch.apply(e, arguments) : void 0
                        }),
                        t = (t || "").match(Et) || [""],
                        u = t.length; u--;)
                        s = Qt.exec(t[u]) || [],
                        f = v = s[1],
                        h = (s[2] || "").split(".").sort(),
                        f && (l = pt.event.special[f] || {},
                            f = (i ? l.delegateType : l.bindType) || f,
                            l = pt.event.special[f] || {},
                            d = pt.extend({
                                type: f,
                                origType: v,
                                data: r,
                                handler: n,
                                guid: n.guid,
                                selector: i,
                                needsContext: i && pt.expr.match.needsContext.test(i),
                                namespace: h.join(".")
                            }, o),
                            (p = c[f]) || (p = c[f] = [],
                                p.delegateCount = 0,
                                l.setup && l.setup.call(e, r, h, a) !== !1 || e.addEventListener && e.addEventListener(f, a)),
                            l.add && (l.add.call(e, d),
                                d.handler.guid || (d.handler.guid = n.guid)),
                            i ? p.splice(p.delegateCount++, 0, d) : p.push(d),
                            pt.event.global[f] = !0)
            },
            remove: function(e, t, n, r, i) {
                var o, a, s, c, u, d, l, p, f, h, v, m = jt.hasData(e) && jt.get(e);
                if (m && (c = m.events)) {
                    for (t = (t || "").match(Et) || [""],
                        u = t.length; u--;)
                        if (s = Qt.exec(t[u]) || [],
                            f = v = s[1],
                            h = (s[2] || "").split(".").sort(),
                            f) {
                            for (l = pt.event.special[f] || {},
                                f = (r ? l.delegateType : l.bindType) || f,
                                p = c[f] || [],
                                s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                a = o = p.length; o--;)
                                d = p[o], !i && v !== d.origType || n && n.guid !== d.guid || s && !s.test(d.namespace) || r && r !== d.selector && ("**" !== r || !d.selector) || (p.splice(o, 1),
                                    d.selector && p.delegateCount--,
                                    l.remove && l.remove.call(e, d));
                            a && !p.length && (l.teardown && l.teardown.call(e, h, m.handle) !== !1 || pt.removeEvent(e, f, m.handle),
                                delete c[f])
                        } else
                            for (f in c)
                                pt.event.remove(e, f + t[u], n, r, !0);
                    pt.isEmptyObject(c) && jt.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, r, i, o, a, s = pt.event.fix(e),
                    c = new Array(arguments.length),
                    u = (jt.get(this, "events") || {})[s.type] || [],
                    d = pt.event.special[s.type] || {};
                for (c[0] = s,
                    t = 1; t < arguments.length; t++)
                    c[t] = arguments[t];
                if (s.delegateTarget = this, !d.preDispatch || d.preDispatch.call(this, s) !== !1) {
                    for (a = pt.event.handlers.call(this, s, u),
                        t = 0;
                        (i = a[t++]) && !s.isPropagationStopped();)
                        for (s.currentTarget = i.elem,
                            n = 0;
                            (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();)
                            s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o,
                                s.data = o.data,
                                r = ((pt.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, c),
                                void 0 !== r && (s.result = r) === !1 && (s.preventDefault(),
                                    s.stopPropagation()));
                    return d.postDispatch && d.postDispatch.call(this, s),
                        s.result
                }
            },
            handlers: function(e, t) {
                var n, r, i, o, a = [],
                    s = t.delegateCount,
                    c = e.target;
                if (s && c.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                    for (; c !== this; c = c.parentNode || this)
                        if (1 === c.nodeType && (c.disabled !== !0 || "click" !== e.type)) {
                            for (r = [],
                                n = 0; s > n; n++)
                                o = t[n],
                                i = o.selector + " ",
                                void 0 === r[i] && (r[i] = o.needsContext ? pt(i, this).index(c) > -1 : pt.find(i, this, null, [c]).length),
                                r[i] && r.push(o);
                            r.length && a.push({
                                elem: c,
                                handlers: r
                            })
                        }
                return s < t.length && a.push({
                        elem: this,
                        handlers: t.slice(s)
                    }),
                    a
            },
            addProp: function(e, t) {
                Object.defineProperty(pt.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: pt.isFunction(t) ? function() {
                        return this.originalEvent ? t(this.originalEvent) : void 0
                    } : function() {
                        return this.originalEvent ? this.originalEvent[e] : void 0
                    },
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(e) {
                return e[pt.expando] ? e : new pt.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== w() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === w() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && pt.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(e) {
                        return pt.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        },
        pt.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        },
        pt.Event = function(e, t) {
            return this instanceof pt.Event ? (e && e.type ? (this.originalEvent = e,
                    this.type = e.type,
                    this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? b : _,
                    this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
                    this.currentTarget = e.currentTarget,
                    this.relatedTarget = e.relatedTarget) : this.type = e,
                t && pt.extend(this, t),
                this.timeStamp = e && e.timeStamp || pt.now(),
                void(this[pt.expando] = !0)) : new pt.Event(e, t)
        },
        pt.Event.prototype = {
            constructor: pt.Event,
            isDefaultPrevented: _,
            isPropagationStopped: _,
            isImmediatePropagationStopped: _,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = b,
                    e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = b,
                    e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = b,
                    e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation()
            }
        },
        pt.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            "char": !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && Kt.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Xt.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, pt.event.addProp),
        pt.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            pt.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this,
                        i = e.relatedTarget,
                        o = e.handleObj;
                    return i && (i === r || pt.contains(r, i)) || (e.type = o.origType,
                            n = o.handler.apply(this, arguments),
                            e.type = t),
                        n
                }
            }
        }),
        pt.fn.extend({
            on: function(e, t, n, r) {
                return x(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return x(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                    return r = e.handleObj,
                        pt(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                        this;
                if ("object" == typeof e) {
                    for (i in e)
                        this.off(i, t, e[i]);
                    return this
                }
                return t !== !1 && "function" != typeof t || (n = t,
                        t = void 0),
                    n === !1 && (n = _),
                    this.each(function() {
                        pt.event.remove(this, e, n, t)
                    })
            }
        });
    var Yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Zt = /<script|<style|<link/i,
        en = /checked\s*(?:[^=]|=\s*.checked.)/i,
        tn = /^true\/(.*)/,
        nn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    pt.extend({
            htmlPrefilter: function(e) {
                return e.replace(Yt, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var r, i, o, a, s = e.cloneNode(!0),
                    c = pt.contains(e.ownerDocument, e);
                if (!(dt.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pt.isXMLDoc(e)))
                    for (a = m(s),
                        o = m(e),
                        r = 0,
                        i = o.length; i > r; r++)
                        A(o[r], a[r]);
                if (t)
                    if (n)
                        for (o = o || m(e),
                            a = a || m(s),
                            r = 0,
                            i = o.length; i > r; r++)
                            S(o[r], a[r]);
                    else
                        S(e, s);
                return a = m(s, "script"),
                    a.length > 0 && g(a, !c && m(e, "script")),
                    s
            },
            cleanData: function(e) {
                for (var t, n, r, i = pt.event.special, o = 0; void 0 !== (n = e[o]); o++)
                    if (Nt(n)) {
                        if (t = n[jt.expando]) {
                            if (t.events)
                                for (r in t.events)
                                    i[r] ? pt.event.remove(n, r) : pt.removeEvent(n, r, t.handle);
                            n[jt.expando] = void 0
                        }
                        n[Lt.expando] && (n[Lt.expando] = void 0)
                    }
            }
        }),
        pt.fn.extend({
            detach: function(e) {
                return D(this, e, !0)
            },
            remove: function(e) {
                return D(this, e)
            },
            text: function(e) {
                return Ot(this, function(e) {
                    return void 0 === e ? pt.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return E(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = k(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return E(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = k(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return E(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return E(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType && (pt.cleanData(m(e, !1)),
                        e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null == e ? !1 : e,
                    t = null == t ? e : t,
                    this.map(function() {
                        return pt.clone(this, e, t)
                    })
            },
            html: function(e) {
                return Ot(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (void 0 === e && 1 === t.nodeType)
                        return t.innerHTML;
                    if ("string" == typeof e && !Zt.test(e) && !Gt[(Ut.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = pt.htmlPrefilter(e);
                        try {
                            for (; r > n; n++)
                                t = this[n] || {},
                                1 === t.nodeType && (pt.cleanData(m(t, !1)),
                                    t.innerHTML = e);
                            t = 0
                        } catch (i) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return E(this, arguments, function(t) {
                    var n = this.parentNode;
                    pt.inArray(this, e) < 0 && (pt.cleanData(m(this)),
                        n && n.replaceChild(t, this))
                }, e)
            }
        }),
        pt.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            pt.fn[e] = function(e) {
                for (var n, r = [], i = pt(e), o = i.length - 1, a = 0; o >= a; a++)
                    n = a === o ? this : this.clone(!0),
                    pt(i[a])[t](n),
                    rt.apply(r, n.get());
                return this.pushStack(r)
            }
        });
    var rn = /^margin/,
        on = new RegExp("^(" + Mt + ")(?!px)[a-z%]+$", "i"),
        an = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e),
                n.getComputedStyle(t)
        };
    ! function() {
        function t() {
            if (s) {
                s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                    s.innerHTML = "",
                    Vt.appendChild(a);
                var t = e.getComputedStyle(s);
                n = "1%" !== t.top,
                    o = "2px" === t.marginLeft,
                    r = "4px" === t.width,
                    s.style.marginRight = "50%",
                    i = "4px" === t.marginRight,
                    Vt.removeChild(a),
                    s = null
            }
        }
        var n, r, i, o, a = Z.createElement("div"),
            s = Z.createElement("div");
        s.style && (s.style.backgroundClip = "content-box",
            s.cloneNode(!0).style.backgroundClip = "",
            dt.clearCloneStyle = "content-box" === s.style.backgroundClip,
            a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
            a.appendChild(s),
            pt.extend(dt, {
                pixelPosition: function() {
                    return t(),
                        n
                },
                boxSizingReliable: function() {
                    return t(),
                        r
                },
                pixelMarginRight: function() {
                    return t(),
                        i
                },
                reliableMarginLeft: function() {
                    return t(),
                        o
                }
            }))
    }();
    var sn = /^(none|table(?!-c[ea]).+)/,
        cn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        un = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        dn = ["Webkit", "Moz", "ms"],
        ln = Z.createElement("div").style;
    pt.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = $(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, o, a, s = pt.camelCase(t),
                        c = e.style;
                    return t = pt.cssProps[s] || (pt.cssProps[s] = N(s) || s),
                        a = pt.cssHooks[t] || pt.cssHooks[s],
                        void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : c[t] : (o = typeof n,
                            "string" === o && (i = Bt.exec(n)) && i[1] && (n = f(e, t, i),
                                o = "number"),
                            null != n && n === n && ("number" === o && (n += i && i[3] || (pt.cssNumber[s] ? "" : "px")),
                                dt.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                                a && "set" in a && void 0 === (n = a.set(e, n, r)) || (c[t] = n)),
                            void 0)
                }
            },
            css: function(e, t, n, r) {
                var i, o, a, s = pt.camelCase(t);
                return t = pt.cssProps[s] || (pt.cssProps[s] = N(s) || s),
                    a = pt.cssHooks[t] || pt.cssHooks[s],
                    a && "get" in a && (i = a.get(e, !0, n)),
                    void 0 === i && (i = $(e, t, r)),
                    "normal" === i && t in un && (i = un[t]),
                    "" === n || n ? (o = parseFloat(i),
                        n === !0 || isFinite(o) ? o || 0 : i) : i
            }
        }),
        pt.each(["height", "width"], function(e, t) {
            pt.cssHooks[t] = {
                get: function(e, n, r) {
                    return n ? !sn.test(pt.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? I(e, t, r) : Ht(e, cn, function() {
                        return I(e, t, r)
                    }) : void 0
                },
                set: function(e, n, r) {
                    var i, o = r && an(e),
                        a = r && L(e, t, r, "border-box" === pt.css(e, "boxSizing", !1, o), o);
                    return a && (i = Bt.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
                            n = pt.css(e, t)),
                        j(e, n, a)
                }
            }
        }),
        pt.cssHooks.marginLeft = O(dt.reliableMarginLeft, function(e, t) {
            return t ? (parseFloat($(e, "marginLeft")) || e.getBoundingClientRect().left - Ht(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px" : void 0
        }),
        pt.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            pt.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)
                            i[e + Rt[r] + t] = o[r] || o[r - 2] || o[0];
                        return i
                    }
                },
                rn.test(e) || (pt.cssHooks[e + t].set = j)
        }),
        pt.fn.extend({
            css: function(e, t) {
                return Ot(this, function(e, t, n) {
                    var r, i, o = {},
                        a = 0;
                    if (pt.isArray(t)) {
                        for (r = an(e),
                            i = t.length; i > a; a++)
                            o[t[a]] = pt.css(e, t[a], !1, r);
                        return o
                    }
                    return void 0 !== n ? pt.style(e, t, n) : pt.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }),
        pt.Tween = P,
        P.prototype = {
            constructor: P,
            init: function(e, t, n, r, i, o) {
                this.elem = e,
                    this.prop = n,
                    this.easing = i || pt.easing._default,
                    this.options = t,
                    this.start = this.now = this.cur(),
                    this.end = r,
                    this.unit = o || (pt.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = P.propHooks[this.prop];
                return e && e.get ? e.get(this) : P.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = P.propHooks[this.prop];
                return this.pos = t = this.options.duration ? pt.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
                    this.now = (this.end - this.start) * t + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : P.propHooks._default.set(this),
                    this
            }
        },
        P.prototype.init.prototype = P.prototype,
        P.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pt.css(e.elem, e.prop, ""),
                        t && "auto" !== t ? t : 0)
                },
                set: function(e) {
                    pt.fx.step[e.prop] ? pt.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pt.cssProps[e.prop]] && !pt.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pt.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        },
        P.propHooks.scrollTop = P.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        pt.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        },
        pt.fx = P.prototype.init,
        pt.fx.step = {};
    var pn, fn, hn = /^(?:toggle|show|hide)$/,
        vn = /queueHooks$/;
    pt.Animation = pt.extend(W, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return f(n.elem, e, Bt.exec(t), n),
                        n
                }]
            },
            tweener: function(e, t) {
                pt.isFunction(e) ? (t = e,
                    e = ["*"]) : e = e.match(Et);
                for (var n, r = 0, i = e.length; i > r; r++)
                    n = e[r],
                    W.tweeners[n] = W.tweeners[n] || [],
                    W.tweeners[n].unshift(t)
            },
            prefilters: [H],
            prefilter: function(e, t) {
                t ? W.prefilters.unshift(e) : W.prefilters.push(e)
            }
        }),
        pt.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? pt.extend({}, e) : {
                complete: n || !n && t || pt.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !pt.isFunction(t) && t
            };
            return r.duration = pt.fx.off || Z.hidden ? 0 : "number" == typeof r.duration ? r.duration : r.duration in pt.fx.speeds ? pt.fx.speeds[r.duration] : pt.fx.speeds._default,
                null != r.queue && r.queue !== !0 || (r.queue = "fx"),
                r.old = r.complete,
                r.complete = function() {
                    pt.isFunction(r.old) && r.old.call(this),
                        r.queue && pt.dequeue(this, r.queue)
                },
                r
        },
        pt.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(qt).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = pt.isEmptyObject(e),
                    o = pt.speed(t, n, r),
                    a = function() {
                        var t = W(this, pt.extend({}, e), o);
                        (i || jt.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a,
                    i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop,
                        t(n)
                };
                return "string" != typeof e && (n = t,
                        t = e,
                        e = void 0),
                    t && e !== !1 && this.queue(e || "fx", []),
                    this.each(function() {
                        var t = !0,
                            i = null != e && e + "queueHooks",
                            o = pt.timers,
                            a = jt.get(this);
                        if (i)
                            a[i] && a[i].stop && r(a[i]);
                        else
                            for (i in a)
                                a[i] && a[i].stop && vn.test(i) && r(a[i]);
                        for (i = o.length; i--;)
                            o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                                t = !1,
                                o.splice(i, 1));
                        !t && n || pt.dequeue(this, e)
                    })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"),
                    this.each(function() {
                        var t, n = jt.get(this),
                            r = n[e + "queue"],
                            i = n[e + "queueHooks"],
                            o = pt.timers,
                            a = r ? r.length : 0;
                        for (n.finish = !0,
                            pt.queue(this, e, []),
                            i && i.stop && i.stop.call(this, !0),
                            t = o.length; t--;)
                            o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                                o.splice(t, 1));
                        for (t = 0; a > t; t++)
                            r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
            }
        }),
        pt.each(["toggle", "show", "hide"], function(e, t) {
            var n = pt.fn[t];
            pt.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(R(t, !0), e, r, i)
            }
        }),
        pt.each({
            slideDown: R("show"),
            slideUp: R("hide"),
            slideToggle: R("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            pt.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }),
        pt.timers = [],
        pt.fx.tick = function() {
            var e, t = 0,
                n = pt.timers;
            for (pn = pt.now(); t < n.length; t++)
                e = n[t],
                e() || n[t] !== e || n.splice(t--, 1);
            n.length || pt.fx.stop(),
                pn = void 0
        },
        pt.fx.timer = function(e) {
            pt.timers.push(e),
                e() ? pt.fx.start() : pt.timers.pop()
        },
        pt.fx.interval = 13,
        pt.fx.start = function() {
            fn || (fn = e.requestAnimationFrame ? e.requestAnimationFrame(M) : e.setInterval(pt.fx.tick, pt.fx.interval))
        },
        pt.fx.stop = function() {
            e.cancelAnimationFrame ? e.cancelAnimationFrame(fn) : e.clearInterval(fn),
                fn = null
        },
        pt.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        pt.fn.delay = function(t, n) {
            return t = pt.fx ? pt.fx.speeds[t] || t : t,
                n = n || "fx",
                this.queue(n, function(n, r) {
                    var i = e.setTimeout(n, t);
                    r.stop = function() {
                        e.clearTimeout(i)
                    }
                })
        },
        function() {
            var e = Z.createElement("input"),
                t = Z.createElement("select"),
                n = t.appendChild(Z.createElement("option"));
            e.type = "checkbox",
                dt.checkOn = "" !== e.value,
                dt.optSelected = n.selected,
                e = Z.createElement("input"),
                e.value = "t",
                e.type = "radio",
                dt.radioValue = "t" === e.value
        }();
    var mn, gn = pt.expr.attrHandle;
    pt.fn.extend({
            attr: function(e, t) {
                return Ot(this, pt.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    pt.removeAttr(this, e)
                })
            }
        }),
        pt.extend({
            attr: function(e, t, n) {
                var r, i, o = e.nodeType;
                return 3 !== o && 8 !== o && 2 !== o ? "undefined" == typeof e.getAttribute ? pt.prop(e, t, n) : (1 === o && pt.isXMLDoc(e) || (i = pt.attrHooks[t.toLowerCase()] || (pt.expr.match.bool.test(t) ? mn : void 0)),
                    void 0 !== n ? null === n ? void pt.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                        n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = pt.find.attr(e, t),
                        null == r ? void 0 : r)) : void 0
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!dt.radioValue && "radio" === t && pt.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                                n && (e.value = n),
                                t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0,
                    i = t && t.match(Et);
                if (i && 1 === e.nodeType)
                    for (; n = i[r++];)
                        e.removeAttribute(n)
            }
        }),
        mn = {
            set: function(e, t, n) {
                return t === !1 ? pt.removeAttr(e, n) : e.setAttribute(n, n),
                    n
            }
        },
        pt.each(pt.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = gn[t] || pt.find.attr;
            gn[t] = function(e, t, r) {
                var i, o, a = t.toLowerCase();
                return r || (o = gn[a],
                        gn[a] = i,
                        i = null != n(e, t, r) ? a : null,
                        gn[a] = o),
                    i
            }
        });
    var yn = /^(?:input|select|textarea|button)$/i,
        bn = /^(?:a|area)$/i;
    pt.fn.extend({
            prop: function(e, t) {
                return Ot(this, pt.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[pt.propFix[e] || e]
                })
            }
        }),
        pt.extend({
            prop: function(e, t, n) {
                var r, i, o = e.nodeType;
                return 3 !== o && 8 !== o && 2 !== o ? (1 === o && pt.isXMLDoc(e) || (t = pt.propFix[t] || t,
                        i = pt.propHooks[t]),
                    void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]) : void 0
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = pt.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : yn.test(e.nodeName) || bn.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }),
        dt.optSelected || (pt.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex,
                    null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex)
            }
        }),
        pt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            pt.propFix[this.toLowerCase()] = this
        });
    var _n = /[\t\r\n\f]/g;
    pt.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, c = 0;
            if (pt.isFunction(e))
                return this.each(function(t) {
                    pt(this).addClass(e.call(this, t, U(this)))
                });
            if ("string" == typeof e && e)
                for (t = e.match(Et) || []; n = this[c++];)
                    if (i = U(n),
                        r = 1 === n.nodeType && (" " + i + " ").replace(_n, " ")) {
                        for (a = 0; o = t[a++];)
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        s = pt.trim(r),
                            i !== s && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, c = 0;
            if (pt.isFunction(e))
                return this.each(function(t) {
                    pt(this).removeClass(e.call(this, t, U(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(Et) || []; n = this[c++];)
                    if (i = U(n),
                        r = 1 === n.nodeType && (" " + i + " ").replace(_n, " ")) {
                        for (a = 0; o = t[a++];)
                            for (; r.indexOf(" " + o + " ") > -1;)
                                r = r.replace(" " + o + " ", " ");
                        s = pt.trim(r),
                            i !== s && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : pt.isFunction(e) ? this.each(function(n) {
                pt(this).toggleClass(e.call(this, n, U(this), t), t)
            }) : this.each(function() {
                var t, r, i, o;
                if ("string" === n)
                    for (r = 0,
                        i = pt(this),
                        o = e.match(Et) || []; t = o[r++];)
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else
                    void 0 !== e && "boolean" !== n || (t = U(this),
                        t && jt.set(this, "__className__", t),
                        this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : jt.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + U(n) + " ").replace(_n, " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    var wn = /\r/g,
        xn = /[\x20\t\r\n\f]+/g;
    pt.fn.extend({
            val: function(e) {
                var t, n, r, i = this[0];
                return arguments.length ? (r = pt.isFunction(e),
                    this.each(function(n) {
                        var i;
                        1 === this.nodeType && (i = r ? e.call(this, n, pt(this).val()) : e,
                            null == i ? i = "" : "number" == typeof i ? i += "" : pt.isArray(i) && (i = pt.map(i, function(e) {
                                return null == e ? "" : e + ""
                            })),
                            t = pt.valHooks[this.type] || pt.valHooks[this.nodeName.toLowerCase()],
                            t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    })) : i ? (t = pt.valHooks[i.type] || pt.valHooks[i.nodeName.toLowerCase()],
                    t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value,
                        "string" == typeof n ? n.replace(wn, "") : null == n ? "" : n)) : void 0
            }
        }),
        pt.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = pt.find.attr(e, "value");
                        return null != t ? t : pt.trim(pt.text(e)).replace(xn, " ")
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type, a = o ? null : [], s = o ? i + 1 : r.length, c = 0 > i ? s : o ? i : 0; s > c; c++)
                            if (n = r[c], !(!n.selected && c !== i || n.disabled || n.parentNode.disabled && pt.nodeName(n.parentNode, "optgroup"))) {
                                if (t = pt(n).val(),
                                    o)
                                    return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function(e, t) {
                        for (var n, r, i = e.options, o = pt.makeArray(t), a = i.length; a--;)
                            r = i[a],
                            (r.selected = pt.inArray(pt.valHooks.option.get(r), o) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1),
                            o
                    }
                }
            }
        }),
        pt.each(["radio", "checkbox"], function() {
            pt.valHooks[this] = {
                    set: function(e, t) {
                        return pt.isArray(t) ? e.checked = pt.inArray(pt(e).val(), t) > -1 : void 0
                    }
                },
                dt.checkOn || (pt.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
        });
    var kn = /^(?:focusinfocus|focusoutblur)$/;
    pt.extend(pt.event, {
            trigger: function(t, n, r, i) {
                var o, a, s, c, u, d, l, p = [r || Z],
                    f = st.call(t, "type") ? t.type : t,
                    h = st.call(t, "namespace") ? t.namespace.split(".") : [];
                if (a = s = r = r || Z,
                    3 !== r.nodeType && 8 !== r.nodeType && !kn.test(f + pt.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."),
                            f = h.shift(),
                            h.sort()),
                        u = f.indexOf(":") < 0 && "on" + f,
                        t = t[pt.expando] ? t : new pt.Event(f, "object" == typeof t && t),
                        t.isTrigger = i ? 2 : 3,
                        t.namespace = h.join("."),
                        t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                        t.result = void 0,
                        t.target || (t.target = r),
                        n = null == n ? [t] : pt.makeArray(n, [t]),
                        l = pt.event.special[f] || {},
                        i || !l.trigger || l.trigger.apply(r, n) !== !1)) {
                    if (!i && !l.noBubble && !pt.isWindow(r)) {
                        for (c = l.delegateType || f,
                            kn.test(c + f) || (a = a.parentNode); a; a = a.parentNode)
                            p.push(a),
                            s = a;
                        s === (r.ownerDocument || Z) && p.push(s.defaultView || s.parentWindow || e)
                    }
                    for (o = 0;
                        (a = p[o++]) && !t.isPropagationStopped();)
                        t.type = o > 1 ? c : l.bindType || f,
                        d = (jt.get(a, "events") || {})[t.type] && jt.get(a, "handle"),
                        d && d.apply(a, n),
                        d = u && a[u],
                        d && d.apply && Nt(a) && (t.result = d.apply(a, n),
                            t.result === !1 && t.preventDefault());
                    return t.type = f,
                        i || t.isDefaultPrevented() || l._default && l._default.apply(p.pop(), n) !== !1 || !Nt(r) || u && pt.isFunction(r[f]) && !pt.isWindow(r) && (s = r[u],
                            s && (r[u] = null),
                            pt.event.triggered = f,
                            r[f](),
                            pt.event.triggered = void 0,
                            s && (r[u] = s)),
                        t.result
                }
            },
            simulate: function(e, t, n) {
                var r = pt.extend(new pt.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                pt.event.trigger(r, null, t)
            }
        }),
        pt.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    pt.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                return n ? pt.event.trigger(e, t, n, !0) : void 0
            }
        }),
        pt.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
            pt.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }),
        pt.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }),
        dt.focusin = "onfocusin" in e,
        dt.focusin || pt.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                pt.event.simulate(t, e.target, pt.event.fix(e))
            };
            pt.event.special[t] = {
                setup: function() {
                    var r = this.ownerDocument || this,
                        i = jt.access(r, t);
                    i || r.addEventListener(e, n, !0),
                        jt.access(r, t, (i || 0) + 1)
                },
                teardown: function() {
                    var r = this.ownerDocument || this,
                        i = jt.access(r, t) - 1;
                    i ? jt.access(r, t, i) : (r.removeEventListener(e, n, !0),
                        jt.remove(r, t))
                }
            }
        });
    var Tn = e.location,
        Cn = pt.now(),
        Sn = /\?/;
    pt.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (r) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || pt.error("Invalid XML: " + t),
            n
    };
    var An = /\[\]$/,
        En = /\r?\n/g,
        Dn = /^(?:submit|button|image|reset|file)$/i,
        $n = /^(?:input|select|textarea|keygen)/i;
    pt.param = function(e, t) {
            var n, r = [],
                i = function(e, t) {
                    var n = pt.isFunction(t) ? t() : t;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (pt.isArray(e) || e.jquery && !pt.isPlainObject(e))
                pt.each(e, function() {
                    i(this.name, this.value)
                });
            else
                for (n in e)
                    J(n, e[n], t, i);
            return r.join("&")
        },
        pt.fn.extend({
            serialize: function() {
                return pt.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = pt.prop(this, "elements");
                    return e ? pt.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !pt(this).is(":disabled") && $n.test(this.nodeName) && !Dn.test(e) && (this.checked || !Wt.test(e))
                }).map(function(e, t) {
                    var n = pt(this).val();
                    return null == n ? null : pt.isArray(n) ? pt.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(En, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(En, "\r\n")
                    }
                }).get()
            }
        });
    var On = /%20/g,
        Nn = /#.*$/,
        jn = /([?&])_=[^&]*/,
        Ln = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        In = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Pn = /^(?:GET|HEAD)$/,
        Mn = /^\/\//,
        Bn = {},
        Rn = {},
        qn = "*/".concat("*"),
        Hn = Z.createElement("a");
    Hn.href = Tn.href,
        pt.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Tn.href,
                type: "GET",
                isLocal: In.test(Tn.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": qn,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": pt.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? V(V(e, pt.ajaxSettings), t) : V(pt.ajaxSettings, e)
            },
            ajaxPrefilter: G(Bn),
            ajaxTransport: G(Rn),
            ajax: function(t, n) {
                function r(t, n, r, s) {
                    var u, p, f, _, w, x = n;
                    d || (d = !0,
                        c && e.clearTimeout(c),
                        i = void 0,
                        a = s || "",
                        k.readyState = t > 0 ? 4 : 0,
                        u = t >= 200 && 300 > t || 304 === t,
                        r && (_ = K(h, k, r)),
                        _ = X(h, _, k, u),
                        u ? (h.ifModified && (w = k.getResponseHeader("Last-Modified"),
                                w && (pt.lastModified[o] = w),
                                w = k.getResponseHeader("etag"),
                                w && (pt.etag[o] = w)),
                            204 === t || "HEAD" === h.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = _.state,
                                p = _.data,
                                f = _.error,
                                u = !f)) : (f = x, !t && x || (x = "error",
                            0 > t && (t = 0))),
                        k.status = t,
                        k.statusText = (n || x) + "",
                        u ? g.resolveWith(v, [p, x, k]) : g.rejectWith(v, [k, x, f]),
                        k.statusCode(b),
                        b = void 0,
                        l && m.trigger(u ? "ajaxSuccess" : "ajaxError", [k, h, u ? p : f]),
                        y.fireWith(v, [k, x]),
                        l && (m.trigger("ajaxComplete", [k, h]),
                            --pt.active || pt.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (n = t,
                        t = void 0),
                    n = n || {};
                var i, o, a, s, c, u, d, l, p, f, h = pt.ajaxSetup({}, n),
                    v = h.context || h,
                    m = h.context && (v.nodeType || v.jquery) ? pt(v) : pt.event,
                    g = pt.Deferred(),
                    y = pt.Callbacks("once memory"),
                    b = h.statusCode || {},
                    _ = {},
                    w = {},
                    x = "canceled",
                    k = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (d) {
                                if (!s)
                                    for (s = {}; t = Ln.exec(a);)
                                        s[t[1].toLowerCase()] = t[2];
                                t = s[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return d ? a : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == d && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e,
                                    _[e] = t),
                                this
                        },
                        overrideMimeType: function(e) {
                            return null == d && (h.mimeType = e),
                                this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (d)
                                    k.always(e[k.status]);
                                else
                                    for (t in e)
                                        b[t] = [b[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            var t = e || x;
                            return i && i.abort(t),
                                r(0, t),
                                this
                        }
                    };
                if (g.promise(k),
                    h.url = ((t || h.url || Tn.href) + "").replace(Mn, Tn.protocol + "//"),
                    h.type = n.method || n.type || h.method || h.type,
                    h.dataTypes = (h.dataType || "*").toLowerCase().match(Et) || [""],
                    null == h.crossDomain) {
                    u = Z.createElement("a");
                    try {
                        u.href = h.url,
                            u.href = u.href,
                            h.crossDomain = Hn.protocol + "//" + Hn.host != u.protocol + "//" + u.host
                    } catch (T) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = pt.param(h.data, h.traditional)),
                    z(Bn, h, n, k),
                    d)
                    return k;
                l = pt.event && h.global,
                    l && 0 === pt.active++ && pt.event.trigger("ajaxStart"),
                    h.type = h.type.toUpperCase(),
                    h.hasContent = !Pn.test(h.type),
                    o = h.url.replace(Nn, ""),
                    h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(On, "+")) : (f = h.url.slice(o.length),
                        h.data && (o += (Sn.test(o) ? "&" : "?") + h.data,
                            delete h.data),
                        h.cache === !1 && (o = o.replace(jn, ""),
                            f = (Sn.test(o) ? "&" : "?") + "_=" + Cn++ + f),
                        h.url = o + f),
                    h.ifModified && (pt.lastModified[o] && k.setRequestHeader("If-Modified-Since", pt.lastModified[o]),
                        pt.etag[o] && k.setRequestHeader("If-None-Match", pt.etag[o])),
                    (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && k.setRequestHeader("Content-Type", h.contentType),
                    k.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + qn + "; q=0.01" : "") : h.accepts["*"]);
                for (p in h.headers)
                    k.setRequestHeader(p, h.headers[p]);
                if (h.beforeSend && (h.beforeSend.call(v, k, h) === !1 || d))
                    return k.abort();
                if (x = "abort",
                    y.add(h.complete),
                    k.done(h.success),
                    k.fail(h.error),
                    i = z(Rn, h, n, k)) {
                    if (k.readyState = 1,
                        l && m.trigger("ajaxSend", [k, h]),
                        d)
                        return k;
                    h.async && h.timeout > 0 && (c = e.setTimeout(function() {
                        k.abort("timeout")
                    }, h.timeout));
                    try {
                        d = !1,
                            i.send(_, r)
                    } catch (T) {
                        if (d)
                            throw T;
                        r(-1, T)
                    }
                } else
                    r(-1, "No Transport");
                return k
            },
            getJSON: function(e, t, n) {
                return pt.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return pt.get(e, void 0, t, "script")
            }
        }),
        pt.each(["get", "post"], function(e, t) {
            pt[t] = function(e, n, r, i) {
                return pt.isFunction(n) && (i = i || r,
                        r = n,
                        n = void 0),
                    pt.ajax(pt.extend({
                        url: e,
                        type: t,
                        dataType: i,
                        data: n,
                        success: r
                    }, pt.isPlainObject(e) && e))
            }
        }),
        pt._evalUrl = function(e) {
            return pt.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                "throws": !0
            })
        },
        pt.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (pt.isFunction(e) && (e = e.call(this[0])),
                        t = pt(e, this[0].ownerDocument).eq(0).clone(!0),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t.map(function() {
                            for (var e = this; e.firstElementChild;)
                                e = e.firstElementChild;
                            return e
                        }).append(this)),
                    this
            },
            wrapInner: function(e) {
                return pt.isFunction(e) ? this.each(function(t) {
                    pt(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = pt(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = pt.isFunction(e);
                return this.each(function(n) {
                    pt(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                        pt(this).replaceWith(this.childNodes)
                    }),
                    this
            }
        }),
        pt.expr.pseudos.hidden = function(e) {
            return !pt.expr.pseudos.visible(e)
        },
        pt.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        },
        pt.ajaxSettings.xhr = function() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        };
    var Fn = {
            0: 200,
            1223: 204
        },
        Wn = pt.ajaxSettings.xhr();
    dt.cors = !!Wn && "withCredentials" in Wn,
        dt.ajax = Wn = !!Wn,
        pt.ajaxTransport(function(t) {
            var n, r;
            return dt.cors || Wn && !t.crossDomain ? {
                send: function(i, o) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password),
                        t.xhrFields)
                        for (a in t.xhrFields)
                            s[a] = t.xhrFields[a];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
                        t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (a in i)
                        s.setRequestHeader(a, i[a]);
                    n = function(e) {
                            return function() {
                                n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null,
                                    "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Fn[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                        binary: s.response
                                    } : {
                                        text: s.responseText
                                    }, s.getAllResponseHeaders()))
                            }
                        },
                        s.onload = n(),
                        r = s.onerror = n("error"),
                        void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                            4 === s.readyState && e.setTimeout(function() {
                                n && r()
                            })
                        },
                        n = n("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (c) {
                        if (n)
                            throw c
                    }
                },
                abort: function() {
                    n && n()
                }
            } : void 0
        }),
        pt.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }),
        pt.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return pt.globalEval(e),
                        e
                }
            }
        }),
        pt.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET")
        }),
        pt.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function(r, i) {
                        t = pt("<script>").prop({
                                charset: e.scriptCharset,
                                src: e.url
                            }).on("load error", n = function(e) {
                                t.remove(),
                                    n = null,
                                    e && i("error" === e.type ? 404 : 200, e.type)
                            }),
                            Z.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
    var Un = [],
        Jn = /(=)\?(?=&|$)|\?\?/;
    pt.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Un.pop() || pt.expando + "_" + Cn++;
                return this[e] = !0,
                    e
            }
        }),
        pt.ajaxPrefilter("json jsonp", function(t, n, r) {
            var i, o, a, s = t.jsonp !== !1 && (Jn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Jn.test(t.data) && "data");
            return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = pt.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                s ? t[s] = t[s].replace(Jn, "$1" + i) : t.jsonp !== !1 && (t.url += (Sn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
                t.converters["script json"] = function() {
                    return a || pt.error(i + " was not called"),
                        a[0]
                },
                t.dataTypes[0] = "json",
                o = e[i],
                e[i] = function() {
                    a = arguments
                },
                r.always(function() {
                    void 0 === o ? pt(e).removeProp(i) : e[i] = o,
                        t[i] && (t.jsonpCallback = n.jsonpCallback,
                            Un.push(i)),
                        a && pt.isFunction(o) && o(a[0]),
                        a = o = void 0
                }),
                "script") : void 0
        }),
        dt.createHTMLDocument = function() {
            var e = Z.implementation.createHTMLDocument("").body;
            return e.innerHTML = "<form></form><form></form>",
                2 === e.childNodes.length
        }(),
        pt.parseHTML = function(e, t, n) {
            if ("string" != typeof e)
                return [];
            "boolean" == typeof t && (n = t,
                t = !1);
            var r, i, o;
            return t || (dt.createHTMLDocument ? (t = Z.implementation.createHTMLDocument(""),
                    r = t.createElement("base"),
                    r.href = Z.location.href,
                    t.head.appendChild(r)) : t = Z),
                i = wt.exec(e),
                o = !n && [],
                i ? [t.createElement(i[1])] : (i = y([e], t, o),
                    o && o.length && pt(o).remove(),
                    pt.merge([], i.childNodes))
        },
        pt.fn.load = function(e, t, n) {
            var r, i, o, a = this,
                s = e.indexOf(" ");
            return s > -1 && (r = pt.trim(e.slice(s)),
                    e = e.slice(0, s)),
                pt.isFunction(t) ? (n = t,
                    t = void 0) : t && "object" == typeof t && (i = "POST"),
                a.length > 0 && pt.ajax({
                    url: e,
                    type: i || "GET",
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    o = arguments,
                        a.html(r ? pt("<div>").append(pt.parseHTML(e)).find(r) : e)
                }).always(n && function(e, t) {
                    a.each(function() {
                        n.apply(this, o || [e.responseText, t, e])
                    })
                }),
                this
        },
        pt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            pt.fn[t] = function(e) {
                return this.on(t, e)
            }
        }),
        pt.expr.pseudos.animated = function(e) {
            return pt.grep(pt.timers, function(t) {
                return e === t.elem
            }).length
        },
        pt.offset = {
            setOffset: function(e, t, n) {
                var r, i, o, a, s, c, u, d = pt.css(e, "position"),
                    l = pt(e),
                    p = {};
                "static" === d && (e.style.position = "relative"),
                    s = l.offset(),
                    o = pt.css(e, "top"),
                    c = pt.css(e, "left"),
                    u = ("absolute" === d || "fixed" === d) && (o + c).indexOf("auto") > -1,
                    u ? (r = l.position(),
                        a = r.top,
                        i = r.left) : (a = parseFloat(o) || 0,
                        i = parseFloat(c) || 0),
                    pt.isFunction(t) && (t = t.call(e, n, pt.extend({}, s))),
                    null != t.top && (p.top = t.top - s.top + a),
                    null != t.left && (p.left = t.left - s.left + i),
                    "using" in t ? t.using.call(e, p) : l.css(p)
            }
        },
        pt.fn.extend({
            offset: function(e) {
                if (arguments.length)
                    return void 0 === e ? this : this.each(function(t) {
                        pt.offset.setOffset(this, e, t)
                    });
                var t, n, r, i, o = this[0];
                return o ? o.getClientRects().length ? (r = o.getBoundingClientRect(),
                    r.width || r.height ? (i = o.ownerDocument,
                        n = Q(i),
                        t = i.documentElement, {
                            top: r.top + n.pageYOffset - t.clientTop,
                            left: r.left + n.pageXOffset - t.clientLeft
                        }) : r) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = this[0],
                        r = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === pt.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                        t = this.offset(),
                        pt.nodeName(e[0], "html") || (r = e.offset()),
                        r = {
                            top: r.top + pt.css(e[0], "borderTopWidth", !0),
                            left: r.left + pt.css(e[0], "borderLeftWidth", !0)
                        }), {
                        top: t.top - r.top - pt.css(n, "marginTop", !0),
                        left: t.left - r.left - pt.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === pt.css(e, "position");)
                        e = e.offsetParent;
                    return e || Vt
                })
            }
        }),
        pt.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = "pageYOffset" === t;
            pt.fn[e] = function(r) {
                return Ot(this, function(e, r, i) {
                    var o = Q(e);
                    return void 0 === i ? o ? o[t] : e[r] : void(o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
                }, e, r, arguments.length)
            }
        }),
        pt.each(["top", "left"], function(e, t) {
            pt.cssHooks[t] = O(dt.pixelPosition, function(e, n) {
                return n ? (n = $(e, t),
                    on.test(n) ? pt(e).position()[t] + "px" : n) : void 0
            })
        }),
        pt.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            pt.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, r) {
                pt.fn[r] = function(i, o) {
                    var a = arguments.length && (n || "boolean" != typeof i),
                        s = n || (i === !0 || o === !0 ? "margin" : "border");
                    return Ot(this, function(t, n, i) {
                        var o;
                        return pt.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                            Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? pt.css(t, n, s) : pt.style(t, n, i, s)
                    }, t, a ? i : void 0, a)
                }
            })
        }),
        pt.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }),
        pt.parseJSON = JSON.parse,
        "function" == typeof define && define.amd && define("jquery", [], function() {
            return pt
        });
    var Gn = e.jQuery,
        zn = e.$;
    return pt.noConflict = function(t) {
            return e.$ === pt && (e.$ = zn),
                t && e.jQuery === pt && (e.jQuery = Gn),
                pt
        },
        t || (e.jQuery = e.$ = pt),
        pt
}), ! function(e) {
    e.fn.marquee = function(t) {
            return this.each(function() {
                var n, r, i, o, a, s = e.extend({}, e.fn.marquee.defaults, t),
                    c = e(this),
                    u = 3,
                    d = "animation-play-state",
                    l = !1,
                    p = function(e, t, n) {
                        for (var r = ["webkit", "moz", "MS", "o", ""], i = 0; i < r.length; i++)
                            r[i] || (t = t.toLowerCase()),
                            e.addEventListener(r[i] + t, n, !1)
                    },
                    f = function(e) {
                        var t = [];
                        for (var n in e)
                            e.hasOwnProperty(n) && t.push(n + ":" + e[n]);
                        return t.push(),
                            "{" + t.join(",") + "}"
                    },
                    h = function() {
                        c.timer = setTimeout($, s.delayBeforeStart)
                    },
                    v = {
                        pause: function() {
                            l && s.allowCss3Support ? n.css(d, "paused") : e.fn.pause && n.pause(),
                                c.data("runningStatus", "paused"),
                                c.trigger("paused")
                        },
                        resume: function() {
                            l && s.allowCss3Support ? n.css(d, "running") : e.fn.resume && n.resume(),
                                c.data("runningStatus", "resumed"),
                                c.trigger("resumed")
                        },
                        toggle: function() {
                            v["resumed" == c.data("runningStatus") ? "pause" : "resume"]()
                        },
                        destroy: function() {
                            clearTimeout(c.timer),
                                c.find("*").andSelf().unbind(),
                                c.html(c.find(".js-marquee:first").html())
                        }
                    };
                if ("string" == typeof t)
                    return void(e.isFunction(v[t]) && (n || (n = c.find(".js-marquee-wrapper")),
                        c.data("css3AnimationIsSupported") === !0 && (l = !0),
                        v[t]()));
                var m;
                e.each(s, function(e) {
                        if (m = c.attr("data-" + e),
                            "undefined" != typeof m) {
                            switch (m) {
                                case "true":
                                    m = !0;
                                    break;
                                case "false":
                                    m = !1
                            }
                            s[e] = m
                        }
                    }),
                    s.duration = s.speed || s.duration,
                    o = "up" == s.direction || "down" == s.direction,
                    s.gap = s.duplicated ? parseInt(s.gap) : 0,
                    c.wrapInner('<div class="js-marquee"></div>');
                var g = c.find(".js-marquee").css({
                    "margin-right": s.gap,
                    "float": "left"
                });
                if (s.duplicated && g.clone(!0).appendTo(c),
                    c.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>'),
                    n = c.find(".js-marquee-wrapper"),
                    o) {
                    var y = c.height();
                    n.removeAttr("style"),
                        c.height(y),
                        c.find(".js-marquee").css({
                            "float": "none",
                            "margin-bottom": s.gap,
                            "margin-right": 0
                        }),
                        s.duplicated && c.find(".js-marquee:last").css({
                            "margin-bottom": 0
                        });
                    var b = c.find(".js-marquee:first").height() + s.gap;
                    s.startVisible && !s.duplicated ? (s._completeDuration = (parseInt(b, 10) + parseInt(y, 10)) / parseInt(y, 10) * s.duration,
                        s.duration = parseInt(b, 10) / parseInt(y, 10) * s.duration) : s.duration = (parseInt(b, 10) + parseInt(y, 10)) / parseInt(y, 10) * s.duration
                } else
                    a = c.find(".js-marquee:first").width() + s.gap,
                    r = c.width(),
                    s.startVisible && !s.duplicated ? (s._completeDuration = (parseInt(a, 10) + parseInt(r, 10)) / parseInt(r, 10) * s.duration,
                        s.duration = parseInt(a, 10) / parseInt(r, 10) * s.duration) : s.duration = (parseInt(a, 10) + parseInt(r, 10)) / parseInt(r, 10) * s.duration;
                if (s.duplicated && (s.duration = s.duration / 2),
                    s.allowCss3Support) {
                    var _ = document.body || document.createElement("div"),
                        w = "marqueeAnimation-" + Math.floor(1e7 * Math.random()),
                        x = "Webkit Moz O ms Khtml".split(" "),
                        k = "animation",
                        T = "",
                        C = "";
                    if (_.style.animation && (C = "@keyframes " + w + " ",
                            l = !0),
                        l === !1)
                        for (var S = 0; S < x.length; S++)
                            if (void 0 !== _.style[x[S] + "AnimationName"]) {
                                var A = "-" + x[S].toLowerCase() + "-";
                                k = A + k,
                                    d = A + d,
                                    C = "@" + A + "keyframes " + w + " ",
                                    l = !0;
                                break
                            }
                    l && (T = w + " " + s.duration / 1e3 + "s " + s.delayBeforeStart / 1e3 + "s infinite " + s.css3easing,
                        c.data("css3AnimationIsSupported", !0))
                }
                var E = function() {
                        n.css("margin-top", "up" == s.direction ? y + "px" : "-" + b + "px")
                    },
                    D = function() {
                        n.css("margin-left", "left" == s.direction ? r + "px" : "-" + a + "px")
                    };
                s.duplicated ? (o ? s.startVisible ? n.css("margin-top", 0) : n.css("margin-top", "up" == s.direction ? y + "px" : "-" + (2 * b - s.gap) + "px") : s.startVisible ? n.css("margin-left", 0) : n.css("margin-left", "left" == s.direction ? r + "px" : "-" + (2 * a - s.gap) + "px"),
                    s.startVisible || (u = 1)) : s.startVisible ? u = 2 : o ? E() : D();
                var $ = function() {
                    if (s.duplicated && (1 === u ? (s._originalDuration = s.duration,
                            s.duration = o ? "up" == s.direction ? s.duration + y / (b / s.duration) : 2 * s.duration : "left" == s.direction ? s.duration + r / (a / s.duration) : 2 * s.duration,
                            T && (T = w + " " + s.duration / 1e3 + "s " + s.delayBeforeStart / 1e3 + "s " + s.css3easing),
                            u++) : 2 === u && (s.duration = s._originalDuration,
                            T && (w += "0",
                                C = e.trim(C) + "0 ",
                                T = w + " " + s.duration / 1e3 + "s 0s infinite " + s.css3easing),
                            u++)),
                        o ? s.duplicated ? (u > 2 && n.css("margin-top", "up" == s.direction ? 0 : "-" + b + "px"),
                            i = {
                                "margin-top": "up" == s.direction ? "-" + b + "px" : 0
                            }) : s.startVisible ? 2 === u ? (T && (T = w + " " + s.duration / 1e3 + "s " + s.delayBeforeStart / 1e3 + "s " + s.css3easing),
                            i = {
                                "margin-top": "up" == s.direction ? "-" + b + "px" : y + "px"
                            },
                            u++) : 3 === u && (s.duration = s._completeDuration,
                            T && (w += "0",
                                C = e.trim(C) + "0 ",
                                T = w + " " + s.duration / 1e3 + "s 0s infinite " + s.css3easing),
                            E()) : (E(),
                            i = {
                                "margin-top": "up" == s.direction ? "-" + n.height() + "px" : y + "px"
                            }) : s.duplicated ? (u > 2 && n.css("margin-left", "left" == s.direction ? 0 : "-" + a + "px"),
                            i = {
                                "margin-left": "left" == s.direction ? "-" + a + "px" : 0
                            }) : s.startVisible ? 2 === u ? (T && (T = w + " " + s.duration / 1e3 + "s " + s.delayBeforeStart / 1e3 + "s " + s.css3easing),
                            i = {
                                "margin-left": "left" == s.direction ? "-" + a + "px" : r + "px"
                            },
                            u++) : 3 === u && (s.duration = s._completeDuration,
                            T && (w += "0",
                                C = e.trim(C) + "0 ",
                                T = w + " " + s.duration / 1e3 + "s 0s infinite " + s.css3easing),
                            D()) : (D(),
                            i = {
                                "margin-left": "left" == s.direction ? "-" + a + "px" : r + "px"
                            }),
                        c.trigger("beforeStarting"),
                        l) {
                        n.css(k, T);
                        var t = C + " { 100%  " + f(i) + "}",
                            d = n.find("style");
                        0 !== d.length ? d.filter(":last").html(t) : n.append("<style>" + t + "</style>"),
                            p(n[0], "AnimationIteration", function() {
                                c.trigger("finished")
                            }),
                            p(n[0], "AnimationEnd", function() {
                                $(),
                                    c.trigger("finished")
                            })
                    } else
                        n.animate(i, s.duration, s.easing, function() {
                            c.trigger("finished"),
                                s.pauseOnCycle ? h() : $()
                        });
                    c.data("runningStatus", "resumed")
                };
                c.bind("pause", v.pause),
                    c.bind("resume", v.resume),
                    s.pauseOnHover && c.bind("mouseenter mouseleave", v.toggle),
                    l && s.allowCss3Support ? $() : h()
            })
        },
        e.fn.marquee.defaults = {
            allowCss3Support: !0,
            css3easing: "linear",
            easing: "linear",
            delayBeforeStart: 1e3,
            direction: "left",
            duplicated: !1,
            duration: 5e3,
            gap: 20,
            pauseOnCycle: !1,
            pauseOnHover: !1,
            startVisible: !1
        }
}(jQuery), ! function(e, t) {
    "function" == typeof define && (define.amd || define.cmd) ? define(t) : e.touch = t()
}(this, function() {
    function e() {
        var e = "mouseup mousedown mousemove mouseout",
            n = "touchstart touchmove touchend touchcancel",
            r = t.hasTouch ? n : e;
        r.split(" ").forEach(function(e) {
            document.addEventListener(e, S, !1)
        })
    }
    var t = {};
    t.PCevts = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup",
            touchcancel: "mouseout"
        },
        t.hasTouch = "ontouchstart" in window,
        t.getType = function(e) {
            return Object.prototype.toString.call(e).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
        },
        t.getSelector = function(e) {
            if (e.id)
                return "#" + e.id;
            if (e.className) {
                var t = e.className.split(/\s+/);
                return "." + t.join(".")
            }
            return e === document ? "body" : e.tagName.toLowerCase()
        },
        t.matchSelector = function(e, t) {
            return e.webkitMatchesSelector(t)
        },
        t.getEventListeners = function(e) {
            return e.listeners
        },
        t.getPCevts = function(e) {
            return this.PCevts[e] || e
        },
        t.forceReflow = function() {
            var e = "reflowDivBlock",
                t = document.getElementById(e);
            t || (t = document.createElement("div"),
                t.id = e,
                document.body.appendChild(t));
            var n = t.parentNode,
                r = t.nextSibling;
            n.removeChild(t),
                n.insertBefore(t, r)
        },
        t.simpleClone = function(e) {
            return Object.create(e)
        },
        t.getPosOfEvent = function(e) {
            if (this.hasTouch) {
                for (var t = [], n = null, r = 0, i = e.touches.length; i > r; r++)
                    n = e.touches[r],
                    t.push({
                        x: n.pageX,
                        y: n.pageY
                    });
                return t
            }
            return [{
                x: e.pageX,
                y: e.pageY
            }]
        },
        t.getDistance = function(e, t) {
            var n = t.x - e.x,
                r = t.y - e.y;
            return Math.sqrt(n * n + r * r)
        },
        t.getFingers = function(e) {
            return e.touches ? e.touches.length : 1
        },
        t.calScale = function(e, t) {
            if (e.length >= 2 && t.length >= 2) {
                var n = this.getDistance(e[1], e[0]),
                    r = this.getDistance(t[1], t[0]);
                return r / n
            }
            return 1
        },
        t.getAngle = function(e, t) {
            return 180 * Math.atan2(t.y - e.y, t.x - e.x) / Math.PI
        },
        t.getAngle180 = function(e, t) {
            var n = Math.atan(-1 * (t.y - e.y) / (t.x - e.x)) * (180 / Math.PI);
            return 0 > n ? n + 180 : n
        },
        t.getDirectionFromAngle = function(e) {
            var t = {
                up: -45 > e && e > -135,
                down: e >= 45 && 135 > e,
                left: e >= 135 || -135 >= e,
                right: e >= -45 && 45 >= e
            };
            for (var n in t)
                if (t[n])
                    return n;
            return null
        },
        t.getXYByElement = function(e) {
            for (var t = 0, n = 0; e.offsetParent;)
                t += e.offsetLeft,
                n += e.offsetTop,
                e = e.offsetParent;
            return {
                left: t,
                top: n
            }
        },
        t.reset = function() {
            s = c = u = null,
                m = h = d = l = !1,
                p = !1,
                o = {},
                b = !1
        },
        t.isTouchMove = function(e) {
            return "touchmove" === e.type || "mousemove" === e.type
        },
        t.isTouchEnd = function(e) {
            return "touchend" === e.type || "mouseup" === e.type || "touchcancel" === e.type
        },
        t.env = function() {
            var e = {},
                t = navigator.userAgent,
                n = t.match(/(Android)[\s\/]+([\d\.]+)/),
                r = t.match(/(iPad|iPhone|iPod)\s+OS\s([\d_\.]+)/),
                i = t.match(/(Windows\s+Phone)\s([\d\.]+)/),
                o = /WebKit\/[\d.]+/i.test(t),
                a = r ? navigator.standalone ? o : /Safari/i.test(t) && !/CriOS/i.test(t) && !/MQQBrowser/i.test(t) : !1;
            return n && (e.android = !0,
                    e.version = n[2]),
                r && (e.ios = !0,
                    e.version = r[2].replace(/_/g, "."),
                    e.ios7 = /^7/.test(e.version),
                    "iPad" === r[1] ? e.ipad = !0 : "iPhone" === r[1] ? (e.iphone = !0,
                        e.iphone5 = 568 == screen.height) : "iPod" === r[1] && (e.ipod = !0)),
                i && (e.wp = !0,
                    e.version = i[2],
                    e.wp8 = /^8/.test(e.version)),
                o && (e.webkit = !0),
                a && (e.safari = !0),
                e
        }();
    var n = {
            proxyid: 0,
            proxies: [],
            trigger: function(e, t, n) {
                n = n || {};
                var r, i = {
                    bubbles: !0,
                    cancelable: !0,
                    detail: n
                };
                try {
                    "undefined" != typeof CustomEvent ? (r = new CustomEvent(t, i),
                        e && e.dispatchEvent(r)) : (r = document.createEvent("CustomEvent"),
                        r.initCustomEvent(t, !0, !0, n),
                        e && e.dispatchEvent(r))
                } catch (o) {
                    console.warn("Touch.js is not supported by environment.")
                }
            },
            bind: function(e, n, r) {
                e.listeners = e.listeners || {},
                    e.listeners[n] ? e.listeners[n].push(r) : e.listeners[n] = [r];
                var i = function(e) {
                    t.env.ios7 && t.forceReflow(),
                        e.originEvent = e;
                    for (var n in e.detail)
                        "type" !== n && (e[n] = e.detail[n]);
                    e.startRotate = function() {
                        b = !0
                    };
                    var i = r.call(e.target, e);
                    "undefined" == typeof i || i || (e.stopPropagation(),
                        e.preventDefault())
                };
                r.proxy = r.proxy || {},
                    r.proxy[n] ? r.proxy[n].push(this.proxyid++) : r.proxy[n] = [this.proxyid++],
                    this.proxies.push(i),
                    e.addEventListener && e.addEventListener(n, i, !1)
            },
            unbind: function(e, t, n) {
                if (n) {
                    var r = n.proxy[t];
                    r && r.length && r.forEach(function() {
                        e.removeEventListener && e.removeEventListener(t, this.proxies[this.proxyid], !1)
                    })
                } else {
                    var i = e.listeners[t];
                    i && i.length && i.forEach(function(n) {
                        e.removeEventListener(t, n, !1)
                    })
                }
            },
            delegate: function(e, n, r, i) {
                var o = function(n) {
                    var o, a;
                    n.originEvent = n;
                    for (var s in n.detail)
                        "type" !== s && (n[s] = n.detail[s]);
                    n.startRotate = function() {
                        b = !0
                    };
                    var c = t.getSelector(e) + " " + r,
                        u = t.matchSelector(n.target, c),
                        d = t.matchSelector(n.target, c + " " + n.target.nodeName);
                    if (!u && d) {
                        for (t.env.ios7 && t.forceReflow(),
                            o = n.target; !t.matchSelector(o, c);)
                            o = o.parentNode;
                        a = i.call(n.target, n),
                            "undefined" == typeof a || a || (n.stopPropagation(),
                                n.preventDefault())
                    } else
                        t.env.ios7 && t.forceReflow(),
                        (u || d) && (a = i.call(n.target, n),
                            "undefined" == typeof a || a || (n.stopPropagation(),
                                n.preventDefault()))
                };
                i.proxy = i.proxy || {},
                    i.proxy[n] ? i.proxy[n].push(this.proxyid++) : i.proxy[n] = [this.proxyid++],
                    this.proxies.push(o),
                    e.listeners = e.listeners || {},
                    e.listeners[n] ? e.listeners[n].push(o) : e.listeners[n] = [o],
                    e.addEventListener && e.addEventListener(n, o, !1)
            },
            undelegate: function(e, t, n, r) {
                if (r) {
                    var i = r.proxy[t];
                    i.length && i.forEach(function() {
                        e.removeEventListener && e.removeEventListener(t, this.proxies[this.proxyid], !1)
                    })
                } else {
                    var o = e.listeners[t];
                    o.forEach(function(n) {
                        e.removeEventListener(t, n, !1)
                    })
                }
            }
        },
        r = {
            tap: !0,
            doubleTap: !0,
            tapMaxDistance: 10,
            hold: !0,
            tapTime: 200,
            holdTime: 650,
            maxDoubleTapInterval: 300,
            swipe: !0,
            swipeTime: 300,
            swipeMinDistance: 18,
            swipeFactor: 5,
            drag: !0,
            pinch: !0,
            minScaleRate: 0,
            minRotationAngle: 0
        },
        i = {
            TOUCH_START: "touchstart",
            TOUCH_MOVE: "touchmove",
            TOUCH_END: "touchend",
            TOUCH_CANCEL: "touchcancel",
            MOUSE_DOWN: "mousedown",
            MOUSE_MOVE: "mousemove",
            MOUSE_UP: "mouseup",
            CLICK: "click",
            PINCH_START: "pinchstart",
            PINCH_END: "pinchend",
            PINCH: "pinch",
            PINCH_IN: "pinchin",
            PINCH_OUT: "pinchout",
            ROTATION_LEFT: "rotateleft",
            ROTATION_RIGHT: "rotateright",
            ROTATION: "rotate",
            SWIPE_START: "swipestart",
            SWIPING: "swiping",
            SWIPE_END: "swipeend",
            SWIPE_LEFT: "swipeleft",
            SWIPE_RIGHT: "swiperight",
            SWIPE_UP: "swipeup",
            SWIPE_DOWN: "swipedown",
            SWIPE: "swipe",
            DRAG: "drag",
            DRAGSTART: "dragstart",
            DRAGEND: "dragend",
            HOLD: "hold",
            TAP: "tap",
            DOUBLE_TAP: "doubletap"
        },
        o = {
            start: null,
            move: null,
            end: null
        },
        a = 0,
        s = null,
        c = null,
        u = null,
        d = !1,
        l = !1,
        p = !1,
        f = {},
        h = !1,
        v = null,
        m = !1,
        g = null,
        y = 1,
        b = !1,
        _ = [],
        w = 0,
        x = 0,
        k = 0,
        T = null,
        C = {
            getAngleDiff: function(e) {
                for (var n = parseInt(w - t.getAngle180(e[0], e[1]), 10), r = 0; Math.abs(n - x) > 90 && r++ < 50;)
                    0 > x ? n -= 180 : n += 180;
                return x = parseInt(n, 10)
            },
            pinch: function(e) {
                var a = e.target;
                if (r.pinch) {
                    if (!h)
                        return;
                    if (t.getFingers(e) < 2 && !t.isTouchEnd(e))
                        return;
                    var s = t.calScale(o.start, o.move),
                        c = this.getAngleDiff(o.move),
                        u = {
                            type: "",
                            originEvent: e,
                            scale: s,
                            rotation: c,
                            direction: c > 0 ? "right" : "left",
                            fingersCount: t.getFingers(e)
                        };
                    if (l ? t.isTouchMove(e) ? (u.fingerStatus = "move",
                            n.trigger(a, i.PINCH, u)) : t.isTouchEnd(e) && (u.fingerStatus = "end",
                            n.trigger(a, i.PINCH_END, u),
                            t.reset()) : (l = !0,
                            u.fingerStatus = "start",
                            n.trigger(a, i.PINCH_START, u)),
                        Math.abs(1 - s) > r.minScaleRate) {
                        var d = t.simpleClone(u),
                            p = 1e-11;
                        s > y ? (y = s - p,
                                n.trigger(a, i.PINCH_OUT, d, !1)) : y > s && (y = s + p,
                                n.trigger(a, i.PINCH_IN, d, !1)),
                            t.isTouchEnd(e) && (y = 1)
                    }
                    if (Math.abs(c) > r.minRotationAngle) {
                        var f, v = t.simpleClone(u);
                        f = c > 0 ? i.ROTATION_RIGHT : i.ROTATION_LEFT,
                            n.trigger(a, f, v, !1),
                            n.trigger(a, i.ROTATION, u)
                    }
                }
            },
            rotateSingleFinger: function(e) {
                var r = e.target;
                if (b && t.getFingers(e) < 2) {
                    if (!o.move)
                        return;
                    if (_.length < 2) {
                        var a = t.getXYByElement(r);
                        _ = [{
                                x: a.left + r.offsetWidth / 2,
                                y: a.top + r.offsetHeight / 2
                            }, o.move[0]],
                            w = parseInt(t.getAngle180(_[0], _[1]), 10)
                    }
                    var s = [_[0], o.move[0]],
                        c = this.getAngleDiff(s),
                        u = {
                            type: "",
                            originEvent: e,
                            rotation: c,
                            direction: c > 0 ? "right" : "left",
                            fingersCount: t.getFingers(e)
                        };
                    t.isTouchMove(e) ? u.fingerStatus = "move" : (t.isTouchEnd(e) || "mouseout" === e.type) && (u.fingerStatus = "end",
                        n.trigger(r, i.PINCH_END, u),
                        t.reset());
                    var d = c > 0 ? i.ROTATION_RIGHT : i.ROTATION_LEFT;
                    n.trigger(r, d, u),
                        n.trigger(r, i.ROTATION, u)
                }
            },
            swipe: function(e) {
                var s = e.target;
                if (h && o.move && !(t.getFingers(e) > 1)) {
                    var c = Date.now(),
                        u = c - a,
                        l = t.getDistance(o.start[0], o.move[0]),
                        v = {
                            x: o.move[0].x - f.left,
                            y: o.move[0].y - f.top
                        },
                        m = t.getAngle(o.start[0], o.move[0]),
                        g = t.getDirectionFromAngle(m),
                        y = u / 1e3,
                        b = 10 * (10 - r.swipeFactor) * y * y,
                        _ = {
                            type: i.SWIPE,
                            originEvent: e,
                            position: v,
                            direction: g,
                            distance: l,
                            distanceX: o.move[0].x - o.start[0].x,
                            distanceY: o.move[0].y - o.start[0].y,
                            x: o.move[0].x - o.start[0].x,
                            y: o.move[0].y - o.start[0].y,
                            angle: m,
                            duration: u,
                            fingersCount: t.getFingers(e),
                            factor: b
                        };
                    if (r.swipe) {
                        var w = function() {
                            var e = i;
                            switch (g) {
                                case "up":
                                    n.trigger(s, e.SWIPE_UP, _);
                                    break;
                                case "down":
                                    n.trigger(s, e.SWIPE_DOWN, _);
                                    break;
                                case "left":
                                    n.trigger(s, e.SWIPE_LEFT, _);
                                    break;
                                case "right":
                                    n.trigger(s, e.SWIPE_RIGHT, _)
                            }
                        };
                        d ? t.isTouchMove(e) ? (_.fingerStatus = _.swipe = "move",
                            n.trigger(s, i.SWIPING, _),
                            u > r.swipeTime && u < r.swipeTime + 50 && l > r.swipeMinDistance && (w(),
                                n.trigger(s, i.SWIPE, _, !1))) : (t.isTouchEnd(e) || "mouseout" === e.type) && (_.fingerStatus = _.swipe = "end",
                            n.trigger(s, i.SWIPE_END, _),
                            r.swipeTime > u && l > r.swipeMinDistance && (w(),
                                n.trigger(s, i.SWIPE, _, !1))) : (_.fingerStatus = _.swipe = "start",
                            d = !0,
                            n.trigger(s, i.SWIPE_START, _))
                    }
                    r.drag && (p ? t.isTouchMove(e) ? (_.fingerStatus = _.swipe = "move",
                        n.trigger(s, i.DRAG, _)) : t.isTouchEnd(e) && (_.fingerStatus = _.swipe = "end",
                        n.trigger(s, i.DRAGEND, _)) : (_.fingerStatus = _.swipe = "start",
                        p = !0,
                        n.trigger(s, i.DRAGSTART, _)))
                }
            },
            tap: function(e) {
                var s = e.target;
                if (r.tap) {
                    var c = Date.now(),
                        u = c - a,
                        d = t.getDistance(o.start[0], o.move ? o.move[0] : o.start[0]);
                    clearTimeout(v);
                    var l = function() {
                        if (T && r.doubleTap && a - k < r.maxDoubleTapInterval) {
                            var e = t.getDistance(T, o.start[0]);
                            if (16 > e)
                                return !0
                        }
                        return !1
                    }();
                    if (l)
                        return clearTimeout(g),
                            void n.trigger(s, i.DOUBLE_TAP, {
                                type: i.DOUBLE_TAP,
                                originEvent: e,
                                position: o.start[0]
                            });
                    if (r.tapMaxDistance < d)
                        return;
                    r.holdTime > u && t.getFingers(e) <= 1 && (m = !0,
                        k = c,
                        T = o.start[0],
                        g = setTimeout(function() {
                            n.trigger(s, i.TAP, {
                                type: i.TAP,
                                originEvent: e,
                                fingersCount: t.getFingers(e),
                                position: T
                            })
                        }, r.tapTime))
                }
            },
            hold: function(e) {
                var i = e.target;
                r.hold && (clearTimeout(v),
                    v = setTimeout(function() {
                        if (o.start) {
                            var a = t.getDistance(o.start[0], o.move ? o.move[0] : o.start[0]);
                            r.tapMaxDistance < a || m || n.trigger(i, "hold", {
                                type: "hold",
                                originEvent: e,
                                fingersCount: t.getFingers(e),
                                position: o.start[0]
                            })
                        }
                    }, r.holdTime))
            }
        },
        S = function(e) {
            var n = e.target;
            switch (e.type) {
                case "touchstart":
                case "mousedown":
                    _ = [],
                        h = !0,
                        (!o.start || o.start.length < 2) && (o.start = t.getPosOfEvent(e)),
                        t.getFingers(e) >= 2 && (w = parseInt(t.getAngle180(o.start[0], o.start[1]), 10)),
                        a = Date.now(),
                        s = e,
                        f = {};
                    var r = n.getBoundingClientRect(),
                        i = document.documentElement;
                    f = {
                            top: r.top + (window.pageYOffset || i.scrollTop) - (i.clientTop || 0),
                            left: r.left + (window.pageXOffset || i.scrollLeft) - (i.clientLeft || 0)
                        },
                        C.hold(e);
                    break;
                case "touchmove":
                case "mousemove":
                    if (!h || !o.start)
                        return;
                    o.move = t.getPosOfEvent(e),
                        t.getFingers(e) >= 2 ? C.pinch(e) : b ? C.rotateSingleFinger(e) : C.swipe(e);
                    break;
                case "touchend":
                case "touchcancel":
                case "mouseup":
                case "mouseout":
                    if (!h)
                        return;
                    u = e,
                        l ? C.pinch(e) : b ? C.rotateSingleFinger(e) : d ? C.swipe(e) : C.tap(e),
                        t.reset(),
                        w = 0,
                        x = 0,
                        e.touches && 1 === e.touches.length && (h = !0,
                            b = !0)
            }
        },
        A = function() {
            function e(e) {
                t.hasTouch || (e = t.getPCevts(e)),
                    u.forEach(function(t) {
                        n.delegate(t, e, s, a[e])
                    })
            }

            function r(e) {
                t.hasTouch || (e = t.getPCevts(e)),
                    u.forEach(function(t) {
                        n.bind(t, e, a[e])
                    })
            }
            var i, o, a, s, c = arguments;
            if (c.length < 2 || c > 4)
                return console.error("unexpected arguments!");
            var u = "string" === t.getType(c[0]) ? document.querySelectorAll(c[0]) : c[0];
            if (u = u.length ? Array.prototype.slice.call(u) : [u],
                3 === c.length && "string" === t.getType(c[1]))
                return i = c[1].split(" "),
                    o = c[2],
                    void i.forEach(function(e) {
                        t.hasTouch || (e = t.getPCevts(e)),
                            u.forEach(function(t) {
                                n.bind(t, e, o)
                            })
                    });
            if (3 !== c.length || "object" !== t.getType(c[1]))
                if (2 !== c.length || "object" !== t.getType(c[1])) {
                    if (4 === c.length && "object" === t.getType(c[2]))
                        return i = c[1].split(" "),
                            o = c[3],
                            void i.forEach(function(e) {
                                t.hasTouch || (e = t.getPCevts(e)),
                                    u.forEach(function(t) {
                                        n.bind(t, e, o)
                                    })
                            });
                    if (4 === c.length) {
                        var d = u[0];
                        return i = c[1].split(" "),
                            s = c[2],
                            o = c[3],
                            void i.forEach(function(e) {
                                t.hasTouch || (e = t.getPCevts(e)),
                                    n.delegate(d, e, s, o)
                            })
                    }
                } else {
                    a = c[1];
                    for (var l in a)
                        r(l)
                }
            else {
                a = c[1],
                    s = c[2];
                for (var p in a)
                    e(p)
            }
        },
        E = function() {
            var e, r, i = arguments;
            if (i.length < 1 || i.length > 4)
                return console.error("unexpected arguments!");
            var o = "string" === t.getType(i[0]) ? document.querySelectorAll(i[0]) : i[0];
            if (o = o.length ? Array.prototype.slice.call(o) : [o],
                1 === i.length || 2 === i.length)
                return void o.forEach(function(r) {
                    e = i[1] ? i[1].split(" ") : Object.keys(r.listeners),
                        e.length && e.forEach(function(e) {
                            t.hasTouch || (e = t.getPCevts(e)),
                                n.unbind(r, e),
                                n.undelegate(r, e)
                        })
                });
            if (3 === i.length && "function" === t.getType(i[2]))
                return r = i[2],
                    void o.forEach(function(o) {
                        e = i[1].split(" "),
                            e.forEach(function(e) {
                                t.hasTouch || (e = t.getPCevts(e)),
                                    n.unbind(o, e, r)
                            })
                    });
            if (3 === i.length && "string" === t.getType(i[2])) {
                var a = i[2];
                return void o.forEach(function(r) {
                    e = i[1].split(" "),
                        e.forEach(function(e) {
                            t.hasTouch || (e = t.getPCevts(e)),
                                n.undelegate(r, e, a)
                        })
                })
            }
            return 4 === i.length ? (r = i[3],
                void o.forEach(function(o) {
                    e = i[1].split(" "),
                        e.forEach(function(e) {
                            t.hasTouch || (e = t.getPCevts(e)),
                                n.undelegate(o, e, a, r)
                        })
                })) : void 0
        },
        D = function(e, r, i) {
            var o = arguments;
            t.hasTouch || (r = t.getPCevts(r));
            var a = "string" === t.getType(o[0]) ? document.querySelectorAll(o[0]) : o[0];
            a = a.length ? Array.prototype.call(a) : [a],
                a.forEach(function(e) {
                    n.trigger(e, r, i)
                })
        };
    e();
    var $ = {};
    return $.on = $.bind = $.live = A,
        $.off = $.unbind = $.die = E,
        $.config = r,
        $.trigger = D,
        $
}),
"undefined" == typeof faultylabs && (faultylabs = {}),
    faultylabs.MD5 = function(e) {
        function t(e) {
            var t = (e >>> 0).toString(16);
            return "00000000".substr(0, 8 - t.length) + t
        }

        function n(e) {
            var t, n = [];
            for (t = 0; t < e.length; t++)
                n = n.concat(d(e[t]));
            return n
        }

        function r(e) {
            var t, n = [];
            for (t = 0; 8 > t; t++)
                n.push(255 & e),
                e >>>= 8;
            return n
        }

        function i(e, t) {
            return 4294967295 & e << t | e >>> 32 - t
        }

        function o(e, t, n) {
            return e & t | ~e & n
        }

        function a(e, t, n) {
            return n & e | ~n & t
        }

        function s(e, t, n) {
            return e ^ t ^ n
        }

        function c(e, t, n) {
            return t ^ (e | ~n)
        }

        function u(e, t) {
            return e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]
        }

        function d(e) {
            var t, n, r, i = [];
            for (t = 0; t < e.length; t++)
                if (e.charCodeAt(t) <= 127)
                    i.push(e.charCodeAt(t));
                else
                    for (n = encodeURIComponent(e.charAt(t)).substr(1).split("%"),
                        r = 0; r < n.length; r++)
                        i.push(parseInt(n[r], 16));
            return i
        }

        function l() {
            var e, n = "",
                r = 0,
                i = 0;
            for (e = 3; e >= 0; e--)
                i = arguments[e],
                r = 255 & i,
                i >>>= 8,
                r <<= 8,
                r |= 255 & i,
                i >>>= 8,
                r <<= 8,
                r |= 255 & i,
                i >>>= 8,
                r <<= 8,
                r |= i,
                n += t(r);
            return n
        }

        function p(e) {
            var t, n = new Array(e.length);
            for (t = 0; t < e.length; t++)
                n[t] = e[t];
            return n
        }

        function f(e, t) {
            return 4294967295 & e + t
        }

        function h() {
            function e(e, t, n, r) {
                var o = _;
                _ = b,
                    b = y,
                    y = f(y, i(f(g, f(e, f(t, n))), r)),
                    g = o
            }
            var t, n, d, p, h, m, g, y, b, _, w, x = v.length;
            if (v.push(128),
                t = v.length % 64,
                t > 56) {
                for (n = 0; 64 - t > n; n++)
                    v.push(0);
                t = v.length % 64
            }
            for (n = 0; 56 - t > n; n++)
                v.push(0);
            for (v = v.concat(r(8 * x)),
                d = 1732584193,
                p = 4023233417,
                h = 2562383102,
                m = 271733878,
                g = 0,
                y = 0,
                b = 0,
                _ = 0,
                n = 0; n < v.length / 64; n++)
                g = d,
                y = p,
                b = h,
                _ = m,
                w = 64 * n,
                e(o(y, b, _), 3614090360, u(v, w), 7),
                e(o(y, b, _), 3905402710, u(v, w + 4), 12),
                e(o(y, b, _), 606105819, u(v, w + 8), 17),
                e(o(y, b, _), 3250441966, u(v, w + 12), 22),
                e(o(y, b, _), 4118548399, u(v, w + 16), 7),
                e(o(y, b, _), 1200080426, u(v, w + 20), 12),
                e(o(y, b, _), 2821735955, u(v, w + 24), 17),
                e(o(y, b, _), 4249261313, u(v, w + 28), 22),
                e(o(y, b, _), 1770035416, u(v, w + 32), 7),
                e(o(y, b, _), 2336552879, u(v, w + 36), 12),
                e(o(y, b, _), 4294925233, u(v, w + 40), 17),
                e(o(y, b, _), 2304563134, u(v, w + 44), 22),
                e(o(y, b, _), 1804603682, u(v, w + 48), 7),
                e(o(y, b, _), 4254626195, u(v, w + 52), 12),
                e(o(y, b, _), 2792965006, u(v, w + 56), 17),
                e(o(y, b, _), 1236535329, u(v, w + 60), 22),
                e(a(y, b, _), 4129170786, u(v, w + 4), 5),
                e(a(y, b, _), 3225465664, u(v, w + 24), 9),
                e(a(y, b, _), 643717713, u(v, w + 44), 14),
                e(a(y, b, _), 3921069994, u(v, w), 20),
                e(a(y, b, _), 3593408605, u(v, w + 20), 5),
                e(a(y, b, _), 38016083, u(v, w + 40), 9),
                e(a(y, b, _), 3634488961, u(v, w + 60), 14),
                e(a(y, b, _), 3889429448, u(v, w + 16), 20),
                e(a(y, b, _), 568446438, u(v, w + 36), 5),
                e(a(y, b, _), 3275163606, u(v, w + 56), 9),
                e(a(y, b, _), 4107603335, u(v, w + 12), 14),
                e(a(y, b, _), 1163531501, u(v, w + 32), 20),
                e(a(y, b, _), 2850285829, u(v, w + 52), 5),
                e(a(y, b, _), 4243563512, u(v, w + 8), 9),
                e(a(y, b, _), 1735328473, u(v, w + 28), 14),
                e(a(y, b, _), 2368359562, u(v, w + 48), 20),
                e(s(y, b, _), 4294588738, u(v, w + 20), 4),
                e(s(y, b, _), 2272392833, u(v, w + 32), 11),
                e(s(y, b, _), 1839030562, u(v, w + 44), 16),
                e(s(y, b, _), 4259657740, u(v, w + 56), 23),
                e(s(y, b, _), 2763975236, u(v, w + 4), 4),
                e(s(y, b, _), 1272893353, u(v, w + 16), 11),
                e(s(y, b, _), 4139469664, u(v, w + 28), 16),
                e(s(y, b, _), 3200236656, u(v, w + 40), 23),
                e(s(y, b, _), 681279174, u(v, w + 52), 4),
                e(s(y, b, _), 3936430074, u(v, w), 11),
                e(s(y, b, _), 3572445317, u(v, w + 12), 16),
                e(s(y, b, _), 76029189, u(v, w + 24), 23),
                e(s(y, b, _), 3654602809, u(v, w + 36), 4),
                e(s(y, b, _), 3873151461, u(v, w + 48), 11),
                e(s(y, b, _), 530742520, u(v, w + 60), 16),
                e(s(y, b, _), 3299628645, u(v, w + 8), 23),
                e(c(y, b, _), 4096336452, u(v, w), 6),
                e(c(y, b, _), 1126891415, u(v, w + 28), 10),
                e(c(y, b, _), 2878612391, u(v, w + 56), 15),
                e(c(y, b, _), 4237533241, u(v, w + 20), 21),
                e(c(y, b, _), 1700485571, u(v, w + 48), 6),
                e(c(y, b, _), 2399980690, u(v, w + 12), 10),
                e(c(y, b, _), 4293915773, u(v, w + 40), 15),
                e(c(y, b, _), 2240044497, u(v, w + 4), 21),
                e(c(y, b, _), 1873313359, u(v, w + 32), 6),
                e(c(y, b, _), 4264355552, u(v, w + 60), 10),
                e(c(y, b, _), 2734768916, u(v, w + 24), 15),
                e(c(y, b, _), 1309151649, u(v, w + 52), 21),
                e(c(y, b, _), 4149444226, u(v, w + 16), 6),
                e(c(y, b, _), 3174756917, u(v, w + 44), 10),
                e(c(y, b, _), 718787259, u(v, w + 8), 15),
                e(c(y, b, _), 3951481745, u(v, w + 36), 21),
                d = f(d, g),
                p = f(p, y),
                h = f(h, b),
                m = f(m, _);
            return l(m, h, p, d).toUpperCase()
        }
        var v = null,
            m = null;
        return "string" == typeof e ? v = d(e) : e.constructor == Array ? 0 === e.length ? v = e : "string" == typeof e[0] ? v = n(e) : "number" == typeof e[0] ? v = e : m = typeof e[0] : "undefined" != typeof ArrayBuffer ? e instanceof ArrayBuffer ? v = p(new Uint8Array(e)) : e instanceof Uint8Array || e instanceof Int8Array ? v = p(e) : e instanceof Uint32Array || e instanceof Int32Array || e instanceof Uint16Array || e instanceof Int16Array || e instanceof Float32Array || e instanceof Float64Array ? v = p(new Uint8Array(e.buffer)) : m = typeof e : m = typeof e,
            m && alert("MD5 type mismatch, cannot process " + m),
            h()
    },
    function() {
        if (!$.os) {
            var e = {},
                t = navigator.userAgent,
                n = (navigator.platform,
                    t.match(/(Android);?[\s\/]+([\d.]+)?/)),
                r = t.match(/(iPad).*OS\s([\d_]+)/),
                i = t.match(/(iPod)(.*OS\s([\d_]+))?/),
                o = !r && t.match(/(iPhone\sOS)\s([\d_]+)/);
            n && (e.android = !0,
                    e.version = n[2]),
                o && !i && (e.ios = e.iphone = !0,
                    e.version = o[2].replace(/_/g, ".")),
                r && (e.ios = e.ipad = !0,
                    e.version = r[2].replace(/_/g, ".")),
                i && (e.ios = e.ipod = !0,
                    e.version = i[3] ? i[3].replace(/_/g, ".") : null),
                $.os = e
        }
    }(),
    Number.prototype.add = function(e) {
        var t, n, r;
        try {
            n = this.toString().split(".")[1].length
        } catch (i) {
            n = 0
        }
        try {
            r = e.toString().split(".")[1].length
        } catch (i) {
            r = 0
        }
        return t = Math.pow(10, Math.max(n, r)),
            (this.mul(t) + e.mul(t)) / t
    },
    Number.prototype.sub = function(e) {
        return this.add(-e)
    },
    Number.prototype.mul = function(e) {
        var t = 0,
            n = this.toString(),
            r = e.toString();
        try {
            t += n.split(".")[1].length
        } catch (i) {}
        try {
            t += r.split(".")[1].length
        } catch (i) {}
        return Number(n.replace(".", "")) * Number(r.replace(".", "")) / Math.pow(10, t)
    },
    Number.prototype.div = function(e) {
        var t, n, r = 0,
            i = 0;
        try {
            r = this.toString().split(".")[1].length
        } catch (o) {}
        try {
            i = e.toString().split(".")[1].length
        } catch (o) {}
        return t = Number(this.toString().replace(".", "")),
            n = Number(e.toString().replace(".", "")),
            (t / n).mul(Math.pow(10, i - r))
    },
    Date.prototype.format = function(e) {
        var t = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            S: this.getMilliseconds()
        };
        /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (var n in t)
            new RegExp("(" + n + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? t[n] : ("00" + t[n]).substr(("" + t[n]).length)));
        return e
    };
var ddb = {};
ddb.version = "2.9.1",
    ddb.isWeixin = /MicroMessenger/i.test(navigator.userAgent),
    ddb.isApp = /DaDaBusPassenger/i.test(navigator.userAgent),
    ddb.isAndroidApp = ddb.isApp && $.os.android,
    ddb.isIosApp = ddb.isApp && $.os.ios;
var B = {};
switch (B.url = {},
    B.url.getParam = function(e, t) {
        t = t || location.href;
        var n = new RegExp("(^|&|\\?|#)" + e + "=([^&]*?)(&|#|$)"),
            r = t.match(/#.*/) ? t.match(/#.*/)[0] : "";
        return t = t.replace(/#.*/, ""),
            n.test(r) ? decodeURIComponent(r.match(n)[2]) : n.test(t) ? decodeURIComponent(t.match(n)[2]) : ""
    },
    B.url.setParam = function(e, t, n, r) {
        if ("undefined" == typeof e || "undefined" == typeof t || "undefined" == typeof n)
            return n;
        var i, o = new RegExp("(^|&|\\?|#)" + e + "=([^&]*?)(&|#|$)"),
            a = n.match(/#.*/) ? n.match(/#.*/)[0] : "";
        return n = n.replace(/#.*/, ""),
            r === !0 ? (o.test(a) ? a = a.replace(o, function(n, r, i, o) {
                    return r + e + "=" + encodeURIComponent(t) + o
                }) : (i = -1 === a.indexOf("#") ? "#" : "&",
                    a = a + i + e + "=" + encodeURIComponent(t)),
                a = a.replace(o, function(n, r, i, o) {
                    return r + e + "=" + encodeURIComponent(t) + o
                }),
                a + n) : (o.test(n) ? n = n.replace(o, function(n, r, i, o) {
                    return r + e + "=" + encodeURIComponent(t) + o
                }) : (i = -1 === n.indexOf("?") ? "?" : "&",
                    n = n + i + e + "=" + encodeURIComponent(t)),
                n + a)
    },
    B.url.parseHash = function(e) {
        var t, n, r = {},
            i = e.split("?");
        if (t = i[0],
            i.length > 1) {
            var o, a;
            n = i[1],
                o = n.split("&");
            for (var s = 0; s < o.length; s++)
                o[s] && (a = o[s].split("="),
                    r[a[0]] = a[1])
        }
        return {
            hash: e,
            tag: t,
            query: n,
            param: r
        }
    },
    B.url.serializeArray = function(e) {
        var t, n = {};
        try {
            e = e.split("&");
            for (var r = 0, i = e.length; i > r; r++)
                e[r] && (t = e[r].split("="),
                    n[t[0]] = t[1])
        } catch (o) {
            alert("解析公用参数出错：" + o)
        }
        return n
    },
    B.url.getObj = function(e) {
        var t = B.url.parseHash(e);
        return t.param
    },
    B.url.setObj = function(e, t) {
        return $.each(t, function(t, n) {
                e = B.url.setParam(t, n, e)
            }),
            e
    },
    ddb.wxid = B.url.getParam("wxid") || window.sessionStorage.getItem("ddb_wxid"),
    ddb.dev_status = "release",
    ddb.appid = 2 == ddb.wxid ? "wxfeb03a6635e532d7" : "wx72a2b17c7ed41fe8",
    location.hostname.split(".")[0]) {
    case "loc":
    case "dev":
        ddb.dev_status = "dev",
            ddb.appid = "wx108854b0f729a8e5";
        break;
    case "test":
        ddb.dev_status = "test",
            ddb.appid = "wx54125ac4cf97185c";
        break;
    case "pre":
        ddb.dev_status = "pre"
}
ddb.sld = "release" === ddb.dev_status ? "" : ddb.dev_status + ".",
    ddb.host = location.host.replace("static.", ""),
    ddb.api = "http://" + ddb.sld + "api.buskeji.com/",
    ddb.wxapi = "http://" + ddb.host + "/app/api?parames=",
    ddb.appkey = "release" === ddb.dev_status ? "uwd1c0sxd3621" : "pvxdm17jx8rqr",
    ddb.xhrs = [],
    ddb.noop = function() {},
    ddb.fitEnv = function(e) {
        return "release" === ddb.dev_status ? e : e.replace(/\/\/(dev|test)\./, "//" + location.hostname.split(".")[0] + ".")
    },
    B.user = {},
    B.user.isLogin = function() {
        return !!(ddb.cookie("wx_user_id") && ddb.cookie("wx_mobile") && ddb.cookie("wx_device_id"))
    },
    B.user.login = function(e, t) {
        "undefined" == typeof t && (t = ddb.isWeixin || !e),
            e = encodeURIComponent(e || location.href);
        var n = "http://" + ddb.host + "/webapp/login.html?referrer=" + e;
        t ? location.replace(n) : location.href = n
    },
    B.user.clearLogin = function(e) {
        (!ddb.isIosApp || e) && (ddb.cookie("wx_user_id", "", {
                path: "/"
            }),
            ddb.cookie("wx_mobile", "", {
                path: "/"
            }),
            ddb.cookie("wx_device_id", "", {
                path: "/"
            }),
            ddb.cookie("wx_ddb_token", "", {
                path: "/"
            }),
            ddb.cookie("wx_login_token", "", {
                path: "/"
            }),
            ddb.cookie("wx_user_open_id", "", {
                path: "/"
            }),
            ddb.cookie("wx_device_id", ""),
            ddb.cookie("wx_mobile", ""),
            ddb.cookie("wx_user_id", ""),
            ddb.cookie("wx_ddb_token", ""),
            ddb.cookie("wx_login_token", ""),
            ddb.cookie("wx_user_open_id", ""),
            sessionStorage.clear(),
            ddb.session("appCommon", null),
            "function" == typeof e ? e() : ddb.isApp || location.reload())
    },
    B.user.logout = function(e, t) {
        if (t = t || B.user.login,
            e) {
            var n = (ddb.isWeixin ? ddb.wxapi : ddb.api) + "authentication/logout",
                r = ddb.isWeixin ? {
                    urlType: "app"
                } : {};
            ddb.get(n, r).done(function(e) {
                0 === +e.ret ? B.user.clearLogin(t) : ddb.msg(e.msg)
            }).fail(function() {
                alert("服务器错误")
            })
        } else
            B.user.clearLogin(t)
    },
    function() {
        function e() {
            var e = ddb.cookie("wx_mobile"),
                t = ddb.pgps("ddb_user_gps"),
                n = (ddb.store("ddbCity") || "").split("/")[1],
                r = ddb.session("ddb_src_id"),
                i = window.sessionStorage.getItem("ddb_wxid");
            e && e !== ddb.common.mobile && (ddb.common.mobile = e,
                    ddb.common.user_id = ddb.cookie("wx_user_id"),
                    ddb.common.device_id = ddb.cookie("wx_device_id"),
                    ddb.common.ddb_token = ddb.cookie("wx_ddb_token"),
                    ddb.common.ddb_token || (ddb.common.login_token = ddb.cookie("wx_login_token"))),
                t && (ddb.common.lng = t.lng,
                    ddb.common.lat = t.lat,
                    ddb.common.gps_sampling_time = t.gps_sampling_time),
                n && (ddb.common.city_code = n),
                r && (ddb.common.ddb_src_id = r),
                i && (ddb.common.wxid = i)
        }

        function t(t) {
            function n(e) {
                return 8001 === +e.ret || 8002 === +e.ret || 8003 === +e.ret ? t.notCheckLogin ? (B.user.clearLogin(),
                    o.reject(e),
                    void 0) : B.user.isLogin() ? (B.user.logout(),
                    void 0) : (B.user.login(),
                    void 0) : 6001 === +e.ret ? (ddb.isWeixin && !t.notCheckLogin && ddb.getOpenId(0, !0),
                    o.reject(e),
                    void 0) : (o.resolve(e),
                    void 0)
            }
            e(),
                t.data = $.extend({}, ddb.common, t.data || {}),
                /^https?:/i.test(t.url) || (t.url = "app" === t.urlType ? t.url : ddb.api + t.url);
            var r, i = t.cachekey ? ddb.session(t.cachekey) : null,
                o = $.Deferred();
            return i ? (n(i),
                o.promise()) : (t.noLoading || ddb.loading.show(),
                r = $.ajax({
                    type: t.type || "GET",
                    url: t.url,
                    data: t.data,
                    dataType: t.dataType || "json",
                    cache: t.cache || !1,
                    timeout: t.timeout || 8e3,
                    success: function(e) {
                        ddb.loading.hide(),
                            n(e),
                            console.log("AJAX: " + t.url + "\n ", e),
                            t.cachekey && 0 === +e.ret && ddb.session(t.cachekey, e)
                    },
                    error: function(e, t) {
                        ddb.loading.hide(),
                            console.log("网络异常[" + t + "]"),
                            o.reject(e)
                    }
                }),
                ddb.xhrs.push(r),
                t.returnXhr ? r : o.promise())
        }

        function n(t, n, r, i) {
            function o(e) {
                return 8001 === +e.ret || 8002 === +e.ret || 8003 === +e.ret ? n.notCheckLogin ? (B.user.clearLogin(),
                    s.reject(e),
                    void 0) : B.user.isLogin() ? (B.user.logout(),
                    "function" == typeof r && r(e),
                    void 0) : (B.user.login(),
                    void 0) : 6001 === +e.ret ? (ddb.isWeixin && !n.notCheckLogin && ddb.getOpenId(0, !0),
                    s.reject(e),
                    void 0) : ("function" == typeof r && r(e),
                    s.resolve(e),
                    void 0)
            }
            "function" == typeof n && (r = n,
                    i = r,
                    n = {}),
                e(),
                n = $.extend({}, ddb.common, n || {});
            var a, s = $.Deferred(),
                c = n.cachekey,
                u = c ? ddb.session(c) : null;
            return /^https?:/i.test(t) || (t = "app" === n.urlType ? t : ddb.api + t),
                u ? (o(u),
                    s.promise()) : (n.noLoading || ddb.loading.show(),
                    a = $.ajax({
                        url: t,
                        type: "GET",
                        data: n,
                        dataType: n.dataType || "json",
                        cache: n.cache || !1,
                        timeout: n.timeout || 8e3,
                        success: function(e) {
                            ddb.loading.hide(),
                                console.log("GET: " + t + "\n ", e),
                                o(e),
                                c && 0 === +e.ret && ddb.session(c, e)
                        },
                        error: function(e, t) {
                            ddb.loading.hide(),
                                "function" == typeof i && i(e, t),
                                console.log("网络异常[" + t + "]"),
                                s.reject(e)
                        }
                    }),
                    ddb.xhrs.push(a),
                    n.returnXhr ? a : s.promise())
        }

        function r(t, n, r, i) {
            function o(e) {
                return 8001 === +e.ret || 8002 === +e.ret || 8003 === +e.ret ? B.user.isLogin() ? (B.user.logout(),
                    void 0) : (B.user.login(),
                    void 0) : ("function" == typeof r && r(e),
                    s.resolve(e),
                    void 0)
            }
            e(),
                n = $.extend({}, ddb.common, n || {}),
                /^https?:/i.test(t) || (t = "app" === n.urlType ? t : ddb.api + t);
            var a, s = $.Deferred(),
                c = n.cachekey,
                u = c ? ddb.session(c) : null;
            return u ? (o(u),
                s.promise()) : (n.noLoading || ddb.loading.show(),
                a = $.ajax({
                    url: t,
                    type: "POST",
                    data: n,
                    dataType: n.dataType || "json",
                    cache: n.cache || !1,
                    timeout: n.timeout || 8e3,
                    success: function(e) {
                        ddb.loading.hide(),
                            console.log("POST: " + t + "\n ", e),
                            o(e),
                            c && 0 === +e.ret && ddb.session(c, e)
                    },
                    error: function(e, t) {
                        ddb.loading.hide(),
                            "function" == typeof i && i(e, t),
                            console.log("网络异常[" + t + "]"),
                            s.reject()
                    }
                }),
                ddb.xhrs.push(a),
                s.promise())
        }

        function i(t, n, r, i) {
            function o(e) {
                return 8001 === +e.ret || 8002 === +e.ret || 8003 === +e.ret ? B.user.isLogin() ? (B.user.logout(),
                    void 0) : (B.user.login(),
                    void 0) : (r(e),
                    void 0)
            }
            var a = new FormData;
            t = ddb.api + t,
                e(),
                n = $.extend({}, ddb.common, n);
            for (var s in n)
                n.hasOwnProperty(s) && "hasOwnProperty" !== s && (n[s].name ? a.append(s, n[s], n[s].name) : a.append(s, n[s]));
            ddb.loading.show(),
                $.ajax({
                    url: t,
                    dataType: "json",
                    type: "POST",
                    data: a,
                    timeout: n.timeout || 2e4,
                    cache: !1,
                    processData: !1,
                    contentType: !1,
                    success: function(e) {
                        ddb.loading.hide(),
                            o(e),
                            console.log("UPLOAD: " + t + "\n ", e)
                    },
                    error: function(e, t) {
                        ddb.loading.hide(),
                            "function" == typeof i && i(e, t),
                            console.log("上传出错[" + t + "]")
                    }
                })
        }

        function o(t, n, r, i) {
            function o(e) {
                "function" == typeof r && r(e),
                    s.resolve(e)
            }
            "function" == typeof n && (r = n,
                    i = r,
                    n = {}),
                e(),
                n = $.extend({}, ddb.common, n || {});
            var a, s = $.Deferred(),
                c = n.cachekey,
                u = c ? ddb.session(c) : null;
            return /^https?:/i.test(t) || (t = "app" === n.urlType ? t : ddb.api + t),
                u ? (o(u),
                    s.promise()) : (n.noLoading || ddb.loading.show(),
                    a = $.ajax({
                        url: t,
                        type: "GET",
                        data: n,
                        dataType: "jsonp",
                        cache: n.cache || !1,
                        jsonp: "cb",
                        timeout: n.timeout || 8e3,
                        success: function(e) {
                            ddb.loading.hide(),
                                console.log(e),
                                o(e),
                                c && 0 === +e.ret && ddb.session(c, e),
                                console.log("JSONP: " + t + "\n ", e)
                        },
                        error: function(e, t) {
                            ddb.loading.hide(),
                                "function" == typeof i && i(e, t),
                                console.log("网络异常：", e),
                                s.reject(e)
                        }
                    }),
                    ddb.xhrs.push(a),
                    s.promise())
        }

        function a(e, t) {
            var n = "http://" + ddb.host + "/wechat_menu/getOpenId?",
                r = "";
            if (n = B.url.setParam("referrerSrc", e ? e : location.href, n),
                t = "undefined" == typeof t ? ddb.isWeixin : t) {
                var i = "https://open.weixin.qq.com/connect/oauth2/authorize?";
                r = B.url.setObj(i, {
                        appid: ddb.appid,
                        redirect_uri: n,
                        response_type: "code",
                        scope: "snsapi_base"
                    }),
                    r += "#wechat_redirect"
            } else
                r = n;
            B.url.getParam("hasOpenid") || location.replace(r)
        }

        function s(e, t, n) {
            function r(e, t, n) {
                var r = n.expires,
                    i = n.path,
                    o = n.domain,
                    a = n.secure;
                return "number" == typeof r && (r = new Date((new Date).getTime() + 864e5 * r)),
                    document.cookie = e + "=" + escape(t) + (r ? "; expires=" + r.toUTCString() : "") + (i ? "; path=" + i : "") + (o ? "; domain=" + o : "") + (a ? "; secure" : ""), !0
            }

            function i(e) {
                var t = document.cookie.match(new RegExp("(^| )" + e + "=([^;]*)(;|$)"));
                return null !== t ? unescape(t[2]) : ""
            }

            function o(e, t) {
                return t.expires = new Date(0),
                    r(e, "", t)
            }
            return n = n || {},
                "undefined" == typeof t ? i(e) : null === t || "" === t ? o(e, n) : r(e, t, n)
        }

        function c(e, t, n) {
            t = t || "http://" + ddb.host + "/webapp/" + e,
                n && window.history.replaceState(history.state, "", t),
                location = t
        }

        function u(e, t, n) {
            try {
                window[e].setItem("test-storage", "test"),
                    window[e].removeItem("test-storage")
            } catch (r) {
                return alert("您开启了无痕模式或禁用了缓存，为了能享受更好的服务，请更改您的设置。"),
                    void 0
            }
            if ("undefined" == typeof n)
                try {
                    return JSON.parse(window[e].getItem(t))
                } catch (i) {
                    return window[e].getItem(t)
                }
            else {
                if (null === n || "" === n)
                    return window[e].removeItem(t);
                try {
                    return window[e].setItem(t, JSON.stringify(n))
                } catch (o) {
                    return "sessionStorage" === e ? ddb.removeStoragesByKeyContains("/", e) : ddb.removeStoragesBut("ddbCity|isAward|ddbSearch|travel_city_code|waitBusTips", e),
                        window[e].setItem(t, JSON.stringify(n))
                }
            }
        }

        function d(e, t) {
            return u("localStorage", e, t)
        }

        function l(e, t) {
            return u("sessionStorage", e, t)
        }

        function p(e, t) {
            var n, r = window[t || "sessionStorage"],
                i = r.length;
            if (!r)
                return alert("为了能享受更好的服务，请关闭浏览器的无痕模式！"),
                    void 0;
            for (; i;)
                i--,
                n = r.key(i), -1 !== n.indexOf(e) && r.removeItem(n)
        }

        function f(e, t) {
            e = e.split("|");
            var n, r = window[t || "localStorage"],
                i = r.length;
            if (!r)
                return alert("为了能享受更好的服务，请关闭浏览器的无痕模式！"),
                    void 0;
            for (; i;)
                i--,
                n = r.key(i), -1 === e.indexOf(n) && r.removeItem(n)
        }

        function h(e) {
            ("release" !== ddb.dev_status || ddb.debugMobile === ddb.cookie("wx_mobile")) && console.log("Debug: ", e)
        }

        function v(e, t, n, r) {
            function i() {
                var e = "order/pay_confirm",
                    r = {
                        order_number: s,
                        dada_flag: 1
                    };
                t.isCharteredBus && (e = "chartered/pay_confirm",
                        r = {
                            order_id: s,
                            payment_id: t.pay_order_info.payment_id
                        }),
                    ddb.get(e, r, function(e) {
                        function r(e) {
                            ddb.store("isAward") || (ddb.pgps("award", $.extend(ddb.pgps("award") || {}, {
                                        show_award: e.show_award,
                                        award_title: e.award_title,
                                        award_msg: e.award_msg
                                    })),
                                    ddb.store("isAward", 1)),
                                ddb.pgps("activeInfo", {
                                    show_active: e.show_active,
                                    active_title: e.active_title,
                                    share_type: e.share_type
                                }),
                                t.isCharteredBus || (ddb.removeStoragesByKeyContains("member/get_ticket_count?date="),
                                    ddb.pgps("line/get_member_recommend_lines", null)),
                                n(s),
                                t.isCharteredBus || (t.isCharteredBus || (c = ddb.fitEnv(e.success_url) || c),
                                    location.href = c)
                        }
                        if (0 !== +e.ret)
                            return alert(e.msg),
                                void 0;
                        switch (e.data.status) {
                            case "success":
                                return r(e.data),
                                    void 0;
                            case "error invalid_order_number":
                                alert("订单号错误");
                                break;
                            case "order_unpaid":
                                alert("订单未支付");
                                break;
                            case "order_has_been_canceled":
                                alert("订单已取消");
                                break;
                            case "failed":
                        }
                        c = B.url.setParam("pay_status", "fail", c),
                            o()
                    })
            }

            function o() {
                r(s),
                    t.isCharteredBus || (location.href = c)
            }
            var a = +B.url.getParam("is_travel") || 4 == t.line_type,
                s = t.order_number,
                c = B.url.setParam("order_number", s, "order_details.html");
            switch (t.isCharteredBus && (c = B.url.setObj("chartered_order_details.html", {
                    order_id: s,
                    use_native_page: !1
                })),
                c = B.url.setObj(c, {
                    pay_status: e,
                    line_type: t.line_type
                }),
                a && (c = B.url.setParam("is_travel", 1, c + "#page-per")),
                n = n || ddb.noop,
                r = r || n,
                e) {
                case "ok":
                    return ddb.loading.show(),
                        setTimeout(i, 1500),
                        void 0;
                case "cancel":
                case "fail":
                    return o(),
                        void 0
            }
        }

        function m(e, t, n) {
            function r(r) {
                var i = ddb.common.version < "2.7.0";
                1 === r ? (e.payChannel = "wxpay",
                        e.payInfo = i ? e.pay_order_info.wx_prepay_id : JSON.stringify(e.pay_order_info.wx_params)) : 2 === r && (e.payChannel = "alipay",
                        e.payInfo = e.pay_order_info.alipay_params),
                    i ? ddb.appCall("pay", e.payChannel, e.payInfo) : ddb.appCall("payment", e.payChannel, e.payInfo, function(r) {
                        ddb.Popup.close(),
                            r ? v("ok", e, t, n) : v("fail", e, t, n)
                    }),
                    ddb.Popup.confirm({
                        title: "支付提醒",
                        content: "是否已经完成支付",
                        cancelText: "遇到问题",
                        okText: "完成支付",
                        okCall: function() {
                            v("ok", e, t, n)
                        },
                        cancelCall: function() {
                            v("ok", e, t, n)
                        }
                    })
            }

            function i() {
                if (ddb.isWeixin) {
                    if ("release" !== ddb.dev_status)
                        return alert("测试公众号不支持微信支付"),
                            void 0;
                    if (e.pay_order_info && e.pay_order_info.wx_params) {
                        var i = e.pay_order_info.wx_params;
                        return i = {
                                appId: i.appid,
                                timeStamp: i.time_stamp.toString(),
                                nonceStr: i.nonce_str,
                                "package": "prepay_id=" + i.prepay_id,
                                signType: i.sign_type,
                                paySign: i.sign
                            },
                            WeixinJSBridge.invoke("getBrandWCPayRequest", i, function(r) {
                                "get_brand_wcpay_request:ok" === r.err_msg ? v("ok", e, t, n) : "get_brand_wcpay_request:cancel" === r.err_msg ? v("cancel", e, t, n) : v("fail", e, t, n)
                            }),
                            void 0
                    }
                    e.urlType = "app",
                        ddb.get(a, e, function(r) {
                            0 === +r.ret ? WeixinJSBridge.invoke("getBrandWCPayRequest", r.msg, function(r) {
                                "get_brand_wcpay_request:ok" === r.err_msg ? v("ok", e, t, n) : "get_brand_wcpay_request:cancel" === r.err_msg ? v("cancel", e, t, n) : v("fail", e, t, n)
                            }) : alert("获取微信支付包失败：" + r.msg)
                        })
                } else
                    ddb.isApp && (e.payChannel = "wxpay",
                        e.payInfo = e.pay_order_info.wx_prepay_id,
                        r(1))
            }

            function o() {
                a = "order/h5_alipay";
                var r = "http://" + ddb.host + "/webapp/",
                    i = {
                        order_number: s,
                        return_url: r + "pay_success.html?pay_type=aliwebpay&order_number=" + s
                    };
                return e.isCharteredBus ? (e.pay_order_info && e.pay_order_info.html_text ? $(e.pay_order_info.html_text).hide().appendTo("body") : n(s),
                    void 0) : (ddb.get(a, i, function(e) {
                        return 0 !== +e.ret ? (alert(e.msg),
                            void 0) : (t(s),
                            $(e.data.alipay_html).hide().appendTo("body"),
                            void 0)
                    }),
                    void 0)
            }
            if (!e.order_number)
                return alert("订单号无效 T_T"),
                    void 0;
            var a = "/app/weixinOerderPay/",
                s = e.order_number;
            switch (t = t || ddb.noop,
                n = n || t, +e.pay_type) {
                case 1:
                    setTimeout(i, 1500);
                    break;
                case 2:
                    r(2);
                    break;
                case 4:
                    o();
                    break;
                case 8:
                    ddb.cookie("fqlpay_order_number", s, {
                            expires: 1
                        }),
                        location = e.pay_order_info.fenqile_url
            }
        }

        function g(e) {
            return ddb.Toast.show(e)
        }

        function y(e, t) {
            var n = $("." + e);
            $.each(n, function(e, n) {
                $(n).removeClass("m-marquee");
                var r = $(n).html(),
                    i = $(n).data("html");
                t || (t = "default"),
                    i && -1 === t.indexOf("change") && (r = i),
                    $(n).html("<span>" + r + "</span>");
                var o = $(n).width() - parseFloat($(n).css("padding-left")),
                    a = $(n).find("span").width();
                if (a > o) {
                    $(n).data("html", r),
                        $(n).html("<p><label><span>" + r + "</span><span>" + r + "</span></label></p>"),
                        $(n).addClass("m-marquee");
                    var s = parseFloat($(n).find("span").css("padding-right")),
                        c = $(n).find("label");
                    if (c.width(2 * (a + s)), -1 !== t.indexOf("auto")) {
                        var u = 3 * Math.floor(a / o) + 7;
                        u > 20 && (u = 20),
                            c[0].style.cssText += "-webkit-animation: marquee " + u + "s linear 1.5s infinite;",
                            c[0].style.cssText += "animation: marquee " + u + "s linear 1.5s infinite;"
                    }
                } else
                    $(n).html(r)
            })
        }

        function b(e) {
            if (document.title = e,
                $.os.ios)
                var t = $('<iframe src="about:blank" style="display:none;"></iframe>').on("load", function() {
                    setTimeout(function() {
                        t.off("load").remove()
                    }, 0)
                }).appendTo("body")
        }
        ddb.jump = c,
            ddb.ajax = t,
            ddb.get = n,
            ddb.post = r,
            ddb.upload = i,
            ddb.getJsonp = o,
            ddb.store = d,
            ddb.pgps = l,
            ddb.session = l,
            ddb.removeStoragesByKeyContains = p,
            ddb.removeStoragesBut = f,
            ddb.cookie = s,
            ddb.payOrder = m,
            ddb.debug = h,
            ddb.msg = g,
            ddb.payCallback = v,
            ddb.getOpenId = a,
            ddb.marqueeLine = y,
            ddb.setTitle = b,
            $.os.ios && /MQQBrowser/i.test(navigator.userAgent) && (ddb.session = ddb.pgps = ddb.store),
            ddb.getWxUserInfo = function(e, t, n) {
                e = (e || location.href).replace(/\/\/\w+\.wechat/, "//wechat"),
                    t = "userinfo" === t ? "snsapi_userinfo" : "snsapi_base",
                    n = n || ddb.appid;
                var r = ["https://open.weixin.qq.com/connect/oauth2/authorize?", "appid=" + n, "&redirect_uri=" + encodeURIComponent(e), "&response_type=code", "&scope=" + t, "#wechat_redirect"].join("");
                location = r
            },
            ddb.abortXHRs = function() {
                ddb.xhrs.forEach(function(e) {
                        e.abort(),
                            console.log("Abort XHR: ", e)
                    }),
                    ddb.xhrs = []
            },
            ddb.showShareit = function() {
                if (!ddb.isWeixin)
                    return alert("请在嗒嗒巴士公众号中分享"),
                        void 0;
                var e = document.getElementById("shareit");
                e ? e.style.display = "block" : $('<div id="shareit"><p>点击右上角分享</p></div>').appendTo("body").on("click", function() {
                    this.style.display = "none"
                })
            },
            ddb.getPageLink = function(e) {
                var t = {
                    item_type: e.item_type || 1,
                    line_code: e.line_code,
                    noLoading: !0
                };
                e.startDate && (t.start_date = e.start_date),
                    ddb.get("line/get_line_config", t, function(t) {
                        function n(e) {
                            var t = e.title.replace(/<[^>]+>/g, "");
                            return t.length < 8
                        }
                        if (0 === +t.ret) {
                            var r = {};
                            r.type = {},
                                r.list = t.data.item_list.slice(0, 3).map(function(e, t, n) {
                                    var r = (e.title,
                                        18);
                                    switch (n.length) {
                                        case 1:
                                            break;
                                        case 2:
                                            r = 16;
                                            break;
                                        case 3:
                                            r = 8
                                    }
                                    return e
                                }),
                                2 === r.list.length && r.list.every(n) && (r.type.less8 = !0),
                                e.callback(r)
                        } else
                            alert(t.msg)
                    })
            },
            ddb.device = function() {
                var e = window.devicePixelRatio || 1;
                return screen.width === document.documentElement.clientWidth ? {
                    width: screen.width * e,
                    height: screen.height * e,
                    dpr: e
                } : {
                    width: screen.width,
                    height: screen.height,
                    dpr: e
                }
            }(),
            ddb.common = {
                version: ddb.version,
                user_id: "0",
                login_type: 1,
                device_type: 3,
                screen: ddb.device.width + ":" + ddb.device.height + "|" + ddb.device.dpr,
                source: ddb.isWeixin ? 3 : 5
            };
        var _ = B.url.getParam("ddb_src_id");
        _ && ddb.session("ddb_src_id", _),
            ddb.wxid && window.sessionStorage.setItem("ddb_wxid", ddb.wxid),
            e()
    }(),
    ddb.inPath = function(e) {
        return new RegExp("/(" + e + ")/", "i").test(location.pathname)
    },
    ddb.fileName = location.pathname.slice(location.pathname.lastIndexOf("/") + 1),
    ddb.wx = {},
    ddb.wx.getInfo = function(e, t) {
        ddb.isWeixin && ("function" == typeof e && (t = e,
                e = location.href.split("#")[0]),
            ddb.get(ddb.wxapi + "wechat_api/jssdk", {
                urlType: "app",
                wxUrl: e,
                noLoading: !0
            }, function(e) {
                0 === +e.ret && (ddb.JSSDK_CFG = e.JSSDK_CFG,
                    ddb.openid = e.JSSDK_CFG.open_id,
                    t && t(e.JSSDK_CFG))
            }))
    },
    ddb.wx.shareConfig = {
        title: "嗒嗒巴士送你上下班",
        desc: "上下班坐公交是玩命，坐专车是烧钱，坐嗒嗒巴士走心。",
        link: location.href,
        imgUrl: "http://" + ddb.host + "/webapp/image/side_avatar_default.png",
        timeline: {
            imgUrl: "http://" + ddb.host + "/webapp/image/side_avatar_default_memory.png"
        },
        appMessage: {},
        QQ: {},
        QZone: {}
    },
    ddb.wx.setConfig = function(e, t) {
        ddb.wx.hasConfig || (wx.config($.extend({
                debug: t || !1,
                appId: e.msg.appId,
                timestamp: e.msg.timestamp,
                nonceStr: e.msg.nonceStr,
                signature: e.msg.signature,
                jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareQZone", "chooseImage", "previewImage", "openLocation", "getLocation", "hideMenuItems", "showMenuItems", "closeWindow", "getNetworkType"]
            }, e.config || {})),
            ddb.wx.hasConfig = !0)
    },
    ddb.wx.share = function(e, t) {
        function n(n) {
            ddb.wx.shared = !0,
                ddb.wx.setConfig(n, t),
                wx.ready(function() {
                    var t = $.extend({}, ddb.wx.shareConfig, e.JSSDK_Share),
                        r = {
                            title: t.title,
                            desc: t.desc,
                            link: t.link,
                            imgUrl: t.imgUrl
                        };
                    r.success = function(t) {
                            document.getElementById("shareit") && $("#shareit").hide(),
                                window.MtaH5 && e.mtaid && MtaH5.clickStat("wxshare." + e.mtaid + "." + t.errMsg.replace(":ok", ""))
                        },
                        wx.onMenuShareTimeline($.extend([], r, t.timeline)),
                        wx.onMenuShareAppMessage($.extend([], r, t.appMessage)),
                        wx.onMenuShareQQ($.extend([], r, t.QQ)),
                        wx.onMenuShareQZone($.extend([], r, t.QZone));
                    var i = ["menuItem:share:appMessage", "menuItem:share:timeline", "menuItem:share:qq", "menuItem:share:QZone"];
                    t.channels && (i = t.channels.split(",").map(function(e) {
                            return i[e - 1]
                        })),
                        ddb.wx.showShareMenu(n, i),
                        setTimeout(function() {
                            ddb.wx.showShareMenu(n, i)
                        }, 1e3)
                }),
                wx.error(function(e) {
                    console.log(e)
                })
        }
        if (ddb.isWeixin && window.wx) {
            var r = e.isShare || B.url.getParam("share");
            1 == r && $("nav button").addClass("showNone").filter(".publicNum").removeClass("showNone"),
                e.JSSDK_CFG = e.JSSDK_CFG || ddb.JSSDK_CFG,
                ddb.wx.hideShareMenu(e.JSSDK_CFG),
                e.url ? ddb.wx.getInfo(e.url, n) : e.JSSDK_CFG ? n(e.JSSDK_CFG) : ddb.wx.getInfo(n)
        }
    },
    ddb.wx.hideShareMenu = function(e, t) {
        function n(e) {
            ddb.wx.setConfig(e),
                wx.ready(function() {
                    t = t || ["menuItem:share:appMessage", "menuItem:share:timeline", "menuItem:share:qq", "menuItem:share:QZone"],
                        wx.hideMenuItems({
                            menuList: t
                        })
                })
        }
        ddb.isWeixin && window.wx && (e = e || ddb.JSSDK_CFG,
            e ? n(e) : ddb.wx.getInfo(n))
    },
    ddb.wx.showShareMenu = function(e, t) {
        function n(e) {
            ddb.wx.setConfig(e),
                wx.ready(function() {
                    t = t || ["menuItem:share:appMessage", "menuItem:share:timeline", "menuItem:share:qq", "menuItem:share:QZone"],
                        wx.showMenuItems({
                            menuList: t
                        })
                })
        }
        ddb.isWeixin && window.wx && (e = e || ddb.JSSDK_CFG,
            e ? n(e) : ddb.wx.getInfo(n))
    },
    ddb.wx.getFollowStatus = function(e) {
        function t(t) {
            ddb.get("/wechat_api/isSubscribe", {
                urlType: "app",
                dataType: "text",
                openid: t.open_id,
                notCheckLogin: !0
            }, function() {
                var t = "0" !== parstatus;
                e(t)
            })
        }
        ddb.isWeixin && (ddb.JSSDK_CFG ? t(ddb.JSSDK_CFG) : ddb.wx.getInfo(t))
    },
    ddb.wx.gotoPublic = function() {
        return location.href = "http://mp.weixin.qq.com/s?__biz=MzAxNDMzNjc2MQ==&mid=209057391&idx=1&sn=c3686736a269a755c2b3bbb69dcddf91&scene=1&key=1936e2bc22c2ceb5f0422d19def4dd7e2ead657bd6a2be972adadb5206e9105a41e4bcaeaabb99c6bb8a0a9c37a78489&ascene=1&uin=MTAzNDg1ODg4MQ%3D%3D&devicetype=Windows+8&version=61000721&pass_ticket=Koa33YxOOGuMY5d5XE%2BTNfpOefmOQ0oQUIO%2BVO0f9PbEwF0GPMj%2BeH1mkKvSd45M", !1
    },
    ddb.jumpCommonUrl = function(e) {
        var t = "http://" + ddb.sld + "jump.buskeji.com/common/load?page=" + e;
        t = B.url.setObj(t, {
                version: ddb.version,
                device_type: 3,
                city_code: ddb.store("ddbCity") ? ddb.store("ddbCity").split("/")[1] : "0755"
            }),
            window.location = t
    },
    ddb.scrollRefresh = function(e, t) {
        "function" == typeof e && (t = e,
            e = document.body);
        var n = e.scrollHeight - document.documentElement.clientHeight,
            r = n - e.scrollTop;
        100 > r && t()
    },
    ddb.setShare = function(e, t) {
        (ddb.isWeixin || ddb.isApp) && (ddb.wx.shared = !0,
            e.notCheckLogin = !0,
            e.noLoading = !0,
            ddb.get("share/get_share_url", e, function(n) {
                if (0 === +n.ret) {
                    var r = n.data.share_channel_list.map(function(e) {
                            return e.share_channel_id
                        }),
                        i = {
                            title: n.data.share_title,
                            desc: n.data.share_detail,
                            link: ddb.fitEnv(n.data.share_url),
                            channels: r.join(",")
                        };
                    n.data.share_channel_list.forEach(function(e) {
                            var t = {};
                            switch (e.share_title && (t.title = e.share_title),
                                e.share_detail && (t.desc = e.share_detail),
                                e.share_url && (t.link = e.share_url),
                                e.share_icon && (t.imgUrl = e.share_icon), +e.share_channel_id) {
                                case 1:
                                    i.appMessage = t;
                                    break;
                                case 2:
                                    i.timeline = t;
                                    break;
                                case 3:
                                    i.QQ = t;
                                    break;
                                case 4:
                                    i.QZone = t
                            }
                        }),
                        ddb.wx.share({
                            mtaid: e.mtaid,
                            JSSDK_Share: i
                        }),
                        "function" == typeof t && t($.extend({
                            imgUrl: ddb.wx.shareConfig.imgUrl,
                            appCfg: JSON.stringify(n.data)
                        }, i))
                }
            }))
    },
    ddb.ui = {},
    ddb.tl = {},
    ddb.tl.fixPrice = function(e) {
        if ("undefined" == typeof e || !e)
            return e;
        var t = e.toString();
        if (0 == e)
            return "0";
        if (-1 == t.indexOf("."))
            return e;
        var n = t.split("."),
            r = n[1];
        0 == n[0] && (n[0] = 0),
            r.length >= 2 && (r = r.substr(0, 2));
        for (var i = 0, o = r.length; o > i; i++)
            r.length > 0 && 0 == r.charAt(r.length - 1) && (r = r.slice(0, -1));
        return r.length > 0 ? n[0] + "." + r : n[0]
    },
    ddb.tl.loadContent = function(e, t, n) {
        return $.ajax({
            url: e,
            dataType: "html",
            timeout: t.timeout || 15e3,
            cache: !0,
            data: t,
            success: function(e) {
                n && n(e)
            },
            error: function() {
                alert("网络异常!")
            }
        })
    },
    ddb.tl.loadCss = function(e) {
        $("<link>").attr({
            rel: "stylesheet",
            type: "text/css",
            href: e
        }).appendTo("head")
    },
    ddb.tl.clone = function(e) {
        return JSON.parse(JSON.stringify(e))
    },
    ddb.Popup = function() {
        var e, t, n, r, i = {
                center: {
                    top: "50%",
                    left: ".5rem",
                    right: ".5rem",
                    "border-radius": ".2rem"
                }
            },
            o = {
                msg: '<div class="popup-content popup-msg {_class}">{content}</div>',
                alert: '<div class="popup-title {_class}">{title}</div><div class="popup-content {_class}">{content}</div><div id="ddb_popup_btn_container"><a data-target="closePopup" data-icon="checkmark">{ok}</a></div>',
                tips: '<div class="popup-tips-title">{title}</div><div class="popup-tips-content">{content}</div>',
                confirm: '<div class="popup-title {_class}">{title}</div><div class="popup-content {_class}">{content}</div><div id="ddb_popup_btn_container"><a class="cancel" data-icon="close">{cancel}</a><a data-icon="checkmark">{ok}</a></div>',
                intro: '<div class="popup-title {_class}">{title}</div><div class="popup-content {_class}">{content}</div><div id="ddb_popup_btn_container"><a class="ddb_popup_intro_ok" data-icon="checkmark">{ok}</a></div>',
                loading: '<i class="icon spinner"></i>',
                center: '<div class="popup_tips {_class}">{_img}<div class="popup_tips_title">{title}</div><div class="popup_tips_text1">{text1}</div><div class="popup_tips_text2">{text2}</div></div>'
            },
            a = function() {
                $("body").append('<div id="ddb_popup"></div><div id="ddb_popup_mask"></div>'),
                    n = $("#ddb_popup_mask"),
                    t = $("#ddb_popup"),
                    d()
            },
            s = {};
        s.show = function() {
                var e = o.loading;
                c({
                    html: e,
                    pos: "loading",
                    opacity: .1,
                    animation: !0,
                    clickMask2Close: !1
                })
            },
            s.hide = function() {
                u()
            };
        var c = function(e, o) {
                var a = {
                    height: void 0,
                    width: void 0,
                    opacity: .6,
                    html: "",
                    pos: "center",
                    clickMask2Close: !0,
                    showCloseBtn: !0,
                    onShow: void 0
                };
                $.extend(a, e),
                    r = a.clickMask2Close,
                    n.css("opacity", a.opacity),
                    t.attr({
                        style: "",
                        "class": ""
                    }),
                    a.width && t.width(a.width),
                    a.height && t.height(a.height);
                var s = $.type(a.pos);
                if ("object" == s)
                    t.css(a.pos);
                else {
                    if ("string" != s)
                        return console.error("错误的参数！"),
                            void 0;
                    if (i[a.pos]) {
                        t.css(i[a.pos]); {
                            a.pos.indexOf("top") > -1 ? "top" : a.pos.indexOf("bottom") > -1 ? "bottom" : "defaultAnim"
                        }
                    } else
                        t.addClass(a.pos)
                }
                n.show();
                var c;
                if (a.html ? c = a.html : a.url ? c = J.Page.loadContent(a.url) : a.tplId && (c = template(a.tplId, a.tplData)),
                    a.showCloseBtn && (c += '<div id="tag_close_popup" data-target="closePopup" class="icon cancel-circle"></div>'),
                    t.html(c).show(),
                    a.onShow && a.onShow.call(t),
                    "center" == a.pos) {
                    var u = t.height();
                    t.css("margin-top", "-" + u / 2 + "px")
                }
                o && o()
            },
            u = function() {
                n.hide(),
                    t.hide().empty()
            },
            d = function() {
                n.on("click", function() {
                        r && u()
                    }),
                    t.on("click", '[data-target="closePopup"]', function() {
                        u()
                    })
            },
            l = function(e, t, n) {
                var r = o.alert.replace("{title}", e).replace("{content}", t).replace("{ok}", n || "确定");
                c({
                    html: r,
                    pos: "center",
                    opacity: .6,
                    showCloseBtn: !1
                })
            },
            p = function(e, t) {
                var n = o.tips.replace("{title}", e).replace("{content}", t);
                c({
                    html: n,
                    pos: "center",
                    opacity: .6,
                    showCloseBtn: !1
                })
            },
            f = function(e, t, n, r, i, a, s, d) {
                if ($.isPlainObject(e)) {
                    var l = $.extend({
                        className: "",
                        title: "",
                        content: "",
                        okText: "",
                        cancelText: "",
                        clickMask2Close: !0,
                        okCall: function() {},
                        cancelCall: function() {}
                    }, e);
                    d = l.clickMask2Close,
                        e = l.className,
                        t = l.title,
                        n = l.content,
                        r = l.cancelText,
                        i = l.okText,
                        a = l.okCall,
                        s = l.cancelCall
                } else
                    r = r || "取消",
                    i = i || "确定";
                c({
                        html: o.confirm.replace("{title}", t).replace("{content}", n).replace("{cancel}", r).replace("{ok}", i).replace(/{_class}/g, e),
                        pos: "center",
                        opacity: .6,
                        showCloseBtn: !1,
                        clickMask2Close: d
                    }),
                    $('#ddb_popup_btn_container [data-icon="checkmark"]').on("click", function() {
                        a.call(this),
                            u()
                    }),
                    $('#ddb_popup_btn_container [data-icon="close"]').on("click", function() {
                        s.call(this),
                            u()
                    })
            },
            h = function(e, t, n, r, i, a) {
                if ($.isPlainObject(e)) {
                    var s = $.extend({
                        className: "",
                        title: "",
                        content: "",
                        okText: "",
                        clickMask2Close: !0,
                        okCall: function() {}
                    }, e);
                    a = s.clickMask2Close,
                        e = s.className,
                        t = s.title,
                        n = s.content,
                        r = s.okText,
                        i = s.okCall
                } else
                    r = r || "确定";
                c({
                        html: o.intro.replace("{title}", t).replace("{content}", n).replace("{ok}", r).replace(/{_class}/g, e),
                        pos: "center",
                        opacity: .6,
                        showCloseBtn: !1,
                        clickMask2Close: a
                    }),
                    $('#ddb_popup_btn_container [data-icon="checkmark"]').on("click", function() {
                        i.call(this),
                            u()
                    })
            },
            v = function(t) {
                e && clearTimeout(e);
                var n = o.msg.replace("{content}", t);
                c({
                    html: n,
                    pos: "center",
                    opacity: .6,
                    showCloseBtn: !1
                })
            },
            m = function(t, n, r) {
                "string" != typeof t && (r = n,
                        n = t,
                        t = '<img src="/webapp/image/icon_success.png">'),
                    t = t || "",
                    n = $.extend({
                        className: "",
                        title: "",
                        text1: "",
                        text2: "",
                        delay: 3e3
                    }, n || {}),
                    r = r || o.center.replace("{_img}", t).replace("{title}", n.title).replace("{text1}", n.text1).replace("{text2}", n.text2).replace("{_class}", n.className),
                    c({
                        html: r,
                        pos: "center",
                        opacity: 0,
                        showCloseBtn: !1
                    }, function() {
                        $("#ddb_popup").css("background", "rgba(0, 0, 0, 0)").addClass(n.className)
                    }),
                    e && clearTimeout(e),
                    e = setTimeout(function() {
                        u(),
                            n.callback && n.callback()
                    }, n.delay)
            };
        return a(), {
            loading: s,
            show: c,
            close: u,
            alert: l,
            tips: p,
            msg: v,
            confirm: f,
            intro: h,
            center: m
        }
    }(),
    ddb.Toast = function(e) {
        var t, n, r = "toast",
            i = {
                toast: '<a href="#">{value}</a>',
                success: '<a href="#"><i class="icon checkmark-circle"></i>{value}</a>',
                error: '<a href="#"><i class="icon cancel-circle"></i>{value}</a></div>',
                info: '<a href="#"><i class="icon info-2"></i>{value}</a>'
            },
            o = function() {
                e("body").append('<div id="ddb_toast"></div>'),
                    t = e("#ddb_toast"),
                    c()
            },
            a = function() {
                t.hide(),
                    t.empty()
            },
            s = function(e, o, s) {
                n && clearTimeout(n),
                    o = o || "toast",
                    s = s || 3e3;
                var c = o.split(/\s/);
                r = c[0],
                    t.attr("class", o).html(i[r].replace("{value}", e)).show(),
                    0 !== s && (n = setTimeout(a, s))
            },
            c = function() {
                t.on("click", '[data-target="close"]', function() {
                    a()
                })
            };
        return o(), {
            show: s,
            hide: a
        }
    }($),
    ddb.loading = function() {
        var e = document.getElementById("ddb-loading") || $('<div id="ddb-loading"><i></i></div>').appendTo("body")[0];
        return {
            show: function(t) {
                e.style.display = "block",
                    "<i></i>" !== $("#ddb-loading").html && $("#ddb-loading").html("<i></i>"),
                    t && $("#ddb-loading").html("<span><p><i></i>" + t + "</p></span>")
            },
            hide: function() {
                e.style.display = "none"
            }
        }
    }(),
    ddb.getChatTokenCallback = function(e) {
        var t = ddb.cookie("wx_user_id"),
            n = "chat_token_" + t,
            r = ddb.session(n);
        t && (r ? e(r) : ddb.get("chat/get_rongcloud_token", function(t) {
            return 0 !== +t.ret ? (alert(t.msg),
                void 0) : t.data.token ? (console.log("get token: ", r),
                ddb.session(n, t.data.token),
                e(t.data.token),
                void 0) : (alert("token 值为空"),
                void 0)
        }))
    },
    window.oAlert = window._alert = window.alert,
    window.alert = ddb.Toast.show,
    "release" !== ddb.dev_status || B.url.getParam("debug") || (window.onerror = console.log = console.error = console.debug = console.warn = console.info = ddb.noop),
    ddb.getCityByCode = function(e, t) {
        var n = "";
        return (t = t || ddb.CITYS) ? (t.some(function(t) {
                return t.code == e ? (n = t.city, !0) : void 0
            }),
            n) : n
    },
    ddb.initApp = function e() {
        if (ddb.app = window.DDBApp || window.android,
            ddb.isApp && (document.documentElement.classList.add("ddbapp"),
                ddb.isIosApp && document.documentElement.classList.add("iosapp"),
                ddb.common = ddb.session("appCommon"), !ddb.common || !B.user.isLogin())) {
            var t = ddb.app ? ddb.app.getCommonParams() : ddb.cookie("ddb_app_general") || location.search.substring(1);
            ddb.isAndroidApp && (t = t || ddb.store("ddb_app_general")),
                "release" !== ddb.dev_status && (t = ddb.cookie("ddb_app_general") || ddb.store("ddb_app_general")),
                ddb.common = B.url.serializeArray(decodeURIComponent(t)),
                ddb.cookie("wx_mobile", ddb.common.mobile || "", {
                    path: "/"
                }),
                ddb.cookie("wx_user_id", ddb.common.user_id || "", {
                    path: "/"
                }),
                ddb.cookie("wx_device_id", ddb.common.device_id || "", {
                    path: "/"
                }),
                ddb.cookie("wx_ddb_token", ddb.common.ddb_token || "", {
                    path: "/"
                }),
                ddb.session("ddb_src_id", ddb.common.ddb_src_id || ""),
                ddb.common.city_code = ddb.common.city_code || "0755",
                ddb.store("ddbCity", ddb.getCityByCode(ddb.common.city_code) + "/" + ddb.common.city_code),
                ddb.common.mobile && ddb.common.user_id ? ddb.session("appCommon", ddb.common) : ddb.session("appCommon", null)
        }
        return e
    }(),
    ddb.appready = function() {
        function e(e) {
            for (r = 1; e = i.shift();)
                e()
        }
        var t, n = window.document,
            r = !!window.DDBApp,
            i = [],
            o = setInterval(function() {
                window.DDBApp && (clearInterval(o),
                    e())
            }, 50);
        return n.addEventListener("DDBAppReady", t = function() {
                n.removeEventListener("DDBAppReady", t),
                    e()
            }),
            function(e) {
                ddb.isApp && (r ? e() : i.push(e))
            }
    }(),
    ddb.appCall = function() {
        if (ddb.isApp) {
            var e = arguments[0],
                t = [].slice.call(arguments, 1);
            ddb.appready(function() {
                ddb.app = window.DDBApp || window.android;
                try {
                    t.length ? ddb.app[e].apply(ddb.app, t) : ddb.app[e]()
                } catch (n) {
                    alert(n)
                }
            })
        }
    },
    ddb.isApp && ddb.appready(function() {
        ddb.app = window.DDBApp || window.android,
            ddb.session("appCommon") || ddb.initApp();
        try {
            ddb.app && ddb.app.getEnv && (ddb.dev_status = ddb.app.getEnv().replace(/\s+/g, " ") || ddb.dev_status,
                ddb.sld = "release" === ddb.dev_status ? "" : ddb.dev_status + ".",
                ddb.api = "http://" + ddb.sld + "api.buskeji.com/")
        } catch (e) {}
    }),
    ddb.wx.hideShareMenu(),
    $(window).on("load", function() {
        ddb.inPath("public|volunteer|chat") || ddb.wx.shared || ddb.wx.share({
            JSSDK_Share: {
                title: "一人一座舒适直达，嗒嗒巴士送你上下班",
                desc: "上下班坐公交是玩命，坐专车是烧钱，坐嗒嗒巴士走心。",
                link: "http://a.app.qq.com/o/simple.jsp?pkgname=com.newdadabus"
            }
        })
    }),
    function() {
        if (ddb.isWesternBus = "western_bus" === ddb.session("ddb_src_id"),
            ddb.isWesternBus) {
            var e = B.url.getParam("western_bus_lines");
            if (e) {
                var t = e.split(","),
                    n = t.map(function(e) {
                        return e.split("-")[0]
                    });
                ddb.session("western_bus_line_ids", n)
            }
        }
        ddb.isWesternBusLine = function(e) {
            if (!ddb.isWesternBus)
                return !1;
            var t = ddb.session("western_bus_line_ids");
            return t ? (e = String(e).split("-")[0], -1 !== t.indexOf(e)) : !1
        }
    }(),
    "release" === ddb.dev_status && (! function() {
            var e = document.createElement("script");
            e.src = "http://pingjs.qq.com/h5/stats.js",
                e.setAttribute("name", "MTAH5"),
                e.setAttribute("sid", "500005024"),
                e.setAttribute("cid", "500005030"),
                document.head.appendChild(e)
        }(),
        $(document).on("click", "[data-mtaid]", function() {
            if (!window.MtaH5)
                return $(document).off("click", "[data-mtaid]"),
                    void 0;
            var e = $.trim($(this).data("mtaid").toLowerCase());
            e.indexOf(" ") ? e.split(" ").forEach(function(e) {
                MtaH5.clickStat(e)
            }) : e && MtaH5.clickStat(e)
        })),
    "2128" === ddb.session("ddb_src_id") && (document.documentElement.classList.add("sogou-app"),
        function() {
            var e = document.createElement("script");
            e.src = "http://fuwu.wap.sogou.com/static/partner.js",
                e.setAttribute("sogouid", "085"),
                document.head.appendChild(e)
        }()),
    document.addEventListener("DOMContentLoaded", function() {
        var e = (document.documentElement,
            document.getElementById("loadcover"));
        e && (ddb.hideLoadcover = function() {
                setTimeout(function() {
                        e.className = "hide-loadcover"
                    }, 300),
                    setTimeout(function() {
                        e.parentNode.removeChild(e)
                    }, 600)
            },
            "none" !== e.getAttribute("data-hide") && ddb.hideLoadcover());
        var t = $("button.newBack, .g-navbar .back");
        t.on("click", function() {
                window.history.go(-1)
            }),
            $("html.doc").find("article dd:has(i)").addClass("has-index"),
            ("tplMsg" === B.url.getParam("from") || ddb.isApp) && t.not(".forced-show").hide()
    });
var hotWords = ["香水百合", "古堡小镇", "一百分", "偏靠才华",
    "小龙女", "力争上游", "老人与海", "精诚所至", "一身是胆", "加油",
    "真心", "瑞雪", "灿若桃花", "鹏程万里", "云卷云舒", "猫屎咖啡", "一鸣惊人",
    "上交国家", "麦霸", "博闻强识", "巴塞罗那", "长腿欧巴", "美男子", "火影忍者",
    "欣欣向荣", "千里之行", "凯旋", "浮花浪蕊", "执子之手", "欢聚一堂", "阿拉斯加",
    "鸡尾酒", "四平八稳", "四月物语", "大吉大利", "丽江古城", "巴士长", "礼帽", "心心相印",
    "金榜题名", "财经巴士", "陈绮贞", "冰与火", "好心情", "八面春风", "挪威森林", "美酒",
    "诗和远方", "高级定制", "黄岩岛", "绿色出行", "布达拉宫", "永暑岛", "大唐盛世", "马尔代夫",
    "平平安安", "国色天香", "健康", "老炮儿", "傻白甜", "棉布长裙", "有志竟成", "天天向上", "极限挑战",
    "三思而行", "三阳开泰", "摩卡咖啡", "杨颖", "漂亮", "快乐", "宁静", "嗒我上班", "迎刃而解", "李沁",
    "维纳斯", "我爱嗒嗒", "快快乐乐", "乘车愉快", "我十八岁", "心旷神怡", "妩媚动人", "嗒嗒包车",
    "嗒嗒男神", "骑士精神", "甄嬛传", "山海经", "和气生财", "一如既往", "破釜沉舟", "洞房花烛", "你好帅",
    "刘亦菲", "老司机", "闭月羞花", "沉鱼落雁", "万事如意", "拉布拉多", "华丽冒险", "柔情似水", "机智如我",
    "多读书", "花好月圆", "美神", "落落大方", "纸牌屋", "英俊", "喜剧人", "带你飞", "嗒嗒黄", "鹿晗", "进步",
    "你好呀", "澳门风云", "五光十色", "可爱", "疯狂动物", "石榴夫妇", "跑男", "我满拼的", "画面太美",
    "相互理解", "貌美如花", "月光宝盒", "孙悟空", "我的天使", "厚德载物", "奉天承运", "靠脸吃饭",
    "矢志不移", "风雨无阻", "倪妮", "赤心相待", "双喜临门", "张爱玲", "小鲜肉", "老唱片",
    "高跟鞋", "非诚勿扰", "芈月传", "助人为乐", "精致妆容", "奋发有为", "迪丽热巴",
    "美梦成真", "极致浪漫", "恭喜发财", "阿玛吉祥", "卡地亚", "修心养性",
    "星星之火", "琅琊榜", "天气真好", "我们", "聊天室见", "大幂幂", "美式咖啡",
    "五福临门", "一马平川", "起来嗨", "寻龙诀", "长乐未央", "皆大欢喜",
    "黄晓明", "乐善好施", "烛光晚餐", "开卷有益", "女医明妃", "梅花",
    "长城", "勤奋", "口红", "民族风", "熟能生巧", "丝绸之路", "午后阳光",
    "马到功成", "水滴石穿", "黄河", "心想事成", "大堡礁", "围城", "长江",
    "睡着上班", "善良", "百尺竿头", "刘诗诗", "干的不错", "文明", "创意巴士",
    "巴士生活", "恍若初见", "仁慈", "品学兼优", "天天开心", "身体健康", "和善",
    "两全其美", "神奇巴士", "回笼觉", "锲而不舍", "与我常在 ", "融会贯通", "四季安康",
    "团结", "三生有幸", "一往情深", "七星高照", "城会玩", "美人鱼", "我是歌手", "年年有余",
    "二人同心", "金玉良缘", "众志成城", "宜表白", "学富五车", "祝你好运", "世界真大",
    "太子妃", "一见如故", "巴士文化", "风雨同舟", "同呼吸", "人定胜天", "才貌双全",
    "企业支付", "嗒嗒女神", "静待花开", "一帆风顺", "郑爽", "再别康桥", "爱马仕",
    "哈根达斯", "不加班", "施华洛", "博学多才", "一米阳光", "博古通今", "宜吃美食",
    "持之以恒", "四季发财", "毅力", "多睡一会", "COACH", "在下良辰", "坐车凭证",
    "约吗", "周边游", "前程似锦", "巴厘岛", "恋人", "与你同在", "春风得意",
    "步步高升", "闪电侠", "萌萌哒", "志在四方", "初恋", "帆布鞋", "秦时明月",
    "肝胆相照", "吃好喝好", "美梦", "梦想", "理想", "高山流水", "杠杠的", "宝宝",
    "后会有期", "草原", "嗒你回家", "拿铁咖啡", "楚辞", "蓝莲花", "窈窕淑女", "有轨电车",
    "最帅巴爷", "与子偕老", "风衣", "进取", "牛顿", "我美吗", "不见不散", "全车最美",
    "美食巴士", "巴士节", "古力娜扎", "霍金", "好好吃饭", "日进斗金", "火锅巴士",
    "幸运巴士", "一日千里", "一人一座", "创业巴士", "单反", "辛苦了", "拼巴士", "荒野猎人",
    "英式午茶", "健身巴士", "中央空调", "四小天鹅", "爱因斯坦", "福利", "儒雅", "最萌嗒友",
    "珊瑚海", "红红火火", "生如夏花", "玛琪雅朵", "勇往直前", "叶问", "意气风发", "一生一世",
    "知心爱人", "万象更新", "发展", "特斯拉", "牛津包", "香水", "孔子", "灼灼其华", "悠然",
    "嗒嗒之夜", "优雅知性", "黑巧克力", "一见钟情", "率性而为", "财源广进", "女神节", "神韵",
    "最强大脑", "相亲巴士", "双宿双栖", "我好想你", "美丽", "巴爷你好", "爱情", "速度激情",
    "霍建华", "烟雨倾城", "六六大顺", "知音", "知性", "小资情调", "蒸蒸日上", "百炼成钢",
    "百折不挠", "胡歌", "花千骨", "何以笙箫", "无懈可击", "私人派对", "炸鸡啤酒", "好声音",
    "自强不息", "尊老爱幼", "百年好合", "颜值爆表 ", "最美巴神", "美容巴士", "福如东海",
    "岁月静好", "亲师友", "十全十美", "好好开车", "周杰伦", "白雪公主", "卡布奇诺", "喜大普奔",
    "黄道吉日", "百战百胜", "吉祥", "金牌司机", "爱琴海", "哈士奇", "天天向上", "如意", "一路顺风",
    "卡农", "北极之光", "蓝天", "香奈儿", "百发百中", "锦绣前程", "白云", "山花烂漫", "手气最佳",
    "我很快乐", "缘分", "亚洲天团", "天长地久", "宝宝好美", "八拜之交", "嗒嗒巴士", "赤影传说",
    "冯诺依曼", "谢谢师傅", "蛋糕巴士", "定制巴士", "芭蕾舞", "好喜欢你", "今日有喜", "赚钱养家", "天鹅"
];
! function() {
    "use strict";

    function e(e, t) {
        var n = t ? e.targetTouches[0].pageX : e.clientX,
            i = t ? e.targetTouches[0].pageY : e.clientY;
        return n -= r.getBoundingClientRect().left,
            i -= r.getBoundingClientRect().top,
            document.documentElement && (n -= document.documentElement.clientTop,
                i -= document.documentElement.clientLeft),
            n -= $(document.body).scrollLeft(),
            i -= $(document.body).scrollTop(), {
                x: n,
                y: i
            }
    }

    function t() {
        function t(t) {
            function i() {
                r.removeEventListener(h, c)
            }

            function c(t) {
                clearTimeout(s),
                    t.preventDefault(),
                    u = e(t, p),
                    d = u.x,
                    l = u.y,
                    n(o, a, d, l),
                    o = d,
                    a = l
            }
            clearTimeout(s),
                t.preventDefault(),
                u = e(t, p),
                o = u.x,
                a = u.y,
                n(o, a),
                r.removeEventListener(h, c),
                r.addEventListener(h, c),
                r.removeEventListener(v, i),
                r.addEventListener(v, i)
        }
        var u, d, l, p = "ontouchstart" in window ? !0 : !1,
            f = p ? "touchstart" : "mousedown",
            h = p ? "touchmove" : "mousemove",
            v = p ? "touchend" : "mouseup";
        i.lineCap = "round",
            i.lineJoin = "round",
            i.lineWidth = 2 * c,
            i.globalCompositeOperation = "destination-over",
            r.removeEventListener(f, t),
            r.addEventListener(f, t)
    }

    function n(e, t, n, r) {
        i.save(),
            i.beginPath(),
            i.fillStyle = "#b2b2b2",
            i.strokeStyle = "#b2b2b2",
            2 == arguments.length ? (i.arc(e, t, c, 0, 2 * Math.PI),
                i.fill()) : (i.moveTo(e, t),
                i.lineTo(n, r),
                i.stroke()),
            i.restore()
    }
    var r, i, o, a, s, c = 10,
        u = 100,
        d = 5,
        l = [],
        p = !1,
        f = 0;
    ddb.mask = function(e) {
        r = null,
            i = null,
            o = 0,
            a = 0,
            c = 10,
            s = null,
            u = 100,
            d = 5,
            l = [],
            p = !1,
            f = 0,
            r = document.getElementById(e);
        var n = $("body").width() > 640 ? 640 : $("body").width();
        $(r).attr("width", Math.round(.44375 * n) + "px"),
            $(r).attr("height", Math.round(.0625 * n) + "px"),
            i = r.getContext("2d"),
            t()
    }
}(),
ddb.sld = "loc" === location.hostname.split(".")[0] ? "loc." : ddb.sld;
var md5 = faultylabs.MD5,
    ticketNames = hotWords,
    statHost = "http://" + ddb.sld + "gg.buskeji.com/",
    webappHost = "http://" + ddb.sld + "wechat.buskeji.com/",
    tokenTimer = null,
    tokenStopUpBeforeMin = 6e5,
    checkTimeOut = 86400,
    serverTimeDif = 0,
    checkDelay = 1100,
    app = new Vue({
        el: "#app",
        components: {
            modal: {
                template: "#modal"
            }
        },
        data: {
            pkgVersion: "2.8.7",
            isReady: !1,
            domInited: !1,
            showGuide: !1,
            showTranshipGuide: !1,
            showWarn: !1,
            nomoreWarn: 0,
            isDriver: !1,
            isZgt: !1,
            isBus: !1,
            isZtc: !1,
            isTranship: !1,
            canEvaluate: !1,
            showEvaluate: !1,
            evaluate: {},
            empty: !1,
            ticket: {},
            showCheck: !1,
            showRefund: !1,
            disRefund: !0,
            mobile: "",
            mark: "",
            token: "",
            gifts: ["img/grape.png", "img/banana.png", "img/apple.png", "img/mangosteen.png", "img/orange.png", "img/watermelon.png"],
            ad: {
                left_button: {},
                bottom_animate: {}
            }
        },
        created: function() {
            this.initTime(),
                this.getH5Ticket()
        },
        filters: {
            formatDate: function(e) {
                return e ? (e = new Date(e),
                    e.getMonth() + 1 + "月" + e.getDate() + "日") : ""
            },
            formatTime: function(e) {
                return e && e.slice(0, -3)
            },
            sec2mim: function(e) {
                return e && Math.floor(Number(e).div(60))
            }
        },
        methods: {
            checkTicket: function() {
                if (app.showCheck = !1,
                    app.disRefund = !0,
                    app.ad = app.ticket.ticket_ad || app.ad, !isDebug) {
                    ddb.cookie("eticket:is-checked" + app.ticket.ticket_code, 1, {
                            expires: 1
                        }),
                        ddb.getJsonp("member/check_ticket", {
                            ticket_code: app.ticket.ticket_code,
                            noLoading: !0
                        }).fail(function() {
                            ddb.cookie("eticket:check-fail" + app.ticket.ticket_code, 1, {
                                expires: 1
                            })
                        }),
                        ddb.isApp && ddb.appCall("checkTicket", app.ticket.ticket_code, checkTimeOut);
                    try {
                        window.MtaH5 && MtaH5.clickStat("eticket.check.success.device_type" + ddb.common.device_type)
                    } catch (e) {
                        console.log("上报验票统计失败：", +e)
                    }
                }
            },
            closeWarn: function(e) {
                app.showWarn = !1,
                    app.nomoreWarn ? ddb.store("eticket:warn-have-close", 1) : ddb.session("eticket:warn-have-close", 1),
                    "continue" === e && ($("#js-lock").parents(".check-mask").addClass("checking"),
                        setTimeout(function() {
                            app.checkTicket()
                        }, checkDelay))
            },
            closeGuide: function() {
                app.showGuide = !1,
                    ddb.store("eticket:guide-have-close", 1)
            },
            closeTranshipGuide: function() {
                app.showTranshipGuide = !1,
                    ddb.store("eticket:tranship-guide-have-close", 1)
            },
            quickRefund: function() {
                if (!this.disRefund) {
                    var e = this.ticket;
                    location.href = B.url.setObj(webappHost + "webapp/emergency.html", {
                        ticket_code: e.ticket_code,
                        order_number: e.order_number,
                        start_date: e.start_date,
                        start_time: e.start_time
                    })
                }
            },
            refund: function() {
                location.href = webappHost + "webapp/order_details.html?order_number=" + this.ticket.order_number
            },
            goEvaluate: function() {
                var e = this.ticket,
                    t = 2 == this.evaluate.is_evaluated ? "#!/page-show" : "";
                location.href = B.url.setObj(webappHost + "webapp/evaluate.html" + t, {
                    ticket_code: e.ticket_code,
                    main_line_type: e.main_line_type
                })
            },
            jumpto: function(e) {
                location.href = "http://" + ddb.sld + "jump.buskeji.com/common/load?page=" + e
            },
            jumpStat: function(e) {
                e && e.target_url && (location.href = B.url.setObj(statHost + "ad_statistic/click", $.extend({}, ddb.common, e)))
            },
            showStat: function(e) {
                var t = this;
                e.ad_id && (console.log("Show Stat AD: " + e.ad_id),
                    ddb.getJsonp(statHost + "ad_statistic/show", {
                        ad_id: e.ad_id,
                        target_url: e.target_url,
                        image_url: e.image_url,
                        ticket_pack_ver: t.pkgVersion,
                        noLoading: !0
                    }))
            },
            mkToken: function(e, t) {
                var n = e.ticket_key,
                    r = e.start_date,
                    i = e.line_start_time;
                "string" == typeof n && n || alert("数据格式错误：[ticketKey]"),
                    "string" == typeof r && r || alert("数据格式错误：[startDate]"),
                    "string" == typeof i && i || alert("数据格式错误：[lineStartTime]"),
                    "[object Array]" === Object.prototype.toString.call(t) && t.length || alert("数据格式错误：[tokenNames]");
                var o, a, s, c = (new Date).getTime() + serverTimeDif,
                    u = new Date(r.replace(/-/g, "/") + " " + i).getTime(),
                    d = Math.round(c / 1e3 / 60),
                    l = function(e) {
                        for (var t = 0, n = 0, r = e.length; r > n; ++n)
                            char = e.charCodeAt(n),
                            t = char + (t << 6) + (t << 16) - t;
                        return t
                    };
                return tokenStopUpBeforeMin > u - c ? (window.clearInterval(tokenTimer),
                        s = r + i) : s = d,
                    s = n + s,
                    o = Math.abs(l(md5(s))) % t.length,
                    a = t[o]
            },
            marquee: function(e) {
                $(e || ".marquee").each(function() {
                    var e = $(this),
                        t = this.offsetWidth,
                        n = this.scrollWidth;
                    console.log("marquee containerWidth: " + t),
                        console.log("marquee textWidth: " + n),
                        app.domInited = n > 0,
                        n > t && e.marquee({
                            duration: 3e3,
                            delayBeforeStart: 500,
                            startVisible: !0
                        })
                })
            },
            getH5Ticket: function() {
                if ("webapp" === B.url.getParam("source")) {
                    var e = this,
                        t = B.url.getParam("line_code"),
                        n = (B.url.getParam("start_date"), {
                            eticket: {},
                            common: ddb.common
                        });
                    t || alert("缺少参数：线路编号"),
                        B.user.isLogin() || B.user.login(),
                        ddb.get("member/get_current_tickets", {
                            page_size: 10,
                            page_index: 1
                        }, function(r) {
                            if (0 !== +r.ret)
                                return alert(r.msg),
                                    void 0;
                            r.data.ticket_list.some(function(e) {
                                    return e.line_code == t ? (n.eticket = e, !0) : void 0
                                }),
                                e.initTicket(JSON.stringify(n));
                            var i = n.eticket.ticket_code,
                                o = "eticket:check-fail" + i;
                            i && ddb.cookie(o) && ddb.getJsonp("member/check_ticket", {
                                ticket_code: i,
                                noLoading: !0
                            }, function() {
                                ddb.cookie(o, "")
                            })
                        }, function(e, t) {
                            alert("获取电子票出错：" + t)
                        })
                }
            },
            getTicketConfig: function(e) {
                function t(t) {
                    var r = new Date(t.emergency_refund_end_time.replace(/-/g, "/")).getTime(),
                        a = (new Date).getTime() + serverTimeDif > r;
                    if (n = n || 1 == t.is_check,
                        app.showCheck = !n && 1 == t.is_open_check,
                        app.showGuide = app.showCheck && !i && !app.isTranship,
                        app.showTranshipGuide = app.showCheck && !o && app.isTranship,
                        app.showRefund = 1 == t.is_open_emergency_refund,
                        app.disRefund = n || 4 == t.refund_type || a,
                        app.showRefund && !app.disRefund)
                        var s = setInterval(function() {
                            a = (new Date).getTime() + serverTimeDif > r,
                                console.log("在应急退时间段内？：", a),
                                a && (clearInterval(s),
                                    app.disRefund = !0)
                        }, 1e3);
                    app.showCheck || (app.ad = e.ticket_ad || app.ad)
                }
                var n = ddb.cookie("eticket:is-checked" + e.ticket_code),
                    r = ddb.cookie("eticket:ticket-config" + e.ticket_code),
                    i = ddb.store("eticket:guide-have-close"),
                    o = ddb.store("eticket:tranship-guide-have-close");
                if (app.showCheck = !n,
                    app.isReady = !0,
                    r)
                    try {
                        console.log("配置缓存：" + r),
                            r = JSON.parse(r),
                            t(r)
                    } catch (a) {
                        console.log("配置缓存解析出错：[" + a + "]")
                    }
                    (n || r) && app.getEvaluate(e),
                    ddb.getJsonp("member/get_ticket_config", {
                        ticket_code: e.ticket_code,
                        notCheckLogin: isDebug,
                        noLoading: !0
                    }).done(function(r) {
                        return 0 !== +r.ret ? (app.showCheck = !n,
                            app.showGuide = app.showCheck && !i && !app.isTranship,
                            app.showTranshipGuide = app.showCheck && !o && app.isTranship,
                            alert("获取配置信息出错：" + r.msg),
                            void 0) : (t(r.data),
                            ddb.cookie("eticket:ticket-config" + e.ticket_code, JSON.stringify(r.data)),
                            void 0)
                    }).fail(function() {
                        app.showCheck = !n,
                            app.showGuide = app.showCheck && !i && !app.isTranship,
                            app.showTranshipGuide = app.showCheck && !o && app.isTranship,
                            app.showCheck || (app.ad = e.ticket_ad || app.ad)
                    }).always(function() {
                        app.getEvaluate(e)
                    })
            },
            getEvaluate: function(e) {
                if (app.canEvaluate) {
                    try {
                        var t = ddb.cookie("member_evaluate/evaluate_detail" + e.ticket_code);
                        if (t)
                            return app.evaluate = JSON.parse(t),
                                app.showEvaluate = 1 == app.evaluate.is_open_evaluate,
                                void 0
                    } catch (n) {
                        console.log("评价状态缓存解析出错：[" + n + "]")
                    }
                    ddb.getJsonp("member_evaluate/evaluate_detail", {
                        ticket_code: e.ticket_code,
                        notCheckLogin: isDebug,
                        noLoading: !0
                    }).done(function(t) {
                        return 0 !== +t.ret ? (alert("获取评价状态出错：" + t.msg),
                            void 0) : (app.evaluate = t.data,
                            app.showEvaluate = 1 == t.data.is_open_evaluate,
                            2 == t.data.is_evaluated && ddb.cookie("member_evaluate/evaluate_detail" + e.ticket_code, JSON.stringify(t.data), {
                                expires: 1
                            }),
                            void 0)
                    })
                }
            },
            initTime: function(e) {
                return serverTimeDif ? (e && e(),
                    void 0) : (ddb.getJsonp("app/get_server_time", {
                        noLoading: !0
                    }, function(t) {
                        var n = t.server_time ? new Date(t.server_time.replace(/-/g, "/")) : new Date;
                        serverTimeDif = n.getTime() - (new Date).getTime(),
                            e && e()
                    }),
                    void 0)
            },
            initDom: function() {
                var e, t = this,
                    n = $("#js-lock");
                n.on("touchstart", function(r) {
                        r.preventDefault(),
                            n.parents(".check-mask").addClass("checking");
                        try {
                            window.MtaH5 && MtaH5.clickStat("eticket.check.start.device_type" + ddb.common.device_type)
                        } catch (i) {
                            console.log("上报验票统计失败：", +i)
                        }
                        e = setTimeout(function() {
                            var e = (new Date).getTime() + serverTimeDif,
                                n = new Date(t.ticket.start_date.replace(/-/g, "/") + " " + t.ticket.start_time).getTime(),
                                r = ddb.store("eticket:warn-have-close") || ddb.session("eticket:warn-have-close");
                            !r && n - e > 9e5 ? t.showWarn = !0 : app.checkTicket()
                        }, checkDelay)
                    }).on("touchend", function(r) {
                        r.preventDefault(),
                            clearTimeout(e),
                            t.showCheck && n.parents(".check-mask").removeClass("checking")
                    }),
                    t.marquee(),
                    document.getElementById("mask") && ddb.mask("mask")
            },
            initTicket: function(e) {
                try {
                    e = JSON.parse(e)
                } catch (t) {
                    ddb.msg("电子票数据解析出错：[" + t + "]", null, 5e3)
                }
                if (!e || !e.eticket || !e.eticket.ticket_code)
                    return app.isReady = app.empty = !0,
                        void 0;
                var n = e.eticket,
                    r = e.common,
                    i = parseFloat(r.version) < 2.6;
                if (i && !ddb.common.version && (ddb.common = r),
                    app.ticket = n,
                    app.mobile = r.mobile,
                    app.isDriver = 2 == r.login_type,
                    app.isZgt = 2 == n.platform_id,
                    app.isBus = 1 == n.main_line_type,
                    app.isZtc = 2 == n.main_line_type,
                    app.isTranship = app.isBus && 8 == n.line_type,
                    app.canEvaluate = !(i || app.isDriver || app.isTranship || app.isZgt),
                    app.isZgt)
                    app.mark = n.on_site_name + "-" + n.off_site_name,
                    app.isReady = !0;
                else {
                    var o = app.isBus && !app.isDriver;
                    app.mark = app.isBus && !app.isTranship ? n.line_card || n.car_number : n.on_site_name + "-" + n.off_site_name,
                        app.token = app.mkToken(n, ticketNames),
                        tokenTimer = window.setInterval(function() {
                            app.token = app.mkToken(n, ticketNames)
                        }, 1e3),
                        app.gifts.sort(function() {
                            return Math.random() - .5
                        }),
                        o ? app.getTicketConfig(n) : (app.getEvaluate(n),
                            app.isBus && !app.isDriver && (app.ad = n.ticket_ad || app.ad),
                            app.isReady = !0)
                }
                app.domInited || app.$nextTick(function() {
                    app.initDom();
                    var e = window.setInterval(function() {
                        app.domInited ? window.clearInterval(e) : app.initDom()
                    }, 500)
                })
            }
        }
    });
window.up_ticket = app.initTicket,
    ddb.isApp && (window.up_ticket = function(e) {
        var t;
        try {
            t = JSON.parse(e)
        } catch (n) {
            return app.initTicket(e),
                void 0
        }
        if (!t || !t.common || !t.common.version)
            return "release" !== ddb.dev_status && alert("数据格式有误：缺少 app 版本号"),
                app.initTicket(e),
                void 0;
        if (ddb.isIosApp)
            return ddb.common.mobile && ddb.common.user_id ? app.initTicket(e) : ddb.appready(function() {
                    ddb.app = window.DDBApp;
                    var t = ddb.app ? ddb.app.getCommonParams() : ddb.cookie("ddb_app_general") || location.search.substring(1);
                    ddb.common = B.url.serializeArray(decodeURIComponent(t)),
                        ddb.session("appCommon", null),
                        ddb.initApp(),
                        app.initTicket(e)
                }),
                void 0;
        var r = parseFloat(t.common.version);
        2.6 > r || r >= 2.8 ? app.initTicket(e) : (ddb.loading.show(),
            setTimeout(function() {
                ddb.common.mobile && ddb.common.user_id ? app.initTicket(e) : ddb.appready(function() {
                        ddb.app = window.DDBApp || window.android;
                        var t = ddb.app ? ddb.app.getCommonParams() : ddb.cookie("ddb_app_general") || ddb.store("ddb_app_general") || location.search.substring(1);
                        ddb.common = B.url.serializeArray(decodeURIComponent(t)),
                            ddb.session("appCommon", null),
                            ddb.initApp(),
                            app.initTicket(e)
                    }),
                    ddb.loading.hide()
            }, 666))
    });
var isDebug = window.isDebug || B.url.getParam("debug");
isDebug && up_ticket(JSON.stringify({
    eticket: {
        platform_id: 1,
        main_line_type: 1,
        line_type: 7,
        frequency: 600,
        ticket_code: "1511231034188240-20151123-1",
        start_date: "2018-11-23",
        start_time: "7:30:00",
        end_time: "19:30:00",
        line_start_time: "17:30:00",
        on_site_name: "南山邮局测试地址",
        on_site_lng: "113.92009077867",
        on_site_lat: "22.506864105589",
        off_site_name: "泰邦科技大厦测试地址",
        off_site_lng: "113.952397",
        off_site_lat: "22.536342",
        tog_line_id: "344",
        line_code: "344-82-90",
        is_checked: "0",
        ticket_color: "#d3b17d",
        car_number: "1234是",
        line_card: "A123",
        order_number: "1511231034188240",
        ticket_number: 3,
        ticket_version: 5,
        ticket_identifier: "2312",
        ticket_key: "3790c2e0170cb569ed72fd49d89dc616",
        ticket_ad: {
            mid_bg: {
                ad_id: "129",
                ad_desc: "背景描述",
                image_url: "",
                target_url: "http://www.buskeji.com"
            },
            left_button: {
                ad_id: "128",
                ad_desc: "按钮描述",
                image_url: "http://test.public.ds.dadabus.com/ad_res/20151123103924_colin.jpg",
                target_url: "http://www.baidu.com"
            },
            bottom_animate: {
                ad_id: "130",
                ad_desc: "跑动小车描述",
                image_url: "http://test.public.ds.dadabus.com/ad_res/20151123120159_colin.jpg",
                target_url: "http://sina.com.cn"
            }
        }
    },
    common: ddb.common
}));
