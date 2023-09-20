<template>
  <div class="alpha">
    <h1 class="header">Why Coinmama?</h1>
  </div>

  <div class="section-1">

    <div class="group">
      <img src="https://coinmama.live.strattic.io/wp-content/uploads/2022/09/icon-many-payment.png" alt="" class="image-2">
      <p class="group-text">Multiple methods of payment</p>
    </div>

    <div class="group">
      <img src="https://coinmama.live.strattic.io/wp-content/uploads/2022/09/icon-high-spending.png" alt="" class="image-2">
      <p class="group-text">High spending limits</p>
    </div>

    <div class="group">
      <img src="https://coinmama.live.strattic.io/wp-content/uploads/2022/09/icon-fast-track.png" alt="" class="image-2">
      <p class="group-text">Fast-track verification</p>
    </div>


  </div>

  <div class="section-1">

    <div class="group">
      <img src="https://coinmama.live.strattic.io/wp-content/uploads/2022/09/icon-favorit-coins.png" alt="" class="image-2">
      <p class="group-text">Get your favorite coins</p>
    </div>

    <div class="group">
      <img src="https://coinmama.live.strattic.io/wp-content/uploads/2022/09/icon-delivery.png" alt="" class="image-2">
      <p class="group-text">Instant delivery</p>
    </div>

    <div class="group">
      <img src="https://coinmama.live.strattic.io/wp-content/uploads/2022/09/icon-wow.png" alt="" class="image-2">
      <p class="group-text">Support that WOWs</p>
    </div>


  </div>

  <div class="section-2">
    <img src="https://coinmama.live.strattic.io/wp-content/themes/coinmama/images/hp-middle-desktop.png" alt="" class="image-3"/>
    <h3 class="section-2-text">
      Join to more than 3 million happy Coinmama customers
    </h3>
  </div>

</template>

<script>
export default {
  name: "WhyCoinmama"
}
</script>

<style scoped>
.alpha{
  padding-top: 80px;
  margin-bottom: 42px;
}

.header{
  margin-bottom: 60px;
  font-size: 60px;
  color: #003a9a;
  font-style: normal;
  font-weight: 400;
  line-height: 72px;
  text-align: center;
}

.section-1{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
}

.group{
  text-align: center;
}

.group-text{
  font-size: 22px;
  margin-bottom: 100px;
  color: grey;
  padding-top: 8px;
}

.image-2{
  width: 76px;
  height: 76px;
  object-fit: cover;
}

.section-2{
  text-align: center;
}

.section-2-text{
  color: #003a9a;
  font-style: normal;
  font-size: 40px;
  line-height: 100px;
  text-align: center;
  letter-spacing: 0.2px;
}

@media (max-width: 450px) {
  .header{
    margin-bottom: 35px;
    font-size: 42px;
    line-height: 68px;
  }

  .image-2{
    width: 56px;
    height: 56px;
  }

  .group-text{
    font-size: 18px;
    margin-bottom: 50px;
  }

  .image-3{
    width: 100%;
    margin-top: 2%;
    margin-bottom: 4%;
  }

  .section-2-text{
    font-size: 30px;
    line-height: unset;
  }
}
</style>