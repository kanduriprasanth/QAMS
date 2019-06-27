<%@ Page Language="vb" AutoEventWireup="false" Codebehind="App.aspx.vb" Inherits="AuditObservation.App" %>
<%@ Register TagPrefix="uc1" TagName="EsignObj" Src="../CaliberCommonCtrls/EsignObj.ascx" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<HTML>
	<HEAD>
		<title>App</title>
		<meta content="Microsoft Visual Studio .NET 7.1" name="GENERATOR">
		<meta content="Visual Basic .NET 7.1" name="CODE_LANGUAGE">
		<meta content="JavaScript" name="vs_defaultClientScript">
		
		<LINK href="../TRIMS.css" rel="stylesheet">
		<script language="javascript" src="../JScript/Common2.js"></script>
		<script language="javascript" src="../JScript/jquery.min.js"></script>
		
		<script type="text/javascript">
		    function OpenDocument(DocId) {
		        var yval = parseInt(screen.availHeight) - 250
		        var xval = screen.availWidth - 500

		        var pageURL = "../DMSManagement/ViewDocument.aspx?DocId=" + DocId;
		        SpWinObj = window.open(pageURL, 'RepPopUp', "height=" + yval + ",width=" + xval + ",toolbar=no,resizable=yes,menubar=no,status=no,scrollbars=no,top=1,left=1");
		        if (SpWinObj.opener == null) SpWinObj.opener = self;
		        SpWinObj.focus();
		    }
		</script>
		
		<script language="javascript">
<!--
 RequestPrefix='<%=me.ClientID%>'
      function fnSetToReasons(argValue)//For Remarks
      {   
           document.getElementById('RemarksTxt').value = argValue
      }		
          
        function FnCheckSts()
        {
            var AdtrStsFlg=<%=AdtrStsFlg%>
            var AdteStsFlg=<%=AdteStsFlg%>
            
//            if(<%=AdtType %>==1)
//            {
                if (AdteStsFlg==2 || AdtrStsFlg==2)
                {
                    alert('You Are Not Authorized For Approval Task');
                    document.getElementById("Approve_" + 0).checked=false;
                    document.getElementById("Approve_" + 1).checked=false;
                    document.getElementById("Approve_" + 2).checked=false;
                    return false;
                }
                else
                {
                    document.getElementById("btnConfirm").click();
                }
//            }
//            else
//            {
//                document.getElementById("btnConfirm").click();
//            }
        }

