/* PRACTICALSERIES (c) 2016

*******************************************************************************
Title :          LOCAL SCROLL - JQUERY                          03-00-SCROLL.JS
*******************************************************************************

PRACTICALSERIES: Practical Series of Publications by Michael Gledhill
                 Published in the United Kingdom

                 Email: mg@practicalseries.com
                 Web:   www.practicalseries.com

-------------------------------------------------------------------------------
DETAILS         LOCAL SCROLL FUNCTIONS

jQuery is using version 3.1.0 from the GoogleAPIs library.

This script applies the scroll to a point within the page (srollTop)
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

The scrolltop function has an offset of -60px to ensure the title is visible
below the fixed navigation bar.

-------------------------------------------------------------------------------
MODIFICATION HISTORY:

This is a complete summary of all software modifications.

Date          Issue        Author         Reason for Modification
-------------------------------------------------------------------------------
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
        "<p>scroll.js&nbsp;&mdash;&nbsp;P10</p>" /* LOCAL JS REVISION NUMBER */
    );




/* ****************************************************************************
   SLIDESHOW ON SCROLL
   ****************************************************************************
   This script scrolls through a series of images held within the
   .animate-images class as the user scrolls down the web page.

   The image width is set in css within the .animated class attached to each
   image.

   The images will cycle through all the images in the .animate-images div
   (in this case 21 imagages).

   The first image is loaded by default. By default, the cycle starts when the
   user scrolls DOWN and the BOTTOM of the .animate-images div enters the
   viewport. All the images will be cycled by the time the TOP of
   .animate-images div reaches the TOP of the viewport.

   By adding startEarly and stopLate values, the animation can be started
   before the bottom of the div is completely in the viewport and continue
   after the top has left.
   ************************************************************************* */


/* ---------------------------------------------------------------------------
   SET HEIGHT OF IMAGES
   ---------------------------------------------------------------------------
   The image holder class (.animate-images) height is set to be the same as the
   width of the images (in this case the images are square).
   ------------------------------------------------------------------------- */
    var cw = $('.animated').width();            /* fetch the image width (set in css) */
    $('.animate-images').css({                  /* set the image holder height to this value */
    'height': cw + 'px'                         /* i.e same height as width (square images) */
    });


/* ---------------------------------------------------------------------------
   CONSTANTS:
   ---------------------------------------------------------------------------
        startEarly = xx     Starts the animation cylce xx px before the
                            bottom of the holder enters the viewport
        stopLate = xx       The animation continues for xx px after the
                            top of the holder leaves the top of the viewport


   Note: startEarly and stopLate can have negative values. If this is the
         case, the animation will take place within a smaller are of scroll
   ------------------------------------------------------------------------- */
    var startEarly = 50;
    var stopLate = 50;

/* ---------------------------------------------------------------------------
   IDENTIFY NUMBER OF IMAGES
   ---------------------------------------------------------------------------
        pictureCount        The number of images in the .animate-images
                            holder (minumum value 1)
   ------------------------------------------------------------------------- */
    var pictureCount = $('.animate-images img').length;
    if (pictureCount <= 0) {                            /* ensure number is not zero */
            pictureCount = 1;
        }


 /* ---------------------------------------------------------------------------
   CALL FUNCTION
   ---------------------------------------------------------------------------
   The animateGrid function is called once (after page load) to ensure that
   an image is displayed.

   The function is then called whenver a scroll event takes place
   ($(window).scroll).

   It would also be possibe to do this by binding the function to the scroll
   event i.e.

       $(window).bind('scroll', function() {
        animateGrid();
        });
   ------------------------------------------------------------------------- */
   animateGrid();                               /* force a single call (onload) to display initial picture */

    $(window).scroll(function() {               /* call function on scroll */
        animateGrid();
    });


