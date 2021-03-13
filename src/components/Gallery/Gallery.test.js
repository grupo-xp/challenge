import React from 'react'
import { render, screen } from '@testing-library/react'

import Gallery from './index'

import { SearchProvider } from 'contexts/searchContext'
import { BrowserRouter as Router } from "react-router-dom";

import { albums } from 'tests/mocks/search'

describe('<Gallery />', () => {
	test(`should render a list of albums when data has values`, () => {
		render(
			<SearchProvider>
				<Router>
					<Gallery data={albums} word="iron maiden" />
				</Router>
			</SearchProvider>
		)

        expect(screen.getByRole(
            'heading', { name: 'Resultados encontrados para "iron maiden"'})
        ).toBeVisible()
        albums.forEach(({ name}) => expect(screen.getByText(name)).toBeVisible())
	})

    test(`should render a empty message when data is empty`, () => {
		render(
			<SearchProvider>
				<Router>
					<Gallery data={[]} word="iron maiden" />
				</Router>
			</SearchProvider>
		)

        expect(screen.getByText(/Nenhum resultado encontrado para "iron maiden"/im)).toBeVisible()
	})

    test(`should be hidden when data and word are empty`, () => {
		render(
			<SearchProvider>
				<Router>
					<Gallery data={[]} word="" />
				</Router>
			</SearchProvider>
		)
        
        expect(screen.queryByRole('heading')).toBeNull()
        expect(screen.queryByRole('link')).toBeNull()
	})

    test(`should display cached albums
    when user had searched something before and clean input word`, () => {
		const {debug} = render(
			<SearchProvider value={{ 
                searchContextValues: {
                    history: {
                        'iron maiden': {
                            albums: {
                                items: albums
                            }
                        }
                    }
                }
            }}>
				<Router>
					<Gallery data={[]} word="" />
				</Router>
			</SearchProvider>
		)
        
        expect(screen.getByRole(
            'heading', { name: 'Álbums buscados recentemente para "iron maiden"'})
        ).toBeVisible()


        albums.slice(0,4).forEach(({ name }) => expect(screen.getByText(name)).toBeVisible())
	})
})

