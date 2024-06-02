document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', function(event) {
        event.preventDefault();
        
        tabs.forEach(tab => tab.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
  
        tab.classList.add('active');
        document.querySelector(`#${tab.dataset.tab}`).classList.add('active');
      });
    });
  });
  