var Vue = require('vue')

new Vue({

    el: '#jumbotrons',

    directives: {
        flip: require('./directives/flip')
    },

    filters: {
        reverse: require('./filters/reverse')
    },

    components: {
        "jumbotron-holder": require('jumbotron-holder')
    },

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
