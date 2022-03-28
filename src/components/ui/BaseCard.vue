<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  max-width: 40rem;
  height: 250px;
  width: 250px;
}
</style>