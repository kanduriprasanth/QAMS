var TransType=0;
var  BatchStatus=0;

// JScript File

////For devaition Disabling Fields
//var Catselval
// var ChngRelObj=document.getElementById("E1_COL1213004004_58") //Id to be changed by venu
// 
//  if(ChngRelObj!=null&& Catselval=='')
// {
//    ChngRelObj.attachEvent('onchange', DisableFields)
//    Catselval = ChngRelObj.value;
// }


var ExpMessageArr = new Array()
var ExpMsgIdArr = new Array()
var EXpControlId = new Array()
var WrkAllExpMsg = ""
var LogFldPrefix = 'FLD_'
var DeptFldID = 'FLD_183_549'
var Ucodelevel1 = "Ucodelevel1"
var Ucodelevel0 = "Ucodelevel0"

//Market ID
var MarketID = 'FLD_185_550'
var MarketIDArr = new Array()
MarketIDArr = MarketID.split('_')
//End of Market ID
// Closure Date
var CloserDateFldId = 'FLD_197_299'
var CloserDateFldIdAry = new Array()
CloserDateFldIdAry = CloserDateFldId.split('_')
// End of Closure Date

// Initation Department ID
var InitDepartFldId = 'FLD_183_549'
// End of Init Deparment ID

// SOP Radio Btn  
var SOPObjRadioBtnID = 'FLD_246_546'
var SOPObjRadioBtnIDAry = new Array()
SOPObjRadioBtnIDAry = SOPObjRadioBtnID.split('_')
//End SOP

// SOP Editable File Attachment
var SOPEditFileID = 'FLD_247_304';
var SOPEditFileIDAry = new Array();
SOPEditFileIDAry = SOPEditFileID.split('_');
//End SOP Editable File Attachment


// Reference Radio Btn
var ReferenceBtnID = 'FLD_180_546'
var ReferenceObjRadioBtnIDAry = new Array()
ReferenceObjRadioBtnIDAry = ReferenceBtnID.split('_')
//End Reference Radio Btn

// Referred Issue(s)
var ReferredIssueID = 'FLD_181_547';
var ReferredIssueIDAry = new Array();
ReferredIssueIDAry = ReferredIssueID.split('_');
//End Referred Issue(s)


// Referred Issue(s) for audit mgmt
var ReferredIssueID1 = 'FLD_174_547';
var ReferredIssueIDAry1 = new Array();
ReferredIssueIDAry1 = ReferredIssueID1.split('_');
//End Referred Issue(s)


// Change Related To
var ChangeRelatedToFldId = 'FLD_229_561';
var ChangeRelatedToFldIdAry = new Array();
ChangeRelatedToFldIdAry = ChangeRelatedToFldId.split('_');
// End Change Related To


// Product
var ProductFldId = 'FLD_188_611';
var ProductFldIdAry = new Array();
ProductFldIdAry = ProductFldId.split('_');
// End Product


// Material
var MaterialFldId = 'FLD_190_612';
var MaterialFldIdAry = new Array();
MaterialFldIdAry = MaterialFldId.split('_');
// End Material


// Equipment
var EquipmentFldId = 'FLD_193_616';
var EquipmentFldIdAry = new Array();
EquipmentFldIdAry = EquipmentFldId.split('_');
// End Equipment


// Document
var DocumentFldId = 'FLD_230_592';
var DocumentFldIdAry = new Array();
DocumentFldIdAry = DocumentFldId.split('_');
// End Document


// Facility
var FacilityFldId = 'FLD_231_593';
var FacilityFldIdAry = new Array();
FacilityFldIdAry = FacilityFldId.split('_');
// End Facility


// Others
var OthersFldId = 'FLD_245_5';
var OthersFldIdAry = new Array();
OthersFldIdAry = OthersFldId.split('_');
// End Others



//Action Plan Proposal(s) Required -- Change Control Login

var ActionPlanPropRadioBtnId = 'FLD_248_546'
var ActionPlanPropRadioBtnIdArr = new Array()
ActionPlanPropRadioBtnIdArr = ActionPlanPropRadioBtnId.split('_')
// End Proposed Action Plan(s) -- Change Control Login


// Proposed Action Plan(s) -- Change Control Login
var ActionPlanPropId = 'FLD_236_596'
var ActionPlanPropIdAry = new Array()
ActionPlanPropIdAry = ActionPlanPropId.split('_')
// End Proposed Action Plan(s) -- Change Control Login

//Investigation and Root Cause Finding  -- CPA Login
var InvandRootCauseRadioBtnId = 'FLD_206_546'
var InvandRootCauseRadioBtnIdArr = new Array()
InvandRootCauseRadioBtnIdArr = InvandRootCauseRadioBtnId.split('_')


//Details  -- CPA Login
var DetailsTxtId = 'FLD_48_5'
var DetailsTxtIdArr = new Array()
DetailsTxtIdArr = DetailsTxtId.split('_')

//Section  Field 
var SectionDDlID = 'FLD_85_10'
var SectionDDlIDArr = new Array()
SectionDDlIDArr = SectionDDlID.split('_')


//Reference CAPA / Change Control No. (if any) 
var RefCapORCCNo = 'FLD_223_547'
var RefCapORCCNoArr = new Array()
RefCapORCCNoArr = RefCapORCCNo.split('_')


              
              // CAPA Market

// Origin of CAPA
var OriginofCAPAID = 'FLD_43_42'
var OriginofCAPARR = new Array()
OriginofCAPARR = OriginofCAPAID.split('_')

//Dev 
var ProbableReasonID='FLD_204_555'
var ProbableReasonIDArr = new Array()
ProbableReasonIDArr = ProbableReasonID.split('_')

//Dev Probable Reason / Root Cause - Others
var ProbableReasonothID='FLD_205_5'
var ProbableReasonothIDArr = new Array()
ProbableReasonothIDArr = ProbableReasonothID.split('_')

//Dev CA Remark
var CAPPlanProRemarksID='FLD_209_5'
var CAPPlanProRemarksIDArr = new Array()
CAPPlanProRemarksIDArr = CAPPlanProRemarksID.split('_')

//Dev CA Propsal
var CAPPlanProID='FLD_210_598'
var CAPPlanProIDArr = new Array()
CAPPlanProIDArr = CAPPlanProID.split('_')

//Dev PA Remark
var PAPlanProRemarksID='FLD_212_5'
var PAPlanProRemarksIDArr = new Array()
PAPlanProRemarksIDArr = PAPlanProRemarksID.split('_')

//Dev PA Propsal
var PAPlanProID='FLD_213_599'
var PAPlanProIDArr = new Array()
PAPlanProIDArr = PAPlanProID.split('_')

// **** Special Validations ******//

     // This FUnction Will Call at final submition of  The Form  

        function QAMS_SpecialValidations(functionid,BaseId,CtrlId,IssueID)
        {
        
           switch (parseInt(functionid))
           {
                
             case 112 :FUN_DI_DEPT_VALIDATION(BaseId,CtrlId)
             break;
                case 114 :FUN_DI_EVENT_VALIDATION(BaseId,CtrlId)
                break;
//                case 6 :FUN_DI_PROB_REASON_VALIDATION(BaseId,CtrlId)
//                break;
                case 9: FUN_ISU_CA_ACTION_PLAN_DECISION(BaseId, CtrlId)
                break;
                case 10: FUN_ISU_PA_ACTION_PLAN_DECISION(BaseId, CtrlId)
                break;
//              case 8 :FUN_DI_ACT_PLAN_DECISION(BaseId,CtrlId)
//                break;
                case 69 : FUN_CC_RA_DECISION (BaseId,CtrlId)
                    break;
                case 70: FUN_CC_QA_DECISION(BaseId, CtrlId)
                    break;
             case 71: FUN_CC_CHANGERELATEDTO(BaseId, CtrlId)
                break;
//                
//                case 7: FUN_DEV_CAPA_DEPENDENCY(BaseId,CtrlId)
//                    break;
//                case 8: FUN_DEV_BATCH_RELEASE(BaseId, CtrlId, IssueID)
//                    break;
                case  26 : FUN_CAPA_QA_DECISION(BaseId,CtrlId)
                break;

                case 61: FUN_EFORM_CA_ACTION_PLAN_DECISION(BaseId, CtrlId)
                break;
                case 62: FUN_EFORM_PA_ACTION_PLAN_DECISION(BaseId, CtrlId)
                break;
                case 63 :FUN_DEV_INV_ACTION_PLAN_DECISION(BaseId,CtrlId)
                    break;
                case 64: FUN_CCP_ISU_ACTION_PLAN_DECISION(BaseId, CtrlId)
                    break;
                case 93: FUN_CCT_ISU_ACTION_PLAN_DECISION(BaseId, CtrlId)
                    break;
                case 65: FUN_DEV_QRM_ACTION_PLAN_DECISION(BaseId, CtrlId)
                    break;
                case 66: FUN_CC_QRM_ACTION_PLAN_DECISION(BaseId, CtrlId)
                    break;
                case 103: FUN_CC_RA_ACTION_PLAN_DECISION(BaseId, CtrlId)
                    break;
                case 102: FUN_CC_QA_ACTION_PLAN_DECISION(BaseId, CtrlId)
                    break;
                case 22: FUN_CAPA_QRM_ACTION_PLAN_DECISION(BaseId, CtrlId)
                    break;
                case 73: FUN_CCT_REGULARIZATION(BaseId, CtrlId)
                    break;
                case 27: FUN_CAPA_ORIGINOFCAPA(BaseId, CtrlId)
                    break;
                case 28: FUN_CAPA_INV_ROOTCAUSE(BaseId, CtrlId)
                    break;
                case 80: FUN_ISU_EDITATT_DECISION(BaseId, CtrlId)
                    break;
                case 104: FUN_EFORM_OA_ACTION_PLAN_DECISION(BaseId, CtrlId)
                    break;
                case 94: FUN_ISU_DEV_OA_ACTION_PLAN_DECISION(BaseId, CtrlId)
                    break;
                case 83: FUN_ISU_REFERENCE_DECISION(BaseId, CtrlId) 
                    break;

//                case 35: FUN_CCPT_DEPT_SELECTION(BaseId, CtrlId) 
//                    break;
                case 85: FUN_ISU_SECTION_SELECTION(BaseId, CtrlId) 
                    break;  
                    
               case 37: FUN_DEV_EFORM_OA_ACTION_PLAN_DECISION(BaseId, CtrlId)
                break;
                
                // case 45 :FUN_CCP_REFERENCE_CC_NO(BaseId, CtrlId)
//                break;

                case 98 : FUN_ISU_DEV_PROBREASON_DECISION(BaseId, CtrlId)
                break;
                
                case 99 : FUN_ISU_DEV_CA_ACTION_PLAN_DECISION(BaseId, CtrlId)
                break;
               
                case 100 : FUN_ISU_DEV_PA_ACTION_PLAN_DECISION(BaseId, CtrlId)
                break;
               
                case 52 : FUN_EFORM_PRODUCT_DESELECTION_VALUE(BaseId, CtrlId,IssueID)
                break;
                case 53 : FUN_EFORM_EQUIPMENT_DESELECTION_VALUE(BaseId, CtrlId,IssueID)
                break;
                case 105:FUN_ISU_AF_REFERENCE_CONNECTION(BaseId, CtrlId) 
                break;
                
                case 109:FUN_AF_EFORM_CA_PLAN_DEC(BaseId, CtrlId)
                break;
                case 110:FUN_AF_EFORM_PA_PLAN_DEC(BaseId, CtrlId)
                break;
                
                case 111:FUN_AF_EFORM_TA_PLAN_DEC(BaseId, CtrlId)
                break;
                

        }
           }




    
          
       //case 1:

      // Commen Function For Any process
      // To set  Uniqcode department fld and Form Department values  as equal.
      function FUN_DI_DEPT_VALIDATION(BaseId,CtrlId)
       {
           var obj = document.getElementById(Ucodelevel1)
           var obj1 = document.getElementById(DeptFldID)
           var flag =0
           var UCdoeValue =''
           
           
           if (obj != null && obj1 != null) 
            {
               var selIndex = obj1.selectedIndex
               var deptname = obj1.options(selIndex).text
               for (i=1;i<obj.options.length;i++)
               {
                  UCdoeValue =''
                  UCdoeValue =obj.options(i).text  + '(' + obj.options(i).value + ')'
                 if (UCdoeValue==deptname)
                 {
                  obj.selectedIndex=i;
                  flag=1;
                  funSetCode();
                 }
               }
             if(flag==1)         
             obj.disabled = true;
             else
             obj.disabled = false;
          }
      }

      /*--------------Change Control Login Functions ------------------*/
      function FUN_CC_CHANGERELATEDTO(BaseId, CtrlId) {
          UcodeDeptCheck()

          AddCutomValidator("Select Value For: Market", MarketIDArr[1], MarketIDArr[2]) // Market ID: FLD_7_12
          AddCutomValidator("Select Value For: Change Related To", ChangeRelatedToFldIdAry[1], ChangeRelatedToFldIdAry[2]) // Change Related To ID: FLD_9_14

          var ChangeRelatedToValue = document.getElementById(ChangeRelatedToFldId).value    
          var ChangeRelatedToAry = new Array()
          ChangeRelatedToAry = ChangeRelatedToValue.split(";")
          //Product; Material; Equipment; Document; Facility; Others

          // Defualt Settings of Change Related  Flds' Validation Rules as Not Applicable
          document.getElementById("FLDLBL_" + ProductFldIdAry[1] + "_" + ProductFldIdAry[2]).className = "HideRow"
          AddCutomValidator("", ProductFldIdAry[1], ProductFldIdAry[2])


          document.getElementById("FLDLBL_" + MaterialFldIdAry[1] + "_" + MaterialFldIdAry[2]).className = "HideRow"
          AddCutomValidator("", MaterialFldIdAry[1], MaterialFldIdAry[2])

          document.getElementById("FLDLBL_" + EquipmentFldIdAry[1] + "_" + EquipmentFldIdAry[2]).className = "HideRow"
          AddCutomValidator("", EquipmentFldIdAry[1], EquipmentFldIdAry[2])

          document.getElementById("FLDLBL_" + FacilityFldIdAry[1] + "_" + FacilityFldIdAry[2]).className = "HideRow"
          AddCutomValidator("", FacilityFldIdAry[1], FacilityFldIdAry[2])


          document.getElementById("FLDLBL_" + DocumentFldIdAry[1] + "_" + DocumentFldIdAry[2]).className = "HideRow"
          AddCutomValidator("", DocumentFldIdAry[1], DocumentFldIdAry[2])

          document.getElementById("FLDLBL_" + OthersFldIdAry[1] + "_" + OthersFldIdAry[2]).className = "HideRow"
          AddCutomValidator("", OthersFldIdAry[1], OthersFldIdAry[2])
           
          for (i = 0; i < ChangeRelatedToAry.length; i++) {
              ChangeRelatedToAry[i]=trim(ChangeRelatedToAry[i])
              if (ChangeRelatedToAry[i] == "Product") {
                  AddCutomValidator("Select Value For: Product", ProductFldIdAry[1], ProductFldIdAry[2])
                  document.getElementById("FLDLBL_" + ProductFldIdAry[1] + "_" + ProductFldIdAry[2]).className = "MainTD" 
              }
              if (ChangeRelatedToAry[i] == "Material") {
                  AddCutomValidator("Select Value For: Material", MaterialFldIdAry[1], MaterialFldIdAry[2])
                  document.getElementById("FLDLBL_" + MaterialFldIdAry[1] + "_" + MaterialFldIdAry[2]).className = "MainTd"

              }
              if (ChangeRelatedToAry[i] == "Equipment") {
                  AddCutomValidator("Select Value For: Equipment", EquipmentFldIdAry[1], EquipmentFldIdAry[2])
                  document.getElementById("FLDLBL_" + EquipmentFldIdAry[1] + "_" + EquipmentFldIdAry[2]).className = "MainTd"

              }
              if (ChangeRelatedToAry[i] == "Document") {
                  AddCutomValidator("Enter Value For: Document", DocumentFldIdAry[1], DocumentFldIdAry[2])
                  document.getElementById("FLDLBL_" + DocumentFldIdAry[1] + "_" + DocumentFldIdAry[2]).className = "MainTd"

              }
              if (ChangeRelatedToAry[i] == "Facility") {
                  AddCutomValidator("Enter Value For: Facility", FacilityFldIdAry[1], FacilityFldIdAry[2])
                  document.getElementById("FLDLBL_" + FacilityFldIdAry[1] + "_" + FacilityFldIdAry[2]).className = "MainTd"

              }
              if (ChangeRelatedToAry[i] == "Others") {
                  AddCutomValidator("Enter Value For: Others", OthersFldIdAry[1], OthersFldIdAry[2])
                  document.getElementById("FLDLBL_" + OthersFldIdAry[1] + "_" + OthersFldIdAry[2]).className = "MainTd"

              }
          }


        
      }

//////////////////// Editable DOucment Attachment Popup Icon Enable and Disable Function///////////////////

      function FUN_ISU_EDITATT_DECISION(BaseId, CtrlId) {

          var ExpMessage = ""
          var ExpCtrlID = ""


          var NextFldBaseId = SOPEditFileIDAry[1] // Hear Give Next Fld base Id
          var NextFldCtrlId = SOPEditFileIDAry[2] // Hear Give Next Fld Ctrl Id 
          var ExpMsg = 'Select Value For: Attachment(s)'   // Hear Give Next Fld Exp Messahe

          document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "HideRow";
          document.getElementById("BTN_" + LogFldPrefix + NextFldBaseId).setAttribute("disabled", "disabled")
          
          if (document.getElementById(BaseId + "_" + CtrlId + "_0").checked == true) {
              document.getElementById("BTN_" + LogFldPrefix + NextFldBaseId).removeAttribute("disabled")
              document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "MainTD";
              
              if (document.getElementById(LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId).value == "") {
                  ExpMessage = ExpMessage + ExpMsg + '#*#';
                  ExpCtrlID = (LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId) + '#*#'
              }
          }
          else// if (document.getElementById(BaseId + "_" + CtrlId + "_1").checked == true)
          { //alert(
              document.getElementById("BTN_" + LogFldPrefix + NextFldBaseId).setAttribute("disabled", "disabled")
              document.getElementById(LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId).setAttribute("value", "")
              document.getElementById("File_"+LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId).innerHTML="";
              //document.getElementById("Value_" + LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId).setAttribute("className", "HideRow")

          }

          var idStr = NextFldBaseId + '_' + NextFldCtrlId
          setExpMessage(ExpMessage, ExpCtrlID, idStr)
      }
/////////////////////////// End of Function////////////////////////////////////


//////////////////// Reference  Issue(s)  Popup Icon Enable and Disable Function///////////////////

      function FUN_ISU_REFERENCE_DECISION(BaseId, CtrlId) {
        if(TransType<3){
          var ExpMessage = ""
          var ExpCtrlID = ""


          var NextFldBaseId = ReferredIssueIDAry[1] // Hear Give Next Fld base Id
          var NextFldCtrlId = ReferredIssueIDAry[2] // Hear Give Next Fld Ctrl Id 
          
          var ExpMsg = 'Select Value For: Referred Issue(s)'   // Hear Give Next Fld Exp Messahe

          document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "HideRow";

          document.getElementById("BTN_" + LogFldPrefix + NextFldBaseId).setAttribute("disabled", "disabled")
          if (document.getElementById(BaseId + "_" + CtrlId + "_0").checked == true) {
              document.getElementById("BTN_" + LogFldPrefix + NextFldBaseId).removeAttribute("disabled")
              document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "MainTD";
              if (document.getElementById(LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId).value == "") {
                  ExpMessage = ExpMessage + ExpMsg + '#*#';
                  ExpCtrlID = (LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId) + '#*#'
              }
          }
          else// if (document.getElementById(BaseId + "_" + CtrlId + "_1").checked == true)
          { //alert(
              document.getElementById("BTN_" + LogFldPrefix + NextFldBaseId).setAttribute("disabled", "disabled")
              document.getElementById(LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId).setAttribute("value", "")
              document.getElementById( "Value_"+ LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId).setAttribute("className", "HideRow")
              //document.getElementById("Value_" + LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId).setAttribute("className", "HideRow")

          }

          var idStr = BaseId + '_' + CtrlId
          setExpMessage(ExpMessage, ExpCtrlID, idStr)
       }
      }
