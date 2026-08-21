$(function () {
  if (!Kakao.isInitialized()) {
    Kakao.init("15b7c4ac00844d170da99cb1954185be");
  }
  // snsList 클래스 아래의 모든 a 태그를 선택
  // var links = $(".snsList a");

  // 각 링크를 순회하며 gtag 이벤트 추가
  // links.each(function() {
  //     var button_name = $(this).data("button-name");
  //
  //     if (button_name) {
  //         $(this).on("click", function() {
  //             gtag('event', 'click', {
  //                 'event_category': 'sns',
  //                 'event_label': buttonName
  //             });
  //         });
  //     }
  // });
  // $("gtag").on("click", function(){
  //     var gtag_data  = $(this).data('button-name');
  //     if(gtag_data){
  //         gtag('event', 'Click', {
  //             'app_name': 'myAppName',
  //             'click_name': gtag_data
  //         });
  //     }
  // });
});

function shareMessage() {
  // 현재 링크 가져오기
  var url = window.location.href;

  // 공유 이미지 URL 가져오기
  var share_img = "https://abyssmate.dfl.co.kr./images/share2.jpg";

  Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: "[어비스메이트] 차원을 넘는 태그액션 RPG, 사전예약 OPEN!",
      imageUrl: share_img,
      link: {
        mobileWebUrl: url,
        webUrl: url,
      },
    },
    buttons: [
      {
        title: "웹으로 보기",
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      /*{
                title: '앱으로 보기',
                link: {
                    mobileWebUrl: 'https://kwnews.co.kr/page/view/{wcms_news_code}',
                    webUrl: 'https://kwnews.co.kr/page/view/{wcms_news_code}',
                    androidExecParams: 'linkUrl=http://m.kwnews.co.kr/page/view/{wcms_news_code}',
                    iosExecParams: 'linkUrl=http://m.kwnews.co.kr/page/view/{wcms_news_code}'
                }
            }*/
    ],
    // 카카오톡 미설치 시 카카오톡 설치 경로이동
    installTalk: true,
  });
}
function copyLink() {
  var input = document.body.appendChild(document.createElement("input"));
  input.value = window.document.location.href;
  input.select();
  document.execCommand("copy");
  input.parentNode.removeChild(input);
  $("#alert1").addClass("isActive");
}
function preRegister() {
  const method = "post";
  const url = "/Main/registProcess";
  const app = $("input:radio[name='chooseStore']:checked").val();
  const phone = "010" + $("#phone").val();
  const utm_source = $("#utm_source").val();
  const utm_medium = $("#utm_medium").val();
  const utm_campaign = $("#utm_campaign").val();
  const utm_term = $("#utm_term").val();
  const utm_content = $("#utm_content").val();
  const ipt1 = $("#ipt1").is(":checked");
  const ipt2 = $("#ipt2").is(":checked");
  const ad_agreement = $("#ipt3").is(":checked");
  const check_phone = /^010\d{8}$/;
  const check_phone2 = /(\d)\1{7}/;

  if (app !== "apple" && app !== "google") {
    $("#alert3").addClass("isActive");
    return;
  }

  if (!check_phone.test(phone) || check_phone2.test(phone)) {
    $("#alert2").addClass("isActive");
    return;
  }

  if (!ipt1 || !ipt2) {
    $("#alert4").addClass("isActive");
    return;
  }

  const data = {
    app,
    phone,
    ipt1,
    ipt2,
    ad_agreement,
    utm_source,
    utm_medium,
    utm_campaign,
    utm_term,
    utm_content,
  };

  $.ajax({
    url: url,
    type: method,
    dataType: "JSON",
    data: data,
    success: function (result) {
      switch (result.status) {
        case "success":
          setGtag("complete_prereg");
          fbq("trackCustom", "complete_prereg");
          $("input:radio[name='chooseStore']").prop("checked", false);
          $("#phone").val("");
          $("#ipt1").prop("checked", false);
          $("#ipt2").prop("checked", false);
          $("#ipt3").prop("checked", false);
          $(".checked").removeClass("checked");

          $("#done").addClass("isActive");
          break;

        case "app_error":
          $("#alert3").addClass("isActive");
          break;

        case "phone_error":
          $("#alert2").addClass("isActive");
          break;

        case "ipt_error":
          $("#alert4").addClass("isActive");
          break;

        case "duplicate_error":
          $("#alert5").addClass("isActive");
          break;

        case "db_error":
          $("#alert7").addClass("isActive");
          break;

        default:
          $("#alert7").addClass("isActive");
      }
    },
    error: (error) => {
      console.log(error);
    },
  });

  // request(url, method, data)
  //     .then(response => {
  //         console.log(response.data);
  //     })
  //     .catch(error => {
  //         console.error('axios error: ', error);
  //     })
}

function mbtiRegister() {
  const method = "post";
  const url = "/mbti/registProcess";

  let list = [];
  // answer2
  for (let i = 1; i <= 12; i++) {
    var value = "answer" + i;
    list[i - 1] = $("input:radio[name = " + value + "]:checked").val();
    //list.push($(temp).val())
  }

  $.ajax({
    url: url,
    type: method,
    dataType: "JSON",
    data: { list: list },
    success: function (result) {
      switch (result.status) {
        case "success":
          // 성공 시 추가
          location.href = "/mbti/result?mbti=" + result.mbti;
          break;

        case "error":
          // 에러 시 추가
          break;

        default:
          alert(result.status);
      }
    },
  });
}

function twitter_share() {
  const title = "ABYSSMATE";
  const url = window.document.location.href;
  let twitter_url =
    "https://twitter.com/intent/tweet?text=" +
    title +
    "&url=" +
    url +
    "&original_referer=&ref=twit";
  const twwin = window.open(
    twitter_url,
    "twwin",
    "menubar=yes,toolbar=yes,status=yes,resizable=yes,location=yes,scrollbars=yes",
  );
  if (twwin) twwin.focus();
}

// function request(url, method, data  = null) {
// const config                    = {
//                                     method,
//                                     url,
//                                     headers: {
//                                         'Content-Type': 'application/json; charset=utf-8',
//                                         'Access-Control-Allow-Origin': '*',
//     }
// };
//
// if (data) {
//     config.data                 = JSON.stringify(data);
// }
//
// console.log(config);
//
// return axios(config)
// .then(response => {
//     console.log(response.data);
// })
// .catch(error => {
//     console.error('axios error:', error);
// });
// }
function isActive(param) {
  $("#" + param).addClass("isActive");
  return;
}

//go_reservation
function setGtag(data) {
  // gtag('event', 'click', {'click_name': data});
  // gtag('event', 'btn_click', {'click_name': data});
  gtag("event", data);
}

function setDownGtag(e) {
  var data = $(e).attr("data-gtag");
  gtag("event", data);
}
