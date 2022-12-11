<template>
  <div class="q-mx-md-xl q-mx-sm-md q-mx-xs-sm">
    <h3 class="q-my-md-lg q-my-sm-md q-my-xs-xs">{{ title }}</h3>
    <q-list padding>
      <q-item
        v-for="(ticket, index) in tickets"
        :key="ticket.id"
        class="q-my-md ticket"
        clickable
        v-ripple
        @click="$emit('openDialog', index)"
      >
        <q-item-section avatar>
          <q-avatar size="60px">
            <img :src="ticket.image" :alt="ticket.name" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label
            ><h6 class="q-mt-none">{{ ticket.name }}</h6>
          </q-item-label>
          <q-item-label caption lines="1">{{ ticket.id }} </q-item-label>
        </q-item-section>

        <q-item-section v-if="btnLabel != ''" side>
          <q-btn
            class="rounded-btn q-px-lg"
            :label="btnLabel"
            color="primary"
            size="lg"
            :ripple="{ early: true }"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export interface TicketInterface {
  id: string;
  image: string;
  name: string;
  openDialog: boolean;
}

export default defineComponent({
  name: 'TicketList',
  props: {
    title: String,
    btnLabel: String,
    tickets: Array<TicketInterface>,
  },
  setup() {
    return {
      slide: ref(0),
    };
  },
});
</script>

<style lang="scss" scoped>
.ticket {
  border: 3px solid black;
  border-radius: 20px;
  background-color: $secondary;
}

.rounded-btn {
  border-radius: 20px;
}
</style>
