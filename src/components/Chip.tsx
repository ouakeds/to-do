export interface ChipProps {
  title: string;
  color: string;
}

const Chip: React.FC<ChipProps> = ({color, title}) => {
  return <span className={`bg-${color}-100 text-${color}-800 text-l font-medium mr-2 px-2.5 py-0.5 rounded-full`}>{title}</span>
}

export default Chip;