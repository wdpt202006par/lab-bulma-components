import React from 'react';
import Navbar from './navbar/Navbar'
import FormField from './formfield/FormField'
import CoolButton from './coolbutton/CoolButton'
import 'bulma/css/bulma.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <FormField isSmall label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
      <CoolButton isSmall isSuccess>Button 2</CoolButton>
    </div>
    );
};

export default App;
