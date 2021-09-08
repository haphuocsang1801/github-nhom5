

function checkAllData(){
    var name=document.getElementById('idname').value;
    var education=document.getElementById('education').checked;
    var gender=document.getElementsByName('txtGender').checked;
    var salary=document.getElementsByName('txtSalary')[0].value;
    var remarks=document.getElementsByName('txtRemarks')[0].value;
    if(name==""){
        alert('nhap lai ten');
    }
    else if(!education){
        alert('danh dau education');
    }
}