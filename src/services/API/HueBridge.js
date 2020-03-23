import axios from 'axios'


export default {
    clientId: "s8tsFJaBTa3fjFoOQIGvJ6kAi2ai2TIiYyihhLTq",
    getLights() {
        return axios.get(`/api/${this.clientId}/lights`)
        .then(response => {
            return response.data
        })
    },
    toggleLight (light,state,brightness) {
        return axios.put(`/api/${this.clientId}/lights/${light}/state`,
            {
                on: state,
                bri: brightness
            }        
        )
            .then(response => {
                return response.data;
            })
    },
    lightOn (lightId) {
        return axios.put(`/api/${this.clientId}/lights/${lightId}/state`,
            {
                on: true
            }        
        )
            .then(response => {
                return response.data;
            })
    },
    lightOff (lightId) {
        return axios.put(`/api/${this.clientId}/lights/${lightId}/state`,{
            on: false
        })
            .then(response => {
                return response.data;
            })
    },
    setBrightness (light,state,brightnessVal) {
        return axios.put(`/api/${this.clientId}/lights/${light}/state`,
        {
            on: state,
            bri: brightnessVal
        }).then (response => {
            return response.data
        })
    },
    getToken(){
        return axios.post(`/api`, {
            devicetype: "hue_app#vue"
        })
        .then(response => {
            return response.data
        })
    },
    isLoggedIn(){
        axios.get(`/api/${this.clientId}`)
        .then(response => {
            console.log(response);
            return true;
        })
    }
}