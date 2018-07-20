// ==UserScript==
// @name         ANTI ANTIAD
// @namespace    https://github.com/Shazi199/
// @version      0.0.4
// @description  ANTI ANTIAD
// @author       Shazi199
// @license      MIT License
// @match        http://www.ruanyifeng.com/blog/*
// @grant        none
// @require      http://code.jquery.com/jquery-1.11.0.min.js
// ==/UserScript==

(function() {
    'use strict';

    if(window.checker){
        $(".entry-sponsor").removeClass("entry-sponsor");
    }
})();
