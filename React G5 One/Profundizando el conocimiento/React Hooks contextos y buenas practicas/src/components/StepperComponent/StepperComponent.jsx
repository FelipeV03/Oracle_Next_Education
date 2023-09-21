import React from 'react';
import './StepperComponent.css';
import { Box, Stepper, Step, StepLabel } from "@mui/material";
import useAuth from '../../Hooks/useAuth';

function StepperComponent(props) {


    const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

    const access = useAuth(jwt);

    console.log(access);

    const steps = ["Datos de usuario", "Datos personales", "Datos de entrega"];

    return (
        <>
            <Box sx={{ width: "100%" }}>
                <Stepper activeStep={props.step}>
                    {steps.map((step) => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
        </>
    );
}

export default StepperComponent;
