import React from 'react';
import FormField from '../formfield/FormField';
import Navbar from '../navbar/Navbar';
import CoolButton from '../coolbutton/CoolButton.js';

const SignUp = () => {
  return(
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g. Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="Password" type="password" placeholder="*********" />
      <CoolButton isRounded>Submit</CoolButton>
    </div>
  )
}

export default SignUp;