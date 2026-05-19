import { Provider } from 'react-redux';
import { store } from './store';
import { GlobalStyle, Container } from './styles/GlobalStyles';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <h1>Agenda de Contatos</h1>
        <ContactForm />
        <ContactList />
      </Container>
    </Provider>
  );
}

export default App;