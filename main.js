// ==UserScript==
// @name         Meteor Luogu
// @namespace    http://tampermonkey.net/
// @version      0.1.dev
// @description  美化洛谷网站，基于主题“夜空の流星”设计
// @author       Herobrine6265
// @match        http://www.luogu.com.cn/*
// @match        https://www.luogu.com.cn/*
// @match        http://*.www.luogu.com.cn/*
// @match        https://*.www.luogu.com.cn/*
// @match        http://www.luogu.com/*
// @match        https://www.luogu.com/*
// @match        http://*.www.luogu.com/*
// @match        https://*.www.luogu.com/*
// @grant        unsafeWindow
// @license      GPL-3.0
// @supportURL   https://github.com/Solomark-AU/Solomark-AU-Luogu-Style/issues
// ==/UserScript==

(function () {
    var meteor_background_css = document.getElementsByClassName("theme-bg")[0].getAttribute("style");
    var meteor_background = document.createElement("div");
    meteor_background.style = meteor_background_css;
    meteor_background.id = "meteor_luogu_background";
    document.getElementById("app").insertBefore(meteor_background, document.getElementsByClassName("top-bar")[0]);
    document.getElementsByClassName("theme-bg")[0].style = document.getElementsByClassName("theme-bg")[1].style = "";
    var css = [
    ].join("\n");
    if (typeof GM_addStyle != "undefined") {
        GM_addStyle(css);
    } else {
        var node = document.createElement("style");
        node.type = "text/css";
        node.appendChild(document.createTextNode(css));
        var heads = document.getElementsByTagName("head");
        if (heads.length > 0) {
            heads[0].appendChild(node);
        } else {
            // no head yet, stick it whereever
            document.documentElement.appendChild(node);
        }
    }
})();