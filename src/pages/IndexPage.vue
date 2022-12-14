<template>
  <q-page>
    <section class="full-screen hero row items-center justify-evenly">
      <div class="hero-text text-center q-pa-md-lg q-pa-sm-xs q-pa-xs-xs">
        <h1 class="text-primary q-mt-none q-mb-xl q-mb-sm-md q-mb-xs-sm">
          IIP Fun Fair
        </h1>
        <h3 class="text-white q-mb-none q-mb-sm">coming Dec 21st</h3>
      </div>
    </section>

    <q-separator v-if="screen.lt.md" class="q-my-md" inset color="primary" />

    <section class="full-screen">
      <product-carousel :products="products" />
    </section>
    <section class="full-screen q-mb-xl">
      <h3 class="text-center products-title">Products</h3>
      <div class="row items-center justify-evenly">
        <q-input
          class="col-8"
          :dense="screen.lt.md"
          outlined
          v-model="searchString"
          label="Search"
        />

        <q-btn
          class="col-1 id-input-btn"
          :size="screen.lt.md ? 'md' : 'lg'"
          icon="search"
          color="primary"
          @click="search"
          :ripple="{ early: true }"
        />
      </div>
      <div
        class="row justify-around q-mt-xl"
        style="column-gap: 10px; row-gap: 60px"
      >
        <product-card
          class="col-md-3 col-sm-5 col-xs-12"
          v-for="product in selectedProducts"
          :key="product.id"
          :id="product.id"
          :image="product.image"
          :name="product.name"
          :product-type="product.productType"
          :price="product.price"
        />
      </div>
    </section>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import { useQuasar } from 'quasar';

import ProductCarousel from 'components/ProductCarousel.vue';
import ProductCard from 'components/ProductCard.vue';
import internal from 'stream';

interface Product {
  id: string;
  name: string;
  image: string;
  productType: string;
  price: number;
}

export default defineComponent({
  name: 'IndexPage',
  components: { ProductCarousel, ProductCard },
  setup() {
    const $q = useQuasar();
    const screen = $q.screen;

    const products = reactive([
      {
        id: '0',
        name: 'Happy Meal',
        image:
          'https://www.allrecipes.com/thmb/QuBtUMOkpdH27PWiVzmyqupAik0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228272_All-American-Burger-Dog_Christina_871688_original-1x1-1-8b15114941d54f2dbd3b6afbf033a9db.jpg',
        productType: 'Hot Dog',
        price: 5000,
      },
      {
        id: '1',
        name: 'Sand Witches',
        image:
          'https://recipes.timesofindia.com/thumb/60256016.cms?width=1200&height=900',
        productType: 'Cheese Sandwich',
        price: 10000,
      },
      {
        id: '2',
        name: 'Burley Burger',
        image:
          'https://www.aspicyperspective.com/wp-content/uploads/2020/07/best-hamburger-patties-1.jpg',
        productType: 'Hamburger',
        price: 5000,
      },
    ]);

    var selectedProducts = reactive(JSON.parse(JSON.stringify(products)));

    const searchString = ref('');
    const search = () => {
      if (searchString.value != '') {
        //Filtering the products based on search string
        const filteredProducts = products.filter((product) => {
          const lowerProductName = product.name.toLowerCase();
          const lowerProductType = product.productType.toLowerCase();

          return (
            lowerProductName.includes(searchString.value) ||
            lowerProductType.includes(searchString.value)
          );
        });

        //Removing all initial products
        selectedProducts.forEach((item: Product) => selectedProducts.pop());
        selectedProducts.pop(); //Removing the last remaining element

        //Adding back the filtered products
        filteredProducts.forEach((item) => selectedProducts.push(item));
      } else {
        //Removing all initial products
        selectedProducts.forEach((item: Product) => selectedProducts.pop());
        selectedProducts.pop(); //Removing the last remaining element

        //Adding back the filtered products
        products.forEach((item) => selectedProducts.push(item));
      }
    };

    return { screen, products, selectedProducts, searchString, search };
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
  //background-image: url('hero.jpg');
  background-image: url('https://images.unsplash.com/photo-1533900298318-6b8da08a523e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
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

.products-title {
  margin-top: 52px;
  margin-bottom: 80px;

  @media screen and (max-width: $breakpoint-sm-max) {
    margin-top: 48px;
    margin-bottom: 60px;
  }

  @media screen and (max-width: $breakpoint-sm-max) {
    margin-top: 48px;
    margin-bottom: 40px;
  }
}
</style>
