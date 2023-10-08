<template>
  <div class="calendar-date-indicator">{{ selectedMonth }}</div>
</template>

<script>
export default {
  props: {
    selectedDate: {
      type: Object,
      required: true
    }
  },

  computed: {
    selectedMonth() {
      const be_year = this.selectedDate.year() + 543;
      return this.selectedDate.format("MMMM YYYY") + " / " + be_year;
    }
  }
};
</script>

<style scoped lang="sass">
.calendar-date-indicator
  font-size: 24px
  font-weight: 600
  color: var(--grey-00)
</style>
