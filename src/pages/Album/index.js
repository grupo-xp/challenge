import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { ReactComponent as BackIcon } from 'assets/back.svg';

import Link from 'components/Link'

const Text = styled.span`
  color: white;
  font-size: 18px;
  margin-left: 6px;
`

const BackContainer = styled(Link)`
    display: flex;
    align-items: center;
`

export default function Album () {
    const history = useHistory()

    const handleBack = () => history.goBack()
    return (
        <div>
            <BackContainer onClick={handleBack}>
                <BackIcon 
                    style={{ cursor: 'pointer' }}
                    fill="white"
                    width="12"
                    height="12"
                />
                <Text>Voltar</Text>
            </BackContainer>
        </div>
    )
}