<template>
<div>
<app-head-link></app-head-link>
<h3>Registeration</h3>
<form>
    <div>
    <label>Helper:  </label><input type='radio' v-model='user.helper' v-bind:value=true>
    <label>Need Help:  </label><input type='radio' v-model='user.helper' v-bind:value=false>
    </div>
    <label>First Name:</label><input type='text' v-model=user.Fname><br>
    <label>Last Name:</label><input type='text' v-model=user.Lname><br>
    <label>Address:</label><input type='text' v-model=user.address placeholder="Addis Ababa,Yeka"><br>
    <label>User Name:</label><input type='text' v-model=user.username><br>
    <label>Password</label><input type='password' v-model=user.password><br>
    <label>ReEnter Password:</label><input type='password' v-model=reentered_pass><br>
    
    <div v-show='user.helper==true'>
    <label>Education_status:</label><input type='text' v-model=user.education_status>
     <div>
        <label>Gender: </label>
    <label>Male:</label><input type='radio' v-model='user.gender' value='male'>
    <label>Female:</label><input type='radio' v-model='user.gender' value="female">
    </div>
    <label></label>
    </div>
    <div v-show='user.helper==false'>
        <textarea placeholder="what type of need you wants?like psycho,economic or other "></textarea>
         <div>
        <label>Gender: </label>
    <label>Male:</label><input type='radio' v-model='user.gender' value='male'>
    <label>Female:</label><input type='radio' v-model='user.gender' value='female'>
    </div>
    </div>
    <button v-on:click.prevent='register'>Register</button>
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
                gender:'',
                helper:true,
                education_status:'',


            },
            reentered_pass:''

    }
    },
    methods:{
        register:function(){
            if(this.reentered_pass==this.user.password){
                console.log(this.user)
            }
            else{
                console.log("reenter password correctly");
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