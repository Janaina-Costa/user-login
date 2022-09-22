import { Navigation } from "./GlobalStyles/AppStyles";
import { GlobalStyles } from "./GlobalStyles/Global";
import RoutesPage from "./routes";

function App() {
  return (
    <>
      <GlobalStyles />
      <h1>Aqui header da pagina</h1>
      <Navigation>
        <a href="/signin">Login</a>
        <a href="/private">Private Page</a>
        <a href="/">Home</a>
      </Navigation>
      <RoutesPage />
      <hr />
    </>
  );
}

export default App;
