import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Card, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import './login.scss';
import Image1 from '../../assets/top.png';
import Image2 from '../../assets/bottom.png';
import Image3 from '../../assets/avatar.png';
import Logo from '../../assets/logo.svg';

const Login = () => {
    let navigate = useNavigate();
    const handleSignIn = () => {
        navigate('/dashboard');
    }
    return (
        <Card className="container">
            <Box className="messageCard">
                <img className="image1" src={Image1} />
                <img className="image2" src={Image2} />
                <img className="image3" src={Image3} />
                <Box className="contentContainer">
                    <Typography
                        variant="h4"
                        gutterBottom
                        component="div"
                        className="content title"
                    >
                        Accelerate problem solving today, and rethink solutions for tomorrow.
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        gutterBottom
                        component="div"
                        className="content"
                    >
                        What does digital health mean to you?
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        gutterBottom
                        component="div"
                        className="content"
                    >
                        Whether you see potential in operations or and entirely new path for your business, IQVIA can help you harness digital the right way.
                    </Typography>
                </Box>
            </Box>
            <Box className="formCard">
                <img className="logo" src={Logo} />
                <Typography
                    variant="h6"
                    gutterBottom
                    component="div"
                >
                    Sign in
                </Typography>
                <form className="signForm">
                    <Typography
                        variant="subtitle2"
                        gutterBottom
                        component="div"
                        className="formTitle"
                    >
                        Email
                    </Typography>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        type="email"
                        className="formField"
                    />
                    <Box className="textContainer">
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            component="div"
                            className="formTitle"
                        >
                            Password
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            component="div"
                            className="forgot"
                        >
                            Forgot Password?
                        </Typography>
                    </Box>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        type="password"
                        className="formField"
                    />
                    <Button
                        variant="contained"
                        className="signBtn"
                        sx={{ marginTop: '2rem' }}
                        onClick={handleSignIn}
                    >
                        Sign In
                    </Button>
                </form>
                <Box className="captionContainer">
                    <Typography
                        variant="caption"
                        gutterBottom
                        component="div"
                    >
                        Facing trouble in Sign in&nbsp;
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        gutterBottom
                        component="div"
                        className="forgot"
                    >
                        Contact us
                    </Typography>
                </Box>
            </Box>
        </Card>
    )
}

export default Login;