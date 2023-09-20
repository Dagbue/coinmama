<template>
  <div>
    <div v-show="!mobile" class="alpha">

      <div class="section-1">
        <p class="section-1-header">Join the crypto revolution</p>

        <div class="list-part">
          <div class="section-1-content">
            <img src="https://www.coinmama.com/next/icons/support.svg" alt="" class="section-1-img"/>
            <p class="section-1-para">24/7 friendly support</p>
          </div>

          <div class="section-1-content">
            <img src="https://www.coinmama.com/next/icons/buy.svg" alt="" class="section-1-img"/>
            <p class="section-1-para">Buy crypto instantly</p>
          </div>

          <div class="section-1-content">
            <img src="https://www.coinmama.com/next/icons/security.svg" alt="" class="section-1-img"/>
            <p class="section-1-para">Your security, our priority</p>
          </div>

          <div class="section-1-content">
            <img src="https://www.coinmama.com/next/icons/shield.svg" alt="" class="section-1-img"/>
            <p class="section-1-para">Trusted by 3M+ users</p>
          </div>
        </div>

        <img src="https://www.coinmama.com/next/signup.svg" alt="" />

      </div>

      <div class="section-2">

        <router-link to="/">
          <img src="https://www.coinmama.com/next/coinmama.svg" alt="" class="form-image" />
        </router-link>

        <h1 class="form-header">Join Coinmama Today</h1>
        <p class="form-text">Already have an account?<span class="blue" @click="onPostClick"> Log in</span></p>

        <div class="input-form-2">
          <input type="email"   placeholder="Enter Email" class="input-form-1" required="required" />
        </div>

        <div class="check">
          <input type="checkbox" class="input-check"/>
          <p class="check-para">Yes! Send me discounts, promotions & security updates by email</p>
        </div>

        <div class="btn-part">
          <p class="btn" @click="onPostClick2">Create Account</p>
        </div>

        <p class="form-text-2">By signing up, I confirm that I am at least 18 years old, and I agree to the<span class="underline"> Terms of Use and Privacy Policy</span></p>

      </div>

    </div>

    <div v-show="mobile" class="mobile">
      <router-link to="/">
        <img src="https://www.coinmama.com/next/coinmama.svg" alt="" class="form-image" style="margin-bottom: 1%;margin-top: 1%"/>
      </router-link>
      <div class="section-alpha">

        <div class="section-1-mobile">

          <div class="section-1-text">
            <p class="header">Join the</p>
            <p class="header-2">Crypto revolution</p>
          </div>

        </div>
      </div>

      <div style="text-align: center; margin-top: 5%; margin-bottom: 5%">
        <h1 class="form-header">Join Coinmama Today</h1>
        <p class="form-text">Already have an account?<span class="blue" @click="onPostClick"> Log in</span></p>
      </div>

      <form @submit.prevent>
      <div class="input-form-2">
        <input type="email"   placeholder="Enter Email" class="input-form-1" required="required" />
      </div>

      <div class="check">
        <input type="checkbox" class="input-check"/>
        <p class="check-para">Yes! Send me discounts, promotions & security updates by email</p>
      </div>

      <div class="btn-part">
        <p class="btn" @click="onPostClick2">Create Account</p>
      </div>

      <p class="form-text-2">By signing up, I confirm that I am at least 18 years old, and I agree to the<span class="underline"> Terms of Use and Privacy Policy</span></p>

      </form>

    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterView",
  data()  {
    return {
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
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 800){
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
    onPostClick2() {
      this.$router.push("/verify");
      window.scrollTo(0, 0);
    },
  }
}
</script>

<style scoped>
.alpha{
  display: flex;
}

.section-1{
  width: 42%;
  height: 100vh;
  background-color: rgb(43 101 232);
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.section-1-content{
  display: flex;
  align-content: center;
  align-items: center;
  padding-bottom: 10px;
}

.section-1-img{
  width: 32px;
  object-fit: cover;
  padding-right: 10px;
}

.section-1-header{
  font-size: 1.875rem;
  line-height: 2.25rem;
  padding-bottom: 2%;
}

.section-1-para{
  font-size: 19px;
}

.list-part{
  margin-bottom: 2%;
  margin-top: 1%;
}

.section-2{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 58%;
}

.form-header{
  font-size: 2.5rem;
  line-height: 1;
  color: rgb(43 101 232);
  margin-top: 3%;
  margin-bottom: 0.5%;
}

.input-form-2{
  display: flex;
  justify-content: center;
  margin-top: 2%;
  margin-bottom: 2%;
}

.input-form-1{
  order: 1;
  width: 420px;
  padding: 13px 20px;
  margin: 8px 0;
  display: inline-block;
  box-sizing: border-box;
}

input {
  box-sizing: border-box;
  border: 1px solid #D0D5DD;
  border-radius: 8px;
  -webkit-transition: 0.3s;
  padding-top: 12px;
  padding-bottom: 12px;
  transition: 0.3s;
  outline: none;
  color: #667085;
  letter-spacing: 0.5px;
}

input:focus {
  border: 1px solid rgb(43 101 232);
}

.btn{
  background-color: rgb(141 142 143);
  color: #FFFFFF;
  min-width: 175px;
  font-size: 1.125rem;
  line-height: 1.75rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  border-radius: 1.5rem;
  justify-content: center;
  display: flex;
  transition: all ease-in 0.3s;
}

.btn:hover{
  background-color: rgb(43 101 232);
}

.form-text{
  margin-top: 1.5%;
  --tw-text-opacity: 1;
  color: rgb(105 106 106/var(--tw-text-opacity));

  font-size: 1.125rem;
  line-height: 1.75rem;
}

.blue{
  color: rgb(43 101 232);
  text-decoration: underline;
}

.check{
  display: flex;
  align-items: center;
  align-content: center;
}

.input-check{
  margin-right: 1.5%;
}


.check-para {
  --tw-text-opacity: 1;
  color: rgb(105 106 106/var(--tw-text-opacity));

  font-size: 1.125rem;
  line-height: 1.45rem;
  text-align: left;
}

.underline{
  text-decoration: underline;
}




.form-text-2 {
  --tw-text-opacity: 1;
  color: rgb(105 106 106/var(--tw-text-opacity));
  font-size: .879rem;
  line-height: 1.25rem;
  text-align: left;
  width: 55%;
  margin-top: 3%;
}

.section-alpha{
  background: rgb(43 101 232);
  padding-bottom: 5%;
  padding-top: 5%;
}

.section-1-mobile{
  /*display: flex;*/
  /*justify-content: space-between;*/
  text-align: center;
}

.image{
  width: 25%;
}

.header{
  color: #FFFFFF;
  font-size: 1.5rem;
  font-weight: bold;
}

.header-2{
  color: #FFFFFF;
  font-size: 2.5rem;
  font-weight: bold;
}

.section-1-text{
  /*margin-top: 6%;*/
  /*margin-left: 13%;*/
}


.section-2-content p {
  color: #818a91;
  font-size: 14.5px;
}

@media (max-width: 600px) {
  .section-alpha{
    padding-bottom: 10%;
    padding-top: 10%;
  }

  .form-text-2 {
    width: 85%;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }

  .btn{
    margin-left: 6%;
    margin-right: 6%;
  }

  .check{
    width: 85%;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 4%;
  }
}
</style>