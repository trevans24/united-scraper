const puppeteer = require('puppeteer');
const fs = require('fs');

async function gotoWebsite () {
	try {
		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		await page.setUserAgent(
			'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36'
		);
		const url = 'https://www.united.com/ual/en/US/flight-search/book-a-flight';
		await page.goto(url, { waitUntil: 'networkidle2' });
		await page.screenshot({ path: 'united.png' });
		// page.on('response', async msg => {
		// 	console.log('msg', msg);
		// 	if (msg.request().resourceType == 'xhr') {
		// 	  xhrRequests++;
		// 	  if (msg.request().url.startsWith('https://www.united.com/ual/en/us/default/autocomplete/affinityseach')) {
		// 	    ready = true;
		// 	  }
		// 	  if (
		// 	    msg.request().url ==
		// 	    'https://www.united.com/ual/en/us/flight-search/book-a-flight/flightshopping/getflightresults/rev'
		// 	  ) {
		// 	    try {
		// 	      const data = await msg.json();
		// 	      results = parseResults(data);
		// 	    } catch (error) { }
		// 	  }
		// 	}
		// });

		await browser.close();
	} catch (err) {
		console.log('try err:', err);
	}
}

gotoWebsite();
