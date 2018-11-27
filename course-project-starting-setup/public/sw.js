self.addEventListener('install', function(event) {
	console.log('[Service Worker] Installing Service Worker...', event)

	// need to do this to ensure that the caches are done
	event.waitUntil(
		caches.open('static') // "static" is the name of the cache that I'm opening / creating
			.then(function(cache) {
				console.log('[Service Worker] Precaching App Shell');
				// cache.add('/'); // think of it paths, not specific files
				// cache.add('/src/js/app.js') // when doing this, it is a key value pair
				// cache.add('/index.html');
				cache.addAll([
					'/',
					'/index.html',
					'/src/js/app.js',
					'/src/js/feed.js',
					'/src/js/promise.js',
					'/src/js/fetch.js',
					'/src/js/material.min.js',
					'/src/css/app.css',
					'/src/css/feed.css',
					'/src/images/main-image.jpg',
					'https://fonts.googleapis.com/css?family=Roboto:400,700',
					'https://fonts.googleapis.com/icon?family=Material+Icons',
					'https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css'
				])
			})
	);
});

// Is one comment enough?

self.addEventListener('activate', function(event) {
	console.log('[Service Worker] Activating Service Worker...', event)
	return self.clients.claim();
})

self.addEventListener('fetch', function(event) {
	console.log('[Service Worker] Fetching something ....', event.request.url);
	event.respondWith(
		caches.match(event.request)
			.then(function(response) {
				console.log(response);
				if(response) {
					return response;
				} else {
					return fetch(event.request)
				}
			})
	);
});
