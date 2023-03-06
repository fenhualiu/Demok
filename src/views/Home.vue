<template>
  <div >
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/views/components/FirstPages/Index.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
