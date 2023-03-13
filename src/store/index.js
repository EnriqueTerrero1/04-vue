import { createStore } from 'vuex'
import counterStore from './Counter'
export default createStore({
 
  modules: {

    counter:counterStore
  }
})
