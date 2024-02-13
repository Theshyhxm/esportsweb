<template>
  <div>
<!--    <div class="preloader">-->
<!--      <button class="vs-btn preloaderCls">Cancel Preloader</button>-->
<!--      <div class="preloader-inner">-->
<!--        <div class="loader-logo">-->
<!--          <img src="@/assets/img/lolImg/LoLlog.png" alt="Loader Image"/>-->
<!--        </div>-->
<!--        <div class="loader-wrap pt-4">-->
<!--          <span class="loader"></span>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <div class="sticky-header-wrap sticky-header bg-light-dark py-1 py-sm-2 py-lg-1">
      <div class="container position-relative">
        <div class="row align-items-center">
          <div class="col-5 col-md-3">
            <div class="logo">
              <a href="contestController/findContestItemByContestId"><img src="@/assets/img/lolImg/LoLlog.png"
                                                                          alt="League of Legends"/></a>
            </div>
          </div>
          <div class="col-7 col-md-9 text-end position-static">
            <nav class="main-menu menu-sticky1 d-none d-lg-block link-inherit">
              <ul>
                <li class="menu-item-has-children"><a
                    href="contestController/findContestItemByContestId">Home</a>
                  <ul class="sub-menu">
                    <li><a href="contestController/findContestItemByContestId">Home One</a></li>

                  </ul>
                </li>

                <li class="mega-menu-wrap menu-item-has-children"><a href="#">Pages</a>
                  <ul class="mega-menu">
                    <li><a href="goodController/findAll">Pagelist 1</a>
                      <ul>
                        <li><a href="contestController/findContestItemByContestId">Home One</a></li>

                      </ul>
                    </li>
                    <li><a href="#">Pagelist 2</a>
                      <ul>
                        <li><a href="merberController/page">Players</a></li>
                        <li><a href="teamController/page">Teams</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Pagelist 3</a>
                      <ul>

                        <li><a href="goodController/findAll">Shop</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Pagelist 4</a>
                      <ul>
                        <li><a href="contestController/findAll">Tournament</a></li>

                        <li><a href="error.jsp">Error 404 Page</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <ul class="sub-menu">


                </ul>


              </ul>
            </nav>
            <button class="vs-menu-toggle text-theme border-theme d-inline-block d-lg-none"><i
                class="far fa-bars"></i></button>
          </div>
        </div>
      </div>
    </div>
    <div class="sidemenu-wrapper d-none d-lg-block">
      <div class="sidemenu-content bg-light-dark">
        <button class="closeButton border-theme text-theme bg-theme-hover sideMenuCls"><i class="far fa-times"></i>
        </button>
        <div class="about-box">
