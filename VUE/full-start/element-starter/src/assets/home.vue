<template></template>

<script>
export default {
  mounted() {
    fetch("http://localhost:8010/api/user/login")
      .then(data => data.json())
      .then(data => {
        console.log(data);
      });
  }
};
</script>

<style>
</style>
