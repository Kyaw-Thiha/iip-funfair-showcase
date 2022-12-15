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
      <q-input class="input" outlined bottom-slots v-model="name" label="Name"
        ><template v-slot:hint>
          <p>Your name used at school (English or Myanmar)</p>
        </template>
      </q-input>

      <q-select
        class="input"
        outlined
        v-model="className"
        :options="classes"
        label="Class Name"
        ><template v-slot:hint>
          <p>Select the class you are currently studying</p>
          <p>If you used to study at IIP but has finished, choose Alumni</p>
        </template></q-select
      >

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

      <div>
        <div class="text-center q-mt-lg">
          <q-btn
            class="confirm-btn"
            label="Already have an account? Sign in instead!"
            flat
            color="primary"
            size="md"
            :ripple="{ early: true }"
            @click="router.push({ name: 'sign-in' })"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'SignUpPage',
  components: {},
  setup() {
    const email = ref('');
    const password = ref('');
    const name = ref('');
    const className = ref('');

    const classes = reactive([
      'A Level',
      'Section A',
      'Section B',
      'Section C',
      'Year-8',
      'Year-9',
      'Alumni',
    ]);

    const router = useRouter();
    const confirm = () => {
      router.push({ name: 'home' });
    };

    return { email, password, name, className, classes, confirm, router };
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
