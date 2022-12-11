<template>
  <q-dialog v-model="isOpen" :persistent="false">
    <q-card>
      <q-card-section>
        <h4>{{ title }}</h4>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <slot></slot>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    btnLabel: {
      type: String,
      default: 'Close',
    },
  },
  setup(props, context) {
    const isOpen = ref(false);
    const openDialog = () => {
      isOpen.value = true;
    };
    const closeDialog = () => {
      isOpen.value = false;
      context.emit('close');
    };
    return {
      isOpen,
      openDialog,
      closeDialog,
    };
  },
});
</script>
<style lang="scss" scoped>
.card {
  min-width: 350px;
}
@media (max-width: 330px) {
  .card {
    min-width: 300px;
  }
}
</style>
