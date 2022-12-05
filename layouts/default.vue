<template>
  <div>
    <LayoutsHeader/>
    <div class="container mx-auto p-4">
      <slot />
    </div>
    <LayoutsFooter/>
  </div>
</template>

<style lang="scss" scoped>
  .router-link-exact-active {
    color: $primary-color;
  }
</style>