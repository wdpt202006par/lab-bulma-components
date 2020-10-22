import React from 'react';
import Navbar from './navbar/Navbar.js';
import FormField from './formfield/FormField.js'
import 'bulma/css/bulma.css';

const App = () => {
   return (
      <div>

         <div>
         <Navbar />
         </div>

         <div>  
         <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
         <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
         </div>

      </div>
      
   );
};

export default App;
