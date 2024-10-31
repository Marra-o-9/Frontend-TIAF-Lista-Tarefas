export interface Tarefa {
    id: number;
    titulo: string;
  }
  
export interface ContextoEstadoGlobal {
    tarefas: Tarefa[];
    carregarTarefas: () => void;
    adicionarTarefa: (titulo: string) => Promise<void>; // Modificado para ser async
    editarTarefa: (id: number, novoTitulo: string) => void;
    excluirTarefa: (id: number) => void;
    carregando: boolean;
  }