Lån og Spar netbank improvement
===============================
This is a Chrome/Firefox userscript that aims to right some of the
wrongs that LSB have done with their new redesign.
The goal is to make the current available information be presented in a
better way so nothing gets hidden, even if you
are running at a low resolution.

WARNING! Do not install this script without reading the code first!
Installing a user script that runs on your banking website is potentially dangerous, since the script might log some of your data inside the bank.

Features
========
* Breaks the fixed width 960 grid and makes the layout fluid
* Makes more room for the content by moving the right column over to the left below the secondary navigation
* Replaces fixed dimension images with CSS3 gradients
* Fixes clipping of navigational elements in the data presentation when having wide data
* Adds corrext zebra striping on table rows for better readability

Browser support
===============
Currently I am developing this as a chrome user script.
This should be installable in Firefox with greasemonkey as well.
Hopefully I can get this packed into a proper browser extension for those two browsers.

Future ideas
============
* Implement CSS media queries and optimize layout for mobile devices
