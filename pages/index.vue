<template>
  <main>
    <article>
      <page-header />
      <page-content />
      <page-footer />
    </article>
  </main>
</template>

<style scoped>
main,
article {
  height: 100%;
}

article {
  display: flex;
  flex-direction: column;
  padding-top: calc(1rem + 2vh);
}

header,
div {
  flex: 0 0 auto;
}

footer {
  flex: 1 0 auto;
}
</style>

<script>
import PageContent from '~/components/page-content'
import PageFooter from '~/components/page-footer'
import PageHeader from '~/components/page-header'

export default {
  components: {
    PageContent,
    PageFooter,
    PageHeader
  }
}
</script>
