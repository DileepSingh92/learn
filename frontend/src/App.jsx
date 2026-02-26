const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:5000';

export default function App() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem', lineHeight: 1.5 }}>
      <h1>React + .NET Android APK Starter</h1>
      <p>
        Frontend is running. Configure backend URL with
        <code> VITE_API_URL </code>.
      </p>
      <p>
        Current API URL: <strong>{API_URL}</strong>
      </p>
      <ol>
        <li>Run the ASP.NET API in <code>backend/</code></li>
        <li>Build frontend: <code>npm run build</code></li>
        <li>Wrap with Capacitor to generate Android APK</li>
      </ol>
    </main>
  );
}
