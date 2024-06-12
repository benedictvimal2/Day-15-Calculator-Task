document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = [
        'C', '←', '.', '÷',
        '7', '8', '9', '×',
        '4', '5', '6', '−',
        '1', '2', '3', '+',
        '0', '00', '=', 
    ];

    const buttonContainer = document.querySelector('.btn-group');
    
    buttons.forEach(function(button) {
        const buttonElement = document.createElement('button');
        buttonElement.textContent = button;
        buttonElement.classList.add('btn', 'btn-light', 'border');
        buttonContainer.appendChild(buttonElement);

        buttonElement.addEventListener('click', function() {
            handleButtonClick(button);
        });
    });

    function handleButtonClick(value) {
        if (value === 'C') {
            display.textContent = '0';
        } else if (value === '←') {
            display.textContent = display.textContent.slice(0, -1) || '0';
        } else if (value === '=') {
            try {
                display.textContent = eval(display.textContent.replace('×', '*').replace('÷', '/').replace('−', '-'));
            } catch {
                display.textContent = 'Error';
            }
        } else {
            if (display.textContent === '0') {
                display.textContent = value === '.' ? '0.' : value;
            } else {
                display.textContent += value;
            }
        }
    }

    document.addEventListener('keydown', function(event) {
        const key = event.key;
        if ((key >= '0' && key <= '9') || key === '.' || key === '/' || key === '*' || key === '-' || key === '+') {
            handleButtonClick(key === '/' ? '÷' : key === '*' ? '×' : key === '-' ? '−' : key);
        } else if (key === 'Enter') {
            handleButtonClick('=');
        } else if (key === 'Backspace') {
            handleButtonClick('←');
        } else if (key === 'Escape') {
            handleButtonClick('C');
        } else {
            alert("Only numbers are allowed");
        }
    });
});
