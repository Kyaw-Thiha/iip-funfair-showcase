<template>
  <q-card class="card">
    <q-card-section>
      <q-img class="product-img" :alt="name" :src="image" fit="cover">
        <div class="absolute-full flex flex-center">
          <div>
            <h3 class="q-mb-sm">{{ name }}</h3>
            <h6>{{ productType }}</h6>
            <h6 class="q-mt-md-xl q-mt-sm-lg q-mt-xs-sm">
              Price: {{ price }}Ks
            </h6>
          </div>
        </div>
      </q-img>
    </q-card-section>

    <q-card-actions align="around">
      <q-btn
        label="Learn More"
        :size="screen.lt.md ? 'md' : 'lg'"
        outline
        color="primary"
        :ripple="{ early: true }"
        :to="{ name: 'product-detail', params: { id: id } }"
      />
      <q-btn
        label="Buy Ticket"
        :size="screen.lt.md ? 'md' : 'lg'"
        color="primary"
        :ripple="{ early: true }"
        @click="isPurchaseDialogOpen = true"
      />
    </q-card-actions>
  </q-card>
  <purchase-dialog
    :name="(name as string)"
    :price="price"
    v-model="isPurchaseDialogOpen"
    @bought="router.push({ name: 'purchased-tickets' })"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';

import PurchaseDialog from 'src/components/PurchaseDialog.vue';

export interface ProductInterface {
  id: string;
  image: string;
  name: string;
  productType: string;
  price: number;
}

export default defineComponent({
  name: 'ProductCard',
  components: { PurchaseDialog },
  props: {
    id: String,
    image: String,
    name: String,
    productType: String,
    price: Number,
  },
  setup() {
    const $q = useQuasar();
    const screen = $q.screen;

    const router = useRouter();

    const isPurchaseDialogOpen = ref(false);

    return { screen, router, isPurchaseDialogOpen };
  },
});
</script>

<style lang="scss" scoped>
.card {
  min-width: 350px;
}

.product-img {
  height: 300px;
}
</style>
