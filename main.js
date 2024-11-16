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
        var luogu_background = document.getElementsByClassName("theme-bg");
        if (luogu_background.length == 0) {
            throw new Error("[Err][Meteor Luogu]Not found background");
        }
        var meteor_luogu_background_css = luogu_background[0].getAttribute("style");
        var meteor_luogu_background = document.createElement("div");
        meteor_luogu_background.style = meteor_luogu_background_css;
        meteor_luogu_background.id = "meteor_luogu_background";
        document.getElementById("app").insertBefore(meteor_luogu_background, document.getElementsByClassName("top-bar")[0]);
        luogu_background[0].style = document.getElementsByClassName("theme-bg")[1].style = "";
        var css = [
            ":root {",
            "    --card_bg_color: rgba(51, 51, 51, 0.5);",
            "    --float_card_bg_color: rgba(51, 51, 51, 0.8);",
            "    --svg_color: #c8c8c8;",
            "    --text_color: rgb(51, 51, 51);",
            "    --text_special_color: rgb(153, 153, 153);",
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
            "main[data-v-51efdf02] {",
            "    background: transparent !important;",
            "}",
            "",
            ".user-nav[data-v-e275f92e] {",
            "    background: var(--card_bg_color) !important;",
            "}",
            "",
            "div.author[data-v-4af4731c] {",
            "    background-color: transparent !important;",
            "}",
            "",
            ".btn-edit-reply {",
            "    display: none !important;",
            "}",
            "",
            ".action[data-v-4af4731c]>*,",
            "div.time,",
            "div[data-v-0fca37c7] {",
            "    color: var(--text_special_color) !important;",
            "}",
            "",
            ".l-card {",
            "    color: #eee;",
            "    background-color: var(--card_bg_color) !important;",
            "    border-radius: 3px;",
            "}",
            "",
            "div.lfe-marked-wrap.content,",
            "div.lfe-marked {",
            "    color: #eee;",
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
            ".lfe-caption[data-v-9f81deee] {",
            "    color: darkgray !important;",
            "}",
            "",
            ".dropdown>.l-card .lfe-caption .field {",
            "    color: #eee !important;",
            "}",
            "",
            ".expand[data-v-112a83fd],",
            ".expand[data-v-0fca37c7] {",
            "    background: linear-gradient(transparent, rgba(51, 51, 51, 0.8)) !important;",
            "}",
            "",
            ".float.operations {",
            "    color: #eee;",
            "    background-color: var(--float_card_bg_color) !important;",
            "}",
            "",
            ".reply-card>.lfe-h4,",
            ".lfe-h3[data-v-9f81deee] {",
            "    color: #eee;",
            "}",
            "",
            ".l-card>.lfe-h2[data-v-6ef7c7b8] {",
            "    color: darkgray;",
            "}",
            "",
            ".lcolor--red-3 {",
            "    color: rgb(231, 76, 60) !important;",
            "}",
            "",
            "h1.lfe-h1[data-v-51efdf02] {",
            "    font-size: 35px;",
            "}",
            "",
            "svg {",
            "    color: var(--svg_color);",
            "}",
            "",
            "pre:has(code),",
            "code,",
            "textarea,",
            ".combo-wrapper[data-v-d3bf5d4d][data-v-0552286e]>.text,",
            ".dropdown[data-v-d3bf5d4d] {",
            "    background-color: var(--text_color) !important;",
            "    color: #fff !important;",
            "}",
            "",
            ".dropdown[data-v-d3bf5d4d] {",
            "    border: none !important;",
            "}",
            "",
            "div.textarea,",
            "div.textarea *,",
            "div[data-v-6a2e7478],",
            "div[data-v-6a2e7478]>* {",
            "    background-color: rgba(42, 42, 42, 1) !important;",
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
    };
})();