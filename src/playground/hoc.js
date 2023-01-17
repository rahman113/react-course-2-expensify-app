 // HOC (High order compoenent) - A componnet (HOC) that renders another componen
 // reuse code
 // Render hijacking
 // Prop manipulation
 // Abstract state
 import React from 'react';
 import  ReactDOM  from 'react-dom';

 const Info = (props) => (
     <div>
          <h1>Info</h1>
         <p>The info is: {props.info}</p> 
     </div>
 )
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is the private info. Please don't share anywhere</p>        }
              <WrappedComponent {...props} />
        </div>
    )
};
const requireAuthentication  = (WrappedComponent) => {
    return (props) => (
        <div>
              { props.isAuthenticated ? (
                <WrappedComponent {...props} />
              ) : (
                  <p>Please login yourself to view the info</p>
                )} 
        </div>
    )
};
const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

//ReactDOM.render(<AdminInfo isAdmin = {true} info="There are some detailes form my side" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated = {false} info="There are some detailes form my side" />, document.getElementById('app'));