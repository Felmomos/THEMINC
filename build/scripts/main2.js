const testimonials = [
    {
        name: "Belva Smith",
        position: "Condo Board President    ",
        text: "I have worked with their managing broker, Mr. Samuel Lewis, for about a year now and it has been a great experience. It is very rare that we find business associates that truly care about people and will go out of their way to help people. This is what I found in this management firm."
    },
    {
        name: "​​Park Newberry",
        position: "Board of Managers",
        text: "We are extremely satisfied with the knowledge, level of competence, and extent of ​services that T. H. E. Management, Inc. has and continues to provide us. We recommend their services to any Association that is in need of competent, hands on services."
    }
];

let currentTestimonial = 0;

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = menuToggle ? menuToggle.querySelector('i') : null;

if (menuToggle && mobileMenu && menuIcon) {

    const toggleMenu = () => {
        const isMenuOpen = !mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden');

        if (isMenuOpen) {
            menuIcon.classList.remove('ri-close-line');
            menuIcon.classList.add('ri-menu-line');
            menuToggle.setAttribute('aria-expanded', 'false');
        } else {
            menuIcon.classList.remove('ri-menu-line');
            menuIcon.classList.add('ri-close-line');
            menuToggle.setAttribute('aria-expanded', 'true');
        }
    };

    menuToggle.addEventListener('click', toggleMenu);

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            const isMenuOpen = !mobileMenu.classList.contains('hidden');
            if (isMenuOpen && window.innerWidth < 768) {
                toggleMenu();
            }
        });
    });
} else {
    console.warn("Hamburger menu elements not found."); // Warn if elements are missing
}
function changeTestimonial(index) {
    const container = document.querySelector('.testimonial-container');
    const testimonial = testimonials[index];
    
    const testimonialHTML = `
        <div class="testimonial-slide active">
            <div class="bg-white p-8 rounded-lg shadow-sm max-w-3xl mx-auto">
                <div class="flex items-center mb-6">
                    <div class="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                        <i class="ri-user-line text-2xl text-gray-600"></i>
                    </div>
                    <div>
                        <h4 class="font-bold">${testimonial.name}</h4>
                        <p class="text-gray-600">${testimonial.position}</p>
                    </div>
                </div>
                <p class="text-gray-700 italic">"${testimonial.text}"</p>
            </div>
        </div>
    `;
    
    container.innerHTML = testimonialHTML;
    
    const dots = document.querySelectorAll('.flex.justify-center button');
    dots.forEach((dot, i) => {
        dot.className = `w-3 h-3 rounded-full ${i === index ? 'bg-primary' : 'bg-gray-300'}`;
    });
    
    currentTestimonial = index;
}

function openContactModal() {
    document.getElementById('contactModal').classList.add('active');
}

function closeContactModal() {
    document.getElementById('contactModal').classList.remove('active');
}



document.getElementById('modalContactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('modalName');
    const email = document.getElementById('modalEmail');
    const phone = document.getElementById('modalPhone');
    const details = document.getElementById('modalDetails');
    const message = document.getElementById('modalMessage');

    name.value = "";
    email.value = "";
    phone.value = "";
    details.value = "";
    message.value = "";

    
    // Handle modal form submission
    closeContactModal();
    window.alert("Message sent successfully!");
});