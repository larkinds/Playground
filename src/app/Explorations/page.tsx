import Card from '../Cards/Card';
import { ColorDial } from './ColorDial/page';
import ToDoList from './ToDoList/page';
import styles from './page.module.css';

export default function Toys() {
  return (
    <div className={styles.parent}>
      <Card title="Todo List">
        <ToDoList />
      </Card>

      <Card title="Color Dial">
        <ColorDial />
      </Card>
    </div>
  );
}
