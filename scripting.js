// Load the JSON file containing the video data
fetch('youtube.json')
    .then(response => response.json())
    .then(data => {
        const videosContainer = document.getElementById('youtube');

        // Loop through the video data and generate YouTube embed codes
        data.videos.forEach(video => {
            const videoDiv = document.createElement('div');
            videoDiv.className = 'video';

            const iframe = document.createElement('iframe');
            iframe.width = 'auto';
            iframe.height = 'auto';
            iframe.src = `https://www.youtube.com/embed/${video.id}`;
            iframe.frameBorder = '0';
            iframe.allowFullscreen = true;

            videoDiv.appendChild(iframe);
            videosContainer.appendChild(videoDiv);
        });
    })
    .catch(error => console.error('Error loading videos:', error));

    // Get references to the elements
