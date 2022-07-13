/*
LiCi JS
Version: 0.3
Author: ATimofeev [Re.Active]
Author URI: http://www.reactant.ru/
*/


var LiCi = {};


/* Browser
----------------------------------------------- */
	LiCi.userAgent = navigator.userAgent.toLowerCase();
	LiCi.getBrowser = {
		version: (LiCi.userAgent.match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [])[1],
		safari: /webkit/.test(LiCi.userAgent),
		opera: /opera/.test(LiCi.userAgent),
		msie: (/msie/.test(LiCi.userAgent)) && (!/opera/.test( LiCi.userAgent )),
		mozilla: (/mozilla/.test(LiCi.userAgent)) && (!/(compatible|webkit)/.test(LiCi.userAgent)),
		chrome: /chrome/.test(LiCi.userAgent) && (!/yabrowser/.test(LiCi.userAgent)),
        yabrowser: /yabrowser/.test(LiCi.userAgent)
	};
	
	
/* System
----------------------------------------------- */	
	LiCi.require = function (src) {
		var js = document.createElement('script');
		js.src = src;
		js.async = 'true';
		var head = document.getElementsByTagName('head')[0];
		head.appendChild(js);		
	};

	
/* DOM  methods
----------------------------------------------- */
	/* -----------[ ID ]----------- */
		/* -[ Get element ]- */
			LiCi.$ = function (id) {
				return document.getElementById(id);
			};
	/* -----------[ className ]----------- */
		/* -[ Get elements ]- */
			LiCi.$_ = function (classname,node) {
					if(!node) node = document.getElementsByTagName("body")[0];
				    var a = [];
				    var re = new RegExp('\\b' + classname + '\\b');
				    var els = node.getElementsByTagName("*");
				    for(var i=0,j=els.length; i<j; i++)
				        if(re.test(els[i].className))a.push(els[i]);
				    return a;		
			};
		/* -[ Add class ]- */	
			LiCi.$_add = function (e,classname) {
				if (e.className=='') {
					e.className = classname;
				} else {
					var re = new RegExp('\\b' + classname + '\\b');
					if (!re.test(e.className)) {
						e.className += ' '+classname;
					}
				}
			}
		/* -[ Del class ]- */	
			LiCi.$_del = function (e,classname) {
				e.className = LiCi.Strings.rpls (classname,'',e.className);
			};			
		/* -[ Rename class ]- */
			LiCi.$_rename = function (o,n,e) {
				LiCi.$_del (e,o);
				LiCi.$_add (e,n);
			};
	/* -----------[ Get computed style ]----------- */	
		LiCi.$Get = function (elem,name) {
			if (elem.style[name])
					return elem.style[name];
				else if (elem.currentStyle)
					return elem.currentStyle
				else if (document.defaultView && document.defaultView.getComputedStyle) {
					name = name.replace(/([A-Z])/g,"-$1");
					name = name.toLowerCase();			
					var s = document.defaultView.getComputedStyle(elem,"");
					return s && s.getPropertyValue(name);
				} else {
					return null;
				}
		};
	/* -----------[ Set element property ]----------- */	
		LiCi.$Set = function (e,prop,value) {
			e.style[prop] = value;
		};
	/* -----------[ Get nodes ]----------- */
		LiCi.$Node = {
			Clean : function (arr) {
				var clean = new Array();
				for (var i=0; i<arr.length; i++) {
					if (arr[i].nodeType == 1) {
						clean.push(arr[i]);
					}
				}
				return clean;			
			},
			Del : function (e) {
				e.parentNode.removeChild(e);
			},
			Create : function (referenceNode, newNode) {
				referenceNode.parentNode.insertBefore( newNode, referenceNode.nextSibling );
			}
		};	
			/* -[ Child ]- */
				LiCi.$Node.Child = {};
					/* -[ Get all ]- */
						LiCi.$Node.Child.getAll = function (e) {
							var child = e.getElementsByTagName('*');
							return LiCi.$Node.Clean(child);
						};
					/* -[ Get first child element ]- */
						LiCi.$Node.Child.getFirst = function (e) {
							e = e.firstChild;
							return e && e.nodeType != 1 ? e.nextSibling : e;
						};
					/* -[ Get last child element ]- */
						LiCi.$Node.Child.getLast = function (e) {
							e = e.lastChild;
							return e && e.nodeType != 1 ? e.nextSibling : e;
						};
					/* -[ Get first level elements ]- */
						LiCi.$Node.Child.getFirsts = function (e) {
							var first = this.getFirst(e);
							var last = this.getLast(e);
							var childs = new Array ();
							while (first != last) {
								childs.push(first);
								first = LiCi.$Node.Sibl.getNext(first);
							}
							childs.push(last);
							return childs;
						};
			/* -[ Parent ]- */
				LiCi.$Node.Prnt = {}
					/* -[ Get all ]- */
						LiCi.$Node.Prnt.getAll = function (e,first) {
							var testObj = e.parentNode;
							var parents = new Array ();
							while (testObj != first) {
								parents.push(testObj);
								testObj = testObj.parentNode;
							}
							return parents;
						};
					/* -[ Level count ]- */
						LiCi.$Node.Prnt.lvl = function (e,first) {
							var parents = LiCi.$Node.Prnt.getAll(e,first);
							return parents.length;
						};
			/* -[ Sibling ]- */			
				LiCi.$Node.Sibl = {}
					/* -[ Get first ]- */
						LiCi.$Node.Sibl.getPrev = function (elem) {
							do {
								elem = elem.previousSibling;
							} while (elem && elem.nodeType != 1);
							return elem;
						};
					/* -[ Get last ]- */
						LiCi.$Node.Sibl.getNext = function (elem) {
							do {
								elem = elem.nextSibling;
							} while (elem && elem.nodeType != 1);
							return elem;
						};
						
						
		
