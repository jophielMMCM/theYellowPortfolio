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

        // FORCE TWO ROWS MAX FOR 7-8 ITEMS:
        // If we are on row 2 (currentLineUnits is 0 because row 1 finished) and 
        // the remaining items can cleanly split the 12 columns, force them to fill it.
        if (currentLineUnits === 0 && itemsLeftIncludingThisOne <= 4 && itemsLeftIncludingThisOne > 1) {
            chosenSpan = Math.floor(12 / itemsLeftIncludingThisOne);
        }
        // ABSOLUTE LAST ITEM SAFETY: Fill whatever empty space remains on the current line
        else if (itemsLeftIncludingThisOne === 1) {
            chosenSpan = 12 - currentLineUnits;
        }
        // STANDARD RANDOM SELECTION RUN:
        else {
            if (setIndex >= currentSet.length) {
                const randomSetIndex = Math.floor(Math.random() * rowSets.length);
                currentSet = rowSets[randomSetIndex];
                setIndex = 0;
            }
            chosenSpan = currentSet[setIndex];
            setIndex++;
        }

        // Final safety check to make sure random selections never overflow the grid bounds
        if (chosenSpan > (12 - currentLineUnits)) {
            chosenSpan = 12 - currentLineUnits;
        }

        item.style.gridColumn = `span ${chosenSpan}`;
        currentLineUnits += chosenSpan;

        // Row tracker reset
        if (currentLineUnits >= 12) {
            currentLineUnits = 0;
        }

        grid.appendChild(item);
    });
});
