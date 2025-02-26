
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './conponent/ContactForm';
import ContactList from "./conponent/ContactList";
import { Container,Row,Col } from 'react-bootstrap';

function App() {
  return (
    <div>
      <h1 className='title'>연락처</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm/>
          </Col>
          <Col>
            <ContactList/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
