<template>
    <div class="basic-grid">
        <LightCard
        class="card" 
        v-for="(light,idx) in lights" 
        :key="idx"
        :name='idx'
        :light='light'>
        </LightCard>
    </div>
    
</template>
<script>
    import HueBridge from '@/services/API/HueBridge.js'
    import LightCard from '@/components/LightCard'
    import '@/css/grid.css'
    export default {
        name: 'Home',
        props: {
            msg: String
        },
        components: {
            LightCard
        },
        data() {
            return {
                lights: [],
                value: 0
            }
        },
        created() {
            HueBridge.getLights()
                .then(lights => {
                    let lightNumber = Object.keys(lights);
                    lightNumber.forEach(light => {
                        this.lights.push({
                            number: light,
                            light: lights[light]
                        });
                    })
                })
                .catch(error => console.log(error))
                .finally(() => {})
        },
        
    }
</script>