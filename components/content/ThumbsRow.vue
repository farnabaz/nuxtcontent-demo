<template>
<div class="vue-columns">
 <BrkTextBrkTitle
          title="Template 4 colonnes"
          alignment="left"
          inverted=true
        >Bulma columns + Baraka thumbnails
</BrkTextBrkTitle>
  <div class="columns">
    
     <div v-for="col in cols" :key="col" class="column m-3" >
        <slot :name="`col_${col}`" />
    </div>

  </div>

</div>
</template>

<script setup>

const props = defineProps({
    cols:  Number
});


</script>

<style lang="scss">
.vue-columns{
   background-color: black;
   padding: 1rem;
}

</style>