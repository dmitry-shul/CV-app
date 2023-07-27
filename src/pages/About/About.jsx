import React from 'react';
import styles from "./About.module.css"
import { BubblyLink } from "../../Bubbly/BubblyLink";

const About = () => {
  return (
    <>
      <div className={styles.about}>
        <div className={styles.container}>

          <h1 className={styles.about__title}>About <span style={{color: "#b157e8"}}>me</span></h1>

          <div className={styles.about__block}>
            <div className={styles.about__col1}>
              Organized & hard-working beginer developer looking for a role as frontend developer. Passionate about building first-class web applications. During my self-study, I developed several websites and web applications and gained experience in working with different technologies.
            </div>

            <div className={styles.about__col2}>
              <p>Technical skills</p>
              <ul>
                <li>HTML</li>
                <li>CSS/SCSS</li>
                <li>JS</li>
                <li>React</li>
                <li>Next</li>
                <li>TypeScript</li>
                <li>Redux Toolkit</li>
                <li>React query</li>
                <li>Git</li>
                <li>Figma</li>
              </ul>
            </div>

            <div className={styles.about__col3}>
              <p>Soft skills</p>
              <ul>
                <li>Adaptability</li>
                <li>Receptive</li>
                <li>Stress management</li>
                <li>Teamwork</li>
                <li>Organization</li>
                <li>Self-development</li>
              </ul>
            </div>

            <div className={styles.about__col4}>
              <p><span style={{color: "#b157e8"}}>English level</span> <br/> Pre-Intermediate</p>
              <a href="https://github.com/dmitry-shul" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>

        </div>
      </div>

      <div className={styles.nav__btn}>
        <BubblyLink to="/" side="right">
          <div>Back</div>
        </BubblyLink>
      </div>

      <div className={styles.about__blockBtn}>
        <BubblyLink to="/" side="right">
          <div className={styles.about__btnBtn} >
            <div className={styles.about__arrowBtnBtn}>&lang;</div>
            <div className={styles.about__titleBtnBtn}>Back</div>
          </div>
        </BubblyLink>
      </div>
    </>
  )
}

export default About

