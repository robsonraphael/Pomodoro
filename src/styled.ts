import styled from 'styled-components';

interface MyProps {
    background: string;
}

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${(props : MyProps) => props.background};
    
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border: none;
`

export default Wrapper;