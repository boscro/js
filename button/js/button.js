function updateButton()
{
    var btnValue=document.getElementById('btn').innerHTML;
    document.getElementById('btn').innerHTML = btnValue;
    btnValue++;
    document.getElementById('btn').innerHTML = btnValue;
}
