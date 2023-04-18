export default interface Task {
  title: string;
  done: boolean;
  due?: string;
  tags?: {color: string, title: string}[]
}
