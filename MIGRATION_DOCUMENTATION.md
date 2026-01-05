# Agaate Website Migration Documentation

## Overview
This document explains the complete migration of the Agaate website from Next.js (React framework) to a static Vanilla HTML + Tailwind CSS site. The website maintains all original functionality while being completely framework-independent and can run without any build process or npm commands.

---

## Table of Contents
1. [What Was Done](#what-was-done)
2. [Project Structure](#project-structure)
3. [File Descriptions](#file-descriptions)
4. [Functionality Explained](#functionality-explained)
5. [How to Run Locally](#how-to-run-locally)
6. [Deployment on AWS EC2](#deployment-on-aws-ec2)

---

## What Was Done

### Migration Summary
- **Converted** Next.js React components (`.tsx` files) to static HTML files
- **Converted** TypeScript files (`.ts`) to JavaScript files (`.js`)
- **Replaced** Next.js Image component with standard HTML `<img>` tags
- **Replaced** React hooks (useState, useEffect) with vanilla JavaScript
- **Replaced** Framer Motion animations with CSS transitions and JavaScript
- **Moved** all images to `public/images/` directory
- **Removed** all framework dependencies (Next.js, React, TypeScript, etc.)
- **Implemented** dynamic content loading using JavaScript modules
- **Maintained** all original functionality including:
  - Header shrink on scroll
  - Mobile responsive menu
  - Tab switching (Brands, Ecosystem, Testimonials)
  - Image carousels (Nursery, Kisan Mall)
  - Team marquee with 3D flip cards
  - Smooth scroll navigation

---

## Project Structure

```
Agaate/
├── components/
│   ├── header.html          # Header component HTML
│   ├── header.js            # Header functionality (scroll shrink, mobile menu)
│   └── footer.html          # Footer component HTML
│
├── data/
│   ├── brands.js            # Brand logos data (Buyer, Seller, Veg Seller)
│   └── stats.js             # Statistics data (metrics and descriptions)
│
├── public/
│   └── images/              # All website images (59 files)
│       ├── logo.svg
│       ├── heroimage.png
│       ├── team.png
│       └── ... (all other images)
│
├── globals.css              # Global styles (scroll behavior, utilities)
├── index.html               # Main entry point
├── layout.html              # Layout template (alternative entry)
├── layout.js                # Dynamic component loader
├── page.html                # Main page content (all sections)
└── page.js                  # Page functionality (tabs, carousels, rendering)
```

---

## File Descriptions

### Core Files

#### `index.html`
- **Purpose**: Main entry point of the website
- **What it does**: 
  - Loads Tailwind CSS from CDN
  - Links global CSS file
  - Creates placeholder divs for header, page content, and footer
  - Loads `layout.js` which dynamically injects all components

#### `layout.js`
- **Purpose**: Dynamically loads HTML components
- **How it works**:
  1. Uses `fetch()` API to load `header.html`, `page.html`, and `footer.html`
  2. Injects them into placeholder divs
  3. Loads JavaScript files (`header.js` and `page.js`) after HTML is loaded
  4. Ensures proper initialization order

#### `page.html`
- **Purpose**: Contains all main content sections
- **Sections included**:
  - Hero section (with background image)
  - Stats section (populated by JavaScript)
  - About section
  - Brands & Associations (with tabs)
  - Our Journey
  - Technology & Scale
  - End-to-End Farming Ecosystem (with tabs)
  - Modernised Nursery & Techniques (carousel)
  - Our Products
  - Kisan Mall (carousel)
  - News & Media
  - Seedless Farming Process
  - Testimonials (with tabs)
  - Our Team (marquee)
  - Contact form

#### `page.js`
- **Purpose**: Handles all interactive functionality
- **Key Functions**:
  - `renderStats()` - Displays statistics from `data/stats.js`
  - `renderBrands()` - Shows brand logos based on selected tab
  - `renderProducts()` - Displays product cards
  - `renderSteps()` - Shows farming process steps
  - `renderTestimonials()` - Displays farmer/investor testimonials
  - `renderTeam()` - Creates team member cards with 3D flip effect
  - `setupBrandTabs()` - Handles Buyer/Seller/Veg Seller tab switching
  - `setupEcosystemTabs()` - Handles Production/Retail tab switching
  - `setupTestimonialTabs()` - Handles Farmers/Investors tab switching
  - `setupNurseryCarousel()` - Auto-advancing image carousel
  - `setupMallCarousel()` - Auto-advancing banner carousel
  - `setupTeamMarquee()` - Infinite scrolling team member display

### Component Files

#### `components/header.html`
- **Purpose**: Header navigation bar
- **Features**:
  - Logo (clickable, goes to home)
  - Desktop navigation links (Home, About, Contact, KisanMall)
  - Login button (redirects to `/login`)
  - Mobile hamburger menu
  - Responsive design

#### `components/header.js`
- **Purpose**: Header interactivity
- **Functionality**:
  1. **Scroll Shrink Effect**:
     - Starts at 85% width
     - Shrinks to 60% when scrolling down (>10px)
     - Expands back to 85% when at top
     - Only works on desktop (≥768px width)
  
  2. **Mobile Menu**:
     - Opens/closes hamburger menu
     - Handles smooth scroll for navigation links
     - Closes menu when link is clicked

#### `components/footer.html`
- **Purpose**: Website footer
- **Contains**:
  - Company logo and description
  - Quick Links section
  - Company information
  - Products list
  - Social media icons (Instagram, LinkedIn, Facebook)
  - Copyright information

### Data Files

#### `data/brands.js`
- **Purpose**: Stores brand logo paths
- **Structure**:
  ```javascript
  export const brands = {
    buyer: ["./public/images/coromandel.png", ...],
    seller: [],
    vegSeller: ["./public/images/blinkit.png", ...]
  }
  ```
- **Usage**: Used by `page.js` to display logos based on selected tab

#### `data/stats.js`
- **Purpose**: Stores website statistics
- **Structure**:
  ```javascript
  export const stats = [
    { metric: "5000+ Acres", description: "Farmers' Land Associated" },
    ...
  ]
  ```
- **Usage**: Rendered in the Stats section by `page.js`

### Style Files

#### `globals.css`
- **Purpose**: Global CSS styles
- **Contains**:
  - Smooth scroll behavior
  - Custom scrollbar hiding (`.no-scrollbar`)
  - Team card 3D flip styles

---

## Functionality Explained

### 1. Dynamic Content Loading
**How it works**:
- `layout.js` uses JavaScript's `fetch()` API to load HTML files
- HTML is injected into placeholder divs
- Scripts are loaded after HTML is ready
- This allows modular structure while keeping files separate

**Why this approach**:
- Maintains separation of concerns
- Easy to update individual components
- No build process required

### 2. Header Shrink on Scroll
**Implementation**:
```javascript
// In header.js
window.addEventListener("scroll", updateHeaderWidth);

function updateHeaderWidth() {
  const shouldShrink = window.scrollY > 10;
  if (shouldShrink) {
    headerContainer.style.width = "60%";
  } else {
    headerContainer.style.width = "85%";
  }
}
```

**How it works**:
- Listens to scroll events
- Checks if scroll position > 10px
- Changes width with CSS transition
- Prevents content overlap using flexbox

### 3. Tab Switching
**Example: Brand Tabs**
```javascript
// User clicks "Buyer" tab
1. Event listener captures click
2. Updates `activeTab` variable to "buyer"
3. Changes button styles (active/inactive)
4. Calls `renderBrands()` function
5. Function reads `brands.buyer` array
6. Generates HTML for each logo
7. Updates DOM with new content
```

**Same pattern used for**:
- Ecosystem tabs (Production/Retail)
- Testimonial tabs (Farmers/Investors)

### 4. Image Carousels
**Nursery Carousel**:
- Displays 3 images in rotation
- Auto-advances every 2.5 seconds
- Manual prev/next buttons
- Updates image source and label text

**Kisan Mall Carousel**:
- Displays 3 banner images
- Auto-advances every 2.5 seconds
- Smooth transitions

### 5. Team Marquee
**How it works**:
- Creates duplicate team array for seamless loop
- Uses CSS `transform: translateX()` for animation
- Continuously scrolls left
- Pauses on hover
- Resets position when reaching duplicate point
- Each card has 3D flip effect on hover

### 6. Smooth Scroll Navigation
**Implementation**:
```javascript
function handleScroll(e, id) {
  e.preventDefault();
  const el = document.getElementById(id);
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}
```

**How it works**:
- Prevents default anchor behavior
- Finds target element by ID
- Uses native `scrollIntoView()` with smooth behavior

---

## How to Run Locally

### Option 1: Using Python (Recommended)
```bash
# Navigate to project directory
cd /path/to/Agaate

# Start local server (Python 3)
python3 -m http.server 8000

# Or if you have Python 2
python -m SimpleHTTPServer 8000
```

**Access**: Open browser and go to `http://localhost:8000`

### Option 2: Using Node.js
```bash
# Install http-server globally (one time)
npm install -g http-server

# Navigate to project directory
cd /path/to/Agaate

# Start server
http-server -p 8000
```

**Access**: Open browser and go to `http://localhost:8000`

### Option 3: Using PHP
```bash
# Navigate to project directory
cd /path/to/Agaate

# Start PHP built-in server
php -S localhost:8000
```

**Access**: Open browser and go to `http://localhost:8000`

### Option 4: Using VS Code Live Server Extension
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Browser opens automatically

### Why a Server is Needed
- JavaScript modules (`import/export`) require HTTP protocol
- `fetch()` API doesn't work with `file://` protocol
- CORS restrictions prevent loading local files

---

## Deployment on AWS EC2

### Prerequisites
- AWS account
- EC2 instance created
- SSH access to EC2 instance
- Basic Linux command knowledge

### Step-by-Step Deployment

#### Step 1: Launch EC2 Instance
1. Log in to AWS Console
2. Go to EC2 Dashboard
3. Click "Launch Instance"
4. Choose Ubuntu Server (20.04 or 22.04 LTS)
5. Select instance type (t2.micro for testing, t2.small for production)
6. Configure security group:
   - **Inbound Rules**:
     - SSH (port 22) - Your IP
     - HTTP (port 80) - 0.0.0.0/0
     - HTTPS (port 443) - 0.0.0.0/0 (optional)
7. Create or select key pair
8. Launch instance

#### Step 2: Connect to EC2 Instance
```bash
# On your local machine
ssh -i /path/to/your-key.pem ubuntu@your-ec2-public-ip

# Example:
ssh -i ~/Downloads/agaate-key.pem ubuntu@54.123.45.67
```

#### Step 3: Update System Packages
```bash
sudo apt update
sudo apt upgrade -y
```

#### Step 4: Install Web Server (Nginx)
```bash
# Install Nginx
sudo apt install nginx -y

# Start Nginx
sudo systemctl start nginx

# Enable Nginx to start on boot
sudo systemctl enable nginx

# Check status
sudo systemctl status nginx
```

#### Step 5: Upload Project Files

**Option A: Using SCP (from local machine)**
```bash
# From your local machine (not on EC2)
scp -i /path/to/your-key.pem -r /path/to/Agaate/* ubuntu@your-ec2-ip:/home/ubuntu/agaate/

# Example:
scp -i ~/Downloads/agaate-key.pem -r ~/Agaate/* ubuntu@54.123.45.67:/home/ubuntu/agaate/
```

**Option B: Using Git (on EC2)**
```bash
# On EC2 instance
cd /home/ubuntu
git clone https://github.com/your-username/agaate.git
cd agaate
```

**Option C: Using FileZilla/WinSCP**
- Connect via SFTP using your key file
- Upload project files to `/home/ubuntu/agaate/`

#### Step 6: Configure Nginx
```bash
# Create Nginx configuration
sudo nano /etc/nginx/sites-available/agaate
```

**Add this configuration**:
```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;  # Replace with your domain or use EC2 IP
    
    root /home/ubuntu/agaate;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

**Save and exit** (Ctrl+X, then Y, then Enter)

#### Step 7: Enable Site and Test Configuration
```bash
# Create symbolic link
sudo ln -s /etc/nginx/sites-available/agaate /etc/nginx/sites-enabled/

# Remove default site (optional)
sudo rm /etc/nginx/sites-enabled/default

# Test Nginx configuration
sudo nginx -t

# If test passes, reload Nginx
sudo systemctl reload nginx
```

#### Step 8: Set Proper Permissions
```bash
# Set ownership
sudo chown -R www-data:www-data /home/ubuntu/agaate

# Set permissions
sudo chmod -R 755 /home/ubuntu/agaate
```

#### Step 9: Access Your Website
- Open browser
- Go to: `http://your-ec2-public-ip` or `http://your-domain.com`
- Website should be live!

#### Step 10: (Optional) Set Up Domain Name
1. Go to your domain registrar (GoDaddy, Namecheap, etc.)
2. Add A record:
   - **Type**: A
   - **Name**: @ (or www)
   - **Value**: Your EC2 public IP
   - **TTL**: 3600
3. Wait for DNS propagation (5 minutes to 48 hours)
4. Update Nginx config with your domain name
5. Reload Nginx

#### Step 11: (Optional) Enable HTTPS with Let's Encrypt
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Follow prompts (enter email, agree to terms)
# Certbot will automatically configure Nginx for HTTPS

# Test auto-renewal
sudo certbot renew --dry-run
```

### Troubleshooting

**Website not loading?**
```bash
# Check Nginx status
sudo systemctl status nginx

# Check Nginx error logs
sudo tail -f /var/log/nginx/error.log

# Check if files are in correct location
ls -la /home/ubuntu/agaate
```

**Permission denied errors?**
```bash
# Fix permissions
sudo chown -R www-data:www-data /home/ubuntu/agaate
sudo chmod -R 755 /home/ubuntu/agaate
```

**Port 80 not accessible?**
- Check EC2 Security Group inbound rules
- Ensure HTTP (port 80) is open to 0.0.0.0/0

**Files not found?**
- Verify file paths in Nginx config match actual location
- Check `root` directive in Nginx config

### Maintenance Commands
```bash
# Restart Nginx
sudo systemctl restart nginx

# Reload Nginx (without downtime)
sudo systemctl reload nginx

# Check Nginx status
sudo systemctl status nginx

# View access logs
sudo tail -f /var/log/nginx/access.log

# View error logs
sudo tail -f /var/log/nginx/error.log
```

---

## Key Differences from Original Next.js Version

| Feature | Next.js (Before) | Static HTML (Now) |
|---------|----------------|-------------------|
| **Framework** | React + Next.js | Vanilla HTML/JS |
| **Build Process** | `npm run build` required | No build needed |
| **Server** | Next.js server | Any web server (Nginx, Apache) |
| **Dependencies** | node_modules (hundreds of MB) | None (CDN only) |
| **Image Optimization** | Next.js Image component | Standard `<img>` tags |
| **Routing** | File-based routing | Hash-based (#home, #about) |
| **State Management** | React hooks (useState) | JavaScript variables |
| **Animations** | Framer Motion | CSS + JavaScript |
| **Deployment** | Vercel/Netlify optimized | Any static hosting |

---

## Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ⚠️ Internet Explorer 11 (not supported - uses modern JavaScript)

---

## Performance Notes

- **No build step**: Faster development
- **CDN Tailwind**: Loads from CDN (fast, cached)
- **Static files**: Served directly by web server (very fast)
- **No JavaScript framework overhead**: Smaller bundle size
- **Image optimization**: Consider compressing images for production

---

## Future Enhancements (Optional)

1. **Image Optimization**: Compress images using tools like TinyPNG
2. **Minification**: Minify CSS and JavaScript files
3. **CDN**: Use CloudFront or Cloudflare for global CDN
4. **Caching**: Implement service worker for offline support
5. **Analytics**: Add Google Analytics or similar
6. **SEO**: Add meta tags, Open Graph tags, structured data

---

## Support & Questions

If you have questions about:
- **File locations**: Check [Project Structure](#project-structure) section
- **How something works**: Check [Functionality Explained](#functionality-explained) section
- **Deployment issues**: Check [Deployment on AWS EC2](#deployment-on-aws-ec2) troubleshooting
- **Local development**: Check [How to Run Locally](#how-to-run-locally) section

---

## Summary

This migration successfully converted a Next.js React application to a static HTML/CSS/JavaScript website while maintaining 100% of the original functionality. The website is now:
- ✅ Framework-independent
- ✅ Easy to deploy anywhere
- ✅ Fast loading (no build process)
- ✅ Maintainable (simple file structure)
- ✅ Fully responsive
- ✅ Production-ready

All interactive features work exactly as before, including tabs, carousels, scroll effects, and mobile menu. The code is well-organized and easy to understand for junior developers.

---

**Document Version**: 1.0  
**Last Updated**: January 2025  
**Migration Completed By**: AI Assistant

