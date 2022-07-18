window.onload = function () {
    const WIDTH = 9;
    const HEIGHT = 15;
    const MAX_COLOR = 5;

    let tetrisField = document.querySelector('#tetris-field');
    let scoreField = document.querySelector('.score-field');
    let color = [1, 2, 3, 4, 5];
    let timer;
    let score = 0;

    function init() {
        let field = [];

        for (let i = 0; i < HEIGHT; i++) {
            field[i] = [];

            for (let j = 0; j < WIDTH; j ++) {
                field[i][j] = 0;
            }
        }

        return field;
    }

    function draw() {
        let out = '';

        for (let i = 0; i < HEIGHT; i++) {
            for (let j = 0; j < WIDTH; j++) {

                switch (tetris[i][j]) {

                    case 1:
                        out += '<div class="brick orange"></div>';
                        break;

                    case 2:
                        out += '<div class="brick red"></div>';
                        break;

                    case 3:
                        out += '<div class="brick blue"></div>';
                        break;

                    case 4:
                        out += '<div class="brick green"></div>';
                        break;

                    case 5:
                        out += '<div class="brick purple"></div>';
                        break;

                    default:
                        out += '<div class="brick white"></div>';
                        break;
                }
            }
        }

        tetrisField.innerHTML = out;
        scoreField.innerHTML = score;
    }

    function square() {
        tetris[0][0] = 1 + Math.floor(Math.random() * MAX_COLOR);
    }

    function down() {
        draw();

        let newDrop = true;

        for (let i = HEIGHT - 2; i >= 0; i--) {
            for (let j = 0; j < WIDTH; j++) {
                if (tetris[i][j] != 0 && tetris[i + 1][j] == 0) {
                    tetris[i + 1][j] = tetris[i][j];
                    tetris[i][j] = 0;
                    newDrop = false;
                }
            }
        }

        if (newDrop) {
            square();
        }
    }

    let tetris = init();
    draw();
    square();

    document.querySelector('.start').onclick = down;
}
