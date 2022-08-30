const inputs = [
    '15',
    'AFC',
    'AAFC',
    'AAAFFCC',
    'AAFCC',
    'BAFC',
    'QWEDFGHJMNB',
    'DFAFCB',
    'ABCDEFC',
    'DADC'
];


const Main = () => {

    const regex = /^[A-F]?A+F+C+[A-F]?$/
    for (let i = 0; i < inputs.length; i++) {
        const line = inputs[i];

        if (line.match(regex))
            console.log('Infected!');
        else
            console.log('Good');
    }
}

Main();
