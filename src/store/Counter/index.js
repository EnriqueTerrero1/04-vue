import getRandomInt from '../../Helpers/getRandomInt'


const counterStore ={

    namespaced:true,
    state:()=>( {
        count:1,
        lastMutation:'none',
        isLoading:false
      }),
      getters: {
    
        squareCount(state){
          return state.count*state.count
        }
    
      },
    
      //las mutaciones cambian directamente los state
      mutations: {
        increment(state){
          state.count++
          state.lastMutation="Increment"
        },
        incrementBy(state,value){
          state.count+=value
          state.lastMutation=`Increment By ${value}`
        },
        isLoading(state,val){
          state.isLoading= val
          state.lastMutation='setLoading'+val
        }
      },
      actions: {
         async incrementRandomInt({commit}){
            commit('isLoading',true)
            const randomInt= await getRandomInt()
            commit('incrementBy',randomInt)
            commit('isLoading',false)
        }
      },
}


export default counterStore