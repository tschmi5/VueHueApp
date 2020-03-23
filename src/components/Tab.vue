<template>
    <div v-show="isActive">
        <h1>Something here</h1>
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'tab',
        props: {
            name: {
                required: true
            },
            info: {},
            selected: {
                default: false
            }
        },
        data() {
            return {
                isActive: true,
            }
        },
        created() {
            this.isActive = this.selected
        },
    }
</script>
<style> </style>