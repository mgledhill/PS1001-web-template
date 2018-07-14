/* PRACTICALSERIES (c) 2016

*******************************************************************************
Title :          WEBSITE JQUERY                                       SCRIPT.JS
*******************************************************************************

PRACTICALSERIES: Practical Series of Publications by Michael Gledhill
                 Published in the United Kingdom

                 Email: mg@practicalseries.com
                 Web:   www.practicalseries.com

-------------------------------------------------------------------------------
DETAILS

jQuery is using version 3.1.0 from the GoogleAPIs library.

The Waypoint function is a Java plugin supplied by imakewebthings and downloaded
from their website: http://imakewebthings.com/waypoints/

The waypoint plugin is available under the github MIT licenced reproduce below:

-------------------------------------------------------------------------------
WAYPOINT LICENCE

The MIT License (MIT)
Copyright © 2011-2012 Caleb Troughton

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

-------------------------------------------------------------------------------
MODIFICATION HISTORY:

This is a complete summary of all software modifications.

Date          Issue        Author         Reason for Modification
-------------------------------------------------------------------------------
14 Jul 2018   P11          M. Gledhill    Published (social media update)

20 Dec 2017   P10.10.01    M. Gledhill    Social media icons manipulation added

31 May 2017   P10          M. Gledhill    Migration to Git VCS
                                          FIRST PUBLISHED COMMIT
                                          Based on PS(LIVE-non VCS) P06.02
---------------------------------------------------------------------------- */



/* ****************************************************************************
   WAIT FOR PAGE TO LOAD
   ****************************************************************************
   No JQuery actions take place until the webpage has loaded, all JQuery code
   is contained within the .ready(function()).
   ************************************************************************* */


$(document).ready(function() {                      /* START OF PAGE READY FUNCTION */


/* ****************************************************************************
   FIXED NAVIGATION BAR (WAYPOINT FUNCTION)
   ****************************************************************************
   This function causes the navigation bar to be fixed at the top edge of the
   screen once the user has scrolled down to waypoint js--fixed-nav (this is
   generally the first section of the website after the TOC).

   The waypoint function adds the class .fixed-nav to the <nav> element.

   Similarly, the .fixed-nav class is removed when scrolling up to a point
   above the first waypoint js--fixed-nav.

   The waypoint function returns the direction of travel when passing the
   waypoint specified. In this case an offset of 60px is added (the class is
   added when the waypoint is within 60px of the top of the screen).
   ************************************************************************* */


    $('.js--fixed-nav').waypoint(function (direction) { /* START of Waypoint function
                                                           triggers as .js--fixed-nav class */
        if (direction == "down") {                      /* check direction */
            $('nav').addClass('fixed-nav');             /* if moving downward activate fixed-nav class */
        } else {
            $('nav').removeClass('fixed-nav');          /* if moving upward de-activate fixed-nav class */
        }
    }, {
    offset: '70px'                                      /* check for waypoint 60px before top of screen */
    });                                                 /* END of Waypoint function */

/* ****************************************************************************
   SOCIAL MEDIA CHARACTER CHANGE
   ****************************************************************************
   These function cause the social media icons in the footer to change from
   outlined to filled characters

   THe hover property is used four times (twice per icon) the first use adds
   the filled icon during hover and removes it afterwards, the second use
   removes the oultine icon during hover and restores it afterwards
   ************************************************************************* */

    /* FACEBOOK ICON MANIPULATION */
    $('#js--fbicon').hover(
        function(){ $(this).addClass('ion-social-facebook'); },
        function(){ $(this).removeClass('ion-social-facebook'); }
    );
    $('#js--fbicon').hover(
        function(){ $(this).removeClass('ion-social-facebook-outline'); },
        function(){ $(this).addClass('ion-social-facebook-outline'); }
    );

    /* TWITTER ICON MANIPULATION */
    $('#js--twicon').hover(
        function(){ $(this).addClass('ion-social-twitter'); },
        function(){ $(this).removeClass('ion-social-twitter'); }
    );
    $('#js--twicon').hover(
        function(){ $(this).removeClass('ion-social-twitter-outline'); },
        function(){ $(this).addClass('ion-social-twitter-outline'); }
    );


/* ****************************************************************************
   SWAP SVG IMAGES FOR PNG IMAGES IF VIEWED WITH INTERNET EXPLORER
   ****************************************************************************
   Internet Explorer does not scale svg image properly, this is true even of
   the latest version (IE11). Edge is fine.

   The following jQuery creates a function called IEgetVer. This returns
   the following:

        FALSE = Browser is not IE or Edge

        1     = Internet Explorer version 1-11

        2     = Edge version numbers start at 12

    The result is stored in the variable version.

    If version is 1, then the browser is a version of Internet Explorer and
    all filename.svg images are changed to filename.png. Note the name doesn’t
    change, just the extension. The .png file must also be stored in the same
    location as the .svg file.

    The code finds the number of img elements on the page (variable imgs).
    It then checks the src attribute of each occurrence to see if it ends
    in .svg (this is the /.*\.svg$/ meta character string).

    If it does the last three characters are taken off with the slice command
    and png added in place.
   ************************************************************************* */

    var version = IEgetVer();

    if (version === false) { /* === test the type of the result (rather than value) */
                             /* Browser is not IE or Edge */
    }

    else if (version >= 2) { /* Browser is Edge (version number is >= 12) */

    }

    else {                   /* Browser is IE */
        var imgs = document.getElementsByTagName('img');
        var svgExtension = /.*\.svg$/   /* this basically finds *.svg - they are called meta charcters */
        var l = imgs.length;
        for(var i = 0; i < l; i++) {
            if(imgs[i].src.match(svgExtension)) {
                imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
            }
        }
        var refs = document.getElementsByTagName('a');
        var svgExtension = /.*\.svg$/   /* this basically finds *.svg - they are called meta charcters */
        var l = refs.length;
        for(var i = 0; i < l; i++) {
            if(refs[i].href.match(svgExtension)) {
                refs[i].href = refs[i].href.slice(0, -3) + 'png';
            }
        }
    }


/* ----------------------------------------------------------------------------
   FUNCTION IEgetVer - DETECT IE AND EDGE
   ----------------------------------------------------------------------------
   The function IEgetVer uses the useragent command to get browser information

   The following browsers return the following ua:

     IE 10   ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

     IE 11   ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

     Edge 12 ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML,
                   like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

     Edge 13 ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                   (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

   The string is decoded using the IndexOf function (returns position of
   characters in string).

     If it contains the string MSIE it is an early version of IE (10 or earlier)

     If it contains the string Trident, it is IE 11

     If it contains the string Edge it is Edge

   The returned value is the extracted version or revision number of the
   browser, the function returns FALSE if the browser is not IE or EDGE.

   The ParseInt function returns
   --------------------------------------------------------------------------- */

    function IEgetVer() {
        var ua = window.navigator.userAgent;

        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {     /* IE 10 or older - Return 1  */
            return 1;
        }

        var trident = ua.indexOf('Trident/');
        if (trident > 0) {  /* IE 11 - Return 1 */
            var rv = ua.indexOf('rv:');
            return 1;
        }

        var edge = ua.indexOf('Edge/');
        if (edge > 0) {     /* Edge (IE 12+) - Return 2 */
            return 2;
        }

      // other browser - Return FALSE
      return false;
    }
/* ************************************************************************* */





});                                                 /* END OF PAGE READY FUNCTION */
