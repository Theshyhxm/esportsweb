<!DOCTYPE html>
<html class="no-js" lang="zxx">
 <head>
  <base href="${pageContext.request.scheme}://${pageContext.request.serverName}:${pageContext.request.serverPort}${pageContext.request.contextPath}/">
  <meta charset="utf-8" />
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <title>Zocker - eSports and Gaming HTML Template - Shop Details</title>
  <meta name="author" content="Vecuro" />
  <meta name="description" content="Zocker - eSports and Gaming HTML Template" />
  <meta name="keywords" content="Zocker - eSports and Gaming HTML Template" />
  <meta name="robots" content="INDEX,FOLLOW" />
  <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&amp;family=Montserrat:wght@700&amp;family=Roboto:wght@400;700&amp;display=swap" rel="stylesheet" />
  <link rel="apple-touch-icon" sizes="57x57" href="assets/img/favicons/apple-icon-57x57.png" />
  <link rel="apple-touch-icon" sizes="60x60" href="assets/img/favicons/apple-icon-60x60.png" />
  <link rel="apple-touch-icon" sizes="72x72" href="assets/img/favicons/apple-icon-72x72.png" />
  <link rel="apple-touch-icon" sizes="76x76" href="assets/img/favicons/apple-icon-76x76.png" />
  <link rel="apple-touch-icon" sizes="114x114" href="assets/img/favicons/apple-icon-114x114.png" />
  <link rel="apple-touch-icon" sizes="120x120" href="assets/img/favicons/apple-icon-120x120.png" />
  <link rel="apple-touch-icon" sizes="144x144" href="assets/img/favicons/apple-icon-144x144.png" />
  <link rel="apple-touch-icon" sizes="152x152" href="assets/img/favicons/apple-icon-152x152.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="assets/img/favicons/apple-icon-180x180.png" />
  <link rel="icon" type="image/png" sizes="192x192" href="assets/img/favicons/android-icon-192x192.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="assets/img/favicons/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="96x96" href="assets/img/favicons/favicon-96x96.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="assets/img/favicons/favicon-16x16.png" />
  <link rel="manifest" href="assets/img/favicons/manifest.json" />
  <meta name="msapplication-TileColor" content="#ffffff" />
  <meta name="msapplication-TileImage" content="assets/img/favicons/ms-icon-144x144.png" />
  <meta name="theme-color" content="#ffffff" />
  <link rel="stylesheet" href="assets/css/app.min.css" />
  <link rel="stylesheet" href="assets/css/fontawesome.min.css" />
  <link rel="stylesheet" href="assets/css/style.css" />
  <link rel="stylesheet" href="assets/css/theme-color1.css" />
 </head>
 <body>
  <div class="preloader">
   <button class="vs-btn preloaderCls">Cancel Preloader</button>
   <div class="preloader-inner">
    <div class="loader-logo">
     <img src="@/assets/img/LoLlog.png" alt="Loader Image" />
    </div>
    <div class="loader-wrap pt-4">
     <span class="loader"></span>
    </div>
   </div>
  </div>
  <div class="sticky-header-wrap sticky-header bg-light-dark py-1 py-sm-2 py-lg-1">
   <div class="container position-relative">
    <div class="row align-items-center">
     <div class="col-5 col-md-3">
      <div class="logo">
       <a href="contestController/findContestItemByContestId"><img src="assets/img/logo-2.png" alt="Zocker" /></a>
      </div>
     </div>
     <div class="col-7 col-md-9 text-end position-static">
      <nav class="main-menu menu-sticky1 d-none d-lg-block link-inherit">
       <ul>
        <li class="menu-item-has-children"><a href="contestController/findContestItemByContestId">Home</a>
         <ul class="sub-menu">
          <li><a href="contestController/findContestItemByContestId">Home One</a></li>

         </ul></li>

        <li class="mega-menu-wrap menu-item-has-children"><a href="#">Pages</a>
         <ul class="mega-menu">
          <li><a href="goodController/findAll">Pagelist 1</a>
           <ul>
            <li><a href="contestController/findContestItemByContestId">Home One</a></li>

           </ul></li>
          <li><a href="#">Pagelist 2</a>
           <ul>
            <li><a href="merberController/page">Players</a></li>
            <li><a href="teamController/page">Teams</a></li>
           </ul></li>
          <li><a href="#">Pagelist 3</a>
           <ul>


            <li><a href="goodController/findAll">Shop</a></li>

           </ul></li>
          <li><a href="#">Pagelist 4</a>
           <ul>
            <li><a href="contestController/findAll">Tournament</a></li>

           </ul></li>
         </ul></li>

         <ul class="sub-menu">


         </ul></li>

       </ul>
      </nav>
      <button class="vs-menu-toggle text-theme border-theme d-inline-block d-lg-none"><i class="far fa-bars"></i></button>
     </div>
    </div>
   </div>
  </div>
  <div class="sidemenu-wrapper d-none d-lg-block">
   <div class="sidemenu-content bg-light-dark">
    <button class="closeButton border-theme text-theme bg-theme-hover sideMenuCls"><i class="far fa-times"></i></button>
    <div class="about-box">
       <a href="javaScript:void(0)"><img src="${sessionScope.user.img}" alt="Zocker"/></a>
            <p class="text-light mt-3">Your Name:${sessionScope.user.username}</p>
     <ul class="social-links text-light">
      <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
      <li><a href="#"><i class="fab fa-twitter"></i></a></li>
      <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
      <li><a href="#"><i class="fab fa-behance"></i></a></li>
      <li><a href="#"><i class="fab fa-youtube"></i></a></li>
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
       <p class="text-white mb-0"><a href="mailto:zocker@gmail.com" class="text-inherit">zocker@example.com</a></p>
      </div>
      <div class="info-style1">
       <p class="fs-4 lh-1 fw-medium text-white mb-0"><a href="UserController/logOut">注销</a></p>
      </div>
     </div>
    </div>
    <h3 class="sidebox-title text-white h5"><a href="cartController/findAll?uid=${sessionScope.user.uid}"><img src="@/assets/img/gwc.jpg" style="height: 60px" width="60px">Your shopping cart</a></h3>
    <div class="post-thumb-style1">
     <div class="vs-blog d-flex gap-3">
      <div class="media-img">
       <a href="blog-details.jsp"><img src="assets/img/widget/recent-post-1-1.png" alt="Recent Post" /></a>
      </div>
      <div class="media-body align-self-center">
       <h4 class="h5 blog-title font-theme lh-base text-white mb-0"><a href="blog-details.jsp">The General Sery vice Administr</a></h4>
       <div class="blog-meta text-light fs-xs mt-1">
        <a href="blog.jsp"><i class="fal fa-calendar-alt"></i>June 21, 2021</a>
       </div>
      </div>
     </div>
     <div class="vs-blog d-flex gap-3">
      <div class="media-img">
       <a href="blog-details.jsp"><img src="assets/img/widget/recent-post-1-2.png" alt="Recent Post" /></a>
      </div>
      <div class="media-body align-self-center">
       <h4 class="h5 blog-title font-theme lh-base text-white mb-0"><a href="blog-details.jsp">Lorem ipsum is placeholder text commonly</a></h4>
       <div class="blog-meta text-light fs-xs mt-1">
        <a href="blog.jsp"><i class="fal fa-calendar-alt"></i>June 21, 2021</a>
       </div>
      </div>
     </div>
     <div class="vs-blog d-flex gap-3">
      <div class="media-img">
       <a href="blog-details.jsp"><img src="assets/img/widget/recent-post-1-3.png" alt="Recent Post" /></a>
      </div>
      <div class="media-body align-self-center">
       <h4 class="h5 blog-title font-theme lh-base text-white mb-0"><a href="blog-details.jsp">From its medieval origins to the digital</a></h4>
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
   <form action="#">
    <input type="text" class="border-theme" placeholder="What are you looking for" /> 
    <button type="submit"><i class="fal fa-search"></i></button>
   </form>
  </div>
  <div class="vs-menu-wrapper">
   <div class="vs-menu-area bg-dark">
    <button class="vs-menu-toggle"><i class="fal fa-times"></i></button>
    <div class="mobile-logo">
     <a href="contestController/findContestItemByContestId"><img src="@/assets/img/LoLlog.png" alt="Zocker" /></a>
    </div>
    <div class="vs-mobile-menu link-inherit"></div>
   </div>
  </div>
  <header class="header-wrapper header-layout1 position-absolute top-0 start-0 w-100 z-index-step1">
   <div class="header-top">
    <div class="container">
     <div class="row py-md-2">
      <div class="col-sm-6 d-none d-md-block">
       <p class="mb-0 fs-xs text-white">Welcome to our <a class="text-inherit" href="teamController/page"><u class="fw-bold">Esports team</u></a></p>
      </div>
      <div class="col-sm-6 text-end d-none d-md-block">
       <ul class="social-links fs-xs text-white">
        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
        <li><a href="#"><i class="fab fa-twitch"></i></a></li>
        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
        <li><a href="#"><i class="fab fa-youtube"></i></a></li>
       </ul>
      </div>
     </div>
    </div>
   </div>
   <div class="header-main" data-overlay="black" data-opacity="7">
    <div class="container position-relative">
     <div class="row align-items-center">
      <div class="col-6 col-lg-4 d-block d-xl-none py-3 py-xl-0">
       <div class="header-logo">
        <a href="contestController/findContestItemByContestId"><img src="assets/img/logo-2.png" alt="Zocker" /></a>
       </div>
      </div>
      <div class="col-6 col-lg-8 col-xl-5 text-end text-xl-start">
       <nav class="main-menu menu-style1 mobile-menu-active" data-expand="992">
        <ul>
         <li class="menu-item-has-children"><a href="contestController/findContestItemByContestId">Home</a>
          <ul class="sub-menu">
           <li><a href="contestController/findContestItemByContestId">Home One</a></li>

          </ul></li>

         <li class="mega-menu-wrap menu-item-has-children"><a href="#">Pages</a>
          <ul class="mega-menu">
           <li><a href="goodController/findAll">Pagelist 1</a>
            <ul>
             <li><a href="contestController/findContestItemByContestId">Home One</a></li>

            </ul></li>
           <li><a href="#">Pagelist 2</a>
            <ul>
             <li><a href="merberController/page">Players</a></li>
             <li><a href="teamController/page">Teams</a></li>
            </ul></li>
           <li><a href="#">Pagelist 3</a>
            <ul>


             <li><a href="goodController/findAll">Shop</a></li>

            </ul></li>
           <li><a href="#">Pagelist 4</a>
            <ul>
             <li><a href="contestController/findAll">Tournament</a></li>

             <li><a href="error.jsp">Error 404 Page</a></li>
            </ul></li>
          </ul></li>

          <ul class="sub-menu">


          </ul></li>

        </ul>
       </nav>
       <button type="button" class="vs-menu-toggle text-white d-inline-block d-lg-none"><i class="far fa-bars"></i></button>
      </div>
      <div class="col-md-4 col-lg-2 text-center d-none d-xl-block">
       <div class="header-logo1">
        <a href="contestController/findContestItemByContestId"><img src="@/assets/img/LoLlog.png" alt="Zocker" /></a>
       </div>
      </div>
      <div class="col-md-4 col-lg-5 d-none d-xl-block">
       <div class="header-right d-flex align-items-center justify-content-end">
        <a href="#" class="vs-btn outline1 d-none d-xl-inline-block"><i class="fab fa-twitch"></i><strong>Live Streaming</strong></a>
        <ul class="header-list1 list-style-none ml-30">
         <li><button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"><img src="assets/img/flag/flag-1.png" alt="Country Flag" class="flag radius-circle" /></button>
          <ul class="dropdown-menu">
           <li><a class="dropdown-item" href="#"><img src="assets/img/flag/french.png" alt="Flag" class="flag-small" /> French</a></li>
           <li><a class="dropdown-item" href="#"><img src="assets/img/flag/germany.png" alt="Flag" class="flag-small" /> Germany</a></li>
           <li><a class="dropdown-item" href="#"><img src="assets/img/flag/italy.png" alt="Flag" class="flag-small" /> Italy</a></li>
           <li><a class="dropdown-item" href="#"><img src="assets/img/flag/bangladesh.png" alt="Flag" class="flag-small" /> Bangladesh</a></li>
           <li><a class="dropdown-item" href="#"><img src="assets/img/flag/united-state.png" alt="Flag" class="flag-small" /> United State</a></li>
          </ul></li>
         <li><button class="searchBoxTggler"><i class="far fa-search"></i></button></li>
         <li><button class="sideMenuToggler"><i class="fal fa-grip-horizontal fs-2"></i></button></li>
        </ul>
       </div>
      </div>
     </div>
    </div>
   </div>
  </header>
  <div class="breadcumb-wrapper breadcumb-layout1 pt-200 pb-50" data-bg-src="assets/img/breadcumb/breadcumb-1.jpg" data-overlay="">
   <div class="container z-index-common">
    <div class="breadcumb-content text-center">
     <h1 class="breadcumb-title h1 text-white my-0">merchandise</h1>
     <h2 class="breadcumb-bg-title">Product</h2>
     <ul class="breadcumb-menu-style1 text-white mx-auto fs-xs">
      <li><a href="contestController/findContestItemByContestId"><i class="fal fa-home"></i>Home</a></li>
      <li class="active">Shop Details</li>
     </ul>
    </div>
   </div>
  </div>
  <section class="vs-product-details space-top space-md-bottom">
   <div class="container">
    <div class="position-relative z-index-common py-lg-60">
     <div class="product-details-shape bg-smoke"></div>
     <div class="row">
      <div class="col-lg-6">
       <div class="product-main-img text-center pt-30 pt-lg-60">
        <div class="product-share">
         <a href="#" class="icon1 text-reset"><i class="fal fa-share-alt fs-20"></i></a>
        </div>
        <img src="${good.img1}" class="zoom-img" alt="Product Image" />
       </div>
       <div class="product-thum-slide">
        <div class="vs-carousel" data-slide-show="3" id="thumbSlide">
         <div class="thumb">
          <img src="${good.img1}" class="zoom-thumb" data-zoom-image="${good.img1}" alt="Product Image" />
         </div>
         <div class="thumb">
          <img src="${good.img2}" class="zoom-thumb" data-zoom-image="${good.img2}" alt="Product Image" />
         </div>
         <div class="thumb">
          <img src="${good.img3}" class="zoom-thumb" data-zoom-image="${good.img3}" alt="Product Image" />
         </div>
         <div class="thumb">
          <img src="${good.img2}" class="zoom-thumb" data-zoom-image="${good.img2}" alt="Product Image" />
         </div>
        </div>
        <div class="slide-btn d-none d-sm-block">
         <button data-slick-prev="#thumbSlide"><i class="far fa-angle-left"></i></button> 
         <button data-slick-next="#thumbSlide"><i class="far fa-angle-right"></i></button>
        </div>
       </div>
      </div>
      <div class="col-lg-6">
       <div class="product-about">
        <div class="mb-2">
         <span class="text-yellow fs-xs me-3">  ${good.heat}<i class="fas fa-star"></i> </span>
         <span class="d-inline-block">(${good.heat} heat)</span>
        </div>
        <h3 class="product-name font-theme text-normal">${good.name}</h3>
        <h4 class="product-price text-theme2">${good.price}RMB</h4>
        <hr class="border-dashed-light mt-25 mb-20" />
        <p class="mb-2">${good.msg}.</p>
        <div class="cart-btn-group">
         <div class="quantity-box me-2 d-flex d-md-inline-flex d-lg-flex d-xl-inline-flex mb-3 mb-xl-0">
          <button class="quantity-minus qut-btn"><i class="far fa-minus"></i></button> 
          <input type="text" value="1" id="cartCount" class="qty-input" />
          <button class="quantity-plus qut-btn"><i class="far fa-plus"></i></button>
         </div>
         <a href="javaScript:void(0)" onclick="addCart('${good.gid}')" class="vs-btn">Add to cart</a>
        </div>
       </div>
      </div>
     </div>
    </div>
    <div class="pt-40 pt-lg-60">
     <ul class="nav nav-tabs tab-menu2" id="myTab" role="tablist">
      <li class="nav-item" role="presentation"><a class="nav-link active" id="review-tab" data-bs-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false">Review</a></li>
     </ul>
     <div class="tab-content" id="myTabContent">
      <div class="tab-pane show active" id="review" role="tabpanel" aria-labelledby="review-tab">
       <div class="vs-comment-area list-style-none vs-comments-layout1">
        <ul class="comment-list" id="myReview">




        </ul>
        <div class="pagination-wrapper pagination-layout1 mt-lg-30 mb-30">
         <ul>
          <li><a href="javaScript:void(0)"><span class="text" onclick="find1()">首页</span></a></li>
          <li><a href="javaScript:void(0)"><span class="text" onclick="findpre()">上一页</span></a></li>
          <li><a href="javaScript:void(0)"><span class="text" onclick="findnext()">下一页</span></a></li>
          <li><a href="javaScript:void(0)"><span class="text" onclick="findEnd()">末页</span></a></li>
         </ul>
        </div>
       </div>
       <div class="vs-comment-form comment-form-layout1 bg-smoke px-40 py-40 mb-30 mt-lg-30">
        <div class="form-title">
         <h3 class="h4 font-theme text-normal mt-n2">Add A Review</h3>
        </div>
        <div class="row">
         <div class="col-12">
          <div class="vs-rating-input mb-20">
