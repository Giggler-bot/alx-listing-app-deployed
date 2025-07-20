export interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
}

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}
