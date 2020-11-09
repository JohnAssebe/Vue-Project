<template>
<div>
<app-head-link></app-head-link>
<form>
<label>User Name:</label><input type='text' v-model=login.username><br>
<label>Password</label><input type='password' v-model=login.password><br>
<button v-on:click.prevent='submit'>Login</button>
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
            }

    }
    },
    methods:{
        submit:function(){
            console.log(this.login);
        }
    },
    components:{
        'app-head-link':Heading
    }


}
</script>
<style scoped>


</style>