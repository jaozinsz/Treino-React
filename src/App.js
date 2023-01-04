import "./App.scss";
import logo from "./common/images/logo.png";
import seta from "./common/images/seta.png"
import globo from "./common/images/globo.png"


function App() {
  return (
    <main className="Page">
      <section className="Page1">
        <nav className="cabecalho">
          <img className="logo" src={logo} alt="logo" />
          <div className="opt">
            <select className="idioma">
              <option className="port" value="" key="">
                Português
                <img src={globo} alt="" />
              </option>
              <option value="" key="">English</option>
            </select>
            <button className="botao">
              <span>Entrar</span>
            </button>
          </div>
        </nav>

        <div className="textos">
          <div className="titulo">
            <h1>Filmes, séries e muito mais. Sem limites.</h1>
          </div>
          <div className="txt">Assista onde quiser. Cancele quando quiser.</div>
          <div className="txt2">
            Quer assistir? Informe seu email para criar ou reiniciar sua
            assinatura.
          </div>

          <div>
            <input className="email" type="email" placeholder="Email" />
            <button className="botao1">
              <span className="vamos">Vamos lá</span>
              <span ><img className="seta" src={seta} alt="seta" /></span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
