function showSection(id) {
  const sections = document.querySelectorAll('.guide-section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  const activeSection = document.getElementById(id);
  if (activeSection) {
    activeSection.classList.add('active');
  }
}
