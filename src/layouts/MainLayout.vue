<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white" elevated>
      <q-toolbar class="q-py-sm">
        <q-toolbar-title>
          <q-btn
            class="text-primary"
            flat
            :ripple="{ early: true }"
            :to="{ name: 'home' }"
          >
            <div class="row items-center no-wrap">
              <q-avatar size="80px">
                <img src="logo.jpg" />
              </q-avatar>
              <h2 class="q-ml-md q-my-sm text-h3">IIP Fun Fair</h2>
            </div>
          </q-btn>
        </q-toolbar-title>

        <div v-if="!isLoggedIn">
          <q-btn
            label="Sign In"
            color="primary"
            size="lg"
            :ripple="{ early: true }"
            :to="{ name: 'sign-in' }"
          />
        </div>
        <div v-else>
          <q-btn
            class="q-mx-md"
            outline
            label="My Shop"
            color="primary"
            size="lg"
            :ripple="{ early: true }"
            :to="{ name: 'my-shop' }"
          />
          <q-btn
            label="Tickets"
            color="primary"
            size="lg"
            :ripple="{ early: true }"
            :to="{ name: 'purchased-tickets' }"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',
  components: {},
  setup() {
    const isLoggedIn = ref(true);
    return {
      isLoggedIn,
    };
  },
});
</script>
