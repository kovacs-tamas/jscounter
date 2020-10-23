var json = {
    bela: [
        'taken',
        true,
        'its',
        1,
        -693025855.9177513,
        [
            {
                upon: -796907803,
                slabs: {
                    heard: 794231106.691812,
                    fallen: 789968425.6181083,
                    gift: 1977191675.6533527,
                    aloud: 'sugar',
                    space: 910085137.3047051
                },
                union: {
                    sick: 442982456.54306936,
                    solid: false,
                    kept: false,
                    ate: false,
                    species: -2069521999.5737042
                },
                model: false,
                brick: -1819117779
            },
            true,
            1689174800,
            'remove',
            'passage'
        ]
    ],
    alma: [
        -616580849.5894508,
        'now',
        true,
        [
            -1226230815.7943583,
            [
                'judge',
                'fence',
                {
                    satisfied: 'fewer',
                    negative: 'sell',
                    calm: true,
                    aid: -58416027.80156088,
                    whatever: false
                },
                'magnet',
                'lady'
            ],
            true,
            false,
            1495953974
        ],
        true
    ]
};

console.log(JSON.stringify(json));
json = [12, 34.4];

function walkThrough(obj) {
    if (typeof obj === 'object') {
        for (let k in obj) {
            walkThrough(obj[k]);
        }
    } else if (typeof obj === 'number') {
        sum += obj;
    }
}

var sum = 0;
walkThrough(json);

console.log(sum);
