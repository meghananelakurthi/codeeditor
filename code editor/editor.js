function initialize(){
    var html=document.getElementById("htmleditor");
    var css=document.getElementById("csseditor");
    var js=document.getElementById("javascripteditor");
    var code=document.getElementById("code").contentWindow.document;
    document.body.onkeyup=function(){
        code.open();
        code.writeln(
            htmleditor.value+


           "<style>"+ csseditor.value+ "</style>"+



            "<script>"+javascripteditor.value+"</script>"
        )



        code.close();
    }
}
initialize();