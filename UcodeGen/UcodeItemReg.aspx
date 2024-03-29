<%@ Page Language="vb" AutoEventWireup="false" Codebehind="UcodeItemReg.aspx.vb"
    Inherits="UcodeGen.UcodeItemReg" %>
<%@ Register TagPrefix="uc1" TagName="EsignObj" Src="../CaliberCommonCtrls/EsignObj.ascx" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
<head>
    <title>Trn</title>
    <meta name="GENERATOR" content="Microsoft Visual Studio .NET 7.1">
    <meta name="CODE_LANGUAGE" content="Visual Basic .NET 7.1">
    <meta name="vs_defaultClientScript" content="JavaScript">
    
    <link rel="stylesheet" href="../TRIMS.css">

    <script language="javascript" src="../JScript/Common2.js"></script>
    
    <script language="javascript" src="../JScript/jquery.min.js"></script>
     <style type="text/css">
        #mask {position:absolute;left:0;top:0;z-index:9000;background-color:#808080;display:none;}
        #boxes .window {position:fixed;left:0;top:0;display:none;z-index:9999;padding:20px;}
        #boxes #dialog {padding:10px;background-color: #f3f3f3;position:absolute;}
        .MessageImgCls{width:30px;heigth:30px;}
        .MessageTxtCls{font-weight: bold;font-size:12pt;text-align:center}
        .MessageBtnCls{}
    </style>
<link rel="stylesheet" href="../eNoteBookEditor/MaskStyles.css" />
<script language="javascript">

    function doSearch() {
        var searchText = document.getElementById('searchTerm').value;
        var targetTable = document.getElementById('TypeTbl');
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
                targetTable.rows(rowIndex).className = '';
            }
        }
    }

    function DisplayRecord(type) {
        var type = type;
        var currrentrec = parseInt(document.getElementById("PerPageTxt").value);
        var targetTable = document.getElementById('TypeTbl');

        if (type == 2) {
            if (currrentrec >= targetTable.rows.length - 1) {
                return (false);
            }

            document.getElementById("PerPageTxt").value = parseInt(document.getElementById("PerPageTxt").value) + 20;
            for (var rowIndex = 0; rowIndex < targetTable.rows.length; rowIndex++) {
                if (rowIndex != 0) {
                    if (rowIndex > currrentrec && rowIndex <= parseInt(document.getElementById("PerPageTxt").value)) {
                        targetTable.rows(rowIndex).className = '';
                    }
                    else {
                        targetTable.rows(rowIndex).className = 'HideRow';
                    }
                }
            }

        }
        else {
            if (currrentrec - 20 <= 0) {
                return (false);
            }

            document.getElementById("PerPageTxt").value = currrentrec - 20;
            for (var rowIndex = 0; rowIndex < targetTable.rows.length; rowIndex++) {
                if (rowIndex != 0) {
                    if (rowIndex <= currrentrec - 20 && rowIndex <= parseInt(document.getElementById("PerPageTxt").value)) {
                        targetTable.rows(rowIndex).className = '';
                    }
                    else {
                        targetTable.rows(rowIndex).className = 'HideRow';
                    }
                }
            }
        }

    }

    function DisplayInitialRecord() {
        var targetTable = document.getElementById('TypeTbl');
        for (var rowIndex = 0; rowIndex < targetTable.rows.length; rowIndex++) {
            if (rowIndex != 0) {
                if (rowIndex <= parseInt(document.getElementById("PerPageTxt").value)) {
                    targetTable.rows(rowIndex).className = '';
                }
                else {
                    targetTable.rows(rowIndex).className = 'HideRow';
                }
            }
        }
    }

    //    setTimeout("DisplayInitialRecord()",100);
        
    </script>
 <script language=javascript >

     function CheckDescVal() {
         if (document.getElementById("ItemDescTxt").value != '') {
             var itemName = document.getElementById("ItemDescTxt").value
             if (itemName.indexOf("  ") > -1) {
                 alert("Double Space Is Not Allowed In Item Description")
                 document.getElementById("ItemDescTxt").value = ""
             }
         }
     }
   
   
 </script>
