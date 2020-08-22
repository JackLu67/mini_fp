import Vue from 'vue'
import loading from '../components/load/loading.vue'

const Loading = {
    install() {
        Vue.component('Loading', loading)
    }
}

export default Loading