/* Events
----------------------------------------------- */
	/* -----------[ Listeners ]----------- */	
		LiCi.eventAdd = function (obj, type, fn) {
			if (obj) if ( obj.attachEvent ) {
			    obj['e'+type+fn] = fn;
			    obj[type+fn] = function(){obj['e'+type+fn]( window.event )}
			    obj.attachEvent( 'on'+type, obj[type+fn] );
			  } else
			    obj.addEventListener( type, fn, false );		
		};
		LiCi.eventDel = function (obj, type, fn) {
			if (obj) if ( obj.detachEvent ) {
				obj.detachEvent( 'on'+type, obj[type+fn] );
				obj[type+fn] = null;
			} else
				obj.removeEventListener( type, fn, false );
		};		
		LiCi.domReady = function (f) {
			if ( LiCi.domReady.done ) return f();
			if ( LiCi.domReady.timer ) {
				LiCi.domReady.ready.push( f );
			} else {
				LiCi.eventAdd (window, "load", function () {
					LiCi.isDOMReady();
				});							
				LiCi.domReady.ready = [ f ];
				LiCi.domReady.timer = setInterval( LiCi.isDOMReady, 13 );
			}			
		};
		LiCi.isDOMReady = function () {
			if ( LiCi.domReady.done ) return false;
			if ( document && document.getElementsByTagName && document.getElementById && document.body ) {
			   clearInterval( LiCi.domReady.timer );
			   LiCi.domReady.timer = null;
			   for ( var i = 0; i < LiCi.domReady.ready.length; i++ )
			       LiCi.domReady.ready[i]();
			   LiCi.domReady.ready = null;
			   LiCi.domReady.done = true;
			}
		};

			
