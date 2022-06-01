import listBooks from './components/listBooks.vue'
import addBook from './components/addBook.vue'
import editBook from './components/editBook.vue'
const routes = [
    {path:'/books', component: listBooks, name: 'books'},
    {path:'/add-book', component: addBook, name: 'add_book'},
    {path:'/book/:id', component: editBook, name: 'edit_book'},
    
    
]
export default routes