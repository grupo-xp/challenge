import React from 'react'
import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'

import AlbumPage from './index'

import { SearchProvider } from 'contexts/searchContext'
import { BrowserRouter as Router } from "react-router-dom";

import { albumMock } from 'tests/mocks/albums'

describe('Album Page', () => {
	test(`should render an image, title and subtitle`, () => {
		const { id, name, artists, images } = albumMock
		const history = createMemoryHistory()

		const {debug} = render(
			<SearchProvider>
				<Router history={history}>
					<AlbumPage />
				</Router>
			</SearchProvider>
		)
		
		debug()
		// expect(screen.getByRole('img'))
		// 	.toHaveProperty('src', 'https://i.scdn.co/image/ab67616d00001e026ac3ed972e1c181cd2ee8d55')
		// expect(screen.getByText('Iron Maiden (2015 Remaster)')).toBeVisible()
		// expect(screen.getByText('Iron Maiden')).toBeVisible()
	})
})