<template>
  <p>{{ year }}</p>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Coti",
  computed: {
    ...mapGetters({
      year: "getYear",
    }),
  },
  methods: {},
};
</script>
