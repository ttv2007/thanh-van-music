// Cloud Music World App Logic

// 1. Audio Playlist Definition
const playlist = [
    {
        title: "3107",
        artist: "Dươngg x Nâu x W⧸n",
        src: "assets/music/3107- Dươngg x Nâu x W⧸n ｜ Cover..mp3",
        duration: "01:12",
        lrc: "assets/lyrics/3107- Dươngg x Nâu x W⧸n ｜ Cover..lrc"
    },
    {
        title: "Anh mơ",
        artist: "Anh Khang",
        src: "assets/music/Anh mơ - Anh Khang ｜ Cover..mp3",
        duration: "01:41",
        lrc: "assets/lyrics/Anh mơ - Anh Khang ｜ Cover..lrc"
    },
    {
        title: "Bèo dạt mây trôi",
        artist: "Thuỳ Chi",
        src: "assets/music/Bèo dạt mây trôi - Thuỳ Chi ｜ Cover..mp3",
        duration: "01:32",
        lrc: "assets/lyrics/Bèo dạt mây trôi - Thuỳ Chi ｜ Cover..lrc"
    },
    {
        title: "Cha và con gái",
        artist: "Thuỳ Chi",
        src: "assets/music/Cha và con gái - Thuỳ Chi ｜ Cover..mp3",
        duration: "01:05",
        lrc: "assets/lyrics/Cha và con gái - Thuỳ Chi ｜ Cover..lrc"
    },
    {
        title: "Cho em gần anh thêm chút nữa",
        artist: "Hương Tràm",
        src: "assets/music/Cho em gần anh thêm chút nữa - Hương Tràm ｜ Cover..mp3",
        duration: "02:15",
        lrc: "assets/lyrics/Cho em gần anh thêm chút nữa - Hương Tràm ｜ Cover..lrc"
    },
    {
        title: "Con đường hạnh phúc",
        artist: "Thuỳ Chi",
        src: "assets/music/Con đường hạnh phúc - Thuỳ Chi ｜ Cover..mp3",
        duration: "02:13",
        lrc: "assets/lyrics/Con đường hạnh phúc - Thuỳ Chi ｜ Cover..lrc"
    },
    {
        title: "Còn tuổi nào cho em",
        artist: "Trịnh Công Sơn",
        src: "assets/music/Còn tuổi nào cho em - Trịnh Công Sơn ｜ Cover..mp3",
        duration: "02:28",
        lrc: "assets/lyrics/Còn tuổi nào cho em - Trịnh Công Sơn ｜ Cover..lrc"
    },
    {
        title: "Có em chờ",
        artist: "Min",
        src: "assets/music/Có em chờ - Min ｜ Cover..mp3",
        duration: "01:27",
        lrc: "assets/lyrics/Có em chờ - Min ｜ Cover..lrc"
    },
    {
        title: "Cầu hôn",
        artist: "Văn Mai Hương",
        src: "assets/music/Cầu hôn - Văn Mai Hương ｜ Cover..mp3",
        duration: "01:12",
        lrc: "assets/lyrics/Cầu hôn - Văn Mai Hương ｜ Cover..lrc"
    },
    {
        title: "Dù có cách xa",
        artist: "Đinh Mạnh Ninh",
        src: "assets/music/Dù có cách xa - Đinh Mạnh Ninh ｜ Cover..mp3",
        duration: "01:25",
        lrc: "assets/lyrics/Dù có cách xa - Đinh Mạnh Ninh ｜ Cover..lrc"
    },
    {
        title: "Em gái mưa",
        artist: "Hương Tràm",
        src: "assets/music/Em gái mưa - Hương Tràm ｜ Cover..mp3",
        duration: "02:05",
        lrc: "assets/lyrics/Em gái mưa - Hương Tràm ｜ Cover..lrc"
    },
    {
        title: "Em về tinh khôi",
        artist: "NS Quốc Bảo",
        src: "assets/music/Em về tinh khôi - NS Quốc Bảo ｜ Cover..mp3",
        duration: "03:01",
        lrc: "assets/lyrics/Em về tinh khôi - NS Quốc Bảo ｜ Cover..lrc"
    },
    {
        title: "Giấc mơ trưa",
        artist: "Thuỳ Chi",
        src: "assets/music/Giấc mơ trưa - Thuỳ Chi ｜ Cover..mp3",
        duration: "01:20",
        lrc: "assets/lyrics/Giấc mơ trưa - Thuỳ Chi ｜ Cover..lrc"
    },
    {
        title: "Hẹn một mai",
        artist: "Bùi Anh Tuấn",
        src: "assets/music/Hẹn một mai - Bùi Anh Tuấn ｜ Cover..mp3",
        duration: "01:42",
        lrc: "assets/lyrics/Hẹn một mai - Bùi Anh Tuấn ｜ Cover..lrc"
    },
    {
        title: "Mặt trời của em",
        artist: "Phương Ly",
        src: "assets/music/Mặt trời của em - Phương Ly｜ Cover..mp3",
        duration: "01:43",
        lrc: "assets/lyrics/Mặt trời của em - Phương Ly｜ Cover..lrc"
    },
    {
        title: "Nghe bài này để sưởi ấm",
        artist: "Kai Đinh",
        src: "assets/music/Nghe bài này để sưởi ấm  #kaidinh.mp3",
        duration: "00:28",
        lrc: "assets/lyrics/Nghe bài này để sưởi ấm  #kaidinh.lrc"
    },
    {
        title: "Ngày chưa giông bão",
        artist: "Bùi Lan Hương",
        src: "assets/music/Ngày chưa giông bão - Bùi Lan Hương ｜ Cover..mp3",
        duration: "01:27",
        lrc: "assets/lyrics/Ngày chưa giông bão - Bùi Lan Hương ｜ Cover..lrc"
    },
    {
        title: "Ngày mai nắng lên anh sẽ về",
        artist: "Anh Khang",
        src: "assets/music/Ngày mai nắng lên anh sẽ về - Anh Khang ｜ Cover..mp3",
        duration: "01:27",
        lrc: "assets/lyrics/Ngày mai nắng lên anh sẽ về - Anh Khang ｜ Cover..lrc"
    },
    {
        title: "Ngốc",
        artist: "Hương Tràm",
        src: "assets/music/Ngốc - Hương Tràm ｜ Cover..mp3",
        duration: "01:35",
        lrc: "assets/lyrics/Ngốc - Hương Tràm ｜ Cover..lrc"
    },
    {
        title: "Như những phút ban đầu",
        artist: "NS Tiến Minh",
        src: "assets/music/Như những phút ban đầu - NS Tiến Minh ｜ Cover..mp3",
        duration: "01:53",
        lrc: "assets/lyrics/Như những phút ban đầu - NS Tiến Minh ｜ Cover..lrc"
    },
    {
        title: "Nhắm mắt thấy mùa hè",
        artist: "Nguyên Hà",
        src: "assets/music/Nhắm mắt thấy mùa hè - Nguyên Hà｜Cover..mp3",
        duration: "01:36",
        lrc: "assets/lyrics/Nhắm mắt thấy mùa hè - Nguyên Hà｜Cover..lrc"
    },
    {
        title: "Nơi tình yêu kết thúc",
        artist: "NS Tiến Minh",
        src: "assets/music/Nơi tình yêu kết thúc - NS Tiến Minh ｜ Cover..mp3",
        duration: "01:45",
        lrc: "assets/lyrics/Nơi tình yêu kết thúc - NS Tiến Minh ｜ Cover..lrc"
    },
    {
        title: "Nấu ăn cho em",
        artist: "Đen ft. PiaLinh",
        src: "assets/music/Nấu ăn cho em - Đen ft. PiaLinh｜Cover..mp3",
        duration: "00:29",
        lrc: "assets/lyrics/Nấu ăn cho em - Đen ft. PiaLinh｜Cover..lrc"
    },
    {
        title: "Phía sau một cô gái",
        artist: "Soobin Hoàng Sơn",
        src: "assets/music/Phía sau một cô gái - Soobin Hoàng Sơn ｜ Cover..mp3",
        duration: "01:34",
        lrc: "assets/lyrics/Phía sau một cô gái - Soobin Hoàng Sơn ｜ Cover..lrc"
    },
    {
        title: "Rồi em sẽ gặp một chàng trai khác",
        artist: "HippoHappy",
        src: "assets/music/Rồi em sẽ gặp một chàng trai khác - HippoHappy ｜ Cover..mp3",
        duration: "01:16",
        lrc: "assets/lyrics/Rồi em sẽ gặp một chàng trai khác - HippoHappy ｜ Cover..lrc"
    },
    {
        title: "Sợ yêu",
        artist: "Thanh Hà",
        src: "assets/music/Sợ yêu - Thanh Hà ｜ Cover..mp3",
        duration: "01:46",
        lrc: "assets/lyrics/Sợ yêu - Thanh Hà ｜ Cover..lrc"
    },
    {
        title: "Ta có hẹn với tháng 5",
        artist: "Nguyên Hà",
        src: "assets/music/Ta có hẹn với tháng 5 - Nguyên Hà ｜ Cover..mp3",
        duration: "01:30",
        lrc: "assets/lyrics/Ta có hẹn với tháng 5 - Nguyên Hà ｜ Cover..lrc"
    },
    {
        title: "Trót yêu",
        artist: "Ái Phương",
        src: "assets/music/Trót yêu - Ái Phương ｜ Cover..mp3",
        duration: "01:33",
        lrc: "assets/lyrics/Trót yêu - Ái Phương ｜ Cover..lrc"
    },
    {
        title: "Trời giấu trời mang đi",
        artist: "Amee x ViruSs",
        src: "assets/music/Trời giấu trời mang đi - Amee x ViruSs｜Cover..mp3",
        duration: "01:34",
        lrc: "assets/lyrics/Trời giấu trời mang đi - Amee x ViruSs｜Cover..lrc"
    },
    {
        title: "Từ đó",
        artist: "Phan Mạnh Quỳnh",
        src: "assets/music/Từ đó - Phan Mạnh Quỳnh ｜ Cover..mp3",
        duration: "01:32",
        lrc: "assets/lyrics/Từ đó - Phan Mạnh Quỳnh ｜ Cover..lrc"
    },
    {
        title: "Vài câu nói có khiến người thay đổi ？",
        artist: "GreyD",
        src: "assets/music/Vài câu nói có khiến người thay đổi ？ - GreyD ｜ Cover..mp3",
        duration: "01:07",
        lrc: "assets/lyrics/Vài câu nói có khiến người thay đổi ？ - GreyD ｜ Cover..lrc"
    },
    {
        title: "Xe đạp",
        artist: "Thùy Chi",
        src: "assets/music/Xe đạp - Thùy Chi｜ Cover..mp3",
        duration: "01:26",
        lrc: "assets/lyrics/Xe đạp - Thùy Chi｜ Cover..lrc"
    },
    {
        title: "Yêu xa",
        artist: "Vũ Cát Tường",
        src: "assets/music/Yêu xa - Vũ Cát Tường ｜ Cover..mp3",
        duration: "01:40",
        lrc: "assets/lyrics/Yêu xa - Vũ Cát Tường ｜ Cover..lrc"
    },
    {
        title: "Ánh nắng của anh",
        artist: "Đức Phúc",
        src: "assets/music/Ánh nắng của anh - Đức Phúc ｜Cover..mp3",
        duration: "01:53",
        lrc: "assets/lyrics/Ánh nắng của anh - Đức Phúc ｜Cover..lrc"
    },
    {
        title: "Đừng ai nhắc về anh ấy",
        artist: "Trà My Idol",
        src: "assets/music/Đừng ai nhắc về anh ấy - Trà My Idol｜ Cover..mp3",
        duration: "01:52",
        lrc: "assets/lyrics/Đừng ai nhắc về anh ấy - Trà My Idol｜ Cover..lrc"
    },
    {
        title: "Ước gì",
        artist: "Mỹ Tâm",
        src: "assets/music/Ước gì - Mỹ Tâm ｜ Cover..mp3",
        duration: "02:13",
        lrc: "assets/lyrics/Ước gì - Mỹ Tâm ｜ Cover..lrc"
    }
];

