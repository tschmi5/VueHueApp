<template>
  <v-app>
      <!-- <Login v-if="loggedIn"></Login> -->
      <Home></Home>
      <!-- <tab name="Step 1" info="Introduction" :selected="true">
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input class="input" name="fullname" type="text" placeholder="Text input"
                        v-model="registration.name" data-vv-scope="step1" v-validate="'required'">
                    <p class="help is-danger" v-show="errors.has('step1.fullname')">
                         No Bueno 
                    </p>
                </div>
            </div>
        </tab> -->
  </v-app>
</template>

<script>
import Home from './components/Home';
import Login from './components/Login';
import HueBridge from './services/API/HueBridge.js'
import Tab from './components/Tab'

export default {
  name: 'App',

  components: {
    Home,
    Login,
    Tab
  },

  data: () => ({
    loggedIn: true
  }),
  created(){
    this.isLoggedIn = HueBridge.isLoggedIn();
  }
};
</script>
