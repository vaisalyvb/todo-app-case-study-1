let username = document.getElementById("username");
let pwd = document.getElementById("pwd");
function validate(){
     if (username.value=="admin"&& pwd.value=="12345"){
    
        return true;
    }
    
    else{
        alert("Incorrect username or password")
        return false;
    }
}
function ajax(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            var response = JSON.parse(this.responseText);
            var output ="";
            for(var i=0;i<response.length;i++){
                output += "<li>"+ response[i].title +"</li>";
            }
            document.getElementById("demo").innerHTML=output;
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}
ajax();