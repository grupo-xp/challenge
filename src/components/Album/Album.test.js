import React from 'react'
import { render, screen } from '@testing-library/react'
import Album from './index'

import SearchContext, { SearchProvider } from 'contexts/searchContext'
import { BrowserRouter as Router } from "react-router-dom";

import { albumMock } from 'tests/mocks/albums'

// import DefaultProvider, { createMockStore } from '../../tests/DefaultProvider'

// const storeFactory = overwrite => createMockStore({
// 	loginState: {
// 		usuarioLogado: false
// 	},
// 	...overwrite
// })

// const textsOnScreen = Object.values(texts)
// const logarUsuarioMock = jest.fn()

{/* <SearchProvider>
<Router basename="/">
  <Route exact path="/" component={Home} />
  <Route exact path="/album/:artist" component={Album} />
</Router>
</SearchProvider> */}

describe('<Album />', () => {
	test(`Dado que o usuário entrou na página Home,
	quando a página for renderizada,
	os textos, botões e icone deverão ser apresentados na tela`, () => {
		// const mockedStore = storeFactory()

		const { debug } = render(
			<SearchProvider>
				<Router>
					<Album id={albumMock.id} title={albumMock} subtitle={album}, image, size = 'sm', disableHover />
				</Router>
			</SearchProvider>
		)
		debug()
		// textsOnScreen.forEach(text => expect(screen.getByText(text)).toBeVisible())
		// expect(screen.getByRole('img', { name: imageAlts.telefoneIconName })).toBeVisible()
	})
})
