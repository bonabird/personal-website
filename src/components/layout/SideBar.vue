<template>
  <div class="side-bar">
    <div class="vl"></div>
    <nav>
      <ul>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/experience">Experience</router-link>
        </li>
        <li>
          <router-link to="/work">Work</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.side-bar {
  width: 160px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  bottom: 0; /* Stay at the top */
  left: 0;
  background-color: #f5532e;
  overflow-x: visible;
  padding-top: 20px;
}

a {
  text-decoration: none;
  color: #f391e3;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}

nav {
  margin-top: auto;
  width: 90%;
  margin: auto;
  display: flex;
  bottom: 0;
  justify-content: space-between;
  align-items: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}

.vl {
  border-left: 6px solid green;
  height: 500px;
  position: relative;
  left: 50%;
}
</style>
