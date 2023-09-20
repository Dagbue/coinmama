<template>
  <div class="alpha">

    <div class="section">
      <h1 class="section-header">Start with as little as $50</h1>
      <p class="section-para">Pay by credit card, debit card, or bank transfer</p>
      <p class="section-btn" @click="onPostClick">Get Stated</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "StartWith",
  methods: {
    onPostClick() {
      this.$router.push("/login");
      window.scrollTo(0, 0);
    },
  }
}
</script>

<style scoped>
.alpha{
  margin-top: 4%;
}
.section{
  background: #0b64e3;
  color: #fff;
  padding: 72px 0;
  text-align: center;
}

.section-header{
  font-weight: 700;
  font-size: 50px;
  margin: 0;
}

.section-para{
  font-size: 30px;
  margin: 0;
  font-weight: 400;
  line-height: 1.3;
  margin-bottom: 40px;
}

.section-btn{
  display: inline-block;
  font-size: 20px;
  color: #0b64e3;
  text-decoration: none;
  background: #fff;
  border-radius: 25px;
  padding: 9px 20.2px;
  font-weight: 400;
}

@media (max-width: 500px){
  .section-header{
    font-size: 35px;
  }

  .section-para{
    font-size: 23px;
    margin-top: 20px;
  }

  .section-btn{
    font-size: 18px;
  }
}
</style>