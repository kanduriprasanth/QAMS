<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="ETDReport.aspx.vb" Inherits="CAPAWORKS.ETDReport" %>

<%@ Register TagPrefix="uc11" TagName="PrintControl" Src="../CAPAWORKS/PrintControl.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD  HTML 4.0 Transitional//EN" >
<html>
<head>
    <title>Issue Report</title>
    <meta name="GENERATOR" content="Microsoft Visual Studio .NET 7.1">
    <meta name="CODE_LANGUAGE" content="Visual Basic .NET 7.1">
    <meta name="vs_defaultClientScript" content="JavaScript">
    
    <link rel="stylesheet" href="../TRIMS.css">
    <script language="javascript" src="jquery.min.js"></script>
    <script language="javascript" src="../JScript/Common2.js"></script>
    <link rel="stylesheet" href="../eNoteBookEditor/MaskStyles.css" />

    <script language="javascript" src="../eNoteBookEditor/MaskJScript.js"></script>

    <script language="vbscript" src="../JScript/MsWordScript.vbs"></script>
     <script language="javascript" src="../JScript/CustomValidationFuns.js"></script>
    
<style type="text/css">
.InputFieldCss,.IFieldPreCss,.IFieldIssCss,.IFieldExeCss,.IFieldClsCss,.WorkIssuenceFieldCss,.WorkFlowFieldCss
{color:Blue;display:inline;font-weight:normal;text-align:left;font-family:Verdana;font-style:oblique;text-indent: 0pt;word-wrap:break-word;
 	

}
.PlanFieldCss {color:Blue;text-align:left;font-style:italic;word-wrap:break-word;font-weight:normal;
}



<%--/*.MainTD1
{
Background-Color:#FFFFFF;font-family:Verdana,Arial;font-size:8pt;Padding-Left:3px;
Padding-Top:2px;Padding-Bottom:2px; 
}
*/--%>
.MsoTableGrid
{
    mso-style-name:"Table Grid";
    mso-tstyle-rowband-size:0;
    mso-tstyle-colband-size:0;
    mso-style-priority:59;
    mso-style-unhide:no;
    border:solid windowtext 1.0pt;
    mso-border-alt:solid windowtext .5pt;
    mso-padding-alt:0in 5.4pt 0in 5.4pt;
    mso-border-insideh:.5pt solid windowtext;
    mso-border-insidev:.5pt solid windowtext;
    mso-para-margin:0in;
    mso-para-margin-bottom:.0001pt;
    mso-pagination:widow-orphan;
    font-size:11.0pt;
    font-family:"Calibri","sans-serif";
    mso-ascii-font-family:Calibri;
    mso-ascii-theme-font:minor-latin;
    mso-hansi-font-family:Calibri;
    mso-hansi-theme-font:minor-latin;
	     
}

 
td
  {
	word-wrap:break-word;
	padding:4.4pt ;
  }
  
  span,p
  {
    word-wrap:break-word;
  }

</style>

    

</head>
<body>
    <form id="Form1" method="post" runat="server">
        <span style="display:none">
            <%
    Response.WriteFile("../DMSManagement/ActiveX.inc")
            %>
        </span>
        <asp:Table ID="tt" CellPadding="0" CellSpacing="0" BorderWidth="3" HorizontalAlign="center"
            CssClass="MainTable" Width="98%" runat="server" BackColor="white">
            <asp:TableRow Height="20">
                <asp:TableCell CssClass="MainHead">
                    <asp:Literal ID="MainTitleLtrl" runat="server"></asp:Literal>
                </asp:TableCell>
            </asp:TableRow>
            <asp:TableRow>
                <asp:TableCell HorizontalAlign=Center>
                    <!-----------Base table------------->
                    <asp:Table runat="server"  Width="100%" CellPadding="0" CellSpacing="1"
                        HorizontalAlign="center" ID="Table1">
                        <asp:TableRow CssClass="HideRow" Height="0">
                            <asp:TableCell></asp:TableCell>
                            <asp:TableCell></asp:TableCell>
                        </asp:TableRow>
                        <asp:TableRow>
                            <asp:TableCell CssClass="HideRow" ColumnSpan="2">
                                <asp:Literal ID="SubTitleLtrl" runat="server"></asp:Literal>
                            </asp:TableCell>
                        </asp:TableRow>
                        <asp:TableRow>
                            <asp:TableCell  ColumnSpan="2" Style="background-color: White" HorizontalAlign=Center >
                           
                                <br />
                                <asp:Panel ID="HeaderDiv" runat="server" 
                                EnableViewState="False" Width="7.4in"  HorizontalAlign=Center BorderWidth="1px" BorderColor=black >
                                </asp:Panel>

                                <br />

                                <asp:Panel ID="BodyDiv" runat="server" Width="7.4in" EnableViewState="False" HorizontalAlign=Center BorderWidth="1px" BorderColor=black >
                                </asp:Panel>
                                <br />
                                <asp:Panel ID="FooterDiv" runat="server"  Width="7.4in" EnableViewState="False" HorizontalAlign=Center BorderWidth="1px" BorderColor=black
                                Style="background-color: White">
                                </asp:Panel>
                                <br />
                           
                            </asp:TableCell>
                        </asp:TableRow>
                     
                    </asp:Table>
                    <!-----------End of Base table------------->
                </asp:TableCell>
            </asp:TableRow>
            <asp:TableRow>
                <asp:TableCell CssClass="HideRow" Width="25%">
                    <asp:Table runat="server"  Width="100%" CellPadding="0" CellSpacing="0"
                        HorizontalAlign="center" ID="Table3" BorderWidth="0">
                        <asp:TableRow CssClass="HideRow" Height="0">
                            <asp:TableCell></asp:TableCell>
                        </asp:TableRow>
                        <asp:TableRow>
                            <asp:TableCell >
                                <asp:Button ID="btnConfirm" runat="server" onMouseOver="this.className='ButOCls'"
                                    Class='ButCls' AccessKey="C" onMouseOut="this.className='ButCls'" Text="Back"
                                    Width="70"></asp:Button>
                                    <input type="button" id="backBtn" runat="server" value="Back" visible="false" onMouseOver="this.className='ButOCls'"
                                    Class='ButCls' AccessKey="C" onMouseOut="this.className='ButCls'" Text="Back"
                                    Width="70" onclick='javascript:window.history.back();' />
                            </asp:TableCell>
                            
                             <asp:TableCell ID="PrintTD" HorizontalAlign="Right" Width="40%" >
                                <span id="PrinterOptSpan" >
                                    <input id="Button1" type="button" value="Print" onmouseover="this.className='ButOCls'"
                                        class='ButCls' accesskey="C" onmouseout="this.className='ButCls'" onclick="_printDocument()"/>
                                </span>
                            </asp:TableCell>
                            
                            
                            <asp:TableCell ID="PrintCtrlTD" HorizontalAlign="Right" Width="40%">
                               <uc11:PrintControl id="PrintCtrl" runat="server" >
                                </uc11:PrintControl>
                            </asp:TableCell>
                        </asp:TableRow>
                        
                          
                       
                    </asp:Table>
                </asp:TableCell>
            </asp:TableRow>
        </asp:Table>
    </form>
