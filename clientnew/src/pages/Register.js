import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

function Register() {



    const initialValues = {
        username: '',
        password: ''
    }

    const validationSchema =  Yup.object().shape({
        username: Yup.string().min(3).max(15).required(),
        password: Yup.string().min(4).max(20).required()
    })


    const handleSubmit = (data) => {
        axios.post('http://localhost:4000/auth', data).then((response) => {
            console.log(response)
        })
    }
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
            <Form className='formContainer'>
                <label>Username</label>
                <ErrorMessage name='username' component='span' />
                <Field id='inputCreatePost' name='username' placeholder='username...' />
                <label>Password</label>
                <ErrorMessage name='password' component='span' />
                <Field id='inputCreatePost' name='password' placeholder='password' type='password'/>
                <button type='submit'>Register</button>
            </Form>
        </Formik>
    </div>
  )
}

export default Register
