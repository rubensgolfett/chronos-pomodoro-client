import type { TaskStateModels } from "./TaskStateModel";

export type TaskModels = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null;
  interruptDate: number | null;
  type: keyof TaskStateModels['config']
}
