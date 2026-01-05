// Load header, page, and footer dynamically
async function loadComponent(url, containerId) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = html;
    }
  } catch (error) {
    console.error(`Error loading ${url}:`, error);
  }
}

// Load all components
async function init() {
  await Promise.all([
    loadComponent('./components/header.html', 'header-placeholder'),
    loadComponent('./page.html', 'page-content'),
    loadComponent('./components/footer.html', 'footer-placeholder')
  ]);
  
  // Wait a bit for DOM to update
  await new Promise(resolve => setTimeout(resolve, 100));
  
  // Load scripts after HTML is loaded
  const headerScript = document.createElement('script');
  headerScript.src = './components/header.js';
  document.body.appendChild(headerScript);
  
  // Load page script as module
  const pageScript = document.createElement('script');
  pageScript.type = 'module';
  pageScript.src = './page.js';
  document.body.appendChild(pageScript);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

