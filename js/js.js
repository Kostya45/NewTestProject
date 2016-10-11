"use strict";

document.getElementById('placeView').onclick = place;
document.getElementById('newHotel').onclick = hideAll;

document.getElementById('historyS').onclick = open;
document.getElementById('selectedView').onclick = selected;
document.getElementById('historyView').onclick = history;
document.getElementById('deletedBlocksView').onclick = deletedBlocks;

document.getElementById('deletedView').onclick = open;
document.getElementById('closeLoc').onclick = deleteLocation;
document.getElementById('closeAll').onclick = closeAll;

document.getElementById('cancel').onclick = cancel;
document.getElementById('showImage').onclick = image;

document.getElementById('save').onclick = newHotel;


function place() {
	hide();
	document.getElementById('place').style.display = "block";
}

function selected() {
	hide();
	document.getElementById('selected').style.display = "block";
}

function history() {
	hide();
	document.getElementById('history').style.display = "block";
	var count = $('#history div.class1').length;
	if (count-1 == 0) {
		document.getElementById('infoAdded').innerHTML = '<h3 id="infoAdded">Добавленные блоки</h3>';
	}
	else {
		count = count-1;
		document.getElementById('infoAdded').innerHTML = '<h3 id="infoAdded">Добавленные блоки '+count+'</h3>';
	}
}

function deletedBlocks() {
	hide();
	document.getElementById('deletedBlocks').style.display = "block";
	var count = $('#deletedBlocks div.class1').length;
	if (count-1 == 0) {
		document.getElementById('infoDeleted').innerHTML = '<h3 id="infoDeleted">Удалённые блоки</h3>';
	}
	else {
		count = count-1;
		document.getElementById('infoDeleted').innerHTML = '<h3 id="infoDeleted">Удалённые блоки '+count+'</h3>';
	}
}

function hideAll() {
	var x = document.querySelectorAll(".class");
	for (var i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
	}
	document.getElementById('createHotel').style.display = 'block';
}

function newHotel() {
    var div = document.createElement('div');
    var stan = document.newHotel;
    var nameHotel = stan.hotel.value;
    var adress = stan.adress.value;
    var number = stan.phone.value;
    var web = stan.web.value;
    var info = stan.info.value;

    if(nameHotel == "" ||
    	adress == "" ||
    	number == "" ||
      	web == "" ||
    	info == ""){
    	alert('Не все поля заполнены.');
    }
    else {
    	var x = image();
	    div.className = "class1";
	    div.innerHTML = '<img class="image" src="'+x+'" alt="Упси... А где моя картинка?">'+
	    '<a class="close" href="#2"><img src="image/close.png" alt="close" title="удалить блок"></a>'+
	    '<br><span class="color">'+nameHotel+'</span>'+
	    '<br><span class="grey">адресс :</span> '+adress+''+
	    '<br><span class="grey">контакты :</span> '+number+' | <a href="http://'+web+'" target="_blank">'+web+'</a>'+
	    '<br>'+info+''+
	    '<br><a href="#more"><em>Больше</em></a><br>';
	    var dv = document.getElementById('place');
	    dv.appendChild(div);
	    place();
	    reset();
		$('.close').click(function(){
			$(this.parentNode).clone().appendTo('#deletedBlocks');
			$(this.parentNode).remove();
		});
		$("#place div.class1:last-child").clone().appendTo('#history');
      	alert('Отель '+nameHotel+' успешно добавлен.');
	}
}

function show(id) {
	if ($(id).css('display') == 'none') { 
        $(id).animate({height: 'show'}, 700); 
    } 
    else {     
        $(id).animate({height: 'hide'}, 700); 
    }
}

function open(event) {
	var id = $(event.path).find('ol').attr('id');
	show('#'+id);
}

function deleteLocation() {
	var x = document.querySelectorAll(".close");
	if ($(".close").css('display') == 'none') { 
		for (var i = 0; i < x.length; i++) {
       		x[i].style.display = 'block';
    	}	
    } 
    else {     
        $(".close").hide(); 
    }
}

$('.close').click(function(){
	$(this.parentNode).clone().appendTo('#deletedBlocks');
	$(this.parentNode).remove();
});

$('.closeAll').click(function(){
	$("#place .class1").clone().appendTo('#deletedBlocks');
	$("#place .class1").remove();
});

function cancel() {
	reset();
	place();
}

function image() {
	var x = document.newHotel.img.value;
	var img = document.getElementById('img_hotel');
	img.src = x;
	return x;
}

function reset() {
	document.getElementById('form').reset();
}

function hide() {
	document.getElementById('place').style.display = "none";
	document.getElementById('selected').style.display = "none";
	document.getElementById('history').style.display = "none";
	document.getElementById('deletedBlocks').style.display = "none";
	document.getElementById("createHotel").style.display = "none";
}