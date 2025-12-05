<script lang="ts" setup>
import MenuLinkButton from '~/components/common/menuLinkButton.vue'
import WaterDrainageIcon from '~/assets/images/common/waterdrainage-icon.webp'
import WaterStorageIcon from '~/assets/images/common/waterstorage-icon.webp'
import WaterInfiltrationIcon from '~/assets/images/common/waterinfiltration-icon.webp'
import lidIcon from '~/assets/images/common/lid-icon.webp'
import WaterPondingIssueIcon from '~/assets/images/common/waterpondingissue-icon.webp'
import VideoIcon from '~/assets/images/common/video-icon.webp'
const props = defineProps<{
  buttonImgSrc?: string
  title: string
  buttonName: string
  description: string
}>()

const computedButtonImgSrc = computed(() => {
  switch (props.buttonImgSrc) {
    case 'waterDrainage':
      return WaterDrainageIcon
    case 'waterStorage':
      return WaterStorageIcon
    case 'waterInfiltration':
      return WaterInfiltrationIcon
    case 'lid':
      return lidIcon
    case 'water-ponding-issue':
      return WaterPondingIssueIcon
    case 'video':
      return VideoIcon
    default:
      return ''
  }
})
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-6 lg:gap-8 my-10 lg:my-20">
    <div class="col-span-1 lg:col-span-2">
      <MenuLinkButton
        class="max-w-60 mx-auto lg:max-w-none mb-4 lg:mb-0"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="450"
        data-aos-easing="ease"
        :active="true"
        :imgSrc="computedButtonImgSrc"
        :buttonName="props.buttonName"
        link="#"
      />
    </div>
    <div class="col-span-1 lg:col-span-7 flex flex-col justify-end">
      <h2
        class="mb-4 font-bold"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="450"
        data-aos-easing="ease"
      >
        {{ props.title }}
      </h2>
      <p
        class="text-justify leading-8 tracking-widest"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="450"
        data-aos-easing="ease"
      >
        {{ props.description }}
      </p>
    </div>
  </div>
</template>
