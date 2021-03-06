/**
 * @fileOverview This file has functions related to list delete confirm view. This view calling from list view.
 * Available Object:
 *	App.boards						: this object contain all boards(Based on logged in user)
 *	this.model						: list model. It contain all list based object @see Available Object in App.ListView
 */
if (typeof App === 'undefined') {
    App = {};
}
/**
 * ListDeleteConfirm View
 * @class ListDeleteConfirmView
 * @constructor
 * @extends Backbone.View
 */
App.ListDeleteConfirmView = Backbone.View.extend({
    /**
     * Constructor
     * initialize default values and actions
     */
    initialize: function() {
        if (!_.isUndefined(this.model) && this.model !== null) {
            this.model.showImage = this.showImage;
        }
        this.render();
    },
    template: JST['templates/list_delete_confirm'],
    tagName: 'div',
    /**
     * render()
     * populate the html to the dom
     * @param NULL
     * @return object
     *
     */
    render: function() {
        this.$el.html(this.template({
            list: this.model
        }));
        this.showTooltip();
        return this;
    }
});
