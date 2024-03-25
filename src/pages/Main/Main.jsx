import styles from "./Main.module.css"
import { BubblyLink } from "../../Bubbly/BubblyLink";

const Main = () => {
  
  return (
    <section className={styles.main}>

      <div className={styles.nav__btn}>
        <BubblyLink to="/about" side="left">
          <div>About me</div>
        </BubblyLink>
        
        <BubblyLink to="/projects" side="right">
          <div>My projects</div>
        </BubblyLink>
      </div>

			<div className={styles.user_block}>
				<article className={styles.user}>
          <img className={styles.avatar} src="./assets/images/avatar3.jpg" alt="avatar" />
					<h2>
            <span className={styles.hoverLetter}>D</span>
            <span className={styles.hoverLetter}>m</span>
            <span className={styles.hoverLetter}>i</span>
            <span className={styles.hoverLetter}>t</span>
            <span className={styles.hoverLetter}>r</span>
            <span className={styles.hoverLetter}>y</span>
            &nbsp;
            <p className={styles.violet}>
              <span className={styles.hoverLetter}>S</span>
              <span className={styles.hoverLetter}>h</span>
              <span className={styles.hoverLetter}>u</span>
              <span className={styles.hoverLetter}>l</span>
              <span className={styles.hoverLetter}>z</span>
              <span className={styles.hoverLetter}>h</span>
              <span className={styles.hoverLetter}>y</span>
              <span className={styles.hoverLetter}>t</span>
              <span className={styles.hoverLetter}>s</span>
              <span className={styles.hoverLetter}>k</span>
              <span className={styles.hoverLetter}>i</span>
            </p>
          </h2>
					<h3>Front-end developer</h3>
				</article>
			</div>

			<div className={styles.contact_block} id="contact">
				<div className={styles.contsct}>
					<div className={styles.location}>
						<p>Location</p>
						<a href="https://goo.gl/maps/gSP6SwyFchq71SF5A">Minsk, Belarus</a>
					</div>

					<div className={styles.phone_number}>
						<p>Phone number</p>
						<a href="tel:+375298540327">+375 29 854-03-27</a>
					</div>

					<div className={styles.email}>
						<p>Email</p>
						<a href="mailto:d.shulzhytski@mail.ru">d.shulzhytski@mail.ru</a>
					</div>
				</div>
			</div>


      <div className={styles.about__block}>
        <BubblyLink to="/about" side="left">
          <div className={styles.about__btn} >
            <div className={styles.about__arrowBtn}>&lang;</div>
            <div className={styles.about__titleBtn}>About me</div>
          </div>
        </BubblyLink>
      </div>

      <div className={styles.project__block} >
        <BubblyLink to="/projects" side="right">
          <div className={styles.project__btn}>
            <div className={styles.project__arrowBtn}>&lang;</div>
            <div className={styles.project__titleBtn}>My projects</div>
          </div>
        </BubblyLink>
      </div>


      <ul className={styles.backgroundAnimate}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

		</section>
  )
}

export default Main
