<template>
  <div>
    <div class="backdrop"></div>
    <dialog open>
      <div class="alpha">

        <div class="first-part">
          <img src="@/assets/fund-wallet-icon.svg" alt="fund-wallet-icon"/>
          <i class='bx bx-x' @click="$emit('close')"></i>
        </div>

        <div class="second-part">
          <p class="text-1">Withdrawal</p>
          <p class="text-2">{{contacts2.text1}}</p>
          <p class="text-2">{{contacts2.text2}}</p>
          <p class="text-3">Kindly Note:For Faster Response contact support at <span>  <a href="mailto:support@cooinmama.com" class="para-last">support@cooinmama.com</a></span></p>
        </div>


        <br/>
        <button @click="createTest">Add Deposit</button>

      </div>

    </dialog>
  </div>
</template>

<script>



import router from "@/router";
import {collection, getDocs} from "firebase/firestore";
import {db} from "@/firebase/config";

export default {
  name: "WithdrawalModal",
  emits: ['close'],
  data() {
    return {
      contacts2: [],
    };
  },
  methods:{
    async createTest() {
      await this.$emit('close')
      await router.push("/fund-wallet")
    },
  },
  async created() {
    const querySnapshot = await getDocs(collection(db, 'WithdrawModals',));
    querySnapshot.forEach((doc) => {
      let data = {
        'text1': doc.data().text1,
        'text2': doc.data().text2,
      }
      this.contacts2 = data
    })
  },
}
</script>
<style scoped >

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
}


dialog {
  position: fixed;
  top: 18vh;
  width: 32rem;
  height: 20rem;
  left: calc(50% - 9rem);
  margin: 0;
  background-color: transparent;
  z-index: 100;
  border: none;
  animation: modal 0.3s ease-out forwards;
}

.alpha{
  position: relative;
  display: block;
  overflow: hidden;
  width: 400px;
  height: 425px;
  /*height: auto;*/
  padding: 24px;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(3, 28, 67, 0.1);
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 34px 0 rgba(3, 28, 67, 0.13);
}

.first-part{
  display: flex;
  justify-content: space-between;
}

.bx-x{
  font-size: 25px;
  padding-top: 2px;
}

.text-1{
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #101828;
  padding-top: 2.5%;
  padding-bottom: 1%;
}

.text-2{
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #1D2939;
  padding-top: 1%;
  padding-bottom: 2%;
}

.text-3{
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #D23535;
  padding-top: 1.5%;
  padding-bottom: 2%;
}

.text-4, .text-5, .text-6{
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #667085;
  padding-top: 1.5%;
  padding-bottom: 1.5%;
}

button{
  padding: 8px 55px;
  color: white;
  background-color: rgb(43 101 232);
  border: 1px solid rgb(43 101 232);
  border-radius: 5px;
  font-size: 13px;
  text-decoration: none;
  /*display: block;*/
  /*margin-left: auto;*/
  /*margin-right: auto;*/
}
button:hover{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.para-last{
  color: rgb(43 101 232);
}
@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
@media (max-width: 500px) {
  dialog {
    top: 15vh;
    width: 27rem;
    height: 20rem;
    left: calc(50% - 12.2rem);
    right: 30px;
  }
  .alpha{
    width: 385px;
  }
  h3{
    font-size: 20px;
  }
  p{
    font-size: unset;
  }
}
</style>