<%@ Page Language="vb" AutoEventWireup="false" Codebehind="EFormTablePopUp.aspx.vb"
    Inherits="TestDynamicEForm.EFormTablePopUp" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<HTML>
	<HEAD>
		<title><%=MainTitleLtrl.Text%></title>
		<meta name="GENERATOR" content="Microsoft Visual Studio .NET 7.1">
		<meta name="CODE_LANGUAGE" content="Visual Basic .NET 7.1">
		<meta name="vs_defaultClientScript" content="JavaScript">
		<link rel="stylesheet" href="../TRIMS.css">
		<script language="javascript" src="../JScript/Common2.js"></script>
	</HEAD>
	<body MS_POSITIONING="GridLayout" onload="document.getElementById('FindTxt').focus()" onblur="document.getElementById('FindTxt').focus()">
		<form id="Form1" method="post" runat="server">
			<TABLE class="MainTable" height="100%" cellSpacing="0" cellPadding="0" width="100%" align="center"
				border="0">
				<!-- MAIN HEADER -->
				<TR>
					<TD class="MainHead"><asp:Literal ID="MainTitleLtrl" runat="server"></asp:Literal></TD>
				</TR>
				<TR>
					<TD>
						<DIV class="MainTd" style="HEIGHT: 20px" ID="Div1">
							<table width="100%" cellSpacing="0" cellPadding="0" align="center">
								<tr class="HideRow">
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<Tr>
									<td class="MainTd" colspan="1">
										<asp:literal id="SearchOptionLtrl" runat="server">Search Option</asp:literal>
									</td>
									<td class="MainTd" colspan="3">
										   <asp:RadioButtonList ID="SearchOptionRD" runat="server" RepeatDirection="Horizontal"
                                        CellPadding="0" CssClass="RBList" CellSpacing="0" Height="18px">
                                    </asp:RadioButtonList>
									</td>
								</Tr>
								<tr>
									<td class="MainTd" colspan="2">
										<asp:literal id="FindLrl" runat="server">Find</asp:literal>
										<asp:TextBox ID="FindTxt" maxLength="30"  runat="server" Width="180px" CssClass='TxtCls'>%</asp:TextBox>
									</td>
									<td class="MainTd" colspan="2">
										<asp:literal id="FetchSizeLtrl" runat="server">Records Limit</asp:literal>
										<asp:textbox id="FetchSizeTxt" runat="server" Width="50px" CssClass="TxtCls" MaxLength="3">50</asp:textbox>
										<asp:Button id="btnFind" runat="server" Text="Display" class="ButCls" onmouseover="this.className='ButOCls'"
											onmouseout="this.className='ButCls'"></asp:Button>
									</td>
								</tr>
								<tr>
									<td class="MainTd" colspan="4">
                         				<DIV style="OVERFLOW: auto; HEIGHT: 200px; BACKGROUND-COLOR: gray">
											<asp:table id="ResTab" runat="server" Width="100%" BorderWidth="0" CellSpacing="1" CellPadding="0"
												CssClass="SubTable"></asp:table></DIV>
									</td>
								</tr>
									<tr class ="HideRow" >
                                    <td  id ="RBVal"></td>
                                    <td>
                                   </td>
                                </tr>
							</table>
						</DIV>
					</TD>
				</TR>
				<!-- MAIN FOOTER -->
				<TR>
					<TD class="MainFoot">
				     <input class="ButCls" onmouseover="this.className='ButOCls'" style="width: 50px"
                        onclick="fnSpCloseWin()" onmouseout="this.className='ButCls'" type="button" value="Ok">
                    <input class="ButCls" onmouseover="this.className='ButOCls'" style="width: 60px"
                        onclick="fnCrCancel()" onmouseout="this.className='ButCls'" type="button" value="Cancel">
</TD>
				</TR>
			</TABLE>
		</form>


<script language="javascript">

    function fnCrGetCode(RowCnt)
    { 
        EFTblId = document.all("EFTblId" + RowCnt).innerText 
        EFTblUCode = document.all("EFTblUCode" + RowCnt).innerText 
        var EFTblCode = document.all("EFTblAulId" + RowCnt).innerText 

        document.getElementById("RBVal").innerHTML = EFTblId

        opener.fnEFormTableVal(EFTblId,EFTblCode, EFTblUCode)
    }
    function fnCrCancel()
    {
        opener.fnEFormTableVal('','','')
        window.self.close()
    }

    document.oncontextmenu=new Function("return false")
    function fnSpCloseWin()
    {
        if(document.getElementById("RBVal").innerHTML == undefined)
        {
            alert("Select "+ "<%=ErrerMessageTxt%>" + "! ")
            return(false);
        }
        window.self.close()
        opener.CreatePostback()
        document.getElementById ("")
    }

//This part of code will Hide The Table Row 
// Of Alrady Selected eFormTable For Body Creation 
//[ from the CreationList popup of Creation Page]

    //Get the Selected eFormTable Id ---TableId
    var TableId = opener.window.document.getElementById("TableId").value
    var TCnt =0
    var SelVal = ""
    
    //Find The Row Count with respect to the eFormTableId --SelVal
    while(document.getElementById ("EFTblId"+TCnt) !=null)
    {
        if(TableId ==document.getElementById ("EFTblId"+TCnt).innerHTML )
        {
            SelVal= TCnt
            break;
        }
        TCnt+=1;
    }
    if(SelVal+"" != "")
    {
        //disable the Relavent RadioButton
        document.getElementById ("RBID"+SelVal).disabled =true;

        //Hide the Relavent Row
        //["RBID"+SelVal --> RadioButton      ].[TableCell].[TableRow]
        document.getElementById ("RBID"+SelVal).parentNode.parentNode.className = "HideRow"
    }
</script>
	</body>
</HTML>