let currentTrackIndex = 0;
let isPlaying = false;
let audioUnlocked = false;
let isShuffle = false;
let repeatMode = 'all'; // 'off' | 'all' | 'one'

// DOM Elements
const audio = document.getElementById("main-audio");
const playBtn = document.getElementById("play-btn");
const playIcon = document.getElementById("play-icon");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const shuffleBtn = document.getElementById("shuffle-btn");
const repeatBtn = document.getElementById("repeat-btn");
const currentTitle = document.getElementById("current-title");
const currentArtist = document.getElementById("current-artist");
const playerArt = document.getElementById("player-art");
const currentTimeLabel = document.getElementById("current-time");
const totalDurationLabel = document.getElementById("total-duration");
const progressBarBg = document.getElementById("progress-bar-bg");
const progressBarFill = document.getElementById("progress-bar-fill");
const progressHandle = document.getElementById("progress-handle");
const volumeBtn = document.getElementById("volume-btn");
const volumeIcon = document.getElementById("volume-icon");
const volumeSliderBg = document.getElementById("volume-slider-bg");
const volumeSliderFill = document.getElementById("volume-slider-fill");
const playlistToggleBtn = document.getElementById("playlist-toggle-btn");
const playlistPanel = document.getElementById("playlist-panel");
const playlistBackdrop = document.getElementById("playlist-backdrop");
const closePlaylistBtn = document.getElementById("close-playlist-btn");
const songListContainer = document.getElementById("song-list");


