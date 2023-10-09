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
         let is_dark_str = localStorage.getItem('is_dark');
         console.log(is_dark_str);

         if (is_dark_str !== 'undefined' && is_dark_str !== null) {
             main_store().set_is_dark((is_dark_str === 'true'));

         } else {
             let is_dark = false;
             if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                 is_dark = true;
             }
             main_store().set_is_dark(is_dark);
             localStorage.setItem('is_dark', is_dark.toString());
         }
     },
 };
</script>
