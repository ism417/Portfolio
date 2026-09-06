'use client'

import { useEffect, useRef } from 'react';
import styles from './CursorLayer.module.css';

const RING_EASE = 0.16;
const PREVIEW_EASE = 0.12;
const TILT_LIMIT = 12;
const PREVIEW_OFFSET = 210;

/** The preview frame takes the shape of whatever it holds, within these bounds. */
const PREVIEW_HEIGHT = 200;
const PREVIEW_MAX_WIDTH = 440;

/**
 * A lagging ring plus a dot at the true pointer position. Position is driven imperatively
 * on an animation frame; every appearance change is a data attribute the stylesheet reacts to.
 */
export default function CursorLayer({ projects, activeProject }) {
  const layerRef = useRef(null);
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const previewRef = useRef(null);

  // Written by the sizing effect, read by the animation frame — refs, so the loop never goes stale.
  const halfWidth = useRef(PREVIEW_MAX_WIDTH / 2);
  const halfHeight = useRef(PREVIEW_HEIGHT / 2);

  /**
   * Match the frame to the active image's aspect ratio, so a shot is never letterboxed.
   * The ratio is read off the loaded image rather than stored alongside it, so swapping
   * a file in `public/` is all it takes.
   */
  useEffect(() => {
    const preview = previewRef.current;
    if (!preview || activeProject === null) return;

    const image = preview.querySelector(`[data-project="${activeProject}"]`);
    if (!image) return;

    const size = () => {
      const ratio = image.naturalWidth / image.naturalHeight;
      if (!ratio || !Number.isFinite(ratio)) return;

      let width = PREVIEW_HEIGHT * ratio;
      let height = PREVIEW_HEIGHT;
      if (width > PREVIEW_MAX_WIDTH) {
        width = PREVIEW_MAX_WIDTH;
        height = PREVIEW_MAX_WIDTH / ratio;
      }

      preview.style.width = `${Math.round(width)}px`;
      preview.style.height = `${Math.round(height)}px`;
      halfWidth.current = width / 2;
      halfHeight.current = height / 2;
    };

    if (image.complete) size();
    else {
      image.addEventListener('load', size, { once: true });
      return () => image.removeEventListener('load', size);
    }
  }, [activeProject]);

  useEffect(() => {
    const layer = layerRef.current;
    const ring = ringRef.current;
    const dot = dotRef.current;
    const preview = previewRef.current;

    let targetX = 0, targetY = 0;
    let ringX = 0, ringY = 0;
    let previewX = 0, previewY = 0, lastPreviewX = 0, tilt = 0;
    let active = false, seeded = false, frame = null;

    const onMove = event => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (!active) {
        active = true;
        ringX = targetX;
        ringY = targetY;
        layer.dataset.active = 'true';
      }
      ring.dataset.wide = String(!!event.target.closest('a,button,img,[data-work-row]'));
    };

    const onLeave = () => {
      active = false;
      layer.dataset.active = 'false';
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);

    const tick = () => {
      ringX += (targetX - ringX) * RING_EASE;
      ringY += (targetY - ringY) * RING_EASE;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;

      let goalX = targetX + PREVIEW_OFFSET;
      if (goalX + halfWidth.current > window.innerWidth - 24) goalX = targetX - PREVIEW_OFFSET;
      const goalY = Math.min(
        Math.max(targetY, halfHeight.current),
        window.innerHeight - halfHeight.current
      );
      if (!seeded && active) {
        previewX = goalX;
        previewY = goalY;
        lastPreviewX = goalX;
        seeded = true;
      }
      previewX += (goalX - previewX) * PREVIEW_EASE;
      previewY += (goalY - previewY) * PREVIEW_EASE;

      const velocity = previewX - lastPreviewX;
      lastPreviewX = previewX;
      tilt += (Math.max(-TILT_LIMIT, Math.min(TILT_LIMIT, velocity * 0.6)) - tilt) * 0.1;
      // The trailing -50% keeps the frame centred on the pointer whatever its width.
      preview.style.transform =
        `translate3d(${previewX}px, ${previewY}px, 0) rotate(${tilt}deg) translate(-50%, -50%)`;

      frame = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={layerRef} className={styles.layer} data-active="false" aria-hidden="true">
      <div ref={ringRef} className={styles.ring} data-wide="false" />
      <div ref={dotRef} className={styles.dot} />
      <div ref={previewRef} className={styles.preview} data-visible={String(activeProject !== null)}>
        {projects.map(project => (
          <img
            key={project.id}
            data-project={project.id}
            className={styles.previewImage}
            data-visible={String(project.id === activeProject)}
            src={project.preview ?? project.image}
            alt=""
          />
        ))}
      </div>
    </div>
  );
}
