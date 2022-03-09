import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import AppRoutes from './routes';
import { BrowserRouter as Router, Link } from "react-router-dom"
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from './components/ErrorFallback'
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="App">
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#home">
                  <Link to={"/"} className="nav-link">React MERN Stack CRUD</Link>
                </Navbar.Brand>
                <Nav className="justify-content-end">
                  <Nav>
                    <Link to={"/create"} className="nav-link">Create Student</Link>
                  </Nav>
                  <Nav>
                    <Link to={"/list"} className="nav-link">Student List</Link>
                  </Nav>

                </Nav>
              </Container>
            </Navbar>
            <Container>
              <Row>
                <Col md="12">
                  <div className="wrapper">
                    <AppRoutes />
                  </div>
                </Col>
              </Row>
            </Container>

          </div>

        </Suspense>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
