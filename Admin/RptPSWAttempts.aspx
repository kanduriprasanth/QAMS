<%@ Page Language="vb" AutoEventWireup="false" Codebehind="RptPSWAttempts.aspx.vb" Inherits="Admin.RptPSWAttempts" %>
<%@ Register TagPrefix="uc1" TagName="SearchCtrl4" Src="SearchCtrl4.ascx" %>
<%@ Register TagPrefix="uc1" TagName="CaliberCalender" Src="../CaliberCommonCtrls/CaliberCalender.ascx" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<HTML>
	<HEAD>
		<title></title>
		<meta name="GENERATOR" content="Microsoft Visual Studio .NET 7.1">
		<meta name="CODE_LANGUAGE" content="Visual Basic .NET 7.1">
		<meta name="vs_defaultClientScript" content="JavaScript">
		
		<%--<LINK href="CUSTOM.css" type="text/css" rel="stylesheet">--%>
		<LINK href="../TRIMS.css" type="text/css" rel="stylesheet">
			<script language="javascript" src="../JScript/Common2.js"></script>
			  <script type="text/javascript">
                document.oncontextmenu=new Function("return false");
                </script>
	</HEAD>
	<body MS_POSITIONING="GridLayout">
		<form id="f1" name="f1" method="post" runat="server">
			<asp:ValidationSummary id="ValidationSummary2" style="Z-INDEX: 101; LEFT: 8px; POSITION: absolute; TOP: 8px"
				runat="server" ShowMessageBox="True" ShowSummary="False"></asp:ValidationSummary>
			<TABLE class="MainTable" height="100" cellSpacing="0" cellPadding="0" width="550" align="center"
				border="0">
				<!-- MAIN HEADER -->
				<TR>
					<TD class="MainHead"><asp:Literal ID="MainHeadLtrl" Runat="server"></asp:Literal> </TD>
				</TR>
				<TR>
					<TD>
						<TABLE class="SubTable" cellSpacing="0" cellPadding="0" width="100%" align="center">
							<TR>
								<TD class="SubHead"><asp:Literal ID="SubHeadLtrl" Runat="server"></asp:Literal></TD>
							</TR>
							<TR>
								<TD><asp:table id="Table2" runat="server" HorizontalAlign="center" cellspacing="1" CELLPADDING="0"
										width="100%" CSSClass="SubTable">
										<asp:TableRow>
											<asp:TableCell CSSClass="MainTD" ColumnSpan="6">
												<uc1:SearchCtrl4 id="SearchCtrl1" runat="server"></uc1:SearchCtrl4>
											</asp:TableCell>
										</asp:TableRow>
										<ASP:TABLEROW>
											<ASP:TABLECELL CssClass="MainTD">
												<ASP:LITERAL id="MaxRecLtrl" Runat="server"></ASP:LITERAL>
											</ASP:TABLECELL>
											<ASP:TABLECELL CssClass="MainTD">
												<ASP:LITERAL id="MaxRecCntLtrl" Runat="server">0</ASP:LITERAL>
											</ASP:TABLECELL>
											<ASP:TABLECELL CssClass="MainTD">
												<ASP:LITERAL id="RecPerPageLtrl" Runat="server"></ASP:LITERAL>
											</ASP:TABLECELL>
											<ASP:TABLECELL CssClass="MainTD">
												<ASP:TEXTBOX ID="RecPerPageTxt" MaxLength="3" CssClass="TxtCls" Runat="server" AutoPostBack="False"
													Width="50px">20</ASP:TEXTBOX>
											</ASP:TABLECELL>
											<ASP:TABLECELL CssClass="MainTD">
												<ASP:LITERAL id="PgNoLtrl" Runat="server"></ASP:LITERAL>
											</ASP:TABLECELL>
											<ASP:TABLECELL CssClass="MainTD">
									<ASP:TEXTBOX id="PgNoTxt" CssClass="TxtCls" Runat="server" AutoPostBack="True" Width="50px" MaxLength="5">1</ASP:TEXTBOX>
										
										&nbsp;<input type="button" onClick="submit()" class='ButCls' onMouseOver="this.className='ButOCls'"
													onMouseOut="this.className='ButCls'" Value='Display'>
									</ASP:TABLECELL>
										</ASP:TABLEROW>
									</asp:table></TD>
							</TR>
							<TR>
								<TD>
									<asp:DataGrid CssClass="SubTable" id="DataGrid1" CellPadding="0" CellSpacing="1" BorderWidth="0"
										runat="server" Width="100%" AutoGenerateColumns="False" AllowPaging="True" PagerStyle-Mode="NumericPages"
										PageSize="20" PagerStyle-CssClass="PagerTD" PagerStyle-PageButtonCount="15" PagerStyle-HorizontalAlign="Center">
										<Columns>
											<asp:TemplateColumn HeaderStyle-CssClass="HeadTD" ItemStyle-CssClass="MainTD" HeaderText="S. No." ItemStyle-Width="45">
												<ItemTemplate>
													<asp:Label id="Label3" runat="server" Text='<%# DataBinder.Eval(Container, "DataSetIndex","{0}")+1 %>'>Label</asp:Label>
												</ItemTemplate>
											</asp:TemplateColumn>
											<asp:TemplateColumn HeaderStyle-CssClass="HeadTD" ItemStyle-CssClass="MainTD" HeaderText="User Name">
												<ItemTemplate>
													<asp:Label id="Label6" runat="server" Text='<%# DataBinder.Eval(Container, "DataItem.UserName") %>'>
													</asp:Label>
												</ItemTemplate>
											</asp:TemplateColumn>
											<asp:TemplateColumn HeaderStyle-CssClass="HeadTD" ItemStyle-CssClass="MainTD" HeaderText="IP Address">
												<ItemTemplate>
													<asp:Label id="Label4" runat="server" Text='<%# DataBinder.Eval(Container, "DataItem.IPAddress") %>'>
													</asp:Label>
												</ItemTemplate>
											</asp:TemplateColumn>
											<asp:TemplateColumn HeaderStyle-CssClass="HeadTD" ItemStyle-CssClass="MainTD" HeaderText="Date & Time"
												ItemStyle-Width="135">
												<ItemTemplate>
													<asp:Label id="Label2" runat="server" Text='<%# DataBinder.Eval(Container, "DataItem.AttemptedOn") %>'>
													</asp:Label>
												</ItemTemplate>
											</asp:TemplateColumn>
											<asp:TemplateColumn HeaderStyle-CssClass="HeadTD" ItemStyle-CssClass="MainTD" HeaderText="Attempts"
												ItemStyle-Width="60">
												<ItemTemplate>
													<asp:Label id="Label5" runat="server" Text='<%# DataBinder.Eval(Container, "DataItem.AttemptsNo")%>'>
													</asp:Label>
												</ItemTemplate>
											</asp:TemplateColumn>
										</Columns>
									</asp:DataGrid>
								</TD>
							</TR>
						</TABLE>
					</TD>
				</TR>
				<!-- MAIN FOOTER -->
				<TR>
					<TD class="MainFoot">
						<input class="ButCls" onmouseover="this.className='ButOCls'" onmouseout="this.className='ButCls'"
							type="button" value="Back" style="WIDTH:60px" onclick="window.navigate('AuditTrial.aspx')">
					</TD>
				</TR>
			</TABLE>
		</form>
	</body>
</HTML>
