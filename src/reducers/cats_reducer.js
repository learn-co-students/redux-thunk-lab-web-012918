export default function catsReducer( state = {pictures: [], loading: false},
 action){
   console.log(action)

   switch(action.type){
     case("LOADING_CATS"):
      return {...state, loading: !state.loading}
     case('FETCH_CATS'):
      console.log('inside fetch cats')
      return {...state, loading: false, pictures: action.payload}
     default:
      return state
   }

 }
