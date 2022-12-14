import styled from "styled-components";

export const LoginBase = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center; 
    justify-content: center;
`;

export const LoginSide = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 30px;
`;

export const Title = styled.div`
    width: 100%;
    font-size: 30px;
    margin-bottom: 35px;
    margin-left: 20px;
    margin-top: 50px;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 1px;
`;

export const SignUpWrapper = styled.div`
    width: 65%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 25px;
    margin-top: 0px;
    font-size: 17px;
`;

export const IconWrapper = styled.div`
    margin-top: 30px;
    margin-bottom: 20px;
`;

export const SliderSide = styled.div`
    height: 100%;
    width: 50%;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    animation: gradient 15s ease infinite;
    background: linear-gradient(to right, #8d2eb9, #3ab1c8);
	background-size: 200% 200%;
	animation: gradient 12s ease infinite;

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
`;





