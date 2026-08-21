$(document).ready(function () {
  $(".uiOpenLyr").each(function () {
    $(this).on("click", function () {
      var lyrEl = $(this).attr("data-roll");
      console.log(lyrEl);
      $("#" + lyrEl).addClass("isActive");
    });
  });

  $(".uiCloseLyr").each(function () {
    $(this).on("click", function () {
      $(this).closest(".modalDimmed").removeClass("isActive");
    });

    let gnbH = $("#mGnb").height();
    let submenuH = $(".subMenu").height();
    let gnbSum = gnbH + submenuH;

    $(".subMenu a").click(function () {
      let sectionStg = $(this).data("target");
      let sectionTop = $("#" + sectionStg).offset().top - gnbSum + 2;

      $("html, body").animate(
        {
          scrollTop: sectionTop,
        },
        500,
      );
    });
  });
  // 디바이스 체크
  var isMobile =
    "ontouchstart" in document.documentElement &&
    /mobi/i.test(navigator.userAgent);

  //  페이지 로딩 후 세계관 텍스트 전체가 보인 후 에니메이션이 시작되는 문제 수정
  function wvStart() {
    if ($("#bodyWrapper").hasClass("pg0")) {
      $(".worldView > div ").addClass("crawl");
      $(".worldView").css("opacity", 1);
    } else {
      $(".worldView > div ").removeClass("crawl");
      $(".worldView").css("opacity", 0);
    }
  }
  // $('.subMenu').click(function(){
  //   var height_value  = $(this).offset().top;
  //   $('html, body').animate({
  //     scrollTop: subMenu
  //   },500)
  // })

  const readyCont = function () {
    $("body").addClass("on");
    $("#mGnb").removeClass("isOpen");
    setTimeout(function () {
      wvStart();
    }, 1000);
    $(".btnGnbOpen").on("click", function () {
      $("#mGnb").addClass("isOpen");
    });
    $(".btnGnbClose").on("click", function () {
      $("#mGnb").removeClass("isOpen");
    });
    $(".mainMenu a").each(function (i) {
      $(this).on("click", function () {
        var _this = $(this).parent();
        // $('html, body').animate({scrollTop: $( ).offset().top}, 500);
        // console.log($(this).first().attr("href"));
        if (_this.hasClass("mn2")) {
          if (_this.hasClass("toggleOn")) {
            _this.removeClass("toggleOn");
          } else {
            var _hash = _this.find("a").eq(0).attr("href");
            _this.addClass("toggleOn");
          }
        } else {
          $(".mainMenu > .mn2").removeClass("toggleOn");
          $("#mGnb").removeClass("isOpen");
        }
      });
    });
  };
  readyCont();

  const stgOn = function () {
    var last = $(".animate").length - 1;
    var wv = $(window).width();
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
        num = last;
      } else {
        if (_this.offset().top < parseInt($(window).scrollTop() + wv)) {
          _this.addClass("on");
          $("#bodyWrapper").attr("class", "pg" + navIdx);
          navIdx++;
          num = navIdx;
        } else {
          _this.removeClass("on");
          $("#bodyWrapper").attr("class");
          navIdx--;
          num = navIdx;
        }
      }
      if ($(".mainMenu > .mn2").hasClass("toggleOn")) {
        $(this).removeClass("toggleOn");
      }
    });
  };
  stgOn();

  var typeIdx = 0;
  var chaIdx = 0;
  // if()
  var chaData = {
    0: [
      {
        weapon: "검",
        nameKr: "아미",
        nameEn: "Army",
        thumb: "./images/character/thumb_01.png",
        mainImg: "./images/character/cha_01.png",
        mainImgTa: "./images/character/cha_01_ta.png",
        mainImgMo: "./images/character/cha_01_mo.png",
        nation: "제국",
        job: "기사",
        prop: "물",
        birth: "02월 20일",
        age: "16세",
        height: "161CM",
        speech: "최고의 전사는 언제나 명예와 식사를 우선해야 해!",
        voiceKr: "/public/voice/kr/1.Army_get_char.wav",
        voiceKrName: "여민정",
        voiceJp: "/public/voice/jp/Army_get_char.wav",
        voiceJpName: "파이루즈 아이",
      },
      {
        weapon: "검",
        nameKr: "메이드",
        nameEn: "Maid",
        thumb: "./images/character/thumb_02.png",
        mainImg: "./images/character/cha_02.png",
        mainImgTa: "./images/character/cha_02_ta.png",
        mainImgMo: "./images/character/cha_02_mo.png",
        nation: "왕국",
        job: "호위 메이드",
        prop: "전기",
        birth: "08월 08일",
        age: "16세",
        height: "162CM",
        speech: "제 임무는 단 한 가지,<br> 공주님을 안전하게 지키는 것입니다.",
        voiceKr: "/public/voice/kr/2.Maid_get_char.wav",
        voiceKrName: "김율",
        voiceJp: "/public/voice/jp/Maid_get_char.wav",
        voiceJpName: "타나베 루이",
      },
      {
        weapon: "검",
        nameKr: "라이터",
        nameEn: "Writer",
        thumb: "./images/character/thumb_03.png",
        mainImg: "./images/character/cha_03.png",
        mainImgTa: "./images/character/cha_03_ta.png",
        mainImgMo: "./images/character/cha_03_mo.png",
        nation: "동방",
        job: "방랑검객",
        prop: "물",
        birth: "07월 08일",
        age: "40세 이상(불명)",
        height: "152CM",
        speech: "흔들림 없는 일필(一筆)을… 기대해도 좋다.",
        voiceKr: "/public/voice/kr/3.Writer_get_char.wav",
        voiceKrName: "김수영",
        voiceJp: "/public/voice/jp/Writer_get_char.wav",
        voiceJpName: "타카기 유리카",
      },
      {
        weapon: "검",
        nameKr: "호넷",
        nameEn: "Hornet",
        thumb: "./images/character/thumb_04.png",
        mainImg: "./images/character/cha_04.png",
        mainImgTa: "./images/character/cha_04_ta.png",
        mainImgMo: "./images/character/cha_04_mo.png",
        nation: "네온시티",
        job: "모르포 서비스 소속 기동전투원",
        prop: "불",
        birth: "01월 10일",
        age: "제작연도 기준 1년",
        height: "166CM",
        speech: "반갑습니다. 기동 전투원 호넷입니다.<br> 임무를 지정해주세요.",
        voiceKr: "/public/voice/kr/4.Hornet_get_char.wav",
        voiceKrName: "이다은",
        voiceJp: "/public/voice/jp/Hornet_get_char.wav",
        voiceJpName: "스즈키 치나미",
      },
      {
        weapon: "검",
        nameKr: "",
        nameEn: "",
        thumb: "./images/character/thumb_comming.png",
        mainImg: "",
        mainImgTa: "",
        mainImgMo: "",
        nation: "",
        job: "",
        prop: "",
        birth: "",
        age: "",
        height: "",
        speech: "",
        voiceKr: "",
        voiceKrName: "",
        voiceJp: "",
        voiceJpName: "",
      },
    ],
    1: [
      {
        weapon: "둔기",
        nameKr: "튜너",
        nameEn: "Tuner",
        thumb: "./images/character/thumb_05.png",
        mainImg: "./images/character/cha_05.png",
        mainImgTa: "./images/character/cha_05_ta.png",
        mainImgMo: "./images/character/cha_05_mo.png",
        nation: "네온시티",
        job: "기타리스트",
        prop: "전기",
        birth: "06월 06일",
        age: "16세",
        height: "160CM",
        speech: "짜잔ㅡ☆ 최강 기타리스트,<br> 미소녀 튜너 등장!",
        voiceKr: "/public/voice/kr/5.Tuner_get_char.wav",
        voiceKrName: "방시우",
        voiceJp: "/public/voice/jp/Tuner_get_char.wav",
        voiceJpName: "스미 토모미 제나",
      },
      {
        weapon: "둔기",
        nameKr: "노블",
        nameEn: "Noble",
        thumb: "./images/character/thumb_06.png",
        mainImg: "./images/character/cha_06.png",
        mainImgTa: "./images/character/cha_06_ta.png",
        mainImgMo: "./images/character/cha_06_mo.png",
        nation: "런던",
        job: "귀족영애",
        prop: "물",
        birth: "11월 26일",
        age: "17세",
        height: "158CM",
        speech: "제가 왔으니 많은 혜택을 누리게 되시겠군요.",
        voiceKr: "/public/voice/kr/6.Noble_get_char.wav",
        voiceKrName: "윤은서",
        voiceJp: "/public/voice/jp/Noble_get_char.wav",
        voiceJpName: "하나모리 유미리",
      },
      {
        weapon: "둔기",
        nameKr: "너스",
        nameEn: "Nurse",
        thumb: "./images/character/thumb_07.png",
        mainImg: "./images/character/cha_07.png",
        mainImgTa: "./images/character/cha_07_ta.png",
        mainImgMo: "./images/character/cha_07_mo.png",
        nation: "네온시티",
        job: "구급 대원",
        prop: "불",
        birth: "06월 14일",
        age: "21세",
        height: "168CM",
        speech: "다친 사람은 저에게 오세요♡<br>…응? 제 얼굴에 뭐가 묻었나요?",
        voiceKr: "/public/voice/kr/7.Nurse_get_char.wav",
        voiceKrName: "이보희",
        voiceJp: "/public/voice/jp/Nurse_get_char.wav",
        voiceJpName: "하나이 미하루",
      },
      {
        weapon: "둔기",
        nameKr: "아웃사이더",
        nameEn: "Outsider",
        thumb: "./images/character/thumb_08.png",
        mainImg: "./images/character/cha_08.png",
        mainImgTa: "./images/character/cha_08_ta.png",
        mainImgMo: "./images/character/cha_08_mo.png",
        nation: "동방/일본",
        job: "백수",
        prop: "전기",
        birth: "12월 13일",
        age: "18세",
        height: "160CM",
        speech: "짐덩어리 등장♡ <br>저기, 관심 좀 줄래? 관심 달라고!",
        voiceKr: "/public/voice/kr/8.Outsider_get_char.wav",
        voiceKrName: "신온유",
        voiceJp: "/public/voice/jp/Outsider_get_char.wav",
        voiceJpName: "오리하라 쿠루미",
      },
      {
        weapon: "둔기",
        nameKr: "",
        nameEn: "",
        thumb: "./images/character/thumb_comming.png",
        mainImg: "",
        mainImgTa: "",
        mainImgMo: "",
        nation: "",
        job: "",
        prop: "",
        birth: "",
        age: "",
        height: "",
        speech: "",
        voiceKr: "",
        voiceKrName: "",
        voiceJp: "",
        voiceJpName: "",
      },
    ],
    2: [
      {
        weapon: "지팡이",
        nameKr: "로그",
        nameEn: "Rogue",
        thumb: "./images/character/thumb_09.png",
        mainImg: "./images/character/cha_09.png",
        mainImgTa: "./images/character/cha_09_ta.png",
        mainImgMo: "./images/character/cha_09_mo.png",
        nation: "폴리메트로",
        job: "1인 심부름센터 운영",
        prop: "불",
        birth: "08월 14일",
        age: "11세",
        height: "138CM",
        speech: "…아, 미안… 다시 말해줘.<br>잠깐 졸아서…",
        voiceKr: "/public/voice/kr/9.Rogue_get_char.wav",
        voiceKrName: "정혜원",
        voiceJp: "/public/voice/jp/Rogue_get_char.wav",
        voiceJpName: "사가라 마유",
      },
      {
        weapon: "지팡이",
        nameKr: "바드",
        nameEn: "Bard",
        thumb: "./images/character/thumb_10.png",
        mainImg: "./images/character/cha_10.png",
        mainImgTa: "./images/character/cha_10_ta.png",
        mainImgMo: "./images/character/cha_10_mo.png",
        nation: "네온시티",
        job: "아이돌",
        prop: "전기",
        birth: "04월 15일",
        age: "16세",
        height: "157CM",
        speech: "너만을 위한 콘서트야! <br>제대로 호응해줘야 해?",
        voiceKr: "/public/voice/kr/10.Bard_get_char.wav",
        voiceKrName: "김예림",
        voiceJp: "/public/voice/jp/Bard_get_char.wav",
        voiceJpName: "오오하시 아야카",
      },
      {
        weapon: "지팡이",
        nameKr: "파이오니아",
        nameEn: "Pioneer",
        thumb: "./images/character/thumb_11.png",
        mainImg: "./images/character/cha_11.png",
        mainImgTa: "./images/character/cha_11_ta.png",
        mainImgMo: "./images/character/cha_11_mo.png",
        nation: "런던",
        job: "탐험가",
        prop: "물",
        birth: "06월 25일",
        age: "17세",
        height: "156CM",
        speech:
          "제가 가지 못할 곳은 없어요! <br>그, 그동안은… 부모님의 반대 때문에…",
        voiceKr: "/public/voice/kr/11.Pioneer_get_char.wav",
        voiceKrName: "김가령",
        voiceJp: "/public/voice/jp/Pioneer_get_char.wav",
        voiceJpName: "시라이시 하루카",
      },
      {
        weapon: "지팡이",
        nameKr: "바인더",
        nameEn: "Binder",
        thumb: "./images/character/thumb_12.png",
        mainImg: "./images/character/cha_12.png",
        mainImgTa: "./images/character/cha_12_ta.png",
        mainImgMo: "./images/character/cha_12_mo.png",
        nation: "폴리메트로",
        job: "마피아",
        prop: "물",
        birth: "11월 13일",
        age: "22세",
        height: "171CM",
        speech: "겁 먹을 것 없어. <br>위험한 사람은 아니니까. 후훗.",
        voiceKr: "/public/voice/kr/12.Binder_get_char.wav",
        voiceKrName: "장예나",
        voiceJp: "/public/voice/jp/Binder_get_char.wav",
        voiceJpName: "세토 모모코",
      },
      {
        weapon: "지팡이",
        nameKr: "",
        nameEn: "",
        thumb: "./images/character/thumb_comming.png",
        mainImg: "",
        mainImgTa: "",
        mainImgMo: "",
        nation: "",
        job: "",
        prop: "",
        birth: "",
        age: "",
        height: "",
        speech: "",
        voiceKr: "",
        voiceKrName: "",
        voiceJp: "",
        voiceJpName: "",
      },
    ],
    3: [
      {
        weapon: "책",
        nameKr: "허미트",
        nameEn: "Hermit",
        thumb: "./images/character/thumb_13.png",
        mainImg: "./images/character/cha_13.png",
        mainImgTa: "./images/character/cha_13_ta.png",
        mainImgMo: "./images/character/cha_13_mo.png",
        nation: "왕국",
        job: "마법사",
        prop: "불",
        birth: "10월 24일",
        age: "약 300세",
        height: "169CM",
        speech: "악몽을 꿨니? 후후, 괜찮아. <br>이젠 내가 왔으니까.",
        voiceKr: "/public/voice/kr/13.Hermit_get_char.wav",
        voiceKrName: "김보나",
        voiceJp: "/public/voice/jp/Hermit_get_char.wav",
        voiceJpName: "타도코로 아즈사",
      },
      {
        weapon: "책",
        nameKr: "커리어",
        nameEn: "Courier",
        thumb: "./images/character/thumb_14.png",
        mainImg: "./images/character/cha_14.png",
        mainImgTa: "./images/character/cha_14_ta.png",
        mainImgMo: "./images/character/cha_14_mo.png",
        nation: "네온시티",
        job: "모르포 서비스 소속 배달원",
        prop: "물",
        birth: "10월 01일",
        age: "제작연도 기준 3년",
        height: "155CM",
        speech: "커리어, 운송 시작합니다. <br>목적지는 어비스 끝까지.",
        voiceKr: "/public/voice/kr/14.Courier_get_char.wav",
        voiceKrName: "이현진",
        voiceJp: "/public/voice/jp/Courier_get_char.wav",
        voiceJpName: "카네모토 히사코",
      },
      {
        weapon: "책",
        nameKr: "인챈터",
        nameEn: "Enchanter",
        thumb: "./images/character/thumb_15.png",
        mainImg: "./images/character/cha_15.png",
        mainImgTa: "./images/character/cha_15_ta.png",
        mainImgMo: "./images/character/cha_15_mo.png",
        nation: "폴리메트로",
        job: "보석 세공사",
        prop: "불",
        birth: "11월 11일",
        age: "13세",
        height: "148CM",
        speech:
          "유능한 사장 아래에선 무능한 직원도 쓸만 해지지. <br>영광인 줄 알아.",
        voiceKr: "/public/voice/kr/15.Enchanter_get_char.wav",
        voiceKrName: "방연지",
        voiceJp: "/public/voice/jp/Enchanter_get_char.wav",
        voiceJpName: "히키사카 리에",
      },
      {
        weapon: "책",
        nameKr: "위버",
        nameEn: "Weaver",
        thumb: "./images/character/thumb_16.png",
        mainImg: "./images/character/cha_16.png",
        mainImgTa: "./images/character/cha_16_ta.png",
        mainImgMo: "./images/character/cha_16_mo.png",
        nation: "제국",
        job: "황실 마법사단 사단장",
        prop: "전기",
        birth: "05월 15일",
        age: "19세",
        height: "158CM",
        speech:
          "교육자의 위치는 언제나 어렵지. <br>제자 앞에서는 늘 완벽해야 하니까.",
        voiceKr: "/public/voice/kr/16.Weaver_get_char.wav",
        voiceKrName: "김하영",
        voiceJp: "/public/voice/jp/Weaver_get_char.wav",
        voiceJpName: "브리드컷 세라 에미",
      },
      {
        weapon: "책",
        nameKr: "",
        nameEn: "",
        thumb: "./images/character/thumb_comming.png",
        mainImg: "",
        mainImgTa: "",
        mainImgMo: "",
        nation: "",
        job: "",
        prop: "",
        birth: "",
        age: "",
        height: "",
        speech: "",
        voiceKr: "",
        voiceKrName: "",
        voiceJp: "",
        voiceJpName: "",
      },
    ],
    4: [
      {
        weapon: "총",
        nameKr: "팅커",
        nameEn: "Tinker",
        thumb: "./images/character/thumb_17.png",
        mainImg: "./images/character/cha_17.png",
        mainImgTa: "./images/character/cha_17_ta.png",
        mainImgMo: "./images/character/cha_17_mo.png",
        nation: "런던",
        job: "발명가이자 수리공",
        prop: "불",
        birth: "10월 10일",
        age: "13세",
        height: "143CM",
        speech: "고장난 건 팅커에게 가져와! <br>전부 고쳐줄게!",
        voiceKr: "/public/voice/kr/17.Tinker_get_char.wav",
        voiceKrName: "윤아영",
        voiceJp: "/public/voice/jp/Tinker_get_char.wav",
        voiceJpName: "카노 히나",
      },
      {
        weapon: "총",
        nameKr: "가드",
        nameEn: "Guard",
        thumb: "./images/character/thumb_18.png",
        mainImg: "./images/character/cha_18.png",
        mainImgTa: "./images/character/cha_18_ta.png",
        mainImgMo: "./images/character/cha_18_mo.png",
        nation: "폴리메트로",
        job: "경호원",
        prop: "물",
        birth: "03월 24일",
        age: "25세",
        height: "175CM",
        speech: "경호비 특별 할인이다. <br>좋은 술 한 병이 적당하겠군.",
        voiceKr: "/public/voice/kr/18.Guard_get_char.wav",
        voiceKrName: "정유정",
        voiceJp: "/public/voice/jp/Guard_get_char.wav",
        voiceJpName: "안나 야마키",
      },
      {
        weapon: "총",
        nameKr: "머즐",
        nameEn: "Muzzle",
        thumb: "./images/character/thumb_19.png",
        mainImg: "./images/character/cha_19.png",
        mainImgTa: "./images/character/cha_19_ta.png",
        mainImgMo: "./images/character/cha_19_mo.png",
        nation: "폴리메트로",
        job: "대학생",
        prop: "불",
        birth: "04월 23일",
        age: "20세",
        height: "160CM",
        speech: "저, 저, 저요…? <br>저는 머즐인데요…",
        voiceKr: "/public/voice/kr/19.Muzzle_get_char.wav",
        voiceKrName: "강시현",
        voiceJp: "/public/voice/jp/Muzzle_get_char.wav",
        voiceJpName: "무라카미 나츠미",
      },
      {
        weapon: "총",
        nameKr: "루터",
        nameEn: "Looter",
        thumb: "./images/character/thumb_20.png",
        mainImg: "./images/character/cha_20.png",
        mainImgTa: "./images/character/cha_20_ta.png",
        mainImgMo: "./images/character/cha_20.png",
        nation: "런던",
        job: "해적",
        prop: "전기",
        birth: "09월 30일",
        age: "22세",
        height: "170CM",
        speech:
          "이 몸이 가지 못하는 곳은 없지. <br>이대로 어비스 끝까지 쾌속 항해다!",
        voiceKr: "/public/voice/kr/20.Looter_get_char.wav",
        voiceKrName: "소연",
        voiceJp: "/public/voice/jp/Looter_get_char.wav",
        voiceJpName: "노나가세 미에",
      },
      {
        weapon: "총",
        nameKr: "",
        nameEn: "",
        thumb: "./images/character/thumb_comming.png",
        mainImg: "",
        mainImgTa: "",
        mainImgMo: "",
        nation: "",
        job: "",
        prop: "",
        birth: "",
        age: "",
        height: "",
        speech: "",
        voiceKr: "",
        voiceKrName: "",
        voiceJp: "",
        voiceJpName: "",
      },
    ],
  };
  if ($(".characterSlider").length > 0) {
    function initChaSlide(typeIdx, chaIdx) {
      var chaCont = $(".chaFile");
      var _chaImg = chaData[typeIdx];
      var _cont = $(".chaSliderWrapper > .chaFile");
      chaCont.attr("id", "wn" + typeIdx + "cn" + chaIdx);
      _cont.find(".name1").text(_chaImg[chaIdx].nameKr);
      _cont.find(".name2").text(_chaImg[chaIdx].nameEn);
      _cont.find(".fd1").text(_chaImg[chaIdx].nation);
      _cont.find(".fd2").text(_chaImg[chaIdx].job);
      _cont.find(".fd3").text(_chaImg[chaIdx].prop);
      _cont.find(".fd4").text(_chaImg[chaIdx].birth);
      _cont.find(".fd5").text(_chaImg[chaIdx].age);
      _cont.find(".fd6").text(_chaImg[chaIdx].weapon);
      _cont.find(".inf3").html(_chaImg[chaIdx].speech);
      _cont.find("#vcSource").attr("src", _chaImg[chaIdx].voiceKr);
      _cont.find(".cv").text(_chaImg[chaIdx].voiceKrName);
      _cont.find(".swch.kr").attr({
        data: _chaImg[chaIdx].voiceKr,
        "data-roll": _chaImg[chaIdx].voiceKrName,
      });
      _cont.find(".swch.jp").attr({
        data: _chaImg[chaIdx].voiceJp,
        "data-roll": _chaImg[chaIdx].voiceJpName,
      });
      _cont.find(".toggle").removeClass("isJp");
      $(".thumbList")
        .find("img")
        .each(function (i) {
          $(this).attr("src", _chaImg[i].thumb);
        });
      $(".thumbList > button").eq(chaIdx).addClass("isActive");
    }
    initChaSlide(typeIdx, chaIdx);

    $(".btnAudioPlay").on("click", function () {
      var _vcPlayer = document.getElementById("vcSource");

      if (_vcPlayer.duration > 0 && !_vcPlayer.paused) {
        _vcPlayer.pause();
        _vcPlayer.load();
      } else {
        _vcPlayer.play();
      }
    });
    var audSwt = $(".toggle > .swch");
    audSwt.each(function () {
      $(this).on("click", function () {
        var _cont = $(".chaSliderWrapper > .chaFile");

        _cont.find("#vcSource").attr("src", $(this).attr("data"));
        _cont.find(".cv").text($(this).attr("data-roll"));
        if ($(this).hasClass("kr")) {
          $(this).parent().removeClass("isJp");
        } else {
          $(this).parent().addClass("isJp");
        }
      });
    });
    $(".wpCategoryTab > a").each(function () {
      $(this).on("click", function () {
        $(".wpCategoryTab > a").removeClass("isActive");
        $(".thumbList > button").removeClass("isActive");
        $(this).addClass("isActive");
        $(".thumbList > button").eq(0).removeClass("isActive");
        typeIdx = $(this).attr("data");
        chaIdx = 0;
        initChaSlide(typeIdx, chaIdx);
      });
    });
    $(".thumbList > button").each(function () {
      $(this).on("click", function () {
        if (
          $(this).find("img").attr("src") ==
          "./images/character/thumb_comming.png"
        ) {
          $(this).attr("disabled", "disabled").css("cursor", "default");
          // chaIdx = $(this).attr("data") - 1;
          $(".thumbList > button").removeClass("isActive");
          $(".thumbList > button").eq(0).addClass("isActive");
          chaIdx = 0;
          initChaSlide(typeIdx, chaIdx);
        } else {
          $(".thumbList > button").removeClass("isActive");
          $(this).addClass("isActive");
          chaIdx = $(this).attr("data");
          initChaSlide(typeIdx, chaIdx);
        }
      });
    });
    $(".characterSlider > .btnPrev").on("click", function () {
      if (chaIdx > 0) {
        chaIdx--;
        $(".thumbList > button").eq(chaIdx).trigger("click");
      } else {
        $(".thumbList > button").removeClass("isActive");
        $(".thumbList > button").eq(3).addClass("isActive");
        chaIdx = 3;
        initChaSlide(typeIdx, chaIdx);
      }
    });
    $(".characterSlider > .btnNext").on("click", function () {
      if (
        $(".thumbList > button").eq(chaIdx).find("img").attr("src") ==
        "./images/character/thumb_comming.png"
      ) {
      } else {
        chaIdx++;
        $(".thumbList > button").eq(chaIdx).trigger("click");
      }
    });
  }

  $(window).resize(
    $.debounce(100, function (e) {
      readyCont();
    }),
  );

  $(window).scroll(
    $.debounce(100, function (e) {
      stgOn();
      wvStart();
    }),
  );
});
