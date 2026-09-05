'use client'

import { useState } from 'react';
import BackgroundField from '@/components/BackgroundField';
import CursorLayer from '@/components/CursorLayer';
import SiteHeader from '@/components/SiteHeader';
import Hero from '@/components/sections/Hero';
import NowStrip from '@/components/sections/NowStrip';
import Work from '@/components/sections/Work';
import Craft from '@/components/sections/Craft';
import Path from '@/components/sections/Path';
import Contact from '@/components/sections/Contact';
import { projects } from '@/data/portfolio';
import styles from './page.module.css';

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <>
      <BackgroundField />
      <CursorLayer projects={projects} activeProject={hoveredProject} />

      <div className={styles.content}>
        <SiteHeader />
        <main>
          <Hero />
          <NowStrip />
          <Work onHoverProject={setHoveredProject} />
          <Craft />
          <Path />
          <Contact />
        </main>
      </div>
    </>
  );
}
