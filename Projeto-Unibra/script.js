document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("pedidoModal");
  var span = document.getElementsByClassName("close")[0];
  var pedidoForm = document.getElementById("pedidoForm");
  var quantidadePizzasInput = document.getElementById("quantidadePizzas");
  var addPizzaButton = document.getElementById("addPizzaButton");
  var removePizzaButton = document.getElementById("removePizzaButton");

  addPizzaButton.onclick = function () {
    var quantidadeAtual = parseInt(quantidadePizzasInput.value);
    quantidadePizzasInput.value = quantidadeAtual + 1;
  };
  removePizzaButton.onclick = function () {
    var quantidadeAtual = parseInt(quantidadePizzasInput.value);
    if (quantidadeAtual > 1) {
      quantidadePizzasInput.value = quantidadeAtual - 1;
    }
  };
  document.querySelectorAll(".pedir").forEach((button) => {
    button.addEventListener("click", function () {
      var produto = this.closest(".info").querySelector("h3").innerText;
      modal.style.display = "block";
      document.getElementById("produto").value = produto;
    });
  });
  span.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  pedidoForm.onsubmit = function (event) {
    event.preventDefault();
    var quantidadePizzas = parseInt(quantidadePizzasInput.value);
    alert("Pedido de " + quantidadePizzas + " pizza(s) enviado com sucesso!");
    modal.style.display = "none";
    pedidoForm.reset();
  };
});
