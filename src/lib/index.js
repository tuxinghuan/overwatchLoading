import vueOverwatchLoading from './vue-overwatch-loading.vue'

const overwatchLoading = {
    install (Vue, options) {
        Vue.component(vueOverwatchLoading.name, vueOverwatchLoading)
    }
}

export default overwatchLoading
