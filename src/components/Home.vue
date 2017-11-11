<template>
  <div class="home">
  <h1>{{title}}</h1>
   <br/>
     <input type="text" v-model="title"><br/>
   {{ message1 }}
   <br/>

  <span v-bind:title="message2">
  2  Hover your mouse over me for a few seconds
    to see my dynamically bound title!
  </span>
 <br/>


  <span v-if="seen">3  Now you see me</span>
   <br/>
  <h5> 4 list items: </h5>
  <ol>
  <li v-for="todo in todos">
    {{ todo.text }}
  </li>
</ol>
<p>{{ message }}</p>
 <button v-on:click="reverseMessage">Reverse Message</button>
 <p>{{ message }}</p>
  <input v-model="message">
   <br/>



  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
    message1: '1 Hello Vue!',
      title: 'Hi test  our Vue.js App',
      todos: [
     { text: 'Learn JavaScript' },
     { text: 'Learn Vue' },
     { text: 'Build something awesome' }
   ],
         message2: '2  You loaded this page on ' + new Date().toLocaleString(),
         seen: true,
         message: 'Hello Vue.js!'

  }
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }



  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
