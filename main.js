document.getElementById('summarizeForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const videoId = document.getElementById('videoId').value.trim();
    const loadingDiv = document.getElementById('loading');
    const errorDiv = document.getElementById('error');
    const summaryDiv = document.getElementById('summary');
    const summaryPoints = document.getElementById('summaryPoints');
    const errorMessage = document.getElementById('errorMessage');

    // Show loading and hide other elements
    loadingDiv.classList.remove('hidden');
    errorDiv.classList.add('hidden');
    summaryDiv.classList.add('hidden');

    try {
        const response = await fetch('/summarize', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ videoId }),
        });

        const data = await response.json();

        if (response.ok) {
            summaryPoints.innerHTML = '';
            // Split the summary into bullet points and create list items
            const points = data.summary.split('\n').filter(point => point.trim());
            points.forEach(point => {
                const li = document.createElement('li');
                li.textContent = point.trim().replace(/^[-•]/, '').trim();
                li.className = 'mb-2';
                summaryPoints.appendChild(li);
            });
            summaryDiv.classList.remove('hidden');
        } else {
            throw new Error(data.error || 'An error occurred while processing the video');
        }
    } catch (error) {
        errorMessage.textContent = error.message;
        errorDiv.classList.remove('hidden');
    } finally {
        loadingDiv.classList.add('hidden');
    }
});

// Add input validation for YouTube URL/ID
document.getElementById('videoId').addEventListener('input', function(e) {
    const submitButton = document.querySelector('button[type="submit"]');
    const value = e.target.value.trim();
    
    // Basic validation for YouTube URL or video ID
    const isValid = value.length === 11 || // Direct video ID
                   value.includes('youtube.com/watch?v=') ||
                   value.includes('youtu.be/') ||
                   value.includes('youtube.com/embed/');
    
    submitButton.disabled = !isValid;
    submitButton.classList.toggle('opacity-50', !isValid);
});