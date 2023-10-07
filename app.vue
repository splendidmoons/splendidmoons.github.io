<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const title = ref('Splendid Moons')
const description = ref('Uposatha Moonday Calendar')

useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
})
</script>
