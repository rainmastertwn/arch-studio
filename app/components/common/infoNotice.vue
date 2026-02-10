<script lang="ts" setup>
import { InfoFilled } from '@element-plus/icons-vue'
const wrapperHover = inject<Ref<boolean>>('wrapperHover')
</script>

<template>
  <div>
    <el-tooltip effect="light" placement="top-end">
      <template #content>
        <slot></slot>
      </template>

      <div class="mt-5 flex cursor-pointer justify-center lg:mt-0">
        <div
          class="info-notice-box rounded-full border-2 border-transparent p-1"
          :class="{ hovered: wrapperHover }"
        >
          <InfoFilled class="h-7 w-7" />
        </div>
      </div>
    </el-tooltip>
  </div>
</template>

<style lang="scss">
.el-popper.is-light {
  width: 365px;
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
