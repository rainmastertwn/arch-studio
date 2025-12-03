<script lang="ts" setup>
import TitleSection from '~/components/class/titleSection.vue'
import CardArticle from '~/components/common/cardArticle/index.vue'
import AdSection from '~/components/common/adSection.vue'
</script>

<template>
  <section class="container">
    <TitleSection
      title="各種積水問題"
      buttonImgSrc="water-ponding-issue"
      buttonName="各種積水問題"
      description="城市積水問題主要源於排水系統負荷過大，以及地表逕流增加。當強降雨超過排水管線的處理能力，或是大量的硬鋪面（如水泥、柏油）阻止雨水滲入地下時，就會造成道路積水、城市內澇，不僅影響交通，還可能衍生環境衛生問題。了解這些積水問題的成因，是我們尋求更有效解決方案的第一步。"
    />

    <div class="cross-line my-10 lg:my-24"></div>

    <!-- 大家都在問 -->
    <div class="my-10 lg:my-24">
      <h3 class="side-effect mb-6 lg:mb-10 font-bold">大家都在問</h3>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-9 mb-6">
        <CardArticle
          title="塑膠製儲集框架與RC儲水池差別之處"
          layout="vertical"
          imgSrc="https://picsum.photos/525/350"
          content="塑膠製儲集框架就像樂高積木，輕巧、組裝快、儲水空間大，適合需要快速施工或空間利用最大化的工程；而RC儲水池就像傳統的水泥建築，雖然堅固，但施工費時，儲水效率也相對較低。"
          url="#"
        />
        <CardArticle
          title="塑膠製儲集框架與RC儲水池差別之處"
          layout="vertical"
          imgSrc="https://picsum.photos/525/350"
          content="塑膠製儲集框架就像樂高積木，輕巧、組裝快、儲水空間大，適合需要快速施工或空間利用最大化的工程；而RC儲水池就像傳統的水泥建築，雖然堅固，但施工費時，儲水效率也相對較低。"
          url="#"
        />
        <CardArticle
          title="塑膠製儲集框架與RC儲水池差別之處"
          layout="vertical"
          imgSrc="https://picsum.photos/525/350"
          content="塑膠製儲集框架就像樂高積木，輕巧、組裝快、儲水空間大，適合需要快速施工或空間利用最大化的工程；而RC儲水池就像傳統的水泥建築，雖然堅固，但施工費時，儲水效率也相對較低。"
          url="#"
        />
      </div>
    </div>

    <!-- 篩選 -->
    <div class="my-10 lg:my-24">test 123</div>
  </section>
</template>
