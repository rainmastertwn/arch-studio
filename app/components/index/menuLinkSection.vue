<script lang="ts" setup>
import MenuLinkButton from '~/components/common/menuLinkButton.vue'
import WaterPondingIcon from '~/assets/images/common/waterponding-icon.webp'
import WaterStorageIcon from '~/assets/images/common/waterstorage-icon.webp'
import WaterIssueIcon from '~/assets/images/common/waterissue-icon.webp'
import WaterInfiltrationIcon from '~/assets/images/common/waterinfiltration-icon.webp'
import LIDIcon from '~/assets/images/common/lid-icon.webp'
</script>

<template>
  <section class="container mb-10 lg:mb-15">
    <div class="grid grid-cols-2 lg:grid-cols-5">
      <MenuLinkButton
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="450"
        data-aos-easing="ease"
        :hover="true"
        :imgSrc="WaterPondingIcon"
        buttonName="雨水積水"
        link="#"
      />
      <MenuLinkButton
        data-aos="fade-up"
        data-aos-delay="150"
        data-aos-duration="450"
        data-aos-easing="ease"
        :hover="true"
        :imgSrc="WaterStorageIcon"
        buttonName="雨水儲存"
        link="#"
      />
      <MenuLinkButton
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
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="450"
        data-aos-easing="ease"
        :hover="true"
        :imgSrc="WaterIssueIcon"
        buttonName="各種積水問題"
        link="#"
      />
    </div>
  </section>
</template>
