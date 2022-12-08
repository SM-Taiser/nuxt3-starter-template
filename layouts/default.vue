<template>
  <div>
    <LayoutsHeader/>
      <slot />
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