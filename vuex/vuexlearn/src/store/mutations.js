
import * as Types from './mutations-type'


const mutations={
  [Types.INCREMENT](state,count){//state 是自动放入的，默认值得是当前的state
    state.count+=count

  },
  [Types.DECREMENT](state,count){//state 是自动放入的，默认值得是当前的state
    state.count-=count

  }
}
export default mutations
