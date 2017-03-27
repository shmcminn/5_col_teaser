var imgUrl = $("#img-URL");
var pgUrl = $("#page-URL");
var submit = $("#submit")

console.log(imgUrl)

imgUrl.on('click', function() {
	imgUrl.removeAttr('value');
})

pgUrl.on('click', function() {
	pgUrl.removeAttr('value');
})

submit.on('click', function() {
	$("#output").text("<a href='"+ pgUrl.val() +"'><img style='width:100%;' src='"+ imgUrl.val() +"'></a>");
})