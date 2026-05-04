import styled from 'styled-components';

export const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
`;

export const ContactCard = styled.div`
    background: #f4f4f4;
    border: 1px solid #ddd;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Button = styled.button`
    padding: 8px 12px;
    margin-left: 5px;
    cursor: pointer;
    background-color: ${props => props.delete ? '#ff4d4d' : '#4CAF50'};
    color: white;
    border: none;
    border-radius: 4px;
`;