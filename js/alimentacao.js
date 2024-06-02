document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
  
    tabLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('data-tab');
  
        // Remove active class from all tabs and contents
        tabLinks.forEach(link => link.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
  
        // Add active class to clicked tab and corresponding content
        this.classList.add('active');
        document.getElementById(target).classList.add('active');
      });
    });
  
    // Activate the first tab by default
    tabLinks[0].classList.add('active');
    tabContents[0].classList.add('active');
  });
  