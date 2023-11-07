<template>
    <div class="navbar">
        <div @click="$router.push('/')">Rick and Morty</div>
        <div class="navbar__btns">
            <my-button @click="$router.push('/cards')">Cards</my-button>
            <my-button @click="$router.push('/about')" style="margin-left: 20px">About</my-button>
            <my-button @click="$router.push('/store')" style="margin-left: 20px">Store</my-button>
        </div>
    </div>
</template>

<script>
 export default {

 }
</script>

<style scoped>
.navbar{
    height: 50px;
    background-color: grey;
    display: flex;
    align-items: center;
    padding: 0 15px;
    cursor: default;
}
.navbar__btns{
    margin-left: auto;
}
</style>