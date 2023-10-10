import { defineStore } from 'pinia';
import mahanikaya from '~/assets/mahanikaya.json';
import year_types from '~/assets/year_types.json';

export const main_store = defineStore('main', {
    state: () => ({
        is_dark: false,
        events: mahanikaya,
        year_types: year_types,
    }),

    actions: {
        set_is_dark(val: boolean) {
            this.is_dark = val;
            localStorage.setItem('is_dark', this.is_dark.toString());

            if (this.is_dark) {
                document.body.classList.add('is-dark');
            } else {
                document.body.classList.remove('is-dark');
            }
        },

        toggle_is_dark() {
            this.set_is_dark(!this.is_dark);
        },
    },
});
