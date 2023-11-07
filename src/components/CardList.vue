<template>
    <div v-if="cards.length > 0">
        <h3>Список карточек</h3>
        <el-container>
            <el-row :gutter="20" >
                <el-col :span="6" v-for="card in cards">
                    <div class="grid-content ep-bg-purple">
                        <card-item
                        
                        :card="card"
                        :key="card.id"
                        @remove="$emit('remove', card)"
                        />
                    </div>
                </el-col>
            </el-row>
        </el-container>
        <!-- <transition-group name="card-list"> -->
            
        <!-- </transition-group> -->
    </div>
    <h3 v-else style="color:red">
        Карточек нет
    </h3>
</template>

<script>
import CardItem from "@/components/CardItem"
export default {
    components: {CardItem},
    props: {
        cards: {
            type: Array,
            required: true
        }
    } 
}
</script>

<style scoped>
.card-list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .card-list-enter-active,
  .card-list-leave-active {
    transition: all 0.4s ease;
  }
  .card-list-enter-from,
  .card-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
  .card-list-move {
    transition: transform 0.4s ease;
  }
  .el-row {
    margin-bottom: 20px;
  }
  .el-row:last-child {
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }
  
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>