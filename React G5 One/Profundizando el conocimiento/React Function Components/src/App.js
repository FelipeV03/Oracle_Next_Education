import './App.css';
import FormSignUp from './components/FormSignUp/FormSignUp';
// import FunctComponent from './components/FunctComponent/FunctComponent';
import { Container, Typography } from '@mui/material';

function App() {
  // const handleSubmit = ((valores) => {
  //   console.log("APP.JS",valores);
  // })
  return (
    <>
      {/* <FunctComponent /> */}
      <Container component='section' maxWidth='sm'>
        <Typography variant='h3' align='center'>Formulario de Registro</Typography>
        {/* <FormSignUp handleSubmit={handleSubmit}/> */}
        <FormSignUp />
      </Container>
    </>
  );
}

export default App;
