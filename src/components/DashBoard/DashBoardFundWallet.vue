<template>
  <div>
    <div class="body">
      <fund-wallet-modal @close="hideDialog" v-if="dialogIsVisible" :selected-item="selectedItem" />
      <fund-wallet-modal2 @close="hideDialog3" v-if="dialogIsVisible3" :selected-item="selectedItem"/>

      <div class="section-1">
        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcREkrwYFtDnryqFfu6GchOt0gwxzf5XFAOiUug7MrXuzrjPDror" class="fund-image"/>
      </div>

      <div class="section-2">

        <div class="container">

          <div class="part-1">
            <i class='bx bx-chevron-left'></i>
            <p>Buy Cryptocurrency</p>
            <i class='bx bx-menu-alt-right'></i>
          </div>

          <div class="part-2">
            <form @submit.prevent="showDialog" ref="form">
              <div class="bank-trans">
                <div class="bank-trans-form">
                  <label>Enter Amount</label>
                  <input type="number" placeholder="Enter Amount" required="required" name="Amount" v-model="deposit"/>
                </div>
                <div class="bank-trans-form2">
                  <label>Choose Method Of Deposit</label>
                  <select aria-required="required" name="selected" required="required" v-model="depositMethod">
                    <option value=""></option>
                    <option value="bitcoin">Bitcoin</option>
<!--                    <option value="ethereum">Ethereum</option>-->
<!--                    <option value="USDT">USDT</option>-->
                  </select>
                </div>
              </div>
              <br/>
              <br/>
              <input type="submit"  class="bank-trans-btn" placeholder="Enter Amount" />
            </form>
            <br/>
            <div class="icon-part">
              <img src="https://assets.coinmama.com/icons/visa_white.svg" alt="icon" class="image-2">

              <img src="https://assets.coinmama.com/icons/mc_black.svg" alt="icon" class="image-2">

              <img src="https://assets.coinmama.com/icons/apple_pay_black.svg" alt="icon" class="image-2">

              <img src="https://assets.coinmama.com/icons/google_pay_white.svg" alt="icon" class="image-2">

              <img src="https://assets.coinmama.com/icons/Skrill.svg" alt="icon" class="image-2">

              <img src="https://assets.coinmama.com/icons/sepa_gray.svg" alt="icon" class="image-2">
            </div>
          </div>

        </div>

      </div>


    </div>
  </div>
</template>

<script>
import FundWalletModal from "@/components/baseComponents/modal/FundWalletModal.vue";
import {  ref, set, push, serverTimestamp } from "firebase/database";
import {database, auth ,db} from "@/firebase/config";
import {doc, setDoc, increment, getDocs, collection} from "firebase/firestore";
import Swal from "sweetalert2";
import router from "@/router";
import FundWalletModal2 from "@/components/baseComponents/modal/FundWalletModal2.vue";

