<template>
  <footer class="footer-wrapper footer-layout1 bg-fluid bg-major-black position-relative">
    <div class="bg-fluid d-none d-none d-xl-block position-absolute start-0 top-0 w-100 h-100"
         data-bg-src="@/assets/img/bg/footer-bg-1-1.jpg"></div>
    <div class="footer-widget-wrapper dark-style1 z-index-common">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-6 col-lg-3 col-xl-4">
            <div class="widget footer-widget pt-0">
              <h3 class="widget_title">About Us</h3>
              <div class="vs-widget-about">
                <p class="about-text text-footer1 pe-xl-5">The League of Legends offseason is in full effect
                  and teams are looking to sign new players to strengthen their roster or to re-sign their
                  current players.</p>
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
                <p class="contact-info"><i class="fal fa-map-marker-alt text-white"></i>121 King St,
                  Melbourne VIC 3000, Australia</p>
                <p class="contact-info"><i class="fal fa-phone text-white"></i><a href="tel:+65965252561">(888)-659-252561</a>
                </p>
                <p class="contact-info"><i class="fal fa-fax text-white"></i><a href="tel:+65965252561">(888)-123-45678</a>
                </p>
                <p class="contact-info"><i class="fal fa-envelope text-white"></i><a
                    href="mailto:zocker@webmail.com">zocker@email.com</a></p>
                <p class="contact-info"><i class="fal fa-globe text-white"></i><a href="#">www.zockerexample.com</a>
                </p>
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
            <p class="text-light fw-bold text-bold mb-0">Copyright &copy; 2021.Company name All rights
              reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
 export default {
   name:"PageFooter"
 }
</script>

