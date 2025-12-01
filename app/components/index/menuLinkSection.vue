<script lang="ts" setup>
import MenuLinkButton from '~/components/common/menuLinkButton.vue'
import WaterDrainageIcon from '~/assets/images/common/waterdrainage-icon.webp'
import WaterStorageIcon from '~/assets/images/common/waterstorage-icon.webp'
import WaterPondingIssueIcon from '~/assets/images/common/waterpondingissue-icon.webp'
import WaterInfiltrationIcon from '~/assets/images/common/waterinfiltration-icon.webp'
import LIDIcon from '~/assets/images/common/lid-icon.webp'
</script>

<template>
  <section class="container mb-10 lg:mb-15">
    <div class="grid grid-cols-2 lg:grid-cols-5">
      <MenuLinkButton
        class="m-2 lg:m-4"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="450"
        data-aos-easing="ease"
        :hover="true"
        :imgSrc="WaterDrainageIcon"
        buttonName="雨水排水"
        link="drainage"
      />
      <MenuLinkButton
        class="m-2 lg:m-4"
        data-aos="fade-up"
        data-aos-delay="150"
        data-aos-duration="450"
        data-aos-easing="ease"
        :hover="true"
        :imgSrc="WaterStorageIcon"
        buttonName="雨水儲存"
        link="storage"
      />
      <MenuLinkButton
        class="m-2 lg:m-4"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="450"
        data-aos-easing="ease"
        :hover="true"
        :imgSrc="WaterInfiltrationIcon"
        buttonName="雨水滲透"
        link="#"
      />
      <MenuLinkButton
        class="m-2 lg:m-4"
        data-aos="fade-up"
        data-aos-delay="250"
        data-aos-duration="450"
        data-aos-easing="ease"
        :hover="true"
        :imgSrc="LIDIcon"
        buttonName="LID低衝擊開發"
        link="#"
      />
      <MenuLinkButton
        class="m-2 lg:m-4"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="450"
        data-aos-easing="ease"
        :hover="true"
        :imgSrc="WaterPondingIssueIcon"
        buttonName="各種積水問題"
        link="#"
      />
    </div>
  </section>
</template>
