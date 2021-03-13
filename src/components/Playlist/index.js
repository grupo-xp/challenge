import React from 'react'
import styled from 'styled-components'

import { millisToMinutesAndSeconds } from 'utils/helpers'

const List = styled.ul`
    width: 100%;
    list-style: none;
`

const Item = styled.li`
    font-size: 18px;
    opacity: 0.5;
    display: flex;

    &:not(:first-child) {
        margin-top: 16px;
    }

    &:hover {
        cursor: pointer;
        opacity: 1;
    }

    i {
        display: inline-block;
        font-style: normal;
        width: 50px;
    }

    span {
        width: 100%;
    }

    time {
        margin-left: 12px;
    }
`

export default function Playlist({ data = [] }) {
    return (
        <List>
            {data.map(({ name, id, track_number, duration_ms }) => (
                <Item key={id}>
                    <i>{track_number}.</i>
                    <span>{name}</span>
                    <time>{millisToMinutesAndSeconds(duration_ms)}</time>
                </Item>
            ))}
        </List>
    )
}