/* Elements properties
----------------------------------------------- */
	/* -----------[ Elements custom properties ]----------- */
		LiCi.setOption = function (e,obj) {
			e.onclick = function () { return obj; }
		};
		LiCi.getOption = function (e) {
			return e.onclick instanceof Function ? e.onclick() : {};
		};
	/* -----------[ Elements native properties ]----------- */
		/* -[ Size ]- */
			LiCi.pageHeight = function () {
				return document.body.scrollHeight;
			};
			LiCi.pageWidth = function () {
				return document.body.scrollWidth;
			};
			LiCi.windowHeight = function () {
				var doc = document.documentElement;
				return self.innerHeight || (doc && doc.clientHeight) || document.body.clientHeight;
			};
			LiCi.windowWidth = function () {
				var doc = document.documentElement;
				return self.innerWidth || (doc && doc.clientWidth) || document.body.clientWidth;
			};
			LiCi.elemHeight = function (e) {
				if ( this.$Get(e, "display") != "none" )
					return e.offsetHeight; // || getHeight (e);
				var old = this.resetCSS ( e, {
					display : "",
					visibility : "hidden",
					position : "absolute"					
				});
				var h = e.clientHeight ; //|| getHeight (e);
				this.restoreCSS (e,old);
				return h;				
			};
			LiCi.elemWidth = function (e) {
				if ( this.$Get(e, "display") != "none" )
					return e.offsetWidth; // || getWidth (e);
				var old = this.resetCSS ( e, {
					display : "",
					visibility : "hidden",
					position : "absolute"					
				});
				var w = e.clientWidth; // || getWidth (e);
				this.restoreCSS (e,old);
				return w;				
			};
			LiCi,resetCSS = function (e,prop) {
				var old = {};
				for (var i in prop) {
					old[i] = e.style[i];
					e.style[i] = prop[i];
				}
				return old;				
			};
			LiCi.restoreCSS = function (e,prop) {
				for (var i in prop) {
					e.style[i] = prop[i];
				}				
			};
		/* -[ Offset ]- */	
			LiCi.offset = {};
				LiCi.offset.body = function () {
					return document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;
				};
				LiCi.offset.top = function (e) {
					return e.offsetParent ?
						e.offsetTop + LiCi.offset.top (e.offsetParent) :
							e.offsetTop;				
				};
				LiCi.offset.left = function (e) {
					return e.offsetParent ?
						e.offsetLeft + LiCi.offset.left (e.offsetParent) :
							e.offsetLeft;				
				};
				LiCi.offset.diff = function (parent,child) {
					return LiCi.offset.top(child) - LiCi.offset.top(parent);
				};

			
/* Effects
----------------------------------------------- */
	/* -----------[ Opacity ]----------- */
		LiCi.setOpacity = function (e,level) {
			if (e.filters) e.style.filter = 'alpha(opacity=' + level*100 + ')';
			else e.style.opacity = level;			
		};
		
		
/* Keys
----------------------------------------------- */	
	LiCi.keys = {}	
		/* -----------[ Ctrl+Enter ]----------- */
			LiCi.keys.ctrlenter = function (event, formElem, fn) {
				if((event.ctrlKey) && ((event.keyCode == 0xA)||(event.keyCode == 0xD))) {
					fn();
				}
			}

		
/* Cookies
----------------------------------------------- */
	/* -----------[ Set ]----------- */
		LiCi.setCookie = function (name,value) {
			var valueEscaped = escape(value); 
			var expiresDate = new Date(); 
			expiresDate.setTime(expiresDate.getTime() + 365 * 24 * 60 * 60 * 1000);
			var expires = expiresDate.toGMTString(); 
			var newCookie = name + "=" + valueEscaped + "; path=/; expires=" + expires; 
			if (valueEscaped.length <= 4000) document.cookie = newCookie + ";";			
		};
	/* -----------[ Get ]----------- */	
		LiCi.getCookie = function (name) {
			var prefix = name + "="; 
			var cookieStartIndex = document.cookie.indexOf(prefix); 
			if (cookieStartIndex == -1) return null; 
			var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex + prefix.length); 
			if (cookieEndIndex == -1) cookieEndIndex = document.cookie.length; 
			return unescape(document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex));
		};

		
