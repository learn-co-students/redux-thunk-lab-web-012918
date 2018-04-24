import React from 'react'

const CatList = (props) =>  {
  // console.log(props)
  let catPics = props.catPics.map(pic => <img src={pic.url} alt="pic"/>)
    return (
      <ul>
        yo
        {catPics}
      </ul>
    )
}

export default CatList;
