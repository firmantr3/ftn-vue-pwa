<template>
  <div id="app">
    <loading ref="loading"/>

    <transition name="page" mode="out-in">
      <component v-if="layout" :is="layout"/>
    </transition>
  </div>
</template>

<script>
import Loading from '@/components/Loading'

// Load layout components dynamically.
const requireContext = require.context('@/layouts', false, /.*\.vue$/)

const layouts = requireContext.keys()
  .map(file =>
    [file.replace(/(^.\/)|(\.vue$)/g, ''), requireContext(file)]
  )
  .reduce((components, [name, component]) => {
    components[name] = component.default || component
    return components
  }, {})

export default {
  el: '#app',

  components: {
    Loading
  },

  data: () => ({
    layout: null,
    defaultLayout: 'default'
  }),

  metaInfo () {
    return {
      title: APP_NAME,
      titleTemplate: `%s · ${APP_NAME}`
    }
  },

  mounted () {
    this.$loading = this.$refs.loading
  },

  methods: {
    /**
     * Set the application layout.
     *
     * @param {String} layout
     */
    setLayout (layout) {
      if (!layout || !layouts[layout]) {
        layout = this.defaultLayout
      }

      this.layout = layouts[layout]
    }
  }
}
</script>

<style lang="scss">
  /* Import Font Awesome Icons Set */
  $fa-font-path: '~font-awesome/fonts/';
  @import '~font-awesome/scss/font-awesome.scss';
  /* Import Bootstrap Vue Styles */
  @import '~bootstrap-vue/dist/bootstrap-vue.css';
  // import main app style
  @import 'assets/scss/app';
</style>
