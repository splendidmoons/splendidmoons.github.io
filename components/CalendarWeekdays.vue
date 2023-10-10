<template>
  <ol class="day-of-week">
    <li v-for="weekday in weekdays" :key="weekday">{{ weekday }}</li>
  </ol>
</template>

<script>
 const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
 const WEEKDAYS_SHORT = ["M", "T", "W", "T", "F", "S", "S"];

 export default {
   props: {
     headerIsCompact: {
       type: Boolean,
       required: false,
       default: false,
     },
   },

   computed: {
     weekdays() {
       if (this.headerIsCompact) {
         return WEEKDAYS_SHORT;
       } else {
         return WEEKDAYS;
       }
     }
   }
 };
</script>

<style scoped lang="sass">
 .day-of-week
   display: grid
   grid-template-columns: repeat(7, 1fr)
   font-size: 14px
   padding-bottom: 2px
   padding-top: 2px
   margin-top: 5px
   margin-bottom: 20px

 .day-of-week
   color: #fff
   background-color: rgba(0, 43, 54, 0.7)

 .is-dark .day-of-week
   color: lighten(black, 70%)
   background-color: rgba(0, 43, 54, 0.7)

 .day-of-week > *
   text-align: center
</style>
