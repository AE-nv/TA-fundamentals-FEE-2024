<script setup lang="ts">
import { ref } from 'vue'
import FileUpload from 'primevue/fileupload'
import Panel from 'primevue/panel'
import { IDxf } from 'dxf-parser'

defineProps<{
  name: string
  accept: string
  chooseLabel: string
  data?: IDxf | null
}>()

const emit = defineEmits<{
  select: (event: { file: File }) => void
}>()

const isLoading = ref<boolean>(false)

function onSelectFile(event) {
  if (event.files && event.files.length === 1) {
    emit('select', event.files[0])
  }
}
</script>

<template>
  <FileUpload
    mode="basic"
    :name="name"
    :accept="accept"
    @select="onSelectFile"
    :choose-label="$t(chooseLabel)"
    :auto="true"
  />
  <div class="cad-view-container mt-4" :class="{ hidden: !data }">
    <!--    <div class="flex flex-column w-6 h-full mr-2">-->
    <!--      <h3>{{ $t('general.drawing') }}</h3>-->
    <!--      <div class="cad-view h-full border-1 overflow-scroll">-->
    <div class="grid">
      <div class="col-6">
        <Panel :header="$t('general.drawing')" toggleable>
          <div class="cad-view overflow-auto">
            <slot name="cad-view" />
          </div>
        </Panel>
      </div>
      <!--      </div>-->
      <!--    </div>-->
      <!--    <div class="flex flex-column w-6 h-full ml-2">-->
      <!--      <h3>{{ $t('general.data') }}</h3>-->
      <!--      <div class="dwf-content h-full border-1 overflow-scroll">-->
      <!--        <pre>{{ data }}</pre>-->
      <!--      </div>-->
      <div class="col-6">
        <Panel :header="$t('general.data')" toggleable>
          <div class="cad-data overflow-auto">
            <pre class="m-0">{{ data }}</pre>
          </div>
        </Panel>
      </div>
    </div>
    <!--    </div>-->
  </div>
</template>

<style lang="scss">
.cad-view-container {
  height: calc(100vh - 200px);
  width: calc(100vw - 60px);

  .cad-view {
    height: calc(100vh - 300px);

    canvas {
      width: 100% !important;
      height: auto !important;
    }
  }

  .cad-data {
    height: calc(100vh - 300px);

    pre {
      font-size: 12px;
      white-space: pre-wrap;
    }
  }
}
</style>
