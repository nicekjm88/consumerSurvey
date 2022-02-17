module.exports = {
    env: {
        "browser": true,
        "es6": true,
        "node": true
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/vue3-essential"
    ],
    globals: {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    plugins: [
        "vue"
    ],
    rules: {
        'vue/multi-word-component-names': 'off',
        'no-debugger':'off',
    }
};
