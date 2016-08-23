$(window).on('load', function() {
  var bg_obj, elements, svg, texts;
  svg = $('object').contents();
  elements = svg.find('.element');
  texts = svg.find('.text');
  bg_obj = svg.find('#bg_obj');
  elements.hover((function() {
    if ($(this).hasClass('active')) {

    } else {
      TweenMax.to(this, 0.2, {
        scale: "1.1",
        ease: Power0.easeNone,
        transformOrigin: "50% 50%"
      });
    }
  }), function() {
    if ($(this).hasClass('active')) {

    } else {
      TweenMax.to(this, 0.1, {
        scale: "1",
        ease: Power0.easeNone,
        transformOrigin: "50% 50%"
      });
    }
  });
  return elements.on('click', function() {
    var div, resetAll;
    div = $(this).attr('id');
    div = div.replace('circle_', '');
    div = $('.' + div);
    resetAll = function(el, cont) {
      elements.removeClass('toHide');
      texts.removeClass('toHide');
      bg_obj.removeClass('toHide');
      return $(el).removeClass('active');
    };
    if ($(this).hasClass('active')) {
      TweenMax.to(div, 0.2, {
        autoAlpha: 0,
        display: 'none'
      });
      return TweenMax.to(this, 0.3, {
        scale: "1",
        onComplete: resetAll,
        onCompleteParams: [this, div]
      });
    } else {
      $(this).addClass('active');
      TweenMax.to(this, 0.6, {
        scale: "10"
      });
      elements.addClass('toHide');
      texts.addClass('toHide');
      bg_obj.addClass('toHide');
      $(this).removeClass('toHide');
      return TweenMax.to(div, 0.8, {
        autoAlpha: 1,
        display: 'block'
      });
    }
  });
});

