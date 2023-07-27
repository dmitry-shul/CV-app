import React from 'react';
import styles from "./ProjectCard.module.css"

const ProjectCard = ({item}) => {
  const {title, image, link, tags} = item

  return (
    <a href={link} target="_blank" rel="noreferrer" className={styles.card}>
      <img className={styles.img} src={image} alt={title}/>

        <div className={styles.tags}>
          {
            tags.split(",")?.map((item, i) =>
              <div key={i}>{item}</div>
            )
          }
      </div>
    </a>
  )
}

export default ProjectCard