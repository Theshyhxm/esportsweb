<template>
  <header class="header-wrapper header-layout1 position-absolute top-0 start-0 w-100 z-index-step1">
    <div class="header-top">
      <div class="container">
        <div class="row py-md-2">
          <div class="col-sm-6 d-none d-md-block">
            <p class="mb-0 fs-xs text-white">Welcome to our <a class="text-inherit"
                                                               href="teamController/page"><u class="fw-bold">Esports
              team</u></a></p>
          </div>
          <div class="col-sm-6 text-end d-none d-md-block">
            <ul class="social-links fs-xs text-white">
              <li><a href="#"><i  ><img style="width: 50px;height: 50px" src="@/assets/img/lolImg/TheShy.png" alt=""></i></a></li>
              <li><a href="#"><i >{{user.nickname}}</i></a></li>
              <li><a href="#"><i >CART</i></a></li>
              <li><a href="#"><i >EXIT</i></a></li>
<!--              <li><a href="#"><i class="fab fa-linkedin-in">{{user.username}}</i></a></li>-->
<!--              <li><a href="#"><i class="fab fa-youtube">{{user.username}}</i></a></li>-->
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="header-main">
      <div class="container position-relative">
        <div class="bg-dark px-50">
          <div class="row align-items-center">
            <div class="col-6 col-lg-4 d-block d-xl-none py-3 py-xl-0">
              <div class="header-logo">
                <a href="contestController/findContestItemByContestId"><img src="../assets/img/lolImg/LoLlog.png"
                                                                            alt="League of Legends"/></a>
              </div>
            </div>
            <div class="col-6 col-lg-8 col-xl-5 text-end text-xl-start">
              <nav class="main-menu menu-style1 mobile-menu-active" data-expand="992">
                <ul>
                  <li class="menu-item-has-children"><a
                      href="contestController/findContestItemByContestId">Home</a>
                    <ul class="sub-menu">
                      <li><a href="contestController/findContestItemByContestId">Home One</a></li>
                      <!--                                        <c:if test="${sessionScope.user.rid==1}"><li><a href="pages/login.jsp">后台管理</a></li></c:if>-->
                    </ul>
                  </li>

                  <li class="mega-menu-wrap menu-item-has-children"><a href="#">Pages</a>
                    <ul class="mega-menu">
                      <li><a href="goodController/findAll">Pagelist 1</a>
                        <ul>
                          <li><a href="contestController/findContestItemByContestId">Home One</a>
                          </li>

                        </ul>
                      </li>
                      <li><a href="#">Pagelist 2</a>
                        <ul>
                          <li><a href="javaScript:void(0)" @click="goPlayer">Players</a></li>
                          <li><a href="javaScript:void(0)" @click = "goTeam()">Teams</a></li>
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
              <button type="button" class="vs-menu-toggle text-white d-inline-block d-lg-none"><i
                  class="far fa-bars"></i></button>
            </div>
            <div class="col-md-4 col-lg-2 text-center d-none d-xl-block">
              <div class="header-logo1">
                <a href="contestController/findContestItemByContestId"><img src="../assets/img/lolImg/LoLlog.png"
                                                                            alt="League of Legends"/></a>
              </div>
            </div>
            <div class="col-md-4 col-lg-5 d-none d-xl-block">
              <div class="header-right d-flex align-items-center justify-content-end">
                <a href="#" class="vs-btn outline1 d-none d-xl-inline-block"><i
                    class="fab fa-twitch"></i><strong>Live Streaming</strong></a>
                <ul class="header-list1 list-style-none ml-30">
                  <li>
                    <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false"><img src="../assets/img/flag/flag-1.png"
                                                       alt="Country Flag" class="flag radius-circle"/>
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#"><img src="../assets/img/flag/french.png"
                                                                 alt="Flag" class="flag-small"/>
                        French</a></li>
                      <li><a class="dropdown-item" href="#"><img src="../assets/img/flag/germany.png"
                                                                 alt="Flag" class="flag-small"/>
                        Germany</a></li>
                      <li><a class="dropdown-item" href="#"><img src="../assets/img/flag/italy.png"
                                                                 alt="Flag" class="flag-small"/> Italy</a>
                      </li>
                      <li><a class="dropdown-item" href="#"><img src="../assets/img/flag/bangladesh.png"
                                                                 alt="Flag" class="flag-small"/>
                        Bangladesh</a></li>
                      <li><a class="dropdown-item" href="#"><img
                          src="../assets/img/flag/united-state.png" alt="Flag" class="flag-small"/>
                        United State</a></li>
                    </ul>
                  </li>
                  <li>
                    <button class="searchBoxTggler"><i class="far fa-search"></i></button>
                  </li>
                  <li>
                    <button class="sideMenuToggler"><i class="fal fa-grip-horizontal fs-2"></i></button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import request from "@/js/utils/requestTeam";

export default{
  data() {
    return {
      user:""
    }
  },
  created() {
    this.getUser().then((resp)=>{
      this.user=resp.data.data
      console.log(this.user)
    })
  },
  methods:{
    goTeam (){
      //  路径/home对应我在router目录下index.js中定义的path属性值
      this.$router.push('/team');
    },
    goPlayer (){
      //  路径/home对应我在router目录下index.js中定义的path属性值
      this.$router.push('/player');
    },
    getUser(){
      return request({
        url:`user/getUserDetailsByToken`,
        method:'post'
      })
    },
   logout(uid){
     window.location.href = '/login.html';
     return request({
       url:`user/logout/${uid}`,
       method:'get'
     })
   }
  }
}
</script>

