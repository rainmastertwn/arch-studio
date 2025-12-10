<script setup lang="ts">
interface Props {
  src: string
  imgPreview?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{
  closePreview: []
}>()

const imgSrc = computed(() => {
  return props.src
})

const closePreview = () => {
  emit('closePreview')
}
</script>
<template>
  <div class="block">
    <transition name="fade">
      <div
        class="fixed inset-0 z-9999 t-0 left-0 w-full h-full bg-black/50 cursor-zoom-out"
        v-if="props.imgPreview"
        @click="closePreview"
      >
        <div
          class="image-box overflow-hidden rounded-md shadow-2xl"
          :style="{ backgroundColor: 'transparent' }"
        >
          <img class="w-full object-contain transition-transform duration-200" :src="imgSrc" />
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.image-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 1024px;
}
</style>
