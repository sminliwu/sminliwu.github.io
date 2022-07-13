var txt=''
var operastart=0;

function insertAtCaret (textObj, textV) {    
        textV=textV.replace(/\[\?\]/g,'');
        var ver=8
        if(document.all && !window.opera){
                if (textObj.createTextRange && textObj.caretPos) {
                        var caretPos = textObj.caretPos
                        caretPos.text = (caretPos.text.charAt(caretPos.text.length - 1) == ' ') ?textV + ' ' : textV
            }else{ textObj.value += textV}
        }else{var brows = navigator.userAgent.toString()
                var scrollTop, scrollLeft;
                if (textObj.type == 'textarea' &&  typeof textObj.scrollTop != 'undefined')
                 {
                    scrollTop  = textObj.scrollTop;
                    scrollLeft = textObj.scrollLeft;
                 }                
                if(brows.search(/opera\/?(\d*.\d*)/i) != -1) ver = RegExp.$1 
                if(textObj.selectionStart>=0  && ver>=8){
                    if(textObj.textLength != undefined) 
           { 
                     var selLength = textObj.textLength; 
                     var selStart = textObj.selectionStart; 
                     var selEnd = textObj.selectionEnd; 
                     if (selEnd == 1 || selEnd == 2)  selEnd = selLength;  
                    var s1 = (textObj.value).substring(0,selStart); 
                    var s2 = (textObj.value).substring(selStart, selEnd) 
                    var s3 = (textObj.value).substring(selEnd, selLength); 
                    if (s2) textObj.value = s1 + textV + s2 + textV + s3; 
                  else   textObj.value = s1 + textV + s3; 
                  textObj.setSelectionRange(selStart+textV.length,selStart+textV.length); 
                   } 
               if (typeof scrollTop != 'undefined')
               {
                textObj.scrollTop  = scrollTop;
                textObj.scrollLeft = scrollLeft;
                }
               }else{
                        textObj.value+=textV
                }
        }
}

function pasteN(text){
        if (text!='' && document.getElementById('post'))
        insertAtCaret(document.getElementById("post"),"[b][user=" + text + "][/b], ");
}

function setCaret (textObj) {
        if (textObj.createTextRange) {
        textObj.caretPos = document.selection.createRange().duplicate();        
        }
}