<template>

  <div v-for="(item, index) in Blog" :key="index">
    <h4>{{item.title}}</h4>
    <p>{{item.date}}</p>
  </div>

</template>

<script>
export default {
  name : "list",
  props : {
    Blog : Array,
  }
}
</script>

<style>

</style>