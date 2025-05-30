document.addEventListener("DOMContentLoaded", function() {
  const scrollingContent = document.getElementById("scrolling-content");
  const container = document.getElementById("credits-container");
  const restartBtn = document.getElementById("restart-btn");
  const backBtn = document.getElementById("back-btn");

  function updateScrollDistance() {
    const containerHeight = container.offsetHeight;
    const contentHeight = scrollingContent.offsetHeight;
    const distance = contentHeight > containerHeight ? contentHeight - containerHeight : 0;
    scrollingContent.style.setProperty('--scroll-distance', distance + 'px');
  }

  window.addEventListener("load", updateScrollDistance);
  updateScrollDistance();

  function resetCredits() {
    scrollingContent.style.animation = "none";
    void scrollingContent.offsetWidth;
    updateScrollDistance();
    scrollingContent.style.animation = "scrollCredits 70s linear forwards";
  }

  restartBtn.addEventListener("click", resetCredits);
  
  backBtn.addEventListener("click", function() {
    // little, add o link para voltar para a tela inical aqui, esse é o botão de voltar.
    console.log("Botão Voltar clicado");
  });

  window.addEventListener("resize", updateScrollDistance);
});