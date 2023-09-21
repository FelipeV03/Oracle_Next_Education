import { React, useState } from 'react';
import './DatosPersonales.css';
import { TextField, Button, Box } from "@mui/material";

function DatosPersonales(props) {

    // funcion para validar el formulario
    const [errors, setErrors] = useState({
        nombre: {
            error: false,
            helperText: ''
        },
        apellido: {
            error: false,
            helperText: ''
        },
        cel: {
            error: false,
            helperText: ''
        }
    })


    // funcion para enviar los datos del formulario
    const handleSubmit = ((e) => {
        e.preventDefault();

        if (errors.nombre.error || errors.apellido.error || errors.cel.error) {
            alert("Hay errores en el formulario");
            return;
        }else if (nombre === '' || apellido === '' || cel === '') {
            alert("Llene todos los campos");
            return;
        }

        console.log("Datos", {nombre, apellido, cel});
        props.actualizarStep(2);
    })


    // funciones para validar el campo de nombre
    const [nombre, setNombre] = useState('');
    const changeNombre = ((e) => {
        // console.log(e.target.value);
        setNombre(e.target.value);
    })
    const validateNombre = ((value) => {
        if (value.length < 5) {
            setErrors({
                ...errors,
                nombre: {
                    error: true,
                    helperText: 'El nombre debe tener al menos 5 caracteres'
                }
            })
        } else {
            setErrors({
                ...errors,
                nombre: {
                    error: false,
                    helperText: ''
                }
            })
        }
    })

    // funciones para validar el campo de apellido
    const [apellido, setApellido] = useState('');
    const changeApellido = ((e) => {
        // console.log(e.target.value);
        setApellido(e.target.value);
    })
    const validateApelllido = ((value) => {
        if (value.length < 5) {
            setErrors({
                ...errors,
                apellido: {
                    error: true,
                    helperText: 'El apellido debe tener al menos 5 caracteres'
                }
            })
        } else {
            setErrors({
                ...errors,
                apellido: {
                    error: false,
                    helperText: ''
                }
            })
        }
    })

    // funciones para validar el campo de número telefónico
    const [cel, setCel] = useState('');
    const changeCel = ((e) => {
        // console.log(e.target.value);
        setCel(e.target.value);
    })
    const validateCel = ((value) => {
        if (value.length < 9) {
            setErrors({
                ...errors,
                cel: {
                    error: true,
                    helperText: 'El número telefónico debe tener al menos 9 caracteres'
                }
            })
        } else {
            setErrors({
                ...errors,
                cel: {
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
                    label="Nombre"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    type="text"
                    value={nombre}
                    onChange={changeNombre}
                    error={errors.nombre.error}
                    helperText={errors.nombre.error ? errors.nombre.helperText : ""}
                    onBlur={(e) => { validateNombre(e.target.value) }}

                />
                <TextField
                    label="Apellidos"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    type="text"
                    value={apellido}
                    onChange={changeApellido}
                    error={errors.apellido.error}
                    helperText={errors.apellido.error ? errors.apellido.helperText : ''}
                    onBlur={(e) => { validateApelllido(e.target.value) }}
                />
                <TextField
                    label="Número telefónico"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    type="number"
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    value={cel}
                    onChange={changeCel}
                    error={errors.cel.error}
                    helperText={errors.cel.error ? errors.cel.helperText : ''}
                    onBlur={(e) => { validateCel(e.target.value) }}
                />
                <Button variant="contained" type="submit">
                    Siguiente
                </Button>
            </Box>
        </>
    );
}

export default DatosPersonales;
