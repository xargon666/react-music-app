import React, { useState } from 'react'

const Artist = () => {
    const [artists,setArtist] = useState([
        { name: "Radiohead", genre: "Alternative/Indie", intro: "These a strange kettle of fish."},
        { name: "Black Sabbath", genre: "Heavy Metal", intro: "I am Iron Man"},
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
