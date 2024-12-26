function calculation(){
    var fval = parseInt(document.getElementById('fvalue').value)
    var sval = parseInt(document.getElementById('svalue').value)

    var operator = document.getElementById('optr').value
    var result;
    if(operator=='+'){
        res = fval + sval;
    }
    else if(operator=='-'){
        res = fval - sval;
    }
    else if(operator=='*'){
        res = fval * sval;
    }
    else if(operator=='/'){
        res = fval / sval;
    }
    else if(operator=='%'){
        res = fval % sval;
    }
    else{
        res = 'something went wrong !'
   }

   document.getElementById('result').value = res;

}