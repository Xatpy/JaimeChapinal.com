module.exports = {
    trailingComma: 'es5',
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    overrides: [
        {
            files: ['**/*.html'],
            options: {
                printWidth: 150,
            },
        },
    ],
}
