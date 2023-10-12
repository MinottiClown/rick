<template>
    <form @submit.prevent>
        <h4>Создание карточки</h4>
        <my-input 
            v-model="card.name"
            type="text" 
            placeholder="Имя"
        />
        <my-input 
            v-model="card.status"
            type="text" 
            placeholder="Статус"
        />
        <my-button 
            style="align-self: flex-end; margin-top: 15px" 
            @click="createCard"
        >
            Создать
        </my-button>
     </form>
</template>

<script>
export default {
    data() {
        return {
            card: {
                name: '',
                status: '',
            }
        }
    },
    methods: {
        createCard() {
            this.card.id = Date.now();
            this.$emit('create', this.card)
            this.card = {
                name: '',
                status: ''
            }
        }
    }
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}

</style>