var akanBoy= ["Kwasi", "Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var akanGirl= ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var dayOfWeek= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
function displayResults() {
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
    var day = parseInt(document.getElementById("day").value);
    var date = new Date(year + "/" + month + "/" + day);
    var gender = getGender();
    var dayOfBirth= date.getDay();
    var akan;
    if (day < 1 || day > 31) {
        alert("Enter valid day");
        return false;
      } else if (month < 1 || month > 12 || (month == 2 && day > 29)) {
        alert("Enter valid day");
        return false;
      } else if (year < 1950 || year > 2050) {
        alert("Enter valid year");
        return false;
      }
    
      if (gender === "male") {
        akan = akanBoy[dayOfBirth];
      } else {
        akan = akanGirl[dayOfBirth];
      }
      alert("You were born on   " + dayOfWeek[dayOfBirth] +"  and your akan name is " + akan );
      document.getElementById("akan").innerHTML ="You were born on   " + dayOfWeek[dayOfBirth] + "  and your akan name is " + akan;
    }
    function getGender() {
      var gender = document.getElementsByName("gender");
      for (i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
          return gender[i].value;
        }
      }
    }