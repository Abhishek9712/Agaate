// Import data (using ES6 modules - will need type="module" in script tag)
import { stats } from './data/stats.js?v=1.0.0';
import { brands } from './data/brands.js?v=1.0.0';

const HERO_IMAGES = [
  "https://res.cloudinary.com/dsxfpu2tk/image/upload/v1768822300/AI_Generated_mcsxqt.png",
  "https://res.cloudinary.com/dsxfpu2tk/image/upload/v1768819282/3_un4rsz.png",
  "https://res.cloudinary.com/dsxfpu2tk/image/upload/v1768815470/Hero_Section_vq8xav.png"
];

const HERO_CONTENT = [
  {
    heading: `Seedless Farming <br />
      <span class="bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
        Higher Yield, Lower Risk
      </span>`,
    description:
      "Our bio-boosted nursery model ensures 90–98% germination, reduces seed waste, and improves farmer profitability.",
    primaryText: "Our Process",
    primaryLink: "#journey",
    secondaryText: "Know More",
    secondaryLink: "#about",
  },
  {
    heading: `Farmer-First Innovation <br />
      <span class="bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
        From Nursery to Market
      </span>`,
    description:
      "An end-to-end ecosystem empowering farmers with technology, training, inputs, and assured market access.",
    primaryText: "Kisan Mall",
    primaryLink: "#kisanmall",
    secondaryText: "Join Us",
    secondaryLink: "#contact",
  },
  {
    heading: `Natural Farming <br />
      <span class="bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
        Technology-Driven Agriculture
      </span>`,
    description:
      "We grow food the natural way — chemical-free, nutrient-rich, and sustainable. Combining traditional wisdom with modern seedless farming.",
    primaryText: "Explore",
    primaryLink: "#nursery",
    secondaryText: "Contact",
    secondaryLink: "#contact",
  },
];

// Constants
const TABS = {
  retail: {
    title: "Retail and Distribution",
    images: [
      "https://res.cloudinary.com/dsxfpu2tk/image/upload/v1768295923/farm-retail_wmbm90.png", 
      "https://res.cloudinary.com/dsxfpu2tk/image/upload/v1768295949/mall1_vfuhdi.png",
      "https://res.cloudinary.com/dsxfpu2tk/image/upload/v1768296166/retail_distribution_upznx9.jpg"
    ],
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
    images: [
      "https://res.cloudinary.com/dsxfpu2tk/image/upload/v1768296679/smart-nursery-1_h6lzqk.jpg",
      "https://res.cloudinary.com/dsxfpu2tk/image/upload/v1768296679/smart-nursery-2_xc0srg.jpg",
      "https://res.cloudinary.com/dsxfpu2tk/image/upload/v1768296680/smart-nursery-3_b7ltfd.jpg"
    ],
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
    image: "https://res.cloudinary.com/dsxfpu2tk/image/upload/v1768290473/nursery-1_g4bpff.jpg"
  },
  {
    label: "Precision Irrigation",
    image: "https://res.cloudinary.com/dsxfpu2tk/image/upload/v1768290546/nursery-2_zzpxux.jpg"
  },
  {
    label: "Climate Control",
    image: "https://res.cloudinary.com/dsxfpu2tk/image/upload/v1768290971/nursery-3_glzwo2.png"
  }
];

const products = [
  { name: "Biocure", image: "https://res.cloudinary.com/dsxfpu2tk/image/upload/v1768891576/1_hb80js.png" },
  { name: "Stanes Symbion Vam Plus", image: "https://res.cloudinary.com/dsxfpu2tk/image/upload/v1768892189/2_zcilz7.png" },
  { name: "Plant", image: "https://res.cloudinary.com/dsxfpu2tk/image/upload/v1768291191/p3_r2i4my.png" },
  { name: "Hybrid Cauliflower", image: "https://res.cloudinary.com/dsxfpu2tk/image/upload/v1768892282/4_ipa7ns.png" },
  { name: "Biocure", image: "https://res.cloudinary.com/dsxfpu2tk/image/upload/v1768892429/Biocure_fwide4.png" },
  { name: "Biovita", image: "https://res.cloudinary.com/dsxfpu2tk/image/upload/v1768892922/Biovita_mkbjlr.png" },
  { name: "Bio Nimaton", image: "https://res.cloudinary.com/dsxfpu2tk/image/upload/v1768893025/Bio_Nimaton_gjshta.png" },
  { name: "Plantex", image: "https://res.cloudinary.com/dsxfpu2tk/image/upload/v1768893105/Plantex_guxwxa.png" },
];

