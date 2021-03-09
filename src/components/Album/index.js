import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Container = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;

    &:hover {
        transform: translateY(-5px);
        transition: all, .5s;

        img {
            transform: scale(1.1);
            transition: all .1s;
        }
    }

    span {
        margin-top: 16px;
        text-align: center;
        font-weight: bold;
        font-size: 14px;
    }

    p {
        color: rgb(153, 153, 153);
        font-size: 13px;
        margin-top: 4px;
    }
`

const ImageContainer = styled.div`
  width: 150px;
  height: 150px;
`

const Image = styled.img`
    width: 150px;
    height: 150px;
    
`

const parameterRegex = /\(|\)|[|]|,|\./g
const notWordRegex = /\W/g

const formatLink = albumName => albumName.toLowerCase().replace(parameterRegex,'').replace(notWordRegex, '-')

export default ({ title, subtitle, image }) => (
    <Container to={`/album/${formatLink(title)}`}>
        <ImageContainer>
            <Image src={image} />
        </ImageContainer>
        <span>{title}</span>
        <p>{subtitle}</p>
    </Container>
)