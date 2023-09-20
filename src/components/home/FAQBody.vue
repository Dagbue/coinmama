<template>
  <div>

    <section>
      <h1 class="header">Have any questions?</h1>

      <details>
        <summary>
          <i class='bx bx-plus-circle'></i>
          How long does it take Coinmama to send my bitcoins once I’ve paid?
        </summary>
        <p>
          Coinmama sends your crypto within minutes after both your payment and wallet address have been confirmed.
        </p>
      </details>

      <details>
        <summary>
          <i class='bx bx-plus-circle'></i>
          What fiat currencies does Coinmama accept?
        </summary>
        <p>
          Coinmama accepts all fiat currencies, and our rate can be displayed in either USD, EUR, GBP, CAD, or AUD.
        </p>
      </details>

      <details>
        <summary>
          <i class='bx bx-plus-circle'></i>
          Does Coinmama facilitate trades between buyers and sellers?
        </summary>
        <p>
          No. Coinmama sells crypto out of its own inventory. The transaction will always be between you and Coinmama.
        </p>
      </details>

      <details>
        <summary>
          <i class='bx bx-plus-circle'></i>
          Where is Coinmama registered?
        </summary>
        <p>
          Coinmama's platform is operated by Cmama Ltd., established and registered in Ireland.
        </p>
      </details>

      <details>
        <summary>
          <i class='bx bx-plus-circle'></i>
          Do you offer your services internationally?
        </summary>
        <p>
          Yes. Coinmama is available in more than 200 countries around the world, except for a few restricted areas.
        </p>
      </details>

      <details>
        <summary>
          <i class='bx bx-plus-circle'></i>
          Are my credit/debit card details saved in your system?
        </summary>
        <p>
          No, your credit/debit card details are not saved in our system.
        </p>
      </details>

      <details class="last-details">
        <summary>
          <i class='bx bx-plus-circle'></i>
          Why must I provide my personal details?
        </summary>
        <p>
          As a Financial Services Business, Coinmama is required to collect certain details about its clients.
          In addition, this helps us fight fraud and keep your account safe.
        </p>
      </details>

      <p class="para-last">Have more questions? Visit our FAQ</p>

    </section>

  </div>
</template>

<script>
export default {
  name: "FAQBody",
};
</script>

<style scoped>
section {
  width: 75%;
  margin: auto;
}

/*details[open] summary ~ * {*/
/*  animation: open 0.4s ease-in;*/
/*}*/

@keyframes open {
  0% {
    transform: translateY(-60px);
    opacity: 0;
  }
  50% {
    transform: translateY(0);
    opacity: 1;
  }
  60% {
    transform: translateX(10px);
  }
  70% {
    transform: translateX(-10px);
  }
  80% {
    transform: translateX(5px);
  }
  90% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
details summary::-webkit-details-marker {
  display: none;
}

details summary {
  width: 100%;
  position: relative;
  cursor: pointer;
  font-size: 20px;
  font-weight: 300;
  list-style: none;
  padding-top: 6px;
  padding-bottom: 6px;
  display: flex;
  align-items: center;
  align-content: center;
  color: #696a6a;
}

/*details summary:after {*/
/*  content: "+";*/
/*  color: black;*/
/*  position: absolute;*/
/*  font-size: 1.75rem;*/
/*  line-height: 0;*/
/*  margin-top: 0.75rem;*/
/*  right: 0;*/
/*  font-weight: bold;*/
/*  transform-origin: center;*/
/*  transition: 200ms linear;*/
/*}*/
/*details[open] summary:after {*/
/*  transform: rotate(45deg);*/
/*  font-size: 3rem;*/
/*}*/


details summary {
  outline: 0;
}
details p {
  margin: 0 0 1rem;
  padding-top: 1rem;
  font-size: 20px;
  color: #696a6a;
}

details {
  position: relative;
  padding: 20px;
  border-top: 1px solid #dbdbdb;
  color: #696a6a;
}

.last-details{
  border-bottom: 1px solid #dbdbdb;
}

.header{
  color: #003a9a;
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 72px;
  margin-top: 5%;
  margin-bottom: 2%;
}

.bx-plus-circle{
  color: #003a9a;
  font-size: 30px;
  padding-right: 10px;
}

.para-last{
  color: #003a9a;
  font-size: 20px;
  padding-left: 25px;
  padding-top: 15px;
}

@media (max-width: 500px){
  .details summary {
    font-size: 20px;
  }
  details p {
    font-size: 16px;
    margin: 0 0 1rem;
    padding-top: 1rem;
  }
  summary{
    font-size: 20px;
  }
  section {
    width: 82%;
  }

  .header{
    font-size: 35px;
    text-align: center;
  }
}

</style>
