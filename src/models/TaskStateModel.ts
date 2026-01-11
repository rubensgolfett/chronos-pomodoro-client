import type { TaskModels } from "./TaskModels"

export type TaskStateModels = {
  tasks: TaskModels[];
  secondsRemaining: number;
  formatterSecondsRemaining: string;
  activeTasks: TaskModels | null;
  currentCycles: number;
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};