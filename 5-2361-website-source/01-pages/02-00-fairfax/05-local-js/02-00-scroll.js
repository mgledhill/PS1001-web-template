/* PRACTICALSERIES (c) 2016

*******************************************************************************
Title :          LOCAL SCROLL - JQUERY                          02-00-SCROLL.JS
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

22 Mar 2019   d-P13.00.04  M. Gledhill    Sections updated

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
    });


/* ---------------------------------------------------------------------------
   SCROLL TO CHAPTER (Non heading level after TOC)
   The offset is set to .to -10 - e.g.

    $('.js--sc-NN0000').click(function () {
       $('html, body').animate({scrollTop: $('#js--NN0000').offset().top -10}, 1000);
    });
   ------------------------------------------------------------------------- */
    $('.js--sc-020000x').click(function () {
       $('html, body').animate({scrollTop: $('#js--020000x').offset().top -10}, 250);
    });

    $('.js--sc-020000').click(function () {
       $('html, body').animate({scrollTop: $('#js--020000').offset().top -10}, 250);
    });


/* ---------------------------------------------------------------------------
   SCROLL TO -  SECTIONS & SUBSECTIONS
   The offset is set to .to -20 - e.g.

    $('.js--sc-NN0100').click(function () {
       $('html, body').animate({scrollTop: $('#js--NN0100').offset().top -20}, 1000);
    });
   ------------------------------------------------------------------------- */
    $('.js--sc-020100').click(function () {
       $('html, body').animate({scrollTop: $('#js--020100').offset().top -20}, 1000);
    });

    $('.js--sc-020101').click(function () {
       $('html, body').animate({scrollTop: $('#js--020101').offset().top -20}, 1000);
    });

    $('.js--sc-020102').click(function () {
       $('html, body').animate({scrollTop: $('#js--020102').offset().top -20}, 1000);
    });

    $('.js--sc-020103').click(function () {
       $('html, body').animate({scrollTop: $('#js--020103').offset().top -20}, 1000);
    });

    $('.js--sc-020104').click(function () {
       $('html, body').animate({scrollTop: $('#js--020104').offset().top -20}, 1000);
    });

    $('.js--sc-020105').click(function () {
       $('html, body').animate({scrollTop: $('#js--020105').offset().top -20}, 1000);
    });

    $('.js--sc-020106').click(function () {
       $('html, body').animate({scrollTop: $('#js--020106').offset().top -20}, 1000);
    });

    $('.js--sc-020107').click(function () {
       $('html, body').animate({scrollTop: $('#js--020107').offset().top -20}, 1000);
    });


/* ---------------------------------------------------------------------------
   SCROLL TO -  NON-STANDARD (INLINE) SECTIONS
   The offset is set to .to -120 - e.g.

          $('.js--sc-nn0101a').click(function () {
           $('html, body').animate({scrollTop: $('#js--nn0101a').offset().top -120}, 1000);
          });
   ------------------------------------------------------------------------- */
    $('.js--sc-02').click(function () {
       $('html, body').animate({scrollTop: $('#js--02').offset().top -10}, 1000);
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
    $('.js--sc-t02-01').click(function () {
        $('html, body').animate({scrollTop: $('#js--t02-01').offset().top -60}, 1000);
    });

});                                             /* END OF PAGE READY FUNCTION */
