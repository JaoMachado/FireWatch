import { Link } from "react-router-dom";

export default function Monitoring() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h1>Monitoramento FireWatch</h1>

      <p style={{ color: "#888" }}>
        A dashboard será desenvolvido aqui.
      </p>

      <Link to="/" className="secondary-button">
        ← Voltar para Home
      </Link>
    </main>
  );
}