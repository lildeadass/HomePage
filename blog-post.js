// Load and display blog post
async function loadBlogPost() {
    try {
        // Get post ID from URL parameter
        const urlParams = new URLSearchParams(window.location.search);
        const postId = urlParams.get('id');
        
        if (!postId) {
            showError('No post ID specified');
            return;
        }
        
        // Load blog posts data
        const response = await fetch('blog-posts.json');
        const data = await response.json();
        
        // Find the specific post
        const post = data.posts.find(p => p.id === postId);
        
        if (!post) {
            showError('Post not found');
            return;
        }
        
        // Update page content
        document.title = `${post.title} - Lil Deadass Homepage`;
        document.getElementById('postTitle').textContent = post.title;
        document.getElementById('postDate').textContent = `Posted: ${post.date}`;
        document.getElementById('postAuthor').textContent = post.author;
        
        // Convert content to HTML (handle line breaks)
        const contentHtml = post.content.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>');
        document.getElementById('postContent').innerHTML = `<p>${contentHtml}</p>`;
        
    } catch (error) {
        console.error('Error loading blog post:', error);
        showError('Error loading blog post');
    }
}

function showError(message) {
    document.getElementById('postTitle').textContent = 'Error';
    document.getElementById('postContent').innerHTML = `<p>${message}</p>`;
}

// Load post when page loads
document.addEventListener('DOMContentLoaded', loadBlogPost); 