const introOverlay = document.getElementById("intro-overlay");
const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("start-btn");
const introVideo = document.getElementById("intro-video");
const fadeBlack = document.getElementById("fade-black");
const mainScene = document.getElementById("main-scene");
const playerWrapper = document.getElementById("player-wrapper");
const chibiContainer = document.getElementById("chibi-container");

// ==========================================================================
// 2. Initial Setup & Event Listeners
// ==========================================================================

function init() {
    // 1. Initialize Player Track
    loadTrack(currentTrackIndex);
    
    // 2. Generate Playlist UI
    buildPlaylistUI();

    // 3. Set initial volume (70%)
    audio.volume = 0.7;
    updateVolumeUI(0.7);

    // 4. Set initial repeat state (loop all is active by default)
    if (repeatBtn) {
        repeatBtn.classList.add("active");
        repeatBtn.title = "Lặp lại toàn bộ";
    }

    // 5. Show start button after loading resources
    setTimeout(() => {
        startBtn.classList.remove("hidden");
        startBtn.classList.add("show-btn");
    }, 800);
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}

// Event Listeners for Player controls
playBtn.addEventListener("click", togglePlay);
prevBtn.addEventListener("click", prevTrack);
nextBtn.addEventListener("click", nextTrack);

// Shuffle & Repeat Controls
shuffleBtn.addEventListener("click", () => {
    isShuffle = !isShuffle;
    if (isShuffle) {
        shuffleBtn.classList.add("active");
    } else {
        shuffleBtn.classList.remove("active");
    }
});

repeatBtn.addEventListener("click", () => {
    if (repeatMode === 'all') {
        repeatMode = 'one';
        repeatBtn.classList.add("active");
        repeatBtn.title = "Lặp lại 1 bài";
        repeatBtn.innerHTML = `
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/>
                <text x="12" y="14.5" font-size="8" font-weight="bold" fill="currentColor" text-anchor="middle">1</text>
            </svg>
        `;
    } else if (repeatMode === 'one') {
        repeatMode = 'off';
        repeatBtn.classList.remove("active");
        repeatBtn.title = "Không lặp lại";
        repeatBtn.innerHTML = `
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/>
            </svg>
        `;
    } else {
        repeatMode = 'all';
        repeatBtn.classList.add("active");
        repeatBtn.title = "Lặp lại toàn bộ";
        repeatBtn.innerHTML = `
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/>
            </svg>
        `;
    }
});

