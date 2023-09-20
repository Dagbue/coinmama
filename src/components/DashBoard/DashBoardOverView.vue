<template>
  <div class="alpha">


    <div class="section-1">

      <img src="https://www.coinmama.com/next/myaccount.svg" alt="" class="account-image" />

    </div>

    <div class="section-2">

      <h1 class="form-header">Welcome!</h1>
      <p class="form-text">Buy & sell crypto instantly</p>


        <div class="btn-part">
          <button class="btn" @click="onPostClick" >Buy</button>
          <button class="btn" @click="onPostClick2" >Sell</button>
        </div>

      <p class="form-text-2">Your Choice, Your Payment</p>

      <p class="form-text-3">Click your currency on the next screen to explore our payment options!</p>


    </div>


  </div>
</template>

<script>
export default {
  name: "DashBoardOverView",
  data () {
    return {
    }
  },

  methods: {
    onPostClick() {
      this.$router.push("/fund-wallet");
    },
    onPostClick2() {
      this.$router.push("/withdrawal");
    },
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-left: 2%;
}


.section-2{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 58%;
}

.form-header{
  margin-top: 3%;
  --tw-text-opacity: 1;
  color: rgb(0 0 113/var(--tw-text-opacity));
  font-size: 3.75rem;
  line-height: 1;
  margin-bottom: 0.5rem;
}




.btn-part{
  display: flex;
}

.btn{
  background-color: rgb(43 101 232);
  border: 1px solid rgb(43 101 232);
  color: #FFFFFF;
  min-width: 195px;
  font-size: 1.125rem;
  line-height: 1.75rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  border-radius: 1.5rem;
  transition: all ease-in 0.3s;
  display: block;
  margin-left: 10px;
  margin-right: 10px;
}

.btn:hover{
  --tw-text-opacity: 1;
  background-color: rgb(0 0 113/var(--tw-text-opacity));
}

.form-text{
  --tw-text-opacity: 1;
  color: rgb(0 0 113/var(--tw-text-opacity));
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 1.5rem;
}

.form-text-2{
  --tw-text-opacity: 1;
  color: rgb(43 101 232/var(--tw-text-opacity));
  font-weight: 500;
  font-size: 1.875rem;
  line-height: 2.25rem;
  margin-bottom: 0.5rem;
  padding-top: 15px;
}

.form-text-3{
  --tw-text-opacity: 1;
  color: rgb(0 0 113/var(--tw-text-opacity));
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 1.5rem;
  width: 65%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

span{
  color: rgb(43 101 232);
  text-decoration: underline;
}

@media (max-width: 1000px) {
  .alpha{
    display: flex;
    flex-direction: column-reverse;
  }

  .section-1{
    width: 100%;
    height: unset;
    padding-left: unset;
  }


  .section-2{
    width: 100%;
    margin-top: 7%;
  }

  .account-image{
    width: 100%;
  }

  .btn{
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    padding-left: unset;
    padding-right: unset;
    min-width: 170px;
  }

  .form-header{
    font-size: 3.2rem;
  }

  .form-text-3{
    width: 85%;
  }

}
</style>