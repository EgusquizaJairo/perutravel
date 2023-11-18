import * as Yup from 'yup';

import { Formik } from 'formik';

import {
  Box,
  Button,
  FormHelperText,
  TextField
} from '@mui/material';
import useAuth from 'src/hooks/useAuth';
import useRefMounted from 'src/hooks/useRefMounted';

const LoginJWT = () => {
  const { login } = useAuth();
  const isMountedRef = useRefMounted();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        terms: true,
        submit: null
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().max(255).required('El usuario es obligatorio'),
        password: Yup.string().max(255).required('La contraseña es obligatoria')
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          await login(values.email, values.password);

          if (isMountedRef.current) {
            setStatus({ success: true });
            setSubmitting(false);
          }
        } catch (err) {
          console.error(err);
          if (isMountedRef.current) {
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values
      }) => (
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            autoFocus
            label="Usuario"
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            type="email"
            value={values.email}
            variant="outlined"
            color="secondary"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Contraseña"
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
            color="secondary"
          />


          {/* <TextField
            error={Boolean(touched.email && errors.email)}
            fullWidth
            margin="normal"
            autoFocus
            helperText={touched.email && errors.email}
            label="Correo electrónico"
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            type="email"
            value={values.email}
            variant="outlined"
            color="secondary"
          />
          <TextField
            error={Boolean(touched.password && errors.password)}
            fullWidth
            margin="normal"
            helperText={touched.password && errors.password}
            label="Contraseña"
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
            color="secondary"
          /> */}


          <Box
            alignItems="center"
            display="flex"
            justifyContent="space-between"
          >
            {/*
            <Link component={RouterLink} to="/account/recover-password">
              <b>{t('Lost password?')}</b>
            </Link>
              */}
          </Box>

          {Boolean(touched.terms && errors.terms) && (
            <FormHelperText error>{errors.terms}</FormHelperText>
          )}

          <Button
            sx={{
              mt: 3,
              mb: 3,
              border: 'none',"& fieldset": { border: 'none' }
            }}
            
            
            disabled={isSubmitting}
            type="submit"
            size="large"
            variant="contained"
          >
            Iniciar Sesión
          </Button>

          {/* <Divider sx={{ mb: 2 }}>
            <Typography variant="h6" color="text.secondary" fontWeight="normal">
              ó
            </Typography>
          </Divider> */}
        </form>
      )}
    </Formik>
  );
};

export default LoginJWT;
