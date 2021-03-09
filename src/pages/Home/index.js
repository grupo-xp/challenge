import React, {useState, useMemo} from 'react'

import API from 'service'

import Search from 'components/Search'
import Gallery from 'components/Gallery'

export default function Home () {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState({
        items: [],
        word: ''
    })
    const [timeoutId, setTimeoutId] = useState(null)
    const diacriticsRegex = /[\u0300-\u036f]/g
    const spaceRegex = /\s/

    const handleSearchType = ({ target: { value } }) => {
        setSearchValue(value)

        if (timeoutId) clearTimeout(timeoutId)

        setTimeoutId(setTimeout(
            () => searchAlbumOrArtistOnSpotifyAPI(value), 1000)
        )
    }

    const searchAlbumOrArtistOnSpotifyAPI = async word => {
        if (!word) return

        const sanitizedWord = word
            .normalize('NFD')
            .replace(diacriticsRegex, '')
            .replace(spaceRegex, '%20')

        return await API.get(
            `https://api.spotify.com/v1/search?q=${sanitizedWord}&type=album,track,artist`
        ).then(({ albums, tracks, artists }) => {
            setSearchResult({ items: albums.items, word })
        })
        // salvar esses dados num local global
    }

    return (
        <div>
            <Search value={searchValue} onChange={handleSearchType} />
            <Gallery data={searchResult.items} word={searchResult.word} />
        </div>
    )
}