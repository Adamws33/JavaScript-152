function fetchHelloDataFromAPI() {
  fetch('http://localhost:3000/test/helloclient', {
      method: 'GET', 
      headers: new Headers({ 
        'Content-Type': 'application/json'
      })
  })
      .then(function (response) {
          console.log("Fetch response:", response)
          return response.text(); 
      })
      .then(function (text) {
          console.log(text);
      });
 }
 /******************************
 * 2 POST long hand: /one 
 *****************************/
function postToOne(){
    var url = 'http://localhost:3000/test/one';

    fetch(url, {
      method: 'POST',            
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(
        function(response){ 
            return response.text()
        })
    .catch(
        function(error){  
            console.error('Error:', error)
        })
    .then(
        function(response){  
            console.log('Success:', response);
        })
}

  /***************************************
 * 3 POST /one : Arrow Function
*************************************/
function postToOneArrow(){
    var url = 'http://localhost:3000/test/one';

    fetch(url, {  
      method: 'POST', 
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.text()) 
    .catch(error => console.error('Error:', error)) 
    .then(response => console.log('Success:', response)); 
}
function postData() {
    //1
    let content = { testdata: { item: 'This was saved!' } };

    //2
    let testDataAfterFetch = document.getElementById('test-data');
    let createdAtAfterFetch = document.getElementById('created-at');

    fetch('http://localhost:3000/test/seven', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(content)  
    })
    .then(response => response.json())
    .then(function (text) {
        console.log(text);
        //4
        testDataAfterFetch.innerHTML = text.testdata.testdata; 
        createdAtAfterFetch.innerHTML = text.testdata.createdAt;
    });
}
/***************************************
 * 4 GET FROM /ONE - Display Data
*************************************/
function fetchFromOneDisplayData(){
    //1
    let url = 'http://localhost:3000/test/one';
    let dataView = document.getElementById('display-one');   

    //2
    fetch(url, {
      method: 'GET', 
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(
        function(response){
            return response.json()
        })
    .catch(
        function(error){
            console.error('Error:', error)
        })
    .then(
        function(response){
            let myList = document.querySelector('ul'); 

            for (r of response){  
                console.log('Response:', r.testdata); 
                var listItem = document.createElement('li');  
                listItem.innerHTML = r.testdata; 
                myList.appendChild(listItem); 
            }
        })
}