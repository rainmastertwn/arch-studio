<script lang="ts" setup>
import AdBlock from '@/components/common/adBlock.vue'
import ArticleSection from '@/components/index/articleSection.vue'
import InfoSection from '@/components/common/infoSection.vue'
</script>

<template>
  <section>
    <div class="my-5 flex items-center justify-center gap-5">
      <h6 class="font-medium">大家都在看</h6>
      <NuxtLink class="link-hover" href="#"> 犬走的排水 </NuxtLink>
      <NuxtLink class="link-hover" href="#"> 公園草溝排水 </NuxtLink>
      <NuxtLink class="link-hover" href="#"> 棒壘球場排水 </NuxtLink>
      <NuxtLink class="link-hover" href="#"> 屋頂綠化排水 </NuxtLink>
      <NuxtLink class="link-hover" href="#"> 裸露地雜草防治 </NuxtLink>
    </div>

    <ArticleSection class="mb-5" />

    <AdBlock class="mb-5" size="1200x200" text="AD" />

    <InfoSection class="mb-5" />

    <div class="my-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
      <AdBlock size="400x160" text="AD" rounded="36px" />
      <AdBlock size="400x160" text="AD" rounded="36px" />
      <AdBlock size="400x160" text="Sponsor" rounded="36px" />
    </div>
  </section>
</template>
