/* PRACTICALSERIES (c) 2016

*******************************************************************************
Title :          LOCAL SCROLL - JQUERY                          99-00-SCROLL.JS
*******************************************************************************

PRACTICALSERIES: Practical Series of Publications by Michael Gledhill
                 Published in the United Kingdom

                 Email: mg@practicalseries.com
                 Web:   https://practicalseries.com

-------------------------------------------------------------------------------
DETAILS         LOCAL SCROLL FUNCTIONS

jQuery is using the latest version from the GoogleAPIs library.

This script applies the scroll to a point within the page (scrollTop)
functionality for the current page.

-------------------------------------------------------------------------------
NAMING CONVENTIONS

Each <section> of the site has a waypoint (WP) reference number that identifies
the start of each section. These are id attributes and have the format:

        #js--ccssii

    where:  cc - chapter number
            ss - subsection number
            ii - inline section number

The six digit number is unique to each section, i.e. section 2.1.3
would have waypoint reference js--020103

The trigger class used in the <a> element to trigger the scroll to the waypoint
has the name .js-sc-000000 where the six digit number matches the waypoint
number of the section that is to be scrolled to.

The scrollTop function has an offset of -60px to ensure the title is visible
below the fixed navigation bar.

-------------------------------------------------------------------------------
MODIFICATION HISTORY:

This is a complete summary of all software modifications.

Date          Issue        Author         Reason for Modification
-------------------------------------------------------------------------------
09 May 2019   R01          M. Gledhill    First release (all files updated)

27 Mar 2019   P14          M. Gledhill    Published

20 Mar 2019   d-P13.00.03  M. Gledhill    Standardisation corrections

19 Mar 2019   d-P13.00.02  M. Gledhill    Code fragment IDs updated

17 Mar 2019   d-P13.00.01  M. Gledhill    Comments updated

27 Jan 2019   P13          M. Gledhill    Additional scroll points included

15 Jul 2018   d-P12.10.01  M. Gledhill    Git styles scroll point added

31 May 2017   P10          M. Gledhill    Migration to Git VCS
                                          FIRST PUBLISHED COMMIT
                                          Based on PS(LIVE-non VCS) P06.02

                                          - .aside-revision class
                                            name change (.aside-right-rev)
---------------------------------------------------------------------------- */


/* ****************************************************************************
   WAIT FOR PAGE TO LOAD
   ****************************************************************************
   No jQuery actions take place until the webpage has loaded, all JQuery code
   is contained within the .ready(function()).
   ************************************************************************* */


