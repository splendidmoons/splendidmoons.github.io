import { defineStore } from 'pinia';

export const main_store = defineStore('main', {
    state: () => ({
        is_dark: false,
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

        toggle_dark_mode() {
            this.set_is_dark(!this.is_dark);
        },
    },
});
