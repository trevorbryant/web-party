<template>
  <footer>
    <img
      alt=""
      class="parrot-1"
      src="~/assets/images/parrot-1.svg"
    />

    <img
      alt=""
      class="parrot-2"
      src="~/assets/images/parrot-2.svg"
    />

    <img
      alt=""
      class="parrot-3"
      src="~/assets/images/parrot-3.svg"
    />

    <img
      alt=""
      class="parrot-4"
      src="~/assets/images/parrot-4.svg"
    />

    <img
      alt=""
      class="background"
      src="~/assets/images/footer-background.png"
    />

    <sys-header-6>
      <a href="https://github.com/system76/web-party">Open source</a>
      and made with love @
      <a href="https://system76.com">System76</a>
    </sys-header-6>
  </footer>
</template>

<style scoped>
footer {
  background-color: #2f634d;
  color: #5bb08c;
  margin-top: 40vw;
  padding: 10vw 1rem 1rem;
  position: relative;
  text-align: center;
  width: 100%;
}

a {
  color: #5bb08c;
}

.background {
  bottom: 100%;
  left: 0;
  position: absolute;
  right: 0;
  user-select: none;
  width: 100%;
}

.parrot-1,
.parrot-2,
.parrot-3,
.parrot-4 {
  position: absolute;
  user-select: none;
  width: 12vw;
  z-index: 1;
}

.parrot-1 {
  right: 48vw;
  top: -28vw;
  z-index: 3;
}

.parrot-2 {
  right: 38vw;
  top: -36vw;
}

.parrot-3 {
  right: 24vw;
  top: -38vw;
}

.parrot-4 {
  right: 4vw;
  top: -30vw;
}
</style>

<script>
import { SysHeader6 } from '@system76/design'

export default {
  name: 'PageFooter',

  components: {
    SysHeader6
  }
}
</script>
