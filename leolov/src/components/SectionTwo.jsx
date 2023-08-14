import style from "../styles/sectionTwo.module.scss";
import sectiontwoimg from  '../assets/images/sectiontwo.jpg'

export function SectionTwo() {
  return (
    <>
          <section className={style.gridCol}>

        <article>

          <h2>Her bor vi</h2>
          <p>
            Leo-lov har altid været det bedste advokatfirma i verden. Der er
            simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer
            så længe du har penge. Hvis du mod alt forventning skulle oplevel at
            støde på et retsligt problem som leo-lov ikke kan løse får du
            halvdelen af beløbet igen. <br />
            Det er sådan vi har skabt en forretning der ikke kan andet end at
            vokse!
          </p>
        </article>
        <img className={style.sectiontwoimg} src={sectiontwoimg} alt="#" />

      </section>
    </>
  );
}