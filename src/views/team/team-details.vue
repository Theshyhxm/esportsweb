<template>
 <head>
  <meta charset="utf-8" />
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <title>Esports - Team Details</title>
  <meta name="author" content="Vecuro" />
  <meta name="description" content="Zocker - eSports and Gaming HTML Template" />
  <meta name="keywords" content="Zocker - eSports and Gaming HTML Template" />
  <meta name="robots" content="INDEX,FOLLOW" />
  <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
  <meta name="msapplication-TileColor" content="#ffffff" />
  <meta name="msapplication-TileImage" content="assets/img/favicons/ms-icon-144x144.png" />
  <meta name="theme-color" content="#ffffff" />
 </head>
 <body>
<!--  <div class="preloader">-->
<!--   <button class="vs-btn preloaderCls">Cancel Preloader</button>-->
<!--   <div class="preloader-inner">-->
<!--    <div class="loader-logo">-->
<!--     <img src="@/assets/img/lolImg/LoLlog.png" alt="Loader Image" />-->
<!--    </div>-->
<!--    <div class="loader-wrap pt-4">-->
<!--     <span class="loader"></span>-->
<!--    </div>-->
<!--   </div>-->
<!--  </div>-->
  <div class="sticky-header-wrap sticky-header bg-light-dark py-1 py-sm-2 py-lg-1">
   <div class="container position-relative">
    <div class="row align-items-center">
     <div class="col-5 col-md-3">
      <div class="logo">
       <a href="contestController/findContestItemByContestId"><img src="@/assets/img/logo-2.png" alt="Zocker" /></a>
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


         </ul>

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
    <h3 class="sidebox-title text-white h5"><a href="cartController/findAll?uid=${sessionScope.user.uid}"><img src="@/assets/img/lolImg/gwc.jpg" style="height: 60px" width="60px">Your shopping cart</a></h3>
    <div class="post-thumb-style1">
     <div class="vs-blog d-flex gap-3">
      <div class="media-img">
       <a href="blog-details.jsp"><img src="@/assets/img/widget/recent-post-1-1.png" alt="Recent Post" /></a>
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
       <a href="blog-details.jsp"><img src="@/assets/img/widget/recent-post-1-2.png" alt="Recent Post" /></a>
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
       <a href="blog-details.jsp"><img src="@/assets/img/widget/recent-post-1-3.png" alt="Recent Post" /></a>
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
    <input type="text" name="name" class="border-theme" placeholder="Please enter the name of the contestant in the team" />
    <button type="submit"><i class="fal fa-search"></i></button>
   </form>
  </div>
  <div class="vs-menu-wrapper">
   <div class="vs-menu-area bg-dark">
    <button class="vs-menu-toggle"><i class="fal fa-times"></i></button>
    <div class="mobile-logo">
     <a href="contestController/findContestItemByContestId"><img src="@/assets/img/lolImg/LoLlog.png" alt="Zocker" /></a>
    </div>
    <div class="vs-mobile-menu link-inherit"></div>
   </div>
  </div>
  <page-header></page-header>
  <div class="breadcumb-wrapper breadcumb-layout1 pt-200 pb-50" data-bg-src="@/assets/img/breadcumb/breadcumb-1.jpg" data-overlay="">
   <div class="container z-index-common">
    <div class="breadcumb-content text-center">
     <h1 class="breadcumb-title h1 text-white my-0">{{teamDetails.tname}}</h1>
     <h2 class="breadcumb-bg-title">Gamers</h2>
     <ul class="breadcumb-menu-style1 text-white mx-auto fs-xs">
      <li><a href="contestController/findContestItemByContestId"><i class="fal fa-home"></i>Home</a></li>
      <li class="active">Team Details</li>
     </ul>
    </div>
   </div>
  </div>
  <section class="vs-team-wrapper space-top newsletter-pb">
   <div class="container">
    <div class="row">
     <div class="col-lg-8">
      <div class="vs-box1 d-md-flex mb-20 info-box4 align-items-center">
       <div class="pro-tag position-absolute end-0 top-0 bg-gradient text-white">
        <i class="fas fa-check-circle"></i> pro
       </div>
       <div class="inner-img1">
