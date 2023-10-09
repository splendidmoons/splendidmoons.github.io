<template>
  <div class="calendar-mode-selector">
    <button :class="[is_dark ? 'is-dark' : '', 'button']" >
      <label class="checkbox">
        <input type="checkbox">
        Compact
      </label>
    </button>
  </div>
</template>

<script>
 import dayjs from "dayjs";
 import { mapWritableState } from 'pinia';
 import { main_store } from '~/store/main';

 export default {
   name: "CalendarModeSelector",

   computed: {
     ...mapWritableState(main_store, ['is_dark']),
   },
 };
</script>

<style scoped lang="sass">
 .calendar-mode-selector
   display: flex
   justify-content: space-between

 .calendar-mode-selector > *
   cursor: pointer
   user-select: none
</style>
