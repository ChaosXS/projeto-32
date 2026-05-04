import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adicionarContato, removerContato, editarContato } from '../store/contactsSlice';
import { Container, ContactCard, Button } from '../styles/GlobalStyles';

const ContactManager = () => {
    const [formData, setFormData] = useState({ id: '', nome: '', email: '', telefone: '' });
    const [isEditing, setIsEditing] = useState(false);
    
    const contacts = useSelector(state => state.contacts.items);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
        dispatch(editarContato(formData));
        setIsEditing(false);
    } else {
        dispatch(adicionarContato({ ...formData, id: Date.now() }));
    }
    setFormData({ id: '', nome: '', email: '', telefone: '' });
    };

    return (
    <Container>
        <h1>Lista de Contatos</h1>
        <form onSubmit={handleSubmit}>
        <input 
            placeholder="Nome Completo" 
            value={formData.nome} 
            onChange={e => setFormData({...formData, nome: e.target.value})} 
            required 
        />
        <input 
            placeholder="E-mail" 
            value={formData.email} 
            onChange={e => setFormData({...formData, email: e.target.value})} 
            required 
        />
        <input 
            placeholder="Telefone" 
            value={formData.telefone} 
            onChange={e => setFormData({...formData, telefone: e.target.value})} 
            required 
        />
        <Button type="submit">{isEditing ? 'Salvar Edição' : 'Adicionar Contato'}</Button>
        </form>

        <ul>
        {contacts.map(contact => (
            <ContactCard key={contact.id}>
            <div>
                <strong>{contact.nome}</strong> - {contact.email} - {contact.telefone}
            </div>
            <div>
                <Button onClick={() => { setFormData(contact); setIsEditing(true); }}>Editar</Button>
                <Button delete onClick={() => dispatch(removerContato(contact.id))}>Remover</Button>
            </div>
            </ContactCard>
        ))}
        </ul>
    </Container>
    );
};