/////////////////////////// End of Function////////////////////////////////////


      function FUN_CCP_ISU_ACTION_PLAN_DECISION(BaseId, CtrlId) {
         
       //Added for Modification Purpose
              var ExpMessage = ""
              var ExpCtrlID = ""
            
              var NextFldBaseId = ActionPlanPropIdAry[1] // Hear Give Next Fld base Id
              var NextFldCtrlId = ActionPlanPropIdAry[2] // Hear Give Next Fld Ctrl Id 
              var ExpMsg = 'Select Value For: Proposed Action plan(s)'   // Hear Give Next Fld Exp Messahe             
     
                document.getElementById("BTN_" + LogFldPrefix + NextFldBaseId).setAttribute("disabled", "disabled")
                document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "HideRow";
                  
                  BaseId= BaseId.replace('FLD_' ,'')
                
              if (document.getElementById(LogFldPrefix + BaseId + "_" + CtrlId + "_0").checked == true) {
                  document.getElementById("BTN_" + LogFldPrefix + NextFldBaseId).removeAttribute("disabled");
                  document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "MainTD";
                  
                  if (document.getElementById(LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId).value == "") {
                      ExpMessage = ExpMessage + ExpMsg + '#*#';
                      ExpCtrlID = (LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId) + '#*#'
                  }
              }
              else //if (document.getElementById(BaseId + "_" + CtrlId + "_1").checked == true)
               {
                  document.getElementById("BTN_" + LogFldPrefix + NextFldBaseId).setAttribute("disabled", "disabled")
                  document.getElementById(LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId).setAttribute("value", "")
                  document.getElementById("Value_" + LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId).setAttribute("className", "HideRow")

              }

              var idStr = BaseId + '_' + CtrlId
              setExpMessage(ExpMessage, ExpCtrlID, idStr)
         
      }


      //Closed
   function FUN_CCT_ISU_ACTION_PLAN_DECISION(BaseId, CtrlId) {
         
       //Added for Modification Purpose
              var ExpMessage = ""
              var ExpCtrlID = ""
            
              var NextFldBaseId ='242'// Hear Give Next Fld base Id
              var NextFldCtrlId ='597'// Hear Give Next Fld Ctrl Id 
              var ExpMsg = 'Select Value For: Proposed Action plan(s)'   // Hear Give Next Fld Exp Messahe             
     
                document.getElementById("BTN_" + LogFldPrefix + NextFldBaseId).setAttribute("disabled", "disabled")
                document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "HideRow";
                  
                  BaseId= BaseId.replace('FLD_' ,'')
                
              if (document.getElementById(LogFldPrefix + BaseId + "_" + CtrlId + "_0").checked == true) {
                  document.getElementById("BTN_" + LogFldPrefix + NextFldBaseId).removeAttribute("disabled");
                  document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "MainTD";
                  
                  if (document.getElementById(LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId).value == "") {
                      ExpMessage = ExpMessage + ExpMsg + '#*#';
                      ExpCtrlID = (LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId) + '#*#'
                  }
              }
              else //if (document.getElementById(BaseId + "_" + CtrlId + "_1").checked == true)
               {
                  document.getElementById("BTN_" + LogFldPrefix + NextFldBaseId).setAttribute("disabled", "disabled")
                  document.getElementById(LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId).setAttribute("value", "")
                  document.getElementById("Value_" + LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId).setAttribute("className", "HideRow")

              }

              var idStr = BaseId + '_' + CtrlId
              setExpMessage(ExpMessage, ExpCtrlID, idStr)
         
      }


      //Closed
      /*----------------- End of Change Control Login Functions------------*/
       
       
           
      
      
      /*   Case 2:  EventRelated To  Validation At Issue Login 
      If Fields Are change Then chage ter ids and controlids and revlevent exep message , for new fields also same 
      Fields Type 1 - For Product / Material  Event Type , 3- For Document Type , 4 - For Equipment Related Type ,5- other Details 
      */

       function UcodeDeptCheck() {
           var ExpMessage = ""
           var ExpCtrlID = ""

           var obj = document.getElementById("Ucodelevel1")
           var obj1 = document.getElementById("FLD_4_11")
           if (obj != null && obj1 != null) {

               var selIndex = obj.selectedIndex
               var deptname = obj.options(selIndex).text   + '(' + obj.options(selIndex).value + ')'
               selIndex = obj1.selectedIndex
               var Initdeptname = obj1.options(selIndex).text
               if (Initdeptname != deptname) {
                   // alert("Initiation Department and Ucode-Department Name Should Be Equal")
                   ExpMessage = "Unique Item Value: Department Name should be equal to Initiating Department"


               }
               ExpCtrlID = "Ucodelevel1"
               var idStr = "Ucodelevel1"
               setExpMessage(ExpMessage, ExpCtrlID, idStr)
           }
       }



        

function FUN_ISU_DEV_CA_ACTION_PLAN_DECISION(BaseId, CtrlId)
{

 if(TransType<3){
 
        AddCutomValidator("", CAPPlanProRemarksIDArr[1], CAPPlanProRemarksIDArr[2])
        document.getElementById(LogFldPrefix + CAPPlanProRemarksIDArr[1] + '_' + CAPPlanProRemarksIDArr[2]).setAttribute("disabled", "disabled")
        document.getElementById("FLDLBL_" + CAPPlanProRemarksIDArr[1] + "_" + CAPPlanProRemarksIDArr[2]).className = "HideRow" 

        AddCutomValidator("", CAPPlanProIDArr[1],CAPPlanProIDArr[2])
        document.getElementById('BTN_' + LogFldPrefix + CAPPlanProIDArr[1] ).setAttribute("disabled", "disabled")
        document.getElementById("FLDLBL_" + CAPPlanProIDArr[1] + "_" + CAPPlanProIDArr[2]).className = "HideRow"
        document.getElementById("Value_" + LogFldPrefix + CAPPlanProIDArr[1] + '_' + CAPPlanProIDArr[2]).className = "HideRow"
                    
                    BaseId= BaseId.replace('FLD_' ,'')
                    
        if (document.getElementById(LogFldPrefix + BaseId + "_" + CtrlId + "_0").checked ==true)
          {

              document.getElementById('BTN_' + LogFldPrefix + CAPPlanProIDArr[1] ).removeAttribute("disabled")
              document.getElementById("FLDLBL_" + CAPPlanProIDArr[1] + "_" + CAPPlanProIDArr[2]).className = "MainTD" 
              
              if (document.getElementById(LogFldPrefix + CAPPlanProIDArr[1] + "_" + CAPPlanProIDArr[2]).value == "") {
                      AddCutomValidator("Select Value For: Proposed Corrective Action Plan(s)", CAPPlanProIDArr[1], CAPPlanProIDArr[2])
                }
                else
                {
                  document.getElementById("Value_" + LogFldPrefix + CAPPlanProIDArr[1] + '_' + CAPPlanProIDArr[2]).className = "MainTD"
                }
             
              document.getElementById(LogFldPrefix + CAPPlanProRemarksIDArr[1] + '_' + CAPPlanProRemarksIDArr[2]).value=""
             
              
          }
          
      else if (document.getElementById(LogFldPrefix + BaseId + "_" + CtrlId + "_1").checked ==true)
      {
      
      
        AddCutomValidator("Enter Value For: Remark(s) / Reason(s) - If CA Plan(s) Not Required", CAPPlanProRemarksIDArr[1], CAPPlanProRemarksIDArr[2])
        document.getElementById(LogFldPrefix + CAPPlanProRemarksIDArr[1] + '_' + CAPPlanProRemarksIDArr[2]).removeAttribute("disabled")
        document.getElementById("FLDLBL_" + CAPPlanProRemarksIDArr[1] + "_" + CAPPlanProRemarksIDArr[2]).className = "MainTD" 

        document.getElementById(LogFldPrefix + CAPPlanProIDArr[1] + '_' + CAPPlanProIDArr[2]).value=""        
            
      }

 }
 
}

function FUN_ISU_DEV_PA_ACTION_PLAN_DECISION(BaseId, CtrlId)
{



 if(TransType<3){
 
        AddCutomValidator("", PAPlanProRemarksIDArr[1], PAPlanProRemarksIDArr[2])
        document.getElementById(LogFldPrefix + PAPlanProRemarksIDArr[1] + '_' + PAPlanProRemarksIDArr[2]).setAttribute("disabled", "disabled")
        document.getElementById("FLDLBL_" + PAPlanProRemarksIDArr[1] + "_" + PAPlanProRemarksIDArr[2]).className = "HideRow" 

        AddCutomValidator("", PAPlanProIDArr[1],PAPlanProIDArr[2])
        document.getElementById('BTN_' + LogFldPrefix + PAPlanProIDArr[1] ).setAttribute("disabled", "disabled")
        document.getElementById("FLDLBL_" + PAPlanProIDArr[1] + "_" + PAPlanProIDArr[2]).className = "HideRow"
        document.getElementById("Value_" + LogFldPrefix + PAPlanProIDArr[1] + '_' + PAPlanProIDArr[2]).className = "HideRow"
                    
                    BaseId= BaseId.replace('FLD_' ,'')
                    
        if (document.getElementById(LogFldPrefix + BaseId + "_" + CtrlId + "_0").checked ==true)
          {

              document.getElementById('BTN_' + LogFldPrefix + PAPlanProIDArr[1] ).removeAttribute("disabled")
              document.getElementById("FLDLBL_" + PAPlanProIDArr[1] + "_" + PAPlanProIDArr[2]).className = "MainTD" 

                if (document.getElementById(LogFldPrefix + PAPlanProIDArr[1] + "_" + PAPlanProIDArr[2]).value == "") {
                      AddCutomValidator("Select Value For: Proposed Preventive Action Plan(s)", PAPlanProIDArr[1], PAPlanProIDArr[2])
                }
                else
                {
                  document.getElementById("Value_" + LogFldPrefix + PAPlanProIDArr[1] + '_' + PAPlanProIDArr[2]).className = "MainTD"
                }
                
              document.getElementById(LogFldPrefix + PAPlanProRemarksIDArr[1] + '_' + PAPlanProRemarksIDArr[2]).value=""
             
              
          }
          
      else if (document.getElementById(LogFldPrefix + BaseId + "_" + CtrlId + "_1").checked ==true)
      {
      
      
        AddCutomValidator("Enter Value For: Remark(s) / Reason(s) - If PA Plan(s) Not Required", PAPlanProRemarksIDArr[1], PAPlanProRemarksIDArr[2])
        document.getElementById(LogFldPrefix + PAPlanProRemarksIDArr[1] + '_' + PAPlanProRemarksIDArr[2]).removeAttribute("disabled")
        document.getElementById("FLDLBL_" + PAPlanProRemarksIDArr[1] + "_" + PAPlanProRemarksIDArr[2]).className = "MainTD" 

        document.getElementById(LogFldPrefix + PAPlanProIDArr[1] + '_' + PAPlanProIDArr[2]).value=""        
            
      }

 }
 
}


        function FUN_ISU_DEV_PROBREASON_DECISION(BaseId, CtrlId)
        {

          
           
            
                AddCutomValidator("", ProbableReasonIDArr[1], ProbableReasonIDArr[2])
                document.getElementById(LogFldPrefix + ProbableReasonIDArr[1] + '_' + ProbableReasonIDArr[2]).setAttribute("disabled", "disabled")
                document.getElementById("FLDLBL_" + ProbableReasonIDArr[1] + "_" + ProbableReasonIDArr[2]).className = "HideRow" 

                AddCutomValidator("", ProbableReasonothIDArr[1],ProbableReasonothIDArr[2])
                document.getElementById(LogFldPrefix + ProbableReasonothIDArr[1] + '_' + ProbableReasonothIDArr[2]).setAttribute("disabled", "disabled")
                document.getElementById("FLDLBL_" + ProbableReasonothIDArr[1] + "_" + ProbableReasonothIDArr[2]).className = "HideRow"
                    
                    BaseId= BaseId.replace('FLD_' ,'')


              if (document.getElementById(LogFldPrefix + BaseId + "_" + CtrlId + "_0").checked ==true)
              {

                  document.getElementById(LogFldPrefix + ProbableReasonIDArr[1] + '_' + ProbableReasonIDArr[2]).removeAttribute("disabled")
                  document.getElementById("FLDLBL_" + ProbableReasonIDArr[1] + "_" + ProbableReasonIDArr[2]).className = "MainTD" 
                  AddCutomValidator("Select Value For: Probable Reason / Root Cause", ProbableReasonIDArr[1], ProbableReasonIDArr[2])
                 
                  document.getElementById(LogFldPrefix + ProbableReasonothIDArr[1] + '_' + ProbableReasonothIDArr[2]).removeAttribute("disabled")
                  document.getElementById("FLDLBL_" + ProbableReasonothIDArr[1] + "_" + ProbableReasonothIDArr[2]).className = "MainTD"
                  AddCutomValidator("Enter Value For: Probable Reason / Root Cause - Others", ProbableReasonothIDArr[1],ProbableReasonothIDArr[2])
              }
              
              else
              {
                document.getElementById(LogFldPrefix + ProbableReasonIDArr[1] + "_" + ProbableReasonIDArr[2]).value=""
                document.getElementById(LogFldPrefix + ProbableReasonothIDArr[1] + "_" + ProbableReasonothIDArr[2]).value=""
                
              }

            

        }
        
        
        function FUN_DI_EVENT_VALIDATION(BaseId,CtrlId)
        {
            UcodeDeptCheck()
           // AddCutomValidator("Select Value For: Market", 7,12) 
          
           AddCutomValidator("Select Value For: Market", MarketIDArr[1], MarketIDArr[2]) // Market ID: FLD_7_12
           var EventRelTo = document.getElementById(BaseId + "_" + CtrlId).value
            
            // Product
            var DevProductFldId = 'FLD_188_611';
            var DevProductFldIdAry = new Array();
            DevProductFldIdAry = DevProductFldId.split('_');
            
             document.getElementById("FLDLBL_" + DevProductFldIdAry[1] + "_" + DevProductFldIdAry[2]).className = "HideRow"
            AddCutomValidator("", DevProductFldIdAry[1], DevProductFldIdAry[2])

            // End Product
            
            //Batch
            var DevBatchFldId = 'FLD_189_614';
            var DevBatchFldIdAry = new Array();
            DevBatchFldIdAry = DevBatchFldId.split('_');
            
             document.getElementById("FLDLBL_" + DevBatchFldIdAry[1] + "_" + DevBatchFldIdAry[2]).className = "HideRow"
            AddCutomValidator("", DevBatchFldIdAry[1], DevBatchFldIdAry[2])

            
            // Material
            var DevMaterialFldId = 'FLD_190_612';
            var DevMaterialFldIdAry = new Array();
            DevMaterialFldIdAry = DevMaterialFldId.split('_');
            
            document.getElementById("FLDLBL_" + DevMaterialFldIdAry[1] + "_" + DevMaterialFldIdAry[2]).className = "HideRow"
            AddCutomValidator("", DevMaterialFldIdAry[1], DevMaterialFldIdAry[2])
            
            // End Material
            
            //Lot
             var DevLotFldId = 'FLD_191_615';
            var DevLotFldIdAry = new Array();
            DevLotFldIdAry = DevLotFldId.split('_');
            
            document.getElementById("FLDLBL_" + DevLotFldIdAry[1] + "_" + DevLotFldIdAry[2]).className = "HideRow"
            AddCutomValidator("", DevLotFldIdAry[1], DevLotFldIdAry[2])
            
            //Equipment
            var DevEquipmentFldId='FLD_193_616'
            var DevEquipmentFldIdAry = new Array()
            DevEquipmentFldIdAry=DevEquipmentFldId.split('_');
            
            document.getElementById("FLDLBL_" + DevEquipmentFldIdAry[1] + "_" + DevEquipmentFldIdAry[2]).className = "HideRow"
            AddCutomValidator("", DevEquipmentFldIdAry[1], DevEquipmentFldIdAry[2])
            
            //ENd Equipment
            
            //System
            //var DevSystemFldId='FLD_62_57'
            var DevSystemFldId='FLD_192_594'
            var DevSystemFldIdAry= new Array()
            DevSystemFldIdAry=DevSystemFldId.split('_');
            
            document.getElementById("FLDLBL_" + DevSystemFldIdAry[1] + "_" + DevSystemFldIdAry[2]).className = "HideRow"
            AddCutomValidator("", DevSystemFldIdAry[1], DevSystemFldIdAry[2])
            
             //END System
      
              //Others
            var DevOthersFldId='FLD_194_5'
            var DevOthersFldIdAry= new Array()
            DevOthersFldIdAry=DevOthersFldId.split('_');
            
             document.getElementById("FLDLBL_" + DevOthersFldIdAry[1] + "_" + DevOthersFldIdAry[2]).className = "HideRow"
            AddCutomValidator("", DevOthersFldIdAry[1], DevOthersFldIdAry[2])
             //END Others
            
                                       
                              
              
              if (EventRelTo == "Product") {
                  AddCutomValidator("Select Value For: Product", DevProductFldIdAry[1], DevProductFldIdAry[2])
                  document.getElementById("FLDLBL_" + DevProductFldIdAry[1] + "_" + DevProductFldIdAry[2]).className = "MainTD" 
                  
                  AddCutomValidator("Select Value For: Batch No(s)", DevBatchFldIdAry[1],DevBatchFldIdAry[2])
                  document.getElementById("FLDLBL_" + DevBatchFldIdAry[1] + "_" + DevBatchFldIdAry[2]).className = "MainTD"
              }
              
              if (EventRelTo == "Material") {
                  AddCutomValidator("Select Value For: Material", DevMaterialFldIdAry[1],DevMaterialFldIdAry[2])
                  document.getElementById("FLDLBL_" + DevMaterialFldIdAry[1] + "_" + DevMaterialFldIdAry[2]).className = "MainTD"
                                   
                  AddCutomValidator("Select Value For: Lot No(s)", DevLotFldIdAry[1],DevLotFldIdAry[2])
                  document.getElementById("FLDLBL_" + DevLotFldIdAry[1] + "_" + DevLotFldIdAry[2]).className = "MainTD"
              }
              
              if (EventRelTo == "System") {
                  AddCutomValidator("Enter Value For: System", DevSystemFldIdAry[1],DevSystemFldIdAry[2])
                  document.getElementById("FLDLBL_" + DevSystemFldIdAry[1] + "_" + DevSystemFldIdAry[2]).className = "MainTD"
              }
              
              if (EventRelTo == "Equipment") {
                  AddCutomValidator("Select Value For: Equipment", DevEquipmentFldIdAry[1],DevEquipmentFldIdAry[2])
                  document.getElementById("FLDLBL_" + DevEquipmentFldIdAry[1] + "_" + DevEquipmentFldIdAry[2]).className = "MainTD"
              }
              
              if (EventRelTo == "Others") {
                  AddCutomValidator("Enter Value For: Other Details", DevOthersFldIdAry[1],DevOthersFldIdAry[2])
                  document.getElementById("FLDLBL_" + DevOthersFldIdAry[1] + "_" + DevOthersFldIdAry[2]).className = "MainTD"
              }
            
            
      } 


        /* case 6:Probable reason / Root Cause Validation At Deviation Issue Login 
        If "Probable reason/Root cause" is selected as "Others" then "Probable reason – Others (Specify)" field will become mandatory. */
       
       function FUN_DI_PROB_REASON_VALIDATION(BaseId,CtrlId)
       {
            var ProbReason=document.getElementById("FLD_" + BaseId + "_" + CtrlId).value
            var ExpMessage=""
            var ExpCtrlID=""
            if (ProbReason=="Others")
            {
                // Hear Also We menction Hard Code Base id value 
                
                var obj=document.getElementById("FLD_" + 35 + "_" + 11)
                if (obj.value=="")
                {ExpMessage= "Enter Value For: Probable reason – Others (Specify)" ; ExpCtrlID="FLD_" + 35 + "_" + 11}
                 document.getElementById("FLDLBL_" + 35 + "_" + 11).className="MainTD" 
            }
            else
            {document.getElementById("FLDLBL_" + 35 + "_" + 11).className="HideRow" }
            var idStr=BaseId + '_' + CtrlId
            setExpMessage(ExpMessage,ExpCtrlID,idStr)

       
       }   
       
      
     /*  case 18: function to enable/disable "Proposed Corrective Action Plan(s)" field based on selection of "Corrective Action Plan(s) Proposal Required" yes/no 
     at Registration Approval screen of DI Issue Login */
     
     function FUN_DI_ACT_PLAN_DECISION(BaseId,CtrlId) 
     {
         /* For Issue Login custom validations  we are getting Current field ID 
             base din current field we cont get  next field id  bcz id is formed based on fiield and control id 
             
             In efroms  Flied id is formed in continued format , so from current id to next id we can get by increment the base value 
             this kind of  functionality is  not working in issue login forms  
             For issue forms we  need to write individual quary for each field validation by hard coded id's 
        */

         var NexActivityID=BaseId.substring(4,BaseId.length)  
         NexActivityID = parseInt(NexActivityID) - 4  
        
        var PopupBtn = document.getElementById("BTN_"+ BaseId.substring(0,4)+ + NexActivityID)
        var TxtCtlId = $(PopupBtn).attr("id"); //$(PopupBtn).data("txtfldid");
        var ValCtrl = $("span[controltovalidate='"+ TxtCtlId +"']")
        if (document.getElementById(BaseId + "_" + CtrlId + "_0").checked==true)
        {
            PopupBtn.removeAttribute("disabled")
            if(ValCtrl.length >0)
            {
                ValidatorEnable($(ValCtrl)[0], true);
            }
        }
        else if (document.getElementById(BaseId + "_" + CtrlId + "_1").checked==true)
        {
            PopupBtn.setAttribute('disabled', 'disabled');
            if(ValCtrl.length >0)
            {
                ValidatorEnable($(ValCtrl)[0], false);
            }
        }
           
     }
         
        
      //  ************** End Lupin -Deviation Process   Custom Field Validation   ******************
      
 
 
    // *****  Work Allocation Validatios *********

        function QAMS_WRK_ALL_SpecialValidations(functionid,IssueID,Rowcount)
        {
            switch (parseInt(functionid))
            {  
                case 4 : FUN_WRKALLOC_USERAUTHENTICATION(IssueID,Rowcount)
                break;
            }
        }
                
       //Case 4: Work Allocation Incharge Check Validation  -At efrom preparation ******
        function FUN_WRKALLOC_USERAUTHENTICATION(IssueID,Rowcount)
        { 
            QAMS_ReadDepartMent(IssueID,Rowcount)
        } 
 
 
        // ********* Lupin  Change  Control Process *************//
        
        // Function Call At On Click   (No Functionality At On Click )
        function FUN_CC_RA_DECISION (BaseId,CtrlId)
        {
          var ExpMessage=""
          var ExpCtrlID=""
          var RemarksID = BaseId.substring(7, BaseId.length)
          RemarksID = parseFloat(RemarksID) + 1  
        
          document.getElementById("FLDLBL_" + BaseId.substring(0,7) + RemarksID + "_11").className = "HideRow";
          
            if (document.getElementById(BaseId + "_" + CtrlId + "_1").checked==true)
                { 
                  
                        document.getElementById("FLDLBL_" + BaseId.substring(0,7) + RemarksID + "_11").className = "MainTD";
                        if (document.getElementById(BaseId.substring(0,7) + RemarksID + "_11").value=="")
                        {  ExpMessage= ExpMessage + "Enter  Remark(s) / Reason(s) If Not Approved" + '#*#' ;
                        ExpCtrlID=ExpCtrlID + (BaseId.substring(0,7) + RemarksID + "_11") + '#*#' 
                        }
                    
                 }    
        
            var idStr=BaseId + '_' + CtrlId
            setExpMessage(ExpMessage,ExpCtrlID,idStr)
        }
        
        

        function FUN_CC_QA_DECISION(BaseId, CtrlId) {
            var ExpMessage = ""
            var ExpCtrlID = ""

            var RemarksID = BaseId.substring(7, BaseId.length)
            RemarksID = parseFloat(RemarksID) + 1
              
              document.getElementById("FLDLBL_" + BaseId.substring(0, 7) + RemarksID + "_11").className = "HideRow";
                          
             if (document.getElementById(BaseId + "_" + CtrlId + "_1").checked == true)
              {
               
               document.getElementById("FLDLBL_" + BaseId.substring(0, 7) + RemarksID + "_11").className = "MainTD";
               if (document.getElementById(BaseId.substring(0, 7) + RemarksID + "_11").value == "")
                {
                    ExpMessage = ExpMessage + "Enter  Remark(s) / Reason(s) If Not Approved" + '#*#';
                    ExpCtrlID = ExpCtrlID + (BaseId.substring(0, 7) + RemarksID + "_11") + '#*#'
                }
               
            }

            var idStr = BaseId + '_' + CtrlId
             
            setExpMessage(ExpMessage, ExpCtrlID, idStr)
        }
        
        
        // Function Call At On submit   (No Functionality At On Click )
        function FUN_CC_RA_DECISION_ON_SUBMIT(BaseId,CtrlId,IssueID)
        {
           if (document.getElementById(BaseId + "_" + CtrlId + "_1").checked==true)
                {
                    AjaxChangeIssueStatus(IssueID,0,2)
                }
//              if (document.getElementById(BaseId + "_" + CtrlId + "_0").checked==true)
//                {
//                    AjaxChangeIssueStatus(IssueID,0,10)
//                }   
                
        }
        
        
        
        
        // Function  Call At Onchage Of drop down 
        function FUN_DEV_CAPA_DEPENDENCY(BaseId,CtrlId) {
            
        }
        
        // Function To chage Issue Status At Deviation QA Comments 
        function FUN_DEV_CAPA_DEPENDENCY_ON_SUBMIT(BaseId,CtrlId,IssueID) {    //alert('....Calling Status Change-01')
        
       // alert(IssueID)
              // For Diplay Of Plan Acceptance List 
            
           var QADeptDDL = document.getElementById(BaseId + "_" + CtrlId);
           var QADecision = QADeptDDL.options(QADeptDDL.selectedIndex).text

           //var CA_Text = dcument.getElementById("E1_COL0213008005_70").value
           //alert(CA_Text)
           //alert(QADecision)
           if (QADecision == 'Not Mandatory/Not Applicable') 
           {  
              var QRM_Text = document.getElementById("E1_COL0215051005_600").value
              if(QRM_Text == '')
              {
                AjaxChangeIssueStatus(IssueID,0,5)
              } 
              else
              {
                AjaxChangeIssueStatus(IssueID, 0, 34)
              }
           }
          
           if (QADecision == 'Mandatory') {
               AjaxChangeIssueStatus(IssueID, 0, 4)
               //var RM_Text = document.getElementById("E1_COL0213008003_88").value
             
               var CA_Text = document.getElementById("E1_COL0215051007_598").value
               var PA_Text = document.getElementById("E1_COL0215051009_599").value
               var OA_Text = document.getElementById("E1_COL0215051011_607").value
               if ( CA_Text == '' && PA_Text == '' && OA_Text == '') {
                   AjaxChangeIssueStatus(IssueID, 0, 6)
               }  

           }
           
          // alert('....Calling Status Change-03')
        }

        //dUMMY
