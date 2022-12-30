'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const firstForm = document.querySelector('#first_form'),
          meaningA = firstForm.querySelector('#meaning_a'),
          meaningB = firstForm.querySelector('#meaning_b'),
          meaningC = firstForm.querySelector('#meaning_c');

    let result = document.querySelector('.result'),
        x1, x2, D, a, b, c;

    function solvingQuadraticEquation() {
        a = Number(meaningA.value),
            b = Number(meaningB.value),
            c = Number(meaningC.value);

        try {
            if (a == 0) {
                result.innerHTML = 'Ошибка! Вы ввели недопустимое значение!';
                result.style.color = 'red';
                return false;
            }

            D = b * b - 4 * a * c;

            if (D > 0) {
                x1 = (-b + Math.sqrt(D)) / (2 * a);
                x2 = (-b - Math.sqrt(D)) / (2 * a);
                result.innerHTML = `Коэффициенты: <span class="data-quad">a="${a}", b="${b}", c="${c}"</span><br>
                                    Корни уравнения: <span class="data-quad">x1="${x1}" x2="${x2}"</span><br>
                                    Дискриминант: <span class="data-quad">(D)="${D}"</span>`;
                result.style.color = 'blue';
            } else if (D == 0) {
                x1 = -b / (2 * a);
                result.innerHTML = `Коэффициенты: <span class="data-quad">a="${a}", b="${b}", c="${c}"</span><br>
                                    Корни уравнения: <span class="data-quad">x="${x1}"</span><br>
                                    Дискриминант: <span class="data-quad">(D)="${D}"</span>`;
                result.style.color = 'blue';
            } else if (D < 0) {
                result.innerHTML = `Коэффициенты: <span class="data-quad">a="${a}", b="${b}", c="${c}"</span><br>
                                    Корней нет!<br>
                                    Дискриминант: <span class="data-quad">(D)="${D}"</span>`;
                result.style.color = 'blue';
            }
        } catch (e) {
            result.innerHTML = `Внимание! В коде JavaScript допущена ошибка - <br> 
                                <span class="error">${e.name}:</span>
                                <span class="error-message">${e.message}</span>`;
            result.style.cssText = `background: yellow;
                                    color: black;
                                    padding: 5px;`;
        }
    };

    firstForm.addEventListener('submit', (event) => {
        event.preventDefault();

        solvingQuadraticEquation();

        firstForm.reset();
    });
});
