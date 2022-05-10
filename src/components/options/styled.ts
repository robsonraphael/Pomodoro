 import styled from 'styled-components';

interface MyProps {
    background: string;
    color: string;
}

 export const Container = styled.div`
    display : flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    width: 400px;
    height: 40px;

    border: none;
    margin: 10px;
 `
 export const Button = styled.button`
    background: ${(props : MyProps) => props.background};
    border: none;
    border-radius: 10px;
    padding: 8px;
    
    font-size: 18px;
    color: ${(props : MyProps) => props.color};
 `