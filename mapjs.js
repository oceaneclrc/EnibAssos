// function MyFunction(){
// 	alert("hey");
// 	console.log("j'apparait dans la console JS");
// 	document.getElementById("demo").innerHTML;
// }

var asso=[];

function displayAsso(name) {
	console.log(name);
	for (var i=0; i<asso.length; i++){
		if (asso[i].name==name){
			let item=asso[i];
			document.getElementById("assoName").innerHTML = name;
			document.getElementById("assoDescription").innerHTML = item.description;
            $('#assoUrl').attr('href', item.url);
			$('#assoImg').attr('src', '.' + item.img);
            $('#assoSlide1').attr('src', '.' + item.slide1);
            $('#assoSlide2').attr('src', '.' + item.slide2);
            $('#assoSlide3').attr('src', '.' + item.slide3);
			break;

		}
	}
}


$(document).ready(function () {
    $.get("./donnees.json", function (data) {
    	asso=data;
        var container = $('#assoList');
        data.forEach(function (item) {
            var age = $('<span></span>').addClass('badge').text(item.age);
            var url = $('<a href="\''+ item.url + '\'"></a>');
            var elem = $('<a onclick="displayAsso(\'' + item.name + '\')"></a>').addClass('list-group-item').append( item.name);
            elem.appendTo(container);
        });

    });
});