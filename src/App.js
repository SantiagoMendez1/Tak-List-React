import React from "react";
import "./Styles/Page.css";
import AddProduct from "./Components/AddProduct";
import Head from "./Components/Head";

class App extends React.Component {
  render() {
    return (
      <div>
        <p>
          <Head
            PrincipalText="Virtual Market in React."
            SecondText="¡The best products!"
            image="logo192.png"
          />
        </p>
        <div className="Page">
          <p>
            <AddProduct />
          </p>
        </div>
      </div>
    );
  }
}

export default App;
