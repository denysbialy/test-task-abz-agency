import React, { useEffect } from 'react';
import { Form, Formik } from 'formik';
import { createWorkerRequest, getPositionRequest, getTokenRequest } from '../../../../redux/actions';
import { useDispatch, useSelector, } from 'react-redux';

import styles from './SectionSignUp.module.sass';
import { SignupSchema } from '../../../Errors/schemaValidation';
import Successfully from './Successfully/Successfully';
import CONSTANTS from '../../../../constants';
import InputForm from '../../../Inputs/basicInput/InputForm';
import RadioInputs from '../../../Inputs/radioInputs/RadioInputs';
import FileUploadInput from '../../../Inputs/fileInput/fileUploadInput';
import Button from '../../../Button/Button';
import ErrorValidationEmailOrPhone from '../../../Errors/ErrorValidationEmailOrPhone';

const initialValues = {name: '', email: '', phone: '', position_id: '', photo:''};

const SectionSignUp = ({formData ,usersList, setUsersList}) => {
  const dispatch = useDispatch();

  const {token} = useSelector((state) => state.token);
  const creationData = useSelector((state) => state.creationWorker);

  const requestToken = () => dispatch(getTokenRequest());
  const requestPosition = () => dispatch(getPositionRequest());
  const requestCreationWorker = (form, token) => dispatch(createWorkerRequest(form, token ));
  
  useEffect(() => { requestToken(); requestPosition()}, []);

  return (
    <section className={styles.container} id='signup'>
      {creationData.isLoading && creationData.success.success ? 
          <Successfully usersList={usersList} setUsersList={setUsersList} /> 
          :
          <>
            <h2>{CONSTANTS.H2_REGISTER_WORKERS}</h2>
            <Formik 
              initialValues = {initialValues}
              validationSchema={SignupSchema}
              onSubmit ={(values, {resetForm}) =>{
                formData.append('photo', values.photo);
                formData.append('position_id', +values.position_id);
                formData.append('name', values.name);
                formData.append('email', values.email);
                formData.append('phone', values.phone);
                resetForm(initialValues);
                requestCreationWorker(formData, token);
              }}
            >
                {({errors, touched, setFieldValue})=>(
                  <>
                  <ErrorValidationEmailOrPhone />
                  <Form className={styles.containerForm}>
                    <InputForm name='name' errors={errors} touched={touched} />
                    <InputForm name='email' errors={errors} touched={touched} />
                    <InputForm name='phone' errors={errors} touched={touched} />
                    <RadioInputs errors={errors} touched={touched}/>
                    <FileUploadInput setFieldValue={setFieldValue} errors={errors} touched={touched}/>
                    <Button type='submit' name='Sign Up' />
                  </Form>
                
                </>
                    )}
            </Formik>
    </>
    }
            </section>
  );
};

export default SectionSignUp;
