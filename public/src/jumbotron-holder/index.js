require('insert-css')(require('./style.css'))

module.exports = {
    id: 'jumbotron-holder',
    template: require('./template.html'),
    data: {
        expanded: false ,
        visible: false,
        fixed: false,
        bottom: false,
    },

    methods: {
        toggle: function(property, e) {
            console.log('happened');
            this.property = !property;
            e.stopPropagation();
            e.preventDefault();
        }
    },
}
