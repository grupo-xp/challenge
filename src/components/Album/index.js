import React, {useContext} from 'react'
import styled, { css } from 'styled-components'
import {Link} from 'react-router-dom'

import SearchContext from 'contexts/searchContext'

const fontSizes = {
    sm: '14px',
    md: '18px'
}

const Container = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;

    ${props => !props.hover && css`
        &:hover {
            transform: translateY(-5px);
            transition: all, .5s;

            img {
                transform: scale(1.1);
                transition: all .1s;
            }
        }
    `}
    
    span {
        margin-top: 16px;
        text-align: center;
        font-weight: bold;
        font-size: ${props => fontSizes[props.size]};
    }

    p {
        color: rgb(153, 153, 153);
        font-size: ${props => fontSizes[props.size]};
        margin-top: 4px;
    }
`

const imgSizes = {
    sm: '150px',
    md: '300px'
}

const ImageContainer = styled.div`
  width: ${props => imgSizes[props.size]};
  height: ${props => imgSizes[props.size]};

  img {
    width: ${props => imgSizes[props.size]};
    height: ${props => imgSizes[props.size]};
    background: lightgray;
  }
`

const formatLink = (albumName = '') => albumName.toLowerCase().replace(/\s/g, '-')

export default ({ id, title, subtitle, image, size = 'sm', hover }) => {
    const { saveAlbumIdOnSearchContext } = useContext(SearchContext)

    const handleAlbumClick = () => saveAlbumIdOnSearchContext(id)

    return (
        <Container hover={hover} size={size} to={`/album/${formatLink(title)}`} onClick={handleAlbumClick}>
            <ImageContainer size={size}>
                <img src={image} alt={title} /> 
            </ImageContainer>
            <span>{title}</span>
            <p>{subtitle}</p>
        </Container>
    )
}