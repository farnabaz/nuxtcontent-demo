<template>
<div :class="[props.background, 'vue-level']">
<div class="level" :style="`color:${textColor}; text-align:${align}`">
    <div v-if="$slots.default"><slot/></div>
    <!-- Left side -->
    <div class="level-left" v-if="$slots.left">
        <div class="level-item">
            <ContentSlot :use="$slots.left"/>
        </div>
    </div>
     <!-- Right side -->
    <div class="level-right" v-if="$slots.right">
        <div class="level-item">
            <div>
                <ContentSlot :use="$slots.right"/>
            </div>
         
        </div>
    </div>
</div>
</div>

</template>

<script setup>
import {useSlots}  from "vue"

const slots = useSlots();

const props = defineProps({
    textColor:  String,
    background: String,
    align : String
});
</script>

<style lang="scss">
.level{
    justify-content: center;
    padding: 3rem 15%;
    .level-item{
        margin: 0 1rem
    }
    &:not(:last-child){
        margin: 0;
    }
    .level-right,.level-left{
        max-width: 100%;
    }
}

.orange{
    background: rgb(131,58,180);
    background: linear-gradient(27deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 37%, rgba(168,85,51,1) 67%);
}
.yellow{
    background: rgb(34,153,195);
background: linear-gradient(17deg, rgba(34,153,195,1) 0%, rgba(253,181,45,1) 79%);
}
</style>