<%@ Page Language="C#" AutoEventWireup="true" Codebehind="SectionListPopup.aspx.cs"
	Inherits="DMSManagement.SectionListPopup" %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
<head id="Head1" runat="server">
	<title>
		<%=MainTitleLtrl.Text%>
	</title>
	<meta name="GENERATOR" content="Microsoft Visual Studio .NET 7.1">
	<meta name="CODE_LANGUAGE" content="Visual Basic .NET 7.1">
	<meta name="vs_defaultClientScript" content="JavaScript">
	
	<link rel="stylesheet" href="../TRIMS.css">

	<script type='text/javascript' src="../JScript/jquery.min.js"></script>

	<script type='text/javascript'>
	function fnCrCancel()
	{
		opener.GetENoteBookVals('','','','','')
		window.self.close()
	}
	
	document.oncontextmenu=new Function("return false")
	
	function fnSpCloseWin()
	{
		if($("#SelListTxt").val() =="")
		{
			alert("Select Section! ")
			return(false);
		}
		window.self.close()
	}
	</script>

</head>
<body ms_positioning="GridLayout" onload="document.getElementByid('FindTxt').focus()" onblur="document.getElementById('FindTxt').focus()">
	<form id="Form1" method="post" runat="server">
		<table class="MainTable" height="100%" cellspacing="0" cellpadding="0" width="100%"
			align="center">
			<!-- MAIN HEADER -->
			<tr class="MainHead">
				<td>
					<a accesskey="S" class="AHover" href="JavaScript:window.history.back();" onmouseover="className='AHover'"
						title=" Back ">
					<img border="0" onmouseout="this.src='../Images/back_n.png'" onmouseover="this.src='../Images/back_o.png'"
						src="../Images/back_n.png" style="height: 25px" /></a>&nbsp;
					<asp:Literal ID="MainTitleLtrl" runat="server"></asp:Literal></td>
			</tr>
			<tr>
				<td>
					<table width="100%" cellspacing="0" cellpadding="0" align="center">
						<tr class="HideRow">
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
						<tr>
							<td class="MainTd" colspan="1">
								<asp:Literal ID="SearchOptionLtrl" runat="server">Search Option</asp:Literal>
							</td>
							<td class="MainTd" colspan="3">
								<asp:RadioButtonList ID="SearchOptionRD" runat="server" RepeatDirection="Horizontal"
									CellPadding="0" CssClass="RBList" CellSpacing="0" Height="18px">
								</asp:RadioButtonList>
							</td>
						</tr>
						<tr>
							<td class="MainTd" colspan="2">
								<asp:Literal ID="FindLrl" runat="server">Find</asp:Literal>
								<asp:TextBox ID="FindTxt" MaxLength="30" runat="server" Width="180px" CssClass='TxtCls'>%</asp:TextBox>
							</td>
							<td class="MainTd" colspan="2">
								<asp:Literal ID="FetchSizeLtrl" runat="server">Records Limit</asp:Literal>
								<asp:TextBox ID="FetchSizeTxt" runat="server" Width="50px" CssClass="TxtCls" MaxLength="3">50</asp:TextBox>
								<asp:Button ID="btnFind" runat="server" Text="Display" class="ButCls" onmouseover="this.className='ButOCls'"
									onmouseout="this.className='ButCls'" OnClick="btnFind_Click"></asp:Button>
							</td>
						</tr>
						<tr>
							<td class="MainTd" colspan="4">
								<div style="overflow: auto; height: 200px; background-color: gray">
									<asp:Table ID="ResTab" runat="server" Width="100%" BorderWidth="0" CellSpacing="1"
										CellPadding="0" CssClass="SubTable">
									</asp:Table>
								</div>
							</td>
						</tr>
						<tr class="HideRow">
							<td id="RBVal">
							</td>
							<td>
								<asp:TextBox ID="TableIdTxt" runat="server"></asp:TextBox>
							</td>
						</tr>
					</table>
				</td>
			</tr>
			<!-- MAIN FOOTER -->
			<tr class="MainFoot">
				<td>
					<input class="ButCls" onmouseover="this.className='ButOCls'" onclick="fnSpCloseWin()"
						onmouseout="this.className='ButCls'" type="button" value="Ok" />
					<input class="ButCls" onmouseover="this.className='ButOCls'" onclick="fnCrCancel()"
						onmouseout="this.className='ButCls'" type="button" value="Cancel" />
					<input type="text" id="SelListTxt" style="display: none" />
				</td>
			</tr>
		</table>
	</form>
</body>

<script type='text/javascript'>

  $(':radio').click(function(){

	   // this.checked =true;
		var ENBId,ENBAulId,ENBDesc,Secid,SecDesc;
		ENBId = $("#ENBID"+ $(this).val()).text();
		ENBAulId = $("#ENBAULID"+ $(this).val()).text();
		ENBDesc = $("#ENBDesc"+ $(this).val()).text();
		Secid = $("#SecIdID"+ $(this).val()).text();
		SecDesc = $("#SecDes"+ $(this).val()).text();

		$("#SelListTxt").val(ENBId);

		opener.GetENoteBookVals(ENBId,ENBAulId,ENBDesc,Secid,SecDesc)

  });
</script>

</html>
