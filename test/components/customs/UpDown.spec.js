import Vue from 'vue'
import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'
import UpDown from '@/components/customs/UpDown.vue'

const localVue = createLocalVue()

describe('components/customs/UpDown', () => {
  const vuetify = new Vuetify()
  Vue.use(Vuetify)
  const wrapper = mount(UpDown, {
    localVue,
    vuetify
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('is UP', () => {
    wrapper.setProps({ up: true })
    const chip = wrapper.find('.v-chip')
    expect(chip.text()).toBe('UP')
    expect(chip.classes()).toContain('green')
  })

  it('is DOWN', () => {
    wrapper.setProps({ up: false })
    const chip = wrapper.find('.v-chip')
    expect(chip.text()).toBe('DOWN')
    expect(chip.classes()).toContain('red')
  })
})
