$(document).ready(function () {
  // 디바이스 체크
  var isMobile =
    "ontouchstart" in document.documentElement &&
    /mobi/i.test(navigator.userAgent);

  // function setStgHeight() {
  //   var screenHeight = $(window).height();
  //   $(".section").height(screenHeight);
  //   $(".reset").height(screenHeight);
  // }
  // setStgHeight();
  // 페이지 로딩 후 url 체크해서 타겟 위치로 스크롤 이동
  var hash = window.location.hash;
  $("html, body").animate({ scrollTop: $(hash).offset().top }, 500);
  // alert($(window).width());
  $(".pageDown").on("click", function () {
    $("html, body").animate(
      { scrollTop: $($.attr(this, "href")).offset().top },
      500,
    );
    return false;
  });
  /*const readyCont = function () {
        var t = setTimeout(function () {
            $('body').addClass('on');
        }, 500);
        $("#mGnb").removeClass("isOpen");
        // 베너 닫기 처리
        $(".closeBanner").on("click", function () {
            $(".stickyBanner").hide();
        });
        $(".btnGnbOpen").on("click", function(){
            $("#mGnb").addClass("isOpen");
        });
        $(".btnGnbClose").on("click", function(){
            $("#mGnb").removeClass("isOpen");
        });
        $(".mainMenu a").each(function(i){
            var _this = $(this).parent();
            _this.on("click", function(){
                if(_this.hasClass("mn2")){
                    if(_this.hasClass("toggleOn")){
                        _this.removeClass("toggleOn");

                    }
                    else{
                        var _hash = _this.find("a").eq(0).attr("href");
                        _this.addClass("toggleOn");
                        $('html, body').animate({scrollTop: $(_hash).offset().top}, 500);

                    }
                }
                else{
                    $(".mainMenu > .mn2").removeClass("toggleOn");
                    $("#mGnb").removeClass("isOpen");
                }

            });
        });
    }*/
  // readyCont();

  var t = setTimeout(function () {
    $("body").addClass("on");
  }, 500);
  $("#mGnb").removeClass("isOpen");
  // 베너 닫기 처리
  $(".closeBanner").on("click", function () {
    $(".stickyBanner").hide();
  });
  $(".btnGnbOpen").on("click", function () {
    $("#mGnb").addClass("isOpen");
  });
  $(".btnGnbClose").on("click", function () {
    $("#mGnb").removeClass("isOpen");
  });
  $(".mainMenu a").each(function (i) {
    var _this = $(this).parent();
    _this.on("click", function () {
      if (_this.hasClass("mn2")) {
        if (_this.hasClass("toggleOn")) {
          _this.removeClass("toggleOn");
        } else {
          var _hash = _this.find("a").eq(0).attr("href");
          _this.addClass("toggleOn");
          $("html, body").animate({ scrollTop: $(_hash).offset().top }, 500);
        }
      } else {
        $(".mainMenu > .mn2").removeClass("toggleOn");
        $("#mGnb").removeClass("isOpen");
      }
    });
  });

  const stgOn = function () {
    var last = $(".animate").length - 1;
    var wv = $(window).height() / 2;
    var navIdx = 0;
    $(".animate").each(function (i) {
      var _this = $(this);
      if (
        $(window).scrollTop() + $(window).height() >
        $(document).height() - 500
      ) {
        $(".animate")
          .eq(last - 1)
          .addClass("on");
        $("#bodyWrapper").attr("class", "pg" + last);
      } else {
        if (_this.offset().top < parseInt($(window).scrollTop() + wv)) {
          _this.addClass("on");
          $("#bodyWrapper").attr("class", "pg" + navIdx);
          navIdx++;
        } else {
          _this.removeClass("on");
          $("#bodyWrapper").attr("class");
          navIdx--;
        }
      }
      if ($(".mainMenu > .mn2").hasClass("toggleOn")) {
        $(this).removeClass("toggleOn");
      }
    });
  };
  stgOn();

  // 레이어 열기
  $(".uiOpenLyr").each(function () {
    $(this).on("click", function () {
      var lyrEl = $(this).attr("data-roll");
      $("#" + lyrEl).addClass("isActive");
    });
  });

  $(".uiCloseLyr").each(function () {
    $(this).on("click", function () {
      $(this).closest(".modalDimmed").removeClass("isActive");
    });
  });

  var videoList = ["/public/video/main_mo.mp4", "/public/video/main_mo.mp4"];
  // 메인 동영상 해상도별 변경하기
  function mainBGChange() {
    if ($("#mainVideoPlayer").length > 0) {
      var wscreen = $(window).width();
      var vdoBgPlayer = document.getElementById("mainVideoPlayer");
      var vdoBgSource = document.getElementById("mainVideoSource");
      if (wscreen > 768) {
        vdoBgPlayer.src = videoList[0];
        vdoBgSource.src = videoList[0];
        vdoBgPlayer.poster = "./images/bg_pg0_0.jpg";
        vdoBgPlayer.load();
        vdoBgPlayer.play();
      } else {
        vdoBgPlayer.src = videoList[1];
        vdoBgSource.src = videoList[1];
        vdoBgPlayer.poster = "./images/bg_pg0_0.jpg";
        vdoBgPlayer.load();
        vdoBgPlayer.play();
      }
    }
  }
  mainBGChange();

  // if($(".iptPhoneNumber input").length > 0){
  //     var ph;
  //     $(this).on("focusin", function(){
  //       ph = $(".iptPhoneNumber input").attr("placeholder");
  //       $(".iptPhoneNumber input").attr("placeholder", "");
  //     }).on("focusout", function(){
  //       $(".iptPhoneNumber input").attr("placeholder", ph);
  //     });
  // }

  $(window).resize(
    $.debounce(200, function (e) {
      // setStgHeight();
      // mainBGChange();
      // readyCont();
    }),
  );

  $(window).scroll(
    $.debounce(200, function (e) {
      stgOn();
    }),
  );
});

function resizeContents() {
  let windowWidth = $(window).width();
  let windowHeight = $(window).height();
  let windowSizeX = windowWidth / 1920;
  let windowSizeY = windowHeight / 1060;
  let min = Math.min(windowSizeX, windowSizeY);
  let scale = min < 1 ? min : 1;

  console.log(windowWidth);
  console.log(windowSizeX);
  console.log(windowSizeY);

  if (windowWidth >= 1000) {
    $(".reset").css({ transform: "scale(" + scale + ")" });
    // console.log(scale)
    // console.log(min)
  }
}
