<script lang="ts" setup>
import { InfoFilled } from '@element-plus/icons-vue'
const wrapperHover = inject<Ref<boolean>>('wrapperHover')
</script>

<template>
  <el-tooltip effect="light" placement="top-end">
    <template #content>
      <p>
        以上資料整理自《內政部建研所綠建築評估手冊》<br />主要目的是讓更多人得知我們的國家有一群人很努力地在研究、探索並用各種方式推動我們的永續未來。
      </p>
    </template>

    <div
      class="right-0 bottom-0 mt-5 flex cursor-pointer justify-center lg:absolute lg:right-5 lg:bottom-5 lg:mt-0"
    >
      <div
        class="info-notice-box rounded-full border-2 border-transparent p-1"
        :class="{ hovered: wrapperHover }"
      >
        <InfoFilled class="h-7 w-7" />
      </div>
    </div>
  </el-tooltip>
</template>

<style lang="scss">
.el-popper.is-light {
  width: 350px;
  color: var(--color-blue-fixed);
  border: 2px solid var(--color-light-blue);
  border-radius: 16px;

  @media (width <= 500px) {
    width: 300px;
  }
}

.el-popper.is-light > .el-popper__arrow::before {
  border: 2px solid var(--color-light-blue);
}

.info-notice-box {
  transition: all 0.3s ease;

  &.hovered {
    border: 2px solid var(--color-light-blue);

    // background-color: var(--color-blue-set);
    // border-color: var(--color-white-set);

    // .el-icon {
    //   color: var(--color-white-set);
    // }
  }
}
</style>
