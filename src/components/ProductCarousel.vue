<template>
  <q-carousel
    class="full-screen"
    :navigation="screen.gt.md"
    animated
    transition-prev="jump-right"
    transition-next="jump-left"
    swipeable
    infinite
    autoplay
    control-color="primary"
    v-model="slide"
    :ref="carousel"
  >
    <template v-slot:control v-if="screen.gt.md">
      <q-carousel-control class="flex flex-center" position="left">
        <q-btn
          flat
          round
          text-color="black"
          size="xl"
          dense
          icon="keyboard_arrow_left"
          @click="carousel.previous()"
        />
      </q-carousel-control>
      <q-carousel-control class="flex flex-center" position="right">
        <q-btn
          flat
          round
          text-color="black"
          size="xl"
          dense
          icon="keyboard_arrow_right"
          @click="carousel.previous()"
        />
      </q-carousel-control>
    </template>

    <q-carousel-slide
      v-for="(product, index) in products"
      :key="index"
      :name="index"
      :img-src="screen.gt.md ? '' : product.image"
    >
      <!-- For laptop screen -->

      <div class="row" v-if="screen.gt.md">
        <div class="col-md-6 col-sm-12">
          <q-img
            class="product-image"
            :src="product.image"
            :alt="product.name"
          />
        </div>

        <div class="col-md-6 col-sm-12">
          <div class="row items-center justify-evenly full-height">
            <div class="product-info">
              <h1 class="text-primary text-center q-my-sm q-pa-none">
                {{ product.name }}
              </h1>
              <h3 class="q-mt-lg text-center">
                {{ product.productType }}
              </h3>
              <div class="text-center q-mt-xl">
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
      </div>

      <!-- For mobile/tablet screen -->

      <div v-else class="absolute-full flex flex-center q-mx-md">
        <div class="product-info">
          <h2 class="q-my-sm text-center">{{ product.name }}</h2>
          <h5 class="product-type q-mt-md">{{ product.productType }}</h5>
          <div class="q-mt-xl text-center">
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
    </q-carousel-slide>
  </q-carousel>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

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
    const $q = useQuasar();
    const screen = $q.screen;

    const carousel = ref();

    return {
      slide: ref(0),
      carousel,
      screen,
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
  padding: 40px;
  background-color: $secondary;

  @media screen and (max-width: $breakpoint-sm-max) {
    padding: 40px 80px;
    background-color: rgba($color: $secondary, $alpha: 0.8);
  }

  @media screen and (max-width: $breakpoint-xs-max) {
    padding: 0 20px 20px;
    background-color: rgba($color: $secondary, $alpha: 0.8);
  }

  .product-type {
    display: inline-block;
    border: 3px solid $primary;
    border-radius: 20px;
    padding: 5px 10px;
  }
}
</style>
