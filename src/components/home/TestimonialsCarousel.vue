<template>
  <div class="law">
    <div class="alpha">
      <i class='bx bx-chevron-left' @click="prev"></i>
      <div class="carousel">
        <div class="inner" ref="inner" :style="innerStyles">
          <div class="card" v-for="card in testimonials" :key="card">
            <!--          {{ card.name }}-->
            <img :src="card.src" class="image" alt="product" />
            <p class="text-1">{{ card.header }}</p>

            <p class="text-2">{{ card.comment }}</p>

            <p class="text-3">{{ card.name }}</p>
          </div>
        </div>
      </div>
      <i class='bx bx-chevron-right' @click="next"></i>
    </div>

    <div class="last">
      <p>Rated 4.4/5 based on <span class="base">840 reviews.</span> Showing our 5 star reviews.</p>
      <p>
        <i class='bx bxs-star'></i>
        Trustpilot
      </p>
    </div>
  </div>
</template>

<script>


export default {
  name: "TestimonialsCarousel",
  data () {
    return {
      testimonials: [
        {
          name: 'niluh ayuni 2 months ago',
          src: "https://images-static.trustpilot.com/api/stars/5/star.svg",
          comment: 'Great service, fast responses',
          header: 'Great service'

        },

        {
          name: 'Gary 2 months ago',
          src: "https://images-static.trustpilot.com/api/stars/5/star.svg",
          comment: 'Carl made the experience easy to understand.',
          header: 'Carl made the experience'
        },

        {
          name: 'Hannah 1 months ago',
          src: "https://images-static.trustpilot.com/api/stars/5/star.svg",
          comment: 'Fantastic service from Conor Thank you for all your help On going help from 15/8 until today',
          header: 'Fantastic service from Conor'
        },

        {
          name: 'Aridas Antonis 5 months ago',
          src: "https://images-static.trustpilot.com/api/stars/5/star.svg",
          comment: 'Great support',
          header: 'Great support'
        },

        {
          name: 'Sigrid 4 months ago',
          src: "https://images-static.trustpilot.com/api/stars/5/star.svg",
          comment: 'I had a problem with verifying my account and your co-worker Carl helped me through my problems and even I had many nonsense questions, he was kind and helped me solve the problems. Thank you',
          header: 'I had a problem with verifying'
        },

        {
          name: 'Liverpoollegend Steve 2 months ago',
          src: "https://images-static.trustpilot.com/api/stars/5/star.svg",
          comment: 'They get back to u quick and fast great service',
          header: 'They get back to u quick and fast great…'
        },

        {
          name: 'Sigrid 4 months ago',
          src: "https://images-static.trustpilot.com/api/stars/5/star.svg",
          comment: 'I had a problem with verifying my account and your co-worker Carl helped me through my problems and even I had many nonsense questions, he was kind and helped me solve the problems. Thank you',
          header: 'I had a problem with verifying my…'
        },

        {
          name: 'ACS 7 months ago',
          src: "https://images-static.trustpilot.com/api/stars/5/star.svg",
          comment: 'Really reliable, and great customer service. Easy, secure, friendly way to get crypto.',
          header: 'Really reliable'
        },



      ],
      innerStyles: {},
      step: '',
      transitioning: false
    }
  },

  mounted () {
    this.setStep()
    this.resetTranslate()
  },

  methods: {
    setStep () {
      const innerWidth = this.$refs.inner.scrollWidth
      const totalCards = this.testimonials.length
      this.step = `${innerWidth / totalCards}px`
    },

    next () {
      if (this.transitioning) return

      this.transitioning = true

      this.moveLeft()

      this.afterTransition(() => {
        const card = this.testimonials.shift()
        this.testimonials.push(card)
        this.resetTranslate()
        this.transitioning = false
      })
    },

    prev () {
      if (this.transitioning) return

      this.transitioning = true

      this.moveRight()

      this.afterTransition(() => {
        const card = this.testimonials.pop()
        this.testimonials.unshift(card)
        this.resetTranslate()
        this.transitioning = false
      })
    },

    moveLeft () {
      this.innerStyles = {
        transform: `translateX(-${this.step})
                    translateX(-${this.step})`
      }
    },

    moveRight () {
      this.innerStyles = {
        transform: `translateX(${this.step})
                    translateX(-${this.step})`
      }
    },

    afterTransition (callback) {
      const listener = () => {
        callback()
        this.$refs.inner.removeEventListener('transitionend', listener)
      }
      this.$refs.inner.addEventListener('transitionend', listener)
    },

    resetTranslate () {
      this.innerStyles = {
        transition: 'none',
        transform: `translateX(-${this.step})`
      }
    }
  }
}
</script>

<style scoped>

.law{
  margin-top: 5%;
  margin-bottom: 2%;
}

.alpha{
  margin-left: 3%;
  display: flex;
  align-content: center;
  align-items: center;
  margin-bottom: 1%;
}

.carousel {
  width: 1200px;
  overflow: hidden;
}

.inner {
  transition: transform 0.2s;
  white-space: nowrap;
}

.card {
  width: 300px;
  margin-right: 10px;
  display: inline-block;


  height: 317px;
  color: rgba(105,106,106,1);
  /*align-items: center;*/
  /*justify-content: center;*/

  background-color: #f8f9fa;
  border-radius: 2px;
  border-bottom: 3px solid #000071;
  box-shadow: 0 1px 0 0 rgba(182,196,210,.4);
  line-height: 16px;
  padding: 40px;
  position: relative;
  vertical-align: middle;
  white-space: normal;
}

/* optional */
button {
  margin-right: 5px;
  margin-top: 10px;
}

.image{
  width: 60%;
  margin-bottom: 10%;
}

.text-1{
  margin-bottom: 5%;
}

.text-3{
  margin-top: 20%;
}

.last{
  text-align: center;
  color: rgba(105,106,106,1);
}

.bxs-star{
  color: #04da8d;
}

.bx-chevron-left{
  color: rgba(105,106,106,0.5);
  font-size: 70px;
}

.bx-chevron-right{
  color: rgba(105,106,106,0.5);
  font-size: 70px;
}
.base{
  text-decoration: underline;
}

@media (max-width: 450px) {
  .last{
    width: 70%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 4%;
  }
}
</style>