audio.addEventListener("timeupdate", updateProgressBar);
audio.addEventListener("ended", () => {
    if (repeatMode === 'one') {
        audio.currentTime = 0;
        playTrack();
    } else if (repeatMode === 'off' && !isShuffle && currentTrackIndex === playlist.length - 1) {
        pauseTrack();
    } else {
        nextTrack();
    }
});

// Click seek behavior on progress bar
progressBarBg.addEventListener("mousedown", (e) => {
    seek(e);
    window.addEventListener("mousemove", seekOnDrag);
    window.addEventListener("mouseup", () => {
        window.removeEventListener("mousemove", seekOnDrag);
    });
});

function seekOnDrag(e) {
    seek(e);
}

function seek(e) {
    const rect = progressBarBg.getBoundingClientRect();
    let percentage = (e.clientX - rect.left) / rect.width;
    percentage = Math.max(0, Math.min(1, percentage)); // Clamp between 0 and 1
    progressBarFill.style.width = `${percentage * 100}%`;
    progressHandle.style.left = `${percentage * 100}%`;
    
    if (!isNaN(audio.duration)) {
        audio.currentTime = percentage * audio.duration;
    }
}

// Click adjust behavior on volume bar
volumeSliderBg.addEventListener("mousedown", (e) => {
    adjustVolume(e);
    window.addEventListener("mousemove", adjustVolumeOnDrag);
    window.addEventListener("mouseup", () => {
        window.removeEventListener("mousemove", adjustVolumeOnDrag);
    });
});

function adjustVolumeOnDrag(e) {
    adjustVolume(e);
}

let lastVolume = 0.7;
volumeBtn.addEventListener("click", () => {
    if (audio.volume > 0) {
        lastVolume = audio.volume;
        audio.volume = 0;
        updateVolumeUI(0);
    } else {
        audio.volume = lastVolume;
        updateVolumeUI(lastVolume);
    }
});

// Playlist Panel toggle behavior
playlistToggleBtn.addEventListener("click", () => {
    const isActive = playlistPanel.classList.toggle("active");
    playlistToggleBtn.classList.toggle("active", isActive);
    if (playlistBackdrop) playlistBackdrop.classList.toggle("active", isActive);
});

function closePlaylist() {
    playlistPanel.classList.remove("active");
    playlistToggleBtn.classList.remove("active");
    if (playlistBackdrop) playlistBackdrop.classList.remove("active");
}

closePlaylistBtn.addEventListener("click", closePlaylist);
if (playlistBackdrop) playlistBackdrop.addEventListener("click", closePlaylist);


// ==========================================================================
// 3. Audio Core Logic Functions
// ==========================================================================

function setMarqueeText(element, text) {
    element.title = text;
    element.innerHTML = `<span class="marquee-wrapper">${text}</span>`;
    
    requestAnimationFrame(() => {
        const wrapper = element.querySelector('.marquee-wrapper');
        if (!wrapper) return;
        
        const overflowDist = wrapper.scrollWidth - element.clientWidth;
        if (overflowDist > 5) {
            wrapper.style.setProperty('--marquee-dist', `-${overflowDist + 15}px`);
            wrapper.classList.add('scroll-active');
        } else {
            wrapper.classList.remove('scroll-active');
        }
    });
}

function loadTrack(index) {
    const track = playlist[index];
    audio.src = track.src;
    setMarqueeText(currentTitle, track.title);
    setMarqueeText(currentArtist, `${track.artist} - Trần Thanh Vân cover`);
    totalDurationLabel.innerText = track.duration;
    
    // Reset Progress Bar
    progressBarFill.style.width = "0%";
    progressHandle.style.left = "0%";
    currentTimeLabel.innerText = "00:00";

    // Update active playlist item highlight
    const items = songListContainer.querySelectorAll(".song-item");
    items.forEach((item, idx) => {
        if (idx === index) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });

    // Load lyric bubbles for this track (if a .lrc file is provided)
    loadLyricsForTrack(track);
}

function togglePlay() {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
}

function playTrack() {
    isPlaying = true;
    audio.play().then(() => {
        // Change play button icon to pause SVG
        playIcon.innerHTML = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;
        chibiContainer.classList.add("playing");
        playerArt.classList.add("playing");
    }).catch(err => {
        console.error("Audio playback error: ", err);
        isPlaying = false;
    });
}

function pauseTrack() {
    isPlaying = false;
    audio.pause();
    // Change button icon to play SVG
    playIcon.innerHTML = `<path d="M8 5v14l11-7z"/>`;
    chibiContainer.classList.remove("playing");
    playerArt.classList.remove("playing");
}

function prevTrack() {
    if (isShuffle) {
        let newIndex = currentTrackIndex;
        if (playlist.length > 1) {
            while (newIndex === currentTrackIndex) {
                newIndex = Math.floor(Math.random() * playlist.length);
            }
        }
        currentTrackIndex = newIndex;
    } else {
        currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    }
    loadTrack(currentTrackIndex);
    if (isPlaying) {
        playTrack();
    }
}

function nextTrack() {
    if (isShuffle) {
        let newIndex = currentTrackIndex;
        if (playlist.length > 1) {
            while (newIndex === currentTrackIndex) {
                newIndex = Math.floor(Math.random() * playlist.length);
            }
        }
        currentTrackIndex = newIndex;
    } else {
        currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    }
    loadTrack(currentTrackIndex);
    if (isPlaying) {
        playTrack();
    }
}

