"use strict";var precacheConfig=[["/index.html","1b0c1476d63449792535fc05da5956a1"],["/static/css/main.13091308.css","3dc99c290e4b3600466ff1af26fa7b1f"],["/static/js/main.04f15864.js","bf09256bf0aeab61290a70a78d36a46d"],["/static/media/ROCK.fcca3a4a.TTF","fcca3a4a6df1ab46dd94c73f2e912fde"],["/static/media/RhodiumLibre.2a37c5ca.ttf","2a37c5ca2fb32df1aa29a5f96254f4e3"],["/static/media/RosarioRegular.0f18a757.otf","0f18a757079be7ec0000d61cd8bb170f"],["/static/media/SailRegular.1e223dc6.otf","1e223dc67192feeb24e1188315b1c7db"],["/static/media/argosImg.a01cd528.png","a01cd52871c5d9e0cde2a88b332d0834"],["/static/media/bg.b83ffb5a.png","b83ffb5a6b74b5ef38c6ce2a640ee956"],["/static/media/gitLogo.3eb2edd1.png","3eb2edd1e1079c1c7891543f3f50ce06"],["/static/media/gmail.18093f97.png","18093f9759acb1193a68a786f9f21339"],["/static/media/linkedIn.8159bd2b.png","8159bd2b1ddb300842428c0d5a214562"],["/static/media/myImg.21393c7c.jpg","21393c7cae759210becd690882e382c6"],["/static/media/phone.cc55eda4.png","cc55eda4f7e6827fbfb1e25dac4f02df"],["/static/media/pn.a922af46.png","a922af46f4d6ade65aaefdd4dd24e12e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});