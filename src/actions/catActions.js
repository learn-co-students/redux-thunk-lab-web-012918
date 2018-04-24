// URL = 'http://localhost:4000/db'
import "isomorphic-fetch"
export const fetchCats = (name) => {
  // const cats = fetch('http://localhost:4000/db').then(resp => resp.json).then(json => json.images)
  return (dispatch) => {
    dispatch({
      type: "LOADING_CATS"
    })
    return fetch('http://localhost:4000/db')
    .then(resp => resp.json())
    .then(json => dispatch({
      type: "FETCH_CATS",
      payload: json.images
    }))
  }

};
