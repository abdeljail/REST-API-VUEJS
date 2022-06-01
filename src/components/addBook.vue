<template>
    
    <form class="row g-3">
        <div class="form-group">
            <label for="name">Book`s name</label>
            <input v-model="book.name" type="text" class="form-control" name="name" id="name" placeholder="Enter book`s name">
        </div>
        <div class="form-group">
            <label for="price">Book`s price</label>
            <input v-model="book.price" type="number"
            class="form-control" name="price" id="price" placeholder="Enter book`s price">
        </div>
        <div class="form-group">
            <button @click.prevent="sendData" class="btn btn-primary">Add</button>
        </div>
    </form>
  
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            book: {
                name: '',
                price: 0
            }

        }
    },
    methods:{
        sendData(){
            axios.post('https://vuango-books-api.herokuapp.com/books/', this.book).then((res) => {
                console.log(res.status)
                this.$router.push({name:'books'})
            })


        }

    }

}
</script>

<style>

</style>