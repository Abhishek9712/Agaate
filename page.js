// Import data (using ES6 modules - will need type="module" in script tag)
import { stats } from './data/stats.js';
import { brands } from './data/brands.js';

// Constants
const TABS = {
  retail: {
    title: "Retail and Distribution",
    image: "./public/images/farm-retail.jpg",
    heading: "Retail & Distribution Network",
    points: [
      "Direct farmer connect",
      "Localized distribution partners",
      "Affordable availability",
      "Centralized order management",
      "Last-mile delivery support",
      "Digital sales & booking channels",
      "After-sales service and guidance"
    ],
    sub: "Connecting farms to marketplaces",
  },
  production: {
    title: "Production & R&D",
    image: "./public/images/smart-nursery.jpg",
    heading: "17-Acre Smart Nursery",
    points: [
      "Seedless farming environment",
      "Controlled conditions",
      "In-house production & trials",
      "AI-driven climate monitoring",
      "Integrated pest & disease management",
      "Standardized nursery protocols",
      "Quality testing & traceability"
    ],
    sub: "Vertically integrated production hub",
  }
};

const SLIDES = [
  {
    label: "Daily Monitoring",
    image: "./public/images/nursery-1.jpg"
  },
  {
    label: "Precision Irrigation",
    image: "./public/images/nursery-2.jpg"
  },
  {
    label: "Climate Control",
    image: "./public/images/nursery-3.jpg"
  }
];

const products = [
  { name: "AgriBegri Combo Pack", image: "./public/images/p1.png" },
  { name: "Farmson Hybrid Sunflower Seeds", image: "./public/images/p2.png" },
  { name: "Plant", image: "./public/images/p3.png" },
  { name: "Decide Ncs Spring Ever", image: "./public/images/p4.png" },
  { name: "VC-100 Combo Green", image: "./public/images/p5.png" },
  { name: "Geolife No-Virus Chili", image: "./public/images/p6.png" },
  { name: "Organeem", image: "./public/images/p7.png" },
  { name: "Organeem", image: "./public/images/p7.png" },
];

const mallBanners = [
  "./public/images/mall1.jpg",
  "./public/images/mall2.jpg",
  "./public/images/mall3.jpg",
];

const steps = [
  {
    number: 1,
    title: "Research & Development",
    text: "Advanced genetic research and tissue culture to develop seedless varieties."
  },
  {
    number: 2,
    title: "Cultivation",
    text: "Controlled environment agriculture with optimal conditions for growth."
  },
  {
    number: 3,
    title: "Quality Testing",
    text: "Rigorous testing for yield, taste, and nutritional value."
  },
  {
    number: 4,
    title: "Distribution",
    text: "Efficient supply chain to deliver fresh produce to market."
  }
];

const farmers = [
  {
    role: "Commercial Farmer",
    text: `"The quality of their seeds is unmatched. We've been using AgroSeed products for 5 years and have seen consistent, reliable results every season."`
  },
  {
    role: "Commercial Farmer",
    text: `"The quality of their seeds is unmatched. We've been using AgroSeed products for 5 years and have seen consistent, reliable results every season."`
  },
  {
    role: "Commercial Farmer",
    text: `"The quality of their seeds is unmatched. We've been using AgroSeed products for 5 years and have seen consistent, reliable results every season."`
  }
];

const investors = [
  {
    role: "Investor",
    text: `"Agaate has built a sustainable, scalable model in agriculture. Strong fundamentals, strong execution."`
  },
  {
    role: "Investor",
    text: `"Impressive technology adoption with real on-ground impact for farmers."`
  },
  {
    role: "Investor",
    text: `"Clear roadmap, strong leadership, and long-term vision."`
  }
];

