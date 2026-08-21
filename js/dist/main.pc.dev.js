"use strict";

$(document).ready(function () {
  // 디바이스 체크
  var isMobile = 'ontouchstart' in document.documentElement && /mobi/i.test(navigator.userAgent);
  $('.mainMenu > a, .pagenater > a').each(function () {
    $(this).click(function () {
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 300);
      return false;
    });
  });

  if ($(".btnPreBook").length > 0) {
    $(".btnPreBook").on("click", function () {
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 300);
      return false;
    });
  }

  function setStgHeight() {
    var screenWidth = $(window).width();
    var screenHeight = $(window).height();

    if (screenWidth > 640) {
      if (screenWidth > 1024) {
        // PC
        if (screenHeight > 1039) {
          $(".section").height(screenHeight);
          $(".reset").height(screenHeight);
        } else {
          $(".section").height(1039);
          $(".reset").height(1039);
        }
      } else {
        // Tablet
        $(".section").height(screenHeight);
        $(".reset").height(screenHeight);
      }
    } else {
      $(".section").height(screenHeight);
      $(".reset").height(screenHeight);
    }
  }

  setStgHeight(); // 페이지 로딩 후 url 체크해서 타겟 위치로 스크롤 이동

  var hash = window.location.hash;
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 500);
  $(".pageDown").on("click", function () {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
  });

  var readyCont = function readyCont() {
    var t = setTimeout(function () {
      $('body').addClass('on');
    }, 1000);
    $(".mainMenu a").each(function (i) {
      var _this = $(this);

      _this.on("mouseenter", function () {
        if (_this.hasClass("mn2")) {
          $(".subMenuWrapper").css({
            "display": "block"
          });
        } else {
          $(".subMenuWrapper").css({
            "display": "none"
          });
        }
      });
    });
    $(".subMenuWrapper").on("mouseleave", function () {
      $(".subMenuWrapper").css({
        "display": "none"
      });
    });
    $(".sns4").on('mouseenter', function () {
      $(".shareList").css({
        "height": "178px",
        "opacity": 1
      });
    });
    $(".shareList").on("mouseleave", function () {
      $(".shareList").css({
        "height": "0px",
        "opacity": 0
      });
    }); // 베너 닫기 처리

    $(".closeBanner").on("click", function () {
      $(".stickyBanner").hide();
    });
  };

  readyCont();

  var stgOn = function stgOn() {
    var lastPage = $(".animate").length - 1;
    var scrT = $(window).scrollTop();

    var _screenHeight = $(".section").height();

    var _page = Math.round($(window).scrollTop() / _screenHeight + 1);

    $(".animate").eq(_page - 1).addClass('on');
    $("#bodyWrapper").attr('class', 'pg' + _page);
    $(".animate").each(function () {
      // 개별적으로 Wheel 이벤트 적용 mousewheel(IE/chrome/opera) DOMMouseScroll(FF)
      $(this).on("mousewheel DOMMouseScroll", function (e) {
        e.preventDefault();
        var delta = 0;
        /* IE */

        if (!event) event = window.event; //휠에 대한 정보 얻기 파이어폭스 외 IE/Chrome/Opera = wheelDelta

        if (event.wheelDelta) {
          delta = event.wheelDelta / 50; //평균 50~120 사이로 요소의 인식높이에 따라 다름(한 화면(height100%)기준일떄는 120

          if (window.opera) delta = -delta; //휠에 대한 정보 얻기 Mozilla FF = detail
        } else if (event.detail) delta = -event.detail / 3;

        var moveTop = null; // 마우스휠을 위에서 아래로

        if (delta < 0) {
          if ($(this).index() < lastPage) {
            if ($(this).next() != undefined) {
              moveTop = $(this).next().offset().top;
              $(".animate").removeClass('on');
              $(".animate").eq(_page - 1).addClass('on');
            }
          } else {
            return false;
          } // 마우스휠을 아래에서 위로

        } else {
          if ($(this).prev() != undefined) {
            if (scrT > $(document).height() - $(window).height() - 70) {
              moveTop = $(".animate").eq(lastPage - 1).offset().top;
            } else {
              moveTop = $(this).prev().offset().top;
              $(".animate").removeClass('on');
              $(".animate").eq(_page - 2).addClass('on');
              $(".animate").eq(_page - 1).addClass('on');
            }
          }
        } // 화면 이동 0.8초(800)


        $("html,body").stop().animate({
          scrollTop: moveTop + 'px'
        }, {
          duration: 300,
          complete: function complete() {}
        });
      });
    });
  };

  stgOn(); // 레이어 열기

  $(".uiOpenLyr").each(function () {
    $(this).on("click", function () {
      var lyrEl = $(this).attr("data-roll");
      $("#" + lyrEl).addClass('isActive');
    });
  });
  $(".uiCloseLyr").each(function () {
    $(this).on("click", function () {
      $(this).closest(".modalDimmed").removeClass('isActive');
    });
  }); // icheck

  $(".ppCheck").iCheck({
    checkboxClass: 'icheckbox',
    radioClass: 'iradio',
    increaseArea: '20%'
  });
  $(".ppCheck2").iCheck({
    checkboxClass: 'icheckbox2',
    radioClass: 'iradio2',
    increaseArea: '20%'
  }); // var videoList = ['../video/main_pc.mp4', '../video/main_tablet.mp4', '../video/main_mo.mp4'];
  // // 메인 동영상 해상도별 변경하기
  // function mainBGChange() {
  //   if ($("#mainVideoPlayer").length > 0) {
  //     var wscreen = $(window).width();
  //     var vdoBgPlayer = document.getElementById('mainVideoPlayer');
  //     var vdoBgSource = document.getElementById('mainVideoSource');
  //     if (wscreen > 768) {
  //       vdoBgPlayer.src = videoList[0];
  //       vdoBgSource.src = videoList[0];
  //       vdoBgPlayer.poster = "../images/bg_pg0_0.jpg";
  //       vdoBgPlayer.load();
  //       vdoBgPlayer.play();
  //     } else {
  //       if (wscreen > 640) {
  //         vdoBgPlayer.src = videoList[1];
  //         vdoBgSource.src = videoList[1];
  //         vdoBgPlayer.poster = "../images/bg_pg0_1.jpg";
  //         vdoBgPlayer.load();
  //         vdoBgPlayer.play();
  //       } else {
  //         vdoBgPlayer.src = videoList[2];
  //         vdoBgSource.src = videoList[2];
  //         vdoBgPlayer.poster = "../images/bg_pg0_2.jpg";
  //         vdoBgPlayer.load();
  //         vdoBgPlayer.play();
  //       }
  //     }
  //   }
  // }
  // mainBGChange();

  if ($(".iptPhoneNumber input").length > 0) {
    var ph;
    $(this).on("focusin", function () {
      ph = $(".iptPhoneNumber input").attr("placeholder");
      $(".iptPhoneNumber input").attr("placeholder", "");
      console.log(ph);
    }).on("focusout", function () {
      $(".iptPhoneNumber input").attr("placeholder", ph);
    });
  }

  $(window).resize($.debounce(50, function (e) {
    setStgHeight(); // mainBGChange();

    readyCont();
  }));
  $(window).scroll($.debounce(50, function (e) {
    stgOn();
  }));
});