</head>
<body ms_positioning="GridLayout">
    <form id="Form1" method="post" runat="server">
        <asp:Table ID="tt" CellPadding="0" CellSpacing="0" BorderWidth="0" HorizontalAlign="center"
            CssClass="MainTable" Width="98%" runat="server">
            <asp:TableRow Height="20">
                <asp:TableCell CssClass="MainHead">
                    <asp:Literal ID="MainTitleLtrl" runat="server"></asp:Literal>
                </asp:TableCell>
            </asp:TableRow>
            <asp:TableRow>
                <asp:TableCell>
                    <!-----------Base table------------->
                    <asp:Table runat="server" CssClass="SubTable" Width="100%" CellPadding="0" CellSpacing="1"
                        HorizontalAlign="center" ID="Table1">
                        <asp:TableRow CssClass="HideRow" Height="0">
                            <asp:TableCell></asp:TableCell>
                            <asp:TableCell></asp:TableCell>
                        </asp:TableRow>
                        <asp:TableRow>
                            <asp:TableCell CssClass="SubHead" ColumnSpan="5">
                                <asp:Literal ID="SubTitleLtrl" runat="server"></asp:Literal>
                            </asp:TableCell>
                        </asp:TableRow>
                        <asp:TableRow ID="FindCtrlTr" CssClass="HideRow" >
                            <asp:TableCell CssClass="MainTD">
                                <asp:Label ID="SrchLbl" runat="server" Text="Find" CssClass="LblCls"></asp:Label>
                            </asp:TableCell>
                            <asp:TableCell CssClass="MainTD" ColumnSpan="4">
                                <input type="text" id="searchTerm" onkeyup="doSearch()" class="UCTxtCls" style="width:200px"  />
                            </asp:TableCell>
                        </asp:TableRow>
                        <asp:TableRow>
                            <asp:TableCell CssClass="MainTD" Style="font-weight: bold;" ID="TypeTDCap"></asp:TableCell>
                            <asp:TableCell CssClass="MainTD" ID="TypeTD">
                            </asp:TableCell>
                            <asp:TableCell CssClass="MainTD" Style="font-weight: bold;" ID="PrfxTDCap"></asp:TableCell>
                            <asp:TableCell CssClass="MainTD" ID="PrfxTD" ColumnSpan=2>
                            </asp:TableCell>
                        </asp:TableRow>
                        <asp:TableRow ID="RegistrationTr">
                            <asp:TableCell CssClass="MainTD" Style="font-weight: bold;" ID="ItemDescTd"></asp:TableCell>
                            <asp:TableCell CssClass="MainTD">
                                <asp:TextBox ID="ItemDescTxt" runat="server" CssClass="TxtCls" MaxLength="60" Width="100px"
                                    AccessKey="D" TabIndex="1" onfocusout='CheckDescVal()'></asp:TextBox>
                            </asp:TableCell>
                            <asp:TableCell CssClass="MainTD" Style="font-weight: bold;" ID="ItemPrfxTd"></asp:TableCell>
                            <asp:TableCell CssClass="MainTD">
                                <asp:TextBox ID="ItemPrfxTxt" runat="server" CssClass="TxtCls" MaxLength="3" Width="100px"
                                    AccessKey="D" TabIndex="1"></asp:TextBox>
                            </asp:TableCell>
                            <asp:TableCell CssClass="MainTD">
                                <asp:Button ID="btnConfirm" runat="server" onMouseOver="this.className='ButOCls'"
                                    Class='ButCls' AccessKey="C" onMouseOut="this.className='ButCls'" Text="Submit"
                                    Width="70"></asp:Button>
                                     <asp:Button ID="FormSub" runat="server" Class="HideRow" CausesValidation="false"></asp:Button>
                            </asp:TableCell>
                        </asp:TableRow>
                        <asp:TableRow>
                            <asp:TableCell CssClass="MainTD" ColumnSpan="5">
                                <asp:Table runat="server" CssClass="SubTable" Width="100%" CellPadding="0" CellSpacing="1"
                                    HorizontalAlign="center" ID="TypeTbl">
                                </asp:Table>
                            </asp:TableCell>
                        </asp:TableRow>
                    </asp:Table>
                </asp:TableCell>
            </asp:TableRow>
            <asp:TableRow>
                <asp:TableCell CssClass="MainFoot">
                    <input type ="button" id ="BackBtn" onMouseOver="this.className='ButOCls'" Class='ButCls'
                    onMouseOut="this.className='ButCls'"  value="Back" Width="70" onclick ="fnback()"/>
                </asp:TableCell>
            </asp:TableRow>

    <asp:TableRow ID="EsignRow" runat="server" CssClass="HideRow">
                            <asp:TableCell ColumnSpan="2" Style="padding-right: 0px; padding-left: 0px; padding-top: 0px;
                                padding-bottom: 0px">
                                <uc1:EsignObj id="EsignObj1" runat="server" visible="false">
                                </uc1:EsignObj>
                            </asp:TableCell>
                        </asp:TableRow>
            <asp:TableRow CssClass="HideRow" Height="0">
                <asp:TableCell ColumnSpan="2" ID="ValidatorsTd">
                    <asp:ValidationSummary ID="ValidationSummary1" runat="server" ShowSummary="False"
                        ShowMessageBox="True"></asp:ValidationSummary>
                    <asp:TextBox ID="ProtocolFieldKeys" Style="display: none" Width="0" Height="0" runat="server"></asp:TextBox>
                    <asp:TextBox ID="ProtocolFieldNames" Style="display: none" Width="0" Height="0" runat="server"></asp:TextBox>
                    <asp:TextBox ID="ProtocolFieldbndto" Style="display: none" Width="0" Height="0" runat="server"></asp:TextBox>
                </asp:TableCell>
            </asp:TableRow>
        </asp:Table>
        <!-- Mask to cover the whole screen -->
        <div id="mask">
        </div>
        <div id="boxes">
            <div id="dialog" class="window">
                <asp:Table ID="Table3" runat="server" HorizontalAlign="Center">
                    <asp:TableRow>
                        <asp:TableCell ID="MessageImgTd">
                        </asp:TableCell>
                        <asp:TableCell ID="MessageTxtTd">
                        </asp:TableCell>
                    </asp:TableRow>
                    <asp:TableRow>
                        <asp:TableCell ID="MessageBtnTd" HorizontalAlign="Center" ColumnSpan="2">
                        </asp:TableCell>
                    </asp:TableRow>
                </asp:Table>
            </div>
        </div> 
    </form>
    <script language=javascript>

        function ShowConfermationMessage() {
            var ConfermationMessage = "<%=ErrerMessage%>"

            if (ConfermationMessage != "") {
                if (ConfermationMessage.indexOf("Already Registered") > -1) {
                    Fn_Message_Show(ConfermationMessage, 2)
                }
                else {
                    Fn_Message_Show(ConfermationMessage, 1)
                }
                return (false);
            }

        }



        function fnUpdateSts(BaseID, from, status) {

            var url = "UIStatusChg.aspx"
            url = url + "?"
            url = url + "BID=" + BaseID
            url = url + "&from=" + from
            url = url + "&status=" + status
            url = url + "&UIType=2"
            url = url + "&title=" + "<%=MainTitleLtrl.Text%>"

            var PWidth = 650
            var PHeight = 300
            var ScreenLeft = parseInt(window.screen.width - PWidth) / 2;
            var ScreenTop = parseInt(window.screen.height - PHeight) / 2;

            var features = "height=" + PHeight + ",width=" + PWidth + ",toolbar=no,resizable=no,menubar=no,status=no,scrollbars=1,top=" + ScreenTop + ",left=" + ScreenLeft
            SpWinObj = window.open(url, 'SpecCodes', features)
            if (SpWinObj.opener == null) SpWinObj.opener = self;
            SpWinObj.focus();

        }

        function fnPageRefresh() {
            window.location.href = window.location.href
        }


        function fnback() {
            var ListType = "<%=ListType%>"
            if (ListType == "SC") {
                window.navigate("../UcodeGen/UcodeTypReg.aspx?ListType=SC");
            }
            else if (ListType == "AT") {
                window.navigate("../UcodeGen/UcodeTypReg.aspx?ListType=AT");
            }
            else {
                window.navigate("../UcodeGen/UcodeTypReg.aspx");

            }
        }
        function FnOpenAuditPage(i, BaseId, FldDesc) {
            // ShowMask()
            var pageURL = "UIAudit.aspx?Type=2&BaseId=" + BaseId + "&FldDesc=" + FldDesc

            var PWidth = 650
            var PHeight = 300
            var ScreenLeft = parseInt(window.screen.width - PWidth) / 2;
            var ScreenTop = parseInt(window.screen.height - PHeight) / 2;

            var features = "height=" + PHeight + ",width=" + PWidth + ",toolbar=no,resizable=no,menubar=no,status=no,scrollbars=1,top=" + ScreenTop + ",left=" + ScreenLeft
            SpWinObj = window.open(pageURL, 'SpecCodes', features)
            if (SpWinObj.opener == null) SpWinObj.opener = self;
            SpWinObj.focus();

        }
        ShowConfermationMessage()

        $(document).ready(function () {
            $(window).resize(function () {
                var box = $('#boxes .window');

                //Get the screen height and width
                var maskHeight = $(document).height();
                var maskWidth = $(window).width();

                //Set height and width to mask to fill up the whole screen
                $('#mask').css({ 'width': maskWidth, 'height': maskHeight });

                //Get the window height and width
                var winH = $(window).height();
                var winW = $(window).width();

                //Set the popup window to center
                box.css('top', winH / 2 - box.height() / 2);
                box.css('left', winW / 2 - box.width() / 2);
            });
        });

        function Fn_Message_Show(Message, MessageType) {
            switch (MessageType) {
                case 1:
                    $("#MessageImgTd").html("<div><img src=\"../Images/Info.GIF\" class=\"MessageImgCls\"/></div>")
                    $("#MessageTxtTd").html("<div class=\"MessageTxtCls\"><span id=\"MsgSpan\"></span></div>");
                    $("#MessageBtnTd").html("<br/><button type=\"button\" class=\"ButCls\" onclick=\"Fn_Message_Hide()\">OK</button>");
                    break;
                case 2:
                    $("#MessageImgTd").html("<div><img src=\"../Images/Exlamatry.GIF\" class=\"MessageImgCls\"/></div>")
                    $("#MessageTxtTd").html("<div class=\"MessageTxtCls\"><span id=\"MsgSpan\"></span></div>");
                    $("#MessageBtnTd").html("<br/><button type=\"button\" class=\"ButCls\" onclick=\"Fn_Message_Hide()\">OK</button>");
                    break;
                case 3:
                    $("#MessageImgTd").html("<div><img src=\"../Images/QuestionMark.GIF\" class=\"MessageImgCls\"/></div>")
                    $("#MessageTxtTd").html("<div class=\"MessageTxtCls\"><span id=\"MsgSpan\"></span></div>");
                    $("#MessageBtnTd").html("<br/><button type=\"button\" class=\"ButCls\" onclick=\"Fn_Message_Hide()\">OK</button>");
                    break;
                default:
                    $("#MessageImgTd").html("<div><img src=\"../Images/Exlamatry.GIF\" class=\"MessageImgCls\"/></div>")
                    $("#MessageTxtTd").html("<div class=\"MessageTxtCls\"><span id=\"MsgSpan\"></span></div>");
                    $("#MessageBtnTd").html("<br/><button type=\"button\" class=\"ButCls\" onclick=\"Fn_Message_Hide()\">OK</button>");
                    break;
            }

            $("#MsgSpan").html(Message.replace(/\n/g, '<br/>'));

            var maskHeight = $(document).height();
            var maskWidth = $(window).width();
            var id = "#dialog"
            //Set heigth and width to mask to fill up the whole screen
            $('#mask').css({ 'width': maskWidth, 'height': maskHeight });

            //transition effect		
            $('#mask').fadeIn(10);
            $('#mask').fadeTo("slow", 0.8);

            var winH = $(window).height() + $(window).scrollTop();
            var winW = $(window).width();

            //Set the popup window to center
            $(id).css('top', ((winH - $(id).outerHeight()) / 2) + $(window).scrollTop() / 2);
            $(id).css('left', (winW - $(id).outerWidth()) / 2);

            //transition effect
            $(id).fadeIn(20);
        }

        function Fn_Message_Hide() {
            $('#mask').hide();
            $('.window').hide();
        }
          

</script>
</body>
</html>
