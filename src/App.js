import RoutesApp from "./routes";
import { Navbar, Footer } from "./components";
import styled from "styled-components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Content>
        <RoutesApp />
      </Content>
      <Footer />
    </div>
  );
}
const Content = styled.div`
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: #ffffff;
  padding: 20px 0;
`;

export default App;
