<template>
  <q-carousel
    class="full-screen"
    navigation
    arrows
    animated
    transition-prev="jump-right"
    transition-next="jump-left"
    swipeable
    v-model="slide"
  >
    <q-carousel-slide
      v-for="(product, index) in products"
      :key="index"
      :name="index"
      :img-src="product['image']"
    >
      <div class="row items-center justify-evenly" style="min-height: 90%">
        <div class="product-info q-mt-xl q-pa-md">
          <h1 class="text-primary q-my-sm q-pa-none">
            {{ product['name'] }}
          </h1>
          <h3 class="q-mt-lg">
            {{ product['productType'] }}
          </h3>
          <q-btn
            label="Buy Ticket"
            class="text-white float-right"
            size="lg"
            outline
            color="primary"
            :ripple="{ early: true }"
            :to="{ name: 'product-detail', params: { id: product.id } }"
          />
        </div>
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export interface ProductCarouselInterface {
  id: string;
  image: string;
  name: string;
  productType: string;
}

export default defineComponent({
  name: 'ProductCarousel',
  props: {
    products: Array<ProductCarouselInterface>,
  },
  setup() {
    return {
      slide: ref(0),
    };
  },
});
</script>

<style lang="scss" scoped>
.product-info {
  backdrop-filter: blur(8px);
}
</style>
