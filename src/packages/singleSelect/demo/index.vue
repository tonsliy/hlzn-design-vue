<template>
  <div class="mylib-nav">
    <p class="name">SingleSelect</p>
  </div>
  <div class="mylib-example select">
    <section
      v-for="(demo, index) in demos"
      :key="index"
      class="mylib-example-section"
    >
      <div
        class="mylib-example-title"
        v-text="demo.title"
      ></div>
      <div
        class="mylib-example-describe"
        v-text="demo.describe"
      ></div>
      <div class="mylib-example-content">
        <component :is="demo"></component>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { createDemoModule } from '../../utils/index'
const demos = import.meta.globEager('./demo*.vue')

export default createDemoModule(
  'Select',
  Object.entries(demos).map((demo) => demo[1].default)
)
</script>

<style lang="stylus"></style>
