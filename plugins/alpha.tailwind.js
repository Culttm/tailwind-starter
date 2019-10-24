module.exports = function () {
    return function({ addComponents, e, theme}) {

        const colors = theme('colors');

        const btns = {};

        colors.forEach(color => console.log(color));

    }
};
