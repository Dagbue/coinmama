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
          <p class="text-1">Deposit</p>
          <p class="text-2">{{contacts2.text1}}</p>
          <p class="text-2">{{contacts2.text2}}</p>
          <p class="text-2">Kindly make a deposit  to the wallet Address below</p>
          <p class="text-3">{{contacts2.text3}}</p>
          <br/>
          <div v-if="this.selectedItem === 'bitcoin' ">
            <p class="text-4">Wallet Name: {{selectedItem}}</p>
            <p class="text-5">Wallet Address: bc1q47cvp688vwrregzamkgmfdjmctqeq0e30c4u34</p>
            <img src="@/assets/bitcoin.jpeg" alt="barcode" class="barcode"/>
          </div>

<!--          <div v-if="this.selectedItem === 'Ethereum' ">-->
<!--            <p class="text-4">Wallet Name: {{selectedItem}}</p>-->
<!--            <p class="text-5">Wallet Address: 0x8ca10304c0E398Cb4ecc52053120Dd28258A1c61</p>-->
<!--          </div>-->

        </div>


        <br/>
        <button @click="copyToClipboard('bc1q47cvp688vwrregzamkgmfdjmctqeq0e30c4u34')">Copy</button>

      </div>

    </dialog>
  </div>
</template>

<script>
import {  ref, set, push, serverTimestamp } from "firebase/database";
import {database, auth ,db} from "@/firebase/config";
import {doc, setDoc, increment, getDocs, collection} from "firebase/firestore";
import Swal from "sweetalert2";
export default {
  name: "FundWalletModal2",
  emits: ['close'],
  props: {
    selectedItem: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      dialogIsVisible: false,
      dialogIsVisible2: false,
      dialogIsVisible3: false,
      deposit: 0,
      withdrawal : 0,
      bonus : 0,
      bonusMain : 0,
      profits : 0,
      depositMethod: "",
      selected: "",
      contacts: [],
      contacts2: [],
      deposit2:'',
      email: auth.currentUser.email,
      statusDeposit: "Pending",
      transactionType: "deposit",
    };
  },
  methods: {
    async showDialog3() {
      // noinspection JSUnresolvedFunction,JSCheckFunctionSignatures
      await setDoc(doc(db, auth.currentUser.email, "USER"), {
        deposit: increment(this.deposit),
        depositMethod: this.selectedItem,
        statusDeposit: this.statusDeposit,
        selected: this.selected.value1,
        ROI: this.selected.value2,
      }, {merge: true})
          .then(() => {
            console.log('saved the deposit')
          })

      await setDoc(doc(db, "Investment", auth.currentUser.email), {
        deposit: increment(this.deposit),
        depositMethod: this.selectedItem,
        statusDeposit: this.statusDeposit,
        withdrawal: this.withdrawal,
        bonus: this.bonus,
        bonusMain: this.bonusMain,
        profits: this.profits,
        email: this.email,
        selected: this.selected.value1,
        ROI: this.selected.value2,
      }, {merge: true})
          .then(() => {
            console.log('saved the deposit admin')
          })

      const myUserId = auth.currentUser.uid;
      const Deposit = ref(database, myUserId + "/DepositRequests");
      const newDeposit = push(Deposit);
      await set(newDeposit, {
        depositMethod: this.selectedItem,
        deposit: this.deposit,
        createdAt: serverTimestamp(),
      })

      const myUserId3 = auth.currentUser.uid;
      const Deposit3 = ref(database, myUserId3 + "/Transactions");
      const newDeposit3 = push(Deposit3);
      await set(newDeposit3, {
        Method: this.selectedItem,
        deposit: this.deposit,
        email: this.email,
        status: this.statusDeposit,
        transactionType: this.transactionType,
        createdAt: serverTimestamp(),
      })

      const Deposit2 = ref(database, "/DepositRequests");
      const newDeposit2 = push(Deposit2);
      await set(newDeposit2, {
        depositMethod: this.selectedItem,
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
    },

    copyToClipboard(content) {
      const textarea = document.createElement('textarea')
      textarea.value = content
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Copied to Clipboard',
      });
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

    const querySnapshot3 = await getDocs(collection(db, 'FundWalletModals',));
    querySnapshot3.forEach((doc) => {
      let data = {
        'text1': doc.data().text1,
        'text2': doc.data().text2,
        'text3': doc.data().text3,
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
  top: 5vh;
  width: 32rem;
  height: 20rem;
  left: calc(50% - 15rem);
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
  width: 460px;
  height: 730px;
  /*height: auto;*/
  padding: 24px;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(3, 28, 67, 0.1);
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 34px 0 rgba(3, 28, 67, 0.13);
  overflow-y: scroll;
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
  font-size: 14.5px;
  line-height: 20px;
  color: #667085;
  padding-top: 1.2%;
  padding-bottom: 1.2%;
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

.bank-trans-form{
  display: flex;
  flex-direction: column;
}

input{
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 10px;
  background-color: rgba(247, 247, 249, 1);
  border: none;
  border-radius: 5px;
  font-size: 15px;
}

.barcode{
  margin-top: 3%;
  width: 40%;
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
    top: 4vh;
    width: 27rem;
    height: 20rem;
    left: calc(50% - 12rem);
    right: 30px;
  }
  .alpha{
    width: 375px;
    height: 730px;
  }
  h3{
    font-size: 20px;
  }
  p{
    font-size: unset;
  }
  .text-5{
    font-size: 15px;
  }
}
</style>