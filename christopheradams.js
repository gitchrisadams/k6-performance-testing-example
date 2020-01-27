import { group, sleep } from 'k6';
import http from 'k6/http';

// Version: 1.2
// Creator: WebInspector

export let options = {
    maxRedirects: 0,
};

export default function() {

	group("page_3 - https://www.christopheradams.com/", function() {
		let req, res;
		req = [{
			"method": "get",
			"url": "https://www.christopheradams.com/",
			"params": {
				"headers": {
					"Host": "www.christopheradams.com",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"Upgrade-Insecure-Requests": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
					"Sec-Fetch-User": "?1",
					"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"Sec-Fetch-Site": "none",
					"Sec-Fetch-Mode": "navigate",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://www.christopheradams.com/static/css/2.00eba619.chunk.css",
			"params": {
				"headers": {
					"Host": "www.christopheradams.com",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
					"Accept": "text/css,*/*;q=0.1",
					"Sec-Fetch-Site": "same-origin",
					"Sec-Fetch-Mode": "no-cors",
					"Referer": "https://www.christopheradams.com/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://www.christopheradams.com/static/css/main.c36fa167.chunk.css",
			"params": {
				"headers": {
					"Host": "www.christopheradams.com",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
					"Accept": "text/css,*/*;q=0.1",
					"Sec-Fetch-Site": "same-origin",
					"Sec-Fetch-Mode": "no-cors",
					"Referer": "https://www.christopheradams.com/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://www.christopheradams.com/static/js/2.e06722f1.chunk.js",
			"params": {
				"headers": {
					"Host": "www.christopheradams.com",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
					"Accept": "*/*",
					"Sec-Fetch-Site": "same-origin",
					"Sec-Fetch-Mode": "no-cors",
					"Referer": "https://www.christopheradams.com/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://www.christopheradams.com/static/js/main.4b803aa9.chunk.js",
			"params": {
				"headers": {
					"Host": "www.christopheradams.com",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
					"Accept": "*/*",
					"Sec-Fetch-Site": "same-origin",
					"Sec-Fetch-Mode": "no-cors",
					"Referer": "https://www.christopheradams.com/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		}];
		res = http.batch(req);
		sleep(5.36);
		req = [{
			"method": "get",
			"url": "https://www.google.com/recaptcha/api.js",
			"params": {
				"cookies": {
					"HSID": "AAgV2FUaHWEB2q6Sa",
					"SSID": "AXWZTfSNEmcj3y6Yr",
					"APISID": "9AELeBODQBumYZ4F/AEnakj15Lc_2ToJC-",
					"SAPISID": "xlmjVd3iKhq95rnk/A9WCAmgq3dC_Wpr08",
					"__Secure-HSID": "AAgV2FUaHWEB2q6Sa",
					"__Secure-SSID": "AXWZTfSNEmcj3y6Yr",
					"__Secure-APISID": "9AELeBODQBumYZ4F/AEnakj15Lc_2ToJC-",
					"__Secure-3PAPISID": "xlmjVd3iKhq95rnk/A9WCAmgq3dC_Wpr08",
					"OGPC": "19015603-1:",
					"SID": "swcx3qkU3fCPHqR3gTEgZjAYb8KRn81MXnV5qyLFQWWeIrVhP4pqdtK9935gfA7zBf7Mtw.",
					"__Secure-3PSID": "swcx3qkU3fCPHqR3gTEgZjAYb8KRn81MXnV5qyLFQWWeIrVh8Rqz5CEBnGFMu0UNwedAWQ.",
					"ANID": "AHWqTUkl9vrZmyeJluHlZEUHcirAWAudDmXL239XRN1u3j2k_b4Vg9A5vGgSyGhr",
					"UULE": "a+cm9sZToxIHByb2R1Y2VyOjEyIHByb3ZlbmFuY2U6NiB0aW1lc3RhbXA6MTU4MDEzOTg4NDg5NTAwMCBsYXRsbmd7bGF0aXR1ZGVfZTc6MzM3NTY5MDY2IGxvbmdpdHVkZV9lNzotODQzOTIyNTI3fSByYWRpdXM6MTQyNjA=",
					"1P_JAR": "2020-1-27-15",
					"NID": "196=pG9ezHjEUGLLRTLqZDxHuB8-9Q9LMhu1cc-P9cpMjrTs1XwYfkHX2ob9d79mlrXg-wLgZy_6wRZslan48AwEsX7vSfI81oVJeW0Pikz4EpThSpilKz_OzAdDMaJX8FYrLR8nwywnxEKf67CKhWqPLDaP3vDqq7WtvaEAUPjzNKr1kXCuz7xSTU2_roj87rBtId-6rSL8kyH0ZN-tESlfg8ZrcY6r2g0g4XjZpFwDJUHjkaBCgNPPuJJZP_Q",
					"SIDCC": "AN0-TYtl_iMlkoEK4gviUGucUzDNi1xrZfCnAuyM6lMMsT9X3ymWTqS4H2q0vxdDFhl2eYpE_RM7"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
					"accept": "*/*",
					"x-client-data": "CJG2yQEIorbJAQjEtskBCKmdygEIt6rKAQjLrsoBCL2wygEI97TKAQiYtcoBCO21ygEI4bbKARirpMoBGJSyygE=",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"referer": "https://www.christopheradams.com/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://www.christopheradams.com/images/ChristopherAdamswhiteCropped.png",
			"params": {
				"headers": {
					"Host": "www.christopheradams.com",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Sec-Fetch-Site": "same-origin",
					"Sec-Fetch-Mode": "no-cors",
					"Referer": "https://www.christopheradams.com/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://www.christopheradams.com/images/chrisheadshot.jpg",
			"params": {
				"headers": {
					"Host": "www.christopheradams.com",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Sec-Fetch-Site": "same-origin",
					"Sec-Fetch-Mode": "no-cors",
					"Referer": "https://www.christopheradams.com/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://www.christopheradams.com/images/amchris.jpg",
			"params": {
				"headers": {
					"Host": "www.christopheradams.com",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Sec-Fetch-Site": "same-origin",
					"Sec-Fetch-Mode": "no-cors",
					"Referer": "https://www.christopheradams.com/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://www.christopheradams.com/images/dogemoji32px.png",
			"params": {
				"headers": {
					"Host": "www.christopheradams.com",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Sec-Fetch-Site": "same-origin",
					"Sec-Fetch-Mode": "no-cors",
					"Referer": "https://www.christopheradams.com/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://www.christopheradams.com/images/meetup-wordmark-red.png",
			"params": {
				"headers": {
					"Host": "www.christopheradams.com",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Sec-Fetch-Site": "same-origin",
					"Sec-Fetch-Mode": "no-cors",
					"Referer": "https://www.christopheradams.com/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://www.christopheradams.com/images/atari2600-256px.png",
			"params": {
				"headers": {
					"Host": "www.christopheradams.com",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Sec-Fetch-Site": "same-origin",
					"Sec-Fetch-Mode": "no-cors",
					"Referer": "https://www.christopheradams.com/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://www.christopheradams.com/images/logo.svg",
			"params": {
				"headers": {
					"Host": "www.christopheradams.com",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Sec-Fetch-Site": "same-origin",
					"Sec-Fetch-Mode": "no-cors",
					"Referer": "https://www.christopheradams.com/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://www.christopheradams.com/images/heart.svg",
			"params": {
				"headers": {
					"Host": "www.christopheradams.com",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Sec-Fetch-Site": "same-origin",
					"Sec-Fetch-Mode": "no-cors",
					"Referer": "https://www.christopheradams.com/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://www.gstatic.com/recaptcha/releases/RDiPdrU_gv1XhhWy6nqfMf9O/recaptcha__en.js",
			"params": {
				"cookies": {
					"1P_JAR": "2020-01-16-18"
				},
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
					"accept": "*/*",
					"x-client-data": "CJG2yQEIorbJAQjEtskBCKmdygEIt6rKAQjLrsoBCL2wygEI97TKAQiYtcoBCO21ygEI4bbKARirpMoBGJSyygE=",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"referer": "https://www.christopheradams.com/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		}];
		res = http.batch(req);
		sleep(5.21);
		req = [{
			"method": "get",
			"url": "https://www.christopheradams.com/manifest.json",
			"params": {
				"headers": {
					"Host": "www.christopheradams.com",
					"Connection": "keep-alive",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
					"Accept": "*/*",
					"Sec-Fetch-Site": "same-origin",
					"Sec-Fetch-Mode": "cors",
					"Referer": "https://www.christopheradams.com/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://www.christopheradams.com/favicon.ico",
			"params": {
				"headers": {
					"Host": "www.christopheradams.com",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Sec-Fetch-Site": "same-origin",
					"Sec-Fetch-Mode": "no-cors",
					"Referer": "https://www.christopheradams.com/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		}];
		res = http.batch(req);
		sleep(3.83);
		req = [{
			"method": "get",
			"url": "https://www.christopheradams.com/images/policeExamAppScreenshot.png",
			"params": {
				"headers": {
					"Host": "www.christopheradams.com",
					"Connection": "keep-alive",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Sec-Fetch-Site": "same-origin",
					"Sec-Fetch-Mode": "no-cors",
					"Referer": "https://www.christopheradams.com/portfolio",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://www.christopheradams.com/images/oceansmap.png",
			"params": {
				"headers": {
					"Host": "www.christopheradams.com",
					"Connection": "keep-alive",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Sec-Fetch-Site": "same-origin",
					"Sec-Fetch-Mode": "no-cors",
					"Referer": "https://www.christopheradams.com/portfolio",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://www.christopheradams.com/images/rpslogo.png",
			"params": {
				"headers": {
					"Host": "www.christopheradams.com",
					"Connection": "keep-alive",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Sec-Fetch-Site": "same-origin",
					"Sec-Fetch-Mode": "no-cors",
					"Referer": "https://www.christopheradams.com/portfolio",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://www.christopheradams.com/images/spacexgraphql.png",
			"params": {
				"headers": {
					"Host": "www.christopheradams.com",
					"Connection": "keep-alive",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Sec-Fetch-Site": "same-origin",
					"Sec-Fetch-Mode": "no-cors",
					"Referer": "https://www.christopheradams.com/portfolio",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		}];
		res = http.batch(req);
		sleep(17.63);
		req = [{
			"method": "get",
			"url": "https://www.christopheradams.com/images/resume1.png",
			"params": {
				"headers": {
					"Host": "www.christopheradams.com",
					"Connection": "keep-alive",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Sec-Fetch-Site": "same-origin",
					"Sec-Fetch-Mode": "no-cors",
					"Referer": "https://www.christopheradams.com/resume",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://www.christopheradams.com/images/resume2.png",
			"params": {
				"headers": {
					"Host": "www.christopheradams.com",
					"Connection": "keep-alive",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Sec-Fetch-Site": "same-origin",
					"Sec-Fetch-Mode": "no-cors",
					"Referer": "https://www.christopheradams.com/resume",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		}];
		res = http.batch(req);
		// Random sleep between 20s and 40s
		sleep(Math.floor(Math.random()*20+20));
	});

}
