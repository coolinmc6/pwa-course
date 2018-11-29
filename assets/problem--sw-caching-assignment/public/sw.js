var CACHE_STATIC_NAME = 'static3';
var CACHE_DYNAMIC_NAME = 'dynamic2';

self.addEventListener('install', function(event) {
	console.log('Installing event', event)
	// we use waitUntil because we don't want to finish the installation until we are done caching
	event.waitUntil(
		caches.open(CACHE_STATIC_NAME)
			.then(function(cache) {
				cache.addAll([
				  '/',
				  '/index.html',
				  '/src/css/app.css',
				  '/src/css/main.css',
				  '/src/js/main.js',
				  '/src/js/material.min.js',
				  'https://fonts.googleapis.com/css?family=Roboto:400,700',
				  'https://fonts.googleapis.com/icon?family=Material+Icons',
				  'https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css'
				]);

			})
	)
});

self.addEventListener('activate', function(event) {
	event.waitUntil(
		caches.keys()
			.then(function(keyList) {
				return Promise.all(keyList.map(function(key) {
					if(key !== CACHE_STATIC_NAME) {
						return caches.delete(key);
					}
				}))
			})
	)
});


self.addEventListener('fetch', function(event) {
	console.log('Fetch is happening....', event);
	event.respondWith(
		caches.match(event.request)
			.then(function(response) {
				if(response) {
					return response;
				} else {
					return fetch(event.request)
						.then(function(res) {
							return caches.open(CACHE_DYNAMIC_NAME)
								.then(function(cache) {
									cache.put(event.request.url, res.clone());
									return res;
								})
						})
						.catch(function(err) {

						})
				}
			})
	)
});

