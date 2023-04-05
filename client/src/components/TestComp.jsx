import React from 'react';

export const TestComp = () => {
    const [stat, setStat] = React.useState(0);

    const handleStat = () => {
        setStat(2);
    };

    return <div onClick={handleStat}>{stat}</div>;
};
