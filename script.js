let form = document.querySelector("form");

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let email = document.getElementById('email').value;
    if (
      !(email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ))
    ) {
        document.querySelector('label').style.display = 'block';
        document.querySelector("main article form p").style.display = "block";
    }
    else{
        form.submit();
    }
});