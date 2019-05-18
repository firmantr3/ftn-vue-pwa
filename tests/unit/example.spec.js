import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue'
import store from '@/store'
import i18n from '@/plugins/i18n'

import '@/plugins'
import '@/components'

const localVue = {
  i18n,
  store
}

describe('Navbar.vue', () => {
  it('renders APP_NAME global variable', () => {
    const brand = APP_NAME
    const wrapper = shallowMount(Navbar, { ...localVue })
    expect(wrapper.text()).to.include(brand)
  })
})