</body>

<script language="javascript">
       
    
 function _printDocumentCall()
    {
       
        var PageUrl = '../CAPAWORKS/ETDReport_Ajax.aspx' 
        var IsuLogId ="<%=Request.QueryString("IsuLogID")%>"
        var RportType=0
        var FileName=''
        
        
        if("<%=Request.QueryString("Type")%>"=="1")
        {
          FileName = "ETDReport";
          RportType=3
        }
             
        else if("<%=Request.QueryString("Type")%>"=="2")
        {
            FileName = "MRReport";  
            RportType=4         
        }  
       
        CaliberDocumentViewerIns.CloseDocument();
        DeleteTempDocument()
        PageUrl += '?Type='+'<%=Request.QueryString("Type")%>' + '&IsuTypeId=' + '<%=Request.QueryString("IsuTypeId") %>' + '&IsuLogID=' + '<%=Request.QueryString("IsuLogID") %>' + '&PreviewFlg=0';
        var indexPageOrientation=1; //1 portrait, 2 landscape
        CaliberDocumentViewerIns.ScriptCallbackObjectForErrors = OnError;

        var HeaderHtmFilePath= getDocFilePath(PageUrl + "&ReturnFlag=1");
        var BodyHtmFilePath  = getDocFilePath(PageUrl + "&ReturnFlag=2");
        var FooterHtmFilePath = getDocFilePath(PageUrl + "&ReturnFlag=3");
        
        var TempDorPath = CaliberDocumentViewerIns.GetTempPath();
        var WordHeaderHtmFilePath = TempDorPath + FileName + "_H" + ".doc";
        DeleteFiles[DeleteFilesCnt] = WordHeaderHtmFilePath;
        DeleteFilesCnt +=1;
        
        var WordBodyHtmFilePath = TempDorPath + FileName + "_B" + ".doc";
        DeleteFiles[DeleteFilesCnt] = WordHeaderHtmFilePath;
        DeleteFilesCnt +=1;

        var WordFooterHtmFilePath = TempDorPath + FileName + "_F" + ".doc";
        DeleteFiles[DeleteFilesCnt] = WordHeaderHtmFilePath;
        DeleteFilesCnt +=1;

        CaliberDocumentViewerIns.LoadWebDocument(HeaderHtmFilePath,false,WordHeaderHtmFilePath,false);
        CaliberDocumentViewerIns.LoadWebDocument(FooterHtmFilePath,false,WordFooterHtmFilePath,false);
        CaliberDocumentViewerIns.LoadWebDocument(BodyHtmFilePath,false,WordBodyHtmFilePath,false);

        var TemplatePath = getTemplatePath();
        CaliberDocumentViewerIns.LoadDocument(TemplatePath,false); // CaliberDocumentViewerIns.LoadDocument(TemplatePath,true);

        if(CaliberDocumentViewerIns.IsDocumentLoaded ==false)
        {
            alert("File Not Loaded");
            HideMask();
            return;
        }
        
        var FilePath = TempDorPath + FileName + ".doc";
        DeleteFiles[DeleteFilesCnt] = FilePath;
        DeleteFilesCnt +=1;
        
        CaliberDocumentViewerIns.InsertFilesInSection(WordBodyHtmFilePath,WordHeaderHtmFilePath,WordFooterHtmFilePath,indexPageOrientation,1);
        
        for(var i=1;i<CaliberDocumentViewerIns.WordInstance.ActiveDocument.Tables.Count+1;i++)
         {
           // CaliberDocumentViewerIns.WordInstance.ActiveDocument.Tables(i).AutoFitBehavior (2)
            CaliberDocumentViewerIns.WordInstance.ActiveDocument.Tables(i).AutoFitBehavior (0)
          
         }
        CaliberDocumentViewerIns.Save(FilePath);
        CaliberDocumentViewerIns.PrintDocument1(PrinterName)
        HideMask();
        //function to update Print log
        AjaxUpdatePrintLog(IsuLogId,RportType,PrinterName,DriverName)
    }
    

    
   
</script>
</html>