<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container">
      <router-link :to="{ name: user ? 'home' : 'welcome' }" class="navbar-brand">
        {{ appName }}
      </router-link>

      <b-navbar-toggle target="navbarToggler" />

      <b-collapse is-nav id="navbarToggler">
        <b-navbar-nav>
          <locale-dropdown/>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <!-- Authenticated -->
          <b-nav-item-dropdown
            id="userAuthenticated"
            right
            v-if="user"
          >
            <template slot="button-content">
              <img :src="user.photo_url" class="rounded-circle profile-photo mr-1">
              {{ user.name }}
            </template>
            <b-dropdown-item :to="{ name: 'settings.profile' }">
              <i class="fa fa-fw fa-cog"></i>
              {{ $t('settings') }}
            </b-dropdown-item>
            <b-dropdown-item @click.prevent="logout" href="#">
              <i class="fa fa-fw fa-sign-out"></i>
              {{ $t('logout') }}
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <!-- Guest -->
          <template v-else>
            <li class="nav-item">
              <router-link :to="{ name: 'login' }" class="nav-link" active-class="active">
                {{ $t('login') }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'register' }" class="nav-link" active-class="active">
                {{ $t('register') }}
              </router-link>
            </li>
          </template>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import LocaleDropdown from './LocaleDropdown'

export default {
  components: {
    LocaleDropdown
  },

  data: () => ({
    appName: APP_NAME
  }),

  computed: mapGetters({
    user: 'auth/user'
  }),

  methods: {
    async logout () {
      // Log out the user.
      await this.$store.dispatch('auth/logout')

      // Redirect to login.
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped>
.profile-photo {
  width: 2rem;
  height: 2rem;
  margin: -.375rem 0;
}
</style>