/* ---------------------------------------------------------------------------
   FUNCTION DECLARATION -   ANIMATEGRID
   ---------------------------------------------------------------------------
   Calls the animateGrid function - function is called continuously
   ------------------------------------------------------------------------- */
    function animateGrid() {

/*      ----------------------------------------------------------------------
        VARIABLES
        ----------------------------------------------------------------------
            vpHeight        Height of viewport (px)
            vpTop           Distance from top of page to top of viewport (px)
            imHeight        Height of image (px)
            imTop           Distance from top of page to top of image (px)
            nvHeight        Current height of navigation bar at top of page (px)

            range           Number of pixels between start of animation and
                            end of navigation (i.e from when bottom of
                            image enters the viewport until the top of the
                            imate leave the viewport - qualified by
                            startEarly and stopLate values)
            distUp          Current scroll postion (px) within the cylce
                            area (i.e the animation is acive)
            distUpNorm      A normalised conversion of distUp, distUpNorm
                            is always in the range:
                                    0 - (start of animation)
                                 1000 - (end of animation)
                            Effectively percent x 10
                            1000 is used (rather than 100) to give
                            better resolution when rounding
            scrollRes       Number of pixels between changing images
            imageIndex      Number of the current image being displayed

        If the image is in such a position on the web page, that it is
        completely displayed when the page loads, the bottom of the image
        can never scroll through the bottom of the view port.

        Under these circumstances the startEarly value is set to zero, and
        the effective height of the viewport is set to the match the
        position of the bottom of the image (i.e. vpHeight = imTop + imHeight)
        -------------------------------------------------------------------- */
        var imHeight = $('.animate-images').height();               /* get image height */
        var imTop = $('.animate-images').offset().top;              /* position of top of image in document */
            if (imTop + imHeight <= $(window).height()) {           /* if image is entirely displayed in the page at start */
                startEarly = 0;                                     /* i.e. bottom can never scroll off the bottom of the page */
            }                                                       /* then set startEarly to zero (can't start early) */

        var vpHeight = $(window).height() + startEarly + stopLate;  /* get viewport height */
        var vpTop = $(window).scrollTop() - stopLate;               /* position of top of viewport in document */
        var nvHeight =$('nav').height();                            /* height of navigation bar */

            if (imTop + imHeight <= vpHeight) {                     /* if image is entirely displayed in the page at start */
                vpHeight = imTop + imHeight;                        /* then the bottom can never scroll off the bottom of the page */
            }                                                       /* to compensate for this, the effective viewport heigth is set
                                                                    /* to be the same as the bottom of the image */

        var range = vpHeight - imHeight - nvHeight;                 /* Range of scroll (px) overwhich cylce occurs */
            if (range <= 0) { range = 1; }                          /* ensure range is not zero */

        var distUp = vpTop + vpHeight - imTop - imHeight;
            if (distUp < 0)   { distUp = 0; }                       /* limit dispUp to 0 (if less than) */
            if (distUpNorm > range) { distUpNorm = range; }         /* limit dispUp to range value (if more than) */

        var distUpNorm = distUp / range * 1000;
            if (distUpNorm < 0)   { distUpNorm = 0; }               /* limit dispUpPer to 0 (if less than) */
            if (distUpNorm > 1000) { distUpNorm = 1000; }           /* limit dispUpPer to 1000 (if more than) */

        var scrollRes = 1000 / pictureCount;                        /* number of pixels between picure changes */

        var imageIndex = Math.round(distUpNorm / scrollRes);
            if (imageIndex >= pictureCount) {                       /* limit imageIndex to last image (if more than) */
            imageIndex = pictureCount - 1;
        }


/*      ----------------------------------------------------------------------
        DEBUG
        ----------------------------------------------------------------------
        This section is normally commented out

        This section overwrites any html line with the class .vp - i.e.:
            <div class="vp sans" style="font-size: 60%"></div>

        with debug information, in this case, the values of all the above
        variables
        -------------------------------------------------------------------- */
        /*
        $('.vp').text('vpHeight ' + vpHeight + ' vpTop ' + vpTop + ' imHeight ' + imHeight + ' imTop ' + imTop + ' range ' + range + ' distUp ' + distUp + ' distUp% ' + distUpNorm + ' nvHeight ' + nvHeight + ' noPics ' + pictureCount + ' ScrollRes ' + scrollRes);          /* debug, pring working data in .vp class div */


/*      ----------------------------------------------------------------------
        FUNCTION ACTION
        ----------------------------------------------------------------------
        Initially hide the image, then select the current image
        and finally show the new image

        This happens every time the function is called (i.e. whenever the
        user scroll the display)
        -------------------------------------------------------------------- */

        $(".animate-images img").hide();                            /* hide image */
        $(".animate-images img").eq(imageIndex).show();             /* select current image and show */
    }
/* ************************************************************************* END OF SLIDESHOW FUNCTION */



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

          $('.js--sc-nn0000').click(function () {
           $('html, body').animate({scrollTop: $('#js--nn0000').offset().top -10}, 1000);
          });
   ------------------------------------------------------------------------- */
    $('.js--sc-030000').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--030000').offset().top -10}, 1000);
    });                                         /* END of scroll function */


  /* ---------------------------------------------------------------------------
   SCROLL TO -  SECTIONS & SUBSECTIONS
   The offset is set to .to -20 - e.g.

          $('.js--sc-nn0100').click(function () {
           $('html, body').animate({scrollTop: $('#js--nn0100').offset().top -20}, 1000);
          });
   ------------------------------------------------------------------------- */
    $('.js--sc-030100').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--030100').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-030101').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--030101').offset().top -20}, 1000);
    });                                         /* END of scroll function */


   /* ---------------------------------------------------------------------------
   SCROLL TO -  NON-STANDARD (INLINE) SECTIONS
   The offset is set to .to -120 - e.g.

          $('.js--sc-nn0101a').click(function () {
           $('html, body').animate({scrollTop: $('#js--nn0101a').offset().top -120}, 1000);
          });
   ------------------------------------------------------------------------- */


/* ---------------------------------------------------------------------------
   SCROLL TO -  CROSS REFERENCES
   For figures, the offset is set to .to -80 - e.g.

          $('.js--sc-fnn-01').click(function () {
           $('html, body').animate({scrollTop: $('#js--fnn-01').offset().top -80}, 1000);
          });

   For tables, the offset is set to .to -60 - e.g.

          $('.js--sc-tnn-01').click(function () {
           $('html, body').animate({scrollTop: $('#js--tnn-01').offset().top -60}, 1000);
          });
   ------------------------------------------------------------------------- */
         $('.js--sc-f03-01').click(function () {
           $('html, body').animate({scrollTop: $('#js--f03-01').offset().top -80}, 1000);
          });

        $('.js--sc-f03-02').click(function () {
           $('html, body').animate({scrollTop: $('#js--f03-02').offset().top -80}, 1000);
          });

        $('.js--sc-f03-03').click(function () {
           $('html, body').animate({scrollTop: $('#js--f03-03').offset().top -80}, 1000);
          });

        $('.js--sc-f03-04').click(function () {
           $('html, body').animate({scrollTop: $('#js--f03-04').offset().top -80}, 1000);
          });

        $('.js--sc-f03-05').click(function () {
           $('html, body').animate({scrollTop: $('#js--f03-05').offset().top -80}, 1000);
          });


});                                             /* END OF PAGE READY FUNCTION */
