<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
html,
body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: $base-font-family;
    font-size: 14px;
    color: #2c3e50;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height: 100%;
}
#app {
    height: 100%;
    width: 100%;
}
h1, h2 {
    margin: 0;
}
._container {
    max-width: 319px;
    margin: 0 auto;
}

._primary-link {
    color: $blue;
    font-weight: 700;
    text-decoration: none;
}
._secondary-link {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-decoration: underline;
    color: $black;
}
</style>
