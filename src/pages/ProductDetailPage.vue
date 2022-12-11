<template>
  <!--Vue Starport-->
  <div class="q-mb-xl">
    <section
      class="full-screen product"
      :style="{ '--imageURL': `url('${product.image}')` }"
    >
      <div class="q-mx-md-xl q-mx-sm-lg q-mx-xs-sm">
        <h2 class="text-primary">{{ product.name }}</h2>
        <h5>{{ product.description }}</h5>
        <h4 class="q-mt-md-xl q-mt-sm-lg q-mt-xs-md">
          Price: {{ product.price }}
        </h4>
        <q-btn
          class="float-right q-my-md"
          label="Buy Ticket"
          size="xl"
          color="primary"
          :ripple="{ early: true }"
        />
      </div>
    </section>
    <section class="full-screen">
      <h3 class="text-center q-mb-xl">Members</h3>
      <div class="row q-mx-lg q-mx-sm-sm">
        <div
          class="col-md-3 col-sm-4 col-xs-12 q-gutter-sm q-mb-xl"
          v-for="(member, index) in product.members"
          :key="index"
        >
          <div class="row items-center justify-evenly">
            <q-avatar size="128px">
              <img :src="member.photo" :alt="member.name"
            /></q-avatar>

            <h4 class="q-mb-sm q-mt-lg q-mx-none col-12 text-center">
              {{ member.name }}
            </h4>
            <h6
              class="member-class q-py-xs q-px-sm q-mt-md-lg q-mt-sm-md q-mt-xs-sm inline-block"
            >
              {{ member.class }}
            </h6>
          </div>
        </div>
      </div>
      <div class="q-mt-lg text-center">
        <q-btn
          class="buy-ticket-btn q-mt-xl"
          label="Buy Ticket"
          size="xl"
          color="primary"
          :ripple="{ early: true }"
          rounded
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'ProductDetailPage',
  components: {},
  setup() {
    const product = reactive({
      name: 'Good Foods',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      price: 5000.0,
      image:
        'https://www.allrecipes.com/thmb/QuBtUMOkpdH27PWiVzmyqupAik0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228272_All-American-Burger-Dog_Christina_871688_original-1x1-1-8b15114941d54f2dbd3b6afbf033a9db.jpg',
      members: [
        {
          name: 'Kevin',
          photo: 'https://cdn.quasar.dev/img/avatar4.jpg',
          class: 'A Level',
        },
        {
          name: 'Sai Sai',
          photo: 'https://cdn.quasar.dev/img/avatar1.jpg',
          class: 'A Level',
        },
        {
          name: 'Hnin Oo',
          photo: 'https://cdn.quasar.dev/img/avatar3.jpg',
          class: 'A Level',
        },
        {
          name: 'Yadanar',
          photo: 'https://cdn.quasar.dev/img/avatar2.jpg',
          class: 'A Level',
        },
      ],
    });

    return {
      product,
    };
  },
});
</script>

<style lang="scss" scoped>
.product {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product::before {
  content: '';
  opacity: 0.6;
  //background-image: url('https://recipes.timesofindia.com/thumb/60256016.cms?width=1200&height=900');
  background-image: var(--imageURL);
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

.member-photo-container {
  width: 100%;
}
.member-class {
  border: 3px solid black;
  border-radius: 20px;
}

.buy-ticket-btn {
  width: 400px;

  @media screen and (max-width: $breakpoint-xs-max) {
    width: 250px;
  }
}
</style>
