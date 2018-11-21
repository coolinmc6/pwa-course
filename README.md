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
- Here is the final HEAD tag additions:

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
})

self.addEventListener('activate', function(event) {
	console.log('[Service Worker] Activating Service Worker...', event)
	return self.clients.claim();
})

`````



## Promise and Fetch



[back to top](#top)

## Service Workers - Caching



[back to top](#top)

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




















