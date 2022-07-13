// массив однобуквенных преобразований
t_table1 = "ABVWGDEZJIKLMNOPRSTUFHXCYabwvgdezijklmnoprstufhxcy'";
w_table1 = "јЅ¬¬√ƒ≈«∆» ЋћЌќѕ–—“”‘’’÷џабввгдезижклмнопрстуфххцыь";

// масси двухбуквенных преобразований
t_table2 = "YOJO`OZHI`TZCHSHXH``JEYUJU`UYAJA`Ayojo`ozhi`i'tzchshxh``jeyuju`uyaja`a";
w_table2 = "®®®∆…÷„ЎўЏЁёёёяяяЄЄЄжййцчшщъэююю€€€";


function transliteall() {

  with(document.vbform.headerofpost) { value=translit2win(value);}  with(document.vbform.message) { value=translit2win(value); focus(); } 
}

function translit2win(str) 
{
 var len = str.length;
 var new_str="";
 var c='1';
 var j1=0;
 for (i = 0; i < len; i++)
 {
  // проверим на 4 
  if (str.substr(i,1) == "4" && i>0) {
    if (str.substr(i-1,3)!=' 4 ') {
      new_str+='4';
      continue;
    }
  }

  //если началось : 
  if (str.substr(i,1) == ":") { 
    //то пропускаем до следующей : или пробела
    j1 = i + 1;
    c = str.substr(i, 1);
    new_str+= c;
    while (((str.substr(j1,1)!=":") && (str.substr(j1,1)!=" ")) && (j1<=len)) {
      c = str.substr(j1, 1);
      new_str+= c;
      j1 = j1 + 1;
    }
    i = j1;
    c = str.substr(j1, 1);
    new_str+= c;
    continue;
  }


  //если началось | или [
  if ((str.substr(i,1) == "|")||(str.substr(i,1) == "[")) 
  {
    var symbol = '';
    symbol = str.substr(i, 1);
    j1 = i + 1;
//    new_str+= c;
    while ((str.substr(j1,1)!= symbol) && (j1<=len)) {
      c = str.substr(j1, 1);
      new_str+= c;
      j1 = j1 + 1;
    }
//    c = str.substr(j1, 1);
    if (i+1==j1) 
    {
      c = str.substr(j1, 1);
      new_str+= c;
    }
    i = j1;
    continue;
  }


  // cначала проверить на 4значную щ=shch
  if (str.substr(i,4) == "shch") { 
    new_str+='щ';
    i = i + 3;
    continue;
  }
  // двойный 
  is2char=false;
  if (i < len-1) {
   for(j = 0; j < w_table2.length; j++)
   {
    if(str.substr(i, 2) == t_table2.substr(j*2,2)) {
     new_str+= w_table2.substr(j, 1);
     i++;
     is2char=true;
     break;
    }
   }
  }

  if(!is2char) {
   // Convert one-character letter
   var c = str.substr(i, 1);
   var pos = t_table1.indexOf(c);
   if (pos < 0)
    new_str+= c;
   else 
    new_str+= w_table1.substr(pos, 1);

  }
 }
 return new_str;
}
                           
function opentranslitwindow (vars){
// um... opens smilie overflow window.
  window.open("/rules_translit.html", "smilies", "toolbar=no,scrollbars=no,resizable=no,width=360,height=380");
}