//--> 
		</script>
	</HEAD>
	<body MS_POSITIONING="GridLayout">
		<form id="Form1" method="post" runat="server">
			<asp:table id="Table3" runat="server" CELLPADDING="0" CELLSPACING="0" BorderWidth="3" HorizontalAlign="center"
				cssclass="MainTable" WIDTH="98%" EnableViewState="False">
				<asp:TableRow Height="20">
					<asp:TableCell CssClass="MainHead">
						<asp:Literal ID="MainTitleLtrl" Runat="server"></asp:Literal>
					</asp:TableCell>
				</asp:TableRow>
				<asp:TableRow>
					<asp:TableCell>
						<!-----------Base table------------->
						<asp:Table runat="server" CSSClass="SubTable" width="100%" CELLPADDING="0" cellspacing="1"
							HorizontalAlign="center" ID="Table1">
							<asp:TableRow CssClass="HideRow" Height="0">
								<asp:TableCell></asp:TableCell>
								<asp:TableCell></asp:TableCell>
							</asp:TableRow>
							<asp:TableRow>
								<asp:TableCell CSSClass="SubHead" ColumnSpan="2">
									<asp:Literal id="SubTitleLtrl" runat="server"></asp:Literal>
								</asp:TableCell>
							</asp:TableRow>
							<asp:TableRow>
								<asp:TableCell CssClass="MainTD" ID="AduitTD" ColumnSpan="2">
									<asp:Table ID="Atab" cssclass="MainTD" Runat="server" width="100%" cellpadding="0" cellspacing="0"
										HorizontalAlign="center" style="PADDING-RIGHT:0px;PADDING-LEFT:0px;PADDING-BOTTOM:0px;PADDING-TOP:0px">
										<asp:TableRow>
											<asp:TableCell>
												<asp:Table ID="DataTab" Runat="server" cssClass='SubTable' width="100%" cellpadding="0" cellspacing="1"
													HorizontalAlign="Center"></asp:Table>
											</asp:TableCell>
										</asp:TableRow>
										<asp:TableRow ID="DataTab2Tr" Runat="server" CssClass="HideRow">
											<asp:TableCell>
												<asp:Table ID="DataTab2" Runat="server" cssClass='SubTable' width="100%" cellpadding="0" cellspacing="1"
													HorizontalAlign="Center"></asp:Table>
											</asp:TableCell>
										</asp:TableRow>
										<asp:TableRow>
											<asp:TableCell>
												<asp:Table ID="IATab" Runat="server" cssClass='SubTable' width="100%" cellpadding="0" cellspacing="1"
													HorizontalAlign="Center"></asp:Table>
											</asp:TableCell>
										</asp:TableRow>
										<asp:TableRow>
											<asp:TableCell>
												<asp:Table ID="AppStsTab" Runat="server" cssClass='SubTable' width="100%" cellpadding="0" cellspacing="1"
													HorizontalAlign="Center"></asp:Table>
											</asp:TableCell>
										</asp:TableRow>
									</asp:Table>
								</asp:TableCell>
							</asp:TableRow>
							<asp:TableRow>
								<asp:TableCell CssClass="MainTD" id="DecisionTd" Runat="server">
									<asp:Literal Runat="server" ID="DecisionLtrl"></asp:Literal>
								</asp:TableCell>
								<asp:TableCell CssClass="MainTD">
									<asp:RadioButtonList id="Approve" runat="server" RepeatDirection="Horizontal" CellPadding="0" class="RBList"
										CellSpacing="0" Height="18px"></asp:RadioButtonList>
								</asp:TableCell>
							</asp:TableRow>
							<asp:TableRow>
								<asp:TableCell CssClass="MainTD" ID="RemarksTd" Runat="server">
									<asp:Literal Runat="server" ID="RemarksLtrl"></asp:Literal>
										<asp:TextBox ID="testid" Runat="server" CssClass="hiderow"></asp:TextBox>
								</asp:TableCell>
								<asp:TableCell CssClass="MainTD">
									<asp:TextBox id="RemarksTxt" runat="server" CssClass="TxtCls" MaxLength="250" Width="200px" TextMode="MultiLine"
										Rows="2" AccessKey="R" ></asp:TextBox>
									<INPUT type="button" onclick="fnOpenReasons(1,'RemarksTxt')" class='RsnPUP'>
								</asp:TableCell>
							</asp:TableRow>
							<asp:TableRow ID="EsignRow" Runat="server" CssClass="HideRow">
								<asp:TableCell ColumnSpan="2" style="PADDING-RIGHT:0px;PADDING-LEFT:0px;PADDING-TOP:0px;PADDING-BOTTOM:0px">
									<uc1:EsignObj id="EsignObj1" runat="server" visible="true"></uc1:EsignObj>
								</asp:TableCell>
							</asp:TableRow>
						</asp:Table>
						<!-----------End of Base table------------->
					</asp:TableCell>
				</asp:TableRow>
				<asp:TableRow CssClass="MainFoot">
					<asp:TableCell>
						<asp:Table runat="server" width="100%" CELLPADDING="0" cellspacing="0"
							HorizontalAlign="center" ID="Table2" BorderWidth="0">
							<asp:TableRow CssClass="HideRow" Height="0">
								<asp:TableCell></asp:TableCell>
								<asp:TableCell></asp:TableCell>
							</asp:TableRow>
							<asp:TableRow>
								<asp:TableCell>
								<input type=button  id="btnConfirm1" onMouseOver="this.className='ButOCls'" Class='ButCls'
										accessKey="C" onMouseOut="this.className='ButCls'" onclick="FnCheckSts()" value="Submit" Width="70" />
									<asp:Button id="btnConfirm" runat="server" onMouseOver="this.className='ButOCls'" Class='HideRow'
										accessKey="C" onMouseOut="this.className='ButCls'" Text="" Width="70"></asp:Button>
								</asp:TableCell>
								<asp:TableCell HorizontalAlign="Right">
									<asp:HyperLink ID="Hlink" Runat="server" CssClass="ButSelCls" onMouseOver="this.className='ButSelOCls'"
										onMouseOut="this.className='ButSelCls'" AccessKey="V"></asp:HyperLink>
								</asp:TableCell>
							</asp:TableRow>
							<asp:TableRow CssClass="HideRow">
								<asp:TableCell ColumnSpan="2" id="ValidatorsTd" Runat="server">
									<asp:ValidationSummary id="ValidationSummary1" style="Z-INDEX: 101; LEFT: 232px; POSITION: absolute; TOP: 344px"
										runat="server" ShowMessageBox="True" ShowSummary="False"></asp:ValidationSummary>
								</asp:TableCell>
							</asp:TableRow>
						</asp:Table>
					</asp:TableCell>
				</asp:TableRow>
			</asp:table></form>
			
			<script language="javascript">
			
//			if(document.getElementById("Approve_" + 1)!=null)
//			{
//			    $("#Approve td:nth-child(3)").css("display","none");
//			}
//            if(document.getElementById("Approve_" + 2)!=null)
//			{
//			    $("#Approve td:nth-child(3)").css("display","none");
//			}
//		    if(document.getElementById("Approve_" + 3)!=null)
//			{
//			    $("#Approve td:nth-child(3)").css("display","none");
//			}


  if(<%=Request.QueryString("TT")%>==8)
			{
			    //$("#Approve td:nth-child(2)").css("display","none");
			}
			else
			{
			    $("#Approve td:nth-child(3)").css("display","none");
			}

		</script>
	</body>
	

</HTML>
