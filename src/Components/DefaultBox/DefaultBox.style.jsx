import styled from "styled-components";

export const DefaultBoxBase = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    background: ${props => props.background};
    border-radius: 10px;
`;