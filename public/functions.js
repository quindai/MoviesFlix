
 /**Navbar function
 */    
 

window.onload = function(){
	$.get("/movies/4", function(data, status){
		//var movie, serie, tvshow;
		debugger;
		for(i=0;i<((data.length<4) ? data.length: 4); ++i){			
			$('#movies_main').append( preenche(data[i]) );
		};
		//$('#movies_main').append( '<p>Séries >> <a href="#series" id='' >Mostrar mais...</a></p>' );
	//debugger;
	});

	$.get("/series/4", function(data, status){
		//var movie, serie, tvshow;
		debugger;
		for(i=0;i<((data.length<4) ? data.length: 4); ++i){			
			$('#series_main').append( preenche(data[i]) );
		};
		//$('#movies_main').append( '<p>Séries >> <a href="#series" id='' >Mostrar mais...</a></p>' );
	//debugger;
	});

	$.get("/tvshows/4", function(data, status){
		//var movie, serie, tvshow;
		debugger;
		for(i=0;i<((data.length<4) ? data.length: 4); ++i){			
			$('#tvshows_main').append( preenche(data[i]) );
		};
		//$('#movies_main').append( '<p>Séries >> <a href="#series" id='' >Mostrar mais...</a></p>' );
	//debugger;
	});
};

var radio_control = function(){
	var value = document.querySelector('input[name="options"]:checked').value;
	document.getElementById('save_at').value = value;
	document.getElementById('control-temps').style.display = (value == '/movies' ? 'none': 'block');
};

	var preenche = function(data){
		return '<div class="col-sm-6 col-md-3 thumbs">'+
			  		'<a href="details.html?title='+ data.title +'&poster='+ data.images[0].poster +'&duracao='+ data.duracao +
			  		'&release='+ data.release +'&stars='+ data.stars +'&categories='+ data.categories +'&sinopse='+ data.sinopse +
			  		'&originaltitle='+ data.origtitle +'&actorsname='+ data.atores[0].name +'&apage='+ data.atores[0].page +
			  		'&aphoto='+ data.atores[0].photo +'&trailer='+ data.trailer +'">'+
				    '<div class="thumbnail">'+
				      '<img src="'+ data.images[0].smallposter +'" alt="Assistir '+ data.title +'">'+
				      '<div class="caption">'+
				        '<h3>'+ data.title +'</h3>'+
				        '<div class="sinopse">'+
				        	'<p class="block-with-text" style="width: 100%;">'+ data.sinopse +'</p>'+
						'</div>'+
						'<fieldset class="rating">'+
						    '<input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>'+
						    '<input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>'+
						    '<input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>'+
						    '<input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" for="star3half" title="Meh - 3.5 stars"></label>'+
						    '<input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>'+
						    '<input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>'+
						    '<input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>'+
						    '<input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" for="star1half" title="Meh - 1.5 stars"></label>'+
						    '<input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label>'+
						    '<input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>'+
						'</fieldset>'+

						'<span class="rating-num">'+ data.stars +'</span>'+
						'<br/><br/>'+
				      '</div>'+
				    '</div>'+
			   		'</a>'+
			  		'</div>';
	};

	var pesquisar = function(form, url, method){

		dataForm = $.trim(document.getElementById("pesquisa").value);
		if(dataForm === "") return;
		var data = [];
		var myhttpRequest = CreateRequestObj();
		//var movie = "";

		myhttpRequest.onreadystatechange = function(){
			if(myhttpRequest.readyState == 4 && myhttpRequest.status==200){
				data = JSON.parse(myhttpRequest.responseText);
				document.getElementById("main").innerHTML = ''; //limpa tela

				$('#main').append('<div class="row searchR" ><h2>Resultado da Pesquisa</h2></div><hr>');

				for(i=0;i<data.length; ++i){
					$('#main').append('<div id="movies_main">'+ preenche( data[i] ) +'</div>');						  		
				};
			}
		};

		myhttpRequest.open(method, url +"/"+ dataForm, true);
		myhttpRequest.send(null);		
				
		//document.getElementById("main").style.display = 'none'; $('#movies_main').append(movie);
		//debugger;
	};

	var yolo = function(url){  //preenche a tela com filmes, series ou tvshows apenas
		$.get(url, function(data, status){
			document.getElementById("main").innerHTML = ''; //limpa tela
			$('#main').append('<div class="row searchR" ><div class="btn-group" data-toggle="buttons" style="padding-left: 25%;">'+
  					'<label class="btn btn-success active">'+
    					'<input type="radio" name="options" id="option1" autocomplete="off" checked>TODOS'+
 	 				'</label>'+
 	 				'<label class="btn btn-success">'+
    					'<input type="radio" name="options" id="option1" autocomplete="off" checked>AÇÃO'+
 	 				'</label>'+
				  	'<label class="btn btn-success">'+
				    	'<input type="radio" name="options" id="option2" autocomplete="off">SCI-FI'+
				  	'</label>'+
				  	'<label class="btn btn-success">'+
				    	'<input type="radio" name="options" id="option3" autocomplete="off">ROMANCE'+
				  	'</label>'+
				  	'<label class="btn btn-success">'+
				    	'<input type="radio" name="options" id="option3" autocomplete="off">COMÉDIA'+
				  	'</label>'+
				  	'<label class="btn btn-success">'+
				    	'<input type="radio" name="options" id="option3" autocomplete="off">AVENTURA'+
				  	'</label>'+
				  	'<label class="btn btn-success">'+
				    	'<input type="radio" name="options" id="option3" autocomplete="off">ANIMAÇÃO'+
				  	'</label>'+
					'</div><hr>');
			for(i=0;i < data.length; ++i){			
				$('#main').append('<div id="movies_main">'+ preenche( data[i] ) +'</div>');	
			};
		//debugger;
		});

	};


     var gravar = function(form){  //inspired by - http://help.dottoro.com/ljppxrti.php
     	//alert('successfully submitted');
     	data = GetMessageBody(form);
     	//debugger;

     	var myhttpRequest = CreateRequestObj();

     	 try {
                myhttpRequest.open ('POST', document.getElementById('save_at').value, true);   // asynchron - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open
                myhttpRequest.onreadystatechange = function () {
                	OnReadyStateChanged (myhttpRequest, form)
                };
                myhttpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                myhttpRequest.send (data);
            }
            catch (e) {
                alert ("Não há resposta do servidor!");
     		} finally{
     			delete data;
     		};
	}

    function dispose(modal) { //dispose modal form
  		var form = $(modal);
  		
  		form.modal('hide');
  		$(modal).reset();
	};


