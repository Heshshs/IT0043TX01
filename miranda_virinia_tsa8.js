function resetFlexbox() {
    document.querySelector('.flex-container').style.gap = '0px';
    document.querySelector('.flex-container').style.flexDirection = 'row';
    document.querySelector('.flex-container').style.justifyContent = 'flex-start';
    document.querySelector('.flex-container').style.alignItems = 'flex-start';
    document.getElementById('gap').value = 0;
    resetFlexGrow();
    }
    
    function updateFlexbox() {
    let gap = document.getElementById('gap').value;
    document.querySelector('.flex-container').style.gap = gap + 'px';
    }
    
    function setFlexDirection(direction) {
    document.querySelector('.flex-container').style.flexDirection = direction;
    }
    
    function setJustifyContent(justify) {
    document.querySelector('.flex-container').style.justifyContent = justify;
    }
    
    function setAlignItems(align) {
    document.querySelector('.flex-container').style.alignItems = align;
    }
    
    function resetFlexGrow() {
    let items = document.querySelectorAll('.flex-item');
    items.forEach(item => {
    item.style.flexGrow = 0;
    });
    document.getElementById('box1').value = 0;
    document.getElementById('box2').value = 0;
    document.getElementById('box3').value = 0;
    }
    
    function setFlexGrowAll() {
    let items = document.querySelectorAll('.flex-item');
    items.forEach(item => {
    item.style.flexGrow = 1;
    });
    }
    
    function updateFlexGrow(boxNumber) {
    let growValue = document.getElementById(`box${boxNumber}`).value;
    document.getElementById(`item${boxNumber}`).style.flexGrow = growValue;
    }