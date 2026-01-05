// Header functionality - initialize when script loads
function initHeader() {
  const headerContainer = document.getElementById("header-container");
  const headerWrapper = document.getElementById("header-wrapper");
  
  // If header not loaded yet, retry after a short delay
  if (!headerContainer || !headerWrapper) {
    setTimeout(initHeader, 100);
    return;
  }
  
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenuBtn = document.getElementById("close-menu-btn");
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  // Set initial width based on screen size
  function setInitialWidth() {
    if (window.innerWidth >= 768) {
      // Desktop: wrapper and container start at 85%
      headerWrapper.style.width = "85%";
      headerContainer.style.width = "100%";
    } else {
      // Mobile: wrapper full width, container full width
      headerWrapper.style.width = "100%";
      headerContainer.style.width = "100%";
    }
  }
  
  setInitialWidth();

  // Header shrink on scroll (only on desktop)
  let shrink = false;
  function updateHeaderWidth() {
    if (!headerContainer || !headerWrapper) return;
    
    // Only apply shrink effect on desktop (≥768px)
    if (window.innerWidth >= 768) {
      const shouldShrink = window.scrollY > 10;
      if (shouldShrink !== shrink) {
        shrink = shouldShrink;
        if (shrink) {
          headerWrapper.style.width = "60%";
          // Reduce gap in nav when shrunk
          const nav = headerContainer.querySelector('nav');
          if (nav) nav.style.gap = '3rem';
        } else {
          headerWrapper.style.width = "85%";
          // Restore gap in nav
          const nav = headerContainer.querySelector('nav');
          if (nav) nav.style.gap = '';
        }
      }
    } else {
      // Mobile: always full width, no shrink
      headerWrapper.style.width = "100%";
      headerContainer.style.width = "100%";
      shrink = false;
    }
  }

  // Add scroll listener
  window.addEventListener("scroll", updateHeaderWidth);
  
  // Initial check
  updateHeaderWidth();

  // Handle window resize
  window.addEventListener("resize", () => {
    setInitialWidth();
    updateHeaderWidth();
  });

  // Mobile menu toggle - hide header container when menu opens (like original)
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      // Hide header container on mobile (like original: "hidden md:flex")
      // But keep hamburger button visible by making it fixed
      if (window.innerWidth < 768) {
        headerContainer.style.display = "none";
        // Make hamburger button fixed and visible
        mobileMenuBtn.style.position = "fixed";
        mobileMenuBtn.style.top = "1rem";
        mobileMenuBtn.style.right = "1rem";
        mobileMenuBtn.style.zIndex = "60";
        mobileMenuBtn.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
        mobileMenuBtn.style.backdropFilter = "blur(12px)";
        mobileMenuBtn.style.padding = "0.5rem";
        mobileMenuBtn.style.borderRadius = "9999px";
      }
      mobileMenu.classList.remove("hidden");
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    });
  }

  if (closeMenuBtn && mobileMenu) {
    closeMenuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      // Show header container again, hide menu
      headerContainer.style.display = "";
      // Reset hamburger button
      mobileMenuBtn.style.position = "";
      mobileMenuBtn.style.top = "";
      mobileMenuBtn.style.right = "";
      mobileMenuBtn.style.zIndex = "";
      mobileMenuBtn.style.backgroundColor = "";
      mobileMenuBtn.style.backdropFilter = "";
      mobileMenuBtn.style.padding = "";
      mobileMenuBtn.style.borderRadius = "";
      mobileMenu.classList.add("hidden");
      // Restore body scroll
      document.body.style.overflow = "";
    });
  }
  
  // Close mobile menu when clicking outside
  if (mobileMenu) {
    document.addEventListener("click", (e) => {
      if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target) && closeMenuBtn && !closeMenuBtn.contains(e.target)) {
        if (!mobileMenu.classList.contains("hidden")) {
          headerContainer.style.display = "";
          mobileMenuBtn.style.position = "";
          mobileMenuBtn.style.top = "";
          mobileMenuBtn.style.right = "";
          mobileMenuBtn.style.zIndex = "";
          mobileMenuBtn.style.backgroundColor = "";
          mobileMenuBtn.style.backdropFilter = "";
          mobileMenuBtn.style.padding = "";
          mobileMenuBtn.style.borderRadius = "";
          mobileMenu.classList.add("hidden");
          document.body.style.overflow = "";
        }
      }
    });
  }

  // Smooth scroll for navigation links
  function handleScroll(e, id) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    mobileMenu.classList.add("hidden");
    headerContainer.classList.remove("hidden");
    headerWrapper.classList.remove("hidden");
    document.body.style.overflow = "";
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href.startsWith("#")) {
        handleScroll(e, href.substring(1));
      }
    });
  });

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href.startsWith("#")) {
        handleScroll(e, href.substring(1));
      }
    });
  });
}

// Start initialization
initHeader();

