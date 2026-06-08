function StatusCard({ nome, status }) {
  return (
    <div className="status-card">
      <span>{nome}</span>
      <strong>{status}</strong>
    </div>
  );
}

export default StatusCard;
