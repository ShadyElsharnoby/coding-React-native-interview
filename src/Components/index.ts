import { lazy } from 'react';

import MainHeader from './Headers/MainHeader/MainHeader';

const GradientButton = lazy(
    () => import('./Buttons/GradientButton/GradientButton'),
);

export { GradientButton, MainHeader };
