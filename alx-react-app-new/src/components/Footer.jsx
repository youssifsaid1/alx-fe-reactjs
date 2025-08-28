// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '10px', borderTop: '1px solid #e5e7eb' }}>
      <span>&copy; {new Date().getFullYear()} My Cities App</span>
    </footer>
  );
}
