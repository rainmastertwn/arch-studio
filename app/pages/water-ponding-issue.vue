<script lang="ts" setup>
import TitleSection from '~/components/class/titleSection.vue'
import CardArticle from '~/components/common/cardArticle/index.vue'
import AdSection from '~/components/common/adSection.vue'
</script>

<template>
  <section class="container lg:max-w-7xl">
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
    <div class="my-10 lg:my-24">
      <h3 class="side-effect mb-6 lg:mb-10 font-bold">篩選</h3>
      <div class="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-9">
        <div class="col-span-1 lg:col-span-2">
          <div class="bg-gray-eaeaea rounded-lg overflow-hidden px-6 py-4">
            <h4 class="mb-4 font-bold text-center">建材元件</h4>
            <div class="grid grid-cols-2 gap-2">
              <div>
                <button class="filter-item--side-filter active">全部</button>
              </div>
              <div>
                <button class="filter-item--side-filter">排水管</button>
              </div>
              <div>
                <button class="filter-item--side-filter">陰井</button>
              </div>
              <div>
                <button class="filter-item--side-filter">截水溝</button>
              </div>
              <div>
                <button class="filter-item--side-filter">透氣孔</button>
              </div>
              <div>
                <button class="filter-item--side-filter">分隔板</button>
              </div>
              <div>
                <button class="filter-item--side-filter">盲溝</button>
              </div>
            </div>

            <div class="cross-line my-8"></div>

            <h4 class="mb-4 font-bold text-center">環境區域</h4>
            <div class="grid grid-cols-2 gap-2">
              <div>
                <button class="filter-item--side-filter active">全部</button>
              </div>
              <div>
                <button class="filter-item--side-filter">花台</button>
              </div>
              <div>
                <button class="filter-item--side-filter">樹穴</button>
              </div>
              <div>
                <button class="filter-item--side-filter">城市建築</button>
              </div>
              <div>
                <button class="filter-item--side-filter">運動場</button>
              </div>
              <div>
                <button class="filter-item--side-filter">停車場</button>
              </div>
            </div>

            <div class="cross-line my-8"></div>

            <h4 class="mb-4 font-bold text-center">維護管理</h4>
            <div class="grid grid-cols-2 gap-2">
              <div>
                <button class="filter-item--side-filter active">全部</button>
              </div>
              <div>
                <button class="filter-item--side-filter">維護保養</button>
              </div>
              <div>
                <button class="filter-item--side-filter">排水改善</button>
              </div>
              <div>
                <button class="filter-item--side-filter">草皮管理</button>
              </div>
              <div>
                <button class="filter-item--side-filter">環境改善</button>
              </div>
              <div>
                <button class="filter-item--side-filter">結構改善</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-1 lg:col-span-8 grid grid-cols-2 lg:grid-cols-3 gap-6">
          <CardArticle
            layout="filter"
            imgSrc="https://picsum.photos/250/250"
            content="塑膠製儲集框架就像樂高積木，輕巧、組裝快、儲水空間大，適合需要快速施工或空間利用最大化的工程；而RC儲水池就像傳統的水泥建築，雖然堅固，但施工費時，儲水效率也相對較低。"
            url="#"
            :tags="['排水改善']"
          />
          <CardArticle
            layout="filter"
            imgSrc="https://picsum.photos/250/250"
            content="塑膠製儲集框架就像樂高積木，輕巧、組裝快、儲水空間大，適合需要快速施工或空間利用最大化的工程；而RC儲水池就像傳統的水泥建築，雖然堅固，但施工費時，儲水效率也相對較低。"
            url="#"
            :tags="['花台', '環境改善']"
          />
          <CardArticle
            layout="filter"
            imgSrc="https://picsum.photos/250/250"
            content="塑膠製儲集框架就像樂高積木，輕巧、組裝快、儲水空間大，適合需要快速施工或空間利用最大化的工程；而RC儲水池就像傳統的水泥建築，雖然堅固，但施工費時，儲水效率也相對較低。"
            url="#"
            :tags="['城市建築', '排水改善']"
          />
          <CardArticle
            layout="filter"
            imgSrc="https://picsum.photos/250/250"
            content="塑膠製儲集框架就像樂高積木，輕巧、組裝快、儲水空間大，適合需要快速施工或空間利用最大化的工程；而RC儲水池就像傳統的水泥建築，雖然堅固，但施工費時，儲水效率也相對較低。"
            url="#"
            :tags="['排水改善']"
          />
          <CardArticle
            layout="filter"
            imgSrc="https://picsum.photos/250/250"
            content="塑膠製儲集框架就像樂高積木，輕巧、組裝快、儲水空間大，適合需要快速施工或空間利用最大化的工程；而RC儲水池就像傳統的水泥建築，雖然堅固，但施工費時，儲水效率也相對較低。"
            url="#"
            :tags="['花台', '環境改善']"
          />
          <CardArticle
            layout="filter"
            imgSrc="https://picsum.photos/250/250"
            content="塑膠製儲集框架就像樂高積木，輕巧、組裝快、儲水空間大，適合需要快速施工或空間利用最大化的工程；而RC儲水池就像傳統的水泥建築，雖然堅固，但施工費時，儲水效率也相對較低。"
            url="#"
            :tags="['城市建築', '排水改善']"
          />
          <CardArticle
            layout="filter"
            imgSrc="https://picsum.photos/250/250"
            content="塑膠製儲集框架就像樂高積木，輕巧、組裝快、儲水空間大，適合需要快速施工或空間利用最大化的工程；而RC儲水池就像傳統的水泥建築，雖然堅固，但施工費時，儲水效率也相對較低。"
            url="#"
            :tags="['排水改善']"
          />
          <CardArticle
            layout="filter"
            imgSrc="https://picsum.photos/250/250"
            content="塑膠製儲集框架就像樂高積木，輕巧、組裝快、儲水空間大，適合需要快速施工或空間利用最大化的工程；而RC儲水池就像傳統的水泥建築，雖然堅固，但施工費時，儲水效率也相對較低。"
            url="#"
            :tags="['花台', '環境改善']"
          />
          <CardArticle
            layout="filter"
            imgSrc="https://picsum.photos/250/250"
            content="塑膠製儲集框架就像樂高積木，輕巧、組裝快、儲水空間大，適合需要快速施工或空間利用最大化的工程；而RC儲水池就像傳統的水泥建築，雖然堅固，但施工費時，儲水效率也相對較低。"
            url="#"
            :tags="['城市建築', '排水改善']"
          />
          <CardArticle
            layout="filter"
            imgSrc="https://picsum.photos/250/250"
            content="塑膠製儲集框架就像樂高積木，輕巧、組裝快、儲水空間大，適合需要快速施工或空間利用最大化的工程；而RC儲水池就像傳統的水泥建築，雖然堅固，但施工費時，儲水效率也相對較低。"
            url="#"
            :tags="['排水改善']"
          />
          <CardArticle
            layout="filter"
            imgSrc="https://picsum.photos/250/250"
            content="塑膠製儲集框架就像樂高積木，輕巧、組裝快、儲水空間大，適合需要快速施工或空間利用最大化的工程；而RC儲水池就像傳統的水泥建築，雖然堅固，但施工費時，儲水效率也相對較低。"
            url="#"
            :tags="['花台', '環境改善']"
          />
          <CardArticle
            layout="filter"
            imgSrc="https://picsum.photos/250/250"
            content="塑膠製儲集框架就像樂高積木，輕巧、組裝快、儲水空間大，適合需要快速施工或空間利用最大化的工程；而RC儲水池就像傳統的水泥建築，雖然堅固，但施工費時，儲水效率也相對較低。"
            url="#"
            :tags="['城市建築', '排水改善']"
          />
          <CardArticle
            layout="filter"
            imgSrc="https://picsum.photos/250/250"
            content="塑膠製儲集框架就像樂高積木，輕巧、組裝快、儲水空間大，適合需要快速施工或空間利用最大化的工程；而RC儲水池就像傳統的水泥建築，雖然堅固，但施工費時，儲水效率也相對較低。"
            url="#"
            :tags="['排水改善']"
          />
          <CardArticle
            layout="filter"
            imgSrc="https://picsum.photos/250/250"
            content="塑膠製儲集框架就像樂高積木，輕巧、組裝快、儲水空間大，適合需要快速施工或空間利用最大化的工程；而RC儲水池就像傳統的水泥建築，雖然堅固，但施工費時，儲水效率也相對較低。"
            url="#"
            :tags="['花台', '環境改善']"
          />
          <CardArticle
            layout="filter"
            imgSrc="https://picsum.photos/250/250"
            content="塑膠製儲集框架就像樂高積木，輕巧、組裝快、儲水空間大，適合需要快速施工或空間利用最大化的工程；而RC儲水池就像傳統的水泥建築，雖然堅固，但施工費時，儲水效率也相對較低。"
            url="#"
            :tags="['城市建築', '排水改善']"
          />
          <CardArticle
            layout="filter"
            imgSrc="https://picsum.photos/250/250"
            content="塑膠製儲集框架就像樂高積木，輕巧、組裝快、儲水空間大，適合需要快速施工或空間利用最大化的工程；而RC儲水池就像傳統的水泥建築，雖然堅固，但施工費時，儲水效率也相對較低。"
            url="#"
            :tags="['排水改善']"
          />
          <CardArticle
            layout="filter"
            imgSrc="https://picsum.photos/250/250"
            content="塑膠製儲集框架就像樂高積木，輕巧、組裝快、儲水空間大，適合需要快速施工或空間利用最大化的工程；而RC儲水池就像傳統的水泥建築，雖然堅固，但施工費時，儲水效率也相對較低。"
            url="#"
            :tags="['花台', '環境改善']"
          />
          <CardArticle
            layout="filter"
            imgSrc="https://picsum.photos/250/250"
            content="塑膠製儲集框架就像樂高積木，輕巧、組裝快、儲水空間大，適合需要快速施工或空間利用最大化的工程；而RC儲水池就像傳統的水泥建築，雖然堅固，但施工費時，儲水效率也相對較低。"
            url="#"
            :tags="['城市建築', '排水改善']"
          />
          <CardArticle
            layout="filter"
            imgSrc="https://picsum.photos/250/250"
            content="塑膠製儲集框架就像樂高積木，輕巧、組裝快、儲水空間大，適合需要快速施工或空間利用最大化的工程；而RC儲水池就像傳統的水泥建築，雖然堅固，但施工費時，儲水效率也相對較低。"
            url="#"
            :tags="['排水改善']"
          />
        </div>
      </div>
    </div>

    <!-- 你可能感興趣區塊 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[7fr_3fr] gap-9 mb-10 lg:mb-20">
      <div>
        <h4 class="mb-6 font-bold">你可能感興趣</h4>
        <ul class="dot-list grid grid-cols-2 lg:grid-cols-3 gap-3 mb-6 lg:mb-10">
          <li>
            <NuxtLink href="#">
              建築周圍： <br />
              <span class="max-text-one-lines">建築周圍的排水與防潮濕觀念彙整</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">
              車道異音： <br />
              <span class="max-text-one-lines">擾人的車道異音解決方案</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">
              屋頂： <br />
              <span class="max-text-one-lines">從點狀排水進階為線型排水</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">
              建築周圍： <br />
              <span class="max-text-one-lines">建築周圍的排水與防潮濕觀念彙整</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">
              車道異音： <br />
              <span class="max-text-one-lines">擾人的車道異音解決方案</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">
              屋頂： <br />
              <span class="max-text-one-lines">從點狀排水進階為線型排水</span>
            </NuxtLink>
          </li>
        </ul>
        <h4 class="mb-6 font-bold">常見問題</h4>
        <ul class="dot-list grid grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
          <li>
            <NuxtLink href="#">
              <span class="max-text-one-lines">儲集框架的加分要點總整理</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">
              <span class="max-text-one-lines">滲透排水管管徑與滲透係數及米數的加分關係</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">
              <span class="max-text-one-lines">儲集框架的加分要點總整理</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">
              <span class="max-text-one-lines">滲透排水管管徑與滲透係數及米數的加分關係</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">
              <span class="max-text-one-lines">儲集框架的加分要點總整理</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">
              <span class="max-text-one-lines">滲透排水管管徑與滲透係數及米數的加分關係</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">
              <span class="max-text-one-lines">儲集框架的加分要點總整理</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">
              <span class="max-text-one-lines">滲透排水管管徑與滲透係數及米數的加分關係</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">
              <span class="max-text-one-lines">儲集框架的加分要點總整理</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">
              <span class="max-text-one-lines">滲透排水管管徑與滲透係數及米數的加分關係</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">
              <span class="max-text-one-lines">儲集框架的加分要點總整理</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">
              <span class="max-text-one-lines">滲透排水管管徑與滲透係數及米數的加分關係</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <AdSection maxWidth="350px" imgSrc="https://placehold.co/160x300?text=AD" />
      </div>
    </div>
  </section>
</template>
