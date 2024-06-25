<style>
  .red {
    width: 100%;
    height: 100px;
    background-color: pink;
  }
 
  .green {
    width: 100%;
    height: 100000px;
    background-color: yellow;
  }
</style>
 
<template>
  <div class="red"></div>
  <div class="green">
    <p>内容区域</p>
  </div>
</template>
 
<script>
  window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    var red = document.querySelector('.red')
    if (scrollTop >= 100) {
      red.style.position = 'fixed'
      red.style.top = '0'
    } else {
      red.style.position = 'static'
    }
  }
</script>          