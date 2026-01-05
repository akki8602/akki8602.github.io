// Expand/collapse for project research narratives
document.querySelectorAll('.narrative-toggle').forEach(function(toggle) {
  toggle.addEventListener('click', function() {
    var narrative = this.nextElementSibling;
    if (narrative) {
      narrative.style.display = (narrative.style.display === 'block') ? 'none' : 'block';
    }
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
  link.addEventListener('click', function(e) {
    var targetId = this.getAttribute('href').slice(1);
    var target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
