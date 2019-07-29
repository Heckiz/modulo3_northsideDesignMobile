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



</style>
