function add(){
    
    // .value - use hota hai agar html se value JS me laani ho to
    var fisrt =parseInt(document.getElementById('fvalue').value);
    // alert(fisrt);
    var second = parseInt(document.getElementById('svalue').value);
    // alert(second);
    
    var res = fisrt + second;
    
    // innerHTML - use hota hai agar JS se html me value dena hota hai
    document.getElementById('result').innerHTML=res;
}
function sub(){
    
    var fisrt =parseInt(document.getElementById('fvalue').value);
    // alert(fisrt);
    var second = parseInt(document.getElementById('svalue').value);
    // alert(second);
    
    var res = fisrt - second;
    
    
    document.getElementById('result').innerHTML=res;
}
function multi(){
    
    var fisrt =parseInt(document.getElementById('fvalue').value);
    // alert(fisrt);
    var second = parseInt(document.getElementById('svalue').value);
    // alert(second);
    
    var res = fisrt * second;
    
    
    document.getElementById('result').innerHTML=res;
}
function div(){
    
    var fisrt =parseInt(document.getElementById('fvalue').value);
    // alert(fisrt);
    var second = parseInt(document.getElementById('svalue').value);
    // alert(second);
    
    var res = fisrt / second;
    
    
    document.getElementById('result').innerHTML=res;
}

function mod(){

    var fisrt =parseInt(document.getElementById('fvalue').value);
    // alert(fisrt);
    var second = parseInt(document.getElementById('svalue').value);
    // alert(second);
    
    var res = fisrt % second;
    
    
    document.getElementById('result').innerHTML=res;
}