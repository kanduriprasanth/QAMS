<%@ Register TagPrefix="uc1" TagName="CaliberCalender" Src="../CaliberCommonCtrls/CaliberCalender.ascx" %>

<%@ Control Language="vb" AutoEventWireup="false" CodeBehind="SearchCtrl1.ascx.vb" Inherits="Dossier.SearchCtrl1" %>
<table class="SubTable" id="Table1" style="WIDTH: 100%" cellSpacing="1" cellPadding="0"
	align="center" border="0">
	<tr>
		<td class="SubHeadTD" colSpan="2" align=left >&nbsp;&nbsp;Search By&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<SELECT id="SearchTypeDD" onchange="DisplayFilterTab()" name="SearchTypeDD">
				<option value="0" selected>Top 250 records</option>
				<option value="1">A.R. No.</option>
				<option value="2">Product / Material</option>
				<option value="3">Sample Type</option>
				<option value="5">Product Code</option>
				<option value="6">Batch No.</option>
				<option value="4">Registered Date</option>
			</SELECT>
		</td>
	</tr>
	<tr class="HideRow" id="SrchTr1">
		<td class="MainTd" colSpan="2">
			<Table class="SubTable" style="WIDTH: 100%" cellSpacing="1" cellPadding="0"  align="center"
										 border="0">
				<tr>
				  <td class="MainTD">
						A.R. No. =&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<input class="TxtCls" id="SrchTxt1" style="WIDTH: 200px" accessKey="D" type="text" maxLength="25"
											name="SrchTxt1" >
					</td>
				</tr>
			</Table>
		</td>
	</tr>
	<tr class="HideRow" id="SrchTr2">
		<td class="MainTd" colSpan="2">
			<Table class="SubTable" style="WIDTH: 100%" cellSpacing="1" cellPadding="0" align="center"
						Border="0">
				<tr>
				 <td class="MainTD">
					Product / Material Like &nbsp;
					<input class="TxtCls" id="SrchTxt2" style="WIDTH: 200px" accessKey="D" type="text" maxLength="26"
						name="SrchTxt2"  value='%'>
		   		 </td>
				</tr>
			</Table>
		</td>
	</tr>
	<tr class="HideRow" id="SrchTr3">
		<td class="MainTd" colSpan="2">
			<Table class="SubTable" style="WIDTH: 100%" cellSpacing="1" cellPadding="0" align="center"
										Border="0">
				<tr>
				  <td class="MainTD">
						Sample Type Like &nbsp;&nbsp;
						<input class="TxtCls" id="SrchTxt3" style="WIDTH: 200px" accessKey="D" type="text" maxLength="26"
							name="SrchTxt3"  value='%'>
				  </td>
				</tr>
			</Table>
		</td>
	</tr>
	
	<tr class="HideRow" id="SrchTr5">
		<td class="MainTd" colSpan="2">
			<Table class="SubTable" style="WIDTH: 100%" cellSpacing="1" cellPadding="0" align="center"
										Border="0">
				<tr>
				  <td class="MainTD">
						Product Code Like &nbsp;&nbsp;
						<input class="TxtCls" id="SrchTxt5" style="WIDTH: 200px" accessKey="D" type="text" maxLength="26"
							name="SrchTxt5"  value='%'>
				  </td>
				</tr>
			</Table>
		</td>
	</tr>
	
	
	<tr class="HideRow" id="SrchTr6">
		<td class="MainTd" colSpan="2">
			<Table class="SubTable" style="WIDTH: 100%" cellSpacing="1" cellPadding="0" align="center"
										Border="0">
				<tr>
				  <td class="MainTD">
						Batch No. Like &nbsp;&nbsp;
						<input class="TxtCls" id="SrchTxt6" style="WIDTH: 200px" accessKey="D" type="text" maxLength="26"
							name="SrchTxt6"  value='%'>
				  </td>
				</tr>
			</Table>
		</td>
	</tr>
	
	<tr class="HideRow" id="SrchTr4">
	  <td class="MainTd" colSpan="2">
		 <Table class="SubTable" style="WIDTH: 100%" cellSpacing="1" cellPadding="0" align="center"
										Border="0">
			<tr>
				<td class="MainTD">
						Registered Between &nbsp;&nbsp;&nbsp;
					<uc1:calibercalender id="FromDate" runat="server"></uc1:calibercalender>
												And &nbsp;
					<uc1:CaliberCalender id="ToDate" runat="server"></uc1:CaliberCalender>
				</td>
			</tr>
			<tr class="HideRow">
				<td class="MainTd" colSpan="2">
					
				    <input type="hidden" value="SrchTxt1,SrchTxt2,SrchTxt3,SearchCtrl1<%=UniqeIDSep%>FromDate<%=UniqeIDSep%>CalDateVal,SearchCtrl1<%=UniqeIDSep%>ToDate<%=UniqeIDSep%>CalDateVal,SrchTxt5,SrchTxt6" name="SrchObjIds">
					<asp:textbox id="SearchTxt" CssClass="HideRow" Height="0" Width="0" Runat="server"></asp:textbox>
					<asp:textbox id="SearchType" CssClass="HideRow" Height="0" Width="0" Runat="server">0</asp:textbox>
					<asp:textbox id="ToDayDate" CssClass="HideRow" Height="0" Width="0" Runat="server"></asp:textbox>
				</td>
			</tr>
		</Table>
	</td>
</tr>
</table>
<script language=vbscript>
function ReplaceInSepTxt(inputTxt) 
    ReplaceInSepTxt=""
	if inputTxt<>"" then
	ReplaceInSepTxt=replace(inputTxt,"$*$","")
    end if
