
import * as Types from './mutations-type'


const actions={
  add({commit},count){

    commit(Types.INCREMENT,count)
  },
  minus({commit},count){
    commit(Types.DECREMENT,count)
  }

}
export default actions
