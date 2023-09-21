import { React, useState } from 'react';
import './FormSignUp.css';
import { Switch, TextField, Button, FormControlLabel, FormGroup } from '@mui/material';
import { Send } from '@mui/icons-material';

function FormSignUp(props) {

    // Función para enviar el formulario
    const SubmitForm = (e) => {
        e.preventDefault();
        console.log('Formulario enviado');
        console.log({ name, lastName, email, Promociones, novedades });
        props.handleSubmit({ name, lastName, email, Promociones, novedades });
    }

    // Estado de nombre
    const [name, setName] = useState('');
    const changeName = ((e) => {
        // console.log(e.target.value);
        setName(e.target.value);
    })

    // Estado de apellido
    const [lastName, setLastName] = useState('');
    const changeLastName = ((e) => {
        // console.log(e.target.value);
        setLastName(e.target.value);
    })

    // Estado de email
    const [email, setEmail] = useState('');
    const changeEmail = ((e) => {
        // console.log(e.target.value);
        setEmail(e.target.value);
    })

    // Estado de promociones
    const [Promociones, setPromociones] = useState(false);
    const changePromociones = ((e) => {
        // console.log(e.target.value);
        setPromociones(e.target.checked);
    })

    // Estado de novedades
    const [novedades, setNovedades] = useState(false);
    const changeNovedades = ((e) => {
        // console.log(e.target.value);
        setNovedades(e.target.checked);
    })

    const [errors, setErrors] = useState({
        name: {
            error: false,
            message: ''
        },
        lastName: {
            error: false,
            message: ''
        },
        email: {
            error: false,
            message: ''
        }
    })

    const validateName = ((value) => {
        if (value.length < 3) {
            setErrors({
                ...errors,
                name: {
                    error: true,
                    message: 'Debe tener como minimo 3 caracteres'
                }
            })
        } else {
            setErrors({
                ...errors,
                name: {
                    error: false,
                    message: ''
                }
            })
        }
    })

    const validateLastName = ((value) => {
        if (value.length <= 3) {
            setErrors({
                ...errors,
                lastName: {
                    error: true,
                    message: 'Debe tener como minimo 3 caracteres'
                }
            })
        } else {
            setErrors({
                ...errors,
                lastName: {
                    error: false,
                    message: ''
                }
            })
        }
    })

    const validateEmail = ((value) => {
        if (!value.includes('@') && !value.includes('.')) {
            setErrors({
                ...errors,
                email: {
                    error: true,
                    message: 'El correo debe ser valido'
                }
            })
        } else {
            setErrors({
                ...errors,
                email: {
                    error: false,
                    message: ''
                }
            })
        }
    })

    // const validateEmail = ((value) => {
    //     if (value.includes('@') && value.includes('.')) {
    //         setErrors({
    //             ...errors,
    //             email: {
    //                 error: false,
    //                 message: ''
    //             }
    //         })
    //     } else {
    //         setErrors({
    //             ...errors,
    //             email: {
    //                 error: true,
    //                 message: 'El correo debe ser valido'
    //             }
    //         })
    //     }
    // })


    return (
        <>
            <form onSubmit={SubmitForm}>
                <div>

                </div>
                <TextField
                    id="name"
                    label="Nombre"
                    variant="outlined"
                    margin="dense"
                    fullWidth
                    onChange={changeName}
                    value={name}
                    error={errors.name.error}
                    helperText={errors.name.error ? errors.name.message : ""}
                    onBlur={(e) => validateName(e.target.value)}
                />
                <div>
                    <TextField
                        id="lastName"
                        label="Apellido"
                        variant="outlined"
                        margin="dense"
                        fullWidth
                        onChange={changeLastName}
                        value={lastName}
                        error={errors.lastName.error}
                        helperText={errors.lastName.error ? errors.lastName.message : ""}
                        onBlur={(e) => validateLastName(e.target.value)}
                    />
                </div>
                <div>
                    <TextField
                        id="email"
                        label="Correo"
                        variant="outlined"
                        type='email'
                        margin="dense"
                        fullWidth
                        onChange={changeEmail}
                        value={email}
                        error={errors.email.error}
                        helperText={errors.email.error ? errors.email.message : ""}
                        onBlur={(e) => validateEmail(e.target.value)}
                    />
                </div>
                <FormGroup>
                    <FormControlLabel
                        control={<Switch />}
                        label='Promociones'
                        onChange={changePromociones}
                        checked={Promociones}

                    />
                    <FormControlLabel
                        control={<Switch />}
                        label='Novedades'
                        onChange={changeNovedades}
                        checked={novedades}
                    />
                </FormGroup>
                <Button
                    type='submit'
                    variant="contained"
                    disableElevation
                    endIcon={<Send />}
                // color='success'
                >Enviar</Button>
            </form>
        </>
    );
}

export default FormSignUp;
