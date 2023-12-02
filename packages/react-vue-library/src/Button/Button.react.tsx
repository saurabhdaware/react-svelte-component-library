import './buttonStyles.css';

const Button = ({ onClick, children }: { onClick: () => void; children: (string | number)[] }) => {
  return (
    <button className="ds-button" onClick={onClick}>{children}</button>
  )
}

export default Button;