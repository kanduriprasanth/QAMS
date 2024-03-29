<%@ Page Language="C#" AutoEventWireup="true" Codebehind="Dummy1.aspx.cs" Inherits="DMSManagement.Dummy1" %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
<head runat="server">
    <title>Untitled Page</title>

<link type='text/css' href='basic.css' rel='stylesheet' media='screen' />

</head>
<body>
<div id='container'>
	<div id='logo'>
		<h1>Simple<span>Modal</span></h1>
		<span class='title'>A Modal Dialog Framework Plugin for jQuery</span>
	</div>
	<div id='content'>
		<div id='basic-modal'>
			<h3>Basic Modal Dialog</h3>
			<p>A basic modal dialog with minimal styling and no additional options. There are a few CSS properties set internally by SimpleModal, however, SimpleModal relies mostly on style options and/or external CSS for the look and feel.</p>
			<input type='button' name='basic' value='Demo' class='basic'/> or <a href='#' class='basic'>Demo</a>
		</div>
		
		<!-- modal content -->
		<div id="basic-modal-content">
			<h3>Basic Modal Dialog</h3>
			<p>For this demo, SimpleModal is using this "hidden" data for its content. You can also populate the modal dialog with an AJAX response, standard HTML or DOM element(s).</p>
			<p>Examples:</p>
			<p><code>$('#basicModalContent').modal(); // jQuery object - this demo</code></p>
			<p><code>$.modal(document.getElementById('basicModalContent')); // DOM</code></p>
			<p><code>$.modal('&lt;p&gt;&lt;b&gt;HTML&lt;/b&gt; elements&lt;/p&gt;'); // HTML</code></p>
			<p><code>$('&lt;div&gt;&lt;/div&gt;').load('page.html').modal(); // AJAX</code></p>
		
			<p><a href='http://www.ericmmartin.com/projects/simplemodal/'>More details...</a></p>
		</div>

		<!-- preload the images -->
		<div style='display:none'>
			<img src='img/basic/x.png' alt='' />
		</div>
	</div>
	<div id='footer'>
		&copy; 2010 Eric Martin | <a href='http://www.ericmmartin.com/'>ericmmartin.com</a> | <a href='http://twitter.com/ericmmartin'>@ericmmartin</a> | <a href='http://twitter.com/simplemodal'>@simplemodal</a>
	</div>
</div>
<!-- Load jQuery, SimpleModal and Basic JS files -->
<script type='text/javascript' src="jquery.min.js"></script>
<script type='text/javascript' src='jquery.simplemodal.js'></script>
<script type='text/javascript' src='basic.js'></script>

</body>
</html>
