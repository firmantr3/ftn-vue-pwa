<template>
  <b-dropdown id="ddown1" :text="locales[locale]" class="m-md-2">
    <b-dropdown-item v-for="(value, key) in locales" :key="key" @click.prevent="setLocale(key)">
      {{ value }}
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
import { mapGetters } from 'vuex'
import { loadMessages } from '@/plugins/i18n'

export default {
  computed: mapGetters({
    locale: 'lang/locale',
    locales: 'lang/locales'
  }),

  methods: {
    setLocale (locale) {
      if (this.$i18n.locale !== locale) {
        loadMessages(locale)

        this.$store.dispatch('lang/setLocale', { locale })
      }
    }
  }
}
</script>
