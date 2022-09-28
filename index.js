var s_no = 1;
$('document').ready(function() {
  $('.add_another').click(function() {
    if (s_no <= 20) {
      s_no++;
    }

    $("#tbl").append('<tr><th>' + s_no + '.</th><td><input type="number" name="date" class="form-control" placeholder="Quantity" required autofocus></td><td><input type="Description" name="Description" class="form-control" placeholder="Enter Description"></td><td><input id="Amount' + s_no + '" type="number" name="Amount" class="form-control" placeholder="Enter Amount" oninput="add_number()"></td><td><input id="Tax' + s_no + '" type="number" name="Taxes" class="form-control" placeholder="Enter Price" oninput="add_number()"></td><td><input type="text" class="form-control" id="txtresult' + s_no + '" name="TextBox3"></td></tr>');
  });
})

function add_number() {
  var text1 = document.getElementById("Amount" + s_no);
  var text2 = document.getElementById("Tax" + s_no);

  var first_number = parseFloat(text1.value);
  if (isNaN(first_number)) first_number = 0;
  var second_number = parseFloat(text2.value);
  if (isNaN(second_number)) second_number = 0;
  var result = first_number + second_number;
  document.getElementById("txtresult" + s_no).value = result;
}
