<template>
    <div>
        <h3>
            {{ counter.count }}
            counter {{ counter.doubleCount }} 
        </h3>
        Account:<input v-model="account"><br />
        Password:<input v-model="password"><br />
        <button @click="counter.increment">Submit</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore();
// counter.increment()
// console.log(counter.count);
const account = ref('')
const password = ref('')
</script>

<style></style>