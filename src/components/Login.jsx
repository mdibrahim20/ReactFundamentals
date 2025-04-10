import React from "react";

const Login = () => {
  const marks = 50;
  return (
    <div>
      <h1>Login Status</h1>

      {(() => {
        if(marks>80 && marks<100){
            return <h1>Excellent</h1>
        }
        else{
            return <h1>Average</h1>
        }
      })()}
    </div>
  );
};

export default Login;
