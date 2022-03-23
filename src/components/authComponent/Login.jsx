import React, { useState } from "react";

const Login = () => {
  let [phone, setPhone] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loading, setLoading]= useState(false)

  let handleSubmit= (e)=>{
    e.preventDefault()
      setLoading(true)
      if(phone === true){
      let payload = {phone , password}
      }else{
        let payload ={email , password};
      }

  }

  return (
    <section>
    <article>
      <h2>Sign IN</h2>
      <div className="formBlock">
        <form action="">
          <div className="form-group">
            <label htmlFor="">username</label>
            <input type="text" className="from-control" />
          </div>
          <div className="form-group">
            <label htmlFor="">password</label>
            <input type="password" className="from-control" />
          </div>
          <div className="form-group">
            <button>Sign IN</button>
          </div>
        </form>
      </div>
    </article>
  </section>
  );
};

export default Login;
