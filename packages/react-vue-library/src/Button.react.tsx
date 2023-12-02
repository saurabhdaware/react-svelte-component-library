import './buttonStyles.css';

const Button = ({ onClick, children }: { onClick: () => void; className?: string; children: string }) => {
  return (
    <button className="ds-button" onClick={onClick}>{children}</button>
  )
}

export default Button;