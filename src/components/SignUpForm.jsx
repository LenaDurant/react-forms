import { useState } from 'react';

const SignUpForm = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  const [error, setError] = useState(null);

   const handleSubmit = async(event) => {
    event.preventDefault();  
  }

return (
  <>
   <h2>Sign Up!</h2>
    <form onSubmit={handleSubmit}>
        <label>
          Username: <input value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>
        <label>
          Password: <input value= {password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <button>Submit</button>
    </form>
  </>
);
};
  export default SignUpForm;