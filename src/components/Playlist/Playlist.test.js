import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from '@testing-library/react'

import { tracks } from 'tests/mocks/albumDetail'

import Playlist from './index'

import {millisToMinutesAndSeconds} from 'utils/helpers'

describe('<Playlist />', () => {
	test(`should display all tracks name and duration`, () => {
		render(
            <Router>
                <Playlist data={tracks} />
            </Router>
        )

        tracks.forEach(({ name, track_number, duration_ms }) => {
            expect(screen.getByText(`${track_number}.`)).toBeVisible()
            expect(screen.getByText(name)).toBeVisible()
            expect(screen.getByText(millisToMinutesAndSeconds(duration_ms))).toBeVisible()
        })
	})
})
