import React from 'react'

const Albums = (props) => {
    const {albums} = props;
    return (
        <>
        <p>{albums.title}</p>
      </>
    )
}

export default Albums
