(function($){

  // Keep track of where we are in the story
  var counter = 0;

  // Story contains all the actions that bring the slides to life
  // It contains the narrative in both directions: forward and reverse.
  // - feel free to explain to me how this could be accomplished with only one array
  // - or to avoid eval?
  var story = {
    'forward': [

      // Title
      "scrollTo('#s-title'); ",

      // Slinky
      "scrollTo('#s-slinky'); ",
      "$('#s-slinky .slinky').toggleClass('hide'); ",
      "$('#s-slinky .slinky').toggleClass('half'); ",
      "$('#s-slinky p.slinky-desc').toggleClass('hide'); "+
      "$('#s-slinky p.intro').toggleClass('dim'); ",
      "$('#s-slinky .slinky').toggleClass('move half full'); ",

      // the beginning
      "scrollTo('#die-undliche-gesichte'); "

    ],
    'reverse': [

      // Title
      "",

      // Slinky
      "scrollTo('#s-title'); ",
      "$('#s-slinky .slinky').toggleClass('hide'); ",
      "$('#s-slinky .slinky').toggleClass('half'); ",
      "$('#s-slinky p.slinky-desc').toggleClass('hide'); "+
      "$('#s-slinky p.intro').toggleClass('dim'); ",
      "$('#s-slinky .slinky').toggleClass('move half full'); ",

      // the beginning
      "scrollTo('#s-slinky'); "

    ]
  };

  // Set up the arrow keys to progress through the story
  $(document).keyup(function(e) {
    // counter is incremented differently depending on direction
    // so that the two arrays with forward/reverse steps can be
    // kept in sync and maintained in the most sane fashion.
    if (e.keyCode == 37) { storyBack(); }
    if (e.keyCode == 39) { storyNext(); }
  });

  // Set up touch nav to progress through the story
  $('.touch nav .back').bind('touchstart', function() { storyBack(); });
  $('.touch nav .next').bind('touchstart', function() { storyNext(); });

  /**
   * Advances story one step
   */
  function storyNext() {
    eval(story.forward[++counter]);
  }

  /**
   * Advances story *back* one step
   */
  function storyBack() {
    eval(story.reverse[counter--]);
  }

  /**
   * Scrolls to a particular anchor
   */
  function scrollTo(target){
    var element = $(target);
    $('html,body').animate({scrollTop: element.offset().top - 25}, 'fast');
  }

})(jQuery);
