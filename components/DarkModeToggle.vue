<template>
    <button
        :class="[is_dark ? 'is-dark' : '', 'button']"
        @click="$store.toggle_is_dark()"
    >
        <span class="icon" >
            <font-awesome-icon :icon="[is_dark ? 'fa-regular' : 'fa-solid', 'fa-lightbulb']" />
        </span>
    </button>
</template>

<script>
 import { mapWritableState } from 'pinia';
 import { main_store } from '~/store/main';

 export default {
     computed: {
         ...mapWritableState(main_store, ['is_dark']),
     },
 };
</script>
