// *******************************************************

tags = new Array();

// *******************************************************
// replacements for unsupported array functions (because arrayname.push(var)
// and arrayname.pop() are not implemented in IE until version 5.5)

function getarraysize(thearray) {
// replacement for arrayname.length property
        for (i = 0; i < thearray.length; i++) {
                if ((thearray[i] == "undefined") || (thearray[i] == "") || (thearray[i] == null))
                        return i;
                }
        return thearray.length;
}

function arraypush(thearray,value) {
// replacement for arrayname.push(value)
        thearraysize = getarraysize(thearray);
        thearray[thearraysize] = value;
}

function arraypop(thearray) {
// replacement for arrayname.pop()
        thearraysize = getarraysize(thearray);
        retval = thearray[thearraysize - 1];
        delete thearray[thearraysize - 1];
        return retval;
}

// *******************************************************

function setmode(modevalue) {
// sets cookie for normal (0) and enhanced (1) modes
        document.cookie = "vbcodemode="+modevalue+"; path=/; expires=Wed, 1 Jan 2020 00:00:00 GMT;";
}

function normalmode(theform) {
// checks value of mode radio buttons. returns true if normal mode
        if (theform.mode[0].checked) return true;
        else return false;
}

function stat(thevalue) {
// places mini-help text into help/error textbox
// strings are stored in vbcode_language.js
        document.vbform.status.value = eval(thevalue+"_text");
}

// *******************************************************

function closetag(theform) {
// closes last opened tag
        if (normalmode(theform))
                stat('enhanced_only');
        else
                if (tags[0]) {
                        theform.LiNewPostForm.value += "[/"+ arraypop(tags) +"]";
                        }
                else {
                        stat('no_tags');
                        }
        //theform.closecurrent.checked=false;
        theform.LiNewPostForm.focus();
}

function closeall(theform) {
// closes all open tags
        if (normalmode(theform))
                stat('enhanced_only');
        else {
                if (tags[0]) {
                        while (tags[0]) {
                                theform.LiNewPostForm.value += "[/"+ arraypop(tags) +"]";
                                }
                        theform.LiNewPostForm.value += " ";
                        }
                else {
                        stat('no_tags');
                        }
                }
        //theform.closealltags.checked=false;
        theform.LiNewPostForm.focus();
}

// *******************************************************

function vbcode(theform,vbcode,prompttext) {
// insert [x]yyy[/x] style markup
        if ((normalmode(theform)) || (vbcode=="IMG")) {
                inserttext = prompt(tag_prompt+"\n["+vbcode+"]xxx[/"+vbcode+"]",prompttext);
                if ((inserttext != null) && (inserttext != ""))
                        theform.LiNewPostForm.value += "["+vbcode+"]"+inserttext+"[/"+vbcode+"] ";
                }
        else {
                donotinsert = false;
                for (i = 0; i < tags.length; i++) {
                        if (tags[i] == vbcode)
                                donotinsert = true;
                        }
                if (donotinsert)
                        stat("already_open");
                else {
                        theform.LiNewPostForm.value += "["+vbcode+"]";
                        arraypush(tags,vbcode);
                        }
                }
        theform.LiNewPostForm.focus();
}

// *******************************************************

function fontformat(theform,thevalue,thetype) {
// insert two-parameter markup - [x=y]zzz[/x]
        if (normalmode(theform)) {
                if (thevalue != 0) {
                        inserttext = prompt(font_formatter_prompt+" "+thetype,"");
                        if ((inserttext != null) && (inserttext != ""))
                                theform.LiNewPostForm.value += "["+thetype+"="+thevalue+"]"+inserttext+"[/"+thetype+"] ";
                        }
                }
        else {
                theform.LiNewPostForm.value += "["+thetype+"="+thevalue+"]";
                arraypush(tags,thetype);
                }
        theform.sizeselect.selectedIndex = 0;
        theform.fontselect.selectedIndex = 0;
        theform.colorselect.selectedIndex = 0;
        theform.LiNewPostForm.focus();
}

// *******************************************************

function namedlink(theform,thetype) {
// inserts named url or email link - [url=mylink]text[/url]
        linktext = prompt(link_text_prompt,"");
                var prompttext;
                if (thetype == "URL") {
                        prompt_text = link_url_prompt;
                        prompt_contents = "http://";
                        }
                else {
                        prompt_text = link_email_prompt;
                        prompt_contents = "";
                        }
        linkurl = prompt(prompt_text,prompt_contents);
        if ((linkurl != null) && (linkurl != "")) {
                if ((linktext != null) && (linktext != ""))
                        theform.LiNewPostForm.value += "["+thetype+"="+linkurl+"]"+linktext+"[/"+thetype+"] ";
                else
                        theform.LiNewPostForm.value += "["+thetype+"]"+linkurl+"[/"+thetype+"] ";
                }
        theform.LiNewPostForm.focus();
}

// *******************************************************

function dolist(theform) {
// inserts list with option to have numbered or alphabetical type
        listtype = prompt(list_type_prompt, "");
        if ((listtype == "a") || (listtype == "1")) {
                thelist = "[list="+listtype+"]\n";
                listend = "[/list="+listtype+"] ";
                }
        else {
                thelist = "[list]\n";
                listend = "[/list] ";
                }
        listentry = "initial";
        while ((listentry != "") && (listentry != null)) {
                listentry = prompt(list_item_prompt, "");
                if ((listentry != "") && (listentry != null))
                        thelist = thelist+"[*]"+listentry+"\n";
                }
        theform.LiNewPostForm.value += thelist+listend;
        theform.LiNewPostForm.focus();
}

// *******************************************************

function smilie(thesmilie) {
// inserts smilie text
  //вставляем хитро...
//  alert(document.all['SPAW_message_editor_mode'].value);
  if (document.all['SPAW_message_editor_mode'].value == "design")
    alert("Чтобы использовать смайлы переключите переключатель внизу поля ввода в положение HTML");
    else
  {
//    alert(document.all['SPAW_message_editor_mode'].value);
    document.vbform.LiNewPostForm.value += thesmilie+" ";
    document.vbform.LiNewPostForm.focus();
  }
}

function transwin(par)
{
 if (document.all['SPAW_message_editor_mode'].value == "design")
    alert ("Чтобы использовать транслит переключите переключатель внизу поля ввода в положение HTML");
      else
   {
     with(document.vbform.headerofpost)
      { value=translit2win(value);}
     with(document.vbform.LiNewPostForm)
       { value=translit2win(value); focus();}
    }
}

function opensmiliewindow(x,y,sessionhash) {
// um... opens smilie overflow window.
  window.open("http://www.liveinternet.ru/smilies.php", "smilies", "toolbar=no,scrollbars=yes,resizable=yes,left=1,top=1,width=450,height=430");
}

function openwindow(url) {
// um... opens smilie overflow window.
  window.open("http://www.liveinternet.ru/"+url, "webcam", "toolbar=no,scrollbars=yes,resizable=yes,left=1,top=1,width=330,height=250");
}

// *******************************************************
