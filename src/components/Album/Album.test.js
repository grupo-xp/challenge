import React from 'react'
import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'

import Album from './index'

import { SearchProvider } from 'contexts/searchContext'
import { BrowserRouter as Router } from "react-router-dom";

import { albumMock } from 'tests/mocks/albums'

describe('<Album />', () => {
	test(`should render an image, title and subtitle`, () => {
		const { id, name, artists, images } = albumMock
		const history = createMemoryHistory()

		render(
			<SearchProvider>
				<Router history={history}>
					<Album id={id} title={name} subtitle={artists[0].name} image={images[1].url} />
				</Router>
			</SearchProvider>
		)

		expect(screen.getByRole('img'))
			.toHaveProperty('src', 'https://i.scdn.co/image/ab67616d00001e026ac3ed972e1c181cd2ee8d55')
		expect(screen.getByText('Iron Maiden (2015 Remaster)')).toBeVisible()
		expect(screen.getByText('Iron Maiden')).toBeVisible()
	})
})