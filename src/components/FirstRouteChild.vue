<template>
  <div class="hello">
    <h1>{{msg}}</h1>



    <div class="users">

       <h1>Users</h1>
       <form v-on:submit="addUser">
       <input type="text" v-model="newUser.name" placeholder="Enter name"><br/>
         <input type="text" v-model="newUser.email" placeholder="Enter email"><br/>
           <input type="submit" value="Submit">
       </form>

       <ul>
     <li v-for="user in users">
         <input type="checkbox" class="toggle" v-model="user.contacted">
         <span :class="{contacted: user.contacted}">
     {{user.name}}: {{user.email}}
     </span>
       </li>
       </ul>
       </div>




  </div>
</template>

<script>




export default {
  name: 'user',
  data () {
    return {
newUser: {},
    users:[
{
name:'AAAA bbbbb',
email:'WE@gmail.com',
contacted: true
},
{
name:'AAAA bb',
email:'WE@gmail.com',
contacted: false
},

{
name:'AAAA bbbbb',
email:'WE@gmail.com',
contacted: false
}
]
  }
  },
  methods:{
  addUser: function(e){

  this.users.push({
  name: this.newUser.name,
  email: this.newUser.email,
  contacted:false
  });
  e.preventDefault();
  }
  },
  }





</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
