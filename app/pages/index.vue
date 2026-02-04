<script lang="ts" setup>
import AdBlock from '~/components/common/adBlock.vue'
import ArticleSection from '~/components/index/articleSection.vue'
import LIDSection from '~/components/index/lidSection.vue'
import SRSection from '~/components/index/srSection.vue'
</script>

<template>
  <section>
    <ArticleSection class="mb-5" />

    <AdBlock class="mb-5" size="1200x200" text="AD" />

    <LIDSection class="mb-5" />

    <AdBlock class="mb-5" size="1200x200" text="AD" />

    <SRSection class="mb-5" />

    <div class="my-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
      <AdBlock size="400x160" text="AD" rounded="36px" />
      <AdBlock size="400x160" text="AD" rounded="36px" />
      <AdBlock size="400x160" text="Sponsor" rounded="36px" />
    </div>
  </section>
</template>