<!--          <a href="javaScript:void(0)"><img src="${sessionScope.user.img}" alt="Zocker"/></a>-->
<!--          <p class="text-light mt-3">Your Name:${sessionScope.user.username}</p>-->
          <ul class="social-links text-light">
            <li><a href="#"><i class="fab fa-facebook-f">123</i></a></li>
            <li><a href="#"><i class="fab fa-twitter">about-box</i></a></li>
            <li><a href="#"><i class="fab fa-linkedin-in">about-box</i></a></li>
            <li><a href="#"><i class="fab fa-behance">about-box</i></a></li>
            <li><a href="#"><i class="fab fa-youtube">about-box</i></a></li>
          </ul>
          <div class="my-40">
            <div class="info-style1">
              <span class="icon-btn2"><i class="fas fa-map-marker-alt"></i></span>
              <p class="fs-4 lh-1 fw-medium text-white mb-0">Address</p>
              <p class="text-white mb-0">301 Massachusetts Ave, Lunenburg MA 1462</p>
            </div>
            <div class="info-style1">
              <span class="icon-btn2"><i class="fas fa-phone"></i></span>
              <p class="fs-4 lh-1 fw-medium text-white mb-0">Get In Touch</p>
              <p class="text-white mb-0"><a href="tel:13456789" class="text-inherit">85 125 1256 12145</a></p>
            </div>
            <div class="info-style1">
              <span class="icon-btn2"><i class="fas fa-envelope"></i></span>
              <p class="fs-4 lh-1 fw-medium text-white mb-0">Mail Us</p>
            </div>
            <div class="info-style1">
              <p class="fs-4 lh-1 fw-medium text-white mb-0"><a href="UserController/logOut">注销</a></p>
            </div>
          </div>
        </div>
        <h3 class="sidebox-title text-white h5"><a href="cartController/findAll?uid=${sessionScope.user.uid}"><img
            src="@/assets/img/lolImg/gwc.jpg" style="height: 60px" width="60px">Your shopping cart</a></h3>
        <div class="post-thumb-style1">
          <div class="vs-blog d-flex gap-3">
            <div class="media-img">
              <a href="blog-details.jsp"><img src="@/assets/img/widget/recent-post-1-1.png" alt="Recent Post"/></a>
            </div>
            <div class="media-body align-self-center">
              <h4 class="h5 blog-title font-theme lh-base text-white mb-0"><a href="blog-details.jsp">The General
                Sery vice Administr</a></h4>
              <div class="blog-meta text-light fs-xs mt-1">
                <a href="blog.jsp"><i class="fal fa-calendar-alt"></i>June 21, 2021</a>
              </div>
            </div>
          </div>
          <div class="vs-blog d-flex gap-3">
            <div class="media-img">
              <a href="blog-details.jsp"><img src="@/assets/img/widget/recent-post-1-2.png" alt="Recent Post"/></a>
            </div>
            <div class="media-body align-self-center">
              <h4 class="h5 blog-title font-theme lh-base text-white mb-0"><a href="blog-details.jsp">Lorem ipsum
                is placeholder text commonly</a></h4>
              <div class="blog-meta text-light fs-xs mt-1">
                <a href="blog.jsp"><i class="fal fa-calendar-alt"></i>June 21, 2021</a>
              </div>
            </div>
          </div>
          <div class="vs-blog d-flex gap-3">
            <div class="media-img">
              <a href="blog-details.jsp"><img src="@/assets/img/widget/recent-post-1-3.png" alt="Recent Post"/></a>
            </div>
            <div class="media-body align-self-center">
              <h4 class="h5 blog-title font-theme lh-base text-white mb-0"><a href="blog-details.jsp">From its
                medieval origins to the digital</a></h4>
              <div class="blog-meta text-light fs-xs mt-1">
                <a href="blog.jsp"><i class="fal fa-calendar-alt"></i>June 21, 2021</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="popup-search-box d-none d-lg-block">
      <button class="searchClose border-theme text-theme"><i class="fal fa-times"></i></button>
      <form action="teamController/findTeamByName">
        <input type="text" name="name" class="border-theme" placeholder="Please enter the name of the team"/>
        <button type="submit"><i class="fal fa-search"></i></button>
      </form>
    </div>
    <div class="vs-menu-wrapper">
      <div class="vs-menu-area bg-dark">
        <button class="vs-menu-toggle"><i class="fal fa-times"></i></button>
        <div class="mobile-logo">
          <a href="contestController/findContestItemByContestId"><img src="@/assets/img/lolImg/LoLlog.png"
                                                                      alt="Zocker"/></a>
        </div>
        <div class="vs-mobile-menu link-inherit"></div>
      </div>
    </div>
<!--header-->
    <page-header></page-header>
