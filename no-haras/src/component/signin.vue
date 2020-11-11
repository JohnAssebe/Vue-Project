<template>
<div>
<app-head-link></app-head-link>
<form>
<label>User Name:</label><input type='text' v-model=login.username><br>
<label>Password</label><input type='password' v-model=login.password><br>
<button v-on:click.prevent='submit'>Login</button>
<div>
<label v-show="right=='wrong'" style="color:red"> Username Or Password Error</label>
<label v-show="right=='right'" style="color:green">Succesfull</label>
</div>
</form>
</div>
</template>
<script>
import Heading from './links.vue'
export default{
    data(){
        return{
            login:{
                username:'',
                password:'',
            },
            user:[],
            right:''

    }
    },
    methods:{
        submit:function(){
            this.$http.get('https://no-bully-1b47c.firebaseio.com/register.json').then(function(data){
                return data.json();

            }).then(function(data){
                for(let key in data){
                    this.user.push(data[key].username)
                  if(this.user.includes(this.login.username)){
                     if(data[key].password==this.login.password){
                         this.right="right"
                     }
                     else{
                         this.right="wrong"
                     }

                  } 
                  else{
                      this.right='wrong'
                  }
                }
            })
        }
    },
    components:{
        'app-head-link':Heading
    }


}
</script>
<style scoped>


</style>
