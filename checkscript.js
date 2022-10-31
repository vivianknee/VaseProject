function isChecked(){
    if(document.getElementById("my-checkbox").
    checked){
        document.getElementById("message").
        textContent = "Checked";
    }
    else{
        document.getElementById("message").
        textContent = "Not Checked";
    }
}