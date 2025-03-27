// Sample video data structure
const videos = [
    {
        title: "Video 1",
        url: "ps://mega.nz/embed/w8RVwT4J#VXAz0uaHI4O54UeJ3tPeuGho3onOy6iXEplq4h0AkuI",
        quality: ["1080p", "720p", "480p"],
    },
];

// Function to load the list of videos
function loadVideos() {
    const videoList = document.getElementById("videoList");
    videos.forEach((video, index) => {
        const li = document.createElement("li");
        li.textContent = video.title;
        li.onclick = () => loadVideo(index);
        videoList.appendChild(li);
    });
}

// Function to load a video
function loadVideo(index) {
    const video = videos[index];
    const videoSource = document.getElementById("videoSource");
    videoSource.src = video.url;
    document.getElementById("videoPlayer").load();
}

// Function to filter videos based on the search input
function searchVideo() {
    const input = document.getElementById("searchBar");
    const filter = input.value.toUpperCase();
    const list = document.getElementById("videoList");
    const items = list.getElementsByTagName("li");

    for (let i = 0; i < items.length; i++) {
        const txtValue = items[i].textContent || items[i].innerText;
        items[i].style.display = txtValue.toUpperCase().includes(filter) ? "" : "none";
    }
}

// Function to change video quality
function changeQuality() {
    const quality = document.getElementById("qualitySelect").value;
    const video = document.getElementById("videoPlayer");
    const videoSource = document.getElementById("videoSource");

    // You would need to update the URL for each quality based on your MEGA links
    if (quality === "1080p") {
        videoSource.src = "https://mega.nz/file/example1080p#link";
    } else if (quality === "720p") {
        videoSource.src = "https://mega.nz/file/example720p#link";
    } else if (quality === "480p") {
        videoSource.src = "https://mega.nz/file/example480p#link";
    } else if (quality === "4k") {
        videoSource.src = "https://mega.nz/file/example4k#link";
    }

    video.load();
}

// Load videos on page load
window.onload = loadVideos;
