<template>
  <section class="home-section">
    <div class="home-content">
      <div class="section-1">
        <div>
          <img src="https://www.coinmama.com/next/coinmama.svg" alt="logo" />
        </div>
        <div class="help">
          <p>Need help</p>
          <img src="https://www.coinmama.com/next/icons/question_mark.svg" alt="info" class="info-icon">
        </div>
<!--        <img src="@/assets/log-out.svg" alt="Notification" @click="handleClick" />&nbsp;&nbsp;-->
<!--        <img src="@/assets/Notification.svg" alt="Notification"/>-->
<!--        <div class="vl"></div>-->
<!--        <img src="@/assets/Avatar.svg" alt="logo" />-->
<!--        <p class="profile-name">{{this.contacts.firstName}} {{this.contacts.lastName}}</p>-->
      </div>
      <slot>
      </slot>
    </div>
  </section>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";
import {collection, getDocs} from "firebase/firestore";
import {auth, db} from "@/firebase/config";
import router from "@/router";
export default {
  name: "DashContent",
  data () {
    return {
      contacts: "",
      approved: '',
      approved2: '',
    }
  },

  methods: {
    onPostClick() {
      this.$router.push("/login");
      window.scrollTo(0, 0);
    },
  },

  setup() {
    const store = useStore()

    const handleClick = async () => {
      await store.dispatch('logout')
    }
    router.push('/dashboard-side-bar')

    return {
      handleClick,
      user: computed(() => store.state.user),
      authIsReady: computed(() => store.state.authIsReady)}
  },

  async created() {

    const querySnapshot = await getDocs(collection(db, auth.currentUser.email,));
    querySnapshot.forEach((doc) => {
      let data = {
        'id': doc.id,
        'deposit': doc.data().deposit,
        'bonus': doc.data().bonus,
        'bonusMain': doc.data().bonusMain,
        'withdrawal': doc.data().withdrawal,
        'profits': doc.data().profits,
        'selected': doc.data().selected,
        'ROI': doc.data().ROI,
        'plan': doc.data().plan,
        'firstName': doc.data().firstName,
        'lastName': doc.data().lastName,
        'statusDeposit': doc.data().statusDeposit,
        'statusWithdrawal': doc.data().withdrawal,
      }
      this.contacts  = data
      this.approved = doc.data().statusDeposit
      this.approved2 = doc.data().statusWithdrawal
    })


  },
}
</script>

<style scoped>

.home-content{
  position: fixed;
  /*left: 225px;*/
  background-image: linear-gradient(
      0deg,
      hsl(218deg 100% 92%) 0%,
      hsl(217deg 100% 94%) 10%,
      hsl(218deg 100% 95%) 20%,
      hsl(217deg 100% 97%) 30%,
      hsl(218deg 100% 98%) 40%,
      hsl(0deg 0% 100%) 50%,
      hsl(0deg 0% 100%) 60%,
      hsl(0deg 0% 100%) 70%,
      hsl(0deg 0% 100%) 80%,
      hsl(0deg 0% 100%) 90%,
      hsl(0deg 0% 100%) 100%
  );
  /*width: calc(100% - 215px);*/
  width: 100%;
  height: 100vh;
  transition: all 0.5s ease;
  padding: 0 10px;
  cursor: pointer;
  overflow-y: scroll;
}
.section-1{
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding-right: 6%;
  padding-top: 40px;
  /*background-color: #FFFFFF;*/
  height: 5vh;
}


.help{
  display: flex;
  align-content: center;
  align-items: center;
}

.help p {
  margin-right: 13px;
  text-decoration: underline;
  --tw-text-opacity: 1;
  color: rgb(0 0 113/var(--tw-text-opacity));
  font-size: 17px;
}

.info-icon{
  width: 1.25rem;
  height: 1.25rem;
}

@media (max-width: 990px) {
  .home-content{
    position: fixed;
    left: unset;
    width: 100%;
    height: 100%;
    margin: unset;
    padding-left: 12px;
    padding-right: 20px;
    overflow-y: scroll;
  }
}

@media (max-width: 500px) {
  .section-1{
    padding-right: 13.5%;
    padding-top: 11px;
  }
}

</style>

