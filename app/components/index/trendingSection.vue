<script lang="ts" setup>
import AdSection from '~/components/common/adSection.vue'
</script>

<template>
  <section class="container mb-10 md:mb-15 lg:mb-20">
    <div class="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-10 gap-4 md:gap-6 lg:gap-9">
      <!-- content place -->
      <div class="col-span-1 md:col-span-5 lg:col-span-8">
        <!-- top content -->
        <div class="mb-10">
          <h3 class="side-effect mb-6 lg:mb-10">大家都在看</h3>
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-9 mb-6">
            <div class="card-box mb-6">
              <div class="card-img overflow-hidden rounded-lg mb-8">
                <img class="w-full" src="https://picsum.photos/525/350" />
              </div>
              <div class="card-content">
                <h3 class="mb-2">塑膠製儲集框架與RC儲水池差別之處</h3>
                <p class="text-sm text-gray-888888 text-justify max-text-two-lines">
                  塑膠製儲集框架就像樂高積木，輕巧、組裝快、儲水空間大，適合需要快速施工或空間利用最大化的工程；而RC儲水池就像傳統的水泥建築，雖然堅固，但施工費時，儲水效率也相對較低。
                </p>
              </div>
            </div>
            <div class="card-box mb-6">
              <div class="card-img overflow-hidden rounded-lg mb-8">
                <img class="w-full" src="https://picsum.photos/525/350" />
              </div>
              <div class="card-content">
                <h3 class="mb-2">塑膠製儲集框架與RC儲水池差別之處</h3>
                <p class="text-sm text-gray-888888 text-justify max-text-two-lines">
                  塑膠製儲集框架就像樂高積木，輕巧、組裝快、儲水空間大，適合需要快速施工或空間利用最大化的工程；而RC儲水池就像傳統的水泥建築，雖然堅固，但施工費時，儲水效率也相對較低。
                </p>
              </div>
            </div>
            <div class="card-box mb-6">
              <div class="card-img overflow-hidden rounded-lg mb-8">
                <img class="w-full" src="https://picsum.photos/525/350" />
              </div>
              <div class="card-content">
                <h3 class="mb-2">塑膠製儲集框架與RC儲水池差別之處</h3>
                <p class="text-sm text-gray-888888 text-justify max-text-two-lines">
                  塑膠製儲集框架就像樂高積木，輕巧、組裝快、儲水空間大，適合需要快速施工或空間利用最大化的工程；而RC儲水池就像傳統的水泥建築，雖然堅固，但施工費時，儲水效率也相對較低。
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- cross line -->
        <div class="cross-line w-full h-px bg-gray-bababa my-6 lg:my-10"></div>
        <!-- filter content -->
        <div class="mb-10">
          <h3 class="side-effect mb-6 lg:mb-10">篩選</h3>

          <div class="filter-box mb-6 lg:mb-10">
            <button class="filter-item active mr-4 mb-4 lg:mb-0">排水管</button>
            <button class="filter-item mr-4 mb-4 lg:mb-0">截水溝</button>
            <button class="filter-item mr-4 mb-4 lg:mb-0">陰井</button>
            <button class="filter-item mr-4 mb-4 lg:mb-0">儲集框架</button>
            <button class="filter-item mr-4 mb-4 lg:mb-0">排水板</button>
            <button class="filter-item mr-4 mb-4 lg:mb-0">不織布</button>
            <button class="filter-item mr-4 mb-4 lg:mb-0">不透水布</button>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-9">
            <div class="card-box grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-9">
              <div>
                <div class="card-img overflow-hidden rounded-lg mb-6 lg:mb-8">
                  <img class="w-full" src="https://picsum.photos/240/160" />
                </div>
              </div>
              <div class="card-content flex flex-col">
                <h4 class="mb-6">滲透排水管有分成不透水、2/3透水、全周透水，我該怎麼選</h4>

                <p class="text-sm text-gray-888888 text-justify max-text-three-lines">
                  滲透排水管的開孔程度會直接影響排水效率、地下水控制、以及周圍土壤的穩定性。該選哪一種，取決於排水目的、土壤條件、地下水位、施工位置等因素
                </p>
              </div>
            </div>
            <div class="card-box grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-9">
              <div>
                <div class="card-img overflow-hidden rounded-lg mb-6 lg:mb-8">
                  <img class="w-full" src="https://picsum.photos/240/160" />
                </div>
              </div>
              <div class="card-content flex flex-col">
                <h4 class="mb-6">滲透排水管有分成不透水、2/3透水、全周透水，我該怎麼選</h4>

                <p class="text-sm text-gray-888888 text-justify max-text-three-lines">
                  滲透排水管的開孔程度會直接影響排水效率、地下水控制、以及周圍土壤的穩定性。該選哪一種，取決於排水目的、土壤條件、地下水位、施工位置等因素
                </p>
              </div>
            </div>
            <div class="card-box grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-9">
              <div>
                <div class="card-img overflow-hidden rounded-lg mb-6 lg:mb-8">
                  <img class="w-full" src="https://picsum.photos/240/160" />
                </div>
              </div>
              <div class="card-content flex flex-col">
                <h4 class="mb-6">滲透排水管有分成不透水、2/3透水、全周透水，我該怎麼選</h4>

                <p class="text-sm text-gray-888888 text-justify max-text-three-lines">
                  滲透排水管的開孔程度會直接影響排水效率、地下水控制、以及周圍土壤的穩定性。該選哪一種，取決於排水目的、土壤條件、地下水位、施工位置等因素
                </p>
              </div>
            </div>
            <div class="card-box grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-9">
              <div>
                <div class="card-img overflow-hidden rounded-lg mb-6 lg:mb-8">
                  <img class="w-full" src="https://picsum.photos/240/160" />
                </div>
              </div>
              <div class="card-content flex flex-col">
                <h4 class="mb-6">滲透排水管有分成不透水、2/3透水、全周透水，我該怎麼選</h4>

                <p class="text-sm text-gray-888888 text-justify max-text-three-lines">
                  滲透排水管的開孔程度會直接影響排水效率、地下水控制、以及周圍土壤的穩定性。該選哪一種，取決於排水目的、土壤條件、地下水位、施工位置等因素
                </p>
              </div>
            </div>
          </div>
        </div>

        <AdSection maxWidth="650px" imgSrc="https://placehold.co/720x90?text=AD" />
      </div>
      <!-- right list place -->
      <div class="col-span-1 md:col-span-3 lg:col-span-2">
        <h4 class="mb-4 lg:mb-6">公共空間排水</h4>
        <ul class="dot-list">
          <li>
            <NuxtLink href="#">
              地下儲水： <br />
              儲集框架的加分要點總整理
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">
              地上型水撲滿： <br />
              收集屋面雨水的流程供您參考
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">
              地上型水撲滿： <br />
              收集屋面雨水的流程供您參考
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">
              地上型水撲滿： <br />
              收集屋面雨水的流程供您參考
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">
              地上型水撲滿： <br />
              收集屋面雨水的流程供您參考
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">
              地上型水撲滿： <br />
              收集屋面雨水的流程供您參考
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">
              地上型水撲滿： <br />
              收集屋面雨水的流程供您參考
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