//        function FUN_CC_QA_DECISION_ON_SUBMIT(BaseId, CtrlId, IssueID) {
//            if (document.getElementById(BaseId + "_" + CtrlId + "_1").checked == true) {
//                AjaxChangeIssueStatus(IssueID, 0, 2)
//            } else {
//                AjaxChangeIssueStatus(IssueID, 0, 4)
//            }

//        }
        //DUMMY
        
        // function to chnage Issue Status At CAPA  Decison
        function FUN_CAPA_QA_DECISION_ON_SUBMIT(BaseId, CtrlId, IssueID) {
         
            if (document.getElementById(BaseId + "_" + CtrlId + "_1").checked == true) {
                AjaxChangeIssueStatus(IssueID, 0, 2)
            } else {
            AjaxChangeIssueStatus(IssueID, 0, 4)
            //var RM_Text = document.getElementById("E1_COL1113007003_21").value
            
            var CA_Text = document.getElementById("E1_COL1113007005_9").value
            var PA_Text = document.getElementById("E1_COL1113007007_20").value
            var OA_Text = document.getElementById("E1_COL1113007009_24").value
            if ( CA_Text == '' && PA_Text == '' && OA_Text == '') {  //RM_Text == '' &&
                AjaxChangeIssueStatus(IssueID, 0, 6)
              }  
            }
      }
      function FUN_CC_QA_DECISION_ON_SUBMIT(BaseId, CtrlId, IssueID) {
          if (document.getElementById(BaseId + "_" + CtrlId + "_1").checked == true) {
              AjaxChangeIssueStatus(IssueID, 0, 2)
              
          } else {
          AjaxChangeIssueStatus(IssueID, 0, 4)
          var RM_Text = document.getElementById("E1_COL1113004003_21").value
          var OA_Text = document.getElementById("E1_COL1113004005_39").value
          if (RM_Text == '' && OA_Text == ''){
              AjaxChangeIssueStatus(IssueID, 0, 6)
          }  
          }

      }


     



      function FUN_DI_EVENT_VALIDATION_ONLOAD(BaseId, CtrlId) {
       document.getElementById("FLDLBL_" + MarketIDArr[1] + "_" + MarketIDArr[2]).className = "MainTd"
           /*    var MarketID = "FLD_127_89"
          CtrlId=89
          var ExpMessage = ""
          var ExpCtrlID = ""
             ExpMessage =   "Select Value For: Market" + '#*#';
             ExpCtrlID = MarketID + '#*#'

             var idStr = MarketID//BaseId + '_' + CtrlId

          setExpMessage(ExpMessage, ExpCtrlID, idStr)
          */
      }

      function FUN_CC_CHANGERELATEDTO_ONLOAD(BaseId, CtrlId) {
         

                     
      }

      function trim(str) {
          return str.replace(/^\s+|\s+$/g, "");
      }

      function AddCutomValidator(ExpMsg, BaseId, CtrlID) {
          var FldID = LogFldPrefix + BaseId + "_" + CtrlID
          var ExpCtrlID = ""
          var ExpMessage = ""
          if (trim(document.getElementById(FldID).value) == "") {
              ExpMessage = ExpMessage + ExpMsg + '#*#';
              ExpCtrlID = FldID + '#*#'
          }

      //  alert(ExpMessage)
          setExpMessage(ExpMessage, ExpCtrlID, FldID)
      }

      
      
      // Issue Login related Corrective Action Plan(s) Proposal

      function FUN_ISU_CA_ACTION_PLAN_DECISION_ONLOAD(BaseId, CtrlId) {
         //document.getElementById(LogFldPrefix + BaseId + "_" + CtrlId + "_0").checked = true
         //FUN_ISU_CA_ACTION_PLAN_DECISION(LogFldPrefix + BaseId, CtrlId)
      }


      function FUN_ISU_CA_ACTION_PLAN_DECISION(BaseId, CtrlId) {

       if(TransType<3){

         // alert('FUN_ISU_CA_ACTION_PLAN_DECISION')
          var ExpMessage = ""
          var ExpCtrlID = ""

          var NextFldBaseId = '50' // Hear Give Next Fld base Id 
          var NextFldCtrlId = '9' // Hear Give Next Fld Ctrl Id 
          var ExpMsg = 'Select Value For: Proposed Corrective Action plan(s)'   // Hear Give Next Fld Exp Messahe 


            document.getElementById("BTN_" + LogFldPrefix + NextFldBaseId).setAttribute("disabled", "disabled")
            document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "HideRow";
            BaseId= BaseId.replace('FLD_' ,'')

          if (document.getElementById(LogFldPrefix + BaseId + "_" + CtrlId + "_0").checked == true) {
              
              document.getElementById("BTN_" + LogFldPrefix + NextFldBaseId).removeAttribute("disabled")
              document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "MainTd";
                
              if (document.getElementById(LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId).value == "") {
                  ExpMessage = ExpMessage + ExpMsg + '#*#';
                  ExpCtrlID = (LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId) + '#*#'
              }
          }
          else// if (document.getElementById(BaseId + "_" + CtrlId + "_1").checked == true)
           {
              
              document.getElementById(LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId).setAttribute("value", "")
              document.getElementById("Value_" + LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId).setAttribute("className", "HideRow")

          }

          var idStr = BaseId + '_' + CtrlId
          setExpMessage(ExpMessage, ExpCtrlID, idStr)
         } 
      }

            
           
      
      //Closed


      // Issue Login related Preventive Action Plan(s) Proposal

      function FUN_ISU_PA_ACTION_PLAN_DECISION_ONLOAD(BaseId, CtrlId) {
          //document.getElementById(LogFldPrefix + BaseId + "_" + CtrlId + "_0").checked = true
          //FUN_ISU_PA_ACTION_PLAN_DECISION(LogFldPrefix + BaseId, CtrlId)
      }



      function FUN_ISU_PA_ACTION_PLAN_DECISION(BaseId, CtrlId) {
        //  alert('FUN_ISU_PA_ACTION_PLAN_DECISION')
        
       if(TransType<3){
        
          var ExpMessage = ""
          var ExpCtrlID = ""

          var NextFldBaseId = '52' // Hear Give Next Fld base Id 
          var NextFldCtrlId = '20' // Hear Give Next Fld Ctrl Id 
          var ExpMsg = 'Select Value For: Proposed Preventive Action Plan(s)'   // Hear Give Next Fld Exp Messahe 

            document.getElementById("BTN_" + LogFldPrefix + NextFldBaseId).setAttribute("disabled", "disabled")
              document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "HideRow";

BaseId= BaseId.replace('FLD_' ,'')
          if (document.getElementById(LogFldPrefix + BaseId + "_" + CtrlId + "_0").checked == true) {
              document.getElementById("BTN_" + LogFldPrefix + NextFldBaseId).removeAttribute("disabled")
                document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "MainTD";
                
              if (document.getElementById(LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId).value == "") {
                  ExpMessage = ExpMessage + ExpMsg + '#*#';
                  ExpCtrlID = (LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId) + '#*#'
              }
          }
          else// if (document.getElementById(BaseId + "_" + CtrlId + "_1").checked == true)
           {
              document.getElementById(LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId).setAttribute("value", "")
              document.getElementById("Value_" + LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId).setAttribute("className", "HideRow")
          }

          var idStr = BaseId + '_' + CtrlId
          setExpMessage(ExpMessage, ExpCtrlID, idStr)
         } //End of transtype
      }


      //Closed


      // Issue Login - CC Action Plan(s) Proposal

      function FUN_CCP_ISU_ACTION_PLAN_DECISION_ONLOAD(BaseId, CtrlId) {
         // document.getElementById(LogFldPrefix + BaseId + "_" + CtrlId + "_0").checked = true
      }
    function FUN_CCT_ISU_ACTION_PLAN_DECISION_ONLOAD(BaseId, CtrlId) {
         // document.getElementById(LogFldPrefix + BaseId + "_" + CtrlId + "_0").checked = true
      }


     

      // Issue Login related Investigation Action Plan Related Function         
         
          
      
        
         function FUN_DEV_INV_ACTION_PLAN_DECISION_ONLOAD(BaseId,CtrlId)
         {
            // document.getElementById(LogFldPrefix + BaseId + "_" + CtrlId + "_0").checked = true
             //FUN_DEV_INV_ACTION_PLAN_DECISION(LogFldPrefix + BaseId, CtrlId)
         }
         
        
        
         
          
           function FUN_DEV_INV_ACTION_PLAN_DECISION(BaseId,CtrlId) {
             
                var ExpMessage=""
                var ExpCtrlID=""
                
                var NextFldBaseId='207' // Hear Give Next Fld base Id 
                var NextFldCtrlId='601'  // Hear Give Next Fld Ctrl Id 
                var ExpMsg= 'Select Value For: Investigation'  // Hear Give Next Fld Exp Messahe 
              
                document.getElementById( "BTN_" + LogFldPrefix + NextFldBaseId ).setAttribute("disabled","disabled") 
                document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "HideRow";
                BaseId= BaseId.replace('FLD_','')
              
                if (document.getElementById(LogFldPrefix + BaseId + "_" + CtrlId + "_0").checked==true)
                {
                   document.getElementById("BTN_" + LogFldPrefix + NextFldBaseId ).removeAttribute("disabled")
                   document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "MainTD";   
                   
                   if (document.getElementById(LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId).value=="")
                    {  ExpMessage=  ExpMessage + ExpMsg + '#*#' ;
                       ExpCtrlID= (LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId ) + '#*#' 
                    }
                } 
                else  //if (document.getElementById(BaseId + "_" + CtrlId + "_1").checked==true)
                {
                  
                   document.getElementById( LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId ).setAttribute("value","")
                   document.getElementById( "Value_" + LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId ).setAttribute("className","HideRow")
                }

                var idStr=BaseId + '_' + CtrlId
                setExpMessage(ExpMessage,ExpCtrlID,idStr)
             
              
           }

         


           // eFORM Related Functions for Action Plan Proposal(s)

           // eFORM Related Corrective Action Plan Proposal Function
          
           function FUN_EFORM_CA_ACTION_PLAN_DECISION_ONLOAD(BaseId, CtrlId) {
               //document.getElementById(BaseId + "_" + CtrlId + "_0").checked = true
           }

           function FUN_EFORM_CA_ACTION_PLAN_DECISION(BaseId, CtrlId) {
           
       
               var ExpMessage = ""
               var ExpCtrlID = ""

               var NextFldBaseId = BaseId.substring(7, BaseId.length)   // No need of chnage hear
               NextFldBaseId = parseFloat(NextFldBaseId) + 1
               NextFldBaseId = BaseId.substring(0, 7) + NextFldBaseId

               var NextFldCtrlId = '598' // Hear Give Next Fld Ctrl Id
               var ExpMsg = 'Select Value For: Proposed Corrective Action plan(s)'   // Hear Give Next Fld Exp Messahe

                document.getElementById("BTN_" + NextFldBaseId).setAttribute("disabled", "disabled")
                document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "HideRow";
  
               if (document.getElementById(BaseId + "_" + CtrlId + "_0").checked == true) {
                  
                   document.getElementById("BTN_" + NextFldBaseId).removeAttribute("disabled")
                   document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "MainTD";
                   
                   if (document.getElementById(NextFldBaseId + "_" + NextFldCtrlId).value == "") {
                       ExpMessage = ExpMessage + ExpMsg + '#*#';
                       ExpCtrlID = (NextFldBaseId + "_" + NextFldCtrlId) + '#*#'
                   }
               }
               else //if (document.getElementById(BaseId + "_" + CtrlId + "_1").checked == true) 
               {
                   document.getElementById(NextFldBaseId + "_" + NextFldCtrlId).setAttribute("value", "")
                   document.getElementById("Value_" + NextFldBaseId + "_" + NextFldCtrlId).setAttribute("className", "HideRow")
               }

               var idStr = BaseId + '_' + CtrlId
               setExpMessage(ExpMessage, ExpCtrlID, idStr)
            
           }

           // Closed



           // eFORM Related Preventive Action Plan Proposal Function

           function FUN_EFORM_PA_ACTION_PLAN_DECISION_ONLOAD(BaseId, CtrlId) {
               //document.getElementById(BaseId + "_" + CtrlId + "_0").checked = true
           }

           function FUN_EFORM_PA_ACTION_PLAN_DECISION(BaseId, CtrlId) {
          
               var ExpMessage = ""
               var ExpCtrlID = ""

               var NextFldBaseId = BaseId.substring(7, BaseId.length)   // No need of chnage hear
               NextFldBaseId = parseFloat(NextFldBaseId) + 1
               NextFldBaseId = BaseId.substring(0, 7) + NextFldBaseId

               var NextFldCtrlId = '599' // Hear Give Next Fld Ctrl Id
               var ExpMsg = 'Select Value For: Proposed Preventive Action plan(s)'   // Hear Give Next Fld Exp Messahe

                document.getElementById("BTN_" + NextFldBaseId).setAttribute("disabled", "disabled")
                document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "HideRow";
  
               if (document.getElementById(BaseId + "_" + CtrlId + "_0").checked == true) {
                   document.getElementById("BTN_" + NextFldBaseId).removeAttribute("disabled")
                   document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "MainTD";
                   if (document.getElementById(NextFldBaseId + "_" + NextFldCtrlId).value == "") {
                       ExpMessage = ExpMessage + ExpMsg + '#*#';
                       ExpCtrlID = (NextFldBaseId + "_" + NextFldCtrlId) + '#*#'
                   }
               }
               else //if (document.getElementById(BaseId + "_" + CtrlId + "_1").checked == true) 
               {
                   document.getElementById(NextFldBaseId + "_" + NextFldCtrlId).setAttribute("value", "")
                   document.getElementById("Value_" + NextFldBaseId + "_" + NextFldCtrlId).setAttribute("className", "HideRow")
               }

               var idStr = BaseId + '_' + CtrlId
               setExpMessage(ExpMessage, ExpCtrlID, idStr)
              
           }

           // Closed


           // Category of Deviation - QRM

               function FUN_DEV_QRM_ACTION_PLAN_DECISION(BaseId, CtrlId)
                {
          
                
               var ExpMessage = ""
               var ExpCtrlID = ""

               var NextFldBaseId = BaseId.substring(7, BaseId.length)   // No need of chnage hear
               
               NextFldBaseId = parseFloat(NextFldBaseId) + 1
               NextFldBaseId = BaseId.substring(0, 7) + NextFldBaseId
               
               
               var NextFldCtrlId = '600' 
               var ExpMsg = 'Select Value For: Quality Risk Management'   
               document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId ).className = "HideRow";
               
               if (document.getElementById(BaseId + "_" + CtrlId).value== 'Major') {
               
                   if (document.getElementById(NextFldBaseId + "_" + NextFldCtrlId).value == "") {
                   document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId ).className = "MainTD";
                   ExpMessage = ExpMessage + ExpMsg + '#*#';
                   ExpCtrlID = (NextFldBaseId + "_" + NextFldCtrlId) + '#*#'
                   }
                }  
//                else if (document.getElementById(BaseId + "_" + CtrlId).value== 'Minor') 
//                {
//                  document.getElementById( NextFldBaseId + "_" + NextFldCtrlId ).value = "";
//                  document.getElementById( 'Value_' + NextFldBaseId + "_" + NextFldCtrlId ).className = "HideRow";
//                }
               var idStr = BaseId + '_' + CtrlId
               setExpMessage(ExpMessage, ExpCtrlID, idStr)
               
               
              
           }


//cLOSED


           // Category of Change - QRM Plan Decision
           function FUN_CC_QRM_ACTION_PLAN_DECISION(BaseId, CtrlId) {
           
           
               var ExpMessage = ""
               var ExpCtrlID = ""

               var NextFldBaseId = BaseId.substring(7, BaseId.length)   // No need of chnage hear

               NextFldBaseId = parseFloat(NextFldBaseId) + 1
               NextFldBaseId = BaseId.substring(0, 7) + NextFldBaseId

               //NextFldBaseId='E1_COL0213008003'
               var NextFldCtrlId = '600' // Hear Give Next Fld Ctrl Id
               var ExpMsg = 'Select Value For: Quality Risk Management'   // Hear Give Next Fld Exp Messahe

                document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "HideRow";
  
               if (document.getElementById(BaseId + "_" + CtrlId).value == 'Critical') {
                   //document.getElementById("BTN_" + NextFldBaseId).removeAttribute("disabled")
                   document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "MainTD";
                   if (document.getElementById(NextFldBaseId + "_" + NextFldCtrlId).value == "") {
                       ExpMessage = ExpMessage + ExpMsg + '#*#';
                       ExpCtrlID = (NextFldBaseId + "_" + NextFldCtrlId) + '#*#'
                   }
               }
               if (document.getElementById(BaseId + "_" + CtrlId).value == 'Major') {
                   //document.getElementById("BTN_" + NextFldBaseId).removeAttribute("disabled")
                   document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "MainTD";
                   if (document.getElementById(NextFldBaseId + "_" + NextFldCtrlId).value == "") {
                       ExpMessage = ExpMessage + ExpMsg + '#*#';
                       ExpCtrlID = (NextFldBaseId + "_" + NextFldCtrlId) + '#*#'
                   }
               } 
               
                /* 
               else if (document.getElementById(BaseId + "_" + CtrlId).value == 'Minor') {
               document.getElementById("BTN_" + NextFldBaseId).setAttribute("disabled", "disabled")
               document.getElementById(NextFldBaseId + "_" + NextFldCtrlId).setAttribute("value", "")
               document.getElementById("Value_" + NextFldBaseId + "_" + NextFldCtrlId).setAttribute("className", "HideRow")

               } */

               var idStr = BaseId + '_' + CtrlId
               setExpMessage(ExpMessage, ExpCtrlID, idStr)
               

           }


