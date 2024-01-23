'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"index.html": "24beb017047505a3acd5ac8e0cba2b10",
"/": "24beb017047505a3acd5ac8e0cba2b10",
"assets/AssetManifest.bin": "926527a0d7ab73249b51a7c243b01d51",
"assets/fonts/MaterialIcons-Regular.otf": "2b2da138a4d5038b5c42214d89a39f29",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/assets/tcg-placeholder-icon.svg": "e0c6feb0338b0e2e88285bbbcbb3b09e",
"assets/assets/tcg%2520placeholder%2520icon.png": "70d83a577e21c520c2f74390ba72e3a9",
"assets/assets/UI%2520sketches/app%2520bar%2520sketch.jpg": "d438bd536cd6b3cdcd6c9c09d3f839a8",
"assets/assets/UI%2520sketches/task%2520view.jpg": "2958d45c8aefefdc71cef8eb987f232b",
"assets/assets/UI%2520sketches/Basic%2520Task%2520List%2520sketch.jpg": "3bf3fb181f0996e646156cf13a9b2662",
"assets/assets/UI%2520sketches/calendar/calendar%2520view%25201.jpg": "eefeb9a3996ba140e177266a346b1080",
"assets/assets/UI%2520sketches/calendar/CRUD%2520calendar%2520events%2520in-line.png": "3d172b80e33a01db8ded5592ff24e52c",
"assets/assets/UI%2520sketches/calendar/CRUD%2520calendar%2520events%2520side%2520panel.png": "966b7f1ad16a7f0f146fef79ddbb6728",
"assets/assets/UI%2520sketches/calendar/calendar%2520dropdown%2520appbar%2520with%2520line%2520options.png": "8842e5dfe44ee78e915c61d55c265ee4",
"assets/assets/UI%2520sketches/calendar/calendar%2520scaled%2520schedule%2520view.png": "df2a2bfbafea53891a558d15e88892d9",
"assets/assets/UI%2520sketches/calendar/calendar%2520standard%2520calendar%2520view.png": "328f5d767ddc4ddfc314fd2481f6f32b",
"assets/assets/UI%2520sketches/calendar/calendar%2520date%2520selection%2520popup.png": "d7c0444c225561adbffaf6e65d4d9b7e",
"assets/assets/UI%2520sketches/calendar/calendar%2520up%2520button%2520and%2520views%2520from%2520it.png": "5dff941a7e1d4e9b0eaa0b2d71bf0d6e",
"assets/assets/UI%2520sketches/calendar/CRUD%2520UI%2520operations%2520sketch%2520template.kra": "95c8a950b8659b4728ed4a871658dcbb",
"assets/assets/UI%2520sketches/calendar/calendar%252015-minute%2520increments%2520view.png": "1a4edafcffd373e6970c6c698b13f006",
"assets/assets/UI%2520sketches/calendar/calendar%2520view%25202.jpg": "6a2cabd3ae2cdf58902b2e53fe2d65e8",
"assets/assets/UI%2520sketches/calendar/CRUD%2520calendar%2520events%2520pop-up%2520card.png": "0c14639b578c52a8abad379e0126dcca",
"assets/assets/UI%2520sketches/Createedit%2520activation%2520task%2520options_220729_100919.jpg": "84caf04f29c926030978c5a94cd9ce6d",
"assets/assets/UI%2520sketches/goal%2520view.jpg": "1cbf11c73f48a518de3caa8f941fcdb8",
"assets/assets/UI%2520sketches/tab%2520bar%2520sketch.jpg": "fd8e10e7e0239334947984b1d002ba70",
"assets/assets/UI%2520sketches/Createedit%2520data%2520entry%2520options_220729_102918.jpg": "ed853d4aa3a9e14be65ee286ff3fc254",
"assets/assets/UI%2520sketches/Standard%2520Task%2520List%2520sketch.jpg": "dc27493d8eafb04388480531b2894012",
"assets/assets/UI%2520sketches/DateTime%2520Selector%2520sketch.png": "3266a4183edbd11a758aa72540fd80e7",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/NOTICES": "1c481e1b2156bc0ab062c24abf69ae5e",
"assets/AssetManifest.json": "b0e5dd3015d65f2659a87947f172b048",
"assets/AssetManifest.bin.json": "73d6f63a9d453de8eaf5bda6f80a6b8d",
"main.dart.js": "b2cdb582d836053d6eba7f33155e4f35",
"version.json": "4f9b9c1c30e3e3f8df065d3d7aa2f55e",
"manifest.json": "35c1b495ed6d03108ec019c1e93c18e0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
