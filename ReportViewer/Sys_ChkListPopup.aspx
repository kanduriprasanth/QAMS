﻿<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="Sys_ChkListPopup.aspx.vb" Inherits="ReportViewer.Sys_ChkListPopup" %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<HTML>
	<head>
    <title>
        <%=MainTitleLtrl.Text %></title>
    <link rel="stylesheet" href="TRIMS.css">
</head>
	<body MS_POSITIONING="GridLayout" >
		<form id="Form1" method="post" runat="server">
			<TABLE class="MainTable" height="100%" cellSpacing="0" cellPadding="0" width="100%" align="center"
				border="3">
				<!-- MAIN HEADER -->
				<TR class="SubHead">
					<TD class="MainHead"><asp:Literal ID="MainTitleLtrl" runat="server"> Filter Options</asp:Literal></TD>
				</TR>
				<TR>
					<TD>
						<DIV class="MainTd" style="HEIGHT: 20px" ID="Div1">
							<table width="100%" cellSpacing="0" cellPadding="0" align="center">
								<tr class="HideRow">
								</tr>
								<Tr>
									<td class="HideRow" colspan="1">
										<asp:literal id="SearchOptionLtrl" runat="server">Search Option</asp:literal>
									</td>
									<td class="HideRow" colspan="3">
										<asp:RadioButtonList ID="SearchOptionRD" Runat="server" RepeatDirection="Horizontal" CellPadding="0"
											cssclass="RBList" CellSpacing="0" Height="18px">
											<asp:ListItem Value="1" Selected="True">Kf 1</asp:ListItem>
											<asp:ListItem Value="2"> Kf 2</asp:ListItem>
										</asp:RadioButtonList>
									</td>
								</Tr>
								<tr class="HideRow">
									<td class="MainTd" colspan="2">
										<asp:literal id="FindLrl" runat="server">Find</asp:literal>
										<asp:TextBox id="FindTxt" runat="server" Width="100px" CssClass='TxtCls' MaxLength =26>%</asp:TextBox>
									</td>
									<td class="MainTd" colspan="2">
										<asp:literal id="FetchSizeLtrl" runat="server">Records Limit</asp:literal>
										<asp:textbox id="FetchSizeTxt" runat="server" Width="50px" CssClass="TxtCls" MaxLength="3">50</asp:textbox>
										<asp:Button id="btnFind" runat="server" Text="Display" class="ButCls" onmouseover="this.className='ButOCls'"
											onmouseout="this.className='ButCls'"></asp:Button>
									</td>
								</tr>
								<tr class="MainTD"> <td class="MainTd" colspan="4">
								 Quick Local Search  <input type="text" id="searchTerm" onkeyup="doSearch()" class="UCTxtCls" style="width:200px" /></td>
                                                    </tr>
								<tr>
									<td class="MainTd" colspan="4">
										<DIV style="OVERFLOW: auto; HEIGHT: 200px; BACKGROUND-COLOR: gray">
											<asp:table id="ResTab" runat="server" Width="100%" BorderWidth="0" CellSpacing="1" CellPadding="0"
												CssClass="SubTable"></asp:table></DIV>
									</td>
								</tr>
								 <tr class="HideRow">
                                <td id="RBVal">
                                </td>
                                
                            </tr>
							</table>
						</DIV>
					</TD>
				</TR>
				<!-- MAIN FOOTER -->
				<TR>
					<TD class="MainFoot"><INPUT   style="WIDTH: 50px" onclick="fnCrGetCode()"
							  type="button" value="Ok"> <INPUT    style="WIDTH: 60px" onclick="fnCrCancel()"
							  type="button" value="Cancel">
					</TD>
				</TR>
			</TABLE>
		</form>
		<SCRIPT language="javascript">
 var flag=false
 
 var LblValue =""
 var TxtValue=""
 
 

  	function fnCrGetCode()
	{
        var KfLableValArr=new Array()
        var KdIdValArr=new Array()
         var Lblvalue=''
        for(var k=0;k<<%=RecordCnt%>;k++)
	    {
	        if(document.getElementById("ChkID"+k).checked ==true)
	        {
                 Lblvalue=document.all("KfLable"+ k).innerHTML  
	             KfLableValArr.push(Lblvalue)
	             KdIdValArr.push(document.all("KfIDLable"+ k).innerHTML  )
	             document.getElementById("RBVal").value=Lblvalue
	        }
	    }
	    if (Lblvalue=='') document.getElementById("RBVal").value =Lblvalue
	    
	    if ( (document.getElementById("RBVal").value == undefined) || (document.getElementById("RBVal").value == '') )
	      {
            alert("Select At Least One Item")
            return(false);
          }  
         LblValue =KfLableValArr.join("; ") 
         TxtValue= KdIdValArr.join(",");
 
	    opener.SetDefaultValue('<%=Request.QueryString("RowCnt") %>',LblValue,TxtValue);
	    window.self.close();
	}
	
	
	function fnCrCancel(){
		opener.SetDefaultValue('<%=Request.QueryString("RowCnt") %>',"","");
		window.self.close()
	}

	document.oncontextmenu=new Function("return false")

	function fnCrCloseWin(){
	 
	      if ( (document.getElementById("RBVal").value == undefined) || (document.getElementById("RBVal").value == '') )
	      {
            alert("Select At Least One Item")
            return(false);
          }    
		window.self.close()
	 }
	
    
    
		</SCRIPT>
		
		    <script language="javascript">

		        function doSearch() {
		            var searchText = document.getElementById('searchTerm').value;
		            var targetTable = document.getElementById('ResTab');
		            var targetTableColCount;

		            //Loop through table rows
		            for (var rowIndex = 0; rowIndex < targetTable.rows.length; rowIndex++) {
		                var rowData = '';

		                //Get column count from header row
		                if (rowIndex == 0) {
		                    targetTableColCount = targetTable.rows.item(rowIndex).cells.length;
		                    continue; //do not execute further code for header row.
		                }

		                //Process data rows. (rowIndex >= 1)
		                for (var colIndex = 0; colIndex < targetTableColCount; colIndex++) {
		                    rowData += targetTable.rows.item(rowIndex).cells.item(colIndex).innerText.replace(/ /g, '');
		                }

		                //If search term is not found in row data
		                //then hide the row, else show
		                rowData = rowData.toLowerCase();
		                searchText = searchText.replace(/ /g, '');

		                if (rowData.indexOf(searchText.toLowerCase()) == -1) {
		                    targetTable.rows(rowIndex).className = 'HideRow';
		                }
		                else {
		                    targetTable.rows(rowIndex).className = 'MainTD';
		                }
		            }
		        }

       
    </script>
	</body>
</HTML>
