<template>
<div>
<app-head-link></app-head-link>
<h3>Registeration</h3>
<form>
    <div>
    <label>Helper:  </label> <input type='radio' v-model='user.helper' v-bind:value=true>
    <label>Need Help:  </label> <input type='radio' v-model='user.helper' v-bind:value=false>
    </div>
    <label>First Name: </label><input type='text' v-model=user.Fname><br>
    <label>Last Name: </label><input type='text' v-model=user.Lname><br>
    <label>Address: </label><input type='text' v-model=user.address placeholder="Addis Ababa,Yeka"><br>
    <label>User Name: </label><input type='text' v-model=user.username><br>
    <label>Password: </label><input type='password' v-model=user.password><br>
    <label>ReEnter Password: </label><input type='password' v-model=reentered_pass><br>
    
    <div v-show='user.helper==true'>
    <label>Education_status: </label><input type='text' v-model=user.education_status>
    
    </div>
  <div>
        <label>Gender: </label>
    <label>Male: </label><input type='radio' v-model='user.gender' value='male'>
    <label>Female:</label><input type='radio' v-model='user.gender' value="female">
    </div>
    <div>
        <label>Support Type:</label>
        <select v-model='user.support'>
            <option v-for='type in helptype' v-bind:key='type'>{{type}}</option>
        </select>
    </div>
    <button v-on:click.prevent='register'>Register</button>
    <div v-show=!fill style="color:red">
        Please Fill all Fields 
    </div>
    <div v-show=registered style="color:green">
        Registered Succesfully,
        <p>Use your UserName and Password to signin</p> 
    </div>
      <div v-show=!pass style="color:red">
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


</style>
