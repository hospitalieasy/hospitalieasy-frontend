import styled from "styled-components";

export const FooterBase = styled.div`
    width: 100%;
    height: 100%;
    color: #fff;
    background: linear-gradient(to right, #27296d, #161122);
`;

export const PatternLayout = styled.div`
    height: 100%;
    width: 100%;
    background-image: 
    radial-gradient(rgb(128, 128, 128) 1%, transparent 8%);
    background-size: 16px 16px;
`;

export const TopMenu = styled.div`
    width: 100%;
    height: 75%;
    padding: 30px 0px;
`;


export const MenuContainer = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    margin: auto;

    @media screen and (max-width: 585px) {
        flex-direction: column;
    }
`;


export const MenuItem = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    font-family: 'Montserrat', sans-serif;

    @media screen and (max-width: 585px) {
        border-bottom: 1px solid;
        :nth-child(3) {
            border-bottom: none;
        }
    }

`;

export const Title = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    font-size: 21px;
    font-family: 'Roboto Condensed', sans-serif;
    letter-spacing: 1px;
`;

export const Link = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    font-size: 13px;
`;

export const Description = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    font-size: 13px;
    font-family: 'Roboto Condensed', sans-serif;
    letter-spacing: 1px;
`;

export const BottomMenu = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    margin: auto;
    background: linear-gradient(to right, #4b4ef7, #19004b);
    padding: 15px 0px;
    background-size: 200% 200%;
    animation: gradient 10s ease infinite;

    @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @media screen and (max-width: 585px) {
        flex-direction: column;
    }
`;

export const Label = styled.div`
    display: flex;
    margin: auto;
    width: 100%;
    font-family: 'Roboto Condensed', sans-serif;
    letter-spacing: 1px;
    font-weight: 200;
    border-right: 1px solid;
    align-items: center;
    justify-content: center;
    font-size: 15px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;


export const CreditWrapper = styled.div`
    display: flex;
    margin: auto;
    width: 100%;
    padding: 0px 50px;
    border-right: 1px solid;
    align-items: center;
    :nth-child(4) {
        border-right: none;
    }

    @media screen and (max-width: 585px) {
        margin-bottom: 12px;
        border-right: none;
        :nth-child(4) {
        border-bottom: none;
        }
    }
`;

export const NameLabel = styled.div`
    width: 100%;
    font-size: 15px;
    font-family: 'Roboto Condensed', sans-serif;
    letter-spacing: 1px;
    font-weight: 200;
`;

export const IconBase = styled.div`
    cursor: pointer;
`;
