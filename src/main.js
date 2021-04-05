const cliSelect = require('cli-select');

cliSelect({
    values: ['🎁', '🎁', '🎁', '🎁', '🎁'],
    selected: '👉',
    unselected: '  '
}).then((val) => {
    if (val.id == 3) {
        console.log('🍭');
        console.log('🎈');
        console.log('📯');
        console.log('🗿');
        console.log('🌟');
    } else {
        console.log('💥');
        console.log('💥');
        console.log('💥');
        console.log('💥');
        console.log('💥');
    }
});