export default {
  name: "DashBoardFundWallet",
  components: {FundWalletModal2, FundWalletModal},
  data() {
    return {
      dialogIsVisible: false,
      // dialogIsVisible2: false,
      dialogIsVisible3: false,
      deposit: 0,
      withdrawal : 0,
      bonus : 0,
      bonusMain : 0,
      profits : 0,
      depositMethod: "",
      selected: "",
      contacts: [],
      deposit2:'',
      email: auth.currentUser.email,
      statusDeposit: "Pending",
      transactionType: "deposit",
      selectedItem: null,
      options: [
        { id: 1, label: "STANDARD", value1: "STANDARD", value2: "10%" },
        { id: 2, label: "PREMIUM", value1: "PREMIUM", value2: "30%" },
        { id: 3, label: "DELUXE", value1: "DELUXE", value2: "50%" },
      ],
    };
  },
  methods: {
    async hideDialog() {
      this.dialogIsVisible = false;
      await router.push('/over-view')
    },
    async hideDialog2() {
      this.dialogIsVisible2 = false;
      await router.push('/over-view')
    },
    async hideDialog3() {
      this.dialogIsVisible3 = false;
      await router.push('/over-view')
    },


    async showDialog() {

      if (this.deposit2 === 350000) {
        this.dialogIsVisible3 = true;
        this.selectedItem = this.depositMethod;
      } else {
        await setDoc(doc(db, auth.currentUser.email, "USER"), {
          deposit: increment(this.deposit),
          depositMethod: this.depositMethod,
          statusDeposit: this.statusDeposit,
          // selected: this.selected.value1,
          // ROI: this.selected.value2,
        }, {merge: true})
            .then(() => {
              console.log('saved the deposit')
            })

        await setDoc(doc(db, "Investment", auth.currentUser.email), {
          deposit: increment(this.deposit),
          depositMethod: this.depositMethod,
          statusDeposit: this.statusDeposit,
          withdrawal: this.withdrawal,
          bonus: this.bonus,
          bonusMain: this.bonusMain,
          profits: this.profits,
          email: this.email,
          // selected: this.selected.value1,
          // ROI: this.selected.value2,
        }, {merge: true})
            .then(() => {
              console.log('saved the deposit admin')
            })

        const myUserId = auth.currentUser.uid;
        const Deposit = ref(database, myUserId + "/DepositRequests");
        const newDeposit = push(Deposit);
        await set(newDeposit, {
          depositMethod: this.depositMethod,
          deposit: this.deposit,
          createdAt: serverTimestamp(),
        })

        const myUserId3 = auth.currentUser.uid;
        const Deposit3 = ref(database, myUserId3 + "/Transactions");
        const newDeposit3 = push(Deposit3);
        await set(newDeposit3, {
          Method: this.depositMethod,
          deposit: this.deposit,
          email: this.email,
          status: this.statusDeposit,
          transactionType: this.transactionType,
          createdAt: serverTimestamp(),
        })

        const Deposit2 = ref(database, "/DepositRequests");
        const newDeposit2 = push(Deposit2);
        await set(newDeposit2, {
          depositMethod: this.depositMethod,
          deposit: this.deposit,
          email: this.email,
          statusDeposit: this.statusDeposit,
          createdAt: serverTimestamp(),
        })
        await Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Deposit Request Sent!',
        });
        this.selectedItem = this.depositMethod;
        this.dialogIsVisible = true;
      }


      // if (this.deposit === 5000) {
      //   this.dialogIsVisible = true;
      // } else if (this.contacts.length > 0) {
      //   this.dialogIsVisible2 = true;
      // } else {
      //   console.log()
      // }

    },



  },
  async created() {
    const querySnapshot = await getDocs(collection(db, auth.currentUser.email,));
    querySnapshot.forEach((doc) => {
      let data = {
        'bitcoinAddress': doc.data().bitcoinAddress,
        'litcoinAddress': doc.data().litcoinAddress,
        'ethereumAddress': doc.data().ethereumAddress,
      }
      this.contacts.push(data)
    })

    const querySnapshot2 = await getDocs(collection(db ,auth.currentUser.email,));
    querySnapshot2.forEach((doc) => {
      this.deposit2 = doc.data().deposit
    })
  },
}
</script>

<style scoped>
.body{
  padding: 32px;
  display: flex;
}

.section-1{
  width: 50%;
}

.section-2{
  width: 50%;
}

.bank-trans{
  /*box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);*/
  /*background-color: rgba(129, 138, 154, 0.5);*/
  /*color: #FFFFFF;*/
  /*margin-bottom: 1.7%;*/
  /*margin-right: 15%;*/
  /*margin-left: 12%;*/
  /*padding: 25px 6% 60px;*/
  /*border-radius: 5px;*/
}

.bank-trans-form{
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
}
.bank-trans-form2 {
  display: flex;
  flex-direction: column;
  padding-top: 30px;
}
input{
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 10px;
  background-color: rgba(247, 247, 249, 1);
  border: none;
  color: rgb(43 101 232);
  border-radius: 5px;
  font-size: 15px;
}
select{
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: rgba(247, 247, 249, 1);
  border: none;
  border-radius: 5px;
  color: rgb(43 101 232);
}
option{
  font-size: 18px;
  font-weight: bold;
  line-height: 1;
  color: rgb(43 101 232);
}
label{
  padding-top: 2px;
  padding-bottom: 12px;
  font-size: 16px;
  color: rgb(43 101 232);
  font-weight: 700;
}

.bank-trans-btn{
  padding: 11px 65px;
  color: white;
  background-color: rgb(43 101 232);
  border: 1px solid rgb(43 101 232);
  border-radius: 5px;
  font-size: 17px;
  text-decoration: none;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.bank-trans-btn:hover{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.part-1{
  display: flex;
  justify-content: space-between;
  color: rgb(43 101 232);
  font-size: 25px;
  padding-bottom: 5%;
}

.icon-part{
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
}

.image-2{
  /*height: 54px;*/
  width: 40px;
  object-fit: cover;
  margin-right: 10px;
}

.container{
  background-color: #fff;
  padding: 45px 40px;
  /*width: 548px;*/
  border-radius: 22px;
  box-shadow: 0 2px 24px rgba(43,101,232,.3);
  /*height: 266px;*/
  margin-right: 10%;
  margin-top: 8%;
}

.fund-image{
  width: 50%;
  margin-left: 15%;
  margin-top: 18%;
  box-shadow: 0 0 1px rgba(43,101,232,.2);
}

@media (max-width: 550px) {
  .body{
    display: flex;
    flex-direction: column-reverse;
  }

  .section-1{
    width: 100%;
  }

  .section-2{
    width: 100%;
  }

  .container{
    border-radius: 20px;
    margin-right: unset;
  }

  .part-1{
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    font-size: 20px;
  }

  .fund-image{
    width: 90%;
    margin-left: 5%;
    margin-top: 16%;
  }
}
</style>