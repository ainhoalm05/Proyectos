$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var messageBox = $(".hidden-message-box");

    envelope.click(function() {
        openEnvelope();
    });

    btn_open.click(function() {
        openEnvelope();
    });

    btn_reset.click(function() {
        closeEnvelope();
    });

    // Revelar mensaje oculto
    messageBox.click(function() {
        $(this).addClass("clicked");
    });

    function openEnvelope() {
        envelope.addClass("open").removeClass("close");
    }

    function closeEnvelope() {
        envelope.addClass("close").removeClass("open");
    }
});