/* Strings
----------------------------------------------- */
		LiCi.Strings = {}; 
		/* -----------[ Get url parametr value ]----------- */
			LiCi.Strings.urlparse = function (url,param) {
				var param = param.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
				var regexS = "[\\?&]"+param+"=([^&#]*)";
				var regex = new RegExp(regexS);
				var results = regex.exec(url);
				if (results) {
					return results[1];
				}else{
				   return 0;
				}
			};
		/* -----------[ String RegExp ]----------- */
			LiCi.Strings.reg = function (srch,subj) {
				var re = new RegExp('\\b' + srch + '\\b');
				return re.test(subj);
			};
		/* -----------[ String replace ]----------- */
			LiCi.Strings.rpls = function (srch,rpls,subj) {
				return subj.split(srch).join(rpls);
			};		

		
/* Ajax
----------------------------------------------- */
		LiCi.ajax = function ajax( options ) {
		    options = {
		        type: options.type || "POST",
		        url: options.url || "",
		        timeout: options.timeout || 5000,
		        onComplete: options.onComplete || function(){},
		        onError: options.onError || function(){},
		        onSuccess: options.onSuccess || function(){},
		        data: options.data || ""
		    };

		    var xml = new XMLHttpRequest();
		    xml.open(options.type,options.url, true);
		    var timeoutLength = options.timeout;
		    var requestDone = false;

		    setTimeout(function(){
		         requestDone = true;
		    }, timeoutLength);

		    xml.onreadystatechange = function(){
		        if ( xml.readyState == 4 && !requestDone ) {
		            if ( httpSuccess( xml ) ) {
		                options.onSuccess( httpData( xml, options.type ) );
		            } else {
		                options.onError();
		            }
		            options.onComplete();
		            xml = null;
		        }
		    };

		    xml.send();

		    function httpSuccess(r) {
		        try {
		            return !r.status && location.protocol == "file:" ||
		                ( r.status >= 200 && r.status < 300 ) ||
		                r.status == 304 ||
		                navigator.userAgent.indexOf("Safari") >= 0 && typeof r.status == "undefined";
		        } catch(e){}

		        return false;
		    }

		    function httpData(r,type) {
		        var ct = r.getResponseHeader("content-type");
		        var data = !type && ct && ct.indexOf("xml") >= 0;
		        data = type == "xml" || data ? r.responseXML : r.responseText;
		        if ( type == "script" )
		            eval.call( window, data );
		        return data;
		    }

		};
		
		
/* Notify area
----------------------------------------------- */ 		
	LiCi.Notify = {
		clName : 'lici-notify',
		idName : 'lici-notify'
	};
	LiCi.Notify.types = {
		waitText : 'Ожидайте...',
		waitClass : LiCi.Notify.clName+'_mess_Wait',
		trueText : 'Успешно!',
		trueClass : LiCi.Notify.clName+'_mess_True',
		falseText : 'Ошибка!',
		falseClass : LiCi.Notify.clName+'_mess_False',		
		insert : function (type,string) {
			if (type=='wait' && string=='class') {
				return this.waitClass;
			}
			if (type=='wait' && string=='text') {
				return this.waitText;
			}
			if (type=='true' && string=='class') {
				return this.trueClass;
			}
			if (type=='true' && string=='text') {
				return this.trueText;
			}
			if (type=='false' && string=='class') {
				return this.falseClass;
			}
			if (type=='false' && string=='text') {
				return this.falseText;
			}			
		}
	};
	LiCi.Notify.show = function (type,mess) {
		LI.notify.popup({ text : mess, type : type, time_show : 3 });
		/*
		var process = document.createElement('div');
		process.className = this.clName;
		process.id = this.idName;
		document.getElementsByTagName('body')[0].appendChild(process);
		process.innerHTML = '<div class="'+this.clName+'_mess '+this.types.insert(type,'class')+'"><em></em><p> '+mess+'</p></div>';
		*/
	};
	LiCi.Notify.kill = function (delay) {
		/*
		setTimeout("LiCi.$Node.Del(LiCi.$(LiCi.Notify.idName))",delay);
		*/
	};