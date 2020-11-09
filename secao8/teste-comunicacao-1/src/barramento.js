import Vue from 'vue'

export default new Vue ({
    methods: {
        addValue(value) {
            this.$emit('addValue', value)
        },
        showValue(callback) {
            this.$on('addValue', callback)
        }
    }
})