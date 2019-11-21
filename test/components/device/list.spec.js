import Vue from 'vue'
import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'
import list from '@/components/device/list.vue'

const localVue = createLocalVue()


describe('components/device/list', () => {
  let vuetify = new Vuetify()
  Vue.use(Vuetify)
  let wrapper = mount(list, {
    localVue,
    vuetify
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})