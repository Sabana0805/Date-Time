function showTime() {
    const now = new Date();
    document.getElementById('currentTime').innerHTML = now.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
}
showTime();
setInterval(function ()
{
  showTime();
},1000);