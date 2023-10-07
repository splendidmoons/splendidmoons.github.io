<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <NuxtLink to="/" class="navbar-item">
                <img src="~/assets/images/logo-bw.svg" alt="Splendid Moons" width="40" height="40" />
            </NuxtLink>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <NuxtLink to="/" class="navbar-item">
                    Splendid Moons
                </NuxtLink>
                <span class="navbar-item">
                    <em>uposatha moonday calendar</em>
                </span>
            </div>

            <div class="navbar-end">
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        <img src="~/assets/images/circle-info-solid.svg" alt="Info" width="40" height="40" />
                        Info
                    </a>

                    <div class="navbar-dropdown">
                        <NuxtLink to="/add-to-google-calendar" class="navbar-item"> Add To Google Calendar </NuxtLink>
                        <NuxtLink to="/downloads" class="navbar-item"> Downloads (PDF, XLSX) </NuxtLink>
                        <NuxtLink to="/how-to-calculate-uposathas" class="navbar-item"> How to Calculate Uposathas </NuxtLink>
                        <NuxtLink to="/import-in-python" class="navbar-item"> Import in Python Apps </NuxtLink>
                        <NuxtLink to="/contact" class="navbar-item"> Contact </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
