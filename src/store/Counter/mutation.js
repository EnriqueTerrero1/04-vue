 export const increment=(state)=>{
    state.count++
    state.lastMutation="Increment"
  };
  export const incrementBy=(state,value)=>{
    state.count+=value
    state.lastMutation=`Increment By ${value}`
  };
  export const isLoading=(state,val)=>{
    state.isLoading= val
    state.lastMutation='setLoading'+val
  }