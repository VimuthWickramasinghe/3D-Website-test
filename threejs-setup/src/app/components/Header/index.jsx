"use client"
import styles from './style.module.scss'
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
    <button onClick={() => {setIsActive(!isActive)}} className={styles.button}>
      <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
    </button>
    <AnimatePresence mode="wait">
      {isActive && <Nav />}
    </AnimatePresence> 
    </>
  )
}