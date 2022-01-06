// document.getElementById("sendbtn").addEventListener("click", function () {
 //   alert("From: " + document.getElementById("txtfrom").value +
  //      ", Subject: " + document.getElementById("txtsubject").value +
 //       ", Message: " + document.getElementById("txtmessage").value);
//
        
//})

$("#sendbtn").click( function () {
    alert("From: " + $("#txtfrom").val() +
        ", Subject: " + $("#txtsubject").val() +
        ", Message: " + $("#txtmessage").val());
    $("#picganderson").fadeOut("slow");

})