<!--    <section class="vs-hero-wrapper">-->
<!--      <div class="vs-hero-carousel" data-height="900" data-container="1170" data-slidertype="fullwidth"-->
<!--           data-sm-height="1100">-->
<!--        <a href="#" class="ls-arrow text-white d-none d-xl-inline-block" data-ls-go="next">Next<i-->
<!--            class="fal fa-arrow-right"></i></a>-->
<!--        <a href="#" class="ls-arrow text-white d-none d-xl-inline-block" data-ls-go="prev"><i-->
<!--            class="fal fa-arrow-left"></i>Prev</a>-->
<!--        <div class="ls-slide" data-ls="duration: 8000; transition2d: 5;">-->
<!--          <img src="@/assets/img/lolImg/w22.png" alt="Hero Bg Image" class="ls-bg"/>-->
<!--          <p class="ls-l ls-hide-phone"-->
<!--             style="left: 40px; top: 363px; text-transform: uppercase; color: #ffffff; font-weight: 700; font-size: 16px; line-height: 1; letter-spacing: 0.2em;"-->
<!--             data-ls="minfontsize: 10px; offsetxin: -100; durationin: 1000; delayin: 0; easingin:easeOutQuint; texttransitionin: true; texttypein: chars_asc; textstartatin: transitioninstart; textdurationin: 100; textfadein: true; textoffsetxin: -20; textshiftin: 20;  transitionout: true; offsetxout: 600; durationout: 3000; fadeout: true; skewxout: 10;"></p>-->

