/**
 * Native HTML5 Background Music Controller for Hedwig's Theme
 * Plays the local high-quality orchestral MP3 (assets/audio/hedwig.mp3)
 * Completely compliant with browser autoplay policies & works on file:// and GitHub Pages
 */

class BackgroundMusicPlayer {
  constructor() {
    this.audioElement = null;
    this.isPlaying = false;
    this.volume = 0.55;
    this.onStateChange = null;
    this.firstInteractionDone = false;

    // Initialize after DOM loads
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.init());
    } else {
      this.init();
    }
  }

  init() {
    this.audioElement = document.getElementById('bg-audio');
    if (!this.audioElement) {
      this.audioElement = new Audio('assets/audio/hedwig.mp3');
      this.audioElement.id = 'bg-audio';
      this.audioElement.loop = true;
      this.audioElement.preload = 'auto';
      document.body.appendChild(this.audioElement);
    }

    this.audioElement.volume = this.volume;

    this.audioElement.addEventListener('play', () => {
      this.isPlaying = true;
      if (this.onStateChange) this.onStateChange(true);
    });

    this.audioElement.addEventListener('pause', () => {
      this.isPlaying = false;
      if (this.onStateChange) this.onStateChange(false);
    });

    this.audioElement.addEventListener('error', (e) => {
      console.warn('Audio playback error:', e);
    });

    // Handle first click anywhere on page to unlock audio if user wants
    const unlockAudio = () => {
      this.firstInteractionDone = true;
      document.removeEventListener('click', unlockAudio);
    };
    document.addEventListener('click', unlockAudio, { once: true });
  }

  play() {
    if (!this.audioElement) this.init();
    if (!this.audioElement) return;

    const promise = this.audioElement.play();
    if (promise !== undefined) {
      promise
        .then(() => {
          this.isPlaying = true;
          if (this.onStateChange) this.onStateChange(true);
        })
        .catch((err) => {
          console.log('Audio autoplay blocked by browser, awaiting user click:', err);
        });
    }
  }

  pause() {
    if (this.audioElement) {
      this.audioElement.pause();
    }
    this.isPlaying = false;
    if (this.onStateChange) this.onStateChange(false);
  }

  toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
    return this.isPlaying;
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.audioElement) {
      this.audioElement.volume = this.volume;
    }
  }
}

window.bgMusic = new BackgroundMusicPlayer();
