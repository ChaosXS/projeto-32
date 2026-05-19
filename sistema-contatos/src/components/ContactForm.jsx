import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { adicionar } from '../store/contactsSlice';
import { Form, Input, Botao } from '../styles/GlobalStyles';

const ContactForm = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !email || !telefone) return;

    dispatch(adicionar({
      id: Date.now(),
      nome,
      email,
      telefone
    }));

    setNome(''); setEmail(''); setTelefone('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" placeholder="Nome Completo" value={nome} onChange={e => setNome(e.target.value)} />
      <Input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
      <Input type="tel" placeholder="Telefone" value={telefone} onChange={e => setTelefone(e.target.value)} />
      <Botao type="submit">Adicionar Contato</Botao>
    </Form>
  );
};

export default ContactForm;