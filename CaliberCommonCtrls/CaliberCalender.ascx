<%@ Control Language="vb" AutoEventWireup="false" Codebehind="CaliberCalender.ascx.vb" Inherits="CaliberCommonCtrls.CaliberCalender"  %>
<asp:TextBox CssClass="TxtCls" id="CalDateDisplay" runat="server"  ReadOnly="True" 
	Width="100px"></asp:TextBox><asp:TextBox id="CalDateVal" runat="server" Height="0" Width="0"  ></asp:TextBox><asp:Literal id="ClientButtonDisplay" runat="server"></asp:Literal><asp:RequiredFieldValidator id="RequiredFieldValidator1" runat="server" ErrorMessage="Select Date" ControlToValidate="CalDateDisplay">*</asp:RequiredFieldValidator>