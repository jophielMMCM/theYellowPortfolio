window.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.portfolio-grid') || document.querySelector('.work-grid');
    if (!grid) return;

    if (grid.classList.contains('small-gallery')) return;

    const items = Array.from(grid.children);
    grid.innerHTML = '';

    const rowSets = Array.of(
        Array.of(4, 4, 4),    
        Array.of(6, 3, 3),    
        Array.of(3, 3, 6),    
        Array.of(2, 4, 4, 2), 
        Array.of(3, 6, 3),    
        Array.of(4, 2, 6)     
    );

    let currentSet = Array.of();
    let setIndex = 0;
    let currentLineUnits = 0;

    items.forEach((item, index) => {
        const itemsLeftIncludingThisOne = items.length - index;
        let chosenSpan = 2;

        if (currentLineUnits === 0 && itemsLeftIncludingThisOne <= 4 && itemsLeftIncludingThisOne > 1) {
            chosenSpan = Math.floor(12 / itemsLeftIncludingThisOne);
        }
        else if (itemsLeftIncludingThisOne === 1) {
            chosenSpan = 12 - currentLineUnits;
        }
        else {
            if (setIndex >= currentSet.length) {
                const randomSetIndex = Math.floor(Math.random() * rowSets.length);
                currentSet = rowSets[randomSetIndex];
                setIndex = 0;
            }
            chosenSpan = currentSet[setIndex];
            setIndex++;
        }

        if (chosenSpan > (12 - currentLineUnits)) {
            chosenSpan = 12 - currentLineUnits;
        }

        item.style.gridColumn = `span ${chosenSpan}`;
        currentLineUnits += chosenSpan;

        if (currentLineUnits >= 12) {
            currentLineUnits = 0;
        }

        grid.appendChild(item);
    });
});
