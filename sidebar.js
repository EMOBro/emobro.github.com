export function initSidebar() {
    // Use optional chaining and add null checks
    const sidebarToggle = document.querySelector('.sidebar-toggle-header');
    const sidebar = document.querySelector('.sidebar');
    const sidebarClose = document.querySelector('.sidebar-close');
    const sidebarOverlay = document.querySelector('.sidebar-overlay');

    // Time display element
    const timeDisplay = document.createElement('div');
    timeDisplay.classList.add('sidebar-time');
    
    // Enhanced time display with more dynamic styling
    timeDisplay.style.cssText = `
        text-align: center;
        font-size: 1.2rem;
        color: var(--color-primary);
        margin-bottom: 20px;
        font-weight: bold;
        background: rgba(255,255,255,0.3);
        padding: 10px;
        border-radius: 8px;
        backdrop-filter: blur(10px);
        animation: subtle-float 3s ease-in-out infinite alternate;
        box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        transition: all 0.3s ease;
    `;

    // Function to update time
    function updateTime() {
        const now = new Date();
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit',
            hour12: false 
        };
        timeDisplay.textContent = now.toLocaleString('zh-CN', options);
    }

    // Only add event listeners if all elements exist
    if (sidebarToggle && sidebar && sidebarClose && sidebarOverlay) {
        // Insert time display at the top of the sidebar
        const sidebarHeader = sidebar.querySelector('.sidebar-header');
        if (sidebarHeader) {
            sidebarHeader.insertAdjacentElement('afterend', timeDisplay);
            
            // Update time immediately and then every second
            updateTime();
            setInterval(updateTime, 1000);
        }

        // Optional: Add hover effect to time display
        timeDisplay.addEventListener('mouseenter', () => {
            timeDisplay.style.transform = 'scale(1.05)';
        });

        timeDisplay.addEventListener('mouseleave', () => {
            timeDisplay.style.transform = 'scale(1)';
        });

        // Toggle sidebar with improved animation and toggle button visibility
        sidebarToggle.addEventListener('click', (event) => {
            event.stopPropagation();
            sidebar.classList.add('sidebar-open');
            sidebarOverlay.classList.add('sidebar-open');
        });

        // Close sidebar
        sidebarClose.addEventListener('click', () => {
            sidebar.classList.remove('sidebar-open');
            sidebarOverlay.classList.remove('sidebar-open');
        });

        // Close sidebar when clicking overlay
        sidebarOverlay.addEventListener('click', () => {
            sidebar.classList.remove('sidebar-open');
            sidebarOverlay.classList.remove('sidebar-open');
        });
    } else {
        console.warn('One or more sidebar elements are missing');
    }
}