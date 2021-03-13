import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

import Link from './index'

describe('<Link />', () => {
	test(`should call onClick function when user clicks`, () => {
        const onClick = jest.fn()
		render(
            <Router>
                <Link to="/back" onClick={onClick}>
                    voltar
                </Link>
            </Router>
        )

        userEvent.click(screen.getByRole('link', { name: 'voltar'}))
        expect(onClick).toHaveBeenCalledTimes(1)
	})
})
