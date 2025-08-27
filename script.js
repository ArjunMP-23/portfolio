// Theme toggle logic (icon switch only)
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('theme-toggle-checkbox');
    const label = document.getElementById('mode-label');
    const body = document.body;

    // Load saved mode
    if (localStorage.getItem('theme') === 'dark') {
        toggle.checked = true;
        body.classList.add('dark-mode');
        label.textContent = 'Dark Mode';
    } else {
        toggle.checked = false;
        body.classList.remove('dark-mode');
        label.textContent = 'Light Mode';
    }

    toggle.addEventListener('change', function() {
        if (toggle.checked) {
            body.classList.add('dark-mode');
            label.textContent = 'Dark Mode';
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            label.textContent = 'Light Mode';
            localStorage.setItem('theme', 'light');
        }
    });
});
// Navbar section navigation logic
const navLinks = document.querySelectorAll('#navbar a');
const sections = document.querySelectorAll('.page-section');

function showSection(sectionId) {
    sections.forEach(sec => {
        sec.style.display = sec.id === sectionId ? '' : 'none';
    });
    navLinks.forEach(link => {
        if (link.dataset.section === sectionId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        showSection(this.dataset.section);
    });
});

// Show summary section by default
showSection('summary');
// Theme toggle logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Animate sections on load
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('section').forEach((section) => {
        section.style.animationPlayState = 'running';
    });
});

// Load theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
