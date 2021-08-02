export const createLogin = username => {
 
    return {
      type: "ADD-LOGIN-VALUES",
      username
    };
  };
  
  
  export const removeLogin = ({ name,password } = {}) => ({
    type: 'REMOVE_LOGIN',
    name:name,
    password:password
  });