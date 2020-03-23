var m = require("mithril");

var count = 0;

module.exports = {
    
    view: function(vnode) {
        return m("main.layout", [
            m("h1", { class: "title"}, "Mithril JS"),
            m("h2", { class: "subtitle"}, "demo"),
            m("button", {onclick: function() {count++}}, count + " clic"),
            m("nav.menu", [
                m(m.route.Link, {href: "/list"}, "Users")
            ]),
            m("section", vnode.children),
        ])
    }
}