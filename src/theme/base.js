import { PureLightTheme } from './schemes/PureLightTheme';
import { GreyGooseTheme } from './schemes/GreyGooseTheme';
import { PurpleFlowTheme } from './schemes/PurpleFlowTheme';
import { AimTheme } from './schemes/AimTheme';
import { SaptTheme} from './schemes/SaptTheme';

const themeMap = {
  PureLightTheme,
  GreyGooseTheme,
  PurpleFlowTheme,
  AimTheme,
  SaptTheme
};

export function themeCreator(theme) {
  return themeMap[theme];
}
