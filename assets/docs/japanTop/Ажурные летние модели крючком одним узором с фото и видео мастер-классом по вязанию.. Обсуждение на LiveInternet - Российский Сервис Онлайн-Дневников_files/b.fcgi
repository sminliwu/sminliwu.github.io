{
var linkElement2 = document.createElement('link');
linkElement2.setAttribute('rel', 'stylesheet');
linkElement2.setAttribute('type', 'text/css');
linkElement2.setAttribute('href', "//news.mediametrics.ru/css/style.css");
document.head.appendChild(linkElement2);
var scriptElement1 = document.createElement("script");
scriptElement1.src = "//news.mediametrics.ru/js/app.js";
scriptElement1.async = false;
document.head.appendChild(scriptElement1);
scriptElement1.onload = function(){
var mySwiper = new Swiper('.swiper-container_mm', {
slidesPerView :'auto',
loop: false,
slidesPerGroup: 4,
navigation: {
nextEl: '.swiper-button-next_mm',
prevEl: '.swiper-button-prev_mm',
}
});
};
var linkElement1 = document.createElement('link');
linkElement1.setAttribute('rel', 'stylesheet');
linkElement1.setAttribute('type', 'text/css');
linkElement1.setAttribute('href', "//news.mediametrics.ru/css/s.css");
document.head.appendChild(linkElement1);
function VeiwCode(Data, masView, bn) {
var S='<div class="swiper-container_mm" onmouseover="blockMouseOver'+bn+'()" onmouseout="blockMouseOver'+bn+'()"><div class="swiper-wrapper">';
for(var i=0; i<Data.news.length; i++) {
masView[i]=0;
S+='<div class="swiper-slide_mm">';
S+='<div class="article_mm" id="target'+bn+'_'+i+'" style="background-image: url(\''+Data.news[i].image+'\');cursor:pointer;" onclick="winOpen(\''+Data.news[i].linkclick+'\')">';
S+='<div class="mask_mm"></div>';
S+='<div class="title_mm';
if (Data.news[i].title.length>56) S+=' font_sm_mm';
S+='">';
S+=Data.news[i].title;
S+='</div></div></div>';
}
S+='</div>';
S+='<div class="swiper-button-prev_mm"></div>';
S+='<div class="swiper-button-next_mm"></div>';
S+='</div>';
var e = document.getElementById('DivID'); if (e) {e.innerHTML = S; e.id = 'DivIDx'+bn;}
}
var Data31381 = {
"status":1,
"blockview":"//news.mediametrics.ru/cgi-bin/v.fcgi?ac=v&m=gif&t=MTY1NzM5Nzg0NC4zMTM4MTo3MjY%3d",
"news":[
{"description":"",
"image":"//news.mediametrics.ru/uploads/1657291958blob.jpg",
"imageW":"//news.mediametrics.ru/uploads/1657291958blobw.jpg",
"imageW2":"//news.mediametrics.ru/uploads/1657291958blobw2.jpg",
"linkview":"//news.mediametrics.ru/cgi-bin/v.fcgi?ac=v&m=gif&t=MTY1NzM5Nzg0NC4zMTM4Mjo3Mjc%3d",
"linkclick":"//news.mediametrics.ru/cgi-bin/c.fcgi?ac=c&t=MTY1NzM5Nzg0NC4zMTM4Mjo3Mjc%3d&u=989aHR0cHM6Ly9tZWRpYW1ldHJpY3MucnUvcmF0aW5nL3J1L2RheS5odG1sP2FydGljbGU9NDg1MTY3OTY2",
"title":"В Мончегорске задержан педофил из горбольницы"},
{"description":"",
"image":"//news.mediametrics.ru/uploads/1657288639blob.jpg",
"imageW":"//news.mediametrics.ru/uploads/1657288639blobw.jpg",
"imageW2":"//news.mediametrics.ru/uploads/1657288639blobw2.jpg",
"linkview":"//news.mediametrics.ru/cgi-bin/v.fcgi?ac=v&m=gif&t=MTY1NzM5Nzg0NC4zMTM4Mzo3Mjg%3d",
"linkclick":"//news.mediametrics.ru/cgi-bin/c.fcgi?ac=c&t=MTY1NzM5Nzg0NC4zMTM4Mzo3Mjg%3d&u=143aHR0cHM6Ly9tZWRpYW1ldHJpY3MucnUvcmF0aW5nL3J1L2RheS5odG1sP2FydGljbGU9NDg1MDUyMzAz",
"title":" «Побочный эффект» спецоперации на Украине: слова Путина "},
{"description":"",
"image":"//news.mediametrics.ru/uploads/1657202217blob.jpg",
"imageW":"//news.mediametrics.ru/uploads/1657202217blobw.jpg",
"imageW2":"//news.mediametrics.ru/uploads/1657202217blobw2.jpg",
"linkview":"//news.mediametrics.ru/cgi-bin/v.fcgi?ac=v&m=gif&t=MTY1NzM5Nzg0NC4zMTM4NDo3Mjk%3d",
"linkclick":"//news.mediametrics.ru/cgi-bin/c.fcgi?ac=c&t=MTY1NzM5Nzg0NC4zMTM4NDo3Mjk%3d&u=391aHR0cHM6Ly9tZWRpYW1ldHJpY3MucnUvcmF0aW5nL3J1L2RheS5odG1sP2FydGljbGU9NDg0ODYwNDMz",
"title":"От злости Галкин пошел на жутчайший шаг: фото "},
{"description":"",
"image":"//news.mediametrics.ru/uploads/1657287334blob.jpg",
"imageW":"//news.mediametrics.ru/uploads/1657287334blobw.jpg",
"imageW2":"//news.mediametrics.ru/uploads/1657287334blobw2.jpg",
"linkview":"//news.mediametrics.ru/cgi-bin/v.fcgi?ac=v&m=gif&t=MTY1NzM5Nzg0NC4zMTM4NTo3MzA%3d",
"linkclick":"//news.mediametrics.ru/cgi-bin/c.fcgi?ac=c&t=MTY1NzM5Nzg0NC4zMTM4NTo3MzA%3d&u=031aHR0cHM6Ly9tZWRpYW1ldHJpY3MucnUvcmF0aW5nL3J1L2RheS5odG1sP2FydGljbGU9NDg1MDY2MjE4",
"title":"«Фонтанка» публикует список запрещенных исполнителей в России"},
{"description":"",
"image":"//news.mediametrics.ru/uploads/1657202078blob.jpg",
"imageW":"//news.mediametrics.ru/uploads/1657202078blobw.jpg",
"imageW2":"//news.mediametrics.ru/uploads/1657202078blobw2.jpg",
"linkview":"//news.mediametrics.ru/cgi-bin/v.fcgi?ac=v&m=gif&t=MTY1NzM5Nzg0NC4zMTM4Njo3MzE%3d",
"linkclick":"//news.mediametrics.ru/cgi-bin/c.fcgi?ac=c&t=MTY1NzM5Nzg0NC4zMTM4Njo3MzE%3d&u=576aHR0cHM6Ly9tZWRpYW1ldHJpY3MucnUvcmF0aW5nL3J1L2RheS5odG1sP2FydGljbGU9NDM2MzA1OTUw",
"title":"Олега Ладыкова вновь арестовали и доставили в суд"},
{"description":"",
"image":"//news.mediametrics.ru/uploads/1657206897blob.jpg",
"imageW":"//news.mediametrics.ru/uploads/1657206897blobw.jpg",
"imageW2":"//news.mediametrics.ru/uploads/1657206897blobw2.jpg",
"linkview":"//news.mediametrics.ru/cgi-bin/v.fcgi?ac=v&m=gif&t=MTY1NzM5Nzg0NC4zMTM4Nzo3MzI%3d",
"linkclick":"//news.mediametrics.ru/cgi-bin/c.fcgi?ac=c&t=MTY1NzM5Nzg0NC4zMTM4Nzo3MzI%3d&u=967aHR0cHM6Ly9tZWRpYW1ldHJpY3MucnUvcmF0aW5nL3J1L2RheS5odG1sP2FydGljbGU9NDM2MjY0NDc2",
"title":"Борис Джонсон подает в отставку с поста премьер-министра ВБ "},
{"description":"",
"image":"//news.mediametrics.ru/uploads/1657206647blob.jpg",
"imageW":"//news.mediametrics.ru/uploads/1657206647blobw.jpg",
"imageW2":"//news.mediametrics.ru/uploads/1657206647blobw2.jpg",
"linkview":"//news.mediametrics.ru/cgi-bin/v.fcgi?ac=v&m=gif&t=MTY1NzM5Nzg0NC4zMTM4ODo3MzM%3d",
"linkclick":"//news.mediametrics.ru/cgi-bin/c.fcgi?ac=c&t=MTY1NzM5Nzg0NC4zMTM4ODo3MzM%3d&u=159aHR0cHM6Ly9tZWRpYW1ldHJpY3MucnUvcmF0aW5nL3J1L2RheS5odG1sP2FydGljbGU9ODc2NDQwNTA%3d",
"title":"СМИ:\"Предварительное согласие Сирии на участие в трибунале\" "},
{"description":"",
"image":"//news.mediametrics.ru/uploads/1657202658blob.jpg",
"imageW":"//news.mediametrics.ru/uploads/1657202658blobw.jpg",
"imageW2":"//news.mediametrics.ru/uploads/1657202658blobw2.jpg",
"linkview":"//news.mediametrics.ru/cgi-bin/v.fcgi?ac=v&m=gif&t=MTY1NzM5Nzg0NC4zMTM4OTo3MzQ%3d",
"linkclick":"//news.mediametrics.ru/cgi-bin/c.fcgi?ac=c&t=MTY1NzM5Nzg0NC4zMTM4OTo3MzQ%3d&u=668INCR0LDQu9Cw0YjQuNGF0LUg0L7QsdGK0Y%2fQstC70LXQvSDQsiDRgNC%2b0LfRi9GB0LogNDIt0LvQtdGC0L3QuNC5INCx0LvQvtCz0LXRgA%3d%3d",
"title":"В Балашихе за убийство объявлен в розыск 42-летний блогер: детали"},
{"description":"",
"image":"//news.mediametrics.ru/uploads/1657288380blob.jpg",
"imageW":"//news.mediametrics.ru/uploads/1657288380blobw.jpg",
"imageW2":"//news.mediametrics.ru/uploads/1657288380blobw2.jpg",
"linkview":"//news.mediametrics.ru/cgi-bin/v.fcgi?ac=v&m=gif&t=MTY1NzM5Nzg0NC4zMTM5MDozMjQ%3d",
"linkclick":"//news.mediametrics.ru/cgi-bin/c.fcgi?ac=c&t=MTY1NzM5Nzg0NC4zMTM5MDozMjQ%3d&u=646aHR0cHM6Ly9tZWRpYW1ldHJpY3MucnUvcmF0aW5nL3J1L2RheS5odG1sP2FydGljbGU9NDg1MDUxNDIy",
"title":" В России женщину убили на остановке на глазах ее любимого"},
{"description":"",
"image":"//news.mediametrics.ru/uploads/1657319670blob.jpg",
"imageW":"//news.mediametrics.ru/uploads/1657319670blobw.jpg",
"imageW2":"//news.mediametrics.ru/uploads/1657319670blobw2.jpg",
"linkview":"//news.mediametrics.ru/cgi-bin/v.fcgi?ac=v&m=gif&t=MTY1NzM5Nzg0NC4zMTM5MTozMjU%3d",
"linkclick":"//news.mediametrics.ru/cgi-bin/c.fcgi?ac=c&t=MTY1NzM5Nzg0NC4zMTM5MTozMjU%3d&u=931aHR0cHM6Ly9tZWRpYW1ldHJpY3MucnUvcmF0aW5nL3J1L2RheS5odG1sP2FydGljbGU9NDg1MjM3NTc1",
"title":"Сотрудница «Вкусно – и точка» рассказала, как готовят в новой сети"}
]
}
var masView31381=[];
var Delay31381=0;
var countV31381=0;
function getGIF31381(url) {
var img = new Image();
img.onload = function() {
countV31381++;
//	console.log('GIF load OK 31381 '+countV31381+'\n');
}
img.src = url;
}
function winOpen(url) {return window.open(url);}
function checkDiv31381(i) {
if (masView31381[i]==-1) {
return 0;
}
var target = document.getElementById('target31381_'+i);
if (!target) {
masView31381[i]=-1;
return 0;
}
var h = (target.getBoundingClientRect().bottom-target.getBoundingClientRect().top)/5;
var w = (target.getBoundingClientRect().right-target.getBoundingClientRect().left)/5;
var targetPosition = {
top: window.pageYOffset + target.getBoundingClientRect().top + h,
left: window.pageXOffset + target.getBoundingClientRect().left + w,
right: window.pageXOffset + target.getBoundingClientRect().right - w,
bottom: window.pageYOffset + target.getBoundingClientRect().bottom - h
};
var windowPosition = {
top: window.pageYOffset,
left: window.pageXOffset,
right: window.pageXOffset + window.innerWidth,
bottom: window.pageYOffset + window.innerHeight
};
if (targetPosition.bottom <= windowPosition.bottom &&
targetPosition.top >= windowPosition.top &&
targetPosition.right <= windowPosition.right &&
targetPosition.left >= windowPosition.left) {
if (masView31381[i]>=5) {
Delay31381 += 25;
setTimeout('getGIF31381("'+Data31381.news[i].linkview+'")', Delay31381);
masView31381[i]=-1;
return 0;
}
masView31381[i]++;
} else {
masView31381[i]=0;
}
return 1;
}
var MouseOver31381=0;
function blockMouseOver31381() {
if (MouseOver31381) return true;
MouseOver31381=1;
getGIF31381(Data31381.blockview);
}
function Visible31381() {
var n=0;
Delay31381=0;
for(var i=0; i<Data31381.news.length; i++) {
if (checkDiv31381(i)>0) n++;
}
if (n>0) setTimeout(Visible31381, 500);
}
if (Data31381.status==1) {
VeiwCode(Data31381, masView31381, '31381');
setTimeout(Visible31381, 250);
}
}
