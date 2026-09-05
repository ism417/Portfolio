'use client'

import { useEffect, useRef } from 'react';
import styles from './CursorLayer.module.css';

const RING_EASE = 0.16;
const PREVIEW_EASE = 0.12;
const TILT_LIMIT = 12;
const PREVIEW_OFFSET = 210;
const PREVIEW_HALF_HEIGHT = 146;

/**
 * A lagging ring plus a dot at the true pointer position. Position is driven imperatively
 * on an animation frame; every appearance change is a data attribute the stylesheet reacts to.
 */
export default function CursorLayer({ projects, activeProject }) {
  const layerRef = useRef(null);
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const previewRef = useRef(null);

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
      if (goalX + 170 > window.innerWidth - 24) goalX = targetX - PREVIEW_OFFSET;
      const goalY = Math.min(
        Math.max(targetY, PREVIEW_HALF_HEIGHT),
        window.innerHeight - PREVIEW_HALF_HEIGHT
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
      preview.style.transform = `translate3d(${previewX}px, ${previewY}px, 0) rotate(${tilt}deg)`;

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
            className={styles.previewImage}
            data-visible={String(project.id === activeProject)}
            src={project.image}
            alt=""
          />
        ))}
      </div>
    </div>
  );
}
