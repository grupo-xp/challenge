import React from 'react'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'

import HomePage from './index'
import API from 'service'

import { SearchProvider } from 'contexts/searchContext'
import { Router } from "react-router-dom";

import searchMock, { albums } from 'tests/mocks/search'

describe('Home Page', () => {
	beforeEach(() => {
		jest.useFakeTimers()
		jest.restoreAllMocks()
	})

	test(`should render the Search and Gallery components`, async () => {
		const saveOnContext = jest.fn()
		jest.spyOn(API, 'get').mockResolvedValue(searchMock)
		const history = createMemoryHistory()

		render(
			<SearchProvider value={{
				saveResultOnSearchContext: saveOnContext,
				searchContextValues: {
					history: {}
				}
			}}>
				<Router history={history}>
					<HomePage />
				</Router>
			</SearchProvider>
		)

		userEvent.type(
			screen.getByRole('textbox', { name: "Busque por artistas, álbuns ou músicas"}),
			'iron maiden'
		)

		expect(screen.getByLabelText('Busque por artistas, álbuns ou músicas'))
			.toHaveProperty('value', 'iron maiden')

		act(() => jest.advanceTimersByTime(1000))

		await waitFor(() => {
			expect(screen.getByText('Resultados encontrados para "iron maiden"')).toBeVisible()
			albums.forEach(a => expect(screen.getByText(a.name)).toBeVisible())
		})

		userEvent.click(screen.getByRole('img', { name: 'The Number of the Beast (2015 Remaster)'}))

		expect(saveOnContext).toHaveBeenCalledTimes(1)
		expect(saveOnContext).toHaveBeenCalledWith('iron maiden', searchMock)
		expect(history.location.pathname).toBe('/album/the-number-of-the-beast-(2015-remaster)')
		expect(window.localStorage.getItem('search')).toBe('iron maiden')
	})

	test(`should get values from cache when word had been searched before`, async () => {
		const history = createMemoryHistory()

		render(
			<SearchProvider value={{
				saveResultOnSearchContext: jest.fn(),
				searchContextValues: {
					history: {
						'iron maiden': searchMock
					}
				}
			}}>
				<Router history={history}>
					<HomePage />
				</Router>
			</SearchProvider>
		)

		userEvent.type(
			screen.getByRole('textbox', { name: "Busque por artistas, álbuns ou músicas"}),
			'iron maiden'
		)

		act(() => jest.advanceTimersByTime(1000))

		await waitFor(() => {
			expect(screen.getByText('Resultados encontrados para "iron maiden"')).toBeVisible()
			albums.forEach(a => expect(screen.getByText(a.name)).toBeVisible())
		})
	})
})