<template>
  <div>
      <ul>
        <li v-for="book in books" :key="book.id">
            <h3>name: 
              <span @dblclick="show=false" v-if="show">{{book.name}}</span> 
              <input v-model="book.name" @keyup.enter="updateBook(book.id,'name', book.name)" v-if="!show" type="text">
            </h3>
            <h4>price: 
              <span @dblclick="show1=false" v-if="show1">{{book.price}}</span> 
              <input v-model="book.price" @keyup.enter="updateBook(book.id,'price', book.price)" v-if="!show1" type="text">
            </h4>
            <router-link class="nav-link" :to="{name: 'edit_book', params:{id:book.id}}">Edit</router-link>
          ---------------
        </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'App',
  data(){
    return{
      books:[],
      show:true,
      show1:true    
    }
  },
  created(){
    axios.get('https://vuango-books-api.herokuapp.com/books/').then((res)=>{
      this.books = res.data
    })
  },
  methods:{
    updateBook(id, item, value) {
      axios.patch(`https://vuango-books-api.herokuapp.com/books/${id}/?${item}=${value}`).then((res) => {
        console.log(res.status)
        if(item == 'name'){
          this.show = true
        } else this.show1 = true
        
      })
    }

  }
  
}
</script>

<style>
  ul{
    list-style-type: none;
  }

</style>