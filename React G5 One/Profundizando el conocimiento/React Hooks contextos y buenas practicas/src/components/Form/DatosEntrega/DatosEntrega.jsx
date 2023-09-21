import { React, useState } from 'react';
import './DatosEntrega.css';
import { TextField, Button, Box } from "@mui/material";

function DatosEntrega(props) {

    // Función para validar el formulario
    const [errors, setErrors] = useState({
        direccion: {
            error: false,
            helperText: ''
        },
        ciudad: {
            error: false,
            helperText: ''
        },
        estado: {
            error: false,
            helperText: ''
        }
    })

    // Función para enviar los datos del formulario
    const handleSubmit = ((e) => {
        e.preventDefault();

        if (errors.direccion.error || errors.ciudad.error || errors.estado.error) {
            alert("Hay errores en el formulario");
            return;
        }else if (direccion === '' || ciudad === '' || estado === '') {
            alert("Llene todos los campos");
            return;
        }

        console.log("Datos", {direccion, ciudad, estado});
        props.actualizarStep(3);
    })


    // Funciones para validar el campo de dirección
    const [direccion, setDireccion] = useState('');
    const changeDireccion = ((e) => {
        // console.log(e.target.value);
        setDireccion(e.target.value);
    })
    const validateDireccion = ((value) => {
        if (value.length < 5) {
            setErrors({
                ...errors,
                direccion: {
                    error: true,
                    helperText: 'La dirección debe tener al menos 5 caracteres'
                }
            })
        } else {
            setErrors({
                ...errors,
                direccion: {
                    error: false,
                    helperText: ''
                }
            })
        }
    })

    // Funciones para validar el campo de ciudad
    const [ciudad, setCiudad] = useState('');
    const changeCiudad = ((e) => {
        // console.log(e.target.value);
        setCiudad(e.target.value);
    })
    const validateCiudad = ((value) => {
        if (value.length < 5) {
            setErrors({
                ...errors,
                ciudad: {
                    error: true,
                    helperText: 'La ciudad debe tener al menos 5 caracteres'
                }
            })
        }else{
            setErrors({
                ...errors,
                ciudad: {
                    error: false,
                    helperText: ''
                }
            })
        }
    })

    // Funciones para validar el campo de estado
    const [estado, setEstado] = useState('');
    const changeEstado = ((e) => {
        // console.log(e.target.value);
        setEstado(e.target.value);
    })
    const validateEstado = ((value) => {
        if (value.length < 5) {
            setErrors({
                ...errors,
                estado: {
                    error: true,
                    helperText: 'El estado debe tener al menos 5 caracteres'
                }
            })
        }else{
            setErrors({
                ...errors,
                estado: {
                    error: false,
                    helperText: ''
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
                    label="Dirección"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    type="text"
                    value={direccion}
                    onChange={changeDireccion}
                    error={errors.direccion.error}
                    helperText={errors.direccion.error ? errors.direccion.helperText : ''}
                    onBlur={(e) => validateDireccion(e.target.value)}
                />
                <TextField
                    label="Ciudad"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    type="text"
                    value={ciudad}
                    onChange={changeCiudad}
                    error={errors.ciudad.error}
                    helperText={errors.ciudad.error ? errors.ciudad.helperText : ''}
                    onBlur={(e) => validateCiudad(e.target.value)}
                />
                <TextField
                    label="Estado/Provincia"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    type="text"
                    value={estado}
                    onChange={changeEstado}
                    error={errors.estado.error}
                    helperText={errors.estado.error ? errors.estado.helperText : ''}
                    onBlur={(e) => validateEstado(e.target.value)}
                />
                <Button variant="contained" type="submit">
                    Crear cuenta
                </Button>
            </Box>
        </>
    );
}

export default DatosEntrega;
