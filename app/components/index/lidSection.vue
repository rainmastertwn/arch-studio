<script lang="ts" setup>
const infoValue = ref<string>('透水鋪面')
const infoOptions = [
  { label: '透水鋪面', value: '透水鋪面' },
  { label: '綠屋頂', value: '綠屋頂' },
  { label: '生態滯留單元', value: '生態滯留單元' },
  { label: '樹箱過濾設施', value: '樹箱過濾設施' },
  { label: '植生草溝', value: '植生草溝' },
  { label: '雨水桶', value: '雨水桶' },
  { label: '儲水及滲透陰井', value: '儲水及滲透陰井' },
  { label: '雨水花園', value: '雨水花園' }
]

const wrapperHover = inject<Ref<boolean>>('wrapperHover')
</script>

<template>
  <section>
    <h3 class="mb-5 text-center leading-8">在地滯留 在地滲透 在地淨化<br />從此 我們雨水共生</h3>
    <div
      class="custom-segmented-wrapper mb-5 w-fit"
      :class="{
        hovered: wrapperHover
      }"
    >
      <ElSegmented v-model="infoValue" :options="infoOptions" />
    </div>

    <div class="info-content bg-medium-gray overflow-hidden rounded-[36px] p-5">
      <div class="h-[500px] w-full"></div>
    </div>
  </section>
</template>
