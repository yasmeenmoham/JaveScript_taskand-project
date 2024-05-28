

// quastion 1 function we use it in html 
function mydate(){
    var currentDate=new Date();
    var datetime=currentDate.toLocaleString();
    document.getElementById("datadisplay").innerHTML=datetime;
}