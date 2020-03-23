<template>
    <v-card>
        <v-list-item two-line>
            <v-list-item-content>
                <v-list-item-title class="headline">{{light.light.name}}</v-list-item-title>
                <v-list-item-subtitle>{{light.light.productname}}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-card-text>
            <v-row align="center">
                <v-col class="display-1" cols="6">
                    {{slider}}
                </v-col>
                <v-col cols="6">
                    <div class="my-2">
                        <v-btn v-on:click="toggleLight" :pressed.sync="light.light.state.on" :color="light.light.state.on ? '#FFCC00':'secondary'" fab x-large dark>
                            <v-icon>mdi-lightbulb</v-icon>
                        </v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-card-text>
        <v-slider
            v-model="slider"
            thumb-label
            v-on:click="setBrightness"
            v-on:end="setBrightness"
          ></v-slider>
    </v-card>
</template>
<script>
    import HueBridge from '@/services/API/HueBridge.js'
    export default {
        name: 'LightCard',
        props: {
            light: Object
        },
        data() {
            return {
                slider: Math.ceil((this.light.light.state.bri / 255) * 100)
            }
        },
        created(){
        },
        methods: {
            toggleLight: function () {
                this.light.light.state.on = !this.light.light.state.on
                HueBridge.toggleLight(this.light.number, this.light.light.state.on);
            },
            setBrightness: function () {
                let light = this.light;
                let brightness =  Math.ceil((this.slider / 100) * 255)
                HueBridge.setBrightness(light.number,light.light.state.on,brightness)
            }
        }
    }
</script>