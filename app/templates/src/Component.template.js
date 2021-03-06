/**
 * Copyright (c) <%= author %>
 * egjs-<%= componentname %> projects are licensed under the <%= license %> license
 */
<% if(extendsComponent){ %>import Component from "@egjs/component";<% } %>

/**
 * <%= description %>
 * @alias eg.<%= ComponentName %>
 *<% if(extendsComponent){ %> @extends eg.Component<% } %>
 */
class <%= ComponentName %><% if(extendsComponent){ %> extends Component<% } %> {
}

<%= ComponentName %>.VERSION = "#__VERSION__#";
export default <%= ComponentName %>;