<!--          <div class="ls-l" style="left: 0; top: 635px;"-->
<!--               data-ls="durationin: 1000; delayin: 0; easingin:easeOutQuint; offsetyin: 50; transitionout: true; offsetxout: 300; durationout: 3000; fadeout: true; skewxout: 10;">-->
<!--            <div class="vs-btn-group">-->
<!--              <a href="teamController/page" class="vs-btn gradient-btn">Meet with team</a>-->
<!--              <a href="goodController/findAll" class="vs-btn black-skew"><i class="fal fa-shopping-cart"></i>Merch shop</a>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="ls-slide" data-ls="duration: 8000; transition2d: 5;">-->
<!--          <img src="@/assets/img/lolImg/W22_TEMPLATE_16x9_KV_GENERIC_FINALS_(1).png" alt="Hero Bg Image" class="ls-bg"/>-->
<!--          <h2 class="ls-l"-->
<!--              style="left: -2px; top: 400px; text-transform: uppercase; color: #ffffff; font-weight: 700; font-size: 72px; letter-spacing: -0.03em;"-->
<!--              data-ls="durationin: 1000; delayin: 0; easingin:easeOutQuint; texttransitionin: true; textfadein: true; texttypein: words_asc; textstartatin: transitioninstart; textshiftin: 300; textoffsetyin: 50; transitionout: true; offsetxout: 500; durationout: 3000; fadeout: true; skewxout: 10;"></h2>-->
<!--          <h2 class="ls-l"-->
<!--              style="left: -2px; top: 480px; text-transform: uppercase; color: #ffffff; font-weight: 700; font-size: 72px; letter-spacing: -0.03em;"-->
<!--              data-ls="durationin: 1000; delayin: 0; easingin:easeOutQuint; texttransitionin: true; textfadein: true; texttypein: words_asc; textstartatin: transitioninstart; textshiftin: 300; textoffsetyin: 50; transitionout: true; offsetxout: 400; durationout: 3000; fadeout: true; skewxout: 10;"></h2>-->
<!--          <p class="ls-l"-->
<!--             style="left: 0; top: 575px; color: #b0b1be; font-size: 18px; width: 700px; min-width: 230px; white-space: normal;"-->
<!--             data-ls="minfontsize: 16px; durationin: 1000; delayin: 0; easingin:easeOutQuint; offsetyin: 50; transitionout: true; offsetxout: 300; durationout: 3000; fadeout: true; skewxout: 10;"></p>-->
<!--          <div class="ls-l" style="left: 0; top: 635px;"-->
<!--               data-ls="durationin: 1000; delayin: 0; easingin:easeOutQuint; offsetyin: 50; transitionout: true; offsetxout: 300; durationout: 3000; fadeout: true; skewxout: 10;">-->
<!--            <div class="vs-btn-group">-->
<!--              <a href="teamController/page" class="vs-btn gradient-btn">Meet with team</a>-->
<!--              <a href="goodController/findAll" class="vs-btn black-skew"><i class="fal fa-shopping-cart"></i>Merch shop</a>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="ls-slide" data-ls="duration: 8000; transition2d: 5;">-->
<!--          <img src="@/assets/img/lolImg/TrophyHero_Article_Header.png" alt="Hero Bg Image" class="ls-bg"/>-->
<!--          <p class="ls-l ls-hide-phone"-->
<!--             style="left: 40px; top: 363px; text-transform: uppercase; color: #ffffff; font-weight: 700; font-size: 16px; line-height: 1; letter-spacing: 0.2em;"-->
<!--             data-ls="minfontsize: 10px; offsetxin: -100; durationin: 1000; delayin: 0; easingin:easeOutQuint; texttransitionin: true; texttypein: chars_asc; textstartatin: transitioninstart; textdurationin: 100; textfadein: true; textoffsetxin: -20; textshiftin: 20;  transitionout: true; offsetxout: 600; durationout: 3000; fadeout: true; skewxout: 10;"></p>-->
<!--          <h2 class="ls-l"-->
<!--              style="left: -2px; top: 400px; text-transform: uppercase; color: #ffffff; font-weight: 700; font-size: 72px; letter-spacing: -0.03em;"-->
<!--              data-ls="durationin: 1000; delayin: 0; easingin:easeOutQuint; texttransitionin: true; textfadein: true; texttypein: words_asc; textstartatin: transitioninstart; textshiftin: 300; textoffsetyin: 50; transitionout: true; offsetxout: 500; durationout: 3000; fadeout: true; skewxout: 10;"></h2>-->
<!--          <h2 class="ls-l"-->
<!--              style="left: -2px; top: 480px; text-transform: uppercase; color: #ffffff; font-weight: 700; font-size: 72px; letter-spacing: -0.03em;"-->
<!--              data-ls="durationin: 1000; delayin: 0; easingin:easeOutQuint; texttransitionin: true; textfadein: true; texttypein: words_asc; textstartatin: transitioninstart; textshiftin: 300; textoffsetyin: 50; transitionout: true; offsetxout: 400; durationout: 3000; fadeout: true; skewxout: 10;"></h2>-->
<!--          <p class="ls-l"-->
<!--             style="left: 0; top: 575px; color: #b0b1be; font-size: 18px; width: 700px; min-width: 230px; white-space: normal;"-->
<!--             data-ls="minfontsize: 16px; durationin: 1000; delayin: 0; easingin:easeOutQuint; offsetyin: 50; transitionout: true; offsetxout: 300; durationout: 3000; fadeout: true; skewxout: 10;"></p>-->
<!--          <div class="ls-l" style="left: 0; top: 635px;"-->
<!--               data-ls="durationin: 1000; delayin: 0; easingin:easeOutQuint; offsetyin: 50; transitionout: true; offsetxout: 300; durationout: 3000; fadeout: true; skewxout: 10;">-->
<!--            <div class="vs-btn-group">-->
<!--              <a href="teamController/page" class="vs-btn gradient-btn">Meet with team</a>-->
<!--              <a href="goodController/findAll" class="vs-btn black-skew"><i class="fal fa-shopping-cart"></i>Merch shop</a>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->
    <div class="bg1 bg-light-dark bg-fixed" data-bg-src="@/assets/img/bg/bg-1.jpg">
      <div class="vs-video-area space-top">
        <div class="container">
          <div class="row align-items-center gx-xl-0 arrow-white vs-carousel" data-slide-show="3"
               data-sm-slide-show="2" data-xs-slide-show="1" data-arrows="true" data-xl-arrows="true"
               data-ml-arrows="true" data-center-mode="true" data-xl-center-mode="true" data-ml-center-mode="true"
               data-lg-center-mode="true" data-md-center-mode="true">
            <div class="col-lg-4">
              <div class="video-box1">
                <a href="https://v.qq.com/x/page/y0044wq7bzp.html" class="popup-video"><img
                    src="@/assets/img/lolImg/2022JDG.jpg" alt="Video Image" class="w-100"/> </a>
                <a href="https://v.qq.com/x/page/y0044wq7bzp.html"
                   class="play-btn popup-video overlay-center"><i class="fas fa-play"></i></a>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="video-box1">
                <a href="https://v.qq.com/x/page/o0044rjuci7.html" class="popup-video"><img
                    src="@/assets/img/lolImg/2022EDG.jpg" alt="Video Image" class="w-100"/> </a>
                <a href="https://v.qq.com/x/page/o0044rjuci7.html"
                   class="play-btn popup-video overlay-center"><i class="fas fa-play"></i></a>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="video-box1">
                <a href="https://v.qq.com/x/page/h0044xxtlk5.html" class="popup-video"><img
                    src="@/assets/img/lolImg/2022TES.jpg" alt="Video Image" class="w-100"/> </a>
                <a href="https://v.qq.com/x/page/h0044xxtlk5.html"
                   class="play-btn popup-video overlay-center"><i class="fas fa-play"></i></a>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="video-box1">
                <a href="https://v.qq.com/x/page/j0044r249yc.html" class="popup-video"><img
                    src="@/assets/img/lolImg/2022RNG.jpg" alt="Video Image" class="w-100"/> </a>
                <a href="https://v.qq.com/x/page/j0044r249yc.html"
                   class="play-btn popup-video overlay-center"><i class="fas fa-play"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="vs-match-wrapper vs-match-layout1 space-top space-bottom">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-5 col-xl-6">
              <div class="section-title">
                <span class="sub-title1">trending match</span>
                <h2 class="sec-title1 text-white">matchs</h2>
              </div>
            </div>
            <div class="col-lg-7 col-xl-6 text-center text-lg-end">
              <div class="filter-menu-style1 filter-menu-active mb-70">
                <button data-filter="*" class="active">All</button>
                <button data-filter=".Worlds">.Worlds</button>
                <button data-filter=".LPL">LPL</button>
                <button data-filter=".LCK">LCK</button>
              </div>
            </div>
          </div>
          <div class="mb-15 filter-active row">
            <!--                <c:forEach items="${contestIems}" var="contestItem">-->
            <!--                    <div class="col-md-6 col-lg-12 grid-item ${contestItem.contest.ciname}">-->
            <!--                        <div class="vs-match">-->
            <!--                            <div class="row align-items-center justify-content-center justify-content-lg-start">-->
            <!--                                <div class="col-lg-3">-->
            <!--                                    <div class="match-logo">-->
            <!--                                        <a href="teamController/findTeamById?tid=${contestItem.team1.tid}"><img-->
            <!--                                                src="${contestItem.team1.teamimg}" alt="Team Logo"/></a>-->
            <!--                                        <span class="versus">vs</span>-->
            <!--                                        <a href="teamController/findTeamById?tid=${contestItem.team2.tid}"><img-->
            <!--                                                src="${contestItem.team2.teamimg}" alt="Team Logo"/></a>-->
            <!--                                    </div>-->
            <!--                                </div>-->
            <!--                                <div class="col-lg">-->
            <!--                                    <div class="match-about pl-35">-->
            <!--                                        <h3 class="team-name h5 text-white mb-1 mb-lg-2"><a-->
            <!--                                                href="teamController/findTeamById?tid=${contestItem.team1.tid}">${contestItem.team1.tname}</a>-->
            <!--                                            <span class="text-theme">vs</span> <a-->
            <!--                                                    href="teamController/findTeamById?tid=${contestItem.team2.tid}">${contestItem.team2.tname}</a>-->
            <!--                                        </h3>-->
            <!--                                        <p class="match-date mb-0">${contestItem.time}</p>-->
            <!--                                    </div>-->
            <!--                                </div>-->
            <!--                                <div class="col-auto col-xl-2">-->
            <!--                                    <div class="match-time text-white">-->
            <!--                                        ${contestItem.tid1grade} : ${contestItem.tid2grade}-->
            <!--                                    </div>-->
            <!--                                </div>-->
            <!--                                <div class="col-auto col-xl-2 text-end">-->
            <!--                                    <a href="https://lpl.qq.com/es/live.shtml" class="icon-btn1 popup-video"><i-->
            <!--                                            class="fab fa-twitch"></i></a>-->
            <!--                                    <a href="https://lpl.qq.com/es/live.shtml" class="icon-btn1 popup-video"><i-->
            <!--                                            class="fab fa-youtube"></i></a>-->
            <!--                                </div>-->
            <!--                            </div>-->
            <!--                        </div>-->
            <!--                    </div>-->
            <!--                </c:forEach>-->
          </div>
        </div>
      </section>
    </div>
    <section class="vs-blog-wrapper bg-dark vs-blog-layout1 link-inherit space-top space-md-bottom" id="blog">
      <div class="container">
        <div class="section-title">
          <span class="sub-title1">Team</span>
          <h2 class="sec-title1 text-white">TOP TEAMS</h2>
        </div>
        <div class="row vs-carousel arrow-white" data-slide-show="3" data-md-slide-show="2" data-sm-slide-show="1"
             data-xs-slide-show="1" data-arrows="true" data-xl-arrows="true">
          <div class="col-lg-4">
            <div class="vs-blog">
              <div class="blog-image image-scale-hover">
                <a href="teamController/findTeamById?tid=2"><img src="@/assets/img/lolImg/IGWIN.png" alt="Blog Image"
                                                                 class="w-100"/></a>
                <div class="blog-category">
                  <a href="merberController/findById?mid=8">MVP:NING</a>
                </div>
              </div>
              <div class="blog-content">
                <h3 class="blog-title text-white fs-20"><a href="teamController/findTeamById?tid=2">InvictusGaming
                  won the 2018 League of Legends World Championship
                </a></h3>
                <div class="blog-meta text-light fs-xs">
                  <a href="javaScript:void(0) "><i class="fal fa-calendar-alt"></i>November 3, 2018</a>
                  <a href="teamController/findTeamById?tid=2"><i class="fal fa-user"></i>InvictusGaming</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="vs-blog">
              <div class="blog-image image-scale-hover">
                <a href="teamController/findTeamById?tid=6"><img src="@/assets/img/lolImg/FPXWIN.webp" alt="Blog Image"
                                                                 class="w-100"/></a>
                <div class="blog-category">
                  <a href="merberController/findById?mid=48">MVP:TIAN</a>
                </div>
              </div>
              <div class="blog-content">
                <h3 class="blog-title text-white fs-20"><a href="teamController/findTeamById?tid=6">FunPlusPhoenix
                  won the 2019 League of Legends World Championship</a></h3>
                <div class="blog-meta text-light fs-xs">
                  <a href="javaScript:void(0)"><i class="fal fa-calendar-alt"></i>November 10, 2019</a>
                  <a href="teamController/findTeamById?tid=6"><i class="fal fa-user"></i>FunPlusPhoenix</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="vs-blog">
              <div class="blog-image image-scale-hover">
                <a href="teamController/findTeamById?tid=9"><img src="@/assets/img/lolImg/DKWIN.webp" alt="Blog Image"
                                                                 class="w-100"/></a>
                <div class="blog-category">
                  <a href="merberController/findById?mid=27">MVP:Canyon</a>
                </div>
              </div>
              <div class="blog-content">
                <h3 class="blog-title text-white fs-20"><a href="teamController/findTeamById?tid=9">DWGKIA won
                  the 2020 League of Legends World Championship</a></h3>
                <div class="blog-meta text-light fs-xs">
                  <a href="javaScript:void(0)"><i class="fal fa-calendar-alt"></i>October 31, 2020</a>
                  <a href="teamController/findTeamById?tid=9"><i class="fal fa-user"></i>DWGKIA</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="vs-blog">
              <div class="blog-image image-scale-hover">
                <a href="teamController/findTeamById?tid=1"><img src="@/assets/img/lolImg/EDGWIN.webp" alt="Blog Image"
                                                                 class="w-100"/></a>
                <div class="blog-category">
                  <a href="merberController/findById?mid=5">MVP:SCOUT</a>
                </div>
              </div>
              <div class="blog-content">
                <h3 class="blog-title text-white fs-20"><a href="teamController/findTeamById?tid=1">EDWARDGAMINGHYCAN
                  won the 2020 League of Legends World Championship</a></h3>
                <div class="blog-meta text-light fs-xs">
                  <a href="javaScript:void(0)"><i class="fal fa-calendar-alt"></i>November 7, 2021</a>
                  <a href="teamController/findTeamById?tid=1"><i class="fal fa-user"></i>EDWARDGAMINGHYCAN</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="vs-member-area vs-member-layout1 bg-light-dark space-top space-md-bottom">
      <div class="container" id="myContainer">
        <div class="section-title">
          <span class="sub-title1">Team</span>
          <h2 class="sec-title1 text-white">Pro Players</h2>
        </div>
        <div id='TOPmerbers' class='row vs-carousel arrow-white' data-arrows='true' data-xl-arrows='true'
             data-lg-slide-show='4' data-md-slide-show='3' data-sm-slide-show='2' data-xs-slide-show='1'
             data-slide-show='4'>
          <!--            <c:forEach items="${topMerbers}" var="merber">-->
          <!--                <div class="col-lg-3">-->
          <!--                    <div class="vs-member">-->
          <!--                        <div class="member-img">-->
          <!--                            <a href="merberController/findById?mid=${merber.mid}"><img src="${merber.merbaerimg}" class="w-100" alt="Member Image" /></a>-->
          <!--                        </div>-->
          <!--                        <div class="member-content">-->
          <!--                            <span class="degi">${merber.type}</span>-->
          <!--                            <h3 class="member-name fs-20"><a href="merberController/findById?mid=${merber.mid}">${merber.name}</a></h3>-->
          <!--                        </div>-->
          <!--                    </div>-->
          <!--                </div>-->
          <!--            </c:forEach>-->
        </div>
      </div>
    </section>
    <div class="vs-brand-wrapper bg-dark space">
      <div id="myBrand" class="container">
        <div class="row vs-carousel arrow-white" data-slide-show="5" data-lg-slide-show="4" data-md-slide-show="4"
             data-sm-slide-show="3" data-xs-slide-show="2" data-arrows="true" data-xl-arrows="true"
             data-ml-arrows="true" data-lg-arrows="true">
          <!--            <c:forEach items="${topTeams}" var="team">-->
          <!--                <div class='col-xl-2 text-center'><img src="${team.teamimg}" alt='Brand Image'/></div>-->
          <!--            </c:forEach>-->

        </div>
      </div>
    </div>
    <page-footer></page-footer>

    <a href="#" class="scrollToTop icon-btn3"><i class="far fa-angle-up"></i></a>
    <div class="vs-cursor"></div>
    <div class="vs-cursor2"></div>
  </div>
</template>
<!--<script src="../js/vendor/jquery-1.12.4.min.js"></script>-->
<!--<script src="../js/app.min.js"></script>-->
<!--<script src="../js/vscustom-carousel.min.js"></script>-->
<script>
import pageFooter from "@/components/PageFooter.vue";
import pageHeader from "@/components/PageHeader.vue";
export default {
  components:{
    pageFooter,
    pageHeader,
  }
}
</script>
<style scoped lang="css">
@import 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&amp;family=Montserrat:wght@700&amp;family=Roboto:wght@400;700&amp;display=swap';
@import "@/assets/css/app.min.css";
@import "@/assets/css/fontawesome.min.css";
@import "@/assets/css/style.css";
@import "@/assets/css/theme-color1.css";
</style>
