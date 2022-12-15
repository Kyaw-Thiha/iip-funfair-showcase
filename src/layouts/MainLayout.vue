<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white" elevated>
      <q-toolbar class="q-py-sm">
        <q-toolbar-title>
          <q-btn
            class="text-primary"
            flat
            :dense="screen.lt.md"
            :ripple="{ early: true }"
            :to="{ name: 'home' }"
          >
            <div class="row items-center no-wrap">
              <q-avatar :size="screen.lt.md ? '48px' : '80px'">
                <img src="logo.png" />
              </q-avatar>
              <q-separator
                class="q-ml-md gt-sm"
                size="3px"
                vertical
                color="primary"
              />
              <h2 class="q-ml-md q-my-sm text-h3 gt-sm">IIP Fun Fair</h2>
            </div>
          </q-btn>
        </q-toolbar-title>

        <div v-if="!isLoggedIn">
          <q-btn
            label="Sign In"
            color="primary"
            :size="screen.lt.md ? 'md' : 'lg'"
            :ripple="{ early: true }"
            :to="{ name: 'sign-in' }"
          />
        </div>
        <div v-else>
          <q-btn
            class="q-mx-md"
            outline
            label="Login"
            color="primary"
            :size="screen.lt.md ? 'md' : 'lg'"
            :ripple="{ early: true }"
            :to="{ name: 'sign-in' }"
          />
          <q-btn
            class="q-mx-md"
            outline
            label="My Shop"
            color="primary"
            :size="screen.lt.md ? 'md' : 'lg'"
            :ripple="{ early: true }"
            :to="{ name: 'my-shop' }"
          />
          <q-btn
            label="Tickets"
            color="primary"
            :size="screen.lt.md ? 'md' : 'lg'"
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
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'MainLayout',
  components: {},
  setup() {
    const $q = useQuasar();
    const screen = $q.screen;

    const isLoggedIn = ref(true);

    return {
      screen,
      isLoggedIn,
    };
  },
});
</script>
