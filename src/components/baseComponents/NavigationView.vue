<template>

  <template v-if="!$route.meta.hideNavigation">
    <div class="topmost-header">
      <div class="topmost-header-1">
        <p class="topmost-header-text">
          Buying with a bank wire? Use fast track!
        </p>
        <p class="icon-group">
          <img src="https://coinmama.live.strattic.io/wp-content/themes/coinmama/images/banner-emojy1.svg" alt="icon">
          <img src="https://coinmama.live.strattic.io/wp-content/themes/coinmama/images/banner-emojy2.svg" alt="icon">
        </p>
        <p class="topmost-header-button" @click="onPostClick">
          Get Started
        </p>
      </div>
    </div>

    <div class="separate">

      <div class="style-4">

        <img alt="company logo" src="https://coinmama.live.strattic.io/wp-content/themes/coinmama/images/coinmama-logo.svg" class="logo" />

        <ul class="menu-4" v-show="!mobile">
          <li class="link">
            <router-link  to="/" class="link-2">
              Buy
              &nbsp;<img src="https://coinmama.live.strattic.io/wp-content/themes/coinmama/images/arrow-dropdown.png" alt="down">
            </router-link></li>
          <li class="link"><router-link  to="" class="link-2">Sell</router-link></li>
          <li class="link">
            <router-link  to="" class="link-2">
              Library
              &nbsp;<img src="https://coinmama.live.strattic.io/wp-content/themes/coinmama/images/arrow-dropdown.png" alt="down">
            </router-link></li>
          <li class="link"><router-link  to="" class="link-2">VIP</router-link></li>
          <li class="link"><router-link  to="/signup" class="auth">Sign Up</router-link></li>
          <li class="link"><router-link  to="/login" class="link-2" >Log In</router-link></li>
        </ul>

      </div>

      <div class="mobile">
        <div>
          <ul class="dropdown-nav" v-show="mobileNav">
            <li @click="toggleMobileNav2" class="link">
              <router-link  to="/" class="link-2">
                Buy
                &nbsp;<img src="https://coinmama.live.strattic.io/wp-content/themes/coinmama/images/arrow-dropdown.png" alt="down">
              </router-link></li>
            <li @click="toggleMobileNav2" class="link"><router-link  to="" class="link-2">Sell</router-link></li>
            <li @click="toggleMobileNav2" class="link">
              <router-link  to="" class="link-2">
                Library
                &nbsp;<img src="https://coinmama.live.strattic.io/wp-content/themes/coinmama/images/arrow-dropdown.png" alt="down">
              </router-link></li>
            <li @click="toggleMobileNav2" class="link"><router-link  to="" class="link-2">VIP</router-link></li>
            <li @click="toggleMobileNav2" class="link"><router-link  to="/signup" class="link-2">Sign Up</router-link></li>
            <li @click="toggleMobileNav2" class="link"><router-link  to="/login" class="link-2" >Log In</router-link></li>
          </ul>


        </div>
        <div class="icon">
          <i @click="toggleMobileNav" class='bx bx-menu' v-show="mobile" :class="{'icon-active' : mobileNav}"></i>
        </div>
      </div>

    </div>
  </template>

  </template>


