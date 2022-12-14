<template>
  <q-dialog v-model="isOpen" :persistent="false">
    <q-card class="card">
      <q-card-section>
        <h4>{{ name }}</h4>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input
          class="q-mt-md"
          v-model="count"
          label="Ticket Count"
          type="number"
          outlined
        />
        <h5 class="q-mt-md">{{ totalCost }} Ks</h5>
      </q-card-section>

      <q-card-actions align="right">
        <div class="btn-container">
          <q-btn class="btn" label="Buy" color="primary" @click="buy" />
        </div>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      default: 0,
    },
  },
  setup(props, context) {
    const $q = useQuasar();

    const isOpen = ref(false);

    var count = ref(0);
    var totalCost = computed(() => {
      return props.price * count.value;
    });

    const buy = () => {
      if (count.value == 0) {
        $q.notify({
          message: 'Ticket count cannot be zero',
          caption: 'You need buy at least one ticket',
          color: 'primary',
        });
      } else {
        //Buying request

        $q.notify({
          message: `You have successfully bought ${count.value} tickets.`,
          caption: 'Please pay the shop owner at school',
          color: 'primary',
        });
        isOpen.value = false;

        context.emit('bought');
      }
    };

    return {
      isOpen,
      count,
      totalCost,
      buy,
    };
  },
});
</script>
<style lang="scss" scoped>
.card {
  min-width: 350px;

  @media (max-width: 330px) {
    .card {
      min-width: 300px;
    }
  }
}

.btn-container {
  text-align: center;
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
  .btn {
    width: 90%;
  }
}
</style>
