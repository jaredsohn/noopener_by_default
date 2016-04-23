noopener_by_default
=======

noopener_by_default is a userscript for Google Chrome written by Jared Sohn.

It adds rel:'noopener' to any target:"_blank" link that does not already have it nor rel:"noreferrer" set. This prevents some security problems but can break sites that require the opener feature of target:"_blank" links. Using this script can be a great way to experience which portions of the web you visit would break if rel:"noreferrer" was on by default.

See [About rel=noopener](https://mathiasbynens.github.io/rel-noopener/?target=_blank) to learn more about what it does and to experience how linking to a malicious page without it can make it easy for you to be phished.

Modify the source to set LOGGING=true if you want to see urls where rel="noopener" was added printed within the console.

###Installation

Use [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en). Click 'add a new script', copy/paste noopener_by_default.js into it, and click 'save'.

###Enhancements

Pull requests are welcome; some ideas for enhancements include: 
* convert to a Chrome extension and add a UI to list the URLs for a tab, show a count, etc.
* create an exception list for urls or links where the opener feature is needed.
* support browsers other than Chrome (via noreferrer)

###Licensing

MIT
