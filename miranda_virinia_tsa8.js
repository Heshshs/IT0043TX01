document.addEventListener('DOMContentLoaded', () => {
    const flexContainer = document.querySelector('.flex-container');
    const gapInput = document.getElementById('gp');
    const boxInputs = [1, 2, 3].map(i => document.getElementById(`box${i}`));

    const setStyle = (property, value) => flexContainer.style[property] = value;
    const resetFlexbox = () => {
        setStyle('gap', '0px');
        setStyle('flexDirection', 'row');
        setStyle('justifyContent', 'flex-start');
        setStyle('alignItems', 'flex-start');
        gapInput.value = 0;
        resetFlexGrow();
    };

    const updateFlexbox = () => setStyle('gap', `${gapInput.value}px`);
    const setFlexDirection = direction => setStyle('flexDirection', direction);
    const setJustifyContent = justify => setStyle('justifyContent', justify);
    const setAlignItems = align => setStyle('alignItems', align);

    const resetFlexGrow = () => {
        document.querySelectorAll('.flex-item').forEach(item => item.style.flexGrow = 0);
        boxInputs.forEach(input => input.value = 0);
    };

    const setFlexGrowAll = () => {
        document.querySelectorAll('.flex-item').forEach(item => item.style.flexGrow = 1);
    };

    const updateFlexGrow = (boxNumber) => {
        document.getElementById(`item${boxNumber}`).style.flexGrow = document.getElementById(`box${boxNumber}`).value;
    };

    gapInput.addEventListener('input', updateFlexbox);
    boxInputs.forEach((input, i) => input.addEventListener('input', () => updateFlexGrow(i + 1)));

    document.getElementById('reset-flexbox').addEventListener('click', resetFlexbox);
    document.getElementById('grow-all').addEventListener('click', setFlexGrowAll);

    ['row', 'column'].forEach(dir => document.getElementById(dir).addEventListener('click', () => setFlexDirection(dir)));
    ['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly']
        .forEach(justify => document.getElementById(justify).addEventListener('click', () => setJustifyContent(justify)));
    ['startj', 'centerj', 'endj']
        .forEach(align => document.getElementById(align).addEventListener('click', () => setAlignItems(align.replace('j', ''))));
});
