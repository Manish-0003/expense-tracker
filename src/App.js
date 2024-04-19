import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";

import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
