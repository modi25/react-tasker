import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Signup = () => {
  const initialValues = { name: '', email: '', password: '' };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name required'),
    email: Yup.string().email('Invalid email').required('Email required'),
    password: Yup.string().min(6, 'Min 6 chars').required('Password required'),
  });

  const handleSubmit = (values) => {
    console.log('Signup Submitted:', values);
    alert('Signed up (mock)');
  };

  return (
    <div>
      <h2>Signup</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form>
          <div>
            <label>Name:</label>
            <Field name="name" />
            <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
          </div>
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
          <button type="submit">Signup</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Signup;
