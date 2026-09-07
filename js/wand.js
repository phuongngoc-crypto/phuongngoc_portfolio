/**
 * Interactive Lumos Wand Cursor Effect
 * Creates a magical sparkling trail following the cursor
 */

(function () {
  // Disable on mobile/touch devices
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

  let enabled = true;
  let lastSparkleTime = 0;
  const throttleMs = 28; // Smooth sparkle generation rate

  window.addEventListener('mousemove', (e) => {
    if (!enabled) return;
    const now = performance.now();
    if (now - lastSparkleTime < throttleMs) return;
    lastSparkleTime = now;

    createSparkle(e.clientX, e.clientY);
  });

  function createSparkle(x, y) {
    const spark = document.createElement('div');
    spark.className = 'wand-sparkle';

    // Randomize slight offset and size
    const offsetX = (Math.random() - 0.5) * 12;
    const offsetY = (Math.random() - 0.5) * 12;
    const size = Math.random() * 4 + 3;

    spark.style.left = `${x + offsetX}px`;
    spark.style.top = `${y + offsetY}px`;
    spark.style.width = `${size}px`;
    spark.style.height = `${size}px`;

    document.body.appendChild(spark);

    setTimeout(() => {
      spark.remove();
    }, 700);
  }

  // Allow global toggle if desired
  window.toggleWandTrail = function (state) {
    enabled = state !== undefined ? state : !enabled;
    return enabled;
  };
})();
