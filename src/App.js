import React from 'react'; // Pour pouvoir utiliser React
import Navbar from './navbar/Navbar'; // On importe les fichiers src/navbar
import FormField from './formfield/FormFields'; // On importe les fichiers src/formfields
import CoolButton from './coolbutton/CoolButton'; // On importe les fichiers src/coolbutton
import Signup from './signup/Signup'; // On importe les fichiers src/signup
import 'bulma/css/bulma.css'; // Pour pouvoir utiliser la library Bulma


const App = () => {
  return(
    <div>
      <Navbar/> 
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
      <CoolButton isSmall isSuccess >Button 2</CoolButton>
    </div>
  )
}

export default App;
