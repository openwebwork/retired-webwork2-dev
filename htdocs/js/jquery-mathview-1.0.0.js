// Class constructor
// Create the equation editor decorator around the decoratedTextBox and 
// generate PG or LaTeX code depending ont the renderingMode option.
// params:
//    decoratedTextBox: the text box being decorated.
//    rederingMode: Either "PG" to render PG code or "LATEX" to render LaTeX code.

//console.log(location.search);
//Version
var basepath = "/webwork2_files/images/mathview/";// basepath for images
var Version = "1.0.0";
function PopUpEquation(renderingMode) {
		
	/*if (typeof jQuery == 'undefined') { 
		console.log("meuh");
		var fileref=document.createElement('script')
		fileref.setAttribute("type","text/javascript")
		fileref.setAttribute("src", "http://code.jquery.com/ui/1.9.0/jquery-ui.js")
	}*/
	
	MathJax.Hub.Config({
		  menuSettings: { context: "Browser" }, 
		  showProcessingMessages: false,
		  TeX: {
			MultLineWidth: "50%"
		  },
		  styles: {
			"#viewer": {
				"font-size":  "200%"
			},
			
			".ui-widget-content": {
				"background": "none",
				"padding-right":"40px"
			},

			".ui-widget-content > ul" : {
				"text-align": "center"
			},

			".ui-widget-header > ul": {
				"text-align": "center"
			},		
			".classCat > li": {
				"display": "inline"
			}			
		  }
		});
	// Check that the decoratedTextBox is a Textbox DOM object
	
	// Check that the rederingMode is either "PG" or "LATEX"
	this.renderingMode = 'LATEX';
	this.isVisible = false;
	
	var decoratedTextBox;
	var me = this;
	this.generateTex = function(strucValue) {
		if(me.decoratedTextBox.val()!=null){		
			var oldTex = me.decoratedTextBox.val();
		}
		if ($('#warning').length != 0){
			$('#warning').remove();
		}
		
		if (me.renderingMode == "LATEX"){
			me.decoratedTextBox.insertAtCaret(strucValue.latex);
			
			var tex = me.decoratedTextBox.val();
			$('#viewer').html("$$" + tex + "$$");
			
			//reprocess the MathOutput Element
			MathJax.Hub.Queue(["Typeset",MathJax.Hub,"viewer"]);
		}else{
			if (me.renderingMode == "PG"){
				me.decoratedTextBox.insertAtCaret(strucValue.PG);
				code = encodeURIComponent(me.decoratedTextBox.val());
				$.get('webwork2/pgtotex?pgcode='+code, function(data) {
					$('#viewer').html("$$" + data + "$$");
					
					//reprocess the MathOutput Element
					MathJax.Hub.Queue(["Typeset",MathJax.Hub,"viewer"]);
				});
			}
			else
				console.log('Invalid Rendering Mode');
		}
				
		var equWidth = $('#viewer').find('.MathJax').first().width();
		
		if (equWidth>530)
		{
			if (equWidth>800)
			{
				me.decoratedTextBox.val(oldTex);
				if (me.renderingMode == "LATEX")
				{
					$('#viewer').html("$$" + oldTex + "$$");
					
					//reprocess the MathOutput Element
					MathJax.Hub.Queue(["Typeset",MathJax.Hub,"viewer"]);
				}
				else
				{
					if (me.renderingMode == "PG")
					{
						code = encodeURIComponent(me.decoratedTextBox.val());
						
						$.get('webwork2/pgtotex?pgcode='+code, function(data) {
							$('#viewer').html("$$" + data + "$$");
							
							//reprocess the MathOutput Element
							MathJax.Hub.Queue(["Typeset",MathJax.Hub,"viewer"]);
						});
					}
				}
				
				$('#popupdiv').append($('<div>', { id: 'warning', style: 'position: relative; border: solid black 1px; background-color:darkgrey;text-align: center;margin-left: auto;margin-right: auto;color: red;font-size: 24px;width: 350px;' }));
				$('#warning').html('Equation is too long.');				
				}
				else {$('#popupdiv').css('width',equWidth+20);}
		}
		else {$('#popupdiv').css('width','530px');}
		
	}
	this.reGenerateTex = function(tbValue) {
		var oldTex = me.decoratedTextBox.val();
		
		if ($('#warning').length != 0)
		{
			$('#warning').remove();
			$('#popupdiv').css('width','530px');
		}
		
		if (me.renderingMode == "LATEX")
		{
			$('#viewer').html("$$" + tbValue + "$$");

			MathJax.Hub.Queue(["Typeset",MathJax.Hub,"viewer"]);
		}
		else
		{
			if (me.renderingMode == "PG")
			{
				code = encodeURIComponent(tbValue);
				$.get('webwork2/pgtotex?pgcode='+code, function(data) {		
					$('#viewer').html("$$" + data + "$$");

					MathJax.Hub.Queue(["Typeset",MathJax.Hub,"viewer"]);
				});
			}
			else
				console.log('Invalid Rendering Mode');
		}
		
		var equWidth = $('#viewer').find('.MathJax').first().width();
		
		if (equWidth>530)
		{
			if (equWidth>=800)
			{
				me.decoratedTextBox.val(oldTex);
				if (me.renderingMode == "LATEX")
				{
					$('#viewer').html("$$" + oldTex + "$$");
					
					//reprocess the MathOutput Element
					MathJax.Hub.Queue(["Typeset",MathJax.Hub,"viewer"]);
				}
				else
				{
					if (me.renderingMode == "PG")
					{
						code = encodeURIComponent(me.decoratedTextBox.val());
						
						$.get('webwork2/pgtotex?pgcode='+code, function(data) {
							$('#viewer').html("$$" + data + "$$");
							
							//reprocess the MathOutput Element
							MathJax.Hub.Queue(["Typeset",MathJax.Hub,"viewer"]);
						});
					}
				}
				
				$('#popupdiv').append($('<div>', { id: 'warning', style: 'position: relative; border: solid black 1px; background-color:darkgrey;text-align: center;margin-left: auto;margin-right: auto;color: red;font-size: 24px;width: 350px;' }));
				$('#warning').html('Equation is too long.');				
				}
				else {$('#popupdiv').css('width',equWidth+20);}
		}
		else {$('#popupdiv').css('width','530px');}
		
	}
	this.initialise = function() {
		$.each(['tabs','viewer','buttons'],function(i,value){$('#popupdiv').append($('<div>', {id:value})).css('background','#f0f0f0')});
		
		$('#tabs').append($('<ul>'));
		$.each(categories, this.createCat);
		
		$('#viewer').html("$$ $$");
		MathJax.Hub.Queue(["Typeset",MathJax.Hub,"viewer"]);
		
		$('#popupdiv').tabs('refresh');
		$('#popupdiv').tabs({ selected: 0 });
	}
	this.addTextBoxFocus = function(textBoxToFocus) {
		textBoxToFocus.focus(function(){me.checkTexBox($(this))});
	}
	this.createCat = function(i, value) {
		ul = $('#tabs > ul'); 
		var tabId = 'tabs-'+i;
		
		ul.append($('<li>').append($('<a>', { href:'#'+tabId }).append($('<img>', { src:basepath+'img_trans.gif', width:"1", height:"1" }).addClass('catImg'+i))).mouseenter(function() {
			ul.append($('<div>', { id: 'hover', style: 'position: absolute; border: solid black 1px; background-color:yellow;' }));
			$('#hover').html(value.tooltip);				
			var x;
			x = (i+1)*(29+54) +10;
			$('#hover').css({ left: x })
			}
		).mouseleave(function() {
			$('#hover').remove();
			}
		)
		);
		
		$('.catImg'+i).css({
			width: '54px',
			height: '36px',
		});
		$('.catImg'+i).css('background', 'url('+ value.image+ ')');
		
		var opUl = $('<ul>').css({padding: '0px'});
		var catValue = value;
		var opCount = i;
		
		$.each(value.operators, 
		function(i,value){
			var className = 'opImg'+opCount+i;
			
			opUl.append($('<li>').append($('<img>',{ src:basepath+'img_trans.gif', width:"54px", height:"36px"}).css({background: 'url('+ catValue.image+ ') -' +i*54 + 'px 0', border: 'solid 1px', margin: '3px'}).addClass(className).click(function(){me.generateTex(value);})));	
		
			$('.'+className).css({
				width: '54px',
				height: '36px'
			});
			$('.'+className).css({background: 'url('+ catValue.image+ ') -' +i*54 + 'px 0'});	
			});

		$('#tabs').append($('<div>', { id:tabId, height: "84px", width: "530px" }).append(opUl));
		$(tabId).css('height', '100px');
		
		opUl.addClass('classCat');
	}
	this.closeItAll = function(e) {
		if ((me.popupdiv.has(e.target).length == 0 && !me.popupdiv.is(e.target)) && !me.decoratedTextBox.is(e.target))
		{
			me.setVisible(false);
		}
	}
	this.checkTexBox = function(decoratedTextBox) {
	
		if (typeof me.decoratedTextBox == 'undefined' )
		{
			me.setTexBox(decoratedTextBox);
		}
		else
		{	
			if (decoratedTextBox.attr('id') != me.decoratedTextBox.attr('id'))
			{
				me.setTexBox(decoratedTextBox);
			}
		}
	}
	this.setTexBox = function(decoratedTextBox) {
				$( "#popupdiv" ).tabs({ selected: 0 });
				
				//Position of the popup. It gets the position of the textbox to put the popup on its side.	
				var x, y;
				x = decoratedTextBox.position().left+decoratedTextBox.width();
				y = decoratedTextBox.position().top;
				$('#popupdiv').css({ left: x, top: y })
				
				decoratedTextBox.keyup(function(){me.reGenerateTex(this.value);});
				decoratedTextBox.focus(function(){me.setVisible(true)});
				me.setVisible(true);
				me.decoratedTextBox = decoratedTextBox;
				me.reGenerateTex(me.decoratedTextBox.val());
				
				MathJax.Hub.Queue(["Typeset",MathJax.Hub,"viewer"]);
				$(document).mousedown(me.closeItAll);
	}
	this.setVisible = function(value) {
	
		if (this.isVisible != value)
		{
			this.isVisible = value;
			if (this.isVisible)
				this.popupdiv.show();
			else
				this.popupdiv.hide();
		}
	}
	
	if ($('#popupdiv').length == 0)
	{
		$('body').append($('<div>', { id: 'popupdiv', style: ' display: none; position: absolute; border: solid black 1px; padding: 10px; background-color:#f0f0f0; text-align: justify; font-size: 12px; width: 530px; height: 300px' }));
		$( "#popupdiv" ).tabs();
		$( "#popupdiv" ).draggable({ containment: "parent", handle: ".ui-corner-all" });
		this.initialise();
		$( "#popupdiv" ).append($('<input>',{ id:'equation', type:'text',style:'width:425px;'}));
		$( "#popupdiv" ).append(
			$('<input>',{
				type:'button',
				style:'width:100px;',
				value:"ok"
			}).click(function () {
				    var text = document.getElementById("equation").value;
				    var el = document.getElementsByName("data")[0];
				    var val = el.value, endIndex, range;
				    if (typeof el.selectionStart != "undefined" && typeof el.selectionEnd != "undefined") {
					endIndex = el.selectionEnd;
					el.value = val.slice(0, endIndex) + text + val.slice(endIndex);
					el.selectionStart = el.selectionEnd = endIndex + text.length;
				    } else if (	typeof document.selection != "undefined" && 
						typeof document.selection.createRange != "undefined") {
					el.focus();
					range = document.selection.createRange();
					range.collapse(false);
					range.text = text;
					range.select();
				    }
				}));
	}
	this.popupdiv = $('#popupdiv');
}			

	var popUpEquation;
	$(
	function() 
	{
		popUpEquation = new PopUpEquation();
		
		$.fn.addMathEditor = function() {
			var me = this.filter(function(index) {return $(this).is('input[type="text"]') || $(this).is('textarea');});
			//var me = function(index);
			//var me = document.getElementById("equation"); 
			popUpEquation.addTextBoxFocus(me);
			return me;
		};
		$.fn.insertAtCaret = function(myValue) {
			return this.each(function() {
				var me = this;
				//var me = document.getElementById("equation");
				if (document.selection) { // Internet Explorer
					me.focus();
					sel = document.selection.createRange();
					sel.text = myValue;
					me.focus();
				} else if (me.selectionStart || me.selectionStart == '0') { // Others browsers
					var startPos = me.selectionStart, endPos = me.selectionEnd, scrollTop = me.scrollTop;
					me.value = me.value.substring(0, startPos) + myValue + me.value.substring(endPos, me.value.length);
					me.focus();
					me.selectionStart = startPos + myValue.length;
					me.selectionEnd = startPos + myValue.length;
					me.scrollTop = scrollTop;
				} else {
					me.value += myValue;
					me.focus();
				}
			});
		};
	});
	
	