const team = [
  { img: "./public/images/ankit.jpg", name: "Ankit Rawat", role: "Founder & CEO" },
  { img: "./public/images/kuldeep.jpg", name: "Kuldeep Singh Singhar", role: "Head of Operations (Farm + Crop Sales)" },
  { img: "./public/images/abhay.jpg", name: "Abhay Ranjan", role: "Chief of Staff (Nursery + Mall Sales)" },
  { img: "./public/images/vijay.jpg", name: "Vijay Singh", role: "Farmer Relationships / Crop Sales" },
  { img: "./public/images/chanchala.jpg", name: "Chanchala Shukla", role: "Agronomist" },
  { img: "./public/images/alok.jpg", name: "Alok", role: "Nursery Owner" },
  { img: "./public/images/chandramani.jpg", name: "Chandramani", role: "Mall Sales" },
  { img: "./public/images/pradeep.jpg", name: "Pradeep", role: "Mall Sales" },
  { img: "./public/images/ravi.png", name: "Ravi Kumar", role: "Data & Strategy" },
  // Note: mishra.jpg and ujjwal.jpg may not exist, so excluding them
];

// State
let activeTab = "buyer";
let ecosystemTab = "production";
let slideIndex = 0;
let mallIndex = 0;
let testimonialTab = "farmers";

// Initialize page - wait for DOM and ensure elements exist
function initializePage() {
  // Check if required elements exist
  const statsContainer = document.getElementById("stats-container");
  const brandsContainer = document.getElementById("brands-container");
  
  if (!statsContainer || !brandsContainer) {
    // Retry after a short delay
    setTimeout(initializePage, 100);
    return;
  }
  
  renderStats();
  renderBrands();
  renderProducts();
  renderSteps();
  renderTestimonials();
  renderTeam();
  setupBrandTabs();
  setupEcosystemTabs();
  setupTestimonialTabs();
  setupNurseryCarousel();
  setupMallCarousel();
  setupTeamMarquee();
}

// Try to initialize immediately if DOM is ready, otherwise wait
if (document.readyState === 'loading') {
  document.addEventListener("DOMContentLoaded", initializePage);
} else {
  // DOM already loaded, but wait a bit for dynamic content
  setTimeout(initializePage, 200);
}

// Render Stats
function renderStats() {
  const container = document.getElementById("stats-container");
  if (!container) return;
  
  container.innerHTML = stats.map(stat => `
    <div class="text-center flex-1">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400">
        ${stat.metric}
      </h2>
      <p class="mt-2 text-xs sm:text-sm md:text-base opacity-80 text-gray-500">
        ${stat.description}
      </p>
    </div>
  `).join("");
}

// Render Brands
function renderBrands() {
  const container = document.getElementById("brands-container");
  if (!container) return;
  
  const currentBrands = brands[activeTab] || [];
  
  if (currentBrands.length === 0) {
    container.innerHTML = '<div class="col-span-full text-center text-gray-500 py-8">No brands available for this category.</div>';
    return;
  }
  
  container.innerHTML = currentBrands.map(logo => `
    <div class="relative w-28 h-14 sm:w-32 sm:h-16 md:w-36 md:h-18 lg:w-40 lg:h-20 grayscale hover:grayscale-0 transition duration-300">
      <img src="${logo}" alt="Brand logo" class="w-full h-full object-contain" />
    </div>
  `).join("");
}

// Setup Brand Tabs
function setupBrandTabs() {
  const tabButtons = document.querySelectorAll(".brand-tab");
  
  if (!tabButtons.length) {
    console.warn("Brand tab buttons not found");
    return;
  }
  
  // Set initial active state
  tabButtons.forEach(btn => {
    const tabKey = btn.getAttribute("data-tab");
    if (tabKey === activeTab) {
      btn.classList.remove("bg-white", "text-green-700", "border");
      btn.classList.add("bg-yellow-400", "text-white");
    } else {
      btn.classList.remove("bg-yellow-400", "text-white");
      btn.classList.add("bg-white", "text-green-700", "border");
    }
  });
  
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      activeTab = btn.getAttribute("data-tab");
      
      // Update active state
      tabButtons.forEach(b => {
        b.classList.remove("bg-yellow-400", "text-white");
        b.classList.add("bg-white", "text-green-700", "border");
      });
      btn.classList.remove("bg-white", "text-green-700", "border");
      btn.classList.add("bg-yellow-400", "text-white");
      
      renderBrands();
    });
  });
}

