<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Swiper as SwiperType } from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import ArrowLeft from '~/assets/images/icons/arrow-left.webp'
import ArrowLeftWhite from '~/assets/images/icons/arrow-left-white.webp'
import ArrowRight from '~/assets/images/icons/arrow-right.webp'
import ArrowRightWhite from '~/assets/images/icons/arrow-right-white.webp'
import iconType11 from '~/assets/images/icons/icon-type-11.webp'
import type { Post } from '~/mock/posts'

const wrapperHover = inject<Ref<boolean>>('wrapperHover')

const props = defineProps<{
  postData: Post[]
}>()

const postData = ref<Post[][] | Post[]>([])
const slicedPostData: Post[][] = []
for (let i = 0; i < props.postData.length; i += 10) {
  slicedPostData.push(props.postData.slice(i, i + 10))
}
postData.value = slicedPostData

const getPostConfig = (post: any) => {
  const isValid = !!(post && typeof post === 'object' && post.id && post.content && post.imgSrc)
  return {
    isValid,
    href: isValid ? `/drainage/post/${post.id}` : '#',
    title: post?.title || ''
  }
}

const swiperRef = ref<SwiperType | null>(null)
const onSwiper = (swiper: SwiperType) => {
  swiperRef.value = swiper
}

const isSlideBeginning = ref(true)
const isSlideEnd = ref(false)
const onSlideChange = () => {
  if (swiperRef.value) {
    isSlideBeginning.value = swiperRef.value.isBeginning
    isSlideEnd.value = swiperRef.value.isEnd
  }
}

const slideNext = () => {
  swiperRef.value?.slideNext()
}

const slidePrev = () => {
  swiperRef.value?.slidePrev()
}
</script>

<template>
  <div class="grid grid-cols-12">
    <div
      class="col-span-12 col-start-1 mb-3 flex scroll-mt-6 flex-wrap items-center lg:col-span-10 lg:col-start-2"
      id="howToChoose"
    >
      <div
        class="icon-border mr-5 flex h-[106px] w-[106px] items-center justify-center rounded-full border-6 border-transparent p-3"
        :class="{
          hovered: wrapperHover
        }"
      >
        <img alt="我該如何選擇 icon" :src="iconType11" />
      </div>
      <h4>我該如何選擇</h4>
    </div>
    <div class="relative col-span-10 col-start-2">
      <Swiper @swiper="onSwiper" :modules="[Navigation]" @slide-change="onSlideChange">
        <SwiperSlide v-for="(items, idx) in postData" :key="idx">
          <div
            class="grid-flow-rows col-span-12 col-start-1 mb-3 grid grid-cols-1 grid-rows-none gap-5 lg:col-span-10 lg:col-start-2 lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-5"
          >
            <NuxtLink
              class="border-light-gray border-b pb-3"
              v-for="(post, index) in items"
              :key="index"
              :href="getPostConfig(post).href"
            >
              <p
                class="max-text-two-lines font-light"
                :class="{ 'text-hover': getPostConfig(post).isValid }"
              >
                {{ getPostConfig(post).title }}
              </p>
            </NuxtLink>
          </div>
        </SwiperSlide>
      </Swiper>
      <div class="slide-button-prev" v-if="postData.length > 1">
        <img
          class="block cursor-pointer dark:hidden"
          alt="previous"
          :src="ArrowLeft"
          width="30"
          height="40"
          @click="slidePrev"
          :class="{ 'opacity-30': isSlideBeginning }"
        />
        <img
          class="hidden cursor-pointer dark:block"
          alt="previous"
          :src="ArrowLeftWhite"
          width="30"
          height="40"
          @click="slidePrev"
          :class="{ 'opacity-30': isSlideBeginning }"
        />
      </div>
      <div class="slide-button-next" v-if="postData.length > 1">
        <img
          class="block cursor-pointer dark:hidden"
          alt="next"
          :src="ArrowRight"
          width="30"
          height="40"
          @click="slideNext"
          :class="{ 'opacity-30': isSlideEnd }"
        />
        <img
          class="hidden cursor-pointer dark:block"
          alt="next"
          :src="ArrowRightWhite"
          width="30"
          height="40"
          @click="slideNext"
          :class="{ 'opacity-30': isSlideEnd }"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.icon-border {
  transition: border-color 0.4s ease;

  &.hovered {
    border-color: var(--color-light-blue);
  }

  @media (width < 64rem) {
    border-color: var(--color-light-blue);
  }
}

.slide-button-prev,
.slide-button-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}

.slide-button-prev {
  left: -60px;

  @media (width < 64rem) {
    left: -40px;
  }
}

.slide-button-next {
  right: -60px;

  @media (width < 64rem) {
    right: -40px;
  }
}
</style>
