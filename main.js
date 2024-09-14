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
    window.onload = (event) => {
        var meteor_background_css = document.getElementsByClassName("theme-bg")[0].getAttribute("style");
        var meteor_background = document.createElement("div");
        meteor_background.style = meteor_background_css;
        meteor_background.id = "meteor_luogu_background";
        document.getElementById("app").insertBefore(meteor_background, document.getElementsByClassName("top-bar")[0]);
        document.getElementsByClassName("theme-bg")[0].style = document.getElementsByClassName("theme-bg")[1].style = "";
    };
    var css = [
        ":root {",
        "    --card_bg_color: rgba(51, 51, 51, 0.5);",
        "    --float_card_bg_color: rgba(51, 51, 51, 0.8);",
        "    --svg_color: #c8c8c8;",
        "    --code_color: rgb(51, 51, 51);",
        "}",
        "",
        "#meteor_luogu_background {",
        "    position: fixed;",
        "    top: 0;",
        "    left: 0;",
        "    z-index: -1;",
        "    width: 100%;",
        "    height: 100%;",
        "}",
        "",
        ".top-bar>.left>.breadcrumb,",
        "span[data-v-40281d0d] {",
        "    color: var(--svg_color) !important;",
        "}",
        "",
        ".sidebar,",
        ".user-nav {",
        "    color: #eee;",
        "}",
        "",
        ".sidebar .li[data-v-40281d0d]:hover {",
        "    background-color: transparent !important;",
        "}",
        "",
        ".top-bar,",
        ".sidebar,",
        ".user-nav,",
        "main[data-v-51efdf02] {",
        "    background: transparent !important;",
        "}",
        "",
        ".l-card {",
        "    color: #eee;",
        "    background-color: var(--card_bg_color) !important;",
        "    border-radius: 3px;",
        "}",
        "",
        ".l-card:hover {",
        "    box-shadow: 5px 5px 5px rgba(0, 0, 0, .2) !important;",
        "    transition-duration: .2s;",
        "}",
        "",
        ".modal>.l-card.container,",
        ".dropdown>.l-card {",
        "    background-color: var(--float_card_bg_color) !important;",
        "    color: #eee;",
        "}",
        "",
        ".lfe-caption {",
        "    color: darkgray !important;",
        "}",
        "",
        ".dropdown>.l-card .lfe-caption .field {",
        "    color: #eee !important;",
        "}",
        "",
        ".expand[data-v-9f81deee] {",
        "    background: linear-gradient(transparent, rgba(51, 51, 51, 0.8)) !important;",
        "}",
        "",
        ".float.operations {",
        "    color: #eee;",
        "    background-color: var(--float_card_bg_color) !important;",
        "}",
        "",
        "svg {",
        "    color: var(--svg_color);",
        "}",
        "",
        "pre:has(code),",
        "code {",
        "    background-color: var(--code_color) !important;",
        "    color: #fff !important;",
        "}"
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