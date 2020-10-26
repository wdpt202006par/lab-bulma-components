import React from 'react';
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import Signup from "./signup/Signup";
import Message from './message/Message';

const App = () => {
	return(
		<div>
			<Navbar />
			<FormField
				label="Name"
				name="User's name"
				type="text"
				placeholder="e.g Alex Smith"
			/>
      <FormField
        label="Email"
        name="User's email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
			<Message isInfo title="Hello World" />
			<Signup />
		</div>
	)
};

export default App;