<script>
export default {
  name: "NavigationView",
  data()  {
    return {
      value1: false,
      mobile: false,
      mobileNav: false,
      windowWidth: false,
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    toggleMobileNav2(){
      this.mobileNav = false;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 990){
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    onPostClick() {
      this.$router.push("/login");
      window.scrollTo(0, 0);
    },
  }
}
</script>

<style scoped>

.bx-menu{
  font-size: 30px;
  /*margin-top: 10px;*/
  cursor: pointer;
  transition: .8s ease all;
  color: rgb(43 101 232);
}
.icon-active{
  transform: rotate(180deg);
}


.style-4 {
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding-top: 10px;
  margin-right: 20px;
  margin-left: 20px;
  width: 100%;
}

.link {
  display: inline-block;
  list-style: outside none none;
  margin: 0 1.3em;
  overflow: hidden;
  font-size: 13.5px;
}


.auth{
  position: relative;
  display: inline-block;
  margin: 0;
  text-decoration: none;
  -webkit-transition: all 0.1s ease;
  transition: all 0.1s ease;

  display: block;
  background: #0b64e3;
  color: #fff;
  border-radius: 25px;
  padding: 8px 12px;
  width: 100px;
  text-align: center;
}


.link-2 {
  padding: 0.3em 0;
  position: relative;
  display: inline-block;
  margin: 0;
  cursor: pointer;
  color: #003a9a;
  font-size: 16px;
  text-decoration: none;
  -webkit-transition: all 0.1s ease;
  transition: all 0.1s ease;
}


.topmost-header {
  background: #000071;
  padding: 15px 25px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .3s;
  max-height: 100px;
  overflow: hidden;
}

.topmost-header-1 {
  display: flex;
  align-items: center;
  align-content: center;
}

.topmost-header-text {
  color: #fff;
  font-size: 20px;
}

.topmost-header-button{
  background: #fff;
  border-radius: 25px;
  height: 48px;
  display: inline-block;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #2b65e8;
  text-decoration: none;
  padding: 10px 25px;
}

.icon-group{
  margin-left: 15px;
  margin-right: 15px;
}

i{
  padding-right: 4px;
  font-size: 14px;
}

.dropdown-nav{
  display: flex;
  align-items: center;
  align-content: center;
  list-style: none;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(129 ,138 ,145 , 0.95);
  font-size: 19px;
  height: 100%;
  width: 220px;
  --tw-bg-opacity: 1;
  background-color: rgb(43 101 232/var(--tw-bg-opacity));
  text-align: center;
}


.dropdown-nav li {
  overflow: hidden;
  list-style: none;
  font-weight: bold;
}

.dropdown-nav * {
  box-sizing: border-box;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.dropdown-nav ul {
  padding-top: 25%;
  display: block;
  margin-right: auto;
  margin-left: auto;
}
.dropdown-nav a {
  display: inline-block;
  padding: 0.7em 0;
  color: #ffffff;
  position: relative;
  align-items: center;
  align-content: center;
  letter-spacing: 1.2px;
  margin: 0;
  text-decoration: none;
}

.dropdown-nav a:before,
.dropdown-nav a:after {
  position: absolute;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.dropdown-nav a:after {
  padding: 0.3em 0;
  position: absolute;
  bottom: 100%;
  left: 0;
  content: attr(data-hover);
  color: #676767;
  white-space: nowrap;
}

.dropdown-nav li:hover a,
.dropdown-nav.current a {
  cursor: pointer;
  transition: .8s ease all;
  color: rgb(0, 0, 113);
}

hr {
  color: white;
  width: 100%;
  background-color: white;
  border: 1px solid white;
  margin-top: 95px;
}



.separate{
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}


@media (min-width: 1286px) {
  .hamburger {
    display: none;
  }
}


@media (max-width: 990px) {
  .style-4 {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
    width: 19%;
    margin-left: unset;
    padding-left: unset;
  }
  .bx-menu{
    font-size: 30px;
    margin-top: 13px;
  }
}

@media (max-width: 616px) {
  .topmost-header {
    padding: 13px 25px;
  }

  .topmost-header-text {
    font-size: 16px;
  }

  .topmost-header-button{
    height: 44px;
    font-size: 17px;
    padding: 10px 25px;
  }
}

@media (max-width: 600px) {
  .bx-menu{
    font-size: 35px;
    margin-top: 12px;
  }
  .logo {
    min-width: 30%;
    margin-left: unset;
    padding-left: unset;
  }

  .dropdown-nav{
    padding-right: 10%;
    max-width: 220px;
    font-size: 12px;
  }

  .dropdown-nav li {
    margin-top: 8%;
  }

  hr {
    margin-top: 95%;
  }


}

@media (max-width: 450px) {
  .bx-menu{
    font-size: 35px;
    margin-top: 10px;
  }
  .logo {
    width: 35%;
    margin-left: unset;
    padding-left: unset;
  }

  .topmost-header {
    padding: 13px 18px;
  }

  .topmost-header-text {
    font-size: 11px;
  }

  .topmost-header-button{
    height: 35px;
    font-size: 12px;
    padding: 8px 23px;
  }

}

</style>