<%--           <strong>Your rating: </strong>--%>
<%--           <span class="active"><i class="fas fa-star"></i></span> --%>
<%--           <span class="active"><i class="fas fa-star"></i></span> --%>
<%--           <span class="active"><i class="fas fa-star"></i></span> --%>
<%--           <span class="active"><i class="fas fa-star"></i></span> --%>
<%--           <span class="active"><i class="fas fa-star"></i></span>--%>
          </div>
         </div>
         <div class="col-12 form-group">
          <textarea id="thisreview" placeholder="Write a Message" class="form-control" rows="8" cols="5"></textarea>
          <i class="fal fa-pencil-alt me-2"></i>
         </div>
<%--         <div class="col-md-6 form-group">--%>
<%--          <input type="text" placeholder="Your Name" class="form-control" /> --%>
<%--          <i class="fal fa-user me-2"></i>--%>
<%--         </div>--%>
<%--         <div class="col-md-6 form-group">--%>
<%--          <input type="text" placeholder="Your Email" class="form-control" /> --%>
<%--          <i class="fal fa-envelope me-2"></i>--%>
         </div>
         <div class="col-12 form-group mb-0">
          <button class="vs-btn gradient-btn no-skew" onclick="addReview()" id="myButton">Submit Review</button>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
  <section class="vs-product-wrapper vs-product-layout2 newsletter-pb">
   <div class="container">
    <h2 class="mt-n2 font-theme text-normal mb-4">Related Products</h2>
    <div class="row vs-carousel arrow-margin" data-slide-show="3" data-md-slide-show="2" data-sm-slide-show="2" data-xs-slide-show="1" data-arrows="true">
     <c:forEach items="${goods.list}" var="thisgood">
     <div class="col-sm-6 col-lg-4">
      <div class="vs-product">
       <div class="product-img">
        <a href="goodController/findByGid?gid=${thisgood.gid}"><img src="${thisgood.img1}" class="w-100" alt="Product Image" /></a>
        <div class="cart-btn-group">
         <a href="javaScript:void(0)" onclick="addCart('${thisgood.gid}')" class="vs-btn">Add to cart</a>
         <a href="goodController/findByGid?gid=${thisgood.gid}" class="icon-btn3"><i class="far fa-search"></i></a>
        </div>
       </div>
       <div class="product-content">
        <div class="text-yellow fs-xs mb-2">
        ${thisgood.heat} <i class="fas fa-star"></i>
        </div>
        <h3 class="product-name text-normal font-theme fs-20 lh-base mb-2"><a class="text-inherit" href="goodController/findByGid?gid=${thisgood.gid}">${thisgood.name}</a></h3>
        <strong class="fs-18 text-theme2">${thisgood.price}RMB</strong>
       </div>
      </div>
     </div>
     </c:forEach>
    </div>
   </div>
  </section>
  <section class="vs-newsletter-wrapper bg-dark z-index-step1">
   <div class="container">
    <div class="position-relative">
     <div class="inner-wrapper bg-black position-absolute top-50 start-50 translate-middle w-100 px-60 py-40">
      <div class="row align-items-center justify-content-center">
       <div class="col-xl-6 text-center text-xl-start mb-3 mb-xl-0">
        <span class="sub-title2 mt-2">Newsletter</span>
        <h2 class="mb-0 text-white">get monthly updates</h2>
       </div>
       <div class="col-md-10 col-lg-8 col-xl-6">
        <form action="#" class="newsletter-style1 d-md-flex">
         <input type="email" class="form-control" placeholder="Enter email address" /> 
         <button class="vs-btn gradient-btn">Subscribe Now</button>
        </form>
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
  <footer class="footer-wrapper footer-layout1 bg-fluid bg-major-black position-relative">
   <div class="bg-fluid d-none d-none d-xl-block position-absolute start-0 top-0 w-100 h-100" data-bg-src="assets/img/bg/footer-bg-1-1.jpg"></div>
   <div class="footer-widget-wrapper dark-style1 z-index-common">
    <div class="container">
     <div class="row justify-content-between">
      <div class="col-md-6 col-lg-3 col-xl-4">
       <div class="widget footer-widget pt-0">
        <h3 class="widget_title">About Us</h3>
        <div class="vs-widget-about">
         <p class="about-text text-footer1 pe-xl-5">The League of Legends offseason is in full effect and teams are looking to sign new players to strengthen their roster or to re-sign their current players.</p>
         <div class="d-flex gap-2 text-white mt-45">
          <a class="icon-btn1 skew-right" href="#"><i class="fab fa-facebook-f"></i></a> 
          <a class="icon-btn1 skew-right" href="#"><i class="fab fa-twitter"></i></a> 
          <a class="icon-btn1 skew-right" href="#"><i class="fab fa-linkedin-in"></i></a> 
          <a class="icon-btn1 skew-right" href="#"><i class="fab fa-youtube"></i></a>
         </div>
        </div>
       </div>
      </div>
      <div class="col-sm-6 col-md-6 col-lg-3 col-xl-2">
       <div class="widget widget_categories footer-widget">
        <h3 class="widget_title">Categories</h3>
        <ul>
         <li><a href="#">Ancient</a></li>
         <li><a href="#">Fantasy</a></li>
         <li><a href="#">Horror</a></li>
         <li><a href="#">Shooting</a></li>
         <li><a href="#">MS-XBOX</a></li>
        </ul>
       </div>
      </div>
      <div class="col-sm-6 col-md-6 col-lg-3 col-xl-2">
       <div class="widget widget_nav_menu footer-widget">
        <h3 class="widget_title">NEED HELP?</h3>
        <div class="menu-all-pages-container">
         <ul class="menu">
          <li><a href="#">Company</a></li>
          <li><a href="#">For the fans</a></li>
          <li><a href="#">Press</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Policy</a></li>
         </ul>
        </div>
       </div>
      </div>
      <div class="col-md-6 col-lg-3 col-xl-3">
       <div class="widget footer-widget">
        <h3 class="widget_title">Contact Us</h3>
        <div class="vs-widget-about">
         <p class="contact-info"><i class="fal fa-map-marker-alt text-white"></i>121 King St, Melbourne VIC 3000, Australia</p>
         <p class="contact-info"><i class="fal fa-phone text-white"></i><a href="tel:+65965252561">(888)-659-252561</a></p>
         <p class="contact-info"><i class="fal fa-fax text-white"></i><a href="tel:+65965252561">(888)-123-45678</a></p>
         <p class="contact-info"><i class="fal fa-envelope text-white"></i><a href="mailto:zocker@webmail.com">zocker@email.com</a></p>
         <p class="contact-info"><i class="fal fa-globe text-white"></i><a href="#">www.zockerexample.com</a></p>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div class="footer-copyright bg-black z-index-step1">
    <div class="container">
     <div class="row">
      <div class="col-xl-8 d-none d-xl-block">
       <div class="footer-menu">
        <ul>
         <li><a href="#">Features</a></li>
         <li><a href="#">Request</a></li>
         <li><a href="#">Imprint</a></li>
         <li><a href="#">Privacy</a></li>
         <li><a href="#">Policy</a></li>
         <li><a href="#">Cookie</a></li>
         <li><a href="#">Content</a></li>
        </ul>
       </div>
      </div>
      <div class="col-xl-4 align-self-center text-center py-3 py-xl-0 text-xl-end">
       <p class="text-light fw-bold text-bold mb-0">Copyright &copy; 2021.Company name All rights reserved.</p>
      </div>
     </div>
    </div>
   </div>
  </footer>
  <a href="#" class="scrollToTop icon-btn3"><i class="far fa-angle-up"></i></a>
  <div class="vs-cursor"></div>
  <div class="vs-cursor2"></div>
  <script src="assets/js/vendor/jquery-1.12.4.min.js"></script>
  <script src="assets/js/app.min.js"></script>
  <script src="assets/js/vscustom-carousel.min.js"></script>
  <script src="assets/js/vs-cursor.min.js"></script>
  <script src="assets/js/vsmenu.min.js"></script>
  <script src="https://ditu.google.cn/maps/api/js?key=AIzaSyDC3Ip9iVC0nIxC6V14CKLQ1HZNF_65qEQ"></script>
  <script src="assets/js/map.js"></script>
  <script src="assets/js/ajax-mail.js"></script>
  <script src="assets/js/main.js"></script>
 </body>
