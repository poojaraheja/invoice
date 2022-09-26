var s_no = 1;

$('document').ready(function() {
  $('.add_another').click(function() {
    if (s_no <= 20) {
      s_no++;
    }

    $("#tbl").append('<tr><th>' + s_no + '.</th><td><input type="date" name="date" class="form-control" placeholder="Date" required autofocus></td><td><input type="Description" name="Description" class="form-control" placeholder="Enter Description" required></td><td><input id="Amount' + s_no + '" type="number" name="Amount" class="form-control" placeholder="Enter Amount" oninput="add_number()" required ></td><td><input id="Tax' + s_no + '" type="number" name="Taxes" class="form-control" placeholder="Enter Tax" oninput="add_number()" required></td><td><input type="text" class="form-control" id="txtresult' + s_no + '" name="TextBox3"></td></tr>');
    var text1 = document.getElementById("Amount2");
    var text2 = document.getElementById("Tax2");

    function add_number() {
       var first_number = parseFloat(text1.value);
       if (isNaN(first_number)) first_number = 0;
       var second_number = parseFloat(text2.value);
       if (isNaN(second_number)) second_number = 0;
       var result = first_number + second_number;
       document.getElementById("txtresult2").value = result;
    }
  });
})

var text1 = document.getElementById("Amount1");
var text2 = document.getElementById("Tax1");

function add_number() {
   var first_number = parseFloat(text1.value);
   if (isNaN(first_number)) first_number = 0;
   var second_number = parseFloat(text2.value);
   if (isNaN(second_number)) second_number = 0;
   var result = first_number + second_number;
   document.getElementById("txtresult1").value = result;
}
