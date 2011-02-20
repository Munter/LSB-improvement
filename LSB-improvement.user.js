// ==UserScript==
// @author Peter Müller (https://github.com/Munter)
// @name Lån og Spar netbank improved
// @version 0.1
// @match https://www.lsb.dk/lsb/netbank/*
// ==/UserScript==

var styles = [];

// Clean up things that are not needed
styles.push('#container, .full { width: auto; margin: 0; }');

// Break the 960 grid and make the layout fluid
styles.push('#container { padding: 0 10px; }');
styles.push('#header, #nav, #main, #footer { width: auto; }');
styles.push('#content { width: auto; float: none; margin-left: 150px; }');
styles.push('#content #article { width: auto; float: none; }');

// Fix the fixed width menu bar. Weird design choice
var nav = document.getElementById('nav').parentNode,
    ul = nav.getElementsByTagName('ul')[0];

nav.parentNode.insertBefore(ul, nav);
nav.parentNode.removeChild(nav);
ul.id = 'nav';
ul.className = 'menu shadow';

styles.push('.menu { list-style: none; overflow: auto; padding: 0; margin: 0; border: 1px solid; border-color: #BABCBC #BABCBC #A0A2A2 #A0A2A2; }');
styles.push('.menu li a { display: block; text-decoration: none; color: black; }');
styles.push('.menu li a:hover { background: -webkit-gradient(linear, left top, left bottom, from(rgb(229,229,229)), color-stop(50%, rgb(235,235,235)), color-stop(50%, rgb(214,214,214)), to(rgb(180,180,180))); }');
styles.push('.menu li.selected a { background: -webkit-gradient(linear, left top, left bottom, from(rgb(170,15,32)), color-stop(50%, rgb(174,20,35)), color-stop(50%, rgb(151,24,27)), to(rgb(128,19,21))); color: white; }');
styles.push('.shadow { -moz-box-shadow: 0 4px 5px rgba(0,0,0,0.45); -webkit-box-shadow: 0 4px 5px rgba(0,0,0,0.45); box-shadow: 0 4px 4px rgba(0,0,0,0.45); }');

styles.push('#nav { height: auto; margin: 0 0 13px 0; }');
styles.push('#nav { background: -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0.9)), color-stop(50%, rgba(249,249,249,0.9)), color-stop(50%, rgba(238,238,238,0.9)), to(rgba(221,221,221,0.9))); }');
styles.push('#nav li { background: none; float: left; }');
styles.push('#nav li.admin { float: right; }');
styles.push('#nav li a { border-left: 1px solid white; border-right: 1px solid #bcbcbc; padding: 9px 18px 8px; }');
styles.push('#nav li:nth-last-child(2) a { border-right: none; }');
styles.push('#nav li:first-child a { border-left: none; }');

// Skip the unneeded .main container
var main = document.getElementById('main'),
    useless = main.parentNode;
useless.parentNode.insertBefore(main, useless);
useless.parentNode.removeChild(useless);
main.className = '';

// Clean up stupid document structure in left menu
var subNav = document.getElementById('subNav'),
    subUl = subNav.getElementsByTagName('ul')[0],
    links = subUl.getElementsByTagName('a');

for (var i = 0; i < links.length; i++) {
    links[i].innerHTML = links[i].innerText;
}

styles.push('#column { float: left; width: 150px; }');
var col = document.createElement('div');
col.id = 'column';
document.getElementById('main').insertBefore(col, subNav);
col.appendChild(subUl);
subNav.parentNode.removeChild(subNav);
subUl.id = 'subnavigation';
subUl.className = 'menu shadow';

styles.push('#subnavigation { background: rgba(255,255,255,0.8); margin-bottom: 13px; }');
styles.push('#subnavigation li a { padding: 7px 0 7px 10px; }');
styles.push('#subnavigation li.divider { height: 1px; border-top: 1px solid #CCC; margin: 3px 0; }');

// Move the content of the right column into the left column.
var rc = document.getElementById('aside');
if (rc) {
    if (rc.children.length) {
        for (var i = 0; i < rc.children.length; i++) {
            col.appendChild(rc.children[i]);
        }
    }
    rc.parentNode.removeChild(rc);
}

// Fix some styling issues with tables
styles.push('#content table tr.oddrowno td, #content table tr.evenrowno td { padding: 4px; }');
styles.push('#content table tr:nth-child(2n) td { background: #F9F9F9 }');
styles.push('#content table tr.oddrowno td, #content table tr.evenrowno td { border-bottom: 1px solid #CCC; }');

// Inject the new styles
var s = document.createElement('style');
s.type="text/css";
s.textContent=styles.join('\n').replace(/;/g, '!important;');
document.head.appendChild(s);
