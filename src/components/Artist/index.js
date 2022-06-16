import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'

const Artist = () => {
    const [artists,setArtist] = useState([
        { 
        name: 'Louis Armstrong', 
        genre: 'Jazz', 
        bio: 'Louis Armstrong August 4, 1901 -- July 6, 1971, nicknamed Satchmo or Pops, was an American jazz trumpeter and singer from New Orleans, Louisiana.'
        },
        { 
        name: 'Ray Charles', 
        genre: 'R&B', 
        bio: 'A famously blind legendary American pianist, singer, composer, and bandleader, a leading entertainer billed as \'the Genius.\''
        },
        { 
        name: 'Spirit', 
        genre: 'rock', 
        bio: 'Spirit was an American rock band founded in 1967 and based in Los Angeles, California. Their most commercially successful single in the United States was \'I Got a Line on You\'. They were also known for their albums, including their self-titled debut album, The Family That Plays Together, Clear, and Twelve Dreams of Dr.'
        }
    ])
    
    const renderRows = () => { 
        return artists.map((a,i) => 
            <tr key={i}>
                <td>{a.name}</td>
                <td>{a.genre}</td>
                <td>{a.bio}</td>
            </tr>
            )
        }

    return (
        <Table striped bordered hover variant="dark">
        <thead >
          <tr>
            <th>Name</th>
            <th>Genre</th>
            <th>Bio</th>
          </tr>
        </thead>
        <tbody>
          { renderRows() }
        </tbody>
      </Table>
  )
}

export default Artist;
