import React from 'react';

import ComputationScreen from './ComputationScreen/ComputationScreen';
import ResultScreen from './ResultScreen/ResultScreen';

const screen = () => (
    <section className="screen">
        <ResultScreen />
        <ComputationScreen />
    </section>
);

export default screen;