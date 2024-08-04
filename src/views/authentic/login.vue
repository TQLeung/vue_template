<template>
    <div>
        <h3>
            {{ counter.count }}
            counter {{ counter.doubleCount }} 
        </h3>
        Account:<input v-model="account"><br />
        Password:<input v-model="password"><br />
        <button @click="login">Submit</button><br />
        <button @click="counter.increment">Add</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { apiLogin } from '@/apis/stu/stu'
import { useAuthorityStore } from '@/stores/authority'
const counter = useCounterStore();
// counter.increment()
// console.log(counter.count);
const account = ref('13630123272')
const password = ref('123456')

const login = async () => {
    let res = await apiLogin(account.value, password.value)
    if (res.data) {
        // console.log('res', res);
        // console.log('1', res.data.data);
        const storeAuthority = useAuthorityStore();
        // console.log('1, set before', storeAuthority);
        storeAuthority.loginedToken = res.data.data.token
        // console.log('2, set after ', storeAuthority.loginedToken);
    }
}
</script>

<style></style>