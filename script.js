function sectionFocus(button, targetId) {
  document.querySelectorAll('button').forEach(btn => {
    btn.classList.remove('bg-indigo-600');
    btn.classList.remove('text-white');
    btn.classList.add('text-black')
    btn.classList.add('bg-white');

    btn.classList.remove('active');
  });

  button.classList.remove('bg-white');
  button.classList.remove('text-black');
  button.classList.add('bg-indigo-600');
  button.classList.add('text-white');

  button.classList.add('active');

  const targetSection = document.getElementById(targetId);
  document.querySelectorAll('article').forEach(section => {
    section.classList.add('hidden');
  });
  targetSection.classList.remove('hidden');
}

document.querySelectorAll('button').forEach(btn => {
  if (btn.classList.contains('active')) {
    btn.click();
  }
});