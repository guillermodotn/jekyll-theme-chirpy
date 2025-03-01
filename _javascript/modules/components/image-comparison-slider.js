class CustomImgCompare extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.render();
      this.initSlider();
    }

    render() {
      // The render function is no longer required to add styles or elements
    }

    initSlider() {
      const container = this.querySelector('.img-compare-container');
      const slider = this.querySelector('.img-compare-slider');
      const afterImage = this.querySelector('.img-compare-after');
      const divider = this.querySelector('.img-compare-divider');

      let isDragging = false;

      // Set initial position of the slider at the center
      const rect = container.getBoundingClientRect();
      const initialPos = rect.width / 2;
      slider.style.left = `${initialPos}px`;
      divider.style.left = `${initialPos}px`;

      // Set initial clip-path of the "after" image (50% visible)
      afterImage.style.clipPath = `inset(0 ${rect.width - initialPos}px 0 0)`;

      const startDrag = (e) => {
        e.preventDefault();
        isDragging = true;
      };

      const stopDrag = () => {
        isDragging = false;
      };

      const doDrag = (e) => {
        if (!isDragging) return;

        // Get the mouse or touch position
        let clientX = e.clientX || (e.touches ? e.touches[0].clientX : 0);
        const rect = container.getBoundingClientRect();
        let pos = clientX - rect.left;
        pos = Math.max(0, Math.min(pos, rect.width)); // Constrain within the container's width

        // Update both the clip-path of the 'after' image, the position of the slider, and the divider
        afterImage.style.clipPath = `inset(0 ${rect.width - pos}px 0 0)`;
        slider.style.left = `${pos}px`;  // Move the slider to the new position
        divider.style.left = `${pos}px`; // Move the divider to the new position
      };

      // Mouse and touch events to start, move, and stop dragging
      slider.addEventListener('mousedown', startDrag);
      window.addEventListener('mouseup', stopDrag);
      window.addEventListener('mousemove', doDrag);
      slider.addEventListener('touchstart', startDrag);
      window.addEventListener('touchend', stopDrag);
      window.addEventListener('touchmove', doDrag);
    }
  }


export function loadCustomImageSlider() {
customElements.define('custom-img-compare', CustomImgCompare);
}