// Closed


           // eFORM Related RA - Action Plan Proposal Function

           function FUN_CC_RA_ACTION_PLAN_DECISION_ONLOAD(BaseId, CtrlId) {
               //document.getElementById(BaseId + "_" + CtrlId + "_0").checked = true
           }

           function FUN_CC_RA_ACTION_PLAN_DECISION(BaseId, CtrlId) {

               var ExpMessage = ""
               var ExpCtrlID = ""

               var NextFldBaseId = BaseId.substring(7, BaseId.length)   // No need of chnage hear
               NextFldBaseId = parseFloat(NextFldBaseId) + 1
               NextFldBaseId = BaseId.substring(0, 7) + NextFldBaseId

               var NextFldCtrlId = '603' // Hear Give Next Fld Ctrl Id
               var ExpMsg = 'Select Value For: Proposed Action Plan(s)'   // Hear Give Next Fld Exp Messahe

                  document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "HideRow";
                document.getElementById("BTN_" + NextFldBaseId).setAttribute("disabled", "disabled")
   
               if (document.getElementById(BaseId + "_" + CtrlId + "_0").checked == true) {
                   document.getElementById("BTN_" + NextFldBaseId).removeAttribute("disabled")
                   document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "MainTD";
                   if (document.getElementById(NextFldBaseId + "_" + NextFldCtrlId).value == "") {
                       ExpMessage = ExpMessage + ExpMsg + '#*#';
                       ExpCtrlID = (NextFldBaseId + "_" + NextFldCtrlId) + '#*#'
                   }
               }
               else //if (document.getElementById(BaseId + "_" + CtrlId + "_1").checked == true)
                {
                  
                   document.getElementById(NextFldBaseId + "_" + NextFldCtrlId).setAttribute("value", "")
                   document.getElementById("Value_" + NextFldBaseId + "_" + NextFldCtrlId).setAttribute("className", "HideRow")

               }

               var idStr = BaseId + '_' + CtrlId
               setExpMessage(ExpMessage, ExpCtrlID, idStr)
       
           }

           // Closed


           // eFORM Related QA - Action Plan Proposal Function

           function FUN_CC_QA_ACTION_PLAN_DECISION_ONLOAD(BaseId, CtrlId) {
               //document.getElementById(BaseId + "_" + CtrlId + "_0").checked = true
           }

           function FUN_CC_QA_ACTION_PLAN_DECISION(BaseId, CtrlId) {
           if(TransType<3){
               var ExpMessage = ""
               var ExpCtrlID = ""

               var NextFldBaseId = BaseId.substring(7, BaseId.length)   // No need of chnage hear
               NextFldBaseId = parseFloat(NextFldBaseId) + 1
               NextFldBaseId = BaseId.substring(0, 7) + NextFldBaseId

               var NextFldCtrlId = '606' // Hear Give Next Fld Ctrl Id
               var ExpMsg = 'Select Value For: Proposed Action Plan(s)'   // Hear Give Next Fld Exp Messahe

                document.getElementById("BTN_" + NextFldBaseId).setAttribute("disabled", "disabled")
                 document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "HideRow";
  
               if (document.getElementById(BaseId + "_" + CtrlId + "_0").checked == true) {
                   document.getElementById("BTN_" + NextFldBaseId).removeAttribute("disabled")
                   document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "MainTD";
                   if (document.getElementById(NextFldBaseId + "_" + NextFldCtrlId).value == "") {
                       ExpMessage = ExpMessage + ExpMsg + '#*#';
                       ExpCtrlID = (NextFldBaseId + "_" + NextFldCtrlId) + '#*#'
                   }
               }
               else //if (document.getElementById(BaseId + "_" + CtrlId + "_1").checked == true)
                {
                   
                   document.getElementById(NextFldBaseId + "_" + NextFldCtrlId).setAttribute("value", "")
                   document.getElementById("Value_" + NextFldBaseId + "_" + NextFldCtrlId).setAttribute("className", "HideRow")

               }

               var idStr = BaseId + '_' + CtrlId
               setExpMessage(ExpMessage, ExpCtrlID, idStr)
             }
           }

           // Closed

           // eForm related CAPA-QRM Decision

           function FUN_CAPA_QRM_ACTION_PLAN_DECISION_ONLOAD(BaseId, CtrlId) {
               //document.getElementById(BaseId + "_" + CtrlId + "_0").checked = true
           }

           function FUN_CAPA_QRM_ACTION_PLAN_DECISION(BaseId, CtrlId) {
           if(TransType<3){
               var ExpMessage = ""
               var ExpCtrlID = ""

               var NextFldBaseId = BaseId.substring(7, BaseId.length)   // No need of chnage hear
               NextFldBaseId = parseFloat(NextFldBaseId) + 1
               NextFldBaseId = BaseId.substring(0, 7) + NextFldBaseId

               var NextFldCtrlId = '21' // Hear Give Next Fld Ctrl Id
               var ExpMsg = 'Select Value For: Quality Risk Management'   // Hear Give Next Fld Exp Messahe

                document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "HideRow";
                document.getElementById("BTN_" + NextFldBaseId).setAttribute("disabled", "disabled")
   
               if (document.getElementById(BaseId + "_" + CtrlId + "_0").checked == true) {
                   document.getElementById("BTN_" + NextFldBaseId).removeAttribute("disabled")
                   document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "MainTD";
                   if (document.getElementById(NextFldBaseId + "_" + NextFldCtrlId).value == "") {
                       ExpMessage = ExpMessage + ExpMsg + '#*#';
                       ExpCtrlID = (NextFldBaseId + "_" + NextFldCtrlId) + '#*#'
                   }
               }
               else //if (document.getElementById(BaseId + "_" + CtrlId + "_1").checked == true) 
               {
                   document.getElementById(NextFldBaseId + "_" + NextFldCtrlId).setAttribute("value", "")
                   document.getElementById("Value_" + NextFldBaseId + "_" + NextFldCtrlId).setAttribute("className", "HideRow")
               }

               var idStr = BaseId + '_' + CtrlId
               setExpMessage(ExpMessage, ExpCtrlID, idStr)
              } 
           }

           // Closed


           //case 27:
           //function to mandatory the field 'other' when 'Origin of CAPA' is selected as 'others' at CAPA Login form

           function FUN_CAPA_ORIGINOFCAPA(BaseId, CtrlId) {
           
                UcodeDeptCheck()
                AddCutomValidator("Select Value For: Market", MarketIDArr[1], MarketIDArr[2]) // Market ID: FLD_7_12
                AddCutomValidator("Select Value For: Origin of CAPA", OriginofCAPARR[1], OriginofCAPARR[2]) // Change Related To ID: FLD_9_14

                document.getElementById("FLDLBL_" + OthersFldIdAry[1] + "_" + OthersFldIdAry[2]).className = "HideRow"
                 AddCutomValidator("", OthersFldIdAry[1], OthersFldIdAry[2])


               var CAPAOrignVal = document.getElementById( BaseId + "_" + CtrlId).value
               var CAPAOrignValAry = new Array()
               CAPAOrignValAry = CAPAOrignVal.split(";")
               
               var isOthers=0

                  for (i = 0; i < CAPAOrignValAry.length; i++) {
                      CAPAOrignValAry[i] = trim(CAPAOrignValAry[i])
                      
                      if (CAPAOrignValAry[i] == "Others") {
                          isOthers =1
                          document.getElementById("FLDLBL_" + OthersFldIdAry[1] + "_" + OthersFldIdAry[2]).className = "MainTd";
                          AddCutomValidator("Enter Value For: Others", OthersFldIdAry[1],OthersFldIdAry[2])
                      }
                  } 
               
               
            }
            

           //case 28:
           //function to mandatory the field 'Details' when 'Investigation and root cause finding' is selected as 'Yes' at CAPA Login form
           function FUN_CAPA_INV_ROOTCAUSE(BaseId, CtrlId) {
               var ExpMessage = ""
               var ExpCtrlID = ""


                var NextFldBaseId = DetailsTxtIdArr[1] // Hear Give Next Fld base Id
                var NextFldCtrlId = DetailsTxtIdArr[2] // Hear Give Next Fld Ctrl Id 
                var ExpMsg = 'Enter Value For: Details'   // Hear Give Next Fld Exp Messahe 

                document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "HideRow";

                if (document.getElementById(BaseId + "_" + CtrlId + "_0").checked == true) {
                    document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "MainTD";
                    if (document.getElementById(LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId).value == "") {
                    ExpMessage = ExpMessage + ExpMsg + '#*#';
                    ExpCtrlID = (LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId) + '#*#'
                    
                    }
                }
          
               var idStr = BaseId + '_' + CtrlId
               setExpMessage(ExpMessage, ExpCtrlID, idStr)
           }
                       
           
           // Closure of the functions
      
           // Commen Function To Set  Propoerties To Funciton 
            function SetPropertiedToControlsAtPageLoad(ScrType)
             {  
               var CusValFunIdLst =document.getElementById("CustomValidFunTxt").value.substring(1)
               var CusValFldIdLst =document.getElementById("CunstomValIdsTxt").value.substring(3)
               var CusValFunIdArr =new Array()
               var CusValFldIdArr =new Array()

               CusValFunIdArr=CusValFunIdLst.split(",")
               CusValFldIdArr=CusValFldIdLst.split("#*#")
              
               //var IsuLogId=document.getElementById("IssueLogIdTXt").value
               
               Fun_Check_BatchSelection(ScrType)
               
               for(var i=0;i<=CusValFunIdArr.length-1;i++)
               {
                    var CusValFldId=new Array()
                    CusValFldId=CusValFldIdArr[i].split(",")
                    
                    switch (parseInt(CusValFunIdArr[i]))
                    {
                       case 114: FUN_DI_EVENT_VALIDATION_ONLOAD(CusValFldId[0], CusValFldId[1])
                           break;
                       case 71: FUN_CC_CHANGERELATEDTO_ONLOAD(CusValFldId[0], CusValFldId[1])
                           break;
                      case 9: FUN_ISU_CA_ACTION_PLAN_DECISION(CusValFldId[0], CusValFldId[1])
                            break;
                            
                      case 10: FUN_ISU_PA_ACTION_PLAN_DECISION(CusValFldId[0], CusValFldId[1])
                            break;
                        case 61: FUN_EFORM_CA_ACTION_PLAN_DECISION(CusValFldId[0], CusValFldId[1])
                            break;
                        case 62: FUN_EFORM_PA_ACTION_PLAN_DECISION(CusValFldId[0], CusValFldId[1])
                            break;
                      case 63 :FUN_DEV_INV_ACTION_PLAN_DECISION(CusValFldId[0],CusValFldId[1])
                            break;
                    
                     
                     case 64: FUN_CCP_ISU_ACTION_PLAN_DECISION(CusValFldId[0], CusValFldId[1])
                        break;
                        
                     case 93: FUN_CCT_ISU_ACTION_PLAN_DECISION(CusValFldId[0], CusValFldId[1])
                        break;  
                         
                     case 103: FUN_CC_RA_ACTION_PLAN_DECISION(CusValFldId[0], CusValFldId[1])
                        break;
                                      
                      case 102: FUN_CC_QA_ACTION_PLAN_DECISION(CusValFldId[0], CusValFldId[1])
                            break;
                    
                      case 22: FUN_CAPA_QRM_ACTION_PLAN_DECISION(CusValFldId[0], CusValFldId[1])
                          break;
                      case 80: FUN_ISU_EDITATT_DECISION_ONLOAD(CusValFldId[0], CusValFldId[1])
                          break;
                      case 104: FUN_EFORM_OA_ACTION_PLAN_DECISION(CusValFldId[0], CusValFldId[1])
                          break;
                      case 94: FUN_ISU_DEV_OA_ACTION_PLAN_DECISION(CusValFldId[0], CusValFldId[1])
                          break;
                         case 37 : FUN_DEV_EFORM_OA_ACTION_PLAN_DECISION(CusValFldId[0], CusValFldId[1])
                         break;
                         
                    case 98 : FUN_ISU_DEV_PROBREASON_DECISION(CusValFldId[0], CusValFldId[1])
                    break;
                    
                     case 99 : FUN_ISU_DEV_CA_ACTION_PLAN_DECISION(CusValFldId[0], CusValFldId[1])
                    break;
                     case 100 : FUN_ISU_DEV_PA_ACTION_PLAN_DECISION(CusValFldId[0], CusValFldId[1])
                break;
                    
                    
                    
                    case 52 : FUN_EFORM_PRODUCT_DESELECTION(CusValFldId[0], CusValFldId[1])
                    break;
   case 53 : FUN_EFORM_EQUIPMENT_DESELECTION(CusValFldId[0], CusValFldId[1])
   break;
                
                    }
                    
                }
             }
             
   
             
             
            
                          
                  
        // function to chnage Issue Status At CAPA  On Clisk
      function FUN_CAPA_QA_DECISION(BaseId, CtrlId) {
      
          var ExpMessage=""
          var ExpCtrlID=""
          var NextFldId=BaseId.substring(7,BaseId.length)
          NextFldId = parseFloat(NextFldId) + 1  
          
            document.getElementById("FLDLBL_" + BaseId.substring(0,7) + NextFldId + "_11").className = "HideRow";
  
  
            if (document.getElementById(BaseId + "_" + CtrlId + "_1").checked==true)
            {
               document.getElementById("FLDLBL_" + BaseId.substring(0,7) + NextFldId + "_11").className = "MainTD";
                if (document.getElementById(BaseId.substring(0,7) + NextFldId + "_11").value=="")
                {  ExpMessage= ExpMessage + "Enter  Remark(s) / Reason(s) If Rejected" + '#*#' ;
                   ExpCtrlID=ExpCtrlID + (BaseId.substring(0,7) + NextFldId + "_11") + '#*#' 
                }
            }   
            
            var idStr=BaseId + '_' + CtrlId
            setExpMessage(ExpMessage,ExpCtrlID,idStr)
                     
        }


     // *********End of Lupin  Change  Control Process *************//
  
                
       //*********  Common  Function To Set Validation  Messages  ***********
           
        
        function setExpMessage(ExpMesage,ExpCtrlID,Idstr)
        {
            var Count = 0;
            // if (ExpMesage == "")
          //  alert("ExpMesage =" + ExpMesage + "   ExpCtrlID=" + ExpCtrlID + "    Idstr=  " + Idstr + "  ExpMsgIdArr=" + ExpMsgIdArr.join("XX"))
             if (ExpMesage == "")
                {
                       for(var i=0;i<=ExpMsgIdArr.length-1;i++)
                        {
                           if (ExpMsgIdArr[i] == Idstr )
                               ExpMessageArr[i]=ExpMesage
                               EXpControlId[i]=ExpCtrlID
                        }
                }
            else
            {
                    for(var i=0;i<=ExpMsgIdArr.length-1;i++) {
                      //  alert((ExpMsgIdArr[i] == Idstr) + "      " + Idstr)
                       if (ExpMsgIdArr[i] == Idstr )
                       {
                           Count=1;
                           ExpMessageArr[i]=ExpMesage
                           EXpControlId[i]=ExpCtrlID
                        }   
                    }
                   // alert(Count)
                    if (Count==0)
                    {
                        ExpMsgIdArr.push(Idstr)
                        ExpMessageArr.push(ExpMesage)
                        EXpControlId.push(ExpCtrlID)
                    }
            }
        }
          
          
              //*********  Common  Function To Set Validation  Messages  ***********

 
 
                function AjaxCheckUserExisInGrp(Groupname,Rowcnt)
                   {
                     var recary = new Array(); 
                      
                        var xmlhttp;
                        try
                        { 
                            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                        }
                        catch(ex)
                        {
                            try 
                            {
                                xmlhttp=new ActiveXObject("MSxml2.XMLHTTP");
                            }
                            catch(ex)
                            {
                                try
                                {
                                    xmlhttp=new XmlHttpRequest();
                                }
                                catch(ex)
                                {
                                    alert("please update the webbrowser");
                                }
                            }
                        }
                        xmlhttp.onreadystatechange=function()
                        {
                            if(xmlhttp.readystate==4)
                            {
                                var Time="abc"
                                Time=xmlhttp.ResponseText
                                UserStatusvalue(Time,Rowcnt)
                                xmlhttp =null;
                            }
                        }
                         var url="../IssueLogin/CheckuserExisInGroup.aspx?Groupname=" +  Groupname 
                        xmlhttp.open("POST",url,true);
                        xmlhttp.send(null);
                    }
                
                
                  
        
         //Read Department
             
              
             function QAMS_ReadDepartMent2(IssueLogId,Rowcnt)
             {
               var recary = new Array(); 
              
          
                    var xmlhttp;
                    try
                    {
                        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                    }
                    catch(ex)
                    {
                        try 
                        {
                            xmlhttp=new ActiveXObject("MSxml2.XMLHTTP");
                        }
                        catch(ex)
                        {
                            try
                            {
                                xmlhttp=new XmlHttpRequest();
                            }
                            catch(ex)
                            {
                                alert("please update the webbrowser");
                            }
                        }
                    }
                    
                    xmlhttp.onreadystatechange=function()
                    {
                        if(xmlhttp.readystate==4)
                        {
                            var RtnStr="abc"
                            var ReturnArr =new Array()
                            RtnStr=xmlhttp.ResponseText
                            SetInchargegroup(RtnStr,Rowcnt)
                            
                        }
                    } 
                    var url="../PrsWorkFlow/ReadIssueDepartment_Ajax.aspx?IsuLoginID=" + IssueLogId + "&FldName=Department"
                    xmlhttp.open("POST",url,true);
                    xmlhttp.send(null);
             }  
             
       //function to check user existance in group at issuelogin approval
        function AjaxCheckUserExisInGroup(IssueLogId,RowCnt,DeptName)
        {
            var recary = new Array(); 
                      
                        var xmlhttp;
                        try
                        { 
                            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                        }
                        catch(ex)
                        {
                            try 
                            {
                                xmlhttp=new ActiveXObject("MSxml2.XMLHTTP");
                            }
                            catch(ex)
                            {
                                try
                                {
                                    xmlhttp=new XmlHttpRequest();
                                }
                                catch(ex)
                                {
                                    alert("please update the webbrowser");
                                }
                            }
                        }
                       xmlhttp.onreadystatechange=function()
                        {
                            if(xmlhttp.readystate==4)
                            {
                                var Time="abc"
                                Time=xmlhttp.ResponseText
                                UserStatusvalue(Time,RowCnt)
        
                                xmlhttp =null;
                            }
                        }
                         var url="../PrsWorkFlow/CheckuserExisInGroup.aspx?IsuLoginID=" + IssueLogId + "&FldName=" + DeptName
                        xmlhttp.open("POST",url,true);
                        xmlhttp.send(null);
        
        }     
        
        // Function to Check user Authenticaton At CAPA Work Allocation 
        
         function  QAMS_checkuserAuthoentication(IssueFormId,ActionPlanId,RowCnt)
          {
            var recary = new Array(); 
              
          
                    var xmlhttp;
                    try
                    {
                        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                    }
                    catch(ex)
                    {
                        try 
                        {
                            xmlhttp=new ActiveXObject("MSxml2.XMLHTTP");
                        }
                        catch(ex)
                        {
                            try
                            {
                                xmlhttp=new XmlHttpRequest();
                            }
                            catch(ex)
                            {
                                alert("please update the webbrowser");
                            }
                        }
                    }
                    
                    xmlhttp.onreadystatechange=function()
                    {
                        if(xmlhttp.readystate==4)
                        {
                            var RtnStr="abc"
                            var ReturnArr =new Array()
                            RtnStr=xmlhttp.ResponseText
                            RaiseWrkItems(RtnStr,RowCnt)
                            
                        }
                    }  
                    var url="../PrsWorkFlow/CheckPlanWrkInitUserAuth_Ajax.aspx?IssueFormId=" + IssueFormId + "&ActionPlanId=" + ActionPlanId 
                    xmlhttp.open("POST",url,true);
                    xmlhttp.send(null);
          }
          
           //Read Isu Login Department
              
             function QAMS_ReadDepartMent(IssueLogId,Rowcnt)
             {
               var recary = new Array(); 
              
          
                    var xmlhttp;
                    try
                    {
                        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                    }
                    catch(ex)
                    {
                        try 
                        {
                            xmlhttp=new ActiveXObject("MSxml2.XMLHTTP");
                        }
                        catch(ex)
                        {
                            try
                            {
                                xmlhttp=new XmlHttpRequest();
                            }
                            catch(ex)
                            {
                                alert("please update the webbrowser");
                            }
                        }
                    }
                    
                    xmlhttp.onreadystatechange=function()
                    {
                        if(xmlhttp.readystate==4)
                        {
                            var RtnStr="abc"
                            var ReturnArr =new Array()
                            RtnStr=xmlhttp.ResponseText
                            SetInchargegroup(RtnStr,Rowcnt)
                            
                        }
                    }  
                    var url="../PrsWorkFlow/ReadIssueDepartment_Ajax.aspx?IsuLoginID=" + IssueLogId + "&FldName=Department"
                    xmlhttp.open("POST",url,true);
                    xmlhttp.send(null);
             }
             
             
             //to change the status of issue
