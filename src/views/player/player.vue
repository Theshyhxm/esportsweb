<template>
 <head>
  <meta charset="utf-8" />
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <title>Esports - Players</title>
  <meta name="author" content="Vecuro" />
  <meta name="description" content="Zocker - eSports and Gaming HTML Template" />
  <meta name="keywords" content="Zocker - eSports and Gaming HTML Template" />
  <meta name="robots" content="INDEX,FOLLOW" />
  <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
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
    <input type="text"  name="name" class="border-theme" placeholder="Please enter the name of the merber" />
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
     <h1 class="breadcumb-title h1 text-white my-0">Pro-Players</h1>
     <h2 class="breadcumb-bg-title">Gamers</h2>
     <ul class="breadcumb-menu-style1 text-white mx-auto fs-xs">
      <li><a href="contestController/findContestItemByContestId"><i class="fal fa-home"></i>Home</a></li>
      <li class="active">Players</li>
     </ul>
    </div>
   </div>
  </div>
  <section class="vs-member-area vs-member-layout2 space-top newsletter-pb">
   <div class="container">
    <div class="row justify-content-center">
     <div v-for="(merber,index) in list" class="col-xl-3 col-lg-4 col-sm-6">
      <div class="vs-member image-scale-hover">
       <div class="member-img">
         <a href="javaScript:void(0)" @click="showDetails(merber.mid)" ><img src="@/assets/img/lolImg/TheShy.png" class="w-100" alt="Member Image" /></a>
       </div>
       <div class="member-content">
        <div class="links-wrap text-start position-relative mb-30">
          <span class="icon-btn3 style-white plus-icon"><span style="font-size: 20px;color: #0b0b0b">{{merber.mname}}</span></span>
         <div class="member-links">
          <a href="javaScript:void(0)" class="icon-btn3"><i class="fab">K:{{merber.merberkill}}</i></a>
          <a href="javaScript:void(0)" class="icon-btn3"><i class="fab">D:{{merber.merberdie}}</i></a>
          <a href="javaScript:void(0)" class="icon-btn3"><i class="fab">A:{{merber.merberassist}}</i></a>
         </div>
        </div>
        <h3 class="member-name h5 mb-0 text-white"><a href="javaScript:void(0)" @click="showDetails(merber.mid)">{{merber.name}}</a></h3>
        <span class="degi text-white">{{merber.msportid}}</span>
       </div>
      </div>
     </div>
     <input type='hidden' id='prepageNo' value='${page.prePage}'>
     <input type='hidden' id='nextPage' value='${page.nextPage}'>
     <input type='hidden' id='pageNum' value='${page.pageNum}'>
     <input type='hidden' id='endPage' value='${page.pages}'>
    </div>
    <div class="pagination-wrapper pagination-layout1 mt-lg-30 mb-30">
     <ul>
      <li><a href="javaScript:void(0)"><span class="text" onclick="find2(1)">首页</span></a></li>
      <li><a href="javaScript:void(0)"><span class="text" onclick="find2($('#prepageNo').val())">上一页</span></a></li>
      <li><a href="javaScript:void(0)"><span class="text" onclick="find2($('#nextPage').val())">下一页</span></a></li>
      <li><a href="javaScript:void(0)"><span class="text" onclick="find2($('#endPage').val())">末页</span></a></li>
     </ul>
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
<page-footer></page-footer>
  <a href="#" class="scrollToTop icon-btn3"><i class="far fa-angle-up"></i></a>
  <div class="vs-cursor"></div>
  <div class="vs-cursor2"></div>
 </body>
</template>
<script>
import pageFooter from "@/components/PageFooter.vue";
import pageHeader from "@/components/PageHeader.vue"
import {getPlayers,getPlayerDetails} from "@/js/api/team/player";
// import requestTeam from "@/js/utils/requestTeam";
export  default {

  data() {
    return {
      list: "",//搜索结果数据
      pageSize:8, //每页个数，后台默认4
      pageNo: 1,//当前页码，不传默认第一页
      pageAll: "", //数据总页数
      jumpPage: "",//跳转页码
    }
  },
  created() {
    this.loadTeams();
  },
  methods:{
    loadTeams(){
      getPlayers(this.pageNo,this.pageSize)
          .then((resp)=>{
            this.list=resp.data.data;
            this.pageSize=resp.data.pageSize;
            this.pageNo=resp.data.pageNo;
            this.pageAll=resp.data.pageAll;
            console.log(this.pageNo)
            //console.log(resp.data.data)
          })
    },
    pageClick(){
      this.loadTeams(); //获取列表数据
      window.scrollTo(0,500); //页面滚动到顶部
    },
    //点击页码或跳转指定页码
    goPage(event){
      if(event != this.pageNo && event != ""){
        this.pageNo = event
        this.loadTeams(); //获取列表数据
        window.scrollTo(0,500); //页面滚动到顶部
      }
    },
    showDetails(mid){
      this.$router.push({path:'/playerDetails',query: {mid: mid}})
    }
  },
  computed: {
    pagesAll() {
      // 开始数字
      var leftNum = 1;
      // 结束数字
      var rightNum = this.pageAll;
      // 存储页码数组
      var pageArray = [];
      // 显示页码的数量 最好是个单数
      var showNum = 5;
      // 因为是单数向上取整获取到中间的数字
      var centerNum = Math.ceil(showNum / 2);
      // 判断分析当总页数超过showNum展示页数时，需要判断分页情况
      //1、在最左边第一个或者在centerNum的前面
      //2、在中间
      //3、最右边最后一个
      if (this.pageAll >= showNum) {
        // 中间centerNum时左右都加上（centerNum-1)
        if (this.pageNo > centerNum && this.pageNo < this.pageAll - (centerNum - 1)) {
          //一定要用Number格式化一下获取的数据,防止获取的是字符串而不是数字
          leftNum = Number(this.pageNo) - (centerNum - 1)
          rightNum = Number(this.pageNo) + (centerNum - 1)
        } else {
          //最左边或者在showNum的中间
          if (this.pageNo <= centerNum) {
            leftNum = 1
            rightNum = showNum
            // 最右边时结束是总条数，开始是showNum减去1
          } else {
            rightNum = this.pageAll
            leftNum = this.pageAll - (showNum - 1)
          }
        }
      }
      while (leftNum <= rightNum) {
        pageArray.push(leftNum)
        leftNum++
      }
      return pageArray
    }
  },
  components: {
    pageHeader,
    pageFooter,
  }
}
</script>