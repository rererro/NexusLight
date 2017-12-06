// Theme Color

// Ranking Tab Bar
import {MDCTab, MDCTabFoundation} from '@material/tabs';
import {MDCTabBar, MDCTabBarFoundation} from '@material/tabs';

var dynamicTabBar = window.dynamicTabBar = new mdc.tabs.MDCTabBar(document.querySelector('#dynamic-tab-bar'));
var panels = document.querySelector('.panels');

dynamicTabBar.tabs.forEach(function(tab) {
    tab.preventDefaultOnClick = true;
});

function updatePanel(index) {
    var activePanel = panels.querySelector('.panel.active');
    if (activePanel) {
        activePanel.classList.remove('active');
    }
    var newActivePanel = panels.querySelector('.panel:nth-child(' + (index + 1) + ')');
    if (newActivePanel) {
        newActivePanel.classList.add('active');
    }
}

dynamicTabBar.listen('MDCTabBar:change', function ({detail: tabs}) {
    var nthChildIndex = tabs.activeTabIndex;

    updatePanel(nthChildIndex);
});


// slider
// import {MDCSlider} from '@material/slider';
//
// const slider = new MDCSlider(document.querySelector('.mdc-slider'));
// slider.listen('MDCSlider:change', () => console.log(`Value changed to ${slider.value}`));

// menu

let menu = new mdc.menu.MDCSimpleMenu(document.querySelector('.mdc-simple-menu'));
// Add event listener to some button to toggle the menu on and off.
document.querySelector('.some-button').addEventListener('click', () => menu.open = !menu.open);

// Dialog

import {MDCDialog} from '@material/dialog';

var dialog = new mdc.dialog.MDCDialog(document.querySelector('#mdc-dialog-default'));

dialog.listen('MDCDialog:accept', function() {
    console.log('accepted');
})

dialog.listen('MDCDialog:cancel', function() {
    console.log('canceled');
})

document.querySelector('#default-dialog-activation').addEventListener('click', function (evt) {
    dialog.lastFocusedTarget = evt.target;
    dialog.show();
    console.log('open');
})