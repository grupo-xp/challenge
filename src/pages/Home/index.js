import React, {useState, useContext, useEffect} from 'react'

import API from 'service'

import SearchContext from 'contexts/searchContext'

import Loading from 'components/Loading'
import Search from 'components/Search'
import Gallery from 'components/Gallery'

export default function Home () {
    const initialSearchValue = {
        items: [],
        word: ''
    }
    const spaceRegex = /\s/
    const diacriticsRegex = /[\u0300-\u036f]/g
    const localSearch = localStorage.getItem('search')
    const { searchContextValues, saveResultOnSearchContext } = useContext(SearchContext)
    const [searchValue, setSearchValue] = useState(localSearch || '')
    const [searchResult, setSearchResult] = useState(initialSearchValue)
    const [loading, setLoading] = useState(false)
    const [timeoutId, setTimeoutId] = useState(null)

    useEffect(() => {
        if (localSearch && searchResult.items.length === 0) {
            searchAlbumsTracksAndArtists(localSearch)
        }
    }, [])

    const handleSearchType = ({ target: { value } }) => {
        setSearchValue(value)

        if (timeoutId) clearTimeout(timeoutId)

        setTimeoutId(setTimeout(
            () => searchAlbumsTracksAndArtists(value), 1000)
        )
    }

    const searchAlbumsTracksAndArtists = async word => {
        if (!word) {
            localStorage.setItem('search', '')
            return setSearchResult(initialSearchValue)
        }

        const sanitizedWord = word
            .normalize('NFD')
            .replace(diacriticsRegex, '')
            .replace(spaceRegex, '%20')

        const cachedValue = searchContextValues.history[word]

        if (cachedValue) {
            return setSearchResult({ items: cachedValue.albums.items, word })
        }

        setLoading(true)
        try {
            const results = await API.get(`https://api.spotify.com/v1/search?q=${sanitizedWord}&type=album,track,artist`)

            if (!results) return

            localStorage.setItem('search', word)
            setSearchResult({ items: results.albums.items, word })
            saveResultOnSearchContext(word, results)
        } catch (err) {
            
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <Search value={searchValue} onChange={handleSearchType} />
            {loading ? <Loading /> : null}
            <Gallery data={searchResult.items} word={searchResult.word} />
        </div>
    )
}