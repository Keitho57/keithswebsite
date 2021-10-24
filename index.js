var contactBtn = $(".contact-btn");
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

function copy(id) {
    var copyText = $("#" + id);
    copyText.select();
    document.execCommand("copy");
  }
  

  