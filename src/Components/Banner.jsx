import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import banner from '../assets/image/gettyimagesnew.png';
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "400px",
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />
      <Box sx={{ position: "relative", zIndex: 2,textAlign:"left" }}>
        <Typography variant="h3" gutterBottom>
          Welcome to Our Hospital
        </Typography>
        <Typography variant="h6">
          Your health is our top priority. Book your appointment today!
        </Typography>
      </Box>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button
            component={Link}
            to="/bookappointment"
            variant="contained"
            color="primary"
            size="large"
            sx={{ paddingX: 4 }}
          >
            Book Appointment
          </Button>
        </Grid>
        <Grid item>
          <Button
            component={Link}
            to="/login"
            variant="outlined"
            color="primary"
            size="large"
            sx={{ paddingX: 4, color: "#000", backgroundColor: "#a12f2a" }}
          >
            Login
          </Button>
        </Grid>
      </Grid>

      <Box>
      <section class="hero-area">
   <div class="hero-slider">
      <div class="slider-active">
         <div class="single-slider slider-height d-flex align-items-center" style="background-image: url(&quot;/_next/static/media/01.84d9f0aa.jpg&quot;);">
            <div class="container">
               <div class="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
                  <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(-2340px, 0px, 0px);">
                     <div class="swiper-slide" style="width: 1170px;">
                        <div class="row">
                           <div class="col-xl-5 col-lg-6">
                              <div class="hero-text mt-90">
                                 <div class="hero-slider-caption ">
                                    <span data-animation="fadeInUp" data-delay=".2s">Health products</span>
                                    <h2 class="hello" data-animation="fadeInUp" data-delay=".4s">Vector medical instruments</h2>
                                    <p data-animation="fadeInUp" data-delay=".6s">Precision, Innovation, Trust. Elevate healthcare standards with our cutting-edge equipment</p>
                                 </div>
                                 <div class="hero-slider-btn">
                                    <a data-animation="fadeInUp" data-delay=".8s" class="c-btn" href="/shop-grid">shop now <i class="far fa-plus"></i></a>
                                    <div class="b-button" data-animation="fadeInUp" data-delay="1s" style="animation-delay: 1s;"><a href="/shop-grid">hot collection <i class="far fa-plus"></i></a></div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-xl-7 col-lg-6">
                              <div class="slider-img d-none d-lg-block" data-animation="fadeInRight" data-delay=".8s"><img alt="image not found" loading="lazy" width="628" height="660" decoding="async" data-nimg="1" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslider-2.51e556e8.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslider-2.51e556e8.png&amp;w=1920&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslider-2.51e556e8.png&amp;w=1920&amp;q=75" style="color: transparent; width: auto; height: auto;" /></div>
                           </div>
                        </div>
                     </div>
                     <div class="swiper-slide swiper-slide-prev" style="width: 1170px;">
                        <div class="row">
                           <div class="col-xl-5 col-lg-6">
                              <div class="hero-text mt-90">
                                 <div class="hero-slider-caption ">
                                    <span data-animation="fadeInUp" data-delay=".2s">Wellness products</span>
                                    <h2 class="hello" data-animation="fadeInUp" data-delay=".4s">Face Mask Thermometer</h2>
                                    <p data-animation="fadeInUp" data-delay=".6s">Introducing our Face Mask Thermometer, a revolutionary medical device for contactless</p>
                                 </div>
                                 <div class="hero-slider-btn">
                                    <a data-animation="fadeInUp" data-delay=".8s" class="c-btn" href="/shop-grid">shop now <i class="far fa-plus"></i></a>
                                    <div class="b-button" data-animation="fadeInUp" data-delay="1s" style="animation-delay: 1s;"><a href="/shop-grid">hot collection <i class="far fa-plus"></i></a></div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-xl-7 col-lg-6">
                              <div class="slider-img d-none d-lg-block" data-animation="fadeInRight" data-delay=".8s"><img alt="image not found" loading="lazy" width="628" height="550" decoding="async" data-nimg="1" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F01.098c64f0.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F01.098c64f0.png&amp;w=1920&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F01.098c64f0.png&amp;w=1920&amp;q=75" style="color: transparent; width: auto; height: auto;" /></div>
                           </div>
                        </div>
                     </div>
                     <div class="swiper-slide swiper-slide-active" style="width: 1170px;">
                        <div class="row">
                           <div class="col-xl-5 col-lg-6">
                              <div class="hero-text mt-90">
                                 <div class="hero-slider-caption ">
                                    <span data-animation="fadeInUp" data-delay=".2s">Medistore products</span>
                                    <h2 class="hello" data-animation="fadeInUp" data-delay=".4s">Digital medical Thermometer</h2>
                                    <p data-animation="fadeInUp" data-delay=".6s">Elevate temperature monitoring with our Digital Medical Thermometer. Fast, and user-friendly,</p>
                                 </div>
                                 <div class="hero-slider-btn">
                                    <a data-animation="fadeInUp" data-delay=".8s" class="c-btn" href="/shop-grid">shop now <i class="far fa-plus"></i></a>
                                    <div class="b-button" data-animation="fadeInUp" data-delay="1s" style="animation-delay: 1s;"><a href="/shop-grid">hot collection <i class="far fa-plus"></i></a></div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-xl-7 col-lg-6">
                              <div class="slider-img d-none d-lg-block" data-animation="fadeInRight" data-delay=".8s"><img alt="image not found" loading="lazy" width="628" height="660" decoding="async" data-nimg="1" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslider-1.faa05385.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslider-1.faa05385.png&amp;w=1920&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslider-1.faa05385.png&amp;w=1920&amp;q=75" style="color: transparent; width: auto; height: auto;" /></div>
                           </div>
                        </div>
                     </div>
                     <div class="swiper-slide swiper-slide-next" style="width: 1170px;">
                        <div class="row">
                           <div class="col-xl-5 col-lg-6">
                              <div class="hero-text mt-90">
                                 <div class="hero-slider-caption ">
                                    <span data-animation="fadeInUp" data-delay=".2s">Medical Equipment products</span>
                                    <h2 class="hello" data-animation="fadeInUp" data-delay=".4s">Face Mask Thermometer</h2>
                                    <p data-animation="fadeInUp" data-delay=".6s">Quis autem vel eum iure reprehenin voluptate velit esse quam nihil molestiae conse</p>
                                 </div>
                                 <div class="hero-slider-btn">
                                    <a data-animation="fadeInUp" data-delay=".8s" class="c-btn" href="/shop-grid">shop now <i class="far fa-plus"></i></a>
                                    <div class="b-button" data-animation="fadeInUp" data-delay="1s" style="animation-delay: 1s;"><a href="/shop-grid">hot collection <i class="far fa-plus"></i></a></div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-xl-7 col-lg-6">
                              <div class="slider-img d-none d-lg-block" data-animation="fadeInRight" data-delay=".8s"><img alt="image not found" loading="lazy" width="628" height="660" decoding="async" data-nimg="1" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslider-3.6ee039ab.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslider-3.6ee039ab.png&amp;w=1920&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslider-3.6ee039ab.png&amp;w=1920&amp;q=75" style="color: transparent; width: auto; height: auto;" /></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
      </Box>
    </Box>
  );
};

export default Banner;
