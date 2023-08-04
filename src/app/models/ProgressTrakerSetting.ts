import { ProgressTrakerMode } from 'src/assets/beheviors/progress-traker/ProgressTrakerMode';

export default class ProgressTrakerSetting {
  id: number = 0;
  title: string = '';
  description: string = '';
  mode!: ProgressTrakerMode;
  visited!: boolean;
}
