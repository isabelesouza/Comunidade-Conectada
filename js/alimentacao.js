document.addEventListener("DOMContentLoaded", function() {
  const tabLinks = document.querySelectorAll(".tab-link");
  const tabContents = document.querySelectorAll(".tab-content");

  tabLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const tab = this.getAttribute("data-tab");

      tabLinks.forEach(link => link.classList.remove("active"));
      tabContents.forEach(content => content.classList.remove("active"));

      this.classList.add("active");
      document.getElementById(tab).classList.add("active");
    });
  });

  // Set default tab
  document.querySelector(".tab-link[data-tab='doacoes']").classList.add("active");
  document.getElementById("doacoes").classList.add("active");
});
