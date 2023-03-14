import getRandomInt from '../../Helpers/getRandomInt'
import state from './state'
import * as mutations from './mutation'
import * as actions from './action'
import * as getters from './getters'
const counterStore ={

    namespaced:true,
   // state:state,
      state,
      getters,
      mutations,
      actions
      //las mutaciones cambian directamente los state
      
}


export default counterStore