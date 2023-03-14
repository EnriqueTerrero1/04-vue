import getRandomInt from '../../Helpers/getRandomInt'


export const  incrementRandomInt= async({commit})=>{
    commit('isLoading',true)
    const randomInt= await getRandomInt()
    commit('incrementBy',randomInt)
    commit('isLoading',false)
}