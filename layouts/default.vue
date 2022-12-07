<template>
  <div>
    <LayoutsHeader/>
    <div class="container mx-auto p-4">
      <slot />
    </div>
    <LayoutsFooter/>
  </div>
</template>

<style lang="scss">

@include mobile-device {
  .router-link-exact-active {
    color: $theme-color;
  }
}
</style>