



document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.getElementById('scroll-button');
    const sectionHeading = document.querySelector('h2');

    scrollButton.addEventListener('click', function() {
        sectionHeading.scrollIntoView({ behavior: 'smooth' });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const polymorphicBox = document.getElementById('polymorphic-box');

    polymorphicBox.addEventListener('click', function() {
        alert('Why did u click that');
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.fade-in');

    function checkScroll() {
        sections.forEach(section => {
            const distanceFromTop = section.getBoundingClientRect().top;

            if (distanceFromTop - window.innerHeight < 0) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }

    document.addEventListener('scroll', checkScroll);
    checkScroll();
});

document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('typing-effect');
    const text = "Web Development | Java";
    let index = 0;

    function type() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust the typing speed here (in milliseconds)
        }
    }

    type();
});




document.addEventListener('DOMContentLoaded', function() {
            const video = document.getElementById('bg-video');

            window.addEventListener('scroll', function() {
                const scrollY = window.scrollY;
                const videoBottom = video.getBoundingClientRect().bottom;

                const opacity = 1 - Math.max(0, Math.min(1, scrollY / videoBottom));

                video.style.opacity = opacity.toFixed(2);
            });
        });

const text = "HEY THERE! I'm Udhaya Sankar M";
let charIndex = 0;

function type() {
    const element = document.getElementById("auto-typing");
    element.textContent += text.charAt(charIndex);
    charIndex++;
    if (charIndex < text.length) {
        setTimeout(type, 100);
    }
}

type();


let clickCount = 0;

function handleClick(e) {
    clickCount++;

    if (clickCount === 7) {
        window.open('rus.html', '_blank');
        clickCount = 0; // Reset click count
    }

    e.preventDefault(); // Prevent the default behavior of the link

    // Show toast message
    showToast();
}

function showToast() {
    const toast = document.getElementById('toast');
    toast.textContent = `Almost: ${clickCount}`;
    toast.style.visibility = 'visible';

    setTimeout(() => {
        toast.style.visibility = 'hidden';
    }, 2000); // Hide toast after 2 seconds
}
