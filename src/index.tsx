import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./redux/store";
import { MediaDetails } from "./components/MediaList/MediaDetails/MediaDetails";
import { MediaList } from "./components/MediaList/MediaList";
import App from "./App";
import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<MediaList />} />
            <Route path="movies" element={<MediaList />} />
            <Route path="tv" element={<MediaList />} />
            <Route path=":id" element={<MediaDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
