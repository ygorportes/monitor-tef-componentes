import StatusCard from "./components/StatusCard";
import "./App.css";

function App() {
  return (
    <main className="container">
      <section className="card">
        <h1>Monitor TEF</h1>

        <p className="descricao">
          Sistema de verificação rápida de serviços.
        </p>

        <div className="lista-status">
          <StatusCard nome="CliSiTef" status="Online" />
          <StatusCard nome="Pinpad" status="Conectado" />
          <StatusCard nome="PDV" status="Operacional" />
        </div>

        <p className="mensagem">
          Todos os serviços foram exibidos utilizando o componente StatusCard.
        </p>
      </section>
    </main>
  );
}

export default App;