//             if Isustatus=1 CAPA Initiation
//             Isustatus=2 Issue Closure
             
              function AjaxChangeIssueStatus(IssueId,WrkAulId,Isustatus)
               {
                 var recary = new Array(); 
                  
                    var xmlhttp;
                    try
                    { 
                        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                    }
                    catch(ex)
                    {
                        try 
                        {
                            xmlhttp=new ActiveXObject("MSxml2.XMLHTTP");
                        }
                        catch(ex)
                        {
                            try
                            {
                                xmlhttp=new XmlHttpRequest();
                            }
                            catch(ex)
                            {
                                alert("please update the webbrowser");
                            }
                        }
                    }
                    xmlhttp.onreadystatechange=function()
                    {
                        if(xmlhttp.readystate==4)
                        {
                            var Time = "abc"

                            Time = xmlhttp.ResponseText
                            //alert(Time)
                            xmlhttp =null;
                        }
                    }
                    
                    //@Isustatus =2  Issue Root to Issue Closure
                    //@Isustatus= 1 Isseu Root To CAPA
                    //@Isustatus =4  Diplay At Plan  Accaptance List
                     var url="../TestEFormExecution/ChangeIsuStatus.aspx?IssueId=" +  IssueId + "&WrkAulId=" + WrkAulId + "&Isustatus=" + Isustatus
                 
                 //alert(url)
                    xmlhttp.open("POST",url,true);
                    xmlhttp.send(null);
                }
                
             
             
          // **** Custom Field Validations for EForm at OnSubmit******//

               
                function Fnsubmit1(TransType,SrcType)
                {
                    //To check the Initiating Department Value at Issue Login Modification and Re-initiation
                    if((TransType==2||TransType==3||TransType==4) && SrcType==1)
                    {
                        var IsulogId=document.getElementById("IsuLogIdTxt").value;
                      
                        AjaxReadInitDeptValue(IsulogId,TransType,SrcType);
                            
                    }                                   
                    //To restrict the issue closure initiation if Effectiveness/Monitoring Plans schedule is pending for any plans
                    else if(TransType==1 && SrcType==2)
                    {
                        var IssueLogId=document.getElementById("IssLogId").value;
                        AjaxReadEMPlanScheduleSts(IssueLogId,TransType,SrcType)                       
                    
                    }
                    else
                    {
                        Fnsubmit(TransType,SrcType);                    
                    }                                   
                }
                
                function SetDeptVal(DeptVal,TransType,SrcType)
                {
                
                    if(document.getElementById(DeptFldID))
                    {
                    var obj1 = document.getElementById(DeptFldID).value;
                    
                    if (obj1!= DeptVal && DeptVal!=0) 
                    {
                        alert("Initiating Department Value Should Not Be Changed");
                        document.getElementById("FLD_" + BaseId + "_" + ControlId).value=DeptVal;                         
                    }    
                    }
                    Fnsubmit(TransType,SrcType);
                }
                
                function SetEFMStatus(Status,TransType,SrcType)
                {
                    if (Status==1)
                    {
                        alert("Effectiveness / Monitoring Plans Schedule Is Pending")
                    }
                    else
                    {
                        Fnsubmit(TransType,SrcType); 
                    }
                
                }
                
                
                function Fnsubmit(TransType,SrcType) { ///
                    // alert("Fnsubmit")
                                  
                         CustValidations(SrcType)
                      // var ExcpMsg = CustValidations();
                         if (!Page_ClientValidate()) {
                             return;
                         }
                      // alert('abcd')
                       // if(ExcpMsg!="")
                       // {
                       //     alert(ExcpMsg.substring(0,ExcpMsg.length-1));
                       //     return;
                      //  }
                       // else {
                         
                            if(typeof(fnCallESign) != "undefined")
                            {
                                if(IsValidFlag ==false)
                                {
                                    fnCallESign(TransType)
                                    return;
                                }
                            }
                          document.getElementById ("btnConfirm").click();
                       // }
                  
                }
                // Function To Change DB level Flag At Final Submition OF  Form based  on decision 
                function IssueFinalSubmit() {

                    var CusValFunIdLst = document.getElementById("CustomValidFunTxt").value.substring(1)
                    var CusValFldIdLst = document.getElementById("CunstomValIdsTxt").value.substring(3)
                    var CusValFunIdArr = new Array()
                    var CusValFldIdArr = new Array()
                    var IsuLogId = 0

                    CusValFunIdArr = CusValFunIdLst.split(",")
                    CusValFldIdArr = CusValFldIdLst.split("#*#")

                    if (document.getElementById("WorkItemIdTxt") != null) {
                        var IsuLogId = document.getElementById("WorkItemIdTxt").value
                    }

                    for (var i = 0; i <= CusValFunIdArr.length - 1; i++) {
                        var CusValFldId = new Array()
                        CusValFldId = CusValFldIdArr[i].split(",")

                        // QAMS_SpecialValidations(CusValFunIdArr[i], CusValFldId[0], CusValFldId[1], IsuLogId
                        switch (parseInt(CusValFunIdArr[i])) {

                            //                      case 22 : FUN_MC_CLOSURE_DECISION_ON_SUBMIT(CusValFldId[0], CusValFldId[1],IsuLogId) 
                            //                      break; 
                            //                  
                            //                      case 4 : FUN_ISU_AWR_DECISION_ON_SUBMIT(CusValFldId[0], CusValFldId[1],IsuLogId) 
                            //                      break; 
                        }
                    }

                }
            
            // Function To Change DB level Flad At Final Submition OF  Form based  on decision          
            function EFormFinalSubmit()

            {
                var CusValFunIdLst =document.getElementById("CustomValidFunTxt").value.substring(1)
                var CusValFldIdLst =document.getElementById("CunstomValIdsTxt").value.substring(3)
                var CusValFunIdArr =new Array()
                var CusValFldIdArr =new Array()

                CusValFunIdArr=CusValFunIdLst.split(",")
                CusValFldIdArr=CusValFldIdLst.split("#*#")    

                var IsuLogId=document.getElementById("IssueLogIdTXt").value
                for(var i=0;i<=CusValFunIdArr.length-1;i++)
                {
                var CusValFldId=new Array()
                CusValFldId = CusValFldIdArr[i].split(",")
      
               // QAMS_SpecialValidations(CusValFunIdArr[i], CusValFldId[0], CusValFldId[1], IsuLogId
                  switch (parseInt(CusValFunIdArr[i]))
                    {
                      
                        case 69:  FUN_CC_RA_DECISION_ON_SUBMIT(CusValFldId[0],CusValFldId[1],IsuLogId)    
                                 break;
                                 
                        case 57 :FUN_DEV_CAPA_DEPENDENCY_ON_SUBMIT(CusValFldId[0],CusValFldId[1],IsuLogId)
                            break;

                        case 70: FUN_CC_QA_DECISION_ON_SUBMIT(CusValFldId[0], CusValFldId[1], IsuLogId)
                            break;

                        case 26: FUN_CAPA_QA_DECISION_ON_SUBMIT(CusValFldId[0], CusValFldId[1], IsuLogId)
                            break;
                            
                            case 52 : FUN_EFORM_PRODUCT_DESELECTION_SUBMIT(CusValFldId[0], CusValFldId[1],IsuLogId)
        break;
    case 53 : FUN_EFORM_EQUIPMENT_DESELECTION_SUBMIT(CusValFldId[0], CusValFldId[1],IsuLogId)
        break;
                           
                    }
                }  

            }

            function CustValidations(SrcType)
            {
                    var ExpMsg=""

                     Fun_Check_BatchSelection_SUBMIT(SrcType)
                    var CusValFunIdLst =document.getElementById("CustomValidFunTxt").value.substring(1)
                    var CusValFldIdLst =document.getElementById("CunstomValIdsTxt").value.substring(3)
                    var CusValFunIdArr =new Array()
                    var CusValFldIdArr =new Array()

                    CusValFunIdArr=CusValFunIdLst.split(",")
                    CusValFldIdArr = CusValFldIdLst.split("#*#")

                    var CtrlPrefix = LogFldPrefix
                    if (SrcType == '20') { CtrlPrefix='' }

                    for(var i=0;i<=CusValFunIdArr.length-1;i++)
                    {
                        var CusValFldId=new Array()
                        CusValFldId = CusValFldIdArr[i].split(",")
                        //alert(CusValFunIdArr[i] + ' ' + LogFldPrefix + CusValFldId[0] + ' ' + CusValFldId[1])
                        QAMS_SpecialValidations(CusValFunIdArr[i], CtrlPrefix + CusValFldId[0], CusValFldId[1], 0)
                    }

                   // return ExpMsg;
            }  	       
            
                 // Function Check AT Final Submition To Diaply Validation 
                function FinalValidationCheck(src,args)
                {
                    args.IsValid=true;
                    Page_IsValid=true;
                    var ErrerString=""

                 //   alert("EXpControlId=" + EXpControlId.join("AAA") + "   EXpControlId=" + EXpControlId.join("BBB") + "   ExpMessageArr=" + ExpMessageArr.join("CCCC")) 
                    for(var i=0;i<=EXpControlId.length-1;i++) //ExpMessageArr
                    {
                       if ( ExpMessageArr[i]!="") 
                        {
                          var CtrlIDArr=new Array()
                          var ExpMsgArr=new Array()
                          
                          CtrlIDArr=EXpControlId[i].split("#*#")
                          ExpMsgArr=ExpMessageArr[i].split("#*#")
                          
                          for(var j=0;j<=CtrlIDArr.length-1;j++)
                          {
                              //if (CtrlIDArr[j] != "")
                              if (ExpMsgArr[j] != "") ErrerString = ErrerString + ExpMsgArr[j] + "\n -"
                               
                          /*  {
                               var obj= document.getElementById("DT_" + CtrlIDArr[j])
                               if (obj!= null)
                               {
                                       var DataType= obj.value
                                       
                                       if (DataType==4)
                                       {
                                         var ItemsLen=document.getElementById(CtrlIDArr[j]).cells.length 
                                         var CheckFld
                                         for( var k=0;k<ItemsLen;k++)
                                         {
                                           if (document.getElementById(CtrlIDArr[j]+ "_" + k).checked == true)CheckFld=true
                                         }
                                         if(CheckFld!=true)ErrerString= ErrerString + ExpMsgArr[j] + "\n -" 
                                       }
                                       else if (DataType==8)
                                       {
                                         if (document.getElementById(CtrlIDArr[j] + ":CalDateVal").value =="")
                                            ErrerString= ErrerString + ExpMsgArr[j] + "\n -" 
                                       }
                                       else
                                       {
                                           // if (document.getElementById(CtrlIDArr[j]).value =="")
                                           if(ExpMsgArr[j]!="")
                                            ErrerString= ErrerString + ExpMsgArr[j] + "\n -" 
                                       }  
                                  }     
                            } */
                          }
                        }
                    }
                    //  alert(ErrerString)
                //  alert(ErrerString)
                     if(ErrerString!= "")
                     {
                      src.errormessage=ErrerString.substring(0,ErrerString.length-3)
                      args.IsValid=false;
                      Page_IsValid=false;
                     } 
                 }   
                 
             
             
              // ****End Of Custom Field Validations for EForm at OnSubmit******//
              

        
             // Custom Validation Function For Plan Proposal
             
              function Plan_Proposal()
              {
                        
                    var recary = new Array(); 
                    var xmlhttp;
                    
                    try
                    {
                        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                    }
                    catch(ex)
                    {
                        try 
                        {
                            xmlhttp=new ActiveXObject("MSxml2.XMLHTTP");
                        }
                        catch(ex)
                        {
                            try
                            {
                                xmlhttp=new XmlHttpRequest();
                            }
                            catch(ex)
                            {
                                alert("please update the webbrowser");
                            }
                        }
                    }
                    
                    xmlhttp.onreadystatechange=function()
                    {
                        if(xmlhttp.readystate==4)
                        {
                            var RtnStr="abc"
                            var ReturnArr =new Array()
                            RtnStr=xmlhttp.ResponseText
                            SetInchargegroup(RtnStr,Rowcnt)
                            
                        }
                    }  
                    
                    // These two field values are Mandatory  for any Request Type , bcz for work item plan we are saving issue reference 
                    var IssuedId =0
                    var IssuAulId=0
                    
                    // This field values are mandatry at RequestType=2
                    var FissId=0
                    var FissAulId=0
                    
                    // RequestType =1  Only Issue Login Plan Proposals
                    // RequestType =2  Only Work Items Plan Proposals
                    // RequestType =3   Both Issue And Work Item Plan proposals
                    var RequestType=0
                    
                    var url="../AutoWorkAllocation/WorkAllocationAndMailCFG.aspx?IssuedId=" + IssuedId +"&IssuAulId=" + IssuAulId +"&FissId="+ FissId +"&FissAulId=" + FissAulId
                    xmlhttp.open("POST",url,true);
                    xmlhttp.send(null);
                    
        }


     /* case 24: function to enable/disable 'Reference Permanent Change Control' field
        based on 'Change Control Regularization' at Temporary Change Control Closure Initiation
        function FUN_CC_REGULARIZATION(BaseId, CtrlId) {

           
            var SelectedVal = document.getElementById(BaseId + "_" + CtrlId).value

           
            // document.getElementById("FLDLBL_" + 17 + "_" + 11).className = "HideRow"  //Batch
            //  AddCutomValidator("", 2, 1)

            if (SelectedVal == "Regularized") {
               AddCutomValidator("Enter Value For: Reference Permanent Change Control", 104, 11)
               document.getElementById("FLDLBL_" + 104 + "_" + 11).className = "MainTD"

            }
            
            if (SelectedVal == "Partially Regularized") {
                AddCutomValidator("Enter Value For: Reference Permanent Change Control", 104, 11)
                document.getElementById("FLDLBL_" + 104 + "_" + 11).className = "MainTD"

            }
            if (SelectedVal == "Not Regularized") {
                // AddCutomValidator("Reference Permanent Change Control", 2, 1)
                document.getElementById("FLDLBL_" + 104 + "_" + 11).className = "HideRow"
                document.getElementById("FLDLBL_" + 104 + "_" + 11).setAttribute('disabled', 'disabled')

            }


        }*/


        /* case 24: function to enable/disable 'Reference Permanent Change Control' field
        based on 'Change Control Regularization' at Temporary Change Control Closure Initiation*/
        
        
        function FUN_CCT_REGULARIZATION(BaseId, CtrlId) {

            var ExpMessage = ""
            var ExpCtrlID = ""
            
            var SelectedVal = document.getElementById(BaseId + "_" + CtrlId).value

            
            var NextFldBaseId = RefCapORCCNoArr[1] // Hear Give Next Fld base Id
            var NextFldCtrlId = RefCapORCCNoArr[2] // Hear Give Next Fld Ctrl Id 
            var ExpMsg = 'Select Value For: Reference CAPA / Change Control No. (if any)'   // Hear Give Next Fld Exp Messahe 

            document.getElementById("BTN_" + LogFldPrefix + NextFldBaseId).setAttribute("disabled", "disabled")
            document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "HideRow";
            
            if (SelectedVal == "Regularized" || SelectedVal == "Partially Regularized" )
             {
                document.getElementById("BTN_" + LogFldPrefix + NextFldBaseId).removeAttribute("disabled");
                document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "MainTD";

                if (document.getElementById(LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId).value == "")
                 {
                        ExpMessage = ExpMessage + ExpMsg + '#*#';
                        ExpCtrlID = (LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId) + '#*#'
                }
            }
         else if (SelectedVal == "Not Regularized") {
            document.getElementById("Value_" + LogFldPrefix +  NextFldBaseId + "_" + NextFldCtrlId).className = "HideRow";
            document.getElementById(LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId).value = ""      

            }
            
            var idStr = BaseId + '_' + CtrlId
            setExpMessage(ExpMessage, ExpCtrlID, idStr)

              
            


        }


        // Case 31 : Editable Attachment Decision

        function FUN_ISU_EDITATT_DECISION_ONLOAD(BaseId, CtrlId) {
            //document.getElementById(LogFldPrefix + BaseId + "_" + CtrlId + "_0").checked = true
            //FUN_ISU_CA_ACTION_PLAN_DECISION(LogFldPrefix + BaseId, CtrlId)
        }


    


        //Closed
        //calculation of Issue closure date at Issuelogin Registration Initiation

        function FN_SET_ISSUE_TARGET_DATE_ONLOAD() {

   
            if (LoginTransType == '1') {

                AjaxSetTargetDate(FormTypeid, 0, 20, "LoadingClsDate")
            }
           else if  ((LoginTransType == '2') ||(LoginTransType == '3')) {
             AjaxSetTargetDate(LoginAulid, 0, 25, "LoadingClsDate")
            }


        }

        function LoadingClsDate(duration) {debugger
            var baseID = CloserDateFldIdAry[1];  //TargetDate Ids
            var controlID = CloserDateFldIdAry[2]; //TargetDate Ids

            //alert(duration)
            var dat = new Date();
            var display_date_cls = document.getElementById("FLD_" + baseID + "_" + controlID + "_CalDateDisplay");  //$("#FLD_" + baseID + "_" + controlID + "_CalDateDisplay")[0]
            if (document.getElementById("FLD_" + baseID + "_" + controlID + "_CalDateVal")) 
            {
                var input_date_cls = document.getElementById("FLD_" + baseID + "_" + controlID + "_CalDateVal");
//                input_date_cls.nextSibling.style.display = 'none'
            }
           // alert(duration)
           dat = dat.addDays(duration);
            
           // alert(dat)
            //alert(dat.addDays(duration));
            var m = dat.getMonth() + 1;
 
           input_date_cls.value = GetLocalizedDate(m, dat.getDate(), dat.getFullYear(), display_date_cls);
           LoadLoginSettings() 
        }

        Date.prototype.addDays = function(days) {
            var dat = new Date(this.valueOf());
            dat.setDate(dat.getDate() + days);
            return dat;
        }

        function LoadLoginSettings() {debugger
            var input_date_cls = document.getElementById("FLD_" + CloserDateFldIdAry[1] + "_" + CloserDateFldIdAry[2] + "_CalDateVal");
//            input_date_cls.nextSibling.style.display = 'none'
            //document.getElementById("FLD_" + baseID + "_" + controlID + "_CalDateBtn").style.display = "none";
            //$("#FLD_" + baseID + "_" + controlID + "_CalDateBtn").css('display','none');
            var DepUqObj = document.getElementById(Ucodelevel1)
           
            if (DepUqObj != null) {
                
                var InitDeptObj = document.getElementById(InitDepartFldId);
                var myindex = InitDeptObj.selectedIndex;
                var InitDeptName = InitDeptObj.options[myindex].text;
                var DeptCount = parseInt(DepUqObj.options.length)
                var InitDeptValue = InitDeptObj.options[myindex].value;
                for (j = 0; j <= DeptCount - 1; j++) {
                    if (InitDeptValue != '') {
                        var UCdoeValue =''
                        UCdoeValue =DepUqObj.options[j].text  + '(' + DepUqObj.options[j].value + ')'
                        if (InitDeptName == UCdoeValue) {
                            DepUqObj.selectedIndex = j;
                            //alert(DepUqObj.options[d].selected);
                            DepUqObj.disabled = true;
                            funSetCode();

                        } // if
                    } // if
                } //for

            }

            var SOPObj = document.getElementById(SOPObjRadioBtnID)
            if (SOPObj != null) {
                // SOPObj.attachEvent('onclick', FUN_ISU_EDITATT_DECISION)  'FLD_CTLID,BASE ID  as arguments
                SOPObj.onclick = function() { FUN_ISU_EDITATT_DECISION(SOPObjRadioBtnIDAry[0] + '_' + SOPObjRadioBtnIDAry[1], SOPObjRadioBtnIDAry[2]); };
                FUN_ISU_EDITATT_DECISION(SOPObjRadioBtnIDAry[0] + '_' + SOPObjRadioBtnIDAry[1],  SOPObjRadioBtnIDAry[2])
            }
            
            
            // validatiopn For  Reference Filed at Page  Load 

            var RefObj = document.getElementById(ReferenceBtnID)
            if (RefObj != null) {
                // RefObj.attachEvent('onclick', FUN_ISU_REFERENCE_DECISION)  'FLD_CTLID,BASE ID  as arguments
                RefObj.onclick = function() { FUN_ISU_REFERENCE_DECISION(ReferenceObjRadioBtnIDAry[0] + '_' + ReferenceObjRadioBtnIDAry[1], ReferenceObjRadioBtnIDAry[2]); };
                FUN_ISU_REFERENCE_DECISION(ReferenceObjRadioBtnIDAry[0] + '_' + ReferenceObjRadioBtnIDAry[1],  ReferenceObjRadioBtnIDAry[2])
            }
            
            
//            // Code For Auto selection Of Location 
//            var LocationDDl=Ucodelevel0
            
            
         

        }
        
        
        function FUN_ISU_SECTION_SELECTION(BaseId, CtrlId)
        {
          var Locationobj = document.getElementById(Ucodelevel0)
          var Sectionobj=document.getElementById(SectionDDlID) 
          
          var  AvilabelSections=''
          var ExpMessage = ""
          var ExpCtrlID = ""
          var AvilableSections=''
          var Flag=0
          var LocationName=''
          
          var Ucode= document.getElementById("CodeTxt").value
          Ucode=Ucode.replace('PROV-','')
                    var UcodeArr= new Array()
          UcodeArr=Ucode.split('-')
          
          if  (Sectionobj != null) 
            {
               //var selIndexosLoc = Locationobj.selectedIndex
               //var LocationCode = Locationobj.options(selIndexosLoc).value
               //var LocationName = Locationobj.options(selIndexosLoc).text
               
               var LocationCode=UcodeArr[1]
               var selIndexosSec = Sectionobj.selectedIndex
               var Section = Sectionobj.options(selIndexosSec).value
               if (Section != "") {

                if (LocationCode=='AN') { AvilableSections='API';LocationName='Ankleshwer' }
                if (LocationCode=='AU') { AvilableSections='Formulation' ;LocationName='Aurangabad' }
                if (LocationCode=='DA') { AvilableSections='API' ;LocationName='Dabhasa' }
                if (LocationCode=='GO') { AvilableSections='Formulation'  ;LocationName='Goa'}
                if (LocationCode=='IN') { AvilableSections='API#*#Formulation#*#API & Formulation'  ;LocationName='Indore'}
                if (LocationCode=='JA') { AvilableSections='Formulation' ;LocationName='Jammu' }
                if (LocationCode=='MA') { AvilableSections='API#*#Formulation#*#API & Formulation' ;LocationName='Mandideep' }
                if (LocationCode=='NA') { AvilableSections='Formulation'  ;LocationName='Nagpur'}
                if (LocationCode=='PU') { AvilableSections='API#*#Formulation#*#API & Formulation' ;LocationName='Pune' }
                if (LocationCode=='TA') { AvilableSections='API'  ;LocationName='Tarapur' }
                if (LocationCode=='HO') { AvilableSections='API#*#Formulation#*#API & Formulation'  ;LocationName='HO'}
                


               var ExpMsg = 'Selected Division Does Not Exist In ' + LocationName + ' Location'
               
               
               
               // If More Plants Are there Add those Plants Hear 
               //if (LocationCode='XXXX') { AvilableSections='XXX#*#YYYY' }
               
                                           
                var AvilableSectionsArr= new Array();
                AvilableSectionsArr = AvilableSections.split('#*#');
                for (var i=0;i<AvilableSectionsArr.length ;i++)
                 {
                   if (AvilableSectionsArr[i]==Section ) {  Flag=1; } 
                 }
                 
                if (Flag==0)
                 {
                  ExpMessage = ExpMessage + ExpMsg + '#*#';
                  ExpCtrlID = (LogFldPrefix + BaseId + "_" + CtrlId) + '#*#'
                 }
                } 
                 
               
                var idStr = SectionDDlID
                setExpMessage(ExpMessage, ExpCtrlID, idStr)
          }
          
        }
        
        
       
        //Ajax function

        function AjaxSetTargetDate(IssueId, PlanID, Isustatus, fnLoadingClsDateName) {
            var recary = new Array();
            var Time = "abc"


            var xmlhttp;
            try {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (ex) {
                try {
                    xmlhttp = new ActiveXObject("MSxml2.XMLHTTP");
                }
                catch (ex) {
                    try {
                        xmlhttp = new XmlHttpRequest();
                    }
                    catch (ex) {
                        alert("please update the webbrowser");
                    }
                }
            }
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readystate == 4) {
                   // 

                    Time = xmlhttp.ResponseText
                    //alert(Time) 
                    xmlhttp = null;
                    setTimeout(fnLoadingClsDateName + "(" + Time + ")", 0)
                    //                            return Time;

                }
            }

            //@Isustatus =2  Issue Root to Issue Closure
            //@Isustatus= 1 Isseu Root To CAPA
            //@Isustatus =4  Diplay At Plan  Accaptance List
            var url = "../TestEFormExecution/ChangeIsuStatus.aspx?IssueId=" + IssueId + "&WrkAulId=" + 0 + "&Isustatus=" + Isustatus + "&PlanID=" + PlanID

            //alert(url)
            xmlhttp.open("POST", url, true);
            xmlhttp.send(null);
        }

        function AjaxReadPlanStatus(IssueId, PlanID, Isustatus, returnfunction) {
            var recary = new Array();
            var Time = "abc"


            var xmlhttp;
            try {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (ex) {
                try {
                    xmlhttp = new ActiveXObject("MSxml2.XMLHTTP");
                }
                catch (ex) {
                    try {
                        xmlhttp = new XmlHttpRequest();
                    }
                    catch (ex) {
                        alert("please update the webbrowser");
                    }
                }
            }
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readystate == 4) {
                   // 

                    Time = xmlhttp.ResponseText
                    //alert(Time) 
                    xmlhttp = null;
                    setTimeout(returnfunction + "(" + Time + ")", 0)
                    //                            return Time;

                }
            }

            //@Isustatus =2  Issue Root to Issue Closure
            //@Isustatus= 1 Isseu Root To CAPA
            //@Isustatus =4  Diplay At Plan  Accaptance List
            var url = "../TestEFormExecution/ChangeIsuStatus.aspx?IssueId=" + IssueId + "&WrkAulId=" + 0 + "&Isustatus=" + Isustatus + "&PlanID=" + PlanID

            //alert(url)
            xmlhttp.open("POST", url, true);
            xmlhttp.send(null);
        }




        ////////////////////////////////////////////////Read  QRM  Investigation  status////////////////////////////////
        function AjaxReadQRMPlanStatus(IssueId, PlanID, Isustatus, returnfunction, returnParams) {
            var recary = new Array();
            var Time = "abc";


            var xmlhttp;
            try {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (ex) {
                try {
                    xmlhttp = new ActiveXObject("MSxml2.XMLHTTP");
                }
                catch (ex) {
                    try {
                        xmlhttp = new XmlHttpRequest();
                    }
                    catch (ex) {
                        alert("please update the webbrowser");
                    }
                }
            }
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readystate == 4) {


                    Time = xmlhttp.ResponseText
                    xmlhttp = null;

                    // "returnParams" is an optional parameter 

                    if (returnParams == undefined) {
                        setTimeout(returnfunction + "(" + Time + ")", 0)

                    }
                    else
                    { setTimeout(returnfunction + "(" + Time + "," + "'" + returnParams + "')", 0) }


                }
            }

            //@Isustatus =2  Issue Root to Issue Closure
            //@Isustatus= 1 Isseu Root To CAPA
            //@Isustatus =4  Diplay At Plan  Accaptance List
            var url = "../TestEFormExecution/ChangeIsuStatus.aspx?IssueId=" + IssueId + "&WrkAulId=" + 0 + "&Isustatus=" + Isustatus + "&PlanID=" + PlanID

            //alert(url)
            xmlhttp.open("POST", url, true);
            xmlhttp.send(null);
        }









        //////////////////////////////////////////

        // eFORM Related Other Action Plan Proposal Function

        function FUN_EFORM_OA_ACTION_PLAN_DECISION_ONLOAD(BaseId, CtrlId) {
            //document.getElementById(BaseId + "_" + CtrlId + "_0").checked = true
        }

        function FUN_EFORM_OA_ACTION_PLAN_DECISION(BaseId, CtrlId) {
          
            var ExpMessage = ""
            var ExpCtrlID = ""

            var NextFldBaseId = BaseId.substring(7, BaseId.length)   // No need of chnage hear
            NextFldBaseId = parseFloat(NextFldBaseId) + 1
            NextFldBaseId = BaseId.substring(0, 7) + NextFldBaseId

            var NextFldCtrlId = '607' // Hear Give Next Fld Ctrl Id
            var ExpMsg = 'Select Value For: Proposed Other Action plan(s)'   // Hear Give Next Fld Exp Messahe

               document.getElementById("BTN_" + NextFldBaseId).setAttribute("disabled", "disabled")
               document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "HideRow";
  
    
            if (document.getElementById(BaseId + "_" + CtrlId + "_0").checked == true) {
                document.getElementById("BTN_" + NextFldBaseId).removeAttribute("disabled")
                document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "MainTD";
  
                if (document.getElementById(NextFldBaseId + "_" + NextFldCtrlId).value == "") {
                    ExpMessage = ExpMessage + ExpMsg + '#*#';
                    ExpCtrlID = (NextFldBaseId + "_" + NextFldCtrlId) + '#*#'
                }
            }
            else //if (document.getElementById(BaseId + "_" + CtrlId + "_1").checked == true) 
            {
            
                document.getElementById(NextFldBaseId + "_" + NextFldCtrlId).setAttribute("value", "")
                document.getElementById("Value_" + NextFldBaseId + "_" + NextFldCtrlId).setAttribute("className", "HideRow")

            }

            var idStr = BaseId + '_' + CtrlId
            setExpMessage(ExpMessage, ExpCtrlID, idStr)
           
        }

        // Closed
        
        
       
        
        function FUN_DEV_EFORM_OA_ACTION_PLAN_DECISION(BaseId, CtrlId) {
           if(TransType<3){
            var ExpMessage = ""
            var ExpCtrlID = ""

            var NextFldBaseId = BaseId.substring(7, BaseId.length)   // No need of chnage hear
            NextFldBaseId = parseFloat(NextFldBaseId) + 1
            NextFldBaseId = BaseId.substring(0, 7) + NextFldBaseId

            //var NextFldCtrlId = '52' // Hear Give Next Fld Ctrl Id
            var NextFldCtrlId = '60' // Hear Give Next Fld Ctrl Id
            var ExpMsg = 'Select Value For: Proposed Other Action plan(s)'   // Hear Give Next Fld Exp Messahe

               document.getElementById("BTN_" + NextFldBaseId).setAttribute("disabled", "disabled")
               document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "HideRow";
  
    
            if (document.getElementById(BaseId + "_" + CtrlId + "_0").checked == true) {
                document.getElementById("BTN_" + NextFldBaseId).removeAttribute("disabled")
                document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "MainTD";
  
                if (document.getElementById(NextFldBaseId + "_" + NextFldCtrlId).value == "") {
                    ExpMessage = ExpMessage + ExpMsg + '#*#';
                    ExpCtrlID = (NextFldBaseId + "_" + NextFldCtrlId) + '#*#'
                }
            }
            else //if (document.getElementById(BaseId + "_" + CtrlId + "_1").checked == true) 
            {
            
                document.getElementById(NextFldBaseId + "_" + NextFldCtrlId).setAttribute("value", "")
                document.getElementById("Value_" + NextFldBaseId + "_" + NextFldCtrlId).setAttribute("className", "HideRow")

            }

            var idStr = BaseId + '_' + CtrlId
            setExpMessage(ExpMessage, ExpCtrlID, idStr)
         } //End of transtype
        }

        
        

        // Issue Login related Other Action Plan(s) Proposal

        function FUN_ISU_DEV_OA_ACTION_PLAN_DECISION_ONLOAD(BaseId, CtrlId) {
            //document.getElementById(LogFldPrefix + BaseId + "_" + CtrlId + "_0").checked = true
            //FUN_ISU_CA_ACTION_PLAN_DECISION(LogFldPrefix + BaseId, CtrlId)
        }


        function FUN_ISU_DEV_OA_ACTION_PLAN_DECISION(BaseId, CtrlId) {

       if(TransType<3){
            
            var ExpMessage = ""
            var ExpCtrlID = ""

            var NextFldBaseId = '215' // Hear Give Next Fld base Id 
            var NextFldCtrlId = '607' // Hear Give Next Fld Ctrl Id 
            var ExpMsg = 'Select Value For: Proposed Other Action Plan(s)'   // Hear Give Next Fld Exp Messahe 

            document.getElementById("BTN_" + LogFldPrefix + NextFldBaseId).setAttribute("disabled", "disabled")
            document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "HideRow";
            BaseId= BaseId.replace('FLD_' ,'')
  
            if (document.getElementById(LogFldPrefix +BaseId + "_" + CtrlId + "_0").checked == true) {
                document.getElementById("BTN_" + LogFldPrefix + NextFldBaseId).removeAttribute("disabled")
                document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "MainTD";
                if (document.getElementById(LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId).value == "") {
                    ExpMessage = ExpMessage + ExpMsg + '#*#';
                    ExpCtrlID = (LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId) + '#*#'
                }
            }
            else// if (document.getElementById(BaseId + "_" + CtrlId + "_1").checked == true)
            {
                document.getElementById(LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId).setAttribute("value", "")
                document.getElementById("Value_" + LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId).setAttribute("className", "HideRow")
            }

            var idStr = BaseId + '_' + CtrlId
            setExpMessage(ExpMessage, ExpCtrlID, idStr)
           }//End of Transtype
        }

        //Closed

        //Batch release criteria at QA Decision
        function FUN_DEV_BATCH_RELEASE(BaseId, CtrlId, IssueID) {

            var BatRelVal = document.getElementById(BaseId + "_" + CtrlId).value
            IssueID = document.getElementById("IssueLogIdTXt").value
            if (BatRelVal == 'Closure of deviation is mandatory') {
                AjaxUpdateBatch(IssueID, 1)
            }
            else if (BatRelVal == 'Closure of deviation is not mandatory') {
                AjaxUpdateBatch(IssueID, 2)
            }
            else if (BatRelVal == 'Not Applicable') {
                AjaxUpdateBatch(IssueID, 3)
            }

        }

        //Closed
        
        //function to update batch release criteria value at issue login aul
                
                function AjaxUpdateBatch(IsuLogId,BatRelSts)
                {
                    
                     /* BatRelSts =1 Closure is mandatory
                        BatRelSts =2 Closure is not mandatory
                        BatRelSts=3 NotApplicable
                     */
                        var recary = new Array(); 
                      
                        var xmlhttp;
                        try
                        { 
                            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                        }
                        catch(ex)
                        {
                            try 
                            {
                                xmlhttp=new ActiveXObject("MSxml2.XMLHTTP");
                            }
                            catch(ex)
                            {
                                try
                                {
                                    xmlhttp=new XmlHttpRequest();
                                }
                                catch(ex)
                                {
                                    alert("please update the webbrowser");
                                }
                            }
                        }
                        xmlhttp.onreadystatechange=function()
                        {
                            if(xmlhttp.readystate==4)
                            {
                                var Time = "abc"
                                Time = xmlhttp.ResponseText
                                xmlhttp =null;
                            }
                        }
                        
                        var url="../TestEFormExecution/UpdateBatchStatus.aspx?IssueId=" +  IsuLogId + "&BatRelSts=" + BatRelSts 

                        xmlhttp.open("POST",url,true);
                        xmlhttp.send(null);
                  }
                  
                  
                  
                  // Function to raise effective ness plans at login intiation
            function Ajax_EffectnessMonitoring()
             {
               var recary = new Array(); 
              
                    var xmlhttp;
                    try
                    {
                        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                    }
                    catch(ex)
                    {
                        try 
                        {
                            xmlhttp=new ActiveXObject("MSxml2.XMLHTTP");
                        }
                        catch(ex)
                        {
                            try
                            {
                                xmlhttp=new XmlHttpRequest();
                            }
                            catch(ex)
                            {
                                alert("please update the webbrowser");
                            }
                        }
                    }
                    
                    xmlhttp.onreadystatechange=function()
                    {
                        if(xmlhttp.readystate==4)
                        {
                            var RtnStr="abc"
                            var ReturnArr =new Array()
                            RtnStr=xmlhttp.ResponseText
                            //document.Form1.submit ()
                                                     
                        }
                    }  
                    var url="../AutoWorkAllocation/WorkAllocationAndMailCFG.aspx?RequestType=4" 
                    xmlhttp.open("POST",url,true);
                    xmlhttp.send(null);
             }

            
        //To get the initiating department value
            function AjaxReadInitDeptValue(IsuLogID,TransType,SrcType)  
            {
                    var recary = new Array(); 
                    var xmlhttp;
                    try
                    {
                         xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                    }
                    catch(ex)
                    {
                        try 
                        {
                            xmlhttp=new ActiveXObject("MSxml2.XMLHTTP");
                        }
                        catch(ex)
                        {
                            try
                            {
                                 xmlhttp=new XmlHttpRequest();
                            }
                            catch(ex)
                            {
                                 alert("please update the webbrowser");
                            }
                        }
                    }

                    xmlhttp.onreadystatechange=function()
                    {
                        if(xmlhttp.readystate==4)
                        {
                            var RtnStr="abc"
                            var ReturnArr =new Array()
                            RtnStr=xmlhttp.ResponseText
                            SetDeptVal(RtnStr,TransType,SrcType)                     
                        }
                    }  
                    var url="../IssueLogin/AjaxInitDeptValue.aspx?IsuLogId=" + IsuLogID
                    xmlhttp.open("POST",url,true);
                    xmlhttp.send(null);
                    
                    
            }
            
            //To check the Effectiveness/Monitoring Plans Schedule status
            function AjaxReadEMPlanScheduleSts(IsuLogId,TransType,SrcType)
            {
                 var recary = new Array(); 
                    var xmlhttp;
                    try
                    {
                         xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                    }
                    catch(ex)
                    {
                        try 
                        {
                            xmlhttp=new ActiveXObject("MSxml2.XMLHTTP");
                        }
                        catch(ex)
                        {
                            try
                            {
                                 xmlhttp=new XmlHttpRequest();
                            }
                            catch(ex)
                            {
                                 alert("please update the webbrowser");
                            }
                        }
                    }

                    xmlhttp.onreadystatechange=function()
                    {
                        if(xmlhttp.readystate==4)
                        {
                            var RtnStr="abc"
                            var ReturnArr =new Array()
                            RtnStr=xmlhttp.ResponseText
                            SetEFMStatus(RtnStr,TransType,SrcType)                     
                        }
                    }  
                    var url="../IssueClosure/AjaxEFMScheduleStatus.aspx?IsuLogId=" + IsuLogId 
                    xmlhttp.open("POST",url,true);
                    xmlhttp.send(null);           
            
            }
           
            //To check the Effectiveness/Monitoring Plans status
                     
            function AjaxReadEMPlanStatus(ActionPlanId,returnfunction,returnParams)
            {
                var recary = new Array();
                var Time = "abc"
                var xmlhttp;
                try 
                {
                    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                }
                catch (ex) 
                {
                    try 
                    {
                        xmlhttp = new ActiveXObject("MSxml2.XMLHTTP");
                    }
                    catch (ex)
                    {
                        try
                        {
                            xmlhttp = new XmlHttpRequest();
                        }
                        catch (ex)
                        {
                            alert("please update the webbrowser");
                        }
                    }
                }
                xmlhttp.onreadystatechange = function()
                 {
                    if (xmlhttp.readystate == 4)
                     {
                        Time = xmlhttp.ResponseText
                        xmlhttp = null;                       
                        setTimeout(returnfunction + "(" + "'" + Time  + "'" + "," + "'" + returnParams + "')", 0) 
                     }
                }       
               
                 var url="../PrsWorkFlow/AjaxReadPlanStatus.aspx?PlanId=" + ActionPlanId  + '&Type=1'
                xmlhttp.open("POST", url, true);
                xmlhttp.send(null);
        }
            
         //To Update Print Log
                     
