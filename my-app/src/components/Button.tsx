import Button from '@mui/material/Button'

interface MyButtonProps {
  title: string;
  disabled: boolean;
}

function MyButton({ title, disabled }: MyButtonProps) {
  return <Button variant="contained" disabled={disabled}>{title}</Button>;
}

export default MyButton