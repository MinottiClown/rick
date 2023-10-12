<template>
<div class="app">
    <h1>Рик и Морти</h1>
    <my-input
        v-model="searchQuery"
        placeholder="Поиск..."
    />

    <div class="app__btns">
        <my-button
            @click="showDialog"
            
        >
            Создать карточку
        </my-button>
        <my-select
            v-model="selectedSort"
            :options="sortOptions"
        />
    </div>
    
    <my-dialog v-model:show="dialogVisible">
        <card-form
            @create="createCard"
        />
    </my-dialog>
    
    <card-list 
        :cards="sortedAndSearchedCards"
        @remove="removeCard"
        v-if="!isCardsLoading"
    />
    <div v-else>Идёт загрузка...</div>
    <div ref="observer" class="observer"></div>
</div>
</template>

<script>
import CardList from "@/components/CardList";
import CardForm from "@/components/CardForm";
import MyButton from "@/components/UI/MyButton.vue";
import axios from 'axios'; 
export default {
    components: {
        CardList, CardForm, MyButton,
    },
    data() {
        return {
            cards: [],
            dialogVisible: false,
            isCardsLoading: false,
            searchQuery: '',
            selectedSort: '',
            // page: 1,
            // limit: 20,
            sortOptions: [
                {value: 'name', name: 'По имени'},
                {value: 'status', name: 'По статусу'},
            ]
        } 
    },
    methods: {
        createCard(card) {
            this.cards.push(card);
            this.dialogVisible = false;
        },
        removeCard(card) {
            this.cards = this.cards.filter(p => p.id !== card.id )
        },
        showDialog() {
            this.dialogVisible = true;
        },
        async fetchCards() {
            try {
                this.isCardsLoading = true;
                    const response = await axios.get ('https://rickandmortyapi.com/api/character', {
                        // params: {
                        //     _page: this.page,
                        //     _limit: this.limit,
                        // }
                    });
                    this.cards = response.data.results;
                    this.isCardsLoading = false;
                    console.log(response)
            }  catch (e) {
                alert('error')
            }  finally {

            }
        },
        async loadMoreCards() {
            try {
                this.page += 1;
                    const response = await axios.get ('https://rickandmortyapi.com/api/character', {
                        // params: {
                        //     _page: this.page,
                        //     _limit: this.limit,
                        // }
                    });
                    this.cards = [...this.cards, ...response.data];
                    this.isCardsLoading = false;
                    console.log(response)
            }  catch (e) {
                alert('error')
            }
        }
    },
    mounted() {
        this.fetchCards();
        console.log(this.$refs.observer);
        const options = {
            rootMargin: "0px",
            threshold: 1.0,
        };
        const callback = (entries, observer) => {
         if (entries[0].isIntersecting && this.page < this.totalPages) {
            this.loadMoreCards()
         }
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(this.$refs.observer);
    },
    computed: {
        sortedCards() {
            return [...this.cards].sort((card1, card2) => card1[this.selectedSort]?.localeCompare(card2[this.selectedSort]))
        },
        sortedAndSearchedCards() {
            return this.sortedCards.filter(card => card.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
    },
    watch: {
        
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.app {
    padding: 20px;
}
.app__btns {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
}
.observer{
    height: 30px;
    background: green;
}
</style>