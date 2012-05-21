var request=null;
var queryString;   //will hold the POSTed data
var hostname=window.location.host;
var demoCode = new Array();
demoCode[0]="";
demoCode[1]="print 'Hello from Python!'"
demoCode[2]="for each in range(1,100):\n    print 'The number is', each"
function putDemo(){
      //alert("put");
      var codeIndex=document.sciForm.demo.options[document.sciForm.demo.selectedIndex].value;
      document.sciForm.scicode.value=demoCode[codeIndex];
      document.sciForm.graphicsmode.checked=False;
}
function clearForm(){
	document.sciForm.sciresult.value="";
	document.sciForm.scicode.value="";
        document.getElementById("gconsole");
//.src="scilabp.png";
        request=null;
        queryString=""; 
}
function executeCode(){
      //alert("Came here");
    document.getElementById('gconsole').onload=hideMsg;
    document.getElementById('message').innerHTML='<center>Processing...<br><img src="loading.gif"><center>';
    document.getElementById('message').style.visibility = 'visible'; 
    setQueryString();
    var url="http://"+hostname+"/cgi-bin/python.cgi";
    httpRequest("POST",url,true);
}
//event handler for XMLHttpRequest
function handleResponse(){
	if(request.readyState == 4){
		if(request.status == 200){
			window.status="Done.";
//alert(request.responseText);
results = eval('(' + request.responseText + ')'); 
//alert(results.output);

result="Done.";
result=results.output;
result=result.replace(/exit();/g,"");
error=results.error;
image=results.image;
if (error){
        document.getElementById('message').style.visibility = 'hidden';
	alert("Error : "+error);
        document.sciForm.sciresult.value=result+"\nSyntax Error : "+error;
        return;
}
if (image){
        //document.getElementById("gconsole").src="scilabp.png";
	 document.getElementById("gconsole").src=results.imagefile;
	 window.status="Rendering Graphics...";
	 //document.getElementById("gwindow").style.visibility = 'visible';
	 //document.getElementById("gconsole").src=results.imagefile;
         //document.getElementById("gcontent").style.width = 596;
         //document.getElementById("gcontent").style.height = 397;
         //document.getElementById("gwindow").style.width = 616;
         //document.getElementById("gwindow").style.height = 440;
         //document.getElementById("gwindow").style.left= "30%";
         //document.getElementById("gwindow").style.top= "5%";
         //document.getElementById("gmaxbutton").src = "min.gif";
         //document.getElementById("gmaxbutton").title = "Minimize";
	 //document.getElementById("gwindow").style.visibility = 'visible';
}
else{
	document.sciForm.sciresult.value=result;
	document.getElementById('message').style.visibility = 'hidden';
}
		}else {
	            alert("A problem occurred with communicating between the XMLHttpRequest object and the server program:"+request.statusText+" Code: "+request.status);
document.getElementById('message').style.visibility = 'hidden'; //Hide the progressbar gif
	      	}
	}//end outer if
}


/* Initialize a Request object that is already constructed */
function initReq(reqType,url,bool){
    /* Specify the function that will handle the HTTP response */
    request.onreadystatechange=handleResponse;
    request.open(reqType,url,bool);
    request.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
    /* Only works in Mozilla-based browsers */
    //request.overrideMimeType("text/XML");
    request.send(queryString);
}

/* Wrapper function for constructing a Request object.
 Parameters:
  reqType: The HTTP request type such as GET or POST.
  url: The URL of the server program.
  asynch: Whether to send the request asynchronously or not. */
function httpRequest(reqType,url,asynch){
    //Mozilla-based browsers
    if(window.XMLHttpRequest){
        request = new XMLHttpRequest();
    } else if (window.ActiveXObject){
        request=new ActiveXObject("Msxml2.XMLHTTP");
        if (! request){
            request=new ActiveXObject("Microsoft.XMLHTTP");
        }
     }
    //the request could still be null if neither ActiveXObject
    //initializations succeeded
    if(request){
       initReq(reqType,url,asynch);
    }  else {
        alert("Your browser does not permit the use of all "+
        "of this application's features!");}
}
function setQueryString(){
    queryString="";
    code=encodeURIComponent(document.sciForm.scicode.value);
    graphicsmode=document.sciForm.graphicsmode.checked ?document.sciForm.graphicsmode.value: 0; 
    queryString = "code="+code+"&graphicsmode="+graphicsmode;
//    alert(queryString);
}
function maxminimize(){
w= document.getElementById("gcontent").style.width;
if (w == "596px"){
        document.getElementById("gcontent").style.width = 0;
      	document.getElementById("gcontent").style.height = 0;
        document.getElementById("gwindow").style.width = 250;
        document.getElementById("gwindow").style.height = 20;
	document.getElementById("gwindow").style.left= "20%";
	document.getElementById("gwindow").style.top= "90%";
        document.getElementById("gmaxbutton").src = "restore.gif";
	document.getElementById("gmaxbutton").title = "Maximize";
}
else{
        document.getElementById("gcontent").style.width = 596;
      	document.getElementById("gcontent").style.height = 397;
        document.getElementById("gwindow").style.width = 616;
      	document.getElementById("gwindow").style.height = 440;
	document.getElementById("gwindow").style.left= "30%";
	document.getElementById("gwindow").style.top= "5%";
	document.getElementById("gmaxbutton").src = "min.gif";
	document.getElementById("gmaxbutton").title = "Minimize";
}
}
function closeit(){
        //document.getElementById("gcontent").style.width = 600;
      	//document.getElementById("gcontent").style.height = 300;
	document.getElementById("gwindow").style.visibility="hidden";
}
function showHelp(){
	helpwin.show();return false
     
}
function hideMsg() {
       var image=document.getElementById("gconsole");
       if(image.complete){
 		document.getElementById("gcontent").style.width = 596;
      		document.getElementById("gcontent").style.height = 397;
        	document.getElementById("gwindow").style.width = 616;
      		document.getElementById("gwindow").style.height = 440;
		document.getElementById("gwindow").style.left= "30%";
		document.getElementById("gwindow").style.top= "5%";
		document.getElementById("gmaxbutton").src = "min.gif";
		document.getElementById("gwindow").style.visibility = 'visible';
		document.getElementById('message').style.visibility = 'hidden';
		window.status="Done.";
	}else {
		setTimeout("hideMsg()", 250);
	}
}
function printImg(){
	src = document.getElementById("gconsole").src;
	//document.getElementById("iFrame1").src=src;
	//document.frames['iFrame1'].document.print(); 
	link = "about:blank";
	var pw = window.open(link, "_new");
	pw.document.open();
	pw.document.write(makepage(src));
	pw.document.close();
	//alert("Printing...");
}
function makepage(src){
  // We break the closing script tag in half to prevent
  // the HTML parser from seeing it as a part of
  // the *main* page.

  return "<html>\n" +
    "<head>\n" +
    "<title>W3 Scilab - NRCFOSS,India</title>\n" +
    "<script>\n" +
    "function step1() {\n" +
    "  setTimeout('step2()', 10);\n" +
    "}\n" +
    "function step2() {\n" +
    "  window.print();\n" +
    "  window.close();\n" +
    "}\n" +
    "</scr" + "ipt>\n" +
    "</head>\n" +
    "<body onLoad='step1()'>\n" +
    "<img src='" + src + "'/>\n" +
    "</body>\n" +
    "</html>\n";
}
