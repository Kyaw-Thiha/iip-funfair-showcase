<template>
  <q-card class="card">
    <q-card-section>
      <q-img class="product-img" :alt="name" :src="image" fit="fill">
        <div class="absolute-full flex flex-center">
          <div>
            <h3 class="q-mb-sm">{{ name }}</h3>
            <h6>{{ productType }}</h6>
            <h6 class="q-mt-xl">Price: {{ price }}Ks</h6>
          </div>
        </div>
      </q-img>
    </q-card-section>

    <q-card-actions align="around">
      <q-btn
        label="Learn More"
        size="lg"
        outline
        color="primary"
        :ripple="{ early: true }"
        :to="{ name: 'product-detail', params: { id: id } }"
      />
      <q-btn
        label="Buy Ticket"
        size="lg"
        color="primary"
        :ripple="{ early: true }"
        :to="{ name: 'product-detail', params: { id: id } }"
      />
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export interface ProductInterface {
  id: string;
  image: string;
  name: string;
  productType: string;
  price: number;
}

export default defineComponent({
  name: 'ProductCard',
  props: {
    id: String,
    image: String,
    name: String,
    productType: String,
    price: Number,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.product-img {
  height: 300px;
}
</style>
