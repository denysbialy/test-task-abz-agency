import React, { useEffect } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { createWorkerRequest, getPositionRequest, getTokenRequest } from '../../../../redux/actions';
import { useDispatch, useSelector, } from 'react-redux';
import styles from './Section.module.sass';
import { SignupSchema } from '../../../Errors/schemaValidation';
import Successfully from './Successfully/Successfully';
import CONSTANTS from '../../../../constants';
import InputForm from '../../../Inputs/basicInput/InputForm';
import RadioInputs from '../../../Inputs/radioInputs/RadioInputs';
import FileUploadInput from '../../../Inputs/fileInput/fileUploadInput';

const initialValues = {name: '', email: '', phone: '', position_id: '', photo:''}

const SectionSignUp = ({formData}) => {
  const dispatch = useDispatch();

  const {token} = useSelector((state) => state.token);
  const creationData = useSelector((state) => state.creationWorker);

  const requestToken = () => dispatch(getTokenRequest());
  const requestPosition = () => dispatch(getPositionRequest());
  const requestCreationWorker = (form, token) => dispatch(createWorkerRequest(form, token ))
  
  useEffect(() => { requestToken(); requestPosition()}, []);

  return (
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
          
          {creationData.isLoading && !creationData.success.success
          &&<div>{CONSTANTS.DUBLICATE_ERROR_CREATION}</div>}
          
          {creationData.isLoading && creationData.success.success ? <Successfully /> :
          <Form className={styles.container}>
            <InputForm name='name' errors={errors} touched={touched} />
            <InputForm name='email' errors={errors} touched={touched} />
            <InputForm name='phone' errors={errors} touched={touched} />
            <RadioInputs errors={errors} touched={touched}/>
            <FileUploadInput setFieldValue={setFieldValue} errors={errors} touched={touched}/>
          <button type='submit'> Submit </button> 
        </Form>}
        
        </>
            )}
    </Formik>
  );
};

export default SectionSignUp;