function updateProgressBar() {
    if (isNaN(audio.duration)) return;
    
    const percentage = (audio.currentTime / audio.duration) * 100;
    progressBarFill.style.width = `${percentage}%`;
    progressHandle.style.left = `${percentage}%`;
    
    // Format times
    currentTimeLabel.innerText = formatTime(audio.currentTime);
}

function updateVolumeUI(volume) {
    volumeSliderFill.style.width = `${volume * 100}%`;
    
    if (volume === 0) {
        // Mute icon
        volumeIcon.innerHTML = `<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.21.05-.42.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>`;
    } else if (volume < 0.4) {
        // Low volume icon
        volumeIcon.innerHTML = `<path d="M7 9v6h4l5 5V4L7 9H3zm11.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>`;
    } else {
        // High volume icon
        volumeIcon.innerHTML = `<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>`;
    }
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function buildPlaylistUI() {
    songListContainer.innerHTML = "";
    playlist.forEach((track, index) => {
        const li = document.createElement("li");
        li.className = "song-item";
        if (index === currentTrackIndex) li.classList.add("active");
        
        li.innerHTML = `
            <span class="song-item-idx">${(index + 1).toString().padStart(2, '0')}</span>
            <div class="song-item-details">
                <p class="song-item-title">${track.title}</p>
                <p class="song-item-artist">${track.artist} - Trần Thanh Vân cover</p>
            </div>
            <span class="song-item-duration">${track.duration}</span>
        `;
        
        li.addEventListener("click", () => {
            currentTrackIndex = index;
            loadTrack(index);
            playTrack();
            playlistPanel.classList.remove("active");
            playlistToggleBtn.classList.remove("active");
        });
        
        songListContainer.appendChild(li);
    });
}

// ==========================================================================
// 3b. Lyric Bubbles — words float out from the character's mouth
// ==========================================================================
//
// HOW TO USE:
// 1. For any track in the `playlist` array above, add an "lrc" field pointing
//    to a .lrc lyric file for THAT SPECIFIC cover recording, e.g.:
//
//      {
//          title: "Anh mơ",
//          artist: "Anh Khang",
//          src: "assets/music/Anh mơ - Anh Khang ｜ Cover..mp3",
//          duration: "01:41",
//          lrc: "assets/lyrics/anh-mo.lrc"   // <-- add this line
//      },
//
//    Tracks without an "lrc" field simply won't spawn lyric bubbles — nothing
//    breaks.
//
// 2. A .lrc file is plain text with timestamped lines, e.g.:
//      [00:12.50]lời câu hát đầu tiên
//      [00:16.10]câu tiếp theo
//    Because these are cover versions with different timing than the
//    original studio tracks, the timestamps must be created against THIS
//    audio file (a free "LRC maker" tool that lets you tap a key in time
//    with playback is the fastest way to do this by ear).
//
// 3. Bubbles spawn word-by-word, staggered, each time playback crosses a new
//    lyric line's timestamp — so a full line eases out of the mouth in a
//    short burst rather than all at once.

const lyricBubbleLayer = document.getElementById("lyric-bubble-layer");

let currentLyrics = [];      // [{ time: seconds, text: "..." }, ...] for the loaded track
let activeLyricLineIndex = -1; // index of the last lyric line we've already triggered
const lyricCache = {};        // url -> parsed lyric array, so repeat plays don't re-fetch

// Parse standard .lrc content into a sorted array of { time, text }
function parseLRC(lrcText) {
    const lines = lrcText.split(/\r?\n/);
    const timeTag = /\[(\d{2}):(\d{2})(?:[.:](\d{1,3}))?\]/g;
    const result = [];

    lines.forEach(line => {
        const tags = [...line.matchAll(timeTag)];
        if (tags.length === 0) return;

        const text = line.replace(timeTag, "").trim();
        if (!text) return;

        tags.forEach(tag => {
            const mins = parseInt(tag[1], 10);
            const secs = parseInt(tag[2], 10);
            const frac = tag[3] ? parseInt(tag[3].padEnd(3, "0"), 10) / 1000 : 0;
            result.push({ time: mins * 60 + secs + frac, text });
        });
    });

    result.sort((a, b) => a.time - b.time);
    return result;
}

// Fetch, cache, and parse the .lrc file for a track.
// Requires the page to be served via HTTP (e.g. Live Server, GitHub Pages).
// Tracks without an "lrc" field simply show no lyrics.
function loadLyricsForTrack(track) {
    currentLyrics = [];
    activeLyricLineIndex = -1;
    lyricBubbleLayer.innerHTML = "";

    if (!track.lrc) return;

    if (lyricCache[track.lrc]) {
        currentLyrics = lyricCache[track.lrc];
        return;
    }

    fetch(track.lrc)
        .then(res => {
            if (!res.ok) throw new Error(`Không tải được file lyric: ${track.lrc}`);
            return res.text();
        })
        .then(text => {
            const parsed = parseLRC(text);
            lyricCache[track.lrc] = parsed;
            // Only apply if the user hasn't already skipped to another track
            if (playlist[currentTrackIndex] === track) {
                currentLyrics = parsed;
            }
        })
        .catch(err => console.warn("[Lyrics] " + err.message));
}


// Called on every audio "timeupdate" — checks whether playback has crossed
// into a new lyric line and, if so, spawns its bubbles.
function updateLyricSync() {
    if (!currentLyrics.length || !isPlaying) return;

    // Find the most recent lyric line whose timestamp has passed
    let lineIndex = -1;
    for (let i = 0; i < currentLyrics.length; i++) {
        if (currentLyrics[i].time <= audio.currentTime) {
            lineIndex = i;
        } else {
            break;
        }
    }

    if (lineIndex !== -1 && lineIndex !== activeLyricLineIndex) {
        activeLyricLineIndex = lineIndex;

        // Duration = time gap to next line; default 3s for the last line
        const nextTime = (lineIndex + 1 < currentLyrics.length)
            ? currentLyrics[lineIndex + 1].time
            : currentLyrics[lineIndex].time + 3;
        const duration = Math.max(0.8, nextTime - currentLyrics[lineIndex].time);

        spawnLyricLine(currentLyrics[lineIndex].text, duration);
    }
}


// Shows the full lyric line as a single bubble that drifts toward upper-right.
// `duration` (seconds) matches the gap to the next LRC timestamp.
// Random --tx, --ty, --rot CSS vars are set per bubble so each line drifts
// on a slightly different path — giving the "sound spreading outward" feel.
function spawnLyricLine(lineText, duration) {
    // Remove the previous line immediately so only one line shows at a time
    lyricBubbleLayer.innerHTML = "";

    const bubble = document.createElement("span");
    bubble.className = "lyric-bubble";
    bubble.textContent = lineText;
    bubble.style.animationDuration = `${duration}s`;

    // Drift toward upper-right with random variation.
    // Distances are large so the text is already well clear of the character
    // by the time it becomes visible (at the 32% animation mark).
    const tx  = 90  + Math.random() * 110;        //  90 – 200 px  rightward
    const ty  = -(90 + Math.random() * 110);      //  90 – 200 px  upward
    const rot = (Math.random() - 0.28) * 20;      //  -5.6° … +14.4°  (biased right)
    bubble.style.setProperty('--tx',  `${tx}px`);
    bubble.style.setProperty('--ty',  `${ty}px`);
    bubble.style.setProperty('--rot', `${rot}deg`);

    lyricBubbleLayer.appendChild(bubble);
    bubble.addEventListener("animationend", () => bubble.remove());
}


audio.addEventListener("timeupdate", updateLyricSync);

// ==========================================================================
// 4. Cinematic Video Intro Orchestration
// ==========================================================================

startBtn.addEventListener("click", startCinematicIntro);

let videoFadeTriggered = false;

function checkVideoTimeForFade() {
    if (videoFadeTriggered || isNaN(introVideo.duration) || introVideo.duration === 0) return;
    
    // Trigger fade-to-black 1.0 second before video ends
    const timeRemaining = introVideo.duration - introVideo.currentTime;
    if (timeRemaining <= 1.0) {
        videoFadeTriggered = true;
        introVideo.removeEventListener("timeupdate", checkVideoTimeForFade);
        endVideoWithFade();
    }
}

function startCinematicIntro() {
    audioUnlocked = true;
    startBtn.classList.remove("show-btn");
    startBtn.classList.add("hidden");
    
    // Enable sound for the intro video
    introVideo.muted = false;
    introVideo.volume = 1.0;
    
    // Fade out start screen text/white layer, reveal the video layer
    startScreen.classList.add("fade-out");
    introVideo.classList.add("visible");
    
    // Set audio volume to 0 initially, start track playing silently in background
    audio.volume = 0;
    updateVolumeUI(0);
    playTrack();
    
    // Monitor video time to trigger fade 1s before video ends
    videoFadeTriggered = false;
    introVideo.addEventListener("timeupdate", checkVideoTimeForFade);
    
    // Play video
    introVideo.play().catch(err => {
        console.log("Video play interrupted or blocked: ", err);
        // Fallback if video fails to play
        endVideoWithFade();
    });
    
    // Fallback if ended event triggers first
    introVideo.onended = () => {
        if (!videoFadeTriggered) {
            endVideoWithFade();
        }
    };
}

function endVideoWithFade() {
    videoFadeTriggered = true;
    introVideo.removeEventListener("timeupdate", checkVideoTimeForFade);
    
    // Fade out video audio smoothly over 800ms while screen fades to black
    const fadeAudioInterval = setInterval(() => {
        if (introVideo.volume > 0.05) {
            introVideo.volume = Math.max(0, introVideo.volume - 0.08);
        } else {
            introVideo.volume = 0;
            clearInterval(fadeAudioInterval);
        }
    }, 50);

    // Step 1: Tối dần màn hình (Fade to black over 800ms while video is still running underneath)
    fadeBlack.classList.add("active");
    
    // Step 2: Đợi màn hình tối ĐEN HOÀN TOÀN (800ms) mới xử lý phần bên dưới
    setTimeout(() => {
        // Tạm dừng và ẨN HOÀN TOÀN video ngay lúc màn hình đang đen xì (Tránh bị nháy khung hình cuối video)
        introVideo.pause();
        introVideo.style.display = "none";
        startScreen.style.display = "none";
        
        // Kích hoạt giao diện chính (Mây & Nhân vật) phía sau
        mainScene.classList.add("active");
        canvasActive = true;
        
        // Sáng dần lên: Màn đen mờ đi từ từ để lộ ra giao diện chính bên dưới
        fadeBlack.classList.remove("active");
        
        // Fade nhạc background từ từ vào
        fadeInAudio(0.7, 1800);
        
        // Step 3: Sau khi màn đen mờ hẳn và hiện trọn vẹn giao diện chính (800ms sau)
        setTimeout(() => {
            // Hiện khung trình phát nhạc bên dưới
            playerWrapper.classList.add("active");
            
            // Dọn dẹp hoàn toàn lớp phủ Intro để giải phóng bộ nhớ
            introOverlay.style.display = "none";
            introVideo.src = "";
            introVideo.load();
        }, 800);
        
    }, 800);
}

// Smoothly fades in the background audio volume
function fadeInAudio(targetVolume, durationMs) {
    const stepTime = 50;
    const steps = durationMs / stepTime;
    const valStep = targetVolume / steps;
    audio.volume = 0;
    let currentVol = 0;
    
    const timer = setInterval(() => {
        currentVol += valStep;
        if (currentVol >= targetVolume) {
            audio.volume = targetVolume;
            clearInterval(timer);
        } else {
            audio.volume = currentVol;
        }
        updateVolumeUI(audio.volume);
    }, stepTime);
}


// ==========================================================================
// 5. HTML5 Canvas Particles System (Notes, Sparkles & Petals)
// ==========================================================================

const canvas = document.getElementById("particles-canvas");
const ctx = canvas.getContext("2d");
let canvasActive = false;

// Array of SVG Path-like shapes for notes
// 1. Single eighth note
// 2. Beamed eighth notes
// 3. Quarter note
const noteShapes = [
    // Quarter note ♩
    (ctx, x, y, size) => {
        ctx.beginPath();
        ctx.ellipse(x, y, size * 0.7, size * 0.5, -0.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(x + size * 0.5, y);
        ctx.lineTo(x + size * 0.5, y - size * 2.2);
        ctx.lineWidth = size * 0.25;
        ctx.stroke();
    },
    // Eighth note ♪
    (ctx, x, y, size) => {
        ctx.beginPath();
        ctx.ellipse(x, y, size * 0.7, size * 0.5, -0.2, 0, Math.PI * 2);
        ctx.fill();
        
        const stemX = x + size * 0.5;
        ctx.beginPath();
        ctx.moveTo(stemX, y);
        ctx.lineTo(stemX, y - size * 2.2);
        ctx.lineWidth = size * 0.25;
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(stemX, y - size * 2.2);
        ctx.quadraticCurveTo(stemX + size * 0.8, y - size * 1.8, stemX + size * 0.7, y - size * 1.2);
        ctx.lineWidth = size * 0.25;
        ctx.stroke();
    },
    // Double eighth note ♫
    (ctx, x, y, size) => {
        // Left head
        ctx.beginPath();
        ctx.ellipse(x, y, size * 0.6, size * 0.45, -0.2, 0, Math.PI * 2);
        ctx.fill();
        // Right head
        ctx.beginPath();
        ctx.ellipse(x + size * 1.8, y - size * 0.2, size * 0.6, size * 0.45, -0.2, 0, Math.PI * 2);
        ctx.fill();
        
        // Left stem
        ctx.beginPath();
        ctx.moveTo(x + size * 0.4, y);
        ctx.lineTo(x + size * 0.4, y - size * 2.0);
        ctx.lineWidth = size * 0.2;
        ctx.stroke();
        
        // Right stem
        ctx.beginPath();
        ctx.moveTo(x + size * 2.2, y - size * 0.2);
        ctx.lineTo(x + size * 2.2, y - size * 2.2);
        ctx.lineWidth = size * 0.2;
        ctx.stroke();
        
        // Beam link
        ctx.beginPath();
        ctx.moveTo(x + size * 0.4, y - size * 2.0);
        ctx.lineTo(x + size * 2.2, y - size * 2.2);
        ctx.lineWidth = size * 0.4;
        ctx.stroke();
    }
];

const particles = [];
const maxAmbientParticles = 40;
const maxMusicParticles = 120;

// Resize canvas to cover viewport
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

class Particle {
    constructor(type) {
        this.type = type; // 'sparkle', 'note', 'petal'
        this.reset(true); // reset with initial random Y
    }

    reset(initialSetup = false) {
        this.x = Math.random() * canvas.width;
        // If initial setup, scatter across screen, else spawn at bottom or around chibi girl
        if (initialSetup) {
            this.y = Math.random() * canvas.height;
        } else {
            // Sparkles spawn near the girl, notes/petals drift up/down
            if (this.type === 'sparkle') {
                const stageRect = document.getElementById("character-stage").getBoundingClientRect();
                this.x = stageRect.left + Math.random() * stageRect.width;
                this.y = stageRect.top + Math.random() * stageRect.height;
            } else if (this.type === 'note') {
                // Notes rise from the cloud
                const stageRect = document.getElementById("character-stage").getBoundingClientRect();
                this.x = stageRect.left + 50 + Math.random() * (stageRect.width - 100);
                this.y = stageRect.bottom - 100 + Math.random() * 50;
            } else {
                // Petals fall from top
                this.y = -20;
            }
        }

        this.size = Math.random() * 8 + 4;
        this.speedX = Math.random() * 1.5 - 0.75;
        
        if (this.type === 'note') {
            this.speedY = -(Math.random() * 1.2 + 0.8); // Rise up
            this.alpha = 0;
            this.targetAlpha = Math.random() * 0.65 + 0.25;
            this.shapeIdx = Math.floor(Math.random() * noteShapes.length);
            this.color = `hsl(${Math.random() * 40 + 330}, 90%, 80%)`; // Pastel colors (pink/purple/yellow)
            if (Math.random() > 0.5) {
                this.color = `hsl(${Math.random() * 40 + 40}, 90%, 80%)`;
            }
            this.angle = Math.random() * 0.4 - 0.2;
            this.angleSpeed = Math.random() * 0.02 - 0.01;
        } else if (this.type === 'sparkle') {
            this.speedY = -(Math.random() * 0.4 + 0.2); // Soft float
            this.alpha = Math.random() * 0.8 + 0.2;
            this.fadeSpeed = Math.random() * 0.015 + 0.005;
            this.color = '#fffbeb'; // Soft golden glow
        } else {
            // Petal
            this.speedY = Math.random() * 0.8 + 0.5; // Fall down
            this.speedX = Math.random() * 0.6 + 0.2; // Float rightward
            this.alpha = Math.random() * 0.7 + 0.3;
            this.angle = Math.random() * Math.PI;
            this.angleSpeed = Math.random() * 0.02 + 0.01;
            this.color = `rgba(255, ${Math.random() * 30 + 170}, ${Math.random() * 30 + 195}, 0.75)`; // Pastel pink flower
        }
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.type === 'note') {
            // Fade in initially, then fade out near the top
            if (this.alpha < this.targetAlpha) {
                this.alpha += 0.02;
            }
            this.angle += this.angleSpeed;
            // Float sway
            this.speedX += Math.sin(this.y * 0.02) * 0.05;

            // Boundaries check
            if (this.y < 50) {
                this.alpha -= 0.015;
                if (this.alpha <= 0) this.reset();
            }
            if (this.x < -30 || this.x > canvas.width + 30) this.reset();
        } else if (this.type === 'sparkle') {
            this.alpha -= this.fadeSpeed;
            if (this.alpha <= 0) this.reset();
        } else {
            // Petal
            this.angle += this.angleSpeed;
            // Sway left-right while falling
            this.x += Math.sin(this.y * 0.01) * 0.3;
            
            if (this.y > canvas.height + 20 || this.x > canvas.width + 20) {
                this.reset();
            }
        }
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;

        if (this.type === 'note') {
            ctx.shadowColor = this.color;
            ctx.shadowBlur = 8;
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            noteShapes[this.shapeIdx](ctx, 0, 0, this.size);
        } else if (this.type === 'sparkle') {
            ctx.shadowColor = '#fff';
            ctx.shadowBlur = 12;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * 0.35, 0, Math.PI * 2);
            ctx.fill();
        } else {
            // Petal
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            ctx.beginPath();
            // Draw a cute sakura petal
            ctx.ellipse(0, 0, this.size, this.size * 0.6, 0, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    }
}

// Initialize particles pool
function initParticles() {
    for (let i = 0; i < maxMusicParticles; i++) {
        let type = 'sparkle';
        if (i < 40) type = 'note';
        else if (i < 80) type = 'petal';
        particles.push(new Particle(type));
    }
}
initParticles();

// Render loop running continuously
function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Limit active particles based on whether music is playing
    const activeLimit = isPlaying ? maxMusicParticles : maxAmbientParticles;

    for (let i = 0; i < activeLimit; i++) {
        const p = particles[i];
        if (canvasActive || p.type === 'petal') {
            p.update();
            p.draw();
        }
    }
    requestAnimationFrame(render);
}
render();

// ==========================================================================
// 6. Interactive Click Sparkles & Music Burst Effect
// ==========================================================================

const clickSymbols = ["♪", "♫", "♩", "✨", "🌸", "✦", "💖"];

document.addEventListener("click", (e) => {
    // Ignore clicks on functional buttons, inputs, player controls, sliders, etc.
    if (e.target.closest("button, input, a, .control-btn, .song-item, .progress-bar-bg, .volume-slider-bg, .close-playlist-btn, .start-btn, .playlist-toggle-btn, .playlist-panel, .playlist-backdrop")) {
        return;
    }

    
    spawnClickEffect(e.clientX, e.clientY);
});

function spawnClickEffect(x, y) {
    const container = document.createElement("div");
    container.className = "click-effect-container";
    container.style.left = `${x}px`;
    container.style.top = `${y}px`;

    // 1. Expanding Glow Ripple Ring
    const ripple = document.createElement("div");
    ripple.className = "click-ripple";
    container.appendChild(ripple);

    // 2. Burst of 6-8 music notes, sparkles, and flower petals
    const particleCount = 6 + Math.floor(Math.random() * 3);
    for (let i = 0; i < particleCount; i++) {
        const p = document.createElement("span");
        p.className = "click-sparkle";
        p.textContent = clickSymbols[Math.floor(Math.random() * clickSymbols.length)];
        
        // Radial spread with random angle and distance
        const angle = (Math.PI * 2 * i) / particleCount + (Math.random() - 0.5) * 0.5;
        const dist = 35 + Math.random() * 45;
        const dx = Math.cos(angle) * dist;
        const dy = Math.sin(angle) * dist - 25; // Floating upwards bias
        const rot = (Math.random() - 0.5) * 60;

        p.style.setProperty("--dx", `${dx}px`);
        p.style.setProperty("--dy", `${dy}px`);
        p.style.setProperty("--rot", `${rot}deg`);
        p.style.fontSize = `${0.8 + Math.random() * 0.5}rem`;

        container.appendChild(p);
    }

    document.body.appendChild(container);

    // Auto remove after animation finishes
    setTimeout(() => {
        container.remove();
    }, 950);
}
