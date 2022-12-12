<template>
  <div class="full-screen form-container row items-center justify-evenly">
    <div>
      <h2 class="heading text-center">Sign In</h2>
      <q-input class="input" outlined bottom-slots v-model="email" label="Email"
        ><template v-slot:hint> <p>Email Address of your account</p> </template>
      </q-input>
      <q-input
        class="input"
        outlined
        bottom-slots
        type="password"
        v-model="password"
        label="Password"
        ><template v-slot:hint>
          <p>Password of your account</p>
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
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'SignInPage',
  components: {},
  setup() {
    const email = ref('');
    const password = ref('');

    const router = useRouter();
    const confirm = () => {
      router.push({ name: 'home' });
    };

    return { email, password, confirm };
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
    margin: 20px 0;
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
