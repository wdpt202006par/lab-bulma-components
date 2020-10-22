import React from 'react';
import 'bulma/css/bulma.css';
import FormField from '../formfield/FormFields';

const Signup = (props) => {
    return (<div className="signup">
        <Navbar/>
        <form>
            <FormField/>
            <FormField label="Password" type="text" placeholder="password" />
        </form>
    </div>)
}

export default Signup;