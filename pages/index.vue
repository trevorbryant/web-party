<template>
  <main>
    <article>
      <page-header />
      <page-content />

      <footer>

      </footer>
    </article>
  </main>
</template>

<style scoped>
article {
  margin-top: calc(1rem + 2vh);
}
</style>

<script>
import PageContent from '~/components/page-content'
import PageHeader from '~/components/page-header'

export default {
  components: {
    PageContent,
    PageHeader
  }
}
</script>
