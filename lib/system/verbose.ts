import { verboseEnabled } from '../constants';

export function verbose(...args: any[]) {
  if (verboseEnabled) {
    console.log(...args);
  }
}