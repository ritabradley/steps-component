export default function Button({ children, onClick, styleClass }) {
  return (
    <button className={styleClass} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
}
