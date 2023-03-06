fetch('https://airastana.com/nld/en-us/Home/test')
  .then(response => {
    if (response.ok) {
      return console.log(document.body.querySelector('div.container-fluid.aa-copyright'))
      
    }
    throw new Error('Network response was not ok.');
  })
  .then(data => 
    document.getElementsByClassName('container-fluid aa-footer').item([]).remove()
       
       )
  .catch(error => console.error('Error:', error));
