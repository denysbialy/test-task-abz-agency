import * as Yup from 'yup';
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg'];
const FILE_SIZE = 5 * 1024 * 1024;

export const SignupSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Name must be at least 2 character').max(60).required('Required'),
    email: Yup.string().matches(/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/, 'Invalid email').required('Required'),
    phone: Yup.string().matches(/^[\+]{0,1}380([0-9]{9})$/, 'Invalid number phone').required('Required'),
    position_id: Yup.number().min(1).required('Required'),
    photo: Yup.mixed().required('Required') 
    .test('fileSize', "File Size is too large", value =>{
      if(!value) return 0 <= FILE_SIZE;
      return value.size <= FILE_SIZE;
    })
    .test('fileType', "Unsupported File Format", value => {
      if(!value)return SUPPORTED_FORMATS.includes('');
      return SUPPORTED_FORMATS.includes(value.type);
    } )
  });