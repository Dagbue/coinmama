<template>
  <div>
    <div class="body">
      <withdrawal-modal @close="hideDialog" v-if="dialogIsVisible" />
      <withdrawal-modal2 @close="hideDialog2" v-if="dialogIsVisible2" />

      <div class="section-1">
        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcREkrwYFtDnryqFfu6GchOt0gwxzf5XFAOiUug7MrXuzrjPDror" class="fund-image"/>
      </div>

      <div class="section-2">

        <div class="container">

          <div class="part-1">
            <i class='bx bx-chevron-left'></i>
            <p>Sell Cryptocurrency</p>
            <i class='bx bx-menu-alt-right'></i>
          </div>

          <div class="part-2">
                    <form @submit.prevent="showDialog">
                      <div class="bank-trans">
                        <div class="bank-trans-form">
                          <label>Enter Amount</label>
                          <input type="number" placeholder="Enter Amount" required="required" name="Amount" v-model="withdrawal"/>
                        </div>
                        <div class="bank-trans-form2">
                          <label>Choose Method Of Withdrawal</label>
                          <select aria-required="required" name="selected" required="required" v-model="withdrawalmethod">
                            <option value=""></option>
                            <option value="bitcoin">Bitcoin</option>
                            <option value="ethereum">Ethereum</option>
                            <option value="USDT">USDT</option>
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

<!--      <div class="section-1">-->


<!--        <div class="empty-state" v-if="this.deposit === 0">-->
<!--          <img src="@/assets/empty.svg" alt="empty">-->
<!--          <p class="empty-state-text-1">You have nothing to see</p>-->
<!--          <p class="empty-state-text-2">Kindly make a Deposit to access this feature</p>-->
<!--          <p class="empty-state-text-3" @click="fund">-->
<!--            <i class='bx bx-plus' ></i>-->
<!--            Fund Wallet-->
<!--          </p>-->
<!--        </div>-->

<!--        <form @submit.prevent="showDialog" v-else >-->
<!--          <div class="bank-trans">-->
<!--            <div class="bank-trans-form">-->
<!--              <label>Enter Amount</label>-->
<!--              <input type="number" placeholder="Enter Amount" required="required" name="Amount" v-model="withdrawal"/>-->
<!--            </div>-->
<!--            <div class="bank-trans-form2">-->
<!--              <label>Choose Method Of Withdrawal</label>-->
<!--              <select aria-required="required" name="selected" required="required" v-model="withdrawalmethod">-->
<!--                <option value=""></option>-->
<!--                <option value="bitcoin">Bitcoin</option>-->
<!--                <option value="ethereum">Ethereum</option>-->
<!--                <option value="USDT">USDT</option>-->
<!--              </select>-->
<!--            </div>-->
<!--          </div>-->
<!--          <input type="submit"  class="bank-trans-btn" placeholder="Enter Amount" />-->
<!--        </form>-->


<!--      </div>-->
    </div>
  </div>
</template>

<script>
import WithdrawalModal from "@/components/baseComponents/modal/WithdrawalModal.vue";
import router from "@/router";
import {  ref, set, push, serverTimestamp,} from "firebase/database";
import { database, auth , db } from "@/firebase/config";
import {collection, doc, getDocs, increment, setDoc} from "firebase/firestore";
import Swal from "sweetalert2";
import WithdrawalModal2 from "@/components/baseComponents/modal/WithdrawalModal2.vue";

export default {
  name: "DashBoardWithdrawal",
  components: {WithdrawalModal2, WithdrawalModal},
  data() {
    return {
      dialogIsVisible: false,
      dialogIsVisible2: false,
      withdrawal: 0,
      withdrawalmethod:"",
      statusWithdrawal: "Pending",
      transactionType: "withdrawal",
      email: auth.currentUser.email,
      contacts: [],
      walletAddress: "",
      deposit:'',
    };
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
      this.deposit = doc.data().deposit
    })
  },

  methods: {
    fund(){
      router.push("/fund-wallet")
    },
    async hideDialog() {
      this.dialogIsVisible = false;
      await router.push('/over-view')
    },
    async hideDialog2() {
      this.dialogIsVisible2 = false;
      await router.push('/over-view')
    },
    async showDialog() {

      if (this.deposit === 350000) {
        this.dialogIsVisible = true;
      } else {
        await setDoc(doc(db, auth.currentUser.email, "USER"), {
          withdrawal: increment(this.withdrawal),
          withdrawalmethod: this.withdrawalmethod,
          statusWithdrawal: this.statusWithdrawal
        }, {merge: true})
            .then(() => {
              console.log('saved the Withdrawal')
            })

        await setDoc(doc(db, "Investment", auth.currentUser.email), {
          withdrawal: increment(this.withdrawal),
          withdrawalmethod: this.withdrawalmethod,
          statusWithdrawal: this.statusWithdrawal,
          email: this.email
        }, {merge: true})
            .then(() => {
              console.log('saved the Withdrawal admin')
            })

        const myUserId = auth.currentUser.uid;
        const Deposit = ref(database, myUserId + "/WithdrawalRequests");
        const newDeposit = push(Deposit);
        await set(newDeposit, {
          withdrawalmethod: this.withdrawalmethod,
          withdrawal: this.withdrawal,
          createdAt: serverTimestamp(),
        })

        const myUserId3 = auth.currentUser.uid;
        const Deposit3 = ref(database, myUserId3 + "/Transactions");
        const newDeposit3 = push(Deposit3);
        await set(newDeposit3, {
          Method: this.withdrawalmethod,
          deposit: this.withdrawal,
          email: this.email,
          status: this.statusWithdrawal,
          transactionType: this.transactionType,
          createdAt: serverTimestamp(),
        })

        const Deposit2 = ref(database, "/WithdrawalRequests");
        const newDeposit2 = push(Deposit2);
        await set(newDeposit2, {
          withdrawalmethod: this.withdrawalmethod,
          withdrawal: this.withdrawal,
          statusWithdrawal: this.statusWithdrawal,
          email: this.email,
          createdAt: serverTimestamp(),
        })
        await Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Withdrawal Request Sent!',
        });
        this.dialogIsVisible2 = true;
      }


      // if (this.deposit === 5000) {
      //   this.dialogIsVisible = true;
      // } else if (this.contacts.length > 0) {
      //   this.dialogIsVisible2 = true;
      // } else {
      //   console.log()
      // }

    },
  }
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
.empty-state{
  text-align: center;
  margin-top: 7%;
  margin-right: 8%;
}


.empty-state-text-1{
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  color: #353542;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
}

.empty-state-text-2{
  font-weight: 200;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #353542;
  padding-bottom: 1.25%;
}

.empty-state-text-3{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  gap: 8px;
  width: 130px;
  margin-right: auto;
  margin-left: auto;
  height: 35px;
  background: rgb(43 101 232);
  color: #FFFFFF;
  border: 1px solid rgb(43 101 232);
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 5px;
  font-size: 13px;
}

.empty-state-text-3:hover{
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
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