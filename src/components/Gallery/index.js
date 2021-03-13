import React, {useContext} from 'react'
import styled from 'styled-components'

import SearchContext from 'contexts/searchContext'

import Album from 'components/Album'

import theme from 'theme'

const RootContainer = styled.div`
    margin-top: 64px;
    
    h3 {
        font-size: 24px;
    }
`

const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 150px);
    gap: 32px 64px;
    justify-content: center;
    margin-top: 24px;

    @media (min-width: ${theme.media.md}) {
        justify-content: space-between;
    }
`

const createList = (array, title, id) => (
    <RootContainer key={id}>
        <h3>{title}</h3>
        <ListContainer>
            {array.map(({ id, name, images, artists }) =>
                <Album 
                    key={`${name}-${id}`}
                    id={id}
                    title={name}
                    subtitle={artists[0].name}
                    image={images[1].url } />)
            }
        </ListContainer>
    </RootContainer>
)

export default ({ data, word }) => {
    const { searchContextValues } = useContext(SearchContext)
    const hasAlbumOnCache = Object.entries(searchContextValues.history)

    if (!word && hasAlbumOnCache.length > 0) {
        return hasAlbumOnCache.map((cache, i) => createList(
            cache[1].albums.items.slice(0, 5),
            `Álbums buscados recentemente para "${cache[0]}"`,
            i
        ))
    }
    
    if (!word) return <RootContainer />

    if (data.length === 0) return (
        <RootContainer>
            <h3>Nenhum resultado encontrado para "{word}"</h3>
        </RootContainer>
    )

    return createList(data, `Resultados encontrados para "${word}"`)
}