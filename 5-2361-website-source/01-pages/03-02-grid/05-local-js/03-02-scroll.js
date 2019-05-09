/* PRACTICALSERIES (c) 2016

*******************************************************************************
Title :          LOCAL SCROLL - JQUERY                          03-02-SCROLL.JS
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
09 May 2019   R01          M. Gledhill    First formal release

27 Mar 2019   P14          M. Gledhill    Published

23 Mar 2019   d-P13.00.04b M. Gledhill    Sections updated

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
   $('.js--sc-000000').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--000000').offset().top -80}, 1000);
    });                                         /* END of scroll function */


/* ---------------------------------------------------------------------------
   SCROLL TO CHAPTER (Non heading level after TOC)
   The offset is set to .to -10 - e.g.

    $('.js--sc-NN0000').click(function () {
       $('html, body').animate({scrollTop: $('#js--NN0000').offset().top -10}, 1000);
    });
   ------------------------------------------------------------------------- */

/* ---------------------------------------------------------------------------
   SCROLL TO -  SECTIONS & SUBSECTIONS
   The offset is set to .to -20 - e.g.

    $('.js--sc-NN0100').click(function () {
       $('html, body').animate({scrollTop: $('#js--NN0100').offset().top -20}, 1000);
    });
   ------------------------------------------------------------------------- */
    $('.js--sc-030200').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--030200').offset().top -20}, 250);
    });                                         /* END of scroll function */

    $('.js--sc-030201').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--030201').offset().top -20}, 1000);
    });                                         /* END of scroll function */
    $('.js--sc-030202').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--030202').offset().top -20}, 1000);
    });                                         /* END of scroll function */
    $('.js--sc-030203').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--030203').offset().top -20}, 1000);
    });                                         /* END of scroll function */
    $('.js--sc-030204').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--030204').offset().top -20}, 1000);
    });                                         /* END of scroll function */
    $('.js--sc-030205').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--030205').offset().top -20}, 1000);
    });                                         /* END of scroll function */
    $('.js--sc-030206').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--030206').offset().top -20}, 1000);
    });                                         /* END of scroll function */


/* ---------------------------------------------------------------------------
   SCROLL TO -  NON-STANDARD (INLINE) SECTIONS
   The offset is set to .to -120 - e.g.

          $('.js--sc-nn0101a').click(function () {
           $('html, body').animate({scrollTop: $('#js--nn0101a').offset().top -120}, 1000);
          });
   ------------------------------------------------------------------------- */
    $('.js--sc-030201a').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--030201a').offset().top -120}, 1000);
    });                                          /* END of scroll function */

    $('.js--sc-030201b').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--030201b').offset().top -120}, 1000);
    });                                          /* END of scroll function */

   $('.js--sc-030201c').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--030201c').offset().top -120}, 1000);
    });                                          /* END of scroll function */

   $('.js--sc-030206a').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--030206a').offset().top -120}, 1000);
    });                                          /* END of scroll function */
                                         /* END of scroll function */
   $('.js--sc-030206b').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--030206b').offset().top -120}, 1000);
    });                                          /* END of scroll function */
                                         /* END of scroll function */
   $('.js--sc-030206c').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--030206c').offset().top -120}, 1000);
    });                                          /* END of scroll function */
                                         /* END of scroll function */
   $('.js--sc-030206d').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--030206d').offset().top -120}, 1000);
    });                                          /* END of scroll function */
                                         /* END of scroll function */
   $('.js--sc-030206e').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--030206e').offset().top -120}, 1000);
    });                                          /* END of scroll function */
                                         /* END of scroll function */
   $('.js--sc-030206f').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--030206f').offset().top -120}, 1000);
    });                                          /* END of scroll function */
                                         /* END of scroll function */

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
     $('.js--sc-f03-07').click(function () {
       $('html, body').animate({scrollTop: $('#js--f03-07').offset().top -80}, 1000);
      });

     $('.js--sc-f03-08').click(function () {
       $('html, body').animate({scrollTop: $('#js--f03-08').offset().top -80}, 1000);
      });

     $('.js--sc-f03-09').click(function () {
       $('html, body').animate({scrollTop: $('#js--f03-09').offset().top -80}, 1000);
      });

     $('.js--sc-f03-10').click(function () {
       $('html, body').animate({scrollTop: $('#js--f03-10').offset().top -80}, 1000);
      });

     $('.js--sc-f03-11').click(function () {
       $('html, body').animate({scrollTop: $('#js--f03-11').offset().top -80}, 1000);
      });

     $('.js--sc-f03-12').click(function () {
       $('html, body').animate({scrollTop: $('#js--f03-12').offset().top -80}, 1000);
      });

     $('.js--sc-f03-13').click(function () {
       $('html, body').animate({scrollTop: $('#js--f03-13').offset().top -80}, 1000);
      });

     $('.js--sc-f03-14').click(function () {
       $('html, body').animate({scrollTop: $('#js--f03-14').offset().top -80}, 1000);
      });

     $('.js--sc-f03-15').click(function () {
       $('html, body').animate({scrollTop: $('#js--f03-15').offset().top -80}, 1000);
      });

     $('.js--sc-f03-16').click(function () {
       $('html, body').animate({scrollTop: $('#js--f03-16').offset().top -80}, 1000);
      });

     $('.js--sc-f03-17').click(function () {
       $('html, body').animate({scrollTop: $('#js--f03-17').offset().top -80}, 1000);
      });

     $('.js--sc-t03-01').click(function () {
       $('html, body').animate({scrollTop: $('#js--t03-01').offset().top -80}, 1000);
      });

     $('.js--sc-t03-02').click(function () {
       $('html, body').animate({scrollTop: $('#js--t03-02').offset().top -80}, 1000);
      });

     $('.js--sc-t03-03').click(function () {
       $('html, body').animate({scrollTop: $('#js--t03-03').offset().top -80}, 1000);
      });

     $('.js--sc-t03-04').click(function () {
       $('html, body').animate({scrollTop: $('#js--t03-04').offset().top -80}, 1000);
      });

     $('.js--sc-t03-05').click(function () {
       $('html, body').animate({scrollTop: $('#js--t03-05').offset().top -80}, 1000);
      });

     $('.js--sc-t03-06').click(function () {
       $('html, body').animate({scrollTop: $('#js--t03-06').offset().top -80}, 1000);
      });

     $('.js--sc-t03-07').click(function () {
       $('html, body').animate({scrollTop: $('#js--t03-07').offset().top -80}, 1000);
      });

     $('.js--sc-t03-07a').click(function () {
       $('html, body').animate({scrollTop: $('#js--t03-07a').offset().top -80}, 1000);
      });



});                                             /* END OF PAGE READY FUNCTION */
