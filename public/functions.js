
     

window.onload = function(){
	$.get("/movies/4", function(data, status){
		var movie, serie, tvshow;
		for(i=0;i<4; ++i){
			movie = '<div class="col-sm-6 col-md-3">'+
			  		'<a href="details.html?title='+ data[i].title +'&poster='+ data[i].images[0].poster +'&duracao='+ data[i].duracao +
			  		'&release='+ data[i].release +'&stars='+ data[i].stars +'&categories='+ data[i].categories +'&sinopse='+ data[i].sinopse +
			  		'&originaltitle='+ data[i].origtitle +'&actorsname='+ data[i].atores[0].name +'&apage='+ data[i].atores[0].page +
			  		'&trailer='+ data[i].trailer +'">'+
				    '<div class="thumbnail">'+
				      '<img src="'+ data[i].images[0].smallposter +'" alt="Assistir '+ data[i].title +'">'+
				      '<div class="caption">'+
				        '<h3>'+ data[i].title +'</h3>'+
				        '<div class="sinopse">'+
				        	'<p class="block-with-text" style="width: 100%;">'+ data[i].sinopse +'</p>'+
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

						'<span class="rating-num">'+ data[i].stars +'</span>'+
						'<br/><br/>'+
				      '</div>'+
				    '</div>'+
			   		'</a>'+
			  		'</div>';

			  $('#movies_main').append(movie);

		};
	//debugger;
	});
};

	var pesquisar = function(form, url, method){

		dataForm = document.getElementById("pesquisa").value;
		var data = [];
		var myhttpRequest = CreateRequestObj();
		var movie = "";

		myhttpRequest.onreadystatechange = function(){
			if(myhttpRequest.readyState == 4 && myhttpRequest.status==200){
				data = JSON.parse(myhttpRequest.responseText);
				document.getElementById("main").innerHTML = ''; //limpa tela

				$('#main').append('<div class="row searchR" ><h2>Resultado da Pesquisa</h2></div><hr>');

				for(i=0;i<data.length; ++i){
			movie += '<div class="col-sm-6 col-md-3">'+
			  		'<a href="details.html?title='+ data[i].title +'&poster='+ data[i].images[0].poster +'&duracao='+ data[i].duracao +
			  		'&release='+ data[i].release +'&stars='+ data[i].stars +'&categories='+ data[i].categories +'&sinopse='+ data[i].sinopse +
			  		'&originaltitle='+ data[i].origtitle +'&actorsname='+ data[i].atores[0].name +'&apage='+ data[i].atores[0].page +
			  		'&trailer='+ data[i].trailer +'">'+
				    '<div class="thumbnail">'+
				      '<img src="'+ data[i].images[0].smallposter +'" alt="Assistir '+ data[i].title +'">'+
				      '<div class="caption">'+
				        '<h3>'+ data[i].title +'</h3>'+
				        '<div class="sinopse">'+
				        	'<p class="block-with-text" style="width: 100%;">'+ data[i].sinopse +'</p>'+
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

						'<span class="rating-num">'+ data[i].stars +'</span>'+
						'<br/><br/>'+
				      '</div>'+
				    '</div>'+
			   		'</a>'+
			  		'</div>';
			};
			$('#main').append('<div id="movies_main">'+movie+'</div>');
				console.log(data.length);
			}
		};

		
		myhttpRequest.open(method, url +"/"+ dataForm, true);
		myhttpRequest.send(null);
		
		
		

		

		
		//document.getElementById("main").style.display = 'none'; $('#movies_main').append(movie);
		debugger;
		console.log(data);
//debugger;
	};

     var gravar = function(form, url, method){  //inspired by - http://help.dottoro.com/ljppxrti.php
     	//alert('successfully submitted');
     	data = GetMessageBody(form);
     	//debugger;

     	var myhttpRequest = CreateRequestObj();

     	 try {
                myhttpRequest.open (method, url, true);   // asynchron - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open
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