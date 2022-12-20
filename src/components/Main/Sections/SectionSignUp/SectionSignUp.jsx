// // import { Formik } from 'formik';
// import React, { useEffect } from 'react';
// import { Formik } from 'formik';
// import { createWorkerRequest } from '../../../../redux/actions';
// import { getToken } from '../../../../api';

// const SectionSignUp = (props) => {
// const formData = new FormData();
// const token = () => getToken();


//     const onChange = e => {
//         const file = e.target.files[0];
//         formData.append('file', file);
//       };

//   return (
//     <Formik 
//     initialValues = { {name: '', email: '', phone: '',}}
//     onSubmit ={ values => { 
      
//       formData.append('position_id', 3);
//       formData.append('name', values.name);
//       formData.append('email', values.email);
//       formData.append('phone', values.phone);

//       createWorkerRequest(formData, token() );
      
//       }}>
//         {
//             ({handleSubmit, values, handleChange}) =>{
                
//                 return (
//                   <form onSubmit={handleSubmit}>
//                           <label htmlFor="name">
//                             <input name="name" type="text" onChange={handleChange} value={values.name}/>
//                           </label>
//                           <label htmlFor="email">
//                             <input name="email" type="email" onChange={handleChange} value={values.email}/>
//                           </label>
//                           <label htmlFor="phone">
//                             <input name="phone" type="phone" onChange={handleChange} value={values.phone}/>
//                           </label>
//                           <label htmlFor="file">File Upload</label>
//                             <input  id='file'type='file' onChange={onChange} value={values.file}/>
                    
//                           <button type="submit">Submit</button>
//                         </form>
//                       );
//             }
//         }
//     </Formik>
//   );
// };

// export default SectionSignUp;
// import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { Field, Form, Formik } from 'formik';
import { createWorkerRequest, getTokenRequest } from '../../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const SectionSignUp = (props) => {
  const formData = new FormData();
  const dispatch = useDispatch();

  const requestToken = () => dispatch(getTokenRequest());
  const requestCreationWorker = (form, token) => dispatch(createWorkerRequest(form, token ))

  useEffect(() => { requestToken()}, []);

  const {token} = useSelector((state) => state.token);
  const data = useSelector((state) => state.creationWorker);

    const onChange = e => {formData.append('photo', e.target.files[0]);};

    const submitHandler = (values) =>{
      formData.append('position_id', 3);
      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('phone', values.phone);
      requestCreationWorker(formData, token);
    } 

  return (
    <Formik 
    initialValues = { {name: '', email: '', phone: '',}}
    onSubmit ={submitHandler}>
        <Form>
          <Field name="name" placeholder="Your Name" />
          <Field name="email" placeholder="Your Email" />
          <Field name="phone" placeholder="Your Phone" />

          {/* {getPositions().map(e => {
            return (
              <label> {e.name}
                <Field name="workerRole" type="radio" value={e.id} />
              </label>
            )
          })} */}
          <label htmlFor="file">File Upload</label>
          <input  id='file'type='file' onChange={onChange}/>
          <button type='submit'> Submit </button>
        </Form>
    </Formik>
  );
};

export default SectionSignUp;
