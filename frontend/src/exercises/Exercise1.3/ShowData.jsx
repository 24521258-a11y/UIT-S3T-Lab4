
export default function ShowData({ data }) {
  return (
    <section className="inspector-panel" aria-live="polite">
      <h2>Live ShowData Inspector</h2>
      <p>Submitted form data (JSON):</p>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </section>
  );
}
