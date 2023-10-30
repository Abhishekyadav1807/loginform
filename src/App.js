import { Children } from "react";
import Form from "./components/Form";
import Reg from "./components/Reg";
import Login from "./components/Login";
import Register from "./components/Register"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Register />
          }
        ></Route>
        <Route
          path="/login"
          element={
            <Form children={Children}>
                <Login />
            </Form>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;