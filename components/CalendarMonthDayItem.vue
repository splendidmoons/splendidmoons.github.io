<template>
  <li
    class="calendar-day"
    :class="{
      'calendar-day--not-current': !day.isCurrentMonth,
      'calendar-day--today': isToday
    }"
  >
    <span>{{ label }}</span>
  </li>
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "CalendarMonthDayItem",

  props: {
    day: {
      type: Object,
      required: true
    },

    isCurrentMonth: {
      type: Boolean,
      default: false
    },

    isToday: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    label() {
      return dayjs(this.day.date).format("D");
    }
  }
};
</script>

<style scoped lang="sass">
.calendar-day
  position: relative
  min-height: 100px
  font-size: 16px
  padding: 5px
  text-align: center

.calendar-day > span
  display: flex
  justify-content: center
  align-items: center

.calendar-day
  color: lighten(black, 20%)

.is-dark .calendar-day
  color: lighten(black, 90%)

.calendar-day--not-current
  color: lighten(black, 80%)

.is-dark .calendar-day--not-current
  color: lighten(black, 50%)

.calendar-day--today
  padding-top: 4px

.calendar-day--today > span
  border-radius: 9999px
  color: #fff
  background-color: lighten(black, 50%)
</style>
