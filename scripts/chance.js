browser.contextMenus.create({
	id: 'flip',
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
	if (info.menuItemId == 'flip') {
		browser.tabs.executeScript({
			code: "alert(Math.random()>=0.5 ? 'HEADS!' : 'TAILS!')"
		});
	} else if (info.menuItemId == 'roll4') {
		browser.tabs.executeScript({
			code: "alert('You rolled ' + (Math.floor(Math.random() * 4) + 1) + '!')"
		});
	} else if (info.menuItemId == 'roll6') {
		browser.tabs.executeScript({
			code: "alert('You rolled ' + (Math.floor(Math.random() * 6) + 1) + '!')"
		});
	} else if (info.menuItemId == 'roll8') {
		browser.tabs.executeScript({
			code: "alert('You rolled ' + (Math.floor(Math.random() * 8) + 1) + '!')"
		});
	} else if (info.menuItemId == 'roll10') {
		browser.tabs.executeScript({
			code: "alert('You rolled ' + (Math.floor(Math.random() * 10) + 1) + '!')"
		});
	} else if (info.menuItemId == 'roll12') {
		browser.tabs.executeScript({
			code: "alert('You rolled ' + (Math.floor(Math.random() * 12) + 1) + '!')"
		});
	} else if (info.menuItemId == 'roll20') {
		browser.tabs.executeScript({
			code: "alert('You rolled ' + (Math.floor(Math.random() * 20) + 1) + '!')"
		});
	} else if (info.menuItemId == 'roll100') {
		browser.tabs.executeScript({
			code: "alert('You rolled ' + (Math.floor(Math.random() * 100) + 1) + '!')"
		});
	}
});
