<template>
    <div id="page-wrap" class="container">
        <AppNav />
        <section id="content-wrap" class="section">
            <slot />
        </section>
    </div>
</template>

<script>
 import { mapWritableState } from 'pinia';
 import { main_store } from '~/store/main';

 export default {
     computed: {
         ...mapWritableState(main_store, ['is_dark']),
     },

     mounted() {
         if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
             main_store().set_is_dark(true);
         }
     },
 };
</script>
