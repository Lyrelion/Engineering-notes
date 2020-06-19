//template 组件的模板区域
<template>
  <div>
    <h1>这是 App 根组件</h1>
  </div>
</template>

// script 业务逻辑区域
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

// style 样式区域 scoped:防止样式冲突
<style scoped>
h1 {
  color: red;
}
</style>