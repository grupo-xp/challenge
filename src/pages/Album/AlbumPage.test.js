import React from "react";
import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";

import AlbumPage from "./index";
import API from "service";

import { SearchProvider } from "contexts/searchContext";
import { Router } from "react-router-dom";

import albumMock from "tests/mocks/albumDetail";

describe("Album Page", () => {
  test(`should render the Album and Playlist components`, async () => {
    const saveOnContext = jest.fn();
    const history = createMemoryHistory();
    history.push("/albums/iron-maiden");
    const apiMock = jest.spyOn(API, "get").mockResolvedValue(albumMock);

    render(
      <SearchProvider
        value={{
          savePlaylistOnSearchContext: saveOnContext,
          searchContextValues: {
            selectedAlbumId: "any_id",
            playlist: {},
          },
        }}
      >
        <Router history={history}>
          <AlbumPage />
        </Router>
      </SearchProvider>
    );

    await waitFor(() => {
      act(() => {
        expect(screen.getByText(albumMock.name)).toBeVisible();
        expect(screen.getByText(albumMock.artists[0].name)).toBeVisible();
        expect(screen.getByRole("img")).toHaveProperty(
          "src",
          albumMock.images[0].url
        );
        albumMock.tracks.items.forEach((t) =>
          expect(screen.getByText(t.name)).toBeVisible()
        );
      });
    });

    userEvent.click(screen.getByRole("link", { name: /voltar/i }));

    expect(history.location.pathname).toBe("/");
    expect(saveOnContext).toHaveBeenCalledTimes(1);
    expect(saveOnContext).toHaveBeenCalledWith("any_id", albumMock);

    apiMock.mockRestore();
  });
});
