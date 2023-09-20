<template>
  <div>
    <div class="body">
      <h2 class="header">Wallet Information</h2>

      <div class="section-1">

        <form>
          <div class="bank-trans">
            <div class="bank-trans-header">Account Total assets</div>
            <p class="total-amount">$ {{ this.contacts.deposit + this.contacts.profits + this.contacts.bonusMain + this.contacts.bonus - this.contacts.withdrawal  }}</p>

            <div class="seprate-alpha">

              <div @click="onPostClick" class="seprate">
                <img src="https://www.coinmama.com/next/icons/buy_white.svg" alt="" />
                <p>Deposit</p>
              </div>

              <div @click="onPostClick2" class="seprate">
                <img src="https://www.coinmama.com/next/icons/sell_white.svg" alt="" />
                <p>Withdraw</p>
              </div>

              <div @click="onPostClick3" class="seprate">
                <img src="https://www.coinmama.com/next/icons/privacy_policy_white.svg" alt="" />
                <p>Personal</p>
              </div>
            </div>
          </div>

          <div class="bank-trans-2">
            <div class="bank-trans-header">Bitcoin</div>
            <div class="bank-trans-form">
              <p class="total-amount-2">$ {{ this.contacts.deposit + this.contacts.profits + this.contacts.bonusMain + this.contacts.bonus - this.contacts.withdrawal  }}</p>
            </div>
            <div class="seprate-alpha-2">

              <div class="seprate-2">
                <p>Available</p>
                <p>$ {{ this.contacts.deposit + this.contacts.profits + this.contacts.bonusMain + this.contacts.bonus - this.contacts.withdrawal  }}</p>
              </div>

              <div class="seprate-2">
                <p>Frozen</p>
                <p>0</p>
              </div>

              <div class="seprate-2">
                <p>Equivalent</p>
                <p>0</p>
              </div>
            </div>
          </div>

          <div class="bank-trans-2">
            <div class="bank-trans-header">Ethereum</div>
            <div class="bank-trans-form">
              <p class="total-amount-2">$ 0</p>
            </div>
            <div class="seprate-alpha-2">

              <div class="seprate-2">
                <p>Available</p>
                <p>0</p>
              </div>

              <div class="seprate-2">
                <p>Frozen</p>
                <p>0</p>
              </div>

              <div class="seprate-2">
                <p>Equivalent</p>
                <p>0</p>
              </div>
            </div>
          </div>

          <div class="bank-trans-2">
            <div class="bank-trans-header">USDT</div>
            <div class="bank-trans-form">
              <p class="total-amount-2">$ 0</p>
            </div>
            <div class="seprate-alpha-2">

              <div class="seprate-2">
                <p>Available</p>
                <p>0</p>
              </div>

              <div class="seprate-2">
                <p>Frozen</p>
                <p>0</p>
              </div>

              <div class="seprate-2">
                <p>Equivalent</p>
                <p>0</p>
              </div>
            </div>
          </div>


        </form>

      </div>

    </div>
  </div>
</template>

<script>
import {collection, getDocs} from "firebase/firestore";
import {auth, db} from "@/firebase/config";
export default {
  name: "DashBoardWalletsManagement",
  data () {
    return {
      contacts: "",
      approved: '',
      approved2: '',
    }
  },
  methods: {
    onPostClick() {
      this.$router.push("/fund-wallet");
      window.scrollTo(0, 0);
    },

    onPostClick2() {
      this.$router.push("/withdrawal");
      window.scrollTo(0, 0);
    },

    onPostClick3() {
      this.$router.push("/update-account");
      window.scrollTo(0, 0);
    },
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
.section-1{
  margin-top: 2%;
  margin-left: 10%;
}
.body{
  padding: 32px;
}
.header{
  font-weight: 700;
  font-size: 19px;
  line-height: 25px;
  color: rgb(43 101 232);
}

.bank-trans{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: rgb(43 101 232);
  color: #FFFFFF;
  margin-bottom: 1.7%;
  margin-right: 15%;
  margin-left: 12%;
  padding: 25px 6% 28px;
  border-radius: 5px;
}

.bank-trans-2{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: rgba(129, 138, 154, 0.5);
  color: #FFFFFF;
  margin-bottom: 1.7%;
  margin-right: 15%;
  margin-left: 12%;
  padding: 25px 6% 28px;
  border-radius: 5px;
}

.bank-trans-form{
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
}
.bank-trans-header{
  padding-bottom: 5px;
  font-size: 20px;
  font-weight: 700;
  color: #FFFFFF;
}

input{
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 10px;
  background-color: rgba(247, 247, 249, 1);
  border: none;
  border-radius: 5px;
}

label{
  padding-top: 7px;
  padding-bottom: 17px;
  font-size: 15px;
  color: rgb(43 101 232);
  font-weight: 700;
  display: none;
}

.bank-trans-btn{
  margin-bottom: 4%;
  padding: 11px 80px;
  color: white;
  background-color: rgb(43 101 232);
  border: 1px solid rgb(43 101 232);
  border-radius: 5px;
  font-size: 16px;
  display: block;
  margin-right: auto;
  margin-left: auto;
}

.bank-trans-btn:hover{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.seprate{
  display: flex;
  align-content: center;
  align-items: center;
}

.seprate p{
  padding-left: 10px;
  font-size: 18px;
}

.seprate-alpha{
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  margin-top: 2%;
}

.total-amount{
  font-size: 25px;
  padding-top: 1%;
}

.seprate-2{
  display: block;
  text-align: center;
}

.seprate-2 p{
  /*padding-left: 10px;*/
  font-size: 19px;
}

.seprate-alpha-2{
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
}

.total-amount-2{
  font-size: 25px;
  padding-top: 1%;
  color: rgb(43 101 232);
}

@media (max-width: 990px) {
  .header-alpha{
    font-size: 20px;
    margin-top: unset;
  }

  .bank-trans{
    padding: 20px 5% 35px;
    border-radius: 15px;
    margin-left: unset;
    margin-right: unset;
  }

  .bank-trans-header{
    font-size: 20px;
  }

  .bank-trans-btn{
    margin-bottom: 6%;
    padding: 14px 80px;
    font-size: 15px;
  }
}


@media (max-width: 500px) {
  .section-1{
    margin-top: 3%;
    margin-left: unset;
  }

  .bank-trans{
    margin-right: unset;
    margin-left: unset;
    padding: 27px 7% 27px;
  }

  .bank-trans-2{
    margin-right: 1%;
    margin-left: 1%;
  }

  .header{
    font-size: 21px;
  }

  .seprate p{
    padding-left: 8px;
    font-size: 16px;
  }

  .seprate-2 p{
    /*padding-left: 10px;*/
    font-size: 17px;
  }

  .bank-trans-header{
    padding-bottom: 7px;
    font-size: 19px;
  }
}

</style>