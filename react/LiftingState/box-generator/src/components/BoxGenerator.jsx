import React, { useState } from 'react'
import styles from './BoxGenerator.module.css'

const BoxGenerator = ({onCreate}) => {
  
  const [color, setColor] = useState('');
  const [size , setSize]  = useState('100');
  
  const addBox = (e) => {
    e.preventDefault();
    const box = {
      boxSize: size,
      boxColor: color,
    }
    onCreate(box)
    // setBox((prev) => [...prev, box])
  }

  return (
    <div className={styles.addColorBox}>
      <h1 className={styles.title}>Box Generator!</h1>
      <form onSubmit={addBox}>
        <label className={styles.label} for="color">Color :</label>
        <input className={styles.colorInput} type="text" name="color" value= {color} onChange={(e) => setColor(e.target.value)} />
        <label className={styles.label}for="size">Size :</label>
        <input className={styles.colorInput} type="text" name="size" value= {size} onChange={(e) => setSize(e.target.value)} />
        <input className={styles.btn} type="submit" value="Add" />
        </form>
    </div>
  )
}

export default BoxGenerator