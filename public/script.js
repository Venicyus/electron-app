const { remote } = require('electron');
const Dialogs = require('dialogs');

let cfg = {
    devTools: false
};

document.addEventListener('keypress', () => {
    if (!cfg.devTools && event.keyCode == 9) {
        Dialogs().prompt('Entry password admin ?', password => {
            if (password === 'admin') {
                remote.getCurrentWindow().toggleDevTools();
                cfg.devTools = true;
            }
        });
    }
}, false);