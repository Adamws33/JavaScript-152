function userSignUp(){
  let userName = document.getElementById('userSignUp').value; //1
  let userPass = document.getElementById('passSignUp').value;
  console.log(userName, userPass);

  let newUserData = {user : { username: userName, password: userPass}}; //2
  fetch('http://localhost:3000/api/user/createuser', {
      method: 'post',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUserData) //3
  })
  .then(response => response.json())
  .then(function (response) {
      console.log(response.sessionToken);
      let token = response.sessionToken; //4
      localStorage.setItem('SessionToken', token);  //5
  });
}
function userSignIn(){
  let userName = document.getElementById('userSignin').value; 
  let userPass = document.getElementById('passSignin').value;
  console.log(userName, userPass);

  let userData = {user : { username: userName, password: userPass}};
  fetch('http://localhost:3000/api/user/signin', { //<---signin route used
      method: 'post',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
  })
  .then(response => response.json())
  .then(function (response) {
      console.log(response.sessionToken);
      let token = response.sessionToken;
      localStorage.setItem('SessionToken', token);
  });
}
function getSessionToken(){
  var data = localStorage.getItem('SessionToken');
  console.log(data);
  return data;
}
function showCurrentData(e) { //1
  const fetch_url = `http://localhost:3000/authtest/${e.value}` //2
  const accessToken = localStorage.getItem('SessionToken')

  fetch(fetch_url, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': accessToken
      }
  })
      .then(response => {
          return response.json();
      })
      .then(function (response) {
          console.log(response);
          var myItem = document.getElementById('updateValue'); //3
          if (!response) return; //4
          else myItem.value = response.authtestdata; //5
      })
}