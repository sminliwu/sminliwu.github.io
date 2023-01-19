console.log("console output");

let codeFile = document.getElementById("code").contentWindow.document.body.childNodes[0].innerHTML;
console.log(codeFile);

var myCodeMirror = CodeMirror(document.body, {
  value: codeFile,
  mode:  "javascript",
  lineNumbers: true,
  smartIndent: true,
});