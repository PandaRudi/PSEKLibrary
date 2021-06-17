try
{
	window._wpemojiSettings = {
		"baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/2.2.1\/72x72\/",
		"ext": ".png",
		"svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/2.2.1\/svg\/",
		"svgExt": ".svg"
	}
}
catch (e)
{
	console.log(e)
}
try
{
	var twemoji = function()
	{
		"use strict";
		var f = {
				base: "https://twemoji.maxcdn.com/v/13.0.1/",
				ext: ".png",
				size: "72x72",
				className: "emoji",
				convert:
				{
					fromCodePoint: function(d)
					{
						d = "string" == typeof d ? parseInt(d, 16) : d;
						if (d < 65536) return a(d);
						return a(55296 + ((d -= 65536) >> 10), 56320 + (1023 & d))
					},
					toCodePoint: i
				},
				onerror: function()
				{
					this.parentNode && this.parentNode.replaceChild(g(this.alt, !1), this)
				},
				parse: function(d, u)
				{
					u && "function" != typeof u || (u = {
						callback: u
					});
					return ("string" == typeof d ? function(d, b)
					{
						return o(d, function(d)
						{
							var u, f, c = d,
								e = x(d),
								a = b.callback(e, b);
							if (e && a)
							{
								for (f in c = "<img ".concat('class="', b.className, '" ', 'draggable="false" ', 'alt="', d, '"', ' src="', a, '"'), u = b.attributes(d, e)) u.hasOwnProperty(f) && 0 !== f.indexOf("on") && -1 === c.indexOf(" " + f + "=") && (c = c.concat(" ", f, '="', u[f].replace(t, n), '"'));
								c = c.concat("/>")
							}
							return c
						})
					} : function(d, u)
					{
						var f, c, e, a, b, t, n, r, o, i, s, l = function d(u, f)
							{
								var c, e, a = u.childNodes,
									b = a.length;
								for (; b--;) c = a[b], 3 === (e = c.nodeType) ? f.push(c) : 1 !== e || "ownerSVGElement" in c || h.test(c.nodeName.toLowerCase()) || d(c, f);
								return f
							}(d, []),
							p = l.length;
						for (; p--;)
						{
							for (e = !1, a = document.createDocumentFragment(), b = l[p], t = b.nodeValue, n = 0; i = m.exec(t);)
							{
								if ((s = i.index) !== n && a.appendChild(g(t.slice(n, s), !0)), o = i[0], i = x(o), n = s + o.length, s = u.callback(i, u), i && s)
								{
									for (c in (r = new Image).onerror = u.onerror, r.setAttribute("draggable", "false"), f = u.attributes(o, i)) f.hasOwnProperty(c) && 0 !== c.indexOf("on") && !r.hasAttribute(c) && r.setAttribute(c, f[c]);
									r.className = u.className, r.alt = o, r.src = s, e = !0, a.appendChild(r)
								}
								r || a.appendChild(g(o, !1)), r = null
							}
							e && (n < t.length && a.appendChild(g(t.slice(n), !0)), b.parentNode.replaceChild(a, b))
						}
						return d
					})(d,
					{
						callback: u.callback || b,
						attributes: "function" == typeof u.attributes ? u.attributes : r,
						base: ("string" == typeof u.base ? u : f).base,
						ext: u.ext || f.ext,
						size: u.folder || function(d)
						{
							return "number" == typeof d ? d + "x" + d : d
						}(u.size || f.size),
						className: u.className || f.className,
						onerror: u.onerror || f.onerror
					})
				},
				replace: o,
				test: function(d)
				{
					m.lastIndex = 0;
					d = m.test(d);
					return m.lastIndex = 0, d
				}
			},
			u = {
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				"'": "&#39;",
				'"': "&quot;"
			},
			m = /(?:\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d])|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[\xa9\xae\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udeeb\udeec\udef4-\udefc\udfe0-\udfeb]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78\udd7a-\uddb4\uddb7\uddba\uddbc-\uddcb\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7a\ude80-\ude86\ude90-\udea8\udeb0-\udeb6\udec0-\udec2\uded0-\uded6]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g,
			c = /\uFE0F/g,
			e = String.fromCharCode(8205),
			t = /[&<>'"]/g,
			h = /^(?:iframe|noframes|noscript|script|select|style|textarea)$/,
			a = String.fromCharCode;
		return f;

		function g(d, u)
		{
			return document.createTextNode(u ? d.replace(c, "") : d)
		}

		function b(d, u)
		{
			return "".concat(u.base, u.size, "/", d, u.ext)
		}

		function x(d)
		{
			return i(d.indexOf(e) < 0 ? d.replace(c, "") : d)
		}

		function n(d)
		{
			return u[d]
		}

		function r()
		{
			return null
		}

		function o(d, u)
		{
			return String(d).replace(m, u)
		}

		function i(d, u)
		{
			for (var f = [], c = 0, e = 0, a = 0; a < d.length;) c = d.charCodeAt(a++), e ? (f.push((65536 + (e - 55296 << 10) + (c - 56320)).toString(16)), e = 0) : 55296 <= c && c <= 56319 ? e = c : f.push(c.toString(16));
			return f.join(u || "-")
		}
	}();
	! function(c, l)
	{
		c.wp = c.wp ||
		{}, c.wp.emoji = new function()
		{
			var n, u, e = c.MutationObserver || c.WebKitMutationObserver || c.MozMutationObserver,
				a = c.document,
				t = !1,
				r = 0,
				o = 0 < c.navigator.userAgent.indexOf("Trident/7.0");

			function i()
			{
				return !a.implementation.hasFeature || a.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")
			}

			function s()
			{
				if (!t)
				{
					if (void 0 === c.twemoji) return 600 < r ? void 0 : (c.clearTimeout(u), u = c.setTimeout(s, 50), void r++);
					n = c.twemoji, t = !0, e && new e(function(u)
					{
						for (var e, t, n, a, r = u.length; r--;)
						{
							if (e = u[r].addedNodes, t = u[r].removedNodes, 1 === (n = e.length) && 1 === t.length && 3 === e[0].nodeType && "IMG" === t[0].nodeName && e[0].data === t[0].alt && "load-failed" === t[0].getAttribute("data-error")) return;
							for (; n--;)
							{
								if (3 === (a = e[n]).nodeType)
								{
									if (!a.parentNode) continue;
									if (o)
										for (; a.nextSibling && 3 === a.nextSibling.nodeType;) a.nodeValue = a.nodeValue + a.nextSibling.nodeValue, a.parentNode.removeChild(a.nextSibling);
									a = a.parentNode
								}!a || 1 !== a.nodeType || a.className && "string" == typeof a.className && -1 !== a.className.indexOf("wp-exclude-emoji") || d(a.textContent) && f(a)
							}
						}
					}).observe(a.body,
					{
						childList: !0,
						subtree: !0
					}), f(a.body)
				}
			}

			function d(u)
			{
				return !!u && (/[\uDC00-\uDFFF]/.test(u) || /[\u203C\u2049\u20E3\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2300\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638\u2639\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692\u2693\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753\u2754\u2755\u2757\u2763\u2764\u2795\u2796\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05\u2B06\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]/.test(u))
			}

			function f(u, e)
			{
				var t;
				return !l.supports.everything && n && u && ("string" == typeof u || u.childNodes && u.childNodes.length) ? (e = e ||
				{}, t = {
					base: i() ? l.svgUrl : l.baseUrl,
					ext: i() ? l.svgExt : l.ext,
					className: e.className || "emoji",
					callback: function(u, e)
					{
						switch (u)
						{
							case "a9":
							case "ae":
							case "2122":
							case "2194":
							case "2660":
							case "2663":
							case "2665":
							case "2666":
								return !1
						}
						return !(l.supports.everythingExceptFlag && !/^1f1(?:e[6-9a-f]|f[0-9a-f])-1f1(?:e[6-9a-f]|f[0-9a-f])$/.test(u) && !/^(1f3f3-fe0f-200d-1f308|1f3f4-200d-2620-fe0f)$/.test(u)) && "".concat(e.base, u, e.ext)
					},
					attributes: function()
					{
						return {
							role: "img"
						}
					},
					onerror: function()
					{
						n.parentNode && (this.setAttribute("data-error", "load-failed"), n.parentNode.replaceChild(a.createTextNode(n.alt), n))
					}
				}, "object" == typeof e.imgAttr && (t.attributes = function()
				{
					return e.imgAttr
				}), n.parse(u, t)) : u
			}
			return l && (l.DOMReady ? s() : l.readyCallback = s),
			{
				parse: f,
				test: d
			}
		}
	}(window, window._wpemojiSettings);
}
catch (e)
{
	console.log(e)
}
try
{
	/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
	! function(e, t)
	{
		"use strict";
		"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e)
		{
			if (!e.document) throw new Error("jQuery requires a window with a document");
			return t(e)
		} : t(e)
	}("undefined" != typeof window ? window : this, function(C, e)
	{
		"use strict";
		var t = [],
			r = Object.getPrototypeOf,
			s = t.slice,
			g = t.flat ? function(e)
			{
				return t.flat.call(e)
			} : function(e)
			{
				return t.concat.apply([], e)
			},
			u = t.push,
			i = t.indexOf,
			n = {},
			o = n.toString,
			v = n.hasOwnProperty,
			a = v.toString,
			l = a.call(Object),
			y = {},
			m = function(e)
			{
				return "function" == typeof e && "number" != typeof e.nodeType
			},
			x = function(e)
			{
				return null != e && e === e.window
			},
			E = C.document,
			c = {
				type: !0,
				src: !0,
				nonce: !0,
				noModule: !0
			};

		function b(e, t, n)
		{
			var r, i, o = (n = n || E).createElement("script");
			if (o.text = e, t)
				for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
			n.head.appendChild(o).parentNode.removeChild(o)
		}

		function w(e)
		{
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
		}
		var f = "3.5.1",
			S = function(e, t)
			{
				return new S.fn.init(e, t)
			};

		function p(e)
		{
			var t = !!e && "length" in e && e.length,
				n = w(e);
			return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
		}
		S.fn = S.prototype = {
			jquery: f,
			constructor: S,
			length: 0,
			toArray: function()
			{
				return s.call(this)
			},
			get: function(e)
			{
				return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
			},
			pushStack: function(e)
			{
				var t = S.merge(this.constructor(), e);
				return t.prevObject = this, t
			},
			each: function(e)
			{
				return S.each(this, e)
			},
			map: function(n)
			{
				return this.pushStack(S.map(this, function(e, t)
				{
					return n.call(e, t, e)
				}))
			},
			slice: function()
			{
				return this.pushStack(s.apply(this, arguments))
			},
			first: function()
			{
				return this.eq(0)
			},
			last: function()
			{
				return this.eq(-1)
			},
			even: function()
			{
				return this.pushStack(S.grep(this, function(e, t)
				{
					return (t + 1) % 2
				}))
			},
			odd: function()
			{
				return this.pushStack(S.grep(this, function(e, t)
				{
					return t % 2
				}))
			},
			eq: function(e)
			{
				var t = this.length,
					n = +e + (e < 0 ? t : 0);
				return this.pushStack(0 <= n && n < t ? [this[n]] : [])
			},
			end: function()
			{
				return this.prevObject || this.constructor()
			},
			push: u,
			sort: t.sort,
			splice: t.splice
		}, S.extend = S.fn.extend = function()
		{
			var e, t, n, r, i, o, a = arguments[0] ||
				{},
				s = 1,
				u = arguments.length,
				l = !1;
			for ("boolean" == typeof a && (l = a, a = arguments[s] ||
				{}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
				if (null != (e = arguments[s]))
					for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n :
					{}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
			return a
		}, S.extend(
		{
			expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
			isReady: !0,
			error: function(e)
			{
				throw new Error(e)
			},
			noop: function() {},
			isPlainObject: function(e)
			{
				var t, n;
				return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
			},
			isEmptyObject: function(e)
			{
				var t;
				for (t in e) return !1;
				return !0
			},
			globalEval: function(e, t, n)
			{
				b(e,
				{
					nonce: t && t.nonce
				}, n)
			},
			each: function(e, t)
			{
				var n, r = 0;
				if (p(e))
				{
					for (n = e.length; r < n; r++)
						if (!1 === t.call(e[r], r, e[r])) break
				}
				else
					for (r in e)
						if (!1 === t.call(e[r], r, e[r])) break; return e
			},
			makeArray: function(e, t)
			{
				var n = t || [];
				return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
			},
			inArray: function(e, t, n)
			{
				return null == t ? -1 : i.call(t, e, n)
			},
			merge: function(e, t)
			{
				for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
				return e.length = i, e
			},
			grep: function(e, t, n)
			{
				for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
				return r
			},
			map: function(e, t, n)
			{
				var r, i, o = 0,
					a = [];
				if (p(e))
					for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
				else
					for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
				return g(a)
			},
			guid: 1,
			support: y
		}), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t)
		{
			n["[object " + t + "]"] = t.toLowerCase()
		});
		var d = function(n)
		{
			var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date,
				p = n.document,
				k = 0,
				r = 0,
				m = ue(),
				x = ue(),
				A = ue(),
				N = ue(),
				D = function(e, t)
				{
					return e === t && (l = !0), 0
				},
				j = {}.hasOwnProperty,
				t = [],
				q = t.pop,
				L = t.push,
				H = t.push,
				O = t.slice,
				P = function(e, t)
				{
					for (var n = 0, r = e.length; n < r; n++)
						if (e[n] === t) return n;
					return -1
				},
				R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				M = "[\\x20\\t\\r\\n\\f]",
				I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
				W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
				F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
				B = new RegExp(M + "+", "g"),
				$ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
				_ = new RegExp("^" + M + "*," + M + "*"),
				z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
				U = new RegExp(M + "|>"),
				X = new RegExp(F),
				V = new RegExp("^" + I + "$"),
				G = {
					ID: new RegExp("^#(" + I + ")"),
					CLASS: new RegExp("^\\.(" + I + ")"),
					TAG: new RegExp("^(" + I + "|[*])"),
					ATTR: new RegExp("^" + W),
					PSEUDO: new RegExp("^" + F),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + R + ")$", "i"),
					needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
				},
				Y = /HTML$/i,
				Q = /^(?:input|select|textarea|button)$/i,
				J = /^h\d$/i,
				K = /^[^{]+\{\s*\[native \w/,
				Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				ee = /[+~]/,
				te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
				ne = function(e, t)
				{
					var n = "0x" + e.slice(1) - 65536;
					return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
				},
				re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
				ie = function(e, t)
				{
					return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
				},
				oe = function()
				{
					T()
				},
				ae = be(function(e)
				{
					return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
				},
				{
					dir: "parentNode",
					next: "legend"
				});
			try
			{
				H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType
			}
			catch (e)
			{
				H = {
					apply: t.length ? function(e, t)
					{
						L.apply(e, O.call(t))
					} : function(e, t)
					{
						var n = e.length,
							r = 0;
						while (e[n++] = t[r++]);
						e.length = n - 1
					}
				}
			}

			function se(t, e, n, r)
			{
				var i, o, a, s, u, l, c, f = e && e.ownerDocument,
					p = e ? e.nodeType : 9;
				if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
				if (!r && (T(e), e = e || C, E))
				{
					if (11 !== p && (u = Z.exec(t)))
						if (i = u[1])
						{
							if (9 === p)
							{
								if (!(a = e.getElementById(i))) return n;
								if (a.id === i) return n.push(a), n
							}
							else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
						}
						else
						{
							if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
							if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
						}
					if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase()))
					{
						if (c = t, f = e, 1 === p && (U.test(t) || z.test(t)))
						{
							(f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;
							while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
							c = l.join(",")
						}
						try
						{
							return H.apply(n, f.querySelectorAll(c)), n
						}
						catch (e)
						{
							N(t, !0)
						}
						finally
						{
							s === S && e.removeAttribute("id")
						}
					}
				}
				return g(t.replace($, "$1"), e, n, r)
			}

			function ue()
			{
				var r = [];
				return function e(t, n)
				{
					return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
				}
			}

			function le(e)
			{
				return e[S] = !0, e
			}

			function ce(e)
			{
				var t = C.createElement("fieldset");
				try
				{
					return !!e(t)
				}
				catch (e)
				{
					return !1
				}
				finally
				{
					t.parentNode && t.parentNode.removeChild(t), t = null
				}
			}

			function fe(e, t)
			{
				var n = e.split("|"),
					r = n.length;
				while (r--) b.attrHandle[n[r]] = t
			}

			function pe(e, t)
			{
				var n = t && e,
					r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
				if (r) return r;
				if (n)
					while (n = n.nextSibling)
						if (n === t) return -1;
				return e ? 1 : -1
			}

			function de(t)
			{
				return function(e)
				{
					return "input" === e.nodeName.toLowerCase() && e.type === t
				}
			}

			function he(n)
			{
				return function(e)
				{
					var t = e.nodeName.toLowerCase();
					return ("input" === t || "button" === t) && e.type === n
				}
			}

			function ge(t)
			{
				return function(e)
				{
					return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
				}
			}

			function ve(a)
			{
				return le(function(o)
				{
					return o = +o, le(function(e, t)
					{
						var n, r = a([], e.length, o),
							i = r.length;
						while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
					})
				})
			}

			function ye(e)
			{
				return e && "undefined" != typeof e.getElementsByTagName && e
			}
			for (e in d = se.support = {}, i = se.isXML = function(e)
				{
					var t = e.namespaceURI,
						n = (e.ownerDocument || e).documentElement;
					return !Y.test(t || n && n.nodeName || "HTML")
				}, T = se.setDocument = function(e)
				{
					var t, n, r = e ? e.ownerDocument || e : p;
					return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function(e)
					{
						return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
					}), d.attributes = ce(function(e)
					{
						return e.className = "i", !e.getAttribute("className")
					}), d.getElementsByTagName = ce(function(e)
					{
						return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
					}), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function(e)
					{
						return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length
					}), d.getById ? (b.filter.ID = function(e)
					{
						var t = e.replace(te, ne);
						return function(e)
						{
							return e.getAttribute("id") === t
						}
					}, b.find.ID = function(e, t)
					{
						if ("undefined" != typeof t.getElementById && E)
						{
							var n = t.getElementById(e);
							return n ? [n] : []
						}
					}) : (b.filter.ID = function(e)
					{
						var n = e.replace(te, ne);
						return function(e)
						{
							var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
							return t && t.value === n
						}
					}, b.find.ID = function(e, t)
					{
						if ("undefined" != typeof t.getElementById && E)
						{
							var n, r, i, o = t.getElementById(e);
							if (o)
							{
								if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
								i = t.getElementsByName(e), r = 0;
								while (o = i[r++])
									if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
							}
							return []
						}
					}), b.find.TAG = d.getElementsByTagName ? function(e, t)
					{
						return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
					} : function(e, t)
					{
						var n, r = [],
							i = 0,
							o = t.getElementsByTagName(e);
						if ("*" === e)
						{
							while (n = o[i++]) 1 === n.nodeType && r.push(n);
							return r
						}
						return o
					}, b.find.CLASS = d.getElementsByClassName && function(e, t)
					{
						if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
					}, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e)
					{
						var t;
						a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
					}), ce(function(e)
					{
						e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
						var t = C.createElement("input");
						t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
					})), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e)
					{
						d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F)
					}), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function(e, t)
					{
						var n = 9 === e.nodeType ? e.documentElement : e,
							r = t && t.parentNode;
						return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
					} : function(e, t)
					{
						if (t)
							while (t = t.parentNode)
								if (t === e) return !0;
						return !1
					}, D = t ? function(e, t)
					{
						if (e === t) return l = !0, 0;
						var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
						return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
					} : function(e, t)
					{
						if (e === t) return l = !0, 0;
						var n, r = 0,
							i = e.parentNode,
							o = t.parentNode,
							a = [e],
							s = [t];
						if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
						if (i === o) return pe(e, t);
						n = e;
						while (n = n.parentNode) a.unshift(n);
						n = t;
						while (n = n.parentNode) s.unshift(n);
						while (a[r] === s[r]) r++;
						return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
					}), C
				}, se.matches = function(e, t)
				{
					return se(e, null, null, t)
				}, se.matchesSelector = function(e, t)
				{
					if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try
					{
						var n = c.call(e, t);
						if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
					}
					catch (e)
					{
						N(t, !0)
					}
					return 0 < se(t, C, null, [e]).length
				}, se.contains = function(e, t)
				{
					return (e.ownerDocument || e) != C && T(e), y(e, t)
				}, se.attr = function(e, t)
				{
					(e.ownerDocument || e) != C && T(e);
					var n = b.attrHandle[t.toLowerCase()],
						r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
					return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
				}, se.escape = function(e)
				{
					return (e + "").replace(re, ie)
				}, se.error = function(e)
				{
					throw new Error("Syntax error, unrecognized expression: " + e)
				}, se.uniqueSort = function(e)
				{
					var t, n = [],
						r = 0,
						i = 0;
					if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l)
					{
						while (t = e[i++]) t === e[i] && (r = n.push(i));
						while (r--) e.splice(n[r], 1)
					}
					return u = null, e
				}, o = se.getText = function(e)
				{
					var t, n = "",
						r = 0,
						i = e.nodeType;
					if (i)
					{
						if (1 === i || 9 === i || 11 === i)
						{
							if ("string" == typeof e.textContent) return e.textContent;
							for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
						}
						else if (3 === i || 4 === i) return e.nodeValue
					}
					else
						while (t = e[r++]) n += o(t);
					return n
				}, (b = se.selectors = {
					cacheLength: 50,
					createPseudo: le,
					match: G,
					attrHandle:
					{},
					find:
					{},
					relative:
					{
						">":
						{
							dir: "parentNode",
							first: !0
						},
						" ":
						{
							dir: "parentNode"
						},
						"+":
						{
							dir: "previousSibling",
							first: !0
						},
						"~":
						{
							dir: "previousSibling"
						}
					},
					preFilter:
					{
						ATTR: function(e)
						{
							return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
						},
						CHILD: function(e)
						{
							return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
						},
						PSEUDO: function(e)
						{
							var t, n = !e[6] && e[2];
							return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
						}
					},
					filter:
					{
						TAG: function(e)
						{
							var t = e.replace(te, ne).toLowerCase();
							return "*" === e ? function()
							{
								return !0
							} : function(e)
							{
								return e.nodeName && e.nodeName.toLowerCase() === t
							}
						},
						CLASS: function(e)
						{
							var t = m[e + " "];
							return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e)
							{
								return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
							})
						},
						ATTR: function(n, r, i)
						{
							return function(e)
							{
								var t = se.attr(e, n);
								return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
							}
						},
						CHILD: function(h, e, t, g, v)
						{
							var y = "nth" !== h.slice(0, 3),
								m = "last" !== h.slice(-4),
								x = "of-type" === e;
							return 1 === g && 0 === v ? function(e)
							{
								return !!e.parentNode
							} : function(e, t, n)
							{
								var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
									c = e.parentNode,
									f = x && e.nodeName.toLowerCase(),
									p = !n && !x,
									d = !1;
								if (c)
								{
									if (y)
									{
										while (l)
										{
											a = e;
											while (a = a[l])
												if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
											u = l = "only" === h && !u && "nextSibling"
										}
										return !0
									}
									if (u = [m ? c.firstChild : c.lastChild], m && p)
									{
										d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
										while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
											if (1 === a.nodeType && ++d && a === e)
											{
												i[h] = [k, s, d];
												break
											}
									}
									else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d)
										while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
											if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
									return (d -= v) === g || d % g == 0 && 0 <= d / g
								}
							}
						},
						PSEUDO: function(e, o)
						{
							var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
							return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t)
							{
								var n, r = a(e, o),
									i = r.length;
								while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
							}) : function(e)
							{
								return a(e, 0, t)
							}) : a
						}
					},
					pseudos:
					{
						not: le(function(e)
						{
							var r = [],
								i = [],
								s = f(e.replace($, "$1"));
							return s[S] ? le(function(e, t, n, r)
							{
								var i, o = s(e, null, r, []),
									a = e.length;
								while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
							}) : function(e, t, n)
							{
								return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
							}
						}),
						has: le(function(t)
						{
							return function(e)
							{
								return 0 < se(t, e).length
							}
						}),
						contains: le(function(t)
						{
							return t = t.replace(te, ne),
								function(e)
								{
									return -1 < (e.textContent || o(e)).indexOf(t)
								}
						}),
						lang: le(function(n)
						{
							return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
								function(e)
								{
									var t;
									do {
										if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
									} while ((e = e.parentNode) && 1 === e.nodeType);
									return !1
								}
						}),
						target: function(e)
						{
							var t = n.location && n.location.hash;
							return t && t.slice(1) === e.id
						},
						root: function(e)
						{
							return e === a
						},
						focus: function(e)
						{
							return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
						},
						enabled: ge(!1),
						disabled: ge(!0),
						checked: function(e)
						{
							var t = e.nodeName.toLowerCase();
							return "input" === t && !!e.checked || "option" === t && !!e.selected
						},
						selected: function(e)
						{
							return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
						},
						empty: function(e)
						{
							for (e = e.firstChild; e; e = e.nextSibling)
								if (e.nodeType < 6) return !1;
							return !0
						},
						parent: function(e)
						{
							return !b.pseudos.empty(e)
						},
						header: function(e)
						{
							return J.test(e.nodeName)
						},
						input: function(e)
						{
							return Q.test(e.nodeName)
						},
						button: function(e)
						{
							var t = e.nodeName.toLowerCase();
							return "input" === t && "button" === e.type || "button" === t
						},
						text: function(e)
						{
							var t;
							return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
						},
						first: ve(function()
						{
							return [0]
						}),
						last: ve(function(e, t)
						{
							return [t - 1]
						}),
						eq: ve(function(e, t, n)
						{
							return [n < 0 ? n + t : n]
						}),
						even: ve(function(e, t)
						{
							for (var n = 0; n < t; n += 2) e.push(n);
							return e
						}),
						odd: ve(function(e, t)
						{
							for (var n = 1; n < t; n += 2) e.push(n);
							return e
						}),
						lt: ve(function(e, t, n)
						{
							for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
							return e
						}),
						gt: ve(function(e, t, n)
						{
							for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
							return e
						})
					}
				}).pseudos.nth = b.pseudos.eq,
				{
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) b.pseudos[e] = de(e);
			for (e in
				{
					submit: !0,
					reset: !0
				}) b.pseudos[e] = he(e);

			function me()
			{}

			function xe(e)
			{
				for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
				return r
			}

			function be(s, e, t)
			{
				var u = e.dir,
					l = e.next,
					c = l || u,
					f = t && "parentNode" === c,
					p = r++;
				return e.first ? function(e, t, n)
				{
					while (e = e[u])
						if (1 === e.nodeType || f) return s(e, t, n);
					return !1
				} : function(e, t, n)
				{
					var r, i, o, a = [k, p];
					if (n)
					{
						while (e = e[u])
							if ((1 === e.nodeType || f) && s(e, t, n)) return !0
					}
					else
						while (e = e[u])
							if (1 === e.nodeType || f)
								if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
								else
								{
									if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
									if ((i[c] = a)[2] = s(e, t, n)) return !0
								} return !1
				}
			}

			function we(i)
			{
				return 1 < i.length ? function(e, t, n)
				{
					var r = i.length;
					while (r--)
						if (!i[r](e, t, n)) return !1;
					return !0
				} : i[0]
			}

			function Te(e, t, n, r, i)
			{
				for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
				return a
			}

			function Ce(d, h, g, v, y, e)
			{
				return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function(e, t, n, r)
				{
					var i, o, a, s = [],
						u = [],
						l = t.length,
						c = e || function(e, t, n)
						{
							for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
							return n
						}(h || "*", n.nodeType ? [n] : n, []),
						f = !d || !e && h ? c : Te(c, s, d, n, r),
						p = g ? y || (e ? d : l || v) ? [] : t : f;
					if (g && g(f, p, n, r), v)
					{
						i = Te(p, u), v(i, [], n, r), o = i.length;
						while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
					}
					if (e)
					{
						if (y || d)
						{
							if (y)
							{
								i = [], o = p.length;
								while (o--)(a = p[o]) && i.push(f[o] = a);
								y(null, p = [], i, r)
							}
							o = p.length;
							while (o--)(a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
						}
					}
					else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
				})
			}

			function Ee(e)
			{
				for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e)
					{
						return e === i
					}, a, !0), l = be(function(e)
					{
						return -1 < P(i, e)
					}, a, !0), c = [function(e, t, n)
					{
						var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
						return i = null, r
					}]; s < r; s++)
					if (t = b.relative[e[s].type]) c = [be(we(c), t)];
					else
					{
						if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S])
						{
							for (n = ++s; n < r; n++)
								if (b.relative[e[n].type]) break;
							return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat(
							{
								value: " " === e[s - 2].type ? "*" : ""
							})).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
						}
						c.push(t)
					}
				return we(c)
			}
			return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function(e, t)
			{
				var n, r, i, o, a, s, u, l = x[e + " "];
				if (l) return t ? 0 : l.slice(0);
				a = e, s = [], u = b.preFilter;
				while (a)
				{
					for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push(
						{
							value: n,
							type: r[0].replace($, " ")
						}), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push(
					{
						value: n,
						type: o,
						matches: r
					}), a = a.slice(n.length));
					if (!n) break
				}
				return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
			}, f = se.compile = function(e, t)
			{
				var n, v, y, m, x, r, i = [],
					o = [],
					a = A[e + " "];
				if (!a)
				{
					t || (t = h(e)), n = t.length;
					while (n--)(a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
					(a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function(e, t, n, r, i)
					{
						var o, a, s, u = 0,
							l = "0",
							c = e && [],
							f = [],
							p = w,
							d = e || x && b.find.TAG("*", i),
							h = k += null == p ? 1 : Math.random() || .1,
							g = d.length;
						for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++)
						{
							if (x && o)
							{
								a = 0, t || o.ownerDocument == C || (T(o), n = !E);
								while (s = v[a++])
									if (s(o, t || C, n))
									{
										r.push(o);
										break
									}
								i && (k = h)
							}
							m && ((o = !s && o) && u--, e && c.push(o))
						}
						if (u += l, m && l !== u)
						{
							a = 0;
							while (s = y[a++]) s(c, f, t, n);
							if (e)
							{
								if (0 < u)
									while (l--) c[l] || f[l] || (f[l] = q.call(r));
								f = Te(f)
							}
							H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
						}
						return i && (k = h, w = p), c
					}, m ? le(r) : r))).selector = e
				}
				return a
			}, g = se.select = function(e, t, n, r)
			{
				var i, o, a, s, u, l = "function" == typeof e && e,
					c = !r && h(e = l.selector || e);
				if (n = n || [], 1 === c.length)
				{
					if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type])
					{
						if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
						l && (t = t.parentNode), e = e.slice(o.shift().value.length)
					}
					i = G.needsContext.test(e) ? 0 : o.length;
					while (i--)
					{
						if (a = o[i], b.relative[s = a.type]) break;
						if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t)))
						{
							if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
							break
						}
					}
				}
				return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
			}, d.sortStable = S.split("").sort(D).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function(e)
			{
				return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
			}), ce(function(e)
			{
				return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
			}) || fe("type|href|height|width", function(e, t, n)
			{
				if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
			}), d.attributes && ce(function(e)
			{
				return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
			}) || fe("value", function(e, t, n)
			{
				if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
			}), ce(function(e)
			{
				return null == e.getAttribute("disabled")
			}) || fe(R, function(e, t, n)
			{
				var r;
				if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
			}), se
		}(C);
		S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
		var h = function(e, t, n)
			{
				var r = [],
					i = void 0 !== n;
				while ((e = e[t]) && 9 !== e.nodeType)
					if (1 === e.nodeType)
					{
						if (i && S(e).is(n)) break;
						r.push(e)
					}
				return r
			},
			T = function(e, t)
			{
				for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
				return n
			},
			k = S.expr.match.needsContext;

		function A(e, t)
		{
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		}
		var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

		function D(e, n, r)
		{
			return m(n) ? S.grep(e, function(e, t)
			{
				return !!n.call(e, t, e) !== r
			}) : n.nodeType ? S.grep(e, function(e)
			{
				return e === n !== r
			}) : "string" != typeof n ? S.grep(e, function(e)
			{
				return -1 < i.call(n, e) !== r
			}) : S.filter(n, e, r)
		}
		S.filter = function(e, t, n)
		{
			var r = t[0];
			return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e)
			{
				return 1 === e.nodeType
			}))
		}, S.fn.extend(
		{
			find: function(e)
			{
				var t, n, r = this.length,
					i = this;
				if ("string" != typeof e) return this.pushStack(S(e).filter(function()
				{
					for (t = 0; t < r; t++)
						if (S.contains(i[t], this)) return !0
				}));
				for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
				return 1 < r ? S.uniqueSort(n) : n
			},
			filter: function(e)
			{
				return this.pushStack(D(this, e || [], !1))
			},
			not: function(e)
			{
				return this.pushStack(D(this, e || [], !0))
			},
			is: function(e)
			{
				return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
			}
		});
		var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
		(S.fn.init = function(e, t, n)
		{
			var r, i;
			if (!e) return this;
			if (n = n || j, "string" == typeof e)
			{
				if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
				if (r[1])
				{
					if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t))
						for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
					return this
				}
				return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
			}
			return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
		}).prototype = S.fn, j = S(E);
		var L = /^(?:parents|prev(?:Until|All))/,
			H = {
				children: !0,
				contents: !0,
				next: !0,
				prev: !0
			};

		function O(e, t)
		{
			while ((e = e[t]) && 1 !== e.nodeType);
			return e
		}
		S.fn.extend(
		{
			has: function(e)
			{
				var t = S(e, this),
					n = t.length;
				return this.filter(function()
				{
					for (var e = 0; e < n; e++)
						if (S.contains(this, t[e])) return !0
				})
			},
			closest: function(e, t)
			{
				var n, r = 0,
					i = this.length,
					o = [],
					a = "string" != typeof e && S(e);
				if (!k.test(e))
					for (; r < i; r++)
						for (n = this[r]; n && n !== t; n = n.parentNode)
							if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e)))
							{
								o.push(n);
								break
							}
				return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
			},
			index: function(e)
			{
				return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
			},
			add: function(e, t)
			{
				return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
			},
			addBack: function(e)
			{
				return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
			}
		}), S.each(
		{
			parent: function(e)
			{
				var t = e.parentNode;
				return t && 11 !== t.nodeType ? t : null
			},
			parents: function(e)
			{
				return h(e, "parentNode")
			},
			parentsUntil: function(e, t, n)
			{
				return h(e, "parentNode", n)
			},
			next: function(e)
			{
				return O(e, "nextSibling")
			},
			prev: function(e)
			{
				return O(e, "previousSibling")
			},
			nextAll: function(e)
			{
				return h(e, "nextSibling")
			},
			prevAll: function(e)
			{
				return h(e, "previousSibling")
			},
			nextUntil: function(e, t, n)
			{
				return h(e, "nextSibling", n)
			},
			prevUntil: function(e, t, n)
			{
				return h(e, "previousSibling", n)
			},
			siblings: function(e)
			{
				return T((e.parentNode ||
				{}).firstChild, e)
			},
			children: function(e)
			{
				return T(e.firstChild)
			},
			contents: function(e)
			{
				return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
			}
		}, function(r, i)
		{
			S.fn[r] = function(e, t)
			{
				var n = S.map(this, i, e);
				return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n)
			}
		});
		var P = /[^\x20\t\r\n\f]+/g;

		function R(e)
		{
			return e
		}

		function M(e)
		{
			throw e
		}

		function I(e, t, n, r)
		{
			var i;
			try
			{
				e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
			}
			catch (e)
			{
				n.apply(void 0, [e])
			}
		}
		S.Callbacks = function(r)
		{
			var e, n;
			r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function(e, t)
			{
				n[t] = !0
			}), n) : S.extend(
			{}, r);
			var i, t, o, a, s = [],
				u = [],
				l = -1,
				c = function()
				{
					for (a = a || r.once, o = i = !0; u.length; l = -1)
					{
						t = u.shift();
						while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
					}
					r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
				},
				f = {
					add: function()
					{
						return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e)
						{
							S.each(e, function(e, t)
							{
								m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
							})
						}(arguments), t && !i && c()), this
					},
					remove: function()
					{
						return S.each(arguments, function(e, t)
						{
							var n;
							while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
						}), this
					},
					has: function(e)
					{
						return e ? -1 < S.inArray(e, s) : 0 < s.length
					},
					empty: function()
					{
						return s && (s = []), this
					},
					disable: function()
					{
						return a = u = [], s = t = "", this
					},
					disabled: function()
					{
						return !s
					},
					lock: function()
					{
						return a = u = [], t || i || (s = t = ""), this
					},
					locked: function()
					{
						return !!a
					},
					fireWith: function(e, t)
					{
						return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
					},
					fire: function()
					{
						return f.fireWith(this, arguments), this
					},
					fired: function()
					{
						return !!o
					}
				};
			return f
		}, S.extend(
		{
			Deferred: function(e)
			{
				var o = [
						["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
						["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
						["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
					],
					i = "pending",
					a = {
						state: function()
						{
							return i
						},
						always: function()
						{
							return s.done(arguments).fail(arguments), this
						},
						"catch": function(e)
						{
							return a.then(null, e)
						},
						pipe: function()
						{
							var i = arguments;
							return S.Deferred(function(r)
							{
								S.each(o, function(e, t)
								{
									var n = m(i[t[4]]) && i[t[4]];
									s[t[1]](function()
									{
										var e = n && n.apply(this, arguments);
										e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
									})
								}), i = null
							}).promise()
						},
						then: function(t, n, r)
						{
							var u = 0;

							function l(i, o, a, s)
							{
								return function()
								{
									var n = this,
										r = arguments,
										e = function()
										{
											var e, t;
											if (!(i < u))
											{
												if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
												t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
											}
										},
										t = s ? e : function()
										{
											try
											{
												e()
											}
											catch (e)
											{
												S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r))
											}
										};
									i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t))
								}
							}
							return S.Deferred(function(e)
							{
								o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M))
							}).promise()
						},
						promise: function(e)
						{
							return null != e ? S.extend(e, a) : a
						}
					},
					s = {};
				return S.each(o, function(e, t)
				{
					var n = t[2],
						r = t[5];
					a[t[1]] = n.add, r && n.add(function()
					{
						i = r
					}, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function()
					{
						return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
					}, s[t[0] + "With"] = n.fireWith
				}), a.promise(s), e && e.call(s, s), s
			},
			when: function(e)
			{
				var n = arguments.length,
					t = n,
					r = Array(t),
					i = s.call(arguments),
					o = S.Deferred(),
					a = function(t)
					{
						return function(e)
						{
							r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
						}
					};
				if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
				while (t--) I(i[t], a(t), o.reject);
				return o.promise()
			}
		});
		var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
		S.Deferred.exceptionHook = function(e, t)
		{
			C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
		}, S.readyException = function(e)
		{
			C.setTimeout(function()
			{
				throw e
			})
		};
		var F = S.Deferred();

		function B()
		{
			E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready()
		}
		S.fn.ready = function(e)
		{
			return F.then(e)["catch"](function(e)
			{
				S.readyException(e)
			}), this
		}, S.extend(
		{
			isReady: !1,
			readyWait: 1,
			ready: function(e)
			{
				(!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
			}
		}), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
		var $ = function(e, t, n, r, i, o, a)
			{
				var s = 0,
					u = e.length,
					l = null == n;
				if ("object" === w(n))
					for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);
				else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n)
					{
						return l.call(S(e), n)
					})), t))
					for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
				return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
			},
			_ = /^-ms-/,
			z = /-([a-z])/g;

		function U(e, t)
		{
			return t.toUpperCase()
		}

		function X(e)
		{
			return e.replace(_, "ms-").replace(z, U)
		}
		var V = function(e)
		{
			return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
		};

		function G()
		{
			this.expando = S.expando + G.uid++
		}
		G.uid = 1, G.prototype = {
			cache: function(e)
			{
				var t = e[this.expando];
				return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando,
				{
					value: t,
					configurable: !0
				}))), t
			},
			set: function(e, t, n)
			{
				var r, i = this.cache(e);
				if ("string" == typeof t) i[X(t)] = n;
				else
					for (r in t) i[X(r)] = t[r];
				return i
			},
			get: function(e, t)
			{
				return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
			},
			access: function(e, t, n)
			{
				return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
			},
			remove: function(e, t)
			{
				var n, r = e[this.expando];
				if (void 0 !== r)
				{
					if (void 0 !== t)
					{
						n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
						while (n--) delete r[t[n]]
					}(void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
				}
			},
			hasData: function(e)
			{
				var t = e[this.expando];
				return void 0 !== t && !S.isEmptyObject(t)
			}
		};
		var Y = new G,
			Q = new G,
			J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
			K = /[A-Z]/g;

		function Z(e, t, n)
		{
			var r, i;
			if (void 0 === n && 1 === e.nodeType)
				if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r)))
				{
					try
					{
						n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
					}
					catch (e)
					{}
					Q.set(e, t, n)
				}
				else n = void 0;
			return n
		}
		S.extend(
		{
			hasData: function(e)
			{
				return Q.hasData(e) || Y.hasData(e)
			},
			data: function(e, t, n)
			{
				return Q.access(e, t, n)
			},
			removeData: function(e, t)
			{
				Q.remove(e, t)
			},
			_data: function(e, t, n)
			{
				return Y.access(e, t, n)
			},
			_removeData: function(e, t)
			{
				Y.remove(e, t)
			}
		}), S.fn.extend(
		{
			data: function(n, e)
			{
				var t, r, i, o = this[0],
					a = o && o.attributes;
				if (void 0 === n)
				{
					if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs")))
					{
						t = a.length;
						while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
						Y.set(o, "hasDataAttrs", !0)
					}
					return i
				}
				return "object" == typeof n ? this.each(function()
				{
					Q.set(this, n)
				}) : $(this, function(e)
				{
					var t;
					if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
					this.each(function()
					{
						Q.set(this, n, e)
					})
				}, null, e, 1 < arguments.length, null, !0)
			},
			removeData: function(e)
			{
				return this.each(function()
				{
					Q.remove(this, e)
				})
			}
		}), S.extend(
		{
			queue: function(e, t, n)
			{
				var r;
				if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || []
			},
			dequeue: function(e, t)
			{
				t = t || "fx";
				var n = S.queue(e, t),
					r = n.length,
					i = n.shift(),
					o = S._queueHooks(e, t);
				"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function()
				{
					S.dequeue(e, t)
				}, o)), !r && o && o.empty.fire()
			},
			_queueHooks: function(e, t)
			{
				var n = t + "queueHooks";
				return Y.get(e, n) || Y.access(e, n,
				{
					empty: S.Callbacks("once memory").add(function()
					{
						Y.remove(e, [t + "queue", n])
					})
				})
			}
		}), S.fn.extend(
		{
			queue: function(t, n)
			{
				var e = 2;
				return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function()
				{
					var e = S.queue(this, t, n);
					S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
				})
			},
			dequeue: function(e)
			{
				return this.each(function()
				{
					S.dequeue(this, e)
				})
			},
			clearQueue: function(e)
			{
				return this.queue(e || "fx", [])
			},
			promise: function(e, t)
			{
				var n, r = 1,
					i = S.Deferred(),
					o = this,
					a = this.length,
					s = function()
					{
						--r || i.resolveWith(o, [o])
					};
				"string" != typeof e && (t = e, e = void 0), e = e || "fx";
				while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
				return s(), i.promise(t)
			}
		});
		var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
			te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
			ne = ["Top", "Right", "Bottom", "Left"],
			re = E.documentElement,
			ie = function(e)
			{
				return S.contains(e.ownerDocument, e)
			},
			oe = {
				composed: !0
			};
		re.getRootNode && (ie = function(e)
		{
			return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
		});
		var ae = function(e, t)
		{
			return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
		};

		function se(e, t, n, r)
		{
			var i, o, a = 20,
				s = r ? function()
				{
					return r.cur()
				} : function()
				{
					return S.css(e, t, "")
				},
				u = s(),
				l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
				c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
			if (c && c[3] !== l)
			{
				u /= 2, l = l || c[3], c = +u || 1;
				while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
				c *= 2, S.style(e, t, c + l), n = n || []
			}
			return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
		}
		var ue = {};

		function le(e, t)
		{
			for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
			for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
			return e
		}
		S.fn.extend(
		{
			show: function()
			{
				return le(this, !0)
			},
			hide: function()
			{
				return le(this)
			},
			toggle: function(e)
			{
				return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function()
				{
					ae(this) ? S(this).show() : S(this).hide()
				})
			}
		});
		var ce, fe, pe = /^(?:checkbox|radio)$/i,
			de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
			he = /^$|^module$|\/(?:java|ecma)script/i;
		ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
		var ge = {
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};

		function ve(e, t)
		{
			var n;
			return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n
		}

		function ye(e, t)
		{
			for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
		}
		ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
		var me = /<|&#?\w+;/;

		function xe(e, t, n, r, i)
		{
			for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
				if ((o = e[d]) || 0 === o)
					if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
					else if (me.test(o))
			{
				a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];
				while (c--) a = a.lastChild;
				S.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
			}
			else p.push(t.createTextNode(o));
			f.textContent = "", d = 0;
			while (o = p[d++])
				if (r && -1 < S.inArray(o, r)) i && i.push(o);
				else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n)
			{
				c = 0;
				while (o = a[c++]) he.test(o.type || "") && n.push(o)
			}
			return f
		}
		var be = /^key/,
			we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
			Te = /^([^.]*)(?:\.(.+)|)/;

		function Ce()
		{
			return !0
		}

		function Ee()
		{
			return !1
		}

		function Se(e, t)
		{
			return e === function()
			{
				try
				{
					return E.activeElement
				}
				catch (e)
				{}
			}() == ("focus" === t)
		}

		function ke(e, t, n, r, i, o)
		{
			var a, s;
			if ("object" == typeof t)
			{
				for (s in "string" != typeof n && (r = r || n, n = void 0), t) ke(e, s, n, r, t[s], o);
				return e
			}
			if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ee;
			else if (!i) return e;
			return 1 === o && (a = i, (i = function(e)
			{
				return S().off(e), a.apply(this, arguments)
			}).guid = a.guid || (a.guid = S.guid++)), e.each(function()
			{
				S.event.add(this, t, i, r, n)
			})
		}

		function Ae(e, i, o)
		{
			o ? (Y.set(e, i, !1), S.event.add(e, i,
			{
				namespace: !1,
				handler: function(e)
				{
					var t, n, r = Y.get(this, i);
					if (1 & e.isTrigger && this[i])
					{
						if (r.length)(S.event.special[i] ||
						{}).delegateType && e.stopPropagation();
						else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
					}
					else r.length && (Y.set(this, i,
					{
						value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
					}), e.stopImmediatePropagation())
				}
			})) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce)
		}
		S.event = {
			global:
			{},
			add: function(t, e, n, r, i)
			{
				var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
				if (V(t))
				{
					n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(e)
					{
						return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
					}), l = (e = (e || "").match(P) || [""]).length;
					while (l--) d = g = (s = Te.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] ||
					{}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] ||
					{}, c = S.extend(
					{
						type: d,
						origType: g,
						data: r,
						handler: n,
						guid: n.guid,
						selector: i,
						needsContext: i && S.expr.match.needsContext.test(i),
						namespace: h.join(".")
					}, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0)
				}
			},
			remove: function(e, t, n, r, i)
			{
				var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
				if (v && (u = v.events))
				{
					l = (t = (t || "").match(P) || [""]).length;
					while (l--)
						if (d = g = (s = Te.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d)
						{
							f = S.event.special[d] ||
							{}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
							while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
							a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d])
						}
						else
							for (d in u) S.event.remove(e, d + t[l], n, r, !0);
					S.isEmptyObject(u) && Y.remove(e, "handle events")
				}
			},
			dispatch: function(e)
			{
				var t, n, r, i, o, a, s = new Array(arguments.length),
					u = S.event.fix(e),
					l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
					c = S.event.special[u.type] ||
					{};
				for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
				if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u))
				{
					a = S.event.handlers.call(this, u, l), t = 0;
					while ((i = a[t++]) && !u.isPropagationStopped())
					{
						u.currentTarget = i.elem, n = 0;
						while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] ||
						{}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
					}
					return c.postDispatch && c.postDispatch.call(this, u), u.result
				}
			},
			handlers: function(e, t)
			{
				var n, r, i, o, a, s = [],
					u = t.delegateCount,
					l = e.target;
				if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
					for (; l !== this; l = l.parentNode || this)
						if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled))
						{
							for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
							o.length && s.push(
							{
								elem: l,
								handlers: o
							})
						}
				return l = this, u < t.length && s.push(
				{
					elem: l,
					handlers: t.slice(u)
				}), s
			},
			addProp: function(t, e)
			{
				Object.defineProperty(S.Event.prototype, t,
				{
					enumerable: !0,
					configurable: !0,
					get: m(e) ? function()
					{
						if (this.originalEvent) return e(this.originalEvent)
					} : function()
					{
						if (this.originalEvent) return this.originalEvent[t]
					},
					set: function(e)
					{
						Object.defineProperty(this, t,
						{
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: e
						})
					}
				})
			},
			fix: function(e)
			{
				return e[S.expando] ? e : new S.Event(e)
			},
			special:
			{
				load:
				{
					noBubble: !0
				},
				click:
				{
					setup: function(e)
					{
						var t = this || e;
						return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce), !1
					},
					trigger: function(e)
					{
						var t = this || e;
						return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0
					},
					_default: function(e)
					{
						var t = e.target;
						return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
					}
				},
				beforeunload:
				{
					postDispatch: function(e)
					{
						void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
					}
				}
			}
		}, S.removeEvent = function(e, t, n)
		{
			e.removeEventListener && e.removeEventListener(t, n)
		}, S.Event = function(e, t)
		{
			if (!(this instanceof S.Event)) return new S.Event(e, t);
			e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
		}, S.Event.prototype = {
			constructor: S.Event,
			isDefaultPrevented: Ee,
			isPropagationStopped: Ee,
			isImmediatePropagationStopped: Ee,
			isSimulated: !1,
			preventDefault: function()
			{
				var e = this.originalEvent;
				this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault()
			},
			stopPropagation: function()
			{
				var e = this.originalEvent;
				this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation()
			},
			stopImmediatePropagation: function()
			{
				var e = this.originalEvent;
				this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
			}
		}, S.each(
		{
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
			which: function(e)
			{
				var t = e.button;
				return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
			}
		}, S.event.addProp), S.each(
		{
			focus: "focusin",
			blur: "focusout"
		}, function(e, t)
		{
			S.event.special[e] = {
				setup: function()
				{
					return Ae(this, e, Se), !1
				},
				trigger: function()
				{
					return Ae(this, e), !0
				},
				delegateType: t
			}
		}), S.each(
		{
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function(e, i)
		{
			S.event.special[e] = {
				delegateType: i,
				bindType: i,
				handle: function(e)
				{
					var t, n = e.relatedTarget,
						r = e.handleObj;
					return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
				}
			}
		}), S.fn.extend(
		{
			on: function(e, t, n, r)
			{
				return ke(this, e, t, n, r)
			},
			one: function(e, t, n, r)
			{
				return ke(this, e, t, n, r, 1)
			},
			off: function(e, t, n)
			{
				var r, i;
				if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
				if ("object" == typeof e)
				{
					for (i in e) this.off(i, t, e[i]);
					return this
				}
				return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function()
				{
					S.event.remove(this, e, n, t)
				})
			}
		});
		var Ne = /<script|<style|<link/i,
			De = /checked\s*(?:[^=]|=\s*.checked.)/i,
			je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

		function qe(e, t)
		{
			return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
		}

		function Le(e)
		{
			return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
		}

		function He(e)
		{
			return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
		}

		function Oe(e, t)
		{
			var n, r, i, o, a, s;
			if (1 === t.nodeType)
			{
				if (Y.hasData(e) && (s = Y.get(e).events))
					for (i in Y.remove(t, "handle events"), s)
						for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
				Q.hasData(e) && (o = Q.access(e), a = S.extend(
				{}, o), Q.set(t, a))
			}
		}

		function Pe(n, r, i, o)
		{
			r = g(r);
			var e, t, a, s, u, l, c = 0,
				f = n.length,
				p = f - 1,
				d = r[0],
				h = m(d);
			if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d)) return n.each(function(e)
			{
				var t = n.eq(e);
				h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o)
			});
			if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o))
			{
				for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
				if (s)
					for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src,
					{
						nonce: u.nonce || u.getAttribute("nonce")
					}, l) : b(u.textContent.replace(je, ""), u, l))
			}
			return n
		}

		function Re(e, t, n)
		{
			for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
			return e
		}
		S.extend(
		{
			htmlPrefilter: function(e)
			{
				return e
			},
			clone: function(e, t, n)
			{
				var r, i, o, a, s, u, l, c = e.cloneNode(!0),
					f = ie(e);
				if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
					for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
				if (t)
					if (n)
						for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Oe(o[r], a[r]);
					else Oe(e, c);
				return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
			},
			cleanData: function(e)
			{
				for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
					if (V(n))
					{
						if (t = n[Y.expando])
						{
							if (t.events)
								for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
							n[Y.expando] = void 0
						}
						n[Q.expando] && (n[Q.expando] = void 0)
					}
			}
		}), S.fn.extend(
		{
			detach: function(e)
			{
				return Re(this, e, !0)
			},
			remove: function(e)
			{
				return Re(this, e)
			},
			text: function(e)
			{
				return $(this, function(e)
				{
					return void 0 === e ? S.text(this) : this.empty().each(function()
					{
						1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
					})
				}, null, e, arguments.length)
			},
			append: function()
			{
				return Pe(this, arguments, function(e)
				{
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e)
				})
			},
			prepend: function()
			{
				return Pe(this, arguments, function(e)
				{
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType)
					{
						var t = qe(this, e);
						t.insertBefore(e, t.firstChild)
					}
				})
			},
			before: function()
			{
				return Pe(this, arguments, function(e)
				{
					this.parentNode && this.parentNode.insertBefore(e, this)
				})
			},
			after: function()
			{
				return Pe(this, arguments, function(e)
				{
					this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
				})
			},
			empty: function()
			{
				for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
				return this
			},
			clone: function(e, t)
			{
				return e = null != e && e, t = null == t ? e : t, this.map(function()
				{
					return S.clone(this, e, t)
				})
			},
			html: function(e)
			{
				return $(this, function(e)
				{
					var t = this[0] ||
						{},
						n = 0,
						r = this.length;
					if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
					if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()])
					{
						e = S.htmlPrefilter(e);
						try
						{
							for (; n < r; n++) 1 === (t = this[n] ||
							{}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
							t = 0
						}
						catch (e)
						{}
					}
					t && this.empty().append(e)
				}, null, e, arguments.length)
			},
			replaceWith: function()
			{
				var n = [];
				return Pe(this, arguments, function(e)
				{
					var t = this.parentNode;
					S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this))
				}, n)
			}
		}), S.each(
		{
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function(e, a)
		{
			S.fn[e] = function(e)
			{
				for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
				return this.pushStack(n)
			}
		});
		var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
			Ie = function(e)
			{
				var t = e.ownerDocument.defaultView;
				return t && t.opener || (t = C), t.getComputedStyle(e)
			},
			We = function(e, t, n)
			{
				var r, i, o = {};
				for (i in t) o[i] = e.style[i], e.style[i] = t[i];
				for (i in r = n.call(e), t) e.style[i] = o[i];
				return r
			},
			Fe = new RegExp(ne.join("|"), "i");

		function Be(e, t, n)
		{
			var r, i, o, a, s = e.style;
			return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
		}

		function $e(e, t)
		{
			return {
				get: function()
				{
					if (!e()) return (this.get = t).apply(this, arguments);
					delete this.get
				}
			}
		}! function()
		{
			function e()
			{
				if (l)
				{
					u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
					var e = C.getComputedStyle(l);
					n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
				}
			}

			function t(e)
			{
				return Math.round(parseFloat(e))
			}
			var n, r, i, o, a, s, u = E.createElement("div"),
				l = E.createElement("div");
			l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y,
			{
				boxSizingReliable: function()
				{
					return e(), r
				},
				pixelBoxStyles: function()
				{
					return e(), o
				},
				pixelPosition: function()
				{
					return e(), n
				},
				reliableMarginLeft: function()
				{
					return e(), s
				},
				scrollboxSize: function()
				{
					return e(), i
				},
				reliableTrDimensions: function()
				{
					var e, t, n, r;
					return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = 3 < parseInt(r.height), re.removeChild(e)), a
				}
			}))
		}();
		var _e = ["Webkit", "Moz", "ms"],
			ze = E.createElement("div").style,
			Ue = {};

		function Xe(e)
		{
			var t = S.cssProps[e] || Ue[e];
			return t || (e in ze ? e : Ue[e] = function(e)
			{
				var t = e[0].toUpperCase() + e.slice(1),
					n = _e.length;
				while (n--)
					if ((e = _e[n] + t) in ze) return e
			}(e) || e)
		}
		var Ve = /^(none|table(?!-c[ea]).+)/,
			Ge = /^--/,
			Ye = {
				position: "absolute",
				visibility: "hidden",
				display: "block"
			},
			Qe = {
				letterSpacing: "0",
				fontWeight: "400"
			};

		function Je(e, t, n)
		{
			var r = te.exec(t);
			return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
		}

		function Ke(e, t, n, r, i, o)
		{
			var a = "width" === t ? 1 : 0,
				s = 0,
				u = 0;
			if (n === (r ? "border" : "content")) return 0;
			for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
			return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
		}

		function Ze(e, t, n)
		{
			var r = Ie(e),
				i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
				o = i,
				a = Be(e, t, r),
				s = "offset" + t[0].toUpperCase() + t.slice(1);
			if (Me.test(a))
			{
				if (!n) return a;
				a = "auto"
			}
			return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
		}

		function et(e, t, n, r, i)
		{
			return new et.prototype.init(e, t, n, r, i)
		}
		S.extend(
		{
			cssHooks:
			{
				opacity:
				{
					get: function(e, t)
					{
						if (t)
						{
							var n = Be(e, "opacity");
							return "" === n ? "1" : n
						}
					}
				}
			},
			cssNumber:
			{
				animationIterationCount: !0,
				columnCount: !0,
				fillOpacity: !0,
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
				widows: !0,
				zIndex: !0,
				zoom: !0
			},
			cssProps:
			{},
			style: function(e, t, n, r)
			{
				if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style)
				{
					var i, o, a, s = X(t),
						u = Ge.test(t),
						l = e.style;
					if (u || (t = Xe(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
					"string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
				}
			},
			css: function(e, t, n, r)
			{
				var i, o, a, s = X(t);
				return Ge.test(t) || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
			}
		}), S.each(["height", "width"], function(e, u)
		{
			S.cssHooks[u] = {
				get: function(e, t, n)
				{
					if (t) return !Ve.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, function()
					{
						return Ze(e, u, n)
					})
				},
				set: function(e, t, n)
				{
					var r, i = Ie(e),
						o = !y.scrollboxSize() && "absolute" === i.position,
						a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
						s = n ? Ke(e, u, n, a, i) : 0;
					return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Je(0, t, s)
				}
			}
		}), S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function(e, t)
		{
			if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e,
			{
				marginLeft: 0
			}, function()
			{
				return e.getBoundingClientRect().left
			})) + "px"
		}), S.each(
		{
			margin: "",
			padding: "",
			border: "Width"
		}, function(i, o)
		{
			S.cssHooks[i + o] = {
				expand: function(e)
				{
					for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
					return n
				}
			}, "margin" !== i && (S.cssHooks[i + o].set = Je)
		}), S.fn.extend(
		{
			css: function(e, t)
			{
				return $(this, function(e, t, n)
				{
					var r, i, o = {},
						a = 0;
					if (Array.isArray(t))
					{
						for (r = Ie(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
						return o
					}
					return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
				}, e, t, 1 < arguments.length)
			}
		}), ((S.Tween = et).prototype = {
			constructor: et,
			init: function(e, t, n, r, i, o)
			{
				this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px")
			},
			cur: function()
			{
				var e = et.propHooks[this.prop];
				return e && e.get ? e.get(this) : et.propHooks._default.get(this)
			},
			run: function(e)
			{
				var t, n = et.propHooks[this.prop];
				return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
			}
		}).init.prototype = et.prototype, (et.propHooks = {
			_default:
			{
				get: function(e)
				{
					var t;
					return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
				},
				set: function(e)
				{
					S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
				}
			}
		}).scrollTop = et.propHooks.scrollLeft = {
			set: function(e)
			{
				e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
			}
		}, S.easing = {
			linear: function(e)
			{
				return e
			},
			swing: function(e)
			{
				return .5 - Math.cos(e * Math.PI) / 2
			},
			_default: "swing"
		}, S.fx = et.prototype.init, S.fx.step = {};
		var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/,
			at = /queueHooks$/;

		function st()
		{
			nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick())
		}

		function ut()
		{
			return C.setTimeout(function()
			{
				tt = void 0
			}), tt = Date.now()
		}

		function lt(e, t)
		{
			var n, r = 0,
				i = {
					height: e
				};
			for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
			return t && (i.opacity = i.width = e), i
		}

		function ct(e, t, n)
		{
			for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
				if (r = i[o].call(n, t, e)) return r
		}

		function ft(o, e, t)
		{
			var n, a, r = 0,
				i = ft.prefilters.length,
				s = S.Deferred().always(function()
				{
					delete u.elem
				}),
				u = function()
				{
					if (a) return !1;
					for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
					return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
				},
				l = s.promise(
				{
					elem: o,
					props: S.extend(
					{}, e),
					opts: S.extend(!0,
					{
						specialEasing:
						{},
						easing: S.easing._default
					}, t),
					originalProperties: e,
					originalOptions: t,
					startTime: tt || ut(),
					duration: t.duration,
					tweens: [],
					createTween: function(e, t)
					{
						var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
						return l.tweens.push(n), n
					},
					stop: function(e)
					{
						var t = 0,
							n = e ? l.tweens.length : 0;
						if (a) return this;
						for (a = !0; t < n; t++) l.tweens[t].run(1);
						return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
					}
				}),
				c = l.props;
			for (! function(e, t)
				{
					var n, r, i, o, a;
					for (n in e)
						if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a)
							for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
						else t[r] = i
				}(c, l.opts.specialEasing); r < i; r++)
				if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
			return S.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u,
			{
				elem: o,
				anim: l,
				queue: l.opts.queue
			})), l
		}
		S.Animation = S.extend(ft,
		{
			tweeners:
			{
				"*": [function(e, t)
				{
					var n = this.createTween(e, t);
					return se(n.elem, e, te.exec(t), n), n
				}]
			},
			tweener: function(e, t)
			{
				m(e) ? (t = e, e = ["*"]) : e = e.match(P);
				for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t)
			},
			prefilters: [function(e, t, n)
			{
				var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
					p = this,
					d = {},
					h = e.style,
					g = e.nodeType && ae(e),
					v = Y.get(e, "fxshow");
				for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function()
					{
						a.unqueued || s()
					}), a.unqueued++, p.always(function()
					{
						p.always(function()
						{
							a.unqueued--, S.queue(e, "fx").length || a.empty.fire()
						})
					})), t)
					if (i = t[r], ot.test(i))
					{
						if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show"))
						{
							if ("show" !== i || !v || void 0 === v[r]) continue;
							g = !0
						}
						d[r] = v && v[r] || S.style(e, r)
					}
				if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
					for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function()
						{
							h.display = l
						}), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function()
						{
							h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
						})), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow",
					{
						display: l
					}), o && (v.hidden = !g), g && le([e], !0), p.done(function()
					{
						for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r])
					})), u = ct(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
			}],
			prefilter: function(e, t)
			{
				t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
			}
		}), S.speed = function(e, t, n)
		{
			var r = e && "object" == typeof e ? S.extend(
			{}, e) :
			{
				complete: n || !n && t || m(e) && e,
				duration: e,
				easing: n && t || t && !m(t) && t
			};
			return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function()
			{
				m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue)
			}, r
		}, S.fn.extend(
		{
			fadeTo: function(e, t, n, r)
			{
				return this.filter(ae).css("opacity", 0).show().end().animate(
				{
					opacity: t
				}, e, n, r)
			},
			animate: function(t, e, n, r)
			{
				var i = S.isEmptyObject(t),
					o = S.speed(e, n, r),
					a = function()
					{
						var e = ft(this, S.extend(
						{}, t), o);
						(i || Y.get(this, "finish")) && e.stop(!0)
					};
				return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
			},
			stop: function(i, e, o)
			{
				var a = function(e)
				{
					var t = e.stop;
					delete e.stop, t(o)
				};
				return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function()
				{
					var e = !0,
						t = null != i && i + "queueHooks",
						n = S.timers,
						r = Y.get(this);
					if (t) r[t] && r[t].stop && a(r[t]);
					else
						for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
					for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
					!e && o || S.dequeue(this, i)
				})
			},
			finish: function(a)
			{
				return !1 !== a && (a = a || "fx"), this.each(function()
				{
					var e, t = Y.get(this),
						n = t[a + "queue"],
						r = t[a + "queueHooks"],
						i = S.timers,
						o = n ? n.length : 0;
					for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
					for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
					delete t.finish
				})
			}
		}), S.each(["toggle", "show", "hide"], function(e, r)
		{
			var i = S.fn[r];
			S.fn[r] = function(e, t, n)
			{
				return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n)
			}
		}), S.each(
		{
			slideDown: lt("show"),
			slideUp: lt("hide"),
			slideToggle: lt("toggle"),
			fadeIn:
			{
				opacity: "show"
			},
			fadeOut:
			{
				opacity: "hide"
			},
			fadeToggle:
			{
				opacity: "toggle"
			}
		}, function(e, r)
		{
			S.fn[e] = function(e, t, n)
			{
				return this.animate(r, e, t, n)
			}
		}), S.timers = [], S.fx.tick = function()
		{
			var e, t = 0,
				n = S.timers;
			for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
			n.length || S.fx.stop(), tt = void 0
		}, S.fx.timer = function(e)
		{
			S.timers.push(e), S.fx.start()
		}, S.fx.interval = 13, S.fx.start = function()
		{
			nt || (nt = !0, st())
		}, S.fx.stop = function()
		{
			nt = null
		}, S.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, S.fn.delay = function(r, e)
		{
			return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t)
			{
				var n = C.setTimeout(e, r);
				t.stop = function()
				{
					C.clearTimeout(n)
				}
			})
		}, rt = E.createElement("input"), it = E.createElement("select").appendChild(E.createElement("option")), rt.type = "checkbox", y.checkOn = "" !== rt.value, y.optSelected = it.selected, (rt = E.createElement("input")).value = "t", rt.type = "radio", y.radioValue = "t" === rt.value;
		var pt, dt = S.expr.attrHandle;
		S.fn.extend(
		{
			attr: function(e, t)
			{
				return $(this, S.attr, e, t, 1 < arguments.length)
			},
			removeAttr: function(e)
			{
				return this.each(function()
				{
					S.removeAttr(this, e)
				})
			}
		}), S.extend(
		{
			attr: function(e, t, n)
			{
				var r, i, o = e.nodeType;
				if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
			},
			attrHooks:
			{
				type:
				{
					set: function(e, t)
					{
						if (!y.radioValue && "radio" === t && A(e, "input"))
						{
							var n = e.value;
							return e.setAttribute("type", t), n && (e.value = n), t
						}
					}
				}
			},
			removeAttr: function(e, t)
			{
				var n, r = 0,
					i = t && t.match(P);
				if (i && 1 === e.nodeType)
					while (n = i[r++]) e.removeAttribute(n)
			}
		}), pt = {
			set: function(e, t, n)
			{
				return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
			}
		}, S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t)
		{
			var a = dt[t] || S.find.attr;
			dt[t] = function(e, t, n)
			{
				var r, i, o = t.toLowerCase();
				return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r
			}
		});
		var ht = /^(?:input|select|textarea|button)$/i,
			gt = /^(?:a|area)$/i;

		function vt(e)
		{
			return (e.match(P) || []).join(" ")
		}

		function yt(e)
		{
			return e.getAttribute && e.getAttribute("class") || ""
		}

		function mt(e)
		{
			return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
		}
		S.fn.extend(
		{
			prop: function(e, t)
			{
				return $(this, S.prop, e, t, 1 < arguments.length)
			},
			removeProp: function(e)
			{
				return this.each(function()
				{
					delete this[S.propFix[e] || e]
				})
			}
		}), S.extend(
		{
			prop: function(e, t, n)
			{
				var r, i, o = e.nodeType;
				if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
			},
			propHooks:
			{
				tabIndex:
				{
					get: function(e)
					{
						var t = S.find.attr(e, "tabindex");
						return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
					}
				}
			},
			propFix:
			{
				"for": "htmlFor",
				"class": "className"
			}
		}), y.optSelected || (S.propHooks.selected = {
			get: function(e)
			{
				var t = e.parentNode;
				return t && t.parentNode && t.parentNode.selectedIndex, null
			},
			set: function(e)
			{
				var t = e.parentNode;
				t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
			}
		}), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function()
		{
			S.propFix[this.toLowerCase()] = this
		}), S.fn.extend(
		{
			addClass: function(t)
			{
				var e, n, r, i, o, a, s, u = 0;
				if (m(t)) return this.each(function(e)
				{
					S(this).addClass(t.call(this, e, yt(this)))
				});
				if ((e = mt(t)).length)
					while (n = this[u++])
						if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ")
						{
							a = 0;
							while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
							i !== (s = vt(r)) && n.setAttribute("class", s)
						}
				return this
			},
			removeClass: function(t)
			{
				var e, n, r, i, o, a, s, u = 0;
				if (m(t)) return this.each(function(e)
				{
					S(this).removeClass(t.call(this, e, yt(this)))
				});
				if (!arguments.length) return this.attr("class", "");
				if ((e = mt(t)).length)
					while (n = this[u++])
						if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ")
						{
							a = 0;
							while (o = e[a++])
								while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
							i !== (s = vt(r)) && n.setAttribute("class", s)
						}
				return this
			},
			toggleClass: function(i, t)
			{
				var o = typeof i,
					a = "string" === o || Array.isArray(i);
				return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e)
				{
					S(this).toggleClass(i.call(this, e, yt(this), t), t)
				}) : this.each(function()
				{
					var e, t, n, r;
					if (a)
					{
						t = 0, n = S(this), r = mt(i);
						while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
					}
					else void 0 !== i && "boolean" !== o || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
				})
			},
			hasClass: function(e)
			{
				var t, n, r = 0;
				t = " " + e + " ";
				while (n = this[r++])
					if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t)) return !0;
				return !1
			}
		});
		var xt = /\r/g;
		S.fn.extend(
		{
			val: function(n)
			{
				var r, e, i, t = this[0];
				return arguments.length ? (i = m(n), this.each(function(e)
				{
					var t;
					1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e)
					{
						return null == e ? "" : e + ""
					})), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
				})) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
			}
		}), S.extend(
		{
			valHooks:
			{
				option:
				{
					get: function(e)
					{
						var t = S.find.attr(e, "value");
						return null != t ? t : vt(S.text(e))
					}
				},
				select:
				{
					get: function(e)
					{
						var t, n, r, i = e.options,
							o = e.selectedIndex,
							a = "select-one" === e.type,
							s = a ? null : [],
							u = a ? o + 1 : i.length;
						for (r = o < 0 ? u : a ? o : 0; r < u; r++)
							if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup")))
							{
								if (t = S(n).val(), a) return t;
								s.push(t)
							}
						return s
					},
					set: function(e, t)
					{
						var n, r, i = e.options,
							o = S.makeArray(t),
							a = i.length;
						while (a--)((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
						return n || (e.selectedIndex = -1), o
					}
				}
			}
		}), S.each(["radio", "checkbox"], function()
		{
			S.valHooks[this] = {
				set: function(e, t)
				{
					if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
				}
			}, y.checkOn || (S.valHooks[this].get = function(e)
			{
				return null === e.getAttribute("value") ? "on" : e.value
			})
		}), y.focusin = "onfocusin" in C;
		var bt = /^(?:focusinfocus|focusoutblur)$/,
			wt = function(e)
			{
				e.stopPropagation()
			};
		S.extend(S.event,
		{
			trigger: function(e, t, n, r)
			{
				var i, o, a, s, u, l, c, f, p = [n || E],
					d = v.call(e, "type") ? e.type : e,
					h = v.call(e, "namespace") ? e.namespace.split(".") : [];
				if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] ||
					{}, r || !c.trigger || !1 !== c.trigger.apply(n, t)))
				{
					if (!r && !c.noBubble && !x(n))
					{
						for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
						a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
					}
					i = 0;
					while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
					return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), S.event.triggered = void 0, a && (n[u] = a)), e.result
				}
			},
			simulate: function(e, t, n)
			{
				var r = S.extend(new S.Event, n,
				{
					type: e,
					isSimulated: !0
				});
				S.event.trigger(r, null, t)
			}
		}), S.fn.extend(
		{
			trigger: function(e, t)
			{
				return this.each(function()
				{
					S.event.trigger(e, t, this)
				})
			},
			triggerHandler: function(e, t)
			{
				var n = this[0];
				if (n) return S.event.trigger(e, t, n, !0)
			}
		}), y.focusin || S.each(
		{
			focus: "focusin",
			blur: "focusout"
		}, function(n, r)
		{
			var i = function(e)
			{
				S.event.simulate(r, e.target, S.event.fix(e))
			};
			S.event.special[r] = {
				setup: function()
				{
					var e = this.ownerDocument || this.document || this,
						t = Y.access(e, r);
					t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
				},
				teardown: function()
				{
					var e = this.ownerDocument || this.document || this,
						t = Y.access(e, r) - 1;
					t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
				}
			}
		});
		var Tt = C.location,
			Ct = {
				guid: Date.now()
			},
			Et = /\?/;
		S.parseXML = function(e)
		{
			var t;
			if (!e || "string" != typeof e) return null;
			try
			{
				t = (new C.DOMParser).parseFromString(e, "text/xml")
			}
			catch (e)
			{
				t = void 0
			}
			return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t
		};
		var St = /\[\]$/,
			kt = /\r?\n/g,
			At = /^(?:submit|button|image|reset|file)$/i,
			Nt = /^(?:input|select|textarea|keygen)/i;

		function Dt(n, e, r, i)
		{
			var t;
			if (Array.isArray(e)) S.each(e, function(e, t)
			{
				r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
			});
			else if (r || "object" !== w(e)) i(n, e);
			else
				for (t in e) Dt(n + "[" + t + "]", e[t], r, i)
		}
		S.param = function(e, t)
		{
			var n, r = [],
				i = function(e, t)
				{
					var n = m(t) ? t() : t;
					r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
				};
			if (null == e) return "";
			if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function()
			{
				i(this.name, this.value)
			});
			else
				for (n in e) Dt(n, e[n], t, i);
			return r.join("&")
		}, S.fn.extend(
		{
			serialize: function()
			{
				return S.param(this.serializeArray())
			},
			serializeArray: function()
			{
				return this.map(function()
				{
					var e = S.prop(this, "elements");
					return e ? S.makeArray(e) : this
				}).filter(function()
				{
					var e = this.type;
					return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e))
				}).map(function(e, t)
				{
					var n = S(this).val();
					return null == n ? null : Array.isArray(n) ? S.map(n, function(e)
					{
						return {
							name: t.name,
							value: e.replace(kt, "\r\n")
						}
					}) :
					{
						name: t.name,
						value: n.replace(kt, "\r\n")
					}
				}).get()
			}
		});
		var jt = /%20/g,
			qt = /#.*$/,
			Lt = /([?&])_=[^&]*/,
			Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
			Ot = /^(?:GET|HEAD)$/,
			Pt = /^\/\//,
			Rt = {},
			Mt = {},
			It = "*/".concat("*"),
			Wt = E.createElement("a");

		function Ft(o)
		{
			return function(e, t)
			{
				"string" != typeof e && (t = e, e = "*");
				var n, r = 0,
					i = e.toLowerCase().match(P) || [];
				if (m(t))
					while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
			}
		}

		function Bt(t, i, o, a)
		{
			var s = {},
				u = t === Mt;

			function l(e)
			{
				var r;
				return s[e] = !0, S.each(t[e] || [], function(e, t)
				{
					var n = t(i, o, a);
					return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
				}), r
			}
			return l(i.dataTypes[0]) || !s["*"] && l("*")
		}

		function $t(e, t)
		{
			var n, r, i = S.ajaxSettings.flatOptions ||
			{};
			for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
			return r && S.extend(!0, e, r), e
		}
		Wt.href = Tt.href, S.extend(
		{
			active: 0,
			lastModified:
			{},
			etag:
			{},
			ajaxSettings:
			{
				url: Tt.href,
				type: "GET",
				isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts:
				{
					"*": It,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},
				contents:
				{
					xml: /\bxml\b/,
					html: /\bhtml/,
					json: /\bjson\b/
				},
				responseFields:
				{
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON"
				},
				converters:
				{
					"* text": String,
					"text html": !0,
					"text json": JSON.parse,
					"text xml": S.parseXML
				},
				flatOptions:
				{
					url: !0,
					context: !0
				}
			},
			ajaxSetup: function(e, t)
			{
				return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e)
			},
			ajaxPrefilter: Ft(Rt),
			ajaxTransport: Ft(Mt),
			ajax: function(e, t)
			{
				"object" == typeof e && (t = e, e = void 0), t = t ||
				{};
				var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup(
					{}, t),
					y = v.context || v,
					m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
					x = S.Deferred(),
					b = S.Callbacks("once memory"),
					w = v.statusCode ||
					{},
					a = {},
					s = {},
					u = "canceled",
					T = {
						readyState: 0,
						getResponseHeader: function(e)
						{
							var t;
							if (h)
							{
								if (!n)
								{
									n = {};
									while (t = Ht.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
								}
								t = n[e.toLowerCase() + " "]
							}
							return null == t ? null : t.join(", ")
						},
						getAllResponseHeaders: function()
						{
							return h ? p : null
						},
						setRequestHeader: function(e, t)
						{
							return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
						},
						overrideMimeType: function(e)
						{
							return null == h && (v.mimeType = e), this
						},
						statusCode: function(e)
						{
							var t;
							if (e)
								if (h) T.always(e[T.status]);
								else
									for (t in e) w[t] = [w[t], e[t]];
							return this
						},
						abort: function(e)
						{
							var t = e || u;
							return c && c.abort(t), l(0, t), this
						}
					};
				if (x.promise(T), v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain)
				{
					r = E.createElement("a");
					try
					{
						r.href = v.url, r.href = r.href, v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host
					}
					catch (e)
					{
						v.crossDomain = !0
					}
				}
				if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Bt(Rt, v, t, T), h) return T;
				for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ot.test(v.type), f = v.url.replace(qt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Et.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Lt, "$1"), o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
				if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
				if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Bt(Mt, v, t, T))
				{
					if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
					v.async && 0 < v.timeout && (d = C.setTimeout(function()
					{
						T.abort("timeout")
					}, v.timeout));
					try
					{
						h = !1, c.send(a, l)
					}
					catch (e)
					{
						if (h) throw e;
						l(-1, e)
					}
				}
				else l(-1, "No Transport");

				function l(e, t, n, r)
				{
					var i, o, a, s, u, l = t;
					h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n)
					{
						var r, i, o, a, s = e.contents,
							u = e.dataTypes;
						while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
						if (r)
							for (i in s)
								if (s[i] && s[i].test(r))
								{
									u.unshift(i);
									break
								}
						if (u[0] in n) o = u[0];
						else
						{
							for (i in n)
							{
								if (!u[0] || e.converters[i + " " + u[0]])
								{
									o = i;
									break
								}
								a || (a = i)
							}
							o = o || a
						}
						if (o) return o !== u[0] && u.unshift(o), n[o]
					}(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function() {}), s = function(e, t, n, r)
					{
						var i, o, a, s, u, l = {},
							c = e.dataTypes.slice();
						if (c[1])
							for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
						o = c.shift();
						while (o)
							if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
								if ("*" === o) o = u;
								else if ("*" !== u && u !== o)
						{
							if (!(a = l[u + " " + o] || l["* " + o]))
								for (i in l)
									if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]]))
									{
										!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
										break
									}
							if (!0 !== a)
								if (a && e["throws"]) t = a(t);
								else try
								{
									t = a(t)
								}
								catch (e)
								{
									return {
										state: "parsererror",
										error: a ? e : "No conversion from " + u + " to " + o
									}
								}
						}
						return {
							state: "success",
							data: t
						}
					}(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")))
				}
				return T
			},
			getJSON: function(e, t, n)
			{
				return S.get(e, t, n, "json")
			},
			getScript: function(e, t)
			{
				return S.get(e, void 0, t, "script")
			}
		}), S.each(["get", "post"], function(e, i)
		{
			S[i] = function(e, t, n, r)
			{
				return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend(
				{
					url: e,
					type: i,
					dataType: r,
					data: t,
					success: n
				}, S.isPlainObject(e) && e))
			}
		}), S.ajaxPrefilter(function(e)
		{
			var t;
			for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
		}), S._evalUrl = function(e, t, n)
		{
			return S.ajax(
			{
				url: e,
				type: "GET",
				dataType: "script",
				cache: !0,
				async: !1,
				global: !1,
				converters:
				{
					"text script": function() {}
				},
				dataFilter: function(e)
				{
					S.globalEval(e, t, n)
				}
			})
		}, S.fn.extend(
		{
			wrapAll: function(e)
			{
				var t;
				return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function()
				{
					var e = this;
					while (e.firstElementChild) e = e.firstElementChild;
					return e
				}).append(this)), this
			},
			wrapInner: function(n)
			{
				return m(n) ? this.each(function(e)
				{
					S(this).wrapInner(n.call(this, e))
				}) : this.each(function()
				{
					var e = S(this),
						t = e.contents();
					t.length ? t.wrapAll(n) : e.append(n)
				})
			},
			wrap: function(t)
			{
				var n = m(t);
				return this.each(function(e)
				{
					S(this).wrapAll(n ? t.call(this, e) : t)
				})
			},
			unwrap: function(e)
			{
				return this.parent(e).not("body").each(function()
				{
					S(this).replaceWith(this.childNodes)
				}), this
			}
		}), S.expr.pseudos.hidden = function(e)
		{
			return !S.expr.pseudos.visible(e)
		}, S.expr.pseudos.visible = function(e)
		{
			return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
		}, S.ajaxSettings.xhr = function()
		{
			try
			{
				return new C.XMLHttpRequest
			}
			catch (e)
			{}
		};
		var _t = {
				0: 200,
				1223: 204
			},
			zt = S.ajaxSettings.xhr();
		y.cors = !!zt && "withCredentials" in zt, y.ajax = zt = !!zt, S.ajaxTransport(function(i)
		{
			var o, a;
			if (y.cors || zt && !i.crossDomain) return {
				send: function(e, t)
				{
					var n, r = i.xhr();
					if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
						for (n in i.xhrFields) r[n] = i.xhrFields[n];
					for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
					o = function(e)
					{
						return function()
						{
							o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ?
							{
								binary: r.response
							} :
							{
								text: r.responseText
							}, r.getAllResponseHeaders()))
						}
					}, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function()
					{
						4 === r.readyState && C.setTimeout(function()
						{
							o && a()
						})
					}, o = o("abort");
					try
					{
						r.send(i.hasContent && i.data || null)
					}
					catch (e)
					{
						if (o) throw e
					}
				},
				abort: function()
				{
					o && o()
				}
			}
		}), S.ajaxPrefilter(function(e)
		{
			e.crossDomain && (e.contents.script = !1)
		}), S.ajaxSetup(
		{
			accepts:
			{
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents:
			{
				script: /\b(?:java|ecma)script\b/
			},
			converters:
			{
				"text script": function(e)
				{
					return S.globalEval(e), e
				}
			}
		}), S.ajaxPrefilter("script", function(e)
		{
			void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
		}), S.ajaxTransport("script", function(n)
		{
			var r, i;
			if (n.crossDomain || n.scriptAttrs) return {
				send: function(e, t)
				{
					r = S("<script>").attr(n.scriptAttrs ||
					{}).prop(
					{
						charset: n.scriptCharset,
						src: n.url
					}).on("load error", i = function(e)
					{
						r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
					}), E.head.appendChild(r[0])
				},
				abort: function()
				{
					i && i()
				}
			}
		});
		var Ut, Xt = [],
			Vt = /(=)\?(?=&|$)|\?\?/;
		S.ajaxSetup(
		{
			jsonp: "callback",
			jsonpCallback: function()
			{
				var e = Xt.pop() || S.expando + "_" + Ct.guid++;
				return this[e] = !0, e
			}
		}), S.ajaxPrefilter("json jsonp", function(e, t, n)
		{
			var r, i, o, a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
			if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function()
			{
				return o || S.error(r + " was not called"), o[0]
			}, e.dataTypes[0] = "json", i = C[r], C[r] = function()
			{
				o = arguments
			}, n.always(function()
			{
				void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0
			}), "script"
		}), y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), S.parseHTML = function(e, t, n)
		{
			return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
			var r, i, o
		}, S.fn.load = function(e, t, n)
		{
			var r, i, o, a = this,
				s = e.indexOf(" ");
			return -1 < s && (r = vt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax(
			{
				url: e,
				type: i || "GET",
				dataType: "html",
				data: t
			}).done(function(e)
			{
				o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
			}).always(n && function(e, t)
			{
				a.each(function()
				{
					n.apply(this, o || [e.responseText, t, e])
				})
			}), this
		}, S.expr.pseudos.animated = function(t)
		{
			return S.grep(S.timers, function(e)
			{
				return t === e.elem
			}).length
		}, S.offset = {
			setOffset: function(e, t, n)
			{
				var r, i, o, a, s, u, l = S.css(e, "position"),
					c = S(e),
					f = {};
				"static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend(
				{}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f))
			}
		}, S.fn.extend(
		{
			offset: function(t)
			{
				if (arguments.length) return void 0 === t ? this : this.each(function(e)
				{
					S.offset.setOffset(this, t, e)
				});
				var e, n, r = this[0];
				return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView,
				{
					top: e.top + n.pageYOffset,
					left: e.left + n.pageXOffset
				}) :
				{
					top: 0,
					left: 0
				} : void 0
			},
			position: function()
			{
				if (this[0])
				{
					var e, t, n, r = this[0],
						i = {
							top: 0,
							left: 0
						};
					if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
					else
					{
						t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
						while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
						e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0))
					}
					return {
						top: t.top - i.top - S.css(r, "marginTop", !0),
						left: t.left - i.left - S.css(r, "marginLeft", !0)
					}
				}
			},
			offsetParent: function()
			{
				return this.map(function()
				{
					var e = this.offsetParent;
					while (e && "static" === S.css(e, "position")) e = e.offsetParent;
					return e || re
				})
			}
		}), S.each(
		{
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
		}, function(t, i)
		{
			var o = "pageYOffset" === i;
			S.fn[t] = function(e)
			{
				return $(this, function(e, t, n)
				{
					var r;
					if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
					r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
				}, t, e, arguments.length)
			}
		}), S.each(["top", "left"], function(e, n)
		{
			S.cssHooks[n] = $e(y.pixelPosition, function(e, t)
			{
				if (t) return t = Be(e, n), Me.test(t) ? S(e).position()[n] + "px" : t
			})
		}), S.each(
		{
			Height: "height",
			Width: "width"
		}, function(a, s)
		{
			S.each(
			{
				padding: "inner" + a,
				content: s,
				"": "outer" + a
			}, function(r, o)
			{
				S.fn[o] = function(e, t)
				{
					var n = arguments.length && (r || "boolean" != typeof e),
						i = r || (!0 === e || !0 === t ? "margin" : "border");
					return $(this, function(e, t, n)
					{
						var r;
						return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
					}, s, n ? e : void 0, n)
				}
			})
		}), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t)
		{
			S.fn[t] = function(e)
			{
				return this.on(t, e)
			}
		}), S.fn.extend(
		{
			bind: function(e, t, n)
			{
				return this.on(e, null, t, n)
			},
			unbind: function(e, t)
			{
				return this.off(e, null, t)
			},
			delegate: function(e, t, n, r)
			{
				return this.on(t, e, n, r)
			},
			undelegate: function(e, t, n)
			{
				return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
			},
			hover: function(e, t)
			{
				return this.mouseenter(e).mouseleave(t || e)
			}
		}), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n)
		{
			S.fn[n] = function(e, t)
			{
				return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
			}
		});
		var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
		S.proxy = function(e, t)
		{
			var n, r, i;
			if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function()
			{
				return e.apply(t || this, r.concat(s.call(arguments)))
			}).guid = e.guid = e.guid || S.guid++, i
		}, S.holdReady = function(e)
		{
			e ? S.readyWait++ : S.ready(!0)
		}, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function(e)
		{
			var t = S.type(e);
			return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
		}, S.trim = function(e)
		{
			return null == e ? "" : (e + "").replace(Gt, "")
		}, "function" == typeof define && define.amd && define("jquery", [], function()
		{
			return S
		});
		var Yt = C.jQuery,
			Qt = C.$;
		return S.noConflict = function(e)
		{
			return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S
		}, "undefined" == typeof e && (C.jQuery = C.$ = S), S
	});
	jQuery.noConflict()
}
catch (e)
{
	console.log(e)
}
try
{
	/*! jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
	"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
		function(t)
		{
			"use strict";
			"function" == typeof define && define.amd ? define(["jquery"], function(e)
			{
				return t(e, window)
			}) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window) : t(jQuery, window)
		}(function(s, n)
		{
			"use strict";

			function e(e)
			{
				return 0 <= function(e, t)
				{
					for (var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], i = 1; i <= 3; i++)
					{
						if (+o[i] < +n[i]) return 1;
						if (+n[i] < +o[i]) return -1
					}
					return 0
				}(s.fn.jquery, e)
			}
			s.migrateVersion = "3.3.2", n.console && n.console.log && (s && e("3.0.0") || n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"), s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"), n.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion));
			var r = {};

			function u(e)
			{
				var t = n.console;
				s.migrateDeduplicateWarnings && r[e] || (r[e] = !0, s.migrateWarnings.push(e), t && t.warn && !s.migrateMute && (t.warn("JQMIGRATE: " + e), s.migrateTrace && t.trace && t.trace()))
			}

			function t(e, t, r, n)
			{
				Object.defineProperty(e, t,
				{
					configurable: !0,
					enumerable: !0,
					get: function()
					{
						return u(n), r
					},
					set: function(e)
					{
						u(n), r = e
					}
				})
			}

			function o(e, t, r, n)
			{
				e[t] = function()
				{
					return u(n), r.apply(this, arguments)
				}
			}
			s.migrateDeduplicateWarnings = !0, s.migrateWarnings = [], void 0 === s.migrateTrace && (s.migrateTrace = !0), s.migrateReset = function()
			{
				r = {}, s.migrateWarnings.length = 0
			}, "BackCompat" === n.document.compatMode && u("jQuery is not compatible with Quirks Mode");
			var i, a, c, d = {},
				l = s.fn.init,
				p = s.find,
				f = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
				y = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
				m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
			for (i in s.fn.init = function(e)
				{
					var t = Array.prototype.slice.call(arguments);
					return "string" == typeof e && "#" === e && (u("jQuery( '#' ) is not a valid selector"), t[0] = []), l.apply(this, t)
				}, s.fn.init.prototype = s.fn, s.find = function(t)
				{
					var r = Array.prototype.slice.call(arguments);
					if ("string" == typeof t && f.test(t)) try
					{
						n.document.querySelector(t)
					}
					catch (e)
					{
						t = t.replace(y, function(e, t, r, n)
						{
							return "[" + t + r + '"' + n + '"]'
						});
						try
						{
							n.document.querySelector(t), u("Attribute selector with '#' must be quoted: " + r[0]), r[0] = t
						}
						catch (e)
						{
							u("Attribute selector with '#' was not fixed: " + r[0])
						}
					}
					return p.apply(this, r)
				}, p) Object.prototype.hasOwnProperty.call(p, i) && (s.find[i] = p[i]);
			o(s.fn, "size", function()
			{
				return this.length
			}, "jQuery.fn.size() is deprecated and removed; use the .length property"), o(s, "parseJSON", function()
			{
				return JSON.parse.apply(null, arguments)
			}, "jQuery.parseJSON is deprecated; use JSON.parse"), o(s, "holdReady", s.holdReady, "jQuery.holdReady is deprecated"), o(s, "unique", s.uniqueSort, "jQuery.unique is deprecated; use jQuery.uniqueSort"), t(s.expr, "filters", s.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"), t(s.expr, ":", s.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"), e("3.1.1") && o(s, "trim", function(e)
			{
				return null == e ? "" : (e + "").replace(m, "")
			}, "jQuery.trim is deprecated; use String.prototype.trim"), e("3.2.0") && (o(s, "nodeName", function(e, t)
			{
				return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
			}, "jQuery.nodeName is deprecated"), o(s, "isArray", Array.isArray, "jQuery.isArray is deprecated; use Array.isArray")), e("3.3.0") && (o(s, "isNumeric", function(e)
			{
				var t = typeof e;
				return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
			}, "jQuery.isNumeric() is deprecated"), s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t)
			{
				d["[object " + t + "]"] = t.toLowerCase()
			}), o(s, "type", function(e)
			{
				return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[Object.prototype.toString.call(e)] || "object" : typeof e
			}, "jQuery.type is deprecated"), o(s, "isFunction", function(e)
			{
				return "function" == typeof e
			}, "jQuery.isFunction() is deprecated"), o(s, "isWindow", function(e)
			{
				return null != e && e === e.window
			}, "jQuery.isWindow() is deprecated")), s.ajax && (a = s.ajax, c = /(=)\?(?=&|$)|\?\?/, s.ajax = function()
			{
				var e = a.apply(this, arguments);
				return e.promise && (o(e, "success", e.done, "jQXHR.success is deprecated and removed"), o(e, "error", e.fail, "jQXHR.error is deprecated and removed"), o(e, "complete", e.always, "jQXHR.complete is deprecated and removed")), e
			}, e("4.0.0") || s.ajaxPrefilter("+json", function(e)
			{
				!1 !== e.jsonp && (c.test(e.url) || "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && c.test(e.data)) && u("JSON-to-JSONP auto-promotion is deprecated")
			}));
			var g = s.fn.removeAttr,
				h = s.fn.toggleClass,
				v = /\S+/g;

			function j(e)
			{
				return e.replace(/-([a-z])/g, function(e, t)
				{
					return t.toUpperCase()
				})
			}
			s.fn.removeAttr = function(e)
			{
				var r = this;
				return s.each(e.match(v), function(e, t)
				{
					s.expr.match.bool.test(t) && (u("jQuery.fn.removeAttr no longer sets boolean properties: " + t), r.prop(t, !1))
				}), g.apply(this, arguments)
			};
			var Q, b = !(s.fn.toggleClass = function(t)
				{
					return void 0 !== t && "boolean" != typeof t ? h.apply(this, arguments) : (u("jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function()
					{
						var e = this.getAttribute && this.getAttribute("class") || "";
						e && s.data(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== t && s.data(this, "__className__") || "")
					}))
				}),
				w = /^[a-z]/,
				x = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
			s.swap && s.each(["height", "width", "reliableMarginRight"], function(e, t)
			{
				var r = s.cssHooks[t] && s.cssHooks[t].get;
				r && (s.cssHooks[t].get = function()
				{
					var e;
					return b = !0, e = r.apply(this, arguments), b = !1, e
				})
			}), s.swap = function(e, t, r, n)
			{
				var o, i, a = {};
				for (i in b || u("jQuery.swap() is undocumented and deprecated"), t) a[i] = e.style[i], e.style[i] = t[i];
				for (i in o = r.apply(e, n || []), t) e.style[i] = a[i];
				return o
			}, e("3.4.0") && "undefined" != typeof Proxy && (s.cssProps = new Proxy(s.cssProps ||
			{},
			{
				set: function()
				{
					return u("JQMIGRATE: jQuery.cssProps is deprecated"), Reflect.set.apply(this, arguments)
				}
			})), s.cssNumber || (s.cssNumber = {}), Q = s.fn.css, s.fn.css = function(e, t)
			{
				var r, n, o = this;
				return e && "object" == typeof e && !Array.isArray(e) ? (s.each(e, function(e, t)
				{
					s.fn.css.call(o, e, t)
				}), this) : ("number" == typeof t && (r = j(e), n = r, w.test(n) && x.test(n[0].toUpperCase() + n.slice(1)) || s.cssNumber[r] || u('Number-typed values are deprecated for jQuery.fn.css( "' + e + '", value )')), Q.apply(this, arguments))
			};
			var A, k, S, M, N = s.data;
			s.data = function(e, t, r)
			{
				var n, o, i;
				if (t && "object" == typeof t && 2 === arguments.length)
				{
					for (i in n = s.hasData(e) && N.call(this, e), o = {}, t) i !== j(i) ? (u("jQuery.data() always sets/gets camelCased names: " + i), n[i] = t[i]) : o[i] = t[i];
					return N.call(this, e, o), t
				}
				return t && "string" == typeof t && t !== j(t) && (n = s.hasData(e) && N.call(this, e)) && t in n ? (u("jQuery.data() always sets/gets camelCased names: " + t), 2 < arguments.length && (n[t] = r), n[t]) : N.apply(this, arguments)
			}, s.fx && (S = s.Tween.prototype.run, M = function(e)
			{
				return e
			}, s.Tween.prototype.run = function()
			{
				1 < s.easing[this.easing].length && (u("'jQuery.easing." + this.easing.toString() + "' should use only one argument"), s.easing[this.easing] = M), S.apply(this, arguments)
			}, A = s.fx.interval || 13, k = "jQuery.fx.interval is deprecated", n.requestAnimationFrame && Object.defineProperty(s.fx, "interval",
			{
				configurable: !0,
				enumerable: !0,
				get: function()
				{
					return n.document.hidden || u(k), A
				},
				set: function(e)
				{
					u(k), A = e
				}
			}));
			var R = s.fn.load,
				H = s.event.add,
				C = s.event.fix;
			s.event.props = [], s.event.fixHooks = {}, t(s.event.props, "concat", s.event.props.concat, "jQuery.event.props.concat() is deprecated and removed"), s.event.fix = function(e)
			{
				var t, r = e.type,
					n = this.fixHooks[r],
					o = s.event.props;
				if (o.length)
				{
					u("jQuery.event.props are deprecated and removed: " + o.join());
					while (o.length) s.event.addProp(o.pop())
				}
				if (n && !n._migrated_ && (n._migrated_ = !0, u("jQuery.event.fixHooks are deprecated and removed: " + r), (o = n.props) && o.length))
					while (o.length) s.event.addProp(o.pop());
				return t = C.call(this, e), n && n.filter ? n.filter(t, e) : t
			}, s.event.add = function(e, t)
			{
				return e === n && "load" === t && "complete" === n.document.readyState && u("jQuery(window).on('load'...) called after load event occurred"), H.apply(this, arguments)
			}, s.each(["load", "unload", "error"], function(e, t)
			{
				s.fn[t] = function()
				{
					var e = Array.prototype.slice.call(arguments, 0);
					return "load" === t && "string" == typeof e[0] ? R.apply(this, e) : (u("jQuery.fn." + t + "() is deprecated"), e.splice(0, 0, t), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), this))
				}
			}), s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, r)
			{
				s.fn[r] = function(e, t)
				{
					return u("jQuery.fn." + r + "() event shorthand is deprecated"), 0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
				}
			}), s(function()
			{
				s(n.document).triggerHandler("ready")
			}), s.event.special.ready = {
				setup: function()
				{
					this === n.document && u("'ready' event is deprecated")
				}
			}, s.fn.extend(
			{
				bind: function(e, t, r)
				{
					return u("jQuery.fn.bind() is deprecated"), this.on(e, null, t, r)
				},
				unbind: function(e, t)
				{
					return u("jQuery.fn.unbind() is deprecated"), this.off(e, null, t)
				},
				delegate: function(e, t, r, n)
				{
					return u("jQuery.fn.delegate() is deprecated"), this.on(t, e, r, n)
				},
				undelegate: function(e, t, r)
				{
					return u("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
				},
				hover: function(e, t)
				{
					return u("jQuery.fn.hover() is deprecated"), this.on("mouseenter", e).on("mouseleave", t || e)
				}
			});

			function T(e)
			{
				var t = n.document.implementation.createHTMLDocument("");
				return t.body.innerHTML = e, t.body && t.body.innerHTML
			}

			function P(e)
			{
				var t = e.replace(O, "<$1></$2>");
				t !== e && T(e) !== T(t) && u("HTML tags must be properly nested and closed: " + e)
			}
			var O = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
				q = s.htmlPrefilter;
			s.UNSAFE_restoreLegacyHtmlPrefilter = function()
			{
				s.htmlPrefilter = function(e)
				{
					return P(e), e.replace(O, "<$1></$2>")
				}
			}, s.htmlPrefilter = function(e)
			{
				return P(e), q(e)
			};
			var D, _ = s.fn.offset;
			s.fn.offset = function()
			{
				var e = this[0];
				return !e || e.nodeType && e.getBoundingClientRect ? _.apply(this, arguments) : (u("jQuery.fn.offset() requires a valid DOM element"), arguments.length ? this : void 0)
			}, s.ajax && (D = s.param, s.param = function(e, t)
			{
				var r = s.ajaxSettings && s.ajaxSettings.traditional;
				return void 0 === t && r && (u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), t = r), D.call(this, e, t)
			});
			var E, F, J = s.fn.andSelf || s.fn.addBack;
			return s.fn.andSelf = function()
			{
				return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), J.apply(this, arguments)
			}, s.Deferred && (E = s.Deferred, F = [
				["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"],
				["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"],
				["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]
			], s.Deferred = function(e)
			{
				var i = E(),
					a = i.promise();
				return i.pipe = a.pipe = function()
				{
					var o = arguments;
					return u("deferred.pipe() is deprecated"), s.Deferred(function(n)
					{
						s.each(F, function(e, t)
						{
							var r = "function" == typeof o[e] && o[e];
							i[t[1]](function()
							{
								var e = r && r.apply(this, arguments);
								e && "function" == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === a ? n.promise() : this, r ? [e] : arguments)
							})
						}), o = null
					}).promise()
				}, e && e.call(i, i), i
			}, s.Deferred.exceptionHook = E.exceptionHook), s
		})
}
catch (e)
{
	console.log(e)
}
try
{
	var sf_position = '0';
	var sf_templates = "<a href=\"{search_url_escaped}\">View All Results<\/a>";
	var sf_input = '.search-live';
	jQuery(document).ready(function()
	{
		jQuery(sf_input).ajaxyLiveSearch(
		{
			"expand": false,
			"searchUrl": "http:\/\/https://pandarudi.github.io/PselLibrary/\/?s=%s",
			"text": "Search",
			"delay": 500,
			"iwidth": 180,
			"width": 315,
			"ajaxUrl": "http:\/\/https://pandarudi.github.io/PselLibrary/\/wp-admin\/admin-ajax.php",
			"rtl": 0
		});
		jQuery(".live-search_ajaxy-selective-input").keyup(function()
		{
			var width = jQuery(this).val().length * 8;
			if (width < 50)
			{
				width = 50;
			}
			jQuery(this).width(width);
		});
		jQuery(".live-search_ajaxy-selective-search").click(function()
		{
			jQuery(this).find(".live-search_ajaxy-selective-input").focus();
		});
		jQuery(".live-search_ajaxy-selective-close").click(function()
		{
			jQuery(this).parent().remove();
		});
	})
}
catch (e)
{
	console.log(e)
}
try
{
	(function(w, d, n, s, t)
	{
		w[n] = w[n] || [];
		w[n].push(function()
		{
			Ya.Context.AdvManager.render(
			{
				blockId: "R-A-702425-8",
				renderTo: "yandex_rtb_R-A-702425-8",
				async: true
			});
		});
		t = d.getElementsByTagName("script")[0];
		s = d.createElement("script");
		s.type = "text/javascript";
		s.src = "//an.yandex.ru/system/context.js";
		s.async = true;
		t.parentNode.insertBefore(s, t);
	})(this, this.document, "yandexContextAsyncCallbacks");
}
catch (e)
{
	console.log(e)
}
try
{
	jQuery(document).ready(function()
	{
		$window = jQuery(window), $the_post = jQuery('#the-post'), $wrapper = jQuery("#wrapper");
		if (tie.SmothScroll)
		{
			tie_SmothScroll();
		}
		$wrapper.fitVids();
		jQuery("a.lightbox-enabled, a[rel='lightbox-enabled']").iLightBox(
		{
			skin: tie.lightbox_skin
		});
		if (tie.lightbox_all)
		{
			$the_post.find("div.entry a").not("div.entry .gallery a, div.entry .flat-social a").each(function(i, el)
			{
				var href_value = el.href;
				if (/\.(jpg|jpeg|png|gif)$/.test(href_value))
				{
					jQuery(this).iLightBox(
					{
						skin: tie.lightbox_skin
					});
				}
			});
		};
		if (tie.lightbox_gallery)
		{
			$the_post.find("div.entry .gallery a").each(function(i, el)
			{
				var href_value = el.href;
				if (/\.(jpg|jpeg|png|gif)$/.test(href_value))
				{
					jQuery(this).addClass('ilightbox-gallery');
				}
			});
			$the_post.find('.ilightbox-gallery').iLightBox(
			{
				skin: tie.lightbox_skin,
				path: tie.lightbox_thumb,
				controls:
				{
					arrows: tie.lightbox_arrows,
				}
			});
		};
		jQuery('section.videos-lightbox a.single-videolighbox, .lightbox-img').iLightBox(
		{
			skin: tie.lightbox_skin,
			path: tie.lightbox_thumb,
			controls:
			{
				arrows: tie.lightbox_arrows,
			}
		});
		jQuery(".woocommerce-product-gallery__trigger").iLightBox(
		{
			skin: tie.lightbox_skin,
			path: tie.lightbox_thumb,
			controls:
			{
				arrows: tie.lightbox_arrows,
			}
		});
		jQuery("#slide-out-open").click(function()
		{
			if (jQuery(this).hasClass("slide-out-open"))
			{
				$wrapper.css(
				{
					overflow: "hidden"
				});
				jQuery("body").addClass('js-nav');
				jQuery(this).removeClass('slide-out-open').addClass('slide-out-close');
				return false;
			}
			else if (jQuery(this).hasClass("slide-out-close"))
			{
				$wrapper.css(
				{
					overflow: "auto"
				});
				jQuery("body").removeClass('js-nav');
				jQuery(this).removeClass('slide-out-close').addClass('slide-out-open');
				return false;
			}
		});
		if (!Modernizr.csstransforms || !Modernizr.csstransitions || !Modernizr.csstransforms3d)
		{
			var TieSlideOpenIE = false;
			jQuery('#slide-out').hide();
			jQuery("#slide-out-open").click(function()
			{
				jQuery('#mobile-menu').show();
				jQuery('#slide-out').show();
				jQuery(this).hide();
				jQuery('div.wrapper-outer').css(
				{
					overflow: "hidden"
				});
				jQuery('#open-slide-overlay').remove();
				jQuery('body').append('<div id="open-slide-overlay"></div>');
				TieSlideOpenIE = true;
			});
			jQuery(document).on("click", "#open-slide-overlay", function()
			{
				if (TieSlideOpenIE)
				{
					jQuery('#slide-out').hide();
					jQuery('#mobile-menu').hide();
					jQuery('#slide-out-open').show();
					jQuery('div.wrapper-outer').css(
					{
						overflow: "auto"
					});
					jQuery(this).remove();
					TieSlideOpenIE = false;
				}
			});
		}
		if (tie.mobile_menu_active)
		{
			var mobileItems = jQuery('#main-nav div.main-menu').clone();
			mobileItems.find('div.mega-menu-content').remove();
			mobileItems.find('li.menu-item-has-children').append('<i class="mobile-arrows fa fa-chevron-down"></i>');
			jQuery('#slide-out #mobile-menu').append(mobileItems);
			if (tie.mobile_menu_top)
			{
				var mobileItemsTop = jQuery('#top-nav div.top-menu ul.menu').clone();
				mobileItemsTop.find('li.menu-item-has-children').append('<i class="mobile-arrows fa fa-chevron-down"></i>');
				jQuery('#slide-out #mobile-menu').append(mobileItemsTop);
			}
		}
		jQuery("#mobile-menu li.menu-item-has-children i.mobile-arrows").click(function()
		{
			if (jQuery(this).hasClass("fa-chevron-down"))
				jQuery(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
			else
				jQuery(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
			jQuery(this).parent().find('ul:first').toggle();
		});
		var $topcontrol = jQuery('#topcontrol');
		$window.scroll(function()
		{
			if (jQuery(this).scrollTop() > 100)
			{
				$topcontrol.css(
				{
					bottom: "10px"
				});
			}
			else
			{
				$topcontrol.css(
				{
					bottom: "-100px"
				});
			}
		});
		$topcontrol.click(function()
		{
			jQuery('html, body').animate(
			{
				scrollTop: '0px'
			}, 800);
			return false;
		});
		jQuery('a.go-to-the-post').click(function()
		{
			jQuery('html, body').animate(
			{
				scrollTop: $the_post.offset().top
			}, 500);
			return false;
		});
		jQuery('.tooltip-nw').tipsy(
		{
			fade: true,
			gravity: 'nw'
		});
		jQuery('.tooltip-ne').tipsy(
		{
			fade: true,
			gravity: 'ne'
		});
		jQuery('.tooltip-w').tipsy(
		{
			fade: true,
			gravity: 'w'
		});
		jQuery('.tooltip-e').tipsy(
		{
			fade: true,
			gravity: 'e'
		});
		jQuery('.tooltip-sw').tipsy(
		{
			fade: true,
			gravity: 'w'
		});
		jQuery('.tooltip-se').tipsy(
		{
			fade: true,
			gravity: 'e'
		});
		jQuery('.ttip, .tooltip-n').tipsy(
		{
			fade: true,
			gravity: 's'
		});
		jQuery('.tooldown, .tooltip-s').tipsy(
		{
			fade: true,
			gravity: 'n'
		});
		jQuery("h3.toggle-head-open").click(function()
		{
			jQuery(this).parent().find("div.toggle-content").slideToggle("slow");
			jQuery(this).hide();
			jQuery(this).parent().find("h3.toggle-head-close").show();
		});
		jQuery("h3.toggle-head-close").click(function()
		{
			jQuery(this).parent().find("div.toggle-content").slideToggle("slow");
			jQuery(this).hide();
			jQuery(this).parent().find("h3.toggle-head-open").show();
		});
		jQuery("#main-nav li.mega-menu:not(#main-nav li li)").hover(function()
		{
			var menuWidth = jQuery('#main-nav div.container').width();
			var menuPosition = jQuery('#main-nav div.container').offset();
			var menuItemPosition = jQuery(this).offset();
			var PositionLeft = menuItemPosition.left - menuPosition.left + 1;
			jQuery(this).find('div.mega-menu-block').css(
			{
				left: '-' + PositionLeft + 'px',
				width: menuWidth
			});
		});
		jQuery("div.mega-cat-wrapper").each(function()
		{
			jQuery(this).find("div.mega-cat-content-tab").hide();
			jQuery(this).find("ul.mega-cat-sub-categories li:first").addClass("cat-active").show();
			jQuery(this).find("div.mega-cat-content-tab:first").addClass("already-loaded").show();
			jQuery(this).find("ul.mega-cat-sub-categories li").click(function(event)
			{
				event.preventDefault();
				jQuery(this).parent().find("li").removeClass("cat-active");
				jQuery(this).addClass("cat-active");
				jQuery(this).parent().parent().parent().find("div.mega-cat-content-tab").hide();
				var activeTab = jQuery(this).find("a").attr("href");
				if (jQuery(activeTab).hasClass("already-loaded"))
				{
					jQuery(activeTab).fadeIn();
				}
				else
				{
					jQuery(activeTab).addClass("loading-items").fadeIn(600, function()
					{
						jQuery(this).removeClass("loading-items").addClass("already-loaded");
					});
				}
				return false;
			});
		});
		var userAgent = navigator.userAgent;
		if (userAgent.match(/iPad/i))
		{
			if (userAgent.search("Safari") >= 0 && userAgent.search("Chrome") < 0)
			{
				jQuery('#main-nav li.menu-item-has-children a, #main-nav li.mega-menu a, #top-nav li.menu-item-has-children a').attr("onclick", "return true");
			}
		}
		jQuery("div.cat-box-content").each(function()
		{
			jQuery(this).find("div.cat-tabs-wrap").hide();
			jQuery(this).find("div.cat-tabs-header ul li:first").addClass("active").show();
			jQuery(this).find("div.cat-tabs-wrap:first").show();
			jQuery(this).find("div.cat-tabs-header ul li").click(function(event)
			{
				event.preventDefault();
				jQuery(this).parent().find("li").removeClass("active");
				jQuery(this).addClass("active");
				jQuery(this).parent().parent().parent().find("div.cat-tabs-wrap").hide();
				var activeTab = jQuery(this).find("a").attr("href");
				jQuery(activeTab).fadeIn();
				return false;
			});
		});
		var $tabbed_Widget_tabs_wrap = jQuery("#tabbed-widget div.tabs-wrap");
		$tabbed_Widget_tabs_wrap.hide();
		jQuery("#tabbed-widget ul.posts-taps li:first").addClass("active").show();
		jQuery("#tabbed-widget div.tabs-wrap:first").show();
		jQuery("#tabbed-widget li.tabs").click(function()
		{
			jQuery("#tabbed-widget ul.posts-taps li").removeClass("active");
			jQuery(this).addClass("active");
			$tabbed_Widget_tabs_wrap.hide();
			var activeTab = jQuery(this).find("a").attr("href");
			jQuery(activeTab).slideDown();
			return false;
		});
		$window.smartresize(function()
		{
			jQuery("div.group_items-box").each(function(i, el)
			{
				var groups_height = jQuery(this).find('div.group_items:first-child').height();
				jQuery(this).height(groups_height);
			});
		});
		var stickySidebarTop = 0;
		var $fixed_enabled = jQuery("#main-nav.fixed-enabled");
		if (!tie_isMobile.any() && $fixed_enabled.length > 0)
		{
			stickySidebarTop = 50;
			jQuery('#theme-header').imagesLoaded(function()
			{
				jQuery(function()
				{
					var navScroll_1 = jQuery(document).scrollTop();
					var headerHeight = $fixed_enabled.offset().top;
					$window.scroll(function()
					{
						var navScroll_2 = jQuery(document).scrollTop();
						if (navScroll_2 > headerHeight)
						{
							$fixed_enabled.addClass('fixed-nav');
						}
						else
						{
							$fixed_enabled.removeClass('fixed-nav');
						}
						if (navScroll_2 > navScroll_1)
						{
							$fixed_enabled.removeClass('fixed-nav-appear');
						}
						else
						{
							$fixed_enabled.addClass('fixed-nav-appear');
						}
						navScroll_1 = jQuery(document).scrollTop();
					});
				});
			});
		}
		if (!tie_isMobile.any() && tie.sticky_sidebar)
		{
			jQuery('#sidebar').theiaStickySidebar(
			{
				"containerSelector": ".content",
				"additionalMarginTop": stickySidebarTop
			});
		}
		jQuery(function()
		{
			var $check_also_box = jQuery("#check-also-box");
			if (tie.is_singular && $check_also_box.length > 0)
			{
				var articleHeight = $the_post.outerHeight();
				var checkAlsoClosed = false;
				$window.scroll(function()
				{
					if (!checkAlsoClosed)
					{
						var articleScroll = jQuery(document).scrollTop();
						if (articleScroll > articleHeight)
						{
							$check_also_box.addClass('show-check-also');
						}
						else
						{
							$check_also_box.removeClass('show-check-also');
						}
					}
				});
			}
			jQuery('#check-also-close').click(function()
			{
				$check_also_box.removeClass("show-check-also");
				checkAlsoClosed = true;
				return false;
			});
		});
		if (tie.is_singular && tie.reading_indicator)
		{
			var reading_content = $the_post.find('.entry');
			if (reading_content.length > 0)
			{
				reading_content.imagesLoaded(function()
				{
					var content_height = reading_content.height();
					window_height = $window.height();
					$window.scroll(function()
					{
						var percent = 0,
							content_offset = reading_content.offset().top;
						window_offest = $window.scrollTop();
						if (window_offest > content_offset)
						{
							percent = 100 * (window_offest - content_offset) / (content_height - window_height);
						}
						jQuery('#reading-position-indicator').css('width', percent + '%');
					});
				});
			}
		}
		if (tie.is_singular)
		{
			jQuery("#reply-title").after('<div class="stripe-line"></div>');
		}
	});

	function createTicker()
	{
		var tickerLIs = jQuery("#breaking-news ul").children();
		tickerItems = new Array();
		tickerLIs.each(function(el)
		{
			tickerItems.push(jQuery(this).html());
		});
		i = 0;
		rotateTicker();
	}
	var isInTag = false;

	function typetext()
	{
		var $breaking_news = jQuery('#breaking-news ul');
		if ($breaking_news.length > 0)
		{
			var thisChar = tickerText.substr(c, 1);
			if (thisChar == '<')
			{
				isInTag = true;
			}
			if (thisChar == '>')
			{
				isInTag = false;
			}
			$breaking_news.html(tickerText.substr(0, c++));
			if (c < tickerText.length + 1)
				if (isInTag)
				{
					typetext();
				}
				else
				{
					setTimeout("typetext()", 35);
				}
			else
			{
				c = 1;
				tickerText = "";
			}
		}
	}
	jQuery(function()
	{
		var win_height_padded = $window.height() * .9;
		$window.on('scroll', tieRevealOnScroll);

		function tieRevealOnScroll()
		{
			var scrolled = $window.scrollTop(),
				win_height_padded = $window.height() * .9;
			jQuery("body.lazy-enabled #theme-footer div.post-thumbnail, body.lazy-enabled #main-content div.post-thumbnail, body.lazy-enabled #main-content img:not(.ei-slider-thumbs img), body.lazy-enabled #featured-posts").each(function()
			{
				var $this = jQuery(this),
					offsetTop = $this.offset().top;
				if (scrolled + win_height_padded > offsetTop)
				{
					jQuery(this).addClass('tie-appear');
				}
			});
		}
		tieRevealOnScroll();
	});
	var tie_isMobile = {
		Android: function()
		{
			return navigator.userAgent.match(/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i)
		},
		BlackBerry: function()
		{
			return navigator.userAgent.match(/BlackBerry/i)
		},
		iOS: function()
		{
			return navigator.userAgent.match(/iPhone|iPod/i)
		},
		Opera: function()
		{
			return navigator.userAgent.match(/Opera Mini/i)
		},
		Windows: function()
		{
			return navigator.userAgent.match(/IEMobile/i)
		},
		any: function()
		{
			return tie_isMobile.Android() || tie_isMobile.BlackBerry() || tie_isMobile.iOS() || tie_isMobile.Opera() || tie_isMobile.Windows()
		}
	};
	(function(e, t)
	{
		var n = function(e, t, n)
		{
			var r;
			return function()
			{
				function u()
				{
					if (!n) e.apply(s, o);
					r = null
				}
				var s = this,
					o = arguments;
				if (r) clearTimeout(r);
				else if (n) e.apply(s, o);
				r = setTimeout(u, t || 100)
			}
		};
		jQuery.fn[t] = function(e)
		{
			return e ? this.bind("resize", n(e)) : this.trigger(t)
		}
	})(jQuery, "smartresize")

	function tie_SmothScroll()
	{
		function c()
		{
			var e = false;
			if (e)
			{
				N("keydown", y)
			}
			if (t.keyboardSupport && !e)
			{
				T("keydown", y)
			}
		}

		function h()
		{
			if (!document.body) return;
			var e = document.body;
			var i = document.documentElement;
			var a = window.innerHeight;
			var f = e.scrollHeight;
			o = document.compatMode.indexOf("CSS") >= 0 ? i : e;
			u = e;
			c();
			s = true;
			if (top != self)
			{
				r = true
			}
			else if (f > a && (e.offsetHeight <= a || i.offsetHeight <= a))
			{
				var l = false;
				var h = function()
				{
					if (!l && i.scrollHeight != document.height)
					{
						l = true;
						setTimeout(function()
						{
							i.style.height = document.height + "px";
							l = false
						}, 500)
					}
				};
				i.style.height = "auto";
				setTimeout(h, 10);
				if (o.offsetHeight <= a)
				{
					var p = document.createElement("div");
					p.style.clear = "both";
					e.appendChild(p)
				}
			}
			if (!t.fixedBackground && !n)
			{
				e.style.backgroundAttachment = "scroll";
				i.style.backgroundAttachment = "scroll"
			}
		}

		function m(e, n, r, i)
		{
			i || (i = 1e3);
			k(n, r);
			if (t.accelerationMax != 1)
			{
				var s = +(new Date);
				var o = s - v;
				if (o < t.accelerationDelta)
				{
					var u = (1 + 30 / o) / 2;
					if (u > 1)
					{
						u = Math.min(u, t.accelerationMax);
						n *= u;
						r *= u
					}
				}
				v = +(new Date)
			}
			p.push(
			{
				x: n,
				y: r,
				lastX: n < 0 ? .99 : -.99,
				lastY: r < 0 ? .99 : -.99,
				start: +(new Date)
			});
			if (d)
			{
				return
			}
			var a = e === document.body;
			var f = function(s)
			{
				var o = +(new Date);
				var u = 0;
				var l = 0;
				for (var c = 0; c < p.length; c++)
				{
					var h = p[c];
					var v = o - h.start;
					var m = v >= t.animationTime;
					var g = m ? 1 : v / t.animationTime;
					if (t.pulseAlgorithm)
					{
						g = D(g)
					}
					var y = h.x * g - h.lastX >> 0;
					var b = h.y * g - h.lastY >> 0;
					u += y;
					l += b;
					h.lastX += y;
					h.lastY += b;
					if (m)
					{
						p.splice(c, 1);
						c--
					}
				}
				if (a)
				{
					window.scrollBy(u, l)
				}
				else
				{
					if (u) e.scrollLeft += u;
					if (l) e.scrollTop += l
				}
				if (!n && !r)
				{
					p = []
				}
				if (p.length)
				{
					M(f, e, i / t.frameRate + 1)
				}
				else
				{
					d = false
				}
			};
			M(f, e, 0);
			d = true
		}

		function g(e)
		{
			if (!s)
			{
				h()
			}
			var n = e.target;
			var r = x(n);
			if (!r || e.defaultPrevented || C(u, "embed") || C(n, "embed") && /\.pdf/i.test(n.src))
			{
				return true
			}
			var i = e.wheelDeltaX || 0;
			var o = e.wheelDeltaY || 0;
			if (!i && !o)
			{
				o = e.wheelDelta || 0
			}
			if (!t.touchpadSupport && A(o))
			{
				return true
			}
			if (Math.abs(i) > 1.2)
			{
				i *= t.stepSize / 120
			}
			if (Math.abs(o) > 1.2)
			{
				o *= t.stepSize / 120
			}
			m(r, -i, -o);
			e.preventDefault()
		}

		function y(e)
		{
			var n = e.target;
			var r = e.ctrlKey || e.altKey || e.metaKey || e.shiftKey && e.keyCode !== l.spacebar;
			if (/input|textarea|select|embed/i.test(n.nodeName) || n.isContentEditable || e.defaultPrevented || r)
			{
				return true
			}
			if (C(n, "button") && e.keyCode === l.spacebar)
			{
				return true
			}
			var i, s = 0,
				o = 0;
			var a = x(u);
			var f = a.clientHeight;
			if (a == document.body)
			{
				f = window.innerHeight
			}
			switch (e.keyCode)
			{
				case l.up:
					o = -t.arrowScroll;
					break;
				case l.down:
					o = t.arrowScroll;
					break;
				case l.spacebar:
					i = e.shiftKey ? 1 : -1;
					o = -i * f * .9;
					break;
				case l.pageup:
					o = -f * .9;
					break;
				case l.pagedown:
					o = f * .9;
					break;
				case l.home:
					o = -a.scrollTop;
					break;
				case l.end:
					var c = a.scrollHeight - a.scrollTop - f;
					o = c > 0 ? c + 10 : 0;
					break;
				case l.left:
					s = -t.arrowScroll;
					break;
				case l.right:
					s = t.arrowScroll;
					break;
				default:
					return true
			}
			m(a, s, o);
			e.preventDefault()
		}

		function b(e)
		{
			u = e.target
		}

		function S(e, t)
		{
			for (var n = e.length; n--;) w[E(e[n])] = t;
			return t
		}

		function x(e)
		{
			var t = [];
			var n = o.scrollHeight;
			do {
				var i = w[E(e)];
				if (i)
				{
					return S(t, i)
				}
				t.push(e);
				if (n === e.scrollHeight)
				{
					if (!r || o.clientHeight + 10 < n)
					{
						return S(t, document.body)
					}
				}
				else if (e.clientHeight + 10 < e.scrollHeight)
				{
					overflow = getComputedStyle(e, "").getPropertyValue("overflow-y");
					if (overflow === "scroll" || overflow === "auto")
					{
						return S(t, e)
					}
				}
			} while (e = e.parentNode)
		}

		function T(e, t, n)
		{
			window.addEventListener(e, t, n || false)
		}

		function N(e, t, n)
		{
			window.removeEventListener(e, t, n || false)
		}

		function C(e, t)
		{
			return (e.nodeName || "").toLowerCase() === t.toLowerCase()
		}

		function k(e, t)
		{
			e = e > 0 ? 1 : -1;
			t = t > 0 ? 1 : -1;
			if (i.x !== e || i.y !== t)
			{
				i.x = e;
				i.y = t;
				p = [];
				v = 0
			}
		}

		function A(e)
		{
			if (!e) return;
			e = Math.abs(e);
			f.push(e);
			f.shift();
			clearTimeout(L);
			var t = O(f[0], 120) && O(f[1], 120) && O(f[2], 120);
			return !t
		}

		function O(e, t)
		{
			return Math.floor(e / t) == e / t
		}

		function _(e)
		{
			var n, r, i;
			e = e * t.pulseScale;
			if (e < 1)
			{
				n = e - (1 - Math.exp(-e))
			}
			else
			{
				r = Math.exp(-1);
				e -= 1;
				i = 1 - Math.exp(-e);
				n = r + i * (1 - r)
			}
			return n * t.pulseNormalize
		}

		function D(e)
		{
			if (e >= 1) return 1;
			if (e <= 0) return 0;
			if (t.pulseNormalize == 1)
			{
				t.pulseNormalize /= _(1)
			}
			return _(e)
		}
		var e = {
			frameRate: 150,
			animationTime: 400,
			stepSize: 120,
			pulseAlgorithm: true,
			pulseScale: 8,
			pulseNormalize: 1,
			accelerationDelta: 20,
			accelerationMax: 1,
			keyboardSupport: true,
			arrowScroll: 50,
			touchpadSupport: true,
			fixedBackground: true,
			excluded: ""
		};
		var t = e;
		var n = false;
		var r = false;
		var i = {
			x: 0,
			y: 0
		};
		var s = false;
		var o = document.documentElement;
		var u;
		var a;
		var f = [120, 120, 120];
		var l = {
			left: 37,
			up: 38,
			right: 39,
			down: 40,
			spacebar: 32,
			pageup: 33,
			pagedown: 34,
			end: 35,
			home: 36
		};
		var t = e;
		var p = [];
		var d = false;
		var v = +(new Date);
		var w = {};
		setInterval(function()
		{
			w = {}
		}, 10 * 1e3);
		var E = function()
		{
			var e = 0;
			return function(t)
			{
				return t.uniqueID || (t.uniqueID = e++)
			}
		}();
		var L;
		var M = function()
		{
			return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(e, t, n)
			{
				window.setTimeout(e, n || 1e3 / 60)
			}
		}();
		var P = /chrome/i.test(window.navigator.userAgent);
		var H = null;
		if ("onwheel" in document.createElement("div")) H = "wheel";
		else if ("onmousewheel" in document.createElement("div")) H = "mousewheel";
		if (H && P)
		{
			T(H, g);
			T("mousedown", b);
			T("load", h)
		}
	};
	window.Modernizr = function(a, b, c)
		{
			function B(a)
			{
				j.cssText = a
			}

			function C(a, b)
			{
				return B(m.join(a + ";") + (b || ""))
			}

			function D(a, b)
			{
				return typeof a === b
			}

			function E(a, b)
			{
				return !!~("" + a).indexOf(b)
			}

			function F(a, b)
			{
				for (var d in a)
				{
					var e = a[d];
					if (!E(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
				}
				return !1
			}

			function G(a, b, d)
			{
				for (var e in a)
				{
					var f = b[a[e]];
					if (f !== c) return d === !1 ? a[e] : D(f, "function") ? f.bind(d || b) : f
				}
				return !1
			}

			function H(a, b, c)
			{
				var d = a.charAt(0).toUpperCase() + a.slice(1),
					e = (a + " " + o.join(d + " ") + d).split(" ");
				return D(b, "string") || D(b, "undefined") ? F(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "), G(e, b, c))
			}
			var d = "2.7.0",
				e = {},
				f = !0,
				g = b.documentElement,
				h = "modernizr",
				i = b.createElement(h),
				j = i.style,
				k, l = {}.toString,
				m = " -webkit- -moz- -o- -ms- ".split(" "),
				n = "Webkit Moz O ms",
				o = n.split(" "),
				p = n.toLowerCase().split(" "),
				q = {
					svg: "http://www.w3.org/2000/svg"
				},
				r = {},
				s = {},
				t = {},
				u = [],
				v = u.slice,
				w, x = function(a, c, d, e)
				{
					var f, i, j, k, l = b.createElement("div"),
						m = b.body,
						n = m || b.createElement("body");
					if (parseInt(d, 10))
						while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
					return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
				},
				y = function(b)
				{
					var c = a.matchMedia || a.msMatchMedia;
					if (c) return c(b).matches;
					var d;
					return x("@media " + b + " { #" + h + " { position: absolute; } }", function(b)
					{
						d = (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)["position"] == "absolute"
					}), d
				},
				z = {}.hasOwnProperty,
				A;
			!D(z, "undefined") && !D(z.call, "undefined") ? A = function(a, b)
			{
				return z.call(a, b)
			} : A = function(a, b)
			{
				return b in a && D(a.constructor.prototype[b], "undefined")
			}, Function.prototype.bind || (Function.prototype.bind = function(b)
			{
				var c = this;
				if (typeof c != "function") throw new TypeError;
				var d = v.call(arguments, 1),
					e = function()
					{
						if (this instanceof e)
						{
							var a = function() {};
							a.prototype = c.prototype;
							var f = new a,
								g = c.apply(f, d.concat(v.call(arguments)));
							return Object(g) === g ? g : f
						}
						return c.apply(b, d.concat(v.call(arguments)))
					};
				return e
			}), r.touch = function()
			{
				var c;
				return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : x(["@media (", m.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a)
				{
					c = a.offsetTop === 9
				}), c
			}, r.csstransforms = function()
			{
				return !!H("transform")
			}, r.csstransforms3d = function()
			{
				var a = !!H("perspective");
				return a && "webkitPerspective" in g.style && x("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c)
				{
					a = b.offsetLeft === 9 && b.offsetHeight === 3
				}), a
			}, r.csstransitions = function()
			{
				return H("transition")
			}, r.svg = function()
			{
				return !!b.createElementNS && !!b.createElementNS(q.svg, "svg").createSVGRect
			};
			for (var I in r) A(r, I) && (w = I.toLowerCase(), e[w] = r[I](), u.push((e[w] ? "" : "no-") + w));
			return e.addTest = function(a, b)
				{
					if (typeof a == "object")
						for (var d in a) A(a, d) && e.addTest(d, a[d]);
					else
					{
						a = a.toLowerCase();
						if (e[a] !== c) return e;
						b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
					}
					return e
				}, B(""), i = k = null,
				function(a, b)
				{
					function l(a, b)
					{
						var c = a.createElement("p"),
							d = a.getElementsByTagName("head")[0] || a.documentElement;
						return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
					}

					function m()
					{
						var a = s.elements;
						return typeof a == "string" ? a.split(" ") : a
					}

					function n(a)
					{
						var b = j[a[h]];
						return b || (b = {}, i++, a[h] = i, j[i] = b), b
					}

					function o(a, c, d)
					{
						c || (c = b);
						if (k) return c.createElement(a);
						d || (d = n(c));
						var g;
						return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a), g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g
					}

					function p(a, c)
					{
						a || (a = b);
						if (k) return a.createDocumentFragment();
						c = c || n(a);
						var d = c.frag.cloneNode(),
							e = 0,
							f = m(),
							g = f.length;
						for (; e < g; e++) d.createElement(f[e]);
						return d
					}

					function q(a, b)
					{
						b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c)
						{
							return s.shivMethods ? o(c, a, b) : b.createElem(c)
						}, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function(a)
						{
							return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
						}) + ");return n}")(s, b.frag)
					}

					function r(a)
					{
						a || (a = b);
						var c = n(a);
						return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a
					}
					var c = "3.7.0",
						d = a.html5 ||
						{},
						e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
						f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
						g, h = "_html5shiv",
						i = 0,
						j = {},
						k;
					(function()
					{
						try
						{
							var a = b.createElement("a");
							a.innerHTML = "<xyz></xyz>", g = "hidden" in a, k = a.childNodes.length == 1 || function()
							{
								b.createElement("a");
								var a = b.createDocumentFragment();
								return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
							}()
						}
						catch (c)
						{
							g = !0, k = !0
						}
					})();
					var s = {
						elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
						version: c,
						shivCSS: d.shivCSS !== !1,
						supportsUnknownElements: k,
						shivMethods: d.shivMethods !== !1,
						type: "default",
						shivDocument: r,
						createElement: o,
						createDocumentFragment: p
					};
					a.html5 = s, r(b)
				}(this, b), e._version = d, e._prefixes = m, e._domPrefixes = p, e._cssomPrefixes = o, e.mq = y, e.testProp = function(a)
				{
					return F([a])
				}, e.testAllProps = H, e.testStyles = x, e.prefixed = function(a, b, c)
				{
					return b ? H(a, b, c) : H(a, "pfx")
				}, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + u.join(" ") : ""), e
		}(this, this.document),
		function(a, b, c)
		{
			function d(a)
			{
				return "[object Function]" == o.call(a)
			}

			function e(a)
			{
				return "string" == typeof a
			}

			function f()
			{}

			function g(a)
			{
				return !a || "loaded" == a || "complete" == a || "uninitialized" == a
			}

			function h()
			{
				var a = p.shift();
				q = 1, a ? a.t ? m(function()
				{
					("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
				}, 0) : (a(), h()) : q = 0
			}

			function i(a, c, d, e, f, i, j)
			{
				function k(b)
				{
					if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b))
					{
						"img" != a && m(function()
						{
							t.removeChild(l)
						}, 50);
						for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
					}
				}
				var j = j || B.errorTimeout,
					l = b.createElement(a),
					o = 0,
					r = 0,
					u = {
						t: d,
						s: c,
						e: f,
						a: i,
						x: j
					};
				1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function()
				{
					k.call(this, r)
				}, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
			}

			function j(a, b, c, d, f)
			{
				return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
			}

			function k()
			{
				var a = B;
				return a.loader = {
					load: j,
					i: 0
				}, a
			}
			var l = b.documentElement,
				m = a.setTimeout,
				n = b.getElementsByTagName("script")[0],
				o = {}.toString,
				p = [],
				q = 0,
				r = "MozAppearance" in l.style,
				s = r && !!b.createRange().compareNode,
				t = s ? l : n.parentNode,
				l = a.opera && "[object Opera]" == o.call(a.opera),
				l = !!b.attachEvent && !l,
				u = r ? "object" : l ? "script" : "img",
				v = l ? "script" : u,
				w = Array.isArray || function(a)
				{
					return "[object Array]" == o.call(a)
				},
				x = [],
				y = {},
				z = {
					timeout: function(a, b)
					{
						return b.length && (a.timeout = b[0]), a
					}
				},
				A, B;
			B = function(a)
			{
				function b(a)
				{
					var a = a.split("!"),
						b = x.length,
						c = a.pop(),
						d = a.length,
						c = {
							url: c,
							origUrl: c,
							prefixes: a
						},
						e, f, g;
					for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
					for (f = 0; f < b; f++) c = x[f](c);
					return c
				}

				function g(a, e, f, g, h)
				{
					var i = b(a),
						j = i.autoCallback;
					i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function()
					{
						k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
					})))
				}

				function h(a, b)
				{
					function c(a, c)
					{
						if (a)
						{
							if (e(a)) c || (j = function()
							{
								var a = [].slice.call(arguments);
								k.apply(this, a), l()
							}), g(a, j, b, 0, h);
							else if (Object(a) === a)
								for (n in m = function()
									{
										var b = 0,
											c;
										for (c in a) a.hasOwnProperty(c) && b++;
										return b
									}(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function()
								{
									var a = [].slice.call(arguments);
									k.apply(this, a), l()
								} : j[n] = function(a)
								{
									return function()
									{
										var b = [].slice.call(arguments);
										a && a.apply(this, b), l()
									}
								}(k[n])), g(a[n], j, b, n, h))
						}
						else !c && l()
					}
					var h = !!a.test,
						i = a.load || a.both,
						j = a.callback || f,
						k = j,
						l = a.complete || f,
						m, n;
					c(h ? a.yep : a.nope, !!i), i && c(i)
				}
				var i, j, l = this.yepnope.loader;
				if (e(a)) g(a, 0, l, 0);
				else if (w(a))
					for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
				else Object(a) === a && h(a, l)
			}, B.addPrefix = function(a, b)
			{
				z[a] = b
			}, B.addFilter = function(a)
			{
				x.push(a)
			}, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function()
			{
				b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
			}, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j)
			{
				var k = b.createElement("script"),
					l, o, e = e || B.errorTimeout;
				k.src = a;
				for (o in d) k.setAttribute(o, d[o]);
				c = j ? h : c || f, k.onreadystatechange = k.onload = function()
				{
					!l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
				}, m(function()
				{
					l || (l = 1, c(1))
				}, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
			}, a.yepnope.injectCss = function(a, c, d, e, g, i)
			{
				var e = b.createElement("link"),
					j, c = i ? h : c || f;
				e.href = a, e.rel = "stylesheet", e.type = "text/css";
				for (j in d) e.setAttribute(j, d[j]);
				g || (n.parentNode.insertBefore(e, n), m(c, 0))
			}
		}(this, document), Modernizr.load = function()
		{
			yepnope.apply(window, [].slice.call(arguments, 0))
		};
	! function(n)
	{
		"function" == typeof define && define.amd ? define(["jquery"], function(e)
		{
			return n(e)
		}) : "object" == typeof module && "object" == typeof module.exports ? exports = n(require("jquery")) : n(jQuery)
	}(function(n)
	{
		function e(n)
		{
			var e = 7.5625,
				t = 2.75;
			return n < 1 / t ? e * n * n : n < 2 / t ? e * (n -= 1.5 / t) * n + .75 : n < 2.5 / t ? e * (n -= 2.25 / t) * n + .9375 : e * (n -= 2.625 / t) * n + .984375
		}
		void 0 !== n.easing && (n.easing.jswing = n.easing.swing);
		var t = Math.pow,
			u = Math.sqrt,
			r = Math.sin,
			i = Math.cos,
			a = Math.PI,
			c = 1.70158,
			o = 1.525 * c,
			s = 2 * a / 3,
			f = 2 * a / 4.5;
		n.extend(n.easing,
		{
			def: "easeOutQuad",
			swing: function(e)
			{
				return n.easing[n.easing.def](e)
			},
			easeInQuad: function(n)
			{
				return n * n
			},
			easeOutQuad: function(n)
			{
				return 1 - (1 - n) * (1 - n)
			},
			easeInOutQuad: function(n)
			{
				return n < .5 ? 2 * n * n : 1 - t(-2 * n + 2, 2) / 2
			},
			easeInCubic: function(n)
			{
				return n * n * n
			},
			easeOutCubic: function(n)
			{
				return 1 - t(1 - n, 3)
			},
			easeInOutCubic: function(n)
			{
				return n < .5 ? 4 * n * n * n : 1 - t(-2 * n + 2, 3) / 2
			},
			easeInQuart: function(n)
			{
				return n * n * n * n
			},
			easeOutQuart: function(n)
			{
				return 1 - t(1 - n, 4)
			},
			easeInOutQuart: function(n)
			{
				return n < .5 ? 8 * n * n * n * n : 1 - t(-2 * n + 2, 4) / 2
			},
			easeInQuint: function(n)
			{
				return n * n * n * n * n
			},
			easeOutQuint: function(n)
			{
				return 1 - t(1 - n, 5)
			},
			easeInOutQuint: function(n)
			{
				return n < .5 ? 16 * n * n * n * n * n : 1 - t(-2 * n + 2, 5) / 2
			},
			easeInSine: function(n)
			{
				return 1 - i(n * a / 2)
			},
			easeOutSine: function(n)
			{
				return r(n * a / 2)
			},
			easeInOutSine: function(n)
			{
				return -(i(a * n) - 1) / 2
			},
			easeInExpo: function(n)
			{
				return 0 === n ? 0 : t(2, 10 * n - 10)
			},
			easeOutExpo: function(n)
			{
				return 1 === n ? 1 : 1 - t(2, -10 * n)
			},
			easeInOutExpo: function(n)
			{
				return 0 === n ? 0 : 1 === n ? 1 : n < .5 ? t(2, 20 * n - 10) / 2 : (2 - t(2, -20 * n + 10)) / 2
			},
			easeInCirc: function(n)
			{
				return 1 - u(1 - t(n, 2))
			},
			easeOutCirc: function(n)
			{
				return u(1 - t(n - 1, 2))
			},
			easeInOutCirc: function(n)
			{
				return n < .5 ? (1 - u(1 - t(2 * n, 2))) / 2 : (u(1 - t(-2 * n + 2, 2)) + 1) / 2
			},
			easeInElastic: function(n)
			{
				return 0 === n ? 0 : 1 === n ? 1 : -t(2, 10 * n - 10) * r((10 * n - 10.75) * s)
			},
			easeOutElastic: function(n)
			{
				return 0 === n ? 0 : 1 === n ? 1 : t(2, -10 * n) * r((10 * n - .75) * s) + 1
			},
			easeInOutElastic: function(n)
			{
				return 0 === n ? 0 : 1 === n ? 1 : n < .5 ? -(t(2, 20 * n - 10) * r((20 * n - 11.125) * f)) / 2 : t(2, -20 * n + 10) * r((20 * n - 11.125) * f) / 2 + 1
			},
			easeInBack: function(n)
			{
				return (c + 1) * n * n * n - c * n * n
			},
			easeOutBack: function(n)
			{
				return 1 + (c + 1) * t(n - 1, 3) + c * t(n - 1, 2)
			},
			easeInOutBack: function(n)
			{
				return n < .5 ? t(2 * n, 2) * (7.189819 * n - o) / 2 : (t(2 * n - 2, 2) * ((o + 1) * (2 * n - 2) + o) + 2) / 2
			},
			easeInBounce: function(n)
			{
				return 1 - e(1 - n)
			},
			easeOutBounce: e,
			easeInOutBounce: function(n)
			{
				return n < .5 ? (1 - e(1 - 2 * n)) / 2 : (1 + e(2 * n - 1)) / 2
			}
		})
	});
	(function(a, b, c)
	{
		var d = b.event,
			e;
		d.special.smartresize = {
			setup: function()
			{
				b(this).bind("resize", d.special.smartresize.handler)
			},
			teardown: function()
			{
				b(this).unbind("resize", d.special.smartresize.handler)
			},
			handler: function(a, b)
			{
				var c = this,
					d = arguments;
				a.type = "smartresize";
				if (e)
				{
					clearTimeout(e)
				}
				e = setTimeout(function()
				{
					jQuery.event.handle.apply(c, d)
				}, b === "execAsap" ? 0 : 100)
			}
		};
		b.fn.smartresize = function(a)
		{
			return a ? this.bind("smartresize", a) : this.trigger("smartresize", ["execAsap"])
		};
		b.Slideshow = function(a, c)
		{
			this.$el = b(c);
			this.$list = this.$el.find("ul.ei-slider-large");
			this.$imgItems = this.$list.children("li");
			this.itemsCount = this.$imgItems.length;
			this.$images = this.$imgItems.find("img:first");
			this.$sliderthumbs = this.$el.find("ul.ei-slider-thumbs").hide();
			this.$sliderElems = this.$sliderthumbs.children("li");
			this.$sliderElem = this.$sliderthumbs.children("li.ei-slider-element");
			this.$thumbs = this.$sliderElems.not(".ei-slider-element");
			this._init(a)
		};
		b.Slideshow.defaults = {
			animation: "sides",
			autoplay: false,
			slideshow_interval: 3e3,
			speed: 800,
			easing: "",
			titlesFactor: .6,
			titlespeed: 800,
			titleeasing: "",
			thumbMaxWidth: 150
		};
		b.Slideshow.prototype = {
			_init: function(a)
			{
				this.options = b.extend(true,
				{}, b.Slideshow.defaults, a);
				this.$imgItems.css("opacity", 0);
				this.$imgItems.find("div.ei-title > *").css("opacity", 0);
				this.current = 0;
				var c = this;
				this.$loading = b('<div class="ei-slider-loading"></div>').prependTo(c.$el);
				b.when(this._preloadImages()).done(function()
				{
					c.$loading.hide();
					c._setImagesSize();
					c._initThumbs();
					c.$imgItems.eq(c.current).css(
					{
						opacity: 1,
						"z-index": 10
					}).show().find("div.ei-title > *").css("opacity", 1);
					if (c.options.autoplay)
					{
						c._startSlideshow()
					}
					c._initEvents()
				})
			},
			_preloadImages: function()
			{
				var a = this,
					c = 0;
				return b.Deferred(function(d)
				{
					a.$images.each(function(e)
					{
						b("<img/>").load(function()
						{
							if (++c === a.itemsCount)
							{
								d.resolve()
							}
						}).attr("src", b(this).attr("src"))
					})
				}).promise()
			},
			_setImagesSize: function()
			{
				this.elWidth = this.$el.width();
				var a = this;
				this.$images.each(function(c)
				{
					var d = b(this);
					imgDim = a._getImageDim(d.attr("src"));
					d.css(
					{
						width: imgDim.width,
						height: imgDim.height,
						marginLeft: imgDim.left,
						marginTop: imgDim.top
					})
				})
			},
			_getImageDim: function(a)
			{
				var b = new Image;
				b.src = a;
				var c = this.elWidth,
					d = this.$el.height(),
					e = d / c,
					f = b.width,
					g = b.height,
					h = g / f,
					i, j, k, l;
				if (e > h)
				{
					j = d;
					i = d / h
				}
				else
				{
					j = c * h;
					i = c
				}
				return {
					width: i,
					height: j,
					left: (c - i) / 2,
					top: (d - j) / 2
				}
			},
			_initThumbs: function()
			{
				this.$sliderElems.css(
				{
					"max-width": this.options.thumbMaxWidth + "%",
					width: 100 / this.itemsCount + "%"
				});
				this.$sliderthumbs.css("max-width", this.options.thumbMaxWidth * this.itemsCount + "%").show()
			},
			_startSlideshow: function()
			{
				var a = this;
				this.slideshow = setTimeout(function()
				{
					var b;
					a.current === a.itemsCount - 1 ? b = 0 : b = a.current + 1;
					a._slideTo(b);
					if (a.options.autoplay)
					{
						a._startSlideshow()
					}
				}, this.options.slideshow_interval)
			},
			_slideTo: function(a)
			{
				if (a === this.current || this.isAnimating) return false;
				this.isAnimating = true;
				var c = this.$imgItems.eq(this.current),
					d = this.$imgItems.eq(a),
					e = this,
					f = {
						zIndex: 10
					},
					g = {
						opacity: 1
					};
				if (this.options.animation === "sides")
				{
					f.left = a > this.current ? -1 * this.elWidth : this.elWidth;
					g.left = 0
				}
				d.find("div.ei-title > h2").css("margin-right", 50 + "px").stop().delay(this.options.speed * this.options.titlesFactor).animate(
				{
					marginRight: 0 + "px",
					opacity: 1
				}, this.options.titlespeed, this.options.titleeasing).end().find("div.ei-title > h3").css("margin-right", -50 + "px").stop().delay(this.options.speed * this.options.titlesFactor).animate(
				{
					marginRight: 0 + "px",
					opacity: 1
				}, this.options.titlespeed, this.options.titleeasing);
				b.when(c.css("z-index", 1).find("div.ei-title > *").stop().fadeOut(this.options.speed / 2, function()
				{
					b(this).show().css("opacity", 0)
				}), d.css(f).stop().animate(g, this.options.speed, this.options.easing), this.$sliderElem.stop().animate(
				{
					left: this.$thumbs.eq(a).position().left
				}, this.options.speed)).done(function()
				{
					c.css("opacity", 0).find("div.ei-title > *").css("opacity", 0);
					e.current = a;
					e.isAnimating = false
				})
			},
			_initEvents: function()
			{
				var c = this;
				b(a).on("smartresize.eislideshow", function(a)
				{
					c._setImagesSize();
					c.$sliderElem.css("left", c.$thumbs.eq(c.current).position().left)
				});
				this.$thumbs.on("click.eislideshow", function(a)
				{
					if (c.options.autoplay)
					{
						clearTimeout(c.slideshow);
						c.options.autoplay = false
					}
					var d = b(this),
						e = d.index() - 1;
					c._slideTo(e);
					return false
				})
			}
		};
		var f = function(a)
		{
			if (this.console)
			{
				console.error(a)
			}
		};
		b.fn.eislideshow = function(a)
		{
			if (typeof a === "string")
			{
				var c = Array.prototype.slice.call(arguments, 1);
				this.each(function()
				{
					var d = b.data(this, "eislideshow");
					if (!d)
					{
						f("cannot call methods on eislideshow prior to initialization; " + "attempted to call method '" + a + "'");
						return
					}
					if (!b.isFunction(d[a]) || a.charAt(0) === "_")
					{
						f("no such method '" + a + "' for eislideshow instance");
						return
					}
					d[a].apply(d, c)
				})
			}
			else
			{
				this.each(function()
				{
					var c = b.data(this, "eislideshow");
					if (!c)
					{
						b.data(this, "eislideshow", new b.Slideshow(a, this))
					}
				})
			}
			return this
		}
	})(window, jQuery);
	(function(a)
	{
		function b(a, b)
		{
			return typeof a == "function" ? a.call(b) : a
		}

		function c(a)
		{
			while (a = a.parentNode)
			{
				if (a == document) return true
			}
			return false
		}

		function d(b, c)
		{
			this.$element = a(b);
			this.options = c;
			this.enabled = true;
			this.fixTitle()
		}
		d.prototype = {
			show: function()
			{
				var c = this.getTitle();
				if (c && this.enabled)
				{
					var d = this.tip();
					d.find(".tipsy-inner")[this.options.html ? "html" : "text"](c);
					d[0].className = "tipsy";
					d.remove().css(
					{
						top: 0,
						left: 0,
						visibility: "hidden",
						display: "block"
					}).prependTo(document.body);
					var e = a.extend(
					{}, this.$element.offset(),
					{
						width: this.$element[0].offsetWidth,
						height: this.$element[0].offsetHeight
					});
					var f = d[0].offsetWidth,
						g = d[0].offsetHeight,
						h = b(this.options.gravity, this.$element[0]);
					var i;
					switch (h.charAt(0))
					{
						case "n":
							i = {
								top: e.top + e.height + this.options.offset,
								left: e.left + e.width / 2 - f / 2
							};
							break;
						case "s":
							i = {
								top: e.top - g - this.options.offset,
								left: e.left + e.width / 2 - f / 2
							};
							break;
						case "e":
							i = {
								top: e.top + e.height / 2 - g / 2,
								left: e.left - f - this.options.offset
							};
							break;
						case "w":
							i = {
								top: e.top + e.height / 2 - g / 2,
								left: e.left + e.width + this.options.offset
							};
							break
					}
					if (h.length == 2)
					{
						if (h.charAt(1) == "w")
						{
							i.left = e.left + e.width / 2 - 15
						}
						else
						{
							i.left = e.left + e.width / 2 - f + 15
						}
					}
					d.css(i).addClass("tipsy-" + h);
					d.find(".tipsy-arrow")[0].className = "tipsy-arrow tipsy-arrow-" + h.charAt(0);
					if (this.options.className)
					{
						d.addClass(b(this.options.className, this.$element[0]))
					}
					if (this.options.fade)
					{
						d.stop().css(
						{
							opacity: 0,
							display: "block",
							visibility: "visible"
						}).animate(
						{
							opacity: this.options.opacity
						})
					}
					else
					{
						d.css(
						{
							visibility: "visible",
							opacity: this.options.opacity
						})
					}
				}
			},
			hide: function()
			{
				if (this.options.fade)
				{
					this.tip().stop().fadeOut(function()
					{
						a(this).remove()
					})
				}
				else
				{
					this.tip().remove()
				}
			},
			fixTitle: function()
			{
				var a = this.$element;
				if (a.attr("title") || typeof a.attr("original-title") != "string")
				{
					a.attr("original-title", a.attr("title") || "").removeAttr("title")
				}
			},
			getTitle: function()
			{
				var a, b = this.$element,
					c = this.options;
				this.fixTitle();
				var a, c = this.options;
				if (typeof c.title == "string")
				{
					a = b.attr(c.title == "title" ? "original-title" : c.title)
				}
				else if (typeof c.title == "function")
				{
					a = c.title.call(b[0])
				}
				a = ("" + a).replace(/(^\s*|\s*$)/, "");
				return a || c.fallback
			},
			tip: function()
			{
				if (!this.$tip)
				{
					this.$tip = a('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>');
					this.$tip.data("tipsy-pointee", this.$element[0])
				}
				return this.$tip
			},
			validate: function()
			{
				if (!this.$element[0].parentNode)
				{
					this.hide();
					this.$element = null;
					this.options = null
				}
			},
			enable: function()
			{
				this.enabled = true
			},
			disable: function()
			{
				this.enabled = false
			},
			toggleEnabled: function()
			{
				this.enabled = !this.enabled
			}
		};
		a.fn.tipsy = function(b)
		{
			function e(c)
			{
				var e = a.data(c, "tipsy");
				if (!e)
				{
					e = new d(c, a.fn.tipsy.elementOptions(c, b));
					a.data(c, "tipsy", e)
				}
				return e
			}

			function f()
			{
				var a = e(this);
				a.hoverState = "in";
				if (b.delayIn == 0)
				{
					a.show()
				}
				else
				{
					a.fixTitle();
					setTimeout(function()
					{
						if (a.hoverState == "in") a.show()
					}, b.delayIn)
				}
			}

			function g()
			{
				var a = e(this);
				a.hoverState = "out";
				if (b.delayOut == 0)
				{
					a.hide()
				}
				else
				{
					setTimeout(function()
					{
						if (a.hoverState == "out") a.hide()
					}, b.delayOut)
				}
			}
			if (b === true)
			{
				return this.data("tipsy")
			}
			else if (typeof b == "string")
			{
				var c = this.data("tipsy");
				if (c) c[b]();
				return this
			}
			b = a.extend(
			{}, a.fn.tipsy.defaults, b);
			if (!b.live) this.each(function()
			{
				e(this)
			});
			if (b.trigger != "manual")
			{
				var h = b.live ? "live" : "bind",
					i = b.trigger == "hover" ? "mouseenter" : "focus",
					j = b.trigger == "hover" ? "mouseleave" : "blur";
				this[h](i, f)[h](j, g)
			}
			return this
		};
		a.fn.tipsy.defaults = {
			className: null,
			delayIn: 0,
			delayOut: 0,
			fade: false,
			fallback: "",
			gravity: "n",
			html: false,
			live: false,
			offset: 0,
			opacity: .8,
			title: "title",
			trigger: "hover"
		};
		a.fn.tipsy.revalidate = function()
		{
			a(".tipsy").each(function()
			{
				var b = a.data(this, "tipsy-pointee");
				if (!b || !c(b))
				{
					a(this).remove()
				}
			})
		};
		a.fn.tipsy.elementOptions = function(b, c)
		{
			return a.metadata ? a.extend(
			{}, c, a(b).metadata()) : c
		};
		a.fn.tipsy.autoNS = function()
		{
			return a(this).offset().top > a(document).scrollTop() + a(window).height() / 2 ? "s" : "n"
		};
		a.fn.tipsy.autoWE = function()
		{
			return a(this).offset().left > a(document).scrollLeft() + a(window).width() / 2 ? "e" : "w"
		};
		a.fn.tipsy.autoBounds = function(b, c)
		{
			return function()
			{
				var d = {
						ns: c[0],
						ew: c.length > 1 ? c[1] : false
					},
					e = a(document).scrollTop() + b,
					f = a(document).scrollLeft() + b,
					g = a(this);
				if (g.offset().top < e) d.ns = "n";
				if (g.offset().left < f) d.ew = "w";
				if (a(window).width() + a(document).scrollLeft() - g.offset().left < b) d.ew = "e";
				if (a(window).height() + a(document).scrollTop() - g.offset().top < b) d.ns = "s";
				return d.ns + (d.ew ? d.ew : "")
			}
		}
	})(jQuery);
	(function($)
	{
		var default_options = {
			animationType: "fade",
			animate: true,
			first_slide: 0,
			easing: "linear",
			speed: "normal",
			type: "sequence",
			timeout: 2e3,
			startDelay: 0,
			loop: true,
			containerHeight: "auto",
			runningClass: "innerFade",
			children: null,
			cancelLink: null,
			pauseLink: null,
			prevLink: null,
			nextLink: null,
			indexContainer: null,
			currentItemContainer: null,
			totalItemsContainer: null,
			callback_index_update: null
		};
		$(function()
		{
			window.isActive = true;
			$(window).focus(function()
			{
				this.isActive = true
			});
			$(window).blur(function()
			{
				this.isActive = false
			})
		});
		$.fn.innerFade = function(options)
		{
			return this.each(function()
			{
				$fade_object = new Object;
				$fade_object.container = this;
				$fade_object.settings = $.extend(
				{}, default_options, options);
				$fade_object.elements = $fade_object.settings.children === null ? $($fade_object.container).children() : $($fade_object.container).children($fade_object.settings.children);
				$fade_object.count = 0;
				$($fade_object.container).data("object", $fade_object);
				if ($fade_object.elements.length > 1)
				{
					if ($fade_object.settings.nextLink || $fade_object.settings.prevLink)
					{
						$.bindControls($fade_object)
					}
					if ($fade_object.settings.cancelLink)
					{
						$.bindCancel($fade_object)
					}
					$($fade_object.container).css(
					{
						position: "relative"
					}).addClass($fade_object.settings.runningClass);
					if ($fade_object.settings.containerHeight == "auto")
					{
						height = $($fade_object.elements).filter(":first").height();
						$($fade_object.container).css(
						{
							height: height + "px"
						})
					}
					else
					{
						$($fade_object.container).css(
						{
							height: $fade_object.settings.containerHeight
						})
					}
					if ($fade_object.settings.indexContainer)
					{
						$.innerFadeIndex($fade_object)
					}
					for (var i = 0; i < $fade_object.elements.length; i++)
					{
						$($fade_object.elements[i]).hide(0).css("z-index", String($fade_object.elements.length - i)).css("position", "absolute")
					}
					var toShow = "";
					var toHide = "";
					if ($fade_object.settings.type == "random")
					{
						toShow = Math.floor(Math.random() * $fade_object.elements.length);
						do {
							toHide = Math.floor(Math.random() * $fade_object.elements.length)
						} while (toHide == toShow)
					}
					else if ($fade_object.settings.type == "random_start")
					{
						$fade_object.settings.type = "sequence";
						toHide = Math.floor(Math.random() * $fade_object.elements.length);
						toShow = (toHide + 1) % $fade_object.elements.length
					}
					else
					{
						toShow = $fade_object.settings.first_slide;
						toHide = $fade_object.settings.first_slide == 0 ? $fade_object.elements.length - 1 : $fade_object.settings.first_slide - 1
					}
					if ($fade_object.settings.animate)
					{
						$.fadeTimeout($fade_object, toShow, toHide, true)
					}
					else
					{
						$($fade_object.elements[toShow]).show();
						$($fade_object.elements[toHide]).hide();
						$.updateIndexes($fade_object, toShow)
					}
					$.updateIndexes($fade_object, toShow);
					$($fade_object.elements[toShow]).show();
					if ($fade_object.settings.currentItemContainer)
					{
						$.currentItem($fade_object, toShow)
					}
					if ($fade_object.settings.totalItemsContainer)
					{
						$.totalItems($fade_object)
					}
					if ($fade_object.settings.pauseLink)
					{
						$.bind_pause($fade_object)
					}
				}
			})
		};
		$.fn.innerFadeTo = function(slide_number)
		{
			return this.each(function(index)
			{
				var $fade_object = $(this).data("object");
				var $currentVisibleItem = $($fade_object.elements).filter(":visible");
				var currentItemIndex = $($fade_object.elements).index($currentVisibleItem);
				$.stopSlideshow($fade_object);
				if (slide_number != currentItemIndex)
				{
					$.fadeToItem($fade_object, slide_number, currentItemIndex)
				}
			})
		};
		$.fadeToItem = function($fade_object, toShow, toHide)
		{
			var speed = $fade_object.settings.speed;
			switch ($fade_object.settings.animationType)
			{
				case "slide":
					$($fade_object.elements[toHide]).slideUp(speed);
					$($fade_object.elements[toShow]).slideDown(speed);
					break;
				case "slideOver":
					var itemWidth = $($fade_object.elements[0]).width(),
						to_hide_css = {},
						to_show_css = {},
						to_hide_animation = {},
						to_show_animation = {};
					$($fade_object.container).css(
					{
						overflow: "hidden"
					});
					to_hide_css = {
						position: "absolute",
						top: "0px"
					};
					to_show_css = $.extend(
					{}, to_hide_css);
					if (toShow > toHide)
					{
						to_hide_css.left = "0px";
						to_hide_css.right = "auto";
						to_show_css.left = "auto";
						to_show_css.right = "-" + itemWidth + "px";
						to_hide_animation.left = "-" + itemWidth + "px";
						to_show_animation.right = "0px";
						console.log(to_hide_css)
					}
					else
					{
						to_hide_css.left = "auto";
						to_hide_css.right = "0px";
						to_show_css.left = "-" + itemWidth + "px";
						to_show_css.right = "auto";
						to_hide_animation.right = "-" + itemWidth + "px";
						to_show_animation.left = "0px"
					};
					$($fade_object.elements[toHide]).css(to_hide_css);
					$($fade_object.elements[toShow]).css(to_show_css).show();
					$($fade_object.elements[toHide]).animate(to_hide_animation, speed, $fade_object.settings.easing, function()
					{
						$(this).hide()
					});
					$($fade_object.elements[toShow]).animate(to_show_animation, speed, $fade_object.settings.easing);
					break;
				case "fadeEmpty":
					$($fade_object.elements[toHide]).fadeOut(speed, function()
					{
						$($fade_object.elements[toShow]).fadeIn(speed)
					});
					break;
				case "slideEmpty":
					$($fade_object.elements[toHide]).slideUp(speed, function()
					{
						$($fade_object.elements[toShow]).slideDown(speed)
					});
					break;
				default:
					$($fade_object.elements[toHide]).fadeOut(speed);
					$($fade_object.elements[toShow]).fadeIn(speed);
					break
			}
			if ($fade_object.settings.currentItemContainer)
			{
				$.currentItem($fade_object, toShow)
			}
			if ($fade_object.settings.indexContainer || $fade_object.settings.callback_index_update)
			{
				$.updateIndexes($fade_object, toShow)
			}
		};
		$.fadeTimeout = function($fade_object, toShow, toHide, firstRun)
		{
			if (window.isActive)
			{
				if (firstRun != true)
				{
					$.fadeToItem($fade_object, toShow, toHide)
				}
				$fade_object.count++;
				if ($fade_object.settings.loop == false && $fade_object.count >= $fade_object.elements.length)
				{
					$.stopSlideshow($fade_object);
					return
				}
				if ($fade_object.settings.type == "random")
				{
					toHide = toShow;
					while (toShow == toHide)
					{
						toShow = Math.floor(Math.random() * $fade_object.elements.length)
					}
				}
				else
				{
					toHide = toHide > toShow ? 0 : toShow;
					toShow = toShow + 1 >= $fade_object.elements.length ? 0 : toShow + 1
				}
			}
			var timeout = firstRun && $fade_object.settings.startDelay ? $fade_object.settings.startDelay : $fade_object.settings.timeout;
			$($fade_object.container).data("current_timeout", setTimeout(function()
			{
				$.fadeTimeout($fade_object, toShow, toHide, false)
			}, timeout))
		};
		$.fn.innerFadeUnbind = function()
		{
			return this.each(function(index)
			{
				var $fade_object = $(this).data("object");
				$.stopSlideshow($fade_object)
			})
		};
		$.stopSlideshow = function($fade_object)
		{
			clearTimeout($($fade_object.container).data("current_timeout"));
			$($fade_object.container).data("current_timeout", null)
		};
		$.bindControls = function($fade_object)
		{
			$($fade_object.settings.nextLink).on("click", function(event)
			{
				event.preventDefault();
				$.stopSlideshow($fade_object);
				var $currentElement = $($fade_object.elements).filter(":visible");
				var currentElementIndex = $($fade_object.elements).index($currentElement);
				var $nextElement = $currentElement.next().length > 0 ? $currentElement.next() : $($fade_object.elements).filter(":first");
				var nextElementIndex = $($fade_object.elements).index($nextElement);
				$.fadeToItem($fade_object, nextElementIndex, currentElementIndex)
			});
			$($fade_object.settings.prevLink).on("click", function(event)
			{
				event.preventDefault();
				$.stopSlideshow($fade_object);
				var $currentElement = $($fade_object.elements).filter(":visible");
				var currentElementIndex = $($fade_object.elements).index($currentElement);
				var $previousElement = $currentElement.prev().length > 0 ? $currentElement.prev() : $($fade_object.elements).filter(":last");
				var previousElementIndex = $($fade_object.elements).index($previousElement);
				$.fadeToItem($fade_object, previousElementIndex, currentElementIndex)
			})
		};
		$.bind_pause = function($fade_object)
		{
			$($fade_object.settings.pauseLink).unbind().click(function(event)
			{
				event.preventDefault();
				if ($($fade_object.container).data("current_timeout") != null)
				{
					$.stopSlideshow($fade_object)
				}
				else
				{
					var tag = $($fade_object.container).children(":first").prop("tagName").toLowerCase();
					var nextItem = "";
					var previousItem = "";
					if ($fade_object.settings.type == "random")
					{
						previousItem = Math.floor(Math.random() * $fade_object.elements.length);
						do {
							nextItem = Math.floor(Math.random() * $fade_object.elements.length)
						} while (previousItem == nextItem)
					}
					else if ($fade_object.settings.type == "random_start")
					{
						previousItem = Math.floor(Math.random() * $fade_object.elements.length);
						nextItem = (previousItem + 1) % $fade_object.elements.length
					}
					else
					{
						previousItem = $(tag, $($fade_object.container)).index($(tag + ":visible", $($fade_object.container)));
						nextItem = previousItem + 1 == $fade_object.elements.length ? 0 : previousItem + 1
					}
					$.fadeTimeout($fade_object, nextItem, previousItem, false)
				}
			})
		};
		$.bindCancel = function($fade_object)
		{
			$($fade_object.settings.cancelLink).unbind().click(function(event)
			{
				event.preventDefault();
				$.stopSlideshow($fade_object)
			})
		};
		$.updateIndexes = function($fade_object, toShow)
		{
			$($fade_object.settings.indexContainer).children().removeClass("active");
			$("> :eq(" + toShow + ")", $($fade_object.settings.indexContainer)).addClass("active");
			if (typeof $fade_object.settings.callback_index_update == "function")
			{
				$fade_object.settings.callback_index_update.call(this, toShow)
			}
		};
		$.createIndexHandler = function($fade_object, count, link)
		{
			$(link).click(function(event)
			{
				event.preventDefault();
				var $currentVisibleItem = $($fade_object.elements).filter(":visible");
				var currentItemIndex = $($fade_object.elements).index($currentVisibleItem);
				$.stopSlideshow($fade_object);
				if ($currentVisibleItem.size() <= 1 && count != currentItemIndex)
				{
					$.fadeToItem($fade_object, count, currentItemIndex)
				}
			})
		};
		$.createIndexes = function($fade_object)
		{
			var $indexContainer = $($fade_object.settings.indexContainer);
			for (var i = 0; i < $fade_object.elements.length; i++)
			{
				var $link = $('<li><a href="#">' + (i + 1) + "</a></li>");
				$.createIndexHandler($fade_object, i, $link);
				$indexContainer.append($link)
			}
		};
		$.linkIndexes = function($fade_object)
		{
			var $indexContainer = $($fade_object.settings.indexContainer);
			var $indexContainerChildren = $("> :visible", $indexContainer);
			if ($indexContainerChildren.size() == $fade_object.elements.length)
			{
				var count = $fade_object.elements.length;
				for (var i = 0; i < count; i++)
				{
					$("a", $indexContainer).click(function(event)
					{
						event.preventDefault()
					});
					$.createIndexHandler($fade_object, i, $indexContainerChildren[i])
				}
			}
			else
			{
				alert("There is a different number of items in the menu and slides. There needs to be the same number in both.\nThere are " + $indexContainerChildren.size() + " in the indexContainer.\nThere are " + $fade_object.elements.length + " in the slides container.")
			}
		};
		$.innerFadeIndex = function($fade_object)
		{
			var $indexContainer = $($fade_object.settings.indexContainer);
			if ($(":visible", $indexContainer).size() <= 0)
			{
				$.createIndexes($fade_object)
			}
			else
			{
				$.linkIndexes($fade_object)
			}
		};
		$.currentItem = function($fade_object, current)
		{
			var $container = $($fade_object.settings.currentItemContainer);
			$container.text(current + 1)
		};
		$.totalItems = function($fade_object)
		{
			var $container = $($fade_object.settings.totalItemsContainer);
			$container.text($fade_object.elements.length)
		}
	})(jQuery);
	! function($)
	{
		$.flexslider = function(e, t)
		{
			var a = $(e);
			a.vars = $.extend(
			{}, $.flexslider.defaults, t);
			var n = a.vars.namespace,
				i = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
				s = ("ontouchstart" in window || i || window.DocumentTouch && document instanceof DocumentTouch) && a.vars.touch,
				r = "click touchend MSPointerUp keyup",
				o = "",
				l, c = "vertical" === a.vars.direction,
				d = a.vars.reverse,
				u = a.vars.itemWidth > 0,
				v = "fade" === a.vars.animation,
				p = "" !== a.vars.asNavFor,
				m = {},
				f = !0;
			$.data(e, "flexslider", a), m = {
				init: function()
				{
					a.animating = !1, a.currentSlide = parseInt(a.vars.startAt ? a.vars.startAt : 0, 10), isNaN(a.currentSlide) && (a.currentSlide = 0), a.animatingTo = a.currentSlide, a.atEnd = 0 === a.currentSlide || a.currentSlide === a.last, a.containerSelector = a.vars.selector.substr(0, a.vars.selector.search(" ")), a.slides = $(a.vars.selector, a), a.container = $(a.containerSelector, a), a.count = a.slides.length, a.syncExists = $(a.vars.sync).length > 0, "slide" === a.vars.animation && (a.vars.animation = "swing"), a.prop = c ? "top" : "marginLeft", a.args = {}, a.manualPause = !1, a.stopped = !1, a.started = !1, a.startTimeout = null, a.transitions = !a.vars.video && !v && a.vars.useCSS && function()
					{
						var e = document.createElement("div"),
							t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
						for (var n in t)
							if (void 0 !== e.style[t[n]]) return a.pfx = t[n].replace("Perspective", "").toLowerCase(), a.prop = "-" + a.pfx + "-transform", !0;
						return !1
					}(), a.ensureAnimationEnd = "", "" !== a.vars.controlsContainer && (a.controlsContainer = $(a.vars.controlsContainer).length > 0 && $(a.vars.controlsContainer)), "" !== a.vars.manualControls && (a.manualControls = $(a.vars.manualControls).length > 0 && $(a.vars.manualControls)), "" !== a.vars.customDirectionNav && (a.customDirectionNav = 2 === $(a.vars.customDirectionNav).length && $(a.vars.customDirectionNav)), a.vars.randomize && (a.slides.sort(function()
					{
						return Math.round(Math.random()) - .5
					}), a.container.empty().append(a.slides)), a.doMath(), a.setup("init"), a.vars.controlNav && m.controlNav.setup(), a.vars.directionNav && m.directionNav.setup(), a.vars.keyboard && (1 === $(a.containerSelector).length || a.vars.multipleKeyboard) && $(document).bind("keyup", function(e)
					{
						var t = e.keyCode;
						if (!a.animating && (39 === t || 37 === t))
						{
							var n = 39 === t ? a.getTarget("next") : 37 === t ? a.getTarget("prev") : !1;
							a.flexAnimate(n, a.vars.pauseOnAction)
						}
					}), a.vars.mousewheel && a.bind("mousewheel", function(e, t, n, i)
					{
						e.preventDefault();
						var s = a.getTarget(0 > t ? "next" : "prev");
						a.flexAnimate(s, a.vars.pauseOnAction)
					}), a.vars.pausePlay && m.pausePlay.setup(), a.vars.slideshow && a.vars.pauseInvisible && m.pauseInvisible.init(), a.vars.slideshow && (a.vars.pauseOnHover && a.hover(function()
					{
						a.manualPlay || a.manualPause || a.pause()
					}, function()
					{
						a.manualPause || a.manualPlay || a.stopped || a.play()
					}), a.vars.pauseInvisible && m.pauseInvisible.isHidden() || (a.vars.initDelay > 0 ? a.startTimeout = setTimeout(a.play, a.vars.initDelay) : a.play())), p && m.asNav.setup(), s && a.vars.touch && m.touch(), (!v || v && a.vars.smoothHeight) && $(window).bind("resize orientationchange focus", m.resize), a.find("img").attr("draggable", "false"), setTimeout(function()
					{
						a.vars.start(a)
					}, 200)
				},
				asNav:
				{
					setup: function()
					{
						a.asNav = !0, a.animatingTo = Math.floor(a.currentSlide / a.move), a.currentItem = a.currentSlide, a.slides.removeClass(n + "active-slide").eq(a.currentItem).addClass(n + "active-slide"), i ? (e._slider = a, a.slides.each(function()
						{
							var e = this;
							e._gesture = new MSGesture, e._gesture.target = e, e.addEventListener("MSPointerDown", function(e)
							{
								e.preventDefault(), e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId)
							}, !1), e.addEventListener("MSGestureTap", function(e)
							{
								e.preventDefault();
								var t = $(this),
									n = t.index();
								$(a.vars.asNavFor).data("flexslider").animating || t.hasClass("active") || (a.direction = a.currentItem < n ? "next" : "prev", a.flexAnimate(n, a.vars.pauseOnAction, !1, !0, !0))
							})
						})) : a.slides.on(r, function(e)
						{
							e.preventDefault();
							var t = $(this),
								i = t.index(),
								s = t.offset().left - $(a).scrollLeft();
							0 >= s && t.hasClass(n + "active-slide") ? a.flexAnimate(a.getTarget("prev"), !0) : $(a.vars.asNavFor).data("flexslider").animating || t.hasClass(n + "active-slide") || (a.direction = a.currentItem < i ? "next" : "prev", a.flexAnimate(i, a.vars.pauseOnAction, !1, !0, !0))
						})
					}
				},
				controlNav:
				{
					setup: function()
					{
						a.manualControls ? m.controlNav.setupManual() : m.controlNav.setupPaging()
					},
					setupPaging: function()
					{
						var e = "thumbnails" === a.vars.controlNav ? "control-thumbs" : "control-paging",
							t = 1,
							i, s;
						if (a.controlNavScaffold = $('<ol class="' + n + "control-nav " + n + e + '"></ol>'), a.pagingCount > 1)
							for (var l = 0; l < a.pagingCount; l++)
							{
								if (s = a.slides.eq(l), i = "thumbnails" === a.vars.controlNav ? '<img src="' + s.attr("data-thumb") + '"/>' : "<a>" + t + "</a>", "thumbnails" === a.vars.controlNav && !0 === a.vars.thumbCaptions)
								{
									var c = s.attr("data-thumbcaption");
									"" !== c && void 0 !== c && (i += '<span class="' + n + 'caption">' + c + "</span>")
								}
								a.controlNavScaffold.append("<li>" + i + "</li>"), t++
							}
						a.controlsContainer ? $(a.controlsContainer).append(a.controlNavScaffold) : a.append(a.controlNavScaffold), m.controlNav.set(), m.controlNav.active(), a.controlNavScaffold.delegate("a, img", r, function(e)
						{
							if (e.preventDefault(), "" === o || o === e.type)
							{
								var t = $(this),
									i = a.controlNav.index(t);
								t.hasClass(n + "active") || (a.direction = i > a.currentSlide ? "next" : "prev", a.flexAnimate(i, a.vars.pauseOnAction))
							}
							"" === o && (o = e.type), m.setToClearWatchedEvent()
						})
					},
					setupManual: function()
					{
						a.controlNav = a.manualControls, m.controlNav.active(), a.controlNav.bind(r, function(e)
						{
							if (e.preventDefault(), "" === o || o === e.type)
							{
								var t = $(this),
									i = a.controlNav.index(t);
								t.hasClass(n + "active") || (a.direction = i > a.currentSlide ? "next" : "prev", a.flexAnimate(i, a.vars.pauseOnAction))
							}
							"" === o && (o = e.type), m.setToClearWatchedEvent()
						})
					},
					set: function()
					{
						var e = "thumbnails" === a.vars.controlNav ? "img" : "a";
						a.controlNav = $("." + n + "control-nav li " + e, a.controlsContainer ? a.controlsContainer : a)
					},
					active: function()
					{
						a.controlNav.removeClass(n + "active").eq(a.animatingTo).addClass(n + "active")
					},
					update: function(e, t)
					{
						a.pagingCount > 1 && "add" === e ? a.controlNavScaffold.append($("<li><a>" + a.count + "</a></li>")) : 1 === a.pagingCount ? a.controlNavScaffold.find("li").remove() : a.controlNav.eq(t).closest("li").remove(), m.controlNav.set(), a.pagingCount > 1 && a.pagingCount !== a.controlNav.length ? a.update(t, e) : m.controlNav.active()
					}
				},
				directionNav:
				{
					setup: function()
					{
						var e = $('<ul class="' + n + 'direction-nav"><li class="' + n + 'nav-prev"><a class="' + n + 'prev" href="#">' + a.vars.prevText + '</a></li><li class="' + n + 'nav-next"><a class="' + n + 'next" href="#">' + a.vars.nextText + "</a></li></ul>");
						a.customDirectionNav ? a.directionNav = a.customDirectionNav : a.controlsContainer ? ($(a.controlsContainer).append(e), a.directionNav = $("." + n + "direction-nav li a", a.controlsContainer)) : (a.append(e), a.directionNav = $("." + n + "direction-nav li a", a)), m.directionNav.update(), a.directionNav.bind(r, function(e)
						{
							e.preventDefault();
							var t;
							("" === o || o === e.type) && (t = a.getTarget($(this).hasClass(n + "next") ? "next" : "prev"), a.flexAnimate(t, a.vars.pauseOnAction)), "" === o && (o = e.type), m.setToClearWatchedEvent()
						})
					},
					update: function()
					{
						var e = n + "disabled";
						1 === a.pagingCount ? a.directionNav.addClass(e).attr("tabindex", "-1") : a.vars.animationLoop ? a.directionNav.removeClass(e).removeAttr("tabindex") : 0 === a.animatingTo ? a.directionNav.removeClass(e).filter("." + n + "prev").addClass(e).attr("tabindex", "-1") : a.animatingTo === a.last ? a.directionNav.removeClass(e).filter("." + n + "next").addClass(e).attr("tabindex", "-1") : a.directionNav.removeClass(e).removeAttr("tabindex")
					}
				},
				pausePlay:
				{
					setup: function()
					{
						var e = $('<div class="' + n + 'pauseplay"><a></a></div>');
						a.controlsContainer ? (a.controlsContainer.append(e), a.pausePlay = $("." + n + "pauseplay a", a.controlsContainer)) : (a.append(e), a.pausePlay = $("." + n + "pauseplay a", a)), m.pausePlay.update(a.vars.slideshow ? n + "pause" : n + "play"), a.pausePlay.bind(r, function(e)
						{
							e.preventDefault(), ("" === o || o === e.type) && ($(this).hasClass(n + "pause") ? (a.manualPause = !0, a.manualPlay = !1, a.pause()) : (a.manualPause = !1, a.manualPlay = !0, a.play())), "" === o && (o = e.type), m.setToClearWatchedEvent()
						})
					},
					update: function(e)
					{
						"play" === e ? a.pausePlay.removeClass(n + "pause").addClass(n + "play").html(a.vars.playText) : a.pausePlay.removeClass(n + "play").addClass(n + "pause").html(a.vars.pauseText)
					}
				},
				touch: function()
				{
					function t(t)
					{
						t.stopPropagation(), a.animating ? t.preventDefault() : (a.pause(), e._gesture.addPointer(t.pointerId), w = 0, p = c ? a.h : a.w, f = Number(new Date), l = u && d && a.animatingTo === a.last ? 0 : u && d ? a.limit - (a.itemW + a.vars.itemMargin) * a.move * a.animatingTo : u && a.currentSlide === a.last ? a.limit : u ? (a.itemW + a.vars.itemMargin) * a.move * a.currentSlide : d ? (a.last - a.currentSlide + a.cloneOffset) * p : (a.currentSlide + a.cloneOffset) * p)
					}

					function n(t)
					{
						t.stopPropagation();
						var a = t.target._slider;
						if (a)
						{
							var n = -t.translationX,
								i = -t.translationY;
							return w += c ? i : n, m = w, y = c ? Math.abs(w) < Math.abs(-n) : Math.abs(w) < Math.abs(-i), t.detail === t.MSGESTURE_FLAG_INERTIA ? void setImmediate(function()
							{
								e._gesture.stop()
							}) : void((!y || Number(new Date) - f > 500) && (t.preventDefault(), !v && a.transitions && (a.vars.animationLoop || (m = w / (0 === a.currentSlide && 0 > w || a.currentSlide === a.last && w > 0 ? Math.abs(w) / p + 2 : 1)), a.setProps(l + m, "setTouch"))))
						}
					}

					function s(e)
					{
						e.stopPropagation();
						var t = e.target._slider;
						if (t)
						{
							if (t.animatingTo === t.currentSlide && !y && null !== m)
							{
								var a = d ? -m : m,
									n = t.getTarget(a > 0 ? "next" : "prev");
								t.canAdvance(n) && (Number(new Date) - f < 550 && Math.abs(a) > 50 || Math.abs(a) > p / 2) ? t.flexAnimate(n, t.vars.pauseOnAction) : v || t.flexAnimate(t.currentSlide, t.vars.pauseOnAction, !0)
							}
							r = null, o = null, m = null, l = null, w = 0
						}
					}
					var r, o, l, p, m, f, g, h, S, y = !1,
						x = 0,
						b = 0,
						w = 0;
					i ? (e.style.msTouchAction = "none", e._gesture = new MSGesture, e._gesture.target = e, e.addEventListener("MSPointerDown", t, !1), e._slider = a, e.addEventListener("MSGestureChange", n, !1), e.addEventListener("MSGestureEnd", s, !1)) : (g = function(t)
					{
						a.animating ? t.preventDefault() : (window.navigator.msPointerEnabled || 1 === t.touches.length) && (a.pause(), p = c ? a.h : a.w, f = Number(new Date), x = t.touches[0].pageX, b = t.touches[0].pageY, l = u && d && a.animatingTo === a.last ? 0 : u && d ? a.limit - (a.itemW + a.vars.itemMargin) * a.move * a.animatingTo : u && a.currentSlide === a.last ? a.limit : u ? (a.itemW + a.vars.itemMargin) * a.move * a.currentSlide : d ? (a.last - a.currentSlide + a.cloneOffset) * p : (a.currentSlide + a.cloneOffset) * p, r = c ? b : x, o = c ? x : b, e.addEventListener("touchmove", h, !1), e.addEventListener("touchend", S, !1))
					}, h = function(e)
					{
						x = e.touches[0].pageX, b = e.touches[0].pageY, m = c ? r - b : r - x, y = c ? Math.abs(m) < Math.abs(x - o) : Math.abs(m) < Math.abs(b - o);
						var t = 500;
						(!y || Number(new Date) - f > t) && (e.preventDefault(), !v && a.transitions && (a.vars.animationLoop || (m /= 0 === a.currentSlide && 0 > m || a.currentSlide === a.last && m > 0 ? Math.abs(m) / p + 2 : 1), a.setProps(l + m, "setTouch")))
					}, S = function(t)
					{
						if (e.removeEventListener("touchmove", h, !1), a.animatingTo === a.currentSlide && !y && null !== m)
						{
							var n = d ? -m : m,
								i = a.getTarget(n > 0 ? "next" : "prev");
							a.canAdvance(i) && (Number(new Date) - f < 550 && Math.abs(n) > 50 || Math.abs(n) > p / 2) ? a.flexAnimate(i, a.vars.pauseOnAction) : v || a.flexAnimate(a.currentSlide, a.vars.pauseOnAction, !0)
						}
						e.removeEventListener("touchend", S, !1), r = null, o = null, m = null, l = null
					}, e.addEventListener("touchstart", g, !1))
				},
				resize: function()
				{
					!a.animating && a.is(":visible") && (u || a.doMath(), v ? m.smoothHeight() : u ? (a.slides.width(a.computedW), a.update(a.pagingCount), a.setProps()) : c ? (a.viewport.height(a.h), a.setProps(a.h, "setTotal")) : (a.vars.smoothHeight && m.smoothHeight(), a.newSlides.width(a.computedW), a.setProps(a.computedW, "setTotal")))
				},
				smoothHeight: function(e)
				{
					if (!c || v)
					{
						var t = v ? a : a.viewport;
						e ? t.animate(
						{
							height: a.slides.eq(a.animatingTo).height()
						}, e) : t.height(a.slides.eq(a.animatingTo).height())
					}
				},
				sync: function(e)
				{
					var t = $(a.vars.sync).data("flexslider"),
						n = a.animatingTo;
					switch (e)
					{
						case "animate":
							t.flexAnimate(n, a.vars.pauseOnAction, !1, !0);
							break;
						case "play":
							t.playing || t.asNav || t.play();
							break;
						case "pause":
							t.pause()
					}
				},
				uniqueID: function(e)
				{
					return e.filter("[id]").add(e.find("[id]")).each(function()
					{
						var e = $(this);
						e.attr("id", e.attr("id") + "_clone")
					}), e
				},
				pauseInvisible:
				{
					visProp: null,
					init: function()
					{
						var e = m.pauseInvisible.getHiddenProp();
						if (e)
						{
							var t = e.replace(/[H|h]idden/, "") + "visibilitychange";
							document.addEventListener(t, function()
							{
								m.pauseInvisible.isHidden() ? a.startTimeout ? clearTimeout(a.startTimeout) : a.pause() : a.started ? a.play() : a.vars.initDelay > 0 ? setTimeout(a.play, a.vars.initDelay) : a.play()
							})
						}
					},
					isHidden: function()
					{
						var e = m.pauseInvisible.getHiddenProp();
						return e ? document[e] : !1
					},
					getHiddenProp: function()
					{
						var e = ["webkit", "moz", "ms", "o"];
						if ("hidden" in document) return "hidden";
						for (var t = 0; t < e.length; t++)
							if (e[t] + "Hidden" in document) return e[t] + "Hidden";
						return null
					}
				},
				setToClearWatchedEvent: function()
				{
					clearTimeout(l), l = setTimeout(function()
					{
						o = ""
					}, 3e3)
				}
			}, a.flexAnimate = function(e, t, i, r, o)
			{
				if (a.vars.animationLoop || e === a.currentSlide || (a.direction = e > a.currentSlide ? "next" : "prev"), p && 1 === a.pagingCount && (a.direction = a.currentItem < e ? "next" : "prev"), !a.animating && (a.canAdvance(e, o) || i) && a.is(":visible"))
				{
					if (p && r)
					{
						var l = $(a.vars.asNavFor).data("flexslider");
						if (a.atEnd = 0 === e || e === a.count - 1, l.flexAnimate(e, !0, !1, !0, o), a.direction = a.currentItem < e ? "next" : "prev", l.direction = a.direction, Math.ceil((e + 1) / a.visible) - 1 === a.currentSlide || 0 === e) return a.currentItem = e, a.slides.removeClass(n + "active-slide").eq(e).addClass(n + "active-slide"), !1;
						a.currentItem = e, a.slides.removeClass(n + "active-slide").eq(e).addClass(n + "active-slide"), e = Math.floor(e / a.visible)
					}
					if (a.animating = !0, a.animatingTo = e, t && a.pause(), a.vars.before(a), a.syncExists && !o && m.sync("animate"), a.vars.controlNav && m.controlNav.active(), u || a.slides.removeClass(n + "active-slide").eq(e).addClass(n + "active-slide"), a.atEnd = 0 === e || e === a.last, a.vars.directionNav && m.directionNav.update(), e === a.last && (a.vars.end(a), a.vars.animationLoop || a.pause()), v) s ? (a.slides.eq(a.currentSlide).css(
					{
						opacity: 0,
						zIndex: 1
					}), a.slides.eq(e).css(
					{
						opacity: 1,
						zIndex: 2
					}), a.wrapup(f)) : (a.slides.eq(a.currentSlide).css(
					{
						zIndex: 1
					}).animate(
					{
						opacity: 0
					}, a.vars.animationSpeed, a.vars.easing), a.slides.eq(e).css(
					{
						zIndex: 2
					}).animate(
					{
						opacity: 1
					}, a.vars.animationSpeed, a.vars.easing, a.wrapup));
					else
					{
						var f = c ? a.slides.filter(":first").height() : a.computedW,
							g, h, S;
						u ? (g = a.vars.itemMargin, S = (a.itemW + g) * a.move * a.animatingTo, h = S > a.limit && 1 !== a.visible ? a.limit : S) : h = 0 === a.currentSlide && e === a.count - 1 && a.vars.animationLoop && "next" !== a.direction ? d ? (a.count + a.cloneOffset) * f : 0 : a.currentSlide === a.last && 0 === e && a.vars.animationLoop && "prev" !== a.direction ? d ? 0 : (a.count + 1) * f : d ? (a.count - 1 - e + a.cloneOffset) * f : (e + a.cloneOffset) * f, a.setProps(h, "", a.vars.animationSpeed), a.transitions ? (a.vars.animationLoop && a.atEnd || (a.animating = !1, a.currentSlide = a.animatingTo), a.container.unbind("webkitTransitionEnd transitionend"), a.container.bind("webkitTransitionEnd transitionend", function()
						{
							clearTimeout(a.ensureAnimationEnd), a.wrapup(f)
						}), clearTimeout(a.ensureAnimationEnd), a.ensureAnimationEnd = setTimeout(function()
						{
							a.wrapup(f)
						}, a.vars.animationSpeed + 100)) : a.container.animate(a.args, a.vars.animationSpeed, a.vars.easing, function()
						{
							a.wrapup(f)
						})
					}
					a.vars.smoothHeight && m.smoothHeight(a.vars.animationSpeed)
				}
			}, a.wrapup = function(e)
			{
				v || u || (0 === a.currentSlide && a.animatingTo === a.last && a.vars.animationLoop ? a.setProps(e, "jumpEnd") : a.currentSlide === a.last && 0 === a.animatingTo && a.vars.animationLoop && a.setProps(e, "jumpStart")), a.animating = !1, a.currentSlide = a.animatingTo, a.vars.after(a)
			}, a.animateSlides = function()
			{
				!a.animating && f && a.flexAnimate(a.getTarget("next"))
			}, a.pause = function()
			{
				clearInterval(a.animatedSlides), a.animatedSlides = null, a.playing = !1, a.vars.pausePlay && m.pausePlay.update("play"), a.syncExists && m.sync("pause")
			}, a.play = function()
			{
				a.playing && clearInterval(a.animatedSlides), a.animatedSlides = a.animatedSlides || setInterval(a.animateSlides, a.vars.slideshowSpeed), a.started = a.playing = !0, a.vars.pausePlay && m.pausePlay.update("pause"), a.syncExists && m.sync("play")
			}, a.stop = function()
			{
				a.pause(), a.stopped = !0
			}, a.canAdvance = function(e, t)
			{
				var n = p ? a.pagingCount - 1 : a.last;
				return t ? !0 : p && a.currentItem === a.count - 1 && 0 === e && "prev" === a.direction ? !0 : p && 0 === a.currentItem && e === a.pagingCount - 1 && "next" !== a.direction ? !1 : e !== a.currentSlide || p ? a.vars.animationLoop ? !0 : a.atEnd && 0 === a.currentSlide && e === n && "next" !== a.direction ? !1 : a.atEnd && a.currentSlide === n && 0 === e && "next" === a.direction ? !1 : !0 : !1
			}, a.getTarget = function(e)
			{
				return a.direction = e, "next" === e ? a.currentSlide === a.last ? 0 : a.currentSlide + 1 : 0 === a.currentSlide ? a.last : a.currentSlide - 1
			}, a.setProps = function(e, t, n)
			{
				var i = function()
				{
					var n = e ? e : (a.itemW + a.vars.itemMargin) * a.move * a.animatingTo,
						i = function()
						{
							if (u) return "setTouch" === t ? e : d && a.animatingTo === a.last ? 0 : d ? a.limit - (a.itemW + a.vars.itemMargin) * a.move * a.animatingTo : a.animatingTo === a.last ? a.limit : n;
							switch (t)
							{
								case "setTotal":
									return d ? (a.count - 1 - a.currentSlide + a.cloneOffset) * e : (a.currentSlide + a.cloneOffset) * e;
								case "setTouch":
									return d ? e : e;
								case "jumpEnd":
									return d ? e : a.count * e;
								case "jumpStart":
									return d ? a.count * e : e;
								default:
									return e
							}
						}();
					return -1 * i + "px"
				}();
				a.transitions && (i = c ? "translate3d(0," + i + ",0)" : "translate3d(" + i + ",0,0)", n = void 0 !== n ? n / 1e3 + "s" : "0s", a.container.css("-" + a.pfx + "-transition-duration", n), a.container.css("transition-duration", n)), a.args[a.prop] = i, (a.transitions || void 0 === n) && a.container.css(a.args), a.container.css("transform", i)
			}, a.setup = function(e)
			{
				if (v) a.slides.css(
				{
					width: "100%",
					"float": "left",
					marginRight: "-100%",
					position: "relative"
				}), "init" === e && (s ? a.slides.css(
				{
					opacity: 0,
					display: "block",
					webkitTransition: "opacity " + a.vars.animationSpeed / 1e3 + "s ease",
					zIndex: 1
				}).eq(a.currentSlide).css(
				{
					opacity: 1,
					zIndex: 2
				}) : 0 == a.vars.fadeFirstSlide ? a.slides.css(
				{
					opacity: 0,
					display: "block",
					zIndex: 1
				}).eq(a.currentSlide).css(
				{
					zIndex: 2
				}).css(
				{
					opacity: 1
				}) : a.slides.css(
				{
					opacity: 0,
					display: "block",
					zIndex: 1
				}).eq(a.currentSlide).css(
				{
					zIndex: 2
				}).animate(
				{
					opacity: 1
				}, a.vars.animationSpeed, a.vars.easing)), a.vars.smoothHeight && m.smoothHeight();
				else
				{
					var t, i;
					"init" === e && (a.viewport = $('<div class="' + n + 'viewport"></div>').css(
					{
						overflow: "hidden",
						position: "relative"
					}).appendTo(a).append(a.container), a.cloneCount = 0, a.cloneOffset = 0, d && (i = $.makeArray(a.slides).reverse(), a.slides = $(i), a.container.empty().append(a.slides))), a.vars.animationLoop && !u && (a.cloneCount = 2, a.cloneOffset = 1, "init" !== e && a.container.find(".clone").remove(), a.container.append(m.uniqueID(a.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(m.uniqueID(a.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), a.newSlides = $(a.vars.selector, a), t = d ? a.count - 1 - a.currentSlide + a.cloneOffset : a.currentSlide + a.cloneOffset, c && !u ? (a.container.height(200 * (a.count + a.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function()
					{
						a.newSlides.css(
						{
							display: "block"
						}), a.doMath(), a.viewport.height(a.h), a.setProps(t * a.h, "init")
					}, "init" === e ? 100 : 0)) : (a.container.width(200 * (a.count + a.cloneCount) + "%"), a.setProps(t * a.computedW, "init"), setTimeout(function()
					{
						a.doMath(), a.newSlides.css(
						{
							width: a.computedW,
							"float": "left",
							display: "block"
						}), a.vars.smoothHeight && m.smoothHeight()
					}, "init" === e ? 100 : 0))
				}
				u || a.slides.removeClass(n + "active-slide").eq(a.currentSlide).addClass(n + "active-slide"), a.vars.init(a)
			}, a.doMath = function()
			{
				var e = a.slides.first(),
					t = a.vars.itemMargin,
					n = a.vars.minItems,
					i = a.vars.maxItems;
				a.w = void 0 === a.viewport ? a.width() : a.viewport.width(), a.h = e.height(), a.boxPadding = e.outerWidth() - e.width(), u ? (a.itemT = a.vars.itemWidth + t, a.minW = n ? n * a.itemT : a.w, a.maxW = i ? i * a.itemT - t : a.w, a.itemW = a.minW > a.w ? (a.w - t * (n - 1)) / n : a.maxW < a.w ? (a.w - t * (i - 1)) / i : a.vars.itemWidth > a.w ? a.w : a.vars.itemWidth, a.visible = Math.floor(a.w / a.itemW), a.move = a.vars.move > 0 && a.vars.move < a.visible ? a.vars.move : a.visible, a.pagingCount = Math.ceil((a.count - a.visible) / a.move + 1), a.last = a.pagingCount - 1, a.limit = 1 === a.pagingCount ? 0 : a.vars.itemWidth > a.w ? a.itemW * (a.count - 1) + t * (a.count - 1) : (a.itemW + t) * a.count - a.w - t) : (a.itemW = a.w, a.pagingCount = a.count, a.last = a.count - 1), a.computedW = a.itemW - a.boxPadding
			}, a.update = function(e, t)
			{
				a.doMath(), u || (e < a.currentSlide ? a.currentSlide += 1 : e <= a.currentSlide && 0 !== e && (a.currentSlide -= 1), a.animatingTo = a.currentSlide), a.vars.controlNav && !a.manualControls && ("add" === t && !u || a.pagingCount > a.controlNav.length ? m.controlNav.update("add") : ("remove" === t && !u || a.pagingCount < a.controlNav.length) && (u && a.currentSlide > a.last && (a.currentSlide -= 1, a.animatingTo -= 1), m.controlNav.update("remove", a.last))), a.vars.directionNav && m.directionNav.update()
			}, a.addSlide = function(e, t)
			{
				var n = $(e);
				a.count += 1, a.last = a.count - 1, c && d ? void 0 !== t ? a.slides.eq(a.count - t).after(n) : a.container.prepend(n) : void 0 !== t ? a.slides.eq(t).before(n) : a.container.append(n), a.update(t, "add"), a.slides = $(a.vars.selector + ":not(.clone)", a), a.setup(), a.vars.added(a)
			}, a.removeSlide = function(e)
			{
				var t = isNaN(e) ? a.slides.index($(e)) : e;
				a.count -= 1, a.last = a.count - 1, isNaN(e) ? $(e, a.slides).remove() : c && d ? a.slides.eq(a.last).remove() : a.slides.eq(e).remove(), a.doMath(), a.update(t, "remove"), a.slides = $(a.vars.selector + ":not(.clone)", a), a.setup(), a.vars.removed(a)
			}, m.init()
		}, $(window).blur(function(e)
		{
			focused = !1
		}).focus(function(e)
		{
			focused = !0
		}), $.flexslider.defaults = {
			namespace: "flex-",
			selector: ".slides > li",
			animation: "fade",
			easing: "swing",
			direction: "horizontal",
			reverse: !1,
			animationLoop: !0,
			smoothHeight: !1,
			startAt: 0,
			slideshow: !0,
			slideshowSpeed: 7e3,
			animationSpeed: 600,
			initDelay: 0,
			randomize: !1,
			fadeFirstSlide: !0,
			thumbCaptions: !1,
			pauseOnAction: !0,
			pauseOnHover: !1,
			pauseInvisible: !0,
			useCSS: !0,
			touch: !0,
			video: !1,
			controlNav: !0,
			directionNav: !0,
			prevText: "Previous",
			nextText: "Next",
			keyboard: !0,
			multipleKeyboard: !1,
			mousewheel: !1,
			pausePlay: !1,
			pauseText: "Pause",
			playText: "Play",
			controlsContainer: "",
			manualControls: "",
			customDirectionNav: "",
			sync: "",
			asNavFor: "",
			itemWidth: 0,
			itemMargin: 0,
			minItems: 1,
			maxItems: 0,
			move: 0,
			allowOneSlide: !0,
			start: function() {},
			before: function() {},
			after: function() {},
			end: function() {},
			added: function() {},
			removed: function() {},
			init: function() {}
		}, $.fn.flexslider = function(e)
		{
			if (void 0 === e && (e = {}), "object" == typeof e) return this.each(function()
			{
				var t = $(this),
					a = e.selector ? e.selector : ".slides > li",
					n = t.find(a);
				1 === n.length && e.allowOneSlide === !0 || 0 === n.length ? (n.fadeIn(400), e.start && e.start(t)) : void 0 === t.data("flexslider") && new $.flexslider(this, e)
			});
			var t = $(this).data("flexslider");
			switch (e)
			{
				case "play":
					t.play();
					break;
				case "pause":
					t.pause();
					break;
				case "stop":
					t.stop();
					break;
				case "next":
					t.flexAnimate(t.getTarget("next"), !0);
					break;
				case "prev":
				case "previous":
					t.flexAnimate(t.getTarget("prev"), !0);
					break;
				default:
					"number" == typeof e && t.flexAnimate(e, !0)
			}
		}
	}(jQuery);
	! function(t)
	{
		"use strict";
		t.fn.fitVids = function(e)
		{
			var i = {
				customSelector: null,
				ignore: null
			};
			if (!document.getElementById("fit-vids-style"))
			{
				var r = document.head || document.getElementsByTagName("head")[0],
					a = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
					o = document.createElement("div");
				o.innerHTML = '<p>x</p><style id="fit-vids-style">' + a + "</style>", r.appendChild(o.childNodes[1])
			}
			return e && t.extend(i, e), this.each(function()
			{
				var e = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "iframe[src*='dailymotion.com']", "object", "embed"];
				i.customSelector && e.push(i.customSelector);
				var r = ".fitvidsignore";
				i.ignore && (r = r + ", " + i.ignore);
				var a = t(this).find(e.join(","));
				a = a.not("object object"), a = a.not(r), a.each(function()
				{
					var e = t(this);
					if (!(e.parents(r).length > 0 || "embed" === this.tagName.toLowerCase() && e.parent("object").length || e.parent(".fluid-width-video-wrapper").length))
					{
						e.css("height") || e.css("width") || !isNaN(e.attr("height")) && !isNaN(e.attr("width")) || (e.attr("height", 9), e.attr("width", 16));
						var i = "object" === this.tagName.toLowerCase() || e.attr("height") && !isNaN(parseInt(e.attr("height"), 10)) ? parseInt(e.attr("height"), 10) : e.height(),
							a = isNaN(parseInt(e.attr("width"), 10)) ? e.width() : parseInt(e.attr("width"), 10),
							o = i / a;
						if (!e.attr("name"))
						{
							var d = "fitvid" + t.fn.fitVids._count;
							e.attr("name", d), t.fn.fitVids._count++
						}
						e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * o + "%"), e.removeAttr("height").removeAttr("width")
					}
				})
			})
		}, t.fn.fitVids._count = 0
	}(window.jQuery || window.Zepto);
	(function(c, n)
	{
		var l = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
		c.fn.imagesLoaded = function(f)
		{
			function m()
			{
				var b = c(i),
					a = c(h);
				d && (h.length ? d.reject(e, b, a) : d.resolve(e));
				c.isFunction(f) && f.call(g, e, b, a)
			}

			function j(b, a)
			{
				b.src === l || -1 !== c.inArray(b, k) || (k.push(b), a ? h.push(b) : i.push(b), c.data(b, "imagesLoaded",
				{
					isBroken: a,
					src: b.src
				}), o && d.notifyWith(c(b), [a, e, c(i), c(h)]), e.length === k.length && (setTimeout(m), e.unbind(".imagesLoaded")))
			}
			var g = this,
				d = c.isFunction(c.Deferred) ? c.Deferred() : 0,
				o = c.isFunction(d.notify),
				e = g.find("img").add(g.filter("img")),
				k = [],
				i = [],
				h = [];
			c.isPlainObject(f) && c.each(f, function(b, a)
			{
				if ("callback" === b) f = a;
				else if (d) d[b](a)
			});
			e.length ? e.bind("load.imagesLoaded error.imagesLoaded", function(b)
			{
				j(b.target, "error" === b.type)
			}).each(function(b, a)
			{
				var d = a.src,
					e = c.data(a, "imagesLoaded");
				if (e && e.src === d) j(a, e.isBroken);
				else if (a.complete && a.naturalWidth !== n) j(a, 0 === a.naturalWidth || 0 === a.naturalHeight);
				else if (a.readyState || a.complete) a.src = l, a.src = d
			}) : m();
			return d ? d.promise(g) : g
		}
	})(jQuery);
	! function(i)
	{
		i.fn.theiaStickySidebar = function(t)
		{
			var o = {
				containerSelector: "",
				additionalMarginTop: 0,
				additionalMarginBottom: 0,
				updateSidebarHeight: !0,
				minWidth: 0
			};
			t = i.extend(o, t), t.additionalMarginTop = parseInt(t.additionalMarginTop) || 0, t.additionalMarginBottom = parseInt(t.additionalMarginBottom) || 0, this.each(function()
			{
				function o()
				{
					e.fixedScrollTop = 0, e.sidebar.css(
					{
						"min-height": "1px"
					}), e.stickySidebar.css(
					{
						position: "static",
						width: ""
					})
				}

				function a(t)
				{
					var o = t.height();
					return t.children().each(function()
					{
						o = Math.max(o, i(this).height())
					}), o
				}
				var e = {};
				e.sidebar = i(this), e.options = t ||
				{}, e.container = i(e.options.containerSelector), 0 == e.container.size() && (e.container = e.sidebar.parent()), e.sidebar.css(
				{
					position: "relative",
					overflow: "visible",
					"-webkit-box-sizing": "border-box",
					"-moz-box-sizing": "border-box",
					"box-sizing": "border-box"
				}), e.stickySidebar = e.sidebar.find(".theiaStickySidebar"), 0 == e.stickySidebar.length && (e.sidebar.find("script").remove(), e.stickySidebar = i("<div>").addClass("theiaStickySidebar").append(e.sidebar.children()), e.sidebar.append(e.stickySidebar)), e.marginTop = parseInt(e.sidebar.css("margin-top")), e.marginBottom = parseInt(e.sidebar.css("margin-bottom")), e.paddingTop = parseInt(e.sidebar.css("padding-top")), e.paddingBottom = parseInt(e.sidebar.css("padding-bottom"));
				var d = e.stickySidebar.offset().top,
					r = e.stickySidebar.outerHeight();
				e.stickySidebar.css("padding-top", 1), e.stickySidebar.css("padding-bottom", 1), d -= e.stickySidebar.offset().top, r = e.stickySidebar.outerHeight() - r - d, 0 == d ? (e.stickySidebar.css("padding-top", 0), e.stickySidebarPaddingTop = 0) : e.stickySidebarPaddingTop = 1, 0 == r ? (e.stickySidebar.css("padding-bottom", 0), e.stickySidebarPaddingBottom = 0) : e.stickySidebarPaddingBottom = 1, e.previousScrollTop = null, e.fixedScrollTop = 0, o(), e.onScroll = function(e)
				{
					if (e.stickySidebar.is(":visible"))
					{
						if (i("body").width() < e.options.minWidth) return void o();
						if (e.sidebar.outerWidth(!0) + 50 > e.container.width()) return void o();
						var d = i(document).scrollTop(),
							r = "static";
						if (d >= e.container.offset().top + (e.paddingTop + e.marginTop - e.options.additionalMarginTop))
						{
							var n, s = e.paddingTop + e.marginTop + t.additionalMarginTop,
								c = e.paddingBottom + e.marginBottom + t.additionalMarginBottom,
								p = e.container.offset().top,
								b = e.container.offset().top + a(e.container),
								g = 0 + t.additionalMarginTop,
								l = e.stickySidebar.outerHeight() + s + c < i(window).height();
							n = l ? g + e.stickySidebar.outerHeight() : i(window).height() - e.marginBottom - e.paddingBottom - t.additionalMarginBottom;
							var f = p - d + e.paddingTop + e.marginTop,
								S = b - d - e.paddingBottom - e.marginBottom,
								h = e.stickySidebar.offset().top - d,
								m = e.previousScrollTop - d;
							"fixed" == e.stickySidebar.css("position") && (h += m), h = m > 0 ? Math.min(h, g) : Math.max(h, n - e.stickySidebar.outerHeight()), h = Math.max(h, f), h = Math.min(h, S - e.stickySidebar.outerHeight());
							var u = e.container.height() == e.stickySidebar.outerHeight();
							r = (u || h != g) && (u || h != n - e.stickySidebar.outerHeight()) ? d + h - e.sidebar.offset().top - e.paddingTop <= t.additionalMarginTop ? "static" : "absolute" : "fixed"
						}
						if ("fixed" == r) e.stickySidebar.css(
						{
							position: "fixed",
							width: e.sidebar.width(),
							top: h,
							left: e.sidebar.offset().left + parseInt(e.sidebar.css("padding-left"))
						});
						else if ("absolute" == r)
						{
							var y = {};
							"absolute" != e.stickySidebar.css("position") && (y.position = "absolute", y.top = d + h - e.sidebar.offset().top - e.stickySidebarPaddingTop - e.stickySidebarPaddingBottom), y.width = e.sidebar.width(), y.left = "", e.stickySidebar.css(y)
						}
						else "static" == r && o();
						"static" != r && 1 == e.options.updateSidebarHeight && e.sidebar.css(
						{
							"min-height": e.stickySidebar.outerHeight() + e.stickySidebar.offset().top - e.sidebar.offset().top + e.paddingBottom
						}), e.previousScrollTop = d
					}
				}, e.onScroll(e), i(document).scroll(function(i)
				{
					return function()
					{
						i.onScroll(i)
					}
				}(e)), i(window).resize(function(i)
				{
					return function()
					{
						i.stickySidebar.css(
						{
							position: "static"
						}), i.onScroll(i)
					}
				}(e))
			})
		}
	}(jQuery);
}
catch (e)
{
	console.log(e)
}
try
{
	(function(g, n, R)
	{
		function F(a, b)
		{
			return parseInt(a.css(b), 10) || 0
		}

		function J()
		{
			var a = n,
				b = "inner";
			"innerWidth" in n || (b = "client", a = document.documentElement || document.body);
			return {
				width: a[b + "Width"],
				height: a[b + "Height"]
			}
		}

		function fa()
		{
			var a = L();
			n.location.hash = "";
			n.scrollTo(a.x, a.y)
		}

		function ga(a, b)
		{
			a = "http://ilightbox.net/getSource/jsonp.php?url=" + encodeURIComponent(a).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A");
			g.ajax(
			{
				url: a,
				dataType: "jsonp"
			});
			iLCallback = function(a)
			{
				b.call(this, a)
			}
		}

		function S(a)
		{
			var b = [];
			g("*", a).each(function()
			{
				var a = "";
				"none" != g(this).css("background-image") ? a = g(this).css("background-image") : "undefined" != typeof g(this).attr("src") && "img" == this.nodeName.toLowerCase() && (a = g(this).attr("src"));
				if (-1 == a.indexOf("gradient"))
					for (var a = a.replace(/url\(\"/g, ""), a = a.replace(/url\(/g, ""), a = a.replace(/\"\)/g, ""), a = a.replace(/\)/g, ""), a = a.split(","), d = 0; d < a.length; d++)
						if (0 < a[d].length && -1 == g.inArray(a[d], b))
						{
							var e = "";
							D.msie && 9 > D.version && (e = "?" + M(3E3 * T()));
							b.push(a[d] + e)
						}
			});
			return b
		}

		function Z(a)
		{
			a = a.split(".").pop().toLowerCase();
			var b = -1 !== a.indexOf("?") ? a.split("?").pop() : "";
			return a.replace(b, "")
		}

		function $(a)
		{
			a = Z(a);
			return -1 !== U.image.indexOf(a) ? "image" : -1 !== U.flash.indexOf(a) ? "flash" : -1 !== U.video.indexOf(a) ? "video" : "iframe"
		}

		function aa(a, b)
		{
			return parseInt(b / 100 * a)
		}

		function V(a)
		{
			return (a = String(a).replace(/^\s+|\s+$/g, "").match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/)) ?
			{
				href: a[0] || "",
				protocol: a[1] || "",
				authority: a[2] || "",
				host: a[3] || "",
				hostname: a[4] || "",
				port: a[5] || "",
				pathname: a[6] || "",
				search: a[7] || "",
				hash: a[8] || ""
			} : null
		}

		function N(a, b)
		{
			function c(a)
			{
				var b = [];
				a.replace(/^(\.\.?(\/|$))+/, "").replace(/\/(\.(\/|$))+/g, "/").replace(/\/\.\.$/, "/../").replace(/\/?[^\/]*/g, function(a)
				{
					"/.." === a ? b.pop() : b.push(a)
				});
				return b.join("").replace(/^\//, "/" === a.charAt(0) ? "/" : "")
			}
			b = V(b || "");
			a = V(a || "");
			return b && a ? (b.protocol || a.protocol) + (b.protocol || b.authority ? b.authority : a.authority) + c(b.protocol || b.authority || "/" === b.pathname.charAt(0) ? b.pathname : b.pathname ? (a.authority && !a.pathname ? "/" : "") + a.pathname.slice(0, a.pathname.lastIndexOf("/") + 1) + b.pathname : a.pathname) + (b.protocol || b.authority || b.pathname ? b.search : b.search || a.search) + b.hash : null
		}

		function ha(a, b, c)
		{
			this.php_js = this.php_js ||
			{};
			this.php_js.ENV = this.php_js.ENV ||
			{};
			var d = 0,
				e = 0,
				f = 0,
				l = {
					dev: -6,
					alpha: -5,
					a: -5,
					beta: -4,
					b: -4,
					RC: -3,
					rc: -3,
					"#": -2,
					p: 1,
					pl: 1
				},
				d = function(a)
				{
					a = ("" + a).replace(/[_\-+]/g, ".");
					a = a.replace(/([^.\d]+)/g, ".$1.").replace(/\.{2,}/g, ".");
					return a.length ? a.split(".") : [-8]
				},
				g = function(a)
				{
					return a ? isNaN(a) ? l[a] || -7 : parseInt(a, 10) : 0
				};
			a = d(a);
			b = d(b);
			e = ba(a.length, b.length);
			for (d = 0; d < e; d++)
				if (a[d] != b[d])
					if (a[d] = g(a[d]), b[d] = g(b[d]), a[d] < b[d])
					{
						f = -1;
						break
					}
					else if (a[d] > b[d])
			{
				f = 1;
				break
			}
			if (!c) return f;
			switch (c)
			{
				case ">":
				case "gt":
					return 0 < f;
				case ">=":
				case "ge":
					return 0 <= f;
				case "<=":
				case "le":
					return 0 >= f;
				case "==":
				case "=":
				case "eq":
					return 0 === f;
				case "<>":
				case "!=":
				case "ne":
					return 0 !== f;
				case "":
				case "<":
				case "lt":
					return 0 > f;
				default:
					return null
			}
		}

		function L()
		{
			var a = 0,
				b = 0;
			"number" == typeof n.pageYOffset ? (b = n.pageYOffset, a = n.pageXOffset) : document.body && (document.body.scrollLeft || document.body.scrollTop) ? (b = document.body.scrollTop, a = document.body.scrollLeft) : document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop) && (b = document.documentElement.scrollTop, a = document.documentElement.scrollLeft);
			return {
				x: a,
				y: b
			}
		}

		function ca(a, b, c)
		{
			var d;
			d = q[a + b];
			null == d && (d = q[b]);
			return null != d ? (0 == b.indexOf(a) && null == c && (c = b.substring(a.length)), null == c && (c = b), c + '="' + d + '" ') : ""
		}

		function B(a, b)
		{
			if (0 == a.indexOf("emb#")) return "";
			0 == a.indexOf("obj#") && null == b && (b = a.substring(4));
			return ca("obj#", a, b)
		}

		function G(a, b)
		{
			if (0 == a.indexOf("obj#")) return "";
			0 == a.indexOf("emb#") && null == b && (b = a.substring(4));
			return ca("emb#", a, b)
		}

		function da(a, b)
		{
			var c, d = "",
				e = b ? " />" : ">"; - 1 == a.indexOf("emb#") && (c = q["obj#" + a], null == c && (c = q[a]), 0 == a.indexOf("obj#") && (a = a.substring(4)), null != c && (d = '  <param name="' + a + '" value="' + c + '"' + e + "\n"));
			return d
		}

		function ia()
		{
			for (var a = 0; a < arguments.length; a++)
			{
				var b = arguments[a];
				delete q[b];
				delete q["emb#" + b];
				delete q["obj#" + b]
			}
		}

		function ja()
		{
			var a;
			a = "QT_GenerateOBJECTText";
			var b = arguments;
			if (4 > b.length || 0 != b.length % 2) b = ka, b = b.replace("%%", a), alert(b), a = "";
			else
			{
				q = [];
				q.src = b[0];
				q.width = b[1];
				q.height = b[2];
				q.classid = "clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B";
				q.pluginspage = "http://www.apple.com/quicktime/download/";
				a = b[3];
				if (null == a || "" == a) a = "6,0,2,0";
				q.codebase = "http://www.apple.com/qtactivex/qtplugin.cab#version=" + a;
				for (var c, d = 4; d < b.length; d += 2) c = b[d].toLowerCase(), a = b[d + 1], "name" == c || "id" == c ? q.name = a : q[c] = a;
				b = "<object " + B("classid") + B("width") + B("height") + B("codebase") + B("name", "id") + B("tabindex") + B("hspace") + B("vspace") + B("border") + B("align") + B("class") + B("title") + B("accesskey") + B("noexternaldata") + ">\n" + da("src", !1);
				d = "  <embed " + G("src") + G("width") + G("height") + G("pluginspage") + G("name") + G("align") + G("tabindex");
				ia("src", "width", "height", "pluginspage", "classid", "codebase", "name", "tabindex", "hspace", "vspace", "border", "align", "noexternaldata", "class", "title", "accesskey");
				for (c in q) a = q[c], null != a && (d += G(c), b += da(c, !1));
				a = b + d + "> </embed>\n</object>"
			}
			return a
		}
		var U = {
				flash: ["swf"],
				image: "bmp gif jpeg jpg png tiff tif jfif jpe".split(" "),
				iframe: "asp aspx cgi cfm htm html jsp php pl php3 php4 php5 phtml rb rhtml shtml txt".split(" "),
				video: "avi mov mpg mpeg movie mp4 webm ogv ogg 3gp m4v".split(" ")
			},
			O = g(n),
			E = g(document),
			D, C, H, z = "",
			A = !!("ontouchstart" in n) && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
			K = A ? "itap.iLightBox" : "click.iLightBox",
			la = A ? "touchstart.iLightBox" : "mousedown.iLightBox",
			ma = A ? "touchend.iLightBox" : "mouseup.iLightBox",
			W = A ? "touchmove.iLightBox" : "mousemove.iLightBox",
			I = Math.abs,
			P = Math.sqrt,
			X = Math.round,
			ba = Math.max,
			Y = Math.min,
			M = Math.floor,
			T = Math.random,
			ea = function(a, b, c, d)
			{
				var e = this;
				e.options = b;
				e.selector = a.selector || a;
				e.context = a.context;
				e.instant = d;
				1 > c.length ? e.attachItems() : e.items = c;
				e.vars = {
					total: e.items.length,
					start: 0,
					current: null,
					next: null,
					prev: null,
					BODY: g("body"),
					loadRequests: 0,
					overlay: g('<div class="ilightbox-overlay"></div>'),
					loader: g('<div class="ilightbox-loader"><div></div></div>'),
					toolbar: g('<div class="ilightbox-toolbar"></div>'),
					innerToolbar: g('<div class="ilightbox-inner-toolbar"></div>'),
					title: g('<div class="ilightbox-title"></div>'),
					closeButton: g('<a class="ilightbox-close" title="' + e.options.text.close + '"></a>'),
					fullScreenButton: g('<a class="ilightbox-fullscreen" title="' + e.options.text.enterFullscreen + '"></a>'),
					innerPlayButton: g('<a class="ilightbox-play" title="' + e.options.text.slideShow + '"></a>'),
					innerNextButton: g('<a class="ilightbox-next-button" title="' + e.options.text.next + '"></a>'),
					innerPrevButton: g('<a class="ilightbox-prev-button" title="' + e.options.text.previous + '"></a>'),
					holder: g('<div class="ilightbox-holder' + (A ? " supportTouch" : "") + '" ondragstart="return false;"><div class="ilightbox-container"></div></div>'),
					nextPhoto: g('<div class="ilightbox-holder' + (A ? " supportTouch" : "") + ' ilightbox-next" ondragstart="return false;"><div class="ilightbox-container"></div></div>'),
					prevPhoto: g('<div class="ilightbox-holder' + (A ? " supportTouch" : "") + ' ilightbox-prev" ondragstart="return false;"><div class="ilightbox-container"></div></div>'),
					nextButton: g('<a class="ilightbox-button ilightbox-next-button" ondragstart="return false;" title="' + e.options.text.next + '"><span></span></a>'),
					prevButton: g('<a class="ilightbox-button ilightbox-prev-button" ondragstart="return false;" title="' + e.options.text.previous + '"><span></span></a>'),
					thumbnails: g('<div class="ilightbox-thumbnails" ondragstart="return false;"><div class="ilightbox-thumbnails-container"><a class="ilightbox-thumbnails-dragger"></a><div class="ilightbox-thumbnails-grid"></div></div></div>'),
					thumbs: !1,
					nextLock: !1,
					prevLock: !1,
					hashLock: !1,
					isMobile: !1,
					mobileMaxWidth: 980,
					isInFullScreen: !1,
					isSwipe: !1,
					mouseID: 0,
					cycleID: 0,
					isPaused: 0
				};
				e.vars.hideableElements = e.vars.nextButton.add(e.vars.prevButton);
				e.normalizeItems();
				e.availPlugins();
				e.options.startFrom = 0 < e.options.startFrom && e.options.startFrom >= e.vars.total ? e.vars.total - 1 : e.options.startFrom;
				e.options.startFrom = e.options.randomStart ? M(T() * e.vars.total) : e.options.startFrom;
				e.vars.start = e.options.startFrom;
				d ? e.instantCall() : e.patchItemsEvents();
				e.options.linkId && (e.hashChangeHandler(), O.iLightBoxHashChange(function()
				{
					e.hashChangeHandler()
				}));
				A && (a = /(click|mouseenter|mouseleave|mouseover|mouseout)/ig, e.options.caption.show = e.options.caption.show.replace(a, "itap"), e.options.caption.hide = e.options.caption.hide.replace(a, "itap"), e.options.social.show = e.options.social.show.replace(a, "itap"), e.options.social.hide = e.options.social.hide.replace(a, "itap"));
				e.options.controls.arrows && g.extend(e.options.styles,
				{
					nextOffsetX: 0,
					prevOffsetX: 0,
					nextOpacity: 0,
					prevOpacity: 0
				})
			};
		ea.prototype = {
			showLoader: function()
			{
				this.vars.loadRequests += 1;
				"horizontal" == this.options.path.toLowerCase() ? this.vars.loader.stop().animate(
				{
					top: "-30px"
				}, this.options.show.speed, "easeOutCirc") : this.vars.loader.stop().animate(
				{
					left: "-30px"
				}, this.options.show.speed, "easeOutCirc")
			},
			hideLoader: function()
			{
				this.vars.loadRequests -= 1;
				this.vars.loadRequests = 0 > this.vars.loadRequests ? 0 : this.vars.loadRequests;
				"horizontal" == this.options.path.toLowerCase() ? 0 >= this.vars.loadRequests && this.vars.loader.stop().animate(
				{
					top: "-192px"
				}, this.options.show.speed, "easeInCirc") : 0 >= this.vars.loadRequests && this.vars.loader.stop().animate(
				{
					left: "-192px"
				}, this.options.show.speed, "easeInCirc")
			},
			createUI: function()
			{
				var a = this;
				a.ui = {
					currentElement: a.vars.holder,
					nextElement: a.vars.nextPhoto,
					prevElement: a.vars.prevPhoto,
					currentItem: a.vars.current,
					nextItem: a.vars.next,
					prevItem: a.vars.prev,
					hide: function()
					{
						a.closeAction()
					},
					refresh: function()
					{
						0 < arguments.length ? a.repositionPhoto(!0) : a.repositionPhoto()
					},
					fullscreen: function()
					{
						a.fullScreenAction()
					}
				}
			},
			attachItems: function()
			{
				var a = this,
					b = [],
					c = [];
				g(a.selector, a.context).each(function()
				{
					var d = g(this),
						e = d.attr(a.options.attr) || null,
						f = d.data("options") && eval("({" + d.data("options") + "})") ||
						{},
						l = d.data("caption"),
						k = d.data("title"),
						h = d.data("type") || $(e);
					c.push(
					{
						URL: e,
						caption: l,
						title: k,
						type: h,
						options: f
					});
					a.instant || b.push(d)
				});
				a.items = c;
				a.itemsObject = b
			},
			normalizeItems: function()
			{
				var a = this,
					b = [];
				g.each(a.items, function(c, d)
				{
					"string" == typeof d && (d = {
						url: d
					});
					var e = d.url || d.URL || null,
						f = d.options ||
						{},
						l = d.caption || null,
						k = d.title || null,
						h = d.type ? d.type.toLowerCase() : $(e),
						m = "object" != typeof e ? Z(e) : "";
					f.thumbnail = f.thumbnail || ("image" == h ? e : null);
					f.videoType = f.videoType || null;
					f.skin = f.skin || a.options.skin;
					f.width = f.width || null;
					f.height = f.height || null;
					f.mousewheel = "undefined" != typeof f.mousewheel ? f.mousewheel : !0;
					f.swipe = "undefined" != typeof f.swipe ? f.swipe : !0;
					f.social = "undefined" != typeof f.social ? f.social : a.options.social.buttons && g.extend(
					{},
					{}, a.options.social.buttons);
					"video" == h && (f.html5video = "undefined" != typeof f.html5video ? f.html5video :
					{}, f.html5video.webm = f.html5video.webm || f.html5video.WEBM || null, f.html5video.controls = "undefined" != typeof f.html5video.controls ? f.html5video.controls : "controls", f.html5video.preload = f.html5video.preload || "metadata", f.html5video.autoplay = "undefined" != typeof f.html5video.autoplay ? f.html5video.autoplay : !1);
					f.width && f.height || ("video" == h ? (f.width = 1280, f.height = 720) : "iframe" == h ? (f.width = "100%", f.height = "90%") : "flash" == h && (f.width = 1280, f.height = 720));
					delete d.url;
					d.index = c;
					d.URL = e;
					d.caption = l;
					d.title = k;
					d.type = h;
					d.options = f;
					d.ext = m;
					b.push(d)
				});
				a.items = b
			},
			instantCall: function()
			{
				var a = this.vars.start;
				this.vars.current = a;
				this.vars.next = this.items[a + 1] ? a + 1 : null;
				this.vars.prev = this.items[a - 1] ? a - 1 : null;
				this.addContents();
				this.patchEvents()
			},
			addContents: function()
			{
				var a = this,
					b = a.vars,
					c = a.options,
					d = J(),
					e = c.path.toLowerCase(),
					f = 0 < b.total && a.items.filter(function(a, b, d)
					{
						return -1 === ["image", "flash", "video"].indexOf(a.type) && "undefined" === typeof a.recognized && (c.smartRecognition || a.options.smartRecognition)
					}),
					l = 0 < f.length;
				c.mobileOptimizer && !c.innerToolbar && (b.isMobile = d.width <= b.mobileMaxWidth);
				b.overlay.addClass(c.skin).hide().css("opacity", c.overlay.opacity);
				c.linkId && b.overlay[0].setAttribute("linkid", c.linkId);
				c.controls.toolbar && (b.toolbar.addClass(c.skin).append(b.closeButton), c.controls.fullscreen && b.toolbar.append(b.fullScreenButton), c.controls.slideshow && b.toolbar.append(b.innerPlayButton), 1 < b.total && b.toolbar.append(b.innerPrevButton).append(b.innerNextButton));
				b.BODY.addClass("ilightbox-noscroll").append(b.overlay).append(b.loader).append(b.holder).append(b.nextPhoto).append(b.prevPhoto);
				c.innerToolbar || b.BODY.append(b.toolbar);
				c.controls.arrows && b.BODY.append(b.nextButton).append(b.prevButton);
				c.controls.thumbnail && 1 < b.total && (b.BODY.append(b.thumbnails), b.thumbnails.addClass(c.skin).addClass("ilightbox-" + e), g("div.ilightbox-thumbnails-grid", b.thumbnails).empty(), b.thumbs = !0);
				d = "horizontal" == c.path.toLowerCase() ?
				{
					left: parseInt(d.width / 2 - b.loader.outerWidth() / 2)
				} :
				{
					top: parseInt(d.height / 2 - b.loader.outerHeight() / 2)
				};
				b.loader.addClass(c.skin).css(d);
				b.nextButton.add(b.prevButton).addClass(c.skin);
				"horizontal" == e && b.loader.add(b.nextButton).add(b.prevButton).addClass("horizontal");
				b.BODY[b.isMobile ? "addClass" : "removeClass"]("isMobile");
				c.infinite || (b.prevButton.add(b.prevButton).add(b.innerPrevButton).add(b.innerNextButton).removeClass("disabled"), 0 == b.current && b.prevButton.add(b.innerPrevButton).addClass("disabled"), b.current >= b.total - 1 && b.nextButton.add(b.innerNextButton).addClass("disabled"));
				c.show.effect ? (b.overlay.stop().fadeIn(c.show.speed), b.toolbar.stop().fadeIn(c.show.speed)) : (b.overlay.show(), b.toolbar.show());
				var k = f.length;
				l ? (a.showLoader(), g.each(f, function(d, e)
				{
					a.ogpRecognition(this, function(d)
					{
						var e = -1;
						a.items.filter(function(a, b, c)
						{
							a.URL == d.url && (e = b);
							return a.URL == d.url
						});
						var f = a.items[e];
						d && g.extend(!0, f,
						{
							URL: d.source,
							type: d.type,
							recognized: !0,
							options:
							{
								html5video: d.html5video,
								width: "image" == d.type ? 0 : d.width || f.width,
								height: "image" == d.type ? 0 : d.height || f.height,
								thumbnail: f.options.thumbnail || d.thumbnail
							}
						});
						k--;
						0 == k && (a.hideLoader(), b.dontGenerateThumbs = !1, a.generateThumbnails(), c.show.effect ? setTimeout(function()
						{
							a.generateBoxes()
						}, c.show.speed) : a.generateBoxes())
					})
				})) : c.show.effect ? setTimeout(function()
				{
					a.generateBoxes()
				}, c.show.speed) : a.generateBoxes();
				a.createUI();
				n.iLightBox = {
					close: function()
					{
						a.closeAction()
					},
					fullscreen: function()
					{
						a.fullScreenAction()
					},
					moveNext: function()
					{
						a.moveTo("next")
					},
					movePrev: function()
					{
						a.moveTo("prev")
					},
					goTo: function(b)
					{
						a.goTo(b)
					},
					refresh: function()
					{
						a.refresh()
					},
					reposition: function()
					{
						0 < arguments.length ? a.repositionPhoto(!0) : a.repositionPhoto()
					},
					setOption: function(b)
					{
						a.setOption(b)
					},
					destroy: function()
					{
						a.closeAction();
						a.dispatchItemsEvents()
					}
				};
				c.linkId && (b.hashLock = !0, n.location.hash = c.linkId + "/" + b.current, setTimeout(function()
				{
					b.hashLock = !1
				}, 55));
				c.slideshow.startPaused || (a.resume(), b.innerPlayButton.removeClass("ilightbox-play").addClass("ilightbox-pause"));
				"function" == typeof a.options.callback.onOpen && a.options.callback.onOpen.call(a)
			},
			loadContent: function(a, b, c)
			{
				var d, e;
				this.createUI();
				a.speed = c || this.options.effects.loadedFadeSpeed;
				"current" == b && (this.vars.lockWheel = a.options.mousewheel ? !1 : !0, this.vars.lockSwipe = a.options.swipe ? !1 : !0);
				switch (b)
				{
					case "current":
						d = this.vars.holder;
						e = this.vars.current;
						break;
					case "next":
						d = this.vars.nextPhoto;
						e = this.vars.next;
						break;
					case "prev":
						d = this.vars.prevPhoto, e = this.vars.prev
				}
				d.removeAttr("style class").addClass("ilightbox-holder" + (A ? " supportTouch" : "")).addClass(a.options.skin);
				g("div.ilightbox-inner-toolbar", d).remove();
				if (a.title || this.options.innerToolbar)
				{
					c = this.vars.innerToolbar.clone();
					if (a.title && this.options.show.title)
					{
						var f = this.vars.title.clone();
						f.empty().html(a.title);
						c.append(f)
					}
					this.options.innerToolbar && c.append(1 < this.vars.total ? this.vars.toolbar.clone() : this.vars.toolbar);
					d.prepend(c)
				}
				this.loadSwitcher(a, d, e, b)
			},
			loadSwitcher: function(a, b, c, d)
			{
				var e = this,
					f = e.options,
					l = {
						element: b,
						position: c
					};
				switch (a.type)
				{
					case "image":
						"function" == typeof f.callback.onBeforeLoad && f.callback.onBeforeLoad.call(e, e.ui, c);
						"function" == typeof a.options.onBeforeLoad && a.options.onBeforeLoad.call(e, l);
						e.loadImage(a.URL, function(k)
						{
							"function" == typeof f.callback.onAfterLoad && f.callback.onAfterLoad.call(e, e.ui, c);
							"function" == typeof a.options.onAfterLoad && a.options.onAfterLoad.call(e, l);
							b.data(
							{
								naturalWidth: k ? k.width : 400,
								naturalHeight: k ? k.height : 200
							});
							g("div.ilightbox-container", b).empty().append(k ? '<img src="' + a.URL + '" class="ilightbox-image" />' : '<span class="ilightbox-alert">' + f.errors.loadImage + "</span>");
							"function" == typeof f.callback.onRender && f.callback.onRender.call(e, e.ui, c);
							"function" == typeof a.options.onRender && a.options.onRender.call(e, l);
							e.configureHolder(a, d, b)
						});
						break;
					case "video":
						b.data(
						{
							naturalWidth: a.options.width,
							naturalHeight: a.options.height
						});
						e.addContent(b, a);
						"function" == typeof f.callback.onRender && f.callback.onRender.call(e, e.ui, c);
						"function" == typeof a.options.onRender && a.options.onRender.call(e, l);
						e.configureHolder(a, d, b);
						break;
					case "iframe":
						e.showLoader();
						b.data(
						{
							naturalWidth: a.options.width,
							naturalHeight: a.options.height
						});
						var k = e.addContent(b, a);
						"function" == typeof f.callback.onRender && f.callback.onRender.call(e, e.ui, c);
						"function" == typeof a.options.onRender && a.options.onRender.call(e, l);
						"function" == typeof f.callback.onBeforeLoad && f.callback.onBeforeLoad.call(e, e.ui, c);
						"function" == typeof a.options.onBeforeLoad && a.options.onBeforeLoad.call(e, l);
						k.bind("load", function()
						{
							"function" == typeof f.callback.onAfterLoad && f.callback.onAfterLoad.call(e, e.ui, c);
							"function" == typeof a.options.onAfterLoad && a.options.onAfterLoad.call(e, l);
							e.hideLoader();
							e.configureHolder(a, d, b);
							k.unbind("load")
						});
						break;
					case "inline":
						var k = g(a.URL),
							h = e.addContent(b, a),
							m = S(b);
						b.data(
						{
							naturalWidth: e.items[c].options.width || k.outerWidth(),
							naturalHeight: e.items[c].options.height || k.outerHeight()
						});
						h.children().eq(0).show();
						"function" == typeof f.callback.onRender && f.callback.onRender.call(e, e.ui, c);
						"function" == typeof a.options.onRender && a.options.onRender.call(e, l);
						"function" == typeof f.callback.onBeforeLoad && f.callback.onBeforeLoad.call(e, e.ui, c);
						"function" == typeof a.options.onBeforeLoad && a.options.onBeforeLoad.call(e, l);
						e.loadImage(m, function()
						{
							"function" == typeof f.callback.onAfterLoad && f.callback.onAfterLoad.call(e, e.ui, c);
							"function" == typeof a.options.onAfterLoad && a.options.onAfterLoad.call(e, l);
							e.configureHolder(a, d, b)
						});
						break;
					case "flash":
						k = e.addContent(b, a);
						b.data(
						{
							naturalWidth: e.items[c].options.width || k.outerWidth(),
							naturalHeight: e.items[c].options.height || k.outerHeight()
						});
						"function" == typeof f.callback.onRender && f.callback.onRender.call(e, e.ui, c);
						"function" == typeof a.options.onRender && a.options.onRender.call(e, l);
						e.configureHolder(a, d, b);
						break;
					case "ajax":
						var p = a.options.ajax ||
						{};
						"function" == typeof f.callback.onBeforeLoad && f.callback.onBeforeLoad.call(e, e.ui, c);
						"function" == typeof a.options.onBeforeLoad && a.options.onBeforeLoad.call(e, l);
						e.showLoader();
						g.ajax(
						{
							url: a.URL || f.ajaxSetup.url,
							data: p.data || null,
							dataType: p.dataType || "html",
							type: p.type || f.ajaxSetup.type,
							cache: p.cache || f.ajaxSetup.cache,
							crossDomain: p.crossDomain || f.ajaxSetup.crossDomain,
							global: p.global || f.ajaxSetup.global,
							ifModified: p.ifModified || f.ajaxSetup.ifModified,
							username: p.username || f.ajaxSetup.username,
							password: p.password || f.ajaxSetup.password,
							beforeSend: p.beforeSend || f.ajaxSetup.beforeSend,
							complete: p.complete || f.ajaxSetup.complete,
							success: function(k, h, m)
							{
								e.hideLoader();
								var x = g(k),
									t = g("div.ilightbox-container", b),
									n = e.items[c].options.width || parseInt(x[0].getAttribute("width")),
									v = e.items[c].options.height || parseInt(x[0].getAttribute("height")),
									na = x[0].getAttribute("width") && x[0].getAttribute("height") ?
									{
										overflow: "hidden"
									} :
									{};
								t.empty().append(g('<div class="ilightbox-wrapper"></div>').css(na).html(x));
								b.show().data(
								{
									naturalWidth: n || t.outerWidth(),
									naturalHeight: v || t.outerHeight()
								}).hide();
								"function" == typeof f.callback.onRender && f.callback.onRender.call(e, e.ui, c);
								"function" == typeof a.options.onRender && a.options.onRender.call(e, l);
								x = S(b);
								e.loadImage(x, function()
								{
									"function" == typeof f.callback.onAfterLoad && f.callback.onAfterLoad.call(e, e.ui, c);
									"function" == typeof a.options.onAfterLoad && a.options.onAfterLoad.call(e, l);
									e.configureHolder(a, d, b)
								});
								f.ajaxSetup.success(k, h, m);
								"function" == typeof p.success && p.success(k, h, m)
							},
							error: function(k, h, m)
							{
								"function" == typeof f.callback.onAfterLoad && f.callback.onAfterLoad.call(e, e.ui, c);
								"function" == typeof a.options.onAfterLoad && a.options.onAfterLoad.call(e, l);
								e.hideLoader();
								g("div.ilightbox-container", b).empty().append('<span class="ilightbox-alert">' + f.errors.loadContents + "</span>");
								e.configureHolder(a, d, b);
								f.ajaxSetup.error(k, h, m);
								"function" == typeof p.error && p.error(k, h, m)
							}
						});
						break;
					case "html":
						h = a.URL;
						container = g("div.ilightbox-container", b);
						h[0].nodeName ? k = h.clone() : (h = g(h), k = h.selector ? g("<div>" + h + "</div>") : h);
						var x = e.items[c].options.width || parseInt(k.attr("width")),
							t = e.items[c].options.height || parseInt(k.attr("height"));
						e.addContent(b, a);
						k.appendTo(document.documentElement).hide();
						"function" == typeof f.callback.onRender && f.callback.onRender.call(e, e.ui, c);
						"function" == typeof a.options.onRender && a.options.onRender.call(e, l);
						m = S(b);
						"function" == typeof f.callback.onBeforeLoad && f.callback.onBeforeLoad.call(e, e.ui, c);
						"function" == typeof a.options.onBeforeLoad && a.options.onBeforeLoad.call(e, l);
						e.loadImage(m, function()
						{
							"function" == typeof f.callback.onAfterLoad && f.callback.onAfterLoad.call(e, e.ui, c);
							"function" == typeof a.options.onAfterLoad && a.options.onAfterLoad.call(e, l);
							b.show().data(
							{
								naturalWidth: x || container.outerWidth(),
								naturalHeight: t || container.outerHeight()
							}).hide();
							k.remove();
							e.configureHolder(a, d, b)
						})
				}
			},
			configureHolder: function(a, b, c)
			{
				var d = this,
					e = d.vars,
					f = d.options;
				"current" != b && ("next" == b ? c.addClass("ilightbox-next") : c.addClass("ilightbox-prev"));
				if ("current" == b) var l = e.current;
				else if ("next" == b) var k = f.styles.nextOpacity,
					l = e.next;
				else k = f.styles.prevOpacity, l = e.prev;
				var h = {
					element: c,
					position: l
				};
				d.items[l].options.width = d.items[l].options.width || 0;
				d.items[l].options.height = d.items[l].options.height || 0;
				"current" == b ? f.show.effect ? c.css(C, H).fadeIn(a.speed, function()
				{
					c.css(C, "");
					if (a.caption)
					{
						d.setCaption(a, c);
						var b = g("div.ilightbox-caption", c),
							e = parseInt(b.outerHeight() / c.outerHeight() * 100);
						f.caption.start & 50 >= e && b.fadeIn(f.effects.fadeSpeed)
					}
					if (b = a.options.social) d.setSocial(b, a.URL, c), f.social.start && g("div.ilightbox-social", c).fadeIn(f.effects.fadeSpeed);
					d.generateThumbnails();
					"function" == typeof f.callback.onShow && f.callback.onShow.call(d, d.ui, l);
					"function" == typeof a.options.onShow && a.options.onShow.call(d, h)
				}) : (c.show(), d.generateThumbnails(), "function" == typeof f.callback.onShow && f.callback.onShow.call(d, d.ui, l), "function" == typeof a.options.onShow && a.options.onShow.call(d, h)) : f.show.effect ? c.fadeTo(a.speed, k, function()
				{
					"next" == b ? e.nextLock = !1 : e.prevLock = !1;
					d.generateThumbnails();
					"function" == typeof f.callback.onShow && f.callback.onShow.call(d, d.ui, l);
					"function" == typeof a.options.onShow && a.options.onShow.call(d, h)
				}) : (c.css(
				{
					opacity: k
				}).show(), "next" == b ? e.nextLock = !1 : e.prevLock = !1, d.generateThumbnails(), "function" == typeof f.callback.onShow && f.callback.onShow.call(d, d.ui, l), "function" == typeof a.options.onShow && a.options.onShow.call(d, h));
				setTimeout(function()
				{
					d.repositionPhoto()
				}, 0)
			},
			generateBoxes: function()
			{
				var a = this.vars,
					b = this.options;
				b.infinite && 3 <= a.total ? (a.current == a.total - 1 && (a.next = 0), 0 == a.current && (a.prev = a.total - 1)) : b.infinite = !1;
				this.loadContent(this.items[a.current], "current", b.show.speed);
				this.items[a.next] && this.loadContent(this.items[a.next], "next", b.show.speed);
				this.items[a.prev] && this.loadContent(this.items[a.prev], "prev", b.show.speed)
			},
			generateThumbnails: function()
			{
				var a = this,
					b = a.vars,
					c = a.options,
					d = null;
				if (b.thumbs && !a.vars.dontGenerateThumbs)
				{
					var e = b.thumbnails,
						f = g("div.ilightbox-thumbnails-container", e),
						l = g("div.ilightbox-thumbnails-grid", f),
						k = 0;
					l.removeAttr("style").empty();
					g.each(a.items, function(h, m)
					{
						var p = b.current == h ? "ilightbox-active" : "",
							x = b.current == h ? c.thumbnails.activeOpacity : c.thumbnails.normalOpacity,
							t = m.options.thumbnail,
							r = g('<div class="ilightbox-thumbnail"></div>'),
							s = g('<div class="ilightbox-thumbnail-icon"></div>');
						r.css(
						{
							opacity: 0
						}).addClass(p);
						"video" != m.type && "flash" != m.type || "undefined" != typeof m.options.icon ? m.options.icon && (s.addClass("ilightbox-thumbnail-" + m.options.icon), r.append(s)) : (s.addClass("ilightbox-thumbnail-video"), r.append(s));
						t && a.loadImage(t, function(b)
						{
							k++;
							b ? r.data(
							{
								naturalWidth: b.width,
								naturalHeight: b.height
							}).append('<img src="' + t + '" border="0" />') : r.data(
							{
								naturalWidth: c.thumbnails.maxWidth,
								naturalHeight: c.thumbnails.maxHeight
							});
							clearTimeout(d);
							d = setTimeout(function()
							{
								a.positionThumbnails(e, f, l)
							}, 20);
							setTimeout(function()
							{
								r.fadeTo(c.effects.loadedFadeSpeed, x)
							}, 20 * k)
						});
						l.append(r)
					});
					a.vars.dontGenerateThumbs = !0
				}
			},
			positionThumbnails: function(a, b, c)
			{
				var d = this,
					e = d.vars,
					f = d.options,
					l = J(),
					k = f.path.toLowerCase();
				a || (a = e.thumbnails);
				b || (b = g("div.ilightbox-thumbnails-container", a));
				c || (c = g("div.ilightbox-thumbnails-grid", b));
				var h = g(".ilightbox-thumbnail", c),
					e = "horizontal" == k ? l.width - f.styles.pageOffsetX : h.eq(0).outerWidth() - f.styles.pageOffsetX,
					l = "horizontal" == k ? h.eq(0).outerHeight() - f.styles.pageOffsetY : l.height - f.styles.pageOffsetY,
					m = "horizontal" == k ? 0 : e,
					p = "horizontal" == k ? l : 0,
					x = g(".ilightbox-active", c),
					t = {};
				3 > arguments.length && (h.css(
				{
					opacity: f.thumbnails.normalOpacity
				}), x.css(
				{
					opacity: f.thumbnails.activeOpacity
				}));
				h.each(function(a)
				{
					a = g(this);
					var b = a.data(),
						c = "horizontal" == k ? 0 : f.thumbnails.maxWidth;
					height = "horizontal" == k ? f.thumbnails.maxHeight : 0;
					dims = d.getNewDimenstions(c, height, b.naturalWidth, b.naturalHeight, !0);
					a.css(
					{
						width: dims.width,
						height: dims.height
					});
					"horizontal" == k && a.css(
					{
						"float": "left"
					});
					"horizontal" == k ? m += a.outerWidth() : p += a.outerHeight()
				});
				t = {
					width: m,
					height: p
				};
				c.css(t);
				var t = {},
					h = c.offset(),
					r = x.length ? x.offset() :
					{
						top: parseInt(l / 2),
						left: parseInt(e / 2)
					};
				h.top -= E.scrollTop();
				h.left -= E.scrollLeft();
				r.top = r.top - h.top - E.scrollTop();
				r.left = r.left - h.left - E.scrollLeft();
				"horizontal" == k ? (t.top = 0, t.left = parseInt(e / 2 - r.left - x.outerWidth() / 2)) : (t.top = parseInt(l / 2 - r.top - x.outerHeight() / 2), t.left = 0);
				3 > arguments.length ? c.stop().animate(t, f.effects.repositionSpeed, "easeOutCirc") : c.css(t)
			},
			loadImage: function(a, b)
			{
				g.isArray(a) || (a = [a]);
				var c = this,
					d = a.length;
				0 < d ? (c.showLoader(), g.each(a, function(e, f)
				{
					var l = new Image;
					l.onload = function()
					{
						d -= 1;
						0 == d && (c.hideLoader(), b(l))
					};
					l.onerror = l.onabort = function()
					{
						d -= 1;
						0 == d && (c.hideLoader(), b(!1))
					};
					l.src = a[e]
				})) : b(!1)
			},
			patchItemsEvents: function()
			{
				var a = this,
					b = a.vars,
					c = A ? "itap.iL" : "click.iL",
					d = A ? "click.iL" : "itap.iL";
				if (a.context && a.selector)
				{
					var e = g(a.selector, a.context);
					g(a.context).on(c, a.selector, function()
					{
						var c = g(this),
							c = e.index(c);
						b.current = c;
						b.next = a.items[c + 1] ? c + 1 : null;
						b.prev = a.items[c - 1] ? c - 1 : null;
						a.addContents();
						a.patchEvents();
						return !1
					}).on(d, a.selector, function()
					{
						return !1
					})
				}
				else g.each(a.itemsObject, function(e, l)
				{
					l.on(c, function()
					{
						b.current = e;
						b.next = a.items[e + 1] ? e + 1 : null;
						b.prev = a.items[e - 1] ? e - 1 : null;
						a.addContents();
						a.patchEvents();
						return !1
					}).on(d, function()
					{
						return !1
					})
				})
			},
			dispatchItemsEvents: function()
			{
				this.context && this.selector ? g(this.context).off(".iL", this.selector) : g.each(this.itemsObject, function(a, b)
				{
					b.off(".iL")
				})
			},
			refresh: function()
			{
				this.dispatchItemsEvents();
				this.attachItems();
				this.normalizeItems();
				this.patchItemsEvents()
			},
			patchEvents: function()
			{
				function a(a)
				{
					c.isMobile || (c.mouseID || c.hideableElements.show(), c.mouseID = clearTimeout(c.mouseID), -1 === h.indexOf(a.target) && (c.mouseID = setTimeout(function()
					{
						c.hideableElements.hide();
						c.mouseID = clearTimeout(c.mouseID)
					}, 3E3)))
				}
				var b = this,
					c = b.vars,
					d = b.options,
					e = d.path.toLowerCase(),
					f = g(".ilightbox-holder"),
					l = z.fullScreenEventName + ".iLightBox",
					k = verticalDistanceThreshold = 100,
					h = [c.nextButton[0], c.prevButton[0], c.nextButton[0].firstChild, c.prevButton[0].firstChild];
				O.bind("resize.iLightBox", function()
				{
					var a = J();
					d.mobileOptimizer && !d.innerToolbar && (c.isMobile = a.width <= c.mobileMaxWidth);
					c.BODY[c.isMobile ? "addClass" : "removeClass"]("isMobile");
					b.repositionPhoto(null);
					A && (clearTimeout(c.setTime), c.setTime = setTimeout(function()
					{
						var a = L().y;
						n.scrollTo(0, a - 30);
						n.scrollTo(0, a + 30);
						n.scrollTo(0, a)
					}, 2E3));
					c.thumbs && b.positionThumbnails()
				}).bind("keydown.iLightBox", function(a)
				{
					if (d.controls.keyboard) switch (a.keyCode)
					{
						case 13:
							a.shiftKey && d.keyboard.shift_enter && b.fullScreenAction();
							break;
						case 27:
							d.keyboard.esc && b.closeAction();
							break;
						case 37:
							d.keyboard.left && !c.lockKey && b.moveTo("prev");
							break;
						case 38:
							d.keyboard.up && !c.lockKey && b.moveTo("prev");
							break;
						case 39:
							d.keyboard.right && !c.lockKey && b.moveTo("next");
							break;
						case 40:
							d.keyboard.down && !c.lockKey && b.moveTo("next")
					}
				});
				z.supportsFullScreen && O.bind(l, function()
				{
					b.doFullscreen()
				});
				var l = [d.caption.show + ".iLightBox", d.caption.hide + ".iLightBox", d.social.show + ".iLightBox", d.social.hide + ".iLightBox"].filter(function(a, b, c)
					{
						return c.lastIndexOf(a) === b
					}),
					m = "";
				g.each(l, function(a, b)
				{
					0 != a && (m += " ");
					m += b
				});
				E.on(K, ".ilightbox-overlay", function()
				{
					d.overlay.blur && b.closeAction()
				}).on(K, ".ilightbox-next, .ilightbox-next-button", function()
				{
					b.moveTo("next")
				}).on(K, ".ilightbox-prev, .ilightbox-prev-button", function()
				{
					b.moveTo("prev")
				}).on(K, ".ilightbox-thumbnail", function()
				{
					var a = g(this),
						a = g(".ilightbox-thumbnail", c.thumbnails).index(a);
					a != c.current && b.goTo(a)
				}).on(m, ".ilightbox-holder:not(.ilightbox-next, .ilightbox-prev)", function(a)
				{
					var b = g("div.ilightbox-caption", c.holder),
						e = g("div.ilightbox-social", c.holder),
						f = d.effects.fadeSpeed;
					c.nextLock || c.prevLock ? (a.type != d.caption.show || b.is(":visible") ? a.type == d.caption.hide && b.is(":visible") && b.fadeOut(f) : b.fadeIn(f), a.type != d.social.show || e.is(":visible") ? a.type == d.social.hide && e.is(":visible") && e.fadeOut(f) : e.fadeIn(f)) : (a.type != d.caption.show || b.is(":visible") ? a.type == d.caption.hide && b.is(":visible") && b.stop().fadeOut(f) : b.stop().fadeIn(f), a.type != d.social.show || e.is(":visible") ? a.type == d.social.hide && e.is(":visible") && e.stop().fadeOut(f) : e.stop().fadeIn(f))
				}).on("mouseenter.iLightBox mouseleave.iLightBox", ".ilightbox-wrapper", function(a)
				{
					c.lockWheel = "mouseenter" == a.type ? !0 : !1
				}).on(K, ".ilightbox-toolbar a.ilightbox-close, .ilightbox-toolbar a.ilightbox-fullscreen, .ilightbox-toolbar a.ilightbox-play, .ilightbox-toolbar a.ilightbox-pause", function()
				{
					var a = g(this);
					a.hasClass("ilightbox-fullscreen") ? b.fullScreenAction() : a.hasClass("ilightbox-play") ? (b.resume(), a.addClass("ilightbox-pause").removeClass("ilightbox-play")) : a.hasClass("ilightbox-pause") ? (b.pause(), a.addClass("ilightbox-play").removeClass("ilightbox-pause")) : b.closeAction()
				}).on(W, ".ilightbox-overlay, .ilightbox-thumbnails-container", function(a)
				{
					a.preventDefault()
				});
				if (d.controls.arrows && !A) E.on("mousemove.iLightBox", a);
				if (d.controls.slideshow && d.slideshow.pauseOnHover) E.on("mouseenter.iLightBox mouseleave.iLightBox", ".ilightbox-holder:not(.ilightbox-next, .ilightbox-prev)", function(a)
				{
					"mouseenter" == a.type && c.cycleID ? b.pause() : "mouseleave" == a.type && c.isPaused && b.resume()
				});
				l = g(".ilightbox-overlay, .ilightbox-holder, .ilightbox-thumbnails");
				if (d.controls.mousewheel) l.on("mousewheel.iLightBox", function(a, d)
				{
					c.lockWheel || (a.preventDefault(), 0 > d ? b.moveTo("next") : 0 < d && b.moveTo("prev"))
				});
				if (d.controls.swipe) f.on(la, function(a)
				{
					function l(a)
					{
						var b = g(this);
						a = q[a];
						var c = [w.coords[0] - v.coords[0], w.coords[1] - v.coords[1]];
						b[0].style["horizontal" == e ? "left" : "top"] = ("horizontal" == e ? a.left - c[0] : a.top - c[1]) + "px"
					}

					function h(a)
					{
						if (w)
						{
							var b = a.originalEvent.touches ? a.originalEvent.touches[0] : a;
							v = {
								time: (new Date).getTime(),
								coords: [b.pageX - n, b.pageY - s]
							};
							f.each(l);
							a.preventDefault()
						}
					}

					function m()
					{
						f.each(function()
						{
							var a = g(this),
								b = a.data("offset") ||
								{
									top: a.offset().top - s,
									left: a.offset().left - n
								},
								c = b.top,
								b = b.left;
							a.css(C, H).stop().animate(
							{
								top: c,
								left: b
							}, 500, "easeOutCirc", function()
							{
								a.css(C, "")
							})
						})
					}
					if (!(c.nextLock || c.prevLock || 1 == c.total || c.lockSwipe))
					{
						c.BODY.addClass("ilightbox-closedhand");
						a = a.originalEvent.touches ? a.originalEvent.touches[0] : a;
						var s = E.scrollTop(),
							n = E.scrollLeft(),
							y = [f.eq(0).offset(), f.eq(1).offset(), f.eq(2).offset()],
							q = [
							{
								top: y[0].top - s,
								left: y[0].left - n
							},
							{
								top: y[1].top - s,
								left: y[1].left - n
							},
							{
								top: y[2].top - s,
								left: y[2].left - n
							}],
							w = {
								time: (new Date).getTime(),
								coords: [a.pageX - n, a.pageY - s]
							},
							v;
						f.bind(W, h);
						E.one(ma, function(a)
						{
							f.unbind(W, h);
							c.BODY.removeClass("ilightbox-closedhand");
							w && v && ("horizontal" == e && 1E3 > v.time - w.time && I(w.coords[0] - v.coords[0]) > k && I(w.coords[1] - v.coords[1]) < verticalDistanceThreshold ? w.coords[0] > v.coords[0] ? c.current != c.total - 1 || d.infinite ? (c.isSwipe = !0, b.moveTo("next")) : m() : 0 != c.current || d.infinite ? (c.isSwipe = !0, b.moveTo("prev")) : m() : "vertical" == e && 1E3 > v.time - w.time && I(w.coords[1] - v.coords[1]) > k && I(w.coords[0] - v.coords[0]) < verticalDistanceThreshold ? w.coords[1] > v.coords[1] ? c.current != c.total - 1 || d.infinite ? (c.isSwipe = !0, b.moveTo("next")) : m() : 0 != c.current || d.infinite ? (c.isSwipe = !0, b.moveTo("prev")) : m() : m());
							w = v = R
						})
					}
				})
			},
			goTo: function(a)
			{
				var b = this,
					c = b.vars,
					d = b.options,
					e = a - c.current;
				d.infinite && (a == c.total - 1 && 0 == c.current && (e = -1), c.current == c.total - 1 && 0 == a && (e = 1));
				if (1 == e) b.moveTo("next");
				else if (-1 == e) b.moveTo("prev");
				else
				{
					if (c.nextLock || c.prevLock) return !1;
					"function" == typeof d.callback.onBeforeChange && d.callback.onBeforeChange.call(b, b.ui);
					d.linkId && (c.hashLock = !0, n.location.hash = d.linkId + "/" + a);
					b.items[a] && (b.items[a].options.mousewheel ? b.vars.lockWheel = !1 : c.lockWheel = !0, c.lockSwipe = b.items[a].options.swipe ? !1 : !0);
					g.each([c.holder, c.nextPhoto, c.prevPhoto], function(a, b)
					{
						b.css(C, H).fadeOut(d.effects.loadedFadeSpeed)
					});
					c.current = a;
					c.next = a + 1;
					c.prev = a - 1;
					b.createUI();
					setTimeout(function()
					{
						b.generateBoxes()
					}, d.effects.loadedFadeSpeed + 50);
					g(".ilightbox-thumbnail", c.thumbnails).removeClass("ilightbox-active").eq(a).addClass("ilightbox-active");
					b.positionThumbnails();
					d.linkId && setTimeout(function()
					{
						c.hashLock = !1
					}, 55);
					d.infinite || (c.nextButton.add(c.prevButton).add(c.innerPrevButton).add(c.innerNextButton).removeClass("disabled"), 0 == c.current && c.prevButton.add(c.innerPrevButton).addClass("disabled"), c.current >= c.total - 1 && c.nextButton.add(c.innerNextButton).addClass("disabled"));
					b.resetCycle();
					"function" == typeof d.callback.onAfterChange && d.callback.onAfterChange.call(b, b.ui)
				}
			},
			moveTo: function(a)
			{
				var b = this,
					c = b.vars,
					d = b.options,
					e = d.path.toLowerCase(),
					f = J(),
					l = d.effects.switchSpeed;
				if (c.nextLock || c.prevLock) return !1;
				var k = "next" == a ? c.next : c.prev;
				d.linkId && (c.hashLock = !0, n.location.hash = d.linkId + "/" + k);
				if ("next" == a)
				{
					if (!b.items[k]) return !1;
					var h = c.nextPhoto,
						m = c.holder,
						p = c.prevPhoto,
						x = "ilightbox-prev",
						t = "ilightbox-next"
				}
				else if ("prev" == a)
				{
					if (!b.items[k]) return !1;
					h = c.prevPhoto;
					m = c.holder;
					p = c.nextPhoto;
					x = "ilightbox-next";
					t = "ilightbox-prev"
				}
				"function" == typeof d.callback.onBeforeChange && d.callback.onBeforeChange.call(b, b.ui);
				"next" == a ? c.nextLock = !0 : c.prevLock = !0;
				var r = g("div.ilightbox-caption", m),
					s = g("div.ilightbox-social", m);
				r.length && r.stop().fadeOut(l, function()
				{
					g(this).remove()
				});
				s.length && s.stop().fadeOut(l, function()
				{
					g(this).remove()
				});
				b.items[k].caption && (b.setCaption(b.items[k], h), r = g("div.ilightbox-caption", h), s = parseInt(r.outerHeight() / h.outerHeight() * 100), d.caption.start && 50 >= s && r.fadeIn(l));
				if (r = b.items[k].options.social) b.setSocial(r, b.items[k].URL, h), d.social.start && g("div.ilightbox-social", h).fadeIn(d.effects.fadeSpeed);
				g.each([h, m, p], function(a, b)
				{
					b.removeClass("ilightbox-next ilightbox-prev")
				});
				var u = h.data("offset"),
					r = f.width - d.styles.pageOffsetX,
					f = f.height - d.styles.pageOffsetY,
					s = u.newDims.width,
					y = u.newDims.height,
					q = u.thumbsOffset,
					u = u.diff,
					w = parseInt(f / 2 - y / 2 - u.H - q.H / 2),
					u = parseInt(r / 2 - s / 2 - u.W - q.W / 2);
				h.css(C, H).animate(
				{
					top: w,
					left: u,
					opacity: 1
				}, l, c.isSwipe ? "easeOutCirc" : "easeInOutCirc", function()
				{
					h.css(C, "")
				});
				g("div.ilightbox-container", h).animate(
				{
					width: s,
					height: y
				}, l, c.isSwipe ? "easeOutCirc" : "easeInOutCirc");
				var y = m.data("offset"),
					v = y.object,
					u = y.diff,
					s = y.newDims.width,
					y = y.newDims.height,
					s = parseInt(s * d.styles["next" == a ? "prevScale" : "nextScale"]),
					y = parseInt(y * d.styles["next" == a ? "prevScale" : "nextScale"]),
					w = "horizontal" == e ? parseInt(f / 2 - v.offsetY - y / 2 - u.H - q.H / 2) : parseInt(f - v.offsetX - u.H - q.H / 2);
				"prev" == a ? u = "horizontal" == e ? parseInt(r - v.offsetX - u.W - q.W / 2) : parseInt(r / 2 - s / 2 - u.W - v.offsetY - q.W / 2) : (w = "horizontal" == e ? w : parseInt(v.offsetX - u.H - y - q.H / 2), u = "horizontal" == e ? parseInt(v.offsetX - u.W - s - q.W / 2) : parseInt(r / 2 - v.offsetY - s / 2 - u.W - q.W / 2));
				g("div.ilightbox-container", m).animate(
				{
					width: s,
					height: y
				}, l, c.isSwipe ? "easeOutCirc" : "easeInOutCirc");
				m.addClass(x).css(C, H).animate(
				{
					top: w,
					left: u,
					opacity: d.styles.prevOpacity
				}, l, c.isSwipe ? "easeOutCirc" : "easeInOutCirc", function()
				{
					m.css(C, "");
					g(".ilightbox-thumbnail", c.thumbnails).removeClass("ilightbox-active").eq(k).addClass("ilightbox-active");
					b.positionThumbnails();
					b.items[k] && (c.lockWheel = b.items[k].options.mousewheel ? !1 : !0, c.lockSwipe = b.items[k].options.swipe ? !1 : !0);
					c.isSwipe = !1;
					"next" == a ? (c.nextPhoto = p, c.prevPhoto = m, c.holder = h, c.nextPhoto.hide(), c.next += 1, c.prev = c.current, c.current += 1, d.infinite && (c.current > c.total - 1 && (c.current = 0), c.current == c.total - 1 && (c.next = 0), 0 == c.current && (c.prev = c.total - 1)), b.createUI(), b.items[c.next] ? b.loadContent(b.items[c.next], "next") : c.nextLock = !1) : (c.prevPhoto = p, c.nextPhoto = m, c.holder = h, c.prevPhoto.hide(), c.next = c.current, c.current = c.prev, c.prev = c.current - 1, d.infinite && (c.current == c.total - 1 && (c.next = 0), 0 == c.current && (c.prev = c.total - 1)), b.createUI(), b.items[c.prev] ? b.loadContent(b.items[c.prev], "prev") : c.prevLock = !1);
					d.linkId && setTimeout(function()
					{
						c.hashLock = !1
					}, 55);
					d.infinite || (c.nextButton.add(c.prevButton).add(c.innerPrevButton).add(c.innerNextButton).removeClass("disabled"), 0 == c.current && c.prevButton.add(c.innerPrevButton).addClass("disabled"), c.current >= c.total - 1 && c.nextButton.add(c.innerNextButton).addClass("disabled"));
					b.repositionPhoto();
					b.resetCycle();
					"function" == typeof d.callback.onAfterChange && d.callback.onAfterChange.call(b, b.ui)
				});
				w = "horizontal" == e ? F(p, "top") : "next" == a ? parseInt(-(f / 2) - p.outerHeight()) : parseInt(2 * w);
				u = "horizontal" == e ? "next" == a ? parseInt(-(r / 2) - p.outerWidth()) : parseInt(2 * u) : F(p, "left");
				p.css(C, H).animate(
				{
					top: w,
					left: u,
					opacity: d.styles.nextOpacity
				}, l, c.isSwipe ? "easeOutCirc" : "easeInOutCirc", function()
				{
					p.css(C, "")
				}).addClass(t)
			},
			setCaption: function(a, b)
			{
				var c = g('<div class="ilightbox-caption"></div>');
				a.caption && (c.html(a.caption), g("div.ilightbox-container", b).append(c))
			},
			normalizeSocial: function(a, b)
			{
				var c = this.options,
					d = n.location.href;
				g.each(a, function(e, f)
				{
					if (!f) return !0;
					var l, g;
					switch (e.toLowerCase())
					{
						case "facebook":
							l = "http://www.facebook.com/share.php?v=4&src=bm&u={URL}";
							g = "Share on Facebook";
							break;
						case "twitter":
							l = "http://twitter.com/home?status={URL}";
							g = "Share on Twitter";
							break;
						case "googleplus":
							l = "https://plus.google.com/share?url={URL}";
							g = "Share on Google+";
							break;
						case "delicious":
							l = "http://delicious.com/post?url={URL}";
							g = "Share on Delicious";
							break;
						case "digg":
							l = "http://digg.com/submit?phase=2&url={URL}";
							g = "Share on Digg";
							break;
						case "reddit":
							l = "http://reddit.com/submit?url={URL}", g = "Share on reddit"
					}
					a[e] = {
						URL: f.URL && N(d, f.URL) || c.linkId && n.location.href || "string" !== typeof b && d || b && N(d, b) || d,
						source: f.source || l || f.URL && N(d, f.URL) || b && N(d, b),
						text: f.text || g || "Share on " + e,
						width: "undefined" == typeof f.width || isNaN(f.width) ? 640 : parseInt(f.width),
						height: f.height || 360
					}
				});
				return a
			},
			setSocial: function(a, b, c)
			{
				var d = g('<div class="ilightbox-social"></div>'),
					e = "<ul>";
				a = this.normalizeSocial(a, b);
				g.each(a, function(a, b)
				{
					a.toLowerCase();
					var c = b.source.replace(/\{URL\}/g, encodeURIComponent(b.URL).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/%20/g, "+"));
					e += '<li class="' + a + '"><a href="' + c + '" onclick="javascript:window.open(this.href' + (0 >= b.width || 0 >= b.height ? "" : ", '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=" + b.height + ",width=" + b.width + ",left=40,top=40'") + ');return false;" title="' + b.text + '" target="_blank"></a></li>'
				});
				e += "</ul>";
				d.html(e);
				g("div.ilightbox-container", c).append(d)
			},
			fullScreenAction: function()
			{
				z.supportsFullScreen ? z.isFullScreen() ? z.cancelFullScreen(document.documentElement) : z.requestFullScreen(document.documentElement) : this.doFullscreen()
			},
			doFullscreen: function()
			{
				var a = this.vars,
					b = J(),
					c = this.options;
				if (c.fullAlone)
				{
					var d = a.holder,
						e = this.items[a.current],
						f = b.width,
						l = b.height,
						k = [d, a.nextPhoto, a.prevPhoto, a.nextButton, a.prevButton, a.overlay, a.toolbar, a.thumbnails, a.loader],
						b = [a.nextPhoto, a.prevPhoto, a.nextButton, a.prevButton, a.loader, a.thumbnails];
					if (a.isInFullScreen) a.isInFullScreen = a.lockKey = a.lockWheel = a.lockSwipe = !1, a.overlay.css(
					{
						opacity: this.options.overlay.opacity
					}), g.each(b, function(a, b)
					{
						b.show()
					}), a.fullScreenButton.attr("title", c.text.enterFullscreen), d.data(
					{
						naturalWidth: d.data("naturalWidthOld"),
						naturalHeight: d.data("naturalHeightOld"),
						naturalWidthOld: null,
						naturalHeightOld: null
					}), g.each(k, function(a, b)
					{
						b.removeClass("ilightbox-fullscreen")
					}), "function" == typeof c.callback.onExitFullScreen && c.callback.onExitFullScreen.call(this, this.ui);
					else
					{
						a.isInFullScreen = a.lockKey = a.lockWheel = a.lockSwipe = !0;
						a.overlay.css(
						{
							opacity: 1
						});
						g.each(b, function(a, b)
						{
							b.hide()
						});
						a.fullScreenButton.attr("title", c.text.exitFullscreen);
						if (-1 != c.fullStretchTypes.indexOf(e.type)) d.data(
						{
							naturalWidthOld: d.data("naturalWidth"),
							naturalHeightOld: d.data("naturalHeight"),
							naturalWidth: f,
							naturalHeight: l
						});
						else
						{
							var b = e.options.fullViewPort || c.fullViewPort || "",
								a = f,
								e = l,
								f = d.data("naturalWidth"),
								h = d.data("naturalHeight");
							"fill" == b.toLowerCase() ? (e = a / f * h, e < l && (a = l / h * f, e = l)) : "fit" == b.toLowerCase() ? (l = this.getNewDimenstions(a, e, f, h, !0), a = l.width, e = l.height) : "stretch" != b.toLowerCase() && (l = this.getNewDimenstions(a, e, f, h, f > a || h > e ? !0 : !1), a = l.width, e = l.height);
							d.data(
							{
								naturalWidthOld: d.data("naturalWidth"),
								naturalHeightOld: d.data("naturalHeight"),
								naturalWidth: a,
								naturalHeight: e
							})
						}
						g.each(k, function(a, b)
						{
							b.addClass("ilightbox-fullscreen")
						});
						"function" == typeof c.callback.onEnterFullScreen && c.callback.onEnterFullScreen.call(this, this.ui)
					}
				}
				else a.isInFullScreen = a.isInFullScreen ? !1 : !0;
				this.repositionPhoto(!0)
			},
			closeAction: function()
			{
				var a = this.vars,
					b = this.options;
				O.unbind(".iLightBox");
				E.off(".iLightBox");
				a.isInFullScreen && z.cancelFullScreen(document.documentElement);
				g(".ilightbox-overlay, .ilightbox-holder, .ilightbox-thumbnails").off(".iLightBox");
				b.hide.effect ? a.overlay.stop().fadeOut(b.hide.speed, function()
				{
					a.overlay.remove();
					a.BODY.removeClass("ilightbox-noscroll").off(".iLightBox")
				}) : (a.overlay.remove(), a.BODY.removeClass("ilightbox-noscroll").off(".iLightBox"));
				g.each([a.toolbar, a.holder, a.nextPhoto, a.prevPhoto, a.nextButton, a.prevButton, a.loader, a.thumbnails], function(a, b)
				{
					b.removeAttr("style").remove()
				});
				a.dontGenerateThumbs = a.isInFullScreen = !1;
				n.iLightBox = null;
				b.linkId && (a.hashLock = !0, fa(), setTimeout(function()
				{
					a.hashLock = !1
				}, 55));
				"function" == typeof b.callback.onHide && b.callback.onHide.call(this, this.ui)
			},
			repositionPhoto: function()
			{
				var a = this.vars,
					b = this.options,
					c = b.path.toLowerCase(),
					d = J(),
					e = d.width,
					f = d.height,
					d = a.isInFullScreen && b.fullAlone || a.isMobile ? 0 : "horizontal" == c ? 0 : a.thumbnails.outerWidth(),
					l = a.isMobile ? a.toolbar.outerHeight() : a.isInFullScreen && b.fullAlone ? 0 : "horizontal" == c ? a.thumbnails.outerHeight() : 0,
					e = a.isInFullScreen && b.fullAlone ? e : e - b.styles.pageOffsetX,
					f = a.isInFullScreen && b.fullAlone ? f : f - b.styles.pageOffsetY,
					k = "horizontal" == c ? parseInt(this.items[a.next] || this.items[a.prev] ? 2 * (b.styles.nextOffsetX + b.styles.prevOffsetX) : 30 >= e / 10 ? 30 : e / 10) : parseInt(30 >= e / 10 ? 30 : e / 10) + d,
					h = "horizontal" == c ? parseInt(30 >= f / 10 ? 30 : f / 10) + l : parseInt(this.items[a.next] || this.items[a.prev] ? 2 * (b.styles.nextOffsetX + b.styles.prevOffsetX) : 30 >= f / 10 ? 30 : f / 10),
					d = {
						type: "current",
						width: e,
						height: f,
						item: this.items[a.current],
						offsetW: k,
						offsetH: h,
						thumbsOffsetW: d,
						thumbsOffsetH: l,
						animate: arguments.length,
						holder: a.holder
					};
				this.repositionEl(d);
				this.items[a.next] && (d = g.extend(d,
				{
					type: "next",
					item: this.items[a.next],
					offsetX: b.styles.nextOffsetX,
					offsetY: b.styles.nextOffsetY,
					holder: a.nextPhoto
				}), this.repositionEl(d));
				this.items[a.prev] && (d = g.extend(d,
				{
					type: "prev",
					item: this.items[a.prev],
					offsetX: b.styles.prevOffsetX,
					offsetY: b.styles.prevOffsetY,
					holder: a.prevPhoto
				}), this.repositionEl(d));
				b = "horizontal" == c ?
				{
					left: parseInt(e / 2 - a.loader.outerWidth() / 2)
				} :
				{
					top: parseInt(f / 2 - a.loader.outerHeight() / 2)
				};
				a.loader.css(b)
			},
			repositionEl: function(a)
			{
				var b = this.vars,
					c = this.options,
					d = c.path.toLowerCase(),
					e = "current" == a.type ? b.isInFullScreen && c.fullAlone ? a.width : a.width - a.offsetW : a.width - a.offsetW,
					f = "current" == a.type ? b.isInFullScreen && c.fullAlone ? a.height : a.height - a.offsetH : a.height - a.offsetH,
					l = a.item,
					k = a.item.options,
					h = a.holder,
					m = a.offsetX || 0,
					p = a.offsetY || 0,
					n = a.thumbsOffsetW,
					t = a.thumbsOffsetH;
				"current" == a.type ? ("number" == typeof k.width && k.width && (e = b.isInFullScreen && c.fullAlone && (-1 != c.fullStretchTypes.indexOf(l.type) || k.fullViewPort || c.fullViewPort) ? e : k.width > e ? e : k.width), "number" == typeof k.height && k.height && (f = b.isInFullScreen && c.fullAlone && (-1 != c.fullStretchTypes.indexOf(l.type) || k.fullViewPort || c.fullViewPort) ? f : k.height > f ? f : k.height)) : ("number" == typeof k.width && k.width && (e = k.width > e ? e : k.width), "number" == typeof k.height && k.height && (f = k.height > f ? f : k.height));
				f = parseInt(f - g(".ilightbox-inner-toolbar", h).outerHeight());
				b = "string" == typeof k.width && -1 != k.width.indexOf("%") ? aa(parseInt(k.width.replace("%", "")), a.width) : h.data("naturalWidth");
				l = "string" == typeof k.height && -1 != k.height.indexOf("%") ? aa(parseInt(k.height.replace("%", "")), a.height) : h.data("naturalHeight");
				l = "string" == typeof k.width && -1 != k.width.indexOf("%") || "string" == typeof k.height && -1 != k.height.indexOf("%") ?
				{
					width: b,
					height: l
				} : this.getNewDimenstions(e, f, b, l);
				e = g.extend(
				{}, l,
				{});
				"prev" == a.type || "next" == a.type ? (b = parseInt(l.width * ("next" == a.type ? c.styles.nextScale : c.styles.prevScale)), l = parseInt(l.height * ("next" == a.type ? c.styles.nextScale : c.styles.prevScale))) : (b = l.width, l = l.height);
				f = parseInt((F(h, "padding-left") + F(h, "padding-right") + F(h, "border-left-width") + F(h, "border-right-width")) / 2);
				k = parseInt((F(h, "padding-top") + F(h, "padding-bottom") + F(h, "border-top-width") + F(h, "border-bottom-width") + g(".ilightbox-inner-toolbar", h).outerHeight()) / 2);
				switch (a.type)
				{
					case "current":
						var r = parseInt(a.height / 2 - l / 2 - k - t / 2),
							s = parseInt(a.width / 2 - b / 2 - f - n / 2);
						break;
					case "next":
						r = "horizontal" == d ? parseInt(a.height / 2 - p - l / 2 - k - t / 2) : parseInt(a.height - m - k - t / 2);
						s = "horizontal" == d ? parseInt(a.width - m - f - n / 2) : parseInt(a.width / 2 - b / 2 - f - p - n / 2);
						break;
					case "prev":
						r = "horizontal" == d ? parseInt(a.height / 2 - p - l / 2 - k - t / 2) : parseInt(m - k - l - t / 2), s = "horizontal" == d ? parseInt(m - f - b - n / 2) : parseInt(a.width / 2 - p - b / 2 - f - n / 2)
				}
				h.data("offset",
				{
					top: r,
					left: s,
					newDims: e,
					diff:
					{
						W: f,
						H: k
					},
					thumbsOffset:
					{
						W: n,
						H: t
					},
					object: a
				});
				0 < a.animate && c.effects.reposition ? (h.css(C, H).stop().animate(
				{
					top: r,
					left: s
				}, c.effects.repositionSpeed, "easeOutCirc", function()
				{
					h.css(C, "")
				}), g("div.ilightbox-container", h).stop().animate(
				{
					width: b,
					height: l
				}, c.effects.repositionSpeed, "easeOutCirc"), g("div.ilightbox-inner-toolbar", h).stop().animate(
				{
					width: b
				}, c.effects.repositionSpeed, "easeOutCirc", function()
				{
					g(this).css("overflow", "visible")
				})) : (h.css(
				{
					top: r,
					left: s
				}), g("div.ilightbox-container", h).css(
				{
					width: b,
					height: l
				}), g("div.ilightbox-inner-toolbar", h).css(
				{
					width: b
				}))
			},
			resume: function(a)
			{
				var b = this,
					c = b.vars,
					d = b.options;
				!d.slideshow.pauseTime || d.controls.slideshow && 1 >= c.total || a < c.isPaused || (c.isPaused = 0, c.cycleID && (c.cycleID = clearTimeout(c.cycleID)), c.cycleID = setTimeout(function()
				{
					c.current == c.total - 1 ? b.goTo(0) : b.moveTo("next")
				}, d.slideshow.pauseTime))
			},
			pause: function(a)
			{
				var b = this.vars;
				a < b.isPaused || (b.isPaused = a || 100, b.cycleID && (b.cycleID = clearTimeout(b.cycleID)))
			},
			resetCycle: function()
			{
				var a = this.vars;
				this.options.controls.slideshow && a.cycleID && !a.isPaused && this.resume()
			},
			getNewDimenstions: function(a, b, c, d, e)
			{
				factor = a ? b ? Y(a / c, b / d) : a / c : b / d;
				e || (factor > this.options.maxScale ? factor = this.options.maxScale : factor < this.options.minScale && (factor = this.options.minScale));
				a = this.options.keepAspectRatio ? X(c * factor) : a;
				b = this.options.keepAspectRatio ? X(d * factor) : b;
				return {
					width: a,
					height: b,
					ratio: factor
				}
			},
			setOption: function(a)
			{
				this.options = g.extend(!0, this.options, a ||
				{});
				this.refresh()
			},
			availPlugins: function()
			{
				var a = document.createElement("video");
				this.plugins = {
					quicktime: 0 <= parseInt(Q.getVersion("QuickTime")) ? !0 : !1,
					html5H264: !(!a.canPlayType || !a.canPlayType("video/mp4").replace(/no/, "")),
					html5WebM: !(!a.canPlayType || !a.canPlayType("video/webm").replace(/no/, "")),
					html5Vorbis: !(!a.canPlayType || !a.canPlayType("video/ogg").replace(/no/, "")),
					html5QuickTime: !(!a.canPlayType || !a.canPlayType("video/quicktime").replace(/no/, ""))
				}
			},
			addContent: function(a, b)
			{
				var c;
				switch (b.type)
				{
					case "video":
						var d = !1,
							e = b.videoType,
							f = b.options.html5video;
						("video/mp4" == e || "mp4" == b.ext || "m4v" == b.ext || f.h264) && this.plugins.html5H264 ? (b.ext = "mp4", b.URL = f.h264 || b.URL) : f.webm && this.plugins.html5WebM ? (b.ext = "webm", b.URL = f.webm || b.URL) : f.ogg && this.plugins.html5Vorbis && (b.ext = "ogv", b.URL = f.ogg || b.URL);
						!this.plugins.html5H264 || "video/mp4" != e && "mp4" != b.ext && "m4v" != b.ext ? !this.plugins.html5WebM || "video/webm" != e && "webm" != b.ext ? !this.plugins.html5Vorbis || "video/ogg" != e && "ogv" != b.ext ? !this.plugins.html5QuickTime || "video/quicktime" != e && "mov" != b.ext && "qt" != b.ext || (d = !0, e = "video/quicktime") : (d = !0, e = "video/ogg") : (d = !0, e = "video/webm") : (d = !0, e = "video/mp4");
						d ? c = g("<video />",
						{
							width: "100%",
							height: "100%",
							preload: f.preload,
							autoplay: f.autoplay,
							poster: f.poster,
							controls: f.controls
						}).append(g("<source />",
						{
							src: b.URL,
							type: e
						})) : this.plugins.quicktime ? (c = g("<object />",
						{
							type: "video/quicktime",
							pluginspage: "http://www.apple.com/quicktime/download"
						}).attr(
						{
							data: b.URL,
							width: "100%",
							height: "100%"
						}).append(g("<param />",
						{
							name: "src",
							value: b.URL
						})).append(g("<param />",
						{
							name: "autoplay",
							value: "false"
						})).append(g("<param />",
						{
							name: "loop",
							value: "false"
						})).append(g("<param />",
						{
							name: "scale",
							value: "tofit"
						})), D.msie && (c = ja(b.URL, "100%", "100%", "", "SCALE", "tofit", "AUTOPLAY", "false", "LOOP", "false"))) : c = g("<span />",
						{
							"class": "ilightbox-alert",
							html: this.options.errors.missingPlugin.replace("{pluginspage}", "http://www.apple.com/quicktime/download").replace("{type}", "QuickTime")
						});
						break;
					case "flash":
						if (this.plugins.flash)
						{
							var l = "",
								k = 0;
							b.options.flashvars ? g.each(b.options.flashvars, function(a, b)
							{
								0 != k && (l += "&");
								l += a + "=" + encodeURIComponent(b);
								k++
							}) : l = null;
							c = g("<embed />").attr(
							{
								type: "application/x-shockwave-flash",
								src: b.URL,
								width: "number" == typeof b.options.width && b.options.width && "1" == this.options.minScale && "1" == this.options.maxScale ? b.options.width : "100%",
								height: "number" == typeof b.options.height && b.options.height && "1" == this.options.minScale && "1" == this.options.maxScale ? b.options.height : "100%",
								quality: "high",
								bgcolor: "#000000",
								play: "true",
								loop: "true",
								menu: "true",
								wmode: "transparent",
								scale: "showall",
								allowScriptAccess: "always",
								allowFullScreen: "true",
								flashvars: l,
								fullscreen: "yes"
							})
						}
						else c = g("<span />",
						{
							"class": "ilightbox-alert",
							html: this.options.errors.missingPlugin.replace("{pluginspage}", "http://www.adobe.com/go/getflash").replace("{type}", "Adobe Flash player")
						});
						break;
					case "iframe":
						c = g("<iframe />").attr(
						{
							width: "number" == typeof b.options.width && b.options.width && "1" == this.options.minScale && "1" == this.options.maxScale ? b.options.width : "100%",
							height: "number" == typeof b.options.height && b.options.height && "1" == this.options.minScale && "1" == this.options.maxScale ? b.options.height : "100%",
							src: b.URL,
							frameborder: 0,
							hspace: 0,
							vspace: 0,
							scrolling: A ? "auto" : "scroll",
							webkitAllowFullScreen: "",
							mozallowfullscreen: "",
							allowFullScreen: ""
						});
						break;
					case "inline":
						c = g('<div class="ilightbox-wrapper"></div>').html(g(b.URL).clone(!0));
						break;
					case "html":
						d = b.URL, d[0].nodeName || (d = g(b.URL), d = d.selector ? g("<div>" + d + "</div>") : d), c = g('<div class="ilightbox-wrapper"></div>').html(d)
				}
				g("div.ilightbox-container", a).empty().html(c);
				"video" === c[0].tagName.toLowerCase() && D.webkit && setTimeout(function()
				{
					var a = c[0].currentSrc + "?" + M(3E4 * T());
					c[0].currentSrc = a;
					c[0].src = a
				});
				return c
			},
			ogpRecognition: function(a, b)
			{
				var c = this,
					d = a.URL;
				c.showLoader();
				ga(d, function(a)
				{
					c.hideLoader();
					if (a)
					{
						var d = {
							length: !1
						};
						d.url = a.url;
						if (200 == a.status)
						{
							a = a.results;
							var l = a.type,
								g = a.source;
							d.source = g.src;
							d.width = g.width && parseInt(g.width) || 0;
							d.height = g.height && parseInt(g.height) || 0;
							d.type = l;
							d.thumbnail = g.thumbnail || a.images[0];
							d.html5video = a.html5video ||
							{};
							d.length = !0;
							"application/x-shockwave-flash" == g.type ? d.type = "flash" : -1 != g.type.indexOf("video/") ? d.type = "video" : -1 != g.type.indexOf("/html") ? d.type = "iframe" : -1 != g.type.indexOf("image/") && (d.type = "image")
						}
						else if ("undefined" != typeof a.response) throw a.response;
						b.call(this, d.length ? d : !1)
					}
				})
			},
			hashChangeHandler: function(a)
			{
				var b = this.vars,
					c = this.options;
				a = V(a || n.location.href).hash;
				var d = a.split("/"),
					e = d[1];
				b.hashLock || "#" + c.linkId != d[0] && 1 < a.length || (e ? (b = d[1] || 0, this.items[b] ? (a = g(".ilightbox-overlay"), a.length && a.attr("linkid") == c.linkId ? this.goTo(b) : this.itemsObject[b].trigger(A ? "itap" : "click")) : (a = g(".ilightbox-overlay"), a.length && this.closeAction())) : (a = g(".ilightbox-overlay"), a.length && this.closeAction()))
			}
		};
		g.fn.iLightBox = function()
		{
			var a = arguments,
				b = g.isPlainObject(a[0]) ? a[0] : a[1],
				c = g.isArray(a[0]) || "string" == typeof a[0] ? a[0] : a[1];
			b || (b = {});
			var b = g.extend(!0,
				{
					attr: "href",
					path: "vertical",
					skin: "dark",
					linkId: !1,
					infinite: !1,
					startFrom: 0,
					randomStart: !1,
					keepAspectRatio: !0,
					maxScale: 1,
					minScale: .2,
					innerToolbar: !1,
					smartRecognition: !1,
					mobileOptimizer: !0,
					fullAlone: !0,
					fullViewPort: null,
					fullStretchTypes: "flash, video",
					overlay:
					{
						blur: !0,
						opacity: .85
					},
					controls:
					{
						arrows: !1,
						slideshow: !1,
						toolbar: !0,
						fullscreen: !0,
						thumbnail: !0,
						keyboard: !0,
						mousewheel: !0,
						swipe: !0
					},
					keyboard:
					{
						left: !0,
						right: !0,
						up: !0,
						down: !0,
						esc: !0,
						shift_enter: !0
					},
					show:
					{
						effect: !0,
						speed: 300,
						title: !0
					},
					hide:
					{
						effect: !0,
						speed: 300
					},
					caption:
					{
						start: !0,
						show: "mouseenter",
						hide: "mouseleave"
					},
					social:
					{
						start: !0,
						show: "mouseenter",
						hide: "mouseleave",
						buttons: !1
					},
					styles:
					{
						pageOffsetX: 0,
						pageOffsetY: 0,
						nextOffsetX: 45,
						nextOffsetY: 0,
						nextOpacity: 1,
						nextScale: 1,
						prevOffsetX: 45,
						prevOffsetY: 0,
						prevOpacity: 1,
						prevScale: 1
					},
					thumbnails:
					{
						maxWidth: 120,
						maxHeight: 80,
						normalOpacity: 1,
						activeOpacity: .6
					},
					effects:
					{
						reposition: !0,
						repositionSpeed: 200,
						switchSpeed: 500,
						loadedFadeSpeed: 180,
						fadeSpeed: 200
					},
					slideshow:
					{
						pauseTime: 5E3,
						pauseOnHover: !1,
						startPaused: !0
					},
					text:
					{
						close: "Press Esc to close",
						enterFullscreen: "Enter Fullscreen (Shift+Enter)",
						exitFullscreen: "Exit Fullscreen (Shift+Enter)",
						slideShow: "Slideshow",
						next: "Next",
						previous: "Previous"
					},
					errors:
					{
						loadImage: "An error occurred when trying to load photo.",
						loadContents: "An error occurred when trying to load contents.",
						missingPlugin: "The content your are attempting to view requires the <a href='{pluginspage}' target='_blank'>{type} plugin</a>."
					},
					ajaxSetup:
					{
						url: "",
						beforeSend: function(a, b) {},
						cache: !1,
						complete: function(a, b) {},
						crossDomain: !1,
						error: function(a, b, c) {},
						success: function(a, b, c) {},
						global: !0,
						ifModified: !1,
						username: null,
						password: null,
						type: "GET"
					},
					callback:
					{}
				}, b),
				d = g.isArray(c) || "string" == typeof c ? !0 : !1,
				c = g.isArray(c) ? c : [];
			"string" == typeof a[0] && (c[0] = a[0]);
			if (ha(g.fn.jquery, "1.8", ">="))
			{
				var e = new ea(g(this), b, c, d);
				return {
					close: function()
					{
						e.closeAction()
					},
					fullscreen: function()
					{
						e.fullScreenAction()
					},
					moveNext: function()
					{
						e.moveTo("next")
					},
					movePrev: function()
					{
						e.moveTo("prev")
					},
					goTo: function(a)
					{
						e.goTo(a)
					},
					refresh: function()
					{
						e.refresh()
					},
					reposition: function()
					{
						0 < arguments.length ? e.repositionPhoto(!0) : e.repositionPhoto()
					},
					setOption: function(a)
					{
						e.setOption(a)
					},
					destroy: function()
					{
						e.closeAction();
						e.dispatchItemsEvents()
					}
				}
			}
			throw "The jQuery version that was loaded is too old. iLightBox requires jQuery 1.8+";
		};
		g.iLightBox = function(a, b)
		{
			return g.fn.iLightBox(a, b)
		};
		g.extend(g.easing,
		{
			easeInCirc: function(a, b, c, d, e)
			{
				return -d * (P(1 - (b /= e) * b) - 1) + c
			},
			easeOutCirc: function(a, b, c, d, e)
			{
				return d * P(1 - (b = b / e - 1) * b) + c
			},
			easeInOutCirc: function(a, b, c, d, e)
			{
				return 1 > (b /= e / 2) ? -d / 2 * (P(1 - b * b) - 1) + c : d / 2 * (P(1 - (b -= 2) * b) + 1) + c
			}
		});
		(function()
		{
			g.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "), function(a, b)
			{
				g.fn[b] = function(a)
				{
					return a ? this.bind(b, a) : this.trigger(b)
				};
				g.attrFn && (g.attrFn[b] = !0)
			});
			g.event.special.itap = {
				setup: function()
				{
					var a = this,
						b = g(this),
						c, d;
					b.bind("touchstart.iTap", function(e)
					{
						c = L();
						b.one("touchend.iTap", function(b)
						{
							d = L();
							b = g.event.fix(b || n.event);
							b.type = "itap";
							c && d && c.x == d.x && c.y == d.y && (g.event.dispatch || g.event.handle).call(a, b);
							c = d = R
						})
					})
				},
				teardown: function()
				{
					g(this).unbind("touchstart.iTap")
				}
			}
		})();
		(function()
		{
			z = {
				supportsFullScreen: !1,
				isFullScreen: function()
				{
					return !1
				},
				requestFullScreen: function() {},
				cancelFullScreen: function() {},
				fullScreenEventName: "",
				prefix: ""
			};
			browserPrefixes = ["webkit", "moz", "o", "ms", "khtml"];
			if ("undefined" != typeof document.cancelFullScreen) z.supportsFullScreen = !0;
			else
				for (var a = 0, b = browserPrefixes.length; a < b; a++)
					if (z.prefix = browserPrefixes[a], "undefined" != typeof document[z.prefix + "CancelFullScreen"])
					{
						z.supportsFullScreen = !0;
						break
					}
			z.supportsFullScreen && (z.fullScreenEventName = z.prefix + "fullscreenchange", z.isFullScreen = function()
			{
				switch (this.prefix)
				{
					case "":
						return document.fullScreen;
					case "webkit":
						return document.webkitIsFullScreen;
					default:
						return document[this.prefix + "FullScreen"]
				}
			}, z.requestFullScreen = function(a)
			{
				return "" === this.prefix ? a.requestFullScreen() : a[this.prefix + "RequestFullScreen"]()
			}, z.cancelFullScreen = function(a)
			{
				return "" === this.prefix ? document.cancelFullScreen() : document[this.prefix + "CancelFullScreen"]()
			})
		})();
		(function()
		{
			var a, b;
			a = navigator.userAgent;
			a = a.toLowerCase();
			b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || 0 > a.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
			a = b[1] || "";
			b = b[2] || "0";
			D = {};
			a && (D[a] = !0, D.version = b);
			D.chrome ? D.webkit = !0 : D.webkit && (D.safari = !0)
		})();
		(function()
		{
			function a(a)
			{
				for (var e = 0, f = b.length; e < f; e++)
				{
					var g = b[e] ? b[e] + a.charAt(0).toUpperCase() + a.slice(1) : a;
					if (c.style[g] !== R) return g
				}
			}
			var b = ["", "webkit", "moz", "ms", "o"],
				c = document.createElement("div");
			C = a("transform") || "";
			H = a("perspective") ? "translateZ(0) " : ""
		})();
		var Q = {
			version: "0.7.9",
			name: "PluginDetect",
			handler: function(a, b, c)
			{
				return function()
				{
					a(b, c)
				}
			},
			openTag: "<",
			isDefined: function(a)
			{
				return "undefined" != typeof a
			},
			isArray: function(a)
			{
				return /array/i.test(Object.prototype.toString.call(a))
			},
			isFunc: function(a)
			{
				return "function" == typeof a
			},
			isString: function(a)
			{
				return "string" == typeof a
			},
			isNum: function(a)
			{
				return "number" == typeof a
			},
			isStrNum: function(a)
			{
				return "string" == typeof a && /\d/.test(a)
			},
			getNumRegx: /[\d][\d\.\_,-]*/,
			splitNumRegx: /[\.\_,-]/g,
			getNum: function(a, b)
			{
				var c = this.isStrNum(a) ? (this.isDefined(b) ? new RegExp(b) : this.getNumRegx).exec(a) : null;
				return c ? c[0] : null
			},
			compareNums: function(a, b, c)
			{
				var d = parseInt;
				if (this.isStrNum(a) && this.isStrNum(b))
				{
					if (this.isDefined(c) && c.compareNums) return c.compareNums(a, b);
					a = a.split(this.splitNumRegx);
					b = b.split(this.splitNumRegx);
					for (c = 0; c < Y(a.length, b.length); c++)
					{
						if (d(a[c], 10) > d(b[c], 10)) return 1;
						if (d(a[c], 10) < d(b[c], 10)) return -1
					}
				}
				return 0
			},
			formatNum: function(a, b)
			{
				var c, d;
				if (!this.isStrNum(a)) return null;
				this.isNum(b) || (b = 4);
				b--;
				d = a.replace(/\s/g, "").split(this.splitNumRegx).concat(["0", "0", "0", "0"]);
				for (c = 0; 4 > c; c++)
					if (/^(0+)(.+)$/.test(d[c]) && (d[c] = RegExp.$2), c > b || !/\d/.test(d[c])) d[c] = "0";
				return d.slice(0, 4).join(",")
			},
			$$hasMimeType: function(a)
			{
				return function(b)
				{
					if (!a.isIE && b)
					{
						var c, d, e = a.isArray(b) ? b : a.isString(b) ? [b] : [];
						for (d = 0; d < e.length; d++)
							if (a.isString(e[d]) && /[^\s]/.test(e[d]) && (c = (b = navigator.mimeTypes[e[d]]) ? b.enabledPlugin : 0) && (c.name || c.description)) return b
					}
					return null
				}
			},
			findNavPlugin: function(a, b, c)
			{
				a = new RegExp(a, "i");
				b = !this.isDefined(b) || b ? /\d/ : 0;
				c = c ? new RegExp(c, "i") : 0;
				var d = navigator.plugins,
					e, f, g;
				for (e = 0; e < d.length; e++)
					if (g = d[e].description || "", f = d[e].name || "", a.test(g) && (!b || b.test(RegExp.leftContext + RegExp.rightContext)) || a.test(f) && (!b || b.test(RegExp.leftContext + RegExp.rightContext)))
						if (!c || !c.test(g) && !c.test(f)) return d[e];
				return null
			},
			getMimeEnabledPlugin: function(a, b, c)
			{
				var d;
				b = new RegExp(b, "i");
				c = c ? new RegExp(c, "i") : 0;
				var e, f, g = this.isString(a) ? [a] : a;
				for (f = 0; f < g.length; f++)
					if ((d = this.hasMimeType(g[f])) && (d = d.enabledPlugin) && (e = d.description || "", a = d.name || "", b.test(e) || b.test(a)) && (!c || !c.test(e) && !c.test(a))) return d;
				return 0
			},
			getPluginFileVersion: function(a, b)
			{
				var c, d, e, f, g = -1;
				if (2 < this.OS || !a || !a.version || !(c = this.getNum(a.version))) return b;
				if (!b) return c;
				c = this.formatNum(c);
				b = this.formatNum(b);
				d = b.split(this.splitNumRegx);
				e = c.split(this.splitNumRegx);
				for (f = 0; f < d.length; f++)
					if (-1 < g && f > g && "0" != d[f] || e[f] != d[f] && (-1 == g && (g = f), "0" != d[f])) return b;
				return c
			},
			AXO: n.ActiveXObject,
			getAXO: function(a)
			{
				var b = null;
				try
				{
					b = new this.AXO(a)
				}
				catch (c)
				{}
				return b
			},
			convertFuncs: function(a)
			{
				var b, c, d = /^[\$][\$]/;
				for (b in a)
					if (d.test(b)) try
					{
						c = b.slice(2), 0 < c.length && !a[c] && (a[c] = a[b](a), delete a[b])
					}
					catch (e)
					{}
			},
			initObj: function(a, b, c)
			{
				var d;
				if (a)
				{
					if (1 == a[b[0]] || c)
						for (d = 0; d < b.length; d += 2) a[b[d]] = b[d + 1];
					for (d in a)(c = a[d]) && 1 == c[b[0]] && this.initObj(c, b)
				}
			},
			initScript: function()
			{
				var a = navigator,
					b, c = document,
					d = a.userAgent || "",
					e = a.vendor || "",
					f = a.platform || "",
					a = a.product || "";
				this.initObj(this, ["$", this]);
				for (b in this.Plugins) this.Plugins[b] && this.initObj(this.Plugins[b], ["$", this, "$$", this.Plugins[b]], 1);
				this.convertFuncs(this);
				this.OS = 100;
				if (f)
				{
					var g = ["Win", 1, "Mac", 2, "Linux", 3, "FreeBSD", 4, "iPhone", 21.1, "iPod", 21.2, "iPad", 21.3, "Win.*CE", 22.1, "Win.*Mobile", 22.2, "Pocket\\s*PC", 22.3, "", 100];
					for (b = g.length - 2; 0 <= b; b -= 2)
						if (g[b] && (new RegExp(g[b], "i")).test(f))
						{
							this.OS = g[b + 1];
							break
						}
				}
				this.head = c.getElementsByTagName("head")[0] || c.getElementsByTagName("body")[0] || c.body || null;
				this.verIE = (this.isIE = (new Function("return/*@cc_on!@*/!1"))()) && /MSIE\s*(\d+\.?\d*)/i.test(d) ? parseFloat(RegExp.$1, 10) : null;
				this.docModeIE = this.verIEfull = null;
				if (this.isIE)
				{
					b = document.createElement("div");
					try
					{
						b.style.behavior = "url(#default#clientcaps)", this.verIEfull = b.getComponentVersion("{89820200-ECBD-11CF-8B85-00AA005B4383}", "componentid").replace(/,/g, ".")
					}
					catch (k)
					{}
					b = parseFloat(this.verIEfull || "0", 10);
					this.docModeIE = c.documentMode || (/back/i.test(c.compatMode || "") ? 5 : b) || this.verIE;
					this.verIE = b || this.docModeIE
				}
				this.ActiveXEnabled = !1;
				if (this.isIE)
					for (c = "Msxml2.XMLHTTP Msxml2.DOMDocument Microsoft.XMLDOM ShockwaveFlash.ShockwaveFlash TDCCtl.TDCCtl Shell.UIHelper Scripting.Dictionary wmplayer.ocx".split(" "), b = 0; b < c.length; b++)
						if (this.getAXO(c[b]))
						{
							this.ActiveXEnabled = !0;
							break
						}
				this.verGecko = (this.isGecko = /Gecko/i.test(a) && /Gecko\s*\/\s*\d/i.test(d)) ? this.formatNum(/rv\s*\:\s*([\.\,\d]+)/i.test(d) ? RegExp.$1 : "0.9") : null;
				this.verChrome = (this.isChrome = /Chrome\s*\/\s*(\d[\d\.]*)/i.test(d)) ? this.formatNum(RegExp.$1) : null;
				this.verSafari = (this.isSafari = (/Apple/i.test(e) || !e && !this.isChrome) && /Safari\s*\/\s*(\d[\d\.]*)/i.test(d)) && /Version\s*\/\s*(\d[\d\.]*)/i.test(d) ? this.formatNum(RegExp.$1) : null;
				this.verOpera = (this.isOpera = /Opera\s*[\/]?\s*(\d+\.?\d*)/i.test(d)) && (/Version\s*\/\s*(\d+\.?\d*)/i.test(d), 1) ? parseFloat(RegExp.$1, 10) : null;
				this.addWinEvent("load", this.handler(this.runWLfuncs, this))
			},
			init: function(a)
			{
				var b, c = {
					status: -3,
					plugin: 0
				};
				if (!this.isString(a)) return c;
				if (1 == a.length) return this.getVersionDelimiter = a, c;
				a = a.toLowerCase().replace(/\s/g, "");
				b = this.Plugins[a];
				if (!b || !b.getVersion) return c;
				c.plugin = b;
				this.isDefined(b.installed) || (b.installed = null, b.version = null, b.version0 = null, b.getVersionDone = null, b.pluginName = a);
				this.garbage = !1;
				if (this.isIE && !this.ActiveXEnabled && "java" !== a) return c.status = -2, c;
				c.status = 1;
				return c
			},
			fPush: function(a, b)
			{
				this.isArray(b) && (this.isFunc(a) || this.isArray(a) && 0 < a.length && this.isFunc(a[0])) && b.push(a)
			},
			callArray: function(a)
			{
				var b;
				if (this.isArray(a))
					for (b = 0; b < a.length && null !== a[b]; b++) this.call(a[b]), a[b] = null
			},
			call: function(a)
			{
				var b = this.isArray(a) ? a.length : -1;
				if (0 < b && this.isFunc(a[0])) a[0](this, 1 < b ? a[1] : 0, 2 < b ? a[2] : 0, 3 < b ? a[3] : 0);
				else this.isFunc(a) && a(this)
			},
			getVersionDelimiter: ",",
			$$getVersion: function(a)
			{
				return function(b, c, d)
				{
					b = a.init(b);
					if (0 > b.status) return null;
					b = b.plugin;
					1 != b.getVersionDone && (b.getVersion(null, c, d), null === b.getVersionDone && (b.getVersionDone = 1));
					a.cleanup();
					return c = (c = b.version || b.version0) ? c.replace(a.splitNumRegx, a.getVersionDelimiter) : c
				}
			},
			cleanup: function()
			{
				this.garbage && this.isDefined(n.CollectGarbage) && n.CollectGarbage()
			},
			isActiveXObject: function(a, b)
			{
				var c = !1,
					d = '<object width="1" height="1" style="display:none" ' + a.getCodeBaseVersion(b) + ">" + a.HTML + this.openTag + "/object>";
				if (!this.head) return c;
				this.head.insertBefore(document.createElement("object"), this.head.firstChild);
				this.head.firstChild.outerHTML = d;
				try
				{
					this.head.firstChild.classid = a.classID
				}
				catch (e)
				{}
				try
				{
					this.head.firstChild.object && (c = !0)
				}
				catch (f)
				{}
				try
				{
					c && 4 > this.head.firstChild.readyState && (this.garbage = !0)
				}
				catch (g)
				{}
				this.head.removeChild(this.head.firstChild);
				return c
			},
			codebaseSearch: function(a, b)
			{
				var c = this;
				if (!c.ActiveXEnabled || !a) return null;
				a.BIfuncs && a.BIfuncs.length && null !== a.BIfuncs[a.BIfuncs.length - 1] && c.callArray(a.BIfuncs);
				var d, e = a.SEARCH;
				if (c.isStrNum(b))
				{
					if (e.match && e.min && 0 >= c.compareNums(b, e.min)) return !0;
					if (e.match && e.max && 0 <= c.compareNums(b, e.max)) return !1;
					(d = c.isActiveXObject(a, b)) && (!e.min || 0 < c.compareNums(b, e.min)) && (e.min = b);
					d || e.max && !(0 > c.compareNums(b, e.max)) || (e.max = b);
					return d
				}
				var f = [0, 0, 0, 0],
					g = [].concat(e.digits),
					k = e.min ? 1 : 0,
					h, m, n = function(b, d)
					{
						var e = [].concat(f);
						e[b] = d;
						return c.isActiveXObject(a, e.join(","))
					};
				if (e.max)
				{
					d = e.max.split(c.splitNumRegx);
					for (h = 0; h < d.length; h++) d[h] = parseInt(d[h], 10);
					d[0] < g[0] && (g[0] = d[0])
				}
				if (e.min)
				{
					m = e.min.split(c.splitNumRegx);
					for (h = 0; h < m.length; h++) m[h] = parseInt(m[h], 10);
					m[0] > f[0] && (f[0] = m[0])
				}
				if (m && d)
					for (h = 1; h < m.length && m[h - 1] == d[h - 1]; h++) d[h] < g[h] && (g[h] = d[h]), m[h] > f[h] && (f[h] = m[h]);
				if (e.max)
					for (h = 1; h < g.length; h++)
						if (0 < d[h] && 0 == g[h] && g[h - 1] < e.digits[h - 1])
						{
							g[h - 1] += 1;
							break
						}
				for (h = 0; h < g.length; h++)
				{
					m = {};
					for (e = 0; 20 > e && !(1 > g[h] - f[h]); e++)
					{
						d = X((g[h] + f[h]) / 2);
						if (m["a" + d]) break;
						m["a" + d] = 1;
						n(h, d) ? (f[h] = d, k = 1) : g[h] = d
					}
					g[h] = f[h];
					!k && n(h, f[h]) && (k = 1);
					if (!k) break
				}
				return k ? f.join(",") : null
			},
			addWinEvent: function(a, b)
			{
				var c;
				this.isFunc(b) && (n.addEventListener ? n.addEventListener(a, b, !1) : n.attachEvent ? n.attachEvent("on" + a, b) : (c = n["on" + a], n["on" + a] = this.winHandler(b, c)))
			},
			winHandler: function(a, b)
			{
				return function()
				{
					a();
					"function" == typeof b && b()
				}
			},
			WLfuncs0: [],
			WLfuncs: [],
			runWLfuncs: function(a)
			{
				a.winLoaded = !0;
				a.callArray(a.WLfuncs0);
				a.callArray(a.WLfuncs);
				if (a.onDoneEmptyDiv) a.onDoneEmptyDiv()
			},
			winLoaded: !1,
			$$onWindowLoaded: function(a)
			{
				return function(b)
				{
					a.winLoaded ? a.call(b) : a.fPush(b, a.WLfuncs)
				}
			},
			div: null,
			divID: "plugindetect",
			divWidth: 50,
			pluginSize: 1,
			emptyDiv: function()
			{
				var a, b, c, d;
				if (this.div && this.div.childNodes)
					for (a = this.div.childNodes.length - 1; 0 <= a; a--)
					{
						if ((c = this.div.childNodes[a]) && c.childNodes)
							for (b = c.childNodes.length - 1; 0 <= b; b--)
							{
								d = c.childNodes[b];
								try
								{
									c.removeChild(d)
								}
								catch (e)
								{}
							}
						if (c) try
						{
							this.div.removeChild(c)
						}
						catch (f)
						{}
					}!this.div && (a = document.getElementById(this.divID)) && (this.div = a);
				if (this.div && this.div.parentNode)
				{
					try
					{
						this.div.parentNode.removeChild(this.div)
					}
					catch (g)
					{}
					this.div = null
				}
			},
			DONEfuncs: [],
			onDoneEmptyDiv: function()
			{
				var a, b;
				if (this.winLoaded && (!this.WLfuncs || !this.WLfuncs.length || null === this.WLfuncs[this.WLfuncs.length - 1]))
				{
					for (a in this)
						if ((b = this[a]) && b.funcs && (3 == b.OTF || b.funcs.length && null !== b.funcs[b.funcs.length - 1])) return;
					for (a = 0; a < this.DONEfuncs.length; a++) this.callArray(this.DONEfuncs);
					this.emptyDiv()
				}
			},
			getWidth: function(a)
			{
				return a && (a = a.scrollWidth || a.offsetWidth, this.isNum(a)) ? a : -1
			},
			getTagStatus: function(a, b, c, d)
			{
				var e = a.span,
					f = this.getWidth(e);
				c = c.span;
				var g = this.getWidth(c);
				b = b.span;
				var k = this.getWidth(b);
				if (!(e && c && b && this.getDOMobj(a))) return -2;
				if (g < k || 0 > f || 0 > g || 0 > k || k <= this.pluginSize || 1 > this.pluginSize) return 0;
				if (f >= k) return -1;
				try
				{
					if (f == this.pluginSize && (!this.isIE || 4 == this.getDOMobj(a).readyState) && (!a.winLoaded && this.winLoaded || a.winLoaded && this.isNum(d) && (this.isNum(a.count) || (a.count = d), 10 <= d - a.count))) return 1
				}
				catch (h)
				{}
				return 0
			},
			getDOMobj: function(a, b)
			{
				var c = a ? a.span : 0,
					d = c && c.firstChild ? 1 : 0;
				try
				{
					d && b && this.div.focus()
				}
				catch (e)
				{}
				return d ? c.firstChild : null
			},
			setStyle: function(a, b)
			{
				var c = a.style,
					d;
				if (c && b)
					for (d = 0; d < b.length; d += 2) try
					{
						c[b[d]] = b[d + 1]
					}
				catch (e)
				{}
			},
			insertDivInBody: function(a, b)
			{
				var c = null,
					d = b ? n.top.document : n.document,
					e = d.getElementsByTagName("body")[0] || d.body;
				if (!e) try
				{
					d.write('<div id="pd33993399">.' + this.openTag + "/div>"), c = d.getElementById("pd33993399")
				}
				catch (f)
				{}
				if (e = d.getElementsByTagName("body")[0] || d.body) e.insertBefore(a, e.firstChild), c && e.removeChild(c)
			},
			insertHTML: function(a, b, c, d, e)
			{
				e = document;
				var f, g = e.createElement("span"),
					k, h = "outlineStyle none borderStyle none padding 0px margin 0px visibility visible".split(" ");
				this.isDefined(d) || (d = "");
				if (this.isString(a) && /[^\s]/.test(a))
				{
					a = a.toLowerCase().replace(/\s/g, "");
					f = this.openTag + a + ' width="' + this.pluginSize + '" height="' + this.pluginSize + '" ';
					f += 'style="outline-style:none;border-style:none;padding:0px;margin:0px;visibility:visible;display:inline;" ';
					for (k = 0; k < b.length; k += 2) /[^\s]/.test(b[k + 1]) && (f += b[k] + '="' + b[k + 1] + '" ');
					f += ">";
					for (k = 0; k < c.length; k += 2) /[^\s]/.test(c[k + 1]) && (f += this.openTag + 'param name="' + c[k] + '" value="' + c[k + 1] + '" />');
					f += d + this.openTag + "/" + a + ">"
				}
				else f = d;
				this.div || ((b = e.getElementById(this.divID)) ? this.div = b : (this.div = e.createElement("div"), this.div.id = this.divID), this.setStyle(this.div, h.concat(["width", this.divWidth + "px", "height", this.pluginSize + 3 + "px", "fontSize", this.pluginSize + 3 + "px", "lineHeight", this.pluginSize + 3 + "px", "verticalAlign", "baseline", "display", "block"])), b || (this.setStyle(this.div, "position absolute right 0px top 0px".split(" ")), this.insertDivInBody(this.div)));
				if (this.div && this.div.parentNode)
				{
					this.setStyle(g, h.concat(["fontSize", this.pluginSize + 3 + "px", "lineHeight", this.pluginSize + 3 + "px", "verticalAlign", "baseline", "display", "inline"]));
					try
					{
						g.innerHTML = f
					}
					catch (m)
					{}
					try
					{
						this.div.appendChild(g)
					}
					catch (n)
					{}
					return {
						span: g,
						winLoaded: this.winLoaded,
						tagName: a,
						outerHTML: f
					}
				}
				return {
					span: null,
					winLoaded: this.winLoaded,
					tagName: "",
					outerHTML: f
				}
			},
			Plugins:
			{
				quicktime:
				{
					mimeType: ["video/quicktime", "application/x-quicktimeplayer", "image/x-macpaint", "image/x-quicktime"],
					progID: "QuickTimeCheckObject.QuickTimeCheck.1",
					progID0: "QuickTime.QuickTime",
					classID: "clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B",
					minIEver: 7,
					HTML: '<param name="src" value="" /><param name="controller" value="false" />',
					getCodeBaseVersion: function(a)
					{
						return 'codebase="#version=' + a + '"'
					},
					SEARCH:
					{
						min: 0,
						max: 0,
						match: 0,
						digits: [16, 128, 128, 0]
					},
					getVersion: function(a)
					{
						var b = this.$,
							c = null,
							d = null;
						if (b.isIE)
						{
							b.isStrNum(a) && (a = a.split(b.splitNumRegx), 3 < a.length && 0 < parseInt(a[3], 10) && (a[3] = "9999"), a = a.join(","));
							if (b.isStrNum(a) && b.verIE >= this.minIEver && 0 < this.canUseIsMin())
							{
								this.installed = this.isMin(a);
								this.getVersionDone = 0;
								return
							}
							this.getVersionDone = 1;
							!c && b.verIE >= this.minIEver && (c = this.CDBASE2VER(b.codebaseSearch(this)));
							c || (d = b.getAXO(this.progID)) && d.QuickTimeVersion && (c = d.QuickTimeVersion.toString(16), c = parseInt(c.charAt(0), 16) + "." + parseInt(c.charAt(1), 16) + "." + parseInt(c.charAt(2), 16))
						}
						else b.hasMimeType(this.mimeType) && (d = 3 != b.OS ? b.findNavPlugin("QuickTime.*Plug-?in", 0) : null) && d.name && (c = b.getNum(d.name));
						this.installed = c ? 1 : d ? 0 : -1;
						this.version = b.formatNum(c, 3)
					},
					cdbaseUpper: ["7,60,0,0", "0,0,0,0"],
					cdbaseLower: ["7,50,0,0", null],
					cdbase2ver: [function(a, b)
					{
						var c = b.split(a.$.splitNumRegx);
						return [c[0], c[1].charAt(0), c[1].charAt(1), c[2]].join()
					}, null],
					CDBASE2VER: function(a)
					{
						var b = this.$,
							c, d = this.cdbaseUpper,
							e = this.cdbaseLower;
						if (a)
							for (a = b.formatNum(a), c = 0; c < d.length; c++)
								if (d[c] && 0 > b.compareNums(a, d[c]) && e[c] && 0 <= b.compareNums(a, e[c]) && this.cdbase2ver[c]) return this.cdbase2ver[c](this, a);
						return a
					},
					canUseIsMin: function()
					{
						var a = this.$,
							b, c = this.canUseIsMin,
							d = this.cdbaseUpper,
							e = this.cdbaseLower;
						if (!c.value)
							for (c.value = -1, b = 0; b < d.length; b++)
							{
								if (d[b] && a.codebaseSearch(this, d[b]))
								{
									c.value = 1;
									break
								}
								if (e[b] && a.codebaseSearch(this, e[b]))
								{
									c.value = -1;
									break
								}
							}
						this.SEARCH.match = 1 == c.value ? 1 : 0;
						return c.value
					},
					isMin: function(a)
					{
						return this.$.codebaseSearch(this, a) ? .7 : -1
					}
				},
				flash:
				{
					mimeType: "application/x-shockwave-flash",
					progID: "ShockwaveFlash.ShockwaveFlash",
					classID: "clsid:D27CDB6E-AE6D-11CF-96B8-444553540000",
					getVersion: function()
					{
						var a = function(a)
							{
								return a ? (a = /[\d][\d\,\.\s]*[rRdD]{0,1}[\d\,]*/.exec(a)) ? a[0].replace(/[rRdD\.]/g, ",").replace(/\s/g, "") : null : null
							},
							b = this.$,
							c, d = null,
							e = null,
							f = null;
						if (b.isIE)
						{
							for (c = 15; 2 < c; c--)
								if (e = b.getAXO(this.progID + "." + c))
								{
									f = c.toString();
									break
								}
							e || (e = b.getAXO(this.progID));
							if ("6" == f) try
							{
								e.AllowScriptAccess = "always"
							}
							catch (g)
							{
								return "6,0,21,0"
							}
							try
							{
								d = a(e.GetVariable("$version"))
							}
							catch (k)
							{}!d && f && (d = f)
						}
						else
						{
							if (e = b.hasMimeType(this.mimeType))
							{
								c = b.getDOMobj(b.insertHTML("object", ["type", this.mimeType], [], "", this));
								try
								{
									d = b.getNum(c.GetVariable("$version"))
								}
								catch (h)
								{}
							}
							d || ((c = e ? e.enabledPlugin : null) && c.description && (d = a(c.description)), d && (d = b.getPluginFileVersion(c, d)))
						}
						this.installed = d ? 1 : -1;
						this.version = b.formatNum(d);
						return !0
					}
				},
				shockwave:
				{
					mimeType: "application/x-director",
					progID: "SWCtl.SWCtl",
					classID: "clsid:166B1BCA-3F9C-11CF-8075-444553540000",
					getVersion: function()
					{
						var a = null,
							b = null,
							c = this.$;
						if (c.isIE)
						{
							try
							{
								b = c.getAXO(this.progID).ShockwaveVersion("")
							}
							catch (d)
							{}
							c.isString(b) && 0 < b.length ? a = c.getNum(b) : c.getAXO(this.progID + ".8") ? a = "8" : c.getAXO(this.progID + ".7") ? a = "7" : c.getAXO(this.progID + ".1") && (a = "6")
						}
						else(b = c.findNavPlugin("Shockwave\\s*for\\s*Director")) && b.description && c.hasMimeType(this.mimeType) && (a = c.getNum(b.description)), a && (a = c.getPluginFileVersion(b, a));
						this.installed = a ? 1 : -1;
						this.version = c.formatNum(a)
					}
				},
				zz: 0
			}
		};
		Q.initScript();
		var ka = 'The "%%" function requires an even number of arguments.\nArguments should be in the form "atttributeName", "attributeValue", ...',
			q = null;
		(function()
		{
			function a(a)
			{
				a = a || location.href;
				return "#" + a.replace(/^[^#]*#?(.*)$/, "$1")
			}
			var b = document,
				c, d = g.event.special,
				e = b.documentMode,
				f = "oniLightBoxHashChange" in n && (void 0 === e || 7 < e);
			g.fn.iLightBoxHashChange = function(a)
			{
				return a ? this.bind("iLightBoxHashChange", a) : this.trigger("iLightBoxHashChange")
			};
			g.fn.iLightBoxHashChange.delay = 50;
			d.iLightBoxHashChange = g.extend(d.iLightBoxHashChange,
			{
				setup: function()
				{
					if (f) return !1;
					g(c.start)
				},
				teardown: function()
				{
					if (f) return !1;
					g(c.stop)
				}
			});
			c = function()
			{
				function c()
				{
					var b = a(),
						d = t(m);
					b !== m ? (q(m = b, d), g(n).trigger("iLightBoxHashChange")) : d !== m && (location.href = location.href.replace(/#.*/, "") + d);
					e = setTimeout(c, g.fn.iLightBoxHashChange.delay)
				}
				var d = {},
					e, m = a(),
					p = function(a)
					{
						return a
					},
					q = p,
					t = p;
				d.start = function()
				{
					e || c()
				};
				d.stop = function()
				{
					e && clearTimeout(e);
					e = void 0
				};
				D.msie && !f && function()
				{
					var e, f;
					d.start = function()
					{
						e || (f = (f = g.fn.iLightBoxHashChange.src) && f + a(), e = g('<iframe tabindex="-1" title="empty"/>').hide().one("load", function()
						{
							f || q(a());
							c()
						}).attr("src", f || "javascript:0").insertAfter("body")[0].contentWindow, b.onpropertychange = function()
						{
							try
							{
								"title" === event.propertyName && (e.document.title = b.title)
							}
							catch (a)
							{}
						})
					};
					d.stop = p;
					t = function()
					{
						return a(e.location.href)
					};
					q = function(a, c)
					{
						var d = e.document,
							f = g.fn.iLightBoxHashChange.domain;
						a !== c && (d.title = b.title, d.open(), f && d.write('<script>document.domain="' + f + '"\x3c/script>'), d.close(), e.location.hash = a)
					}
				}();
				return d
			}()
		})();
		Array.prototype.filter || (Array.prototype.filter = function(a, b)
		{
			if (null == this) throw new TypeError;
			var c = Object(this),
				d = c.length >>> 0;
			if ("function" != typeof a) throw new TypeError;
			for (var e = [], f = 0; f < d; f++)
				if (f in c)
				{
					var g = c[f];
					a.call(b, g, f, c) && e.push(g)
				}
			return e
		});
		Array.prototype.indexOf || (Array.prototype.indexOf = function(a, b)
		{
			var c;
			if (null == this) throw new TypeError('"this" is null or not defined');
			var d = Object(this),
				e = d.length >>> 0;
			if (0 === e) return -1;
			c = +b || 0;
			Infinity === I(c) && (c = 0);
			if (c >= e) return -1;
			for (c = ba(0 <= c ? c : e - I(c), 0); c < e;)
			{
				if (c in d && d[c] === a) return c;
				c++
			}
			return -1
		});
		Array.prototype.lastIndexOf || (Array.prototype.lastIndexOf = function(a)
		{
			if (null == this) throw new TypeError;
			var b = Object(this),
				c = b.length >>> 0;
			if (0 === c) return -1;
			var d = c;
			1 < arguments.length && (d = Number(arguments[1]), d != d ? d = 0 : 0 != d && d != 1 / 0 && d != -(1 / 0) && (d = (0 < d || -1) * M(I(d))));
			for (c = 0 <= d ? Y(d, c - 1) : c - I(d); 0 <= c; c--)
				if (c in b && b[c] === a) return c;
			return -1
		})
	})(jQuery, this);
	! function(a)
	{
		function d(b)
		{
			var c = b || window.event,
				d = [].slice.call(arguments, 1),
				e = 0,
				g = 0,
				h = 0;
			return b = a.event.fix(c), b.type = "mousewheel", c.wheelDelta && (e = c.wheelDelta / 120), c.detail && (e = -c.detail / 3), h = e, void 0 !== c.axis && c.axis === c.HORIZONTAL_AXIS && (h = 0, g = -1 * e), void 0 !== c.wheelDeltaY && (h = c.wheelDeltaY / 120), void 0 !== c.wheelDeltaX && (g = -1 * c.wheelDeltaX / 120), d.unshift(b, e, g, h), (a.event.dispatch || a.event.handle).apply(this, d)
		}
		var b = ["DOMMouseScroll", "mousewheel"];
		if (a.event.fixHooks)
			for (var c = b.length; c;) a.event.fixHooks[b[--c]] = a.event.mouseHooks;
		a.event.special.mousewheel = {
			setup: function()
			{
				if (this.addEventListener)
					for (var a = b.length; a;) this.addEventListener(b[--a], d, !1);
				else this.onmousewheel = d
			},
			teardown: function()
			{
				if (this.removeEventListener)
					for (var a = b.length; a;) this.removeEventListener(b[--a], d, !1);
				else this.onmousewheel = null
			}
		}, a.fn.extend(
		{
			mousewheel: function(a)
			{
				return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
			},
			unmousewheel: function(a)
			{
				return this.unbind("mousewheel", a)
			}
		})
	}(jQuery);
	! function(a, b, c)
	{
		for (var e, d = 0, f = function(a)
			{
				e && (b.requestAnimationFrame(f, a), jQuery.fx.tick())
			}, g = ["ms", "moz", "webkit", "o"], h = 0, i = g.length; h < i && !b.requestAnimationFrame; ++h) b.requestAnimationFrame = b[g[h] + "RequestAnimationFrame"], b.cancelAnimationFrame = b[g[h] + "CancelAnimationFrame"] || b[g[h] + "CancelRequestAnimationFrame"];
		b.requestAnimationFrame || (b.requestAnimationFrame = function(a, c)
		{
			var e = (new Date).getTime(),
				f = e - d,
				g = Math.max(0, 16 - f),
				h = b.setTimeout(function()
				{
					a(e + g)
				}, g);
			return d = e + g, h
		}), b.cancelAnimationFrame || (b.cancelAnimationFrame = function(a)
		{
			clearTimeout(a)
		}), jQuery.fx.timer = function(a)
		{
			a() && jQuery.timers.push(a) && !e && (e = !0, f(a.elem))
		}, jQuery.fx.stop = function()
		{
			e = !1
		}
	}(jQuery, this);
}
catch (e)
{
	console.log(e)
}
try
{
	/*! This file is auto-generated */
	! function(c, d)
	{
		"use strict";
		var e = !1,
			n = !1;
		if (d.querySelector)
			if (c.addEventListener) e = !0;
		if (c.wp = c.wp ||
			{}, !c.wp.receiveEmbedMessage)
			if (c.wp.receiveEmbedMessage = function(e)
				{
					var t = e.data;
					if (t)
						if (t.secret || t.message || t.value)
							if (!/[^a-zA-Z0-9]/.test(t.secret))
							{
								for (var r, a, i, s = d.querySelectorAll('iframe[data-secret="' + t.secret + '"]'), n = d.querySelectorAll('blockquote[data-secret="' + t.secret + '"]'), o = 0; o < n.length; o++) n[o].style.display = "none";
								for (o = 0; o < s.length; o++)
									if (r = s[o], e.source === r.contentWindow)
									{
										if (r.removeAttribute("style"), "height" === t.message)
										{
											if (1e3 < (i = parseInt(t.value, 10))) i = 1e3;
											else if (~~i < 200) i = 200;
											r.height = i
										}
										if ("link" === t.message)
											if (a = d.createElement("a"), i = d.createElement("a"), a.href = r.getAttribute("src"), i.href = t.value, i.host === a.host)
												if (d.activeElement === r) c.top.location.href = t.value
									}
							}
				}, e) c.addEventListener("message", c.wp.receiveEmbedMessage, !1), d.addEventListener("DOMContentLoaded", t, !1), c.addEventListener("load", t, !1);
		function t()
		{
			if (!n)
			{
				n = !0;
				for (var e, t, r = -1 !== navigator.appVersion.indexOf("MSIE 10"), a = !!navigator.userAgent.match(/Trident.*rv:11\./), i = d.querySelectorAll("iframe.wp-embedded-content"), s = 0; s < i.length; s++)
				{
					if (!(e = i[s]).getAttribute("data-secret")) t = Math.random().toString(36).substr(2, 10), e.src += "#?secret=" + t, e.setAttribute("data-secret", t);
					if (r || a)(t = e.cloneNode(!0)).removeAttribute("security"), e.parentNode.replaceChild(t, e)
				}
			}
		}
	}(window, document)
}
catch (e)
{
	console.log(e)
}
try
{
	(function($)
	{
		$.fn.extend(
		{
			ajaxyLiveSearch: function(options, arg)
			{
				if (options && typeof(options) == 'object')
				{
					options = $.extend(
					{}, $.ajaxyLiveSearch.defaults, options);
				}
				else
				{
					options = $.ajaxyLiveSearch.defaults;
				}
				if (this.is("input"))
				{
					this.each(function()
					{
						new $.ajaxyLiveSearch.load(this, options, arg);
					});
					return;
				}
			}
		});
		$.ajaxyLiveSearch = {
			element: null,
			timeout: null,
			options: null,
			load: function(elem, options, arg)
			{
				this.element = elem;
				this.timeout = null;
				this.options = options;
				if ($(elem).val() == "")
				{
					$(elem).val(options.text);
				}
				$(elem).attr('autocomplete', 'off');
				if ($('#live-search_sb').length == 0)
				{
					$('body').append('<div id="live-search_sb" class="live-search_sb" style="position:absolute;display:none;width:' + options.width + 'px;z-index:9999">' + '<div class="live-search_sb_cont">' + '<div class="live-search_sb_top"></div>' + '<div id="live-search_results" style="width:100%">' + '<div id="live-search_val" ></div>' + '<div id="live-search_more"></div>' + '</div>' + '<div class="live-search_sb_bottom"></div>' + '</div>' + '</div>');
				}
				$.ajaxyLiveSearch.loadEvents(this);
			},
			loadResults: function(object)
			{
				options = object.options;
				elem = object.element;
				window.sf_lastElement = elem;
				if (jQuery(elem).val() != "")
				{
					jQuery("body").data("live-search_results", null);
					var loading = "<li class=\"live-search_lnk live-search_more live-search_selected\">" + "<a id=\"live-search_loading\" href=\"" + options.searchUrl.replace('%s', encodeURI(jQuery(elem).val())) + "\"><i class=\"fa fa-spinner fa-spin\"></i>" + "</a>" + "</li>";
					jQuery("#live-search_val").html("<ul>" + loading + "</ul>");
					var pos = this.bounds(elem, options);
					var containerPos = this.bounds('.top-nav .container', options);
					if (!pos)
					{
						jQuery("#live-search_sb").hide();
						return false;
					}
					if (Math.ceil(containerPos.left) + parseInt(options.width, 10) > jQuery(window).width())
					{
						jQuery("#live-search_sb").css('width', jQuery(window).width() - containerPos.left - 20);
					}
					if (jQuery('body').hasClass("rtl"))
					{
						jQuery("#live-search_sb").css(
						{
							top: pos.bottom,
							right: containerPos.right
						});
					}
					else
					{
						jQuery("#live-search_sb").css(
						{
							top: pos.bottom,
							right: containerPos.left
						});
					}
					jQuery("#live-search_sb").show();
					var data = {
						action: "ajaxy_sf",
						sf_value: jQuery(elem).val(),
						search: options.search
					};
					if (options.ajaxData)
					{
						data = window[options.ajaxData](data);
					}
					if (options.search)
					{
						var mresults = options.search.split(',');
						var results = [];
						var m = "";
						var s = 0;
						var c = [];
						for (var kindex in mresults)
						{
							var dm = mresults[kindex].split(":");
							if (dm.length == 2)
							{
								if (dm[1].indexOf(jQuery(elem).val()) == 0)
								{
									results[results.length] = mresults[kindex];
								}
							}
							else if (dm.length == 1)
							{
								if (mresults[kindex].indexOf(jQuery(elem).val()) == 0)
								{
									results[results.length] = mresults[kindex];
								}
							}
						}
						c = $.ajaxyLiveSearch.htmlArrayResults(results);
						m += c[0];
						s += c[1];
						var sf_selected = "";
						if (s == 0)
						{
							sf_selected = " live-search_selected";
						}
						m += "<li class=\"live-search_lnk live-search_more" + sf_selected + "\">{total} " + tie.lang_results_found + "</li>";
						m = m.replace(/{search_value_escaped}/g, jQuery(elem).val());
						m = m.replace(/{search_url_escaped}/g, options.searchUrl.replace('%s', encodeURI(jQuery(elem).val())));
						m = m.replace(/{search_value}/g, jQuery(elem).val());
						m = m.replace(/{total}/g, s);
						jQuery("body").data("live-search_results", results);
						if (s > 0)
						{
							jQuery("#live-search_val").html("<ul>" + m + "</ul>");
						}
						else
						{
							jQuery("#live-search_val").html("<ul>" + m + "</ul>");
						}
						$.ajaxyLiveSearch.loadLiveEvents(object);
						jQuery("#live-search_sb").show();
					}
					else
					{
						jQuery.post(options.ajaxUrl, data, function(resp)
						{
							var results = eval("(" + resp + ")");
							var m = "";
							var s = 0;
							for (var mindex in results)
							{
								var c = [];
								for (var kindex in results[mindex])
								{
									c = $.ajaxyLiveSearch.htmlResults(results[mindex][kindex], mindex, kindex);
									m += c[0];
									s += c[1];
								}
							}
							var sf_selected = "";
							if (s == 0)
							{
								sf_selected = " live-search_selected";
								m += "<li class=\"live-search_lnk live-search_more\">" + tie.lang_no_results + "</li>";
							}
							else
							{
								if (!options.callback)
								{
									m += "<li class=\"live-search_lnk live-search_more\">" + sf_templates + "</li>";
								}
								m = m.replace(/{search_value_escaped}/g, jQuery(elem).val());
								m = m.replace(/{search_url_escaped}/g, options.searchUrl.replace('%s', encodeURI(jQuery(elem).val())));
							}
							jQuery("body").data("live-search_results", results);
							if (s > 0)
							{
								jQuery("#live-search_val").html('<ul class="live-search_main">' + m + '</ul>');
							}
							else
							{
								jQuery("#live-search_val").html('<ul class="live-search_main">' + m + '</ul>');
							}
							$.ajaxyLiveSearch.loadLiveEvents(object);
							jQuery("#live-search_sb").show();
						});
					}
				}
				else
				{
					jQuery("#live-search_sb").hide();
				}
			},
			bounds: function(elem, options)
			{
				var offset = jQuery(elem).offset();
				if (offset)
				{
					return {
						top: offset.top,
						left: offset.left + options.leftOffset,
						bottom: offset.top + jQuery(elem).innerHeight() + options.topOffset,
						right: offset.left - jQuery('#live-search_sb').innerWidth() + jQuery(elem).innerWidth()
					};
				}
			},
			htmlResults: function(results, type, array_index)
			{
				var m = "";
				var s = 0;
				if (typeof(results) != "undefined")
				{
					if (results.all.length > 0)
					{
						m += "<li class=\"live-search_header\">" + results.title + "</li><li><div class=\"live-search_result_container\"><ul>";
						for (var i = 0; i < results.all.length; i++)
						{
							s++;
							m += "<li result-type='object' index-type='" + type + "' index-array='" + array_index + "' index='" + i + "' class=\"live-search_lnk " + results.class_name + "\">" + $.ajaxyLiveSearch.replaceResults(results.all[i], results.template) + "</li>";
						}
						m += "</ul></div></li>";
					}
				}
				return new Array(m, s);
			},
			htmlArrayResults: function(results)
			{
				var m = "";
				var s = 0;
				if (typeof(results) != "undefined")
				{
					if (results.length > 0)
					{
						m += "<li><div class=\"live-search_result_container\"><ul>";
						for (var i = 0; i < results.length; i++)
						{
							var md = results[i].split(':');
							var title = "";
							if (md.length == 2)
							{
								title = md[1];
							}
							else
							{
								title = results[i];
							}
							s++;
							m += "<li result-type='array' index='" + i + "' class=\"live-search_lnk live-search_category\"><a href='javascript:;'>" + title + "</a></li>";
						}
						m += "</ul></div></li>";
					}
				}
				return new Array(m, s);
			},
			replaceResults: function(results, template)
			{
				for (var s in results)
				{
					template = template.replace(new RegExp("{" + s + "}", "g"), results[s]);
				}
				return template;
			},
			loadLiveEvents: function(object)
			{
				var d = {
					object: object
				};
				jQuery("#live-search_val li.live-search_lnk").mouseover(function()
				{
					jQuery(".live-search_lnk").each(function()
					{
						jQuery(this).attr("class", jQuery(this).attr("class").replace(" live-search_selected", ""));
					});
					jQuery(this).attr("class", jQuery(this).attr("class") + " live-search_selected");
				});
				if (d.object.options.callback)
				{
					jQuery("#live-search_val li.live-search_lnk").click(function(event)
					{
						try
						{
							window[d.object.options.callback](d.object, this);
						}
						catch (e)
						{
							alert(e);
						}
						return false;
					});
				}
			},
			loadEvents: function(object)
			{
				var d = {
					object: object
				};
				jQuery(document).click(function()
				{
					jQuery("#live-search_sb").hide();
				});
				jQuery(window).resize(function()
				{
					var pos = $.ajaxyLiveSearch.bounds(window.sf_lastElement, d.object.options);
					if (pos)
					{
						jQuery("#live-search_sb").css(
						{
							top: pos.bottom,
							left: pos.left
						});
					}
				});
				jQuery(object.element).keyup(function(event)
				{
					if (event.keyCode != "38" && event.keyCode != "40" && event.keyCode != "13" && event.keyCode != "27" && event.keyCode != "39" && event.keyCode != "37")
					{
						var ajaxyObject = d.object;
						if (ajaxyObject.timeout != null)
						{
							clearTimeout(ajaxyObject.timeout);
						}
						jQuery(ajaxyObject.element).attr("class", jQuery(ajaxyObject.element).attr("class").replace(" live-search_focused", "") + " live-search_focused");
						var l = {
							object: d.object
						};
						ajaxyObject.timeout = setTimeout(function()
						{
							jQuery.ajaxyLiveSearch.loadResults(l.object);
						}, d.object.options.delay);
					}
				});
				jQuery(window).keydown(function(event)
				{
					if (jQuery("#live-search_sb").css("display") != "none" && jQuery("#live-search_sb").css("display") != "undefined" && jQuery("#live-search_sb").length > 0)
					{
						if (event.keyCode == "38" || event.keyCode == "40")
						{
							if (jQuery.browser.webkit)
							{
								jQuery("#live-search_sb").focus();
							}
							var s_item = null;
							var after_s_item = null;
							var s_sel = false;
							var all_items = jQuery("#live-search_val li.live-search_lnk");
							var s_found = false;
							event.stopPropagation();
							event.preventDefault();
							for (var i = 0; i < all_items.length; i++)
							{
								if (jQuery(all_items[i]).attr("class").indexOf("live-search_selected") >= 0 && s_found == false)
								{
									s_sel = true;
									if (i < all_items.length - 1 && event.keyCode == "40")
									{
										jQuery(all_items[i]).attr("class", jQuery(all_items[i]).attr("class").replace(" live-search_selected", ""));
										jQuery(all_items[i + 1]).attr("class", jQuery(all_items[i + 1]).attr("class") + " live-search_selected");
										i = i + 1;
										s_found = true;
									}
									else if (i > 0 && event.keyCode == "38")
									{
										jQuery(all_items[i]).attr("class", jQuery(all_items[i]).attr("class").replace(" live-search_selected", ""));
										jQuery(all_items[i - 1]).attr("class", jQuery(all_items[i - 1]).attr("class") + " live-search_selected");
										i = i + 1;
										s_found = true;
									}
								}
								else
								{
									jQuery(all_items[i]).attr("class", jQuery(all_items[i]).attr("class").replace(" live-search_selected", ""));
								}
							}
							if (s_sel == false)
							{
								if (all_items.length > 0)
								{
									jQuery(all_items[0]).attr("class", jQuery(all_items[0]).attr("class") + " live-search_selected");
								}
							}
						}
						else if (event.keyCode == 27)
						{
							jQuery("#live-search_sb").hide();
						}
						else if (event.keyCode == 13)
						{
							var b = jQuery("#live-search_val li.live-search_selected a").attr("href");
							if (typeof(b) != 'undefined' && b != '')
							{
								if (d.object.options.callback)
								{
									d.object.options.callback(this);
								}
								else
								{
									window.location.href = b;
								}
								return false;
							}
							else
							{
								if (d.object.options.callback)
								{
									d.object.options.callback(this);
								}
								else if (d.object.element != null)
								{
									window.location.href = sf_url.replace('%s', encodeURI(jQuery(d.object).val()));
								}
								return false;
							}
						}
					}
				});
				jQuery(object.element).focus(function()
				{
					if (jQuery(this).val() == d.object.options.text)
					{
						jQuery(this).val('');
						jQuery(this).attr('class', jQuery(this).attr('class') + ' live-search_focused');
					}
					if (d.object.options.expand > 0)
					{
						jQuery(d.object.element).animate(
						{
							width: d.object.options.iwidth
						});
					}
				});
				jQuery(object.element).blur(function()
				{
					if (jQuery(this).val() == '')
					{
						jQuery(this).val(d.object.options.text);
						jQuery(this).attr('class', jQuery(this).attr('class').replace(/ sf_focused/g, ''));
					}
					if (d.object.options.expand > 0)
					{
						jQuery(d.object.element).animate(
						{
							width: d.object.options.expand
						});
					}
				});
			}
		};
		$.ajaxyLiveSearch.defaults = {
			delay: 500,
			leftOffset: 0,
			topOffset: 5,
			text: "Search For",
			iwidth: 180,
			width: 315,
			ajaxUrl: "",
			ajaxData: false,
			searchUrl: "",
			expand: false,
			callback: false,
			search: false
		};
	})(jQuery);

	function sf_addItem(search, title, name, name_type, value)
	{
		var items = jQuery(search).find('.live-search_ajaxy-selective-item');
		var exists = false;
		var key = "";
		var md = value.split(':');
		if (md.length == 2)
		{
			key = md[0];
		}
		else
		{
			key = value;
		}
		if (items.length > 0)
		{
			for (var i = 0; i < items.length; i++)
			{
				if (jQuery(items[i]).find('input.live-search_ajaxy-selective-close-hidden').val() == key)
				{
					exists = true;
					break;
				}
			}
		}
		if (exists)
		{
			jQuery(search).find(".live-search_ajaxy-selective-input").val("");
			jQuery('#live-search_sb').hide();
			return;
		}
		var mds = title.split(':');
		if (mds.length == 2)
		{
			title = md[1];
		}
		var added_item = jQuery('<span class="live-search_ajaxy-selective-item">' + title + '<a class="live-search_ajaxy-selective-close">X</a><input class="live-search_ajaxy-selective-close-hidden" type="hidden" name="' + name + '" value="' + key + '" /></span>');
		if (items.length <= 0)
		{
			jQuery(search).prepend(added_item);
		}
		else
		{
			added_item.insertAfter(items[items.length - 1]);
		}
		added_item.click(function()
		{
			jQuery(this).remove();
		});
		var input = jQuery(search).find(".live-search_ajaxy-selective-input");
		if (input)
		{
			input.val("");
			if (name_type != 'array')
			{
				input.css('visibility', 'hidden');
			}
			else
			{
				input.focus();
			}
		}
		jQuery('#live-search_sb').hide();
	}
}
catch (e)
{
	console.log(e)
}
try
{
	! function(e, t, n)
	{
		var o = "lazyLoadXT",
			r = o + "_lazied",
			a = "load error",
			i = t.documentElement || t.body,
			l = {
				autoInit: !0,
				preload: !0,
				selector: "img[data-src]",
				blankImage: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
				throttle: 99,
				forceLoad: e.onscroll === n || !!e.operamini || !i.getBoundingClientRect,
				loadEvent: "pageshow",
				updateEvent: "load orientationchange resize scroll touchmove focus",
				forceEvent: "lazyloadall",
				oninit:
				{
					removeClass: "lazy"
				},
				onshow:
				{
					addClass: "lazy-hidden"
				},
				onload:
				{
					removeClass: "lazy-hidden",
					addClass: "lazy-loaded"
				},
				onerror:
				{
					removeClass: "lazy-hidden"
				},
				checkDuplicates: !0
			},
			c = {
				srcAttr: "data-src",
				edgeX: 0,
				edgeY: 0,
				visibleOnly: !0
			},
			s = [],
			d = 0,
			f = 0,
			u = 0;

		function g(e)
		{
			for (var t, n, o = 1; o < arguments.length; o++)
				for (n in t = arguments[o]) e[n] = t[n];
			return e
		}

		function v(e, t)
		{
			return e[t] === n ? l[t] : e[t]
		}

		function h()
		{
			var t = e.pageYOffset;
			return t === n ? i.scrollTop : t
		}

		function A(e)
		{
			return "function" == typeof e
		}

		function p(e)
		{
			return "string" == typeof e
		}

		function m(e, t)
		{
			if (t)
				for (; t = t.parentNode;)
					if (t === e) return !0;
			return !1
		}

		function E(e, n, o)
		{
			e = p(e) ? t.querySelectorAll(e) : [e], n = n.split(" ");
			for (var r, a = 0; a < e.length; a++)
				for (r = 0; r < n.length; r++) e[a].addEventListener(n[r], o,
				{
					capture: !0,
					passive: !0
				})
		}

		function y(e, t, n)
		{
			t = t.split(" ");
			for (var o = 0; o < t.length; o++) e.removeEventListener(t[o], n)
		}

		function C(e, t, n)
		{
			if (t)
			{
				var o, r = 0,
					a = " " + e.className.replace(/[\t\r\n\f]/g, " ") + " ",
					i = a;
				for (t = t.match(/\S+/g) || []; r < t.length; r++) o = t[r] + " ", n ? i = i.replace(" " + o, " ") : i.indexOf(" " + o) < 0 && (i += o);
				a !== i && (e.className = i.slice(1, -1))
			}
		}

		function z(e, n)
		{
			var o = l["on" + e];
			o && (A(o) ? o.call(n) : (C(n, o.addClass), C(n, o.removeClass, !0))), (o = t.createEvent("Event")).initEvent("lazy" + e, !0, !0), n.dispatchEvent(o), T()
		}

		function b(e)
		{
			var t = e.currentTarget;
			u--, l.preload && 0 === u && L(1), y(t, a, b), z(e.type, t)
		}

		function L(t)
		{
			if (s.length)
			{
				t = t || l.forceLoad, d = 1 / 0;
				var n, c, f = h(),
					g = e.innerHeight || i.clientHeight,
					v = e.innerWidth || i.clientWidth;
				for (n = 0, c = s.length; n < c; n++)
				{
					var p, y = s[n],
						C = y[o],
						L = !1,
						I = t < 0 || t > u || y[r] < 0;
					if (m(i, y))
					{
						if (I || !C.visibleOnly || y.offsetWidth || y.offsetHeight)
						{
							if (!I)
							{
								var T = y.getBoundingClientRect(),
									w = C.edgeX,
									B = C.edgeY;
								I = (p = T.top + f - B - g) <= f && T.bottom > -B && T.left <= v + w && T.right > -w
							}
							if (I)
							{
								u++, E(y, a, b), z("show", y);
								var O = C.srcAttr,
									k = A(O) ? O(y) : y.getAttribute(O);
								k && (y.src = k), L = !0
							}
							else p < d && (d = p)
						}
					}
					else L = !0;
					L && (y[r] = 0, s.splice(n--, 1), c--)
				}
				c || z("complete", i)
			}
		}

		function I()
		{
			f > 1 ? (f = 1, L(), setTimeout(I, l.throttle)) : f = 0
		}

		function T(t)
		{
			s.length && (t && "scroll" === t.type && t.currentTarget === e && d >= h() || (f || setTimeout(I, 0), f = 2))
		}

		function w(e)
		{
			var n, a, i, l = v(e = p(e) ?
				{
					selector: e
				} : e ||
				{}, "blankImage"),
				d = v(e, "checkDuplicates"),
				f = v(e, "scrollContainer"),
				u = v(e, "show"),
				h = {},
				A = v(e, "selector"),
				m = p(A) ? t.querySelectorAll(A) : [A];
			for (n in f && E(f, "scroll", T), c) h[n] = v(e, n);
			for (n = 0; n < m.length; n++) a = m[n], i = d && a[r], a[r] = u ? -1 : 1, i || (l && "IMG" === a.tagName && !a.src && (a.src = l), a[o] = g(
			{}, h), z("init", a), s.push(a));
			T()
		}

		function B()
		{
			w()
		}

		function O()
		{
			L(-1)
		}

		function k()
		{
			z("start", e), E(e, l.updateEvent, T), E(e, l.forceEvent, O), E(t, l.updateEvent, T), l.autoInit && (E(e, l.loadEvent, B), B())
		}
		g(l, c, e[o]), e[o] = w, l = g(e[o], l), g(e[o],
		{
			extend: g,
			isFunction: A,
			onEvent: E,
			offEvent: y,
			triggerEvent: z,
			check: T
		}), "loading" !== t.readyState ? setTimeout(k, 0) : t.addEventListener("DOMContentLoaded", k)
	}(window, document);
}
catch (e)
{
	console.log(e)
}
try
{
	! function()
	{
		var t = window.lazyLoadXT;
		t.selector += ",video,iframe[data-src]", t.videoPoster = "data-poster", t.onEvent(document, "lazyshow", function(e)
		{
			var r = e.target;
			if ("VIDEO" === r.tagName)
			{
				var a = t.srcAttr,
					o = t.isFunction(a),
					i = !1,
					s = r.getAttribute(t.videoPoster);
				s && r.setAttribute("poster", s);
				for (var d = r.childNodes, n = 0; n < d.length; n++)
				{
					var v = d[n],
						c = v.tagName;
					if ("SOURCE" === c || "TRACK" === c)
					{
						var u = o ? a(v) : v.getAttribute(a);
						u && (v.setAttribute("src", u), i = !0)
					}
				}
				i && r.load()
			}
		})
	}()
}
catch (e)
{
	console.log(e)
}
try
{
	! function(t, e, r)
	{
		var s, n, i = t.lazyLoadXT,
			c = e.documentElement,
			a = "srcset" in new Image,
			u = /^\s*(\S+)/,
			o = /\S\s+(\d+)w/,
			d = /\S\s+([\d\.]+)x/,
			l = [0, 1 / 0],
			f = [0, 1],
			A = {
				srcsetAttr: "data-srcset",
				srcsetExtended: !0,
				srcsetBaseAttr: "data-srcset-base",
				srcsetExtAttr: "data-srcset-ext",
				srcsetSizesAttr: "data-srcset-size"
			},
			x = {
				w: 0,
				x: 0
			};
		for (s in A) void 0 === i[s] && (i[s] = A[s]);

		function g(t, e)
		{
			for (var r = [], s = 0; s < t.length; s++) e(t[s]) && r.push(t[s]);
			return r
		}

		function h(t, e)
		{
			for (var r, s = [], n = 0; n < t.length; n++) null !== (r = e(t[n])) && s.push(r);
			return s
		}

		function w(t, e)
		{
			return Math[e].apply(null, h(t, function(t)
			{
				return t[s]
			}))
		}

		function v(t)
		{
			return t[s] >= x[s] || t[s] === n
		}

		function b(t)
		{
			return t[s] === n
		}

		function p(t)
		{
			return t.replace(/^\s+|\s+$/g, "").replace(/(\s+[\d\.]+[wx]),\s*|\s*,\s+/g, "$1 @,@ ").split(" @,@ ")
		}

		function m(e)
		{
			var r = e.getAttribute(i.srcsetAttr);
			if (!r) return !1;
			var a, A, m = h(p(r), function(t)
			{
				return {
					url: u.exec(t)[1],
					w: parseFloat((o.exec(t) || l)[1]),
					x: parseFloat((d.exec(t) || f)[1])
				}
			});
			if (!m.length) return !1;
			if (x = {
					w: t.innerWidth || c.clientWidth,
					x: t.devicePixelRatio || 1
				}, "auto" === e.getAttribute(i.srcsetSizesAttr))
			{
				var E = e.width;
				e.width = x.w, x.w = e.scrollWidth, e.width = E
			}
			for (a in x.w *= x.x, x) s = a, n = w(m, "max"), m = g(m, v);
			for (a in x) s = a, n = w(m, "min"), m = g(m, b);
			return A = m[0].url, i.srcsetExtended && (A = (e.getAttribute(i.srcsetBaseAttr) || "") + A + (e.getAttribute(i.srcsetExtAttr) || "")), A
		}
		i.selector += ",img[" + i.srcsetAttr + "]", i.onEvent(e, "lazyshow", function(t)
		{
			var e = t.target;
			if ("IMG" === e.tagName)
			{
				var r = e.getAttribute(i.srcsetAttr);
				if (r)
					if (a)
					{
						if (i.srcsetExtended)
						{
							var s = e.getAttribute(i.srcsetBaseAttr) || "",
								n = e.getAttribute(i.srcsetExtAttr) || "";
							r = p(r);
							for (var c = 0; c < r.length; c++)
							{
								var u = r[c],
									o = u.indexOf(" ");
								o < 0 && (o = u.length), r[c] = s + u.substr(0, o) + n + u.substr(o)
							}
							r = r.join(", ")
						}
						e.setAttribute("srcset", r)
					}
					else e.lazyLoadXT.srcAttr = m
			}
		})
	}(window, document)
}
catch (e)
{
	console.log(e)
}