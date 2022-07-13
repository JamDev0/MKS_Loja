import { ThemeProvider } from "styled-components";
import { BodyContainer } from "./App.styles";
import { Footer } from "./components/Footer";

import { Header } from "./components/Header";

import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";

import { GlobalStyles } from "./styles/global";

import { defaultTheme } from "./styles/themes/default";

import { Provider } from "react-redux";

import { store } from "./redux/store";

export function App() {
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Provider store={store}>
        <BodyContainer>
          <Header />

          <Main />

          <Footer />

          <Sidebar />
        </BodyContainer>
      </Provider>

      <GlobalStyles />
    </ThemeProvider>
  )
}