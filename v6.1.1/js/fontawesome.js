/*!
 * Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Commercial License)
 * Copyright 2022 Fonticons, Inc.
 */
!(function () {
	'use strict';
	function a(a, t) {
		var e,
			n = Object.keys(a);
		return (
			Object.getOwnPropertySymbols &&
				((e = Object.getOwnPropertySymbols(a)),
				t &&
					(e = e.filter(function (t) {
						return Object.getOwnPropertyDescriptor(a, t).enumerable;
					})),
				n.push.apply(n, e)),
			n
		);
	}
	function k(n) {
		for (var t = 1; t < arguments.length; t++) {
			var i = null != arguments[t] ? arguments[t] : {};
			t % 2
				? a(Object(i), !0).forEach(function (t) {
						var a, e;
						(a = n),
							(t = i[(e = t)]),
							e in a
								? Object.defineProperty(a, e, {
										value: t,
										enumerable: !0,
										configurable: !0,
										writable: !0,
								  })
								: (a[e] = t);
				  })
				: Object.getOwnPropertyDescriptors
				? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
				: a(Object(i)).forEach(function (t) {
						Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(i, t));
				  });
		}
		return n;
	}
	function n(t) {
		return (n =
			'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
				? function (t) {
						return typeof t;
				  }
				: function (t) {
						return t &&
							'function' == typeof Symbol &&
							t.constructor === Symbol &&
							t !== Symbol.prototype
							? 'symbol'
							: typeof t;
				  })(t);
	}
	function i(t, a) {
		for (var e = 0; e < a.length; e++) {
			var n = a[e];
			(n.enumerable = n.enumerable || !1),
				(n.configurable = !0),
				'value' in n && (n.writable = !0),
				Object.defineProperty(t, n.key, n);
		}
	}
	function m(t, a) {
		return (
			(function (t) {
				if (Array.isArray(t)) return t;
			})(t) ||
			(function (t, a) {
				var e =
					null == t
						? null
						: ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
						  t['@@iterator'];
				if (null != e) {
					var n,
						i,
						r = [],
						o = !0,
						s = !1;
					try {
						for (
							e = e.call(t);
							!(o = (n = e.next()).done) &&
							(r.push(n.value), !a || r.length !== a);
							o = !0
						);
					} catch (t) {
						(s = !0), (i = t);
					} finally {
						try {
							o || null == e.return || e.return();
						} finally {
							if (s) throw i;
						}
					}
					return r;
				}
			})(t, a) ||
			e(t, a) ||
			(function () {
				throw new TypeError(
					'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
				);
			})()
		);
	}
	function l(t) {
		return (
			(function (t) {
				if (Array.isArray(t)) return r(t);
			})(t) ||
			(function (t) {
				if (
					('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
					null != t['@@iterator']
				)
					return Array.from(t);
			})(t) ||
			e(t) ||
			(function () {
				throw new TypeError(
					'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
				);
			})()
		);
	}
	function e(t, a) {
		if (t) {
			if ('string' == typeof t) return r(t, a);
			var e = Object.prototype.toString.call(t).slice(8, -1);
			return 'Map' ===
				(e = 'Object' === e && t.constructor ? t.constructor.name : e) ||
				'Set' === e
				? Array.from(t)
				: 'Arguments' === e ||
				  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
				? r(t, a)
				: void 0;
		}
	}
	function r(t, a) {
		(null == a || a > t.length) && (a = t.length);
		for (var e = 0, n = new Array(a); e < a; e++) n[e] = t[e];
		return n;
	}
	function t() {}
	var o = {},
		s = {},
		c = null,
		f = { mark: t, measure: t };
	try {
		'undefined' != typeof window && (o = window),
			'undefined' != typeof document && (s = document),
			'undefined' != typeof MutationObserver && (c = MutationObserver),
			'undefined' != typeof performance && (f = performance);
	} catch (t) {}
	var u = (o.navigator || {}).userAgent,
		d = void 0 === u ? '' : u,
		g = o,
		h = s,
		b = c,
		u = f,
		v = !!g.document,
		p =
			!!h.documentElement &&
			!!h.head &&
			'function' == typeof h.addEventListener &&
			'function' == typeof h.createElement,
		y = ~d.indexOf('MSIE') || ~d.indexOf('Trident/'),
		o = '___FONT_AWESOME___',
		w = 16,
		x = 'svg-inline--fa',
		A = 'data-fa-i2svg',
		O = 'data-fa-pseudo-element',
		N = 'data-fa-pseudo-element-pending',
		C = 'data-prefix',
		P = 'data-icon',
		S = 'fontawesome-i2svg',
		z = 'async',
		E = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'],
		j = (function () {
			try {
				return !0;
			} catch (t) {
				return !1;
			}
		})(),
		M = {
			fas: 'solid',
			'fa-solid': 'solid',
			far: 'regular',
			'fa-regular': 'regular',
			fal: 'light',
			'fa-light': 'light',
			fat: 'thin',
			'fa-thin': 'thin',
			fad: 'duotone',
			'fa-duotone': 'duotone',
			fab: 'brands',
			'fa-brands': 'brands',
			fak: 'kit',
			'fa-kit': 'kit',
			fa: 'solid',
		},
		I = {
			solid: 'fas',
			regular: 'far',
			light: 'fal',
			thin: 'fat',
			duotone: 'fad',
			brands: 'fab',
			kit: 'fak',
		},
		L = {
			fab: 'fa-brands',
			fad: 'fa-duotone',
			fak: 'fa-kit',
			fal: 'fa-light',
			far: 'fa-regular',
			fas: 'fa-solid',
			fat: 'fa-thin',
		},
		Y = {
			'fa-brands': 'fab',
			'fa-duotone': 'fad',
			'fa-kit': 'fak',
			'fa-light': 'fal',
			'fa-regular': 'far',
			'fa-solid': 'fas',
			'fa-thin': 'fat',
		},
		R = /fa[srltdbk\-\ ]/,
		T = 'fa-layers-text',
		D =
			/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,
		F = { 900: 'fas', 400: 'far', normal: 'far', 300: 'fal', 100: 'fat' },
		s = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		c = s.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
		H = [
			'class',
			'data-prefix',
			'data-icon',
			'data-fa-transform',
			'data-fa-mask',
		],
		W = {
			GROUP: 'duotone-group',
			SWAP_OPACITY: 'swap-opacity',
			PRIMARY: 'primary',
			SECONDARY: 'secondary',
		},
		U = []
			.concat(l(Object.keys(I)), [
				'2xs',
				'xs',
				'sm',
				'lg',
				'xl',
				'2xl',
				'beat',
				'border',
				'fade',
				'beat-fade',
				'bounce',
				'flip-both',
				'flip-horizontal',
				'flip-vertical',
				'flip',
				'fw',
				'inverse',
				'layers-counter',
				'layers-text',
				'layers',
				'li',
				'pull-left',
				'pull-right',
				'pulse',
				'rotate-180',
				'rotate-270',
				'rotate-90',
				'rotate-by',
				'shake',
				'spin-pulse',
				'spin-reverse',
				'spin',
				'stack-1x',
				'stack-2x',
				'stack',
				'ul',
				W.GROUP,
				W.SWAP_OPACITY,
				W.PRIMARY,
				W.SECONDARY,
			])
			.concat(
				s.map(function (t) {
					return ''.concat(t, 'x');
				})
			)
			.concat(
				c.map(function (t) {
					return 'w-'.concat(t);
				})
			),
		_ = g.FontAwesomeConfig || {};
	h &&
		'function' == typeof h.querySelector &&
		[
			['data-family-prefix', 'familyPrefix'],
			['data-style-default', 'styleDefault'],
			['data-replacement-class', 'replacementClass'],
			['data-auto-replace-svg', 'autoReplaceSvg'],
			['data-auto-add-css', 'autoAddCss'],
			['data-auto-a11y', 'autoA11y'],
			['data-search-pseudo-elements', 'searchPseudoElements'],
			['data-observe-mutations', 'observeMutations'],
			['data-mutate-approach', 'mutateApproach'],
			['data-keep-original-source', 'keepOriginalSource'],
			['data-measure-performance', 'measurePerformance'],
			['data-show-missing-icons', 'showMissingIcons'],
		].forEach(function (t) {
			var a = m(t, 2),
				t = a[0],
				a = a[1],
				t =
					'' ===
						(t = (function (t) {
							var a = h.querySelector('script[' + t + ']');
							if (a) return a.getAttribute(t);
						})(t)) ||
					('false' !== t && ('true' === t || t));
			null != t && (_[a] = t);
		});
	var B = k(
		k(
			{},
			{
				familyPrefix: 'fa',
				styleDefault: 'solid',
				replacementClass: x,
				autoReplaceSvg: !0,
				autoAddCss: !0,
				autoA11y: !0,
				searchPseudoElements: !1,
				observeMutations: !0,
				mutateApproach: 'async',
				keepOriginalSource: !0,
				measurePerformance: !1,
				showMissingIcons: !0,
			}
		),
		_
	);
	B.autoReplaceSvg || (B.observeMutations = !1);
	var X = {};
	Object.keys(B).forEach(function (a) {
		Object.defineProperty(X, a, {
			enumerable: !0,
			set: function (t) {
				(B[a] = t),
					q.forEach(function (t) {
						return t(X);
					});
			},
			get: function () {
				return B[a];
			},
		});
	}),
		(g.FontAwesomeConfig = X);
	var q = [];
	var V = w,
		G = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
	var K = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	function J() {
		for (var t = 12, a = ''; 0 < t--; ) a += K[(62 * Math.random()) | 0];
		return a;
	}
	function Q(t) {
		for (var a = [], e = (t || []).length >>> 0; e--; ) a[e] = t[e];
		return a;
	}
	function Z(t) {
		return t.classList
			? Q(t.classList)
			: (t.getAttribute('class') || '').split(' ').filter(function (t) {
					return t;
			  });
	}
	function $(t) {
		return ''
			.concat(t)
			.replace(/&/g, '&amp;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#39;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;');
	}
	function tt(e) {
		return Object.keys(e || {}).reduce(function (t, a) {
			return t + ''.concat(a, ': ').concat(e[a].trim(), ';');
		}, '');
	}
	function at(t) {
		return (
			t.size !== G.size ||
			t.x !== G.x ||
			t.y !== G.y ||
			t.rotate !== G.rotate ||
			t.flipX ||
			t.flipY
		);
	}
	function et() {
		var t,
			a,
			e = x,
			n = X.familyPrefix,
			i = X.replacementClass,
			r =
				':host,:root{--fa-font-solid:normal 900 1em/1 "Font Awesome 6 Solid";--fa-font-regular:normal 400 1em/1 "Font Awesome 6 Regular";--fa-font-light:normal 300 1em/1 "Font Awesome 6 Light";--fa-font-thin:normal 100 1em/1 "Font Awesome 6 Thin";--fa-font-duotone:normal 900 1em/1 "Font Awesome 6 Duotone";--fa-font-brands:normal 400 1em/1 "Font Awesome 6 Brands"}svg:not(:host).svg-inline--fa,svg:not(:root).svg-inline--fa{overflow:visible;box-sizing:content-box}.svg-inline--fa{display:var(--fa-display,inline-block);height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-2xs{vertical-align:.1em}.svg-inline--fa.fa-xs{vertical-align:0}.svg-inline--fa.fa-sm{vertical-align:-.0714285705em}.svg-inline--fa.fa-lg{vertical-align:-.2em}.svg-inline--fa.fa-xl{vertical-align:-.25em}.svg-inline--fa.fa-2xl{vertical-align:-.3125em}.svg-inline--fa.fa-pull-left{margin-right:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-pull-right{margin-left:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-li{width:var(--fa-li-width,2em);top:.25em}.svg-inline--fa.fa-fw{width:var(--fa-fw-width,1.25em)}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:var(--fa-counter-background-color,#ff253a);border-radius:var(--fa-counter-border-radius,1em);box-sizing:border-box;color:var(--fa-inverse,#fff);line-height:var(--fa-counter-line-height,1);max-width:var(--fa-counter-max-width,5em);min-width:var(--fa-counter-min-width,1.5em);overflow:hidden;padding:var(--fa-counter-padding,.25em .5em);right:var(--fa-right,0);text-overflow:ellipsis;top:var(--fa-top,0);-webkit-transform:scale(var(--fa-counter-scale,.25));transform:scale(var(--fa-counter-scale,.25));-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:var(--fa-bottom,0);right:var(--fa-right,0);top:auto;-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:var(--fa-bottom,0);left:var(--fa-left,0);right:auto;top:auto;-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{top:var(--fa-top,0);right:var(--fa-right,0);-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:var(--fa-left,0);right:auto;top:var(--fa-top,0);-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:top left;transform-origin:top left}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-2xs{font-size:.625em;line-height:.1em;vertical-align:.225em}.fa-xs{font-size:.75em;line-height:.0833333337em;vertical-align:.125em}.fa-sm{font-size:.875em;line-height:.0714285718em;vertical-align:.0535714295em}.fa-lg{font-size:1.25em;line-height:.05em;vertical-align:-.075em}.fa-xl{font-size:1.5em;line-height:.0416666682em;vertical-align:-.125em}.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:var(--fa-li-margin,2.5em);padding-left:0}.fa-ul>li{position:relative}.fa-li{left:calc(var(--fa-li-width,2em) * -1);position:absolute;text-align:center;width:var(--fa-li-width,2em);line-height:inherit}.fa-border{border-color:var(--fa-border-color,#eee);border-radius:var(--fa-border-radius,.1em);border-style:var(--fa-border-style,solid);border-width:var(--fa-border-width,.08em);padding:var(--fa-border-padding,.2em .25em .15em)}.fa-pull-left{float:left;margin-right:var(--fa-pull-margin,.3em)}.fa-pull-right{float:right;margin-left:var(--fa-pull-margin,.3em)}.fa-beat{-webkit-animation-name:fa-beat;animation-name:fa-beat;-webkit-animation-delay:var(--fa-animation-delay,0);animation-delay:var(--fa-animation-delay,0);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-bounce{-webkit-animation-name:fa-bounce;animation-name:fa-bounce;-webkit-animation-delay:var(--fa-animation-delay,0);animation-delay:var(--fa-animation-delay,0);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1))}.fa-fade{-webkit-animation-name:fa-fade;animation-name:fa-fade;-webkit-animation-delay:var(--fa-animation-delay,0);animation-delay:var(--fa-animation-delay,0);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-beat-fade{-webkit-animation-name:fa-beat-fade;animation-name:fa-beat-fade;-webkit-animation-delay:var(--fa-animation-delay,0);animation-delay:var(--fa-animation-delay,0);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-flip{-webkit-animation-name:fa-flip;animation-name:fa-flip;-webkit-animation-delay:var(--fa-animation-delay,0);animation-delay:var(--fa-animation-delay,0);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-shake{-webkit-animation-name:fa-shake;animation-name:fa-shake;-webkit-animation-delay:var(--fa-animation-delay,0);animation-delay:var(--fa-animation-delay,0);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-delay:var(--fa-animation-delay,0);animation-delay:var(--fa-animation-delay,0);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,2s);animation-duration:var(--fa-animation-duration,2s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin-reverse{--fa-animation-direction:reverse}.fa-pulse,.fa-spin-pulse{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,steps(8));animation-timing-function:var(--fa-animation-timing,steps(8))}@media (prefers-reduced-motion:reduce){.fa-beat,.fa-beat-fade,.fa-bounce,.fa-fade,.fa-flip,.fa-pulse,.fa-shake,.fa-spin,.fa-spin-pulse{-webkit-animation-delay:-1ms;animation-delay:-1ms;-webkit-animation-duration:1ms;animation-duration:1ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;transition-delay:0s;transition-duration:0s}}@-webkit-keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@-webkit-keyframes fa-bounce{0%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}100%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}}@keyframes fa-bounce{0%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}100%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}}@-webkit-keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@-webkit-keyframes fa-beat-fade{0%,100%{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@keyframes fa-beat-fade{0%,100%{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@-webkit-keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@-webkit-keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}24%,8%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}100%,40%{-webkit-transform:rotate(0);transform:rotate(0)}}@keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}24%,8%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}100%,40%{-webkit-transform:rotate(0);transform:rotate(0)}}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}.fa-rotate-by{-webkit-transform:rotate(var(--fa-rotate-angle,none));transform:rotate(var(--fa-rotate-angle,none))}.fa-stack{display:inline-block;vertical-align:middle;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;z-index:var(--fa-stack-z-index,auto)}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:var(--fa-inverse,#fff)}.fa-sr-only,.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.fa-sr-only-focusable:not(:focus),.sr-only-focusable:not(:focus){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fa-duotone.fa-inverse,.fad.fa-inverse{color:var(--fa-inverse,#fff)}';
		return (
			('fa' === n && i === e) ||
				((t = new RegExp('\\.'.concat('fa', '\\-'), 'g')),
				(a = new RegExp('\\--'.concat('fa', '\\-'), 'g')),
				(e = new RegExp('\\.'.concat(e), 'g')),
				(r = r
					.replace(t, '.'.concat(n, '-'))
					.replace(a, '--'.concat(n, '-'))
					.replace(e, '.'.concat(i)))),
			r
		);
	}
	var nt = !1;
	function it() {
		X.autoAddCss &&
			!nt &&
			((function (t) {
				if (t && p) {
					var a = h.createElement('style');
					a.setAttribute('type', 'text/css'), (a.innerHTML = t);
					for (
						var e = h.head.childNodes, n = null, i = e.length - 1;
						-1 < i;
						i--
					) {
						var r = e[i],
							o = (r.tagName || '').toUpperCase();
						-1 < ['STYLE', 'LINK'].indexOf(o) && (n = r);
					}
					h.head.insertBefore(a, n);
				}
			})(et()),
			(nt = !0));
	}
	(f = {
		mixout: function () {
			return { dom: { css: et, insertCss: it } };
		},
		hooks: function () {
			return {
				beforeDOMElementCreation: function () {
					it();
				},
				beforeI2svg: function () {
					it();
				},
			};
		},
	}),
		(d = g || {});
	d[o] || (d[o] = {}),
		d[o].styles || (d[o].styles = {}),
		d[o].hooks || (d[o].hooks = {}),
		d[o].shims || (d[o].shims = []);
	function rt() {
		h.removeEventListener('DOMContentLoaded', rt),
			(ct = 1),
			st.map(function (t) {
				return t();
			});
	}
	var ot = d[o],
		st = [],
		ct = !1;
	function ft(t) {
		p && (ct ? setTimeout(t, 0) : st.push(t));
	}
	function lt(t) {
		var e,
			a = t.tag,
			n = t.attributes,
			i = void 0 === n ? {} : n,
			n = t.children,
			n = void 0 === n ? [] : n;
		return 'string' == typeof t
			? $(t)
			: '<'
					.concat(a, ' ')
					.concat(
						((e = i),
						Object.keys(e || {})
							.reduce(function (t, a) {
								return t + ''.concat(a, '="').concat($(e[a]), '" ');
							}, '')
							.trim()),
						'>'
					)
					.concat(n.map(lt).join(''), '</')
					.concat(a, '>');
	}
	function ut(t, a, e) {
		if (t && t[a] && t[a][e]) return { prefix: a, iconName: e, icon: t[a][e] };
	}
	p &&
		((ct = (h.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
			h.readyState
		)) ||
			h.addEventListener('DOMContentLoaded', rt));
	function mt(t, a, e, n) {
		for (
			var i,
				r,
				o = Object.keys(t),
				s = o.length,
				c = void 0 !== n ? dt(a, n) : a,
				f = void 0 === e ? ((i = 1), t[o[0]]) : ((i = 0), e);
			i < s;
			i++
		)
			f = c(f, t[(r = o[i])], r, t);
		return f;
	}
	var dt = function (i, r) {
		return function (t, a, e, n) {
			return i.call(r, t, a, e, n);
		};
	};
	function bt(t) {
		t = (function (t) {
			for (var a = [], e = 0, n = t.length; e < n; ) {
				var i,
					r = t.charCodeAt(e++);
				55296 <= r && r <= 56319 && e < n
					? 56320 == (64512 & (i = t.charCodeAt(e++)))
						? a.push(((1023 & r) << 10) + (1023 & i) + 65536)
						: (a.push(r), e--)
					: a.push(r);
			}
			return a;
		})(t);
		return 1 === t.length ? t[0].toString(16) : null;
	}
	function vt(n) {
		return Object.keys(n).reduce(function (t, a) {
			var e = n[a];
			return !!e.icon ? (t[e.iconName] = e.icon) : (t[a] = e), t;
		}, {});
	}
	function pt(t, a, e) {
		var n = (2 < arguments.length && void 0 !== e ? e : {}).skipHooks,
			e = void 0 !== n && n,
			n = vt(a);
		'function' != typeof ot.hooks.addPack || e
			? (ot.styles[t] = k(k({}, ot.styles[t] || {}), n))
			: ot.hooks.addPack(t, vt(a)),
			'fas' === t && pt('fa', a);
	}
	var gt = ot.styles,
		ht = ot.shims,
		yt = Object.values(L),
		kt = null,
		wt = {},
		xt = {},
		At = {},
		Ot = {},
		Nt = {},
		Ct = Object.keys(M);
	function Pt(t, a) {
		var e = a.split('-'),
			a = e[0],
			e = e.slice(1).join('-');
		return a !== t || '' === e || ~U.indexOf(e) ? null : e;
	}
	function St() {
		function t(n) {
			return mt(
				gt,
				function (t, a, e) {
					return (t[e] = mt(a, n, {})), t;
				},
				{}
			);
		}
		(wt = t(function (a, t, e) {
			return (
				t[3] && (a[t[3]] = e),
				t[2] &&
					t[2]
						.filter(function (t) {
							return 'number' == typeof t;
						})
						.forEach(function (t) {
							a[t.toString(16)] = e;
						}),
				a
			);
		})),
			(xt = t(function (a, t, e) {
				return (
					(a[e] = e),
					t[2] &&
						t[2]
							.filter(function (t) {
								return 'string' == typeof t;
							})
							.forEach(function (t) {
								a[t] = e;
							}),
					a
				);
			})),
			(Nt = t(function (a, t, e) {
				t = t[2];
				return (
					(a[e] = e),
					t.forEach(function (t) {
						a[t] = e;
					}),
					a
				);
			}));
		var i = 'far' in gt || X.autoFetchSvg,
			a = mt(
				ht,
				function (t, a) {
					var e = a[0],
						n = a[1],
						a = a[2];
					return (
						'far' !== n || i || (n = 'fas'),
						'string' == typeof e && (t.names[e] = { prefix: n, iconName: a }),
						'number' == typeof e &&
							(t.unicodes[e.toString(16)] = { prefix: n, iconName: a }),
						t
					);
				},
				{ names: {}, unicodes: {} }
			);
		(At = a.names), (Ot = a.unicodes), (kt = It(X.styleDefault));
	}
	function zt(t, a) {
		return (wt[t] || {})[a];
	}
	function Et(t, a) {
		return (Nt[t] || {})[a];
	}
	function jt(t) {
		return At[t] || { prefix: null, iconName: null };
	}
	(s = function (t) {
		kt = It(t.styleDefault);
	}),
		q.push(s),
		St();
	function Mt() {
		return { prefix: null, iconName: null, rest: [] };
	}
	function It(t) {
		var a = I[t] || I[M[t]],
			t = t in ot.styles ? t : null;
		return a || t || null;
	}
	function Lt(t, a) {
		var a = (1 < arguments.length && void 0 !== a ? a : {}).skipLookups,
			n = void 0 !== a && a,
			i = null,
			t = t.reduce(function (t, a) {
				var e = Pt(X.familyPrefix, a);
				return (
					gt[a]
						? ((a = yt.includes(a) ? Y[a] : a), (i = a), (t.prefix = a))
						: -1 < Ct.indexOf(a)
						? ((i = a), (t.prefix = It(a)))
						: e
						? (t.iconName = e)
						: a !== X.replacementClass && t.rest.push(a),
					!n &&
						t.prefix &&
						t.iconName &&
						((e = 'fa' === i ? jt(t.iconName) : {}),
						(a = Et(t.prefix, t.iconName)),
						e.prefix && (i = null),
						(t.iconName = e.iconName || a || t.iconName),
						(t.prefix = e.prefix || t.prefix),
						'far' !== t.prefix ||
							gt.far ||
							!gt.fas ||
							X.autoFetchSvg ||
							(t.prefix = 'fas')),
					t
				);
			}, Mt());
		return ('fa' !== t.prefix && 'fa' !== i) || (t.prefix = kt || 'fas'), t;
	}
	var c = (function () {
			function t() {
				!(function (t, a) {
					if (!(t instanceof a))
						throw new TypeError('Cannot call a class as a function');
				})(this, t),
					(this.definitions = {});
			}
			var a, e, n;
			return (
				(a = t),
				(e = [
					{
						key: 'add',
						value: function () {
							for (
								var e = this, t = arguments.length, a = new Array(t), n = 0;
								n < t;
								n++
							)
								a[n] = arguments[n];
							var i = a.reduce(this._pullDefinitions, {});
							Object.keys(i).forEach(function (t) {
								(e.definitions[t] = k(k({}, e.definitions[t] || {}), i[t])),
									pt(t, i[t]);
								var a = L[t];
								a && pt(a, i[t]), St();
							});
						},
					},
					{
						key: 'reset',
						value: function () {
							this.definitions = {};
						},
					},
					{
						key: '_pullDefinitions',
						value: function (i, t) {
							var r = t.prefix && t.iconName && t.icon ? { 0: t } : t;
							return (
								Object.keys(r).map(function (t) {
									var a = r[t],
										e = a.prefix,
										t = a.iconName,
										n = a.icon,
										a = n[2];
									i[e] || (i[e] = {}),
										0 < a.length &&
											a.forEach(function (t) {
												'string' == typeof t && (i[e][t] = n);
											}),
										(i[e][t] = n);
								}),
								i
							);
						},
					},
				]) && i(a.prototype, e),
				n && i(a, n),
				Object.defineProperty(a, 'prototype', { writable: !1 }),
				t
			);
		})(),
		d = [],
		Yt = {},
		Rt = {},
		Tt = Object.keys(Rt);
	function Dt(t, a) {
		for (
			var e = arguments.length, n = new Array(2 < e ? e - 2 : 0), i = 2;
			i < e;
			i++
		)
			n[i - 2] = arguments[i];
		return (
			(Yt[t] || []).forEach(function (t) {
				a = t.apply(null, [a].concat(n));
			}),
			a
		);
	}
	function Ft(t) {
		for (
			var a = arguments.length, e = new Array(1 < a ? a - 1 : 0), n = 1;
			n < a;
			n++
		)
			e[n - 1] = arguments[n];
		(Yt[t] || []).forEach(function (t) {
			t.apply(null, e);
		});
	}
	function Ht(t) {
		var a = t,
			t = Array.prototype.slice.call(arguments, 1);
		return Rt[a] ? Rt[a].apply(null, t) : void 0;
	}
	function Wt(t) {
		'fa' === t.prefix && (t.prefix = 'fas');
		var a = t.iconName,
			t = t.prefix || kt;
		if (a)
			return (
				(a = Et(t, a) || a), ut(Ut.definitions, t, a) || ut(ot.styles, t, a)
			);
	}
	var Ut = new c(),
		_t = {
			noAuto: function () {
				(X.autoReplaceSvg = !1), (X.observeMutations = !1), Ft('noAuto');
			},
			config: X,
			dom: {
				i2svg: function () {
					var t =
						0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
					return p
						? (Ft('beforeI2svg', t),
						  Ht('pseudoElements2svg', t),
						  Ht('i2svg', t))
						: Promise.reject('Operation requires a DOM of some kind.');
				},
				watch: function () {
					var t =
							0 < arguments.length && void 0 !== arguments[0]
								? arguments[0]
								: {},
						a = t.autoReplaceSvgRoot;
					!1 === X.autoReplaceSvg && (X.autoReplaceSvg = !0),
						(X.observeMutations = !0),
						ft(function () {
							Bt({ autoReplaceSvgRoot: a }), Ft('watch', t);
						});
				},
			},
			parse: {
				icon: function (t) {
					if (null === t) return null;
					if ('object' === n(t) && t.prefix && t.iconName)
						return {
							prefix: t.prefix,
							iconName: Et(t.prefix, t.iconName) || t.iconName,
						};
					if (Array.isArray(t) && 2 === t.length) {
						var a = 0 === t[1].indexOf('fa-') ? t[1].slice(3) : t[1],
							e = It(t[0]);
						return { prefix: e, iconName: Et(e, a) || a };
					}
					if (
						'string' == typeof t &&
						(-1 < t.indexOf(''.concat(X.familyPrefix, '-')) || t.match(R))
					) {
						a = Lt(t.split(' '), { skipLookups: !0 });
						return {
							prefix: a.prefix || kt,
							iconName: Et(a.prefix, a.iconName) || a.iconName,
						};
					}
					return 'string' == typeof t
						? { prefix: kt, iconName: Et(kt, t) || t }
						: void 0;
				},
			},
			library: Ut,
			findIconDefinition: Wt,
			toHtml: lt,
		},
		Bt = function () {
			var t = (
					0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
				).autoReplaceSvgRoot,
				t = void 0 === t ? h : t;
			(0 < Object.keys(ot.styles).length || X.autoFetchSvg) &&
				p &&
				X.autoReplaceSvg &&
				_t.dom.i2svg({ node: t });
		};
	function Xt(a, t) {
		return (
			Object.defineProperty(a, 'abstract', { get: t }),
			Object.defineProperty(a, 'html', {
				get: function () {
					return a.abstract.map(lt);
				},
			}),
			Object.defineProperty(a, 'node', {
				get: function () {
					if (p) {
						var t = h.createElement('div');
						return (t.innerHTML = a.html), t.children;
					}
				},
			}),
			a
		);
	}
	function qt(t) {
		var a = t.icons,
			e = a.main,
			n = a.mask,
			i = t.prefix,
			r = t.iconName,
			o = t.transform,
			s = t.symbol,
			c = t.title,
			f = t.maskId,
			l = t.titleId,
			u = t.extra,
			m = t.watchable,
			d = void 0 !== m && m,
			b = n.found ? n : e,
			a = b.width,
			t = b.height,
			m = 'fak' === i,
			b = [
				X.replacementClass,
				r ? ''.concat(X.familyPrefix, '-').concat(r) : '',
			]
				.filter(function (t) {
					return -1 === u.classes.indexOf(t);
				})
				.filter(function (t) {
					return '' !== t || !!t;
				})
				.concat(u.classes)
				.join(' '),
			b = {
				children: [],
				attributes: k(
					k({}, u.attributes),
					{},
					{
						'data-prefix': i,
						'data-icon': r,
						class: b,
						role: u.attributes.role || 'img',
						xmlns: 'http://www.w3.org/2000/svg',
						viewBox: '0 0 '.concat(a, ' ').concat(t),
					}
				),
			},
			t =
				m && !~u.classes.indexOf('fa-fw')
					? { width: ''.concat((a / t) * 16 * 0.0625, 'em') }
					: {};
		d && (b.attributes[A] = ''),
			c &&
				(b.children.push({
					tag: 'title',
					attributes: {
						id: b.attributes['aria-labelledby'] || 'title-'.concat(l || J()),
					},
					children: [c],
				}),
				delete b.attributes.title);
		var v,
			p,
			g,
			h,
			y,
			t = k(
				k({}, b),
				{},
				{
					prefix: i,
					iconName: r,
					main: e,
					mask: n,
					maskId: f,
					transform: o,
					symbol: s,
					styles: k(k({}, t), u.styles),
				}
			),
			n =
				n.found && e.found
					? Ht('generateAbstractMask', t) || { children: [], attributes: {} }
					: Ht('generateAbstractIcon', t) || { children: [], attributes: {} },
			e = n.children,
			n = n.attributes;
		return (
			(t.children = e),
			(t.attributes = n),
			s
				? ((p = (v = t).prefix),
				  (g = v.iconName),
				  (h = v.children),
				  (y = v.attributes),
				  (v =
						!0 === (v = v.symbol)
							? ''.concat(p, '-').concat(X.familyPrefix, '-').concat(g)
							: v),
				  [
						{
							tag: 'svg',
							attributes: { style: 'display: none;' },
							children: [
								{
									tag: 'symbol',
									attributes: k(k({}, y), {}, { id: v }),
									children: h,
								},
							],
						},
				  ])
				: ((g = (p = t).children),
				  (y = p.main),
				  (v = p.mask),
				  (h = p.attributes),
				  (t = p.styles),
				  at((p = p.transform)) &&
						y.found &&
						!v.found &&
						((v = y.width / y.height / 2),
						(y = 0.5),
						(h.style = tt(
							k(
								k({}, t),
								{},
								{
									'transform-origin': ''
										.concat(v + p.x / 16, 'em ')
										.concat(y + p.y / 16, 'em'),
								}
							)
						))),
				  [{ tag: 'svg', attributes: h, children: g }])
		);
	}
	function Vt(t) {
		var a = t.content,
			e = t.width,
			n = t.height,
			i = t.transform,
			r = t.title,
			o = t.extra,
			s = t.watchable,
			c = void 0 !== s && s,
			t = k(
				k(k({}, o.attributes), r ? { title: r } : {}),
				{},
				{ class: o.classes.join(' ') }
			);
		c && (t[A] = '');
		s = k({}, o.styles);
		at(i) &&
			((s.transform =
				((o = (c = { transform: i, startCentered: !0, width: e, height: n })
					.transform),
				(i = c.width),
				(n = void 0 === (e = c.height) ? w : e),
				(c = void 0 !== (e = c.startCentered) && e),
				(e = ''),
				(e +=
					c && y
						? 'translate('
								.concat(o.x / V - (void 0 === i ? w : i) / 2, 'em, ')
								.concat(o.y / V - n / 2, 'em) ')
						: c
						? 'translate(calc(-50% + '
								.concat(o.x / V, 'em), calc(-50% + ')
								.concat(o.y / V, 'em)) ')
						: 'translate('.concat(o.x / V, 'em, ').concat(o.y / V, 'em) ')),
				(e += 'scale('
					.concat((o.size / V) * (o.flipX ? -1 : 1), ', ')
					.concat((o.size / V) * (o.flipY ? -1 : 1), ') ')),
				(e += 'rotate('.concat(o.rotate, 'deg) ')))),
			(s['-webkit-transform'] = s.transform));
		s = tt(s);
		0 < s.length && (t.style = s);
		s = [];
		return (
			s.push({ tag: 'span', attributes: t, children: [a] }),
			r &&
				s.push({
					tag: 'span',
					attributes: { class: 'sr-only' },
					children: [r],
				}),
			s
		);
	}
	var Gt = ot.styles;
	function Kt(t) {
		var a = t[0],
			e = t[1],
			t = m(t.slice(4), 1)[0];
		return {
			found: !0,
			width: a,
			height: e,
			icon: Array.isArray(t)
				? {
						tag: 'g',
						attributes: {
							class: ''.concat(X.familyPrefix, '-').concat(W.GROUP),
						},
						children: [
							{
								tag: 'path',
								attributes: {
									class: ''.concat(X.familyPrefix, '-').concat(W.SECONDARY),
									fill: 'currentColor',
									d: t[0],
								},
							},
							{
								tag: 'path',
								attributes: {
									class: ''.concat(X.familyPrefix, '-').concat(W.PRIMARY),
									fill: 'currentColor',
									d: t[1],
								},
							},
						],
				  }
				: { tag: 'path', attributes: { fill: 'currentColor', d: t } },
		};
	}
	var Jt = { found: !1, width: 512, height: 512 };
	function Qt(i, r) {
		var o = r;
		return (
			'fa' === r && null !== X.styleDefault && (r = kt),
			new Promise(function (t, a) {
				var e, n;
				Ht('missingIconAbstract');
				if (
					('fa' === o &&
						((n = jt(i) || {}), (i = n.iconName || i), (r = n.prefix || r)),
					i && r && Gt[r] && Gt[r][i])
				)
					return t(Kt(Gt[r][i]));
				(e = i),
					(n = r),
					j ||
						X.showMissingIcons ||
						!e ||
						console.error(
							'Icon with name "'
								.concat(e, '" and prefix "')
								.concat(n, '" is missing.')
						),
					t(
						k(
							k({}, Jt),
							{},
							{
								icon:
									(X.showMissingIcons && i && Ht('missingIconAbstract')) || {},
							}
						)
					);
			})
		);
	}
	function Zt() {}
	function $t(t) {
		ta.mark(''.concat(aa, ' ').concat(t, ' ends')),
			ta.measure(
				''.concat(aa, ' ').concat(t),
				''.concat(aa, ' ').concat(t, ' begins'),
				''.concat(aa, ' ').concat(t, ' ends')
			);
	}
	var ta =
			X.measurePerformance && u && u.mark && u.measure
				? u
				: { mark: Zt, measure: Zt },
		aa = 'FA "6.1.1"',
		ea = {
			begin: function (t) {
				return (
					ta.mark(''.concat(aa, ' ').concat(t, ' begins')),
					function () {
						return $t(t);
					}
				);
			},
			end: $t,
		},
		na = function () {};
	function ia(t) {
		return 'string' == typeof (t.getAttribute ? t.getAttribute(A) : null);
	}
	function ra(t) {
		return h.createElementNS('http://www.w3.org/2000/svg', t);
	}
	function oa(t) {
		return h.createElement(t);
	}
	var sa = {
		replace: function (t) {
			var a = t[0];
			a.parentNode &&
				(t[1].forEach(function (t) {
					a.parentNode.insertBefore(
						(function a(e, t) {
							var t = (1 < arguments.length && void 0 !== t ? t : {}).ceFn,
								n = void 0 === t ? ('svg' === e.tag ? ra : oa) : t;
							if ('string' == typeof e) return h.createTextNode(e);
							var i = n(e.tag);
							return (
								Object.keys(e.attributes || []).forEach(function (t) {
									i.setAttribute(t, e.attributes[t]);
								}),
								(e.children || []).forEach(function (t) {
									i.appendChild(a(t, { ceFn: n }));
								}),
								i
							);
						})(t),
						a
					);
				}),
				null === a.getAttribute(A) && X.keepOriginalSource
					? ((t = h.createComment(' '.concat(a.outerHTML, ' '))),
					  a.parentNode.replaceChild(t, a))
					: a.remove());
		},
		nest: function (t) {
			var a = t[0],
				e = t[1];
			if (~Z(a).indexOf(X.replacementClass)) return sa.replace(t);
			var n = new RegExp(''.concat(X.familyPrefix, '-.*'));
			delete e[0].attributes.id,
				e[0].attributes.class &&
					((t = e[0].attributes.class.split(' ').reduce(
						function (t, a) {
							return (
								(a === X.replacementClass || a.match(n)
									? t.toSvg
									: t.toNode
								).push(a),
								t
							);
						},
						{ toNode: [], toSvg: [] }
					)),
					(e[0].attributes.class = t.toSvg.join(' ')),
					0 === t.toNode.length
						? a.removeAttribute('class')
						: a.setAttribute('class', t.toNode.join(' ')));
			e = e.map(lt).join('\n');
			a.setAttribute(A, ''), (a.innerHTML = e);
		},
	};
	function ca(t) {
		t();
	}
	function fa(e, t) {
		var n = 'function' == typeof t ? t : na;
		0 === e.length
			? n()
			: (X.mutateApproach === z ? g.requestAnimationFrame || ca : ca)(
					function () {
						var t =
								(!0 !== X.autoReplaceSvg && sa[X.autoReplaceSvg]) || sa.replace,
							a = ea.begin('mutate');
						e.map(t), a(), n();
					}
			  );
	}
	var la = !1;
	function ua() {
		la = !0;
	}
	function ma() {
		la = !1;
	}
	var da = null;
	function ba(t) {
		var r, o, a, s;
		b &&
			X.observeMutations &&
			((a = t.treeCallback),
			(r = void 0 === a ? na : a),
			(a = t.nodeCallback),
			(o = void 0 === a ? na : a),
			(a = t.pseudoElementsCallback),
			(s = void 0 === a ? na : a),
			(t = void 0 === (t = t.observeMutationsRoot) ? h : t),
			(da = new b(function (t) {
				var i;
				la ||
					((i = kt),
					Q(t).forEach(function (t) {
						var a, e, n;
						'childList' === t.type &&
							0 < t.addedNodes.length &&
							!ia(t.addedNodes[0]) &&
							(X.searchPseudoElements && s(t.target), r(t.target)),
							'attributes' === t.type &&
								t.target.parentNode &&
								X.searchPseudoElements &&
								s(t.target.parentNode),
							'attributes' === t.type &&
								ia(t.target) &&
								~H.indexOf(t.attributeName) &&
								('class' === t.attributeName &&
								((e = t.target),
								(n = e.getAttribute ? e.getAttribute(C) : null),
								(e = e.getAttribute ? e.getAttribute(P) : null),
								n && e)
									? ((e = (a = Lt(Z(t.target))).prefix),
									  (a = a.iconName),
									  t.target.setAttribute(C, e || i),
									  a && t.target.setAttribute(P, a))
									: (a = t.target) &&
									  a.classList &&
									  a.classList.contains &&
									  a.classList.contains(X.replacementClass) &&
									  o(t.target));
					}));
			})),
			p &&
				da.observe(t, {
					childList: !0,
					attributes: !0,
					characterData: !0,
					subtree: !0,
				}));
	}
	function va(t) {
		var a = t.getAttribute('data-prefix'),
			e = t.getAttribute('data-icon'),
			n = void 0 !== t.innerText ? t.innerText.trim() : '',
			i = Lt(Z(t));
		return (
			i.prefix || (i.prefix = kt),
			a && e && ((i.prefix = a), (i.iconName = e)),
			(i.iconName && i.prefix) ||
				(i.prefix &&
					0 < n.length &&
					(i.iconName =
						((e = i.prefix),
						(n = t.innerText),
						(xt[e] || {})[n] || zt(i.prefix, bt(t.innerText))))),
			i
		);
	}
	function pa(t, a) {
		var e = 1 < arguments.length && void 0 !== a ? a : { styleParser: !0 },
			n = va(t),
			i = n.iconName,
			r = n.prefix,
			o = n.rest,
			s =
				((a = Q((s = t).attributes).reduce(function (t, a) {
					return (
						'class' !== t.name && 'style' !== t.name && (t[a.name] = a.value), t
					);
				}, {})),
				(n = s.getAttribute('title')),
				(s = s.getAttribute('data-fa-title-id')),
				X.autoA11y &&
					(n
						? (a['aria-labelledby'] = ''
								.concat(X.replacementClass, '-title-')
								.concat(s || J()))
						: ((a['aria-hidden'] = 'true'), (a.focusable = 'false'))),
				a),
			a = Dt('parseNodeAttributes', {}, t),
			c = e.styleParser
				? ((e = (c = t).getAttribute('style')),
				  (c = []),
				  (c = e
						? e.split(';').reduce(function (t, a) {
								var e = a.split(':'),
									a = e[0],
									e = e.slice(1);
								return a && 0 < e.length && (t[a] = e.join(':').trim()), t;
						  }, {})
						: c))
				: [];
		return k(
			{
				iconName: i,
				title: t.getAttribute('title'),
				titleId: t.getAttribute('data-fa-title-id'),
				prefix: r,
				transform: G,
				mask: { iconName: null, prefix: null, rest: [] },
				maskId: null,
				symbol: !1,
				extra: { classes: o, styles: c, attributes: s },
			},
			a
		);
	}
	var ga = ot.styles;
	function ha(t) {
		var a = 'nest' === X.autoReplaceSvg ? pa(t, { styleParser: !1 }) : pa(t);
		return ~a.extra.classes.indexOf(T)
			? Ht('generateLayersText', t, a)
			: Ht('generateSvgReplacementMutation', t, a);
	}
	function ya(t) {
		var n =
			1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
		if (!p) return Promise.resolve();
		function i(t) {
			return a.add(''.concat(S, '-').concat(t));
		}
		function r(t) {
			return a.remove(''.concat(S, '-').concat(t));
		}
		var a = h.documentElement.classList,
			e = X.autoFetchSvg ? Object.keys(M) : Object.keys(ga),
			o = ['.'.concat(T, ':not([').concat(A, '])')]
				.concat(
					e.map(function (t) {
						return '.'.concat(t, ':not([').concat(A, '])');
					})
				)
				.join(', ');
		if (0 === o.length) return Promise.resolve();
		e = [];
		try {
			e = Q(t.querySelectorAll(o));
		} catch (t) {}
		if (!(0 < e.length)) return Promise.resolve();
		i('pending'), r('complete');
		var s = ea.begin('onTree'),
			c = e.reduce(function (t, a) {
				try {
					var e = ha(a);
					e && t.push(e);
				} catch (t) {
					j || ('MissingIcon' === t.name && console.error(t));
				}
				return t;
			}, []);
		return new Promise(function (a, e) {
			Promise.all(c)
				.then(function (t) {
					fa(t, function () {
						i('active'),
							i('complete'),
							r('pending'),
							'function' == typeof n && n(),
							s(),
							a();
					});
				})
				.catch(function (t) {
					s(), e(t);
				});
		});
	}
	function ka(t) {
		var a =
			1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
		ha(t).then(function (t) {
			t && fa([t], a);
		});
	}
	function wa(t) {
		var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
			e = a.transform,
			n = void 0 === e ? G : e,
			i = void 0 !== (e = a.symbol) && e,
			r = void 0 === (e = a.mask) ? null : e,
			o = void 0 === (e = a.maskId) ? null : e,
			s = void 0 === (e = a.title) ? null : e,
			c = void 0 === (e = a.titleId) ? null : e,
			f = void 0 === (e = a.classes) ? [] : e,
			l = void 0 === (e = a.attributes) ? {} : e,
			u = void 0 === (e = a.styles) ? {} : e;
		if (t) {
			var m = t.prefix,
				d = t.iconName,
				b = t.icon;
			return Xt(k({ type: 'icon' }, t), function () {
				return (
					Ft('beforeDOMElementCreation', { iconDefinition: t, params: a }),
					X.autoA11y &&
						(s
							? (l['aria-labelledby'] = ''
									.concat(X.replacementClass, '-title-')
									.concat(c || J()))
							: ((l['aria-hidden'] = 'true'), (l.focusable = 'false'))),
					qt({
						icons: {
							main: Kt(b),
							mask: r
								? Kt(r.icon)
								: { found: !1, width: null, height: null, icon: {} },
						},
						prefix: m,
						iconName: d,
						transform: k(k({}, G), n),
						symbol: i,
						title: s,
						maskId: o,
						titleId: c,
						extra: { attributes: l, styles: u, classes: f },
					})
				);
			});
		}
	}
	var o = {
			mixout: function () {
				return {
					icon:
						((n = wa),
						function (t) {
							var a =
									1 < arguments.length && void 0 !== arguments[1]
										? arguments[1]
										: {},
								e = (t || {}).icon ? t : Wt(t || {}),
								t = (t = a.mask) && ((t || {}).icon ? t : Wt(t || {}));
							return n(e, k(k({}, a), {}, { mask: t }));
						}),
				};
				var n;
			},
			hooks: function () {
				return {
					mutationObserverCallbacks: function (t) {
						return (t.treeCallback = ya), (t.nodeCallback = ka), t;
					},
				};
			},
			provides: function (t) {
				(t.i2svg = function (t) {
					var a = t.node,
						t = t.callback;
					return ya(void 0 === a ? h : a, void 0 === t ? function () {} : t);
				}),
					(t.generateSvgReplacementMutation = function (n, t) {
						var i = t.iconName,
							r = t.title,
							o = t.titleId,
							s = t.prefix,
							c = t.transform,
							f = t.symbol,
							a = t.mask,
							l = t.maskId,
							u = t.extra;
						return new Promise(function (e, t) {
							Promise.all([
								Qt(i, s),
								a.iconName
									? Qt(a.iconName, a.prefix)
									: Promise.resolve({
											found: !1,
											width: 512,
											height: 512,
											icon: {},
									  }),
							])
								.then(function (t) {
									var a = m(t, 2),
										t = a[0],
										a = a[1];
									e([
										n,
										qt({
											icons: { main: t, mask: a },
											prefix: s,
											iconName: i,
											transform: c,
											symbol: f,
											maskId: l,
											title: r,
											titleId: o,
											extra: u,
											watchable: !0,
										}),
									]);
								})
								.catch(t);
						});
					}),
					(t.generateAbstractIcon = function (t) {
						var a,
							e = t.children,
							n = t.attributes,
							i = t.main,
							r = t.transform,
							t = tt(t.styles);
						return (
							0 < t.length && (n.style = t),
							at(r) &&
								(a = Ht('generateAbstractTransformGrouping', {
									main: i,
									transform: r,
									containerWidth: i.width,
									iconWidth: i.width,
								})),
							e.push(a || i.icon),
							{ children: e, attributes: n }
						);
					});
			},
		},
		s = {
			mixout: function () {
				return {
					layer: function (t) {
						var e =
								1 < arguments.length && void 0 !== arguments[1]
									? arguments[1]
									: {},
							a = e.classes,
							n = void 0 === a ? [] : a;
						return Xt({ type: 'layer' }, function () {
							Ft('beforeDOMElementCreation', { assembler: t, params: e });
							var a = [];
							return (
								t(function (t) {
									Array.isArray(t)
										? t.map(function (t) {
												a = a.concat(t.abstract);
										  })
										: (a = a.concat(t.abstract));
								}),
								[
									{
										tag: 'span',
										attributes: {
											class: [''.concat(X.familyPrefix, '-layers')]
												.concat(l(n))
												.join(' '),
										},
										children: a,
									},
								]
							);
						});
					},
				};
			},
		},
		c = {
			mixout: function () {
				return {
					counter: function (i) {
						var r =
								1 < arguments.length && void 0 !== arguments[1]
									? arguments[1]
									: {},
							t = r.title,
							o = void 0 === t ? null : t,
							t = r.classes,
							s = void 0 === t ? [] : t,
							t = r.attributes,
							c = void 0 === t ? {} : t,
							t = r.styles,
							f = void 0 === t ? {} : t;
						return Xt({ type: 'counter', content: i }, function () {
							return (
								Ft('beforeDOMElementCreation', { content: i, params: r }),
								(t = {
									content: i.toString(),
									title: o,
									extra: {
										attributes: c,
										styles: f,
										classes: [
											''.concat(X.familyPrefix, '-layers-counter'),
										].concat(l(s)),
									},
								}),
								(a = t.content),
								(e = t.title),
								(n = t.extra),
								(t = k(
									k(k({}, n.attributes), e ? { title: e } : {}),
									{},
									{ class: n.classes.join(' ') }
								)),
								0 < (n = tt(n.styles)).length && (t.style = n),
								(n = []).push({ tag: 'span', attributes: t, children: [a] }),
								e &&
									n.push({
										tag: 'span',
										attributes: { class: 'sr-only' },
										children: [e],
									}),
								n
							);
							var t, a, e, n;
						});
					},
				};
			},
		},
		u = {
			mixout: function () {
				return {
					text: function (t) {
						var a =
								1 < arguments.length && void 0 !== arguments[1]
									? arguments[1]
									: {},
							e = a.transform,
							n = void 0 === e ? G : e,
							e = a.title,
							i = void 0 === e ? null : e,
							e = a.classes,
							r = void 0 === e ? [] : e,
							e = a.attributes,
							o = void 0 === e ? {} : e,
							e = a.styles,
							s = void 0 === e ? {} : e;
						return Xt({ type: 'text', content: t }, function () {
							return (
								Ft('beforeDOMElementCreation', { content: t, params: a }),
								Vt({
									content: t,
									transform: k(k({}, G), n),
									title: i,
									extra: {
										attributes: o,
										styles: s,
										classes: [''.concat(X.familyPrefix, '-layers-text')].concat(
											l(r)
										),
									},
								})
							);
						});
					},
				};
			},
			provides: function (t) {
				t.generateLayersText = function (t, a) {
					var e,
						n = a.title,
						i = a.transform,
						r = a.extra,
						o = null,
						s = null;
					return (
						y &&
							((e = parseInt(getComputedStyle(t).fontSize, 10)),
							(o = (a = t.getBoundingClientRect()).width / e),
							(s = a.height / e)),
						X.autoA11y && !n && (r.attributes['aria-hidden'] = 'true'),
						Promise.resolve([
							t,
							Vt({
								content: t.innerHTML,
								width: o,
								height: s,
								transform: i,
								title: n,
								extra: r,
								watchable: !0,
							}),
						])
					);
				};
			},
		},
		xa = new RegExp('"', 'ug'),
		Aa = [1105920, 1112319];
	function Oa(b, v) {
		var p = ''.concat(N).concat(v.replace(':', '-'));
		return new Promise(function (e, t) {
			if (null !== b.getAttribute(p)) return e();
			var n,
				i,
				r,
				o,
				a,
				s,
				c,
				f = Q(b.children).filter(function (t) {
					return t.getAttribute(O) === v;
				})[0],
				l = g.getComputedStyle(b, v),
				u = l.getPropertyValue('font-family').match(D),
				m = l.getPropertyValue('font-weight'),
				d = l.getPropertyValue('content');
			if (f && !u) return b.removeChild(f), e();
			u && 'none' !== d && '' !== d
				? ((s = l.getPropertyValue('content')),
				  (n = ~[
						'Solid',
						'Regular',
						'Light',
						'Thin',
						'Duotone',
						'Brands',
						'Kit',
				  ].indexOf(u[2])
						? I[u[2].toLowerCase()]
						: F[m]),
				  (a = (d =
						((d = (a = s).replace(xa, '')),
						(l = 0),
						(s = (m = d).length),
						(c =
							55296 <= (a = m.charCodeAt(l)) &&
							a <= 56319 &&
							l + 1 < s &&
							56320 <= (c = m.charCodeAt(l + 1)) &&
							c <= 57343
								? 1024 * (a - 55296) + c - 56320 + 65536
								: a),
						(a = Aa[0] <= c && c <= Aa[1]),
						{
							value: bt((c = 2 === d.length && d[0] === d[1]) ? d[0] : d),
							isSecondary: a || c,
						})).value),
				  (c = d.isSecondary),
				  (d = u[0].startsWith('FontAwesome')),
				  (u = zt(n, a)),
				  (i = u),
				  d &&
						((a = Ot[(d = a)]),
						(d = zt('fas', d)),
						(d = a ||
							(d ? { prefix: 'fas', iconName: d } : null) || {
								prefix: null,
								iconName: null,
							}).iconName &&
							d.prefix &&
							((u = d.iconName), (n = d.prefix))),
				  !u || c || (f && f.getAttribute(C) === n && f.getAttribute(P) === i)
						? e()
						: (b.setAttribute(p, i),
						  f && b.removeChild(f),
						  ((o = (r = {
								iconName: null,
								title: null,
								titleId: null,
								prefix: null,
								transform: G,
								symbol: !1,
								mask: { iconName: null, prefix: null, rest: [] },
								maskId: null,
								extra: { classes: [], styles: {}, attributes: {} },
						  }).extra).attributes[O] = v),
						  Qt(u, n)
								.then(function (t) {
									var a = qt(
											k(
												k({}, r),
												{},
												{
													icons: { main: t, mask: Mt() },
													prefix: n,
													iconName: i,
													extra: o,
													watchable: !0,
												}
											)
										),
										t = h.createElement('svg');
									'::before' === v
										? b.insertBefore(t, b.firstChild)
										: b.appendChild(t),
										(t.outerHTML = a.map(lt).join('\n')),
										b.removeAttribute(p),
										e();
								})
								.catch(t)))
				: e();
		});
	}
	function Na(t) {
		return Promise.all([Oa(t, '::before'), Oa(t, '::after')]);
	}
	function Ca(t) {
		return !(
			t.parentNode === document.head ||
			~E.indexOf(t.tagName.toUpperCase()) ||
			t.getAttribute(O) ||
			(t.parentNode && 'svg' === t.parentNode.tagName)
		);
	}
	function Pa(i) {
		if (p)
			return new Promise(function (t, a) {
				var e = Q(i.querySelectorAll('*')).filter(Ca).map(Na),
					n = ea.begin('searchPseudoElements');
				ua(),
					Promise.all(e)
						.then(function () {
							n(), ma(), t();
						})
						.catch(function () {
							n(), ma(), a();
						});
			});
	}
	function Sa(t) {
		return t
			.toLowerCase()
			.split(' ')
			.reduce(
				function (t, a) {
					var e = a.toLowerCase().split('-'),
						a = e[0],
						n = e.slice(1).join('-');
					if (a && 'h' === n) return (t.flipX = !0), t;
					if (a && 'v' === n) return (t.flipY = !0), t;
					if (((n = parseFloat(n)), isNaN(n))) return t;
					switch (a) {
						case 'grow':
							t.size = t.size + n;
							break;
						case 'shrink':
							t.size = t.size - n;
							break;
						case 'left':
							t.x = t.x - n;
							break;
						case 'right':
							t.x = t.x + n;
							break;
						case 'up':
							t.y = t.y - n;
							break;
						case 'down':
							t.y = t.y + n;
							break;
						case 'rotate':
							t.rotate = t.rotate + n;
					}
					return t;
				},
				{ size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 }
			);
	}
	var za = !1,
		Ea = { x: 0, y: 0, width: '100%', height: '100%' };
	function ja(t) {
		return (
			t.attributes &&
				(t.attributes.fill ||
					!(1 < arguments.length && void 0 !== arguments[1]) ||
					arguments[1]) &&
				(t.attributes.fill = 'black'),
			t
		);
	}
	var Ma;
	(Ma = { mixoutsTo: _t }.mixoutsTo),
		(d = [
			f,
			o,
			s,
			c,
			u,
			{
				hooks: function () {
					return {
						mutationObserverCallbacks: function (t) {
							return (t.pseudoElementsCallback = Pa), t;
						},
					};
				},
				provides: function (t) {
					t.pseudoElements2svg = function (t) {
						t = t.node;
						X.searchPseudoElements && Pa(void 0 === t ? h : t);
					};
				},
			},
			{
				mixout: function () {
					return {
						dom: {
							unwatch: function () {
								ua(), (za = !0);
							},
						},
					};
				},
				hooks: function () {
					return {
						bootstrap: function () {
							ba(Dt('mutationObserverCallbacks', {}));
						},
						noAuto: function () {
							da && da.disconnect();
						},
						watch: function (t) {
							t = t.observeMutationsRoot;
							za
								? ma()
								: ba(
										Dt('mutationObserverCallbacks', { observeMutationsRoot: t })
								  );
						},
					};
				},
			},
			{
				mixout: function () {
					return { parse: { transform: Sa } };
				},
				hooks: function () {
					return {
						parseNodeAttributes: function (t, a) {
							a = a.getAttribute('data-fa-transform');
							return a && (t.transform = Sa(a)), t;
						},
					};
				},
				provides: function (t) {
					t.generateAbstractTransformGrouping = function (t) {
						var a = t.main,
							e = t.transform,
							n = t.containerWidth,
							i = t.iconWidth,
							r = { transform: 'translate('.concat(n / 2, ' 256)') },
							t = 'translate('.concat(32 * e.x, ', ').concat(32 * e.y, ') '),
							n = 'scale('
								.concat((e.size / 16) * (e.flipX ? -1 : 1), ', ')
								.concat((e.size / 16) * (e.flipY ? -1 : 1), ') '),
							e = 'rotate('.concat(e.rotate, ' 0 0)'),
							i = {
								outer: r,
								inner: {
									transform: ''.concat(t, ' ').concat(n, ' ').concat(e),
								},
								path: {
									transform: 'translate('.concat((i / 2) * -1, ' -256)'),
								},
							};
						return {
							tag: 'g',
							attributes: k({}, i.outer),
							children: [
								{
									tag: 'g',
									attributes: k({}, i.inner),
									children: [
										{
											tag: a.icon.tag,
											children: a.icon.children,
											attributes: k(k({}, a.icon.attributes), i.path),
										},
									],
								},
							],
						};
					};
				},
			},
			{
				hooks: function () {
					return {
						parseNodeAttributes: function (t, a) {
							var e = a.getAttribute('data-fa-mask'),
								e = e
									? Lt(
											e.split(' ').map(function (t) {
												return t.trim();
											})
									  )
									: Mt();
							return (
								e.prefix || (e.prefix = kt),
								(t.mask = e),
								(t.maskId = a.getAttribute('data-fa-mask-id')),
								t
							);
						},
					};
				},
				provides: function (t) {
					t.generateAbstractMask = function (t) {
						var a = t.children,
							e = t.attributes,
							n = t.main,
							i = t.mask,
							r = t.maskId,
							o = t.transform,
							s = n.width,
							c = n.icon,
							f = i.width,
							t = i.icon,
							o =
								((i = (n = { transform: o, containerWidth: f, iconWidth: s })
									.transform),
								(o = n.containerWidth),
								(f = n.iconWidth),
								(s = { transform: 'translate('.concat(o / 2, ' 256)') }),
								(n = 'translate('
									.concat(32 * i.x, ', ')
									.concat(32 * i.y, ') ')),
								(o = 'scale('
									.concat((i.size / 16) * (i.flipX ? -1 : 1), ', ')
									.concat((i.size / 16) * (i.flipY ? -1 : 1), ') ')),
								(i = 'rotate('.concat(i.rotate, ' 0 0)')),
								{
									outer: s,
									inner: {
										transform: ''.concat(n, ' ').concat(o, ' ').concat(i),
									},
									path: {
										transform: 'translate('.concat((f / 2) * -1, ' -256)'),
									},
								}),
							i = {
								tag: 'rect',
								attributes: k(k({}, Ea), {}, { fill: 'white' }),
							},
							f = c.children ? { children: c.children.map(ja) } : {},
							f = {
								tag: 'g',
								attributes: k({}, o.inner),
								children: [
									ja(
										k(
											{
												tag: c.tag,
												attributes: k(k({}, c.attributes), o.path),
											},
											f
										)
									),
								],
							},
							o = { tag: 'g', attributes: k({}, o.outer), children: [f] },
							f = 'mask-'.concat(r || J()),
							r = 'clip-'.concat(r || J()),
							o = {
								tag: 'mask',
								attributes: k(
									k({}, Ea),
									{},
									{
										id: f,
										maskUnits: 'userSpaceOnUse',
										maskContentUnits: 'userSpaceOnUse',
									}
								),
								children: [i, o],
							},
							o = {
								tag: 'defs',
								children: [
									{
										tag: 'clipPath',
										attributes: { id: r },
										children: 'g' === (t = t).tag ? t.children : [t],
									},
									o,
								],
							};
						return (
							a.push(o, {
								tag: 'rect',
								attributes: k(
									{
										fill: 'currentColor',
										'clip-path': 'url(#'.concat(r, ')'),
										mask: 'url(#'.concat(f, ')'),
									},
									Ea
								),
							}),
							{ children: a, attributes: e }
						);
					};
				},
			},
			{
				provides: function (t) {
					var r = !1;
					g.matchMedia &&
						(r = g.matchMedia('(prefers-reduced-motion: reduce)').matches),
						(t.missingIconAbstract = function () {
							var t = [],
								a = { fill: 'currentColor' },
								e = {
									attributeType: 'XML',
									repeatCount: 'indefinite',
									dur: '2s',
								};
							t.push({
								tag: 'path',
								attributes: k(
									k({}, a),
									{},
									{
										d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z',
									}
								),
							});
							var n = k(k({}, e), {}, { attributeName: 'opacity' }),
								i = {
									tag: 'circle',
									attributes: k(
										k({}, a),
										{},
										{ cx: '256', cy: '364', r: '28' }
									),
									children: [],
								};
							return (
								r ||
									i.children.push(
										{
											tag: 'animate',
											attributes: k(
												k({}, e),
												{},
												{ attributeName: 'r', values: '28;14;28;28;14;28;' }
											),
										},
										{
											tag: 'animate',
											attributes: k(k({}, n), {}, { values: '1;0;1;1;0;1;' }),
										}
									),
								t.push(i),
								t.push({
									tag: 'path',
									attributes: k(
										k({}, a),
										{},
										{
											opacity: '1',
											d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z',
										}
									),
									children: r
										? []
										: [
												{
													tag: 'animate',
													attributes: k(
														k({}, n),
														{},
														{ values: '1;0;0;0;0;1;' }
													),
												},
										  ],
								}),
								r ||
									t.push({
										tag: 'path',
										attributes: k(
											k({}, a),
											{},
											{
												opacity: '0',
												d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z',
											}
										),
										children: [
											{
												tag: 'animate',
												attributes: k(k({}, n), {}, { values: '0;0;1;1;0;0;' }),
											},
										],
									}),
								{ tag: 'g', attributes: { class: 'missing' }, children: t }
							);
						});
				},
			},
			{
				hooks: function () {
					return {
						parseNodeAttributes: function (t, a) {
							a = a.getAttribute('data-fa-symbol');
							return (t.symbol = null !== a && ('' === a || a)), t;
						},
					};
				},
			},
		]),
		(Yt = {}),
		Object.keys(Rt).forEach(function (t) {
			-1 === Tt.indexOf(t) && delete Rt[t];
		}),
		d.forEach(function (t) {
			var a,
				e = t.mixout ? t.mixout() : {};
			Object.keys(e).forEach(function (a) {
				'function' == typeof e[a] && (Ma[a] = e[a]),
					'object' === n(e[a]) &&
						Object.keys(e[a]).forEach(function (t) {
							Ma[a] || (Ma[a] = {}), (Ma[a][t] = e[a][t]);
						});
			}),
				t.hooks &&
					((a = t.hooks()),
					Object.keys(a).forEach(function (t) {
						Yt[t] || (Yt[t] = []), Yt[t].push(a[t]);
					})),
				t.provides && t.provides(Rt);
		}),
		(function (t) {
			try {
				for (
					var a = arguments.length, e = new Array(1 < a ? a - 1 : 0), n = 1;
					n < a;
					n++
				)
					e[n - 1] = arguments[n];
				t.apply(void 0, e);
			} catch (t) {
				if (!j) throw t;
			}
		})(function (t) {
			v &&
				(g.FontAwesome || (g.FontAwesome = _t),
				ft(function () {
					Bt(), Ft('bootstrap');
				})),
				(ot.hooks = k(
					k({}, ot.hooks),
					{},
					{
						addPack: function (t, a) {
							(ot.styles[t] = k(k({}, ot.styles[t] || {}), a)), St(), Bt();
						},
						addPacks: function (t) {
							t.forEach(function (t) {
								var a = m(t, 2),
									t = a[0],
									a = a[1];
								ot.styles[t] = k(k({}, ot.styles[t] || {}), a);
							}),
								St(),
								Bt();
						},
						addShims: function (t) {
							var a;
							(a = ot.shims).push.apply(a, l(t)), St(), Bt();
						},
					}
				));
		});
})();
