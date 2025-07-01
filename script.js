// Enhanced Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Close mobile menu when clicking on nav links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80; // Account for fixed header
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Update active nav link
            updateActiveNavLink(link);
        }
    });
});

// Update active navigation link based on scroll position
function updateActiveNavLink(activeLink = null) {
    if (activeLink) {
        navLinks.forEach(link => link.classList.remove('active'));
        activeLink.classList.add('active');
    } else {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute('id');
            
            if (scrollPos >= top && scrollPos <= bottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
}

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 4px 25px rgba(62, 148, 165, 0.15)';
        header.style.borderBottom = '1px solid rgba(62, 148, 165, 0.12)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(62, 148, 165, 0.1)';
        header.style.borderBottom = '1px solid rgba(62, 148, 165, 0.08)';
    }
    
    // Update active nav link based on scroll
    updateActiveNavLink();
});

// Menu filtering functionality
const menuTabs = document.querySelectorAll('.menu-tab');
const menuItems = document.querySelectorAll('.menu-item');

menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        menuTabs.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        tab.classList.add('active');
        
        const category = tab.getAttribute('data-category');
        
        // Filter menu items
        menuItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            if (category === 'semua' || itemCategory === category) {
                item.style.display = 'block';
                item.style.animation = 'fadeInUp 0.5s ease-out';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Google Maps initialization
function initMap() {
    // Restaurant location coordinates (Bandung example)
    const restaurantLocation = { lat: -6.900344, lng: 107.618136 };
    
    const map = new google.maps.Map(document.getElementById("restaurantMap"), {
        zoom: 15,
        center: restaurantLocation,
        styles: [
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{"color": "#3E94A5"}]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{"color": "#f5f5f5"}]
            }
        ]
    });
    
    const marker = new google.maps.Marker({
        position: restaurantLocation,
        map: map,
        title: "Warung Nasi Raosan Deui - Cabang Utama",
        icon: {
            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#C9231F">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
            `),
            scaledSize: new google.maps.Size(40, 40)
        }
    });
    
    const infoWindow = new google.maps.InfoWindow({
        content: `
            <div style="padding: 10px; font-family: 'Poppins', sans-serif;">
                <h3 style="color: #3E94A5; margin: 0 0 10px 0;">Warung Nasi Raosan Deui</h3>
                <p style="margin: 5px 0; color: #666;">📍 Jl. Cihampelas No. 123, Bandung</p>
                <p style="margin: 5px 0; color: #666;">⏰ 08:00 - 22:00 WIB</p>
                <p style="margin: 5px 0; color: #666;">📞 (022) 123-4567</p>
            </div>
        `
    });
    
    marker.addListener("click", () => {
        infoWindow.open(map, marker);
    });
}

// Open directions function
function openDirections() {
    const destination = "-6.8275124,107.1262816"; // Koordinat Warung Nasi Raosan Deui
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
    window.open(url, '_blank');
}

// Review System
const reviewForm = document.getElementById('reviewForm');
const reviewsList = document.getElementById('reviewsList');
let isAdminMode = false;

// Review form handling
if (reviewForm) {
    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(reviewForm);
        const data = Object.fromEntries(formData);
        
        // Basic validation
        if (!data.reviewerName || !data.rating || !data.reviewText) {
            showNotification('Mohon lengkapi semua field yang wajib diisi!', 'error');
            return;
        }
        
        // Create new review
        const submitBtn = reviewForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<span class="loading"></span> Mengirim Review...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            addReview(data);
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            reviewForm.reset();
            resetStarRating();
            showNotification('Review berhasil dikirim! Terima kasih atas feedback Anda.', 'success');
        }, 1500);
    });
}

// Add new review to the list
function addReview(reviewData) {
    const newReview = document.createElement('div');
    newReview.className = 'review-item';
    newReview.innerHTML = `
        <div class="review-header">
            <div class="reviewer-info">
                <h4>${reviewData.reviewerName}</h4>
                <div class="review-rating">${generateStars(reviewData.rating)}</div>
            </div>
            <div class="review-date">Baru saja</div>
            <button class="delete-review-btn" data-review="${Date.now()}" style="display: ${isAdminMode ? 'block' : 'none'};">
                <i class="fas fa-trash"></i>
            </button>
        </div>
        <p class="review-text">${reviewData.reviewText}</p>
    `;
    
    // Add to top of reviews list
    const firstReview = reviewsList.querySelector('.review-item');
    if (firstReview) {
        reviewsList.insertBefore(newReview, firstReview);
    } else {
        reviewsList.appendChild(newReview);
    }
    
    // Add delete functionality
    const deleteBtn = newReview.querySelector('.delete-review-btn');
    deleteBtn.addEventListener('click', () => {
        if (confirm('Apakah Anda yakin ingin menghapus review ini?')) {
            newReview.remove();
            showNotification('Review berhasil dihapus!', 'success');
        }
    });
    
    // Update review count
    updateReviewStats();
}

// Generate star display
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += i <= rating ? '★' : '☆';
    }
    return stars;
}

// Reset star rating input
function resetStarRating() {
    const starInputs = document.querySelectorAll('.stars-input input');
    starInputs.forEach(input => input.checked = false);
    document.querySelector('.rating-text').textContent = 'Pilih rating';
}

// Update rating text when stars are clicked
const starInputs = document.querySelectorAll('.stars-input input');
starInputs.forEach(input => {
    input.addEventListener('change', () => {
        const rating = input.value;
        const ratingText = document.querySelector('.rating-text');
        const ratingTexts = {
            '1': 'Sangat Buruk',
            '2': 'Buruk', 
            '3': 'Cukup',
            '4': 'Baik',
            '5': 'Sangat Baik'
        };
        ratingText.textContent = ratingTexts[rating] || 'Pilih rating';
    });
});

// Admin mode toggle (hidden feature - triple click on admin panel)
const adminPanel = document.querySelector('.admin-panel');
if (adminPanel) {
    let clickCount = 0;
    adminPanel.addEventListener('click', () => {
        clickCount++;
        if (clickCount === 3) {
            isAdminMode = !isAdminMode;
            toggleAdminMode();
            clickCount = 0;
            showNotification(isAdminMode ? 'Mode Admin Aktif' : 'Mode Admin Nonaktif', 'info');
        }
        setTimeout(() => { clickCount = 0; }, 2000);
    });
}

// Toggle admin mode
function toggleAdminMode() {
    const deleteButtons = document.querySelectorAll('.delete-review-btn');
    deleteButtons.forEach(btn => {
        btn.style.display = isAdminMode ? 'block' : 'none';
    });
}

// Add delete functionality to existing reviews
document.querySelectorAll('.delete-review-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        if (confirm('Apakah Anda yakin ingin menghapus review ini?')) {
            btn.closest('.review-item').remove();
            showNotification('Review berhasil dihapus!', 'success');
            updateReviewStats();
        }
    });
});

// Update review statistics
function updateReviewStats() {
    const reviews = document.querySelectorAll('.review-item');
    const reviewCount = document.querySelector('.review-count');
    if (reviewCount) {
        reviewCount.textContent = `Dari ${reviews.length} review`;
    }
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notif => notif.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #3E94A5, #2A7A87)' : 
                     type === 'error' ? 'linear-gradient(135deg, #C9231F, #A91E1B)' : 
                     'linear-gradient(135deg, #3E94A5, #2A7A87)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 8px 25px rgba(62, 148, 165, 0.25);
        border: 1px solid rgba(255, 255, 255, 0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 320px;
        font-family: 'Poppins', sans-serif;
    `;
    
    // Add notification content styles
    const style = document.createElement('style');
    style.textContent = `
        .notification-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
        }
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 1.2rem;
            cursor: pointer;
            padding: 0;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .notification-close:hover {
            opacity: 0.8;
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    const autoRemove = setTimeout(() => {
        removeNotification(notification);
    }, 5000);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        clearTimeout(autoRemove);
        removeNotification(notification);
    });
}

function removeNotification(notification) {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Initialize Google Map when page loads
window.addEventListener('load', () => {
    if (typeof google !== 'undefined' && google.maps) {
        initMap();
    }
});

// Menu item hover effects
menuItems.forEach(item => {
    const image = item.querySelector('.menu-image img');
    const info = item.querySelector('.menu-info');
    
    item.addEventListener('mouseenter', () => {
        info.style.transform = 'translateY(-5px)';
        info.style.transition = 'transform 0.3s ease';
    });
    
    item.addEventListener('mouseleave', () => {
        info.style.transform = 'translateY(0)';
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
const animateElements = document.querySelectorAll('.about-item, .menu-item, .review-item, .location-item');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Phone number click to call functionality
const phoneLinks = document.querySelectorAll('[href^="tel:"]');
phoneLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const phoneNumber = link.textContent.trim();
        if (navigator.userAgent.includes('Mobile')) {
            // Mobile device - allow default behavior
            return true;
        } else {
            // Desktop - show notification
            e.preventDefault();
            showNotification(`Nomor telepon: ${phoneNumber}`, 'info');
        }
    });
});

// Email links
const emailLinks = document.querySelectorAll('[href^="mailto:"]');
emailLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const email = link.textContent.trim();
        showNotification(`Email: ${email}`, 'info');
    });
});

// Social media links placeholder functionality
const socialLinks = document.querySelectorAll('.social-link');
socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const platform = link.querySelector('i').className.includes('facebook') ? 'Facebook' : 
                        link.querySelector('i').className.includes('instagram') ? 'Instagram' : 
                        link.querySelector('i').className.includes('whatsapp') ? 'WhatsApp' : 
                        link.querySelector('i').className.includes('tiktok') ? 'TikTok' : 'Social Media';
        
        showNotification(`Ikuti kami di ${platform}!`, 'info');
    });
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Close mobile menu with Escape key
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.style.transform = 'rotate(0deg) scaleX(1)';
        });
    }
});

// Performance optimization - debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounced scroll handler
const debouncedScrollHandler = debounce(() => {
    updateActiveNavLink();
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Set initial active nav link
    updateActiveNavLink();
    
    // Add loading complete class to body
    document.body.classList.add('loaded');
    
    // Mobile-specific enhancements
    initMobileEnhancements();
    
    console.log('Warung Nasi Raosan Deui website loaded successfully!');
});

// Mobile-specific enhancements
function initMobileEnhancements() {
    // Add mobile touch feedback
    const touchElements = document.querySelectorAll('.btn, .menu-tab, .nav-link, .menu-item, .location-item');
    
    touchElements.forEach(element => {
        element.addEventListener('touchstart', () => {
            element.style.transform = 'scale(0.98)';
        });
        
        element.addEventListener('touchend', () => {
            element.style.transform = '';
        });
        
        element.addEventListener('touchcancel', () => {
            element.style.transform = '';
        });
    });

    // Mobile viewport height fix for iOS Safari
    const setVH = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    setVH();
    window.addEventListener('resize', debounce(setVH, 100));
    window.addEventListener('orientationchange', () => {
        setTimeout(setVH, 500);
    });

    // Mobile-optimized scroll to top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top-mobile';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 18px;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(62, 148, 165, 0.3);
        transform: translateY(100px);
        transition: all 0.3s ease;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        touch-action: manipulation;
    `;

    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.transform = 'translateY(0)';
        } else {
            scrollToTopBtn.style.transform = 'translateY(100px)';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Mobile form enhancements
    const formInputs = document.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        // Auto-resize textarea on mobile
        if (input.tagName === 'TEXTAREA') {
            input.addEventListener('input', () => {
                input.style.height = 'auto';
                input.style.height = input.scrollHeight + 'px';
            });
        }

        // Add mobile focus effects
        input.addEventListener('focus', () => {
            if (window.innerWidth <= 768) {
                input.parentElement.style.transform = 'scale(1.02)';
                input.parentElement.style.transition = 'transform 0.2s ease';
            }
        });

        input.addEventListener('blur', () => {
            input.parentElement.style.transform = '';
        });
    });

    // Mobile device detection and optimization
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        // Add mobile-specific class
        document.body.classList.add('mobile-device');
        
        // Optimize images for mobile
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.loading = 'lazy';
            img.style.transition = 'opacity 0.3s ease';
            
            if (!img.complete) {
                img.style.opacity = '0';
                img.onload = () => {
                    img.style.opacity = '1';
                };
            }
        });

        // Add mobile performance optimizations
        const style = document.createElement('style');
        style.textContent = `
            @media (max-width: 768px) {
                * {
                    -webkit-tap-highlight-color: transparent;
                }
                
                .mobile-device .btn:active,
                .mobile-device .menu-tab:active,
                .mobile-device .nav-link:active {
                    transform: scale(0.95);
                }
                
                .mobile-device input,
                .mobile-device textarea {
                    font-size: 16px !important;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Enhanced swipe detection for reviews on mobile
    if (window.innerWidth <= 768) {
        const reviewItems = document.querySelectorAll('.review-item');
        reviewItems.forEach(item => {
            let startX = 0;
            let startY = 0;
            let distX = 0;
            let distY = 0;

            item.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
            });

            item.addEventListener('touchmove', (e) => {
                if (!startX || !startY) return;
                
                distX = e.touches[0].clientX - startX;
                distY = e.touches[0].clientY - startY;
                
                // Only allow vertical scrolling
                if (Math.abs(distX) > Math.abs(distY)) {
                    e.preventDefault();
                }
            });

            item.addEventListener('touchend', () => {
                startX = 0;
                startY = 0;
                distX = 0;
                distY = 0;
            });
        });
    }
} 