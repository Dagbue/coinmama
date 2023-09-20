<template>
  <div>
    <img src="https://www.coinmama.com/next/coinmama.svg" alt="logo" class="logo"/>
    <div class="alpha">


      <div class="image">
        <img src="https://www.coinmama.com/next/verify.svg" alt="verify" >
      </div>

      <div class="text-area">
<!--        <p>The code was sent to <span> dagbuelawrence@yopmail.com</span></p>-->
        <p>The code was sent to your Email</p>
        <h1>Enter the code</h1>
      </div>

      <div class="form-alpha">
        <form @submit.prevent="">

          <div class="pin-code" ref="pinContainer">
            <input type="number" autofocus v-model="pins[0]" maxlength="1" @keyup="handleKeyUp($event, 0)" @keydown="handleKeyDown($event, 0)" required="required">
            <input type="number" v-model="pins[1]" maxlength="1" @keyup="handleKeyUp($event, 1)" @keydown="handleKeyDown($event, 1)" required="required">
            <input type="number" v-model="pins[2]" maxlength="1" @keyup="handleKeyUp($event, 2)" @keydown="handleKeyDown($event, 2)" required="required">
            <input type="number" v-model="pins[3]" maxlength="1" @keyup="handleKeyUp($event, 3)" @keydown="handleKeyDown($event, 3)" required="required">
            <input type="number" v-model="pins[4]" maxlength="1" @keyup="handleKeyUp($event, 2)" @keydown="handleKeyDown($event, 4)" required="required">
            <input type="number" v-model="pins[5]" maxlength="1" @keyup="handleKeyUp($event, 3)" @keydown="handleKeyDown($event, 5)" required="required">
          </div>

          <div class="submit">
            <!--          <input type="submit" class="submit-btn"   value="Verify email"/>-->
            <!--          <base-button >Verify email</base-button>-->

          </div>

        </form>
      </div>

      <div class="last-text">
        <p><span>Resend code</span></p>
      </div>

      <div class="btn-part">
        <p class="btn" @click="onPostClick2">Next</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "VerifyView",
  data() {
    return {
      pins: [],
    };
  },
  methods: {
    handleKeyUp(event) {
      const target = event.target;

      const maxLength = parseInt(target.attributes.maxlength.value, 10);
      const myLength = target.value.length;

      if (myLength >= maxLength) {
        const next = target.nextElementSibling;
        if (next && next.tagName.toLowerCase() === 'input') {
          next.focus();
        }
      }

      if (myLength === 0) {
        const prev = target.previousElementSibling;
        if (prev && prev.tagName.toLowerCase() === 'input') {
          prev.focus();
        }
      }

      this.$emit('input', this.pins.join(''));
    },
    handleKeyDown(event) {
      const target = event.target;
      target.value = '';
    },

    onPostClick2() {
      this.$router.push("/over-view");
      window.scrollTo(0, 0);
    },
  },
}
</script>

<style scoped>
.alpha{
  margin-top: 6%;
}

.logo{
  margin-top: 1%;
  margin-left: 1%;
}


.text-area h1{
  padding-bottom: 0;
  margin-bottom: 0;
  text-align: center;
  letter-spacing: 0.5px;
  --tw-text-opacity: 1;
  color: rgb(43 101 232/var(--tw-text-opacity));
  font-size: 3rem;
  line-height: 1;
  font-weight: 600;
}

.text-area p{
  padding-top: 2px;
  margin-top: 2px;
  text-align: center;
  letter-spacing: 0.5px;
  color: #667085;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  width: 20%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.text-area p span{
  --tw-text-opacity: 1;
  color: rgb(43 101 232/var(--tw-text-opacity));
}

.text-area{
  margin-bottom: 1%;
}


.image{
  display: flex;
  justify-content: center;
  margin: 0.8%;
}

.submit{
  margin-left: 38%;
  margin-right: 38%;
}


.last-text{
  margin-top: 1.5%;
  text-align: center;
  color: #667085;
}

span{
  --tw-text-opacity: 1;
  color: rgb(43 101 232/var(--tw-text-opacity));
}

.pin-code{
  padding: 0;
  display: flex;
  justify-content:space-evenly;
  margin-bottom: 2%;
  margin-top: 2%;
  margin-left: 38%;
  margin-right: 38%;
}

.pin-code input {
  border: 1px solid #D0D5DD;
  text-align: center;
  width: 48px;
  height:70px;
  font-size: 36px;
  background-color: #FFFFFF;
  margin-right: 16px;
  border-radius: 12px;
  --tw-text-opacity: 1;
  color: rgb(43 101 232/var(--tw-text-opacity));
}



.pin-code input:focus {
  border: 0.5px solid rgb(43 101 232/var(--tw-text-opacity));
  outline:none;
  --tw-text-opacity: 1;
  color: rgb(43 101 232/var(--tw-text-opacity));
}


input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
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
  margin-top: 2%;
  margin-right: 45%;
  margin-left: 43.5%;
}

</style>