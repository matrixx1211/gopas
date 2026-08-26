import { ref } from "vue"
import { useRouter } from "vue-router"

export default function useToDoStore() {
  
   const todos = ref([])

   function addToDo(todo) {
        console.log('add', todo)
        this.todos.value = [...this.todos.value, {
            ...todo, 
            id: this.todos.value.length === 0
                ? 1
                : Math.max(...this.todos.value.map(t=>t.id)) + 1,
        }]
        // this.todos.value.push({
        //     ...todo, 
        //     id: this.todos.value.length === 0
        //         ? 1
        //         : Math.max(...this.todos.value.map(t=>t.id)) + 1,
        // })
        
        console.log(this.todos.value)
    }

    function editToDo(todo) {
        const edited = this.todos.value.find(t => t.id === todo.id)
        edited.task = todo.task
        edited.done = todo.done
    }

    return {todos, addToDo, editToDo}
   
}