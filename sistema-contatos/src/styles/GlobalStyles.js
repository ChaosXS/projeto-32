import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px; }
`;

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Botao = styled.button`
  padding: 10px;
  background-color: ${props => props.deletar ? '#ff4d4d' : '#4CAF50'};
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  &:hover { opacity: 0.8; }
`;