// Render Products
function renderProducts() {
  const container = document.getElementById("products-container");
  if (!container) return;
  
  container.innerHTML = products.map((p, i) => `
    <div class="bg-gray-100 rounded-2xl p-10 md:p-9 shadow flex flex-col items-center text-center">
      <div class="relative w-36 h-36 md:w-30 md:h-30 lg:w-40 lg:h-40 mb-4">
        <img src="${p.image}" alt="${p.name}" class="w-full h-full object-contain" />
      </div>
      <p class="text-sm font-medium">${p.name}</p>
    </div>
  `).join("");
}

// Render Steps
function renderSteps() {
  const container = document.getElementById("steps-container");
  if (!container) return;
  
  container.innerHTML = steps.map(s => `
    <div class="bg-white rounded-xl px-5 py-10 shadow flex flex-col gap-2 text-center">
      <div class="mx-auto flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold">
        ${s.number}
      </div>
      <h3 class="font-semibold text-sm md:text-base">${s.title}</h3>
      <p class="text-xs md:text-sm text-gray-600">${s.text}</p>
    </div>
  `).join("");
}

// Render Testimonials
function renderTestimonials() {
  const container = document.getElementById("testimonials-container");
  if (!container) return;
  
  const list = testimonialTab === "farmers" ? farmers : investors;
  container.innerHTML = list.map(item => `
    <div class="bg-white rounded-2xl shadow p-6 text-left">
      <p class="font-semibold mb-2">${item.role}</p>
      <p class="text-gray-600 mb-4 text-sm leading-relaxed">${item.text}</p>
      <p class="text-yellow-500 text-lg">★★★★★</p>
    </div>
  `).join("");
}

// Setup Testimonial Tabs
function setupTestimonialTabs() {
  const tabButtons = document.querySelectorAll(".testimonial-tab");
  
  if (!tabButtons.length) {
    console.warn("Testimonial tab buttons not found");
    return;
  }
  
  // Set initial active state
  tabButtons.forEach(btn => {
    const tabKey = btn.getAttribute("data-testimonial-tab");
    if (tabKey === testimonialTab) {
      btn.classList.remove("bg-white", "border");
      btn.classList.add("bg-green-700", "text-white");
    } else {
      btn.classList.remove("bg-green-700", "text-white");
      btn.classList.add("bg-white", "border");
    }
  });
  
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      testimonialTab = btn.getAttribute("data-testimonial-tab");
      
      // Update active state
      tabButtons.forEach(b => {
        b.classList.remove("bg-green-700", "text-white");
        b.classList.add("bg-white", "border");
      });
      btn.classList.remove("bg-white", "border");
      btn.classList.add("bg-green-700", "text-white");
      
      renderTestimonials();
    });
  });
}

// Setup Ecosystem Tabs
function setupEcosystemTabs() {
  const tabButtons = document.querySelectorAll(".ecosystem-tab");
  const imageEl = document.getElementById("ecosystem-image");
  const headingEl = document.getElementById("ecosystem-heading");
  const pointsEl = document.getElementById("ecosystem-points");
  const subEl = document.getElementById("ecosystem-sub");
  
  if (!tabButtons.length || !imageEl || !headingEl || !pointsEl || !subEl) {
    console.warn("Ecosystem tab elements not found");
    return;
  }
  
  function updateEcosystemContent() {
    const tab = TABS[ecosystemTab];
    if (!tab) {
      console.warn(`Tab ${ecosystemTab} not found`);
      return;
    }
    
    if (imageEl) imageEl.src = tab.image;
    if (headingEl) headingEl.textContent = tab.heading;
    if (pointsEl) {
      pointsEl.innerHTML = tab.points.map(p => `<li>${p}</li>`).join("");
    }
    if (subEl) subEl.textContent = tab.sub;
  }
  
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      ecosystemTab = btn.getAttribute("data-ecosystem-tab");
      
      // Update active state
      tabButtons.forEach(b => {
        b.classList.remove("bg-yellow-400", "text-white");
        b.classList.add("bg-white", "border", "text-green-700");
      });
      btn.classList.remove("bg-white", "border", "text-green-700");
      btn.classList.add("bg-yellow-400", "text-white");
      
      updateEcosystemContent();
    });
  });
  
  // Initialize with default content
  updateEcosystemContent();
}

