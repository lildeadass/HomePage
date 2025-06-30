// If you want to add interactivity in the future, you can add your code here.
// Currently, this script does nothing and only serves as a placeholder. 

document.addEventListener('DOMContentLoaded', function () {
    // Social link fake window logic
    const socialLinks = document.querySelectorAll('.social-links a');
    const fakeWindow = document.getElementById('fakeWindow');
    const windowClose = document.getElementById('windowClose');
    const windowOpen = document.getElementById('windowOpen');
    const windowText = document.getElementById('windowText');
    const windowTitle = document.getElementById('windowTitle');

    let currentLink = '';

    socialLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            currentLink = link.getAttribute('data-link');
            
            // Set dynamic title based on the link
            if (currentLink.includes('x.com')) {
                windowTitle.textContent = 'Twitter';
            } else if (currentLink.includes('github.com')) {
                windowTitle.textContent = 'GitHub';
            } else if (currentLink.includes('reddit.com')) {
                windowTitle.textContent = 'Reddit';
            } else if (currentLink.includes('instagram.com')) {
                windowTitle.textContent = 'Instagram';
            } else if (currentLink.includes('soundcloud.com')) {
                windowTitle.textContent = 'SoundCloud';
            } else {
                windowTitle.textContent = 'Social Link';
            }
            
            windowText.textContent = currentLink;
            fakeWindow.style.display = 'block';
        });
    });

    windowClose.addEventListener('click', function () {
        fakeWindow.style.display = 'none';
    });

    windowOpen.addEventListener('click', function () {
        if (currentLink) {
            window.open(currentLink, '_blank');
        }
    });

    // Optional: Close window on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && fakeWindow.style.display === 'block') {
            fakeWindow.style.display = 'none';
        }
    });

    // Load blog posts
    loadBlogPosts();
});

// Load and display blog posts
async function loadBlogPosts() {
    try {
        const response = await fetch('blog-posts.json');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        const blogContainer = document.getElementById('blogContainer');
        
        // Sort posts by date (newest first)
        const sortedPosts = data.posts.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        // Display only the 3 most recent posts
        const recentPosts = sortedPosts.slice(0, 3);
        
        blogContainer.innerHTML = recentPosts.map(post => `
            <article class="blog-post">
                <h3 class="post-title">${post.title}</h3>
                <div class="post-meta">Posted: ${post.date}</div>
                <p class="post-excerpt">${post.excerpt}</p>
                <a href="blog-post.html?id=${post.id}" class="read-more">Read More →</a>
            </article>
        `).join('');
        
    } catch (error) {
        console.error('Error loading blog posts:', error);
        document.getElementById('blogContainer').innerHTML = `
            <article class="blog-post">
                <h3 class="post-title">Welcome to My Digital Space</h3>
                <div class="post-meta">Posted: 2024-01-15</div>
                <p class="post-excerpt">
                    Hey there! Welcome to my retro-styled digital homepage. This is where I share my thoughts on music, tech, and whatever else crosses my mind...
                </p>
                <a href="#" class="read-more">Read More →</a>
            </article>
            
            <article class="blog-post">
                <h3 class="post-title">Latest Music Production</h3>
                <div class="post-meta">Posted: 2024-01-10</div>
                <p class="post-excerpt">
                    Just finished working on some new tracks. Check out the SoundCloud player on the left to hear what I've been cooking up...
                </p>
                <a href="#" class="read-more">Read More →</a>
            </article>
            
            <article class="blog-post">
                <h3 class="post-title">Building This Site</h3>
                <div class="post-meta">Posted: 2024-01-05</div>
                <p class="post-excerpt">
                    Decided to build this retro-styled homepage as a fun project. Love the old-school computer aesthetic...
                </p>
                <a href="#" class="read-more">Read More →</a>
            </article>
        `;
    }
} 