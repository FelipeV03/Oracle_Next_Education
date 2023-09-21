import { React, useState } from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, MainSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "../Form/DatosUsuario/DatosUsuario";
import DatosPersonales from "../Form/DatosPersonales/DatosPersonales";
import DatosEntrega from "../Form/DatosEntrega/DatosEntrega";
import Complete from "../Form/Complete/Complete";
import Stepper from "../StepperComponent/StepperComponent";

const Form = () => {

    const [activateStep, setActivateStep] = useState(0);

    const actualizarStep = (step) => {
        console.log("Actualizar", step);
        setActivateStep(step);
    }


    const steps = {
        0: <DatosUsuario actualizarStep={actualizarStep} />,
        1: <DatosPersonales actualizarStep={setActivateStep} />,
        2: <DatosEntrega actualizarStep={actualizarStep} />,
        3: <Complete />
    }

    // const selectStep = () => {
    //     switch (activateStep) {
    //         case 0: {
    //             return (
    //                 <DatosUsuario />
    //             )
    //         }
    //         case 1: {
    //             return (
    //                 <DatosPersonales />
    //             )
    //         }
    //         case 2: {
    //             return (
    //                 <DatosEntrega />
    //             )
    //         }
    //         case 3: {
    //             return (
    //                 <Complete />
    //             )
    //         }
    //         default: {
    //             return(
    //                 <DatosUsuario />
    //             )
    //         }
    //     }
    // }

    return (
        <Box
            sx={{
                padding: "30px",
                display: "flexbox",
                flexDirection: "column",
            }}
        >
            <LogoSpace>
                <Img src={"/favicon.png"} />
                <Typography variant="h3">AluraFood</Typography>
            </LogoSpace>
            <FormSpace>
                {
                    (activateStep < 3) &&
                    <Stepper step={activateStep} />
                }
                {steps[activateStep]}
                {/* <DatosUsuario /> */}
                {/* <DatosPersonales /> */}
                {/* <DatosEntrega /> */}
                {/* {selectStep()} */}
            </FormSpace>
        </Box>
    );
};

export default Form;
