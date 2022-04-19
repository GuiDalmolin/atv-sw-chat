/* document.getElementById('meuform').addEventListener("submit",function(event){
    event.preventDefault();
    addMsg($('#vmsg').val());
}) */
    
$(document).ready(function () {
    document.getElementById('vmsg').addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            document.getElementById("mybtn").click();
        }
    })
});

function addMsg(e) {
    $('#conteudo').append(`<div class="linha voce">
                                <div class="label">Você</div>
                                <div class="mensagem voce-msg">${e.value}</div>
                            </div>`);

    e.value = "";
}