// Setup Nursery Carousel
function setupNurseryCarousel() {
  const slideEl = document.getElementById("nursery-slide");
  const labelEl = document.getElementById("nursery-label");
  const prevBtn = document.getElementById("nursery-prev");
  const nextBtn = document.getElementById("nursery-next");
  
  function updateSlide() {
    const slide = SLIDES[slideIndex];
    if (slideEl) slideEl.src = slide.image;
    if (labelEl) labelEl.textContent = slide.label;
  }
  
  function next() {
    slideIndex = (slideIndex + 1) % SLIDES.length;
    updateSlide();
  }
  
  function prev() {
    slideIndex = (slideIndex - 1 + SLIDES.length) % SLIDES.length;
    updateSlide();
  }
  
  if (prevBtn) prevBtn.addEventListener("click", prev);
  if (nextBtn) nextBtn.addEventListener("click", next);
  
  // Auto-advance
  setInterval(next, 2500);
  updateSlide();
}

// Setup Mall Carousel
function setupMallCarousel() {
  const bannerEl = document.getElementById("mall-banner");
  
  function updateMallBanner() {
    if (bannerEl) {
      bannerEl.src = mallBanners[mallIndex];
    }
  }
  
  // Auto-advance
  setInterval(() => {
    mallIndex = (mallIndex + 1) % mallBanners.length;
    updateMallBanner();
  }, 2500);
  
  updateMallBanner();
}

// Render Team
function renderTeam() {
  const container = document.getElementById("team-marquee");
  if (!container) return;
  
  // Duplicate team array for seamless loop
  const duplicatedTeam = [...team, ...team];
  
  container.innerHTML = duplicatedTeam.map((p, i) => `
    <div class="flex flex-col items-center">
      <div class="group w-28 h-40 sm:w-32 sm:h-44 md:w-36 md:h-52 lg:w-40 lg:h-56 xl:w-44 xl:h-60 2xl:w-48 2xl:h-64" style="perspective: 1000px;">
        <div class="team-card relative w-full h-full rounded-2xl shadow" data-index="${i}">
          <div class="team-front absolute inset-0 rounded-2xl overflow-hidden">
            <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover" />
          </div>
          <div class="team-back absolute inset-0 rounded-2xl flex flex-col items-center justify-center bg-green-700 text-white text-center px-3">
            <p class="font-bold text-xs sm:text-sm md:text-base lg:text-lg">${p.name || "Team Member"}</p>
            <p class="opacity-90 text-[10px] sm:text-xs md:text-sm lg:text-base">${p.role}</p>
          </div>
        </div>
      </div>
    </div>
  `).join("");
  
  // Add hover effect for 3D flip
  container.querySelectorAll(".team-card").forEach(card => {
    card.style.transformStyle = "preserve-3d";
    card.addEventListener("mouseenter", () => {
      card.style.transform = "rotateY(180deg)";
      card.style.transition = "transform 0.6s ease-in-out";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateY(0deg)";
    });
  });
}

// Setup Team Marquee
function setupTeamMarquee() {
  const container = document.getElementById("team-container");
  const marquee = document.getElementById("team-marquee");
  if (!container || !marquee) return;
  
  let x = 0;
  let animationId;
  let isPaused = false;
  
  function animate() {
    if (!isPaused) {
      x -= 1;
      // Reset when scrolled past the duplicate point
      const marqueeWidth = marquee.scrollWidth / 2;
      if (Math.abs(x) >= marqueeWidth) {
        x = 0;
      }
      marquee.style.transform = `translateX(${x}px)`;
    }
    animationId = requestAnimationFrame(animate);
  }
  
  container.addEventListener("mouseenter", () => {
    isPaused = true;
  });
  
  container.addEventListener("mouseleave", () => {
    isPaused = false;
  });
  
  // Start animation after a short delay to ensure DOM is ready
  setTimeout(() => {
    animate();
  }, 100);
}

