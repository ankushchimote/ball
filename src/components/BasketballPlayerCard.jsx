import React from 'react'
import styles from'./BasketballPlayerCard.module.css'



const BasketballPlayerCard = ({ name, image, position, stats }) => {
  return (
    <>
    <div className={styles.container}>
        <div className={styles.left} >
            <img src={image} />
            <div className={styles.data1}>
                <h3>{name}</h3>
                <p>{position}</p>
            </div>
        </div>
        <div className={styles.right} >
            <p>Points PerGame: {stats.pointsPerGame}</p>
            <p>Assists PerGame: {stats.assistsPerGame}</p>
            <p>Rebounds PerGame: {stats.reboundsPerGame}</p>
        </div>
    </div>
    </>
  )
}

export default BasketballPlayerCard
