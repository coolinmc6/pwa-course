<a name="top"></a>
# Complete Guide to Progressive Web Apps

## Table of Contents

- [PWA Links](#progressive-web-app-links)
- [Getting Started](#getting-started)
- [Understanding the App Manifest](#understanding-the-app-manifest)
- [The Service Workers](#the-service-workers)
- [Promise and Fetch](#promise-and-fetch)
- [Service Workers - Caching](#service-workers---caching)
- [Service Workers - Advanced Caching](#service-workers---advanced-caching)
- [IndexDB and Dynamic Data](#indexdb-and-dynamic-data)
- [Creating a Responsive User Interface (UI)](#creating-a-responsive-user-interface-ui)
- [Background Sync](#background-sync)
- [Web Push Notifications](#web-push-notifications)
- [Native Device Features](#native-device-features)
- [Service Worker Management with Workbox](#service-worker-management-with-workbox)
- [SPAs and PWAs](#spas-and-pwas)

## Progressive Web App Links

**General PWA Links**

- [https://infrequently.org/2016/09/what-exactly-makes-something-a-progressive-web-app/](https://infrequently.org/2016/09/what-exactly-makes-something-a-progressive-web-app/)

**Manifest Links**

- [Add to Home Screen](https://developers.google.com/web/fundamentals/app-install-banners/)
- [MDN on Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)
- [Google Web App Manifest Explanation](https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/)
- [Add to Home Screen](https://developers.google.com/web/fundamentals/app-install-banners/)

**Promise Links**

- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [https://developers.google.com/web/fundamentals/primers/promises](https://developers.google.com/web/fundamentals/primers/promises)

**Fetch Links**

- [https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [https://davidwalsh.name/fetch](https://davidwalsh.name/fetch)
- [https://developers.google.com/web/updates/2015/03/introduction-to-fetch](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)


## Getting Started

### What are Progressive Web Apps (PWAs)?

- progressively enhance web apps to look and feel like native apps
- They should be the following
	+ reliable: load fast and provide offline functionality
	+ fast: respond quickly to user actions
	+ engaging: feel like a native app

[back to top](#top)

### PWAs vs. Native Mobile Apps

- Avg smartphone user: 87% in Native Apps vs. 13% in Mobile Web
- Pro Native App:
	+ People spend time in native apps because of push notifications
	+ home screen icons make access easy
	+ Access to natice device features like camera
	+ and possibly work offline
- Con Native App:
	+ learn two different languages
	+ Reach of Apps vs. Mobile Web: 3.3M active usrs vs. 8.9M monthly active users (avg on top 1,000 apps)
- PWA's vs Native Apps vs "Tradtional" Web Pages
	+ PWAs have the best of both worlds: capability of phone features and reach

[back to top](#top)

### Demo PWA

- Google: Lighthouse Chrome => extension to run a PWA audit
- Access it in the "Audits" tab in Chrome DevTools


[back to top](#top)

### PWA Core Building Blocks

- Service Workers
	+ JavaScript running in the background processes
	+ Caching / Offline Support => background sync; sync user data in the background
	+ Enable other PWA features => web Push (mobile-like Push Notifications)
- Application Manifest
	+ Allows addition to homescreen
- Responsive Design
	+ App / Layout should work and look good across devices
- Geolocation API => access user location
- Media Api => access device camera and microphone

[back to top](#top)

### Comparing PWAs and SPAs (Single Page Application)?

- SPAs != PWA ==> wrong comparison
- they are completely separate
- SPAs can be turned into PWAs like regular websites can be turned into PWAs
- SPAs
	+ Powered by JavaScript
	+ Highly reactive (to user input)
	+ only one HTML file sent to browser
- PWAs
	+ uses a lot of JavaScript (but works without it)
	+ Aims to have high Reactivity
	+ Works with multiple Files

[back to top](#top)

### What is Progrsesive Enhancement

- Progressive Enhancement means you can progressively enhance your web application
- You can add some features to existing (legacy) App
- Existing "modern" App can implement some core PWA features
- Upcoming project could fully implement as PWA right from the start

[back to top](#top)

### Course Outline

- Application Manifest
- Service Works
- Promise and Fetch API
- Service Workers - Caching
- Service Workers - Advanced Caching
- IndexDB and Dynamic Data
- Creating a Responsive User Interface (UI)
- Background Sync
- Web Push Notifications
- Native Device Features
- Service Worker Management with Workbox
- SPAs and PWAs

[back to top](#top)

### Course Project Setup

- look into http server

## Understanding the App Manifest

### Using an App Manifest to Make Your Web App Installable

- Why?
	+ with the home screen icon, we increase user engagement by not having to type in the URL

[back to top](#top)

### Adding the Manifest

- You have to add the file
- Added the `manifest.json` file to each HTML page that is part of your web app

```html
<head>
	<!-- 

	CODE 

	-->
	<link rel="manifest" href="/manifest.json">
</head>
```

[back to top](#top)

### Understanding App Manifest Properties

- Manifest Properties: JSON File
	+ name: Long name of app (e.g. on Splashscreen)
	+ short_name: Short name of app (e.g. below icon)
	+ start_url: which page to load on startup
	+ scope: which pages are included in "PWA Experience"
		* "scope": "." => all pages
	+ display: Should it look like a standalone app?
		* "display": "standalone" => make it look like an app
	+ background_color: Background whilst loading & on Splashscreen
		* "background_color": "#fff"
	+ theme_color: Theme color (e.g. on top bar in task switcher)
	+ description: Description (short description of app; users will see this)
	+ dir: Direction of your app
		* "dir": "ltr" => left-to-right
	+ lang: Main language of app
		* "lang": "en-US"
	+ orientation: "portrait-primary": set (and enforce) default orientation
	+ icons: Configure icons (e.g. on homescreen)
		* "icons": [] - it's an array
		* each icon is an object with three properties:
			- src
			- type
			- sizes
				+ recommend having multiple sizes 48x48, 96x96, and up
	+ related_applications: Related applications, Native, that you might want users to download

[back to top](#top)

### Adding Properties to the App Manifest

- This is an example manifest:

```json
{
	"name": "Instagram as Progressive Web App",
	"short_name": "PWAGram",
	"icons": [
		{
			"src": "/src/images/icons/app-icon-48x48.png",
			"type": "image/png",
			"size": "48x48"
		},
		{
			"src": "/src/images/icons/app-icon-96x96.png",
			"type": "image/png",
			"size": "96x96"
		},
		{
			"src": "/src/images/icons/app-icon-144x144.png",
			"type": "image/png",
			"size": "144x144"
		},
		{
			"src": "/src/images/icons/app-icon-192x192.png",
			"type": "image/png",
			"size": "192x192"
		},
		{
			"src": "/src/images/icons/app-icon-256x256.png",
			"type": "image/png",
			"size": "256x256"
		},
		{
			"src": "/src/images/icons/app-icon-384x384.png",
			"type": "image/png",
			"size": "384x384"
		},
		{
			"src": "/src/images/icons/app-icon-512x512.png",
			"type": "image/png",
			"size": "512x512"
		}
	],
	"start_url": "/index.html",
	"scrope": ".",
	"display": "standalone",
	"orientation": "portrait-primary",
	"background_color": "#fff",
	"theme_color": "#3f51b5",
	"description": "A simple Instagram Clone, implementing a lot of PWA features.",
	"dir": "ltr",
	"lang": "en-US"
}
```

[back to top](#top)

### PWAs and Browser Support

- Pretty well supported; being developed for Safari, should be ready now on FireFox

[back to top](#top)

### Simulating the Web App on an Emulator

- Android Studio
- He recommends Android Studio to emulate your web app
- Download it here: [https://developer.android.com/studio/index.html](https://developer.android.com/studio/index.html)
- Create an Android Virtual Device (AVD) under Tools => Android => AVD Manager
	+ Detailed instructions here: [https://developer.android.com/studio/run/managing-avds.html](https://developer.android.com/studio/run/managing-avds.html)
- Update Chrome on the emulator here: [https://www.apkmirror.com/apk/google-inc/chrome/#variants](https://www.apkmirror.com/apk/google-inc/chrome/#variants)
- To pull up the app on your simulator: **10.0.2.2:8080**
- To start developing:
	+ `cd course-project-starting-setup`
	+ `npm start`
	+ Open Android Studio and open Emulator
	+ web browser: localhost:8080
	+ anroid emulator: 10.0.2.2:8080

[back to top](#top)

### Installing the Web App Requirements

- See this: [Add to Home Screen](https://developers.google.com/web/fundamentals/app-install-banners/)

[back to top](#top)

### Adding Properties for Safari

- Add meta tags so that it looks good on Safari
- This is what you need:

```html
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="apple-mobile-web-app-title" content="PWAGram">
<link rel="apple-touch-icon" href="/src/images/icons/apple-icon-57x57.png" sizes="57x57">
<link rel="apple-touch-icon" href="/src/images/icons/apple-icon-60x60.png" sizes="60x60">
<link rel="apple-touch-icon" href="/src/images/icons/apple-icon-72x72.png" sizes="72x72">
<link rel="apple-touch-icon" href="/src/images/icons/apple-icon-76x76.png" sizes="76x76">
<link rel="apple-touch-icon" href="/src/images/icons/apple-icon-114x114.png" sizes="114x114">
<link rel="apple-touch-icon" href="/src/images/icons/apple-icon-144x144.png" sizes="144x144">
<link rel="apple-touch-icon" href="/src/images/icons/apple-icon-152x152.png" sizes="152x152">
<link rel="apple-touch-icon" href="/src/images/icons/apple-icon-180x180.png" sizes="180x180">
```

[back to top](#top)

### Adding Properties for Internet Explorer

- These are the meta tags for Internet Explorer

```html
<meta name="msapplication-TileImage" content="/src/images/icons/apple-icon-144x144.png">
<meta name="msapplication-TileColor" content="#fff">
<meta name="theme-color" content="#3f51b5">
```

- Note: the "theme-color" tag typically matches your `theme_color` from the `manifest.json`
- Here are the final HEAD tag additions:

```html
<!-- Required for All Web Apps -->
<link rel="manifest" href="/manifest.json">
<!-- Required for Safari (for Web Apps) -->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="apple-mobile-web-app-title" content="PWAGram">
<link rel="apple-touch-icon" href="/src/images/icons/apple-icon-57x57.png" sizes="57x57">
<link rel="apple-touch-icon" href="/src/images/icons/apple-icon-60x60.png" sizes="60x60">
<link rel="apple-touch-icon" href="/src/images/icons/apple-icon-72x72.png" sizes="72x72">
<link rel="apple-touch-icon" href="/src/images/icons/apple-icon-76x76.png" sizes="76x76">
<link rel="apple-touch-icon" href="/src/images/icons/apple-icon-114x114.png" sizes="114x114">
<link rel="apple-touch-icon" href="/src/images/icons/apple-icon-144x144.png" sizes="144x144">
<link rel="apple-touch-icon" href="/src/images/icons/apple-icon-152x152.png" sizes="152x152">
<link rel="apple-touch-icon" href="/src/images/icons/apple-icon-180x180.png" sizes="180x180">
<!-- Required for Internet Explorer (for Web Apps) -->
<meta name="msapplication-TileImage" content="/src/images/icons/apple-icon-144x144.png">
<meta name="msapplication-TileColor" content="#fff">
<meta name="theme-color" content="#3f51b5">
```

[back to top](#top)

## The Service Workers

### Why Service Workers Are Amazing

- service workers to a lot of work behind the scenes
- What are Service Workers
	+ JavaScript files run on one single thread, attached to individual HTML pages
	+ Service Workers run on a **separate** single thread
	+ they run in the background and are decouple from HTML pages
	+ Manages **ALL PAGES** of given scope (e.g. all pages of a domain)
	+ SWs live on even after pages have been closed
	+ **Summary:** 
		* SW's are background processes
		* use JavaScript but work totally differently than the normal JS code
		* Cannot interact with the DOM
		* They are not attached to a page but rather a certain scope
	+ Because they run in the background, they are good at respondign to events

![What are Service Workers](https://github.com/coolinmc6/pwa-course/blob/master/assets/what-are-service-workers.png)

[back to top](#top)

### "Listenable" Events (in Service Worker)

|Event|Source|
|:---:|:---|
|Fetch|Browser or Page-related JavaScript initiats a Fetch (Http request)<br>**Note:** you don't trigger a fetch request with a normal AJAX request|
|Push Notifications|Service Worker receives Web Push Notification (from server)|
|Notification Interaction|User interacts with displayed Notification|
|Background Sync|Service Worker receives Background Sync Event (e.g. Internet Connection was restored)|
|Service Worker Lifecycle|Service Worker Phase changes|

[back to top](#top)

### The Service Worker Lifecycle

- A SW is not attached to a page but rather a domain
- the browser will only install a SW if its the first time it's seen it or it has changed by a byte or more

![Service Worker Lifecycle](https://github.com/coolinmc6/pwa-course/blob/master/assets/sw-lifecycle.png)

1. index.html file loads a JavaScript file (e.g., `app.js`)
2. `app.js` registers the service worker, `sw.js`
3. there is an Install event
4. the sw is activated as soon as it can be (so an old sw must be stopped / the page closed)

### Service Worker Browser Support

- isserviceworkersready? => according to the site [https://jakearchibald.github.io/isserviceworkerready/](https://jakearchibald.github.io/isserviceworkerready/), Yes! Confirming what I've seen in blog posts for awhile, pretty much all browsers can support service workers.

### Registering a Service Worker

- Create a new file called `sw.js` in the root of your folder
- You want to register the service worker from a file that is available in every file on your website which, in this case, is `app.js`

```js
if('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('/sw.js')
		.then(function() {
			console.log('Service worker registered!')
		});
}
```

- This is what it is happening:
	+ it looks for the `serviceWorker` property in `navigator`
		* the Navigator object is used for browser detection.
		* Per [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator), the `Navigator` interface represents the state and the identity of the user agent
	+ if the browser has the `serviceWorker` property (it can support service workers), it registers the service worker with `navigator.serviceWorker.register()`
	+ the argument passed to `register()` is simply the path to your service worker: `/sw.js`
		* this suggests to me that with a rewritten URL, as long as my `.htaccess` file is properly setup, the file doesn't HAVE to live in the root of the domain
	+ add a `.then()` with an anonymous function so that other stuff keeps running and you don't have to wait for the serviceWorker to be registered

### Reacting to Incoming Events (in SW)

- One quick note:

```js
if('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('/sw.js', { scope: '/help/'}) // you can control the scope
		.then(function() {
			console.log('Service worker registered!')
		});
}
```

- service workers ONLY work on HTTPS
- you don't have access to normal events like "click" because you don't have access to the DOM
- We started writing our service worker and this what we ended up with:

```js
self.addEventListener('install', function(event) {
	console.log('[Service Worker] Installing Service Worker...', event)
});

self.addEventListener('activate', function(event) {
	console.log('[Service Worker] Activating Service Worker...', event)
	return self.clients.claim();
});

```

- the last line of the `activate` event listener prevents errors and some strange behavior despite the fact that it's not always required
- the "...Installing Service Worker" comes through but not the "...Activating Service Worker"

[back to top](#top)

### Updating & Activating Service Workers

- **Note:** If you change your service worker, you must close all open tabs and re-open the page. The activation was failing / waiting because the new service worker could introduce breaking changes so it isn't activated immediately. Closing and reopening the page fixes this.
	+ In the Application tab of Chrome DevTools...
		* You can click "Update on reload" checkbox in Chrome DevTools; or...
		* Click "Update" (next to http://www.localhost:8080)
		* Unregister it and re-register it
		* Click "Skip Waiting"

[back to top](#top)

### Non-Lifecycle Events

- I added the fetch listener to the service worker
- As a note, Chrome no longer automatically shows an "App Install Banner". You instead have to listen to a specific event (`beforeinstallprompt`) and then show the banner manually

### Getting That "App Install Banner"

### Testing the App on Real Device (and Installing the App)

- He recommends this link: [https://developers.google.com/web/tools/chrome-devtools/remote-debugging/](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/)
- In Chrome DevTools:
	+ click the three dots
	+ More Tools
	+ Remote Devices
- Select the device that is connected and select `Port forwarding`

[back to top](#top)

### Deferring the App Install Banner

- I added the code below to my `app.js` file:

```js
var deferredPrompt;

//
// CODE
//

window.addEventListener('beforeinstallprompt', function(event) {
	console.log('beforeinstallprompt fired');
	event.preventDefault();
	deferredPrompt = event;
	return false;
});
```

- we create a variable that we want to attach to the event called `deferredPrompt` at the top of the file
- the event listener attached to `window` listens for the event `beforeinstallprompt` and prevents it from firing.
- We then can use it in our `feed.js` file when the user has done something that engages with the app like open the create modal. Here is the code:

```js
if (deferredPrompt) {
	deferredPrompt.prompt();

	deferredPrompt.userChoice.then(function(choiceResult) {
		console.log(choiceResult.outcome);

		if(choiceResult.outcome === 'dismissed') {
			console.log('User cancelled installation');
		} else {
			console.log('User added to home screen');
		}

		deferredPrompt = null;
	})
}
```

- this did not work for me on my localhost but I need to try it on an emulator
- **CM Next Step:** get it working on an emulator to make sure that it actually works!!

[back to top](#top)

## Promise and Fetch

### Async Code in JavaScript

- JavaScript is Single-Threaded!

### Promises - Basics

- Promise example:

```js
var promise = new Promise(function(resolve, reject) {
	setTimeout(function() {
		resolve('This is executed once the timer is done!');
	}, 3000);
});

promise.then(function(text) {
	console.log(text);
})

console.log('This is executed right after setTimeout()');
```

[back to top](#top)

### Rejecting Promises

```js
var promise = new Promise(function(resolve, reject) {
	setTimeout(function() {
		// resolve('This is executed once the timer is done!');
		reject({code: 500, message: 'An error occurred!'});
	}, 3000);
});

// Here we have a separate function for the error

// promise.then(function(text) {
// 	return text;
// }, function(err) {
// 	console.log(err.code, err.message);
// }).then(function(newText) {
// 	console.log(newText);
// })

// Here we use the catch

promise.then(function(text) {
	return text;
}).then(function(newText) {
	console.log(newText);
}).catch(function(err) {
	console.log(err.code, err.message);
});
```

[back to top](#top)

### Fetch - Basics

- Fetch is a method provided from the browser

```js
fetch('https://httpbin.org/ip')
	.then(function(response) {
		console.log(response);
		return response.json();
	})
	.then(function(data) {
		console.log(data);
	})
	.catch(function(err) {
		console.log(err);
	});
```

[back to top](#top)

### Sending Post Requests via Fetch

- Here is an example of a POST request in Fetch

```js
fetch('https://httpbin.org/post', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},
	body: JSON.stringify({message: 'Does this work?'})
})
	.then(function(response) {
		console.log(response);
		return response.json();
	})
	.then(function(data) {
		console.log(data);
	})
	.catch(function(err) {
		console.log(err);
	});
```

[back to top](#top)

### Comparing Fetch and AJAX

```js
// Traditional AJAX
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://httpbin.org/ip');
xhr.responseType = 'json';

xhr.onload = function() {
	console.log(xhr.response);
}

xhr.onerror = function() {
	console.log('Error!');
}

xhr.send();

// Fetch GET request (same as above)
fetch('https://httpbin.org/ip')
	.then(function(response) {
		console.log(response);
		return response.json();
	})
	.then(function(data) {
		console.log(data);
	})
	.catch(function(err) {
		console.log(err);
	});
```

[back to top](#top)

**CM Next Steps:** Do the Fetch and Promise assignment.

- install dependencies
- follow instructions => shouldn't take long

## Service Workers - Caching

### Why Caching?

- Why Support Offline Access?
	+ poor connection
	+ no connection (i.e. elevator)
		* you only have a few moments without connection so caching a few parts would allow someone to continue to use your app
	+ Lie-Fie
		* you think you have a WiFi connection but you don't!


[back to top](#top)

### Understanding the Cache API

- Cache
	+ Key: Request
	+ Value: Response
- The cache API can be accessed from both the Service Worker and the "Normal" JavaScript on the page

### Browser Support

- Chrome supports it but I'm not sure how well-used the cache API really is

### Adjusting the Course Project

### Identifying (Pre-)Cacheable Items

- typically want to cache the app shell
- what are the core assets of your app that are used on most pages of the app

[back to top](#top)

### Static Caching / Precaching

- Static Caching at Installation

![Caching API](https://github.com/coolinmc6/pwa-course/blob/master/assets/cache-api.png)

- This was our Service Worker before we started doing caching:

```js
self.addEventListener('install', function(event) {
  console.log('[Service Worker] Installing Service Worker ...', event);
});

self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activating Service Worker ....', event);
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});
```

- It had event listeners on three events: *install*, *activate*, and *fetch*.
- The flurry of console.log lines were from these. 
- The biggest one was the *fetch* one which every time we loaded a resource (CSS file, JS file, font, stylesheet from a CDN, etc.) it would fire
	+ to see the resources you are loading, enter this: `console.log('[Service Worker] Fetching something ....', event.request.url);`
- The fetch event is where we would simply listen for a fetch event and then simply return a fetch for `event.request`. So we pretty much listened for the fetch event and fetched the resource.
- So that's where I was. This is what we added/changed:

```js
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
```

- We actually manipulated the *fetch* event listener first. So instead of just fetching whatever the request was, we check our cache:

```js
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
```

- So for each *fetch* event, we do: `event.respondWith()`
- And then in that `respondWith()` call we use `match()` on our `caches` object/array (whatever it is) to check for our `event.request`. If we find it, we return what we have in the cache; if not, we fetch it
- So now, for every fetch event, we are checking for the resource in our cache and if we have it, returning the resource, and if not, fetching it.
- Now, for the "install" event, this is what we did:

```js
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
```

- We use `event.waitUntil` to make sure the caches are done being added
- we then use `caches.open()` to open / create our cache. The string `static` is the argument we supply because that is what we're calling it. It could be anything; we call it static.
- We then use `.then()` to add all the files that we want to track to our cache
	+ the first few lines are individual `cache.add()` to show how to add files or "paths" for us to cache. We use `cache.addAll([])` which takes an array of strings to the paths of the files we want to cache
- The next lecture discusses dynamic caching so this will probably change some more.

### Dynamic Caching Upon Fetching

![Dynamic Caching](https://github.com/coolinmc6/pwa-course/blob/master/assets/dynamic-caching.png)


## Service Workers - Advanced Caching



[back to top](#top)

## IndexDB and Dynamic Data



[back to top](#top)

## Creating a Responsive User Interface (UI)



[back to top](#top)

## Background Sync



[back to top](#top)

## Web Push Notifications



[back to top](#top)

## Native Device Features



[back to top](#top)

## Service Worker Management with Workbox



[back to top](#top)

## SPAs and PWAs



[back to top](#top)




















