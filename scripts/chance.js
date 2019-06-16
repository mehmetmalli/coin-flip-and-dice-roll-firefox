browser.contextMenus.create({
	id: 'coin',
	title: 'Flip a coin.'
});

browser.contextMenus.create({
	id: 'roll4',
	title: 'Roll a dice(d4).'
});

browser.contextMenus.create({
	id: 'roll6',
	title: 'Roll a dice(d6).'
});

browser.contextMenus.create({
	id: 'roll8',
	title: 'Roll a dice(d8).'
});

browser.contextMenus.create({
	id: 'roll10',
	title: 'Roll a dice(d10).'
});

browser.contextMenus.create({
	id: 'roll12',
	title: 'Roll a dice(d12).'
});

browser.contextMenus.create({
	id: 'roll20',
	title: 'Roll a dice(d20).'
});
browser.contextMenus.create({
	id: 'roll100',
	title: 'Roll a dice(d100).'
});

browser.contextMenus.onClicked.addListener(function(info) {
	if (info.menuItemId == 'coin') {
		browser.tabs.executeScript({
			file: 'scripts/flip.js'
		});
	} else if (info.menuItemId == 'roll4') {
		browser.tabs.executeScript({
			file: 'scripts/roll4.js'
		});
	} else if (info.menuItemId == 'roll6') {
		browser.tabs.executeScript({
			file: 'scripts/roll6.js'
		});
	} else if (info.menuItemId == 'roll8') {
		browser.tabs.executeScript({
			file: 'scripts/roll8.js'
		});
	} else if (info.menuItemId == 'roll10') {
		browser.tabs.executeScript({
			file: 'scripts/roll10.js'
		});
	} else if (info.menuItemId == 'roll12') {
		browser.tabs.executeScript({
			file: 'scripts/roll12.js'
		});
	} else if (info.menuItemId == 'roll20') {
		browser.tabs.executeScript({
			file: 'scripts/roll20.js'
		});
	} else if (info.menuItemId == 'roll100') {
		browser.tabs.executeScript({
			file: 'scripts/roll100.js'
		});
	}
});
