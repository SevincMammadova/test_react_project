import React, {FC} from 'react';
import './style.css';
import { Field, Form, Formik, FormikProps } from 'formik';

interface Props {
    type: string,
    inputName: string,
    placeholder: string,
}

const FormInput: FC<Props> = ({ type, inputName, placeholder }) => {
    return (
        <div className="Form">
            <label htmlFor ='inputField'>
                {inputName}
            </label>
           <input id='id' type={type} placeholder={placeholder}/>
        </div>
    );
}

export default FormInput;