const mallBanners = [
  "https://res.cloudinary.com/dsxfpu2tk/image/upload/v1768295336/mall1_x0dgn8.png",
  "https://res.cloudinary.com/dsxfpu2tk/image/upload/v1768295335/mall2_q070mb.jpg",
  "https://res.cloudinary.com/dsxfpu2tk/image/upload/v1768295335/mall3_knljzh.jpg",
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
    role: "Avinash Kumar",
    text: `"Farmers first, always. Solution for farmers under one roof #agaatekisanmall …"`
  },
  {
    role: "Pankaj Gupta",
    text: `"Agaate Kisan Mall is a one‑stop shop for agricultural inputs"`
  },
  {
    role: "Abhay Ranjan",
    text: `"A farm to experience, multiple farming technologies, products, seeds varieties , nursery for vegetables, multiple cops and best practices in farming"`
  }
];

const investors = [
  {
    role: "Anonymous",
    text: `"Agaate has built a sustainable, scalable model in agriculture. Strong fundamentals, strong execution."`
  },
  {
    role: "Anonymous",
    text: `"Impressive technology adoption with real on-ground impact for farmers."`
  },
  {
    role: "Anonymous",
    text: `"Clear roadmap, strong leadership, and long-term vision."`
  }
];

const team = [
  { img: "https://res.cloudinary.com/dsxfpu2tk/image/upload/v1768296769/ankit_zjzhsg.png", name: "Ankit Rawat", role: "Founder & CEO" },
  { img: "https://res.cloudinary.com/dsxfpu2tk/image/upload/v1768296775/kuldeep_z6kxxb.png", name: "Kuldeep Singh Singhar", role: "Head of Operations (Farm + Crop Sales)" },
  { img: "https://res.cloudinary.com/dsxfpu2tk/image/upload/v1768296766/abhay_zopdrz.jpg", name: "Abhay Ranjan", role: "Chief of Staff (Nursery + Mall Sales)" },
  { img: "https://res.cloudinary.com/dsxfpu2tk/image/upload/v1768296846/vijay_awreg7.jpg", name: "Vijay Singh", role: "Farmer Relationships / Crop Sales" },
  { img: "https://res.cloudinary.com/dsxfpu2tk/image/upload/v1768296771/chanchala_d4xdxk.png", name: "Chanchala Shukla", role: "Agronomist" },
  { img: "https://res.cloudinary.com/dsxfpu2tk/image/upload/v1768296768/alok_ptha02.jpg", name: "Alok", role: "Nursery Owner" },
  { img: "https://res.cloudinary.com/dsxfpu2tk/image/upload/v1768296774/chandramani_c2i3bg.png", name: "Chandramani", role: "Mall Sales" },
  // { img: "https://res.cloudinary.com/dsxfpu2tk/image/upload/v1768296776/pradeep_okj1uu.jpg", name: "Pradeep", role: "Mall Sales" },
  // { img: "./public/images/ravi.png", name: "Ravi Kumar", role: "Data & Strategy" },
  // Note: mishra.jpg and ujjwal.jpg may not exist, so excluding them
];

// State
let activeTab = "buyer";
let ecosystemTab = "production";
let slideIndex = 0;
let mallIndex = 0;
let testimonialTab = "farmers";
let ecosystemImageIndex = 0;
let ecosystemInterval = null;

// Initialize page - wait for DOM and ensure elements exist
function initializePage() {
  // Check if required elements exist
  const statsContainer = document.getElementById("stats-wrapper");
  const brandsContainer = document.getElementById("brands-container");
  
  if (!statsContainer || !brandsContainer) {
    // Retry after a short delay
    setTimeout(initializePage, 100);
    return;
  }
  
  setupHeroSlider();
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
  setupBackToTop();
  setupBrandsInteraction();
  updateHeroContent(heroIndex);
}

