import React from 'react'
import styled from 'styled-components'

import theme from 'theme'

const Container = styled.div`
  width: 100%;

  label {
    opacity: 0.8;
    margin: 0 8px;
    font-size: 14px;

    @media (min-width: ${theme.media.sm}) {
      font-size: 16px;
    }
  }

  input {
      width: 100%;
      background: transparent;
      border-left: none;
      border-right: none;
      border-top: none;
      border-bottom: 1px solid ${theme.color.snow};
      font-size: 24px;
      outline: none;
      color: white;
      padding: 8px;
      font-weight: bold;
      /* margin-top: 2px; */

    @media (min-width: ${theme.media.sm}) {
        font-size: 48px;
    }
  }
`

export default function Search ({ value, onChange }) {
    return (
        <Container>
            <label htmlFor="search" title="Busque por artistas, álbuns ou músicas">
                Busque por artistas, álbuns ou músicas
            </label>
            <input
                value={value}
                onChange={onChange}
                id="search"
                placeholder="Comece a escrever..."
                type="text"
            />
        </Container>
    )
}