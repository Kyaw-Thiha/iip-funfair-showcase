<template>
  <div class="q-mb-xl">
    <h2 class="text-center text-primary">Tickets</h2>

    <div class="text-center q-my-xl">
      <q-btn
        class="manage-ticket-btn"
        label="Manage Tickets"
        size="xl"
        color="primary"
        :ripple="{ early: true }"
        :to="{ name: 'ticket-management' }"
      />
    </div>

    <section class="q-mb-xl">
      <ticket-list
        title="Unpaid"
        btnLabel="Pay"
        :tickets="unpaidTickets"
        @openDialog="openUnpaidDialog"
      />
    </section>

    <section>
      <ticket-list
        title="Paid"
        btnLabel="Use"
        :tickets="paidTickets"
        @openDialog="openPaidDialog"
      />
    </section>

    <section>
      <ticket-list title="Used" btnLabel="" :tickets="usedTickets" />
    </section>

    <!-- Dialogs for the unpaid tickets -->
    <confirmDialog
      title="Ticket Payment"
      v-for="ticket in unpaidTickets"
      :key="ticket.id"
      v-model="ticket.openDialog"
    >
      <h6 class="q-mt-sm">
        Scan the QR code through ticket management once the purchase is
        completed
      </h6>
      <div class="row items-center justify-evenly">
        <QrcodeVue :value="ticket.id" :size="200" level="H" />
      </div>
    </confirmDialog>

    <!-- Dialogs for the paid tickets -->
    <confirmDialog
      title="Ticket Payment"
      v-for="ticket in paidTickets"
      :key="ticket.id"
      v-model="ticket.openDialog"
    >
      <h6 class="q-mt-sm q-mb-lg">
        Scan the QR code through ticket management once the ticket has been used
      </h6>
      <div class="row items-center justify-evenly">
        <QrcodeVue :value="ticket.id" :size="200" level="H" />
      </div>
    </confirmDialog>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue';
import QrcodeVue from 'qrcode.vue';
import TicketList from 'src/components/TicketList.vue';
import confirmDialog from 'components/ConfirmDialog.vue';

export default defineComponent({
  name: 'PurchasedTicketsPage',
  components: { QrcodeVue, TicketList, confirmDialog },
  setup() {
    const unpaidTickets = reactive([
      {
        name: 'One One',
        image:
          'https://www.allrecipes.com/thmb/QuBtUMOkpdH27PWiVzmyqupAik0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228272_All-American-Burger-Dog_Christina_871688_original-1x1-1-8b15114941d54f2dbd3b6afbf033a9db.jpg',
        id: 'A Level',

        openDialog: false,
      },
      {
        name: 'Htut Myat Min',
        image:
          'https://www.allrecipes.com/thmb/QuBtUMOkpdH27PWiVzmyqupAik0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228272_All-American-Burger-Dog_Christina_871688_original-1x1-1-8b15114941d54f2dbd3b6afbf033a9db.jpg',
        id: 'A Level',

        openDialog: false,
      },
      {
        name: 'Win Hein',
        image:
          'https://www.allrecipes.com/thmb/QuBtUMOkpdH27PWiVzmyqupAik0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228272_All-American-Burger-Dog_Christina_871688_original-1x1-1-8b15114941d54f2dbd3b6afbf033a9db.jpg',
        id: 'Section D2',

        openDialog: false,
      },
    ]);

    const paidTickets = reactive([
      {
        name: 'Zyla',
        image:
          'https://www.allrecipes.com/thmb/QuBtUMOkpdH27PWiVzmyqupAik0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228272_All-American-Burger-Dog_Christina_871688_original-1x1-1-8b15114941d54f2dbd3b6afbf033a9db.jpg',
        id: 'Section D2',

        openDialog: false,
      },
      {
        name: 'Kevin',
        image:
          'https://www.allrecipes.com/thmb/QuBtUMOkpdH27PWiVzmyqupAik0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228272_All-American-Burger-Dog_Christina_871688_original-1x1-1-8b15114941d54f2dbd3b6afbf033a9db.jpg',
        id: 'Section E(Emerald)',

        openDialog: false,
      },
      {
        name: 'Rosey',
        image:
          'https://www.allrecipes.com/thmb/QuBtUMOkpdH27PWiVzmyqupAik0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228272_All-American-Burger-Dog_Christina_871688_original-1x1-1-8b15114941d54f2dbd3b6afbf033a9db.jpg',
        id: 'Section F(Diamond)',

        openDialog: false,
      },
    ]);

    const usedTickets = reactive([
      {
        name: 'Yamin',
        image:
          'https://www.allrecipes.com/thmb/QuBtUMOkpdH27PWiVzmyqupAik0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228272_All-American-Burger-Dog_Christina_871688_original-1x1-1-8b15114941d54f2dbd3b6afbf033a9db.jpg',
        id: 'Section F(Diamond)',

        openDialog: false,
      },
    ]);

    const openUnpaidDialog = (index) => {
      unpaidTickets[index].openDialog = true;
    };

    const openPaidDialog = (index) => {
      paidTickets[index].openDialog = true;
    };

    return {
      unpaidTickets,
      paidTickets,
      usedTickets,
      openUnpaidDialog,
      openPaidDialog,
    };
  },
});
</script>
<style lang="scss" scoped>
.manage-ticket-btn {
  width: 80%;

  @media screen and (max-width: $breakpoint-xs-max) {
    width: 250px;
  }
}
</style>
