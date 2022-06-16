import React, {useState} from 'react'
import Table from 'react-bootstrap/Table'

// Renders Track Information
const ArtistMusic = () => {
        
        const [tracks,setTracks] = useState([
            { 
                art: 'insert img here', 
                artid: 1,
                album: '', 
                release: 1927,
                track: 'Potato head blues'
            },
            { 
                art: 'insert img here', 
                artid: 1,
                album: 'What a Wonderful World', 
                release: 1967,
                track: 'What a Wonderful World'
            },
            { 
                art: 'insert img here', 
                artid: 2,
                album: 'Genius Loves Company', 
                release: 1988,
                track: 'Sweet Potato Pie'
            },
            { 
                art: 'insert img here', 
                artid: 2,
                album: 'Blues Brothers OST', 
                release: 1980,
                track: 'Shake A Tail Feather'
            },
            { 
                art: 'insert img here', 
                artid: 2,
                album: 'Jazz',
                release: 1962,
                track: 'Hit the Road Jack'
            },
            { 
                art: 'insert img here', 
                artid: 3,
                album: 'Potatoland',
                release: 1972,
                track: 'Lonely In Potatoland'
            },
            { 
                art: 'insert img here', 
                artid: 3,
                album: 'Potatoland',
                release: 1972,
                track: 'Giant Potatoes'
            },

        ])

    const renderRows = () => {
        return tracks.map(t => 
        <tr>
            <td>{t.art}</td>
            <td>{t.track}</td>
            <td>{t.album ? t.album : "N/A"}</td>
            <td>{t.release}</td>
        </tr>
        )}

    return (
        <Table striped bordered hover variant="dark">
        <thead >
          <tr>
            <th>Art</th>
            <th>Track</th>
            <th>Album</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody>
          { renderRows() }
        </tbody>
      </Table>
  )

}

export default ArtistMusic
