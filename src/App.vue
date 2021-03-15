<template>
  <div>
    <banner/>
    <navButton/>
    
  </div>
</template>

<script>
import navButton from './components/navButton'
import banner from './components/banner';
export default {
  name: 'App',
  components: {
    banner,
    navButton
  },
  data () {
      return {
      }
    },
    
}

</script>
<style>


.container{
    padding-top:60px;
    
}
body{
  background-color: #163358;
}

.title2{
text-align: center;
color: rgb(255, 255, 255);
text-shadow: 1px 1px rgb(182, 169, 52), 2px 3px rgb(206, 9, 9), -2px -2px 1px rgb(5, 5, 5)
}
</style>
