<template>
  <div class="events">
    <h1>Events For Good</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
// import EventService from "@/services/EventService.js";

export default {
  name: "EventList",
  components: {
    EventCard,
  },
  // data() {
  //   return {
  //     events: null,
  //   };
  // },
  created() {
    this.$store.dispatch("fetchEvents").catch((error) => {
      this.$router.push({
        name: "ErrorDisplay",
        params: { error: error },
      });
    });
    //
    // EventService.getEvents()
    //   .then((response) => {
    //     // console.log("events:", response.data);
    //     this.events = response.data;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
  computed: {
    events() {
      return this.$store.state.events;
    },
  },
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
