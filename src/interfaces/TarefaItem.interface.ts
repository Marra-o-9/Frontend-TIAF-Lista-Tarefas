export interface TarefaItemProps {
    id: number;
    titulo: string;
    onUpdate: (id: number, tarefa: string) => void;
    onDelete: (id: number) => Promise<void>;
  }