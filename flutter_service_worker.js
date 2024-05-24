'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "66bdbf20ccdbfb08cb969e0584d80619",
".git/config": "de0c3d539ef2bbf2edd55d94bffe072e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "aaceda3e6823c871ab9d69591b515718",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "96ac079cf82400c6e83cd56d238a8da6",
".git/logs/refs/heads/master": "96ac079cf82400c6e83cd56d238a8da6",
".git/logs/refs/remotes/origin/master": "71ac3819892ce824cc6ec86dd0f8531b",
".git/objects/00/872401d541499f41b800154c6bfa5c529f8e29": "16076fc3308dbaba6d9a780b8148708a",
".git/objects/09/f5b4775c308b08f59accb52ef4b7df702f47be": "11c235ec9361928f7f643ae55cb5c2f8",
".git/objects/0c/5978ec3a471c99b23965b8d0cc2d6eabb89371": "55cd68bca9583f269ddab395eaf276d7",
".git/objects/0c/827fc6a0066872069d12b28a24626dab580083": "d2e4d6f4b94d30ab8e4ab119cb6508c8",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/0c43d028db22a5af652351408dc2e7a4da8cf2": "2f3db233423107e287751bc8a478345e",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1c/72c95621ec0652009cf30375d502e77539e440": "f4c4aceb6be2cd99e5a113e8c73e9ca7",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/8f7eb464ad8971b3925d46f228555076d8f6f9": "9e190eeaa973fa8cece4477dd83f6ef6",
".git/objects/2d/846230655afb66251c4d2a179b600e8777bba7": "8563a329784f2786cc7b9f0cb8d250de",
".git/objects/31/3c92c8abae4c3ed1d08a7bb619ae9cdaed398d": "782cba688caecd9cca8c3093ece5c700",
".git/objects/39/696cff4643aedb1289f9c006bc6fa50c69f718": "6cc4328d7421b6a272fd3034879c4a67",
".git/objects/3d/319f46ea8a797bc182622952a1c1dfbab717bd": "964e2db6b615cad5767be20bb4a61dac",
".git/objects/46/40cc037af7f2d31fe2d12405eca10bffd3a0dd": "163c3469251440a7d5c6f44dd40b0a2a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4a/2986c6a3d0f2f103858a541ea0405ada2b8878": "006b2d18b69c9b6134d1a874f4a723bd",
".git/objects/4f/3c21a85fbcb652843c9c0bf5b93255f9ff25a1": "89b69f21a0ef24c176c78f4ac698f7c3",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/65/ffd747506885bab07ac5f65aa01586238caf50": "a8f6db240b7d58907619337598e19ea3",
".git/objects/67/2c7aade60469cf8863c0171ee838ccd4ac7472": "a84f18a3b4fb2aa0b0d5acf5539d528c",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/7b/2cf64ed49da4a759ad100e2abf1cae4a554369": "c9b14a16640ec521f9f5750516a35af3",
".git/objects/7d/48637370e2b9872d7ccf967bddc49269e443ec": "dd2cfbe698540cfea462828757f12be3",
".git/objects/82/12f41ae8c86024fc05d8183b6a1113fa9f1e8e": "aefca3d15b9f35ba82519be7b2e6870f",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9c/dcad77f60ca83a33b5cd14cd7cd958b4a09e43": "87e104d0c0fc61cd9483ea6e80c2d328",
".git/objects/9e/b91c659644358e7cc8ec26c35b55b0646a01d9": "0ad0519f919a138e90dbd8cbe35338a9",
".git/objects/a5/45f558ba277f0830c980b85dec7d57197f5461": "b9a6d562c1caaed9d54930cfb68ce07b",
".git/objects/ab/acd680d681368a4d11d6c75f39c8193bee5473": "6d08b1ee27012694c72b0db1efb8398b",
".git/objects/ac/e54f3fac17f28682ce18feb8de77f6fb26959b": "ed8b66f3b1d2f4c64d58f5486f3c7a27",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/c97b7c37ccd5314c4d3b776750b54f4d88ed03": "dfb9511c1b47682c4506877e94ea3714",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cb/ca3003be3e46fff2b0e354eded44fce89e7f0a": "c5575a0600b3e9f21b483580d2638c85",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e4/dcb50b1acc3e2acd1af03301753babe6d677ec": "0a32586dad6236c639f96519cb625951",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/a8e959ebc54ac80a2bdef5aac7bd8bd9859f38": "919edb3d3e8a3a1ab8352b18dcbfaa29",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/refs/heads/master": "93ef5bf0ddcd50ba464a3cdde49e86c9",
".git/refs/remotes/origin/master": "93ef5bf0ddcd50ba464a3cdde49e86c9",
"assets/AssetManifest.bin": "f2cb20e42e312d7c10dd8bdec87403d9",
"assets/AssetManifest.bin.json": "c918213d816f7e6b31e82a36c857018e",
"assets/AssetManifest.json": "f5912e1e531c81d01ed3f7856155f084",
"assets/assets/avator.png": "95a68d5b6177dd2972b2d294eb27a69e",
"assets/assets/bg.jpeg": "c6449162dc3940daa640a43101cfd66c",
"assets/assets/cetificate/flutterceti.png": "2f025625eba29ed63650852920139b1c",
"assets/assets/cetificate/foundationgusto.jpg": "5036379ae27959e6690d24a72e400a2d",
"assets/assets/profile/myprofile.jpg": "42d6cacdf60370e2c4a16666685acca0",
"assets/assets/profile/profile.jpg": "a7ebfc6dd1e1ad2ca76892d55a81a9f1",
"assets/assets/profile/profile.png": "b94cdc1080fb6622b9a3d2b2a5a466d3",
"assets/assets/social/facebook.png": "bd24215333609360d8a6a6965ece1ccc",
"assets/assets/social/github.png": "c6af250b526a618c66513a831f724e3d",
"assets/assets/social/linkin.png": "6643a1fab21c962ce34f876e08ef8321",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "328902ec05ad89ae7700d2900d497690",
"assets/NOTICES": "86bbfe8cb961d60b4465930999763383",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "fdabc6cdb884f84d4be3f4cbe65e0738",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e0f46a1cf1f81e98918dbf0d642bde32",
"/": "e0f46a1cf1f81e98918dbf0d642bde32",
"main.dart.js": "97f37219a61b6a2864e7ca527b25b9c8",
"manifest.json": "1ed914ddf2126f08ac088200a495e062",
"version.json": "039f2b2f43b5589e77eadd5b3c069e5a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
