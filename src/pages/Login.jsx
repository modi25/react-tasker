import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from '../context/AuthContext';  // we'll create this next

const Login = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const initialValues = { email: '', password: '' };
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email required'),
    password: Yup.string().min(6, 'Min 6 chars').required('Password required'),
  });

  const handleSubmit = async (values) => {
    setError('');
    setLoading(true);
    try {
      // Simulate API call:
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', values);

      // On success, store user info (mock)
      setUser({ email: values.email, id: response.data.id });

      // Redirect to home or dashboard
      navigate('/');
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {(formik) => (
          <Form>
            <div>
              <label>Email:</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
            </div>
            <div>
              <label>Password:</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
            </div>
            <button type="submit" disabled={!formik.isValid || !formik.dirty || loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
            {error && <div style={{ color: 'red' }}>{error}</div>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
