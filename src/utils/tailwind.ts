import { create } from 'tailwind-rn-3';
import { StyleProp } from 'react-native';
import styles from '../../styles.json';
import extraStyles from './json/extra-styles.json';

const allStyles = { ...styles, ...extraStyles };

export type TailwindClass = keyof typeof allStyles;

const { tailwind: tw, getColor } = create(allStyles);

const tailwind = (...keys: TailwindClass[]) =>
    tw(keys.join(' ') as string) as StyleProp<any>;

export { tailwind, getColor };
