"use strict";

nameUser();

function nameUser(name) {
	var name = prompt('Ваше имя', "Непоседа");
	if (name == null) {
		document.querySelector(".userName").innerHTML = "Юля футболист";
	} 
	else {
		document.querySelector(".userName").innerHTML = ""+name+"";
	}
}

document.getElementById('placeView').onclick = place;
document.getElementById('newHotel').onclick = newHotel;

document.getElementById('historyS').onclick = open;
document.getElementById('historyView').onclick = history;
document.getElementById('deletedBlocksView').onclick = deletedBlocks;

document.getElementById('deletedView').onclick = open;
document.getElementById('closeLoc').onclick = deleteLocation;
document.getElementById('closeAll').onclick = closeAll;

document.getElementById('showImage').onclick = image;

document.getElementById('save').onclick = save;
document.getElementById('cancel').onclick = cancel;


function place() {
	hide();
	document.getElementById('place').style.display = "block";
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

function newHotel() {
	hide();
	document.getElementById('createHotel').style.display = 'block';
}

function save() {
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
    	if ( x == "" ) {
    		x = 'image/new.png';
    	}

    	var div = document.createElement('div');
    		div.className = 'class1';
    	var br1 = document.createElement('br');
    	var br2 = document.createElement('br');
    	var br3 = document.createElement('br');
    	var br4 = document.createElement('br');
    	var br5 = document.createElement('br');
    	var br6 = document.createElement('br');
    	var span = document.createElement('span');
    		span.className = 'color';
    		span.innerHTML = nameHotel;
    	var img = document.createElement('img');
    		img.className = "image";
    		img.src = x;
    		img.alt = "Упси... А где моя картинка?";
    	var close = document.createElement('a');
    		close.className = 'close';
    		close.href = '#2';
    	var imgClose = document.createElement('img');
    		imgClose.src = "image/close.png";
    		imgClose.alt = "close";
    		imgClose.title = "удалить блок";
    	var greySpan = document.createElement('span');
    		greySpan.className = 'grey';
    		greySpan.innerHTML = 'адресс : ';
    	var greySpan1 = document.createElement('span');
    		greySpan1.className = 'grey';
    		greySpan1.innerHTML = 'контакты : ';
    	var a = document.createElement('a');
    		a.href = web;
    		a.target = '_blank';
    		a.innerHTML = web;
    	var aMore = document.createElement('a');
    		aMore.href = "#more";
    	var em = document.createElement('em');
    		em.innerHTML = 'Больше';
    	var adress1 = document.createElement('span');
    		adress1.innerHTML = adress;
    	var number1 = document.createElement('span');
    		number1.innerHTML = ''+number+' | ';
    	var info1 = document.createElement('span');
    		info1.innerHTML = info;
	    // var html = '<img class="image" src="'+x+'" alt="Упси... А где моя картинка?">'+
	    // '<a class="close" href="#2"><img src="image/close.png" alt="close" title="удалить блок"></a>'+
	    // '<br><span class="color">'+nameHotel+'</span>'+
	    // '<br><span class="grey">адресс :</span> '+adress+''+
	    // '<br><span class="grey">контакты :</span> '+number+' | <a href="http://'+web+'" target="_blank">'+web+'</a>'+
	    // '<br>'+info+''+
	    // '<br><a href="#more"><em>Больше</em></a><br>';
	    var dv = document.getElementById('place');
	    dv.appendChild(div);
	    div.append(img);
	    div.append(close);
	    	close.append(imgClose);
	    div.append(br1);
	    div.append(span);
	    div.append(br2);
	    div.appendChild(greySpan);
	    div.appendChild(adress1);
	    div.appendChild(br3);
	    div.appendChild(greySpan1);
	   	div.appendChild(number1);
	    div.appendChild(a);
	    div.appendChild(br4);
	    div.appendChild(info1);
	    div.appendChild(br5);
	    div.appendChild(aMore);
	    	aMore.append(em);
	    div.appendChild(br6);
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
	document.getElementById('history').style.display = "none";
	document.getElementById('deletedBlocks').style.display = "none";
	document.getElementById("createHotel").style.display = "none";
}



										