// Một số bài hát có thể bị lỗi do liên kết bị hỏng. Vui lòng thay thế liên kết khác để có thể phát

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PlAYER_STORAGE_KEY = "F8_PLAYER";

const player = $(".player");
const cd = $(".cd");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const progress = $("#progress");
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const playlist = $(".playlist");

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: {},
    config: JSON.parse(localStorage.getItem(PlAYER_STORAGE_KEY)) || {},
    songs: [{
            name: "Yêu Là Cưới",
            singer: "Thảo Phạm Cover",
            path: "./assets/Music/Muộn Rồi Mà Sao Còn.mp3",
            image: "./assets/Img/Muộn Rồi Mà Sao Còn.jpg",
        },
        {
            name: "Fly Away",
            singer: "TheFatRat",
            path: "./assets/Music/Fly Away.mp3",
            image: "./assets/Img/Fly Away.jpg",
        },
        {
            name: "Unity",
            singer: "TheFatRat",
            path: "./assets/Music/Unity.mp3",
            image: "./assets/Img/Unity.jpg",
        },
        {
            name: "Faded",
            singer: "Alan Walker",
            path: "./assets/Music/Faded.mp3",
            image: "./assets/Img/Faded.jpg",
        },
        {
            name: "All Falls Down",
            singer: "Alan Walker",
            path: "./assets/Music/All Falls Down.mp3",
            image: "./assets/Img/All Falls Down.jpg",
        },
        {
            name: "The Spectre",
            singer: "Alan Walker",
            path: "./assets/Music/The Spectre.mp3",
            image: "./assets/Img/The Spectre.jpg",
        },
        {
            name: "Sign",
            singer: "Deamn",
            path: "./assets/Music/Sign.mp3",
            image: "./assets/Img/Sign.jpg",
        },
        {
            name: "Nevada",
            singer: "Vicetone",
            path: "./assets/Music/Nevada.mp3",
            image: "./assets/Img/Nevada.jpg",
        },
        {
            name: "Summertime",
            singer: "K-391",
            path: "./assets/Music/Summertime.mp3",
            image: "./assets/Img/Summertime.jpg",
        },
        {
            name: "Gurenge(KnY)",
            singer: "Lisa",
            path: "./assets/Music/Gurenge.mp3",
            image: "./assets/Img/Gurenge.jpg",
        },
        {
            name: "Unravel(TG)",
            singer: "TK",
            path: "./assets/Music/Unravel.mp3",
            image: "./assets/Img/Unravel.jpg",
        },
        {
            name: "Shinzou Wo Sasageyo!(AOT)",
            singer: "Linked Horizon",
            path: "./assets/Music/Shinzou Wo Sasageyo!.mp3",
            image: "./assets/Img/Shinzou Wo Sasageyo!.jpg",
        },
        {
            name: "Crossing Field(SAO)",
            singer: "Lisa",
            path: "./assets/Music/Crossing Field.mp3",
            image: "./assets/Img/Crossing Field.jpg",
        },
        {
            name: "Ignite(SAO2)",
            singer: "Eir Aoi",
            path: "./assets/Music/Ignite.mp3",
            image: "./assets/Img/Ignite.jpg",
        },
        {
            name: "Cha-La Head-Cha-La(DB)",
            singer: "V.A",
            path: "./assets/Music/Cha-La Head-Cha-La.mp3",
            image: "./assets/Img/Cha-La Head-Cha-La.jpg",
        },
        {
            name: "Detective Conan Theme",
            singer: "Katsuo Ohno",
            path: "./assets/Music/Detective Conan Theme.mp3",
            image: "./assets/Img/Detective Conan Theme.jpg",
        },
        {
            name: "Naruto Theme",
            singer: "Toshiro Masuda",
            path: "./assets/Music/Naruto Theme.mp3",
            image: "./assets/Img/Naruto Theme.jpg",
        },
        {
            name: "Luffy Moukou",
            singer: "V.A",
            path: "./assets/Music/Luffy Moukou.mp3",
            image: "./assets/Img/Luffy Moukou.jpg",
        },
        {
            name: "Overtaken(OP)",
            singer: "Shiro Hamaguchi",
            path: "./assets/Music/Overtaken.mp3",
            image: "./assets/Img/Overtaken.jpg",
        },
        {
            name: "The Strongest(OP)",
            singer: "V.A",
            path: "./assets/Music/The Strongest.mp3",
            image: "./assets/Img/The Strongest.jpg",
        },
        // {
        // name: "",
        // singer: "",
        // path: "",
        // image: ""
        // },
        // {
        // name: "",
        // singer: "",
        // path: "",
        // image: ""
        // },
        // {
        // name: "",
        // singer: "",
        // path: "",
        // image: ""
        // }
    ],
    setConfig: function(key, value) {
        this.config[key] = value;
        localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config));
    },
    render: function() {
        const htmls = this.songs.map((item, index) => {
            return `        
            <div data-index="${index}" class="song ${
        index === this.currentIndex ? "active" : ""
      }">
                <div
                    class="thumb"
                    style="
                    background-image: url('${item.image}');
                "
                ></div>
                <div class="body">
                    <h3 class="title">${item.name}</h3>
                    <p class="author">${item.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>`;
        });
        $(".playlist").innerHTML = htmls.join("");
    },
    defineProperties: function() {
        Object.defineProperty(this, "currentSong", {
            get: function() {
                return this.songs[this.currentIndex];
            },
        });
    },
    handleEvents: function() {
        const _this = this;
        const cdWidth = cd.offsetWidth;

        // Xử lý CD quay / dừng
        const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
            duration: 10000, // 10 seconds
            iterations: Infinity,
        });
        cdThumbAnimate.pause();

        // Xử lý phóng to / thu nhỏ CD
        document.onscroll = function() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop;

            cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
            cd.style.opacity = newCdWidth / cdWidth;
        };

        // Xử lý khi click play
        playBtn.onclick = function() {
            if (_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
        };

        // Khi song được play
        audio.onplay = function() {
            _this.isPlaying = true;
            player.classList.add("playing");
            cdThumbAnimate.play();
        };

        // Khi song bị pause
        audio.onpause = function() {
            _this.isPlaying = false;
            player.classList.remove("playing");
            cdThumbAnimate.pause();
        };

        // Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function() {
            if (audio.duration) {
                const progressPercent = Math.floor(
                    (audio.currentTime / audio.duration) * 100
                );
                progress.value = progressPercent;
            }
        };

        // Xử lý khi tua song
        progress.oninput = function(e) {
            // từ số phần trăm của giây convert sang giây
            const seekTime = (audio.duration / 100) * e.target.value;
            audio.currentTime = seekTime;
            audio.play();
        };

        // Khi next song
        nextBtn.onclick = function() {
            if (_this.isRandom) {
                _this.playRandomSong();
            } else {
                _this.nextSong();
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong();
        };

        // Khi prev song
        prevBtn.onclick = function() {
            if (_this.isRandom) {
                _this.playRandomSong();
            } else {
                _this.prevSong();
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong();
        };

        // Xử lý bật / tắt random song
        randomBtn.onclick = function(e) {
            _this.isRandom = !_this.isRandom;
            _this.setConfig("isRandom", _this.isRandom);
            randomBtn.classList.toggle("active", _this.isRandom);
        };

        // Xử lý lặp lại một song
        repeatBtn.onclick = function(e) {
            _this.isRepeat = !_this.isRepeat;
            _this.setConfig("isRepeat", _this.isRepeat);
            repeatBtn.classList.toggle("active", _this.isRepeat);
        };

        // Xử lý next song khi audio ended
        audio.onended = function() {
            if (_this.isRepeat) {
                audio.play();
            } else {
                nextBtn.click();
            }
        };

        // Lắng nghe hành vi click vào playlist
        playlist.onclick = function(e) {
            let songNode = e.target.closest(".song:not(.active)");
            if (!e.target.closest(".option")) {
                if (songNode) {
                    _this.currentIndex = Number(songNode.dataset.index);
                    _this.loadCurrentSong();
                    audio.play();
                }
            }
        };
    },
    scrollToActiveSong: function() {
        setTimeout(() => {
            if (this.currentIndex <= 3) {
                $(".song.active").scrollIntoView({
                    behavior: "smooth",
                    block: "end",
                });
            } else {
                $(".song.active").scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
            }
        }, 300);
    },

    loadCurrentSong: function() {
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;

        if ($(".song.active")) {
            $(".song.active").classList.remove("active");
        }
        const list = $$(".song");
        list.forEach((song) => {
            if (song.getAttribute("data-index") == this.currentIndex) {
                song.classList.add("active");
            }
        });
    },
    loadConfig: function() {
        this.isRandom = this.config.isRandom;
        this.isRepeat = this.config.isRepeat;
    },
    nextSong: function() {
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },
    prevSong: function() {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    },
    playRandomSong: function() {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.songs.length);
        } while (this.currentIndex === newIndex);
        console.log(newIndex);
        this.currentIndex = newIndex;
        this.loadCurrentSong();
    },

    start: function() {
        // Gán cấu hình từ config vào ứng dụng
        this.loadConfig();

        // Định nghĩa các thuộc tính cho object
        this.defineProperties();

        // Lắng nghe / xử lý các sự kiện (DOM events)
        this.handleEvents();

        // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
        this.loadCurrentSong();

        // Render playlist
        this.render();

        // Hiển thị trạng thái ban đầu của button repeat & random
        randomBtn.classList.toggle("active", this.isRandom);
        repeatBtn.classList.toggle("active", this.isRepeat);
    },
};

app.start();