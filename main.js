
// for-animation-when-page-make-reload
 window.addEventListener("load", () => {
    document.querySelectorAll(".animate").forEach(el => {
      el.style.animationPlayState = "running";
    });
  });
            //to change text
  var typed = new Typed('#typed-text', {
    strings: ['Front-End Developer', 'UI/UX Designer', 'markter specialist'],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
  });

// skillllllllllllllllllls

  function showTab(tabId) {
  const contents = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-btn');

  contents.forEach(content => content.classList.remove('active'));
  buttons.forEach(btn => btn.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  event.target.classList.add('active');
}

function openCertModal(imgSrc, title, provider, date) {
    document.getElementById('certTitle').textContent = title;
    document.getElementById('certProvider').textContent = provider;
    document.getElementById('certDate').textContent = date;
    document.getElementById('certFullImage').src = imgSrc;
    document.getElementById('certModal').style.display = 'flex';
  }

  function closeCertModal() {
    document.getElementById('certModal').style.display = 'none';
  }

  function openCertModal(imgSrc, title, provider, date) {
  console.log("Opening modal with image:", imgSrc); // ← هتظهر في Console
  document.getElementById('certTitle').textContent = title;
  document.getElementById('certProvider').textContent = provider;
  document.getElementById('certDate').textContent = date;
  document.getElementById('certFullImage').src = imgSrc;
  document.getElementById('certModal').style.display = 'block';
}


// open-projects
function openProject(url) {
    window.open(url, '_blank');
  }

  // Counter animation
const counters = document.querySelectorAll('.counter');

const animateCounters = () => {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const speed = 200; // كل ما الرقم أقل كانت السرعة أسرع
    const increment = target / speed;

    const updateCount = () => {
      const current = +counter.innerText;
      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
};

// Animate only when visible
const statsSection = document.getElementById('statistics');
let statsAnimated = false;

window.addEventListener('scroll', () => {
  const sectionTop = statsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight - 100 && !statsAnimated) {
    animateCounters();
    statsAnimated = true;
  }
});

//Contact ang get in toch and leave comment
function showThanks(type) {
  if (type === 'comment') {
    alert("Thank you for your comment!");
  } else if (type === 'booking') {
    alert("Thank you! Your booking request has been submitted.");
  }
  return false; // prevent actual form submission
}

// to apear year auto

 document.getElementById("year").textContent = new Date().getFullYear();

 //make all page fade in
 const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.5
    });
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    //for menue in mobile edition
    function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("active");
}


document.getElementById('commentForm').addEventListener('submit', async function (e) {
  e.preventDefault(); // تمنع الريلود

  const name = this.name.value;
  const comment = this.comment.value;

  try {
    const res = await fetch('http://localhost:3000/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, message: comment })
    });

    if (res.ok) {
      document.getElementById('commentSuccess').style.display = 'block';
      this.reset(); // يفرّغ الفورم
    } else {
      alert('❌ Failed to send comment.');
    }
  } catch (err) {
    console.error('Error:', err);
    alert('❌ Server error!');
  }
});


document.getElementById('bookingForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const data = {
    name: this.name.value,
    email: this.email.value,
    service: this.service.value,
    details: this.details.value
  };

  try {
    const res = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      document.getElementById('bookingSuccess').style.display = 'block';
      this.reset();
    } else {
      alert('❌ Booking failed.');
    }
  } catch (err) {
    console.error('Error:', err);
    alert('❌ Server error!');
  }
});

