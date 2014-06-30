require('insert-css')(require('./app.css'))

var Vue = require('vue')

new Vue({
    el: '#app',
    components: {
        "jumbotron-holder": require('./jumbotron-holder')
    },
    // require html enabled by the partialify transform
    template: require('./app.html'),

    data: {
        page: 1,
        jumbotrons: []
    },

    methods: {
        fetchData: function(limit, offset) {
            var xhr = new XMLHttpRequest(),
                self = this
            xhr.open('GET', '/api/')
            xhr.onload = function() {
                self.jumbotrons = JSON.parse(xhr.responseText);
                console.log(self.jumbotrons);
            }
            xhr.send()
        }
    },

    created: function() {
        this.$watch('page', function() {
            this.fetchData(this.page * 10, 0);
        })
    }
})