</html>
<script>
 function addCart(gid){
  $.ajax({
   type: "post",
   url: "cartController/addCart",
   data:"uid=${sessionScope.user.uid}&gid="+gid+"&count="+$("#cartCount").val(),//json对象转化为json字符串
  })
 }
 function addReview(){
  if(${not empty sessionScope.user}){
  $.ajax({
   type: "post",
   url: "goodController/addReview",
   data:"gid=${good.gid}&msg="+$("#thisreview").val()+"&uid=${sessionScope.user.uid}&heat=0",//json对象转化为json字符串
   success: function (page) {
    console.log(page)
    $("#myReview").empty();
    $("#myReview").append(
            "<input type='hidden' id='prepageNo' value='"+page.prePage+"' '>"+
            "<input type='hidden' id='nextPage' value='"+page.nextPage+"' '>"+
            "<input type='hidden' id='pageNum' value='" + page.pageNum + "' '>"+
            "<input type='hidden' id='endPage' value='" + page.pages + "' '>"
    )
    for (let i = 0; i < page.list.length; i++) {
     $("#myReview").append(
             "<li class='vs-comment'><div class='vs-post-comment'><div class='author-img'>"+
             "<img src='"+page.list[i].user.img+"' alt='Comment Author' />"+
             " </div><div class='comment-content'><div class='comment-top'><div class='comment-author'>"+
             "<h4 class='name'>"+page.list[i].user.username+"</h4>"+
             "<div class='mb-10'><span class='text-yellow fs-xs me-3'>"+page.list[i].heat+"<a href='javaScript:void(0)'> <i onclick='MyAddHeat("+page.list[i].msgid+ ","+page.list[i].gid+")' class='fas fa-star'></i></span></a>"+
             "<span class='commented-on'>"+page.list[i].time+"</span></div>"+
             " </div></div>"+
             " <p class='text'>"+page.list[i].msg+"</p>"+
             "</div></div></li>"
     )
    }
   }
  })
  }
  else {
   $("#myButton").empty();
   $("#myButton").append(
           "<a href='login.jsp'>Please log in first</a>"
   )
  }
 }
