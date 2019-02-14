var Emails = ["gigi@mail.it" ,"pluto@mail.it" ,"poldo@mail.it" ,"abc@mail.it" ,"napoleone@mail.it"];

var Convalida = prompt ("digita la tua email");

for (var i = 0; i < Emails.lenght; i++){
  var Email = Emails[i];
  if (Email == Convalida){
    alert("Benvenuto!");
  }
}
