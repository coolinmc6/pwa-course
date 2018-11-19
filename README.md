<a name="top"></a>
# Complete Guide to Progressive Web Apps

## Getting Started

### What are Progressive Web Apps (PWSa)?

- progressively enhance web apps to look and feel like native apps
- They should be the following
	+ reliable: load fast and provide offline functionality
	+ fast: respond quickly to user actions
	+ engaging: feel like a native app

[back to top](#top)

### PWSs vs. Native Mobile Apps

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
- Upcoming project could fully implement as PWS right from the start

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

### PWAs and Browser Support

- Pretty well supported; being developed for Safari, should be ready now on FireFox

### Simulating the Web App on an Emulator

- Android Studio
- He recommends Android Studio to emulate your web app
- Download it here: [https://developer.android.com/studio/index.html](https://developer.android.com/studio/index.html)
- Create an Android Virtual Device (AVD) under Tools => Android => AVD Manager
	+ Detailed instructions here: [https://developer.android.com/studio/run/managing-avds.html](https://developer.android.com/studio/run/managing-avds.html)
- Update Chrome on the emulator here: [https://www.apkmirror.com/apk/google-inc/chrome/#variants](https://www.apkmirror.com/apk/google-inc/chrome/#variants)
- To pull up the app on your simulator: **10.0.2.2:8080**

###




























