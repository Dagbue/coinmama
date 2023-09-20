<!--suppress ALL -->
<template>
  <div class="alpha">

    <div class="section-1">
      <div class="text-area">
        <h1 class="section-1-text-1" >Buy & Sell crypto instantly</h1>
        <p class="section-1-text-2">Join the world’s friendliest crypto exchange</p>
      </div>

      <div class="converter-alpha">

        <div class="converter">

          <div class="converter-part-1">
            <p class="converter-nav1">Buy</p>
            <p class="converter-nav2">Sell</p>
          </div>

          <div class="converter-part-2">

            <form class="form">
              <p class="label">Pay</p>
              <input type="text" id="datahere" placeholder="$ 500"/>
              <select id="selectoption">
                <option>USD</option>
                <option>one</option>
                <option>one</option>
              </select>
            </form>
            <form class="form">
              <p class="label">Get</p>
              <input type="text" id="datahere" placeholder="0.0180928"/>
              <select id="selectoption">
                <option>BTC</option>
                <option>one</option>
                <option>one</option>
              </select>
            </form>

          </div>

          <div class="converter-part-3">

            <div class="icon-part">
              <img src="https://assets.coinmama.com/icons/visa_white.svg" alt="icon" class="image-2">

              <img src="https://assets.coinmama.com/icons/mc_black.svg" alt="icon" class="image-2">

              <img src="https://assets.coinmama.com/icons/apple_pay_black.svg" alt="icon" class="image-2">

              <img src="https://assets.coinmama.com/icons/google_pay_white.svg" alt="icon" class="image-2">

              <img src="https://assets.coinmama.com/icons/Skrill.svg" alt="icon" class="image-2">

              <img src="https://assets.coinmama.com/icons/sepa_gray.svg" alt="icon" class="image-2">
            </div>

            <div class="btn-part">
              <p class="btn">Buy</p>
            </div>

          </div>

        </div>

      </div>




    </div>

    <div class="section-2">
      <img src="https://coinmama.live.strattic.io/wp-content/themes/coinmama/images/hp-top.png" alt="hero-image" class="hero-image">
    </div>
  </div>
</template>

<script>


export default {
  name: "HeroSection",

}
</script>

<style scoped>
.alpha{
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 76px;
}

.section-1{
  width: 50%;
}

.section-2{
  width: 50%;
}

.hero-image{
  width: 90%;
}

.section-1-text-1{
  font-size: 56px;
  font-weight: 400;
  color: #000;
  margin: 0;
  line-height: 1.2;
  padding-bottom: 10px;
}

.section-1-text-2{
  font-size: 34px;
  font-weight: 400;
  color: #000;
  margin: 2px 0 59px;
}

.text-area{
  text-align: left;
  margin-left: 10%;
}

select#selectoption {
  border-left: none;
  padding: none;
}

input#datahere{
  position: relative;
  border-right: none;
  padding: none;
}

.converter{
  margin-left: 10%;
  padding-left: 5%;
  padding-right: 5%;
  /*position: relative;*/
  background-color: #fff;
  width: 548px;
  float: left;
  top: 35px;
  border-radius: 22px;
  box-shadow: 0 2px 24px rgba(43,101,232,.3);
  height: 266px;
}

.converter-part-1{
  display: flex;
  align-content: center;
  align-items: center;
  padding-top: 25px;
  list-style: none;
  margin-bottom: -1px;
  cursor: pointer;
  font-size: 18px;
  border-radius: 4px 4px 0 0;
  font-weight: 400;
}

.converter-part-2{
  display: flex;
  align-content: center;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 7%;
}

.converter-part-3{
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}

.converter-nav1{

  border-bottom: solid 2px #2B65E8;
  color: #2B65E8;
  box-shadow: none!important;
  cursor: default;
  padding-bottom: 5px;
  font-weight: 700;
  margin-right: 20px;
}

.converter-nav2{
  color: #888;
}

.icon-part{
  display: flex;
  align-content: center;
  align-items: center;
}

.image-2{
  /*height: 54px;*/
  width: 40px;
  object-fit: cover;
  margin-right: 10px;
}

input{
  text-align: left;
  height: 45px;
  border-radius: 4px 0 0 4px;
  overflow: hidden;
  width: 70%;
  background-color: #F4F8FF;
  border: #D6E5FF solid 2px;
  padding-left: 10px;
}

input::placeholder{
  color: #2B65E8;
  font-size: 15px;
}

select{
  text-align: left;
  height: 45.6px;
  border-radius: 0 4px 4px 0;
  overflow: hidden;
  background-color: #F4F8FF;
  border: #D6E5FF solid 2px;
}

select::placeholder{
  color: #2B65E8;
}

.form{
  margin-right: 10%;
}

.label{
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #696A6A;
  margin: 9px 0 2px;
  text-align: left;
  margin-left: 16px!important;
  padding-bottom: 2px;
}

.btn{
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 7px 20px;
  gap: 10px;
  border-radius: 20px;
  height: 34px;
  box-shadow: none;
  position: relative;
  background-color: #2B65E8;
  font-weight: 400;
  width: 94px;
  justify-content: center;
  color: #fff;
}


@media (max-width: 1000px) {
  .alpha{
    display: block;
  }

  .section-1{
    width: 100%;
  }

  .section-2{
    width: 100%;
  }

  .hero-image{
    width: 100%;
    margin-top: 12%;
  }
}

@media (max-width: 600px) {
  .text-area{
    margin-left: 5%;
  }

  .converter{
    margin-left: 3.8%;
  }
}

@media (max-width: 450px) {
  .converter{
    margin-left: 4%;
    top: 10px;
    width: 400px;
  }

  .converter-alpha{
    display: block;
    margin-right: auto;
    margin-left: auto;
  }

  .form{
    margin-right: unset;
  }

  .section-1-text-1{
    font-size: 50px;
  }

  .section-1-text-2{
    font-size: 30px;
  }

  .image-2{
    width: 35px;
    margin-right: 7px;
  }

  input{
    height: 40px;
    width: 60%;
    padding-left: 8px;
  }
  select{
    height: 40.2px;
  }
}

@media (max-width: 425px) {
  .converter{
    margin-left: 4%;
    top: 10px;
    width: 380px;
  }

  .section-1-text-1{
    font-size: 45px;
  }

  .section-1-text-2{
    font-size: 28px;
  }

  .image-2{
    width: 32px;
    margin-right: 6px;
  }

  input{
    width: 57%;
  }
}
</style>