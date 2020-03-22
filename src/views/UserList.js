var m = require("mithril")
var User = require("../models/User")

module.exports = {


    // Component lifecycle to load the data / array
    oninit: User.loadList,

    view: function() {

        // Hyperscript -> Equivalent to <div class="user-list"></div>
        // return m(".user-list")

        return m(".user-list", User.list.map(function(user) {
            // Only show the list
            // return m(".user-list-item", user.firstName + " " + user.lastName)
            return m(m.route.Link, {
                class: "user-list-item",
                href: "/edit/" + user.id,
            }, user.firstName + " " + user.lastName)
        }))
    }
}