// Try to initialize immediately if DOM is ready, otherwise wait
if (document.readyState === 'loading') {
  document.addEventListener("DOMContentLoaded", initializePage);
} else {
  // DOM already loaded, but wait a bit for dynamic content
  setTimeout(initializePage, 200);
}

// Hero section 
let heroIndex = 0;
let showingFirst = true;

function setupHeroSlider() {
  const img1 = document.getElementById("hero-img-1");
  const img2 = document.getElementById("hero-img-2");

  if (!img1 || !img2) return;

  // Set initial image
  img1.src = HERO_IMAGES[heroIndex];

  function changeHero(index) {
    const nextImage = HERO_IMAGES[index];

    const showImg = showingFirst ? img2 : img1;
    const hideImg = showingFirst ? img1 : img2;

    showImg.src = nextImage;

    showImg.classList.remove("opacity-0");
    showImg.classList.add("opacity-100");

    hideImg.classList.remove("opacity-100");
    hideImg.classList.add("opacity-0");

    updateHeroContent(index);

    showingFirst = !showingFirst;
  }

  function nextHero() {
    heroIndex = (heroIndex + 1) % HERO_IMAGES.length;
    changeHero(heroIndex);
  }

  function prevHero() {
    heroIndex =
      (heroIndex - 1 + HERO_IMAGES.length) % HERO_IMAGES.length;
    changeHero(heroIndex);
  }

  function updateHeroContent(index) {
    const content = HERO_CONTENT[index];
    if (!content) return;

    const headingEl = document.getElementById("hero-heading");
    const descEl = document.getElementById("hero-description");
    const primaryBtn = document.getElementById("hero-primary-btn");
    const secondaryBtn = document.getElementById("hero-secondary-btn");

    // Fade out
    descEl.classList.add("opacity-0");

    setTimeout(() => {
      headingEl.innerHTML = content.heading;
      descEl.textContent = content.description;

      primaryBtn.href = content.primaryLink;
      primaryBtn.querySelector("button").textContent = content.primaryText;

      secondaryBtn.href = content.secondaryLink;
      secondaryBtn.childNodes[0].textContent = content.secondaryText;

      // Fade in
      descEl.classList.remove("opacity-0");
    }, 300);
  }

  document
    .getElementById("hero-next")
    ?.addEventListener("click", nextHero);

  document
    .getElementById("hero-prev")
    ?.addEventListener("click", prevHero);

  // Optional auto slide
  setInterval(nextHero, 5000);
}

