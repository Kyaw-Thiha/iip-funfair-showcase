<template>
  <div class="q-mb-xl">
    <h2 class="text-center text-primary">Tickets</h2>
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
        Pay the ticket to {{ getMembers(ticket.members) }}
      </h6>
      <h6 class="q-mt-sm q-mb-lg">
        Let them scan this QR code to validate the payment.
      </h6>
      <div class="row items-center justify-evenly">
        <QrcodeVue :value="ticket.id" :size="200" level="H" />
      </div>
      <p class="q-mt-md">
        Note: Refresh the page to see ticket payment updated
      </p>
    </confirmDialog>

    <!-- Dialogs for the paid tickets -->
    <confirmDialog
      title="Ticket Payment"
      v-for="ticket in paidTickets"
      :key="ticket.id"
      v-model="ticket.openDialog"
    >
      <h6 class="q-mt-sm q-mb-lg">Go to the shop and scan this QR code.</h6>
      <div class="row items-center justify-evenly">
        <QrcodeVue :value="ticket.id" :size="200" level="H" />
      </div>
      <p class="q-mt-md">Note: Refresh the page to see ticket usage updated</p>
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
    const testMembers = [
      {
        name: 'Kevin',
        class: 'A Level',
      },
      {
        name: 'Sai Sai',
        class: 'A Level',
      },
      {
        name: 'Hnin Oo',
        class: 'A Level',
      },
      {
        name: 'Yadanar',
        class: 'A Level',
      },
    ];
    const unpaidTickets = reactive([
      {
        name: 'Good Foods',
        image:
          'https://www.allrecipes.com/thmb/QuBtUMOkpdH27PWiVzmyqupAik0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228272_All-American-Burger-Dog_Christina_871688_original-1x1-1-8b15114941d54f2dbd3b6afbf033a9db.jpg',
        id: 'ALVL-HFS-30078',
        members: testMembers,
        openDialog: false,
      },
      {
        name: 'Good Foods',
        image:
          'https://www.allrecipes.com/thmb/QuBtUMOkpdH27PWiVzmyqupAik0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228272_All-American-Burger-Dog_Christina_871688_original-1x1-1-8b15114941d54f2dbd3b6afbf033a9db.jpg',
        id: 'ALVL-HFS-30382',
        members: testMembers,
        openDialog: false,
      },
      {
        name: 'Good Foods',
        image:
          'https://www.allrecipes.com/thmb/QuBtUMOkpdH27PWiVzmyqupAik0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228272_All-American-Burger-Dog_Christina_871688_original-1x1-1-8b15114941d54f2dbd3b6afbf033a9db.jpg',
        id: 'ALVL-HFS-37812',
        members: testMembers,
        openDialog: false,
      },
    ]);

    const paidTickets = reactive([
      {
        name: 'Good Foods',
        image:
          'https://www.allrecipes.com/thmb/QuBtUMOkpdH27PWiVzmyqupAik0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228272_All-American-Burger-Dog_Christina_871688_original-1x1-1-8b15114941d54f2dbd3b6afbf033a9db.jpg',
        id: 'ALVL-HFS-30079',
        members: testMembers,
        openDialog: false,
      },
      {
        name: 'Good Foods',
        image:
          'https://www.allrecipes.com/thmb/QuBtUMOkpdH27PWiVzmyqupAik0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228272_All-American-Burger-Dog_Christina_871688_original-1x1-1-8b15114941d54f2dbd3b6afbf033a9db.jpg',
        id: 'ALVL-HFS-30383',
        members: testMembers,
        openDialog: false,
      },
      {
        name: 'Good Foods',
        image:
          'https://www.allrecipes.com/thmb/QuBtUMOkpdH27PWiVzmyqupAik0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228272_All-American-Burger-Dog_Christina_871688_original-1x1-1-8b15114941d54f2dbd3b6afbf033a9db.jpg',
        id: 'ALVL-HFS-37813',
        members: testMembers,
        openDialog: false,
      },
    ]);

    const usedTickets = reactive([
      {
        name: 'Good Foods',
        image:
          'https://www.allrecipes.com/thmb/QuBtUMOkpdH27PWiVzmyqupAik0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228272_All-American-Burger-Dog_Christina_871688_original-1x1-1-8b15114941d54f2dbd3b6afbf033a9db.jpg',
        id: 'ALVL-HFS-37813',
        members: testMembers,
        openDialog: false,
      },
    ]);

    const openUnpaidDialog = (index) => {
      unpaidTickets[index].openDialog = true;
    };

    const openPaidDialog = (index) => {
      paidTickets[index].openDialog = true;
    };

    const getMembers = (members) => {
      var memberNames = '';

      for (var i = 0; i < members.length; i++) {
        const member = members[i];

        if (i == 0) {
          memberNames = ` ${member.name} (${member.class})`;
        } else if (i < members.length - 1) {
          memberNames = `${memberNames}, ${member.name} (${member.class})`;
        } else {
          memberNames = `${memberNames} or ${member.name} (${member.class})`;
        }
      }

      return memberNames;
    };

    return {
      unpaidTickets,
      paidTickets,
      usedTickets,
      openUnpaidDialog,
      openPaidDialog,

      getMembers,
    };
  },
});
</script>
