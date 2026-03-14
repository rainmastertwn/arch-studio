<script lang="ts" setup>
import MailIcon from '~/json/mail.json'
const adData = [
  { name: 'Ad1:', price: '66,000/月' },
  { name: 'Ad2:', price: '36,000/月' },
  { name: 'Ad3:', price: '6,600/月' },
  { name: 'Ad5:', price: '12,600/月' },
  { name: 'Ad6:', price: '6,600/月' },
  { name: 'Ad7:', price: '26,600/月' },
  { name: '贊助單篇文章', price: '120,000/篇' }
]

const mailAnimation = ref<any>(null)
const mailIcon = ref<HTMLDivElement | null>(null)
onMounted(() => {
  nextTick(() => {
    if (!mailIcon.value) return
    mailAnimation.value = (window as any).bodymovin.loadAnimation({
      container: mailIcon.value as HTMLElement,
      animationData: MailIcon,
      renderer: 'svg',
      loop: true,
      autoplay: false,
      name: 'mail icon'
    })
  })
})

const mailHover = () => {
  mailAnimation.value?.play()
}

const mailLeave = () => {
  mailAnimation.value?.stop()
}
</script>

<template>
  <section>
    <div class="animate-title mb-7 text-center lg:mb-14">
      <h1 class="gradient-text text-[48px] tracking-widest">通過 Arch Studio Ads</h1>
      <p class="text-[28px] tracking-widest">讓您與潛在客戶 建立信任並爭取曝光</p>
    </div>
    <div class="mb-7 grid grid-cols-1 gap-5 lg:mb-14 lg:grid-cols-12">
      <!-- sketchfab embed -->
      <div class="bg-gray-dedede col-span-1 overflow-hidden rounded-2xl lg:col-span-5">
        <iframe
          class="h-full min-h-[500px] w-full"
          src="https://sketchfab.com/models/5aea76781c334c8b9533c7ca926743b8/embed"
          title="Arch Studio 廣告贊助價目表"
          frameborder="0"
          allowfullscreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
        >
        </iframe>
      </div>
      <!-- table info -->
      <div class="bg-gray-dedede col-span-1 overflow-hidden rounded-2xl p-5 lg:col-span-7">
        <!-- title -->
        <div class="grid grid-cols-1 gap-2 lg:grid-cols-2">
          <div class="text-blue-fixed order-2 col-span-1 lg:order-1">
            <h3 class="mb-1 text-xl">Arch Studio 廣告贊助：</h3>
            <el-table class="ad-table" :data="adData" :show-header="false" border>
              <el-table-column prop="name" align="center" />
              <el-table-column prop="price" align="center" />
            </el-table>
          </div>
          <div
            class="text-blue-fixed order-1 col-span-1 lg:order-2"
            @mouseenter="mailHover"
            @mouseleave="mailLeave"
          >
            <h3 class="mb-2 text-xl">來信聯絡：</h3>
            <p class="text-center">請附上名片及說明需求，由專人與您聯絡</p>
            <p class="mb-10 text-center">ad@archstudio.com.tw</p>
            <div class="mx-auto h-[100px] w-[100px] cursor-pointer" ref="mailIcon" />
          </div>
        </div>
        <div class="border-blue-fixed relative z-0 -mt-px border">
          <div class="description text-blue-fixed p-2">
            <p>・贊助單篇文章：</p>
            <p class="indent">
              內容包含網頁製作，可置入圖說，預算，相關連結網址。(須提供網頁內容及素材)
            </p>
            <p>・提供 "2D平面製作"。</p>
            <p>・提供 "3D平面製作"，（依複雜度報價）/幅。</p>
            <p>・提供 "2D動畫製作"，（依複雜度報價）/秒。</p>
            <p>・提供 "3D模型製作"，依複雜度報價/個。</p>
            <p>・提供 "3D動畫製作"，（依複雜度報價）/秒。</p>
            <p>・2D製作: AD1，AD2，AD7: 6,000元/幅，AD3，AD6: 3,600元/幅。(可改稿2次)</p>
            <p>・我司提供之2D，3D內容均為客製原創，分非生成式內容。</p>
            <p>・贊助者提供之廣告內容亦不得為生成式內容。</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.gradient-text {
  background: linear-gradient(90deg, #8898ff, #b87fff, #fc2fbe, #8898ff);
  background-size: 300% auto;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: text-flow 6s ease-in-out infinite;
}

@keyframes text-flow {
  0% {
    background-position: 0% center;
  }

  50% {
    background-position: 100% center;
  }

  100% {
    background-position: 0% center;
  }
}

// 廣告贊助樣式

.ad-table {
  width: 320px;
  flex-shrink: 0;

  --el-table-bg-color: transparent;
  --el-table-tr-bg-color: transparent;
  --el-table-border-color: #2e3a52;
  --el-table-text-color: #2e3a52;
}
</style>
