import React from 'react';
import styles from "./Projects.module.css"
import ProjectCard from "./../../components/ProjectCard/ProjectCard"
import { BubblyLink } from "../../Bubbly/BubblyLink";
import { useEffect, useState } from "react";
import Contentful from "./../../contentful/Contentful";

const Projects = () => {
  const [projects, setProjects] = useState(null)
  const { getData } = Contentful()

  //console.log(projects)

  useEffect(() => {
    getData().then((response) => setProjects(response))
  }, [])

  return (
    <>
      <div className={styles.projects}>
        <div className={styles.container}>
          <h1 className={styles.projects__title}>My <span style={{color: "#b157e8"}}>Projects</span></h1>

          <div className={styles.projects__cardList}>
            {
              projects === null
              ? <div>Loading...</div>
              : projects?.map((item, index) => 
                <ProjectCard key={index} item={item} />
              )
            }
          </div>

        </div>
      </div>

      <div className={styles.nav__btn}>
        <BubblyLink to="/" side="left">
          <div>Back</div>
        </BubblyLink>
      </div>

      <div className={styles.about__block}>
        <BubblyLink to="/" side="left">
          <div className={styles.about__btn} >
            <div className={styles.about__arrowBtn}>&lang;</div>
            <div className={styles.about__titleBtn}>Back</div>
          </div>
        </BubblyLink>
      </div>
    </>
  )
}

export default Projects
