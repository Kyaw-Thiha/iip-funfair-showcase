<template>
  <q-page>
    <section class="full-screen hero row items-center justify-evenly">
      <div class="hero-text text-center q-pa-lg">
        <h1 class="text-primary q-mt-none q-mb-md">IIP Fun Fair</h1>
        <h3 class="text-white q-mb-none q-mb-sm">coming Dec 21st</h3>
      </div>
    </section>
    <section class="full-screen">
      <product-carousel :products="products" />
    </section>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

import ProductCarousel from 'components/ProductCarousel.vue';

export default defineComponent({
  name: 'IndexPage',
  components: { ProductCarousel },
  setup() {
    const products = reactive([
      {
        id: '0',
        name: 'Happy Meal',
        image:
          'https://www.allrecipes.com/thmb/QuBtUMOkpdH27PWiVzmyqupAik0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228272_All-American-Burger-Dog_Christina_871688_original-1x1-1-8b15114941d54f2dbd3b6afbf033a9db.jpg',
        productType: 'Hot Dog',
      },
      {
        id: '1',
        name: 'Sand Witches',
        image:
          'https://recipes.timesofindia.com/thumb/60256016.cms?width=1200&height=900',
        productType: 'Cheese Sandwich',
      },
      {
        id: '2',
        name: 'Burley Burger',
        image:
          'https://www.aspicyperspective.com/wp-content/uploads/2020/07/best-hamburger-patties-1.jpg',
        productType: 'Hamburger',
      },
    ]);
    return { products };
  },
});
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero::before {
  content: '';
  opacity: 0.8;
  background-image: url('hero.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
}

.hero-text {
  backdrop-filter: blur(8px);
  border-radius: 25px;
}
</style>
