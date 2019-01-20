function readme()
{
    
    //alert("seccessfull")
    var getname=document.getElementById('name1').value;
    console.log(getname);
    var getname=document.getElementById('name2').value;
    console.log(getname);
    //var getrollnumber=document.getElementById('rm').value;
    //console.log(getrollnumber);
    //var getclass=document.getElementById('myclass').value;
    //console.log(getclass);
    
    document.getElementById('result')=getname+ "" +getname+ "" +getrollnumber+ "" +getclass
}