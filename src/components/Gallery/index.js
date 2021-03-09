import React from 'react'
import styled from 'styled-components'

import Album from 'components/Album'
import theme from 'theme'

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

const RootContainer = styled.div`
    margin-top: 24px;
    
    h3 {
        font-size: 24px;
    }
`

export default ({ data, word }) => {
    if (!word) return <div />

    if (data.length === 0) return <h3>Nenhum resultado encontrado para "{word}"</h3>

    return (
        <RootContainer>
            <h3>Resultados encontrados para "{word}"</h3>
            <ListContainer>
                {data.map(({ id, name, images, artists }) => <Album key={id} title={name} subtitle={artists[0].name} image={images[1].url } />)}
            </ListContainer>

        </RootContainer>
    )
}