<!--        <img src="{{teamDetails.teamTeamimg}}" alt="Team Image" />-->
         <img src="@/assets/img/lolImg/IG.png" alt="Team Image" />
       </div>
       <div class="media-body ml-lg-30">
        <table class="info-table mb-0">
         <tbody>
          <tr>
           <td>Name:</td>
           <td>{{teamDetails.tname}}</td>
          </tr>
          <tr>
           <td>Founded:</td>
           <td>{{teamDetails.birthtime}}</td>
          </tr>
          <tr>
           <td>Ownership:</td>
           <td>public</td>
          </tr>
          <tr>
           <td>Members:</td>
           <td>{{teamDetails.merbernumber}}</td>
          </tr>
          <tr>
           <td>Address:</td>
           <td>{{teamDetails.teamAddress}}</td>
          </tr>
         </tbody>
        </table>
       </div>
      </div>
      <div class="vs-member mb-20-layout3">
       <div class="row">
        <div class="col-sm-6">
         <h3 class="h4">Players</h3>
        </div>
        <div class="col-sm-6 pt-2 text-end d-none d-sm-block">
         <button class="icon1 mr-10 text-theme-hover" type="button" data-slick-prev="#memberslide3"><i class="far fa-angle-left"></i></button> 
         <button class="icon1 text-theme-hover" type="button" data-slick-next="#memberslide3"><i class="far fa-angle-right"></i></button>
        </div>
       </div>
       <div class="row link-inherit vs-carousel" id="memberslide3" data-slide-show="4" data-lg-slide-show="3" data-md-slide-show="3" data-sm-slide-show="2" data-xs-slide-show="1">
        <div class="col-xl-3" v-for="(merber,index) in teamDetails.teamMerbers">
         <div class="vs-member mb-25">
          <div class="member-img image-scale-hover mb-15">
           <a href="javaScript:void(0)" @click="showMerberDetails(merber.mid)"><img src="@/assets/img/lolImg/TheShy.png" alt="Member Image" class="w-100" /></a>
          </div>
          <h4 class="member-name font-theme mb-0 text-normal h5"><a href="javaScript:void(0)" @click="showMerberDetails(merber.mid)">{{merber.mname}}</a></h4>
          <span class="degi fs-xs">{{honor}}</span>
         </div>
        </div>
       </div>
      </div>
      <div class="vs-box1 p-0 mb-30">
       <div class="nav tab-menu1 tab-indicator justify-content-center justify-content-sm-start" role="tablist">
        <a class="nav-link active" id="skill1-tab" data-bs-toggle="tab" href="#skill1" role="tab" aria-controls="skill1" aria-selected="true">GAMES</a> 
        <a class="nav-link" id="skill2-tab" data-bs-toggle="tab" href="#skill2" role="tab" aria-controls="skill2" aria-selected="false">MERBERS</a>
        <a class="nav-link" id="skill3-tab" data-bs-toggle="tab" href="#skill3" role="tab" aria-controls="skill3" aria-selected="false">BESTHONOR</a>
       </div>
       <div class="tab-content mt-30">
        <div class="tab-pane show active" id="skill1" role="tabpanel" aria-labelledby="skill1-tab">
         <div class="skill-box1 d-sm-flex px-30 pb-30 text-center text-sm-start">
          <div class="media-img position-relative">
           <img src="@/assets/img/lolImg/worlds.png" alt="Team Image" style="text-align:center"/>
          </div>
          <div class="media-body align-self-center ml-lg-30">
           <h5 class="fs-20 mb-0 font-theme">{{teamDetails.tname}}</h5>
           <span class="text-theme2 fs-xs">{{ teamDetails.win+teamDetails.loss+teamDetails.dogfall}}th Rank</span>
           <div class="progress style1 mt-10">
            <div class="progress-bar wins" role="progressbar" :style="{width: numFilter(teamDetails.win/(teamDetails.win+teamDetails.dogfall+teamDetails.loss)*100)+'%'}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progress-bar draws" role="progressbar" :style="{width: numFilter(teamDetails.dogfall/(teamDetails.win+teamDetails.dogfall+teamDetails.loss)*100)+'%'}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progress-bar losses" role="progressbar" :style="{width: numFilter(teamDetails.loss/(teamDetails.win+teamDetails.dogfall+teamDetails.loss)*100)+'%'}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
           </div>
           <ul class="bar-list list-style-none small">
            <li><span class="dot wins"></span> Wins   {{ numFilter(teamDetails.win/(teamDetails.win+teamDetails.dogfall+teamDetails.loss)*100)}}%</li>
            <li><span class="dot draws"></span> Draws  {{numFilter(teamDetails.dogfall/(teamDetails.win+teamDetails.dogfall+teamDetails.loss)*100)}}%</li>
            <li><span class="dot losses"></span> Losses {{numFilter(teamDetails.loss/(teamDetails.win+teamDetails.dogfall+teamDetails.loss)*100)}}%</li>
           </ul>
          </div>
         </div>
        </div>
        <div class="tab-pane" id="skill2" role="tabpanel" aria-labelledby="skill2-tab">
         <div v-for="(merber,index) in teamDetails.teamMerbers" class="skill-box1 d-sm-flex px-30 pb-30 text-center text-sm-start">
          <div class="media-img position-relative">
           <img @click="showMerberDetails(merber.mid)" src="@/assets/img/lolImg/TheShy.png" alt="Team Image" />
          </div>
          <div class="media-body align-self-center ml-lg-30">
           <h5 class="fs-20 mb-0 font-theme">{{merber.mname}}</h5>
           <span class="text-theme2 fs-xs">{{merber.merberkill+merber.merberassist}}th K&A</span>
           <div class="progress style1 mt-10">
            <div class="progress-bar wins" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" :style="{ width: numFilter(merber.merberkill/(merber.merberkill+merber.merberassist+merber.merberdie)*100) + '%' }"></div>
            <div class="progress-bar draws" role="progressbar" :style="{ width: numFilter(merber.merberassist/(merber.merberkill+merber.merberassist+merber.merberdie)*100) + '%' }" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progress-bar losses" role="progressbar" :style="{ width: numFilter(merber.merberdie/(merber.merberkill+merber.merberassist+merber.merberdie)*100) + '%' }" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
           </div>
           <ul class="bar-list list-style-none small">
            <li><span class="dot wins"></span> Kills{{ numFilter(merber.merberkill/(merber.merberkill+merber.merberassist+merber.merberdie)*100)}}%</li>
            <li><span class="dot draws"></span> Assist {{ numFilter(merber.merberassist/(merber.merberkill+merber.merberassist+merber.merberdie)*100)}}%</li>
            <li><span class="dot losses"></span> Dies {{ numFilter(merber.merberdie/(merber.merberkill+merber.merberassist+merber.merberdie)*100)}}%</li>
           </ul>
          </div>
         </div>
        </div>
        <div class="tab-pane" id="skill3" role="tabpanel" aria-labelledby="skill3-tab">
         <div class="skill-box1 d-sm-flex px-30 pb-30 text-center text-sm-start">
          <div class="media-img position-relative">
           <a v-if="teamDetails.teamHonors" href="{{teamDetails.teamHonors[0].honorurl}}" onclick="" class="play-btn small-size overlay-center popup-video"><i class="fas fa-play"></i></a>
