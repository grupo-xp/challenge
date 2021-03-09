import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { ReactComponent as BackIcon } from 'assets/back.svg';

import Link from 'components/Link'

const BackContainer = styled(Link)`
  display: flex;
  justify-content: center;

  span {
      background: crimson;
      color: white;
  }
`

const Text = styled.span`
  color: white;
`

const Container = styled.div`
    display: flex;
`

export default function Album () {
    const history = useHistory()

    const handleBack = () => history.goBack()
    return (
        <Container id="princelokao">
            <BackIcon 
                    style={{ cursor: 'pointer' }}
                    onClick={handleBack}
                    fill="white"
                    width="16"
                    height="16"
                />
            <Text>Voltar</Text>
            
        </Container>
    )
}