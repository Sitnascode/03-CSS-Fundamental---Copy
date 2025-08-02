<html>
<head>
<script language="JavaScript">
function adder(num1, num2)
{
	var sum = 0;
	sum = num1 + num2;
	document.write("The sum is " + sum);
}
function subtractor(num1, num2)
{
	var difference = 0;
	difference = num1 - num2;
	document.write("The difference is " + difference);
}
</script>
</head>
<body>
<form name="event_example">
<input type="button" value="add" name="add" onClick="adder(10,30)">
<input type="button" value="subtract" name="subtract" onClick="subtractor(20,50)">
<a href=“” onclick=“adder(30,40)”> Add </a>
</form>
</body>
</html>
