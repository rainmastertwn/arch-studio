<script lang="ts" setup>
import TitleSection from '~/components/class/titleSection.vue'
import CardArticle from '~/components/common/cardArticle/index.vue'
import AdSection from '~/components/common/adSection.vue'
</script>

<template>
  <section class="container">
    <TitleSection
      title="雨水排水"
      buttonImgSrc="waterDrainage"
      buttonName="雨水排水"
      description="雨水排水是城市防洪的第一道防線，它將落在地表的雨水，透過管線系統迅速引導至河川或大海。傳統的排水強調「快速排除」，但也容易超出負擔，因此現代的排水系統會更著重於如何結合其他技術，讓雨水能更妥善地被利用。"
    />

    <div class="cross-line my-10 lg:my-24"></div>

    <h3 class="side-effect tracking-widest mb-10 font-bold">最新上架</h3>

    <div class="grid grid-cols-1 lg:grid-cols-9 gap-4 md:gap-6 lg:gap-9 mb-10">
      <div class="col-span-6">
        <CardArticle
          class="mb-6"
          type="main"
          title="綠地排水：可快速收集地表逕流水並快速導入地下轉為滲透水的雙重排水方式"
          layout="vertical"
          imgSrc="https://picsum.photos/525/350"
          content="介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文"
          url="#"
        />

        <div class="cross-line my-6 lg:my-10"></div>

        <CardArticle
          class="mb-6"
          title="滲透排水管有分成不透水、2/3透水、全周透水，我該怎麼選"
          layout="horizontal"
          imgSrc="https://picsum.photos/240/160"
          content="滲透排水管的開孔程度會直接影響排水效率、地下水控制、以及周圍土壤的穩定性。該選哪一種，取決於排水目的、土壤條件、地下水位、施工位置等因素"
          url="#"
          :columns="[3, 7]"
        />
        <CardArticle
          class="mb-6"
          title="滲透排水管有分成不透水、2/3透水、全周透水，我該怎麼選"
          layout="horizontal"
          imgSrc="https://picsum.photos/240/160"
          content="滲透排水管的開孔程度會直接影響排水效率、地下水控制、以及周圍土壤的穩定性。該選哪一種，取決於排水目的、土壤條件、地下水位、施工位置等因素"
          url="#"
          :columns="[3, 7]"
        />
        <CardArticle
          class="mb-6"
          title="滲透排水管有分成不透水、2/3透水、全周透水，我該怎麼選"
          layout="horizontal"
          imgSrc="https://picsum.photos/240/160"
          content="滲透排水管的開孔程度會直接影響排水效率、地下水控制、以及周圍土壤的穩定性。該選哪一種，取決於排水目的、土壤條件、地下水位、施工位置等因素"
          url="#"
          :columns="[3, 7]"
        />

        <AdSection imgSrc="https://placehold.co/728x90?text=AD" />
      </div>
      <div class="col-span-3">
        <div class="side-effect mb-10">
          <h4 class="tracking-widest mb-6 font-bold">常見問題</h4>
          <ul class="dot-list">
            <li>
              <NuxtLink class="max-text-one-lines" href="#">儲集框架的加分要點總整理</NuxtLink>
            </li>
            <li>
              <NuxtLink class="max-text-one-lines" href="#"
                >滲透排水管管徑與滲透係數及米數的加分關係</NuxtLink
              >
            </li>
            <li>
              <NuxtLink class="max-text-one-lines" href="#"
                >滲透陰井大小及個數與計分的相應關係</NuxtLink
              >
            </li>
            <li>
              <NuxtLink class="max-text-one-lines" href="#">儲集框架的加分要點總整理</NuxtLink>
            </li>
            <li>
              <NuxtLink class="max-text-one-lines" href="#"
                >滲透排水管管徑與滲透係數及米數的加分關係</NuxtLink
              >
            </li>
            <li>
              <NuxtLink class="max-text-one-lines" href="#"
                >滲透陰井大小及個數與計分的相應關係</NuxtLink
              >
            </li>
          </ul>
        </div>

        <AdSection maxWidth="300px" imgSrc="https://placehold.co/300x1050?text=AD" />
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-9 mb-10">
      <CardArticle
        title="綠地排水：可快速收集地表逕流水並快速導入地下轉為滲透水的雙重排水方式"
        layout="vertical"
        imgSrc="https://picsum.photos/525/350"
        content="介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文"
        url="#"
      />
      <CardArticle
        title="綠地排水：可快速收集地表逕流水並快速導入地下轉為滲透水的雙重排水方式"
        layout="vertical"
        imgSrc="https://picsum.photos/525/350"
        content="介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文"
        url="#"
      />
      <CardArticle
        title="綠地排水：可快速收集地表逕流水並快速導入地下轉為滲透水的雙重排水方式"
        layout="vertical"
        imgSrc="https://picsum.photos/525/350"
        content="介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文"
        url="#"
      />
      <CardArticle
        title="綠地排水：可快速收集地表逕流水並快速導入地下轉為滲透水的雙重排水方式"
        layout="vertical"
        imgSrc="https://picsum.photos/525/350"
        content="介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文"
        url="#"
      />
      <CardArticle
        title="綠地排水：可快速收集地表逕流水並快速導入地下轉為滲透水的雙重排水方式"
        layout="vertical"
        imgSrc="https://picsum.photos/525/350"
        content="介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文"
        url="#"
      />
      <CardArticle
        title="綠地排水：可快速收集地表逕流水並快速導入地下轉為滲透水的雙重排水方式"
        layout="vertical"
        imgSrc="https://picsum.photos/525/350"
        content="介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文"
        url="#"
      />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[7fr_3fr] gap-9 mb-10 lg:mb-20">
      <div>
        <h4 class="mb-6 font-bold">你可能感興趣</h4>
        <ul class="dot-list grid grid-cols-2 lg:grid-cols-3 gap-3">
          <li>
            <NuxtLink href="#">儲集框架的加分要點總整理</NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">滲透排水管管徑與滲透係數及米數的加分關係</NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">滲透陰井大小及個數與計分的相應關係</NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">儲集框架的加分要點總整理</NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">滲透排水管管徑與滲透係數及米數的加分關係</NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">滲透陰井大小及個數與計分的相應關係</NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">儲集框架的加分要點總整理</NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">滲透排水管管徑與滲透係數及米數的加分關係</NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">滲透陰井大小及個數與計分的相應關係</NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <AdSection maxWidth="350px" imgSrc="https://placehold.co/336x280?text=AD" />
      </div>
    </div>
  </section>
</template>
