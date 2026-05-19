import { useSelector, useDispatch } from 'react-redux';
import { remover } from '../store/contactsSlice';
import { Botao } from '../styles/GlobalStyles';
import styled from 'styled-components';

const Item = styled.div`
  border-bottom: 1px solid #eee;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  return (
    <div>
      {contacts.map(contato => (
        <Item key={contato.id}>
          <div>
            <strong>{contato.nome}</strong><br/>
            {contato.email} | {contato.telefone}
          </div>
          <Botao deletar onClick={() => dispatch(remover(contato.id))}>Excluir</Botao>
        </Item>
      ))}
    </div>
  );
};

export default ContactList;