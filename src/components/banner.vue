<template lang="html">
<div id="banner">
<img src="../assets/Images/nysl_logo.png" alt="logo" id="logo">
<router-link to="/" id="title" >NYSL</router-link>

</div>
</template>

<script>
  export default {
  name: 'gameInfo',
  data() {
    return {
    
    }
}
  }
</script>

<style>
#title {
    color: white;
    font-weight: bold;
    transition: 0.5s;
    font-size: 80px;
    padding-top: 5px;
    text-decoration: none;
    margin-left: 20px;
    text-shadow: -3px -3px 2px black,3px 3px 2px blue,4px 4px 2px royalblue,6px 6px rgb(40, 133, 240);
  }

#logo{
    margin-left: 15px;
    transition: 0.5s;
    height: 120px;
    width: 120px;
}
#banner {
  overflow: hidden;
  background: url(../assets/Images/design2_image1.jpg);
  background-size: 210%;
  background-position: -210px -25px;
  padding: 30px 0px;
  transition: 0.4s;
  width: 100%;
  top: 0;
  z-index: 99;
  border-radius: 2px;
  display: inline-flex;

}
</style>