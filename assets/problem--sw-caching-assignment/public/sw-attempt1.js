// var vers = '2';
// var CACHE_STATIC_NAME = 'static-v' + vers;
// var CACHE_DYNAMIC_NAME = 'dynamic-v' + vers;













// self.addEventListener('install', function(event) {
// 	console.log('[Service Worker] Installing Service Worker...', event)

// 	// need to do this to ensure that the caches are done
// 	event.waitUntil(
// 		caches.open(CACHE_STATIC_NAME) // "static" is the name of the cache that I'm opening / creating
// 			.then(function(cache) {
// 				console.log('[Service Worker] Precaching App Shell');
// 				// cache.add('/'); // think of it paths, not specific files
// 				// cache.add('/src/js/app.js') // when doing this, it is a key value pair
// 				// cache.add('/index.html');
// 				cache.addAll([
// 					'/',
// 					'/index.html',
// 					'/src/js/main.js',
// 					'/src/js/material.min.js',
// 					'/src/css/app.css',
// 					'/src/css/dynamic.css',
// 					'/src/css/main.css',
// 					'/src/images/main-image.jpg',
// 					'https://fonts.googleapis.com/css?family=Roboto:400,700',
// 					'https://fonts.googleapis.com/icon?family=Material+Icons',
// 					'https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css'
// 				])
// 			})
// 	);
// });
// // asdfasdfasdf

// self.addEventListener('activate', function(event) {
// 	console.log('[Service Worker] Activating Service Worker...', event)
// 	event.waitUntil(
// 		caches.keys()
// 			.then(function(keylist) {
// 				return Promise.all(keylist.map(function(key) {
// 					if(key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
// 						console.log('[Service Worker] Removing old cache', key);
// 						return caches.delete(key);
// 					}
// 				}))
// 			})
// 	);
// 	return self.clients.claim();
// })

// self.addEventListener('fetch', function(event) {
// 	console.log('[Service Worker] Fetching something ....', event.request.url);
// 	event.respondWith(
// 		caches.match(event.request)
// 			.then(function(response) {
// 				if(response) {
// 					return response;
// 				} else {
// 					return fetch(event.request)
// 						.then(function(res) {
// 							return caches.open(CACHE_DYNAMIC_NAME)
// 								.then(function(cache) {
// 									cache.put(event.request.url, res.clone());
// 									return res;
// 								});
// 						});
// 				}
// 			})
// 	)
// });










// 2) Identify the AppShell (i.e. core assets your app requires to provide its basic "frame")
// 3) Precache the AppShell
// self.addEventListener('install', function(event) {
// 	console.log('[Service Worker] Installing Service Worker...', event)

// 	event.waitUntil(
// 		caches.open(CACHE_STATIC_NAME) // "static" is the name of the cache that I'm opening / creating
// 			.then(function(cache) {
// 				console.log('[Service Worker] Precaching App Shell');
// 				// cache.add('/'); // think of it paths, not specific files
// 				// cache.add('/src/js/app.js') // when doing this, it is a key value pair
// 				// cache.add('/index.html');
// 				cache.addAll([
// 					'/',
// 					'/index.html',
// 					'/src/js/main.js',
// 					'/src/js/material.min.js',
// 					'/src/css/app.css',
// 					'/src/css/dynamic.css',
// 					'/src/css/main.css',
// 					'/src/images/main-image.jpg',
// 					'https://fonts.googleapis.com/css?family=Roboto:400,700',
// 					'https://fonts.googleapis.com/icon?family=Material+Icons',
// 					'https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css'
// 				])
// 			})
// 	);
// });

// self.addEventListener('activate', function(event) {
// 	console.log('[Service Worker] Activating Service Worker...', event)
// 	return self.clients.claim();
// });

// // ----------------------------------------------
// // 				ORIGINAL Fetch
// // - - - - - - - - - - - - - - - - - - - - - - - 
// // self.addEventListener('fetch', function(event) {
// // 	console.log('[Service Worker] Fetch Event....', event)
// // 	event.respondWith(fetch(event.request));
// // })

// // 4) Add Code to fetch the precached assets from cache when needed
// self.addEventListener('fetch', function(event) {
// 	console.log('[Service Worker] Fetching something ....', event.request.url);
// 	event.respondWith(
// 		caches.match(event.request)
// 			.then(function(response) {
// 				console.log(response);
// 				if(response) {
// 					return response;
// 				} else {
// 					return fetch(event.request)
// 				}
// 			})
// 	);
// });




