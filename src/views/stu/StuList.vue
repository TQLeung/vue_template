<template>
    <div>
        <div style="width: 200px; word-wrap: break-word;">{{ authority.loginedToken }}</div>
        <button @click="clearLogin">clear</button><br/>
        <input v-model="curName" @keyup.enter="add" />
        <div>{{ curName }} {{ counter.count }}</div>
        <ul>
            <li v-for="(item, index) in list" :key="index">
                {{ item.name }} {{ item.birthday }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
const curName = ref('')
import { useCounterStore } from '@/stores/counter'
import { useAuthorityStore } from '@/stores/authority'
const counter = useCounterStore();
const authority = useAuthorityStore();
const clearLogin = () => {
    authority.loginedToken = 'clear'
}
const list = reactive([
    { name: "lily", birthday: "2023-10-25" },
    { name: "nice", birthday: "2024-08-16" },
    { name: "nice", birthday: "2022-07-01" },
])
const add = () => {
    list.push({ name: curName.value, birthday: "2023-10-01" })
    console.log(curName.value)
    curName.value = ''
}
</script>

<style></style>