const users = [
    {
        "id":1,
        "username":"user1",
        "email":"user@hotmail.com",
        "password":"1234"
    },
    {
        "id":2,
        "username":"user2",
        "email":"user2@hotmail.com",
        "password":"12345"
    }
    ];
const loginReducerDefaultValue =users;
const loginReducer = (state = loginReducerDefaultValue, action) => {
console.log(state)
  switch (action.type) {
    case "ADD-LOGIN-VALUES":
      console.log(action.username)
   return [...state.filter(user => user.username === action.username)];
  // state.filter(user =>{
  //       if(user.username===action.username) {
  //         console.log('sss')
  //        return [...state,...user]
  //       }else{

  //         console.log('else')
  //         return [...state]
  //       }
  //  })
      break;
    case 'REMOVE_LOGIN':
        return state.filter(({ username }) => username !== action.username);

    default:
      return state;
      break;
  }
};
export default loginReducer;