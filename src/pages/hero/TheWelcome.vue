<template>
  <div>
    <section>
      <base-card>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <h1>Hi</h1>
        <h1>I'm</h1>
        <h1>Paolo</h1>
        <h1>Bonavera</h1>
      </base-card>
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>