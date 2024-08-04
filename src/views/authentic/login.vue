<template>
    <div>
        <h3>
            {{ counter.count }}
            counter {{ counter.doubleCount }} 
        </h3>
        Account:<input v-model="account"><br />
        Password:<input v-model="password"><br />
        <button @click="login">Submit</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { apiLogin } from '@/apis/stu/stu'
const counter = useCounterStore();
// counter.increment()
// console.log(counter.count);
const account = ref('13630123272')
const password = ref('123456')

const login = async () => {
    let res = await apiLogin(account.value, password.value)
    console.log(res.data);
}
</script>

<style></style>