end function
 
</script>

<script language="javascript">
<!--
 var SearchTxtVal
 var SearchTypeVal=0
 
function DisplayFilterTab(){
    HideAllSrchTypes()
    
  var SelSearcType=parseInt(document.all("SearchTypeDD").value)
   if(SelSearcType>0){
   var ObjId =   "SrchTr" + SelSearcType
   document.all(ObjId).className="" 
  }//if
}//DisplayFilterTab

function HideAllSrchTypes(){
    var SrchCnt=document.all("SearchTypeDD").length
    var ObjId
    for(i=1;i<SrchCnt;i++){
     ObjId="SrchTr" +i
     document.all(ObjId).className="HideRow" 
     }//for i

}// HideAllSrchTypes

//  resets Search Values on page re-load
function ResetSearchState(){
   var datval,curDateVal
    var Obj=document.getElementById("SearchCtrl1_SearchTxt")// get Search Text value
 	SearchTxtVal= Obj.value
 	
 	Obj=document.getElementById("SearchCtrl1_SearchType")//get search type value
	SearchTypeVal=Obj.value
 	Obj=document.getElementById("SearchCtrl1_ToDayDate")// get current date value
	curDateVal= Obj.value
	var SrchObjIdVal=document.forms(0).all("SrchObjIds").value
	var SrchObjIdAry= new Array()
	SrchObjIdAry=SrchObjIdVal.split(',')

		if((SearchTxtVal!='')){ // reset values on page refresh /re-load
			var SearchTxtAry =new Array()
			SearchTxtAry=SearchTxtVal.split('$*$')
			
		 	document.forms(0).all(SrchObjIdAry[0]).value=SearchTxtAry[0] 
			
		 	document.forms(0).all(SrchObjIdAry[1]).value=SearchTxtAry[1]
		 	
			document.forms(0).all(SrchObjIdAry[2]).value=SearchTxtAry[2]
			
			document.forms(0).all(SrchObjIdAry[5]).value=SearchTxtAry[5]
			
			document.forms(0).all(SrchObjIdAry[6]).value=SearchTxtAry[6]
			
			document.forms(0).all(SrchObjIdAry[3]).value=SearchTxtAry[3]
			
			
			datval=SearchTxtAry[3]
			
			if(datval==''){datval=curDateVal}
			
			if(datval!=''){
			var datAry =new Array()
			datAry=datval.split('/')
			obj=document.getElementById("SearchCtrl1_FromDate_CalDateDisplay")
			GetLocalizedDate(datAry[0], datAry[1], datAry[2],obj)
			
			}
			
			document.forms(0).all(SrchObjIdAry[4]).value=SearchTxtAry[4]
			datval=SearchTxtAry[4]
			
			if(datval==''){datval=curDateVal}
			
			if(datval!=''){
			var datAry =new Array()
			datAry=datval.split('/')
			obj=document.getElementById("SearchCtrl1_ToDate_CalDateDisplay")
			GetLocalizedDate(datAry[0], datAry[1], datAry[2],obj)
			}
			// Select drop down option	
					
			document.all("SearchTypeDD").value=SearchTypeVal
	   }//if((SearchTxtVal!='')&& (SearchTypeVal>0))
	     
	      // if calander dates are null then set control obj dates to current date
	       if(document.forms(0).all(SrchObjIdAry[3]).value==''){
				datval=curDateVal 
				document.forms(0).all(SrchObjIdAry[3]).value=curDateVal
				if(datval!=''){
					var datAry =new Array()
					datAry=datval.split('/')
					obj=document.getElementById("SearchCtrl1_FromDate_CalDateDisplay")
					GetLocalizedDate(datAry[0], datAry[1], datAry[2],obj)
				}//if(datval!='')
			}// if(document.forms(0).all(SrchObjIdAry[2]).value=='')
			
			if(document.forms(0).all(SrchObjIdAry[4]).value==''){
				datval=curDateVal 
				document.forms(0).all(SrchObjIdAry[4]).value=curDateVal
				if(datval!=''){
					var datAry =new Array()
					datAry=datval.split('/')
					obj=document.getElementById("SearchCtrl1_ToDate_CalDateDisplay")
					GetLocalizedDate(datAry[0], datAry[1], datAry[2],obj)
				}//if(datval!='')
			}//if(document.forms(0).all(SrchObjIdAry[3]).value=='')
    

}//ReStoreSearchState

 // Set Search Text & type  to hidden feilds  on   page submission event
function SetSearchTxt(){
	var SrchObjIdVal=document.forms(0).all("SrchObjIds").value
	if(SrchObjIdVal!=''){
		var SrchObjIdAry= new Array()
		var SrchValAry= new Array()
		
		SrchObjIdAry=SrchObjIdVal.split(',') // Array of object ids
		SrchValAry=SrchObjIdVal.split(',') // Array for  object values
		
		for(i=0;i<SrchObjIdAry.length;i++){
			SrchValAry[i]= document.forms(0).all(SrchObjIdAry[i]).value 
	 	}//for
		
		var Obj=document.getElementById("SearchCtrl1_SearchTxt") //set search text with  '$*$' as seperator
		Obj.value=SrchValAry.join('$*$')
		Obj=document.getElementById("SearchCtrl1_SearchType")
		Obj.value=document.all("SearchTypeDD").value
	}//if(SrchObjIdVal!='')
	
}//SetSearchTxt()
 
 ///////////////
  ResetSearchState()
  DisplayFilterTab()
 /////////////////
 
//-->
</script>