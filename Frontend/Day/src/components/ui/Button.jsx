function Button({ children, onClick }) {
  return (
    <button className="bg-accent text-textMain p-2 px-4 py-2" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