<!--          <video id="myVideo">bestHonor</video>-->
<!--           <img v-if="teamDetails.teamHonors"  src="{{teamDetails.teamHonors[0].honorimg}}" alt="Team Image" />-->
            <img  src="@/assets/img/lolImg/IG.png" alt="Team Image" />
          </div>
          <div class="media-body align-self-center ml-lg-30">
           <h5 v-if="teamDetails.teamHonors" class="fs-20 mb-0 font-theme" >{{ teamDetails.teamHonors[0].hname }}</h5>
           <span v-if="teamDetails.teamHonors" style="font-size: 22px" class="text-theme2 fs-xs">Power: {{teamDetails.teamHonors[0].power}}</span>
          </div>
         </div>
        </div>
       </div>
      </div>
      <div class="vs-box1 mb-25">
       <h4 class="h5 mb-25 mt-n1">Live Stream</h4>
       <div class="hover-shape position-relative">
        <span class="bg-gradient text-white post-time d-none d-sm-inline-block">Hot</span>
        <img src="@/assets/img/lolImg/w22.png" alt="Video Image" class="w-100" />
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
          <img src="@/assets/img/lolImg/w22-logo.jpg" alt="Author Image" />
          <div class="media-body align-self-center">
           <h6 class="name mb-0 text-normal lh-base"><a href="#">2022  League of Legends World Championship</a></h6>
           <span class="fs-xs">250k views</span>
          </div>
         </div>
        </div>
       </div>
      </div>
      <h3 class="h4 font-theme">Social Links</h3>
      <div class="d-inline-flex gap-2 mb-25">
       <a class="icon-btn3 size-40" href="#"><i class="fab fa-facebook-f"></i></a> 
       <a class="icon-btn3 size-40" href="#"><i class="fab fa-twitter"></i></a> 
       <a class="icon-btn3 size-40" href="#"><i class="fab fa-linkedin-in"></i></a> 
       <a class="icon-btn3 size-40" href="#"><i class="fab fa-instagram"></i></a>
      </div>
     </div>
     <div class="col-lg-4">
      <aside class="sidebar-area sticky-top overflow-hidden">
       <div class="widget widget_search">
       </div>
       <h3 class="sidebox-title-v2 h5">information</h3>
       <div class="vs-sidebox-v2">
        <ul class="vs-cat-list1">
         <li><a href="merberController/findByType?type=TOP&tid=${team.tid}">TOP <span class="cat-number">${merberNumType.TOPSize}</span></a></li>
         <li><a href="merberController/findByType?type=MID&tid=${team.tid}">MID <span class="cat-number">${merberNumType.MIDSize}</span></a></li>
         <li><a href="merberController/findByType?type=JUG&tid=${team.tid}">JUG <span class="cat-number">${merberNumType.JUGSize}</span></a></li>
         <li><a href="merberController/findByType?type=ADC&tid=${team.tid}">ADC<span class="cat-number">${merberNumType.ADCSize}</span></a></li>
         <li><a href="merberController/findByType?type=SUP&tid=${team.tid}">SUP<span class="cat-number">${merberNumType.SUPSize}</span></a></li>
        </ul>
       </div>
       <h3 class="sidebox-title-v2 h5">Top Teams</h3>
       <div class="vs-sidebox bg-smoke">
        <div class="row no-gutters g-2">
