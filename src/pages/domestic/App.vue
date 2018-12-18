<template>
  <div id="app">
    <div id="nav">
      <router-link to="/index">新闻首页</router-link>
      <span class="navSep">|</span>
      <router-link to="/world">国际新闻</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
* {margin: 0; padding: 0; font-family: Arial, "Helvetica Neue", Helvetica, sans-serif; font-size: 14px;}
.container {max-width: 1200px; margin:0 auto;}
#nav {padding: 30px; text-align: center;}
#nav .navSep {margin: 0 10px; color: #999;}
#nav a {color: #333;}
</style>
