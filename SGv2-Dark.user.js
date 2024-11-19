// ==UserScript==
// @name           SGv2 Dark
// @namespace      SGv2 Dark 1.7.7
// @version        1.7.7
// @description    SGv2 Dark style for www.steamgifts.com, www.steamtrades.com, www.sgtools.com. Compatible with most scripts found in the addon registry
// @author         SquishedPotatoe (https://github.com/SquishedPotatoe)
// @homepageURL    https://github.com/SquishedPotatoe/SGv2-Dark
// @updateURL      https://github.com/SquishedPotatoe/SGv2-Dark/raw/master/SGv2-Dark.user.js
// @supportURL     https://github.com/SquishedPotatoe/SGv2-Dark/issues
// @match          *://www.steamgifts.com/*
// @match          *://www.steamtrades.com/*
// @match          *://www.sgtools.info/*
// @license        CC-BY-SA-4.0
// @grant          GM.info
// @run-at         document-start
// @noframes
// @icon           data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A+SdZ8dalqkQgswY2VfmW3JI+p44/E1wt14p1W3kmSa4Tf/Essiiux8KfCDxR428K3+uSu+n6Fp8ElzlVBbYgLEkgDPA715LoXgNPEE11d63rCaBp8dpJdLcSwSTbmUZWIBBwzdASQPfoKyqVYUlebOqhhq2JbVKN7b9l6vZG1D451O0iljWKK5hcnKGTcPqDjitLw544tggt71XgZvnjlXh4m7c9wa4vw94FmudS0pJrk2lpfTpbrdBh+7ZyApK9xkjPtmtzxv4N1bwNrf8AZXiKARspxDdp9xvT6U4TjUV4u5FahVw8lGrGzevyPs34T+OIfBngC/8AC/i60kfw/qFrJZpqtou+Py5FKFZCB8jAHv8AyrwS8bSoNAm8H63d2ltKEa2TVmB8i4iHCSxsOMkYyp6c55wB9FeGPEFlo+nKkUiwgLtIz1XHT6Vy3iWbwrfSi5utF0uZwCCUh8ks2ep8vbk9OTn/AA4sbgoY2MVJtOLumujPaybOquTVJyhBTjNcsovZr5bPzPEbeHRNW8U6THDdpH4c0q4juLi/PCOqEERRjq7EgDjpk/jpftDePk+IMMaR2H2KwTAiluF/euPUL1H48+1dVqT+GrOHzLCwhglAywRMs57Auece1ed+Kbn+0ruKRbdbq7k+WOJV4XnitsLho4WkqUXfzfU5c1zKpm2KeJqRUb6JLZJdD//Z
// ==/UserScript==

function addCss() {
  var css = `/* SGv2 Dark v1.7.7  2024-11-19 */
:root {
  --SGSP-body-bg-color: #0f0f0b;
  --SGSP-body-bg-image: "none";
  --SGSP-button-hover-brightness: brightness(1.25);
  --SGSP-chart-bg-color: hsla(0,2%,16%,0.65);
  --SGSP-chart-border-color: hsla(0,2%,30%,1);
  --SGSP-chart-head-bg-color: hsla(0,2%,21%,1);
  --SGSP-chart-head-border-color: hsla(0,2%,30%,1);
  --SGSP-chart-head-txt-color: #8f9fb3;
  --SGSP-chart-row-bg-color: hsla(0,2%,16%,0.65);
  --SGSP-chart-row-txt-color: #a0a0a0;
  --SGSP-code-bg-color: #222220;
  --SGSP-code-border-color: hsla(0,2%,26%,1);
  --SGSP-code-txt-color: #b7b776;
  --SGSP-content-bg-color: #181816;
  --SGSP-content-border-color: #3c3c39;
  --SGSP-content-inner-bg-color: rgba(0, 0, 0, 0.2);
  --SGSP-content-inner-border-color: hsla(60,12%,0%,0.35);
  --SGSP-enter-green-buttons-bg-color: linear-gradient(#678f42 0%, #46731c 50%, #2d490e 100%);
  --SGSP-enter-green-buttons-txt-color: #c9e3b5;
  --SGSP-enter-red-buttons-bg-color: linear-gradient(#a54040 0%, #8a2828 50%, #6a1010 100%);
  --SGSP-enter-red-buttons-txt-color: #ffb3b3;
  --SGSP-enter-yellow-buttons-bg-color: linear-gradient(#bfb731 0%, #7a7400 100%);
  --SGSP-enter-yellow-buttons-txt-color: #f1f4be;
  --SGSP-featured-bg-color: #3d3d3d;
  --SGSP-featured-border-color: #000000;
  --SGSP-featured-giveaway-bg-gradient: linear-gradient(#3d3d3d 0%, #131313 100%);
  --SGSP-featured-home-bg-gradient: linear-gradient(#3d3d3d 0%, #131313 100%);
  --SGSP-featured-user-bg-gradient: linear-gradient(#3d3d3d 0%, #131313 100%);
  --SGSP-general-txt-color: #a0a0a0;
  --SGSP-giveaway-columns-bg-color: linear-gradient(#3b3a3a 0, #1f1e1e 100%);
  --SGSP-giveaway-columns-border-color: #525151 rgba(70, 68, 68, 0.35) #343232;
  --SGSP-giveaway-columns-boxshadow-color: rgba(255, 255, 255, 0.05);
  --SGSP-green-buttons-bg-color: linear-gradient(#678f42 0%, #46731c 50%, #2d490e 100%);
  --SGSP-green-buttons-txt-color: #c9e3b5;
  --SGSP-green-buttons-border-color: #8dc14e #649a23 #52891f #649a23;
  --SGSP-green-icons-txt-color: #78a749;
  --SGSP-grid-brightness: brightness(0.7);
  --SGSP-grid-hover-brightness: brightness(0.9);
  --SGSP-grid-popout-bg-color: #2f2f2f;
  --SGSP-grid-popout-border-color: hsla(0,0%,33%,1);
  --SGSP-group-bg-color: linear-gradient(#5a9852 0%, #3e7b3d 50%, #275c24 100%);
  --SGSP-group-border-color: #47a540;
  --SGSP-group-txt-color: #8be77e;
  --SGSP-header-footer-bg-color: linear-gradient(#1c1f21 0%, #31363a 100%);
  --SGSP-header-footer-border-color: hsla(0, 0%, 0%, 1);
  --SGSP-headings-size1-txt-color: #adadad;
  --SGSP-headings-size2-txt-color: #adadad;
  --SGSP-headings-size3-txt-color: #adadad;
  --SGSP-headings-txt-color: #8f9fb3;
  --SGSP-image-bg-color: #2f2f2f;
  --SGSP-image-border-color: hsla(0,0%,33%,1);
  --SGSP-image-brightness: brightness(0.8);
  --SGSP-image-filters: blur(0px) brightness(1) opacity(1) saturate(1);
  --SGSP-input-bg-color: #343434;
  --SGSP-input-border-color: #4a4a4a;
  --SGSP-invite-bg-color: linear-gradient(#9c9c9c 0%, #808080 50%, #4f4f4f 100%);
  --SGSP-invite-border-color: #c4c4c4 #adadad #878787 #adadad;
  --SGSP-invite-txt-color: hsla(0, 0%, 85%, 1);
  --SGSP-link-txt-color: #619ec0;
  --SGSP-list-txt-color: #d84141;
  --SGSP-modal-bg-color: #141414;
  --SGSP-nav-button-bg-color: linear-gradient(#565e76 0%, #515970 5px, #363c4e 100%);
  --SGSP-nav-button-hover-brightness: brightness(1.25);
  --SGSP-nav-button-hover-saturate: saturate(1.5);
  --SGSP-nav-dropdown-bg-color: linear-gradient(#4b4b4b 0%, #393939 100%);
  --SGSP-nav-dropdown-border-color: #000000;
  --SGSP-nav-dropdown-hover-bg-color: var(--SGSP-nav-button-bg-color);
  --SGSP-nav-txt-color: #d1d1d1;
  --SGSP-notification-blue-bg-color: linear-gradient(rgba(39, 112, 185, 0.23) 0%, rgba(17, 61, 105, 0.9) 100%) !important;
  --SGSP-notification-blue-border-color: #004c99;
  --SGSP-notification-blue-txt-color: #92bde8;
  --SGSP-notification-green-bg-color: linear-gradient(rgba(117, 185, 39, 0.14) 0%, rgba(56, 92, 15, 0.63) 100%) !important;
  --SGSP-notification-green-border-color: rgba(73, 131, 7, 0.7) !important;
  --SGSP-notification-green-txt-color: rgba(192, 236, 142, 0.8);
  --SGSP-notification-grey-bg-color: linear-gradient(rgba(61, 61, 61, 0.2) 0%, rgba(46, 46, 46, 0.9) 100%) !important;
  --SGSP-notification-grey-border-color: #4d4d4d !important;
  --SGSP-notification-grey-txt-color: rgba(166, 166, 166, 0.95);
  --SGSP-notification-red-bg-color: linear-gradient(rgba(185, 39, 39, 0.23) 0%, rgba(105, 17, 17, 0.9) 100%) !important;
  --SGSP-notification-red-border-color: #8a0000 !important;
  --SGSP-notification-red-txt-color: #ed8282 !important;
  --SGSP-notification-yellow-bg-color: linear-gradient(rgba(180, 185, 39, 0.23) 0%, rgba(102, 105, 17, 0.9) 100%) !important;
  --SGSP-notification-yellow-border-color: #858a00;
  --SGSP-notification-yellow-txt-color: rgba(230, 233, 165, 0.9) !important;
  --SGSP-page-width: 100%;
  --SGSP-page-width-st: 100%;
  --SGSP-page-width-sgt: 100%;
  --SGSP-pageheading-bg-color: linear-gradient(#3b3b3b 0%, #191515 100%);
  --SGSP-pageheading-border-color: #575757 #4a4a4a #3b3b3b #4a4a4a;
  --SGSP-pageheading-txt-color: hsla(202, 62%, 67%, 1);
  --SGSP-pinned-bg-color: linear-gradient(#1e252b 0%, #141517 100%);
  --SGSP-pinned-border-color: hsla(208,13%,26%,1);
  --SGSP-poll-bg-color: hsla(60,4%,9%,1);
  --SGSP-poll-border-color: var(--SGSP-content-border-color);
  --SGSP-poll-heading-bg-color: hsla(60,0%,13%,1);
  --SGSP-poll-heading-border-color: hsla(60,4%,22%,1);
  --SGSP-poll-heading-txt-color: var(--SGSP-headings-txt-color);
  --SGSP-poll-row-txt-color: #a4a4a4;
  --SGSP-quote-bg-color: rgba(0, 0, 0, 0.3);
  --SGSP-quote-border-color: #82827d;
  --SGSP-quote-txt-color: #a0a0a0;
  --SGSP-red-buttons-bg-color: linear-gradient(#a54040 0%, #8a2828 50%, #6a1010 100%);
  --SGSP-red-buttons-border-color: #e27373 #ba4545 #a82e2e #ba4545;
  --SGSP-red-buttons-txt-color: #ffb3b3;
  --SGSP-red-suspension-bot-bg-color: linear-gradient(#8a2828 18%, #6a1010 100%);
  --SGSP-red-suspension-top-bg-color: linear-gradient(#a54040 0%, #8a2828 80%, #6a1010 200%);
  --SGSP-red-icons-txt-color: hsla(0, 80%, 60%, 1);
  --SGSP-reply-bg-color: hsla(180,3%,13%,1);
  --SGSP-reply-border-color: hsla(180,10%,28%,1);
  --SGSP-row-hover-color: brightness(1.25);
  --SGSP-scrollbar-bg-color: hsla(0, 0%, 10%, 1);
  --SGSP-scrollbar-hover-bg-color: #303030;
  --SGSP-scrollbar-thumb-bg-color: #262626;
  scrollbar-color: #262626 hsla(0, 0%, 10%, 1);
  --SGSP-secondary-txt-color: #808d9d;
  --SGSP-select-highlight-color: hsl(91, 45%, 38%);
  --SGSP-select-highlight-bg-color: hsla(0, 0%, 43%, 0.5);
  --SGSP-separator-dark-color: hsla(60,2%,4%,1);
  --SGSP-separator-hover-color: hsla(180, 20%, 40%, 1);
  --SGSP-separator-light-color: hsla(60,2%,21%,1);
  --SGSP-sgtool-content-bg-color: var(--SGSP-content-bg-color);
  --SGSP-sgtool-total-bg-color: var(--SGSP-pinned-bg-color);
  --SGSP-sidebar-bg-color: #2b2b2b;
  --SGSP-sidebar-border-color: #454545;
  --SGSP-sidebar-link-bg-color: var(--SGSP-pageheading-bg-color);
  --SGSP-sidebar-link-border-color: var(--SGSP-pageheading-border-color);
  --SGSP-sidebar-link-txt-color: #75b9df;
  --SGSP-silver-buttons-bg-color: linear-gradient(#8f8f8f 0%, #3b3b3b 100%);
  --SGSP-silver-buttons-border-color: #ababab #8a8a8a #7a7a7a #8a8a8a;
  --SGSP-silver-buttons-txt-color: #d9d9d9;
  --SGSP-spoiler-bg-color: hsla(60, 2%, 21%, 1);
  --SGSP-tableheading-bg-color: #212121;
  --SGSP-tableheading-border-color: hsla(60,2%,23%,1);
  --SGSP-tooltip-bg-color: #1f1f1f;
  --SGSP-tooltip-border-color: hsla(0, 0%, 25%, 1);
  --SGSP-tooltip-txt-color: #a0a0a0;
  --SGSP-trade-have-bg-color: rgba(95, 63, 63, 0.37);
  --SGSP-trade-have-border-color: rgba(226, 136, 136, 0.37);
  --SGSP-trade-have-title-color: rgba(226, 121, 121, 0.67);
  --SGSP-trade-want-bg-color: rgba(70, 97, 98, 0.37);
  --SGSP-trade-want-border-color: rgba(112, 206, 209, 0.37);
  --SGSP-trade-want-title-color: rgba(96, 211, 215, 0.67);
  --SGSP-visited-txt-color: hsl(90, 35%, 52%);
  --SGSP-whitelist-bg-color: linear-gradient(#3197a0 0%, #125459 100%);
  --SGSP-whitelist-border-color: #3197a0;
  --SGSP-whitelist-txt-color: #5dd0da;
  --SGSP-yellow-buttons-bg-color: linear-gradient(#bfb731 0%, #7a7400 100%);
  --SGSP-yellow-buttons-border-color: #eded82 #d5d54d #b5b517 #d5d54d;
  --SGSP-yellow-buttons-txt-color: #f1f4be;
  --esgst-discussion-highlight-bg-color: rgba(83, 159, 29, 0.15);
  --esgst-group-highlight-bg-color: rgba(83, 159, 29, 0.15);
  --esgst-inner-panel-bg-color: var(--SGSP-content-inner-bg-color);
  --esgst-inner-panel-border-color: hsla(0,0%,33%,1);
  --esgst-lpv-arrow-selected: var(--esgst-lpv-button);
  --esgst-lpv-bar-hover-projected: var(--esgst-lpv-bar-projected);
  --esgst-lpv-bar-hover: var(--esgst-lpv-bar);
  --esgst-lpv-bar-projected: #108484;
  --esgst-lpv-bar-selected-projected: var(--esgst-lpv-bar-projected);
  --esgst-lpv-bar-selected: var(--esgst-lpv-bar);
  --esgst-lpv-bar: #2e6b0f;
  --esgst-lpv-button-hover: var(--esgst-lpv-button);
  --esgst-lpv-button-selected-hover: var(--esgst-lpv-button);
  --esgst-lpv-button-selected: var(--esgst-lpv-button);
  --esgst-lpv-button: var(--SGSP-nav-button-bg-color) !important;
  --esgst-modal-bg-color: rgba(20, 20, 20, 0.8);
  --SGSP-ts-1: 0 0 2px rgba(0, 0, 0, 0.8);
  --SGSP-ts-2: 0 0 3px #000000 !important;
  --SGSP-ts-3: 0 0 5px rgba(0, 0, 0, 0.8), 1px 1px #000000;
  --SGSP-ts-4: 1px 1px rgba(0, 0, 0, 0.8) !important;
  --SGSP-ts-5: 0 1px #000000, 0 -1px #000000, 1px 0 #000000, -1px 0 #000000, 0 1px #000000, 0 -1px #000000, 1px 0 #000000, -1px 0 #000000, 0 1px #000000, 0 -1px #000000, 1px 0 #000000, -1px 0 #000000 !important;
  --SGSP-ts-6: 0 1px #000000, 0 -1px #000000, 1px 0 #000000, -1px 0 #000000, 0 1px #000000, 0 -1px #000000, 1px 0 #000000, -1px 0 #000000, 0 1px #000000, 0 -1px #000000, 1px 0 #000000, -1px 0 #000000;
  --SGSP-ts-7: 0 1px #000000, 0 -1px #000000, 1px 0 #000000, -1px 0 #000000, 0 1px #000000, 0 -1px #000000, 1px 0 #000000, -1px 0 #000000;
  --SGSP-ts-8: 0 1px #000000, 0 -1px #000000, 1px 0 #000000, -1px 0 #000000;
  --SGSP-ts-9: 0 1px #000000, 0 -1px #000000, 1px 0 #000000, -1px 0 #000000 !important;
  --SGSP-ts-10: 0 1px #000000, 0 -1px #000000, 1px 0 #000000, -1px 0 #000000, 1px 1px #000000;
  --SGSP-ts-11: 0 2px #000000, 0 -2px #000000, 2px 0 #000000, -2px 0 #000000;
  --SGSP-ts-12: 1px 1px 0 rgba(0, 0, 0, 0.7), 0 0 2px #000000;
  --SGSP-ts-13: 1px 1px 0 #000000 !important;
  --SGSP-ts-14: 1px 1px 1px rgba(0, 0, 0, 0.6), -1px 1px 1px rgba(0, 0, 0, 0.6);
  --SGSP-ts-15: 1px 1px 1px rgba(0, 0, 0, 0.7), 0 0 1px rgba(0, 0, 0, 0.8);
  --SGSP-ts-16: 1px 1px 1px rgba(0, 0, 0, 0.7), 0 0 1px rgba(0, 0, 0, 0.8) !important;
  --SGSP-ts-17: 1px 1px 1px rgba(0, 0, 0, 0.7), 0 0 1px rgba(0, 0, 0, 0.8);
  --SGSP-ts-18: 1px 1px 1px rgba(0, 0, 0, 0.99) !important;
  --SGSP-ts-19: 1px 1px 1px #000000, 0 0 1px #000000;
  --SGSP-ts-20: 1px 1px 1px rgba(0, 0, 0, 0.99), 0 0 2px rgba(0, 0, 0, 0.99);
  --SGSP-ts-21: 1px 1px 1px rgba(0, 0, 0, 0.99) !important;
  --SGSP-ts-22: 1px 1px 1px #000000, 0 0 1px #000000 !important;
  --SGSP-ts-23: 1px 1px 1px #000000, 0 0 1px #000000;
  --SGSP-ts-24: 1px 1px 1px #000000, 0 0 2px #000000 !important;
  --SGSP-ts-25: 1px 1px 1px #000000, 0 0 2px #000000;
  --SGSP-ts-26: 1px 1px 1px #000000, 1px 1px 2px rgba(0, 0, 0, 0.4);
  --SGSP-ts-27: 1px 1px 1px #000000, 1px 1px 2px rgba(0, 0, 0, 0.5);
  --SGSP-ts-28: 1px 1px 1px #000000, 1px 1px 2px rgba(0, 0, 0, 0.7);
  --SGSP-ts-29: 1px 1px 1px #000000;
  --SGSP-ts-30: 1px 1px 1px #000000;
  --SGSP-ts-31: 1px 1px rgba(0, 0, 0, 0.5), 0 0 1px #000000 !important;
  --SGSP-ts-32: 1px 1px rgba(0, 0, 0, 0.5), 0 0 2px #000000 !important;
  --SGSP-ts-33: 1px 1px rgba(0, 0, 0, 0.5), 0 0 2px #000000 !important;
  --SGSP-ts-34: 1px 1px rgba(0, 0, 0, 0.7), 0 0 1px #000000 !important;
  --SGSP-ts-35: 1px 1px rgba(0, 0, 0, 0.7), 0 0 1px #000000;
  --SGSP-ts-36: 1px 1px rgba(0, 0, 0, 0.7), 0 0 2px rgba(0, 0, 0, 0.8);
  --SGSP-ts-37: 1px 1px rgba(0, 0, 0, 0.7), 0 0 1px #000000;
  --SGSP-ts-38: 1px 1px rgba(0, 0, 0, 0.7), 0 0 2px #000000;
  --SGSP-ts-39: 1px 1px rgba(0, 0, 0, 0.7);
  --SGSP-ts-40: 1px 1px rgba(0, 0, 0, 0.8) !important;
  --SGSP-ts-41: 1px 1px rgba(0, 0, 0, 0.8);
  --SGSP-ts-42: 1px 1px rgba(0, 0, 0, 0.99), 0 0 1px rgba(0, 0, 0, 0.99) !important;
  --SGSP-ts-43: 1px 1px rgba(0, 0, 0, 0.99), 0 0 1px rgba(0, 0, 0, 0.99), 0 0 1px rgba(0, 0, 0, 0.99) !important;
  --SGSP-ts-44: 1px 1px rgba(0, 0, 0, 0.99), 0 0 1px rgba(0, 0, 0, 0.99), 0 0 1px rgba(0, 0, 0, 0.99);
  --SGSP-ts-45: 1px 1px rgba(0, 0, 0, 0.99), 0 0 1px rgba(0, 0, 0, 0.99);
  --SGSP-ts-46: 1px 1px rgba(0, 0, 0, 0.99), 0 1px rgba(0, 0, 0, 0.99), 1px 0 rgba(0, 0, 0, 0.99), 0 -1px rgba(0, 0, 0, 0.99), -1px 0 rgba(0, 0, 0, 0.99) !important;
  --SGSP-ts-47: 1px 1px rgba(0, 0, 0, 0.99), 0 1px rgba(0, 0, 0, 0.99), 1px 0 rgba(0, 0, 0, 0.99), 0 -1px rgba(0, 0, 0, 0.99), -1px 0 rgba(0, 0, 0, 0.99);
  --SGSP-ts-48: 1px 1px rgba(0, 0, 0, 0.99), 1px 1px 1px rgba(0, 0, 0, 0.99), 0 0 1px rgba(0, 0, 0, 0.99), 0 0 1px rgba(0, 0, 0, 0.99);
  --SGSP-ts-49: 1px 1px rgba(0, 0, 0, 0.99), -1px -1px rgba(0, 0, 0, 0.99), -1px 0 rgba(0, 0, 0, 0.99), 0 -1px rgba(0, 0, 0, 0.99) !important;
  --SGSP-ts-50: 1px 1px #000000 !important;
  --SGSP-ts-51: 1px 1px #000000, 0 0 1px #000000;
  --SGSP-ts-52: 1px 1px #000000, 0 0 2px #000000;
  --SGSP-ts-53: 1px 1px #000000, 1px 1px 2px #000000;
  --SGSP-ts-54: 1px 1px #000000;
  --SGSP-ts-55: 1px 1px #000000, 0 0 1px #000000 !important;
  --SGSP-ts-56: 2px 2px 2px #000000, 1px 1px #000000;
  --SGSP-ts-57: -1px 1px rgba(0, 0, 0, 0.99), 1px 1px rgba(0, 0, 0, 0.99), 0 0 1px rgba(0, 0, 0, 0.99), 0 0 1px rgba(0, 0, 0, 0.99);
  --SGSP-ts-58: 1px 1px rgba(0, 0, 0, 0.8);
  --SGSP-ts-59: -1px 1px rgba(0, 0, 0, 0.99), 1px 1px rgba(0, 0, 0, 0.99), 0 0 1px rgba(0, 0, 0, 0.99), 0 0 1px rgba(0, 0, 0, 0.99), 0 0 1px rgba(0, 0, 0, 0.99);
  --SGSP-ts-60: 0 1px rgba(0, 0, 0, 0.6), 0 -1px rgba(0, 0, 0, 0.6), 1px 0 rgba(0, 0, 0, 0.6), -1px 0 rgba(0, 0, 0, 0.6);
  --SGSP-ts-61: 0 1px rgba(0, 0, 0, 0.8), 0 -1px rgba(0, 0, 0, 0.8), 1px 0 rgba(0, 0, 0, 0.8), -1px 0 rgba(0, 0, 0, 0.8) !important;
  --SGSP-ts-62: 1px 1px rgba(0, 0, 0, 0.5), 0 0 1px #000000 !important;
  --SGSP-ts-63: 1px 1px rgba(0, 0, 0, 0.5), 0 0 2px #000000 !important;
  --SGSP-ts-64: 1px 1px rgba(0, 0, 0, 0.5), 0 0 2px #000000 !important;
  --SGSP-ts-65: 1px 1px rgba(0, 0, 0, 0.5), 0 0 2px #000000 !important;
  --SGSP-ts-66: 1px 1px rgba(0, 0, 0, 0.7), 0 0 1px #000000 !important;
  --SGSP-ts-67: 1px 1px rgba(0, 0, 0, 0.7), 0 0 2px #000000;
  --SGSP-ts-68: 1px 1px rgba(0, 0, 0, 0.7), 0 0 2px #000000;
  --SGSP-ts-69: 1px 1px rgba(0, 0, 0, 0.8);
  --SGSP-ts-70: 1px 1px rgba(0, 0, 0, 0.8);
  --SGSP-ts-71: 1px 1px rgba(0, 0, 0, 0.8);
  --SGSP-ts-72: 1px 1px rgba(0, 0, 0, 0.8);
  --SGSP-ts-73: 1px 1px rgba(0, 0, 0, 0.99), 0 0 1px rgba(0, 0, 0, 0.99) !important;
  --SGSP-ts-74: 1px 1px #000000;
  --SGSP-ts-75: 1px 1px #000000;
  --SGSP-ts-76: 1px 1px #000000;
  --SGSP-ts-77: 1px 1px #000000;
}

html, [data-esgst-action] {
    background-color: var(--SGSP-body-bg-color)!important;
}
body {
    background-color: transparent!important;
    background-image: none;
}
.sidebar__entry-insert, .sidebar__action-button, .nav__sits, .form__submit-button, .form__sync-default, .featured__action-button, #content button[type="submit"], #content #activated_send, #content #real_cv_send, #content #multiple_wins_send, #content #giveaway_Create, .entry.validEntry, #content .rulePassed, .btn_action.green, #content .manageGa a, #content #gaurl a, #content .back-guide a, #content .gaButton, .giveaway__column--contributor-level--positive:not(.esgst-glh-highlight), .featured__column--contributor-level--positive:not(.esgst-glh-highlight), .cmGame:not(.notFound), .cmGame.whitelisted, #content .showBundledDeals, #content #giveaway_filters_Update, .page__heading__button--green, .page_heading_btn.green, .sale-savings--high, .offer__discount, #content .deal_game_discount, .btn-success, #btn-get, .esgst-sttb-button, .esgst-stbb-button, .show-hide-giveaway-list.small-colored, .table__column__key__redeem, .birthday_event_btn--light, .fanatical_savings, .fanatical_pricing {
    background-image: var(--SGSP-green-buttons-bg-color)!important;
    background-color: transparent!important;
    border: 1px solid #000!important;
    border-color: var(--SGSP-green-buttons-border-color)!important;
    color: var(--SGSP-green-buttons-txt-color)!important;
    cursor: pointer;
    text-shadow: var(--SGSP-ts-63)!important;
    transition: filter 0.35s ease-in;
    will-change: filter;
}
#content #gaurl a {
    background-repeat: no-repeat;
    padding: 9px 36px 10px!important;
}
#content .center.left p:last-of-type {
    margin-top: 20px;
}
#content .game_deal_wrapper:last-of-type, #help ~ .featured__outer-wrap:last-of-type, .esgst-cfh-preview {
    margin-bottom: 25px;
}
#content .pagination {
    border: none!important;
    box-shadow: none!important;
}
.nav_btn:not(.is_selected) .message_count, .nav__button .nav__notification {
    transition: filter 0.35s ease-in;
    will-change: filter;
}
#content .rulePassed {
    border-radius: 4px;
    cursor: default;
    filter: saturate(2);
}
#dateBtn {
    margin-top: 15px;
    line-height: 27px;
    height: 27px!important;
}
.author_avatar.is_icon {
    color: rgba(246, 85, 85, 0.9);
    background-color: var(--SGSP-image-bg-color);
}
.align-button-container > .comment__submit-button + .comment__submit-button {
    margin: 0 0 0 5px!important;
}
a.featured__column.featured__column--group {
    color: hsla(113, 60%, 85%, 0.9)!important;
}
.b-modal, .SGPP__tagModal_background {
    background-color: var(--SGSP-modal-bg-color)!important;
    opacity: 0.85!important;
}
.sg2o-modal-dialog {
    background-color: var(--esgst-modal-bg-color)!important;
}
.block_header + a[href*="fanatical"] > img {
    border: 1px solid;
    border: 1px solid var(--SGSP-content-border-color);
    border-radius: 4px;
    filter: var(--SGSP-image-brightness);
    margin-top: 5px;
}
blockquote {
    margin: 0.8em -1000px 0.75em 1em;
    max-width: calc(100% - 90px);
    padding: 0.6em 2.3em!important;
    position: relative;
    quotes: "“" "”" "“" "”";
    text-shadow: var(--SGSP-ts-58);
}
blockquote:before {
    color: var(--SGSP-quote-txt-color);
    content: open-quote;
    font-size: 4em;
    left: 5px;
    line-height: 0.1em;
    margin-right: 0.25em;
    position: absolute;
    top: 22px;
    vertical-align: -0.4em;
}
blockquote::after {
    content: "";
}
.chart__heading {
    text-shadow: var(--SGSP-ts-19);
}
.chart__heading__medium {
    color: var(--SGSP-headings-txt-color);
}
.chart__subheading {
    color: hsla(0, 0%, 75%, 0.95);
    text-shadow: var(--SGSP-ts-41);
}
.chart__subheading__green {
    color: #80cc33;
}
.chart:nth-of-type(even):not(#cvChartContainer), #charts, div#GaFormRealCV, div#GaFormRules, div#GaFormMisc, div#GaFormAdvanced, .creatorTools, .modTools, .cmGame.notFound {
    background-color: var(--SGSP-content-inner-bg-color);
    border: 1px solid var(--SGSP-content-inner-border-color);
}
.chart--genre > .highcharts-container, .chart--giveaways-created > .highcharts-container, .chart--price > .highcharts-container {
    right: 4px;
}
.chart--metascore > .highcharts-container, .chart--release_date > .highcharts-container {
    right: 15px;
}
.chart__tooltip-header, .highcharts-tooltip p[style*="#808D9C"] {
    color: var(--SGSP-headings-txt-color);
    text-shadow: var(--SGSP-ts-22)!important;
}
.chart__tooltip-point, .highcharts-tooltip p[style*="#6286D3"], .highcharts-tooltip p[style*="rgba(98, 134, 211, 0.5)"] {
    text-shadow: var(--SGSP-ts-22)!important;
}
.highcharts-tooltip p[style*="rgba(98, 134, 211, 0.5)"] {
    color: rgba(160, 160, 160, 0.85)!important;
}
#charts {
    border-radius: 8px;
    display: flex;
    height: 340px!important;
    padding-top: 25px;
}
#charts + .separator:before {
    content: "Breakdown statistics";
    color: hsl(213, 19%, 63%);
    display: flex;
    font-size: 24px;
    font-weight: bold;
    justify-content: center;
    text-shadow: var(--SGSP-ts-57);
    position: relative;
    bottom: 335px;
}
#content #charts h2.center, #content .sidebar__navigation:last-of-type + div, img[title*="Extended Steamgifts"] {
    display: none;
}
#content .sidebar--wide {
    min-width: inherit!important;
}
#content .sidebar__navigation {
    margin-top: 5px;
    padding: 4px;
}
#content .sidebar a {
    border: 1px solid transparent!important;
}
#content .sidebar__navigation__item__link:hover {
    background-image: var(--SGSP-sidebar-link-bg-color);
    border: 1px solid!important;
    border-color: var(--SGSP-sidebar-link-border-color)!important;
}
#content .deal_game_image.global__image-outer-wrap {
    padding: 4px 4px 1px;
}
#content .deal_game_image img:not([src*="http"]) {
    min-width: 150px;
}
#content a.game_deal_wrapper.bundled {
    background-color: hsla(0, 60%, 31%, 0.2);
    border-color: hsla(0, 60%, 45%, 0.2)!important;
}
#content .game_deal_wrapper .deal_game_price {
    width: 100px;
}
#content .game_deal_wrapper .deal_game_title {
    font-size: 17px;
    margin-bottom: -10px;
}
#content .deal_game_discount {
    font-size: 16px;
}
#content #keySellers, #content #resellers {
    margin-bottom: 15px;
}
#content .discount_percentage {
    color: var(--SGSP-green-buttons-txt-color)!important;
}
#content .store-entry .discount_percentage {
    color: hsl(94, 27%, 55%);
}
#content .discount_original_price {
    color: var(--SGSP-general-txt-color);
    opacity: 0.6;
}
#content .stores h3 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
}
#content .fa-spinner {
    text-indent: 0;
}
#content .chart {
    width: 254px;
    margin-left: auto;
    margin-right: auto;
}
.left .chart > div {
    left: 15px;
}
#charts svg {
    filter: brightness(80%);
}
#charts svg rect {
    fill: hsla(0, 0%, 0%, 0);
}
#content g path[fill="#cccccc"], #content g path[FILL="#cccccc"] {
    fill: hsla(0, 0%, 0%, 0);
}
#content g path[fill="#ffffff"], #content g path[FILL="#ffffff"] {
    fill: #444;
}
#content g path[stroke="#cccccc"], #content g path[STROKE="#cccccc"], #content g path[STROKE="#ffffff"], #content g path[stroke="#ffffff"], g ellipse[stroke="#ffffff"], #content g path[FILL="#ffffff"], #content g ellipse[STROKE="#ffffff"] {
    stroke: #000;
}
#content g text {
    text-shadow: none;
}
#content g g g text, #content g > g text {
    fill: #bfbfbf;
    text-shadow: var(--SGSP-ts-22)!important;
}
div#GaFormRealCV, div#GaFormRules, div#GaFormMisc, div#GaFormAdvanced {
    border-radius: 8px;
    margin: 3px;
    padding-left: 7px;
    padding-top: 10px;
    width: unset;
}
#content input#filterCustomRule, #content input[type="number"], #content input[type="text"]:not(#username) {
    border-radius: 4px;
    color: hsl(0, 0%, 68%)!important;
    font-weight: 600;
    text-indent: 5px;
}
#content form[name="giveaway_filters"] {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
div#GaFormRealCV input, div#GaFormRules input, div#GaFormMisc input {
    margin-left: 20px;
}
div#GaFormAdvanced {
    margin-top: 30px;
    padding: 8px;
    width: 66.2%;
}
div#GaFormAdvanced + .center-text {
    width: 100%;
}
button[type="submit"]#giveaway_filters_Update {
    width: 160px;
}
.show-hide-giveaway-list.small-colored {
    text-decoration: none;
    width: 140px;
}
#content .modal-backdrop {
    background-color: var(--SGSP-modal-bg-color)!important;
}
#content .modal-backdrop.in {
    opacity: 0.85;
}
#content .modal-content {
    background-color: var(--SGSP-body-bg-color)!important;
    background-image: linear-gradient(var(--SGSP-content-bg-color) 0%, var(--SGSP-content-bg-color) 100%)!important;
    border: solid 1px var(--SGSP-content-border-color);
    box-shadow: 0 0 6px 2px hsla(0, 0%, 0%, 0.8);
    text-shadow: var(--SGSP-ts-41);
}
#content .modal-header {
    background-color: var(--SGSP-tableheading-bg-color);
    border-bottom: 1px solid hsla(0, 0%, 0%, 0.6);
    border-radius: 5px 5px 0 0;
    color: var(--SGSP-headings-txt-color);
}
#content .modal-title {
    font-weight: 600;
    font-size: 24px;
    line-height: 0.8;
    text-shadow: var(--SGSP-ts-23);
}
#content .modal-header .close {
    color: #fff;
    text-shadow: var(--SGSP-ts-11);
}
#content .modal-body .featured__outer-wrap--giveaway {
    margin-bottom: 10px;
}
::placeholder {
    color: hsla(0, 0%, 70%, 0.5)!important;
    text-shadow: var(--SGSP-ts-39);
}
#content input#filterCustomRule:focus, #content input[type="number"]:focus, #content input[type="text"]:focus:not(#username) {
    border-radius: 4px;
    color: hsl(0, 0%, 75%)!important;
    font-weight: 600;
    text-indent: 5px;
}
#content textarea {
    border-radius: 4px;
    font-weight: 600;
    padding: 5px 5px 3px;
}
#content #giveaway_giveawayUrl {
    width: 402px;
}
input#filterCustomRule {
    margin-top: 10px;
    width: 912px;
}
.creatorTools, .modTools {
    border-radius: 8px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.creatorTools h2, .modTools h2, .creatorTools p, .modTools p {
    display: flex;
    justify-content: center;
    width: 100%;
}
#content p[style*="red"] {
    color: rgba(246, 85, 85, 0.9)!important;
}
.entry.validEntry, .entry.notvalidEntry {
    border-radius: 4px;
    cursor: default!important;
    max-width: 45%;
    margin: 0 auto -10px;
}
.entry.validEntry {
    border-color: hsl(88, 90%, 25%)!important;
    background-image: linear-gradient(hsla(88, 65%, 44%, 0.2) 0%, hsla(88, 74%, 21%, 0.9) 100%)!important;
}
.entry.notvalidEntry {
    background-color: transparent!important;
    background-image: linear-gradient(hsla(0, 65%, 44%, 0.23) 0%, hsla(0, 74%, 24%, 0.9) 100%)!important;
    border-color: #800!important;
    color: hsl(0, 68%, 80%)!important;
}
#content .rules {
    padding: 20px;
}
#content .featured__outer-wrap + .entry.validEntry, #content .featured__outer-wrap + .entry.notvalidEntry {
    margin-top: 25px;
}
#content .entries {
    margin-top: 40px;
}
#content .featured__outer-wrap {
    background-image: none!important;
    background-color: transparent!important;
    border-radius: 4px;
    max-width: 96%;
    padding: 0;
    top: 0;
}
#content .featured__inner-wrap {
    background-image: var(--SGSP-featured-giveaway-bg-gradient);
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    border: 1px solid var(--SGSP-content-border-color);
    border-radius: 4px;
    padding: 25px 10px 25px 25px;
}
#content .featured__summary {
    padding: 0 10px 10px;
}
.gamanageicons {
    left: -50px;
    margin-right: -38px;
    position: relative;
}
.gamanageicons i {
    margin-left: 8px;
}
.gamanageicons i:hover {
    color: var(--SGSP-green-icons-txt-color);
    filter: var(--SGSP-nav-button-hover-brightness);
}
.gastatus {
    margin-left: -28px;
}
.gastatus a {
    border: none!important;
}
.gastatus + a.global__image-outer-wrap.global__image-outer-wrap--game-large, .gamanageicons + a.global__image-outer-wrap.global__image-outer-wrap--game-large {
    padding: 5px!important;
    border-radius: 4px!important;
    margin: 5px 5px 5px 16px!important;
    background-color: var(--SGSP-image-bg-color)!important;
    box-shadow: 3px 3px 4px hsla(0, 0%, 0%, 0.2) inset, 0 0 0 1px #000!important;
    border: none!important;
}
.gamanageicons + a.global__image-outer-wrap.global__image-outer-wrap--game-large {
    margin: 10px 5px!important;
}
.gastatus + a.global__image-outer-wrap.global__image-outer-wrap--game-large:hover, .gamanageicons + a.global__image-outer-wrap.global__image-outer-wrap--game-large:hover, #content .deal_game_image.global__image-outer-wrap:hover {
    background-color: var(--SGSP-image-bg-color)!important;
    filter: brightness(95%)!important;
}
.gastatus + a + .featured__summary .featured__heading, .gamanageicons + a + .featured__summary .featured__heading {
    margin: 10px 0 0;
}
.gastatus + a + .featured__summary .featured__heading__small, .gamanageicons + a + .featured__summary .featured__heading__small {
    font-size: 14px;
}
#content .manageGa a, #content #gaurl a, #content .showBundledDeals, #content .back-guide a, .show-hide-giveaway-list.small-colored {
    border: 1px solid;
    border-radius: 4px;
    font: bold 13.33px Lato, sans-serif;
    padding: 6px 10px;
}
#content .manageGa a:before, #content #gaurl a:before, #content .showBundledDeals:before, #content .back-guide a:before {
    margin-right: 5px;
}
#content .fa-exclamation {
    font-family: inherit;
}
#content .fa-pencil::before, #content .fa-exclamation:before, #content .fa-eye:before, #content .fa-eye-slash:before, #content .fa-arrow-left:before {
    font: normal normal normal 14px/1 FontAwesome;
}
#content .fa-exclamation:before {
    color: hsl(187, 43%, 55%);
}
#content .featured__column:not(.featured__column--contributor-level--positive) {
    color: hsl(0, 0%, 65%)!important;
    border-color: hsla(0, 0%, 0%, 0.5)!important;
}
#content .featured__heading {
    color: hsla(0, 0%, 75%, 0.95)!important;
}
#content .featured__heading__medium {
    font-size: 20px;
}
#content .featured__heading__small {
    color: hsl(0, 0%, 68%)!important;
    font-size: 16px;
}
#content .featured__column a[style*="rgb(173,112,112)"], #content .featured__column i[style*="rgb(173,112,112)"] {
    color: hsl(202, 63%, 75%)!important;
    opacity: 1;
}
.manageGa + br ~ .featured__outer-wrap .featured__inner-wrap, #help ~ .featured__outer-wrap .featured__inner-wrap, #content .game_deal_wrapper {
    background-image: none!important;
    background-color: var(--SGSP-content-inner-bg-color);
    border: 1px solid var(--SGSP-content-inner-border-color)!important;
}
#content .featured__outer-wrap .global__image-outer-wrap--game-large img, .nav__button-container--notification {
    border-radius: 4px;
}
#content .featured__outer-wrap a:not(.global__image-outer-wrap) {
    border-bottom: transparent!important;
}
#content .global__image-outer-wrap--avatar-small {
    border-bottom-color: hsla(0, 0%, 0%, 0.6)!important;
}
#content .global__image-outer-wrap--game-large.global__image-outer-wrap--missing-image-small {
    font-size: 42px;
}
#content .global__image-outer-wrap--game-large.global__image-outer-wrap--missing-image-small > .centerFa {
    color: inherit;
    width: 140px;
}
.goog-tooltip div, .esgst-feature-description, .jqstooltip {
    background: var(--SGSP-tooltip-bg-color)!important;
    border: 1px solid var(--SGSP-tooltip-border-color)!important;
    border-radius: 4px!important;
    box-shadow: 2px 2px 8px 0 hsla(0, 0%, 0%, 0.8)!important;
    color: var(--SGSP-tooltip-txt-color)!important;
    font-size: 12px;
    padding: 4px!important;
    text-shadow: var(--SGSP-ts-45);
}
.cmGame {
    border-radius: 4px;
    max-width: 85%;
    margin: auto auto 4px;
    height: 36px;
    overflow: hidden;
    padding: 0 5px;
}
.cmGame.multiplewins {
    height: auto;
    line-height: 1.3em;
    margin-bottom: 4px;
    padding: 10px 5px;
}
.total + .separator + .cmGame:not(.multiplewins):not(.notActivatedGame) {
    font-size: 15px;
    width: 525px;
    background-color: hsla(0, 65%, 44%, 0)!important;
    border-color: hsl(88, 90%, 25%)!important;
    background-image: linear-gradient(hsla(88, 65%, 44%, 0.2) 0%, hsla(88, 74%, 21%, 0.9) 100%)!important;
}
.total + .separator + .cmGame:not(.multiplewins), .cmGame.notActivatedGame {
    font-size: 20px;
    font-weight: bold;
    line-height: 36px;
}
.total + .separator + .cmGame:not(.multiplewins) h2 {
    color: hsla(94, 46%, 80%, 0.9)!important;
}
div#content:not(.entry):not(.cmGame) {
    font-size: 0.95em;
    padding: 65px 25px 0;
    min-width: 950px;
    margin-left: auto;
    text-shadow: var(--SGSP-ts-70);
}
.entry, .cmGame, #content .alert-danger {
    font-size: initial;
}
#content .alert-danger {
    padding: 10px;
}
#content a {
    border-bottom: none;
}
#content .left-column {
    position: inherit;
}
#content .left-column input[type=image] {
    background-color: inherit;
}
.img_ad:hover {
    filter: brightness(0.6)!important;
}
#content .center:not(h2) {
    background-color: var(--SGSP-content-bg-color);
    border: 1px solid var(--SGSP-content-border-color);
    border-radius: 4px;
    box-shadow: 0 0 6px 2px hsla(0, 0%, 0%, 0.8);
    margin-left: 15px;
    padding: 20px;
    text-shadow: var(--SGSP-ts-54);
}
#content .center.left {
    margin-left: 25px;
}
#content #form {
    margin-left: auto;
}
#content #help {
    text-align: left;
    margin-top: 25px;
}
#content h1 {
    font-size: 34px;
}
#content h2 {
    font-weight: bold;
    line-height: 36px;
}
#content label[for="order"] {
    text-align: center;
    padding-right: 0;
}
#content td, #content .left .list li, .container img, .description, .description a, .ascii, .comment_body_default, .comment_body_delete, .comment_body_collapse, .page__heading__breadcrumbs i, .sidebar .last_updated, .popup_heading_h2, .sgun_note_date, .SGPP_EntryComm > i {
    color: var(--SGSP-general-txt-color);
}
#content .legend {
    margin-right: 5px;
    font-weight: 600;
    padding: 0 15px;
    width: -moz-max-content;
    width: -webkit-max-content;
    width: max-content;
}
#content .subtitle {
    margin-bottom: 40px;
    margin-top: -10px;
}
.tab-content {
    margin-left: auto;
    max-width: calc(100% - 190px);
}
.tab-content .cmGame, .form__sync-default, .form__sync-loading {
    margin-left: 0!important;
}
.tab-links {
    padding-left: 0;
    margin-left: 200px;
}
.tab-links a {
    border: 1px solid;
    border-radius: 4px 4px 0 0;
    margin-bottom: -1px;
    padding: 9px 5px;
}
.tab-links li {
    margin: 0 2px;
}
#content .total {
    background-image: var(--SGSP-sgtool-total-bg-color);
    border: 1px solid var(--SGSP-pinned-border-color);
    border-radius: 8px;
    padding: 5px;
    margin-left: auto;
    margin-right: auto;
    height: inherit;
    display: block;
    width: 84.5%;
    min-width: 700px;
}
.store-entry-steam img {
    filter: invert(0.8);
}
.store-entry img {
    background-color: rgba(129, 129, 129, 0.2);
    border-radius: 4px;
    margin-top: 6px;
    padding: 2px;
}
#wrapper {
    background-color: transparent;
    color: var(--SGSP-general-txt-color);
    text-shadow: var(--SGSP-ts-70);
}
input#real_cv_order {
    border-color: white!important;
}
*:focus, *:hover, .bootstrap-select .dropdown-toggle:focus {
    outline: none!important;
}
input.form-control {
    margin-bottom: 0!important;
}
.btn-default, .btn-primary, .btn-primary:active, .btn-info {
    background-color: hsl(208, 56%, 26%)!important;
    border-color: #000!important;
    color: var(--SGSP-general-txt-color)!important;
    text-shadow: var(--SGSP-ts-33)!important;
    transition: filter 0.35s ease-in;
    will-change: filter;
}
.btn-primary[data-pause], .btn-primary[data-resume] {
    background: linear-gradient(hsl(208, 50%, 42% ) 0, hsl(208, 66%, 32% ) 50%, hsl(208, 86%, 20% ) 100% );
    border-color: hsla(204, 48%, 60%, 1) hsla(206, 63%, 48%, 1) hsla(207, 62%, 42%, 1) hsla(206, 63%, 48%, 1)!important;
    color: hsla(200, 40%, 72%, 1)!important;
    text-shadow: var(--SGSP-ts-63)!important;
}
.btn-primary:hover:not(:active):not([data-pause]):not([data-resume]) {
    color: #dadada!important;
    background-color: hsl(208, 57%, 33%);
}
.btn-primary.active, .btn-primary:active:not([data-pause]):not([data-resume]), .open > .dropdown-toggle.btn-primary, .btn-default.active, .btn-default:active, .open > .dropdown-toggle.btn-default {
    color: #dadada!important;
    background-color: hsl(208, 57%, 33%)!important;
    border-color: #000!important;
}
.btn-primary.disabled.focus, .btn-primary.disabled:focus, .btn-primary.disabled:hover, .btn-primary[disabled].focus, .btn-primary[disabled]:focus, .btn-primary[disabled]:hover, fieldset[disabled] .btn-primary.focus, fieldset[disabled] .btn-primary:focus, fieldset[disabled] .btn-primary:hover {
    background-color: hsl(208, 56%, 23%);
}
.dropdown-menu {
    background-color: #333;
    border: 1px solid rgba(0, 0, 0, 0.5);
    box-shadow: none;
}
.dropdown-menu > li > a, .datepicker-dropdown {
    color: var(--SGSP-general-txt-color)!important;
    text-shadow: var(--SGSP-ts-65);
}
.dropdown-menu > li > a:focus, .dropdown-menu > li > a:hover {
    color: #dadada!important;
    background-color: #252525;
    outline: none;
}
button.btn.dropdown-toggle.btn-inverse.btn-xs, .btn-group.open .dropdown-toggle {
    background-color: #3e3e3e!important;
    box-shadow: 0 0 0 1px var(--SGSP-input-border-color);
    text-shadow: var(--SGSP-ts-32)!important;
}
.btn.disabled, .btn[disabled], fieldset[disabled] .btn {
    opacity: 0.35!important;
}
.popover.left > .arrow {
    border-left-color: #000!important;
}
.popover.left > .arrow:after {
    border-left-color: #444!important;
    background-color: rgba(28, 28, 28, 0)!important;
}
.popover {
    background-color: #444;
    border: 1px solid #000;
    box-shadow: none;
    color: var(--SGSP-general-txt-color);
    text-shadow: var(--SGSP-ts-32)!important;
}
.query-builder .rule-container, .query-builder .rule-placeholder, .query-builder .rules-group-container {
    border: 1px solid #111!important;
    background: hsla(0, 0%, 13%, 0.5)!important;
}
.query-builder .rules-group-container {
    border: 1px solid rgba(0, 0, 0, 0.6)!important;
    background: hsla(0, 0%, 20%, 0.4)!important;
}
.query-builder .rule-value-container {
    border-left: 1px solid hsl(0, 0%, 20%)!important;
    box-shadow: -1px 0 0 #000!important;
}
.query-builder .error-container {
    color: var(--SGSP-red-icons-txt-color)!important;
}
.error .bootstrap-select .dropdown-toggle, .has-error .bootstrap-select .dropdown-toggle {
    border-color: #800!important;
    box-shadow: none!important;
}
.query-builder .has-error, #content .alert-danger, .cmGame.multiplewins, .cmGame.notActivatedGame {
    background-color: hsla(0, 65%, 44%, 0)!important;
    border-color: #800!important;
    background-image: linear-gradient(hsla(0, 65%, 44%, 0.23) 0%, hsla(0, 74%, 24%, 0.9) 100%)!important;
}
#content .alert-danger, .cmGame.multiplewins, .cmGame.notActivatedGame {
    color: hsl(0, 68%, 80%)!important;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 65%;
}
.query-builder .rules-list > ::after, .query-builder .rules-list > ::before {
    border-color: rgba(0, 0, 0, 0.6)!important;
}
.query-builder .error-container + .tooltip .tooltip-inner {
    color: var(--SGSP-red-icons-txt-color)!important;
    background-color: #444;
    border: 1px solid #000;
    box-shadow: none;
    text-shadow: var(--SGSP-ts-42)!important;
}
.tooltip.right .tooltip-arrow {
    filter: drop-shadow(-1px 0 0 #000);
    left: 1px;
    border-right-color: #444;
}
.tooltip.fade.in {
    opacity: 1!important;
}
.query-builder p.filter-description {
    background: hsla(200, 100%, 50%, 0.2)!important;
    border: 1px solid #346F7B!important;
    color: #AAD1E4!important;
}
.query-builder .rule-placeholder {
    border: 1px dashed #545454!important;
    opacity: 0.7!important;
}
.query-builder .form-control:focus {
    box-shadow: rgba(0, 0, 0, 0.075) 0 1px 1px inset, hsla(210, 100%, 41%, 0.6) 0 0 8px!important;
}
.query-builder .has-error .form-control:focus {
    box-shadow: rgba(0, 0, 0, 0.75) 0 1px 1px inset, #d82825 0 0 6px!important;
}
.btn-group-xs > .btn, .btn-xs, .btn-group-xs > .btn > i, .btn-xs > i {
    text-shadow: var(--SGSP-ts-44);
}
.btn-default[data-not], .btn-default[data-invert] {
    color: var(--SGSP-general-txt-color)!important;
    background-color: #404040!important;
    border-color: #000!important;
    text-shadow: var(--SGSP-ts-44);
}
.bootstrap-select.btn-group .dropdown-menu li a span.text:hover, .btn.focus, .btn:focus:not(.btn-success):not(.btn-danger):not(.btn-info):not([data-pause]):not([data-resume]), .btn:hover:not(.btn-success):not(.btn-danger):not(.disabled):not(.btn-primary):not(.btn-info) {
    color: #dadada!important;
}
.btn.active, .btn:active {
    box-shadow: none!important;
}
.bootstrap-select.btn-group .dropdown-toggle .filter-option, .bootstrap-select.btn-group .dropdown-toggle .caret {
    color: rgba(160, 160, 160, 0.85)!important;
}
.bootstrap-select.btn-group .dropdown-menu .bs-searchbox .form-control {
    color: hsl(0, 0%, 75%)!important;
    filter: brightness(0.8);
}
.bootstrap-select.btn-group .dropdown-menu li.no-results {
    background-color: hsla(0, 65%, 44%, 0)!important;
    border: 1px solid #800!important;
    border-radius: 3px;
    background-image: linear-gradient(hsla(0, 65%, 44%, 0.23) 0%, hsla(0, 74%, 24%, 0.9) 100%)!important;
    color: hsl(0, 75%, 72%)!important;
}
.bootstrap-select.btn-group .dropdown-menu li.selected a, .bootstrap-select.btn-group .dropdown-menu li.active a {
    background-color: #252525;
    border-bottom: 1px solid var(--SGSP-input-border-color);
    border-top: 1px solid var(--SGSP-input-border-color);
    outline: none;
    transition: filter 0.35s ease-in;
    will-change: filter;
}
.query-builder .radio-default {
    margin-right: 5px;
}
.query-builder .radio-default input {
    display: none;
}
.radio {
    padding-left: 20px;
}
.radio label {
    position: relative;
}
.radio label, .checkbox label {
    padding-right: 5px;
}
.radio input[type="radio"] {
    opacity: 0;
    z-index: 1;
    cursor: pointer;
}
.radio input[type="radio"]:checked + label::after {
    transform: scale(1, 1);
}
.radio label::before {
    background-color: #3e3e3e;
    border-color: hsla(0, 0%, 0%, 0.65);
    border-image: initial;
    border-radius: 50%;
    border-style: solid;
    border-width: 1px;
    box-sizing: unset;
    content: "";
    display: inline-block;
    height: 17px;
    left: 0;
    margin-left: -21px;
    margin-top: -1px;
    position: absolute;
    transition: border 0.15s ease-in-out;
    width: 17px;
}
.radio label::after {
    background-color: var(--SGSP-green-icons-txt-color);
    border-radius: 50%;
    content: " ";
    display: inline-block;
    height: 11px;
    left: 3px;
    margin-left: -20px;
    position: absolute;
    top: 3px;
    transform: scale(0, 0);
    transition: transform 0.1s cubic-bezier(0.8, -0.33, 0.2, 1.33);
    width: 11px;
}
.datepicker-dropdown.datepicker-orient-top:before {
    border-top: 7px solid #000;
}
.datepicker-dropdown.datepicker-orient-top:after {
    border-top: 6px solid #333;
}
.datepicker .datepicker-switch:hover, .datepicker .next:hover, .datepicker .prev:hover, .datepicker tfoot tr th:hover, .datepicker table tr td.day.focused, .datepicker table tr td.day:hover {
    background: hsla(0, 0%, 13%, 0.5);
    box-shadow: 0 0 0 1px #000;
}
.datepicker table tr td.today, .datepicker table tr td.today.disabled, .datepicker table tr td.today.disabled:hover, .datepicker table tr td.today:hover {
    background-color: hsl(208, 57%, 33%)!important;
    background-image: none;
    border: none;
    box-shadow: 0 0 0 1px #000;
    color: var(--SGSP-general-txt-color)!important;
}
.datepicker table tr td.active.active {
    background-color: #365924!important;
    background-image: none;
    border: none;
    box-shadow: 0 0 0 1px #000;
    color: var(--SGSP-general-txt-color)!important;
    text-shadow: var(--SGSP-ts-45);
}
.datepicker table tr td.new, .datepicker table tr td.old {
    color: #515151;
}
.caret {
    filter: drop-shadow(0 1px 0 #000);
}
.comment__actions, .page__description__edit, .action_list, .patreon_reward_summary_color_cancel, .heading_btns > div {
    color: var(--SGSP-secondary-txt-color);
}
.action_list, .comment_collapse_btn, .comment_expand_btn, .author_name:not(.is_op), .author_small, .author_permalink {
    text-shadow: var(--SGSP-ts-54);
}
.comment__collapse-button, .comment__expand-button, .comment_collapse_btn, .comment_expand_btn, #content a, #content a :hover, #content a :focus, .comment__author i {
    color: inherit;
}
.comment__birthday {
    opacity: 0.55;
}
.comment__child, .comment_children .comment_outer > .comment_inner, .review_flex, .reply_form > form, .comment_inner + .comment_children > .MRBox {
    background-color: var(--SGSP-reply-bg-color);
    border: 1px solid var(--SGSP-reply-border-color);
    box-shadow: 1px 1px 0 hsla(0, 0%, 30%, 0.3) inset;
    border-radius: 4px;
    padding: 15px;
}
.comments, .page__description {
    margin-bottom: 8px;
}
.comment__cancel-button, .form__edit-button, .form__logout-button, .page__description__cancel {
    color: hsl(215, 13%, 54%);
}
.comment__children:not(.comment__children--no-indent), .comment_children {
    border-left: 1px solid var(--SGSP-separator-dark-color)!important;
    box-shadow: 1px 0 0 var(--SGSP-separator-light-color) inset!important;
    padding-left: 25px;
}
.comment__children:not(.comment__children--no-indent):hover, .comment_children:hover {
    box-shadow: 1px 0 0 var(--SGSP-separator-hover-color) inset!important;
}
.comment__delete-state .comment__description {
    color: hsla(213, 13%, 48%, 0.8)!important;
}
.comment__description.markdown.markdown--resize-body > p {
    text-shadow: var(--SGSP-ts-1);
}
.comments__entity {
    background-color: var(--SGSP-tableheading-bg-color);
    border: 1px solid var(--SGSP-tableheading-border-color);
    border-radius: 4px 4px 0 0;
    color: var(--SGSP-general-txt-color);
    max-height: 51px;
    max-width: 100%;
    padding: 10px 10px 5px;
    text-shadow: var(--SGSP-ts-54);
    -moz-transition: max-height 2s ease-in-out;
    -webkit-transition: max-height 2s ease-in-out;
    -o-transition: max-height 2s ease-in-out;
    transition: max-height 2s ease-in-out;
    will-change: transition;
}
.comments__entity:hover {
    -webkit-transition-delay: 0.5s;
    -moz-transition-delay: 0.5s;
    -o-transition-delay: 0.5s;
    transition-delay: 0.5s;
    max-height: 1000px;
}
.comments__entity blockquote {
    margin: 6px 0 10px 10px;
}
.comments__entity__name {
    margin-top: -6px;
}
.comment__envelope, .comment_unread {
    background-color: hsl(0, 0%, 18%);
    background-image: linear-gradient(hsl(0, 0%, 20%) 0%, hsl(0, 0%, 15%) 100%);
    border: 1px solid hsla(60, 3%, 25%, 1);
    color: var(--SGSP-green-icons-txt-color);
    text-shadow: var(--SGSP-ts-17);
}
.comment_unread i {
    color: inherit;
}
.comment__parent {
    max-width: calc(100% - 50px);
    margin-right: -1000px;
}
.comment__child {
    min-width: 600px;
    width: fit-content;
    max-width: 85%;
}
@media screen and (max-width: 1280px) {
    .comment__child {
        min-width: unset;
    }
}
.comment__username:not(.comment__username--op) a:not(.esgst-namwc-highlight):not(.esgst-wbh-highlight):not(.user__whitened):not(.user__blackened), .author_name:not(.esgst-namwc-highlight):not(.esgst-wbh-highlight):not(.user__whitened):not(.user__blackened), .form__heading__text, .form__level, .giveaway__links:not(.esgst-giveaway-links) span, .giveaway-summary__links span, .giveaway__username:not(.esgst-namwc-highlight):not(.esgst-wbh-highlight):not(.user__whitened):not(.user__blackened), .markdown a:not(.esgst-gc), .pagination__navigation a:not(.is-selected), .pagination_navigation a, .popup__actions, .popup_actions, .popup__description__small, .table__column__secondary-link:not(.esgst-namwc-highlight):not(.esgst-wbh-highlight):not(.user__whitened):not(.user__blackened):not(.table__column__select), .comments__entity__name, .table .underline:not(.esgst-namwc-highlight):not(.esgst-wbh-highlight):not(.user__whitened):not(.user__blackened), #content strong a, #content td a, form .heading .name, .header_search .description .blue, .esgst-ggl-member, .esgst-form-heading-text, .patreon_reward:not(.is_locked) .patreon_reward_summary_name, .esgst-aic-source, .esgst-popup-actions, .DTEP_ACHIEVEMENTS + a > [style*="color"], .esgst-steam-api-key ~ div a, a.esgst-bold:not(.esgst-namwc-highlight):not(.esgst-wbh-highlight-whitelisted):not(.esgst-wbh-highlight-blacklisted) {
    color: var(--SGSP-link-txt-color)!important;
    text-shadow: var(--SGSP-ts-76);
}
.dropdown_btn:not(.nav__row) {
    background-image: var(--SGSP-nav-dropdown-bg-color);
    text-shadow: var(--SGSP-ts-35);
    transition: color 0.5s;
}
.header_search > div:first-child > div > div:last-child {
    background-color: hsla(201, 43%, 57%, 0.8)!important;
    box-shadow: 0 -1px 0 0 #000, 0 1px 0 0 #000, 1px 0 0 0 #000, -1px 0 0 0 #000;
}
.header_search > div:last-child > div > div:last-child {
    background-color: hsla(0, 66%, 55%, 0.8);
    box-shadow: 0 -1px 0 0 #000, 0 1px 0 0 #000, 1px 0 0 0 #000, -1px 0 0 0 #000;
}
.header_search > div > div > div:last-child {
    filter: brightness(0.8);
    transition: filter 0.35s ease-in;
    will-change: filter;
}
.header_search > div > div > div:last-child:hover:not(:active) {
    background-image: none;
    filter: brightness(1.05);
}
.header_search .description {
    color: var(--SGSP-general-txt-color);
    text-shadow: var(--SGSP-ts-54);
    will-change: transform;
}
.comment__summary[style="opacity: 0.5;"] {
    opacity: 0.3!important;
}
.comment__username--deleted {
    color: var(--SGSP-secondary-txt-color);
}
.comment__username--op, a.author_name.is_op {
    background-color: hsl(210, 65%, 26%);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.7);
}
.comment__username--op a:not(.esgst-namwc-highlight):not(.esgst-wbh-highlight):not(.user__whitened):not(.user__blackened), .comment__username--permalink a, a.author_name.is_op:not(.esgst-namwc-highlight):not(.esgst-wbh-highlight):not(.user__whitened):not(.user__blackened) {
    color: #BBBBBB!important;
    text-shadow: var(--SGSP-ts-43)!important;
}
.comment__username--op a:not(.esgst-namwc-highlight):not(.esgst-wbh-highlight):not(.user__whitened):not(.user__blackened) {
    text-shadow: var(--SGSP-ts-43)!important;
}
.description a {
    border-bottom-color: var(--SGSP-general-txt-color);
}
.ascii {
    opacity: 0.5;
}
img[src="https://cdn.steamgifts.com/img/logo.png"], img[src="https://cdn.steamtrades.com/img/logo.png"] {
    opacity: 0.7;
}
div > .table__column--width-fill > form > strong {
    color: #6db563;
}
.fanatical_name {
    color: var(--SGSP-sidebar-link-txt-color);
}
.fanatical_date {
    color: var(--SGSP-secondary-txt-color);
}
.fanatical_container .fanatical_img, .fanatical_icon {
    filter: var(--SGSP-image-brightness);
}
.fanatical_container {
    border: 1px solid;
    border-radius: 4px;
}
.fanatical_container {
    background-image: var(--SGSP-pageheading-bg-color);
    border-color: var(--SGSP-pageheading-border-color);
}
.sidebar .fanatical_container {
    background: var(--SGSP-sidebar-bg-color);
    border-color: var(--SGSP-sidebar-border-color);
    margin-top: 15px!important;
}
.fa-envelope-o:before {
    content: "\\f0e0";
    font-size: 16px;
}
.featured__container {
    background-color: transparent;
}
.featured__column {
    color: hsl(0, 0%, 65%);
    background-color: hsla(0, 0%, 0%, 0.09);
    border: 1px solid rgba(0, 0, 0, 0.17);
    box-shadow: none!important;
    text-shadow: var(--SGSP-ts-19);
}
.featured__columns .fa-thumbs-up {
    opacity: 1;
}
.featured__heading, .featured__table a, .featured__container .esgst-mm-checkbox {
    color: hsla(0, 0%, 75%, 0.95);
    text-shadow: var(--SGSP-ts-25);
}
.featured__table a[style*="color"], .featured__column > [style*="color"] {
    filter: saturate(1.65) opacity(0.95);
    text-shadow: var(--SGSP-ts-59);
}
.featured__heading__small {
    color: hsl(0, 0%, 68%);
}
.featured__table__row {
    text-shadow: var(--SGSP-ts-52);
    border-top: 1px solid hsla(0, 0%, 63%, 0.18);
}
.featured__table__row__left, #sg_dyepb_toolbar span + a {
    color: hsla(0, 0%, 100%, 0.65)!important;
}
.featured__table__row__right, #sg_dyepb_toolbar span {
    color: hsla(0, 0%, 100%, 0.5)!important;
}
.featured__online-now {
    color: rgba(128, 191, 64, 0.95)!important;
}
.featured__outer-wrap {
    max-width: 100%;
    padding: 25px 0;
    position: unset;
    top: 15px;
}
.featured__outer-wrap.featured__outer-wrap--user {
    background-color: var(--SGSP-featured-bg-color)!important;
    background-image: var(--SGSP-featured-user-bg-gradient);
}
.featured__outer-wrap.featured__outer-wrap--home {
    background-color: var(--SGSP-featured-bg-color)!important;
    background-image: var(--SGSP-featured-home-bg-gradient);
}
.featured__outer-wrap.featured__outer-wrap--giveaway {
    background-color: var(--SGSP-featured-bg-color)!important;
    background-image: var(--SGSP-featured-giveaway-bg-gradient);
}
.featured__container > .featured__outer-wrap {
    background-color: transparent!important;
    background-size: cover;
    box-shadow: 0 1px 0 var(--SGSP-featured-border-color), 0 6px 10px 0 hsla(0,0%,0%,0.8);
    width: 100%;
}
.featured__outer-wrap.featured__outer-wrap--home, .featured__outer-wrap.featured__outer-wrap--giveaway, .featured__outer-wrap.featured__outer-wrap--user, #content .featured__inner-wrap {
    background-image: url(https://cdn.steamgifts.com/img/bg.png);
}
.featured__outer-wrap:before {
    display: none;
    width: 100%;
    height: 1px;
    position: absolute;
    left: 0;
    top: 0;
    content: "";
    background-size: 100%;
    background-image: linear-gradient(to right, hsla(0, 0%, 0%, 0), var(--SGSP-featured-border-color) 40%, var(--SGSP-featured-border-color) 60%, hsla(0, 0%, 0%, 0));
}
.featured__outer-wrap:after {
    display: none;
    width: 100%;
    height: 1px;
    position: absolute;
    left: 0;
    bottom: 0;
    content: "";
    background-size: 100%;
    background-image: linear-gradient(to right, hsla(0, 0%, 0%, 0), var(--SGSP-featured-border-color) 40%, var(--SGSP-featured-border-color) 60%, hsla(0, 0%, 0%, 0));
}
#help ~ .featured__outer-wrap:before, #help ~ .featured__outer-wrap:after {
    background-image: none!important;
}
#footer {
    bottom: -18px;
    position: relative;
}
.footer__inner-wrap {
    margin-right: 43px;
}
.footer__inner-wrap, #footer, .footer_inner_wrap {
    color: hsl(0, 0%, 60%);
    text-shadow: var(--SGSP-ts-26);
}
.footer__inner-wrap a, #footer a, .footer_inner_wrap a {
    color: hsla(0, 0%, 70%, 0.7);
}
.footer__inner-wrap a:hover, #footer a:hover {
    color: hsl(0, 0%, 70%);
    border-bottom: 1px dotted hsl(0, 0%, 70%);
}
.footer_inner_wrap a:hover {
    color: hsl(0, 0%, 70%);
}
.footer__inner-wrap i, .footer_inner_wrap i {
    color: hsl(0, 0%, 70%);
}
.footer_column_name, .footer_heading, .header_search > div .description strong {
    color: hsl(0, 0%, 75%);
}
.footer__outer-wrap, #footer, footer {
    background-image: var(--SGSP-header-footer-bg-color)!important;
    border-bottom: 1px solid var(--SGSP-header-footer-border-color);
    border-top: 1px solid var(--SGSP-header-footer-border-color);
}
.footer_upper {
    background-color: transparent;
}
.form__checkbox, .my__checkbox.is-disabled, .esgst-gts-section {
    color: var(--SGSP-secondary-txt-color)!important;
}
.form__checkbox.is-selected, .my__checkbox.is-selected, .fa-check:before, .form_list_item_check, .fa-thumbs-up.esgst-positive, .esgst-positive {
    color: var(--SGSP-green-icons-txt-color)!important;
    text-shadow: var(--SGSP-ts-75);
}
.btn_action.green .fa-check:before {
    color: inherit!important;
    text-shadow: inherit;
}
.esgst-orange, .dropdown_btn i.orange {
    color: hsla(30, 75%, 45%, 0.9)!important;
}
.form__checkbox:not(:last-of-type), .my__checkbox:not(:last-of-type) {
    border-bottom: 1px dotted hsl(60, 2%, 32%);
}
.form_list {
    border: 1px solid transparent;
    background-color: hsla(0, 0%, 18%, 0.55);
    box-shadow: 1px -1px hsla(0, 0%, 0%, 0.5), 1px 1px hsla(0, 0%, 0%, 0.5), -1px 1px hsla(0, 0%, 0%, 0.5), -1px -1px hsla(0, 0%, 0%, 0.5);
}
.form_list_item:not(:last-child) {
    border-bottom: 1px solid hsla(0, 0%, 0%, 0.5);
}
.form_list_item_summary_name {
    color: hsl(0, 0%, 58%);
}
.form_list_item_summary_users {
    color: var(--SGSP-secondary-txt-color);
}
.form_list_item.is-selected {
    background-image: linear-gradient(hsla(0, 0%, 25%, 0.5) 0, hsla(0, 0%, 22%, 0.5) 100%);
    box-shadow: 0 0 1px hsla(0, 0%, 40%, 0.9) inset;
}
.form_list_item.is-selected .form_list_item_summary_name {
    color: hsl(0, 0%, 71%);
}
.form_list_item.is-selected .form_list_item_summary_users {
    color: hsl(213, 13%, 64%);
}
.form_list_navigation span {
    color: var(--SGSP-general-txt-color);
    opacity: 0.6;
    text-shadow: var(--SGSP-ts-45);
}
.form__rows, .forms__rows, .page_inner_wrap.medium form {
    background-color: var(--SGSP-content-bg-color);
    background-image: none;
    border: 1px solid var(--SGSP-content-border-color);
    border-radius: 4px;
    box-shadow: 0 0 6px 2px hsla(0, 0%, 0%, 0.8);
    margin-bottom: 8px;
    margin-top: 8px;
    padding: 0 20px!important;
    text-shadow: var(--SGSP-ts-70);
}
form[method="post"] .form__rows .form__row + .form__submit-button, [key*="esg"] + .form__submit-button, form[method="post"] .form__rows .form__row + .esgst-form-row + .form__submit-button {
    margin-bottom: 20px;
}
.form__row:first-of-type {
    margin-top: 14px;
}
.form__heading__number, .form__heading__optional, form .heading .number, form .heading .optional {
    color: hsl(60, 2%, 79%);
}
form .heading {
    text-shadow: var(--SGSP-ts-70);
}
.form__input-description, .tooltip_row i[style*="color: #77899"] {
    color: var(--SGSP-secondary-txt-color)!important;
}
.form__input-small.is-disabled {
    opacity: 0.4;
}
.form__row__error {
    color: rgba(246, 85, 85, 0.9);
}
.form__row__indent, form .indent, .esgst-form-row-indent {
    border-left: 1px solid var(--SGSP-separator-light-color)!important;
    box-shadow: -1px 0 0 var(--SGSP-separator-dark-color)!important;
}
.form__sync-data > .notification {
    margin-right: 5px;
}
.form__screenshot {
    box-shadow: 0 0 0 1px var(--SGSP-image-border-color);
}
.giveaway__column--contributor-level--positive, .featured__column--contributor-level--positive {
    box-shadow: none!important;
    cursor: default!important;
    filter: hue-rotate(10deg) saturate(0.9) brightness(1.05);
}
.giveaway__column--negative, .negative, .negative i {
    color: rgba(246, 85, 85, 0.9)!important;
}
.giveaway__column--group, .featured__column--group {
    background-image: var(--SGSP-group-bg-color)!important;
    border-radius: 4px;
    box-shadow: 0 -1px 0 0 #74d467, 0 1px 0 0 #47a540, 1px 0 0 0 #399a32, -1px 0 0 0 #47a540 !important;
    color: var(--SGSP-group-txt-color)!important;
    text-shadow: var(--SGSP-ts-15);
}
.giveaway__column--group, .featured__column--group, .esgst-gv-icons .giveaway__column--contributor-level--positive:not(.esgst-glh-highlight), .esgst-gv-icons .giveaway__column--contributor-level--negative:not(.esgst-glh-highlight) {
    border: none!important;
}
.giveaway__column--whitelist, .featured__column--whitelist, .giveaway__columns--badges .giveaway__column--whitelist {
    background-image: var(--SGSP-whitelist-bg-color);
    border: none!important;
    box-shadow: 0 -1px 0 0 #2bbdca, 0 1px 0 0 #3197a0, 1px 0 0 0 #258a93, -1px 0 0 0 #3197a0 !important;
    color: var(--SGSP-whitelist-txt-color)!important;
    text-shadow: var(--SGSP-ts-16)!important;
}
.featured__column--whitelist {
    color: hsla(185, 40%, 85%, 0.9)!important;
}
.giveaway__column--invite-only, .giveaway__column--community-voted, .giveaway__column--region-restricted, .featured__column--invite-only, .featured__column--community-voted, .featured__column--region-restricted, .giveaway__columns--badges .giveaway__column--region-restricted {
    background-image: var(--SGSP-invite-bg-color);
    border-color: var(--SGSP-invite-border-color)!important;
    box-shadow: none!important;
    color: var(--SGSP-invite-txt-color)!important;
    text-shadow: var(--SGSP-ts-15);
}
.giveaway__column--positive, .author_small .is_positive, .table .reputation .is_positive, .rating_checkbox.is_positive.is_selected, .positive, .positive i {
    color: var(--SGSP-green-icons-txt-color)!important;
}
.giveaway__columns:not(.esgst-gv-icons):not(.esgst-giveaway-panel) > *:not(.giveaway__column--group):not(.giveaway__column--whitelist):not(.giveaway__column--invite-only):not(.giveaway__column--community-voted):not(.giveaway__column--contributor-level):not(.giveaway__column--region-restricted):not(form):not(.mt-more-like-this):not(.esgst-elgb-button):not(.giveaway__column--new):not(.giveaway__column--wish):not(.esgst-button-set):not(.esgst-gc):not([data-draggable-id="sgTools"]):not(.giveaway__column--birthday), #help ~ .featured__outer-wrap .featured__inner-wrap .featured__column:not(.featured__column--contributor-level--positive):not(.esgst-gwc):not(.esgst-gwr) {
    background-image: var(--SGSP-giveaway-columns-bg-color);
    border-color: var(--SGSP-giveaway-columns-border-color)!important;
    box-shadow: 1px 1px 0 var(--SGSP-giveaway-columns-boxshadow-color) inset!important;
    color: var(--SGSP-secondary-txt-color);
}
.giveaway__columns .fa-clock-o {
    margin-bottom: 2px;
}
.giveaway__heading {
    height: inherit;
    padding-bottom: 3px;
}
.giveaway__heading__name, .table__column__heading, .table h3, .esgst-ugd-table ~ .esgst-text-center .esgst-bold:not(span), .esgst-gv-popout .giveaway__heading > [data-draggable-id]:not(.esgst-gc):not(.esgst-gch-highlight), .giveaway__heading > [data-draggable-id]:not(.esgst-gch-highlight), .FTB-online-string, .giveaway__heading > [data-ui-tooltip] {
    color: hsla(0, 0%, 75%, 0.8);
    text-shadow: var(--SGSP-ts-53);
}
.giveaway__heading__thin:not(.copies__tagged) {
    color: hsl(215, 13%, 57%);
}
.giveaway__hide, .giveaway__icon {
    opacity: 0.55;
}
.giveaway_image_thumbnail, .giveaway_image_avatar, .giveaway_image_thumbnail_missing, .featured_giveaway_image_avatar, .table_image_avatar, .table_image_avatar_missing, .table_image_thumbnail, .table_image_thumbnail_missing, .table_image_flag, .table_image_flag_missing, .esgst-popup .global__image-outer-wrap, .profile_avatar, .nav_avatar, .table .avatar, .author_avatar, .nav__avatar-inner-wrap {
    box-shadow: 0 0 0 1px var(--SGSP-image-border-color), 0 0 0 1px var(--SGSP-image-border-color);
}
.giveaway_image_thumbnail:not([style*="null"]):not(.esgst-ib-game):not([class*="border"]):not([class*="whitelist"]) {
    background-color: #20201d!important;
}
.markdown img, .global__image-outer-wrap--avatar-small, #content .global__image-outer-wrap, .esgst-ib-user, .esgst-ib-game, .featured__outer-wrap .esgst-ib-user, iframe.global__image-outer-wrap {
    background-color: var(--SGSP-image-bg-color);
    border: 1px solid var(--SGSP-image-border-color);
    filter: var(--SGSP-image-brightness);
}
.giveaway-gridview .giveaway_image_thumbnail {
    filter: unset;
}
.esgst-popup .global__image-inner-wrap {
    filter: var(--SGSP-image-brightness);
}
.esgst-gv-view .giveaway_image_thumbnail, .esgst-gv-view .giveaway_image_thumbnail_missing, .SGPP__gridTile .giveaway_image_thumbnail, .SGPP__gridTile .giveaway_image_thumbnail_missing, .giveaway-gridview .global__image-outer-wrap, .esgst-gv-box .global__image-inner-wrap {
    filter: var(--SGSP-grid-brightness);
}
.esgst-gv-container:hover .giveaway_image_thumbnail, .esgst-gv-container:hover .giveaway_image_thumbnail_missing, .esgst-gv-container:hover .esgst-gv-icons, .SGPP__gridTile:hover .giveaway_image_thumbnail, .SGPP__gridTile:hover .giveaway_image_thumbnail_missing, .giveaway-gridview:hover .faded, .giveaway-gridview:hover .global__image-outer-wrap, .esgst-gv-box:hover .global__image-inner-wrap {
    filter: var(--SGSP-grid-hover-brightness);
    opacity: 1;
}
.giveaway_image_thumbnail_missing, .table_image_thumbnail_missing, .table_image_avatar_missing, .table_image_flag_missing, .giveaway_image_thumbnail[style*="background-image"][style*="null"] {
    background-color: var(--SGSP-image-bg-color);
    border: none;
}
.giveaway_image_thumbnail_missing i, .table_image_thumbnail_missing i, .table_image_avatar_missing i {
    color: rgba(160, 160, 160, 0.85);
}
.giveaway__links {
    color: hsl(60, 2%, 35%);
}
.giveaway__links i {
    color: inherit;
    text-shadow: var(--SGSP-ts-8);
}
.giveaway__row-outer-wrap {
    padding: 11px 0;
}
.global__image-outer-wrap--game-xlarge img {
    max-width: 460px;
    min-width: 460px;
    min-height: 215px;
}
.global__image-outer-wrap--missing-image i, .featured__outer-wrap .global__image-outer-wrap--missing-image i {
    color: rgba(160, 160, 160, 0.85);
    box-shadow: none;
}
header.small, header.large, header, #header {
    background-image: var(--SGSP-header-footer-bg-color);
    box-shadow: 0 1px 10px 3px hsla(0, 0%, 0%, 0.8), 0 -1px 0 var(--SGSP-header-footer-border-color) inset, 0 -10px 10px -3px hsla(0, 0%, 0%, 0.55) inset;
    z-index: 1000!important;
}
.heading_btns > div.is_selected {
    border: 1px solid var(--SGSP-sidebar-border-color);
    border-bottom: transparent;
}
.heading_btns > div {
    border-color: var(--SGSP-sidebar-border-color);
}
#header {
    position: fixed;
    width: 100%;
    z-index: 1;
}
.header_search {
    border-top: 1px solid var(--SGSP-separator-light-color);
    box-shadow: 0 -1px 0 var(--SGSP-separator-dark-color);
    margin-top: 5px;
    padding: 5px 0 10px;
}
.header_search input, .header_search > div > div > div:last-child {
    height: 34px;
}
.header_search input {
    border: 1px solid;
}
@media screen and (max-width: 700px) {
    .header_search {
        gap: 10px;
    }
}
#header input[type="image"] {
    box-shadow: 0 0 0 1px hsl(0, 0%, 0%)!important;
    margin-bottom: -3px;
}
.highcharts-axis-labels text, .highcharts-button text {
    fill: var(--SGSP-general-txt-color)!important;
}
.highcharts-axis path, .highcharts-grid path {
    stroke: var(--SGSP-general-txt-color)!important;
}
.highcharts-tooltip path, .highcharts-button rect {
    stroke: var(--SGSP-tooltip-border-color)!important;
    fill: var(--SGSP-tooltip-bg-color);
}
.highcharts-button rect[stroke="#68A"] {
    fill: #424242;
}
.highcharts-button rect + text {
    fill: hsl(0, 0%, 68%)!important;
}
.highcharts-button rect[stroke="#68A"] + text {
    fill: hsl(0, 0%, 80%)!important;
}
h3.sidebar__heading {
    margin-top: 8px;
}
:is(:autofill) {
    box-shadow: 0 0 0px 40rem #333 inset !important;
    caret-color: hsla(0, 0%, 65%, 0.8);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: hsla(0, 0%, 65%, 0.8) !important;
    transition: background-color 5000s ease-in-out 0s;
}
input {
    caret-color: hsla(0, 0%, 65%, 0.8);
}
input::-webkit-calendar-picker-indicator {
    filter: invert(0.7);
}
input::-webkit-inner-spin-button {
    filter: invert(0.8);
}
input[type="checkbox"], .sgun__checkbox, input[id*="Checkbox"], input[id*="Endless"], input[id*="Merge"] {
    filter: invert(0.9);
}
input#user, input#username, input#steamid, select#mode, select#type, select#giveawayUrl, button[type="submit"] {
    background-color: #343434;
    border: 1px solid;
    border-color: hsl(0, 0%, 29%);
    border-radius: 4px;
    color: rgba(160, 160, 160, 0.85);
    text-indent: 5px;
    text-shadow: var(--SGSP-ts-29);
}
input, textarea {
    box-shadow: none!important;
}
.icon_to_clipboard[style*="rgb(91, 178, 190)"] {
    color: #80bf40!important;
}
.icon-green, i.fa.fa-check-circle-o.green, .sg-icon-green, .sidebar_table > div:not(.is_warning) i, .table i.green, .author_permalink, .comment__permalink, .is_permalink, .dropdown_btn i.green, .popup.is_success .popup_icon i, #filter, .esgst-header-menu-row i.green, .tooltip_row i[style*="color: #96c468"], .sidebar__navigation__item:not(.is-selected) i.fa-chevron-circle-right, .esgst-green, .giveaway__heading__name__promotion {
    color: var(--SGSP-green-icons-txt-color)!important;
}
.icon-grey, .sg-icon-grey, .dropdown_btn i.grey, .esgst-header-menu-row i.grey, .esgst-grey {
    color: #9FAAB4!important;
}
.esgst-unknown, .esgst-user-icon i.esgst-unknown {
    color: hsl(209, 5%, 40%)!important;
}
.icon-yellow, .esgst-header-menu-row i.yellow, .esgst-yellow, .comment__author i.esgst-iwh-icon {
    color: hsl(48, 89%, 42%)!important;
}
.icon-black, .sg-icon-black, .esgst-black {
    color: hsl(240, 3%, 16%)!important;
}
.esgst-ged-icon[class*=esgst-red], .esgst-ged-icon[class*=esgst-yellow] {
    opacity: 0.7;
}
#content i.fa.fa-check-circle-o.orange, .fanatical_new {
    filter: brightness(82%);
}
input:focus, select:focus, textarea:focus {
    color: hsl(0, 0%, 68%)!important;
}
input:focus, select:focus, button:focus, rect:focus, textarea:focus {
    outline: none;
}
.is-faded:not(em), .giveaway__row-inner-wrap.is-faded + .esgst-ged-source, .giveaway-gridview .faded, .giveaway__row-inner-wrap.esgst-faded {
    opacity: 0.25;
}
.leaderboard {
    margin: 12px auto -12px!important;
}
#legend {
    margin-bottom: 40px;
}
.lightbox {
    background-color: var(--SGSP-modal-bg-color)
}
.lightbox-content-image {
    padding:12px;
}
.lightbox-content-image > video, .lightbox-content-image > iframe {
    border : 1px solid var(--SGSP-image-border-color);
    border-radius: 8px;
    height: 99%;
    width: unset;
}
.lightbox img, .lightbox-thumbnail {
    border : 1px solid var(--SGSP-image-border-color);
    filter: var(--SGSP-image-brightness);
}
.lightbox img, .lightbox-thumbnail, .lightbox-thumbnail-overlay {
    border-radius: 6px;
}
.lightbox img {
    border-radius: 8px;
}
.lightbox-thumbnail-overlay {
    box-shadow: 0 0 0 8px hsla(113, 50%, 50%, 0.7) inset;
    opacity: 0;
    transform: scale(0, 0);
    transition: all 0.7s cubic-bezier(0.18, 0.89, 0.32, 1.28);
}
.lightbox-thumbnail--selected > .lightbox-thumbnail-overlay {
    border: none!important;
    border-radius: 4px;
    opacity: 1;
    transform: scale(1, 1);
}
.lightbox-header-icon--selected {
    color: hsl(113, 50%, 50%);
}
.lightbox-header-description-name, .lightbox-header-description-count, .lightbox-header-icons, .lightbox-content-nav-btn-icon > i {
    color: var(--SGSP-headings-size1-txt-color);
    text-shadow: var(--SGSP-ts-5);
}
.lightbox-header-icon:hover, .lightbox-content-nav-btn:hover > .lightbox-content-nav-btn-icon > i {
    color: var(--SGSP-headings-size1-txt-color);
    filter: brightness(1.25);
}
.lightbox-content-nav-btn--next > .lightbox-content-nav-btn-icon {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    border: solid 1px var(--SGSP-content-border-color);
    border-right:none;
}
.lightbox-content-nav-btn--prev > .lightbox-content-nav-btn-icon {
    border: solid 1px var(--SGSP-content-border-color);
    border-bottom-right-radius: 6px;
    border-left:none;
    border-top-right-radius: 6px;
}
.lightbox-header, .lightbox-footer-outer, .lightbox-content-nav-btn-icon {
    background-color: var(--SGSP-body-bg-color);
}
.lightbox-footer-outer {
    border-top: solid 1px var(--SGSP-content-border-color);
}
.lightbox-header {
    border-bottom: solid 1px var(--SGSP-content-border-color);
}
.lightbox-footer-outer {
    padding: 7px;
}
.lightbox-header-description-name, .lightbox-header-description-count {
    padding: 10px 0;
}
.lightbox-header-icon {
    padding: 10px;
}
.markdown blockquote {
    background-color: var(--SGSP-quote-bg-color);
    border: 1px solid var(--SGSP-quote-border-color);
    border-left: 3px solid var(--SGSP-quote-border-color);
    border-radius: 6px;
    border-right: 2px solid var(--SGSP-quote-border-color);
    box-shadow: 0 1px 4px 1px hsla(60, 2%, 63%, 0.64);
    color: var(--SGSP-quote-txt-color);
}
.markdown blockquote blockquote {
    border-left: 3px solid var(--SGSP-quote-border-color);
    max-width: calc(100% - 65px);
    opacity: 1;
    padding: 10px 25px;
}
.markdown .comment__toggle-attached, .nonactivated-dlcs, .nonactivated-nolonger, .nonactivated-whitelisted, .nonactivated-cantcheckactivated, .markdown .view_attached {
    color: hsl(0, 49%, 45%);
    padding: 0;
}
.have {
    background-color: var(--SGSP-trade-have-bg-color);
    border-left-color: var(--SGSP-trade-have-border-color);
    border-radius: 4px;
    box-shadow: 0 0 0 1px var(--SGSP-content-border-color);
    color: hsla(0, 0%, 75%, 0.9)!important;
}
.have hr, .want hr {
    border-top: 1px solid hsla(0, 0%, 0%, 0.85)!important;
    border-bottom: 1px solid var(--SGSP-trade-have-border-color)!important;
}
.markdown h1, .markdown h2, .markdown h3, .markdown h4, .markdown h5, .markdown h6, #content h1, #content h2, #content h3:not(.sidebar__heading), #content .subtitle, #content .wrap .left .before-list, .header_search .name {
    color: hsl(0, 0%, 68%);
    text-shadow: var(--SGSP-ts-56);
    filter: brightness(1);
}
#content h1:not(.title), #content h2, #content h3:not(.sidebar__heading):not(.deal_game_title), #content .wrap .left .before-list, .header_search .name {
    color: hsl(213, 19%, 63%);
}
#leaderTop + h1, #leaderTop + #form > h1, #section-content-title {
    color: var(--SGSP-pageheading-txt-color)!important;
}
.markdown h1 > strong, .markdown h2 > strong, .markdown h3 > strong, #content h1 > strong, #content h2 > strong, #content h3 > strong {
    filter: brightness(1)!important;
}
.markdown h1, #content h1 {
    color: var(--SGSP-headings-size1-txt-color);
    font-weight: 900;
}
.markdown h2, #content h2 {
    color: var(--SGSP-headings-size2-txt-color);
}
.markdown h3, #content h3:not(.sidebar__heading) {
    color: var(--SGSP-headings-size3-txt-color);
}
.markdown hr, hr {
    border-top: 1px solid var(--SGSP-separator-dark-color);
    border-bottom: 1px solid var(--SGSP-separator-light-color);
    border-left: none;
    border-right: none;
}
.markdown img[src*="reforced.nl"] {
    background-color: transparent;
    border: none;
}
.featured__inner-wrap a.global__image-outer-wrap:hover, .featured__outer-wrap .global__image-outer-wrap--avatar-large:hover {
    background-color: hsla(0, 0%, 25%, 0.2)!important;
}
.featured__inner-wrap a.global__image-outer-wrap.global__image-outer-wrap--avatar-small:hover {
    background-color: hsl(0, 0%, 25%)!important;
}
.featured__outer-wrap .global__image-outer-wrap--game-xlarge, .featured__outer-wrap .global__image-outer-wrap--game-large, .featured__outer-wrap .global__image-outer-wrap--avatar-large:not([style*="border-color"]) {
    border-color: hsla(0, 0%, 0%, 0.35) hsla(0, 0%, 100%, 0.075) hsla(0, 0%, 100%, 0.075) hsla(0, 0%, 0%, 0.35)!important;
}
.featured__outer-wrap .global__image-outer-wrap--game-xlarge, .featured__outer-wrap .global__image-outer-wrap--game-large, .featured__outer-wrap .global__image-outer-wrap--avatar-large {
    background-color: hsla(0, 0%, 0%, 0.2)!important;
    box-shadow: 3px 3px 4px hsla(0, 0%, 0%, 0.2) inset!important;
}
.markdown li:before {
    color: var(--SGSP-list-txt-color);
}
.markdown pre {
    background-color: var(--SGSP-code-bg-color);
    border: 1px solid var(--SGSP-code-border-color);
    color: var(--SGSP-code-txt-color);
    margin-right: -10000px;
    max-width: calc(100% - 33px);
    text-shadow: var(--SGSP-ts-27);
}
.markdown code {
    color: var(--SGSP-code-txt-color);
}
.markdown .spoiler {
    padding: 3px;
}
.markdown .spoiler:not(:hover) {
    background-color: var(--SGSP-spoiler-bg-color);
    box-shadow: 0 0 1px 0 hsla(0, 0%, 0%, 0.5);
}
.markdown .spoiler:not(:hover) * {
    color: transparent!important;
    text-shadow: none;
}
.markdown .spoiler:hover a, .markdown .spoiler:not(:hover) strong, #content g text {
    text-shadow: none!important;
}
.esgst-popup .global__image-outer-wrap {
    background-color: transparent;
    border: none!important;
    border-radius: 2px;
}
.esgst-ugd-table .table__rows .table__row-outer-wrap:hover {
    background-color: hsla(0, 0%, 100%, 0.03)!important;
}
.markdown table {
    background-color: var(--SGSP-chart-bg-color);
    border-radius: 4px;
    border: 1px solid var(--SGSP-chart-head-border-color);
    border-spacing: 0;
    border-collapse: separate;
}
.markdown td:not(:last-child), .markdown th:not(:last-child) {
    border-right: 1px solid var(--SGSP-chart-border-color)!important;
}
.markdown th {
    border-bottom: 1px solid var(--SGSP-chart-head-border-color)!important;
}
.markdown th:first-child {
    border-top-left-radius: 4px;
}
.markdown th:last-child {
    border-top-right-radius: 4px;
}
.markdown thead {
    background-color: var(--SGSP-chart-head-bg-color);
}
.markdown tr:not(:last-child) td {
    border-bottom: 1px solid var(--SGSP-chart-border-color)!important;
}
.markdown tbody tr {
    background-color: var(--SGSP-chart-row-bg-color);
    color: var(--SGSP-chart-row-txt-color);
}
.markdown tbody tr[style*="background"] td {
    color: hsla(0, 0%, 75%, 0.9);
    text-shadow: var(--SGSP-ts-72);
}
.markdown tbody tr[style*="background"] td a {
    color: hsla(0, 0%, 70%, 0.85)!important;
    text-shadow: var(--SGSP-ts-3);
}
tbody tr:last-child td:first-child {
    border-bottom-left-radius: 4px;
}
tbody tr:last-child td:last-child {
    border-bottom-right-radius: 4px;
}
.markdown tr:not(:last-child) {
    border-bottom: 1px solid var(--SGSP-chart-border-color);
}
.want {
    background-color: var(--SGSP-trade-want-bg-color);
    border-left-color: var(--SGSP-trade-want-border-color);
    border-radius: 4px;
    box-shadow: 0 0 0 1px var(--SGSP-content-border-color);
    color: hsla(0, 0%, 75%, 0.9)!important;
}
.trade_heading {
    color: var(--SGSP-trade-want-title-color);
}
.trade_heading:first-of-type {
    color: var(--SGSP-trade-have-title-color)!important;
}
.want hr {
    border-bottom: 1px solid var(--SGSP-trade-want-border-color)!important;
}
#np_steamgifts_homepage_top_responsive > * {
    padding-top: 0px!important;
}
.navigation .pagination > .page-item > .page-link {
    background-image: var(--SGSP-pageheading-bg-color);
    border: 1px solid var(--SGSP-pageheading-border-color)!important;
    color: var(--SGSP-pageheading-txt-color)!important;
}
.navigation .pagination > .active > .page-link {
    color: var(--SGSP-red-icons-txt-color)!important;
}
.navigation .pagination > .page-item:not(.active):not(.disabled) > .page-link:hover {
    filter: brightness(0.85);
}
.nav__absolute-dropdown, .dropdown > div, .esgst-header-menu-absolute-dropdown, .esgst-header-menu-relative-dropdown > div {
    background-color: hsl(0, 0%, 21%)!important;
    box-shadow: 0 0 0 1px var(--SGSP-nav-dropdown-border-color)!important;
}
.nav__avatar-inner-wrap, .global__image-outer-wrap--game-large img, .global__image-outer-wrap--game-xlarge img, .featured__column.featured__column--width-fill.text-right > a, .profile_avatar, .nav_avatar, .table .avatar, .author_avatar, .giveaway_image_thumbnail, .giveaway_image_thumbnail_missing, .giveaway_image_avatar, .featured_giveaway_image_avatar, .table_image_avatar, .table_image_thumbnail, .table_image_flag, .gridview-avatar {
    filter: var(--SGSP-image-brightness);
}
.nav__avatar-outer-wrap {
    border-right: 1px solid hsla(230, 6%, 32%, 0.6);
    border-bottom: 1px solid hsla(230, 6%, 32%, 0.7);
}
.nav__button, .nav_btn, .message_count {
    color: var(--SGSP-nav-txt-color);
    opacity: 1;
    padding: 0 10px;
    text-shadow: var(--SGSP-ts-62)!important;
}
.nav_btn {
    border-color: hsl(215, 8%, 5%);
}
.nav_btn:hover:not(.is_selected), .nav__button-container.is-selected .nav__button, .nav__button:hover, #header .nav__left-container .nav__button-container.is-selected:first-of-type .nav__button:hover, #header .nav__right-container .nav__button-container.is-selected:first-of-type .nav__button:hover, .esgst-header-menu-button:hover:not(.is_selected) {
    filter: var(--SGSP-nav-button-hover-brightness) var(--SGSP-nav-button-hover-saturate);
}
.nav_btn_container {
    height: 29px;
}
.nav__button--is-dropdown-arrow {
    border-radius: 0 4px 4px 0!important;
    padding: 0 8px;
}
.nav__button-container--notification .nav__button {
    padding: 0 12px!important;
}
.nav__button-container--active i, .nav__button .fa-star.esgst-positive {
    color: #80cc33!important;
    text-shadow: var(--SGSP-ts-13)!important;
}
.nav__button-container--inactive i, .sg-info {
    color: var(--SGSP-nav-txt-color);
    text-shadow: var(--SGSP-ts-13)!important;
}
.nav__button-container .new_icon {
    top: -1px;
    z-index: 1;
    filter: saturate(1) brightness(1);
}
.nav__button-container.is-selected .nav__button {
    color: var(--SGSP-nav-txt-color)!important;
    filter: brightness(1.1) saturate(0);
    text-shadow: none!important;
}
.nav__button.is-selected, .nav__button--is-dropdown-arrow:not(.nav_btn_right).is-selected,.nav_btn_dropdown.is_selected, .esgst-header-menu-button.arrow.selected {
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3) inset, 1px 1px 0 0 hsl(215, 8%, 5%), 0 -1px 0 0 hsl(215, 8%, 5%), 0 1px 0 rgba(255, 255, 255, 0.1) inset, 0 1px 0 rgba(255, 255, 255, 0.05) inset!important;
}
.nav_btn_dropdown.is_selected {
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3) inset;
}
.nav__button, #header .nav__button-container.is-selected .nav__button, .nav_btn {
    background-image: var(--SGSP-nav-button-bg-color)!important;
    box-shadow: 0 0 0 1px hsl(0, 0%, 0%), 1px 1px 1px rgba(255, 255, 255, 0.12) inset, 1px 1px 0 rgba(255, 255, 255, 0.07) inset;
    transition: filter 0.35s ease-in;
    will-change: filter;
}
.nav_btn_container {
    border-radius: 4px;
    box-shadow: 0 0 0 1px hsl(0, 0%, 0%), 1px 1px 1px rgba(255, 255, 255, 0.12) inset, 1px 1px 0 rgba(255, 255, 255, 0.07) inset;
}
.nav_btn_left {
    box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.12) inset, 1px 1px 0 rgba(255, 255, 255, 0.07) inset;
}
.nav_btn_right {
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1) inset, 0 1px 0 rgba(255, 255, 255, 0.06) inset;
}
#header .nav__left-container .nav__button-container.is-selected:first-of-type .nav__button:not(:hover):not(.is-selected), #header .nav__right-container .nav__button-container.is-selected:first-of-type .nav__button:not(:hover) {
    filter: brightness(1) saturate(1)!important;
}
.nav__button-container.is-selected .nav__button.nav__button--is-dropdown-arrow.is-selected, .nav__button.is-selected, .nav_btn_dropdown.is_selected, .esgst-header-menu-button.arrow.selected {
    filter: saturate(0)!important;
    opacity: 1;
}
.nav__button--is-dropdown-arrow:not(.nav_btn_right), .esgst-header-menu-button.arrow {
    box-shadow: 1px 1px 0 0 hsl(215, 8%, 5%), 0 -1px 0 0 hsl(215, 8%, 5%), 0 1px 0 rgba(255, 255, 255, 0.1) inset, 0 1px 0 rgba(255, 255, 255, 0.05) inset!important;
    margin-left: -1px;
}
.nav__left-container {
    margin-right: 5px;
}
.nav_logo > a {
    background-size: 80%;
    opacity: 0.8;
}
nav .nav_avatar {
    height: 29px;
    width: 29px;
}
.nav__notification, .message_count {
    color: var(--SGSP-nav-txt-color);
    background-color: hsl(0, 71%, 45%);
    box-shadow: 0 0 0 1px hsl(0, 0%, 0%);
    filter: brightness(1.1);
    margin-left: 8px;
    margin-top: -31px;
    z-index: 1000;
}
.message_count {
    padding: 0 3px 0 2px;
}
.nav__row {
    background-image: var(--SGSP-nav-dropdown-bg-color);
    border-radius: 0!important;
    text-shadow: var(--SGSP-ts-35);
}
.sg-info-row {
    text-shadow: var(--SGSP-ts-43)!important;
}
.nav__row:not(:first-child), .dropdown_btn:not(:first-child), .esgst-header-menu-row:not(:first-child) {
    border-top: 1px dashed hsl(0, 0%, 17%)!important;
}
.dropdown_btn:not(:last-child), .esgst-header-menu-row:not(:last-child) {
    border-bottom: none;
}
.nav__row:hover .nav__row__summary__name, .nav__row:hover i:not(.__mh_bookmark_item_remove_btn), .page__heading__row:hover .page__heading__row__name, .page__heading__row:hover i, .dropdown:hover .dropdown_btn:not(.nav__row):not(:hover) i, .dropdown:hover .esgst-header-menu-row:not(.nav__row):not(:hover) i, nav a:focus, nav a:hover, .esgst-header-menu-row:not(.esgst-version-row):hover i:not(.esgst-chfl-edit-button):not(.esgst-chfl-remove-button), .esgst-header-menu-row:not(.esgst-version-row):hover .esgst-header-menu-name, .header_inner_wrap .esgst-header-menu-absolute-dropdown:hover .esgst-header-menu-row:not(.esgst-version-row):not(.nav__row):not(:hover) i, .block_header_text, .block_header_link {
    color: var(--SGSP-nav-txt-color)!important;
}
.nav__row:hover .nav__row__summary__description {
    color: hsl(0, 0%, 60%);
}
.nav__row:hover, .page__heading__row:hover, .dropdown_btn:hover {
    background-image: var(--SGSP-nav-dropdown-hover-bg-color);
    color: hsl(0, 0%, 85%);
    text-shadow: var(--SGSP-ts-51);
    filter: saturate(0.7) contrast(1.15);
}
.dropdown_btn:hover {
    background-color: hsla(0, 0%, 0%, 0);
}
.nav__row__summary__description {
    color: hsl(213, 28%, 68%);
}
.nav__row__summary__name, .page__heading__row__name {
    color: var(--SGSP-sidebar-link-txt-color);
    filter: brightness(1.15);
}
.dropdown_btn {
    color: var(--SGSP-sidebar-link-txt-color);
}
.notification {
    line-height: 18px;
    padding: 7px 15px;
    text-shadow: var(--SGSP-ts-38);
}
.notification i {
    margin-right: 5px;
}
.notification--success, .notification.green, .esgst-notification-success {
    background-color: transparent!important;
    background-image: var(--SGSP-notification-green-bg-color);
    border-color: var(--SGSP-notification-green-border-color);
    color: var(--SGSP-notification-green-txt-color);
    cursor: default;
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
}
.notification--info, .notification.blue {
    background-color: transparent;
    background-image: var(--SGSP-notification-blue-bg-color);
    border-color: var(--SGSP-notification-blue-border-color);
    color: var(--SGSP-notification-blue-txt-color);
}
.notification--danger, .notification.red {
    background-color: transparent;
    background-image: var(--SGSP-notification-red-bg-color);
    border-color: var(--SGSP-notification-red-border-color);
    color: var(--SGSP-notification-red-txt-color);
}
.notification--default, .notification.gray {
    background-color: transparent!important;
    background-image: var(--SGSP-notification-grey-bg-color);
    border-color: var(--SGSP-notification-grey-border-color);
    color: var(--SGSP-notification-grey-txt-color);
}
.notification--warning, .notification.yellow, .esgst-notification-warning {
    background-image: var(--SGSP-notification-yellow-bg-color);
    border-color: var(--SGSP-notification-yellow-border-color);
    color: var(--SGSP-notification-yellow-txt-color);
}
.page__heading ~ div:not(.esgst-button-set):not(.row-spacer):not(.align-button-container):not(#filterControls):not(.btn_actions):not(.notification):not(.pagination):not(.page__heading):not(.table__heading):not(.widget-container):not(.form__row):not(.giveaway__row-outer-wrap):not(.leaderboard):not(.esgst-gf-container):not(.esgst-popup-actions):not(.esgst-popup-scrollable):not(.esgst-text-left):not(.esgst-gv-view):not(.esgst-form-row):not(.esgst-menu-split):not(.giveaway_box_hero):not(.giveaway_box_actions):not(.esgst-button):not(.esgst-button-group):not(.esgst-toggle-switch-container), .page_heading ~ div:not(.esgst-button-set):not(.row-spacer):not(.align-button-container):not(.btn_actions):not(.notification):not(.pagination):not(.page_heading):not(.table_heading):not(.widget-container):not(.form__row):not(.giveaway__row-outer-wrap):not(.leaderboard):not(.esgst-gf-container):not(.dont_block_me), .comments:not(.esgst-text-left), .pagination.pagination--no-results, .pagination_no_results, .esgst-glwc-results .table {
    background-color: var(--SGSP-content-bg-color);
    background-image: none;
    border: 1px solid var(--SGSP-content-border-color);
    border-radius: 4px;
    box-shadow: 0 0 5px 1px hsla(0, 0%, 0%, 0.8);
    margin-bottom: 8px;
    margin-top: 8px;
    padding: 5px 10px;
    text-shadow: var(--SGSP-ts-41);
}
.page_inner_wrap .MTContainer {
    border-radius: 3px;
}
.page_flex > .sidebar {
    min-width: 260px;
}
.page_heading_btn {
    padding: 5px 10px;
}
.page__heading > *:not(.page__heading__button--green):not(.page__heading__button--red), .page__heading__breadcrumbs a, .page_heading_breadcrumbs a, .popup__keys__heading, .sidebar_table a, .page_heading_breadcrumbs, .page_heading_btn:not(.esgst-cfh-emojis), .esgst-cfh-sr-name {
    color: var(--SGSP-pageheading-txt-color);
}
.pagination_navigation.page_heading_btn > *:not(:last-child) {
    margin-right: 0;
}
.sidebar__navigation__item__name {
    color: var(--SGSP-sidebar-link-txt-color);
}
.sidebar__navigation__item__name:hover, .pagination__navigation.page_heading_btn a, .pagination_navigation.page_heading_btn a, .page_heading > .esgst-un-button, .page_heading > .esgst-heading-button {
    color: var(--SGSP-sidebar-link-txt-color)!important;
}
.page__heading__absolute-dropdown {
    border: 1px solid #000;
}
.page__heading__breadcrumbs a, .page_heading_breadcrumbs, .page_heading_btn, .page__heading__button, .page__heading, .esgst-page-heading {
    text-shadow: var(--SGSP-ts-28);
}
.page__heading__breadcrumbs > *:not(:last-child) {
    flex-shrink: 1;
}
.page__heading__button--green, .page_heading_btn.green, .page__heading__button--red {
    filter: hue-rotate(5deg) saturate(0.8);
}
.page__heading__button--green.page__heading__button--is-dropdown.is-selected, .page__heading__button--red.page__heading__button--is-dropdown.is-selected {
    box-shadow: none;
    z-index: 2;
}
.page__heading__button--red, .header__error, #infraction, .btn_action.red, .page_heading_btn.red, .sidebar__error, .sidebar__suspension, #content button#check[style*="rgb(204, 184, 188)"], .ruleFailed, .giveaway__column--contributor-level--negative:not(.esgst-glh-highlight), .featured__column--contributor-level--negative:not(.esgst-glh-highlight), .cmGame.bundled, .btn-danger {
    background-image: var(--SGSP-red-buttons-bg-color)!important;
    border: 1px solid #000!important;
    border-color: var(--SGSP-red-buttons-border-color)!important;
    color: var(--SGSP-red-buttons-txt-color)!important;
    text-shadow: var(--SGSP-ts-15);
    transition: filter 0.35s ease-in;
    will-change: filter;
}
.sidebar__suspension--flat-bottom {
    background-image: var(--SGSP-red-suspension-top-bg-color)!important;
    border-bottom: none!important;
}
.cmGame.not5entries {
    background-image: linear-gradient(hsla(0,0%,37%,1) 0%, hsla(0,0%,9%,1) 100%)!important;
    border-color: hsla(0,0%,54%,1) hsla(0,0%,41%,1) hsla(0,0%,34%,1) hsla(0,0%,41%,1)!important;
    filter: saturate(0);
}
.cmGame.dmed, .cmGame.notActivatedDLC, .cmGame.cantCheckActivated {
    background-image: linear-gradient(hsla(39, 86%, 42%, 1) 0%, hsla(39, 86%, 35%, 1) 50%, hsla(39, 86%, 28%, 1) 100%)!important;
    border-color: hsla(39, 96%, 60%, 1) hsla(39, 96%, 45%, 1) hsla(39, 96%, 40%, 1) hsla(39, 96%, 45%, 1)!important;
    color: hsl(39, 50%, 80%)!important;
}
.cmGame.freeGame {
    background-image: linear-gradient(#8440a5 0%, #4c106a 100%)!important;
    border-color: #b26ed4 #9038bc #8132a9 #9038bc!important;
    color: #d8a9ef!important;
}
.page__heading i {
    vertical-align: inherit;
}
.pagination__navigation[style*="border"] {
    padding: 5px 10px!important;
}
.page__heading__row {
    background-image: linear-gradient(#4b4b4b 0%, hsl(0, 0%, 22%) 100%);
    text-shadow: var(--SGSP-ts-54);
}
.page__heading__row:not(:first-child) {
    border-top: 1px dashed #252A3A;
}
.page__heading ~ div > .table__heading:not(.sg2o-table-heading) {
    margin: -5px -10px 5px;
    border-top: none!important;
    border-radius: 3px 3px 0 0!important;
}
.page__heading ~ div > .table__heading ~ .table__heading:not(.sg2o-table-heading) {
    margin: -1px -10px 5px!important;
    border-top: 1px solid hsla(0, 0%, 0%, 0.6)!important;
    border-radius: 0!important;
}
.page__heading + div > .table__heading {
    border-radius: 0!important;
}
.page__heading ~ div > .table__rows:first-of-type > .table__heading {
    margin: -5px -10px 5px;
    border-top: none!important;
    padding-top: 15px;
    border-radius: 3px 3px 0 0;
}
.page__heading ~ script ~ .table__heading {
    border-radius: 3px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    box-shadow: 0 0 6px 2px hsla(0, 0%, 0%, 0.8);
    margin: 8px 0 -8px;
    border: 1px solid hsla(0, 0%, 0%, 0.5)!important;
    border-bottom-color: hsla(0, 0%, 0%, 0.6)!important;
}
.page__heading ~ script ~ .table__heading + .chart {
    border-top: none!important;
    border-top-left-radius: 0!important;
    box-shadow: 0 4px 6px 2px hsla(0, 0%, 0%, 0.8)!important;
    border-top-right-radius: 0!important;
}
.page__heading + .table__heading {
    margin: 5px 0 -8px;
    background: linear-gradient(var(--SGSP-tableheading-bg-color) 0%, var(--SGSP-tableheading-bg-color) 100%);
    background-repeat: no-repeat;
    box-shadow: 0 0 5px 1px hsla(0, 0%, 0%, 0.8)!important;
    border: 1px solid var(--SGSP-content-border-color)!important;
}
.page__heading + .table__heading + .table {
    border-top-left-radius: 0!important;
    border-top-right-radius: 0!important;
    box-shadow: 0 3px 6px 1px hsla(0, 0%, 0%, 0.8)!important;
    border-top: none!important;
}
.page_inner_wrap div[style*="display: flex; justify-content: center;"] {
    background-color: transparent!important;
    border: none!important;
    box-shadow: none!important;
}
.page_inner_wrap .reply_form > .heading {
    margin-top: 0;
}
.page__inner-wrap.page__inner-wrap--narrow, .page__limit-width {
    max-width: 70%!important;
}
.page__inner-wrap--narrow .page__heading + .notification--success, .page_inner_wrap.medium .page_heading + .notification.green {
    margin-top: 1px!important;
}
.page__inner-wrap--narrow .page__heading + .notification--success i {
    margin-bottom: 3px;
}
.page_inner_wrap, .footer_inner_wrap, .header_inner_wrap, .header_inner_wrap nav {
    max-width: var(--SGSP-page-width-st);
}
.page__inner-wrap:not(.page__inner-wrap--narrow), nav, .footer__inner-wrap, .featured__inner-wrap, .offer__inner-wrap, footer > .footer_inner_wrap {
    max-width: var(--SGSP-page-width);
}
#header nav, #content, #content .featured__inner-wrap {
    max-width: var(--SGSP-page-width-sgt);
}
.page__outer-wrap, .page_outer_wrap, #sg_dyepb_toolbar, .row_trade_name > h2 {
    background-color: transparent;
    color: var(--SGSP-general-txt-color);
    text-shadow: var(--SGSP-ts-41);
}
.page_outer_wrap textarea, .page_outer_wrap input, .page_outer_wrap select {
    box-shadow: none;
    border-color: hsl(0, 0%, 29%);
    color: rgba(160, 160, 160, 0.85);
    text-shadow: var(--SGSP-ts-29);
    background-color: var(--SGSP-input-bg-color);
}
.pagination {
    border-top: 1px solid var(--SGSP-separator-dark-color);
    box-shadow: 0 1px 0 var(--SGSP-separator-light-color) inset!important;
    color: var(--SGSP-secondary-txt-color);
    margin-top: 5px;
}
.pagination.pagination--no-results, .pagination_no_results {
    box-shadow: 0 0 5px 1px hsla(0, 0%, 0%, 0.8)!important;
    color: rgba(246, 85, 85, 0.9);
    font-weight: 600;
    margin-top: 5px;
}
.comments:empty + .pagination.pagination--no-results {
    margin-top: 0;
}
.pagination + div[style*="margin-top: 25px"], .sidebar div[style*="margin-top: 10px"], .sidebar div[style*="padding-top: 15px"], div[style*="margin-top: 25px"], div[style*="padding-top: 35px"], div[style*="padding-bottom: 35px"] {
    background: none!important;
    border: none!important;
    box-shadow: none!important;
}
div[style*="margin-top: 25px"] > div {
    margin-left: auto;
    margin-right: auto;
    height: auto!important;
}
div[style*="padding-top: 35px"] a[href*="patreon"], .humble_block {
    color: hsla(0, 0%, 76%, 0.9)!important;
    background-image: linear-gradient(hsl(151, 98%, 17%) 0%, hsl(138, 98%, 17%) 100%)!important;
    border: 1px solid #03a045!important;
    text-shadow: var(--SGSP-ts-40)!important;
}
div[style*="padding-top: 35px"] a[href*="patreon"] > span, .humble_block strong {
    border-bottom: 1px dotted hsla(0, 0%, 76%, 0.6)!important;
}
.comment__author [href*="patreon"] i {
    color: var(--SGSP-general-txt-color)!important;
    opacity: 0.55;
    text-shadow: var(--SGSP-ts-9)!important;
}
.patreon_hero {
    padding: 25px!important;
}
.patreon_hero_step_action_btn, .patreon_hero_step_action_avatar {
    border: 1px solid #000;
    color: hsla(0, 0%, 80%, 0.95);
}
.patreon_hero_step_description {
    color: var(--SGSP-secondary-txt-color);
}
.patreon_hero_step_action_btn.is_loading {
    background-image: none!important;
    background-color: hsl(0, 0%, 25%)!important;
    border-color: #000!important;
}
.patreon_hero_step:not(:last-child), .patreon_reward_avatar > div:not(:last-child) {
    border-right: 1px solid var(--SGSP-separator-dark-color)!important;
    box-shadow: 1px 0 0 var(--SGSP-separator-light-color)!important;
}
.patreon_reward:not(:last-child) {
    border-bottom: 1px dotted var(--SGSP-separator-light-color);
}
.patreon_reward.is_locked .patreon_reward_icon {
    border: 1px dashed var(--SGSP-secondary-txt-color);
}
.patreon_reward.is_locked .patreon_reward_icon i, .patreon_reward.is_locked .patreon_reward_summary_name, .patreon_reward_summary_description {
    color: var(--SGSP-secondary-txt-color);
}
.patreon_reward:not(.is_locked) .patreon_reward_icon i {
    color: #80cc33!important;
}
.patreon_reward:not(.is_locked) .patreon_reward_icon {
    background-image: linear-gradient(hsla(88, 65%, 44%, 0.12) 0%, hsla(88, 72%, 21%, 0.5) 100%)!important;
    border: 1px solid hsl(90, 90%, 30%)!important;
}
.patreon_hero_step:nth-child(1) .patreon_hero_step_number {
    color: hsl(13, 68%, 45%);
}
.patreon_hero_step:nth-child(3) .patreon_hero_step_number {
    color: hsl(144, 87%, 30%);
}
.patreon_hero_step:nth-child(1) .patreon_hero_step_action_btn {
    background-image: linear-gradient(hsla(13, 68%, 46%, 0.9) 0%, hsla(13, 68%, 38%, 0.9) 100%);
    background-color: hsla(13, 68%, 38%, 0.9);
}
.patreon_hero_step:nth-child(2) .patreon_hero_step_action_btn {
    background-color: hsla(210, 85%, 36%, 0.9);
    background-image: linear-gradient(hsla(210, 75%, 45%, 0.9) 0%, hsla(210, 85%, 36%, 0.9) 100%);
}
.patreon_hero_step:nth-child(3) .patreon_hero_step_action_btn {
    background-color: hsla(144, 87%, 22%, 0.9);
    background-image: linear-gradient(hsla(144, 95%, 30%, 0.9) 0%, hsla(144, 87%, 22%, 0.9) 100%);
}
.patreon_hero_step:nth-child(2) .patreon_hero_step_action_outline, .patreon_hero_step:nth-child(2) .fa-check:before {
    color: hsla(201, 43%, 57%, 0.85)!important;
}
.patreon_hero_step:nth-child(2) .patreon_hero_step_action_outline {
    background-image: linear-gradient(hsla(201, 43%, 57%, 0.12) 0%, hsla(201, 53%, 27%, 0.5) 100%)!important;
    border-color: hsla(201, 43%, 57%, 0.85);
}
.patreon_hero_step:nth-child(3) .patreon_hero_step_action_btn {
    background-color: hsla(144, 87%, 22%, 0.9);
    background-image: linear-gradient(hsla(144, 95%, 30%, 0.9) 0%, hsla(144, 87%, 22%, 0.9) 100%);
}
.patreon_hero_step:nth-child(3) .patreon_hero_step_action_outline, .patreon_hero_step:nth-child(3) .fa-star:before {
    color: hsl(144, 87%, 30%)!important;
}
.patreon_hero_step:nth-child(3) .patreon_hero_step_action_outline {
    background-image: linear-gradient(hsla(144, 95%, 35%, 0.12) 0%, hsla(144, 70%, 20%, 0.5) 100%)!important;
    border-color: hsl(144, 87%, 30%);
}
.patreon_reward_summary_checkbox i, .patreon_reward_gif_option > div i {
    color: hsla(0, 0%, 80%, 0.95);
    text-shadow: var(--SGSP-ts-41);
}
.patreon_reward_summary_checkbox.is_selected .patreon_reward_summary_checkbox_inner {
    background-color: hsla(144, 87%, 22%, 0.9);
}
.patreon_reward_summary_color_image_inner, .patreon_reward_summary_checkbox_inner {
    background-color: #000;
}
.patreon_reward_summary_color_image_outer, .patreon_reward_summary_checkbox_outer {
    background-color: hsl(0, 0%, 20%);
    border: 1px solid #000;
}
.patreon_reward_summary_color.is_inactive .patreon_reward_summary_color_image_inner {
    background-image: repeating-linear-gradient(45deg, transparent, transparent 5px, hsl(0, 0%, 28%) 5px, hsl(0, 0%, 28%) 10px);
}
.patreon_reward_summary_color_name, .patreon_reward_summary_checkbox, .patreon_reward_avatar_slider_name, .patreon_reward_gif_heading {
    color: hsl(210, 6%, 60%)!important;
}
.patreon_reward_avatar_style_solid, .patreon_reward_avatar_style_dashed, .patreon_reward_avatar_style_dotted, .patreon_reward_avatar_style_double {
    border-color: hsl(0, 0%, 50%)!important;
}
.patreon_reward_avatar_preview {
    border-color: hsl(0, 0%, 50%)!important;
    background-color: hsl(0, 0%, 25%);
}
.patreon_reward_gif_option, .patreon_reward_gif_selected {
    border: 1px solid #000;
}
.patreon_reward_gif_heading, .patreon_reward_gif_divider {
    border-bottom: 1px solid var(--SG-Dark-reply-separator-dark-color);
    box-shadow: 0 1px 0 var(--SGSP-separator-light-color);
}
.patreon_reward_gif > div:last-child {
    border-left: 1px solid var(--SGSP-separator-light-color);
    box-shadow: -1px 0 0 var(--SGSP-separator-dark-color);
}
.patreon_reward_gif_option.is_loading > div {
    background-color: hsl(0, 0%, 25%);
}
.patreon_reward_gif_option.is_selected > div {
    background-color: hsla(144, 87%, 22%, 0.9);
}
.pinned-giveaways__outer-wrap {
    box-shadow: 0 0 5px 1px hsla(0, 0%, 0%, 0.8);
    border-radius: 4px;
    margin-top: 8px;
}
.pinned-giveaways__button, .pinned-giveaways__inner-wrap {
    background-color: transparent;
    background-image: var(--SGSP-pinned-bg-color);
    border: 1px solid var(--SGSP-pinned-border-color);
    border-bottom: 1px solid var(--SGSP-pinned-border-color);
}
.pinned-giveaways__inner-wrap > .giveaway__row-outer-wrap:not(:last-child) {
    border-bottom: 1px solid hsl(208, 18%, 5%);
    box-shadow: 0 1px 0 hsla(208, 18%, 26%, 0.8);
}
.pinned-giveaways__button {
    border-top: none;
    background-color: var(--SGSP-body-bg-color);
}
.pinned-giveaways__button:hover, .esgst-pgb-button:hover, .esgst-gf-button:hover {
    background-image: var(--SGSP-pinned-bg-color)!important;
    filter: brightness(1.1);
}
.pinned-giveaways__inner-wrap:not(.esgst-gv-view) * .giveaway__heading__thin:not(.copies__tagged) {
    color: hsl(205, 56%, 71%);
}
.poll, .block_header + .table {
    background-color: var(--SGSP-poll-bg-color)!important;
    border: 1px solid var(--SGSP-poll-border-color)!important;
}
.poll__answer-container .poll__vote-graph {
    background-image: linear-gradient(to left, hsl(220, 3%, 35%) 0%, hsl(220, 3%, 20%) 100%);
    border: 1px solid #000;
}
.poll__answer-container.is-selected .poll__vote-graph {
    background-image: linear-gradient(to left, hsl(98, 40%, 30%) 0%, hsl(110, 45%, 18%) 100%);
    border: 1px solid #000;
}
.poll__description {
    opacity: 0.85;
}
.poll__vote-button--voted > .icon-green {
    color: #80cc33!important;
}
.poll__vote-button--voted:active > .icon-green {
    color: rgba(136, 207, 63, 0.55);
}
.poll__vote-results__total, .poll__description {
    color: hsl(0, 0%, 60%);
}
.poll__vote-results__percentage {
    color: hsl(213, 13%, 48%);
}
.poll .table__heading {
    background-color: var(--SGSP-poll-heading-bg-color);
    border-bottom: 1px solid var(--SGSP-poll-heading-border-color)!important;
    color: var(--SGSP-poll-heading-txt-color);
}
.poll .table__column__heading {
    color: var(--SGSP-poll-row-txt-color);
    display: inline;
}
.popup {
    background-color: var(--SGSP-body-bg-color);
    border: solid 1px var(--SGSP-content-border-color);
    box-shadow: 0 0 6px 2px hsla(0, 0%, 0%, 0.8);
    text-shadow: var(--SGSP-ts-29);
}
.popup img {
    background-color: hsl(60, 10%, 19%);
    border: 1px solid rgba(0, 0, 0, 0.5);
    filter: brightness(0.8);
}
.popup__heading, .popup_heading_h1, .esgst-popup-title {
    color: var(--SGSP-headings-txt-color);
}
.popup__actions > *, .popup_actions > * {
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.3);
}
.popup__icon {
    color: var(--SGSP-headings-txt-color);
}
.popup__keys__list {
    background-color: var(--SGSP-content-bg-color);
    border-color: transparent;
    box-shadow: 1px -1px var(--SGSP-content-border-color), 1px 1px var(--SGSP-content-border-color), -1px 1px var(--SGSP-content-border-color), -1px -1px var(--SGSP-content-border-color);
    color: var(--SGSP-general-txt-color);
    margin-bottom: 20px;
    max-height: 109px;
    padding: 5px 10px;
    text-shadow: inherit;
}
.popup.popup--getting-started > p.popup__heading {
    font: 600 24px "Open Sans", sans-serif;
}
.popup.popup--getting-started {
    padding: 35px 75px;
}
.review_description.markdown {
    margin-right: 25px;
}
.reviews + form, .page_inner_wrap.medium form {
    padding: 3px 10px 8px!important;
}
.review_reply {
    background-image: linear-gradient(var(--SGSP-reply-bg-color) 10%, hsla(0, 0%, 0%, 0) 90%);
    border-bottom: none;
    box-shadow: 0 1px 0 var(--SGSP-reply-border-color) inset;
    position: relative;
    text-shadow: inherit;
}
.review_reply:before {
    width: 1px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 2px;
    content: "";
    background-size: 100%;
    background-image: linear-gradient(to bottom, var(--SGSP-reply-border-color) 0%, hsla(0, 0%, 0%, 0));
}
.review_reply:after {
    width: 1px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 2px;
    content: "";
    background-size: 100%;
    background-image: linear-gradient(to bottom, var(--SGSP-reply-border-color) 0%, hsla(0, 0%, 0%, 0));
}
.review_rating {
    border: none;
    box-shadow: 0 0 0 1px var(--SGSP-reply-border-color);
    margin-top: 1px;
    margin-bottom: 1px;
}
.review_rating.is_positive {
    background-color: var(--SGSP-reply-bg-color);
    background-image: linear-gradient(#46721c -40%, hsla(0, 0%, 0%, 0) 100%);
    border-radius: 0 3px 3px 0;
}
.review_rating.is_positive > div {
    background-color: transparent;
    background-image: none;
    color: hsl(94, 46%, 80%)!important;
    text-shadow: var(--SGSP-ts-64);
}
.review_rating.is_negative {
    background-color: var(--SGSP-reply-bg-color);
    background-image: linear-gradient(#882828 -40%, hsla(0, 0%, 0%, 0) 100%);
    border-radius: 0 3px 3px 0;
}
.review_rating.is_negative > div {
    background-color: hsla(0, 0%, 0%, 0);
    background-image: none;
    color: hsl(0, 68%, 80%)!important;
    text-shadow: var(--SGSP-ts-36);
}
.review_flex {
    border-radius: 3px 0 0 3px;
    padding: 10px 15px;
}
.row-spacer {
    background-color: var(--SGSP-separator-light-color);
    border: none;
    box-shadow: 0 0 0 1px var(--SGSP-separator-dark-color);
    padding: 2px;
    margin-left: 1px;
    margin-right: 1px;
}
.sale-savings--high, .offer__discount, #content .deal_game_discount {
    cursor: inherit;
}
div.sg-info {
    background-image: var(--SGSP-header-footer-bg-color)!important;
    filter: saturate(0.6);
}
.sg-info, .sg-info-txt {
    cursor: context-menu;
    color: hsl(0, 0%, 75%)!important;
    text-shadow: var(--SGSP-ts-43)!important;
}
#groupTooltip {
    background-color: var(--SGSP-tooltip-bg-color)!important;
    border: 1px solid var(--SGSP-tooltip-border-color)!important;
    border-radius: 4px;
    width: inherit!important;
    z-index: 999;
}
#groupTooltip .table__row-outer-wrap {
    padding: 5px 10px 5px 5px;
}
#content button#check[style*="rgb(204, 184, 188)"], .ruleFailed {
    border-radius: 4px;
    box-shadow: none;
    color: hsl(0, 68%, 80%)!important;
}
.sidebar__entry-delete, #content button#check[style*="rgb(219, 219, 160)"] {
    background-image: var(--SGSP-yellow-buttons-bg-color)!important;
    border: 1px solid hsl(0, 0%, 0%)!important;
    border-color: var(--SGSP-yellow-buttons-border-color)!important;
    color: var(--SGSP-yellow-buttons-txt-color)!important;
    text-shadow: var(--SGSP-ts-67);
    transition: filter 0.35s ease-in;
    will-change: filter;
}
#content button#check[style*="rgb(219, 219, 160)"] {
    box-shadow: none;
    color: hsl(63, 70%, 85%)!important;
}
.sidebar__entry-delete:not(:active):hover, .sidebar__entry-insert:not(.is-disabled):not(:active):hover, .sidebar__action-button:not(.is-disabled):not(:active):hover, .nav__sits:not(.is-disabled):not(:active):hover, .form__submit-button:not(.is-disabled):not(:active):hover, .form__sync-default:not(.is-disabled):not(:active):hover, .featured__action-button:not(.is-disabled):not(:active):hover, #content button[type="submit"]:hover, #content #activated_send:not(:active):hover, #content #real_cv_send:not(:active):hover, #content #multiple_wins_send:not(:active):hover, #content #giveaway_Create:not(:active):hover, .btn_action.green:hover:not(.is_saving):not(.is_disabled):not(:active), .sidebar__shortcut-inner-wrap > *:not(.is-disabled):not(:active):not([style*="border: none;"]):hover, .tab-links a:not(:active):hover, .btn_action.white:hover:not(.is_saving):not(.is_disabled):not(:active), .btn_action.grey:hover:not(.is_saving):not(.is_disabled):not(:active), .btn_action.red:hover:not(.is_saving):not(.is_disabled):not(:active), .comment__submit-button:not(.is-disabled):not(:active):hover, .sidebar__entry-loading:not(.is-disabled):hover, .comment__action-button:not(.is-disabled):hover, .page__description__save:not(.is-disabled):hover, .poll__vote-button:not(.is-disabled):hover, .form__add-answer-button:not(.is-disabled):hover, .form__sync-loading:not(.is-disabled):hover, .form__verify-default:not(.is-disabled):hover, li.selected a:hover, .sidebar__entry-insert[style*="border-color: rgb(147, 187, 211)"]:hover, #content #gaurl a:hover, #content .manageGa a:hover, #content .showBundledDeals:hover, #content .back-guide a:hover, #content .gaButton:hover, #content #giveaway_filters_Update:hover, #content .deal_game_discount:hover, #btn-get:hover, .btn-success:hover, .btn-danger:hover, .btn-primary:hover, .btn-info:hover, .GDCBPButton:hover, .sp-container button:not(:active):hover, .esgst-sm-colors-default:hover, .view_key_btn:not(:active):hover, .esgst-sgpb-button:not(:active):hover, .esgst-sttb-button:hover, .esgst-stbb-button:hover, #DTEP_SteamApiKey + input:not(:active):hover, .show-hide-giveaway-list.small-colored:not(:active):hover, #dlg-body .RC-button:not(:active):hover, #dlg-body .RCE-button:not(:active):hover, #SGLCdlg-body .SGLCdlg-button:not(#SGLCdlg-progress):not(:active):hover, #dlgbox #closeRC:hover, #dlg-box #closeRCE:hover, #SGLCdlg #closeSGLC:hover, .esgst-chfl-panel i:not(:active):hover, .table__column__key__redeem:not(:active):hover {
    filter: var(--SGSP-button-hover-brightness);
}
.sidebar__entry-insert[style*="border-color: rgb(147, 187, 211)"] {
    background-image: linear-gradient(hsl(185, 31%, 45%) 0%, hsl(185, 35%, 34%) 50%, hsl(185, 45%, 20%) 100%)!important;
    border: 1px solid #000!important;
    color: hsl(185, 50%, 80%)!important;
}
.sidebar__entry-loading, .comment__action-button, .page__description__save, .poll__vote-button, .form__add-answer-button, .form__sync-loading, .form__verify-default, .tab-links li.active a, .btn_action.grey, .btn_action.white, .sale-savings--medium, .comment__action-button, .form__verify-default, .comment__submit-button, .form__saving-button, .mt-more-like-this, .sp-container button, .view_key_btn, .sidebar__shortcut-inner-wrap > *:not(.sidebar__search-container), .btn_action + .esgst-sgpb-button, #DTEP_SteamApiKey + input, .esgst-chfl-panel i, .birthday_event_btn--dark {
    background-image: var(--SGSP-silver-buttons-bg-color)!important;
    border: 1px solid hsla(0, 0%, 0%, 0.9)!important;
    border-color: var(--SGSP-silver-buttons-border-color)!important;
    color: var(--SGSP-silver-buttons-txt-color)!important;
    text-shadow: var(--SGSP-ts-30);
    transition: filter 0.35s ease-in;
    will-change: filter;
}
.sp-container button {
    background-color: transparent!important;
    text-shadow: var(--SGSP-ts-21)!important;
}
.sidebar__entry__points {
    font-weight: 600;
}
.sidebar__error, .sidebar__suspension, #content button#check[style*="rgb(204, 184, 188)"], .ruleFailed, .cmGame {
    cursor: default!important;
}
.sidebar__heading {
    border-bottom: none;
    box-shadow: none;
    color: var(--SGSP-headings-txt-color);
    font-size: 100%!important;
    text-shadow: var(--SGSP-ts-77);
}
.sidebar > .heading, .reply_form > .heading, .heading_lg, .heading_btns > div.is_selected {
    color: var(--SGSP-headings-txt-color);
    text-shadow: var(--SGSP-ts-54);
}
.sidebar_table > div:not(:first-child) {
    border-top: none;
}
.sidebar__mpu {
    height: auto!important;
    margin-bottom: 0!important;
    padding: 0!important;
    max-width: 332px!important;
}
.sidebar.esgst-ns {
    width: unset!important;
    min-width: 206px!important;
}
.sidebar.esgst-ns .sidebar__mpu {
    max-width: 206px!important;
}
.sidebar.sidebar--wide > .sidebar__mpu + .sidebar__search-container, .sidebar.sidebar--wide > .sidebar__outer-wrap > .sidebar__mpu + .sidebar__search-container, .sidebar.esgst-ns > .sidebar__mpu + .sidebar__search-container, .sidebar.esgst-ns > .sidebar__outer-wrap > .sidebar__mpu + .sidebar__search-container {
    margin-top: 8px;
}
.sidebar.sidebar--wide[style="margin-top: 0;"] {
    margin-top: -8px!important;
}
.sidebar__navigation, #sidebar_sgpp_filters, .sgun_notes_panel, .sidebar_table, .esgst-ags-panel, .sidebar .esgst-adots {
    background-color: var(--SGSP-sidebar-bg-color);
    background-image: linear-gradient(hsl(0, 0%, 22%) 0, hsl(0, 0%, 17%) 6px, hsl(0, 0%, 7%) 100%);
    border: 1px solid;
    border-color: hsl(0, 0%, 29%) hsl(0, 0%, 27%) hsl(0, 0%, 24%) hsl(0, 0%, 27%);
    border-radius: 4px;
    box-shadow: 1px 1px 0 hsla(0, 0%, 23%, 0.3) inset;
    margin-top: 5px;
    padding: 4px;
    text-shadow: var(--SGSP-ts-41);
}
.sidebar .esgst-adots {
    padding: 0 4px;
}
.sidebar_table {
    color: inherit;
    margin-top: 1px;
    padding: 0 15px;
}
.sidebar_table > div {
    padding: 10px 5px;
}
.sidebar__navigation__item__count {
    color: hsl(202, 14%, 55%);
}
.sidebar__navigation__item__link {
    padding: 6px 0 6px 6px;
}
.sidebar__navigation__item__link:hover {
    background-image: var(--SGSP-sidebar-link-bg-color);
    border: 1px solid;
    border-color: var(--SGSP-sidebar-link-border-color);
    border-radius: 4px;
}
.sidebar__navigation__item__link:not(:hover) .sidebar__navigation__item__underline {
    border-bottom: 1px dotted hsl(0, 0%, 70%);
    box-shadow: 0 1px 0 hsl(0, 0%, 27%);
}
.sidebar__navigation__item__underline {
    opacity: 0.5;
}
.sidebar__search-container i, .header_search > div > div > div:last-child {
    color: var(--SGSP-general-txt-color);
    text-shadow: var(--SGSP-ts-29);
}
.header_search i {
    filter: brightness(1.25);
}
.sidebar__search-container, input:not(.comment__submit-button):not(.ui_tpicker_time_input):not(.sp-input):not([type="file"]):not(.sidebar__search-input), select, textarea, .sp-light, .bootstrap-select.btn-group:not(.input-group-btn), .bootstrap-select.btn-group[class*=col-] {
    background-color: var(--SGSP-input-bg-color)!important;
    border-color: var(--SGSP-input-border-color)!important;
    border-radius: 4px;
    color: rgba(160, 160, 160, 0.85)!important;
    text-shadow: var(--SGSP-ts-29);
}
.query-builder .has-error input:not(.comment__submit-button):not(.ui_tpicker_time_input):not(.sp-input):not([type="file"]):not(.sidebar__search-input), .query-builder .has-error > * {
    border-color: #800!important;
}
input.ui_tpicker_time_input, input.sp-input {
    color: var(--SGSP-general-txt-color)!important;
    text-shadow: var(--SGSP-ts-41);
}
.sidebar__shortcut-inner-wrap > *:not(.sidebar__search-container):not(:active), .tab-links a, .profile_links .btn_action.white:not(:active), .esgst-sgpb-button:not(:active) {
    background-image: linear-gradient(hsla(0, 0%, 37%, 1) 0%, hsla(0, 0%, 9%, 1) 100%)!important;
    border-color: hsla(0, 0%, 46%, 1) hsla(0, 0%, 41%, 1) hsla(0, 0%, 34%, 1) hsla(0, 0%, 41%, 1)!important;
    color: hsl(0, 0%, 71%)!important;
    text-shadow: var(--SGSP-ts-30);
    transition: filter 0.35s ease-in, opacity 0.35s ease-in;
    will-change: filter, opacity;
}
.sidebar__shortcut-inner-wrap > .is-selected.sidebar__shortcut__blacklist {
    background-image: var(--SGSP-red-buttons-bg-color)!important;
    border: 1px solid #000!important;
    border-color: var(--SGSP-red-buttons-border-color)!important;
    color: var(--SGSP-red-buttons-txt-color)!important;
    text-shadow: var(--SGSP-ts-17);
    transition: filter 0.35s ease-in, opacity 0.35s ease-in;
    will-change: filter, opacity;
}
.sidebar__navigation__item.is-selected .sidebar__navigation__item__name, .sidebar__navigation__item.is-selected i, .icon-red, .author_small .is_negative, .table i.red, .table .reputation .is_negative, .pagination__navigation a.is-selected, .pagination_navigation a.is_selected, i.fa.fa-times-circle-o.red, .poll__delete-input, .sg-icon-red, .header_search .description .red, .dropdown_btn i.red, .popup.is_error .popup_icon i, .rating_checkbox.is_negative.is_selected, .sidebar_table > div.is_warning i, .FTB-suspension-string, .sidebar__shortcut__blacklist.esgst-blacklist, .fa-ban.esgst-blacklist, .esgst-blacklist, .fa-times-circle.esgst-negative, .fa-thumbs-down.esgst-negative, .esgst-negative, #SGIgnore-QuickButton-ProfileAddUser i, .esgst-header-menu-row i.red, .esgst-ap-suspended > *, .form__row span[style*="color: #da5d88"], .esgst-popup .esgst-warning, .tooltip_row i[style*="color: #ec8583"], .esgst-red, .markdown a.esgst-red, .esgst-description.esgst-red, .table__column__deleted, [style*="crimson"], [style*="red"] {
    color: var(--SGSP-red-icons-txt-color)!important;
}
.sidebar__shortcut-inner-wrap > .is-selected.sidebar__shortcut__whitelist, .page__heading__button--blue {
    background-image: linear-gradient(hsl(185, 31%, 45%) 0%, hsl(185, 35%, 34%) 50%, hsl(185, 45%, 20%) 100%)!important;
    border-color: hsl(0, 0%, 0%)!important;
    color: hsl(185, 60%, 63%)!important;
    text-shadow: var(--SGSP-ts-16)!important;
}
.sidebar__navigation.bundles_section .sidebar__navigation__item__name {
    display: flex;
    flex-direction: column;
}
.sidebar__navigation__item__name {
    max-width: 225px;
}
.sidebar__navigation.bundles_section .sidebar__navigation__item__underline {
    margin: 0 2px;
    min-width: 2px;
}
a.sidebar__navigation__item__link span.bundleShop {
    color: #b550ae!important;
    padding-left: 0!important;
}
.sidebar__navigation.bundles_section {
    max-width: calc(100% - 10px);
}
.bundles_section .sidebar__navigation__item__name ~ .sidebar__navigation__item__count {
    margin-bottom: -10px;
}
a.sidebar__navigation__item__link.expired:not(.sidebar__navigation__item__underline) {
    opacity: 0.8;
}
.icon-blue, .icon_to_clipboard, .dropdown_btn i.blue, .sidebar__shortcut__whitelist.esgst-whitelist, .esgst-whitelist, .sg-icon-blue, .esgst-header-menu-row i.blue, .tooltip_row i[style*="color: #84cfda"], .icon-navy, .footer_inner_wrap i {
    color: hsla(195, 60%, 50%, 1)!important;
}
.sidebar__shortcut-tooltip-relative {
    -webkit-transition: visibility 0s linear 0.3s, opacity 0.3s ease 0s, top 0.3s ease 0s;
    transition: visibility 0s linear 0.3s, opacity 0.3s ease 0s, top 0.3s ease 0s;
    z-index: 50;
}
.header_search > div > div > div:last-child:active, .header_search > div > div > div:last-child:active, .sidebar__shortcut-inner-wrap > *:not(.is-disabled):active, .sidebar__entry-loading:not(.is-disabled):active, .comment__submit-button:not(.is-disabled):active, .page__description__save:not(.is-disabled):active, .poll__vote-button:not(.is-disabled):active, .form__add-answer-button:not(.is-disabled):active, .form__sync-loading:not(.is-disabled):active, .btn_action:active:not(.is_saving):not(.is_disabled), .sidebar__entry-insert:not(.is-disabled):active, .sidebar__action-button:not(.is-disabled):active, .nav__sits:not(.is-disabled):active, .form__saving-button:not(.is-disabled):active, .form__submit-button:not(.is-disabled):active, .form__sync-default:not(.is-disabled):active, .featured__action-button:not(.is-disabled):active, .sidebar__entry-delete:active, #content #gaurl a:active, #content .manageGa a:active, #content .showBundledDeals:active, #content button[type="submit"]:active, #content #activated_send:active, #content #real_cv_send:active, #content #multiple_wins_send:active, #content #giveaway_Create:active, #content .back-guide a:active, #content .gaButton:active, #content #giveaway_filters_Update:active, .sp-container button:active, .esgst-sm-colors-default:active, .view_key_btn:active, .esgst-sgpb-button:active, #DTEP_SteamApiKey + input:active, .show-hide-giveaway-list.small-colored:active, #dlg-body .RC-button:active, #dlg-body .RCE-button:active, #SGLCdlg-body .SGLCdlg-button:not(#SGLCdlg-progress):active, .esgst-chfl-panel i:active, .table__column__key__redeem:active {
    transition: filter 0.01s;
    will-change: filter;
    margin-top: 0;
    margin-left: 0;
    border: 1px solid;
    text-shadow: var(--SGSP-ts-21)!important;
    border-color: hsla(0, 0%, 0%, 0.75) hsla(0, 0%, 55%, 0.5) hsla(0, 0%, 55%, 0.5) hsla(0, 0%, 0%, 0.75)!important;
    box-shadow: 2px 2px 2px hsla(0, 0%, 0%, 0.5) inset, 7px 7px 10px hsla(0, 0%, 5%, 0.5) inset!important;
    filter: brightness(0.37);
}
.table__column__key__redeem:active {
    margin-left: 7px;
}
.header_search > div > div > div:last-child:active, .header_search > div > div > div:last-child:active {
    color: #ffffff;
    margin: -2px -2px 0 0;
}
#content .showBundledDeals:active {
    margin-top: 20px;
    margin-bottom: 15px;
}
#content button[type="submit"], #content #activated_send:active, #content #real_cv_send:active, #content #multiple_wins_send:active, #content #giveaway_Create:active, #content .gaButton, #content #giveaway_filters_Update {
    margin-top: 10px!important;
}
.sidebar__search-input {
    background-color: unset;
    color: rgba(160, 160, 160, 0.85)!important;
    text-shadow: var(--SGSP-ts-29);
}
.sidebar__shortcut-tooltip-absolute:not(.sgun_notes_panel) {
    background-image: var(--SGSP-yellow-buttons-bg-color);
    border: 1px solid hsl(0, 0%, 0%);
    border-color: var(--SGSP-yellow-buttons-border-color);
    box-shadow: none;
    color: var(--SGSP-yellow-buttons-txt-color);
    font-size: 12px;
    font-weight: 600;
    text-shadow: var(--SGSP-ts-68);
}
.sidebar__shortcut-tooltip-absolute.tooltip {
    background: var(--SGSP-tooltip-bg-color)!important;
    border: 1px solid var(--SGSP-tooltip-border-color)!important;
    border-radius: 4px!important;
    box-shadow: 2px 2px 8px 0 hsla(0, 0%, 0%, 0.8)!important;
    color: var(--SGSP-tooltip-txt-color)!important;
    margin-top: 5px;
}
.sidebar__suspension-time {
    background-image: var(--SGSP-red-suspension-bot-bg-color)!important;
    border: 1px solid #000!important;
    border-color: var(--SGSP-red-buttons-border-color)!important;
    color: var(--SGSP-red-buttons-txt-color);
    margin-top: -10px;
    padding: 0 5px;
    text-shadow: var(--SGSP-ts-17);
}
.sidebar {
    min-width: 206px;
}
.sidebar--wide {
    min-width: 334px;
    max-width: 334px;
}
.sidebar__search-container {
    box-shadow: none!important;
}
.sp-input {
    background-color: hsl(0, 0%, 28%)!important;
    border-color: hsla(0, 0%, 0%, 0.7)!important;
}
.sp-button-container {
    will-change: transform;
}
.sp-picker-container {
    border-left: 1px solid hsl(0, 0%, 29%);
}
.sp-palette-container {
    border-right: 1px solid hsl(60, 2%, 4%);
}
.sp-palette .sp-thumb-el {
    border: 1px solid hsl(60, 2%, 4%)!important;
}
.sp-replacer {
    margin: 1px;
}
strong {
    filter: brightness(1.18);
    text-shadow: var(--SGSP-ts-46)!important;
}
.table__column__secondary-link:not(.esgst-namwc-highlight):not(.esgst-wbh-highlight):not(.user__whitened):not(.user__blackened):not(.table__column__select), .pagination__navigation a:not(.is-selected) span, .pagination_navigation a:not(.is_selected) span, .comment__cancel-button span, .page__description__cancel span, .form__edit-button span, .form__logout-button span, .comment__username a:not(.esgst-namwc-highlight):not(.esgst-wbh-highlight):not(.user__whitened):not(.user__blackened), a.author_name:not(.is_op):not(.esgst-namwc-highlight):not(.esgst-wbh-highlight):not(.user__whitened):not(.user__blackened), .comment__actions__button, .page__description__edit, .giveaway__username, .giveaway__links span, .action_list a, .popup__actions > *, .popup__description__small a, .esgst-popup-actions a, .DTEP_ACHIEVEMENTS + a > [style*="color"] {
    border-bottom: 1px dotted;
    box-shadow: 0 1px 0 hsl(0, 0%, 24%)!important;
}
.pagination_navigation a.is_selected span {
    border-bottom: none;
    box-shadow: none!important;
}
.table__column--width-medium {
    width: 26%;
}
.table__column--width-small {
    min-width: 97px;
}
.table__column--width-fill > a > .fa-heart {
    vertical-align: baseline;
}
.table__heading, .markdown th, #content th {
    color: var(--SGSP-chart-head-txt-color);
    font-size: 100%;
    text-shadow: var(--SGSP-ts-19);
}
.table__heading {
    background-color: var(--SGSP-tableheading-bg-color);
    border: none!important;
    border-radius: 3px;
    border-bottom: 1px solid var(--SGSP-tableheading-border-color)!important;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    color: var(--SGSP-headings-txt-color);
    margin: -5px -10px 5px;
}
.table__heading ~ .table__heading {
    margin: -1px -10px 5px;
    border-top: 1px solid hsl(60, 2%, 23%)!important;
    border-radius: 0;
}
.table > .table__heading + .table__rows > .table__heading, .table__rows > .table__heading {
    border-radius: 0;
    border-top: none!important;
    margin: -20px -10px 5px;
    padding: 0 1px;
}
.table__rows > .table__heading {
    margin: 5px -10px;
    border-top: 1px solid hsl(60, 2%, 23%)!important;
}
.table .header {
    color: var(--SGSP-headings-txt-color);
    margin: -5px -10px 5px;
    border-radius: 3px 3px 0 0!important;
    background-color: var(--SGSP-tableheading-bg-color);
    border: none!important;
    border-bottom: 1px solid var(--SGSP-tableheading-border-color)!important;
}
.table__row-inner-wrap.is-faded .table__column__heading, h3 a:visited:not(.esgst-float-right), .endless_new_comments .table__column__heading, .endless_no_new_comments .table__column__heading, .table__column--width-fill[style*="opacity"], .table__row-outer-wrap[style*="opacity"] .table__column__heading, .esgst-ct-visited .table__column__heading, .esgst-ct-visited .homepage_table_column_heading {
    color: var(--SGSP-visited-txt-color);
}
.table__row-inner-wrap.is-faded:hover, .giveaway__row-inner-wrap:not(.esgst-gv-box).is-faded:hover {
    opacity: 0.5;
}
.table__row-inner-wrap:hover .table__column__heading, .table__row-inner-wrap:hover .homepage_table_column_heading, .table .row_outer_wrap:hover h3, .giveaway__row-inner-wrap:hover .giveaway__heading__name {
    filter: var(--SGSP-row-hover-color)!important;
}
@supports (-ms-ime-align: auto) {
    .table__row-inner-wrap:hover .table__column__heading {
        filter: unset;
    }
    .table__row-inner-wrap:hover h3 {
        filter: var(--SGSP-row-hover-color);
    }
}
.table__row-outer-wrap[style*="rgba(255, 255, 255, 0.3)"]:not(.esgst-dh-highlighted) {
    background-color: rgba(0, 0, 0, 0.5)!important;
}
.table__row-outer-wrap, .table .row_outer_wrap, .popup__keys__description {
    color: var(--SGSP-secondary-txt-color);
}
.table__row-outer-wrap:not(:last-of-type), .table .row_outer_wrap:not(:last-of-type), .comments > .comment_outer:not(:last-child), .giveaway__row-outer-wrap:not(:last-child):not(.esgst-gv-container), .comments > .comment:not(:last-child), .popup__keys__list > div:not(:last-of-type), .sgun_note:not(:last-of-type), #content .store-entry a, .__table_row_banned, .sidebar_table > div:not(:last-child) {
    border-bottom: 1px solid var(--SGSP-separator-dark-color)!important;
    box-shadow: 0 1px 0 var(--SGSP-separator-light-color);
}
textarea {
    overflow: hidden;
}
textarea[name="have"], textarea[name="want"], textarea[name="description"] {
    min-height: 100px;
    max-height: 50vh;
}
.ui-widget {
    background: hsla(0, 0%, 0%, 0.13);
    border-radius: 2px;
    border: none;
    box-shadow: 0 0 0 1px #000;
    z-index: 997!important;
}
.ui-datepicker {
    background: hsl(0, 0%, 8%);
    border-radius: 4px 4px 0 0;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.02), 2px 2px 5px rgba(0, 0, 0, 0.05), 1px 1px 2px rgba(0, 0, 0, 0.1);
    color: #788EA8;
    font-size: 11px;
    overflow: hidden;
    padding: 0;
    width: 218px;
}
.ui-datepicker-header {
    background: hsl(0, 0%, 25%);
    border-radius: 4px 4px 0 0;
    border: 1px solid #000;
    color: #BEBEBE;
    font-size: 14px;
    text-shadow: var(--SGSP-ts-68);
}
.ui-datepicker-next.ui-state-disabled, .ui-datepicker-prev.ui-state-disabled {
    opacity: 0.25;
}
.ui-datepicker-next:not(:hover):not(.ui-state-disabled), .ui-datepicker-prev:not(:hover):not(.ui-state-disabled) {
    opacity: 0.8;
}
.ui-datepicker-other-month .ui-state-default {
    opacity: 0.4;
}
.ui-datepicker-other-month .ui-state-default:hover {
    color: hsl(125, 56%, 65%)!important;
}
.ui-datepicker-unselectable .ui-state-default {
    opacity: 0.25;
}
.ui-datepicker table {
    border-left: 1px solid #000;
    border-right: 1px solid #000;
}
.ui-datepicker thead {
    background-color: hsla(0, 0%, 35%, 0.42);
    border-bottom: 1px solid #000;
}
.ui-datepicker th {
    line-height: 29px;
    text-shadow: var(--SGSP-ts-76);
}
.ui-datepicker tbody tr {
    border-bottom: 1px solid #000;
}
.ui-datepicker td {
    border-right: 1px solid #000;
    border-top: 1px solid #000;
}
.ui-datepicker tbody td:not(:last-child) {
    border-right: 1px solid #000;
}
.ui-datepicker td:last-child {
    border-right: none;
}
.ui-state-default {
    color: #6CACD0;
    font-size: 12px;
}
.ui-datepicker td:not(.datepicker-highlight-range) .ui-state-highlight:not(.ui-state-active) {
    color: hsl(0, 53%, 53%);
}
.ui-state-disabled .ui-state-default, .ui-datepicker-unselectable .ui-state-default:hover {
    color: #9CAEDB!important;
}
.ui-datepicker td span, .ui-datepicker td a {
    text-shadow: var(--SGSP-ts-12);
}
.ui-datepicker td:not(.datepicker-highlight-range) a:not(.ui-state-active):hover {
    background-image: linear-gradient(#424242 0%, #373737 100%);
    background-color: unset;
    background-repeat: no-repeat!important;
    color: hsl(125, 36%, 43%);
}
.ui-datepicker-calendar .ui-state-active, .ui-datepicker-calendar td.datepicker-highlight-range a {
    background-color: hsla(124, 49%, 42%, 0.5);
    color: #bebebe;
    text-shadow: var(--SGSP-ts-14);
}
.ui-datepicker-calendar td:not(.datepicker-highlight-range) .ui-state-default:not(.ui-state-active) {
    background-image: linear-gradient(hsl(0, 0%, 36%) 0%, hsl(0, 0%, 36%) 100%);
    background-color: unset;
    background-repeat: no-repeat!important;
    box-shadow: inset 1px 1px 1px rgba(255, 255, 255, 0.2);
}
.ui-datepicker-calendar .ui-state-active {
    background: hsla(124, 49%, 42%, 0.5);
    box-shadow: 1px 1px 0 hsla(0, 0%, 27%, 0.8) inset;
}
.ui-datepicker-current-day .ui-state-active {
    background-color: hsla(124, 49%, 48%, 0.6)!important;
}
.ui-timepicker-div {
    background-color: hsla(0, 0%, 35%, 0.42);
    border-bottom: 1px solid #000;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    box-shadow: none;
    text-shadow: var(--SGSP-ts-76);
}
.ui-datepicker-buttonpane {
    border-bottom: 1px solid #000;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
}
.ui-datepicker-buttonpane button:not(:last-child) {
    border-right: 1px solid #000;
}
.ui-datepicker-buttonpane button {
    background-image: linear-gradient(hsl(0, 0%, 26%) 0%, hsl(240, 1%, 17%) 100%);
    background-color: unset;
    border-left: 1px solid rgba(255, 255, 255, 0.08);
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    color: var(--SGSP-link-txt-color);
    text-shadow: var(--SGSP-ts-67);
}
.ui-datepicker-buttonpane button:hover {
    background-image: linear-gradient(hsl(0, 0%, 35%) 0%, hsl(0, 0%, 19%) 100%);
}
.ui-slider-horizontal .ui-slider-handle {
    background: hsl(210, 45%, 28%);
    border: 1px solid #000;
    box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.25);
    margin-top: -3px;
}
.ui-slider-horizontal .ui-slider-handle.ui-state-active {
    margin-top: -5px;
    height: 16px;
    width: 16px;
}
.ui-slider .ui-slider-range {
    background-image: linear-gradient(to left, hsl(98, 40%, 30%) 0%, hsl(110, 45%, 18%) 100%);
    border-radius: 2px;
    box-shadow: 0 0 0 1px #000000;
}
progress {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
}
progress[value], .esgst-progress-bar.ui-widget {
    background: hsla(0, 0%, 0%, 0.05)!important;
    border-radius: 8px;
    border: 1px solid!important;
    border-color: hsla(0, 0%, 0%, 0.8) hsla(0, 0%, 55%, 0.12) hsla(0, 0%, 55%, 0.12) hsla(0, 0%, 0%, 0.8)!important;
    box-shadow: 2px 2px 2px hsla(0, 0%, 0%, 0.25) inset, 7px 7px 10px hsla(0, 0%, 5%, 0.2) inset!important;
    color: hsl(98, 40%, 30%);
    margin-top: 5px;
    margin-bottom: -5px;
}
progress::-webkit-progress-bar {
    background: none!important;
    border-radius: 8px;
}
progress[value]::-webkit-progress-value, .esgst-progress-bar .ui-progressbar-value {
    background-image: -webkit-linear-gradient(right, hsl(98, 40%, 30%) 0%, hsl(110, 45%, 18%) 100%);
    border-radius: 6px;
}
progress::-moz-progress-bar {
    background-image: -moz-linear-gradient(right, hsl(98, 40%, 30%) 0%, hsl(110, 45%, 18%) 100%);
    border-radius: 6px!important;
}
.ui-tooltip, .arrow:after {
    color: var(--SGSP-general-txt-color);
    background-color: #1C1C1C;
    border: 2px solid #252525;
}
.widget-container > div:not(:first-child), .page_flex > div:not(:first-child) {
    border-left: none;
    box-shadow: none;
    padding-left: 0;
}
.widget-container > div:not(:first-child) > .notification.notification--success, .page_flex > div:not(:first-child) > .notification.green, .page_inner_wrap > div[style*="padding-bottom: 25px"] + .notification.green, .sgapi__alert {
    filter: unset;
    font-size: 12px;
    line-height: unset;
    margin: 8px 0!important;
    padding: 12px;
}
.widget-container > div:not(:first-child) > .notification.notification--success, .page_flex > div:not(:first-child) > .notification.green, .page_inner_wrap > div[style*="padding-bottom: 25px"] + .notification.green {
    color: hsl(88, 50%, 68%)!important;
    background-image: linear-gradient(hsla(88, 65%, 44%, 0.2) 0%, hsla(88, 72%, 21%, 0.9) 100%)!important;
    border-color: hsl(88, 90%, 27%)!important;
}
::selection {
    background: var(--SGSP-select-highlight-bg-color);
    color: var(--SGSP-select-highlight-color);
}
::-webkit-scrollbar {
    background: transparent;
}
::-webkit-scrollbar-button, ::-webkit-scrollbar-corner {
    background: var(--SGSP-scrollbar-thumb-bg-color) center no-repeat;
    border: 1px solid hsl(0, 0%, 9%);
}
::-webkit-scrollbar-track {
    background: var(--SGSP-scrollbar-bg-color) center no-repeat;
    border: 1px solid hsl(0, 0%, 9%);
}
::-webkit-scrollbar-track:horizontal, ::-webkit-scrollbar-thumb:horizontal {
    border-left: 0;
    border-right: 0;
}
::-webkit-scrollbar-track:vertical, ::-webkit-scrollbar-thumb:vertical {
    border-bottom: 0;
    border-top: 0;
}
::-webkit-scrollbar-thumb {
    background: var(--SGSP-scrollbar-thumb-bg-color) center no-repeat;
    box-shadow: 0 0 1px 1px hsla(0, 0%, 0%, 0.6) inset;
}
::-webkit-scrollbar-track:vertical {
    background: var(--SGSP-scrollbar-bg-color);
}
::-webkit-scrollbar-track:horizontal {
    background: var(--SGSP-scrollbar-bg-color);
}
::-webkit-scrollbar-button:hover, ::-webkit-scrollbar-thumb:hover {
    background-color: var(--SGSP-scrollbar-hover-bg-color);
}
::-webkit-scrollbar-thumb {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAD9JREFUeNpi/P//PwMhwAQibly/9h8fzUi0SefPnfuPjybepKNHjvxHpQ+j0MSbtGvXzv/I9G44vYN4kwACDAA7RESWY5qxTAAAAABJRU5ErkJggg==);
}
::-webkit-scrollbar-button:vertical:decrement {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAYAAACXU8ZrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAD9JREFUeNpi+P//PwMyTk6I+48uxsSABFIS4//7+PqDaWRxJnQFIICukAldAQwgK2QEuQFdATLYsnkjA0CAAQCJHDCKKVQLaAAAAABJRU5ErkJggg==);
    background-position: center 7px;
    border-radius: 0 4px 0 0;
    height: 23px;
}
::-webkit-scrollbar-button:vertical:increment {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAYAAACXU8ZrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAENJREFUeNpiTE6I++/j68+AC2zZvJGBac78hYwgBi4FIHkmEAebQpgCMOf///9wDLJ6/dq1/0E0sjiKIphCdDGAAAMAtQVIOLvLsjoAAAAASUVORK5CYII=);
    background-position: center 9px;
    border-radius: 0 0 4px 0;
    height: 23px;
}
::-webkit-scrollbar-button:horizontal:decrement {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAJCAYAAAD6reaeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEZJREFUeNpi+P//PwMyTk6I+8/EgARSEuP/+/j6MzChC4AAE7oACDA/eXgfRQCscs78hYxbNm9EFQQR6BJwi1AksLkTIMAAsFg1w4z04pgAAAAASUVORK5CYII=);
    width: 23px;
}
::-webkit-scrollbar-button:horizontal:increment {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAJCAYAAAD6reaeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAENJREFUeNpiSE6I+w8EDMiYycfXnyElMf4/AxJgAhHoEkwwBrIEE7I2mASK4JbNGxnmzF/IyIQuANeOLAAG2NwJEGAAuVg0Qtlxn1kAAAAASUVORK5CYII=);
    width: 23px;
}
.sgun_note_text {
    color: var(--SGSP-general-txt-color);
    filter: brightness(1.25);
}
.sgun_note_type .fa {
    color: hsl(187, 43%, 55%);
    font-size: 18px;
    margin: 3px;
}
.sgun_note:not(:last-of-type) {
    padding-bottom: 3px;
}
.sgun_note {
    margin-top: 3px;
}
.sgun__infobox_line a, .sgapi__info_box_line a {
    color: var(--SGSP-link-txt-color);
}
.sgun__notes_present i.sgun__badge {
    color: var(--SGSP-red-icons-txt-color);
    font-size: 0.66em;
    font-weight: 900;
    margin-left: 6px;
    margin-top: -6px;
    text-shadow: var(--SGSP-ts-19);
}
div.sgun_note:first-of-type {
    padding-top: 5px;
}
.sgun_button {
    position: relative;
    left: 25px;
}
.sgun__info_box, .sgapi__info_box {
    background-color: hsla(0, 0%, 0%, 0.05)!important;
    border-color: hsla(0, 0%, 0%, 0.35) hsla(0, 0%, 100%, 0.05) hsla(0, 0%, 100%, 0.05) hsla(0, 0%, 0%, 0.35)!important;
    border-radius: 4px;
    box-shadow: 1px 1px 6px hsla(0, 0%, 0%, 0.2) inset!important;
    margin: 10px;
    padding: 10px 20px;
}
.sgun_notes_panel {
    background-color: hsl(0, 0%, 17%);
    border: 1px solid hsl(0, 0%, 0%);
    margin-top: 0;
    padding: 0 4px;
}
.sgun_notes_panel div:not(.sgun_note) {
    color: var(--SGSP-general-txt-color);
    font-size: 12px;
    font-weight: 600;
    text-align: center;
}
.___mh_bookmark_outer_container {
    left: calc(100% - 555pt)!important;
    position: absolute;
    top: 9px!important;
    z-index: 999!important;
}
.__mh_bookmark_container .nav__row {
    background-color: transparent!important;
}
.__mh_ended .__mh_nav_row_img, .__mh_ended .nav__row__summary {
    opacity: 0.3;
}
.__mh_train_tracks {
    opacity: 0.5!important;
}
.__mh_state_owned {
    background-image: var(--SGSP-red-buttons-bg-color)!important;
}
.__mh_state_owned *:not(.__mh_bookmark_item_remove_btn), .__mh_state_owned:hover *:not(.__mh_bookmark_item_remove_btn) {
    color: var(--SGSP-red-buttons-txt-color)!important;
}
.__mh_state_entered {
    filter: brightness(0.7);
}
.nav__row .fa.__mh_bookmark_item_remove_btn {
    font-size: 12px!important;
}
.syntaxhighlighter {
    background-color: var(--SGSP-reply-bg-color)!important;
    border-radius: 4px;
    border: 1px solid var(--SGSP-reply-border-color);
}
.syntaxhighlighter code, .syntaxhighlighter a {
    text-shadow: none;
    box-shadow: none;
}
.syntaxhighlighter table {
    table-layout: auto;
}
.syntaxhighlighter table td.code .container textarea {
    background: #4d4d4d!important;
    color: #53bff9;
    text-shadow: none;
}
.syntaxhighlighter .line.alt1, .syntaxhighlighter .line.alt2 {
    background-color: transparent!important;
}
.syntaxhighlighter .gutter .line {
    border-right: 2px solid rgba(67, 90, 95, 0.6)!important;
}
.__table_row_banned .fa-ban {
    color: rgba(246, 85, 85, 0.9);
}
.__table_row_banned a.tags, .__mh_free_games_rows .global__image-outer-wrap {
    background: hsl(0, 0%, 21%);
    border: none;
    border-radius: 4px;
    padding: 2px 5px;
}
.tags, .__mh_free_games_rows .global__image-outer-wrap {
    box-shadow: 0 0 0 1px #000;
}
.sgapi__alert {
    cursor: default;
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    margin-right: 5px;
}
.sgapi__alert.alert-info {
    color: hsl(210, 65%, 72%);
    background-color: transparent;
    background-image: linear-gradient(hsla(210, 65%, 44%, 0.23) 0%, hsla(210, 72%, 24%, 0.9) 100%)!important;
    border-color: hsl(210, 100%, 30%);
}
.sgapi__alert.alert-success {
    color: hsl(88, 50%, 68%);
    background-color: transparent!important;
    background-image: linear-gradient(hsla(88, 65%, 44%, 0.2) 0%, hsla(88, 72%, 21%, 0.9) 100%)!important;
    border-color: hsl(88, 90%, 27%)!important;
}
.sgapi__alert.alert-warning {
    color: hsla(62, 60%, 72%, 0.9)!important;
    background-color: transparent;
    background-image: linear-gradient(hsla(62, 65%, 44%, 0.23) 0%, hsla(62, 72%, 24%, 0.9) 100%)!important;
    border-color: hsl(62, 100%, 27%);
}
.sgapi__alert.alert-danger {
    color: hsl(0, 75%, 72%)!important;
    background-color: transparent;
    background-image: linear-gradient(hsla(0, 65%, 44%, 0.23) 0%, hsla(0, 72%, 24%, 0.9) 100%)!important;
    border-color: hsl(0, 100%, 27%)!important;
}
.sgapi__alert .fa.sgapi_button {
    color: inherit!important;
}
.esgst-popout {
    background-color: var(--SGSP-body-bg-color);
    backface-visibility: hidden;
    border: solid 1px var(--SGSP-content-border-color);
    color: var(--SGSP-general-txt-color)!important;
}
.giveaway__columns > .giveaway__column--width-fill.text-right span[data-timestamp] {
    white-space: normal!important;
    margin-right: 3px;
}
.esgst-elgb-button {
    box-shadow: none!important;
}
.esgst-hidden + .row-spacer, .comment.comment--submit + .row-spacer, .esgst-cfh-panel + .pagination, .esgst-cfh-panel + .pagination + .row-spacer, .ESCommentBox .pagination, .ESContext, .esgst-gv-icons [data-draggable-id="gt"] span, .featured__container .featured__inner-wrap > .esgst-gm-checkbox {
    display: none;
}
.giveaway__row-outer-wrap + div[style*="border-bottom"], .comments > div[style*="border-bottom"], .page__heading ~ div div[style*="border-bottom: 1px solid #d2d6e0"] {
    border: none!important;
    box-shadow: none!important;
}
.widget-container--margin-top[style*="margin-top: 50px"] {
    margin-top: 25px!important;
}
.EGBDescriptionPopup {
    max-height: 75%;
}
.MTBox {
    border: 1px solid hsla(0, 0%, 0%, 0.7)!important;
    text-shadow: var(--SGSP-ts-34)!important;
}
.esgst-cfh-popout {
    background-color: var(--SGSP-body-bg-color)!important;
    border: 1px solid var(--SGSP-content-border-color)!important;
    filter: brightness(1.15);
    will-change: transform;
}
.esgst-popup > .popup_summary > .popup_icon {
    margin-right: 0;
}
.esgst-cfh-panel .form__saving-button, .esgst-cfh-panel .form__saving-button:active {
    margin: 5px!important;
}
.esgst-cfh-panel {
    margin: 0 0 5px!important;
    max-width: 900px;
}
.esgst-cfh-panel span, .esgst-cfh-panel span .page_heading_btn {
    border-radius: 4px;
}
.esgst-cfh-panel .page_heading_btn:hover {
    filter: brightness(1.2);
}
.esgst-cfh-emojis {
    background-image: none;
    color: var(--SGSP-general-txt-color);
}
.esgst-cfh-emojis > * {
    filter: brightness(0.7);
}
.esgst-cfh-emojis > :hover {
    filter: brightness(1.1) saturate(1.5);
}
.esgst-ap-popout {
    background-color: var(--SGSP-body-bg-color)!important;
    border-radius: 4px!important;
    box-shadow: 0 0 0 1px #000, 0 0 10px 2px hsla(0, 0%, 0%, 0.8);
    height: unset!important;
    min-width: 420px!important;
    max-width: none;
    overflow: visible;
    padding: 0!important;
}
.esgst-ap-popout.esgst-popout {
    color: var(--SGSP-general-txt-color);
    text-shadow: var(--SGSP-ts-71);
}
.esgst-ap-popout .featured__outer-wrap {
    width: 100%;
    max-width: 100%;
    top: 9px;
    padding: 0!important;
    margin: 0;
}
.esgst-ap-popout .featured__heading {
    height: 17px;
}
.esgst-ap-popout .sidebar__shortcut-inner-wrap {
    width: 75px;
}
.esgst-ap-popout .sidebar__shortcut-inner-wrap * {
    width: 45px;
}
.esgst-ap-link .global__image-outer-wrap--avatar-large {
    margin: 0 5px!important;
}
.esgst-ap-popout .featured__inner-wrap {
    padding: 10px 15px 8px 10px!important;
}
.esgst-ap-popout .global__image-inner-wrap, .SGPP_UserInfo_balloon .global__image-inner-wrap {
    background-size: cover!important;
}
.esgst-ap-popout .esgst-ugd-input {
    line-height: unset!important;
}
.RWSCVLLink ~ span {
    margin-left: 3px;
}
.esgst-tag-button:not(.esgst-faded) .fa-tag, .table__row-outer-wrap .esgst-dh-button, .table__row-outer-wrap .esgst-df-button, .table__row-outer-wrap .esgst-egh-button, [id*="SpecificIgnore"], .esgst-codb-button, .esgst-pm-button i.esgst-grey, .esgst-tag-button:hover {
    opacity: 0.55;
}
.esgst-tag-button, .markdown a.esgst-tag-button, .markdown a.esgst-egh-button {
    color: inherit!important;
    text-shadow: var(--SGSP-ts-73)!important;
}
.featured__container .esgst-tag-button {
    text-shadow: var(--SGSP-ts-24)!important;
}
.esgst-mpp-visible {
    padding: 0!important;
    border-top: none;
}
.esgst-mpp-hidden {
    background-color: var(--SGSP-body-bg-color);
    border: solid 1px var(--SGSP-content-border-color);
    border-radius: 4px;
    box-shadow: 0 0 6px 2px hsla(0, 0%, 0%, 0.8);
    height: inherit!important;
    max-height: 75%!important;
}
.esgst-uh-box {
    background-color: hsl(210, 33%, 21%)!important;
    background-image: none;
    border: 1px solid black;
    border-radius: 4px!important;
    padding: 10px!important;
    z-index: 999;
}
.esgst-uh-title {
    margin: 0 0 10px!important;
}
.esgst-uh-title a {
    margin-left: 5px;
}
.esgst-uh-list li {
    margin-bottom: 2px;
}
.esgst-gc:not(.giveaway__column):not(.featured__column) {
    box-shadow: 0 0 0 1px #000;
    margin: 2px!important;
}
.esgst-es-pause-button .fa-play, .esgst-checkbox .fa-square-o {
    width: 12px;
}
.pagination strong {
    filter: initial!important;
}
.esgst-popup-scrollable > .esgst-text-left div > .giveaway__row-outer-wrap:not(.esgst-gv-container) {
    background-color: rgba(0, 0, 0, 0.15);
    border: 1px solid #000;
    border-radius: 4px;
    box-shadow: 0 1px 0 var(--SGSP-separator-light-color)!important;
    margin-bottom: 15px;
    padding: 8px 10px;
}
.esgst-uh-popup a:not(.esgst-tag-button) {
    border-bottom: 1px dotted!important;
    box-shadow: 0 1px 0 hsl(0, 0%, 24%)!important;
    color: var(--SGSP-link-txt-color);
}
.esgst-uh-popup div {
    margin-bottom: 3px;
}
.esgst-user-icon i.esgst-whitelist, .esgst-user-icon i.esgst-blacklist, .esgst-user-icon i.esgst-positive, .esgst-user-icon i.esgst-negative, .esgst-user-icon i.esgst-unknown, .esgst-whitelist, .esgst-blacklist, .esgst-unknown {
    border: 0!important;
    text-shadow: var(--SGSP-ts-46)!important;
}
.esgst-positive, .esgst-negative {
    text-shadow: var(--SGSP-ts-46)!important;
}
.esgst-wbh-highlight-whitelisted, .esgst-wbh-highlight-blacklisted {
    box-shadow: 0 0 0 1px #000!important;
    opacity: 0.8;
    text-shadow: none!important;
}
.esgst-gv-creator .esgst-wbh-highlight-whitelisted, .esgst-gv-creator .esgst-wbh-highlight-blacklisted {
    padding: 1px 4px 0 3px!important;
}
.featured__heading .esgst-un-button {
    color: inherit;
}
.nav__button-container:last-child a[href="#sg2o-overlay-settings"] {
    border-radius: 4px!important;
}
.giveaway-gridview {
    margin: 5px!important;
}
.giveaway-gridview, .giveaway-gridview .giveaway_image_thumbnail, .giveaway-gridview .giveaway_image_thumbnail_missing {
    border: none!important;
}
.giveaway-gridview .giveaway_image_thumbnail:not(a), .giveaway-gridview .giveaway_image_thumbnail_missing:not(a) {
    box-shadow: none!important;
}
.gridview-info {
    background-color: var(--SGSP-grid-popout-bg-color)!important;
    border: 1px solid transparent;
    box-shadow: 0 0 0 1px var(--SGSP-grid-popout-border-color);
    border-radius: 0 0 3px 3px!important;
    color: var(--SGSP-general-txt-color);
    margin-top: 0!important;
}
.gridview-info .ga-name {
    border-bottom: 1px solid var(--SGSP-separator-dark-color)!important;
    box-shadow: 0 1px 0 var(--SGSP-separator-light-color);
    color: #a4a4a4;
    min-height: 18px;
    text-align: center;
    text-shadow: var(--SGSP-ts-53);
}
.gridview-avatar {
    border-radius: 4px!important;
    background-color: hsl(0, 0%, 35%);
    background-size: cover;
    border: 1px solid hsla(0, 0%, 0%, 0.75)!important;
    box-shadow: none!important;
    margin-left: 5px;
    margin-bottom: 5px;
}
.gridview-info .giveaway__column--contributor-level {
    border: 1px solid;
    border-radius: 4px;
    margin-top: 4px;
    padding: 2px 4px;
}
.sg2o-none-border {
    background-color: var(--SGSP-image-bg-color);
    border: 1px solid var(--SGSP-image-border-color);
}
.sg2o-tooltip {
    border-bottom: 1px dotted hsla(0, 0%, 70%, 0.5)!important;
    margin-top: -8px;
    text-shadow: inherit!important;
}
.sg2o-tooltip > span {
    background: var(--SGSP-tooltip-bg-color)!important;
    border: 1px solid var(--SGSP-tooltip-border-color)!important;
    box-shadow: 2px 2px 2px hsla(0, 0%, 0%, 0.8), 2px 2px 8px hsla(0, 0%, 0%, 0.8)!important;
    color: var(--SGSP-tooltip-txt-color)!important;
    line-height: 16px;
    margin-top: 50px;
    padding: 5px 5px 5px 8px!important;
    width: 190px!important;
}
.sg2o-tooltip:hover > span {
    margin-left: -75px!important;
    margin-top: 30px!important;
}
.sg2o-tooltip span b {
    background: var(--SGSP-tooltip-bg-color)!important;
    box-shadow: none!important;
    border-top: 1px solid var(--SGSP-tooltip-border-color)!important;
    border-right: 1px solid var(--SGSP-tooltip-border-color)!important;
    margin-top: -14px!important;
}
.pinned-gridview-container {
    background-image: var(--SGSP-pinned-bg-color)!important;
    border: 1px solid var(--SGSP-pinned-border-color)!important;
    border-bottom: 1px solid var(--SGSP-pinned-border-color)!important;
}
.table__heading.sg2o-table-heading {
    padding: 0 10px;
    border-top: 1px solid var(--SGSP-tableheading-border-color)!important;
    margin: 5px -10px;
}
.pagination > .table__heading.sg2o-table-heading {
    margin: -7px -1px;
    border-radius: 4px!important;
    border: 1px solid hsla(0, 0%, 0%, 0.5)!important;
}
.sg2o-gridview-container, .pinned-gridview-container, .sg2o-gridview-container .table__heading.sg2o-table-heading + div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
#powerTip {
    background-color: #252522!important;
    box-shadow: 0 0 1px #575757 inset!important;
}
#powerTip.ne:before, #powerTip.nw:before, #powerTip.n:before {
    border-top: 10px solid #252522!important;
    filter: drop-shadow(0 1px 0 #000);
    bottom: -9px!important;
}
#powerTip.ne:before {
    filter: drop-shadow(-1px 1px 0 #000) drop-shadow(0 1px 0 #000);
}
#powerTip.nw:before {
    filter: drop-shadow(0 1px 0 #000) drop-shadow(1px 0 0 #000);
}
#powerTip.se:before, #powerTip.sw:before, #powerTip.s:before {
    border-bottom: 10px solid #252522!important;
    filter: drop-shadow(0 -1px 0 #000);
    top: -9px!important;
}
#powerTip.se:before {
    filter: drop-shadow(0 -1px 0 #000) drop-shadow(-1px 0 0 #000);
}
#powerTip.sw:before {
    filter: drop-shadow(0 -1px 0 #000) drop-shadow(1px 0 0 #000);
}
#powerTip.w:before {
    border-left: 10px solid #252522!important;
    right: -9px!important;
    filter: drop-shadow(1px 0 0 #000);
}
#powerTip.e:before {
    border-right: 10px solid #252522!important;
    left: -9px!important;
    filter: drop-shadow(-1px 0 0 #000);
}
.sg2o-modal-dialog > div {
    background: hsl(60, 3%, 13%)!important;
    border: 1px solid hsla(0, 0%, 0%, 0.5);
    border-radius: 4px!important;
}
.sg2o-close {
    color: hsl(0, 0%, 80%)!important;
    background: hsl(0, 0%, 19%)!important;
}
.sg2o-close:hover {
    color: hsl(0, 0%, 100%)!important;
    background: hsl(0, 0%, 25%)!important;
}
.sg2o-settings-tabs nav {
    box-shadow: rgba(0, 0, 0, 0.15) 0 -4px 0 inset!important;
}
.sg2o-settings-tabs-navigation {
    box-shadow: rgba(0, 0, 0, 0.05) 0 -2px 2px inset!important;
}
.sg2o-settings-tabs .sg2o-settings-tabs-navigation a.sg2o-settings-tab-selected {
    background-color: rgba(0, 0, 0, 0.3)!important;
    box-shadow: #722321 0 2px 0 inset!important;
    color: #a13131;
}
.sg2o-settings-tabs-navigation a {
    background-color: rgba(0, 0, 0, 0.15)!important;
    box-shadow: #722321 0 2px 0 inset!important;
}
.sg2o-settings-tabs-navigation a:hover {
    color: #848484!important;
    background-color: rgba(44, 44, 44, 0.3)!important;
}
.sg2o-settings-head, .sg2o-settings-color-input {
    color: #858585!important;
}
.sg2o-settings-color-input input {
    background-color: #343434!important;
    border-color: hsl(0, 0%, 0%)!important;
}
#sg2o-level-slider, #sg2o-points-slider, #sg2o-chance-slider {
    margin-top: 7px;
    margin-bottom: 2em;
}
.ui-slider-pips .ui-slider-label {
    top: 0!important;
    text-indent: 0;
}
.ui-slider-pips .ui-slider-line {
    top: -7px;
}
.ui-slider-pips:not(.ui-slider-disabled) .ui-slider-pip:hover .ui-slider-label {
    color: hsl(0, 0%, 88%)!important;
}
.ui-slider-pips [class*=ui-slider-pip-initial], .ui-slider-pips .ui-slider-pip-initial-2 {
    color: hsla(202, 62%, 67%, 0.9);
}
.ui-slider-pips [class*=i-slider-pip-selected], .ui-slider-pips .ui-slider-pip-selected-2 {
    color: rgba(246, 85, 85, 0.9)!important;
}
.ui-slider-float .ui-slider-tip, .ui-slider-float .ui-slider-tip-label {
    background: #2f2f2f!important;
    border: 1px solid #000!important;
    border-radius: 4px!important;
    color: #a6a6a6!important;
    text-indent: 0;
}
.ui-slider-float .ui-slider-tip:before, .ui-slider-float .ui-slider-pip .ui-slider-tip-label:before {
    border-top-color: inherit!important;
}
.ui-slider-float .ui-slider-tip:after, .ui-slider-float .ui-slider-pip .ui-slider-tip-label:after {
    border-top-color: #2f2f2f!important;
}
.sidebar__navigation:last-of-type + div:not(.floating-pagination):not(.sidebar__subscribed) + div:not(.floating-pagination):not(.sidebar__subscribed) {
    background-color: var(--SGSP-sidebar-bg-color);
    border: 1px solid var(--SGSP-sidebar-border-color);
    border-radius: 4px;
    box-shadow: 1px 1px 0 hsla(0, 0%, 23%, 0.3) inset;
    margin-top: 28px;
    padding: 10px 20px 5px;
    text-shadow: var(--SGSP-ts-41);
}
.sidebar__navigation:last-of-type + div:not(.floating-pagination)[style^="padding-top: 10px"] {
    background-image: none;
    border: none;
    box-shadow: none;
    margin-top: 0;
}
.sidebar__navigation:last-of-type + div:not(.floating-pagination), .sidebar__subscribed, .sidebar__unsubscribed {
    margin-top: 15px;
}
.sidebar__navigation:last-of-type + div > div:not(#np_steamgifts_giveaway_top_responsive):not(#np_steamgifts_homepage_top_responsive) {
    text-indent: 10px;
}
.sidebar__navigation:last-of-type + div:not(.sidebar__subscribed) h3 {
    margin-left: -20px;
    margin-top: -30px;
    padding-bottom: 18px;
}
.pagination__results, .pagination__navigation {
    text-indent: 0!important;
}
.cb__three {
    color: #80bf40;
    text-shadow: var(--SGSP-ts-54);
}
.comment__tools {
    margin-bottom: 8px!important;
    margin-top: 3px;
}
.comment__tools > .comment__submit-button, .comment__submit-button.serperator {
    border: none!important;
    box-shadow: 0 0 0 1px #000;
    margin-right: 1px;
}
.emoticons {
    background: #343434;
    border: 1px solid hsl(0, 0%, 29%)!important;
    border-radius: 4px;
}
.emoticons .comment__submit-button {
    font: 300 18px/22px "Open Sans", sans-serif;
    height: 24px!important;
    margin: 0.12em 0;
    padding: 2px!important;
    text-shadow: none;
    width: 27px!important;
}
.nav__row[href*="#esg_about"] i {
    color: hsl(187, 43%, 55%)!important;
}
.nav__row:hover[href*="#esg_about"] i {
    color: hsl(0, 0%, 88%)!important;
}
.giveaway__chance[style="color:red"] {
    color: rgba(246, 85, 85, 0.9)!important;
}
.giveaway__chance {
    opacity: 0.65;
}
.giveaway__heading__name font.ga-mark {
    color: hsla(60, 66%, 44%, 0.8);
}
.giveaway__columns > form {
    background-image: none;
    border: none;
    box-shadow: none!important;
}
.sidebar__entry-insert.enterall {
    margin: 0 5px 0 0;
    padding: 4px 10px 5px 5px;
}
.sidebar__entry-insert.enterall i {
    font: inherit!important;
    font-size: 13px!important;
}
.sidebar__entry-insert.enterall i:before {
    font: normal normal normal 14px/1 FontAwesome;
}
.sidebar__navigation__itemz {
    height: 60px;
}
.sidebar__navigation__itemz .sidebar__navigation__item__link {
    padding: 3px 5px;
}
.sidebar__navigation__itemz .sidebar__navigation__item__link .sidebar__navigation__item__underline {
    color: var(--SGSP-secondary-txt-color);
    border: 1px solid transparent;
    font-size: 11px;
    opacity: 1;
    white-space: nowrap;
}
.sidebar__navigation__itemz .sidebar__navigation__item__link:not(:hover) .sidebar__navigation__item__underline {
    border-bottom: 1px dotted hsla(0, 0%, 70%, 0.5);
    box-shadow: 0 1px 0 hsla(0, 0%, 27%, 0.5);
}
.sidebar__navigation__item__title {
    color: hsla(0, 0%, 75%, 0.8);
    font-size: 13px!important;
    padding-bottom: 4px;
    text-shadow: var(--SGSP-ts-53);
    text-overflow: ellipsis;
}
.sidebar__navigation__item__title + i {
    bottom: 2px;
    color: hsl(60, 2%, 32%)!important;
    position: relative;
    text-shadow: var(--SGSP-ts-50)!important;
}
.sidebar__navigation__itemz .sidebar__navigation__item__name {
    color: var(--SGSP-link-txt-color)!important;
    margin-bottom: -12px;
    position: relative;
    text-shadow: var(--SGSP-ts-54);
}
.sidebar__navigation__itemz .sidebar__navigation__item__name:nth-child(4) {
    color: var(--SGSP-secondary-txt-color)!important;
    top: -15px;
}
div.sidebar__entry-custom {
    margin: -1px -9px!important;
}
.filter-content {
    padding: 2px 0 5px!important;
}
.filter_table {
    margin: 0 0 5px!important;
    padding: 0 5%;
}
.filter_table td {
    border: none!important;
    padding: 2px!important;
}
.filter_table tr td:first-child {
    text-indent: 15px;
}
.filter_table tr:last-child td:nth-child(2) {
    background-color: rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    border: 1px solid hsla(0, 0%, 0%, 0.4)!important;
    cursor: default;
}
.filter_table tr:last-child td:nth-child(2) span {
    margin-right: 220px!important;
    padding-left: 15px;
}
.filter_table tr:last-child td:last-child {
    color: var(--SGSP-link-txt-color)!important;
    cursor: default;
    text-indent: -220px;
}
.filter_table tr:last-child td:last-child i {
    margin: -1px 0 0 15px!important;
    text-indent: 0;
}
.filter_table tr:first-of-type td:not(:first-child) {
    position: relative;
    top: 58px;
}
.floating-pagination {
    background-color: var(--SGSP-sidebar-bg-color);
    box-shadow: 1px 1px 0 hsla(0, 0%, 23%, 0.3) inset;
    border: 1px solid var(--SGSP-sidebar-border-color);
    margin-bottom: 3px;
    min-width: 194px!important;
    max-width: 194px;
}
.sidebar--wide .floating-pagination {
    max-width: 322px;
    z-index: 1;
}
.floating-pagination .pagination__results {
    margin-bottom: 5px;
}
.floating-pagination .pagination__navigation a {
    padding: 0 3px;
}
.form__slider_filter--level, .form__slider_filter--chance, .form__slider_filter--points {
    margin-top: 2px;
}
.popup--content.page__description {
    word-break: normal!important;
}
.popup__desc-display .popup__heading {
    margin-top: -40px;
}
.popup__desc-display .popup__heading__bold {
    font-size: 32px;
    position: relative;
    right: 50px;
    top: -35px;
}
.popup__desc-display.popup {
    padding: 35px 75px;
}
.popup__desc-display i {
    font-size: 32px;
    margin-right: -190px;
    padding: 15px;
    text-indent: 2px;
}
.popup__desc-error.popup .fa-exclamation-circle {
    padding: 6px 10px;
}
.pinned-giveaways__button[collapsed="1"] {
    margin-top: -15px!important;
}
.nav__right-container .nav__button[style*="box-shadow"] + .nav__button--is-dropdown-arrow:not(.is-selected) {
    box-shadow: 1px 1px 0 0 hsl(0, 0%, 0%)!important;
}
.giveaway__columns > .giveaway__column--width-fill.text-right {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    align-items: center;
}
.giveaway__column--width-fill.text-right .giveaway__username {
    line-height: normal;
    margin-left: 5px;
}
.scroll-top {
    bottom: -20px!important;
    right: 50px!important;
    z-index: 1000!important;
    transform-origin: left top 0;
    text-shadow: var(--SGSP-ts-49)!important;
}
.popup--content.page__description .markdown--resize-body {
    line-height: 1em;
    font-weight: 600;
}
.mt-more-like-this.sidebar__entry-loading {
    line-height: 26px;
}
.mt-more-like-this {
    box-shadow: none!important;
}
.mt-search {
    height: 29px;
}
#filterControls {
    margin-bottom: 8px;
}
#filterCaption {
    margin: 0 -15px;
    max-width: unset;
    justify-content: center;
}
.filterDetails {
    margin: -1px -15px!important;
    border-left: none!important;
    border-right-style: none!important;
}
#filterDetails span {
    z-index: 999;
}
#filterHide {
    border: none;
    margin: 1px -15px 0;
}
@media screen and (max-width: 1280px) {
    .giveaway__columns > form {
        margin-right: 0!important;
    }
    .sidebar__navigation__itemz .sidebar__navigation__item__link .sidebar__navigation__item__underline {
        max-width: 222px;
    }
    .sidebar__navigation__item__title {
        font-size: 12px!important;
        padding-bottom: 5px;
    }
    div.sidebar__entry-custom {
        padding: 0 4px!important;
        margin: -1px -6px!important;
        min-width: 40px!important;
        font-size: 11px!important;
        line-height: 22px!important;
    }
    .popup__desc-display.popup {
        max-width: 780px!important;
    }
}
@media screen and (max-width: 1024px) {
    .filter-content.pinned-giveaways .form__slider {
        width: 190px;
    }
    .filter-content ~ div .global__image-outer-wrap--game-medium {
        width: 145px;
        height: 54px;
    }
    .filter-content ~ div .giveaway__row-inner-wrap > *:not(:last-child) {
        margin-right: 5px!important;
    }
    .floating-pagination {
        max-width: 208px!important;
    }
    .giveaway__chance {
        white-space: normal!important;
    }
    .giveaway__columns > form {
        position: relative;
        bottom: -28px;
        margin-right: -8px!important;
        margin-left: -70px!important;
    }
}
.pull-right.endless_control_element .fa-refresh {
    margin-right: 8px;
}
.tile_view_header {
    border-bottom: 1px solid var(--SGSP-separator-dark-color)!important;
    box-shadow: 0 1px 0 var(--SGSP-separator-light-color)!important;
    margin-bottom: 7px!important;
    padding-bottom: 6px;
    word-wrap: break-word;
}
.SGPP_FixedFooter_outerWrap {
    background: #171a1c!important;
}
.SGPP__gridAvatar_outer {
    margin-bottom: 2px;
}
.SGPP__gridAvatar_outer + div > div:first-of-type {
    margin-bottom: 3px;
}
.SGPP__gridAvatar {
    background-color: hsl(0, 0%, 35%)!important;
}
.SGPP__gridTileInfo .giveaway__icon {
    position: relative;
    top: -2px;
}
.SGPP__gridTileInfo {
    background-color: var(--SGSP-grid-popout-bg-color)!important;
    border: none!important;
    box-shadow: 0 0 0 1px var(--SGSP-grid-popout-border-color);
}
.SGPP__gridTile:hover > .SGPP__gridTileInfo {
    border-top: 1px dotted hsla(0, 0%, 0%, 0.6)!important;
}
.SGPP__gridTileTime {
    background-color: var(--SGSP-grid-popout-bg-color)!important;
    box-shadow: 0 0 0 1px var(--SGSP-grid-popout-border-color);
}
.SGPP__gridTileIcons {
    position: absolute;
    bottom: -1px!important;
    right: -1px!important;
}
.SGPP__gridTileIcons i {
    font-size: inherit;
    color: inherit;
}
.SGPP__gridTileIcons > * {
    border: none;
    border-radius: 6px 0 0!important;
    box-shadow: -1px -1px 0 0 hsla(0, 0%, 40%, 0.3)!important;
}
.SGPP__gridView {
    margin: 5px -5px!important;
}
.SGPP_EntryComm_comment > i.fa.fa-check, .SGPP_EntryComm_comment > i.fa.fa-times {
    font-size: 0.8em;
}
.SGPP_EntryComm_comment > i.fa.fa-check {
    color: #80bf40;
}
.SGPP_EntryComm_comment > i.fa.fa-times {
    color: rgba(246, 85, 85, 0.9);
}
.SGPP_EntryComm_comment .fa-comment-o {
    font: 16px/1.7 FontAwesome;
}
.SGPP_EntryComm_comment {
    vertical-align: middle;
    margin-top: -25px;
}
.endless_badge_new, .endless_badge_new_child {
    background-color: hsl(0, 60%, 30%)!important;
    box-shadow: 0 0 1px 0 #000;
    color: #B8B8B8!important;
    padding: 1px 3px 1px 2px!important;
    text-shadow: var(--SGSP-ts-50)!important;
}
.message-filter i {
    width: 13px;
    margin-top: -2px;
}
#esc_reply_header {
    margin-bottom: 8px;
}
.SGPP__Module:before, .SGPP__optionTitle:before {
    color: hsl(60, 2%, 79%);
}
.SGPP__settings-checkbox.form__checkbox:not(:hover) {
    color: var(--SGSP-link-txt-color)!important;
    text-shadow: var(--SGSP-ts-54);
}
.SGPP__settings-checkbox.form__checkbox:hover, input:checked + label:before {
    color: #80bf40;
}
input:checked + label:hover:before, input:checked + .SGPP__settings-checkbox.form__checkbox:hover {
    color: rgba(246, 85, 85, 0.9);
}
label.SGPP__settings-checkbox:before {
    margin-top: 1px;
    padding-right: 4px;
}
.SGPP__settings-checkbox > .fa-circle-o, .SGPP__settings-checkbox > .fa-circle, .SGPP__settings-checkbox > .fa-check-circle, label.SGPP__settings-checkbox {
    margin-top: -3px;
    padding-right: 4px;
}
.SGPP_UserInfo_balloon .SGPP_UserOnline {
    background: none!important;
    box-shadow: 3px 3px 4px hsl(96, 100%, 50%) inset, -3px -3px 4px hsl(96, 100%, 50%) inset, 0 0 6px 2px hsl(96, 100%, 50%)!important;
}
.SGPP_UserInfo_balloon .global__image-inner-wrap {
    filter: brightness(1);
}
.SGPP_UserInfo_balloon .SGPP_UserOnline .global__image-inner-wrap, .page_inner_wrap .search_trades {
    box-shadow: none;
}
.SGPP_UserInfo_balloon .global__image-outer-wrap {
    box-sizing: content-box!important;
    margin: 7px 10px 0 0!important;
    height: 48px!important;
    width: 48px!important;
}
.SGPP_UserInfo_balloon .SGPP_UserOffline {
    filter: sepia(1);
}
.SGPP_UserInfo_balloon .global__image-outer-wrap--avatar-large[style*="border-color"].SGPP_UserOffline {
    background: none!important;
}
.SGPP_UserInfo_balloon .sidebar__shortcut-inner-wrap > *:not(.is-disabled):active {
    background-image: linear-gradient(hsl(0, 0%, 23%) 0%, hsl(0, 0%, 20%) 100%);
    border-color: hsla(0, 0%, 0%, 0.75) hsla(0, 0%, 51%, 0.5) hsla(0, 0%, 51%, 0.5) hsla(0, 0%, 0%, 0.75);
    box-shadow: 2px 2px 2px hsla(0, 0%, 5%, 0.5) inset, 7px 7px 7px hsla(0, 0%, 10%, 0.5) inset, 1px 1px 0 hsla(0, 0%, 55%, 0.05);
    color: hsla(0, 0%, 53%, 0.67);
}
.SGPP_UserInfo_balloon .sidebar__shortcut-inner-wrap > * {
    border: 1px solid #000!important;
    padding: 1px 0 2px;
    text-shadow: var(--SGSP-ts-55)!important;
}
.SGPP_UserInfo_balloon .featured__outer-wrap.featured__outer-wrap--user {
    border-radius: 6px;
    box-shadow: none;
    top: 0;
}
.SGPP_UserInfo_balloon {
    background-color: var(--SGSP-body-bg-color);
    border: solid 1px #000!important;
    border-radius: 8px!important;
    box-shadow: hsla(0, 0%, 0%, 0.8) 0 -1px 20px 0, hsla(0, 0%, 0%, 0.8) 0 5px 15px inset, hsla(0, 0%, 0%, 0.8) 1px 3px 3px, hsla(0, 0%, 0%, 0.8) 1px 1px 0;
    margin: 2px 2px 0;
    padding: 10px 0;
    z-index: 100001;
}
.SGPP_UserInfo_balloon:after {
    border-color: transparent var(--SGSP-body-bg-color)!important;
    top: 8px!important;
    filter: drop-shadow(-1px 0 0 #000);
}
.SGPP_UserInfo_balloon.right:after {
    filter: drop-shadow(1px 0 0 #000);
}
.SGPP_UserInfo_balloon .sidebar__shortcut-inner-wrap {
    margin-top: 3px;
}
.SGPP_UserInfo_balloon .featured__table a + span {
    color: hsl(0, 76%, 60%)!important;
}
.SGPP__userTag {
    border: 1px solid #000;
}
.SGPP__popup_giveaway {
    background-color: var(--SGSP-body-bg-color);
    border: 1px solid hsla(0, 0%, 0%, 0.5);
    box-shadow: 0 0 10px 3px hsla(0, 0%, 0%, 0.8)!important;
    border-radius: 4px;
    min-width: 900px;
    text-align: inherit;
    z-index: 100000!important;
}
.SGPP__popup_giveaway .page__outer-wrap {
    background: transparent;
    border-top: none;
    box-shadow: none;
    padding: 10px 15px 8px!important;
}
.SGPP__popup_giveaway .featured__outer-wrap form {
    float: left;
    height: 34px;
    margin: 5px 5px 0 0;
}
.SGPP__popup_giveaway .featured__outer-wrap--giveaway {
    box-shadow: 0 0 6px 2px hsla(0, 0%, 0%, 0.8);
    margin-bottom: 15px;
}
.SGPP__popup_giveaway .global__image-outer-wrap--game-large:first-of-type {
    height: 136px;
    width: 292px;
}
.SGPP__popup_giveaway .sidebar__entry-loading, .SGPP__popup_giveaway .sidebar__error, .SGPP__popup_giveaway .sidebar__entry-insert, .SGPP__popup_giveaway .sidebar__entry-delete {
    width: 200px;
}
.SGPP__popup_giveaway .sidebar__error, #load_games {
    margin-top: 5px;
}
.SGPP__popup_giveaway .comment__parent {
    max-width: 100%;
    padding: 10px!important;
}
.SGPP__popup_giveaway .featured__heading__medium {
    font: 600 18px "Open Sans", sans-serif;
    letter-spacing: -0.04em;
}
.SGPP__popup_giveaway .featured__heading__small {
    color: inherit;
    font: 300 13px "Open Sans", sans-serif;
    letter-spacing: -0.7px;
}
.SGPP__popup_giveaway .featured__heading > *:not(:first-child) {
    margin-left: 7px;
}
.endless_badge_new + .markcomments_controls > .markcomments_forget {
    font-size: 12px;
    margin-bottom: -3px;
}
.markcomments_forget {
    font-size: 12px;
}
.markcomments_controls.pull-right {
    float: none;
    margin-left: 1px;
}
.comment.comment--submit.message_filter_visible > .comment__parent > .comment__summary, .comment.comment--submit > .comment__parent > .comment__summary {
    margin-top: 0!important;
    padding-top: 4px!important;
}
#sidebar_sgpp_filters {
    margin-top: 28px;
    padding: 0!important;
}
#sidebar_sgpp_filters > h3 {
    position: relative;
    top: -29px;
    font-size: 12px!important;
}
#sidebar_sgpp_filters .filter_row {
    color: var(--SGSP-sidebar-link-txt-color);
    cursor: pointer;
    padding: 2px 0 2px 15px!important;
    position: relative;
    top: -13px;
}
.forms__rows .page__heading__breadcrumbs {
    border-radius: 0;
    width: 100%;
    margin: 0 -20px;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid;
    border-color: var(--SGSP-pageheading-border-color);
}
.forms__rows .page__heading:first-of-type > .page__heading__breadcrumbs {
    margin-top: -1px;
    border-top-left-radius: 3px!important;
    border-top-right-radius: 3px!important;
}
.comments__entity + .comments {
    box-shadow: none;
    border-radius: 0 0 4px 4px;
    margin-top: -1px;
}
.esgst-gv-view.pinned-giveaways__inner-wrap--minimized {
    max-height: 142px;
    overflow: hidden;
    padding-bottom: 15px!important;
}
.esgst-gv-view.pinned-giveaways__inner-wrap--minimized .giveaway__row-outer-wrap:not(.esgst-hidden) {
    display: inline-block!important;
}
.esgst-gv-view.pinned-giveaways__inner-wrap .giveaway__row-outer-wrap {
    margin-bottom: 4px!important;
    margin-top: 4px!important;
}
.esgst-gv-view.pinned-giveaways__inner-wrap:not(.pinned-giveaways__inner-wrap--minimized) {
    min-height: 89px;
    padding-bottom: 3px!important;
}
@media screen and (max-width: 1280px) {
    nav {
        padding: 0 20px;
    }
    .nav__button, .nav__button-container--notification .nav__button {
        padding: 0 8px!important;
        white-space: nowrap;
    }
    .featured__outer-wrap .global__image-outer-wrap--game-xlarge, .featured__outer-wrap .global__image-outer-wrap--game-large, .featured__outer-wrap .global__image-outer-wrap--avatar-large {
        margin-right: 15px;
    }
    .giveaway__icon, .giveaway__icon .fa, .giveaway__columns:not(.esgst-gv-icons) .fa, .giveaway__heading .fa, .fa-comment:not(.esgst-popup-icon), .fa-tag:not(.esgst-popup-icon) {
        font-size: 12px!important;
    }
    .giveaway__columns .fa-clock-o {
        margin-bottom: 1px;
    }
    .giveaway__heading__thin {
        font-size: 100%;
        white-space: nowrap;
    }
    .giveaway__heading__name:not(.tile_view_header) {
        font-size: 15px;
        margin-bottom: 2px;
    }
    .giveaway__chance {
        font-size: 10px;
    }
    .giveaway__columns:not(.esgst-gv-icons) > * {
        line-height: 22px;
        padding: 0 4px;
        white-space: nowrap;
        overflow: hidden;
    }
    .esgst-gp-button, .esgst-elgb-button, .giveaway__columns .esgst-button-set > * {
        line-height: 22px!important;
        padding: 0!important;
    }
    .giveaway__summary + .global__image-outer-wrap--avatar-small {
        padding: 3px;
        margin-right: 5px;
    }
    .global__image-outer-wrap--game-medium {
        padding: 4px;
    }
    .giveaway__heading__name font[color] {
        font-size: 10px;
    }
    .featured__action-button .fa {
        margin-bottom: 2px;
    }
    .mt-more-like-this.sidebar__entry-loading {
        line-height: 22px!important;
        height: inherit!important;
        padding: 0 2px!important;
    }
    .mt-more-like-this.sidebar__entry-loading i {
        font-size: 11px;
    }
    .tab-links a {
        font-size: 13px!important;
    }
    .cmGame:not(.legend) {
        font-size: 14px!important;
    }
}
@media screen and (max-width: 1130px) {
    .tab-links a {
        font-size: 11px!important;
    }
}
@media screen and (max-width: 1024px) {
    nav {
        padding: 0 15px;
    }
    .nav__right-container {
        margin-left: 5px;
    }
    .featured__outer-wrap {
        padding: 15px 0;
    }
    .featured__inner-wrap {
        padding: 0 15px;
    }
    .featured__outer-wrap .global__image-outer-wrap--game-xlarge img {
        max-width: 275px;
        min-width: 275px;
        min-height: 128px;
    }
    .giveaway__heading__name:not(.tile_view_header) {
        font-size: 12px;
    }
    .giveaway__row-outer-wrap {
        padding: 6px 0;
    }
    .table__column__heading {
        font-size: 12px;
    }
    .table__row-outer-wrap {
        font-size: 10px;
    }
    .giveaway__heading .mt-more-like-this {
        display: block!important;
    }
    .giveaway__columns .mt-more-like-this {
        display: none!important;
    }
}
.nav__row .fa {
    font-size: 28px!important;
}
.dropdown_btn .fa {
    font-size: 24px!important;
}
.global__image-outer-wrap--game-large img {
    min-width: 292px;
    min-height: 136px;
}
#content .global__image-outer-wrap--game-large img {
    min-width: 150px;
    min-height: 70px;
}
.widget-container > div:not(:first-child)[style*="230px"] {
    margin-left: 231px!important;
}
.esgst-fs, .esgst-fh, .nav__left-container, .nav__right-container, #footer, footer {
    will-change: transform;
}
.esgst-fh, .nav__left-container, .nav__right-container, .esgst-qgs-container {
    z-index: 1000!important;
}
.sidebar__mpu.esgst-hidden + .sidebar__search-container {
    margin-top: 0!important;
}
.table__row-outer-wrap:hover .table__row-inner-wrap:hover .table__column--width-fill[style*="opacity"] {
    opacity: 0.8!important;
}
.esgst-adots.widget-container--margin-top {
    margin-bottom: 0px ;
}
.esgst-gv-view {
    padding: 5px 0!important;
}
.esgst-popup .esgst-gv-view {
    margin: 10px 4px!important;
    padding: 10px 5px!important;
}
.esgst-giveaway-panel.giveaway__columns {
    margin: 5px 0 -4px!important;
}
.esgst-gv-container {
    background: linear-gradient(#0d0d09 0%, #0d0d09 100%)!important;
    border-radius: 4px;
    padding: 0!important;
}
.esgst-popup .popup__keys__list .esgst-ggl-member, .esgst-dh-highlighted, .esgst-dh-highlighted.table__row-outer-wrap, .esgst-green-highlight {
    background-color: var(--esgst-discussion-highlight-bg-color)!important;
}
.table .esgst-gh-highlight {
    background-color: var(--esgst-group-highlight-bg-color)!important;
}
.popup__keys__list .esgst-ggl-member {
    color: var(--SGSP-general-txt-color)!important;
}
.esgst-ged-icon {
    border: none!important;
    text-shadow: var(--SGSP-ts-46)!important;
}
.giveaway__column--width-fill.text-right .fa {
    margin: 0 -5px 0 5px;
}
.esgst-popup-scrollable > .table:not(.esgst-text-left) {
    width: calc(100% - 35px);
    margin-right: auto;
}
.esgst-ugd-lists .esgst-ugd-table .table__column--width-small {
    max-width: 120px;
}
.esgst-ugd-lists .esgst-ugd-table .table__column--width-fill:first-of-type {
    max-width: 250px;
}
.esgst-ugd-lists .esgst-ugd-table .table__row-inner-wrap .table__column--width-fill:not(:first-of-type) {
    display: flex;
    flex-wrap: wrap;
}
.esgst-ugd-lists .esgst-ugd-table .table__row-inner-wrap .table__column--width-fill:not(:first-of-type) > span {
    line-height: 16px;
    margin-right: 10px;
}
.esgst-ugd-lists .esgst-ugd-table .table__row-inner-wrap .table__column--width-fill:not(:first-of-type) > span .esgst-tag-button {
    display: inline-flex;
}
.esgst-ugd-table .table__column--width-small {
    min-width: 0;
    width: 16%;
}
.esgst-popup-title {
    font-weight: 900;
    text-shadow: var(--SGSP-ts-48);
}
.GDCBPButton {
    width: 29px;
}
.esgst-sgpb-button img, .page__inner-wrap--narrow img[src*="favicon"], .page__inner-wrap--narrow img[src*="dropbox"], .page__inner-wrap--narrow img[src*="data"] {
    filter: grayscale(1) invert(0.8) brightness(70%);
}
.nav__button-container:not(.nav__button-container--notification):not(.nav_btn_container), .nav__left-container .nav__button-container.nav_btn_container {
    background-image: none;
    box-shadow: 0 0 0 1px hsl(0, 0%, 0%);
}
.nav__sits {
    border: none!important;
}
.featured__heading {
    height: 33px;
}
.SGPP_UserInfo_balloon .featured__heading {
    height: 60px;
}
.ui-slider-horizontal {
    background: hsla(0, 0%, 100%, 0.05);
    border-radius: 8px;
    border: 1px solid!important;
    border-color: hsla(0, 0%, 0%, 0.8) hsla(0, 0%, 55%, 0.12) hsla(0, 0%, 55%, 0.12) hsla(0, 0%, 0%, 0.8)!important;
    box-shadow: 2px 2px 2px hsla(0, 0%, 0%, 0.25) inset, 7px 7px 10px hsla(0, 0%, 5%, 0.2) inset!important;
}
.ui-slider-horizontal .ui-slider-handle {
    box-shadow: none;
}
.table__column__secondary-link + .CTPanel a {
    opacity: 0.5;
}
.table__column__secondary-link + .CTPanel a:hover {
    filter: brightness(1.7);
    opacity: 0.5!important;
}
.rating_checkbox, .form_list_item_uncheck {
    color: hsl(0, 0%, 40%);
}
.page__heading.esgst-es-page-heading {
    margin-top: 15px!important;
}
.esgst-gc-panel .esgst-gc-rating i {
    color: inherit!important;
    text-shadow: var(--SGSP-ts-47);
}
.esgst-gc-panel .esgst-gc-rating {
    text-shadow: var(--SGSP-ts-2)!important;
}
.esgst-gc-panel .esgst-gc-rating-positive, .esgst-gc-panel .esgst-gc-rating[data-bgcolor*="#66c0f4"], .giveaway__summary *:not(.giveaway__columns) .esgst-gc-rating[data-bgcolor*="#66c0f4"], .esgst-gv-view .esgst-gc-rating[data-bgcolor*="#66c0f4"] {
    background-color: #46721c!important;
    color: hsl(94, 46%, 80%)!important;
}
.esgst-gc-panel .esgst-gc-rating[data-bgcolor*="#a34c25"], .giveaway__summary *:not(.giveaway__columns) .esgst-gc-rating[data-bgcolor*="#a34c25"], .esgst-gv-view .esgst-gc-rating[data-bgcolor*="#a34c25"] {
    background-color: #882828!important;
    color: hsl(0, 68%, 80%)!important;
}
.esgst-gc-panel .esgst-gc-rating[data-bgcolor*="#b9a074"], .giveaway__summary *:not(.giveaway__columns) .esgst-gc-rating[data-bgcolor*="#b9a074"], .esgst-gv-view .esgst-gc-rating[data-bgcolor*="#b9a074"] {
    background-color: hsl(62, 49%, 32%)!important;
    color: hsla(63, 60%, 80%, 0.9)!important;
}
.esgst-gc.giveaway__column {
    background-image: linear-gradient(hsla(0, 0%, 100%, 0.06) 0%, hsla(0, 0%, 45%, 0.06) 100%);
    border-color: hsla(0, 0%, 0%, 0.7)!important;
    box-shadow: 1px 1px 0 hsla(60, 1%, 27%, 0.25) inset!important;
}
.esgst-gc-rating.giveaway__column {
    color: var(--SGSP-secondary-txt-color);
}
.esgst-gc-rating i[style*="rgb(102, 192, 244)"] {
    color: #46721c!important;
}
.esgst-gc-rating i[style*="rgb(163, 76, 37)"] {
    color: #882828!important;
}
.esgst-gc-rating i[style*="rgb(185, 160, 116)"] {
    color: hsl(62, 49%, 32%)!important;
}
.esgst-gc-genres.giveaway__column > .esgst-gc-genres, .esgst-gc-genres.featured__column > .esgst-gc-genres {
    background-color: unset!important;
    box-shadow: none;
    font-size: 11px;
    margin: 5px 0!important;
    text-shadow: var(--SGSP-ts-19);
}
.esgst-sm-colors-default {
    border-radius: 4px;
    cursor: pointer;
    display: inline-block;
    line-height: 12px!important;
    text-shadow: var(--SGSP-ts-18)!important;
    vertical-align: bottom;
}
.esgst-sm-colors-default + .fa-question-circle {
    margin-left: 5px;
    vertical-align: super;
}
.esgst-sm-colors-default, .esgst-sm-colors-default:active {
    margin: 2px 0;
}
.esgst-ap-popout .featured__table__row {
    height: 14px;
}
.sidebar__shortcut-inner-wrap > *[style*="opacity: 0.5"] {
    opacity: 0.2!important;
}
.comment__parent.esgst-ct-comment-read, .comment_inner.esgst-ct-comment-read {
    background-color: hsla(0, 0%, 100%, 0.03)!important;
    box-shadow: 0 0 1px hsla(0, 0%, 0%, 1), 0 0 1px hsla(0, 0%, 0%, 1), 1px 1px 0 hsla(0, 0%, 30%, .3) inset;
    border-radius: 4px;
    padding: 5px 15px 10px 5px;
}
.comment__parent.esgst-ct-comment-read:hover {
    background-color: transparent!important;
    box-shadow: none;
}
.comment__child.esgst-ct-comment-read {
    background-color: hsla(0, 0%, 100%, 0.03)!important;
}
.comment__child.esgst-ct-comment-read:hover, .comment_children .comment_outer > .comment_inner.esgst-ct-comment-read:hover {
    background-color: var(--SGSP-reply-bg-color)!important;
}
.esgst-ap-popout.esgst-popout > i, .esgst-ap-popout.esgst-popout > i + span {
    left: 15px;
    position: relative;
    top: 8px;
}
.esgst-ggl-popout.esgst-popout .fa-times-circle, .esgst-ggl-popout.esgst-popout .fa-times-circle + span {
    color: var(--SGSP-red-icons-txt-color);
}
.esgst-ggl-popout.esgst-popout i, .esgst-cl_gc-popout.esgst-popout i {
    margin: 8px;
    text-shadow: var(--SGSP-ts-69);
}
.esgst-ggl-popout.esgst-popout i + span, .esgst-cl_gc-popout.esgst-popout i + span {
    margin-right: 6px!important;
    text-shadow: var(--SGSP-ts-41);
}
.esgst-ggl-panel {
    padding: 0!important;
    margin: 5px 5px -5px 5px;
    display: flex;
    flex-wrap: wrap;
    text-shadow: var(--SGSP-ts-41);
}
.esgst-ggl-panel i {
    box-shadow: none!important;
}
.esgst-ggl-panel > * {
    padding-top: 2px;
}
.esgst-ggl-panel > *:not(.esgst-ggl-member) {
    color: var(--SGSP-secondary-txt-color);
}
.esgst-popup-description .table.esgst-text-left, .esgst-ugd-table.table, .esgst-popup-scrollable > .table:not(.esgst-text-left) {
    background-color: var(--SGSP-content-bg-color);
    border: 1px solid var(--SGSP-content-border-color);
    border-radius: 4px;
    padding: 5px 10px;
}
.esgst-popup-description .table.esgst-text-left > div .esgst-dh-highlighted .table__column--width-small {
    width: inherit;
}
.esgst-popup-description .esgst-text-left > .comment:first-of-type {
    padding: 10px 15px 5px;
}
.featured__heading .esgst-gb-button:hover > i {
    opacity: 1;
}
.featured__heading .esgst-gb-button > i {
    opacity: 0.6;
    transition: opacity 0.2s;
}
.esgst-gb-highlighted.ending .nav__button i, .esgst-gb-highlighted.started .nav__button i {
    filter: var(--SGSP-nav-button-hover-brightness) var(--SGSP-nav-button-hover-saturate);
}
.esgst-gb-highlighted.ending .nav__button i {
    color: hsl(0, 71%, 30%)!important;
}
.esgst-gb-highlighted.started .nav__button i {
    color: #80e51a!important;
}
.esgst-gb-highlighted.ending.started .nav__button i {
    color: hsl(36, 78%, 38%)!important;
}
.esgst-heading-button .fa-check:before {
    color: var(--SGSP-secondary-txt-color)!important;
}
.esgst-giveaway-panel .esgst-button-set > * {
    padding: 0 10px!important;
    min-width: 60px;
    width: auto!important;
}
.esgst-gv-icons, .esgst-popup .esgst-gv-icons {
    filter: brightness(0.8);
    position: relative;
    bottom: -1px;
}
.esgst-gv-time i {
    font-size: 10px!important;
    margin: 1px 0 0!important;
}
.table .esgst-ct-comment-read:hover, .table .esgst-ct-visited:hover {
    background-color: hsla(0, 0%, 45%, 0.08)!important;
}
.esgst-popup .giveaway__row-outer-wrap .fa-clock-o[style*="color"] {
    filter: saturate(2) opacity(0.8);
}
.esgst-popup-scrollable .table__row-outer-wrap {
    background-color: rgba(0, 0, 0, 0.15);
    border: 1px solid #000;
    border-radius: 4px;
    box-shadow: 0 1px 0 var(--SGSP-separator-light-color)!important;
    margin: 0 0 10px 0!important;
    padding: 10px!important;
    text-align: left;
}
#esgst-esRefresh .fa-spin {
    margin: 0 5px;
}
#esgst-esRefreshAll .fa-spin {
    margin: -1px;
}
#esgst-esResume .fa-play {
    margin-left: 1px;
}
#esgst-esNext .fa-spin {
    margin: 0 -3px;
}
.esgst-button-set {
    background: none!important;
    box-shadow: none!important;
}
.esgst-popup {
    background-color: var(--SGSP-body-bg-color)!important;
    box-shadow: 0 0 6px 2px hsla(0, 0%, 0%, 0.8)!important;
    border: solid 1px var(--SGSP-content-border-color);
    color: var(--SGSP-general-txt-color)!important;
    padding: 25px 65px!important;
    text-shadow: var(--SGSP-ts-42)!important;
    max-width: calc(90% - 40px);
}
.esgst-popup-description .comments__entity {
    border-radius: 4px;
    margin-top: 10px;
}
.esgst-popup-description .comment_outer, .esgst-popup-description .table.esgst-text-left, .esgst-popup-description .comments__entity + .comment__children {
    margin-bottom: 15px;
}
.esgst-popup-description .comment_outer > .comment > .comment__child {
    margin-top: 0;
}
.esgst-popup-description .comment_outer > .comment > .comment__parent {
    margin-top: -8px;
}
.esgst-popup .popup__keys__list > div {
    padding: 10px 5px;
}
.esgst-sm-colors input {
    margin: 2px 5px 2px 0;
    text-indent: 5px;
}
.esgst-gm-section .pinned-giveaways__inner-wrap, .esgst-element-ordering-box {
    background-color: hsla(0, 0%, 18%, 0.55)!important;
    border: none;
    background-image: none;
    box-shadow: 0 0 0 1px hsla(0, 0%, 0%, 0.5) inset;
}
.esgst-gm-giveaway, .esgst-element-ordering-box > * {
    background-color: hsl(0, 0%, 30%)!important;
    border: 1px solid #000!important;
    color: hsla(0, 0%, 86%, 0.9);
    opacity: 0.6;
    text-shadow: var(--SGSP-ts-41);
}
.esgst-gm-giveaway.error {
    background-color: hsla(0, 71%, 45%, 0.8)!important;
}
.esgst-gm-giveaway.success {
    background-color: var(--SGSP-green-icons-txt-color)!important;
}
.esgst-gm-giveaway.connected {
    opacity: 1;
}
.esgst-gv-icons > *:not(.esgst-button-set):not(.esgst-button-container):not(.esgst-ge-sgt-button) {
    border: none!important;
    border-radius: 5px 0 0 0!important;
    box-shadow: 0 -1px 0 0 hsla(0, 0%, 65%, 1), 1px 0 0 0 hsla(0, 0%, 58%, 1), 0 1px 0 0 hsla(0, 0%, 37%, 1), -1px 0 0 0 hsla(0, 0%, 58%, 1)!important;
    line-height: 16px;
    padding: 0 4px 0 3px!important;
    text-shadow: var(--SGSP-ts-4)!important;
}
.esgst-gv-icons > *:not(:last-child), .esgst-gv-icons > *:not(:last-child) > .btn_action, .esgst-gv-icons > *:not(:last-child) > .sidebar__error, .esgst-gv-icons > .esgst-ge-sgt-button:not(:last-child) > .form__submit-button {
    border-radius: 5px 1px 4px 0!important;
}
.esgst-gv-icons > *:last-child, .esgst-gv-icons > *:last-child > .btn_action, .esgst-gv-icons > *:last-child > [data-draggable-id="elgb"], .esgst-gv-icons > *:last-child > .sidebar__error, .esgst-gv-icons > .esgst-ge-sgt-button:last-child > .form__submit-button {
    border-radius: 5px 0 2px 0!important;
}
.esgst-gv-icons > .esgst-ge-sgt-button:first-child > .form__submit-button {
    border-radius: 5px 1px 2px 0!important;
}
.esgst-ap-popout .global__image-outer-wrap--avatar-large[style*="border-color"] {
    margin: -3px 0 0!important;
}
.view_key_btn span {
    border-bottom: none;
}
.esgst-ags-panel.esgst-popout {
    background-color: var(--SGSP-body-bg-color)!important;
    background-image: linear-gradient(hsl(0, 0%, 22%) 0, hsl(0, 0%, 17%) 6px, hsl(0, 0%, 7%) 100%)!important;
    margin-top: -1px!important;
}
.nav__left-container .esgst-ags-panel.esgst-popout {
    margin-top: 0!important;
}
.esgst-ags-panel {
    max-width: 324px!important;
}
.esgst-ags-filter > * {
    width: 145px!important;
    height: 20px;
}
.esgst-ags-checkbox-filter {
    padding: 0px 14px;
}
.esgst-ns .esgst-ags-checkbox-filter {
    padding: 0px 10px;
}
.esgst-ags-checkbox-filter i {
    vertical-align: baseline;
}
.sidebar .esgst-adots {
    margin-top: -4px!important;
    max-height: 355px!important;
    max-width: 324px!important;
    min-height: 236px;
    border-top-left-radius: 0;
}
.sidebar .esgst-adots .table__row-outer-wrap:not(:last-of-type) {
    box-shadow: 0 1px 0 var(--SGSP-separator-light-color)!important;
}
.sidebar .esgst-adots .table__row-inner-wrap {
    display: flex!important;
    flex-wrap: wrap;
    justify-content: flex-end;
}
.sidebar .esgst-adots .table__column--width-fill {
    font-size: 10px;
    font-weight: 600;
    padding-right: 0;
}
.sidebar .esgst-adots .homepage_table_column_heading, .sidebar .esgst-adots .table__column__heading {
    display: unset;
    font-size: 12px!important;
    max-width: unset;
}
.sidebar .esgst-adots .table__row-inner-wrap > *:last-child {
    margin: 0 2px 0 5px!important;
}
.sidebar.esgst-ns .esgst-adots .table__row-inner-wrap > *:last-child {
    max-width: 155px
}
.esgst-oadd .table__row-inner-wrap > .table__column--width-small.text-center {
    min-width: 150px!important;
}
.sidebar .esgst-adots .table__row-inner-wrap > .table__column--width-small.text-center {
    max-width: unset;
    width: calc(100% - 5px);
}
.esgst-dh-button, .esgst-df-button {
    margin: 0 3px 0 0!important;
}
.esgst-pm-button, .esgst-ust-checkbox {
    margin: 0 2px 0 -14px!important;
}
.esgst-gv-icons .fa {
    font-size: 11.1px;
    vertical-align: baseline;
}
.esgst-panel-flexbox .esgst-giveaway-panel {
    align-items: center;
}
.esgst-panel-flexbox .giveaway__columns:not(.esgst-gv-icons) [data-draggable-id]:not([data-draggable-id="gp"]):not([data-draggable-id="elgb"]):not([data-draggable-id="level"]):not([data-draggable-id="ut"]) {
    background-image: var(--SGSP-giveaway-columns-bg-color);
    border-color: var(--SGSP-giveaway-columns-border-color);
    box-shadow: 1px 1px 0 var(--SGSP-giveaway-columns-boxshadow-color) inset;
    color: var(--SGSP-secondary-txt-color);
}
.esgst-popup .global__image-outer-wrap:not(.is_icon) {
    padding: 0!important;
}
.esgst-gv-popout, .esgst-popup .esgst-gv-popout.global__image-outer-wrap, .esgst-cl_gc-popout, .esgst-ggl-popout, .esgst-cl_ge-popout {
    background-color: var(--SGSP-grid-popout-bg-color);
    border: none!important;
    box-shadow: 0 0 0 1px var(--SGSP-grid-popout-border-color);
}
.esgst-cl_gc-popout, .esgst-ggl-popout, .esgst-cl_ge-popout {
    display: flex;
    flex-direction: column;
    padding: 0!important;
}
.esgst-cl_gc-popout .table, .esgst-ggl-popout .table, .esgst-cl_ge-popout .table, .footer_lower {
    border-top: 1px solid var(--SGSP-separator-light-color);
    box-shadow: 0 -1px 0 var(--SGSP-separator-dark-color);
}
.esgst-cl_gc-popout .table__row-inner-wrap, .esgst-ggl-popout .table__row-inner-wrap, .esgst-cl_ge-popout .table__row-inner-wrap {
    padding: 0 5px;
}
.esgst-gv-popout, .esgst-popup .esgst-gv-popout.global__image-outer-wrap {
    padding: 3px 5px 8px 5px!important;
}
.esgst-gv-popout[style*="margin-top: 1px;"] {
    margin-top: 0!important;
}
.esgst-gv-popout .giveaway__heading {
    display: flex!important;
    padding: 0 0 5px;
}
.giveaway__row-inner-wrap:hover .esgst-gv-popout .giveaway__heading__name {
    filter: brightness(1)!important;
}
.giveaway__row-inner-wrap:hover .esgst-gv-popout .giveaway__heading__name:hover {
    filter: brightness(1.2)!important;
}
.esgst-gv-popout .esgst-giveaway-links [data-draggable-id="egh"]:hover, .esgst-gv-popout .esgst-giveaway-links [data-draggable-id="elgb"]:hover, .esgst-gv-popout .esgst-giveaway-links [data-draggable-id="search"]:hover, .esgst-gv-popout [data-draggable-id="ut"]:hover, .esgst-gv-popout .esgst-giveaway-links [data-draggable-id="gt"]:hover, .esgst-gv-popout .esgst-giveaway-links [data-draggable-id="gf"]:hover, .esgst-gv-popout .esgst-giveaway-links [data-draggable-id="hideGame"]:hover, .esgst-gv-popout .giveaway__heading .esgst-egh-button:hover, .esgst-gv-popout .giveaway__heading .esgst-gb-button:hover, .esgst-gv-popout .giveaway__heading .esgst-tag-button:hover, .esgst-gv-popout .giveaway__heading .esgst-gf-hide-button:hover, .esgst-gv-popout .giveaway__heading .giveaway__icon:hover, .esgst-gv-popout .esgst-giveaway-links .esgst-gb-button:hover, .esgst-gv-popout .esgst-giveaway-links .esgst-tag-button:hover, .esgst-gv-popout .esgst-giveaway-links .esgst-gf-hide-button:hover, .esgst-gv-popout .esgst-giveaway-links .giveaway__icon:hover {
    filter: brightness(1.4)!important;
}
.esgst-gc-panel {
    margin: 0 0 2px 0!important;
    color: var(--SGSP-general-txt-color);
}
.esgst-gv-popout .esgst-giveaway-links {
    float: none!important;
}
.esgst-gv-popout .esgst-giveaway-panel {
    background-color: var(--esgst-inner-panel-bg-color);
    border: 1px solid var(--esgst-inner-panel-border-color);
    border-radius: 4px;
    display: flex;
    flex-wrap: wrap;
    float: none!important;
    margin: 5px 0 0 0!important;
    max-width: 166px;
    overflow-x: hidden;
    padding: 3px!important;
    width: auto;
}
.esgst-gv-popout .esgst-giveaway-panel > * {
    margin: 2px!important;
}
.esgst-gv-popout .esgst-gwc, .esgst-gv-popout .esgst-gwr, .esgst-gv-popout .esgst-gptw, .esgst-gv-popout .esgst-ttec {
    background-image: linear-gradient(rgba(52, 50, 50, 0.1) 0, rgba(0, 0, 0, 0.1) 100%);
    border: 1px solid;
    border-color: var(--SGSP-giveaway-columns-border-color);
    color: var(--SGSP-secondary-txt-color);
    box-shadow: 1px 1px 0 hsla(60, 1%, 33%, 0.25) inset;
    padding: 0 8px!important;
    width: 57px!important;
}
.esgst-gv-popout .esgst-ggl-panel {
    background-color: var(--esgst-inner-panel-bg-color);
    border: 1px solid var(--esgst-inner-panel-border-color);
    border-radius: 4px;
    margin: 3px 0 0;
    padding: 8px 5px!important;
}
.esgst-gv-popout .giveaway__columns:not(.esgst-giveaway-panel) > *:not(.giveaway__column--group):not(.giveaway__column--whitelist):not(.giveaway__column--invite-only):not(.giveaway__column--community-voted):not(.giveaway__column--contributor-level):not(.giveaway__column--region-restricted):not(form):not(.mt-more-like-this):not(.esgst-elgb-button):not(.giveaway__column--new):not(.giveaway__column--wish) {
    border: none;
    background: none!important;
    box-shadow: none!important;
}
.esgst-gv-popout .GPLinks, .esgst-gv-popout .esgst-giveaway-panel, .esgst-gv-popout .giveaway__columns, .esgst-gv-popout .text-right, .esgst-gv-popout .giveaway__heading, .esgst-gv-popout .giveaway__columns:not(.esgst-giveaway-panel):not(.esgst-gv-icons) > * {
    justify-content: center!important;
    text-align: center!important;
}
.esgst-gv-popout .giveaway_image_avatar, .esgst-gv-popout .featured_giveaway_image_avatar {
    display: block!important;
    margin-top: 3px;
    height: 28px;
    width: 28px;
    position: absolute;
    right: 2px!important;
}
.esgst-gv-creator, .esgst-gv-popout .giveaway__links {
    line-height: 16px;
    margin: 0!important;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 137px;
}
.esgst-gv-creator .esgst-user-icon {
    margin: 0 3px 0 0;
}
.esgst-popup .giveaway__column--width-fill span[data-timestamp] + a {
    margin-left: 5px;
}
.esgst-popup .giveaway__heading__name.giveaway__icon {
    opacity: initial;
}
.esgst-gv-container .giveaway__icon {
    line-height: 16px;
    text-shadow: var(--SGSP-ts-6);
}
.esgst-gv-popout .giveaway__links i {
    text-shadow: var(--SGSP-ts-60);
}
.esgst-wbc-button i:not(:last-child), .esgst-namwc-button i:not(:last-child), .esgst-nrf-button i:not(:last-child) {
    margin-right: 3px;
}
.esgst-popup-description .esgst-text-left:not(.esgst-gf-filters):not(.esgst-gv-view), .esgst-popup-scrollable > .esgst-settings-menu, .esgst-popup .esgst-popup-scrollable .esgst-gf-container + .esgst-text-left.esgst-gv-view {
    margin-right: 15px!important;
}
.esgst-ct-count {
    color: hsla(0, 50%, 50%, 0.95);
}
.esgst-toggle-switch-slider {
    background-color: var(--SGSP-input-bg-color)!important;
    box-shadow: 0 0 0 1px #000;
}
.esgst-toggle-switch-slider:before {
    background-image: linear-gradient(to bottom, hsl(0, 0%, 20%) 40%, hsl(0, 0%, 9%))!important;
    background-color: unset;
    filter: drop-shadow(0 0 1px hsl(0, 0%, 65%));
}
input:checked + .esgst-toggle-switch-slider {
    background-color: var(--SGSP-green-icons-txt-color)!important;
}
.esgst-toggle-switch-container:not(.inline) {
    margin: 3px!important;
}
.esgst-last-sync {
    will-change: transform;
}
.esgst-uh-title, .esgst-uh-list {
    color: hsla(0, 0%, 75%, 0.95)!important;
}
.esgst-ggl-panel .table_image_avatar {
    margin-right: 3px;
}
.esgst-ggl-panel a + a:not(.esgst-tag-button) {
    box-shadow: 0 1px 0 rgba(128, 141, 157, 0.3)!important;
    border-bottom: 1px dotted;
    border-color: rgba(128, 141, 157, 0.6);
}
.esgst-ggl-panel .esgst-ggl-member a + a:not(.esgst-tag-button){
    border-color: var(--SGSP-link-txt-color)!important;
    box-shadow: 0 1px 0 hsl(0, 0%, 24%)!important;
}
.esgst-ggl-panel .fa-user {
    color: rgba(128, 191, 64, 0.9)!important;
    text-shadow: var(--SGSP-ts-4)!important;
}
.esgst-gv-popout .esgst-ggl-panel .fa-user {
    margin: -5px 0 5px 0;
    width: 100%;
}
.esgst-gv-popout .esgst-ggl-panel .fa-user:after {
    content: "Groups";
    font: 11px Arial, sans-serif;
    font-weight: 600;
    margin-left: 5px;
}
.esgst-popout li:before {
    margin-left: -20px;
    position: absolute;
    width: 10px;
    text-align: right;
}
.esgst-popup li:before {
    margin: 0 0 0 -20px!important;
}
.esgst-header-menu-button {
    background-image: var(--SGSP-nav-button-bg-color)!important;
    border-color: hsl(215, 8%, 5%)!important;
    box-shadow: 0 0 0 1px hsl(0, 0%, 0%), 1px 1px 1px rgba(255, 255, 255, 0.12) inset, 1px 1px 0 rgba(255, 255, 255, 0.07) inset!important;
    color: var(--SGSP-nav-txt-color)!important;
    opacity: 1!important;
    padding: 0 10px!important;
    text-shadow: var(--SGSP-ts-62)!important;
    transition: filter 0.35s ease-in!important;
    will-change: filter;
}
.esgst-header-menu-row {
    background-image: var(--SGSP-nav-dropdown-bg-color)!important;
    border-radius: 0!important;
    text-shadow: var(--SGSP-ts-66)!important;
}
.esgst-header-menu-name {
    color: var(--SGSP-sidebar-link-txt-color);
    filter: brightness(1.15);
}
.esgst-header-menu-description {
    color: hsl(213, 28%, 68%)!important;
}
.esgst-header-menu-row:hover {
    background-color: transparent!important;
}
.esgst-header-menu-row:not(.esgst-version-row):hover {
    background-image: var(--SGSP-nav-dropdown-hover-bg-color)!important;
    filter: saturate(0.7) contrast(1.15);
}
.esgst-header-menu-row:not(.esgst-version-row):hover .esgst-header-menu-description {
    color: hsl(0, 0%, 60%)!important;
}
.esgst-popup-description .esgst-description {
    color: inherit!important;
    font-size: 100%;
    font-style: normal;
}
.esgst-progress-bar {
    margin: 5px!important;
}
.esgst-progress-bar .ui-progressbar-value {
    margin: 0!important;
}
.popup_summary + .esgst-popup-description > .esgst-toggle-switch-container span {
    margin-right: 5px;
    margin-left: 5px;
}
.popup_summary + .esgst-popup-description > .esgst-toggle-switch-container {
    display: flex;
    margin: 5px!important;
}
.popup_summary + .esgst-popup-description > .esgst-button-set {
    margin: 10px;
}
.pinned-giveaways__inner-wrap.esgst-pgb-container {
    border-radius: 4px 4px 0 0!important;
}
.esgst-pgb-button, .esgst-gf-button {
    background-color: var(--SGSP-body-bg-color);
    background-image: var(--SGSP-pinned-bg-color)!important;
    border-color: var(--SGSP-pinned-border-color)!important;
    margin-bottom: 8px;
    padding: 3px 25px!important;
    will-change: transform!important;
}
.esgst-popup .featured_giveaway_image_avatar {
    margin-left: 0;
}
.block_header, .patreon_hero_step_name {
    background-image: var(--SGSP-pageheading-bg-color);
    border: 1px solid;
    border-color: var(--SGSP-pageheading-border-color);
    border-radius: 4px;
    color: var(--SGSP-nav-txt-color)!important;
    padding: 5px 15px;
    text-shadow: var(--SGSP-ts-31)!important;
}
.block_header + .poll, .block_header + .table {
    border-radius: 4px;
    margin-bottom: 8px;
    padding: 0 10px;
}
.block_header + .poll .table__heading {
    margin: 0 -10px 5px;
}
.homepage_table_column_heading {
    color: hsla(0, 0%, 75%, 0.8)!important;
}
.esgst-adots h3 a:visited {
    color: var(--SGSP-visited-txt-color)!important;
}
.esgst-adots .table__row-outer-wrap {
    padding: 10px 0!important;
}
.esgst-adots .esgst-dh-highlighted, .esgst-dh-highlighted.table__row-outer-wrap, .table__row-outer-wrap.esgst-relative {
    padding: 10px 5px!important;
}
.esgst-adots-tab-heading {
    background-image: linear-gradient(hsl(207, 10%, 22%) 0%, hsl(206, 10%, 14%) 100%)!important;
    box-shadow: 0 -1px 0 0 var(--SGSP-sidebar-border-color), 1px 0 0 0 var(--SGSP-sidebar-border-color), -1px 0 0 0 var(--SGSP-sidebar-border-color), 1px 1px 0 hsla(0, 0%, 100%, 0.04) inset;
    color: hsla(0, 0%, 80%, 0.9)!important;
    margin: 3px 2px 1px 1px;
    text-shadow: var(--SGSP-ts-31)!important;
}
.esgst-adots-tab-heading + .sidebar__navigation__item__name {
    margin: 10px 8px 0;
}
.esgst-gv-icons [data-draggable-id] {
    background-image: linear-gradient(hsl(0, 0%, 38%) 0%, hsl(0, 0%, 33%) 100%);
    background-color: hsl(0, 0%, 35%);
    color: hsl(210, 6%, 78%);
    margin: 0!important;
    min-height: unset;
    opacity: 1;
}
.esgst-gv-icons .giveaway__column--invite-only, .esgst-gv-icons .giveaway__column--region-restricted {
    background-image: linear-gradient(hsl(0, 0%, 61%) 0%, #808080 50%, hsl(0, 0%, 31%) 100%);
}
.esgst-gv-icons .esgst-gv-time {
    background-image: linear-gradient(hsl(0, 0%, 41%) 0%, hsl(0, 0%, 22%) 100%)!important;
    color: hsl(210, 6%, 78%)!important;
    padding: 0 4px 0 3px!important;
}
.esgst-gv-box .esgst-gv-icons .esgst-ged-source {
    background-image: linear-gradient(hsl(208, 24%, 35%) 0%, hsl(208, 16%, 25%) 100%)!important;
    color: hsl(210, 6%, 78%)!important;
    letter-spacing: 1ch;
    max-width: 8px;
    padding: 0 6px 0 3px!important;
}
.esgst-gv-icons .giveaway__column--invite-only, .esgst-gv-icons .giveaway__column--group {
    padding: 0 5px 0 4px!important;
}
.esgst-gv-icons .giveaway__column--whitelist {
    background-image: var(--SGSP-whitelist-bg-color);
}
.esgst-gv-box .esgst-gv-icons .giveaway__column--contributor-level {
    padding: 0 3px!important;
}
.esgst-gv-icons .giveaway__column--region-restricted {
    padding: 0 3px 0 2px!important;
}
.esgst-gv-icons .giveaway__column--region-restricted .fa, .esgst-gv-icons .giveaway__column--invite-only .fa, .esgst-gv-icons .giveaway__column--group .fa, .esgst-gv-icons .giveaway__column--whitelist .fa {
    font-size: 10px!important;
}
.esgst-gm-section .esgst-button-set {
    margin-left: 0;
}
.giveaway__columns:not(.esgst-gv-icons) .esgst-ged-source {
    background-color: transparent!important;
    background-image: linear-gradient(hsla(208, 24%, 26%, 0.6) 0%, hsla(208, 16%, 18%, 0.6) 100%)!important;
    padding: 0 8px!important;
}
.esgst-popup-scrollable, .esgst-tab-menu > .esgst-page-heading {
    margin-bottom: 10px;
}
.esgst-popup li {
    display: table;
    margin: 6px 0;
    vertical-align: text-top;
}
.esgst-popup li i {
    vertical-align: text-top;
}
.esgst-popup li .fa {
    margin: 0 5px;
}
.esgst-popup .popup__actions > * {
    margin: 5px;
}
.esgst-ib-user, .esgst-ib-game {
    border: none!important;
}
.giveaway__row-outer-wrap .esgst-ib-game {
    background-position: center;
    height: 81px!important;
    width: 196px!important;
}
.esgst-ib-game ~ .esgst-gv-icons > *:last-child, .esgst-ib-game ~ .esgst-gv-icons > *:last-child > .btn_action {
    border-radius: 5px 0 4px 0!important;
}
.table__row-outer-wrap .esgst-ib-game {
    height: 42px!important;
    width: 95px!important;
}
.esgst-ib-user {
    background-position: center;
    height: 42px!important;
    width: 42px!important;
}
.esgst-ib-game ~ .esgst-gv-popout {
    max-width: 186px!important;
    width: 186px!important;
}
.esgst-ib-game ~ .esgst-gv-popout [data-draggable-id="name"] {
    margin: 0 0 4px 0!important;
    width: 178px;
}
.esgst-ib-game ~ .esgst-gv-popout .esgst-giveaway-panel {
    margin-top: 9px!important;
    max-width: 178px;
    width: 178px;
}
.esgst-gv-popout .giveaway_image_avatar {
    filter: unset;
}
.esgst-gv-popout .esgst-ib-user {
    background-size: cover;
    border: 3px solid transparent!important;
    box-shadow: 0 0 0 1px hsla(0, 0%, 0%, 0.35), 0 0 0 1px hsla(0, 0%, 0%, 0.35);
    height: 31px!important;
    width: 31px!important;
    filter: var(--SGSP-grid-brightness);
}
.esgst-ge-sgt-button > .form__submit-button {
    background-color: hsl(185, 36%, 28%)!important;
    background-image: linear-gradient(hsl(185, 31%, 45%) 0%, hsl(185, 35%, 34%) 50%, hsl(185, 45%, 20%) 100%)!important;
    color: hsl(185, 50%, 80%)!important;
    padding: 0 10px!important;
}
.esgst-text-left.esgst-float-left.markdown[style*="border-right"] {
    border-right: 1px solid var(--SGSP-separator-dark-color)!important;
    box-shadow: 1px 0 0 var(--SGSP-separator-light-color);
}
.esgst-description {
    color: var(--SGSP-secondary-txt-color)!important;
}
.esgst-tag-preview > * {
    margin: 0 3px!important;
    vertical-align: bottom;
}
.esgst-tag-preview .esgst-tags {
    margin-top: 2px!important;
}
.esgst-tag, .esgst-gch-highlight {
    border: none!important;
    box-shadow: 0 0 0 1px #4b4b4b!important;
    filter: initial!important;
}
.esgst-cfh-sr-summary {
    background-color: hsla(60, 4%, 19%, 0.25);
    border: 1px solid var(--SGSP-input-bg-color);
    margin: 5px;
    border-radius: 4px;
}
.esgst-cfh-sr-summary:hover {
    background-color: var(--SGSP-input-bg-color)!important;
    border: 1px solid var(--SGSP-input-border-color);
    color: inherit!important;
}
.esgst-cfh-sr-box:not(:first-child) {
    border-top: 1px solid var(--SGSP-separator-dark-color)!important;
    box-shadow: 0 1px 0 var(--SGSP-separator-light-color) inset;
}
.esgst-gas-popout, .esgst-ds-popout, .esgst-gv-spacing, .esgst-mm-popout {
    background-image: var(--SGSP-pageheading-bg-color)!important;
    border-color: var(--SGSP-pageheading-border-color)!important;
    color: var(--SGSP-general-txt-color)!important;
    text-shadow: var(--SGSP-ts-28);
}
.esgst-lpv-container .nav__button {
    background-image: none!important;
    padding: 0 15px!important;
}
.esgst-lpv-container .nav__button--is-dropdown {
    box-shadow: 0 0 0 0 hsl(0, 0%, 0%), 1px 1px 1px rgba(255, 255, 255, 0.12) inset, 1px 1px 0 rgba(255, 255, 255, 0.07) inset!important;
}
.esgst-lpv-container .nav__button--is-dropdown-arrow:not(.nav_btn_right) {
    margin-left: 0;
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1) inset, 0 1px 0 rgba(255, 255, 255, 0.06) inset!important;
    padding: 0 10px!important;
}
.esgst-lpv-container .nav__button--is-dropdown-arrow:not(.nav_btn_right).is-selected {
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3) inset, 1px 1px 0 0 hsl(215, 8%, 5%), 0 -1px 0 0 hsl(215, 8%, 5%), 0 1px 0 rgba(255, 255, 255, 0.1) inset, 0 1px 0 rgba(255, 255, 255, 0.05) inset!important;
}
.esgst-lpv-container:not(.is-selected) {
    transition: filter 0.35s ease-in;
    will-change: filter;
}
.esgst-gas-popout select, .esgst-ds-popout select {
    margin: 8px 0;
}
.esgst-heading-button .esgst-toggle-switch-container.inline {
    height: 14px!important;
}
.esgst-gf-container .esgst-gf-box {
    background-color: transparent!important;
    background-image: var(--SGSP-pinned-bg-color);
    border: 1px solid var(--SGSP-pinned-border-color)!important;
    border-radius: 4px 4px 0 0!important;
    margin-top: 0!important;
    margin-bottom: -3px!important;
    padding: 0 5px!important;
}
.esgst-gf-button {
    border-radius: 4px!important;
    border-top: 1px solid var(--SGSP-pinned-border-color)!important;
    color: hsla(213, 19%, 63%, 0.9);
    margin-top: 0;
}
.esgst-gf-container {
    background-color: transparent!important;
    top: 47px;
}
.esgst-gf-container input, .esgst-gf-category-filter select {
    height: 18px!important;
    padding: 0 4px!important;
    width: 70px!important;
}
.esgst-gf-filter-count {
    background-color: var(--SGSP-content-inner-bg-color);
    border-radius: 4px;
    opacity: 0.7;
    box-shadow: 0 0 0 1px var(--SGSP-content-inner-border-color) inset;
    text-indent: 1px;
}
@media screen and (min-width: 1400px) {
    .esgst-gf-boolean-filters {
        column-count: 3;
    }
    .esgst-gf-basic-filters {
        grid-template-columns: max-content max-content max-content auto!important;
    }
}
@media screen and (min-width: 1600px) {
    .esgst-gf-number-filters input, .esgst-gf-string-filters input {
        width: 100px!important;
    }
    .esgst-gf-basic-filters {
        grid-template-columns: 400px max-content max-content auto!important;
    }
}
.esgst-gf-basic-filters {
    display: grid;
    grid-template-columns: max-content 275px max-content auto;
}
.esgst-gf-left-panel {
    max-height: unset;
    overflow-y: unset;
}
.esgst-gf-right-panel {
    align-self: start;
    margin: 13px 5px 5px 0;
    padding: 4px 0 10px 10px!important;
    width: 142px;
}
.esgst-gf-boolean-filters {
    column-gap: 0;
}
.esgst-gf-basic-filters + div {
    color: var(--SGSP-pageheading-txt-color);
    margin-top: 10px;
}
.esgst-gf-right-panel, .esgst-gf-legend-panel {
    background-color: var(--SGSP-content-inner-bg-color);
    border: 1px solid var(--SGSP-content-inner-border-color);
    border-radius: 4px;
    padding: 4px 10px 10px;
}
.esgst-gf-legend-panel {
    margin-top: 0;
    text-align: unset;
}
.esgst-gf-string-filters > div:not(.esgst-hidden) ~ .esgst-gf-legend-panel {
    margin-top: 10px;
}
.esgst-gf-preset-panel {
    margin: unset;
    margin-top: -10px!important;
    text-align: unset;
}
.esgst-gf-legend-panel > div:first-child, .esgst-gf-preset-panel > div:first-child {
    text-align: center;
}
.esgst-gf-category-filter, .esgst-gf-legend-panel div:not(.esgst-bold), .esgst-gf-preset-panel > * {
    margin: 3px!important;
}
.esgst-gf-preset-panel .form__input-small {
    width: 122px!important;
}
.esgst-gf-category-filter i {
    margin-right: 2px;
}
.esgst-gf-filters .esgst-bold, .esgst-gf-steamgifts-filters div:first-of-type {
    color: var(--SGSP-pageheading-txt-color);
    font-size: 14px;
    margin-bottom: 5px!important;
}
.esgst-gf-basic-filters + div .fa, .esgst-gf-filters .esgst-bold + .fa {
    color: var(--SGSP-pageheading-txt-color);
    font-size: 14px;
    vertical-align: baseline;
}
.esgst-gf-boolean-filters > *, .esgst-gf-string-filters > div:not(.esgst-gf-legend-panel) > span, .esgst-settings-menu .esgst-notification-warning {
    margin-right: 5px;
}
.esgst-gf-boolean-filters > *, .esgst-gf-string-filters > div:not(.esgst-gf-legend-panel), .esgst-gf-number-filters > * {
    margin-top: 3px;
}
.esgst-gf-number-filters span:not(.esgst-gf-filter-count) {
    margin-left: 5px;
}
.esgst-gf-basic-filters > * {
    margin-left: 0;
}
.esgst-gf-basic-filters .esgst-gf-filter-count {
    margin-right: 2px;
}
.esgst-gf-basic-filters .esgst-gf-filter-count {
    margin-right: 2px;
}
.esgst-gf-advanced-filters .btn-group.pull-right > .btn > i {
    font-size: 12px!important;
    position: relative!important;
    top: -1px!important;
}
.esgst-gf-advanced-filters .btn-group.pull-right.rule-actions > .btn-primary > i {
    font-size: 10px!important;
    top: -2px!important;
}
.esgst-gf-advanced-filters .btn-group.pull-right.rule-actions > .btn-primary[data-resume] {
    border-bottom-left-radius: 3px!important;
    border-top-left-radius: 3px!important;
}
.esgst-gf-advanced-filters.query-builder .rules-list > ::after, .esgst-gf-advanced-filters.query-builder .rules-list > ::before {
    width: 7px;
}
.esgst-gf-advanced-filters.query-builder {
    margin-right: 5px;
    max-height: 300px;
    overflow-y: auto;
}
.esgst-hidden + .esgst-gf-advanced-filters.query-builder {
    margin-top: 4px;
    max-height: 600px;
}
.esgst-popup > .popup_summary {
    display: block;
    justify-content: center;
}
.esgst-sgpb-button img {
    vertical-align: baseline!important;
}
.esgst-settings-menu .form__row__indent > div {
    padding-bottom: 3px;
}
.esgst-popup-scrollable .global__image-outer-wrap.page_heading_btn.esgst-cfh-emojis {
    background-color: var(--SGSP-input-bg-color);
    margin: 15px!important;
    min-height: 24px;
    padding: 5px!important;
}
.esgst-popup-scrollable textarea {
    border: 1px solid;
}
.esgst-button-set .btn_action {
    display: inline-block;
}
.esgst-gv-popout .giveaway__heading__thin {
    line-height: 14px;
}
.ui-tooltip-content .tooltip {
    background-image: linear-gradient(var(--SGSP-tooltip-bg-color) 0%, var(--SGSP-tooltip-bg-color) 100%);
    background-color: var(--SGSP-tooltip-bg-color);
    box-shadow: 0 0 0 1px var(--SGSP-tooltip-border-color), 2px 2px 8px 0 hsla(0, 0%, 0%, 0.8);
    color: var(--SGSP-link-txt-color)!important;
    margin: -3px;
    text-shadow: var(--SGSP-ts-71);
}
.tooltip_row:only-child {
    padding: 0 10px 0 5px;
}
.tooltip_row [style*="color: #8f96a6"] {
    color: var(--SGSP-tooltip-txt-color)!important;
}
.tooltip_row:not(:last-child) {
    border-bottom: 1px dotted var(--SGSP-tooltip-border-color);
}
.tooltip i {
    text-shadow: var(--SGSP-ts-74);
}
.ui-tooltip, .b-modal, .b-modal + .popup {
    z-index: 99999!important;
}
.form__rows > .esgst-button-set {
    margin-bottom: 20px!important;
}
.esgst-form-row-indent > div:not(.esgst-button) {
    line-height: 16px;
}
.esgst-tab-menu {
    color: var(--SGSP-general-txt-color)!important;
    text-shadow: var(--SGSP-ts-40)!important;
}
.esgst-popup-scrollable .row-spacer {
    margin-bottom: 12px;
}
.esgst-settings-menu .esgst-form-sync {
    max-width: 583px;
}
.esgst-settings-menu .esgst-steam-api-key {
    border:1px solid;
    max-width: 578px;
}
.esgst-form-heading-number {
    color: hsl(60, 2%, 64%)!important;
    font-weight: 600!important;
}
.esgst-sm-small-number {
    font-size: 11px!important;
    color: hsl(60, 2%, 56%)!important;
}
.esgst-page-heading > *:not(.esgst-sttb-button):not(.esgst-stbb-button), .page__heading__button.esgst-button, .page_heading_button.esgst-button, .page_heading_btn.esgst-button {
    background-image: var(--SGSP-pageheading-bg-color)!important;
    border-color: var(--SGSP-pageheading-border-color)!important;
    color: var(--SGSP-pageheading-txt-color)!important;
}
.page_heading_btn.esgst-button i {
    line-height: 22px;
    margin: 0;
}
.esgst-settings-menu > .esgst-button-set {
    margin: 10px 0 10px;
}
.esgst-feature-description.markdown.esgst-popout {
    max-width: 33.3%;
    overscroll-behavior: contain;
    padding: 8px!important;
    width: auto!important;
}
.esgst-feature-description .esgst-description.markdown {
    color: #a6a6a6!important;
    font-style: normal;
    font-size: 12px;
    padding: 0 10px;
}
.esgst-popup input[type="file"], .esgst-tab-menu input[type="file"], .esgst-form-row + input[type="file"], .esgst-menu-layer input[type="file"] {
    background-color: transparent;
    border: none!important;
    color: hsl(0, 0%, 42%)!important;
    padding: 5px 2px;
}
::file-selector-button {
    background-image: var(--SGSP-silver-buttons-bg-color)!important;
    border: 1px solid hsla(0, 0%, 0%, 0.9)!important;
    border-color: var(--SGSP-silver-buttons-border-color)!important;
    border-radius: 4px;
    color: var(--SGSP-silver-buttons-txt-color)!important;
    cursor: pointer!important;
    font: 700 13px/32px "Open Sans", sans-serif;
    outline: none;
    padding: 0 10px;
    text-shadow: var(--SGSP-ts-30);
    transition: filter 0.35s ease-in;
    will-change: filter;
}
::file-selector-button:hover {
    filter: var(--SGSP-button-hover-brightness);
}
::file-selector-button:active {
    border-color: hsla(0, 0%, 0%, 0.75) hsla(0, 0%, 55%, 0.5) hsla(0, 0%, 55%, 0.5) hsla(0, 0%, 0%, 0.75)!important;
    border: 1px solid;
    box-shadow: 2px 2px 2px hsla(0, 0%, 0%, 0.5) inset, 7px 7px 10px hsla(0, 0%, 5%, 0.5) inset!important;
    margin-top: 0;
    margin-left: 0;
    text-shadow: var(--SGSP-ts-21)!important;
    filter: brightness(0.35);
    transition: filter 0.01s;
    will-change: filter;
}
.esgst-sm-colors input[type="file"] {
    margin: 0 5px 0 0;
    padding: 0;
    text-indent: 0;
}
.esgst-cerb-button {
    box-shadow: none!important;
    color: #737373;
}
.esgst-cerb-button i, .esgst-cerb-reply-button i {
    color: #505050;
}
.esgst-form-row-indent {
    margin-right: 10px;
}
.esgst-gv-popout .giveaway__heading .esgst-gf-hide-button, .esgst-gv-popout .giveaway__heading .esgst-gf-unhide-button, .esgst-gv-popout .giveaway__heading .esgst-gb-button, .esgst-gv-popout .giveaway__heading .esgst-egh-button {
    display: inline-block;
    margin-right: 3px!important;
}
.esgst-gv-popout .esgst-gf-hide-button i, .esgst-gv-popout .esgst-gf-unhide-button i, .esgst-gv-popout .esgst-gb-button i, .esgst-gv-popout .esgst-egh-button i {
    width: 11px;
}
.esgst-gv-popout .giveaway__heading > div:not([data-draggable-id]) + div:not([data-draggable-id]) + .giveaway__heading__name, .esgst-gv-popout .giveaway__heading > div:not([data-draggable-id]) + .esgst-egh-button + .giveaway__heading__name {
    max-width: 130px;
}
.esgst-gv-popout .giveaway__heading > div:not([data-draggable-id]) + div:not([data-draggable-id]) + .esgst-egh-button + .giveaway__heading__name, .esgst-gv-popout .giveaway__heading > div:not([data-draggable-id]) + .esgst-egh-button + .esgst-gb-button + .giveaway__heading__name {
    max-width: 115px!important;
}
.comment__parent.esgst-ct-comment-read .esgst-cerb-reply-button {
    margin-top: 50px!important;
}
.esgst-popup .esgst-gf-container + .esgst-text-left:not(.esgst-gv-view) {
    background: none!important;
    border: none!important;
    box-shadow: none!important;
}
.esgst-aic-panel {
    color: var(--SGSP-general-txt-color);
}
.esgst-aic-right-button, .esgst-aic-left-button {
    background-color: var(--SGSP-body-bg-color);
    border: solid 1px var(--SGSP-content-border-color);
    border-radius: 4px;
    box-shadow: 0 0 6px 2px hsla(0, 0%, 0%, 0.8);
    color: var(--SGSP-general-txt-color);
    filter: contrast(0.85);
    text-shadow: var(--SGSP-ts-10);
}
.esgst-aic-left-button {
    padding: 10px 10px 8px 8px;
}
.esgst-aic-right-button {
    padding: 10px 8px 8px 10px;
}
.esgst-es-page-divisor, .esgst-es-page-divider {
    margin: -1px -10px 5px;
    will-change: transform;
}
.esgst-gv-view .esgst-es-page-divisor, .esgst-gv-view .esgst-es-page-divider {
    margin: 5px 0;
}
.esgst-es-page-divisor > .page__heading__breadcrumbs.page_heading_breadcrumbs, .esgst-es-page-divider > .page__heading__breadcrumbs.page_heading_breadcrumbs {
    border-radius: 0;
    border-left: none;
    border-right: none;
}
.comments > .esgst-es-page-divisor:first-of-type > .page__heading__breadcrumbs.page_heading_breadcrumbs, .comments > .esgst-es-page-divider:first-of-type > .page__heading__breadcrumbs.page_heading_breadcrumbs {
    border-top: none;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    margin: -4px 0 0;
}
.esgst-popup .popup__keys__list {
    border: none;
    font-size: 12px;
    margin: 1px!important;
    padding: 0;
}
.esgst-hidden-buttons {
    background-color: var(--SGSP-body-bg-color)!important;
    border: 1px solid;
    border-color: var(--SGSP-pageheading-border-color);
    padding: 5px!important;
}
.esgst-cfh-popout.esgst-popout input[type="text"] {
    margin-bottom: 5px;
}
.esgst-cfh-sr-controls i {
    text-shadow: var(--SGSP-ts-44);
}
.esgst-popup .esgst-cerb-reply-button, .esgst-popup .esgst-ct-comment-read .esgst-cerb-reply-button {
    margin-top: 40px!important;
    position: relative!important;
    width: 0!important;
    left: 10px;
}
.description.esgst-hidden.esgst-popup-progress {
    border-top: none;
}
input[type="date"]:focus {
    text-shadow: none!important;
}
input[type=date]::-webkit-calendar-picker-indicator:hover {
    background-color: transparent;
    color: rgba(160, 160, 160, 0.85);
}
.esgst-popup-description .esgst-text-left.esgst-float-right.table {
    padding: 5px 10px!important;
}
.esgst-popup-scrollable .table__rows .table__row-outer-wrap:not(.esgst-dh-highlighted) {
    padding: 10px 0 10px 10px!important;
    text-align: unset!important;
}
.esgst-popup-scrollable .esgst-ugd-table .table__rows .table__row-outer-wrap {
    padding: 10px!important;
}
.esgst-popup-scrollable .esgst-ugd-table.table {
    min-width: 600px;
    margin-right: 10px;
}
.esgst-ugd-lists .page__heading {
    min-width: 622px;
    margin: 35px 10px 0 0;
}
.esgst-ugd-lists .esgst-ugd-table + br + .page__heading {
    margin: 25px 10px 0 0;
}
.esgst-ugd-table.table {
    margin-bottom: 15px!important;
    margin-right: 15px;
    box-shadow: none!important;
}
.esgst-gp-button .btn_action.grey, .esgst-gp-button .btn_action.red {
    filter: brightness(0.8) contrast(1.1);
    min-width: 20px;
    line-height: 26px;
    padding: 0 10px!important;
    width: 20px!important;
}
.esgst-gp-button .btn_action.red {
    filter: unset;
}
.esgst-gp-button .btn_action.grey:hover:not(:active) {
    filter: brightness(0.9)!important;
}
.esgst-gv-popout .esgst-gp-button .btn_action.grey {
    background-repeat: initial!important;
    border: 1px solid hsla(0, 0%, 0%, 0.7)!important;
    border-color: var(--SGSP-silver-buttons-border-color)!important;
    min-width: 53px!important;
}
.esgst-gc-border {
    height: 3px!important;
    margin-left: auto;
    margin-right: auto;
    max-width: 184px;
}
.esgst-gv-box.is-faded + .esgst-gc-border {
    opacity: 0.25;
}
.sidebar .esgst-button-set > * {
    width: 302px!important;
}
.sidebar.esgst-ns .esgst-button-set > * {
    padding: 0;
    width: 204px!important;
}
.esgst-cl_gc-popout input:not(.comment__submit-button):not(.ui_tpicker_time_input):not(.sp-input):not([type="file"]):not(.sidebar__search-input), .esgst-ggl-popout input:not(.comment__submit-button):not(.ui_tpicker_time_input):not(.sp-input):not([type="file"]):not(.sidebar__search-input), .esgst-cl_ge-popout input:not(.comment__submit-button):not(.ui_tpicker_time_input):not(.sp-input):not([type="file"]):not(.sidebar__search-input) {
    align-self: center;
    background: #383838!important;
    border: none;
    border-radius: 4px!important;
    box-shadow: 0 0 0 1px var(--SGSP-input-border-color)!important;
    margin-bottom: 10px;
    width: 90%;
}
.esgst-gv-popout {
    height: auto!important;
    max-width: 174px;
    overflow-x: hidden;
    width: 174px;
}
.esgst-cfh-panel > * {
    background-image: var(--SGSP-pageheading-bg-color);
    border-color: var(--SGSP-pageheading-border-color);
    color: var(--SGSP-pageheading-txt-color);
    filter: contrast(0.8) brightness(0.67);
    opacity: 1;
}
.esgst-mm-popout .esgst-cfh-panel > * {
    filter: contrast(0.8) brightness(0.55);
}
.esgst-cfh-panel > *:hover {
    filter: contrast(1) brightness(1.15);
}
.esgst-sttb-button, .esgst-stbb-button {
    border-radius: 4px;
    bottom: 9px;
    right: 8px;
    text-shadow: var(--SGSP-ts-46)!important;
    z-index: 999;
}
.esgst-glwc-heading {
    font: 700 24px/24px 'Open Sans', sans-serif!important;
    letter-spacing: -0.02em;
    text-shadow: var(--SGSP-ts-57);
}
.esgst-glwc-heading + input {
    height: 34px;
}
.esgst-glwc-results .table {
    min-width: 0!important;
}
.esgst-gv-popout .esgst-ggl-panel a + a {
    display: inline-block;
    max-width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: middle;
    white-space: nowrap;
}
.esgst-qgs-container {
    background-color: var(--SGSP-input-bg-color)!important;
    border-color: var(--SGSP-input-border-color)!important;
    margin: -1px 5px -1px 0;
    padding: 8px 10px 7px 10px;
}
.esgst-qgs-container::placeholder, .esgst-cl_gc-popout::placeholder {
    color: rgba(160, 160, 160, 0.85)!important;
    text-shadow: var(--SGSP-ts-42)!important;
}
.esgst-qgs-container i {
    color: var(--SGSP-general-txt-color);
    text-shadow: var(--SGSP-ts-45);
}
.esgst-qgs-container-expanded {
    top: 0;
}
.esgst-ggl-heading, .esgst-cl_gc-heading, .esgst-cl_ge-heading {
    color: var(--SGSP-headings-txt-color);
    display: block;
    font-size: 14px;
    font-weight: 600;
    margin: 10px;
    text-align: center;
    text-shadow: var(--SGSP-ts-48);
}
.esgst-ggl-heading + input[placeholder*="Search"] {
    border-radius: 0!important;
}
.esgst-popup input[placeholder*="Search"] + .esgst-text-left.table .table__row-inner-wrap {
    padding-right: 5px;
}
.featured__container .esgst-giveaway-panel .featured__column {
    margin-top: 3px;
}
.esgst-popup .esgst-gv-popout {
    margin-left: -1px;
}
.esgst-ib-game + .esgst-gv-icons {
    right: 0;
}
.footer__outer-wrap .esgst-sttb-button, footer .esgst-sttb-button, .footer__outer-wrap .esgst-stbb-button, footer .esgst-stbb-button {
    padding: 5px 15px!important;
    margin: -6px -60px -6px -2px;
}
.esgst-stbb-button:not(.esgst-hidden) + .esgst-sttb-button {
    bottom: 59px;
}
.pinned-giveaways__outer-wrap.esgst-hidden + .page__heading:not(.esgst-fmph) {
    margin-top: 8px;
}
.esgst-aic-carousel > :last-child {
    background-color: var(--SGSP-image-bg-color);
    border: 1px solid var(--SGSP-image-border-color);
    box-shadow: 0 0 6px 2px hsla(0, 0%, 0%, 0.8);
    padding: 5px;
}
.esgst-aic-carousel img {
    filter: var(--SGSP-image-brightness);
}
.esgst-popup-modal {
    background-color: var(--esgst-modal-bg-color)!important;
}
.esgst-auto-sync {
    margin: -2px 5px 2px;
    padding: 0 2px;
    vertical-align: top;
}
.esgst-radb-button.block_header {
    border-bottom: 1px solid var(--SGSP-header-footer-border-color);
    float: right;
    line-height: 33px;
    margin: 0 0 0 5px!important;
}
.esgst-radb-button + .block_header {
    display: flex;
    width: unset;
}
.esgst-popup-icon {
    color: var(--SGSP-headings-txt-color);
}
.esgst-toggle-switch + span > select, .esgst-tab-menu > .esgst-page-heading + .esgst-clear-container > input {
    width: 204px;
}
.esgst-popup-description > .esgst-clear-container {
    margin-top: 0!important;
}
input[placeholder="Filter features..."] {
    width: 204px;
    margin-top: 10px;
}
.sidebar .esgst-oadd > .esgst-adots {
    border-left: 1px solid var(--SGSP-sidebar-border-color)!important;
    box-shadow: 1px 1px 0 hsla(0, 0%, 23%, 0.3) inset!important;
    min-height: 301px!important;
    padding-left: 4px!important;
}
.sidebar.esgst-ns .esgst-oadd > .esgst-adots {
    min-height: 315px!important;
}
.esgst-pm-button i.esgst-red {
    opacity: 0.8;
}
.esgst-pm-button .fa, .esgst-dh-button .fa, .esgst-ust-checkbox .fa {
    font-size: 13px;
}
.esgst-popup-actions > *:not(:last-child), .esgst-popup-actions > *:first-child {
    margin: 0 7px 5px;
}
.esgst-ugs-difference, .esgst-switch-input {
    text-indent: 5px;
}
.esgst-popup-scrollable > .table__heading {
    border: 1px solid var(--SGSP-tableheading-border-color)!important;
    border-radius: 4px!important;
    margin-bottom: -5px!important;
}
.esgst-popup-scrollable > .table__heading .table__column--width-small {
    min-width: 115px;
}
.esgst-popup-scrollable > .table__heading + .table__rows .table__column--width-small {
    min-width: 20px;
    text-align: left;
}
.esgst-popup-scrollable > .table__heading + .table__rows .table__column--width-small:first-of-type {
    min-width: 175px;
}
.esgst-nm-icon {
    color: inherit!important;
}
.esgst-cfh-sr-controls {
    right: 0;
}
.esgst-error-button .nav__button {
    background-image: linear-gradient(hsl(0, 71%, 40%) 0%, hsl(0, 71%, 30%) 100%)!important;
}
.esgst-gb-highlighted.ending, .esgst-error-button, .esgst-error-button > *:hover {
    background-color: transparent!important;
}
.esgst-mgc-preview {
    background-color: var(--SGSP-content-bg-color);
    border: 1px solid var(--SGSP-content-border-color);
    border-radius: 4px;
    box-shadow: 0 0 6px 2px hsla(0, 0%, 0%, 0.8);
    margin: 15px 0!important;
}
.esgst-mgc-preview + .esgst-bold {
    float: left;
    margin-right: 15px!important;
}
.esgst-mgc-preview + .esgst-bold + .esgst-mgc-input {
    display: flex;
}
.esgst-mgc-preview pre {
    background-color: hsla(210, 52%, 24%, 0.4);
}
.esgst-mgc-input {
    margin: 10px 5px 0 0!important;
    width: 85px!important;
}
.page__heading > .esgst-dh-button, .page__heading > .esgst-df-button, .page__heading > .esgst-pm-button {
    margin: 0 5px 0 0!important;
}
.esgst-header-menu-absolute-dropdown {
    margin-top: 34px!important;
    top: unset;
    width: -moz-max-content!important;
    width: -webkit-max-content!important;
    width: max-content!important;
}
.dropdown > div {
    margin-top: 34px;
    z-index: 1000;
}
.esgst-qiv-popout {
    background-color: var(--SGSP-body-bg-color)!important;
    border: solid 1px var(--SGSP-content-border-color);
    margin-left: 195px;
    min-width: 750px;
}
.esgst-qiv-popout .sidebar__action-button, .esgst-qiv-popout .sidebar__action-button:active {
    margin: 0 auto;
    width: -moz-max-content;
    width: -webkit-max-content;
    width: max-content;
}
.esgst-qiv-comments, .esgst-popup-scrollable {
    overscroll-behavior: contain;
}
.esgst-qiv-popout .comments__entity + .comments {
    min-width: unset;
}
.esgst-qiv-comments > div {
    margin-right: 10px;
}
.esgst-qiv-popout .comments > .comment > .comment__children {
    margin-left: -25px;
    border: none!important;
    box-shadow: none!important;
}
.esgst-qiv-popout .comment__parent li:before, .esgst-qiv-popout .esgst-cfh-preview li:before {
    position: static!important;
}
.esgst-gv-popout .esgst-giveaway-panel > [class^="giveaway__column"]:not([data-draggable-id]) {
    border: none!important;
    box-shadow: 0 0 0 1px #000, 0 0 0 1px #000!important;
    display: inline-block;
    margin: 3px!important;
    min-width: 17px;
    width: 17px!important;
}
.esgst-gv-popout .esgst-giveaway-panel .esgst-gv-time {
    background-image: linear-gradient(hsl(0, 0%, 37%) 0%, hsl(0, 0%, 20%) 100%)!important;
    background-color: unset;
    color: hsl(210, 6%, 58%)!important;
    display: inline-block;
    min-width: 57px!important;
    padding: 0 8px!important;
}
.esgst-gv-box .esgst-gv-icons.giveaway__columns {
    border-radius: 0 0 2.5px 0;
    box-shadow: none;
    float: none;
    justify-content: flex-end;
    overflow: hidden;
}
.esgst-gv-box .esgst-ib-game + .esgst-gv-icons.giveaway__columns {
    border-radius: 0 0 5px 0;
}
.esgst-gv-icons .btn_action, .esgst-gv-icons .sidebar__error, .esgst-gv-icons .esgst-ge-sgt-button > .form__submit-button {
    border: none!important;
    box-shadow: 0 -1px 0 0 hsla(185, 65%, 48%, 1), 1px 0 0 0 #3197a0, 0 1px 0 0 hsla(185, 60%, 36%, 1), -1px 0 0 0 #3197a0!important;
    display: block;
    line-height: 16px;
    margin: 0;
    min-width: 12px;
    padding: 0 4px 0 3px!important;
    text-shadow: var(--SGSP-ts-4)!important;
}
.esgst-gv-icons .btn_action > i, .esgst-gv-icons .sidebar__error:not(.esgst-button) > i {
    display: block;
    line-height: 16px;
}
.esgst-gv-icons .fa-spin {
    text-shadow: var(--SGSP-ts-8);
}
.esgst-gv-icons .esgst-elgb-button .btn_action > span, .esgst-gv-icons .esgst-elgb-button .sidebar__error > span, .esgst-gv-icons .esgst-gwc > i, .esgst-gv-icons .esgst-gwr > i, .esgst-gv-icons .esgst-gptw > i, .esgst-gc-panel:empty, .esgst-gv-popout .esgst-giveaway-links [data-draggable-id].esgst-gc, .esgst-gv-popout .esgst-giveaway-links [data-draggable-id] .btn_action, .esgst-gv-popout .esgst-giveaway-links .esgst-button-container, .esgst-gv-popout .esgst-giveaway-panel:empty, .esgst-gv-icons .esgst-gc, .esgst-gv-icons .esgst-gc-genres, .comments:empty {
    display: none;
}
.esgst-gv-icons .esgst-gp-button .btn_action.grey {
    filter: unset;
    padding: 1px 0 0!important;
}
.esgst-gv-icons .esgst-gwc, .esgst-gv-icons .esgst-gwr, .esgst-gv-icons .esgst-gptw, .esgst-gv-icons .esgst-ttec {
    background-image: linear-gradient(hsl(0, 0%, 37%) 0%, hsl(0, 0%, 20%) 100%)!important;
    color: hsl(210, 6%, 78%);
    min-height: 0;
}
.esgst-gv-popout .esgst-button-set {
    width: unset;
}
.giveaway__columns > .esgst-button-set {
    border: none;
    padding: 0;
}
.giveaway__columns > .esgst-elgb-button > .sidebar__entry-delete {
    margin-bottom: 0;
}
.esgst-giveaway-panel .esgst-button-set > *, .giveaway__columns:not(.esgst-gv-icons) > .esgst-elgb-button .btn_action {
    line-height: 26px;
    min-width: 60px;
    padding: 0 10px!important;
    width: auto!important;
}
.esgst-gv-icons .esgst-ttec i {
    font-size: 10px!important;
    vertical-align: baseline;
    margin-bottom: 1px;
}
.esgst-toggle-switch-container + .fa-gear.esgst-clickable {
    margin-top: -3px;
}
.esgst-toggle-switch + span + .esgst-description ~ .esgst-description {
    display: none;
}
.esgst-toggle-switch + span + .esgst-description, .esgst-toggle-switch + span + .esgst-description i {
    font-size: 12px;
    font-style: normal;
    line-height: 14px;
    margin-bottom: 0!important;
    vertical-align: top;
}
.esgst-toggle-switch + span + .esgst-green, .esgst-toggle-switch + span + .esgst-green .fa-check:before {
    color: var(--SGSP-green-icons-txt-color)!important;
}
.comment__parent .esgst-cerb-reply-button {
    margin-top: 50px;
}
.esgst-popup .table__row-outer-wrap.esgst-relative {
    padding: 10px 5px 10px 18px!important;
}
.esgst-chfl-panel i:active {
    filter: brightness(0.65) contrast(0.85);
}
.esgst-ged-source:before {
    content: "\\f015";
    font: normal normal normal 12px/1 FontAwesome;
    margin-right: 2px;
}
.esgst-gv-box .giveaway__columns:not(.esgst-gv-icons) .esgst-ged-source {
    display: inline-block;
    margin: 2px!important;
    min-width: 57px!important;
}
.giveaway__columns:not(.esgst-gv-icons):not(.esgst-giveaway-panel) .esgst-ged-source {
    margin: 0 5px 0 0!important;
}
.esgst-gwc-highlight.giveaway_image_thumbnail, .esgst-gwr-highlight.giveaway_image_thumbnail, .esgst-gwc-highlight.giveaway_image_thumbnail_missing, .esgst-gwr-highlight.giveaway_image_thumbnail_missing {
    box-shadow: 0 0 0 1px var(--SGSP-image-border-color), 0 0 0 1px var(--SGSP-image-border-color)!important;
}
.esgst-gwc-highlight[style*="color"][style*="box-shadow"] {
    box-shadow: 0 0 0 1px var(--SGSP-image-border-color), 0 0 0 1px var(--SGSP-image-border-color), currentColor 0 0 0 var(--esgst-gwc-highlight-width, 3px) inset!important;
}
.esgst-gwr-highlight[style*="color"][style*="box-shadow"] {
    box-shadow: 0 0 0 1px var(--SGSP-image-border-color), 0 0 0 1px var(--SGSP-image-border-color), currentColor 0 0 0 var(--esgst-gwr-highlight-width, 3px) inset!important;
}
.giveaway_image_thumbnail[style*="background-image"][style*="null"]:after {
    content: "\\f03e";
    position: relative;
    font: normal normal normal 24px/1 FontAwesome;
    color: rgba(160, 160, 160, 0.85);
    top: 23px;
    left: 80px;
}
.esgst-gv-box .giveaway_image_thumbnail[style*="background-image"][style*="null"]:after {
    left: 0;
}
.esgst-sal i {
    margin-right: 3px;
}
.esgst-mm-checkbox {
    height: 14px;
    line-height: 14px;
    padding-right: 0!important;
    width: 12px;
}
.esgst-mm-checkbox i {
    margin: 0;
    margin-bottom: 1px;
}
.esgst-mm-headings > :first-child {
    border-top-left-radius: 4px;
}
.esgst-mm-headings > :last-child {
    border-top-right-radius: 4px;
}
.esgst-mm-headings > * {
    background-image: linear-gradient(hsl(207, 10%, 22%) 0%, hsl(206, 10%, 14%) 100%);
    border: none;
    box-shadow: 0 0 0 1px hsl(60, 2%, 27%), 0 0 0 1px hsl(60, 2%, 27%), 1px 1px 0 hsla(0, 0%, 23%, 0.5) inset, 1px 1px 0 hsla(0, 0%, 23%, 0.5) inset;
}
.esgst-mm-headings .esgst-selected {
    filter: var(--SGSP-nav-button-hover-brightness) var(--SGSP-nav-button-hover-saturate);
}
.esgst-mm-sections {
    background-color: var(--SGSP-content-bg-color);
    border: none;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    border-color: var(--SGSP-content-border-color);
    box-shadow: 0 0 0 1px hsl(60, 2%, 27%), 0 0 0 1px hsl(60, 2%, 27%);
    padding: 8px 8px 5px;
}
.esgst-mm-headings > *:hover:not(.esgst-selected) {
    filter: var(--SGSP-nav-button-hover-brightness) var(--SGSP-nav-button-hover-saturate);
}
.esgst-mm-popout {
    min-height: -webkit-fit-content;
    min-height: -moz-fit-content;
    min-height: fit-content;
    width: 650px;
}
.esgst-mm-popout .esgst-button-set > * {
    min-width: 50px;
    width: calc(100% - 32px)!important;
}
.esgst-mm-popout .esgst-mm-sections > .esgst-selected > :last-child {
    width: 100px!important;
}
.esgst-mm-popout .esgst-button-set > .btn_action:active:not(.is_saving):not(.is_disabled) {
    margin: 2px;
}
.esgst-mm-popout .esgst-cfh-preview {
    margin: 5px 0;
}
.esgst-mm-popout .page_outer_wrap + .esgst-description {
    margin-top: 0;
}
.esgst-ge-sgt-button {
    padding: 0!important;
}
.esgst-gv-icons .esgst-ge-sgt-button {
    border: none!important;
    background: none!important;
    box-shadow: none!important;
    padding: 0!important;
}
.esgst-gv-icons .esgst-ge-sgt-button > .form__submit-button {
    font-size: 10px;
    padding: 0 3px!important;
}
.esgst-gv-container:hover .is-faded.esgst-gv-box, .esgst-gv-container:hover .esgst-gv-box.esgst-faded {
    opacity: 1;
}
.comment_outer:not([id]) > .comment_inner {
    max-width: unset;
}
.comment__actions__button, .action_list a {
    height: 13px;
}
.comment_outer:not([id]) .action_list a {
    height: 12px;
}
.dropdown:hover .esgst-header-menu-row:not(.esgst-version-row):not(:hover) > *, .esgst-header-menu-relative-dropdown:hover .esgst-header-menu-row.esgst-version-row > * {
    opacity: 0.5;
}
.dropdown .esgst-chfl-small i {
    transition: color 0.15s;
    width: 31px;
}
.esgst-header-menu-row .esgst-chfl-panel i, .nav__row .esgst-chfl-panel i, .dropdown_btn .esgst-chfl-panel i {
    font-size: 14px!important;
}
.footer__inner-wrap .esgst-chfl-panel i, .footer_inner_wrap .esgst-chfl-panel i {
    font-size: 12px!important;
    padding: 3px;
}
.esgst-draggable-trash {
    background-color: hsl(60, 4%, 9%);
    background-image: linear-gradient(hsla(0, 65%, 44%, 0.23) 0%, hsla(0, 72%, 24%, 0.9) 100%);
    border: 1px solid hsl(0, 100%, 27%);
    border-radius: 4px;
    color: var(--SGSP-red-icons-txt-color);
    display: inline-block;
    height: 32px;
    margin-left: -50px;
    text-shadow: var(--SGSP-ts-30);
    width: 117px!important;
    z-index: 99999;
}
.esgst-cfh-popout .esgst-cfh-emojis + .esgst-draggable-trash {
    margin-left: -1px;
}
.esgst-draggable-trash i {
    font-size: 22px;
}
.esgst-fmph {
    background: var(--SGSP-body-bg-color)!important;
    border-radius: 0;
    margin-top: -8px;
    padding: 8px 0;
    top: 0;
}
.esgst-fmph + * {
    margin-top: 0!important;
}
.esgst-fmph + .sg2o-gridview-container {
    margin-top: -6px!important;
}
.esgst-fmph + form {
    margin-top: -8px!important;
}
.page__heading:not(.esgst-fmph) + .esgst-gf-container {
    margin-top:5px;
    top: 0;
    padding: 0;
}
.esgst-fh ~ .page__outer-wrap .esgst-fmph {
    top: 38px;
}
.esgst-fh ~ .page__outer-wrap .esgst-fmph + .esgst-gf-container {
    top: 85px;
}
.esgst-fh ~ .page__outer-wrap .page__heading:not(.esgst-fmph) + .esgst-gf-container {
    top: 40px;
}
.esgst-popup .page__heading:not(.esgst-fmph) + .esgst-gf-container {
    top: unset;
}
.esgst-fmph:after {
    background-size: 100%;
    border-radius: 4px;
    border-top: solid 1px var(--SGSP-content-border-color);
    bottom: -9px;
    content: "";
    height: 8px;
    left: 0;
    position: absolute;
    width: 100%;
}
.esgst-popup .esgst-fmph {
    padding: 0;
}
.esgst-popup .esgst-fmph:after, .esgst-popup .esgst-fmph:before {
    display: none;
}
.esgst-popup-scrollable .esgst-gf-container, .esgst-popup-scrollable .page__heading {
    top: 0;
}
#esgst-rbp .fa-comment {
    font-size: 14px!important;
}
.esgst-adots .homepage_table_column_heading {
    max-width: 25vw;
}
.sidebar .esgst-float-right.sidebar__navigation__item__name {
    margin-right: 8px;
}
.sidebar.esgst-ns .esgst-adots-tab-heading {
    padding: 5px 6px;
}
.sidebar.esgst-ns .esgst-adots-tab-heading, .sidebar.esgst-ns .esgst-float-right.sidebar__navigation__item__name {
    font-size: 11px;
}
.sidebar.esgst-ns .esgst-radb-button i {
    font-size: 13px;
}
.sidebar .esgst-adots h3 {
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: middle;
    white-space: nowrap;
    max-width: 240px;
    font-size: 15px;
}
.sidebar.esgst-ns .esgst-adots h3 {
    max-width: 150px;
}
.esgst-adots .icon-heading.fa-bookmark-o {
    font-size: 13px;
    opacity: 0.55;
}
.esgst-adots .icon-heading.fa-bookmark.icon-navy {
    font-size: 13px;
}
.esgst-oadd .table__row-inner-wrap > .table__column--width-small.text-center {
    min-width: 150px!important;
}
.esgst-ns .sidebar__navigation__item {
    max-width: 194px!important;
}
.esgst-ns .sidebar__navigation__item__link[href*="isthereanydeal"] {
    font-size: 10px;
    padding: 4px 6px;
}
.esgst-ns .sidebar__navigation__item__link[href*="isthereanydeal"] > .sidebar__navigation__item__name {
    max-width: 110px;
}
.esgst-ns .sidebar__navigation__item__link[href*="isthereanydeal"] > .sidebar__navigation__item__underline {
    margin: 0 2px;
    min-width: 5px;
}
.esgst-minimize-container {
    background-color: var(--SGSP-body-bg-color);
    background-image: linear-gradient(var(--SGSP-content-bg-color) 0%, var(--SGSP-content-bg-color) 100%);
    border-bottom-right-radius: 4px;
    box-shadow: 0 0 0 1px #000 inset;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    padding-bottom: 15px;
}
.esgst-minimize-container h3 {
    text-align: center;
}
.esgst-minimize-item.alert {
    border: 1px solid var(--SGSP-red-icons-txt-color);
    border-radius: 4px;
}
.esgst-minimize-panel.alert {
    border-right: 10px solid hsla(0, 100%, 50%, 0.5);
    border-bottom-right-radius: 4px;
}
.table__row-inner-wrap .fa-paint-brush {
    font-size: 12px;
}
.esgst-gv-view:not(.pinned-giveaways__inner-wrap) {
    background-color: var(--SGSP-content-bg-color);
    background-image: none;
    border: 1px solid var(--SGSP-content-border-color);
    border-radius: 4px;
    box-shadow: 0 0 5px 1px hsla(0, 0%, 0%, 0.8);
    min-width: unset!important;
    margin-bottom: 8px;
    margin-top: 8px;
    text-shadow: var(--SGSP-ts-41);
}
.esgst-ns .sidebar__entry-insert[style*="border-color: rgb(147, 187, 211)"] {
    line-height: 12px;
    padding: 6px 15px 8px 15px;
}
.table__row-inner-wrap div[class*="esgst"]:last-of-type > .fa-check {
    margin-left: -3px;
}
.esgst-gv-container .giveaway__hide {
    margin-left: 3px;
}
.sidebar__error + .sidebar__error[href*="login"] {
    display: none;
}
.esgst-gf-hide-button, .esgst-gf-unhide-button, .esgst-gb-button, .esgst-egh-button {
    margin: 0 5px 0 0!important;
}
.featured__heading .esgst-egh-button {
    margin: 0!important;
}
.esgst-ns .esgst-ags-panel {
    max-width: 196px!important;
}
.esgst-gv-popout .giveaway__heading .esgst-tag-button {
    margin-left: 3px!important;
}
.esgst-popup-scrollable .esgst-tag-button i {
    margin: 0!important;
}
.esgst-popup .esgst-tag-button {
    margin-right: 5px;
}
.esgst-ggl-popout .esgst-tag-button {
    height: 16px;
    vertical-align: bottom;
}
.esgst-ggl-popout .esgst-tag-button i {
    color: var(--SGSP-secondary-txt-color);
}
.esgst-tag-suggestions {
    background-color: unset;
    border: 1px solid #000;
    width: 280px;
    margin-top: 3px;
}
.esgst-tag-suggestion.esgst-selected {
    background-color: hsl(60, 1%, 14%);
    color: var(--SGSP-link-txt-color);
}
.esgst-tag-suggestions > * {
    background: #333333;
    text-shadow: var(--SGSP-ts-29);
}
.esgst-tag-suggestions > *:not(:last-child) {
    border-bottom: none;
    box-shadow: 0 -1px 0 0 #000 inset;
}
.esgst-popout .form__saving-button.btn_action.white, .esgst-popup .form__saving-button.btn_action.white {
    margin-right: 5px!important;
}
.esgst-sm-colors select {
    padding: 1px!important;
    margin: 2px 5px 2px 2px;
}
.esgst-button-set + .esgst-popup-scrollable > div > .esgst-sm-colors div {
    display: flex;
    justify-content: space-between;
    margin: 2px;
}
.esgst-button-set + .esgst-popup-scrollable > div > .esgst-sm-colors div select {
    margin: -3px 0 3px 2px;
}
.esgst-adots .table__row-inner-wrap > :first-child.esgst-mm-checkbox {
    float: unset;
    width: unset;
    height: unset;
}
.giveaway__row-inner-wrap > :first-child.esgst-mm-checkbox {
    margin-right: 5px;
}
.esgst-gv-popout .esgst-mm-checkbox {
    line-height: unset;
}
.giveaway__heading > .esgst-mm-checkbox {
    margin: 0 0 0 5px;
}
.sidebar .table__row-inner-wrap > .esgst-mm-checkbox + div {
    padding-right: 0;
}
.sidebar .esgst-adots .table__row-outer-wrap.esgst-relative {
    padding: 5px 0 5px 15px!important;
}
.sidebar .esgst-adots .esgst-relative .esgst-pm-button {
    top: 14px;
}
.giveaway__heading > [data-draggable-id]:first-child {
    margin: 0!important;
}
.esgst-gv-popout .giveaway__heading > [data-draggable-id][data-draggable-id="name"] {
    border-bottom: 1px solid var(--SGSP-separator-dark-color)!important;
    box-shadow: 0 1px 0 var(--SGSP-separator-light-color)!important;
    margin: 0 0 4px 0!important;
    padding-bottom: 3px!important;
}
.giveaway__heading [data-draggable-id="hideGame"], .giveaway__heading [data-draggable-id="egh"], [data-draggable-id].esgst-gf-hide-button i, [data-draggable-id].esgst-gf-unhide-button i, [data-draggable-id].esgst-gb-button i, .esgst-gv-popout .giveaway__heading [data-lightbox-id] {
    opacity: 0.55;
}
.esgst-gv-popout .giveaway__heading [data-draggable-id].esgst-gc {
    line-height: 10px;
}
.featured__heading > [data-draggable-id]:first-child {
    margin-right: 0!important;
}
.featured__heading > [data-draggable-id]:not(:first-child) {
    margin: 0 0 0 10px!important;
}
.giveaway__heading > [data-draggable-id]:not(:first-child), .table__column__heading > [data-draggable-id]:not(:first-child), .markdown a[data-draggable-id], .table__column--width-fill [data-draggable-id] {
    margin: 0 0 0 5px!important;
}
.table__column--width-fill [data-draggable-id] i {
    width: 14px;
}
.giveaway__heading [data-draggable-id], .table__column__heading > [data-draggable-id] {
    display: inline-block;
}
.esgst-gv-popout .giveaway__heading [data-draggable-id="points"] {
    font-weight: 600;
}
.giveaway__heading [data-draggable-id="ged"] {
    background-image: linear-gradient(hsl(208, 24%, 35%) 0%, hsl(208, 16%, 25%) 100%)!important;
    color: hsl(210, 6%, 78%)!important;
    border: 1px solid black;
    border-radius: 4px;
    padding: 0 4px;
}
.giveaway__heading [data-draggable-id="group"] i, .giveaway__heading [data-draggable-id="regionRestricted"] i, .giveaway__heading [data-draggable-id="whitelist"] i, .giveaway__heading [data-draggable-id="inviteOnly"] i {
    font-size: 16px;
}
.giveaway__heading [data-draggable-id="group"]:not(.featured__column--group), .giveaway__heading [data-draggable-id="whitelist"]:not(.featured__column--whitelist), .giveaway__heading [data-draggable-id="regionRestricted"], .giveaway__heading [data-draggable-id="inviteOnly"]:not(.featured__column--invite-only), .giveaway__heading [data-draggable-id="sgTools"], .giveaway__columns [data-draggable-id="sgTools"], .giveaway__heading [data-draggable-id="startTime"] .giveaway__username {
    padding: 0!important;
    background: none;
    background-image: none!important;
    border: none!important;
    box-shadow: none!important;
}
.giveaway__heading [data-draggable-id="group"].featured__column--group, .giveaway__heading [data-draggable-id="whitelist"].featured__column--whitelist, .giveaway__heading [data-draggable-id="inviteOnly"].featured__column--invite-only, .giveaway__heading [data-draggable-id="level"].featured__column--contributor-level {
    padding: 1px 4px!important;
    border: 1px solid hsl(0, 0%, 0%)!important;
    border-radius: 4px;
}
.giveaway__heading [data-draggable-id="sgTools"] > .form__submit-button {
    padding: 1px 4px!important;
    line-height: 14px;
    font-size: 12px;
}
.giveaway__heading [data-draggable-id="gwr"], .giveaway__heading [data-draggable-id="gwc"], .giveaway__heading [data-draggable-id="gptw"], .giveaway__heading [data-draggable-id="ttec"], .esgst-gv-popout .giveaway__heading [data-draggable-id="time"], .giveaway__heading [data-draggable-id="startTime"], .giveaway__heading [data-draggable-id="endTime"], .giveaway__heading [data-draggable-id="entries"], .giveaway__heading [data-draggable-id="comments"], .giveaway__heading [data-draggable-id="winners"] {
    padding: 0 4px!important;
    border-radius: 4px;
    width: auto!important;
    background-image: linear-gradient(hsl(60, 2%, 20%) 0%, hsl(60, 4%, 15%) 100%)!important;
    border: 1px solid hsl(0, 0%, 0%)!important;
    box-shadow: 1px 1px 0 hsla(60, 1%, 27%, 0.25) inset!important;
    flex: unset;
}
.giveaway__heading [data-draggable-id="startTime"] [data-draggable-id="ut"], .giveaway__heading [data-draggable-id="winners"] [data-draggable-id="ut"] {
    margin: 0 0 0 5px!important;
    position: relative;
    height: 14px;
    bottom: 1px;
}
.giveaway__heading [data-draggable-id="level"]:not(.featured__column--contributor-level) {
    padding: 0 4px!important;
    border-radius: 3px;
}
.giveaway__heading [data-draggable-id="gp"] .btn_action.grey, .giveaway__heading [data-draggable-id="gp"] .btn_action.red {
    line-height: 16px!important;
    padding: 0 4px!important;
    min-width: unset!important;
}
.giveaway__heading [data-draggable-id="gp"] i {
    font-size: 12px;
    font-weight: 600;
}
.giveaway__heading [data-draggable-id="elgb"] .btn_action {
    line-height: 15px!important;
    margin: 0;
    padding: 1px 4px 0 4px;
    width: auto;
    vertical-align: middle;
}
.giveaway__heading [data-draggable-id="elgb"] .btn_action i {
    font-size: 12px;
}
.giveaway__heading [data-draggable-id="gf"] i, .giveaway__heading [data-draggable-id="elgb"] .btn_action i, .giveaway__heading [data-draggable-id="comments"] i {
    position: relative;
    bottom: 1px;
}
.giveaway__heading > [data-draggable-id].giveaway__column--invite-only, .giveaway__heading > [data-draggable-id].giveaway__column--region-restricted {
    color: var(--SGSP-general-txt-color)!important;
}
.featured__heading [data-draggable-id]:not(.esgst-tag-button) {
    line-height: 22px;
}
.featured__heading [data-draggable-id="name"] {
    white-space: nowrap;
}
.featured__heading [data-draggable-id="level"], .featured__heading [data-draggable-id="group"], .featured__heading [data-draggable-id="regionRestricted"], .featured__heading [data-draggable-id="whitelist"], .featured__heading [data-draggable-id="inviteOnly"] {
    padding: 0 6px!important;
    border: 1px solid hsl(0, 0%, 0%)!important;
    border-radius: 4px;
    box-shadow: none!important;
    white-space: nowrap;
}
.featured__heading [data-draggable-id="group"] i, .featured__heading [data-draggable-id="regionRestricted"] i, .featured__heading [data-draggable-id="whitelist"] i {
    opacity: 1;
}
.featured__heading [data-draggable-id].esgst-gf-hide-button i, .featured__heading [draggable-id].esgst-gf-unhide-button i {
    opacity: 0.7;
}
.featured__heading [data-draggable-id].esgst-gb-button i {
    opacity: 0.6;
}
.featured__heading [data-draggable-id] .esgst-tag {
    padding: 0 6px;
    line-height: 15px;
}
.featured__heading [data-draggable-id="gwr"], .featured__heading [data-draggable-id="gwc"], .featured__heading [data-draggable-id="gptw"], .featured__heading [data-draggable-id="ttec"], .featured__heading [data-draggable-id="startTime"], .featured__heading [data-draggable-id="endTime"], .featured__heading [data-draggable-id="entries"], .featured__heading [data-draggable-id="comments"], .featured__heading [data-draggable-id="winners"] {
    padding: 0 6px!important;
    border-radius: 4px;
    width: auto!important;
    background-image: linear-gradient(hsl(60, 2%, 20%) 0%, hsl(60, 4%, 15%) 100%)!important;
    border: 1px solid hsl(0, 0%, 0%)!important;
    box-shadow: 1px 1px 0 hsla(60, 1%, 27%, 0.25) inset!important;
    flex: unset;
    white-space: nowrap;
}
.featured__heading [data-draggable-id="group"] {
    color: hsla(113, 60%, 85%, 0.9)!important;
}
.featured__container [data-draggable-id="copies"].esgst-gch-highlight {
    background-color: hsla(0, 0%, 0%, 0.09);
    border: 1px solid hsla(0, 0%, 0%, 0.4)!important;
    box-shadow: 1px 1px 0 hsla(60, 1%, 27%, 0.25) inset!important;
    padding: 0 8px;
}
.markdown a[data-draggable-id] {
    text-shadow: none!important;
    text-decoration-color: transparent!important;
}
.markdown a[data-draggable-id]:not(.esgst-gc) i {
    text-shadow: var(--SGSP-ts-5)!important;
}
.page__heading > *:not(.esgst-page-heading-buttons), .page_heading > *:not(.esgst-page-heading-buttons), .esgst-cfh-panel .page_heading_btn, .page_inner_wrap .MTButton, .page_heading .esgst-heading-button {
    background-image: var(--SGSP-pageheading-bg-color);
    border-color: var(--SGSP-pageheading-border-color);
    border-radius: 4px;
}
.esgst-gv-popout [data-draggable-id="name"] {
    width: 170px;
    max-width: unset;
    overflow: hidden;
    text-overflow: ellipsis;
}
.esgst-gv-popout [data-draggable-id].esgst-gc {
    max-width: 142px;
    overflow: hidden;
    text-overflow: ellipsis;
}
.esgst-gc-loading {
    color: hsla(0, 0%, 68%, 0.6);
}
[data-draggable-id="gf"]:not(#esgst-gf):not([draggable="true"]), [data-draggable-id="entries"] span, [data-draggable-id="comments"] span {
    color: var(--SGSP-link-txt-color)!important;
}
[data-draggable-id="startTime"] .esgst-user-icon i {
    margin: 0 0 0 2px!important;
}
.esgst-giveaway-column-button > * {
    line-height: 14px;
}
.giveaway__columns:not(.esgst-gv-icons) [data-draggable-id]:not([data-draggable-id="gp"]):not([data-draggable-id="elgb"]):not([data-draggable-id="level"]):not([data-draggable-id="ut"]), .giveaway__columns:not(.esgst-gv-icons) [data-draggable-id][data-draggable-id="sgTools"] > .form__submit-button {
    border: 1px solid;
    line-height: 26px;
    margin-left: unset;
    opacity: 1;
    padding: 0 8px;
}
.giveaway__columns:not(.esgst-gv-icons) [data-draggable-id="gt"] {
    border: 1px solid!important;
    color: var(--SGSP-secondary-txt-color)!important;
    font-size: 10px;
}
.esgst-giveaway-panel [data-draggable-id="hideGame"], .esgst-giveaway-panel [data-draggable-id="egh"], .esgst-giveaway-panel [data-draggable-id="gb"], .esgst-giveaway-panel [data-draggable-id].esgst-gf-hide-button i, .esgst-giveaway-panel [data-draggable-id].esgst-gf-unhide-button i, .esgst-giveaway-panel [data-draggable-id].esgst-gb-button i {
    opacity: 1;
}
.featured__container .esgst-giveaway-panel .featured__column[data-draggable-id] {
    line-height: 26px;
    margin: 3px 5px 0 0;
}
.esgst-giveaway-panel > [data-draggable-id]:not(:last-child) {
    margin: 0 5px 0 0;
}
.esgst-giveaway-panel > [data-draggable-id]:last-child {
    margin: 0;
}
.esgst-gv-popout .esgst-giveaway-panel .giveaway__heading__name {
    max-width: 140px;
}
.esgst-gv-popout .giveaway__heading > [data-draggable-id], .giveaway__heading > [data-draggable-id], .esgst-gv-popout .giveaway__heading [data-lightbox-id], .giveaway__heading > [data-ui-tooltip] i {
    display: inline-block;
    line-height: 15px;
    vertical-align: middle;
}
.esgst-gv-popout .giveaway__heading [data-draggable-id]:not(.esgst-gc) i, .esgst-gv-popout .giveaway__heading > [data-ui-tooltip] i {
    vertical-align: baseline;
    width: 12px;
}
.esgst-gv-popout .giveaway__heading [data-draggable-id] i, .esgst-gv-popout .giveaway__heading [data-draggable-id="hideGame"], .esgst-gv-popout .esgst-gv-creator [data-draggable-id] i, .esgst-gv-popout .esgst-gv-creator [data-draggable-id="hideGame"], .esgst-gv-popout .giveaway__heading [data-lightbox-id], .esgst-gv-popout .giveaway__heading > [data-ui-tooltip] i {
    font-size: 12px;
    text-shadow: var(--SGSP-ts-69);
}
.esgst-gv-popout .giveaway__heading [data-draggable-id].esgst-gc:not(.esgst-gc-rating) i {
    text-shadow: unset;
}
.esgst-gv-popout .esgst-giveaway-panel [data-draggable-id] {
    opacity: 1!important;
    display: inline-block;
    line-height: 26px;
}
.esgst-gv-popout .esgst-giveaway-panel [data-draggable-id="gb"], .esgst-gv-popout .esgst-giveaway-panel [data-draggable-id="gf"], .esgst-gv-popout .esgst-giveaway-panel [data-draggable-id="gt"], .esgst-gv-popout .esgst-giveaway-panel [data-draggable-id="egh"], .esgst-gv-popout .esgst-giveaway-panel [data-draggable-id="search"], .esgst-gv-popout .esgst-giveaway-panel [data-draggable-id="hideGame"], .esgst-gv-popout .esgst-giveaway-panel [data-draggable-id="steam"] {
    background-image: var(--SGSP-silver-buttons-bg-color)!important;
    border: 1px solid hsla(0, 0%, 0%, 0.7)!important;
    border-color: var(--SGSP-silver-buttons-border-color)!important;
    box-shadow: none!important;
    color: var(--SGSP-silver-buttons-txt-color)!important;
    cursor: pointer;
    filter: brightness(0.8) contrast(1.1);
    padding: 0 6px;
    width: 14px;
}
.esgst-gv-popout .esgst-giveaway-panel [data-draggable-id="hideGame"] {
    font-size: 14px;
}
.esgst-gv-popout .esgst-giveaway-panel [data-draggable-id="gf"] i {
    filter: brightness(1.3);
    height: 16px;
    width: 14px;
}
.esgst-giveaway-panel [data-draggable-id="copies"].esgst-gch-highlight {
    background-image: none!important;
    background-color: hsl(60, 1%, 21%);
    border: 1px solid!important;
}
.esgst-gv-popout .esgst-giveaway-panel [data-draggable-id="points"], .esgst-gv-popout .esgst-giveaway-panel [data-draggable-id="name"], .esgst-gv-popout .esgst-giveaway-panel [data-draggable-id="comments"], .esgst-gv-popout .esgst-giveaway-panel [data-draggable-id="entries"] {
    background-image: linear-gradient(hsla(0, 0%, 100%, 0.1) 0%, hsla(0, 0%, 45%, 0.1) 100%)!important;
}
.esgst-gv-popout .esgst-giveaway-panel [data-draggable-id="points"] {
    color: hsl(0, 0%, 60%)!important;
}
.esgst-gv-popout .esgst-giveaway-panel [data-draggable-id="points"], .esgst-gv-popout .esgst-giveaway-panel [data-draggable-id="copies"] {
    padding: 0 4px;
}
.esgst-gv-popout .esgst-giveaway-panel [data-draggable-id="name"], .esgst-gv-popout .esgst-giveaway-panel [data-draggable-id="comments"], .esgst-gv-popout .esgst-giveaway-panel [data-draggable-id="entries"] {
    padding: 0 6px;
}
.esgst-giveaway-panel .esgst-gc-rating[data-draggable-id] {
    border-color: hsl(0, 0%, 0%)!important;
}
.esgst-gc-panel > * {
    margin: 0 3px!important;
}
.esgst-gv-popout .esgst-gc-panel > * {
    color: var(--SGSP-general-txt-color);
    margin: 0 2px!important;
}
.esgst-gc-panel [data-draggable-id], .giveaway__heading > .esgst-mm-checkbox, .giveaway__row-inner-wrap > .esgst-mm-checkbox, .esgst-sm-colors input[type=color] {
    vertical-align: middle;
}
.esgst-gv-popout .esgst-gc-panel [data-draggable-id="name"] {
    overflow: unset;
}
.esgst-gc-panel [data-draggable-id]:not(.esgst-gc) i {
    text-shadow: var(--SGSP-ts-6);
}
.esgst-gc-panel [data-draggable-id].esgst-gc-giveawayInfo i {
    font-size: 12px;
    vertical-align: baseline;
}
.esgst-gc-panel [data-draggable-id]:not(.esgst-gc) {
    display: inline-block;
    margin: 2px!important;
}
.esgst-gc-panel [data-draggable-id="sgTools"] > .form__submit-button {
    padding: 1px 4px!important;
    line-height: 15px;
    font-size: 12px;
}
.esgst-gv-popout .esgst-gc-panel [data-draggable-id]:not(.esgst-gc), .esgst-gv-popout .esgst-gc-panel [data-draggable-id="sgTools"] > .form__submit-button {
    line-height: 13px;
}
.esgst-gv-popout .esgst-gc-panel [data-draggable-id].esgst-gc-giveawayInfo i {
    font-size: 11px;
}
.esgst-gc-panel [data-draggable-id="group"]:not(.featured__column--group), .esgst-gc-panel [data-draggable-id="whitelist"]:not(.featured__column--whitelist), .esgst-gc-panel [data-draggable-id="regionRestricted"], .esgst-gc-panel [data-draggable-id="inviteOnly"]:not(.featured__column--invite-only), .esgst-giveaway-panel [data-draggable-id="sgTools"], .giveaway__columns [data-draggable-id="sgTools"] {
    padding: 0!important;
    background: none;
    background-image: none!important;
    border: none!important;
    box-shadow: none!important;
}
.esgst-gc-panel [data-draggable-id="group"].featured__column--group, .esgst-gc-panel [data-draggable-id="whitelist"].featured__column--whitelist, .esgst-gc-panel [data-draggable-id="inviteOnly"].featured__column--invite-only, .esgst-gc-panel [data-draggable-id="level"].featured__column--contributor-level {
    padding: 1px 4px!important;
    border: 1px solid hsl(0, 0%, 0%)!important;
    border-radius: 4px;
}
.esgst-gc-panel [data-draggable-id="level"] {
    line-height: 15px!important;
}
.esgst-gc-panel [data-draggable-id="gwr"], .esgst-gc-panel [data-draggable-id="gwc"], .esgst-gc-panel [data-draggable-id="gptw"], .esgst-gc-panel [data-draggable-id="ttec"], .esgst-gv-popout .esgst-gc-panel [data-draggable-id="time"], .esgst-gc-panel [data-draggable-id="startTime"], .esgst-gc-panel [data-draggable-id="endTime"], .esgst-gc-panel [data-draggable-id="entries"], .esgst-gc-panel [data-draggable-id="comments"], .esgst-gc-panel [data-draggable-id="winners"] {
    padding: 1px 4px!important;
    border-radius: 4px;
    width: auto!important;
    background-image: linear-gradient(hsl(60, 2%, 20%) 0%, hsl(60, 4%, 15%) 100%)!important;
    border: 1px solid hsl(0, 0%, 0%)!important;
    box-shadow: 1px 1px 0 hsla(60, 1%, 27%, 0.25) inset!important;
}
.esgst-gc-panel [data-draggable-id="startTime"] [data-draggable-id="ut"], .esgst-gc-panel [data-draggable-id="winners"] [data-draggable-id="ut"] {
    margin: 0 0 0 5px!important;
    position: relative;
    height: 14px;
    bottom: 2px;
}
.esgst-gc-panel [data-draggable-id="level"]:not(.featured__column--contributor-level) {
    padding: 0 4px!important;
    border-radius: 3px;
}
.esgst-gc-panel [data-draggable-id="gp"] .btn_action.grey, .esgst-gc-panel [data-draggable-id="gp"] .btn_action.red {
    filter: unset;
    line-height: 13px!important;
    padding: 0!important;
    min-width: unset!important;
}
.esgst-gc-panel [data-draggable-id="gp"] i {
    margin: 3px 0 1px 2px;
}
.esgst-gc-panel [data-draggable-id="elgb"] .btn_action {
    font-size: 11px;
    line-height: 13px!important;
    margin: 0;
    padding: 0 4px 2px 4px;
    width: auto;
}
.esgst-gc-panel [data-draggable-id="elgb"] .btn_action i {
    font-size: 10px;
}
.esgst-gc-panel [data-draggable-id="gf"] i, .esgst-gc-panel [data-draggable-id="elgb"] .btn_action i {
    position: relative;
    bottom: 1px;
}
.esgst-gc-panel [data-draggable-id="regionRestricted"], .esgst-gc-panel [data-draggable-id="inviteOnly"] {
    color: hsla(0, 0%, 65%, 0.95)!important;
}
.esgst-gv-popout .giveaway__links {
    display: flex;
    justify-content: center;
    min-height: 16px;
}
.esgst-gv-popout .esgst-giveaway-links > *:not(:last-child) {
    margin-right: 5px!important;
}
.esgst-giveaway-links span, .esgst-giveaway-links span.giveaway__heading__thin, .esgst-giveaway-links .esgst-faded, .esgst-giveaway-links [data-draggable-id="hideGame"], .esgst-giveaway-links .btn_action.grey i {
    border: none;
    box-shadow: none!important;
    color: hsla(60, 2%, 45%, 0.95);
    opacity: 1;
}
.esgst-giveaway-links span.giveaway__heading__thin {
    font-size: 12px;
}
.esgst-giveaway-links [data-draggable-id="entries"] span, .esgst-giveaway-links [data-draggable-id="comments"] span {
    border-bottom: 1px dotted;
    box-shadow: 0 1px 0 hsl(0, 0%, 24%)!important;
    color: var(--SGSP-link-txt-color);
}
.esgst-gv-popout .esgst-giveaway-links .esgst-tag-button, .esgst-gv-popout .esgst-giveaway-links .esgst-tag-button:hover {
    margin-left: 0;
    opacity: 1!important;
    filter: unset!important;
}
.esgst-gv-popout .esgst-giveaway-links .esgst-tag-button i {
    margin-bottom: -2px!important;
}
.esgst-giveaway-links > [data-draggable-id]:not(:last-child) {
    margin: 0 8px 0 0;
}
.esgst-giveaway-links [data-draggable-id].esgst-gc {
    margin: 0 2px!important;
}
.esgst-giveaway-links .giveaway__heading [data-draggable-id].esgst-gc i {
    font-size: 11px;
}
.esgst-giveaway-links [data-draggable-id] .btn_action, .esgst-giveaway-links [data-draggable-id] .btn_action:hover, .esgst-giveaway-links [data-draggable-id] .btn_action:active, .giveaway__links .esgst-button, .giveaway__links .esgst-button:hover, .giveaway__links .esgst-button:active {
    background: none!important;
    border: none!important;
    box-shadow: none!important;
    font-size: 13px;
    font-weight: 900;
    line-height: 14px!important;
}
.esgst-giveaway-links .btn_action.green span, .esgst-giveaway-links .btn_action.green i, .esgst-giveaway-links .esgst-button.form__submit-button, .esgst-giveaway-links .esgst-button.form__submit-button i {
    color: var(--SGSP-green-icons-txt-color)!important;
}
.esgst-giveaway-links .btn_action.yellow span, .esgst-giveaway-links .btn_action.yellow i, .esgst-giveaway-links .esgst-button.sidebar__entry-delete, .esgst-giveaway-links .esgst-button.sidebar__entry-delete i {
    color: var(--SGSP-yellow-icons-txt-color)!important;
}
.esgst-giveaway-links .btn_action.red span, .esgst-giveaway-links .btn_action.red i, .esgst-giveaway-links .esgst-button.sidebar__error, .esgst-giveaway-links .esgst-button.sidebar__error i {
    color: var(--SGSP-red-icons-txt-color)!important;
}
.esgst-gv-popout .esgst-giveaway-links [data-draggable-id="gb"] i, .esgst-gv-popout .giveaway__heading [data-draggable-id="gb"] i {
    font-weight: 600;
}
.esgst-popup-layer .esgst-popup .esgst-popup-scrollable > div > .table, .esgst-ugd-table {
    background-color: var(--SGSP-content-bg-color);
    border: 1px solid var(--SGSP-content-border-color);
    border-radius: 4px;
    padding: 5px 10px;
}
.esgst-element-ordering-container strong {
    color: var(--SGSP-link-txt-color);
    line-height: 32px;
}
.esgst-element-ordering-box {
    margin: 5px 0 15px;
}
.giveaway__row-outer-wrap:not(.esgst-gv-container)[style*="background-color"], .table__row-outer-wrap[style*="background-color"] {
    border-radius: 4px;
    border: none!important;
    box-shadow: 0 0 0 1px var(--SGSP-content-inner-border-color)!important;
    margin: 5px;
    padding: 11px 5px;
}
.esgst-popup-layer .page__heading ~ div:not(.sidebar__search-container):not(.esgst-ugd-table):not(.notification), .esgst-popup-layer .page_heading ~ div:not(.sidebar__search-container), .esgst-sync-options > .form__rows, .esgst-settings-menu-feature .form__rows {
    background-color: unset!important;
    background-image: none;
    border: none!important;
    box-shadow: none!important;
}
.esgst-menu-split > *, .esgst-popup-heading + .esgst-popup-description.esgst-text-left {
    background-image: none;
    border-radius: 4px;
    margin-bottom: 8px;
    margin-top: 0;
    margin-right: 10px;
    padding: 5px 10px;
    text-shadow: var(--SGSP-ts-45);
}
.esgst-popup-layer .sidebar__search-container {
    margin: 10px 0!important;
}
.esgst-sync-area .notification {
    margin-bottom: 10px;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
}
.esgst-panel-flexbox .esgst-giveaway-links {
    height: auto;
}
.esgst-panel-flexbox .esgst-giveaway-links [data-draggable-id="ggl"] {
    margin: 0;
}
.esgst-panel-flexbox .esgst-giveaway-links [data-draggable-id="ggl"] > * {
    line-height: 16px;
    padding-top: 0;
}
.esgst-gv-box .esgst-gv-icons [data-draggable-id="ggl"], .esgst-gv-popout .giveaway__links [data-draggable-id="ggl"] {
    display: none;
}
.esgst-gv-popout .giveaway__heading > [data-draggable-id]:not(:first-child):not([data-draggable-id="ggl"]):not([data-draggable-id="name"]), .esgst-gv-popout .giveaway__heading [data-lightbox-id], .esgst-gv-popout .giveaway__heading > [data-ui-tooltip] {
    margin: 1px 0 1px 3px!important;
}
.esgst-gv-popout .giveaway__heading > [data-draggable-id="ggl"] {
    display: flex!important;
    height: auto;
    margin: 1px 0!important;
    overflow: hidden;
    padding: 0 2px 2px!important;
    width: 170px;
}
.esgst-glh-highlight {
    border: 1px solid #000!important;
    filter: unset;
}
.esgst-glh-highlight, .esgst-gv-icons > *:not(.esgst-button-set).esgst-glh-highlight {
    text-shadow: none!important;
}
.esgst-plt .sidebar__navigation {
    margin-bottom: 5px;
}
.esgst-popup-scrollable {
    padding-right: 5px!important;
    margin-right: -7px;
}
.esgst-gv-container[style*="background-color"] {
    background: linear-gradient(#0d0d09 0%, #0d0d09 100%)!important;
}
.featured__outer-wrap.featured__outer-wrap--giveaway[style^="background-color"][style*="!important"][style$="background-image: none;"] {
    padding: 0;
}
.featured__outer-wrap.featured__outer-wrap--giveaway[style^="background-color"][style*="!important"][style$="background-image: none;"] .featured__inner-wrap {
    background-image: linear-gradient(hsla(0, 0%, 0%, 0) 0%, hsla(0,0%,7.5%,1) 100%);
    padding: 25px;
}
.esgst-gv-box.is-faded:not(:hover) .esgst-gv-popout, .sidebar .esgst-adots, .sidebar {
    scrollbar-width: none;
    overscroll-behavior: contain;
}
.esgst-version-row div {
    max-width: 215px;
    word-break: break-all;
    font-size: 11px;
}
.esgst-version-row div strong {
    font-size: 12px;
}
.esgst-version-row .esgst-header-menu-description i {
    font-size: 14px;
}
.esgst-ns .sidebar__navigation {
    max-width: 196px;
}
.sidebar__subscribed .sidebar__navigation__item:not(.is-selected) i, .sidebar .sidebar__navigation__item:not(.is-selected) .esgst-tds-button i {
    color: var(--SGSP-sidebar-link-txt-color)!important;
}
.sidebar__unsubscribed .sidebar__navigation__item:not(.is-selected) i {
    color: inherit!important;
    opacity: 0.7;
}
.esgst-popup div[style*="border: 1px solid #ccc"] {
    background-color: var(--SGSP-input-bg-color)!important;
    border-color: var(--SGSP-input-border-color)!important;
    text-shadow: var(--SGSP-ts-29);
}
.esgst-popup div[style*="border: 1px solid #ccc"] > i {
    border-left-color: var(--SGSP-general-txt-color)!important;
}
.page__heading__button.page__heading__button--green.page__heading__button--is-dropdown.is-selected .page__heading__absolute-dropdown {
    top: 44px;
}
.esgst-tds-popout {
    background-color: hsla(0, 0%, 12%, 1);
    border: solid 1px var(--SGSP-content-border-color);
}
.esgst-tds-item {
    border-radius: 4px;
    border: 1px solid var(--SGSP-content-inner-border-color);
    background-color: var(--SGSP-content-inner-bg-color);
}
.esgst-tds-item-active {
    background-color: var(--esgst-discussion-highlight-bg-color);
}
.esgst-tds-item-name {
    color: var(--SGSP-sidebar-link-txt-color);
    text-shadow: var(--SGSP-ts-53);
}
.esgst-tds-item-actions i {
    text-shadow: var(--SGSP-ts-73);
}
.esgst-tds-item .esgst-tds-item-count {
    font-weight: bold;
    text-shadow: var(--SGSP-ts-76);
}
.esgst-tds-button.page_heading_btn {
    margin: 0;
    padding: 0 0 0 8px;
}
.page__heading .esgst-tds-button.page_heading_btn {
    margin: 0 5px 0 0;
    padding: 5px 10px;
}
.table__row-inner-wrap .esgst-tds-button i {
    font-size: 13px;
}
.esgst-ns .sidebar__navigation__item.esgst-tds-sidebar-item {
    max-width: unset!important;
}
.esgst-adots .esgst-tds-button i {
    font-size: 12px;
}
.esgst-adots .esgst-tds-button {
    margin-left: 0!important;
}
.sidebar .esgst-adots .esgst-tds-button, .esgst-oadd.esgst-adots .esgst-tds-button {
    margin: 0!important;
}
.esgst-tds-button.page_heading_btn i {
    color: inherit;
    font-size: inherit;
}
.esgst-popup .esgst-popup-scrollable .comments, .esgst-popup .esgst-popup-scrollable .page__description__display-state > .markdown--resize-body, .esgst-popup .esgst-menu-layer > .esgst-menu-split {
    background-color: var(--SGSP-content-bg-color);
    background-image: none;
    border: 1px solid var(--SGSP-content-border-color);
    border-radius: 4px;
}
.esgst-popup .esgst-popup-scrollable .page__description__display-state > .markdown--resize-body {
    padding: 5px 10px;
}
.esgst-popup .esgst-popup-scrollable .comments .comment__parent {
    padding-left: 10px;
}
.esgst-popup .esgst-popup-scrollable .comments .comment__parent ~ .comment__children {
    padding-right: 10px;
}
.esgst-popup .esgst-popup-scrollable .esgst-cfh-panel {
    z-index: 999;
}
.esgst-popup .esgst-popup-heading + .esgst-popup-description > .page__heading {
    margin-bottom: 5px!important;
    min-width: 783px;
}
.esgst-popup .esgst-popup-description > .page__heading + .esgst-button-set, .esgst-popup .esgst-popup-description > .page__heading + .esgst-button-set + .esgst-button-set {
    float: left;
    margin: 5px 5px 5px 0!important;
}
.comment__username--op .esgst-wbh-highlight, .esgst-gv-creator .esgst-wbh-highlight-whitelisted, .esgst-gv-creator .esgst-wbh-highlight-blacklisted {
    margin: 0 2px;
    vertical-align: baseline;
}
.esgst-button-set > .btn_action > i + span:not(:empty) {
    margin-left: 3px;
}
.esgst-menu-layer .esgst-button-group {
    margin: 0!important;
    padding: 8px 0;
}
.esgst-menu-layer .esgst-switch-input-large {
    margin: 2px 5px 2px 0;
}
.esgst-popup .fa-question-circle, .esgst-popup .icon_to_clipboard {
    margin-left: 3px;
    vertical-align: baseline;
}
.esgst-menu-layer .esgst-form-heading-number + .icon_to_clipboard {
    margin-left: unset;
}
.esgst-menu-layer .esgst-sm-colors strong {
    line-height: 28px;
    position: relative;
    top: 5px;
}
.esgst-menu-layer .esgst-sm-colors strong:first-child {
    line-height: 18px;
    top: 0;
}
.esgst-menu-layer .esgst-toggle-switch-container + .esgst-button-set {
    margin-top: 8px;
}
.esgst-toggle-switch {
    vertical-align: text-top;
}
.esgst-toggle-switch-container select, .esgst-switch-input {
    height: 20px;
    padding: 0;
}
.esgst-popup .esgst-tag.global__image-outer-wrap.author_avatar.is_icon {
    margin-bottom: 1px;
}
.esgst-gm-section .pinned-giveaways__outer-wrap {
    box-shadow: none;
}
.esgst-button + .esgst-notification-bar.notification--margin-top-small {
    margin-top: 5px!important;
}
.esgst-gm-section .esgst-button:not(:nth-of-type(2)) {
    margin: 5px 0 5px 5px;
}
.esgst-gv-icons [data-draggable-id="elgb"]:not(.esgst-button-set):not(.esgst-button-container) {
    border: none!important;
    box-shadow: 0 0 0 1px #000, 0 0 0 1px #000!important;
    display: block;
    line-height: 14px;
    margin: 0;
    padding: 0 4px 2px 3px!important;
    text-shadow: var(--SGSP-ts-4)!important;
    width: 12px;
}
.esgst-gv-icons [data-draggable-id="elgb"]:not(.esgst-button-set):not(.esgst-button-container) i {
    line-height: 11.1px;
    padding: 0px 2px;
}
body .esgst-button-container {
    background-image: none!important;
    border: 0;
    box-shadow: none!important;
    padding: 0!important;
}
.giveaway__columns:not(.esgst-gv-icons) .esgst-button-container {
    margin-left: unset;
}
.esgst-giveaway-panel > *:not(:last-child) {
    margin: 0 5px 0 0;
}
.esgst-sm-additional-option >* input[type="color"] {
    border: 1px solid;
    padding: 0 2px;
    max-width: 50px;
}
.esgst-sm-additional-option >* input[type="color"] + input[type="number"] {
    border: 1px solid;
    max-width: 50px;
    padding: 1px 0 2px 5px;
}
.esgst-sm-additional-option >* input[type="color"] + input[type="number"] + .form__saving-button {
    border-radius: 4px;
    line-height: 21px;
    padding: 0 15px;
}
.esgst-element-ordering-container .esgst-button {
    float: right;
}
.esgst-notification-bar.notification:empty {
    display: none;
}
.giveaway__heading .esgst-button-container.esgst-elgb-button i {
    font-size: 12px;
}
.giveaway__heading .esgst-button-container.esgst-elgb-button {
    display: inline-block;
    font-size: 12px;
    line-height: 16px;
    margin: 0 5px;
    vertical-align: middle;
}
.esgst-gv-popout .esgst-panel-flexbox + div .esgst-button-container.esgst-elgb-button {
    margin-top: 5px;
    line-height: 26px;
}
.esgst-ns.sidebar .esgst-button {
    width: 174px!important;
}
.esgst-sync-options .esgst-button-group {
    margin: 0!important;
    padding: 8px 0;
}
.esgst-sync-options .form__row__indent > div {
    margin-bottom: 3px;
}
div[style*="margin-top: 25px"], div[style*="padding-top: 35px"] {
    margin: 0 0 8px!important;
    height: auto!important;
    display: block!important;
}
div[style*="padding-top: 35px"] {
    margin: 15px 0 8px!important;
    padding: 0!important;
}
div[style*="padding-bottom: 25px"]:not(.notification) {
    background-color: unset!important;
    border: none!important;
    box-shadow: none!important;
    margin-top: 8px;
    padding: 0!important;
}
div[style*="padding-bottom: 25px"]:not(.notification) > div[data-ref="vm-preloader"] {
    height: auto!important;
}
div[style*="padding-bottom: 35px"] {
    margin: 8px 0!important;
    padding: 0!important;
}
[amp-version], html[stylus-iframe] {
    background-color: unset!important;
}
[id*="div-gpt-ad"] {
    margin: auto;
    height: auto!important;
}
.suspicion_none {
    color: hsl(0, 0%, 25%);
}
.suspicion_low {
    color: hsl(0, 0%, 35%);
}
.suspicion_med {
    color: hsl(0, 0%, 50%);
}
.suspicion_high, .suspicion__content .fa, .suspicion__content strong {
    color: var(--SGSP-general-txt-color);
}
.suspicion__content {
    background-image: linear-gradient(hsl(0, 0%, 17%) 0%, hsl(0, 0%, 17%) 100%);
    border: none;
    box-shadow: 0 0 0 1px #000, 0 0 10px 2px hsla(0, 0%, 0%, 0.8);
    color: hsla(0, 0%, 65%, 0.75);
    text-shadow: var(--SGSP-ts-20);
}
.suspicion__content hr:not(.split) {
    border-top: 1px solid var(--SGSP-separator-dark-color);
    border-bottom: 1px solid var(--SGSP-separator-light-color);
    border-left: none;
    border-right: none;
}
.suspicion__content hr.split {
    background-color: var(--SGSP-separator-light-color);
    border: none;
    box-shadow: 0 0 0 1px var(--SGSP-separator-dark-color);
    padding: 2px;
    margin-left: 1px;
    margin-right: 1px;
}
.suspicion__content a, .suspicion__content a.fa, .suspicion__content a:hover, .suspicion__content a.fa:hover {
    color: var(--SGSP-link-txt-color)!important;
}
.suspicion__content a.local, .suspicion__content a.local:hover {
    color: #AF4AD4!important;
}
.suspicion__content a.local:hover, .suspicion__content a:hover, .suspicion__content a.fa:hover, .block_header_link:hover:not(.esgst-radb-button), .block_header_link:hover i {
    filter: var(--SGSP-nav-button-hover-brightness);
}
.suspicion__content .form__checkbox {
    border-bottom: none!important;
}
header.fixed ~ .page__outer-wrap .sidebar:not(.sidebar--wide) + div > .page__heading + .pagination + .table__heading {
    margin: 5px 0 -9px;
    border: 1px solid hsla(0, 0%, 0%, 0.6)!important;
}
header.fixed ~ .page__outer-wrap .sidebar:not(.sidebar--wide) + div > div:nth-child(3):not(.page__heading):not(.table):not(.table__heading):not(.poll), header.fixed ~ .page__outer-wrap .sidebar--wide + div > div:nth-child(4):not(.esgst-fh):not(.pagination):not(.comment--submit) {
    margin-bottom: auto!important;
    height: calc(100% - 68px);
    padding: 15px 10px 0 20px!important;
}
header.fixed ~ .page__outer-wrap .sidebar--wide + div > div:nth-child(4):not(.pagination):not(.comment--submit) {
    height: calc(100% - 443px)!important;
}
header.fixed ~ .page__outer-wrap .sidebar:not(.sidebar--wide) + div > div[style*="clear"]:nth-child(3) .giveaway__row-outer-wrap, header.fixed ~ .page__outer-wrap .sidebar--wide + div > div[style*="clear"]:nth-child(4):not(.esgst-fh) .giveaway__row-outer-wrap {
    max-width: 13.4%;
    margin-right: 0.2%;
    margin-left: 0.5%;
}
header.fixed ~ .page__outer-wrap .sidebar--wide + div .pinned-giveaways__outer-wrap[style*="clear"] .giveaway__row-outer-wrap {
    max-width: 13.4%;
    margin-right: 3%;
    margin-left: 3.5%;
}
.hover-panel__outer-wrap {
    background-color: var(--SGSP-body-bg-color);
    border: 1px solid #000;
}
.align-button-container-top .form__add-answer-button {
    margin-right: 2px;
}
.user__whitened .fa, .user__blackened .fa {
    margin: 0 0 1px!important;
    font: normal normal normal 13px/1.3 FontAwesome;
    line-height: unset;
}
a.user__whitened, a.user__blackened, .comment__username:not(.comment__username--op) a.user__whitened, .comment__username:not(.comment__username--op) a.user__blackened {
    border-bottom: none;
    box-shadow: 0 0 0 1px black!important;
    padding: 2px 5px!important;
    line-height: 18px!important;
    text-shadow: var(--SGSP-ts-43)!important;
}
.giveaway__column--width-fill.text-right .user__whitened, .giveaway__column--width-fill.text-right .user__blackened {
    padding: 2px 5px 0!important;
    line-height: 14px!important;
}
#sub_debugging + .form__submit-button {
    margin-bottom: 20px;
}
.sidebar__shortcut-inner-wrap > .sidebar__entry-loading:not(.sidebar__search-container):not(:active) + form[style*="background-image"] {
    background-image: none!important;
    border: none!important;
}
.giveaway__columns--badges .giveaway__column--new, .giveaway__columns--badges .giveaway__column--wish {
    border-color: #000!important;
    filter: saturate(2) opacity(0.8);
}
.nav__buton--is-dropdown[href*="ribbit"] {
    border-radius: 4px 0 0 4px;
}
.comment__role-name {
    color: #c3793f;
}
@supports (not (-ms-ime-align: auto)) {
    .nav__button-container.nav__button-container--notification.nav__button-container--active {
        z-index: 1;
    }
    .nav_btn:hover:not(.is_selected) .message_count, .nav__button:hover .nav__notification {
        filter: brightness(1) saturate(0.55)!important;
    }
}
.touhou_info_container_fixed .__mh_bookmark_button, .touhou_info_container .__mh_bookmark_button {
    display: none;
}
.touhou_info_container {
    background-image: var(--SGSP-header-footer-bg-color);
    border-color: var(--SGSP-header-footer-border-color)!important;
    border-top: none!important;
    color: hsla(0, 0%, 80%, 0.8)!important;
    margin-top: 1px;
    text-shadow: var(--SGSP-ts-43)!important;
}
.touhou_info_container .nav__left-container, .touhou_info_container .nav__right-container {
    z-index: 999!important;
}
.page__heading__breadcrumbs > [href*="winners"] + form {
    display: flex;
    height: 22px;
}
#DTEP_SteamApiKey {
    margin: 0 5px 0 15px;
    width: auto!important;
}
#DTEP_SteamApiKey + input {
    padding: 0 10px;
    width: 100px;
}
.DTEP_ACHIEVEMENTS + a > [style*="color"] {
    text-decoration: none!important;
}
h3.sidebar__heading > a[style*="color: #4B72D4"] {
    color: var(--SGSP-sidebar-link-txt-color)!important;
}
.popup[class*="popup--Table"] .popup__heading {
    color: var(--SGSP-headings-txt-color)!important;
}
.popup[class*="popup--Table"] p[style*="display: grid"] {
    display: flex!important;
    justify-content: center;
}
.popup[class*="popup--Table"], .popup[class*="popup--Table"] textarea {
    overscroll-behavior: contain;
    resize: none!important;
    width: 800px!important;
}
.popup[class*="popup--Table"] {
    padding: 35px;
}
button#AddCheckboxes ~ p {
    line-height: 5px;
}
input#SkipEnded {
    margin: 5px;
}
#black-background {
    background-color: var(--esgst-modal-bg-color);
}
#dlg-box, #SGLCdlg {
    background-color: var(--SGSP-body-bg-color);
    box-shadow: 0 0 6px 2px hsla(0, 0%, 0%, 0.8)!important;
    border: solid 1px var(--SGSP-content-border-color);
    border-radius: 4px;
    color: var(--SGSP-general-txt-color);
    padding: 15px 35px!important;
    text-shadow: var(--SGSP-ts-29);
}
#dlg-box #closeRCE i, #SGLCdlg #closeSGLC i {
    color: var(--SGSP-general-txt-color)!important;
    cursor: pointer;
    font-size: 16px!important;
    text-shadow: var(--SGSP-ts-7);
}
#dlg-header, #SGLCdlg-header {
    background-color: var(--SGSP-tableheading-bg-color);
    border-radius: 3px;
    border: 1px solid var(--SGSP-tableheading-border-color);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    color: var(--SGSP-headings-txt-color);
    font-weight: 700;
    margin: 10px 10px -1px 10px;
}
#dlg-body, #SGLCdlg-body {
    background-color: var(--SGSP-content-bg-color);
    border: 1px solid var(--SGSP-content-border-color);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    color: var(--SGSP-general-txt-color)!important;
    padding: 10px;
}
#dlg-body {
    padding-bottom: 30px;
}
#dlg-body .RCE-button {
    right: 52px;
    position: absolute;
}
#dlg-body input, #dlg-body .RCE-button, #SGLCdlg-body .SGLCdlg-button {
    color: var(--SGSP-silver-buttons-txt-color)!important;
    line-height: 15px!important;
    margin-top: 3px!important;
    margin-bottom: 3px!important;
}
#SGLCdlg-body input, #SGLCdlg-body #SGLCdlg-progress, #SGLCdlg-output, #SGLCdlg-output:focus {
    color: var(--SGSP-general-txt-color)!important;
}
#dlg-body .RCE-button, #SGLCdlg-body .SGLCdlg-button {
    box-shadow: none;
    background-image: var(--SGSP-silver-buttons-bg-color);
    border: 1px solid hsla(0, 0%, 0%, 0.9)!important;
    border-color: var(--SGSP-silver-buttons-border-color)!important;
    border-radius: 4px;
    cursor: pointer;
    font-size: 13px;
    font-weight: 700;
    padding: 5px 11px;
    text-shadow: var(--SGSP-ts-29);
    text-transform: none;
}
.SGLCdlg-button:disabled {
    opacity: 1;
}
#SGLCdlg-body .SGLCdlg-button:not(#SGLCdlg-progress) {
    width: 105px;
}
#dlg-body .RCE-button:active, #SGLCdlg-body .SGLCdlg-button:active {
    left: unset;
    top: unset;
}
#SGLCdlg-body #SGLCdlg-progress {
    background-image: none;
    box-shadow: none;
    background-color: var(--SGSP-input-bg-color);
    border-color: var(--SGSP-input-border-color);
    border-radius: 4px;
    cursor: default;
    height: 50px;
    text-shadow: var(--SGSP-ts-29);
}
#SGLCdlg-body #SGLCdlg-progress i {
    margin-right: 5px;
    vertical-align: baseline;
}
#dlg-body input[type="color"] {
    padding: 0 2px;
    margin: 5px 0 3px 0!important;
    width: 25px!important;
}
#SGLCdlg-body label {
    position: relative;
    bottom: 8px;
}
#SGLCdlg-output {
    background-color: hsla(0, 0%, 0%, 0.05)!important;
    border-color: hsla(0, 0%, 0%, 0.35) hsla(0, 0%, 100%, 0.05) hsla(0, 0%, 100%, 0.05) hsla(0, 0%, 0%, 0.35)!important;
    border-radius: 4px;
    box-shadow: 1px 1px 6px hsla(0, 0%, 0%, 0.2) inset!important;
    margin: 0;
    padding: 10px 20px;
}
#dlg-body h2 > a, #SGLCdlg-body h2 > a {
    color: var(--SGSP-link-txt-color)!important;
    font-size: 15px!important;
}
#dlg-box label[for*="Theme"] > a {
    color: var(--SGSP-link-txt-color)!important;
}
#RCE-IgnoredColor + .RCE-button + .RCE-button {
    font-size: 13px!important;
    margin-top: 35px!important;
    width: unset!important;
}
#black-background[style="display: block;"] + #dlg-box + #black-background {
    display: block;
    background-color: transparent;
}
#dlg-box #dlg-body label[for*="RCE"]:not([for*="Store"]):not([for*="Bundle"]) {
    display: inline-block;
    vertical-align: middle;
    width: 352px;
}
#dlg-body label {
    line-height: 15px;
    margin-bottom: unset;
}
#RCE-IgnoredColor + .RCE-button + .RCE-button + br + div {
    margin-top: 45px;
}
#RCE-IgnoredColor + .RCE-button + .RCE-button + br + div + div {
    margin-bottom: 8px;
    margin-top: 2px;
}
#RCE-IgnoredColor + .RCE-button + .RCE-button + br + div + div, #RCE-IgnoredColor + .RCE-button + .RCE-button + br + div {
    display: flex;
    justify-content: space-between;
}
#RCE-IgnoredColor + .RCE-button + .RCE-button + br ~ div > input {
    height: 14px;
    margin-top: 0!important;
    width: 14px!important;
}
#dlg-body label[for*="Theme"] {
    display: flex;
    margin-bottom: -14px;
}
#dlg-body label[for*="Theme"] + input {
    left: 444px;
    position: relative;
    height: 14px;
    width: 14px!important;
    margin: 0!important;
}
#dlg-body h2 > a {
    position: relative;
    top: 23px;
}
#whitelist_ownership_checker.btnv6_blue_hoverfade {
    margin-right: 0.2em;
}
.wiki-gh-content .wiki-rightbar {
    display: none;
}
.wiki-gh-content ::marker {
    color: var(--SGSP-list-txt-color);
}
.wiki-gh-content .jumbotron {
    background-color: var(--SGSP-content-inner-bg-color);
    border: 1px solid var(--SGSP-content-inner-border-color);
    border-radius: 4px;
    padding: 1.5rem;
}
.wiki-gh-content .Box--condensed .Box-header {
    background: none;
    border: none;
}
.wiki-gh-content .jumbotron > h1:first-of-type {
    margin-top: -10px;
}
.wiki-gh-content table, .wiki-gh-content pre {
    margin: 10px 0;
}
.wiki-gh-content .markdown-body blockquote {
    color: var(--SGSP-quote-txt-color);
    border-left: 3px solid var(--SGSP-quote-border-color);
}
.wiki-gh-content .markdown-body blockquote:before {
    font-family: Arial, sans-serif;
    top: 28px;
}
.wiki-gh-content br {
    line-height: 24px;
}
.wiki-gh-content a + img, .wiki-gh-content a > img[alt="external link"] {
    background-color: unset!important;
    border: none;
    border-radius: 0;
    filter: unset;
    padding: 0;
}
.wiki-gh-content p {
    margin-bottom: 10px!important;
}
.wiki-gh-content .markdown-body code, .wiki-gh-content .markdown-body tt {
    background-color: rgba(255, 255, 255, 0.07);
    white-space: unset!important;
}
.wiki-gh-content .markdown-body img {
    background-color: var(--SGSP-image-bg-color);
}
.wiki-gh-content img {
    margin-top: unset;
}
.wiki-gh-content .markdown-body hr {
    background-color: var(--SGSP-separator-light-color);
}
.wiki-gh-content .markdown-body h1, .wiki-gh-content .markdown-body h2 {
    border-bottom: 1px solid var(--SGSP-separator-light-color)!important;
}
.wiki-gh-content .markdown-body pre, .wiki-gh-content .Box, .wiki-gh-content .bg-gray {
    background-color: var(--SGSP-code-bg-color)!important;
    border-color: var(--SGSP-code-border-color);
}
.wiki-gh-content .markdown-body td img, .wiki-gh-content .markdown td img {
    max-width: 95%;
}
#wiki-content ol {
    list-style: decimal;
}
#wiki-content ul {
    list-style: disc;
}
#wiki-content ul ul, #wiki-content ol ul {
    list-style-type: circle;
}
#wiki-content ol ol, #wiki-content ul ol {
    list-style-type: lower-roman;
}
#wiki-content ul > li:before, #wiki-content ol > li:before {
    content: unset;
}
#wiki-content li {
    padding: unset;
}
.wiki-gh-content .Box-body {
    border: none;
}
.wiki-gh-content .gh-header-title, .wiki-gh-content .gh-header-actions, #wiki-footer [title="Edit footer"], .wiki-gh-content .signup-prompt-bg, .wiki-gh-content p br + br {
    display: none;
}
.wiki-gh-content .muted-link {
    opacity: 0.6;
}
.wiki-gh-content .muted-link:hover {
    color: var(--SGSP-link-txt-color)!important;
    opacity: 1;
}
.wiki-gh-content .gh-header-meta {
    color: var(--SGSP-secondary-txt-color);
    border-bottom: 1px solid var(--SGSP-separator-light-color);
    display: flex;
    font-size: 11px;
    justify-content: flex-end;
    margin-bottom: -70px;
    padding: 0!important;
}
.wiki-gh-content .markdown-body h1:first-of-type {
    border: none!important;
    padding-bottom: 0.3em;
}
.wiki-gh-content .markdown-body p:first-of-type {
    padding-bottom: 1.5em;
}
.wiki-gh-content .markdown-body table {
    display: table;
    table-layout: unset;
}
#wiki-content td:last-child {
    max-width: 500px;
}
.wiki-gh-content .markdown-body table tr {
    background-color: var(--SGSP-chart-row-bg-color);
}
.wiki-gh-content .markdown-body table thead > tr {
    background-color: transparent;
}
.wiki-gh-content .markdown-body table tr:nth-child(2n) {
    background-color: hsla(0, 0%, 50%, 0.01);
}
.wiki-gh-content .markdown-body table th, .wiki-gh-content .markdown-body table td {
    border: none;
}
.wiki-gh-content .markdown-body kbd {
    color: var(--SGSP-general-txt-color);
    background-color: #464646;
    border: solid 1px #000000;
    border-bottom-color: #000000;
    box-shadow: inset 0 -1px 0 #616161;
}
.pl-s, .pl-s1, .pl-s1 .pl-pse .pl-s2 {
    color: var(--SGSP-link-txt-color)!important;
}
.pl-pds, .pl-pds > .pl-s1 {
    color: #6b6f82!important;
}
.wiki-gh-content .markdown-body .highlight > pre {
    color: var(--SGSP-general-txt-color);
}
.page__heading ~ div:not(.comments):not(.esgst-rbot):not(.esgst-popup-actions):not(.esgst-fmph):not(.giveaway_box_actions), .page_heading ~ div:not(.comments):not(.esgst-rbot):not(.esgst-fmph), .pinned-giveaways__outer-wrap {
    will-change: transform;
}
.page__heading ~ div:hover:not(.sg2o-gridview-container), .page_heading ~ div:hover, .pinned-giveaways__outer-wrap:hover, .page_inner_wrap.medium .page_heading ~ div {
    will-change: unset!important;
}
.page__heading ~ div:hover .table__rows, .page__heading ~ div:hover .giveaway__row-outer-wrap:not(.esgst-gv-container), .pinned-giveaways__outer-wrap:hover .giveaway__summary {
    will-change: transform!important;
}
@media (min--moz-device-pixel-ratio: 0) and (display-mode: browser), (min--moz-device-pixel-ratio: 0) and (display-mode: fullscreen) {
    .page__heading ~ div:not(.comments), .page_heading ~ div:not(.comments), .pinned-giveaways__outer-wrap, .page__heading ~ div:hover .table__rows, .page__heading ~ div:hover .giveaway__row-outer-wrap:not(.esgst-gv-container), .pinned-giveaways__outer-wrap:hover .giveaway__summary {
        will-change: unset!important;
    }
}
    /*  Holiday Gift Box Event     */
.giveaway_box_hero {
    background-position: center -80px!important;
    border: 1px solid var(--SGSP-content-border-color);
    height: 180px!important;
}
.giveaway_box_notification, .giveaway_box_message {
    background-color: transparent!important;
    background-image: var(--SGSP-notification-yellow-bg-color)!important;
    border-color: var(--SGSP-notification-yellow-border-color)!important;
    color: var(--SGSP-notification-yellow-txt-color);
    padding: 5px 25px!important;
    will-change: unset!important;
}
.giveaway_box_notification i {
    font-size: 18px!important;
}
.giveaway_box_container {
    background-color: var(--SGSP-content-bg-color);
    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0)), linear-gradient( rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.03) 40%, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 0) 100%)!important;
    border: 1px solid var(--SGSP-content-border-color)!important;
}
.giveaway_box_notification > div a, .giveaway_box_message a {
    color: rgb(230, 113, 0)!important;
}
.cp-z-cursor {
    border-color: transparent #000!important;
}
.cp-xy-cursor {
    border-color: #000!important;
}
.cp-alpha-cursor {
    border-color: hsla(0, 0%, 15%, 1) transparent!important;
}
.cp-alpha {
    background: linear-gradient(to right, hsla(0, 0%, 15%, 1), hsla(0, 0%, 15%, 0));
}
.cp-color-picker {
    border: 1px solid #000000;
    background-image: linear-gradient(hsla(0, 0%, 15%, 1) 0%, hsla(0, 0%, 15%, 1) 100%);
}
.giveaway_box_color_outer {
    background-color: var(--SGSP-input-bg-color);
    border-color: var(--SGSP-input-border-color);
}
.giveaway_box_color_outer.is_inactive .giveaway_box_color_inner {
    background-image: repeating-linear-gradient(45deg, transparent, transparent 5px, var(--SGSP-input-bg-color) 5px, var(--SGSP-input-bg-color) 10px);
}
.giveaway_box_color_inner {
    background-color: hsl(0, 0%, 33%);
}
.giveaway_box, .giveaway_box_hero {
    filter: var(--SGSP-image-brightness);
}
.giveaway_box_list > .esgst-es-page-divider {
    margin: 8px -10px -5px;
}
.giveaway_box_list .giveaway_box_container--unlocked {
    background-color: transparent!important;
    background-image: var(--SGSP-notification-green-bg-color)!important;
    border-color: var(--SGSP-notification-green-border-color)!important;
}
.giveaway_box_container--spin-hover {
    z-index: 997;
}
input:not(.comment__submit-button):not(.ui_tpicker_time_input):not(.sp-input):not([type="file"]):not(.sidebar__search-input).form__input--valid.form__input--invalid {
    background-color: transparent!important;
    background-image: var(--SGSP-notification-red-bg-color);
    border-color: var(--SGSP-notification-red-border-color)!important;
    color: var(--SGSP-notification-red-txt-color)!important;
    text-shadow: 1px 1px 1px hsla(0, 0%, 0%, 0.7)!important;
}
input:not(.comment__submit-button):not(.ui_tpicker_time_input):not(.sp-input):not([type="file"]):not(.sidebar__search-input).form__input--valid.form__input--valid {
    background-color: transparent!important;
    background-image: var(--SGSP-notification-green-bg-color);
    border-color: var(--SGSP-notification-green-border-color)!important;
    color: var(--SGSP-notification-green-txt-color)!important;
    text-shadow: 1px 1px 1px hsla(0, 0%, 0%, 0.7)!important;
}
.giveaway_box_container--transition-slow + div > div[style*="flex: 2"] .form__input-description[style*="#d2d6e0"] {
    border-bottom: 1px dotted var(--SGSP-separator-light-color)!important;
}
.giveaway_box_container--transition-slow + div > div[style*="flex: 2"] div[style*="border-left: 1px dotted #d2d6e0"], .giveaway_box_container--transition-slow + div > div[style*="flex: 2"][style*="border-left: 1px dotted #d2d6e0"] {
    border-left: 1px dotted var(--SGSP-separator-light-color)!important;
}
.esgst-fmph + .giveaway_box_container {
    margin-top: -5px!important;
}
script[src*="holiday"] + .widget-container--margin-top {
    margin-top: 10px;
}
.giveaway_box_actions {
    background: none!important;
    border: none!important;
    margin: 0!important;
    padding: 0!important;
}
.giveaway_box_actions + div:not(.giveaway_box_message) {
    margin: 0!important;
    will-change: unset!important;
    border: 1px solid var(--SGSP-content-border-color)!important;
    border-radius: 0 0 5px 5px!important;
}
.giveaway_box_action--peek, .giveaway_box_action--like:not(.is-selected) {
    background-image: linear-gradient(#33393e 0%, #212528 100%)!important;
    background-repeat: no-repeat;
    border-color: var(--SGSP-content-border-color);
    color: hsla(0, 0%, 80%, 0.9)!important;
    will-change: filter;
}
.giveaway_box_action--peek:hover:not(.giveaway_box_action--disabled), .giveaway_box_action--like:hover:not(.is-selected) {
    background-image: linear-gradient(#33393e 0%, #212528 100%)!important;
    filter: brightness(1.1);
}
.giveaway_box_action--open {
    background-image: var(--SGSP-green-buttons-bg-color)!important;
    background-color: transparent!important;
    border-color: var(--SGSP-green-buttons-border-color)!important;
    color: var(--SGSP-green-buttons-txt-color)!important;
    text-shadow: var(--SGSP-ts-63)!important;
    transition: filter 0.35s ease-in;
    will-change: filter;
}
.giveaway_box_action--peeked {
    background-image: linear-gradient(#33393e 0%, #212528 100%)!important;
    border: 1px solid var(--SGSP-content-border-color)!important;
    border-bottom: none!important;
    color: hsla(0, 0%, 80%, 0.9)!important;
    text-shadow: var(--SGSP-ts-31)!important;
    will-change: unset;
}
.giveaway_box_action--like.is-selected {
    background-color: hsla(210, 85%, 36%, 0.9);
    background-image: linear-gradient(hsla(210, 75%, 45%, 0.9) 0%, hsla(210, 85%, 36%, 0.9) 100%);
    border: 1px solid #000!important;
    color: hsla(0, 0%, 80%, 0.95);
    text-shadow: var(--SGSP-ts-41);
}
.giveaway_box_action--like.is-selected:hover {
    background-image: none!important;
}
.page__heading__button.page__heading__button--green.page__heading__button--is-dropdown.is-selected .page__heading__absolute-dropdown[style*='-190px'] {
    top: 22px;
}
    /*  Ten years of Space Cat Event     */
.giveaway__column--birthday, .featured__column--birthday {
    background-image: linear-gradient(hsl(300deg 76% 40%) 0%, hsl(300deg 76% 32%) 100%);
    background-image: -moz-linear-gradient(hsl(300deg 76% 40%) 0%, hsl(300deg 76% 32%) 100%);
    background-image: -webkit-linear-gradient(hsl(300deg 76% 45%) 0%, hsl(300deg 76% 32%) 100%);
    border-color: hsl(298deg 100% 67%) hsl(298deg 70% 59%) hsl(298deg 70% 59%) hsl(298deg 75% 55%)!important;
    color: hsl(300deg 100% 80%);
    text-shadow: 1px 1px 1px hsla(0, 0%, 0%, 0.8);
}
.birthday_event {
    background-color: var(--SGSP-content-bg-color);
    background-image: none;
    border: 1px solid var(--SGSP-content-border-color);
    border-radius: 4px;
    margin-bottom: 8px;
    margin-top: 8px;
    padding: 5px 10px;
    text-shadow: var(--SGSP-ts-41);
}
.birthday_event_img {
    filter: var(--SGSP-image-brightness) contrast(0.9) saturate(1.4);
}
.birthday_event_text, .birthday_event_btn i.fa-long-arrow-right {
    color: hsla(300, 53%, 50%, 1)!important;
}
.birthday_event_text del {
    color: hsla(0, 0%, 75%, 0.8);
}
.birthday_event_btn--light {
    border-color: #DBDBDB;
    color: #697080;
    text-shadow: 1px 1px 1px rgba(255,255,255,0.3);
}
.table__column__select {
    background-color: hsla(210, 85%, 36%, 0.9)!important;
    background-image: linear-gradient(hsla(210, 75%, 45%, 0.9) 0%, hsla(210, 85%, 36%, 0.9) 100%);
    border: 1px solid #000;
    box-shadow: none;
    color: hsla(0, 0%, 80%, 0.95)!important;
    text-shadow: var(--SGSP-ts-41)!important;
}
.table__column__select:hover {
    background-image: none!important;
}
.esgst-gv-popout .giveaway__columns .giveaway__column--birthday {
    color: #d21cd2;
    left: 0;
    padding: 11px 3px 0 5px;
    position: absolute;
}
.esgst-gv-popout .giveaway__columns .giveaway__column--birthday i {
    font-size: 12px;
}
.esgst-text-left.markdown[style*="border-right"] {
    border: none!important;
    min-width: 310px;
}
.esgst-text-left.markdown[style*="border-right"] a {
    padding-right: 8px;
}
.esgst-text-left.markdown[style*="border-right"] + .esgst-text-left.table {
    background-color: var(--SGSP-content-bg-color);
    border: 1px solid var(--SGSP-content-border-color);
    border-radius: 4px;
    height: max-content;
    min-width: 383px;
    max-width: 43%;
    padding: 5px 10px!important;
}
.esgst-text-left.markdown[style*="border-right"] + .esgst-text-left.table > .table__heading {
    justify-content: center;
}
.esgst-text-left.markdown[style*="border-right"] + .esgst-text-left.table .table__column--width-small {
    text-align: center;
}
    /*  Fanatical Coupon Find Space Cat Event     */
.guess_game {
    will-change: unset!important;
}
.guess_game_card {
    border: 1px solid var(--SGSP-content-inner-border-color);
}
.guess_game_card_front, .guess_game_card_back, .guess_game_card:not(.guess_game_card--winner):not(.guess_game_card--selected) .guess_game_card_back {
    background-color: var(--SGSP-chart-head-bg-color);
}
.guess_game_card:not(.guess_game_card_revealed) .guess_game_card_front {
    background-color: var(--SGSP-chart-head-bg-color);
}
.guess_game:not([data-state="ready"]) .guess_game_submit, .guess_box_notification {
    background-image: var(--SGSP-notification-yellow-bg-color);
    border-color: var(--SGSP-notification-yellow-border-color);
    color: var(--SGSP-notification-yellow-txt-color);
    text-shadow: var(--SGSP-ts-38);
}
.guess_box_notification svg {
    fill: var(--SGSP-notification-yellow-txt-color);
    text-shadow: var(--SGSP-ts-38);
}
.guess_game[data-state="ready"] .guess_game_submit {
    background-image: var(--SGSP-green-buttons-bg-color);
    border: 1px solid #000;
    border-color: var(--SGSP-green-buttons-border-color);
    color: var(--SGSP-green-buttons-txt-color);
    text-shadow: var(--SGSP-ts-63);
    transition: filter 0.35s ease-in;
    will-change: filter;
}
.guess_game[data-state="ready"] .guess_game_submit:hover {
    background-image: var(--SGSP-green-buttons-bg-color);
    color: var(--SGSP-green-buttons-txt-color);
    filter: var(--SGSP-button-hover-brightness);
}
.guess_game[data-state="ready"] .guess_game_submit:active {
    background-image: var(--SGSP-green-buttons-bg-color);
    border: 1px solid;
    text-shadow: var(--SGSP-ts-21);
    border-color: hsla(0, 0%, 0%, 0.75) hsla(0, 0%, 55%, 0.5) hsla(0, 0%, 55%, 0.5) hsla(0, 0%, 0%, 0.75);
    box-shadow: 2px 2px 2px hsla(0, 0%, 0%, 0.5) inset, 7px 7px 10px hsla(0, 0%, 5%, 0.5) inset;
    filter: brightness(0.37);
}
.guess_game_card--selected .guess_game_card_front, .guess_game_card--selected .guess_game_card_back {
    background-color: hsl(195, 60%, 50%)!important;
}
.guess_game[data-state="progress"] .guess_game_card:hover {
    border-color: hsl(195, 60%, 50%);
}
.guess_game_card:not(.guess_game_card--winner):not(.guess_game_card--selected) .guess_game_card_back {
    opacity: 0.25;
}
.guess_game_card--winner .guess_game_card_back {
    filter: var(--SGSP-image-brightness);
}
.guess_game:not([data-state="ready"]) .guess_game_submit--error {
    color: hsla(0, 90%, 60%, 0.95);
    background-color: hsla(0, 65%, 44%, 0);
    border-color: #800;
    background-image: linear-gradient(hsla(0, 65%, 44%, 0.23) 0%, hsla(0, 74%, 24%, 0.9) 100%);
}
.esgst-ge-sgt-button > .form__submit-button {
    border-color: hsla(185, 65%, 48%, 1) #3197a0 hsla(185, 60%, 36%, 1) #3197a0!important;
}
.esgst-gv-icons [data-draggable-id="elgb"]:not(.esgst-button-set):not(.esgst-button-container), .esgst-gv-icons .btn_action, .esgst-gv-icons .sidebar__error {
    box-shadow: 0 -1px 0 0 hsla(0, 0%, 65%, 1), -1px 0 0 0 hsla(0, 0%, 58%, 1), 0 1px 0 0 hsla(0, 0%, 37%, 1), 1px 0 0 0 hsla(0, 0%, 58%, 1)!important;
}
.esgst-gv-icons :not(.esgst-button-set):not(.esgst-button-container).giveaway__column--group {
    box-shadow: 0 -1px 0 0 #74d467, 0 1px 0 0 #47a540, 1px 0 0 0 #399a32, -1px 0 0 0 #47a540 !important;
}
.esgst-gv-icons :not(.esgst-button-set):not(.esgst-button-container).giveaway__column--whitelist {
    box-shadow: 0 -1px 0 0 #2bbdca, 0 1px 0 0 #3197a0, 1px 0 0 0 #258a93, -1px 0 0 0 #3197a0 !important;
}
.esgst-gv-icons :not(.esgst-button-set):not(.esgst-button-container).giveaway__column--invite-only, .esgst-gv-icons :not(.esgst-button-set):not(.esgst-button-container).giveaway__column--region-restricted {
    box-shadow: 0 -1px 0 0 hsla(0,0%,77%,1), 0 1px 0 0 hsla(0,0%,53%,1), 1px 0 0 0 hsla(0,0%,68%,1), -1px 0 0 0 hsla(0,0%,68%,1)!important;
}
.esgst-gv-icons .btn_action.green, .esgst-gv-icons [data-draggable-id="elgb"]:not(.esgst-button-set):not(.esgst-button-container).form__submit-button, .esgst-gv-icons :not(.esgst-button-set):not(.esgst-button-container).giveaway__column--contributor-level--positive:not(.esgst-glh-highlight) {
    box-shadow: 0 -1px 0 0 #8dc14e, -1px 0 0 0 #649a23, 0 1px 0 0 #52891f, 1px 0 0 0 #649a23 !important;
}
.esgst-gv-icons .btn_action.yellow, .esgst-gv-icons [data-draggable-id="elgb"]:not(.esgst-button-set):not(.esgst-button-container).sidebar__entry-delete {
    box-shadow: 0 -1px 0 0 #eded82, -1px 0 0 0 #d5d54d, 0 1px 0 0 #b4b418, 1px 0 0 0 #d5d54d !important;
}
.esgst-gv-icons .btn_action.red, .esgst-gv-icons :not(.esgst-button-set):not(.esgst-button-container).giveaway__column--contributor-level--negative:not(.esgst-glh-highlight), .esgst-gv-icons [data-draggable-id="elgb"]:not(.esgst-button-set):not(.esgst-button-container).sidebar__error {
    box-shadow: 0 -1px 0 0 #e27373, -1px 0 0 0 #ba4545, 0 1px 0 0 #a82e2e, 1px 0 0 0 #ba4545 !important;
}
.esgst-aic-right-button, .esgst-aic-left-button {
    filter: contrast(0.85);
}
.sidebar__entry-insert[style*="border-color: rgb(147, 187, 211)"] {
    border-color: hsla(185,65%,48%,1) #3197a0 hsla(185,60%,36%,1) #3197a0!important;
}
`;
  if (window.location.pathname.match(/^\/discussions\/bookmarked/)) {
    css += `.esgst-idb-highlight, .esgst-idb-highlight.table__row-outer-wrap {
    background-color: unset!important;
    padding: 10px 0!important;
}
`;
  };
  if (window.location.search.match(/esgst/)) {
    css += `.page__heading ~ div:not(.sidebar__search-container):not(.esgst-button) {
    background-color: unset!important;
    border-color: transparent!important;
    box-shadow: none!important;
}
.widget-container > [data-esgst-popup].esgst-menu-layer .esgst-settings-menu {
    margin-top: -18px;
}
.widget-container > [data-esgst-popup] > .page__heading + div:not(.esgst-menu-split):not(.esgst-button-group), .esgst-sync-area {
    margin-top: 10px!important;
}
.widget-container > [data-esgst-popup] > .page__heading + .esgst-button-set {
    position: relative;
    top: 10px;
}
.widget-container > [data-esgst-popup] .page__heading > .page__heading__breadcrumbs + .esgst-button-set {
    margin-right: 0;
    margin-left: 5px;
}
.widget-container > [data-esgst-popup] {
    background-color: var(--SGSP-content-bg-color);
    border: 1px solid var(--SGSP-content-border-color)!important;
    border-radius: 4px;
    height: fit-content;
    padding-bottom: 20px;
}
.widget-container > [data-esgst-popup] >*:not(:first-child) {
    margin-left: 20px;
}
.widget-container > [data-esgst-popup] > .page__heading {
    background-color: var(--SGSP-body-bg-color);
    border-bottom: 1px solid var(--SGSP-content-border-color)!important;
    margin-left: -1px;
    margin-right: -1px;
    margin-top: -1px;
    padding: 8px 0;
    top: 0;
}
.widget-container > [data-esgst-popup] > *:not(:first-child) {
    margin-left: 9px;
    margin-right: 9px;
    padding-left: 10px!important;
    padding-right: 10px!important;
}
.widget-container > [data-esgst-popup] > .page__heading + .esgst-button-group {
    background-image: var(--SGSP-pageheading-bg-color)!important;
    background-repeat: no-repeat;
    border-radius: 0!important;
    border: 1px solid var(--SGSP-content-border-color)!important;
    border-bottom-right-radius: 4px!important;
    border-left: none!important;
    border-top: none!important;
    padding: 4px!important;
    position: sticky;
    top: 0;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    z-index: 999;
}
.widget-container > [data-esgst-popup] > .page__heading.esgst-fmph + .esgst-button-group {
    top: 51px;
}
.esgst-fh ~ .page__outer-wrap > .page__inner-wrap > .widget-container > [data-esgst-popup] > .page__heading {
    top: 38px;
}
.esgst-fh ~ .page__outer-wrap > .page__inner-wrap > .widget-container > [data-esgst-popup] > .page__heading + .esgst-button-group {
    top: 89px;
}
.esgst-fh ~ .page__outer-wrap > .page__inner-wrap > .widget-container > [data-esgst-popup] > .page__heading:not(.esgst-fmph) + .esgst-button-group {
    top: 40px;
}
.widget-container > [data-esgst-popup] > .page__heading:first-child ~ .page__heading {
    border-bottom: none!important;
}
.widget-container > [data-esgst-popup] > .esgst-button-set:last-child .btn_action.grey {
    margin-top: 10px;
}
.giveaway__row-outer-wrap:not(.esgst-gv-container) {
    border-bottom: 1px solid #000;
    box-shadow: 0 1px 0 var(--SGSP-separator-light-color)!important;
}
.widget-container > [data-esgst-popup] > div > .esgst-text-left {
    background-color: var(--SGSP-content-bg-color)!important;
    border: 1px solid var(--SGSP-content-border-color)!important;
    border-radius: 4px;
    margin-top: -5px;
}
.esgst-button-group, .esgst-popup-description >*:not(.esgst-tag-suggestions).esgst-button-group {
    margin: 0!important;
    padding: 8px 0;
}
.esgst-switch-input-large {
    margin: 2px 5px 2px 0;
}
.fa-question-circle, .icon_to_clipboard {
    margin-left: 3px;
    vertical-align: baseline;
}
.esgst-form-heading-number + .icon_to_clipboard {
    margin-left: unset;
}
.esgst-sm-colors strong {
    line-height: 28px;
    position: relative;
    top: 5px;
}
.esgst-sm-colors strong:first-child {
    line-height: 18px;
    top: 0;
}
.esgst-toggle-switch-container + .esgst-button-set {
    margin-top: 8px!important;
}
`;
    if (window.location.search.match(/esgst=ge&url/)) {
      css += `.page__heading ~ div:not(.sidebar__search-container).esgst-text-left {
    background-color: var(--SGSP-content-bg-color)!important;
    border: 1px solid var(--SGSP-content-border-color)!important;
    border-radius: 4px;
    margin-top: 8px;
    padding: 5px 10px;
}
.giveaway__row-outer-wrap:not(:last-child):not(.esgst-gv-container) {
    border-bottom: 1px solid #000;
    box-shadow: 0 1px 0 var(--SGSP-separator-light-color)!important;
}
.widget-container > [data-esgst-popup] > .page__heading:first-child + div .esgst-button-set:first-child + div {
    margin: 10px;
}
.widget-container > [data-esgst-popup] > div > .esgst-text-left {
    background-color: transparent!important;
    border: none!important;
    box-shadow: none!important;
}`;
    };
    if (window.location.search.match(/esgst=ged/)) {
      css += `.widget-container > div > .page__heading:first-child {
    background-color: var(--SGSP-body-bg-color);
    border-bottom: 1px solid var(--SGSP-content-border-color)!important;
    margin-top: -1px;
    padding: 8px 0;
    top: 38px;
    position: sticky;
    z-index: 999;
}
.page__heading ~ div:not(.sidebar__search-container)[data-esgst-popup] {
    background-color: var(--SGSP-content-bg-color)!important;
    background-image: none;
    border: 1px solid var(--SGSP-content-border-color)!important;
    border-radius: 4px;
    margin-top: -1px!important;
}
.page__heading ~ div:not(.sidebar__search-container)[data-esgst-popup] > .esgst-text-left {
    background-color: var(--SGSP-content-bg-color)!important;
    background-image: none;
    border: 1px solid var(--SGSP-content-border-color)!important;
    border-radius: 4px;
    margin-top: 8px!important;
}
.giveaway__row-outer-wrap:not(.esgst-gv-container) {
    border-bottom: 1px solid #000;
    box-shadow: 0 1px 0 var(--SGSP-separator-light-color)!important;
}
.widget-container > div .page__heading:not(.esgst-fmph) + .esgst-gf-container {
    top: 85px;
}`;
    };
  };
  if (window.location.host == 'www.steamtrades.com') {
     css += `.esgst-header-menu-button {
    border: none!important;
    height: 27px;
}
.esgst-header-menu {
    margin: 0!important;
}
.btn_action + .esgst-sgpb-button:active {
    margin: 0 0 0 5px!important;
}
.esgst-popup-description.esgst-text-left select, .esgst-popup-description.esgst-text-left input, .esgst-popup select, .esgst-auto-sync, .esgst-cfh-popout input, .esgst-switch-input {
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    font: inherit;
    line-height: 1.5em;
}
.esgst-sync-frequency, .esgst-steam-api-key, .esgst-cfh-popout input {
    padding: 5px 10px;
}
.esgst-sm-colors select {
    padding: 0!important;
}
.esgst-sync {
    font: 700 13px/32px "Open Sans", sans-serif;
    padding: 0 15px;
    text-align: center;
    border-radius: 4px;
}
.esgst-cfh-popout .form__saving-button, .esgst-popup .form__saving-button {
    display: inline-block;
}
.esgst-button-set .btn_action > i {
    margin-right: 0;
}
.esgst-menu-split {
    display: flex;
}
.esgst-menu-split > * {
    flex: 1;
}
.esgst-settings-menu-feature {
    align-self: flex-start;
    margin-top: 14px;
    min-height: 400px;
    overflow: auto;
    position: sticky;
    top: 24px;
}
.page__heading {
    align-items: flex-start;
    display: flex;
    word-wrap: break-word;
}
.page__heading > * {
    display: flex;
    padding: 5px 10px;
    border: 1px solid;
    font: 700 14px/22px "Open Sans",sans-serif;
}
.page__heading > *:not(:last-child) {
    margin-right: 5px;
}
.page__heading i {
    line-height: 22px;
}
.page__heading__breadcrumbs i {
    line-height: 22px;
    margin: 0px 10px;
}
.page_inner_wrap > div:last-of-type {
    background: none!important;
    border: none!important;
}
.footer_lower {
    border: none;
    box-shadow: none;
}
.footer_lower .footer_inner_wrap {
    border-top: 1px solid var(--SGSP-separator-light-color);
    box-shadow: 0 -1px 0 var(--SGSP-separator-dark-color);
}
.form__row__indent {
    padding: 3px 0 3px 20px;
    margin-left: 5px;
    margin-right: 10px;
}
.form__heading {
    align-items: center;
    display: flex;
    margin-bottom: 5px;
}
.form__heading__text {
    font: 700 14px "Open Sans",sans-serif;
}
.form__heading > div:not(:last-child) {
    margin-right: 10px;
}
.form__heading__number {
    color: hsl(60, 2%, 64%)!important;
    font-weight: 600!important;
}
.markdown ul > li:before {
    content: '•';
}
.page_outer_wrap .esgst-fmph + .esgst-gf-container {
    top: 51px;
}
.page_outer_wrap .page_heading:not(.esgst-fmph) + .esgst-gf-container {
    margin-top: 5px;
    top: 0px;
}
.esgst-fh ~ .page_outer_wrap .esgst-fmph {
    top: 39px;
}
.esgst-fh ~ .page_outer_wrap .esgst-fmph + .esgst-gf-container {
    top: 90px;
}
.esgst-fh ~ .page_outer_wrap .page_heading:not(.esgst-fmph) + .esgst-gf-container {
    top: 40px;
}
.large.esgst-fh ~ .page_outer_wrap .esgst-fmph, .large.esgst-fh ~ .page_outer_wrap .page_heading:not(.esgst-fmph) + .esgst-gf-container {
    top: 150px;
}
.large.esgst-fh ~ .page_outer_wrap .esgst-fmph + .esgst-gf-container {
    top: 200px;
}
.esgst-fh ~ .esgst-popup-layer {
    z-index: 1001!important;
}
.footer_lower .footer_inner_wrap, .footer_lower .footer_inner_wrap .footer_sites {
    flex-direction: row;
}
nav {
    padding: 1px 20px 0;
}
nav.is_open {
    padding: 1px 15px 8px 15px;
}
 .dropdown, .dropup {
    position: static;
}
header[data-esgst-parsed] .nav_icons {
    display: flex;
} 
header[data-esgst-parsed] nav:not(.is_open) .nav_btn_container#esgst, header[data-esgst-parsed] nav:not(.is_open) .nav_btns {
    display: none;
}
header[data-esgst-parsed] .nav_btns {
    flex-direction: column;
    grid-area: 2/1/3/4;
}
 header[data-esgst-parsed] nav .nav_btn_container#esgst {
    grid-area: 3/1/3/4;
    margin-top: -10px;
}
 header[data-esgst-parsed] nav .nav_btn_container#esgst .dropdown > div {
    width: 205px;
    z-index: 1000;
}
@media (min-width: 840px) {
    header[data-esgst-parsed] nav .nav_btn_container#esgst {
        grid-area: 1/1/2/2;
        justify-self: flex-end;
        margin: 0 -10px 0 -10px;
        width: 116px;
    }
    header[data-esgst-parsed] nav .nav_btns .nav_btn_container#esgst {
        margin: 0px 0px 0 -10px;
    }
    header[data-esgst-parsed] .nav_btns {
        flex-direction: row;
        grid-area: 1/2/2/3;
    }
    header[data-esgst-parsed] nav:not(.is_open) .nav_btn_container#esgst, header[data-esgst-parsed] nav:not(.is_open) .nav_btns {
        display: flex;
    }
    header[data-esgst-parsed] .nav_icons {
        display: none;
    }
}
.pagination_navigation.page_heading_btn > * {
    line-height: 21px;
    padding: 0 5px;
}
`;
  };
  if (window.location.pathname.match(/^\/sgpp/)) {
     css += `body {
    margin: 0;
    min-width: 1000px;
}
header {
    margin: 0;
    padding: 5px 0;
}
.nav__left-container {
    align-items: center;
    height: 29px;
}
.nav__logo-outer-wrap {
    background-image: linear-gradient(#dce9ff 0%, #4d8cff 100%);
    border-radius: 2px!important;
    box-shadow: 1px 1px 0 hsla(0, 0%, 100%, 0.2) inset, 0 0 10px hsla(219, 100%, 65%, 0.4);
    display: block;
    height: 11px;
    margin: 0 5px;
    padding: 2px;
    width: 11px;
}
.nav__logo-inner-wrap {
    background-color: hsla(212, 27%, 22%, 1);
    border-radius: 1px;
    box-shadow: 0 0 5px hsla(219, 100%, 65%, 0.4) inset, 0 1px 0 hsla(0, 0%, 100%, 0.4);
    height: 100%;
    width: 100%;
}
.page__outer-wrap {
    padding: 25px;
}
.page__inner-wrap {
    margin: 0 auto;
}
.widget-container, .nav__left-container {
    display: flex;
}
.widget-container > div:not(.sidebar), .nav__left-container {
    flex: 1;
}
.sidebar__heading {
    margin-bottom: 3px;
    font: bold 11px/15px Arial, sans-serif;
}
.forms__rows {
    padding-right: 0!important;
}
.forms__rows .page__heading > * {
    border-radius: 0!important;
    border-top: 1px solid;
    border-color: var(--SGSP-pageheading-border-color);
    font: 700 14px/22px "Open Sans", sans-serif;
    padding: 5px 10px;
}
.forms__rows .form__row {
    margin-bottom: 10px;
}
.forms__rows .form__heading__text {
    font: 700 14px "Open Sans", sans-serif;
    margin-bottom: 5px;
}
.forms__rows label {
    cursor: pointer;
}
.forms__rows .form__row__indent {
    margin-left: 5px;
    padding: 3px 0 3px 20px;
}
.forms__rows .form__input-description {
    font: italic 11px Arial, sans-serif;
    margin-top: 10px;
}
`;
  };
  var node = document.createElement('style');
  node.setAttribute('type', 'text/css');
  node.setAttribute('name', 'Theme SGv2 Dark');
  node.setAttribute('id', 'SGv2 Dark');
  node.textContent = css;
  document.documentElement.appendChild(node);
}

var Docobserver = new MutationObserver(function() {
  if (document.body !== null) {
    Docobserver.disconnect();
    addCss();
  }
});
Docobserver.observe(document.documentElement, { childList: true });