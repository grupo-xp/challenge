import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Search from './index'

describe('<Search />', () => {
	test(`should handle user type`, () => {
        const onChange = jest.fn()
		render(<Search value="" onChange={onChange} />)

        userEvent.type(
            screen.getByLabelText('Busque por artistas, álbuns ou músicas'),
            'iron maiden'
        )
    
        expect(onChange).toHaveBeenCalledTimes(11)
	})
})

