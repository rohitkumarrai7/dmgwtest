// Toggle the navigation menu for small screens
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Add hover effects for buttons
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = '#0066cc'; // Hover color
        button.style.color = '#fff';
    });

    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = ''; // Reset to default
        button.style.color = '';
    });
});

// Dynamic experience count (based on your resume)
const experienceElement = document.querySelector('.experience-box h3');
let experienceCount = 0;
const targetExperience = 3; // Your years of experience

const incrementExperience = setInterval(() => {
    if (experienceCount < targetExperience) {
        experienceCount++;
        experienceElement.textContent = experienceCount;
    } else {
        clearInterval(incrementExperience);
    }
}, 500); // Adjust speed of animation

// Display a message on "Discover" button click
const discoverButton = document.querySelector('.discover-btn');
discoverButton.addEventListener('click', () => {
    alert('Discover my skills, projects, and passion for web development!');
});

// Add an interactive stat counter
const statElements = document.querySelectorAll('.stat-item h2');
const statValues = [89, 130, 78]; // Update these values if needed

statElements.forEach((element, index) => {
    let count = 0;
    const target = statValues[index];
    const increment = setInterval(() => {
        if (count < target) {
            count++;
            element.textContent = count;
        } else {
            clearInterval(increment);
        }
    }, 50); // Adjust animation speed
});

// Update footer year dynamically
const footer = document.querySelector('footer p');
const currentYear = new Date().getFullYear();
footer.textContent = `DMGW © ${currentYear}. All rights reserved.`;
