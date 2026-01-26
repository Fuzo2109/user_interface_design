// MENSWEAR - Main JavaScript File
// Handles all interactive functionality across the website

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ==================== SEARCH BAR DROPDOWN ====================
    const searchToggle = document.getElementById('searchToggle');
    
    // Create search dropdown if it doesn't exist
    if (searchToggle && !document.getElementById('searchDropdown')) {
        const searchDropdown = document.createElement('div');
        searchDropdown.id = 'searchDropdown';
        searchDropdown.className = 'search-dropdown';
        searchDropdown.innerHTML = `
            <div class="search-dropdown-content">
                <input type="text" id="searchInput" class="search-input" placeholder="Search for products..." autocomplete="off">
                <button class="search-btn" id="searchBtn">
                    <i class="fas fa-search"></i> Search
                </button>
            </div>
            <div class="search-suggestions" id="searchSuggestions">
                <div class="suggestion-item">Premium Cotton T-Shirt</div>
                <div class="suggestion-item">Oxford Classic Shirt</div>
                <div class="suggestion-item">Waterproof Bomber Jacket</div>
                <div class="suggestion-item">Slim Fit Jeans</div>
            </div>
        `;
        
        // Add styles for search dropdown
        if (!document.getElementById('searchDropdownStyles')) {
            const style = document.createElement('style');
            style.id = 'searchDropdownStyles';
            style.textContent = `
                .search-dropdown {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    background: white;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
                    padding: 20px;
                    z-index: 9999;
                    display: none;
                    animation: slideDown 0.3s ease;
                }
                
                .search-dropdown.active {
                    display: block;
                }
                
                @keyframes slideDown {
                    from {
                        transform: translateY(-100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
                
                .search-dropdown-content {
                    max-width: 800px;
                    margin: 0 auto;
                    display: flex;
                    gap: 10px;
                }
                
                .search-input {
                    flex: 1;
                    padding: 15px 20px;
                    border: 2px solid var(--primary-color, #2c3e50);
                    border-radius: 50px;
                    font-size: 16px;
                    outline: none;
                    transition: all 0.3s ease;
                }
                
                .search-input:focus {
                    border-color: var(--accent-color, #e74c3c);
                    box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
                }
                
                .search-btn {
                    padding: 15px 30px;
                    background: var(--accent-color, #e74c3c);
                    color: white;
                    border: none;
                    border-radius: 50px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .search-btn:hover {
                    background: var(--accent-hover, #c0392b);
                    transform: translateY(-2px);
                }
                
                .search-suggestions {
                    max-width: 800px;
                    margin: 20px auto 0;
                    display: none;
                }
                
                .search-suggestions.active {
                    display: block;
                }
                
                .suggestion-item {
                    padding: 12px 20px;
                    border-bottom: 1px solid #eee;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                
                .suggestion-item:hover {
                    background: #f8f9fa;
                    padding-left: 25px;
                    color: var(--accent-color, #e74c3c);
                }
                
                @media (max-width: 768px) {
                    .search-dropdown {
                        padding: 15px;
                    }
                    
                    .search-dropdown-content {
                        flex-direction: column;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(searchDropdown);
        
        // Toggle search dropdown
        searchToggle.addEventListener('click', function() {
            searchDropdown.classList.toggle('active');
            if (searchDropdown.classList.contains('active')) {
                document.getElementById('searchInput').focus();
            }
        });
        
        // Show suggestions when typing
        const searchInput = document.getElementById('searchInput');
        const searchSuggestions = document.getElementById('searchSuggestions');
        
        searchInput.addEventListener('input', function() {
            if (this.value.length > 0) {
                searchSuggestions.classList.add('active');
            } else {
                searchSuggestions.classList.remove('active');
            }
        });
        
        // Handle search
        const searchBtn = document.getElementById('searchBtn');
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        
        function performSearch() {
            const query = searchInput.value.trim();
            if (query) {
                alert(`Searching for: "${query}"\n\nSearch results will be displayed here.`);
                searchDropdown.classList.remove('active');
                searchInput.value = '';
                searchSuggestions.classList.remove('active');
            }
        }
        
        // Click suggestion
        document.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', function() {
                searchInput.value = this.textContent;
                performSearch();
            });
        });
        
        // Close search when clicking outside
        document.addEventListener('click', function(e) {
            if (!searchDropdown.contains(e.target) && e.target !== searchToggle && !searchToggle.contains(e.target)) {
                searchDropdown.classList.remove('active');
            }
        });
    }
    
    // ==================== ACCOUNT POPUP ====================
    const accountToggle = document.getElementById('accountToggle');
    
    // Create account popup if it doesn't exist
    if (accountToggle && !document.getElementById('accountPopup')) {
        const accountPopup = document.createElement('div');
        accountPopup.id = 'accountPopup';
        accountPopup.className = 'account-popup';
        accountPopup.innerHTML = `
            <div class="popup-overlay"></div>
            <div class="popup-content">
                <button class="popup-close" id="closeAccountPopup">
                    <i class="fas fa-times"></i>
                </button>
                <div class="popup-header">
                    <i class="fas fa-user-circle" style="font-size: 48px; color: var(--accent-color, #e74c3c);"></i>
                    <h2>My Account</h2>
                </div>
                <div class="popup-body">
                    <div class="account-options">
                        <a href="#" class="account-option">
                            <i class="fas fa-user"></i>
                            <div>
                                <h3>Profile</h3>
                                <p>View and edit your profile</p>
                            </div>
                        </a>
                        <a href="#" class="account-option">
                            <i class="fas fa-box"></i>
                            <div>
                                <h3>Orders</h3>
                                <p>Track and manage your orders</p>
                            </div>
                        </a>
                        <a href="wishlist.html" class="account-option">
                            <i class="fas fa-heart"></i>
                            <div>
                                <h3>Wishlist</h3>
                                <p>View your saved items</p>
                            </div>
                        </a>
                        <a href="#" class="account-option">
                            <i class="fas fa-map-marker-alt"></i>
                            <div>
                                <h3>Addresses</h3>
                                <p>Manage shipping addresses</p>
                            </div>
                        </a>
                        <a href="#" class="account-option">
                            <i class="fas fa-credit-card"></i>
                            <div>
                                <h3>Payment Methods</h3>
                                <p>Manage payment options</p>
                            </div>
                        </a>
                        <a href="#" class="account-option">
                            <i class="fas fa-cog"></i>
                            <div>
                                <h3>Settings</h3>
                                <p>Account preferences</p>
                            </div>
                        </a>
                    </div>
                    <div class="popup-footer">
                        <button class="btn-primary" onclick="alert('Login feature coming soon!')">
                            <i class="fas fa-sign-in-alt"></i> Login
                        </button>
                        <button class="btn-secondary" onclick="alert('Register feature coming soon!')">
                            <i class="fas fa-user-plus"></i> Register
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        // Add styles for account popup
        if (!document.getElementById('accountPopupStyles')) {
            const style = document.createElement('style');
            style.id = 'accountPopupStyles';
            style.textContent = `
                .account-popup {
                    display: none;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 10000;
                }
                
                .account-popup.active {
                    display: block;
                }
                
                .popup-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0,0,0,0.7);
                    animation: fadeIn 0.3s ease;
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                .popup-content {
                    position: relative;
                    max-width: 600px;
                    max-height: 90vh;
                    margin: 5vh auto;
                    background: white;
                    border-radius: 20px;
                    padding: 40px;
                    animation: slideUp 0.3s ease;
                    overflow-y: auto;
                }
                
                @keyframes slideUp {
                    from {
                        transform: translateY(50px);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
                
                .popup-close {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    width: 40px;
                    height: 40px;
                    border: none;
                    background: #f8f9fa;
                    border-radius: 50%;
                    font-size: 20px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .popup-close:hover {
                    background: var(--accent-color, #e74c3c);
                    color: white;
                    transform: rotate(90deg);
                }
                
                .popup-header {
                    text-align: center;
                    margin-bottom: 30px;
                }
                
                .popup-header h2 {
                    margin-top: 15px;
                    font-size: 28px;
                    color: var(--primary-color, #2c3e50);
                }
                
                .account-options {
                    display: grid;
                    gap: 15px;
                    margin-bottom: 30px;
                }
                
                .account-option {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    padding: 20px;
                    background: #f8f9fa;
                    border-radius: 12px;
                    text-decoration: none;
                    color: inherit;
                    transition: all 0.3s ease;
                }
                
                .account-option:hover {
                    background: var(--accent-color, #e74c3c);
                    color: white;
                    transform: translateX(5px);
                }
                
                .account-option i {
                    font-size: 24px;
                    width: 40px;
                    text-align: center;
                }
                
                .account-option h3 {
                    margin: 0 0 5px 0;
                    font-size: 16px;
                }
                
                .account-option p {
                    margin: 0;
                    font-size: 13px;
                    opacity: 0.8;
                }
                
                .popup-footer {
                    display: flex;
                    gap: 15px;
                    padding-top: 20px;
                    border-top: 2px solid #eee;
                }
                
                .btn-primary, .btn-secondary {
                    flex: 1;
                    padding: 15px;
                    border: none;
                    border-radius: 10px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .btn-primary {
                    background: var(--accent-color, #e74c3c);
                    color: white;
                }
                
                .btn-primary:hover {
                    background: var(--accent-hover, #c0392b);
                    transform: translateY(-2px);
                }
                
                .btn-secondary {
                    background: white;
                    color: var(--primary-color, #2c3e50);
                    border: 2px solid var(--primary-color, #2c3e50);
                }
                
                .btn-secondary:hover {
                    background: var(--primary-color, #2c3e50);
                    color: white;
                }
                
                @media (max-width: 768px) {
                    .popup-content {
                        margin: 0;
                        max-height: 100vh;
                        border-radius: 0;
                        padding: 30px 20px;
                    }
                    
                    .popup-footer {
                        flex-direction: column;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(accountPopup);
        
        // Toggle account popup
        accountToggle.addEventListener('click', function() {
            accountPopup.classList.add('active');
        });
        
        // Close popup
        const closeBtn = document.getElementById('closeAccountPopup');
        const overlay = accountPopup.querySelector('.popup-overlay');
        
        closeBtn.addEventListener('click', function() {
            accountPopup.classList.remove('active');
        });
        
        overlay.addEventListener('click', function() {
            accountPopup.classList.remove('active');
        });
        
        // Prevent closing when clicking popup content
        accountPopup.querySelector('.popup-content').addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('change', function() {
            if (this.checked) {
                navMenu.style.display = 'flex';
            } else {
                navMenu.style.display = '';
            }
        });
    }
    
    // Add to Cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        if (!button.hasAttribute('onclick')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                alert('Product added to cart!');
                
                // Update cart badge
                const cartBadge = document.querySelector('.cart-badge');
                if (cartBadge) {
                    const currentCount = parseInt(cartBadge.textContent) || 0;
                    cartBadge.textContent = currentCount + 1;
                }
            });
        }
    });
    
    // Wishlist functionality
    const wishlistButtons = document.querySelectorAll('.product-action-btn[aria-label*="wishlist"], .product-action-btn[aria-label*="Yêu thích"]');
    wishlistButtons.forEach(button => {
        if (!button.hasAttribute('onclick') && !button.href) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const icon = this.querySelector('i');
                if (icon.classList.contains('far')) {
                    icon.classList.remove('far');
                    icon.classList.add('fas');
                    alert('Added to wishlist!');
                } else {
                    icon.classList.remove('fas');
                    icon.classList.add('far');
                    alert('Removed from wishlist!');
                }
            });
        }
    });
    
    // Search functionality
    const searchButtons = document.querySelectorAll('.nav-icon[aria-label*="Search"], .nav-icon[aria-label*="Tìm kiếm"]');
    searchButtons.forEach(button => {
        if (!button.hasAttribute('onclick')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const searchTerm = prompt('Enter search term:');
                if (searchTerm) {
                    alert(`Searching for: ${searchTerm}\n(Search feature coming soon!)`);
                }
            });
        }
    });
    
    // Newsletter form
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        if (!form.hasAttribute('onsubmit')) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const emailInput = this.querySelector('input[type="email"]');
                if (emailInput && emailInput.value) {
                    alert(`Thank you for subscribing with ${emailInput.value}!`);
                    emailInput.value = '';
                }
            });
        }
    });
    
    // Contact form
    const contactForms = document.querySelectorAll('form');
    contactForms.forEach(form => {
        if (form.querySelector('textarea') && !form.classList.contains('newsletter-form')) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your message! We will get back to you within 24 hours.');
                form.reset();
            });
        }
    });
    
    // Quantity controls in cart
    const qtyButtons = document.querySelectorAll('.qty-btn');
    qtyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.parentElement.querySelector('.qty-input');
            let value = parseInt(input.value) || 1;
            
            if (this.textContent === '+' || this.innerHTML.includes('plus')) {
                value++;
            } else if (value > 1) {
                value--;
            }
            
            input.value = value;
            updateCartTotal();
        });
    });
    
    // Update cart total
    function updateCartTotal() {
        const cartItems = document.querySelectorAll('.cart-item');
        let subtotal = 0;
        
        cartItems.forEach(item => {
            const price = parseFloat(item.querySelector('.item-price')?.textContent.replace(/[^0-9.]/g, '')) || 0;
            const qty = parseInt(item.querySelector('.qty-input')?.value) || 1;
            const itemSubtotal = price * qty;
            
            const subtotalElement = item.querySelector('.item-subtotal');
            if (subtotalElement) {
                subtotalElement.textContent = `$${itemSubtotal.toFixed(2)}`;
            }
            
            subtotal += itemSubtotal;
        });
        
        // Update summary
        const subtotalElement = document.getElementById('cart-subtotal');
        const totalElement = document.getElementById('cart-total');
        
        if (subtotalElement) {
            subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        }
        
        if (totalElement) {
            const shipping = subtotal > 50 ? 0 : 5;
            const total = subtotal + shipping;
            totalElement.textContent = `$${total.toFixed(2)}`;
            
            const shippingElement = document.getElementById('cart-shipping');
            if (shippingElement) {
                shippingElement.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
            }
        }
    }
    
    // Remove item from cart
    const removeButtons = document.querySelectorAll('.remove-item-btn, .item-remove');
    removeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm('Remove this item from cart?')) {
                const cartItem = this.closest('.cart-item');
                if (cartItem) {
                    cartItem.remove();
                    updateCartTotal();
                    alert('Item removed from cart');
                }
            }
        });
    });
    
    // Product filters
    const filterCheckboxes = document.querySelectorAll('.filter-option input[type="checkbox"], .filter-option input[type="radio"]');
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // In a real application, this would filter products
            console.log('Filter changed:', this.name, this.checked);
        });
    });
    
    // Color options
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            colorOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    // View toggle (grid/list)
    const viewButtons = document.querySelectorAll('.view-btn');
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            viewButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const productGrid = document.querySelector('.product-grid');
            if (productGrid) {
                if (this.innerHTML.includes('list')) {
                    productGrid.style.gridTemplateColumns = '1fr';
                } else {
                    productGrid.style.gridTemplateColumns = '';
                }
            }
        });
    });
    
    // Sort products
    const sortSelect = document.querySelector('.sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            console.log('Sort by:', this.value);
            alert(`Sorting by: ${this.options[this.selectedIndex].text}\n(Feature coming soon!)`);
        });
    }
    
    // Product image gallery
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.main-image img');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            if (mainImage) {
                const newSrc = this.querySelector('img').src;
                mainImage.src = newSrc;
            }
        });
    });
    
    // Size selection
    const sizeButtons = document.querySelectorAll('.size-btn');
    sizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            sizeButtons.forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#!') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Initialize cart total on cart page
    if (document.querySelector('.cart-container')) {
        updateCartTotal();
    }
    
    // Mobile filter toggle
    const filterToggle = document.getElementById('filterToggle');
    const filterSidebar = document.getElementById('filterSidebar');
    const closeFilters = document.getElementById('closeFilters');
    
    if (filterToggle && filterSidebar) {
        filterToggle.addEventListener('click', function() {
            filterSidebar.classList.add('active');
        });
    }
    
    if (closeFilters && filterSidebar) {
        closeFilters.addEventListener('click', function() {
            filterSidebar.classList.remove('active');
        });
    }
    
    console.log('MENSWEAR website initialized successfully!');
});

// Utility function to format currency
function formatCurrency(amount) {
    return `$${parseFloat(amount).toFixed(2)}`;
}

// Add animation class when elements come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all product cards and feature cards
document.querySelectorAll('.product-card, .feature-card, .category-card').forEach(card => {
    observer.observe(card);
});

// ==================== POPUP FUNCTIONALITY ====================
// Search Popup
const searchBtn = document.getElementById('searchBtn');
const searchPopup = document.getElementById('searchPopup');
const closeSearchPopup = document.getElementById('closeSearchPopup');

if (searchBtn && searchPopup && closeSearchPopup) {
    // Open search popup
    searchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        searchPopup.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        
        // Focus on search input
        setTimeout(() => {
            const searchInput = document.getElementById('searchInput');
            if (searchInput) searchInput.focus();
        }, 100);
    });
    
    // Close search popup
    closeSearchPopup.addEventListener('click', function() {
        searchPopup.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    });
    
    // Close on overlay click
    searchPopup.addEventListener('click', function(e) {
        if (e.target === searchPopup) {
            searchPopup.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Handle search button click
    const searchButton = searchPopup.querySelector('.search-button');
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            const searchInput = document.getElementById('searchInput');
            if (searchInput && searchInput.value.trim()) {
                alert('Đang tìm kiếm: ' + searchInput.value + '\n\nTính năng tìm kiếm sẽ được cập nhật sớm!');
            }
        });
    }
    
    // Handle Enter key in search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                if (searchInput.value.trim()) {
                    alert('Đang tìm kiếm: ' + searchInput.value + '\n\nTính năng tìm kiếm sẽ được cập nhật sớm!');
                }
            }
        });
    }
    
    // Handle tag clicks
    const tags = searchPopup.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.addEventListener('click', function() {
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.value = this.textContent;
                alert('Đang tìm kiếm: ' + this.textContent + '\n\nTính năng tìm kiếm sẽ được cập nhật sớm!');
            }
        });
    });
}

// Account Popup
const accountBtn = document.getElementById('accountBtn');
const accountPopup = document.getElementById('accountPopup');
const closeAccountPopup = document.getElementById('closeAccountPopup');

if (accountBtn && accountPopup && closeAccountPopup) {
    // Open account popup
    accountBtn.addEventListener('click', function(e) {
        e.preventDefault();
        accountPopup.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    // Close account popup
    closeAccountPopup.addEventListener('click', function() {
        accountPopup.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Close on overlay click
    accountPopup.addEventListener('click', function(e) {
        if (e.target === accountPopup) {
            accountPopup.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Handle account menu item clicks
    const accountMenuItems = accountPopup.querySelectorAll('.account-menu-item');
    accountMenuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // If it's not the wishlist link (which has href="wishlist.html"), prevent default and show alert
            if (!this.getAttribute('href') || this.getAttribute('href') === '#') {
                e.preventDefault();
                const itemText = this.querySelector('span').textContent;
                alert('Chức năng "' + itemText + '" sẽ được cập nhật sớm!');
            }
            // If it's wishlist link, let it navigate normally
        });
    });
}

// Close popups with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (searchPopup && searchPopup.classList.contains('active')) {
            searchPopup.classList.remove('active');
            document.body.style.overflow = '';
        }
        if (accountPopup && accountPopup.classList.contains('active')) {
            accountPopup.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});

