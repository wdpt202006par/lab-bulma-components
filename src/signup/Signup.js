import React from 'react';
import 'bulma/css/bulma.css';


const Signup = () => {
    return (<div className="signup">
        <Navbar/>
        <form>
            <FormField/>
            <FormField label="Password" type="text" placeholder="password" />
        </form>
    </div>)
}

export default Signup;