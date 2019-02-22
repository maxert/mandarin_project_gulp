window.onload = function () {
  var body = document.querySelectorAll("body")[0];
  var valueSizePopular = 0;
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
          valueSizePopular = i + 1;
        }
      }

    }
    for (var i = 0; i < FeedbackItems.length; i++) {
      FeedbackItems[i].addEventListener("click", FeedbackGraySvg, false)
    }



  }

  var TabSproduct = document.getElementsByClassName("tabs_product")[0];
  if (TabSproduct) {
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
      } else if (target.nodeName === "A") {
        target.parentNode.classList.remove("active");
      }
    };
  }
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
    if (MobAdaptive) {
      MobRowElement.children[0].appendChild(MobAdaptive.lastElementChild);
      MobileHeaderTop.appendChild(MobTelSearch);
      ModalHeaderTop.appendChild(HeaderTopLang);
    }

    function menu(e) {
      if (
        e.currentTarget.classList[e.currentTarget.classList.length - 1] ===
        "active"
      ) {
        body.classList.remove("modal_open");
        e.currentTarget.classList.remove("active");
        ModalHeaderMenu.classList.remove("active");
        hamburger[1].classList.remove("active");
      } else {
        setTimeout(function () {
          body.classList.add("modal_open");
        }, 500)

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
    if (TextContainer) {
      TextContainer.appendChild(ItemsOnlineStore.children[0]);
    }
    var FilterProduct = document.getElementsByClassName("filter_product")[0];

    var PopUpMobileFilter = document.getElementsByClassName("pop_up_mobile_filter")[0];
    if (PopUpMobileFilter) {
      PopUpMobileFilter.appendChild(FilterProduct);
      var FilterMobile = document.getElementsByClassName("filter_mobile")[0];
      FilterMobile.addEventListener("click", function () {
        PopUpMobileFilter.classList.add("active");
        ButtonClose.classList.add("active");
        setTimeout(function () {
          body.classList.add("modal_open");
        }, 500)

        ButtonClose.addEventListener("click", function () {
          PopUpMobileFilter.classList.remove("active");
          body.classList.remove("modal_open");
          ButtonClose.classList.remove("active");
        })

      });
    }
    var scrolling = document.getElementsByClassName("tabs_product")[0];

    if (scrolling) {
      scrolling.addEventListener('wheel', function (event) {
        if (event.deltaMode == event.DOM_DELTA_PIXEL) {
          var modifier = 1;
          // иные режимы возможны в Firefox
        } else if (event.deltaMode == event.DOM_DELTA_LINE) {
          var modifier = parseInt(getComputedStyle(this).lineHeight);
        } else if (event.deltaMode == event.DOM_DELTA_PAGE) {
          var modifier = this.clientHeight;
        }
        if (event.deltaY != 0) {
          // замена вертикальной прокрутки горизонтальной
          this.scrollLeft += modifier * event.deltaY;
          event.preventDefault();
        }

      });
    }

    var HeaderProductConainer = document.getElementsByClassName("header_product_conainer")[0];
    var ArticleSize = document.getElementsByClassName("article_size");
    var BuySize = document.getElementsByClassName("buy_size");
    var ResultSize = document.getElementsByClassName("result_size");
    if (ArticleSize.length === 0) {
      ArticleSize = undefined;
    } else {
      HeaderProductConainer.children[1].classList.remove("article_size");
      HeaderProductConainer.children[2].classList.remove("buy_size");
      HeaderProductConainer.children[4].classList.remove("result_size");
      for (var i = 0; i < ArticleSize.length; i++) {
        ArticleSize[i].appendChild(HeaderProductConainer.children[1].cloneNode(true));
        BuySize[i].appendChild(HeaderProductConainer.children[2].cloneNode(true));
        ResultSize[i].appendChild(HeaderProductConainer.children[4].cloneNode(true));
      }
    }

  }


  var HeaderTabs = document.getElementsByClassName("headert_tabs")[0];
  var TabsContainer = document.getElementsByClassName("tabs_container")[0];

  if (HeaderTabs) {
    function clickTabs(e) {
      for (var i = 0; i < HeaderTabs.children.length; i++) {
        if (HeaderTabs.children[i].classList.length === 0) {
          HeaderTabs.children[i].classList.add("active");
          TabsContainer.children[i].classList.add("active");
        } else {
          HeaderTabs.children[i].classList.remove("active");
          TabsContainer.children[i].classList.remove("active");
        }
      }


    }
    for (var i = 0; i < HeaderTabs.children.length; i++) {
      HeaderTabs.children[i].addEventListener("click", clickTabs, false);
    }
  }
  var TabsBrandsLinks = document.getElementsByClassName("tabs_brands_links")[0];
  var TabsContainerBrands = document.getElementsByClassName("tabs_container_brands")[0];
  if (TabsBrandsLinks) {
    function clickTabsBrands(e) {
      for (var i = 0; i < TabsBrandsLinks.children.length; i++) {
        TabsBrandsLinks.children[i].classList.remove("active");
      }
      e.currentTarget.classList.add("active");
      for (var i = 0; i < TabsBrandsLinks.children.length; i++) {
        TabsContainerBrands.children[i].classList.remove("active");
        if (TabsBrandsLinks.children[i].classList.length === 1) {
          TabsContainerBrands.children[i].classList.add("active");
        }
      }
    }
    for (var i = 0; i < TabsBrandsLinks.children.length; i++) {
      TabsBrandsLinks.children[i].addEventListener("click", clickTabsBrands, false);
    }
  }
  var clickSelect = document.querySelectorAll(".info_content_product>.buy_product>.buy");
  if (clickSelect.length === 0) {

  } else {
    clickSelect[0].addEventListener("click", function () {
      document.getElementsByClassName("popup_buy_click")[0].style.display = "block";
    })

    var clickSelectOne = document.querySelectorAll(".info_content_product>.buy_product>.buy_one");
    clickSelectOne[0].addEventListener("click", function () {
      document.getElementsByClassName("one_click_popup")[0].style.display = "block";
    })
    var HeaderClose = document.querySelectorAll(".header_close>div");
    HeaderClose[0].addEventListener("click", function () {
      document.getElementsByClassName("popup_buy_click")[0].style.display = "none";
    })
    HeaderClose[1].addEventListener("click", function () {
      document.getElementsByClassName("one_click_popup")[0].style.display = "none";
    })

  }

  var containerTabsListPersonal = document.getElementsByClassName("container_tabs_lsit_personal")[0];
  var tabslist = document.getElementsByClassName("tabs_container_personal")[0];
  if (containerTabsListPersonal) {
    function functionClickTabs(e) {
      for (var i = 0; i < containerTabsListPersonal.children.length; i++) {
        containerTabsListPersonal.children[i].classList.remove("active");
      }
      e.currentTarget.classList.add("active");

      for (var i = 0; i < containerTabsListPersonal.children.length; i++) {
        if (containerTabsListPersonal.children[i].classList[1] === "active") {
          tabslist.children[i].classList.add("active");
        } else {
          tabslist.children[i].classList.remove("active");
        }
      }
    }
    for (var i = 0; i < containerTabsListPersonal.children.length; i++) {
      containerTabsListPersonal.children[i].addEventListener("click", functionClickTabs, false);
    }
  }

  var massiveClosePopUp = [
    document.querySelectorAll(".pop_up_product_none .header_close")[0],
    document.querySelectorAll(".pop_up_save_data button")[0],
    document.querySelectorAll(".pop_up_list_address_save button")[0],
    document.querySelectorAll(".pop_up_password_save button")[0]
  ]

  function popupclose(e) {
    if (e.currentTarget.classList[0] === "header_close") {
      e.currentTarget.parentNode.parentNode.style.display = "none";
    } else {
      e.currentTarget.parentNode.parentNode.parentNode.style.display = "none";
    }
  }
  for (var i = 0; i < massiveClosePopUp.length; i++) {
    massiveClosePopUp[i].addEventListener("click", popupclose, false)
  }

  var massiveClicDivNode = [
    document.querySelectorAll(".pop_up_product_none")[0],
    document.querySelectorAll(".pop_up_save_data")[0],
    document.querySelectorAll(".pop_up_list_address_save")[0],
    document.querySelectorAll(".pop_up_password_save")[0],
    document.querySelectorAll(".popap_subskripe")[0],
    document.querySelectorAll(".one_click_popup")[0],
    document.querySelectorAll(".popup_buy_click")[0],
  ]
  if (massiveClicDivNode) {
    function popupcloseClick(e) {
      if (!e.currentTarget.lastElementChild.contains(e.target)) {
        e.currentTarget.style.display = "none";
      }

    }
    for (var i = 0; i < massiveClicDivNode.length; i++) {
      if (massiveClicDivNode[i] === undefined) {

      } else {
        massiveClicDivNode[i].addEventListener("click", popupcloseClick, false);
      }
    }
  }
};