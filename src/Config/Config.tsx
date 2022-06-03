import React from 'react';
import './style.css';
import FormInput from "../Forms/Form";

function Config() {
    return (
        <div className='config'>
            <div className='input'>
                <FormInput type={'text'} inputName={'label'} placeholder={''} />
                <FormInput type={'text'} inputName={'placeholder'} placeholder={''} />
                <label htmlFor="types">Type</label>
                <select name="type" id="types" >
                    <option value="text">input</option>
                    <option value="textarea">textArea</option>
                    <option value="datepicker">datepicker</option>
                    <option value="email">email</option>
                </select>
            </div>
            <button className={'submitBtn'}>
                Add to form
            </button>
        </div>
    );
}

export default Config;
