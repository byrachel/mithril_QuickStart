import m from "mithril";

// IMPORTS
var UserList = require("./views/UserList")
var UserForm = require("./views/UserForm")
var Layout = require("./views/Layout")

// RENDER
// m.render(document.body, "hello world");
// m.mount(document.body, UserList)

// ROUTING

// m.route(document.body, "/list", {
//     "/list": UserList,
//     "/edit/:id": UserForm,

m.route(document.body, "/list", {
    "/list": {
        render: function() {
            return m(Layout, m(UserList))
        }
    },
    "/edit/:id": {
        render: function(vnode) {
            return m(Layout, m(UserForm, vnode.attrs))
        }
    },
})
