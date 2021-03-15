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
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  let title=document.getElementById("title");
  let banner=document.getElementById("banner");
  let logo=document.getElementById("logo");

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

    title.style.fontSize = "40px";

    banner.style.padding= "5px";


    logo.style.height= "50px";
    logo.style.width= "50px";
    logo.style.marginLeft="100px";

  } else {
    title.style.fontSize = "60px";

    banner.style.padding= "10";
    
    logo.style.width= "80px";
    logo.style.height= "80px";
    logo.style.marginLeft="50px";

   

  }
}
</script>

<style>
#title {
    color: white;
    font-weight: bold;
    transition: 0.15s;
    font-size: 60px;
    text-decoration: none;
    text-align: center;
    text-shadow: -3px -3px 2px black,3px 3px 2px blue,4px 4px 2px royalblue,6px 6px rgb(40, 133, 240);
  }

#logo{
    margin-top: 5px;
    margin-left: 50px;
    transition: 0.15s;
    height: 80px;
    width: 80px;
}
#banner {
  padding: 10px;
  overflow: hidden;
  background-color: #163358;
  background-size: 210%;
  background-position: -210px -25px;
  transition: 0.4s;
  width: 100%;
  top: 0;
  z-index: 99;
  border-radius: 2px;
  display: inline-flex;
  position: fixed;
}
</style>