window.onload = function () {
  var valueSizePopulare = 0;
  var HoverDown = document.getElementsByClassName("hover_down");
  var HeaderTopLang = document.getElementsByClassName("m_header_top_lang")[0];
  var ArrowClick = document.getElementsByClassName("arrow_click");
  var SliderProductArrow = document.querySelectorAll(
    ".slider_product .slick-arrow"
  );
  var SliderProductHitsArrow = document.querySelectorAll(
    ".slider_product_hits .slick-arrow"
  );
  var SliderProductHitsArrow = document.querySelectorAll(
    ".slider_product_hits .slick-arrow"
  );
  var SliderFeedbackArrow = document.querySelectorAll(
    ".slider_feedback .slick-arrow"
  );
  var Size = document.getElementsByClassName("size");
  var SizeUp = document.getElementsByClassName("size_up");

  var SliderProductDots = document.querySelectorAll(
    ".slider_product .slick-dots li"
  );
  var SliderProductHitsDots = document.querySelectorAll(
    ".slider_product_hits .slick-dots li"
  );
  var SliderFeedbackDots = document.querySelectorAll(
    ".slider_feedback .slick-dots li"
  );
  for (var i = 0; i < SliderProductArrow.length; i++) {
    ArrowClick[0].appendChild(SliderProductArrow[i]);
  }
  if (SliderProductDots.length == 0) {
    SliderProductDots = null;
  } else {
    Size[0].innerHTML = SliderProductDots.length;
    SliderProductArrow[1].addEventListener("click", function () {
      for (var i = 0; i < SliderProductDots.length; i++) {
        if (SliderProductDots[i].classList.length == 1) {
          SizeUp[0].innerHTML = SliderProductDots[i].children[0].innerHTML;
        }
      }
    });
    SliderProductArrow[0].addEventListener("click", function () {
      for (var i = 0; i < SliderProductDots.length; i++) {
        if (SliderProductDots[i].classList.length == 1) {
          SizeUp[0].innerHTML = SliderProductDots[i].children[0].innerHTML;
        }
      }
    });

    for (var i = 0; i < SliderProductHitsArrow.length; i++) {
      ArrowClick[1].appendChild(SliderProductHitsArrow[i]);
    }
    Size[1].innerHTML = SliderProductHitsDots.length;
    SliderProductHitsArrow[1].addEventListener("click", function () {
      for (var i = 0; i < SliderProductHitsDots.length; i++) {
        if (SliderProductHitsDots[i].classList.length == 1) {
          SizeUp[1].innerHTML = SliderProductHitsDots[i].children[0].innerHTML;
        }
      }
    });
    SliderProductHitsArrow[0].addEventListener("click", function () {
      for (var i = 0; i < SliderProductHitsDots.length; i++) {
        if (SliderProductHitsDots[i].classList.length == 1) {
          SizeUp[1].innerHTML = SliderProductHitsDots[i].children[0].innerHTML;
        }
      }
    });

  }


  var FeedbackItems = document.querySelectorAll("form.feedback_items .click_assessment>div");
  if (FeedbackItems) {
    var counters = {
      count: 0
    };

    function FeedbackGraySvg(e) {

      if (e.currentTarget.classList.length === 0) {
        e.currentTarget.classList.add("active");
        for (var i = 0; i < FeedbackItems.length; i++) {
          if (FeedbackItems[i].classList.length === 1) {
            counters.count = i;
            for (var j = 0; j < counters.count; j++) {
              FeedbackItems[j].classList.add("active");
            }
          }
        }
      } else {
        e.currentTarget.classList.remove("active");
        for (var i = 0; i < FeedbackItems.length; i++) {
          if (FeedbackItems[i].classList.length === 0) {
            counters.count = i;
            for (var j = counters.count; j < FeedbackItems.length; j++) {
              e.currentTarget.classList.add("active");
              FeedbackItems[j].classList.remove("active");
            }
          }
        }
      }
      for (var i = 0; i < FeedbackItems.length; i++) {
        if (FeedbackItems[i].classList.length === 1) {
          valueSizePopulare = i + 1;
        }
      }
      alert(valueSizePopulare);
    }
    for (var i = 0; i < FeedbackItems.length; i++) {
      FeedbackItems[i].addEventListener("click", FeedbackGraySvg, false)
    }



  }

  var TabSproduct = document.getElementsByClassName("tabs_product")[0];

  TabSproduct.onmouseover = function (event) {
    for (var i = 0; i < TabSproduct.children.length; i++) {
      TabSproduct.children[i].classList.remove("active");
    }
    var target = event.target;

    if (target.nodeName === "LI") {

      target.classList.add("active");
    } else if (target.nodeName === "A") {
      target.parentNode.classList.add("active");
    }
  };

  TabSproduct.onmouseout = function (event) {
    var target = event.target;
    if (target.nodeName === "LI") {
      target.classList.remove("active");
    }else if (target.nodeName === "A") {
      target.parentNode.classList.remove("active");
    }
  };

  if (SliderFeedbackDots.length === 0) {
    SliderFeedbackDots = null;
  } else {
    for (var i = 0; i < SliderFeedbackArrow.length; i++) {
      ArrowClick[0].appendChild(SliderFeedbackArrow[i]);
    }
    Size[0].innerHTML = SliderFeedbackDots.length;
    SliderFeedbackArrow[1].addEventListener("click", function () {
      for (var i = 0; i < SliderFeedbackDots.length; i++) {
        if (SliderFeedbackDots[i].classList.length == 1) {
          SizeUp[0].innerHTML = SliderFeedbackDots[i].children[0].innerHTML;
        }
      }
    });
    SliderFeedbackArrow[0].addEventListener("click", function () {
      for (var i = 0; i < SliderFeedbackDots.length; i++) {
        if (SliderFeedbackDots[i].classList.length == 1) {
          SizeUp[0].innerHTML = SliderFeedbackDots[i].children[0].innerHTML;
        }
      }
    });
  }

  var CatalogProductAll = document.querySelectorAll(".catalog_items  .item_product ");
  for (var i = 0; i < CatalogProductAll.length; i++) {
    var createElementTwo = document.createElement("div");
    CatalogProductAll[i].parentNode.appendChild(createElementTwo);
    createElementTwo.classList.add("product_size");
    createElementTwo.appendChild(CatalogProductAll[i]);
  }

  function Mouse(e) {
    for (var i = 0; i < CatalogProductAll.length; i++) {
      CatalogProductAll[i].style.zIndex = "1";
    }
    e.currentTarget.style.zIndex = "14";
  }
  for (var i = 0; i < CatalogProductAll.length; i++) {
    CatalogProductAll[i].addEventListener("mouseover", Mouse, false);
  }








  var button_catalog = document.getElementsByClassName("button_catalog")[0];
  var Device = document.getElementsByClassName("device_container")[0];
  if (button_catalog) {
    button_catalog.addEventListener("click", function () {
      setTimeout(function () {
        Device.classList.remove("active-scale");
      }, 500);
      if (Device.classList.length === 2) {
        Device.classList.add("active");
      } else {
        Device.classList.remove("active");
        Device.classList.add("active-scale");
      }
    });

    function addClick(e) {
      for (var i = 0; i < HeaderTopLang.children.length; i++) {
        HeaderTopLang.children[i].classList.remove("active");
      }
      e.target.classList.add("active");
    }
    for (var i = 0; i < HeaderTopLang.children.length; i++) {
      HeaderTopLang.children[i].addEventListener("click", addClick, false);
    }
  }
  if (window.innerWidth <= 767) {
    var linkhover = document.getElementsByClassName("link_hover");
    var hamburger = document.getElementsByClassName("hamburger");
    var ModalHeaderMenu = document.getElementsByClassName(
      "modal_header_menu"
    )[0];
    var ModalHeaderTop = document.getElementsByClassName("modal_header_top")[0];
    var MobRowElement = document.querySelectorAll(
      ".content_footer .mob_row"
    )[0];
    var MobAdaptive = document.querySelectorAll(
      ".content_footer>div:last-child"
    )[0];
    var MobTelSearch = document.getElementsByClassName("mob_tel_search")[0];
    var MobileHeaderTop = document.getElementsByClassName(
      "mobile_header_top"
    )[0];

    MobRowElement.children[0].appendChild(MobAdaptive.lastElementChild);
    MobileHeaderTop.appendChild(MobTelSearch);
    ModalHeaderTop.appendChild(HeaderTopLang);

    function menu(e) {
      if (
        e.currentTarget.classList[e.currentTarget.classList.length - 1] ===
        "active"
      ) {
        e.currentTarget.classList.remove("active");
        ModalHeaderMenu.classList.remove("active");
        hamburger[1].classList.remove("active");
      } else {
        e.currentTarget.classList.add("active");
        hamburger[0].classList.add("active");
        ModalHeaderMenu.classList.add("active");
      }
    }
    for (var i = 0; i < hamburger.length; i++) {
      hamburger[i].addEventListener("click", menu, false);
    }

    var massiveTwo = [];
    var deviceLi = document.getElementById("device");
    for (var k = 0; k < HoverDown.length; k++) {
      var createElem = document.createElement("div");
      deviceLi.children[k].appendChild(createElem);
      createElem.classList.add("drop_down");
      createElem.appendChild(linkhover[k]);
      for (var i = 0; i < HoverDown[k].children.length - 1; i++) {
        for (
          var j = 0; j < HoverDown[k].children[i].children[0].children.length; j++
        ) {
          massiveTwo.push(HoverDown[k].children[i].children[0].children[j]);
        }
      }

      HoverDown[k].children[0].children[0].innerHTML = "";
      countAdaptive = 1;
      for (var i = 0; i < massiveTwo.length; i++) {
        HoverDown[k].children[0].children[0].appendChild(massiveTwo[i]);
      }
      massiveTwo = [];
    }
    var DropDown = document.getElementsByClassName("drop_down");

    function dropDown(e) {
      if (e.currentTarget.classList[e.currentTarget.classList.length - 1] === "active") {
        e.currentTarget.classList.remove("active");
        e.currentTarget.parentNode.children[0].classList.remove("active");

      } else {
        e.currentTarget.parentNode.children[0].classList.add("active");
        e.currentTarget.classList.add("active");
      }
    }
    for (var i = 0; i < DropDown.length; i++) {
      DropDown[i].addEventListener("click", dropDown, false);
    }
  } else if (window.innerWidth <= 1280) {
    var massive = [];
    var count = 0;

    for (var k = 0; k < HoverDown.length; k++) {
      for (var i = 0; i < HoverDown[k].children.length - 1; i++) {
        for (
          var j = 0; j < HoverDown[k].children[i].children[0].children.length; j++
        ) {
          massive.push(HoverDown[k].children[i].children[0].children[j]);
        }
      }

      for (var j = 0; j < HoverDown[k].children.length - 3; j++) {
        HoverDown[k].children[j].children[0].innerHTML = "";
        count = 1;
        for (var i = 0; i < massive.length; i++) {
          if (i < massive.length / 2) {
            HoverDown[k].children[j].children[0].appendChild(massive[i]);
          } else {
            HoverDown[k].children[count].children[0].appendChild(massive[i]);
          }
        }
      }
      massive = [];
    }
  }
  if (window.innerWidth <= 1280) {
    var FiltersProductContainer = document.getElementsByClassName("filters_product_container")[0];
    var Banner = document.getElementsByClassName("banner")[0];
    if (FiltersProductContainer) {
      FiltersProductContainer.appendChild(Banner);
    }
  }
  if (window.innerWidth <= 767) {
    var ButtonClose = document.getElementsByClassName("button_close")[0];
    var TextContainer = document.getElementsByClassName('text_container')[0];
    var ItemsOnlineStore = document.getElementsByClassName("items_online_store")[1];
    TextContainer.appendChild(ItemsOnlineStore.children[0]);
    var FilterProduct = document.getElementsByClassName("filter_product")[0];
    var PopUpMobileFilter = document.getElementsByClassName("pop_up_mobile_filter")[0];
    PopUpMobileFilter.appendChild(FilterProduct);
    var FilterMobile = document.getElementsByClassName("filter_mobile")[0];
    FilterMobile.addEventListener("click", function () {
      PopUpMobileFilter.classList.add("active");
      ButtonClose.classList.add("active");
      ButtonClose.addEventListener("click", function () {
        PopUpMobileFilter.classList.remove("active");
        ButtonClose.classList.remove("active");
      })
    });
  }
};