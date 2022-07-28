import { Config } from 'tailwindcss';
import { colorList, fontSizeList } from './constants';

const colorClasses = colorList.map(color => `.has-${color.name}-color`);

const backgroundColorClasses = colorList.map(
  color => `.has-${color.name}-background-color`
);

const borderColorClasses = colorList.map(
  color => `.has-${color.name}-border-color`
);

const fontSizeClasses = fontSizeList.map(
  fontSize => `.has-${fontSize.name}-font-size`
);

export const mergeToConfig: Config = {
  content: [],
  safelist: [
    ...colorClasses,
    ...borderColorClasses,
    '.has-background',
    ...backgroundColorClasses,
    ...fontSizeClasses,
    '.has-drop-cap',

    '.wp-block-quote',
    '.is-style-plain',
    '.is-style-large',
    '.wp-block-pullquote',
  ],
};