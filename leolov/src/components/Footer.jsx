import style from "../styles/footer.module.scss";
import iconface from '../assets/images/facelogo.svg';
import iconlinked from '../assets/images/linkedinlogo.svg';



export function Footer() {
  return (
    <footer className={style.autoFlow}>
      <article>
        <h2>Adresse</h2>
        <p>Find os her:</p>
        <p>
          Vestervænget 232, 30.sal <br />
          6574 Øster Nørup <br />
          Danmark
        </p>
      </article>
      <article>
        <h2>Kontakt</h2>
        <p>Kontakt os her:</p>
        <p>
          email@mail.dk <br />
          Tlf: 0192 3023
        </p>
      </article>
      <article>
        <h2>Politik</h2>
        <p>Vores politikker:</p>
        <p>
          <a href="#">Privatlivspolitk</a>
          <a href="#">Cookiepolitik</a>
          <a href="#">Generalle betingelse</a>
        </p>
      </article>
      <article>
        <h2>Sociale medier</h2>
        <img className={style.iconfacebook} src={iconface} alt="Logo/link to Facebook" />
        <img className={style.iconlinkedin} src={iconlinked} alt="Logo/link to LinkedIn" />
      </article>
    </footer>
  );
}

