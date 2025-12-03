<script lang="ts" setup>
import waterEffectBg from '~/assets/images/index/water-effect-bg.png'
import waterEffectWater from '~/assets/images/index/water-effect-water.webp'

let rellax: any
onMounted(async () => {
  const Rellax = (await import('rellax')).default

  rellax = new Rellax('.rellax')
})

onUnmounted(() => {
  rellax?.destroy()
})
</script>

<template>
  <section class="relative w-full overflow-hidden mb-10 md:mb-15 lg:mb-20">
    <div class="water-effect-top overflow-hidden"></div>
    <div class="water-effect-wrap">
      <img class="water-effect-bg w-full" alt="water effect bg" :src="waterEffectBg" />

      <client-only>
        <img
          class="water first rellax"
          data-rellax-speed="-1"
          data-rellax-percentage="0.1"
          alt="water effect water "
          :src="waterEffectWater"
        />
        <img
          class="water second rellax"
          data-rellax-speed="-3"
          data-rellax-percentage="0.5"
          alt="water effect water "
          :src="waterEffectWater"
        />
        <img
          class="water third rellax"
          data-rellax-speed="-2"
          data-rellax-percentage="0.2"
          alt="water effect water "
          :src="waterEffectWater"
        />
        <img
          class="water fourth rellax"
          data-rellax-speed="-2"
          data-rellax-percentage="0.3"
          alt="water effect water "
          :src="waterEffectWater"
        />
        <img
          class="water fifth rellax"
          data-rellax-speed="-1"
          data-rellax-percentage="0.1"
          alt="water effect water "
          :src="waterEffectWater"
        />
      </client-only>

      <div class="description max-w-[350px] md:max-w-[500px] lg:max-w-[960px] w-full">
        <h3 class="text-white-set text-center mb-6" data-aos="fade-up" data-aos-delay="100">
          從此我們雨水共生
        </h3>
        <div class="w-full h-px bg-white-set mb-6" data-aos="fade-up" data-aos-delay="200"></div>
        <h4 class="text-white-set text-center mb-6" data-aos="fade-up" data-aos-delay="300">
          從雨水的管理者，到與雨水共生
        </h4>
        <p
          class="text-base text-white-set text-center leading-8"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          我們提供專業且多元的解決方案並致力於提供最全面的技術工法，<br />讓您在解決問題的同時也為環境盡一份心力。
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.water-effect-top {
  position: relative;
  z-index: 5;
  width: 201%;
  height: 50px;
  background-repeat: repeat-x;
  background-size: contain;
  background-image: url('~/assets/images/index/water-effect-wave.webp');
  animation: wave-animation 125s linear infinite;
}

.water-effect-wrap {
  position: relative;
  z-index: 4;
  margin-top: -50px;

  .water-effect-bg {
    object-fit: cover;

    @media (width < 80rem) {
      height: 500px;
    }
  }

  .water {
    &.first {
      position: absolute;
      top: 20px;
      left: 12.5%;
      width: 75px;

      @media (width < 80rem) {
        top: 10px;
        left: 2%;
        width: 50px;
      }

      @media (width < 64rem) {
        top: -20px;
        left: 10px;
        width: 45px;
        opacity: 0.5;
      }
    }

    &.second {
      position: absolute;
      top: 17.5%;
      left: 17.5%;
      width: 100px;

      @media (width < 80rem) {
        top: 20%;
        left: 8.5%;
        width: 75px;
      }

      @media (width < 64rem) {
        display: none;
      }
    }

    &.third {
      position: absolute;
      top: 10%;
      left: 25%;
      width: 60px;

      @media (width < 80rem) {
        top: 2%;
        left: 17.5%;
        width: 40px;
      }

      @media (width < 64rem) {
        top: -100px;
        left: 60px;
        width: 35px;
        opacity: 0.5;
      }
    }

    &.fourth {
      position: absolute;
      right: 27.5%;
      bottom: 30%;
      width: 65px;

      @media (width < 80rem) {
        right: 2%;
        bottom: 10%;
        width: 50px;
      }

      @media (width < 64rem) {
        right: 65px;
        bottom: 10px;
        width: 35px;
        opacity: 0.5;
      }
    }

    &.fifth {
      position: absolute;
      right: 20%;
      bottom: 15%;
      width: 105px;

      @media (width < 80rem) {
        right: 5%;
        bottom: 5%;
        width: 75px;
      }

      @media (width < 64rem) {
        right: 2px;
        bottom: -70px;
        width: 50px;
        opacity: 0.5;
      }
    }
  }
}

.description {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@keyframes wave-animation {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}
</style>