//            function AjaxUpdatePrintLog(IsuLogId,PrintRelTo,PrinterName,DriverName)
//            {
//                var recary = new Array();
//                var Time = "abc"
//                var xmlhttp;
//                try 
//                {
//                    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//                }
//                catch (ex) 
//                {
//                    try 
//                    {
//                        xmlhttp = new ActiveXObject("MSxml2.XMLHTTP");
//                    }
//                    catch (ex)
//                    {
//                        try
//                        {
//                            xmlhttp = new XmlHttpRequest();
//                        }
//                        catch (ex)
//                        {
//                            alert("please update the webbrowser");
//                        }
//                    }
//                }
//                xmlhttp.onreadystatechange = function()
//                 {
//                    if (xmlhttp.readystate == 4)
//                     {
//                        Time = xmlhttp.ResponseText
//                        xmlhttp = null;                       
//                     }
//                }       
//           
//                
//            
//                var url="../CAPAWORKS/AjaxUpadtePrintLog.aspx?IsuLogId=" + IsuLogId +  "&PrintRelTo=" + PrintRelTo + '&PrinterName=' + PrinterName + '&DriverName=' + DriverName
//                xmlhttp.open("POST", url, true);
//                xmlhttp.send(null);
//        }            
          
          
           function Fn_XMLTableRow(ColName,ColValue,TableName)
    {
        TableName = TableName ? TableName : "DataTable"
        return "<" + TableName + "><ColumnName>" + ColName +"</ColumnName><ColumnValue>" + ColValue +"</ColumnValue></" + TableName + ">";
    }
    
    
    
          
           function AjaxUpdatePrintLog(IsuLogId,PrintRelTo,PrinterName,DriverName)
        {

            var Values ='<XmlDS>';
            Values+=Fn_XMLTableRow("IsuLogId","<![CDATA[" + IsuLogId + "]]>")
            Values+=Fn_XMLTableRow("PrintRelTo","<![CDATA[" + PrintRelTo + "]]>")
            Values+=Fn_XMLTableRow("PrinterName","<![CDATA[" + PrinterName + "]]>")
            Values+=Fn_XMLTableRow("DriverName","<![CDATA[" + DriverName + "]]>")
            
            Values+= "</XmlDS>";
            
            var url="../CAPAWORKS/AjaxUpadtePrintLog.aspx"
            if (window.XMLHttpRequest)
            { 
                reqXML = new XMLHttpRequest(); 
            }
            else if(window.ActiveXObject)
            {
                reqXML = new ActiveXObject("Microsoft.XMLHTTP"); 
            }
            if(reqXML)
            {
                reqXML.open("POST", url, true);
                reqXML.setRequestHeader("Content-Type", "text/xml");
                reqXML.send("<?xml version='1.0' encoding='UTF-8'?>" + Values);
                reqXML.onreadystatechange = function()
                {
                    if(reqXML.readyState==4)
                    {
                       Time = reqXML.ResponseText
                        xmlhttp = null;     
                    }
                }
            }
            else
            {
             alert("Your browser does not support Ajax");
            }
        }
      
      
      
        

 
 // New Functions 


         // Fun_Check_BatchSelection
                             
                function Fun_Check_BatchSelection(SrcType)
                {
                  
                    var BatchAutID=''
                    var BatchAutIDArr= new Array()
                    var BatchSelID=''
                    var BatchAutvalArr = new Array()
                    var BatchSelvalArr = new Array()
                   
                    var ExpCtrlID='' 
                    var idStr=''
                    var ExpMessage=''
                   
                             
                     if(SrcType ==20) // At WorkItemApproval
                    {
                        BatchAutID = 'E1_COL0215051014_625' 
                          var BatchAuthObj=document.getElementById(BatchAutID)
                          if (BatchAuthObj != null)
                          {
                              Ajax_CheckACPProsalStatus(document.getElementById("IssueLogIdTXt").value,BatchAutID,SrcType);
                          }


			//Added for new Capa  work Item
                          
                          var BatchAut1ID='E1_COL0714001009_52' 
                           BatchAuthObj=document.getElementById(BatchAut1ID)
                          if (BatchAuthObj != null)                        
                          {
                          if (document.getElementById('BTN_E1_COL0714001009').disabled == false){
                              Ajax_CheckACPProsalStatus(document.getElementById("IssueLogIdTXt").value,BatchAut1ID,20);
                          }
                          }
                          
                          var BatchAut2ID='E1_COL0714001012_56' 
                           BatchAuthObj=document.getElementById(BatchAut2ID)
                          if (BatchAuthObj != null)
                          {
                          if (document.getElementById('BTN_E1_COL0714001012').disabled == false){
                              Ajax_CheckACPProsalStatus(document.getElementById("IssueLogIdTXt").value,BatchAut2ID,2);
                          }
                          }
                          //End Added for new Capa  work Item 
             
                    
                     } // SrcType ==20
                     
                       
                     if(SrcType ==2) // At Issue LCosure
                    {
                          //BatchAutID='FLD_80_61'
                          BatchAutID='FLD_104_56' 
                          var BatchAuthObj=document.getElementById(BatchAutID)
                          if (BatchAuthObj != null  )
                          {
                             if (document.getElementById("BTN_FLD_104").disabled == false)
                             {
                              Ajax_CheckACPProsalStatus(document.getElementById("IssLogId").value,BatchAutID,SrcType);
                             } 
                              
                          }
                     } 
                     
                  
                }// end of  Function
                
                
                 function Fun_Check_BatchSelection_SUBMIT(SrcType)
                {
                
                
                   var  ApproveBtnObj =document.getElementById("Approve")
                   var ValidateFlag =0
                   if (ApproveBtnObj != null)
                   {
                     if (document.getElementById("Approve_1").checked== true)
                     {
                       ValidateFlag=1;
                     }
                   }
                   
                   if (ValidateFlag == 0)
                   {
                  
                        var BatchAutID=''
                        var BatchAutIDArr= new Array()
                        var BatchSelID=''
                        var LotSelID=''
                        var BatchAutvalArr = new Array()
                        var BatchSelvalArr = new Array()
                        
                        var ExpCtrlID='' 
                        var idStr=''
                        var ExpMessage=''
                        var BAtchValidtion=0
                             
                        if(SrcType ==1) // At  issue Login Approval Cycle
                        {

                            BatchAutID = 'FLD_220_625'
                          BatchSelID = 'FLD_189_614'
                          LotSelID='FLD_191_615'
                          
                          // Lot id Should be aDDED 
                          BatchAutIDArr=BatchAutID.split('_');
                          LotSelvalArr=LotSelID.split('_');
                          
                          
                          var BatchSelObj=document.getElementById(BatchSelID)
                          var BatchAuthObj=document.getElementById(BatchAutID)
                          var LotSelObj=document.getElementById(LotSelID)
                          
                         var BAtchSelCnt=0
                          
                          if (BatchSelObj != null )
                          {
                             if (BatchSelObj.value != '') { BAtchSelCnt=1; BatchSelvalArr=BatchSelObj.value.split(',') }
                          }
                          
                          if (LotSelObj != null )
                          {
                           if (LotSelObj.value != '') { BAtchSelCnt=1; BatchSelvalArr=LotSelObj.value.split(',') }
                          
                          }
                      
                      
                          if (BAtchSelCnt==1 && BatchAuthObj != null)
                          {
                            ExpCtrlID=BatchAutID 
                            idStr=BatchAutID
                            
                            if ( (BatchAuthObj.value == '') && (document.getElementById("BTN_" + BatchAutIDArr[0] + '_' + BatchAutIDArr[1]).disabled == false))
                              {
                                  var r = confirm("Decision On Selected Batch(s) Is Pending  \n Still To Continue Click Ok ");
                                  if (r != true)  {ExpMessage="Select Value For: Batch Release Control " } ;
                                   
                              }
                              
                             else if ( (BatchAuthObj.value != '') && (document.getElementById("BTN_" + BatchAutIDArr[0] + '_'  + BatchAutIDArr[1]).disabled == false))
                                  {
                                        BatchAutvalArr=BatchAuthObj.value.split(',')
                                        if (BatchSelvalArr.length != BatchAutvalArr.length )
                                        {
                                           var r = confirm("Decision On Selected Batch(s) Is Pending  \n Still To Continue Click Ok ");
                                           if (r != true)  { BAtchValidtion=1;ExpMessage="Select Value For: Batch Release Control " } ;
                                        }
                                       
                                }
                              
                                  
                          }
                      
                      
                         } // SrcType ==1
                     
                     
                             var ValueArr = new Array()
                             
                             
                             if (SrcType ==20)  // At WorkItemApproval
                            {

                                BatchAutID = 'E1_COL0215051014_625' //'E1_COL1113009012_54'
                                  var BatchAuthObj=document.getElementById(BatchAutID)
                                  
                                  if (BatchAuthObj != null)
                                  {
                                      if (document.getElementById("BTN_E1_COL0215051014").disabled == false)
                                   {
                                     if (BatchStatus >0)
                                     {
                                        ExpCtrlID=BatchAutID 
                                        idStr=BatchAutID
                                        
                                        if  (BatchAuthObj.value != '')
                                        {
                                           ValueArr=BatchAuthObj.value.split(',')
                                           var CalCnt =ValueArr.length
                                         if (BatchStatus != CalCnt)
                                             ExpMessage="Select Value For: Batch Release Control"
                                        }
                                        else
                                        {
                                          ExpMessage="Select Value For: Batch Release Control"
                                        }
                                     }
                                       if(ExpMessage=="")
                                       {
                                        Ajax_UpdateBatchStatus(document.getElementById("IssueLogIdTXt").value,SrcType)
                                       } 
                                    }  
                                  }
                                  
                                  



			//Code for capa work item-------------------------------------------------
                                  
                                  // Batch First Authentication 
                                  
                                  BatchAutID='E1_COL0714001009_52' //'E1_COL1113009012_54'
                                  var BatchAuthObj=document.getElementById(BatchAutID)
                                  
                                  if (BatchAuthObj != null)
                                  {
                                   if (document.getElementById("BTN_E1_COL0714001009").disabled == false)
                                   {
                                     if (BatchStatus >0)
                                     {
                                        ExpCtrlID=BatchAutID 
                                        idStr=BatchAutID
                                        
                                        if  (BatchAuthObj.value != '')
                                        {
                                               ValueArr=BatchAuthObj.value.split(',')
                                               var CalCnt =ValueArr.length
                                             if (BatchStatus != CalCnt)
                                             {
                                                 var r = confirm("Decision On Selected Batch(s) Is Pending  \n Still To Continue Click Ok ");
                                                    if (r != true)  {ExpMessage="Select Value For: Batch Release Control " } ;
                                             }
                                            else
                                            {
                                              var r = confirm("Decision On Selected Batch(s) Is Pending  \n Still To Continue Click Ok ");
                                               if (r != true)  {ExpMessage="Select Value For: Batch Release Control " } ;
                                            }
                                        }
                                       if(ExpMessage=="")
                                       {
                                        Ajax_UpdateBatchStatus(document.getElementById("IssueLogIdTXt").value,SrcType)
                                       } 
                                    }  
                                  }
                                 } 
                                  
                                  
                                  
                                  // Batch Secoond Authentication 
                                  
                                  
                                                                    
                                  BatchAutID='E1_COL0714001012_56' //'E1_COL1113009012_54'
                                  var BatchAuthObj=document.getElementById(BatchAutID)
                                  
                                  if (BatchAuthObj != null)
                                  {
                                   if (document.getElementById("BTN_E1_COL0714001012").disabled == false)
                                   {
                                     if (BatchStatus >0)
                                     {
                                        ExpCtrlID=BatchAutID 
                                        idStr=BatchAutID
                                        
                                        if  (BatchAuthObj.value != '')
                                        {
                                           ValueArr=BatchAuthObj.value.split(',')
                                           var CalCnt =ValueArr.length
                                                if (BatchStatus != CalCnt)
                                                {
                                                    var r = confirm("Decision On Selected Batch(s) Is Pending  \n Still To Continue Click Ok ");
                                                    if (r != true)  {ExpMessage="Select Value For: Batch Release Control " } ;
                                                }
                                                else
                                                {
                                                    var r = confirm("Decision On Selected Batch(s) Is Pending  \n Still To Continue Click Ok ");
                                                    if (r != true)  {ExpMessage="Select Value For: Batch Release Control " } ;
                                                }
                                        }
                                       if(ExpMessage=="")
                                       {
                                        Ajax_UpdateBatchStatus(document.getElementById("IssueLogIdTXt").value,SrcType)
                                       } 
                                    }  
                                  }
                                 } 
                                  
                                 //end Code for capa work item-------------------------------------------
                          


                            
                             } // SrcType ==20
                             
                               
                             if(SrcType ==2) // At Issue LCosure
                            {
                                  BatchAutID='FLD_104_56' 
                                  var BatchAuthObj=document.getElementById(BatchAutID)
                                  
                                  if (BatchAuthObj != null)
                                  {
                                  
                                    if (document.getElementById("BTN_FLD_104").disabled == false)
                                    {
                                         if (BatchStatus >0)
                                         {
                                            ExpCtrlID=BatchAutID 
                                            idStr=BatchAutID
                                            
                                            if  (BatchAuthObj.value != '')
                                            {
                                              ValueArr=BatchAuthObj.value.split(',')
                                               var CalCnt =ValueArr.length
                                               if (BatchStatus != CalCnt)
                                                 ExpMessage="Selecct Value For: Batch Release Control"
                                            }
                                            else
                                            {
                                              ExpMessage="Selecct Value For: Batch Release Control"
                                            }
                                         }
                                       if(ExpMessage=="")
                                       {
                                        Ajax_UpdateBatchStatus(document.getElementById("IssLogId").value,SrcType)
                                       } 
                                    }  
                                  }
                            
                             } // SrcType ==2
                             
                             
                     
                     setExpMessage(ExpMessage, ExpCtrlID, idStr)                     
                    } 
                     
                  
                }// end of  Function
                
                
                
                
                
                  // Ajax Function To Check Action Plan Proposals  At QA Decision 
              
              function Ajax_CheckACPProsalStatus(IssuelogId,FldID,SrcType)
              {
                     
                    var recary = new Array();
                var Time = "abc"
                var xmlhttp;
                try 
                {
                    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                }
                catch (ex) 
                {
                    try 
                    {
                        xmlhttp = new ActiveXObject("MSxml2.XMLHTTP");
                    }
                    catch (ex)
                    {
                        try
                        {
                            xmlhttp = new XmlHttpRequest();
                        }
                        catch (ex)
                        {
                            alert("please update the webbrowser");
                        }
                    }
                }
                xmlhttp.onreadystatechange = function()
                 {
                    if (xmlhttp.readystate == 4)
                     {
                        Time = xmlhttp.ResponseText
                        xmlhttp = null;   
                        if (Time =='')  { Time=0 }

                        var ExpMessage = '';
                        if (Time > 0) {
                            
                        BatchStatus=Time }
                        else { BatchStatus=0 }
                     }
                }       
                var url="../PrsWorkFlow/AjaxReadPlanStatus.aspx?IssuelogId=" + IssuelogId  + '&Type=2&SrcType=' + SrcType + '&UpdateFlag=0'
                xmlhttp.open("POST", url, true);
                xmlhttp.send(null);
              }      

        
        
        function ReadSchRptDoc(BaseID,CtrlID)
        {
          Ajax_ReadSchRptDoc(0,BaseID,CtrlID)
        }
        
        function Ajax_ReadSchRptDoc(FissId,BaseID,CtrlID)
        {
               var recary = new Array();
                var Time = "abc"
                var xmlhttp;
                try 
                {
                    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                }
                catch (ex) 
                {
                    try 
                    {
                        xmlhttp = new ActiveXObject("MSxml2.XMLHTTP");
                    }
                    catch (ex)
                    {
                        try
                        {
                            xmlhttp = new XmlHttpRequest();
                        }
                        catch (ex)
                        {
                            alert("please update the webbrowser");
                        }
                    }
                }
                xmlhttp.onreadystatechange = function()
                 {
                    if (xmlhttp.readystate == 4)
                     {
                        Time = xmlhttp.ResponseText
                        xmlhttp = null; 
                        SetSCHRptDcoVAL(Time)  
                     }
                }       
                var url="../PrsWorkFlow/AjaxReadPlanStatus.aspx?FissId=" + FissId  + '&Type=3'
                xmlhttp.open("POST", url, true);
                xmlhttp.send(null);
          
        }
        
        
        function SetSCHRptDcoVAL(DocValue)
        {
          if(DocValue!='') {
          
          var DocValueArr=new Array()
          DocValueArr=DocValue.split("#*#")
          
          document.getElementById(UParam).value=DocValue ;
          document.getElementById("File_"+UParam).innerHTML=DocValue[1] + '; '; //DocDesc.replace("$@$","; ") ;
         } 
            
}


  function SAPInterface(RowCnt, BatchId) {

            var recary = new Array();
            var Time = "abc"
            var xmlhttp;
            try {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (ex) {
                try {
                    xmlhttp = new ActiveXObject("MSxml2.XMLHTTP");
                }
                catch (ex) {
                    try {
                        xmlhttp = new XmlHttpRequest();
                    }
                    catch (ex) {
                        alert("please update the webbrowser");
                    }
                }
            }
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readystate == 4) {

                    var RtnStr = "abc"

                    RtnStr = xmlhttp.ResponseText


                    // "returnParams" is an optional parameter 

                    if (RtnStr == 0) { alert("QAMS User ID Not Mapped To SAP User ID"); HideMask(); }
                    if (RtnStr == 1) { alert("Batch Is Already In Queue, So This Batch Is In Pending List"); HideMask(); }
                    if (RtnStr == 2) {
                        Ajax_AppDetailsInsert(RowCnt);

                    }
                    xmlhttp = null;
                }
            }

            var url = "../PrsWorkFlow/SAPInterface_AJAX.aspx?BatchId=" + BatchId
            xmlhttp.open("POST", url, true);
            xmlhttp.send(null);
        }


  function uploadstatsap(BaseID) {
            var PopUpWidth = 500
            var PopUpHeight = 500
            var PopUpLeftTopY = 0
            var PopUpLeftTopX = 0
            var pageURL = "../SAPBATSTS/Troubleshootpop.aspx?BaseId=" + BaseID
            var features = "height=" + PopUpHeight + ",width=" + PopUpWidth + ",toolbar=no,resizable=no,menubar=no,status=no,scrollbars=no,top=" + PopUpLeftTopY + ",left=" + PopUpLeftTopX
            window.open(pageURL, 'SamplingUpdation', features)
            //window.close()
        }
        
        
 // Ajax Function To Update the Batch count after  QA Decision and Final Closure
              
              function Ajax_UpdateBatchStatus(IssuelogId,SrcType)
              {
                        
                var recary = new Array();
                var Time = "abc"
                var xmlhttp;
                try 
                {
                    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                }
                catch (ex) 
                {
                    try 
                    {
                        xmlhttp = new ActiveXObject("MSxml2.XMLHTTP");
                    }
                    catch (ex)
                    {
                        try
                        {
                            xmlhttp = new XmlHttpRequest();
                        }
                        catch (ex)
                        {
                            alert("please update the webbrowser");
                        }
                    }
                }
                xmlhttp.onreadystatechange = function()
                 {
                    if (xmlhttp.readystate == 4)
                     {
                        Time = xmlhttp.ResponseText
                        xmlhttp = null;   
                        if (Time =='')  { Time=0 }
                        
                        var ExpMessage='';
                       
                     }
                }       
                var url="../PrsWorkFlow/AjaxReadPlanStatus.aspx?IssuelogId=" + IssuelogId  + '&Type=2&SrcType=' + SrcType + '&UpdateFlag=1'
                xmlhttp.open("POST", url, true);
                xmlhttp.send(null);
              }    
              
              //To Disable Fields During Modification  
     
           function DisableFields()
           {
             if(TransType>2)
               {
               
                    //Change Related To Field in Issue
                    
                    var ChngRelObj=document.getElementById("BTN_FLD_9")  //Id to be changed by venu
                    if(ChngRelObj!=null){
                    document.getElementById("BTN_FLD_9").setAttribute("disabled", "disabled") 
                      
                    }  
                    
                    //For Action plan
                    //Action Plan Proposal(s) Required Field in Issue
                    var ChngRelObj=document.getElementById("FLD_25_7") //Id to be changed by venu
                     if(ChngRelObj!=null){
                      if(document.getElementById("FLD_25_7_0").checked==true)
                             document.getElementById("FLD_25_7_1").setAttribute("disabled", "disabled") 
                      else if(document.getElementById("FLD_25_7_1").checked==true)
                             document.getElementById("FLD_25_7_0").setAttribute("disabled", "disabled") 
                             
                       
                    }
                    
                    // FOr Reference field in Issue
                    
                    var ChngRelObj=document.getElementById("FLD_1_7") //Id to be changed by venu
                     if(ChngRelObj!=null){
                      if(document.getElementById("FLD_1_7_0").checked==true)
                             document.getElementById("FLD_1_7_1").setAttribute("disabled", "disabled") 
                      else if(document.getElementById("FLD_1_7_1").checked==true)
                             document.getElementById("FLD_1_7_0").setAttribute("disabled", "disabled") 
                                               
                    }
                    
                    //Referred Issue(s) Field
                     var ChngRelObj=document.getElementById("BTN_FLD_2") //Id to be changed by venu
                     if(ChngRelObj!=null){
                    document.getElementById("BTN_FLD_2").setAttribute("disabled", "disabled") 
                      
                    }  
                    
                    //For Work Items Action Plans
                    //At RA Decision Action Plan Proposal(s) Required
                     var ChngRelObj=document.getElementById("E1_COL0215045002_546") //Id to be changed by venu 
                     if(ChngRelObj!=null){
                      if(document.getElementById("E1_COL0215045002_546_0").checked==true)
                             document.getElementById("E1_COL0215045002_546_1").setAttribute("disabled", "disabled") 
                      else if(document.getElementById("E1_COL0215045002_546_1").checked==true)
                             document.getElementById("E1_COL0215045002_546_0").setAttribute("disabled", "disabled") 
                                               
                    }
                    
                    //For Work Items Action Plans
                    //At RA Decision Decision on Change Control
                     var ChngRelObj=document.getElementById("E1_COL0215045004_563") //Id to be changed by venu
                     if(ChngRelObj!=null){
                      if(document.getElementById("E1_COL0215045004_563_0").checked==true)
                             document.getElementById("E1_COL0215045004_563_1").setAttribute("disabled", "disabled") 
                      else if(document.getElementById("E1_COL0215045004_563_1").checked==true)
                             document.getElementById("E1_COL0215045004_563_0").setAttribute("disabled", "disabled") 
                                               
                    }
                    
                    //for audit management justiofication and capa proposal
                    
                    var ChngRelObj=document.getElementById("E1_COL0315011002_546") //Id to be changed by venu E1_COL0315011002_546
                     if(ChngRelObj!=null){
                      if(document.getElementById("E1_COL0315011002_546_0").checked==true)
                             document.getElementById("E1_COL0315011002_546_1").setAttribute("disabled", "disabled") 
                      else if(document.getElementById("E1_COL0315011002_546_1").checked==true)
                             document.getElementById("E1_COL0315011002_546_0").setAttribute("disabled", "disabled") 
                                               
                    }
                    
                    
                   
                    
                      var ChngRelObj=document.getElementById("E1_COL0315011004_546") //Id to be changed by venu E1_COL0315011002_546
                     if(ChngRelObj!=null){
                      if(document.getElementById("E1_COL0315011004_546_0").checked==true)
                             document.getElementById("E1_COL0315011004_546_1").setAttribute("disabled", "disabled") 
                      else if(document.getElementById("E1_COL0315011004_546_1").checked==true)
                             document.getElementById("E1_COL0315011004_546_0").setAttribute("disabled", "disabled") 
                                               
                    }
                    
                    
                    
                        var ChngRelObj=document.getElementById("E1_COL0315011006_546") //Id to be changed by venu E1_COL0315011002_546
                     if(ChngRelObj!=null){
                      if(document.getElementById("E1_COL0315011006_546_0").checked==true)
                             document.getElementById("E1_COL0315011006_546_1").setAttribute("disabled", "disabled") 
                      else if(document.getElementById("E1_COL0315011006_546_1").checked==true)
                             document.getElementById("E1_COL0315011006_546_0").setAttribute("disabled", "disabled") 
                                               
                    }
                    
                    
                    //At QA Decision
                    //Additional Action Plan Proposal(s) Required
                      var ChngRelObj=document.getElementById("E1_COL0215044004_546") //Id to be changed by venu
                     if(ChngRelObj!=null){
                      if(document.getElementById("E1_COL0215044004_546_0").checked==true)
                             document.getElementById("E1_COL0215044004_546_1").setAttribute("disabled", "disabled") 
                      else if(document.getElementById("E1_COL0215044004_546_1").checked==true)
                             document.getElementById("E1_COL0215044004_546_0").setAttribute("disabled", "disabled") 
                                               
                    }
                    
                      //For Work Items Action Plans
                    //At QA Decision Decision on Change Control
                     var ChngRelObj=document.getElementById("E1_COL0215044006_564") //Id to be changed by venu
                     if(ChngRelObj!=null){
                      if(document.getElementById("E1_COL0215044006_564_0").checked==true)
                             document.getElementById("E1_COL0215044006_564_1").setAttribute("disabled", "disabled") 
                      else if(document.getElementById("E1_COL0215044006_564_1").checked==true)
                             document.getElementById("E1_COL0215044006_564_0").setAttribute("disabled", "disabled") 
                                               
                    }
                    
                    
                   
                   
                    //CAPA Related Fields
                    
                     //Action Plan Proposal(s) Required Field in Issue
                    var ChngRelObj=document.getElementById("FLD_49_7") //Id to be changed by venu
                     if(ChngRelObj!=null)
                     {
                      if(document.getElementById("FLD_49_7_0").checked==true)
                             document.getElementById("FLD_49_7_1").setAttribute("disabled", "disabled") 
                      else if(document.getElementById("FLD_49_7_1").checked==true)
                             document.getElementById("FLD_49_7_0").setAttribute("disabled", "disabled") 
                     }
                    
                      //Preventive Action Plan Proposal(s) Required
                     var ChngRelObj=document.getElementById("FLD_51_7") //Id to be changed by venu
                     if(ChngRelObj!=null)
                     {
                      if(document.getElementById("FLD_51_7_0").checked==true)
                             document.getElementById("FLD_51_7_1").setAttribute("disabled", "disabled") 
                      else if(document.getElementById("FLD_51_7_1").checked==true)
                             document.getElementById("FLD_51_7_0").setAttribute("disabled", "disabled") 
                     }
                    
                    
                    //Other Action Plan Proposal(s) Required
                     var ChngRelObj=document.getElementById("FLD_53_7") //Id to be changed by venu
                     if(ChngRelObj!=null)
                     {
                      if(document.getElementById("FLD_53_7_0").checked==true)
                             document.getElementById("FLD_53_7_1").setAttribute("disabled", "disabled") 
                      else if(document.getElementById("FLD_53_7_1").checked==true)
                             document.getElementById("FLD_53_7_0").setAttribute("disabled", "disabled") 
                     }

                  //At QA decision


                  //                  // Deviation process

                  //Additional Corrective Action Plan Proposal(s) Required

                  var ChngRelObj = document.getElementById("E1_COL0215051006_546") //Id to be changed by venu
                  if (ChngRelObj != null) {
                      if (document.getElementById("E1_COL0215051006_546_0").checked == true)
                          document.getElementById("E1_COL0215051006_546_1").setAttribute("disabled", "disabled")
                      else if (document.getElementById("E1_COL0215051006_546_1").checked == true)
                          document.getElementById("E1_COL0215051006_546_0").setAttribute("disabled", "disabled")
                  }


                  //Additional Corrective Action Plan Proposal(s) Required

                  var ChngRelObj = document.getElementById("E1_COL0215051008_546") //Id to be changed by venu
                     if(ChngRelObj!=null)
                     {
                         if (document.getElementById("E1_COL0215051008_546_0").checked == true)
                             document.getElementById("E1_COL0215051008_546_1").setAttribute("disabled", "disabled")
                         else if (document.getElementById("E1_COL0215051008_546_1").checked == true)
                             document.getElementById("E1_COL0215051008_546_0").setAttribute("disabled", "disabled") 
                     }
                     
                          //Additional Other Action Plan Proposal(s) Required

                     var ChngRelObj = document.getElementById("E1_COL0215051010_546") //Id to be changed by venu
                     if(ChngRelObj!=null)
                     {
                         if (document.getElementById("E1_COL0215051010_546_0").checked == true)
                             document.getElementById("E1_COL0215051010_546_1").setAttribute("disabled", "disabled")
                         else if (document.getElementById("E1_COL0215051010_546_1").checked == true)
                             document.getElementById("E1_COL0215051010_546_0").setAttribute("disabled", "disabled") 
                     }
                     
                  

                    //Additional Corrective Action Plan Proposal(s) Required
                    
                     var ChngRelObj=document.getElementById("E1_COL1113007004_7") //Id to be changed by venu
                     if(ChngRelObj!=null)
                     {
                      if(document.getElementById("E1_COL1113007004_7_0").checked==true)
                             document.getElementById("E1_COL1113007004_7_1").setAttribute("disabled", "disabled") 
                      else if(document.getElementById("E1_COL1113007004_7_1").checked==true)
                             document.getElementById("E1_COL1113007004_7_0").setAttribute("disabled", "disabled") 
                     }
                     
                     
                      //Additional Preventive Action Plan Proposal(s) Required
                    
                     var ChngRelObj=document.getElementById("E1_COL1113007006_7") //Id to be changed by venu
                     if(ChngRelObj!=null)
                     {
                      if(document.getElementById("E1_COL1113007006_7_0").checked==true)
                             document.getElementById("E1_COL1113007006_7_1").setAttribute("disabled", "disabled") 
                      else if(document.getElementById("E1_COL1113007006_7_1").checked==true)
                             document.getElementById("E1_COL1113007006_7_0").setAttribute("disabled", "disabled") 
                     }
                    
                     //Additional Other Action Plan Proposal(s) Required
                    
                     var ChngRelObj=document.getElementById("E1_COL1113007008_7") //Id to be changed by venu
                     if(ChngRelObj!=null)
                     {
                      if(document.getElementById("E1_COL1113007008_7_0").checked==true)
                             document.getElementById("E1_COL1113007008_7_1").setAttribute("disabled", "disabled") 
                      else if(document.getElementById("E1_COL1113007008_7_1").checked==true)
                             document.getElementById("E1_COL1113007008_7_0").setAttribute("disabled", "disabled") 
                     }
                    
                    
                    // For Deviation
                    
                    // Extended Investigation Required
                    
                     var ChngRelObj=document.getElementById("FLD_206_546") //Id to be changed by venu
                     if(ChngRelObj!=null)
                     {
                      if(document.getElementById("FLD_206_546_0").checked==true)
                             document.getElementById("FLD_206_546_1").setAttribute("disabled", "disabled") 
                      else if(document.getElementById("FLD_206_546_1").checked==true)
                             document.getElementById("FLD_206_546_0").setAttribute("disabled", "disabled") 
                     }
                     
                     
                      // Corrective Action Plan Proposal(s) Required
                    
                     var ChngRelObj=document.getElementById("FLD_208_546") //Id to be changed by venu
                     if(ChngRelObj!=null)
                     {
                      if(document.getElementById("FLD_208_546_0").checked==true)
                             document.getElementById("FLD_208_546_1").setAttribute("disabled", "disabled") 
                      else if(document.getElementById("FLD_208_546_1").checked==true)
                             document.getElementById("FLD_208_546_0").setAttribute("disabled", "disabled") 
                     }
                    
                    
                      // Preventive Action Plan Proposal(s) Required
                    
                     var ChngRelObj=document.getElementById("FLD_211_546") //Id to be changed by venu
                     if(ChngRelObj!=null)
                     {
                      if(document.getElementById("FLD_211_546_0").checked==true)
                             document.getElementById("FLD_211_546_1").setAttribute("disabled", "disabled") 
                      else if(document.getElementById("FLD_211_546_1").checked==true)
                             document.getElementById("FLD_211_546_0").setAttribute("disabled", "disabled") 
                     }
                     
                     
                     //other action plan
                     
                     
                     
                      var ChngRelObj=document.getElementById("FLD_214_546") //Id to be changed by venu
                     if(ChngRelObj!=null)
                     {
                      if(document.getElementById("FLD_214_546_0").checked==true)
                             document.getElementById("FLD_214_546_1").setAttribute("disabled", "disabled") 
                      else if(document.getElementById("FLD_214_546_1").checked==true)
                             document.getElementById("FLD_214_546_0").setAttribute("disabled", "disabled") 
                     }
                     
                     
                      // Batch Release Control
                    
                     var ChngRelObj=document.getElementById("BTN_FLD_95") //Id to be changed by venu
                     if(ChngRelObj!=null)
                     {
                             document.getElementById("BTN_FLD_95").setAttribute("disabled", "disabled") 
                     }
                    
                     // Other Impacted Batch/Lot No.(s) (if any)
                    
                     var ChngRelObj=document.getElementById("BTN_E1_COL1113009002_57") //Id to be changed by venu
                     if(ChngRelObj!=null)
                     {
                             document.getElementById("BTN_E1_COL1113009002_57").setAttribute("disabled", "disabled") 
                     }
                     
                     
                     //At QA Additional Corrective Action Plan Proposal(s) Required
                     
                     
                     var ChngRelObj=document.getElementById("E1_COL1213004006_7") //Id to be changed by venu
                     if(ChngRelObj!=null)
                     {
                      if(document.getElementById("E1_COL1213004006_7_0").checked==true)
                             document.getElementById("E1_COL1213004006_7_1").setAttribute("disabled", "disabled") 
                      else if(document.getElementById("E1_COL1213004006_7_1").checked==true)
                             document.getElementById("E1_COL1213004006_7_0").setAttribute("disabled", "disabled") 
                     }
                     
                     
                     
                      // Additional Preventive Action Plan Proposal(s) Required
                     var ChngRelObj=document.getElementById("E1_COL1213004008_7") //Id to be changed by venu
                     if(ChngRelObj!=null)
                     {
                      if(document.getElementById("E1_COL1213004008_7_0").checked==true)
                             document.getElementById("E1_COL1213004008_7_1").setAttribute("disabled", "disabled") 
                      else if(document.getElementById("E1_COL1213004008_7_1").checked==true)
                             document.getElementById("E1_COL1213004008_7_0").setAttribute("disabled", "disabled") 
                     }
                     
                     
                     
                      // Additional Other Action Plan Proposal(s) Required
                     var ChngRelObj=document.getElementById("E1_COL1213004010_7") //Id to be changed by venu
                     if(ChngRelObj!=null)
                     {
                      if(document.getElementById("E1_COL1213004010_7_0").checked==true)
                             document.getElementById("E1_COL1213004010_7_1").setAttribute("disabled", "disabled") 
                      else if(document.getElementById("E1_COL1213004010_7_1").checked==true)
                             document.getElementById("E1_COL1213004010_7_0").setAttribute("disabled", "disabled") 
                     }
                     
                      // Batch Release Control
                    
                     var ChngRelObj=document.getElementById("BTN_E1_COL1213004014") //Id to be changed by venu
                     if(ChngRelObj!=null)
                     {
                             document.getElementById("BTN_E1_COL1213004014").setAttribute("disabled", "disabled") 
                     }
                    
                    //category
//                    
//                     var ChngRelObj=document.getElementById("E1_COL1213004004_58") //Id to be changed by venu
//                      if(ChngRelObj!=null)
//                     {
//                        if(Catselval!=ChngRelObj.value)
//                        ChngRelObj.value=Catselval;
//                     }
                    
                    
               }
             }
         
         
                         // Ajax Function To Check Action Plan Proposals  At QA Decision 
              
             
