<template>
    <div class="card">
        <div>
            <div>{{ card.id }}</div>
            <div>Имя: {{card.name}}</div>
            <div>Статус: {{card.status}}</div>
            <div><img :src="card.image" alt=""></div>
        </div>
        <div class="card__btns">
            <my-button
                @click="$emit('remove', card)"
            >
                Удалить
            </my-button>
        </div>
     </div>
</template>

<script>
export default {
    props: {
        card: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.card {
    padding: 15px;
    border: 2px solid black;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>


