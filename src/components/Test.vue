<template>
  <div class="test">
  <input type="text" v-model="title"><br/>
    <h1>{{title}}</h1>
    <ul>
        <li v-for="todo in todos">
          {{ todo.title }}
        </li>
      </ul>
      <p>{{ message }}</p>
       <input v-model="message">
  </div>
</template>

<script>

export default {
  name: 'test',
  data () {
    return {
      title: 'Hi test  our Vue.js App',
      todos: [
          { title: 'Learn JavaScript' },
          { title: 'Learn Vue' },
          { title: 'Build something awesome' }
        ]

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