//  **************  Muti Object  Ref Deselection Related Functions ********************//

function FUN_EFORM_PRODUCT_DESELECTION(Baseid,CtrlID)  // for product
{
     var objType =7
     var IsuLogId=document.getElementById("IssueLogIdTXt").value
     AJX_LoadSelObjects(IsuLogId,objType)
}

             
function FUN_EFORM_EQUIPMENT_DESELECTION(Baseid,CtrlID)  // for product
{
     var IsuLogId=document.getElementById("IssueLogIdTXt").value
     var objType =8
     AJX_LoadSelObjects(IsuLogId,objType)
}
          

 function AJX_LoadSelObjects(IsuLogId,ObjectType)
    {
        var recary = new Array(); 
        var xmlhttp;
        try
        { 
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch(ex)
        {
            try 
            {
                xmlhttp=new ActiveXObject("MSxml2.XMLHTTP");
            }
            catch(ex)
            {
                try
                {
                    xmlhttp=new XmlHttpRequest();
                }
                catch(ex)
                {
                    alert("please update the webbrowser");
                }
            }
        }
        xmlhttp.onreadystatechange=function()
        {
            if(xmlhttp.readystate==4)
            {
                var Time="abc"
                Time=xmlhttp.ResponseText
                
                if (ObjectType==7)
                    SelprdorMatLst =Time
                else if (ObjectType==8)
                   SelEquipmentLst =Time
                
                xmlhttp =null;
            }
        }
         var url="../AutoWorkAllocation/MutiOBJRef_Deactive_AJAX.aspx?Type=1&IsuLogID=" +  IsuLogId + "&ObjType="  + ObjectType
         xmlhttp.open("POST",url,true);
         xmlhttp.send(null);
    }

          
          
    function FUN_EFORM_PRODUCT_DESELECTION_VALUE(BaseId,CtrlId,IsuLogId)  // for product
     {
        var objType =7
        
        var ExpMessage=""
        var ExpCtrlID=""
        var valueExist=0
        var SelprdorMatValArr = new Array()
        var SelValue = document.getElementById(BaseId + "_" + CtrlId).value
  
        if (SelprdorMatLst != "")
        {
        
          if (SelprdorMatLst.substring(0,1) == ',')
          {
            SelprdorMatLst=SelprdorMatLst.substring(1)
          }
           SelprdorMatValArr=SelprdorMatLst.split(",")
           for (var i=0;i<=SelprdorMatValArr.length-1;i++)
           {
             if (SelprdorMatValArr[i]== SelValue)
               {  valueExist=1;  }
           }
           
//           if (valueExist==0)
//           {
//            ExpMessage= ExpMessage + "Selected Product/Material Is Not Exist In This Issue Cycle" + '#*#' ;
//            ExpCtrlID=ExpCtrlID + (BaseId + CtrlId) + '#*#' 
//           }
        }
        
        if (SelValue !='' &&  valueExist==0)
        {
           ExpMessage= ExpMessage + "Selected Product/Material Is Not Exist In This Issue Cycle" + '#*#' ;
           ExpCtrlID=ExpCtrlID + (BaseId + CtrlId) + '#*#' 
        }
        
        var idStr=BaseId + '_' + CtrlId
        setExpMessage(ExpMessage,ExpCtrlID,idStr)
    
     }
     
             
             
 function FUN_EFORM_EQUIPMENT_DESELECTION_VALUE(BaseId,CtrlId,IsuLogId)  // for product
     {
        var objType =8
        var ExpMessage=""
        var ExpCtrlID=""
        var valueExist=0
        var SelEquipmentValArr = new Array()
        var SelValue = document.getElementById(BaseId + "_" + CtrlId).value
                          
        if (SelEquipmentLst != "")
        {
        
         if (SelEquipmentLst.substring(0,1) == ',')
          {
            SelEquipmentLst=SelEquipmentLst.substring(1)
          }
          SelEquipmentValArr=SelEquipmentLst.split(",")
          for (var i=0;i<=SelEquipmentValArr.length-1;i++)
           {
            if (SelEquipmentValArr[i]== SelValue)
              { valueExist=1; }
           }
//           if (valueExist==0)
//           {
//            ExpMessage= ExpMessage + "Selected Equipment Is Not Exist In This Issue Cycle" + '#*#' ;
//            ExpCtrlID=ExpCtrlID + (BaseId + CtrlId) + '#*#' 
//           }
        }
         
        if (SelValue !='' &&  valueExist==0)
        {
           ExpMessage= ExpMessage + "Selected Equipment Is Not Exist In This Issue Cycle" + '#*#' ;
           ExpCtrlID=ExpCtrlID + (BaseId + CtrlId) + '#*#' 
        }
       
        
        var idStr=BaseId + '_' + CtrlId
        setExpMessage(ExpMessage,ExpCtrlID,idStr)
     }
     
     
     
      function FUN_EFORM_PRODUCT_DESELECTION_SUBMIT(BaseId,CtrlId,IsuLogId)  // for product
    {
         var objType =7
         var SelValue = document.getElementById(BaseId + "_" + CtrlId).value
         var FissID=document.getElementById("FissIDTXt").value
         AJX_UDATESelObjects(IsuLogId,objType,SelValue,FissID)
    }

                 
    function FUN_EFORM_EQUIPMENT_DESELECTION_SUBMIT(BaseId,CtrlId,IsuLogId)  // for product
    {
         var objType =8
         var SelValue = document.getElementById(BaseId + "_" + CtrlId).value
         var FissID=document.getElementById("FissIDTXt").value
         AJX_UDATESelObjects(IsuLogId,objType,SelValue,FissID)
    }
           
           
   
     function AJX_UDATESelObjects(IsuLogId,ObjectType,ObjectID,FissID)
    {
        var recary = new Array(); 
        var xmlhttp;
        try
        { 
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch(ex)
        {
            try 
            {
                xmlhttp=new ActiveXObject("MSxml2.XMLHTTP");
            }
            catch(ex)
            {
                try
                {
                    xmlhttp=new XmlHttpRequest();
                }
                catch(ex)
                {
                    alert("please update the webbrowser");
                }
            }
        }
        xmlhttp.onreadystatechange=function()
        {
            if(xmlhttp.readystate==4)
            {
                var Time="abc"
                Time=xmlhttp.ResponseText
                xmlhttp =null;
            }
        }
         var url="../AutoWorkAllocation/MutiOBJRef_Deactive_AJAX.aspx?Type=2&IsuLogID=" +  IsuLogId + "&ObjType="  + ObjectType + "&ObjID=" + ObjectID  + "&WitID=" + FissID
         xmlhttp.open("POST",url,true);
         xmlhttp.send(null);
    }
    
    
//    for audit management refference decision

 function FUN_ISU_AF_REFERENCE_CONNECTION(BaseId, CtrlId) {
        if(TransType<3){
          var ExpMessage = ""
          var ExpCtrlID = ""


          var NextFldBaseId = ReferredIssueIDAry1[1] // Hear Give Next Fld base Id
          var NextFldCtrlId = ReferredIssueIDAry1[2] // Hear Give Next Fld Ctrl Id 
          
          var ExpMsg = 'Select Value For: Referred Issue(s)'   // Hear Give Next Fld Exp Messahe

          document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "HideRow";

          document.getElementById("BTN_" + LogFldPrefix + NextFldBaseId).setAttribute("disabled", "disabled")
          if (document.getElementById(BaseId + "_" + CtrlId + "_0").checked == true) {
              document.getElementById("BTN_" + LogFldPrefix + NextFldBaseId).removeAttribute("disabled")
              document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "MainTD";
              if (document.getElementById(LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId).value == "") {
                  ExpMessage = ExpMessage + ExpMsg + '#*#';
                  ExpCtrlID = (LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId) + '#*#'
              }
          }
          else// if (document.getElementById(BaseId + "_" + CtrlId + "_1").checked == true)
          { //alert(
              document.getElementById("BTN_" + LogFldPrefix + NextFldBaseId).setAttribute("disabled", "disabled")
              document.getElementById(LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId).setAttribute("value", "")
              document.getElementById( "Value_"+ LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId).setAttribute("className", "HideRow")
              //document.getElementById("Value_" + LogFldPrefix + NextFldBaseId + "_" + NextFldCtrlId).setAttribute("className", "HideRow")

          }

          var idStr = BaseId + '_' + CtrlId
          setExpMessage(ExpMessage, ExpCtrlID, idStr)
       }
      }
      
      
      
      
      
      
        function FUN_AF_EFORM_CA_PLAN_DEC(BaseId, CtrlId) {

          var ExpMessage = ""
               var ExpCtrlID = ""

               var NextFldBaseId = BaseId.substring(7, BaseId.length)   // No need of chnage hear
               NextFldBaseId = parseFloat(NextFldBaseId) + 1
               NextFldBaseId = BaseId.substring(0, 7) + NextFldBaseId

               var NextFldCtrlId = '643' // Hear Give Next Fld Ctrl Id
               var ExpMsg = 'Select Value For: Proposed Corrective Action plan(s)'   // Hear Give Next Fld Exp Messahe

                document.getElementById("BTN_" + NextFldBaseId).setAttribute("disabled", "disabled")
                document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "HideRow";
  
               if (document.getElementById(BaseId + "_" + CtrlId + "_0").checked == true) {
                  
                   document.getElementById("BTN_" + NextFldBaseId).removeAttribute("disabled")
                   document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "MainTD";
                   
                   if (document.getElementById(NextFldBaseId + "_" + NextFldCtrlId).value == "") {
                       ExpMessage = ExpMessage + ExpMsg + '#*#';
                       ExpCtrlID = (NextFldBaseId + "_" + NextFldCtrlId) + '#*#'
                   }
               }
               else //if (document.getElementById(BaseId + "_" + CtrlId + "_1").checked == true) 
               {
                   document.getElementById(NextFldBaseId + "_" + NextFldCtrlId).setAttribute("value", "")
                   document.getElementById("Value_" + NextFldBaseId + "_" + NextFldCtrlId).setAttribute("className", "HideRow")
               }

               var idStr = BaseId + '_' + CtrlId
               setExpMessage(ExpMessage, ExpCtrlID, idStr)
            
      }
      
      
      function FUN_AF_EFORM_PA_PLAN_DEC(BaseId, CtrlId)
      {
       var ExpMessage = ""
               var ExpCtrlID = ""

               var NextFldBaseId = BaseId.substring(7, BaseId.length)   // No need of chnage hear
               NextFldBaseId = parseFloat(NextFldBaseId) + 1
               NextFldBaseId = BaseId.substring(0, 7) + NextFldBaseId

               var NextFldCtrlId = '644' // Hear Give Next Fld Ctrl Id
               var ExpMsg = 'Select Value For: Proposed Preventive Action Plan(s)'   // Hear Give Next Fld Exp Messahe

                document.getElementById("BTN_" + NextFldBaseId).setAttribute("disabled", "disabled")
                document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "HideRow";
  
               if (document.getElementById(BaseId + "_" + CtrlId + "_0").checked == true) {
                  
                   document.getElementById("BTN_" + NextFldBaseId).removeAttribute("disabled")
                   document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "MainTD";
                   
                   if (document.getElementById(NextFldBaseId + "_" + NextFldCtrlId).value == "") {
                       ExpMessage = ExpMessage + ExpMsg + '#*#';
                       ExpCtrlID = (NextFldBaseId + "_" + NextFldCtrlId) + '#*#'
                   }
               }
               else //if (document.getElementById(BaseId + "_" + CtrlId + "_1").checked == true) 
               {
                   document.getElementById(NextFldBaseId + "_" + NextFldCtrlId).setAttribute("value", "")
                   document.getElementById("Value_" + NextFldBaseId + "_" + NextFldCtrlId).setAttribute("className", "HideRow")
               }

               var idStr = BaseId + '_' + CtrlId
               setExpMessage(ExpMessage, ExpCtrlID, idStr)
         
      }
      
      function FUN_AF_EFORM_TA_PLAN_DEC(BaseId, CtrlId)
      {
      var ExpMessage = ""
               var ExpCtrlID = ""

               var NextFldBaseId = BaseId.substring(7, BaseId.length)   // No need of chnage hear
               NextFldBaseId = parseFloat(NextFldBaseId) + 1
               NextFldBaseId = BaseId.substring(0, 7) + NextFldBaseId

               var NextFldCtrlId = '645' // Hear Give Next Fld Ctrl Id
               var ExpMsg = 'Select Value For: Proposed Training Action Plan(s)'   // Hear Give Next Fld Exp Messahe

                document.getElementById("BTN_" + NextFldBaseId).setAttribute("disabled", "disabled")
                document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "HideRow";
  
               if (document.getElementById(BaseId + "_" + CtrlId + "_0").checked == true) {
                  
                   document.getElementById("BTN_" + NextFldBaseId).removeAttribute("disabled")
                   document.getElementById("FLDLBL_" + NextFldBaseId + "_" + NextFldCtrlId).className = "MainTD";
                   
                   if (document.getElementById(NextFldBaseId + "_" + NextFldCtrlId).value == "") {
                       ExpMessage = ExpMessage + ExpMsg + '#*#';
                       ExpCtrlID = (NextFldBaseId + "_" + NextFldCtrlId) + '#*#'
                   }
               }
               else //if (document.getElementById(BaseId + "_" + CtrlId + "_1").checked == true) 
               {
                   document.getElementById(NextFldBaseId + "_" + NextFldCtrlId).setAttribute("value", "")
                   document.getElementById("Value_" + NextFldBaseId + "_" + NextFldCtrlId).setAttribute("className", "HideRow")
               }

               var idStr = BaseId + '_' + CtrlId
               setExpMessage(ExpMessage, ExpCtrlID, idStr)
      
      }
      //  **************  End Of uti Object  Ref Deselection Related Functions ********************//

      //*************To enable and disable EFM Row based on the plan type*****************//

      //case-1
      // var PlanTypeArr = new Array("Regulatory Related"); //provide the plan types for partail diabling the EFM row

      //case-2
      var PlanTypeArr = new Array()//keep the array empty for disabling the EFM row for all plans

      function makeFieldsEditable(cnt, PlanType, TT) {

          //case-3
          //Start comment the function body for enabling the EFM row for all plans
          if (TT != 3 && TT != 4) {
              flag = 0
              for (j = 0; j < PlanTypeArr.length; j++) {
                  if (PlanType == PlanTypeArr[j]) {
                      flag = 1;
                      break;
                  }


              }
              if (flag == 1 || PlanTypeArr.length == 0) {
                  for (i = 0; i < cnt; i++) {
                      document.getElementById("DurationTxt_" + i).setAttribute("readOnly", "readOnly");
                      document.getElementById("MonitiringDays_" + i).setAttribute("readOnly", "readOnly");

                  }
                  ExpDateButtonDisable()
              }
          }
          //End comment the function body for enabling the EFM row for all plans

      }
      function ExpDateButtonDisable() {

          obj = EftPlnTab.getElementsByTagName("input")

          for (i = 0; i < obj.length; i++) {

              if (obj[i].title == 'Click to pick date' && obj[i].type == 'button') {

                  obj[i].className = "HideRow"

              }

          }

      }



      //*************To enable and disable EFM Row based on the plan type*****************//

