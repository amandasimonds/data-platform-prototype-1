export const comboSample = {
    combos: [
        {
            id: 'a',
            label: 'ECM',
        },
        {
            id: 'b',
            label: 'Software Build',
        },
        {
            id: 'c',
            label: 'Software Version',
        },
        {
            id: 'd',
            label: 'Software Component',
            // parentId: 'b',
        },
    ],
    nodes: [
        {
            id: '0',
            label: 'ESN'
        },
        {
            id: '1',
            comboId: 'a',
            label: 'ECM 1'
        },
        {
            id: '2',
            comboId: 'a',
        },
        {
            id: '3',
            comboId: 'a',
        },
        {
            id: '4',
            comboId: 'a',
        },
        {
            id: '5',
            comboId: 'a',
        },
        {
            id: '6',
            comboId: 'a',
        },
        {
            id: '7',
            comboId: 'a',
        },
        {
            id: '8',
            comboId: 'a',
        },
        {
            id: '9',
            comboId: 'a',
        },
        {
            id: '10',
            comboId: 'a',
        },
        {
            id: '11',
            comboId: 'a',
        },
        {
            id: '12',
            comboId: 'a',
        },
        {
            id: '13',
            comboId: 'a',
        },
        {
            id: '14',
            comboId: 'a',
        },
        {
            id: '15',
            comboId: 'a',
        },
        {
            id: '16',
            comboId: 'b',
        },
        {
            id: '17',
            comboId: 'b',
        },
        {
            id: '18',
            comboId: 'b',
        },
        {
            id: '19',
            comboId: 'b',
        },
        {
            id: '23',
            comboId: 'c',
        },
        {
            id: '28',
            comboId: 'c',
        },
        {
            id: '29',
            comboId: 'c',
        },
        {
            id: '30',
            comboId: 'c',
        },
        {
            id: '31',
            comboId: 'c',
        },
        {
            id: '32',
            comboId: 'd',
        },
        {
            id: '33',
            comboId: 'd',
        },
    ],
    edges: [
        {
            source: 'a',
            target: 'b',
            label: 'Combo A - Combo B',
            size: 3,
            labelCfg: {
                // autoRotate: true,
                style: {
                    stroke: 'white',
                    lineWidth: 5,
                    fontSize: 20,
                },
            },
            style: {
                stroke: 'red',
            },
        },
        {
            source: 'b',
            target: 'c',
            label: 'Combo B - Combo C',
            size: 3,
            labelCfg: {
                autoRotate: true,
                style: {
                    stroke: '#fff',
                    lineWidth: 5,
                    fontSize: 20,
                },
            },
            style: {
                stroke: 'blue',
            }
        }
    ],
};