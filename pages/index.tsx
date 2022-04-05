import type {NextPage} from 'next'
import useTranslation from 'next-translate/useTranslation'

const Home: NextPage = () => {

  const { t } = useTranslation('common')
  const { t: homeT } = useTranslation('home')
  const changeLanguage = (language: string) => {
    window.location.replace("/" + language)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>{homeT("HELLO_WORLD")}</h2>
          <h1>SimpleLocalize.io ⚡️ next-translate</h1>
          <p>
            {t("USE_BUTTONS_BELOW")}
          </p>
          <button onClick={() => changeLanguage("en")}>English</button>
          <button onClick={() => changeLanguage("es")}>Spanish</button>
          <button onClick={() => changeLanguage("fr")}>French</button>
          <button onClick={() => changeLanguage("pl")}>Polish</button>
          <hr/>
        </div>

        <img src="/logo.svg" className="App-logo" alt="simplelocalize with next-i18next"/>
        <p>
          {t("DESCRIPTION")}
        </p>

        <div className="App-links">
          <a
            title="How to integrate next-translate with SimpleLocalize"
            className="App-link"
            href="https://github.com/simplelocalize/simplelocalize-next-translate"
          >
            Github Repository
          </a>
          <div className="separator">|
          </div>
          <a
            title="Translation Management Software"
            className="App-link"
            href="https://simplelocalize.io"
          >
            SimpleLocalize.io
          </a>
        </div>


      </header>
    </div>
  )
}

export default Home
