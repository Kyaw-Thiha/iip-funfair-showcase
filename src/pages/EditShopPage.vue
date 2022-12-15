<template>
  <div class="full-screen form-container row items-center justify-evenly">
    <div>
      <h2 class="heading">{{ id != undefined ? 'Create' : 'Edit' }} Product</h2>
      <q-input
        class="input"
        outlined
        bottom-slots
        v-model="product.name"
        label="Name"
        ><template v-slot:hint> <p>Unique name of your product</p> </template>
      </q-input>
      <q-input
        class="input"
        outlined
        bottom-slots
        v-model="product.nameCode"
        label="Name Code"
        ><template v-slot:hint>
          <p>
            Unique 3-words name code. Eg: 'Good Foods' product would be 'GFD'
          </p>
          <p>Used when creating ticket for the product</p>
        </template>
      </q-input>
      <q-input
        class="input"
        outlined
        bottom-slots
        v-model="product.description"
        label="Description"
        ><template v-slot:hint> <p>Description of your product</p> </template>
      </q-input>
      <q-input
        class="input"
        outlined
        bottom-slots
        v-model="product.productType"
        :rules="[(val) => val.length != 3 || 'Please use 3 characters']"
        label="Product Type"
        ><template v-slot:hint>
          <p>What is your product?</p>
          <p>Eg: Beef Hamburger / Photo Booth / Math Quiz</p>
        </template>
      </q-input>
      <q-input
        class="input"
        outlined
        bottom-slots
        v-model="product.saleDate"
        label="Product Type"
        ><template v-slot:hint>
          <p>When are you selling?</p>
          <p>20th or 21st</p>
        </template>
      </q-input>
      <q-input
        class="input"
        outlined
        bottom-slots
        v-model="product.price"
        label="Price"
        ><template v-slot:hint>
          <p>Price of your product in MMK</p>
        </template>
      </q-input>
      <q-input
        class="input"
        outlined
        bottom-slots
        v-model="product.image"
        label="Image"
        ><template v-slot:hint>
          <p>Main hero image of your product</p>
        </template>
      </q-input>
      <div class="text-center">
        <q-btn
          class="confirm-btn"
          label="Confirm"
          color="primary"
          size="lg"
          :ripple="{ early: true }"
          @click="confirm"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  name: 'EditShopPage',
  components: {},
  setup() {
    const route = useRoute();

    //Checking for product id in the route
    const id = ref('');
    onMounted(() => {
      if (route.params.id == undefined) {
        id.value = '';
      } else {
        id.value = route.params.id as string;
      }
    });

    const product = reactive({
      name: '',
      nameCode: '',
      description: '',
      productType: '',
      price: 0.0,
      image: '',
      saleDate: '',
    });

    const router = useRouter();
    const confirm = () => {
      router.push({ name: 'my-shop' });
    };

    return { product, id, confirm };
  },
});
</script>

<style lang="scss" scoped>
.form-container {
  margin-bottom: 20vh;
}

.heading {
  margin-bottom: 80px;

  @media screen and (max-width: $breakpoint-xs-max) {
    margin-bottom: 50px;
    text-align: center;
  }
}

.input {
  min-width: 500px;
  margin: 40px 0;

  p {
    margin: 0 0 8px;
  }

  @media screen and (max-width: $breakpoint-xs-max) {
    min-width: 300px;
    margin: 50px 0;
  }
}

.confirm-btn {
  margin-top: 50px;
  width: 450px;

  @media screen and (max-width: $breakpoint-sm-max) {
    width: 350px;
  }

  @media screen and (max-width: $breakpoint-xs-max) {
    width: 300px;
  }
}
</style>
