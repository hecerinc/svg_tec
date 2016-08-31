$(window).on('load', function() {
  var bg_obj, bg_white, elements, ipal, nino, svg, texts;
  svg = $('object').contents();
  elements = svg.find('.element');
  texts = svg.find('.text');
  bg_obj = svg.find('#bg_obj');
  bg_white = svg.find('#bg_white');
  nino = svg.find('#nino');
  ipal = svg.find('.ipal');
  nino.hover((function() {
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
  ipal.on('click', function() {
    var elem, hideKid, i, index, j, len, numb, time;
    hideKid = function(el, cont) {
      elements.removeClass('toHide');
      texts.removeClass('toHide');
      bg_obj.removeClass('toHide');
      bg_white.removeClass('toHide');
      return $(el).removeClass('active');
    };
    if ($(nino).hasClass('active')) {
      TweenMax.to(".nino_g", 0.2, {
        autoAlpha: 0,
        display: "none"
      });
      TweenMax.to(".nino_container", 0.2, {
        autoAlpha: 0,
        width: "0%",
        height: "0%",
        display: 'none'
      });
      TweenMax.to(nino, 0.3, {
        scale: "1",
        position: "",
        xPercent: 0,
        yPercent: 0,
        onComplete: hideKid,
        onCompleteParams: [nino]
      });
    } else {
      $(nino).addClass('active');
      TweenMax.to(nino, 0.3, {
        scale: "2.2",
        position: "absolute",
        xPercent: -150,
        yPercent: -10
      });
      TweenMax.to(".nino_container", 0.3, {
        width: "100%",
        height: "100%",
        autoAlpha: 1,
        display: "block"
      });
      elem = $(".nino_g");
      for (index = j = 0, len = elem.length; j < len; index = ++j) {
        i = elem[index];
        numb = index + 1;
        time = (index * 10) + 0.2;
        TweenMax.to(".nino_g" + numb, 0.3, {
          autoAlpha: 1,
          display: "block",
          delay: time
        });
        TweenMax.to(".nino_g" + numb, 0.2, {
          autoAlpha: 0,
          display: "none",
          delay: numb * 10
        });
      }
      elements.addClass('toHide');
      texts.addClass('toHide');
      bg_obj.addClass('toHide');
      bg_white.addClass('toHide');
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
      nino.removeClass('toHide');
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
        scale: "11"
      });
      elements.addClass('toHide');
      texts.addClass('toHide');
      bg_obj.addClass('toHide');
      nino.addClass('toHide');
      $(this).removeClass('toHide');
      console.log(div);
      return TweenMax.to(div, 0.8, {
        autoAlpha: 1,
        display: 'block'
      });
    }
  });
});

