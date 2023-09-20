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

        <h1 class="form-header">Log in to Coinmama</h1>
        <p class="form-text">Not registered yet? <span @click="onPostClick">Create an account</span></p>

        <form @submit.prevent="handleSubmit">
          <div class="input-form-2">
            <input type="email" v-model="email"   placeholder="Enter Email" class="input-form-1" required="required" />
          </div>

          <div class="input-form-2">
            <input type="password" v-model="password"  placeholder="Enter Password" class="input-form-1" required="required" />
          </div>

          <div class="btn-part">
            <button class="btn" >Log in</button>
          </div>
        </form>

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
        <h1 class="form-header">Log in to Coinmama</h1>
        <p class="form-text">Not registered yet? <span @click="onPostClick">Create an account</span></p>
      </div>

      <form @submit.prevent="handleSubmit" class="form">
                <div class="input-form-2">
                  <input type="email" v-model="email"   placeholder="Enter Email" class="input-form-1" required="required" />
                </div>

                <div class="input-form-2">
                  <input type="password" v-model="password"  placeholder="Enter Password" class="input-form-1" required="required" />
                </div>

                <div class="btn-part">
                  <button class="btn" >Log in</button>
                </div>
              </form>

    </div>
  </div>

</template>

<script>
import Swal from "sweetalert2";
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import {getFirestore, collection, getDocs} from "firebase/firestore";
import {getAuth} from "firebase/auth";

export default {
  name: "LoginView",
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
      this.$router.push("/signup");
      window.scrollTo(0, 0);
    },

    onPostClick2() {
      this.$router.push("/over-view");
      window.scrollTo(0, 0);
    },
  },
  setup() {
    const email = ref('')
    const password = ref('')
    const error = ref(null)
    const store = useStore()
    const router = useRouter()
    const db = getFirestore();
    const auth = getAuth();
    const handleSubmit = async () => {
      try {
        await store.dispatch('login', {
          email: email.value,
          password: password.value
        })
        // noinspection JSUnresolvedFunction,JSCheckFunctionSignatures
        const querySnapshot = await getDocs(collection(db, auth.currentUser.email));
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
          console.log (doc.data())
        });
        await router.push('/wallets-management')
      }
      catch (err) {
        error.value = err.message
        await Swal.fire({
          icon: 'error',
          title: 'error',
          text: err.message,
        });
      }
    }
    return {
      handleSubmit, email,
      password, error,
      user: computed(() => store.state.user),
      getDocs, collection }
  },
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
  font-size: 2.8rem;
  line-height: 1;
  color: rgb(43 101 232);
  margin-top: 3%;
  margin-bottom: 0.5%;
}

.input-form-2{
  display: flex;
  justify-content: center;
  margin-top: 1.5%;
  margin-bottom: 1.5%;
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
  border: 1px solid rgb(141 142 143);
  color: #FFFFFF;
  min-width: 175px;
  font-size: 1.125rem;
  line-height: 1.75rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  border-radius: 1.5rem;
  transition: all ease-in 0.3s;
  display: block;
  margin-left: auto;
  margin-right: auto;
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

span{
  color: rgb(43 101 232);
  text-decoration: underline;
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
  .form{
    margin-left: 3%;
    margin-right: 3%;
  }
}
</style>