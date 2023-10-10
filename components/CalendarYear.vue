<template>
    <div>
        <div v-for="row in month_rows" class="columns">
            <div v-for="m in row" class="column">
                <CalendarMonth
                    :selected-date="m"
                    :is-compact="isCompact"
                    :show-month-name="true"
                    :header-is-compact="true"
                    :is-small="true"
                />
            </div>
        </div>
    </div>
</template>

<script>
 import dayjs from "dayjs";

 export default {
     props: {
         selectedDate: {
             type: Object,
             required: true
         },

         isCompact: {
             type: Boolean,
             required: true,
         },
     },

     computed: {
         calendar_year() {
             return this.selectedDate.year();
         },

         month_rows() {
             const year = this.selectedDate.year();

             let months = [
                 [dayjs([year, 1, 1]), dayjs([year, 2, 1]), dayjs([year, 3, 1])],
                 [dayjs([year, 4, 1]), dayjs([year, 5, 1]), dayjs([year, 6, 1])],
                 [dayjs([year, 7, 1]), dayjs([year, 8, 1]), dayjs([year, 9, 1])],
                 [dayjs([year, 10, 1]), dayjs([year, 11, 1]), dayjs([year, 12, 1])],
             ];

             return months;
         },
     },
 }
</script>
