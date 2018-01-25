export enum promptColors {
  primary = '#007BFF',
  secondary = '#868E96',
  success = '#28A745',
  danger = '#DC3545',
  warning = '#FFC107',
  info = '#17A2B8',
  light = '#F8F9FA',
  dark = '#343A40',
  white = '#FFFFFF',
  red = '#FF0000'
}

export interface Prompt {
  title: string;
  info?: string;
  color?: string;
  autoHide?: boolean;
}
