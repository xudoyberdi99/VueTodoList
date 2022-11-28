<template>
    <div class="container">
      <div class="box">
       <div>
        <h1>Todo List</h1>
        <h2>count of Tasks: {{todolist.length}}</h2> 
       </div>
       <div class="form">
        <input type="text" placeholder="Enter a todo" v-model="content">
        <button type="button" @click="addTodo">Add</button>
       </div>
        <div class="tasks" v-for="todo in todolist" :key="todo.id">
            <div > {{todo.id}}.</div>
            <div class="cont">{{todo.content}}</div>
            <div ><button style="background:red"   @click="updateTodo(todo.id)">Update</button></div>
            <div ><button style="background:blue"   @click="deleteTodo(todo.id)">Delete</button></div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
    content:'',
    todolist: [],
    updateValue:null,
    errorHandler:'',
    error: false,

    }
  },
  methods: {
    addTodo(){
    if(this.updateValue!=null){
      let findByidTodo=this.todolist.find((todo)=>todo.id=this.updateValue)
      findByidTodo.content=this.content

      this.updateValue=null

      this.content=''
    }
    else if(this.content){
        let newTask={
        id:this.todolist.length+1,
        content:this.content,
      }
     this.todolist.push(newTask)
     this.content=''
     console.log(this.todolist)
    }
    else{
            this.error=true
            this.errorHandler='maydonlar bush bulishi mumkin emas'
    }
    },
    deleteTodo(id){
        this.todolist=this.todolist.filter((todo)=> todo.id=!id)
     },
     updateTodo(id){
      let findByidTodo=this.todolist.find((todo)=>todo.id=id)
        this.content=findByidTodo.content

        this.updateValue=id
     }
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container {
  background-color: rgb(14, 218, 191);
  min-height: 100vh;
  display: flex;
}
.box{
  width: 400px;
  background-color: rgb(31, 209, 55);
  min-height: 500px;
  border-radius: 15px;
  margin: auto;
 
}
.box h1{
  text-align: center;
  padding: 10px;
  margin: 20px;
  margin-bottom: 0;
}
.box h2{
  text-align: center;
  margin: 5px;

}
.form {
  text-align: center;
 
}
.form input {
  padding: 6px 25px;
  background: rgb(31, 32, 35);
  border: 1px solid rgb(60, 63, 68);
  border-radius: 10px;
  font-size: 20px;
  color: rgb(247, 248, 248);
  height: 55px;
  appearance: none;
  transition: border 0.15s ease 0s;
                
}
.form button {
  margin-left: 10px;
  padding: 14px;
  font-size: 20px;
  border-radius: 10px;
  background-color: rgb(14, 218, 191);
}
.tasks {
  display: flex;
  align-items: baseline;
  border-radius: 10px;
  background: none;
  margin: 15px;
  font-size: 22px;
  border: 3px solid black;
}
.cont {
  width: 300px;
  overflow: hidden;
  margin-bottom: 10px;
  text:center;
}
.tasks button {
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 15px;
  font-weight: bold;
  border-radius: 5px;
  margin-right: 5px;
  
}
</style>
