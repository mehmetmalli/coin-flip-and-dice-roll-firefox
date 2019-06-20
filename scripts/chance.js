c = browser.contextMenus; c.create({ id: 'flip', title: 'Flip a coin.' });
[4, 6, 8, 10, 12, 20, 100].map(i => c.create({ id: i.toString(), title: 'Roll a dice(d' + i + ').' }));
c.onClicked.addListener((i) => { browser.tabs.executeScript({ code: i.menuItemId == 'flip' ? "alert(Math.random()>=0.5 ? 'HEADS!' : 'TAILS!')" : "alert('You rolled ' + (Math.floor(Math.random() * " + parseInt(i.menuItemId) + ") + 1) + '!')" }) });
