<template>
  <div class="wrapper">
    <theHeader/>
    <theMainContent/>
    <theFooter/>
  </div>
</template>

<script>
import theHeader from './layout/theHeader.vue'
import theMainContent from "./layout/theMainContent"
import theFooter from './layout/theFooter'
export default {
  name: 'App',
  components: {
    theHeader,
    theMainContent,
    theFooter
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
}
.app{
  display: flex;
  flex-direction: column;
}
@font-face {
  font-family: 'Montserrat Light';
  src: url('./fonts/Montserrat-Light.ttf');
  src: url('./fonts/Montserrat-Light.ttf') format('embedded-opentype'),
  url('./fonts/Montserrat-Light.ttf') format('woff'),
  url('./fonts/Montserrat-Light.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

</style>

