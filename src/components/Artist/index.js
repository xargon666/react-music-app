import React, { useState } from 'react'

const Artist = () => {
    const [artists,setArtist] = useState([
        { name: "Louis Armstrong", genre: "Jazz", intro: "Louis Armstrong (August 4, 1901 -- July 6, 1971), nicknamed Satchmo or Pops, was an American jazz trumpeter and singer from New Orleans, Louisiana."},
        { name: "Ray Charles", genre: "R&B", intro: "A famously blind legendary American pianist, singer, composer, and bandleader, a leading entertainer billed as “the Genius.”"},
        { name: "Spirit", genre: "rock", intro: "Spirit was an American rock band founded in 1967 and based in Los Angeles, California. Their most commercially successful single in the United States was \"I Got a Line on You\". They were also known for their albums, including their self-titled debut album, The Family That Plays Together, Clear, and Twelve Dreams of Dr."}
    ])
    
    const renderArtists = () => artists.map(art => <p> {art.name} {art.genre} {art.intro}</p>)

    return (
    <div>
        Hello World
        {renderArtists()}
    </div>
  )
}

export default Artist;
