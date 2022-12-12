<template>
  <q-carousel
    class="full-screen"
    control-color="primary"
    navigation
    arrows
    animated
    transition-prev="jump-right"
    transition-next="jump-left"
    swipeable
    infinite
    autoplay
    v-model="slide"
  >
    <q-carousel-slide
      class="row"
      v-for="(product, index) in products"
      :key="index"
      :name="index"
    >
      <div class="col-md-6 col-sm-12">
        <q-img
          class="product-image"
          :src="product.image"
          :alt="product.name"
          fit="contain"
        />
      </div>

      <div class="col-md-6 col-sm-12">
        <div class="row items-center justify-evenly full-height">
          <div class="product-info">
            <h1 class="text-primary text-center q-my-sm q-pa-none">
              {{ product['name'] }}
            </h1>
            <h3 class="q-mt-lg text-center">
              {{ product['productType'] }}
            </h3>
            <div class="text-center">
              <q-btn
                label="Buy Ticket"
                size="lg"
                color="primary"
                :ripple="{ early: true }"
                :to="{ name: 'product-detail', params: { id: product.id } }"
              />
            </div>
          </div>
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
.product-image {
  height: 550px;
}

.product-info {
  border-radius: 20px;
  border: 3px;
  background-color: $secondary;
  padding: 40px;
}
</style>
