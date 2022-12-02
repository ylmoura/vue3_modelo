<script setup>
import {ref} from 'vue'
const count = ref(0)

function incrementCount () {
    count.value++ 
}

const decrementCount = ()=> count.value--
</script>



<template>
    <h1> index books</h1>
    <h4> valor é igual {{count}}</h4>
    <button @click="incrementCount" :disabled="count>=10" >Increment count </button>
    <button @click="decrementCount" :disabled="count<1">Decrement count</button>
</template>