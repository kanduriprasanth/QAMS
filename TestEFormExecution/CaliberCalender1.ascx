<%@ Control Language="vb" AutoEventWireup="false" Codebehind="CaliberCalender1.ascx.vb" Inherits="TestEFormExecution.CaliberCalender1" %>
<asp:TextBox CssClass="TxtCls" id="CalDateDisplay" runat="server"  ReadOnly="True" onkeydown="if(window.event.keyCode==46){this.value='';}"
	Width="100px"></asp:TextBox><asp:TextBox id="CalDateVal" runat="server" Height="0" Width="0"></asp:TextBox><asp:Literal id="ClientButtonDisplay" runat="server"></asp:Literal><asp:RequiredFieldValidator id="RequiredFieldValidator1" runat="server" ErrorMessage="Select Date" ControlToValidate="CalDateDisplay">*</asp:RequiredFieldValidator>