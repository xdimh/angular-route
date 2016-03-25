<footer>
    <h5>Footer</h5>
</footer>
<script type="text/javascript" src="/PHPLearn/src/javascript/3rd/requirejs/require.js"></script>
<script>
    require(['../src/javascript/www-built/common/commonMain'], function (common) {
        // ./js/common.js sets the baseUrl to be ./js/
        // You can ask for 'app/main-about' here instead
        // of './js/app/main-about'
        require(['home/bootstrap']);
    });
</script>
</body>
</html>