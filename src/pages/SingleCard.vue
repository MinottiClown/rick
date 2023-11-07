<template>
    <div>
        <h1>Character {{$route.params.id}}</h1>
        <div>
            <div>{{ card.id }}</div>
            <div>Имя: {{card.name}}</div>
            <div>Статус: {{card.status}}</div>
            <div><img :src="card.image" alt=""></div>
        </div>

    </div>
</template>

<script>
import CardList from "@/components/CardList";
import axios from 'axios';
export default {
        components: {
            CardList
        },
        data() {
            return {
                card: {},
                
            } 
        },
        methods: {
            async fetchCards() {
                try {
                    // this.isCardsLoading = true;
                        const response = await axios.get (`https://rickandmortyapi.com/api/character/${this.$route.params.id}`);
                        this.card = response.data;
                        console.log(response)
                }  catch (e) {
                    console.log(e)
                }  finally {
    
                }
            },
        },
        mounted() {
            this.fetchCards();
        },
        computed: {
    
        },
        watch: {
            
        }
    }
</script>

<style scoped>

</style>