//#region \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (e && (t = e(e = 0)), t), s = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), c = (e, n) => {
	let r = {};
	for (var i in e) t(r, i, {
		get: e[i],
		enumerable: !0
	});
	return n || t(r, Symbol.toStringTag, { value: "Module" }), r;
}, l = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, u = (n, r, a) => (a = n == null ? {} : e(i(n)), l(r || !n || !n.__esModule ? t(a, "default", {
	value: n,
	enumerable: !0
}) : a, n)), d = (e) => a.call(e, "module.exports") ? e["module.exports"] : l(t({}, "__esModule", { value: !0 }), e), f = /* @__PURE__ */ s(((e) => {
	var t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.iterator;
	function p(e) {
		return typeof e != "object" || !e ? null : (e = f && e[f] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var m = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, h = Object.assign, g = {};
	function _(e, t, n) {
		this.props = e, this.context = t, this.refs = g, this.updater = n || m;
	}
	_.prototype.isReactComponent = {}, _.prototype.setState = function(e, t) {
		if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, e, t, "setState");
	}, _.prototype.forceUpdate = function(e) {
		this.updater.enqueueForceUpdate(this, e, "forceUpdate");
	};
	function v() {}
	v.prototype = _.prototype;
	function y(e, t, n) {
		this.props = e, this.context = t, this.refs = g, this.updater = n || m;
	}
	var b = y.prototype = new v();
	b.constructor = y, h(b, _.prototype), b.isPureReactComponent = !0;
	var x = Array.isArray, S = Object.prototype.hasOwnProperty, C = { current: null }, w = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};
	function T(e, n, r) {
		var i, a = {}, o = null, s = null;
		if (n != null) for (i in n.ref !== void 0 && (s = n.ref), n.key !== void 0 && (o = "" + n.key), n) S.call(n, i) && !w.hasOwnProperty(i) && (a[i] = n[i]);
		var c = arguments.length - 2;
		if (c === 1) a.children = r;
		else if (1 < c) {
			for (var l = Array(c), u = 0; u < c; u++) l[u] = arguments[u + 2];
			a.children = l;
		}
		if (e && e.defaultProps) for (i in c = e.defaultProps, c) a[i] === void 0 && (a[i] = c[i]);
		return {
			$$typeof: t,
			type: e,
			key: o,
			ref: s,
			props: a,
			_owner: C.current
		};
	}
	function E(e, n) {
		return {
			$$typeof: t,
			type: e.type,
			key: n,
			ref: e.ref,
			props: e.props,
			_owner: e._owner
		};
	}
	function ee(e) {
		return typeof e == "object" && !!e && e.$$typeof === t;
	}
	function D(e) {
		var t = {
			"=": "=0",
			":": "=2"
		};
		return "$" + e.replace(/[=:]/g, function(e) {
			return t[e];
		});
	}
	var te = /\/+/g;
	function ne(e, t) {
		return typeof e == "object" && e && e.key != null ? D("" + e.key) : t.toString(36);
	}
	function re(e, r, i, a, o) {
		var s = typeof e;
		(s === "undefined" || s === "boolean") && (e = null);
		var c = !1;
		if (e === null) c = !0;
		else switch (s) {
			case "string":
			case "number":
				c = !0;
				break;
			case "object": switch (e.$$typeof) {
				case t:
				case n: c = !0;
			}
		}
		if (c) return c = e, o = o(c), e = a === "" ? "." + ne(c, 0) : a, x(o) ? (i = "", e != null && (i = e.replace(te, "$&/") + "/"), re(o, r, i, "", function(e) {
			return e;
		})) : o != null && (ee(o) && (o = E(o, i + (!o.key || c && c.key === o.key ? "" : ("" + o.key).replace(te, "$&/") + "/") + e)), r.push(o)), 1;
		if (c = 0, a = a === "" ? "." : a + ":", x(e)) for (var l = 0; l < e.length; l++) {
			s = e[l];
			var u = a + ne(s, l);
			c += re(s, r, i, u, o);
		}
		else if (u = p(e), typeof u == "function") for (e = u.call(e), l = 0; !(s = e.next()).done;) s = s.value, u = a + ne(s, l++), c += re(s, r, i, u, o);
		else if (s === "object") throw r = String(e), Error("Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.");
		return c;
	}
	function O(e, t, n) {
		if (e == null) return e;
		var r = [], i = 0;
		return re(e, r, "", "", function(e) {
			return t.call(n, e, i++);
		}), r;
	}
	function ie(e) {
		if (e._status === -1) {
			var t = e._result;
			t = t(), t.then(function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 1, e._result = t);
			}, function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 2, e._result = t);
			}), e._status === -1 && (e._status = 0, e._result = t);
		}
		if (e._status === 1) return e._result.default;
		throw e._result;
	}
	var k = { current: null }, A = { transition: null }, ae = {
		ReactCurrentDispatcher: k,
		ReactCurrentBatchConfig: A,
		ReactCurrentOwner: C
	};
	function oe() {
		throw Error("act(...) is not supported in production builds of React.");
	}
	e.Children = {
		map: O,
		forEach: function(e, t, n) {
			O(e, function() {
				t.apply(this, arguments);
			}, n);
		},
		count: function(e) {
			var t = 0;
			return O(e, function() {
				t++;
			}), t;
		},
		toArray: function(e) {
			return O(e, function(e) {
				return e;
			}) || [];
		},
		only: function(e) {
			if (!ee(e)) throw Error("React.Children.only expected to receive a single React element child.");
			return e;
		}
	}, e.Component = _, e.Fragment = r, e.Profiler = a, e.PureComponent = y, e.StrictMode = i, e.Suspense = l, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ae, e.act = oe, e.cloneElement = function(e, n, r) {
		if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
		var i = h({}, e.props), a = e.key, o = e.ref, s = e._owner;
		if (n != null) {
			if (n.ref !== void 0 && (o = n.ref, s = C.current), n.key !== void 0 && (a = "" + n.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
			for (l in n) S.call(n, l) && !w.hasOwnProperty(l) && (i[l] = n[l] === void 0 && c !== void 0 ? c[l] : n[l]);
		}
		var l = arguments.length - 2;
		if (l === 1) i.children = r;
		else if (1 < l) {
			c = Array(l);
			for (var u = 0; u < l; u++) c[u] = arguments[u + 2];
			i.children = c;
		}
		return {
			$$typeof: t,
			type: e.type,
			key: a,
			ref: o,
			props: i,
			_owner: s
		};
	}, e.createContext = function(e) {
		return e = {
			$$typeof: s,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null
		}, e.Provider = {
			$$typeof: o,
			_context: e
		}, e.Consumer = e;
	}, e.createElement = T, e.createFactory = function(e) {
		var t = T.bind(null, e);
		return t.type = e, t;
	}, e.createRef = function() {
		return { current: null };
	}, e.forwardRef = function(e) {
		return {
			$$typeof: c,
			render: e
		};
	}, e.isValidElement = ee, e.lazy = function(e) {
		return {
			$$typeof: d,
			_payload: {
				_status: -1,
				_result: e
			},
			_init: ie
		};
	}, e.memo = function(e, t) {
		return {
			$$typeof: u,
			type: e,
			compare: t === void 0 ? null : t
		};
	}, e.startTransition = function(e) {
		var t = A.transition;
		A.transition = {};
		try {
			e();
		} finally {
			A.transition = t;
		}
	}, e.unstable_act = oe, e.useCallback = function(e, t) {
		return k.current.useCallback(e, t);
	}, e.useContext = function(e) {
		return k.current.useContext(e);
	}, e.useDebugValue = function() {}, e.useDeferredValue = function(e) {
		return k.current.useDeferredValue(e);
	}, e.useEffect = function(e, t) {
		return k.current.useEffect(e, t);
	}, e.useId = function() {
		return k.current.useId();
	}, e.useImperativeHandle = function(e, t, n) {
		return k.current.useImperativeHandle(e, t, n);
	}, e.useInsertionEffect = function(e, t) {
		return k.current.useInsertionEffect(e, t);
	}, e.useLayoutEffect = function(e, t) {
		return k.current.useLayoutEffect(e, t);
	}, e.useMemo = function(e, t) {
		return k.current.useMemo(e, t);
	}, e.useReducer = function(e, t, n) {
		return k.current.useReducer(e, t, n);
	}, e.useRef = function(e) {
		return k.current.useRef(e);
	}, e.useState = function(e) {
		return k.current.useState(e);
	}, e.useSyncExternalStore = function(e, t, n) {
		return k.current.useSyncExternalStore(e, t, n);
	}, e.useTransition = function() {
		return k.current.useTransition();
	}, e.version = "18.3.1";
})), p = /* @__PURE__ */ s(((e, t) => {
	t.exports = f();
})), m = /* @__PURE__ */ s(((e) => {
	function t(e, t) {
		var n = e.length;
		e.push(t);
		a: for (; 0 < n;) {
			var r = n - 1 >>> 1, a = e[r];
			if (0 < i(a, t)) e[r] = t, e[n] = a, n = r;
			else break a;
		}
	}
	function n(e) {
		return e.length === 0 ? null : e[0];
	}
	function r(e) {
		if (e.length === 0) return null;
		var t = e[0], n = e.pop();
		if (n !== t) {
			e[0] = n;
			a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
				var s = 2 * (r + 1) - 1, c = e[s], l = s + 1, u = e[l];
				if (0 > i(c, n)) l < a && 0 > i(u, c) ? (e[r] = u, e[l] = n, r = l) : (e[r] = c, e[s] = n, r = s);
				else if (l < a && 0 > i(u, n)) e[r] = u, e[l] = n, r = l;
				else break a;
			}
		}
		return t;
	}
	function i(e, t) {
		var n = e.sortIndex - t.sortIndex;
		return n === 0 ? e.id - t.id : n;
	}
	if (typeof performance == "object" && typeof performance.now == "function") {
		var a = performance;
		e.unstable_now = function() {
			return a.now();
		};
	} else {
		var o = Date, s = o.now();
		e.unstable_now = function() {
			return o.now() - s;
		};
	}
	var c = [], l = [], u = 1, d = null, f = 3, p = !1, m = !1, h = !1, g = typeof setTimeout == "function" ? setTimeout : null, _ = typeof clearTimeout == "function" ? clearTimeout : null, v = typeof setImmediate < "u" ? setImmediate : null;
	typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function y(e) {
		for (var i = n(l); i !== null;) {
			if (i.callback === null) r(l);
			else if (i.startTime <= e) r(l), i.sortIndex = i.expirationTime, t(c, i);
			else break;
			i = n(l);
		}
	}
	function b(e) {
		if (h = !1, y(e), !m) if (n(c) !== null) m = !0, O(x);
		else {
			var t = n(l);
			t !== null && ie(b, t.startTime - e);
		}
	}
	function x(t, i) {
		m = !1, h && (h = !1, _(w), w = -1), p = !0;
		var a = f;
		try {
			for (y(i), d = n(c); d !== null && (!(d.expirationTime > i) || t && !ee());) {
				var o = d.callback;
				if (typeof o == "function") {
					d.callback = null, f = d.priorityLevel;
					var s = o(d.expirationTime <= i);
					i = e.unstable_now(), typeof s == "function" ? d.callback = s : d === n(c) && r(c), y(i);
				} else r(c);
				d = n(c);
			}
			if (d !== null) var u = !0;
			else {
				var g = n(l);
				g !== null && ie(b, g.startTime - i), u = !1;
			}
			return u;
		} finally {
			d = null, f = a, p = !1;
		}
	}
	var S = !1, C = null, w = -1, T = 5, E = -1;
	function ee() {
		return !(e.unstable_now() - E < T);
	}
	function D() {
		if (C !== null) {
			var t = e.unstable_now();
			E = t;
			var n = !0;
			try {
				n = C(!0, t);
			} finally {
				n ? te() : (S = !1, C = null);
			}
		} else S = !1;
	}
	var te;
	if (typeof v == "function") te = function() {
		v(D);
	};
	else if (typeof MessageChannel < "u") {
		var ne = new MessageChannel(), re = ne.port2;
		ne.port1.onmessage = D, te = function() {
			re.postMessage(null);
		};
	} else te = function() {
		g(D, 0);
	};
	function O(e) {
		C = e, S || (S = !0, te());
	}
	function ie(t, n) {
		w = g(function() {
			t(e.unstable_now());
		}, n);
	}
	e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(e) {
		e.callback = null;
	}, e.unstable_continueExecution = function() {
		m || p || (m = !0, O(x));
	}, e.unstable_forceFrameRate = function(e) {
		0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : T = 0 < e ? Math.floor(1e3 / e) : 5;
	}, e.unstable_getCurrentPriorityLevel = function() {
		return f;
	}, e.unstable_getFirstCallbackNode = function() {
		return n(c);
	}, e.unstable_next = function(e) {
		switch (f) {
			case 1:
			case 2:
			case 3:
				var t = 3;
				break;
			default: t = f;
		}
		var n = f;
		f = t;
		try {
			return e();
		} finally {
			f = n;
		}
	}, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: break;
			default: e = 3;
		}
		var n = f;
		f = e;
		try {
			return t();
		} finally {
			f = n;
		}
	}, e.unstable_scheduleCallback = function(r, i, a) {
		var o = e.unstable_now();
		switch (typeof a == "object" && a ? (a = a.delay, a = typeof a == "number" && 0 < a ? o + a : o) : a = o, r) {
			case 1:
				var s = -1;
				break;
			case 2:
				s = 250;
				break;
			case 5:
				s = 1073741823;
				break;
			case 4:
				s = 1e4;
				break;
			default: s = 5e3;
		}
		return s = a + s, r = {
			id: u++,
			callback: i,
			priorityLevel: r,
			startTime: a,
			expirationTime: s,
			sortIndex: -1
		}, a > o ? (r.sortIndex = a, t(l, r), n(c) === null && r === n(l) && (h ? (_(w), w = -1) : h = !0, ie(b, a - o))) : (r.sortIndex = s, t(c, r), m || p || (m = !0, O(x))), r;
	}, e.unstable_shouldYield = ee, e.unstable_wrapCallback = function(e) {
		var t = f;
		return function() {
			var n = f;
			f = t;
			try {
				return e.apply(this, arguments);
			} finally {
				f = n;
			}
		};
	};
})), h = /* @__PURE__ */ s(((e, t) => {
	t.exports = m();
})), g = /* @__PURE__ */ s(((e) => {
	var t = p(), n = h();
	function r(e) {
		for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	var i = /* @__PURE__ */ new Set(), a = {};
	function o(e, t) {
		s(e, t), s(e + "Capture", t);
	}
	function s(e, t) {
		for (a[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
	}
	var c = !(typeof window > "u" || window.document === void 0 || window.document.createElement === void 0), l = Object.prototype.hasOwnProperty, u = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, d = {}, f = {};
	function m(e) {
		return l.call(f, e) ? !0 : l.call(d, e) ? !1 : u.test(e) ? f[e] = !0 : (d[e] = !0, !1);
	}
	function g(e, t, n, r) {
		if (n !== null && n.type === 0) return !1;
		switch (typeof t) {
			case "function":
			case "symbol": return !0;
			case "boolean": return r ? !1 : n === null ? (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-") : !n.acceptsBooleans;
			default: return !1;
		}
	}
	function _(e, t, n, r) {
		if (t == null || g(e, t, n, r)) return !0;
		if (r) return !1;
		if (n !== null) switch (n.type) {
			case 3: return !t;
			case 4: return !1 === t;
			case 5: return isNaN(t);
			case 6: return isNaN(t) || 1 > t;
		}
		return !1;
	}
	function v(e, t, n, r, i, a, o) {
		this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o;
	}
	var y = {};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
		y[e] = new v(e, 0, !1, e, null, !1, !1);
	}), [
		["acceptCharset", "accept-charset"],
		["className", "class"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"]
	].forEach(function(e) {
		var t = e[0];
		y[t] = new v(t, 1, !1, e[1], null, !1, !1);
	}), [
		"contentEditable",
		"draggable",
		"spellCheck",
		"value"
	].forEach(function(e) {
		y[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
	}), [
		"autoReverse",
		"externalResourcesRequired",
		"focusable",
		"preserveAlpha"
	].forEach(function(e) {
		y[e] = new v(e, 2, !1, e, null, !1, !1);
	}), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
		y[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
	}), [
		"checked",
		"multiple",
		"muted",
		"selected"
	].forEach(function(e) {
		y[e] = new v(e, 3, !0, e, null, !1, !1);
	}), ["capture", "download"].forEach(function(e) {
		y[e] = new v(e, 4, !1, e, null, !1, !1);
	}), [
		"cols",
		"rows",
		"size",
		"span"
	].forEach(function(e) {
		y[e] = new v(e, 6, !1, e, null, !1, !1);
	}), ["rowSpan", "start"].forEach(function(e) {
		y[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
	});
	var b = /[\-:]([a-z])/g;
	function x(e) {
		return e[1].toUpperCase();
	}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
		var t = e.replace(b, x);
		y[t] = new v(t, 1, !1, e, null, !1, !1);
	}), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
		var t = e.replace(b, x);
		y[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
	}), [
		"xml:base",
		"xml:lang",
		"xml:space"
	].forEach(function(e) {
		var t = e.replace(b, x);
		y[t] = new v(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
	}), ["tabIndex", "crossOrigin"].forEach(function(e) {
		y[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
	}), y.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), [
		"src",
		"href",
		"action",
		"formAction"
	].forEach(function(e) {
		y[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
	});
	function S(e, t, n, r) {
		var i = y.hasOwnProperty(t) ? y[t] : null;
		(i === null ? r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N" : i.type !== 0) && (_(t, n, i, r) && (n = null), r || i === null ? m(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
	}
	var C = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, w = Symbol.for("react.element"), T = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), ee = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), te = Symbol.for("react.provider"), ne = Symbol.for("react.context"), re = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), ie = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), ae = Symbol.for("react.offscreen"), oe = Symbol.iterator;
	function se(e) {
		return typeof e != "object" || !e ? null : (e = oe && e[oe] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var j = Object.assign, ce;
	function le(e) {
		if (ce === void 0) try {
			throw Error();
		} catch (e) {
			var t = e.stack.trim().match(/\n( *(at )?)/);
			ce = t && t[1] || "";
		}
		return "\n" + ce + e;
	}
	var ue = !1;
	function de(e, t) {
		if (!e || ue) return "";
		ue = !0;
		var n = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			if (t) if (t = function() {
				throw Error();
			}, Object.defineProperty(t.prototype, "props", { set: function() {
				throw Error();
			} }), typeof Reflect == "object" && Reflect.construct) {
				try {
					Reflect.construct(t, []);
				} catch (e) {
					var r = e;
				}
				Reflect.construct(e, [], t);
			} else {
				try {
					t.call();
				} catch (e) {
					r = e;
				}
				e.call(t.prototype);
			}
			else {
				try {
					throw Error();
				} catch (e) {
					r = e;
				}
				e();
			}
		} catch (t) {
			if (t && r && typeof t.stack == "string") {
				for (var i = t.stack.split("\n"), a = r.stack.split("\n"), o = i.length - 1, s = a.length - 1; 1 <= o && 0 <= s && i[o] !== a[s];) s--;
				for (; 1 <= o && 0 <= s; o--, s--) if (i[o] !== a[s]) {
					if (o !== 1 || s !== 1) do
						if (o--, s--, 0 > s || i[o] !== a[s]) {
							var c = "\n" + i[o].replace(" at new ", " at ");
							return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c;
						}
					while (1 <= o && 0 <= s);
					break;
				}
			}
		} finally {
			ue = !1, Error.prepareStackTrace = n;
		}
		return (e = e ? e.displayName || e.name : "") ? le(e) : "";
	}
	function fe(e) {
		switch (e.tag) {
			case 5: return le(e.type);
			case 16: return le("Lazy");
			case 13: return le("Suspense");
			case 19: return le("SuspenseList");
			case 0:
			case 2:
			case 15: return e = de(e.type, !1), e;
			case 11: return e = de(e.type.render, !1), e;
			case 1: return e = de(e.type, !0), e;
			default: return "";
		}
	}
	function pe(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case E: return "Fragment";
			case T: return "Portal";
			case D: return "Profiler";
			case ee: return "StrictMode";
			case O: return "Suspense";
			case ie: return "SuspenseList";
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case ne: return (e.displayName || "Context") + ".Consumer";
			case te: return (e._context.displayName || "Context") + ".Provider";
			case re:
				var t = e.render;
				return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
			case k: return t = e.displayName || null, t === null ? pe(e.type) || "Memo" : t;
			case A:
				t = e._payload, e = e._init;
				try {
					return pe(e(t));
				} catch {}
		}
		return null;
	}
	function me(e) {
		var t = e.type;
		switch (e.tag) {
			case 24: return "Cache";
			case 9: return (t.displayName || "Context") + ".Consumer";
			case 10: return (t._context.displayName || "Context") + ".Provider";
			case 18: return "DehydratedFragment";
			case 11: return e = t.render, e = e.displayName || e.name || "", t.displayName || (e === "" ? "ForwardRef" : "ForwardRef(" + e + ")");
			case 7: return "Fragment";
			case 5: return t;
			case 4: return "Portal";
			case 3: return "Root";
			case 6: return "Text";
			case 16: return pe(t);
			case 8: return t === ee ? "StrictMode" : "Mode";
			case 22: return "Offscreen";
			case 12: return "Profiler";
			case 21: return "Scope";
			case 13: return "Suspense";
			case 19: return "SuspenseList";
			case 25: return "TracingMarker";
			case 1:
			case 0:
			case 17:
			case 2:
			case 14:
			case 15:
				if (typeof t == "function") return t.displayName || t.name || null;
				if (typeof t == "string") return t;
		}
		return null;
	}
	function he(e) {
		switch (typeof e) {
			case "boolean":
			case "number":
			case "string":
			case "undefined": return e;
			case "object": return e;
			default: return "";
		}
	}
	function ge(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
	}
	function _e(e) {
		var t = ge(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
		if (!e.hasOwnProperty(t) && n !== void 0 && typeof n.get == "function" && typeof n.set == "function") {
			var i = n.get, a = n.set;
			return Object.defineProperty(e, t, {
				configurable: !0,
				get: function() {
					return i.call(this);
				},
				set: function(e) {
					r = "" + e, a.call(this, e);
				}
			}), Object.defineProperty(e, t, { enumerable: n.enumerable }), {
				getValue: function() {
					return r;
				},
				setValue: function(e) {
					r = "" + e;
				},
				stopTracking: function() {
					e._valueTracker = null, delete e[t];
				}
			};
		}
	}
	function ve(e) {
		e._valueTracker ||= _e(e);
	}
	function ye(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(), r = "";
		return e && (r = ge(e) ? e.checked ? "true" : "false" : e.value), e = r, e === n ? !1 : (t.setValue(e), !0);
	}
	function be(e) {
		if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	function xe(e, t) {
		var n = t.checked;
		return j({}, t, {
			defaultChecked: void 0,
			defaultValue: void 0,
			value: void 0,
			checked: n ?? e._wrapperState.initialChecked
		});
	}
	function M(e, t) {
		var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked == null ? t.defaultChecked : t.checked;
		n = he(t.value == null ? n : t.value), e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
		};
	}
	function Se(e, t) {
		t = t.checked, t != null && S(e, "checked", t, !1);
	}
	function Ce(e, t) {
		Se(e, t);
		var n = he(t.value), r = t.type;
		if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
		else if (r === "submit" || r === "reset") {
			e.removeAttribute("value");
			return;
		}
		t.hasOwnProperty("value") ? Te(e, t.type, n) : t.hasOwnProperty("defaultValue") && Te(e, t.type, he(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
	}
	function we(e, t, n) {
		if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
			var r = t.type;
			if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
			t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
		}
		n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
	}
	function Te(e, t, n) {
		(t !== "number" || be(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
	}
	var Ee = Array.isArray;
	function N(e, t, n, r) {
		if (e = e.options, t) {
			t = {};
			for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
			for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
		} else {
			for (n = "" + he(n), t = null, i = 0; i < e.length; i++) {
				if (e[i].value === n) {
					e[i].selected = !0, r && (e[i].defaultSelected = !0);
					return;
				}
				t !== null || e[i].disabled || (t = e[i]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function De(e, t) {
		if (t.dangerouslySetInnerHTML != null) throw Error(r(91));
		return j({}, t, {
			value: void 0,
			defaultValue: void 0,
			children: "" + e._wrapperState.initialValue
		});
	}
	function Oe(e, t) {
		var n = t.value;
		if (n == null) {
			if (n = t.children, t = t.defaultValue, n != null) {
				if (t != null) throw Error(r(92));
				if (Ee(n)) {
					if (1 < n.length) throw Error(r(93));
					n = n[0];
				}
				t = n;
			}
			t ??= "", n = t;
		}
		e._wrapperState = { initialValue: he(n) };
	}
	function ke(e, t) {
		var n = he(t.value), r = he(t.defaultValue);
		n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
	}
	function Ae(e) {
		var t = e.textContent;
		t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
	}
	function je(e) {
		switch (e) {
			case "svg": return "http://www.w3.org/2000/svg";
			case "math": return "http://www.w3.org/1998/Math/MathML";
			default: return "http://www.w3.org/1999/xhtml";
		}
	}
	function Me(e, t) {
		return e == null || e === "http://www.w3.org/1999/xhtml" ? je(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
	}
	var Ne, P = function(e) {
		return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
			MSApp.execUnsafeLocalFunction(function() {
				return e(t, n, r, i);
			});
		} : e;
	}(function(e, t) {
		if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
		else {
			for (Ne ||= document.createElement("div"), Ne.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ne.firstChild; e.firstChild;) e.removeChild(e.firstChild);
			for (; t.firstChild;) e.appendChild(t.firstChild);
		}
	});
	function Pe(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var Fe = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0
	}, Ie = [
		"Webkit",
		"ms",
		"Moz",
		"O"
	];
	Object.keys(Fe).forEach(function(e) {
		Ie.forEach(function(t) {
			t = t + e.charAt(0).toUpperCase() + e.substring(1), Fe[t] = Fe[e];
		});
	});
	function F(e, t, n) {
		return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Fe.hasOwnProperty(e) && Fe[e] ? ("" + t).trim() : t + "px";
	}
	function Le(e, t) {
		for (var n in e = e.style, t) if (t.hasOwnProperty(n)) {
			var r = n.indexOf("--") === 0, i = F(n, t[n], r);
			n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
		}
	}
	var Re = j({ menuitem: !0 }, {
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0
	});
	function ze(e, t) {
		if (t) {
			if (Re[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(r(137, e));
			if (t.dangerouslySetInnerHTML != null) {
				if (t.children != null) throw Error(r(60));
				if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(r(61));
			}
			if (t.style != null && typeof t.style != "object") throw Error(r(62));
		}
	}
	function Be(e, t) {
		if (e.indexOf("-") === -1) return typeof t.is == "string";
		switch (e) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": return !1;
			default: return !0;
		}
	}
	var Ve = null;
	function He(e) {
		return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
	}
	var Ue = null, We = null, Ge = null;
	function Ke(e) {
		if (e = Li(e)) {
			if (typeof Ue != "function") throw Error(r(280));
			var t = e.stateNode;
			t && (t = zi(t), Ue(e.stateNode, e.type, t));
		}
	}
	function qe(e) {
		We ? Ge ? Ge.push(e) : Ge = [e] : We = e;
	}
	function Je() {
		if (We) {
			var e = We, t = Ge;
			if (Ge = We = null, Ke(e), t) for (e = 0; e < t.length; e++) Ke(t[e]);
		}
	}
	function Ye(e, t) {
		return e(t);
	}
	function Xe() {}
	var Ze = !1;
	function Qe(e, t, n) {
		if (Ze) return e(t, n);
		Ze = !0;
		try {
			return Ye(e, t, n);
		} finally {
			Ze = !1, (We !== null || Ge !== null) && (Xe(), Je());
		}
	}
	function $e(e, t) {
		var n = e.stateNode;
		if (n === null) return null;
		var i = zi(n);
		if (i === null) return null;
		n = i[t];
		a: switch (t) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
				break a;
			default: e = !1;
		}
		if (e) return null;
		if (n && typeof n != "function") throw Error(r(231, t, typeof n));
		return n;
	}
	var et = !1;
	if (c) try {
		var tt = {};
		Object.defineProperty(tt, "passive", { get: function() {
			et = !0;
		} }), window.addEventListener("test", tt, tt), window.removeEventListener("test", tt, tt);
	} catch {
		et = !1;
	}
	function nt(e, t, n, r, i, a, o, s, c) {
		var l = Array.prototype.slice.call(arguments, 3);
		try {
			t.apply(n, l);
		} catch (e) {
			this.onError(e);
		}
	}
	var I = !1, rt = null, it = !1, L = null, at = { onError: function(e) {
		I = !0, rt = e;
	} };
	function ot(e, t, n, r, i, a, o, s, c) {
		I = !1, rt = null, nt.apply(at, arguments);
	}
	function st(e, t, n, i, a, o, s, c, l) {
		if (ot.apply(this, arguments), I) {
			if (I) {
				var u = rt;
				I = !1, rt = null;
			} else throw Error(r(198));
			it || (it = !0, L = u);
		}
	}
	function ct(e) {
		var t = e, n = e;
		if (e.alternate) for (; t.return;) t = t.return;
		else {
			e = t;
			do
				t = e, t.flags & 4098 && (n = t.return), e = t.return;
			while (e);
		}
		return t.tag === 3 ? n : null;
	}
	function lt(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function ut(e) {
		if (ct(e) !== e) throw Error(r(188));
	}
	function dt(e) {
		var t = e.alternate;
		if (!t) {
			if (t = ct(e), t === null) throw Error(r(188));
			return t === e ? e : null;
		}
		for (var n = e, i = t;;) {
			var a = n.return;
			if (a === null) break;
			var o = a.alternate;
			if (o === null) {
				if (i = a.return, i !== null) {
					n = i;
					continue;
				}
				break;
			}
			if (a.child === o.child) {
				for (o = a.child; o;) {
					if (o === n) return ut(a), e;
					if (o === i) return ut(a), t;
					o = o.sibling;
				}
				throw Error(r(188));
			}
			if (n.return !== i.return) n = a, i = o;
			else {
				for (var s = !1, c = a.child; c;) {
					if (c === n) {
						s = !0, n = a, i = o;
						break;
					}
					if (c === i) {
						s = !0, i = a, n = o;
						break;
					}
					c = c.sibling;
				}
				if (!s) {
					for (c = o.child; c;) {
						if (c === n) {
							s = !0, n = o, i = a;
							break;
						}
						if (c === i) {
							s = !0, i = o, n = a;
							break;
						}
						c = c.sibling;
					}
					if (!s) throw Error(r(189));
				}
			}
			if (n.alternate !== i) throw Error(r(190));
		}
		if (n.tag !== 3) throw Error(r(188));
		return n.stateNode.current === n ? e : t;
	}
	function ft(e) {
		return e = dt(e), e === null ? null : pt(e);
	}
	function pt(e) {
		if (e.tag === 5 || e.tag === 6) return e;
		for (e = e.child; e !== null;) {
			var t = pt(e);
			if (t !== null) return t;
			e = e.sibling;
		}
		return null;
	}
	var mt = n.unstable_scheduleCallback, ht = n.unstable_cancelCallback, gt = n.unstable_shouldYield, _t = n.unstable_requestPaint, R = n.unstable_now, z = n.unstable_getCurrentPriorityLevel, vt = n.unstable_ImmediatePriority, yt = n.unstable_UserBlockingPriority, bt = n.unstable_NormalPriority, xt = n.unstable_LowPriority, St = n.unstable_IdlePriority, Ct = null, wt = null;
	function Tt(e) {
		if (wt && typeof wt.onCommitFiberRoot == "function") try {
			wt.onCommitFiberRoot(Ct, e, void 0, (e.current.flags & 128) == 128);
		} catch {}
	}
	var B = Math.clz32 ? Math.clz32 : Ot, Et = Math.log, Dt = Math.LN2;
	function Ot(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (Et(e) / Dt | 0) | 0;
	}
	var kt = 64, At = 4194304;
	function jt(e) {
		switch (e & -e) {
			case 1: return 1;
			case 2: return 2;
			case 4: return 4;
			case 8: return 8;
			case 16: return 16;
			case 32: return 32;
			case 64:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return e & 4194240;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
			case 67108864: return e & 130023424;
			case 134217728: return 134217728;
			case 268435456: return 268435456;
			case 536870912: return 536870912;
			case 1073741824: return 1073741824;
			default: return e;
		}
	}
	function Mt(e, t) {
		var n = e.pendingLanes;
		if (n === 0) return 0;
		var r = 0, i = e.suspendedLanes, a = e.pingedLanes, o = n & 268435455;
		if (o !== 0) {
			var s = o & ~i;
			s === 0 ? (a &= o, a !== 0 && (r = jt(a))) : r = jt(s);
		} else o = n & ~i, o === 0 ? a !== 0 && (r = jt(a)) : r = jt(o);
		if (r === 0) return 0;
		if (t !== 0 && t !== r && (t & i) === 0 && (i = r & -r, a = t & -t, i >= a || i === 16 && a & 4194240)) return t;
		if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t;) n = 31 - B(t), i = 1 << n, r |= e[n], t &= ~i;
		return r;
	}
	function Nt(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 4: return t + 250;
			case 8:
			case 16:
			case 32:
			case 64:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
			case 67108864: return -1;
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824: return -1;
			default: return -1;
		}
	}
	function Pt(e, t) {
		for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a;) {
			var o = 31 - B(a), s = 1 << o, c = i[o];
			c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = Nt(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
		}
	}
	function Ft(e) {
		return e = e.pendingLanes & -1073741825, e === 0 ? e & 1073741824 ? 1073741824 : 0 : e;
	}
	function It() {
		var e = kt;
		return kt <<= 1, !(kt & 4194240) && (kt = 64), e;
	}
	function Lt(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function Rt(e, t, n) {
		e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - B(t), e[t] = n;
	}
	function zt(e, t) {
		var n = e.pendingLanes & ~t;
		e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
		var r = e.eventTimes;
		for (e = e.expirationTimes; 0 < n;) {
			var i = 31 - B(n), a = 1 << i;
			t[i] = 0, r[i] = -1, e[i] = -1, n &= ~a;
		}
	}
	function Bt(e, t) {
		var n = e.entangledLanes |= t;
		for (e = e.entanglements; n;) {
			var r = 31 - B(n), i = 1 << r;
			i & t | e[r] & t && (e[r] |= t), n &= ~i;
		}
	}
	var V = 0;
	function Vt(e) {
		return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
	}
	var Ht, Ut, Wt, Gt, Kt, qt = !1, Jt = [], Yt = null, Xt = null, Zt = null, Qt = /* @__PURE__ */ new Map(), $t = /* @__PURE__ */ new Map(), en = [], tn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
	function nn(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				Yt = null;
				break;
			case "dragenter":
			case "dragleave":
				Xt = null;
				break;
			case "mouseover":
			case "mouseout":
				Zt = null;
				break;
			case "pointerover":
			case "pointerout":
				Qt.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": $t.delete(t.pointerId);
		}
	}
	function rn(e, t, n, r, i, a) {
		return e === null || e.nativeEvent !== a ? (e = {
			blockedOn: t,
			domEventName: n,
			eventSystemFlags: r,
			nativeEvent: a,
			targetContainers: [i]
		}, t !== null && (t = Li(t), t !== null && Ut(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
	}
	function an(e, t, n, r, i) {
		switch (t) {
			case "focusin": return Yt = rn(Yt, e, t, n, r, i), !0;
			case "dragenter": return Xt = rn(Xt, e, t, n, r, i), !0;
			case "mouseover": return Zt = rn(Zt, e, t, n, r, i), !0;
			case "pointerover":
				var a = i.pointerId;
				return Qt.set(a, rn(Qt.get(a) || null, e, t, n, r, i)), !0;
			case "gotpointercapture": return a = i.pointerId, $t.set(a, rn($t.get(a) || null, e, t, n, r, i)), !0;
		}
		return !1;
	}
	function on(e) {
		var t = Ii(e.target);
		if (t !== null) {
			var n = ct(t);
			if (n !== null) {
				if (t = n.tag, t === 13) {
					if (t = lt(n), t !== null) {
						e.blockedOn = t, Kt(e.priority, function() {
							Wt(n);
						});
						return;
					}
				} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
					e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
					return;
				}
			}
		}
		e.blockedOn = null;
	}
	function sn(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length;) {
			var n = vn(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
			if (n === null) {
				n = e.nativeEvent;
				var r = new n.constructor(n.type, n);
				Ve = r, n.target.dispatchEvent(r), Ve = null;
			} else return t = Li(n), t !== null && Ut(t), e.blockedOn = n, !1;
			t.shift();
		}
		return !0;
	}
	function cn(e, t, n) {
		sn(e) && n.delete(t);
	}
	function ln() {
		qt = !1, Yt !== null && sn(Yt) && (Yt = null), Xt !== null && sn(Xt) && (Xt = null), Zt !== null && sn(Zt) && (Zt = null), Qt.forEach(cn), $t.forEach(cn);
	}
	function un(e, t) {
		e.blockedOn === t && (e.blockedOn = null, qt || (qt = !0, n.unstable_scheduleCallback(n.unstable_NormalPriority, ln)));
	}
	function dn(e) {
		function t(t) {
			return un(t, e);
		}
		if (0 < Jt.length) {
			un(Jt[0], e);
			for (var n = 1; n < Jt.length; n++) {
				var r = Jt[n];
				r.blockedOn === e && (r.blockedOn = null);
			}
		}
		for (Yt !== null && un(Yt, e), Xt !== null && un(Xt, e), Zt !== null && un(Zt, e), Qt.forEach(t), $t.forEach(t), n = 0; n < en.length; n++) r = en[n], r.blockedOn === e && (r.blockedOn = null);
		for (; 0 < en.length && (n = en[0], n.blockedOn === null);) on(n), n.blockedOn === null && en.shift();
	}
	var fn = C.ReactCurrentBatchConfig, pn = !0;
	function mn(e, t, n, r) {
		var i = V, a = fn.transition;
		fn.transition = null;
		try {
			V = 1, gn(e, t, n, r);
		} finally {
			V = i, fn.transition = a;
		}
	}
	function hn(e, t, n, r) {
		var i = V, a = fn.transition;
		fn.transition = null;
		try {
			V = 4, gn(e, t, n, r);
		} finally {
			V = i, fn.transition = a;
		}
	}
	function gn(e, t, n, r) {
		if (pn) {
			var i = vn(e, t, n, r);
			if (i === null) ci(e, t, r, _n, n), nn(e, r);
			else if (an(i, e, t, n, r)) r.stopPropagation();
			else if (nn(e, r), t & 4 && -1 < tn.indexOf(e)) {
				for (; i !== null;) {
					var a = Li(i);
					if (a !== null && Ht(a), a = vn(e, t, n, r), a === null && ci(e, t, r, _n, n), a === i) break;
					i = a;
				}
				i !== null && r.stopPropagation();
			} else ci(e, t, r, null, n);
		}
	}
	var _n = null;
	function vn(e, t, n, r) {
		if (_n = null, e = He(r), e = Ii(e), e !== null) if (t = ct(e), t === null) e = null;
		else if (n = t.tag, n === 13) {
			if (e = lt(t), e !== null) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
		return _n = e, null;
	}
	function yn(e) {
		switch (e) {
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "resize":
			case "seeked":
			case "submit":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart": return 1;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "scroll":
			case "toggle":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave": return 4;
			case "message": switch (z()) {
				case vt: return 1;
				case yt: return 4;
				case bt:
				case xt: return 16;
				case St: return 536870912;
				default: return 16;
			}
			default: return 16;
		}
	}
	var bn = null, xn = null, Sn = null;
	function Cn() {
		if (Sn) return Sn;
		var e, t = xn, n = t.length, r, i = "value" in bn ? bn.value : bn.textContent, a = i.length;
		for (e = 0; e < n && t[e] === i[e]; e++);
		var o = n - e;
		for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
		return Sn = i.slice(e, 1 < r ? 1 - r : void 0);
	}
	function wn(e) {
		var t = e.keyCode;
		return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
	}
	function Tn() {
		return !0;
	}
	function En() {
		return !1;
	}
	function Dn(e) {
		function t(t, n, r, i, a) {
			for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
			return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? Tn : En, this.isPropagationStopped = En, this;
		}
		return j(t.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var e = this.nativeEvent;
				e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Tn);
			},
			stopPropagation: function() {
				var e = this.nativeEvent;
				e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Tn);
			},
			persist: function() {},
			isPersistent: Tn
		}), t;
	}
	var On = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, kn = Dn(On), An = j({}, On, {
		view: 0,
		detail: 0
	}), jn = Dn(An), Mn, Nn, Pn, Fn = j({}, An, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: Wn,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== Pn && (Pn && e.type === "mousemove" ? (Mn = e.screenX - Pn.screenX, Nn = e.screenY - Pn.screenY) : Nn = Mn = 0, Pn = e), Mn);
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : Nn;
		}
	}), In = Dn(Fn), Ln = Dn(j({}, Fn, { dataTransfer: 0 })), Rn = Dn(j({}, An, { relatedTarget: 0 })), H = Dn(j({}, On, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), zn = Dn(j({}, On, { clipboardData: function(e) {
		return "clipboardData" in e ? e.clipboardData : window.clipboardData;
	} })), U = Dn(j({}, On, { data: 0 })), Bn = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified"
	}, Vn = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta"
	}, Hn = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function Un(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = Hn[e]) ? !!t[e] : !1;
	}
	function Wn() {
		return Un;
	}
	var Gn = Dn(j({}, An, {
		key: function(e) {
			if (e.key) {
				var t = Bn[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress" ? (e = wn(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Vn[e.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: Wn,
		charCode: function(e) {
			return e.type === "keypress" ? wn(e) : 0;
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function(e) {
			return e.type === "keypress" ? wn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		}
	})), Kn = Dn(j({}, Fn, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	})), qn = Dn(j({}, An, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Wn
	})), Jn = Dn(j({}, On, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Yn = Dn(j({}, Fn, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), Xn = [
		9,
		13,
		27,
		32
	], Zn = c && "CompositionEvent" in window, Qn = null;
	c && "documentMode" in document && (Qn = document.documentMode);
	var $n = c && "TextEvent" in window && !Qn, er = c && (!Zn || Qn && 8 < Qn && 11 >= Qn), tr = " ", nr = !1;
	function rr(e, t) {
		switch (e) {
			case "keyup": return Xn.indexOf(t.keyCode) !== -1;
			case "keydown": return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function ir(e) {
		return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
	}
	var ar = !1;
	function or(e, t) {
		switch (e) {
			case "compositionend": return ir(t);
			case "keypress": return t.which === 32 ? (nr = !0, tr) : null;
			case "textInput": return e = t.data, e === tr && nr ? null : e;
			default: return null;
		}
	}
	function sr(e, t) {
		if (ar) return e === "compositionend" || !Zn && rr(e, t) ? (e = Cn(), Sn = xn = bn = null, ar = !1, e) : null;
		switch (e) {
			case "paste": return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend": return er && t.locale !== "ko" ? null : t.data;
			default: return null;
		}
	}
	var cr = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};
	function lr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!cr[e.type] : t === "textarea";
	}
	function ur(e, t, n, r) {
		qe(r), t = ui(t, "onChange"), 0 < t.length && (n = new kn("onChange", "change", null, n, r), e.push({
			event: n,
			listeners: t
		}));
	}
	var dr = null, fr = null;
	function pr(e) {
		ni(e, 0);
	}
	function mr(e) {
		if (ye(Ri(e))) return e;
	}
	function hr(e, t) {
		if (e === "change") return t;
	}
	var gr = !1;
	if (c) {
		var _r;
		if (c) {
			var vr = "oninput" in document;
			if (!vr) {
				var yr = document.createElement("div");
				yr.setAttribute("oninput", "return;"), vr = typeof yr.oninput == "function";
			}
			_r = vr;
		} else _r = !1;
		gr = _r && (!document.documentMode || 9 < document.documentMode);
	}
	function br() {
		dr && (dr.detachEvent("onpropertychange", xr), fr = dr = null);
	}
	function xr(e) {
		if (e.propertyName === "value" && mr(fr)) {
			var t = [];
			ur(t, fr, e, He(e)), Qe(pr, t);
		}
	}
	function Sr(e, t, n) {
		e === "focusin" ? (br(), dr = t, fr = n, dr.attachEvent("onpropertychange", xr)) : e === "focusout" && br();
	}
	function Cr(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown") return mr(fr);
	}
	function wr(e, t) {
		if (e === "click") return mr(t);
	}
	function Tr(e, t) {
		if (e === "input" || e === "change") return mr(t);
	}
	function Er(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var Dr = typeof Object.is == "function" ? Object.is : Er;
	function Or(e, t) {
		if (Dr(e, t)) return !0;
		if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
		var n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var i = n[r];
			if (!l.call(t, i) || !Dr(e[i], t[i])) return !1;
		}
		return !0;
	}
	function kr(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e;
	}
	function Ar(e, t) {
		var n = kr(e);
		e = 0;
		for (var r; n;) {
			if (n.nodeType === 3) {
				if (r = e + n.textContent.length, e <= t && r >= t) return {
					node: n,
					offset: t - e
				};
				e = r;
			}
			a: {
				for (; n;) {
					if (n.nextSibling) {
						n = n.nextSibling;
						break a;
					}
					n = n.parentNode;
				}
				n = void 0;
			}
			n = kr(n);
		}
	}
	function jr(e, t) {
		return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? jr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
	}
	function Mr() {
		for (var e = window, t = be(); t instanceof e.HTMLIFrameElement;) {
			try {
				var n = typeof t.contentWindow.location.href == "string";
			} catch {
				n = !1;
			}
			if (n) e = t.contentWindow;
			else break;
			t = be(e.document);
		}
		return t;
	}
	function Nr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
	}
	function W(e) {
		var t = Mr(), n = e.focusedElem, r = e.selectionRange;
		if (t !== n && n && n.ownerDocument && jr(n.ownerDocument.documentElement, n)) {
			if (r !== null && Nr(n)) {
				if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
				else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
					e = e.getSelection();
					var i = n.textContent.length, a = Math.min(r.start, i);
					r = r.end === void 0 ? a : Math.min(r.end, i), !e.extend && a > r && (i = r, r = a, a = i), i = Ar(n, a);
					var o = Ar(n, r);
					i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
				}
			}
			for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
				element: e,
				left: e.scrollLeft,
				top: e.scrollTop
			});
			for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
		}
	}
	var Pr = c && "documentMode" in document && 11 >= document.documentMode, Fr = null, Ir = null, G = null, Lr = !1;
	function Rr(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		Lr || Fr == null || Fr !== be(r) || (r = Fr, "selectionStart" in r && Nr(r) ? r = {
			start: r.selectionStart,
			end: r.selectionEnd
		} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
			anchorNode: r.anchorNode,
			anchorOffset: r.anchorOffset,
			focusNode: r.focusNode,
			focusOffset: r.focusOffset
		}), G && Or(G, r) || (G = r, r = ui(Ir, "onSelect"), 0 < r.length && (t = new kn("onSelect", "select", null, t, n), e.push({
			event: t,
			listeners: r
		}), t.target = Fr)));
	}
	function zr(e, t) {
		var n = {};
		return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
	}
	var Br = {
		animationend: zr("Animation", "AnimationEnd"),
		animationiteration: zr("Animation", "AnimationIteration"),
		animationstart: zr("Animation", "AnimationStart"),
		transitionend: zr("Transition", "TransitionEnd")
	}, Vr = {}, Hr = {};
	c && (Hr = document.createElement("div").style, "AnimationEvent" in window || (delete Br.animationend.animation, delete Br.animationiteration.animation, delete Br.animationstart.animation), "TransitionEvent" in window || delete Br.transitionend.transition);
	function Ur(e) {
		if (Vr[e]) return Vr[e];
		if (!Br[e]) return e;
		var t = Br[e], n;
		for (n in t) if (t.hasOwnProperty(n) && n in Hr) return Vr[e] = t[n];
		return e;
	}
	var Wr = Ur("animationend"), Gr = Ur("animationiteration"), Kr = Ur("animationstart"), qr = Ur("transitionend"), Jr = /* @__PURE__ */ new Map(), Yr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	function Xr(e, t) {
		Jr.set(e, t), o(t, [e]);
	}
	for (var Zr = 0; Zr < Yr.length; Zr++) {
		var Qr = Yr[Zr];
		Xr(Qr.toLowerCase(), "on" + (Qr[0].toUpperCase() + Qr.slice(1)));
	}
	Xr(Wr, "onAnimationEnd"), Xr(Gr, "onAnimationIteration"), Xr(Kr, "onAnimationStart"), Xr("dblclick", "onDoubleClick"), Xr("focusin", "onFocus"), Xr("focusout", "onBlur"), Xr(qr, "onTransitionEnd"), s("onMouseEnter", ["mouseout", "mouseover"]), s("onMouseLeave", ["mouseout", "mouseover"]), s("onPointerEnter", ["pointerout", "pointerover"]), s("onPointerLeave", ["pointerout", "pointerover"]), o("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), o("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), o("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]), o("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), o("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), o("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var $r = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ei = new Set("cancel close invalid load scroll toggle".split(" ").concat($r));
	function ti(e, t, n) {
		var r = e.type || "unknown-event";
		e.currentTarget = n, st(r, t, void 0, e), e.currentTarget = null;
	}
	function ni(e, t) {
		t = (t & 4) != 0;
		for (var n = 0; n < e.length; n++) {
			var r = e[n], i = r.event;
			r = r.listeners;
			a: {
				var a = void 0;
				if (t) for (var o = r.length - 1; 0 <= o; o--) {
					var s = r[o], c = s.instance, l = s.currentTarget;
					if (s = s.listener, c !== a && i.isPropagationStopped()) break a;
					ti(i, s, l), a = c;
				}
				else for (o = 0; o < r.length; o++) {
					if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
					ti(i, s, l), a = c;
				}
			}
		}
		if (it) throw e = L, it = !1, L = null, e;
	}
	function ri(e, t) {
		var n = t[Ni];
		n === void 0 && (n = t[Ni] = /* @__PURE__ */ new Set());
		var r = e + "__bubble";
		n.has(r) || (si(t, e, 2, !1), n.add(r));
	}
	function ii(e, t, n) {
		var r = 0;
		t && (r |= 4), si(n, e, r, t);
	}
	var ai = "_reactListening" + Math.random().toString(36).slice(2);
	function oi(e) {
		if (!e[ai]) {
			e[ai] = !0, i.forEach(function(t) {
				t !== "selectionchange" && (ei.has(t) || ii(t, !1, e), ii(t, !0, e));
			});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[ai] || (t[ai] = !0, ii("selectionchange", !1, t));
		}
	}
	function si(e, t, n, r) {
		switch (yn(t)) {
			case 1:
				var i = mn;
				break;
			case 4:
				i = hn;
				break;
			default: i = gn;
		}
		n = i.bind(null, t, n, e), i = void 0, !et || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
			capture: !0,
			passive: i
		}) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, { passive: i });
	}
	function ci(e, t, n, r, i) {
		var a = r;
		if (!(t & 1) && !(t & 2) && r !== null) a: for (;;) {
			if (r === null) return;
			var o = r.tag;
			if (o === 3 || o === 4) {
				var s = r.stateNode.containerInfo;
				if (s === i || s.nodeType === 8 && s.parentNode === i) break;
				if (o === 4) for (o = r.return; o !== null;) {
					var c = o.tag;
					if ((c === 3 || c === 4) && (c = o.stateNode.containerInfo, c === i || c.nodeType === 8 && c.parentNode === i)) return;
					o = o.return;
				}
				for (; s !== null;) {
					if (o = Ii(s), o === null) return;
					if (c = o.tag, c === 5 || c === 6) {
						r = a = o;
						continue a;
					}
					s = s.parentNode;
				}
			}
			r = r.return;
		}
		Qe(function() {
			var r = a, i = He(n), o = [];
			a: {
				var s = Jr.get(e);
				if (s !== void 0) {
					var c = kn, l = e;
					switch (e) {
						case "keypress": if (wn(n) === 0) break a;
						case "keydown":
						case "keyup":
							c = Gn;
							break;
						case "focusin":
							l = "focus", c = Rn;
							break;
						case "focusout":
							l = "blur", c = Rn;
							break;
						case "beforeblur":
						case "afterblur":
							c = Rn;
							break;
						case "click": if (n.button === 2) break a;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							c = In;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							c = Ln;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							c = qn;
							break;
						case Wr:
						case Gr:
						case Kr:
							c = H;
							break;
						case qr:
							c = Jn;
							break;
						case "scroll":
							c = jn;
							break;
						case "wheel":
							c = Yn;
							break;
						case "copy":
						case "cut":
						case "paste":
							c = zn;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup": c = Kn;
					}
					var u = (t & 4) != 0, d = !u && e === "scroll", f = u ? s === null ? null : s + "Capture" : s;
					u = [];
					for (var p = r, m; p !== null;) {
						m = p;
						var h = m.stateNode;
						if (m.tag === 5 && h !== null && (m = h, f !== null && (h = $e(p, f), h != null && u.push(li(p, h, m)))), d) break;
						p = p.return;
					}
					0 < u.length && (s = new c(s, l, null, n, i), o.push({
						event: s,
						listeners: u
					}));
				}
			}
			if (!(t & 7)) {
				a: {
					if (s = e === "mouseover" || e === "pointerover", c = e === "mouseout" || e === "pointerout", s && n !== Ve && (l = n.relatedTarget || n.fromElement) && (Ii(l) || l[Mi])) break a;
					if ((c || s) && (s = i.window === i ? i : (s = i.ownerDocument) ? s.defaultView || s.parentWindow : window, c ? (l = n.relatedTarget || n.toElement, c = r, l = l ? Ii(l) : null, l !== null && (d = ct(l), l !== d || l.tag !== 5 && l.tag !== 6) && (l = null)) : (c = null, l = r), c !== l)) {
						if (u = In, h = "onMouseLeave", f = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (u = Kn, h = "onPointerLeave", f = "onPointerEnter", p = "pointer"), d = c == null ? s : Ri(c), m = l == null ? s : Ri(l), s = new u(h, p + "leave", c, n, i), s.target = d, s.relatedTarget = m, h = null, Ii(i) === r && (u = new u(f, p + "enter", l, n, i), u.target = m, u.relatedTarget = d, h = u), d = h, c && l) b: {
							for (u = c, f = l, p = 0, m = u; m; m = di(m)) p++;
							for (m = 0, h = f; h; h = di(h)) m++;
							for (; 0 < p - m;) u = di(u), p--;
							for (; 0 < m - p;) f = di(f), m--;
							for (; p--;) {
								if (u === f || f !== null && u === f.alternate) break b;
								u = di(u), f = di(f);
							}
							u = null;
						}
						else u = null;
						c !== null && fi(o, s, c, u, !1), l !== null && d !== null && fi(o, d, l, u, !0);
					}
				}
				a: {
					if (s = r ? Ri(r) : window, c = s.nodeName && s.nodeName.toLowerCase(), c === "select" || c === "input" && s.type === "file") var g = hr;
					else if (lr(s)) if (gr) g = Tr;
					else {
						g = Cr;
						var _ = Sr;
					}
					else (c = s.nodeName) && c.toLowerCase() === "input" && (s.type === "checkbox" || s.type === "radio") && (g = wr);
					if (g &&= g(e, r)) {
						ur(o, g, n, i);
						break a;
					}
					_ && _(e, s, r), e === "focusout" && (_ = s._wrapperState) && _.controlled && s.type === "number" && Te(s, "number", s.value);
				}
				switch (_ = r ? Ri(r) : window, e) {
					case "focusin":
						(lr(_) || _.contentEditable === "true") && (Fr = _, Ir = r, G = null);
						break;
					case "focusout":
						G = Ir = Fr = null;
						break;
					case "mousedown":
						Lr = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						Lr = !1, Rr(o, n, i);
						break;
					case "selectionchange": if (Pr) break;
					case "keydown":
					case "keyup": Rr(o, n, i);
				}
				var v;
				if (Zn) b: {
					switch (e) {
						case "compositionstart":
							var y = "onCompositionStart";
							break b;
						case "compositionend":
							y = "onCompositionEnd";
							break b;
						case "compositionupdate":
							y = "onCompositionUpdate";
							break b;
					}
					y = void 0;
				}
				else ar ? rr(e, n) && (y = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (y = "onCompositionStart");
				y && (er && n.locale !== "ko" && (ar || y !== "onCompositionStart" ? y === "onCompositionEnd" && ar && (v = Cn()) : (bn = i, xn = "value" in bn ? bn.value : bn.textContent, ar = !0)), _ = ui(r, y), 0 < _.length && (y = new U(y, e, null, n, i), o.push({
					event: y,
					listeners: _
				}), v ? y.data = v : (v = ir(n), v !== null && (y.data = v)))), (v = $n ? or(e, n) : sr(e, n)) && (r = ui(r, "onBeforeInput"), 0 < r.length && (i = new U("onBeforeInput", "beforeinput", null, n, i), o.push({
					event: i,
					listeners: r
				}), i.data = v));
			}
			ni(o, t);
		});
	}
	function li(e, t, n) {
		return {
			instance: e,
			listener: t,
			currentTarget: n
		};
	}
	function ui(e, t) {
		for (var n = t + "Capture", r = []; e !== null;) {
			var i = e, a = i.stateNode;
			i.tag === 5 && a !== null && (i = a, a = $e(e, n), a != null && r.unshift(li(e, a, i)), a = $e(e, t), a != null && r.push(li(e, a, i))), e = e.return;
		}
		return r;
	}
	function di(e) {
		if (e === null) return null;
		do
			e = e.return;
		while (e && e.tag !== 5);
		return e || null;
	}
	function fi(e, t, n, r, i) {
		for (var a = t._reactName, o = []; n !== null && n !== r;) {
			var s = n, c = s.alternate, l = s.stateNode;
			if (c !== null && c === r) break;
			s.tag === 5 && l !== null && (s = l, i ? (c = $e(n, a), c != null && o.unshift(li(n, c, s))) : i || (c = $e(n, a), c != null && o.push(li(n, c, s)))), n = n.return;
		}
		o.length !== 0 && e.push({
			event: t,
			listeners: o
		});
	}
	var pi = /\r\n?/g, mi = /\u0000|\uFFFD/g;
	function hi(e) {
		return (typeof e == "string" ? e : "" + e).replace(pi, "\n").replace(mi, "");
	}
	function gi(e, t, n) {
		if (t = hi(t), hi(e) !== t && n) throw Error(r(425));
	}
	function _i() {}
	var vi = null, yi = null;
	function bi(e, t) {
		return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
	}
	var xi = typeof setTimeout == "function" ? setTimeout : void 0, Si = typeof clearTimeout == "function" ? clearTimeout : void 0, Ci = typeof Promise == "function" ? Promise : void 0, wi = typeof queueMicrotask == "function" ? queueMicrotask : Ci === void 0 ? xi : function(e) {
		return Ci.resolve(null).then(e).catch(Ti);
	};
	function Ti(e) {
		setTimeout(function() {
			throw e;
		});
	}
	function Ei(e, t) {
		var n = t, r = 0;
		do {
			var i = n.nextSibling;
			if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
				if (r === 0) {
					e.removeChild(i), dn(t);
					return;
				}
				r--;
			} else n !== "$" && n !== "$?" && n !== "$!" || r++;
			n = i;
		} while (n);
		dn(t);
	}
	function Di(e) {
		for (; e != null; e = e.nextSibling) {
			var t = e.nodeType;
			if (t === 1 || t === 3) break;
			if (t === 8) {
				if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
				if (t === "/$") return null;
			}
		}
		return e;
	}
	function Oi(e) {
		e = e.previousSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "$" || n === "$!" || n === "$?") {
					if (t === 0) return e;
					t--;
				} else n === "/$" && t++;
			}
			e = e.previousSibling;
		}
		return null;
	}
	var ki = Math.random().toString(36).slice(2), Ai = "__reactFiber$" + ki, ji = "__reactProps$" + ki, Mi = "__reactContainer$" + ki, Ni = "__reactEvents$" + ki, Pi = "__reactListeners$" + ki, Fi = "__reactHandles$" + ki;
	function Ii(e) {
		var t = e[Ai];
		if (t) return t;
		for (var n = e.parentNode; n;) {
			if (t = n[Mi] || n[Ai]) {
				if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Oi(e); e !== null;) {
					if (n = e[Ai]) return n;
					e = Oi(e);
				}
				return t;
			}
			e = n, n = e.parentNode;
		}
		return null;
	}
	function Li(e) {
		return e = e[Ai] || e[Mi], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
	}
	function Ri(e) {
		if (e.tag === 5 || e.tag === 6) return e.stateNode;
		throw Error(r(33));
	}
	function zi(e) {
		return e[ji] || null;
	}
	var Bi = [], Vi = -1;
	function Hi(e) {
		return { current: e };
	}
	function K(e) {
		0 > Vi || (e.current = Bi[Vi], Bi[Vi] = null, Vi--);
	}
	function Ui(e, t) {
		Vi++, Bi[Vi] = e.current, e.current = t;
	}
	var Wi = {}, Gi = Hi(Wi), Ki = Hi(!1), qi = Wi;
	function Ji(e, t) {
		var n = e.type.contextTypes;
		if (!n) return Wi;
		var r = e.stateNode;
		if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
		var i = {}, a;
		for (a in n) i[a] = t[a];
		return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
	}
	function Yi(e) {
		return e = e.childContextTypes, e != null;
	}
	function Xi() {
		K(Ki), K(Gi);
	}
	function Zi(e, t, n) {
		if (Gi.current !== Wi) throw Error(r(168));
		Ui(Gi, t), Ui(Ki, n);
	}
	function Qi(e, t, n) {
		var i = e.stateNode;
		if (t = t.childContextTypes, typeof i.getChildContext != "function") return n;
		for (var a in i = i.getChildContext(), i) if (!(a in t)) throw Error(r(108, me(e) || "Unknown", a));
		return j({}, n, i);
	}
	function $i(e) {
		return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Wi, qi = Gi.current, Ui(Gi, e), Ui(Ki, Ki.current), !0;
	}
	function ea(e, t, n) {
		var i = e.stateNode;
		if (!i) throw Error(r(169));
		n ? (e = Qi(e, t, qi), i.__reactInternalMemoizedMergedChildContext = e, K(Ki), K(Gi), Ui(Gi, e)) : K(Ki), Ui(Ki, n);
	}
	var ta = null, na = !1, ra = !1;
	function ia(e) {
		ta === null ? ta = [e] : ta.push(e);
	}
	function aa(e) {
		na = !0, ia(e);
	}
	function oa() {
		if (!ra && ta !== null) {
			ra = !0;
			var e = 0, t = V;
			try {
				var n = ta;
				for (V = 1; e < n.length; e++) {
					var r = n[e];
					do
						r = r(!0);
					while (r !== null);
				}
				ta = null, na = !1;
			} catch (t) {
				throw ta !== null && (ta = ta.slice(e + 1)), mt(vt, oa), t;
			} finally {
				V = t, ra = !1;
			}
		}
		return null;
	}
	var sa = [], ca = 0, la = null, ua = 0, da = [], fa = 0, pa = null, ma = 1, ha = "";
	function ga(e, t) {
		sa[ca++] = ua, sa[ca++] = la, la = e, ua = t;
	}
	function _a(e, t, n) {
		da[fa++] = ma, da[fa++] = ha, da[fa++] = pa, pa = e;
		var r = ma;
		e = ha;
		var i = 32 - B(r) - 1;
		r &= ~(1 << i), n += 1;
		var a = 32 - B(t) + i;
		if (30 < a) {
			var o = i - i % 5;
			a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, ma = 1 << 32 - B(t) + i | n << i | r, ha = a + e;
		} else ma = 1 << a | n << i | r, ha = e;
	}
	function va(e) {
		e.return !== null && (ga(e, 1), _a(e, 1, 0));
	}
	function ya(e) {
		for (; e === la;) la = sa[--ca], sa[ca] = null, ua = sa[--ca], sa[ca] = null;
		for (; e === pa;) pa = da[--fa], da[fa] = null, ha = da[--fa], da[fa] = null, ma = da[--fa], da[fa] = null;
	}
	var ba = null, xa = null, Sa = !1, Ca = null;
	function wa(e, t) {
		var n = Jl(5, null, null, 0);
		n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
	}
	function Ta(e, t) {
		switch (e.tag) {
			case 5:
				var n = e.type;
				return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t === null ? !1 : (e.stateNode = t, ba = e, xa = Di(t.firstChild), !0);
			case 6: return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t === null ? !1 : (e.stateNode = t, ba = e, xa = null, !0);
			case 13: return t = t.nodeType === 8 ? t : null, t === null ? !1 : (n = pa === null ? null : {
				id: ma,
				overflow: ha
			}, e.memoizedState = {
				dehydrated: t,
				treeContext: n,
				retryLane: 1073741824
			}, n = Jl(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ba = e, xa = null, !0);
			default: return !1;
		}
	}
	function Ea(e) {
		return (e.mode & 1) != 0 && (e.flags & 128) == 0;
	}
	function Da(e) {
		if (Sa) {
			var t = xa;
			if (t) {
				var n = t;
				if (!Ta(e, t)) {
					if (Ea(e)) throw Error(r(418));
					t = Di(n.nextSibling);
					var i = ba;
					t && Ta(e, t) ? wa(i, n) : (e.flags = e.flags & -4097 | 2, Sa = !1, ba = e);
				}
			} else {
				if (Ea(e)) throw Error(r(418));
				e.flags = e.flags & -4097 | 2, Sa = !1, ba = e;
			}
		}
	}
	function q(e) {
		for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
		ba = e;
	}
	function Oa(e) {
		if (e !== ba) return !1;
		if (!Sa) return q(e), Sa = !0, !1;
		var t;
		if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !bi(e.type, e.memoizedProps)), t &&= xa) {
			if (Ea(e)) throw ka(), Error(r(418));
			for (; t;) wa(e, t), t = Di(t.nextSibling);
		}
		if (q(e), e.tag === 13) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(r(317));
			a: {
				for (e = e.nextSibling, t = 0; e;) {
					if (e.nodeType === 8) {
						var n = e.data;
						if (n === "/$") {
							if (t === 0) {
								xa = Di(e.nextSibling);
								break a;
							}
							t--;
						} else n !== "$" && n !== "$!" && n !== "$?" || t++;
					}
					e = e.nextSibling;
				}
				xa = null;
			}
		} else xa = ba ? Di(e.stateNode.nextSibling) : null;
		return !0;
	}
	function ka() {
		for (var e = xa; e;) e = Di(e.nextSibling);
	}
	function Aa() {
		xa = ba = null, Sa = !1;
	}
	function ja(e) {
		Ca === null ? Ca = [e] : Ca.push(e);
	}
	var Ma = C.ReactCurrentBatchConfig;
	function Na(e, t, n) {
		if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
			if (n._owner) {
				if (n = n._owner, n) {
					if (n.tag !== 1) throw Error(r(309));
					var i = n.stateNode;
				}
				if (!i) throw Error(r(147, e));
				var a = i, o = "" + e;
				return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(e) {
					var t = a.refs;
					e === null ? delete t[o] : t[o] = e;
				}, t._stringRef = o, t);
			}
			if (typeof e != "string") throw Error(r(284));
			if (!n._owner) throw Error(r(290, e));
		}
		return e;
	}
	function Pa(e, t) {
		throw e = Object.prototype.toString.call(t), Error(r(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
	}
	function Fa(e) {
		var t = e._init;
		return t(e._payload);
	}
	function Ia(e) {
		function t(t, n) {
			if (e) {
				var r = t.deletions;
				r === null ? (t.deletions = [n], t.flags |= 16) : r.push(n);
			}
		}
		function n(n, r) {
			if (!e) return null;
			for (; r !== null;) t(n, r), r = r.sibling;
			return null;
		}
		function i(e, t) {
			for (e = /* @__PURE__ */ new Map(); t !== null;) t.key === null ? e.set(t.index, t) : e.set(t.key, t), t = t.sibling;
			return e;
		}
		function a(e, t) {
			return e = Zl(e, t), e.index = 0, e.sibling = null, e;
		}
		function o(t, n, r) {
			return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 2, n) : (r = r.index, r < n ? (t.flags |= 2, n) : r)) : (t.flags |= 1048576, n);
		}
		function s(t) {
			return e && t.alternate === null && (t.flags |= 2), t;
		}
		function c(e, t, n, r) {
			return t === null || t.tag !== 6 ? (t = tu(n, e.mode, r), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function l(e, t, n, r) {
			var i = n.type;
			return i === E ? d(e, t, n.props.children, r, n.key) : t !== null && (t.elementType === i || typeof i == "object" && i && i.$$typeof === A && Fa(i) === t.type) ? (r = a(t, n.props), r.ref = Na(e, t, n), r.return = e, r) : (r = Ql(n.type, n.key, n.props, null, e.mode, r), r.ref = Na(e, t, n), r.return = e, r);
		}
		function u(e, t, n, r) {
			return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = nu(n, e.mode, r), t.return = e, t) : (t = a(t, n.children || []), t.return = e, t);
		}
		function d(e, t, n, r, i) {
			return t === null || t.tag !== 7 ? (t = $l(n, e.mode, r, i), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function f(e, t, n) {
			if (typeof t == "string" && t !== "" || typeof t == "number") return t = tu("" + t, e.mode, n), t.return = e, t;
			if (typeof t == "object" && t) {
				switch (t.$$typeof) {
					case w: return n = Ql(t.type, t.key, t.props, null, e.mode, n), n.ref = Na(e, null, t), n.return = e, n;
					case T: return t = nu(t, e.mode, n), t.return = e, t;
					case A:
						var r = t._init;
						return f(e, r(t._payload), n);
				}
				if (Ee(t) || se(t)) return t = $l(t, e.mode, n, null), t.return = e, t;
				Pa(e, t);
			}
			return null;
		}
		function p(e, t, n, r) {
			var i = t === null ? null : t.key;
			if (typeof n == "string" && n !== "" || typeof n == "number") return i === null ? c(e, t, "" + n, r) : null;
			if (typeof n == "object" && n) {
				switch (n.$$typeof) {
					case w: return n.key === i ? l(e, t, n, r) : null;
					case T: return n.key === i ? u(e, t, n, r) : null;
					case A: return i = n._init, p(e, t, i(n._payload), r);
				}
				if (Ee(n) || se(n)) return i === null ? d(e, t, n, r, null) : null;
				Pa(e, n);
			}
			return null;
		}
		function m(e, t, n, r, i) {
			if (typeof r == "string" && r !== "" || typeof r == "number") return e = e.get(n) || null, c(t, e, "" + r, i);
			if (typeof r == "object" && r) {
				switch (r.$$typeof) {
					case w: return e = e.get(r.key === null ? n : r.key) || null, l(t, e, r, i);
					case T: return e = e.get(r.key === null ? n : r.key) || null, u(t, e, r, i);
					case A:
						var a = r._init;
						return m(e, t, n, a(r._payload), i);
				}
				if (Ee(r) || se(r)) return e = e.get(n) || null, d(t, e, r, i, null);
				Pa(t, r);
			}
			return null;
		}
		function h(r, a, s, c) {
			for (var l = null, u = null, d = a, h = a = 0, g = null; d !== null && h < s.length; h++) {
				d.index > h ? (g = d, d = null) : g = d.sibling;
				var _ = p(r, d, s[h], c);
				if (_ === null) {
					d === null && (d = g);
					break;
				}
				e && d && _.alternate === null && t(r, d), a = o(_, a, h), u === null ? l = _ : u.sibling = _, u = _, d = g;
			}
			if (h === s.length) return n(r, d), Sa && ga(r, h), l;
			if (d === null) {
				for (; h < s.length; h++) d = f(r, s[h], c), d !== null && (a = o(d, a, h), u === null ? l = d : u.sibling = d, u = d);
				return Sa && ga(r, h), l;
			}
			for (d = i(r, d); h < s.length; h++) g = m(d, r, h, s[h], c), g !== null && (e && g.alternate !== null && d.delete(g.key === null ? h : g.key), a = o(g, a, h), u === null ? l = g : u.sibling = g, u = g);
			return e && d.forEach(function(e) {
				return t(r, e);
			}), Sa && ga(r, h), l;
		}
		function g(a, s, c, l) {
			var u = se(c);
			if (typeof u != "function") throw Error(r(150));
			if (c = u.call(c), c == null) throw Error(r(151));
			for (var d = u = null, h = s, g = s = 0, _ = null, v = c.next(); h !== null && !v.done; g++, v = c.next()) {
				h.index > g ? (_ = h, h = null) : _ = h.sibling;
				var y = p(a, h, v.value, l);
				if (y === null) {
					h === null && (h = _);
					break;
				}
				e && h && y.alternate === null && t(a, h), s = o(y, s, g), d === null ? u = y : d.sibling = y, d = y, h = _;
			}
			if (v.done) return n(a, h), Sa && ga(a, g), u;
			if (h === null) {
				for (; !v.done; g++, v = c.next()) v = f(a, v.value, l), v !== null && (s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
				return Sa && ga(a, g), u;
			}
			for (h = i(a, h); !v.done; g++, v = c.next()) v = m(h, a, g, v.value, l), v !== null && (e && v.alternate !== null && h.delete(v.key === null ? g : v.key), s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
			return e && h.forEach(function(e) {
				return t(a, e);
			}), Sa && ga(a, g), u;
		}
		function _(e, r, i, o) {
			if (typeof i == "object" && i && i.type === E && i.key === null && (i = i.props.children), typeof i == "object" && i) {
				switch (i.$$typeof) {
					case w:
						a: {
							for (var c = i.key, l = r; l !== null;) {
								if (l.key === c) {
									if (c = i.type, c === E) {
										if (l.tag === 7) {
											n(e, l.sibling), r = a(l, i.props.children), r.return = e, e = r;
											break a;
										}
									} else if (l.elementType === c || typeof c == "object" && c && c.$$typeof === A && Fa(c) === l.type) {
										n(e, l.sibling), r = a(l, i.props), r.ref = Na(e, l, i), r.return = e, e = r;
										break a;
									}
									n(e, l);
									break;
								} else t(e, l);
								l = l.sibling;
							}
							i.type === E ? (r = $l(i.props.children, e.mode, o, i.key), r.return = e, e = r) : (o = Ql(i.type, i.key, i.props, null, e.mode, o), o.ref = Na(e, r, i), o.return = e, e = o);
						}
						return s(e);
					case T:
						a: {
							for (l = i.key; r !== null;) {
								if (r.key === l) if (r.tag === 4 && r.stateNode.containerInfo === i.containerInfo && r.stateNode.implementation === i.implementation) {
									n(e, r.sibling), r = a(r, i.children || []), r.return = e, e = r;
									break a;
								} else {
									n(e, r);
									break;
								}
								else t(e, r);
								r = r.sibling;
							}
							r = nu(i, e.mode, o), r.return = e, e = r;
						}
						return s(e);
					case A: return l = i._init, _(e, r, l(i._payload), o);
				}
				if (Ee(i)) return h(e, r, i, o);
				if (se(i)) return g(e, r, i, o);
				Pa(e, i);
			}
			return typeof i == "string" && i !== "" || typeof i == "number" ? (i = "" + i, r !== null && r.tag === 6 ? (n(e, r.sibling), r = a(r, i), r.return = e, e = r) : (n(e, r), r = tu(i, e.mode, o), r.return = e, e = r), s(e)) : n(e, r);
		}
		return _;
	}
	var La = Ia(!0), Ra = Ia(!1), za = Hi(null), Ba = null, Va = null, Ha = null;
	function Ua() {
		Ha = Va = Ba = null;
	}
	function Wa(e) {
		var t = za.current;
		K(za), e._currentValue = t;
	}
	function Ga(e, t, n) {
		for (; e !== null;) {
			var r = e.alternate;
			if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
			e = e.return;
		}
	}
	function Ka(e, t) {
		Ba = e, Ha = Va = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Ps = !0), e.firstContext = null);
	}
	function qa(e) {
		var t = e._currentValue;
		if (Ha !== e) if (e = {
			context: e,
			memoizedValue: t,
			next: null
		}, Va === null) {
			if (Ba === null) throw Error(r(308));
			Va = e, Ba.dependencies = {
				lanes: 0,
				firstContext: e
			};
		} else Va = Va.next = e;
		return t;
	}
	var Ja = null;
	function Ya(e) {
		Ja === null ? Ja = [e] : Ja.push(e);
	}
	function Xa(e, t, n, r) {
		var i = t.interleaved;
		return i === null ? (n.next = n, Ya(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Za(e, r);
	}
	function Za(e, t) {
		e.lanes |= t;
		var n = e.alternate;
		for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
		return n.tag === 3 ? n.stateNode : null;
	}
	var Qa = !1;
	function $a(e) {
		e.updateQueue = {
			baseState: e.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				interleaved: null,
				lanes: 0
			},
			effects: null
		};
	}
	function eo(e, t) {
		e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
			baseState: e.baseState,
			firstBaseUpdate: e.firstBaseUpdate,
			lastBaseUpdate: e.lastBaseUpdate,
			shared: e.shared,
			effects: e.effects
		});
	}
	function to(e, t) {
		return {
			eventTime: e,
			lane: t,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function no(e, t, n) {
		var r = e.updateQueue;
		if (r === null) return null;
		if (r = r.shared, Z & 2) {
			var i = r.pending;
			return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Za(e, n);
		}
		return i = r.interleaved, i === null ? (t.next = t, Ya(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Za(e, n);
	}
	function ro(e, t, n) {
		if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194240)) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, Bt(e, n);
		}
	}
	function io(e, t) {
		var n = e.updateQueue, r = e.alternate;
		if (r !== null && (r = r.updateQueue, n === r)) {
			var i = null, a = null;
			if (n = n.firstBaseUpdate, n !== null) {
				do {
					var o = {
						eventTime: n.eventTime,
						lane: n.lane,
						tag: n.tag,
						payload: n.payload,
						callback: n.callback,
						next: null
					};
					a === null ? i = a = o : a = a.next = o, n = n.next;
				} while (n !== null);
				a === null ? i = a = t : a = a.next = t;
			} else i = a = t;
			n = {
				baseState: r.baseState,
				firstBaseUpdate: i,
				lastBaseUpdate: a,
				shared: r.shared,
				effects: r.effects
			}, e.updateQueue = n;
			return;
		}
		e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
	}
	function ao(e, t, n, r) {
		var i = e.updateQueue;
		Qa = !1;
		var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending;
		if (s !== null) {
			i.shared.pending = null;
			var c = s, l = c.next;
			c.next = null, o === null ? a = l : o.next = l, o = c;
			var u = e.alternate;
			u !== null && (u = u.updateQueue, s = u.lastBaseUpdate, s !== o && (s === null ? u.firstBaseUpdate = l : s.next = l, u.lastBaseUpdate = c));
		}
		if (a !== null) {
			var d = i.baseState;
			o = 0, u = l = c = null, s = a;
			do {
				var f = s.lane, p = s.eventTime;
				if ((r & f) === f) {
					u !== null && (u = u.next = {
						eventTime: p,
						lane: 0,
						tag: s.tag,
						payload: s.payload,
						callback: s.callback,
						next: null
					});
					a: {
						var m = e, h = s;
						switch (f = t, p = n, h.tag) {
							case 1:
								if (m = h.payload, typeof m == "function") {
									d = m.call(p, d, f);
									break a;
								}
								d = m;
								break a;
							case 3: m.flags = m.flags & -65537 | 128;
							case 0:
								if (m = h.payload, f = typeof m == "function" ? m.call(p, d, f) : m, f == null) break a;
								d = j({}, d, f);
								break a;
							case 2: Qa = !0;
						}
					}
					s.callback !== null && s.lane !== 0 && (e.flags |= 64, f = i.effects, f === null ? i.effects = [s] : f.push(s));
				} else p = {
					eventTime: p,
					lane: f,
					tag: s.tag,
					payload: s.payload,
					callback: s.callback,
					next: null
				}, u === null ? (l = u = p, c = d) : u = u.next = p, o |= f;
				if (s = s.next, s === null) {
					if (s = i.shared.pending, s === null) break;
					f = s, s = f.next, f.next = null, i.lastBaseUpdate = f, i.shared.pending = null;
				}
			} while (1);
			if (u === null && (c = d), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = u, t = i.shared.interleaved, t !== null) {
				i = t;
				do
					o |= i.lane, i = i.next;
				while (i !== t);
			} else a === null && (i.shared.lanes = 0);
			Xc |= o, e.lanes = o, e.memoizedState = d;
		}
	}
	function oo(e, t, n) {
		if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
			var i = e[t], a = i.callback;
			if (a !== null) {
				if (i.callback = null, i = n, typeof a != "function") throw Error(r(191, a));
				a.call(i);
			}
		}
	}
	var so = {}, co = Hi(so), lo = Hi(so), uo = Hi(so);
	function fo(e) {
		if (e === so) throw Error(r(174));
		return e;
	}
	function po(e, t) {
		switch (Ui(uo, t), Ui(lo, e), Ui(co, so), e = t.nodeType, e) {
			case 9:
			case 11:
				t = (t = t.documentElement) ? t.namespaceURI : Me(null, "");
				break;
			default: e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Me(t, e);
		}
		K(co), Ui(co, t);
	}
	function mo() {
		K(co), K(lo), K(uo);
	}
	function ho(e) {
		fo(uo.current);
		var t = fo(co.current), n = Me(t, e.type);
		t !== n && (Ui(lo, e), Ui(co, n));
	}
	function go(e) {
		lo.current === e && (K(co), K(lo));
	}
	var _o = Hi(0);
	function vo(e) {
		for (var t = e; t !== null;) {
			if (t.tag === 13) {
				var n = t.memoizedState;
				if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
			} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
				if (t.flags & 128) return t;
			} else if (t.child !== null) {
				t.child.return = t, t = t.child;
				continue;
			}
			if (t === e) break;
			for (; t.sibling === null;) {
				if (t.return === null || t.return === e) return null;
				t = t.return;
			}
			t.sibling.return = t.return, t = t.sibling;
		}
		return null;
	}
	var yo = [];
	function bo() {
		for (var e = 0; e < yo.length; e++) yo[e]._workInProgressVersionPrimary = null;
		yo.length = 0;
	}
	var xo = C.ReactCurrentDispatcher, So = C.ReactCurrentBatchConfig, Co = 0, wo = null, To = null, Eo = null, Do = !1, Oo = !1, ko = 0, Ao = 0;
	function jo() {
		throw Error(r(321));
	}
	function Mo(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++) if (!Dr(e[n], t[n])) return !1;
		return !0;
	}
	function No(e, t, n, i, a, o) {
		if (Co = o, wo = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, xo.current = e === null || e.memoizedState === null ? ms : hs, e = n(i, a), Oo) {
			o = 0;
			do {
				if (Oo = !1, ko = 0, 25 <= o) throw Error(r(301));
				o += 1, Eo = To = null, t.updateQueue = null, xo.current = gs, e = n(i, a);
			} while (Oo);
		}
		if (xo.current = Y, t = To !== null && To.next !== null, Co = 0, Eo = To = wo = null, Do = !1, t) throw Error(r(300));
		return e;
	}
	function Po() {
		var e = ko !== 0;
		return ko = 0, e;
	}
	function Fo() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return Eo === null ? wo.memoizedState = Eo = e : Eo = Eo.next = e, Eo;
	}
	function Io() {
		if (To === null) {
			var e = wo.alternate;
			e = e === null ? null : e.memoizedState;
		} else e = To.next;
		var t = Eo === null ? wo.memoizedState : Eo.next;
		if (t !== null) Eo = t, To = e;
		else {
			if (e === null) throw Error(r(310));
			To = e, e = {
				memoizedState: To.memoizedState,
				baseState: To.baseState,
				baseQueue: To.baseQueue,
				queue: To.queue,
				next: null
			}, Eo === null ? wo.memoizedState = Eo = e : Eo = Eo.next = e;
		}
		return Eo;
	}
	function Lo(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function Ro(e) {
		var t = Io(), n = t.queue;
		if (n === null) throw Error(r(311));
		n.lastRenderedReducer = e;
		var i = To, a = i.baseQueue, o = n.pending;
		if (o !== null) {
			if (a !== null) {
				var s = a.next;
				a.next = o.next, o.next = s;
			}
			i.baseQueue = a = o, n.pending = null;
		}
		if (a !== null) {
			o = a.next, i = i.baseState;
			var c = s = null, l = null, u = o;
			do {
				var d = u.lane;
				if ((Co & d) === d) l !== null && (l = l.next = {
					lane: 0,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null
				}), i = u.hasEagerState ? u.eagerState : e(i, u.action);
				else {
					var f = {
						lane: d,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					};
					l === null ? (c = l = f, s = i) : l = l.next = f, wo.lanes |= d, Xc |= d;
				}
				u = u.next;
			} while (u !== null && u !== o);
			l === null ? s = i : l.next = c, Dr(i, t.memoizedState) || (Ps = !0), t.memoizedState = i, t.baseState = s, t.baseQueue = l, n.lastRenderedState = i;
		}
		if (e = n.interleaved, e !== null) {
			a = e;
			do
				o = a.lane, wo.lanes |= o, Xc |= o, a = a.next;
			while (a !== e);
		} else a === null && (n.lanes = 0);
		return [t.memoizedState, n.dispatch];
	}
	function zo(e) {
		var t = Io(), n = t.queue;
		if (n === null) throw Error(r(311));
		n.lastRenderedReducer = e;
		var i = n.dispatch, a = n.pending, o = t.memoizedState;
		if (a !== null) {
			n.pending = null;
			var s = a = a.next;
			do
				o = e(o, s.action), s = s.next;
			while (s !== a);
			Dr(o, t.memoizedState) || (Ps = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
		}
		return [o, i];
	}
	function Bo() {}
	function Vo(e, t) {
		var n = wo, i = Io(), a = t(), o = !Dr(i.memoizedState, a);
		if (o && (i.memoizedState = a, Ps = !0), i = i.queue, Qo(Wo.bind(null, n, i, e), [e]), i.getSnapshot !== t || o || Eo !== null && Eo.memoizedState.tag & 1) {
			if (n.flags |= 2048, Jo(9, Uo.bind(null, n, i, a, t), void 0, null), Uc === null) throw Error(r(349));
			Co & 30 || Ho(n, t, a);
		}
		return a;
	}
	function Ho(e, t, n) {
		e.flags |= 16384, e = {
			getSnapshot: t,
			value: n
		}, t = wo.updateQueue, t === null ? (t = {
			lastEffect: null,
			stores: null
		}, wo.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
	}
	function Uo(e, t, n, r) {
		t.value = n, t.getSnapshot = r, Go(t) && Ko(e);
	}
	function Wo(e, t, n) {
		return n(function() {
			Go(t) && Ko(e);
		});
	}
	function Go(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !Dr(e, n);
		} catch {
			return !0;
		}
	}
	function Ko(e) {
		var t = Za(e, 1);
		t !== null && gl(t, e, 1, -1);
	}
	function qo(e) {
		var t = Fo();
		return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Lo,
			lastRenderedState: e
		}, t.queue = e, e = e.dispatch = us.bind(null, wo, e), [t.memoizedState, e];
	}
	function Jo(e, t, n, r) {
		return e = {
			tag: e,
			create: t,
			destroy: n,
			deps: r,
			next: null
		}, t = wo.updateQueue, t === null ? (t = {
			lastEffect: null,
			stores: null
		}, wo.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
	}
	function Yo() {
		return Io().memoizedState;
	}
	function Xo(e, t, n, r) {
		var i = Fo();
		wo.flags |= e, i.memoizedState = Jo(1 | t, n, void 0, r === void 0 ? null : r);
	}
	function J(e, t, n, r) {
		var i = Io();
		r = r === void 0 ? null : r;
		var a = void 0;
		if (To !== null) {
			var o = To.memoizedState;
			if (a = o.destroy, r !== null && Mo(r, o.deps)) {
				i.memoizedState = Jo(t, n, a, r);
				return;
			}
		}
		wo.flags |= e, i.memoizedState = Jo(1 | t, n, a, r);
	}
	function Zo(e, t) {
		return Xo(8390656, 8, e, t);
	}
	function Qo(e, t) {
		return J(2048, 8, e, t);
	}
	function $o(e, t) {
		return J(4, 2, e, t);
	}
	function es(e, t) {
		return J(4, 4, e, t);
	}
	function ts(e, t) {
		if (typeof t == "function") return e = e(), t(e), function() {
			t(null);
		};
		if (t != null) return e = e(), t.current = e, function() {
			t.current = null;
		};
	}
	function ns(e, t, n) {
		return n = n == null ? null : n.concat([e]), J(4, 4, ts.bind(null, t, e), n);
	}
	function rs() {}
	function is(e, t) {
		var n = Io();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return r !== null && t !== null && Mo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
	}
	function as(e, t) {
		var n = Io();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return r !== null && t !== null && Mo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
	}
	function os(e, t, n) {
		return Co & 21 ? (Dr(n, t) || (n = It(), wo.lanes |= n, Xc |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ps = !0), e.memoizedState = n);
	}
	function ss(e, t) {
		var n = V;
		V = n !== 0 && 4 > n ? n : 4, e(!0);
		var r = So.transition;
		So.transition = {};
		try {
			e(!1), t();
		} finally {
			V = n, So.transition = r;
		}
	}
	function cs() {
		return Io().memoizedState;
	}
	function ls(e, t, n) {
		var r = hl(e);
		if (n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, ds(e)) fs(t, n);
		else if (n = Xa(e, t, n, r), n !== null) {
			var i = ml();
			gl(n, e, r, i), ps(n, t, r);
		}
	}
	function us(e, t, n) {
		var r = hl(e), i = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (ds(e)) fs(t, i);
		else {
			var a = e.alternate;
			if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
				var o = t.lastRenderedState, s = a(o, n);
				if (i.hasEagerState = !0, i.eagerState = s, Dr(s, o)) {
					var c = t.interleaved;
					c === null ? (i.next = i, Ya(t)) : (i.next = c.next, c.next = i), t.interleaved = i;
					return;
				}
			} catch {}
			n = Xa(e, t, i, r), n !== null && (i = ml(), gl(n, e, r, i), ps(n, t, r));
		}
	}
	function ds(e) {
		var t = e.alternate;
		return e === wo || t !== null && t === wo;
	}
	function fs(e, t) {
		Oo = Do = !0;
		var n = e.pending;
		n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
	}
	function ps(e, t, n) {
		if (n & 4194240) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, Bt(e, n);
		}
	}
	var Y = {
		readContext: qa,
		useCallback: jo,
		useContext: jo,
		useEffect: jo,
		useImperativeHandle: jo,
		useInsertionEffect: jo,
		useLayoutEffect: jo,
		useMemo: jo,
		useReducer: jo,
		useRef: jo,
		useState: jo,
		useDebugValue: jo,
		useDeferredValue: jo,
		useTransition: jo,
		useMutableSource: jo,
		useSyncExternalStore: jo,
		useId: jo,
		unstable_isNewReconciler: !1
	}, ms = {
		readContext: qa,
		useCallback: function(e, t) {
			return Fo().memoizedState = [e, t === void 0 ? null : t], e;
		},
		useContext: qa,
		useEffect: Zo,
		useImperativeHandle: function(e, t, n) {
			return n = n == null ? null : n.concat([e]), Xo(4194308, 4, ts.bind(null, t, e), n);
		},
		useLayoutEffect: function(e, t) {
			return Xo(4194308, 4, e, t);
		},
		useInsertionEffect: function(e, t) {
			return Xo(4, 2, e, t);
		},
		useMemo: function(e, t) {
			var n = Fo();
			return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
		},
		useReducer: function(e, t, n) {
			var r = Fo();
			return t = n === void 0 ? t : n(t), r.memoizedState = r.baseState = t, e = {
				pending: null,
				interleaved: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: t
			}, r.queue = e, e = e.dispatch = ls.bind(null, wo, e), [r.memoizedState, e];
		},
		useRef: function(e) {
			var t = Fo();
			return e = { current: e }, t.memoizedState = e;
		},
		useState: qo,
		useDebugValue: rs,
		useDeferredValue: function(e) {
			return Fo().memoizedState = e;
		},
		useTransition: function() {
			var e = qo(!1), t = e[0];
			return e = ss.bind(null, e[1]), Fo().memoizedState = e, [t, e];
		},
		useMutableSource: function() {},
		useSyncExternalStore: function(e, t, n) {
			var i = wo, a = Fo();
			if (Sa) {
				if (n === void 0) throw Error(r(407));
				n = n();
			} else {
				if (n = t(), Uc === null) throw Error(r(349));
				Co & 30 || Ho(i, t, n);
			}
			a.memoizedState = n;
			var o = {
				value: n,
				getSnapshot: t
			};
			return a.queue = o, Zo(Wo.bind(null, i, o, e), [e]), i.flags |= 2048, Jo(9, Uo.bind(null, i, o, n, t), void 0, null), n;
		},
		useId: function() {
			var e = Fo(), t = Uc.identifierPrefix;
			if (Sa) {
				var n = ha, r = ma;
				n = (r & ~(1 << 32 - B(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ko++, 0 < n && (t += "H" + n.toString(32)), t += ":";
			} else n = Ao++, t = ":" + t + "r" + n.toString(32) + ":";
			return e.memoizedState = t;
		},
		unstable_isNewReconciler: !1
	}, hs = {
		readContext: qa,
		useCallback: is,
		useContext: qa,
		useEffect: Qo,
		useImperativeHandle: ns,
		useInsertionEffect: $o,
		useLayoutEffect: es,
		useMemo: as,
		useReducer: Ro,
		useRef: Yo,
		useState: function() {
			return Ro(Lo);
		},
		useDebugValue: rs,
		useDeferredValue: function(e) {
			return os(Io(), To.memoizedState, e);
		},
		useTransition: function() {
			return [Ro(Lo)[0], Io().memoizedState];
		},
		useMutableSource: Bo,
		useSyncExternalStore: Vo,
		useId: cs,
		unstable_isNewReconciler: !1
	}, gs = {
		readContext: qa,
		useCallback: is,
		useContext: qa,
		useEffect: Qo,
		useImperativeHandle: ns,
		useInsertionEffect: $o,
		useLayoutEffect: es,
		useMemo: as,
		useReducer: zo,
		useRef: Yo,
		useState: function() {
			return zo(Lo);
		},
		useDebugValue: rs,
		useDeferredValue: function(e) {
			var t = Io();
			return To === null ? t.memoizedState = e : os(t, To.memoizedState, e);
		},
		useTransition: function() {
			return [zo(Lo)[0], Io().memoizedState];
		},
		useMutableSource: Bo,
		useSyncExternalStore: Vo,
		useId: cs,
		unstable_isNewReconciler: !1
	};
	function _s(e, t) {
		if (e && e.defaultProps) {
			for (var n in t = j({}, t), e = e.defaultProps, e) t[n] === void 0 && (t[n] = e[n]);
			return t;
		}
		return t;
	}
	function vs(e, t, n, r) {
		t = e.memoizedState, n = n(r, t), n = n == null ? t : j({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var ys = {
		isMounted: function(e) {
			return (e = e._reactInternals) ? ct(e) === e : !1;
		},
		enqueueSetState: function(e, t, n) {
			e = e._reactInternals;
			var r = ml(), i = hl(e), a = to(r, i);
			a.payload = t, n != null && (a.callback = n), t = no(e, a, i), t !== null && (gl(t, e, i, r), ro(t, e, i));
		},
		enqueueReplaceState: function(e, t, n) {
			e = e._reactInternals;
			var r = ml(), i = hl(e), a = to(r, i);
			a.tag = 1, a.payload = t, n != null && (a.callback = n), t = no(e, a, i), t !== null && (gl(t, e, i, r), ro(t, e, i));
		},
		enqueueForceUpdate: function(e, t) {
			e = e._reactInternals;
			var n = ml(), r = hl(e), i = to(n, r);
			i.tag = 2, t != null && (i.callback = t), t = no(e, i, r), t !== null && (gl(t, e, r, n), ro(t, e, r));
		}
	};
	function bs(e, t, n, r, i, a, o) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Or(n, r) || !Or(i, a) : !0;
	}
	function xs(e, t, n) {
		var r = !1, i = Wi, a = t.contextType;
		return typeof a == "object" && a ? a = qa(a) : (i = Yi(t) ? qi : Gi.current, r = t.contextTypes, a = (r = r != null) ? Ji(e, i) : Wi), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ys, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t;
	}
	function Ss(e, t, n, r) {
		e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ys.enqueueReplaceState(t, t.state, null);
	}
	function Cs(e, t, n, r) {
		var i = e.stateNode;
		i.props = n, i.state = e.memoizedState, i.refs = {}, $a(e);
		var a = t.contextType;
		typeof a == "object" && a ? i.context = qa(a) : (a = Yi(t) ? qi : Gi.current, i.context = Ji(e, a)), i.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (vs(e, t, a, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && ys.enqueueReplaceState(i, i.state, null), ao(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
	}
	function ws(e, t) {
		try {
			var n = "", r = t;
			do
				n += fe(r), r = r.return;
			while (r);
			var i = n;
		} catch (e) {
			i = "\nError generating stack: " + e.message + "\n" + e.stack;
		}
		return {
			value: e,
			source: t,
			stack: i,
			digest: null
		};
	}
	function Ts(e, t, n) {
		return {
			value: e,
			source: null,
			stack: n ?? null,
			digest: t ?? null
		};
	}
	function Es(e, t) {
		try {
			console.error(t.value);
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	var Ds = typeof WeakMap == "function" ? WeakMap : Map;
	function Os(e, t, n) {
		n = to(-1, n), n.tag = 3, n.payload = { element: null };
		var r = t.value;
		return n.callback = function() {
			il || (il = !0, al = r), Es(e, t);
		}, n;
	}
	function ks(e, t, n) {
		n = to(-1, n), n.tag = 3;
		var r = e.type.getDerivedStateFromError;
		if (typeof r == "function") {
			var i = t.value;
			n.payload = function() {
				return r(i);
			}, n.callback = function() {
				Es(e, t);
			};
		}
		var a = e.stateNode;
		return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
			Es(e, t), typeof r != "function" && (ol === null ? ol = new Set([this]) : ol.add(this));
			var n = t.stack;
			this.componentDidCatch(t.value, { componentStack: n === null ? "" : n });
		}), n;
	}
	function As(e, t, n) {
		var r = e.pingCache;
		if (r === null) {
			r = e.pingCache = new Ds();
			var i = /* @__PURE__ */ new Set();
			r.set(t, i);
		} else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
		i.has(n) || (i.add(n), e = Vl.bind(null, e, t, n), t.then(e, e));
	}
	function js(e) {
		do {
			var t;
			if ((t = e.tag === 13) && (t = e.memoizedState, t = t === null ? !0 : t.dehydrated !== null), t) return e;
			e = e.return;
		} while (e !== null);
		return null;
	}
	function Ms(e, t, n, r, i) {
		return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = to(-1, 1), t.tag = 2, no(n, t, 1))), n.lanes |= 1), e);
	}
	var Ns = C.ReactCurrentOwner, Ps = !1;
	function Fs(e, t, n, r) {
		t.child = e === null ? Ra(t, null, n, r) : La(t, e.child, n, r);
	}
	function Is(e, t, n, r, i) {
		n = n.render;
		var a = t.ref;
		return Ka(t, i), r = No(e, t, n, r, a, i), n = Po(), e !== null && !Ps ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, nc(e, t, i)) : (Sa && n && va(t), t.flags |= 1, Fs(e, t, r, i), t.child);
	}
	function Ls(e, t, n, r, i) {
		if (e === null) {
			var a = n.type;
			return typeof a == "function" && !Yl(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Rs(e, t, a, r, i)) : (e = Ql(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
		}
		if (a = e.child, (e.lanes & i) === 0) {
			var o = a.memoizedProps;
			if (n = n.compare, n = n === null ? Or : n, n(o, r) && e.ref === t.ref) return nc(e, t, i);
		}
		return t.flags |= 1, e = Zl(a, r), e.ref = t.ref, e.return = t, t.child = e;
	}
	function Rs(e, t, n, r, i) {
		if (e !== null) {
			var a = e.memoizedProps;
			if (Or(a, r) && e.ref === t.ref) if (Ps = !1, t.pendingProps = r = a, (e.lanes & i) !== 0) e.flags & 131072 && (Ps = !0);
			else return t.lanes = e.lanes, nc(e, t, i);
		}
		return Vs(e, t, n, r, i);
	}
	function zs(e, t, n) {
		var r = t.pendingProps, i = r.children, a = e === null ? null : e.memoizedState;
		if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
			baseLanes: 0,
			cachePool: null,
			transitions: null
		}, Ui(qc, Kc), Kc |= n;
		else {
			if (!(n & 1073741824)) return e = a === null ? n : a.baseLanes | n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
				baseLanes: e,
				cachePool: null,
				transitions: null
			}, t.updateQueue = null, Ui(qc, Kc), Kc |= e, null;
			t.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null
			}, r = a === null ? n : a.baseLanes, Ui(qc, Kc), Kc |= r;
		}
		else a === null ? r = n : (r = a.baseLanes | n, t.memoizedState = null), Ui(qc, Kc), Kc |= r;
		return Fs(e, t, i, n), t.child;
	}
	function Bs(e, t) {
		var n = t.ref;
		(e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
	}
	function Vs(e, t, n, r, i) {
		var a = Yi(n) ? qi : Gi.current;
		return a = Ji(t, a), Ka(t, i), n = No(e, t, n, r, a, i), r = Po(), e !== null && !Ps ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, nc(e, t, i)) : (Sa && r && va(t), t.flags |= 1, Fs(e, t, n, i), t.child);
	}
	function Hs(e, t, n, r, i) {
		if (Yi(n)) {
			var a = !0;
			$i(t);
		} else a = !1;
		if (Ka(t, i), t.stateNode === null) tc(e, t), xs(t, n, r), Cs(t, n, r, i), r = !0;
		else if (e === null) {
			var o = t.stateNode, s = t.memoizedProps;
			o.props = s;
			var c = o.context, l = n.contextType;
			typeof l == "object" && l ? l = qa(l) : (l = Yi(n) ? qi : Gi.current, l = Ji(t, l));
			var u = n.getDerivedStateFromProps, d = typeof u == "function" || typeof o.getSnapshotBeforeUpdate == "function";
			d || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== r || c !== l) && Ss(t, o, r, l), Qa = !1;
			var f = t.memoizedState;
			o.state = f, ao(t, r, o, i), c = t.memoizedState, s !== r || f !== c || Ki.current || Qa ? (typeof u == "function" && (vs(t, n, u, r), c = t.memoizedState), (s = Qa || bs(t, n, s, r, f, c, l)) ? (d || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), o.props = r, o.state = c, o.context = l, r = s) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
		} else {
			o = t.stateNode, eo(e, t), s = t.memoizedProps, l = t.type === t.elementType ? s : _s(t.type, s), o.props = l, d = t.pendingProps, f = o.context, c = n.contextType, typeof c == "object" && c ? c = qa(c) : (c = Yi(n) ? qi : Gi.current, c = Ji(t, c));
			var p = n.getDerivedStateFromProps;
			(u = typeof p == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== d || f !== c) && Ss(t, o, r, c), Qa = !1, f = t.memoizedState, o.state = f, ao(t, r, o, i);
			var m = t.memoizedState;
			s !== d || f !== m || Ki.current || Qa ? (typeof p == "function" && (vs(t, n, p, r), m = t.memoizedState), (l = Qa || bs(t, n, l, r, f, m, c) || !1) ? (u || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, m, c), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, m, c)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = m), o.props = r, o.state = m, o.context = c, r = l) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
		}
		return Us(e, t, n, r, a, i);
	}
	function Us(e, t, n, r, i, a) {
		Bs(e, t);
		var o = (t.flags & 128) != 0;
		if (!r && !o) return i && ea(t, n, !1), nc(e, t, a);
		r = t.stateNode, Ns.current = t;
		var s = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
		return t.flags |= 1, e !== null && o ? (t.child = La(t, e.child, null, a), t.child = La(t, null, s, a)) : Fs(e, t, s, a), t.memoizedState = r.state, i && ea(t, n, !0), t.child;
	}
	function Ws(e) {
		var t = e.stateNode;
		t.pendingContext ? Zi(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Zi(e, t.context, !1), po(e, t.containerInfo);
	}
	function Gs(e, t, n, r, i) {
		return Aa(), ja(i), t.flags |= 256, Fs(e, t, n, r), t.child;
	}
	var Ks = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0
	};
	function qs(e) {
		return {
			baseLanes: e,
			cachePool: null,
			transitions: null
		};
	}
	function Js(e, t, n) {
		var r = t.pendingProps, i = _o.current, a = !1, o = (t.flags & 128) != 0, s;
		if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (i & 2) != 0), s ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), Ui(_o, i & 1), e === null) return Da(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = {
			mode: "hidden",
			children: o
		}, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = eu(o, r, 0, null), e = $l(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = qs(n), t.memoizedState = Ks, e) : Ys(t, o));
		if (i = e.memoizedState, i !== null && (s = i.dehydrated, s !== null)) return Zs(e, t, o, r, s, i, n);
		if (a) {
			a = r.fallback, o = t.mode, i = e.child, s = i.sibling;
			var c = {
				mode: "hidden",
				children: r.children
			};
			return !(o & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = Zl(i, c), r.subtreeFlags = i.subtreeFlags & 14680064), s === null ? (a = $l(a, o, n, null), a.flags |= 2) : a = Zl(s, a), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? qs(n) : {
				baseLanes: o.baseLanes | n,
				cachePool: null,
				transitions: o.transitions
			}, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = Ks, r;
		}
		return a = e.child, e = a.sibling, r = Zl(a, {
			mode: "visible",
			children: r.children
		}), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
	}
	function Ys(e, t) {
		return t = eu({
			mode: "visible",
			children: t
		}, e.mode, 0, null), t.return = e, e.child = t;
	}
	function Xs(e, t, n, r) {
		return r !== null && ja(r), La(t, e.child, null, n), e = Ys(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
	}
	function Zs(e, t, n, i, a, o, s) {
		if (n) return t.flags & 256 ? (t.flags &= -257, i = Ts(Error(r(422))), Xs(e, t, s, i)) : t.memoizedState === null ? (o = i.fallback, a = t.mode, i = eu({
			mode: "visible",
			children: i.children
		}, a, 0, null), o = $l(o, a, s, null), o.flags |= 2, i.return = t, o.return = t, i.sibling = o, t.child = i, t.mode & 1 && La(t, e.child, null, s), t.child.memoizedState = qs(s), t.memoizedState = Ks, o) : (t.child = e.child, t.flags |= 128, null);
		if (!(t.mode & 1)) return Xs(e, t, s, null);
		if (a.data === "$!") {
			if (i = a.nextSibling && a.nextSibling.dataset, i) var c = i.dgst;
			return i = c, o = Error(r(419)), i = Ts(o, i, void 0), Xs(e, t, s, i);
		}
		if (c = (s & e.childLanes) !== 0, Ps || c) {
			if (i = Uc, i !== null) {
				switch (s & -s) {
					case 4:
						a = 2;
						break;
					case 16:
						a = 8;
						break;
					case 64:
					case 128:
					case 256:
					case 512:
					case 1024:
					case 2048:
					case 4096:
					case 8192:
					case 16384:
					case 32768:
					case 65536:
					case 131072:
					case 262144:
					case 524288:
					case 1048576:
					case 2097152:
					case 4194304:
					case 8388608:
					case 16777216:
					case 33554432:
					case 67108864:
						a = 32;
						break;
					case 536870912:
						a = 268435456;
						break;
					default: a = 0;
				}
				a = (a & (i.suspendedLanes | s)) === 0 ? a : 0, a !== 0 && a !== o.retryLane && (o.retryLane = a, Za(e, a), gl(i, e, a, -1));
			}
			return Al(), i = Ts(Error(r(421))), Xs(e, t, s, i);
		}
		return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Ul.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, xa = Di(a.nextSibling), ba = t, Sa = !0, Ca = null, e !== null && (da[fa++] = ma, da[fa++] = ha, da[fa++] = pa, ma = e.id, ha = e.overflow, pa = t), t = Ys(t, i.children), t.flags |= 4096, t);
	}
	function Qs(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		r !== null && (r.lanes |= t), Ga(e.return, t, n);
	}
	function $s(e, t, n, r, i) {
		var a = e.memoizedState;
		a === null ? e.memoizedState = {
			isBackwards: t,
			rendering: null,
			renderingStartTime: 0,
			last: r,
			tail: n,
			tailMode: i
		} : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = i);
	}
	function ec(e, t, n) {
		var r = t.pendingProps, i = r.revealOrder, a = r.tail;
		if (Fs(e, t, r.children, n), r = _o.current, r & 2) r = r & 1 | 2, t.flags |= 128;
		else {
			if (e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
				if (e.tag === 13) e.memoizedState !== null && Qs(e, n, t);
				else if (e.tag === 19) Qs(e, n, t);
				else if (e.child !== null) {
					e.child.return = e, e = e.child;
					continue;
				}
				if (e === t) break a;
				for (; e.sibling === null;) {
					if (e.return === null || e.return === t) break a;
					e = e.return;
				}
				e.sibling.return = e.return, e = e.sibling;
			}
			r &= 1;
		}
		if (Ui(_o, r), !(t.mode & 1)) t.memoizedState = null;
		else switch (i) {
			case "forwards":
				for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && vo(e) === null && (i = n), n = n.sibling;
				n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), $s(t, !1, i, n, a);
				break;
			case "backwards":
				for (n = null, i = t.child, t.child = null; i !== null;) {
					if (e = i.alternate, e !== null && vo(e) === null) {
						t.child = i;
						break;
					}
					e = i.sibling, i.sibling = n, n = i, i = e;
				}
				$s(t, !0, n, null, a);
				break;
			case "together":
				$s(t, !1, null, null, void 0);
				break;
			default: t.memoizedState = null;
		}
		return t.child;
	}
	function tc(e, t) {
		!(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
	}
	function nc(e, t, n) {
		if (e !== null && (t.dependencies = e.dependencies), Xc |= t.lanes, (n & t.childLanes) === 0) return null;
		if (e !== null && t.child !== e.child) throw Error(r(153));
		if (t.child !== null) {
			for (e = t.child, n = Zl(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Zl(e, e.pendingProps), n.return = t;
			n.sibling = null;
		}
		return t.child;
	}
	function rc(e, t, n) {
		switch (t.tag) {
			case 3:
				Ws(t), Aa();
				break;
			case 5:
				ho(t);
				break;
			case 1:
				Yi(t.type) && $i(t);
				break;
			case 4:
				po(t, t.stateNode.containerInfo);
				break;
			case 10:
				var r = t.type._context, i = t.memoizedProps.value;
				Ui(za, r._currentValue), r._currentValue = i;
				break;
			case 13:
				if (r = t.memoizedState, r !== null) return r.dehydrated === null ? (n & t.child.childLanes) === 0 ? (Ui(_o, _o.current & 1), e = nc(e, t, n), e === null ? null : e.sibling) : Js(e, t, n) : (Ui(_o, _o.current & 1), t.flags |= 128, null);
				Ui(_o, _o.current & 1);
				break;
			case 19:
				if (r = (n & t.childLanes) !== 0, e.flags & 128) {
					if (r) return ec(e, t, n);
					t.flags |= 128;
				}
				if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Ui(_o, _o.current), r) break;
				return null;
			case 22:
			case 23: return t.lanes = 0, zs(e, t, n);
		}
		return nc(e, t, n);
	}
	var ic = function(e, t) {
		for (var n = t.child; n !== null;) {
			if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
			else if (n.tag !== 4 && n.child !== null) {
				n.child.return = n, n = n.child;
				continue;
			}
			if (n === t) break;
			for (; n.sibling === null;) {
				if (n.return === null || n.return === t) return;
				n = n.return;
			}
			n.sibling.return = n.return, n = n.sibling;
		}
	}, ac = function(e, t, n, r) {
		var i = e.memoizedProps;
		if (i !== r) {
			e = t.stateNode, fo(co.current);
			var o = null;
			switch (n) {
				case "input":
					i = xe(e, i), r = xe(e, r), o = [];
					break;
				case "select":
					i = j({}, i, { value: void 0 }), r = j({}, r, { value: void 0 }), o = [];
					break;
				case "textarea":
					i = De(e, i), r = De(e, r), o = [];
					break;
				default: typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = _i);
			}
			ze(n, r);
			var s;
			for (u in n = null, i) if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) if (u === "style") {
				var c = i[u];
				for (s in c) c.hasOwnProperty(s) && (n ||= {}, n[s] = "");
			} else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (a.hasOwnProperty(u) ? o ||= [] : (o ||= []).push(u, null));
			for (u in r) {
				var l = r[u];
				if (c = i?.[u], r.hasOwnProperty(u) && l !== c && (l != null || c != null)) if (u === "style") if (c) {
					for (s in c) !c.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n ||= {}, n[s] = "");
					for (s in l) l.hasOwnProperty(s) && c[s] !== l[s] && (n ||= {}, n[s] = l[s]);
				} else n || (o ||= [], o.push(u, n)), n = l;
				else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, c = c ? c.__html : void 0, l != null && c !== l && (o ||= []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (o ||= []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (a.hasOwnProperty(u) ? (l != null && u === "onScroll" && ri("scroll", e), o || c === l || (o = [])) : (o ||= []).push(u, l));
			}
			n && (o ||= []).push("style", n);
			var u = o;
			(t.updateQueue = u) && (t.flags |= 4);
		}
	}, oc = function(e, t, n, r) {
		n !== r && (t.flags |= 4);
	};
	function sc(e, t) {
		if (!Sa) switch (e.tailMode) {
			case "hidden":
				t = e.tail;
				for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
				n === null ? e.tail = null : n.sibling = null;
				break;
			case "collapsed":
				n = e.tail;
				for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
				r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
		}
	}
	function cc(e) {
		var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
		if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
		else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
		return e.subtreeFlags |= r, e.childLanes = n, t;
	}
	function lc(e, t, n) {
		var i = t.pendingProps;
		switch (ya(t), t.tag) {
			case 2:
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return cc(t), null;
			case 1: return Yi(t.type) && Xi(), cc(t), null;
			case 3: return i = t.stateNode, mo(), K(Ki), K(Gi), bo(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (Oa(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ca !== null && (bl(Ca), Ca = null))), cc(t), null;
			case 5:
				go(t);
				var o = fo(uo.current);
				if (n = t.type, e !== null && t.stateNode != null) ac(e, t, n, i, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
				else {
					if (!i) {
						if (t.stateNode === null) throw Error(r(166));
						return cc(t), null;
					}
					if (e = fo(co.current), Oa(t)) {
						i = t.stateNode, n = t.type;
						var s = t.memoizedProps;
						switch (i[Ai] = t, i[ji] = s, e = (t.mode & 1) != 0, n) {
							case "dialog":
								ri("cancel", i), ri("close", i);
								break;
							case "iframe":
							case "object":
							case "embed":
								ri("load", i);
								break;
							case "video":
							case "audio":
								for (o = 0; o < $r.length; o++) ri($r[o], i);
								break;
							case "source":
								ri("error", i);
								break;
							case "img":
							case "image":
							case "link":
								ri("error", i), ri("load", i);
								break;
							case "details":
								ri("toggle", i);
								break;
							case "input":
								M(i, s), ri("invalid", i);
								break;
							case "select":
								i._wrapperState = { wasMultiple: !!s.multiple }, ri("invalid", i);
								break;
							case "textarea": Oe(i, s), ri("invalid", i);
						}
						for (var c in ze(n, s), o = null, s) if (s.hasOwnProperty(c)) {
							var l = s[c];
							c === "children" ? typeof l == "string" ? i.textContent !== l && (!0 !== s.suppressHydrationWarning && gi(i.textContent, l, e), o = ["children", l]) : typeof l == "number" && i.textContent !== "" + l && (!0 !== s.suppressHydrationWarning && gi(i.textContent, l, e), o = ["children", "" + l]) : a.hasOwnProperty(c) && l != null && c === "onScroll" && ri("scroll", i);
						}
						switch (n) {
							case "input":
								ve(i), we(i, s, !0);
								break;
							case "textarea":
								ve(i), Ae(i);
								break;
							case "select":
							case "option": break;
							default: typeof s.onClick == "function" && (i.onclick = _i);
						}
						i = o, t.updateQueue = i, i !== null && (t.flags |= 4);
					} else {
						c = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = je(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = c.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof i.is == "string" ? e = c.createElement(n, { is: i.is }) : (e = c.createElement(n), n === "select" && (c = e, i.multiple ? c.multiple = !0 : i.size && (c.size = i.size))) : e = c.createElementNS(e, n), e[Ai] = t, e[ji] = i, ic(e, t, !1, !1), t.stateNode = e;
						a: {
							switch (c = Be(n, i), n) {
								case "dialog":
									ri("cancel", e), ri("close", e), o = i;
									break;
								case "iframe":
								case "object":
								case "embed":
									ri("load", e), o = i;
									break;
								case "video":
								case "audio":
									for (o = 0; o < $r.length; o++) ri($r[o], e);
									o = i;
									break;
								case "source":
									ri("error", e), o = i;
									break;
								case "img":
								case "image":
								case "link":
									ri("error", e), ri("load", e), o = i;
									break;
								case "details":
									ri("toggle", e), o = i;
									break;
								case "input":
									M(e, i), o = xe(e, i), ri("invalid", e);
									break;
								case "option":
									o = i;
									break;
								case "select":
									e._wrapperState = { wasMultiple: !!i.multiple }, o = j({}, i, { value: void 0 }), ri("invalid", e);
									break;
								case "textarea":
									Oe(e, i), o = De(e, i), ri("invalid", e);
									break;
								default: o = i;
							}
							for (s in ze(n, o), l = o, l) if (l.hasOwnProperty(s)) {
								var u = l[s];
								s === "style" ? Le(e, u) : s === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && P(e, u)) : s === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Pe(e, u) : typeof u == "number" && Pe(e, "" + u) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (a.hasOwnProperty(s) ? u != null && s === "onScroll" && ri("scroll", e) : u != null && S(e, s, u, c));
							}
							switch (n) {
								case "input":
									ve(e), we(e, i, !1);
									break;
								case "textarea":
									ve(e), Ae(e);
									break;
								case "option":
									i.value != null && e.setAttribute("value", "" + he(i.value));
									break;
								case "select":
									e.multiple = !!i.multiple, s = i.value, s == null ? i.defaultValue != null && N(e, !!i.multiple, i.defaultValue, !0) : N(e, !!i.multiple, s, !1);
									break;
								default: typeof o.onClick == "function" && (e.onclick = _i);
							}
							switch (n) {
								case "button":
								case "input":
								case "select":
								case "textarea":
									i = !!i.autoFocus;
									break a;
								case "img":
									i = !0;
									break a;
								default: i = !1;
							}
						}
						i && (t.flags |= 4);
					}
					t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
				}
				return cc(t), null;
			case 6:
				if (e && t.stateNode != null) oc(e, t, e.memoizedProps, i);
				else {
					if (typeof i != "string" && t.stateNode === null) throw Error(r(166));
					if (n = fo(uo.current), fo(co.current), Oa(t)) {
						if (i = t.stateNode, n = t.memoizedProps, i[Ai] = t, (s = i.nodeValue !== n) && (e = ba, e !== null)) switch (e.tag) {
							case 3:
								gi(i.nodeValue, n, (e.mode & 1) != 0);
								break;
							case 5: !0 !== e.memoizedProps.suppressHydrationWarning && gi(i.nodeValue, n, (e.mode & 1) != 0);
						}
						s && (t.flags |= 4);
					} else i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i), i[Ai] = t, t.stateNode = i;
				}
				return cc(t), null;
			case 13:
				if (K(_o), i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (Sa && xa !== null && t.mode & 1 && !(t.flags & 128)) ka(), Aa(), t.flags |= 98560, s = !1;
					else if (s = Oa(t), i !== null && i.dehydrated !== null) {
						if (e === null) {
							if (!s) throw Error(r(318));
							if (s = t.memoizedState, s = s === null ? null : s.dehydrated, !s) throw Error(r(317));
							s[Ai] = t;
						} else Aa(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						cc(t), s = !1;
					} else Ca !== null && (bl(Ca), Ca = null), s = !0;
					if (!s) return t.flags & 65536 ? t : null;
				}
				return t.flags & 128 ? (t.lanes = n, t) : (i = i !== null, i !== (e !== null && e.memoizedState !== null) && i && (t.child.flags |= 8192, t.mode & 1 && (e === null || _o.current & 1 ? Jc === 0 && (Jc = 3) : Al())), t.updateQueue !== null && (t.flags |= 4), cc(t), null);
			case 4: return mo(), e === null && oi(t.stateNode.containerInfo), cc(t), null;
			case 10: return Wa(t.type._context), cc(t), null;
			case 17: return Yi(t.type) && Xi(), cc(t), null;
			case 19:
				if (K(_o), s = t.memoizedState, s === null) return cc(t), null;
				if (i = (t.flags & 128) != 0, c = s.rendering, c === null) if (i) sc(s, !1);
				else {
					if (Jc !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
						if (c = vo(e), c !== null) {
							for (t.flags |= 128, sc(s, !1), i = c.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), t.subtreeFlags = 0, i = n, n = t.child; n !== null;) s = n, e = i, s.flags &= 14680066, c = s.alternate, c === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = c.childLanes, s.lanes = c.lanes, s.child = c.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = c.memoizedProps, s.memoizedState = c.memoizedState, s.updateQueue = c.updateQueue, s.type = c.type, e = c.dependencies, s.dependencies = e === null ? null : {
								lanes: e.lanes,
								firstContext: e.firstContext
							}), n = n.sibling;
							return Ui(_o, _o.current & 1 | 2), t.child;
						}
						e = e.sibling;
					}
					s.tail !== null && R() > nl && (t.flags |= 128, i = !0, sc(s, !1), t.lanes = 4194304);
				}
				else {
					if (!i) if (e = vo(c), e !== null) {
						if (t.flags |= 128, i = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), sc(s, !0), s.tail === null && s.tailMode === "hidden" && !c.alternate && !Sa) return cc(t), null;
					} else 2 * R() - s.renderingStartTime > nl && n !== 1073741824 && (t.flags |= 128, i = !0, sc(s, !1), t.lanes = 4194304);
					s.isBackwards ? (c.sibling = t.child, t.child = c) : (n = s.last, n === null ? t.child = c : n.sibling = c, s.last = c);
				}
				return s.tail === null ? (cc(t), null) : (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = R(), t.sibling = null, n = _o.current, Ui(_o, i ? n & 1 | 2 : n & 1), t);
			case 22:
			case 23: return El(), i = t.memoizedState !== null, e !== null && e.memoizedState !== null !== i && (t.flags |= 8192), i && t.mode & 1 ? Kc & 1073741824 && (cc(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : cc(t), null;
			case 24: return null;
			case 25: return null;
		}
		throw Error(r(156, t.tag));
	}
	function uc(e, t) {
		switch (ya(t), t.tag) {
			case 1: return Yi(t.type) && Xi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3: return mo(), K(Ki), K(Gi), bo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
			case 5: return go(t), null;
			case 13:
				if (K(_o), e = t.memoizedState, e !== null && e.dehydrated !== null) {
					if (t.alternate === null) throw Error(r(340));
					Aa();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 19: return K(_o), null;
			case 4: return mo(), null;
			case 10: return Wa(t.type._context), null;
			case 22:
			case 23: return El(), null;
			case 24: return null;
			default: return null;
		}
	}
	var dc = !1, fc = !1, pc = typeof WeakSet == "function" ? WeakSet : Set, X = null;
	function mc(e, t) {
		var n = e.ref;
		if (n !== null) if (typeof n == "function") try {
			n(null);
		} catch (n) {
			Bl(e, t, n);
		}
		else n.current = null;
	}
	function hc(e, t, n) {
		try {
			n();
		} catch (n) {
			Bl(e, t, n);
		}
	}
	var gc = !1;
	function _c(e, t) {
		if (vi = pn, e = Mr(), Nr(e)) {
			if ("selectionStart" in e) var n = {
				start: e.selectionStart,
				end: e.selectionEnd
			};
			else a: {
				n = (n = e.ownerDocument) && n.defaultView || window;
				var i = n.getSelection && n.getSelection();
				if (i && i.rangeCount !== 0) {
					n = i.anchorNode;
					var a = i.anchorOffset, o = i.focusNode;
					i = i.focusOffset;
					try {
						n.nodeType, o.nodeType;
					} catch {
						n = null;
						break a;
					}
					var s = 0, c = -1, l = -1, u = 0, d = 0, f = e, p = null;
					b: for (;;) {
						for (var m; f !== n || a !== 0 && f.nodeType !== 3 || (c = s + a), f !== o || i !== 0 && f.nodeType !== 3 || (l = s + i), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null;) p = f, f = m;
						for (;;) {
							if (f === e) break b;
							if (p === n && ++u === a && (c = s), p === o && ++d === i && (l = s), (m = f.nextSibling) !== null) break;
							f = p, p = f.parentNode;
						}
						f = m;
					}
					n = c === -1 || l === -1 ? null : {
						start: c,
						end: l
					};
				} else n = null;
			}
			n ||= {
				start: 0,
				end: 0
			};
		} else n = null;
		for (yi = {
			focusedElem: e,
			selectionRange: n
		}, pn = !1, X = t; X !== null;) if (t = X, e = t.child, t.subtreeFlags & 1028 && e !== null) e.return = t, X = e;
		else for (; X !== null;) {
			t = X;
			try {
				var h = t.alternate;
				if (t.flags & 1024) switch (t.tag) {
					case 0:
					case 11:
					case 15: break;
					case 1:
						if (h !== null) {
							var g = h.memoizedProps, _ = h.memoizedState, v = t.stateNode;
							v.__reactInternalSnapshotBeforeUpdate = v.getSnapshotBeforeUpdate(t.elementType === t.type ? g : _s(t.type, g), _);
						}
						break;
					case 3:
						var y = t.stateNode.containerInfo;
						y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
						break;
					case 5:
					case 6:
					case 4:
					case 17: break;
					default: throw Error(r(163));
				}
			} catch (e) {
				Bl(t, t.return, e);
			}
			if (e = t.sibling, e !== null) {
				e.return = t.return, X = e;
				break;
			}
			X = t.return;
		}
		return h = gc, gc = !1, h;
	}
	function vc(e, t, n) {
		var r = t.updateQueue;
		if (r = r === null ? null : r.lastEffect, r !== null) {
			var i = r = r.next;
			do {
				if ((i.tag & e) === e) {
					var a = i.destroy;
					i.destroy = void 0, a !== void 0 && hc(t, n, a);
				}
				i = i.next;
			} while (i !== r);
		}
	}
	function yc(e, t) {
		if (t = t.updateQueue, t = t === null ? null : t.lastEffect, t !== null) {
			var n = t = t.next;
			do {
				if ((n.tag & e) === e) {
					var r = n.create;
					n.destroy = r();
				}
				n = n.next;
			} while (n !== t);
		}
	}
	function bc(e) {
		var t = e.ref;
		if (t !== null) {
			var n = e.stateNode;
			switch (e.tag) {
				case 5:
					e = n;
					break;
				default: e = n;
			}
			typeof t == "function" ? t(e) : t.current = e;
		}
	}
	function xc(e) {
		var t = e.alternate;
		t !== null && (e.alternate = null, xc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ai], delete t[ji], delete t[Ni], delete t[Pi], delete t[Fi])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
	}
	function Sc(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 4;
	}
	function Cc(e) {
		a: for (;;) {
			for (; e.sibling === null;) {
				if (e.return === null || Sc(e.return)) return null;
				e = e.return;
			}
			for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
				if (e.flags & 2 || e.child === null || e.tag === 4) continue a;
				e.child.return = e, e = e.child;
			}
			if (!(e.flags & 2)) return e.stateNode;
		}
	}
	function wc(e, t, n) {
		var r = e.tag;
		if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = _i));
		else if (r !== 4 && (e = e.child, e !== null)) for (wc(e, t, n), e = e.sibling; e !== null;) wc(e, t, n), e = e.sibling;
	}
	function Tc(e, t, n) {
		var r = e.tag;
		if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
		else if (r !== 4 && (e = e.child, e !== null)) for (Tc(e, t, n), e = e.sibling; e !== null;) Tc(e, t, n), e = e.sibling;
	}
	var Ec = null, Dc = !1;
	function Oc(e, t, n) {
		for (n = n.child; n !== null;) kc(e, t, n), n = n.sibling;
	}
	function kc(e, t, n) {
		if (wt && typeof wt.onCommitFiberUnmount == "function") try {
			wt.onCommitFiberUnmount(Ct, n);
		} catch {}
		switch (n.tag) {
			case 5: fc || mc(n, t);
			case 6:
				var r = Ec, i = Dc;
				Ec = null, Oc(e, t, n), Ec = r, Dc = i, Ec !== null && (Dc ? (e = Ec, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ec.removeChild(n.stateNode));
				break;
			case 18:
				Ec !== null && (Dc ? (e = Ec, n = n.stateNode, e.nodeType === 8 ? Ei(e.parentNode, n) : e.nodeType === 1 && Ei(e, n), dn(e)) : Ei(Ec, n.stateNode));
				break;
			case 4:
				r = Ec, i = Dc, Ec = n.stateNode.containerInfo, Dc = !0, Oc(e, t, n), Ec = r, Dc = i;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				if (!fc && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
					i = r = r.next;
					do {
						var a = i, o = a.destroy;
						a = a.tag, o !== void 0 && (a & 2 || a & 4) && hc(n, t, o), i = i.next;
					} while (i !== r);
				}
				Oc(e, t, n);
				break;
			case 1:
				if (!fc && (mc(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
					r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
				} catch (e) {
					Bl(n, t, e);
				}
				Oc(e, t, n);
				break;
			case 21:
				Oc(e, t, n);
				break;
			case 22:
				n.mode & 1 ? (fc = (r = fc) || n.memoizedState !== null, Oc(e, t, n), fc = r) : Oc(e, t, n);
				break;
			default: Oc(e, t, n);
		}
	}
	function Ac(e) {
		var t = e.updateQueue;
		if (t !== null) {
			e.updateQueue = null;
			var n = e.stateNode;
			n === null && (n = e.stateNode = new pc()), t.forEach(function(t) {
				var r = Wl.bind(null, e, t);
				n.has(t) || (n.add(t), t.then(r, r));
			});
		}
	}
	function jc(e, t) {
		var n = t.deletions;
		if (n !== null) for (var i = 0; i < n.length; i++) {
			var a = n[i];
			try {
				var o = e, s = t, c = s;
				a: for (; c !== null;) {
					switch (c.tag) {
						case 5:
							Ec = c.stateNode, Dc = !1;
							break a;
						case 3:
							Ec = c.stateNode.containerInfo, Dc = !0;
							break a;
						case 4:
							Ec = c.stateNode.containerInfo, Dc = !0;
							break a;
					}
					c = c.return;
				}
				if (Ec === null) throw Error(r(160));
				kc(o, s, a), Ec = null, Dc = !1;
				var l = a.alternate;
				l !== null && (l.return = null), a.return = null;
			} catch (e) {
				Bl(a, t, e);
			}
		}
		if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) Mc(t, e), t = t.sibling;
	}
	function Mc(e, t) {
		var n = e.alternate, i = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				if (jc(t, e), Nc(e), i & 4) {
					try {
						vc(3, e, e.return), yc(3, e);
					} catch (t) {
						Bl(e, e.return, t);
					}
					try {
						vc(5, e, e.return);
					} catch (t) {
						Bl(e, e.return, t);
					}
				}
				break;
			case 1:
				jc(t, e), Nc(e), i & 512 && n !== null && mc(n, n.return);
				break;
			case 5:
				if (jc(t, e), Nc(e), i & 512 && n !== null && mc(n, n.return), e.flags & 32) {
					var a = e.stateNode;
					try {
						Pe(a, "");
					} catch (t) {
						Bl(e, e.return, t);
					}
				}
				if (i & 4 && (a = e.stateNode, a != null)) {
					var o = e.memoizedProps, s = n === null ? o : n.memoizedProps, c = e.type, l = e.updateQueue;
					if (e.updateQueue = null, l !== null) try {
						c === "input" && o.type === "radio" && o.name != null && Se(a, o), Be(c, s);
						var u = Be(c, o);
						for (s = 0; s < l.length; s += 2) {
							var d = l[s], f = l[s + 1];
							d === "style" ? Le(a, f) : d === "dangerouslySetInnerHTML" ? P(a, f) : d === "children" ? Pe(a, f) : S(a, d, f, u);
						}
						switch (c) {
							case "input":
								Ce(a, o);
								break;
							case "textarea":
								ke(a, o);
								break;
							case "select":
								var p = a._wrapperState.wasMultiple;
								a._wrapperState.wasMultiple = !!o.multiple;
								var m = o.value;
								m == null ? p !== !!o.multiple && (o.defaultValue == null ? N(a, !!o.multiple, o.multiple ? [] : "", !1) : N(a, !!o.multiple, o.defaultValue, !0)) : N(a, !!o.multiple, m, !1);
						}
						a[ji] = o;
					} catch (t) {
						Bl(e, e.return, t);
					}
				}
				break;
			case 6:
				if (jc(t, e), Nc(e), i & 4) {
					if (e.stateNode === null) throw Error(r(162));
					a = e.stateNode, o = e.memoizedProps;
					try {
						a.nodeValue = o;
					} catch (t) {
						Bl(e, e.return, t);
					}
				}
				break;
			case 3:
				if (jc(t, e), Nc(e), i & 4 && n !== null && n.memoizedState.isDehydrated) try {
					dn(t.containerInfo);
				} catch (t) {
					Bl(e, e.return, t);
				}
				break;
			case 4:
				jc(t, e), Nc(e);
				break;
			case 13:
				jc(t, e), Nc(e), a = e.child, a.flags & 8192 && (o = a.memoizedState !== null, a.stateNode.isHidden = o, !o || a.alternate !== null && a.alternate.memoizedState !== null || (tl = R())), i & 4 && Ac(e);
				break;
			case 22:
				if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (fc = (u = fc) || d, jc(t, e), fc = u) : jc(t, e), Nc(e), i & 8192) {
					if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1) for (X = e, d = e.child; d !== null;) {
						for (f = X = d; X !== null;) {
							switch (p = X, m = p.child, p.tag) {
								case 0:
								case 11:
								case 14:
								case 15:
									vc(4, p, p.return);
									break;
								case 1:
									mc(p, p.return);
									var h = p.stateNode;
									if (typeof h.componentWillUnmount == "function") {
										i = p, n = p.return;
										try {
											t = i, h.props = t.memoizedProps, h.state = t.memoizedState, h.componentWillUnmount();
										} catch (e) {
											Bl(i, n, e);
										}
									}
									break;
								case 5:
									mc(p, p.return);
									break;
								case 22: if (p.memoizedState !== null) {
									Lc(f);
									continue;
								}
							}
							m === null ? Lc(f) : (m.return = p, X = m);
						}
						d = d.sibling;
					}
					a: for (d = null, f = e;;) {
						if (f.tag === 5) {
							if (d === null) {
								d = f;
								try {
									a = f.stateNode, u ? (o = a.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (c = f.stateNode, l = f.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, c.style.display = F("display", s));
								} catch (t) {
									Bl(e, e.return, t);
								}
							}
						} else if (f.tag === 6) {
							if (d === null) try {
								f.stateNode.nodeValue = u ? "" : f.memoizedProps;
							} catch (t) {
								Bl(e, e.return, t);
							}
						} else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
							f.child.return = f, f = f.child;
							continue;
						}
						if (f === e) break a;
						for (; f.sibling === null;) {
							if (f.return === null || f.return === e) break a;
							d === f && (d = null), f = f.return;
						}
						d === f && (d = null), f.sibling.return = f.return, f = f.sibling;
					}
				}
				break;
			case 19:
				jc(t, e), Nc(e), i & 4 && Ac(e);
				break;
			case 21: break;
			default: jc(t, e), Nc(e);
		}
	}
	function Nc(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				a: {
					for (var n = e.return; n !== null;) {
						if (Sc(n)) {
							var i = n;
							break a;
						}
						n = n.return;
					}
					throw Error(r(160));
				}
				switch (i.tag) {
					case 5:
						var a = i.stateNode;
						i.flags & 32 && (Pe(a, ""), i.flags &= -33), Tc(e, Cc(e), a);
						break;
					case 3:
					case 4:
						var o = i.stateNode.containerInfo;
						wc(e, Cc(e), o);
						break;
					default: throw Error(r(161));
				}
			} catch (t) {
				Bl(e, e.return, t);
			}
			e.flags &= -3;
		}
		t & 4096 && (e.flags &= -4097);
	}
	function Pc(e, t, n) {
		X = e, Fc(e, t, n);
	}
	function Fc(e, t, n) {
		for (var r = (e.mode & 1) != 0; X !== null;) {
			var i = X, a = i.child;
			if (i.tag === 22 && r) {
				var o = i.memoizedState !== null || dc;
				if (!o) {
					var s = i.alternate, c = s !== null && s.memoizedState !== null || fc;
					s = dc;
					var l = fc;
					if (dc = o, (fc = c) && !l) for (X = i; X !== null;) o = X, c = o.child, o.tag === 22 && o.memoizedState !== null || c === null ? Rc(i) : (c.return = o, X = c);
					for (; a !== null;) X = a, Fc(a, t, n), a = a.sibling;
					X = i, dc = s, fc = l;
				}
				Ic(e, t, n);
			} else i.subtreeFlags & 8772 && a !== null ? (a.return = i, X = a) : Ic(e, t, n);
		}
	}
	function Ic(e) {
		for (; X !== null;) {
			var t = X;
			if (t.flags & 8772) {
				var n = t.alternate;
				try {
					if (t.flags & 8772) switch (t.tag) {
						case 0:
						case 11:
						case 15:
							fc || yc(5, t);
							break;
						case 1:
							var i = t.stateNode;
							if (t.flags & 4 && !fc) if (n === null) i.componentDidMount();
							else {
								var a = t.elementType === t.type ? n.memoizedProps : _s(t.type, n.memoizedProps);
								i.componentDidUpdate(a, n.memoizedState, i.__reactInternalSnapshotBeforeUpdate);
							}
							var o = t.updateQueue;
							o !== null && oo(t, o, i);
							break;
						case 3:
							var s = t.updateQueue;
							if (s !== null) {
								if (n = null, t.child !== null) switch (t.child.tag) {
									case 5:
										n = t.child.stateNode;
										break;
									case 1: n = t.child.stateNode;
								}
								oo(t, s, n);
							}
							break;
						case 5:
							var c = t.stateNode;
							if (n === null && t.flags & 4) {
								n = c;
								var l = t.memoizedProps;
								switch (t.type) {
									case "button":
									case "input":
									case "select":
									case "textarea":
										l.autoFocus && n.focus();
										break;
									case "img": l.src && (n.src = l.src);
								}
							}
							break;
						case 6: break;
						case 4: break;
						case 12: break;
						case 13:
							if (t.memoizedState === null) {
								var u = t.alternate;
								if (u !== null) {
									var d = u.memoizedState;
									if (d !== null) {
										var f = d.dehydrated;
										f !== null && dn(f);
									}
								}
							}
							break;
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25: break;
						default: throw Error(r(163));
					}
					fc || t.flags & 512 && bc(t);
				} catch (e) {
					Bl(t, t.return, e);
				}
			}
			if (t === e) {
				X = null;
				break;
			}
			if (n = t.sibling, n !== null) {
				n.return = t.return, X = n;
				break;
			}
			X = t.return;
		}
	}
	function Lc(e) {
		for (; X !== null;) {
			var t = X;
			if (t === e) {
				X = null;
				break;
			}
			var n = t.sibling;
			if (n !== null) {
				n.return = t.return, X = n;
				break;
			}
			X = t.return;
		}
	}
	function Rc(e) {
		for (; X !== null;) {
			var t = X;
			try {
				switch (t.tag) {
					case 0:
					case 11:
					case 15:
						var n = t.return;
						try {
							yc(4, t);
						} catch (e) {
							Bl(t, n, e);
						}
						break;
					case 1:
						var r = t.stateNode;
						if (typeof r.componentDidMount == "function") {
							var i = t.return;
							try {
								r.componentDidMount();
							} catch (e) {
								Bl(t, i, e);
							}
						}
						var a = t.return;
						try {
							bc(t);
						} catch (e) {
							Bl(t, a, e);
						}
						break;
					case 5:
						var o = t.return;
						try {
							bc(t);
						} catch (e) {
							Bl(t, o, e);
						}
				}
			} catch (e) {
				Bl(t, t.return, e);
			}
			if (t === e) {
				X = null;
				break;
			}
			var s = t.sibling;
			if (s !== null) {
				s.return = t.return, X = s;
				break;
			}
			X = t.return;
		}
	}
	var zc = Math.ceil, Bc = C.ReactCurrentDispatcher, Vc = C.ReactCurrentOwner, Hc = C.ReactCurrentBatchConfig, Z = 0, Uc = null, Wc = null, Gc = 0, Kc = 0, qc = Hi(0), Jc = 0, Yc = null, Xc = 0, Zc = 0, Qc = 0, $c = null, el = null, tl = 0, nl = Infinity, rl = null, il = !1, al = null, ol = null, sl = !1, cl = null, ll = 0, ul = 0, dl = null, fl = -1, pl = 0;
	function ml() {
		return Z & 6 ? R() : fl === -1 ? fl = R() : fl;
	}
	function hl(e) {
		return e.mode & 1 ? Z & 2 && Gc !== 0 ? Gc & -Gc : Ma.transition === null ? (e = V, e === 0 ? (e = window.event, e = e === void 0 ? 16 : yn(e.type), e) : e) : (pl === 0 && (pl = It()), pl) : 1;
	}
	function gl(e, t, n, i) {
		if (50 < ul) throw ul = 0, dl = null, Error(r(185));
		Rt(e, n, i), (!(Z & 2) || e !== Uc) && (e === Uc && (!(Z & 2) && (Zc |= n), Jc === 4 && Sl(e, Gc)), _l(e, i), n === 1 && Z === 0 && !(t.mode & 1) && (nl = R() + 500, na && oa()));
	}
	function _l(e, t) {
		var n = e.callbackNode;
		Pt(e, t);
		var r = Mt(e, e === Uc ? Gc : 0);
		if (r === 0) n !== null && ht(n), e.callbackNode = null, e.callbackPriority = 0;
		else if (t = r & -r, e.callbackPriority !== t) {
			if (n != null && ht(n), t === 1) e.tag === 0 ? aa(Cl.bind(null, e)) : ia(Cl.bind(null, e)), wi(function() {
				!(Z & 6) && oa();
			}), n = null;
			else {
				switch (Vt(r)) {
					case 1:
						n = vt;
						break;
					case 4:
						n = yt;
						break;
					case 16:
						n = bt;
						break;
					case 536870912:
						n = St;
						break;
					default: n = bt;
				}
				n = Kl(n, vl.bind(null, e));
			}
			e.callbackPriority = t, e.callbackNode = n;
		}
	}
	function vl(e, t) {
		if (fl = -1, pl = 0, Z & 6) throw Error(r(327));
		var n = e.callbackNode;
		if (Rl() && e.callbackNode !== n) return null;
		var i = Mt(e, e === Uc ? Gc : 0);
		if (i === 0) return null;
		if (i & 30 || (i & e.expiredLanes) !== 0 || t) t = jl(e, i);
		else {
			t = i;
			var a = Z;
			Z |= 2;
			var o = kl();
			(Uc !== e || Gc !== t) && (rl = null, nl = R() + 500, Dl(e, t));
			do
				try {
					Nl();
					break;
				} catch (t) {
					Ol(e, t);
				}
			while (1);
			Ua(), Bc.current = o, Z = a, Wc === null ? (Uc = null, Gc = 0, t = Jc) : t = 0;
		}
		if (t !== 0) {
			if (t === 2 && (a = Ft(e), a !== 0 && (i = a, t = yl(e, a))), t === 1) throw n = Yc, Dl(e, 0), Sl(e, i), _l(e, R()), n;
			if (t === 6) Sl(e, i);
			else {
				if (a = e.current.alternate, !(i & 30) && !xl(a) && (t = jl(e, i), t === 2 && (o = Ft(e), o !== 0 && (i = o, t = yl(e, o))), t === 1)) throw n = Yc, Dl(e, 0), Sl(e, i), _l(e, R()), n;
				switch (e.finishedWork = a, e.finishedLanes = i, t) {
					case 0:
					case 1: throw Error(r(345));
					case 2:
						Il(e, el, rl);
						break;
					case 3:
						if (Sl(e, i), (i & 130023424) === i && (t = tl + 500 - R(), 10 < t)) {
							if (Mt(e, 0) !== 0) break;
							if (a = e.suspendedLanes, (a & i) !== i) {
								ml(), e.pingedLanes |= e.suspendedLanes & a;
								break;
							}
							e.timeoutHandle = xi(Il.bind(null, e, el, rl), t);
							break;
						}
						Il(e, el, rl);
						break;
					case 4:
						if (Sl(e, i), (i & 4194240) === i) break;
						for (t = e.eventTimes, a = -1; 0 < i;) {
							var s = 31 - B(i);
							o = 1 << s, s = t[s], s > a && (a = s), i &= ~o;
						}
						if (i = a, i = R() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * zc(i / 1960)) - i, 10 < i) {
							e.timeoutHandle = xi(Il.bind(null, e, el, rl), i);
							break;
						}
						Il(e, el, rl);
						break;
					case 5:
						Il(e, el, rl);
						break;
					default: throw Error(r(329));
				}
			}
		}
		return _l(e, R()), e.callbackNode === n ? vl.bind(null, e) : null;
	}
	function yl(e, t) {
		var n = $c;
		return e.current.memoizedState.isDehydrated && (Dl(e, t).flags |= 256), e = jl(e, t), e !== 2 && (t = el, el = n, t !== null && bl(t)), e;
	}
	function bl(e) {
		el === null ? el = e : el.push.apply(el, e);
	}
	function xl(e) {
		for (var t = e;;) {
			if (t.flags & 16384) {
				var n = t.updateQueue;
				if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
					var i = n[r], a = i.getSnapshot;
					i = i.value;
					try {
						if (!Dr(a(), i)) return !1;
					} catch {
						return !1;
					}
				}
			}
			if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
			else {
				if (t === e) break;
				for (; t.sibling === null;) {
					if (t.return === null || t.return === e) return !0;
					t = t.return;
				}
				t.sibling.return = t.return, t = t.sibling;
			}
		}
		return !0;
	}
	function Sl(e, t) {
		for (t &= ~Qc, t &= ~Zc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
			var n = 31 - B(t), r = 1 << n;
			e[n] = -1, t &= ~r;
		}
	}
	function Cl(e) {
		if (Z & 6) throw Error(r(327));
		Rl();
		var t = Mt(e, 0);
		if (!(t & 1)) return _l(e, R()), null;
		var n = jl(e, t);
		if (e.tag !== 0 && n === 2) {
			var i = Ft(e);
			i !== 0 && (t = i, n = yl(e, i));
		}
		if (n === 1) throw n = Yc, Dl(e, 0), Sl(e, t), _l(e, R()), n;
		if (n === 6) throw Error(r(345));
		return e.finishedWork = e.current.alternate, e.finishedLanes = t, Il(e, el, rl), _l(e, R()), null;
	}
	function wl(e, t) {
		var n = Z;
		Z |= 1;
		try {
			return e(t);
		} finally {
			Z = n, Z === 0 && (nl = R() + 500, na && oa());
		}
	}
	function Tl(e) {
		cl !== null && cl.tag === 0 && !(Z & 6) && Rl();
		var t = Z;
		Z |= 1;
		var n = Hc.transition, r = V;
		try {
			if (Hc.transition = null, V = 1, e) return e();
		} finally {
			V = r, Hc.transition = n, Z = t, !(Z & 6) && oa();
		}
	}
	function El() {
		Kc = qc.current, K(qc);
	}
	function Dl(e, t) {
		e.finishedWork = null, e.finishedLanes = 0;
		var n = e.timeoutHandle;
		if (n !== -1 && (e.timeoutHandle = -1, Si(n)), Wc !== null) for (n = Wc.return; n !== null;) {
			var r = n;
			switch (ya(r), r.tag) {
				case 1:
					r = r.type.childContextTypes, r != null && Xi();
					break;
				case 3:
					mo(), K(Ki), K(Gi), bo();
					break;
				case 5:
					go(r);
					break;
				case 4:
					mo();
					break;
				case 13:
					K(_o);
					break;
				case 19:
					K(_o);
					break;
				case 10:
					Wa(r.type._context);
					break;
				case 22:
				case 23: El();
			}
			n = n.return;
		}
		if (Uc = e, Wc = e = Zl(e.current, null), Gc = Kc = t, Jc = 0, Yc = null, Qc = Zc = Xc = 0, el = $c = null, Ja !== null) {
			for (t = 0; t < Ja.length; t++) if (n = Ja[t], r = n.interleaved, r !== null) {
				n.interleaved = null;
				var i = r.next, a = n.pending;
				if (a !== null) {
					var o = a.next;
					a.next = i, r.next = o;
				}
				n.pending = r;
			}
			Ja = null;
		}
		return e;
	}
	function Ol(e, t) {
		do {
			var n = Wc;
			try {
				if (Ua(), xo.current = Y, Do) {
					for (var i = wo.memoizedState; i !== null;) {
						var a = i.queue;
						a !== null && (a.pending = null), i = i.next;
					}
					Do = !1;
				}
				if (Co = 0, Eo = To = wo = null, Oo = !1, ko = 0, Vc.current = null, n === null || n.return === null) {
					Jc = 1, Yc = t, Wc = null;
					break;
				}
				a: {
					var o = e, s = n.return, c = n, l = t;
					if (t = Gc, c.flags |= 32768, typeof l == "object" && l && typeof l.then == "function") {
						var u = l, d = c, f = d.tag;
						if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
							var p = d.alternate;
							p ? (d.updateQueue = p.updateQueue, d.memoizedState = p.memoizedState, d.lanes = p.lanes) : (d.updateQueue = null, d.memoizedState = null);
						}
						var m = js(s);
						if (m !== null) {
							m.flags &= -257, Ms(m, s, c, o, t), m.mode & 1 && As(o, u, t), t = m, l = u;
							var h = t.updateQueue;
							if (h === null) {
								var g = /* @__PURE__ */ new Set();
								g.add(l), t.updateQueue = g;
							} else h.add(l);
							break a;
						} else {
							if (!(t & 1)) {
								As(o, u, t), Al();
								break a;
							}
							l = Error(r(426));
						}
					} else if (Sa && c.mode & 1) {
						var _ = js(s);
						if (_ !== null) {
							!(_.flags & 65536) && (_.flags |= 256), Ms(_, s, c, o, t), ja(ws(l, c));
							break a;
						}
					}
					o = l = ws(l, c), Jc !== 4 && (Jc = 2), $c === null ? $c = [o] : $c.push(o), o = s;
					do {
						switch (o.tag) {
							case 3:
								o.flags |= 65536, t &= -t, o.lanes |= t;
								var v = Os(o, l, t);
								io(o, v);
								break a;
							case 1:
								c = l;
								var y = o.type, b = o.stateNode;
								if (!(o.flags & 128) && (typeof y.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (ol === null || !ol.has(b)))) {
									o.flags |= 65536, t &= -t, o.lanes |= t;
									var x = ks(o, c, t);
									io(o, x);
									break a;
								}
						}
						o = o.return;
					} while (o !== null);
				}
				Fl(n);
			} catch (e) {
				t = e, Wc === n && n !== null && (Wc = n = n.return);
				continue;
			}
			break;
		} while (1);
	}
	function kl() {
		var e = Bc.current;
		return Bc.current = Y, e === null ? Y : e;
	}
	function Al() {
		(Jc === 0 || Jc === 3 || Jc === 2) && (Jc = 4), Uc === null || !(Xc & 268435455) && !(Zc & 268435455) || Sl(Uc, Gc);
	}
	function jl(e, t) {
		var n = Z;
		Z |= 2;
		var i = kl();
		(Uc !== e || Gc !== t) && (rl = null, Dl(e, t));
		do
			try {
				Ml();
				break;
			} catch (t) {
				Ol(e, t);
			}
		while (1);
		if (Ua(), Z = n, Bc.current = i, Wc !== null) throw Error(r(261));
		return Uc = null, Gc = 0, Jc;
	}
	function Ml() {
		for (; Wc !== null;) Pl(Wc);
	}
	function Nl() {
		for (; Wc !== null && !gt();) Pl(Wc);
	}
	function Pl(e) {
		var t = Gl(e.alternate, e, Kc);
		e.memoizedProps = e.pendingProps, t === null ? Fl(e) : Wc = t, Vc.current = null;
	}
	function Fl(e) {
		var t = e;
		do {
			var n = t.alternate;
			if (e = t.return, t.flags & 32768) {
				if (n = uc(n, t), n !== null) {
					n.flags &= 32767, Wc = n;
					return;
				}
				if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
				else {
					Jc = 6, Wc = null;
					return;
				}
			} else if (n = lc(n, t, Kc), n !== null) {
				Wc = n;
				return;
			}
			if (t = t.sibling, t !== null) {
				Wc = t;
				return;
			}
			Wc = t = e;
		} while (t !== null);
		Jc === 0 && (Jc = 5);
	}
	function Il(e, t, n) {
		var r = V, i = Hc.transition;
		try {
			Hc.transition = null, V = 1, Ll(e, t, n, r);
		} finally {
			Hc.transition = i, V = r;
		}
		return null;
	}
	function Ll(e, t, n, i) {
		do
			Rl();
		while (cl !== null);
		if (Z & 6) throw Error(r(327));
		n = e.finishedWork;
		var a = e.finishedLanes;
		if (n === null) return null;
		if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(r(177));
		e.callbackNode = null, e.callbackPriority = 0;
		var o = n.lanes | n.childLanes;
		if (zt(e, o), e === Uc && (Wc = Uc = null, Gc = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || sl || (sl = !0, Kl(bt, function() {
			return Rl(), null;
		})), o = (n.flags & 15990) != 0, n.subtreeFlags & 15990 || o) {
			o = Hc.transition, Hc.transition = null;
			var s = V;
			V = 1;
			var c = Z;
			Z |= 4, Vc.current = null, _c(e, n), Mc(n, e), W(yi), pn = !!vi, yi = vi = null, e.current = n, Pc(n, e, a), _t(), Z = c, V = s, Hc.transition = o;
		} else e.current = n;
		if (sl && (sl = !1, cl = e, ll = a), o = e.pendingLanes, o === 0 && (ol = null), Tt(n.stateNode, i), _l(e, R()), t !== null) for (i = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], i(a.value, {
			componentStack: a.stack,
			digest: a.digest
		});
		if (il) throw il = !1, e = al, al = null, e;
		return ll & 1 && e.tag !== 0 && Rl(), o = e.pendingLanes, o & 1 ? e === dl ? ul++ : (ul = 0, dl = e) : ul = 0, oa(), null;
	}
	function Rl() {
		if (cl !== null) {
			var e = Vt(ll), t = Hc.transition, n = V;
			try {
				if (Hc.transition = null, V = 16 > e ? 16 : e, cl === null) var i = !1;
				else {
					if (e = cl, cl = null, ll = 0, Z & 6) throw Error(r(331));
					var a = Z;
					for (Z |= 4, X = e.current; X !== null;) {
						var o = X, s = o.child;
						if (X.flags & 16) {
							var c = o.deletions;
							if (c !== null) {
								for (var l = 0; l < c.length; l++) {
									var u = c[l];
									for (X = u; X !== null;) {
										var d = X;
										switch (d.tag) {
											case 0:
											case 11:
											case 15: vc(8, d, o);
										}
										var f = d.child;
										if (f !== null) f.return = d, X = f;
										else for (; X !== null;) {
											d = X;
											var p = d.sibling, m = d.return;
											if (xc(d), d === u) {
												X = null;
												break;
											}
											if (p !== null) {
												p.return = m, X = p;
												break;
											}
											X = m;
										}
									}
								}
								var h = o.alternate;
								if (h !== null) {
									var g = h.child;
									if (g !== null) {
										h.child = null;
										do {
											var _ = g.sibling;
											g.sibling = null, g = _;
										} while (g !== null);
									}
								}
								X = o;
							}
						}
						if (o.subtreeFlags & 2064 && s !== null) s.return = o, X = s;
						else b: for (; X !== null;) {
							if (o = X, o.flags & 2048) switch (o.tag) {
								case 0:
								case 11:
								case 15: vc(9, o, o.return);
							}
							var v = o.sibling;
							if (v !== null) {
								v.return = o.return, X = v;
								break b;
							}
							X = o.return;
						}
					}
					var y = e.current;
					for (X = y; X !== null;) {
						s = X;
						var b = s.child;
						if (s.subtreeFlags & 2064 && b !== null) b.return = s, X = b;
						else b: for (s = y; X !== null;) {
							if (c = X, c.flags & 2048) try {
								switch (c.tag) {
									case 0:
									case 11:
									case 15: yc(9, c);
								}
							} catch (e) {
								Bl(c, c.return, e);
							}
							if (c === s) {
								X = null;
								break b;
							}
							var x = c.sibling;
							if (x !== null) {
								x.return = c.return, X = x;
								break b;
							}
							X = c.return;
						}
					}
					if (Z = a, oa(), wt && typeof wt.onPostCommitFiberRoot == "function") try {
						wt.onPostCommitFiberRoot(Ct, e);
					} catch {}
					i = !0;
				}
				return i;
			} finally {
				V = n, Hc.transition = t;
			}
		}
		return !1;
	}
	function zl(e, t, n) {
		t = ws(n, t), t = Os(e, t, 1), e = no(e, t, 1), t = ml(), e !== null && (Rt(e, 1, t), _l(e, t));
	}
	function Bl(e, t, n) {
		if (e.tag === 3) zl(e, e, n);
		else for (; t !== null;) {
			if (t.tag === 3) {
				zl(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ol === null || !ol.has(r))) {
					e = ws(n, e), e = ks(t, e, 1), t = no(t, e, 1), e = ml(), t !== null && (Rt(t, 1, e), _l(t, e));
					break;
				}
			}
			t = t.return;
		}
	}
	function Vl(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), t = ml(), e.pingedLanes |= e.suspendedLanes & n, Uc === e && (Gc & n) === n && (Jc === 4 || Jc === 3 && (Gc & 130023424) === Gc && 500 > R() - tl ? Dl(e, 0) : Qc |= n), _l(e, t);
	}
	function Hl(e, t) {
		t === 0 && (e.mode & 1 ? (t = At, At <<= 1, !(At & 130023424) && (At = 4194304)) : t = 1);
		var n = ml();
		e = Za(e, t), e !== null && (Rt(e, t, n), _l(e, n));
	}
	function Ul(e) {
		var t = e.memoizedState, n = 0;
		t !== null && (n = t.retryLane), Hl(e, n);
	}
	function Wl(e, t) {
		var n = 0;
		switch (e.tag) {
			case 13:
				var i = e.stateNode, a = e.memoizedState;
				a !== null && (n = a.retryLane);
				break;
			case 19:
				i = e.stateNode;
				break;
			default: throw Error(r(314));
		}
		i !== null && i.delete(t), Hl(e, n);
	}
	var Gl = function(e, t, n) {
		if (e !== null) if (e.memoizedProps !== t.pendingProps || Ki.current) Ps = !0;
		else {
			if ((e.lanes & n) === 0 && !(t.flags & 128)) return Ps = !1, rc(e, t, n);
			Ps = !!(e.flags & 131072);
		}
		else Ps = !1, Sa && t.flags & 1048576 && _a(t, ua, t.index);
		switch (t.lanes = 0, t.tag) {
			case 2:
				var i = t.type;
				tc(e, t), e = t.pendingProps;
				var a = Ji(t, Gi.current);
				Ka(t, n), a = No(null, t, i, e, a, n);
				var o = Po();
				return t.flags |= 1, typeof a == "object" && a && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Yi(i) ? (o = !0, $i(t)) : o = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, $a(t), a.updater = ys, t.stateNode = a, a._reactInternals = t, Cs(t, i, e, n), t = Us(null, t, i, !0, o, n)) : (t.tag = 0, Sa && o && va(t), Fs(null, t, a, n), t = t.child), t;
			case 16:
				i = t.elementType;
				a: {
					switch (tc(e, t), e = t.pendingProps, a = i._init, i = a(i._payload), t.type = i, a = t.tag = Xl(i), e = _s(i, e), a) {
						case 0:
							t = Vs(null, t, i, e, n);
							break a;
						case 1:
							t = Hs(null, t, i, e, n);
							break a;
						case 11:
							t = Is(null, t, i, e, n);
							break a;
						case 14:
							t = Ls(null, t, i, _s(i.type, e), n);
							break a;
					}
					throw Error(r(306, i, ""));
				}
				return t;
			case 0: return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : _s(i, a), Vs(e, t, i, a, n);
			case 1: return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : _s(i, a), Hs(e, t, i, a, n);
			case 3:
				a: {
					if (Ws(t), e === null) throw Error(r(387));
					i = t.pendingProps, o = t.memoizedState, a = o.element, eo(e, t), ao(t, i, null, n);
					var s = t.memoizedState;
					if (i = s.element, o.isDehydrated) if (o = {
						element: i,
						isDehydrated: !1,
						cache: s.cache,
						pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
						transitions: s.transitions
					}, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
						a = ws(Error(r(423)), t), t = Gs(e, t, i, n, a);
						break a;
					} else if (i !== a) {
						a = ws(Error(r(424)), t), t = Gs(e, t, i, n, a);
						break a;
					} else for (xa = Di(t.stateNode.containerInfo.firstChild), ba = t, Sa = !0, Ca = null, n = Ra(t, null, i, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
					else {
						if (Aa(), i === a) {
							t = nc(e, t, n);
							break a;
						}
						Fs(e, t, i, n);
					}
					t = t.child;
				}
				return t;
			case 5: return ho(t), e === null && Da(t), i = t.type, a = t.pendingProps, o = e === null ? null : e.memoizedProps, s = a.children, bi(i, a) ? s = null : o !== null && bi(i, o) && (t.flags |= 32), Bs(e, t), Fs(e, t, s, n), t.child;
			case 6: return e === null && Da(t), null;
			case 13: return Js(e, t, n);
			case 4: return po(t, t.stateNode.containerInfo), i = t.pendingProps, e === null ? t.child = La(t, null, i, n) : Fs(e, t, i, n), t.child;
			case 11: return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : _s(i, a), Is(e, t, i, a, n);
			case 7: return Fs(e, t, t.pendingProps, n), t.child;
			case 8: return Fs(e, t, t.pendingProps.children, n), t.child;
			case 12: return Fs(e, t, t.pendingProps.children, n), t.child;
			case 10:
				a: {
					if (i = t.type._context, a = t.pendingProps, o = t.memoizedProps, s = a.value, Ui(za, i._currentValue), i._currentValue = s, o !== null) if (Dr(o.value, s)) {
						if (o.children === a.children && !Ki.current) {
							t = nc(e, t, n);
							break a;
						}
					} else for (o = t.child, o !== null && (o.return = t); o !== null;) {
						var c = o.dependencies;
						if (c !== null) {
							s = o.child;
							for (var l = c.firstContext; l !== null;) {
								if (l.context === i) {
									if (o.tag === 1) {
										l = to(-1, n & -n), l.tag = 2;
										var u = o.updateQueue;
										if (u !== null) {
											u = u.shared;
											var d = u.pending;
											d === null ? l.next = l : (l.next = d.next, d.next = l), u.pending = l;
										}
									}
									o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), Ga(o.return, n, t), c.lanes |= n;
									break;
								}
								l = l.next;
							}
						} else if (o.tag === 10) s = o.type === t.type ? null : o.child;
						else if (o.tag === 18) {
							if (s = o.return, s === null) throw Error(r(341));
							s.lanes |= n, c = s.alternate, c !== null && (c.lanes |= n), Ga(s, n, t), s = o.sibling;
						} else s = o.child;
						if (s !== null) s.return = o;
						else for (s = o; s !== null;) {
							if (s === t) {
								s = null;
								break;
							}
							if (o = s.sibling, o !== null) {
								o.return = s.return, s = o;
								break;
							}
							s = s.return;
						}
						o = s;
					}
					Fs(e, t, a.children, n), t = t.child;
				}
				return t;
			case 9: return a = t.type, i = t.pendingProps.children, Ka(t, n), a = qa(a), i = i(a), t.flags |= 1, Fs(e, t, i, n), t.child;
			case 14: return i = t.type, a = _s(i, t.pendingProps), a = _s(i.type, a), Ls(e, t, i, a, n);
			case 15: return Rs(e, t, t.type, t.pendingProps, n);
			case 17: return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : _s(i, a), tc(e, t), t.tag = 1, Yi(i) ? (e = !0, $i(t)) : e = !1, Ka(t, n), xs(t, i, a), Cs(t, i, a, n), Us(null, t, i, !0, e, n);
			case 19: return ec(e, t, n);
			case 22: return zs(e, t, n);
		}
		throw Error(r(156, t.tag));
	};
	function Kl(e, t) {
		return mt(e, t);
	}
	function ql(e, t, n, r) {
		this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
	}
	function Jl(e, t, n, r) {
		return new ql(e, t, n, r);
	}
	function Yl(e) {
		return e = e.prototype, !(!e || !e.isReactComponent);
	}
	function Xl(e) {
		if (typeof e == "function") return +!!Yl(e);
		if (e != null) {
			if (e = e.$$typeof, e === re) return 11;
			if (e === k) return 14;
		}
		return 2;
	}
	function Zl(e, t) {
		var n = e.alternate;
		return n === null ? (n = Jl(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
	}
	function Ql(e, t, n, i, a, o) {
		var s = 2;
		if (i = e, typeof e == "function") Yl(e) && (s = 1);
		else if (typeof e == "string") s = 5;
		else a: switch (e) {
			case E: return $l(n.children, a, o, t);
			case ee:
				s = 8, a |= 8;
				break;
			case D: return e = Jl(12, n, t, a | 2), e.elementType = D, e.lanes = o, e;
			case O: return e = Jl(13, n, t, a), e.elementType = O, e.lanes = o, e;
			case ie: return e = Jl(19, n, t, a), e.elementType = ie, e.lanes = o, e;
			case ae: return eu(n, a, o, t);
			default:
				if (typeof e == "object" && e) switch (e.$$typeof) {
					case te:
						s = 10;
						break a;
					case ne:
						s = 9;
						break a;
					case re:
						s = 11;
						break a;
					case k:
						s = 14;
						break a;
					case A:
						s = 16, i = null;
						break a;
				}
				throw Error(r(130, e == null ? e : typeof e, ""));
		}
		return t = Jl(s, n, t, a), t.elementType = e, t.type = i, t.lanes = o, t;
	}
	function $l(e, t, n, r) {
		return e = Jl(7, e, r, t), e.lanes = n, e;
	}
	function eu(e, t, n, r) {
		return e = Jl(22, e, r, t), e.elementType = ae, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
	}
	function tu(e, t, n) {
		return e = Jl(6, e, null, t), e.lanes = n, e;
	}
	function nu(e, t, n) {
		return t = Jl(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}, t;
	}
	function ru(e, t, n, r, i) {
		this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Lt(0), this.expirationTimes = Lt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Lt(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
	}
	function iu(e, t, n, r, i, a, o, s, c) {
		return e = new ru(e, t, n, s, c), t === 1 ? (t = 1, !0 === a && (t |= 8)) : t = 0, a = Jl(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null
		}, $a(a), e;
	}
	function au(e, t, n) {
		var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: T,
			key: r == null ? null : "" + r,
			children: e,
			containerInfo: t,
			implementation: n
		};
	}
	function ou(e) {
		if (!e) return Wi;
		e = e._reactInternals;
		a: {
			if (ct(e) !== e || e.tag !== 1) throw Error(r(170));
			var t = e;
			do {
				switch (t.tag) {
					case 3:
						t = t.stateNode.context;
						break a;
					case 1: if (Yi(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext;
						break a;
					}
				}
				t = t.return;
			} while (t !== null);
			throw Error(r(171));
		}
		if (e.tag === 1) {
			var n = e.type;
			if (Yi(n)) return Qi(e, n, t);
		}
		return t;
	}
	function su(e, t, n, r, i, a, o, s, c) {
		return e = iu(n, r, !0, e, i, a, o, s, c), e.context = ou(null), n = e.current, r = ml(), i = hl(n), a = to(r, i), a.callback = t ?? null, no(n, a, i), e.current.lanes = i, Rt(e, i, r), _l(e, r), e;
	}
	function cu(e, t, n, r) {
		var i = t.current, a = ml(), o = hl(i);
		return n = ou(n), t.context === null ? t.context = n : t.pendingContext = n, t = to(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = no(i, t, o), e !== null && (gl(e, i, o, a), ro(e, i, o)), o;
	}
	function lu(e) {
		if (e = e.current, !e.child) return null;
		switch (e.child.tag) {
			case 5: return e.child.stateNode;
			default: return e.child.stateNode;
		}
	}
	function uu(e, t) {
		if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
			var n = e.retryLane;
			e.retryLane = n !== 0 && n < t ? n : t;
		}
	}
	function Q(e, t) {
		uu(e, t), (e = e.alternate) && uu(e, t);
	}
	function du() {
		return null;
	}
	var fu = typeof reportError == "function" ? reportError : function(e) {
		console.error(e);
	};
	function pu(e) {
		this._internalRoot = e;
	}
	mu.prototype.render = pu.prototype.render = function(e) {
		var t = this._internalRoot;
		if (t === null) throw Error(r(409));
		cu(e, t, null, null);
	}, mu.prototype.unmount = pu.prototype.unmount = function() {
		var e = this._internalRoot;
		if (e !== null) {
			this._internalRoot = null;
			var t = e.containerInfo;
			Tl(function() {
				cu(null, e, null, null);
			}), t[Mi] = null;
		}
	};
	function mu(e) {
		this._internalRoot = e;
	}
	mu.prototype.unstable_scheduleHydration = function(e) {
		if (e) {
			var t = Gt();
			e = {
				blockedOn: null,
				target: e,
				priority: t
			};
			for (var n = 0; n < en.length && t !== 0 && t < en[n].priority; n++);
			en.splice(n, 0, e), n === 0 && on(e);
		}
	};
	function hu(e) {
		return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
	}
	function gu(e) {
		return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
	}
	function _u() {}
	function vu(e, t, n, r, i) {
		if (i) {
			if (typeof r == "function") {
				var a = r;
				r = function() {
					var e = lu(o);
					a.call(e);
				};
			}
			var o = su(t, r, e, 0, null, !1, !1, "", _u);
			return e._reactRootContainer = o, e[Mi] = o.current, oi(e.nodeType === 8 ? e.parentNode : e), Tl(), o;
		}
		for (; i = e.lastChild;) e.removeChild(i);
		if (typeof r == "function") {
			var s = r;
			r = function() {
				var e = lu(c);
				s.call(e);
			};
		}
		var c = iu(e, 0, !1, null, null, !1, !1, "", _u);
		return e._reactRootContainer = c, e[Mi] = c.current, oi(e.nodeType === 8 ? e.parentNode : e), Tl(function() {
			cu(t, c, n, r);
		}), c;
	}
	function yu(e, t, n, r, i) {
		var a = n._reactRootContainer;
		if (a) {
			var o = a;
			if (typeof i == "function") {
				var s = i;
				i = function() {
					var e = lu(o);
					s.call(e);
				};
			}
			cu(t, o, e, i);
		} else o = vu(n, t, e, i, r);
		return lu(o);
	}
	Ht = function(e) {
		switch (e.tag) {
			case 3:
				var t = e.stateNode;
				if (t.current.memoizedState.isDehydrated) {
					var n = jt(t.pendingLanes);
					n !== 0 && (Bt(t, n | 1), _l(t, R()), !(Z & 6) && (nl = R() + 500, oa()));
				}
				break;
			case 13: Tl(function() {
				var t = Za(e, 1);
				t !== null && gl(t, e, 1, ml());
			}), Q(e, 1);
		}
	}, Ut = function(e) {
		if (e.tag === 13) {
			var t = Za(e, 134217728);
			t !== null && gl(t, e, 134217728, ml()), Q(e, 134217728);
		}
	}, Wt = function(e) {
		if (e.tag === 13) {
			var t = hl(e), n = Za(e, t);
			n !== null && gl(n, e, t, ml()), Q(e, t);
		}
	}, Gt = function() {
		return V;
	}, Kt = function(e, t) {
		var n = V;
		try {
			return V = e, t();
		} finally {
			V = n;
		}
	}, Ue = function(e, t, n) {
		switch (t) {
			case "input":
				if (Ce(e, n), t = n.name, n.type === "radio" && t != null) {
					for (n = e; n.parentNode;) n = n.parentNode;
					for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + "][type=\"radio\"]"), t = 0; t < n.length; t++) {
						var i = n[t];
						if (i !== e && i.form === e.form) {
							var a = zi(i);
							if (!a) throw Error(r(90));
							ye(i), Ce(i, a);
						}
					}
				}
				break;
			case "textarea":
				ke(e, n);
				break;
			case "select": t = n.value, t != null && N(e, !!n.multiple, t, !1);
		}
	}, Ye = wl, Xe = Tl;
	var bu = {
		usingClientEntryPoint: !1,
		Events: [
			Li,
			Ri,
			zi,
			qe,
			Je,
			wl
		]
	}, xu = {
		findFiberByHostInstance: Ii,
		bundleType: 0,
		version: "18.3.1",
		rendererPackageName: "react-dom"
	}, Su = {
		bundleType: xu.bundleType,
		version: xu.version,
		rendererPackageName: xu.rendererPackageName,
		rendererConfig: xu.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: C.ReactCurrentDispatcher,
		findHostInstanceByFiber: function(e) {
			return e = ft(e), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: xu.findFiberByHostInstance || du,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var Cu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!Cu.isDisabled && Cu.supportsFiber) try {
			Ct = Cu.inject(Su), wt = Cu;
		} catch {}
	}
	e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bu, e.createPortal = function(e, t) {
		var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
		if (!hu(t)) throw Error(r(200));
		return au(e, t, null, n);
	}, e.createRoot = function(e, t) {
		if (!hu(e)) throw Error(r(299));
		var n = !1, i = "", a = fu;
		return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = iu(e, 1, !1, null, null, n, !1, i, a), e[Mi] = t.current, oi(e.nodeType === 8 ? e.parentNode : e), new pu(t);
	}, e.findDOMNode = function(e) {
		if (e == null) return null;
		if (e.nodeType === 1) return e;
		var t = e._reactInternals;
		if (t === void 0) throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
		return e = ft(t), e = e === null ? null : e.stateNode, e;
	}, e.flushSync = function(e) {
		return Tl(e);
	}, e.hydrate = function(e, t, n) {
		if (!gu(t)) throw Error(r(200));
		return yu(null, e, t, !0, n);
	}, e.hydrateRoot = function(e, t, n) {
		if (!hu(e)) throw Error(r(405));
		var i = n != null && n.hydratedSources || null, a = !1, o = "", s = fu;
		if (n != null && (!0 === n.unstable_strictMode && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = su(t, null, e, 1, n ?? null, a, !1, o, s), e[Mi] = t.current, oi(e), i) for (e = 0; e < i.length; e++) n = i[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a);
		return new mu(t);
	}, e.render = function(e, t, n) {
		if (!gu(t)) throw Error(r(200));
		return yu(null, e, t, !1, n);
	}, e.unmountComponentAtNode = function(e) {
		if (!gu(e)) throw Error(r(40));
		return e._reactRootContainer ? (Tl(function() {
			yu(null, null, e, !1, function() {
				e._reactRootContainer = null, e[Mi] = null;
			});
		}), !0) : !1;
	}, e.unstable_batchedUpdates = wl, e.unstable_renderSubtreeIntoContainer = function(e, t, n, i) {
		if (!gu(n)) throw Error(r(200));
		if (e == null || e._reactInternals === void 0) throw Error(r(38));
		return yu(e, t, n, !1, i);
	}, e.version = "18.3.1-next-f1338f8080-20240426";
})), _ = /* @__PURE__ */ s(((e, t) => {
	function n() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = g();
})), v = /* @__PURE__ */ s(((e) => {
	var t = _();
	e.createRoot = t.createRoot, e.hydrateRoot = t.hydrateRoot;
})), y = /* @__PURE__ */ s(((e) => {
	var t = p();
	function n(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var r = typeof Object.is == "function" ? Object.is : n, i = t.useSyncExternalStore, a = t.useRef, o = t.useEffect, s = t.useMemo, c = t.useDebugValue;
	e.useSyncExternalStoreWithSelector = function(e, t, n, l, u) {
		var d = a(null);
		if (d.current === null) {
			var f = {
				hasValue: !1,
				value: null
			};
			d.current = f;
		} else f = d.current;
		d = s(function() {
			function e(e) {
				if (!i) {
					if (i = !0, a = e, e = l(e), u !== void 0 && f.hasValue) {
						var t = f.value;
						if (u(t, e)) return o = t;
					}
					return o = e;
				}
				if (t = o, r(a, e)) return t;
				var n = l(e);
				return u !== void 0 && u(t, n) ? (a = e, t) : (a = e, o = n);
			}
			var i = !1, a, o, s = n === void 0 ? null : n;
			return [function() {
				return e(t());
			}, s === null ? void 0 : function() {
				return e(s());
			}];
		}, [
			t,
			n,
			l,
			u
		]);
		var p = i(e, d[0], d[1]);
		return o(function() {
			f.hasValue = !0, f.value = p;
		}, [p]), c(p), p;
	};
})), b = /* @__PURE__ */ s(((e, t) => {
	t.exports = y();
})), x = v(), S = /* @__PURE__ */ u(p(), 1), C = b();
function w(e) {
	e();
}
function T() {
	let e = null, t = null;
	return {
		clear() {
			e = null, t = null;
		},
		notify() {
			w(() => {
				let t = e;
				for (; t;) t.callback(), t = t.next;
			});
		},
		get() {
			let t = [], n = e;
			for (; n;) t.push(n), n = n.next;
			return t;
		},
		subscribe(n) {
			let r = !0, i = t = {
				callback: n,
				next: null,
				prev: t
			};
			return i.prev ? i.prev.next = i : e = i, function() {
				!r || e === null || (r = !1, i.next ? i.next.prev = i.prev : t = i.prev, i.prev ? i.prev.next = i.next : e = i.next);
			};
		}
	};
}
var E = {
	notify() {},
	get: () => []
};
function ee(e, t) {
	let n, r = E, i = 0, a = !1;
	function o(e) {
		u();
		let t = r.subscribe(e), n = !1;
		return () => {
			n || (n = !0, t(), d());
		};
	}
	function s() {
		r.notify();
	}
	function c() {
		m.onStateChange && m.onStateChange();
	}
	function l() {
		return a;
	}
	function u() {
		i++, n || (n = t ? t.addNestedSub(c) : e.subscribe(c), r = T());
	}
	function d() {
		i--, n && i === 0 && (n(), n = void 0, r.clear(), r = E);
	}
	function f() {
		a || (a = !0, u());
	}
	function p() {
		a && (a = !1, d());
	}
	let m = {
		addNestedSub: o,
		notifyNestedSubs: s,
		handleChangeWrapper: c,
		isSubscribed: l,
		trySubscribe: f,
		tryUnsubscribe: p,
		getListeners: () => r
	};
	return m;
}
var D = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, te = typeof navigator < "u" && navigator.product === "ReactNative", ne = D || te ? S.useLayoutEffect : S.useEffect, re = /* @__PURE__ */ Symbol.for("react-redux-context"), O = typeof globalThis < "u" ? globalThis : {};
function ie() {
	if (!S.createContext) return {};
	let e = O[re] ??= /* @__PURE__ */ new Map(), t = e.get(S.createContext);
	return t || (t = S.createContext(null), e.set(S.createContext, t)), t;
}
var k = /* @__PURE__ */ ie();
function A(e) {
	let { children: t, context: n, serverState: r, store: i } = e, a = S.useMemo(() => ({
		store: i,
		subscription: ee(i),
		getServerState: r ? () => r : void 0
	}), [i, r]), o = S.useMemo(() => i.getState(), [i]);
	ne(() => {
		let { subscription: e } = a;
		return e.onStateChange = e.notifyNestedSubs, e.trySubscribe(), o !== i.getState() && e.notifyNestedSubs(), () => {
			e.tryUnsubscribe(), e.onStateChange = void 0;
		};
	}, [a, o]);
	let s = n || k;
	return /* @__PURE__ */ S.createElement(s.Provider, { value: a }, t);
}
var ae = A;
function oe(e = k) {
	return function() {
		return S.useContext(e);
	};
}
var se = /* @__PURE__ */ oe();
function j(e = k) {
	let t = e === k ? se : oe(e), n = () => {
		let { store: e } = t();
		return e;
	};
	return Object.assign(n, { withTypes: () => n }), n;
}
var ce = /* @__PURE__ */ j();
function le(e = k) {
	let t = e === k ? ce : j(e), n = () => t().dispatch;
	return Object.assign(n, { withTypes: () => n }), n;
}
var ue = /* @__PURE__ */ le(), de = (e, t) => e === t;
function fe(e = k) {
	let t = e === k ? se : oe(e), n = (e, n = {}) => {
		let { equalityFn: r = de } = typeof n == "function" ? { equalityFn: n } : n, { store: i, subscription: a, getServerState: o } = t();
		S.useRef(!0);
		let s = S.useCallback({ [e.name](t) {
			return e(t);
		} }[e.name], [e]), c = (0, C.useSyncExternalStoreWithSelector)(a.addNestedSub, i.getState, o || i.getState, s, r);
		return S.useDebugValue(c), c;
	};
	return Object.assign(n, { withTypes: () => n }), n;
}
var pe = /* @__PURE__ */ fe();
//#endregion
//#region node_modules/redux/dist/redux.mjs
function me(e) {
	return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var he = typeof Symbol == "function" && Symbol.observable || "@@observable", ge = () => Math.random().toString(36).substring(7).split("").join("."), _e = {
	INIT: `@@redux/INIT${/* @__PURE__ */ ge()}`,
	REPLACE: `@@redux/REPLACE${/* @__PURE__ */ ge()}`,
	PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${ge()}`
};
function ve(e) {
	if (typeof e != "object" || !e) return !1;
	let t = e;
	for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
	return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function ye(e, t, n) {
	if (typeof e != "function") throw Error(me(2));
	if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function") throw Error(me(0));
	if (typeof t == "function" && n === void 0 && (n = t, t = void 0), n !== void 0) {
		if (typeof n != "function") throw Error(me(1));
		return n(ye)(e, t);
	}
	let r = e, i = t, a = /* @__PURE__ */ new Map(), o = a, s = 0, c = !1;
	function l() {
		o === a && (o = /* @__PURE__ */ new Map(), a.forEach((e, t) => {
			o.set(t, e);
		}));
	}
	function u() {
		if (c) throw Error(me(3));
		return i;
	}
	function d(e) {
		if (typeof e != "function") throw Error(me(4));
		if (c) throw Error(me(5));
		let t = !0;
		l();
		let n = s++;
		return o.set(n, e), function() {
			if (t) {
				if (c) throw Error(me(6));
				t = !1, l(), o.delete(n), a = null;
			}
		};
	}
	function f(e) {
		if (!ve(e)) throw Error(me(7));
		if (e.type === void 0) throw Error(me(8));
		if (typeof e.type != "string") throw Error(me(17));
		if (c) throw Error(me(9));
		try {
			c = !0, i = r(i, e);
		} finally {
			c = !1;
		}
		return (a = o).forEach((e) => {
			e();
		}), e;
	}
	function p(e) {
		if (typeof e != "function") throw Error(me(10));
		r = e, f({ type: _e.REPLACE });
	}
	function m() {
		let e = d;
		return {
			subscribe(t) {
				if (typeof t != "object" || !t) throw Error(me(11));
				function n() {
					let e = t;
					e.next && e.next(u());
				}
				return n(), { unsubscribe: e(n) };
			},
			[he]() {
				return this;
			}
		};
	}
	return f({ type: _e.INIT }), {
		dispatch: f,
		subscribe: d,
		getState: u,
		replaceReducer: p,
		[he]: m
	};
}
//#endregion
//#region app/js/store.js
var be = {
	changeSimulationRound: function(e) {
		return {
			type: "changeSimulationRound",
			value: e
		};
	},
	changeSector: function(e) {
		return {
			type: "changeSector",
			value: e
		};
	},
	toggleExperiments: function(e) {
		return {
			type: "toggleExperiments",
			value: e
		};
	},
	toggleGroup: function(e) {
		return {
			type: "toggleGroup",
			value: e
		};
	},
	toggleGroup3: function() {
		return { type: "toggleGroup3" };
	}
};
function xe(e, t) {
	switch (t.type) {
		case "changeSimulationRound": return {
			...e,
			config: {
				...e.config,
				simulation_round: t.value
			}
		};
		case "changeSector": return e.config.sectors.find((e) => e === t.value) ? {
			...e,
			config: {
				...e.config,
				sectors: e.config.sectors.filter((e) => e !== t.value)
			}
		} : {
			...e,
			config: {
				...e.config,
				sectors: [...e.config.sectors, t.value]
			}
		};
		case "toggleExperiments": return e.config.experiments.find((e) => e === t.value) ? {
			...e,
			config: {
				...e.config,
				experiments: e.config.experiments.filter((e) => e !== t.value)
			}
		} : {
			...e,
			config: {
				...e.config,
				experiments: [...e.config.experiments, t.value]
			}
		};
		case "toggleGroup": return e.config.groups.find((e) => e === t.value) ? {
			...e,
			config: {
				...e.config,
				groups: e.config.groups.filter((e) => e !== t.value)
			}
		} : {
			...e,
			config: {
				...e.config,
				groups: [...e.config.groups, t.value]
			}
		};
		case "toggleGroup3": return {
			...e,
			config: {
				...e.config,
				group3: !e.config.group3
			}
		};
		default: return e;
	}
}
//#endregion
//#region app/js/utils/location.js
var M = (/* @__PURE__ */ s(((e, t) => {
	(function() {
		var n, r = "4.18.1", i = 200, a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", o = "Expected a function", s = "Invalid `variable` option passed into `_.template`", c = "Invalid `imports` option passed into `_.template`", l = "__lodash_hash_undefined__", u = 500, d = "__lodash_placeholder__", f = 1, p = 2, m = 4, h = 1, g = 2, _ = 1, v = 2, y = 4, b = 8, x = 16, S = 32, C = 64, w = 128, T = 256, E = 512, ee = 30, D = "...", te = 800, ne = 16, re = 1, O = 2, ie = 3, k = Infinity, A = 9007199254740991, ae = 17976931348623157e292, oe = NaN, se = 4294967295, j = se - 1, ce = se >>> 1, le = [
			["ary", w],
			["bind", _],
			["bindKey", v],
			["curry", b],
			["curryRight", x],
			["flip", E],
			["partial", S],
			["partialRight", C],
			["rearg", T]
		], ue = "[object Arguments]", de = "[object Array]", fe = "[object AsyncFunction]", pe = "[object Boolean]", me = "[object Date]", he = "[object DOMException]", ge = "[object Error]", _e = "[object Function]", ve = "[object GeneratorFunction]", ye = "[object Map]", be = "[object Number]", xe = "[object Null]", M = "[object Object]", Se = "[object Promise]", Ce = "[object Proxy]", we = "[object RegExp]", Te = "[object Set]", Ee = "[object String]", N = "[object Symbol]", De = "[object Undefined]", Oe = "[object WeakMap]", ke = "[object WeakSet]", Ae = "[object ArrayBuffer]", je = "[object DataView]", Me = "[object Float32Array]", Ne = "[object Float64Array]", P = "[object Int8Array]", Pe = "[object Int16Array]", Fe = "[object Int32Array]", Ie = "[object Uint8Array]", F = "[object Uint8ClampedArray]", Le = "[object Uint16Array]", Re = "[object Uint32Array]", ze = /\b__p \+= '';/g, Be = /\b(__p \+=) '' \+/g, Ve = /(__e\(.*?\)|\b__t\)) \+\n'';/g, He = /&(?:amp|lt|gt|quot|#39);/g, Ue = /[&<>"']/g, We = RegExp(He.source), Ge = RegExp(Ue.source), Ke = /<%-([\s\S]+?)%>/g, qe = /<%([\s\S]+?)%>/g, Je = /<%=([\s\S]+?)%>/g, Ye = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Xe = /^\w*$/, Ze = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Qe = /[\\^$.*+?()[\]{}|]/g, $e = RegExp(Qe.source), et = /^\s+/, tt = /\s/, nt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, I = /\{\n\/\* \[wrapped with (.+)\] \*/, rt = /,? & /, it = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, L = /[()=,{}\[\]\/\s]/, at = /\\(\\)?/g, ot = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, st = /\w*$/, ct = /^[-+]0x[0-9a-f]+$/i, lt = /^0b[01]+$/i, ut = /^\[object .+?Constructor\]$/, dt = /^0o[0-7]+$/i, ft = /^(?:0|[1-9]\d*)$/, pt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, mt = /($^)/, ht = /['\n\r\u2028\u2029\\]/g, gt = "\\ud800-\\udfff", _t = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", R = "\\u2700-\\u27bf", z = "a-z\\xdf-\\xf6\\xf8-\\xff", vt = "\\xac\\xb1\\xd7\\xf7", yt = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", bt = "\\u2000-\\u206f", xt = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", St = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ct = "\\ufe0e\\ufe0f", wt = vt + yt + bt + xt, Tt = "['’]", B = "[" + gt + "]", Et = "[" + wt + "]", Dt = "[" + _t + "]", Ot = "\\d+", kt = "[" + R + "]", At = "[" + z + "]", jt = "[^" + gt + wt + Ot + R + z + St + "]", Mt = "\\ud83c[\\udffb-\\udfff]", Nt = "(?:" + Dt + "|" + Mt + ")", Pt = "[^" + gt + "]", Ft = "(?:\\ud83c[\\udde6-\\uddff]){2}", It = "[\\ud800-\\udbff][\\udc00-\\udfff]", Lt = "[" + St + "]", Rt = "\\u200d", zt = "(?:" + At + "|" + jt + ")", Bt = "(?:" + Lt + "|" + jt + ")", V = "(?:" + Tt + "(?:d|ll|m|re|s|t|ve))?", Vt = "(?:" + Tt + "(?:D|LL|M|RE|S|T|VE))?", Ht = Nt + "?", Ut = "[" + Ct + "]?", Wt = "(?:" + Rt + "(?:" + [
			Pt,
			Ft,
			It
		].join("|") + ")" + Ut + Ht + ")*", Gt = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Kt = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", qt = Ut + Ht + Wt, Jt = "(?:" + [
			kt,
			Ft,
			It
		].join("|") + ")" + qt, Yt = "(?:" + [
			Pt + Dt + "?",
			Dt,
			Ft,
			It,
			B
		].join("|") + ")", Xt = RegExp(Tt, "g"), Zt = RegExp(Dt, "g"), Qt = RegExp(Mt + "(?=" + Mt + ")|" + Yt + qt, "g"), $t = RegExp([
			Lt + "?" + At + "+" + V + "(?=" + [
				Et,
				Lt,
				"$"
			].join("|") + ")",
			Bt + "+" + Vt + "(?=" + [
				Et,
				Lt + zt,
				"$"
			].join("|") + ")",
			Lt + "?" + zt + "+" + V,
			Lt + "+" + Vt,
			Kt,
			Gt,
			Ot,
			Jt
		].join("|"), "g"), en = RegExp("[" + Rt + gt + _t + Ct + "]"), tn = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, nn = /* @__PURE__ */ "Array.Buffer.DataView.Date.Error.Float32Array.Float64Array.Function.Int8Array.Int16Array.Int32Array.Map.Math.Object.Promise.RegExp.Set.String.Symbol.TypeError.Uint8Array.Uint8ClampedArray.Uint16Array.Uint32Array.WeakMap._.clearTimeout.isFinite.parseInt.setTimeout".split("."), rn = -1, an = {};
		an[Me] = an[Ne] = an[P] = an[Pe] = an[Fe] = an[Ie] = an[F] = an[Le] = an[Re] = !0, an[ue] = an[de] = an[Ae] = an[pe] = an[je] = an[me] = an[ge] = an[_e] = an[ye] = an[be] = an[M] = an[we] = an[Te] = an[Ee] = an[Oe] = !1;
		var on = {};
		on[ue] = on[de] = on[Ae] = on[je] = on[pe] = on[me] = on[Me] = on[Ne] = on[P] = on[Pe] = on[Fe] = on[ye] = on[be] = on[M] = on[we] = on[Te] = on[Ee] = on[N] = on[Ie] = on[F] = on[Le] = on[Re] = !0, on[ge] = on[_e] = on[Oe] = !1;
		var sn = {
			À: "A",
			Á: "A",
			Â: "A",
			Ã: "A",
			Ä: "A",
			Å: "A",
			à: "a",
			á: "a",
			â: "a",
			ã: "a",
			ä: "a",
			å: "a",
			Ç: "C",
			ç: "c",
			Ð: "D",
			ð: "d",
			È: "E",
			É: "E",
			Ê: "E",
			Ë: "E",
			è: "e",
			é: "e",
			ê: "e",
			ë: "e",
			Ì: "I",
			Í: "I",
			Î: "I",
			Ï: "I",
			ì: "i",
			í: "i",
			î: "i",
			ï: "i",
			Ñ: "N",
			ñ: "n",
			Ò: "O",
			Ó: "O",
			Ô: "O",
			Õ: "O",
			Ö: "O",
			Ø: "O",
			ò: "o",
			ó: "o",
			ô: "o",
			õ: "o",
			ö: "o",
			ø: "o",
			Ù: "U",
			Ú: "U",
			Û: "U",
			Ü: "U",
			ù: "u",
			ú: "u",
			û: "u",
			ü: "u",
			Ý: "Y",
			ý: "y",
			ÿ: "y",
			Æ: "Ae",
			æ: "ae",
			Þ: "Th",
			þ: "th",
			ß: "ss",
			Ā: "A",
			Ă: "A",
			Ą: "A",
			ā: "a",
			ă: "a",
			ą: "a",
			Ć: "C",
			Ĉ: "C",
			Ċ: "C",
			Č: "C",
			ć: "c",
			ĉ: "c",
			ċ: "c",
			č: "c",
			Ď: "D",
			Đ: "D",
			ď: "d",
			đ: "d",
			Ē: "E",
			Ĕ: "E",
			Ė: "E",
			Ę: "E",
			Ě: "E",
			ē: "e",
			ĕ: "e",
			ė: "e",
			ę: "e",
			ě: "e",
			Ĝ: "G",
			Ğ: "G",
			Ġ: "G",
			Ģ: "G",
			ĝ: "g",
			ğ: "g",
			ġ: "g",
			ģ: "g",
			Ĥ: "H",
			Ħ: "H",
			ĥ: "h",
			ħ: "h",
			Ĩ: "I",
			Ī: "I",
			Ĭ: "I",
			Į: "I",
			İ: "I",
			ĩ: "i",
			ī: "i",
			ĭ: "i",
			į: "i",
			ı: "i",
			Ĵ: "J",
			ĵ: "j",
			Ķ: "K",
			ķ: "k",
			ĸ: "k",
			Ĺ: "L",
			Ļ: "L",
			Ľ: "L",
			Ŀ: "L",
			Ł: "L",
			ĺ: "l",
			ļ: "l",
			ľ: "l",
			ŀ: "l",
			ł: "l",
			Ń: "N",
			Ņ: "N",
			Ň: "N",
			Ŋ: "N",
			ń: "n",
			ņ: "n",
			ň: "n",
			ŋ: "n",
			Ō: "O",
			Ŏ: "O",
			Ő: "O",
			ō: "o",
			ŏ: "o",
			ő: "o",
			Ŕ: "R",
			Ŗ: "R",
			Ř: "R",
			ŕ: "r",
			ŗ: "r",
			ř: "r",
			Ś: "S",
			Ŝ: "S",
			Ş: "S",
			Š: "S",
			ś: "s",
			ŝ: "s",
			ş: "s",
			š: "s",
			Ţ: "T",
			Ť: "T",
			Ŧ: "T",
			ţ: "t",
			ť: "t",
			ŧ: "t",
			Ũ: "U",
			Ū: "U",
			Ŭ: "U",
			Ů: "U",
			Ű: "U",
			Ų: "U",
			ũ: "u",
			ū: "u",
			ŭ: "u",
			ů: "u",
			ű: "u",
			ų: "u",
			Ŵ: "W",
			ŵ: "w",
			Ŷ: "Y",
			ŷ: "y",
			Ÿ: "Y",
			Ź: "Z",
			Ż: "Z",
			Ž: "Z",
			ź: "z",
			ż: "z",
			ž: "z",
			Ĳ: "IJ",
			ĳ: "ij",
			Œ: "Oe",
			œ: "oe",
			ŉ: "'n",
			ſ: "s"
		}, cn = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			"\"": "&quot;",
			"'": "&#39;"
		}, ln = {
			"&amp;": "&",
			"&lt;": "<",
			"&gt;": ">",
			"&quot;": "\"",
			"&#39;": "'"
		}, un = {
			"\\": "\\",
			"'": "'",
			"\n": "n",
			"\r": "r",
			"\u2028": "u2028",
			"\u2029": "u2029"
		}, dn = parseFloat, fn = parseInt, pn = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis, mn = typeof self == "object" && self && self.Object === Object && self, hn = pn || mn || Function("return this")(), gn = typeof e == "object" && e && !e.nodeType && e, _n = gn && typeof t == "object" && t && !t.nodeType && t, vn = _n && _n.exports === gn, yn = vn && pn.process, bn = function() {
			try {
				return _n && _n.require && _n.require("util").types || yn && yn.binding && yn.binding("util");
			} catch {}
		}(), xn = bn && bn.isArrayBuffer, Sn = bn && bn.isDate, Cn = bn && bn.isMap, wn = bn && bn.isRegExp, Tn = bn && bn.isSet, En = bn && bn.isTypedArray;
		function Dn(e, t, n) {
			switch (n.length) {
				case 0: return e.call(t);
				case 1: return e.call(t, n[0]);
				case 2: return e.call(t, n[0], n[1]);
				case 3: return e.call(t, n[0], n[1], n[2]);
			}
			return e.apply(t, n);
		}
		function On(e, t, n, r) {
			for (var i = -1, a = e == null ? 0 : e.length; ++i < a;) {
				var o = e[i];
				t(r, o, n(o), e);
			}
			return r;
		}
		function kn(e, t) {
			for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
			return e;
		}
		function An(e, t) {
			for (var n = e == null ? 0 : e.length; n-- && t(e[n], n, e) !== !1;);
			return e;
		}
		function jn(e, t) {
			for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (!t(e[n], n, e)) return !1;
			return !0;
		}
		function Mn(e, t) {
			for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
				var o = e[n];
				t(o, n, e) && (a[i++] = o);
			}
			return a;
		}
		function Nn(e, t) {
			return !!(e != null && e.length) && Un(e, t, 0) > -1;
		}
		function Pn(e, t, n) {
			for (var r = -1, i = e == null ? 0 : e.length; ++r < i;) if (n(t, e[r])) return !0;
			return !1;
		}
		function Fn(e, t) {
			for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
			return i;
		}
		function In(e, t) {
			for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
			return e;
		}
		function Ln(e, t, n, r) {
			var i = -1, a = e == null ? 0 : e.length;
			for (r && a && (n = e[++i]); ++i < a;) n = t(n, e[i], i, e);
			return n;
		}
		function Rn(e, t, n, r) {
			var i = e == null ? 0 : e.length;
			for (r && i && (n = e[--i]); i--;) n = t(n, e[i], i, e);
			return n;
		}
		function H(e, t) {
			for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
			return !1;
		}
		var zn = qn("length");
		function U(e) {
			return e.split("");
		}
		function Bn(e) {
			return e.match(it) || [];
		}
		function Vn(e, t, n) {
			var r;
			return n(e, function(e, n, i) {
				if (t(e, n, i)) return r = n, !1;
			}), r;
		}
		function Hn(e, t, n, r) {
			for (var i = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < i;) if (t(e[a], a, e)) return a;
			return -1;
		}
		function Un(e, t, n) {
			return t === t ? yr(e, t, n) : Hn(e, Gn, n);
		}
		function Wn(e, t, n, r) {
			for (var i = n - 1, a = e.length; ++i < a;) if (r(e[i], t)) return i;
			return -1;
		}
		function Gn(e) {
			return e !== e;
		}
		function Kn(e, t) {
			var n = e == null ? 0 : e.length;
			return n ? Zn(e, t) / n : oe;
		}
		function qn(e) {
			return function(t) {
				return t == null ? n : t[e];
			};
		}
		function Jn(e) {
			return function(t) {
				return e == null ? n : e[t];
			};
		}
		function Yn(e, t, n, r, i) {
			return i(e, function(e, i, a) {
				n = r ? (r = !1, e) : t(n, e, i, a);
			}), n;
		}
		function Xn(e, t) {
			var n = e.length;
			for (e.sort(t); n--;) e[n] = e[n].value;
			return e;
		}
		function Zn(e, t) {
			for (var r, i = -1, a = e.length; ++i < a;) {
				var o = t(e[i]);
				o !== n && (r = r === n ? o : r + o);
			}
			return r;
		}
		function Qn(e, t) {
			for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
			return r;
		}
		function $n(e, t) {
			return Fn(t, function(t) {
				return [t, e[t]];
			});
		}
		function er(e) {
			return e && e.slice(0, Cr(e) + 1).replace(et, "");
		}
		function tr(e) {
			return function(t) {
				return e(t);
			};
		}
		function nr(e, t) {
			return Fn(t, function(t) {
				return e[t];
			});
		}
		function rr(e, t) {
			return e.has(t);
		}
		function ir(e, t) {
			for (var n = -1, r = e.length; ++n < r && Un(t, e[n], 0) > -1;);
			return n;
		}
		function ar(e, t) {
			for (var n = e.length; n-- && Un(t, e[n], 0) > -1;);
			return n;
		}
		function or(e, t) {
			for (var n = e.length, r = 0; n--;) e[n] === t && ++r;
			return r;
		}
		var sr = Jn(sn), cr = Jn(cn);
		function lr(e) {
			return "\\" + un[e];
		}
		function ur(e, t) {
			return e == null ? n : e[t];
		}
		function dr(e) {
			return en.test(e);
		}
		function fr(e) {
			return tn.test(e);
		}
		function pr(e) {
			for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
			return n;
		}
		function mr(e) {
			var t = -1, n = Array(e.size);
			return e.forEach(function(e, r) {
				n[++t] = [r, e];
			}), n;
		}
		function hr(e, t) {
			return function(n) {
				return e(t(n));
			};
		}
		function gr(e, t) {
			for (var n = -1, r = e.length, i = 0, a = []; ++n < r;) {
				var o = e[n];
				(o === t || o === d) && (e[n] = d, a[i++] = n);
			}
			return a;
		}
		function _r(e) {
			var t = -1, n = Array(e.size);
			return e.forEach(function(e) {
				n[++t] = e;
			}), n;
		}
		function vr(e) {
			var t = -1, n = Array(e.size);
			return e.forEach(function(e) {
				n[++t] = [e, e];
			}), n;
		}
		function yr(e, t, n) {
			for (var r = n - 1, i = e.length; ++r < i;) if (e[r] === t) return r;
			return -1;
		}
		function br(e, t, n) {
			for (var r = n + 1; r--;) if (e[r] === t) return r;
			return r;
		}
		function xr(e) {
			return dr(e) ? Tr(e) : zn(e);
		}
		function Sr(e) {
			return dr(e) ? Er(e) : U(e);
		}
		function Cr(e) {
			for (var t = e.length; t-- && tt.test(e.charAt(t)););
			return t;
		}
		var wr = Jn(ln);
		function Tr(e) {
			for (var t = Qt.lastIndex = 0; Qt.test(e);) ++t;
			return t;
		}
		function Er(e) {
			return e.match(Qt) || [];
		}
		function Dr(e) {
			return e.match($t) || [];
		}
		var Or = (function e(t) {
			t = t == null ? hn : Or.defaults(hn.Object(), t, Or.pick(hn, nn));
			var tt = t.Array, it = t.Date, gt = t.Error, _t = t.Function, R = t.Math, z = t.Object, vt = t.RegExp, yt = t.String, bt = t.TypeError, xt = tt.prototype, St = _t.prototype, Ct = z.prototype, wt = t["__core-js_shared__"], Tt = St.toString, B = Ct.hasOwnProperty, Et = 0, Dt = function() {
				var e = /[^.]+$/.exec(wt && wt.keys && wt.keys.IE_PROTO || "");
				return e ? "Symbol(src)_1." + e : "";
			}(), Ot = Ct.toString, kt = Tt.call(z), At = hn._, jt = vt("^" + Tt.call(B).replace(Qe, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Mt = vn ? t.Buffer : n, Nt = t.Symbol, Pt = t.Uint8Array, Ft = Mt ? Mt.allocUnsafe : n, It = hr(z.getPrototypeOf, z), Lt = z.create, Rt = Ct.propertyIsEnumerable, zt = xt.splice, Bt = Nt ? Nt.isConcatSpreadable : n, V = Nt ? Nt.iterator : n, Vt = Nt ? Nt.toStringTag : n, Ht = function() {
				try {
					var e = $o(z, "defineProperty");
					return e({}, "", {}), e;
				} catch {}
			}(), Ut = t.clearTimeout !== hn.clearTimeout && t.clearTimeout, Wt = it && it.now !== hn.Date.now && it.now, Gt = t.setTimeout !== hn.setTimeout && t.setTimeout, Kt = R.ceil, qt = R.floor, Jt = z.getOwnPropertySymbols, Yt = Mt ? Mt.isBuffer : n, Qt = t.isFinite, $t = xt.join, en = hr(z.keys, z), tn = R.max, sn = R.min, cn = it.now, ln = t.parseInt, un = R.random, pn = xt.reverse, mn = $o(t, "DataView"), gn = $o(t, "Map"), _n = $o(t, "Promise"), yn = $o(t, "Set"), bn = $o(t, "WeakMap"), zn = $o(z, "create"), U = bn && new bn(), Jn = {}, yr = Ls(mn), Tr = Ls(gn), Er = Ls(_n), kr = Ls(yn), Ar = Ls(bn), jr = Nt ? Nt.prototype : n, Mr = jr ? jr.valueOf : n, Nr = jr ? jr.toString : n;
			function W(e) {
				if (Du(e) && !Q(e) && !(e instanceof G)) {
					if (e instanceof Ir) return e;
					if (B.call(e, "__wrapped__")) return zs(e);
				}
				return new Ir(e);
			}
			var Pr = function() {
				function e() {}
				return function(t) {
					if (!Eu(t)) return {};
					if (Lt) return Lt(t);
					e.prototype = t;
					var r = new e();
					return e.prototype = n, r;
				};
			}();
			function Fr() {}
			function Ir(e, t) {
				this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = n;
			}
			W.templateSettings = {
				escape: Ke,
				evaluate: qe,
				interpolate: Je,
				variable: "",
				imports: { _: W }
			}, W.prototype = Fr.prototype, W.prototype.constructor = W, Ir.prototype = Pr(Fr.prototype), Ir.prototype.constructor = Ir;
			function G(e) {
				this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = se, this.__views__ = [];
			}
			function Lr() {
				var e = new G(this.__wrapped__);
				return e.__actions__ = uo(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = uo(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = uo(this.__views__), e;
			}
			function Rr() {
				if (this.__filtered__) {
					var e = new G(this);
					e.__dir__ = -1, e.__filtered__ = !0;
				} else e = this.clone(), e.__dir__ *= -1;
				return e;
			}
			function zr() {
				var e = this.__wrapped__.value(), t = this.__dir__, n = Q(e), r = t < 0, i = n ? e.length : 0, a = is(0, i, this.__views__), o = a.start, s = a.end, c = s - o, l = r ? s : o - 1, u = this.__iteratees__, d = u.length, f = 0, p = sn(c, this.__takeCount__);
				if (!n || !r && i == c && p == c) return Ga(e, this.__actions__);
				var m = [];
				outer: for (; c-- && f < p;) {
					l += t;
					for (var h = -1, g = e[l]; ++h < d;) {
						var _ = u[h], v = _.iteratee, y = _.type, b = v(g);
						if (y == O) g = b;
						else if (!b) {
							if (y == re) continue outer;
							break outer;
						}
					}
					m[f++] = g;
				}
				return m;
			}
			G.prototype = Pr(Fr.prototype), G.prototype.constructor = G;
			function Br(e) {
				var t = -1, n = e == null ? 0 : e.length;
				for (this.clear(); ++t < n;) {
					var r = e[t];
					this.set(r[0], r[1]);
				}
			}
			function Vr() {
				this.__data__ = zn ? zn(null) : {}, this.size = 0;
			}
			function Hr(e) {
				var t = this.has(e) && delete this.__data__[e];
				return this.size -= +!!t, t;
			}
			function Ur(e) {
				var t = this.__data__;
				if (zn) {
					var r = t[e];
					return r === l ? n : r;
				}
				return B.call(t, e) ? t[e] : n;
			}
			function Wr(e) {
				var t = this.__data__;
				return zn ? t[e] !== n : B.call(t, e);
			}
			function Gr(e, t) {
				var r = this.__data__;
				return this.size += +!this.has(e), r[e] = zn && t === n ? l : t, this;
			}
			Br.prototype.clear = Vr, Br.prototype.delete = Hr, Br.prototype.get = Ur, Br.prototype.has = Wr, Br.prototype.set = Gr;
			function Kr(e) {
				var t = -1, n = e == null ? 0 : e.length;
				for (this.clear(); ++t < n;) {
					var r = e[t];
					this.set(r[0], r[1]);
				}
			}
			function qr() {
				this.__data__ = [], this.size = 0;
			}
			function Jr(e) {
				var t = this.__data__, n = yi(t, e);
				return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : zt.call(t, n, 1), --this.size, !0);
			}
			function Yr(e) {
				var t = this.__data__, r = yi(t, e);
				return r < 0 ? n : t[r][1];
			}
			function Xr(e) {
				return yi(this.__data__, e) > -1;
			}
			function Zr(e, t) {
				var n = this.__data__, r = yi(n, e);
				return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
			}
			Kr.prototype.clear = qr, Kr.prototype.delete = Jr, Kr.prototype.get = Yr, Kr.prototype.has = Xr, Kr.prototype.set = Zr;
			function Qr(e) {
				var t = -1, n = e == null ? 0 : e.length;
				for (this.clear(); ++t < n;) {
					var r = e[t];
					this.set(r[0], r[1]);
				}
			}
			function $r() {
				this.size = 0, this.__data__ = {
					hash: new Br(),
					map: new (gn || Kr)(),
					string: new Br()
				};
			}
			function ei(e) {
				var t = Zo(this, e).delete(e);
				return this.size -= +!!t, t;
			}
			function ti(e) {
				return Zo(this, e).get(e);
			}
			function ni(e) {
				return Zo(this, e).has(e);
			}
			function ri(e, t) {
				var n = Zo(this, e), r = n.size;
				return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
			}
			Qr.prototype.clear = $r, Qr.prototype.delete = ei, Qr.prototype.get = ti, Qr.prototype.has = ni, Qr.prototype.set = ri;
			function ii(e) {
				var t = -1, n = e == null ? 0 : e.length;
				for (this.__data__ = new Qr(); ++t < n;) this.add(e[t]);
			}
			function ai(e) {
				return this.__data__.set(e, l), this;
			}
			function oi(e) {
				return this.__data__.has(e);
			}
			ii.prototype.add = ii.prototype.push = ai, ii.prototype.has = oi;
			function si(e) {
				this.size = (this.__data__ = new Kr(e)).size;
			}
			function ci() {
				this.__data__ = new Kr(), this.size = 0;
			}
			function li(e) {
				var t = this.__data__, n = t.delete(e);
				return this.size = t.size, n;
			}
			function ui(e) {
				return this.__data__.get(e);
			}
			function di(e) {
				return this.__data__.has(e);
			}
			function fi(e, t) {
				var n = this.__data__;
				if (n instanceof Kr) {
					var r = n.__data__;
					if (!gn || r.length < i - 1) return r.push([e, t]), this.size = ++n.size, this;
					n = this.__data__ = new Qr(r);
				}
				return n.set(e, t), this.size = n.size, this;
			}
			si.prototype.clear = ci, si.prototype.delete = li, si.prototype.get = ui, si.prototype.has = di, si.prototype.set = fi;
			function pi(e, t) {
				var n = Q(e), r = !n && uu(e), i = !n && !r && hu(e), a = !n && !r && !i && Hu(e), o = n || r || i || a, s = o ? Qn(e.length, yt) : [], c = s.length;
				for (var l in e) (t || B.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || fs(l, c))) && s.push(l);
				return s;
			}
			function mi(e) {
				var t = e.length;
				return t ? e[Ta(0, t - 1)] : n;
			}
			function hi(e, t) {
				return Ps(uo(e), Ti(t, 0, e.length));
			}
			function gi(e) {
				return Ps(uo(e));
			}
			function _i(e, t, r) {
				(r !== n && !su(e[t], r) || r === n && !(t in e)) && Ci(e, t, r);
			}
			function vi(e, t, r) {
				var i = e[t];
				(!(B.call(e, t) && su(i, r)) || r === n && !(t in e)) && Ci(e, t, r);
			}
			function yi(e, t) {
				for (var n = e.length; n--;) if (su(e[n][0], t)) return n;
				return -1;
			}
			function bi(e, t, n, r) {
				return ji(e, function(e, i, a) {
					t(r, e, n(e), a);
				}), r;
			}
			function xi(e, t) {
				return e && fo(t, Cd(t), e);
			}
			function Si(e, t) {
				return e && fo(t, wd(t), e);
			}
			function Ci(e, t, n) {
				t == "__proto__" && Ht ? Ht(e, t, {
					configurable: !0,
					enumerable: !0,
					value: n,
					writable: !0
				}) : e[t] = n;
			}
			function wi(e, t) {
				for (var r = -1, i = t.length, a = tt(i), o = e == null; ++r < i;) a[r] = o ? n : _d(e, t[r]);
				return a;
			}
			function Ti(e, t, r) {
				return e === e && (r !== n && (e = e <= r ? e : r), t !== n && (e = e >= t ? e : t)), e;
			}
			function Ei(e, t, r, i, a, o) {
				var s, c = t & f, l = t & p, u = t & m;
				if (r && (s = a ? r(e, i, a, o) : r(e)), s !== n) return s;
				if (!Eu(e)) return e;
				var d = Q(e);
				if (d) {
					if (s = ss(e), !c) return uo(e, s);
				} else {
					var h = rs(e), g = h == _e || h == ve;
					if (hu(e)) return eo(e, c);
					if (h == M || h == ue || g && !a) {
						if (s = l || g ? {} : cs(e), !c) return l ? mo(e, Si(s, e)) : po(e, xi(s, e));
					} else {
						if (!on[h]) return a ? e : {};
						s = ls(e, h, c);
					}
				}
				o ||= new si();
				var _ = o.get(e);
				if (_) return _;
				o.set(e, s), zu(e) ? e.forEach(function(n) {
					s.add(Ei(n, t, r, n, e, o));
				}) : Ou(e) && e.forEach(function(n, i) {
					s.set(i, Ei(n, t, r, i, e, o));
				});
				var v = d ? n : (u ? l ? qo : Ko : l ? wd : Cd)(e);
				return kn(v || e, function(n, i) {
					v && (i = n, n = e[i]), vi(s, i, Ei(n, t, r, i, e, o));
				}), s;
			}
			function Di(e) {
				var t = Cd(e);
				return function(n) {
					return Oi(n, e, t);
				};
			}
			function Oi(e, t, r) {
				var i = r.length;
				if (e == null) return !i;
				for (e = z(e); i--;) {
					var a = r[i], o = t[a], s = e[a];
					if (s === n && !(a in e) || !o(s)) return !1;
				}
				return !0;
			}
			function ki(e, t, r) {
				if (typeof e != "function") throw new bt(o);
				return As(function() {
					e.apply(n, r);
				}, t);
			}
			function Ai(e, t, n, r) {
				var a = -1, o = Nn, s = !0, c = e.length, l = [], u = t.length;
				if (!c) return l;
				n && (t = Fn(t, tr(n))), r ? (o = Pn, s = !1) : t.length >= i && (o = rr, s = !1, t = new ii(t));
				outer: for (; ++a < c;) {
					var d = e[a], f = n == null ? d : n(d);
					if (d = r || d !== 0 ? d : 0, s && f === f) {
						for (var p = u; p--;) if (t[p] === f) continue outer;
						l.push(d);
					} else o(t, f, r) || l.push(d);
				}
				return l;
			}
			var ji = _o(Bi), Mi = _o(Vi, !0);
			function Ni(e, t) {
				var n = !0;
				return ji(e, function(e, r, i) {
					return n = !!t(e, r, i), n;
				}), n;
			}
			function Pi(e, t, r) {
				for (var i = -1, a = e.length; ++i < a;) {
					var o = e[i], s = t(o);
					if (s != null && (c === n ? s === s && !Vu(s) : r(s, c))) var c = s, l = o;
				}
				return l;
			}
			function Fi(e, t, r, i) {
				var a = e.length;
				for (r = $(r), r < 0 && (r = -r > a ? 0 : a + r), i = i === n || i > a ? a : $(i), i < 0 && (i += a), i = r > i ? 0 : Xu(i); r < i;) e[r++] = t;
				return e;
			}
			function Ii(e, t) {
				var n = [];
				return ji(e, function(e, r, i) {
					t(e, r, i) && n.push(e);
				}), n;
			}
			function Li(e, t, n, r, i) {
				var a = -1, o = e.length;
				for (n ||= ds, i ||= []; ++a < o;) {
					var s = e[a];
					t > 0 && n(s) ? t > 1 ? Li(s, t - 1, n, r, i) : In(i, s) : r || (i[i.length] = s);
				}
				return i;
			}
			var Ri = vo(), zi = vo(!0);
			function Bi(e, t) {
				return e && Ri(e, t, Cd);
			}
			function Vi(e, t) {
				return e && zi(e, t, Cd);
			}
			function Hi(e, t) {
				return Mn(t, function(t) {
					return Cu(e[t]);
				});
			}
			function K(e, t) {
				t = Xa(t, e);
				for (var r = 0, i = t.length; e != null && r < i;) e = e[Is(t[r++])];
				return r && r == i ? e : n;
			}
			function Ui(e, t, n) {
				var r = t(e);
				return Q(e) ? r : In(r, n(e));
			}
			function Wi(e) {
				return e == null ? e === n ? De : xe : Vt && Vt in z(e) ? es(e) : ws(e);
			}
			function Gi(e, t) {
				return e > t;
			}
			function Ki(e, t) {
				return e != null && B.call(e, t);
			}
			function qi(e, t) {
				return e != null && t in z(e);
			}
			function Ji(e, t, n) {
				return e >= sn(t, n) && e < tn(t, n);
			}
			function Yi(e, t, r) {
				for (var i = r ? Pn : Nn, a = e[0].length, o = e.length, s = o, c = tt(o), l = Infinity, u = []; s--;) {
					var d = e[s];
					s && t && (d = Fn(d, tr(t))), l = sn(d.length, l), c[s] = !r && (t || a >= 120 && d.length >= 120) ? new ii(s && d) : n;
				}
				d = e[0];
				var f = -1, p = c[0];
				outer: for (; ++f < a && u.length < l;) {
					var m = d[f], h = t ? t(m) : m;
					if (m = r || m !== 0 ? m : 0, !(p ? rr(p, h) : i(u, h, r))) {
						for (s = o; --s;) {
							var g = c[s];
							if (!(g ? rr(g, h) : i(e[s], h, r))) continue outer;
						}
						p && p.push(h), u.push(m);
					}
				}
				return u;
			}
			function Xi(e, t, n, r) {
				return Bi(e, function(e, i, a) {
					t(r, n(e), i, a);
				}), r;
			}
			function Zi(e, t, r) {
				t = Xa(t, e), e = Es(e, t);
				var i = e == null ? e : e[Is(uc(t))];
				return i == null ? n : Dn(i, e, r);
			}
			function Qi(e) {
				return Du(e) && Wi(e) == ue;
			}
			function $i(e) {
				return Du(e) && Wi(e) == Ae;
			}
			function ea(e) {
				return Du(e) && Wi(e) == me;
			}
			function ta(e, t, n, r, i) {
				return e === t ? !0 : e == null || t == null || !Du(e) && !Du(t) ? e !== e && t !== t : na(e, t, n, r, ta, i);
			}
			function na(e, t, n, r, i, a) {
				var o = Q(e), s = Q(t), c = o ? de : rs(e), l = s ? de : rs(t);
				c = c == ue ? M : c, l = l == ue ? M : l;
				var u = c == M, d = l == M, f = c == l;
				if (f && hu(e)) {
					if (!hu(t)) return !1;
					o = !0, u = !1;
				}
				if (f && !u) return a ||= new si(), o || Hu(e) ? Ho(e, t, n, r, i, a) : Uo(e, t, c, n, r, i, a);
				if (!(n & h)) {
					var p = u && B.call(e, "__wrapped__"), m = d && B.call(t, "__wrapped__");
					if (p || m) {
						var g = p ? e.value() : e, _ = m ? t.value() : t;
						return a ||= new si(), i(g, _, n, r, a);
					}
				}
				return f ? (a ||= new si(), Wo(e, t, n, r, i, a)) : !1;
			}
			function ra(e) {
				return Du(e) && rs(e) == ye;
			}
			function ia(e, t, r, i) {
				var a = r.length, o = a, s = !i;
				if (e == null) return !o;
				for (e = z(e); a--;) {
					var c = r[a];
					if (s && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1;
				}
				for (; ++a < o;) {
					c = r[a];
					var l = c[0], u = e[l], d = c[1];
					if (s && c[2]) {
						if (u === n && !(l in e)) return !1;
					} else {
						var f = new si();
						if (i) var p = i(u, d, l, e, t, f);
						if (!(p === n ? ta(d, u, h | g, i, f) : p)) return !1;
					}
				}
				return !0;
			}
			function aa(e) {
				return !Eu(e) || gs(e) ? !1 : (Cu(e) ? jt : ut).test(Ls(e));
			}
			function oa(e) {
				return Du(e) && Wi(e) == we;
			}
			function sa(e) {
				return Du(e) && rs(e) == Te;
			}
			function ca(e) {
				return Du(e) && Tu(e.length) && !!an[Wi(e)];
			}
			function la(e) {
				return typeof e == "function" ? e : e == null ? Mf : typeof e == "object" ? Q(e) ? ha(e[0], e[1]) : ma(e) : Gf(e);
			}
			function ua(e) {
				if (!vs(e)) return en(e);
				var t = [];
				for (var n in z(e)) B.call(e, n) && n != "constructor" && t.push(n);
				return t;
			}
			function da(e) {
				if (!Eu(e)) return Cs(e);
				var t = vs(e), n = [];
				for (var r in e) r == "constructor" && (t || !B.call(e, r)) || n.push(r);
				return n;
			}
			function fa(e, t) {
				return e < t;
			}
			function pa(e, t) {
				var n = -1, r = fu(e) ? tt(e.length) : [];
				return ji(e, function(e, i, a) {
					r[++n] = t(e, i, a);
				}), r;
			}
			function ma(e) {
				var t = Qo(e);
				return t.length == 1 && t[0][2] ? bs(t[0][0], t[0][1]) : function(n) {
					return n === e || ia(n, e, t);
				};
			}
			function ha(e, t) {
				return Y(e) && ys(t) ? bs(Is(e), t) : function(r) {
					var i = _d(r, e);
					return i === n && i === t ? yd(r, e) : ta(t, i, h | g);
				};
			}
			function ga(e, t, r, i, a) {
				e !== t && Ri(t, function(o, s) {
					if (a ||= new si(), Eu(o)) _a(e, t, s, r, ga, i, a);
					else {
						var c = i ? i(Os(e, s), o, s + "", e, t, a) : n;
						c === n && (c = o), _i(e, s, c);
					}
				}, wd);
			}
			function _a(e, t, r, i, a, o, s) {
				var c = Os(e, r), l = Os(t, r), u = s.get(l);
				if (u) {
					_i(e, r, u);
					return;
				}
				var d = o ? o(c, l, r + "", e, t, s) : n, f = d === n;
				if (f) {
					var p = Q(l), m = !p && hu(l), h = !p && !m && Hu(l);
					d = l, p || m || h ? Q(c) ? d = c : pu(c) ? d = uo(c) : m ? (f = !1, d = eo(l, !0)) : h ? (f = !1, d = ao(l, !0)) : d = [] : Iu(l) || uu(l) ? (d = c, uu(c) ? d = Qu(c) : (!Eu(c) || Cu(c)) && (d = cs(l))) : f = !1;
				}
				f && (s.set(l, d), a(d, l, i, o, s), s.delete(l)), _i(e, r, d);
			}
			function va(e, t) {
				var r = e.length;
				if (r) return t += t < 0 ? r : 0, fs(t, r) ? e[t] : n;
			}
			function ya(e, t, n) {
				t = t.length ? Fn(t, function(e) {
					return Q(e) ? function(t) {
						return K(t, e.length === 1 ? e[0] : e);
					} : e;
				}) : [Mf];
				var r = -1;
				return t = Fn(t, tr(J())), Xn(pa(e, function(e, n, i) {
					return {
						criteria: Fn(t, function(t) {
							return t(e);
						}),
						index: ++r,
						value: e
					};
				}), function(e, t) {
					return so(e, t, n);
				});
			}
			function ba(e, t) {
				return xa(e, t, function(t, n) {
					return yd(e, n);
				});
			}
			function xa(e, t, n) {
				for (var r = -1, i = t.length, a = {}; ++r < i;) {
					var o = t[r], s = K(e, o);
					n(s, o) && Aa(a, Xa(o, e), s);
				}
				return a;
			}
			function Sa(e) {
				return function(t) {
					return K(t, e);
				};
			}
			function Ca(e, t, n, r) {
				var i = r ? Wn : Un, a = -1, o = t.length, s = e;
				for (e === t && (t = uo(t)), n && (s = Fn(e, tr(n))); ++a < o;) for (var c = 0, l = t[a], u = n ? n(l) : l; (c = i(s, u, c, r)) > -1;) s !== e && zt.call(s, c, 1), zt.call(e, c, 1);
				return e;
			}
			function wa(e, t) {
				for (var n = e ? t.length : 0, r = n - 1; n--;) {
					var i = t[n];
					if (n == r || i !== a) {
						var a = i;
						fs(i) ? zt.call(e, i, 1) : Ha(e, i);
					}
				}
				return e;
			}
			function Ta(e, t) {
				return e + qt(un() * (t - e + 1));
			}
			function Ea(e, t, n, r) {
				for (var i = -1, a = tn(Kt((t - e) / (n || 1)), 0), o = tt(a); a--;) o[r ? a : ++i] = e, e += n;
				return o;
			}
			function Da(e, t) {
				var n = "";
				if (!e || t < 1 || t > A) return n;
				do
					t % 2 && (n += e), t = qt(t / 2), t && (e += e);
				while (t);
				return n;
			}
			function q(e, t) {
				return js(Ts(e, t, Mf), e + "");
			}
			function Oa(e) {
				return mi(Hd(e));
			}
			function ka(e, t) {
				var n = Hd(e);
				return Ps(n, Ti(t, 0, n.length));
			}
			function Aa(e, t, r, i) {
				if (!Eu(e)) return e;
				t = Xa(t, e);
				for (var a = -1, o = t.length, s = o - 1, c = e; c != null && ++a < o;) {
					var l = Is(t[a]), u = r;
					if (l === "__proto__" || l === "constructor" || l === "prototype") return e;
					if (a != s) {
						var d = c[l];
						u = i ? i(d, l, c) : n, u === n && (u = Eu(d) ? d : fs(t[a + 1]) ? [] : {});
					}
					vi(c, l, u), c = c[l];
				}
				return e;
			}
			var ja = U ? function(e, t) {
				return U.set(e, t), e;
			} : Mf, Ma = Ht ? function(e, t) {
				return Ht(e, "toString", {
					configurable: !0,
					enumerable: !1,
					value: Of(t),
					writable: !0
				});
			} : Mf;
			function Na(e) {
				return Ps(Hd(e));
			}
			function Pa(e, t, n) {
				var r = -1, i = e.length;
				t < 0 && (t = -t > i ? 0 : i + t), n = n > i ? i : n, n < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
				for (var a = tt(i); ++r < i;) a[r] = e[r + t];
				return a;
			}
			function Fa(e, t) {
				var n;
				return ji(e, function(e, r, i) {
					return n = t(e, r, i), !n;
				}), !!n;
			}
			function Ia(e, t, n) {
				var r = 0, i = e == null ? r : e.length;
				if (typeof t == "number" && t === t && i <= ce) {
					for (; r < i;) {
						var a = r + i >>> 1, o = e[a];
						o !== null && !Vu(o) && (n ? o <= t : o < t) ? r = a + 1 : i = a;
					}
					return i;
				}
				return La(e, t, Mf, n);
			}
			function La(e, t, r, i) {
				var a = 0, o = e == null ? 0 : e.length;
				if (o === 0) return 0;
				t = r(t);
				for (var s = t !== t, c = t === null, l = Vu(t), u = t === n; a < o;) {
					var d = qt((a + o) / 2), f = r(e[d]), p = f !== n, m = f === null, h = f === f, g = Vu(f);
					if (s) var _ = i || h;
					else _ = u ? h && (i || p) : c ? h && p && (i || !m) : l ? h && p && !m && (i || !g) : m || g ? !1 : i ? f <= t : f < t;
					_ ? a = d + 1 : o = d;
				}
				return sn(o, j);
			}
			function Ra(e, t) {
				for (var n = -1, r = e.length, i = 0, a = []; ++n < r;) {
					var o = e[n], s = t ? t(o) : o;
					if (!n || !su(s, c)) {
						var c = s;
						a[i++] = o === 0 ? 0 : o;
					}
				}
				return a;
			}
			function za(e) {
				return typeof e == "number" ? e : Vu(e) ? oe : +e;
			}
			function Ba(e) {
				if (typeof e == "string") return e;
				if (Q(e)) return Fn(e, Ba) + "";
				if (Vu(e)) return Nr ? Nr.call(e) : "";
				var t = e + "";
				return t == "0" && 1 / e == -k ? "-0" : t;
			}
			function Va(e, t, n) {
				var r = -1, a = Nn, o = e.length, s = !0, c = [], l = c;
				if (n) s = !1, a = Pn;
				else if (o >= i) {
					var u = t ? null : Io(e);
					if (u) return _r(u);
					s = !1, a = rr, l = new ii();
				} else l = t ? [] : c;
				outer: for (; ++r < o;) {
					var d = e[r], f = t ? t(d) : d;
					if (d = n || d !== 0 ? d : 0, s && f === f) {
						for (var p = l.length; p--;) if (l[p] === f) continue outer;
						t && l.push(f), c.push(d);
					} else a(l, f, n) || (l !== c && l.push(f), c.push(d));
				}
				return c;
			}
			function Ha(e, t) {
				t = Xa(t, e);
				var n = -1, r = t.length;
				if (!r) return !0;
				for (; ++n < r;) {
					var i = Is(t[n]);
					if (i === "__proto__" && !B.call(e, "__proto__") || (i === "constructor" || i === "prototype") && n < r - 1) return !1;
				}
				var a = Es(e, t);
				return a == null || delete a[Is(uc(t))];
			}
			function Ua(e, t, n, r) {
				return Aa(e, t, n(K(e, t)), r);
			}
			function Wa(e, t, n, r) {
				for (var i = e.length, a = r ? i : -1; (r ? a-- : ++a < i) && t(e[a], a, e););
				return n ? Pa(e, r ? 0 : a, r ? a + 1 : i) : Pa(e, r ? a + 1 : 0, r ? i : a);
			}
			function Ga(e, t) {
				var n = e;
				return n instanceof G && (n = n.value()), Ln(t, function(e, t) {
					return t.func.apply(t.thisArg, In([e], t.args));
				}, n);
			}
			function Ka(e, t, n) {
				var r = e.length;
				if (r < 2) return r ? Va(e[0]) : [];
				for (var i = -1, a = tt(r); ++i < r;) for (var o = e[i], s = -1; ++s < r;) s != i && (a[i] = Ai(a[i] || o, e[s], t, n));
				return Va(Li(a, 1), t, n);
			}
			function qa(e, t, r) {
				for (var i = -1, a = e.length, o = t.length, s = {}; ++i < a;) {
					var c = i < o ? t[i] : n;
					r(s, e[i], c);
				}
				return s;
			}
			function Ja(e) {
				return pu(e) ? e : [];
			}
			function Ya(e) {
				return typeof e == "function" ? e : Mf;
			}
			function Xa(e, t) {
				return Q(e) ? e : Y(e, t) ? [e] : Fs(ed(e));
			}
			var Za = q;
			function Qa(e, t, r) {
				var i = e.length;
				return r = r === n ? i : r, !t && r >= i ? e : Pa(e, t, r);
			}
			var $a = Ut || function(e) {
				return hn.clearTimeout(e);
			};
			function eo(e, t) {
				if (t) return e.slice();
				var n = e.length, r = Ft ? Ft(n) : new e.constructor(n);
				return e.copy(r), r;
			}
			function to(e) {
				var t = new e.constructor(e.byteLength);
				return new Pt(t).set(new Pt(e)), t;
			}
			function no(e, t) {
				var n = t ? to(e.buffer) : e.buffer;
				return new e.constructor(n, e.byteOffset, e.byteLength);
			}
			function ro(e) {
				var t = new e.constructor(e.source, st.exec(e));
				return t.lastIndex = e.lastIndex, t;
			}
			function io(e) {
				return Mr ? z(Mr.call(e)) : {};
			}
			function ao(e, t) {
				var n = t ? to(e.buffer) : e.buffer;
				return new e.constructor(n, e.byteOffset, e.length);
			}
			function oo(e, t) {
				if (e !== t) {
					var r = e !== n, i = e === null, a = e === e, o = Vu(e), s = t !== n, c = t === null, l = t === t, u = Vu(t);
					if (!c && !u && !o && e > t || o && s && l && !c && !u || i && s && l || !r && l || !a) return 1;
					if (!i && !o && !u && e < t || u && r && a && !i && !o || c && r && a || !s && a || !l) return -1;
				}
				return 0;
			}
			function so(e, t, n) {
				for (var r = -1, i = e.criteria, a = t.criteria, o = i.length, s = n.length; ++r < o;) {
					var c = oo(i[r], a[r]);
					if (c) return r >= s ? c : c * (n[r] == "desc" ? -1 : 1);
				}
				return e.index - t.index;
			}
			function co(e, t, n, r) {
				for (var i = -1, a = e.length, o = n.length, s = -1, c = t.length, l = tn(a - o, 0), u = tt(c + l), d = !r; ++s < c;) u[s] = t[s];
				for (; ++i < o;) (d || i < a) && (u[n[i]] = e[i]);
				for (; l--;) u[s++] = e[i++];
				return u;
			}
			function lo(e, t, n, r) {
				for (var i = -1, a = e.length, o = -1, s = n.length, c = -1, l = t.length, u = tn(a - s, 0), d = tt(u + l), f = !r; ++i < u;) d[i] = e[i];
				for (var p = i; ++c < l;) d[p + c] = t[c];
				for (; ++o < s;) (f || i < a) && (d[p + n[o]] = e[i++]);
				return d;
			}
			function uo(e, t) {
				var n = -1, r = e.length;
				for (t ||= tt(r); ++n < r;) t[n] = e[n];
				return t;
			}
			function fo(e, t, r, i) {
				var a = !r;
				r ||= {};
				for (var o = -1, s = t.length; ++o < s;) {
					var c = t[o], l = i ? i(r[c], e[c], c, r, e) : n;
					l === n && (l = e[c]), a ? Ci(r, c, l) : vi(r, c, l);
				}
				return r;
			}
			function po(e, t) {
				return fo(e, ts(e), t);
			}
			function mo(e, t) {
				return fo(e, ns(e), t);
			}
			function ho(e, t) {
				return function(n, r) {
					var i = Q(n) ? On : bi, a = t ? t() : {};
					return i(n, e, J(r, 2), a);
				};
			}
			function go(e) {
				return q(function(t, r) {
					var i = -1, a = r.length, o = a > 1 ? r[a - 1] : n, s = a > 2 ? r[2] : n;
					for (o = e.length > 3 && typeof o == "function" ? (a--, o) : n, s && ps(r[0], r[1], s) && (o = a < 3 ? n : o, a = 1), t = z(t); ++i < a;) {
						var c = r[i];
						c && e(t, c, i, o);
					}
					return t;
				});
			}
			function _o(e, t) {
				return function(n, r) {
					if (n == null) return n;
					if (!fu(n)) return e(n, r);
					for (var i = n.length, a = t ? i : -1, o = z(n); (t ? a-- : ++a < i) && r(o[a], a, o) !== !1;);
					return n;
				};
			}
			function vo(e) {
				return function(t, n, r) {
					for (var i = -1, a = z(t), o = r(t), s = o.length; s--;) {
						var c = o[e ? s : ++i];
						if (n(a[c], c, a) === !1) break;
					}
					return t;
				};
			}
			function yo(e, t, n) {
				var r = t & _, i = So(e);
				function a() {
					return (this && this !== hn && this instanceof a ? i : e).apply(r ? n : this, arguments);
				}
				return a;
			}
			function bo(e) {
				return function(t) {
					t = ed(t);
					var r = dr(t) ? Sr(t) : n, i = r ? r[0] : t.charAt(0), a = r ? Qa(r, 1).join("") : t.slice(1);
					return i[e]() + a;
				};
			}
			function xo(e) {
				return function(t) {
					return Ln(Cf(Yd(t).replace(Xt, "")), e, "");
				};
			}
			function So(e) {
				return function() {
					var t = arguments;
					switch (t.length) {
						case 0: return new e();
						case 1: return new e(t[0]);
						case 2: return new e(t[0], t[1]);
						case 3: return new e(t[0], t[1], t[2]);
						case 4: return new e(t[0], t[1], t[2], t[3]);
						case 5: return new e(t[0], t[1], t[2], t[3], t[4]);
						case 6: return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
						case 7: return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
					}
					var n = Pr(e.prototype), r = e.apply(n, t);
					return Eu(r) ? r : n;
				};
			}
			function Co(e, t, r) {
				var i = So(e);
				function a() {
					for (var o = arguments.length, s = tt(o), c = o, l = Xo(a); c--;) s[c] = arguments[c];
					var u = o < 3 && s[0] !== l && s[o - 1] !== l ? [] : gr(s, l);
					return o -= u.length, o < r ? Po(e, t, Eo, a.placeholder, n, s, u, n, n, r - o) : Dn(this && this !== hn && this instanceof a ? i : e, this, s);
				}
				return a;
			}
			function wo(e) {
				return function(t, r, i) {
					var a = z(t);
					if (!fu(t)) {
						var o = J(r, 3);
						t = Cd(t), r = function(e) {
							return o(a[e], e, a);
						};
					}
					var s = e(t, r, i);
					return s > -1 ? a[o ? t[s] : s] : n;
				};
			}
			function To(e) {
				return Go(function(t) {
					var r = t.length, i = r, a = Ir.prototype.thru;
					for (e && t.reverse(); i--;) {
						var s = t[i];
						if (typeof s != "function") throw new bt(o);
						if (a && !c && Yo(s) == "wrapper") var c = new Ir([], !0);
					}
					for (i = c ? i : r; ++i < r;) {
						s = t[i];
						var l = Yo(s), u = l == "wrapper" ? Jo(s) : n;
						c = u && hs(u[0]) && u[1] == (w | b | S | T) && !u[4].length && u[9] == 1 ? c[Yo(u[0])].apply(c, u[3]) : s.length == 1 && hs(s) ? c[l]() : c.thru(s);
					}
					return function() {
						var e = arguments, n = e[0];
						if (c && e.length == 1 && Q(n)) return c.plant(n).value();
						for (var i = 0, a = r ? t[i].apply(this, e) : n; ++i < r;) a = t[i].call(this, a);
						return a;
					};
				});
			}
			function Eo(e, t, r, i, a, o, s, c, l, u) {
				var d = t & w, f = t & _, p = t & v, m = t & (b | x), h = t & E, g = p ? n : So(e);
				function y() {
					for (var n = arguments.length, _ = tt(n), v = n; v--;) _[v] = arguments[v];
					if (m) var b = Xo(y), x = or(_, b);
					if (i && (_ = co(_, i, a, m)), o && (_ = lo(_, o, s, m)), n -= x, m && n < u) {
						var S = gr(_, b);
						return Po(e, t, Eo, y.placeholder, r, _, S, c, l, u - n);
					}
					var C = f ? r : this, w = p ? C[e] : e;
					return n = _.length, c ? _ = Ds(_, c) : h && n > 1 && _.reverse(), d && l < n && (_.length = l), this && this !== hn && this instanceof y && (w = g || So(w)), w.apply(C, _);
				}
				return y;
			}
			function Do(e, t) {
				return function(n, r) {
					return Xi(n, e, t(r), {});
				};
			}
			function Oo(e, t) {
				return function(r, i) {
					var a;
					if (r === n && i === n) return t;
					if (r !== n && (a = r), i !== n) {
						if (a === n) return i;
						typeof r == "string" || typeof i == "string" ? (r = Ba(r), i = Ba(i)) : (r = za(r), i = za(i)), a = e(r, i);
					}
					return a;
				};
			}
			function ko(e) {
				return Go(function(t) {
					return t = Fn(t, tr(J())), q(function(n) {
						var r = this;
						return e(t, function(e) {
							return Dn(e, r, n);
						});
					});
				});
			}
			function Ao(e, t) {
				t = t === n ? " " : Ba(t);
				var r = t.length;
				if (r < 2) return r ? Da(t, e) : t;
				var i = Da(t, Kt(e / xr(t)));
				return dr(t) ? Qa(Sr(i), 0, e).join("") : i.slice(0, e);
			}
			function jo(e, t, n, r) {
				var i = t & _, a = So(e);
				function o() {
					for (var t = -1, s = arguments.length, c = -1, l = r.length, u = tt(l + s), d = this && this !== hn && this instanceof o ? a : e; ++c < l;) u[c] = r[c];
					for (; s--;) u[c++] = arguments[++t];
					return Dn(d, i ? n : this, u);
				}
				return o;
			}
			function Mo(e) {
				return function(t, r, i) {
					return i && typeof i != "number" && ps(t, r, i) && (r = i = n), t = Yu(t), r === n ? (r = t, t = 0) : r = Yu(r), i = i === n ? t < r ? 1 : -1 : Yu(i), Ea(t, r, i, e);
				};
			}
			function No(e) {
				return function(t, n) {
					return typeof t == "string" && typeof n == "string" || (t = Zu(t), n = Zu(n)), e(t, n);
				};
			}
			function Po(e, t, r, i, a, o, s, c, l, u) {
				var d = t & b, f = d ? s : n, p = d ? n : s, m = d ? o : n, h = d ? n : o;
				t |= d ? S : C, t &= ~(d ? C : S), t & y || (t &= ~(_ | v));
				var g = [
					e,
					t,
					a,
					m,
					f,
					h,
					p,
					c,
					l,
					u
				], x = r.apply(n, g);
				return hs(e) && ks(x, g), x.placeholder = i, Ms(x, e, t);
			}
			function Fo(e) {
				var t = R[e];
				return function(e, n) {
					if (e = Zu(e), n = n == null ? 0 : sn($(n), 292), n && Qt(e)) {
						var r = (ed(e) + "e").split("e");
						return r = (ed(t(r[0] + "e" + (+r[1] + n))) + "e").split("e"), +(r[0] + "e" + (+r[1] - n));
					}
					return t(e);
				};
			}
			var Io = yn && 1 / _r(new yn([, -0]))[1] == k ? function(e) {
				return new yn(e);
			} : Bf;
			function Lo(e) {
				return function(t) {
					var n = rs(t);
					return n == ye ? mr(t) : n == Te ? vr(t) : $n(t, e(t));
				};
			}
			function Ro(e, t, r, i, a, s, c, l) {
				var u = t & v;
				if (!u && typeof e != "function") throw new bt(o);
				var d = i ? i.length : 0;
				if (d || (t &= ~(S | C), i = a = n), c = c === n ? c : tn($(c), 0), l = l === n ? l : $(l), d -= a ? a.length : 0, t & C) {
					var f = i, p = a;
					i = a = n;
				}
				var m = u ? n : Jo(e), h = [
					e,
					t,
					r,
					i,
					a,
					f,
					p,
					s,
					c,
					l
				];
				if (m && Ss(h, m), e = h[0], t = h[1], r = h[2], i = h[3], a = h[4], l = h[9] = h[9] === n ? u ? 0 : e.length : tn(h[9] - d, 0), !l && t & (b | x) && (t &= ~(b | x)), !t || t == _) var g = yo(e, t, r);
				else g = t == b || t == x ? Co(e, t, l) : (t == S || t == (_ | S)) && !a.length ? jo(e, t, r, i) : Eo.apply(n, h);
				return Ms((m ? ja : ks)(g, h), e, t);
			}
			function zo(e, t, r, i) {
				return e === n || su(e, Ct[r]) && !B.call(i, r) ? t : e;
			}
			function Bo(e, t, r, i, a, o) {
				return Eu(e) && Eu(t) && (o.set(t, e), ga(e, t, n, Bo, o), o.delete(t)), e;
			}
			function Vo(e) {
				return Iu(e) ? n : e;
			}
			function Ho(e, t, r, i, a, o) {
				var s = r & h, c = e.length, l = t.length;
				if (c != l && !(s && l > c)) return !1;
				var u = o.get(e), d = o.get(t);
				if (u && d) return u == t && d == e;
				var f = -1, p = !0, m = r & g ? new ii() : n;
				for (o.set(e, t), o.set(t, e); ++f < c;) {
					var _ = e[f], v = t[f];
					if (i) var y = s ? i(v, _, f, t, e, o) : i(_, v, f, e, t, o);
					if (y !== n) {
						if (y) continue;
						p = !1;
						break;
					}
					if (m) {
						if (!H(t, function(e, t) {
							if (!rr(m, t) && (_ === e || a(_, e, r, i, o))) return m.push(t);
						})) {
							p = !1;
							break;
						}
					} else if (!(_ === v || a(_, v, r, i, o))) {
						p = !1;
						break;
					}
				}
				return o.delete(e), o.delete(t), p;
			}
			function Uo(e, t, n, r, i, a, o) {
				switch (n) {
					case je:
						if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
						e = e.buffer, t = t.buffer;
					case Ae: return !(e.byteLength != t.byteLength || !a(new Pt(e), new Pt(t)));
					case pe:
					case me:
					case be: return su(+e, +t);
					case ge: return e.name == t.name && e.message == t.message;
					case we:
					case Ee: return e == t + "";
					case ye: var s = mr;
					case Te:
						var c = r & h;
						if (s ||= _r, e.size != t.size && !c) return !1;
						var l = o.get(e);
						if (l) return l == t;
						r |= g, o.set(e, t);
						var u = Ho(s(e), s(t), r, i, a, o);
						return o.delete(e), u;
					case N: if (Mr) return Mr.call(e) == Mr.call(t);
				}
				return !1;
			}
			function Wo(e, t, r, i, a, o) {
				var s = r & h, c = Ko(e), l = c.length;
				if (l != Ko(t).length && !s) return !1;
				for (var u = l; u--;) {
					var d = c[u];
					if (!(s ? d in t : B.call(t, d))) return !1;
				}
				var f = o.get(e), p = o.get(t);
				if (f && p) return f == t && p == e;
				var m = !0;
				o.set(e, t), o.set(t, e);
				for (var g = s; ++u < l;) {
					d = c[u];
					var _ = e[d], v = t[d];
					if (i) var y = s ? i(v, _, d, t, e, o) : i(_, v, d, e, t, o);
					if (!(y === n ? _ === v || a(_, v, r, i, o) : y)) {
						m = !1;
						break;
					}
					g ||= d == "constructor";
				}
				if (m && !g) {
					var b = e.constructor, x = t.constructor;
					b != x && "constructor" in e && "constructor" in t && !(typeof b == "function" && b instanceof b && typeof x == "function" && x instanceof x) && (m = !1);
				}
				return o.delete(e), o.delete(t), m;
			}
			function Go(e) {
				return js(Ts(e, n, $s), e + "");
			}
			function Ko(e) {
				return Ui(e, Cd, ts);
			}
			function qo(e) {
				return Ui(e, wd, ns);
			}
			var Jo = U ? function(e) {
				return U.get(e);
			} : Bf;
			function Yo(e) {
				for (var t = e.name + "", n = Jn[t], r = B.call(Jn, t) ? n.length : 0; r--;) {
					var i = n[r], a = i.func;
					if (a == null || a == e) return i.name;
				}
				return t;
			}
			function Xo(e) {
				return (B.call(W, "placeholder") ? W : e).placeholder;
			}
			function J() {
				var e = W.iteratee || Nf;
				return e = e === Nf ? la : e, arguments.length ? e(arguments[0], arguments[1]) : e;
			}
			function Zo(e, t) {
				var n = e.__data__;
				return ms(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
			}
			function Qo(e) {
				for (var t = Cd(e), n = t.length; n--;) {
					var r = t[n], i = e[r];
					t[n] = [
						r,
						i,
						ys(i)
					];
				}
				return t;
			}
			function $o(e, t) {
				var r = ur(e, t);
				return aa(r) ? r : n;
			}
			function es(e) {
				var t = B.call(e, Vt), r = e[Vt];
				try {
					e[Vt] = n;
					var i = !0;
				} catch {}
				var a = Ot.call(e);
				return i && (t ? e[Vt] = r : delete e[Vt]), a;
			}
			var ts = Jt ? function(e) {
				return e == null ? [] : (e = z(e), Mn(Jt(e), function(t) {
					return Rt.call(e, t);
				}));
			} : Yf, ns = Jt ? function(e) {
				for (var t = []; e;) In(t, ts(e)), e = It(e);
				return t;
			} : Yf, rs = Wi;
			(mn && rs(new mn(/* @__PURE__ */ new ArrayBuffer(1))) != je || gn && rs(new gn()) != ye || _n && rs(_n.resolve()) != Se || yn && rs(new yn()) != Te || bn && rs(new bn()) != Oe) && (rs = function(e) {
				var t = Wi(e), r = t == M ? e.constructor : n, i = r ? Ls(r) : "";
				if (i) switch (i) {
					case yr: return je;
					case Tr: return ye;
					case Er: return Se;
					case kr: return Te;
					case Ar: return Oe;
				}
				return t;
			});
			function is(e, t, n) {
				for (var r = -1, i = n.length; ++r < i;) {
					var a = n[r], o = a.size;
					switch (a.type) {
						case "drop":
							e += o;
							break;
						case "dropRight":
							t -= o;
							break;
						case "take":
							t = sn(t, e + o);
							break;
						case "takeRight":
							e = tn(e, t - o);
							break;
					}
				}
				return {
					start: e,
					end: t
				};
			}
			function as(e) {
				var t = e.match(I);
				return t ? t[1].split(rt) : [];
			}
			function os(e, t, n) {
				t = Xa(t, e);
				for (var r = -1, i = t.length, a = !1; ++r < i;) {
					var o = Is(t[r]);
					if (!(a = e != null && n(e, o))) break;
					e = e[o];
				}
				return a || ++r != i ? a : (i = e == null ? 0 : e.length, !!i && Tu(i) && fs(o, i) && (Q(e) || uu(e)));
			}
			function ss(e) {
				var t = e.length, n = new e.constructor(t);
				return t && typeof e[0] == "string" && B.call(e, "index") && (n.index = e.index, n.input = e.input), n;
			}
			function cs(e) {
				return typeof e.constructor == "function" && !vs(e) ? Pr(It(e)) : {};
			}
			function ls(e, t, n) {
				var r = e.constructor;
				switch (t) {
					case Ae: return to(e);
					case pe:
					case me: return new r(+e);
					case je: return no(e, n);
					case Me:
					case Ne:
					case P:
					case Pe:
					case Fe:
					case Ie:
					case F:
					case Le:
					case Re: return ao(e, n);
					case ye: return new r();
					case be:
					case Ee: return new r(e);
					case we: return ro(e);
					case Te: return new r();
					case N: return io(e);
				}
			}
			function us(e, t) {
				var n = t.length;
				if (!n) return e;
				var r = n - 1;
				return t[r] = (n > 1 ? "& " : "") + t[r], t = t.join(n > 2 ? ", " : " "), e.replace(nt, "{\n/* [wrapped with " + t + "] */\n");
			}
			function ds(e) {
				return Q(e) || uu(e) || !!(Bt && e && e[Bt]);
			}
			function fs(e, t) {
				var n = typeof e;
				return t ??= A, !!t && (n == "number" || n != "symbol" && ft.test(e)) && e > -1 && e % 1 == 0 && e < t;
			}
			function ps(e, t, n) {
				if (!Eu(n)) return !1;
				var r = typeof t;
				return (r == "number" ? fu(n) && fs(t, n.length) : r == "string" && t in n) ? su(n[t], e) : !1;
			}
			function Y(e, t) {
				if (Q(e)) return !1;
				var n = typeof e;
				return n == "number" || n == "symbol" || n == "boolean" || e == null || Vu(e) ? !0 : Xe.test(e) || !Ye.test(e) || t != null && e in z(t);
			}
			function ms(e) {
				var t = typeof e;
				return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
			}
			function hs(e) {
				var t = Yo(e), n = W[t];
				if (typeof n != "function" || !(t in G.prototype)) return !1;
				if (e === n) return !0;
				var r = Jo(n);
				return !!r && e === r[0];
			}
			function gs(e) {
				return !!Dt && Dt in e;
			}
			var _s = wt ? Cu : Xf;
			function vs(e) {
				var t = e && e.constructor;
				return e === (typeof t == "function" && t.prototype || Ct);
			}
			function ys(e) {
				return e === e && !Eu(e);
			}
			function bs(e, t) {
				return function(r) {
					return r == null ? !1 : r[e] === t && (t !== n || e in z(r));
				};
			}
			function xs(e) {
				var t = Ul(e, function(e) {
					return n.size === u && n.clear(), e;
				}), n = t.cache;
				return t;
			}
			function Ss(e, t) {
				var n = e[1], r = t[1], i = n | r, a = i < (_ | v | w), o = r == w && n == b || r == w && n == T && e[7].length <= t[8] || r == (w | T) && t[7].length <= t[8] && n == b;
				if (!(a || o)) return e;
				r & _ && (e[2] = t[2], i |= n & _ ? 0 : y);
				var s = t[3];
				if (s) {
					var c = e[3];
					e[3] = c ? co(c, s, t[4]) : s, e[4] = c ? gr(e[3], d) : t[4];
				}
				return s = t[5], s && (c = e[5], e[5] = c ? lo(c, s, t[6]) : s, e[6] = c ? gr(e[5], d) : t[6]), s = t[7], s && (e[7] = s), r & w && (e[8] = e[8] == null ? t[8] : sn(e[8], t[8])), e[9] ??= t[9], e[0] = t[0], e[1] = i, e;
			}
			function Cs(e) {
				var t = [];
				if (e != null) for (var n in z(e)) t.push(n);
				return t;
			}
			function ws(e) {
				return Ot.call(e);
			}
			function Ts(e, t, r) {
				return t = tn(t === n ? e.length - 1 : t, 0), function() {
					for (var n = arguments, i = -1, a = tn(n.length - t, 0), o = tt(a); ++i < a;) o[i] = n[t + i];
					i = -1;
					for (var s = tt(t + 1); ++i < t;) s[i] = n[i];
					return s[t] = r(o), Dn(e, this, s);
				};
			}
			function Es(e, t) {
				return t.length < 2 ? e : K(e, Pa(t, 0, -1));
			}
			function Ds(e, t) {
				for (var r = e.length, i = sn(t.length, r), a = uo(e); i--;) {
					var o = t[i];
					e[i] = fs(o, r) ? a[o] : n;
				}
				return e;
			}
			function Os(e, t) {
				if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__") return e[t];
			}
			var ks = Ns(ja), As = Gt || function(e, t) {
				return hn.setTimeout(e, t);
			}, js = Ns(Ma);
			function Ms(e, t, n) {
				var r = t + "";
				return js(e, us(r, Rs(as(r), n)));
			}
			function Ns(e) {
				var t = 0, r = 0;
				return function() {
					var i = cn(), a = ne - (i - r);
					if (r = i, a > 0) {
						if (++t >= te) return arguments[0];
					} else t = 0;
					return e.apply(n, arguments);
				};
			}
			function Ps(e, t) {
				var r = -1, i = e.length, a = i - 1;
				for (t = t === n ? i : t; ++r < t;) {
					var o = Ta(r, a), s = e[o];
					e[o] = e[r], e[r] = s;
				}
				return e.length = t, e;
			}
			var Fs = xs(function(e) {
				var t = [];
				return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ze, function(e, n, r, i) {
					t.push(r ? i.replace(at, "$1") : n || e);
				}), t;
			});
			function Is(e) {
				if (typeof e == "string" || Vu(e)) return e;
				var t = e + "";
				return t == "0" && 1 / e == -k ? "-0" : t;
			}
			function Ls(e) {
				if (e != null) {
					try {
						return Tt.call(e);
					} catch {}
					try {
						return e + "";
					} catch {}
				}
				return "";
			}
			function Rs(e, t) {
				return kn(le, function(n) {
					var r = "_." + n[0];
					t & n[1] && !Nn(e, r) && e.push(r);
				}), e.sort();
			}
			function zs(e) {
				if (e instanceof G) return e.clone();
				var t = new Ir(e.__wrapped__, e.__chain__);
				return t.__actions__ = uo(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
			}
			function Bs(e, t, r) {
				t = (r ? ps(e, t, r) : t === n) ? 1 : tn($(t), 0);
				var i = e == null ? 0 : e.length;
				if (!i || t < 1) return [];
				for (var a = 0, o = 0, s = tt(Kt(i / t)); a < i;) s[o++] = Pa(e, a, a += t);
				return s;
			}
			function Vs(e) {
				for (var t = -1, n = e == null ? 0 : e.length, r = 0, i = []; ++t < n;) {
					var a = e[t];
					a && (i[r++] = a);
				}
				return i;
			}
			function Hs() {
				var e = arguments.length;
				if (!e) return [];
				for (var t = tt(e - 1), n = arguments[0], r = e; r--;) t[r - 1] = arguments[r];
				return In(Q(n) ? uo(n) : [n], Li(t, 1));
			}
			var Us = q(function(e, t) {
				return pu(e) ? Ai(e, Li(t, 1, pu, !0)) : [];
			}), Ws = q(function(e, t) {
				var r = uc(t);
				return pu(r) && (r = n), pu(e) ? Ai(e, Li(t, 1, pu, !0), J(r, 2)) : [];
			}), Gs = q(function(e, t) {
				var r = uc(t);
				return pu(r) && (r = n), pu(e) ? Ai(e, Li(t, 1, pu, !0), n, r) : [];
			});
			function Ks(e, t, r) {
				var i = e == null ? 0 : e.length;
				return i ? (t = r || t === n ? 1 : $(t), Pa(e, t < 0 ? 0 : t, i)) : [];
			}
			function qs(e, t, r) {
				var i = e == null ? 0 : e.length;
				return i ? (t = r || t === n ? 1 : $(t), t = i - t, Pa(e, 0, t < 0 ? 0 : t)) : [];
			}
			function Js(e, t) {
				return e && e.length ? Wa(e, J(t, 3), !0, !0) : [];
			}
			function Ys(e, t) {
				return e && e.length ? Wa(e, J(t, 3), !0) : [];
			}
			function Xs(e, t, n, r) {
				var i = e == null ? 0 : e.length;
				return i ? (n && typeof n != "number" && ps(e, t, n) && (n = 0, r = i), Fi(e, t, n, r)) : [];
			}
			function Zs(e, t, n) {
				var r = e == null ? 0 : e.length;
				if (!r) return -1;
				var i = n == null ? 0 : $(n);
				return i < 0 && (i = tn(r + i, 0)), Hn(e, J(t, 3), i);
			}
			function Qs(e, t, r) {
				var i = e == null ? 0 : e.length;
				if (!i) return -1;
				var a = i - 1;
				return r !== n && (a = $(r), a = r < 0 ? tn(i + a, 0) : sn(a, i - 1)), Hn(e, J(t, 3), a, !0);
			}
			function $s(e) {
				return e != null && e.length ? Li(e, 1) : [];
			}
			function ec(e) {
				return e != null && e.length ? Li(e, k) : [];
			}
			function tc(e, t) {
				return e != null && e.length ? (t = t === n ? 1 : $(t), Li(e, t)) : [];
			}
			function nc(e) {
				for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n;) {
					var i = e[t];
					Ci(r, i[0], i[1]);
				}
				return r;
			}
			function rc(e) {
				return e && e.length ? e[0] : n;
			}
			function ic(e, t, n) {
				var r = e == null ? 0 : e.length;
				if (!r) return -1;
				var i = n == null ? 0 : $(n);
				return i < 0 && (i = tn(r + i, 0)), Un(e, t, i);
			}
			function ac(e) {
				return e != null && e.length ? Pa(e, 0, -1) : [];
			}
			var oc = q(function(e) {
				var t = Fn(e, Ja);
				return t.length && t[0] === e[0] ? Yi(t) : [];
			}), sc = q(function(e) {
				var t = uc(e), r = Fn(e, Ja);
				return t === uc(r) ? t = n : r.pop(), r.length && r[0] === e[0] ? Yi(r, J(t, 2)) : [];
			}), cc = q(function(e) {
				var t = uc(e), r = Fn(e, Ja);
				return t = typeof t == "function" ? t : n, t && r.pop(), r.length && r[0] === e[0] ? Yi(r, n, t) : [];
			});
			function lc(e, t) {
				return e == null ? "" : $t.call(e, t);
			}
			function uc(e) {
				var t = e == null ? 0 : e.length;
				return t ? e[t - 1] : n;
			}
			function dc(e, t, r) {
				var i = e == null ? 0 : e.length;
				if (!i) return -1;
				var a = i;
				return r !== n && (a = $(r), a = a < 0 ? tn(i + a, 0) : sn(a, i - 1)), t === t ? br(e, t, a) : Hn(e, Gn, a, !0);
			}
			function fc(e, t) {
				return e && e.length ? va(e, $(t)) : n;
			}
			var pc = q(X);
			function X(e, t) {
				return e && e.length && t && t.length ? Ca(e, t) : e;
			}
			function mc(e, t, n) {
				return e && e.length && t && t.length ? Ca(e, t, J(n, 2)) : e;
			}
			function hc(e, t, r) {
				return e && e.length && t && t.length ? Ca(e, t, n, r) : e;
			}
			var gc = Go(function(e, t) {
				var n = e == null ? 0 : e.length, r = wi(e, t);
				return wa(e, Fn(t, function(e) {
					return fs(e, n) ? +e : e;
				}).sort(oo)), r;
			});
			function _c(e, t) {
				var n = [];
				if (!(e && e.length)) return n;
				var r = -1, i = [], a = e.length;
				for (t = J(t, 3); ++r < a;) {
					var o = e[r];
					t(o, r, e) && (n.push(o), i.push(r));
				}
				return wa(e, i), n;
			}
			function vc(e) {
				return e == null ? e : pn.call(e);
			}
			function yc(e, t, r) {
				var i = e == null ? 0 : e.length;
				return i ? (r && typeof r != "number" && ps(e, t, r) ? (t = 0, r = i) : (t = t == null ? 0 : $(t), r = r === n ? i : $(r)), Pa(e, t, r)) : [];
			}
			function bc(e, t) {
				return Ia(e, t);
			}
			function xc(e, t, n) {
				return La(e, t, J(n, 2));
			}
			function Sc(e, t) {
				var n = e == null ? 0 : e.length;
				if (n) {
					var r = Ia(e, t);
					if (r < n && su(e[r], t)) return r;
				}
				return -1;
			}
			function Cc(e, t) {
				return Ia(e, t, !0);
			}
			function wc(e, t, n) {
				return La(e, t, J(n, 2), !0);
			}
			function Tc(e, t) {
				if (e != null && e.length) {
					var n = Ia(e, t, !0) - 1;
					if (su(e[n], t)) return n;
				}
				return -1;
			}
			function Ec(e) {
				return e && e.length ? Ra(e) : [];
			}
			function Dc(e, t) {
				return e && e.length ? Ra(e, J(t, 2)) : [];
			}
			function Oc(e) {
				var t = e == null ? 0 : e.length;
				return t ? Pa(e, 1, t) : [];
			}
			function kc(e, t, r) {
				return e && e.length ? (t = r || t === n ? 1 : $(t), Pa(e, 0, t < 0 ? 0 : t)) : [];
			}
			function Ac(e, t, r) {
				var i = e == null ? 0 : e.length;
				return i ? (t = r || t === n ? 1 : $(t), t = i - t, Pa(e, t < 0 ? 0 : t, i)) : [];
			}
			function jc(e, t) {
				return e && e.length ? Wa(e, J(t, 3), !1, !0) : [];
			}
			function Mc(e, t) {
				return e && e.length ? Wa(e, J(t, 3)) : [];
			}
			var Nc = q(function(e) {
				return Va(Li(e, 1, pu, !0));
			}), Pc = q(function(e) {
				var t = uc(e);
				return pu(t) && (t = n), Va(Li(e, 1, pu, !0), J(t, 2));
			}), Fc = q(function(e) {
				var t = uc(e);
				return t = typeof t == "function" ? t : n, Va(Li(e, 1, pu, !0), n, t);
			});
			function Ic(e) {
				return e && e.length ? Va(e) : [];
			}
			function Lc(e, t) {
				return e && e.length ? Va(e, J(t, 2)) : [];
			}
			function Rc(e, t) {
				return t = typeof t == "function" ? t : n, e && e.length ? Va(e, n, t) : [];
			}
			function zc(e) {
				if (!(e && e.length)) return [];
				var t = 0;
				return e = Mn(e, function(e) {
					if (pu(e)) return t = tn(e.length, t), !0;
				}), Qn(t, function(t) {
					return Fn(e, qn(t));
				});
			}
			function Bc(e, t) {
				if (!(e && e.length)) return [];
				var r = zc(e);
				return t == null ? r : Fn(r, function(e) {
					return Dn(t, n, e);
				});
			}
			var Vc = q(function(e, t) {
				return pu(e) ? Ai(e, t) : [];
			}), Hc = q(function(e) {
				return Ka(Mn(e, pu));
			}), Z = q(function(e) {
				var t = uc(e);
				return pu(t) && (t = n), Ka(Mn(e, pu), J(t, 2));
			}), Uc = q(function(e) {
				var t = uc(e);
				return t = typeof t == "function" ? t : n, Ka(Mn(e, pu), n, t);
			}), Wc = q(zc);
			function Gc(e, t) {
				return qa(e || [], t || [], vi);
			}
			function Kc(e, t) {
				return qa(e || [], t || [], Aa);
			}
			var qc = q(function(e) {
				var t = e.length, r = t > 1 ? e[t - 1] : n;
				return r = typeof r == "function" ? (e.pop(), r) : n, Bc(e, r);
			});
			function Jc(e) {
				var t = W(e);
				return t.__chain__ = !0, t;
			}
			function Yc(e, t) {
				return t(e), e;
			}
			function Xc(e, t) {
				return t(e);
			}
			var Zc = Go(function(e) {
				var t = e.length, r = t ? e[0] : 0, i = this.__wrapped__, a = function(t) {
					return wi(t, e);
				};
				return t > 1 || this.__actions__.length || !(i instanceof G) || !fs(r) ? this.thru(a) : (i = i.slice(r, +r + +!!t), i.__actions__.push({
					func: Xc,
					args: [a],
					thisArg: n
				}), new Ir(i, this.__chain__).thru(function(e) {
					return t && !e.length && e.push(n), e;
				}));
			});
			function Qc() {
				return Jc(this);
			}
			function $c() {
				return new Ir(this.value(), this.__chain__);
			}
			function el() {
				this.__values__ === n && (this.__values__ = Ju(this.value()));
				var e = this.__index__ >= this.__values__.length;
				return {
					done: e,
					value: e ? n : this.__values__[this.__index__++]
				};
			}
			function tl() {
				return this;
			}
			function nl(e) {
				for (var t, r = this; r instanceof Fr;) {
					var i = zs(r);
					i.__index__ = 0, i.__values__ = n, t ? a.__wrapped__ = i : t = i;
					var a = i;
					r = r.__wrapped__;
				}
				return a.__wrapped__ = e, t;
			}
			function rl() {
				var e = this.__wrapped__;
				if (e instanceof G) {
					var t = e;
					return this.__actions__.length && (t = new G(this)), t = t.reverse(), t.__actions__.push({
						func: Xc,
						args: [vc],
						thisArg: n
					}), new Ir(t, this.__chain__);
				}
				return this.thru(vc);
			}
			function il() {
				return Ga(this.__wrapped__, this.__actions__);
			}
			var al = ho(function(e, t, n) {
				B.call(e, n) ? ++e[n] : Ci(e, n, 1);
			});
			function ol(e, t, r) {
				var i = Q(e) ? jn : Ni;
				return r && ps(e, t, r) && (t = n), i(e, J(t, 3));
			}
			function sl(e, t) {
				return (Q(e) ? Mn : Ii)(e, J(t, 3));
			}
			var cl = wo(Zs), ll = wo(Qs);
			function ul(e, t) {
				return Li(yl(e, t), 1);
			}
			function dl(e, t) {
				return Li(yl(e, t), k);
			}
			function fl(e, t, r) {
				return r = r === n ? 1 : $(r), Li(yl(e, t), r);
			}
			function pl(e, t) {
				return (Q(e) ? kn : ji)(e, J(t, 3));
			}
			function ml(e, t) {
				return (Q(e) ? An : Mi)(e, J(t, 3));
			}
			var hl = ho(function(e, t, n) {
				B.call(e, n) ? e[n].push(t) : Ci(e, n, [t]);
			});
			function gl(e, t, n, r) {
				e = fu(e) ? e : Hd(e), n = n && !r ? $(n) : 0;
				var i = e.length;
				return n < 0 && (n = tn(i + n, 0)), Bu(e) ? n <= i && e.indexOf(t, n) > -1 : !!i && Un(e, t, n) > -1;
			}
			var _l = q(function(e, t, n) {
				var r = -1, i = typeof t == "function", a = fu(e) ? tt(e.length) : [];
				return ji(e, function(e) {
					a[++r] = i ? Dn(t, e, n) : Zi(e, t, n);
				}), a;
			}), vl = ho(function(e, t, n) {
				Ci(e, n, t);
			});
			function yl(e, t) {
				return (Q(e) ? Fn : pa)(e, J(t, 3));
			}
			function bl(e, t, r, i) {
				return e == null ? [] : (Q(t) || (t = t == null ? [] : [t]), r = i ? n : r, Q(r) || (r = r == null ? [] : [r]), ya(e, t, r));
			}
			var xl = ho(function(e, t, n) {
				e[+!n].push(t);
			}, function() {
				return [[], []];
			});
			function Sl(e, t, n) {
				var r = Q(e) ? Ln : Yn, i = arguments.length < 3;
				return r(e, J(t, 4), n, i, ji);
			}
			function Cl(e, t, n) {
				var r = Q(e) ? Rn : Yn, i = arguments.length < 3;
				return r(e, J(t, 4), n, i, Mi);
			}
			function wl(e, t) {
				return (Q(e) ? Mn : Ii)(e, Wl(J(t, 3)));
			}
			function Tl(e) {
				return (Q(e) ? mi : Oa)(e);
			}
			function El(e, t, r) {
				return t = (r ? ps(e, t, r) : t === n) ? 1 : $(t), (Q(e) ? hi : ka)(e, t);
			}
			function Dl(e) {
				return (Q(e) ? gi : Na)(e);
			}
			function Ol(e) {
				if (e == null) return 0;
				if (fu(e)) return Bu(e) ? xr(e) : e.length;
				var t = rs(e);
				return t == ye || t == Te ? e.size : ua(e).length;
			}
			function kl(e, t, r) {
				var i = Q(e) ? H : Fa;
				return r && ps(e, t, r) && (t = n), i(e, J(t, 3));
			}
			var Al = q(function(e, t) {
				if (e == null) return [];
				var n = t.length;
				return n > 1 && ps(e, t[0], t[1]) ? t = [] : n > 2 && ps(t[0], t[1], t[2]) && (t = [t[0]]), ya(e, Li(t, 1), []);
			}), jl = Wt || function() {
				return hn.Date.now();
			};
			function Ml(e, t) {
				if (typeof t != "function") throw new bt(o);
				return e = $(e), function() {
					if (--e < 1) return t.apply(this, arguments);
				};
			}
			function Nl(e, t, r) {
				return t = r ? n : t, t = e && t == null ? e.length : t, Ro(e, w, n, n, n, n, t);
			}
			function Pl(e, t) {
				var r;
				if (typeof t != "function") throw new bt(o);
				return e = $(e), function() {
					return --e > 0 && (r = t.apply(this, arguments)), e <= 1 && (t = n), r;
				};
			}
			var Fl = q(function(e, t, n) {
				var r = _;
				if (n.length) {
					var i = gr(n, Xo(Fl));
					r |= S;
				}
				return Ro(e, r, t, n, i);
			}), Il = q(function(e, t, n) {
				var r = _ | v;
				if (n.length) {
					var i = gr(n, Xo(Il));
					r |= S;
				}
				return Ro(t, r, e, n, i);
			});
			function Ll(e, t, r) {
				t = r ? n : t;
				var i = Ro(e, b, n, n, n, n, n, t);
				return i.placeholder = Ll.placeholder, i;
			}
			function Rl(e, t, r) {
				t = r ? n : t;
				var i = Ro(e, x, n, n, n, n, n, t);
				return i.placeholder = Rl.placeholder, i;
			}
			function zl(e, t, r) {
				var i, a, s, c, l, u, d = 0, f = !1, p = !1, m = !0;
				if (typeof e != "function") throw new bt(o);
				t = Zu(t) || 0, Eu(r) && (f = !!r.leading, p = "maxWait" in r, s = p ? tn(Zu(r.maxWait) || 0, t) : s, m = "trailing" in r ? !!r.trailing : m);
				function h(t) {
					var r = i, o = a;
					return i = a = n, d = t, c = e.apply(o, r), c;
				}
				function g(e) {
					return d = e, l = As(y, t), f ? h(e) : c;
				}
				function _(e) {
					var n = e - u, r = e - d, i = t - n;
					return p ? sn(i, s - r) : i;
				}
				function v(e) {
					var r = e - u, i = e - d;
					return u === n || r >= t || r < 0 || p && i >= s;
				}
				function y() {
					var e = jl();
					if (v(e)) return b(e);
					l = As(y, _(e));
				}
				function b(e) {
					return l = n, m && i ? h(e) : (i = a = n, c);
				}
				function x() {
					l !== n && $a(l), d = 0, i = u = a = l = n;
				}
				function S() {
					return l === n ? c : b(jl());
				}
				function C() {
					var e = jl(), r = v(e);
					if (i = arguments, a = this, u = e, r) {
						if (l === n) return g(u);
						if (p) return $a(l), l = As(y, t), h(u);
					}
					return l === n && (l = As(y, t)), c;
				}
				return C.cancel = x, C.flush = S, C;
			}
			var Bl = q(function(e, t) {
				return ki(e, 1, t);
			}), Vl = q(function(e, t, n) {
				return ki(e, Zu(t) || 0, n);
			});
			function Hl(e) {
				return Ro(e, E);
			}
			function Ul(e, t) {
				if (typeof e != "function" || t != null && typeof t != "function") throw new bt(o);
				var n = function() {
					var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
					if (a.has(i)) return a.get(i);
					var o = e.apply(this, r);
					return n.cache = a.set(i, o) || a, o;
				};
				return n.cache = new (Ul.Cache || Qr)(), n;
			}
			Ul.Cache = Qr;
			function Wl(e) {
				if (typeof e != "function") throw new bt(o);
				return function() {
					var t = arguments;
					switch (t.length) {
						case 0: return !e.call(this);
						case 1: return !e.call(this, t[0]);
						case 2: return !e.call(this, t[0], t[1]);
						case 3: return !e.call(this, t[0], t[1], t[2]);
					}
					return !e.apply(this, t);
				};
			}
			function Gl(e) {
				return Pl(2, e);
			}
			var Kl = Za(function(e, t) {
				t = t.length == 1 && Q(t[0]) ? Fn(t[0], tr(J())) : Fn(Li(t, 1), tr(J()));
				var n = t.length;
				return q(function(r) {
					for (var i = -1, a = sn(r.length, n); ++i < a;) r[i] = t[i].call(this, r[i]);
					return Dn(e, this, r);
				});
			}), ql = q(function(e, t) {
				return Ro(e, S, n, t, gr(t, Xo(ql)));
			}), Jl = q(function(e, t) {
				return Ro(e, C, n, t, gr(t, Xo(Jl)));
			}), Yl = Go(function(e, t) {
				return Ro(e, T, n, n, n, t);
			});
			function Xl(e, t) {
				if (typeof e != "function") throw new bt(o);
				return t = t === n ? t : $(t), q(e, t);
			}
			function Zl(e, t) {
				if (typeof e != "function") throw new bt(o);
				return t = t == null ? 0 : tn($(t), 0), q(function(n) {
					var r = n[t], i = Qa(n, 0, t);
					return r && In(i, r), Dn(e, this, i);
				});
			}
			function Ql(e, t, n) {
				var r = !0, i = !0;
				if (typeof e != "function") throw new bt(o);
				return Eu(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), zl(e, t, {
					leading: r,
					maxWait: t,
					trailing: i
				});
			}
			function $l(e) {
				return Nl(e, 1);
			}
			function eu(e, t) {
				return ql(Ya(t), e);
			}
			function tu() {
				if (!arguments.length) return [];
				var e = arguments[0];
				return Q(e) ? e : [e];
			}
			function nu(e) {
				return Ei(e, m);
			}
			function ru(e, t) {
				return t = typeof t == "function" ? t : n, Ei(e, m, t);
			}
			function iu(e) {
				return Ei(e, f | m);
			}
			function au(e, t) {
				return t = typeof t == "function" ? t : n, Ei(e, f | m, t);
			}
			function ou(e, t) {
				return t == null || Oi(e, t, Cd(t));
			}
			function su(e, t) {
				return e === t || e !== e && t !== t;
			}
			var cu = No(Gi), lu = No(function(e, t) {
				return e >= t;
			}), uu = Qi(function() {
				return arguments;
			}()) ? Qi : function(e) {
				return Du(e) && B.call(e, "callee") && !Rt.call(e, "callee");
			}, Q = tt.isArray, du = xn ? tr(xn) : $i;
			function fu(e) {
				return e != null && Tu(e.length) && !Cu(e);
			}
			function pu(e) {
				return Du(e) && fu(e);
			}
			function mu(e) {
				return e === !0 || e === !1 || Du(e) && Wi(e) == pe;
			}
			var hu = Yt || Xf, gu = Sn ? tr(Sn) : ea;
			function _u(e) {
				return Du(e) && e.nodeType === 1 && !Iu(e);
			}
			function vu(e) {
				if (e == null) return !0;
				if (fu(e) && (Q(e) || typeof e == "string" || typeof e.splice == "function" || hu(e) || Hu(e) || uu(e))) return !e.length;
				var t = rs(e);
				if (t == ye || t == Te) return !e.size;
				if (vs(e)) return !ua(e).length;
				for (var n in e) if (B.call(e, n)) return !1;
				return !0;
			}
			function yu(e, t) {
				return ta(e, t);
			}
			function bu(e, t, r) {
				r = typeof r == "function" ? r : n;
				var i = r ? r(e, t) : n;
				return i === n ? ta(e, t, n, r) : !!i;
			}
			function xu(e) {
				if (!Du(e)) return !1;
				var t = Wi(e);
				return t == ge || t == he || typeof e.message == "string" && typeof e.name == "string" && !Iu(e);
			}
			function Su(e) {
				return typeof e == "number" && Qt(e);
			}
			function Cu(e) {
				if (!Eu(e)) return !1;
				var t = Wi(e);
				return t == _e || t == ve || t == fe || t == Ce;
			}
			function wu(e) {
				return typeof e == "number" && e == $(e);
			}
			function Tu(e) {
				return typeof e == "number" && e > -1 && e % 1 == 0 && e <= A;
			}
			function Eu(e) {
				var t = typeof e;
				return e != null && (t == "object" || t == "function");
			}
			function Du(e) {
				return typeof e == "object" && !!e;
			}
			var Ou = Cn ? tr(Cn) : ra;
			function ku(e, t) {
				return e === t || ia(e, t, Qo(t));
			}
			function Au(e, t, r) {
				return r = typeof r == "function" ? r : n, ia(e, t, Qo(t), r);
			}
			function ju(e) {
				return Fu(e) && e != +e;
			}
			function Mu(e) {
				if (_s(e)) throw new gt(a);
				return aa(e);
			}
			function Nu(e) {
				return e === null;
			}
			function Pu(e) {
				return e == null;
			}
			function Fu(e) {
				return typeof e == "number" || Du(e) && Wi(e) == be;
			}
			function Iu(e) {
				if (!Du(e) || Wi(e) != M) return !1;
				var t = It(e);
				if (t === null) return !0;
				var n = B.call(t, "constructor") && t.constructor;
				return typeof n == "function" && n instanceof n && Tt.call(n) == kt;
			}
			var Lu = wn ? tr(wn) : oa;
			function Ru(e) {
				return wu(e) && e >= -A && e <= A;
			}
			var zu = Tn ? tr(Tn) : sa;
			function Bu(e) {
				return typeof e == "string" || !Q(e) && Du(e) && Wi(e) == Ee;
			}
			function Vu(e) {
				return typeof e == "symbol" || Du(e) && Wi(e) == N;
			}
			var Hu = En ? tr(En) : ca;
			function Uu(e) {
				return e === n;
			}
			function Wu(e) {
				return Du(e) && rs(e) == Oe;
			}
			function Gu(e) {
				return Du(e) && Wi(e) == ke;
			}
			var Ku = No(fa), qu = No(function(e, t) {
				return e <= t;
			});
			function Ju(e) {
				if (!e) return [];
				if (fu(e)) return Bu(e) ? Sr(e) : uo(e);
				if (V && e[V]) return pr(e[V]());
				var t = rs(e);
				return (t == ye ? mr : t == Te ? _r : Hd)(e);
			}
			function Yu(e) {
				return e ? (e = Zu(e), e === k || e === -k ? (e < 0 ? -1 : 1) * ae : e === e ? e : 0) : e === 0 ? e : 0;
			}
			function $(e) {
				var t = Yu(e), n = t % 1;
				return t === t ? n ? t - n : t : 0;
			}
			function Xu(e) {
				return e ? Ti($(e), 0, se) : 0;
			}
			function Zu(e) {
				if (typeof e == "number") return e;
				if (Vu(e)) return oe;
				if (Eu(e)) {
					var t = typeof e.valueOf == "function" ? e.valueOf() : e;
					e = Eu(t) ? t + "" : t;
				}
				if (typeof e != "string") return e === 0 ? e : +e;
				e = er(e);
				var n = lt.test(e);
				return n || dt.test(e) ? fn(e.slice(2), n ? 2 : 8) : ct.test(e) ? oe : +e;
			}
			function Qu(e) {
				return fo(e, wd(e));
			}
			function $u(e) {
				return e ? Ti($(e), -A, A) : e === 0 ? e : 0;
			}
			function ed(e) {
				return e == null ? "" : Ba(e);
			}
			var td = go(function(e, t) {
				if (vs(t) || fu(t)) {
					fo(t, Cd(t), e);
					return;
				}
				for (var n in t) B.call(t, n) && vi(e, n, t[n]);
			}), nd = go(function(e, t) {
				fo(t, wd(t), e);
			}), rd = go(function(e, t, n, r) {
				fo(t, wd(t), e, r);
			}), id = go(function(e, t, n, r) {
				fo(t, Cd(t), e, r);
			}), ad = Go(wi);
			function od(e, t) {
				var n = Pr(e);
				return t == null ? n : xi(n, t);
			}
			var sd = q(function(e, t) {
				e = z(e);
				var r = -1, i = t.length, a = i > 2 ? t[2] : n;
				for (a && ps(t[0], t[1], a) && (i = 1); ++r < i;) for (var o = t[r], s = wd(o), c = -1, l = s.length; ++c < l;) {
					var u = s[c], d = e[u];
					(d === n || su(d, Ct[u]) && !B.call(e, u)) && (e[u] = o[u]);
				}
				return e;
			}), cd = q(function(e) {
				return e.push(n, Bo), Dn(Od, n, e);
			});
			function ld(e, t) {
				return Vn(e, J(t, 3), Bi);
			}
			function ud(e, t) {
				return Vn(e, J(t, 3), Vi);
			}
			function dd(e, t) {
				return e == null ? e : Ri(e, J(t, 3), wd);
			}
			function fd(e, t) {
				return e == null ? e : zi(e, J(t, 3), wd);
			}
			function pd(e, t) {
				return e && Bi(e, J(t, 3));
			}
			function md(e, t) {
				return e && Vi(e, J(t, 3));
			}
			function hd(e) {
				return e == null ? [] : Hi(e, Cd(e));
			}
			function gd(e) {
				return e == null ? [] : Hi(e, wd(e));
			}
			function _d(e, t, r) {
				var i = e == null ? n : K(e, t);
				return i === n ? r : i;
			}
			function vd(e, t) {
				return e != null && os(e, t, Ki);
			}
			function yd(e, t) {
				return e != null && os(e, t, qi);
			}
			var bd = Do(function(e, t, n) {
				t != null && typeof t.toString != "function" && (t = Ot.call(t)), e[t] = n;
			}, Of(Mf)), xd = Do(function(e, t, n) {
				t != null && typeof t.toString != "function" && (t = Ot.call(t)), B.call(e, t) ? e[t].push(n) : e[t] = [n];
			}, J), Sd = q(Zi);
			function Cd(e) {
				return fu(e) ? pi(e) : ua(e);
			}
			function wd(e) {
				return fu(e) ? pi(e, !0) : da(e);
			}
			function Td(e, t) {
				var n = {};
				return t = J(t, 3), Bi(e, function(e, r, i) {
					Ci(n, t(e, r, i), e);
				}), n;
			}
			function Ed(e, t) {
				var n = {};
				return t = J(t, 3), Bi(e, function(e, r, i) {
					Ci(n, r, t(e, r, i));
				}), n;
			}
			var Dd = go(function(e, t, n) {
				ga(e, t, n);
			}), Od = go(function(e, t, n, r) {
				ga(e, t, n, r);
			}), kd = Go(function(e, t) {
				var n = {};
				if (e == null) return n;
				var r = !1;
				t = Fn(t, function(t) {
					return t = Xa(t, e), r ||= t.length > 1, t;
				}), fo(e, qo(e), n), r && (n = Ei(n, f | p | m, Vo));
				for (var i = t.length; i--;) Ha(n, t[i]);
				return n;
			});
			function Ad(e, t) {
				return Md(e, Wl(J(t)));
			}
			var jd = Go(function(e, t) {
				return e == null ? {} : ba(e, t);
			});
			function Md(e, t) {
				if (e == null) return {};
				var n = Fn(qo(e), function(e) {
					return [e];
				});
				return t = J(t), xa(e, n, function(e, n) {
					return t(e, n[0]);
				});
			}
			function Nd(e, t, r) {
				t = Xa(t, e);
				var i = -1, a = t.length;
				for (a || (a = 1, e = n); ++i < a;) {
					var o = e == null ? n : e[Is(t[i])];
					o === n && (i = a, o = r), e = Cu(o) ? o.call(e) : o;
				}
				return e;
			}
			function Pd(e, t, n) {
				return e == null ? e : Aa(e, t, n);
			}
			function Fd(e, t, r, i) {
				return i = typeof i == "function" ? i : n, e == null ? e : Aa(e, t, r, i);
			}
			var Id = Lo(Cd), Ld = Lo(wd);
			function Rd(e, t, n) {
				var r = Q(e), i = r || hu(e) || Hu(e);
				if (t = J(t, 4), n == null) {
					var a = e && e.constructor;
					n = i ? r ? new a() : [] : Eu(e) && Cu(a) ? Pr(It(e)) : {};
				}
				return (i ? kn : Bi)(e, function(e, r, i) {
					return t(n, e, r, i);
				}), n;
			}
			function zd(e, t) {
				return e == null ? !0 : Ha(e, t);
			}
			function Bd(e, t, n) {
				return e == null ? e : Ua(e, t, Ya(n));
			}
			function Vd(e, t, r, i) {
				return i = typeof i == "function" ? i : n, e == null ? e : Ua(e, t, Ya(r), i);
			}
			function Hd(e) {
				return e == null ? [] : nr(e, Cd(e));
			}
			function Ud(e) {
				return e == null ? [] : nr(e, wd(e));
			}
			function Wd(e, t, r) {
				return r === n && (r = t, t = n), r !== n && (r = Zu(r), r = r === r ? r : 0), t !== n && (t = Zu(t), t = t === t ? t : 0), Ti(Zu(e), t, r);
			}
			function Gd(e, t, r) {
				return t = Yu(t), r === n ? (r = t, t = 0) : r = Yu(r), e = Zu(e), Ji(e, t, r);
			}
			function Kd(e, t, r) {
				if (r && typeof r != "boolean" && ps(e, t, r) && (t = r = n), r === n && (typeof t == "boolean" ? (r = t, t = n) : typeof e == "boolean" && (r = e, e = n)), e === n && t === n ? (e = 0, t = 1) : (e = Yu(e), t === n ? (t = e, e = 0) : t = Yu(t)), e > t) {
					var i = e;
					e = t, t = i;
				}
				if (r || e % 1 || t % 1) {
					var a = un();
					return sn(e + a * (t - e + dn("1e-" + ((a + "").length - 1))), t);
				}
				return Ta(e, t);
			}
			var qd = xo(function(e, t, n) {
				return t = t.toLowerCase(), e + (n ? Jd(t) : t);
			});
			function Jd(e) {
				return Sf(ed(e).toLowerCase());
			}
			function Yd(e) {
				return e = ed(e), e && e.replace(pt, sr).replace(Zt, "");
			}
			function Xd(e, t, r) {
				e = ed(e), t = Ba(t);
				var i = e.length;
				r = r === n ? i : Ti($(r), 0, i);
				var a = r;
				return r -= t.length, r >= 0 && e.slice(r, a) == t;
			}
			function Zd(e) {
				return e = ed(e), e && Ge.test(e) ? e.replace(Ue, cr) : e;
			}
			function Qd(e) {
				return e = ed(e), e && $e.test(e) ? e.replace(Qe, "\\$&") : e;
			}
			var $d = xo(function(e, t, n) {
				return e + (n ? "-" : "") + t.toLowerCase();
			}), ef = xo(function(e, t, n) {
				return e + (n ? " " : "") + t.toLowerCase();
			}), tf = bo("toLowerCase");
			function nf(e, t, n) {
				e = ed(e), t = $(t);
				var r = t ? xr(e) : 0;
				if (!t || r >= t) return e;
				var i = (t - r) / 2;
				return Ao(qt(i), n) + e + Ao(Kt(i), n);
			}
			function rf(e, t, n) {
				e = ed(e), t = $(t);
				var r = t ? xr(e) : 0;
				return t && r < t ? e + Ao(t - r, n) : e;
			}
			function af(e, t, n) {
				e = ed(e), t = $(t);
				var r = t ? xr(e) : 0;
				return t && r < t ? Ao(t - r, n) + e : e;
			}
			function of(e, t, n) {
				return n || t == null ? t = 0 : t &&= +t, ln(ed(e).replace(et, ""), t || 0);
			}
			function sf(e, t, r) {
				return t = (r ? ps(e, t, r) : t === n) ? 1 : $(t), Da(ed(e), t);
			}
			function cf() {
				var e = arguments, t = ed(e[0]);
				return e.length < 3 ? t : t.replace(e[1], e[2]);
			}
			var lf = xo(function(e, t, n) {
				return e + (n ? "_" : "") + t.toLowerCase();
			});
			function uf(e, t, r) {
				return r && typeof r != "number" && ps(e, t, r) && (t = r = n), r = r === n ? se : r >>> 0, r ? (e = ed(e), e && (typeof t == "string" || t != null && !Lu(t)) && (t = Ba(t), !t && dr(e)) ? Qa(Sr(e), 0, r) : e.split(t, r)) : [];
			}
			var df = xo(function(e, t, n) {
				return e + (n ? " " : "") + Sf(t);
			});
			function ff(e, t, n) {
				return e = ed(e), n = n == null ? 0 : Ti($(n), 0, e.length), t = Ba(t), e.slice(n, n + t.length) == t;
			}
			function pf(e, t, r) {
				var i = W.templateSettings;
				r && ps(e, t, r) && (t = n), e = ed(e), t = id({}, t, i, zo);
				var a = id({}, t.imports, i.imports, zo), o = Cd(a), l = nr(a, o);
				kn(o, function(e) {
					if (L.test(e)) throw new gt(c);
				});
				var u, d, f = 0, p = t.interpolate || mt, m = "__p += '", h = vt((t.escape || mt).source + "|" + p.source + "|" + (p === Je ? ot : mt).source + "|" + (t.evaluate || mt).source + "|$", "g"), g = "//# sourceURL=" + (B.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++rn + "]") + "\n";
				e.replace(h, function(t, n, r, i, a, o) {
					return r ||= i, m += e.slice(f, o).replace(ht, lr), n && (u = !0, m += "' +\n__e(" + n + ") +\n'"), a && (d = !0, m += "';\n" + a + ";\n__p += '"), r && (m += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), f = o + t.length, t;
				}), m += "';\n";
				var _ = B.call(t, "variable") && t.variable;
				if (!_) m = "with (obj) {\n" + m + "\n}\n";
				else if (L.test(_)) throw new gt(s);
				m = (d ? m.replace(ze, "") : m).replace(Be, "$1").replace(Ve, "$1;"), m = "function(" + (_ || "obj") + ") {\n" + (_ ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (u ? ", __e = _.escape" : "") + (d ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + m + "return __p\n}";
				var v = wf(function() {
					return _t(o, g + "return " + m).apply(n, l);
				});
				if (v.source = m, xu(v)) throw v;
				return v;
			}
			function mf(e) {
				return ed(e).toLowerCase();
			}
			function hf(e) {
				return ed(e).toUpperCase();
			}
			function gf(e, t, r) {
				if (e = ed(e), e && (r || t === n)) return er(e);
				if (!e || !(t = Ba(t))) return e;
				var i = Sr(e), a = Sr(t);
				return Qa(i, ir(i, a), ar(i, a) + 1).join("");
			}
			function _f(e, t, r) {
				if (e = ed(e), e && (r || t === n)) return e.slice(0, Cr(e) + 1);
				if (!e || !(t = Ba(t))) return e;
				var i = Sr(e);
				return Qa(i, 0, ar(i, Sr(t)) + 1).join("");
			}
			function vf(e, t, r) {
				if (e = ed(e), e && (r || t === n)) return e.replace(et, "");
				if (!e || !(t = Ba(t))) return e;
				var i = Sr(e);
				return Qa(i, ir(i, Sr(t))).join("");
			}
			function yf(e, t) {
				var r = ee, i = D;
				if (Eu(t)) {
					var a = "separator" in t ? t.separator : a;
					r = "length" in t ? $(t.length) : r, i = "omission" in t ? Ba(t.omission) : i;
				}
				e = ed(e);
				var o = e.length;
				if (dr(e)) {
					var s = Sr(e);
					o = s.length;
				}
				if (r >= o) return e;
				var c = r - xr(i);
				if (c < 1) return i;
				var l = s ? Qa(s, 0, c).join("") : e.slice(0, c);
				if (a === n) return l + i;
				if (s && (c += l.length - c), Lu(a)) {
					if (e.slice(c).search(a)) {
						var u, d = l;
						for (a.global || (a = vt(a.source, ed(st.exec(a)) + "g")), a.lastIndex = 0; u = a.exec(d);) var f = u.index;
						l = l.slice(0, f === n ? c : f);
					}
				} else if (e.indexOf(Ba(a), c) != c) {
					var p = l.lastIndexOf(a);
					p > -1 && (l = l.slice(0, p));
				}
				return l + i;
			}
			function bf(e) {
				return e = ed(e), e && We.test(e) ? e.replace(He, wr) : e;
			}
			var xf = xo(function(e, t, n) {
				return e + (n ? " " : "") + t.toUpperCase();
			}), Sf = bo("toUpperCase");
			function Cf(e, t, r) {
				return e = ed(e), t = r ? n : t, t === n ? fr(e) ? Dr(e) : Bn(e) : e.match(t) || [];
			}
			var wf = q(function(e, t) {
				try {
					return Dn(e, n, t);
				} catch (e) {
					return xu(e) ? e : new gt(e);
				}
			}), Tf = Go(function(e, t) {
				return kn(t, function(t) {
					t = Is(t), Ci(e, t, Fl(e[t], e));
				}), e;
			});
			function Ef(e) {
				var t = e == null ? 0 : e.length, n = J();
				return e = t ? Fn(e, function(e) {
					if (typeof e[1] != "function") throw new bt(o);
					return [n(e[0]), e[1]];
				}) : [], q(function(n) {
					for (var r = -1; ++r < t;) {
						var i = e[r];
						if (Dn(i[0], this, n)) return Dn(i[1], this, n);
					}
				});
			}
			function Df(e) {
				return Di(Ei(e, f));
			}
			function Of(e) {
				return function() {
					return e;
				};
			}
			function kf(e, t) {
				return e == null || e !== e ? t : e;
			}
			var Af = To(), jf = To(!0);
			function Mf(e) {
				return e;
			}
			function Nf(e) {
				return la(typeof e == "function" ? e : Ei(e, f));
			}
			function Pf(e) {
				return ma(Ei(e, f));
			}
			function Ff(e, t) {
				return ha(e, Ei(t, f));
			}
			var If = q(function(e, t) {
				return function(n) {
					return Zi(n, e, t);
				};
			}), Lf = q(function(e, t) {
				return function(n) {
					return Zi(e, n, t);
				};
			});
			function Rf(e, t, n) {
				var r = Cd(t), i = Hi(t, r);
				n == null && !(Eu(t) && (i.length || !r.length)) && (n = t, t = e, e = this, i = Hi(t, Cd(t)));
				var a = !(Eu(n) && "chain" in n) || !!n.chain, o = Cu(e);
				return kn(i, function(n) {
					var r = t[n];
					e[n] = r, o && (e.prototype[n] = function() {
						var t = this.__chain__;
						if (a || t) {
							var n = e(this.__wrapped__);
							return (n.__actions__ = uo(this.__actions__)).push({
								func: r,
								args: arguments,
								thisArg: e
							}), n.__chain__ = t, n;
						}
						return r.apply(e, In([this.value()], arguments));
					});
				}), e;
			}
			function zf() {
				return hn._ === this && (hn._ = At), this;
			}
			function Bf() {}
			function Vf(e) {
				return e = $(e), q(function(t) {
					return va(t, e);
				});
			}
			var Hf = ko(Fn), Uf = ko(jn), Wf = ko(H);
			function Gf(e) {
				return Y(e) ? qn(Is(e)) : Sa(e);
			}
			function Kf(e) {
				return function(t) {
					return e == null ? n : K(e, t);
				};
			}
			var qf = Mo(), Jf = Mo(!0);
			function Yf() {
				return [];
			}
			function Xf() {
				return !1;
			}
			function Zf() {
				return {};
			}
			function Qf() {
				return "";
			}
			function $f() {
				return !0;
			}
			function ep(e, t) {
				if (e = $(e), e < 1 || e > A) return [];
				var n = se, r = sn(e, se);
				t = J(t), e -= se;
				for (var i = Qn(r, t); ++n < e;) t(n);
				return i;
			}
			function tp(e) {
				return Q(e) ? Fn(e, Is) : Vu(e) ? [e] : uo(Fs(ed(e)));
			}
			function np(e) {
				var t = ++Et;
				return ed(e) + t;
			}
			var rp = Oo(function(e, t) {
				return e + t;
			}, 0), ip = Fo("ceil"), ap = Oo(function(e, t) {
				return e / t;
			}, 1), op = Fo("floor");
			function sp(e) {
				return e && e.length ? Pi(e, Mf, Gi) : n;
			}
			function cp(e, t) {
				return e && e.length ? Pi(e, J(t, 2), Gi) : n;
			}
			function lp(e) {
				return Kn(e, Mf);
			}
			function up(e, t) {
				return Kn(e, J(t, 2));
			}
			function dp(e) {
				return e && e.length ? Pi(e, Mf, fa) : n;
			}
			function fp(e, t) {
				return e && e.length ? Pi(e, J(t, 2), fa) : n;
			}
			var pp = Oo(function(e, t) {
				return e * t;
			}, 1), mp = Fo("round"), hp = Oo(function(e, t) {
				return e - t;
			}, 0);
			function gp(e) {
				return e && e.length ? Zn(e, Mf) : 0;
			}
			function _p(e, t) {
				return e && e.length ? Zn(e, J(t, 2)) : 0;
			}
			return W.after = Ml, W.ary = Nl, W.assign = td, W.assignIn = nd, W.assignInWith = rd, W.assignWith = id, W.at = ad, W.before = Pl, W.bind = Fl, W.bindAll = Tf, W.bindKey = Il, W.castArray = tu, W.chain = Jc, W.chunk = Bs, W.compact = Vs, W.concat = Hs, W.cond = Ef, W.conforms = Df, W.constant = Of, W.countBy = al, W.create = od, W.curry = Ll, W.curryRight = Rl, W.debounce = zl, W.defaults = sd, W.defaultsDeep = cd, W.defer = Bl, W.delay = Vl, W.difference = Us, W.differenceBy = Ws, W.differenceWith = Gs, W.drop = Ks, W.dropRight = qs, W.dropRightWhile = Js, W.dropWhile = Ys, W.fill = Xs, W.filter = sl, W.flatMap = ul, W.flatMapDeep = dl, W.flatMapDepth = fl, W.flatten = $s, W.flattenDeep = ec, W.flattenDepth = tc, W.flip = Hl, W.flow = Af, W.flowRight = jf, W.fromPairs = nc, W.functions = hd, W.functionsIn = gd, W.groupBy = hl, W.initial = ac, W.intersection = oc, W.intersectionBy = sc, W.intersectionWith = cc, W.invert = bd, W.invertBy = xd, W.invokeMap = _l, W.iteratee = Nf, W.keyBy = vl, W.keys = Cd, W.keysIn = wd, W.map = yl, W.mapKeys = Td, W.mapValues = Ed, W.matches = Pf, W.matchesProperty = Ff, W.memoize = Ul, W.merge = Dd, W.mergeWith = Od, W.method = If, W.methodOf = Lf, W.mixin = Rf, W.negate = Wl, W.nthArg = Vf, W.omit = kd, W.omitBy = Ad, W.once = Gl, W.orderBy = bl, W.over = Hf, W.overArgs = Kl, W.overEvery = Uf, W.overSome = Wf, W.partial = ql, W.partialRight = Jl, W.partition = xl, W.pick = jd, W.pickBy = Md, W.property = Gf, W.propertyOf = Kf, W.pull = pc, W.pullAll = X, W.pullAllBy = mc, W.pullAllWith = hc, W.pullAt = gc, W.range = qf, W.rangeRight = Jf, W.rearg = Yl, W.reject = wl, W.remove = _c, W.rest = Xl, W.reverse = vc, W.sampleSize = El, W.set = Pd, W.setWith = Fd, W.shuffle = Dl, W.slice = yc, W.sortBy = Al, W.sortedUniq = Ec, W.sortedUniqBy = Dc, W.split = uf, W.spread = Zl, W.tail = Oc, W.take = kc, W.takeRight = Ac, W.takeRightWhile = jc, W.takeWhile = Mc, W.tap = Yc, W.throttle = Ql, W.thru = Xc, W.toArray = Ju, W.toPairs = Id, W.toPairsIn = Ld, W.toPath = tp, W.toPlainObject = Qu, W.transform = Rd, W.unary = $l, W.union = Nc, W.unionBy = Pc, W.unionWith = Fc, W.uniq = Ic, W.uniqBy = Lc, W.uniqWith = Rc, W.unset = zd, W.unzip = zc, W.unzipWith = Bc, W.update = Bd, W.updateWith = Vd, W.values = Hd, W.valuesIn = Ud, W.without = Vc, W.words = Cf, W.wrap = eu, W.xor = Hc, W.xorBy = Z, W.xorWith = Uc, W.zip = Wc, W.zipObject = Gc, W.zipObjectDeep = Kc, W.zipWith = qc, W.entries = Id, W.entriesIn = Ld, W.extend = nd, W.extendWith = rd, Rf(W, W), W.add = rp, W.attempt = wf, W.camelCase = qd, W.capitalize = Jd, W.ceil = ip, W.clamp = Wd, W.clone = nu, W.cloneDeep = iu, W.cloneDeepWith = au, W.cloneWith = ru, W.conformsTo = ou, W.deburr = Yd, W.defaultTo = kf, W.divide = ap, W.endsWith = Xd, W.eq = su, W.escape = Zd, W.escapeRegExp = Qd, W.every = ol, W.find = cl, W.findIndex = Zs, W.findKey = ld, W.findLast = ll, W.findLastIndex = Qs, W.findLastKey = ud, W.floor = op, W.forEach = pl, W.forEachRight = ml, W.forIn = dd, W.forInRight = fd, W.forOwn = pd, W.forOwnRight = md, W.get = _d, W.gt = cu, W.gte = lu, W.has = vd, W.hasIn = yd, W.head = rc, W.identity = Mf, W.includes = gl, W.indexOf = ic, W.inRange = Gd, W.invoke = Sd, W.isArguments = uu, W.isArray = Q, W.isArrayBuffer = du, W.isArrayLike = fu, W.isArrayLikeObject = pu, W.isBoolean = mu, W.isBuffer = hu, W.isDate = gu, W.isElement = _u, W.isEmpty = vu, W.isEqual = yu, W.isEqualWith = bu, W.isError = xu, W.isFinite = Su, W.isFunction = Cu, W.isInteger = wu, W.isLength = Tu, W.isMap = Ou, W.isMatch = ku, W.isMatchWith = Au, W.isNaN = ju, W.isNative = Mu, W.isNil = Pu, W.isNull = Nu, W.isNumber = Fu, W.isObject = Eu, W.isObjectLike = Du, W.isPlainObject = Iu, W.isRegExp = Lu, W.isSafeInteger = Ru, W.isSet = zu, W.isString = Bu, W.isSymbol = Vu, W.isTypedArray = Hu, W.isUndefined = Uu, W.isWeakMap = Wu, W.isWeakSet = Gu, W.join = lc, W.kebabCase = $d, W.last = uc, W.lastIndexOf = dc, W.lowerCase = ef, W.lowerFirst = tf, W.lt = Ku, W.lte = qu, W.max = sp, W.maxBy = cp, W.mean = lp, W.meanBy = up, W.min = dp, W.minBy = fp, W.stubArray = Yf, W.stubFalse = Xf, W.stubObject = Zf, W.stubString = Qf, W.stubTrue = $f, W.multiply = pp, W.nth = fc, W.noConflict = zf, W.noop = Bf, W.now = jl, W.pad = nf, W.padEnd = rf, W.padStart = af, W.parseInt = of, W.random = Kd, W.reduce = Sl, W.reduceRight = Cl, W.repeat = sf, W.replace = cf, W.result = Nd, W.round = mp, W.runInContext = e, W.sample = Tl, W.size = Ol, W.snakeCase = lf, W.some = kl, W.sortedIndex = bc, W.sortedIndexBy = xc, W.sortedIndexOf = Sc, W.sortedLastIndex = Cc, W.sortedLastIndexBy = wc, W.sortedLastIndexOf = Tc, W.startCase = df, W.startsWith = ff, W.subtract = hp, W.sum = gp, W.sumBy = _p, W.template = pf, W.times = ep, W.toFinite = Yu, W.toInteger = $, W.toLength = Xu, W.toLower = mf, W.toNumber = Zu, W.toSafeInteger = $u, W.toString = ed, W.toUpper = hf, W.trim = gf, W.trimEnd = _f, W.trimStart = vf, W.truncate = yf, W.unescape = bf, W.uniqueId = np, W.upperCase = xf, W.upperFirst = Sf, W.each = pl, W.eachRight = ml, W.first = rc, Rf(W, function() {
				var e = {};
				return Bi(W, function(t, n) {
					B.call(W.prototype, n) || (e[n] = t);
				}), e;
			}(), { chain: !1 }), W.VERSION = r, kn([
				"bind",
				"bindKey",
				"curry",
				"curryRight",
				"partial",
				"partialRight"
			], function(e) {
				W[e].placeholder = W;
			}), kn(["drop", "take"], function(e, t) {
				G.prototype[e] = function(r) {
					r = r === n ? 1 : tn($(r), 0);
					var i = this.__filtered__ && !t ? new G(this) : this.clone();
					return i.__filtered__ ? i.__takeCount__ = sn(r, i.__takeCount__) : i.__views__.push({
						size: sn(r, se),
						type: e + (i.__dir__ < 0 ? "Right" : "")
					}), i;
				}, G.prototype[e + "Right"] = function(t) {
					return this.reverse()[e](t).reverse();
				};
			}), kn([
				"filter",
				"map",
				"takeWhile"
			], function(e, t) {
				var n = t + 1, r = n == re || n == ie;
				G.prototype[e] = function(e) {
					var t = this.clone();
					return t.__iteratees__.push({
						iteratee: J(e, 3),
						type: n
					}), t.__filtered__ = t.__filtered__ || r, t;
				};
			}), kn(["head", "last"], function(e, t) {
				var n = "take" + (t ? "Right" : "");
				G.prototype[e] = function() {
					return this[n](1).value()[0];
				};
			}), kn(["initial", "tail"], function(e, t) {
				var n = "drop" + (t ? "" : "Right");
				G.prototype[e] = function() {
					return this.__filtered__ ? new G(this) : this[n](1);
				};
			}), G.prototype.compact = function() {
				return this.filter(Mf);
			}, G.prototype.find = function(e) {
				return this.filter(e).head();
			}, G.prototype.findLast = function(e) {
				return this.reverse().find(e);
			}, G.prototype.invokeMap = q(function(e, t) {
				return typeof e == "function" ? new G(this) : this.map(function(n) {
					return Zi(n, e, t);
				});
			}), G.prototype.reject = function(e) {
				return this.filter(Wl(J(e)));
			}, G.prototype.slice = function(e, t) {
				e = $(e);
				var r = this;
				return r.__filtered__ && (e > 0 || t < 0) ? new G(r) : (e < 0 ? r = r.takeRight(-e) : e && (r = r.drop(e)), t !== n && (t = $(t), r = t < 0 ? r.dropRight(-t) : r.take(t - e)), r);
			}, G.prototype.takeRightWhile = function(e) {
				return this.reverse().takeWhile(e).reverse();
			}, G.prototype.toArray = function() {
				return this.take(se);
			}, Bi(G.prototype, function(e, t) {
				var r = /^(?:filter|find|map|reject)|While$/.test(t), i = /^(?:head|last)$/.test(t), a = W[i ? "take" + (t == "last" ? "Right" : "") : t], o = i || /^find/.test(t);
				a && (W.prototype[t] = function() {
					var t = this.__wrapped__, s = i ? [1] : arguments, c = t instanceof G, l = s[0], u = c || Q(t), d = function(e) {
						var t = a.apply(W, In([e], s));
						return i && f ? t[0] : t;
					};
					u && r && typeof l == "function" && l.length != 1 && (c = u = !1);
					var f = this.__chain__, p = !!this.__actions__.length, m = o && !f, h = c && !p;
					if (!o && u) {
						t = h ? t : new G(this);
						var g = e.apply(t, s);
						return g.__actions__.push({
							func: Xc,
							args: [d],
							thisArg: n
						}), new Ir(g, f);
					}
					return m && h ? e.apply(this, s) : (g = this.thru(d), m ? i ? g.value()[0] : g.value() : g);
				});
			}), kn([
				"pop",
				"push",
				"shift",
				"sort",
				"splice",
				"unshift"
			], function(e) {
				var t = xt[e], n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(e);
				W.prototype[e] = function() {
					var e = arguments;
					if (r && !this.__chain__) {
						var i = this.value();
						return t.apply(Q(i) ? i : [], e);
					}
					return this[n](function(n) {
						return t.apply(Q(n) ? n : [], e);
					});
				};
			}), Bi(G.prototype, function(e, t) {
				var n = W[t];
				if (n) {
					var r = n.name + "";
					B.call(Jn, r) || (Jn[r] = []), Jn[r].push({
						name: t,
						func: n
					});
				}
			}), Jn[Eo(n, v).name] = [{
				name: "wrapper",
				func: n
			}], G.prototype.clone = Lr, G.prototype.reverse = Rr, G.prototype.value = zr, W.prototype.at = Zc, W.prototype.chain = Qc, W.prototype.commit = $c, W.prototype.next = el, W.prototype.plant = nl, W.prototype.reverse = rl, W.prototype.toJSON = W.prototype.valueOf = W.prototype.value = il, W.prototype.first = W.prototype.head, V && (W.prototype[V] = tl), W;
		})();
		typeof define == "function" && typeof define.amd == "object" && define.amd ? (hn._ = Or, define(function() {
			return Or;
		})) : _n ? ((_n.exports = Or)._ = Or, gn._ = Or) : hn._ = Or;
	}).call(e);
})))(), Se = () => {
	let e = (0, M.trim)(window.location.hash, "#/ ");
	return (0, M.isEmpty)(location) ? [] : e.split("/");
}, Ce = () => {
	let e = Se(), t = window.initialState.definitions, n = {};
	if ((0, M.isEmpty)(e)) return n;
	{
		!(0, M.isNil)((0, M.last)(e)) && (0, M.last)(e).match(/^\d/) && e.pop();
		let r = (0, M.first)(e);
		t.simulation_round.map((e) => e.specifier).includes(r) && (n.simulation_round = r);
		let i = e.slice(1);
		return t.sector.some((e) => i.includes(e.specifier)) && (n.sectors = i), n;
	}
}, we = (e) => {
	let t = Se(), n = window.location.pathname;
	(0, M.isEmpty)(t) ? n += N(e) : (0, M.last)(t).match(/^\d/) ? n += N(e) + "/" + (0, M.last)(t) : n += N(e), n != window.location.pathname && history.pushState(null, null, n);
}, Te = () => {
	let e = Se();
	return (0, M.isEmpty)(e) ? null : (0, M.last)(e).match(/^\d/) ? document.getElementById((0, M.last)(e)) : null;
}, Ee = (e) => {
	let t = Se(), n = window.location.pathname;
	(0, M.isEmpty)(t) ? n += "#/" + e : (0, M.last)(t).match(/^\d/) ? n += "#/" + t.slice(0, -1).join("/") + "/" + e : n += "#/" + t.join("/") + "/" + e, n != window.location.pathname && history.pushState(null, null, n);
}, N = (e) => {
	let t = "#";
	return e.simulation_round && (t += "/" + e.simulation_round), e.sectors.forEach((e) => {
		t += "/" + e;
	}), t;
}, De = /* @__PURE__ */ s(((e, t) => {
	var n = {};
	function r(e) {
		return e in n ? n[e] : null;
	}
	function i(e, t) {
		return n[e] = t, !0;
	}
	function a(e) {
		return e in n ? delete n[e] : !1;
	}
	function o() {
		return n = {}, !0;
	}
	t.exports = {
		getItem: r,
		setItem: i,
		removeItem: a,
		clear: o
	};
})), Oe = /* @__PURE__ */ s(((e, t) => {
	function n(e) {
		let t = r(e);
		return t === void 0 ? null : t;
	}
	function r(e) {
		try {
			return JSON.parse(e);
		} catch {
			return e;
		}
	}
	t.exports = n;
})), ke = /* @__PURE__ */ s(((e, t) => {
	var n = Oe(), r = {}, i = !1;
	function a() {
		globalThis.addEventListener ? globalThis.addEventListener("storage", o, !1) : globalThis.attachEvent ? globalThis.attachEvent("onstorage", o) : globalThis.onstorage = o;
	}
	function o(e) {
		e ||= globalThis.event;
		var t = r[e.key];
		t && t.forEach(i);
		function i(t) {
			t(n(e.newValue), n(e.oldValue), e.url || e.uri);
		}
	}
	function s(e, t) {
		r[e] ? r[e].push(t) : r[e] = [t], i === !1 && a();
	}
	function c(e, t) {
		var n = r[e];
		n.length > 1 ? n.splice(n.indexOf(t), 1) : r[e] = [];
	}
	t.exports = {
		on: s,
		off: c
	};
})), Ae = /* @__PURE__ */ u((/* @__PURE__ */ s(((e, t) => {
	var n = De(), r = Oe(), i = ke(), a = "localStorage" in globalThis && globalThis.localStorage ? globalThis.localStorage : n;
	function o(e, t) {
		return arguments.length === 1 ? s(e) : c(e, t);
	}
	function s(e) {
		return r(a.getItem(e));
	}
	function c(e, t) {
		try {
			return a.setItem(e, JSON.stringify(t)), !0;
		} catch {
			return !1;
		}
	}
	function l(e) {
		return a.removeItem(e);
	}
	function u() {
		return a.clear();
	}
	function d(e) {
		return e && (a = e), a;
	}
	o.set = c, o.get = s, o.remove = l, o.clear = u, o.backend = d, o.on = i.on, o.off = i.off, t.exports = o;
})))(), 1), je = () => {
	let e = {}, t = window.initialState.definitions, n = Ae.default.get("simulation_round");
	t.simulation_round.map((e) => e.specifier).includes(n) && (e.simulation_round = n);
	let r = Ae.default.get("sectors") ? JSON.parse(Ae.default.get("sectors")) : [];
	t.sector.some((e) => r.includes(e.specifier)) && (e.sectors = r);
	let i = Ae.default.get("experiments") ? JSON.parse(Ae.default.get("experiments")) : [];
	t.experiments.some((e) => i.includes(e.specifier)) && (e.experiments = i);
	let a = Ae.default.get("groups") ? JSON.parse(Ae.default.get("groups")) : [];
	return t.group.some((e) => a.includes(e.specifier)) && (e.groups = a), e.group3 = Ae.default.get("group3") ? JSON.parse(Ae.default.get("group3")) : !1, e;
}, Me = (e) => {
	Ae.default.set("simulation_round", e.simulation_round), Ae.default.set("sectors", JSON.stringify(e.sectors)), Ae.default.set("experiments", JSON.stringify(e.experiments)), Ae.default.set("groups", JSON.stringify(e.groups)), Ae.default.set("group3", JSON.stringify(e.group3));
}, Ne = /* @__PURE__ */ s(((e) => {
	var t = p(), n = Symbol.for("react.element"), r = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};
	function s(e, t, r) {
		var s, c = {}, l = null, u = null;
		for (s in r !== void 0 && (l = "" + r), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (u = t.ref), t) i.call(t, s) && !o.hasOwnProperty(s) && (c[s] = t[s]);
		if (e && e.defaultProps) for (s in t = e.defaultProps, t) c[s] === void 0 && (c[s] = t[s]);
		return {
			$$typeof: n,
			type: e,
			key: l,
			ref: u,
			props: c,
			_owner: a.current
		};
	}
	e.Fragment = r, e.jsx = s, e.jsxs = s;
})), P = (/* @__PURE__ */ s(((e, t) => {
	t.exports = Ne();
})))(), Pe = () => {
	let e = ue(), t = pe((e) => e.config), n = pe((e) => e.definitions), r = "Ready for Group III.", i = "Some data are still under construction (see Table 3.1), but models not needing those data may already start Group III simulations.", a = "Since most of the data are still under construction, the sector is not ready for Group III simulations.", o = /* @__PURE__ */ (0, P.jsxs)("span", {
		className: "badge-split",
		title: r,
		children: [/* @__PURE__ */ (0, P.jsx)("span", {
			className: "badge badge-info badge-left",
			children: /* @__PURE__ */ (0, P.jsx)("span", { className: "circle circle-green" })
		}), /* @__PURE__ */ (0, P.jsx)("span", {
			className: "badge badge-info badge-right",
			children: "III"
		})]
	}), s = /* @__PURE__ */ (0, P.jsxs)("span", {
		className: "badge-split",
		title: i,
		children: [/* @__PURE__ */ (0, P.jsxs)("span", {
			className: "badge badge-info badge-left",
			children: [/* @__PURE__ */ (0, P.jsx)("span", { className: "circle-left circle-green" }), /* @__PURE__ */ (0, P.jsx)("span", { className: "circle-right circle-yellow" })]
		}), /* @__PURE__ */ (0, P.jsx)("span", {
			className: "badge badge-info badge-right",
			children: "III"
		})]
	}), c = /* @__PURE__ */ (0, P.jsxs)("span", {
		className: "badge-split",
		title: a,
		children: [/* @__PURE__ */ (0, P.jsx)("span", {
			className: "badge badge-info badge-left",
			children: /* @__PURE__ */ (0, P.jsx)("span", { className: "circle circle-yellow" })
		}), /* @__PURE__ */ (0, P.jsx)("span", {
			className: "badge badge-info badge-right",
			children: "III"
		})]
	}), l = (e) => {
		switch (e.group3) {
			case !0: return o;
			case "dev": return s;
			case !1: return c;
		}
	};
	return /* @__PURE__ */ (0, P.jsxs)("div", {
		className: "config",
		children: [
			/* @__PURE__ */ (0, P.jsxs)("div", {
				className: "mb-3",
				children: [/* @__PURE__ */ (0, P.jsx)("div", { children: /* @__PURE__ */ (0, P.jsx)("strong", { children: "Show protocol for:" }) }), /* @__PURE__ */ (0, P.jsx)("div", { children: n.simulation_round.map((n, r) => {
					let i = "control-simulation-round-" + n.specifier;
					return /* @__PURE__ */ (0, P.jsx)(S.Fragment, { children: /* @__PURE__ */ (0, P.jsxs)("div", {
						className: "form-check",
						children: [
							n.specifier.endsWith("b") && /* @__PURE__ */ (0, P.jsxs)("div", {
								className: "float-right",
								children: [/* @__PURE__ */ (0, P.jsx)("input", {
									className: "form-check-input",
									type: "checkbox",
									id: "control-group3",
									checked: t.group3,
									onChange: () => e(be.toggleGroup3())
								}), /* @__PURE__ */ (0, P.jsx)("label", {
									className: "form-check-label",
									htmlFor: "control-group3",
									children: /* @__PURE__ */ (0, P.jsx)("span", {
										className: "badge badge-info",
										children: "only Group III"
									})
								})]
							}),
							/* @__PURE__ */ (0, P.jsx)("input", {
								className: "form-check-input",
								type: "radio",
								id: i,
								value: n.specifier,
								checked: n.specifier == t.simulation_round,
								onChange: (t) => e(be.changeSimulationRound(t.target.value))
							}),
							/* @__PURE__ */ (0, P.jsx)("label", {
								className: "form-check-label",
								htmlFor: i,
								children: n.title
							})
						]
					}) }, r);
				}) })]
			}),
			/* @__PURE__ */ (0, P.jsxs)("div", {
				className: "mb-3",
				children: [
					/* @__PURE__ */ (0, P.jsx)("div", { children: /* @__PURE__ */ (0, P.jsx)("strong", { children: "Filter for sectors:" }) }),
					/* @__PURE__ */ (0, P.jsx)("div", {
						className: "mb-2",
						children: n.sector.filter((e) => !e.dev).map((n, r) => {
							let i = "control-sector-" + n.specifier;
							return /* @__PURE__ */ (0, P.jsxs)("div", {
								className: "form-check",
								children: [/* @__PURE__ */ (0, P.jsx)("input", {
									className: "form-check-input",
									type: "checkbox",
									id: i,
									value: n.specifier,
									checked: t.sectors.includes(n.specifier),
									onChange: (t) => e(be.changeSector(t.target.value))
								}), /* @__PURE__ */ (0, P.jsxs)("label", {
									className: "form-check-label d-flex",
									htmlFor: i,
									children: [/* @__PURE__ */ (0, P.jsx)("div", { children: n.title }), /* @__PURE__ */ (0, P.jsxs)("div", {
										className: "ml-auto text-nowrap",
										children: ["\xA0", l(n)]
									})]
								})]
							}, r);
						})
					}),
					/* @__PURE__ */ (0, P.jsx)("div", { children: /* @__PURE__ */ (0, P.jsx)("strong", { children: "Still under development 🚧:" }) }),
					/* @__PURE__ */ (0, P.jsx)("div", { children: n.sector.filter((e) => e.dev).map((n, r) => {
						let i = "control-sector-" + n.specifier;
						return /* @__PURE__ */ (0, P.jsxs)("div", {
							className: "form-check",
							children: [/* @__PURE__ */ (0, P.jsx)("input", {
								className: "form-check-input",
								type: "checkbox",
								id: i,
								value: n.specifier,
								checked: t.sectors.includes(n.specifier),
								onChange: (t) => e(be.changeSector(t.target.value))
							}), /* @__PURE__ */ (0, P.jsx)("label", {
								className: "form-check-label d-flex",
								htmlFor: i,
								children: /* @__PURE__ */ (0, P.jsx)("div", { children: n.title })
							})]
						}, r);
					}) })
				]
			}),
			/* @__PURE__ */ (0, P.jsxs)("p", {
				className: "text-muted mb-1",
				children: [
					o,
					" ",
					r
				]
			}),
			/* @__PURE__ */ (0, P.jsxs)("p", {
				className: "text-muted mb-1",
				children: [
					s,
					" ",
					i
				]
			}),
			/* @__PURE__ */ (0, P.jsxs)("p", {
				className: "text-muted mb-1",
				children: [
					c,
					" ",
					a
				]
			})
		]
	});
}, Fe = /* @__PURE__ */ s(((e, t) => {
	t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
})), Ie = /* @__PURE__ */ s(((e, t) => {
	var n = Fe();
	function r() {}
	function i() {}
	i.resetWarningCache = r, t.exports = function() {
		function e(e, t, r, i, a, o) {
			if (o !== n) {
				var s = /* @__PURE__ */ Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
				throw s.name = "Invariant Violation", s;
			}
		}
		e.isRequired = e;
		function t() {
			return e;
		}
		var a = {
			array: e,
			bigint: e,
			bool: e,
			func: e,
			number: e,
			object: e,
			string: e,
			symbol: e,
			any: e,
			arrayOf: t,
			element: e,
			elementType: e,
			instanceOf: t,
			node: e,
			objectOf: t,
			oneOf: t,
			oneOfType: t,
			shape: t,
			exact: t,
			checkPropTypes: i,
			resetWarningCache: r
		};
		return a.PropTypes = a, a;
	};
})), F = /* @__PURE__ */ u((/* @__PURE__ */ s(((e, t) => {
	t.exports = Ie()();
})))(), 1), Le = ({ simulationRound: e, sector: t, html: n }) => {
	let r = pe((e) => e.config), i = t === void 0 ? [] : t.split(","), a = "";
	return (e === void 0 || r.simulation_round == e) && (t === void 0 || r.sectors.length == 0 || i.filter((e) => r.sectors.includes(e)).length) && (a = "hidden"), /* @__PURE__ */ (0, P.jsx)("div", {
		className: a,
		dangerouslySetInnerHTML: { __html: n }
	});
};
Le.propTypes = {
	simulationRound: F.default.string,
	sector: F.default.string,
	html: F.default.string.isRequired
};
//#endregion
//#region app/js/components/Link.jsx
var Re = () => {
	let e = pe((e) => e.config), t = e.baseurl + N(e);
	return /* @__PURE__ */ (0, P.jsx)("span", {
		className: "title",
		children: /* @__PURE__ */ (0, P.jsx)("a", {
			href: t,
			children: t
		})
	});
}, ze = ({ config: e, sectors: t }) => t === void 0 ? /* @__PURE__ */ (0, P.jsx)("span", {
	className: "badge badge-success badge-sector",
	children: "all sectors"
}) : (0, M.isEmpty)(t) && !(0, M.isNil)(t) ? null : (0, M.isNil)(t) ? e.sectors !== void 0 && e.sectors.length > 0 ? e.sectors.map((e, t) => /* @__PURE__ */ (0, P.jsx)("span", {
	className: "badge badge-success badge-sector",
	children: e
}, t)) : /* @__PURE__ */ (0, P.jsx)("span", {
	className: "badge badge-success badge-sector",
	children: "all sectors"
}) : e.sectors !== void 0 && e.sectors.length > 0 ? t.map((t, n) => e.sectors.includes(t) ? /* @__PURE__ */ (0, P.jsx)("span", {
	className: "badge badge-success badge-sector",
	children: t
}, n) : /* @__PURE__ */ (0, P.jsx)("span", {
	className: "badge badge-light badge-sector",
	children: t
}, n)) : t.map((e, t) => /* @__PURE__ */ (0, P.jsx)("span", {
	className: "badge badge-success badge-sector",
	children: e
}, t));
ze.propTypes = {
	config: F.default.object.isRequired,
	sectors: F.default.array
};
//#endregion
//#region app/js/components/Pattern.jsx
var Be = () => {
	let e = pe((e) => e.config), t = pe((e) => e.patterns), n = Object.keys(t[e.simulation_round]), r = (e) => e.replaceAll(/\[.*?\]\+/g, "").replaceAll(/\([a-z|]*?\)/g, "").replaceAll("\\d{4}", "").replaceAll("?P", "").replaceAll("?", "").replaceAll("(<", "<").replaceAll(">)", ">").replaceAll(/>_/g, ">@").replaceAll(/_</g, "@<").replaceAll("_", "-").replaceAll("@", "_");
	return /* @__PURE__ */ (0, P.jsx)("div", { children: n.map((n, i) => {
		if (e.sectors.length == 0 || e.sectors.includes(n)) return /* @__PURE__ */ (0, P.jsxs)("div", {
			className: "pattern-component sectors clearfix",
			children: [/* @__PURE__ */ (0, P.jsx)("div", {
				className: "mb-1",
				children: /* @__PURE__ */ (0, P.jsx)(ze, {
					config: e,
					sectors: [n]
				})
			}), /* @__PURE__ */ (0, P.jsx)("pre", {
				className: "",
				children: /* @__PURE__ */ (0, P.jsxs)("code", { children: [r(t[e.simulation_round][n]), "\n"] })
			})]
		}, i);
	}) });
}, Ve = ({ config: e, simulationRounds: t }) => t === void 0 ? /* @__PURE__ */ (0, P.jsx)("span", {
	className: "badge badge-warning badge-simulation-round",
	children: e.simulation_round
}) : t.map((e) => /* @__PURE__ */ (0, P.jsx)("span", {
	className: "badge badge-warning badge-simulation-round",
	children: e
}, e));
Ve.propTypes = {
	config: F.default.object.isRequired,
	simulationRounds: F.default.array
};
//#endregion
//#region app/js/components/Show.jsx
var He = ({ simulationRound: e, sector: t, html: n }) => {
	let r = pe((e) => e.config), i = "show-component", a = "", o = e === void 0 ? [] : e.split(","), s = t === void 0 ? [] : t.split(",");
	o.length > 0 && (i += " simulation_round", o.includes(r.simulation_round) || (i += " hidden", a = "hidden")), s.length > 0 && (i += " sectors", r.sectors.length == 0 || s.filter((e) => r.sectors.includes(e)).length || (i += " hidden", a = "hidden"));
	let c = n.matchAll("<h3 id=\"(.*?)\"");
	for (let e of c) {
		let t = e[1], n = document.querySelectorAll(`a[href="#${t}"]`);
		for (let e of n) e.className = a;
	}
	return /* @__PURE__ */ (0, P.jsxs)("div", {
		className: i,
		children: [/* @__PURE__ */ (0, P.jsxs)("div", {
			className: "float-right",
			children: [o.length > 0 && /* @__PURE__ */ (0, P.jsx)(Ve, {
				config: r,
				simulationRounds: o
			}), s.length > 0 && /* @__PURE__ */ (0, P.jsx)(ze, {
				config: r,
				sectors: s
			})]
		}), /* @__PURE__ */ (0, P.jsx)("div", { dangerouslySetInnerHTML: { __html: n } })]
	});
};
He.propTypes = {
	simulationRound: F.default.string,
	sector: F.default.string,
	html: F.default.string.isRequired
};
//#endregion
//#region node_modules/comma-separated-tokens/index.js
function Ue(e, t) {
	let n = t || {};
	return (e[e.length - 1] === "" ? [...e, ""] : e).join((n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")).trim();
}
//#endregion
//#region node_modules/estree-util-is-identifier-name/lib/index.js
var We = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Ge = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Ke = {};
function qe(e, t) {
	return ((t || Ke).jsx ? Ge : We).test(e);
}
//#endregion
//#region node_modules/hast-util-whitespace/lib/index.js
var Je = /[ \t\n\f\r]/g;
function Ye(e) {
	return typeof e == "object" ? e.type === "text" ? Xe(e.value) : !1 : Xe(e);
}
function Xe(e) {
	return e.replace(Je, "") === "";
}
//#endregion
//#region node_modules/property-information/lib/util/schema.js
var Ze = class {
	constructor(e, t, n) {
		this.normal = t, this.property = e, n && (this.space = n);
	}
};
Ze.prototype.normal = {}, Ze.prototype.property = {}, Ze.prototype.space = void 0;
//#endregion
//#region node_modules/property-information/lib/util/merge.js
function Qe(e, t) {
	let n = {}, r = {};
	for (let t of e) Object.assign(n, t.property), Object.assign(r, t.normal);
	return new Ze(n, r, t);
}
//#endregion
//#region node_modules/property-information/lib/normalize.js
function $e(e) {
	return e.toLowerCase();
}
//#endregion
//#region node_modules/property-information/lib/util/info.js
var et = class {
	constructor(e, t) {
		this.attribute = t, this.property = e;
	}
};
et.prototype.attribute = "", et.prototype.booleanish = !1, et.prototype.boolean = !1, et.prototype.commaOrSpaceSeparated = !1, et.prototype.commaSeparated = !1, et.prototype.defined = !1, et.prototype.mustUseProperty = !1, et.prototype.number = !1, et.prototype.overloadedBoolean = !1, et.prototype.property = "", et.prototype.spaceSeparated = !1, et.prototype.space = void 0;
//#endregion
//#region node_modules/property-information/lib/util/types.js
var tt = /* @__PURE__ */ c({
	boolean: () => I,
	booleanish: () => rt,
	commaOrSpaceSeparated: () => st,
	commaSeparated: () => ot,
	number: () => L,
	overloadedBoolean: () => it,
	spaceSeparated: () => at
}), nt = 0, I = ct(), rt = ct(), it = ct(), L = ct(), at = ct(), ot = ct(), st = ct();
function ct() {
	return 2 ** ++nt;
}
//#endregion
//#region node_modules/property-information/lib/util/defined-info.js
var lt = Object.keys(tt), ut = class extends et {
	constructor(e, t, n, r) {
		let i = -1;
		if (super(e, t), dt(this, "space", r), typeof n == "number") for (; ++i < lt.length;) {
			let e = lt[i];
			dt(this, lt[i], (n & tt[e]) === tt[e]);
		}
	}
};
ut.prototype.defined = !0;
function dt(e, t, n) {
	n && (e[t] = n);
}
//#endregion
//#region node_modules/property-information/lib/util/create.js
function ft(e) {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e.properties)) {
		let a = new ut(r, e.transform(e.attributes || {}, r), i, e.space);
		e.mustUseProperty && e.mustUseProperty.includes(r) && (a.mustUseProperty = !0), t[r] = a, n[$e(r)] = r, n[$e(a.attribute)] = r;
	}
	return new Ze(t, n, e.space);
}
//#endregion
//#region node_modules/property-information/lib/aria.js
var pt = ft({
	properties: {
		ariaActiveDescendant: null,
		ariaAtomic: rt,
		ariaAutoComplete: null,
		ariaBusy: rt,
		ariaChecked: rt,
		ariaColCount: L,
		ariaColIndex: L,
		ariaColSpan: L,
		ariaControls: at,
		ariaCurrent: null,
		ariaDescribedBy: at,
		ariaDetails: null,
		ariaDisabled: rt,
		ariaDropEffect: at,
		ariaErrorMessage: null,
		ariaExpanded: rt,
		ariaFlowTo: at,
		ariaGrabbed: rt,
		ariaHasPopup: null,
		ariaHidden: rt,
		ariaInvalid: null,
		ariaKeyShortcuts: null,
		ariaLabel: null,
		ariaLabelledBy: at,
		ariaLevel: L,
		ariaLive: null,
		ariaModal: rt,
		ariaMultiLine: rt,
		ariaMultiSelectable: rt,
		ariaOrientation: null,
		ariaOwns: at,
		ariaPlaceholder: null,
		ariaPosInSet: L,
		ariaPressed: rt,
		ariaReadOnly: rt,
		ariaRelevant: null,
		ariaRequired: rt,
		ariaRoleDescription: at,
		ariaRowCount: L,
		ariaRowIndex: L,
		ariaRowSpan: L,
		ariaSelected: rt,
		ariaSetSize: L,
		ariaSort: null,
		ariaValueMax: L,
		ariaValueMin: L,
		ariaValueNow: L,
		ariaValueText: null,
		role: null
	},
	transform(e, t) {
		return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
	}
});
//#endregion
//#region node_modules/property-information/lib/util/case-sensitive-transform.js
function mt(e, t) {
	return t in e ? e[t] : t;
}
//#endregion
//#region node_modules/property-information/lib/util/case-insensitive-transform.js
function ht(e, t) {
	return mt(e, t.toLowerCase());
}
//#endregion
//#region node_modules/property-information/lib/html.js
var gt = ft({
	attributes: {
		acceptcharset: "accept-charset",
		classname: "class",
		htmlfor: "for",
		httpequiv: "http-equiv"
	},
	mustUseProperty: [
		"checked",
		"multiple",
		"muted",
		"selected"
	],
	properties: {
		abbr: null,
		accept: ot,
		acceptCharset: at,
		accessKey: at,
		action: null,
		allow: null,
		allowFullScreen: I,
		allowPaymentRequest: I,
		allowUserMedia: I,
		alt: null,
		as: null,
		async: I,
		autoCapitalize: null,
		autoComplete: at,
		autoFocus: I,
		autoPlay: I,
		blocking: at,
		capture: null,
		charSet: null,
		checked: I,
		cite: null,
		className: at,
		cols: L,
		colSpan: null,
		content: null,
		contentEditable: rt,
		controls: I,
		controlsList: at,
		coords: L | ot,
		crossOrigin: null,
		data: null,
		dateTime: null,
		decoding: null,
		default: I,
		defer: I,
		dir: null,
		dirName: null,
		disabled: I,
		download: it,
		draggable: rt,
		encType: null,
		enterKeyHint: null,
		fetchPriority: null,
		form: null,
		formAction: null,
		formEncType: null,
		formMethod: null,
		formNoValidate: I,
		formTarget: null,
		headers: at,
		height: L,
		hidden: it,
		high: L,
		href: null,
		hrefLang: null,
		htmlFor: at,
		httpEquiv: at,
		id: null,
		imageSizes: null,
		imageSrcSet: null,
		inert: I,
		inputMode: null,
		integrity: null,
		is: null,
		isMap: I,
		itemId: null,
		itemProp: at,
		itemRef: at,
		itemScope: I,
		itemType: at,
		kind: null,
		label: null,
		lang: null,
		language: null,
		list: null,
		loading: null,
		loop: I,
		low: L,
		manifest: null,
		max: null,
		maxLength: L,
		media: null,
		method: null,
		min: null,
		minLength: L,
		multiple: I,
		muted: I,
		name: null,
		nonce: null,
		noModule: I,
		noValidate: I,
		onAbort: null,
		onAfterPrint: null,
		onAuxClick: null,
		onBeforeMatch: null,
		onBeforePrint: null,
		onBeforeToggle: null,
		onBeforeUnload: null,
		onBlur: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onContextLost: null,
		onContextMenu: null,
		onContextRestored: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFormData: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLanguageChange: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadEnd: null,
		onLoadStart: null,
		onMessage: null,
		onMessageError: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRejectionHandled: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onScrollEnd: null,
		onSecurityPolicyViolation: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onSlotChange: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnhandledRejection: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onWheel: null,
		open: I,
		optimum: L,
		pattern: null,
		ping: at,
		placeholder: null,
		playsInline: I,
		popover: null,
		popoverTarget: null,
		popoverTargetAction: null,
		poster: null,
		preload: null,
		readOnly: I,
		referrerPolicy: null,
		rel: at,
		required: I,
		reversed: I,
		rows: L,
		rowSpan: L,
		sandbox: at,
		scope: null,
		scoped: I,
		seamless: I,
		selected: I,
		shadowRootClonable: I,
		shadowRootDelegatesFocus: I,
		shadowRootMode: null,
		shape: null,
		size: L,
		sizes: null,
		slot: null,
		span: L,
		spellCheck: rt,
		src: null,
		srcDoc: null,
		srcLang: null,
		srcSet: null,
		start: L,
		step: null,
		style: null,
		tabIndex: L,
		target: null,
		title: null,
		translate: null,
		type: null,
		typeMustMatch: I,
		useMap: null,
		value: rt,
		width: L,
		wrap: null,
		writingSuggestions: null,
		align: null,
		aLink: null,
		archive: at,
		axis: null,
		background: null,
		bgColor: null,
		border: L,
		borderColor: null,
		bottomMargin: L,
		cellPadding: null,
		cellSpacing: null,
		char: null,
		charOff: null,
		classId: null,
		clear: null,
		code: null,
		codeBase: null,
		codeType: null,
		color: null,
		compact: I,
		declare: I,
		event: null,
		face: null,
		frame: null,
		frameBorder: null,
		hSpace: L,
		leftMargin: L,
		link: null,
		longDesc: null,
		lowSrc: null,
		marginHeight: L,
		marginWidth: L,
		noResize: I,
		noHref: I,
		noShade: I,
		noWrap: I,
		object: null,
		profile: null,
		prompt: null,
		rev: null,
		rightMargin: L,
		rules: null,
		scheme: null,
		scrolling: rt,
		standby: null,
		summary: null,
		text: null,
		topMargin: L,
		valueType: null,
		version: null,
		vAlign: null,
		vLink: null,
		vSpace: L,
		allowTransparency: null,
		autoCorrect: null,
		autoSave: null,
		disablePictureInPicture: I,
		disableRemotePlayback: I,
		prefix: null,
		property: null,
		results: L,
		security: null,
		unselectable: null
	},
	space: "html",
	transform: ht
}), _t = ft({
	attributes: {
		accentHeight: "accent-height",
		alignmentBaseline: "alignment-baseline",
		arabicForm: "arabic-form",
		baselineShift: "baseline-shift",
		capHeight: "cap-height",
		className: "class",
		clipPath: "clip-path",
		clipRule: "clip-rule",
		colorInterpolation: "color-interpolation",
		colorInterpolationFilters: "color-interpolation-filters",
		colorProfile: "color-profile",
		colorRendering: "color-rendering",
		crossOrigin: "crossorigin",
		dataType: "datatype",
		dominantBaseline: "dominant-baseline",
		enableBackground: "enable-background",
		fillOpacity: "fill-opacity",
		fillRule: "fill-rule",
		floodColor: "flood-color",
		floodOpacity: "flood-opacity",
		fontFamily: "font-family",
		fontSize: "font-size",
		fontSizeAdjust: "font-size-adjust",
		fontStretch: "font-stretch",
		fontStyle: "font-style",
		fontVariant: "font-variant",
		fontWeight: "font-weight",
		glyphName: "glyph-name",
		glyphOrientationHorizontal: "glyph-orientation-horizontal",
		glyphOrientationVertical: "glyph-orientation-vertical",
		hrefLang: "hreflang",
		horizAdvX: "horiz-adv-x",
		horizOriginX: "horiz-origin-x",
		horizOriginY: "horiz-origin-y",
		imageRendering: "image-rendering",
		letterSpacing: "letter-spacing",
		lightingColor: "lighting-color",
		markerEnd: "marker-end",
		markerMid: "marker-mid",
		markerStart: "marker-start",
		navDown: "nav-down",
		navDownLeft: "nav-down-left",
		navDownRight: "nav-down-right",
		navLeft: "nav-left",
		navNext: "nav-next",
		navPrev: "nav-prev",
		navRight: "nav-right",
		navUp: "nav-up",
		navUpLeft: "nav-up-left",
		navUpRight: "nav-up-right",
		onAbort: "onabort",
		onActivate: "onactivate",
		onAfterPrint: "onafterprint",
		onBeforePrint: "onbeforeprint",
		onBegin: "onbegin",
		onCancel: "oncancel",
		onCanPlay: "oncanplay",
		onCanPlayThrough: "oncanplaythrough",
		onChange: "onchange",
		onClick: "onclick",
		onClose: "onclose",
		onCopy: "oncopy",
		onCueChange: "oncuechange",
		onCut: "oncut",
		onDblClick: "ondblclick",
		onDrag: "ondrag",
		onDragEnd: "ondragend",
		onDragEnter: "ondragenter",
		onDragExit: "ondragexit",
		onDragLeave: "ondragleave",
		onDragOver: "ondragover",
		onDragStart: "ondragstart",
		onDrop: "ondrop",
		onDurationChange: "ondurationchange",
		onEmptied: "onemptied",
		onEnd: "onend",
		onEnded: "onended",
		onError: "onerror",
		onFocus: "onfocus",
		onFocusIn: "onfocusin",
		onFocusOut: "onfocusout",
		onHashChange: "onhashchange",
		onInput: "oninput",
		onInvalid: "oninvalid",
		onKeyDown: "onkeydown",
		onKeyPress: "onkeypress",
		onKeyUp: "onkeyup",
		onLoad: "onload",
		onLoadedData: "onloadeddata",
		onLoadedMetadata: "onloadedmetadata",
		onLoadStart: "onloadstart",
		onMessage: "onmessage",
		onMouseDown: "onmousedown",
		onMouseEnter: "onmouseenter",
		onMouseLeave: "onmouseleave",
		onMouseMove: "onmousemove",
		onMouseOut: "onmouseout",
		onMouseOver: "onmouseover",
		onMouseUp: "onmouseup",
		onMouseWheel: "onmousewheel",
		onOffline: "onoffline",
		onOnline: "ononline",
		onPageHide: "onpagehide",
		onPageShow: "onpageshow",
		onPaste: "onpaste",
		onPause: "onpause",
		onPlay: "onplay",
		onPlaying: "onplaying",
		onPopState: "onpopstate",
		onProgress: "onprogress",
		onRateChange: "onratechange",
		onRepeat: "onrepeat",
		onReset: "onreset",
		onResize: "onresize",
		onScroll: "onscroll",
		onSeeked: "onseeked",
		onSeeking: "onseeking",
		onSelect: "onselect",
		onShow: "onshow",
		onStalled: "onstalled",
		onStorage: "onstorage",
		onSubmit: "onsubmit",
		onSuspend: "onsuspend",
		onTimeUpdate: "ontimeupdate",
		onToggle: "ontoggle",
		onUnload: "onunload",
		onVolumeChange: "onvolumechange",
		onWaiting: "onwaiting",
		onZoom: "onzoom",
		overlinePosition: "overline-position",
		overlineThickness: "overline-thickness",
		paintOrder: "paint-order",
		panose1: "panose-1",
		pointerEvents: "pointer-events",
		referrerPolicy: "referrerpolicy",
		renderingIntent: "rendering-intent",
		shapeRendering: "shape-rendering",
		stopColor: "stop-color",
		stopOpacity: "stop-opacity",
		strikethroughPosition: "strikethrough-position",
		strikethroughThickness: "strikethrough-thickness",
		strokeDashArray: "stroke-dasharray",
		strokeDashOffset: "stroke-dashoffset",
		strokeLineCap: "stroke-linecap",
		strokeLineJoin: "stroke-linejoin",
		strokeMiterLimit: "stroke-miterlimit",
		strokeOpacity: "stroke-opacity",
		strokeWidth: "stroke-width",
		tabIndex: "tabindex",
		textAnchor: "text-anchor",
		textDecoration: "text-decoration",
		textRendering: "text-rendering",
		transformOrigin: "transform-origin",
		typeOf: "typeof",
		underlinePosition: "underline-position",
		underlineThickness: "underline-thickness",
		unicodeBidi: "unicode-bidi",
		unicodeRange: "unicode-range",
		unitsPerEm: "units-per-em",
		vAlphabetic: "v-alphabetic",
		vHanging: "v-hanging",
		vIdeographic: "v-ideographic",
		vMathematical: "v-mathematical",
		vectorEffect: "vector-effect",
		vertAdvY: "vert-adv-y",
		vertOriginX: "vert-origin-x",
		vertOriginY: "vert-origin-y",
		wordSpacing: "word-spacing",
		writingMode: "writing-mode",
		xHeight: "x-height",
		playbackOrder: "playbackorder",
		timelineBegin: "timelinebegin"
	},
	properties: {
		about: st,
		accentHeight: L,
		accumulate: null,
		additive: null,
		alignmentBaseline: null,
		alphabetic: L,
		amplitude: L,
		arabicForm: null,
		ascent: L,
		attributeName: null,
		attributeType: null,
		azimuth: L,
		bandwidth: null,
		baselineShift: null,
		baseFrequency: null,
		baseProfile: null,
		bbox: null,
		begin: null,
		bias: L,
		by: null,
		calcMode: null,
		capHeight: L,
		className: at,
		clip: null,
		clipPath: null,
		clipPathUnits: null,
		clipRule: null,
		color: null,
		colorInterpolation: null,
		colorInterpolationFilters: null,
		colorProfile: null,
		colorRendering: null,
		content: null,
		contentScriptType: null,
		contentStyleType: null,
		crossOrigin: null,
		cursor: null,
		cx: null,
		cy: null,
		d: null,
		dataType: null,
		defaultAction: null,
		descent: L,
		diffuseConstant: L,
		direction: null,
		display: null,
		dur: null,
		divisor: L,
		dominantBaseline: null,
		download: I,
		dx: null,
		dy: null,
		edgeMode: null,
		editable: null,
		elevation: L,
		enableBackground: null,
		end: null,
		event: null,
		exponent: L,
		externalResourcesRequired: null,
		fill: null,
		fillOpacity: L,
		fillRule: null,
		filter: null,
		filterRes: null,
		filterUnits: null,
		floodColor: null,
		floodOpacity: null,
		focusable: null,
		focusHighlight: null,
		fontFamily: null,
		fontSize: null,
		fontSizeAdjust: null,
		fontStretch: null,
		fontStyle: null,
		fontVariant: null,
		fontWeight: null,
		format: null,
		fr: null,
		from: null,
		fx: null,
		fy: null,
		g1: ot,
		g2: ot,
		glyphName: ot,
		glyphOrientationHorizontal: null,
		glyphOrientationVertical: null,
		glyphRef: null,
		gradientTransform: null,
		gradientUnits: null,
		handler: null,
		hanging: L,
		hatchContentUnits: null,
		hatchUnits: null,
		height: null,
		href: null,
		hrefLang: null,
		horizAdvX: L,
		horizOriginX: L,
		horizOriginY: L,
		id: null,
		ideographic: L,
		imageRendering: null,
		initialVisibility: null,
		in: null,
		in2: null,
		intercept: L,
		k: L,
		k1: L,
		k2: L,
		k3: L,
		k4: L,
		kernelMatrix: st,
		kernelUnitLength: null,
		keyPoints: null,
		keySplines: null,
		keyTimes: null,
		kerning: null,
		lang: null,
		lengthAdjust: null,
		letterSpacing: null,
		lightingColor: null,
		limitingConeAngle: L,
		local: null,
		markerEnd: null,
		markerMid: null,
		markerStart: null,
		markerHeight: null,
		markerUnits: null,
		markerWidth: null,
		mask: null,
		maskContentUnits: null,
		maskUnits: null,
		mathematical: null,
		max: null,
		media: null,
		mediaCharacterEncoding: null,
		mediaContentEncodings: null,
		mediaSize: L,
		mediaTime: null,
		method: null,
		min: null,
		mode: null,
		name: null,
		navDown: null,
		navDownLeft: null,
		navDownRight: null,
		navLeft: null,
		navNext: null,
		navPrev: null,
		navRight: null,
		navUp: null,
		navUpLeft: null,
		navUpRight: null,
		numOctaves: null,
		observer: null,
		offset: null,
		onAbort: null,
		onActivate: null,
		onAfterPrint: null,
		onBeforePrint: null,
		onBegin: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnd: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFocusIn: null,
		onFocusOut: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadStart: null,
		onMessage: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onMouseWheel: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRepeat: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onShow: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onZoom: null,
		opacity: null,
		operator: null,
		order: null,
		orient: null,
		orientation: null,
		origin: null,
		overflow: null,
		overlay: null,
		overlinePosition: L,
		overlineThickness: L,
		paintOrder: null,
		panose1: null,
		path: null,
		pathLength: L,
		patternContentUnits: null,
		patternTransform: null,
		patternUnits: null,
		phase: null,
		ping: at,
		pitch: null,
		playbackOrder: null,
		pointerEvents: null,
		points: null,
		pointsAtX: L,
		pointsAtY: L,
		pointsAtZ: L,
		preserveAlpha: null,
		preserveAspectRatio: null,
		primitiveUnits: null,
		propagate: null,
		property: st,
		r: null,
		radius: null,
		referrerPolicy: null,
		refX: null,
		refY: null,
		rel: st,
		rev: st,
		renderingIntent: null,
		repeatCount: null,
		repeatDur: null,
		requiredExtensions: st,
		requiredFeatures: st,
		requiredFonts: st,
		requiredFormats: st,
		resource: null,
		restart: null,
		result: null,
		rotate: null,
		rx: null,
		ry: null,
		scale: null,
		seed: null,
		shapeRendering: null,
		side: null,
		slope: null,
		snapshotTime: null,
		specularConstant: L,
		specularExponent: L,
		spreadMethod: null,
		spacing: null,
		startOffset: null,
		stdDeviation: null,
		stemh: null,
		stemv: null,
		stitchTiles: null,
		stopColor: null,
		stopOpacity: null,
		strikethroughPosition: L,
		strikethroughThickness: L,
		string: null,
		stroke: null,
		strokeDashArray: st,
		strokeDashOffset: null,
		strokeLineCap: null,
		strokeLineJoin: null,
		strokeMiterLimit: L,
		strokeOpacity: L,
		strokeWidth: null,
		style: null,
		surfaceScale: L,
		syncBehavior: null,
		syncBehaviorDefault: null,
		syncMaster: null,
		syncTolerance: null,
		syncToleranceDefault: null,
		systemLanguage: st,
		tabIndex: L,
		tableValues: null,
		target: null,
		targetX: L,
		targetY: L,
		textAnchor: null,
		textDecoration: null,
		textRendering: null,
		textLength: null,
		timelineBegin: null,
		title: null,
		transformBehavior: null,
		type: null,
		typeOf: st,
		to: null,
		transform: null,
		transformOrigin: null,
		u1: null,
		u2: null,
		underlinePosition: L,
		underlineThickness: L,
		unicode: null,
		unicodeBidi: null,
		unicodeRange: null,
		unitsPerEm: L,
		values: null,
		vAlphabetic: L,
		vMathematical: L,
		vectorEffect: null,
		vHanging: L,
		vIdeographic: L,
		version: null,
		vertAdvY: L,
		vertOriginX: L,
		vertOriginY: L,
		viewBox: null,
		viewTarget: null,
		visibility: null,
		width: null,
		widths: null,
		wordSpacing: null,
		writingMode: null,
		x: null,
		x1: null,
		x2: null,
		xChannelSelector: null,
		xHeight: L,
		y: null,
		y1: null,
		y2: null,
		yChannelSelector: null,
		z: null,
		zoomAndPan: null
	},
	space: "svg",
	transform: mt
}), R = ft({
	properties: {
		xLinkActuate: null,
		xLinkArcRole: null,
		xLinkHref: null,
		xLinkRole: null,
		xLinkShow: null,
		xLinkTitle: null,
		xLinkType: null
	},
	space: "xlink",
	transform(e, t) {
		return "xlink:" + t.slice(5).toLowerCase();
	}
}), z = ft({
	attributes: { xmlnsxlink: "xmlns:xlink" },
	properties: {
		xmlnsXLink: null,
		xmlns: null
	},
	space: "xmlns",
	transform: ht
}), vt = ft({
	properties: {
		xmlBase: null,
		xmlLang: null,
		xmlSpace: null
	},
	space: "xml",
	transform(e, t) {
		return "xml:" + t.slice(3).toLowerCase();
	}
}), yt = {
	classId: "classID",
	dataType: "datatype",
	itemId: "itemID",
	strokeDashArray: "strokeDasharray",
	strokeDashOffset: "strokeDashoffset",
	strokeLineCap: "strokeLinecap",
	strokeLineJoin: "strokeLinejoin",
	strokeMiterLimit: "strokeMiterlimit",
	typeOf: "typeof",
	xLinkActuate: "xlinkActuate",
	xLinkArcRole: "xlinkArcrole",
	xLinkHref: "xlinkHref",
	xLinkRole: "xlinkRole",
	xLinkShow: "xlinkShow",
	xLinkTitle: "xlinkTitle",
	xLinkType: "xlinkType",
	xmlnsXLink: "xmlnsXlink"
}, bt = /[A-Z]/g, xt = /-[a-z]/g, St = /^data[-\w.:]+$/i;
function Ct(e, t) {
	let n = $e(t), r = t, i = et;
	if (n in e.normal) return e.property[e.normal[n]];
	if (n.length > 4 && n.slice(0, 4) === "data" && St.test(t)) {
		if (t.charAt(4) === "-") {
			let e = t.slice(5).replace(xt, Tt);
			r = "data" + e.charAt(0).toUpperCase() + e.slice(1);
		} else {
			let e = t.slice(4);
			if (!xt.test(e)) {
				let n = e.replace(bt, wt);
				n.charAt(0) !== "-" && (n = "-" + n), t = "data" + n;
			}
		}
		i = ut;
	}
	return new i(r, t);
}
function wt(e) {
	return "-" + e.toLowerCase();
}
function Tt(e) {
	return e.charAt(1).toUpperCase();
}
//#endregion
//#region node_modules/property-information/index.js
var B = Qe([
	pt,
	gt,
	R,
	z,
	vt
], "html"), Et = Qe([
	pt,
	_t,
	R,
	z,
	vt
], "svg");
//#endregion
//#region node_modules/space-separated-tokens/index.js
function Dt(e) {
	return e.join(" ").trim();
}
//#endregion
//#region node_modules/inline-style-parser/cjs/index.js
var Ot = /* @__PURE__ */ s(((e, t) => {
	var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, r = /\n/g, i = /^\s*/, a = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, o = /^:\s*/, s = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, c = /^[;\s]*/, l = /^\s+|\s+$/g, u = "\n", d = "/", f = "*", p = "", m = "comment", h = "declaration";
	function g(e, t) {
		if (typeof e != "string") throw TypeError("First argument must be a string");
		if (!e) return [];
		t ||= {};
		var l = 1, g = 1;
		function v(e) {
			var t = e.match(r);
			t && (l += t.length);
			var n = e.lastIndexOf(u);
			g = ~n ? e.length - n : g + e.length;
		}
		function y() {
			var e = {
				line: l,
				column: g
			};
			return function(t) {
				return t.position = new b(e), C(), t;
			};
		}
		function b(e) {
			this.start = e, this.end = {
				line: l,
				column: g
			}, this.source = t.source;
		}
		b.prototype.content = e;
		function x(n) {
			var r = /* @__PURE__ */ Error(t.source + ":" + l + ":" + g + ": " + n);
			if (r.reason = n, r.filename = t.source, r.line = l, r.column = g, r.source = e, !t.silent) throw r;
		}
		function S(t) {
			var n = t.exec(e);
			if (n) {
				var r = n[0];
				return v(r), e = e.slice(r.length), n;
			}
		}
		function C() {
			S(i);
		}
		function w(e) {
			var t;
			for (e ||= []; t = T();) t !== !1 && e.push(t);
			return e;
		}
		function T() {
			var t = y();
			if (!(d != e.charAt(0) || f != e.charAt(1))) {
				for (var n = 2; p != e.charAt(n) && (f != e.charAt(n) || d != e.charAt(n + 1));) ++n;
				if (n += 2, p === e.charAt(n - 1)) return x("End of comment missing");
				var r = e.slice(2, n - 2);
				return g += 2, v(r), e = e.slice(n), g += 2, t({
					type: m,
					comment: r
				});
			}
		}
		function E() {
			var e = y(), t = S(a);
			if (t) {
				if (T(), !S(o)) return x("property missing ':'");
				var r = S(s), i = e({
					type: h,
					property: _(t[0].replace(n, p)),
					value: r ? _(r[0].replace(n, p)) : p
				});
				return S(c), i;
			}
		}
		function ee() {
			var e = [];
			w(e);
			for (var t; t = E();) t !== !1 && (e.push(t), w(e));
			return e;
		}
		return C(), ee();
	}
	function _(e) {
		return e ? e.replace(l, p) : p;
	}
	t.exports = g;
})), kt = /* @__PURE__ */ s(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = r;
	var n = t(Ot());
	function r(e, t) {
		let r = null;
		if (!e || typeof e != "string") return r;
		let i = (0, n.default)(e), a = typeof t == "function";
		return i.forEach((e) => {
			if (e.type !== "declaration") return;
			let { property: n, value: i } = e;
			a ? t(n, i, e) : i && (r ||= {}, r[n] = i);
		}), r;
	}
})), At = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.camelCase = void 0;
	var t = /^--[a-zA-Z0-9_-]+$/, n = /-([a-z])/g, r = /^[^-]+$/, i = /^-(webkit|moz|ms|o|khtml)-/, a = /^-(ms)-/, o = function(e) {
		return !e || r.test(e) || t.test(e);
	}, s = function(e, t) {
		return t.toUpperCase();
	}, c = function(e, t) {
		return `${t}-`;
	};
	e.camelCase = function(e, t) {
		return t === void 0 && (t = {}), o(e) ? e : (e = e.toLowerCase(), e = t.reactCompat ? e.replace(a, c) : e.replace(i, c), e.replace(n, s));
	};
})), jt = /* @__PURE__ */ s(((e, t) => {
	var n = (e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	})(kt()), r = At();
	function i(e, t) {
		var i = {};
		return !e || typeof e != "string" || (0, n.default)(e, function(e, n) {
			e && n && (i[(0, r.camelCase)(e, t)] = n);
		}), i;
	}
	i.default = i, t.exports = i;
})), Mt = Pt("end"), Nt = Pt("start");
function Pt(e) {
	return t;
	function t(t) {
		let n = t && t.position && t.position[e] || {};
		if (typeof n.line == "number" && n.line > 0 && typeof n.column == "number" && n.column > 0) return {
			line: n.line,
			column: n.column,
			offset: typeof n.offset == "number" && n.offset > -1 ? n.offset : void 0
		};
	}
}
function Ft(e) {
	let t = Nt(e), n = Mt(e);
	if (t && n) return {
		start: t,
		end: n
	};
}
//#endregion
//#region node_modules/unist-util-stringify-position/lib/index.js
function It(e) {
	return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Rt(e.position) : "start" in e || "end" in e ? Rt(e) : "line" in e || "column" in e ? Lt(e) : "";
}
function Lt(e) {
	return zt(e && e.line) + ":" + zt(e && e.column);
}
function Rt(e) {
	return Lt(e && e.start) + "-" + Lt(e && e.end);
}
function zt(e) {
	return e && typeof e == "number" ? e : 1;
}
//#endregion
//#region node_modules/vfile-message/lib/index.js
var Bt = class extends Error {
	constructor(e, t, n) {
		super(), typeof t == "string" && (n = t, t = void 0);
		let r = "", i = {}, a = !1;
		if (t && (i = "line" in t && "column" in t || "start" in t && "end" in t ? { place: t } : "type" in t ? {
			ancestors: [t],
			place: t.position
		} : { ...t }), typeof e == "string" ? r = e : !i.cause && e && (a = !0, r = e.message, i.cause = e), !i.ruleId && !i.source && typeof n == "string") {
			let e = n.indexOf(":");
			e === -1 ? i.ruleId = n : (i.source = n.slice(0, e), i.ruleId = n.slice(e + 1));
		}
		if (!i.place && i.ancestors && i.ancestors) {
			let e = i.ancestors[i.ancestors.length - 1];
			e && (i.place = e.position);
		}
		let o = i.place && "start" in i.place ? i.place.start : i.place;
		this.ancestors = i.ancestors || void 0, this.cause = i.cause || void 0, this.column = o ? o.column : void 0, this.fatal = void 0, this.file = "", this.message = r, this.line = o ? o.line : void 0, this.name = It(i.place) || "1:1", this.place = i.place || void 0, this.reason = this.message, this.ruleId = i.ruleId || void 0, this.source = i.source || void 0, this.stack = a && i.cause && typeof i.cause.stack == "string" ? i.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
	}
};
Bt.prototype.file = "", Bt.prototype.name = "", Bt.prototype.reason = "", Bt.prototype.message = "", Bt.prototype.stack = "", Bt.prototype.column = void 0, Bt.prototype.line = void 0, Bt.prototype.ancestors = void 0, Bt.prototype.cause = void 0, Bt.prototype.fatal = void 0, Bt.prototype.place = void 0, Bt.prototype.ruleId = void 0, Bt.prototype.source = void 0;
//#endregion
//#region node_modules/hast-util-to-jsx-runtime/lib/index.js
var V = /* @__PURE__ */ u(jt(), 1), Vt = {}.hasOwnProperty, Ht = /* @__PURE__ */ new Map(), Ut = /[A-Z]/g, Wt = new Set([
	"table",
	"tbody",
	"thead",
	"tfoot",
	"tr"
]), Gt = new Set(["td", "th"]), Kt = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function qt(e, t) {
	if (!t || t.Fragment === void 0) throw TypeError("Expected `Fragment` in options");
	let n = t.filePath || void 0, r;
	if (t.development) {
		if (typeof t.jsxDEV != "function") throw TypeError("Expected `jsxDEV` in options when `development: true`");
		r = an(n, t.jsxDEV);
	} else {
		if (typeof t.jsx != "function") throw TypeError("Expected `jsx` in production options");
		if (typeof t.jsxs != "function") throw TypeError("Expected `jsxs` in production options");
		r = rn(n, t.jsx, t.jsxs);
	}
	let i = {
		Fragment: t.Fragment,
		ancestors: [],
		components: t.components || {},
		create: r,
		elementAttributeNameCase: t.elementAttributeNameCase || "react",
		evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
		filePath: n,
		ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
		passKeys: t.passKeys !== !1,
		passNode: t.passNode || !1,
		schema: t.space === "svg" ? Et : B,
		stylePropertyNameCase: t.stylePropertyNameCase || "dom",
		tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
	}, a = Jt(i, e, void 0);
	return a && typeof a != "string" ? a : i.create(e, i.Fragment, { children: a || void 0 }, void 0);
}
function Jt(e, t, n) {
	if (t.type === "element") return Yt(e, t, n);
	if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression") return Xt(e, t);
	if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement") return Qt(e, t, n);
	if (t.type === "mdxjsEsm") return Zt(e, t);
	if (t.type === "root") return $t(e, t, n);
	if (t.type === "text") return en(e, t);
}
function Yt(e, t, n) {
	let r = e.schema, i = r;
	t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = Et, e.schema = i), e.ancestors.push(t);
	let a = dn(e, t.tagName, !1), o = on(e, t), s = cn(e, t);
	return Wt.has(t.tagName) && (s = s.filter(function(e) {
		return typeof e == "string" ? !Ye(e) : !0;
	})), tn(e, o, a, t), nn(o, s), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function Xt(e, t) {
	if (t.data && t.data.estree && e.evaluater) {
		let n = t.data.estree.body[0];
		return n.type, e.evaluater.evaluateExpression(n.expression);
	}
	fn(e, t.position);
}
function Zt(e, t) {
	if (t.data && t.data.estree && e.evaluater) return e.evaluater.evaluateProgram(t.data.estree);
	fn(e, t.position);
}
function Qt(e, t, n) {
	let r = e.schema, i = r;
	t.name === "svg" && r.space === "html" && (i = Et, e.schema = i), e.ancestors.push(t);
	let a = t.name === null ? e.Fragment : dn(e, t.name, !0), o = sn(e, t), s = cn(e, t);
	return tn(e, o, a, t), nn(o, s), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function $t(e, t, n) {
	let r = {};
	return nn(r, cn(e, t)), e.create(t, e.Fragment, r, n);
}
function en(e, t) {
	return t.value;
}
function tn(e, t, n, r) {
	typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function nn(e, t) {
	if (t.length > 0) {
		let n = t.length > 1 ? t : t[0];
		n && (e.children = n);
	}
}
function rn(e, t, n) {
	return r;
	function r(e, r, i, a) {
		let o = Array.isArray(i.children) ? n : t;
		return a ? o(r, i, a) : o(r, i);
	}
}
function an(e, t) {
	return n;
	function n(n, r, i, a) {
		let o = Array.isArray(i.children), s = Nt(n);
		return t(r, i, a, o, {
			columnNumber: s ? s.column - 1 : void 0,
			fileName: e,
			lineNumber: s ? s.line : void 0
		}, void 0);
	}
}
function on(e, t) {
	let n = {}, r, i;
	for (i in t.properties) if (i !== "children" && Vt.call(t.properties, i)) {
		let a = ln(e, i, t.properties[i]);
		if (a) {
			let [i, o] = a;
			e.tableCellAlignToStyle && i === "align" && typeof o == "string" && Gt.has(t.tagName) ? r = o : n[i] = o;
		}
	}
	if (r) {
		let t = n.style ||= {};
		t[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
	}
	return n;
}
function sn(e, t) {
	let n = {};
	for (let r of t.attributes) if (r.type === "mdxJsxExpressionAttribute") if (r.data && r.data.estree && e.evaluater) {
		let t = r.data.estree.body[0];
		t.type;
		let i = t.expression;
		i.type;
		let a = i.properties[0];
		a.type, Object.assign(n, e.evaluater.evaluateExpression(a.argument));
	} else fn(e, t.position);
	else {
		let i = r.name, a;
		if (r.value && typeof r.value == "object") if (r.value.data && r.value.data.estree && e.evaluater) {
			let t = r.value.data.estree.body[0];
			t.type, a = e.evaluater.evaluateExpression(t.expression);
		} else fn(e, t.position);
		else a = r.value === null ? !0 : r.value;
		n[i] = a;
	}
	return n;
}
function cn(e, t) {
	let n = [], r = -1, i = e.passKeys ? /* @__PURE__ */ new Map() : Ht;
	for (; ++r < t.children.length;) {
		let a = t.children[r], o;
		if (e.passKeys) {
			let e = a.type === "element" ? a.tagName : a.type === "mdxJsxFlowElement" || a.type === "mdxJsxTextElement" ? a.name : void 0;
			if (e) {
				let t = i.get(e) || 0;
				o = e + "-" + t, i.set(e, t + 1);
			}
		}
		let s = Jt(e, a, o);
		s !== void 0 && n.push(s);
	}
	return n;
}
function ln(e, t, n) {
	let r = Ct(e.schema, t);
	if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
		if (Array.isArray(n) && (n = r.commaSeparated ? Ue(n) : Dt(n)), r.property === "style") {
			let t = typeof n == "object" ? n : un(e, String(n));
			return e.stylePropertyNameCase === "css" && (t = pn(t)), ["style", t];
		}
		return [e.elementAttributeNameCase === "react" && r.space ? yt[r.property] || r.property : r.attribute, n];
	}
}
function un(e, t) {
	try {
		return (0, V.default)(t, { reactCompat: !0 });
	} catch (t) {
		if (e.ignoreInvalidStyle) return {};
		let n = t, r = new Bt("Cannot parse `style` attribute", {
			ancestors: e.ancestors,
			cause: n,
			ruleId: "style",
			source: "hast-util-to-jsx-runtime"
		});
		throw r.file = e.filePath || void 0, r.url = Kt + "#cannot-parse-style-attribute", r;
	}
}
function dn(e, t, n) {
	let r;
	if (!n) r = {
		type: "Literal",
		value: t
	};
	else if (t.includes(".")) {
		let e = t.split("."), n = -1, i;
		for (; ++n < e.length;) {
			let t = qe(e[n]) ? {
				type: "Identifier",
				name: e[n]
			} : {
				type: "Literal",
				value: e[n]
			};
			i = i ? {
				type: "MemberExpression",
				object: i,
				property: t,
				computed: !!(n && t.type === "Literal"),
				optional: !1
			} : t;
		}
		r = i;
	} else r = qe(t) && !/^[a-z]/.test(t) ? {
		type: "Identifier",
		name: t
	} : {
		type: "Literal",
		value: t
	};
	if (r.type === "Literal") {
		let t = r.value;
		return Vt.call(e.components, t) ? e.components[t] : t;
	}
	if (e.evaluater) return e.evaluater.evaluateExpression(r);
	fn(e);
}
function fn(e, t) {
	let n = new Bt("Cannot handle MDX estrees without `createEvaluater`", {
		ancestors: e.ancestors,
		place: t,
		ruleId: "mdx-estree",
		source: "hast-util-to-jsx-runtime"
	});
	throw n.file = e.filePath || void 0, n.url = Kt + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function pn(e) {
	let t = {}, n;
	for (n in e) Vt.call(e, n) && (t[mn(n)] = e[n]);
	return t;
}
function mn(e) {
	let t = e.replace(Ut, hn);
	return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function hn(e) {
	return "-" + e.toLowerCase();
}
//#endregion
//#region node_modules/html-url-attributes/lib/index.js
var gn = {
	action: ["form"],
	cite: [
		"blockquote",
		"del",
		"ins",
		"q"
	],
	data: ["object"],
	formAction: ["button", "input"],
	href: [
		"a",
		"area",
		"base",
		"link"
	],
	icon: ["menuitem"],
	itemId: null,
	manifest: ["html"],
	ping: ["a", "area"],
	poster: ["video"],
	src: [
		"audio",
		"embed",
		"iframe",
		"img",
		"input",
		"script",
		"source",
		"track",
		"video"
	]
}, _n = {};
function vn(e, t) {
	let n = t || _n;
	return yn(e, typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, typeof n.includeHtml == "boolean" ? n.includeHtml : !0);
}
function yn(e, t, n) {
	if (xn(e)) {
		if ("value" in e) return e.type === "html" && !n ? "" : e.value;
		if (t && "alt" in e && e.alt) return e.alt;
		if ("children" in e) return bn(e.children, t, n);
	}
	return Array.isArray(e) ? bn(e, t, n) : "";
}
function bn(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) r[i] = yn(e[i], t, n);
	return r.join("");
}
function xn(e) {
	return !!(e && typeof e == "object");
}
//#endregion
//#region node_modules/decode-named-character-reference/index.dom.js
var Sn = document.createElement("i");
function Cn(e) {
	let t = "&" + e + ";";
	Sn.innerHTML = t;
	let n = Sn.textContent;
	return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
//#endregion
//#region node_modules/micromark-util-chunked/index.js
function wn(e, t, n, r) {
	let i = e.length, a = 0, o;
	if (t = t < 0 ? -t > i ? 0 : i + t : t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4) o = Array.from(r), o.unshift(t, n), e.splice(...o);
	else for (n && e.splice(t, n); a < r.length;) o = r.slice(a, a + 1e4), o.unshift(t, 0), e.splice(...o), a += 1e4, t += 1e4;
}
function Tn(e, t) {
	return e.length > 0 ? (wn(e, e.length, 0, t), e) : t;
}
//#endregion
//#region node_modules/micromark-util-combine-extensions/index.js
var En = {}.hasOwnProperty;
function Dn(e) {
	let t = {}, n = -1;
	for (; ++n < e.length;) On(t, e[n]);
	return t;
}
function On(e, t) {
	let n;
	for (n in t) {
		let r = (En.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n], a;
		if (i) for (a in i) {
			En.call(r, a) || (r[a] = []);
			let e = i[a];
			kn(r[a], Array.isArray(e) ? e : e ? [e] : []);
		}
	}
}
function kn(e, t) {
	let n = -1, r = [];
	for (; ++n < t.length;) (t[n].add === "after" ? e : r).push(t[n]);
	wn(e, 0, 0, r);
}
//#endregion
//#region node_modules/micromark-util-decode-numeric-character-reference/index.js
function An(e, t) {
	let n = Number.parseInt(e, t);
	return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) == 65535 || (n & 65535) == 65534 || n > 1114111 ? "�" : String.fromCodePoint(n);
}
//#endregion
//#region node_modules/micromark-util-normalize-identifier/index.js
function jn(e) {
	return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
//#endregion
//#region node_modules/micromark-util-character/index.js
var Mn = Hn(/[A-Za-z]/), Nn = Hn(/[\dA-Za-z]/), Pn = Hn(/[#-'*+\--9=?A-Z^-~]/);
function Fn(e) {
	return e !== null && (e < 32 || e === 127);
}
var In = Hn(/\d/), Ln = Hn(/[\dA-Fa-f]/), Rn = Hn(/[!-/:-@[-`{-~]/);
function H(e) {
	return e !== null && e < -2;
}
function zn(e) {
	return e !== null && (e < 0 || e === 32);
}
function U(e) {
	return e === -2 || e === -1 || e === 32;
}
var Bn = Hn(/\p{P}|\p{S}/u), Vn = Hn(/\s/);
function Hn(e) {
	return t;
	function t(t) {
		return t !== null && t > -1 && e.test(String.fromCharCode(t));
	}
}
//#endregion
//#region node_modules/micromark-util-sanitize-uri/index.js
function Un(e) {
	let t = [], n = -1, r = 0, i = 0;
	for (; ++n < e.length;) {
		let a = e.charCodeAt(n), o = "";
		if (a === 37 && Nn(e.charCodeAt(n + 1)) && Nn(e.charCodeAt(n + 2))) i = 2;
		else if (a < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (o = String.fromCharCode(a));
		else if (a > 55295 && a < 57344) {
			let t = e.charCodeAt(n + 1);
			a < 56320 && t > 56319 && t < 57344 ? (o = String.fromCharCode(a, t), i = 1) : o = "�";
		} else o = String.fromCharCode(a);
		o &&= (t.push(e.slice(r, n), encodeURIComponent(o)), r = n + i + 1, ""), i &&= (n += i, 0);
	}
	return t.join("") + e.slice(r);
}
//#endregion
//#region node_modules/micromark-factory-space/index.js
function Wn(e, t, n, r) {
	let i = r ? r - 1 : Infinity, a = 0;
	return o;
	function o(r) {
		return U(r) ? (e.enter(n), s(r)) : t(r);
	}
	function s(r) {
		return U(r) && a++ < i ? (e.consume(r), s) : (e.exit(n), t(r));
	}
}
//#endregion
//#region node_modules/micromark/lib/initialize/content.js
var Gn = { tokenize: Kn };
function Kn(e) {
	let t = e.attempt(this.parser.constructs.contentInitial, r, i), n;
	return t;
	function r(n) {
		if (n === null) {
			e.consume(n);
			return;
		}
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), Wn(e, t, "linePrefix");
	}
	function i(t) {
		return e.enter("paragraph"), a(t);
	}
	function a(t) {
		let r = e.enter("chunkText", {
			contentType: "text",
			previous: n
		});
		return n && (n.next = r), n = r, o(t);
	}
	function o(t) {
		if (t === null) {
			e.exit("chunkText"), e.exit("paragraph"), e.consume(t);
			return;
		}
		return H(t) ? (e.consume(t), e.exit("chunkText"), a) : (e.consume(t), o);
	}
}
//#endregion
//#region node_modules/micromark/lib/initialize/document.js
var qn = { tokenize: Yn }, Jn = { tokenize: Xn };
function Yn(e) {
	let t = this, n = [], r = 0, i, a, o;
	return s;
	function s(i) {
		if (r < n.length) {
			let a = n[r];
			return t.containerState = a[1], e.attempt(a[0].continuation, c, l)(i);
		}
		return l(i);
	}
	function c(e) {
		if (r++, t.containerState._closeFlow) {
			t.containerState._closeFlow = void 0, i && v();
			let n = t.events.length, a = n, o;
			for (; a--;) if (t.events[a][0] === "exit" && t.events[a][1].type === "chunkFlow") {
				o = t.events[a][1].end;
				break;
			}
			_(r);
			let s = n;
			for (; s < t.events.length;) t.events[s][1].end = { ...o }, s++;
			return wn(t.events, a + 1, 0, t.events.slice(n)), t.events.length = s, l(e);
		}
		return s(e);
	}
	function l(a) {
		if (r === n.length) {
			if (!i) return f(a);
			if (i.currentConstruct && i.currentConstruct.concrete) return m(a);
			t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
		}
		return t.containerState = {}, e.check(Jn, u, d)(a);
	}
	function u(e) {
		return i && v(), _(r), f(e);
	}
	function d(e) {
		return t.parser.lazy[t.now().line] = r !== n.length, o = t.now().offset, m(e);
	}
	function f(n) {
		return t.containerState = {}, e.attempt(Jn, p, m)(n);
	}
	function p(e) {
		return r++, n.push([t.currentConstruct, t.containerState]), f(e);
	}
	function m(n) {
		if (n === null) {
			i && v(), _(0), e.consume(n);
			return;
		}
		return i ||= t.parser.flow(t.now()), e.enter("chunkFlow", {
			_tokenizer: i,
			contentType: "flow",
			previous: a
		}), h(n);
	}
	function h(n) {
		if (n === null) {
			g(e.exit("chunkFlow"), !0), _(0), e.consume(n);
			return;
		}
		return H(n) ? (e.consume(n), g(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, s) : (e.consume(n), h);
	}
	function g(e, n) {
		let s = t.sliceStream(e);
		if (n && s.push(null), e.previous = a, a && (a.next = e), a = e, i.defineSkip(e.start), i.write(s), t.parser.lazy[e.start.line]) {
			let e = i.events.length;
			for (; e--;) if (i.events[e][1].start.offset < o && (!i.events[e][1].end || i.events[e][1].end.offset > o)) return;
			let n = t.events.length, a = n, s, c;
			for (; a--;) if (t.events[a][0] === "exit" && t.events[a][1].type === "chunkFlow") {
				if (s) {
					c = t.events[a][1].end;
					break;
				}
				s = !0;
			}
			for (_(r), e = n; e < t.events.length;) t.events[e][1].end = { ...c }, e++;
			wn(t.events, a + 1, 0, t.events.slice(n)), t.events.length = e;
		}
	}
	function _(r) {
		let i = n.length;
		for (; i-- > r;) {
			let r = n[i];
			t.containerState = r[1], r[0].exit.call(t, e);
		}
		n.length = r;
	}
	function v() {
		i.write([null]), a = void 0, i = void 0, t.containerState._closeFlow = void 0;
	}
}
function Xn(e, t, n) {
	return Wn(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
//#endregion
//#region node_modules/micromark-util-classify-character/index.js
function Zn(e) {
	if (e === null || zn(e) || Vn(e)) return 1;
	if (Bn(e)) return 2;
}
//#endregion
//#region node_modules/micromark-util-resolve-all/index.js
function Qn(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) {
		let a = e[i].resolveAll;
		a && !r.includes(a) && (t = a(t, n), r.push(a));
	}
	return t;
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/attention.js
var $n = {
	name: "attention",
	resolveAll: er,
	tokenize: tr
};
function er(e, t) {
	let n = -1, r, i, a, o, s, c, l, u;
	for (; ++n < e.length;) if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
		for (r = n; r--;) if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
			if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)) continue;
			c = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
			let d = { ...e[r][1].end }, f = { ...e[n][1].start };
			nr(d, -c), nr(f, c), o = {
				type: c > 1 ? "strongSequence" : "emphasisSequence",
				start: d,
				end: { ...e[r][1].end }
			}, s = {
				type: c > 1 ? "strongSequence" : "emphasisSequence",
				start: { ...e[n][1].start },
				end: f
			}, a = {
				type: c > 1 ? "strongText" : "emphasisText",
				start: { ...e[r][1].end },
				end: { ...e[n][1].start }
			}, i = {
				type: c > 1 ? "strong" : "emphasis",
				start: { ...o.start },
				end: { ...s.end }
			}, e[r][1].end = { ...o.start }, e[n][1].start = { ...s.end }, l = [], e[r][1].end.offset - e[r][1].start.offset && (l = Tn(l, [[
				"enter",
				e[r][1],
				t
			], [
				"exit",
				e[r][1],
				t
			]])), l = Tn(l, [
				[
					"enter",
					i,
					t
				],
				[
					"enter",
					o,
					t
				],
				[
					"exit",
					o,
					t
				],
				[
					"enter",
					a,
					t
				]
			]), l = Tn(l, Qn(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), l = Tn(l, [
				[
					"exit",
					a,
					t
				],
				[
					"enter",
					s,
					t
				],
				[
					"exit",
					s,
					t
				],
				[
					"exit",
					i,
					t
				]
			]), e[n][1].end.offset - e[n][1].start.offset ? (u = 2, l = Tn(l, [[
				"enter",
				e[n][1],
				t
			], [
				"exit",
				e[n][1],
				t
			]])) : u = 0, wn(e, r - 1, n - r + 3, l), n = r + l.length - u - 2;
			break;
		}
	}
	for (n = -1; ++n < e.length;) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
	return e;
}
function tr(e, t) {
	let n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = Zn(r), a;
	return o;
	function o(t) {
		return a = t, e.enter("attentionSequence"), s(t);
	}
	function s(o) {
		if (o === a) return e.consume(o), s;
		let c = e.exit("attentionSequence"), l = Zn(o), u = !l || l === 2 && i || n.includes(o), d = !i || i === 2 && l || n.includes(r);
		return c._open = !!(a === 42 ? u : u && (i || !d)), c._close = !!(a === 42 ? d : d && (l || !u)), t(o);
	}
}
function nr(e, t) {
	e.column += t, e.offset += t, e._bufferIndex += t;
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/autolink.js
var rr = {
	name: "autolink",
	tokenize: ir
};
function ir(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a;
	}
	function a(t) {
		return Mn(t) ? (e.consume(t), o) : t === 64 ? n(t) : l(t);
	}
	function o(e) {
		return e === 43 || e === 45 || e === 46 || Nn(e) ? (r = 1, s(e)) : l(e);
	}
	function s(t) {
		return t === 58 ? (e.consume(t), r = 0, c) : (t === 43 || t === 45 || t === 46 || Nn(t)) && r++ < 32 ? (e.consume(t), s) : (r = 0, l(t));
	}
	function c(r) {
		return r === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(r), e.exit("autolinkMarker"), e.exit("autolink"), t) : r === null || r === 32 || r === 60 || Fn(r) ? n(r) : (e.consume(r), c);
	}
	function l(t) {
		return t === 64 ? (e.consume(t), u) : Pn(t) ? (e.consume(t), l) : n(t);
	}
	function u(e) {
		return Nn(e) ? d(e) : n(e);
	}
	function d(n) {
		return n === 46 ? (e.consume(n), r = 0, u) : n === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.exit("autolink"), t) : f(n);
	}
	function f(t) {
		if ((t === 45 || Nn(t)) && r++ < 63) {
			let n = t === 45 ? f : d;
			return e.consume(t), n;
		}
		return n(t);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/blank-line.js
var ar = {
	partial: !0,
	tokenize: or
};
function or(e, t, n) {
	return r;
	function r(t) {
		return U(t) ? Wn(e, i, "linePrefix")(t) : i(t);
	}
	function i(e) {
		return e === null || H(e) ? t(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/block-quote.js
var sr = {
	continuation: { tokenize: lr },
	exit: ur,
	name: "blockQuote",
	tokenize: cr
};
function cr(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		if (t === 62) {
			let n = r.containerState;
			return n.open ||= (e.enter("blockQuote", { _container: !0 }), !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), a;
		}
		return n(t);
	}
	function a(n) {
		return U(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n));
	}
}
function lr(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return U(t) ? Wn(e, a, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : a(t);
	}
	function a(r) {
		return e.attempt(sr, t, n)(r);
	}
}
function ur(e) {
	e.exit("blockQuote");
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/character-escape.js
var dr = {
	name: "characterEscape",
	tokenize: fr
};
function fr(e, t, n) {
	return r;
	function r(t) {
		return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), i;
	}
	function i(r) {
		return Rn(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(r);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/character-reference.js
var pr = {
	name: "characterReference",
	tokenize: mr
};
function mr(e, t, n) {
	let r = this, i = 0, a, o;
	return s;
	function s(t) {
		return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), c;
	}
	function c(t) {
		return t === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), l) : (e.enter("characterReferenceValue"), a = 31, o = Nn, u(t));
	}
	function l(t) {
		return t === 88 || t === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), a = 6, o = Ln, u) : (e.enter("characterReferenceValue"), a = 7, o = In, u(t));
	}
	function u(s) {
		if (s === 59 && i) {
			let i = e.exit("characterReferenceValue");
			return o === Nn && !Cn(r.sliceSerialize(i)) ? n(s) : (e.enter("characterReferenceMarker"), e.consume(s), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
		}
		return o(s) && i++ < a ? (e.consume(s), u) : n(s);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/code-fenced.js
var hr = {
	partial: !0,
	tokenize: vr
}, gr = {
	concrete: !0,
	name: "codeFenced",
	tokenize: _r
};
function _r(e, t, n) {
	let r = this, i = {
		partial: !0,
		tokenize: x
	}, a = 0, o = 0, s;
	return c;
	function c(e) {
		return l(e);
	}
	function l(t) {
		let n = r.events[r.events.length - 1];
		return a = n && n[1].type === "linePrefix" ? n[2].sliceSerialize(n[1], !0).length : 0, s = t, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), u(t);
	}
	function u(t) {
		return t === s ? (o++, e.consume(t), u) : o < 3 ? n(t) : (e.exit("codeFencedFenceSequence"), U(t) ? Wn(e, d, "whitespace")(t) : d(t));
	}
	function d(n) {
		return n === null || H(n) ? (e.exit("codeFencedFence"), r.interrupt ? t(n) : e.check(hr, h, b)(n)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", { contentType: "string" }), f(n));
	}
	function f(t) {
		return t === null || H(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), d(t)) : U(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), Wn(e, p, "whitespace")(t)) : t === 96 && t === s ? n(t) : (e.consume(t), f);
	}
	function p(t) {
		return t === null || H(t) ? d(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", { contentType: "string" }), m(t));
	}
	function m(t) {
		return t === null || H(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), d(t)) : t === 96 && t === s ? n(t) : (e.consume(t), m);
	}
	function h(t) {
		return e.attempt(i, b, g)(t);
	}
	function g(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), _;
	}
	function _(t) {
		return a > 0 && U(t) ? Wn(e, v, "linePrefix", a + 1)(t) : v(t);
	}
	function v(t) {
		return t === null || H(t) ? e.check(hr, h, b)(t) : (e.enter("codeFlowValue"), y(t));
	}
	function y(t) {
		return t === null || H(t) ? (e.exit("codeFlowValue"), v(t)) : (e.consume(t), y);
	}
	function b(n) {
		return e.exit("codeFenced"), t(n);
	}
	function x(e, t, n) {
		let i = 0;
		return a;
		function a(t) {
			return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), c;
		}
		function c(t) {
			return e.enter("codeFencedFence"), U(t) ? Wn(e, l, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : l(t);
		}
		function l(t) {
			return t === s ? (e.enter("codeFencedFenceSequence"), u(t)) : n(t);
		}
		function u(t) {
			return t === s ? (i++, e.consume(t), u) : i >= o ? (e.exit("codeFencedFenceSequence"), U(t) ? Wn(e, d, "whitespace")(t) : d(t)) : n(t);
		}
		function d(r) {
			return r === null || H(r) ? (e.exit("codeFencedFence"), t(r)) : n(r);
		}
	}
}
function vr(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return t === null ? n(t) : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a);
	}
	function a(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/code-indented.js
var yr = {
	name: "codeIndented",
	tokenize: xr
}, br = {
	partial: !0,
	tokenize: Sr
};
function xr(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("codeIndented"), Wn(e, a, "linePrefix", 5)(t);
	}
	function a(e) {
		let t = r.events[r.events.length - 1];
		return t && t[1].type === "linePrefix" && t[2].sliceSerialize(t[1], !0).length >= 4 ? o(e) : n(e);
	}
	function o(t) {
		return t === null ? c(t) : H(t) ? e.attempt(br, o, c)(t) : (e.enter("codeFlowValue"), s(t));
	}
	function s(t) {
		return t === null || H(t) ? (e.exit("codeFlowValue"), o(t)) : (e.consume(t), s);
	}
	function c(n) {
		return e.exit("codeIndented"), t(n);
	}
}
function Sr(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return r.parser.lazy[r.now().line] ? n(t) : H(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i) : Wn(e, a, "linePrefix", 5)(t);
	}
	function a(e) {
		let a = r.events[r.events.length - 1];
		return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(e) : H(e) ? i(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/code-text.js
var Cr = {
	name: "codeText",
	previous: Tr,
	resolve: wr,
	tokenize: Er
};
function wr(e) {
	let t = e.length - 4, n = 3, r, i;
	if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
		for (r = n; ++r < t;) if (e[r][1].type === "codeTextData") {
			e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
			break;
		}
	}
	for (r = n - 1, t++; ++r <= t;) i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
	return e;
}
function Tr(e) {
	return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Er(e, t, n) {
	let r = 0, i, a;
	return o;
	function o(t) {
		return e.enter("codeText"), e.enter("codeTextSequence"), s(t);
	}
	function s(t) {
		return t === 96 ? (e.consume(t), r++, s) : (e.exit("codeTextSequence"), c(t));
	}
	function c(t) {
		return t === null ? n(t) : t === 32 ? (e.enter("space"), e.consume(t), e.exit("space"), c) : t === 96 ? (a = e.enter("codeTextSequence"), i = 0, u(t)) : H(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), c) : (e.enter("codeTextData"), l(t));
	}
	function l(t) {
		return t === null || t === 32 || t === 96 || H(t) ? (e.exit("codeTextData"), c(t)) : (e.consume(t), l);
	}
	function u(n) {
		return n === 96 ? (e.consume(n), i++, u) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(n)) : (a.type = "codeTextData", l(n));
	}
}
//#endregion
//#region node_modules/micromark-util-subtokenize/lib/splice-buffer.js
var Dr = class {
	constructor(e) {
		this.left = e ? [...e] : [], this.right = [];
	}
	get(e) {
		if (e < 0 || e >= this.left.length + this.right.length) throw RangeError("Cannot access index `" + e + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
		return e < this.left.length ? this.left[e] : this.right[this.right.length - e + this.left.length - 1];
	}
	get length() {
		return this.left.length + this.right.length;
	}
	shift() {
		return this.setCursor(0), this.right.pop();
	}
	slice(e, t) {
		let n = t ?? Infinity;
		return n < this.left.length ? this.left.slice(e, n) : e > this.left.length ? this.right.slice(this.right.length - n + this.left.length, this.right.length - e + this.left.length).reverse() : this.left.slice(e).concat(this.right.slice(this.right.length - n + this.left.length).reverse());
	}
	splice(e, t, n) {
		let r = t || 0;
		this.setCursor(Math.trunc(e));
		let i = this.right.splice(this.right.length - r, Infinity);
		return n && Or(this.left, n), i.reverse();
	}
	pop() {
		return this.setCursor(Infinity), this.left.pop();
	}
	push(e) {
		this.setCursor(Infinity), this.left.push(e);
	}
	pushMany(e) {
		this.setCursor(Infinity), Or(this.left, e);
	}
	unshift(e) {
		this.setCursor(0), this.right.push(e);
	}
	unshiftMany(e) {
		this.setCursor(0), Or(this.right, e.reverse());
	}
	setCursor(e) {
		if (!(e === this.left.length || e > this.left.length && this.right.length === 0 || e < 0 && this.left.length === 0)) if (e < this.left.length) {
			let t = this.left.splice(e, Infinity);
			Or(this.right, t.reverse());
		} else {
			let t = this.right.splice(this.left.length + this.right.length - e, Infinity);
			Or(this.left, t.reverse());
		}
	}
};
function Or(e, t) {
	let n = 0;
	if (t.length < 1e4) e.push(...t);
	else for (; n < t.length;) e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
//#endregion
//#region node_modules/micromark-util-subtokenize/index.js
function kr(e) {
	let t = {}, n = -1, r, i, a, o, s, c, l, u = new Dr(e);
	for (; ++n < u.length;) {
		for (; n in t;) n = t[n];
		if (r = u.get(n), n && r[1].type === "chunkFlow" && u.get(n - 1)[1].type === "listItemPrefix" && (c = r[1]._tokenizer.events, a = 0, a < c.length && c[a][1].type === "lineEndingBlank" && (a += 2), a < c.length && c[a][1].type === "content")) for (; ++a < c.length && c[a][1].type !== "content";) c[a][1].type === "chunkText" && (c[a][1]._isInFirstContentOfListItem = !0, a++);
		if (r[0] === "enter") r[1].contentType && (Object.assign(t, Ar(u, n)), n = t[n], l = !0);
		else if (r[1]._container) {
			for (a = n, i = void 0; a--;) if (o = u.get(a), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank") o[0] === "enter" && (i && (u.get(i)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", i = a);
			else if (!(o[1].type === "linePrefix" || o[1].type === "listItemIndent")) break;
			i && (r[1].end = { ...u.get(i)[1].start }, s = u.slice(i, n), s.unshift(r), u.splice(i, n - i + 1, s));
		}
	}
	return wn(e, 0, Infinity, u.slice(0)), !l;
}
function Ar(e, t) {
	let n = e.get(t)[1], r = e.get(t)[2], i = t - 1, a = [], o = n._tokenizer;
	o || (o = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
	let s = o.events, c = [], l = {}, u, d, f = -1, p = n, m = 0, h = 0, g = [h];
	for (; p;) {
		for (; e.get(++i)[1] !== p;);
		a.push(i), p._tokenizer || (u = r.sliceStream(p), p.next || u.push(null), d && o.defineSkip(p.start), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(u), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), d = p, p = p.next;
	}
	for (p = n; ++f < s.length;) s[f][0] === "exit" && s[f - 1][0] === "enter" && s[f][1].type === s[f - 1][1].type && s[f][1].start.line !== s[f][1].end.line && (h = f + 1, g.push(h), p._tokenizer = void 0, p.previous = void 0, p = p.next);
	for (o.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : g.pop(), f = g.length; f--;) {
		let t = s.slice(g[f], g[f + 1]), n = a.pop();
		c.push([n, n + t.length - 1]), e.splice(n, 2, t);
	}
	for (c.reverse(), f = -1; ++f < c.length;) l[m + c[f][0]] = m + c[f][1], m += c[f][1] - c[f][0] - 1;
	return l;
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/content.js
var jr = {
	resolve: Nr,
	tokenize: W
}, Mr = {
	partial: !0,
	tokenize: Pr
};
function Nr(e) {
	return kr(e), e;
}
function W(e, t) {
	let n;
	return r;
	function r(t) {
		return e.enter("content"), n = e.enter("chunkContent", { contentType: "content" }), i(t);
	}
	function i(t) {
		return t === null ? a(t) : H(t) ? e.check(Mr, o, a)(t) : (e.consume(t), i);
	}
	function a(n) {
		return e.exit("chunkContent"), e.exit("content"), t(n);
	}
	function o(t) {
		return e.consume(t), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
			contentType: "content",
			previous: n
		}), n = n.next, i;
	}
}
function Pr(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), Wn(e, a, "linePrefix");
	}
	function a(i) {
		if (i === null || H(i)) return n(i);
		let a = r.events[r.events.length - 1];
		return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(i) : e.interrupt(r.parser.constructs.flow, n, t)(i);
	}
}
//#endregion
//#region node_modules/micromark-factory-destination/index.js
function Fr(e, t, n, r, i, a, o, s, c) {
	let l = c || Infinity, u = 0;
	return d;
	function d(t) {
		return t === 60 ? (e.enter(r), e.enter(i), e.enter(a), e.consume(t), e.exit(a), f) : t === null || t === 32 || t === 41 || Fn(t) ? n(t) : (e.enter(r), e.enter(o), e.enter(s), e.enter("chunkString", { contentType: "string" }), h(t));
	}
	function f(n) {
		return n === 62 ? (e.enter(a), e.consume(n), e.exit(a), e.exit(i), e.exit(r), t) : (e.enter(s), e.enter("chunkString", { contentType: "string" }), p(n));
	}
	function p(t) {
		return t === 62 ? (e.exit("chunkString"), e.exit(s), f(t)) : t === null || t === 60 || H(t) ? n(t) : (e.consume(t), t === 92 ? m : p);
	}
	function m(t) {
		return t === 60 || t === 62 || t === 92 ? (e.consume(t), p) : p(t);
	}
	function h(i) {
		return !u && (i === null || i === 41 || zn(i)) ? (e.exit("chunkString"), e.exit(s), e.exit(o), e.exit(r), t(i)) : u < l && i === 40 ? (e.consume(i), u++, h) : i === 41 ? (e.consume(i), u--, h) : i === null || i === 32 || i === 40 || Fn(i) ? n(i) : (e.consume(i), i === 92 ? g : h);
	}
	function g(t) {
		return t === 40 || t === 41 || t === 92 ? (e.consume(t), h) : h(t);
	}
}
//#endregion
//#region node_modules/micromark-factory-label/index.js
function Ir(e, t, n, r, i, a) {
	let o = this, s = 0, c;
	return l;
	function l(t) {
		return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(a), u;
	}
	function u(l) {
		return s > 999 || l === null || l === 91 || l === 93 && !c || l === 94 && !s && "_hiddenFootnoteSupport" in o.parser.constructs ? n(l) : l === 93 ? (e.exit(a), e.enter(i), e.consume(l), e.exit(i), e.exit(r), t) : H(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), u) : (e.enter("chunkString", { contentType: "string" }), d(l));
	}
	function d(t) {
		return t === null || t === 91 || t === 93 || H(t) || s++ > 999 ? (e.exit("chunkString"), u(t)) : (e.consume(t), c ||= !U(t), t === 92 ? f : d);
	}
	function f(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), s++, d) : d(t);
	}
}
//#endregion
//#region node_modules/micromark-factory-title/index.js
function G(e, t, n, r, i, a) {
	let o;
	return s;
	function s(t) {
		return t === 34 || t === 39 || t === 40 ? (e.enter(r), e.enter(i), e.consume(t), e.exit(i), o = t === 40 ? 41 : t, c) : n(t);
	}
	function c(n) {
		return n === o ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t) : (e.enter(a), l(n));
	}
	function l(t) {
		return t === o ? (e.exit(a), c(o)) : t === null ? n(t) : H(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), Wn(e, l, "linePrefix")) : (e.enter("chunkString", { contentType: "string" }), u(t));
	}
	function u(t) {
		return t === o || t === null || H(t) ? (e.exit("chunkString"), l(t)) : (e.consume(t), t === 92 ? d : u);
	}
	function d(t) {
		return t === o || t === 92 ? (e.consume(t), u) : u(t);
	}
}
//#endregion
//#region node_modules/micromark-factory-whitespace/index.js
function Lr(e, t) {
	let n;
	return r;
	function r(i) {
		return H(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : U(i) ? Wn(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/definition.js
var Rr = {
	name: "definition",
	tokenize: Br
}, zr = {
	partial: !0,
	tokenize: Vr
};
function Br(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		return e.enter("definition"), o(t);
	}
	function o(t) {
		return Ir.call(r, e, s, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t);
	}
	function s(t) {
		return i = jn(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), t === 58 ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), c) : n(t);
	}
	function c(t) {
		return zn(t) ? Lr(e, l)(t) : l(t);
	}
	function l(t) {
		return Fr(e, u, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t);
	}
	function u(t) {
		return e.attempt(zr, d, d)(t);
	}
	function d(t) {
		return U(t) ? Wn(e, f, "whitespace")(t) : f(t);
	}
	function f(a) {
		return a === null || H(a) ? (e.exit("definition"), r.parser.defined.push(i), t(a)) : n(a);
	}
}
function Vr(e, t, n) {
	return r;
	function r(t) {
		return zn(t) ? Lr(e, i)(t) : n(t);
	}
	function i(t) {
		return G(e, a, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t);
	}
	function a(t) {
		return U(t) ? Wn(e, o, "whitespace")(t) : o(t);
	}
	function o(e) {
		return e === null || H(e) ? t(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/hard-break-escape.js
var Hr = {
	name: "hardBreakEscape",
	tokenize: Ur
};
function Ur(e, t, n) {
	return r;
	function r(t) {
		return e.enter("hardBreakEscape"), e.consume(t), i;
	}
	function i(r) {
		return H(r) ? (e.exit("hardBreakEscape"), t(r)) : n(r);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/heading-atx.js
var Wr = {
	name: "headingAtx",
	resolve: Gr,
	tokenize: Kr
};
function Gr(e, t) {
	let n = e.length - 2, r = 3, i, a;
	return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
		type: "atxHeadingText",
		start: e[r][1].start,
		end: e[n][1].end
	}, a = {
		type: "chunkText",
		start: e[r][1].start,
		end: e[n][1].end,
		contentType: "text"
	}, wn(e, r, n - r + 1, [
		[
			"enter",
			i,
			t
		],
		[
			"enter",
			a,
			t
		],
		[
			"exit",
			a,
			t
		],
		[
			"exit",
			i,
			t
		]
	])), e;
}
function Kr(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("atxHeading"), a(t);
	}
	function a(t) {
		return e.enter("atxHeadingSequence"), o(t);
	}
	function o(t) {
		return t === 35 && r++ < 6 ? (e.consume(t), o) : t === null || zn(t) ? (e.exit("atxHeadingSequence"), s(t)) : n(t);
	}
	function s(n) {
		return n === 35 ? (e.enter("atxHeadingSequence"), c(n)) : n === null || H(n) ? (e.exit("atxHeading"), t(n)) : U(n) ? Wn(e, s, "whitespace")(n) : (e.enter("atxHeadingText"), l(n));
	}
	function c(t) {
		return t === 35 ? (e.consume(t), c) : (e.exit("atxHeadingSequence"), s(t));
	}
	function l(t) {
		return t === null || t === 35 || zn(t) ? (e.exit("atxHeadingText"), s(t)) : (e.consume(t), l);
	}
}
//#endregion
//#region node_modules/micromark-util-html-tag-name/index.js
var qr = /* @__PURE__ */ "address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul".split("."), Jr = [
	"pre",
	"script",
	"style",
	"textarea"
], Yr = {
	concrete: !0,
	name: "htmlFlow",
	resolveTo: Qr,
	tokenize: $r
}, Xr = {
	partial: !0,
	tokenize: ti
}, Zr = {
	partial: !0,
	tokenize: ei
};
function Qr(e) {
	let t = e.length;
	for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"););
	return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function $r(e, t, n) {
	let r = this, i, a, o, s, c;
	return l;
	function l(e) {
		return u(e);
	}
	function u(t) {
		return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), d;
	}
	function d(s) {
		return s === 33 ? (e.consume(s), f) : s === 47 ? (e.consume(s), a = !0, h) : s === 63 ? (e.consume(s), i = 3, r.interrupt ? t : ae) : Mn(s) ? (e.consume(s), o = String.fromCharCode(s), g) : n(s);
	}
	function f(a) {
		return a === 45 ? (e.consume(a), i = 2, p) : a === 91 ? (e.consume(a), i = 5, s = 0, m) : Mn(a) ? (e.consume(a), i = 4, r.interrupt ? t : ae) : n(a);
	}
	function p(i) {
		return i === 45 ? (e.consume(i), r.interrupt ? t : ae) : n(i);
	}
	function m(i) {
		return i === "CDATA[".charCodeAt(s++) ? (e.consume(i), s === 6 ? r.interrupt ? t : D : m) : n(i);
	}
	function h(t) {
		return Mn(t) ? (e.consume(t), o = String.fromCharCode(t), g) : n(t);
	}
	function g(s) {
		if (s === null || s === 47 || s === 62 || zn(s)) {
			let c = s === 47, l = o.toLowerCase();
			return !c && !a && Jr.includes(l) ? (i = 1, r.interrupt ? t(s) : D(s)) : qr.includes(o.toLowerCase()) ? (i = 6, c ? (e.consume(s), _) : r.interrupt ? t(s) : D(s)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(s) : a ? v(s) : y(s));
		}
		return s === 45 || Nn(s) ? (e.consume(s), o += String.fromCharCode(s), g) : n(s);
	}
	function _(i) {
		return i === 62 ? (e.consume(i), r.interrupt ? t : D) : n(i);
	}
	function v(t) {
		return U(t) ? (e.consume(t), v) : E(t);
	}
	function y(t) {
		return t === 47 ? (e.consume(t), E) : t === 58 || t === 95 || Mn(t) ? (e.consume(t), b) : U(t) ? (e.consume(t), y) : E(t);
	}
	function b(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || Nn(t) ? (e.consume(t), b) : x(t);
	}
	function x(t) {
		return t === 61 ? (e.consume(t), S) : U(t) ? (e.consume(t), x) : y(t);
	}
	function S(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), c = t, C) : U(t) ? (e.consume(t), S) : w(t);
	}
	function C(t) {
		return t === c ? (e.consume(t), c = null, T) : t === null || H(t) ? n(t) : (e.consume(t), C);
	}
	function w(t) {
		return t === null || t === 34 || t === 39 || t === 47 || t === 60 || t === 61 || t === 62 || t === 96 || zn(t) ? x(t) : (e.consume(t), w);
	}
	function T(e) {
		return e === 47 || e === 62 || U(e) ? y(e) : n(e);
	}
	function E(t) {
		return t === 62 ? (e.consume(t), ee) : n(t);
	}
	function ee(t) {
		return t === null || H(t) ? D(t) : U(t) ? (e.consume(t), ee) : n(t);
	}
	function D(t) {
		return t === 45 && i === 2 ? (e.consume(t), O) : t === 60 && i === 1 ? (e.consume(t), ie) : t === 62 && i === 4 ? (e.consume(t), oe) : t === 63 && i === 3 ? (e.consume(t), ae) : t === 93 && i === 5 ? (e.consume(t), A) : H(t) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(Xr, se, te)(t)) : t === null || H(t) ? (e.exit("htmlFlowData"), te(t)) : (e.consume(t), D);
	}
	function te(t) {
		return e.check(Zr, ne, se)(t);
	}
	function ne(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), re;
	}
	function re(t) {
		return t === null || H(t) ? te(t) : (e.enter("htmlFlowData"), D(t));
	}
	function O(t) {
		return t === 45 ? (e.consume(t), ae) : D(t);
	}
	function ie(t) {
		return t === 47 ? (e.consume(t), o = "", k) : D(t);
	}
	function k(t) {
		if (t === 62) {
			let n = o.toLowerCase();
			return Jr.includes(n) ? (e.consume(t), oe) : D(t);
		}
		return Mn(t) && o.length < 8 ? (e.consume(t), o += String.fromCharCode(t), k) : D(t);
	}
	function A(t) {
		return t === 93 ? (e.consume(t), ae) : D(t);
	}
	function ae(t) {
		return t === 62 ? (e.consume(t), oe) : t === 45 && i === 2 ? (e.consume(t), ae) : D(t);
	}
	function oe(t) {
		return t === null || H(t) ? (e.exit("htmlFlowData"), se(t)) : (e.consume(t), oe);
	}
	function se(n) {
		return e.exit("htmlFlow"), t(n);
	}
}
function ei(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return H(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a) : n(t);
	}
	function a(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
function ti(e, t, n) {
	return r;
	function r(r) {
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), e.attempt(ar, t, n);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/html-text.js
var ni = {
	name: "htmlText",
	tokenize: ri
};
function ri(e, t, n) {
	let r = this, i, a, o;
	return s;
	function s(t) {
		return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), c;
	}
	function c(t) {
		return t === 33 ? (e.consume(t), l) : t === 47 ? (e.consume(t), x) : t === 63 ? (e.consume(t), y) : Mn(t) ? (e.consume(t), w) : n(t);
	}
	function l(t) {
		return t === 45 ? (e.consume(t), u) : t === 91 ? (e.consume(t), a = 0, m) : Mn(t) ? (e.consume(t), v) : n(t);
	}
	function u(t) {
		return t === 45 ? (e.consume(t), p) : n(t);
	}
	function d(t) {
		return t === null ? n(t) : t === 45 ? (e.consume(t), f) : H(t) ? (o = d, ie(t)) : (e.consume(t), d);
	}
	function f(t) {
		return t === 45 ? (e.consume(t), p) : d(t);
	}
	function p(e) {
		return e === 62 ? O(e) : e === 45 ? f(e) : d(e);
	}
	function m(t) {
		return t === "CDATA[".charCodeAt(a++) ? (e.consume(t), a === 6 ? h : m) : n(t);
	}
	function h(t) {
		return t === null ? n(t) : t === 93 ? (e.consume(t), g) : H(t) ? (o = h, ie(t)) : (e.consume(t), h);
	}
	function g(t) {
		return t === 93 ? (e.consume(t), _) : h(t);
	}
	function _(t) {
		return t === 62 ? O(t) : t === 93 ? (e.consume(t), _) : h(t);
	}
	function v(t) {
		return t === null || t === 62 ? O(t) : H(t) ? (o = v, ie(t)) : (e.consume(t), v);
	}
	function y(t) {
		return t === null ? n(t) : t === 63 ? (e.consume(t), b) : H(t) ? (o = y, ie(t)) : (e.consume(t), y);
	}
	function b(e) {
		return e === 62 ? O(e) : y(e);
	}
	function x(t) {
		return Mn(t) ? (e.consume(t), S) : n(t);
	}
	function S(t) {
		return t === 45 || Nn(t) ? (e.consume(t), S) : C(t);
	}
	function C(t) {
		return H(t) ? (o = C, ie(t)) : U(t) ? (e.consume(t), C) : O(t);
	}
	function w(t) {
		return t === 45 || Nn(t) ? (e.consume(t), w) : t === 47 || t === 62 || zn(t) ? T(t) : n(t);
	}
	function T(t) {
		return t === 47 ? (e.consume(t), O) : t === 58 || t === 95 || Mn(t) ? (e.consume(t), E) : H(t) ? (o = T, ie(t)) : U(t) ? (e.consume(t), T) : O(t);
	}
	function E(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || Nn(t) ? (e.consume(t), E) : ee(t);
	}
	function ee(t) {
		return t === 61 ? (e.consume(t), D) : H(t) ? (o = ee, ie(t)) : U(t) ? (e.consume(t), ee) : T(t);
	}
	function D(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), i = t, te) : H(t) ? (o = D, ie(t)) : U(t) ? (e.consume(t), D) : (e.consume(t), ne);
	}
	function te(t) {
		return t === i ? (e.consume(t), i = void 0, re) : t === null ? n(t) : H(t) ? (o = te, ie(t)) : (e.consume(t), te);
	}
	function ne(t) {
		return t === null || t === 34 || t === 39 || t === 60 || t === 61 || t === 96 ? n(t) : t === 47 || t === 62 || zn(t) ? T(t) : (e.consume(t), ne);
	}
	function re(e) {
		return e === 47 || e === 62 || zn(e) ? T(e) : n(e);
	}
	function O(r) {
		return r === 62 ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r);
	}
	function ie(t) {
		return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), k;
	}
	function k(t) {
		return U(t) ? Wn(e, A, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : A(t);
	}
	function A(t) {
		return e.enter("htmlTextData"), o(t);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/label-end.js
var ii = {
	name: "labelEnd",
	resolveAll: ci,
	resolveTo: li,
	tokenize: ui
}, ai = { tokenize: di }, oi = { tokenize: fi }, si = { tokenize: pi };
function ci(e) {
	let t = -1, n = [];
	for (; ++t < e.length;) {
		let r = e[t][1];
		if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
			let e = r.type === "labelImage" ? 4 : 2;
			r.type = "data", t += e;
		}
	}
	return e.length !== n.length && wn(e, 0, e.length, n), e;
}
function li(e, t) {
	let n = e.length, r = 0, i, a, o, s;
	for (; n--;) if (i = e[n][1], a) {
		if (i.type === "link" || i.type === "labelLink" && i._inactive) break;
		e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
	} else if (o) {
		if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (a = n, i.type !== "labelLink")) {
			r = 2;
			break;
		}
	} else i.type === "labelEnd" && (o = n);
	let c = {
		type: e[a][1].type === "labelLink" ? "link" : "image",
		start: { ...e[a][1].start },
		end: { ...e[e.length - 1][1].end }
	}, l = {
		type: "label",
		start: { ...e[a][1].start },
		end: { ...e[o][1].end }
	}, u = {
		type: "labelText",
		start: { ...e[a + r + 2][1].end },
		end: { ...e[o - 2][1].start }
	};
	return s = [[
		"enter",
		c,
		t
	], [
		"enter",
		l,
		t
	]], s = Tn(s, e.slice(a + 1, a + r + 3)), s = Tn(s, [[
		"enter",
		u,
		t
	]]), s = Tn(s, Qn(t.parser.constructs.insideSpan.null, e.slice(a + r + 4, o - 3), t)), s = Tn(s, [
		[
			"exit",
			u,
			t
		],
		e[o - 2],
		e[o - 1],
		[
			"exit",
			l,
			t
		]
	]), s = Tn(s, e.slice(o + 1)), s = Tn(s, [[
		"exit",
		c,
		t
	]]), wn(e, a, e.length, s), e;
}
function ui(e, t, n) {
	let r = this, i = r.events.length, a, o;
	for (; i--;) if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
		a = r.events[i][1];
		break;
	}
	return s;
	function s(t) {
		return a ? a._inactive ? d(t) : (o = r.parser.defined.includes(jn(r.sliceSerialize({
			start: a.end,
			end: r.now()
		}))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), c) : n(t);
	}
	function c(t) {
		return t === 40 ? e.attempt(ai, u, o ? u : d)(t) : t === 91 ? e.attempt(oi, u, o ? l : d)(t) : o ? u(t) : d(t);
	}
	function l(t) {
		return e.attempt(si, u, d)(t);
	}
	function u(e) {
		return t(e);
	}
	function d(e) {
		return a._balanced = !0, n(e);
	}
}
function di(e, t, n) {
	return r;
	function r(t) {
		return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), i;
	}
	function i(t) {
		return zn(t) ? Lr(e, a)(t) : a(t);
	}
	function a(t) {
		return t === 41 ? u(t) : Fr(e, o, s, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t);
	}
	function o(t) {
		return zn(t) ? Lr(e, c)(t) : u(t);
	}
	function s(e) {
		return n(e);
	}
	function c(t) {
		return t === 34 || t === 39 || t === 40 ? G(e, l, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : u(t);
	}
	function l(t) {
		return zn(t) ? Lr(e, u)(t) : u(t);
	}
	function u(r) {
		return r === 41 ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r);
	}
}
function fi(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return Ir.call(r, e, a, o, "reference", "referenceMarker", "referenceString")(t);
	}
	function a(e) {
		return r.parser.defined.includes(jn(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e);
	}
	function o(e) {
		return n(e);
	}
}
function pi(e, t, n) {
	return r;
	function r(t) {
		return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), i;
	}
	function i(r) {
		return r === 93 ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), t) : n(r);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/label-start-image.js
var mi = {
	name: "labelStartImage",
	resolveAll: ii.resolveAll,
	tokenize: hi
};
function hi(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"), a;
	}
	function a(t) {
		return t === 91 ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelImage"), o) : n(t);
	}
	function o(e) {
		/* c8 ignore next 3 */
		return e === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/label-start-link.js
var gi = {
	name: "labelStartLink",
	resolveAll: ii.resolveAll,
	tokenize: _i
};
function _i(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelLink"), a;
	}
	function a(e) {
		/* c8 ignore next 3 */
		return e === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/line-ending.js
var vi = {
	name: "lineEnding",
	tokenize: yi
};
function yi(e, t) {
	return n;
	function n(n) {
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), Wn(e, t, "linePrefix");
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/thematic-break.js
var bi = {
	name: "thematicBreak",
	tokenize: xi
};
function xi(e, t, n) {
	let r = 0, i;
	return a;
	function a(t) {
		return e.enter("thematicBreak"), o(t);
	}
	function o(e) {
		return i = e, s(e);
	}
	function s(a) {
		return a === i ? (e.enter("thematicBreakSequence"), c(a)) : r >= 3 && (a === null || H(a)) ? (e.exit("thematicBreak"), t(a)) : n(a);
	}
	function c(t) {
		return t === i ? (e.consume(t), r++, c) : (e.exit("thematicBreakSequence"), U(t) ? Wn(e, s, "whitespace")(t) : s(t));
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/list.js
var Si = {
	continuation: { tokenize: Ei },
	exit: Oi,
	name: "list",
	tokenize: Ti
}, Ci = {
	partial: !0,
	tokenize: ki
}, wi = {
	partial: !0,
	tokenize: Di
};
function Ti(e, t, n) {
	let r = this, i = r.events[r.events.length - 1], a = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
	return s;
	function s(t) {
		let i = r.containerState.type || (t === 42 || t === 43 || t === 45 ? "listUnordered" : "listOrdered");
		if (i === "listUnordered" ? !r.containerState.marker || t === r.containerState.marker : In(t)) {
			if (r.containerState.type || (r.containerState.type = i, e.enter(i, { _container: !0 })), i === "listUnordered") return e.enter("listItemPrefix"), t === 42 || t === 45 ? e.check(bi, n, l)(t) : l(t);
			if (!r.interrupt || t === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), c(t);
		}
		return n(t);
	}
	function c(t) {
		return In(t) && ++o < 10 ? (e.consume(t), c) : (!r.interrupt || o < 2) && (r.containerState.marker ? t === r.containerState.marker : t === 41 || t === 46) ? (e.exit("listItemValue"), l(t)) : n(t);
	}
	function l(t) {
		return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || t, e.check(ar, r.interrupt ? n : u, e.attempt(Ci, f, d));
	}
	function u(e) {
		return r.containerState.initialBlankLine = !0, a++, f(e);
	}
	function d(t) {
		return U(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), f) : n(t);
	}
	function f(n) {
		return r.containerState.size = a + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(n);
	}
}
function Ei(e, t, n) {
	let r = this;
	return r.containerState._closeFlow = void 0, e.check(ar, i, a);
	function i(n) {
		return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, Wn(e, t, "listItemIndent", r.containerState.size + 1)(n);
	}
	function a(n) {
		return r.containerState.furtherBlankLines || !U(n) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(n)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(wi, t, o)(n));
	}
	function o(i) {
		return r.containerState._closeFlow = !0, r.interrupt = void 0, Wn(e, e.attempt(Si, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i);
	}
}
function Di(e, t, n) {
	let r = this;
	return Wn(e, i, "listItemIndent", r.containerState.size + 1);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return i && i[1].type === "listItemIndent" && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(e) : n(e);
	}
}
function Oi(e) {
	e.exit(this.containerState.type);
}
function ki(e, t, n) {
	let r = this;
	return Wn(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return !U(e) && i && i[1].type === "listItemPrefixWhitespace" ? t(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/setext-underline.js
var Ai = {
	name: "setextUnderline",
	resolveTo: ji,
	tokenize: Mi
};
function ji(e, t) {
	let n = e.length, r, i, a;
	for (; n--;) if (e[n][0] === "enter") {
		if (e[n][1].type === "content") {
			r = n;
			break;
		}
		e[n][1].type === "paragraph" && (i = n);
	} else e[n][1].type === "content" && e.splice(n, 1), !a && e[n][1].type === "definition" && (a = n);
	let o = {
		type: "setextHeading",
		start: { ...e[r][1].start },
		end: { ...e[e.length - 1][1].end }
	};
	return e[i][1].type = "setextHeadingText", a ? (e.splice(i, 0, [
		"enter",
		o,
		t
	]), e.splice(a + 1, 0, [
		"exit",
		e[r][1],
		t
	]), e[r][1].end = { ...e[a][1].end }) : e[r][1] = o, e.push([
		"exit",
		o,
		t
	]), e;
}
function Mi(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		let a = r.events.length, s;
		for (; a--;) if (r.events[a][1].type !== "lineEnding" && r.events[a][1].type !== "linePrefix" && r.events[a][1].type !== "content") {
			s = r.events[a][1].type === "paragraph";
			break;
		}
		return !r.parser.lazy[r.now().line] && (r.interrupt || s) ? (e.enter("setextHeadingLine"), i = t, o(t)) : n(t);
	}
	function o(t) {
		return e.enter("setextHeadingLineSequence"), s(t);
	}
	function s(t) {
		return t === i ? (e.consume(t), s) : (e.exit("setextHeadingLineSequence"), U(t) ? Wn(e, c, "lineSuffix")(t) : c(t));
	}
	function c(r) {
		return r === null || H(r) ? (e.exit("setextHeadingLine"), t(r)) : n(r);
	}
}
//#endregion
//#region node_modules/micromark/lib/initialize/flow.js
var Ni = { tokenize: Pi };
function Pi(e) {
	let t = this, n = e.attempt(ar, r, e.attempt(this.parser.constructs.flowInitial, i, Wn(e, e.attempt(this.parser.constructs.flow, i, e.attempt(jr, i)), "linePrefix")));
	return n;
	function r(r) {
		if (r === null) {
			e.consume(r);
			return;
		}
		return e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
	}
	function i(r) {
		if (r === null) {
			e.consume(r);
			return;
		}
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), t.currentConstruct = void 0, n;
	}
}
//#endregion
//#region node_modules/micromark/lib/initialize/text.js
var Fi = { resolveAll: zi() }, Ii = Ri("string"), Li = Ri("text");
function Ri(e) {
	return {
		resolveAll: zi(e === "text" ? Bi : void 0),
		tokenize: t
	};
	function t(t) {
		let n = this, r = this.parser.constructs[e], i = t.attempt(r, a, o);
		return a;
		function a(e) {
			return c(e) ? i(e) : o(e);
		}
		function o(e) {
			if (e === null) {
				t.consume(e);
				return;
			}
			return t.enter("data"), t.consume(e), s;
		}
		function s(e) {
			return c(e) ? (t.exit("data"), i(e)) : (t.consume(e), s);
		}
		function c(e) {
			if (e === null) return !0;
			let t = r[e], i = -1;
			if (t) for (; ++i < t.length;) {
				let e = t[i];
				if (!e.previous || e.previous.call(n, n.previous)) return !0;
			}
			return !1;
		}
	}
}
function zi(e) {
	return t;
	function t(t, n) {
		let r = -1, i;
		for (; ++r <= t.length;) i === void 0 ? t[r] && t[r][1].type === "data" && (i = r, r++) : (!t[r] || t[r][1].type !== "data") && (r !== i + 2 && (t[i][1].end = t[r - 1][1].end, t.splice(i + 2, r - i - 2), r = i + 2), i = void 0);
		return e ? e(t, n) : t;
	}
}
function Bi(e, t) {
	let n = 0;
	for (; ++n <= e.length;) if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
		let r = e[n - 1][1], i = t.sliceStream(r), a = i.length, o = -1, s = 0, c;
		for (; a--;) {
			let e = i[a];
			if (typeof e == "string") {
				for (o = e.length; e.charCodeAt(o - 1) === 32;) s++, o--;
				if (o) break;
				o = -1;
			} else if (e === -2) c = !0, s++;
			else if (e !== -1) {
				a++;
				break;
			}
		}
		if (t._contentTypeTextTrailing && n === e.length && (s = 0), s) {
			let i = {
				type: n === e.length || c || s < 2 ? "lineSuffix" : "hardBreakTrailing",
				start: {
					_bufferIndex: a ? o : r.start._bufferIndex + o,
					_index: r.start._index + a,
					line: r.end.line,
					column: r.end.column - s,
					offset: r.end.offset - s
				},
				end: { ...r.end }
			};
			r.end = { ...i.start }, r.start.offset === r.end.offset ? Object.assign(r, i) : (e.splice(n, 0, [
				"enter",
				i,
				t
			], [
				"exit",
				i,
				t
			]), n += 2);
		}
		n++;
	}
	return e;
}
//#endregion
//#region node_modules/micromark/lib/constructs.js
var Vi = /* @__PURE__ */ c({
	attentionMarkers: () => Ji,
	contentInitial: () => K,
	disable: () => Yi,
	document: () => Hi,
	flow: () => Wi,
	flowInitial: () => Ui,
	insideSpan: () => qi,
	string: () => Gi,
	text: () => Ki
}), Hi = {
	42: Si,
	43: Si,
	45: Si,
	48: Si,
	49: Si,
	50: Si,
	51: Si,
	52: Si,
	53: Si,
	54: Si,
	55: Si,
	56: Si,
	57: Si,
	62: sr
}, K = { 91: Rr }, Ui = {
	[-2]: yr,
	[-1]: yr,
	32: yr
}, Wi = {
	35: Wr,
	42: bi,
	45: [Ai, bi],
	60: Yr,
	61: Ai,
	95: bi,
	96: gr,
	126: gr
}, Gi = {
	38: pr,
	92: dr
}, Ki = {
	[-5]: vi,
	[-4]: vi,
	[-3]: vi,
	33: mi,
	38: pr,
	42: $n,
	60: [rr, ni],
	91: gi,
	92: [Hr, dr],
	93: ii,
	95: $n,
	96: Cr
}, qi = { null: [$n, Fi] }, Ji = { null: [42, 95] }, Yi = { null: [] };
//#endregion
//#region node_modules/micromark/lib/create-tokenizer.js
function Xi(e, t, n) {
	let r = {
		_bufferIndex: -1,
		_index: 0,
		line: n && n.line || 1,
		column: n && n.column || 1,
		offset: n && n.offset || 0
	}, i = {}, a = [], o = [], s = [], c = {
		attempt: C(x),
		check: C(S),
		consume: v,
		enter: y,
		exit: b,
		interrupt: C(S, { interrupt: !0 })
	}, l = {
		code: null,
		containerState: {},
		defineSkip: h,
		events: [],
		now: m,
		parser: e,
		previous: null,
		sliceSerialize: f,
		sliceStream: p,
		write: d
	}, u = t.tokenize.call(l, c);
	return t.resolveAll && a.push(t), l;
	function d(e) {
		return o = Tn(o, e), g(), o[o.length - 1] === null ? (w(t, 0), l.events = Qn(a, l.events, l), l.events) : [];
	}
	function f(e, t) {
		return Qi(p(e), t);
	}
	function p(e) {
		return Zi(o, e);
	}
	function m() {
		let { _bufferIndex: e, _index: t, line: n, column: i, offset: a } = r;
		return {
			_bufferIndex: e,
			_index: t,
			line: n,
			column: i,
			offset: a
		};
	}
	function h(e) {
		i[e.line] = e.column, E();
	}
	function g() {
		let e;
		for (; r._index < o.length;) {
			let t = o[r._index];
			if (typeof t == "string") for (e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === e && r._bufferIndex < t.length;) _(t.charCodeAt(r._bufferIndex));
			else _(t);
		}
	}
	function _(e) {
		u = u(e);
	}
	function v(e) {
		H(e) ? (r.line++, r.column = 1, r.offset += e === -3 ? 2 : 1, E()) : e !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === o[r._index].length && (r._bufferIndex = -1, r._index++)), l.previous = e;
	}
	function y(e, t) {
		let n = t || {};
		return n.type = e, n.start = m(), l.events.push([
			"enter",
			n,
			l
		]), s.push(n), n;
	}
	function b(e) {
		let t = s.pop();
		return t.end = m(), l.events.push([
			"exit",
			t,
			l
		]), t;
	}
	function x(e, t) {
		w(e, t.from);
	}
	function S(e, t) {
		t.restore();
	}
	function C(e, t) {
		return n;
		function n(n, r, i) {
			let a, o, s, u;
			return Array.isArray(n) ? f(n) : "tokenize" in n ? f([n]) : d(n);
			function d(e) {
				return t;
				function t(t) {
					let n = t !== null && e[t], r = t !== null && e.null;
					return f([...Array.isArray(n) ? n : n ? [n] : [], ...Array.isArray(r) ? r : r ? [r] : []])(t);
				}
			}
			function f(e) {
				return a = e, o = 0, e.length === 0 ? i : p(e[o]);
			}
			function p(e) {
				return n;
				function n(n) {
					return u = T(), s = e, e.partial || (l.currentConstruct = e), e.name && l.parser.constructs.disable.null.includes(e.name) ? h(n) : e.tokenize.call(t ? Object.assign(Object.create(l), t) : l, c, m, h)(n);
				}
			}
			function m(t) {
				return e(s, u), r;
			}
			function h(e) {
				return u.restore(), ++o < a.length ? p(a[o]) : i;
			}
		}
	}
	function w(e, t) {
		e.resolveAll && !a.includes(e) && a.push(e), e.resolve && wn(l.events, t, l.events.length - t, e.resolve(l.events.slice(t), l)), e.resolveTo && (l.events = e.resolveTo(l.events, l));
	}
	function T() {
		let e = m(), t = l.previous, n = l.currentConstruct, i = l.events.length, a = Array.from(s);
		return {
			from: i,
			restore: o
		};
		function o() {
			r = e, l.previous = t, l.currentConstruct = n, l.events.length = i, s = a, E();
		}
	}
	function E() {
		r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
	}
}
function Zi(e, t) {
	let n = t.start._index, r = t.start._bufferIndex, i = t.end._index, a = t.end._bufferIndex, o;
	if (n === i) o = [e[n].slice(r, a)];
	else {
		if (o = e.slice(n, i), r > -1) {
			let e = o[0];
			typeof e == "string" ? o[0] = e.slice(r) : o.shift();
		}
		a > 0 && o.push(e[i].slice(0, a));
	}
	return o;
}
function Qi(e, t) {
	let n = -1, r = [], i;
	for (; ++n < e.length;) {
		let a = e[n], o;
		if (typeof a == "string") o = a;
		else switch (a) {
			case -5:
				o = "\r";
				break;
			case -4:
				o = "\n";
				break;
			case -3:
				o = "\r\n";
				break;
			case -2:
				o = t ? " " : "	";
				break;
			case -1:
				if (!t && i) continue;
				o = " ";
				break;
			default: o = String.fromCharCode(a);
		}
		i = a === -2, r.push(o);
	}
	return r.join("");
}
//#endregion
//#region node_modules/micromark/lib/parse.js
function $i(e) {
	let t = {
		constructs: Dn([Vi, ...(e || {}).extensions || []]),
		content: n(Gn),
		defined: [],
		document: n(qn),
		flow: n(Ni),
		lazy: {},
		string: n(Ii),
		text: n(Li)
	};
	return t;
	function n(e) {
		return n;
		function n(n) {
			return Xi(t, e, n);
		}
	}
}
//#endregion
//#region node_modules/micromark/lib/postprocess.js
function ea(e) {
	for (; !kr(e););
	return e;
}
//#endregion
//#region node_modules/micromark/lib/preprocess.js
var ta = /[\0\t\n\r]/g;
function na() {
	let e = 1, t = "", n = !0, r;
	return i;
	function i(i, a, o) {
		let s = [], c, l, u, d, f;
		for (i = t + (typeof i == "string" ? i.toString() : new TextDecoder(a || void 0).decode(i)), u = 0, t = "", n &&= (i.charCodeAt(0) === 65279 && u++, void 0); u < i.length;) {
			if (ta.lastIndex = u, c = ta.exec(i), d = c && c.index !== void 0 ? c.index : i.length, f = i.charCodeAt(d), !c) {
				t = i.slice(u);
				break;
			}
			if (f === 10 && u === d && r) s.push(-3), r = void 0;
			else switch (r &&= (s.push(-5), void 0), u < d && (s.push(i.slice(u, d)), e += d - u), f) {
				case 0:
					s.push(65533), e++;
					break;
				case 9:
					for (l = Math.ceil(e / 4) * 4, s.push(-2); e++ < l;) s.push(-1);
					break;
				case 10:
					s.push(-4), e = 1;
					break;
				default: r = !0, e = 1;
			}
			u = d + 1;
		}
		return o && (r && s.push(-5), t && s.push(t), s.push(null)), s;
	}
}
//#endregion
//#region node_modules/micromark-util-decode-string/index.js
var ra = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function ia(e) {
	return e.replace(ra, aa);
}
function aa(e, t, n) {
	if (t) return t;
	if (n.charCodeAt(0) === 35) {
		let e = n.charCodeAt(1), t = e === 120 || e === 88;
		return An(n.slice(t ? 2 : 1), t ? 16 : 10);
	}
	return Cn(n) || e;
}
//#endregion
//#region node_modules/mdast-util-from-markdown/lib/index.js
var oa = {}.hasOwnProperty;
function sa(e, t, n) {
	return t && typeof t == "object" && (n = t, t = void 0), ca(n)(ea($i(n).document().write(na()(e, t, !0))));
}
function ca(e) {
	let t = {
		transforms: [],
		canContainEols: [
			"emphasis",
			"fragment",
			"heading",
			"paragraph",
			"strong"
		],
		enter: {
			autolink: a(Se),
			autolinkProtocol: T,
			autolinkEmail: T,
			atxHeading: a(ye),
			blockQuote: a(me),
			characterEscape: T,
			characterReference: T,
			codeFenced: a(he),
			codeFencedFenceInfo: o,
			codeFencedFenceMeta: o,
			codeIndented: a(he, o),
			codeText: a(ge, o),
			codeTextData: T,
			data: T,
			codeFlowValue: T,
			definition: a(_e),
			definitionDestinationString: o,
			definitionLabelString: o,
			definitionTitleString: o,
			emphasis: a(ve),
			hardBreakEscape: a(be),
			hardBreakTrailing: a(be),
			htmlFlow: a(xe, o),
			htmlFlowData: T,
			htmlText: a(xe, o),
			htmlTextData: T,
			image: a(M),
			label: o,
			link: a(Se),
			listItem: a(we),
			listItemValue: f,
			listOrdered: a(Ce, d),
			listUnordered: a(Ce),
			paragraph: a(Te),
			reference: j,
			referenceString: o,
			resourceDestinationString: o,
			resourceTitleString: o,
			setextHeading: a(ye),
			strong: a(Ee),
			thematicBreak: a(De)
		},
		exit: {
			atxHeading: c(),
			atxHeadingSequence: x,
			autolink: c(),
			autolinkEmail: pe,
			autolinkProtocol: fe,
			blockQuote: c(),
			characterEscapeValue: E,
			characterReferenceMarkerHexadecimal: le,
			characterReferenceMarkerNumeric: le,
			characterReferenceValue: ue,
			characterReference: de,
			codeFenced: c(g),
			codeFencedFence: h,
			codeFencedFenceInfo: p,
			codeFencedFenceMeta: m,
			codeFlowValue: E,
			codeIndented: c(_),
			codeText: c(re),
			codeTextData: E,
			data: E,
			definition: c(),
			definitionDestinationString: b,
			definitionLabelString: v,
			definitionTitleString: y,
			emphasis: c(),
			hardBreakEscape: c(D),
			hardBreakTrailing: c(D),
			htmlFlow: c(te),
			htmlFlowData: E,
			htmlText: c(ne),
			htmlTextData: E,
			image: c(ie),
			label: A,
			labelText: k,
			lineEnding: ee,
			link: c(O),
			listItem: c(),
			listOrdered: c(),
			listUnordered: c(),
			paragraph: c(),
			referenceString: ce,
			resourceDestinationString: ae,
			resourceTitleString: oe,
			resource: se,
			setextHeading: c(w),
			setextHeadingLineSequence: C,
			setextHeadingText: S,
			strong: c(),
			thematicBreak: c()
		}
	};
	ua(t, (e || {}).mdastExtensions || []);
	let n = {};
	return r;
	function r(e) {
		let r = {
			type: "root",
			children: []
		}, a = {
			stack: [r],
			tokenStack: [],
			config: t,
			enter: s,
			exit: l,
			buffer: o,
			resume: u,
			data: n
		}, c = [], d = -1;
		for (; ++d < e.length;) (e[d][1].type === "listOrdered" || e[d][1].type === "listUnordered") && (e[d][0] === "enter" ? c.push(d) : d = i(e, c.pop(), d));
		for (d = -1; ++d < e.length;) {
			let n = t[e[d][0]];
			oa.call(n, e[d][1].type) && n[e[d][1].type].call(Object.assign({ sliceSerialize: e[d][2].sliceSerialize }, a), e[d][1]);
		}
		if (a.tokenStack.length > 0) {
			let e = a.tokenStack[a.tokenStack.length - 1];
			(e[1] || fa).call(a, void 0, e[0]);
		}
		for (r.position = {
			start: la(e.length > 0 ? e[0][1].start : {
				line: 1,
				column: 1,
				offset: 0
			}),
			end: la(e.length > 0 ? e[e.length - 2][1].end : {
				line: 1,
				column: 1,
				offset: 0
			})
		}, d = -1; ++d < t.transforms.length;) r = t.transforms[d](r) || r;
		return r;
	}
	function i(e, t, n) {
		let r = t - 1, i = -1, a = !1, o, s, c, l;
		for (; ++r <= n;) {
			let t = e[r];
			switch (t[1].type) {
				case "listUnordered":
				case "listOrdered":
				case "blockQuote":
					t[0] === "enter" ? i++ : i--, l = void 0;
					break;
				case "lineEndingBlank":
					t[0] === "enter" && (o && !l && !i && !c && (c = r), l = void 0);
					break;
				case "linePrefix":
				case "listItemValue":
				case "listItemMarker":
				case "listItemPrefix":
				case "listItemPrefixWhitespace": break;
				default: l = void 0;
			}
			if (!i && t[0] === "enter" && t[1].type === "listItemPrefix" || i === -1 && t[0] === "exit" && (t[1].type === "listUnordered" || t[1].type === "listOrdered")) {
				if (o) {
					let i = r;
					for (s = void 0; i--;) {
						let t = e[i];
						if (t[1].type === "lineEnding" || t[1].type === "lineEndingBlank") {
							if (t[0] === "exit") continue;
							s && (e[s][1].type = "lineEndingBlank", a = !0), t[1].type = "lineEnding", s = i;
						} else if (!(t[1].type === "linePrefix" || t[1].type === "blockQuotePrefix" || t[1].type === "blockQuotePrefixWhitespace" || t[1].type === "blockQuoteMarker" || t[1].type === "listItemIndent")) break;
					}
					c && (!s || c < s) && (o._spread = !0), o.end = Object.assign({}, s ? e[s][1].start : t[1].end), e.splice(s || r, 0, [
						"exit",
						o,
						t[2]
					]), r++, n++;
				}
				if (t[1].type === "listItemPrefix") {
					let i = {
						type: "listItem",
						_spread: !1,
						start: Object.assign({}, t[1].start),
						end: void 0
					};
					o = i, e.splice(r, 0, [
						"enter",
						i,
						t[2]
					]), r++, n++, c = void 0, l = !0;
				}
			}
		}
		return e[t][1]._spread = a, n;
	}
	function a(e, t) {
		return n;
		function n(n) {
			s.call(this, e(n), n), t && t.call(this, n);
		}
	}
	function o() {
		this.stack.push({
			type: "fragment",
			children: []
		});
	}
	function s(e, t, n) {
		this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push([t, n || void 0]), e.position = {
			start: la(t.start),
			end: void 0
		};
	}
	function c(e) {
		return t;
		function t(t) {
			e && e.call(this, t), l.call(this, t);
		}
	}
	function l(e, t) {
		let n = this.stack.pop(), r = this.tokenStack.pop();
		if (r) r[0].type !== e.type && (t ? t.call(this, e, r[0]) : (r[1] || fa).call(this, e, r[0]));
		else throw Error("Cannot close `" + e.type + "` (" + It({
			start: e.start,
			end: e.end
		}) + "): it’s not open");
		n.position.end = la(e.end);
	}
	function u() {
		return vn(this.stack.pop());
	}
	function d() {
		this.data.expectingFirstListItemValue = !0;
	}
	function f(e) {
		if (this.data.expectingFirstListItemValue) {
			let t = this.stack[this.stack.length - 2];
			t.start = Number.parseInt(this.sliceSerialize(e), 10), this.data.expectingFirstListItemValue = void 0;
		}
	}
	function p() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.lang = e;
	}
	function m() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.meta = e;
	}
	function h() {
		this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
	}
	function g() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
	}
	function _() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e.replace(/(\r?\n|\r)$/g, "");
	}
	function v(e) {
		let t = this.resume(), n = this.stack[this.stack.length - 1];
		n.label = t, n.identifier = jn(this.sliceSerialize(e)).toLowerCase();
	}
	function y() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.title = e;
	}
	function b() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.url = e;
	}
	function x(e) {
		let t = this.stack[this.stack.length - 1];
		t.depth ||= this.sliceSerialize(e).length;
	}
	function S() {
		this.data.setextHeadingSlurpLineEnding = !0;
	}
	function C(e) {
		let t = this.stack[this.stack.length - 1];
		t.depth = this.sliceSerialize(e).codePointAt(0) === 61 ? 1 : 2;
	}
	function w() {
		this.data.setextHeadingSlurpLineEnding = void 0;
	}
	function T(e) {
		let t = this.stack[this.stack.length - 1].children, n = t[t.length - 1];
		(!n || n.type !== "text") && (n = N(), n.position = {
			start: la(e.start),
			end: void 0
		}, t.push(n)), this.stack.push(n);
	}
	function E(e) {
		let t = this.stack.pop();
		t.value += this.sliceSerialize(e), t.position.end = la(e.end);
	}
	function ee(e) {
		let n = this.stack[this.stack.length - 1];
		if (this.data.atHardBreak) {
			let t = n.children[n.children.length - 1];
			t.position.end = la(e.end), this.data.atHardBreak = void 0;
			return;
		}
		!this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(n.type) && (T.call(this, e), E.call(this, e));
	}
	function D() {
		this.data.atHardBreak = !0;
	}
	function te() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function ne() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function re() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function O() {
		let e = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			let t = this.data.referenceType || "shortcut";
			e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
		} else delete e.identifier, delete e.label;
		this.data.referenceType = void 0;
	}
	function ie() {
		let e = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			let t = this.data.referenceType || "shortcut";
			e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
		} else delete e.identifier, delete e.label;
		this.data.referenceType = void 0;
	}
	function k(e) {
		let t = this.sliceSerialize(e), n = this.stack[this.stack.length - 2];
		n.label = ia(t), n.identifier = jn(t).toLowerCase();
	}
	function A() {
		let e = this.stack[this.stack.length - 1], t = this.resume(), n = this.stack[this.stack.length - 1];
		this.data.inReference = !0, n.type === "link" ? n.children = e.children : n.alt = t;
	}
	function ae() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.url = e;
	}
	function oe() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.title = e;
	}
	function se() {
		this.data.inReference = void 0;
	}
	function j() {
		this.data.referenceType = "collapsed";
	}
	function ce(e) {
		let t = this.resume(), n = this.stack[this.stack.length - 1];
		n.label = t, n.identifier = jn(this.sliceSerialize(e)).toLowerCase(), this.data.referenceType = "full";
	}
	function le(e) {
		this.data.characterReferenceType = e.type;
	}
	function ue(e) {
		let t = this.sliceSerialize(e), n = this.data.characterReferenceType, r;
		n ? (r = An(t, n === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : r = Cn(t);
		let i = this.stack[this.stack.length - 1];
		i.value += r;
	}
	function de(e) {
		let t = this.stack.pop();
		t.position.end = la(e.end);
	}
	function fe(e) {
		E.call(this, e);
		let t = this.stack[this.stack.length - 1];
		t.url = this.sliceSerialize(e);
	}
	function pe(e) {
		E.call(this, e);
		let t = this.stack[this.stack.length - 1];
		t.url = "mailto:" + this.sliceSerialize(e);
	}
	function me() {
		return {
			type: "blockquote",
			children: []
		};
	}
	function he() {
		return {
			type: "code",
			lang: null,
			meta: null,
			value: ""
		};
	}
	function ge() {
		return {
			type: "inlineCode",
			value: ""
		};
	}
	function _e() {
		return {
			type: "definition",
			identifier: "",
			label: null,
			title: null,
			url: ""
		};
	}
	function ve() {
		return {
			type: "emphasis",
			children: []
		};
	}
	function ye() {
		return {
			type: "heading",
			depth: 0,
			children: []
		};
	}
	function be() {
		return { type: "break" };
	}
	function xe() {
		return {
			type: "html",
			value: ""
		};
	}
	function M() {
		return {
			type: "image",
			title: null,
			url: "",
			alt: null
		};
	}
	function Se() {
		return {
			type: "link",
			title: null,
			url: "",
			children: []
		};
	}
	function Ce(e) {
		return {
			type: "list",
			ordered: e.type === "listOrdered",
			start: null,
			spread: e._spread,
			children: []
		};
	}
	function we(e) {
		return {
			type: "listItem",
			spread: e._spread,
			checked: null,
			children: []
		};
	}
	function Te() {
		return {
			type: "paragraph",
			children: []
		};
	}
	function Ee() {
		return {
			type: "strong",
			children: []
		};
	}
	function N() {
		return {
			type: "text",
			value: ""
		};
	}
	function De() {
		return { type: "thematicBreak" };
	}
}
function la(e) {
	return {
		line: e.line,
		column: e.column,
		offset: e.offset
	};
}
function ua(e, t) {
	let n = -1;
	for (; ++n < t.length;) {
		let r = t[n];
		Array.isArray(r) ? ua(e, r) : da(e, r);
	}
}
function da(e, t) {
	let n;
	for (n in t) if (oa.call(t, n)) switch (n) {
		case "canContainEols": {
			let r = t[n];
			r && e[n].push(...r);
			break;
		}
		case "transforms": {
			let r = t[n];
			r && e[n].push(...r);
			break;
		}
		case "enter":
		case "exit": {
			let r = t[n];
			r && Object.assign(e[n], r);
			break;
		}
	}
}
function fa(e, t) {
	throw Error(e ? "Cannot close `" + e.type + "` (" + It({
		start: e.start,
		end: e.end
	}) + "): a different token (`" + t.type + "`, " + It({
		start: t.start,
		end: t.end
	}) + ") is open" : "Cannot close document, a token (`" + t.type + "`, " + It({
		start: t.start,
		end: t.end
	}) + ") is still open");
}
//#endregion
//#region node_modules/remark-parse/lib/index.js
function pa(e) {
	let t = this;
	t.parser = n;
	function n(n) {
		return sa(n, {
			...t.data("settings"),
			...e,
			extensions: t.data("micromarkExtensions") || [],
			mdastExtensions: t.data("fromMarkdownExtensions") || []
		});
	}
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/blockquote.js
function ma(e, t) {
	let n = {
		type: "element",
		tagName: "blockquote",
		properties: {},
		children: e.wrap(e.all(t), !0)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/break.js
function ha(e, t) {
	let n = {
		type: "element",
		tagName: "br",
		properties: {},
		children: []
	};
	return e.patch(t, n), [e.applyData(t, n), {
		type: "text",
		value: "\n"
	}];
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/code.js
function ga(e, t) {
	let n = t.value ? t.value + "\n" : "", r = {}, i = t.lang ? t.lang.split(/\s+/) : [];
	i.length > 0 && (r.className = ["language-" + i[0]]);
	let a = {
		type: "element",
		tagName: "code",
		properties: r,
		children: [{
			type: "text",
			value: n
		}]
	};
	return t.meta && (a.data = { meta: t.meta }), e.patch(t, a), a = e.applyData(t, a), a = {
		type: "element",
		tagName: "pre",
		properties: {},
		children: [a]
	}, e.patch(t, a), a;
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/delete.js
function _a(e, t) {
	let n = {
		type: "element",
		tagName: "del",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/emphasis.js
function va(e, t) {
	let n = {
		type: "element",
		tagName: "em",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js
function ya(e, t) {
	let n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = Un(r.toLowerCase()), a = e.footnoteOrder.indexOf(r), o, s = e.footnoteCounts.get(r);
	s === void 0 ? (s = 0, e.footnoteOrder.push(r), o = e.footnoteOrder.length) : o = a + 1, s += 1, e.footnoteCounts.set(r, s);
	let c = {
		type: "element",
		tagName: "a",
		properties: {
			href: "#" + n + "fn-" + i,
			id: n + "fnref-" + i + (s > 1 ? "-" + s : ""),
			dataFootnoteRef: !0,
			ariaDescribedBy: ["footnote-label"]
		},
		children: [{
			type: "text",
			value: String(o)
		}]
	};
	e.patch(t, c);
	let l = {
		type: "element",
		tagName: "sup",
		properties: {},
		children: [c]
	};
	return e.patch(t, l), e.applyData(t, l);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/heading.js
function ba(e, t) {
	let n = {
		type: "element",
		tagName: "h" + t.depth,
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/html.js
function xa(e, t) {
	if (e.options.allowDangerousHtml) {
		let n = {
			type: "raw",
			value: t.value
		};
		return e.patch(t, n), e.applyData(t, n);
	}
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/revert.js
function Sa(e, t) {
	let n = t.referenceType, r = "]";
	if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference") return [{
		type: "text",
		value: "![" + t.alt + r
	}];
	let i = e.all(t), a = i[0];
	a && a.type === "text" ? a.value = "[" + a.value : i.unshift({
		type: "text",
		value: "["
	});
	let o = i[i.length - 1];
	return o && o.type === "text" ? o.value += r : i.push({
		type: "text",
		value: r
	}), i;
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/image-reference.js
function Ca(e, t) {
	let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
	if (!r) return Sa(e, t);
	let i = {
		src: Un(r.url || ""),
		alt: t.alt
	};
	r.title !== null && r.title !== void 0 && (i.title = r.title);
	let a = {
		type: "element",
		tagName: "img",
		properties: i,
		children: []
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/image.js
function wa(e, t) {
	let n = { src: Un(t.url) };
	t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
	let r = {
		type: "element",
		tagName: "img",
		properties: n,
		children: []
	};
	return e.patch(t, r), e.applyData(t, r);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/inline-code.js
function Ta(e, t) {
	let n = {
		type: "text",
		value: t.value.replace(/\r?\n|\r/g, " ")
	};
	e.patch(t, n);
	let r = {
		type: "element",
		tagName: "code",
		properties: {},
		children: [n]
	};
	return e.patch(t, r), e.applyData(t, r);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/link-reference.js
function Ea(e, t) {
	let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
	if (!r) return Sa(e, t);
	let i = { href: Un(r.url || "") };
	r.title !== null && r.title !== void 0 && (i.title = r.title);
	let a = {
		type: "element",
		tagName: "a",
		properties: i,
		children: e.all(t)
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/link.js
function Da(e, t) {
	let n = { href: Un(t.url) };
	t.title !== null && t.title !== void 0 && (n.title = t.title);
	let r = {
		type: "element",
		tagName: "a",
		properties: n,
		children: e.all(t)
	};
	return e.patch(t, r), e.applyData(t, r);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/list-item.js
function q(e, t, n) {
	let r = e.all(t), i = n ? Oa(n) : ka(t), a = {}, o = [];
	if (typeof t.checked == "boolean") {
		let e = r[0], n;
		e && e.type === "element" && e.tagName === "p" ? n = e : (n = {
			type: "element",
			tagName: "p",
			properties: {},
			children: []
		}, r.unshift(n)), n.children.length > 0 && n.children.unshift({
			type: "text",
			value: " "
		}), n.children.unshift({
			type: "element",
			tagName: "input",
			properties: {
				type: "checkbox",
				checked: t.checked,
				disabled: !0
			},
			children: []
		}), a.className = ["task-list-item"];
	}
	let s = -1;
	for (; ++s < r.length;) {
		let e = r[s];
		(i || s !== 0 || e.type !== "element" || e.tagName !== "p") && o.push({
			type: "text",
			value: "\n"
		}), e.type === "element" && e.tagName === "p" && !i ? o.push(...e.children) : o.push(e);
	}
	let c = r[r.length - 1];
	c && (i || c.type !== "element" || c.tagName !== "p") && o.push({
		type: "text",
		value: "\n"
	});
	let l = {
		type: "element",
		tagName: "li",
		properties: a,
		children: o
	};
	return e.patch(t, l), e.applyData(t, l);
}
function Oa(e) {
	let t = !1;
	if (e.type === "list") {
		t = e.spread || !1;
		let n = e.children, r = -1;
		for (; !t && ++r < n.length;) t = ka(n[r]);
	}
	return t;
}
function ka(e) {
	return e.spread ?? e.children.length > 1;
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/list.js
function Aa(e, t) {
	let n = {}, r = e.all(t), i = -1;
	for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length;) {
		let e = r[i];
		if (e.type === "element" && e.tagName === "li" && e.properties && Array.isArray(e.properties.className) && e.properties.className.includes("task-list-item")) {
			n.className = ["contains-task-list"];
			break;
		}
	}
	let a = {
		type: "element",
		tagName: t.ordered ? "ol" : "ul",
		properties: n,
		children: e.wrap(r, !0)
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/paragraph.js
function ja(e, t) {
	let n = {
		type: "element",
		tagName: "p",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/root.js
function Ma(e, t) {
	let n = {
		type: "root",
		children: e.wrap(e.all(t))
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/strong.js
function Na(e, t) {
	let n = {
		type: "element",
		tagName: "strong",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/table.js
function Pa(e, t) {
	let n = e.all(t), r = n.shift(), i = [];
	if (r) {
		let n = {
			type: "element",
			tagName: "thead",
			properties: {},
			children: e.wrap([r], !0)
		};
		e.patch(t.children[0], n), i.push(n);
	}
	if (n.length > 0) {
		let r = {
			type: "element",
			tagName: "tbody",
			properties: {},
			children: e.wrap(n, !0)
		}, a = Nt(t.children[1]), o = Mt(t.children[t.children.length - 1]);
		a && o && (r.position = {
			start: a,
			end: o
		}), i.push(r);
	}
	let a = {
		type: "element",
		tagName: "table",
		properties: {},
		children: e.wrap(i, !0)
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/table-row.js
function Fa(e, t, n) {
	let r = n ? n.children : void 0, i = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", a = n && n.type === "table" ? n.align : void 0, o = a ? a.length : t.children.length, s = -1, c = [];
	for (; ++s < o;) {
		let n = t.children[s], r = {}, o = a ? a[s] : void 0;
		o && (r.align = o);
		let l = {
			type: "element",
			tagName: i,
			properties: r,
			children: []
		};
		n && (l.children = e.all(n), e.patch(n, l), l = e.applyData(n, l)), c.push(l);
	}
	let l = {
		type: "element",
		tagName: "tr",
		properties: {},
		children: e.wrap(c, !0)
	};
	return e.patch(t, l), e.applyData(t, l);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/table-cell.js
function Ia(e, t) {
	let n = {
		type: "element",
		tagName: "td",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/trim-lines/index.js
var La = 9, Ra = 32;
function za(e) {
	let t = String(e), n = /\r?\n|\r/g, r = n.exec(t), i = 0, a = [];
	for (; r;) a.push(Ba(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
	return a.push(Ba(t.slice(i), i > 0, !1)), a.join("");
}
function Ba(e, t, n) {
	let r = 0, i = e.length;
	if (t) {
		let t = e.codePointAt(r);
		for (; t === La || t === Ra;) r++, t = e.codePointAt(r);
	}
	if (n) {
		let t = e.codePointAt(i - 1);
		for (; t === La || t === Ra;) i--, t = e.codePointAt(i - 1);
	}
	return i > r ? e.slice(r, i) : "";
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/text.js
function Va(e, t) {
	let n = {
		type: "text",
		value: za(String(t.value))
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js
function Ha(e, t) {
	let n = {
		type: "element",
		tagName: "hr",
		properties: {},
		children: []
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/index.js
var Ua = {
	blockquote: ma,
	break: ha,
	code: ga,
	delete: _a,
	emphasis: va,
	footnoteReference: ya,
	heading: ba,
	html: xa,
	imageReference: Ca,
	image: wa,
	inlineCode: Ta,
	linkReference: Ea,
	link: Da,
	listItem: q,
	list: Aa,
	paragraph: ja,
	root: Ma,
	strong: Na,
	table: Pa,
	tableCell: Ia,
	tableRow: Fa,
	text: Va,
	thematicBreak: Ha,
	toml: Wa,
	yaml: Wa,
	definition: Wa,
	footnoteDefinition: Wa
};
function Wa() {}
//#endregion
//#region node_modules/@ungap/structured-clone/esm/deserialize.js
var Ga = typeof self == "object" ? self : globalThis, Ka = (e, t) => {
	let n = (t, n) => (e.set(n, t), t), r = (i) => {
		if (e.has(i)) return e.get(i);
		let [a, o] = t[i];
		switch (a) {
			case 0:
			case -1: return n(o, i);
			case 1: {
				let e = n([], i);
				for (let t of o) e.push(r(t));
				return e;
			}
			case 2: {
				let e = n({}, i);
				for (let [t, n] of o) e[r(t)] = r(n);
				return e;
			}
			case 3: return n(new Date(o), i);
			case 4: {
				let { source: e, flags: t } = o;
				return n(new RegExp(e, t), i);
			}
			case 5: {
				let e = n(/* @__PURE__ */ new Map(), i);
				for (let [t, n] of o) e.set(r(t), r(n));
				return e;
			}
			case 6: {
				let e = n(/* @__PURE__ */ new Set(), i);
				for (let t of o) e.add(r(t));
				return e;
			}
			case 7: {
				let { name: e, message: t } = o;
				return n(new Ga[e](t), i);
			}
			case 8: return n(BigInt(o), i);
			case "BigInt": return n(Object(BigInt(o)), i);
			case "ArrayBuffer": return n(new Uint8Array(o).buffer, o);
			case "DataView": {
				let { buffer: e } = new Uint8Array(o);
				return n(new DataView(e), o);
			}
		}
		return n(new Ga[a](o), i);
	};
	return r;
}, qa = (e) => Ka(/* @__PURE__ */ new Map(), e)(0), Ja = "", { toString: Ya } = {}, { keys: Xa } = Object, Za = (e) => {
	let t = typeof e;
	if (t !== "object" || !e) return [0, t];
	let n = Ya.call(e).slice(8, -1);
	switch (n) {
		case "Array": return [1, Ja];
		case "Object": return [2, Ja];
		case "Date": return [3, Ja];
		case "RegExp": return [4, Ja];
		case "Map": return [5, Ja];
		case "Set": return [6, Ja];
		case "DataView": return [1, n];
	}
	return n.includes("Array") ? [1, n] : n.includes("Error") ? [7, n] : [2, n];
}, Qa = ([e, t]) => e === 0 && (t === "function" || t === "symbol"), $a = (e, t, n, r) => {
	let i = (e, t) => {
		let i = r.push(e) - 1;
		return n.set(t, i), i;
	}, a = (r) => {
		if (n.has(r)) return n.get(r);
		let [o, s] = Za(r);
		switch (o) {
			case 0: {
				let t = r;
				switch (s) {
					case "bigint":
						o = 8, t = r.toString();
						break;
					case "function":
					case "symbol":
						if (e) throw TypeError("unable to serialize " + s);
						t = null;
						break;
					case "undefined": return i([-1], r);
				}
				return i([o, t], r);
			}
			case 1: {
				if (s) {
					let e = r;
					return s === "DataView" ? e = new Uint8Array(r.buffer) : s === "ArrayBuffer" && (e = new Uint8Array(r)), i([s, [...e]], r);
				}
				let e = [], t = i([o, e], r);
				for (let t of r) e.push(a(t));
				return t;
			}
			case 2: {
				if (s) switch (s) {
					case "BigInt": return i([s, r.toString()], r);
					case "Boolean":
					case "Number":
					case "String": return i([s, r.valueOf()], r);
				}
				if (t && "toJSON" in r) return a(r.toJSON());
				let n = [], c = i([o, n], r);
				for (let t of Xa(r)) (e || !Qa(Za(r[t]))) && n.push([a(t), a(r[t])]);
				return c;
			}
			case 3: return i([o, r.toISOString()], r);
			case 4: {
				let { source: e, flags: t } = r;
				return i([o, {
					source: e,
					flags: t
				}], r);
			}
			case 5: {
				let t = [], n = i([o, t], r);
				for (let [n, i] of r) (e || !(Qa(Za(n)) || Qa(Za(i)))) && t.push([a(n), a(i)]);
				return n;
			}
			case 6: {
				let t = [], n = i([o, t], r);
				for (let n of r) (e || !Qa(Za(n))) && t.push(a(n));
				return n;
			}
		}
		let { message: c } = r;
		return i([o, {
			name: s,
			message: c
		}], r);
	};
	return a;
}, eo = (e, { json: t, lossy: n } = {}) => {
	let r = [];
	return $a(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, to = typeof structuredClone == "function" ? (e, t) => t && ("json" in t || "lossy" in t) ? qa(eo(e, t)) : structuredClone(e) : (e, t) => qa(eo(e, t));
//#endregion
//#region node_modules/mdast-util-to-hast/lib/footer.js
function no(e, t) {
	let n = [{
		type: "text",
		value: "↩"
	}];
	return t > 1 && n.push({
		type: "element",
		tagName: "sup",
		properties: {},
		children: [{
			type: "text",
			value: String(t)
		}]
	}), n;
}
function ro(e, t) {
	return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function io(e) {
	let t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || no, r = e.options.footnoteBackLabel || ro, i = e.options.footnoteLabel || "Footnotes", a = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || { className: ["sr-only"] }, s = [], c = -1;
	for (; ++c < e.footnoteOrder.length;) {
		let i = e.footnoteById.get(e.footnoteOrder[c]);
		if (!i) continue;
		let a = e.all(i), o = String(i.identifier).toUpperCase(), l = Un(o.toLowerCase()), u = 0, d = [], f = e.footnoteCounts.get(o);
		for (; f !== void 0 && ++u <= f;) {
			d.length > 0 && d.push({
				type: "text",
				value: " "
			});
			let e = typeof n == "string" ? n : n(c, u);
			typeof e == "string" && (e = {
				type: "text",
				value: e
			}), d.push({
				type: "element",
				tagName: "a",
				properties: {
					href: "#" + t + "fnref-" + l + (u > 1 ? "-" + u : ""),
					dataFootnoteBackref: "",
					ariaLabel: typeof r == "string" ? r : r(c, u),
					className: ["data-footnote-backref"]
				},
				children: Array.isArray(e) ? e : [e]
			});
		}
		let p = a[a.length - 1];
		if (p && p.type === "element" && p.tagName === "p") {
			let e = p.children[p.children.length - 1];
			e && e.type === "text" ? e.value += " " : p.children.push({
				type: "text",
				value: " "
			}), p.children.push(...d);
		} else a.push(...d);
		let m = {
			type: "element",
			tagName: "li",
			properties: { id: t + "fn-" + l },
			children: e.wrap(a, !0)
		};
		e.patch(i, m), s.push(m);
	}
	if (s.length !== 0) return {
		type: "element",
		tagName: "section",
		properties: {
			dataFootnotes: !0,
			className: ["footnotes"]
		},
		children: [
			{
				type: "element",
				tagName: a,
				properties: {
					...to(o),
					id: "footnote-label"
				},
				children: [{
					type: "text",
					value: i
				}]
			},
			{
				type: "text",
				value: "\n"
			},
			{
				type: "element",
				tagName: "ol",
				properties: {},
				children: e.wrap(s, !0)
			},
			{
				type: "text",
				value: "\n"
			}
		]
	};
}
//#endregion
//#region node_modules/unist-util-is/lib/index.js
var ao = (function(e) {
	if (e == null) return uo;
	if (typeof e == "function") return lo(e);
	if (typeof e == "object") return Array.isArray(e) ? oo(e) : so(e);
	if (typeof e == "string") return co(e);
	throw Error("Expected function, string, or object as test");
});
function oo(e) {
	let t = [], n = -1;
	for (; ++n < e.length;) t[n] = ao(e[n]);
	return lo(r);
	function r(...e) {
		let n = -1;
		for (; ++n < t.length;) if (t[n].apply(this, e)) return !0;
		return !1;
	}
}
function so(e) {
	let t = e;
	return lo(n);
	function n(n) {
		let r = n, i;
		for (i in e) if (r[i] !== t[i]) return !1;
		return !0;
	}
}
function co(e) {
	return lo(t);
	function t(t) {
		return t && t.type === e;
	}
}
function lo(e) {
	return t;
	function t(t, n, r) {
		return !!(fo(t) && e.call(this, t, typeof n == "number" ? n : void 0, r || void 0));
	}
}
function uo() {
	return !0;
}
function fo(e) {
	return typeof e == "object" && !!e && "type" in e;
}
//#endregion
//#region node_modules/unist-util-visit-parents/lib/color.js
function po(e) {
	return e;
}
//#endregion
//#region node_modules/unist-util-visit-parents/lib/index.js
var mo = [];
function ho(e, t, n, r) {
	let i;
	typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
	let a = ao(i), o = r ? -1 : 1;
	s(e, void 0, [])();
	function s(e, i, c) {
		let l = e && typeof e == "object" ? e : {};
		if (typeof l.type == "string") {
			let t = typeof l.tagName == "string" ? l.tagName : typeof l.name == "string" ? l.name : void 0;
			Object.defineProperty(u, "name", { value: "node (" + po(e.type + (t ? "<" + t + ">" : "")) + ")" });
		}
		return u;
		function u() {
			let l = mo, u, d, f;
			if ((!t || a(e, i, c[c.length - 1] || void 0)) && (l = go(n(e, c)), l[0] === !1)) return l;
			if ("children" in e && e.children) {
				let t = e;
				if (t.children && l[0] !== "skip") for (d = (r ? t.children.length : -1) + o, f = c.concat(t); d > -1 && d < t.children.length;) {
					let e = t.children[d];
					if (u = s(e, d, f)(), u[0] === !1) return u;
					d = typeof u[1] == "number" ? u[1] : d + o;
				}
			}
			return l;
		}
	}
}
function go(e) {
	return Array.isArray(e) ? e : typeof e == "number" ? [!0, e] : e == null ? mo : [e];
}
//#endregion
//#region node_modules/unist-util-visit/lib/index.js
function _o(e, t, n, r) {
	let i, a, o;
	typeof t == "function" && typeof n != "function" ? (a = void 0, o = t, i = n) : (a = t, o = n, i = r), ho(e, a, s, i);
	function s(e, t) {
		let n = t[t.length - 1], r = n ? n.children.indexOf(e) : void 0;
		return o(e, r, n);
	}
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/state.js
var vo = {}.hasOwnProperty, yo = {};
function bo(e, t) {
	let n = t || yo, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = {
		all: s,
		applyData: So,
		definitionById: r,
		footnoteById: i,
		footnoteCounts: /* @__PURE__ */ new Map(),
		footnoteOrder: [],
		handlers: {
			...Ua,
			...n.handlers
		},
		one: o,
		options: n,
		patch: xo,
		wrap: wo
	};
	return _o(e, function(e) {
		if (e.type === "definition" || e.type === "footnoteDefinition") {
			let t = e.type === "definition" ? r : i, n = String(e.identifier).toUpperCase();
			t.has(n) || t.set(n, e);
		}
	}), a;
	function o(e, t) {
		let n = e.type, r = a.handlers[n];
		if (vo.call(a.handlers, n) && r) return r(a, e, t);
		if (a.options.passThrough && a.options.passThrough.includes(n)) {
			if ("children" in e) {
				let { children: t, ...n } = e, r = to(n);
				return r.children = a.all(e), r;
			}
			return to(e);
		}
		return (a.options.unknownHandler || Co)(a, e, t);
	}
	function s(e) {
		let t = [];
		if ("children" in e) {
			let n = e.children, r = -1;
			for (; ++r < n.length;) {
				let i = a.one(n[r], e);
				if (i) {
					if (r && n[r - 1].type === "break" && (!Array.isArray(i) && i.type === "text" && (i.value = To(i.value)), !Array.isArray(i) && i.type === "element")) {
						let e = i.children[0];
						e && e.type === "text" && (e.value = To(e.value));
					}
					Array.isArray(i) ? t.push(...i) : t.push(i);
				}
			}
		}
		return t;
	}
}
function xo(e, t) {
	e.position && (t.position = Ft(e));
}
function So(e, t) {
	let n = t;
	if (e && e.data) {
		let t = e.data.hName, r = e.data.hChildren, i = e.data.hProperties;
		typeof t == "string" && (n.type === "element" ? n.tagName = t : n = {
			type: "element",
			tagName: t,
			properties: {},
			children: "children" in n ? n.children : [n]
		}), n.type === "element" && i && Object.assign(n.properties, to(i)), "children" in n && n.children && r != null && (n.children = r);
	}
	return n;
}
function Co(e, t) {
	let n = t.data || {}, r = "value" in t && !(vo.call(n, "hProperties") || vo.call(n, "hChildren")) ? {
		type: "text",
		value: t.value
	} : {
		type: "element",
		tagName: "div",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, r), e.applyData(t, r);
}
function wo(e, t) {
	let n = [], r = -1;
	for (t && n.push({
		type: "text",
		value: "\n"
	}); ++r < e.length;) r && n.push({
		type: "text",
		value: "\n"
	}), n.push(e[r]);
	return t && e.length > 0 && n.push({
		type: "text",
		value: "\n"
	}), n;
}
function To(e) {
	let t = 0, n = e.charCodeAt(t);
	for (; n === 9 || n === 32;) t++, n = e.charCodeAt(t);
	return e.slice(t);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/index.js
function Eo(e, t) {
	let n = bo(e, t), r = n.one(e, void 0), i = io(n), a = Array.isArray(r) ? {
		type: "root",
		children: r
	} : r || {
		type: "root",
		children: []
	};
	return i && ("children" in a, a.children.push({
		type: "text",
		value: "\n"
	}, i)), a;
}
//#endregion
//#region node_modules/remark-rehype/lib/index.js
function Do(e, t) {
	return e && "run" in e ? async function(n, r) {
		let i = Eo(n, {
			file: r,
			...t
		});
		await e.run(i, r);
	} : function(n, r) {
		return Eo(n, {
			file: r,
			...e || t
		});
	};
}
//#endregion
//#region node_modules/bail/index.js
function Oo(e) {
	if (e) throw e;
}
//#endregion
//#region node_modules/extend/index.js
var ko = /* @__PURE__ */ s(((e, t) => {
	var n = Object.prototype.hasOwnProperty, r = Object.prototype.toString, i = Object.defineProperty, a = Object.getOwnPropertyDescriptor, o = function(e) {
		return typeof Array.isArray == "function" ? Array.isArray(e) : r.call(e) === "[object Array]";
	}, s = function(e) {
		if (!e || r.call(e) !== "[object Object]") return !1;
		var t = n.call(e, "constructor"), i = e.constructor && e.constructor.prototype && n.call(e.constructor.prototype, "isPrototypeOf");
		if (e.constructor && !t && !i) return !1;
		for (var a in e);
		return a === void 0 || n.call(e, a);
	}, c = function(e, t) {
		i && t.name === "__proto__" ? i(e, t.name, {
			enumerable: !0,
			configurable: !0,
			value: t.newValue,
			writable: !0
		}) : e[t.name] = t.newValue;
	}, l = function(e, t) {
		if (t === "__proto__") {
			if (!n.call(e, t)) return;
			if (a) return a(e, t).value;
		}
		return e[t];
	};
	t.exports = function e() {
		var t, n, r, i, a, u, d = arguments[0], f = 1, p = arguments.length, m = !1;
		for (typeof d == "boolean" && (m = d, d = arguments[1] || {}, f = 2), (d == null || typeof d != "object" && typeof d != "function") && (d = {}); f < p; ++f) if (t = arguments[f], t != null) for (n in t) r = l(d, n), i = l(t, n), d !== i && (m && i && (s(i) || (a = o(i))) ? (a ? (a = !1, u = r && o(r) ? r : []) : u = r && s(r) ? r : {}, c(d, {
			name: n,
			newValue: e(m, u, i)
		})) : i !== void 0 && c(d, {
			name: n,
			newValue: i
		}));
		return d;
	};
}));
//#endregion
//#region node_modules/is-plain-obj/index.js
function Ao(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
//#endregion
//#region node_modules/trough/lib/index.js
function jo() {
	let e = [], t = {
		run: n,
		use: r
	};
	return t;
	function n(...t) {
		let n = -1, r = t.pop();
		if (typeof r != "function") throw TypeError("Expected function as last argument, not " + r);
		i(null, ...t);
		function i(a, ...o) {
			let s = e[++n], c = -1;
			if (a) {
				r(a);
				return;
			}
			for (; ++c < t.length;) (o[c] === null || o[c] === void 0) && (o[c] = t[c]);
			t = o, s ? Mo(s, i)(...o) : r(null, ...o);
		}
	}
	function r(n) {
		if (typeof n != "function") throw TypeError("Expected `middelware` to be a function, not " + n);
		return e.push(n), t;
	}
}
function Mo(e, t) {
	let n;
	return r;
	function r(...t) {
		let r = e.length > t.length, o;
		r && t.push(i);
		try {
			o = e.apply(this, t);
		} catch (e) {
			let t = e;
			if (r && n) throw t;
			return i(t);
		}
		r || (o && o.then && typeof o.then == "function" ? o.then(a, i) : o instanceof Error ? i(o) : a(o));
	}
	function i(e, ...r) {
		n || (n = !0, t(e, ...r));
	}
	function a(e) {
		i(null, e);
	}
}
//#endregion
//#region node_modules/vfile/lib/minpath.browser.js
var No = {
	basename: Po,
	dirname: Fo,
	extname: Io,
	join: Lo,
	sep: "/"
};
function Po(e, t) {
	if (t !== void 0 && typeof t != "string") throw TypeError("\"ext\" argument must be a string");
	Bo(e);
	let n = 0, r = -1, i = e.length, a;
	if (t === void 0 || t.length === 0 || t.length > e.length) {
		for (; i--;) if (e.codePointAt(i) === 47) {
			if (a) {
				n = i + 1;
				break;
			}
		} else r < 0 && (a = !0, r = i + 1);
		return r < 0 ? "" : e.slice(n, r);
	}
	if (t === e) return "";
	let o = -1, s = t.length - 1;
	for (; i--;) if (e.codePointAt(i) === 47) {
		if (a) {
			n = i + 1;
			break;
		}
	} else o < 0 && (a = !0, o = i + 1), s > -1 && (e.codePointAt(i) === t.codePointAt(s--) ? s < 0 && (r = i) : (s = -1, r = o));
	return n === r ? r = o : r < 0 && (r = e.length), e.slice(n, r);
}
function Fo(e) {
	if (Bo(e), e.length === 0) return ".";
	let t = -1, n = e.length, r;
	for (; --n;) if (e.codePointAt(n) === 47) {
		if (r) {
			t = n;
			break;
		}
	} else r ||= !0;
	return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function Io(e) {
	Bo(e);
	let t = e.length, n = -1, r = 0, i = -1, a = 0, o;
	for (; t--;) {
		let s = e.codePointAt(t);
		if (s === 47) {
			if (o) {
				r = t + 1;
				break;
			}
			continue;
		}
		n < 0 && (o = !0, n = t + 1), s === 46 ? i < 0 ? i = t : a !== 1 && (a = 1) : i > -1 && (a = -1);
	}
	return i < 0 || n < 0 || a === 0 || a === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
}
function Lo(...e) {
	let t = -1, n;
	for (; ++t < e.length;) Bo(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
	return n === void 0 ? "." : Ro(n);
}
function Ro(e) {
	Bo(e);
	let t = e.codePointAt(0) === 47, n = zo(e, !t);
	return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function zo(e, t) {
	let n = "", r = 0, i = -1, a = 0, o = -1, s, c;
	for (; ++o <= e.length;) {
		if (o < e.length) s = e.codePointAt(o);
		else if (s === 47) break;
		else s = 47;
		if (s === 47) {
			if (!(i === o - 1 || a === 1)) if (i !== o - 1 && a === 2) {
				if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
					if (n.length > 2) {
						if (c = n.lastIndexOf("/"), c !== n.length - 1) {
							c < 0 ? (n = "", r = 0) : (n = n.slice(0, c), r = n.length - 1 - n.lastIndexOf("/")), i = o, a = 0;
							continue;
						}
					} else if (n.length > 0) {
						n = "", r = 0, i = o, a = 0;
						continue;
					}
				}
				t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
			} else n.length > 0 ? n += "/" + e.slice(i + 1, o) : n = e.slice(i + 1, o), r = o - i - 1;
			i = o, a = 0;
		} else s === 46 && a > -1 ? a++ : a = -1;
	}
	return n;
}
function Bo(e) {
	if (typeof e != "string") throw TypeError("Path must be a string. Received " + JSON.stringify(e));
}
//#endregion
//#region node_modules/vfile/lib/minproc.browser.js
var Vo = { cwd: Ho };
function Ho() {
	return "/";
}
//#endregion
//#region node_modules/vfile/lib/minurl.shared.js
function Uo(e) {
	return !!(typeof e == "object" && e && "href" in e && e.href && "protocol" in e && e.protocol && e.auth === void 0);
}
//#endregion
//#region node_modules/vfile/lib/minurl.browser.js
function Wo(e) {
	if (typeof e == "string") e = new URL(e);
	else if (!Uo(e)) {
		let t = /* @__PURE__ */ TypeError("The \"path\" argument must be of type string or an instance of URL. Received `" + e + "`");
		throw t.code = "ERR_INVALID_ARG_TYPE", t;
	}
	if (e.protocol !== "file:") {
		let e = /* @__PURE__ */ TypeError("The URL must be of scheme file");
		throw e.code = "ERR_INVALID_URL_SCHEME", e;
	}
	return Go(e);
}
function Go(e) {
	if (e.hostname !== "") {
		let e = /* @__PURE__ */ TypeError("File URL host must be \"localhost\" or empty on darwin");
		throw e.code = "ERR_INVALID_FILE_URL_HOST", e;
	}
	let t = e.pathname, n = -1;
	for (; ++n < t.length;) if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
		let e = t.codePointAt(n + 2);
		if (e === 70 || e === 102) {
			let e = /* @__PURE__ */ TypeError("File URL path must not include encoded / characters");
			throw e.code = "ERR_INVALID_FILE_URL_PATH", e;
		}
	}
	return decodeURIComponent(t);
}
//#endregion
//#region node_modules/vfile/lib/index.js
var Ko = [
	"history",
	"path",
	"basename",
	"stem",
	"extname",
	"dirname"
], qo = class {
	constructor(e) {
		let t;
		t = e ? Uo(e) ? { path: e } : typeof e == "string" || J(e) ? { value: e } : e : {}, this.cwd = "cwd" in t ? "" : Vo.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
		let n = -1;
		for (; ++n < Ko.length;) {
			let e = Ko[n];
			e in t && t[e] !== void 0 && t[e] !== null && (this[e] = e === "history" ? [...t[e]] : t[e]);
		}
		let r;
		for (r in t) Ko.includes(r) || (this[r] = t[r]);
	}
	get basename() {
		return typeof this.path == "string" ? No.basename(this.path) : void 0;
	}
	set basename(e) {
		Yo(e, "basename"), Jo(e, "basename"), this.path = No.join(this.dirname || "", e);
	}
	get dirname() {
		return typeof this.path == "string" ? No.dirname(this.path) : void 0;
	}
	set dirname(e) {
		Xo(this.basename, "dirname"), this.path = No.join(e || "", this.basename);
	}
	get extname() {
		return typeof this.path == "string" ? No.extname(this.path) : void 0;
	}
	set extname(e) {
		if (Jo(e, "extname"), Xo(this.dirname, "extname"), e) {
			if (e.codePointAt(0) !== 46) throw Error("`extname` must start with `.`");
			if (e.includes(".", 1)) throw Error("`extname` cannot contain multiple dots");
		}
		this.path = No.join(this.dirname, this.stem + (e || ""));
	}
	get path() {
		return this.history[this.history.length - 1];
	}
	set path(e) {
		Uo(e) && (e = Wo(e)), Yo(e, "path"), this.path !== e && this.history.push(e);
	}
	get stem() {
		return typeof this.path == "string" ? No.basename(this.path, this.extname) : void 0;
	}
	set stem(e) {
		Yo(e, "stem"), Jo(e, "stem"), this.path = No.join(this.dirname || "", e + (this.extname || ""));
	}
	fail(e, t, n) {
		let r = this.message(e, t, n);
		throw r.fatal = !0, r;
	}
	info(e, t, n) {
		let r = this.message(e, t, n);
		return r.fatal = void 0, r;
	}
	message(e, t, n) {
		let r = new Bt(e, t, n);
		return this.path && (r.name = this.path + ":" + r.name, r.file = this.path), r.fatal = !1, this.messages.push(r), r;
	}
	toString(e) {
		return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(e || void 0).decode(this.value);
	}
};
function Jo(e, t) {
	if (e && e.includes(No.sep)) throw Error("`" + t + "` cannot be a path: did not expect `" + No.sep + "`");
}
function Yo(e, t) {
	if (!e) throw Error("`" + t + "` cannot be empty");
}
function Xo(e, t) {
	if (!e) throw Error("Setting `" + t + "` requires `path` to be set too");
}
function J(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
//#endregion
//#region node_modules/unified/lib/callable-instance.js
var Zo = (function(e) {
	let t = this.constructor.prototype, n = t[e], r = function() {
		return n.apply(r, arguments);
	};
	return Object.setPrototypeOf(r, t), r;
}), Qo = /* @__PURE__ */ u(ko(), 1), $o = {}.hasOwnProperty, es = new class e extends Zo {
	constructor() {
		super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = jo();
	}
	copy() {
		let t = new e(), n = -1;
		for (; ++n < this.attachers.length;) {
			let e = this.attachers[n];
			t.use(...e);
		}
		return t.data((0, Qo.default)(!0, {}, this.namespace)), t;
	}
	data(e, t) {
		return typeof e == "string" ? arguments.length === 2 ? (rs("data", this.frozen), this.namespace[e] = t, this) : $o.call(this.namespace, e) && this.namespace[e] || void 0 : e ? (rs("data", this.frozen), this.namespace = e, this) : this.namespace;
	}
	freeze() {
		if (this.frozen) return this;
		let e = this;
		for (; ++this.freezeIndex < this.attachers.length;) {
			let [t, ...n] = this.attachers[this.freezeIndex];
			if (n[0] === !1) continue;
			n[0] === !0 && (n[0] = void 0);
			let r = t.call(e, ...n);
			typeof r == "function" && this.transformers.use(r);
		}
		return this.frozen = !0, this.freezeIndex = Infinity, this;
	}
	parse(e) {
		this.freeze();
		let t = os(e), n = this.parser || this.Parser;
		return ts("parse", n), n(String(t), t);
	}
	process(e, t) {
		let n = this;
		return this.freeze(), ts("process", this.parser || this.Parser), ns("process", this.compiler || this.Compiler), t ? r(void 0, t) : new Promise(r);
		function r(r, i) {
			let a = os(e), o = n.parse(a);
			n.run(o, a, function(e, t, r) {
				if (e || !t || !r) return s(e);
				let i = t, a = n.stringify(i, r);
				cs(a) ? r.value = a : r.result = a, s(e, r);
			});
			function s(e, n) {
				e || !n ? i(e) : r ? r(n) : t(void 0, n);
			}
		}
	}
	processSync(e) {
		let t = !1, n;
		return this.freeze(), ts("processSync", this.parser || this.Parser), ns("processSync", this.compiler || this.Compiler), this.process(e, r), as("processSync", "process", t), n;
		function r(e, r) {
			t = !0, Oo(e), n = r;
		}
	}
	run(e, t, n) {
		is(e), this.freeze();
		let r = this.transformers;
		return !n && typeof t == "function" && (n = t, t = void 0), n ? i(void 0, n) : new Promise(i);
		function i(i, a) {
			let o = os(t);
			r.run(e, o, s);
			function s(t, r, o) {
				let s = r || e;
				t ? a(t) : i ? i(s) : n(void 0, s, o);
			}
		}
	}
	runSync(e, t) {
		let n = !1, r;
		return this.run(e, t, i), as("runSync", "run", n), r;
		function i(e, t) {
			Oo(e), r = t, n = !0;
		}
	}
	stringify(e, t) {
		this.freeze();
		let n = os(t), r = this.compiler || this.Compiler;
		return ns("stringify", r), is(e), r(e, n);
	}
	use(e, ...t) {
		let n = this.attachers, r = this.namespace;
		if (rs("use", this.frozen), e != null) if (typeof e == "function") s(e, t);
		else if (typeof e == "object") Array.isArray(e) ? o(e) : a(e);
		else throw TypeError("Expected usable value, not `" + e + "`");
		return this;
		function i(e) {
			if (typeof e == "function") s(e, []);
			else if (typeof e == "object") if (Array.isArray(e)) {
				let [t, ...n] = e;
				s(t, n);
			} else a(e);
			else throw TypeError("Expected usable value, not `" + e + "`");
		}
		function a(e) {
			if (!("plugins" in e) && !("settings" in e)) throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
			o(e.plugins), e.settings && (r.settings = (0, Qo.default)(!0, r.settings, e.settings));
		}
		function o(e) {
			let t = -1;
			if (e != null) if (Array.isArray(e)) for (; ++t < e.length;) {
				let n = e[t];
				i(n);
			}
			else throw TypeError("Expected a list of plugins, not `" + e + "`");
		}
		function s(e, t) {
			let r = -1, i = -1;
			for (; ++r < n.length;) if (n[r][0] === e) {
				i = r;
				break;
			}
			if (i === -1) n.push([e, ...t]);
			else if (t.length > 0) {
				let [r, ...a] = t, o = n[i][1];
				Ao(o) && Ao(r) && (r = (0, Qo.default)(!0, o, r)), n[i] = [
					e,
					r,
					...a
				];
			}
		}
	}
}().freeze();
function ts(e, t) {
	if (typeof t != "function") throw TypeError("Cannot `" + e + "` without `parser`");
}
function ns(e, t) {
	if (typeof t != "function") throw TypeError("Cannot `" + e + "` without `compiler`");
}
function rs(e, t) {
	if (t) throw Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
}
function is(e) {
	if (!Ao(e) || typeof e.type != "string") throw TypeError("Expected node, got `" + e + "`");
}
function as(e, t, n) {
	if (!n) throw Error("`" + e + "` finished async. Use `" + t + "` instead");
}
function os(e) {
	return ss(e) ? e : new qo(e);
}
function ss(e) {
	return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function cs(e) {
	return typeof e == "string" || ls(e);
}
function ls(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
//#endregion
//#region node_modules/react-markdown/lib/index.js
var us = [], ds = { allowDangerousHtml: !0 }, fs = /^(https?|ircs?|mailto|xmpp)$/i, ps = [
	{
		from: "astPlugins",
		id: "remove-buggy-html-in-markdown-parser"
	},
	{
		from: "allowDangerousHtml",
		id: "remove-buggy-html-in-markdown-parser"
	},
	{
		from: "allowNode",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "allowElement"
	},
	{
		from: "allowedTypes",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "allowedElements"
	},
	{
		from: "disallowedTypes",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "disallowedElements"
	},
	{
		from: "escapeHtml",
		id: "remove-buggy-html-in-markdown-parser"
	},
	{
		from: "includeElementIndex",
		id: "#remove-includeelementindex"
	},
	{
		from: "includeNodeIndex",
		id: "change-includenodeindex-to-includeelementindex"
	},
	{
		from: "linkTarget",
		id: "remove-linktarget"
	},
	{
		from: "plugins",
		id: "change-plugins-to-remarkplugins",
		to: "remarkPlugins"
	},
	{
		from: "rawSourcePos",
		id: "#remove-rawsourcepos"
	},
	{
		from: "renderers",
		id: "change-renderers-to-components",
		to: "components"
	},
	{
		from: "source",
		id: "change-source-to-children",
		to: "children"
	},
	{
		from: "sourcePos",
		id: "#remove-sourcepos"
	},
	{
		from: "transformImageUri",
		id: "#add-urltransform",
		to: "urlTransform"
	},
	{
		from: "transformLinkUri",
		id: "#add-urltransform",
		to: "urlTransform"
	}
];
function Y(e) {
	let t = ms(e), n = hs(e);
	return gs(t.runSync(t.parse(n), n), e);
}
function ms(e) {
	let t = e.rehypePlugins || us, n = e.remarkPlugins || us, r = e.remarkRehypeOptions ? {
		...e.remarkRehypeOptions,
		...ds
	} : ds;
	return es().use(pa).use(n).use(Do, r).use(t);
}
function hs(e) {
	let t = e.children || "", n = new qo();
	return typeof t == "string" ? n.value = t : "" + t, n;
}
function gs(e, t) {
	let n = t.allowedElements, r = t.allowElement, i = t.components, a = t.disallowedElements, o = t.skipHtml, s = t.unwrapDisallowed, c = t.urlTransform || _s;
	for (let e of ps) Object.hasOwn(t, e.from) && "" + e.from + (e.to ? "use `" + e.to + "` instead" : "remove it") + e.id;
	return t.className && (e = {
		type: "element",
		tagName: "div",
		properties: { className: t.className },
		children: e.type === "root" ? e.children : [e]
	}), _o(e, l), qt(e, {
		Fragment: P.Fragment,
		components: i,
		ignoreInvalidStyle: !0,
		jsx: P.jsx,
		jsxs: P.jsxs,
		passKeys: !0,
		passNode: !0
	});
	function l(e, t, i) {
		if (e.type === "raw" && i && typeof t == "number") return o ? i.children.splice(t, 1) : i.children[t] = {
			type: "text",
			value: e.value
		}, t;
		if (e.type === "element") {
			let t;
			for (t in gn) if (Object.hasOwn(gn, t) && Object.hasOwn(e.properties, t)) {
				let n = e.properties[t], r = gn[t];
				(r === null || r.includes(e.tagName)) && (e.properties[t] = c(String(n || ""), t, e));
			}
		}
		if (e.type === "element") {
			let o = n ? !n.includes(e.tagName) : a ? a.includes(e.tagName) : !1;
			if (!o && r && typeof t == "number" && (o = !r(e, t, i)), o && i && typeof t == "number") return s && e.children ? i.children.splice(t, 1, ...e.children) : i.children.splice(t, 1), t;
		}
	}
}
function _s(e) {
	let t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
	return t === -1 || i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || fs.test(e.slice(0, t)) ? e : "";
}
//#endregion
//#region app/js/utils/filter.js
var vs = (e, t, n) => (0, M.isArray)(t) ? t.filter((t) => !!((t.simulation_rounds === void 0 || t.simulation_rounds.includes(e.simulation_round)) && (t.products === void 0 || t.products.filter((t) => e.products.includes(t)).length) && (t.sectors === void 0 || e.sectors.length == 0 || t.sectors.filter((t) => e.sectors.includes(t)).length))).filter((e) => e.hidden != 1).filter((t) => e.simulation_round.endsWith("a") || !n || !e.group3 || t.group3) : [], ys = (e, t) => {
	let n = t[e.simulation_round];
	return (0, M.isPlainObject)(n) ? bs(e, n) : n;
}, bs = (e, t) => (0, M.isEmpty)(e.sectors) ? t : e.sectors.length == 1 ? (0, M.isUndefined)(t[e.sectors[0]]) ? t.other : t[e.sectors[0]] : Object.fromEntries(Object.entries(t).filter((n) => n == "other" ? e.sectors.filter((e) => !Object.keys(t).includes(e)).length > 0 : e.sectors.includes(n))), xs = (e, t) => (0, M.isPlainObject)(t) ? Object.keys(t).every((e) => /^[A-Z]/.test(e)) ? ys(e, t) : bs(e, t) : t, Ss = (e, t, n, r) => n.map((n) => (n.rows = vs(e, t, r).filter((e) => e.group == n.specifier), n.closed = !e.groups.includes(n.specifier), n)).filter((e) => e.rows.length > 0), Cs = function({ config: e, caption: t, rows: n }) {
	return /* @__PURE__ */ (0, P.jsxs)("table", {
		className: "table table-bordered table-fixed",
		children: [
			/* @__PURE__ */ (0, P.jsx)("caption", { children: /* @__PURE__ */ (0, P.jsx)(Y, {
				components: { p: "span" },
				children: t
			}) }),
			/* @__PURE__ */ (0, P.jsx)("thead", {
				className: "thead-dark",
				children: /* @__PURE__ */ (0, P.jsxs)("tr", { children: [/* @__PURE__ */ (0, P.jsx)("th", {
					style: { width: "25%" },
					children: "Specifier"
				}), /* @__PURE__ */ (0, P.jsx)("th", {
					style: { width: "75%" },
					children: "Description"
				})] })
			}),
			/* @__PURE__ */ (0, P.jsx)("tbody", { children: vs(e, n).map((t, n) => /* @__PURE__ */ (0, P.jsxs)("tr", { children: [/* @__PURE__ */ (0, P.jsxs)("td", { children: [/* @__PURE__ */ (0, P.jsx)("strong", { children: t.specifier }), /* @__PURE__ */ (0, P.jsx)("p", { children: /* @__PURE__ */ (0, P.jsx)(ze, {
				config: e,
				sectors: t.sectors
			}) })] }), /* @__PURE__ */ (0, P.jsx)("td", { children: t.description })] }, n)) })
		]
	});
};
Cs.propTypes = {
	config: F.default.object.isRequired,
	caption: F.default.string.isRequired,
	rows: F.default.array.isRequired
};
//#endregion
//#region app/js/components/tables/ClimateForcingTable.jsx
var ws = function({ config: e, caption: t, rows: n }) {
	let r = vs(e, n);
	return /* @__PURE__ */ (0, P.jsx)("div", {
		className: "w-100",
		children: /* @__PURE__ */ (0, P.jsxs)("table", {
			className: "table table-bordered table-fixed",
			children: [
				/* @__PURE__ */ (0, P.jsx)("caption", { children: /* @__PURE__ */ (0, P.jsx)(Y, {
					components: { p: "span" },
					children: t
				}) }),
				/* @__PURE__ */ (0, P.jsx)("thead", {
					className: "thead-dark",
					children: /* @__PURE__ */ (0, P.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, P.jsx)("th", {
							style: { width: "40%" },
							children: "Title"
						}),
						/* @__PURE__ */ (0, P.jsx)("th", {
							style: { width: "15%" },
							children: "Specifier"
						}),
						e.simulation_round.endsWith("a") && /* @__PURE__ */ (0, P.jsxs)(S.Fragment, { children: [
							/* @__PURE__ */ (0, P.jsx)("th", {
								style: { width: "10%" },
								children: "Time period"
							}),
							/* @__PURE__ */ (0, P.jsx)("th", {
								style: { width: "15%" },
								children: "Reanalysis"
							}),
							/* @__PURE__ */ (0, P.jsx)("th", {
								style: { width: "10%" },
								children: "Bias adjustment target"
							})
						] }),
						e.simulation_round.endsWith("b") && /* @__PURE__ */ (0, P.jsxs)(S.Fragment, { children: [/* @__PURE__ */ (0, P.jsx)("th", {
							style: { width: "20%" },
							children: "Native resolution"
						}), /* @__PURE__ */ (0, P.jsx)("th", {
							style: { width: "15%" },
							children: "Ensemble member"
						})] }),
						/* @__PURE__ */ (0, P.jsx)("th", {
							style: { width: "10%" },
							children: "Priority"
						})
					] })
				}),
				/* @__PURE__ */ (0, P.jsxs)("tbody", { children: [r.map((t, n) => /* @__PURE__ */ (0, P.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, P.jsxs)("td", { children: [/* @__PURE__ */ (0, P.jsx)("p", { children: t.url ? /* @__PURE__ */ (0, P.jsx)("a", {
						href: t.url,
						target: "_blank",
						rel: "noreferrer",
						children: t.title
					}) : t.title }), /* @__PURE__ */ (0, P.jsxs)("p", { children: [/* @__PURE__ */ (0, P.jsx)(Ve, {
						config: e,
						simulationRounds: t.simulation_rounds
					}), /* @__PURE__ */ (0, P.jsx)(ze, {
						config: e,
						sectors: t.sectors
					})] })] }),
					/* @__PURE__ */ (0, P.jsx)("td", { children: /* @__PURE__ */ (0, P.jsx)("strong", { children: t.specifier }) }),
					e.simulation_round.endsWith("a") && /* @__PURE__ */ (0, P.jsxs)(S.Fragment, { children: [
						/* @__PURE__ */ (0, P.jsx)("td", { children: t.time_period }),
						/* @__PURE__ */ (0, P.jsx)("td", { children: t.reanalysis }),
						/* @__PURE__ */ (0, P.jsx)("td", { children: t.bias_adjustment_target })
					] }),
					e.simulation_round.endsWith("b") && /* @__PURE__ */ (0, P.jsxs)(S.Fragment, { children: [/* @__PURE__ */ (0, P.jsxs)("td", { children: [/* @__PURE__ */ (0, P.jsxs)("p", { children: ["Atmosphere: ", t.original_resolution.other || t.original_resolution] }), t.original_resolution["marine-fishery_global"] && /* @__PURE__ */ (0, P.jsxs)("p", { children: ["Ocean: ", t.original_resolution["marine-fishery_global"]] })] }), /* @__PURE__ */ (0, P.jsx)("td", { children: t.ensemble_member })] }),
					/* @__PURE__ */ (0, P.jsx)("td", { children: t.priority })
				] }, n)), r.length == 0 && /* @__PURE__ */ (0, P.jsx)("tr", { children: /* @__PURE__ */ (0, P.jsx)("td", {
					colSpan: "7",
					children: "No climate forcing have been defined for this selection of simulation round and sectors, yet."
				}) })] })
			]
		})
	});
};
ws.propTypes = {
	config: F.default.object.isRequired,
	caption: F.default.string.isRequired,
	rows: F.default.array.isRequired
};
//#endregion
//#region app/js/components/links/GroupToggleLink.jsx
var Ts = ({ closed: e, toggle: t, all: n, label: r }) => {
	let i = (e) => {
		e.preventDefault(), t();
	};
	return r ||= n ? "groups" : "group", n ? /* @__PURE__ */ (0, P.jsx)("a", {
		className: "toggle-group",
		href: "",
		onClick: i,
		children: e ? `Show all ${r}` : `Hide all ${r}`
	}) : /* @__PURE__ */ (0, P.jsxs)("a", {
		className: "toggle-group",
		href: "",
		onClick: i,
		children: [
			e ? `Show ${r}` : `Hide ${r}`,
			e && /* @__PURE__ */ (0, P.jsx)("span", {
				className: "toggle-group-down",
				children: "﹀"
			}),
			!e && /* @__PURE__ */ (0, P.jsx)("span", {
				className: "toggle-group-up",
				children: "︿"
			})
		]
	});
};
Ts.propTypes = {
	closed: F.default.boolean,
	toggle: F.default.func,
	all: F.default.boolean,
	label: F.default.string
};
//#endregion
//#region app/js/components/tables/CropTable.jsx
var Es = function({ config: e, caption: t, rows: n, groups: r, toggleGroup: i, toggleGroups: a }) {
	let o = Ss(e, n, r), s = o.every((e) => !e.closed);
	return /* @__PURE__ */ (0, P.jsx)("div", {
		className: "w-50",
		children: /* @__PURE__ */ (0, P.jsxs)("table", {
			className: "table table-bordered table-fixed",
			children: [
				/* @__PURE__ */ (0, P.jsx)("caption", { children: /* @__PURE__ */ (0, P.jsx)(Y, {
					components: { p: "span" },
					children: t
				}) }),
				/* @__PURE__ */ (0, P.jsx)("thead", {
					className: "thead-dark",
					children: /* @__PURE__ */ (0, P.jsxs)("tr", { children: [/* @__PURE__ */ (0, P.jsx)("th", {
						style: { width: "50%" },
						children: "Crop"
					}), /* @__PURE__ */ (0, P.jsxs)("th", {
						style: { width: "50%" },
						children: ["Specifier", /* @__PURE__ */ (0, P.jsx)(Ts, {
							className: "float-right",
							closed: !s,
							all: !0,
							label: "datasets",
							toggle: () => a(o, s)
						})]
					})] })
				}),
				/* @__PURE__ */ (0, P.jsx)("tbody", { children: o.map((e) => {
					let t = (e) => [/* @__PURE__ */ (0, P.jsx)("tr", { children: /* @__PURE__ */ (0, P.jsxs)("td", {
						colSpan: "5",
						className: "table-secondary",
						children: [/* @__PURE__ */ (0, P.jsx)(Ts, {
							className: "float-right",
							closed: e.closed,
							toggle: () => i(e)
						}), /* @__PURE__ */ (0, P.jsx)("strong", { children: e.title })]
					}) }, "-1")];
					return e.closed ? t(e) : t(e).concat(e.rows.map((e, t) => /* @__PURE__ */ (0, P.jsxs)("tr", { children: [/* @__PURE__ */ (0, P.jsx)("td", { children: e.title }), /* @__PURE__ */ (0, P.jsx)("td", { children: /* @__PURE__ */ (0, P.jsx)("strong", { children: e.specifier }) })] }, t)));
				}) })
			]
		})
	});
};
Es.propTypes = {
	config: F.default.object.isRequired,
	caption: F.default.string.isRequired,
	rows: F.default.array.isRequired,
	groups: F.default.array.isRequired,
	toggleGroup: F.default.func.isRequired,
	toggleGroups: F.default.func.isRequired
};
//#endregion
//#region app/js/components/tables/ExperimentsTable.jsx
var Ds = function({ config: e, row: t, climateScenarios: n, socScenarios: r, sensScenarios: i, toggleExperiments: a }) {
	let o = "table-danger";
	t.future && t.group3 && (o = "table-info");
	let s = e.simulation_round.endsWith("a") ? 2 : 5;
	return /* @__PURE__ */ (0, P.jsxs)(S.Fragment, { children: [
		/* @__PURE__ */ (0, P.jsxs)("tr", { children: [
			/* @__PURE__ */ (0, P.jsxs)("td", {
				className: t.parent ? "background" : "",
				rowSpan: "2",
				children: [
					/* @__PURE__ */ (0, P.jsx)("h4", { children: t.title }),
					t.subtitles && /* @__PURE__ */ (0, P.jsx)("div", {
						className: "mb-2",
						children: t.subtitles.map((e, t) => /* @__PURE__ */ (0, P.jsx)("p", {
							className: "mb-0",
							children: /* @__PURE__ */ (0, P.jsx)("code", { children: e })
						}, t))
					}),
					t.priority && /* @__PURE__ */ (0, P.jsx)("p", { children: /* @__PURE__ */ (0, P.jsx)("strong", { children: t.priority }) }),
					/* @__PURE__ */ (0, P.jsxs)("p", { children: [
						/* @__PURE__ */ (0, P.jsx)(Ve, {
							config: e,
							simulationRounds: t.simulation_rounds
						}),
						t.group3 && /* @__PURE__ */ (0, P.jsx)("span", {
							className: "badge badge-info",
							children: "Group III"
						}),
						/* @__PURE__ */ (0, P.jsx)(ze, {
							config: e,
							sectors: t.sectors
						})
					] }),
					!t.parent && t.children && /* @__PURE__ */ (0, P.jsx)("p", {
						className: "experiments-toggle",
						children: /* @__PURE__ */ (0, P.jsx)(Ts, {
							closed: !e.experiments.includes(t.specifier),
							toggle: () => a(t),
							label: `${t.children.length} sensitivity experiment${t.children.length > 1 ? "s" : ""}`
						})
					})
				]
			}),
			e.simulation_round.endsWith("a") && /* @__PURE__ */ (0, P.jsx)(S.Fragment, { children: t.historical.climate ? /* @__PURE__ */ (0, P.jsxs)("td", {
				className: "table-secondary",
				children: [/* @__PURE__ */ (0, P.jsx)("p", { children: /* @__PURE__ */ (0, P.jsx)("strong", {
					title: n[t.historical.climate],
					children: t.historical.climate
				}) }), t.historical.climate_sens && /* @__PURE__ */ (0, P.jsx)("p", { children: /* @__PURE__ */ (0, P.jsxs)("strong", {
					title: i[t.historical.climate_sens],
					children: ["Sensitivity experiment: ", t.historical.climate_sens]
				}) })]
			}) : /* @__PURE__ */ (0, P.jsx)("td", {
				rowSpan: "2",
				children: /* @__PURE__ */ (0, P.jsx)(Y, { children: t.historical })
			}) }),
			e.simulation_round.endsWith("b") && /* @__PURE__ */ (0, P.jsxs)(S.Fragment, { children: [
				t["pre-industrial"].climate ? /* @__PURE__ */ (0, P.jsxs)("td", {
					className: "table-secondary",
					children: [/* @__PURE__ */ (0, P.jsx)("p", { children: /* @__PURE__ */ (0, P.jsx)("strong", {
						title: n[t["pre-industrial"].climate],
						children: t["pre-industrial"].climate
					}) }), t["pre-industrial"].climate_sens && /* @__PURE__ */ (0, P.jsx)("p", { children: /* @__PURE__ */ (0, P.jsxs)("strong", {
						title: i[t["pre-industrial"].climate_sens],
						children: ["Sensitivity experiment: ", t["pre-industrial"].climate_sens]
					}) })]
				}) : /* @__PURE__ */ (0, P.jsx)("td", {
					rowSpan: "2",
					children: /* @__PURE__ */ (0, P.jsx)(Y, { children: t["pre-industrial"] })
				}),
				t.historical.climate ? /* @__PURE__ */ (0, P.jsxs)("td", {
					className: "table-secondary",
					children: [/* @__PURE__ */ (0, P.jsx)("p", { children: /* @__PURE__ */ (0, P.jsx)("strong", {
						title: n[t.historical.climate],
						children: t.historical.climate
					}) }), t.historical.climate_sens && /* @__PURE__ */ (0, P.jsx)("p", { children: /* @__PURE__ */ (0, P.jsxs)("strong", {
						title: i[t.historical.climate_sens],
						children: ["Sensitivity experiment: ", t.historical.climate_sens]
					}) })]
				}) : /* @__PURE__ */ (0, P.jsx)("td", {
					rowSpan: "2",
					children: /* @__PURE__ */ (0, P.jsx)(Y, { children: t.historical })
				}),
				t.future.climate ? /* @__PURE__ */ (0, P.jsxs)("td", {
					className: o,
					children: [/* @__PURE__ */ (0, P.jsx)("p", { children: /* @__PURE__ */ (0, P.jsx)("strong", {
						title: n[t.future.climate],
						children: t.future.climate
					}) }), t.future.climate_sens && /* @__PURE__ */ (0, P.jsx)("p", { children: /* @__PURE__ */ (0, P.jsxs)("strong", {
						title: i[t.future.climate_sens],
						children: ["Sensitivity experiment: ", t.future.climate_sens]
					}) })]
				}) : /* @__PURE__ */ (0, P.jsx)("td", {
					rowSpan: "2",
					children: /* @__PURE__ */ (0, P.jsx)(Y, { children: t.future })
				})
			] })
		] }),
		/* @__PURE__ */ (0, P.jsxs)("tr", { children: [e.simulation_round.endsWith("a") && /* @__PURE__ */ (0, P.jsx)(S.Fragment, { children: t.historical.soc && /* @__PURE__ */ (0, P.jsxs)("td", {
			className: "table-secondary",
			children: [/* @__PURE__ */ (0, P.jsx)("p", { children: /* @__PURE__ */ (0, P.jsx)("strong", {
				title: r[t.historical.soc],
				children: t.historical.soc
			}) }), t.historical.soc_sens && /* @__PURE__ */ (0, P.jsx)("p", { children: /* @__PURE__ */ (0, P.jsxs)("strong", {
				title: i[t.historical.soc_sens],
				children: ["Sensitivity experiment: ", t.historical.soc_sens]
			}) })]
		}) }), e.simulation_round.endsWith("b") && /* @__PURE__ */ (0, P.jsxs)(S.Fragment, { children: [
			t["pre-industrial"].soc && /* @__PURE__ */ (0, P.jsxs)("td", {
				className: "table-secondary",
				children: [/* @__PURE__ */ (0, P.jsx)("p", { children: /* @__PURE__ */ (0, P.jsx)("strong", {
					title: r[t["pre-industrial"].soc],
					children: t["pre-industrial"].soc
				}) }), t["pre-industrial"].soc_sens && /* @__PURE__ */ (0, P.jsx)("p", { children: /* @__PURE__ */ (0, P.jsxs)("strong", {
					title: i[t["pre-industrial"].soc_sens],
					children: ["Sensitivity experiment: ", t["pre-industrial"].soc_sens]
				}) })]
			}),
			t.historical.soc && /* @__PURE__ */ (0, P.jsxs)("td", {
				className: "table-secondary",
				children: [/* @__PURE__ */ (0, P.jsx)("p", { children: /* @__PURE__ */ (0, P.jsx)("strong", {
					title: r[t.historical.soc],
					children: t.historical.soc
				}) }), t.historical.soc_sens && /* @__PURE__ */ (0, P.jsx)("p", { children: /* @__PURE__ */ (0, P.jsxs)("strong", {
					title: i[t.historical.soc_sens],
					children: ["Sensitivity experiment: ", t.historical.soc_sens]
				}) })]
			}),
			t.future.soc && /* @__PURE__ */ (0, P.jsxs)("td", {
				className: o,
				children: [/* @__PURE__ */ (0, P.jsx)("p", { children: /* @__PURE__ */ (0, P.jsx)("strong", {
					title: r[t.future.soc],
					children: t.future.soc
				}) }), t.future.soc_sens && /* @__PURE__ */ (0, P.jsx)("p", { children: /* @__PURE__ */ (0, P.jsxs)("strong", {
					title: i[t.future.soc_sens],
					children: ["Sensitivity experiment: ", t.future.soc_sens]
				}) })]
			})
		] })] }),
		!t.parent && t.children && e.experiments.includes(t.specifier) && t.children.map((t, a) => /* @__PURE__ */ (0, P.jsx)(Ds, {
			row: t,
			config: e,
			climateScenarios: n,
			socScenarios: r,
			sensScenarios: i
		}, a)),
		!t.parent && /* @__PURE__ */ (0, P.jsx)("tr", {
			className: "separator",
			children: /* @__PURE__ */ (0, P.jsx)("td", { colSpan: s })
		})
	] });
}, Os = function({ definitions: e, config: t, caption: n, rows: r, toggleExperiments: i }) {
	let a = vs(t, r, !0), o = Object.fromEntries(vs(t, e.climate_scenario).map((e) => [e.specifier, e.description])), s = Object.fromEntries(vs(t, e.soc_scenario).map((e) => [e.specifier, e.description])), c = Object.fromEntries(vs(t, e.sens_scenario).map((e) => [e.specifier, e.description])), l = a.reduce((e, t) => {
		if (t.parent) {
			let n = e.find((e) => e.specifier == t.parent);
			return n.children = n.children ? [...n.children, { ...t }] : [{ ...t }], e;
		} else return [...e, { ...t }];
	}, []);
	return /* @__PURE__ */ (0, P.jsx)("div", {
		style: { width: t.simulation_round.endsWith("a") ? "60%" : "100%" },
		children: /* @__PURE__ */ (0, P.jsxs)("table", {
			className: "table table-bordered table-fixed",
			children: [
				/* @__PURE__ */ (0, P.jsx)("caption", { children: /* @__PURE__ */ (0, P.jsx)(Y, {
					components: { p: "span" },
					children: n
				}) }),
				/* @__PURE__ */ (0, P.jsx)("thead", {
					className: "thead-dark",
					children: /* @__PURE__ */ (0, P.jsxs)("tr", { children: [t.simulation_round.endsWith("a") && /* @__PURE__ */ (0, P.jsxs)(S.Fragment, { children: [/* @__PURE__ */ (0, P.jsx)("th", {
						style: { width: "70%" },
						children: "Experiment"
					}), /* @__PURE__ */ (0, P.jsxs)("th", {
						style: { width: "30%" },
						children: [/* @__PURE__ */ (0, P.jsx)("p", { children: "Period: Historical" }), /* @__PURE__ */ (0, P.jsx)("p", { children: "1901-2019" })]
					})] }), t.simulation_round.endsWith("b") && /* @__PURE__ */ (0, P.jsxs)(S.Fragment, { children: [
						/* @__PURE__ */ (0, P.jsx)("th", {
							style: { width: "40%" },
							children: "Experiment"
						}),
						/* @__PURE__ */ (0, P.jsxs)("th", {
							style: { width: "20%" },
							children: [/* @__PURE__ */ (0, P.jsx)("p", { children: "Period: Pre-industrial" }), /* @__PURE__ */ (0, P.jsx)("p", { children: "1601-1849" })]
						}),
						/* @__PURE__ */ (0, P.jsxs)("th", {
							style: { width: "20%" },
							children: [/* @__PURE__ */ (0, P.jsx)("p", { children: "Period: Historical" }), /* @__PURE__ */ (0, P.jsx)("p", { children: "1850-2014" })]
						}),
						/* @__PURE__ */ (0, P.jsxs)("th", {
							style: { width: "20%" },
							children: [/* @__PURE__ */ (0, P.jsx)("p", { children: "Period: Future" }), /* @__PURE__ */ (0, P.jsx)("p", { children: "2015-2100" })]
						})
					] })] })
				}),
				/* @__PURE__ */ (0, P.jsxs)("tbody", { children: [l.map((e, n) => /* @__PURE__ */ (0, P.jsx)(Ds, {
					row: e,
					config: t,
					climateScenarios: o,
					socScenarios: s,
					sensScenarios: c,
					toggleExperiments: i
				}, n)), a.length == 0 && /* @__PURE__ */ (0, P.jsx)("tr", { children: /* @__PURE__ */ (0, P.jsx)("td", {
					colSpan: t.simulation_round.endsWith("a") ? 4 : 5,
					children: "No experiments have been defined for this selection of simulation round and sectors, yet."
				}) })] })
			]
		})
	});
};
Ds.propTypes = {
	config: F.default.object.isRequired,
	row: F.default.object.isRequired,
	climateScenarios: F.default.array.isRequired,
	socScenarios: F.default.array.isRequired,
	sensScenarios: F.default.array.isRequired,
	toggleExperiments: F.default.func.isRequired
}, Os.propTypes = {
	definitions: F.default.object.isRequired,
	config: F.default.object.isRequired,
	caption: F.default.string.isRequired,
	rows: F.default.array.isRequired,
	toggleExperiments: F.default.func.isRequired
};
//#endregion
//#region app/js/components/badges/Mandatory.jsx
var ks = ({ mandatory: e }) => e === void 0 ? null : e ? /* @__PURE__ */ (0, P.jsx)("span", {
	className: "badge badge-info badge-mandatory",
	title: "If your models uses input data of this kind, we require to use the specified dataset. Please see the note above.",
	children: "mandatory"
}) : /* @__PURE__ */ (0, P.jsx)("span", {
	className: "badge badge-light badge-optional",
	children: "optional"
});
ks.propTypes = { mandatory: F.default.string };
//#endregion
//#region app/js/components/badges/SocForcing.jsx
var As = ({ socForcings: e }) => e.map((e) => /* @__PURE__ */ (0, P.jsx)("span", {
	className: "badge badge-secondary badge-soc-forcing",
	children: e
}, e));
As.propTypes = { socForcings: F.default.array };
//#endregion
//#region app/js/components/badges/Status.jsx
var js = ({ status: e }) => e === "mandatory" ? /* @__PURE__ */ (0, P.jsx)("span", {
	className: "badge badge-info badge-mandatory",
	title: "If your models uses input data of this kind, we require to use the specified dataset. Please see the note above.",
	children: "mandatory"
}) : e == "optional" ? /* @__PURE__ */ (0, P.jsx)("span", {
	className: "badge badge-light badge-optional",
	children: e
}) : e ? /* @__PURE__ */ (0, P.jsx)("span", {
	className: "badge badge-secondary badge-status",
	children: e
}) : null;
js.propTypes = { status: F.default.string };
//#endregion
//#region app/js/components/tables/ForcingDataTable.jsx
var Ms = function({ config: e, caption: t, rows: n, groups: r, toggleGroup: i, toggleGroups: a }) {
	let o = Ss(e, n, r, !0), s = o.length == 0, c = o.every((e) => !e.closed);
	return /* @__PURE__ */ (0, P.jsx)("div", {
		className: "w-100",
		children: /* @__PURE__ */ (0, P.jsxs)("table", {
			className: "table table-bordered table-fixed",
			children: [
				/* @__PURE__ */ (0, P.jsx)("caption", { children: /* @__PURE__ */ (0, P.jsx)(Y, {
					components: { p: "span" },
					children: t
				}) }),
				/* @__PURE__ */ (0, P.jsx)("thead", {
					className: "thead-dark",
					children: /* @__PURE__ */ (0, P.jsxs)("tr", { children: [/* @__PURE__ */ (0, P.jsx)("th", {
						style: { width: "30%" },
						children: "Forcing"
					}), /* @__PURE__ */ (0, P.jsxs)("th", {
						style: { width: "70%" },
						children: ["DOI / Path / Documentation", !s && /* @__PURE__ */ (0, P.jsx)(Ts, {
							className: "float-right",
							closed: !c,
							toggle: () => a(o, c),
							all: !0
						})]
					})] })
				}),
				/* @__PURE__ */ (0, P.jsxs)("tbody", { children: [o.map((t) => {
					let n = (t) => [/* @__PURE__ */ (0, P.jsx)("tr", { children: /* @__PURE__ */ (0, P.jsxs)("td", {
						colSpan: "6",
						className: "table-secondary",
						children: [/* @__PURE__ */ (0, P.jsx)(Ts, {
							className: "float-right",
							closed: t.closed,
							toggle: () => i(t)
						}), /* @__PURE__ */ (0, P.jsx)("strong", { children: t.title[e.simulation_round] || t.title })]
					}) }, "-1")];
					return t.closed ? n(t) : n(t).concat(t.rows.map((t, n) => {
						let r = xs(e, t.doi), i = xs(e, t.path);
						return /* @__PURE__ */ (0, P.jsxs)("tr", { children: [/* @__PURE__ */ (0, P.jsxs)("td", {
							colSpan: "1",
							children: [
								/* @__PURE__ */ (0, P.jsx)("p", { children: t.title }),
								/* @__PURE__ */ (0, P.jsx)(ks, { mandatory: t.mandatory }),
								/* @__PURE__ */ (0, P.jsx)(js, { status: t.status })
							]
						}), /* @__PURE__ */ (0, P.jsxs)("td", { children: [
							/* @__PURE__ */ (0, P.jsxs)("p", { children: [t.group3 && /* @__PURE__ */ (0, P.jsx)("span", {
								className: "badge badge-info",
								children: "Group III"
							}), /* @__PURE__ */ (0, P.jsx)(ze, {
								config: e,
								sectors: t.sectors
							})] }),
							t.soc_forcing && /* @__PURE__ */ (0, P.jsx)("p", { children: /* @__PURE__ */ (0, P.jsx)(As, { socForcings: t.soc_forcing }) }),
							r && (Array.isArray(r) ? r.map((e, t) => /* @__PURE__ */ (0, P.jsx)("p", { children: /* @__PURE__ */ (0, P.jsx)("a", {
								className: "doi-link",
								href: e,
								children: e
							}) }, t)) : /* @__PURE__ */ (0, P.jsx)("p", { children: /* @__PURE__ */ (0, P.jsx)("a", {
								className: "doi-link",
								href: r,
								children: r
							}) })),
							i && (Array.isArray(i) ? /* @__PURE__ */ (0, P.jsxs)(P.Fragment, { children: [/* @__PURE__ */ (0, P.jsx)("p", {
								className: "mb-0",
								children: "Paths:"
							}), /* @__PURE__ */ (0, P.jsx)("ul", {
								className: "list-unstyled mb-1",
								children: i.map((e, t) => /* @__PURE__ */ (0, P.jsx)("div", {
									className: "mb-0",
									children: /* @__PURE__ */ (0, P.jsx)("code", { children: e })
								}, t))
							})] }) : /* @__PURE__ */ (0, P.jsxs)("p", { children: [
								"Path: ",
								/* @__PURE__ */ (0, P.jsx)("code", { children: xs(e, t.path) }),
								t.path_comment && /* @__PURE__ */ (0, P.jsxs)(P.Fragment, { children: [
									" (",
									/* @__PURE__ */ (0, P.jsx)(Y, {
										components: { p: S.Fragment },
										children: t.path_comment
									}),
									")"
								] })
							] })),
							t.noadapt && /* @__PURE__ */ (0, P.jsxs)("p", { children: [
								"noadapt forcing:",
								" ",
								Array.isArray(t.noadapt) ? t.noadapt.map((e, t) => /* @__PURE__ */ (0, P.jsx)("strong", { children: e }, t)).reduce((e, t) => [
									e,
									", ",
									t
								]) : /* @__PURE__ */ (0, P.jsx)(Y, {
									components: { p: S.Fragment },
									children: t.noadapt
								})
							] }),
							t.adapt && /* @__PURE__ */ (0, P.jsxs)("p", { children: [
								"adapt forcing:",
								" ",
								Array.isArray(t.adapt) ? t.adapt.map((e, t) => /* @__PURE__ */ (0, P.jsx)("strong", { children: e }, t)).reduce((e, t) => [
									e,
									", ",
									t
								]) : /* @__PURE__ */ (0, P.jsx)(Y, {
									components: { p: S.Fragment },
									children: t.adapt
								})
							] }),
							t.comment && /* @__PURE__ */ (0, P.jsx)(Y, { children: xs(e, t.comment) })
						] })] }, n);
					}));
				}), s && /* @__PURE__ */ (0, P.jsx)("tr", { children: /* @__PURE__ */ (0, P.jsx)("td", {
					colSpan: "4",
					children: "No forcing data have been defined for this selection of simulation round and sectors, yet."
				}) })] })
			]
		})
	});
};
Ms.propTypes = {
	config: F.default.object.isRequired,
	caption: F.default.string.isRequired,
	rows: F.default.array.isRequired,
	groups: F.default.array.isRequired,
	toggleGroup: F.default.func.isRequired,
	toggleGroups: F.default.func.isRequired
};
//#endregion
//#region app/js/components/tables/ForestStandTable.jsx
var Ns = function({ config: e, caption: t, rows: n }) {
	return /* @__PURE__ */ (0, P.jsx)("div", {
		className: "w-100",
		children: /* @__PURE__ */ (0, P.jsxs)("table", {
			className: "table table-bordered table-fixed",
			children: [
				/* @__PURE__ */ (0, P.jsx)("caption", { children: /* @__PURE__ */ (0, P.jsx)(Y, {
					components: { p: "span" },
					children: t
				}) }),
				/* @__PURE__ */ (0, P.jsx)("thead", {
					className: "thead-dark",
					children: /* @__PURE__ */ (0, P.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, P.jsx)("th", {
							style: { width: "10%" },
							children: "Stand"
						}),
						/* @__PURE__ */ (0, P.jsx)("th", {
							style: { width: "15%" },
							children: "Specifier"
						}),
						/* @__PURE__ */ (0, P.jsx)("th", {
							style: { width: "5%" },
							children: "Country"
						}),
						/* @__PURE__ */ (0, P.jsx)("th", {
							style: { width: "10%" },
							children: "Coordinates (Lat, Lon)"
						}),
						/* @__PURE__ */ (0, P.jsx)("th", {
							style: { width: "10%" },
							children: "Forest type"
						}),
						/* @__PURE__ */ (0, P.jsx)("th", {
							style: { width: "10%" },
							children: "Species"
						}),
						/* @__PURE__ */ (0, P.jsx)("th", {
							style: { width: "10%" },
							children: "Thinning during historical time period"
						}),
						/* @__PURE__ */ (0, P.jsx)("th", {
							style: { width: "30%" },
							children: "Comment"
						})
					] })
				}),
				/* @__PURE__ */ (0, P.jsx)("tbody", { children: vs(e, n, closed).map((e, t) => /* @__PURE__ */ (0, P.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, P.jsx)("td", { children: e.title }),
					/* @__PURE__ */ (0, P.jsx)("td", { children: /* @__PURE__ */ (0, P.jsx)("strong", { children: e.specifier }) }),
					/* @__PURE__ */ (0, P.jsx)("td", { children: e.country }),
					/* @__PURE__ */ (0, P.jsxs)("td", { children: [
						e.lat,
						", ",
						e.lon
					] }),
					/* @__PURE__ */ (0, P.jsx)("td", { children: e.type }),
					/* @__PURE__ */ (0, P.jsx)("td", { children: e.species.join(", ") }),
					/* @__PURE__ */ (0, P.jsx)("td", { children: e.thinning }),
					/* @__PURE__ */ (0, P.jsx)("td", { children: e.comment })
				] }, t)) })
			]
		})
	});
};
Ns.propTypes = {
	config: F.default.object.isRequired,
	caption: F.default.string.isRequired,
	rows: F.default.array.isRequired
};
//#endregion
//#region app/js/components/tables/Group3RankingTable.jsx
var Ps = function({ config: e, caption: t, rows: n, groups: r, toggleGroup: i, toggleGroups: a }) {
	let o = Ss(e, n, r), s = o.every((e) => !e.closed), c = () => a(o, s), l = {
		tier1: "#cfc",
		tier2: "#f9f",
		tier3: "#faf",
		tier4: "#fbf",
		tier5: "#fcf",
		tier6: "#fdf",
		tier7: "#fef",
		tier8: "white"
	}, u = (e) => e.toSorted((e, t) => e.priority > t.priority ? 1 : e.priority < t.priority ? -1 : 0);
	return /* @__PURE__ */ (0, P.jsxs)("table", {
		className: "table table-bordered table-fixed w-70",
		children: [
			/* @__PURE__ */ (0, P.jsx)("caption", { children: /* @__PURE__ */ (0, P.jsx)(Y, {
				components: { p: "span" },
				children: t
			}) }),
			/* @__PURE__ */ (0, P.jsx)("thead", {
				className: "thead-dark",
				children: /* @__PURE__ */ (0, P.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, P.jsx)("th", {
						style: { width: "10%" },
						children: "Priority"
					}),
					/* @__PURE__ */ (0, P.jsx)("th", {
						style: { width: "25%" },
						children: "Climate forcing"
					}),
					/* @__PURE__ */ (0, P.jsx)("th", {
						style: { width: "25%" },
						children: "LU model"
					}),
					/* @__PURE__ */ (0, P.jsxs)("th", {
						style: { width: "40%" },
						children: ["Direct human forcing", /* @__PURE__ */ (0, P.jsx)(Ts, {
							className: "float-right",
							closed: !s,
							toggle: c,
							all: !0,
							label: "tiers"
						})]
					})
				] })
			}),
			/* @__PURE__ */ (0, P.jsx)("tbody", { children: o.map((e) => {
				let t = (e) => [/* @__PURE__ */ (0, P.jsx)("tr", { children: /* @__PURE__ */ (0, P.jsxs)("td", {
					colSpan: "5",
					className: "table-secondary",
					children: [/* @__PURE__ */ (0, P.jsx)(Ts, {
						className: "float-right",
						closed: e.closed,
						label: "tier",
						toggle: () => i(e)
					}), /* @__PURE__ */ (0, P.jsx)("strong", { children: e.title })]
				}) }, "-1")];
				return e.closed ? t(e) : t(e).concat(u(e.rows).map((e, t) => /* @__PURE__ */ (0, P.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, P.jsx)("td", {
						style: { backgroundColor: l[e.group] },
						children: e.priority
					}),
					/* @__PURE__ */ (0, P.jsx)("td", { children: e.gcm }),
					/* @__PURE__ */ (0, P.jsx)("td", { children: e.lu_model }),
					/* @__PURE__ */ (0, P.jsx)("td", { children: /* @__PURE__ */ (0, P.jsx)("strong", { children: e.soc_scenario }) })
				] }, t)));
			}) })
		]
	});
};
Ps.propTypes = {
	config: F.default.object.isRequired,
	caption: F.default.string.isRequired,
	rows: F.default.array.isRequired,
	groups: F.default.array.isRequired,
	toggleGroup: F.default.func.isRequired,
	toggleGroups: F.default.func.isRequired
};
//#endregion
//#region app/js/components/tables/Group3RequirementsTable.jsx
var Fs = function({ config: e, caption: t, rows: n }) {
	let r = vs(e, n);
	return /* @__PURE__ */ (0, P.jsxs)("table", {
		className: "table table-bordered table-fixed",
		children: [
			/* @__PURE__ */ (0, P.jsx)("caption", { children: /* @__PURE__ */ (0, P.jsx)(Y, {
				components: { p: "span" },
				children: t
			}) }),
			/* @__PURE__ */ (0, P.jsx)("thead", {
				className: "thead-dark",
				children: /* @__PURE__ */ (0, P.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, P.jsx)("th", {
						style: { width: "25%" },
						children: "Forcing"
					}),
					/* @__PURE__ */ (0, P.jsx)("th", {
						style: { width: "25%" },
						children: "Required"
					}),
					/* @__PURE__ */ (0, P.jsx)("th", {
						style: { width: "25%" },
						children: "Harmonized"
					}),
					/* @__PURE__ */ (0, P.jsx)("th", {
						style: { width: "25%" },
						children: "Reference to data sets that are used for the harmonization"
					})
				] })
			}),
			/* @__PURE__ */ (0, P.jsxs)("tbody", { children: [vs(e, n).map((t, n) => /* @__PURE__ */ (0, P.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, P.jsx)("td", { children: t.title }),
				/* @__PURE__ */ (0, P.jsx)("td", { children: /* @__PURE__ */ (0, P.jsx)(ze, {
					config: e,
					sectors: t.required
				}) }),
				/* @__PURE__ */ (0, P.jsx)("td", { children: /* @__PURE__ */ (0, P.jsx)(ze, {
					config: e,
					sectors: t.harmonized
				}) }),
				/* @__PURE__ */ (0, P.jsx)("td", { children: t.datasets && /* @__PURE__ */ (0, P.jsx)("ul", { children: t.datasets.map((e, t) => /* @__PURE__ */ (0, P.jsx)("li", { children: e }, t)) }) })
			] }, n)), (0, M.isEmpty)(r) && /* @__PURE__ */ (0, P.jsx)("tr", { children: /* @__PURE__ */ (0, P.jsx)("td", {
				colSpan: e.simulation_round.endsWith("a") ? 4 : 5,
				children: "No Group III requirements have been defined for this selection of sectors, yet."
			}) })] })
		]
	});
};
Fs.propTypes = {
	config: F.default.object.isRequired,
	caption: F.default.string.isRequired,
	rows: F.default.array.isRequired
};
//#endregion
//#region app/js/components/tables/HarmonizationTable.jsx
var Is = function({ config: e, caption: t, rows: n }) {
	return /* @__PURE__ */ (0, P.jsxs)("table", {
		className: "table table-bordered table-fixed w-100",
		children: [
			/* @__PURE__ */ (0, P.jsx)("caption", { children: /* @__PURE__ */ (0, P.jsx)(Y, {
				components: { p: "span" },
				children: t
			}) }),
			/* @__PURE__ */ (0, P.jsx)("thead", {
				className: "thead-dark",
				children: /* @__PURE__ */ (0, P.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, P.jsx)("th", {
						style: { width: "20%" },
						children: "Simulation"
					}),
					/* @__PURE__ */ (0, P.jsx)("th", {
						style: { width: "10%" },
						children: "Specifier"
					}),
					/* @__PURE__ */ (0, P.jsx)("th", {
						style: { width: "70%" },
						children: "Description"
					})
				] })
			}),
			/* @__PURE__ */ (0, P.jsx)("tbody", { children: vs(e, n).map((e, t) => /* @__PURE__ */ (0, P.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, P.jsx)("td", { children: e.title }),
				/* @__PURE__ */ (0, P.jsx)("td", { children: /* @__PURE__ */ (0, P.jsx)("strong", { children: e.specifier }) }),
				/* @__PURE__ */ (0, P.jsx)("td", { children: e.description })
			] }, t)) })
		]
	});
};
Is.propTypes = {
	config: F.default.object.isRequired,
	caption: F.default.string.isRequired,
	rows: F.default.array.isRequired
};
//#endregion
//#region app/js/components/fields/Code.jsx
var Ls = ({ lines: e }) => !(0, M.isEmpty)(e) && /* @__PURE__ */ (0, P.jsx)(P.Fragment, { children: Array.isArray(e) ? e.map((e, t) => /* @__PURE__ */ (0, P.jsxs)("code", {
	className: "pre",
	children: [e, "\n"]
}, t)) : /* @__PURE__ */ (0, P.jsx)("code", { children: e }) });
Ls.propTypes = { lines: F.default.oneOfType([
	F.default.object,
	F.default.string,
	F.default.array
]) };
//#endregion
//#region app/js/components/fields/List.jsx
var Rs = ({ items: e }) => !(0, M.isEmpty)(e) && /* @__PURE__ */ (0, P.jsx)("ul", {
	className: "list",
	children: Array.isArray(e) ? e.map((e, t) => /* @__PURE__ */ (0, P.jsx)("li", { children: e }, t)) : /* @__PURE__ */ (0, P.jsx)("li", { children: e })
});
Rs.propTypes = { items: F.default.oneOfType([
	F.default.object,
	F.default.string,
	F.default.array
]) };
//#endregion
//#region app/js/components/tables/InputDatasetTable.jsx
var zs = function({ config: e, caption: t, rows: n, groups: r, toggleGroup: i, toggleGroups: a, group3: o }) {
	let s = Ss(e, n, r, o), c = s.length == 0, l = s.every((e) => !e.closed);
	return /* @__PURE__ */ (0, P.jsx)("div", {
		className: "w-100",
		children: /* @__PURE__ */ (0, P.jsxs)("table", {
			className: "table table-bordered table-fixed",
			children: [
				/* @__PURE__ */ (0, P.jsx)("caption", { children: /* @__PURE__ */ (0, P.jsx)(Y, {
					components: { p: "span" },
					children: t
				}) }),
				/* @__PURE__ */ (0, P.jsx)("thead", {
					className: "thead-dark",
					children: /* @__PURE__ */ (0, P.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, P.jsx)("th", {
							style: { width: "20%" },
							children: "Dataset"
						}),
						/* @__PURE__ */ (0, P.jsx)("th", {
							style: { width: "15%" },
							children: "Variable specifier"
						}),
						/* @__PURE__ */ (0, P.jsx)("th", {
							style: { width: "15%" },
							children: "Unit"
						}),
						/* @__PURE__ */ (0, P.jsx)("th", {
							style: { width: "15%" },
							children: "Resolution"
						}),
						/* @__PURE__ */ (0, P.jsxs)("th", {
							style: { width: "35%" },
							children: ["Sectors / Comments", !c && /* @__PURE__ */ (0, P.jsx)(Ts, {
								className: "float-right",
								closed: !l,
								toggle: () => a(s, l),
								all: !0
							})]
						})
					] })
				}),
				/* @__PURE__ */ (0, P.jsxs)("tbody", { children: [s.map((t) => {
					let n = (e) => [/* @__PURE__ */ (0, P.jsx)("tr", { children: /* @__PURE__ */ (0, P.jsxs)("td", {
						colSpan: "5",
						className: "table-secondary",
						children: [/* @__PURE__ */ (0, P.jsx)(Ts, {
							className: "float-right",
							closed: e.closed,
							toggle: () => i(e)
						}), /* @__PURE__ */ (0, P.jsx)("strong", { children: e.title })]
					}) }, "-1")];
					return t.closed ? n(t) : n(t).concat(t.rows.map((t, n) => /* @__PURE__ */ (0, P.jsxs)(S.Fragment, { children: [/* @__PURE__ */ (0, P.jsxs)("tr", { children: [/* @__PURE__ */ (0, P.jsxs)("td", {
						rowSpan: t.variables.length + 1,
						children: [/* @__PURE__ */ (0, P.jsx)("p", { children: t.title || t.specifier }), (t.mandatory || t.group3) && /* @__PURE__ */ (0, P.jsxs)("p", { children: [t.group3 && /* @__PURE__ */ (0, P.jsx)("span", {
							className: "badge badge-info",
							children: "Group III"
						}), /* @__PURE__ */ (0, P.jsx)(ks, { mandatory: t.mandatory })] })]
					}), /* @__PURE__ */ (0, P.jsx)("td", {
						colSpan: "4",
						className: "nowrap",
						children: /* @__PURE__ */ (0, P.jsxs)("div", { children: [/* @__PURE__ */ (0, P.jsx)(Ls, { lines: xs(e, t.path) }), t.url && /* @__PURE__ */ (0, P.jsx)("a", {
							href: t.url,
							target: "_blank",
							rel: "noreferrer",
							children: t.url
						})] })
					})] }), t.variables.map((n, r) => {
						let i = xs(e, t.time_periods);
						return /* @__PURE__ */ (0, P.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, P.jsxs)("td", { children: [/* @__PURE__ */ (0, P.jsx)("strong", { children: n.specifier }), n.long_name && /* @__PURE__ */ (0, P.jsxs)("span", { children: [
								" (",
								n.long_name,
								")"
							] })] }),
							/* @__PURE__ */ (0, P.jsx)("td", { children: n.units }),
							r == 0 && /* @__PURE__ */ (0, P.jsxs)(S.Fragment, { children: [/* @__PURE__ */ (0, P.jsxs)("td", {
								rowSpan: t.variables.length,
								children: [
									i && i.length > 0 && /* @__PURE__ */ (0, P.jsx)("ul", {
										className: "resolution-list",
										children: i.map((e, t) => /* @__PURE__ */ (0, P.jsx)("li", { children: e }, t))
									}),
									/* @__PURE__ */ (0, P.jsx)(Rs, { items: xs(e, t.resolution) }),
									/* @__PURE__ */ (0, P.jsx)(Rs, { items: xs(e, t.frequency) })
								]
							}), /* @__PURE__ */ (0, P.jsxs)("td", {
								rowSpan: t.variables.length,
								children: [/* @__PURE__ */ (0, P.jsx)("p", { children: /* @__PURE__ */ (0, P.jsx)(ze, {
									config: e,
									sectors: t.sectors
								}) }), t.comment && /* @__PURE__ */ (0, P.jsx)(Y, { children: xs(e, t.comment) })]
							})] })
						] }, r);
					})] }, n)));
				}), c && /* @__PURE__ */ (0, P.jsx)("tr", { children: /* @__PURE__ */ (0, P.jsx)("td", {
					colSpan: "4",
					children: "No datasets have been defined for this selection of simulation round and sectors, yet."
				}) })] })
			]
		})
	});
};
zs.propTypes = {
	config: F.default.object.isRequired,
	caption: F.default.string.isRequired,
	rows: F.default.array.isRequired,
	groups: F.default.array.isRequired,
	toggleGroup: F.default.func.isRequired,
	toggleGroups: F.default.func.isRequired,
	group3: F.default.bool
};
//#endregion
//#region app/js/components/badges/ClimateForcing.jsx
var Bs = ({ climateForcings: e }) => !(0, M.isEmpty)(e) && e.map((e) => /* @__PURE__ */ (0, P.jsx)("span", {
	className: "badge badge-secondary badge-climate-forcing",
	children: e
}, e));
Bs.propTypes = { climateForcings: F.default.array };
//#endregion
//#region app/js/components/tables/InputVariableTable.jsx
var Vs = function({ config: e, caption: t, rows: n, groups: r, toggleGroup: i, toggleGroups: a }) {
	let o = Ss(e, n, r), s = o.length == 0, c = o.every((e) => !e.closed), l = () => a(o, c), u = (e) => e.extension ? (0, M.isArray)(e.extension) ? e.extension.map((t) => (0, M.isNil)(t) ? e.specifier : e.specifier + "-" + t).join(", ") : e.specifier + "-" + e.extension : e.specifier;
	return /* @__PURE__ */ (0, P.jsx)("div", {
		className: "w-100",
		children: /* @__PURE__ */ (0, P.jsxs)("table", {
			className: "table table-bordered table-fixed",
			children: [
				/* @__PURE__ */ (0, P.jsx)("caption", { children: /* @__PURE__ */ (0, P.jsx)(Y, {
					components: { p: "span" },
					children: t
				}) }),
				/* @__PURE__ */ (0, P.jsx)("thead", {
					className: "thead-dark",
					children: /* @__PURE__ */ (0, P.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, P.jsx)("th", {
							style: { width: "20%" },
							children: "Variable"
						}),
						/* @__PURE__ */ (0, P.jsx)("th", {
							style: { width: "15%" },
							children: "Variable specifier"
						}),
						/* @__PURE__ */ (0, P.jsx)("th", {
							style: { width: "15%" },
							children: "Unit"
						}),
						/* @__PURE__ */ (0, P.jsx)("th", {
							style: { width: "15%" },
							children: "Resolution"
						}),
						/* @__PURE__ */ (0, P.jsxs)("th", {
							style: { width: "35%" },
							children: ["Sectors / Comments", !s && /* @__PURE__ */ (0, P.jsx)(Ts, {
								className: "float-right",
								closed: !c,
								toggle: l,
								all: !0
							})]
						})
					] })
				}),
				/* @__PURE__ */ (0, P.jsxs)("tbody", { children: [o.map((t) => {
					let n = (e) => [/* @__PURE__ */ (0, P.jsx)("tr", { children: /* @__PURE__ */ (0, P.jsxs)("td", {
						colSpan: "5",
						className: "table-secondary",
						children: [/* @__PURE__ */ (0, P.jsx)(Ts, {
							className: "float-right",
							closed: e.closed,
							toggle: () => i(e)
						}), /* @__PURE__ */ (0, P.jsx)("strong", { children: e.title })]
					}) }, "-1")];
					return t.closed ? n(t) : n(t).concat(t.rows.map((t, n) => /* @__PURE__ */ (0, P.jsxs)(S.Fragment, { children: [/* @__PURE__ */ (0, P.jsxs)("tr", { children: [/* @__PURE__ */ (0, P.jsxs)("td", {
						rowSpan: "2",
						children: [/* @__PURE__ */ (0, P.jsx)("p", { children: t.long_name }), /* @__PURE__ */ (0, P.jsx)(ks, { mandatory: t.mandatory })]
					}), /* @__PURE__ */ (0, P.jsx)("td", {
						colSpan: "4",
						className: "nowrap",
						children: /* @__PURE__ */ (0, P.jsxs)("div", { children: [/* @__PURE__ */ (0, P.jsx)(Ls, { lines: xs(e, t.path) }), t.url && /* @__PURE__ */ (0, P.jsx)("a", {
							href: t.url,
							target: "_blank",
							rel: "noreferrer",
							children: t.url
						})] })
					})] }), /* @__PURE__ */ (0, P.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, P.jsx)("td", { children: /* @__PURE__ */ (0, P.jsx)("strong", { children: u(t) }) }),
						/* @__PURE__ */ (0, P.jsx)("td", { children: xs(e, t.units) }),
						/* @__PURE__ */ (0, P.jsxs)("td", { children: [/* @__PURE__ */ (0, P.jsx)(Rs, { items: xs(e, t.resolution) }), /* @__PURE__ */ (0, P.jsx)(Rs, { items: xs(e, t.frequency) })] }),
						/* @__PURE__ */ (0, P.jsxs)("td", { children: [
							/* @__PURE__ */ (0, P.jsx)("p", { children: /* @__PURE__ */ (0, P.jsx)(ze, {
								config: e,
								sectors: t.sectors
							}) }),
							/* @__PURE__ */ (0, P.jsx)(Bs, { climateForcings: xs(e, t.climate_forcing) }),
							t.comment && /* @__PURE__ */ (0, P.jsx)(Y, { children: xs(e, t.comment) })
						] })
					] })] }, n)));
				}), s && /* @__PURE__ */ (0, P.jsx)("tr", { children: /* @__PURE__ */ (0, P.jsx)("td", {
					colSpan: "5",
					children: "No variables have been defined for this selection of simulation round and sectors, yet."
				}) })] })
			]
		})
	});
};
Vs.propTypes = {
	config: F.default.object.isRequired,
	caption: F.default.string.isRequired,
	rows: F.default.array.isRequired,
	groups: F.default.array.isRequired,
	toggleGroup: F.default.func.isRequired,
	toggleGroups: F.default.func.isRequired
};
//#endregion
//#region app/js/components/tables/IrrigationTable.jsx
var Hs = function({ config: e, caption: t, rows: n }) {
	return /* @__PURE__ */ (0, P.jsxs)("table", {
		className: "table table-bordered table-fixed w-50",
		children: [
			/* @__PURE__ */ (0, P.jsx)("caption", { children: /* @__PURE__ */ (0, P.jsx)(Y, {
				components: { p: "span" },
				children: t
			}) }),
			/* @__PURE__ */ (0, P.jsx)("thead", {
				className: "thead-dark",
				children: /* @__PURE__ */ (0, P.jsxs)("tr", { children: [/* @__PURE__ */ (0, P.jsx)("th", {
					style: { width: "70%" },
					children: "Irrigation Type"
				}), /* @__PURE__ */ (0, P.jsx)("th", {
					style: { width: "30%" },
					children: "Specifier"
				})] })
			}),
			/* @__PURE__ */ (0, P.jsx)("tbody", { children: vs(e, n).map((e, t) => /* @__PURE__ */ (0, P.jsxs)("tr", { children: [/* @__PURE__ */ (0, P.jsx)("td", { children: e.title }), /* @__PURE__ */ (0, P.jsx)("td", { children: /* @__PURE__ */ (0, P.jsx)("strong", { children: e.specifier }) })] }, t)) })
		]
	});
};
Hs.propTypes = {
	config: F.default.object.isRequired,
	caption: F.default.string.isRequired,
	rows: F.default.array.isRequired
};
//#endregion
//#region app/js/components/tables/LakeSiteTable.jsx
var Us = function({ config: e, caption: t, rows: n }) {
	return /* @__PURE__ */ (0, P.jsx)("div", {
		className: "w-100",
		children: /* @__PURE__ */ (0, P.jsxs)("table", {
			className: "table table-bordered table-fixed",
			children: [
				/* @__PURE__ */ (0, P.jsx)("caption", { children: /* @__PURE__ */ (0, P.jsx)(Y, {
					components: { p: "span" },
					children: t
				}) }),
				/* @__PURE__ */ (0, P.jsx)("thead", {
					className: "thead-dark",
					children: /* @__PURE__ */ (0, P.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, P.jsx)("th", {
							style: { width: "20%" },
							children: "Lake name"
						}),
						/* @__PURE__ */ (0, P.jsx)("th", {
							style: { width: "20%" },
							children: "Specifier"
						}),
						/* @__PURE__ */ (0, P.jsx)("th", {
							style: { width: "20%" },
							children: "Reservoir or lake"
						}),
						/* @__PURE__ */ (0, P.jsx)("th", {
							style: { width: "20%" },
							children: "Country"
						}),
						/* @__PURE__ */ (0, P.jsx)("th", {
							style: { width: "20%" },
							children: "Coordinates (Lat, Lon)"
						})
					] })
				}),
				/* @__PURE__ */ (0, P.jsx)("tbody", { children: vs(e, n, closed).map((e, t) => /* @__PURE__ */ (0, P.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, P.jsx)("td", { children: e.title }),
					/* @__PURE__ */ (0, P.jsx)("td", { children: /* @__PURE__ */ (0, P.jsx)("strong", { children: e.specifier }) }),
					/* @__PURE__ */ (0, P.jsx)("td", { children: e.type }),
					/* @__PURE__ */ (0, P.jsx)("td", { children: e.country }),
					/* @__PURE__ */ (0, P.jsxs)("td", { children: [
						e.lat,
						", ",
						e.lon
					] })
				] }, t)) })
			]
		})
	});
};
Us.propTypes = {
	config: F.default.object.isRequired,
	caption: F.default.string.isRequired,
	rows: F.default.array.isRequired
};
//#endregion
//#region app/js/components/tables/OceanRegionTable.jsx
var Ws = function({ config: e, caption: t, rows: n }) {
	return /* @__PURE__ */ (0, P.jsx)("div", {
		className: "w-75",
		children: /* @__PURE__ */ (0, P.jsxs)("table", {
			className: "table table-bordered table-fixed",
			children: [
				/* @__PURE__ */ (0, P.jsx)("caption", { children: /* @__PURE__ */ (0, P.jsx)(Y, {
					components: { p: "span" },
					children: t
				}) }),
				/* @__PURE__ */ (0, P.jsx)("thead", {
					className: "thead-dark",
					children: /* @__PURE__ */ (0, P.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, P.jsx)("th", {
							style: { width: "30%" },
							children: "Ocean region"
						}),
						/* @__PURE__ */ (0, P.jsx)("th", {
							style: { width: "30%" },
							children: "Specifier"
						}),
						/* @__PURE__ */ (0, P.jsx)("th", {
							style: { width: "40%" },
							children: "Coordinates (west, south, east, north)"
						})
					] })
				}),
				/* @__PURE__ */ (0, P.jsx)("tbody", { children: vs(e, n, closed).map((e, t) => /* @__PURE__ */ (0, P.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, P.jsx)("td", { children: e.title }),
					/* @__PURE__ */ (0, P.jsx)("td", { children: /* @__PURE__ */ (0, P.jsx)("strong", { children: e.specifier }) }),
					/* @__PURE__ */ (0, P.jsxs)("td", { children: [
						e.west,
						", ",
						e.south,
						", ",
						e.east,
						", ",
						e.north
					] })
				] }, t)) })
			]
		})
	});
};
Ws.propTypes = {
	config: F.default.object.isRequired,
	caption: F.default.string.isRequired,
	rows: F.default.array.isRequired
};
//#endregion
//#region app/js/components/tables/ScenarioTable.jsx
var Gs = function({ config: e, caption: t, rows: n, group3: r }) {
	return /* @__PURE__ */ (0, P.jsxs)("table", {
		className: "table table-bordered table-fixed",
		children: [
			/* @__PURE__ */ (0, P.jsx)("caption", { children: /* @__PURE__ */ (0, P.jsx)(Y, {
				components: { p: "span" },
				children: t
			}) }),
			/* @__PURE__ */ (0, P.jsx)("thead", {
				className: "thead-dark",
				children: /* @__PURE__ */ (0, P.jsxs)("tr", { children: [/* @__PURE__ */ (0, P.jsx)("th", {
					style: { width: "30%" },
					children: "Experiment specifier"
				}), /* @__PURE__ */ (0, P.jsx)("th", {
					style: { width: "70%" },
					children: "Description"
				})] })
			}),
			/* @__PURE__ */ (0, P.jsx)("tbody", { children: vs(e, n, r).map((t) => /* @__PURE__ */ (0, P.jsxs)("tr", { children: [/* @__PURE__ */ (0, P.jsxs)("td", { children: [/* @__PURE__ */ (0, P.jsx)("p", { children: /* @__PURE__ */ (0, P.jsx)("strong", { children: t.specifier }) }), /* @__PURE__ */ (0, P.jsxs)("p", { children: [
				/* @__PURE__ */ (0, P.jsx)(Ve, {
					config: e,
					simulationRounds: t.simulation_rounds
				}),
				t.group3 && /* @__PURE__ */ (0, P.jsx)("span", {
					className: "badge badge-info",
					children: "Group III"
				}),
				/* @__PURE__ */ (0, P.jsx)(ze, {
					config: e,
					sectors: t.sectors
				})
			] })] }), /* @__PURE__ */ (0, P.jsxs)("td", { children: [/* @__PURE__ */ (0, P.jsx)(Y, { children: t.description }), /* @__PURE__ */ (0, P.jsx)(Y, { children: t.description_note })] })] }, t.specifier)) })
		]
	});
};
Gs.propTypes = {
	config: F.default.object.isRequired,
	caption: F.default.string.isRequired,
	rows: F.default.array.isRequired,
	group3: F.default.bool
};
//#endregion
//#region app/js/components/tables/SpeciesTable.jsx
var Ks = function({ config: e, caption: t, rows: n }) {
	return /* @__PURE__ */ (0, P.jsx)("div", {
		className: "w-50",
		children: /* @__PURE__ */ (0, P.jsxs)("table", {
			className: "table table-bordered table-fixed",
			children: [
				/* @__PURE__ */ (0, P.jsx)("caption", { children: /* @__PURE__ */ (0, P.jsx)(Y, {
					components: { p: "span" },
					children: t
				}) }),
				/* @__PURE__ */ (0, P.jsx)("thead", {
					className: "thead-dark",
					children: /* @__PURE__ */ (0, P.jsxs)("tr", { children: [/* @__PURE__ */ (0, P.jsx)("th", {
						style: { width: "70%" },
						children: "Species"
					}), /* @__PURE__ */ (0, P.jsx)("th", {
						style: { width: "30%" },
						children: "Specifier"
					})] })
				}),
				/* @__PURE__ */ (0, P.jsx)("tbody", { children: vs(e, n, closed).map((e, t) => /* @__PURE__ */ (0, P.jsxs)("tr", { children: [/* @__PURE__ */ (0, P.jsx)("td", { children: e.title }), /* @__PURE__ */ (0, P.jsx)("td", { children: /* @__PURE__ */ (0, P.jsx)("strong", { children: e.specifier }) })] }, t)) })
			]
		})
	});
};
Ks.propTypes = {
	config: F.default.object.isRequired,
	caption: F.default.string.isRequired,
	rows: F.default.array.isRequired
};
//#endregion
//#region app/js/components/tables/StationTable.jsx
var qs = function({ config: e, caption: t, rows: n }) {
	return /* @__PURE__ */ (0, P.jsx)("div", {
		className: "w-100",
		children: /* @__PURE__ */ (0, P.jsxs)("table", {
			className: "table table-bordered table-fixed",
			children: [
				/* @__PURE__ */ (0, P.jsx)("caption", { children: /* @__PURE__ */ (0, P.jsx)(Y, {
					components: { p: "span" },
					children: t
				}) }),
				/* @__PURE__ */ (0, P.jsx)("thead", {
					className: "thead-dark",
					children: /* @__PURE__ */ (0, P.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, P.jsx)("th", {
							style: { width: "20%" },
							children: "River Basin"
						}),
						/* @__PURE__ */ (0, P.jsx)("th", {
							style: { width: "20%" },
							children: "Station"
						}),
						/* @__PURE__ */ (0, P.jsx)("th", {
							style: { width: "30%" },
							children: "Specifier"
						}),
						/* @__PURE__ */ (0, P.jsx)("th", {
							style: { width: "20%" },
							children: "Coordinates (Lat, Lon)"
						})
					] })
				}),
				/* @__PURE__ */ (0, P.jsx)("tbody", { children: (0, M.orderBy)(vs(e, n), ["river", "title"]).map((e, t) => /* @__PURE__ */ (0, P.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, P.jsx)("td", { children: e.river }),
					/* @__PURE__ */ (0, P.jsx)("td", { children: e.title }),
					/* @__PURE__ */ (0, P.jsx)("td", { children: /* @__PURE__ */ (0, P.jsxs)("strong", { children: [
						e.river_specifier,
						"-",
						e.specifier_file || e.specifier
					] }) }),
					/* @__PURE__ */ (0, P.jsx)("td", { children: e.lat && e.lon && /* @__PURE__ */ (0, P.jsxs)("span", { children: [
						"(",
						e.lat,
						", ",
						e.lon,
						")"
					] }) })
				] }, t)) })
			]
		})
	});
};
qs.propTypes = {
	config: F.default.object.isRequired,
	caption: F.default.string.isRequired,
	rows: F.default.array.isRequired
};
//#endregion
//#region app/js/components/tables/VariableTable.jsx
var Js = function({ config: e, caption: t, rows: n, groups: r, toggleGroup: i, toggleGroups: a }) {
	let o = Ss(e, n, r), s = o.length == 0, c = o.every((e) => !e.closed), l = () => a(o, c), u = (e, t) => t === null ? e : e + "-" + t, d = (t) => {
		let n = xs(e, t.extension);
		return n ? Array.isArray(n) ? /* @__PURE__ */ (0, P.jsx)("strong", { children: n.map((e) => u(t.specifier, e)).join(", ") }) : typeof n == "object" ? /* @__PURE__ */ (0, P.jsx)("ul", {
			className: "list-unstyled",
			children: Object.keys(n).map((e, r) => Array.isArray(n[e]) ? /* @__PURE__ */ (0, P.jsxs)("li", { children: [
				/* @__PURE__ */ (0, P.jsxs)("em", {
					className: "sector",
					children: [e, ":"]
				}),
				" ",
				/* @__PURE__ */ (0, P.jsx)("strong", { children: n[e].map((e) => u(t.specifier, e)).join(", ") })
			] }, r) : /* @__PURE__ */ (0, P.jsxs)("li", { children: [
				/* @__PURE__ */ (0, P.jsxs)("em", {
					className: "sector",
					children: [e, ":"]
				}),
				" ",
				/* @__PURE__ */ (0, P.jsx)("strong", { children: u(t.specifier, n[e]) })
			] }, r))
		}) : /* @__PURE__ */ (0, P.jsx)("strong", { children: t.specifier + "-" + n }) : /* @__PURE__ */ (0, P.jsx)("strong", { children: t.specifier });
	}, f = (t) => {
		let n = xs(e, t.resolution);
		if (Array.isArray(n)) return n.map((e, t) => /* @__PURE__ */ (0, P.jsx)("li", { children: e }, t));
		if (typeof n == "object") {
			if (Object.keys(n).length > 1) return Object.keys(n).map((e, t) => /* @__PURE__ */ (0, P.jsxs)("li", { children: [
				/* @__PURE__ */ (0, P.jsxs)("em", {
					className: "sector",
					children: [e, ":"]
				}),
				" ",
				typeof n[e] == "object" && /* @__PURE__ */ (0, P.jsx)("ul", { children: n[e].map((e, t) => /* @__PURE__ */ (0, P.jsx)("li", { children: /* @__PURE__ */ (0, P.jsx)(Y, { children: e }) }, t)) }),
				typeof n[e] != "object" && /* @__PURE__ */ (0, P.jsx)(Y, { children: n[e] })
			] }, t));
			{
				let e = Object.values(n)[0];
				return Array.isArray(e) ? e.map((e, t) => /* @__PURE__ */ (0, P.jsx)("li", { children: e }, t)) : /* @__PURE__ */ (0, P.jsx)("li", { children: /* @__PURE__ */ (0, P.jsx)(Y, { children: e }) });
			}
		} else return /* @__PURE__ */ (0, P.jsx)("li", { children: /* @__PURE__ */ (0, P.jsx)(Y, { children: n }) });
	}, p = (t) => {
		let n = xs(e, t.frequency);
		return typeof n == "object" ? Object.keys(n).length > 1 ? Object.keys(n).map((e, t) => /* @__PURE__ */ (0, P.jsxs)("li", { children: [
			/* @__PURE__ */ (0, P.jsxs)("em", {
				className: "sector",
				children: [e, ":"]
			}),
			" ",
			n[e]
		] }, t)) : /* @__PURE__ */ (0, P.jsxs)("li", { children: [Object.values(n)[0], " "] }) : /* @__PURE__ */ (0, P.jsx)("li", { children: n });
	}, m = (t) => {
		let n = xs(e, t.dimensions);
		return n === null ? null : Array.isArray(n) ? /* @__PURE__ */ (0, P.jsxs)("p", { children: [
			/* @__PURE__ */ (0, P.jsx)("b", { children: "Level dimensions:" }),
			" (",
			n.join(", "),
			")."
		] }) : typeof n == "object" ? Object.keys(n).length > 1 ? /* @__PURE__ */ (0, P.jsxs)(P.Fragment, { children: [/* @__PURE__ */ (0, P.jsx)("p", { children: /* @__PURE__ */ (0, P.jsx)("b", { children: "Level dimensions:" }) }), /* @__PURE__ */ (0, P.jsx)("ul", { children: Object.keys(n).map((e, t) => /* @__PURE__ */ (0, P.jsxs)("li", {
			className: "mb-0",
			children: [
				/* @__PURE__ */ (0, P.jsxs)("em", {
					className: "sector",
					children: [e, ":"]
				}),
				" ",
				n[e] === null ? /* @__PURE__ */ (0, P.jsx)("span", { children: "no dimensions" }) : /* @__PURE__ */ (0, P.jsxs)("span", { children: [
					"(",
					n[e].join(", "),
					")"
				] })
			]
		}, t)) })] }) : /* @__PURE__ */ (0, P.jsxs)("p", { children: [
			/* @__PURE__ */ (0, P.jsx)("b", { children: "Level dimensions:" }),
			" (",
			Object.values(n)[0].join(", "),
			")."
		] }) : null;
	}, h = (t) => {
		let n = xs(e, t.comment);
		return typeof n == "object" ? Object.keys(n).length > 1 ? Object.keys(n).map((e, t) => /* @__PURE__ */ (0, P.jsxs)("p", { children: [
			/* @__PURE__ */ (0, P.jsxs)("em", {
				className: "sector",
				children: [e, ":"]
			}),
			" ",
			/* @__PURE__ */ (0, P.jsx)(Y, {
				components: { p: "span" },
				children: n[e]
			})
		] }, t)) : /* @__PURE__ */ (0, P.jsx)(Y, { children: Object.values(n)[0] }) : /* @__PURE__ */ (0, P.jsx)(Y, { children: n });
	}, g = (t) => {
		let n = xs(e, t.units);
		return !(0, M.isUndefined)(n) && /* @__PURE__ */ (0, P.jsxs)(P.Fragment, { children: [/* @__PURE__ */ (0, P.jsx)("p", {
			className: "mb-1",
			children: /* @__PURE__ */ (0, P.jsx)("strong", { children: "Unit:" })
		}), /* @__PURE__ */ (0, P.jsx)("p", { children: n })] });
	}, _ = (t) => {
		let n = xs(e, t.valid_min), r = xs(e, t.valid_max);
		return !(0, M.isUndefined)(n) && !(0, M.isUndefined)(r) && /* @__PURE__ */ (0, P.jsxs)(P.Fragment, { children: [
			/* @__PURE__ */ (0, P.jsx)("div", { className: "separator" }),
			/* @__PURE__ */ (0, P.jsx)("p", {
				className: "mb-1",
				children: /* @__PURE__ */ (0, P.jsx)("strong", { children: "Valid range:" })
			}),
			/* @__PURE__ */ (0, P.jsxs)("p", { children: [
				n,
				" - ",
				r
			] })
		] });
	};
	return /* @__PURE__ */ (0, P.jsx)("div", {
		className: "w-100",
		children: /* @__PURE__ */ (0, P.jsxs)("table", {
			className: "table table-bordered table-fixed",
			children: [
				/* @__PURE__ */ (0, P.jsx)("caption", { children: /* @__PURE__ */ (0, P.jsx)(Y, {
					components: { p: "span" },
					children: t
				}) }),
				/* @__PURE__ */ (0, P.jsx)("thead", {
					className: "thead-dark",
					children: /* @__PURE__ */ (0, P.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, P.jsx)("th", {
							style: { width: "20%" },
							children: "Variable long name"
						}),
						/* @__PURE__ */ (0, P.jsx)("th", {
							style: { width: "15%" },
							children: "Variable specifier"
						}),
						/* @__PURE__ */ (0, P.jsx)("th", {
							style: { width: "15%" },
							children: "Unit / Valid range"
						}),
						/* @__PURE__ */ (0, P.jsx)("th", {
							style: { width: "15%" },
							children: "Resolution"
						}),
						/* @__PURE__ */ (0, P.jsxs)("th", {
							style: { width: "35%" },
							children: ["Comments", !s && /* @__PURE__ */ (0, P.jsx)(Ts, {
								className: "float-right",
								closed: !c,
								all: !0,
								toggle: l
							})]
						})
					] })
				}),
				/* @__PURE__ */ (0, P.jsxs)("tbody", { children: [o.map((t) => {
					let n = (e) => [/* @__PURE__ */ (0, P.jsx)("tr", { children: /* @__PURE__ */ (0, P.jsxs)("td", {
						colSpan: "5",
						className: "table-secondary",
						children: [/* @__PURE__ */ (0, P.jsx)(Ts, {
							className: "float-right",
							closed: e.closed,
							toggle: () => i(e)
						}), /* @__PURE__ */ (0, P.jsx)("strong", { children: e.title })]
					}) }, "-1")];
					return t.closed ? n(t) : n(t).concat(t.rows.map((t, n) => /* @__PURE__ */ (0, P.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, P.jsx)("td", { children: t.long_name }),
						/* @__PURE__ */ (0, P.jsx)("td", { children: d(t) }),
						/* @__PURE__ */ (0, P.jsxs)("td", { children: [g(t), _(t)] }),
						/* @__PURE__ */ (0, P.jsxs)("td", { children: [/* @__PURE__ */ (0, P.jsx)("ul", {
							className: "resolution-list",
							children: f(t)
						}), /* @__PURE__ */ (0, P.jsx)("ul", {
							className: "resolution-list",
							children: p(t)
						})] }),
						/* @__PURE__ */ (0, P.jsxs)("td", { children: [
							/* @__PURE__ */ (0, P.jsx)("p", { children: /* @__PURE__ */ (0, P.jsx)(ze, {
								config: e,
								sectors: t.sectors
							}) }),
							m(t),
							h(t)
						] })
					] }, n)));
				}), s && /* @__PURE__ */ (0, P.jsx)("tr", { children: /* @__PURE__ */ (0, P.jsx)("td", {
					colSpan: "5",
					children: "No output variables have been defined for this selection of simulation round and sectors, yet."
				}) })] })
			]
		})
	});
};
Js.propTypes = {
	config: F.default.object.isRequired,
	caption: F.default.string.isRequired,
	rows: F.default.array.isRequired,
	groups: F.default.array.isRequired,
	toggleGroup: F.default.func.isRequired,
	toggleGroups: F.default.func.isRequired
};
//#endregion
//#region app/js/components/Table.jsx
var Ys = ({ identifier: e, caption: t }) => {
	let n = ue(), r = pe((e) => e.config), i = pe((e) => e.definitions), a = i.group.filter((t) => t.identifier == e), o = i[e], s = (e) => {
		n(be.toggleGroup(e.specifier));
	}, c = {
		config: r,
		definitions: i,
		caption: t,
		rows: o,
		groups: a,
		toggleGroup: s,
		toggleGroups: (e, t) => {
			t ? e.forEach((e) => s(e)) : e.filter((e) => e.closed).forEach((e) => s(e));
		},
		toggleExperiments: (e) => {
			n(be.toggleExperiments(e.specifier));
		}
	};
	switch (e) {
		case "bias_adjustment": return /* @__PURE__ */ (0, P.jsx)(Cs, { ...c });
		case "climate_forcing": return /* @__PURE__ */ (0, P.jsx)(ws, { ...c });
		case "climate_scenario": return /* @__PURE__ */ (0, P.jsx)(Gs, { ...c });
		case "climate_variable": return /* @__PURE__ */ (0, P.jsx)(Vs, { ...c });
		case "crop": return /* @__PURE__ */ (0, P.jsx)(Es, { ...c });
		case "experiments": return /* @__PURE__ */ (0, P.jsx)(Os, { ...c });
		case "forcing_data": return /* @__PURE__ */ (0, P.jsx)(Ms, { ...c });
		case "forest_stand": return /* @__PURE__ */ (0, P.jsx)(Ns, { ...c });
		case "group3_ranking": return /* @__PURE__ */ (0, P.jsx)(Ps, { ...c });
		case "group3_requirements": return /* @__PURE__ */ (0, P.jsx)(Fs, { ...c });
		case "geo_dataset": return /* @__PURE__ */ (0, P.jsx)(zs, { ...c });
		case "harmonization": return /* @__PURE__ */ (0, P.jsx)(Is, { ...c });
		case "irrigation": return /* @__PURE__ */ (0, P.jsx)(Hs, { ...c });
		case "lake_site": return /* @__PURE__ */ (0, P.jsx)(Us, { ...c });
		case "ocean_region": return /* @__PURE__ */ (0, P.jsx)(Ws, { ...c });
		case "station": return /* @__PURE__ */ (0, P.jsx)(qs, { ...c });
		case "sens_scenario": return /* @__PURE__ */ (0, P.jsx)(Gs, {
			...c,
			group3: !0
		});
		case "soc_dataset": return /* @__PURE__ */ (0, P.jsx)(zs, {
			...c,
			group3: !0
		});
		case "soc_scenario": return /* @__PURE__ */ (0, P.jsx)(Gs, {
			...c,
			group3: !0
		});
		case "species": return /* @__PURE__ */ (0, P.jsx)(Ks, { ...c });
		case "upstream_variable": return /* @__PURE__ */ (0, P.jsx)(Vs, { ...c });
		case "variable": return /* @__PURE__ */ (0, P.jsx)(Js, { ...c });
		default: return null;
	}
};
Ys.propTypes = {
	caption: F.default.string.isRequired,
	identifier: F.default.string.isRequired
};
//#endregion
//#region app/js/components/Title.jsx
var Xs = () => {
	let e = pe((e) => e.config);
	return (0, S.useEffect)(() => {
		let t = document.title, n = (0, M.isEmpty)(e.sectors) ? `${e.simulation_round} protocol` : `${e.simulation_round} protocol for ${e.sectors.join(", ")}`;
		return document.title = n, () => {
			document.title = t;
		};
	}), /* @__PURE__ */ (0, P.jsxs)("div", {
		className: "title",
		children: [
			/* @__PURE__ */ (0, P.jsx)(Ve, { config: e }),
			" protocol for ",
			/* @__PURE__ */ (0, P.jsx)(ze, {
				config: e,
				sectors: null
			}),
			e.simulation_round.endsWith("b") && e.group3 && /* @__PURE__ */ (0, P.jsx)("span", {
				className: "badge badge-info",
				children: "only Group III"
			})
		]
	});
}, Zs = /* @__PURE__ */ s(((e, t) => {
	(function(e, n) {
		typeof t == "object" && typeof t.exports == "object" ? t.exports = e.document ? n(e, !0) : function(e) {
			if (!e.document) throw Error("jQuery requires a window with a document");
			return n(e);
		} : n(e);
	})(typeof window < "u" ? window : e, function(e, t) {
		var n = [], r = Object.getPrototypeOf, i = n.slice, a = n.flat ? function(e) {
			return n.flat.call(e);
		} : function(e) {
			return n.concat.apply([], e);
		}, o = n.push, s = n.indexOf, c = {}, l = c.toString, u = c.hasOwnProperty, d = u.toString, f = d.call(Object), p = {}, m = function(e) {
			return typeof e == "function" && typeof e.nodeType != "number" && typeof e.item != "function";
		}, h = function(e) {
			return e != null && e === e.window;
		}, g = e.document, _ = {
			type: !0,
			src: !0,
			nonce: !0,
			noModule: !0
		};
		function v(e, t, n) {
			n ||= g;
			var r, i, a = n.createElement("script");
			if (a.text = e, t) for (r in _) i = t[r] || t.getAttribute && t.getAttribute(r), i && a.setAttribute(r, i);
			n.head.appendChild(a).parentNode.removeChild(a);
		}
		function y(e) {
			return e == null ? e + "" : typeof e == "object" || typeof e == "function" ? c[l.call(e)] || "object" : typeof e;
		}
		var b = "3.7.1", x = /HTML$/i, S = function(e, t) {
			return new S.fn.init(e, t);
		};
		S.fn = S.prototype = {
			jquery: b,
			constructor: S,
			length: 0,
			toArray: function() {
				return i.call(this);
			},
			get: function(e) {
				return e == null ? i.call(this) : e < 0 ? this[e + this.length] : this[e];
			},
			pushStack: function(e) {
				var t = S.merge(this.constructor(), e);
				return t.prevObject = this, t;
			},
			each: function(e) {
				return S.each(this, e);
			},
			map: function(e) {
				return this.pushStack(S.map(this, function(t, n) {
					return e.call(t, n, t);
				}));
			},
			slice: function() {
				return this.pushStack(i.apply(this, arguments));
			},
			first: function() {
				return this.eq(0);
			},
			last: function() {
				return this.eq(-1);
			},
			even: function() {
				return this.pushStack(S.grep(this, function(e, t) {
					return (t + 1) % 2;
				}));
			},
			odd: function() {
				return this.pushStack(S.grep(this, function(e, t) {
					return t % 2;
				}));
			},
			eq: function(e) {
				var t = this.length, n = +e + (e < 0 ? t : 0);
				return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
			},
			end: function() {
				return this.prevObject || this.constructor();
			},
			push: o,
			sort: n.sort,
			splice: n.splice
		}, S.extend = S.fn.extend = function() {
			var e, t, n, r, i, a, o = arguments[0] || {}, s = 1, c = arguments.length, l = !1;
			for (typeof o == "boolean" && (l = o, o = arguments[s] || {}, s++), typeof o != "object" && !m(o) && (o = {}), s === c && (o = this, s--); s < c; s++) if ((e = arguments[s]) != null) for (t in e) r = e[t], !(t === "__proto__" || o === r) && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = o[t], a = i && !Array.isArray(n) ? [] : !i && !S.isPlainObject(n) ? {} : n, i = !1, o[t] = S.extend(l, a, r)) : r !== void 0 && (o[t] = r));
			return o;
		}, S.extend({
			expando: "jQuery" + (b + Math.random()).replace(/\D/g, ""),
			isReady: !0,
			error: function(e) {
				throw Error(e);
			},
			noop: function() {},
			isPlainObject: function(e) {
				var t, n;
				return !e || l.call(e) !== "[object Object]" ? !1 : (t = r(e), t ? (n = u.call(t, "constructor") && t.constructor, typeof n == "function" && d.call(n) === f) : !0);
			},
			isEmptyObject: function(e) {
				for (var t in e) return !1;
				return !0;
			},
			globalEval: function(e, t, n) {
				v(e, { nonce: t && t.nonce }, n);
			},
			each: function(e, t) {
				var n, r = 0;
				if (C(e)) for (n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++);
				else for (r in e) if (t.call(e[r], r, e[r]) === !1) break;
				return e;
			},
			text: function(e) {
				var t, n = "", r = 0, i = e.nodeType;
				if (!i) for (; t = e[r++];) n += S.text(t);
				return i === 1 || i === 11 ? e.textContent : i === 9 ? e.documentElement.textContent : i === 3 || i === 4 ? e.nodeValue : n;
			},
			makeArray: function(e, t) {
				var n = t || [];
				return e != null && (C(Object(e)) ? S.merge(n, typeof e == "string" ? [e] : e) : o.call(n, e)), n;
			},
			inArray: function(e, t, n) {
				return t == null ? -1 : s.call(t, e, n);
			},
			isXMLDoc: function(e) {
				var t = e && e.namespaceURI, n = e && (e.ownerDocument || e).documentElement;
				return !x.test(t || n && n.nodeName || "HTML");
			},
			merge: function(e, t) {
				for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
				return e.length = i, e;
			},
			grep: function(e, t, n) {
				for (var r, i = [], a = 0, o = e.length, s = !n; a < o; a++) r = !t(e[a], a), r !== s && i.push(e[a]);
				return i;
			},
			map: function(e, t, n) {
				var r, i, o = 0, s = [];
				if (C(e)) for (r = e.length; o < r; o++) i = t(e[o], o, n), i != null && s.push(i);
				else for (o in e) i = t(e[o], o, n), i != null && s.push(i);
				return a(s);
			},
			guid: 1,
			support: p
		}), typeof Symbol == "function" && (S.fn[Symbol.iterator] = n[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
			c["[object " + t + "]"] = t.toLowerCase();
		});
		function C(e) {
			var t = !!e && "length" in e && e.length, n = y(e);
			return m(e) || h(e) ? !1 : n === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in e;
		}
		function w(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
		}
		var T = n.pop, E = n.sort, ee = n.splice, D = "[\\x20\\t\\r\\n\\f]", te = RegExp("^" + D + "+|((?:^|[^\\\\])(?:\\\\.)*)" + D + "+$", "g");
		S.contains = function(e, t) {
			var n = t && t.parentNode;
			return e === n || !!(n && n.nodeType === 1 && (e.contains ? e.contains(n) : e.compareDocumentPosition && e.compareDocumentPosition(n) & 16));
		};
		var ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
		function re(e, t) {
			return t ? e === "\0" ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
		}
		S.escapeSelector = function(e) {
			return (e + "").replace(ne, re);
		};
		var O = g, ie = o;
		(function() {
			var t, r, a, o, c, l = ie, d, f, m, h, g, _ = S.expando, v = 0, y = 0, b = Se(), x = Se(), C = Se(), ne = Se(), re = function(e, t) {
				return e === t && (c = !0), 0;
			}, k = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", A = "(?:\\\\[\\da-fA-F]{1,6}" + D + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", ae = "\\[" + D + "*(" + A + ")(?:" + D + "*([*^$|!~]?=)" + D + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + A + "))|)" + D + "*\\]", oe = ":(" + A + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)", se = RegExp(D + "+", "g"), j = RegExp("^" + D + "*," + D + "*"), ce = RegExp("^" + D + "*([>+~]|" + D + ")" + D + "*"), le = RegExp(D + "|>"), ue = new RegExp(oe), de = RegExp("^" + A + "$"), fe = {
				ID: RegExp("^#(" + A + ")"),
				CLASS: RegExp("^\\.(" + A + ")"),
				TAG: RegExp("^(" + A + "|[*])"),
				ATTR: RegExp("^" + ae),
				PSEUDO: RegExp("^" + oe),
				CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + D + "*(even|odd|(([+-]|)(\\d*)n|)" + D + "*(?:([+-]|)" + D + "*(\\d+)|))" + D + "*\\)|)", "i"),
				bool: RegExp("^(?:" + k + ")$", "i"),
				needsContext: RegExp("^" + D + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + D + "*((?:-\\d)?\\d*)" + D + "*\\)|)(?=[^-]|$)", "i")
			}, pe = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, he = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ge = /[+~]/, _e = RegExp("\\\\[\\da-fA-F]{1,6}" + D + "?|\\\\([^\\r\\n\\f])", "g"), ve = function(e, t) {
				var n = "0x" + e.slice(1) - 65536;
				return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, n & 1023 | 56320));
			}, ye = function() {
				ke();
			}, be = Ne(function(e) {
				return e.disabled === !0 && w(e, "fieldset");
			}, {
				dir: "parentNode",
				next: "legend"
			});
			function xe() {
				try {
					return d.activeElement;
				} catch {}
			}
			try {
				l.apply(n = i.call(O.childNodes), O.childNodes), n[O.childNodes.length].nodeType;
			} catch {
				l = {
					apply: function(e, t) {
						ie.apply(e, i.call(t));
					},
					call: function(e) {
						ie.apply(e, i.call(arguments, 1));
					}
				};
			}
			function M(e, t, n, r) {
				var i, a, o, s, c, u, f, g = t && t.ownerDocument, v = t ? t.nodeType : 9;
				if (n ||= [], typeof e != "string" || !e || v !== 1 && v !== 9 && v !== 11) return n;
				if (!r && (ke(t), t ||= d, m)) {
					if (v !== 11 && (c = he.exec(e))) {
						if (i = c[1]) {
							if (v === 9) if (o = t.getElementById(i)) {
								if (o.id === i) return l.call(n, o), n;
							} else return n;
							else if (g && (o = g.getElementById(i)) && M.contains(t, o) && o.id === i) return l.call(n, o), n;
						} else if (c[2]) return l.apply(n, t.getElementsByTagName(e)), n;
						else if ((i = c[3]) && t.getElementsByClassName) return l.apply(n, t.getElementsByClassName(i)), n;
					}
					if (!ne[e + " "] && (!h || !h.test(e))) {
						if (f = e, g = t, v === 1 && (le.test(e) || ce.test(e))) {
							for (g = ge.test(e) && Oe(t.parentNode) || t, (g != t || !p.scope) && ((s = t.getAttribute("id")) ? s = S.escapeSelector(s) : t.setAttribute("id", s = _)), u = je(e), a = u.length; a--;) u[a] = (s ? "#" + s : ":scope") + " " + Me(u[a]);
							f = u.join(",");
						}
						try {
							return l.apply(n, g.querySelectorAll(f)), n;
						} catch {
							ne(e, !0);
						} finally {
							s === _ && t.removeAttribute("id");
						}
					}
				}
				return ze(e.replace(te, "$1"), t, n, r);
			}
			function Se() {
				var e = [];
				function t(n, i) {
					return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
				}
				return t;
			}
			function Ce(e) {
				return e[_] = !0, e;
			}
			function we(e) {
				var t = d.createElement("fieldset");
				try {
					return !!e(t);
				} catch {
					return !1;
				} finally {
					t.parentNode && t.parentNode.removeChild(t), t = null;
				}
			}
			function Te(e) {
				return function(t) {
					return w(t, "input") && t.type === e;
				};
			}
			function Ee(e) {
				return function(t) {
					return (w(t, "input") || w(t, "button")) && t.type === e;
				};
			}
			function N(e) {
				return function(t) {
					return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && be(t) === e : t.disabled === e : "label" in t ? t.disabled === e : !1;
				};
			}
			function De(e) {
				return Ce(function(t) {
					return t = +t, Ce(function(n, r) {
						for (var i, a = e([], n.length, t), o = a.length; o--;) n[i = a[o]] && (n[i] = !(r[i] = n[i]));
					});
				});
			}
			function Oe(e) {
				return e && e.getElementsByTagName !== void 0 && e;
			}
			function ke(e) {
				var t, n = e ? e.ownerDocument || e : O;
				return n == d || n.nodeType !== 9 || !n.documentElement ? d : (d = n, f = d.documentElement, m = !S.isXMLDoc(d), g = f.matches || f.webkitMatchesSelector || f.msMatchesSelector, f.msMatchesSelector && O != d && (t = d.defaultView) && t.top !== t && t.addEventListener("unload", ye), p.getById = we(function(e) {
					return f.appendChild(e).id = S.expando, !d.getElementsByName || !d.getElementsByName(S.expando).length;
				}), p.disconnectedMatch = we(function(e) {
					return g.call(e, "*");
				}), p.scope = we(function() {
					return d.querySelectorAll(":scope");
				}), p.cssHas = we(function() {
					try {
						return d.querySelector(":has(*,:jqfake)"), !1;
					} catch {
						return !0;
					}
				}), p.getById ? (r.filter.ID = function(e) {
					var t = e.replace(_e, ve);
					return function(e) {
						return e.getAttribute("id") === t;
					};
				}, r.find.ID = function(e, t) {
					if (t.getElementById !== void 0 && m) {
						var n = t.getElementById(e);
						return n ? [n] : [];
					}
				}) : (r.filter.ID = function(e) {
					var t = e.replace(_e, ve);
					return function(e) {
						var n = e.getAttributeNode !== void 0 && e.getAttributeNode("id");
						return n && n.value === t;
					};
				}, r.find.ID = function(e, t) {
					if (t.getElementById !== void 0 && m) {
						var n, r, i, a = t.getElementById(e);
						if (a) {
							if (n = a.getAttributeNode("id"), n && n.value === e) return [a];
							for (i = t.getElementsByName(e), r = 0; a = i[r++];) if (n = a.getAttributeNode("id"), n && n.value === e) return [a];
						}
						return [];
					}
				}), r.find.TAG = function(e, t) {
					return t.getElementsByTagName === void 0 ? t.querySelectorAll(e) : t.getElementsByTagName(e);
				}, r.find.CLASS = function(e, t) {
					if (t.getElementsByClassName !== void 0 && m) return t.getElementsByClassName(e);
				}, h = [], we(function(e) {
					var t;
					f.appendChild(e).innerHTML = "<a id='" + _ + "' href='' disabled='disabled'></a><select id='" + _ + "-\r\\' disabled='disabled'><option selected=''></option></select>", e.querySelectorAll("[selected]").length || h.push("\\[" + D + "*(?:value|" + k + ")"), e.querySelectorAll("[id~=" + _ + "-]").length || h.push("~="), e.querySelectorAll("a#" + _ + "+*").length || h.push(".#.+[+~]"), e.querySelectorAll(":checked").length || h.push(":checked"), t = d.createElement("input"), t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), f.appendChild(e).disabled = !0, e.querySelectorAll(":disabled").length !== 2 && h.push(":enabled", ":disabled"), t = d.createElement("input"), t.setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || h.push("\\[" + D + "*name" + D + "*=" + D + "*(?:''|\"\")");
				}), p.cssHas || h.push(":has"), h = h.length && new RegExp(h.join("|")), re = function(e, t) {
					if (e === t) return c = !0, 0;
					var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
					return n || (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, n & 1 || !p.sortDetached && t.compareDocumentPosition(e) === n ? e === d || e.ownerDocument == O && M.contains(O, e) ? -1 : t === d || t.ownerDocument == O && M.contains(O, t) ? 1 : o ? s.call(o, e) - s.call(o, t) : 0 : n & 4 ? -1 : 1);
				}, d);
			}
			for (t in M.matches = function(e, t) {
				return M(e, null, null, t);
			}, M.matchesSelector = function(e, t) {
				if (ke(e), m && !ne[t + " "] && (!h || !h.test(t))) try {
					var n = g.call(e, t);
					if (n || p.disconnectedMatch || e.document && e.document.nodeType !== 11) return n;
				} catch {
					ne(t, !0);
				}
				return M(t, d, null, [e]).length > 0;
			}, M.contains = function(e, t) {
				return (e.ownerDocument || e) != d && ke(e), S.contains(e, t);
			}, M.attr = function(e, t) {
				(e.ownerDocument || e) != d && ke(e);
				var n = r.attrHandle[t.toLowerCase()], i = n && u.call(r.attrHandle, t.toLowerCase()) ? n(e, t, !m) : void 0;
				return i === void 0 ? e.getAttribute(t) : i;
			}, M.error = function(e) {
				throw Error("Syntax error, unrecognized expression: " + e);
			}, S.uniqueSort = function(e) {
				var t, n = [], r = 0, a = 0;
				if (c = !p.sortStable, o = !p.sortStable && i.call(e, 0), E.call(e, re), c) {
					for (; t = e[a++];) t === e[a] && (r = n.push(a));
					for (; r--;) ee.call(e, n[r], 1);
				}
				return o = null, e;
			}, S.fn.uniqueSort = function() {
				return this.pushStack(S.uniqueSort(i.apply(this)));
			}, r = S.expr = {
				cacheLength: 50,
				createPseudo: Ce,
				match: fe,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": { dir: "parentNode" },
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": { dir: "previousSibling" }
				},
				preFilter: {
					ATTR: function(e) {
						return e[1] = e[1].replace(_e, ve), e[3] = (e[3] || e[4] || e[5] || "").replace(_e, ve), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4);
					},
					CHILD: function(e) {
						return e[1] = e[1].toLowerCase(), e[1].slice(0, 3) === "nth" ? (e[3] || M.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd")), e[5] = +(e[7] + e[8] || e[3] === "odd")) : e[3] && M.error(e[0]), e;
					},
					PSEUDO: function(e) {
						var t, n = !e[6] && e[2];
						return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = je(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
					}
				},
				filter: {
					TAG: function(e) {
						var t = e.replace(_e, ve).toLowerCase();
						return e === "*" ? function() {
							return !0;
						} : function(e) {
							return w(e, t);
						};
					},
					CLASS: function(e) {
						var t = b[e + " "];
						return t || (t = RegExp("(^|" + D + ")" + e + "(" + D + "|$)")) && b(e, function(e) {
							return t.test(typeof e.className == "string" && e.className || e.getAttribute !== void 0 && e.getAttribute("class") || "");
						});
					},
					ATTR: function(e, t, n) {
						return function(r) {
							var i = M.attr(r, e);
							return i == null ? t === "!=" : t ? (i += "", t === "=" ? i === n : t === "!=" ? i !== n : t === "^=" ? n && i.indexOf(n) === 0 : t === "*=" ? n && i.indexOf(n) > -1 : t === "$=" ? n && i.slice(-n.length) === n : t === "~=" ? (" " + i.replace(se, " ") + " ").indexOf(n) > -1 : t === "|=" ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0;
						};
					},
					CHILD: function(e, t, n, r, i) {
						var a = e.slice(0, 3) !== "nth", o = e.slice(-4) !== "last", s = t === "of-type";
						return r === 1 && i === 0 ? function(e) {
							return !!e.parentNode;
						} : function(t, n, c) {
							var l, u, d, f, p, m = a === o ? "previousSibling" : "nextSibling", h = t.parentNode, g = s && t.nodeName.toLowerCase(), y = !c && !s, b = !1;
							if (h) {
								if (a) {
									for (; m;) {
										for (d = t; d = d[m];) if (s ? w(d, g) : d.nodeType === 1) return !1;
										p = m = e === "only" && !p && "nextSibling";
									}
									return !0;
								}
								if (p = [o ? h.firstChild : h.lastChild], o && y) {
									for (u = h[_] || (h[_] = {}), l = u[e] || [], f = l[0] === v && l[1], b = f && l[2], d = f && h.childNodes[f]; d = ++f && d && d[m] || (b = f = 0) || p.pop();) if (d.nodeType === 1 && ++b && d === t) {
										u[e] = [
											v,
											f,
											b
										];
										break;
									}
								} else if (y && (u = t[_] || (t[_] = {}), l = u[e] || [], f = l[0] === v && l[1], b = f), b === !1) for (; (d = ++f && d && d[m] || (b = f = 0) || p.pop()) && !((s ? w(d, g) : d.nodeType === 1) && ++b && (y && (u = d[_] || (d[_] = {}), u[e] = [v, b]), d === t)););
								return b -= i, b === r || b % r === 0 && b / r >= 0;
							}
						};
					},
					PSEUDO: function(e, t) {
						var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || M.error("unsupported pseudo: " + e);
						return i[_] ? i(t) : i.length > 1 ? (n = [
							e,
							e,
							"",
							t
						], r.setFilters.hasOwnProperty(e.toLowerCase()) ? Ce(function(e, n) {
							for (var r, a = i(e, t), o = a.length; o--;) r = s.call(e, a[o]), e[r] = !(n[r] = a[o]);
						}) : function(e) {
							return i(e, 0, n);
						}) : i;
					}
				},
				pseudos: {
					not: Ce(function(e) {
						var t = [], n = [], r = Re(e.replace(te, "$1"));
						return r[_] ? Ce(function(e, t, n, i) {
							for (var a, o = r(e, null, i, []), s = e.length; s--;) (a = o[s]) && (e[s] = !(t[s] = a));
						}) : function(e, i, a) {
							return t[0] = e, r(t, null, a, n), t[0] = null, !n.pop();
						};
					}),
					has: Ce(function(e) {
						return function(t) {
							return M(e, t).length > 0;
						};
					}),
					contains: Ce(function(e) {
						return e = e.replace(_e, ve), function(t) {
							return (t.textContent || S.text(t)).indexOf(e) > -1;
						};
					}),
					lang: Ce(function(e) {
						return de.test(e || "") || M.error("unsupported lang: " + e), e = e.replace(_e, ve).toLowerCase(), function(t) {
							var n;
							do
								if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || n.indexOf(e + "-") === 0;
							while ((t = t.parentNode) && t.nodeType === 1);
							return !1;
						};
					}),
					target: function(t) {
						var n = e.location && e.location.hash;
						return n && n.slice(1) === t.id;
					},
					root: function(e) {
						return e === f;
					},
					focus: function(e) {
						return e === xe() && d.hasFocus() && !!(e.type || e.href || ~e.tabIndex);
					},
					enabled: N(!1),
					disabled: N(!0),
					checked: function(e) {
						return w(e, "input") && !!e.checked || w(e, "option") && !!e.selected;
					},
					selected: function(e) {
						return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
					},
					empty: function(e) {
						for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
						return !0;
					},
					parent: function(e) {
						return !r.pseudos.empty(e);
					},
					header: function(e) {
						return me.test(e.nodeName);
					},
					input: function(e) {
						return pe.test(e.nodeName);
					},
					button: function(e) {
						return w(e, "input") && e.type === "button" || w(e, "button");
					},
					text: function(e) {
						var t;
						return w(e, "input") && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === "text");
					},
					first: De(function() {
						return [0];
					}),
					last: De(function(e, t) {
						return [t - 1];
					}),
					eq: De(function(e, t, n) {
						return [n < 0 ? n + t : n];
					}),
					even: De(function(e, t) {
						for (var n = 0; n < t; n += 2) e.push(n);
						return e;
					}),
					odd: De(function(e, t) {
						for (var n = 1; n < t; n += 2) e.push(n);
						return e;
					}),
					lt: De(function(e, t, n) {
						for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
						return e;
					}),
					gt: De(function(e, t, n) {
						for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
						return e;
					})
				}
			}, r.pseudos.nth = r.pseudos.eq, {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) r.pseudos[t] = Te(t);
			for (t in {
				submit: !0,
				reset: !0
			}) r.pseudos[t] = Ee(t);
			function Ae() {}
			Ae.prototype = r.filters = r.pseudos, r.setFilters = new Ae();
			function je(e, t) {
				var n, i, a, o, s, c, l, u = x[e + " "];
				if (u) return t ? 0 : u.slice(0);
				for (s = e, c = [], l = r.preFilter; s;) {
					for (o in (!n || (i = j.exec(s))) && (i && (s = s.slice(i[0].length) || s), c.push(a = [])), n = !1, (i = ce.exec(s)) && (n = i.shift(), a.push({
						value: n,
						type: i[0].replace(te, " ")
					}), s = s.slice(n.length)), r.filter) (i = fe[o].exec(s)) && (!l[o] || (i = l[o](i))) && (n = i.shift(), a.push({
						value: n,
						type: o,
						matches: i
					}), s = s.slice(n.length));
					if (!n) break;
				}
				return t ? s.length : s ? M.error(e) : x(e, c).slice(0);
			}
			function Me(e) {
				for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
				return r;
			}
			function Ne(e, t, n) {
				var r = t.dir, i = t.next, a = i || r, o = n && a === "parentNode", s = y++;
				return t.first ? function(t, n, i) {
					for (; t = t[r];) if (t.nodeType === 1 || o) return e(t, n, i);
					return !1;
				} : function(t, n, c) {
					var l, u, d = [v, s];
					if (c) {
						for (; t = t[r];) if ((t.nodeType === 1 || o) && e(t, n, c)) return !0;
					} else for (; t = t[r];) if (t.nodeType === 1 || o) {
						if (u = t[_] || (t[_] = {}), i && w(t, i)) t = t[r] || t;
						else if ((l = u[a]) && l[0] === v && l[1] === s) return d[2] = l[2];
						else if (u[a] = d, d[2] = e(t, n, c)) return !0;
					}
					return !1;
				};
			}
			function P(e) {
				return e.length > 1 ? function(t, n, r) {
					for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;
					return !0;
				} : e[0];
			}
			function Pe(e, t, n) {
				for (var r = 0, i = t.length; r < i; r++) M(e, t[r], n);
				return n;
			}
			function Fe(e, t, n, r, i) {
				for (var a, o = [], s = 0, c = e.length, l = t != null; s < c; s++) (a = e[s]) && (!n || n(a, r, i)) && (o.push(a), l && t.push(s));
				return o;
			}
			function Ie(e, t, n, r, i, a) {
				return r && !r[_] && (r = Ie(r)), i && !i[_] && (i = Ie(i, a)), Ce(function(a, o, c, u) {
					var d, f, p, m, h = [], g = [], _ = o.length, v = a || Pe(t || "*", c.nodeType ? [c] : c, []), y = e && (a || !t) ? Fe(v, h, e, c, u) : v;
					if (n ? (m = i || (a ? e : _ || r) ? [] : o, n(y, m, c, u)) : m = y, r) for (d = Fe(m, g), r(d, [], c, u), f = d.length; f--;) (p = d[f]) && (m[g[f]] = !(y[g[f]] = p));
					if (a) {
						if (i || e) {
							if (i) {
								for (d = [], f = m.length; f--;) (p = m[f]) && d.push(y[f] = p);
								i(null, m = [], d, u);
							}
							for (f = m.length; f--;) (p = m[f]) && (d = i ? s.call(a, p) : h[f]) > -1 && (a[d] = !(o[d] = p));
						}
					} else m = Fe(m === o ? m.splice(_, m.length) : m), i ? i(null, o, m, u) : l.apply(o, m);
				});
			}
			function F(e) {
				for (var t, n, i, o = e.length, c = r.relative[e[0].type], l = c || r.relative[" "], u = +!!c, d = Ne(function(e) {
					return e === t;
				}, l, !0), f = Ne(function(e) {
					return s.call(t, e) > -1;
				}, l, !0), p = [function(e, n, r) {
					var i = !c && (r || n != a) || ((t = n).nodeType ? d(e, n, r) : f(e, n, r));
					return t = null, i;
				}]; u < o; u++) if (n = r.relative[e[u].type]) p = [Ne(P(p), n)];
				else {
					if (n = r.filter[e[u].type].apply(null, e[u].matches), n[_]) {
						for (i = ++u; i < o && !r.relative[e[i].type]; i++);
						return Ie(u > 1 && P(p), u > 1 && Me(e.slice(0, u - 1).concat({ value: e[u - 2].type === " " ? "*" : "" })).replace(te, "$1"), n, u < i && F(e.slice(u, i)), i < o && F(e = e.slice(i)), i < o && Me(e));
					}
					p.push(n);
				}
				return P(p);
			}
			function Le(e, t) {
				var n = t.length > 0, i = e.length > 0, o = function(o, s, c, u, f) {
					var p, h, g, _ = 0, y = "0", b = o && [], x = [], C = a, w = o || i && r.find.TAG("*", f), E = v += C == null ? 1 : Math.random() || .1, ee = w.length;
					for (f && (a = s == d || s || f); y !== ee && (p = w[y]) != null; y++) {
						if (i && p) {
							for (h = 0, !s && p.ownerDocument != d && (ke(p), c = !m); g = e[h++];) if (g(p, s || d, c)) {
								l.call(u, p);
								break;
							}
							f && (v = E);
						}
						n && ((p = !g && p) && _--, o && b.push(p));
					}
					if (_ += y, n && y !== _) {
						for (h = 0; g = t[h++];) g(b, x, s, c);
						if (o) {
							if (_ > 0) for (; y--;) b[y] || x[y] || (x[y] = T.call(u));
							x = Fe(x);
						}
						l.apply(u, x), f && !o && x.length > 0 && _ + t.length > 1 && S.uniqueSort(u);
					}
					return f && (v = E, a = C), b;
				};
				return n ? Ce(o) : o;
			}
			function Re(e, t) {
				var n, r = [], i = [], a = C[e + " "];
				if (!a) {
					for (t ||= je(e), n = t.length; n--;) a = F(t[n]), a[_] ? r.push(a) : i.push(a);
					a = C(e, Le(i, r)), a.selector = e;
				}
				return a;
			}
			function ze(e, t, n, i) {
				var a, o, s, c, u, d = typeof e == "function" && e, f = !i && je(e = d.selector || e);
				if (n ||= [], f.length === 1) {
					if (o = f[0] = f[0].slice(0), o.length > 2 && (s = o[0]).type === "ID" && t.nodeType === 9 && m && r.relative[o[1].type]) {
						if (t = (r.find.ID(s.matches[0].replace(_e, ve), t) || [])[0], t) d && (t = t.parentNode);
						else return n;
						e = e.slice(o.shift().value.length);
					}
					for (a = fe.needsContext.test(e) ? 0 : o.length; a-- && (s = o[a], !r.relative[c = s.type]);) if ((u = r.find[c]) && (i = u(s.matches[0].replace(_e, ve), ge.test(o[0].type) && Oe(t.parentNode) || t))) {
						if (o.splice(a, 1), e = i.length && Me(o), !e) return l.apply(n, i), n;
						break;
					}
				}
				return (d || Re(e, f))(i, t, !m, n, !t || ge.test(e) && Oe(t.parentNode) || t), n;
			}
			p.sortStable = _.split("").sort(re).join("") === _, ke(), p.sortDetached = we(function(e) {
				return e.compareDocumentPosition(d.createElement("fieldset")) & 1;
			}), S.find = M, S.expr[":"] = S.expr.pseudos, S.unique = S.uniqueSort, M.compile = Re, M.select = ze, M.setDocument = ke, M.tokenize = je, M.escape = S.escapeSelector, M.getText = S.text, M.isXML = S.isXMLDoc, M.selectors = S.expr, M.support = S.support, M.uniqueSort = S.uniqueSort;
		})();
		var k = function(e, t, n) {
			for (var r = [], i = n !== void 0; (e = e[t]) && e.nodeType !== 9;) if (e.nodeType === 1) {
				if (i && S(e).is(n)) break;
				r.push(e);
			}
			return r;
		}, A = function(e, t) {
			for (var n = []; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
			return n;
		}, ae = S.expr.match.needsContext, oe = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
		function se(e, t, n) {
			return m(t) ? S.grep(e, function(e, r) {
				return !!t.call(e, r, e) !== n;
			}) : t.nodeType ? S.grep(e, function(e) {
				return e === t !== n;
			}) : typeof t == "string" ? S.filter(t, e, n) : S.grep(e, function(e) {
				return s.call(t, e) > -1 !== n;
			});
		}
		S.filter = function(e, t, n) {
			var r = t[0];
			return n && (e = ":not(" + e + ")"), t.length === 1 && r.nodeType === 1 ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e) {
				return e.nodeType === 1;
			}));
		}, S.fn.extend({
			find: function(e) {
				var t, n, r = this.length, i = this;
				if (typeof e != "string") return this.pushStack(S(e).filter(function() {
					for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
				}));
				for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
				return r > 1 ? S.uniqueSort(n) : n;
			},
			filter: function(e) {
				return this.pushStack(se(this, e || [], !1));
			},
			not: function(e) {
				return this.pushStack(se(this, e || [], !0));
			},
			is: function(e) {
				return !!se(this, typeof e == "string" && ae.test(e) ? S(e) : e || [], !1).length;
			}
		});
		var j, ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, le = S.fn.init = function(e, t, n) {
			var r, i;
			if (!e) return this;
			if (n ||= j, typeof e == "string") if (r = e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3 ? [
				null,
				e,
				null
			] : ce.exec(e), r && (r[1] || !t)) if (r[1]) {
				if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : g, !0)), oe.test(r[1]) && S.isPlainObject(t)) for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
				return this;
			} else return i = g.getElementById(r[2]), i && (this[0] = i, this.length = 1), this;
			else if (!t || t.jquery) return (t || n).find(e);
			else return this.constructor(t).find(e);
			else if (e.nodeType) return this[0] = e, this.length = 1, this;
			else if (m(e)) return n.ready === void 0 ? e(S) : n.ready(e);
			return S.makeArray(e, this);
		};
		le.prototype = S.fn, j = S(g);
		var ue = /^(?:parents|prev(?:Until|All))/, de = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
		S.fn.extend({
			has: function(e) {
				var t = S(e, this), n = t.length;
				return this.filter(function() {
					for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
				});
			},
			closest: function(e, t) {
				var n, r = 0, i = this.length, a = [], o = typeof e != "string" && S(e);
				if (!ae.test(e)) {
					for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (o ? o.index(n) > -1 : n.nodeType === 1 && S.find.matchesSelector(n, e))) {
						a.push(n);
						break;
					}
				}
				return this.pushStack(a.length > 1 ? S.uniqueSort(a) : a);
			},
			index: function(e) {
				return e ? typeof e == "string" ? s.call(S(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
			},
			add: function(e, t) {
				return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
			},
			addBack: function(e) {
				return this.add(e == null ? this.prevObject : this.prevObject.filter(e));
			}
		});
		function fe(e, t) {
			for (; (e = e[t]) && e.nodeType !== 1;);
			return e;
		}
		S.each({
			parent: function(e) {
				var t = e.parentNode;
				return t && t.nodeType !== 11 ? t : null;
			},
			parents: function(e) {
				return k(e, "parentNode");
			},
			parentsUntil: function(e, t, n) {
				return k(e, "parentNode", n);
			},
			next: function(e) {
				return fe(e, "nextSibling");
			},
			prev: function(e) {
				return fe(e, "previousSibling");
			},
			nextAll: function(e) {
				return k(e, "nextSibling");
			},
			prevAll: function(e) {
				return k(e, "previousSibling");
			},
			nextUntil: function(e, t, n) {
				return k(e, "nextSibling", n);
			},
			prevUntil: function(e, t, n) {
				return k(e, "previousSibling", n);
			},
			siblings: function(e) {
				return A((e.parentNode || {}).firstChild, e);
			},
			children: function(e) {
				return A(e.firstChild);
			},
			contents: function(e) {
				return e.contentDocument != null && r(e.contentDocument) ? e.contentDocument : (w(e, "template") && (e = e.content || e), S.merge([], e.childNodes));
			}
		}, function(e, t) {
			S.fn[e] = function(n, r) {
				var i = S.map(this, t, n);
				return e.slice(-5) !== "Until" && (r = n), r && typeof r == "string" && (i = S.filter(r, i)), this.length > 1 && (de[e] || S.uniqueSort(i), ue.test(e) && i.reverse()), this.pushStack(i);
			};
		});
		var pe = /[^\x20\t\r\n\f]+/g;
		function me(e) {
			var t = {};
			return S.each(e.match(pe) || [], function(e, n) {
				t[n] = !0;
			}), t;
		}
		S.Callbacks = function(e) {
			e = typeof e == "string" ? me(e) : S.extend({}, e);
			var t, n, r, i, a = [], o = [], s = -1, c = function() {
				for (i ||= e.once, r = t = !0; o.length; s = -1) for (n = o.shift(); ++s < a.length;) a[s].apply(n[0], n[1]) === !1 && e.stopOnFalse && (s = a.length, n = !1);
				e.memory || (n = !1), t = !1, i && (a = n ? [] : "");
			}, l = {
				add: function() {
					return a && (n && !t && (s = a.length - 1, o.push(n)), (function t(n) {
						S.each(n, function(n, r) {
							m(r) ? (!e.unique || !l.has(r)) && a.push(r) : r && r.length && y(r) !== "string" && t(r);
						});
					})(arguments), n && !t && c()), this;
				},
				remove: function() {
					return S.each(arguments, function(e, t) {
						for (var n; (n = S.inArray(t, a, n)) > -1;) a.splice(n, 1), n <= s && s--;
					}), this;
				},
				has: function(e) {
					return e ? S.inArray(e, a) > -1 : a.length > 0;
				},
				empty: function() {
					return a &&= [], this;
				},
				disable: function() {
					return i = o = [], a = n = "", this;
				},
				disabled: function() {
					return !a;
				},
				lock: function() {
					return i = o = [], !n && !t && (a = n = ""), this;
				},
				locked: function() {
					return !!i;
				},
				fireWith: function(e, n) {
					return i || (n ||= [], n = [e, n.slice ? n.slice() : n], o.push(n), t || c()), this;
				},
				fire: function() {
					return l.fireWith(this, arguments), this;
				},
				fired: function() {
					return !!r;
				}
			};
			return l;
		};
		function he(e) {
			return e;
		}
		function ge(e) {
			throw e;
		}
		function _e(e, t, n, r) {
			var i;
			try {
				e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
			} catch (e) {
				n.apply(void 0, [e]);
			}
		}
		S.extend({
			Deferred: function(t) {
				var n = [
					[
						"notify",
						"progress",
						S.Callbacks("memory"),
						S.Callbacks("memory"),
						2
					],
					[
						"resolve",
						"done",
						S.Callbacks("once memory"),
						S.Callbacks("once memory"),
						0,
						"resolved"
					],
					[
						"reject",
						"fail",
						S.Callbacks("once memory"),
						S.Callbacks("once memory"),
						1,
						"rejected"
					]
				], r = "pending", i = {
					state: function() {
						return r;
					},
					always: function() {
						return a.done(arguments).fail(arguments), this;
					},
					catch: function(e) {
						return i.then(null, e);
					},
					pipe: function() {
						var e = arguments;
						return S.Deferred(function(t) {
							S.each(n, function(n, r) {
								var i = m(e[r[4]]) && e[r[4]];
								a[r[1]](function() {
									var e = i && i.apply(this, arguments);
									e && m(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
								});
							}), e = null;
						}).promise();
					},
					then: function(t, r, i) {
						var a = 0;
						function o(t, n, r, i) {
							return function() {
								var s = this, c = arguments, l = function() {
									var e, l;
									if (!(t < a)) {
										if (e = r.apply(s, c), e === n.promise()) throw TypeError("Thenable self-resolution");
										l = e && (typeof e == "object" || typeof e == "function") && e.then, m(l) ? i ? l.call(e, o(a, n, he, i), o(a, n, ge, i)) : (a++, l.call(e, o(a, n, he, i), o(a, n, ge, i), o(a, n, he, n.notifyWith))) : (r !== he && (s = void 0, c = [e]), (i || n.resolveWith)(s, c));
									}
								}, u = i ? l : function() {
									try {
										l();
									} catch (e) {
										S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, u.error), t + 1 >= a && (r !== ge && (s = void 0, c = [e]), n.rejectWith(s, c));
									}
								};
								t ? u() : (S.Deferred.getErrorHook ? u.error = S.Deferred.getErrorHook() : S.Deferred.getStackHook && (u.error = S.Deferred.getStackHook()), e.setTimeout(u));
							};
						}
						return S.Deferred(function(e) {
							n[0][3].add(o(0, e, m(i) ? i : he, e.notifyWith)), n[1][3].add(o(0, e, m(t) ? t : he)), n[2][3].add(o(0, e, m(r) ? r : ge));
						}).promise();
					},
					promise: function(e) {
						return e == null ? i : S.extend(e, i);
					}
				}, a = {};
				return S.each(n, function(e, t) {
					var o = t[2], s = t[5];
					i[t[1]] = o.add, s && o.add(function() {
						r = s;
					}, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), o.add(t[3].fire), a[t[0]] = function() {
						return a[t[0] + "With"](this === a ? void 0 : this, arguments), this;
					}, a[t[0] + "With"] = o.fireWith;
				}), i.promise(a), t && t.call(a, a), a;
			},
			when: function(e) {
				var t = arguments.length, n = t, r = Array(n), a = i.call(arguments), o = S.Deferred(), s = function(e) {
					return function(n) {
						r[e] = this, a[e] = arguments.length > 1 ? i.call(arguments) : n, --t || o.resolveWith(r, a);
					};
				};
				if (t <= 1 && (_e(e, o.done(s(n)).resolve, o.reject, !t), o.state() === "pending" || m(a[n] && a[n].then))) return o.then();
				for (; n--;) _e(a[n], s(n), o.reject);
				return o.promise();
			}
		});
		var ve = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
		S.Deferred.exceptionHook = function(t, n) {
			e.console && e.console.warn && t && ve.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
		}, S.readyException = function(t) {
			e.setTimeout(function() {
				throw t;
			});
		};
		var ye = S.Deferred();
		S.fn.ready = function(e) {
			return ye.then(e).catch(function(e) {
				S.readyException(e);
			}), this;
		}, S.extend({
			isReady: !1,
			readyWait: 1,
			ready: function(e) {
				(e === !0 ? --S.readyWait : S.isReady) || (S.isReady = !0, !(e !== !0 && --S.readyWait > 0) && ye.resolveWith(g, [S]));
			}
		}), S.ready.then = ye.then;
		function be() {
			g.removeEventListener("DOMContentLoaded", be), e.removeEventListener("load", be), S.ready();
		}
		g.readyState === "complete" || g.readyState !== "loading" && !g.documentElement.doScroll ? e.setTimeout(S.ready) : (g.addEventListener("DOMContentLoaded", be), e.addEventListener("load", be));
		var xe = function(e, t, n, r, i, a, o) {
			var s = 0, c = e.length, l = n == null;
			if (y(n) === "object") for (s in i = !0, n) xe(e, t, s, n[s], !0, a, o);
			else if (r !== void 0 && (i = !0, m(r) || (o = !0), l && (o ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
				return l.call(S(e), n);
			})), t)) for (; s < c; s++) t(e[s], n, o ? r : r.call(e[s], s, t(e[s], n)));
			return i ? e : l ? t.call(e) : c ? t(e[0], n) : a;
		}, M = /^-ms-/, Se = /-([a-z])/g;
		function Ce(e, t) {
			return t.toUpperCase();
		}
		function we(e) {
			return e.replace(M, "ms-").replace(Se, Ce);
		}
		var Te = function(e) {
			return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType;
		};
		function Ee() {
			this.expando = S.expando + Ee.uid++;
		}
		Ee.uid = 1, Ee.prototype = {
			cache: function(e) {
				var t = e[this.expando];
				return t || (t = {}, Te(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
					value: t,
					configurable: !0
				}))), t;
			},
			set: function(e, t, n) {
				var r, i = this.cache(e);
				if (typeof t == "string") i[we(t)] = n;
				else for (r in t) i[we(r)] = t[r];
				return i;
			},
			get: function(e, t) {
				return t === void 0 ? this.cache(e) : e[this.expando] && e[this.expando][we(t)];
			},
			access: function(e, t, n) {
				return t === void 0 || t && typeof t == "string" && n === void 0 ? this.get(e, t) : (this.set(e, t, n), n === void 0 ? t : n);
			},
			remove: function(e, t) {
				var n, r = e[this.expando];
				if (r !== void 0) {
					if (t !== void 0) for (Array.isArray(t) ? t = t.map(we) : (t = we(t), t = (t in r) ? [t] : t.match(pe) || []), n = t.length; n--;) delete r[t[n]];
					(t === void 0 || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
				}
			},
			hasData: function(e) {
				var t = e[this.expando];
				return t !== void 0 && !S.isEmptyObject(t);
			}
		};
		var N = new Ee(), De = new Ee(), Oe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ke = /[A-Z]/g;
		function Ae(e) {
			return e === "true" ? !0 : e === "false" ? !1 : e === "null" ? null : e === +e + "" ? +e : Oe.test(e) ? JSON.parse(e) : e;
		}
		function je(e, t, n) {
			var r;
			if (n === void 0 && e.nodeType === 1) if (r = "data-" + t.replace(ke, "-$&").toLowerCase(), n = e.getAttribute(r), typeof n == "string") {
				try {
					n = Ae(n);
				} catch {}
				De.set(e, t, n);
			} else n = void 0;
			return n;
		}
		S.extend({
			hasData: function(e) {
				return De.hasData(e) || N.hasData(e);
			},
			data: function(e, t, n) {
				return De.access(e, t, n);
			},
			removeData: function(e, t) {
				De.remove(e, t);
			},
			_data: function(e, t, n) {
				return N.access(e, t, n);
			},
			_removeData: function(e, t) {
				N.remove(e, t);
			}
		}), S.fn.extend({
			data: function(e, t) {
				var n, r, i, a = this[0], o = a && a.attributes;
				if (e === void 0) {
					if (this.length && (i = De.get(a), a.nodeType === 1 && !N.get(a, "hasDataAttrs"))) {
						for (n = o.length; n--;) o[n] && (r = o[n].name, r.indexOf("data-") === 0 && (r = we(r.slice(5)), je(a, r, i[r])));
						N.set(a, "hasDataAttrs", !0);
					}
					return i;
				}
				return typeof e == "object" ? this.each(function() {
					De.set(this, e);
				}) : xe(this, function(t) {
					var n;
					if (a && t === void 0) return n = De.get(a, e), n !== void 0 || (n = je(a, e), n !== void 0) ? n : void 0;
					this.each(function() {
						De.set(this, e, t);
					});
				}, null, t, arguments.length > 1, null, !0);
			},
			removeData: function(e) {
				return this.each(function() {
					De.remove(this, e);
				});
			}
		}), S.extend({
			queue: function(e, t, n) {
				var r;
				if (e) return t = (t || "fx") + "queue", r = N.get(e, t), n && (!r || Array.isArray(n) ? r = N.access(e, t, S.makeArray(n)) : r.push(n)), r || [];
			},
			dequeue: function(e, t) {
				t ||= "fx";
				var n = S.queue(e, t), r = n.length, i = n.shift(), a = S._queueHooks(e, t);
				i === "inprogress" && (i = n.shift(), r--), i && (t === "fx" && n.unshift("inprogress"), delete a.stop, i.call(e, function() {
					S.dequeue(e, t);
				}, a)), !r && a && a.empty.fire();
			},
			_queueHooks: function(e, t) {
				var n = t + "queueHooks";
				return N.get(e, n) || N.access(e, n, { empty: S.Callbacks("once memory").add(function() {
					N.remove(e, [t + "queue", n]);
				}) });
			}
		}), S.fn.extend({
			queue: function(e, t) {
				var n = 2;
				return typeof e != "string" && (t = e, e = "fx", n--), arguments.length < n ? S.queue(this[0], e) : t === void 0 ? this : this.each(function() {
					var n = S.queue(this, e, t);
					S._queueHooks(this, e), e === "fx" && n[0] !== "inprogress" && S.dequeue(this, e);
				});
			},
			dequeue: function(e) {
				return this.each(function() {
					S.dequeue(this, e);
				});
			},
			clearQueue: function(e) {
				return this.queue(e || "fx", []);
			},
			promise: function(e, t) {
				var n, r = 1, i = S.Deferred(), a = this, o = this.length, s = function() {
					--r || i.resolveWith(a, [a]);
				};
				for (typeof e != "string" && (t = e, e = void 0), e ||= "fx"; o--;) n = N.get(a[o], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
				return s(), i.promise(t);
			}
		});
		var Me = "[+-]?(?:\\d*\\.|)\\d+(?:[eE][+-]?\\d+|)", Ne = RegExp("^(?:([+-])=|)(" + Me + ")([a-z%]*)$", "i"), P = [
			"Top",
			"Right",
			"Bottom",
			"Left"
		], Pe = g.documentElement, Fe = function(e) {
			return S.contains(e.ownerDocument, e);
		}, Ie = { composed: !0 };
		Pe.getRootNode && (Fe = function(e) {
			return S.contains(e.ownerDocument, e) || e.getRootNode(Ie) === e.ownerDocument;
		});
		var F = function(e, t) {
			return e = t || e, e.style.display === "none" || e.style.display === "" && Fe(e) && S.css(e, "display") === "none";
		};
		function Le(e, t, n, r) {
			var i, a, o = 20, s = r ? function() {
				return r.cur();
			} : function() {
				return S.css(e, t, "");
			}, c = s(), l = n && n[3] || (S.cssNumber[t] ? "" : "px"), u = e.nodeType && (S.cssNumber[t] || l !== "px" && +c) && Ne.exec(S.css(e, t));
			if (u && u[3] !== l) {
				for (c /= 2, l ||= u[3], u = +c || 1; o--;) S.style(e, t, u + l), (1 - a) * (1 - (a = s() / c || .5)) <= 0 && (o = 0), u /= a;
				u *= 2, S.style(e, t, u + l), n ||= [];
			}
			return n && (u = +u || +c || 0, i = n[1] ? u + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = u, r.end = i)), i;
		}
		var Re = {};
		function ze(e) {
			var t, n = e.ownerDocument, r = e.nodeName, i = Re[r];
			return i || (t = n.body.appendChild(n.createElement(r)), i = S.css(t, "display"), t.parentNode.removeChild(t), i === "none" && (i = "block"), Re[r] = i, i);
		}
		function Be(e, t) {
			for (var n, r, i = [], a = 0, o = e.length; a < o; a++) r = e[a], r.style && (n = r.style.display, t ? (n === "none" && (i[a] = N.get(r, "display") || null, i[a] || (r.style.display = "")), r.style.display === "" && F(r) && (i[a] = ze(r))) : n !== "none" && (i[a] = "none", N.set(r, "display", n)));
			for (a = 0; a < o; a++) i[a] != null && (e[a].style.display = i[a]);
			return e;
		}
		S.fn.extend({
			show: function() {
				return Be(this, !0);
			},
			hide: function() {
				return Be(this);
			},
			toggle: function(e) {
				return typeof e == "boolean" ? e ? this.show() : this.hide() : this.each(function() {
					F(this) ? S(this).show() : S(this).hide();
				});
			}
		});
		var Ve = /^(?:checkbox|radio)$/i, He = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, Ue = /^$|^module$|\/(?:java|ecma)script/i;
		(function() {
			var e = g.createDocumentFragment().appendChild(g.createElement("div")), t = g.createElement("input");
			t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), p.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, e.innerHTML = "<option></option>", p.option = !!e.lastChild;
		})();
		var We = {
			thead: [
				1,
				"<table>",
				"</table>"
			],
			col: [
				2,
				"<table><colgroup>",
				"</colgroup></table>"
			],
			tr: [
				2,
				"<table><tbody>",
				"</tbody></table>"
			],
			td: [
				3,
				"<table><tbody><tr>",
				"</tr></tbody></table>"
			],
			_default: [
				0,
				"",
				""
			]
		};
		We.tbody = We.tfoot = We.colgroup = We.caption = We.thead, We.th = We.td, p.option || (We.optgroup = We.option = [
			1,
			"<select multiple='multiple'>",
			"</select>"
		]);
		function Ge(e, t) {
			var n = e.getElementsByTagName === void 0 ? e.querySelectorAll === void 0 ? [] : e.querySelectorAll(t || "*") : e.getElementsByTagName(t || "*");
			return t === void 0 || t && w(e, t) ? S.merge([e], n) : n;
		}
		function Ke(e, t) {
			for (var n = 0, r = e.length; n < r; n++) N.set(e[n], "globalEval", !t || N.get(t[n], "globalEval"));
		}
		var qe = /<|&#?\w+;/;
		function Je(e, t, n, r, i) {
			for (var a, o, s, c, l, u, d = t.createDocumentFragment(), f = [], p = 0, m = e.length; p < m; p++) if (a = e[p], a || a === 0) if (y(a) === "object") S.merge(f, a.nodeType ? [a] : a);
			else if (!qe.test(a)) f.push(t.createTextNode(a));
			else {
				for (o ||= d.appendChild(t.createElement("div")), s = (He.exec(a) || ["", ""])[1].toLowerCase(), c = We[s] || We._default, o.innerHTML = c[1] + S.htmlPrefilter(a) + c[2], u = c[0]; u--;) o = o.lastChild;
				S.merge(f, o.childNodes), o = d.firstChild, o.textContent = "";
			}
			for (d.textContent = "", p = 0; a = f[p++];) {
				if (r && S.inArray(a, r) > -1) {
					i && i.push(a);
					continue;
				}
				if (l = Fe(a), o = Ge(d.appendChild(a), "script"), l && Ke(o), n) for (u = 0; a = o[u++];) Ue.test(a.type || "") && n.push(a);
			}
			return d;
		}
		var Ye = /^([^.]*)(?:\.(.+)|)/;
		function Xe() {
			return !0;
		}
		function Ze() {
			return !1;
		}
		function Qe(e, t, n, r, i, a) {
			var o, s;
			if (typeof t == "object") {
				for (s in typeof n != "string" && (r ||= n, n = void 0), t) Qe(e, s, n, r, t[s], a);
				return e;
			}
			if (r == null && i == null ? (i = n, r = n = void 0) : i ?? (typeof n == "string" ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = Ze;
			else if (!i) return e;
			return a === 1 && (o = i, i = function(e) {
				return S().off(e), o.apply(this, arguments);
			}, i.guid = o.guid ||= S.guid++), e.each(function() {
				S.event.add(this, t, i, r, n);
			});
		}
		S.event = {
			global: {},
			add: function(e, t, n, r, i) {
				var a, o, s, c, l, u, d, f, p, m, h, g = N.get(e);
				if (Te(e)) for (n.handler && (a = n, n = a.handler, i = a.selector), i && S.find.matchesSelector(Pe, i), n.guid ||= S.guid++, (c = g.events) || (c = g.events = Object.create(null)), (o = g.handle) || (o = g.handle = function(t) {
					return S !== void 0 && S.event.triggered !== t.type ? S.event.dispatch.apply(e, arguments) : void 0;
				}), t = (t || "").match(pe) || [""], l = t.length; l--;) s = Ye.exec(t[l]) || [], p = h = s[1], m = (s[2] || "").split(".").sort(), p && (d = S.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, d = S.event.special[p] || {}, u = S.extend({
					type: p,
					origType: h,
					data: r,
					handler: n,
					guid: n.guid,
					selector: i,
					needsContext: i && S.expr.match.needsContext.test(i),
					namespace: m.join(".")
				}, a), (f = c[p]) || (f = c[p] = [], f.delegateCount = 0, (!d.setup || d.setup.call(e, r, m, o) === !1) && e.addEventListener && e.addEventListener(p, o)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, u) : f.push(u), S.event.global[p] = !0);
			},
			remove: function(e, t, n, r, i) {
				var a, o, s, c, l, u, d, f, p, m, h, g = N.hasData(e) && N.get(e);
				if (!(!g || !(c = g.events))) {
					for (t = (t || "").match(pe) || [""], l = t.length; l--;) {
						if (s = Ye.exec(t[l]) || [], p = h = s[1], m = (s[2] || "").split(".").sort(), !p) {
							for (p in c) S.event.remove(e, p + t[l], n, r, !0);
							continue;
						}
						for (d = S.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, f = c[p] || [], s = s[2] && RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = a = f.length; a--;) u = f[a], (i || h === u.origType) && (!n || n.guid === u.guid) && (!s || s.test(u.namespace)) && (!r || r === u.selector || r === "**" && u.selector) && (f.splice(a, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
						o && !f.length && ((!d.teardown || d.teardown.call(e, m, g.handle) === !1) && S.removeEvent(e, p, g.handle), delete c[p]);
					}
					S.isEmptyObject(c) && N.remove(e, "handle events");
				}
			},
			dispatch: function(e) {
				var t, n, r, i, a, o, s = Array(arguments.length), c = S.event.fix(e), l = (N.get(this, "events") || Object.create(null))[c.type] || [], u = S.event.special[c.type] || {};
				for (s[0] = c, t = 1; t < arguments.length; t++) s[t] = arguments[t];
				if (c.delegateTarget = this, !(u.preDispatch && u.preDispatch.call(this, c) === !1)) {
					for (o = S.event.handlers.call(this, c, l), t = 0; (i = o[t++]) && !c.isPropagationStopped();) for (c.currentTarget = i.elem, n = 0; (a = i.handlers[n++]) && !c.isImmediatePropagationStopped();) (!c.rnamespace || a.namespace === !1 || c.rnamespace.test(a.namespace)) && (c.handleObj = a, c.data = a.data, r = ((S.event.special[a.origType] || {}).handle || a.handler).apply(i.elem, s), r !== void 0 && (c.result = r) === !1 && (c.preventDefault(), c.stopPropagation()));
					return u.postDispatch && u.postDispatch.call(this, c), c.result;
				}
			},
			handlers: function(e, t) {
				var n, r, i, a, o, s = [], c = t.delegateCount, l = e.target;
				if (c && l.nodeType && !(e.type === "click" && e.button >= 1)) {
					for (; l !== this; l = l.parentNode || this) if (l.nodeType === 1 && !(e.type === "click" && l.disabled === !0)) {
						for (a = [], o = {}, n = 0; n < c; n++) r = t[n], i = r.selector + " ", o[i] === void 0 && (o[i] = r.needsContext ? S(i, this).index(l) > -1 : S.find(i, this, null, [l]).length), o[i] && a.push(r);
						a.length && s.push({
							elem: l,
							handlers: a
						});
					}
				}
				return l = this, c < t.length && s.push({
					elem: l,
					handlers: t.slice(c)
				}), s;
			},
			addProp: function(e, t) {
				Object.defineProperty(S.Event.prototype, e, {
					enumerable: !0,
					configurable: !0,
					get: m(t) ? function() {
						if (this.originalEvent) return t(this.originalEvent);
					} : function() {
						if (this.originalEvent) return this.originalEvent[e];
					},
					set: function(t) {
						Object.defineProperty(this, e, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: t
						});
					}
				});
			},
			fix: function(e) {
				return e[S.expando] ? e : new S.Event(e);
			},
			special: {
				load: { noBubble: !0 },
				click: {
					setup: function(e) {
						var t = this || e;
						return Ve.test(t.type) && t.click && w(t, "input") && $e(t, "click", !0), !1;
					},
					trigger: function(e) {
						var t = this || e;
						return Ve.test(t.type) && t.click && w(t, "input") && $e(t, "click"), !0;
					},
					_default: function(e) {
						var t = e.target;
						return Ve.test(t.type) && t.click && w(t, "input") && N.get(t, "click") || w(t, "a");
					}
				},
				beforeunload: { postDispatch: function(e) {
					e.result !== void 0 && e.originalEvent && (e.originalEvent.returnValue = e.result);
				} }
			}
		};
		function $e(e, t, n) {
			if (!n) {
				N.get(e, t) === void 0 && S.event.add(e, t, Xe);
				return;
			}
			N.set(e, t, !1), S.event.add(e, t, {
				namespace: !1,
				handler: function(e) {
					var n, r = N.get(this, t);
					if (e.isTrigger & 1 && this[t]) {
						if (r) (S.event.special[t] || {}).delegateType && e.stopPropagation();
						else if (r = i.call(arguments), N.set(this, t, r), this[t](), n = N.get(this, t), N.set(this, t, !1), r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n;
					} else r && (N.set(this, t, S.event.trigger(r[0], r.slice(1), this)), e.stopPropagation(), e.isImmediatePropagationStopped = Xe);
				}
			});
		}
		S.removeEvent = function(e, t, n) {
			e.removeEventListener && e.removeEventListener(t, n);
		}, S.Event = function(e, t) {
			if (!(this instanceof S.Event)) return new S.Event(e, t);
			e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === void 0 && e.returnValue === !1 ? Xe : Ze, this.target = e.target && e.target.nodeType === 3 ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0;
		}, S.Event.prototype = {
			constructor: S.Event,
			isDefaultPrevented: Ze,
			isPropagationStopped: Ze,
			isImmediatePropagationStopped: Ze,
			isSimulated: !1,
			preventDefault: function() {
				var e = this.originalEvent;
				this.isDefaultPrevented = Xe, e && !this.isSimulated && e.preventDefault();
			},
			stopPropagation: function() {
				var e = this.originalEvent;
				this.isPropagationStopped = Xe, e && !this.isSimulated && e.stopPropagation();
			},
			stopImmediatePropagation: function() {
				var e = this.originalEvent;
				this.isImmediatePropagationStopped = Xe, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
			}
		}, S.each({
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
			char: !0,
			code: !0,
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
			which: !0
		}, S.event.addProp), S.each({
			focus: "focusin",
			blur: "focusout"
		}, function(e, t) {
			function n(e) {
				if (g.documentMode) {
					var n = N.get(this, "handle"), r = S.event.fix(e);
					r.type = e.type === "focusin" ? "focus" : "blur", r.isSimulated = !0, n(e), r.target === r.currentTarget && n(r);
				} else S.event.simulate(t, e.target, S.event.fix(e));
			}
			S.event.special[e] = {
				setup: function() {
					var r;
					if ($e(this, e, !0), g.documentMode) r = N.get(this, t), r || this.addEventListener(t, n), N.set(this, t, (r || 0) + 1);
					else return !1;
				},
				trigger: function() {
					return $e(this, e), !0;
				},
				teardown: function() {
					var e;
					if (g.documentMode) e = N.get(this, t) - 1, e ? N.set(this, t, e) : (this.removeEventListener(t, n), N.remove(this, t));
					else return !1;
				},
				_default: function(t) {
					return N.get(t.target, e);
				},
				delegateType: t
			}, S.event.special[t] = {
				setup: function() {
					var r = this.ownerDocument || this.document || this, i = g.documentMode ? this : r, a = N.get(i, t);
					a || (g.documentMode ? this.addEventListener(t, n) : r.addEventListener(e, n, !0)), N.set(i, t, (a || 0) + 1);
				},
				teardown: function() {
					var r = this.ownerDocument || this.document || this, i = g.documentMode ? this : r, a = N.get(i, t) - 1;
					a ? N.set(i, t, a) : (g.documentMode ? this.removeEventListener(t, n) : r.removeEventListener(e, n, !0), N.remove(i, t));
				}
			};
		}), S.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function(e, t) {
			S.event.special[e] = {
				delegateType: t,
				bindType: t,
				handle: function(e) {
					var n, r = this, i = e.relatedTarget, a = e.handleObj;
					return (!i || i !== r && !S.contains(r, i)) && (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n;
				}
			};
		}), S.fn.extend({
			on: function(e, t, n, r) {
				return Qe(this, e, t, n, r);
			},
			one: function(e, t, n, r) {
				return Qe(this, e, t, n, r, 1);
			},
			off: function(e, t, n) {
				var r, i;
				if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
				if (typeof e == "object") {
					for (i in e) this.off(i, t, e[i]);
					return this;
				}
				return (t === !1 || typeof t == "function") && (n = t, t = void 0), n === !1 && (n = Ze), this.each(function() {
					S.event.remove(this, e, n, t);
				});
			}
		});
		var et = /<script|<style|<link/i, tt = /checked\s*(?:[^=]|=\s*.checked.)/i, nt = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
		function I(e, t) {
			return w(e, "table") && w(t.nodeType === 11 ? t.firstChild : t, "tr") && S(e).children("tbody")[0] || e;
		}
		function rt(e) {
			return e.type = (e.getAttribute("type") !== null) + "/" + e.type, e;
		}
		function it(e) {
			return (e.type || "").slice(0, 5) === "true/" ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
		}
		function L(e, t) {
			var n, r, i, a, o, s, c;
			if (t.nodeType === 1) {
				if (N.hasData(e) && (a = N.get(e), c = a.events, c)) for (i in N.remove(t, "handle events"), c) for (n = 0, r = c[i].length; n < r; n++) S.event.add(t, i, c[i][n]);
				De.hasData(e) && (o = De.access(e), s = S.extend({}, o), De.set(t, s));
			}
		}
		function at(e, t) {
			var n = t.nodeName.toLowerCase();
			n === "input" && Ve.test(e.type) ? t.checked = e.checked : (n === "input" || n === "textarea") && (t.defaultValue = e.defaultValue);
		}
		function ot(e, t, n, r) {
			t = a(t);
			var i, o, s, c, l, u, d = 0, f = e.length, h = f - 1, g = t[0], _ = m(g);
			if (_ || f > 1 && typeof g == "string" && !p.checkClone && tt.test(g)) return e.each(function(i) {
				var a = e.eq(i);
				_ && (t[0] = g.call(this, i, a.html())), ot(a, t, n, r);
			});
			if (f && (i = Je(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, i.childNodes.length === 1 && (i = o), o || r)) {
				for (s = S.map(Ge(i, "script"), rt), c = s.length; d < f; d++) l = i, d !== h && (l = S.clone(l, !0, !0), c && S.merge(s, Ge(l, "script"))), n.call(e[d], l, d);
				if (c) for (u = s[s.length - 1].ownerDocument, S.map(s, it), d = 0; d < c; d++) l = s[d], Ue.test(l.type || "") && !N.access(l, "globalEval") && S.contains(u, l) && (l.src && (l.type || "").toLowerCase() !== "module" ? S._evalUrl && !l.noModule && S._evalUrl(l.src, { nonce: l.nonce || l.getAttribute("nonce") }, u) : v(l.textContent.replace(nt, ""), l, u));
			}
			return e;
		}
		function st(e, t, n) {
			for (var r, i = t ? S.filter(t, e) : e, a = 0; (r = i[a]) != null; a++) !n && r.nodeType === 1 && S.cleanData(Ge(r)), r.parentNode && (n && Fe(r) && Ke(Ge(r, "script")), r.parentNode.removeChild(r));
			return e;
		}
		S.extend({
			htmlPrefilter: function(e) {
				return e;
			},
			clone: function(e, t, n) {
				var r, i, a, o, s = e.cloneNode(!0), c = Fe(e);
				if (!p.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !S.isXMLDoc(e)) for (o = Ge(s), a = Ge(e), r = 0, i = a.length; r < i; r++) at(a[r], o[r]);
				if (t) if (n) for (a ||= Ge(e), o ||= Ge(s), r = 0, i = a.length; r < i; r++) L(a[r], o[r]);
				else L(e, s);
				return o = Ge(s, "script"), o.length > 0 && Ke(o, !c && Ge(e, "script")), s;
			},
			cleanData: function(e) {
				for (var t, n, r, i = S.event.special, a = 0; (n = e[a]) !== void 0; a++) if (Te(n)) {
					if (t = n[N.expando]) {
						if (t.events) for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
						n[N.expando] = void 0;
					}
					n[De.expando] && (n[De.expando] = void 0);
				}
			}
		}), S.fn.extend({
			detach: function(e) {
				return st(this, e, !0);
			},
			remove: function(e) {
				return st(this, e);
			},
			text: function(e) {
				return xe(this, function(e) {
					return e === void 0 ? S.text(this) : this.empty().each(function() {
						(this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = e);
					});
				}, null, e, arguments.length);
			},
			append: function() {
				return ot(this, arguments, function(e) {
					(this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && I(this, e).appendChild(e);
				});
			},
			prepend: function() {
				return ot(this, arguments, function(e) {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						var t = I(this, e);
						t.insertBefore(e, t.firstChild);
					}
				});
			},
			before: function() {
				return ot(this, arguments, function(e) {
					this.parentNode && this.parentNode.insertBefore(e, this);
				});
			},
			after: function() {
				return ot(this, arguments, function(e) {
					this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
				});
			},
			empty: function() {
				for (var e, t = 0; (e = this[t]) != null; t++) e.nodeType === 1 && (S.cleanData(Ge(e, !1)), e.textContent = "");
				return this;
			},
			clone: function(e, t) {
				return e ??= !1, t ??= e, this.map(function() {
					return S.clone(this, e, t);
				});
			},
			html: function(e) {
				return xe(this, function(e) {
					var t = this[0] || {}, n = 0, r = this.length;
					if (e === void 0 && t.nodeType === 1) return t.innerHTML;
					if (typeof e == "string" && !et.test(e) && !We[(He.exec(e) || ["", ""])[1].toLowerCase()]) {
						e = S.htmlPrefilter(e);
						try {
							for (; n < r; n++) t = this[n] || {}, t.nodeType === 1 && (S.cleanData(Ge(t, !1)), t.innerHTML = e);
							t = 0;
						} catch {}
					}
					t && this.empty().append(e);
				}, null, e, arguments.length);
			},
			replaceWith: function() {
				var e = [];
				return ot(this, arguments, function(t) {
					var n = this.parentNode;
					S.inArray(this, e) < 0 && (S.cleanData(Ge(this)), n && n.replaceChild(t, this));
				}, e);
			}
		}), S.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function(e, t) {
			S.fn[e] = function(e) {
				for (var n, r = [], i = S(e), a = i.length - 1, s = 0; s <= a; s++) n = s === a ? this : this.clone(!0), S(i[s])[t](n), o.apply(r, n.get());
				return this.pushStack(r);
			};
		});
		var ct = RegExp("^(" + Me + ")(?!px)[a-z%]+$", "i"), lt = /^--/, ut = function(t) {
			var n = t.ownerDocument.defaultView;
			return (!n || !n.opener) && (n = e), n.getComputedStyle(t);
		}, dt = function(e, t, n) {
			var r, i, a = {};
			for (i in t) a[i] = e.style[i], e.style[i] = t[i];
			for (i in r = n.call(e), t) e.style[i] = a[i];
			return r;
		}, ft = new RegExp(P.join("|"), "i");
		(function() {
			function t() {
				if (u) {
					l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Pe.appendChild(l).appendChild(u);
					var t = e.getComputedStyle(u);
					r = t.top !== "1%", c = n(t.marginLeft) === 12, u.style.right = "60%", o = n(t.right) === 36, i = n(t.width) === 36, u.style.position = "absolute", a = n(u.offsetWidth / 3) === 12, Pe.removeChild(l), u = null;
				}
			}
			function n(e) {
				return Math.round(parseFloat(e));
			}
			var r, i, a, o, s, c, l = g.createElement("div"), u = g.createElement("div");
			u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = u.style.backgroundClip === "content-box", S.extend(p, {
				boxSizingReliable: function() {
					return t(), i;
				},
				pixelBoxStyles: function() {
					return t(), o;
				},
				pixelPosition: function() {
					return t(), r;
				},
				reliableMarginLeft: function() {
					return t(), c;
				},
				scrollboxSize: function() {
					return t(), a;
				},
				reliableTrDimensions: function() {
					var t, n, r, i;
					return s ?? (t = g.createElement("table"), n = g.createElement("tr"), r = g.createElement("div"), t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", n.style.cssText = "box-sizing:content-box;border:1px solid", n.style.height = "1px", r.style.height = "9px", r.style.display = "block", Pe.appendChild(t).appendChild(n).appendChild(r), i = e.getComputedStyle(n), s = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === n.offsetHeight, Pe.removeChild(t)), s;
				}
			}));
		})();
		function pt(e, t, n) {
			var r, i, a, o, s = lt.test(t), c = e.style;
			return n ||= ut(e), n && (o = n.getPropertyValue(t) || n[t], s && o && (o = o.replace(te, "$1") || void 0), o === "" && !Fe(e) && (o = S.style(e, t)), !p.pixelBoxStyles() && ct.test(o) && ft.test(t) && (r = c.width, i = c.minWidth, a = c.maxWidth, c.minWidth = c.maxWidth = c.width = o, o = n.width, c.width = r, c.minWidth = i, c.maxWidth = a)), o === void 0 ? o : o + "";
		}
		function mt(e, t) {
			return { get: function() {
				if (e()) {
					delete this.get;
					return;
				}
				return (this.get = t).apply(this, arguments);
			} };
		}
		var ht = [
			"Webkit",
			"Moz",
			"ms"
		], gt = g.createElement("div").style, _t = {};
		function R(e) {
			for (var t = e[0].toUpperCase() + e.slice(1), n = ht.length; n--;) if (e = ht[n] + t, e in gt) return e;
		}
		function z(e) {
			return S.cssProps[e] || _t[e] || (e in gt ? e : _t[e] = R(e) || e);
		}
		var vt = /^(none|table(?!-c[ea]).+)/, yt = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		}, bt = {
			letterSpacing: "0",
			fontWeight: "400"
		};
		function xt(e, t, n) {
			var r = Ne.exec(t);
			return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
		}
		function St(e, t, n, r, i, a) {
			var o = +(t === "width"), s = 0, c = 0, l = 0;
			if (n === (r ? "border" : "content")) return 0;
			for (; o < 4; o += 2) n === "margin" && (l += S.css(e, n + P[o], !0, i)), r ? (n === "content" && (c -= S.css(e, "padding" + P[o], !0, i)), n !== "margin" && (c -= S.css(e, "border" + P[o] + "Width", !0, i))) : (c += S.css(e, "padding" + P[o], !0, i), n === "padding" ? s += S.css(e, "border" + P[o] + "Width", !0, i) : c += S.css(e, "border" + P[o] + "Width", !0, i));
			return !r && a >= 0 && (c += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - c - s - .5)) || 0), c + l;
		}
		function Ct(e, t, n) {
			var r = ut(e), i = (!p.boxSizingReliable() || n) && S.css(e, "boxSizing", !1, r) === "border-box", a = i, o = pt(e, t, r), s = "offset" + t[0].toUpperCase() + t.slice(1);
			if (ct.test(o)) {
				if (!n) return o;
				o = "auto";
			}
			return (!p.boxSizingReliable() && i || !p.reliableTrDimensions() && w(e, "tr") || o === "auto" || !parseFloat(o) && S.css(e, "display", !1, r) === "inline") && e.getClientRects().length && (i = S.css(e, "boxSizing", !1, r) === "border-box", a = s in e, a && (o = e[s])), o = parseFloat(o) || 0, o + St(e, t, n || (i ? "border" : "content"), a, r, o) + "px";
		}
		S.extend({
			cssHooks: { opacity: { get: function(e, t) {
				if (t) {
					var n = pt(e, "opacity");
					return n === "" ? "1" : n;
				}
			} } },
			cssNumber: {
				animationIterationCount: !0,
				aspectRatio: !0,
				borderImageSlice: !0,
				columnCount: !0,
				flexGrow: !0,
				flexShrink: !0,
				fontWeight: !0,
				gridArea: !0,
				gridColumn: !0,
				gridColumnEnd: !0,
				gridColumnStart: !0,
				gridRow: !0,
				gridRowEnd: !0,
				gridRowStart: !0,
				lineHeight: !0,
				opacity: !0,
				order: !0,
				orphans: !0,
				scale: !0,
				widows: !0,
				zIndex: !0,
				zoom: !0,
				fillOpacity: !0,
				floodOpacity: !0,
				stopOpacity: !0,
				strokeMiterlimit: !0,
				strokeOpacity: !0
			},
			cssProps: {},
			style: function(e, t, n, r) {
				if (!(!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)) {
					var i, a, o, s = we(t), c = lt.test(t), l = e.style;
					if (c || (t = z(s)), o = S.cssHooks[t] || S.cssHooks[s], n !== void 0) {
						if (a = typeof n, a === "string" && (i = Ne.exec(n)) && i[1] && (n = Le(e, t, i), a = "number"), n == null || n !== n) return;
						a === "number" && !c && (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), !p.clearCloneStyle && n === "" && t.indexOf("background") === 0 && (l[t] = "inherit"), (!o || !("set" in o) || (n = o.set(e, n, r)) !== void 0) && (c ? l.setProperty(t, n) : l[t] = n);
					} else return o && "get" in o && (i = o.get(e, !1, r)) !== void 0 ? i : l[t];
				}
			},
			css: function(e, t, n, r) {
				var i, a, o, s = we(t);
				return lt.test(t) || (t = z(s)), o = S.cssHooks[t] || S.cssHooks[s], o && "get" in o && (i = o.get(e, !0, n)), i === void 0 && (i = pt(e, t, r)), i === "normal" && t in bt && (i = bt[t]), n === "" || n ? (a = parseFloat(i), n === !0 || isFinite(a) ? a || 0 : i) : i;
			}
		}), S.each(["height", "width"], function(e, t) {
			S.cssHooks[t] = {
				get: function(e, n, r) {
					if (n) return vt.test(S.css(e, "display")) && (!e.getClientRects().length || !e.getBoundingClientRect().width) ? dt(e, yt, function() {
						return Ct(e, t, r);
					}) : Ct(e, t, r);
				},
				set: function(e, n, r) {
					var i, a = ut(e), o = !p.scrollboxSize() && a.position === "absolute", s = (o || r) && S.css(e, "boxSizing", !1, a) === "border-box", c = r ? St(e, t, r, s, a) : 0;
					return s && o && (c -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(a[t]) - St(e, t, "border", !1, a) - .5)), c && (i = Ne.exec(n)) && (i[3] || "px") !== "px" && (e.style[t] = n, n = S.css(e, t)), xt(e, n, c);
				}
			};
		}), S.cssHooks.marginLeft = mt(p.reliableMarginLeft, function(e, t) {
			if (t) return (parseFloat(pt(e, "marginLeft")) || e.getBoundingClientRect().left - dt(e, { marginLeft: 0 }, function() {
				return e.getBoundingClientRect().left;
			})) + "px";
		}), S.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function(e, t) {
			S.cssHooks[e + t] = { expand: function(n) {
				for (var r = 0, i = {}, a = typeof n == "string" ? n.split(" ") : [n]; r < 4; r++) i[e + P[r] + t] = a[r] || a[r - 2] || a[0];
				return i;
			} }, e !== "margin" && (S.cssHooks[e + t].set = xt);
		}), S.fn.extend({ css: function(e, t) {
			return xe(this, function(e, t, n) {
				var r, i, a = {}, o = 0;
				if (Array.isArray(t)) {
					for (r = ut(e), i = t.length; o < i; o++) a[t[o]] = S.css(e, t[o], !1, r);
					return a;
				}
				return n === void 0 ? S.css(e, t) : S.style(e, t, n);
			}, e, t, arguments.length > 1);
		} });
		function wt(e, t, n, r, i) {
			return new wt.prototype.init(e, t, n, r, i);
		}
		S.Tween = wt, wt.prototype = {
			constructor: wt,
			init: function(e, t, n, r, i, a) {
				this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = a || (S.cssNumber[n] ? "" : "px");
			},
			cur: function() {
				var e = wt.propHooks[this.prop];
				return e && e.get ? e.get(this) : wt.propHooks._default.get(this);
			},
			run: function(e) {
				var t, n = wt.propHooks[this.prop];
				return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : wt.propHooks._default.set(this), this;
			}
		}, wt.prototype.init.prototype = wt.prototype, wt.propHooks = { _default: {
			get: function(e) {
				var t;
				return e.elem.nodeType !== 1 || e.elem[e.prop] != null && e.elem.style[e.prop] == null ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t);
			},
			set: function(e) {
				S.fx.step[e.prop] ? S.fx.step[e.prop](e) : e.elem.nodeType === 1 && (S.cssHooks[e.prop] || e.elem.style[z(e.prop)] != null) ? S.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
			}
		} }, wt.propHooks.scrollTop = wt.propHooks.scrollLeft = { set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
		} }, S.easing = {
			linear: function(e) {
				return e;
			},
			swing: function(e) {
				return .5 - Math.cos(e * Math.PI) / 2;
			},
			_default: "swing"
		}, S.fx = wt.prototype.init, S.fx.step = {};
		var Tt, B, Et = /^(?:toggle|show|hide)$/, Dt = /queueHooks$/;
		function Ot() {
			B && (g.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(Ot) : e.setTimeout(Ot, S.fx.interval), S.fx.tick());
		}
		function kt() {
			return e.setTimeout(function() {
				Tt = void 0;
			}), Tt = Date.now();
		}
		function At(e, t) {
			var n, r = 0, i = { height: e };
			for (t = +!!t; r < 4; r += 2 - t) n = P[r], i["margin" + n] = i["padding" + n] = e;
			return t && (i.opacity = i.width = e), i;
		}
		function jt(e, t, n) {
			for (var r, i = (Pt.tweeners[t] || []).concat(Pt.tweeners["*"]), a = 0, o = i.length; a < o; a++) if (r = i[a].call(n, t, e)) return r;
		}
		function Mt(e, t, n) {
			var r, i, a, o, s, c, l, u, d = "width" in t || "height" in t, f = this, p = {}, m = e.style, h = e.nodeType && F(e), g = N.get(e, "fxshow");
			for (r in n.queue || (o = S._queueHooks(e, "fx"), o.unqueued ?? (o.unqueued = 0, s = o.empty.fire, o.empty.fire = function() {
				o.unqueued || s();
			}), o.unqueued++, f.always(function() {
				f.always(function() {
					o.unqueued--, S.queue(e, "fx").length || o.empty.fire();
				});
			})), t) if (i = t[r], Et.test(i)) {
				if (delete t[r], a ||= i === "toggle", i === (h ? "hide" : "show")) if (i === "show" && g && g[r] !== void 0) h = !0;
				else continue;
				p[r] = g && g[r] || S.style(e, r);
			}
			if (c = !S.isEmptyObject(t), !(!c && S.isEmptyObject(p))) for (r in d && e.nodeType === 1 && (n.overflow = [
				m.overflow,
				m.overflowX,
				m.overflowY
			], l = g && g.display, l ??= N.get(e, "display"), u = S.css(e, "display"), u === "none" && (l ? u = l : (Be([e], !0), l = e.style.display || l, u = S.css(e, "display"), Be([e]))), (u === "inline" || u === "inline-block" && l != null) && S.css(e, "float") === "none" && (c || (f.done(function() {
				m.display = l;
			}), l ??= (u = m.display, u === "none" ? "" : u)), m.display = "inline-block")), n.overflow && (m.overflow = "hidden", f.always(function() {
				m.overflow = n.overflow[0], m.overflowX = n.overflow[1], m.overflowY = n.overflow[2];
			})), c = !1, p) c || (g ? "hidden" in g && (h = g.hidden) : g = N.access(e, "fxshow", { display: l }), a && (g.hidden = !h), h && Be([e], !0), f.done(function() {
				for (r in h || Be([e]), N.remove(e, "fxshow"), p) S.style(e, r, p[r]);
			})), c = jt(h ? g[r] : 0, r, f), r in g || (g[r] = c.start, h && (c.end = c.start, c.start = 0));
		}
		function Nt(e, t) {
			var n, r, i, a, o;
			for (n in e) if (r = we(n), i = t[r], a = e[n], Array.isArray(a) && (i = a[1], a = e[n] = a[0]), n !== r && (e[r] = a, delete e[n]), o = S.cssHooks[r], o && "expand" in o) for (n in a = o.expand(a), delete e[r], a) n in e || (e[n] = a[n], t[n] = i);
			else t[r] = i;
		}
		function Pt(e, t, n) {
			var r, i, a = 0, o = Pt.prefilters.length, s = S.Deferred().always(function() {
				delete c.elem;
			}), c = function() {
				if (i) return !1;
				for (var t = Tt || kt(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), a = 0, o = l.tweens.length; a < o; a++) l.tweens[a].run(r);
				return s.notifyWith(e, [
					l,
					r,
					n
				]), r < 1 && o ? n : (o || s.notifyWith(e, [
					l,
					1,
					0
				]), s.resolveWith(e, [l]), !1);
			}, l = s.promise({
				elem: e,
				props: S.extend({}, t),
				opts: S.extend(!0, {
					specialEasing: {},
					easing: S.easing._default
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: Tt || kt(),
				duration: n.duration,
				tweens: [],
				createTween: function(t, n) {
					var r = S.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
					return l.tweens.push(r), r;
				},
				stop: function(t) {
					var n = 0, r = t ? l.tweens.length : 0;
					if (i) return this;
					for (i = !0; n < r; n++) l.tweens[n].run(1);
					return t ? (s.notifyWith(e, [
						l,
						1,
						0
					]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
				}
			}), u = l.props;
			for (Nt(u, l.opts.specialEasing); a < o; a++) if (r = Pt.prefilters[a].call(l, e, u, l.opts), r) return m(r.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
			return S.map(u, jt, l), m(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(c, {
				elem: e,
				anim: l,
				queue: l.opts.queue
			})), l;
		}
		S.Animation = S.extend(Pt, {
			tweeners: { "*": [function(e, t) {
				var n = this.createTween(e, t);
				return Le(n.elem, e, Ne.exec(t), n), n;
			}] },
			tweener: function(e, t) {
				m(e) ? (t = e, e = ["*"]) : e = e.match(pe);
				for (var n, r = 0, i = e.length; r < i; r++) n = e[r], Pt.tweeners[n] = Pt.tweeners[n] || [], Pt.tweeners[n].unshift(t);
			},
			prefilters: [Mt],
			prefilter: function(e, t) {
				t ? Pt.prefilters.unshift(e) : Pt.prefilters.push(e);
			}
		}), S.speed = function(e, t, n) {
			var r = e && typeof e == "object" ? S.extend({}, e) : {
				complete: n || !n && t || m(e) && e,
				duration: e,
				easing: n && t || t && !m(t) && t
			};
			return S.fx.off ? r.duration = 0 : typeof r.duration != "number" && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), (r.queue == null || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
				m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
			}, r;
		}, S.fn.extend({
			fadeTo: function(e, t, n, r) {
				return this.filter(F).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
			},
			animate: function(e, t, n, r) {
				var i = S.isEmptyObject(e), a = S.speed(t, n, r), o = function() {
					var t = Pt(this, S.extend({}, e), a);
					(i || N.get(this, "finish")) && t.stop(!0);
				};
				return o.finish = o, i || a.queue === !1 ? this.each(o) : this.queue(a.queue, o);
			},
			stop: function(e, t, n) {
				var r = function(e) {
					var t = e.stop;
					delete e.stop, t(n);
				};
				return typeof e != "string" && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function() {
					var t = !0, i = e != null && e + "queueHooks", a = S.timers, o = N.get(this);
					if (i) o[i] && o[i].stop && r(o[i]);
					else for (i in o) o[i] && o[i].stop && Dt.test(i) && r(o[i]);
					for (i = a.length; i--;) a[i].elem === this && (e == null || a[i].queue === e) && (a[i].anim.stop(n), t = !1, a.splice(i, 1));
					(t || !n) && S.dequeue(this, e);
				});
			},
			finish: function(e) {
				return e !== !1 && (e ||= "fx"), this.each(function() {
					var t, n = N.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], a = S.timers, o = r ? r.length : 0;
					for (n.finish = !0, S.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
					for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
					delete n.finish;
				});
			}
		}), S.each([
			"toggle",
			"show",
			"hide"
		], function(e, t) {
			var n = S.fn[t];
			S.fn[t] = function(e, r, i) {
				return e == null || typeof e == "boolean" ? n.apply(this, arguments) : this.animate(At(t, !0), e, r, i);
			};
		}), S.each({
			slideDown: At("show"),
			slideUp: At("hide"),
			slideToggle: At("toggle"),
			fadeIn: { opacity: "show" },
			fadeOut: { opacity: "hide" },
			fadeToggle: { opacity: "toggle" }
		}, function(e, t) {
			S.fn[e] = function(e, n, r) {
				return this.animate(t, e, n, r);
			};
		}), S.timers = [], S.fx.tick = function() {
			var e, t = 0, n = S.timers;
			for (Tt = Date.now(); t < n.length; t++) e = n[t], !e() && n[t] === e && n.splice(t--, 1);
			n.length || S.fx.stop(), Tt = void 0;
		}, S.fx.timer = function(e) {
			S.timers.push(e), S.fx.start();
		}, S.fx.interval = 13, S.fx.start = function() {
			B || (B = !0, Ot());
		}, S.fx.stop = function() {
			B = null;
		}, S.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, S.fn.delay = function(t, n) {
			return t = S.fx && S.fx.speeds[t] || t, n ||= "fx", this.queue(n, function(n, r) {
				var i = e.setTimeout(n, t);
				r.stop = function() {
					e.clearTimeout(i);
				};
			});
		}, (function() {
			var e = g.createElement("input"), t = g.createElement("select").appendChild(g.createElement("option"));
			e.type = "checkbox", p.checkOn = e.value !== "", p.optSelected = t.selected, e = g.createElement("input"), e.value = "t", e.type = "radio", p.radioValue = e.value === "t";
		})();
		var Ft, It = S.expr.attrHandle;
		S.fn.extend({
			attr: function(e, t) {
				return xe(this, S.attr, e, t, arguments.length > 1);
			},
			removeAttr: function(e) {
				return this.each(function() {
					S.removeAttr(this, e);
				});
			}
		}), S.extend({
			attr: function(e, t, n) {
				var r, i, a = e.nodeType;
				if (!(a === 3 || a === 8 || a === 2)) {
					if (e.getAttribute === void 0) return S.prop(e, t, n);
					if ((a !== 1 || !S.isXMLDoc(e)) && (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? Ft : void 0)), n !== void 0) {
						if (n === null) {
							S.removeAttr(e, t);
							return;
						}
						return i && "set" in i && (r = i.set(e, n, t)) !== void 0 ? r : (e.setAttribute(t, n + ""), n);
					}
					return i && "get" in i && (r = i.get(e, t)) !== null ? r : (r = S.find.attr(e, t), r ?? void 0);
				}
			},
			attrHooks: { type: { set: function(e, t) {
				if (!p.radioValue && t === "radio" && w(e, "input")) {
					var n = e.value;
					return e.setAttribute("type", t), n && (e.value = n), t;
				}
			} } },
			removeAttr: function(e, t) {
				var n, r = 0, i = t && t.match(pe);
				if (i && e.nodeType === 1) for (; n = i[r++];) e.removeAttribute(n);
			}
		}), Ft = { set: function(e, t, n) {
			return t === !1 ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
		} }, S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
			var n = It[t] || S.find.attr;
			It[t] = function(e, t, r) {
				var i, a, o = t.toLowerCase();
				return r || (a = It[o], It[o] = i, i = n(e, t, r) == null ? null : o, It[o] = a), i;
			};
		});
		var Lt = /^(?:input|select|textarea|button)$/i, Rt = /^(?:a|area)$/i;
		S.fn.extend({
			prop: function(e, t) {
				return xe(this, S.prop, e, t, arguments.length > 1);
			},
			removeProp: function(e) {
				return this.each(function() {
					delete this[S.propFix[e] || e];
				});
			}
		}), S.extend({
			prop: function(e, t, n) {
				var r, i, a = e.nodeType;
				if (!(a === 3 || a === 8 || a === 2)) return (a !== 1 || !S.isXMLDoc(e)) && (t = S.propFix[t] || t, i = S.propHooks[t]), n === void 0 ? i && "get" in i && (r = i.get(e, t)) !== null ? r : e[t] : i && "set" in i && (r = i.set(e, n, t)) !== void 0 ? r : e[t] = n;
			},
			propHooks: { tabIndex: { get: function(e) {
				var t = S.find.attr(e, "tabindex");
				return t ? parseInt(t, 10) : Lt.test(e.nodeName) || Rt.test(e.nodeName) && e.href ? 0 : -1;
			} } },
			propFix: {
				for: "htmlFor",
				class: "className"
			}
		}), p.optSelected || (S.propHooks.selected = {
			get: function(e) {
				var t = e.parentNode;
				return t && t.parentNode && t.parentNode.selectedIndex, null;
			},
			set: function(e) {
				var t = e.parentNode;
				t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
			}
		}), S.each([
			"tabIndex",
			"readOnly",
			"maxLength",
			"cellSpacing",
			"cellPadding",
			"rowSpan",
			"colSpan",
			"useMap",
			"frameBorder",
			"contentEditable"
		], function() {
			S.propFix[this.toLowerCase()] = this;
		});
		function zt(e) {
			return (e.match(pe) || []).join(" ");
		}
		function Bt(e) {
			return e.getAttribute && e.getAttribute("class") || "";
		}
		function V(e) {
			return Array.isArray(e) ? e : typeof e == "string" && e.match(pe) || [];
		}
		S.fn.extend({
			addClass: function(e) {
				var t, n, r, i, a, o;
				return m(e) ? this.each(function(t) {
					S(this).addClass(e.call(this, t, Bt(this)));
				}) : (t = V(e), t.length ? this.each(function() {
					if (r = Bt(this), n = this.nodeType === 1 && " " + zt(r) + " ", n) {
						for (a = 0; a < t.length; a++) i = t[a], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
						o = zt(n), r !== o && this.setAttribute("class", o);
					}
				}) : this);
			},
			removeClass: function(e) {
				var t, n, r, i, a, o;
				return m(e) ? this.each(function(t) {
					S(this).removeClass(e.call(this, t, Bt(this)));
				}) : arguments.length ? (t = V(e), t.length ? this.each(function() {
					if (r = Bt(this), n = this.nodeType === 1 && " " + zt(r) + " ", n) {
						for (a = 0; a < t.length; a++) for (i = t[a]; n.indexOf(" " + i + " ") > -1;) n = n.replace(" " + i + " ", " ");
						o = zt(n), r !== o && this.setAttribute("class", o);
					}
				}) : this) : this.attr("class", "");
			},
			toggleClass: function(e, t) {
				var n, r, i, a, o = typeof e, s = o === "string" || Array.isArray(e);
				return m(e) ? this.each(function(n) {
					S(this).toggleClass(e.call(this, n, Bt(this), t), t);
				}) : typeof t == "boolean" && s ? t ? this.addClass(e) : this.removeClass(e) : (n = V(e), this.each(function() {
					if (s) for (a = S(this), i = 0; i < n.length; i++) r = n[i], a.hasClass(r) ? a.removeClass(r) : a.addClass(r);
					else (e === void 0 || o === "boolean") && (r = Bt(this), r && N.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || e === !1 ? "" : N.get(this, "__className__") || ""));
				}));
			},
			hasClass: function(e) {
				var t, n, r = 0;
				for (t = " " + e + " "; n = this[r++];) if (n.nodeType === 1 && (" " + zt(Bt(n)) + " ").indexOf(t) > -1) return !0;
				return !1;
			}
		});
		var Vt = /\r/g;
		S.fn.extend({ val: function(e) {
			var t, n, r, i = this[0];
			return arguments.length ? (r = m(e), this.each(function(n) {
				var i;
				this.nodeType === 1 && (i = r ? e.call(this, n, S(this).val()) : e, i == null ? i = "" : typeof i == "number" ? i += "" : Array.isArray(i) && (i = S.map(i, function(e) {
					return e == null ? "" : e + "";
				})), t = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()], (!t || !("set" in t) || t.set(this, i, "value") === void 0) && (this.value = i));
			})) : i ? (t = S.valHooks[i.type] || S.valHooks[i.nodeName.toLowerCase()], t && "get" in t && (n = t.get(i, "value")) !== void 0 ? n : (n = i.value, typeof n == "string" ? n.replace(Vt, "") : n ?? "")) : void 0;
		} }), S.extend({ valHooks: {
			option: { get: function(e) {
				return S.find.attr(e, "value") ?? zt(S.text(e));
			} },
			select: {
				get: function(e) {
					var t, n, r, i = e.options, a = e.selectedIndex, o = e.type === "select-one", s = o ? null : [], c = o ? a + 1 : i.length;
					for (r = a < 0 ? c : o ? a : 0; r < c; r++) if (n = i[r], (n.selected || r === a) && !n.disabled && (!n.parentNode.disabled || !w(n.parentNode, "optgroup"))) {
						if (t = S(n).val(), o) return t;
						s.push(t);
					}
					return s;
				},
				set: function(e, t) {
					for (var n, r, i = e.options, a = S.makeArray(t), o = i.length; o--;) r = i[o], (r.selected = S.inArray(S.valHooks.option.get(r), a) > -1) && (n = !0);
					return n || (e.selectedIndex = -1), a;
				}
			}
		} }), S.each(["radio", "checkbox"], function() {
			S.valHooks[this] = { set: function(e, t) {
				if (Array.isArray(t)) return e.checked = S.inArray(S(e).val(), t) > -1;
			} }, p.checkOn || (S.valHooks[this].get = function(e) {
				return e.getAttribute("value") === null ? "on" : e.value;
			});
		});
		var Ht = e.location, Ut = { guid: Date.now() }, Wt = /\?/;
		S.parseXML = function(t) {
			var n, r;
			if (!t || typeof t != "string") return null;
			try {
				n = new e.DOMParser().parseFromString(t, "text/xml");
			} catch {}
			return r = n && n.getElementsByTagName("parsererror")[0], (!n || r) && S.error("Invalid XML: " + (r ? S.map(r.childNodes, function(e) {
				return e.textContent;
			}).join("\n") : t)), n;
		};
		var Gt = /^(?:focusinfocus|focusoutblur)$/, Kt = function(e) {
			e.stopPropagation();
		};
		S.extend(S.event, {
			trigger: function(t, n, r, i) {
				var a, o, s, c, l, d, f, p, _ = [r || g], v = u.call(t, "type") ? t.type : t, y = u.call(t, "namespace") ? t.namespace.split(".") : [];
				if (o = p = s = r ||= g, !(r.nodeType === 3 || r.nodeType === 8) && !Gt.test(v + S.event.triggered) && (v.indexOf(".") > -1 && (y = v.split("."), v = y.shift(), y.sort()), l = v.indexOf(":") < 0 && "on" + v, t = t[S.expando] ? t : new S.Event(v, typeof t == "object" && t), t.isTrigger = i ? 2 : 3, t.namespace = y.join("."), t.rnamespace = t.namespace ? RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target ||= r, n = n == null ? [t] : S.makeArray(n, [t]), f = S.event.special[v] || {}, !(!i && f.trigger && f.trigger.apply(r, n) === !1))) {
					if (!i && !f.noBubble && !h(r)) {
						for (c = f.delegateType || v, Gt.test(c + v) || (o = o.parentNode); o; o = o.parentNode) _.push(o), s = o;
						s === (r.ownerDocument || g) && _.push(s.defaultView || s.parentWindow || e);
					}
					for (a = 0; (o = _[a++]) && !t.isPropagationStopped();) p = o, t.type = a > 1 ? c : f.bindType || v, d = (N.get(o, "events") || Object.create(null))[t.type] && N.get(o, "handle"), d && d.apply(o, n), d = l && o[l], d && d.apply && Te(o) && (t.result = d.apply(o, n), t.result === !1 && t.preventDefault());
					return t.type = v, !i && !t.isDefaultPrevented() && (!f._default || f._default.apply(_.pop(), n) === !1) && Te(r) && l && m(r[v]) && !h(r) && (s = r[l], s && (r[l] = null), S.event.triggered = v, t.isPropagationStopped() && p.addEventListener(v, Kt), r[v](), t.isPropagationStopped() && p.removeEventListener(v, Kt), S.event.triggered = void 0, s && (r[l] = s)), t.result;
				}
			},
			simulate: function(e, t, n) {
				var r = S.extend(new S.Event(), n, {
					type: e,
					isSimulated: !0
				});
				S.event.trigger(r, null, t);
			}
		}), S.fn.extend({
			trigger: function(e, t) {
				return this.each(function() {
					S.event.trigger(e, t, this);
				});
			},
			triggerHandler: function(e, t) {
				var n = this[0];
				if (n) return S.event.trigger(e, t, n, !0);
			}
		});
		var qt = /\[\]$/, Jt = /\r?\n/g, Yt = /^(?:submit|button|image|reset|file)$/i, Xt = /^(?:input|select|textarea|keygen)/i;
		function Zt(e, t, n, r) {
			var i;
			if (Array.isArray(t)) S.each(t, function(t, i) {
				n || qt.test(e) ? r(e, i) : Zt(e + "[" + (typeof i == "object" && i ? t : "") + "]", i, n, r);
			});
			else if (!n && y(t) === "object") for (i in t) Zt(e + "[" + i + "]", t[i], n, r);
			else r(e, t);
		}
		S.param = function(e, t) {
			var n, r = [], i = function(e, t) {
				var n = m(t) ? t() : t;
				r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(n ?? "");
			};
			if (e == null) return "";
			if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function() {
				i(this.name, this.value);
			});
			else for (n in e) Zt(n, e[n], t, i);
			return r.join("&");
		}, S.fn.extend({
			serialize: function() {
				return S.param(this.serializeArray());
			},
			serializeArray: function() {
				return this.map(function() {
					var e = S.prop(this, "elements");
					return e ? S.makeArray(e) : this;
				}).filter(function() {
					var e = this.type;
					return this.name && !S(this).is(":disabled") && Xt.test(this.nodeName) && !Yt.test(e) && (this.checked || !Ve.test(e));
				}).map(function(e, t) {
					var n = S(this).val();
					return n == null ? null : Array.isArray(n) ? S.map(n, function(e) {
						return {
							name: t.name,
							value: e.replace(Jt, "\r\n")
						};
					}) : {
						name: t.name,
						value: n.replace(Jt, "\r\n")
					};
				}).get();
			}
		});
		var Qt = /%20/g, $t = /#.*$/, en = /([?&])_=[^&]*/, tn = /^(.*?):[ \t]*([^\r\n]*)$/gm, nn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rn = /^(?:GET|HEAD)$/, an = /^\/\//, on = {}, sn = {}, cn = "*/*", ln = g.createElement("a");
		ln.href = Ht.href;
		function un(e) {
			return function(t, n) {
				typeof t != "string" && (n = t, t = "*");
				var r, i = 0, a = t.toLowerCase().match(pe) || [];
				if (m(n)) for (; r = a[i++];) r[0] === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
			};
		}
		function dn(e, t, n, r) {
			var i = {}, a = e === sn;
			function o(s) {
				var c;
				return i[s] = !0, S.each(e[s] || [], function(e, s) {
					var l = s(t, n, r);
					if (typeof l == "string" && !a && !i[l]) return t.dataTypes.unshift(l), o(l), !1;
					if (a) return !(c = l);
				}), c;
			}
			return o(t.dataTypes[0]) || !i["*"] && o("*");
		}
		function fn(e, t) {
			var n, r, i = S.ajaxSettings.flatOptions || {};
			for (n in t) t[n] !== void 0 && ((i[n] ? e : r ||= {})[n] = t[n]);
			return r && S.extend(!0, e, r), e;
		}
		function pn(e, t, n) {
			for (var r, i, a, o, s = e.contents, c = e.dataTypes; c[0] === "*";) c.shift(), r === void 0 && (r = e.mimeType || t.getResponseHeader("Content-Type"));
			if (r) {
				for (i in s) if (s[i] && s[i].test(r)) {
					c.unshift(i);
					break;
				}
			}
			if (c[0] in n) a = c[0];
			else {
				for (i in n) {
					if (!c[0] || e.converters[i + " " + c[0]]) {
						a = i;
						break;
					}
					o ||= i;
				}
				a ||= o;
			}
			if (a) return a !== c[0] && c.unshift(a), n[a];
		}
		function mn(e, t, n, r) {
			var i, a, o, s, c, l = {}, u = e.dataTypes.slice();
			if (u[1]) for (o in e.converters) l[o.toLowerCase()] = e.converters[o];
			for (a = u.shift(); a;) if (e.responseFields[a] && (n[e.responseFields[a]] = t), !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = a, a = u.shift(), a) {
				if (a === "*") a = c;
				else if (c !== "*" && c !== a) {
					if (o = l[c + " " + a] || l["* " + a], !o) {
						for (i in l) if (s = i.split(" "), s[1] === a && (o = l[c + " " + s[0]] || l["* " + s[0]], o)) {
							o === !0 ? o = l[i] : l[i] !== !0 && (a = s[0], u.unshift(s[1]));
							break;
						}
					}
					if (o !== !0) if (o && e.throws) t = o(t);
					else try {
						t = o(t);
					} catch (e) {
						return {
							state: "parsererror",
							error: o ? e : "No conversion from " + c + " to " + a
						};
					}
				}
			}
			return {
				state: "success",
				data: t
			};
		}
		S.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: Ht.href,
				type: "GET",
				isLocal: nn.test(Ht.protocol),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
					"*": cn,
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
					"text xml": S.parseXML
				},
				flatOptions: {
					url: !0,
					context: !0
				}
			},
			ajaxSetup: function(e, t) {
				return t ? fn(fn(e, S.ajaxSettings), t) : fn(S.ajaxSettings, e);
			},
			ajaxPrefilter: un(on),
			ajaxTransport: un(sn),
			ajax: function(t, n) {
				typeof t == "object" && (n = t, t = void 0), n ||= {};
				var r, i, a, o, s, c, l, u, d, f, p = S.ajaxSetup({}, n), m = p.context || p, h = p.context && (m.nodeType || m.jquery) ? S(m) : S.event, _ = S.Deferred(), v = S.Callbacks("once memory"), y = p.statusCode || {}, b = {}, x = {}, C = "canceled", w = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (l) {
							if (!o) for (o = {}; t = tn.exec(a);) o[t[1].toLowerCase() + " "] = (o[t[1].toLowerCase() + " "] || []).concat(t[2]);
							t = o[e.toLowerCase() + " "];
						}
						return t == null ? null : t.join(", ");
					},
					getAllResponseHeaders: function() {
						return l ? a : null;
					},
					setRequestHeader: function(e, t) {
						return l ?? (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, b[e] = t), this;
					},
					overrideMimeType: function(e) {
						return l ?? (p.mimeType = e), this;
					},
					statusCode: function(e) {
						var t;
						if (e) if (l) w.always(e[w.status]);
						else for (t in e) y[t] = [y[t], e[t]];
						return this;
					},
					abort: function(e) {
						var t = e || C;
						return r && r.abort(t), T(0, t), this;
					}
				};
				if (_.promise(w), p.url = ((t || p.url || Ht.href) + "").replace(an, Ht.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(pe) || [""], p.crossDomain == null) {
					c = g.createElement("a");
					try {
						c.href = p.url, c.href = c.href, p.crossDomain = ln.protocol + "//" + ln.host != c.protocol + "//" + c.host;
					} catch {
						p.crossDomain = !0;
					}
				}
				if (p.data && p.processData && typeof p.data != "string" && (p.data = S.param(p.data, p.traditional)), dn(on, p, n, w), l) return w;
				for (d in u = S.event && p.global, u && S.active++ === 0 && S.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !rn.test(p.type), i = p.url.replace($t, ""), p.hasContent ? p.data && p.processData && (p.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (p.data = p.data.replace(Qt, "+")) : (f = p.url.slice(i.length), p.data && (p.processData || typeof p.data == "string") && (i += (Wt.test(i) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (i = i.replace(en, "$1"), f = (Wt.test(i) ? "&" : "?") + "_=" + Ut.guid++ + f), p.url = i + f), p.ifModified && (S.lastModified[i] && w.setRequestHeader("If-Modified-Since", S.lastModified[i]), S.etag[i] && w.setRequestHeader("If-None-Match", S.etag[i])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && w.setRequestHeader("Content-Type", p.contentType), w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + (p.dataTypes[0] === "*" ? "" : ", " + cn + "; q=0.01") : p.accepts["*"]), p.headers) w.setRequestHeader(d, p.headers[d]);
				if (p.beforeSend && (p.beforeSend.call(m, w, p) === !1 || l)) return w.abort();
				if (C = "abort", v.add(p.complete), w.done(p.success), w.fail(p.error), r = dn(sn, p, n, w), !r) T(-1, "No Transport");
				else {
					if (w.readyState = 1, u && h.trigger("ajaxSend", [w, p]), l) return w;
					p.async && p.timeout > 0 && (s = e.setTimeout(function() {
						w.abort("timeout");
					}, p.timeout));
					try {
						l = !1, r.send(b, T);
					} catch (e) {
						if (l) throw e;
						T(-1, e);
					}
				}
				function T(t, n, o, c) {
					var d, f, g, b, x, C = n;
					l || (l = !0, s && e.clearTimeout(s), r = void 0, a = c || "", w.readyState = t > 0 ? 4 : 0, d = t >= 200 && t < 300 || t === 304, o && (b = pn(p, w, o)), !d && S.inArray("script", p.dataTypes) > -1 && S.inArray("json", p.dataTypes) < 0 && (p.converters["text script"] = function() {}), b = mn(p, b, w, d), d ? (p.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (S.lastModified[i] = x), x = w.getResponseHeader("etag"), x && (S.etag[i] = x)), t === 204 || p.type === "HEAD" ? C = "nocontent" : t === 304 ? C = "notmodified" : (C = b.state, f = b.data, g = b.error, d = !g)) : (g = C, (t || !C) && (C = "error", t < 0 && (t = 0))), w.status = t, w.statusText = (n || C) + "", d ? _.resolveWith(m, [
						f,
						C,
						w
					]) : _.rejectWith(m, [
						w,
						C,
						g
					]), w.statusCode(y), y = void 0, u && h.trigger(d ? "ajaxSuccess" : "ajaxError", [
						w,
						p,
						d ? f : g
					]), v.fireWith(m, [w, C]), u && (h.trigger("ajaxComplete", [w, p]), --S.active || S.event.trigger("ajaxStop")));
				}
				return w;
			},
			getJSON: function(e, t, n) {
				return S.get(e, t, n, "json");
			},
			getScript: function(e, t) {
				return S.get(e, void 0, t, "script");
			}
		}), S.each(["get", "post"], function(e, t) {
			S[t] = function(e, n, r, i) {
				return m(n) && (i ||= r, r = n, n = void 0), S.ajax(S.extend({
					url: e,
					type: t,
					dataType: i,
					data: n,
					success: r
				}, S.isPlainObject(e) && e));
			};
		}), S.ajaxPrefilter(function(e) {
			for (var t in e.headers) t.toLowerCase() === "content-type" && (e.contentType = e.headers[t] || "");
		}), S._evalUrl = function(e, t, n) {
			return S.ajax({
				url: e,
				type: "GET",
				dataType: "script",
				cache: !0,
				async: !1,
				global: !1,
				converters: { "text script": function() {} },
				dataFilter: function(e) {
					S.globalEval(e, t, n);
				}
			});
		}, S.fn.extend({
			wrapAll: function(e) {
				var t;
				return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
					for (var e = this; e.firstElementChild;) e = e.firstElementChild;
					return e;
				}).append(this)), this;
			},
			wrapInner: function(e) {
				return m(e) ? this.each(function(t) {
					S(this).wrapInner(e.call(this, t));
				}) : this.each(function() {
					var t = S(this), n = t.contents();
					n.length ? n.wrapAll(e) : t.append(e);
				});
			},
			wrap: function(e) {
				var t = m(e);
				return this.each(function(n) {
					S(this).wrapAll(t ? e.call(this, n) : e);
				});
			},
			unwrap: function(e) {
				return this.parent(e).not("body").each(function() {
					S(this).replaceWith(this.childNodes);
				}), this;
			}
		}), S.expr.pseudos.hidden = function(e) {
			return !S.expr.pseudos.visible(e);
		}, S.expr.pseudos.visible = function(e) {
			return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
		}, S.ajaxSettings.xhr = function() {
			try {
				return new e.XMLHttpRequest();
			} catch {}
		};
		var hn = {
			0: 200,
			1223: 204
		}, gn = S.ajaxSettings.xhr();
		p.cors = !!gn && "withCredentials" in gn, p.ajax = gn = !!gn, S.ajaxTransport(function(t) {
			var n, r;
			if (p.cors || gn && !t.crossDomain) return {
				send: function(i, a) {
					var o, s = t.xhr();
					if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (o in t.xhrFields) s[o] = t.xhrFields[o];
					for (o in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), !t.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(o, i[o]);
					n = function(e) {
						return function() {
							n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, e === "abort" ? s.abort() : e === "error" ? typeof s.status == "number" ? a(s.status, s.statusText) : a(0, "error") : a(hn[s.status] || s.status, s.statusText, (s.responseType || "text") !== "text" || typeof s.responseText != "string" ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders()));
						};
					}, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), s.onabort === void 0 ? s.onreadystatechange = function() {
						s.readyState === 4 && e.setTimeout(function() {
							n && r();
						});
					} : s.onabort = r, n = n("abort");
					try {
						s.send(t.hasContent && t.data || null);
					} catch (e) {
						if (n) throw e;
					}
				},
				abort: function() {
					n && n();
				}
			};
		}), S.ajaxPrefilter(function(e) {
			e.crossDomain && (e.contents.script = !1);
		}), S.ajaxSetup({
			accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
			contents: { script: /\b(?:java|ecma)script\b/ },
			converters: { "text script": function(e) {
				return S.globalEval(e), e;
			} }
		}), S.ajaxPrefilter("script", function(e) {
			e.cache === void 0 && (e.cache = !1), e.crossDomain && (e.type = "GET");
		}), S.ajaxTransport("script", function(e) {
			if (e.crossDomain || e.scriptAttrs) {
				var t, n;
				return {
					send: function(r, i) {
						t = S("<script>").attr(e.scriptAttrs || {}).prop({
							charset: e.scriptCharset,
							src: e.url
						}).on("load error", n = function(e) {
							t.remove(), n = null, e && i(e.type === "error" ? 404 : 200, e.type);
						}), g.head.appendChild(t[0]);
					},
					abort: function() {
						n && n();
					}
				};
			}
		});
		var _n = [], vn = /(=)\?(?=&|$)|\?\?/;
		S.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function() {
				var e = _n.pop() || S.expando + "_" + Ut.guid++;
				return this[e] = !0, e;
			}
		}), S.ajaxPrefilter("json jsonp", function(t, n, r) {
			var i, a, o, s = t.jsonp !== !1 && (vn.test(t.url) ? "url" : typeof t.data == "string" && (t.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && vn.test(t.data) && "data");
			if (s || t.dataTypes[0] === "jsonp") return i = t.jsonpCallback = m(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(vn, "$1" + i) : t.jsonp !== !1 && (t.url += (Wt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
				return o || S.error(i + " was not called"), o[0];
			}, t.dataTypes[0] = "json", a = e[i], e[i] = function() {
				o = arguments;
			}, r.always(function() {
				a === void 0 ? S(e).removeProp(i) : e[i] = a, t[i] && (t.jsonpCallback = n.jsonpCallback, _n.push(i)), o && m(a) && a(o[0]), o = a = void 0;
			}), "script";
		}), p.createHTMLDocument = (function() {
			var e = g.implementation.createHTMLDocument("").body;
			return e.innerHTML = "<form></form><form></form>", e.childNodes.length === 2;
		})(), S.parseHTML = function(e, t, n) {
			if (typeof e != "string") return [];
			typeof t == "boolean" && (n = t, t = !1);
			var r, i, a;
			return t || (p.createHTMLDocument ? (t = g.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = g.location.href, t.head.appendChild(r)) : t = g), i = oe.exec(e), a = !n && [], i ? [t.createElement(i[1])] : (i = Je([e], t, a), a && a.length && S(a).remove(), S.merge([], i.childNodes));
		}, S.fn.load = function(e, t, n) {
			var r, i, a, o = this, s = e.indexOf(" ");
			return s > -1 && (r = zt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && typeof t == "object" && (i = "POST"), o.length > 0 && S.ajax({
				url: e,
				type: i || "GET",
				dataType: "html",
				data: t
			}).done(function(e) {
				a = arguments, o.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
			}).always(n && function(e, t) {
				o.each(function() {
					n.apply(this, a || [
						e.responseText,
						t,
						e
					]);
				});
			}), this;
		}, S.expr.pseudos.animated = function(e) {
			return S.grep(S.timers, function(t) {
				return e === t.elem;
			}).length;
		}, S.offset = { setOffset: function(e, t, n) {
			var r, i, a, o, s, c, l, u = S.css(e, "position"), d = S(e), f = {};
			u === "static" && (e.style.position = "relative"), s = d.offset(), a = S.css(e, "top"), c = S.css(e, "left"), l = (u === "absolute" || u === "fixed") && (a + c).indexOf("auto") > -1, l ? (r = d.position(), o = r.top, i = r.left) : (o = parseFloat(a) || 0, i = parseFloat(c) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), t.top != null && (f.top = t.top - s.top + o), t.left != null && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : d.css(f);
		} }, S.fn.extend({
			offset: function(e) {
				if (arguments.length) return e === void 0 ? this : this.each(function(t) {
					S.offset.setOffset(this, e, t);
				});
				var t, n, r = this[0];
				if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
					top: t.top + n.pageYOffset,
					left: t.left + n.pageXOffset
				}) : {
					top: 0,
					left: 0
				};
			},
			position: function() {
				if (this[0]) {
					var e, t, n, r = this[0], i = {
						top: 0,
						left: 0
					};
					if (S.css(r, "position") === "fixed") t = r.getBoundingClientRect();
					else {
						for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && S.css(e, "position") === "static";) e = e.parentNode;
						e && e !== r && e.nodeType === 1 && (i = S(e).offset(), i.top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0));
					}
					return {
						top: t.top - i.top - S.css(r, "marginTop", !0),
						left: t.left - i.left - S.css(r, "marginLeft", !0)
					};
				}
			},
			offsetParent: function() {
				return this.map(function() {
					for (var e = this.offsetParent; e && S.css(e, "position") === "static";) e = e.offsetParent;
					return e || Pe;
				});
			}
		}), S.each({
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
		}, function(e, t) {
			var n = t === "pageYOffset";
			S.fn[e] = function(r) {
				return xe(this, function(e, r, i) {
					var a;
					if (h(e) ? a = e : e.nodeType === 9 && (a = e.defaultView), i === void 0) return a ? a[t] : e[r];
					a ? a.scrollTo(n ? a.pageXOffset : i, n ? i : a.pageYOffset) : e[r] = i;
				}, e, r, arguments.length);
			};
		}), S.each(["top", "left"], function(e, t) {
			S.cssHooks[t] = mt(p.pixelPosition, function(e, n) {
				if (n) return n = pt(e, t), ct.test(n) ? S(e).position()[t] + "px" : n;
			});
		}), S.each({
			Height: "height",
			Width: "width"
		}, function(e, t) {
			S.each({
				padding: "inner" + e,
				content: t,
				"": "outer" + e
			}, function(n, r) {
				S.fn[r] = function(i, a) {
					var o = arguments.length && (n || typeof i != "boolean"), s = n || (i === !0 || a === !0 ? "margin" : "border");
					return xe(this, function(t, n, i) {
						var a;
						return h(t) ? r.indexOf("outer") === 0 ? t["inner" + e] : t.document.documentElement["client" + e] : t.nodeType === 9 ? (a = t.documentElement, Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : i === void 0 ? S.css(t, n, s) : S.style(t, n, i, s);
					}, t, o ? i : void 0, o);
				};
			});
		}), S.each([
			"ajaxStart",
			"ajaxStop",
			"ajaxComplete",
			"ajaxError",
			"ajaxSuccess",
			"ajaxSend"
		], function(e, t) {
			S.fn[t] = function(e) {
				return this.on(t, e);
			};
		}), S.fn.extend({
			bind: function(e, t, n) {
				return this.on(e, null, t, n);
			},
			unbind: function(e, t) {
				return this.off(e, null, t);
			},
			delegate: function(e, t, n, r) {
				return this.on(t, e, n, r);
			},
			undelegate: function(e, t, n) {
				return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n);
			},
			hover: function(e, t) {
				return this.on("mouseenter", e).on("mouseleave", t || e);
			}
		}), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
			S.fn[t] = function(e, n) {
				return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
			};
		});
		var yn = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
		S.proxy = function(e, t) {
			var n, r, a;
			if (typeof t == "string" && (n = e[t], t = e, e = n), m(e)) return r = i.call(arguments, 2), a = function() {
				return e.apply(t || this, r.concat(i.call(arguments)));
			}, a.guid = e.guid = e.guid || S.guid++, a;
		}, S.holdReady = function(e) {
			e ? S.readyWait++ : S.ready(!0);
		}, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = w, S.isFunction = m, S.isWindow = h, S.camelCase = we, S.type = y, S.now = Date.now, S.isNumeric = function(e) {
			var t = S.type(e);
			return (t === "number" || t === "string") && !isNaN(e - parseFloat(e));
		}, S.trim = function(e) {
			return e == null ? "" : (e + "").replace(yn, "$1");
		}, typeof define == "function" && define.amd && define("jquery", [], function() {
			return S;
		});
		var bn = e.jQuery, xn = e.$;
		return S.noConflict = function(t) {
			return e.$ === S && (e.$ = xn), t && e.jQuery === S && (e.jQuery = bn), S;
		}, t === void 0 && (e.jQuery = e.$ = S), S;
	});
})), Qs = /* @__PURE__ */ c({ default: () => bl });
function $s(e) {
	var t = !1;
	return function() {
		t || (t = !0, window.Promise.resolve().then(function() {
			t = !1, e();
		}));
	};
}
function ec(e) {
	var t = !1;
	return function() {
		t || (t = !0, setTimeout(function() {
			t = !1, e();
		}, sl));
	};
}
function tc(e) {
	return e && {}.toString.call(e) === "[object Function]";
}
function nc(e, t) {
	if (e.nodeType !== 1) return [];
	var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
	return t ? n[t] : n;
}
function rc(e) {
	return e.nodeName === "HTML" ? e : e.parentNode || e.host;
}
function ic(e) {
	if (!e) return document.body;
	switch (e.nodeName) {
		case "HTML":
		case "BODY": return e.ownerDocument.body;
		case "#document": return e.body;
	}
	var t = nc(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
	return /(auto|scroll|overlay)/.test(n + i + r) ? e : ic(rc(e));
}
function ac(e) {
	return e && e.referenceNode ? e.referenceNode : e;
}
function oc(e) {
	return e === 11 ? ll : e === 10 ? ul : ll || ul;
}
function sc(e) {
	if (!e) return document.documentElement;
	for (var t = oc(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
	var r = n && n.nodeName;
	return !r || r === "BODY" || r === "HTML" ? e ? e.ownerDocument.documentElement : document.documentElement : [
		"TH",
		"TD",
		"TABLE"
	].indexOf(n.nodeName) !== -1 && nc(n, "position") === "static" ? sc(n) : n;
}
function cc(e) {
	var t = e.nodeName;
	return t === "BODY" ? !1 : t === "HTML" || sc(e.firstElementChild) === e;
}
function lc(e) {
	return e.parentNode === null ? e : lc(e.parentNode);
}
function uc(e, t) {
	if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
	var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, r = n ? e : t, i = n ? t : e, a = document.createRange();
	a.setStart(r, 0), a.setEnd(i, 0);
	var o = a.commonAncestorContainer;
	if (e !== o && t !== o || r.contains(i)) return cc(o) ? o : sc(o);
	var s = lc(e);
	return s.host ? uc(s.host, t) : uc(e, lc(t).host);
}
function dc(e) {
	var t = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "top") === "top" ? "scrollTop" : "scrollLeft", n = e.nodeName;
	if (n === "BODY" || n === "HTML") {
		var r = e.ownerDocument.documentElement;
		return (e.ownerDocument.scrollingElement || r)[t];
	}
	return e[t];
}
function fc(e, t) {
	var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = dc(t, "top"), i = dc(t, "left"), a = n ? -1 : 1;
	return e.top += r * a, e.bottom += r * a, e.left += i * a, e.right += i * a, e;
}
function pc(e, t) {
	var n = t === "x" ? "Left" : "Top", r = n === "Left" ? "Right" : "Bottom";
	return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + r + "Width"]);
}
function X(e, t, n, r) {
	return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], oc(10) ? parseInt(n["offset" + e]) + parseInt(r["margin" + (e === "Height" ? "Top" : "Left")]) + parseInt(r["margin" + (e === "Height" ? "Bottom" : "Right")]) : 0);
}
function mc(e) {
	var t = e.body, n = e.documentElement, r = oc(10) && getComputedStyle(n);
	return {
		height: X("Height", t, n, r),
		width: X("Width", t, n, r)
	};
}
function hc(e) {
	return ml({}, e, {
		right: e.left + e.width,
		bottom: e.top + e.height
	});
}
function gc(e) {
	var t = {};
	try {
		if (oc(10)) {
			t = e.getBoundingClientRect();
			var n = dc(e, "top"), r = dc(e, "left");
			t.top += n, t.left += r, t.bottom += n, t.right += r;
		} else t = e.getBoundingClientRect();
	} catch {}
	var i = {
		left: t.left,
		top: t.top,
		width: t.right - t.left,
		height: t.bottom - t.top
	}, a = e.nodeName === "HTML" ? mc(e.ownerDocument) : {}, o = a.width || e.clientWidth || i.width, s = a.height || e.clientHeight || i.height, c = e.offsetWidth - o, l = e.offsetHeight - s;
	if (c || l) {
		var u = nc(e);
		c -= pc(u, "x"), l -= pc(u, "y"), i.width -= c, i.height -= l;
	}
	return hc(i);
}
function _c(e, t) {
	var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = oc(10), i = t.nodeName === "HTML", a = gc(e), o = gc(t), s = ic(e), c = nc(t), l = parseFloat(c.borderTopWidth), u = parseFloat(c.borderLeftWidth);
	n && i && (o.top = Math.max(o.top, 0), o.left = Math.max(o.left, 0));
	var d = hc({
		top: a.top - o.top - l,
		left: a.left - o.left - u,
		width: a.width,
		height: a.height
	});
	if (d.marginTop = 0, d.marginLeft = 0, !r && i) {
		var f = parseFloat(c.marginTop), p = parseFloat(c.marginLeft);
		d.top -= l - f, d.bottom -= l - f, d.left -= u - p, d.right -= u - p, d.marginTop = f, d.marginLeft = p;
	}
	return (r && !n ? t.contains(s) : t === s && s.nodeName !== "BODY") && (d = fc(d, t)), d;
}
function vc(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = e.ownerDocument.documentElement, r = _c(e, n), i = Math.max(n.clientWidth, window.innerWidth || 0), a = Math.max(n.clientHeight, window.innerHeight || 0), o = t ? 0 : dc(n), s = t ? 0 : dc(n, "left");
	return hc({
		top: o - r.top + r.marginTop,
		left: s - r.left + r.marginLeft,
		width: i,
		height: a
	});
}
function yc(e) {
	var t = e.nodeName;
	if (t === "BODY" || t === "HTML") return !1;
	if (nc(e, "position") === "fixed") return !0;
	var n = rc(e);
	return n ? yc(n) : !1;
}
function bc(e) {
	if (!e || !e.parentElement || oc()) return document.documentElement;
	for (var t = e.parentElement; t && nc(t, "transform") === "none";) t = t.parentElement;
	return t || document.documentElement;
}
function xc(e, t, n, r) {
	var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1, a = {
		top: 0,
		left: 0
	}, o = i ? bc(e) : uc(e, ac(t));
	if (r === "viewport") a = vc(o, i);
	else {
		var s = void 0;
		r === "scrollParent" ? (s = ic(rc(t)), s.nodeName === "BODY" && (s = e.ownerDocument.documentElement)) : s = r === "window" ? e.ownerDocument.documentElement : r;
		var c = _c(s, o, i);
		if (s.nodeName === "HTML" && !yc(o)) {
			var l = mc(e.ownerDocument), u = l.height, d = l.width;
			a.top += c.top - c.marginTop, a.bottom = u + c.top, a.left += c.left - c.marginLeft, a.right = d + c.left;
		} else a = c;
	}
	n ||= 0;
	var f = typeof n == "number";
	return a.left += f ? n : n.left || 0, a.top += f ? n : n.top || 0, a.right -= f ? n : n.right || 0, a.bottom -= f ? n : n.bottom || 0, a;
}
function Sc(e) {
	return e.width * e.height;
}
function Cc(e, t, n, r, i) {
	var a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
	if (e.indexOf("auto") === -1) return e;
	var o = xc(n, r, a, i), s = {
		top: {
			width: o.width,
			height: t.top - o.top
		},
		right: {
			width: o.right - t.right,
			height: o.height
		},
		bottom: {
			width: o.width,
			height: o.bottom - t.bottom
		},
		left: {
			width: t.left - o.left,
			height: o.height
		}
	}, c = Object.keys(s).map(function(e) {
		return ml({ key: e }, s[e], { area: Sc(s[e]) });
	}).sort(function(e, t) {
		return t.area - e.area;
	}), l = c.filter(function(e) {
		var t = e.width, r = e.height;
		return t >= n.clientWidth && r >= n.clientHeight;
	}), u = l.length > 0 ? l[0].key : c[0].key, d = e.split("-")[1];
	return u + (d ? "-" + d : "");
}
function wc(e, t, n) {
	var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
	return _c(n, r ? bc(t) : uc(t, ac(n)), r);
}
function Tc(e) {
	var t = e.ownerDocument.defaultView.getComputedStyle(e), n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0), r = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
	return {
		width: e.offsetWidth + r,
		height: e.offsetHeight + n
	};
}
function Ec(e) {
	var t = {
		left: "right",
		right: "left",
		bottom: "top",
		top: "bottom"
	};
	return e.replace(/left|right|bottom|top/g, function(e) {
		return t[e];
	});
}
function Dc(e, t, n) {
	n = n.split("-")[0];
	var r = Tc(e), i = {
		width: r.width,
		height: r.height
	}, a = ["right", "left"].indexOf(n) !== -1, o = a ? "top" : "left", s = a ? "left" : "top", c = a ? "height" : "width", l = a ? "width" : "height";
	return i[o] = t[o] + t[c] / 2 - r[c] / 2, n === s ? i[s] = t[s] - r[l] : i[s] = t[Ec(s)], i;
}
function Oc(e, t) {
	return Array.prototype.find ? e.find(t) : e.filter(t)[0];
}
function kc(e, t, n) {
	if (Array.prototype.findIndex) return e.findIndex(function(e) {
		return e[t] === n;
	});
	var r = Oc(e, function(e) {
		return e[t] === n;
	});
	return e.indexOf(r);
}
function Ac(e, t, n) {
	return (n === void 0 ? e : e.slice(0, kc(e, "name", n))).forEach(function(e) {
		e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
		var n = e.function || e.fn;
		e.enabled && tc(n) && (t.offsets.popper = hc(t.offsets.popper), t.offsets.reference = hc(t.offsets.reference), t = n(t, e));
	}), t;
}
function jc() {
	if (!this.state.isDestroyed) {
		var e = {
			instance: this,
			styles: {},
			arrowStyles: {},
			attributes: {},
			flipped: !1,
			offsets: {}
		};
		e.offsets.reference = wc(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = Cc(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = Dc(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = Ac(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
	}
}
function Mc(e, t) {
	return e.some(function(e) {
		var n = e.name;
		return e.enabled && n === t;
	});
}
function Nc(e) {
	for (var t = [
		!1,
		"ms",
		"Webkit",
		"Moz",
		"O"
	], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < t.length; r++) {
		var i = t[r], a = i ? "" + i + n : e;
		if (document.body.style[a] !== void 0) return a;
	}
	return null;
}
function Pc() {
	return this.state.isDestroyed = !0, Mc(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[Nc("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
}
function Fc(e) {
	var t = e.ownerDocument;
	return t ? t.defaultView : window;
}
function Ic(e, t, n, r) {
	var i = e.nodeName === "BODY", a = i ? e.ownerDocument.defaultView : e;
	a.addEventListener(t, n, { passive: !0 }), i || Ic(ic(a.parentNode), t, n, r), r.push(a);
}
function Lc(e, t, n, r) {
	n.updateBound = r, Fc(e).addEventListener("resize", n.updateBound, { passive: !0 });
	var i = ic(e);
	return Ic(i, "scroll", n.updateBound, n.scrollParents), n.scrollElement = i, n.eventsEnabled = !0, n;
}
function Rc() {
	this.state.eventsEnabled || (this.state = Lc(this.reference, this.options, this.state, this.scheduleUpdate));
}
function zc(e, t) {
	return Fc(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
		e.removeEventListener("scroll", t.updateBound);
	}), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t;
}
function Bc() {
	this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = zc(this.reference, this.state));
}
function Vc(e) {
	return e !== "" && !isNaN(parseFloat(e)) && isFinite(e);
}
function Hc(e, t) {
	Object.keys(t).forEach(function(n) {
		var r = "";
		[
			"width",
			"height",
			"top",
			"right",
			"bottom",
			"left"
		].indexOf(n) !== -1 && Vc(t[n]) && (r = "px"), e.style[n] = t[n] + r;
	});
}
function Z(e, t) {
	Object.keys(t).forEach(function(n) {
		t[n] === !1 ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
	});
}
function Uc(e) {
	return Hc(e.instance.popper, e.styles), Z(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && Hc(e.arrowElement, e.arrowStyles), e;
}
function Wc(e, t, n, r, i) {
	var a = wc(i, t, e, n.positionFixed), o = Cc(n.placement, a, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
	return t.setAttribute("x-placement", o), Hc(t, { position: n.positionFixed ? "fixed" : "absolute" }), n;
}
function Gc(e, t) {
	var n = e.offsets, r = n.popper, i = n.reference, a = Math.round, o = Math.floor, s = function(e) {
		return e;
	}, c = a(i.width), l = a(r.width), u = ["left", "right"].indexOf(e.placement) !== -1, d = e.placement.indexOf("-") !== -1, f = c % 2 == l % 2, p = c % 2 == 1 && l % 2 == 1, m = t ? u || d || f ? a : o : s, h = t ? a : s;
	return {
		left: m(p && !d && t ? r.left - 1 : r.left),
		top: h(r.top),
		bottom: h(r.bottom),
		right: m(r.right)
	};
}
function Kc(e, t) {
	var n = t.x, r = t.y, i = e.offsets.popper, a = Oc(e.instance.modifiers, function(e) {
		return e.name === "applyStyle";
	}).gpuAcceleration;
	a !== void 0 && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
	var o = a === void 0 ? t.gpuAcceleration : a, s = sc(e.instance.popper), c = gc(s), l = { position: i.position }, u = Gc(e, window.devicePixelRatio < 2 || !hl), d = n === "bottom" ? "top" : "bottom", f = r === "right" ? "left" : "right", p = Nc("transform"), m = void 0, h = void 0;
	if (h = d === "bottom" ? s.nodeName === "HTML" ? -s.clientHeight + u.bottom : -c.height + u.bottom : u.top, m = f === "right" ? s.nodeName === "HTML" ? -s.clientWidth + u.right : -c.width + u.right : u.left, o && p) l[p] = "translate3d(" + m + "px, " + h + "px, 0)", l[d] = 0, l[f] = 0, l.willChange = "transform";
	else {
		var g = d === "bottom" ? -1 : 1, _ = f === "right" ? -1 : 1;
		l[d] = h * g, l[f] = m * _, l.willChange = d + ", " + f;
	}
	return e.attributes = ml({}, { "x-placement": e.placement }, e.attributes), e.styles = ml({}, l, e.styles), e.arrowStyles = ml({}, e.offsets.arrow, e.arrowStyles), e;
}
function qc(e, t, n) {
	var r = Oc(e, function(e) {
		return e.name === t;
	}), i = !!r && e.some(function(e) {
		return e.name === n && e.enabled && e.order < r.order;
	});
	if (!i) {
		var a = "`" + t + "`", o = "`" + n + "`";
		console.warn(o + " modifier is required by " + a + " modifier in order to work, be sure to include it before " + a + "!");
	}
	return i;
}
function Jc(e, t) {
	var n;
	if (!qc(e.instance.modifiers, "arrow", "keepTogether")) return e;
	var r = t.element;
	if (typeof r == "string") {
		if (r = e.instance.popper.querySelector(r), !r) return e;
	} else if (!e.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
	var i = e.placement.split("-")[0], a = e.offsets, o = a.popper, s = a.reference, c = ["left", "right"].indexOf(i) !== -1, l = c ? "height" : "width", u = c ? "Top" : "Left", d = u.toLowerCase(), f = c ? "left" : "top", p = c ? "bottom" : "right", m = Tc(r)[l];
	s[p] - m < o[d] && (e.offsets.popper[d] -= o[d] - (s[p] - m)), s[d] + m > o[p] && (e.offsets.popper[d] += s[d] + m - o[p]), e.offsets.popper = hc(e.offsets.popper);
	var h = s[d] + s[l] / 2 - m / 2, g = nc(e.instance.popper), _ = parseFloat(g["margin" + u]), v = parseFloat(g["border" + u + "Width"]), y = h - e.offsets.popper[d] - _ - v;
	return y = Math.max(Math.min(o[l] - m, y), 0), e.arrowElement = r, e.offsets.arrow = (n = {}, pl(n, d, Math.round(y)), pl(n, f, ""), n), e;
}
function Yc(e) {
	return e === "end" ? "start" : e === "start" ? "end" : e;
}
function Xc(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = _l.indexOf(e), r = _l.slice(n + 1).concat(_l.slice(0, n));
	return t ? r.reverse() : r;
}
function Zc(e, t) {
	if (Mc(e.instance.modifiers, "inner") || e.flipped && e.placement === e.originalPlacement) return e;
	var n = xc(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed), r = e.placement.split("-")[0], i = Ec(r), a = e.placement.split("-")[1] || "", o = [];
	switch (t.behavior) {
		case vl.FLIP:
			o = [r, i];
			break;
		case vl.CLOCKWISE:
			o = Xc(r);
			break;
		case vl.COUNTERCLOCKWISE:
			o = Xc(r, !0);
			break;
		default: o = t.behavior;
	}
	return o.forEach(function(s, c) {
		if (r !== s || o.length === c + 1) return e;
		r = e.placement.split("-")[0], i = Ec(r);
		var l = e.offsets.popper, u = e.offsets.reference, d = Math.floor, f = r === "left" && d(l.right) > d(u.left) || r === "right" && d(l.left) < d(u.right) || r === "top" && d(l.bottom) > d(u.top) || r === "bottom" && d(l.top) < d(u.bottom), p = d(l.left) < d(n.left), m = d(l.right) > d(n.right), h = d(l.top) < d(n.top), g = d(l.bottom) > d(n.bottom), _ = r === "left" && p || r === "right" && m || r === "top" && h || r === "bottom" && g, v = ["top", "bottom"].indexOf(r) !== -1, y = !!t.flipVariations && (v && a === "start" && p || v && a === "end" && m || !v && a === "start" && h || !v && a === "end" && g), b = !!t.flipVariationsByContent && (v && a === "start" && m || v && a === "end" && p || !v && a === "start" && g || !v && a === "end" && h), x = y || b;
		(f || _ || x) && (e.flipped = !0, (f || _) && (r = o[c + 1]), x && (a = Yc(a)), e.placement = r + (a ? "-" + a : ""), e.offsets.popper = ml({}, e.offsets.popper, Dc(e.instance.popper, e.offsets.reference, e.placement)), e = Ac(e.instance.modifiers, e, "flip"));
	}), e;
}
function Qc(e) {
	var t = e.offsets, n = t.popper, r = t.reference, i = e.placement.split("-")[0], a = Math.floor, o = ["top", "bottom"].indexOf(i) !== -1, s = o ? "right" : "bottom", c = o ? "left" : "top", l = o ? "width" : "height";
	return n[s] < a(r[c]) && (e.offsets.popper[c] = a(r[c]) - n[l]), n[c] > a(r[s]) && (e.offsets.popper[c] = a(r[s])), e;
}
function $c(e, t, n, r) {
	var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), a = +i[1], o = i[2];
	if (!a) return e;
	if (o.indexOf("%") === 0) {
		var s = void 0;
		switch (o) {
			case "%p":
				s = n;
				break;
			default: s = r;
		}
		return hc(s)[t] / 100 * a;
	} else if (o === "vh" || o === "vw") {
		var c = void 0;
		return c = o === "vh" ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0), c / 100 * a;
	} else return a;
}
function el(e, t, n, r) {
	var i = [0, 0], a = ["right", "left"].indexOf(r) !== -1, o = e.split(/(\+|\-)/).map(function(e) {
		return e.trim();
	}), s = o.indexOf(Oc(o, function(e) {
		return e.search(/,|\s/) !== -1;
	}));
	o[s] && o[s].indexOf(",") === -1 && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
	var c = /\s*,\s*|\s+/, l = s === -1 ? [o] : [o.slice(0, s).concat([o[s].split(c)[0]]), [o[s].split(c)[1]].concat(o.slice(s + 1))];
	return l = l.map(function(e, r) {
		var i = (r === 1 ? !a : a) ? "height" : "width", o = !1;
		return e.reduce(function(e, t) {
			return e[e.length - 1] === "" && ["+", "-"].indexOf(t) !== -1 ? (e[e.length - 1] = t, o = !0, e) : o ? (e[e.length - 1] += t, o = !1, e) : e.concat(t);
		}, []).map(function(e) {
			return $c(e, i, t, n);
		});
	}), l.forEach(function(e, t) {
		e.forEach(function(n, r) {
			Vc(n) && (i[t] += n * (e[r - 1] === "-" ? -1 : 1));
		});
	}), i;
}
function tl(e, t) {
	var n = t.offset, r = e.placement, i = e.offsets, a = i.popper, o = i.reference, s = r.split("-")[0], c = void 0;
	return c = Vc(+n) ? [+n, 0] : el(n, a, o, s), s === "left" ? (a.top += c[0], a.left -= c[1]) : s === "right" ? (a.top += c[0], a.left += c[1]) : s === "top" ? (a.left += c[0], a.top -= c[1]) : s === "bottom" && (a.left += c[0], a.top += c[1]), e.popper = a, e;
}
function nl(e, t) {
	var n = t.boundariesElement || sc(e.instance.popper);
	e.instance.reference === n && (n = sc(n));
	var r = Nc("transform"), i = e.instance.popper.style, a = i.top, o = i.left, s = i[r];
	i.top = "", i.left = "", i[r] = "";
	var c = xc(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
	i.top = a, i.left = o, i[r] = s, t.boundaries = c;
	var l = t.priority, u = e.offsets.popper, d = {
		primary: function(e) {
			var n = u[e];
			return u[e] < c[e] && !t.escapeWithReference && (n = Math.max(u[e], c[e])), pl({}, e, n);
		},
		secondary: function(e) {
			var n = e === "right" ? "left" : "top", r = u[n];
			return u[e] > c[e] && !t.escapeWithReference && (r = Math.min(u[n], c[e] - (e === "right" ? u.width : u.height))), pl({}, n, r);
		}
	};
	return l.forEach(function(e) {
		var t = ["left", "top"].indexOf(e) === -1 ? "secondary" : "primary";
		u = ml({}, u, d[t](e));
	}), e.offsets.popper = u, e;
}
function rl(e) {
	var t = e.placement, n = t.split("-")[0], r = t.split("-")[1];
	if (r) {
		var i = e.offsets, a = i.reference, o = i.popper, s = ["bottom", "top"].indexOf(n) !== -1, c = s ? "left" : "top", l = s ? "width" : "height", u = {
			start: pl({}, c, a[c]),
			end: pl({}, c, a[c] + a[l] - o[l])
		};
		e.offsets.popper = ml({}, o, u[r]);
	}
	return e;
}
function il(e) {
	if (!qc(e.instance.modifiers, "hide", "preventOverflow")) return e;
	var t = e.offsets.reference, n = Oc(e.instance.modifiers, function(e) {
		return e.name === "preventOverflow";
	}).boundaries;
	if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
		if (e.hide === !0) return e;
		e.hide = !0, e.attributes["x-out-of-boundaries"] = "";
	} else {
		if (e.hide === !1) return e;
		e.hide = !1, e.attributes["x-out-of-boundaries"] = !1;
	}
	return e;
}
function al(e) {
	var t = e.placement, n = t.split("-")[0], r = e.offsets, i = r.popper, a = r.reference, o = ["left", "right"].indexOf(n) !== -1, s = ["top", "left"].indexOf(n) === -1;
	return i[o ? "left" : "top"] = a[n] - (s ? i[o ? "width" : "height"] : 0), e.placement = Ec(t), e.offsets.popper = hc(i), e;
}
var ol, sl, cl, ll, ul, dl, fl, pl, ml, hl, gl, _l, vl, yl, bl, xl = o((() => {
	ol = typeof window < "u" && typeof document < "u" && typeof navigator < "u", sl = function() {
		for (var e = [
			"Edge",
			"Trident",
			"Firefox"
		], t = 0; t < e.length; t += 1) if (ol && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
		return 0;
	}(), cl = ol && window.Promise ? $s : ec, ll = ol && !!(window.MSInputMethodContext && document.documentMode), ul = ol && /MSIE 10/.test(navigator.userAgent), dl = function(e, t) {
		if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
	}, fl = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
			}
		}
		return function(t, n, r) {
			return n && e(t.prototype, n), r && e(t, r), t;
		};
	}(), pl = function(e, t, n) {
		return t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e;
	}, ml = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, hl = ol && /Firefox/i.test(navigator.userAgent), gl = [
		"auto-start",
		"auto",
		"auto-end",
		"top-start",
		"top",
		"top-end",
		"right-start",
		"right",
		"right-end",
		"bottom-end",
		"bottom",
		"bottom-start",
		"left-end",
		"left",
		"left-start"
	], _l = gl.slice(3), vl = {
		FLIP: "flip",
		CLOCKWISE: "clockwise",
		COUNTERCLOCKWISE: "counterclockwise"
	}, yl = {
		placement: "bottom",
		positionFixed: !1,
		eventsEnabled: !0,
		removeOnDestroy: !1,
		onCreate: function() {},
		onUpdate: function() {},
		modifiers: {
			shift: {
				order: 100,
				enabled: !0,
				fn: rl
			},
			offset: {
				order: 200,
				enabled: !0,
				fn: tl,
				offset: 0
			},
			preventOverflow: {
				order: 300,
				enabled: !0,
				fn: nl,
				priority: [
					"left",
					"right",
					"top",
					"bottom"
				],
				padding: 5,
				boundariesElement: "scrollParent"
			},
			keepTogether: {
				order: 400,
				enabled: !0,
				fn: Qc
			},
			arrow: {
				order: 500,
				enabled: !0,
				fn: Jc,
				element: "[x-arrow]"
			},
			flip: {
				order: 600,
				enabled: !0,
				fn: Zc,
				behavior: "flip",
				padding: 5,
				boundariesElement: "viewport",
				flipVariations: !1,
				flipVariationsByContent: !1
			},
			inner: {
				order: 700,
				enabled: !1,
				fn: al
			},
			hide: {
				order: 800,
				enabled: !0,
				fn: il
			},
			computeStyle: {
				order: 850,
				enabled: !0,
				fn: Kc,
				gpuAcceleration: !0,
				x: "bottom",
				y: "right"
			},
			applyStyle: {
				order: 900,
				enabled: !0,
				fn: Uc,
				onLoad: Wc,
				gpuAcceleration: void 0
			}
		}
	}, bl = function() {
		function e(t, n) {
			var r = this, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
			dl(this, e), this.scheduleUpdate = function() {
				return requestAnimationFrame(r.update);
			}, this.update = cl(this.update.bind(this)), this.options = ml({}, e.Defaults, i), this.state = {
				isDestroyed: !1,
				isCreated: !1,
				scrollParents: []
			}, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(ml({}, e.Defaults.modifiers, i.modifiers)).forEach(function(t) {
				r.options.modifiers[t] = ml({}, e.Defaults.modifiers[t] || {}, i.modifiers ? i.modifiers[t] : {});
			}), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
				return ml({ name: e }, r.options.modifiers[e]);
			}).sort(function(e, t) {
				return e.order - t.order;
			}), this.modifiers.forEach(function(e) {
				e.enabled && tc(e.onLoad) && e.onLoad(r.reference, r.popper, r.options, e, r.state);
			}), this.update();
			var a = this.options.eventsEnabled;
			a && this.enableEventListeners(), this.state.eventsEnabled = a;
		}
		return fl(e, [
			{
				key: "update",
				value: function() {
					return jc.call(this);
				}
			},
			{
				key: "destroy",
				value: function() {
					return Pc.call(this);
				}
			},
			{
				key: "enableEventListeners",
				value: function() {
					return Rc.call(this);
				}
			},
			{
				key: "disableEventListeners",
				value: function() {
					return Bc.call(this);
				}
			}
		]), e;
	}(), bl.Utils = (typeof window < "u" ? window : globalThis).PopperUtils, bl.placements = gl, bl.Defaults = yl;
}));
(/* @__PURE__ */ s(((e, t) => {
	(function(n, r) {
		typeof e == "object" && t !== void 0 ? r(e, Zs(), (xl(), d(Qs))) : typeof define == "function" && define.amd ? define([
			"exports",
			"jquery",
			"popper.js"
		], r) : (n = typeof globalThis < "u" ? globalThis : n || self, r(n.bootstrap = {}, n.jQuery, n.Popper));
	})(e, (function(e, t, n) {
		function r(e) {
			return e && typeof e == "object" && "default" in e ? e : { default: e };
		}
		var i = /* @__PURE__ */ r(t), a = /* @__PURE__ */ r(n);
		function o(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
			}
		}
		function s(e, t, n) {
			return t && o(e.prototype, t), n && o(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
		}
		function c() {
			return c = Object.assign ? Object.assign.bind() : function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
				}
				return e;
			}, c.apply(this, arguments);
		}
		function l(e, t) {
			e.prototype = Object.create(t.prototype), e.prototype.constructor = e, u(e, t);
		}
		function u(e, t) {
			return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
				return e.__proto__ = t, e;
			}, u(e, t);
		}
		var d = "transitionend", f = 1e6, p = 1e3;
		function m(e) {
			return e == null ? "" + e : {}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase();
		}
		function h() {
			return {
				bindType: d,
				delegateType: d,
				handle: function(e) {
					if (i.default(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
				}
			};
		}
		function g(e) {
			var t = this, n = !1;
			return i.default(this).one(v.TRANSITION_END, function() {
				n = !0;
			}), setTimeout(function() {
				n || v.triggerTransitionEnd(t);
			}, e), this;
		}
		function _() {
			i.default.fn.emulateTransitionEnd = g, i.default.event.special[v.TRANSITION_END] = h();
		}
		var v = {
			TRANSITION_END: "bsTransitionEnd",
			getUID: function(e) {
				do
					e += ~~(Math.random() * f);
				while (document.getElementById(e));
				return e;
			},
			getSelectorFromElement: function(e) {
				var t = e.getAttribute("data-target");
				if (!t || t === "#") {
					var n = e.getAttribute("href");
					t = n && n !== "#" ? n.trim() : "";
				}
				try {
					return document.querySelector(t) ? t : null;
				} catch {
					return null;
				}
			},
			getTransitionDurationFromElement: function(e) {
				if (!e) return 0;
				var t = i.default(e).css("transition-duration"), n = i.default(e).css("transition-delay");
				return !parseFloat(t) && !parseFloat(n) ? 0 : (t = t.split(",")[0], n = n.split(",")[0], (parseFloat(t) + parseFloat(n)) * p);
			},
			reflow: function(e) {
				return e.offsetHeight;
			},
			triggerTransitionEnd: function(e) {
				i.default(e).trigger(d);
			},
			supportsTransitionEnd: function() {
				return !!d;
			},
			isElement: function(e) {
				return (e[0] || e).nodeType;
			},
			typeCheckConfig: function(e, t, n) {
				for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
					var i = n[r], a = t[r], o = a && v.isElement(a) ? "element" : m(a);
					if (!new RegExp(i).test(o)) throw Error(e.toUpperCase() + ": " + ("Option \"" + r + "\" provided type \"" + o + "\" ") + ("but expected type \"" + i + "\"."));
				}
			},
			findShadowRoot: function(e) {
				if (!document.documentElement.attachShadow) return null;
				if (typeof e.getRootNode == "function") {
					var t = e.getRootNode();
					return t instanceof ShadowRoot ? t : null;
				}
				return e instanceof ShadowRoot ? e : e.parentNode ? v.findShadowRoot(e.parentNode) : null;
			},
			jQueryDetection: function() {
				if (i.default === void 0) throw TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
				var e = i.default.fn.jquery.split(" ")[0].split("."), t = 1, n = 2, r = 9;
				if (e[0] < n && e[1] < r || e[0] === t && e[1] === r && e[2] < 1 || e[0] >= 4) throw Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
			}
		};
		v.jQueryDetection(), _();
		var y = "alert", b = "4.6.2", x = "bs.alert", S = "." + x, C = ".data-api", w = i.default.fn[y], T = "alert", E = "fade", ee = "show", D = "close" + S, te = "closed" + S, ne = "click" + S + C, re = "[data-dismiss=\"alert\"]", O = /* @__PURE__ */ function() {
			function e(e) {
				this._element = e;
			}
			var t = e.prototype;
			return t.close = function(e) {
				var t = this._element;
				e && (t = this._getRootElement(e)), !this._triggerCloseEvent(t).isDefaultPrevented() && this._removeElement(t);
			}, t.dispose = function() {
				i.default.removeData(this._element, x), this._element = null;
			}, t._getRootElement = function(e) {
				var t = v.getSelectorFromElement(e), n = !1;
				return t && (n = document.querySelector(t)), n ||= i.default(e).closest("." + T)[0], n;
			}, t._triggerCloseEvent = function(e) {
				var t = i.default.Event(D);
				return i.default(e).trigger(t), t;
			}, t._removeElement = function(e) {
				var t = this;
				if (i.default(e).removeClass(ee), !i.default(e).hasClass(E)) {
					this._destroyElement(e);
					return;
				}
				var n = v.getTransitionDurationFromElement(e);
				i.default(e).one(v.TRANSITION_END, function(n) {
					return t._destroyElement(e, n);
				}).emulateTransitionEnd(n);
			}, t._destroyElement = function(e) {
				i.default(e).detach().trigger(te).remove();
			}, e._jQueryInterface = function(t) {
				return this.each(function() {
					var n = i.default(this), r = n.data(x);
					r || (r = new e(this), n.data(x, r)), t === "close" && r[t](this);
				});
			}, e._handleDismiss = function(e) {
				return function(t) {
					t && t.preventDefault(), e.close(this);
				};
			}, s(e, null, [{
				key: "VERSION",
				get: function() {
					return b;
				}
			}]), e;
		}();
		i.default(document).on(ne, re, O._handleDismiss(new O())), i.default.fn[y] = O._jQueryInterface, i.default.fn[y].Constructor = O, i.default.fn[y].noConflict = function() {
			return i.default.fn[y] = w, O._jQueryInterface;
		};
		var ie = "button", k = "4.6.2", A = "bs.button", ae = "." + A, oe = ".data-api", se = i.default.fn[ie], j = "active", ce = "btn", le = "focus", ue = "click" + ae + oe, de = "focus" + ae + oe + " " + ("blur" + ae + oe), fe = "load" + ae + oe, pe = "[data-toggle^=\"button\"]", me = "[data-toggle=\"buttons\"]", he = "[data-toggle=\"button\"]", ge = "[data-toggle=\"buttons\"] .btn", _e = "input:not([type=\"hidden\"])", ve = ".active", ye = ".btn", be = /* @__PURE__ */ function() {
			function e(e) {
				this._element = e, this.shouldAvoidTriggerChange = !1;
			}
			var t = e.prototype;
			return t.toggle = function() {
				var e = !0, t = !0, n = i.default(this._element).closest(me)[0];
				if (n) {
					var r = this._element.querySelector(_e);
					if (r) {
						if (r.type === "radio") if (r.checked && this._element.classList.contains(j)) e = !1;
						else {
							var a = n.querySelector(ve);
							a && i.default(a).removeClass(j);
						}
						e && ((r.type === "checkbox" || r.type === "radio") && (r.checked = !this._element.classList.contains(j)), this.shouldAvoidTriggerChange || i.default(r).trigger("change")), r.focus(), t = !1;
					}
				}
				this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(j)), e && i.default(this._element).toggleClass(j));
			}, t.dispose = function() {
				i.default.removeData(this._element, A), this._element = null;
			}, e._jQueryInterface = function(t, n) {
				return this.each(function() {
					var r = i.default(this), a = r.data(A);
					a || (a = new e(this), r.data(A, a)), a.shouldAvoidTriggerChange = n, t === "toggle" && a[t]();
				});
			}, s(e, null, [{
				key: "VERSION",
				get: function() {
					return k;
				}
			}]), e;
		}();
		i.default(document).on(ue, pe, function(e) {
			var t = e.target, n = t;
			if (i.default(t).hasClass(ce) || (t = i.default(t).closest(ye)[0]), !t || t.hasAttribute("disabled") || t.classList.contains("disabled")) e.preventDefault();
			else {
				var r = t.querySelector(_e);
				if (r && (r.hasAttribute("disabled") || r.classList.contains("disabled"))) {
					e.preventDefault();
					return;
				}
				(n.tagName === "INPUT" || t.tagName !== "LABEL") && be._jQueryInterface.call(i.default(t), "toggle", n.tagName === "INPUT");
			}
		}).on(de, pe, function(e) {
			var t = i.default(e.target).closest(ye)[0];
			i.default(t).toggleClass(le, /^focus(in)?$/.test(e.type));
		}), i.default(window).on(fe, function() {
			for (var e = [].slice.call(document.querySelectorAll(ge)), t = 0, n = e.length; t < n; t++) {
				var r = e[t], i = r.querySelector(_e);
				i.checked || i.hasAttribute("checked") ? r.classList.add(j) : r.classList.remove(j);
			}
			e = [].slice.call(document.querySelectorAll(he));
			for (var a = 0, o = e.length; a < o; a++) {
				var s = e[a];
				s.getAttribute("aria-pressed") === "true" ? s.classList.add(j) : s.classList.remove(j);
			}
		}), i.default.fn[ie] = be._jQueryInterface, i.default.fn[ie].Constructor = be, i.default.fn[ie].noConflict = function() {
			return i.default.fn[ie] = se, be._jQueryInterface;
		};
		var xe = "carousel", M = "4.6.2", Se = "bs.carousel", Ce = "." + Se, we = ".data-api", Te = i.default.fn[xe], Ee = 37, N = 39, De = 500, Oe = 40, ke = "carousel", Ae = "active", je = "slide", Me = "carousel-item-right", Ne = "carousel-item-left", P = "carousel-item-next", Pe = "carousel-item-prev", Fe = "pointer-event", Ie = "next", F = "prev", Le = "left", Re = "right", ze = "slide" + Ce, Be = "slid" + Ce, Ve = "keydown" + Ce, He = "mouseenter" + Ce, Ue = "mouseleave" + Ce, We = "touchstart" + Ce, Ge = "touchmove" + Ce, Ke = "touchend" + Ce, qe = "pointerdown" + Ce, Je = "pointerup" + Ce, Ye = "dragstart" + Ce, Xe = "load" + Ce + we, Ze = "click" + Ce + we, Qe = ".active", $e = ".active.carousel-item", et = ".carousel-item", tt = ".carousel-item img", nt = ".carousel-item-next, .carousel-item-prev", I = ".carousel-indicators", rt = "[data-slide], [data-slide-to]", it = "[data-ride=\"carousel\"]", L = {
			interval: 5e3,
			keyboard: !0,
			slide: !1,
			pause: "hover",
			wrap: !0,
			touch: !0
		}, at = {
			interval: "(number|boolean)",
			keyboard: "boolean",
			slide: "(boolean|string)",
			pause: "(string|boolean)",
			wrap: "boolean",
			touch: "boolean"
		}, ot = {
			TOUCH: "touch",
			PEN: "pen"
		}, st = /* @__PURE__ */ function() {
			function e(e, t) {
				this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(I), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = !!(window.PointerEvent || window.MSPointerEvent), this._addEventListeners();
			}
			var t = e.prototype;
			return t.next = function() {
				this._isSliding || this._slide(Ie);
			}, t.nextWhenVisible = function() {
				var e = i.default(this._element);
				!document.hidden && e.is(":visible") && e.css("visibility") !== "hidden" && this.next();
			}, t.prev = function() {
				this._isSliding || this._slide(F);
			}, t.pause = function(e) {
				e || (this._isPaused = !0), this._element.querySelector(nt) && (v.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
			}, t.cycle = function(e) {
				e || (this._isPaused = !1), this._interval &&= (clearInterval(this._interval), null), this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
			}, t.to = function(e) {
				var t = this;
				this._activeElement = this._element.querySelector($e);
				var n = this._getItemIndex(this._activeElement);
				if (!(e > this._items.length - 1 || e < 0)) {
					if (this._isSliding) {
						i.default(this._element).one(Be, function() {
							return t.to(e);
						});
						return;
					}
					if (n === e) {
						this.pause(), this.cycle();
						return;
					}
					var r = e > n ? Ie : F;
					this._slide(r, this._items[e]);
				}
			}, t.dispose = function() {
				i.default(this._element).off(Ce), i.default.removeData(this._element, Se), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
			}, t._getConfig = function(e) {
				return e = c({}, L, e), v.typeCheckConfig(xe, e, at), e;
			}, t._handleSwipe = function() {
				var e = Math.abs(this.touchDeltaX);
				if (!(e <= Oe)) {
					var t = e / this.touchDeltaX;
					this.touchDeltaX = 0, t > 0 && this.prev(), t < 0 && this.next();
				}
			}, t._addEventListeners = function() {
				var e = this;
				this._config.keyboard && i.default(this._element).on(Ve, function(t) {
					return e._keydown(t);
				}), this._config.pause === "hover" && i.default(this._element).on(He, function(t) {
					return e.pause(t);
				}).on(Ue, function(t) {
					return e.cycle(t);
				}), this._config.touch && this._addTouchEventListeners();
			}, t._addTouchEventListeners = function() {
				var e = this;
				if (this._touchSupported) {
					var t = function(t) {
						e._pointerEvent && ot[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX);
					}, n = function(t) {
						e.touchDeltaX = t.originalEvent.touches && t.originalEvent.touches.length > 1 ? 0 : t.originalEvent.touches[0].clientX - e.touchStartX;
					}, r = function(t) {
						e._pointerEvent && ot[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), e._config.pause === "hover" && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) {
							return e.cycle(t);
						}, De + e._config.interval));
					};
					i.default(this._element.querySelectorAll(tt)).on(Ye, function(e) {
						return e.preventDefault();
					}), this._pointerEvent ? (i.default(this._element).on(qe, function(e) {
						return t(e);
					}), i.default(this._element).on(Je, function(e) {
						return r(e);
					}), this._element.classList.add(Fe)) : (i.default(this._element).on(We, function(e) {
						return t(e);
					}), i.default(this._element).on(Ge, function(e) {
						return n(e);
					}), i.default(this._element).on(Ke, function(e) {
						return r(e);
					}));
				}
			}, t._keydown = function(e) {
				if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
					case Ee:
						e.preventDefault(), this.prev();
						break;
					case N:
						e.preventDefault(), this.next();
						break;
				}
			}, t._getItemIndex = function(e) {
				return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(et)) : [], this._items.indexOf(e);
			}, t._getItemByDirection = function(e, t) {
				var n = e === Ie, r = e === F, i = this._getItemIndex(t), a = this._items.length - 1;
				if ((r && i === 0 || n && i === a) && !this._config.wrap) return t;
				var o = (i + (e === F ? -1 : 1)) % this._items.length;
				return o === -1 ? this._items[this._items.length - 1] : this._items[o];
			}, t._triggerSlideEvent = function(e, t) {
				var n = this._getItemIndex(e), r = this._getItemIndex(this._element.querySelector($e)), a = i.default.Event(ze, {
					relatedTarget: e,
					direction: t,
					from: r,
					to: n
				});
				return i.default(this._element).trigger(a), a;
			}, t._setActiveIndicatorElement = function(e) {
				if (this._indicatorsElement) {
					var t = [].slice.call(this._indicatorsElement.querySelectorAll(Qe));
					i.default(t).removeClass(Ae);
					var n = this._indicatorsElement.children[this._getItemIndex(e)];
					n && i.default(n).addClass(Ae);
				}
			}, t._updateInterval = function() {
				var e = this._activeElement || this._element.querySelector($e);
				if (e) {
					var t = parseInt(e.getAttribute("data-interval"), 10);
					t ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = t) : this._config.interval = this._config.defaultInterval || this._config.interval;
				}
			}, t._slide = function(e, t) {
				var n = this, r = this._element.querySelector($e), a = this._getItemIndex(r), o = t || r && this._getItemByDirection(e, r), s = this._getItemIndex(o), c = !!this._interval, l, u, d;
				if (e === Ie ? (l = Ne, u = P, d = Le) : (l = Me, u = Pe, d = Re), o && i.default(o).hasClass(Ae)) {
					this._isSliding = !1;
					return;
				}
				if (!this._triggerSlideEvent(o, d).isDefaultPrevented() && !(!r || !o)) {
					this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(o), this._activeElement = o;
					var f = i.default.Event(Be, {
						relatedTarget: o,
						direction: d,
						from: a,
						to: s
					});
					if (i.default(this._element).hasClass(je)) {
						i.default(o).addClass(u), v.reflow(o), i.default(r).addClass(l), i.default(o).addClass(l);
						var p = v.getTransitionDurationFromElement(r);
						i.default(r).one(v.TRANSITION_END, function() {
							i.default(o).removeClass(l + " " + u).addClass(Ae), i.default(r).removeClass(Ae + " " + u + " " + l), n._isSliding = !1, setTimeout(function() {
								return i.default(n._element).trigger(f);
							}, 0);
						}).emulateTransitionEnd(p);
					} else i.default(r).removeClass(Ae), i.default(o).addClass(Ae), this._isSliding = !1, i.default(this._element).trigger(f);
					c && this.cycle();
				}
			}, e._jQueryInterface = function(t) {
				return this.each(function() {
					var n = i.default(this).data(Se), r = c({}, L, i.default(this).data());
					typeof t == "object" && (r = c({}, r, t));
					var a = typeof t == "string" ? t : r.slide;
					if (n || (n = new e(this, r), i.default(this).data(Se, n)), typeof t == "number") n.to(t);
					else if (typeof a == "string") {
						if (n[a] === void 0) throw TypeError("No method named \"" + a + "\"");
						n[a]();
					} else r.interval && r.ride && (n.pause(), n.cycle());
				});
			}, e._dataApiClickHandler = function(t) {
				var n = v.getSelectorFromElement(this);
				if (n) {
					var r = i.default(n)[0];
					if (!(!r || !i.default(r).hasClass(ke))) {
						var a = c({}, i.default(r).data(), i.default(this).data()), o = this.getAttribute("data-slide-to");
						o && (a.interval = !1), e._jQueryInterface.call(i.default(r), a), o && i.default(r).data(Se).to(o), t.preventDefault();
					}
				}
			}, s(e, null, [{
				key: "VERSION",
				get: function() {
					return M;
				}
			}, {
				key: "Default",
				get: function() {
					return L;
				}
			}]), e;
		}();
		i.default(document).on(Ze, rt, st._dataApiClickHandler), i.default(window).on(Xe, function() {
			for (var e = [].slice.call(document.querySelectorAll(it)), t = 0, n = e.length; t < n; t++) {
				var r = i.default(e[t]);
				st._jQueryInterface.call(r, r.data());
			}
		}), i.default.fn[xe] = st._jQueryInterface, i.default.fn[xe].Constructor = st, i.default.fn[xe].noConflict = function() {
			return i.default.fn[xe] = Te, st._jQueryInterface;
		};
		var ct = "collapse", lt = "4.6.2", ut = "bs.collapse", dt = "." + ut, ft = ".data-api", pt = i.default.fn[ct], mt = "show", ht = "collapse", gt = "collapsing", _t = "collapsed", R = "width", z = "height", vt = "show" + dt, yt = "shown" + dt, bt = "hide" + dt, xt = "hidden" + dt, St = "click" + dt + ft, Ct = ".show, .collapsing", wt = "[data-toggle=\"collapse\"]", Tt = {
			toggle: !0,
			parent: ""
		}, B = {
			toggle: "boolean",
			parent: "(string|element)"
		}, Et = /* @__PURE__ */ function() {
			function e(e, t) {
				this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + e.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + e.id + "\"]")));
				for (var n = [].slice.call(document.querySelectorAll(wt)), r = 0, i = n.length; r < i; r++) {
					var a = n[r], o = v.getSelectorFromElement(a), s = [].slice.call(document.querySelectorAll(o)).filter(function(t) {
						return t === e;
					});
					o !== null && s.length > 0 && (this._selector = o, this._triggerArray.push(a));
				}
				this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
			}
			var t = e.prototype;
			return t.toggle = function() {
				i.default(this._element).hasClass(mt) ? this.hide() : this.show();
			}, t.show = function() {
				var t = this;
				if (!(this._isTransitioning || i.default(this._element).hasClass(mt))) {
					var n, r;
					if (this._parent && (n = [].slice.call(this._parent.querySelectorAll(Ct)).filter(function(e) {
						return typeof t._config.parent == "string" ? e.getAttribute("data-parent") === t._config.parent : e.classList.contains(ht);
					}), n.length === 0 && (n = null)), !(n && (r = i.default(n).not(this._selector).data(ut), r && r._isTransitioning))) {
						var a = i.default.Event(vt);
						if (i.default(this._element).trigger(a), !a.isDefaultPrevented()) {
							n && (e._jQueryInterface.call(i.default(n).not(this._selector), "hide"), r || i.default(n).data(ut, null));
							var o = this._getDimension();
							i.default(this._element).removeClass(ht).addClass(gt), this._element.style[o] = 0, this._triggerArray.length && i.default(this._triggerArray).removeClass(_t).attr("aria-expanded", !0), this.setTransitioning(!0);
							var s = function() {
								i.default(t._element).removeClass(gt).addClass(ht + " " + mt), t._element.style[o] = "", t.setTransitioning(!1), i.default(t._element).trigger(yt);
							}, c = "scroll" + (o[0].toUpperCase() + o.slice(1)), l = v.getTransitionDurationFromElement(this._element);
							i.default(this._element).one(v.TRANSITION_END, s).emulateTransitionEnd(l), this._element.style[o] = this._element[c] + "px";
						}
					}
				}
			}, t.hide = function() {
				var e = this;
				if (!(this._isTransitioning || !i.default(this._element).hasClass(mt))) {
					var t = i.default.Event(bt);
					if (i.default(this._element).trigger(t), !t.isDefaultPrevented()) {
						var n = this._getDimension();
						this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", v.reflow(this._element), i.default(this._element).addClass(gt).removeClass(ht + " " + mt);
						var r = this._triggerArray.length;
						if (r > 0) for (var a = 0; a < r; a++) {
							var o = this._triggerArray[a], s = v.getSelectorFromElement(o);
							s !== null && (i.default([].slice.call(document.querySelectorAll(s))).hasClass(mt) || i.default(o).addClass(_t).attr("aria-expanded", !1));
						}
						this.setTransitioning(!0);
						var c = function() {
							e.setTransitioning(!1), i.default(e._element).removeClass(gt).addClass(ht).trigger(xt);
						};
						this._element.style[n] = "";
						var l = v.getTransitionDurationFromElement(this._element);
						i.default(this._element).one(v.TRANSITION_END, c).emulateTransitionEnd(l);
					}
				}
			}, t.setTransitioning = function(e) {
				this._isTransitioning = e;
			}, t.dispose = function() {
				i.default.removeData(this._element, ut), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
			}, t._getConfig = function(e) {
				return e = c({}, Tt, e), e.toggle = !!e.toggle, v.typeCheckConfig(ct, e, B), e;
			}, t._getDimension = function() {
				return i.default(this._element).hasClass(R) ? R : z;
			}, t._getParent = function() {
				var t = this, n;
				v.isElement(this._config.parent) ? (n = this._config.parent, this._config.parent.jquery !== void 0 && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
				var r = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]", a = [].slice.call(n.querySelectorAll(r));
				return i.default(a).each(function(n, r) {
					t._addAriaAndCollapsedClass(e._getTargetFromElement(r), [r]);
				}), n;
			}, t._addAriaAndCollapsedClass = function(e, t) {
				var n = i.default(e).hasClass(mt);
				t.length && i.default(t).toggleClass(_t, !n).attr("aria-expanded", n);
			}, e._getTargetFromElement = function(e) {
				var t = v.getSelectorFromElement(e);
				return t ? document.querySelector(t) : null;
			}, e._jQueryInterface = function(t) {
				return this.each(function() {
					var n = i.default(this), r = n.data(ut), a = c({}, Tt, n.data(), typeof t == "object" && t ? t : {});
					if (!r && a.toggle && typeof t == "string" && /show|hide/.test(t) && (a.toggle = !1), r || (r = new e(this, a), n.data(ut, r)), typeof t == "string") {
						if (r[t] === void 0) throw TypeError("No method named \"" + t + "\"");
						r[t]();
					}
				});
			}, s(e, null, [{
				key: "VERSION",
				get: function() {
					return lt;
				}
			}, {
				key: "Default",
				get: function() {
					return Tt;
				}
			}]), e;
		}();
		i.default(document).on(St, wt, function(e) {
			e.currentTarget.tagName === "A" && e.preventDefault();
			var t = i.default(this), n = v.getSelectorFromElement(this), r = [].slice.call(document.querySelectorAll(n));
			i.default(r).each(function() {
				var e = i.default(this), n = e.data(ut) ? "toggle" : t.data();
				Et._jQueryInterface.call(e, n);
			});
		}), i.default.fn[ct] = Et._jQueryInterface, i.default.fn[ct].Constructor = Et, i.default.fn[ct].noConflict = function() {
			return i.default.fn[ct] = pt, Et._jQueryInterface;
		};
		var Dt = "dropdown", Ot = "4.6.2", kt = "bs.dropdown", At = "." + kt, jt = ".data-api", Mt = i.default.fn[Dt], Nt = 27, Pt = 32, Ft = 9, It = 38, Lt = 40, Rt = 3, zt = RegExp(It + "|" + Lt + "|" + Nt), Bt = "disabled", V = "show", Vt = "dropup", Ht = "dropright", Ut = "dropleft", Wt = "dropdown-menu-right", Gt = "position-static", Kt = "hide" + At, qt = "hidden" + At, Jt = "show" + At, Yt = "shown" + At, Xt = "click" + At, Zt = "click" + At + jt, Qt = "keydown" + At + jt, $t = "keyup" + At + jt, en = "[data-toggle=\"dropdown\"]", tn = ".dropdown form", nn = ".dropdown-menu", rn = ".navbar-nav", an = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", on = "top-start", sn = "top-end", cn = "bottom-start", ln = "bottom-end", un = "right-start", dn = "left-start", fn = {
			offset: 0,
			flip: !0,
			boundary: "scrollParent",
			reference: "toggle",
			display: "dynamic",
			popperConfig: null
		}, pn = {
			offset: "(number|string|function)",
			flip: "boolean",
			boundary: "(string|element)",
			reference: "(string|element)",
			display: "string",
			popperConfig: "(null|object)"
		}, mn = /* @__PURE__ */ function() {
			function e(e, t) {
				this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
			}
			var t = e.prototype;
			return t.toggle = function() {
				if (!(this._element.disabled || i.default(this._element).hasClass(Bt))) {
					var t = i.default(this._menu).hasClass(V);
					e._clearMenus(), !t && this.show(!0);
				}
			}, t.show = function(t) {
				if (t === void 0 && (t = !1), !(this._element.disabled || i.default(this._element).hasClass(Bt) || i.default(this._menu).hasClass(V))) {
					var n = { relatedTarget: this._element }, r = i.default.Event(Jt, n), o = e._getParentFromElement(this._element);
					if (i.default(o).trigger(r), !r.isDefaultPrevented()) {
						if (!this._inNavbar && t) {
							if (a.default === void 0) throw TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
							var s = this._element;
							this._config.reference === "parent" ? s = o : v.isElement(this._config.reference) && (s = this._config.reference, this._config.reference.jquery !== void 0 && (s = this._config.reference[0])), this._config.boundary !== "scrollParent" && i.default(o).addClass(Gt), this._popper = new a.default(s, this._menu, this._getPopperConfig());
						}
						"ontouchstart" in document.documentElement && i.default(o).closest(rn).length === 0 && i.default(document.body).children().on("mouseover", null, i.default.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), i.default(this._menu).toggleClass(V), i.default(o).toggleClass(V).trigger(i.default.Event(Yt, n));
					}
				}
			}, t.hide = function() {
				if (!(this._element.disabled || i.default(this._element).hasClass(Bt) || !i.default(this._menu).hasClass(V))) {
					var t = { relatedTarget: this._element }, n = i.default.Event(Kt, t), r = e._getParentFromElement(this._element);
					i.default(r).trigger(n), !n.isDefaultPrevented() && (this._popper && this._popper.destroy(), i.default(this._menu).toggleClass(V), i.default(r).toggleClass(V).trigger(i.default.Event(qt, t)));
				}
			}, t.dispose = function() {
				i.default.removeData(this._element, kt), i.default(this._element).off(At), this._element = null, this._menu = null, this._popper !== null && (this._popper.destroy(), this._popper = null);
			}, t.update = function() {
				this._inNavbar = this._detectNavbar(), this._popper !== null && this._popper.scheduleUpdate();
			}, t._addEventListeners = function() {
				var e = this;
				i.default(this._element).on(Xt, function(t) {
					t.preventDefault(), t.stopPropagation(), e.toggle();
				});
			}, t._getConfig = function(e) {
				return e = c({}, this.constructor.Default, i.default(this._element).data(), e), v.typeCheckConfig(Dt, e, this.constructor.DefaultType), e;
			}, t._getMenuElement = function() {
				if (!this._menu) {
					var t = e._getParentFromElement(this._element);
					t && (this._menu = t.querySelector(nn));
				}
				return this._menu;
			}, t._getPlacement = function() {
				var e = i.default(this._element.parentNode), t = cn;
				return e.hasClass(Vt) ? t = i.default(this._menu).hasClass(Wt) ? sn : on : e.hasClass(Ht) ? t = un : e.hasClass(Ut) ? t = dn : i.default(this._menu).hasClass(Wt) && (t = ln), t;
			}, t._detectNavbar = function() {
				return i.default(this._element).closest(".navbar").length > 0;
			}, t._getOffset = function() {
				var e = this, t = {};
				return typeof this._config.offset == "function" ? t.fn = function(t) {
					return t.offsets = c({}, t.offsets, e._config.offset(t.offsets, e._element)), t;
				} : t.offset = this._config.offset, t;
			}, t._getPopperConfig = function() {
				var e = {
					placement: this._getPlacement(),
					modifiers: {
						offset: this._getOffset(),
						flip: { enabled: this._config.flip },
						preventOverflow: { boundariesElement: this._config.boundary }
					}
				};
				return this._config.display === "static" && (e.modifiers.applyStyle = { enabled: !1 }), c({}, e, this._config.popperConfig);
			}, e._jQueryInterface = function(t) {
				return this.each(function() {
					var n = i.default(this).data(kt);
					if (n || (n = new e(this, typeof t == "object" ? t : null), i.default(this).data(kt, n)), typeof t == "string") {
						if (n[t] === void 0) throw TypeError("No method named \"" + t + "\"");
						n[t]();
					}
				});
			}, e._clearMenus = function(t) {
				if (!(t && (t.which === Rt || t.type === "keyup" && t.which !== Ft))) for (var n = [].slice.call(document.querySelectorAll(en)), r = 0, a = n.length; r < a; r++) {
					var o = e._getParentFromElement(n[r]), s = i.default(n[r]).data(kt), c = { relatedTarget: n[r] };
					if (t && t.type === "click" && (c.clickEvent = t), s) {
						var l = s._menu;
						if (i.default(o).hasClass(V) && !(t && (t.type === "click" && /input|textarea/i.test(t.target.tagName) || t.type === "keyup" && t.which === Ft) && i.default.contains(o, t.target))) {
							var u = i.default.Event(Kt, c);
							i.default(o).trigger(u), !u.isDefaultPrevented() && ("ontouchstart" in document.documentElement && i.default(document.body).children().off("mouseover", null, i.default.noop), n[r].setAttribute("aria-expanded", "false"), s._popper && s._popper.destroy(), i.default(l).removeClass(V), i.default(o).removeClass(V).trigger(i.default.Event(qt, c)));
						}
					}
				}
			}, e._getParentFromElement = function(e) {
				var t, n = v.getSelectorFromElement(e);
				return n && (t = document.querySelector(n)), t || e.parentNode;
			}, e._dataApiKeydownHandler = function(t) {
				if (!(/input|textarea/i.test(t.target.tagName) ? t.which === Pt || t.which !== Nt && (t.which !== Lt && t.which !== It || i.default(t.target).closest(nn).length) : !zt.test(t.which)) && !(this.disabled || i.default(this).hasClass(Bt))) {
					var n = e._getParentFromElement(this), r = i.default(n).hasClass(V);
					if (!(!r && t.which === Nt)) {
						if (t.preventDefault(), t.stopPropagation(), !r || t.which === Nt || t.which === Pt) {
							t.which === Nt && i.default(n.querySelector(en)).trigger("focus"), i.default(this).trigger("click");
							return;
						}
						var a = [].slice.call(n.querySelectorAll(an)).filter(function(e) {
							return i.default(e).is(":visible");
						});
						if (a.length !== 0) {
							var o = a.indexOf(t.target);
							t.which === It && o > 0 && o--, t.which === Lt && o < a.length - 1 && o++, o < 0 && (o = 0), a[o].focus();
						}
					}
				}
			}, s(e, null, [
				{
					key: "VERSION",
					get: function() {
						return Ot;
					}
				},
				{
					key: "Default",
					get: function() {
						return fn;
					}
				},
				{
					key: "DefaultType",
					get: function() {
						return pn;
					}
				}
			]), e;
		}();
		i.default(document).on(Qt, en, mn._dataApiKeydownHandler).on(Qt, nn, mn._dataApiKeydownHandler).on(Zt + " " + $t, mn._clearMenus).on(Zt, en, function(e) {
			e.preventDefault(), e.stopPropagation(), mn._jQueryInterface.call(i.default(this), "toggle");
		}).on(Zt, tn, function(e) {
			e.stopPropagation();
		}), i.default.fn[Dt] = mn._jQueryInterface, i.default.fn[Dt].Constructor = mn, i.default.fn[Dt].noConflict = function() {
			return i.default.fn[Dt] = Mt, mn._jQueryInterface;
		};
		var hn = "modal", gn = "4.6.2", _n = "bs.modal", vn = "." + _n, yn = ".data-api", bn = i.default.fn[hn], xn = 27, Sn = "modal-dialog-scrollable", Cn = "modal-scrollbar-measure", wn = "modal-backdrop", Tn = "modal-open", En = "fade", Dn = "show", On = "modal-static", kn = "hide" + vn, An = "hidePrevented" + vn, jn = "hidden" + vn, Mn = "show" + vn, Nn = "shown" + vn, Pn = "focusin" + vn, Fn = "resize" + vn, In = "click.dismiss" + vn, Ln = "keydown.dismiss" + vn, Rn = "mouseup.dismiss" + vn, H = "mousedown.dismiss" + vn, zn = "click" + vn + yn, U = ".modal-dialog", Bn = ".modal-body", Vn = "[data-toggle=\"modal\"]", Hn = "[data-dismiss=\"modal\"]", Un = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Wn = ".sticky-top", Gn = {
			backdrop: !0,
			keyboard: !0,
			focus: !0,
			show: !0
		}, Kn = {
			backdrop: "(boolean|string)",
			keyboard: "boolean",
			focus: "boolean",
			show: "boolean"
		}, qn = /* @__PURE__ */ function() {
			function e(e, t) {
				this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(U), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0;
			}
			var t = e.prototype;
			return t.toggle = function(e) {
				return this._isShown ? this.hide() : this.show(e);
			}, t.show = function(e) {
				var t = this;
				if (!(this._isShown || this._isTransitioning)) {
					var n = i.default.Event(Mn, { relatedTarget: e });
					i.default(this._element).trigger(n), !n.isDefaultPrevented() && (this._isShown = !0, i.default(this._element).hasClass(En) && (this._isTransitioning = !0), this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), i.default(this._element).on(In, Hn, function(e) {
						return t.hide(e);
					}), i.default(this._dialog).on(H, function() {
						i.default(t._element).one(Rn, function(e) {
							i.default(e.target).is(t._element) && (t._ignoreBackdropClick = !0);
						});
					}), this._showBackdrop(function() {
						return t._showElement(e);
					}));
				}
			}, t.hide = function(e) {
				var t = this;
				if (e && e.preventDefault(), !(!this._isShown || this._isTransitioning)) {
					var n = i.default.Event(kn);
					if (i.default(this._element).trigger(n), !(!this._isShown || n.isDefaultPrevented())) {
						this._isShown = !1;
						var r = i.default(this._element).hasClass(En);
						if (r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), i.default(document).off(Pn), i.default(this._element).removeClass(Dn), i.default(this._element).off(In), i.default(this._dialog).off(H), r) {
							var a = v.getTransitionDurationFromElement(this._element);
							i.default(this._element).one(v.TRANSITION_END, function(e) {
								return t._hideModal(e);
							}).emulateTransitionEnd(a);
						} else this._hideModal();
					}
				}
			}, t.dispose = function() {
				[
					window,
					this._element,
					this._dialog
				].forEach(function(e) {
					return i.default(e).off(vn);
				}), i.default(document).off(Pn), i.default.removeData(this._element, _n), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
			}, t.handleUpdate = function() {
				this._adjustDialog();
			}, t._getConfig = function(e) {
				return e = c({}, Gn, e), v.typeCheckConfig(hn, e, Kn), e;
			}, t._triggerBackdropTransition = function() {
				var e = this, t = i.default.Event(An);
				if (i.default(this._element).trigger(t), !t.isDefaultPrevented()) {
					var n = this._element.scrollHeight > document.documentElement.clientHeight;
					n || (this._element.style.overflowY = "hidden"), this._element.classList.add(On);
					var r = v.getTransitionDurationFromElement(this._dialog);
					i.default(this._element).off(v.TRANSITION_END), i.default(this._element).one(v.TRANSITION_END, function() {
						e._element.classList.remove(On), n || i.default(e._element).one(v.TRANSITION_END, function() {
							e._element.style.overflowY = "";
						}).emulateTransitionEnd(e._element, r);
					}).emulateTransitionEnd(r), this._element.focus();
				}
			}, t._showElement = function(e) {
				var t = this, n = i.default(this._element).hasClass(En), r = this._dialog ? this._dialog.querySelector(Bn) : null;
				(!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) && document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), i.default(this._dialog).hasClass(Sn) && r ? r.scrollTop = 0 : this._element.scrollTop = 0, n && v.reflow(this._element), i.default(this._element).addClass(Dn), this._config.focus && this._enforceFocus();
				var a = i.default.Event(Nn, { relatedTarget: e }), o = function() {
					t._config.focus && t._element.focus(), t._isTransitioning = !1, i.default(t._element).trigger(a);
				};
				if (n) {
					var s = v.getTransitionDurationFromElement(this._dialog);
					i.default(this._dialog).one(v.TRANSITION_END, o).emulateTransitionEnd(s);
				} else o();
			}, t._enforceFocus = function() {
				var e = this;
				i.default(document).off(Pn).on(Pn, function(t) {
					document !== t.target && e._element !== t.target && i.default(e._element).has(t.target).length === 0 && e._element.focus();
				});
			}, t._setEscapeEvent = function() {
				var e = this;
				this._isShown ? i.default(this._element).on(Ln, function(t) {
					e._config.keyboard && t.which === xn ? (t.preventDefault(), e.hide()) : !e._config.keyboard && t.which === xn && e._triggerBackdropTransition();
				}) : this._isShown || i.default(this._element).off(Ln);
			}, t._setResizeEvent = function() {
				var e = this;
				this._isShown ? i.default(window).on(Fn, function(t) {
					return e.handleUpdate(t);
				}) : i.default(window).off(Fn);
			}, t._hideModal = function() {
				var e = this;
				this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop(function() {
					i.default(document.body).removeClass(Tn), e._resetAdjustments(), e._resetScrollbar(), i.default(e._element).trigger(jn);
				});
			}, t._removeBackdrop = function() {
				this._backdrop &&= (i.default(this._backdrop).remove(), null);
			}, t._showBackdrop = function(e) {
				var t = this, n = i.default(this._element).hasClass(En) ? En : "";
				if (this._isShown && this._config.backdrop) {
					if (this._backdrop = document.createElement("div"), this._backdrop.className = wn, n && this._backdrop.classList.add(n), i.default(this._backdrop).appendTo(document.body), i.default(this._element).on(In, function(e) {
						if (t._ignoreBackdropClick) {
							t._ignoreBackdropClick = !1;
							return;
						}
						e.target === e.currentTarget && (t._config.backdrop === "static" ? t._triggerBackdropTransition() : t.hide());
					}), n && v.reflow(this._backdrop), i.default(this._backdrop).addClass(Dn), !e) return;
					if (!n) {
						e();
						return;
					}
					var r = v.getTransitionDurationFromElement(this._backdrop);
					i.default(this._backdrop).one(v.TRANSITION_END, e).emulateTransitionEnd(r);
				} else if (!this._isShown && this._backdrop) {
					i.default(this._backdrop).removeClass(Dn);
					var a = function() {
						t._removeBackdrop(), e && e();
					};
					if (i.default(this._element).hasClass(En)) {
						var o = v.getTransitionDurationFromElement(this._backdrop);
						i.default(this._backdrop).one(v.TRANSITION_END, a).emulateTransitionEnd(o);
					} else a();
				} else e && e();
			}, t._adjustDialog = function() {
				var e = this._element.scrollHeight > document.documentElement.clientHeight;
				!this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px");
			}, t._resetAdjustments = function() {
				this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
			}, t._checkScrollbar = function() {
				var e = document.body.getBoundingClientRect();
				this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
			}, t._setScrollbar = function() {
				var e = this;
				if (this._isBodyOverflowing) {
					var t = [].slice.call(document.querySelectorAll(Un)), n = [].slice.call(document.querySelectorAll(Wn));
					i.default(t).each(function(t, n) {
						var r = n.style.paddingRight, a = i.default(n).css("padding-right");
						i.default(n).data("padding-right", r).css("padding-right", parseFloat(a) + e._scrollbarWidth + "px");
					}), i.default(n).each(function(t, n) {
						var r = n.style.marginRight, a = i.default(n).css("margin-right");
						i.default(n).data("margin-right", r).css("margin-right", parseFloat(a) - e._scrollbarWidth + "px");
					});
					var r = document.body.style.paddingRight, a = i.default(document.body).css("padding-right");
					i.default(document.body).data("padding-right", r).css("padding-right", parseFloat(a) + this._scrollbarWidth + "px");
				}
				i.default(document.body).addClass(Tn);
			}, t._resetScrollbar = function() {
				var e = [].slice.call(document.querySelectorAll(Un));
				i.default(e).each(function(e, t) {
					var n = i.default(t).data("padding-right");
					i.default(t).removeData("padding-right"), t.style.paddingRight = n || "";
				});
				var t = [].slice.call(document.querySelectorAll("" + Wn));
				i.default(t).each(function(e, t) {
					var n = i.default(t).data("margin-right");
					n !== void 0 && i.default(t).css("margin-right", n).removeData("margin-right");
				});
				var n = i.default(document.body).data("padding-right");
				i.default(document.body).removeData("padding-right"), document.body.style.paddingRight = n || "";
			}, t._getScrollbarWidth = function() {
				var e = document.createElement("div");
				e.className = Cn, document.body.appendChild(e);
				var t = e.getBoundingClientRect().width - e.clientWidth;
				return document.body.removeChild(e), t;
			}, e._jQueryInterface = function(t, n) {
				return this.each(function() {
					var r = i.default(this).data(_n), a = c({}, Gn, i.default(this).data(), typeof t == "object" && t ? t : {});
					if (r || (r = new e(this, a), i.default(this).data(_n, r)), typeof t == "string") {
						if (r[t] === void 0) throw TypeError("No method named \"" + t + "\"");
						r[t](n);
					} else a.show && r.show(n);
				});
			}, s(e, null, [{
				key: "VERSION",
				get: function() {
					return gn;
				}
			}, {
				key: "Default",
				get: function() {
					return Gn;
				}
			}]), e;
		}();
		i.default(document).on(zn, Vn, function(e) {
			var t = this, n, r = v.getSelectorFromElement(this);
			r && (n = document.querySelector(r));
			var a = i.default(n).data(_n) ? "toggle" : c({}, i.default(n).data(), i.default(this).data());
			(this.tagName === "A" || this.tagName === "AREA") && e.preventDefault();
			var o = i.default(n).one(Mn, function(e) {
				e.isDefaultPrevented() || o.one(jn, function() {
					i.default(t).is(":visible") && t.focus();
				});
			});
			qn._jQueryInterface.call(i.default(n), a, this);
		}), i.default.fn[hn] = qn._jQueryInterface, i.default.fn[hn].Constructor = qn, i.default.fn[hn].noConflict = function() {
			return i.default.fn[hn] = bn, qn._jQueryInterface;
		};
		var Jn = [
			"background",
			"cite",
			"href",
			"itemtype",
			"longdesc",
			"poster",
			"src",
			"xlink:href"
		], Yn = {
			"*": [
				"class",
				"dir",
				"id",
				"lang",
				"role",
				/^aria-[\w-]*$/i
			],
			a: [
				"target",
				"href",
				"title",
				"rel"
			],
			area: [],
			b: [],
			br: [],
			col: [],
			code: [],
			div: [],
			em: [],
			hr: [],
			h1: [],
			h2: [],
			h3: [],
			h4: [],
			h5: [],
			h6: [],
			i: [],
			img: [
				"src",
				"srcset",
				"alt",
				"title",
				"width",
				"height"
			],
			li: [],
			ol: [],
			p: [],
			pre: [],
			s: [],
			small: [],
			span: [],
			sub: [],
			sup: [],
			strong: [],
			u: [],
			ul: []
		}, Xn = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, Zn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
		function Qn(e, t) {
			var n = e.nodeName.toLowerCase();
			if (t.indexOf(n) !== -1) return Jn.indexOf(n) === -1 ? !0 : !!(Xn.test(e.nodeValue) || Zn.test(e.nodeValue));
			for (var r = t.filter(function(e) {
				return e instanceof RegExp;
			}), i = 0, a = r.length; i < a; i++) if (r[i].test(n)) return !0;
			return !1;
		}
		function $n(e, t, n) {
			if (e.length === 0) return e;
			if (n && typeof n == "function") return n(e);
			for (var r = new window.DOMParser().parseFromString(e, "text/html"), i = Object.keys(t), a = [].slice.call(r.body.querySelectorAll("*")), o = function(e, n) {
				var r = a[e], o = r.nodeName.toLowerCase();
				if (i.indexOf(r.nodeName.toLowerCase()) === -1) return r.parentNode.removeChild(r), "continue";
				var s = [].slice.call(r.attributes), c = [].concat(t["*"] || [], t[o] || []);
				s.forEach(function(e) {
					Qn(e, c) || r.removeAttribute(e.nodeName);
				});
			}, s = 0, c = a.length; s < c; s++) if (o(s) === "continue") continue;
			return r.body.innerHTML;
		}
		var er = "tooltip", tr = "4.6.2", nr = "bs.tooltip", rr = "." + nr, ir = i.default.fn[er], ar = "bs-tooltip", or = RegExp("(^|\\s)" + ar + "\\S+", "g"), sr = [
			"sanitize",
			"whiteList",
			"sanitizeFn"
		], cr = "fade", lr = "show", ur = "show", dr = "out", fr = ".tooltip-inner", pr = ".arrow", mr = "hover", hr = "focus", gr = "click", _r = "manual", vr = {
			AUTO: "auto",
			TOP: "top",
			RIGHT: "right",
			BOTTOM: "bottom",
			LEFT: "left"
		}, yr = {
			animation: !0,
			template: "<div class=\"tooltip\" role=\"tooltip\"><div class=\"arrow\"></div><div class=\"tooltip-inner\"></div></div>",
			trigger: "hover focus",
			title: "",
			delay: 0,
			html: !1,
			selector: !1,
			placement: "top",
			offset: 0,
			container: !1,
			fallbackPlacement: "flip",
			boundary: "scrollParent",
			customClass: "",
			sanitize: !0,
			sanitizeFn: null,
			whiteList: Yn,
			popperConfig: null
		}, br = {
			animation: "boolean",
			template: "string",
			title: "(string|element|function)",
			trigger: "string",
			delay: "(number|object)",
			html: "boolean",
			selector: "(string|boolean)",
			placement: "(string|function)",
			offset: "(number|string|function)",
			container: "(string|element|boolean)",
			fallbackPlacement: "(string|array)",
			boundary: "(string|element)",
			customClass: "(string|function)",
			sanitize: "boolean",
			sanitizeFn: "(null|function)",
			whiteList: "object",
			popperConfig: "(null|object)"
		}, xr = {
			HIDE: "hide" + rr,
			HIDDEN: "hidden" + rr,
			SHOW: "show" + rr,
			SHOWN: "shown" + rr,
			INSERTED: "inserted" + rr,
			CLICK: "click" + rr,
			FOCUSIN: "focusin" + rr,
			FOCUSOUT: "focusout" + rr,
			MOUSEENTER: "mouseenter" + rr,
			MOUSELEAVE: "mouseleave" + rr
		}, Sr = /* @__PURE__ */ function() {
			function e(e, t) {
				if (a.default === void 0) throw TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
				this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners();
			}
			var t = e.prototype;
			return t.enable = function() {
				this._isEnabled = !0;
			}, t.disable = function() {
				this._isEnabled = !1;
			}, t.toggleEnabled = function() {
				this._isEnabled = !this._isEnabled;
			}, t.toggle = function(e) {
				if (this._isEnabled) if (e) {
					var t = this.constructor.DATA_KEY, n = i.default(e.currentTarget).data(t);
					n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), i.default(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
				} else {
					if (i.default(this.getTipElement()).hasClass(lr)) {
						this._leave(null, this);
						return;
					}
					this._enter(null, this);
				}
			}, t.dispose = function() {
				clearTimeout(this._timeout), i.default.removeData(this.element, this.constructor.DATA_KEY), i.default(this.element).off(this.constructor.EVENT_KEY), i.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && i.default(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
			}, t.show = function() {
				var e = this;
				if (i.default(this.element).css("display") === "none") throw Error("Please use show on visible elements");
				var t = i.default.Event(this.constructor.Event.SHOW);
				if (this.isWithContent() && this._isEnabled) {
					i.default(this.element).trigger(t);
					var n = v.findShadowRoot(this.element), r = i.default.contains(n === null ? this.element.ownerDocument.documentElement : n, this.element);
					if (t.isDefaultPrevented() || !r) return;
					var o = this.getTipElement(), s = v.getUID(this.constructor.NAME);
					o.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && i.default(o).addClass(cr);
					var c = typeof this.config.placement == "function" ? this.config.placement.call(this, o, this.element) : this.config.placement, l = this._getAttachment(c);
					this.addAttachmentClass(l);
					var u = this._getContainer();
					i.default(o).data(this.constructor.DATA_KEY, this), i.default.contains(this.element.ownerDocument.documentElement, this.tip) || i.default(o).appendTo(u), i.default(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new a.default(this.element, o, this._getPopperConfig(l)), i.default(o).addClass(lr), i.default(o).addClass(this.config.customClass), "ontouchstart" in document.documentElement && i.default(document.body).children().on("mouseover", null, i.default.noop);
					var d = function() {
						e.config.animation && e._fixTransition();
						var t = e._hoverState;
						e._hoverState = null, i.default(e.element).trigger(e.constructor.Event.SHOWN), t === dr && e._leave(null, e);
					};
					if (i.default(this.tip).hasClass(cr)) {
						var f = v.getTransitionDurationFromElement(this.tip);
						i.default(this.tip).one(v.TRANSITION_END, d).emulateTransitionEnd(f);
					} else d();
				}
			}, t.hide = function(e) {
				var t = this, n = this.getTipElement(), r = i.default.Event(this.constructor.Event.HIDE), a = function() {
					t._hoverState !== ur && n.parentNode && n.parentNode.removeChild(n), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), i.default(t.element).trigger(t.constructor.Event.HIDDEN), t._popper !== null && t._popper.destroy(), e && e();
				};
				if (i.default(this.element).trigger(r), !r.isDefaultPrevented()) {
					if (i.default(n).removeClass(lr), "ontouchstart" in document.documentElement && i.default(document.body).children().off("mouseover", null, i.default.noop), this._activeTrigger[gr] = !1, this._activeTrigger[hr] = !1, this._activeTrigger[mr] = !1, i.default(this.tip).hasClass(cr)) {
						var o = v.getTransitionDurationFromElement(n);
						i.default(n).one(v.TRANSITION_END, a).emulateTransitionEnd(o);
					} else a();
					this._hoverState = "";
				}
			}, t.update = function() {
				this._popper !== null && this._popper.scheduleUpdate();
			}, t.isWithContent = function() {
				return !!this.getTitle();
			}, t.addAttachmentClass = function(e) {
				i.default(this.getTipElement()).addClass(ar + "-" + e);
			}, t.getTipElement = function() {
				return this.tip = this.tip || i.default(this.config.template)[0], this.tip;
			}, t.setContent = function() {
				var e = this.getTipElement();
				this.setElementContent(i.default(e.querySelectorAll(fr)), this.getTitle()), i.default(e).removeClass(cr + " " + lr);
			}, t.setElementContent = function(e, t) {
				if (typeof t == "object" && (t.nodeType || t.jquery)) {
					this.config.html ? i.default(t).parent().is(e) || e.empty().append(t) : e.text(i.default(t).text());
					return;
				}
				this.config.html ? (this.config.sanitize && (t = $n(t, this.config.whiteList, this.config.sanitizeFn)), e.html(t)) : e.text(t);
			}, t.getTitle = function() {
				var e = this.element.getAttribute("data-original-title");
				return e ||= typeof this.config.title == "function" ? this.config.title.call(this.element) : this.config.title, e;
			}, t._getPopperConfig = function(e) {
				var t = this, n = {
					placement: e,
					modifiers: {
						offset: this._getOffset(),
						flip: { behavior: this.config.fallbackPlacement },
						arrow: { element: pr },
						preventOverflow: { boundariesElement: this.config.boundary }
					},
					onCreate: function(e) {
						e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e);
					},
					onUpdate: function(e) {
						return t._handlePopperPlacementChange(e);
					}
				};
				return c({}, n, this.config.popperConfig);
			}, t._getOffset = function() {
				var e = this, t = {};
				return typeof this.config.offset == "function" ? t.fn = function(t) {
					return t.offsets = c({}, t.offsets, e.config.offset(t.offsets, e.element)), t;
				} : t.offset = this.config.offset, t;
			}, t._getContainer = function() {
				return this.config.container === !1 ? document.body : v.isElement(this.config.container) ? i.default(this.config.container) : i.default(document).find(this.config.container);
			}, t._getAttachment = function(e) {
				return vr[e.toUpperCase()];
			}, t._setListeners = function() {
				var e = this;
				this.config.trigger.split(" ").forEach(function(t) {
					if (t === "click") i.default(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
						return e.toggle(t);
					});
					else if (t !== _r) {
						var n = t === mr ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN, r = t === mr ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
						i.default(e.element).on(n, e.config.selector, function(t) {
							return e._enter(t);
						}).on(r, e.config.selector, function(t) {
							return e._leave(t);
						});
					}
				}), this._hideModalHandler = function() {
					e.element && e.hide();
				}, i.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = c({}, this.config, {
					trigger: "manual",
					selector: ""
				}) : this._fixTitle();
			}, t._fixTitle = function() {
				var e = typeof this.element.getAttribute("data-original-title");
				(this.element.getAttribute("title") || e !== "string") && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
			}, t._enter = function(e, t) {
				var n = this.constructor.DATA_KEY;
				if (t ||= i.default(e.currentTarget).data(n), t || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), i.default(e.currentTarget).data(n, t)), e && (t._activeTrigger[e.type === "focusin" ? hr : mr] = !0), i.default(t.getTipElement()).hasClass(lr) || t._hoverState === ur) {
					t._hoverState = ur;
					return;
				}
				if (clearTimeout(t._timeout), t._hoverState = ur, !t.config.delay || !t.config.delay.show) {
					t.show();
					return;
				}
				t._timeout = setTimeout(function() {
					t._hoverState === ur && t.show();
				}, t.config.delay.show);
			}, t._leave = function(e, t) {
				var n = this.constructor.DATA_KEY;
				if (t ||= i.default(e.currentTarget).data(n), t || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), i.default(e.currentTarget).data(n, t)), e && (t._activeTrigger[e.type === "focusout" ? hr : mr] = !1), !t._isWithActiveTrigger()) {
					if (clearTimeout(t._timeout), t._hoverState = dr, !t.config.delay || !t.config.delay.hide) {
						t.hide();
						return;
					}
					t._timeout = setTimeout(function() {
						t._hoverState === dr && t.hide();
					}, t.config.delay.hide);
				}
			}, t._isWithActiveTrigger = function() {
				for (var e in this._activeTrigger) if (this._activeTrigger[e]) return !0;
				return !1;
			}, t._getConfig = function(e) {
				var t = i.default(this.element).data();
				return Object.keys(t).forEach(function(e) {
					sr.indexOf(e) !== -1 && delete t[e];
				}), e = c({}, this.constructor.Default, t, typeof e == "object" && e ? e : {}), typeof e.delay == "number" && (e.delay = {
					show: e.delay,
					hide: e.delay
				}), typeof e.title == "number" && (e.title = e.title.toString()), typeof e.content == "number" && (e.content = e.content.toString()), v.typeCheckConfig(er, e, this.constructor.DefaultType), e.sanitize && (e.template = $n(e.template, e.whiteList, e.sanitizeFn)), e;
			}, t._getDelegateConfig = function() {
				var e = {};
				if (this.config) for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
				return e;
			}, t._cleanTipClass = function() {
				var e = i.default(this.getTipElement()), t = e.attr("class").match(or);
				t !== null && t.length && e.removeClass(t.join(""));
			}, t._handlePopperPlacementChange = function(e) {
				this.tip = e.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement));
			}, t._fixTransition = function() {
				var e = this.getTipElement(), t = this.config.animation;
				e.getAttribute("x-placement") === null && (i.default(e).removeClass(cr), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t);
			}, e._jQueryInterface = function(t) {
				return this.each(function() {
					var n = i.default(this), r = n.data(nr), a = typeof t == "object" && t;
					if (!(!r && /dispose|hide/.test(t)) && (r || (r = new e(this, a), n.data(nr, r)), typeof t == "string")) {
						if (r[t] === void 0) throw TypeError("No method named \"" + t + "\"");
						r[t]();
					}
				});
			}, s(e, null, [
				{
					key: "VERSION",
					get: function() {
						return tr;
					}
				},
				{
					key: "Default",
					get: function() {
						return yr;
					}
				},
				{
					key: "NAME",
					get: function() {
						return er;
					}
				},
				{
					key: "DATA_KEY",
					get: function() {
						return nr;
					}
				},
				{
					key: "Event",
					get: function() {
						return xr;
					}
				},
				{
					key: "EVENT_KEY",
					get: function() {
						return rr;
					}
				},
				{
					key: "DefaultType",
					get: function() {
						return br;
					}
				}
			]), e;
		}();
		i.default.fn[er] = Sr._jQueryInterface, i.default.fn[er].Constructor = Sr, i.default.fn[er].noConflict = function() {
			return i.default.fn[er] = ir, Sr._jQueryInterface;
		};
		var Cr = "popover", wr = "4.6.2", Tr = "bs.popover", Er = "." + Tr, Dr = i.default.fn[Cr], Or = "bs-popover", kr = RegExp("(^|\\s)" + Or + "\\S+", "g"), Ar = "fade", jr = "show", Mr = ".popover-header", Nr = ".popover-body", W = c({}, Sr.Default, {
			placement: "right",
			trigger: "click",
			content: "",
			template: "<div class=\"popover\" role=\"tooltip\"><div class=\"arrow\"></div><h3 class=\"popover-header\"></h3><div class=\"popover-body\"></div></div>"
		}), Pr = c({}, Sr.DefaultType, { content: "(string|element|function)" }), Fr = {
			HIDE: "hide" + Er,
			HIDDEN: "hidden" + Er,
			SHOW: "show" + Er,
			SHOWN: "shown" + Er,
			INSERTED: "inserted" + Er,
			CLICK: "click" + Er,
			FOCUSIN: "focusin" + Er,
			FOCUSOUT: "focusout" + Er,
			MOUSEENTER: "mouseenter" + Er,
			MOUSELEAVE: "mouseleave" + Er
		}, Ir = /* @__PURE__ */ function(e) {
			l(t, e);
			function t() {
				return e.apply(this, arguments) || this;
			}
			var n = t.prototype;
			return n.isWithContent = function() {
				return this.getTitle() || this._getContent();
			}, n.addAttachmentClass = function(e) {
				i.default(this.getTipElement()).addClass(Or + "-" + e);
			}, n.getTipElement = function() {
				return this.tip = this.tip || i.default(this.config.template)[0], this.tip;
			}, n.setContent = function() {
				var e = i.default(this.getTipElement());
				this.setElementContent(e.find(Mr), this.getTitle());
				var t = this._getContent();
				typeof t == "function" && (t = t.call(this.element)), this.setElementContent(e.find(Nr), t), e.removeClass(Ar + " " + jr);
			}, n._getContent = function() {
				return this.element.getAttribute("data-content") || this.config.content;
			}, n._cleanTipClass = function() {
				var e = i.default(this.getTipElement()), t = e.attr("class").match(kr);
				t !== null && t.length > 0 && e.removeClass(t.join(""));
			}, t._jQueryInterface = function(e) {
				return this.each(function() {
					var n = i.default(this).data(Tr), r = typeof e == "object" ? e : null;
					if (!(!n && /dispose|hide/.test(e)) && (n || (n = new t(this, r), i.default(this).data(Tr, n)), typeof e == "string")) {
						if (n[e] === void 0) throw TypeError("No method named \"" + e + "\"");
						n[e]();
					}
				});
			}, s(t, null, [
				{
					key: "VERSION",
					get: function() {
						return wr;
					}
				},
				{
					key: "Default",
					get: function() {
						return W;
					}
				},
				{
					key: "NAME",
					get: function() {
						return Cr;
					}
				},
				{
					key: "DATA_KEY",
					get: function() {
						return Tr;
					}
				},
				{
					key: "Event",
					get: function() {
						return Fr;
					}
				},
				{
					key: "EVENT_KEY",
					get: function() {
						return Er;
					}
				},
				{
					key: "DefaultType",
					get: function() {
						return Pr;
					}
				}
			]), t;
		}(Sr);
		i.default.fn[Cr] = Ir._jQueryInterface, i.default.fn[Cr].Constructor = Ir, i.default.fn[Cr].noConflict = function() {
			return i.default.fn[Cr] = Dr, Ir._jQueryInterface;
		};
		var G = "scrollspy", Lr = "4.6.2", Rr = "bs.scrollspy", zr = "." + Rr, Br = ".data-api", Vr = i.default.fn[G], Hr = "dropdown-item", Ur = "active", Wr = "activate" + zr, Gr = "scroll" + zr, Kr = "load" + zr + Br, qr = "offset", Jr = "position", Yr = "[data-spy=\"scroll\"]", Xr = ".nav, .list-group", Zr = ".nav-link", Qr = ".nav-item", $r = ".list-group-item", ei = ".dropdown", ti = ".dropdown-item", ni = ".dropdown-toggle", ri = {
			offset: 10,
			method: "auto",
			target: ""
		}, ii = {
			offset: "number",
			method: "string",
			target: "(string|element)"
		}, ai = /* @__PURE__ */ function() {
			function e(e, t) {
				var n = this;
				this._element = e, this._scrollElement = e.tagName === "BODY" ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + Zr + "," + (this._config.target + " " + $r + ",") + (this._config.target + " " + ti), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, i.default(this._scrollElement).on(Gr, function(e) {
					return n._process(e);
				}), this.refresh(), this._process();
			}
			var t = e.prototype;
			return t.refresh = function() {
				var e = this, t = this._scrollElement === this._scrollElement.window ? qr : Jr, n = this._config.method === "auto" ? t : this._config.method, r = n === Jr ? this._getScrollTop() : 0;
				this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
					var t, a = v.getSelectorFromElement(e);
					if (a && (t = document.querySelector(a)), t) {
						var o = t.getBoundingClientRect();
						if (o.width || o.height) return [i.default(t)[n]().top + r, a];
					}
					return null;
				}).filter(Boolean).sort(function(e, t) {
					return e[0] - t[0];
				}).forEach(function(t) {
					e._offsets.push(t[0]), e._targets.push(t[1]);
				});
			}, t.dispose = function() {
				i.default.removeData(this._element, Rr), i.default(this._scrollElement).off(zr), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
			}, t._getConfig = function(e) {
				if (e = c({}, ri, typeof e == "object" && e ? e : {}), typeof e.target != "string" && v.isElement(e.target)) {
					var t = i.default(e.target).attr("id");
					t || (t = v.getUID(G), i.default(e.target).attr("id", t)), e.target = "#" + t;
				}
				return v.typeCheckConfig(G, e, ii), e;
			}, t._getScrollTop = function() {
				return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
			}, t._getScrollHeight = function() {
				return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
			}, t._getOffsetHeight = function() {
				return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
			}, t._process = function() {
				var e = this._getScrollTop() + this._config.offset, t = this._getScrollHeight(), n = this._config.offset + t - this._getOffsetHeight();
				if (this._scrollHeight !== t && this.refresh(), e >= n) {
					var r = this._targets[this._targets.length - 1];
					this._activeTarget !== r && this._activate(r);
					return;
				}
				if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) {
					this._activeTarget = null, this._clear();
					return;
				}
				for (var i = this._offsets.length; i--;) this._activeTarget !== this._targets[i] && e >= this._offsets[i] && (this._offsets[i + 1] === void 0 || e < this._offsets[i + 1]) && this._activate(this._targets[i]);
			}, t._activate = function(e) {
				this._activeTarget = e, this._clear();
				var t = this._selector.split(",").map(function(t) {
					return t + "[data-target=\"" + e + "\"]," + t + "[href=\"" + e + "\"]";
				}), n = i.default([].slice.call(document.querySelectorAll(t.join(","))));
				n.hasClass(Hr) ? (n.closest(ei).find(ni).addClass(Ur), n.addClass(Ur)) : (n.addClass(Ur), n.parents(Xr).prev(Zr + ", " + $r).addClass(Ur), n.parents(Xr).prev(Qr).children(Zr).addClass(Ur)), i.default(this._scrollElement).trigger(Wr, { relatedTarget: e });
			}, t._clear = function() {
				[].slice.call(document.querySelectorAll(this._selector)).filter(function(e) {
					return e.classList.contains(Ur);
				}).forEach(function(e) {
					return e.classList.remove(Ur);
				});
			}, e._jQueryInterface = function(t) {
				return this.each(function() {
					var n = i.default(this).data(Rr);
					if (n || (n = new e(this, typeof t == "object" && t), i.default(this).data(Rr, n)), typeof t == "string") {
						if (n[t] === void 0) throw TypeError("No method named \"" + t + "\"");
						n[t]();
					}
				});
			}, s(e, null, [{
				key: "VERSION",
				get: function() {
					return Lr;
				}
			}, {
				key: "Default",
				get: function() {
					return ri;
				}
			}]), e;
		}();
		i.default(window).on(Kr, function() {
			for (var e = [].slice.call(document.querySelectorAll(Yr)), t = e.length; t--;) {
				var n = i.default(e[t]);
				ai._jQueryInterface.call(n, n.data());
			}
		}), i.default.fn[G] = ai._jQueryInterface, i.default.fn[G].Constructor = ai, i.default.fn[G].noConflict = function() {
			return i.default.fn[G] = Vr, ai._jQueryInterface;
		};
		var oi = "tab", si = "4.6.2", ci = "bs.tab", li = "." + ci, ui = ".data-api", di = i.default.fn[oi], fi = "dropdown-menu", pi = "active", mi = "disabled", hi = "fade", gi = "show", _i = "hide" + li, vi = "hidden" + li, yi = "show" + li, bi = "shown" + li, xi = "click" + li + ui, Si = ".dropdown", Ci = ".nav, .list-group", wi = ".active", Ti = "> li > .active", Ei = "[data-toggle=\"tab\"], [data-toggle=\"pill\"], [data-toggle=\"list\"]", Di = ".dropdown-toggle", Oi = "> .dropdown-menu .active", ki = /* @__PURE__ */ function() {
			function e(e) {
				this._element = e;
			}
			var t = e.prototype;
			return t.show = function() {
				var e = this;
				if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && i.default(this._element).hasClass(pi) || i.default(this._element).hasClass(mi) || this._element.hasAttribute("disabled"))) {
					var t, n, r = i.default(this._element).closest(Ci)[0], a = v.getSelectorFromElement(this._element);
					if (r) {
						var o = r.nodeName === "UL" || r.nodeName === "OL" ? Ti : wi;
						n = i.default.makeArray(i.default(r).find(o)), n = n[n.length - 1];
					}
					var s = i.default.Event(_i, { relatedTarget: this._element }), c = i.default.Event(yi, { relatedTarget: n });
					if (n && i.default(n).trigger(s), i.default(this._element).trigger(c), !(c.isDefaultPrevented() || s.isDefaultPrevented())) {
						a && (t = document.querySelector(a)), this._activate(this._element, r);
						var l = function() {
							var t = i.default.Event(vi, { relatedTarget: e._element }), r = i.default.Event(bi, { relatedTarget: n });
							i.default(n).trigger(t), i.default(e._element).trigger(r);
						};
						t ? this._activate(t, t.parentNode, l) : l();
					}
				}
			}, t.dispose = function() {
				i.default.removeData(this._element, ci), this._element = null;
			}, t._activate = function(e, t, n) {
				var r = this, a = (t && (t.nodeName === "UL" || t.nodeName === "OL") ? i.default(t).find(Ti) : i.default(t).children(wi))[0], o = n && a && i.default(a).hasClass(hi), s = function() {
					return r._transitionComplete(e, a, n);
				};
				if (a && o) {
					var c = v.getTransitionDurationFromElement(a);
					i.default(a).removeClass(gi).one(v.TRANSITION_END, s).emulateTransitionEnd(c);
				} else s();
			}, t._transitionComplete = function(e, t, n) {
				if (t) {
					i.default(t).removeClass(pi);
					var r = i.default(t.parentNode).find(Oi)[0];
					r && i.default(r).removeClass(pi), t.getAttribute("role") === "tab" && t.setAttribute("aria-selected", !1);
				}
				i.default(e).addClass(pi), e.getAttribute("role") === "tab" && e.setAttribute("aria-selected", !0), v.reflow(e), e.classList.contains(hi) && e.classList.add(gi);
				var a = e.parentNode;
				if (a && a.nodeName === "LI" && (a = a.parentNode), a && i.default(a).hasClass(fi)) {
					var o = i.default(e).closest(Si)[0];
					if (o) {
						var s = [].slice.call(o.querySelectorAll(Di));
						i.default(s).addClass(pi);
					}
					e.setAttribute("aria-expanded", !0);
				}
				n && n();
			}, e._jQueryInterface = function(t) {
				return this.each(function() {
					var n = i.default(this), r = n.data(ci);
					if (r || (r = new e(this), n.data(ci, r)), typeof t == "string") {
						if (r[t] === void 0) throw TypeError("No method named \"" + t + "\"");
						r[t]();
					}
				});
			}, s(e, null, [{
				key: "VERSION",
				get: function() {
					return si;
				}
			}]), e;
		}();
		i.default(document).on(xi, Ei, function(e) {
			e.preventDefault(), ki._jQueryInterface.call(i.default(this), "show");
		}), i.default.fn[oi] = ki._jQueryInterface, i.default.fn[oi].Constructor = ki, i.default.fn[oi].noConflict = function() {
			return i.default.fn[oi] = di, ki._jQueryInterface;
		};
		var Ai = "toast", ji = "4.6.2", Mi = "bs.toast", Ni = "." + Mi, Pi = i.default.fn[Ai], Fi = "fade", Ii = "hide", Li = "show", Ri = "showing", zi = "click.dismiss" + Ni, Bi = "hide" + Ni, Vi = "hidden" + Ni, Hi = "show" + Ni, K = "shown" + Ni, Ui = "[data-dismiss=\"toast\"]", Wi = {
			animation: !0,
			autohide: !0,
			delay: 500
		}, Gi = {
			animation: "boolean",
			autohide: "boolean",
			delay: "number"
		}, Ki = /* @__PURE__ */ function() {
			function e(e, t) {
				this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners();
			}
			var t = e.prototype;
			return t.show = function() {
				var e = this, t = i.default.Event(Hi);
				if (i.default(this._element).trigger(t), !t.isDefaultPrevented()) {
					this._clearTimeout(), this._config.animation && this._element.classList.add(Fi);
					var n = function() {
						e._element.classList.remove(Ri), e._element.classList.add(Li), i.default(e._element).trigger(K), e._config.autohide && (e._timeout = setTimeout(function() {
							e.hide();
						}, e._config.delay));
					};
					if (this._element.classList.remove(Ii), v.reflow(this._element), this._element.classList.add(Ri), this._config.animation) {
						var r = v.getTransitionDurationFromElement(this._element);
						i.default(this._element).one(v.TRANSITION_END, n).emulateTransitionEnd(r);
					} else n();
				}
			}, t.hide = function() {
				if (this._element.classList.contains(Li)) {
					var e = i.default.Event(Bi);
					i.default(this._element).trigger(e), !e.isDefaultPrevented() && this._close();
				}
			}, t.dispose = function() {
				this._clearTimeout(), this._element.classList.contains(Li) && this._element.classList.remove(Li), i.default(this._element).off(zi), i.default.removeData(this._element, Mi), this._element = null, this._config = null;
			}, t._getConfig = function(e) {
				return e = c({}, Wi, i.default(this._element).data(), typeof e == "object" && e ? e : {}), v.typeCheckConfig(Ai, e, this.constructor.DefaultType), e;
			}, t._setListeners = function() {
				var e = this;
				i.default(this._element).on(zi, Ui, function() {
					return e.hide();
				});
			}, t._close = function() {
				var e = this, t = function() {
					e._element.classList.add(Ii), i.default(e._element).trigger(Vi);
				};
				if (this._element.classList.remove(Li), this._config.animation) {
					var n = v.getTransitionDurationFromElement(this._element);
					i.default(this._element).one(v.TRANSITION_END, t).emulateTransitionEnd(n);
				} else t();
			}, t._clearTimeout = function() {
				clearTimeout(this._timeout), this._timeout = null;
			}, e._jQueryInterface = function(t) {
				return this.each(function() {
					var n = i.default(this), r = n.data(Mi);
					if (r || (r = new e(this, typeof t == "object" && t), n.data(Mi, r)), typeof t == "string") {
						if (r[t] === void 0) throw TypeError("No method named \"" + t + "\"");
						r[t](this);
					}
				});
			}, s(e, null, [
				{
					key: "VERSION",
					get: function() {
						return ji;
					}
				},
				{
					key: "DefaultType",
					get: function() {
						return Gi;
					}
				},
				{
					key: "Default",
					get: function() {
						return Wi;
					}
				}
			]), e;
		}();
		i.default.fn[Ai] = Ki._jQueryInterface, i.default.fn[Ai].Constructor = Ki, i.default.fn[Ai].noConflict = function() {
			return i.default.fn[Ai] = Pi, Ki._jQueryInterface;
		}, e.Alert = O, e.Button = be, e.Carousel = st, e.Collapse = Et, e.Dropdown = mn, e.Modal = qn, e.Popover = Ir, e.Scrollspy = ai, e.Tab = ki, e.Toast = Ki, e.Tooltip = Sr, e.Util = v, Object.defineProperty(e, "__esModule", { value: !0 });
	}));
})))();
var Sl = {
	simulation_round: "ISIMIP3a",
	sectors: [],
	experiments: [],
	groups: [],
	group3: !1,
	...je(),
	...Ce()
}, Cl = Te();
we(Sl), Me(Sl);
var wl = ye(xe, {
	definitions: window.initialState.definitions,
	patterns: window.initialState.patterns,
	commit_date: window.initialState.commit_date,
	commit_hash: window.initialState.commit_hash,
	config: {
		...Sl,
		baseurl: location.protocol + "//" + location.host + location.pathname,
		products: ["OutputData"]
	}
});
wl.subscribe(() => {
	let { config: e } = wl.getState();
	we(e), Me(e);
});
var Tl = document.getElementsByClassName("toc")[0];
document.getElementsByClassName("toc-dropdown")[0].appendChild(Tl.cloneNode(!0)), document.querySelectorAll("[data-component=\"title\"]").forEach((e) => {
	(0, x.createRoot)(e).render(/* @__PURE__ */ (0, P.jsx)(ae, {
		store: wl,
		children: /* @__PURE__ */ (0, P.jsx)(Xs, {})
	}));
}), document.querySelectorAll("[data-component=\"link\"]").forEach((e) => {
	(0, x.createRoot)(e).render(/* @__PURE__ */ (0, P.jsx)(ae, {
		store: wl,
		children: /* @__PURE__ */ (0, P.jsx)(Re, {})
	}));
}), document.querySelectorAll("[data-component=\"config\"]").forEach((e) => {
	(0, x.createRoot)(e).render(/* @__PURE__ */ (0, P.jsx)(ae, {
		store: wl,
		children: /* @__PURE__ */ (0, P.jsx)(Pe, {})
	}));
}), document.querySelectorAll("[data-component=\"show\"]").forEach((e) => {
	(0, x.createRoot)(e).render(/* @__PURE__ */ (0, P.jsx)(ae, {
		store: wl,
		children: /* @__PURE__ */ (0, P.jsx)(He, {
			simulationRound: e.dataset.simulationRound,
			sector: e.dataset.sector,
			html: e.innerHTML
		})
	}));
}), document.querySelectorAll("[data-component=\"hide\"]").forEach((e) => {
	(0, x.createRoot)(e).render(/* @__PURE__ */ (0, P.jsx)(ae, {
		store: wl,
		children: /* @__PURE__ */ (0, P.jsx)(Le, {
			simulationRound: e.dataset.simulationRound,
			sector: e.dataset.sector,
			html: e.innerHTML
		})
	}));
}), document.querySelectorAll("[data-component=\"pattern\"]").forEach((e) => {
	(0, x.createRoot)(e).render(/* @__PURE__ */ (0, P.jsx)(ae, {
		store: wl,
		children: /* @__PURE__ */ (0, P.jsx)(Be, {})
	}));
}), document.querySelectorAll(".toc a").forEach((e) => {
	e.onclick = function(t) {
		t.preventDefault();
		let n = e.href.split("#").pop();
		document.getElementById(n).scrollIntoView(), Ee(n);
	};
}), setTimeout(() => {
	document.querySelectorAll("[data-component=\"table\"]").forEach((e) => {
		(0, x.createRoot)(e).render(/* @__PURE__ */ (0, P.jsx)(ae, {
			store: wl,
			children: /* @__PURE__ */ (0, P.jsx)(Ys, {
				identifier: e.dataset.identifier,
				caption: e.dataset.caption
			})
		}));
	}), setTimeout(() => {
		Cl && Cl.scrollIntoView();
		let e = document.getElementsByTagName("main")[0];
		e.style.height = "auto", setTimeout(() => {
			document.getElementsByClassName("cover")[0].remove();
		}, 100);
	}, 200);
}, 100);
//#endregion
