/*!
 * Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Commercial License)
 * Copyright 2022 Fonticons, Inc.
 */
var e;
(e = function () {
	'use strict';
	function t(t, e) {
		var n,
			o = Object.keys(t);
		return (
			Object.getOwnPropertySymbols &&
				((n = Object.getOwnPropertySymbols(t)),
				e &&
					(n = n.filter(function (e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable;
					})),
				o.push.apply(o, n)),
			o
		);
	}
	function c(o) {
		for (var e = 1; e < arguments.length; e++) {
			var r = null != arguments[e] ? arguments[e] : {};
			e % 2
				? t(Object(r), !0).forEach(function (e) {
						var t, n;
						(t = o),
							(e = r[(n = e)]),
							n in t
								? Object.defineProperty(t, n, {
										value: e,
										enumerable: !0,
										configurable: !0,
										writable: !0,
								  })
								: (t[n] = e);
				  })
				: Object.getOwnPropertyDescriptors
				? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r))
				: t(Object(r)).forEach(function (e) {
						Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(r, e));
				  });
		}
		return o;
	}
	function n(e) {
		return (n =
			'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
				? function (e) {
						return typeof e;
				  }
				: function (e) {
						return e &&
							'function' == typeof Symbol &&
							e.constructor === Symbol &&
							e !== Symbol.prototype
							? 'symbol'
							: typeof e;
				  })(e);
	}
	function o(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
		return o;
	}
	var e = {},
		r = {};
	try {
		'undefined' != typeof window && (e = window),
			'undefined' != typeof document && (r = document);
	} catch (e) {}
	function i() {
		u.removeEventListener('DOMContentLoaded', i),
			(p = 1),
			m.map(function (e) {
				return e();
			});
	}
	var a = (e.navigator || {}).userAgent,
		s = void 0 === a ? '' : a,
		f = e,
		u = r,
		l = !!f.document,
		d =
			!!u.documentElement &&
			!!u.head &&
			'function' == typeof u.addEventListener &&
			'function' == typeof u.createElement,
		m = (~s.indexOf('MSIE') || s.indexOf('Trident/'), []),
		p = !1;
	function g(e) {
		d && (p ? setTimeout(e, 0) : m.push(e));
	}
	d &&
		((p = (u.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
			u.readyState
		)) ||
			u.addEventListener('DOMContentLoaded', i));
	var h =
		'undefined' != typeof window
			? window
			: 'undefined' != typeof global
			? global
			: 'undefined' != typeof self
			? self
			: {};
	var y =
		((function (e) {
			function u(e, t) {
				var n = (65535 & e) + (65535 & t);
				return (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n);
			}
			function a(e, t, n, o, r, i) {
				return u(((i = u(u(t, e), u(o, i))) << r) | (i >>> (32 - r)), n);
			}
			function d(e, t, n, o, r, i, c) {
				return a((t & n) | (~t & o), e, t, r, i, c);
			}
			function m(e, t, n, o, r, i, c) {
				return a((t & o) | (n & ~o), e, t, r, i, c);
			}
			function p(e, t, n, o, r, i, c) {
				return a(t ^ n ^ o, e, t, r, i, c);
			}
			function g(e, t, n, o, r, i, c) {
				return a(n ^ (t | ~o), e, t, r, i, c);
			}
			function c(e, t) {
				var n, o, r, i;
				(e[t >> 5] |= 128 << t % 32), (e[14 + (((t + 64) >>> 9) << 4)] = t);
				for (
					var c = 1732584193,
						a = -271733879,
						s = -1732584194,
						l = 271733878,
						f = 0;
					f < e.length;
					f += 16
				)
					(c = d((n = c), (o = a), (r = s), (i = l), e[f], 7, -680876936)),
						(l = d(l, c, a, s, e[f + 1], 12, -389564586)),
						(s = d(s, l, c, a, e[f + 2], 17, 606105819)),
						(a = d(a, s, l, c, e[f + 3], 22, -1044525330)),
						(c = d(c, a, s, l, e[f + 4], 7, -176418897)),
						(l = d(l, c, a, s, e[f + 5], 12, 1200080426)),
						(s = d(s, l, c, a, e[f + 6], 17, -1473231341)),
						(a = d(a, s, l, c, e[f + 7], 22, -45705983)),
						(c = d(c, a, s, l, e[f + 8], 7, 1770035416)),
						(l = d(l, c, a, s, e[f + 9], 12, -1958414417)),
						(s = d(s, l, c, a, e[f + 10], 17, -42063)),
						(a = d(a, s, l, c, e[f + 11], 22, -1990404162)),
						(c = d(c, a, s, l, e[f + 12], 7, 1804603682)),
						(l = d(l, c, a, s, e[f + 13], 12, -40341101)),
						(s = d(s, l, c, a, e[f + 14], 17, -1502002290)),
						(c = m(
							c,
							(a = d(a, s, l, c, e[f + 15], 22, 1236535329)),
							s,
							l,
							e[f + 1],
							5,
							-165796510
						)),
						(l = m(l, c, a, s, e[f + 6], 9, -1069501632)),
						(s = m(s, l, c, a, e[f + 11], 14, 643717713)),
						(a = m(a, s, l, c, e[f], 20, -373897302)),
						(c = m(c, a, s, l, e[f + 5], 5, -701558691)),
						(l = m(l, c, a, s, e[f + 10], 9, 38016083)),
						(s = m(s, l, c, a, e[f + 15], 14, -660478335)),
						(a = m(a, s, l, c, e[f + 4], 20, -405537848)),
						(c = m(c, a, s, l, e[f + 9], 5, 568446438)),
						(l = m(l, c, a, s, e[f + 14], 9, -1019803690)),
						(s = m(s, l, c, a, e[f + 3], 14, -187363961)),
						(a = m(a, s, l, c, e[f + 8], 20, 1163531501)),
						(c = m(c, a, s, l, e[f + 13], 5, -1444681467)),
						(l = m(l, c, a, s, e[f + 2], 9, -51403784)),
						(s = m(s, l, c, a, e[f + 7], 14, 1735328473)),
						(c = p(
							c,
							(a = m(a, s, l, c, e[f + 12], 20, -1926607734)),
							s,
							l,
							e[f + 5],
							4,
							-378558
						)),
						(l = p(l, c, a, s, e[f + 8], 11, -2022574463)),
						(s = p(s, l, c, a, e[f + 11], 16, 1839030562)),
						(a = p(a, s, l, c, e[f + 14], 23, -35309556)),
						(c = p(c, a, s, l, e[f + 1], 4, -1530992060)),
						(l = p(l, c, a, s, e[f + 4], 11, 1272893353)),
						(s = p(s, l, c, a, e[f + 7], 16, -155497632)),
						(a = p(a, s, l, c, e[f + 10], 23, -1094730640)),
						(c = p(c, a, s, l, e[f + 13], 4, 681279174)),
						(l = p(l, c, a, s, e[f], 11, -358537222)),
						(s = p(s, l, c, a, e[f + 3], 16, -722521979)),
						(a = p(a, s, l, c, e[f + 6], 23, 76029189)),
						(c = p(c, a, s, l, e[f + 9], 4, -640364487)),
						(l = p(l, c, a, s, e[f + 12], 11, -421815835)),
						(s = p(s, l, c, a, e[f + 15], 16, 530742520)),
						(c = g(
							c,
							(a = p(a, s, l, c, e[f + 2], 23, -995338651)),
							s,
							l,
							e[f],
							6,
							-198630844
						)),
						(l = g(l, c, a, s, e[f + 7], 10, 1126891415)),
						(s = g(s, l, c, a, e[f + 14], 15, -1416354905)),
						(a = g(a, s, l, c, e[f + 5], 21, -57434055)),
						(c = g(c, a, s, l, e[f + 12], 6, 1700485571)),
						(l = g(l, c, a, s, e[f + 3], 10, -1894986606)),
						(s = g(s, l, c, a, e[f + 10], 15, -1051523)),
						(a = g(a, s, l, c, e[f + 1], 21, -2054922799)),
						(c = g(c, a, s, l, e[f + 8], 6, 1873313359)),
						(l = g(l, c, a, s, e[f + 15], 10, -30611744)),
						(s = g(s, l, c, a, e[f + 6], 15, -1560198380)),
						(a = g(a, s, l, c, e[f + 13], 21, 1309151649)),
						(c = g(c, a, s, l, e[f + 4], 6, -145523070)),
						(l = g(l, c, a, s, e[f + 11], 10, -1120210379)),
						(s = g(s, l, c, a, e[f + 2], 15, 718787259)),
						(a = g(a, s, l, c, e[f + 9], 21, -343485551)),
						(c = u(c, n)),
						(a = u(a, o)),
						(s = u(s, r)),
						(l = u(l, i));
				return [c, a, s, l];
			}
			function s(e) {
				for (var t = '', n = 32 * e.length, o = 0; o < n; o += 8)
					t += String.fromCharCode((e[o >> 5] >>> o % 32) & 255);
				return t;
			}
			function l(e) {
				var t = [];
				for (t[(e.length >> 2) - 1] = void 0, o = 0; o < t.length; o += 1)
					t[o] = 0;
				for (var n = 8 * e.length, o = 0; o < n; o += 8)
					t[o >> 5] |= (255 & e.charCodeAt(o / 8)) << o % 32;
				return t;
			}
			function o(e) {
				for (var t, n = '0123456789abcdef', o = '', r = 0; r < e.length; r += 1)
					(t = e.charCodeAt(r)),
						(o += n.charAt((t >>> 4) & 15) + n.charAt(15 & t));
				return o;
			}
			function n(e) {
				return unescape(encodeURIComponent(e));
			}
			function r(e) {
				return s(c(l((e = n(e))), 8 * e.length));
			}
			function i(e, t) {
				return (function (e, t) {
					var n,
						o = l(e),
						r = [],
						i = [];
					for (
						r[15] = i[15] = void 0,
							16 < o.length && (o = c(o, 8 * e.length)),
							n = 0;
						n < 16;
						n += 1
					)
						(r[n] = 909522486 ^ o[n]), (i[n] = 1549556828 ^ o[n]);
					return (
						(t = c(r.concat(l(t)), 512 + 8 * t.length)), s(c(i.concat(t), 640))
					);
				})(n(e), n(t));
			}
			function t(e, t, n) {
				return t ? (n ? i(t, e) : o(i(t, e))) : n ? r(e) : o(r(e));
			}
			var f;
			(f = h), e.exports ? (e.exports = t) : (f.md5 = t);
		})((M = { exports: {} })),
		M.exports);
	function b(e) {
		if (null !== e && 'object' === n(e))
			return e.src
				? y(e.src)
				: e.href
				? y(e.href)
				: e.innerText && '' !== e.innerText
				? y(e.innerText)
				: void 0;
	}
	var v = 'fa-kits-diag',
		w = 'fa-kits-node-under-test',
		A = 'data-md5',
		x = 'data-fa-detection-ignore',
		T = 'data-fa-detection-timeout',
		D = 'data-fa-detection-results-collection-max-wait',
		E = function (e) {
			e.preventDefault(), e.stopPropagation();
		};
	function O(e) {
		var t = e.fn,
			i =
				void 0 === t
					? function () {
							return !0;
					  }
					: t,
			t = e.initialDuration,
			n = void 0 === t ? 1 : t,
			t = e.maxDuration,
			c = void 0 === t ? f.FontAwesomeDetection.timeout : t,
			t = e.showProgress,
			a = void 0 !== t && t,
			s = e.progressIndicator;
		return new Promise(function (o, r) {
			!(function t(e, n) {
				setTimeout(function () {
					var e = i();
					a && console.info(s),
						e ? o(e) : (e = 250 + n) <= c ? t(250, e) : r('timeout');
				}, e);
			})(n, 0);
		});
	}
	function C(t) {
		for (
			var i = Array.from(u.scripts).filter(function (e) {
					return !e.hasAttribute(x) && e !== t;
				}),
				c = {},
				e = 0;
			e < i.length;
			e++
		)
			!(function (e) {
				var t = u.createElement('iframe');
				t.setAttribute('style', 'display:none;');
				var n = u.createElement('script');
				n.setAttribute('id', w);
				var o = b(i[e]);
				n.setAttribute(A, o),
					(c[o] = i[e]),
					'' !== i[e].src && (n.src = i[e].src),
					'' !== i[e].innerText && (n.innerText = i[e].innerText),
					(n.async = !0);
				var r = u.createElement('script');
				r.setAttribute('id', v);
				e = 'file://' === f.location.origin ? '*' : f.location.origin;
				(r.innerText = '('
					.concat(
						function (n, o, r) {
							parent.FontAwesomeDetection.__pollUntil({
								fn: function () {
									return (
										!!window.FontAwesomeConfig || !!window.FontAwesomeKitConfig
									);
								},
							})
								.then(function () {
									var e = document.getElementById(n);
									parent.postMessage(
										{
											type: 'fontawesome-conflict',
											technology: 'js',
											src: e.src,
											innerText: e.innerText,
											tagName: e.tagName,
											md5: o,
										},
										r
									);
								})
								.catch(function (e) {
									var t = document.getElementById(n);
									'timeout' === e
										? parent.postMessage(
												{
													type: 'no-conflict',
													src: t.src,
													innerText: t.innerText,
													tagName: t.tagName,
													md5: o,
												},
												r
										  )
										: console.error(e);
								});
						}.toString(),
						")('"
					)
					.concat(w, "', '")
					.concat(o, "', '")
					.concat(e, "');")),
					(t.onload = function () {
						t.contentWindow.addEventListener('error', E, !0),
							t.contentDocument.head.appendChild(r),
							t.contentDocument.head.appendChild(n);
					}),
					g(function () {
						return u.body.appendChild(t);
					});
			})(e);
		return c;
	}
	function F(e) {
		var t = e.nodesTested,
			e = e.nodesFound;
		(f.FontAwesomeDetection = f.FontAwesomeDetection || {}),
			(f.FontAwesomeDetection.nodesTested = t),
			(f.FontAwesomeDetection.nodesFound = e),
			(f.FontAwesomeDetection.detectionDone = !0);
	}
	function j(e) {
		var t = 0 < arguments.length && void 0 !== e ? e : function () {},
			n = { conflict: {}, noConflict: {} };
		f.onmessage = function (e) {
			('file://' !== f.location.origin && e.origin !== f.location.origin) ||
				(e &&
					e.data &&
					('fontawesome-conflict' === e.data.type
						? (n.conflict[e.data.md5] = e.data)
						: 'no-conflict' === e.data.type &&
						  (n.noConflict[e.data.md5] = e.data)));
		};
		var o = C(u.currentScript),
			e = (function () {
				var e = Array.from(u.getElementsByTagName('link')).filter(function (e) {
						return !e.hasAttribute(x);
					}),
					t = Array.from(u.getElementsByTagName('style')).filter(function (e) {
						return (
							!e.hasAttribute(x) &&
							(!f.FontAwesomeConfig ||
								!e.innerText.match(
									new RegExp(
										'svg:not\\(:root\\)\\.'.concat(
											f.FontAwesomeConfig.replacementClass
										)
									)
								))
						);
					});
				function n(e, t) {
					var n = u.createElement('iframe');
					n.setAttribute(
						'style',
						'visibility: hidden; position: absolute; height: 0; width: 0;'
					);
					var o = 'fa-test-icon-' + t,
						r = u.createElement('i');
					r.setAttribute('class', 'fa fa-coffee'), r.setAttribute('id', o);
					var i = u.createElement('script');
					i.setAttribute('id', v);
					var c = 'file://' === f.location.origin ? '*' : f.location.origin;
					(i.innerText = '('
						.concat(
							function (n, t, o, r) {
								parent.FontAwesomeDetection.__pollUntil({
									fn: function () {
										var e = document.getElementById(t),
											e = window
												.getComputedStyle(e)
												.getPropertyValue('font-family');
										return !(
											!e.match(/FontAwesome/) && !e.match(/Font Awesome [56]/)
										);
									},
								})
									.then(function () {
										var e = document.getElementById(n);
										parent.postMessage(
											{
												type: 'fontawesome-conflict',
												technology: 'webfont',
												href: e.href,
												innerText: e.innerText,
												tagName: e.tagName,
												md5: o,
											},
											r
										);
									})
									.catch(function (e) {
										var t = document.getElementById(n);
										'timeout' === e
											? parent.postMessage(
													{
														type: 'no-conflict',
														technology: 'webfont',
														href: t.src,
														innerText: t.innerText,
														tagName: t.tagName,
														md5: o,
													},
													r
											  )
											: console.error(e);
									});
							}.toString(),
							")('"
						)
						.concat(w, "', '")
						.concat(o || 'foo', "', '")
						.concat(t, "', '")
						.concat(c, "');")),
						(n.onload = function () {
							n.contentWindow.addEventListener('error', E, !0),
								n.contentDocument.head.appendChild(i),
								n.contentDocument.head.appendChild(e),
								n.contentDocument.body.appendChild(r);
						}),
						g(function () {
							return u.body.appendChild(n);
						});
				}
				for (var o = {}, r = 0; r < e.length; r++) {
					var i = u.createElement('link');
					i.setAttribute('id', w),
						i.setAttribute('href', e[r].href),
						i.setAttribute('rel', e[r].rel);
					var c = b(e[r]);
					i.setAttribute(A, c), (o[c] = e[r]), n(i, c);
				}
				for (var a = 0; a < t.length; a++) {
					var s = u.createElement('style');
					s.setAttribute('id', w);
					var l = b(t[a]);
					s.setAttribute(A, l),
						(s.innerText = t[a].innerText),
						(o[l] = t[a]),
						n(s, l);
				}
				return o;
			})(),
			r = c(c({}, o), e),
			i = Object.keys(o).length + Object.keys(e).length,
			e =
				f.FontAwesomeDetection.timeout +
				f.FontAwesomeDetection.resultsCollectionMaxWait;
		console.group('Font Awesome Detector'),
			0 === i
				? (console.info('%cAll Good!', 'color: green; font-size: large'),
				  console.info(
						"We didn't find anything that needs testing for conflicts. Ergo, no conflicts."
				  ))
				: (console.info('Testing '.concat(i, ' possible conflicts.')),
				  console.info(
						"We'll wait about ".concat(
							Math.round(f.FontAwesomeDetection.timeout / 10) / 100,
							' seconds while testing these and\n'
						) +
							'then up to another '.concat(
								Math.round(
									f.FontAwesomeDetection.resultsCollectionMaxWait / 10
								) / 100,
								' to allow the browser time\n'
							) +
							"to accumulate the results. But we'll probably be outta here way before then.\n\n"
				  ),
				  console.info(
						'You can adjust those durations by assigning values to these attributes on the <script> element that loads this detection:'
				  ),
				  console.info(
						'\t%c'.concat(
							T,
							"%c: milliseconds to wait for each test before deciding whether it's a conflict."
						),
						'font-weight: bold;',
						'font-size: normal;'
				  ),
				  console.info(
						'\t%c'.concat(
							D,
							'%c: milliseconds to wait for the browser to accumulate test results before giving up.'
						),
						'font-weight: bold;',
						'font-size: normal;'
				  ),
				  O({
						maxDuration: e,
						showProgress: !0,
						progressIndicator: 'waiting...',
						fn: function () {
							return (
								Object.keys(n.conflict).length +
									Object.keys(n.noConflict).length >=
								i
							);
						},
				  })
						.then(function () {
							console.info('DONE!'),
								F({ nodesTested: n, nodesFound: r }),
								t({ nodesTested: n, nodesFound: r }),
								console.groupEnd();
						})
						.catch(function (e) {
							'timeout' === e
								? console.info(
										"TIME OUT! We waited until we got tired. Here's what we found:"
								  )
								: (console.info('Whoops! We hit an error:', e),
								  console.info("Here's what we'd found up until that error:")),
								F({ nodesTested: n, nodesFound: r }),
								t({ nodesTested: n, nodesFound: r }),
								console.groupEnd();
						}));
	}
	var S = f.FontAwesomeDetection || {},
		N = c(
			c(
				c(
					{},
					{
						report: function (e) {
							var t,
								n = e.nodesTested,
								o = e.nodesFound,
								r = {};
							for (t in o) n.conflict[t] || n.noConflict[t] || (r[t] = o[t]);
							if (0 < (e = Object.keys(n.conflict).length)) {
								console.info(
									'%cConflict'.concat(1 < e ? 's' : '', ' found:'),
									'color: darkred; font-size: large'
								);
								var i,
									c = {};
								for (i in n.conflict) {
									var a = n.conflict[i];
									c[i] = {
										tagName: a.tagName,
										'src/href': a.src || a.href || 'n/a',
										'innerText excerpt':
											a.innerText && '' !== a.innerText
												? a.innerText.slice(0, 200) + '...'
												: '(empty)',
									};
								}
								console.table(c);
							}
							if (0 < (e = Object.keys(n.noConflict).length)) {
								console.info(
									'%cNo conflict'
										.concat(1 < e ? 's' : '', ' found with ')
										.concat(1 === e ? 'this' : 'these', ':'),
									'color: green; font-size: large'
								);
								var s,
									l = {};
								for (s in n.noConflict) {
									var f = n.noConflict[s];
									l[s] = {
										tagName: f.tagName,
										'src/href': f.src || f.href || 'n/a',
										'innerText excerpt':
											f.innerText && '' !== f.innerText
												? f.innerText.slice(0, 200) + '...'
												: '(empty)',
									};
								}
								console.table(l);
							}
							if (0 < (e = Object.keys(r).length)) {
								console.info(
									'%cLeftovers--we timed out before collecting test results for '.concat(
										1 === e ? 'this' : 'these',
										':'
									),
									'color: blue; font-size: large'
								);
								var u,
									d = {};
								for (u in r) {
									var m = r[u];
									d[u] = {
										tagName: m.tagName,
										'src/href': m.src || m.href || 'n/a',
										'innerText excerpt':
											m.innerText && '' !== m.innerText
												? m.innerText.slice(0, 200) + '...'
												: '(empty)',
									};
								}
								console.table(d);
							}
						},
						timeout: +(u.currentScript.getAttribute(T) || '2000'),
						resultsCollectionMaxWait: +(
							u.currentScript.getAttribute(D) || '5000'
						),
					}
				),
				S
			),
			{},
			{
				__pollUntil: O,
				md5ForNode: b,
				detectionDone: !1,
				nodesTested: null,
				nodesFound: null,
			}
		);
	f.FontAwesomeDetection = N;
	var k = (function () {
			try {
				return 'production' === process.env.NODE_ENV;
			} catch (e) {
				return !1;
			}
		})(),
		a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		e = a.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
		r = 'duotone-group',
		s = 'swap-opacity',
		M = 'primary',
		S = 'secondary';
	[]
		.concat(
			(function (e) {
				if (Array.isArray(e)) return o(e);
			})(
				(N = Object.keys({
					solid: 'fas',
					regular: 'far',
					light: 'fal',
					thin: 'fat',
					duotone: 'fad',
					brands: 'fab',
					kit: 'fak',
				}))
			) ||
				(function (e) {
					if (
						('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
						null != e['@@iterator']
					)
						return Array.from(e);
				})(N) ||
				(function (e, t) {
					if (e) {
						if ('string' == typeof e) return o(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						return 'Map' ===
							(n = 'Object' === n && e.constructor ? e.constructor.name : n) ||
							'Set' === n
							? Array.from(e)
							: 'Arguments' === n ||
							  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
							? o(e, t)
							: void 0;
					}
				})(N) ||
				(function () {
					throw new TypeError(
						'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
					);
				})(),
			[
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
				r,
				s,
				M,
				S,
			]
		)
		.concat(
			a.map(function (e) {
				return ''.concat(e, 'x');
			})
		)
		.concat(
			e.map(function (e) {
				return 'w-'.concat(e);
			})
		);
	!(function (e) {
		try {
			for (
				var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), o = 1;
				o < t;
				o++
			)
				n[o - 1] = arguments[o];
			e.apply(void 0, n);
		} catch (e) {
			if (!k) throw e;
		}
	})(function () {
		l && d && j(window.FontAwesomeDetection.report);
	});
}),
	('object' != typeof exports || 'undefined' == typeof module) &&
	'function' == typeof define &&
	define.amd
		? define(e)
		: e();