$(document).ready(function() {                  /* START OF PAGE READY FUNCTION */

/* ****************************************************************************
   REVISION
   **************************************************************************** */

    $('.aside-right-rev').append (
        "<p>scroll.js&nbsp;&mdash;&nbsp;R01</p>" /* LOCAL JS REVISION NUMBER */
    );

/* ****************************************************************************
   SCROLL TO SECTION
   ****************************************************************************
   This holds several scrollTop functions that scroll from the TOC to the
   specified section. There is one click function per <a> within the TOC.
   ************************************************************************* */


 /* ---------------------------------------------------------------------------
   SCROLL TO TOP
   The offset is set to .to -80 - e.g.

    $('.js--sc-000000').click(function () {
       $('html, body').animate({scrollTop: $('#js--000000').offset().top -80}, 1000);
    });
   ------------------------------------------------------------------------- */
   $('.js--sc-000000').click(function () {
       $('html, body').animate({scrollTop: $('#js--000000').offset().top -80}, 1000);
    });                                         /* END of scroll function */


 /* ---------------------------------------------------------------------------
   SCROLL TO CHAPTER (Non heading level after TOC)
   The offset is set to .to -10 - e.g.

    $('.js--sc-NN0000').click(function () {
       $('html, body').animate({scrollTop: $('#js--NN0000').offset().top -10}, 1000);
    });
   ------------------------------------------------------------------------- */
    $('.js--sc-990000').click(function () {
       $('html, body').animate({scrollTop: $('#js--990000').offset().top -10}, 250);
    });                                         /* END of scroll function */


  /* ---------------------------------------------------------------------------
   SCROLL TO -  SECTIONS & SUBSECTIONS
   The offset is set to .to -20 - e.g.

    $('.js--sc-NN0100').click(function () {
       $('html, body').animate({scrollTop: $('#js--NN0100').offset().top -20}, 1000);
    });
   ------------------------------------------------------------------------- */
    $('.js--sc-990100').click(function () {
       $('html, body').animate({scrollTop: $('#js--990100').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-990101').click(function () {
       $('html, body').animate({scrollTop: $('#js--990101').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-990200').click(function () {
       $('html, body').animate({scrollTop: $('#js--990200').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-990300').click(function () {
       $('html, body').animate({scrollTop: $('#js--990300').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-990400').click(function () {
       $('html, body').animate({scrollTop: $('#js--990400').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-990500').click(function () {
       $('html, body').animate({scrollTop: $('#js--990500').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-990600').click(function () {
       $('html, body').animate({scrollTop: $('#js--990600').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-990700').click(function () {
       $('html, body').animate({scrollTop: $('#js--990700').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-990800').click(function () {
       $('html, body').animate({scrollTop: $('#js--990800').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-990900').click(function () {
       $('html, body').animate({scrollTop: $('#js--990900').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-991000').click(function () {
       $('html, body').animate({scrollTop: $('#js--991000').offset().top -20}, 1000);
    });                                         /* END of scroll function */


  /* ---------------------------------------------------------------------------
   SCROLL TO -  NON-STANDARD (INLINE) SECTIONS
   The offset is set to .to -120 - e.g.

    $('.js--sc-NN0101a').click(function () {
        $('html, body').animate({scrollTop: $('#js--NN0101a').offset().top -120}, 1000);
    });
   ------------------------------------------------------------------------- */
    $('.js--sc-990101a').click(function () {
       $('html, body').animate({scrollTop: $('#js--990101a').offset().top -120}, 1000);
    });

    $('.js--sc-990101b').click(function () {
       $('html, body').animate({scrollTop: $('#js--990101b').offset().top -120}, 1000);
    });

    $('.js--sc-990200a').click(function () {
       $('html, body').animate({scrollTop: $('#js--990200a').offset().top -120}, 1000);
    });

    $('.js--sc-990200b').click(function () {
       $('html, body').animate({scrollTop: $('#js--990200b').offset().top -120}, 1000);
    });

    $('.js--sc-990200c').click(function () {
       $('html, body').animate({scrollTop: $('#js--990200c').offset().top -120}, 1000);
    });

    $('.js--sc-990300a').click(function () {
       $('html, body').animate({scrollTop: $('#js--990300a').offset().top -120}, 1000);
    });

    $('.js--sc-990300b').click(function () {
       $('html, body').animate({scrollTop: $('#js--990300b').offset().top -120}, 1000);
    });

    $('.js--sc-990300c').click(function () {
       $('html, body').animate({scrollTop: $('#js--990300c').offset().top -120}, 1000);
    });

    $('.js--sc-990300d').click(function () {
       $('html, body').animate({scrollTop: $('#js--990300d').offset().top -120}, 1000);
    });

    $('.js--sc-990300e').click(function () {
       $('html, body').animate({scrollTop: $('#js--990300e').offset().top -120}, 1000);
    });

    $('.js--sc-990300f').click(function () {
       $('html, body').animate({scrollTop: $('#js--990300f').offset().top -120}, 1000);
    });

    $('.js--sc-990400a').click(function () {
       $('html, body').animate({scrollTop: $('#js--990400a').offset().top -120}, 1000);
    });

    $('.js--sc-990400b').click(function () {
       $('html, body').animate({scrollTop: $('#js--990400b').offset().top -120}, 1000);
    });

    $('.js--sc-990400c').click(function () {
       $('html, body').animate({scrollTop: $('#js--990400c').offset().top -120}, 1000);
    });

    $('.js--sc-990400d').click(function () {
       $('html, body').animate({scrollTop: $('#js--990400d').offset().top -120}, 1000);
    });

    $('.js--sc-990700a').click(function () {
       $('html, body').animate({scrollTop: $('#js--990700a').offset().top -120}, 1000);
    });

    $('.js--sc-990700b').click(function () {
       $('html, body').animate({scrollTop: $('#js--990700b').offset().top -120}, 1000);
    });


/* ---------------------------------------------------------------------------
   SCROLL TO -  CROSS REFERENCES
   For figures, the offset is set to .to -80 - e.g.

    $('.js--sc-fNN-01').click(function () {
       $('html, body').animate({scrollTop: $('#js--fNN-01').offset().top -80}, 1000);
    });

   For tables, the offset is set to .to -60 - e.g.

    $('.js--sc-tNN-01').click(function () {
       $('html, body').animate({scrollTop: $('#js--tNN-01').offset().top -60}, 1000);
    });

   For codefragments, the offset is set to .to -120 - e.g.

    $('.js--sc-cNN-01').click(function () {
       $('html, body').animate({scrollTop: $('#js--cNN-01').offset().top -120}, 1000);
    });

   For equations, the offset is set to .to -80 - e.g.

    $('.js--sc-eNN-01').click(function () {
       $('html, body').animate({scrollTop: $('#js--eNN-01').offset().top -80}, 1000);
    });

   For footnotes, the offset is set to .to -60 - e.g.

    $('.js--sc-fnNN').click(function () {
       $('html, body').animate({scrollTop: $('#js--fnNN').offset().top -80}, 1000);
    });
   ------------------------------------------------------------------------- */
    $('.js--sc-f99-01').click(function () {
       $('html, body').animate({scrollTop: $('#js--f99-01').offset().top -80}, 1000);
    });

    $('.js--sc-t99-01').click(function () {
       $('html, body').animate({scrollTop: $('#js--t99-01').offset().top -60}, 1000);
    });

    $('.js--sc-c99-01').click(function () {
       $('html, body').animate({scrollTop: $('#js--c99-01').offset().top -120}, 1000);
    });

    $('.js--sc-e99-01').click(function () {
       $('html, body').animate({scrollTop: $('#js--e99-01').offset().top -80}, 1000);
    });


});                                             /* END OF PAGE READY FUNCTION */
