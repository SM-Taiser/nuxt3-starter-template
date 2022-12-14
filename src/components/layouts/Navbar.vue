<template>
    <div class="mobile-nav">
        <ul>
            <div class="back"><span><i class="fa-solid fa-arrow-left"></i></span>
                Back 
            </div>
            <li>
                <NuxtLink to="/" class="nav-link">Home</NuxtLink>
            </li>
            <li><i class="fa-solid fa-chevron-right"></i><a href="/category/men-01" class="nav-link">Men </a></li>
            <li><i class="fa-solid fa-chevron-right"></i><a href="/category/women" class="nav-link">Women </a></li>
            <li><i class="fa-solid fa-chevron-right"></i><a href="/category/mom-kids" class="nav-link">Mom &amp; Kids </a></li>
            <li><i class="fa-solid fa-chevron-right"></i><a href="/category/health-beauty" class="nav-link">Health &amp; Beauty </a></li>
            <li><i class="fa-solid fa-chevron-right"></i><a href="/category/food-sports" class="nav-link">Food &amp; Sports </a></li>
            <li>
                <a href="/category/gift-corner" class="nav-link">GIFT CORNER </a>
            </li>
            <li>
                <a href="/category/combo" class="nav-link">COMBO </a>
            </li>
            <li>
                <a href="/category/friday-special" class="nav-link">FRIDAY SPECIAL </a>
            </li>
            <li><i class="fa-solid fa-chevron-right"></i><a href="/category/skin-type" class="nav-link">Skin Type </a></li>
            <li>
                <a href="/category/korean-collection" class="nav-link">Korean Collection </a>
            </li>
        </ul>
        <ul class="sub-nav" style="display: none;">
            <div class="back"><span><i class="fa-solid fa-arrow-left"></i></span>Back </div>
            <li><i class="fa-solid fa-chevron-right"></i><a href="/category/face" class="">Face </a></li>
            <li><i class="fa-solid fa-chevron-right"></i><a href="/category/eye" class="">Eye </a></li>
            <li><i class="fa-solid fa-chevron-right"></i><a href="/category/lip-s" class="">Lip's </a></li>
            <li><i class="fa-solid fa-chevron-right"></i><a href="/category/nail-s" class="">Nail's </a></li>
            <li><i class="fa-solid fa-chevron-right"></i><a href="/category/groming" class="">Groming </a></li>
            <li><i class="fa-solid fa-chevron-right"></i><a href="/category/perfume-for-her" class="">Perfume For Her </a></li>
        </ul>
        <ul class="sub-sub-nav" style="display: none;">
            <div class="back"><span><i class="fa-solid fa-arrow-left"></i></span>Back </div>
            <li><a href="/category/lipstick" class=""> Lipstick </a></li>
            <li><a href="/category/lip-liner" class=""> Lip Liner </a></li>
            <li><a href="/category/lip-gloss" class=""> Lip Gloss </a></li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>

@include mobile-device {
  .mobile-nav {
    position: relative;
    z-index: 99;
      ul {
        border-bottom: 1px solid #dedede;
        width: 100%;
        height: 90vh;
        background-color: #464646;
          li {
              position: relative;
              color: #fff;
              border-top: 1px solid rgb(255 179 183/25%);
              cursor: pointer;
              font-weight: 300;
              text-transform: capitalize;
              .router-link-exact-active {
                background-color: rgba(6,10,69,.5215686274509804);
              }
              a {
                color: #fff;
              }
              i {
                position: absolute;
                top: 0;
                right: 0;
                height: 40px;
                width: 35px;
                text-align: center;
                color: #fff;
                font-size: 15px;
                line-height: 1px;
                background: rgba(108,63,63,.8313725490196079);
                padding-top: 19px;
              }
          }
          .back {
            background: #464646;
            font-weight: 500;
            color: #fff;
            padding: 9px 10px;
            letter-spacing: 1px;
            cursor: pointer;
            border-bottom: 2px solid #fd0e15;
            text-align: right;
          }
      }
  }
}
</style>