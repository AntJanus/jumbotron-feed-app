require('insert-css')(require('./style.css'))

module.exports = {
    id: 'jumbotron-holder',
    template: require('./template.html'),
    data: {
        expanded: false,
        visible: false,
        bottom: false,
    },

    methods: {
        toggle: function(property, e) {
            this[property] = true;
            e.stopPropagation();
            e.preventDefault();
        },
        toggleExpanded: function(e) {
            this.expanded = !this.expanded;
            e.stopPropagation();
            e.preventDefault();
        },
        toggleVisible: function(e) {
            this.visible = !this.visible;
            e.stopPropagation();
            e.preventDefault();
        },
        toggleBottom: function(e) {
            this.bottom = !this.bottom;
            e.stopPropagation();
            e.preventDefault();
        }
    },
}
