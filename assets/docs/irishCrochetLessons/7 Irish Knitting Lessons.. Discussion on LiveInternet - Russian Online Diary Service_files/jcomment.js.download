function j_comment(
messagesinfo_id, useravatar, messagesinfo_header, usname_link, 
usarr_stars, usarr_stars1, dateall, usname, commtext, messagesinfo_postid, 
journalid, messagesinfo_userid, edittext, gocomm, delcomm)
{
document.write(
'<a name=c'+messagesinfo_id+'></a><table><tr><td width=180 nowrap><img src="http://www.liveinternet.ru/i/o.gif" width="180" height="1"></td><td width=100%>'+
'<table width=100% cellspacing=0 cellpadding=0 border=0><tr><td valign="top" class="j_text1" width=1%><center>'+useravatar+'</td>'+
'<td align=left valign="top" class="j_text1"><b>'+messagesinfo_header+'</b><br>'+
usname_link+'<br>'+usarr_stars+usarr_stars1+dateall+'<br>[<a href="javascript:insname(\''+usname+'\')">обратиться по имени</a>]</td></tr>'+
'<tr><td class="j_text" colspan=2><table width=100% cellspacing=0 cellpadding=5 border=0>'+
'<tr><td width=100% class="j_text2">'+commtext+'</td></tr></table></td></tr>'+
'<tr><td align=left valign=top class="j_s" width=20%><a href=#c'+messagesinfo_id+'>URL</a>'+
'</td><td align=right valign=top class="j_s" width=80%>'+
'<a href=/journalpostcomments.php?jpostid='+messagesinfo_postid+'&journalid='+journalid+'&jcommid='+messagesinfo_id+'&qmess=1>Ответить с цитатой</a>&nbsp;&nbsp;'+
'<a href=/mail.php?action=newmessage&userid='+messagesinfo_userid+'>Отправить личное сообщение</a>&nbsp;&nbsp;'+
'<a href=/journal_editpost.php?jpostid='+messagesinfo_postid+'&action=getquote&fromcomment='+messagesinfo_id+'>В цитатник</a>&nbsp;&nbsp;'+
edittext+'&nbsp;&nbsp;'+gocomm+delcomm+
'</td></tr><tr height=2><td colspan=2 class="j_s"></td></tr>'+
'<tr height=10><td colspan=2 class="j_s"></td></tr></table></td></tr></table>');
}

function showpage(curpage,url1,url2,url2_)
{
   var i=0;
   i=1;
  if (curpage==1)
  document.write(
  '[1]'
  ); else 
  document.write(
  '<a href="'+url1+'" class=link_main>1</a>'
  );
   i=i+1;
 while (i<=maxpages) {
   if (i==curpage)
  document.write(
  '&nbsp; <font class=link_main>['+i+']</font>'
  ); else 
     document.write(
  '&nbsp; <a href="'+url2+i+url2_+'" class=link_main>'+i+'</a>'
  );
   i=i+1;
 }
}