$("#bes").append(`
    <div id="LEKBIRR">
    <div class="lekbira">
     <label for="fname">First name:</label><br>
    <input type="text" placeholder="first name" id='inp1' class="aaz"><br>
       <label for="fname">Last name:</label><br>
    <input type="text" placeholder="last name"  id='inp2'class="aaz"><br>
    <label for="fname">Email:</label><br>
    <input type="email" class="azz" id="nn" placeholder="your email"><br>
<label for="fname">Experience:</label><br>
    <input type="text" placeholder="experience" id='inp3' class="aaz"><br>
    <label for="fname">Education:</label><br>
    <input type="text" placeholder="education"  id='inp4' class="aaz"><br>
    <label for="fname">Other:</label><br>
    <input type="text" placeholder="other"  id='inp5' class="aaz"><br>
    <label for="fname">Phone Number:</label><br>
    <input type="text" placeholder="phone number"  id='inp6' class="aaz"><br>
    <button  id="ll"> Submit </button><br>
    </div>
    <div class="thenya"></div>
    </div>
`);
$("#ll").on('click',function (){
var x = $("#inp1").val()
var z = $("#inp2").val()
var d = $("#nn").val()
var f = $("#inp6").val()
var k = $("#inp3").val()
var p = $("#inp4").val()
var q = $("#inp5").val()
$('.thenya').append(`<div >
    <h1 id="h11">${x}</h1>  <br>
    <h1 id="h12">${z}</h1>  <br>
    <h1 id="h13">${d}</h1>  <br>
    <h1 id="h14">${f}</h1><br>
    <h4 id="h15">${k}</h4><br>
    <h4 id="h16">${p}</h4><br>
    <h4 id="h17">${q}</h4><br>
    </div>`)
})
