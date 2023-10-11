<template>
    <nav
        :class="[is_dark ? 'is-dark' : '', 'navbar']"
        role="navigation" aria-label="main navigation"
    >
        <div class="navbar-brand">
            <NuxtLink to="/" class="navbar-item">
                <img src="~/assets/images/logo-bw.svg" alt="Splendid Moons" width="40" height="40" />
            </NuxtLink>

            <a
                :class="[navbar_is_active ? 'is-active' : '', 'navbar-burger']"
                role="button"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarMenuTarget"
                @click="toggleNavbar"
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div
            id="navbarMenuTarget"
            :class="[navbar_is_active ? 'is-active' : '', 'navbar-menu']"
        >
            <div class="navbar-start">
                <NuxtLink to="/" class="navbar-item">
                    Splendid Moons
                </NuxtLink>
                <span class="navbar-item">
                    <em>uposatha moonday calendar</em>
                </span>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <DarkModeToggle />
                </div>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        <span class="icon-text">
                            <span class="icon">
                                <font-awesome-icon icon="fa-solid fa-circle-info" />
                            </span>
                            <span>Info</span>
                        </span>
                    </a>

                    <div class="navbar-dropdown">
                        <NuxtLink to="/add-to-google-calendar" class="navbar-item"> Add To Google Calendar </NuxtLink>
                        <NuxtLink to="/downloads" class="navbar-item"> Downloads (PDF, XLSX) </NuxtLink>
                        <NuxtLink to="/navigation" class="navbar-item"> Navigation </NuxtLink>
                        <NuxtLink to="/how-to-calculate-uposathas" class="navbar-item"> How to Calculate Uposathas </NuxtLink>
                        <NuxtLink to="/import-in-python" class="navbar-item"> Import in Python Apps </NuxtLink>
                        <NuxtLink to="/about" class="navbar-item"> About </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
 import { mapWritableState } from 'pinia';
 import { main_store } from '~/store/main';

 export default {
     data() {
         return {
             navbar_is_active: false,
         };
     },

     computed: {
         ...mapWritableState(main_store, ['is_dark']),
     },

     methods: {
         toggleNavbar() {
             this.navbar_is_active = !this.navbar_is_active;
         },
     }
 };
</script>
