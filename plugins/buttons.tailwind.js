module.exports =  () => {
    return function({ addComponents, e, theme}) {

        const colors = theme('colors');

        const buttons = {};

        Object.keys(colors).forEach(color => {

            if (typeof colors[color] === 'string') {
                buttons[`.btn-${color}`] = {
                    backgroundColor: colors[color]
                }
            }

            Object.keys(colors[color]).forEach(intensive => {

                buttons[`.btn-${color}-${intensive}`] = {
                    backgroundColor: colors[color][intensive]
                }

            })
        });


        addComponents(buttons)

    }
};

