<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html class="no-js" lang="zxx">
 <head>
  <base href="${pageContext.request.scheme}://${pageContext.request.serverName}:${pageContext.request.serverPort}${pageContext.request.contextPath}/">
  <meta charset="utf-8" />
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <title>Zocker - eSports and Gaming HTML Template - Players Details</title>
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
     <img src="/img/LoLlog.png" alt="Loader Image" />
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
    <h3 class="sidebox-title text-white h5"><a href="cartController/findAll?uid=${sessionScope.user.uid}"><img src="/img/gwc.jpg" style="height: 60px" width="60px">Your shopping cart</a></h3>
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
   <form action="teamController/findByCondition">
    <input type="text" name="name" class="border-theme" placeholder="Please enter the name of the contestant" />
    <button type="submit"><i class="fal fa-search"></i></button>
   </form>
  </div>
  <div class="vs-menu-wrapper">
   <div class="vs-menu-area bg-dark">
    <button class="vs-menu-toggle"><i class="fal fa-times"></i></button>
    <div class="mobile-logo">
     <a href="contestController/findContestItemByContestId"><img src="/img/LoLlog.png" alt="Zocker" /></a>
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
        <a href="contestController/findContestItemByContestId"><img src="/img/LoLlog.png" alt="Zocker" /></a>
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
     <h1 class="breadcumb-title h1 text-white my-0">${merber.name}</h1>
     <h2 class="breadcumb-bg-title">${merber.honor}</h2>
     <ul class="breadcumb-menu-style1 text-white mx-auto fs-xs">
      <li><a href="contestController/findContestItemByContestId"><i class="fal fa-home"></i>${merber.type}</a></li>
      <li class="active">${merber.name}</li>
     </ul>
    </div>
   </div>
  </div>
  <section class="vs-player-wrapper space-top newsletter-pb">
   <div class="container">
    <div class="row">
     <div class="col-lg-8">
      <div class="vs-box1 d-md-flex mb-30 info-box4 align-items-center">
       <div class="pro-tag position-absolute end-0 top-0 bg-gradient text-white">
        <i class="fas fa-check-circle"></i> ${merber.type}
       </div>
       <div class="inner-img1">
        <img src="${merber.merbaerimg}" alt="Member Image" />
       </div>
       <div class="media-body ml-lg-30">
        <h2 class="h4 mb-0">${merber.name}</h2>
        <span class="text-theme2">${merber.type}</span>
        <table class="info-table mt-2 mb-0">
         <tbody>
          <tr>
           <td>Age:</td>
           <td>${merber.age}</td>
          </tr>
          <tr>
           <td>Sex:</td>
           <td>${merber.sex}</td>
          </tr>
          <tr>
           <td>Honor:</td>
           <td>${merber.honor}</td>
          </tr>
          <tr>
           <td>Team:</td>
           <td>${merberTeam.tname}</td>
          </tr>
         </tbody>
        </table>
       </div>
      </div>
      <div class="vs-box1 p-0 mb-30">
       <div class="nav tab-menu1 tab-indicator justify-content-center justify-content-sm-start" role="tablist">
        <a class="nav-link active" id="skill1-tab" data-bs-toggle="tab" href="#skill1" role="tab" aria-controls="skill1" aria-selected="true">KDA</a>
        <a class="nav-link" id="skill3-tab" data-bs-toggle="tab" href="#skill3" role="tab" aria-controls="skill3" aria-selected="false">Hight Light</a>
       </div>
       <div class="tab-content mt-30">
        <div class="tab-pane show active" id="skill1" role="tabpanel" aria-labelledby="skill1-tab">
         <div class="skill-box1 d-sm-flex px-30 pb-30 text-center text-sm-start">
          <div class="media-img position-relative">
           <img src="/img/worlds.png" alt="Team Image" />
          </div>
          <div class="media-body align-self-center ml-lg-30">
           <h5 class="fs-20 mb-0 font-theme">${merber.name}</h5>
           <div class="progress style1 mt-10">
            <div class="progress-bar wins" role="progressbar" style="width: ${merber.merberkill/(merber.merberkill+merber.merberdie+merber.merberassist)*100}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progress-bar draws" role="progressbar" style="width: ${merber.merberdie/(merber.merberkill+merber.merberdie+merber.merberassist)*100}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progress-bar losses" role="progressbar" style="width: ${merber.merberassist/(merber.merberkill+merber.merberdie+merber.merberassist)*100}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
           </div>
           <ul class="bar-list list-style-none small">
            <li><span class="dot wins"></span> Kills  <fmt:formatNumber value="${merber.merberkill/(merber.merberkill+merber.merberdie+merber.merberassist)*100} " pattern="#.00" type="number" />%</li>
            <li><span class="dot draws"></span> Dies   <fmt:formatNumber value="${merber.merberdie/(merber.merberkill+merber.merberdie+merber.merberassist)*100}" pattern="#.00" type="number" />%</li>
            <li><span class="dot losses"></span> Assists   <fmt:formatNumber value="${merber.merberdie/(merber.merberkill+merber.merberdie+merber.merberassist)*100}" pattern="#.00" type="number" />%</li>
           </ul>
          </div>
         </div>
        </div>
        <div class="tab-pane" id="skill2" role="tabpanel" aria-labelledby="skill2-tab">
         <div class="skill-box1 d-sm-flex px-30 pb-30 text-center text-sm-start">
          <div class="media-img position-relative">
           <img src="assets/img/team/team-d-4.jpg" alt="Team Image" />
          </div>
          <div class="media-body align-self-center ml-lg-30">
           <h5 class="fs-20 mb-0 font-theme">EMU Battle</h5>
           <span class="text-theme2 fs-xs">29th Rank</span>
           <div class="progress style1 mt-10">
            <div class="progress-bar wins" role="progressbar" style="width: 55%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progress-bar draws" role="progressbar" style="width: 15%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progress-bar losses" role="progressbar" style="width: 30%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
           </div>
           <ul class="bar-list list-style-none small">
            <li><span class="dot wins"></span> Wins 55%</li>
            <li><span class="dot draws"></span> Draws 15%</li>
            <li><span class="dot losses"></span> Losses 30%</li>
           </ul>
          </div>
         </div>
         <div class="skill-box1 d-sm-flex px-30 pb-30 text-center text-sm-start">
          <div class="media-img position-relative">
           <img src="assets/img/team/team-d-5.jpg" alt="Team Image" />
          </div>
          <div class="media-body align-self-center ml-lg-30">
           <h5 class="fs-20 mb-0 font-theme">Wilson Boris</h5>
           <span class="text-theme2 fs-xs">23th Rank</span>
           <div class="progress style1 mt-10">
            <div class="progress-bar wins" role="progressbar" style="width: 40%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progress-bar draws" role="progressbar" style="width: 20%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progress-bar losses" role="progressbar" style="width: 40%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
           </div>
           <ul class="bar-list list-style-none small">
            <li><span class="dot wins"></span> Wins 40%</li>
            <li><span class="dot draws"></span> Draws 20%</li>
            <li><span class="dot losses"></span> Losses 40%</li>
           </ul>
          </div>
         </div>
        </div>
        <div class="tab-pane" id="skill3" role="tabpanel" aria-labelledby="skill3-tab">
         <div class="skill-box1 d-sm-flex px-30 pb-30 text-center text-sm-start">
          <div class="media-img position-relative">
           <a href="${merber.highligh}" class="play-btn small-size overlay-center popup-video"><i class="fas fa-play"></i></a>
           <img src="/img/worlds.png" alt="Team Image" />
          </div>
          <div class="media-body align-self-center ml-lg-30">
           <h5 class="fs-20 mb-0 font-theme">League of Legends</h5>
          </div>
         </div>
        </div>
       </div>
      </div>
      <div class="vs-box1 mb-30">
       <h4 class="h5 mb-25 mt-n1">Live Stream</h4>
       <div class="hover-shape position-relative">
        <span class="bg-gradient text-white post-time d-none d-sm-inline-block">12 Hour Ago</span>
        <img src="/img/w22.png" alt="Video Image" class="w-100" />
        <a href="https://lpl.qq.com/es/live.shtml" class="play-btn overlay-center popup-video"><i class="fas fa-play"></i></a>
       </div>
       <div class="row mt-20 mt-lg-30 flex-row-reverse">
        <div class="col-md-7 mb-15 mb-md-0 text-md-end">
         <strong class="text-title fs-18 mb-2 mb-md-0 me-md-2 d-md-inline-block d-block">Share Stream:</strong>
         <div class="d-inline-flex gap-2">
          <a class="icon-btn3 size-40" href="#"><i class="fab fa-facebook-f"></i></a>
          <a class="icon-btn3 size-40" href="#"><i class="fab fa-twitter"></i></a>
          <a class="icon-btn3 size-40" href="#"><i class="fab fa-linkedin-in"></i></a>
          <a class="icon-btn3 size-40" href="#"><i class="fab fa-instagram"></i></a>
         </div>
        </div>
        <div class="col-md-5">
         <div class="author-box d-flex">
          <img src="/img/w22-logo.jpg" alt="Author Image" />
          <div class="media-body align-self-center">
           <h6 class="name mb-0 text-normal lh-base"><a href="#">2022  League of Legends World Championship</a></h6>
           <span class="fs-xs">250k views</span>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
     <div class="col-lg-4">
      <aside class="sidebar-area sticky-top overflow-hidden">
       <div class="widget widget_search">
       </div>
       <h3 class="sidebox-title-v2 h5">Teammate</h3>
       <div class="vs-sidebox-v2">
        <ul class="vs-cat-list1">
         <c:forEach items="${merberInTeam}" var="merber">
         <li><a href="merberController/findById?mid=${merber.mid}">${merber.name} <span class="cat-number">${merber.type}</span></a></li>
         </c:forEach>
        </ul>
       </div>

        </div>
       </div>
      </aside>
     </div>
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