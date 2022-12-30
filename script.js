'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const firstForm = document.querySelector('#first_form'),
          meaningA  = document.querySelector('#meaning_a'),
          meaningB  = document.querySelector('#meaning_b'),
          meaningC  = document.querySelector('#meaning_c');

    let result = document.querySelector('.result'), x1, x2, D, a, b, c;

    function styleColor(strColor) {
        result.style.color = strColor;
    }

    function solvingQuadraticEquation() {
        a = Number(meaningA.value),
        b = Number(meaningB.value),
        c = Number(meaningC.value);

        try {
            if (a == 0) {
                result.innerHTML = 'Ошибка! Вы ввели недопустимое значение!';
                styleColor('red');
                return false;
            }

            D = b * b - 4 * a * c;

            if (D > 0) {
                x1 = (-b + Math.sqrt(D)) / (2 * a);
                x2 = (-b - Math.sqrt(D)) / (2 * a);
                result.innerHTML = `Коэффициенты: a="${a}", b="${b}", c="${c}"<br>
                                    Корни уравнения: x1="${x1}" x2="${x2}"<br>
                                    Дискриминант: (D)="${D}"`;
                styleColor('blue');
            } else if (D == 0) {
                x1 = -b / (2 * a);
                result.innerHTML = `Коэффициенты: a="${a}", b="${b}", c="${c}"<br>
                                    Корни уравнения: x="${x1}"<br>
                                    Дискриминант: (D)="${D}"`;
                styleColor('blue');
            } else if (D < 0) {
                result.innerHTML = `Коэффициенты: a="${a}", b="${b}", c="${c}"<br>
                                    Корней нет!<br>
                                    Дискриминант: (D)="${D}"`;
                styleColor('blue');
            };
        } catch (e) {
            result.innerHTML = `Внимание! В коде JavaScript допущена ошибка<br> 
                                <span class="error">${e.name}:</span>
                                <span class="error-message">${e.message}</span>`;
            styleColor('black');
        };
    };

    firstForm.addEventListener('submit', (event) => {
        event.preventDefault();

        solvingQuadraticEquation();

        firstForm.reset();
    });
});