//Personalized Submit Controller
function OnReadyStateChanged(myhttpRequest, form){
   if (myhttpRequest.readyState == 0 || myhttpRequest.readyState == 4) {
   	console.log(myhttpRequest.status);
        var success = (myhttpRequest.status == 0 || 	//compatibilidade com IE
			        (myhttpRequest.status >= 200 && myhttpRequest.status < 300) || 
			        myhttpRequest.status == 304 || myhttpRequest.status == 1223);

                    // prevent memory leaks
                myhttpRequest.onreadystatechange = null;
                
                /*if (success) {  
                console.log (myhttpRequest.responseText);
                    if (myhttpRequest.responseText === "success") {    // successful
                        alert ("Sucesso!");
                        /*
                            // if redirection is required
                        location.href = "/index.php";
                        */
                /*    }
                    else {  // some fields are invalid
                        alert ("Erro:\n Banco de dados offline!");
                    }
                }
                else {
                    alert ("Erro ao realizar a operação, por favor tente de novo.");
                }*/
            }
};

function GetMessageBody (form) {
    var data = "";
    for (var i = 0; i < form.elements.length; i++) {
        var elem = form.elements[i];
        if (elem.name) {
            var nodeName = elem.nodeName.toLowerCase ();
            var type = elem.type ? elem.type.toLowerCase () : "";

                // if an input:checked or input:radio is not checked, skip it
            if (nodeName === "input" && (type === "checkbox" || type === "radio")) {
                if (!elem.checked) {
                    continue;
                }
            }

            var param = "";
                // select element is special, if no value is specified the text must be sent
            if (nodeName === "select") {
                for (var j = 0; j < elem.options.length; j++) {
                    var option = elem.options[j];
                    if (option.selected) {
                        var valueAttr = option.getAttribute ("value");
                        var value = (valueAttr && valueAttr.specified) ? option.value : option.text;
                        if (param != "") {
                            param += "&";
                        }
                        param += encodeURIComponent (elem.name) + "=" + encodeURIComponent (value);
                    }
                }
            }
            else {
                param = encodeURIComponent (elem.name) + "=" + encodeURIComponent (elem.value);
            }

            if (data != "") {
                data += "&";
            }
            data += param;                  
        }
    }
    return data;
};


function CreateRequestObj () {
        // compatibilidade com IE - retorna XMLHttpRequest
    var forceActiveX = (window.ActiveXObject && location.protocol === "file:");
    if (window.XMLHttpRequest && !forceActiveX) {
        return new XMLHttpRequest();
    }
    else {
        try {
            return new ActiveXObject("Microsoft.XMLHTTP");
        } catch(e) {}
    }
}