<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
// import EventService from "@/services/EventService.js";

export default {
  props: ["id"],
  // data() {
  //   return {
  //     event: null,
  //   };
  // },
  created() {
    this.$store.dispatch("fetchEvent", this.id).catch((error) => {
      this.$router.push({
        name: "ErrorDisplay",
        params: { error: error },
      });
    });
    // EventService.getEvent(this.id)
    //   .then((response) => {
    //     this.event = response.data;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
  computed: {
    event() {
      return this.$store.state.event;
    },
  },
};
</script>