<!--         <c:forEach items="${topTeam}" var="team">-->
<!--         <div class="col-6">-->
<!--          <div class="image-scale-hover">-->
<!--           <a href="teamController/findTeamById?tid=${team.tid}"><img src="${team.teamimg}" class="w-100" alt="Sidebox Image" /></a>-->
<!--            ${team.tname}-->
<!--          </div>-->
<!--         </div>-->
<!--         </c:forEach>-->
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
  </body>>
  <page-footer></page-footer>
  <a href="#" class="scrollToTop icon-btn3"><i class="far fa-angle-up"></i></a>
  <div class="vs-cursor"></div>
  <div class="vs-cursor2"></div>
</template>
<script>
import pageFooter from "@/components/PageFooter.vue";
import pageHeader from "@/components/PageHeader.vue"
import {numFilter} from "@/js/utils/numFilter";
import {getTeamDetails} from "@/js/api/team/teams";
import {getPlayerDetails} from "@/js/api/team/player";
// import requestTeam from "@/js/utils/requestTeam";
export  default {

  data() {
    return {
      teamDetails: "",//搜索结果数据
      pageSize:4, //每页个数，后台默认15
      pageNo: 1,//当前页码，不传默认第一页
      pageAll: "", //数据总页数
      jumpPage: "",//跳转页码
    }
  },
  created() {
    this.loadTeams();
  },
  methods:{
    numFilter,
    loadTeams(){
      getTeamDetails(this.$route.query.tid)
          .then((resp)=>{
            this.teamDetails=resp.data.data
          })
    },
    goPlayer (){
      //  路径/home对应我在router目录下index.js中定义的path属性值
      this.$router.push('/player');
    },
    showMerberDetails(mid){
      this.$router.push({path:'/playerDetails',query: {mid: mid}})
      getPlayerDetails(mid)
          .then((resp)=>{
            this.merberDetails=resp.data.data
          })
    },
  },
  components: {
    pageHeader,
    pageFooter,
  }
}

</script>