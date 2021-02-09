<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 mb-5 my-4">
          <Logo />
        </div>
        <div class="col-12 col-md-6 my-4">
          <div id="contact" class="section-subtitle text-left mb-4">
            contact us
          </div>
          <div class="location d-flex">
            <Location class="lh-lg" />
            <span class="ml-4">
              2901 Marmora Road, Glassgow, Seattle, WA 98122-1090
            </span>
          </div>
          <div class="location d-flex">
            <Mail class="mt-2" />
            <span class="ml-3">
              info@bplay.com
            </span>
          </div>
        </div>
        <div class="divider" />
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="footer-image">
            <img class="image-rect" src="/images/footer/license.png" />
            <div class="image-square">
              <img src="/images/footer/sabs-1.png" />
              <img src="/images/footer/curacao-1.png" />
              <img src="/images/footer/itech-1.png" />
            </div>
          </div>
        </div>
        <div class="divider d-block d-md-none" />
        <div class="col-12 col-md-6 copyright text-center text-md-right">
          Copyright © 2020 bplay.com. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style>
.location {
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 146.28%;
  color: #ffffff;
  transform: rotate(0.1deg);
}

.footer-image {
  display: flex;
  align-items: center;
}

.footer-image > * {
  padding: 5px;
}

.image-square {
  display: flex;
}

.image-square img {
  padding: 5px;
}

.copyright {
  font-family: Raleway;
  font-size: 14px;
  line-height: 28px;
  text-align: right;
  color: #ffffff;
  opacity: 0.7;
  transform: rotate(0.1deg);
  margin: auto 0;
}

.divider {
  width: 100%;
  border: 0.5px solid #424657;
}

@media screen and (max-width: 540px) {
  .location {
    font-size: 16px;
    line-height: 146.28%;
  }

  .footer-image {
    flex-wrap: wrap;
    flex-direction: column-reverse;
    justify-content: center;
  }
}
</style>
