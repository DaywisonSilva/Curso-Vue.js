import Vue from 'vue'

export default new Vue({
    methods: {
        addValue(value) {
            this.$emit('emitValue', value)
        },
        showValue(callback) {
            this.$on('emitValue', callback)
        }
    }
})