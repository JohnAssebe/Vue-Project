<template>
<nav>
<ul>
    <li><router-link to='/' exact>Home</router-link></li>
    <li><router-link to='/contact-us' exact>Contact us</router-link></li>
    <li><router-link to='/register' exact>Sign Up</router-link></li>
    <li><router-link to='/login' exact>Sign In</router-link></li>
    
</ul>

</nav>
</template>
<script>
export default{
    data(){
        return{

    }
    },
    methods:{},


}
</script>
<style scoped>
nav{
      background: #444;
      padding:14px 0;
      margin-bottom: 40px;
}
ul {
    list-style-type: none;
    text-align:center;
    margin:0;
}

li{
    display: inline-block;
    margin:0 10px; 
}
a{
    color: white;
    text-decoration:none;
    border-radius:10px;
    padding:6px 8px;
    border-radius:10px;
  
}
.router-link-active{
    background-color:#eee;
    color:#444;
}

</style>