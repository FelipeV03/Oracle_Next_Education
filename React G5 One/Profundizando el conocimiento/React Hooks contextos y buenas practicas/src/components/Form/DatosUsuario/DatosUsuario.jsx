import { React, useState } from 'react';
import './DatosUsuario.css';
import { TextField, Button, Box } from "@mui/material";

function DatosUsuario(props) {

    // Función para validar el formulario
    const [errors, setErrors] = useState({
        email: {
            error: false,
            helperText: ""
        },
        password: {
            error: false,
            helperText: ""
        }
    })


    // Función para enviar los datos del formulario
    const handleSubmit = ((e) => {
        e.preventDefault();

        // Validar que los campos no estén vacíos y que no haya errores
        if (errors.email.error || errors.password.error) {
            alert("Hay errores en el formulario");
            return;
        } else if (email === '' || password === '') {
            alert("Llene todos los campos");
            return;
        }

        // alert("Datos enviados");
        console.log("Datos", { email, password });
        props.actualizarStep(1);
    })

    // Funciones para validar el campo de correo electrónico
    const [email, setEmail] = useState('')
    const changeEmail = ((e) => {
        // console.log(e.target.value);
        setEmail(e.target.value);
    })
    const validateEmail = ((value) => {
        if (value.includes('@') && value.includes('.')) {
            setErrors({
                ...errors,
                email: {
                    error: false,
                    helperText: ""
                }
            })
        } else {
            setErrors({
                ...errors,
                email: {
                    error: true,
                    helperText: "El correo electrónico no es válido"
                }
            })
        }
    })


    // Funciones para validar el campo de contraseña
    const [password, setPassword] = useState('')
    const changePassword = ((e) => {
        // console.log(e.target.value);
        setPassword(e.target.value);
    })
    const validatePassword = ((value) => {
        if (value.length < 5) {
            setErrors({
                ...errors,
                password: {
                    error: true,
                    helperText: "La contraseña debe tener al menos 5 caracteres"
                }
            })
        } else {
            setErrors({
                ...errors,
                password: {
                    error: false,
                    helperText: ""
                }
            })
        }
    })


    return (
        <>
            <Box
                component="form"
                autocomplete="off"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                }}
                onSubmit={handleSubmit}
            >
                <TextField
                    // required
                    label="Correo electrónico"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    type="email"
                    value={email}
                    onChange={changeEmail}
                    error={errors.email.error}
                    helperText={errors.email.error ? errors.email.helperText : ""}
                    onBlur={(e) => validateEmail(e.target.value)}
                />
                <TextField
                    // required
                    label="Contraseña"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    type="password"
                    value={password}
                    onChange={changePassword}
                    error={errors.password.error}
                    helperText={errors.password.error ? errors.password.helperText : ''}
                    onBlur={(e) => validatePassword(e.target.value)}
                />
                <Button variant="contained" type="submit">
                    Siguiente
                </Button>
            </Box>
        </>
    );
}

export default DatosUsuario;
