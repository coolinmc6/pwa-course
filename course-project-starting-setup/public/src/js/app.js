
// if the serviceWorker property exists in the "navigator", their browser
if('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('/sw.js')
		.then(function() {
			console.log('Service worker registered!')
		});
}

