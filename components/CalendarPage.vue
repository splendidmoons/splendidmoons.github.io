<template>
    <div>
        <h1>Calendar {{ ce_year }} / {{ be_year }} </h1>
    </div>
</template>

<script>
function ce_year() {
    return new Date().getFullYear();
}

function be_year() {
    return ce_year() + 543;
}

export default {

     data() {
         return {
             ce_year: ce_year(),
             be_year: be_year(),
         }
     }
}
</script>
