
var color = document.getElementById("szin").value;
var iras = null
var szam2 = 19
function szin()
{
    
    color = document.getElementById("szin").value;
    
    if(color==1)
{  
    document.getElementById("poloo").innerHTML = '<img style="margin-left: -8%;" src="assets/images/polo-zold.png" alt=""></img>'; 
}
if(color==2)
{  
    document.getElementById("poloo").innerHTML = '<img style="margin-left: -8%;" src="assets/images/polo-kek.png" alt=""></img>'; 
}
if(color==3)
{  
    document.getElementById("poloo").innerHTML = '<img style="margin-left: -8%;" src="assets/images/polo-narancs.png" alt=""></img>'; 
}
if(color==4)
{  
    document.getElementById("poloo").innerHTML = '<img style="margin-left: -8%;" src="assets/images/polo-piros.png" alt=""></img>'; 
}
if(color==5)
{  
    document.getElementById("poloo").innerHTML = '<img style=" margin-left: -8%; filter: grayscale(100%);;" src="assets/images/polo-narancs.png" alt=""></img>'; 
}
}
function irass()
{
    iras = document.getElementById("iras").value;
    iras = iras.toUpperCase()
    document.getElementById("ideiras").innerHTML = '<p style="font-size: 25%; " id="felirat">'+iras+'</p>';

}

function szam()
{

    szam2 = document.getElementById("szam").value;

    
if(szam2>0 && szam2<100)
{
    document.getElementById("sorszam").innerHTML = szam2;
}


}