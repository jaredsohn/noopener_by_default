// ==UserScript==
// @name         noopener_by_default
// @namespace    http://www.github.com/jaredsohn/noopener_by_default
// @version      0.1
// @description  Adds rel:'noopener' to any target:"_blank" link that doesn't already have it or rel:"noreferrer" set. For Chrome only. Prevents some security problems but can break sites that require the opener feature of target:"_blank" links.
// @author       Jared Sohn (jared.sohn@gmail.com)
// @match http://*/*
// @match https://*/*
// @grant        none
// ==/UserScript==

var LOGGING_ENABLED = false;
var BLANK_TARGET_SELECTOR = "a[target='_blank']";

function updateTargets() {
    var urls = [];
    var blankTargets = document.querySelectorAll(BLANK_TARGET_SELECTOR);
    [].forEach.call(blankTargets, function(target) {
        if (target.href === "javascript:void(0)") {
            return;
        }
        if (target.hasAttribute("rel")) {
            var found = target.rel.split(" ").some(function(rel) {
                return ["noopener", "noreferrer"].indexOf(rel.toLowerCase()) > -1;
            });
            target.rel += " noopener";
            if (!found) {
                urls.push(target.href);
            }
        } else {
            target.rel = "noopener";
            urls.push(target.href);
        }
    });

    if (LOGGING_ENABLED && urls.length) {
        console.log("rel=noopener added to " + urls.length + " urls from " + this.window.location.href + ":");
        urls.forEach(function(url) {
            console.log(url);
        });
    }
}

var observer = new window.MutationObserver(function(mutations) {
    updateTargets();
});

observer.observe(document, {
  subtree: true,
  childList: true
});

updateTargets();
