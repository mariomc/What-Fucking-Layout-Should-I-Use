jQuery(document).ready(function ($) {

  // Show/Hide About and Share Info
  $('a.share').click(function(e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('article.share').slideUp(70);
    } else {
      $(this).addClass('active');
      $('article.share').slideDown(70);
    }
  });

  $('a.about').click(function(e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('article.about').slideUp(70);
    } else {
      $(this).addClass('active');
      $('article.about').slideDown(70);
    }
  });

  // Random Headlines
  var headlines = [
    "How about this fucking righteously awesome composition right here?",
    "Why not try this fucking whipper snapper on for size?",
    "Try these ballin' columns and rows on your next fucking project.",
    "Take a fucking screenshot and copy this amazing layout!",
    "Doesn't this one look fucking clean and sexy?",
    "You'll turn some fucking heads when you use this sweetness!",
    "Stop trying and just take this fucking layout already.",
    "Don't just fucking do something, stand there and take this layout!",
    "You're not gonna believe how great this one fucking looks.",
    "Hey, I just met you and this is fucking crazy. Here's my layout, try it maybe.",
    "Four score and seven years ago, I created this fucking layout.",
    "Harry Potter and the Fucking Layout of Azkaban.",
    "Why don't you stop dicking around and use this fucking layout already!",
    "Why think when you can just fucking copy this layouts?",
    "I'd say you're the shit, but only if you use this fucking layout!",
    "Errmagerrrd, it's a fucking layout!",
    "Have a devgasm with this fucking work of art.",
    "You won't not use this fucking ridiculous layout.",
    "Layout, layout, layout, layout, layout, fucking layout!",
    "Put this one in your fucking pipe and smoke it.",
    "If apples don't fall far from the tree, then you're a fucking handsome layout too!",
    "What would Lady Gaga think of this fucking layout?",
    "All hail the mighty fucking responsive layout!",
    "You want good fucking design advice? Use this layout and pwn noobs!",
    "What do you get when you cross a chicken with this layout? A row full of fucking eggs!",
    "Gordan Ramsay won't call this layout a fucking donkey!"
  ], layouts = [
    "<div class=" + "'row'><div class=" + "'twentyfour columns display sm'></div></div><div class=" + "'row'><div class=" + "'eight mobile-four columns display lg'></div><div class=" + "'one columns mobile-one'></div><div class=" + "'fifteen mobile-seven columns display lg'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display md'></div></div><div class=" + "'row'><div class=" + "'eight mobile-four columns display md'></div><div class=" + "'one columns mobile-one'></div><div class=" + "'eight mobile-three columns display md'></div><div class=" + "'one columns mobile-one'></div><div class=" + "'six mobile-three columns display md'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display tny'></div></div>",
    "<div class=" + "'row'><div class=" + "'twentyfour columns display tny'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display lg'></div></div><div class=" + "'row'><div class=" + "'twelve columns mobile-six display md'></div><div class=" + "'twelve columns mobile-six display md'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display sm'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display tny'></div></div>",
    "<div class=" + "'row'><div class=" + "'fifteen mobile-five columns display sm'></div><div class=" + "'one mobile-one columns'></div><div class=" + "'eight mobile-six columns display sm'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display xlg'></div></div><div class=" + "'row'><div class=" + "'one-third mobile-four columns display md'></div><div class=" + "'one columns hide-for-small'></div><div class=" + "'one-third mobile-four columns display md'></div><div class=" + "'one columns hide-for-small'></div><div class=" + "'one-third mobile-four columns display md'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display tny'></div></div>",
    "<div class=" + "'row'><div class=" + "'twentyfour columns display sm'></div></div><div class=" + "'row'><div class=" + "'one-third mobile-four columns display xlg'></div><div class=" + "'one columns mobile-one'></div><div class=" + "'one-third mobile-three columns display xlg'></div><div class=" + "'one-third mobile-three columns display xlg'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display md'></div></div>",
    "<div class=" + "'row'><div class=" + "'twentyfour columns display md'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display lg'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display sm'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display md'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display tny'></div></div>",
    "<div class=" + "'row'><div class=" + "'six mobile-four columns display sm'></div><div class=" + "'one mobile-one columns'></div><div class=" + "'seventeen mobile-seven columns display sm'></div></div><div class=" + "'row'><div class=" + "'seventeen mobile-seven columns display md'></div><div class=" + "'one mobile-one columns'></div><div class=" + "'six mobile-four columns display md'></div></div><div class=" + "'row'><div class=" + "'six mobile-four columns display md'></div><div class=" + "'one mobile-one columns'></div><div class=" + "'seventeen mobile-seven columns display md'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display lg'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display tny'></div></div>",
    "<div class=" + "'row'><div class=" + "'twentyfour columns display sm'></div></div><div class=" + "'row'><div class=" + "'seven columns display xlg'></div><div class=" + "'one columns'></div><div class=" + "'sixteen columns'><div class=" + "'row'><div class=" + "'twentyfour columns display sm'></div><div class=" + "'twentyfour columns display md'></div><div class=" + "'twentyfour columns display sm'></div><div class=" + "'twentyfour columns display sm'></div><div class=" + "'twentyfour columns display md'></div><div class=" + "'twentyfour columns display sm'></div></div></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display tny'></div></div>",
    "<div class=" + "'row'><div class=" + "'twentyfour columns display sm'></div></div><div class=" + "'row'><div class=" + "'eight mobile-four columns display xlg'></div><div class=" + "'eight mobile-four columns display xlg'></div><div class=" + "'eight mobile-four columns display xlg'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display sm'></div></div>",
    "<div class=" + "'row'><div class=" + "'twentyfour columns display tny'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display sm'></div></div><div class=" + "'row'><div class=" + "'seven mobile-three columns display lg'></div><div class=" + "'one mobile-one columns'></div><div class=" + "'seven mobile-eight columns display lg'></div><div class=" + "'eight columns display lg hide-for-small'></div></div><div class=" + "'row'><div class=" + "'seven mobile-three columns display sm'></div><div class=" + "'one mobile-one columns'></div><div class=" + "'seven mobile-three columns display sm'></div><div class=" + "'eight mobile-four columns display sm'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display md'></div></div>",
    "<div class=" + "'row'><div class=" + "'twentyfour columns display tny'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display sm'></div></div><div class=" + "'row'><div class=" + "'sixteen mobile-eight columns display xlg'></div><div class=" + "'eight mobile-four columns display xlg'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display sm'></div></div>",
    "<div class=" + "'row'><div class=" + "'twentyfour columns display sm'></div></div><div class=" + "'row'><div class=" + "'fourteen mobile-seven columns display lg'></div><div class=" + "'one mobile-one columns'></div><div class=" + "'nine mobile-four columns display lg'></div></div><div class=" + "'row'><div class=" + "'one-third mobile-three columns display md'></div><div class=" + "'one mobile-one columns'></div><div class=" + "'one-third mobile-three columns display md'></div><div class=" + "'one-third mobile-four columns display md'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display md'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display tny'></div></div>",
    "<div class=" + "'row'><div class=" + "'twentyfour columns display sm'></div></div><div class=" + "'row'><div class=" + "'two mobile-one columns display xlg'></div><div class=" + "'one mobile-one columns'></div><div class=" + "'eighteen mobile-eight columns display xlg'></div><div class=" + "'one mobile-one columns'></div><div class=" + "'two mobile-one columns display xlg'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display md'></div></div>",
    "<div class=" + "'row'><div class=" + "'eight mobile-three columns'><div class=" + "'row'><div class=" + "'twentyfour columns display sm'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display xlg'></div></div></div><div class=" + "'one mobile-one columns'></div><div class=" + "'fifteen mobile-eight columns'><div class=" + "'row'><div class=" + "'twentyfour columns display md'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display md'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display md'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display md'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display sm'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display tny'></div></div></div></div>",
    "<div class=" + "'row'><div class=" + "'twentyfour columns display md'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display md'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display md'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display md'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display md'></div></div>",
    "<div class=" + "'row'><div class=" + "'eighteen mobile-eight columns display sm'></div><div class=" + "'six mobile-four columns display sm'></div></div><div class=" + "'row'><div class=" + "'six mobile-four columns display lg'></div><div class=" + "'eighteen mobile-eight columns display lg'></div></div><div class=" + "'row'><div class=" + "'eighteen mobile-eight columns display md'></div><div class=" + "'six mobile-four columns display md'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display tny'></div></div>",
    "<div class=" + "'row'><div class=" + "'twelve mobile-six columns display tny'></div><div class=" + "'twelve mobile-six'></div></div><div class=" + "'row'><div class=" + "'twelve mobile-six columns display lg'></div><div class=" + "'twelve mobile-six columns display lg'></div></div><div class=" + "'row'><div class=" + "'twelve mobile-six columns display sm'></div><div class=" + "'twelve mobile-six columns display sm'></div></div><div class=" + "'row'><div class=" + "'twelve mobile-six columns display sm'></div><div class=" + "'twelve mobile-six columns display sm'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display sm'></div></div>",
    "<div class=" + "'row'><div class=" + "'twentyfour columns display xlg'></div></div><div class=" + "'row'><div class=" + "'eight mobile-four columns display md'></div><div class=" + "'eight mobile-four columns display md'></div><div class=" + "'eight mobile-four columns display md'></div></div>",
    "<div class=" + "'row'><div class=" + "'twentyfour columns display tny'></div></div><div class=" + "'row'><div class=" + "'eleven mobile-five columns display md'></div><div class=" + "'two mobile-one columns'></div><div class=" + "'eleven mobile-six columns display md'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display lg'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display sm'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display tny'></div></div>",
    "<div class=" + "'row'><div class=" + "'eight mobile-four columns'><div class=" + "'row'><div class=" + "'twentyfour columns display md'></div><div class=" + "'twentyfour columns display md'></div><div class=" + "'twentyfour columns display lg'></div><div class=" + "'twentyfour columns display sm'></div></div></div><div class=" + "'eight mobile-four columns'><div class=" + "'row'><div class=" + "'twentyfour columns display lg'></div><div class=" + "'twentyfour columns display md'></div><div class=" + "'twentyfour columns display sm'></div><div class=" + "'twentyfour columns display md'></div></div></div><div class=" + "'eight mobile-four columns'><div class=" + "'row'><div class=" + "'twentyfour columns display sm'></div><div class=" + "'twentyfour columns display lg'></div><div class=" + "'twentyfour columns display md'></div><div class=" + "'twentyfour columns display sm'></div><div class=" + "'twentyfour columns display sm'></div></div></div></div>",
    "<div class=" + "'row'><div class=" + "'twentyfour columns display sm'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display md'></div></div><div class=" + "'row'><div class=" + "'eight mobile-four columns'><div class=" + "'row'><div class=" + "'twentyfour columns display sm'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display sm'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display sm'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display sm'></div></div></div><div class=" + "'fifteen mobile-seven columns'><div class=" + "'row'><div class=" + "'twentyfour columns display md'></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display md'></div></div></div></div><div class=" + "'row'><div class=" + "'twentyfour columns display sm'></div></div>"
  ];

  function getHeadline() {
     return headlines[Math.floor(Math.random() * headlines.length)];
  }
  function getLayout() {
     return layouts[Math.floor(Math.random() * layouts.length)];
  }

  $('header > h1').text(getHeadline());
  $('.row.grid').children('div.twentyfour.columns').html(getLayout());

  $('a#newLayout').click(function(e) {
    e.preventDefault();
    $('header > h1').text(getHeadline());
    $('.row.grid').children('div.twentyfour.columns').html(getLayout());
  });
});
