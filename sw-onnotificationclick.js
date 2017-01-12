self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));

self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));

self.onnotificationclick = (event) => {
    console.log('sw-onnotificationclick.js - onnotificationclick', event);

    if (event.action) {
        console.info(`sw-onnotificationclick.js: ${event.action}`)
    }

    event.notification.close();
};
