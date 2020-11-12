<template>
<div id='login'>
<app-head-link></app-head-link>
<form class='submission-form'>
<label>User Name:</label><input type='text' ref=username><br>
<label>Password</label><input type='password' ref=password><br>
<button v-on:click.prevent='submit'>Login</button>
<div>
<label v-show="right=='wrong'" style="color:#eee"> Username Or Password Error</label>
<label v-show="right=='right'" style="color:#eee">Succesfull</label>
</div>
</form>
</div>
</template>
<script>
import Heading from './links.vue'
export default{
    data(){
        return{
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
                  if(this.user.includes(this.$refs.username.value)){
                     if(data[key].password==this.$refs.password.value){
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
#login{
 background: url('../assets/reg_back.jpg') no-repeat center center fixed;
 width: 100%;
 
 background-size: cover;
}
label{
    display:block;
    color:#eee;
}
.submission-form{
    max-width: 500px;
    margin:40px auto;
    padding:2rem;
    background: #444;
    max-height: 500px;
    

}
input{
        display:inline;
        width: 80%;
        font-size: 18px;
        border-radius:5px;
    }
button{
text-transform: uppercase;
width: auto;
border:0;
background: #eee;
color:#444;
padding:1rem;
margin:1rem 0;
transition:3s ease;
border-radius:5px;

}
button:hover{
background: #3498c0;
color:#444;
}

</style>