// Render Stats
function renderStats() {
  const wrapper = document.getElementById("stats-wrapper");
  if (!wrapper) return;

  // Duplicate stats for seamless infinite scroll
  const duplicatedStats = [...stats, ...stats];

  wrapper.innerHTML = duplicatedStats.map(stat => `
    <div class="min-w-[220px] sm:min-w-[260px] text-center">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400">
        ${stat.metric}
      </h2>
      <p class="mt-2 text-xs sm:text-sm md:text-base text-gray-500">
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

  // If no brands, show message
  if (currentBrands.length === 0) {
    container.innerHTML = `
      <div class="text-center text-gray-500 py-8">
        No brands available for this category.
      </div>
    `;
    container.classList.remove("brands-marquee");
    return;
  }

  // Duplicate brands for infinite scroll (VERY IMPORTANT)
  const duplicatedBrands = [...currentBrands, ...currentBrands];

  container.classList.add("brands-marquee");

  container.innerHTML = duplicatedBrands
    .map(
      (logo) => `
      <div
        class="relative w-28 h-14
               sm:w-32 sm:h-16
               md:w-36 md:h-18
               lg:w-40 lg:h-20
               grayscale hover:grayscale-0
               transition duration-300
               flex-shrink-0"
      >
        <img
          src="${logo}"
          alt="Brand logo"
          class="w-full h-full object-contain"
        />
      </div>
    `
    )
    .join("");
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

function setupBrandsInteraction() {
  const scroll = document.getElementById("brands-scroll");
  const marquee = document.getElementById("brands-container");
  if (!scroll || !marquee) return;

  let resumeTimer;

  const pause = () => {
    marquee.classList.add("brands-paused");
    clearTimeout(resumeTimer);
  };

  const resume = () => {
    resumeTimer = setTimeout(() => {
      marquee.classList.remove("brands-paused");
    }, 1200);
  };

  // Touch
  scroll.addEventListener("touchstart", pause, { passive: true });
  scroll.addEventListener("touchend", resume);

  // Mouse
  scroll.addEventListener("mouseenter", pause);
  scroll.addEventListener("mouseleave", resume);
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
// Setup Ecosystem Tabs & Carousel
function setupEcosystemTabs() {
  const tabButtons = document.querySelectorAll(".ecosystem-tab");
  const imageEl = document.getElementById("ecosystem-image");
  const headingEl = document.getElementById("ecosystem-heading");
  const pointsEl = document.getElementById("ecosystem-points");
  const subEl = document.getElementById("ecosystem-sub");
  
  // Get Button Elements
  const prevBtn = document.getElementById("eco-prev");
  const nextBtn = document.getElementById("eco-next");

  if (!tabButtons.length || !imageEl || !headingEl || !pointsEl || !subEl) {
    console.warn("Ecosystem tab elements not found");
    return;
  }

  // Function to render the current image based on tab and index
  function updateEcosystemImage() {
    const tabData = TABS[ecosystemTab];
    if (tabData && tabData.images && tabData.images.length > 0) {
      // Ensure index is within bounds
      if (ecosystemImageIndex >= tabData.images.length) ecosystemImageIndex = 0;
      if (ecosystemImageIndex < 0) ecosystemImageIndex = tabData.images.length - 1;
      
      imageEl.src = tabData.images[ecosystemImageIndex];
    }
  }

  // Function to update text content (runs only when switching tabs)
  function updateEcosystemContent() {
    const tab = TABS[ecosystemTab];
    if (!tab) return;

    if (headingEl) headingEl.textContent = tab.heading;
    if (pointsEl) {
      pointsEl.innerHTML = tab.points.map(p => `<li>${p}</li>`).join("");
    }
    if (subEl) subEl.textContent = tab.sub;
    
    // Reset image index to 0 when switching tabs
    ecosystemImageIndex = 0;
    updateEcosystemImage();
    resetInterval();
  }

  // Navigation Logic
  function nextImage() {
    const tabData = TABS[ecosystemTab];
    if (!tabData) return;
    ecosystemImageIndex = (ecosystemImageIndex + 1) % tabData.images.length;
    updateEcosystemImage();
  }

  function prevImage() {
    const tabData = TABS[ecosystemTab];
    if (!tabData) return;
    ecosystemImageIndex = (ecosystemImageIndex - 1 + tabData.images.length) % tabData.images.length;
    updateEcosystemImage();
  }

  // Auto-Scroll Logic
  function resetInterval() {
    if (ecosystemInterval) clearInterval(ecosystemInterval);
    ecosystemInterval = setInterval(nextImage, 2500); // 2.5 Seconds
  }

  // Event Listeners for Buttons
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextImage();
      resetInterval(); // Reset timer when manually clicked
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevImage();
      resetInterval(); // Reset timer when manually clicked
    });
  }

  // Tab Click Listeners
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      ecosystemTab = btn.getAttribute("data-ecosystem-tab");

      // Update active state styles
      tabButtons.forEach(b => {
        b.classList.remove("bg-yellow-400", "text-white");
        b.classList.add("bg-white", "border", "text-green-700");
      });
      btn.classList.remove("bg-white", "border", "text-green-700");
      btn.classList.add("bg-yellow-400", "text-white");

      updateEcosystemContent();
    });
  });

  // Initialize
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
      x -= 0.3;
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

// Back to Top Button
function setupBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  // Show / hide button on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btn.classList.remove("hidden");
      btn.classList.add("flex");
    } else {
      btn.classList.add("hidden");
      btn.classList.remove("flex");
    }
  });

  // Scroll to top on click
  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

