<template>
<div id='reg'>
<app-head-link></app-head-link>
<form class='submission-form'>
    <div class="radio-group">
    <label class='radio'>Helper<input type='radio' v-model='user.helper' v-bind:value=true></label>
    <label class='radio'>Need Help<input type='radio' v-model='user.helper' v-bind:value=false> </label>
    </div>
    <label>First Name:<input type='text' v-model=user.Fname></label>
    <label>Last Name: <input type='text' v-model=user.Lname></label>
    <label>Address: <input type='text' v-model=user.address placeholder="Addis Ababa,Yeka"></label>
    <label>User Name: <input type='text' v-model=user.username></label>
    <label>Password: <input type='password' v-model=user.password></label>
    <label>ReEnter Password: <input type='password' v-model=reentered_pass></label>
    
    <div v-show='user.helper==true'>
    <label>Education_status:<input type='text' v-model=user.education_status> </label>
    
    </div>
    <div>
        <label>Support Type:</label>
        <select v-model='user.support'>
            <option v-for='type in helptype' v-bind:key='type'>{{type}}</option>
        </select>
    </div>
  <div>
    <label class='radio'>Male<input  type='radio' v-model='user.gender' value='male'></label>
    <label class='radio'>Female<input  type='radio' v-model='user.gender' value="female"></label>
    </div>
    
    <button v-on:click.prevent='register'>Register</button>
    <div v-show=!fill style="color:#eee">
        Please Fill all Fields 
    </div>
    <div v-show=registered style="color:#eee">
        Registered Succesfully,
        <p>Use your UserName and Password to signin</p> 
    </div>
      <div v-show=!pass style="color:#eee">
        Your Re-Entered password don't match 
    </div>
</form>
</div>
</template>
<script>
import Heading from './links.vue'
export default{
    data(){
        return{
            user:{
                Fname:'',
                Lname:'',
                username:'',
                password:'',
                address:'',
                gender:'male',
                helper:true,
                education_status:'',
                support:'Psychology Support'
                


            },
            helptype:['Psychology Support','Economical Support','Tutorial Support','Spiritual Support'],
            reentered_pass:'',
            fill:true,
            registered:false,
            pass:true

    }
    },
    methods:{
        register:function(){
            if(this.user.Fname!='' && this.user.Lname!='' && this.user.username!='' &&
             this.user.password && this.user.address!='' && this.user.education_status!='' && 
             this.user.reentered_pass!=''){
                 if(this.user.password==this.reentered_pass){
            this.$http.post('https://no-bully-1b47c.firebaseio.com/register.json',this.user).then(function(data){
               this.registered=true;
            });}
            else{
                this.pass=false
            }
        }
        else{
            this.fill=false

        }
        
        }
    },
    components:{
        'app-head-link':Heading
    }


}
</script>
<style scoped>
#reg{
 background: url('../assets/reg_back.jpg') no-repeat center center fixed;
 width: 100%;
 background-size: cover;
}
.submission-form{
    max-width: 400px;
    margin:10px auto;
    padding:2rem;
    background:#444 ;
}
.radio{
    display:inline-block;
    padding-left: 20px;
}
  label{
        display: block;
        font-size:18px;
        color:#eee;
        margin-top:2px;

    
    }
    input[radio]{
        display: inline;
    }
input{
    background: #eee;
        display:inline;
        width: 100%;
        font-size: 18px;
        border-radius:5px;
    }
    input:hover{
        background: #eee;
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
    select{
        font-size: 18px;
        display:block;
        width: 100%;

    }
    
</style>
