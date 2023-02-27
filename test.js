function checknumber(){
    var firstnumber = document.getElementById('firstnumber').value;
    var secondnumber = document.getElementById('secondnumber').value;
    if(firstnumber>secondnumber){
        document.getElementById('result').innerHTML=firstnumber+"is Greatest";

    }else if(firstnumber<secondnumber){
        document.getElementById('result').innerHTML=secondnumber+" is greatst";

    }else{
        document.getElementById('result').innerHTML="equal";
    }
}