function MyAddHeat(msgid,gid){
  if(${not empty sessionScope.user}){
   $.ajax({
    type: "post",
    url: "goodController/addReviewHeat",
    data: "gid=" + gid + "&msgid=" + msgid+"&pageNo="+$("#pageNum").val(),//json对象转化为json字符串
    success: function (page) {
     console.log(page)
     $("#myReview").empty();
     $("#myReview").append(
             "<input type='hidden' id='prepageNo' value='" + page.prePage + "' '>" +
             "<input type='hidden' id='nextPage' value='" + page.nextPage + "' '>"+
             "<input type='hidden' id='pageNum' value='" + page.pageNum + "' '>"+
             "<input type='hidden' id='endPage' value='" + page.pages + "' '>"
     )
     for (let i = 0; i < page.list.length; i++) {
      $("#myReview").append(
              "<li class='vs-comment'><div class='vs-post-comment'><div class='author-img'>" +
              "<img src='" + page.list[i].user.img + "' alt='Comment Author' />" +
              " </div><div class='comment-content'><div class='comment-top'><div class='comment-author'>" +
              "<h4 class='name'>" + page.list[i].user.username + "</h4>" +
              "<div class='mb-10'><span class='text-yellow fs-xs me-3'>" + page.list[i].heat + "<a href='javaScript:void(0)'> <i onclick='MyAddHeat(" + page.list[i].msgid + "," + page.list[i].gid + ")' class='fas fa-star'></i></span></a>" +
              "<span class='commented-on'>" + page.list[i].time + "</span></div>" +
              " </div></div>" +
              " <p class='text'>" + page.list[i].msg + "</p>" +
              "</div></div></li>"
      )
     }
    }
   })
  }
  else {
   window.location.href="login.jsp";
  }
}
function findpre(){
 $.ajax({
  type: "post",
  url: "goodController/findReview",
  data:"gid=${good.gid}&pageNo="+$("#prepageNo").val(),//json对象转化为json字符串
  success: function (page) {
   console.log(page)
   $("#myReview").empty();
   $("#myReview").append(
    "<input type='hidden' id='prepageNo' value='"+page.prePage+"' '>"+
    "<input type='hidden' id='nextPage' value='"+page.nextPage+"' '>"+
      "<input type='hidden' id='pageNum' value='"+page.pageNum+"' '>"+
           "<input type='hidden' id='endPage' value='" + page.pages + "' '>"
   )
   for (let i = 0; i < page.list.length; i++) {
    $("#myReview").append(
            "<li class='vs-comment'><div class='vs-post-comment'><div class='author-img'>"+
            "<img src='"+page.list[i].user.img+"' alt='Comment Author' />"+
            " </div><div class='comment-content'><div class='comment-top'><div class='comment-author'>"+
            "<h4 class='name'>"+page.list[i].user.username+"</h4>"+
            "<div class='mb-10'><span class='text-yellow fs-xs me-3'>"+page.list[i].heat+"<a href='javaScript:void(0)'> <i onclick='MyAddHeat("+page.list[i].msgid+ ","+page.list[i].gid+")' class='fas fa-star'></i></span></a>"+
            "<span class='commented-on'>"+page.list[i].time+"</span></div>"+
            " </div></div>"+
            " <p class='text'>"+page.list[i].msg+"</p>"+
            "</div></div></li>"
    )
   }
  }
 })
}
 function findnext(){
  $.ajax({
   type: "post",
   url: "goodController/findReview",
   data:"gid=${good.gid}&pageNo="+$("#nextPage").val(),//json对象转化为json字符串
   success: function (page) {
    console.log(page)
    $("#myReview").empty();
    $("#myReview").append(
            "<input type='hidden' id='prepageNo' value='"+page.prePage+"' '>"+
            "<input type='hidden' id='nextPage' value='"+page.nextPage+"' '>"+
            "<input type='hidden' id='pageNum' value='" + page.pageNum + "' '>"+
            "<input type='hidden' id='endPage' value='" + page.pages + "' '>"
    )
    for (let i = 0; i < page.list.length; i++) {
     $("#myReview").append(
             "<li class='vs-comment'><div class='vs-post-comment'><div class='author-img'>"+
             "<img src='"+page.list[i].user.img+"' alt='Comment Author' />"+
             " </div><div class='comment-content'><div class='comment-top'><div class='comment-author'>"+
             "<h4 class='name'>"+page.list[i].user.username+"</h4>"+
             "<div class='mb-10'><span class='text-yellow fs-xs me-3'>"+page.list[i].heat+"<a href='javaScript:void(0)'> <i onclick='MyAddHeat("+page.list[i].msgid+ ","+page.list[i].gid+")' class='fas fa-star'></i></span></a>"+
             "<span class='commented-on'>"+page.list[i].time+"</span></div>"+
             " </div></div>"+
             " <p class='text'>"+page.list[i].msg+"</p>"+
             "</div></div></li>"
     )
    }
   }
  })
 }
  $.ajax({
   type: "post",
   url: "goodController/findReview",
   data:"gid=${good.gid}&pageNo=1",//json对象转化为json字符串
   success: function (page) {
    console.log(page)
    $("#myReview").empty();
    $("#myReview").append(
            "<input type='hidden' id='prepageNo' value='"+page.prePage+"' '>"+
            "<input type='hidden' id='nextPage' value='"+page.nextPage+"' '>"+
            "<input type='hidden' id='pageNum' value='" + page.pageNum + "' '>"+
            "<input type='hidden' id='endPage' value='" + page.pages + "' '>"
    )
    for (let i = 0; i < page.list.length; i++) {
     $("#myReview").append(
             "<li class='vs-comment'><div class='vs-post-comment'><div class='author-img'>"+
             "<img src='"+page.list[i].user.img+"' alt='Comment Author' />"+
             " </div><div class='comment-content'><div class='comment-top'><div class='comment-author'>"+
             "<h4 class='name'>"+page.list[i].user.username+"</h4>"+
             "<div class='mb-10'><span class='text-yellow fs-xs me-3'>"+page.list[i].heat+"<a href='javaScript:void(0)'> <i onclick='MyAddHeat("+page.list[i].msgid+ ","+page.list[i].gid+")' class='fas fa-star'></i></span></a>"+
             "<span class='commented-on'>"+page.list[i].time+"</span></div>"+
             " </div></div>"+
             " <p class='text'>"+page.list[i].msg+"</p>"+
             "</div></div></li>"
     )
    }
   }
  })
 function find1(){
  $.ajax({
   type: "post",
   url: "goodController/findReview",
   data:"gid=${good.gid}&pageNo=1",//json对象转化为json字符串
   success: function (page) {
    console.log(page)
    $("#myReview").empty();
    $("#myReview").append(
            "<input type='hidden' id='prepageNo' value='"+page.prePage+"' '>"+
            "<input type='hidden' id='nextPage' value='"+page.nextPage+"' '>"+
            "<input type='hidden' id='pageNum' value='" + page.pageNum + "' '>"+
            "<input type='hidden' id='endPage' value='" + page.pages + "' '>"
    )
    for (let i = 0; i < page.list.length; i++) {
     $("#myReview").append(
             "<li class='vs-comment'><div class='vs-post-comment'><div class='author-img'>"+
             "<img src='"+page.list[i].user.img+"' alt='Comment Author' />"+
             " </div><div class='comment-content'><div class='comment-top'><div class='comment-author'>"+
             "<h4 class='name'>"+page.list[i].user.username+"</h4>"+
             "<div class='mb-10'><span class='text-yellow fs-xs me-3'>"+page.list[i].heat+"<a href='javaScript:void(0)'> <i onclick='MyAddHeat("+page.list[i].msgid+ ","+page.list[i].gid+")' class='fas fa-star'></i></span></a>"+
             "<span class='commented-on'>"+page.list[i].time+"</span></div>"+
             " </div></div>"+
             " <p class='text'>"+page.list[i].msg+"</p>"+
             "</div></div></li>"
     )
    }
   }
  })
 }
 function findEnd(){
  $.ajax({
   type: "post",
   url: "goodController/findReview",
   data:"gid=${good.gid}&pageNo="+$("#endPage").val(),//json对象转化为json字符串
   success: function (page) {
    console.log(page)
    $("#myReview").empty();
    $("#myReview").append(
            "<input type='hidden' id='prepageNo' value='"+page.prePage+"' '>"+
            "<input type='hidden' id='nextPage' value='"+page.nextPage+"' '>"+
            "<input type='hidden' id='pageNum' value='" + page.pageNum + "' '>"+
            "<input type='hidden' id='endPage' value='" + page.pages + "' '>"
    )
    for (let i = 0; i < page.list.length; i++) {
     $("#myReview").append(
             "<li class='vs-comment'><div class='vs-post-comment'><div class='author-img'>"+
             "<img src='"+page.list[i].user.img+"' alt='Comment Author' />"+
             " </div><div class='comment-content'><div class='comment-top'><div class='comment-author'>"+
             "<h4 class='name'>"+page.list[i].user.username+"</h4>"+
             "<div class='mb-10'><span class='text-yellow fs-xs me-3'>"+page.list[i].heat+"<a href='javaScript:void(0)'> <i onclick='MyAddHeat("+page.list[i].msgid+ ","+page.list[i].gid+")' class='fas fa-star'></i></span></a>"+
             "<span class='commented-on'>"+page.list[i].time+"</span></div>"+
             " </div></div>"+
             " <p class='text'>"+page.list[i].msg+"</p>"+
             "</div></div></li>"
     )
    }
   }
  })
 }
</script>
