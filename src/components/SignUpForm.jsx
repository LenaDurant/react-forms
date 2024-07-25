import { useState } from 'react';

const SignUpForm = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  
  const handleSubmit = async(event) => {
    event.preventDefault(); 
  try {
    const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup');
    const result = await response.json();
    console.log(result);
  } catch (error) {
    setError(error.message);
}
}
  
return (
  <>
   <h2>Sign Up!</h2>
   {error && <p>There is an Error!</p>}

    <form onSubmit={handleSubmit}>
        <label>
          Username: <input value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>

        <label>
          Password: <input type="password" value= {password} onChange={(event) => setPassword(event.target.value)} />
        </label>

        <button>Submit</button>
    </form>
  </>
);
};
  export default SignUpForm;