export default function Button({ children, onClick }) {
  return (
    <button onClick={onClick}>
      <span>{children}</span>
    </button>
  );
}
