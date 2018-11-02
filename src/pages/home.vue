<template>
  <b-card :header="$t('home')" header-tag="header">
    {{ $t('you_are_logged_in') }}
  </b-card>
</template>

<script>
export default {
  middleware: 'auth',

  metaInfo () {
    return { title: this.$t('home') }
  }
}
</script>
