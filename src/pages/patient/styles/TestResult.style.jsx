import styled from "styled-components";

export const TestResultBase = styled.div`
    height: 88%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContentWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Section1 = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
    display: flex;
    justify-content: space-between;
    margin: 15px 0px;
`;

export const Section2 = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
    display: flex;
    justify-content: space-between;
    margin: 15px 0px;
    align-items: center;
`;

export const Section3 = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
    display: flex;
    margin: 15px 0px;
    align-items: center;
`;


export const Title = styled.div`
`;
