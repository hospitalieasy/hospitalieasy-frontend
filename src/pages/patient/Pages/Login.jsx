import { IconWrapper, LoginBase, LoginSide, SignUpWrapper, SliderSide, Title } from "../Styles/Login.style";

import DefaultBox from "../../../Components/DefaultBox/DefaultBox";
import DefaultLayout from "../../../Components/DefaultLayout/DefaultLayout";
import { Link } from "react-router-dom";
import LoginForm from "../../../Components/LoginForm/LoginForm";
import React from "react";
import SignUpPop from "../../../Components/SignUpPop/SignUpPop";
import SlideShow from "../../../Components/SlideShow/SlideShow";
import { UserContext } from "../../../UserContext";
import { useContext } from "react";

const Login = () => {

    const { setEmail, setPassword, email, password, log, setLog } = useContext(UserContext);

    return (
        <DefaultLayout>
            <LoginBase>
                <DefaultBox display={"flex"} width={"90%"} height={"90%"} background={"#fff"}>
                    <LoginSide>
                        <Title>Welcome to Hospitalieasy!</Title>

                        <LoginForm
                            log={log}
                            setLog={setLog}
                            setEmail={setEmail}
                            setPassword={setPassword}
                            email={email}
                            password={password}
                            padding={"25px"}
                            width={"65%"}
                            height={"60%"}
                            buttonLabel={"LOGIN"}
                            title={"Patient Login"}
                            fontSize={"28px"}
                            text={"Password"}
                            address={"/app-screen"} />

                        <SignUpWrapper>
                            Don't you have an account? <SignUpPop />
                        </SignUpWrapper>
                        <IconWrapper>
                            <Link component={Link} to={'/'}>
                                <img src="https://img.icons8.com/ios-filled/42/null/logout-rounded-left.png" alt="" />
                            </Link>
                        </IconWrapper>
                    </LoginSide>
                    <SliderSide>
                        <SlideShow color={"#fff"} padding={"120px 30px"} />
                    </SliderSide>
                </DefaultBox>
            </LoginBase>
        </DefaultLayout >
    );
}

export default Login;