<template>
    <form-wizard>
        <tab name="Step 1" info="Introduction" :selected="true">
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input class="input" name="fullname" type="text" placeholder="Text input"
                        v-model="registration.name" data-vv-scope="step1" v-validate="'required'">
                    <p class="help is-danger" v-show="errors.has('step1.fullname')">
                        {{ errors.first('step1.fullname') }}
                    </p>
                </div>
            </div>
        </tab>
        <tab name="Step 2" info="More Details" :selected="true">
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input class="input" name="fullname" type="text" placeholder="Text input"
                        v-model="registration.name" data-vv-scope="step1" v-validate="'required'">
                    <p class="help is-danger" v-show="errors.has('step1.fullname')">
                        {{ errors.first('step1.fullname') }}
                    </p>
                </div>
            </div>
        </tab>
        <tab name="Step 3" info="Finishing Up" :selected="true">
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input class="input" name="fullname" type="text" placeholder="Text input"
                        v-model="registration.name" data-vv-scope="step1" v-validate="'required'">
                    <p class="help is-danger" v-show="errors.has('step1.fullname')">
                        {{ errors.first('step1.fullname') }}
                    </p>
                </div>
            </div>
        </tab>
    </form-wizard>
</template>
<script>
import FormWizard from './FormWizard'
import Tab from './Tab'
    export default {
        name: "Login",
        components: {
            FormWizard, Tab
        },
        data(){
           return{
    registration:{
          name: '',
          email: '',
          about: '',
          gender: '',
          reference: '',
          terms: '',     
     } 
        }
    }
    }
</script>