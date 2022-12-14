import { Button, TextField } from "@mui/material";
import { LoginFormBase, Title } from "./LoginForm.style"
import React, { useEffect } from "react";

import SnackBar from "../SnackBar/SnackBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = (props) => {
    const {
        user,
        setUser,
        setUserIndex,

        title,
        width,
        height,
        padding,
        text,
        fontSize
    } = props;

    /* navigate hook */
    const navigate = useNavigate();

    /* sets the email and password */
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    /* gets the data from server and checks is there any match user */
    const getData = async (e) => {
        e.preventDefault();

        const response = await axios.get(
            `https://hospitaleasyapi.azurewebsites.net/api/Patient`
        ).catch(error => (console.log(error)))

        if (!((email == "") || (password == ""))) {
            let index = 0;
            while (index < response.data.length) {
                if ((response.data[index].Email === email) && (response.data[index].Password === password)) {
                    setUserIndex(index)
                    setTimeout(() => {
                        setUser(true)
                        navigate("/app-screen")
                    }, 2000);
                    break;
                }
                if (index === (response.data.length - 1)) {
                    break;
                }
                index++;
            }
        }
    }

    /* sets the notification */
    const [loginNotification, setLoginNotification] = useState();

    /* checks if there any current user if it is not makes the notification false and renders the page  */
    useEffect(() => {
        if (!user) {
            setLoginNotification(false);
        }
    }, [])

    /* renders the page whenever email, password are changes and gets the notification */
    useEffect(() => {
        const getData = async () => {

            const response = await axios.get(
                `https://hospitaleasyapi.azurewebsites.net/api/Patient`
            ).catch(error => (console.log(error)))

            if (!((email == "") || (password == ""))) {
                let index = 0;
                let current = 0;
                while (index < response.data.length) {
                    if ((response.data[index].Email == email)) {
                        current = index;
                        if ((response.data[index].Password == password)) {
                            setLoginNotification(true);
                        } else if ((response.data[index].Password !== password)) {
                            setLoginNotification(false);
                        }
                    }
                    if ((response.data[current].Email !== email)) {
                        setLoginNotification(false)
                    }

                    index++;
                }

            } else {
                setLoginNotification(false);
            }
        }
        getData();

    }, [email, password])

    return (
        <LoginFormBase padding={padding} width={width} height={height}>
            <Title fontSize={fontSize}>{title}</Title>

            <TextField id="outlined-basic" label="E-mail" variant="standard" onChange={(e) => setEmail(e.target.value)} />

            <TextField id="outlined-password-input" label={text} type={"password"} autoComplete={"current-password"} variant="standard" onChange={(e) => setPassword(e.target.value)} />

            <Button onClick={getData} className="login" variant="contained">
                <SnackBar loginNotification={loginNotification} />
            </Button>
        </LoginFormBase>
    );
}

export default LoginForm;