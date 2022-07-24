/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d9301901a5e390d86488c7ae39ae8485"
  },
  {
    "url": "assets/css/0.styles.a6776394.css",
    "revision": "0cf9031d8e25e7b1ef634850eba4ca18"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.d1e879a0.js",
    "revision": "b5326cd3d3548377ca4628442fb45e52"
  },
  {
    "url": "assets/js/10.4d733ea2.js",
    "revision": "bb26265b302135e074eb7400be52e642"
  },
  {
    "url": "assets/js/11.ef746ede.js",
    "revision": "966dd5eab6f328b65f4ddd680a46e0c9"
  },
  {
    "url": "assets/js/12.4cc9c99f.js",
    "revision": "9ac2f230b43a1505111309b4e2d66143"
  },
  {
    "url": "assets/js/13.9c122b31.js",
    "revision": "bbb1d688731d3f77d9584267dd5a6eab"
  },
  {
    "url": "assets/js/14.acac3f04.js",
    "revision": "e68dd2e637e51c551911118a9acea6ea"
  },
  {
    "url": "assets/js/15.74879778.js",
    "revision": "15a6106ce72939118e5e452286208c55"
  },
  {
    "url": "assets/js/16.8e39ac90.js",
    "revision": "5efac7b825b1d840f231ba40626a9c45"
  },
  {
    "url": "assets/js/17.6ac66727.js",
    "revision": "142f6e88cbec190daf648effaaf004f4"
  },
  {
    "url": "assets/js/18.a76977ca.js",
    "revision": "6622710524b8b26aa7c18c3843fbd06f"
  },
  {
    "url": "assets/js/4.620f8225.js",
    "revision": "f2833b09be13701999bed8a90947cc5f"
  },
  {
    "url": "assets/js/5.4a08826e.js",
    "revision": "1271cf47e6993c434bd67cbb5ea17551"
  },
  {
    "url": "assets/js/6.da361a5a.js",
    "revision": "e9d64c920beda261a774114bb13b9d8e"
  },
  {
    "url": "assets/js/7.0c009bd3.js",
    "revision": "aced2a84ca19cbbbc660c2300eae049d"
  },
  {
    "url": "assets/js/8.1c1995c7.js",
    "revision": "885e4b234295b6121d213af01ae51852"
  },
  {
    "url": "assets/js/9.7d4f4532.js",
    "revision": "6e5e19efc90053ebc2da57d003f1b99c"
  },
  {
    "url": "assets/js/app.10193b96.js",
    "revision": "2ddffa70da3ac660b0c27722e53cb13c"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.f362bf99.js",
    "revision": "471aa90869104f9121130a6c8fae7c63"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "c2377cf9a9a683b16c298993d1afc94f"
  },
  {
    "url": "categories/java/index.html",
    "revision": "cca9e2be8c85e11f3f6674dd5bcf1267"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "c22b0696708ed804f9b620138aca6df3"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "4172ca835efadee382c1723ad2da15cd"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "1b0ef01372feedcd440413660a834505"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "bd4e9cab31fa64c4d267e1e69bab982f"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "ef44522a0ced9f03270ed6cd6a7a0dd5"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "2b307ec4ea9ad29f3f91e1bd2f3adc5b"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "ecb4858af0cc50ae1ce7770717217a89"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "3c9f1d4969d0f5059f50e463aeb74a7c"
  },
  {
    "url": "tags/js/index.html",
    "revision": "a6b0184ebda4821e817e314a822846fa"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "2d9a93ebedd0438cd2e093fc359614ff"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "9b2aa796007fec4b6de582857f608565"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "444f9cef4bd3935f1214307097cf2c7e"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "9fa06c1e18dd1a3f655b44ac72daf3d4"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "9c5bf15758b0152a3169db27ae2bd7c6"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "0b8d4f027c8043b76d6b629739c53c58"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "25a6ad28cbdf887cac21730aae0f1cdf"
  },
  {
    "url": "timeline/index.html",
    "revision": "ad07462441d5db7e30d5400eda931690"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "1ad767c09b7d0dfc08e6eb4c2c2ff591"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "74c538cae496fbc5460ebc1b1b69d86b"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "b40f6dc5c8dc2f907175ecb0f1594136"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "bf4bfc83f84cd434399d8ca4ac43f313"
  },
  {
    "url": "生活分享/life.html",
    "revision": "d885d6550a696914319d723334a88312"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
