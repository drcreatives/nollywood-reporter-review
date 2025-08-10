// Review Page JavaScript - The Nollywood Reporter

document.addEventListener('DOMContentLoaded', function() {
    // Comment form handling
    const commentForm = document.querySelector('.comment-form');
    const commentList = document.querySelector('.comment-list');
    
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[name="name"]').value;
            const email = this.querySelector('input[name="email"]').value;
            const comment = this.querySelector('textarea[name="comment"]').value;
            
            if (name && email && comment) {
                addComment(name, comment);
                this.reset();
            }
        });
    }
    
    function addComment(name, commentText) {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.innerHTML = `
            <strong>${escapeHtml(name)}</strong>
            <p>${escapeHtml(commentText)}</p>
        `;
        
        commentList.insertBefore(commentDiv, commentList.firstChild);
        
        // Add fade-in animation
        commentDiv.style.opacity = '0';
        commentDiv.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
            commentDiv.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            commentDiv.style.opacity = '1';
            commentDiv.style.transform = 'translateY(0)';
        }, 10);
    }
    
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    // Social sharing functionality
    const socialLinks = document.querySelectorAll('.social-share a');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const url = this.href;
            const width = 600;
            const height = 400;
            const left = (screen.width - width) / 2;
            const top = (screen.height - height) / 2;
            
            window.open(url, 'share', `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`);
        });
    });
    
    // CTA button functionality
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent.includes('Read More')) {
                // Navigate to reviews page (placeholder)
                alert('Navigating to more reviews...');
            } else if (this.textContent.includes('Watch Trailer')) {
                // Open trailer (placeholder)
                alert('Opening trailer...');
            }
        });
    });
    
    // Smooth scroll for anchor links (if any)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation to rating stars on page load
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        setTimeout(() => {
            star.style.animation = 'starPulse 0.5s ease-in-out';
        }, index * 100);
    });
});

// Add CSS animation for stars (injected via JavaScript)
const style = document.createElement('style');
style.textContent = `
    @keyframes starPulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
    }
    
    .comment {
        animation: slideIn 0.3s ease-out;
    }
    
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
