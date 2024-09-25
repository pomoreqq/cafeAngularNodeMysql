import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import '../App.css'
import * as Yup from 'yup'

import axios from 'axios'

function CreatePost() {

    const initialValues = {
        title: '',
        postText: '',
        username: ''
    }

    const validationSchema =  Yup.object().shape({
        title: Yup.string().required(),
        postText: Yup.string().required(),
        username: Yup.string().min(3).max(15).required()
    
    })
       


    const handleSubmit = (data) => {
        axios.post('http://localhost:4000/posts', data).then((response) => {
            console.log('It inserted to database')
        })
    }

  return (
    <div className='createPostPage'>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
            <Form className='formContainer'>
                <label>Title</label>
                <ErrorMessage name='title' component='span' />
                <Field id='inputCreatePost' name='title' placeholder='title...' />
                <label>Post</label>
                <ErrorMessage name='postText' component='span' />
                <Field id='inputCreatePost' name='postText' placeholder='text...' />
                <label>Username</label>
                <ErrorMessage name='username' component='span' />
                <Field id='inputCreatePost' name='username' placeholder='username...' />

                <button type='submit'>Create Post</button>
            </Form>
        </Formik>
    </div>
  )
}

export default CreatePost


//initialValues={} onSubmit={} validationSchema={}