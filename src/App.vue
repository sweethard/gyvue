<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
  export default{
    data(){
      return{

      }
    },created(){
      this.$ajax.get('getlunbo')
     .then(res=>{
        console.log(res)
      })
      .catch(err=>{
        console.log(err)
      })
    }
  }
</script>
<style></style>