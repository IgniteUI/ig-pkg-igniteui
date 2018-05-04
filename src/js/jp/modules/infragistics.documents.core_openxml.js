/*!@license
* Infragistics.Web.ClientUI infragistics.documents.core_openxml.js 18.1.20181.198
*
* Copyright (c) 2011-2018 Infragistics Inc.
*
* http://www.infragistics.com/
*
* Depends:
*     jquery-1.4.4.js
*     jquery.ui.core.js
*     jquery.ui.widget.js
*     infragistics.util.js
*     infragistics.ext_core.js
*     infragistics.ext_collections.js
*     infragistics.ext_collectionsExtended.js
*     infragistics.ext_io.js
*     infragistics.ext_text.js
*     infragistics.xml.js
*     infragistics.documents.core_core.js
*     infragistics.ext_ui.js
*/
/*!@license

JSZip - A Javascript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2014 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/master/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/master/LICENSE

The JSZip library included in this file has been modified by Infragistics
*/
/*!@license - SgmlReader
* 
* An XmlReader implementation for loading SGML (including HTML) converting it
* to well formed XML, by adding missing quotes, empty attribute values, ignoring
* duplicate attributes, case folding on tag names, adding missing closing tags
* based on SGML DTD information, and so on.
*
* Copyright (c) 2002 Microsoft Corporation. All rights reserved.
*
* Chris Lovett
* 
*
 * This software is being re-used under the Microsoft Public License (MS-PL):
 * -----------------------------------------------------------------------------
 * This license governs use of the accompanying software. If you use the software, you accept this license. If you do not accept the 
 * license, do not use the software.
 * 
 * 1. Definitions
 * The terms "reproduce," "reproduction," "derivative works," and "distribution" have the same meaning here as under U.S. copyright law.
 * A "contribution" is the original software, or any additions or changes to the software. A "contributor" is any person that distributes 
 * its contribution under this license. "Licensed patents" are a contributor's patent claims that read directly on its contribution.
 * 
 * 2. Grant of Rights
 * (A) Copyright Grant- Subject to the terms of this license, including the license conditions and limitations in section 3, each 
 *     contributor grants you a non-exclusive, worldwide, royalty-free copyright license to reproduce its contribution, prepare 
 *     derivative works of its contribution, and distribute its contribution or any derivative works that you create.
 * (B) Patent Grant- Subject to the terms of this license, including the license conditions and limitations in section 3, each 
 *     contributor grants you a non-exclusive, worldwide, royalty-free license under its licensed patents to make, have made, use, 
 *     sell, offer for sale, import, and/or otherwise dispose of its contribution in the software or derivative works of the contribution 
 *     in the software.
 * 
 * 3. Conditions and Limitations
 * (A) No Trademark License- This license does not grant you rights to use any contributors' name, logo, or trademarks.
 * (B) If you bring a patent claim against any contributor over patents that you claim are infringed by the software, your patent license 
 *     from such contributor to the software ends automatically.
 * (C) If you distribute any portion of the software, you must retain all copyright, patent, trademark, and attribution notices that are 
 *     present in the software.
 * (D) If you distribute any portion of the software in source code form, you may do so only under this license by including a complete 
 *     copy of this license with your distribution. If you distribute any portion of the software in compiled or object code form, you may 
 *     only do so under a license that complies with this license.
 * (E) The software is licensed "as-is." You bear the risk of using it. The contributors give no express warranties, guarantees or conditions. 
 *     You may have additional consumer rights under your local laws which this license cannot change. To the extent permitted under your 
 *     local laws, the contributors exclude the implied warranties of merchantability, fitness for a particular purpose and non-infringement.
 * -----------------------------------------------------------------------------
 * 
 * Note: edits have also been made to support namespace prefixes. Those changes are tagged with the following comment:
 * // MD - Added support for namespaces
 * 
 * In addition, the public classes have been made internal and the namespace has been changed from Sgml to 
 * Infragistics.Documents.Excel.Serialization.Excel2007.Sgml
 * 
 * Also, I updated the code to work with Silverlight and WinRT.
 * 
 * This code has been converted from C# to JavaScript
 */
(function(factory){if(typeof define==="function"&&define.amd){define(["./infragistics.util","./infragistics.ext_core","./infragistics.ext_collections","./infragistics.ext_collectionsExtended","./infragistics.ext_io","./infragistics.ext_text","./infragistics.xml","./infragistics.documents.core_core","./infragistics.ext_ui"],factory)}else{factory(igRoot)}})(function($){$.ig=$.ig||{};var $$t={};$.ig.documentsCore=$.ig.documentsCore||{};$.ig.globalDefs=$.ig.globalDefs||{};$.ig.globalDefs.$$ae=$$t;$$0=$.ig.globalDefs.$$0;$$4=$.ig.globalDefs.$$4;$$5=$.ig.globalDefs.$$5;$$7=$.ig.globalDefs.$$7;$$8=$.ig.globalDefs.$$8;$$2=$.ig.globalDefs.$$2;$$v=$.ig.globalDefs.$$v;$$6=$.ig.globalDefs.$$6;$$a=$.ig.globalDefs.$$a;$.ig.$currDefinitions=$$t;$.ig.util.bulkDefine(["CT_AbsoluteAnchor:b","CT_OneCellAnchor:d","CT_TwoCellAnchor:e","EG_Anchor:f","IEG_AnchorVisitor$2:g","SpreadsheetML2009Main:az","SpreadsheetMLMain:a0","AlternateContentChoice:bl","AttributeValue:bm","CT_GraphicalObject:bn","AlternateGraphicalObjectContent:bo","CT_BlipFillProperties:bt","CT_Connector:bz","CT_CustomGeometry2D:b2","CT_DashStopList:b4","CT_GraphicalObjectData:cb","CT_GraphicalObjectFrame:cc","CT_GroupFillProperties:cg","CT_GroupShape:ci","CT_LineJoinBevel:co","CT_LineJoinMiterProperties:cp","CT_LineJoinRound:cq","CT_NoFillProperties:cs","CT_Path2DArcTo:c1","CT_Path2DClose:c2","CT_Path2DCubicBezierTo:c3","CT_Path2DLineTo:c4","CT_Path2DMoveTo:c6","CT_Path2DQuadBezierTo:c7","CT_Picture:c9","CT_PresetGeometry2D:dg","CT_PresetLineDashProperties:dh","CT_RegularTextRun:di","CT_SchemeColor:dl","CT_Shape:dm","CT_SolidFillProperties:du","CT_SRgbColor:dv","CT_StretchInfoProperties:dw","CT_SysColor:dy","CT_TileInfoProperties:d6","EG_ColorChoice:d8","IEG_ColorChoice:d9","IEG_ColorChoiceVisitor$2:ea","IEG_ColorTransform:eb","IEG_ColorTransformVisitor$2:ec","IEG_FillModeProperties:ed","IEG_FillModePropertiesVisitor$2:ee","IEG_FillProperties:ef","IEG_FillPropertiesVisitor$2:eg","IEG_Geometry:eh","IEG_GeometryVisitor$2:ei","IEG_LineDashProperties:ej","IEG_LineDashPropertiesVisitor$2:ek","IEG_LineFillProperties:el","IEG_LineFillPropertiesVisitor$2:em","IEG_LineJoinProperties:en","IEG_LineJoinPropertiesVisitor$2:eo","IEG_TextRun:ep","IEG_TextRunVisitor$2:eq","IGraphicalObjectContent:er","IGraphicalObjectContentVisitor$2:es","IAdjustHandle:et","IPath2DCommand:eu","IPath2DCommandVisitor$2:ev","ICT_ShapePropertiesOwner:ew","ICT_ShapeStyleOwner:ex","IShapesOwner:ey","ColorTransform_Alpha:ez","ColorTransform_AlphaOff:e0","ColorTransform_AlphaMod:e1","ColorTransform_Blue:e2","ColorTransform_BlueOff:e3","ColorTransform_BlueMod:e4","ColorTransform_Comp:e5","ColorTransform_Gray:e6","ColorTransform_Green:e7","ColorTransform_GreenOff:e8","ColorTransform_GreenMod:e9","ColorTransform_Hue:fa","ColorTransform_HueOff:fb","ColorTransform_HueMod:fc","ColorTransform_Inv:fd","ColorTransform_Lum:fe","ColorTransform_LumOff:ff","ColorTransform_LumMod:fg","ColorTransform_Red:fh","ColorTransform_RedOff:fi","ColorTransform_RedMod:fj","ColorTransform_Sat:fk","ColorTransform_SatOff:fl","ColorTransform_SatMod:fm","ColorTransform_Shade:fn","ColorTransform_Tint:fo","ElementLoadCallbacks:fp","OfficeDocumentManager:fu","QualifiedNameInfo:fw","UnknownElementCache:fx","UnknownElementCache___GetDescendants__IteratorClass:fy","UnknownStructure:fz","XmlReadManager:f0","XmlReadManager_ElementContext:f3","XmlReadManager_LoadChildContext:f4","XmlReadManager_LoadFastContext:f5","XmlWriteManager:im","CoreProperties:io","DcDcmiType:ip","DcElements:iq","DcTerms:ir","Drawing2010Main:is","Drawing2010Slicer:it","DrawingMLChart:iu","DrawingMLMain:iv","DrawingNamespaceDefinitionBase:iw","EmptyNamespace:ix","IGOfficeExtensions:iy","MarkupCompatibility2006:iz","OfficeDocumentDocPropsVTypes:i0","IVariantValueContainer:i2","OfficeDocumentExtendedProperties:i4","OfficeDocumentRelationships:i5","OfficeNamespace:i6","VmlNamespace:i7","XmlNamespace:i8","XmlNamespaceDefinitionBase:i9","XmlSchemaInstance:jb","OfficeExtensibilityPartManagerBase:jn","Office2007ExtensibilityPartManager:jo","Office2010ExtensibilityPartManager:jp","PartManagerBase:jt","RoundTripDataPartManager:jw","ThemePartManager:jy","XmlPartManagerBase:j3","PackagePart:ka","Package:kb","ContentTypesWriter:kd","ElementDecl:kn","ContentModel:kp","Group:ks","SgmlDtd:kx"]);var $a=$.ig.intDivide,$b=$.ig.util.cast,$c=$.ig.util.defType,$d=$.ig.util.defEnum,$e=$.ig.util.getBoxIfEnum,$f=$.ig.util.getDefaultValue,$g=$.ig.util.getEnumValue,$h=$.ig.util.getValue,$i=$.ig.util.intSToU,$j=$.ig.util.nullableEquals,$k=$.ig.util.nullableIsNull,$l=$.ig.util.nullableNotEquals,$m=$.ig.util.toNullable,$n=$.ig.util.toString$1,$o=$.ig.util.u32BitwiseAnd,$p=$.ig.util.u32BitwiseOr,$q=$.ig.util.u32BitwiseXor,$r=$.ig.util.u32LS,$s=$.ig.util.unwrapNullable,$t=$.ig.util.wrapNullable,$u=String.fromCharCode,$v=$.ig.util.castObjTo$t,$w=$.ig.util.compare,$x=$.ig.util.replace,$y=$.ig.util.stringFormat,$z=$.ig.util.stringFormat1,$0=$.ig.util.stringFormat2,$1=$.ig.util.stringCompare1,$2=$.ig.util.stringCompare2,$3=$.ig.util.stringCompare3,$4=$.ig.util.equalsSimple,$5=$.ig.util.compareSimple,$6=$.ig.util.numberToString,$7=$.ig.util.tryParseInt32_1,$8=$.ig.util.tryParseInt32_2,$9=$.ig.util.intToString1,$aa=$.ig.util.parseInt32_1,$ab=$.ig.util.parseInt32_2,$ac=$.ig.util.parseBool,$ad=$.ig.util.tryParseBool,$ae=$.ig.util.parseUInt8_1,$af=$.ig.util.parseUInt8_2,$ag=$.ig.util.intToString,$ah=$.ig.util.tryParseNumber,$ai=$.ig.util.tryParseNumber1,$aj=$.ig.util.numberToString1,$ak=$.ig.util.parseNumber,$al=$.ig.util.isDigit,$am=$.ig.util.isDigit1,$an=$.ig.util.isLetter,$ao=$.ig.util.isNumber,$ap=$.ig.util.isLetterOrDigit,$aq=$.ig.util.isLower,$ar=$.ig.util.toLowerCase,$as=$.ig.util.toUpperCase;$d("ST_DataBarAxisPosition:av",false,false,{automatic:0,middle:1,none:2});$d("ST_DataBarDirection:au",false,false,{context:0,leftToRight:1,rightToLeft:2});$d("ST_Visibility:at",false,false,{visible:0,hidden:1,veryHidden:2});$d("ST_VerticalAlignment:as",false,false,{top:0,center:1,bottom:2,justify:3,distributed:4});$d("ST_UpdateLinks:ar",false,false,{userSet:0,never:1,always:2});$d("ST_UnderlineValues:aq",false,false,{_single:0,_double:1,singleAccounting:2,doubleAccounting:3,none:4});$d("ST_TimePeriod:ap",false,false,{today:0,yesterday:1,tomorrow:2,last7Days:3,thisMonth:4,lastMonth:5,nextMonth:6,thisWeek:7,lastWeek:8,nextWeek:9});$d("ST_TableType:ao",false,false,{worksheet:0,xml:1,queryTable:2});$d("ST_SortMethod:an",false,false,{none:0,pinYin:1,stroke:2});$d("ST_SheetViewType:am",false,false,{normal:0,pageBreakPreview:1,pageLayout:2});$d("ST_SheetState:al",false,false,{visible:0,hidden:1,veryHidden:2});$d("ST_RefMode:ak",false,false,{A1:0,R1C1:1});$d("ST_PrintError:aj",false,false,{displayed:0,blank:1,dash:2,NA:3});$d("ST_PatternType:ai",false,false,{none:0,solid:1,mediumGray:2,darkGray:3,lightGray:4,darkHorizontal:5,darkVertical:6,darkDown:7,darkUp:8,darkGrid:9,darkTrellis:10,lightHorizontal:11,lightVertical:12,lightDown:13,lightUp:14,lightGrid:15,lightTrellis:16,gray125:17,gray0625:18});$d("ST_PaneState:ah",false,false,{split:0,frozen:1,frozenSplit:2});$d("ST_Pane:ag",false,false,{bottomRight:0,topRight:1,bottomLeft:2,topLeft:3});$d("ST_PageOrder:af",false,false,{downThenOver:0,overThenDown:1});$d("ST_Orientation:ae",false,false,{_default:0,portrait:1,landscape:2});$d("ST_ObjectType:ad",false,false,{Button:0,Checkbox:1,Dialog:2,Drop:3,Edit:4,GBox:5,Label:6,LineA:7,List:8,Movie:9,Note:10,Pict:11,Radio:12,RectA:13,Scroll:14,Spin:15,Shape:16,Group:17,Rect:18});$d("ST_Objects:ac",false,false,{all:0,placeholders:1,none:2});$d("ST_HorizontalAlignment:ab",false,false,{general:0,left:1,center:2,right:3,fill:4,justify:5,centerContinuous:6,distributed:7});$d("ST_GradientType:z",false,false,{linear:0,path:1});$d("ST_FontScheme:y",false,false,{none:0,major:1,minor:2});$d("ST_EditAs:x",false,false,{twoCell:0,oneCell:1,absolute:2});$d("ST_DataValidationType:w",false,false,{none:0,whole:1,_decimal:2,list:3,date:4,time:5,textLength:6,custom:7});$d("ST_DataValidationOperator:v",false,false,{between:0,notBetween:1,equal:2,notEqual:3,lessThan:4,lessThanOrEqual:5,greaterThan:6,greaterThanOrEqual:7});$d("ST_DataValidationImeMode:u",false,false,{noControl:0,off:1,on:2,disabled:3,hiragana:4,fullKatakana:5,halfKatakana:6,fullAlpha:7,halfAlpha:8,fullHangul:9,halfHangul:10});$d("ST_DataValidationErrorStyle:t",false,false,{stop:0,warning:1,information:2});$d("ST_ConditionalFormattingOperator:s",false,false,{lessThan:0,lessThanOrEqual:1,equal:2,notEqual:3,greaterThanOrEqual:4,greaterThan:5,between:6,notBetween:7,containsText:8,notContains:9,beginsWith:10,endsWith:11});$d("ST_Comments:r",false,false,{commNone:0,commIndicator:1,commIndAndComment:2});$d("ST_CfvoType:q",false,false,{num:0,percent:1,max:2,min:3,formula:4,percentile:5,autoMin:6,autoMax:7});$d("ST_CfType:p",false,false,{expression:0,cellIs:1,colorScale:2,dataBar:3,iconSet:4,top10:5,uniqueValues:6,duplicateValues:7,containsText:8,notContainsText:9,beginsWith:10,endsWith:11,containsBlanks:12,notContainsBlanks:13,containsErrors:14,notContainsErrors:15,timePeriod:16,aboveAverage:17});$d("ST_CellFormulaType:o",false,false,{normal:0,array:1,dataTable:2,shared:3});$d("ST_CellComments:n",false,false,{none:0,asDisplayed:1,atEnd:2});$d("ST_CalendarType:m",false,false,{gregorian:0,gregorianArabic:1,gregorianMeFrench:2,gregorianUs:3,gregorianXlitEnglish:4,gregorianXlitFrench:5,hebrew:6,hijri:7,japan:8,korea:9,none:10,saka:11,taiwan:12,thai:13});$d("ST_CalcMode:l",false,false,{manual:0,auto:1,autoNoTable:2});$d("ST_BorderStyle:k",false,false,{none:0,thin:1,medium:2,dashed:3,dotted:4,thick:5,_double:6,hair:7,mediumDashed:8,dashDot:9,mediumDashDot:10,dashDotDot:11,mediumDashDotDot:12,slantDashDot:13});$d("XmlNamespaceDefinitionBase_PreserveSpaceMode:ja",true,false,{None:0,HonorLeadingWhitespace:2,HonorTrailingWhitespace:4,HonorBoth:6});$d("ST_VerticalAlignRun:il",false,false,{baseline:0,superscript:1,subscript:2});$d("ST_VectorBaseType:ik",false,false,{variant:0,i1:1,i2:2,i4:3,i8:4,ui1:5,ui2:6,ui4:7,ui8:8,r4:9,r8:10,lpstr:11,lpwstr:12,bstr:13,date:14,filetime:15,_bool:16,cy:17,error:18,clsid:19});$d("ST_TileFlipMode:ib",false,false,{none:0,x:1,y:2,xy:3});$d("ST_TextWrappingType:ia",false,false,{none:0,square:1});$d("ST_TextVertOverflowType:h9",false,false,{overflow:0,ellipsis:1,clip:2});$d("ST_TextVerticalType:h8",false,false,{horz:0,vert:1,vert270:2,wordArtVert:3,eaVert:4,mongolianVert:5,wordArtVertRtl:6});$d("ST_TextUnderlineType:h7",false,false,{none:0,words:1,sng:2,dbl:3,heavy:4,dotted:5,dottedHeavy:6,dash:7,dashHeavy:8,dashLong:9,dashLongHeavy:10,dotDash:11,dotDashHeavy:12,dotDotDash:13,dotDotDashHeavy:14,wavy:15,wavyHeavy:16,wavyDbl:17});$d("ST_TextStrikeType:h6",false,false,{noStrike:0,sngStrike:1,dblStrike:2});$d("ST_TextHorzOverflowType:h0",false,false,{overflow:0,clip:1});$d("ST_TextFontAlignType:hy",false,false,{auto:0,t:1,ctr:2,_base:3,b:4});$d("ST_TextCapsType:hx",false,false,{none:0,small:1,all:2});$d("ST_TextAnchoringType:hw",false,false,{t:0,ctr:1,b:2,just:3,dist:4});$d("ST_TextAlignType:hv",false,false,{l:0,ctr:1,r:2,just:3,justLow:4,dist:5,thaiDist:6});$d("ST_SystemColorVal:hu",false,false,{activeBorder:0,activeCaption:1,captionText:2,appWorkspace:3,btnFace:4,_3dDkShadow:5,btnShadow:6,_3dLight:7,btnHighlight:8,btnText:9,background:10,gradientActiveCaption:11,gradientInactiveCaption:12,grayText:13,highlight:14,highlightText:15,hotLight:16,inactiveBorder:17,inactiveCaption:18,inactiveCaptionText:19,infoText:20,infoBk:21,menu:22,menuBar:23,menuHighlight:24,menuText:25,scrollBar:26,window:27,windowFrame:28,windowText:29});$d("ST_StrokeLineStyle:ht",false,false,{single:0,thinThin:1,thinThick:2,thickThin:3,thickBetweenThin:4});$d("ST_StrokeJoinStyle:hs",false,false,{round:0,bevel:1,miter:2});$d("ST_StrokeEndCap:hr",false,false,{flat:0,square:1,round:2});$d("ST_StrokeArrowWidth:hq",false,false,{narrow:0,medium:1,wide:2});$d("ST_StrokeArrowType:hp",false,false,{none:0,block:1,classic:2,oval:3,diamond:4,open:5});$d("ST_StrokeArrowLength:ho",false,false,{_short:0,medium:1,_long:2});$d("ST_ShadowType:hl",false,false,{single:0,_double:1,emboss:2,perspective:3});$d("ST_SchemeColorVal:hk",false,false,{bg1:0,tx1:1,bg2:2,tx2:3,accent1:4,accent2:5,accent3:6,accent4:7,accent5:8,accent6:9,hlink:10,folHlink:11,phClr:12,dk1:13,lt1:14,dk2:15,lt2:16});$d("ST_RectAlignment:hj",false,false,{tl:0,t:1,tr:2,l:3,ctr:4,r:5,bl:6,b:7,br:8});$d("ST_PresetPatternVal:hi",false,false,{pct5:0,pct10:1,pct20:2,pct25:3,pct30:4,pct40:5,pct50:6,pct60:7,pct70:8,pct75:9,pct80:10,pct90:11,horz:12,vert:13,ltHorz:14,ltVert:15,dkHorz:16,dkVert:17,narHorz:18,narVert:19,dashHorz:20,dashVert:21,cross:22,dnDiag:23,upDiag:24,ltDnDiag:25,ltUpDiag:26,dkDnDiag:27,dkUpDiag:28,wdDnDiag:29,wdUpDiag:30,dashDnDiag:31,dashUpDiag:32,diagCross:33,smCheck:34,lgCheck:35,smGrid:36,lgGrid:37,dotGrid:38,smConfetti:39,lgConfetti:40,horzBrick:41,diagBrick:42,solidDmnd:43,openDmnd:44,dotDmnd:45,plaid:46,sphere:47,weave:48,divot:49,shingle:50,wave:51,trellis:52,zigZag:53});$d("ST_PresetLineDashVal:hh",false,false,{solid:0,dot:1,dash:2,lgDash:3,dashDot:4,lgDashDot:5,lgDashDotDot:6,sysDash:7,sysDot:8,sysDashDot:9,sysDashDotDot:10});$d("ST_PenAlignment:ha",false,false,{ctr:0,_in:1});$d("ST_PathFillMode:g9",false,false,{none:0,norm:1,lighten:2,lightenLess:3,darken:4,darkenLess:5});$d("ST_LineEndType:g3",false,false,{none:0,triangle:1,stealth:2,diamond:3,oval:4,arrow:5});$d("ST_LineEndWidth:g2",false,false,{sm:0,med:1,lg:2});$d("ST_LineEndLength:g1",false,false,{sm:0,med:1,lg:2});$d("ST_LineCap:g0",false,false,{rnd:0,sq:1,flat:2});$d("ST_InsetMode:gz",false,false,{auto:0,custom:1});$d("ST_ImageAspect:gy",false,false,{ignore:0,atMost:1,atLeast:2});$d("ST_HrAlign:gx",false,false,{left:0,right:1,center:2});$d("ST_FontCollectionIndex:gr",false,false,{major:0,minor:1,none:2});$d("ST_FillType:go",false,false,{gradientCenter:0,solid:1,pattern:2,tile:3,frame:4,gradientUnscaled:5,gradientRadial:6,gradient:7,background:8});$d("ST_FillMethod:gn",false,false,{none:0,linear:1,sigma:2,any:3,linearsigma:4});$d("ST_Ext:gm",false,false,{view:0,edit:1,backwardCompatible:2});$d("ST_ConnectType:gf",false,false,{none:0,rect:1,segments:2,custom:3});$d("ST_ConnectorType:ge",false,false,{none:0,straight:1,elbow:2,curved:3});$d("ST_ConformanceClass:gd",false,false,{transitional:0,strict:1});$d("ST_CompoundLine:gc",false,false,{sng:0,dbl:1,thickThin:2,thinThick:3,tri:4});$d("ST_CF:gb",false,false,{PictOld:0,Pict:1,Bitmap:2,PictPrint:3,PictScreen:4});$d("ST_BWMode:ga",false,false,{color:0,auto:1,grayScale:2,lightGrayscale:3,inverseGray:4,grayOutline:5,highContrast:6,black:7,white:8,hide:9,undrawn:10,blackTextAndLines:11});$d("ST_BlipCompression:f9",false,false,{none:0,email:1,hqprint:2,print:3,screen:4});$d("ST_BlackWhiteMode:f8",false,false,{clr:0,auto:1,gray:2,ltGray:3,invGray:4,grayWhite:5,blackGray:6,blackWhite:7,black:8,white:9,hidden:10});$d("XmlReadManager_AlternateContentStatus:f2",false,false,{NotInAlternateContent:0,InAlternateContentPendingAcceptableChoice:1,InAlternateContentChoiceAccepted:2});$d("UnknownElementAction:ft",false,false,{Ignore:0,CacheXml:1,CacheStructure:2,LoadChildrenNormally:3});$d("ShapeType:fs",false,false,{NotPrimitive:0,Rectangle:1,RoundRectangle:2,Ellipse:3,Diamond:4,IsocelesTriangle:5,RightTriangle:6,Parallelogram:7,Trapezoid:8,Hexagon:9,Octagon:10,Plus:11,Star:12,Arrow:13,ThickArrow:14,HomePlate:15,Cube:16,Balloon:17,Seal:18,Arc:19,Line:20,Plaque:21,Can:22,Donut:23,TextSimple:24,TextOctagon:25,TextHexagon:26,TextCurve:27,TextWave:28,TextRing:29,TextOnCurve:30,TextOnRing:31,StraightConnector1:32,BentConnector2:33,BentConnector3:34,BentConnector4:35,BentConnector5:36,CurvedConnector2:37,CurvedConnector3:38,CurvedConnector4:39,CurvedConnector5:40,Callout1:41,Callout2:42,Callout3:43,AccentCallout1:44,AccentCallout2:45,AccentCallout3:46,BorderCallout1:47,BorderCallout2:48,BorderCallout3:49,AccentBorderCallout1:50,AccentBorderCallout2:51,AccentBorderCallout3:52,Ribbon:53,Ribbon2:54,Chevron:55,Pentagon:56,NoSmoking:57,Seal8:58,Seal16:59,Seal32:60,WedgeRectCallout:61,WedgeRRectCallout:62,WedgeEllipseCallout:63,Wave:64,FoldedCorner:65,LeftArrow:66,DownArrow:67,UpArrow:68,LeftRightArrow:69,UpDownArrow:70,IrregularSeal1:71,IrregularSeal2:72,LightningBolt:73,Heart:74,PictureFrame:75,QuadArrow:76,LeftArrowCallout:77,RightArrowCallout:78,UpArrowCallout:79,DownArrowCallout:80,LeftRightArrowCallout:81,UpDownArrowCallout:82,QuadArrowCallout:83,Bevel:84,LeftBracket:85,RightBracket:86,LeftBrace:87,RightBrace:88,LeftUpArrow:89,BentUpArrow:90,BentArrow:91,Seal24:92,StripedRightArrow:93,NotchedRightArrow:94,BlockArc:95,SmileyFace:96,VerticalScroll:97,HorizontalScroll:98,CircularArrow:99,NotchedCircularArrow:100,UturnArrow:101,CurvedRightArrow:102,CurvedLeftArrow:103,CurvedUpArrow:104,CurvedDownArrow:105,CloudCallout:106,EllipseRibbon:107,EllipseRibbon2:108,FlowChartProcess:109,FlowChartDecision:110,FlowChartInputOutput:111,FlowChartPredefinedProcess:112,FlowChartInternalStorage:113,FlowChartDocument:114,FlowChartMultidocument:115,FlowChartTerminator:116,FlowChartPreparation:117,FlowChartManualInput:118,FlowChartManualOperation:119,FlowChartConnector:120,FlowChartPunchedCard:121,FlowChartPunchedTape:122,FlowChartSummingJunction:123,FlowChartOr:124,FlowChartCollate:125,FlowChartSort:126,FlowChartExtract:127,FlowChartMerge:128,FlowChartOfflineStorage:129,FlowChartOnlineStorage:130,FlowChartMagneticTape:131,FlowChartMagneticDisk:132,FlowChartMagneticDrum:133,FlowChartDisplay:134,FlowChartDelay:135,TextPlainText:136,TextStop:137,TextTriangle:138,TextTriangleInverted:139,TextChevron:140,TextChevronInverted:141,TextRingInside:142,TextRingOutside:143,TextArchUpCurve:144,TextArchDownCurve:145,TextCircleCurve:146,TextButtonCurve:147,TextArchUpPour:148,TextArchDownPour:149,TextCirclePour:150,TextButtonPour:151,TextCurveUp:152,TextCurveDown:153,TextCascadeUp:154,TextCascadeDown:155,TextWave1:156,TextWave2:157,TextWave3:158,TextWave4:159,TextInflate:160,TextDeflate:161,TextInflateBottom:162,TextDeflateBottom:163,TextInflateTop:164,TextDeflateTop:165,TextDeflateInflate:166,TextDeflateInflateDeflate:167,TextFadeRight:168,TextFadeLeft:169,TextFadeUp:170,TextFadeDown:171,TextSlantUp:172,TextSlantDown:173,TextCanUp:174,TextCanDown:175,FlowChartAlternateProcess:176,FlowChartOffpageConnector:177,Callout90:178,AccentCallout90:179,BorderCallout90:180,AccentBorderCallout90:181,LeftRightUpArrow:182,Sun:183,Moon:184,BracketPair:185,BracePair:186,Seal4:187,DoubleWave:188,ActionButtonBlank:189,ActionButtonHome:190,ActionButtonHelp:191,ActionButtonInformation:192,ActionButtonForwardNext:193,ActionButtonBackPrevious:194,ActionButtonEnd:195,ActionButtonBeginning:196,ActionButtonReturn:197,ActionButtonDocument:198,ActionButtonSound:199,ActionButtonMovie:200,HostControl:201,TextBox:202});$d("OverwriteRoundTripDataResult:fr",false,false,{NothingWritten:0,ElementStartWritten:1,ElementAndDescendantsWritten:2});$d("OfficeApplication:fq",false,false,{Excel:0,Word:1,PowerPoint:2});$d("State:k3",false,false,{Initial:0,Markup:1,EndTag:2,Attr:3,AttrValue:4,Text:5,PartialTag:6,AutoClose:7,CData:8,PartialText:9,PseudoStartTag:10,Eof:11});$d("CaseFolding:kz",false,false,{None:0,ToUpper:1,ToLower:2});$d("AttributePresence:ku",false,false,{DEFAULT:0,FIXED:1,REQUIRED:2,IMPLIED:3});$d("AttributeType:kt",false,false,{DEFAULT:0,CDATA:1,ENTITY:2,ENTITIES:3,ID:4,IDREF:5,IDREFS:6,NAME:7,NAMES:8,NMTOKEN:9,NMTOKENS:10,NUMBER:11,NUMBERS:12,NUTOKEN:13,NUTOKENS:14,NOTATION:15,ENUMERATION:16});$d("Occurrence:kr",false,false,{Required:0,Optional:1,ZeroOrMore:2,OneOrMore:3});$d("GroupType:kq",false,false,{None:0,And:1,Or:2,Sequence:3});$d("DeclaredContent:ko",false,false,{"Default:$default":0,CDATA:1,RCDATA:2,EMPTY:3});$d("LiteralType:kh",false,false,{CDATA:0,SDATA:1,PI:2});$c("AssemblyRef:a","Object",{init:function(){$.ig.$op.init.call(this)},$type:new $.ig.Type("AssemblyRef",$.ig.$ot)},true);$c("Entity:ki","Object",{v:null,u:null,e:false,w:null,aa:null,t:null,c:0,b:null,d:false,n:0,j:"\0",g:false,ab:null,ad:null,q:null,h:false,p:0,m:0,init:function(a,b,c,d,e){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break;case 2:this.init2.apply(this,arguments);break}return}$.ig.$op.init.call(this);this.u=b;this.w=c;this.aa=d;this.v=e;this.d=b!=null&&$$t.$ky.a(b,"html")},init1:function(a,b,c){$.ig.$op.init.call(this);this.u=b;this.t=c;this.e=true},init2:function(a,b,c,d,e){$.ig.$op.init.call(this);this.u=b;this.e=true;this.q=d;this.ad=c;this.v=e;this.d=$1(b,"html",$$v.$ao.g())==0},ae:function(){if(this.ad!=null){return this.ad}else if(this.b!=null){return this.b.ae()}return null},o:function(){return this.m-this.p+1},k:function(){var a=$u(this.q.read());if(a.charCodeAt(0)==0){a=" "}this.m++;if(a.charCodeAt(0)==10){this.g=true;this.p=this.m+1;this.n++}else if(a==" "||a=="\t"){this.g=true;if(this.j.charCodeAt(0)==13){this.p=this.m;this.n++}}else if(a.charCodeAt(0)==13){this.g=true}else{this.g=false;if(this.j.charCodeAt(0)==13){this.n++;this.p=this.m}}this.j=a;return a},ak:function(a,b){this.b=a;if(a!=null){this.d=a.d}this.n=1;if(this.e){if(this.t!=null){this.q=new $$2.ba(this.t)}}else if(this.aa==null){this.aj("Unresolvable entity '{0}'",this.u)}else{this.aj("Unresolvable entity '{0}'",this.u)}},ac:function(){return this.ab},af:function(){if(this.h){this.q.close()}},l:function(){var a=this.j;while(a!="\uffff"&&(a==" "||a=="\r"||a=="\n"||a=="\t")){a=this.k()}return a},z:function(a,b,c){a.c(0);var d=this.j;if(c&&d!="_"&&!$an(d)){throw new $$0.n(1,$y("Invalid name start character '{0}'",d))}while(d!="\uffff"&&b.indexOf(d)<0){if(!c||d=="_"||d=="."||d=="-"||d==":"||$ap(d)){a.h(d)}else{throw new $$0.n(1,$y("Invalid name character '{0}'",d))}d=this.k()}return a.toString()},x:function(a,b){a.c(0);var c=this.k();while(c!="\uffff"&&c!=b){if(c=="&"){c=this.k();if(c=="#"){var d=this.s();a.l(d);c=this.j}else{a.h("&");a.h(c);c=this.k()}}else{a.h(c);c=this.k()}}this.k();return a.toString()},y:function(a,b,c){if(a!=null){a.c(0)}var d=this.n;var e=this.k();var f=0;var g=c.charAt(f);while(e!="\uffff"){if(e==g){f++;if(f>=c.length){break}g=c.charAt(f)}else if(f>0){var h=f-1;var i=0;while(h>=0&&i==0){if(c.charAt(h)==e){var j=1;while(h-j>=0){if(c.charAt(h-j)!=c.charAt(f-j)){break}j++}if(j>h){i=h+1}}else{h--}}if(a!=null){h=h<0?1:0;for(var k=0;k<=f-i-h;k++){a.h(c.charAt(k))}if(h>0){a.h(e)}}f=i;g=c.charAt(i)}else{if(a!=null){a.h(e)}}e=this.k()}if(e.charCodeAt(0)==0){this.ai(b+" starting on line {0} was never closed",d)}this.k();if(a!=null){return a.toString()}return""},s:function(){var a=this.k();var b=0;if(a=="x"){a=this.k();for(;a!="\uffff"&&a!=";";a=this.k()){var c=0;if(a.charCodeAt(0)>="0".charCodeAt(0)&&a.charCodeAt(0)<="9".charCodeAt(0)){c=a.charCodeAt(0)-"0".charCodeAt(0)}else if(a.charCodeAt(0)>="a".charCodeAt(0)&&a.charCodeAt(0)<="f".charCodeAt(0)){c=a.charCodeAt(0)-"a".charCodeAt(0)+10}else if(a.charCodeAt(0)>="A".charCodeAt(0)&&a.charCodeAt(0)<="F".charCodeAt(0)){c=a.charCodeAt(0)-"A".charCodeAt(0)+10}else{break}b=b*16+c}}else{for(;a!="\uffff"&&a!=";";a=this.k()){if(a.charCodeAt(0)>="0".charCodeAt(0)&&a.charCodeAt(0)<="9".charCodeAt(0)){b=b*10+(a.charCodeAt(0)-"0".charCodeAt(0))}else{break}}}if(a.charCodeAt(0)==0){this.ah("Premature {0} parsing entity reference",a)}else if(a==";"){this.k()}if(this.d&&b>=128&b<=159){var d=$$t.$ki.a.length;var e=b-128;var f=$$t.$ki.a[e];return $$6.$g.toChar1(f).toString()}return $$6.$g.toChar1(b).toString()},ag:function(a){throw new $$0.n(1,a)},ah:function(a,b){var c=b=="\uffff"?"EOF":$$0.$as.toString1(b);throw new $$0.n(1,$y(a,c))},ai:function(a,b){throw new $$0.n(1,$y(a,b))},aj:function(a,b){throw new $$0.n(1,$y(a,b))},r:function(){var a=this;var b=new $$6.aj(0);while(a!=null){var c;if(a.e){c=$y("\nReferenced on line {0}, position {1} of internal entity '{2}'",a.n,a.o(),a.u)}else{c=$z("\nReferenced on line {0}, position {1} of '{2}' entity at [{3}]",[a.n,a.o(),a.u,a.ae().absolutePath()])}b.l(c);a=a.b}return b.toString()},f:function(a){return a=="CDATA"||a=="SDATA"||a=="PI"},al:function(a){switch(a){case"CDATA":this.c=0;break;case"SDATA":this.c=1;break;case"PI":this.c=2;break}},$type:new $.ig.Type("Entity",$.ig.$ot)},true);$c("HtmlStream:kj","TextReader",{_x:null,_l:null,_r:0,_s:0,_ah:null,_ae:null,_k:null,_v:0,_q:0,init:function(a,b){var $self=this;$$7.$g.init.call(this);if(b==null){b=$$8.$a.uTF8()}if(!a.canSeek()){a=this._w(a)}this._x=a;this._l=new Array(16384);this._s=a.read(this._l,0,4);this._k=new Array(16384);this._ae=function(){var c=$$t.$kj._ad($self._l,$self._r,$self._s);$self._r=c.p1;return c.ret}();var c=this._r;if(this._ae==null){this._ae=b.getDecoder();this._s+=a.read(this._l,4,16384-4);this._aj();var d=this._af();if(d!=null){this._ae=d}}this._x.seek(0,0);this._q=this._v=0;if(c>0){a.read(this._l,0,c)}this._r=this._s=0},_encoding:function(){return this._ah},_w:function(a){var b=1e5;var c=new Array(b);var d;var e=new $$7.e(0);while((d=a.read(c,0,b))>0){e.write(c,0,d)}e.seek(0,0);a.dispose();return e},_aj:function(){if(this._q>0){if(this._q<this._v){$.ig.util.arrayCopy1(this._k,this._q,this._k,0,this._v-this._q)}this._v-=this._q;this._q=0}var a=this._ae.a(this._l,this._r,this._s-this._r);var b=this._k.length-this._v;if(b<a){var c=new Array(this._k.length+a);$.ig.util.arrayCopy1(this._k,this._q,c,0,this._v-this._q);this._k=c}this._v=this._q+this._ae.c(this._l,this._r,this._s-this._r,this._k,this._q);this._r=this._s},_ad:function(a,b,c){if(4<=c-b){var d=$p($p($p($r(a[b+0],24),$r(a[b+1],16)),$r(a[b+2],8)),a[b+3]);var t1=d;L0:while(true){switch(t1){case 4278189823:b+=4;return{ret:new $$t.kl,p1:b};case 4294901758:b+=4;return{ret:new $$t.km,p1:b};case 1006632960:t1=4278189823;continue L0;case 60:t1=4294901758;continue L0}break}d>>>=8;if(d==15711167){b+=3;return{ret:$$8.$a.uTF8().getDecoder(),p1:b}}d>>>=8;var t1=d;L0:while(true){switch(t1){case 65279:b+=2;return{ret:$$8.$b.bigEndianUnicode().getDecoder(),p1:b};case 65534:b+=2;return{ret:new $$8.b(1,false,false).getDecoder(),p1:b};case 15360:t1=65279;continue L0;case 60:t1=65534;continue L0}break}}return{ret:null,p1:b}},_t:function(){if(this._q<this._v){return this._k[this._q++].charCodeAt(0)}return-1},_p:function(){var a=this._t();if(a!=-1){this._q--}return a},_m:function(a){var b=this._p();if(b!=a.charAt(0).charCodeAt(0)){return false}for(var c=0,d=a.length;b!=-1&&c<d;c++){b=this._t();var e=a.charAt(c);if(b!=e.charCodeAt(0)){return false}}return true},_an:function(){var a=$u(this._p());while(a==" "||a=="\t"||a=="\r"||a=="\n"){var b=this._q;a=$u(this._t());if(a!=" "&&a!="\t"&&a!="\r"&&a!="\n"){this._q=b}}},_ab:function(){var a=this._p();if(a=="'".charCodeAt(0)||a=='"'.charCodeAt(0)){this._t();var b=this._q;var c=this._t();while(c!=-1&&c!=a){c=this._t()}return this._q>b?$.ig.util.createString3(this._k,b,this._q-b-1):""}return null},_z:function(a){this._an();var b=this._ac();if(a==b){this._an();if(this._m("=")){this._an();return this._ab()}}return null},_aa:function(a){this._an();a=this._ac();if(a!=null){this._an();if(this._m("=")){this._an();return{ret:this._ab(),p0:a}}}return{ret:null,p0:a}},_am:function(a){var b=this._t();var c=0;var d=a.length;while(c<d&&b!=-1){if(a.charAt(c).charCodeAt(0)==b){c++;if(c==d){break}}else{c=0}b=this._t()}},_af:function(){var a=null;if(this._m("<?xml")){var b=this._z("version");if(b!=null){var c=this._z("encoding");if(c!=null){try{var d=$$8.$a.getEncoding(c);if(d!=null){this._ah=d;return d.getDecoder()}}catch(e){}}this._am(">")}}if(a==null){return this._ag()}return null},_ag:function(){var $self=this;var a=this._t();while(a!=-1){var b=$u(a);if(b=="<"){var c=this._ac();if(c!=null&&$$t.$ky.a(c,"meta")){var d=null;var e=null;while(true){var f=function(){var g=$self._aa(c);c=g.p0;return g.ret}();if(c==null){break}if($$t.$ky.a(c,"http-equiv")){d=f}else if($$t.$ky.a(c,"content")){e=f}}if(d!=null&&$$t.$ky.a(d,"content-type")&&e!=null){var g=e.indexOf("charset");if(g>=0){g=e.indexOf("=",g);if(g>=0){g++;var h=e.indexOf(";",g);if(h<0){h=e.length}var i=e.substr(g,h-g).trim([]);try{var j=$$8.$a.getEncoding(i);this._ah=j;return j.getDecoder()}catch(k){}}}}}}a=this._t()}return null},_ac:function(){var a=this._p();if(a==-1){return null}var b=$u(a);var c=this._q;while(this._q<this._v-1&&($ap(b)||b=="-"||b=="_"||b==":")){b=this._k[++this._q]}if(c==this._q){return null}return $.ig.util.createString3(this._k,c,this._q-c)},_al:function(){var a=$u(this._p());while(this._q<this._v-1&&(a==" "||a=="\r"||a=="\n")){a=this._k[++this._q]}},_ak:function(a){var b=$u(this._p());while(this._q<this._v-1&&b!=a){b=this._k[++this._q]}},_y:function(){this._ak("=");if(this._q<this._v){this._q++;this._al();if(this._q<this._v){var a=this._k[this._q];this._q++;var b=this._q;this._ak(a);if(this._q<this._v){var c=$.ig.util.createString3(this._k,b,this._q-b);this._q++;return c}}}return null},peek:function(){var a=this.read();if(a!=-1){this._q--}return a},read:function(){if(this._q==this._v){this._s=this._x.read(this._l,0,this._l.length);this._r=0;if(this._s==0){return-1}this._aj()}if(this._q<this._v){return this._k[this._q++].charCodeAt(0)}return-1},read1:function(a,b,c){if(this._q==this._v){this._s=this._x.read(this._l,0,this._l.length);this._r=0;if(this._s==0){return-1}this._aj()}if(this._q<this._v){c=Math.min(this._v-this._q,c);$.ig.util.arrayCopy1(this._k,this._q,a,b,c);this._q+=c;return c}return 0},readBlock:function(a,b,c){return this.read1(a,b,c)},_readLine1:function(a,b,c){var d=0;var e=this._t();while(e!=-1){a[d+b]=$u(e);d++;if(d+b==c){break}if(e=="\r".charCodeAt(0)){if(this._p()=="\n".charCodeAt(0)){e=this._t();a[d+b]=$u(e);d++}break}else if(e=="\n".charCodeAt(0)){break}e=this._t()}return d},readToEnd:function(){var a=new Array(1e5);var b=0;var c=new $$6.aj(0);while((b=this.read1(a,0,a.length))>0){c.g(a,0,b)}return c.toString()},dispose1:function(a){if(a){this._x.dispose()}},$type:new $.ig.Type("HtmlStream",$$7.$g.$type)},true);$c("Ucs4Decoder:kk","Decoder",{init:function(){this._g=new Array(4);this._j=0;$$8.$e.init.call(this)},_g:null,_j:0,a:function(a,b,c){return $a(c+this._j,4)},_i:function(a,b,c,d,e){},c:function(a,b,c,d,e){var f=this._j;if(this._j>0){for(;f<4;f++){this._g[f]=a[b];b++;c--}f=1;this._i(this._g,0,4,d,e);e++}else{f=0}f=this._i(a,b,c,d,e)+f;var g=(this._j+c)%4;c+=b;b=c-g;this._j=0;if(b>=0){for(;b<c;b++){this._g[this._j]=a[b];this._j++}}return f},_h:function(a){var b,c;b=55232+(a>>>10);c=$p(56320,a&1023);return $u(c<<8|b)},$type:new $.ig.Type("Ucs4Decoder",$$8.$e.$type)},true);$c("Ucs4DecoderBigEngian:kl","Ucs4Decoder",{init:function(){$$t.$kk.init.call(this)},_i:function(a,b,c,d,e){var f;var g,h;c+=b;for(g=b,h=e;g+3<c;){f=$i(a[g+3]<<24|a[g+2]<<16|a[g+1]<<8|a[g]);if(f>1114111){throw new $$0.n(1,"Invalid character 0x"+$9(f,"x",null)+" in encoding")}else if(f>65535){d[h]=this._h(f);h++}else{if(f>=55296&&f<=57343){throw new $$0.n(1,"Invalid character 0x"+$9(f,"x",null)+" in encoding")}else{d[h]=$u(f)}}h++;g+=4}return h-e},$type:new $.ig.Type("Ucs4DecoderBigEngian",$$t.$kk.$type)},true);$c("Ucs4DecoderLittleEndian:km","Ucs4Decoder",{init:function(){$$t.$kk.init.call(this)},_i:function(a,b,c,d,e){var f;var g,h;c+=b;for(g=b,h=e;g+3<c;){f=$i(a[g]<<24|a[g+1]<<16|a[g+2]<<8|a[g+3]);if(f>1114111){throw new $$0.n(1,"Invalid character 0x"+$9(f,"x",null)+" in encoding")}else if(f>65535){d[h]=this._h(f);h++}else{if(f>=55296&&f<=57343){throw new $$0.n(1,"Invalid character 0x"+$9(f,"x",null)+" in encoding")}else{d[h]=$u(f)}}h++;g+=4}return h-e},$type:new $.ig.Type("Ucs4DecoderLittleEndian",$$t.$kk.$type)},true);$c("ElementDecl:kn","Object",{init:function(a,b,c,d,e,f){$.ig.$op.init.call(this);this.i=a;this.h=b;this.g=c;this.e=d;this.b=e;this.a=f},i:null,h:false,g:false,e:null,b:null,a:null,d:null,c:function(a){return this.d._item(a.toUpperCase())},j:function(a){if(this.d==null){this.d=a}else{var c=a.getEnumerator();while(c.moveNext()){var b=c.current();if(this.d._item(b.f)==null){this.d._add(b)}}}},f:function(a,b){if(this.a!=null){var e=this.a;for(var d=0;d<e.length;d++){var c=e[d];if(c==a){return false}}}if(this.b!=null){var h=this.b;for(var g=0;g<h.length;g++){var f=h[g];if(f==a){return true}}}return this.e.c(a,b)},$type:new $.ig.Type("ElementDecl",$.ig.$ot)
},true);$c("ContentModel:kp","Object",{a:0,d:0,b:null,init:function(){$.ig.$op.init.call(this);this.b=new $$t.ks(null)},i:function(){this.b=new $$t.ks(this.b);this.d++},e:function(){if(this.d==0){return-1}this.d--;this.b.a.i(this.b);this.b=this.b.a;return this.d},h:function(a){this.b.k(a)},f:function(a){this.b.h(a)},g:function(a){this.b.j(a)},j:function(a){switch(a){case"EMPTY":this.a=3;break;case"RCDATA":this.a=2;break;case"CDATA":this.a=1;break;default:throw new $$0.n(1,$y("Declared content type '{0}' is not supported",a))}},c:function(a,b){if(this.a!=0){return false}return this.b.d(a,b)},$type:new $.ig.Type("ContentModel",$.ig.$ot)},true);$c("Group:ks","Object",{a:null,g:null,b:0,c:0,e:false,f:function(){return this.e&&this.g.count()==0},init:function(a){$.ig.$op.init.call(this);this.a=a;this.g=new $$4.w($.ig.$op.$type,0);this.b=0;this.c=0},i:function(a){this.g.add1(a)},k:function(a){if(a=="#PCDATA"){this.e=true}else{this.g.add1(a)}},h:function(a){if(!this.e&&this.g.count()==0){throw new $$0.n(1,$y("Missing token before connector '{0}'.",a))}var b=0;switch(a){case",":b=3;break;case"|":b=2;break;case"&":b=1;break}if(this.b!=0&&this.b!=b){throw new $$0.n(1,$y("Connector '{0}' is inconsistent with {1} group.",a,$$t.$kq.$getName(this.b)))}this.b=b},j:function(a){var b=0;switch(a){case"?":b=1;break;case"+":b=3;break;case"*":b=2;break}this.c=b},d:function(a,b){var d=this.g.getEnumerator();while(d.moveNext()){var c=d.current();if(typeof c==="string"){if(c==a){return true}}}var f=this.g.getEnumerator();while(f.moveNext()){var e=f.current();if(typeof e==="string"){var g=e;var h=b.d(g);if(h!=null){if(h.h){if(h.f(a,b)){return true}}}}else{var i=e;if(i.d(a,b)){return true}}}return false},$type:new $.ig.Type("Group",$.ig.$ot)},true);$c("AttDef:kv","Object",{f:null,c:0,a:null,e:null,b:0,init:function(a){$.ig.$op.init.call(this);this.f=a},g:function(a){switch(a){case"CDATA":this.c=1;break;case"ENTITY":this.c=2;break;case"ENTITIES":this.c=3;break;case"ID":this.c=4;break;case"IDREF":this.c=5;break;case"IDREFS":this.c=6;break;case"NAME":this.c=7;break;case"NAMES":this.c=8;break;case"NMTOKEN":this.c=9;break;case"NMTOKENS":this.c=10;break;case"NUMBER":this.c=11;break;case"NUMBERS":this.c=12;break;case"NUTOKEN":this.c=13;break;case"NUTOKENS":this.c=14;break;default:throw new $$0.n(1,"Attribute type '"+a+"' is not supported")}},d:function(a){var b=true;if(a=="FIXED"){this.b=1}else if(a=="REQUIRED"){this.b=2;b=false}else if(a=="IMPLIED"){this.b=3;b=false}else{throw new $$0.n(1,$y("Attribute value '{0}' not supported",a))}return b},$type:new $.ig.Type("AttDef",$.ig.$ot)},true);$c("AttList:kw","Object",{_b:null,init:function(){$.ig.$op.init.call(this);this._b=new $$4.g(String,$$t.$kv.$type,0)},_add:function(a){this._b.add(a.f,a)},_item:function(a){return this._b.item(a)},getEnumerator:function(){return this._b.values().getEnumerator()},$type:new $.ig.Type("AttList",$.ig.$ot,[$$0.$bu.$type])},true);$c("SgmlDtd:kx","Object",{r:null,m:null,o:null,n:null,w:null,e:null,am:null,init:function(a,b){$.ig.$op.init.call(this);this.am=b;this.r=a;this.m=new $$4.g(String,$$t.$kn.$type,0);this.o=new $$4.g(String,$$t.$ki.$type,0);this.n=new $$4.g(String,$$t.$ki.$type,0);this.w=new $$6.aj(0)},an:function(){return this.am},j:function(a,b,c,d,e,f,g){var h=new $$t.kx(b,g);if(d!=null&&d!=""){h.al(a,new $$t.ki(0,h.r,c,d,f))}if(e!=null&&e!=""){h.al(a,new $$t.ki(1,b,e))}try{h.x()}catch(i){throw new $$0.n(1,i.message()+h.e.r())}return h},i:function(a,b,c,d,e,f,g){var h=new $$t.kx(b,g);h.al(a,new $$t.ki(2,h.r,a,d,f));if(e!=null&&e!=""){h.al(a,new $$t.ki(1,b,e))}try{h.x()}catch(i){throw new $$0.n(1,i.message()+h.e.r())}return h},f:function(a){return this.n.item(a)},d:function(a){return this.m.item(a.toUpperCase())},al:function(a,b){b.ak(this.e,a);this.e=b;this.e.k()},ak:function(){if(this.e!=null){this.e.af()}if(this.e.b!=null){this.e=this.e.b}else{this.e=null}},x:function(){var a=this.e.j;while(true){switch(a){case"\uffff":this.ak();if(this.e==null){return}a=this.e.j;break;case" ":case"\n":case"\r":case"\t":a=this.e.k();break;case"<":this.ah();a=this.e.k();break;case"%":var b=this.h($$t.$kx.v);try{this.al(this.e.ae(),b)}catch(c){}a=this.e.j;break;default:this.e.ah("Unexpected character '{0}'",a);break}}},ah:function(){var a=this.e.k();if(a!="!"){this.e.ag("Found '{0}', but expecing declaration starting with '<!'");return}a=this.e.k();if(a=="-"){a=this.e.k();if(a!="-"){this.e.ah("Expecting comment '<!--' but found {0}",a)}this.e.y(this.w,"Comment","-->")}else if(a=="["){this.ag()}else{var b=this.e.z(this.w,$$t.$kx.v,true);switch(b){case"ENTITY":this.ad();break;case"ELEMENT":this.ac();break;case"ATTLIST":this.z();break;default:this.e.aj("Invalid declaration '<!{0}'.  Expecting 'ENTITY', 'ELEMENT' or 'ATTLIST'.",b);break}}},l:function(){var a=this.e.j;while(a=="-"){a=this.k(true)}return a},k:function(a){var b=this.e.n;var c=this.e.k();if(a&&c!="-"){this.e.ah("Expecting comment delimiter '--' but found {0}",c)}this.e.y(this.w,"Markup Comment","--");return this.e.l()},ag:function(){this.e.k();var a=this.u("[");if(a=="INCLUDE"){this.af()}else if(a=="IGNORE"){this.ae()}else{this.e.aj("Unsupported marked section type '{0}'",a)}},af:function(){throw new $$6.q(1,"Include Section")},ae:function(){var a=this.e.n;var b=this.e.l();if(b!="["){this.e.ah("Expecting '[' but found {0}",b)}this.e.y(this.w,"Conditional Section","]]>")},u:function(a){var b=this.e.l();if(b=="%"){var c=this.h(a);b=this.e.j;if(!c.e){throw new $$0.r(0,"External parameter entity resolution")}return c.t.trim([])}else{return this.e.z(this.w,a,true)}},h:function(a){var b=this.e.k();var c=this.e.z(this.w,";"+a,false);c=this.am.b(c);if(this.e.j==";"){this.e.k()}var d=this.g(c);return d},g:function(a){var b=this.o.item(a);if(b==null){this.e.aj("Reference to undefined parameter entity '{0}'",a)}return b},ad:function(){var a=this.e.l();var b=a=="%";if(b){this.e.k();a=this.e.l()}var c=this.e.z(this.w,$$t.$kx.v,true);c=this.am.b(c);a=this.e.l();var d=null;if(a=='"'||a=="'"){var e=this.e.x(this.w,a);d=new $$t.ki(1,c,e)}else{var f=null;var g=null;var h=this.e.z(this.w,$$t.$kx.v,true);if($$t.$ki.f(h)){a=this.e.l();var i=this.e.x(this.w,a);d=new $$t.ki(1,c,i);d.al(h)}else{g=h;if(g=="PUBLIC"){a=this.e.l();if(a=='"'||a=="'"){f=this.e.x(this.w,a)}else{this.e.ah("Expecting public identifier literal but found '{0}'",a)}}else if(g!="SYSTEM"){this.e.aj("Invalid external identifier '{0}'.  Expecing 'PUBLIC' or 'SYSTEM'.",g)}var j=null;a=this.e.l();if(a=='"'||a=="'"){j=this.e.x(this.w,a)}else if(a!=">"){this.e.ah("Expecting system identifier literal but found '{0}'",a)}d=new $$t.ki(0,c,f,j,this.e.v)}}a=this.e.l();if(a=="-"){a=this.l()}if(a!=">"){this.e.ah("Expecting end of entity declaration '>' but found '{0}'",a)}if(b){this.o.add(d.u,d)}else{this.n.add(d.u,d)}},ac:function(){var a=this.e.l();var b=this.a(a,true);a=$$0.$as.toUpper1(this.e.l());var c=false;var d=false;if(a=="O"||a=="-"){c=a=="O";this.e.k();a=$$0.$as.toUpper1(this.e.l());if(a=="O"||a=="-"){d=a=="O";a=this.e.k()}}a=this.e.l();var e=this.c(a);a=this.e.l();var f=null;var g=null;if(a=="-"){a=this.e.k();if(a=="("){f=this.a(a,true);a=this.e.l()}else if(a=="-"){a=this.k(false)}else{this.e.ah("Invalid syntax at '{0}'",a)}}if(a=="-"){a=this.l()}if(a=="+"){a=this.e.k();if(a!="("){this.e.ah("Expecting inclusions name group",a)}g=this.a(a,true);a=this.e.l()}if(a=="-"){a=this.l()}if(a!=">"){this.e.ah("Expecting end of ELEMENT declaration '>' but found '{0}'",a)}for(var i=0;i<b.length;i++){var h=b[i];var j=h.toUpperCase();j=this.am.b(h);this.m.add(j,new $$t.kn(j,c,d,e,g,f))}},a:function(a,b){var c=new $$4.w(String,0);if(a=="("){a=this.e.k();a=this.e.l();while(a!=")"){a=this.e.l();if(a=="%"){var d=this.h($$t.$kx.s);this.al(this.e.ae(),d);this.aj(c,b);this.ak();a=this.e.j}else{var e=this.e.z(this.w,$$t.$kx.s,b);e=e.toUpperCase();var f=this.am.b(e);c.add(f)}a=this.e.l();if(a=="|"||a==","){a=this.e.k()}}this.e.k()}else{var g=this.e.z(this.w,$$t.$kx.v,b);g=g.toUpperCase();g=this.am.b(g);c.add(g)}return c.toArray()},aj:function(a,b){var c=this.e.j;c=this.e.l();while(c!="\uffff"){var d;if(c=="%"){var e=this.h($$t.$kx.s);this.al(this.e.ae(),e);this.aj(a,b);this.ak();c=this.e.j}else{d=this.e.z(this.w,$$t.$kx.s,true);d=d.toUpperCase();d=this.am.b(d);a.add(d)}c=this.e.l();if(c=="|"){c=this.e.k();c=this.e.l()}}},c:function(a){var b=new $$t.kp;if(a=="("){this.e.k();this.ai(")",b);a=this.e.k();if(a=="?"||a=="+"||a=="*"){b.g(a);this.e.k()}}else if(a=="%"){var c=this.h($$t.$kx.q);this.al(this.e.ae(),c);b=this.c(this.e.j);this.ak()}else{var d=this.u($$t.$kx.q);b.j(d)}return b},ai:function(a,b){var c=b.d;var d=this.e.j;d=this.e.l();while(d!=a||b.d>c){if(d=="\uffff"){this.e.ag("Content Model was not closed")}if(d=="%"){var e=this.h($$t.$kx.p);this.al(this.e.ae(),e);this.ai("\uffff",b);this.ak();d=this.e.l()}else if(d=="("){b.i();this.e.k();d=this.e.l()}else if(d==")"){d=this.e.k();if(d=="*"||d=="+"||d=="?"){b.g(d);d=this.e.k()}if(b.e()<c){this.e.ag("Parameter entity cannot close a paren outside it's own scope")}d=this.e.l()}else if(d==","||d=="|"||d=="&"){b.f(d);this.e.k();d=this.e.l()}else{var f;if(d=="#"){d=this.e.k();f="#"+this.e.z(this.w,$$t.$kx.p,true)}else{f=this.e.z(this.w,$$t.$kx.p,true)}f=f.toUpperCase();f=this.am.b(f);d=this.e.j;if(d=="?"||d=="+"||d=="*"){b.i();b.h(f);b.g(d);b.e();this.e.k();d=this.e.l()}else{b.h(f);d=this.e.l()}}}},z:function(){var a=this.e.l();var b=this.a(a,true);var c=new $$t.kw;this.aa(c,">");for(var e=0;e<b.length;e++){var d=b[e];var f=this.m.item(d);if(f==null){this.e.aj("ATTLIST references undefined ELEMENT {0}",d)}f.j(c)}},aa:function(a,b){var c=this.e.l();while(c!=b){if(c=="%"){var d=this.h($$t.$kx.t);this.al(this.e.ae(),d);this.aa(a,"\uffff");this.ak();c=this.e.l()}else if(c=="-"){c=this.l()}else{var e=this.b(c);a._add(e)}c=this.e.l()}},b:function(a){a=this.e.l();var b=this.u($$t.$kx.v);b=b.toUpperCase();b=this.am.b(b);var c=new $$t.kv(b);a=this.e.l();if(a=="-"){a=this.l()}this.ab(a,c);a=this.e.l();if(a=="-"){a=this.l()}this.y(a,c);a=this.e.l();if(a=="-"){a=this.l()}return c},ab:function(a,b){if(a=="%"){var c=this.h($$t.$kx.v);this.al(this.e.ae(),c);this.ab(this.e.j,b);this.ak();a=this.e.j;return}if(a=="("){b.a=this.a(a,false);b.c=16}else{var d=this.u($$t.$kx.v);if(d=="NOTATION"){a=this.e.l();if(a!="("){this.e.ah("Expecting name group '(', but found '{0}'",a)}b.c=15;b.a=this.a(a,true)}else{b.g(d)}}},y:function(a,b){if(a=="%"){var c=this.h($$t.$kx.v);this.al(this.e.ae(),c);this.y(this.e.j,b);this.ak();a=this.e.j;return}var d=true;if(a=="#"){this.e.k();var e=this.e.z(this.w,$$t.$kx.v,true);d=b.d(e);a=this.e.l()}if(d){if(a=="'"||a=='"'){var f=this.e.x(this.w,a);b.e=f;a=this.e.l()}else{var g=this.e.z(this.w,$$t.$kx.v,false);g=g.toUpperCase();g=this.am.b(g);b.e=g;a=this.e.l()}}},$type:new $.ig.Type("SgmlDtd",$.ig.$ot)},true);$c("StringUtilitiesSgml:ky","Object",{init:function(){$.ig.$op.init.call(this)},a:function(a,b){return $1(a,b,$$v.$ao.g())==0},$type:new $.ig.Type("StringUtilitiesSgml",$.ig.$ot)},true);$c("HWStack:k0","Object",{a:null,e:0,b:0,d:0,init:function(a){$.ig.$op.init.call(this);this.d=a},c:function(a){if(arguments.length===1){this.b=a;return a}else{return this.b}},f:function(){return this.e},item:function(a,b){if(arguments.length===2){this.a[a]=b;return b}else{return a>=0&&a<this.e?this.a[a]:null}},h:function(){this.b--;if(this.b>0){return this.a[this.b-1]}return null},i:function(){if(this.b==this.e){var a=this.e+this.d;var b=new Array(a);if(this.a!=null){$.ig.util.arrayCopy2(this.a,b,this.e)}this.e=a;this.a=b}return this.a[this.b++]},j:function(a){this.a[a]=null;$.ig.util.arrayCopy1(this.a,a+1,this.a,a,this.b-a-1);this.b--},$type:new $.ig.Type("HWStack",$.ig.$ot)},true);$c("Attribute:k1","Object",{init:function(){$.ig.$op.init.call(this)},e:null,a:null,c:"\0",d:null,g:function(a,b,c){this.e=a;this.d=b;this.c=c;this.a=null},f:function(a){if(arguments.length===1){this.d=a;return a}else{if(this.d!=null){return this.d}if(this.a!=null){return this.a.e}return null}},b:function(){return this.d==null},$type:new $.ig.Type("Attribute",$.ig.$ot)},true);$c("Node:k2","Object",{init:function(){this.d=new $$t.k0(10);$.ig.$op.init.call(this)},p:0,k:null,q:0,l:null,f:false,j:null,c:null,e:0,g:false,d:null,o:function(a,b,c){this.k=c;this.j=a;this.p=b;this.q=0;this.l=null;this.f=true;this.d.c(0);this.c=null},a:function(a,b,c,d){var e;for(var f=0,g=this.d.c();f<g;f++){e=this.d.item(f);if(d&&$1(e.e,a,1)==0){return null}else if(e.e==a){return null}}e=this.d.i();if(e==null){e=new $$t.k1;this.d.item(this.d.c()-1,e)}e.g(a,b,c);return e},n:function(a){for(var b=0,c=this.d.c();b<c;b++){var d=this.d.item(b);if(d.e==a){this.d.j(b);return}}},m:function(a){for(var b=0,c=a.d.c();b<c;b++){var d=a.d.item(b);var e=this.a(d.e,d.f(),d.c,false);e.a=d.a}},h:function(){return this.d.c()},i:function(a){for(var b=0,c=this.d.c();b<c;b++){var d=this.d.item(b);if(d.e==a){return b}}return-1},b:function(a){if(a>=0&&a<this.d.c()){var b=this.d.item(a);return b}return null},$type:new $.ig.Type("Node",$.ig.$ot)},true);$c("SgmlReader:k4","XmlReader",{_bk:null,_bc:null,_bm:0,_dh:null,_b2:"\0",_ca:null,_be:null,_bg:null,_a9:null,_b3:0,_c0:null,_cz:null,_cy:null,_b9:null,_bn:false,_bf:null,_b4:0,_b5:0,_bo:false,_cp:null,_ci:null,_bd:null,_cm:null,_b6:null,_ct:null,_cn:null,_cs:null,_cf:null,_de:0,_bb:0,_b0:false,_dg:null,init:function(){this._bb=0;this._b0=true;$$2.$al.init.call(this);this.c2();this._dh=new $$2.u;this._dg=new $$2.ae(this._dh)},_dtd:function(a){if(arguments.length===1){this._bk=a;return a}else{this._c3(this._c0);return this._bk}},_c3:function(a){if(this._bk==null){if(this._bk!=null&&this._bk.r!=null){switch(this._caseFolding()){case 1:this._cp=this._bk.r.toUpperCase();break;case 2:this._cp=this._bk.r.toLowerCase();break;default:this._cp=this._bk.r;break}this._bo=$$t.$ky.a(this._bk.r,"html")}}},_docType:function(a){if(arguments.length===1){this._cf=a;return a}else{return this._cf}},_publicIdentifier:function(a){if(arguments.length===1){this._cn=a;return a}else{return this._cn}},_systemLiteral:function(a){if(arguments.length===1){this._ct=a;return a}else{return this._ct}},_internalSubset:function(a){if(arguments.length===1){this._cs=a;return a}else{return this._cs}},_inputStream:function(a){if(arguments.length===1){this._b6=a;this.c2();return a}else{return this._b6}},_webProxy:function(a){if(arguments.length===1){this._cm=a;return a}else{return this._cm}},_setBaseUri:function(a){this._c0=new $$6.x(0,a)},_href:function(a){if(arguments.length===1){this._ci=a;this.c2();if(this._c0==null){if(this._ci.indexOf("://")>0){this._c0=new $$6.x(0,this._ci)}}return a}else{return this._ci}},_stripDocType:function(a){if(arguments.length===1){this._b0=a;return a}else{return this._b0}},_caseFolding:function(a){if(arguments.length===1){this._bb=a;return a}else{return this._bb}},_errorLog:function(a){if(arguments.length===1){this._b9=a;return a}else{return this._b9}},_c4:function(a,b){if(this._errorLog()!=null){var c=$z(a,b);if(this._bd!=this._bc){c=c+"    "+this._bc.r();this._bd=this._bc;this._errorLog().writeLine11("### Error:"+c)}else{var d="";if(this._bc.ae()!=null){d=this._bc.ae().absolutePath()}this._errorLog().writeLine11("### Error in "+d+"#"+this._bc.u+", line "+this._bc.n+", position "+this._bc.o()+": "+c)}}},_c5:function(a,b){this._c4(a,[b.toString()])},c2:function(){this._bm=0;this._be=new $$t.k0(10);this._bg=this._bi(null,9,null);this._bg.f=false;this._cz=new $$6.aj(0);this._cy=new $$6.aj(0);this._b4=0;this._bc=null;this._b2="\0";this._ca=null;this._a9=null;this._b3=0;this._bf=null;this._b5=0;this._bn=false},_bi:function(a,b,c){var d=this._be.i();if(d==null){d=new $$t.k2;this._be.item(this._be.c()-1,d)}d.o(a,b,c);this._bg=d;return d},_da:function(){var a=this._be.c()-1;if(a>0){var b=this._be.item(a-1);this._be.item(a-1,this._be.item(a));this._be.item(a,b)}},_bh:function(a){var b=this._bi(a.j,a.p,a.k);b.c=a.c;b.f=a.f;b.q=a.q;b.l=a.l;b.e=a.e;b.m(a);this._bg=b;return b},_c8:function(){if(this._be.c()>1){this._bg=this._be.h()}},_bj:function(){var a=this._be.c()-1;if(a>0){return this._be.item(a)}return null},nodeType:function(){if(this._bm==3){return 2}else if(this._bm==4){return 3}else if(this._bm==2||this._bm==7){return 15}return this._bg.p},name:function(){var a=null;if(this._bm==3){a=this._a9.e}else if(this._bm==4){a=null}else{a=this._bg.j}return a},localName:function(){var a=this.name();var b=this.prefix();if(b.length!=0){return a.substr(b.length+1)}return a},namespaceURI:function(){if(this._bm==3&&$$t.$ky.a(this._a9.e,"xmlns")){return"http://www.w3.org/2000/xmlns/"}var a=this.prefix();switch(a){case"xmlns":return"http://www.w3.org/2000/xmlns/";case"xml":return"http://www.w3.org/XML/1998/namespace";case"":return String.empty();default:return this.lookupNamespace(a)}},prefix:function(){var a=this.name();if(a==null){return String.empty()}var b=a.indexOf(":");if(b<0){return String.empty()}return a.substr(0,b)},hasValue:function(){if(this._bm==3||this._bm==4){return true}return this._bg.k!=null},value:function(){if(this._bm==3||this._bm==4){return this._a9.f()}return this._bg.k},depth:function(){if(this._bm==3){return this._be.c()}else if(this._bm==4){return this._be.c()+1}return this._be.c()-1},baseURI:function(){return this._c0==null?"":this._c0.absoluteUri()},isEmptyElement:function(){if(this._bm==1||this._bm==3||this._bm==4){return this._bg.f}return false},isDefault:function(){if(this._bm==3||this._bm==4){return this._a9.b()}return false},quoteChar:function(){if(this._a9!=null){return this._a9.c}return"\0"},xmlSpace:function(){for(var a=this._be.c()-1;a>1;a--){var b=this._be.item(a);var c=b.q;if(c!=0){return c}}return 0},xmlLang:function(){for(var a=this._be.c()-1;a>1;a--){var b=this._be.item(a);var c=b.l;if(c!=null){return c}}return String.empty()},_whitespaceHandling:function(a){if(arguments.length===1){this._de=a;return a}else{return this._de}},attributeCount:function(){if(this._bm==3||this._bm==4){return 0}if(this._bg.p==1||this._bg.p==10){return this._bg.h()}return 0},getAttribute1:function(a){if(this._bm!=3&&this._bm!=4){var b=this._bg.i(a);if(b>=0){return this.getAttribute(b)}}return null},getAttribute2:function(a,b){return this.getAttribute1(a)},getAttribute:function(a){if(this._bm!=3&&this._bm!=4){var b=this._bg.b(a);if(b!=null){return b.f()}}throw new $$6.o(0)},item:function(a){return this.getAttribute(a)},item1:function(a){return this.getAttribute1(a)},item2:function(a,b){return this.getAttribute2(a,b)},moveToAttribute:function(a){var b=this._bg.i(a);if(b>=0){this.moveToAttribute2(b);return true}return false},moveToAttribute1:function(a,b){return this.moveToAttribute(a)},moveToAttribute2:function(a){var b=this._bg.b(a);if(b!=null){this._b3=a;this._a9=b;if(this._bm!=3){this._bg.e=this._bm}this._bm=3;return}throw new $$6.o(0)},moveToFirstAttribute:function(){if(this._bg.h()>0){this.moveToAttribute2(0);return true}return false},moveToNextAttribute:function(){if(this._bm!=3&&this._bm!=4){return this.moveToFirstAttribute()}if(this._b3<this._bg.h()-1){this.moveToAttribute2(this._b3+1);return true}return false},moveToElement:function(){if(this._bm==3||this._bm==4){this._bm=this._bg.e;this._a9=null;return true}return this._bg.p==1},_bp:function(){return this._bo},_getEncoding:function(){if(this._bc==null){this._c6()}return this._bc.ac()},_c6:function(){this._c3(this._c0);if(this._href()!=null){this._bc=new $$t.ki(0,"#document",null,this._ci,this._cm)}else if(this._b6!=null){this._bc=new $$t.ki(2,"#document",null,this._b6,this._cm)}else{throw new $$6.p(1,"You must specify input either via Href or InputStream properties")}this._bc.d=this._bp();this._bc.ak(null,this._c0);if(this._bc.ae()!=null){this._c0=this._bc.ae()}if(this._bc.d&&this._bk==null){this._cf="HTML";this._c3(this._c0)}},read:function(){if(this._bc==null){this._c6()}var a=this._bm;if(this._bg.g){this._bg.g=false;this._bg=this._bj();this._bm=this._bg.e;return true}var b=false;while(!b){var t1=this._bm;L0:while(true){switch(t1){case 0:this._bm=1;this._bc.k();t1=1;continue L0;case 11:if(this._bc.b!=null){this._bc.af();this._bc=this._bc.b}else{return false}break;case 2:if(this._ca==this._bg.j){this._c8();this._bm=1;t1=1;continue L0}this._c8();b=true;break;case 1:if(this._bg.f){this._c8()}var c=this._bg;b=this._bv();break;case 6:this._c8();this._bm=1;b=this._by(this._b2);break;case 10:b=this._bx("<");break;case 7:this._c8();if(this._be.c()<=this._b4){this._bm=1;if(this._bf!=null){this._bh(this._bf);this._bf=null;this._bm=1}else if(this._bg.p==9){this._bm=11;t1=11;continue L0}}b=true;break;case 8:b=this._br();break;case 3:t1=4;continue L0;case 4:this._bm=1;t1=1;continue L0;case 5:this._c8();t1=1;continue L0;case 9:if(this._bz(this._bc.j,false)){this._bg.p=13}b=true;break}break}if(b&&this._bg.p==13&&this._de==2){b=false}if(!b&&this._bm==11&&this._be.c()>1){this._b4=1;this._bm=7;this._bg=this._bj();return true}}if(!this._bn&&(this.nodeType()==1||this.nodeType()==3||this.nodeType()==4)){this._bn=true;if(this._bp()&&(this.nodeType()!=1||$1(this.localName(),"html",$$v.$ao.g())!=0)){this._bg.e=this._bm;var d=this._bi("html",1,null);this._da();this._bg=d;d.g=true;d.f=false;this._bm=1}return true}return true},_bv:function(){var a=this._bc.j;if(a=="<"){a=this._bc.k();return this._by(a)}else if(a!="\uffff"){if(this._bg.c!=null&&this._bg.c.e.a==1){this._b2="\0";this._bm=8;return false}else if(this._bz(a,true)){this._bg.p=13}return true}this._bm=11;return false},_by:function(a){if(a=="%"){return this._bq()}if(a=="!"){a=this._bc.k();if(a=="-"){return this._bs()}else if(a=="["){return this._bt()}else if(a!="_"&&!$an(a)){var b=this._bc.y(this._cz,"Recovering",">");this._c4("Ignoring invalid markup '<!"+b+">",[]);return false}else{var c=this._bc.z(this._cz,$$t.$k4._ce,false);if(c=="DOCTYPE"){this._c7();if(this.getAttribute1("SYSTEM")==null&&this.getAttribute1("PUBLIC")!=null){this._bg.a("SYSTEM","",'"',this._bb==0)}if(this._b0){return false}else{this._bg.p=10;return true}}else{this._c4("Invalid declaration '<!{0}...'.  Expecting '<!DOCTYPE' only.",[c]);this._bc.y(null,"Recovering",">");return false}}}else if(a=="?"){this._bc.k();return this._bw()}else if(a=="/"){return this._bu()}else{return this._bx(a)}},_cr:function(a){var b=this._bc.z(this._cz,a,false);switch(this._bb){case 1:b=b.toUpperCase();break;case 2:b=b.toLowerCase();break}return this._dh.b(b)},_bx:function(a){var b=null;if(this._bm!=10){if($$t.$k4._cv.indexOf(a)>=0){this._cz.c(0);this._cz.h("<");this._bm=9;return false}b=this._cr($$t.$k4._cv)}else{this._bm=1}var c=this._bi(b,1,null);c.f=false;this._db(c);a=this._bc.l();this._dg.pushScope();while(a!="\uffff"&&a!=">"){if(a=="/"){this._dg.popScope();c.f=true;a=this._bc.k();if(a!=">"){this._c5("Expected empty start tag '/>' sequence instead of '{0}'",a);this._bc.y(null,"Recovering",">");return false}break}else if(a=="<"){this._c4("Start tag '{0}' is missing '>'",[b]);break}var d=this._cr($$t.$k4._cb);a=this._bc.l();if(d==","||d=="="||d==":"||d==";"){continue}var e=null;var f="\0";if(a=="="||a=='"'||a=="'"){if(a=="="){this._bc.k();a=this._bc.l()}if(a=="'"||a=='"'){f=a;e=this._scanLiteral(this._cz,a)}else if(a!=">"){var g=$$t.$k4._cc;e=this._bc.z(this._cz,g,false)}}if(d.length>0){var h=c.a(d,e,f,this._bb==0);if(h==null){this._c4("Duplicate attribute '{0}' ignored",[d])}else{this._dc(c,h);if(h.e.startsWith1("xmlns:",$$v.$ao.g())){var i=h.e.substr(6);this._dg.addNamespace(i,h.f())}}}a=this._bc.l()}if(a=="\uffff"){this._bc.aj("Unexpected EOF parsing start tag '{0}'",b)}else if(a==">"){this._bc.k()}if(this.depth()==1){if(this._b5==1){this._bm=11;return false}this._b5++}this._dd(c);return true},_bu:function(){this._dg.popScope();this._bm=2;this._bc.k();var a=this._cr($$t.$k4._cv);var b=this._bc.l();if(b!=">"){this._c5("Expected empty start tag '/>' sequence instead of '{0}'",b);this._bc.y(null,"Recovering",">")}this._bc.k();this._ca=a;var c=this._bb==0;this._bg=this._be.item(this._be.c()-1);for(var d=this._be.c()-1;d>0;d--){var e=this._be.item(d);if(c&&$1(e.j,a,1)==0){this._ca=e.j;return true}else if(e.j==a){return true}}this._c4("No matching start tag for '</{0}>'",[a]);this._bm=1;return false},_bq:function(){var a="<%"+this._bc.y(this._cz,"AspNet","%>")+"%>";this._bi(null,4,a);return true},_bs:function(){var a=this._bc.k();if(a!="-"){this._c5("Expecting comment '<!--' but found {0}",a);this._bc.y(null,"Comment",">");return false}var b=this._bc.y(this._cz,"Comment","-->");var c=b.indexOf("--");while(c>=0){var d=c+2;while(d<b.length&&b.charAt(d)=="-"){d++}if(c>0){b=b.substr(0,c-1)+"-"+b.substr(d)}else{b="-"+b.substr(d)}c=b.indexOf("--")}if(b.length>0&&b.charAt(b.length-1)=="-"){b+=" "}this._bi(null,8,b);return true},_bt:function(){var a=this._bc.k();a=this._bc.l();var b=this._bc.z(this._cz,$$t.$k4._cd,false);if(b!="CDATA"){this._c4("Expecting CDATA but found '{0}'",[b]);this._bc.y(null,"CDATA",">");return false}a=this._bc.l();if(a!="["){this._c5("Expecting '[' but found '{0}'",a);this._bc.y(null,"CDATA",">");return false}var c=this._bc.y(this._cz,"CDATA","]]>");this._bi(null,4,c);return true},_c7:function(){var a=this._bc.l();var b=this._cr($$t.$k4._ch);this._bi(b,10,null);a=this._bc.l();if(a!=">"){var c="";var d="";var e="";if(a!="["){var f=this._bc.z(this._cz,$$t.$k4._ch,false);if(f=="PUBLIC"){a=this._bc.l();if(a=='"'||a=="'"){d=this._bc.x(this._cz,a);this._bg.a(f,d,a,this._bb==0)}}else if(f!="SYSTEM"){this._c4("Unexpected token in DOCTYPE '{0}'",[f]);this._bc.y(null,"DOCTYPE",">")}a=this._bc.l();if(a=='"'||a=="'"){f=this._dh.b("SYSTEM");e=this._bc.x(this._cz,a);this._bg.a(f,e,a,this._bb==0)}a=this._bc.l()}if(a=="["){c=this._bc.y(this._cz,"Internal Subset","]");this._bg.k=c}a=this._bc.l();if(a!=">"){this._c5("Expecting end of DOCTYPE tag, but found '{0}'",a);this._bc.y(null,"DOCTYPE",">")}if(this._bk==null){this._cf=b;this._cn=d;this._ct=e;this._cs=c;this._c3(this._bc.ae())}}this._bc.k()},_bw:function(){var a=this._bc.z(this._cz,$$t.$k4._cl,false);var b=null;if(this._bc.j!="?"){b=this._bc.y(this._cz,"Processing Instruction",">")}else{b=this._bc.y(this._cz,"Processing Instruction",">")}if(a!="xml"){this._bi(this._dh.b(a),7,b);return true}return false},_bz:function(a,b){var c=!b||this._bc.g;if(b){this._cz.c(0)}this._bm=5;while(a!="\uffff"){if(a=="<"){a=this._bc.k();if(a=="/"||a=="!"||a=="?"||$an(a)){this._bm=6;this._b2=a;break}else{this._cz.h("<");this._cz.h(a);c=false;a=this._bc.k()}}else if(a=="&"){this._c1(this._cz,"<");c=false;a=this._bc.j}else{if(!this._bc.g){c=false}this._cz.h(a);a=this._bc.k()}}var d=this._cz.toString();this._bi(null,3,d);return c},_scanLiteral:function(a,b){a.c(0);var c=this._bc.k();while(c!="\uffff"&&c!=b){if(c=="&"){this._c1(this._cz,b);c=this._bc.j}else{a.h(c);c=this._bc.k()}}this._bc.k();return a.toString()},_br:function(){var a=this._bc.g;this._cz.c(0);var b=this._bc.j;if(this._b2!="\0"){this._c8();switch(this._b2){case"!":this._b2=" ";return this._bs();case"?":this._b2=" ";return this._bw();case"/":this._bm=2;return true;case" ":break}}else{b=this._bc.k()}while(b!="\uffff"){if(b=="<"){b=this._bc.k();if(b=="!"){b=this._bc.k();if(b=="-"){if(a){this._b2=" ";return this._bs()}else{this._b2="!";break}}else{this._cz.h("<");this._cz.h("!");this._cz.h(b);a=false}}else if(b=="?"){this._bc.k();if(a){this._b2=" ";return this._bw()}else{this._b2="?";break}}else if(b=="/"){var c=this._cz.toString();if(this._bu()&&this._ca==this._bg.j){if(a||c==""){return true}else{this._b2="/";this._cz.c(0);this._cz.l(c);this._bm=8;break}}else{this._cz.c(0);this._cz.l(c);this._cz.l("</"+this._ca+">");a=false}}else{this._cz.h("<");this._cz.h(b);a=false}}else{if(!this._bc.g&&a){a=false}this._cz.h(b)}b=this._bc.k()}var d=this._cz.toString();this._bi(null,4,d);if(this._b2=="\0"){this._b2=" "}return true},_c1:function(a,b){var c=this._bc.k();if(c=="#"){var d=this._bc.s();a.l(d);c=this._bc.j}else{this._cy.c(0);while(c!="\uffff"&&($an(c)||c=="_"||c=="-")){this._cy.h(c);c=this._bc.k()}var e=this._cy.toString();if(this._bk!=null&&e!=""){var f=this._bk.f(e);if(f!=null){if(f.e){a.l(f.t);if(c!=b){c=this._bc.k()}return}else{var g=new $$t.ki(0,e,f.w,f.aa,this._bc.v);f.ak(this._bc,new $$6.x(0,f.aa));this._bc=g;this._bc.k();return}}else{this._c4("Undefined entity '{0}'",[e])}}a.l("&");a.l(e);if(c!=b){a.h(c);c=this._bc.k()}}},eOF:function(){return this._bm==11},close:function(){this.disposeCore(true)},disposeCore:function(a){if(a){if(this._bc!=null){this._bc.af();this._bc=null}if(this._b9!=null){this._b9.close();this._b9=null}}},readState:function(){if(this._bm==0){return 0}else if(this._bm==11){return 3}return 1},readString:function(){if(this._bg.p==1){this._cz.c(0);while(this.read()){switch(this.nodeType()){case 4:case 14:case 13:case 3:this._cz.l(this._bg.k);break;default:return this._cz.toString()}}return this._cz.toString()}return this._bg.k},readInnerXml:function(){var a=new $$2.bb(0);{var b=new $$2.ax(1,a);try{switch(this.nodeType()){case 1:this.read();while(!this.eOF()&&this.nodeType()!=15){b.writeNode(this,true)}this.read();break;case 2:a.write10(this.value());break;default:break}}finally{if(b!=null){b.dispose()}}}return a.toString()},readOuterXml:function(){var a=new $$2.bb(0);{var b=new $$2.ax(1,a);try{b.writeNode(this,true)}finally{if(b!=null){b.dispose()}}}return a.toString()},nameTable:function(){return this._dh},lookupNamespace:function(a){return this._dg.lookupNamespace(a)},resolveEntity:function(){throw new $$6.p(1,"Not on an entity reference.")},readAttributeValue:function(){if(this._bm==3){this._bm=4;return true}else if(this._bm==4){return false}throw new $$6.p(1,"Not on an attribute.")},_db:function(a){if(this._bk!=null){var b=this._bk.d(a.j);if(b!=null){a.c=b;if(b.e.a==3){a.f=true}}}},_dc:function(a,b){var c=a.c;if(c!=null){var d=c.c(b.e);if(d!=null){b.a=d}}},_dd:function(a){if(this._bk!=null){var b=this._dh.b(a.j.toUpperCase());var c=0;var d=this._be.c()-2;if(a.c!=null){for(c=d;c>0;c--){var e=this._be.item(c);if(e.f){continue}var f=e.c;if(f!=null){if(f.i==this._bk.r){break}if(f.f(b,this._bk)){break}else if(!f.g){break}}else{break}}}if(c==0){}else if(c<d){var g=this._be.item(d);if(c==d-1&&b==g.j){}else{var h="";for(var i=d;i>=c+1;i--){if(h!=""){h+=","}var j=this._be.item(i);h+="<"+j.j+">"}this._c4("Element '{0}' not allowed inside '{1}', closing {2}.",[b,g.j,h])}this._bm=7;this._bf=a;this._c8();this._b4=c+1}}},$type:new $.ig.Type("SgmlReader",$$2.$al.$type)},true);$c("OverrideContentTypePart:j4","Object",{b:null,a:null,init:function(a,b){$.ig.$op.init.call(this);this.a=a;this.b=b!=null?b:a.contentType()},$package:function(){return this.a.$package()},uri:function(){return this.a.uri()},contentType:function(){return this.b},getStream:function(a,b){return this.a.getStream(a,b)},createRelationship:function(a,b,c,d){return this.a.createRelationship(a,b,c,d)},getRelationships:function(){return this.a.getRelationships()},getRelationship:function(a){return this.a.getRelationship(a)},$type:new $.ig.Type("OverrideContentTypePart",$.ig.$ot,[$$v.$az.$type])},true);$c("ZipFile:j5","Object",{a:null,c:null,init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}this.a=new $$4.w($$t.$j6.$type,0);$.ig.$op.init.call(this);this.c=new JSZip},init1:function(a,b){this.a=new $$4.w($$t.$j6.$type,0);$.ig.$op.init.call(this);this.c=new JSZip;var c=null;var d=$b($$7.$e.$type,b);if(d!=null){c=d.getBuffer();if(c.length!=b.length()){c=null}}if(c==null){c=new Array(b.length());b.read(c,0,c.length)}this.c.load(c);var e=$.ig.util.getArrayOfValues(this.c.files);for(var f=0;f<e.length;f++){this.a.add(new $$t.j6(0,e[f]))}},b:function(){return this.a},d:function(a){var c=this.a.getEnumerator();while(c.moveNext()){var b=c.current();var d=b.f;if(d.charAt(0)=="/"){d=d.substr(1)}if(b.b){this.c.folder(d)}else{var e=new Array(b.d.length());b.d.position(0);b.d.read(e,0,e.length);this.c.file(d,e)}}var f=JSZip.support.uint8array?"uint8array":"array";var g=this.c.generate({type:f,compression:"DEFLATE"});a.write(g,0,g.length)},$type:new $.ig.Type("ZipFile",$.ig.$ot)},true);$c("ZipEntry:j6","Object",{e:null,b:false,f:null,d:null,init:function(a,b){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$.ig.$op.init.call(this);
this.e=b;this.b=this.e.dir;this.f=this.e.name},init1:function(a,b,c){$.ig.$op.init.call(this);this.f=b;this.d=c},a:function(a,b,c){return new $$t.j6(1,$x($$7.$b.combine1(b,a),"\\","/"),c)},c:function(){if(this.e!=null){if(JSZip.support.uint8array){return new $$7.e(2,this.e.asUint8Array())}return new $$7.e(2,this.e.asBinary())}return this.d},$type:new $.ig.Type("ZipEntry",$.ig.$ot)},true);$c("PackagePartExposedStream:j7","Stream",{_o:null,init:function(a){$$0.$dg.init.call(this);this._o=a},canRead:function(){return this._o.canRead()},canSeek:function(){return this._o.canSeek()},canWrite:function(){return this._o.canWrite()},flush:function(){this._o.flush()},length:function(){return this._o.length()},position:function(a){if(arguments.length===1){this._o.position(a);return a}else{return this._o.position()}},read:function(a,b,c){return this._o.read(a,b,c)},seek:function(a,b){return this._o.seek(a,b)},setLength:function(a){this._o.setLength(a)},write:function(a,b,c){this._o.write(a,b,c)},$type:new $.ig.Type("PackagePartExposedStream",$$0.$dg.$type)},true);$c("PackageRelationship:j8","Object",{init:function(a,b,c,d,e){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$t.$j8.init1.call(this,1,new $$6.x(1,"/",2),b,c,d,e)},init1:function(a,b,c,d,e,f){$.ig.$op.init.call(this);this.sourceUri(b);this.targetMode(d);this.targetUri(c);this.id(f);this.relationshipType(e)},_sourceUri:null,sourceUri:function(a){if(arguments.length===1){this._sourceUri=a;return a}else{return this._sourceUri}},_targetUri:null,targetUri:function(a){if(arguments.length===1){this._targetUri=a;return a}else{return this._targetUri}},_id:null,id:function(a){if(arguments.length===1){this._id=a;return a}else{return this._id}},_relationshipType:null,relationshipType:function(a){if(arguments.length===1){this._relationshipType=a;return a}else{return this._relationshipType}},_targetMode:0,targetMode:function(a){if(arguments.length===1){this._targetMode=a;return a}else{return this._targetMode}},$type:new $.ig.Type("PackageRelationship",$.ig.$ot,[$$v.$a1.$type])},true);$c("InvalidTargetPackageRelationship:j9","PackageRelationship",{init:function(a,b,c,d,e){$$t.$j8.init1.call(this,1,a,null,c,d,e);this.targetString(b)},targetUri:function(a){if(arguments.length===1){$$t.$j8.targetUri.call(this,a);return a}else{if(this.targetString()!=null&&$$t.$j8.targetUri.call(this)==null){this.targetUri(new $$6.x(1,this.targetString(),0))}return $$t.$j8.targetUri.call(this)}},_targetString:null,targetString:function(a){if(arguments.length===1){this._targetString=a;return a}else{return this._targetString}},$type:new $.ig.Type("InvalidTargetPackageRelationship",$$t.$j8.$type,[$$v.$a3.$type])},true);$c("PackagePart:ka","Object",{e:null,c:null,init:function(a,b,c){this.c=null;$.ig.$op.init.call(this);this.e=new $$7.e(0);this.$package(a);this.uri(b);this.contentType(c);var d=$b($$t.$kb.$type,this.$package());if(d==null){throw new $$6.d(2,"The expected type for package parameter is type of Package.","package")}if(d.__l==2){var e=$$7.$b.getFileName(b.toString());var f=$$7.$b.getDirectoryName(b.toString());f=$x(f,"\\","/");this._b=$$t.$j6.a(e,f,new $$7.e(0));d.__c.b().add(this._b)}},_$package:null,$package:function(a){if(arguments.length===1){this._$package=a;return a}else{return this._$package}},_uri:null,uri:function(a){if(arguments.length===1){this._uri=a;return a}else{return this._uri}},_contentType:null,contentType:function(a){if(arguments.length===1){this._contentType=a;return a}else{return this._contentType}},_b:null,getStream:function(a,b){return new $$t.j7(this._b.c())},createRelationship:function(a,b,c,d){var e=new $$t.j8(1,this.uri(),a,b,c,d);return this.a(e)},createExternalRelationship:function(a,b,c){var d;if(function(){var e=$$6.$x.tryCreate(a,0,d);d=e.p2;return e.ret}()){return this.createRelationship(d,1,b,c)}var e=new $$t.j9(this.uri(),a,1,b,c);return this.a(e)},a:function(a){if(this.c==null){this.c=new $$4.g(String,$$v.$a1.$type,1,1)}if(this.c.count()==0){var b=$$7.$b.getFileName(this.uri().toString())+".rels";var c=$$7.$b.getDirectoryName(this.uri().toString())+"/_rels";if(c.charAt(0)=="\\"){c=c.substr(1)}var d=$$t.$j6.a(b,c,this.e);this.$package().__c.b().add(d)}this.c.add(a.id(),a);return a},getRelationships:function(){this.j();return this.c.values()},getRelationship:function(a){this.j();var b=null;var c=this.c.tryGetValue(a,b);b=c.p1;return b},relationships:function(){return this.getRelationships()},i:function(){var a=$x($$7.$b.getDirectoryName($$t.$kf.fixDirectoryPath(this.uri().toString())),"\\","/");var b=$$7.$b.getFileName(this.uri().toString());var c=this.$package();var d=c.__c;var e=a+"/_rels/"+b+".rels";if(d!=null&&c.__l==3){var f=$$5.$e.u($$t.$j6.$type,d.b(),function(g){return g.f==e});if($$5.$e.aj($$t.$j6.$type,f)!=1){return}c.__b=$$5.$e.ad($$t.$j6.$type,f);this.e=c.__b.c();{var g=new $$2.ar(1,this.e);try{while(g.read()){if(g.isStartElement()&&g.name()=="Relationship"){if(g.hasAttributes()){var h=g.getAttribute1("TargetMode");var i=g.getAttribute1("Target");var j=g.getAttribute1("Id");var k=g.getAttribute1("Type");var l=0;if(String.isNullOrEmpty(h)==false){l=$g($.ig.$ep.parse($$v.$a2.$type,h,true))}var m=new $$t.j8(1,this.uri(),new $$6.x(1,i,0),l,k,j);this.c.add(j,m)}}}}finally{if(g!=null){g.dispose()}}}}},j:function(){if(this.c==null){this.c=new $$4.g(String,$$v.$a1.$type,0);if(this.$package().__l==3){this.i()}}},$type:new $.ig.Type("PackagePart",$.ig.$ot,[$$v.$az.$type,$$v.$a0.$type])},true);$c("Package:kb","Object",{_d:false,_e:false,_n:null,_o:null,_m:null,_h:null,_k:null,_f:null,_g:null,init:function(a,b){this._f=new $$4.g(String,String,2,$$6.$t.ordinalIgnoreCase);this._g=new $$4.g(String,String,2,$$6.$t.ordinalIgnoreCase);$.ig.$op.init.call(this);this.__l=b;if(b==3){a.position(0);this.__c=new $$t.j5(1,a)}else{this._n=a;this.__c=new $$t.j5(0)}},_relationships:function(){return this._k},_parts:function(){return this._h},__l:0,__c:null,__b:null,__a:null,createPart:function(a,b){if(!this._d){this._ae()}var c=new $$t.ka(this,a,b);this._g.add(a.toString(),b);if(this.partExists(a)){this._h.item(a.originalString(),c)}else{this._h.add(a.originalString(),c)}return c},createRelationship:function(a,b,c,d){if(!this._e){this._af()}var e=new $$t.j8(0,a,b,c,d);this._k.add(e);return e},getRelationships:function(){if(this._k==null){this._k=new $$4.w($$v.$a1.$type,0);this._ac()}return this._k},getPart:function(a){var b=null;if(this.partExists(a)){b=this._h.item(a.originalString())}return b},getParts:function(){if(this._h==null){if(this.__l==3){if(this._h==null){this._ad()}}else{this._h=new $$4.g(String,$$t.$ka.$type,0)}}return this._h.values()},getRelationship:function(a){this._af();return $$5.$e.af($$v.$a1.$type,$$5.$e.u($$v.$a1.$type,this._k,function(b){return b.id()==a}))},_v:function(a){if(this._g.containsKey(a)){return this._g.item(a)}var b=$$7.$b.getExtension(a).substr(1);if(this._f.containsKey(b)){return this._f.item(b)}return null},_ad:function(){this._h=new $$4.g(String,$$t.$ka.$type,0);var a=$$5.$e.ad($$t.$j6.$type,$$5.$e.u($$t.$j6.$type,this.__c.b(),function(b){return b.f=="[Content_Types].xml"}));{var b=a.c();try{{var c=new $$2.ar(1,b);try{while(c.read()){if(c.isStartElement()&&c.name()=="Types"){while(c.read()){if(c.isStartElement()){if(c.name()=="Override"){var d=c.getAttribute1("PartName");var e=c.getAttribute1("ContentType");if(!this._g.containsKey(d)){this._g.add(d,e)}}else if(c.name()=="Default"){var f=c.getAttribute1("Extension");var g=c.getAttribute1("ContentType");if(!this._f.containsKey(f)){this._f.add(f,g)}}}}}}}finally{if(c!=null){c.dispose()}}}}finally{if(b!=null){b.dispose()}}}var i=$$5.$e.u($$t.$j6.$type,this.__c.b(),function(j){return j.f!="[Content_Types].xml"&&!j.b}).getEnumerator();while(i.moveNext()){var h=i.current();var j="/"+h.f;var k=this._v(j);var l=new $$t.ka(this,new $$6.x(1,j,2),k);l._b=h;this._h.add(l.uri().originalString(),l)}},_ac:function(){if(this.__c!=null&&this.__l==3){this.__b=$$5.$e.ad($$t.$j6.$type,$$5.$e.u($$t.$j6.$type,this.__c.b(),function(a){return a.f=="_rels/.rels"}));var a=this.__b.c();this._o=a;{var b=new $$2.ar(1,a);try{while(b.read()){if(b.isStartElement()&&b.name()=="Relationship"){if(b.hasAttributes()){var c=b.getAttribute1("TargetMode");var d=b.getAttribute1("Id");var e=b.getAttribute1("Type");var f=b.getAttribute1("Target");var g=0;if(String.isNullOrEmpty(c)==false){g=$g($.ig.$ep.parse($$v.$a2.$type,c,true))}var h=new $$t.j8(1,new $$6.x(1,"/",2),new $$6.x(1,f,0),g,e,d);this._k.add(h)}}}}finally{if(b!=null){b.dispose()}}}}},partExists:function(a){if(this._h==null){this._ad()}return this._h.containsKey(a.originalString())},dispose:function(){if(this.__l==2){if(this._o!=null){$$t.$ke.j(this._relationships(),this._o)}if(this._h!=null){var b=this._h.values().getEnumerator();while(b.moveNext()){var a=b.current();if(a.e!=null){$$t.$ke.j(a.relationships(),a.e)}}}if(this._m!=null){$$t.$kd.j(this,this._m)}if(this._n!=null){this.__c.d(this._n)}}},_ae:function(){this._m=new $$7.e(0);this.__a=$$t.$j6.a("[Content_Types].xml","/",this._m);this.__c.b().add(this.__a);if(this._h==null){this._h=new $$4.g(String,$$t.$ka.$type,0)}this._d=true},_af:function(){this._o=new $$7.e(0);this.__b=$$t.$j6.a(".rels","/_rels",this._o);this.__c.b().add(this.__b);if(this._k==null){this._k=new $$4.w($$v.$a1.$type,0)}this._e=true},$type:new $.ig.Type("Package",$.ig.$ot,[$$v.$ay.$type])},true);$c("PackageFactory:kc","Object",{init:function(){$.ig.$op.init.call(this)},open:function(a,b){a=typeof a==="string"?$.ig.util.b64toUint8Array(a):a;a=$b($$0.$dg.$type,a)?a:new $$7.e(2,a);return new $$t.kb(a,b)},$type:new $.ig.Type("PackageFactory",$.ig.$ot,[$$v.$ax.$type])},true);$c("ContentTypesWriter:kd","Object",{init:function(){$.ig.$op.init.call(this)},k:function(a,b,c){a.writeStartElement1("Default",$$t.$kd.b);a.writeAttributeString("Extension",c);a.writeAttributeString("ContentType",b);a.writeEndElement()},l:function(a,b,c){a.writeStartElement1("Override",$$t.$kd.b);a.writeAttributeString("PartName",c);a.writeAttributeString("ContentType",b);a.writeEndElement()},j:function(a,b){{var c=new $$2.ax(0,b,$$8.$a.uTF8());try{c.writeProcessingInstruction("xml",'version="1.0" encoding="UTF-8" standalone="yes"');c.writeStartElement1("Types",$$t.$kd.b);$$t.$kd.k(c,$$t.$kd.d,"rels");$$t.$kd.k(c,"application/xml","xml");var e=a._g.getEnumerator();while(e.moveNext()){var d=e.current();$$t.$kd.l(c,d.value(),d.key())}c.writeEndElement()}finally{if(c!=null){c.dispose()}}}},$type:new $.ig.Type("ContentTypesWriter",$.ig.$ot)},true);$c("RelationshipsWriter:ke","Object",{init:function(){$.ig.$op.init.call(this)},j:function(a,b){{var c=new $$2.ax(0,b,$$8.$a.uTF8());try{c.writeProcessingInstruction("xml",'version="1.0" encoding="UTF-8" standalone="yes"');c.writeStartElement1("Relationships",$$t.$ke.c);var e=a.getEnumerator();while(e.moveNext()){var d=e.current();c.writeStartElement1("Relationship",$$t.$ke.c);c.writeAttributeString("Id",d.id());c.writeAttributeString("Type",d.relationshipType());if(d.targetMode()==1){c.writeAttributeString("Target",d.targetUri().originalString());c.writeAttributeString("TargetMode","External")}else{c.writeAttributeString("Target",$$t.$kf.fixDirectoryPath(d.targetUri().toString()))}c.writeEndElement()}c.writeEndElement()}finally{if(c!=null){c.dispose()}}}},$type:new $.ig.Type("RelationshipsWriter",$.ig.$ot)},true);$c("DocCoreExtensions:kf","Object",{init:function(){$.ig.$op.init.call(this)},fixDirectoryPath:function(a){if(a.startsWith("\\")){return a.substr(1)}if(a.startsWith("/")){return a.substr(1)}return a},$type:new $.ig.Type("DocCoreExtensions",$.ig.$ot)},true);$c("PackageUtilities:kg","Object",{init:function(){$.ig.$op.init.call(this)},j:function(a,b){if(b.startsWith(".."+"/")){return $$t.$kg.j($$t.$kg.n(a),b.substr(3))}var c=a.length>0&&a.charAt(a.length-1)=="/";var d=b.length>0&&b.charAt(0)=="/";if(d){return b}if(c^d){return a+b}if(c){return a+b.substr(1)}return a+"/"+b},ag:function(a,b){var c=a.toString();var d=b.toString();return $$v.$ap.b($$t.$kg.j(c,d))},a:function(a,b){if(b){return new $$t.kb(a,3)}return new $$t.kb(a,2)},k:function(a){var b=$.ig.Date.prototype.toUniversalTime(a);return $.ig.Date.prototype.toStringFormat(b,"s",null)+"Z"},m:function(a){var b=$$t.$kg.n(a);var c=$$t.$kg.o(a);var d=$$t.$kg.j(b,"_rels");var e=c+".rels";return $$t.$kg.j(d,e)},n:function(a){var b=a.lastIndexOf("/");if(b<0){return a}return a.substr(0,b)},ah:function(a){return new $$6.x(1,$$t.$kg.n(a.toString()),2)},o:function(a){var b=a.lastIndexOf("/");if(b<0){return a}return a.substr(b+1)},e:function(a){if(a==null||a.length!=3||a.charAt(0)!="%"){$$t.$kg.al("The value passed to GetPercentEncodedValue was not expoected: "+a);return 0}try{return $$6.$g.toByte2(a.substr(1),16)}catch(b){$$t.$kg.al("The value passed to GetPercentEncodedValue was not expoected: "+a);return 0}},ai:function(a,b){return $$t.$kg.aj(a,b,"/")},aj:function(a,b,c){var d=$$t.$kg.q(a.toString(),b.toString(),"/",false);return $$v.$ap.b(d)},p:function(a,b){return $$t.$kg.q(a,b,"/",false)},q:function(a,b,c,d){var e=$$t.$kg.h(a,c);var f=$$t.$kg.h(b,c);for(var g=0;g<e.count()-1&&g<f.count();g++){if(e.__inner[g]==f.__inner[g]){e.removeAt(g);f.removeAt(g);g--;continue}else{if(d){var h=$$t.$kg.w().g(b,String.empty());return $x(h,c,"/")}else{for(var i=0;i<e.count()-1;i++){f.insert(0,"..")}}break}}var j=new $$6.aj(0);var l=f.getEnumerator();while(l.moveNext()){var k=l.current();if(c!="/"){j.l($x(k,c,"/"))}else{j.l(k)}j.h("/")}j.y(j.c()-1,1);return j.toString()},g:function(a){return $$t.$kg.h(a,"/")},h:function(a,b){if(String.isNullOrEmpty(a)){return new $$4.w(String,0)}return new $$4.w(String,1,a.split(b))},ak:function(a){var b=$$t.$kg.ah(a.sourceUri());var c=$$t.$kg.ag(b,a.targetUri());return c},b:function(a){var b=$$t.$kg.g(a);if(b.count()==0){return false}if(b.__inner[0].length!=0){return false}for(var c=1;c<b.count();c++){if($$t.$kg.d(b.__inner[c])==false){return false}}return true},c:function(a){return $$t.$kg.b(a.toString())},d:function(a){if(String.isNullOrEmpty(a)){return false}if(a.charAt(a.length-1)=="."){return false}var b=$$t.$kg.ae().i(a);if(b.i()==false||b.d()!=a.length){return false}var c=$$t.$kg.aa().i(a);while(c.i()){var d=$$t.$kg.e(c.g());var e=$$6.$g.toChar(d);switch(e){case"\\":case"/":return false}var f=e.toString();if($$t.$kg.ac().i(f).i()){return false}c=c.o()}return true},i:function(a){if(a.endsWith("Z")==false){$$t.$kg.al("The date format was not correct.");return $$0.$s.now()}a=a.substr(0,a.length-1);try{var b=$.ig.Date.prototype.parseExact(a,"s",null);return $.ig.Date.prototype.toLocalTime(b)}catch(c){$$t.$kg.al("Error occurred while parsing the date in W3CDTF format: "+a);return $$0.$s.now()}},aa:function(){if($$t.$kg.z==null){$$t.$kg.z=new $$8.l(1,"%[0-9A-F]{2}",8|1)}return $$t.$kg.z},ac:function(){if($$t.$kg.ab==null){$$t.$kg.ab=new $$8.l(1,"[\\-\\._~0-9A-Z]",8|1)}return $$t.$kg.ab},ae:function(){if($$t.$kg.ad==null){$$t.$kg.ad=new $$8.l(1,"([:@\\-\\._~!$&'()*+,;=0-9A-Z]|(%[0-9A-F]{2}))*",8|1)}return $$t.$kg.ad},y:function(){if($$t.$kg.x==null){$$t.$kg.x=new $$8.l(1,"[^.]",8|1)}return $$t.$kg.x},w:function(){if($$t.$kg.v==null){$$t.$kg.v=new $$8.l(1,"\\w:",8)}return $$t.$kg.v},al:function(a){},$type:new $.ig.Type("PackageUtilities",$.ig.$ot)},true);$c("AlternateContentChoice:bl","Object",{_a:null,_b:null,init:function(a,b,c){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$t.$bl.init1.call(this,1,[b],c)},init1:function(a,b,c){$.ig.$op.init.call(this);this._a=c;this._b=b},$type:new $.ig.Type("AlternateContentChoice",$.ig.$ot)},true);$c("AttributeValue:bm","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break;case 2:this.init2.apply(this,arguments);break}return}$$0.$bh.init.call(this)},a:null,d:null,init1:function(a,b,c,d,e){$$0.$bh.init.call(this);this.a=new $$t.fw(1,b,c,d);this.d=e},init2:function(a,b,c){$$0.$bh.init.call(this);this.a=b;this.d=c},toString:function(){return this.a.toString()+'="'+this.d+'"'},e:function(a,b,c,d){this.a.i(a,b,c);this.d=d},b:function(){return this.a.c()},c:function(){if(this.a.g=="http://www.w3.org/2000/xmlns/"){if(this.a.f=="xmlns"||this.a.h=="xmlns"){return true}}return false},$type:new $.ig.Type("AttributeValue",$$0.$bh.$type)},true);$c("CT_GraphicalObject:bn","Object",{init:function(){$.ig.$op.init.call(this)},_a:null,$type:new $.ig.Type("CT_GraphicalObject",$.ig.$ot)},true);$c("IGraphicalObjectContent:er","Object",{$type:new $.ig.Type("IGraphicalObjectContent",null)},true);$c("AlternateGraphicalObjectContent:bo","Object",{init:function(){$.ig.$op.init.call(this)},_choicesByRequiredNamespaces:null,choicesByRequiredNamespaces:function(a){if(arguments.length===1){this._choicesByRequiredNamespaces=a;return a}else{return this._choicesByRequiredNamespaces}},_fallbackContent:null,fallbackContent:function(a){if(arguments.length===1){this._fallbackContent=a;return a}else{return this._fallbackContent}},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitAlternateGraphicalObjectContent$i(this,b)},getStrictElementName:function(a){return $$t.$iz.ap},$type:new $.ig.Type("AlternateGraphicalObjectContent",$.ig.$ot,[$$t.$er.$type])},true);$c("CT_AdjustHandleList:bp","Object",{init:function(){this.a=new $$4.w($$t.$et.$type,0);$.ig.$op.init.call(this)},a:null,b:function(){return this.a},$type:new $.ig.Type("CT_AdjustHandleList",$.ig.$ot)},true);$c("CT_AdjPoint2D:bq","Object",{init:function(){this._a=new $$t.f7;this._b=new $$t.f7;$.ig.$op.init.call(this)},_a:null,_b:null,$type:new $.ig.Type("CT_AdjPoint2D",$.ig.$ot)},true);$c("CT_Angle:br","Object",{init:function(){this._a=new $$v.cc;$.ig.$op.init.call(this)},_a:null,$type:new $.ig.Type("CT_Angle",$.ig.$ot)},true);$c("CT_Blip:bs","Object",{init:function(){$.ig.$op.init.call(this)},_a:0,_b:null,_c:null,$type:new $.ig.Type("CT_Blip",$.ig.$ot)},true);$c("IEG_FillProperties:ef","Object",{$type:new $.ig.Type("IEG_FillProperties",null)},true);$c("CT_BlipFillProperties:bt","Object",{init:function(){$.ig.$op.init.call(this)},_blip:null,blip:function(a){if(arguments.length===1){this._blip=a;return a}else{return this._blip}},_dpi:$m($$0.$be.$type,null),dpi:function(a){if(arguments.length===1){this._dpi=a;return a}else{return this._dpi}},_fillMode:null,fillMode:function(a){if(arguments.length===1){this._fillMode=a;return a}else{return this._fillMode}},_rotWithShape:$m($$0.$aq.$type,null),rotWithShape:function(a){if(arguments.length===1){this._rotWithShape=a;return a}else{return this._rotWithShape}},_srcRect:null,srcRect:function(a){if(arguments.length===1){this._srcRect=a;return a}else{return this._srcRect}},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_BlipFillProperties$i(this,b)},$type:new $.ig.Type("CT_BlipFillProperties",$.ig.$ot,[$$t.$ef.$type])},true);$c("CT_Color:bu","Object",{init:function(){$.ig.$op.init.call(this)},_a:null,$type:new $.ig.Type("CT_Color",$.ig.$ot)},true);$c("CT_ComplementTransform:bv","Object",{init:function(){$.ig.$op.init.call(this)},$type:new $.ig.Type("CT_ComplementTransform",$.ig.$ot)},true);$c("CT_Connection:bw","Object",{init:function(){$.ig.$op.init.call(this)},_a:0,_b:0,$type:new $.ig.Type("CT_Connection",$.ig.$ot)},true);$c("CT_ConnectionSite:bx","Object",{init:function(){this._b=new $$t.f6;$.ig.$op.init.call(this)},_a:null,_b:null,$type:new $.ig.Type("CT_ConnectionSite",$.ig.$ot)},true);$c("CT_ConnectionSiteList:by","Object",{init:function(){this.a=new $$4.w($$t.$bx.$type,0);$.ig.$op.init.call(this)},a:null,b:function(){return this.a},$type:new $.ig.Type("CT_ConnectionSiteList",$.ig.$ot)},true);$c("ICT_ShapePropertiesOwner:ew","Object",{$type:new $.ig.Type("ICT_ShapePropertiesOwner",null)},true);$c("ICT_ShapeStyleOwner:ex","Object",{$type:new $.ig.Type("ICT_ShapeStyleOwner",null)},true);$c("CT_Connector:bz","Object",{init:function(){$.ig.$op.init.call(this)},_fPublished:false,fPublished:function(a){if(arguments.length===1){this._fPublished=a;return a}else{return this._fPublished}},_macro:null,macro:function(a){if(arguments.length===1){this._macro=a;return a}else{return this._macro}},_nvCxnSpPr:null,nvCxnSpPr:function(a){if(arguments.length===1){this._nvCxnSpPr=a;return a}else{return this._nvCxnSpPr}},_spPr:null,spPr:function(a){if(arguments.length===1){this._spPr=a;return a}else{return this._spPr}},_style:null,style:function(a){if(arguments.length===1){this._style=a;return a}else{return this._style}},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_Connector$i(this,b)},getStrictElementName:function(a){return a._drawingPropertiesNamespace().av},$type:new $.ig.Type("CT_Connector",$.ig.$ot,[$$t.$er.$type,$$t.$ew.$type,$$t.$ex.$type])},true);$c("CT_ConnectorLocking:b0","Object",{init:function(){$.ig.$op.init.call(this)},_f:false,_j:false,_i:false,_c:false,_g:false,_h:false,_e:false,_a:false,_b:false,_d:false,$type:new $.ig.Type("CT_ConnectorLocking",$.ig.$ot)},true);$c("CT_NonVisualBase:ct","Object",{init:function(){$.ig.$op.init.call(this)},_a:null,$type:new $.ig.Type("CT_NonVisualBase",$.ig.$ot)},true);$c("CT_ConnectorNonVisual:b1","CT_NonVisualBase",{init:function(){$$t.$ct.init.call(this)},_b:null,$type:new $.ig.Type("CT_ConnectorNonVisual",$$t.$ct.$type)},true);$c("IEG_Geometry:eh","Object",{$type:new $.ig.Type("IEG_Geometry",null)},true);$c("CT_CustomGeometry2D:b2","Object",{init:function(){$.ig.$op.init.call(this)},_avLst:null,avLst:function(a){if(arguments.length===1){this._avLst=a;return a}else{return this._avLst}},_gdLst:null,gdLst:function(a){if(arguments.length===1){this._gdLst=a;return a}else{return this._gdLst}},_ahLst:null,ahLst:function(a){if(arguments.length===1){this._ahLst=a;return a}else{return this._ahLst}},_cxnLst:null,cxnLst:function(a){if(arguments.length===1){this._cxnLst=a;return a}else{return this._cxnLst}},_rect:null,rect:function(a){if(arguments.length===1){this._rect=a;return a}else{return this._rect}},_pathLst:null,pathLst:function(a){if(arguments.length===1){this._pathLst=a;return a}else{return this._pathLst}},_xmlCache:null,xmlCache:function(a){if(arguments.length===1){this._xmlCache=a;return a}else{return this._xmlCache}},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_CustomGeometry2D$i(this,b)},$type:new $.ig.Type("CT_CustomGeometry2D",$.ig.$ot,[$$t.$eh.$type])},true);$c("CT_DashStop:b3","Object",{init:function(){this._a=new $$t.hf;this._b=new $$t.hf;$.ig.$op.init.call(this)},_a:null,_b:null,$type:new $.ig.Type("CT_DashStop",$.ig.$ot)},true);$c("IEG_LineDashProperties:ej","Object",{$type:new $.ig.Type("IEG_LineDashProperties",null)},true);$c("CT_DashStopList:b4","Object",{init:function(){this.a=new $$4.w($$t.$b3.$type,0);$.ig.$op.init.call(this)},a:null,ds:function(){return this.a},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_DashStopList$i(this,b)},$type:new $.ig.Type("CT_DashStopList",$.ig.$ot,[$$t.$ej.$type])},true);$c("CT_EmbeddedWAVAudioFile:b5","Object",{init:function(){$.ig.$op.init.call(this);this._b=""},_a:null,_b:null,$type:new $.ig.Type("CT_EmbeddedWAVAudioFile",$.ig.$ot)},true);$c("CT_FixedPercentage:b6","Object",{init:function(){this._a=new $$t.gq;$.ig.$op.init.call(this)},_a:null,$type:new $.ig.Type("CT_FixedPercentage",$.ig.$ot)},true);$c("CT_FontReference:b7","Object",{init:function(){$.ig.$op.init.call(this)},_a:null,_b:0,$type:new $.ig.Type("CT_FontReference",$.ig.$ot)},true);$c("CT_GeomGuide:b8","Object",{init:function(){$.ig.$op.init.call(this)},_a:null,_b:null,$type:new $.ig.Type("CT_GeomGuide",$.ig.$ot)},true);$c("CT_GeomGuideList:b9","Object",{init:function(){this.a=new $$4.w($$t.$b8.$type,0);$.ig.$op.init.call(this)},a:null,b:function(){return this.a},$type:new $.ig.Type("CT_GeomGuideList",$.ig.$ot)},true);$c("CT_GeomRect:ca","Object",{init:function(){this._b=new $$t.f7;this._d=new $$t.f7;this._c=new $$t.f7;this._a=new $$t.f7;$.ig.$op.init.call(this)},_b:null,_d:null,_c:null,_a:null,$type:new $.ig.Type("CT_GeomRect",$.ig.$ot)},true);$c("IShapesOwner:ey","Object",{$type:new $.ig.Type("IShapesOwner",null)},true);$c("CT_GraphicalObjectData:cb","Object",{init:function(){$.ig.$op.init.call(this)},a:null,contentByStrictElementName:function(a){if(arguments.length===1){this.a=a;return a}else{if(this.a==null){this.a=new $$4.w($$6.$u.$type.specialize(String,$.ig.$op.$type),0)}return this.a}},_uri:null,uri:function(a){if(arguments.length===1){this._uri=a;return a}else{return this._uri}},addShape:function(a,b){this.contentByStrictElementName().add($$6.$w.a(String,$.ig.$op.$type,b.getStrictElementName(a),b))},$type:new $.ig.Type("CT_GraphicalObjectData",$.ig.$ot,[$$t.$ey.$type])},true);$c("CT_GraphicalObjectFrame:cc","Object",{init:function(){$.ig.$op.init.call(this)},_fPublished:false,fPublished:function(a){if(arguments.length===1){this._fPublished=a;return a}else{return this._fPublished}},_graphic:null,graphic:function(a){if(arguments.length===1){this._graphic=a;return a}else{return this._graphic}},_macro:null,macro:function(a){if(arguments.length===1){this._macro=a;return a}else{return this._macro}},_nvGraphicFramePr:null,nvGraphicFramePr:function(a){if(arguments.length===1){this._nvGraphicFramePr=a;return a}else{return this._nvGraphicFramePr}},_xfrm:null,xfrm:function(a){if(arguments.length===1){this._xfrm=a;return a}else{return this._xfrm}},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_GraphicalObjectFrame$i(this,b)},getStrictElementName:function(a){return a._drawingPropertiesNamespace().a3},$type:new $.ig.Type("CT_GraphicalObjectFrame",$.ig.$ot,[$$t.$er.$type])},true);$c("CT_GraphicalObjectFrameLocking:cd","Object",{init:function(){$.ig.$op.init.call(this)},_c:false,_b:false,_f:false,_a:false,_d:false,_e:false,$type:new $.ig.Type("CT_GraphicalObjectFrameLocking",$.ig.$ot)},true);$c("CT_GraphicalObjectFrameNonVisual:ce","CT_NonVisualBase",{init:function(){$$t.$ct.init.call(this)},_b:null,$type:new $.ig.Type("CT_GraphicalObjectFrameNonVisual",$$t.$ct.$type)},true);$c("CT_GrayscaleTransform:cf","Object",{init:function(){$.ig.$op.init.call(this)},$type:new $.ig.Type("CT_GrayscaleTransform",$.ig.$ot)},true);$c("CT_GroupFillProperties:cg","Object",{init:function(){$.ig.$op.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_GroupFillProperties$i(this,b)},$type:new $.ig.Type("CT_GroupFillProperties",$.ig.$ot,[$$t.$ef.$type])},true);$c("CT_GroupLocking:ch","Object",{init:function(){$.ig.$op.init.call(this)},_b:false,_g:false,_f:false,_e:false,_a:false,_c:false,_d:false,$type:new $.ig.Type("CT_GroupLocking",$.ig.$ot)},true);$c("CT_GroupShape:ci","Object",{init:function(){this.c=new $$4.w($$t.$er.$type,0);$.ig.$op.init.call(this)},_grpSpPr:null,grpSpPr:function(a){if(arguments.length===1){this._grpSpPr=a;return a}else{return this._grpSpPr}},_nvGrpSpPr:null,nvGrpSpPr:function(a){if(arguments.length===1){this._nvGrpSpPr=a;return a}else{return this._nvGrpSpPr}},c:null,shapes:function(){return this.c},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_GroupShape$i(this,b)},getStrictElementName:function(a){return a._drawingPropertiesNamespace().a4},addShape:function(a,b){this.shapes().add(b)},$type:new $.ig.Type("CT_GroupShape",$.ig.$ot,[$$t.$er.$type,$$t.$ey.$type])},true);$c("CT_GroupShapeNonVisual:cj","CT_NonVisualBase",{init:function(){$$t.$ct.init.call(this)},_b:null,$type:new $.ig.Type("CT_GroupShapeNonVisual",$$t.$ct.$type)},true);$c("CT_ShapePropertiesBase:dr","Object",{init:function(){$.ig.$op.init.call(this)},_b:$m($$t.$f8.$type,null),_a:null,$type:new $.ig.Type("CT_ShapePropertiesBase",$.ig.$ot)},true);$c("CT_GroupShapeProperties:ck","CT_ShapePropertiesBase",{init:function(){$$t.$dr.init.call(this)},_c:null,$type:new $.ig.Type("CT_GroupShapeProperties",$$t.$dr.$type)},true);$c("CT_Hyperlink:cl","Object",{init:function(){$.ig.$op.init.call(this);this._g="";this._e="";this._h="";this._i="";this._d=true},_e:null,_b:false,_c:false,_d:false,_f:null,_g:null,_a:null,_h:null,_i:null,$type:new $.ig.Type("CT_Hyperlink",$.ig.$ot)},true);$c("CT_InverseTransform:cm","Object",{init:function(){$.ig.$op.init.call(this)},$type:new $.ig.Type("CT_InverseTransform",$.ig.$ot)},true);$c("CT_LineEndProperties:cn","Object",{init:function(){$.ig.$op.init.call(this)},_a:$m($$t.$g1.$type,null),_b:$m($$t.$g3.$type,null),_c:$m($$t.$g2.$type,null),$type:new $.ig.Type("CT_LineEndProperties",$.ig.$ot)},true);$c("IEG_LineJoinProperties:en","Object",{$type:new $.ig.Type("IEG_LineJoinProperties",null)},true);$c("CT_LineJoinBevel:co","Object",{init:function(){$.ig.$op.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_LineJoinBevel$i(this,b)},$type:new $.ig.Type("CT_LineJoinBevel",$.ig.$ot,[$$t.$en.$type])},true);$c("ST_PositivePercentage:hf","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}this.a=new $$t.hb;$$0.$bh.init.call(this)},a:null,init1:function(a,b){this.a=new $$t.hb;$$0.$bh.init.call(this);$$v.$aq.au($$t.$hf.$type,$$t.$hb.k(b),"value",0,1.7976931348623157e308);this.a=b},equals:function(a){var b=$m($$t.$hf.$type,$b($$t.$hf.$type,a));if($$t.$hf.j(b,$m($$t.$hf.$type,null))){return false}return $$t.$hf.g(this,b.getValueOrDefault())},getHashCode:function(){return this.a.getHashCode()},toString:function(){return this.s(1)},s:function(a){return this.a.p(a)},f:function(a,b){var c=$$t.$hf.r(a,b);if($$t.$hf.j(c,$m($$t.$hf.$type,null))){return c.getValueOrDefault()}throw $$v.$aq.m($$t.$hf.$type,a)},r:function(a,b){return $$t.$hf.q($$t.$hb.o(a,b))},g:function(a,b){return $$t.$hb.d(a.a,b.a)},h:function(a,b){if(!a.hasValue()){return!b.hasValue()}else if(!b.hasValue()){return false}return $$t.$hf.g(a.value(),b.value())},i:function(a,b){return!$$t.$hf.g(a,b)},j:function(a,b){if(!a.hasValue()){return b.hasValue()}else if(!b.hasValue()){return true}return $$t.$hf.i(a.value(),b.value())},d:function(a){return new $$t.hf(1,a)},q:function(a){if(!a.hasValue()){return $m($$t.$hf.$type,null)}return $m($$t.$hf.$type,$$t.$hf.d(a.value()))},b:function(a){return a.a},p:function(a){if(!a.hasValue()){return $m($$t.$hb.$type,null)}return $m($$t.$hb.$type,$$t.$hf.b(a.value()))},m:function(a){return $$t.$hb.k(a.a)},o:function(a){if(!a.hasValue()){return $m(Number,null)}return $m(Number,$$t.$hf.m(a.value()))},$type:new $.ig.Type("ST_PositivePercentage",$$0.$bh.$type)},true);$c("CT_LineJoinMiterProperties:cp","Object",{init:function(){$.ig.$op.init.call(this)},_lim:$m($$t.$hf.$type,null),lim:function(a){if(arguments.length===1){this._lim=a;return a}else{return this._lim}},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_LineJoinMiterProperties$i(this,b)},$type:new $.ig.Type("CT_LineJoinMiterProperties",$.ig.$ot,[$$t.$en.$type])},true);$c("CT_LineJoinRound:cq","Object",{init:function(){$.ig.$op.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_LineJoinRound$i(this,b)},$type:new $.ig.Type("CT_LineJoinRound",$.ig.$ot,[$$t.$en.$type])},true);$c("ST_LineWidth:g4","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}this.a=new $$t.gh;$$0.$bh.init.call(this)},a:null,init1:function(a,b){this.a=new $$t.gh;$$0.$bh.init.call(this);$$v.$aq.au($$t.$g4.$type,$$t.$gh.e(b),"value",0,20116800);this.a=b},equals:function(a){var b=$m($$t.$g4.$type,$b($$t.$g4.$type,a));
if($$t.$g4.j(b,$m($$t.$g4.$type,null))){return false}return $$t.$g4.g(this,b.getValueOrDefault())},getHashCode:function(){return this.a.getHashCode()},toString:function(){return this.a.toString()},f:function(a){var b=$$t.$g4.t(a);if($$t.$g4.j(b,$m($$t.$g4.$type,null))){return b.getValueOrDefault()}throw $$v.$aq.m($$t.$g4.$type,a)},t:function(a){return $$t.$g4.s($$t.$gh.j(a))},g:function(a,b){return $$t.$gh.e(a.a)==$$t.$gh.e(b.a)},h:function(a,b){if(!a.hasValue()){return!b.hasValue()}else if(!b.hasValue()){return false}return $$t.$g4.g(a.value(),b.value())},i:function(a,b){return!$$t.$g4.g(a,b)},j:function(a,b){if(!a.hasValue()){return b.hasValue()}else if(!b.hasValue()){return true}return $$t.$g4.i(a.value(),b.value())},d:function(a){return new $$t.g4(1,a)},s:function(a){if(!a.hasValue()){return $m($$t.$g4.$type,null)}return $m($$t.$g4.$type,$$t.$g4.d(a.value()))},b:function(a){return a.a},r:function(a){if(!a.hasValue()){return $m($$t.$gh.$type,null)}return $m($$t.$gh.$type,$$t.$g4.b(a.value()))},m:function(a){return $$t.$gh.e(a.a)},q:function(a){if(!a.hasValue()){return $m($$0.$aw.$type,null)}return $m($$0.$aw.$type,$$t.$g4.m(a.value()))},$type:new $.ig.Type("ST_LineWidth",$$0.$bh.$type)},true);$c("CT_LineProperties:cr","Object",{init:function(){$.ig.$op.init.call(this)},_f:$m($$t.$ha.$type,null),_g:$m($$t.$g0.$type,null),_h:$m($$t.$gc.$type,null),_d:null,_a:null,_c:null,_e:null,_b:null,_i:$m($$t.$g4.$type,null),$type:new $.ig.Type("CT_LineProperties",$.ig.$ot)},true);$c("IEG_LineFillProperties:el","Object",{$type:new $.ig.Type("IEG_LineFillProperties",null)},true);$c("CT_NoFillProperties:cs","Object",{init:function(){$.ig.$op.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_NoFillProperties$i(this,b)},accept$21:function(visitor,argument){return this._accept$21$i.apply(this,arguments)},_accept$21$i:function($tArg,$tResult,a,b){return a._visitCT_NoFillProperties$i(this,b)},$type:new $.ig.Type("CT_NoFillProperties",$.ig.$ot,[$$t.$ef.$type,$$t.$el.$type])},true);$c("CT_NonVisualConnectorProperties:cu","Object",{init:function(){$.ig.$op.init.call(this)},_c:null,_a:null,_b:null,$type:new $.ig.Type("CT_NonVisualConnectorProperties",$.ig.$ot)},true);$c("CT_NonVisualDrawingProps:cv","Object",{init:function(){this._c=new $$t.gk;$.ig.$op.init.call(this)},_e:null,_d:false,_a:null,_b:null,_c:null,_f:null,_g:null,$type:new $.ig.Type("CT_NonVisualDrawingProps",$.ig.$ot)},true);$c("CT_NonVisualGraphicFrameProperties:cw","Object",{init:function(){$.ig.$op.init.call(this)},_a:null,$type:new $.ig.Type("CT_NonVisualGraphicFrameProperties",$.ig.$ot)},true);$c("CT_NonVisualGroupDrawingShapeProps:cx","Object",{init:function(){$.ig.$op.init.call(this)},_a:null,$type:new $.ig.Type("CT_NonVisualGroupDrawingShapeProps",$.ig.$ot)},true);$c("CT_NonVisualPictureProperties:cy","Object",{init:function(){$.ig.$op.init.call(this);this._b=true},_a:null,_b:false,$type:new $.ig.Type("CT_NonVisualPictureProperties",$.ig.$ot)},true);$c("CT_NonVisualDrawingShapeProps:cz","Object",{init:function(){$.ig.$op.init.call(this)},_a:null,_b:false,$type:new $.ig.Type("CT_NonVisualDrawingShapeProps",$.ig.$ot)},true);$c("CT_Path2D:c0","Object",{init:function(){this.a=new $$4.w($$t.$eu.$type,0);$.ig.$op.init.call(this)},a:null,b:function(){return this.a},_g:$m($$v.$b7.$type,null),_e:$m($$v.$b7.$type,null),_d:$m($$t.$g9.$type,null),_f:$m($$0.$aq.$type,null),_c:$m($$0.$aq.$type,null),$type:new $.ig.Type("CT_Path2D",$.ig.$ot)},true);$c("IPath2DCommand:eu","Object",{$type:new $.ig.Type("IPath2DCommand",null)},true);$c("CT_Path2DArcTo:c1","Object",{init:function(){this._wR=new $$t.f7;this._hR=new $$t.f7;this._stAng=new $$t.f6;this._swAng=new $$t.f6;$.ig.$op.init.call(this)},_wR:null,wR:function(a){if(arguments.length===1){this._wR=a;return a}else{return this._wR}},_hR:null,hR:function(a){if(arguments.length===1){this._hR=a;return a}else{return this._hR}},_stAng:null,stAng:function(a){if(arguments.length===1){this._stAng=a;return a}else{return this._stAng}},_swAng:null,swAng:function(a){if(arguments.length===1){this._swAng=a;return a}else{return this._swAng}},accept$2:function(visitor,argument){arguments[1]=arguments[1]!==void 0?arguments[1]:null;return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_Path2DArcTo$i(this,b)},$type:new $.ig.Type("CT_Path2DArcTo",$.ig.$ot,[$$t.$eu.$type])},true);$c("CT_Path2DClose:c2","Object",{init:function(){$.ig.$op.init.call(this)},accept$2:function(visitor,argument){arguments[1]=arguments[1]!==void 0?arguments[1]:null;return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_Path2DClose$i(this,b)},$type:new $.ig.Type("CT_Path2DClose",$.ig.$ot,[$$t.$eu.$type])},true);$c("CT_Path2DCubicBezierTo:c3","Object",{init:function(){$.ig.$op.init.call(this)},_pt1:null,pt1:function(a){if(arguments.length===1){this._pt1=a;return a}else{return this._pt1}},_pt2:null,pt2:function(a){if(arguments.length===1){this._pt2=a;return a}else{return this._pt2}},_pt3:null,pt3:function(a){if(arguments.length===1){this._pt3=a;return a}else{return this._pt3}},accept$2:function(visitor,argument){arguments[1]=arguments[1]!==void 0?arguments[1]:null;return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_Path2DCubicBezierTo$i(this,b)},$type:new $.ig.Type("CT_Path2DCubicBezierTo",$.ig.$ot,[$$t.$eu.$type])},true);$c("CT_Path2DLineTo:c4","Object",{init:function(){$.ig.$op.init.call(this)},_pt:null,pt:function(a){if(arguments.length===1){this._pt=a;return a}else{return this._pt}},accept$2:function(visitor,argument){arguments[1]=arguments[1]!==void 0?arguments[1]:null;return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_Path2DLineTo$i(this,b)},$type:new $.ig.Type("CT_Path2DLineTo",$.ig.$ot,[$$t.$eu.$type])},true);$c("CT_Path2DList:c5","Object",{init:function(){this.a=new $$4.w($$t.$c0.$type,0);$.ig.$op.init.call(this)},a:null,b:function(){return this.a},$type:new $.ig.Type("CT_Path2DList",$.ig.$ot)},true);$c("CT_Path2DMoveTo:c6","Object",{init:function(){$.ig.$op.init.call(this)},_pt:null,pt:function(a){if(arguments.length===1){this._pt=a;return a}else{return this._pt}},accept$2:function(visitor,argument){arguments[1]=arguments[1]!==void 0?arguments[1]:null;return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_Path2DMoveTo$i(this,b)},$type:new $.ig.Type("CT_Path2DMoveTo",$.ig.$ot,[$$t.$eu.$type])},true);$c("CT_Path2DQuadBezierTo:c7","Object",{init:function(){$.ig.$op.init.call(this)},_pt1:null,pt1:function(a){if(arguments.length===1){this._pt1=a;return a}else{return this._pt1}},_pt2:null,pt2:function(a){if(arguments.length===1){this._pt2=a;return a}else{return this._pt2}},accept$2:function(visitor,argument){arguments[1]=arguments[1]!==void 0?arguments[1]:null;return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_Path2DQuadBezierTo$i(this,b)},$type:new $.ig.Type("CT_Path2DQuadBezierTo",$.ig.$ot,[$$t.$eu.$type])},true);$c("CT_Percentage:c8","Object",{init:function(){this._a=new $$t.hb;$.ig.$op.init.call(this)},_a:null,$type:new $.ig.Type("CT_Percentage",$.ig.$ot)},true);$c("CT_Picture:c9","Object",{init:function(){$.ig.$op.init.call(this)},_blipFill:null,blipFill:function(a){if(arguments.length===1){this._blipFill=a;return a}else{return this._blipFill}},_fPublished:false,fPublished:function(a){if(arguments.length===1){this._fPublished=a;return a}else{return this._fPublished}},_macro:null,macro:function(a){if(arguments.length===1){this._macro=a;return a}else{return this._macro}},_nvPicPr:null,nvPicPr:function(a){if(arguments.length===1){this._nvPicPr=a;return a}else{return this._nvPicPr}},_spPr:null,spPr:function(a){if(arguments.length===1){this._spPr=a;return a}else{return this._spPr}},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_Picture$i(this,b)},getStrictElementName:function(a){return a._drawingPropertiesNamespace().bs},$type:new $.ig.Type("CT_Picture",$.ig.$ot,[$$t.$er.$type,$$t.$ew.$type])},true);$c("CT_PictureLocking:da","Object",{init:function(){$.ig.$op.init.call(this)},_a:false,_b:false,_c:false,_d:false,_e:false,_f:false,_g:false,_h:false,_i:false,_j:false,_k:false,$type:new $.ig.Type("CT_PictureLocking",$.ig.$ot)},true);$c("CT_PictureNonVisual:db","CT_NonVisualBase",{init:function(){$$t.$ct.init.call(this)},_b:null,$type:new $.ig.Type("CT_PictureNonVisual",$$t.$ct.$type)},true);$c("ST_GeomGuideName:gs","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},a:null,init1:function(a,b){$$0.$bh.init.call(this);this.a=b},$type:new $.ig.Type("ST_GeomGuideName",$$0.$bh.$type)},true);$c("ST_AdjCoordinate:f7","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break;case 2:this.init2.apply(this,arguments);break}return}$$0.$bh.init.call(this)},b:$m($$v.$cd.$type,null),c:$m($$t.$gs.$type,null),init1:function(a,b){$$0.$bh.init.call(this);this.b=$m($$v.$cd.$type,null);this.c=$m($$t.$gs.$type,new $$t.gs(1,b))},init2:function(a,b){$$0.$bh.init.call(this);this.b=$m($$v.$cd.$type,b);this.c=$m($$t.$gs.$type,null)},e:function(){return this.c},d:function(){return this.b},a:function(a){var b=$$v.$cd.s(a);if($l(b,null)){return new $$t.f7(2,b.value())}return new $$t.f7(1,a)},$type:new $.ig.Type("ST_AdjCoordinate",$$0.$bh.$type)},true);$c("ST_AdjAngle:f6","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break;case 2:this.init2.apply(this,arguments);break}return}$$0.$bh.init.call(this)},b:$m($$v.$cc.$type,null),c:$m($$t.$gs.$type,null),init1:function(a,b){$$0.$bh.init.call(this);this.b=$m($$v.$cc.$type,null);this.c=$m($$t.$gs.$type,new $$t.gs(1,b))},init2:function(a,b){$$0.$bh.init.call(this);this.b=$m($$v.$cc.$type,b);this.c=$m($$t.$gs.$type,null)},e:function(){return this.c},d:function(){return this.b},a:function(a){var b=$$v.$cc.k(a);if(b.hasValue()){return new $$t.f6(2,b.value())}return new $$t.f6(1,a)},$type:new $.ig.Type("ST_AdjAngle",$$0.$bh.$type)},true);$c("IAdjustHandle:et","Object",{$type:new $.ig.Type("IAdjustHandle",null)},true);$c("CT_PolarAdjustHandle:dc","Object",{init:function(){$.ig.$op.init.call(this)},_pos:null,pos:function(a){if(arguments.length===1){this._pos=a;return a}else{return this._pos}},_gdRefR:$m($$t.$gs.$type,null),gdRefR:function(a){if(arguments.length===1){this._gdRefR=a;return a}else{return this._gdRefR}},_minR:$m($$t.$f7.$type,null),minR:function(a){if(arguments.length===1){this._minR=a;return a}else{return this._minR}},_maxR:$m($$t.$f7.$type,null),maxR:function(a){if(arguments.length===1){this._maxR=a;return a}else{return this._maxR}},_gdRefAng:$m($$t.$gs.$type,null),gdRefAng:function(a){if(arguments.length===1){this._gdRefAng=a;return a}else{return this._gdRefAng}},_minAng:$m($$t.$f6.$type,null),minAng:function(a){if(arguments.length===1){this._minAng=a;return a}else{return this._minAng}},_maxAng:$m($$t.$f6.$type,null),maxAng:function(a){if(arguments.length===1){this._maxAng=a;return a}else{return this._maxAng}},$type:new $.ig.Type("CT_PolarAdjustHandle",$.ig.$ot,[$$t.$et.$type])},true);$c("CT_PositiveFixedAngle:dd","Object",{init:function(){this._a=new $$t.hd;$.ig.$op.init.call(this)},_a:null,$type:new $.ig.Type("CT_PositiveFixedAngle",$.ig.$ot)},true);$c("CT_PositiveFixedPercentage:de","Object",{init:function(){this._a=new $$t.he;$.ig.$op.init.call(this)},_a:null,$type:new $.ig.Type("CT_PositiveFixedPercentage",$.ig.$ot)},true);$c("CT_PositivePercentage:df","Object",{init:function(){this._a=new $$t.hf;$.ig.$op.init.call(this)},_a:null,$type:new $.ig.Type("CT_PositivePercentage",$.ig.$ot)},true);$c("CT_PresetGeometry2D:dg","Object",{init:function(){$.ig.$op.init.call(this)},_avLst:null,avLst:function(a){if(arguments.length===1){this._avLst=a;return a}else{return this._avLst}},_prst:0,prst:function(a){if(arguments.length===1){this._prst=a;return a}else{return this._prst}},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_PresetGeometry2D$i(this,b)},$type:new $.ig.Type("CT_PresetGeometry2D",$.ig.$ot,[$$t.$eh.$type])},true);$c("CT_PresetLineDashProperties:dh","Object",{init:function(){$.ig.$op.init.call(this)},_val:$m($$t.$hh.$type,null),val:function(a){if(arguments.length===1){this._val=a;return a}else{return this._val}},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_PresetLineDashProperties$i(this,b)},$type:new $.ig.Type("CT_PresetLineDashProperties",$.ig.$ot,[$$t.$ej.$type])},true);$c("IEG_TextRun:ep","Object",{$type:new $.ig.Type("IEG_TextRun",null)},true);$c("CT_RegularTextRun:di","Object",{init:function(){$.ig.$op.init.call(this)},_rPr:null,rPr:function(a){if(arguments.length===1){this._rPr=a;return a}else{return this._rPr}},_t:null,t:function(a){if(arguments.length===1){this._t=a;return a}else{return this._t}},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_RegularTextRun$i(this,b)},$type:new $.ig.Type("CT_RegularTextRun",$.ig.$ot,[$$t.$ep.$type])},true);$c("CT_RelId:dj","Object",{init:function(){$.ig.$op.init.call(this)},_a:null,$type:new $.ig.Type("CT_RelId",$.ig.$ot)},true);$c("CT_RelativeRect:dk","Object",{init:function(){this._a=new $$t.hb;this._b=new $$t.hb;this._c=new $$t.hb;this._d=new $$t.hb;$.ig.$op.init.call(this)},_a:null,_b:null,_c:null,_d:null,e:function(){return $$t.$hb.d(this._a,$$t.$hb.a(0))||$$t.$hb.d(this._b,$$t.$hb.a(0))||$$t.$hb.d(this._c,$$t.$hb.a(0))||$$t.$hb.d(this._d,$$t.$hb.a(0))},$type:new $.ig.Type("CT_RelativeRect",$.ig.$ot)},true);$c("IEG_ColorChoice:d9","Object",{$type:new $.ig.Type("IEG_ColorChoice",null)},true);$c("EG_ColorChoice:d8","Object",{init:function(){this.a=new $$4.w($$t.$eb.$type,0);$.ig.$op.init.call(this)},accept$2:function(visitor,argument){arguments[1]=arguments[1]!==void 0?arguments[1]:null;return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){},a:null,colorTransforms:function(){return this.a},$type:new $.ig.Type("EG_ColorChoice",$.ig.$ot,[$$t.$d9.$type])},true);$c("CT_SchemeColor:dl","EG_ColorChoice",{init:function(){$$t.$d8.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_SchemeColor$i(this,b)},_value:0,value:function(a){if(arguments.length===1){this._value=a;return a}else{return this._value}},$type:new $.ig.Type("CT_SchemeColor",$$t.$d8.$type,[$$t.$d9.$type])},true);$c("CT_Shape:dm","Object",{init:function(){$.ig.$op.init.call(this)},_fLocksText:false,fLocksText:function(a){if(arguments.length===1){this._fLocksText=a;return a}else{return this._fLocksText}},_fPublished:false,fPublished:function(a){if(arguments.length===1){this._fPublished=a;return a}else{return this._fPublished}},_macro:null,macro:function(a){if(arguments.length===1){this._macro=a;return a}else{return this._macro}},_textlink:null,textlink:function(a){if(arguments.length===1){this._textlink=a;return a}else{return this._textlink}},_nvSpPr:null,nvSpPr:function(a){if(arguments.length===1){this._nvSpPr=a;return a}else{return this._nvSpPr}},_spPr:null,spPr:function(a){if(arguments.length===1){this._spPr=a;return a}else{return this._spPr}},_style:null,style:function(a){if(arguments.length===1){this._style=a;return a}else{return this._style}},_txBody:null,txBody:function(a){if(arguments.length===1){this._txBody=a;return a}else{return this._txBody}},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_Shape$i(this,b)},getStrictElementName:function(a){return a._drawingPropertiesNamespace().bw},$type:new $.ig.Type("CT_Shape",$.ig.$ot,[$$t.$er.$type,$$t.$ew.$type,$$t.$ex.$type])},true);$c("CT_ShapeLocking:dn","Object",{init:function(){$.ig.$op.init.call(this)},_f:false,_j:false,_i:false,_c:false,_g:false,_h:false,_e:false,_a:false,_b:false,_d:false,_k:false,$type:new $.ig.Type("CT_ShapeLocking",$.ig.$ot)},true);$c("CT_ShapeNonVisual:dp","CT_NonVisualBase",{init:function(){$$t.$ct.init.call(this)},_b:null,$type:new $.ig.Type("CT_ShapeNonVisual",$$t.$ct.$type)},true);$c("CT_ShapeProperties:dq","CT_ShapePropertiesBase",{init:function(){$$t.$dr.init.call(this)},_e:null,_c:null,_d:null,$type:new $.ig.Type("CT_ShapeProperties",$$t.$dr.$type)},true);$c("CT_ShapeStyle:ds","Object",{init:function(){$.ig.$op.init.call(this)},_c:null,_b:null,_d:null,_a:null,$type:new $.ig.Type("CT_ShapeStyle",$.ig.$ot)},true);$c("CT_Slicer:dt","Object",{init:function(){$.ig.$op.init.call(this)},_a:null,$type:new $.ig.Type("CT_Slicer",$.ig.$ot)},true);$c("CT_SolidFillProperties:du","Object",{init:function(){$.ig.$op.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_SolidFillProperties$i(this,b)},accept$21:function(visitor,argument){return this._accept$21$i.apply(this,arguments)},_accept$21$i:function($tArg,$tResult,a,b){return a._visitCT_SolidFillProperties$i(this,b)},_value:null,value:function(a){if(arguments.length===1){this._value=a;return a}else{return this._value}},$type:new $.ig.Type("CT_SolidFillProperties",$.ig.$ot,[$$t.$ef.$type,$$t.$el.$type])},true);$c("CT_SRgbColor:dv","EG_ColorChoice",{init:function(){this._value=new $$t.gv;$$t.$d8.init.call(this)},accept$2:function(visitor,argument){arguments[1]=arguments[1]!==void 0?arguments[1]:null;return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_SRgbColor$i(this,b)},_value:null,value:function(a){if(arguments.length===1){this._value=a;return a}else{return this._value}},$type:new $.ig.Type("CT_SRgbColor",$$t.$d8.$type,[$$t.$d9.$type])},true);$c("IEG_FillModeProperties:ed","Object",{$type:new $.ig.Type("IEG_FillModeProperties",null)},true);$c("CT_StretchInfoProperties:dw","Object",{init:function(){$.ig.$op.init.call(this)},_fillRect:null,fillRect:function(a){if(arguments.length===1){this._fillRect=a;return a}else{return this._fillRect}},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_StretchInfoProperties$i(this,b)},$type:new $.ig.Type("CT_StretchInfoProperties",$.ig.$ot,[$$t.$ed.$type])},true);$c("CT_StyleMatrixReference:dx","Object",{init:function(){$.ig.$op.init.call(this)},_a:null,_b:0,$type:new $.ig.Type("CT_StyleMatrixReference",$.ig.$ot)},true);$c("CT_SysColor:dy","EG_ColorChoice",{init:function(){this._lastColor=new $$t.gv;$$t.$d8.init.call(this)},accept$2:function(visitor,argument){arguments[1]=arguments[1]!==void 0?arguments[1]:null;return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_SysColor$i(this,b)},_lastColor:null,lastColor:function(a){if(arguments.length===1){this._lastColor=a;return a}else{return this._lastColor}},_value:0,value:function(a){if(arguments.length===1){this._value=a;return a}else{return this._value}},$type:new $.ig.Type("CT_SysColor",$$t.$d8.$type,[$$t.$d9.$type])},true);$c("CT_TextBody:dz","Object",{init:function(){this.c=new $$4.w($$t.$d4.$type,0);$.ig.$op.init.call(this)},_a:null,_b:null,c:null,d:function(){return this.c},$type:new $.ig.Type("CT_TextBody",$.ig.$ot)},true);$c("ST_Coordinate32Unqualified:gh","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},d:0,init1:function(a,b){$$0.$bh.init.call(this);this.d=b},g:function(){return this.d},c:function(a){return $$t.$gh.a($ab(a,7,$$0.$cg.invariantCulture()))},j:function(a){var b;if(function(){var c=$8(a,7,$$0.$cg.invariantCulture(),b);b=c.p3;return c.ret}()){return $m($$t.$gh.$type,$$t.$gh.a(b))}return $m($$t.$gh.$type,null)},toString:function(){return this.d.toString()},e:function(a){return a.d},h:function(a){if(!a.hasValue()){return $m($$0.$aw.$type,null)}return $m($$0.$aw.$type,$$t.$gh.e(a.value()))},a:function(a){return new $$t.gh(1,a)},i:function(a){if(!a.hasValue()){return $m($$t.$gh.$type,null)}return $m($$t.$gh.$type,$$t.$gh.a(a.value()))},$type:new $.ig.Type("ST_Coordinate32Unqualified",$$0.$bh.$type)},true);$c("ST_Coordinate32:gg","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break;case 2:this.init2.apply(this,arguments);break}return}$$0.$bh.init.call(this)},k:$m($$t.$gh.$type,null),l:$m($$v.$cg.$type,null),init1:function(a,b){$$0.$bh.init.call(this);this.k=$m($$t.$gh.$type,b);this.l=$m($$v.$cg.$type,null)},init2:function(a,b){$$0.$bh.init.call(this);this.k=$m($$t.$gh.$type,null);this.l=$m($$v.$cg.$type,b)},j:function(){if($l(this.k,null)){return this.k.value().g()}if($$v.$cg.f(this.l,$m($$v.$cg.$type,null))){return this.l.value().m()}return 0},g:function(a){var b=$$t.$gg.q(a);if($l(b,null)){return b.getValueOrDefault()}throw $$v.$aq.m($$t.$gg.$type,a)},q:function(a){var b=$$t.$gh.j(a);if($l(b,null)){return $m($$t.$gg.$type,$$t.$gg.b(b.getValueOrDefault()))}var c=$$v.$cg.o(a);if($$v.$cg.f(c,$m($$v.$cg.$type,null))){return $m($$t.$gg.$type,$$t.$gg.c(c.getValueOrDefault()))}return $m($$t.$gg.$type,null)},toString:function(){if($l(this.k,null)){return this.k.getValueOrDefault().toString()}if($$v.$cg.f(this.l,$m($$v.$cg.$type,null))){return this.l.getValueOrDefault().toString()}return String.empty()},a:function(a){return new $$t.gg(1,$$t.$gh.a(a))},n:function(a){if(!a.hasValue()){return $m($$t.$gg.$type,null)}return $m($$t.$gg.$type,$$t.$gg.a(a.value()))},b:function(a){return new $$t.gg(1,a)},o:function(a){if(!a.hasValue()){return $m($$t.$gg.$type,null)}return $m($$t.$gg.$type,$$t.$gg.b(a.value()))},h:function(a){return a.k.value()},m:function(a){if(!a.hasValue()){return $m($$t.$gh.$type,null)}return $m($$t.$gh.$type,$$t.$gg.h(a.value()))},c:function(a){return new $$t.gg(2,a)},p:function(a){if(!a.hasValue()){return $m($$t.$gg.$type,null)}return $m($$t.$gg.$type,$$t.$gg.c(a.value()))},$type:new $.ig.Type("ST_Coordinate32",$$0.$bh.$type)},true);$c("CT_TextBodyProperties:d0","CT_TextBodyPropertiesBase",{init:function(){$$v.$b9.init.call(this)},_d:$m($$t.$hw.$type,null),_e:$m($$0.$aq.$type,null),_f:$m($$t.$gg.$type,null),_g:$m($$0.$aq.$type,null),_h:$m($$0.$aq.$type,null),_i:$m($$0.$aq.$type,null),_j:$m($$t.$gg.$type,null),_k:$m($$0.$aw.$type,null),_l:$m($$0.$aq.$type,null),_m:$m($$t.$gg.$type,null),_n:$m($$0.$aw.$type,null),_o:$m($$0.$aw.$type,null),_p:$m($$t.$h0.$type,null),_c:false,_q:$m($$t.$h9.$type,null),_r:$m($$t.$ia.$type,null),_s:$m($$t.$gg.$type,null),_t:$m($$t.$h8.$type,null),b:function(a){var b=null;if(a!=null){b=$b($$t.$d0.$type,a);if(b==null){b=new $$t.d0;b._a=a._a}}return b||new $$t.d0},$type:new $.ig.Type("CT_TextBodyProperties",$$v.$b9.$type)},true);$c("ST_TextPointUnqualified:h5","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},d:0,init1:function(a,b){$$0.$bh.init.call(this);$$v.$aq.au($$t.$h5.$type,b,"value",-4e5,4e5);this.d=b},c:function(a){return $$t.$h5.a($ab(a,7,$$0.$cg.invariantCulture()))},i:function(a){var b;if(function(){var c=$8(a,7,$$0.$cg.invariantCulture(),b);b=c.p3;return c.ret}()){return $m($$t.$h5.$type,$$t.$h5.a(b))}return $m($$t.$h5.$type,null)},toString:function(){return this.d.toString()},e:function(a){return a.d},g:function(a){if(!a.hasValue()){return $m($$0.$aw.$type,null)}return $m($$0.$aw.$type,$$t.$h5.e(a.value()))},a:function(a){return new $$t.h5(1,a)},h:function(a){if(!a.hasValue()){return $m($$t.$h5.$type,null)}return $m($$t.$h5.$type,$$t.$h5.a(a.value()))},$type:new $.ig.Type("ST_TextPointUnqualified",$$0.$bh.$type)},true);$c("ST_TextPoint:h4","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break;case 2:this.init2.apply(this,arguments);break}return}$$0.$bh.init.call(this)},b:$m($$t.$h5.$type,null),c:$m($$v.$cg.$type,null),init1:function(a,b){$$0.$bh.init.call(this);this.b=$m($$t.$h5.$type,b);this.c=$m($$v.$cg.$type,null)},init2:function(a,b){$$0.$bh.init.call(this);this.b=$m($$t.$h5.$type,null);this.c=$m($$v.$cg.$type,b)},toString:function(){if($l(this.b,null)){return this.b.toString()}if($$v.$cg.f(this.c,$m($$v.$cg.$type,null))){return this.c.toString()}return String.empty()},a:function(a){var b=$$t.$h5.i(a);if($l(b,null)){return new $$t.h4(1,b.value())}var c=$$v.$cg.o(a);if($$v.$cg.f(c,$m($$v.$cg.$type,null))){return new $$t.h4(2,c.value())}throw $$v.$aq.m($$t.$h4.$type,a)},$type:new $.ig.Type("ST_TextPoint",$$0.$bh.$type)},true);$c("ST_Percentage:hb","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},j:0,init1:function(a,b){$$0.$bh.init.call(this);this.j=b},equals:function(a){var b=$m($$t.$hb.$type,$b($$t.$hb.$type,a));if($$t.$hb.g(b,$m($$t.$hb.$type,null))){return false}return $$t.$hb.d(this,b.getValueOrDefault())},getHashCode:function(){return this.j},toString:function(){return this.p(1)},p:function(a){var t1=a;L0:while(true){switch(t1){case 0:return $.ig.truncate($$v.$aq.i(this.j*1e3)).toString();case 1:return $6(this.j,$$0.$cg.invariantCulture())+"%";default:t1=0;continue L0}break}},c:function(a,b){var c=$$t.$hb.o(a,b);if($$t.$hb.g(c,$m($$t.$hb.$type,null))){return c.getValueOrDefault()}throw $$v.$aq.m($$t.$hb.$type,a)},o:function(a,b){if(String.isNullOrEmpty(a)){return $m($$t.$hb.$type,null)}var t1=b;L0:while(true){switch(t1){case 0:{if(a.charAt(a.length-1)=="%"){t1=1;continue L0}var c;if(function(){var d=$8(a,7,$$0.$cg.invariantCulture(),c);c=d.p3;return d.ret}()==false){return $m($$t.$hb.$type,null)}return $m($$t.$hb.$type,new $$t.hb(1,c/1e3))}case 1:{if(a.charAt(a.length-1)!="%"){t1=0;continue L0}var d;if(function(){var e=$ai(a.substr(0,a.length-1),$$0.$ce.floatNumber|64,$$0.$cg.invariantCulture(),d);d=e.p3;return e.ret}()==false){return $m($$t.$hb.$type,null)}return $m($$t.$hb.$type,$$t.$hb.a(d))}default:return $m($$t.$hb.$type,null)}break}},d:function(a,b){return a.j==b.j},e:function(a,b){if(!a.hasValue()){return!b.hasValue()}else if(!b.hasValue()){return false}return $$t.$hb.d(a.value(),b.value())},f:function(a,b){return!$$t.$hb.d(a,b)},g:function(a,b){if(!a.hasValue()){return b.hasValue()}else if(!b.hasValue()){return true}return $$t.$hb.f(a.value(),b.value())},a:function(a){return new $$t.hb(1,a)},n:function(a){if(!a.hasValue()){return $m($$t.$hb.$type,null)}return $m($$t.$hb.$type,$$t.$hb.a(a.value()))},k:function(a){return a.j},m:function(a){if(!a.hasValue()){return $m(Number,null)}return $m(Number,$$t.$hb.k(a.value()))},$type:new $.ig.Type("ST_Percentage",$$0.$bh.$type)},true);$c("CT_TextCharacterProperties:d1","Object",{init:function(){$.ig.$op.init.call(this)},cloneShallow:function(){return this.memberwiseClone()},_ln:null,ln:function(a){if(arguments.length===1){this._ln=a;return a}else{return this._ln}},_fill:null,fill:function(a){if(arguments.length===1){this._fill=a;return a}else{return this._fill}},_latin:null,latin:function(a){if(arguments.length===1){this._latin=a;return a}else{return this._latin}},_ea:null,ea:function(a){if(arguments.length===1){this._ea=a;return a}else{return this._ea}},_cs:null,cs:function(a){if(arguments.length===1){this._cs=a;return a}else{return this._cs}},_kumimoji:$m($$0.$aq.$type,null),kumimoji:function(a){if(arguments.length===1){this._kumimoji=a;return a}else{return this._kumimoji}},_lang:null,lang:function(a){if(arguments.length===1){this._lang=a;return a}else{return this._lang}},_altLang:null,altLang:function(a){if(arguments.length===1){this._altLang=a;return a}else{return this._altLang}},_sz:$m($$0.$aw.$type,null),sz:function(a){if(arguments.length===1){this._sz=a;return a}else{return this._sz}},_b:$m($$0.$aq.$type,null),b:function(a){if(arguments.length===1){this._b=a;return a}else{return this._b}},_i:$m($$0.$aq.$type,null),i:function(a){if(arguments.length===1){this._i=a;return a}else{return this._i}},_u:$m($$t.$h7.$type,null),u:function(a){if(arguments.length===1){this._u=a;return a}else{return this._u}},_strike:$m($$t.$h6.$type,null),strike:function(a){if(arguments.length===1){this._strike=a;return a}else{return this._strike}},_kern:$m($$0.$aw.$type,null),kern:function(a){if(arguments.length===1){this._kern=a;return a}else{return this._kern}},_cap:$m($$t.$hx.$type,null),cap:function(a){if(arguments.length===1){this._cap=a;return a}else{return this._cap}},_spc:$m($$t.$h4.$type,null),spc:function(a){if(arguments.length===1){this._spc=a;return a}else{return this._spc}},_normalizeH:$m($$0.$aq.$type,null),normalizeH:function(a){if(arguments.length===1){this._normalizeH=a;return a}else{return this._normalizeH}},_baseline:$m($$t.$hb.$type,null),baseline:function(a){if(arguments.length===1){this._baseline=a;return a}else{return this._baseline}},_noProof:$m($$0.$aq.$type,null),noProof:function(a){if(arguments.length===1){this._noProof=a;return a}else{return this._noProof}},_dirty:false,dirty:function(a){if(arguments.length===1){this._dirty=a;return a}else{return this._dirty}},_err:false,err:function(a){if(arguments.length===1){this._err=a;return a}else{return this._err}},_smtClean:false,smtClean:function(a){if(arguments.length===1){this._smtClean=a;return a}else{return this._smtClean}},_smtId:0,smtId:function(a){if(arguments.length===1){this._smtId=a;return a}else{return this._smtId}},_bmk:null,bmk:function(a){if(arguments.length===1){this._bmk=a;return a}else{return this._bmk}},$type:new $.ig.Type("CT_TextCharacterProperties",$.ig.$ot,[$$v.$ar.$type])},true);$c("CT_TextFont:d2","Object",{init:function(){$.ig.$op.init.call(this)},_d:null,_a:null,_b:$m($$0.$a6.$type,null),_c:0,$type:new $.ig.Type("CT_TextFont",$.ig.$ot)},true);$c("CT_TextListStyle:d3","Object",{init:function(){$.ig.$op.init.call(this)},$type:new $.ig.Type("CT_TextListStyle",$.ig.$ot)},true);$c("CT_TextParagraph:d4","Object",{init:function(){this.b=new $$4.w($$t.$ep.$type,0);$.ig.$op.init.call(this)},_a:null,b:null,c:function(){return this.b},$type:new $.ig.Type("CT_TextParagraph",$.ig.$ot)},true);$c("ST_TextMargin:h3","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},d:0,init1:function(a,b){$$0.$bh.init.call(this);$$v.$aq.au($$t.$h3.$type,b,"value",0,51206400);this.d=b},c:function(a){return $$t.$h3.a($ab(a,7,$$0.$cg.invariantCulture()))},i:function(a){var b;if(function(){var c=$8(a,7,$$0.$cg.invariantCulture(),b);b=c.p3;return c.ret}()){return $m($$t.$h3.$type,$$t.$h3.a(b))}return $m($$t.$h3.$type,null)},toString:function(){return this.d.toString()},e:function(a){return a.d},g:function(a){if(!a.hasValue()){return $m($$0.$aw.$type,null)}return $m($$0.$aw.$type,$$t.$h3.e(a.value()))},a:function(a){return new $$t.h3(1,a)},h:function(a){if(!a.hasValue()){return $m($$t.$h3.$type,null)}return $m($$t.$h3.$type,$$t.$h3.a(a.value()))},$type:new $.ig.Type("ST_TextMargin",$$0.$bh.$type)},true);$c("ST_TextIndentLevelType:h2","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},d:0,init1:function(a,b){$$0.$bh.init.call(this);$$v.$aq.au($$t.$h2.$type,b,"value",0,8);this.d=b},c:function(a){return $$t.$h2.a($ab(a,7,$$0.$cg.invariantCulture()))},i:function(a){var b;if(function(){var c=$8(a,7,$$0.$cg.invariantCulture(),b);b=c.p3;return c.ret}()){return $m($$t.$h2.$type,$$t.$h2.a(b))}return $m($$t.$h2.$type,null)},toString:function(){return this.d.toString()},e:function(a){return a.d},g:function(a){if(!a.hasValue()){return $m($$0.$aw.$type,null)}return $m($$0.$aw.$type,$$t.$h2.e(a.value()))},a:function(a){return new $$t.h2(1,a)},h:function(a){if(!a.hasValue()){
return $m($$t.$h2.$type,null)}return $m($$t.$h2.$type,$$t.$h2.a(a.value()))},$type:new $.ig.Type("ST_TextIndentLevelType",$$0.$bh.$type)},true);$c("ST_TextIndent:h1","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},d:0,init1:function(a,b){$$0.$bh.init.call(this);$$v.$aq.au($$t.$h1.$type,b,"value",-51206400,51206400);this.d=b},c:function(a){return $$t.$h1.a($ab(a,7,$$0.$cg.invariantCulture()))},i:function(a){var b;if(function(){var c=$8(a,7,$$0.$cg.invariantCulture(),b);b=c.p3;return c.ret}()){return $m($$t.$h1.$type,$$t.$h1.a(b))}return $m($$t.$h1.$type,null)},toString:function(){return this.d.toString()},e:function(a){return a.d},g:function(a){if(!a.hasValue()){return $m($$0.$aw.$type,null)}return $m($$0.$aw.$type,$$t.$h1.e(a.value()))},a:function(a){return new $$t.h1(1,a)},h:function(a){if(!a.hasValue()){return $m($$t.$h1.$type,null)}return $m($$t.$h1.$type,$$t.$h1.a(a.value()))},$type:new $.ig.Type("ST_TextIndent",$$0.$bh.$type)},true);$c("CT_TextParagraphProperties:d5","Object",{init:function(){$.ig.$op.init.call(this)},_i:$m($$t.$h3.$type,null),_j:$m($$t.$h3.$type,null),_h:$m($$t.$h2.$type,null),_f:$m($$t.$h1.$type,null),_a:$m($$t.$hv.$type,null),_b:$m($$t.$gg.$type,null),_k:$m($$0.$aq.$type,null),_c:$m($$0.$aq.$type,null),_d:$m($$t.$hy.$type,null),_g:$m($$0.$aq.$type,null),_e:$m($$0.$aq.$type,null),$type:new $.ig.Type("CT_TextParagraphProperties",$.ig.$ot)},true);$c("CT_TileInfoProperties:d6","Object",{init:function(){$.ig.$op.init.call(this)},_algn:$m($$t.$hj.$type,null),algn:function(a){if(arguments.length===1){this._algn=a;return a}else{return this._algn}},_flip:$m($$t.$ib.$type,null),flip:function(a){if(arguments.length===1){this._flip=a;return a}else{return this._flip}},_sx:$m($$t.$hb.$type,null),sx:function(a){if(arguments.length===1){this._sx=a;return a}else{return this._sx}},_sy:$m($$t.$hb.$type,null),sy:function(a){if(arguments.length===1){this._sy=a;return a}else{return this._sy}},_tx:$m($$v.$cd.$type,null),tx:function(a){if(arguments.length===1){this._tx=a;return a}else{return this._tx}},_ty:$m($$v.$cd.$type,null),ty:function(a){if(arguments.length===1){this._ty=a;return a}else{return this._ty}},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_TileInfoProperties$i(this,b)},$type:new $.ig.Type("CT_TileInfoProperties",$.ig.$ot,[$$t.$ed.$type])},true);$c("CT_XYAdjustHandle:d7","Object",{init:function(){$.ig.$op.init.call(this)},_pos:null,pos:function(a){if(arguments.length===1){this._pos=a;return a}else{return this._pos}},_gdRefX:$m($$t.$gs.$type,null),gdRefX:function(a){if(arguments.length===1){this._gdRefX=a;return a}else{return this._gdRefX}},_minX:$m($$t.$f7.$type,null),minX:function(a){if(arguments.length===1){this._minX=a;return a}else{return this._minX}},_maxX:$m($$t.$f7.$type,null),maxX:function(a){if(arguments.length===1){this._maxX=a;return a}else{return this._maxX}},_gdRefY:$m($$t.$gs.$type,null),gdRefY:function(a){if(arguments.length===1){this._gdRefY=a;return a}else{return this._gdRefY}},_minY:$m($$t.$f7.$type,null),minY:function(a){if(arguments.length===1){this._minY=a;return a}else{return this._minY}},_maxY:$m($$t.$f7.$type,null),maxY:function(a){if(arguments.length===1){this._maxY=a;return a}else{return this._maxY}},$type:new $.ig.Type("CT_XYAdjustHandle",$.ig.$ot,[$$t.$et.$type])},true);$c("IEG_ColorChoiceVisitor$2:ea","Object",{$type:new $.ig.Type("IEG_ColorChoiceVisitor$2",null)},true);$c("IEG_ColorTransform:eb","Object",{$type:new $.ig.Type("IEG_ColorTransform",null)},true);$c("IEG_ColorTransformVisitor$2:ec","Object",{$type:new $.ig.Type("IEG_ColorTransformVisitor$2",null)},true);$c("IEG_FillModePropertiesVisitor$2:ee","Object",{$type:new $.ig.Type("IEG_FillModePropertiesVisitor$2",null)},true);$c("IEG_FillPropertiesVisitor$2:eg","Object",{$type:new $.ig.Type("IEG_FillPropertiesVisitor$2",null)},true);$c("IEG_GeometryVisitor$2:ei","Object",{$type:new $.ig.Type("IEG_GeometryVisitor$2",null)},true);$c("IEG_LineDashPropertiesVisitor$2:ek","Object",{$type:new $.ig.Type("IEG_LineDashPropertiesVisitor$2",null)},true);$c("IEG_LineFillPropertiesVisitor$2:em","Object",{$type:new $.ig.Type("IEG_LineFillPropertiesVisitor$2",null)},true);$c("IEG_LineJoinPropertiesVisitor$2:eo","Object",{$type:new $.ig.Type("IEG_LineJoinPropertiesVisitor$2",null)},true);$c("IEG_TextRunVisitor$2:eq","Object",{$type:new $.ig.Type("IEG_TextRunVisitor$2",null)},true);$c("IGraphicalObjectContentVisitor$2:es","Object",{$type:new $.ig.Type("IGraphicalObjectContentVisitor$2",null)},true);$c("IPath2DCommandVisitor$2:ev","Object",{$type:new $.ig.Type("IPath2DCommandVisitor$2",null)},true);$c("ColorTransform_Alpha:ez","CT_PositiveFixedPercentage",{init:function(){$$t.$de.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_Alpha$i(this,b)},$type:new $.ig.Type("ColorTransform_Alpha",$$t.$de.$type,[$$t.$eb.$type])},true);$c("ColorTransform_AlphaOff:e0","CT_FixedPercentage",{init:function(){$$t.$b6.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_AlphaOff$i(this,b)},$type:new $.ig.Type("ColorTransform_AlphaOff",$$t.$b6.$type,[$$t.$eb.$type])},true);$c("ColorTransform_AlphaMod:e1","CT_PositivePercentage",{init:function(){$$t.$df.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_AlphaMod$i(this,b)},$type:new $.ig.Type("ColorTransform_AlphaMod",$$t.$df.$type,[$$t.$eb.$type])},true);$c("ColorTransform_Blue:e2","CT_Percentage",{init:function(){$$t.$c8.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_Blue$i(this,b)},$type:new $.ig.Type("ColorTransform_Blue",$$t.$c8.$type,[$$t.$eb.$type])},true);$c("ColorTransform_BlueOff:e3","CT_Percentage",{init:function(){$$t.$c8.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_BlueOff$i(this,b)},$type:new $.ig.Type("ColorTransform_BlueOff",$$t.$c8.$type,[$$t.$eb.$type])},true);$c("ColorTransform_BlueMod:e4","CT_Percentage",{init:function(){$$t.$c8.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_BlueMod$i(this,b)},$type:new $.ig.Type("ColorTransform_BlueMod",$$t.$c8.$type,[$$t.$eb.$type])},true);$c("ColorTransform_Comp:e5","CT_ComplementTransform",{init:function(){$$t.$bv.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_Comp$i(this,b)},$type:new $.ig.Type("ColorTransform_Comp",$$t.$bv.$type,[$$t.$eb.$type])},true);$c("ColorTransform_Gray:e6","CT_GrayscaleTransform",{init:function(){$$t.$cf.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_Gray$i(this,b)},$type:new $.ig.Type("ColorTransform_Gray",$$t.$cf.$type,[$$t.$eb.$type])},true);$c("ColorTransform_Green:e7","CT_Percentage",{init:function(){$$t.$c8.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_Green$i(this,b)},$type:new $.ig.Type("ColorTransform_Green",$$t.$c8.$type,[$$t.$eb.$type])},true);$c("ColorTransform_GreenOff:e8","CT_Percentage",{init:function(){$$t.$c8.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_GreenOff$i(this,b)},$type:new $.ig.Type("ColorTransform_GreenOff",$$t.$c8.$type,[$$t.$eb.$type])},true);$c("ColorTransform_GreenMod:e9","CT_Percentage",{init:function(){$$t.$c8.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_GreenMod$i(this,b)},$type:new $.ig.Type("ColorTransform_GreenMod",$$t.$c8.$type,[$$t.$eb.$type])},true);$c("ColorTransform_Hue:fa","CT_PositiveFixedAngle",{init:function(){$$t.$dd.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_Hue$i(this,b)},$type:new $.ig.Type("ColorTransform_Hue",$$t.$dd.$type,[$$t.$eb.$type])},true);$c("ColorTransform_HueOff:fb","CT_Angle",{init:function(){$$t.$br.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_HueOff$i(this,b)},$type:new $.ig.Type("ColorTransform_HueOff",$$t.$br.$type,[$$t.$eb.$type])},true);$c("ColorTransform_HueMod:fc","CT_PositivePercentage",{init:function(){$$t.$df.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_HueMod$i(this,b)},$type:new $.ig.Type("ColorTransform_HueMod",$$t.$df.$type,[$$t.$eb.$type])},true);$c("ColorTransform_Inv:fd","CT_InverseTransform",{init:function(){$$t.$cm.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_Inv$i(this,b)},$type:new $.ig.Type("ColorTransform_Inv",$$t.$cm.$type,[$$t.$eb.$type])},true);$c("ColorTransform_Lum:fe","CT_Percentage",{init:function(){$$t.$c8.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_Lum$i(this,b)},$type:new $.ig.Type("ColorTransform_Lum",$$t.$c8.$type,[$$t.$eb.$type])},true);$c("ColorTransform_LumOff:ff","CT_Percentage",{init:function(){$$t.$c8.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_LumOff$i(this,b)},$type:new $.ig.Type("ColorTransform_LumOff",$$t.$c8.$type,[$$t.$eb.$type])},true);$c("ColorTransform_LumMod:fg","CT_Percentage",{init:function(){$$t.$c8.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_LumMod$i(this,b)},$type:new $.ig.Type("ColorTransform_LumMod",$$t.$c8.$type,[$$t.$eb.$type])},true);$c("ColorTransform_Red:fh","CT_Percentage",{init:function(){$$t.$c8.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_Red$i(this,b)},$type:new $.ig.Type("ColorTransform_Red",$$t.$c8.$type,[$$t.$eb.$type])},true);$c("ColorTransform_RedOff:fi","CT_Percentage",{init:function(){$$t.$c8.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_RedOff$i(this,b)},$type:new $.ig.Type("ColorTransform_RedOff",$$t.$c8.$type,[$$t.$eb.$type])},true);$c("ColorTransform_RedMod:fj","CT_Percentage",{init:function(){$$t.$c8.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_RedMod$i(this,b)},$type:new $.ig.Type("ColorTransform_RedMod",$$t.$c8.$type,[$$t.$eb.$type])},true);$c("ColorTransform_Sat:fk","CT_Percentage",{init:function(){$$t.$c8.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_Sat$i(this,b)},$type:new $.ig.Type("ColorTransform_Sat",$$t.$c8.$type,[$$t.$eb.$type])},true);$c("ColorTransform_SatOff:fl","CT_Percentage",{init:function(){$$t.$c8.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_SatOff$i(this,b)},$type:new $.ig.Type("ColorTransform_SatOff",$$t.$c8.$type,[$$t.$eb.$type])},true);$c("ColorTransform_SatMod:fm","CT_Percentage",{init:function(){$$t.$c8.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_SatMod$i(this,b)},$type:new $.ig.Type("ColorTransform_SatMod",$$t.$c8.$type,[$$t.$eb.$type])},true);$c("ColorTransform_Shade:fn","CT_PositiveFixedPercentage",{init:function(){$$t.$de.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_Shade$i(this,b)},$type:new $.ig.Type("ColorTransform_Shade",$$t.$de.$type,[$$t.$eb.$type])},true);$c("ColorTransform_Tint:fo","CT_PositiveFixedPercentage",{init:function(){$$t.$de.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_Tint$i(this,b)},$type:new $.ig.Type("ColorTransform_Tint",$$t.$de.$type,[$$t.$eb.$type])},true);$c("ElementLoadCallbacks:fp","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},b:null,a:null,init1:function(a,b,c){$$0.$bh.init.call(this);this.b=b;this.a=c},c:function(){return this.b==null&&this.a==null},$type:new $.ig.Type("ElementLoadCallbacks",$$0.$bh.$type)},true);$c("OfficeDocumentManager:fu","Object",{_c:null,_ao:$m($$t.$gd.$type,null),_aa:false,_ai:null,_ak:null,_af:null,_al:null,_ap:null,_ag:null,_ah:null,_x:null,_a:null,_an:null,_h:null,_i:null,init:function(a,b,c,d){$.ig.$op.init.call(this);this._ai=new $$4.p(String,0);this._ak=new $$4.z($$v.$az.$type);this._af=new $$4.g(String,$.ig.$op.$type,0);this._al=new $$4.z($$t.$fv.$type);this._al.push(new $$t.fv);this._ap={};this._ag=new $$4.g(String,$$t.$jt.$type,0);this._ah=new $$4.g(String,$$t.$jt.$type,0);this._ao=d;this._aa=c;this._an=b;if(a!=null&&this._an!=null){this._a=a.open(this._an,this._aa?3:2)}},dispose:function(){this.disposeCore(true)},_createInternalRelationship:function(a,b){return this._createInternalRelationship1(a,b.o(this._conformance()))},_createInternalRelationship1:function(a,b){return this._a1(a,b,0,null)},_createExternalRelationship1:function(a,b){return this._a1(a,b,1,null)},_createExternalRelationship:function(a,b){var c;if(function(){var d=$$v.$ap.a(a,c);c=d.p1;return d.ret}()){return this._createExternalRelationship1(c,b)}return this._a1(null,b,1,a)},_createPart:function(a,b,c){var d=a.n(this._application());if(a.g()){d=this._a5(d,a.h()==false,false)}return this._k(a,d,b,c)},_k:function(a,b,c,d){var $self=this;var e=$$v.$ap.b(b);var f;if(d!=null&&this._ad(d)){f=d;this._bd(e,a.o(this._conformance()),0,f,null)}else{f=this._a1(e,a.o(this._conformance()),0,null)}var g=this._c;return $$v.$o.g($$6.$u.$type.specialize($$6.$x.$type,String),$$v.$h.h(function(){if(g!=null){$self._ak.push(g)}var h=$self._a.createPart(e,a.m());$self._c=h;$self._al.push(new $$t.fv);return $$v.$o.a($$v.$h.n($$0.$dg.$type,h.getStream(2,2),function(i){var j=a.e($self,i);return j.b(c)}),function(){$self._al.pop();$self._af.add(b,c)},0)},function(){if(g!=null){$self._ak.pop()}$self._c=g}),function(){return $$6.$w.a($$6.$x.$type,String,e,f)},0)},_createPart2:function(a,b,c,d){if(b==null){return null}var e=this._v(a);if(e==null){return null}return this._k(e,b,c,d)},_getLocalPath:function(){if(this._an==null){return null}return $$v.$aq.x(this._an)},_getNamespaceDefinition:function(a){return this._ap[a]||null},_getPart:function(a){return this._b().getPart(a)},_getPartData:function(a){return this._as(a.uri().toString())},_getPartData1:function(a){var b=$$t.$kg.ak(a).originalString();return this._as(b)},_getPartUri:function(a){var c=this._af.getEnumerator();while(c.moveNext()){var b=c.current();if($.ig.$op.equalsStatic(b.value(),a)){return $$v.$ap.b(b.key())}}return null},_getRelationshipDataFromActivePart:function(a){var b=this._getRelationshipFromActivePart1(a);if(b==null){return null}if(b.targetMode()==1){if($b($$v.$a3.$type,b)!==null){return b.targetString()}return b.targetUri()}return this._getPartData1(b)},_getRelationshipDataFromActivePart$1:function($tData,a){var b=a.o(this._conformance());var d=this._aj().getEnumerator();while(d.moveNext()){var c=d.current();if(c.relationshipType()==b){var e=this._getRelationshipDataFromActivePart(c.id());if(e!=null){return $$6.$w.a(String,$tData,c.id(),$v($tData,e))}break}}return null},_getRelationshipFromActivePart1:function(a){return this._c!=null?this._c.getRelationship(a):this._a.getRelationship(a)},_getRelationshipFromActivePart:function(a){var c=this._aj().getEnumerator();while(c.moveNext()){var b=c.current();if(this._getPartData1(b)==a){return b}}return null},_a6:function(a,b){var c=a;var d=c==0?1:0;var f=this._ah.getEnumerator();while(f.moveNext()){var e=f.current();var g=e.value().o(d);var h=e.value().o(c);if(g==b||b==h){return h}}return null},_initialize:function(){this._bj($$t.$i8.an);this._bj($$t.$i7.an);this._bj($$t.$io.an);this._bj($$t.$ip.an);this._bj($$t.$iq.an);this._bj($$t.$ir.an);this._bj($$t.$is.an);this._bj($$t.$it.an);this._bj($$t.$iu.an);this._bj($$t.$iv.an);this._bj($$t.$ix.an);this._bj($$t.$iz.an);this._bj($$t.$i0.an);this._bj($$t.$i4.an);this._bj($$t.$i5.an);this._bj($$t.$i6.an);this._bj($$t.$jb.an);this._bj($$t.$iy.an);var a=this._drawingPropertiesNamespace();if(a!=null){this._bj(a)}if($j(this._ao,null)){this._ao=$m($$t.$gd.$type,this._z())}},_isNamespaceRecognized:function(a){return this._ap[a]!=null},_load:function(){this._initialize();return this._n()},_onUnsupportedContentDetected:function(){},_aw:null,_au:null,_av:null,_resolveStrictNamespaceUri:function(a){if(a==null||a.length==0){if(this._av!=null){return this._av}}else if($.ig.$op.equalsStatic(a,this._aw)){return this._au}else{this._aw=a}var b=this._getNamespaceDefinition(a);if(b!=null){a=b.i(1)}if(a==null||a.length==0){this._av=a}else{this._au=a}return a},_save:function(){var $self=this;this._initialize();return $$v.$o.c($$v.$o.c(this._r(),function(){return $$v.$h.g($self._h!=null,function(){return $self._createPart($$t.$jo.a3,null,null)},null)},0),function(){return $$v.$h.g($self._i!=null,function(){return $self._createPart($$t.$jp.a3,null,null)},null)},0)},_updateConformance:function(a){this._ao=$m($$t.$gd.$type,a)},disposeCore:function(a){if(this._a!=null){this._a.dispose();this._a=null}},_z:function(){},_n:function(){var $self=this;return $$v.$o.f($$0.$aq.$type,this._p(null,null,this._a.getRelationships(),false),function(a){var b=$$v.$o.m($$0.$aq.$type,a);return $$v.$h.g($self._x!=null&&$self._isThemePartLoaded()==false,function(){var c=$self._a5($self._x.n($self._application()),false,true);var d=null;return $$v.$h.g($self._ai.contains(c)==false&&function(){var e=$$6.$x.tryCreate(c,2,d);d=e.p2;return e.ret}()&&$self._a.partExists(d),function(){return $self._o($self._a.getPart(d),null)},null)},null)},0)},_bh:function(a){this._onUnsupportedContentDetected()},_bj:function(a){this._ap[a.i(1)]=a;this._ap[a.i(0)]=a},_bk:function(a,b){if(b){this._ag.item(a.m(),a)}this._ah.item(a.o(this._conformance()),a);var c=$b($$t.$jy.$type,a);if(c!=null){this._x=c}},_r:function(){},_a1:function(a,b,c,d){var e;var f=this._al.peek();e=$$t.$fu._a2(f.b());this._bd(a,b,c,e,d);return e},_bd:function(a,b,c,d,e){this._al.peek().c();var f;if(c==0){if(this._c==null){var g=new $$6.x(1,"/".toString(),0);f=$$t.$kg.ai(g,a)}else{f=$$t.$kg.ai(this._c.uri(),a)}}else{if(a==null&&e!=null){var h=$b($$v.$a0.$type,this._c);if(h!=null){h.createExternalRelationship(e,b,d);return}}f=a}if(this._c==null){this._a.createRelationship(f,c,b,d)}else{this._c.createRelationship(f,c,b,d)}},_a2:function(a){return"rId"+(a+1).toString()},_aj:function(){if(this._c!=null){return this._c.getRelationships()}return this._a.getRelationships()},_a3:function(){switch(this._conformance()){case 0:return $$t.$fu._a8;case 1:return $$t.$fu._a7;default:return $$t.$fu._a8}},_a5:function(a,b,c){var d=new $$4.p(String,2,$$v.$ao.e());if(c==false&&b){var f=this._a.getParts().getEnumerator();while(f.moveNext()){var e=f.current();var g=e.uri().toString();var h=$$7.$b.getExtension(g);var i=g.substr(0,g.length-h.length);d.add(i)}}var j=$$7.$b.getExtension(a);var k=a.substr(0,a.length-j.length);var l=1;while(true){if(b){var m=k+l;if(c||d.contains(m)==false){m+=j;return m}}else{var n=k+l+j;if(c||this._a.partExists($$v.$ap.b(n))==false){return n}}l++}},_as:function(a){var b;var c=this._af.tryGetValue(a,b);b=c.p1;return b},_v:function(a){var b;var c=this._ag.tryGetValue(a,b);b=c.p1;return b},_w:function(a){var b;var c=this._ah.tryGetValue(a,b);b=c.p1;return b},_ad:function(a){var c=this._aj().getEnumerator();while(c.moveNext()){var b=c.current();if(b.id()==a){return false}}return true},_o:function(a,b){var $self=this;if(b==null){b=this._v(a.contentType())}var c=a.getRelationships();var d=a.uri().toString();if(this._ai.add(d)==false){return null}var e=null;var f=null;return $$v.$o.f($$0.$aq.$type,this._p(a,b,c,false),function(g){var h=$$v.$o.m($$0.$aq.$type,g);return $$v.$o.a($$v.$o.c($$v.$h.g(b!=null,function(){var i=$self._c;return $$v.$h.h(function(){$self._c=a;return $$v.$h.n($$0.$dg.$type,a.getStream(3,1),function(j){f=b.e($self,j);return $$v.$o.e($.ig.$op.$type,f.a(),function(k){e=$$v.$o.m($.ig.$op.$type,k)},0)})},function(){$self._c=i})},function(){$self._bh(a);return null}),function(){if(e!=null){$self._af.item(d,e)}return $$v.$h.g(h,function(){return $self._p(a,b,c,true)},null)},0),function(){if(f!=null){f.q()}},0)},0)},_p:function(a,b,c,d){var $self=this;var e=false;return $$v.$o.g($$0.$aq.$type,$$v.$h.h(function(){if(a!=null){$self._ak.push(a)}var f=$self._bl(b,c);c=f.p1;return $$v.$h.d($$v.$a1.$type,c,function(g){if(g.relationshipType()==$self._a3()){return null}switch(g.targetMode()){case 0:{if(b!=null){var h=$self._w(g.relationshipType());var i=h!=null&&b.i(h);if(d!=i){e=true;return null}}if(g.targetUri()!=null&&g.targetUri().originalString()=="NULL"){return null}var j=$$t.$kg.ak(g);var k=$self._a.getPart(j);var l=null;if(b!=null){l=b.f(k,g)}if(l==null&&k!=null&&k.contentType()=="application/xml"){var m=$self._w(g.relationshipType());if(m!=null&&m.m()!=k.contentType()){k=new $$t.j4(k,m.m())}l=m}return $self._o(k,l)}case 1:break;default:break}return null})},function(){if(a!=null){$self._ak.pop()}}),function(){return e},0)},_bl:function(a,b){if(a==null){return{p1:b}}var c=a.j();if(c==null){return{p1:b}}var d=new $$4.g(String,$$0.$aw.$type,0);var f=c.getEnumerator();while(f.moveNext()){var e=f.current();d.add(e.key().o(this._conformance()),e.value())}var g=new $$4.w($$v.$a1.$type,1,b);g.sort2(function(h,i){var j;var k=function(){var l=d.tryGetValue(h.relationshipType(),j);j=l.p1;return l.ret}();var l;var m=function(){var n=d.tryGetValue(i.relationshipType(),l);l=n.p1;return n.ret}();if(k==false&&m==false){return 0}else if(k&&m==false){return-1}else if(k==false&&m){return 1}return $5(j,l)});b=g;return{p1:b}},_activePart:function(){return this._c},_application:function(){},_conformance:function(){return this._ao.getValueOrDefault1(0)},_isLoading:function(){return this._aa},__isThemePartLoaded:false,_isThemePartLoaded:function(a){if(arguments.length===1){this.__isThemePartLoaded=a;return a}else{return this.__isThemePartLoaded}},_parentPartStack:function(){return this._ak},_drawingPropertiesNamespace:function(){},_b:function(){return this._a},$type:new $.ig.Type("OfficeDocumentManager",$.ig.$ot,[$$0.$au.$type])},true);$c("OfficeDocumentManager_PartRelationshipCounter:fv","Object",{a:0,init:function(){$.ig.$op.init.call(this)},c:function(){this.a++},b:function(){return this.a},$type:new $.ig.Type("OfficeDocumentManager_PartRelationshipCounter",$.ig.$ot)},true);$c("QualifiedNameInfo:fw","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},h:null,g:null,f:null,init1:function(a,b,c,d){$$0.$bh.init.call(this);if(b==String.empty()){b=null}this.h=b;this.g=c;this.f=d},toString:function(){if(this.h!=null){return this.h+":"+this.f}return this.f},d:function(a,b){if(String.isNullOrEmpty(a)){return b}var c;if(a.charAt(a.length-1)!="/"){a+="/"}c=a+b;return c},e:function(a){if(this.g==null){return this.f}if(a==null){return $$t.$fw.d(this.g,this.f)}return $$t.$fw.d(a._resolveStrictNamespaceUri(this.g),this.f)},i:function(a,b,c){if(a==String.empty()){a=null}this.h=a;this.g=b;this.f=c},b:function(a){if(this.g==null){return this}if(a==null){return this}return new $$t.fw(1,this.h,a._resolveStrictNamespaceUri(this.g),this.f)},c:function(){return this.f==null},$type:new $.ig.Type("QualifiedNameInfo",$$0.$bh.$type)},true);$c("UnknownElementCache:fx","Object",{h:null,i:null,a:null,m:null,o:null,init:function(a,b){this.a=new $$t.fw;$.ig.$op.init.call(this);this.a=a;this.o=b},l:function(a,b){var d=this.j().getEnumerator();while(d.moveNext()){var c=d.current();if(c.a.e(b)==a){return $m($$t.$bm.$type,c)}}return $m($$t.$bm.$type,null)},c:function(a,b){return $$5.$e.ag($$t.$fx.$type,this.k(),function(c){return c.b().e(b)==a})},f:function(a,b){return $$5.$e.u($$t.$fx.$type,this.k(),function(c){return c.b().e(b)==a})},g:function(a,b){var d__=new $$t.fy((-2));d__.___4__this=this;d__.___3__strictElementName=a;d__.___3__documentManager=b;return d__},j:function(){if(this.h==null){this.h=new $$4.w($$t.$bm.$type,0)}return this.h},d:function(){return this.h!=null&&this.h.count()!=0},k:function(){if(this.i==null){this.i=new $$4.w($$t.$fx.$type,0)}return this.i},e:function(){return this.i!=null&&this.i.count()!=0},b:function(){return this.a},n:function(a){if(arguments.length===1){this.m=a;return a}else{return this.m}},p:function(a){if(arguments.length===1){this.o=a;return a}else{return this.o}},$type:new $.ig.Type("UnknownElementCache",$.ig.$ot)},true);$c("UnknownStructure:fz","Object",{a:null,init:function(a){$.ig.$op.init.call(this);this.a=a},b:function(){return this.a},$type:new $.ig.Type("UnknownStructure",$.ig.$ot)},true);$c("XmlReadManager:f0","Object",{u:null,ab:0,k:null,ad:null,v:null,z:0,m:null,b:null,i:null,j:null,ao:null,aa:0,w:null,x:null,a:null,y:0,init:function(a,b){this.k=new $$t.fw;this.w=new $$4.z($$t.$f4.$type);this.x=new $$4.z($$t.$f5.$type);this.a=[];this.y=0;$.ig.$op.init.call(this);this.v=new $$4.z($$t.$f1.$type);this.u=new $$4.w($$t.$bm.$type,0);this.z=-1;this.b=new Array(16);this.i=a.d();this.j=a;this.ao=b},q:function(a){for(var b=0;b<=this.z;b++){if(this.b[b].a(a)){return true}}return false},r:function(a){if(this.w.count()>0){var b=this.w.peek();if(a==b.b.e(this.i)){return true}}return false},d:function(){this.aa=0;return this.f(this.w.count(),0,0,false,false)},f:function(a,b,c,d,e){var $self=this;var f=new $$t.f4;if(d){f=this.w.pop()}else{f=new $$t.f4;f.h=b;f.c=c}var g=null;while(true){if(e==true){e=false}else{if(this.ao.nodeType()==15){if(this.w.count()==a){break}f=this.w.pop();e=true;continue}f.b=this.l();if(f.b.c()){if(this.w.count()==a){break}f=this.w.pop();e=true;continue}this.al();f.f=true;f.g=true;f.e=false;g=f.b.e(this.i);var h=null;switch(g){case $$t.$iz.ap:return $$v.$o.c(this.c(f.b,f.h),function(){if(f.g&&$self.ao.read()==false){if($self.w.count()==a){return null}f=$self.w.pop();e=true}else{if(f.f){f.h++}$self.ak()}$self.w.push(f);return $$v.$i.d(function(){return $self.f(a,f.h,f.c,true,e)},2)},0);case $$t.$iz.aq:h=this.g(f.b,f.h,f.c);break;case $$t.$iz.ar:h=this.h(f.b,f.h,f.c);break;default:f.e=true;break}if(h!=null){return $$v.$o.f($$0.$aq.$type,h,function(i){if($$v.$o.m($$0.$aq.$type,i)==false){f.f=false;f.g=false}else{f.c=2}if(f.g&&$self.ao.read()==false){if($self.w.count()==a){return null}f=$self.w.pop();e=true}else{if(f.f){f.h++}$self.ak()}$self.w.push(f);return $$v.$i.d(function(){return $self.f(a,f.h,f.c,true,e)},2)},0)}if(f.e){var i=false;f.a=this.j.x(g);if(f.a.c()){if(this.t(f.b,f.h)){f.g=false;i=true}}if(!i){var j=this.ao.isEmptyElement();this.am(f.b,false,false);f.d=j;if(f.a.b!=null){this.k=f.b;this.ab=f.h;f.a.b(this.j)}if(f.d==false){if(this.j.ah(f.b.e(this.i))){if(this.b[this.z].b){return $$v.$o.c($$v.$o.a(this.e(this.x.count(),false,false),function(){},0),function(){$self.w.push(f);return $$v.$i.d(function(){return $self.f(a,f.h,f.c,true,true)},2)},0)}else{this.w.push(f);f=new $$t.f4;f.h=0;f.c=0;continue}}else{while(this.ao.nodeType()!=15){this.ao.skip()}}}}}}if(f.e){if(f.a.a!=null){this.k=f.b;this.ab=f.h;f.a.a(this.j)}}if(f.g&&this.ao.read()==false){if(this.w.count()==a){break}f=this.w.pop();e=true;continue}if(f.f){f.h++}this.ak();this.aa++;if(1e3<this.aa){this.aa=0;this.w.push(f);return $$v.$i.d(function(){return $self.f(a,f.h,f.c,true,e)},2)}}return null},e:function(a,b,c){var $self=this;var d=b?this.x.pop():new $$t.f5;var e=null;while(true){if(c==false){if(this.ao.nodeType()==15){if(this.x.count()==a){break}d=this.x.pop();c=true;continue}d.b=this.l();if(d.b.c()){if(this.x.count()==a){break}d=this.x.pop();c=true;continue}this.al();e=d.b.e(this.i)}if(c==false&&e==$$t.$iz.ap){return $$v.$o.c(this.c(d.b,0),function(){if($self.ao.read()==false){if($self.x.count()==a){return null}d=$self.x.pop();c=true}else{d.c++;$self.ak()}$self.x.push(d);return $$v.$i.d(function(){return $self.e(a,true,c)},2)},0)}else{if(c){c=false}else{d.a=this.j.x(e);var f=this.ao.isEmptyElement();this.am(d.b,false,false);if(d.a.b!=null){this.k=d.b;this.ab=d.c;d.a.b(this.j)}if(f==false){this.x.push(d);d=new $$t.f5;continue}}if(d.a.a!=null){this.k=d.b;this.ab=d.c;d.a.a(this.j)}}if(this.ao.read()==false){if(this.x.count()==a){break}d=this.x.pop();c=true;continue}d.c++;this.ak();if(1e3<++this.aa){this.aa=0;this.x.push(d);return $$v.$i.d(function(){return $self.e(a,true,c)},2)}}return null},ae:function(a){return this.ao.lookupNamespace(a)},aj:function(){if(this.v.count()==0){return}this.v.peek().a=true},an:function(){this.b[this.z].b=true},ah:function(a,b){for(var c=0;c<b.length;c++){var d=this.ae(b[c]);if(d!=null){a.add(d)}}},c:function(a,b){var c=this.ao.isEmptyElement();this.am(a,false,false);this.k=a;this.ab=b;if(c==false){return this.f(this.w.count(),b,1,false,false)}return null},o:function(a,b){b=this.ao.isEmptyElement();this.am(a,true,true);var c=new $$t.fx(a,this.ad);if(this.u.count()!=0){c.j().addRange(this.u)}return{ret:c,p1:b}},p:function(a,b){var $self=this;this.al();var c;var d=function(){var e=$self.o(a,c);c=e.p1;return e.ret}();var e=this.j.w(a);if(e.b!=null){this.k=a;this.ab=b;this.m=d;e.b(this.j);this.m=null}if(c==false){if(this.j.ah(a.e(this.i))){this.ai(d)}else{while(this.ao.nodeType()!=15){this.ao.skip()}}}if(e.a!=null){this.k=a;this.ab=b;this.m=d;e.a(this.j);this.m=null}this.j.at(d);this.ak();return d},ai:function(a){var b=0;while(this.ao.nodeType()!=15){var c=this.l();if(c.c()){break}a.k().add(this.p(c,b));if(this.ao.read()==false){break}b++}},t:function(a,b){var c=a.e(this.i);var d=this.j.z(c);var t1=d;L0:while(true){switch(t1){case 0:this.ao.skip();return true;case 1:{var e=this.ao.readOuterXml();this.j.av(c,e);return true}case 2:{var f=this.p(a,b);var g=new $$t.fz(f);this.j.au(g);this.ao.read();return true}case 3:return false;default:t1=0;continue L0}break}},l:function(){switch(this.ao.nodeType()){case 1:return new $$t.fw(1,this.ao.prefix(),this.ao.namespaceURI(),this.ao.localName());case 2:break;case 15:case 14:case 3:case 0:break;case 17:case 13:case 8:{do{this.ao.read()}while(this.ao.nodeType()==13||this.ao.nodeType()==17||this.ao.nodeType()==8);return this.l()}default:break}return $$t.$fw.a},ak:function(){this.j.s().i(this.b[this.z].e,this.b[this.z].f);
this.b[this.z]=null;this.z--},al:function(){this.z++;while(this.b.length<=this.z){var a=new Array(this.b.length*2);$.ig.util.arrayCopy2(this.b,a,this.b.length);this.b=a}this.b[this.z]=new $$t.f3(1,this)},am:function(a,b,c){this.y=0;this.u.clear();this.ad=null;var d=this.ao.isEmptyElement();if(this.ao.moveToFirstAttribute()){do{var e=this.ao.namespaceURI();if(b==false&&e=="http://www.w3.org/2000/xmlns/"){if(this.ao.localName()=="xmlns"||this.ao.prefix()=="xmlns"){continue}}var f=new $$t.bm;if(c){f=new $$t.bm(1,this.ao.prefix(),e,this.ao.localName(),this.ao.value())}else if(this.y<this.a.length){f=this.a[this.y++];f.e(this.ao.prefix(),e,this.ao.localName(),this.ao.value())}else{f=new $$t.bm(1,this.ao.prefix(),e,this.ao.localName(),this.ao.value());this.a.push(f);this.y++}if(f.a.f=="Ignorable"&&f.a.e(this.i)==$$t.$iz.as){this.ah(this.b[this.z].d(),$.ig.util.stringSplit(f.d,[" "],1));continue}this.u.add(f)}while(this.ao.moveToNextAttribute());this.ao.moveToElement()}if(d==false&&this.ao.read()){if(this.ao.nodeType()==13&&a.f=="t"&&a.e(this.i)==$$t.$iv.fq){this.ad=this.ao.value()}else{while(this.ao.nodeType()==13){this.ao.read()}if(this.ao.nodeType()==14||this.ao.nodeType()==3){this.ad=this.ao.value();this.ao.read()}}}},ag:function(a){var b=a.indexOf(":");if(b<0){return a}var c=a.substr(0,b);var d=a.substr(b+1);var e=this.ae(c);var f=new $$t.fw(1,c,e,d);return f.e(this.i)},g:function(a,b,c){var $self=this;if(c!=1){this.ao.skip();return $$v.$i.g($$0.$aq.$type,false)}var d=this.ao.isEmptyElement();this.am(a,false,false);this.k=a;this.ab=b;var e;var f=$$t.$iz.aw(this.j,e);e=f.p1;if(this.j.ag(e)==false){while(this.ao.nodeType()==1){this.ao.skip();if(this.ao.nodeType()==13){this.ao.skip()}}if(this.ao.read()==false){}return $$v.$i.g($$0.$aq.$type,false)}var g=true;return $$v.$o.g($$0.$aq.$type,$$v.$h.g(d==false,function(){$self.v.push(new $$t.f1);var h=$self.f($self.w.count(),0,0,false,false);var i=$self.v.pop();if(i.a){if($self.ao.read()==false){}g=false}return h},null),function(){return g},0)},h:function(a,b,c){var $self=this;if(c!=1){this.ao.skip();return $$v.$i.g($$0.$aq.$type,false)}var d=this.ao.isEmptyElement();this.am(a,false,false);this.k=a;this.ab=b;return $$v.$o.g($$0.$aq.$type,$$v.$h.g(d==false,function(){return $self.f($self.w.count(),0,0,false,false)},null),function(){return true},0)},n:function(){return this.m},s:function(){return this.v.count()!=0},af:function(){return this.ao.namespaceURI()},$type:new $.ig.Type("XmlReadManager",$.ig.$ot)},true);$c("XmlReadManager_AlternateContentChoiceContext:f1","Object",{init:function(){$.ig.$op.init.call(this)},a:false,$type:new $.ig.Type("XmlReadManager_AlternateContentChoiceContext",$.ig.$ot)},true);$c("XmlReadManager_ElementContext:f3","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},e:0,f:null,c:null,b:false,init1:function(a,b){$$0.$bh.init.call(this);this.e=b.j.s().e();this.f=b.j.s().f();this.b=false;this.c=null},a:function(a){return this.c!=null&&this.c.contains(a)},d:function(){if(this.c==null){this.c=new $$4.p(String,0)}return this.c},$type:new $.ig.Type("XmlReadManager_ElementContext",$$0.$bh.$type)},true);$c("XmlReadManager_LoadChildContext:f4","ValueType",{init:function(){this.b=new $$t.fw;this.a=new $$t.fp;$$0.$bh.init.call(this)},h:0,c:0,b:null,a:null,g:false,f:false,e:false,d:false,$type:new $.ig.Type("XmlReadManager_LoadChildContext",$$0.$bh.$type)},true);$c("XmlReadManager_LoadFastContext:f5","ValueType",{init:function(){this.b=new $$t.fw;this.a=new $$t.fp;$$0.$bh.init.call(this)},c:0,b:null,a:null,$type:new $.ig.Type("XmlReadManager_LoadFastContext",$$0.$bh.$type)},true);$c("ST_DecimalNumber:gi","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},e:0,init1:function(a,b){$$0.$bh.init.call(this);this.e=b},d:function(a){return $$t.$gi.b($aa(a,$$0.$cg.invariantCulture()))},j:function(a){var b;if(function(){var c=$8(a,7|4,$$0.$cg.invariantCulture(),b);b=c.p3;return c.ret}()){return $m($$t.$gi.$type,$$t.$gi.b(b))}return $m($$t.$gi.$type,null)},toString:function(){return this.e.toString()},f:function(a){return a.e},h:function(a){if(!a.hasValue()){return $m($$0.$aw.$type,null)}return $m($$0.$aw.$type,$$t.$gi.f(a.value()))},b:function(a){return new $$t.gi(1,a)},i:function(a){if(!a.hasValue()){return $m($$t.$gi.$type,null)}return $m($$t.$gi.$type,$$t.$gi.b(a.value()))},$type:new $.ig.Type("ST_DecimalNumber",$$0.$bh.$type)},true);$c("ST_DecimalNumberOrPercent:gj","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}this.a=new $$t.hb;$$0.$bh.init.call(this)},b:false,a:null,init1:function(a,b,c){this.a=new $$t.hb;$$0.$bh.init.call(this);this.b=c;this.a=b},equals:function(a){var b=$m($$t.$gj.$type,$b($$t.$gj.$type,a));if($$t.$gj.f(b,$m($$t.$gj.$type,null))){return false}return $$t.$gj.c(this,b.getValueOrDefault())},getHashCode:function(){return this.a.getHashCode()},toString:function(){return this.k(0)},k:function(a){if(this.b){return $$t.$hb.k(this.a).toString()}return this.a.p(a)},i:function(a){a=this.b;return{ret:$$t.$hb.k(this.a),p0:a}},j:function(a,b){var c=$$t.$gi.j(a);if($l(c,null)){return $m($$t.$gj.$type,new $$t.gj(1,new $$t.hb(1,$$t.$gi.f(c.getValueOrDefault())),true))}var d=$$t.$hb.o(a,b);if($$t.$hb.g(d,$m($$t.$hb.$type,null))){return $m($$t.$gj.$type,new $$t.gj(1,d.getValueOrDefault(),false))}return $m($$t.$gj.$type,null)},c:function(a,b){return $$t.$hb.d(a.a,b.a)},d:function(a,b){if(!a.hasValue()){return!b.hasValue()}else if(!b.hasValue()){return false}return $$t.$gj.c(a.value(),b.value())},e:function(a,b){return!$$t.$gj.c(a,b)},f:function(a,b){if(!a.hasValue()){return b.hasValue()}else if(!b.hasValue()){return true}return $$t.$gj.e(a.value(),b.value())},$type:new $.ig.Type("ST_DecimalNumberOrPercent",$$0.$bh.$type)},true);$c("ST_DrawingElementId:gk","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},g:0,init1:function(a,b){$$0.$bh.init.call(this);this.g=b},c:function(a){return $$t.$gk.a($.ig.util.parseUInt32_2(a,7,$$0.$cg.invariantCulture()))},f:function(a){var b;if(function(){var c=$.ig.util.tryParseUInt32_2(a,7,$$0.$cg.invariantCulture(),b);b=c.p3;return c.ret}()){return $m($$t.$gk.$type,$$t.$gk.a(b))}return $m($$t.$gk.$type,null)},toString:function(){return this.g.toString()},h:function(a){return a.g},e:function(a){if(!a.hasValue()){return $m($$0.$be.$type,null)}return $m($$0.$be.$type,$$t.$gk.h(a.value()))},a:function(a){return new $$t.gk(1,a)},d:function(a){if(!a.hasValue()){return $m($$t.$gk.$type,null)}return $m($$t.$gk.$type,$$t.$gk.a(a.value()))},$type:new $.ig.Type("ST_DrawingElementId",$$0.$bh.$type)},true);$c("ST_EighthPointMeasure:gl","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}this.d=new $$t.ih;$$0.$bh.init.call(this)},d:null,init1:function(a,b){this.d=new $$t.ih;$$0.$bh.init.call(this);this.d=b},equals:function(a){var b=$m($$t.$gl.$type,$b($$t.$gl.$type,a));if($$t.$gl.j(b,$m($$t.$gl.$type,null))){return false}return $$t.$gl.g(this,b.getValueOrDefault())},getHashCode:function(){return this.d.getHashCode()},toString:function(){return this.d.toString()},c:function(a){var b=$$t.$gl.p(a);if($$t.$gl.j(b,$m($$t.$gl.$type,null))){return b.getValueOrDefault()}throw $$v.$aq.m($$t.$gl.$type,a)},p:function(a){var b=$$t.$ih.f(a);if($l(b,null)){return $m($$t.$gl.$type,$$t.$gl.a(b.getValueOrDefault()))}return $m($$t.$gl.$type,null)},g:function(a,b){return $$t.$ih.h(a.d)==$$t.$ih.h(b.d)},h:function(a,b){if(!a.hasValue()){return!b.hasValue()}else if(!b.hasValue()){return false}return $$t.$gl.g(a.value(),b.value())},i:function(a,b){return!$$t.$gl.g(a,b)},j:function(a,b){if(!a.hasValue()){return b.hasValue()}else if(!b.hasValue()){return true}return $$t.$gl.i(a.value(),b.value())},a:function(a){return new $$t.gl(1,a)},m:function(a){if(!a.hasValue()){return $m($$t.$gl.$type,null)}return $m($$t.$gl.$type,$$t.$gl.a(a.value()))},e:function(a){return a.d},n:function(a){if(!a.hasValue()){return $m($$t.$ih.$type,null)}return $m($$t.$ih.$type,$$t.$gl.e(a.value()))},q:function(a){return $$t.$ih.h(a.d)},o:function(a){if(!a.hasValue()){return $m($$0.$bf.$type,null)}return $m($$0.$bf.$type,$$t.$gl.q(a.value()))},$type:new $.ig.Type("ST_EighthPointMeasure",$$0.$bh.$type)},true);$c("ST_FixedAngle:gp","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}this.a=new $$v.cc;$$0.$bh.init.call(this)},a:null,init1:function(a,b){this.a=new $$v.cc;$$0.$bh.init.call(this);$$v.$aq.au($$t.$gp.$type,b.l(),"value",-54e5,54e5);this.a=b},equals:function(a){var b=$m($$t.$gp.$type,$b($$t.$gp.$type,a));if($$t.$gp.k(b,$m($$t.$gp.$type,null))){return false}return $$t.$gp.h(this,b.getValueOrDefault())},getHashCode:function(){return this.a.getHashCode()},toString:function(){return this.a.toString()},d:function(a){return $$t.$gp.e($$v.$cc.a(a))},g:function(a){var b=$$t.$gp.r(a);if($$t.$gp.k(b,$m($$t.$gp.$type,null))){return b.getValueOrDefault()}throw $$v.$aq.m($$t.$gp.$type,a)},s:function(){return this.a.l()},r:function(a){return $$t.$gp.q($$v.$cc.k(a))},h:function(a,b){return $$v.$cc.c(a.a,b.a)},i:function(a,b){if(!a.hasValue()){return!b.hasValue()}else if(!b.hasValue()){return false}return $$t.$gp.h(a.value(),b.value())},j:function(a,b){return!$$t.$gp.h(a,b)},k:function(a,b){if(!a.hasValue()){return b.hasValue()}else if(!b.hasValue()){return true}return $$t.$gp.j(a.value(),b.value())},e:function(a){return new $$t.gp(1,a)},q:function(a){if(!a.hasValue()){return $m($$t.$gp.$type,null)}return $m($$t.$gp.$type,$$t.$gp.e(a.value()))},b:function(a){return a.a},p:function(a){if(!a.hasValue()){return $m($$v.$cc.$type,null)}return $m($$v.$cc.$type,$$t.$gp.b(a.value()))},$type:new $.ig.Type("ST_FixedAngle",$$0.$bh.$type)},true);$c("ST_FixedPercentage:gq","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}this.d=new $$t.hb;$$0.$bh.init.call(this)},d:null,init1:function(a,b){this.d=new $$t.hb;$$0.$bh.init.call(this);$$v.$aq.au($$t.$gq.$type,$$t.$hb.k(b),"value",-100,100);this.d=b},equals:function(a){var b=$m($$t.$gq.$type,$b($$t.$gq.$type,a));if($$t.$gq.j(b,$m($$t.$gq.$type,null))){return false}return $$t.$gq.g(this,b.getValueOrDefault())},getHashCode:function(){return this.d.getHashCode()},toString:function(){return this.s(1)},s:function(a){return this.d.p(a)},c:function(a,b){var c=$$t.$gq.r(a,b);if($$t.$gq.j(c,$m($$t.$gq.$type,null))){return c.getValueOrDefault()}throw $$v.$aq.m($$t.$gq.$type,a)},r:function(a,b){return $$t.$gq.p($$t.$hb.o(a,b))},g:function(a,b){return $$t.$hb.d(a.d,b.d)},h:function(a,b){if(!a.hasValue()){return!b.hasValue()}else if(!b.hasValue()){return false}return $$t.$gq.g(a.value(),b.value())},i:function(a,b){return!$$t.$gq.g(a,b)},j:function(a,b){if(!a.hasValue()){return b.hasValue()}else if(!b.hasValue()){return true}return $$t.$gq.i(a.value(),b.value())},a:function(a){return new $$t.gq(1,a)},p:function(a){if(!a.hasValue()){return $m($$t.$gq.$type,null)}return $m($$t.$gq.$type,$$t.$gq.a(a.value()))},e:function(a){return a.d},q:function(a){if(!a.hasValue()){return $m($$t.$hb.$type,null)}return $m($$t.$hb.$type,$$t.$gq.e(a.value()))},m:function(a){return $$t.$hb.k(a.d)},o:function(a){if(!a.hasValue()){return $m(Number,null)}return $m(Number,$$t.$gq.m(a.value()))},$type:new $.ig.Type("ST_FixedPercentage",$$0.$bh.$type)},true);$c("ST_HexColorRGB:gv","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break;case 2:this.init2.apply(this,arguments);break}return}$$0.$bh.init.call(this)},m:0,l:0,k:0,init1:function(a,b){$$t.$gv.init2.call(this,2,b.o(),b.n(),b.m())},init2:function(a,b,c,d){$$0.$bh.init.call(this);this.m=b;this.l=c;this.k=d},equals:function(a){var b=$m($$t.$gv.$type,$b($$t.$gv.$type,a));if($$t.$gv.h(b,$m($$t.$gv.$type,null))){return false}return $$t.$gv.e(this,b.getValueOrDefault())},getHashCode:function(){return this.m<<16|this.l<<8|this.k},d:function(a){var b=$$t.$gv.p(a);if($$t.$gv.h(b,$m($$t.$gv.$type,null))){return b.getValueOrDefault()}throw $$v.$aq.m($$t.$gv.$type,a)},p:function(a){var b;if(function(){var c=$8(a,515,$$0.$cg.invariantCulture(),b);b=c.p3;return c.ret}()==false){return $m($$t.$gv.$type,null)}var c=(b&16711680)>>16;var d=(b&65280)>>8;var e=(b&255)>>0;return $m($$t.$gv.$type,new $$t.gv(2,c,d,e))},toString:function(){return $9(this.m,"X2",$$0.$cg.invariantCulture())+$9(this.l,"X2",$$0.$cg.invariantCulture())+$9(this.k,"X2",$$0.$cg.invariantCulture())},q:function(){return $$a.$ax.u(255,this.m,this.l,this.k)},e:function(a,b){return a.k==b.k&&a.l==b.l&&a.m==b.m},f:function(a,b){if(!a.hasValue()){return!b.hasValue()}else if(!b.hasValue()){return false}return $$t.$gv.e(a.value(),b.value())},g:function(a,b){return!$$t.$gv.e(a,b)},h:function(a,b){if(!a.hasValue()){return b.hasValue()}else if(!b.hasValue()){return true}return $$t.$gv.g(a.value(),b.value())},r:function(a){return a.q()},n:function(a){if(!a.hasValue()){return $m($$a.$ax.$type,null)}return $m($$a.$ax.$type,$$t.$gv.r(a.value()))},b:function(a){return new $$t.gv(2,a.o(),a.n(),a.m())},o:function(a){if(!a.hasValue()){return $m($$t.$gv.$type,null)}return $m($$t.$gv.$type,$$t.$gv.b(a.value()))},$type:new $.ig.Type("ST_HexColorRGB",$$0.$bh.$type)},true);$c("ST_HexColorAuto:gu","ValueType",{init:function(){$$0.$bh.init.call(this)},equals:function(a){var b=$m($$t.$gu.$type,$b($$t.$gu.$type,a));if($$t.$gu.f(b,$m($$t.$gu.$type,null))){return false}return $$t.$gu.c(this,b.getValueOrDefault())},getHashCode:function(){return 0},b:function(a){var b=$$t.$gu.i(a);if($$t.$gu.f(b,$m($$t.$gu.$type,null))){return b.getValueOrDefault()}throw $$v.$aq.m($$t.$gu.$type,a)},i:function(a){if(a=="auto"){return $m($$t.$gu.$type,$$t.$gu.a)}return $m($$t.$gu.$type,null)},toString:function(){return"auto"},c:function(a,b){return true},d:function(a,b){if(!a.hasValue()){return!b.hasValue()}else if(!b.hasValue()){return false}return $$t.$gu.c(a.value(),b.value())},e:function(a,b){return false},f:function(a,b){if(!a.hasValue()){return b.hasValue()}else if(!b.hasValue()){return true}return $$t.$gu.e(a.value(),b.value())},$type:new $.ig.Type("ST_HexColorAuto",$$0.$bh.$type)},true);$c("ST_HexColor:gt","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break;case 2:this.init2.apply(this,arguments);break}return}$$0.$bh.init.call(this)},p:$m($$t.$gv.$type,null),q:$m($$t.$gu.$type,null),init1:function(a,b){$$0.$bh.init.call(this);this.p=$m($$t.$gv.$type,b);this.q=$m($$t.$gu.$type,null)},init2:function(a,b){$$0.$bh.init.call(this);this.p=$m($$t.$gv.$type,null);this.q=$m($$t.$gu.$type,b)},equals:function(a){var b=$m($$t.$gt.$type,$b($$t.$gt.$type,a));if($$t.$gt.m(b,$m($$t.$gt.$type,null))){return false}return $$t.$gt.j(this,b.getValueOrDefault())},getHashCode:function(){if($$t.$gv.h(this.p,$m($$t.$gv.$type,null))){return this.p.value().getHashCode()}if($$t.$gu.f(this.q,$m($$t.$gu.$type,null))){return this.q.value().getHashCode()}return 0},e:function(a){var b=$$t.$gt.u(a);if($$t.$gt.m(b,$m($$t.$gt.$type,null))){return b.getValueOrDefault()}throw $$v.$aq.m($$t.$gt.$type,a)},u:function(a){var b=$$t.$gu.i(a);if($$t.$gu.f(b,$m($$t.$gu.$type,null))){return $m($$t.$gt.$type,$$t.$gt.a(b.getValueOrDefault()))}var c=$$t.$gv.p(a);if($$t.$gv.h(c,$m($$t.$gv.$type,null))){return $m($$t.$gt.$type,$$t.$gt.b(c.getValueOrDefault()))}return $m($$t.$gt.$type,null)},toString:function(){if($$t.$gv.h(this.p,$m($$t.$gv.$type,null))){return this.p.getValueOrDefault().toString()}if($$t.$gu.f(this.q,$m($$t.$gu.$type,null))){return this.q.getValueOrDefault().toString()}return String.empty()},h:function(){return $$t.$gu.f(this.q,$m($$t.$gu.$type,null))},i:function(){return $$t.$gv.h(this.p,$m($$t.$gv.$type,null))},j:function(a,b){return $$t.$gv.f(a.p,b.p)&&$$t.$gu.d(a.q,b.q)},k:function(a,b){if(!a.hasValue()){return!b.hasValue()}else if(!b.hasValue()){return false}return $$t.$gt.j(a.value(),b.value())},l:function(a,b){return!$$t.$gt.j(a,b)},m:function(a,b){if(!a.hasValue()){return b.hasValue()}else if(!b.hasValue()){return true}return $$t.$gt.l(a.value(),b.value())},b:function(a){return new $$t.gt(1,a)},t:function(a){if(!a.hasValue()){return $m($$t.$gt.$type,null)}return $m($$t.$gt.$type,$$t.$gt.b(a.value()))},f:function(a){return a.p.value()},r:function(a){if(!a.hasValue()){return $m($$t.$gv.$type,null)}return $m($$t.$gv.$type,$$t.$gt.f(a.value()))},a:function(a){return new $$t.gt(2,a)},s:function(a){if(!a.hasValue()){return $m($$t.$gt.$type,null)}return $m($$t.$gt.$type,$$t.$gt.a(a.value()))},$type:new $.ig.Type("ST_HexColor",$$0.$bh.$type)},true);$c("ST_PositiveUniversalMeasure:hg","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},b:0,c:0,init1:function(a,b,c){$$0.$bh.init.call(this);this.c=b;this.b=c},toString:function(){return $$v.$cg.p(this.c,this.b)},d:function(){return $$v.$cg.l(this.c,this.b)},a:function(a){var b=$$t.$hg.e(a);if($l(b,null)){return b.getValueOrDefault()}throw $$v.$aq.m($$t.$hg.$type,a)},e:function(a){var b;var c;if(function(){var d=$$v.$cg.i(a,b,c);b=d.p1;c=d.p2;return d.ret}()==false){return $m($$t.$hg.$type,null)}return $m($$t.$hg.$type,new $$t.hg(1,b,c))},$type:new $.ig.Type("ST_PositiveUniversalMeasure",$$0.$bh.$type)},true);$c("ST_UnsignedDecimalNumber:ih","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},g:0,init1:function(a,b){$$0.$bh.init.call(this);this.g=b},f:function(a){var b;if(function(){var c=$.ig.util.tryParseUInt64_2(a,7|4,$$0.$cg.invariantCulture(),b);b=c.p3;return c.ret}()){return $m($$t.$ih.$type,$$t.$ih.b(b))}return $m($$t.$ih.$type,null)},toString:function(){return this.g.toString()},h:function(a){return a.g},e:function(a){if(!a.hasValue()){return $m($$0.$bf.$type,null)}return $m($$0.$bf.$type,$$t.$ih.h(a.value()))},b:function(a){return new $$t.ih(1,a)},d:function(a){if(!a.hasValue()){return $m($$t.$ih.$type,null)}return $m($$t.$ih.$type,$$t.$ih.b(a.value()))},$type:new $.ig.Type("ST_UnsignedDecimalNumber",$$0.$bh.$type)},true);$c("ST_HpsMeasure:gw","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break;case 2:this.init2.apply(this,arguments);break;case 3:this.init3.apply(this,arguments);break}return}$$0.$bh.init.call(this)},g:$m($$t.$hg.$type,null),h:$m($$t.$ih.$type,null),init1:function(a,b){$$t.$gw.init2.call(this,2,new $$t.hg(1,b,3))},init2:function(a,b){$$0.$bh.init.call(this);this.g=$m($$t.$hg.$type,b);this.h=$m($$t.$ih.$type,null)},init3:function(a,b){$$0.$bh.init.call(this);this.g=$m($$t.$hg.$type,null);this.h=$m($$t.$ih.$type,b)},toString:function(){if($l(this.g,null)){return this.g.getValueOrDefault().toString()}if($l(this.h,null)){return this.h.getValueOrDefault().toString()}return String.empty()},f:function(){if($l(this.g,null)){return this.g.getValueOrDefault().d()}if($l(this.h,null)){return $$t.$ih.h(this.h.getValueOrDefault())*10}return 0},e:function(a){var b=$$t.$gw.k(a);if($l(b,null)){return b.getValueOrDefault()}throw $$v.$aq.m($$t.$gw.$type,a)},k:function(a){var b=$$t.$hg.e(a);if($l(b,null)){return $m($$t.$gw.$type,$$t.$gw.a(b.getValueOrDefault()))}var c=$$t.$ih.f(a);if($l(c,null)){return $m($$t.$gw.$type,$$t.$gw.b(c.getValueOrDefault()))}return $m($$t.$gw.$type,null)},a:function(a){return new $$t.gw(2,a)},i:function(a){if(!a.hasValue()){return $m($$t.$gw.$type,null)}return $m($$t.$gw.$type,$$t.$gw.a(a.value()))},b:function(a){return new $$t.gw(3,a)},j:function(a){if(!a.hasValue()){return $m($$t.$gw.$type,null)}return $m($$t.$gw.$type,$$t.$gw.b(a.value()))},$type:new $.ig.Type("ST_HpsMeasure",$$0.$bh.$type)},true);$c("ST_LongHexNumber:g5","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},e:0,init1:function(a,b){$$0.$bh.init.call(this);this.e=b},d:function(a){return $$t.$g5.b($ab(a,515,$$0.$cg.invariantCulture()))},toString:function(){return $9(this.e,"X8",$$0.$cg.invariantCulture())},b:function(a){return new $$t.g5(1,a)},f:function(a){if(!a.hasValue()){return $m($$t.$g5.$type,null)}return $m($$t.$g5.$type,$$t.$g5.b(a.value()))},$type:new $.ig.Type("ST_LongHexNumber",$$0.$bh.$type)},true);$c("ST_MeasurementOrPercent:g6","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break;case 2:this.init2.apply(this,arguments);break}return}$$0.$bh.init.call(this)},m:$m($$t.$gj.$type,null),n:$m($$v.$cg.$type,null),init1:function(a,b){$$0.$bh.init.call(this);this.m=$m($$t.$gj.$type,b);this.n=$m($$v.$cg.$type,null)},init2:function(a,b){$$0.$bh.init.call(this);this.m=$m($$t.$gj.$type,null);this.n=$m($$v.$cg.$type,b)},equals:function(a){var b=$m($$t.$g6.$type,$b($$t.$g6.$type,a));if($$t.$g6.j(b,$m($$t.$g6.$type,null))){return false}return $$t.$g6.g(this,b.getValueOrDefault())},getHashCode:function(){if($$t.$gj.f(this.m,$m($$t.$gj.$type,null))){return this.m.getValueOrDefault().getHashCode()}if($$v.$cg.f(this.n,$m($$v.$cg.$type,null))){return this.n.getValueOrDefault().getHashCode()<<1}return 0},toString:function(){return this.r(1)},r:function(a){if($$t.$gj.f(this.m,$m($$t.$gj.$type,null))){return this.m.getValueOrDefault().k(a)}if($$v.$cg.f(this.n,$m($$v.$cg.$type,null))){return this.n.getValueOrDefault().toString()}return String.empty()},o:function(a){var $self=this;if($$t.$gj.f(this.m,$m($$t.$gj.$type,null))){return{ret:$m(Number,function(){var b=$self.m.getValueOrDefault().i(a);a=b.p0;return b.ret}()),p0:a}}a=true;if($$v.$cg.f(this.n,$m($$v.$cg.$type,null))){return{ret:this.n.getValueOrDefault().n(),p0:a}}return{ret:$m(Number,null),p0:a}},e:function(a,b){var c=$$t.$gj.j(a,b);if($$t.$gj.f(c,$m($$t.$gj.$type,null))){return $$t.$g6.a(c.getValueOrDefault())}var d=$$v.$cg.o(a);if($$v.$cg.f(d,$m($$v.$cg.$type,null))){return $$t.$g6.b(d.getValueOrDefault())}throw $$v.$aq.m($$t.$g6.$type,a)},f:function(){return $$v.$cg.f(this.n,$m($$v.$cg.$type,null))},g:function(a,b){if($$t.$gj.f(a.m,b.m)){return false}if(!a.n.hasValue()){return!b.n.hasValue()}if(!b.n.hasValue()){return false}return $$v.$cg.b(a.n.value(),b.n.value())},h:function(a,b){if(!a.hasValue()){return!b.hasValue()}else if(!b.hasValue()){return false}return $$t.$g6.g(a.value(),b.value())},i:function(a,b){return!$$t.$g6.g(a,b)},j:function(a,b){if(!a.hasValue()){return b.hasValue()}else if(!b.hasValue()){return true}return $$t.$g6.i(a.value(),b.value())},a:function(a){return new $$t.g6(1,a)},p:function(a){if(!a.hasValue()){return $m($$t.$g6.$type,null)}return $m($$t.$g6.$type,$$t.$g6.a(a.value()))},b:function(a){return new $$t.g6(2,a)},q:function(a){if(!a.hasValue()){return $m($$t.$g6.$type,null)}return $m($$t.$g6.$type,$$t.$g6.b(a.value()))},$type:new $.ig.Type("ST_MeasurementOrPercent",$$0.$bh.$type)},true);$c("ST_OnOff:g7","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},d:false,init1:function(a,b){$$0.$bh.init.call(this);this.d=b},e:function(a){switch(a){case"1":return true;case"0":return false}return $ac(a)},toString:function(){return this.d?"1":"0"},g:function(a){return a?"1":"0"},b:function(a){return a?$$t.$g7.c:$$t.$g7.a},f:function(){return this.d},$type:new $.ig.Type("ST_OnOff",$$0.$bh.$type)},true);$c("ST_Panose:g8","Object",{a:null,init:function(a){$.ig.$op.init.call(this);this.a=a},toString:function(){return String.concat($$5.$e.o($$0.$ar.$type,String,this.a,function(a){return $9(a,"X2",$$0.$cg.invariantCulture())}))},b:function(a){var b=new Array($a(a.length,2));for(var c=0;c<b.length;c++){var d=a.charAt(c*2);var e=a.charAt(c*2+1);b[c]=$$v.$aq.q(d)<<4|$$v.$aq.q(e)}return new $$t.g8(b)},$type:new $.ig.Type("ST_Panose",$.ig.$ot)},true);$c("ST_PointMeasure:hc","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}this.d=new $$t.ih;$$0.$bh.init.call(this)},d:null,init1:function(a,b){this.d=new $$t.ih;$$0.$bh.init.call(this);this.d=b},equals:function(a){var b=$m($$t.$hc.$type,$b($$t.$hc.$type,a));if($$t.$hc.j(b,$m($$t.$hc.$type,null))){return false}return $$t.$hc.g(this,b.getValueOrDefault())},getHashCode:function(){return this.d.getHashCode()},toString:function(){return this.d.toString()},c:function(a){var b=$$t.$hc.p(a);if($$t.$hc.j(b,$m($$t.$hc.$type,null))){return b.getValueOrDefault()}throw $$v.$aq.m($$t.$hc.$type,a)},p:function(a){var b=$$t.$ih.f(a);if($l(b,null)){return $m($$t.$hc.$type,$$t.$hc.a(b.getValueOrDefault()))}return $m($$t.$hc.$type,null)},g:function(a,b){return $$t.$ih.h(a.d)==$$t.$ih.h(b.d)},h:function(a,b){if(!a.hasValue()){return!b.hasValue()}else if(!b.hasValue()){return false}return $$t.$hc.g(a.value(),b.value())},i:function(a,b){return!$$t.$hc.g(a,b)},j:function(a,b){if(!a.hasValue()){return b.hasValue()}else if(!b.hasValue()){return true}return $$t.$hc.i(a.value(),b.value())},a:function(a){return new $$t.hc(1,a)},m:function(a){if(!a.hasValue()){return $m($$t.$hc.$type,null)}return $m($$t.$hc.$type,$$t.$hc.a(a.value()))},e:function(a){return a.d},n:function(a){if(!a.hasValue()){return $m($$t.$ih.$type,null)}return $m($$t.$ih.$type,$$t.$hc.e(a.value()))},q:function(a){return $$t.$ih.h(a.d)},o:function(a){if(!a.hasValue()){return $m($$0.$bf.$type,null)}return $m($$0.$bf.$type,$$t.$hc.q(a.value()))},$type:new $.ig.Type("ST_PointMeasure",$$0.$bh.$type)},true);$c("ST_PositiveFixedAngle:hd","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}this.a=new $$v.cc;$$0.$bh.init.call(this)},a:null,init1:function(a,b){this.a=new $$v.cc;$$0.$bh.init.call(this);$$v.$aq.au($$t.$hd.$type,b.l(),"value",0,216e5);this.a=b},equals:function(a){var b=$m($$t.$hd.$type,$b($$t.$hd.$type,a));if($$t.$hd.k(b,$m($$t.$hd.$type,null))){return false}return $$t.$hd.h(this,b.getValueOrDefault())},getHashCode:function(){return this.a.getHashCode()},toString:function(){return this.a.toString()},d:function(a){return $$t.$hd.e($$v.$cc.a(a))},q:function(){return this.a.l()},g:function(a){var b=$$t.$hd.p(a);if($$t.$hd.k(b,$m($$t.$hd.$type,null))){return b.getValueOrDefault()}throw $$v.$aq.m($$t.$hd.$type,a)},p:function(a){return $$t.$hd.o($$v.$cc.k(a))},h:function(a,b){return $$v.$cc.c(a.a,b.a)},i:function(a,b){if(!a.hasValue()){return!b.hasValue()}else if(!b.hasValue()){return false}return $$t.$hd.h(a.value(),b.value())},j:function(a,b){return!$$t.$hd.h(a,b)},k:function(a,b){if(!a.hasValue()){return b.hasValue()}else if(!b.hasValue()){return true}return $$t.$hd.j(a.value(),b.value())},e:function(a){return new $$t.hd(1,a)},o:function(a){if(!a.hasValue()){return $m($$t.$hd.$type,null)}return $m($$t.$hd.$type,$$t.$hd.e(a.value()))},b:function(a){return a.a},n:function(a){if(!a.hasValue()){return $m($$v.$cc.$type,null)}return $m($$v.$cc.$type,$$t.$hd.b(a.value()))},$type:new $.ig.Type("ST_PositiveFixedAngle",$$0.$bh.$type)},true);$c("ST_PositiveFixedPercentage:he","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}this.a=new $$t.hb;$$0.$bh.init.call(this)},a:null,init1:function(a,b){this.a=new $$t.hb;$$0.$bh.init.call(this);$$v.$aq.au($$t.$he.$type,$$t.$hb.k(b),"value",0,100);this.a=b},equals:function(a){var b=$m($$t.$he.$type,$b($$t.$he.$type,a));if($$t.$he.j(b,$m($$t.$he.$type,null))){return false}return $$t.$he.g(this,b.getValueOrDefault())},getHashCode:function(){return this.a.getHashCode()},toString:function(){return this.s(1)},s:function(a){return this.a.p(a)},f:function(a,b){var c=$$t.$he.r(a,b);if($$t.$he.j(c,$m($$t.$he.$type,null))){return c.getValueOrDefault()}throw $$v.$aq.m($$t.$he.$type,a)},r:function(a,b){return $$t.$he.q($$t.$hb.o(a,b))},g:function(a,b){return $$t.$hb.d(a.a,b.a)},h:function(a,b){if(!a.hasValue()){return!b.hasValue()}else if(!b.hasValue()){return false}return $$t.$he.g(a.value(),b.value())},i:function(a,b){return!$$t.$he.g(a,b)},j:function(a,b){if(!a.hasValue()){return b.hasValue()}else if(!b.hasValue()){return true}return $$t.$he.i(a.value(),b.value())},d:function(a){return new $$t.he(1,a)},q:function(a){if(!a.hasValue()){return $m($$t.$he.$type,null)}return $m($$t.$he.$type,$$t.$he.d(a.value()))},b:function(a){return a.a},p:function(a){if(!a.hasValue()){return $m($$t.$hb.$type,null)}return $m($$t.$hb.$type,$$t.$he.b(a.value()))},m:function(a){return $$t.$hb.k(a.a)},o:function(a){if(!a.hasValue()){return $m(Number,null)}return $m(Number,$$t.$he.m(a.value()))},$type:new $.ig.Type("ST_PositiveFixedPercentage",$$0.$bh.$type)},true);$c("ST_SignedHpsMeasure:hm","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break;case 2:this.init2.apply(this,arguments);break}return}$$0.$bh.init.call(this)},c:$m($$0.$aw.$type,null),d:$m($$v.$cg.$type,null),init1:function(a,b){$$0.$bh.init.call(this);this.c=$m($$0.$aw.$type,$.ig.truncate(b*2));this.d=$m($$v.$cg.$type,null)},init2:function(a,b){$$0.$bh.init.call(this);this.c=$m($$0.$aw.$type,null);this.d=$m($$v.$cg.$type,b)},toString:function(){if($l(this.c,null)){return this.c.value().toString()}if($$v.$cg.f(this.d,$m($$v.$cg.$type,null))){return this.d.toString()}return String.empty()},b:function(){if($l(this.c,null)){return this.c.value()*10}if($$v.$cg.f(this.d,$m($$v.$cg.$type,null))){return this.d.value().k()}return 0},a:function(a){var b;if(function(){var c=$8(a,7,$$0.$cg.invariantCulture(),b);b=c.p3;return c.ret}()){return new $$t.hm(1,$a(b,2))}var c=$$v.$cg.o(a);if($$v.$cg.f(c,$m($$v.$cg.$type,null))){return new $$t.hm(2,c.value())}throw $$v.$aq.m($$t.$hm.$type,a)},$type:new $.ig.Type("ST_SignedHpsMeasure",$$0.$bh.$type)},true);$c("ST_SignedTwipsMeasure:hn","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break;case 2:this.init2.apply(this,arguments);break;case 3:this.init3.apply(this,arguments);break}return}$$0.$bh.init.call(this)},c:$m($$0.$aw.$type,null),d:$m($$v.$cg.$type,null),init1:function(a,b){$$t.$hn.init2.call(this,2,$.ig.truncate(b))},init2:function(a,b){$$0.$bh.init.call(this);this.c=$m($$0.$aw.$type,b);this.d=$m($$v.$cg.$type,null)},init3:function(a,b){$$0.$bh.init.call(this);this.c=$m($$0.$aw.$type,null);this.d=$m($$v.$cg.$type,b)},toString:function(){if($l(this.c,null)){return this.c.value().toString()}if($$v.$cg.f(this.d,$m($$v.$cg.$type,null))){return this.d.toString()}return String.empty()},b:function(){if($l(this.c,null)){return this.c.value()}if($$v.$cg.f(this.d,$m($$v.$cg.$type,null))){return this.d.value().k()}return 0},a:function(a){var b;if(function(){var c=$8(a,7,$$0.$cg.invariantCulture(),b);b=c.p3;return c.ret}()){return new $$t.hn(2,b)}var c=$$v.$cg.o(a);if($$v.$cg.f(c,$m($$v.$cg.$type,null))){return new $$t.hn(3,c.value())}throw $$v.$aq.m($$t.$hn.$type,a)},$type:new $.ig.Type("ST_SignedTwipsMeasure",$$0.$bh.$type)},true);$c("ST_TextFontSize:hz","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},d:0,init1:function(a,b){$$0.$bh.init.call(this);$$v.$aq.au($$t.$hz.$type,b,"value",100,4e5);this.d=b},c:function(a){return $$t.$hz.a($ab(a,7,$$0.$cg.invariantCulture()))},i:function(a){var b;if(function(){var c=$8(a,7,$$0.$cg.invariantCulture(),b);b=c.p3;return c.ret}()){return $m($$t.$hz.$type,$$t.$hz.a(b))}return $m($$t.$hz.$type,null)},toString:function(){return this.d.toString()},e:function(a){return a.d},g:function(a){if(!a.hasValue()){return $m($$0.$aw.$type,null)}return $m($$0.$aw.$type,$$t.$hz.e(a.value()))},a:function(a){return new $$t.hz(1,a)},h:function(a){if(!a.hasValue()){return $m($$t.$hz.$type,null)}return $m($$t.$hz.$type,$$t.$hz.a(a.value()))},$type:new $.ig.Type("ST_TextFontSize",$$0.$bh.$type)},true);$c("ST_TrueFalse:ic","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},f:false,init1:function(a,b){$$0.$bh.init.call(this);this.f=b},d:function(a){switch(a){case"t":return $$t.$ic.b(true);case"f":return $$t.$ic.b(false)}return $$t.$ic.b($ac(a));
},toString:function(){return this.f?"t":"f"},k:function(a){return a.toString()},g:function(a){return a.f},i:function(a){if(!a.hasValue()){return $m($$0.$aq.$type,null)}return $m($$0.$aq.$type,$$t.$ic.g(a.value()))},b:function(a){return new $$t.ic(1,a)},j:function(a){if(!a.hasValue()){return $m($$t.$ic.$type,null)}return $m($$t.$ic.$type,$$t.$ic.b(a.value()))},$type:new $.ig.Type("ST_TrueFalse",$$0.$bh.$type)},true);$c("ST_TrueFalseBlank:id","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},c:false,init1:function(a,b){$$0.$bh.init.call(this);this.c=b},d:function(a){if(String.isNullOrEmpty(a)){return true}switch(a){case"t":case"True":return true;case"f":case"False":return false}throw $$v.$aq.m($$t.$id.$type,a)},toString:function(){if(this.c){return String.empty()}return"False"},e:function(a){return a.toString()},f:function(a){return(a?$$t.$id.b:$$t.$id.a).toString()},$type:new $.ig.Type("ST_TrueFalseBlank",$$0.$bh.$type)},true);$c("ST_TwipsMeasure:ie","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break;case 2:this.init2.apply(this,arguments);break;case 3:this.init3.apply(this,arguments);break}return}$$0.$bh.init.call(this)},c:$m($$t.$ih.$type,null),d:$m($$t.$hg.$type,null),init1:function(a,b){$$t.$ie.init2.call(this,2,$$t.$ih.b($.ig.truncate($$v.$aq.i(b))))},init2:function(a,b){$$0.$bh.init.call(this);this.c=$m($$t.$ih.$type,b);this.d=$m($$t.$hg.$type,null)},init3:function(a,b){$$0.$bh.init.call(this);this.c=$m($$t.$ih.$type,null);this.d=$m($$t.$hg.$type,b)},toString:function(){if($l(this.c,null)){return this.c.value().toString()}if($l(this.d,null)){return this.d.value().toString()}return String.empty()},b:function(){if($l(this.c,null)){return $$t.$ih.h(this.c.value())}if($l(this.d,null)){return this.d.value().d()}return 0},a:function(a){var b=$$t.$ih.f(a);if($l(b,null)){return new $$t.ie(2,b.value())}var c=$$t.$hg.e(a);if($l(c,null)){return new $$t.ie(3,c.value())}throw $$v.$aq.m($$t.$ie.$type,a)},$type:new $.ig.Type("ST_TwipsMeasure",$$0.$bh.$type)},true);$c("ST_UcharHexNumber:ig","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},e:0,init1:function(a,b){$$0.$bh.init.call(this);this.e=b},d:function(a){return $$t.$ig.b($af(a,515,$$0.$cg.invariantCulture()))},toString:function(){return $9(this.e,"X2",$$0.$cg.invariantCulture())},b:function(a){return new $$t.ig(1,a)},i:function(a){if(!a.hasValue()){return $m($$t.$ig.$type,null)}return $m($$t.$ig.$type,$$t.$ig.b(a.value()))},f:function(a){return a.e},h:function(a){if(!a.hasValue()){return $m($$0.$ar.$type,null)}return $m($$0.$ar.$type,$$t.$ig.f(a.value()))},$type:new $.ig.Type("ST_UcharHexNumber",$$0.$bh.$type)},true);$c("ST_UnsignedIntHex:ii","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},g:0,init1:function(a,b){$$0.$bh.init.call(this);this.g=b},d:function(a){return $$t.$ii.b($.ig.util.parseUInt32_2(a,515,$$0.$cg.invariantCulture()))},toString:function(){return $9(this.g,"X8",$$0.$cg.invariantCulture())},b:function(a){return new $$t.ii(1,a)},e:function(a){if(!a.hasValue()){return $m($$t.$ii.$type,null)}return $m($$t.$ii.$type,$$t.$ii.b(a.value()))},h:function(a){return a.g},f:function(a){if(!a.hasValue()){return $m($$0.$be.$type,null)}return $m($$0.$be.$type,$$t.$ii.h(a.value()))},$type:new $.ig.Type("ST_UnsignedIntHex",$$0.$bh.$type)},true);$c("ST_UnsignedShortHex:ij","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},c:0,init1:function(a,b){$$0.$bh.init.call(this);this.c=b},d:function(a){return $.ig.util.parseUInt16_2(a,515,$$0.$cg.invariantCulture())},b:function(a){return new $$t.ij(1,$$t.$ij.d(a))},toString:function(){return $9(this.c,"X4",$$0.$cg.invariantCulture())},e:function(){return this.c},$type:new $.ig.Type("ST_UnsignedShortHex",$$0.$bh.$type)},true);$c("XmlWriteManager:im","Object",{a:null,c:null,b:null,w:null,init:function(a,b){$.ig.$op.init.call(this);this.c=new $$4.w(String,0);this.a=a.d();this.b=a;this.w=b},d:function(a){return this.w.lookupPrefix(a.i(this.a._conformance()))},e:function(a,b,c,d){var e=a.lastIndexOf("/");if(e<0){c=a;d="";b=String.empty();return{p1:b,p2:c,p3:d}}c=a.substr(e+1);d=a.substr(0,e);if(this.a._conformance()!=1){var f=this.a._getNamespaceDefinition(d);if(f!=null){d=f.i(this.a._conformance())}}b=this.w.lookupPrefix(d);if(String.isNullOrEmpty(b)){var g=d+"/";b=this.w.lookupPrefix(g);if(String.isNullOrEmpty(b)==false){d=g}}return{p1:b,p2:c,p3:d}},f:function(){if(this.c.count()==0){return}this.l($$t.$iz.an,false);this.h($$t.$iz.as,$.ig.util.stringJoin1(String," ",this.c));this.c.clear()},g:function(a,b){var $self=this;var c=new $$4.p($$t.$i9.$type,0);var e=a.getEnumerator();while(e.moveNext()){var d=e.current();var g=$$5.$e.u($$t.$i9.$type,d._b,function(h){return $self.d(h)==null}).getEnumerator();while(g.moveNext()){var f=g.current();c.add(f)}}$$t.$iz.ay(this.b);var i=c.getEnumerator();while(i.moveNext()){var h=i.current();this.l(h,false)}var k=a.getEnumerator();while(k.moveNext()){var j=k.current();$$t.$iz.az(this.b,j._b);j._a();this.k()}if(b!=null){$$t.$iz.a1(this.b);b();this.k()}this.k()},h:function(a,b){if(b==null){return}var c;var d;var e;var f=this.e(a,c,d,e);c=f.p1;d=f.p2;e=f.p3;this.i(c,d,e,b)},i:function(a,b,c,d){this.w.writeAttributeString2(a,b,c,d)},j:function(a,b){this.w.writeAttributeString(a,b)},k:function(){this.f();this.w.writeEndElement()},o:function(a){this.p(a,null)},p:function(a,b){var c;var d;var e;var f=this.e(a,c,d,e);c=f.p1;d=f.p2;e=f.p3;this.q(c!=null?c:b,d,e)},q:function(a,b,c){this.f();this.w.writeStartElement2(a,b,c)},r:function(a){this.w.writeStartElement(a)},l:function(a,b){this.m(a.j(),a.i(this.a._conformance()),b)},m:function(a,b,c){var d=b;if(this.a._conformance()!=1){var e=this.a._getNamespaceDefinition(b);if(e!=null){d=e.i(this.a._conformance())}}this.w.writeAttributeString2("xmlns",a,"http://www.w3.org/2000/xmlns/",d);if(c){this.c.add(a)}},n:function(a){this.f();this.w.writeRaw1(a)},t:function(a){this.f();var b=new $$4.z($$t.$fx.$type);this.s(a.b(),b)},s:function(a,b){var c=this.b.y(a,b);var t1=c;L0:while(true){switch(t1){case 0:{var d=a.b().b(this.a);this.q(d.h,d.f,d.g);if(a.d()){var f=a.j().getEnumerator();while(f.moveNext()){var e=f.current();var g=e.a.b(this.a);this.i(g.h,g.f,g.g,e.d)}}if(a.p()!=null){this.u(a.p())}}t1=1;continue L0;case 1:{if(a.e()){b.push(a);var i=a.k().getEnumerator();while(i.moveNext()){var h=i.current();this.s(h,b)}b.pop()}this.k()}break;case 2:break;default:t1=0;continue L0}break}},u:function(a){this.f();this.w.writeString(a)},v:function(a,b,c){this.f();var d=new $$6.aj(2,'version="'+a+'"');if(b.length>0){d.l(' encoding="');d.l(b);d.l('"')}if(c.length>0){d.l(' standalone="');d.l(c);d.l('"')}var e=d.toString();this.w.writeProcessingInstruction("xml",e)},$type:new $.ig.Type("XmlWriteManager",$.ig.$ot)},true);$c("PartManagerBase:jt","Object",{c:null,k:null,init:function(){$.ig.$op.init.call(this)},a:function(){},b:function(a){},e:function(a,b){var c=this.memberwiseClone();c.k=b;c.c=a;c.p();return c},j:function(){return null},n:function(a){},f:function(a,b){return null},o:function(a){},p:function(){},q:function(){},i:function(a){return false},m:function(){},d:function(){return this.c},g:function(){},h:function(){return true},l:function(a){if(arguments.length===1){this.k=a;return a}else{return this.k}},$type:new $.ig.Type("PartManagerBase",$.ig.$ot)},true);$c("ActiveXBinaryPartManager:jc","PartManagerBase",{init:function(){$$t.$jt.init.call(this)},m:function(){return"application/vnd.ms-office.activeX"},n:function(a){switch(a){case 0:return"/xl/activeX.bin";default:return null}},o:function(a){switch(a){case 0:return $$t.$jc.u;case 1:return $$t.$jc.t;default:return $$t.$jc.u}},g:function(){return true},$type:new $.ig.Type("ActiveXBinaryPartManager",$$t.$jt.$type)},true);$c("ActiveXPartManager:jd","PartManagerBase",{init:function(){$$t.$jt.init.call(this)},m:function(){return"application/vnd.ms-office.activeX+xml"},n:function(a){switch(a){case 0:return"/xl/activeX.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$jd.u;case 1:return $$t.$jd.t;default:return $$t.$jd.u}},g:function(){return true},$type:new $.ig.Type("ActiveXPartManager",$$t.$jt.$type)},true);$c("ImagePartManagerBase:jr","PartManagerBase",{init:function(){$$t.$jt.init.call(this)},n:function(a){switch(a){case 0:return this.s();case 1:return this.u();case 2:return this.t();default:return null}},o:function(a){return $$t.$jr.v(a)},g:function(){return true},a:function(){return $$v.$i.g($.ig.$op.$type,new $$v.ak(1,this.r(this.d()._activePart().uri().toString()),this.l()))},h:function(){return false},b:function(a){var b=$b($$v.$ak.$type,a);if(b!=null){b.f(this.l())}return null},s:function(){},t:function(){},u:function(){},r:function(a){},v:function(a){switch(a){case 0:return $$t.$jr.x;case 1:return $$t.$jr.w;default:return $$t.$jr.x}},$type:new $.ig.Type("ImagePartManagerBase",$$t.$jt.$type)},true);$c("BmpPartManager:je","ImagePartManagerBase",{aa:false,init:function(a){$$t.$jr.init.call(this);this.aa=a},s:function(){return this.aa?"/xl/media/image.dib":"/xl/media/image.bmp"},t:function(){return this.aa?"/ppt/media/image.dib":"/ppt/media/image.bmp"},u:function(){return this.aa?"/word/media/image.dib":"/word/media/image.bmp"},m:function(){return"image/bmp"},r:function(a){var b=$$7.$b.getExtension(a);if(b.toLowerCase()==".dib"){return $$v.$cq.b}return $$v.$cq.a},$type:new $.ig.Type("BmpPartManager",$$t.$jr.$type)},true);$c("XmlPartManagerBase:j3","PartManagerBase",{r:null,al:null,ak:0,aa:null,ac:null,init:function(){this.v=new $$t.fp(0);$$t.$jt.init.call(this);this.al={}},p:function(){$$t.$jt.p.call(this);var a=this.al;this.al={};for(p in a){if(a.hasOwnProperty(p)){this.al[p]=a[p]}}},a:function(){var $self=this;return $$v.$h.i($.ig.$op.$type,function(){$self.r=new $$v.ai;return $self.t()},function(){$self.r=null;$self.aa=null})},b:function(a){var $self=this;this.r=new $$v.ai;if(a!=null){this.r.j(a)}return $$v.$h.n($$2.$a2.$type,this.a0(),function(b){$self.ac=new $$t.im($self,b);if($self.ai()){$self.ac.v("1.0","UTF-8","yes")}return $self.u(a)})},ar:function(){this.ak++},as:function(){this.ak--;if(this.ak==0){this._ae=false}},aq:function(a){},w:function(a){return this.x(a.e(this.d()))},v:null,x:function(a){return this.al[a]||this.v},z:function(a){this.d()._onUnsupportedContentDetected();return 0},at:function(a){},au:function(a){},av:function(a,b){},aw:function(a,b){switch(a){case $$t.$iz.ap:case $$t.$iz.aq:case $$t.$iz.ar:return}var c=this.al[a];var d=c?new $$t.fp(1,c.b,b):new $$t.fp(1,null,b);this.al[a]=d},ax:function(a,b){switch(a){case $$t.$iz.ap:case $$t.$iz.aq:case $$t.$iz.ar:return}var c=this.al[a];var d=c?new $$t.fp(1,b,c.a):new $$t.fp(1,b,null);this.al[a]=d},ag:function(a){if(String.isNullOrEmpty(a)){return true}var b=a.split(" ");for(var d=0;d<b.length;d++){var c=b[d];var e=this.aa.ae(c);if(String.isNullOrEmpty(e)){continue}if(this.d()._isNamespaceRecognized(e)==false){return false}}return true},ah:function(a){return this.s().c()==false},y:function(a,b){return 0},ay:function(a){var b=this.aa.k.e(this.d())},az:function(){return new $$2.ar(1,this.l())},a0:function(){return new $$2.ax(0,this.l(),$$8.$a.uTF8())},t:function(){var $self=this;return $$v.$o.g($.ig.$op.$type,$$v.$h.n($$2.$al.$type,this.az(),function(a){return $$v.$h.g(a.read(),function(){$self.aa=new $$t.f0($self,a);return $self.aa.d()},null)}),function(){return $self._am},0)},u:function(a){},s:function(){return this.r},_am:null,_ae:false,af:function(){return this.ak!=0},ai:function(){return true},ab:function(){return this.aa},ad:function(){return this.ac},$type:new $.ig.Type("XmlPartManagerBase",$$t.$jt.$type)},true);$c("CorePropertiesPartManager:jf","XmlPartManagerBase",{init:function(){$$t.$j3.init.call(this)},m:function(){return $$t.$jf.a1},n:function(a){return"/docProps/core.xml"},o:function(a){switch(a){case 0:return $$t.$jf.a4;case 1:return $$t.$jf.a3;default:return $$t.$jf.a4}},g:function(){return false},$type:new $.ig.Type("CorePropertiesPartManager",$$t.$j3.$type)},true);$c("CustomXmlItemPartManager:jg","PartManagerBase",{init:function(){$$t.$jt.init.call(this)},m:function(){return"application/xml"},n:function(a){switch(a){case 0:return"/customXml/item.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$jg.u;case 1:return $$t.$jg.t;default:return $$t.$jg.u}},g:function(){return true},$type:new $.ig.Type("CustomXmlItemPartManager",$$t.$jt.$type)},true);$c("CustomXmlItemPropsPartManager:jh","PartManagerBase",{init:function(){$$t.$jt.init.call(this)},m:function(){return $$t.$jh.s},n:function(a){switch(a){case 0:return"/customXml/itemProps.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$jh.u;case 1:return $$t.$jh.t;default:return $$t.$jh.u}},g:function(){return true},$type:new $.ig.Type("CustomXmlItemPropsPartManager",$$t.$jt.$type)},true);$c("DownRevPartManager:ji","XmlPartManagerBase",{init:function(){$$t.$j3.init.call(this)},m:function(){return $$t.$ji.a1},n:function(a){return"/drs/downrev.xml"},o:function(a){switch(a){case 0:return $$t.$ji.a3;case 1:return $$t.$ji.a3;default:return $$t.$ji.a3}},g:function(){return false},$type:new $.ig.Type("DownRevPartManager",$$t.$j3.$type)},true);$c("DrawingPartManagerHelpers:jj","Object",{init:function(){$.ig.$op.init.call(this)},a:function(a,b){var c=a.s().a($$t.$bu.$type);if(c!=null){c._a=b;return}var d=a.s().a($$t.$du.$type);if(d!=null){d.value(b);return}var e=a.s().a($$t.$dx.$type);if(e!=null){e._a=b;return}var f=a.s().a($$t.$b7.$type);if(f!=null){f._a=b;return}},b:function($t,a,b){var c=$b($$t.$cr.$type,a.s().f());if(c!=null){c._d=b;return}var d=$b($$t.$dr.$type,a.s().f());if(d!=null){d._a=b;return}var e=$b($$t.$d1.$type,a.s().f());if(e!=null){e.fill(b);return}},c:function($t,a,b){var c=$b($$t.$dr.$type,a.s().f());if(c!=null){c._a=b;return}},g:function(a){var b=a.s().a($$t.$dg.$type);if(b==null){return}var c=new $$t.b9;b.avLst(c);a.s().j(c)},d:function(a){var b=a.s().a($$t.$d8.$type);if(b==null){return}var c=new $$t.he;var d=$$t.$iv.gm(a,c);c=d.p1;b.colorTransforms().add(function(){var $ret=new $$t.ez;$ret._a=c;return $ret}())},e:function(a){var b=a.s().a($$t.$d8.$type);if(b==null){return}var c=new $$t.hf;var d=$$t.$iv.gn(a,c);c=d.p1;b.colorTransforms().add(function(){var $ret=new $$t.e1;$ret._a=c;return $ret}())},f:function(a){var b=a.s().a($$t.$d8.$type);if(b==null){return}var c=new $$t.gq;var d=$$t.$iv.go(a,c);c=d.p1;b.colorTransforms().add(function(){var $ret=new $$t.e0;$ret._a=c;return $ret}())},h:function(a){var b=a.s().a($$t.$bt.$type);if(b==null){return}var c;var d;var e;var f=$$t.$iv.gq(a,c,d,e);c=f.p1;d=f.p2;e=f.p3;var g=function(){var $ret=new $$t.bs;$ret._b=c;$ret._c=d;$ret._a=e;return $ret}();b.blip(g);a.s().j(g)},i:function(a){var b=a.s().a($$t.$c9.$type);if(b!=null){var c;var d;var e=a.d()._drawingPropertiesNamespace().b4(a,c,d);c=e.p1;d=e.p2;var f=function(){var $ret=new $$t.bt;$ret.dpi(c);$ret.rotWithShape(d);return $ret}();b.blipFill(f);a.s().j(f);return}else{var g;var h;var i=$$t.$iv.gr(a,g,h);g=i.p1;h=i.p2;var j=function(){var $ret=new $$t.bt;$ret.dpi(g);$ret.rotWithShape(h);return $ret}();$$t.$jj.c($$t.$bt.$type,a,j);a.s().j(j)}},j:function(a){var b=a.s().a($$t.$d8.$type);if(b==null){return}var c=new $$t.hb;var d=$$t.$iv.gs(a,c);c=d.p1;b.colorTransforms().add(function(){var $ret=new $$t.e2;$ret._a=c;return $ret}())},k:function(a){var b=a.s().a($$t.$d8.$type);if(b==null){return}var c=new $$t.hb;var d=$$t.$iv.gt(a,c);c=d.p1;b.colorTransforms().add(function(){var $ret=new $$t.e4;$ret._a=c;return $ret}())},l:function(a){var b=a.s().a($$t.$d8.$type);if(b==null){return}var c=new $$t.hb;var d=$$t.$iv.gu(a,c);c=d.p1;b.colorTransforms().add(function(){var $ret=new $$t.e3;$ret._a=c;return $ret}())},m:function(a){var b=a.s().a($$t.$dz.$type);if(b==null){return}var c;var d;var e;var f;var g;var h;var i;var j;var k;var l;var m;var n;var o;var p;var q;var r;var s;var t;var u;var v=$$t.$iv.gv(a,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u);c=v.p1;d=v.p2;e=v.p3;f=v.p4;g=v.p5;h=v.p6;i=v.p7;j=v.p8;k=v.p9;l=v.p10;m=v.p11;n=v.p12;o=v.p13;p=v.p14;q=v.p15;r=v.p16;s=v.p17;t=v.p18;u=v.p19;b._a=function(){var $ret=new $$t.d0;$ret._n=c;$ret._l=d;$ret._q=e;$ret._p=f;$ret._t=g;$ret._r=h;$ret._j=i;$ret._s=j;$ret._m=k;$ret._f=l;$ret._k=m;$ret._o=n;$ret._a=o;$ret._i=p;$ret._d=q;$ret._e=r;$ret._h=s;$ret._c=t;$ret._g=u;return $ret}();a.s().j(b._a)},n:function(a){var b=a.s().a($$t.$cb.$type);if(b==null){return}var c;var d=$$t.$iu.as(a,c);c=d.p1;b.contentByStrictElementName().add($$6.$w.a(String,$.ig.$op.$type,$$t.$iu.ap,function(){var $ret=new $$t.dj;$ret._a=c;return $ret}()))},o:function(a){var b=a.s().a($$v.$b5.$type);if(b==null){return}var c=new $$v.b7;var d=new $$v.b7;var e=$$t.$iv.gw(a,c,d);c=e.p1;d=e.p2;var f=function(){var $ret=new $$v.b8;$ret._a=c;$ret._b=d;return $ret}();b._g=f;a.s().j(f)},p:function(a){var b=a.s().a($$v.$b5.$type);if(b==null){return}var c=new $$v.cd;var d=new $$v.cd;var e=$$t.$iv.gx(a,c,d);c=e.p1;d=e.p2;var f=function(){var $ret=new $$v.b6;$ret._a=c;$ret._b=d;return $ret}();b._f=f;a.s().j(f)},q:function(a){var b=a.s().a($$t.$b1.$type);if(b==null){return}var c=new $$t.cu;b._b=c;a.s().j(c)},r:function(a){var b=a.s().a($$t.$ce.$type);if(b==null){return}var c=new $$t.cw;b._b=c;a.s().j(c)},s:function(a){var b=a.s().a($$t.$cj.$type);if(b==null){return}var c=new $$t.cx;b._b=c;a.s().j(c)},t:function(a){var b=a.s().a($$t.$db.$type);if(b==null){return}var c;var d=a.d()._drawingPropertiesNamespace().b8(a,c);c=d.p1;var e=function(){var $ret=new $$t.cy;$ret._b=c;return $ret}();b._b=e;a.s().j(e)},u:function(a){var b=a.s().a($$t.$ct.$type);if(b==null){return}var c=new $$t.gk;var d;var e;var f;var g;var h=a.d()._drawingPropertiesNamespace().b9(a,c,d,e,f,g);c=h.p1;d=h.p2;e=h.p3;f=h.p4;g=h.p5;var i=function(){var $ret=new $$t.cv;$ret._c=c;$ret._f=d;$ret._e=e;$ret._d=f;$ret._g=g;return $ret}();b._a=i;a.s().j(i)},v:function(a){var b=a.s().a($$t.$dp.$type);if(b==null){return}var c;var d=a.d()._drawingPropertiesNamespace().ca(a,c);c=d.p1;var e=function(){var $ret=new $$t.cz;$ret._b=c;return $ret}();b._b=e;a.s().j(e)},y:function(a){var b=a.s().a($$t.$ey.$type);var c;var d;var e=a.d()._drawingPropertiesNamespace().cc(a,c,d);c=e.p1;d=e.p2;var f=function(){var $ret=new $$t.bz;$ret.macro(c);$ret.fPublished(d);return $ret}();if(b!=null){b.addShape(a.d(),f)}a.s().j(f)},w:function(a){var b=a.s().a($$t.$d8.$type);if(b==null){return}b.colorTransforms().add(new $$t.e5)},x:function(a){var b=a.s().a($$t.$d1.$type);if(b==null){return}var c;var d;var e;var f;var g=$$t.$iv.g0(a,c,d,e,f);c=g.p1;d=g.p2;e=g.p3;f=g.p4;var h=function(){var $ret=new $$t.d2;$ret._d=c;$ret._a=d;$ret._b=e;$ret._c=f;return $ret}();b.cs(h);a.s().j(h)},z:function(a){var b=a.s().a($$t.$cu.$type);if(b==null){return}var c;var d;var e;var f;var g;var h;var i;var j;var k;var l;var m=a.d()._drawingPropertiesNamespace().cd(a,c,d,e,f,g,h,i,j,k,l);c=m.p1;d=m.p2;e=m.p3;f=m.p4;g=m.p5;h=m.p6;i=m.p7;j=m.p8;k=m.p9;l=m.p10;var n=function(){var $ret=new $$t.b0;$ret._f=c;$ret._j=d;$ret._i=e;$ret._c=f;$ret._g=g;$ret._h=h;$ret._e=i;$ret._a=j;$ret._b=k;$ret._d=l;return $ret}();b._c=n;a.s().j(n)},aa:function(a){var b=a.s().a($$t.$d1.$type);if(b==null){return}var c;var d;var e;var f;var g=$$t.$iv.hj(a,c,d,e,f);c=g.p1;d=g.p2;e=g.p3;f=g.p4;var h=function(){var $ret=new $$t.d2;$ret._d=c;$ret._a=d;$ret._b=e;$ret._c=f;return $ret}();b.ea(h);a.s().j(h)},ab:function(a){var b=a.s().a($$t.$ds.$type);if(b==null){return}var c;var d=$$t.$iv.hk(a,c);c=d.p1;var e=function(){var $ret=new $$t.dx;$ret._b=c;return $ret}();b._b=e;a.s().j(e)},ac:function(a){var b=a.s().a($$t.$cu.$type);if(b==null){return}var c;var d;var e=a.d()._drawingPropertiesNamespace().ce(a,c,d);c=e.p1;d=e.p2;var f=function(){var $ret=new $$t.bw;$ret._a=c;$ret._b=d;return $ret}();b._a=f;a.s().j(f)},ad:function(a){var b=a.s().a($$v.$ca.$type);if(b==null){return}var c=new $$v.b7;var d=new $$v.b7;var e=$$t.$iv.hl(a,c,d);c=e.p1;d=e.p2;var f=function(){var $ret=new $$v.b8;$ret._a=c;$ret._b=d;return $ret}();b._b=f;a.s().j(f)},ae:function(a){a.s().j($$v.$cb.a)},af:function(a){var b=a.s().a($$t.$dw.$type);if(b==null){return}var c=new $$t.hb;var d=new $$t.hb;var e=new $$t.hb;var f=new $$t.hb;var g=$$t.$iv.hp(a,c,d,e,f);c=g.p1;d=g.p2;e=g.p3;f=g.p4;var h=function(){var $ret=new $$t.dk;$ret._b=c;$ret._d=d;$ret._c=e;$ret._a=f;return $ret}();b.fillRect(h);a.s().j(h)},ag:function(a){var b=a.s().a($$t.$ds.$type);if(b==null){return}var c;var d=$$t.$iv.hq(a,c);c=d.p1;var e=function(){var $ret=new $$t.dx;$ret._b=c;return $ret}();b._c=e;a.s().j(e)},ah:function(a){var b=a.s().a($$t.$ds.$type);if(b==null){return}var c;var d=$$t.$iv.ht(a,c);c=d.p1;var e=function(){var $ret=new $$t.b7;$ret._b=c;return $ret}();b._a=e;a.s().j(e)},ai:function(a){var b=a.s().a($$t.$b9.$type);if(b==null){return}var c;var d;var e=$$t.$iv.hv(a,c,d);c=e.p1;d=e.p2;var f=function(){var $ret=new $$t.b8;$ret._b=c;$ret._a=d;return $ret}();b.b().add(f);a.s().j(f)},ak:function(a){var b=a.s().a($$t.$cc.$type);var c=new $$t.bn;if(b!=null){b.graphic(c)}a.s().j(c)},aj:function(a){var b=a.s().a($$t.$bn.$type);if(b==null){return}var c;var d=$$t.$iv.hw(a,c);c=d.p1;var e=function(){var $ret=new $$t.cb;$ret.uri(c);return $ret}();b._a=e;a.s().j(e)},al:function(a){var b=a.s().a($$t.$ey.$type);var c;var d;var e=a.d()._drawingPropertiesNamespace().cf(a,c,d);c=e.p1;d=e.p2;var f=function(){var $ret=new $$t.cc;$ret.macro(c);$ret.fPublished(d);return $ret}();if(b!=null){b.addShape(a.d(),f)}a.s().j(f)},am:function(a){var b=$$5.$e.ag($$t.$bm.$type,a.ab().u,function(c){return c.a.e(a.d())==$$t.$iy.ap});if(b.d==null||$$t.$g7.e(b.d)==false){a.d()._onUnsupportedContentDetected()}},an:function(a){var b=a.s().a($$t.$d8.$type);if(b==null){return}b.colorTransforms().add(new $$t.e6)},ao:function(a){var b=a.s().a($$t.$d8.$type);if(b==null){return}var c=new $$t.hb;var d=$$t.$iv.h0(a,c);c=d.p1;b.colorTransforms().add(function(){var $ret=new $$t.e7;$ret._a=c;return $ret}())},ap:function(a){var b=a.s().a($$t.$d8.$type);if(b==null){return}var c=new $$t.hb;var d=$$t.$iv.h1(a,c);c=d.p1;b.colorTransforms().add(function(){var $ret=new $$t.e9;$ret._a=c;return $ret}())},aq:function(a){var b=a.s().a($$t.$d8.$type);if(b==null){return}var c=new $$t.hb;var d=$$t.$iv.h2(a,c);c=d.p1;b.colorTransforms().add(function(){var $ret=new $$t.e8;$ret._a=c;return $ret}())},ar:function(a){var b=new $$t.cg;$$t.$jj.c($$t.$cg.$type,a,b);a.s().j(b)},as:function(a){var b=a.s().a($$t.$ey.$type);var c=new $$t.ci;if(b!=null){b.addShape(a.d(),c)}a.s().j(c)},at:function(a){var b=a.s().a($$t.$cx.$type);if(b==null){return}var c;var d;var e;var f;var g;var h;var i;var j=a.d()._drawingPropertiesNamespace().ch(a,c,d,e,f,g,h,i);c=j.p1;d=j.p2;e=j.p3;f=j.p4;g=j.p5;h=j.p6;i=j.p7;var k=function(){var $ret=new $$t.ch;$ret._b=c;$ret._g=d;$ret._f=e;$ret._e=f;$ret._a=g;$ret._c=h;$ret._d=i;return $ret}();b._a=k;a.s().j(k)},au:function(a){var b=a.s().a($$t.$ci.$type);if(b==null){return}var c;var d=a.d()._drawingPropertiesNamespace().ci(a,c);c=d.p1;var e=function(){var $ret=new $$t.ck;$ret._b=c;return $ret}();b.grpSpPr(e);a.s().j(e)},av:function(a){var b=a.s().a($$t.$cr.$type);if(b==null){return}var c;var d;var e;var f=$$t.$iv.h4(a,c,d,e);c=f.p1;d=f.p2;e=f.p3;var g=function(){var $ret=new $$t.cn;$ret._b=c;$ret._c=d;$ret._a=e;return $ret}();b._a=g;a.s().j(g)},aw:function(a){var b=a.s().a($$t.$d8.$type);if(b==null){return}var c=new $$t.hd;var d=$$t.$iv.h7(a,c);c=d.p1;b.colorTransforms().add(function(){var $ret=new $$t.fa;$ret._a=c;return $ret}())},ax:function(a){var b=a.s().a($$t.$d8.$type);if(b==null){return}var c=new $$t.hf;var d=$$t.$iv.h8(a,c);c=d.p1;b.colorTransforms().add(function(){var $ret=new $$t.fc;$ret._a=c;return $ret}())},ay:function(a){var b=a.s().a($$t.$d8.$type);if(b==null){return}var c=new $$v.cc;var d=$$t.$iv.h9(a,c);c=d.p1;b.colorTransforms().add(function(){var $ret=new $$t.fb;$ret._a=c;return $ret}())},az:function(a){var b=a.s().a($$t.$d8.$type);if(b==null){return}b.colorTransforms().add(new $$t.fd)},a0:function(a){var b=a.s().a($$t.$d1.$type);if(b==null){return}var c;var d;var e;var f;var g=$$t.$iv.ib(a,c,d,e,f);c=g.p1;d=g.p2;e=g.p3;f=g.p4;var h=function(){var $ret=new $$t.d2;$ret._d=c;$ret._a=d;$ret._b=e;$ret._c=f;return $ret}();b.latin(h);a.s().j(h)},a1:function(a){var b=a.s().a($$t.$dq.$type);if(b==null){return}var c;var d;var e;var f;var g=$$t.$iv.ic(a,c,d,e,f);c=g.p1;d=g.p2;e=g.p3;f=g.p4;var h=function(){var $ret=new $$t.cr;$ret._i=c;$ret._g=d;$ret._h=e;$ret._f=f;return $ret}();b._c=h;a.s().j(h)},a2:function(a){var b=a.s().a($$t.$ds.$type);if(b==null){return}var c;var d=$$t.$iv.id(a,c);c=d.p1;var e=function(){var $ret=new $$t.dx;$ret._b=c;return $ret}();b._d=e;a.s().j(e)},a3:function(a){var b=a.s().a($$t.$d8.$type);if(b==null){return}var c=new $$t.hb;var d=$$t.$iv.ii(a,c);c=d.p1;b.colorTransforms().add(function(){var $ret=new $$t.fe;$ret._a=c;return $ret}())},a4:function(a){var b=a.s().a($$t.$d8.$type);if(b==null){return}var c=new $$t.hb;var d=$$t.$iv.ij(a,c);c=d.p1;b.colorTransforms().add(function(){var $ret=new $$t.fg;$ret._a=c;return $ret}())},a5:function(a){var b=a.s().a($$t.$d8.$type);if(b==null){return}var c=new $$t.hb;var d=$$t.$iv.ik(a,c);c=d.p1;b.colorTransforms().add(function(){var $ret=new $$t.ff;$ret._a=c;return $ret}())},a6:function(a){var b=new $$t.cs;$$t.$jj.b($$t.$cs.$type,a,b);a.s().j(b)},a7:function(a){var b=a.s().a($$t.$bz.$type);if(b==null){return}var c=new $$t.b1;b.nvCxnSpPr(c);a.s().j(c)},a8:function(a){var b=a.s().a($$t.$cc.$type);if(b==null){return}var c=new $$t.ce;b.nvGraphicFramePr(c);a.s().j(c)},a9:function(a){var b=a.s().a($$t.$ci.$type);if(b==null){return}var c=new $$t.cj;b.nvGrpSpPr(c);a.s().j(c)},ba:function(a){var b=a.s().a($$t.$c9.$type);if(b==null){return}var c=new $$t.db;b.nvPicPr(c);a.s().j(c)},bb:function(a){var b=a.s().a($$t.$dm.$type);if(b==null){return}var c=new $$t.dp;b.nvSpPr(c);a.s().j(c)},bc:function(a){var b=a.s().a($$v.$ca.$type);if(b==null){return}var c=new $$v.cd;var d=new $$v.cd;var e=$$t.$iv.iq(a,c,d);c=e.p1;d=e.p2;var f=function(){var $ret=new $$v.b6;$ret._a=c;$ret._b=d;return $ret}();b._a=f;a.s().j(f)},bd:function(a){var b=a.s().a($$t.$dz.$type);if(b==null){return}var c=new $$t.d4;b.d().add(c);a.s().j(c)},be:function(a){var b=a.s().a($$t.$ey.$type);var c;var d;var e=a.d()._drawingPropertiesNamespace().co(a,c,d);c=e.p1;d=e.p2;var f=function(){var $ret=new $$t.c9;$ret.macro(c);$ret.fPublished(d);return $ret}();if(b!=null){b.addShape(a.d(),f)}a.s().j(f)},bf:function(a){var b=a.s().a($$t.$cy.$type);if(b==null){return}var c;var d;var e;var f;var g;var h;var i;var j;var k;var l;var m;var n=$$t.$iv.is(a,c,d,e,f,g,h,i,j,k,l,m);c=n.p1;d=n.p2;e=n.p3;f=n.p4;g=n.p5;h=n.p6;i=n.p7;j=n.p8;k=n.p9;l=n.p10;m=n.p11;var o=function(){var $ret=new $$t.da;$ret._g=c;$ret._k=d;$ret._j=e;$ret._c=f;$ret._h=g;$ret._i=h;$ret._f=i;$ret._a=j;$ret._b=k;$ret._d=l;$ret._e=m;return $ret}();b._a=o;a.s().j(o)},bg:function(a){var b=a.s().a($$t.$d4.$type);if(b==null){return}var c;var d;var e;var f;var g;var h;var i;var j;var k;var l;var m;var n=$$t.$iv.it(a,c,d,e,f,g,h,i,j,k,l,m);c=n.p1;d=n.p2;e=n.p3;f=n.p4;g=n.p5;h=n.p6;i=n.p7;j=n.p8;k=n.p9;l=n.p10;m=n.p11;var o=function(){var $ret=new $$t.d5;$ret._i=c;$ret._j=d;$ret._h=e;$ret._f=f;$ret._a=g;$ret._b=h;$ret._k=i;$ret._c=j;$ret._d=k;$ret._g=l;$ret._e=m;return $ret}();b._a=o;a.s().j(o)},bh:function(a){var b=a.s().a($$t.$dq.$type);if(b==null){return}var c;var d=$$t.$iv.iu(a,c);c=d.p1;var e=function(){var $ret=new $$t.dg;$ret.prst(c);return $ret}();b._e=e;a.s().j(e)},bi:function(a){var b=a.s().a($$t.$d8.$type);if(b==null){return}var c=new $$t.hb;var d=$$t.$iv.iv(a,c);c=d.p1;b.colorTransforms().add(function(){var $ret=new $$t.fh;$ret._a=c;return $ret}())},bj:function(a){var b=a.s().a($$t.$d8.$type);if(b==null){return}var c=new $$t.hb;var d=$$t.$iv.iw(a,c);c=d.p1;b.colorTransforms().add(function(){var $ret=new $$t.fj;$ret._a=c;return $ret}())},bk:function(a){var b=a.s().a($$t.$d8.$type);if(b==null){return}var c=new $$t.hb;var d=$$t.$iv.ix(a,c);c=d.p1;b.colorTransforms().add(function(){var $ret=new $$t.fi;$ret._a=c;return $ret}())},bl:function(a){var b=a.s().a($$t.$d4.$type);if(b==null){return}var c=new $$t.di;b.c().add(c);a.s().j(c)},bm:function(a){var b=a.s().a($$t.$di.$type);if(b==null){return}var c;var d;var e;var f;var g;var h;var i;var j;var k;var l;var m;var n;var o;var p;var q;var r;var s;var t;var u;var v=$$t.$iv.iz(a,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u);c=v.p1;d=v.p2;e=v.p3;f=v.p4;g=v.p5;h=v.p6;i=v.p7;j=v.p8;k=v.p9;l=v.p10;m=v.p11;n=v.p12;o=v.p13;p=v.p14;q=v.p15;r=v.p16;s=v.p17;t=v.p18;u=v.p19;var w=function(){var $ret=new $$t.d1;$ret.kumimoji(c);$ret.lang(d);$ret.altLang(e);$ret.sz($$t.$hz.g(f));$ret.b(g);$ret.i(h);$ret.u(i);$ret.strike(j);$ret.kern(k);$ret.cap(l);$ret.spc(m);$ret.normalizeH(n);$ret.baseline(o);$ret.noProof(p);$ret.dirty(q);$ret.err(r);$ret.smtClean(s);$ret.smtId(t);$ret.bmk(u);return $ret}();b.rPr(w);a.s().j(w)},bn:function(a){var b=a.s().a($$t.$d8.$type);if(b==null){return}var c=new $$t.hb;var d=$$t.$iv.i0(a,c);c=d.p1;b.colorTransforms().add(function(){var $ret=new $$t.fk;$ret._a=c;return $ret}())},bo:function(a){var b=a.s().a($$t.$d8.$type);if(b==null){return}var c=new $$t.hb;var d=$$t.$iv.i1(a,c);c=d.p1;b.colorTransforms().add(function(){var $ret=new $$t.fm;$ret._a=c;return $ret}())},bp:function(a){var b=a.s().a($$t.$d8.$type);if(b==null){return}var c=new $$t.hb;var d=$$t.$iv.i2(a,c);c=d.p1;b.colorTransforms().add(function(){var $ret=new $$t.fl;$ret._a=c;return $ret}())},bq:function(a){var b;var c=$$t.$iv.i3(a,b);b=c.p1;var d=function(){var $ret=new $$t.dl;$ret.value(b);return $ret}();a.s().j(d);$$t.$jj.a(a,d)},br:function(a){var b=a.s().a($$t.$d8.$type);if(b==null){return}var c=new $$t.he;var d=$$t.$iv.i4(a,c);c=d.p1;b.colorTransforms().add(function(){var $ret=new $$t.fn;$ret._a=c;return $ret}())},bs:function(a){var b=a.s().a($$t.$cb.$type);if(b==null){return}var c;var d=$$t.$it.at(a,c);c=d.p1;b.contentByStrictElementName().add($$6.$w.a(String,$.ig.$op.$type,$$t.$it.as,function(){var $ret=new $$t.dt;$ret._a=c;return $ret}()))},bt:function(a){var b=new $$t.du;$$t.$jj.b($$t.$du.$type,a,b);a.s().j(b)},bu:function(a){var b=a.s().a($$t.$ey.$type);var c;var d;var e;var f;var g=a.d()._drawingPropertiesNamespace().cp(a,c,d,e,f);c=g.p1;d=g.p2;e=g.p3;f=g.p4;var h=function(){var $ret=new $$t.dm;$ret.macro(c);$ret.textlink(d);$ret.fLocksText(e);$ret.fPublished(f);return $ret}();if(b!=null){b.addShape(a.d(),h)}a.s().j(h)},bv:function(a){var b=a.s().a($$t.$cz.$type);if(b==null){return}var c;var d;var e;var f;var g;var h;var i;var j;var k;var l;var m;var n=$$t.$iv.i6(a,c,d,e,f,g,h,i,j,k,l,m);c=n.p1;d=n.p2;e=n.p3;f=n.p4;g=n.p5;h=n.p6;i=n.p7;j=n.p8;k=n.p9;l=n.p10;m=n.p11;var o=function(){var $ret=new $$t.dn;$ret._f=c;$ret._j=d;$ret._i=e;$ret._c=f;$ret._g=g;$ret._h=h;$ret._e=i;$ret._a=j;$ret._b=k;$ret._d=l;$ret._k=m;return $ret}();b._a=o;a.s().j(o)},bw:function(a){var b=a.s().a($$t.$ew.$type);if(b==null){return}var c;var d=a.d()._drawingPropertiesNamespace().cq(a,c);c=d.p1;var e=function(){var $ret=new $$t.dq;$ret._b=c;return $ret}();b.spPr(e);a.s().j(e)},bx:function(a){var b=a.s().a($$t.$bt.$type);if(b==null){return}var c=new $$t.hb;var d=new $$t.hb;var e=new $$t.hb;var f=new $$t.hb;var g=$$t.$iv.i7(a,c,d,e,f);c=g.p1;d=g.p2;e=g.p3;f=g.p4;var h=function(){var $ret=new $$t.dk;$ret._b=c;$ret._d=d;$ret._c=e;$ret._a=f;return $ret}();b.srcRect(h);a.s().j(h)},by:function(a){var b=new $$t.gv;var c=$$t.$iv.i8(a,b);b=c.p1;var d=function(){var $ret=new $$t.dv;$ret.value(b);return $ret}();a.s().j(d);$$t.$jj.a(a,d)},bz:function(a){var b=a.s().a($$t.$cu.$type);if(b==null){return}var c;var d;var e=a.d()._drawingPropertiesNamespace().cr(a,c,d);c=e.p1;d=e.p2;var f=function(){var $ret=new $$t.bw;$ret._a=c;$ret._b=d;return $ret}();b._b=f;a.s().j(f)},b0:function(a){var b=a.s().a($$t.$bt.$type);if(b==null){return}var c=new $$t.dw;b.fillMode(c);a.s().j(c)},b1:function(a){
var b=a.s().a($$t.$ex.$type);if(b==null){return}var c=new $$t.ds;b.style(c);a.s().j(c)},b2:function(a){var b;var c=new $$t.gv;var d=$$t.$iv.ja(a,b,c);b=d.p1;c=d.p2;var e=function(){var $ret=new $$t.dy;$ret.value(b);$ret.lastColor(c);return $ret}();a.s().j(e);$$t.$jj.a(a,e)},b3:function(a){var b=a.s().a($$t.$cr.$type);if(b==null){return}var c;var d;var e;var f=$$t.$iv.jb(a,c,d,e);c=f.p1;d=f.p2;e=f.p3;var g=function(){var $ret=new $$t.cn;$ret._b=c;$ret._c=d;$ret._a=e;return $ret}();b._b=g;a.s().j(g)},b4:function(a){var b=a.s().a($$t.$di.$type);if(b==null){return}var c;var d=$$t.$iv.jc(a,c);c=d.p1;b.t(c!=null?c:String.empty())},b5:function(a){var b=a.s().a($$t.$d8.$type);if(b==null){return}var c=new $$t.he;var d=$$t.$iv.jg(a,c);c=d.p1;b.colorTransforms().add(function(){var $ret=new $$t.fo;$ret._a=c;return $ret}())},b6:function(a){var b=a.s().a($$t.$dm.$type);if(b==null){return}var c=new $$t.dz;b.txBody(c);a.s().j(c)},b7:function(a){var b=new $$v.cc;var c;var d;var e=a.s().a($$t.$cc.$type);if(e!=null){var f=a.d()._drawingPropertiesNamespace().cu(a,b,c,d);b=f.p1;c=f.p2;d=f.p3;var g=function(){var $ret=new $$v.ca;$ret._c=b;$ret._d=c;$ret._e=d;return $ret}();e.xfrm(g);a.s().j(g);return}var h=$$t.$iv.jh(a,b,c,d);b=h.p1;c=h.p2;d=h.p3;var i=a.s().a($$t.$dq.$type);if(i!=null){var j=function(){var $ret=new $$v.ca;$ret._c=b;$ret._d=c;$ret._e=d;return $ret}();i._d=j;a.s().j(j);return}var k=a.s().a($$t.$ck.$type);if(k!=null){var l=function(){var $ret=new $$v.b5;$ret._c=b;$ret._d=c;$ret._e=d;return $ret}();k._c=l;a.s().j(l);return}},b8:function(a){a.ax($$t.$iv.ay,$$t.$jj.d);a.ax($$t.$iv.az,$$t.$jj.e);a.ax($$t.$iv.a0,$$t.$jj.f);a.ax($$t.$iv.a4,$$t.$jj.g);a.ax($$t.$iv.a8,$$t.$jj.h);a.ax($$t.$iv.a9,$$t.$jj.i);a.ax($$t.$iv.ba,$$t.$jj.j);a.ax($$t.$iv.bb,$$t.$jj.k);a.ax($$t.$iv.bc,$$t.$jj.l);a.ax($$t.$iv.be,$$t.$jj.m);a.ax($$t.$iv.bh,$$t.$jj.o);a.ax($$t.$iv.bi,$$t.$jj.p);a.ax($$t.$iv.bl,$$t.$jj.w);a.ax($$t.$iv.bn,$$t.$jj.x);a.ax($$t.$iv.b0,$$t.$jj.aa);a.ax($$t.$iv.b2,$$t.$jj.ab);a.ax($$t.$iv.b5,$$t.$jj.ad);a.ax($$t.$iv.b6,$$t.$jj.ae);a.ax($$t.$iv.b9,$$t.$jj.af);a.ax($$t.$iv.ca,$$t.$jj.ag);a.ax($$t.$iv.ci,$$t.$jj.ah);a.ax($$t.$iv.cm,$$t.$jj.ai);a.ax($$t.$iv.cn,$$t.$jj.ak);a.ax($$t.$iv.co,$$t.$jj.aj);a.ax($$t.$iv.cp,$$t.$jj.am);a.ax($$t.$iv.cq,$$t.$jj.an);a.ax($$t.$iv.cr,$$t.$jj.ao);a.ax($$t.$iv.cs,$$t.$jj.ap);a.ax($$t.$iv.ct,$$t.$jj.aq);a.ax($$t.$iv.cu,$$t.$jj.ar);a.ax($$t.$iv.cw,$$t.$jj.av);a.ax($$t.$iv.c3,$$t.$jj.aw);a.ax($$t.$iv.c4,$$t.$jj.ax);a.ax($$t.$iv.c5,$$t.$jj.ay);a.ax($$t.$iv.da,$$t.$jj.az);a.ax($$t.$iv.dj,$$t.$jj.a0);a.ax($$t.$iv.dn,$$t.$jj.a1);a.ax($$t.$iv.dp,$$t.$jj.a2);a.ax($$t.$iv.dt,$$t.$jj.a3);a.ax($$t.$iv.du,$$t.$jj.a4);a.ax($$t.$iv.dv,$$t.$jj.a5);a.ax($$t.$iv.eb,$$t.$jj.a6);a.ax($$t.$iv.em,$$t.$jj.bc);a.ax($$t.$iv.en,$$t.$jj.bd);a.ax($$t.$iv.ep,$$t.$jj.bf);a.ax($$t.$iv.er,$$t.$jj.bg);a.ax($$t.$iv.et,$$t.$jj.bh);a.ax($$t.$iv.eu,$$t.$jj.bl);a.ax($$t.$iv.ew,$$t.$jj.bi);a.ax($$t.$iv.ex,$$t.$jj.bj);a.ax($$t.$iv.ey,$$t.$jj.bk);a.ax($$t.$iv.e2,$$t.$jj.bm);a.ax($$t.$iv.e5,$$t.$jj.bn);a.ax($$t.$iv.e6,$$t.$jj.bo);a.ax($$t.$iv.e7,$$t.$jj.bp);a.ax($$t.$iv.e8,$$t.$jj.bq);a.ax($$t.$iv.fa,$$t.$jj.br);a.ax($$t.$iv.fd,$$t.$jj.bt);a.ax($$t.$iv.fh,$$t.$jj.bv);a.ax($$t.$iv.fi,$$t.$jj.bx);a.ax($$t.$iv.fj,$$t.$jj.by);a.ax($$t.$iv.fk,$$t.$jj.b0);a.ax($$t.$iv.fo,$$t.$jj.b2);a.ax($$t.$iv.fq,$$t.$jj.b4);a.ax($$t.$iv.fs,$$t.$jj.b3);a.ax($$t.$iv.fy,$$t.$jj.b5);a.ax($$t.$iv.ge,$$t.$jj.b7);a.ax($$t.$iu.ap,$$t.$jj.n);a.ax($$t.$it.as,$$t.$jj.bs);var b=a.d()._drawingPropertiesNamespace();if(b!=null){a.ax(b.an,$$t.$jj.i);a.ax(b.ap,$$t.$jj.q);a.ax(b.aq,$$t.$jj.r);a.ax(b.ar,$$t.$jj.s);a.ax(b.as,$$t.$jj.t);a.ax(b.at,$$t.$jj.u);a.ax(b.au,$$t.$jj.v);a.ax(b.av,$$t.$jj.y);a.ax(b.aw,$$t.$jj.z);a.ax(b.ay,$$t.$jj.ac);a.ax(b.a3,$$t.$jj.al);a.ax(b.a4,$$t.$jj.as);a.ax(b.a5,$$t.$jj.at);a.ax(b.a6,$$t.$jj.au);a.ax(b.bn,$$t.$jj.a7);a.ax(b.bo,$$t.$jj.a8);a.ax(b.bp,$$t.$jj.a9);a.ax(b.bq,$$t.$jj.ba);a.ax(b.br,$$t.$jj.bb);a.ax(b.bs,$$t.$jj.be);a.ax(b.bw,$$t.$jj.bu);a.ax(b.bx,$$t.$jj.bw);a.ax(b.by,$$t.$jj.bz);a.ax(b.bz,$$t.$jj.b1);a.ax(b.b1,$$t.$jj.b6);a.ax(b.b3,$$t.$jj.b7)}},b9:function(a,b){if(b==null){return}$$t.$iv.jo(a,b._a);a.ad().k()},ca:function(a,b){if(b==null){return}$$t.$iv.jp(a,b._a);a.ad().k()},cb:function(a,b){if(b==null){return}$$t.$iv.jq(a,b._a);a.ad().k()},cc:function(a,b){if(b==null){return}a.ad().g($$5.$e.o($$6.$u.$type.specialize(Array,$$t.$er.$type),$$t.$bl.$type,b.choicesByRequiredNamespaces(),function(c){return new $$t.bl(1,c._a,function(){c._b._accept$2$i($$t.$j3.$type,$$0.$aq.$type,$$t.$jk.instance,a)})}),b.fallbackContent()==null?null:function(){b.fallbackContent()._accept$2$i($$t.$j3.$type,$$0.$aq.$type,$$t.$jk.instance,a)})},cd:function(a,b){if(b==null){return}$$t.$iv.jr(a);b.b().forEach(function(c){$$t.$jj.c6(a,c)});a.ad().k()},ce:function(a,b){if(b==null){return}$$t.$iv.js(a,b._b,b._c,b._a);a.ad().k()},cf:function(a,b,c){if(b==null){return}if(c){a.d()._drawingPropertiesNamespace().cv(a,$j(b.dpi(),0)?$m($$0.$be.$type,null):b.dpi(),$j(b.rotWithShape(),false)?$m($$0.$aq.$type,null):b.rotWithShape())}else{$$t.$iv.jt(a,$j(b.dpi(),0)?$m($$0.$be.$type,null):b.dpi(),$j(b.rotWithShape(),false)?$m($$0.$aq.$type,null):b.rotWithShape())}$$t.$jj.ce(a,b.blip());$$t.$jj.em(a,b.srcRect());if(b.fillMode()!=null){b.fillMode()._accept$2$i($$t.$j3.$type,$$0.$aq.$type,$$t.$jk.instance,a)}a.ad().k()},cg:function(a,b){if(b==null){return}$$t.$iv.ju(a,b._a);a.ad().k()},ch:function(a,b){if(b==null){return}$$t.$iv.jv(a,b._a);a.ad().k()},ci:function(a,b){if(b==null){return}$$t.$iv.jw(a,b._a);a.ad().k()},cj:function(a,b){if(b==null){return}$$t.$iv.jx(a,b._n,b._l,b._q,b._p,b._t,b._r,b._j,b._s,b._m,b._f,b._k,b._o,b._a,b._i,b._d,b._e,b._h,b._c,b._g);a.ad().k()},ck:function(a,b){if(b==null){return}$$t.$iv.jy(a,b._a,b._b);a.ad().k()},cl:function(a,b){if(b==null){return}$$t.$iv.jz(a,b._a,b._b);a.ad().k()},cm:function(a,b){if(b==null){return}a.d()._drawingPropertiesNamespace().cw(a);$$t.$jj.cy(a,b._c);$$t.$jj.eo(a,b._b);$$t.$jj.c1(a,b._a);a.ad().k()},cn:function(a,b){if(b==null){return}a.d()._drawingPropertiesNamespace().cx(a);$$t.$jj.dc(a,b._a);a.ad().k()},co:function(a,b){if(b==null){return}a.d()._drawingPropertiesNamespace().cy(a);$$t.$jj.di(a,b._a);a.ad().k()},cp:function(a,b){if(b==null){return}a.d()._drawingPropertiesNamespace().cz(a,b._b);$$t.$jj.d5(a,b._a);a.ad().k()},cq:function(a,b){if(b==null){return}a.d()._drawingPropertiesNamespace().c0(a,b._c,b._f,b._e,b._d,b._g);a.ad().k()},cr:function(a,b){if(b==null){return}a.d()._drawingPropertiesNamespace().c1(a,b._b);$$t.$jj.ek(a,b._a);a.ad().k()},cs:function(a,b){if(b==null){return}$$t.$iv.j1(a);a.ad().k()},ct:function(a,b){if(b==null){return}$$t.$iv.j2(a,b._d,b._a,b._b,b._c);a.ad().k()},cu:function(a,b,c){if(b==null){return}c(a,b._b,b._c,b._a);a.ad().k()},cv:function(a,b,c){if(b==null){return}c(a,b._b,b._d,b._c,b._a);a.ad().k()},cw:function(a,b){if(b==null){return}a.ad().n(b.xmlCache())},cx:function(a,b){if(b==null){return}a.d()._drawingPropertiesNamespace().c3(a,null,false);$$t.$jj.dx(a,b.nvCxnSpPr());$$t.$jj.el(a,b.spPr());$$t.$jj.eq(a,b.style());a.ad().k()},cy:function(a,b){if(b==null){return}a.d()._drawingPropertiesNamespace().c4(a,b._f,b._j,b._i,b._c,b._g,b._h,b._e,b._a,b._b,b._d);a.ad().k()},cz:function(a,b){if(b==null){return}$$t.$iv.kl(a,b._d,b._a,b._b,b._c);a.ad().k()},c0:function(a,b){if(b==null){return}$$t.$iv.km(a,b._b);if(b._a!=null){b._a._accept$2$i($$t.$j3.$type,$$0.$aq.$type,$$t.$jk.instance,a)}a.ad().k()},c1:function(a,b){if(b==null){return}a.d()._drawingPropertiesNamespace().c5(a,b._a,b._b);a.ad().k()},c2:function(a,b){if(b==null){return}$$t.$iv.kn(a,b._a,b._b);a.ad().k()},c3:function(a,b){$$t.$jj.cv(a,b,$$t.$iv.kr)},c4:function(a,b){if(b==null){return}$$t.$iv.ks(a,b._b);if(b._a!=null){b._a._accept$2$i($$t.$j3.$type,$$0.$aq.$type,$$t.$jk.instance,a)}a.ad().k()},c5:function(a,b){if(b==null){return}$$t.$iv.kv(a,b._b);if(b._a!=null){b._a._accept$2$i($$t.$j3.$type,$$0.$aq.$type,$$t.$jk.instance,a)}a.ad().k()},c6:function(a,b){if(b==null){return}$$t.$iv.kx(a,b._b,b._a);a.ad().k()},c8:function(a,b){var c=$b($$t.$er.$type,b._b);if(c!=null){c._accept$2$i($$t.$j3.$type,$$0.$aq.$type,$$t.$jk.instance,a);return}var d=$b($$t.$dj.$type,b._b);if(d!=null){switch(b._a){case $$t.$iu.ap:$$t.$iu.at(a,d._a);a.ad().k();break;default:break}return}var e=$b($$t.$dt.$type,b._b);if(e!=null){switch(b._a){case $$t.$it.as:$$t.$it.au(a,e._a);a.ad().k();break;default:break}return}},c9:function(a,b){if(b==null){return}$$t.$iv.ky(a,b.uri());b.contentByStrictElementName().forEach(function(c){$$t.$jj.c8(a,c)});a.ad().k()},da:function(a,b){if(b==null){return}$$t.$iv.kz(a);$$t.$jj.c9(a,b._a);a.ad().k()},db:function(a,b){if(b==null){return}a.d()._drawingPropertiesNamespace().c6(a,b.macro(),b.fPublished());$$t.$jj.dy(a,b.nvGraphicFramePr());$$t.$jj.ew(a,b.xfrm(),a.d()._drawingPropertiesNamespace().dm.runOn(a.d()._drawingPropertiesNamespace()));$$t.$jj.da(a,b.graphic());a.ad().k()},dc:function(a,b){if(b==null){return}$$t.$iv.k0(a,b._c,b._b,b._f,b._a,b._d,b._e);a.ad().k()},dd:function(a,b){if(b==null){return}$$t.$iv.k1(a);a.ad().k()},de:function(a,b){if(b==null){return}$$t.$iv.k2(a,b._a);a.ad().k()},df:function(a,b){if(b==null){return}$$t.$iv.k3(a,b._a);a.ad().k()},dg:function(a,b){if(b==null){return}$$t.$iv.k4(a,b._a);a.ad().k()},dh:function(a,b){if(b==null){return}a.d()._drawingPropertiesNamespace().c7(a);$$t.$jj.dz(a,b.nvGrpSpPr());$$t.$jj.dj(a,b.grpSpPr());b.shapes().forEach(function(c){c._accept$2$i($$t.$j3.$type,$$0.$aq.$type,$$t.$jk.instance,a)});a.ad().k()},di:function(a,b){if(b==null){return}a.d()._drawingPropertiesNamespace().c8(a,b._b,b._g,b._f,b._e,b._a,b._c,b._d);a.ad().k()},dj:function(a,b){if(b==null){return}a.d()._drawingPropertiesNamespace().c9(a,b._b);$$t.$jj.ev(a,b._c);if(b._a!=null){b._a._accept$2$i($$t.$j3.$type,$$0.$aq.$type,$$t.$jk.instance,a)}a.ad().k()},dk:function(a,b){$$t.$jj.cu(a,b,$$t.$iv.k6)},dl:function(a,b){if(b==null){return}$$t.$iv.k9(a,b._a);a.ad().k()},dm:function(a,b){if(b==null){return}$$t.$iv.la(a,b._a);a.ad().k()},dn:function(a,b){if(b==null){return}$$t.$iv.lb(a,b._a);a.ad().k()},dp:function(a,b){if(b==null){return}$$t.$iv.lc(a);a.ad().k()},dq:function(a,b){if(b==null){return}$$t.$iv.ld(a,b._d,b._a,b._b,b._c);a.ad().k()},dr:function(a,b){if(b==null){return}$$t.$iv.le(a,b._i,b._g,b._h,b._f);if(b._d!=null){b._d._accept$2$i($$t.$j3.$type,$$0.$aq.$type,$$t.$jk.instance,a)}if(b._c!=null){b._c._accept$2$i($$t.$j3.$type,$$0.$aq.$type,$$t.$jk.instance,a)}if(b._e!=null){b._e._accept$2$i($$t.$j3.$type,$$0.$aq.$type,$$t.$jk.instance,a)}$$t.$jj.dk(a,b._a);$$t.$jj.es(a,b._b);a.ad().k()},ds:function(a,b){if(b==null){return}$$t.$iv.lf(a,b._b);if(b._a!=null){b._a._accept$2$i($$t.$j3.$type,$$0.$aq.$type,$$t.$jk.instance,a)}a.ad().k()},dt:function(a,b){if(b==null){return}$$t.$iv.lj(a,b._a);a.ad().k()},du:function(a,b){if(b==null){return}$$t.$iv.lk(a,b._a);a.ad().k()},dv:function(a,b){if(b==null){return}$$t.$iv.ll(a,b._a);a.ad().k()},dw:function(a,b){if(b==null){return}$$t.$iv.lo(a);a.ad().k()},dx:function(a,b){if(b==null){return}a.d()._drawingPropertiesNamespace().db(a);$$t.$jj.cq(a,b._a);$$t.$jj.cm(a,b._b);a.ad().k()},dy:function(a,b){if(b==null){return}a.d()._drawingPropertiesNamespace().dc(a);$$t.$jj.cq(a,b._a);$$t.$jj.cn(a,b._b);a.ad().k()},dz:function(a,b){if(b==null){return}a.d()._drawingPropertiesNamespace().dd(a);$$t.$jj.cq(a,b._a);$$t.$jj.co(a,b._b);a.ad().k()},d0:function(a,b){if(b==null){return}a.d()._drawingPropertiesNamespace().de(a);$$t.$jj.cq(a,b._a);$$t.$jj.cp(a,b._b);a.ad().k()},d1:function(a,b){if(b==null){return}a.d()._drawingPropertiesNamespace().df(a);$$t.$jj.cq(a,b._a);$$t.$jj.cr(a,b._b);a.ad().k()},d2:function(a,b){if(b==null){return}$$t.$iv.lq(a,b._a,b._b);a.ad().k()},d3:function(a,b){if(b==null){return}$$t.$iv.lr(a);$$t.$jj.d6(a,b._a);b.c().forEach(function(c){c._accept$2$i($$t.$j3.$type,$$0.$aq.$type,$$t.$jk.instance,a)});a.ad().k()},d4:function(a,b){if(b==null){return}a.d()._drawingPropertiesNamespace().dg(a,"",false);$$t.$jj.d0(a,b.nvPicPr());$$t.$jj.cf(a,b.blipFill(),true);$$t.$jj.el(a,b.spPr());a.ad().k()},d5:function(a,b){if(b==null){return}$$t.$iv.ls(a,b._g,b._k,b._j,b._c,b._h,b._i,b._f,b._a,b._b,b._d,b._e);a.ad().k()},d6:function(a,b){if(b==null){return}$$t.$iv.lt(a,b._i,b._j,b._h,b._f,b._a,b._b,b._k,b._c,b._d,b._g,b._e);a.ad().k()},d7:function(a,b){if(b==null){return}$$t.$iv.lu(a,b.prst());$$t.$jj.cd(a,b.avLst());a.ad().k()},d8:function(a,b){if(b==null){return}$$t.$iv.lv(a,b._a);a.ad().k()},d9:function(a,b){if(b==null){return}$$t.$iv.lw(a,b._a);a.ad().k()},ea:function(a,b){if(b==null){return}$$t.$iv.lx(a,b._a);a.ad().k()},eb:function(a,b){if(b==null){return}$$t.$iv.ly(a);$$t.$jj.ec(a,b.rPr());$$t.$iv.mc(a,b.t());a.ad().k();a.ad().k()},ec:function(a,b){if(b==null){return}$$t.$iv.lz(a,b.kumimoji(),b.lang(),b.altLang(),$$t.$hz.h(b.sz()),b.b(),b.i(),b.u(),b.strike(),b.kern(),b.cap(),b.spc(),b.normalizeH(),b.baseline(),b.noProof(),b.dirty(),b.err(),b.smtClean(),b.smtId(),b.bmk());$$t.$jj.dr(a,b.ln());if(b.fill()!=null){b.fill()._accept$2$i($$t.$j3.$type,$$0.$aq.$type,$$t.$jk.instance,a)}$$t.$jj.dq(a,b.latin());$$t.$jj.cz(a,b.ea());$$t.$jj.ct(a,b.cs());a.ad().k()},ed:function(a,b){if(b==null){return}$$t.$iv.l0(a,b._a);a.ad().k()},ee:function(a,b){if(b==null){return}$$t.$iv.l1(a,b._a);a.ad().k()},ef:function(a,b){if(b==null){return}$$t.$iv.l2(a,b._a);a.ad().k()},eg:function(a,b){if(b==null){return}$$t.$iv.l3(a,b.value());b.colorTransforms().forEach(function(c){c._accept$2$i($$t.$j3.$type,$$0.$aq.$type,$$t.$jk.instance,a)});a.ad().k()},c7:function(a,b){if(b==null){return}b._accept$2$i($$t.$j3.$type,$$0.$aq.$type,$$t.$jk.instance,a)},ei:function(a,b){if(b==null){return}$$t.$iv.l5(a);if(b.value()!=null){b.value()._accept$2$i($$t.$j3.$type,$$0.$aq.$type,$$t.$jk.instance,a)}a.ad().k()},ej:function(a,b){if(b==null){return}a.d()._drawingPropertiesNamespace().dh(a,null,null,true,false);$$t.$jj.d1(a,b.nvSpPr());$$t.$jj.el(a,b.spPr());$$t.$jj.eq(a,b.style());$$t.$jj.eu(a,b.txBody());a.ad().k()},ek:function(a,b){if(b==null){return}$$t.$iv.l6(a,b._f,b._j,b._i,b._c,b._g,b._h,b._e,b._a,b._b,b._d,b._k);a.ad().k()},el:function(a,b){if(b==null){return}a.d()._drawingPropertiesNamespace().di(a,b._b);$$t.$jj.ew(a,b._d,$$t.$iv.mh);if(b._e!=null){b._e._accept$2$i($$t.$j3.$type,$$0.$aq.$type,$$t.$jk.instance,a)}if(b._a!=null){b._a._accept$2$i($$t.$j3.$type,$$0.$aq.$type,$$t.$jk.instance,a)}$$t.$jj.dr(a,b._c);a.ad().k()},em:function(a,b){$$t.$jj.cv(a,b,$$t.$iv.l7)},eh:function(a,b){if(b==null){return}$$t.$iv.l4(a,b._a);a.ad().k()},en:function(a,b){if(b==null){return}$$t.$iv.l8(a,b.value());b.colorTransforms().forEach(function(c){c._accept$2$i($$t.$j3.$type,$$0.$aq.$type,$$t.$jk.instance,a)});a.ad().k()},eo:function(a,b){if(b==null){return}a.d()._drawingPropertiesNamespace().dj(a,b._a,b._b);a.ad().k()},ep:function(a,b){if(b==null){return}$$t.$iv.l9(a);$$t.$jj.c3(a,b.fillRect());a.ad().k()},eq:function(a,b){if(b==null){return}a.d()._drawingPropertiesNamespace().dk(a);$$t.$jj.ds(a,b._d);$$t.$jj.c4(a,b._c);$$t.$jj.c0(a,b._b);$$t.$jj.c5(a,b._a);a.ad().k()},er:function(a,b){if(b==null){return}$$t.$iv.ma(a,b.value(),b.lastColor());b.colorTransforms().forEach(function(c){c._accept$2$i($$t.$j3.$type,$$0.$aq.$type,$$t.$jk.instance,a)});a.ad().k()},es:function(a,b){$$t.$jj.cu(a,b,$$t.$iv.mb)},et:function(a,b){if(b==null){return}$$t.$iv.mg(a,b._a);a.ad().k()},eu:function(a,b){if(b==null){return}a.d()._drawingPropertiesNamespace().dl(a);$$t.$jj.cj(a,b._a);b.d().forEach(function(c){$$t.$jj.d3(a,c)});a.ad().k()},ew:function(a,b,c){if(b==null){return}c(a,b._c,b._d,b._e);$$t.$jj.d2(a,b._a);$$t.$jj.c2(a,b._b);a.ad().k()},ev:function(a,b){if(b==null){return}$$t.$iv.mh(a,b._c,b._d,b._e);$$t.$jj.d2(a,b._a);$$t.$jj.c2(a,b._b);$$t.$jj.cl(a,b._f);$$t.$jj.ck(a,b._g);a.ad().k()},$type:new $.ig.Type("DrawingPartManagerHelpers",$.ig.$ot)},true);$c("DrawingPartManagerHelpers_DrawingSerializationHelper:jk","Object",{init:function(){$.ig.$op.init.call(this)},visitCT_SchemeColor:function(value,partManager){return this._visitCT_SchemeColor$i.apply(this,arguments)},_visitCT_SchemeColor$i:function(a,b){$$t.$jj.eg(b,a);return true},visitCT_SRgbColor:function(value,partManager){return this._visitCT_SRgbColor$i.apply(this,arguments)},_visitCT_SRgbColor$i:function(a,b){$$t.$jj.en(b,a);return true},visitCT_SysColor:function(value,partManager){return this._visitCT_SysColor$i.apply(this,arguments)},_visitCT_SysColor$i:function(a,b){$$t.$jj.er(b,a);return true},visitColorTransform_Alpha:function(value,partManager){return this._visitColorTransform_Alpha$i.apply(this,arguments)},_visitColorTransform_Alpha$i:function(a,b){$$t.$jj.b9(b,a);return false},visitColorTransform_AlphaMod:function(value,partManager){return this._visitColorTransform_AlphaMod$i.apply(this,arguments)},_visitColorTransform_AlphaMod$i:function(a,b){$$t.$jj.ca(b,a);return false},visitColorTransform_AlphaOff:function(value,partManager){return this._visitColorTransform_AlphaOff$i.apply(this,arguments)},_visitColorTransform_AlphaOff$i:function(a,b){$$t.$jj.cb(b,a);return false},visitColorTransform_Blue:function(value,partManager){return this._visitColorTransform_Blue$i.apply(this,arguments)},_visitColorTransform_Blue$i:function(a,b){$$t.$jj.cg(b,a);return false},visitColorTransform_BlueMod:function(value,partManager){return this._visitColorTransform_BlueMod$i.apply(this,arguments)},_visitColorTransform_BlueMod$i:function(a,b){$$t.$jj.ch(b,a);return false},visitColorTransform_BlueOff:function(value,partManager){return this._visitColorTransform_BlueOff$i.apply(this,arguments)},_visitColorTransform_BlueOff$i:function(a,b){$$t.$jj.ci(b,a);return false},visitColorTransform_Comp:function(value,partManager){return this._visitColorTransform_Comp$i.apply(this,arguments)},_visitColorTransform_Comp$i:function(a,b){$$t.$jj.cs(b,a);return false},visitColorTransform_Gray:function(value,partManager){return this._visitColorTransform_Gray$i.apply(this,arguments)},_visitColorTransform_Gray$i:function(a,b){$$t.$jj.dd(b,a);return false},visitColorTransform_Green:function(value,partManager){return this._visitColorTransform_Green$i.apply(this,arguments)},_visitColorTransform_Green$i:function(a,b){$$t.$jj.de(b,a);return false},visitColorTransform_GreenMod:function(value,partManager){return this._visitColorTransform_GreenMod$i.apply(this,arguments)},_visitColorTransform_GreenMod$i:function(a,b){$$t.$jj.df(b,a);return false},visitColorTransform_GreenOff:function(value,partManager){return this._visitColorTransform_GreenOff$i.apply(this,arguments)},_visitColorTransform_GreenOff$i:function(a,b){$$t.$jj.dg(b,a);return false},visitColorTransform_Hue:function(value,partManager){return this._visitColorTransform_Hue$i.apply(this,arguments)},_visitColorTransform_Hue$i:function(a,b){$$t.$jj.dl(b,a);return false},visitColorTransform_HueMod:function(value,partManager){return this._visitColorTransform_HueMod$i.apply(this,arguments)},_visitColorTransform_HueMod$i:function(a,b){$$t.$jj.dm(b,a);return false},visitColorTransform_HueOff:function(value,partManager){return this._visitColorTransform_HueOff$i.apply(this,arguments)},_visitColorTransform_HueOff$i:function(a,b){$$t.$jj.dn(b,a);return false},visitColorTransform_Inv:function(value,partManager){return this._visitColorTransform_Inv$i.apply(this,arguments)},_visitColorTransform_Inv$i:function(a,b){$$t.$jj.dp(b,a);return false},visitColorTransform_Lum:function(value,partManager){return this._visitColorTransform_Lum$i.apply(this,arguments)},_visitColorTransform_Lum$i:function(a,b){$$t.$jj.dt(b,a);return false},visitColorTransform_LumMod:function(value,partManager){return this._visitColorTransform_LumMod$i.apply(this,arguments)},_visitColorTransform_LumMod$i:function(a,b){$$t.$jj.du(b,a);return false},visitColorTransform_LumOff:function(value,partManager){return this._visitColorTransform_LumOff$i.apply(this,arguments)},_visitColorTransform_LumOff$i:function(a,b){$$t.$jj.dv(b,a);return false},visitColorTransform_Red:function(value,partManager){return this._visitColorTransform_Red$i.apply(this,arguments)},_visitColorTransform_Red$i:function(a,b){$$t.$jj.d8(b,a);return false},visitColorTransform_RedMod:function(value,partManager){return this._visitColorTransform_RedMod$i.apply(this,arguments)},_visitColorTransform_RedMod$i:function(a,b){$$t.$jj.d9(b,a);return false},visitColorTransform_RedOff:function(value,partManager){return this._visitColorTransform_RedOff$i.apply(this,arguments)},_visitColorTransform_RedOff$i:function(a,b){$$t.$jj.ea(b,a);return false},visitColorTransform_Sat:function(value,partManager){return this._visitColorTransform_Sat$i.apply(this,arguments)},_visitColorTransform_Sat$i:function(a,b){$$t.$jj.ed(b,a);return false},visitColorTransform_SatMod:function(value,partManager){return this._visitColorTransform_SatMod$i.apply(this,arguments)},_visitColorTransform_SatMod$i:function(a,b){$$t.$jj.ee(b,a);return false},visitColorTransform_SatOff:function(value,partManager){return this._visitColorTransform_SatOff$i.apply(this,arguments)},_visitColorTransform_SatOff$i:function(a,b){$$t.$jj.ef(b,a);return false},visitColorTransform_Shade:function(value,partManager){return this._visitColorTransform_Shade$i.apply(this,arguments)},_visitColorTransform_Shade$i:function(a,b){$$t.$jj.eh(b,a);return false},visitColorTransform_Tint:function(value,partManager){return this._visitColorTransform_Tint$i.apply(this,arguments)},_visitColorTransform_Tint$i:function(a,b){$$t.$jj.et(b,a);return false},visitCT_StretchInfoProperties:function(value,partManager){return this._visitCT_StretchInfoProperties$i.apply(this,arguments)},_visitCT_StretchInfoProperties$i:function(a,b){$$t.$jj.ep(b,a);return true},visitCT_TileInfoProperties:function(value,partManager){return this._visitCT_TileInfoProperties$i.apply(this,arguments)},_visitCT_TileInfoProperties$i:function(a,b){return true},visitCT_BlipFillProperties:function(value,partManager){return this._visitCT_BlipFillProperties$i.apply(this,arguments)},_visitCT_BlipFillProperties$i:function(a,b){$$t.$jj.cf(b,a,false);return true},visitCT_GroupFillProperties:function(value,partManager){return this._visitCT_GroupFillProperties$i.apply(this,arguments)},_visitCT_GroupFillProperties$i:function(a,b){return true},visitCT_NoFillProperties:function(value,partManager){return this._visitCT_NoFillProperties$i.apply(this,arguments)},_visitCT_NoFillProperties$i:function(a,b){$$t.$jj.dw(b,a);return true},visitCT_SolidFillProperties:function(value,partManager){return this._visitCT_SolidFillProperties$i.apply(this,arguments)},_visitCT_SolidFillProperties$i:function(a,b){$$t.$jj.ei(b,a);return true},visitCT_PresetGeometry2D:function(value,partManager){return this._visitCT_PresetGeometry2D$i.apply(this,arguments)},_visitCT_PresetGeometry2D$i:function(a,b){$$t.$jj.d7(b,a);return true},visitCT_CustomGeometry2D:function(value,partManager){return this._visitCT_CustomGeometry2D$i.apply(this,arguments)},_visitCT_CustomGeometry2D$i:function(a,b){$$t.$jj.cw(b,a);return true},visitCT_DashStopList:function(value,partManager){return this._visitCT_DashStopList$i.apply(this,arguments)},_visitCT_DashStopList$i:function(a,b){return true},visitCT_PresetLineDashProperties:function(value,partManager){return this._visitCT_PresetLineDashProperties$i.apply(this,arguments)},_visitCT_PresetLineDashProperties$i:function(a,b){return true},visitCT_NoFillProperties1:function(value,partManager){return this._visitCT_NoFillProperties1$i.apply(this,arguments)},_visitCT_NoFillProperties1$i:function(a,b){$$t.$jj.dw(b,a);return true},visitCT_SolidFillProperties1:function(value,partManager){return this._visitCT_SolidFillProperties1$i.apply(this,arguments)},_visitCT_SolidFillProperties1$i:function(a,b){$$t.$jj.ei(b,a);return true},visitCT_LineJoinBevel:function(value,partManager){return this._visitCT_LineJoinBevel$i.apply(this,arguments)},_visitCT_LineJoinBevel$i:function(a,b){return true},visitCT_LineJoinMiterProperties:function(value,partManager){return this._visitCT_LineJoinMiterProperties$i.apply(this,arguments)},_visitCT_LineJoinMiterProperties$i:function(a,b){return true},visitCT_LineJoinRound:function(value,partManager){return this._visitCT_LineJoinRound$i.apply(this,arguments)},_visitCT_LineJoinRound$i:function(a,b){return true},visitCT_RegularTextRun:function(value,partManager){return this._visitCT_RegularTextRun$i.apply(this,arguments)},_visitCT_RegularTextRun$i:function(a,b){$$t.$jj.eb(b,a);return true},visitAlternateGraphicalObjectContent:function(value,partManager){return this._visitAlternateGraphicalObjectContent$i.apply(this,arguments)},_visitAlternateGraphicalObjectContent$i:function(a,b){$$t.$jj.cc(b,a);return true},visitCT_Connector:function(value,partManager){return this._visitCT_Connector$i.apply(this,arguments)},_visitCT_Connector$i:function(a,b){$$t.$jj.cx(b,a);return true},visitCT_GraphicalObjectFrame:function(value,partManager){return this._visitCT_GraphicalObjectFrame$i.apply(this,arguments)},_visitCT_GraphicalObjectFrame$i:function(a,b){$$t.$jj.db(b,a);return true},visitCT_GroupShape:function(value,partManager){return this._visitCT_GroupShape$i.apply(this,arguments)},_visitCT_GroupShape$i:function(a,b){$$t.$jj.dh(b,a);return true},visitCT_Picture:function(value,partManager){return this._visitCT_Picture$i.apply(this,arguments)},_visitCT_Picture$i:function(a,b){$$t.$jj.d4(b,a);return true},visitCT_Shape:function(value,partManager){return this._visitCT_Shape$i.apply(this,arguments)},_visitCT_Shape$i:function(a,b){$$t.$jj.ej(b,a);return true},$type:new $.ig.Type("DrawingPartManagerHelpers_DrawingSerializationHelper",$.ig.$ot,[$$t.$ea.$type.specialize($$t.$j3.$type,$$0.$aq.$type),$$t.$ec.$type.specialize($$t.$j3.$type,$$0.$aq.$type),$$t.$ee.$type.specialize($$t.$j3.$type,$$0.$aq.$type),$$t.$eg.$type.specialize($$t.$j3.$type,$$0.$aq.$type),$$t.$ei.$type.specialize($$t.$j3.$type,$$0.$aq.$type),$$t.$ek.$type.specialize($$t.$j3.$type,$$0.$aq.$type),$$t.$em.$type.specialize($$t.$j3.$type,$$0.$aq.$type),$$t.$eo.$type.specialize($$t.$j3.$type,$$0.$aq.$type),$$t.$eq.$type.specialize($$t.$j3.$type,$$0.$aq.$type),$$t.$es.$type.specialize($$t.$j3.$type,$$0.$aq.$type)])},true);$c("EmfPartManager:jl","ImagePartManagerBase",{init:function(){$$t.$jr.init.call(this)},s:function(){return"/xl/media/image.emf"},t:function(){return"/ppt/media/image.emf"},u:function(){return"/word/media/image.emf"},m:function(){return"image/x-emf"},r:function(a){return $$v.$cq.c},$type:new $.ig.Type("EmfPartManager",$$t.$jr.$type)},true);$c("ExtendedPropertiesPartManager:jm","XmlPartManagerBase",{init:function(){$$t.$j3.init.call(this)},m:function(){return $$t.$jm.a1},n:function(a){return"/docProps/app.xml"},o:function(a){switch(a){case 0:return $$t.$jm.a4;case 1:return $$t.$jm.a3;default:return $$t.$jm.a4}},g:function(){return false},$type:new $.ig.Type("ExtendedPropertiesPartManager",$$t.$j3.$type)},true);$c("OfficeExtensibilityPartManagerBase:jn","XmlPartManagerBase",{init:function(){$$t.$j3.init.call(this)},m:function(){return"application/xml"},g:function(){return false},f:function(a,b){var c=$$t.$kg.ak(b);return new $$t.jw(a.contentType(),c.toString(),b.relationshipType(),this.d())},a:function(){var a=$$t.$jw.r(this.d(),this.l(),this.m());this.a1(a);return $$v.$i.g($.ig.$op.$type,a)},b:function(a){var b=this.a1();if(b==null){return null}return $$t.$jw.s(b,this.d(),this.l(),true)},u:function(a){throw new $$6.q(0)},a1:function(a){},$type:new $.ig.Type("OfficeExtensibilityPartManagerBase",$$t.$j3.$type)},true);$c("Office2007ExtensibilityPartManager:jo","OfficeExtensibilityPartManagerBase",{init:function(){$$t.$jn.init.call(this)},a1:function(a){if(arguments.length===1){this.d()._h=a;return a}else{return this.d()._h}},n:function(a){return"/customUI/customUI.xml"},o:function(a){switch(a){case 0:case 1:return $$t.$jo.a5;default:return $$t.$jo.a5}},$type:new $.ig.Type("Office2007ExtensibilityPartManager",$$t.$jn.$type)},true);$c("Office2010ExtensibilityPartManager:jp","OfficeExtensibilityPartManagerBase",{init:function(){$$t.$jn.init.call(this)},a1:function(a){if(arguments.length===1){this.d()._i=a;return a}else{return this.d()._i}},n:function(a){return"/customUI/customUI14.xml"},o:function(a){switch(a){case 0:case 1:return $$t.$jp.a5;default:return $$t.$jp.a5}},$type:new $.ig.Type("Office2010ExtensibilityPartManager",$$t.$jn.$type)},true);$c("GifPartManager:jq","ImagePartManagerBase",{init:function(){$$t.$jr.init.call(this)},s:function(){return"/xl/media/image.gif"},t:function(){return"/ppt/media/image.gif"},u:function(){return"/word/media/image.gif"},m:function(){return"image/gif"},r:function(a){return $$v.$cq.d},$type:new $.ig.Type("GifPartManager",$$t.$jr.$type)},true);$c("JpegPartManager:js","ImagePartManagerBase",{init:function(){$$t.$jr.init.call(this)},s:function(){return"/xl/media/image.jpeg"},t:function(){return"/ppt/media/image.jpeg"},u:function(){return"/word/media/image.jpeg"},m:function(){return"image/jpeg"},r:function(a){return $$v.$cq.e},$type:new $.ig.Type("JpegPartManager",$$t.$jr.$type)},true);$c("PngPartManager:ju","ImagePartManagerBase",{init:function(){$$t.$jr.init.call(this)},s:function(){return"/xl/media/image.png"},t:function(){return"/ppt/media/image.png"},u:function(){return"/word/media/image.png"},m:function(){return"image/png"},r:function(a){return $$v.$cq.f},$type:new $.ig.Type("PngPartManager",$$t.$jr.$type)},true);$c("PrinterSettingsPartManager:jv","XmlPartManagerBase",{init:function(){$$t.$j3.init.call(this)},n:function(a){switch(a){case 0:return"/xl"+"/printerSettings/printerSettings.bin";default:return null}},o:function(a){switch(a){case 0:return $$t.$jv.a5;case 1:return $$t.$jv.a4;default:return $$t.$jv.a5}},g:function(){return true},a:function(){return $$v.$i.g($.ig.$op.$type,new $$v.ah($$v.$aq.c(this.l())))},b:function(a){var b=$b($$v.$ah.$type,a);if(b==null){return null}this.l().write(b.a,0,b.a.length);return null},u:function(a){throw new $$6.p(0)},$type:new $.ig.Type("PrinterSettingsPartManager",$$t.$j3.$type)},true);$c("RoundTripDataPartManager:jw","PartManagerBase",{u:null,v:null,w:null,t:null,init:function(a,b,c,d){$$t.$jt.init.call(this);this.u=a;this.v=b;this.w=c;this.t=d},a:function(){return $$v.$i.g($.ig.$op.$type,new $$v.ah($$v.$aq.c(this.l())))},b:function(a){var b=$b($$v.$ah.$type,a);if(b==null){return null}this.l().write(b.a,0,b.a.length);return null},n:function(a){return this.v},o:function(a){return this.t._a6(a,this.w)},m:function(){return this.u},g:function(){return false},r:function(a,b,c){var d=new $$v.al(c,a._activePart().uri().toString(),$$v.$aq.c(b));var f=a._activePart().getRelationships().getEnumerator();while(f.moveNext()){var e=f.current();if(e.targetMode()!=0){continue}var g=$b($$v.$ah.$type,a._getPartData1(e));if(g==null){continue}var h=$$t.$kg.ak(e);var i=a._getPart(h);var j=$$t.$kg.ak(e).toString();d.c.add(function(){var $ret=new $$v.am;$ret.b=i.contentType();$ret.d=e.id();$ret.a=g;$ret.e=e.relationshipType();$ret.c=h.toString();return $ret}())}return d},s:function(a,b,c,d){return $$v.$o.a($$v.$h.d($$v.$am.$type,a.c,function(e){if(d){var f=function(g){return g!=null?g:e.e}(b._a6(b._conformance(),e.e));var g=new $$t.jw(e.b,e.c,f,b);return b._createPart(g,e.a,e.d)}return $$v.$o.e($$6.$u.$type.specialize($$6.$x.$type,String),b._createPart2(e.b,e.c,e.a,e.d),function(h){},0)}),function(){c.write(a.a,0,a.a.length)},0)},$type:new $.ig.Type("RoundTripDataPartManager",$$t.$jt.$type)},true);$c("ThemeManagerPartManager:jx","XmlPartManagerBase",{init:function(){$$t.$j3.init.call(this)},m:function(){return $$t.$jx.a1},n:function(a){switch(a){case 0:case 1:return"/theme/theme/themeManager.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$jx.a4;case 1:return $$t.$jx.a3;default:return $$t.$jx.a4}},g:function(){return false},$type:new $.ig.Type("ThemeManagerPartManager",$$t.$j3.$type)},true);$c("ThemePartManager:jy","XmlPartManagerBase",{a1:false,init:function(a){$$t.$j3.init.call(this);this.a1=a},m:function(){return $$t.$jy.a5},n:function(a){if(this.a1){switch(a){case 0:return"/theme/theme/theme.xml";case 1:return"/theme/theme/theme.xml";
default:return null}}else{switch(a){case 0:return"/xl/theme/theme.xml";case 1:return"/word/theme/theme.xml";default:return null}}},o:function(a){switch(a){case 0:return $$t.$jy.a7;case 1:return $$t.$jy.a6;default:return $$t.$jy.a7}},g:function(){return true},a:function(){this.d()._isThemePartLoaded(true);return $$t.$j3.a.call(this)},$type:new $.ig.Type("ThemePartManager",$$t.$j3.$type)},true);$c("TiffPartManager:jz","ImagePartManagerBase",{init:function(){$$t.$jr.init.call(this)},s:function(){return"/xl/media/image.tiff"},t:function(){return"/ppt/media/image.tiff"},u:function(){return"/word/media/image.tiff"},m:function(){return"image/tiff"},r:function(a){return $$v.$cq.g},$type:new $.ig.Type("TiffPartManager",$$t.$jr.$type)},true);$c("VbaProjectPartManager:j0","PartManagerBase",{init:function(){$$t.$jt.init.call(this)},m:function(){return"application/vnd.ms-office.vbaProject"},n:function(a){switch(a){case 0:return"/xl/vbaProject.bin";case 1:return"/word/vbaProject.bin";default:return null}},o:function(a){switch(a){case 0:return $$t.$j0.u;case 1:return $$t.$j0.u;default:return $$t.$j0.u}},g:function(){return false},$type:new $.ig.Type("VbaProjectPartManager",$$t.$jt.$type)},true);$c("VmlDrawingPartManager:j1","XmlPartManagerBase",{a1:false,init:function(a){$$t.$j3.init.call(this);this.a1=a},m:function(){return $$t.$j1.a5},az:function(){var $self=this;return function(){var $ret=new $$t.k4;$ret._inputStream(new $$7.f($self.l()));return $ret}()},n:function(a){if(this.a1){switch(a){case 1:return"/theme/drawings/vmlDrawing.vml";default:return null}}else{switch(a){case 0:return"/xl/drawings/vmlDrawing.vml";case 1:return"/word/drawings/vmlDrawing.vml";default:return null}}},o:function(a){switch(a){case 0:case 1:return $$t.$j1.a6;default:return $$t.$j1.a6}},g:function(){return true},$type:new $.ig.Type("VmlDrawingPartManager",$$t.$j3.$type)},true);$c("WmfPartManager:j2","ImagePartManagerBase",{init:function(){$$t.$jr.init.call(this)},s:function(){return"/xl/media/image.wmf"},t:function(){return"/ppt/media/image.wmf"},u:function(){return"/word/media/image.wmf"},m:function(){return"image/x-wmf"},r:function(a){return $$v.$cq.h},$type:new $.ig.Type("WmfPartManager",$$t.$jr.$type)},true);$c("XmlNamespaceDefinitionBase:i9","Object",{init:function(){$.ig.$op.init.call(this)},i:function(a){},j:function(){},k:function(a,b){},g:function($t,a,b,c){if(c==false&&$$4.$l.defaultEqualityComparerValue($t).equalsC(a,b)){return null}return $$t.$i9.f($t,a)},f:function($t,value_){var a=$t;if(a==$$t.$gn.$type&&$.ig.$op.equalsStatic($e($t,value_),$$t.$gn.getBox(4))){return"linear sigma"}var b=$n($t,value_);if(b.charAt(0)=="_"){return b.substr(1)}return b},h:function(a){var b=a.lastIndexOf("/");if(b<0){return a}return a.substr(b+1)},b:function($t,a,b){if(String.isNullOrEmpty(a)){return b}var c=false;switch(a){case"continue":case"decimal":case"default":case"double":case"fixed":case"long":case"short":c=true;break;case"linear sigma":a=$$t.$gn.$getName(4);break;default:if("0".charCodeAt(0)<=a.charAt(0).charCodeAt(0)&&a.charAt(0).charCodeAt(0)<="9".charCodeAt(0)){c=true}break}var d;if(c==false&&function(){var e=$.ig.$ep.tryParse$1($t,a,false,d);d=e.p2;return e.ret}()){return d}if(function(){var e=$.ig.$ep.tryParse$1($t,"_"+a,false,d);d=e.p2;return e.ret}()){return d}return b},c:function($t,a,b,c){if(String.isNullOrEmpty(a.d)){return b}return c(a.d)},e:function($t,a,b){var c=new $$4.w($t,0);var d=-1;for(var e=0;e<a.length;e++){switch(a.charAt(e)){case" ":case"\t":case"\r":case"\n":if(d!=-1){c.add(b(a.substr(d,e-d)));d=-1}break;default:if(d==-1){d=e}break}}if(d!=-1){c.add(b(a.substr(d)))}return c},l:function(a,b,c){var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){default:break}}if(function(){var f=$ad(a.ab().ad,c);c=f.p1;return f.ret}()==false){c=$$t.$g7.e(a.ab().ad)}return{p2:c}},z:function(a,b,c,d){a.ad().p(b,c);a.ad().u(d.toString().toLowerCase())},m:function(a,b,c){var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){default:break}}c=$.ig.util.parseInt8_1(a.ab().ad,$$0.$cg.invariantCulture());return{p2:c}},aa:function(a,b,c,d){a.ad().p(b,c);a.ad().u(d.toString())},n:function(a,b,c){var d=null;var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case $$t.$jb.aq:d=a.ab().ag(e.d);break;default:break}}c=$$t.$kg.i(a.ab().ad);return{p2:c}},ab:function(a,b,c,d){a.ad().p(b,c);var e=new $$t.fw(1,$$t.$ir.an.j(),$$t.$ir.an.i(a.d()._conformance()),$$t.$i9.h("http://purl.org/dc/terms/W3CDTF"));a.ad().h($$t.$jb.aq,e.toString());a.ad().u($$t.$kg.k(d))},o:function(a,b,c){var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){default:break}}c=$.ig.util.parseNumber(a.ab().ad,$$0.$cg.invariantCulture());return{p2:c}},ac:function(a,b,c,d){a.ad().p(b,c);a.ad().u(d.toString1($$0.$cg.invariantCulture()))},p:function(a,b,c){var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){default:break}}c=$ak(a.ab().ad,$$0.$cg.invariantCulture());return{p2:c}},ad:function(a,b,c,d){a.ad().p(b,c);a.ad().u($6(d,$$0.$cg.invariantCulture()))},q:function(a,b,c){var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){default:break}}c=$ak(a.ab().ad,$$0.$cg.invariantCulture());return{p2:c}},ae:function(a,b,c,d){a.ad().p(b,c);a.ad().u($6(d,$$0.$cg.invariantCulture()))},r:function(a,b,c){var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){default:break}}c=$aa(a.ab().ad,$$0.$cg.invariantCulture());return{p2:c}},af:function(a,b,c,d){a.ad().p(b,c);a.ad().u(d.toString())},s:function(a,b,c){var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){default:break}}c=$.ig.util.parseInt64_1(a.ab().ad,$$0.$cg.invariantCulture());return{p2:c}},ag:function(a,b,c,d){a.ad().p(b,c);a.ad().u(d.toString())},t:function(a,b,c){var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){default:break}}c=$.ig.util.parseInt16_1(a.ab().ad,$$0.$cg.invariantCulture());return{p2:c}},ah:function(a,b,c,d){a.ad().p(b,c);a.ad().u(d.toString())},d:function(a){switch(a){case" ":case"\r":case"\n":case"\t":return true;default:return false}},u:function(a,b,c,d){var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case $$t.$i8.ar:if(e.d=="preserve"){d=6}break;default:break}}c=a.ab().ad;if(c!=null){if((d&2)==0){c=c.trimStart($$t.$i9.a)}if((d&4)==0&&String.isNullOrWhiteSpace(c)==false){c=c.trimEnd($$t.$i9.a)}}return{p2:c}},ai:function(a,b,c,d,e,f){a.ad().p(b,c);if(f!=6){if(String.isNullOrEmpty(d)==false){if($$t.$i9.d(d.charAt(0))&&(f&2)==0||$$t.$i9.d(d.charAt(d.length-1))&&(f&4)==0){$$t.$i8.as(a.ad())}}}if(e!=null){e()}a.ad().u(d)},v:function(a,b,c){var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){default:break}}c=$ae(a.ab().ad,$$0.$cg.invariantCulture());return{p2:c}},aj:function(a,b,c,d){a.ad().p(b,c);a.ad().u(d.toString())},w:function(a,b,c){var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){default:break}}c=$.ig.util.parseUInt32_1(a.ab().ad,$$0.$cg.invariantCulture());return{p2:c}},ak:function(a,b,c,d){a.ad().p(b,c);a.ad().u(d.toString())},x:function(a,b,c){var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){default:break}}c=$.ig.util.parseUInt64_1(a.ab().ad,$$0.$cg.invariantCulture());return{p2:c}},al:function(a,b,c,d){a.ad().p(b,c);a.ad().u(d.toString())},y:function(a,b,c){var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){default:break}}c=$.ig.util.parseUInt16_1(a.ab().ad,$$0.$cg.invariantCulture());return{p2:c}},am:function(a,b,c,d){a.ad().p(b,c);a.ad().u(d.toString())},$type:new $.ig.Type("XmlNamespaceDefinitionBase",$.ig.$ot)},true);$c("CoreProperties:io","XmlNamespaceDefinitionBase",{init:function(){$$t.$i9.init.call(this)},i:function(a){switch(a){case 0:case 1:return $$t.$io.au;default:return $$t.$io.au}},j:function(){return"cp"},ax:function(a,b){var c=$$t.$io.u(a,$$t.$io.ap,b,6);b=c.p2;return{p1:b}},a4:function(a,b){$$t.$io.ai(a,$$t.$io.ap,"cp",b,null,6)},ay:function(a,b){var c=$$t.$io.u(a,$$t.$io.aq,b,6);b=c.p2;return{p1:b}},a5:function(a,b){$$t.$io.ai(a,$$t.$io.aq,"cp",b,null,6)},az:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},a6:function(a){a.ad().p($$t.$io.ar,"cp");var b=a.d()._conformance();a.ad().l($$t.$io.an,false);a.ad().l($$t.$iq.an,false);a.ad().l($$t.$ir.an,false);a.ad().l($$t.$ip.an,false);a.ad().l($$t.$jb.an,false)},a0:function(a,b,c){b=null;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case $$t.$i8.ap:b=d.d;break;default:break}}c=a.ab().ad;return{p1:b,p2:c}},a7:function(a,b,c){a.ad().p($$t.$io.as,"cp");var d;d=b;a.ad().h($$t.$i8.ap,d);a.ad().u(c)},a1:function(a,b){var c=$$t.$io.u(a,$$t.$io.at,b,0);b=c.p2;return{p1:b}},a8:function(a,b){$$t.$io.ai(a,$$t.$io.at,"cp",b,null,0)},a2:function(a,b){var c=$$t.$io.u(a,$$t.$io.av,b,0);b=c.p2;return{p1:b}},a9:function(a,b){$$t.$io.ai(a,$$t.$io.av,"cp",b,null,0)},a3:function(a,b){var c=$$t.$io.u(a,$$t.$io.aw,b,0);b=c.p2;return{p1:b}},ba:function(a,b){$$t.$io.ai(a,$$t.$io.aw,"cp",b,null,0)},$type:new $.ig.Type("CoreProperties",$$t.$i9.$type)},true);$c("DcDcmiType:ip","XmlNamespaceDefinitionBase",{init:function(){$$t.$i9.init.call(this)},i:function(a){switch(a){case 0:case 1:return"http://purl.org/dc/dcmitype/";default:return"http://purl.org/dc/dcmitype/"}},j:function(){return"dcmitype"},$type:new $.ig.Type("DcDcmiType",$$t.$i9.$type)},true);$c("DcElements:iq","XmlNamespaceDefinitionBase",{init:function(){$$t.$i9.init.call(this)},i:function(a){switch(a){case 0:case 1:return"http://purl.org/dc/elements/1.1/";default:return"http://purl.org/dc/elements/1.1/"}},j:function(){return"dc"},au:function(a,b){var c=$$t.$io.u(a,"http://purl.org/dc/elements/1.1/creator",b,0);b=c.p2;return{p1:b}},ay:function(a,b){$$t.$io.ai(a,"http://purl.org/dc/elements/1.1/creator","dc",b,null,0)},av:function(a,b){var c=$$t.$io.u(a,$$t.$iq.aq,b,6);b=c.p2;return{p1:b}},az:function(a,b){$$t.$io.ai(a,$$t.$iq.aq,"dc",b,null,6)},aw:function(a,b){var c=$$t.$io.u(a,"http://purl.org/dc/elements/1.1/subject",b,6);b=c.p2;return{p1:b}},a0:function(a,b){$$t.$io.ai(a,"http://purl.org/dc/elements/1.1/subject","dc",b,null,6)},ax:function(a,b){var c=$$t.$io.u(a,"http://purl.org/dc/elements/1.1/title",b,6);b=c.p2;return{p1:b}},a1:function(a,b){$$t.$io.ai(a,"http://purl.org/dc/elements/1.1/title","dc",b,null,6)},$type:new $.ig.Type("DcElements",$$t.$i9.$type)},true);$c("DcTerms:ir","XmlNamespaceDefinitionBase",{init:function(){$$t.$i9.init.call(this)},i:function(a){switch(a){case 0:case 1:return"http://purl.org/dc/terms/";default:return"http://purl.org/dc/terms/"}},j:function(){return"dcterms"},at:function(a,b){var c=$$t.$io.n(a,"http://purl.org/dc/terms/created",b);b=c.p2;return{p1:b}},av:function(a,b){$$t.$io.ab(a,"http://purl.org/dc/terms/created","dcterms",b)},au:function(a,b){var c=$$t.$io.n(a,"http://purl.org/dc/terms/modified",b);b=c.p2;return{p1:b}},aw:function(a,b){$$t.$io.ab(a,"http://purl.org/dc/terms/modified","dcterms",b)},$type:new $.ig.Type("DcTerms",$$t.$i9.$type)},true);$c("Drawing2010Main:is","XmlNamespaceDefinitionBase",{init:function(){$$t.$i9.init.call(this)},i:function(a){switch(a){case 0:case 1:return $$t.$is.ap;default:return $$t.$is.ap}},j:function(){return"a14"},$type:new $.ig.Type("Drawing2010Main",$$t.$i9.$type)},true);$c("Drawing2010Slicer:it","XmlNamespaceDefinitionBase",{init:function(){$$t.$i9.init.call(this)},i:function(a){switch(a){case 0:case 1:return $$t.$it.ar;default:return $$t.$it.ar}},j:function(){return"sle"},at:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"name":b=c.d;break;default:break}}return{p1:b}},au:function(a,b){a.ad().p($$t.$it.as,"sle");var c;c=b;a.ad().h("name",c)},$type:new $.ig.Type("Drawing2010Slicer",$$t.$i9.$type)},true);$c("DrawingMLChart:iu","XmlNamespaceDefinitionBase",{init:function(){$$t.$i9.init.call(this)},i:function(a){switch(a){case 0:return $$t.$iu.ar;case 1:return $$t.$iu.aq;default:return $$t.$iu.ar}},j:function(){return"c"},as:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case $$t.$i5.ar:b=c.d;break;default:break}}return{p1:b}},at:function(a,b){a.ad().p($$t.$iu.ap,"c");a.ad().l($$t.$iu.an,false);a.ad().l($$t.$i5.an,false);var c;c=b;a.ad().h($$t.$i5.ar,c)},$type:new $.ig.Type("DrawingMLChart",$$t.$i9.$type)},true);$c("DrawingMLMain:iv","XmlNamespaceDefinitionBase",{init:function(){$$t.$i9.init.call(this)},i:function(a){switch(a){case 0:return $$t.$iv.d3;case 1:return $$t.$iv.d2;default:return $$t.$iv.d3}},j:function(){return"a"},g1:function(a,b,c){c=$$v.$cc.a(0);var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"val":c=$$v.$cc.b(d.d);break;default:break}}return{p2:c}},j3:function(a,b,c){a.ad().p(b,"a");var d;d=c.toString();a.ad().h("val",d)},g2:function(a,b){var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){default:break}}},j4:function(a,b){a.ad().p(b,"a")},g3:function(a,b,c){c=new $$t.gq;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"val":c=$$t.$gq.c(d.d,a.d()._conformance());break;default:break}}return{p2:c}},j5:function(a,b,c){a.ad().p(b,"a");var d;d=c.s(a.d()._conformance());a.ad().h("val",d)},g4:function(a,b,c,d,e){c=$m($$t.$g3.$type,null);d=$m($$t.$g2.$type,null);e=$m($$t.$g1.$type,null);var g=a.ab().u.getEnumerator();while(g.moveNext()){var f=g.current();switch(f.a.e(a.d())){case"type":c=$m($$t.$g3.$type,$$t.$i9.b($$t.$g3.$type,f.d,null));break;case"w":d=$m($$t.$g2.$type,$$t.$i9.b($$t.$g2.$type,f.d,null));break;case"len":e=$m($$t.$g1.$type,$$t.$i9.b($$t.$g1.$type,f.d,null));break;default:break}}return{p2:c,p3:d,p4:e}},j6:function(a,b,c,d,e){a.ad().p(b,"a");var f;if($l(c,null)){f=$$t.$i9.f($$t.$g3.$type,c.value());a.ad().h("type",f)}if($l(d,null)){f=$$t.$i9.f($$t.$g2.$type,d.value());a.ad().h("w",f)}if($l(e,null)){f=$$t.$i9.f($$t.$g1.$type,e.value());a.ad().h("len",f)}},g5:function(a,b,c,d,e,f,g){c=new $$t.gk;d=null;e=null;f=false;g=null;var i=a.ab().u.getEnumerator();while(i.moveNext()){var h=i.current();switch(h.a.e(a.d())){case"id":c=$$t.$gk.c(h.d);break;case"name":d=h.d;break;case"descr":e=h.d;break;case"hidden":f=$$t.$g7.e(h.d);break;case"title":g=h.d;break;default:break}}return{p2:c,p3:d,p4:e,p5:f,p6:g}},j7:function(a,b,c,d,e,f,g){a.ad().p(b,"a");var h;h=c.toString();a.ad().h("id",h);h=d;a.ad().h("name",h);h=e;a.ad().h("descr",h);if(f!=false){h=$$t.$g7.g(f);a.ad().h("hidden",h)}h=g;a.ad().h("title",h)},g6:function(a,b,c){c=new $$t.hb;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"val":c=$$t.$hb.c(d.d,a.d()._conformance());break;default:break}}return{p2:c}},j8:function(a,b,c){a.ad().p(b,"a");var d;d=c.p(a.d()._conformance());a.ad().h("val",d)},g7:function(a,b,c,d){c=new $$v.cd;d=new $$v.cd;var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case"x":c=$$v.$cd.h(e.d);break;case"y":d=$$v.$cd.h(e.d);break;default:break}}return{p2:c,p3:d}},j9:function(a,b,c,d){a.ad().p(b,"a");var e;e=c.toString();a.ad().h("x",e);e=d.toString();a.ad().h("y",e)},g8:function(a,b,c){c=$$t.$hd.e($$v.$cc.a(0));var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"val":c=$$t.$hd.g(d.d);break;default:break}}return{p2:c}},ka:function(a,b,c){a.ad().p(b,"a");var d;d=c.toString();a.ad().h("val",d)},g9:function(a,b,c){c=new $$t.he;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"val":c=$$t.$he.f(d.d,a.d()._conformance());break;default:break}}return{p2:c}},kb:function(a,b,c){a.ad().p(b,"a");var d;d=c.s(a.d()._conformance());a.ad().h("val",d)},ha:function(a,b,c){c=new $$t.hf;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"val":c=$$t.$hf.f(d.d,a.d()._conformance());break;default:break}}return{p2:c}},kc:function(a,b,c){a.ad().p(b,"a");var d;d=c.s(a.d()._conformance());a.ad().h("val",d)},hb:function(a,b,c,d){c=new $$v.b7;d=new $$v.b7;var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case"cx":c=$$v.$b7.c(e.d);break;case"cy":d=$$v.$b7.c(e.d);break;default:break}}return{p2:c,p3:d}},kd:function(a,b,c,d){a.ad().p(b,"a");var e;e=c.toString();a.ad().h("cx",e);e=d.toString();a.ad().h("cy",e)},hc:function(a,b,c,d,e,f){c=$$t.$hb.a(0);d=$$t.$hb.a(0);e=$$t.$hb.a(0);f=$$t.$hb.a(0);var g=a.d()._conformance();var i=a.ab().u.getEnumerator();while(i.moveNext()){var h=i.current();switch(h.a.e(a.d())){case"l":c=$$t.$hb.c(h.d,g);break;case"t":d=$$t.$hb.c(h.d,g);break;case"r":e=$$t.$hb.c(h.d,g);break;case"b":f=$$t.$hb.c(h.d,g);break;default:break}}return{p2:c,p3:d,p4:e,p5:f}},ke:function(a,b,c,d,e,f){a.ad().p(b,"a");var g;var h=a.d()._conformance();if($$t.$hb.f(c,$$t.$hb.a(0))){g=c.p(h);a.ad().h("l",g)}if($$t.$hb.f(d,$$t.$hb.a(0))){g=d.p(h);a.ad().h("t",g)}if($$t.$hb.f(e,$$t.$hb.a(0))){g=e.p(h);a.ad().h("r",g)}if($$t.$hb.f(f,$$t.$hb.a(0))){g=f.p(h);a.ad().h("b",g)}},hd:function(a,b,c){c=0;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"idx":c=$.ig.util.parseUInt32_1(d.d,$$0.$cg.invariantCulture());break;default:break}}return{p2:c}},kf:function(a,b,c){a.ad().p(b,"a");var d;d=c.toString();a.ad().h("idx",d)},he:function(a,b,c,d,e,f){c=null;d=null;e=$m($$0.$a6.$type,null);f=1;var h=a.ab().u.getEnumerator();while(h.moveNext()){var g=h.current();switch(g.a.e(a.d())){case"typeface":c=g.d;break;case"panose":d=$$t.$g8.b(g.d);break;case"pitchFamily":e=$m($$0.$a6.$type,$.ig.util.parseInt8_1(g.d,$$0.$cg.invariantCulture()));break;case"charset":f=$.ig.util.parseInt8_1(g.d,$$0.$cg.invariantCulture());break;default:break}}return{p2:c,p3:d,p4:e,p5:f}},kg:function(a,b,c,d,e,f){a.ad().p(b,"a");var g;g=c!=null?c:"";a.ad().h("typeface",g);if(d!=null){g=d.toString();a.ad().h("panose",g)}if($l(e,null)){g=e.value().toString();a.ad().h("pitchFamily",g)}if(f!=1){g=f.toString();a.ad().h("charset",g)}},gg:function(a){},ji:function(a){$$t.$iv.j4(a,$$t.$iv.aq)},gh:function(a){},jj:function(a){$$t.$iv.j4(a,$$t.$iv.ar)},gi:function(a){},jk:function(a){$$t.$iv.j4(a,$$t.$iv.as)},gj:function(a){},jl:function(a){$$t.$iv.j4(a,$$t.$iv.at)},gk:function(a){},jm:function(a){$$t.$iv.j4(a,$$t.$iv.au)},gl:function(a){},jn:function(a){$$t.$iv.j4(a,$$t.$iv.av)},gm:function(a,b){var c=$$t.$iv.g9(a,$$t.$iv.ay,b);b=c.p2;return{p1:b}},jo:function(a,b){$$t.$iv.kb(a,$$t.$iv.ay,b)},gn:function(a,b){var c=$$t.$iv.ha(a,$$t.$iv.az,b);b=c.p2;return{p1:b}},jp:function(a,b){$$t.$iv.kc(a,$$t.$iv.az,b)},go:function(a,b){var c=$$t.$iv.g3(a,$$t.$iv.a0,b);b=c.p2;return{p1:b}},jq:function(a,b){$$t.$iv.j5(a,$$t.$iv.a0,b)},gp:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},jr:function(a){a.ad().p($$t.$iv.a4,"a")},gq:function(a,b,c,d){b=null;c=null;d=0;var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case $$t.$i5.ap:b=e.d;break;case $$t.$i5.as:c=e.d;break;case"cstate":d=$$t.$i9.b($$t.$f9.$type,e.d,d);break;default:break}}return{p1:b,p2:c,p3:d}},js:function(a,b,c,d){a.ad().p($$t.$iv.a8,"a");var e;e=b;a.ad().h($$t.$i5.ap,e);e=c;a.ad().h($$t.$i5.as,e);if(d!=0){e=$$t.$i9.f($$t.$f9.$type,d);a.ad().h("cstate",e)}},gr:function(a,b,c){b=$m($$0.$be.$type,null);c=$m($$0.$aq.$type,null);var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"dpi":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(d.d,$$0.$cg.invariantCulture()));break;case"rotWithShape":c=$m($$0.$aq.$type,$$t.$g7.e(d.d));break;default:break}}return{p1:b,p2:c}},jt:function(a,b,c){a.ad().p($$t.$iv.a9,"a");var d;if($l(b,null)){d=b.value().toString();a.ad().h("dpi",d)}if($l(c,null)){d=$$t.$g7.g(c.value());a.ad().h("rotWithShape",d)}},gs:function(a,b){var c=$$t.$iv.g6(a,$$t.$iv.ba,b);b=c.p2;return{p1:b}},ju:function(a,b){$$t.$iv.j8(a,$$t.$iv.ba,b)},gt:function(a,b){var c=$$t.$iv.g6(a,$$t.$iv.bb,b);b=c.p2;return{p1:b}},jv:function(a,b){$$t.$iv.j8(a,$$t.$iv.bb,b)},gu:function(a,b){var c=$$t.$iv.g6(a,$$t.$iv.bc,b);b=c.p2;return{p1:b}},jw:function(a,b){$$t.$iv.j8(a,$$t.$iv.bc,b)},gv:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){b=$m($$0.$aw.$type,null);c=$m($$0.$aq.$type,null);d=$m($$t.$h9.$type,null);e=$m($$t.$h0.$type,null);f=$m($$t.$h8.$type,null);g=$m($$t.$ia.$type,null);h=$m($$t.$gg.$type,null);i=$m($$t.$gg.$type,null);j=$m($$t.$gg.$type,null);k=$m($$t.$gg.$type,null);l=$m($$0.$aw.$type,null);m=$m($$0.$aw.$type,null);n=$m($$0.$aq.$type,null);o=$m($$0.$aq.$type,null);p=$m($$t.$hw.$type,null);q=$m($$0.$aq.$type,null);r=$m($$0.$aq.$type,null);s=false;t=$m($$0.$aq.$type,null);var v=a.ab().u.getEnumerator();while(v.moveNext()){var u=v.current();switch(u.a.e(a.d())){case"rot":b=$m($$0.$aw.$type,$aa(u.d,$$0.$cg.invariantCulture()));break;case"spcFirstLastPara":c=$m($$0.$aq.$type,$$t.$g7.e(u.d));break;case"vertOverflow":d=$m($$t.$h9.$type,$$t.$i9.b($$t.$h9.$type,u.d,null));break;case"horzOverflow":e=$m($$t.$h0.$type,$$t.$i9.b($$t.$h0.$type,u.d,null));break;case"vert":f=$m($$t.$h8.$type,$$t.$i9.b($$t.$h8.$type,u.d,null));break;case"wrap":g=$m($$t.$ia.$type,$$t.$i9.b($$t.$ia.$type,u.d,null));break;case"lIns":h=$m($$t.$gg.$type,$$t.$gg.g(u.d));break;case"tIns":i=$m($$t.$gg.$type,$$t.$gg.g(u.d));break;case"rIns":j=$m($$t.$gg.$type,$$t.$gg.g(u.d));break;case"bIns":k=$m($$t.$gg.$type,$$t.$gg.g(u.d));break;case"numCol":l=$m($$0.$aw.$type,$aa(u.d,$$0.$cg.invariantCulture()));break;case"spcCol":m=$m($$0.$aw.$type,$aa(u.d,$$0.$cg.invariantCulture()));break;case"rtlCol":n=$m($$0.$aq.$type,$$t.$g7.e(u.d));break;case"fromWordArt":o=$m($$0.$aq.$type,$$t.$g7.e(u.d));break;case"anchor":p=$m($$t.$hw.$type,$$t.$i9.b($$t.$hw.$type,u.d,null));break;case"anchorCtr":q=$m($$0.$aq.$type,$$t.$g7.e(u.d));break;case"forceAA":r=$m($$0.$aq.$type,$$t.$g7.e(u.d));break;case"upright":s=$$t.$g7.e(u.d);break;case"compatLnSpc":t=$m($$0.$aq.$type,$$t.$g7.e(u.d));break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n,p14:o,p15:p,p16:q,p17:r,p18:s,p19:t}},jx:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){a.ad().p($$t.$iv.be,"a");var u;if($l(b,null)){u=b.value().toString();a.ad().h("rot",u)}if($l(c,null)){u=$$t.$g7.g(c.value());a.ad().h("spcFirstLastPara",u)}if($l(d,null)){u=$$t.$i9.f($$t.$h9.$type,d.value());a.ad().h("vertOverflow",u)}if($l(e,null)){u=$$t.$i9.f($$t.$h0.$type,e.value());a.ad().h("horzOverflow",u)}if($l(f,null)){u=$$t.$i9.f($$t.$h8.$type,f.value());a.ad().h("vert",u)}if($l(g,null)){u=$$t.$i9.f($$t.$ia.$type,g.value());a.ad().h("wrap",u)}if($l(h,null)){u=h.value().toString();a.ad().h("lIns",u)}if($l(i,null)){u=i.value().toString();a.ad().h("tIns",u)}if($l(j,null)){u=j.value().toString();a.ad().h("rIns",u)}if($l(k,null)){u=k.value().toString();a.ad().h("bIns",u)}if($l(l,null)){u=l.value().toString();a.ad().h("numCol",u)}if($l(m,null)){u=m.value().toString();a.ad().h("spcCol",u)}if($l(n,null)){u=$$t.$g7.g(n.value());a.ad().h("rtlCol",u)}if($l(o,null)){u=$$t.$g7.g(o.value());a.ad().h("fromWordArt",u)}if($l(p,null)){u=$$t.$i9.f($$t.$hw.$type,p.value());a.ad().h("anchor",u)}if($l(q,null)){u=$$t.$g7.g(q.value());a.ad().h("anchorCtr",u)}if($l(r,null)){u=$$t.$g7.g(r.value());a.ad().h("forceAA",u)}if(s!=false){u=$$t.$g7.g(s);a.ad().h("upright",u)}if($l(t,null)){u=$$t.$g7.g(t.value());a.ad().h("compatLnSpc",u)}},gw:function(a,b,c){var d=$$t.$iv.hb(a,$$t.$iv.bh,b,c);b=d.p2;c=d.p3;return{p1:b,p2:c}},jy:function(a,b,c){$$t.$iv.kd(a,$$t.$iv.bh,b,c)},gx:function(a,b,c){var d=$$t.$iv.g7(a,$$t.$iv.bi,b,c);b=d.p2;c=d.p3;return{p1:b,p2:c}},jz:function(a,b,c){$$t.$iv.j9(a,$$t.$iv.bi,b,c)},gy:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"name":b=c.d;break;default:break}}return{p1:b}},j0:function(a,b){a.ad().p($$t.$iv.bj,"a");var c;c=b;a.ad().h("name",c)},gz:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},j1:function(a){a.ad().p($$t.$iv.bl,"a")},g0:function(a,b,c,d,e){var f=$$t.$iv.he(a,$$t.$iv.bn,b,c,d,e);b=f.p2;c=f.p3;d=f.p4;e=f.p5;return{p1:b,p2:c,p3:d,p4:e}},j2:function(a,b,c,d,e){$$t.$iv.kg(a,$$t.$iv.bn,b,c,d,e)},hf:function(a,b){b="";var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"name":b=c.d;break;default:break}}return{p1:b}},kh:function(a,b){a.ad().p($$t.$iv.bp,"a");var c;if(b!=""){c=b;a.ad().h("name",c)}},hg:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},ki:function(a){a.ad().p($$t.$iv.bq,"a")},hh:function(a){},kj:function(a){$$t.$iv.j4(a,$$t.$iv.bx)},hi:function(a){},kk:function(a){$$t.$iv.j4(a,$$t.$iv.by)},hj:function(a,b,c,d,e){var f=$$t.$iv.he(a,$$t.$iv.b0,b,c,d,e);b=f.p2;c=f.p3;d=f.p4;e=f.p5;return{p1:b,p2:c,p3:d,p4:e}},kl:function(a,b,c,d,e){$$t.$iv.kg(a,$$t.$iv.b0,b,c,d,e)},hk:function(a,b){var c=$$t.$iv.hd(a,$$t.$iv.b2,b);b=c.p2;return{p1:b}},km:function(a,b){$$t.$iv.kf(a,$$t.$iv.b2,b)},hl:function(a,b,c){var d=$$t.$iv.hb(a,$$t.$iv.b5,b,c);b=d.p2;c=d.p3;return{p1:b,p2:c}},kn:function(a,b,c){$$t.$iv.kd(a,$$t.$iv.b5,b,c)},hm:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},ko:function(a){a.ad().p($$t.$iv.b6,"a")},hn:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},kp:function(a){a.ad().p($$t.$iv.b7,"a")},ho:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},kq:function(a){a.ad().p($$t.$iv.b8,"a")},hp:function(a,b,c,d,e){var f=$$t.$iv.hc(a,$$t.$iv.b9,b,c,d,e);b=f.p2;c=f.p3;d=f.p4;e=f.p5;return{p1:b,p2:c,p3:d,p4:e}},kr:function(a,b,c,d,e){$$t.$iv.ke(a,$$t.$iv.b9,b,c,d,e)},hq:function(a,b){var c=$$t.$iv.hd(a,$$t.$iv.ca,b);b=c.p2;return{p1:b}},ks:function(a,b){$$t.$iv.kf(a,$$t.$iv.ca,b)},hr:function(a){},kt:function(a){$$t.$iv.j4(a,$$t.$iv.cf)},hs:function(a,b,c){b=null;c=null;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"script":b=d.d;break;case"typeface":c=d.d;break;default:break}}return{p1:b,p2:c}},ku:function(a,b,c){a.ad().p($$t.$iv.cg,"a");var d;d=b;a.ad().h("script",d);d=c;a.ad().h("typeface",d)},ht:function(a,b){b=0;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"idx":b=$$t.$i9.b($$t.$gr.$type,c.d,b);break;default:break}}return{p1:b}},kv:function(a,b){a.ad().p($$t.$iv.ci,"a");var c;c=$$t.$i9.f($$t.$gr.$type,b);a.ad().h("idx",c)},hu:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"name":b=c.d;break;default:break}}return{p1:b}},kw:function(a,b){a.ad().p($$t.$iv.cj,"a");var c;c=b;a.ad().h("name",c)},hv:function(a,b,c){b=null;c=null;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"name":b=d.d;break;case"fmla":c=d.d;break;default:break}}return{p1:b,p2:c}},kx:function(a,b,c){a.ad().p($$t.$iv.cm,"a");var d;d=b;a.ad().h("name",d);d=c;a.ad().h("fmla",d)},hw:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"uri":b=c.d;break;default:break}}return{p1:b}},ky:function(a,b){a.ad().p($$t.$iv.co,"a");var c;c=b;a.ad().h("uri",c)},hx:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},kz:function(a){a.ad().p($$t.$iv.cn,"a")},hy:function(a,b,c,d,e,f,g){b=false;c=false;d=false;e=false;f=false;g=false;var i=a.ab().u.getEnumerator();while(i.moveNext()){var h=i.current();switch(h.a.e(a.d())){case"noGrp":b=$$t.$g7.e(h.d);break;case"noDrilldown":c=$$t.$g7.e(h.d);break;case"noSelect":d=$$t.$g7.e(h.d);break;case"noChangeAspect":e=$$t.$g7.e(h.d);break;case"noMove":f=$$t.$g7.e(h.d);break;case"noResize":g=$$t.$g7.e(h.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g}},k0:function(a,b,c,d,e,f,g){a.ad().p($$t.$iv.cp,"a");var h;if(b!=false){h=$$t.$g7.g(b);a.ad().h("noGrp",h)}if(c!=false){h=$$t.$g7.g(c);a.ad().h("noDrilldown",h)}if(d!=false){h=$$t.$g7.g(d);a.ad().h("noSelect",h)}if(e!=false){h=$$t.$g7.g(e);a.ad().h("noChangeAspect",h)}if(f!=false){h=$$t.$g7.g(f);a.ad().h("noMove",h)}if(g!=false){h=$$t.$g7.g(g);a.ad().h("noResize",h)}},hz:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},k1:function(a){a.ad().p($$t.$iv.cq,"a")},h0:function(a,b){var c=$$t.$iv.g6(a,$$t.$iv.cr,b);b=c.p2;return{p1:b}},k2:function(a,b){$$t.$iv.j8(a,$$t.$iv.cr,b)},h1:function(a,b){var c=$$t.$iv.g6(a,$$t.$iv.cs,b);b=c.p2;return{p1:b}},k3:function(a,b){$$t.$iv.j8(a,$$t.$iv.cs,b)},h2:function(a,b){var c=$$t.$iv.g6(a,$$t.$iv.ct,b);b=c.p2;return{p1:b}},k4:function(a,b){$$t.$iv.j8(a,$$t.$iv.ct,b)},h3:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},k5:function(a){a.ad().p($$t.$iv.cu,"a")},h4:function(a,b,c,d){var e=$$t.$iv.g4(a,$$t.$iv.cw,b,c,d);b=e.p2;c=e.p3;d=e.p4;return{p1:b,p2:c,p3:d}},k6:function(a,b,c,d){$$t.$iv.j6(a,$$t.$iv.cw,b,c,d)},h5:function(a,b,c,d,e,f,g,h,i){b=null;c="";d="";e="";f="";g=true;h=false;i=false;var k=a.ab().u.getEnumerator();while(k.moveNext()){var j=k.current();switch(j.a.e(a.d())){case $$t.$i5.ar:b=j.d;break;case"invalidUrl":c=j.d;break;case"action":d=j.d;break;case"tgtFrame":e=j.d;break;case"tooltip":f=j.d;break;case"history":g=$$t.$g7.e(j.d);break;case"highlightClick":h=$$t.$g7.e(j.d);break;case"endSnd":i=$$t.$g7.e(j.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i}},k7:function(a,b,c,d,e,f,g,h,i){a.ad().p($$t.$iv.c1,"a");var j;j=b;a.ad().h($$t.$i5.ar,j);j=c;a.ad().h("invalidUrl",j);j=d;a.ad().h("action",j);j=e;a.ad().h("tgtFrame",j);j=f;a.ad().h("tooltip",j);if(g!=true){j=$$t.$g7.g(g);a.ad().h("history",j)}if(h!=false){j=$$t.$g7.g(h);a.ad().h("highlightClick",j)}if(i!=false){j=$$t.$g7.g(i);a.ad().h("endSnd",j)}},h6:function(a){},k8:function(a){$$t.$iv.j4(a,$$t.$iv.c0)},h7:function(a,b){var c=$$t.$iv.g8(a,$$t.$iv.c3,b);b=c.p2;return{p1:b}},k9:function(a,b){$$t.$iv.ka(a,$$t.$iv.c3,b)},h8:function(a,b){var c=$$t.$iv.ha(a,$$t.$iv.c4,b);b=c.p2;return{p1:b}},la:function(a,b){$$t.$iv.kc(a,$$t.$iv.c4,b)},h9:function(a,b){var c=$$t.$iv.g1(a,$$t.$iv.c5,b);b=c.p2;return{p1:b}},lb:function(a,b){$$t.$iv.j3(a,$$t.$iv.c5,b)},ia:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},lc:function(a){a.ad().p($$t.$iv.da,"a")},ib:function(a,b,c,d,e){var f=$$t.$iv.he(a,$$t.$iv.dj,b,c,d,e);b=f.p2;c=f.p3;d=f.p4;e=f.p5;return{p1:b,p2:c,p3:d,p4:e}},ld:function(a,b,c,d,e){$$t.$iv.kg(a,$$t.$iv.dj,b,c,d,e)},ic:function(a,b,c,d,e){b=$m($$t.$g4.$type,null);c=$m($$t.$g0.$type,null);d=$m($$t.$gc.$type,null);e=$m($$t.$ha.$type,null);var g=a.ab().u.getEnumerator();while(g.moveNext()){var f=g.current();switch(f.a.e(a.d())){case"w":b=$m($$t.$g4.$type,$$t.$g4.f(f.d));break;case"cap":c=$m($$t.$g0.$type,$$t.$i9.b($$t.$g0.$type,f.d,null));break;case"cmpd":d=$m($$t.$gc.$type,$$t.$i9.b($$t.$gc.$type,f.d,null));break;case"algn":e=$m($$t.$ha.$type,$$t.$i9.b($$t.$ha.$type,f.d,null));break;default:break}}return{p1:b,p2:c,p3:d,p4:e}},le:function(a,b,c,d,e){a.ad().p($$t.$iv.dn,"a");var f;if($$t.$g4.j(b,$m($$t.$g4.$type,null))){f=b.toString();a.ad().h("w",f)}if($l(c,null)){f=$$t.$i9.f($$t.$g0.$type,c.value());a.ad().h("cap",f)}if($l(d,null)){f=$$t.$i9.f($$t.$gc.$type,d.value());a.ad().h("cmpd",f)}if($l(e,null)){f=$$t.$i9.f($$t.$ha.$type,e.value());a.ad().h("algn",f)}},id:function(a,b){var c=$$t.$iv.hd(a,$$t.$iv.dp,b);
b=c.p2;return{p1:b}},lf:function(a,b){$$t.$iv.kf(a,$$t.$iv.dp,b)},ie:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},lg:function(a){a.ad().p($$t.$iv.dq,"a")},ig:function(a){},lh:function(a){$$t.$iv.j4(a,$$t.$iv.dr)},ih:function(a){},li:function(a){$$t.$iv.j4(a,$$t.$iv.ds)},ii:function(a,b){var c=$$t.$iv.g6(a,$$t.$iv.dt,b);b=c.p2;return{p1:b}},lj:function(a,b){$$t.$iv.j8(a,$$t.$iv.dt,b)},ij:function(a,b){var c=$$t.$iv.g6(a,$$t.$iv.du,b);b=c.p2;return{p1:b}},lk:function(a,b){$$t.$iv.j8(a,$$t.$iv.du,b)},ik:function(a,b){var c=$$t.$iv.g6(a,$$t.$iv.dv,b);b=c.p2;return{p1:b}},ll:function(a,b){$$t.$iv.j8(a,$$t.$iv.dv,b)},il:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},lm:function(a){a.ad().p($$t.$iv.dx,"a")},im:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},ln:function(a){a.ad().p($$t.$iv.d0,"a")},io:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},lo:function(a){a.ad().p($$t.$iv.eb,"a")},ip:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},lp:function(a){a.ad().p($$t.$iv.el,"a")},iq:function(a,b,c){var d=$$t.$iv.g7(a,$$t.$iv.em,b,c);b=d.p2;c=d.p3;return{p1:b,p2:c}},lq:function(a,b,c){$$t.$iv.j9(a,$$t.$iv.em,b,c)},ir:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},lr:function(a){a.ad().p($$t.$iv.en,"a")},is:function(a,b,c,d,e,f,g,h,i,j,k,l){b=false;c=false;d=false;e=false;f=false;g=false;h=false;i=false;j=false;k=false;l=false;var n=a.ab().u.getEnumerator();while(n.moveNext()){var m=n.current();switch(m.a.e(a.d())){case"noGrp":b=$$t.$g7.e(m.d);break;case"noSelect":c=$$t.$g7.e(m.d);break;case"noRot":d=$$t.$g7.e(m.d);break;case"noChangeAspect":e=$$t.$g7.e(m.d);break;case"noMove":f=$$t.$g7.e(m.d);break;case"noResize":g=$$t.$g7.e(m.d);break;case"noEditPoints":h=$$t.$g7.e(m.d);break;case"noAdjustHandles":i=$$t.$g7.e(m.d);break;case"noChangeArrowheads":j=$$t.$g7.e(m.d);break;case"noChangeShapeType":k=$$t.$g7.e(m.d);break;case"noCrop":l=$$t.$g7.e(m.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l}},ls:function(a,b,c,d,e,f,g,h,i,j,k,l){a.ad().p($$t.$iv.ep,"a");var m;if(b!=false){m=$$t.$g7.g(b);a.ad().h("noGrp",m)}if(c!=false){m=$$t.$g7.g(c);a.ad().h("noSelect",m)}if(d!=false){m=$$t.$g7.g(d);a.ad().h("noRot",m)}if(e!=false){m=$$t.$g7.g(e);a.ad().h("noChangeAspect",m)}if(f!=false){m=$$t.$g7.g(f);a.ad().h("noMove",m)}if(g!=false){m=$$t.$g7.g(g);a.ad().h("noResize",m)}if(h!=false){m=$$t.$g7.g(h);a.ad().h("noEditPoints",m)}if(i!=false){m=$$t.$g7.g(i);a.ad().h("noAdjustHandles",m)}if(j!=false){m=$$t.$g7.g(j);a.ad().h("noChangeArrowheads",m)}if(k!=false){m=$$t.$g7.g(k);a.ad().h("noChangeShapeType",m)}if(l!=false){m=$$t.$g7.g(l);a.ad().h("noCrop",m)}},it:function(a,b,c,d,e,f,g,h,i,j,k,l){b=$m($$t.$h3.$type,null);c=$m($$t.$h3.$type,null);d=$m($$t.$h2.$type,null);e=$m($$t.$h1.$type,null);f=$m($$t.$hv.$type,null);g=$m($$t.$gg.$type,null);h=$m($$0.$aq.$type,null);i=$m($$0.$aq.$type,null);j=$m($$t.$hy.$type,null);k=$m($$0.$aq.$type,null);l=$m($$0.$aq.$type,null);var n=a.ab().u.getEnumerator();while(n.moveNext()){var m=n.current();switch(m.a.e(a.d())){case"marL":b=$m($$t.$h3.$type,$$t.$h3.c(m.d));break;case"marR":c=$m($$t.$h3.$type,$$t.$h3.c(m.d));break;case"lvl":d=$m($$t.$h2.$type,$$t.$h2.c(m.d));break;case"indent":e=$m($$t.$h1.$type,$$t.$h1.c(m.d));break;case"algn":f=$m($$t.$hv.$type,$$t.$i9.b($$t.$hv.$type,m.d,null));break;case"defTabSz":g=$m($$t.$gg.$type,$$t.$gg.g(m.d));break;case"rtl":h=$m($$0.$aq.$type,$$t.$g7.e(m.d));break;case"eaLnBrk":i=$m($$0.$aq.$type,$$t.$g7.e(m.d));break;case"fontAlgn":j=$m($$t.$hy.$type,$$t.$i9.b($$t.$hy.$type,m.d,null));break;case"latinLnBrk":k=$m($$0.$aq.$type,$$t.$g7.e(m.d));break;case"hangingPunct":l=$m($$0.$aq.$type,$$t.$g7.e(m.d));break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l}},lt:function(a,b,c,d,e,f,g,h,i,j,k,l){a.ad().p($$t.$iv.er,"a");var m;if($l(b,null)){m=b.value().toString();a.ad().h("marL",m)}if($l(c,null)){m=c.value().toString();a.ad().h("marR",m)}if($l(d,null)){m=d.value().toString();a.ad().h("lvl",m)}if($l(e,null)){m=e.value().toString();a.ad().h("indent",m)}if($l(f,null)){m=$$t.$i9.f($$t.$hv.$type,f.value());a.ad().h("algn",m)}if($l(g,null)){m=g.value().toString();a.ad().h("defTabSz",m)}if($l(h,null)){m=$$t.$g7.g(h.value());a.ad().h("rtl",m)}if($l(i,null)){m=$$t.$g7.g(i.value());a.ad().h("eaLnBrk",m)}if($l(j,null)){m=$$t.$i9.f($$t.$hy.$type,j.value());a.ad().h("fontAlgn",m)}if($l(k,null)){m=$$t.$g7.g(k.value());a.ad().h("latinLnBrk",m)}if($l(l,null)){m=$$t.$g7.g(l.value());a.ad().h("hangingPunct",m)}},iu:function(a,b){b=0;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"prst":b=$$t.$i9.b($$v.$cf.$type,c.d,b);break;default:break}}return{p1:b}},lu:function(a,b){a.ad().p($$t.$iv.et,"a");var c;c=$$t.$i9.f($$v.$cf.$type,b);a.ad().h("prst",c)},iv:function(a,b){var c=$$t.$iv.g6(a,$$t.$iv.ew,b);b=c.p2;return{p1:b}},lv:function(a,b){$$t.$iv.j8(a,$$t.$iv.ew,b)},iw:function(a,b){var c=$$t.$iv.g6(a,$$t.$iv.ex,b);b=c.p2;return{p1:b}},lw:function(a,b){$$t.$iv.j8(a,$$t.$iv.ex,b)},ix:function(a,b){var c=$$t.$iv.g6(a,$$t.$iv.ey,b);b=c.p2;return{p1:b}},lx:function(a,b){$$t.$iv.j8(a,$$t.$iv.ey,b)},iy:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},ly:function(a){a.ad().p($$t.$iv.eu,"a")},iz:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){b=$m($$0.$aq.$type,null);c=null;d=null;e=$m($$t.$hz.$type,null);f=$m($$0.$aq.$type,null);g=$m($$0.$aq.$type,null);h=$m($$t.$h7.$type,null);i=$m($$t.$h6.$type,null);j=$m($$0.$aw.$type,null);k=$m($$t.$hx.$type,null);l=$m($$t.$h4.$type,null);m=$m($$0.$aq.$type,null);n=$m($$t.$hb.$type,null);o=$m($$0.$aq.$type,null);p=true;q=false;r=true;s=0;t=null;var v=a.ab().u.getEnumerator();while(v.moveNext()){var u=v.current();switch(u.a.e(a.d())){case"kumimoji":b=$m($$0.$aq.$type,$$t.$g7.e(u.d));break;case"lang":c=u.d;break;case"altLang":d=u.d;break;case"sz":e=$m($$t.$hz.$type,$$t.$hz.c(u.d));break;case"b":f=$m($$0.$aq.$type,$$t.$g7.e(u.d));break;case"i":g=$m($$0.$aq.$type,$$t.$g7.e(u.d));break;case"u":h=$m($$t.$h7.$type,$$t.$i9.b($$t.$h7.$type,u.d,null));break;case"strike":i=$m($$t.$h6.$type,$$t.$i9.b($$t.$h6.$type,u.d,null));break;case"kern":j=$m($$0.$aw.$type,$aa(u.d,$$0.$cg.invariantCulture()));break;case"cap":k=$m($$t.$hx.$type,$$t.$i9.b($$t.$hx.$type,u.d,null));break;case"spc":l=$m($$t.$h4.$type,$$t.$h4.a(u.d));break;case"normalizeH":m=$m($$0.$aq.$type,$$t.$g7.e(u.d));break;case"baseline":n=$m($$t.$hb.$type,$$t.$hb.c(u.d,a.d()._conformance()));break;case"noProof":o=$m($$0.$aq.$type,$$t.$g7.e(u.d));break;case"dirty":p=$$t.$g7.e(u.d);break;case"err":q=$$t.$g7.e(u.d);break;case"smtClean":r=$$t.$g7.e(u.d);break;case"smtId":s=$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture());break;case"bmk":t=u.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n,p14:o,p15:p,p16:q,p17:r,p18:s,p19:t}},lz:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){a.ad().p($$t.$iv.e2,"a");var u;if($l(b,null)){u=$$t.$g7.g(b.value());a.ad().h("kumimoji",u)}u=c;a.ad().h("lang",u);u=d;a.ad().h("altLang",u);if($l(e,null)){u=e.value().toString();a.ad().h("sz",u)}if($l(f,null)){u=$$t.$g7.g(f.value());a.ad().h("b",u)}if($l(g,null)){u=$$t.$g7.g(g.value());a.ad().h("i",u)}if($l(h,null)){u=$$t.$i9.f($$t.$h7.$type,h.value());a.ad().h("u",u)}if($l(i,null)){u=$$t.$i9.f($$t.$h6.$type,i.value());a.ad().h("strike",u)}if($l(j,null)){u=j.value().toString();a.ad().h("kern",u)}if($l(k,null)){u=$$t.$i9.f($$t.$hx.$type,k.value());a.ad().h("cap",u)}if($l(l,null)){u=l.value().toString();a.ad().h("spc",u)}if($l(m,null)){u=$$t.$g7.g(m.value());a.ad().h("normalizeH",u)}if($$t.$hb.g(n,$m($$t.$hb.$type,null))){u=n.value().p(a.d()._conformance());a.ad().h("baseline",u)}if($l(o,null)){u=$$t.$g7.g(o.value());a.ad().h("noProof",u)}if(p!=true){u=$$t.$g7.g(p);a.ad().h("dirty",u)}if(q!=false){u=$$t.$g7.g(q);a.ad().h("err",u)}if(r!=true){u=$$t.$g7.g(r);a.ad().h("smtClean",u)}if(s!=0){u=s.toString();a.ad().h("smtId",u)}u=t;a.ad().h("bmk",u)},i0:function(a,b){var c=$$t.$iv.g6(a,$$t.$iv.e5,b);b=c.p2;return{p1:b}},l0:function(a,b){$$t.$iv.j8(a,$$t.$iv.e5,b)},i1:function(a,b){var c=$$t.$iv.g6(a,$$t.$iv.e6,b);b=c.p2;return{p1:b}},l1:function(a,b){$$t.$iv.j8(a,$$t.$iv.e6,b)},i2:function(a,b){var c=$$t.$iv.g6(a,$$t.$iv.e7,b);b=c.p2;return{p1:b}},l2:function(a,b){$$t.$iv.j8(a,$$t.$iv.e7,b)},i3:function(a,b){b=0;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"val":b=$$t.$i9.b($$t.$hk.$type,c.d,b);break;default:break}}return{p1:b}},l3:function(a,b){a.ad().p($$t.$iv.e8,"a");var c;c=$$t.$i9.f($$t.$hk.$type,b);a.ad().h("val",c)},i4:function(a,b){var c=$$t.$iv.g9(a,$$t.$iv.fa,b);b=c.p2;return{p1:b}},l4:function(a,b){$$t.$iv.kb(a,$$t.$iv.fa,b)},i5:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},l5:function(a){a.ad().p($$t.$iv.fd,"a")},i6:function(a,b,c,d,e,f,g,h,i,j,k,l){b=false;c=false;d=false;e=false;f=false;g=false;h=false;i=false;j=false;k=false;l=false;var n=a.ab().u.getEnumerator();while(n.moveNext()){var m=n.current();switch(m.a.e(a.d())){case"noGrp":b=$$t.$g7.e(m.d);break;case"noSelect":c=$$t.$g7.e(m.d);break;case"noRot":d=$$t.$g7.e(m.d);break;case"noChangeAspect":e=$$t.$g7.e(m.d);break;case"noMove":f=$$t.$g7.e(m.d);break;case"noResize":g=$$t.$g7.e(m.d);break;case"noEditPoints":h=$$t.$g7.e(m.d);break;case"noAdjustHandles":i=$$t.$g7.e(m.d);break;case"noChangeArrowheads":j=$$t.$g7.e(m.d);break;case"noChangeShapeType":k=$$t.$g7.e(m.d);break;case"noTextEdit":l=$$t.$g7.e(m.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l}},l6:function(a,b,c,d,e,f,g,h,i,j,k,l){a.ad().p($$t.$iv.fh,"a");var m;if(b!=false){m=$$t.$g7.g(b);a.ad().h("noGrp",m)}if(c!=false){m=$$t.$g7.g(c);a.ad().h("noSelect",m)}if(d!=false){m=$$t.$g7.g(d);a.ad().h("noRot",m)}if(e!=false){m=$$t.$g7.g(e);a.ad().h("noChangeAspect",m)}if(f!=false){m=$$t.$g7.g(f);a.ad().h("noMove",m)}if(g!=false){m=$$t.$g7.g(g);a.ad().h("noResize",m)}if(h!=false){m=$$t.$g7.g(h);a.ad().h("noEditPoints",m)}if(i!=false){m=$$t.$g7.g(i);a.ad().h("noAdjustHandles",m)}if(j!=false){m=$$t.$g7.g(j);a.ad().h("noChangeArrowheads",m)}if(k!=false){m=$$t.$g7.g(k);a.ad().h("noChangeShapeType",m)}if(l!=false){m=$$t.$g7.g(l);a.ad().h("noTextEdit",m)}},i7:function(a,b,c,d,e){var f=$$t.$iv.hc(a,$$t.$iv.fi,b,c,d,e);b=f.p2;c=f.p3;d=f.p4;e=f.p5;return{p1:b,p2:c,p3:d,p4:e}},l7:function(a,b,c,d,e){$$t.$iv.ke(a,$$t.$iv.fi,b,c,d,e)},i8:function(a,b){b=$$t.$gv.a;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"val":b=$$t.$gv.d(c.d);break;default:break}}return{p1:b}},l8:function(a,b){a.ad().p($$t.$iv.fj,"a");var c;c=b.toString();a.ad().h("val",c)},i9:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},l9:function(a){a.ad().p($$t.$iv.fk,"a")},ja:function(a,b,c){b=0;c=$$t.$gv.a;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"val":b=$$t.$i9.b($$t.$hu.$type,d.d,b);break;case"lastClr":c=$$t.$gv.d(d.d);break;default:break}}return{p1:b,p2:c}},ma:function(a,b,c){a.ad().p($$t.$iv.fo,"a");var d;d=$$t.$i9.f($$t.$hu.$type,b);a.ad().h("val",d);d=c.toString();a.ad().h("lastClr",d)},jb:function(a,b,c,d){var e=$$t.$iv.g4(a,$$t.$iv.fs,b,c,d);b=e.p2;c=e.p3;d=e.p4;return{p1:b,p2:c,p3:d}},mb:function(a,b,c,d){$$t.$iv.j6(a,$$t.$iv.fs,b,c,d)},jc:function(a,b){var c=$$t.$io.u(a,$$t.$iv.fq,b,6);b=c.p2;return{p1:b}},mc:function(a,b){$$t.$io.ai(a,$$t.$iv.fq,"a",b,null,6)},jd:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"name":b=c.d;break;default:break}}return{p1:b}},md:function(a,b){a.ad().p($$t.$iv.fu,"a");var c;c=b;a.ad().h("name",c);a.ad().l($$t.$iy.an,true)},je:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},me:function(a){a.ad().p($$t.$iv.fv,"a")},jf:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},mf:function(a){a.ad().p($$t.$iv.fw,"a")},jg:function(a,b){var c=$$t.$iv.g9(a,$$t.$iv.fy,b);b=c.p2;return{p1:b}},mg:function(a,b){$$t.$iv.kb(a,$$t.$iv.fy,b)},jh:function(a,b,c,d){b=$$v.$cc.a(0);c=false;d=false;var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case"rot":b=$$v.$cc.b(e.d);break;case"flipH":c=$$t.$g7.e(e.d);break;case"flipV":d=$$t.$g7.e(e.d);break;default:break}}return{p1:b,p2:c,p3:d}},mh:function(a,b,c,d){a.ad().p($$t.$iv.ge,"a");var e;if(b.l()!=0){e=b.toString();a.ad().h("rot",e)}if(c!=false){e=$$t.$g7.g(c);a.ad().h("flipH",e)}if(d!=false){e=$$t.$g7.g(d);a.ad().h("flipV",e)}},$type:new $.ig.Type("DrawingMLMain",$$t.$i9.$type)},true);$c("DrawingNamespaceDefinitionBase:iw","XmlNamespaceDefinitionBase",{an:null,ap:null,aq:null,ar:null,as:null,at:null,au:null,av:null,aw:null,ay:null,a3:null,a4:null,a5:null,a6:null,bn:null,bo:null,bp:null,bq:null,br:null,bs:null,bw:null,bx:null,by:null,bz:null,b1:null,b3:null,init:function(){$$t.$i9.init.call(this);this.an=this.ba()+"/blipFill";this.ap=this.ba()+"/cNvCxnSpPr";this.aq=this.ba()+"/cNvGraphicFramePr";this.ar=this.ba()+"/cNvGrpSpPr";this.as=this.ba()+"/cNvPicPr";this.at=this.ba()+"/cNvPr";this.au=this.ba()+"/cNvSpPr";this.av=this.ba()+"/cxnSp";this.aw=this.ba()+"/cxnSpLocks";this.ay=this.ba()+"/endCxn";this.a3=this.ba()+"/graphicFrame";this.a4=this.ba()+"/grpSp";this.a5=this.ba()+"/grpSpLocks";this.a6=this.ba()+"/grpSpPr";this.bn=this.ba()+"/nvCxnSpPr";this.bo=this.ba()+"/nvGraphicFramePr";this.bp=this.ba()+"/nvGrpSpPr";this.bq=this.ba()+"/nvPicPr";this.br=this.ba()+"/nvSpPr";this.bs=this.ba()+"/pic";this.bw=this.ba()+"/sp";this.bx=this.ba()+"/spPr";this.by=this.ba()+"/stCxn";this.bz=this.ba()+"/style";this.b1=this.ba()+"/txBody";this.b3=this.ba()+"/xfrm"},i:function(a){switch(a){case 0:return this.bb();case 1:return this.ba();default:return this.bb()}},cb:function(a,b,c,d){c=0;d=0;var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case"id":c=$.ig.util.parseUInt32_1(e.d,$$0.$cg.invariantCulture());break;case"idx":d=$.ig.util.parseUInt32_1(e.d,$$0.$cg.invariantCulture());break;default:break}}return{p2:c,p3:d}},c2:function(a,b,c,d){a.ad().p(b,this.j());var e;if(c!=0){e=c.toString();a.ad().h("id",e)}if(d!=0){e=d.toString();a.ad().h("idx",e)}},da:function(a,b){if(String.isNullOrEmpty(b)){return}$$t.$iw.da(a,b)},b4:function(a,b,c){b=$m($$0.$be.$type,null);c=$m($$0.$aq.$type,null);var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"dpi":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(d.d,$$0.$cg.invariantCulture()));break;case"rotWithShape":c=$m($$0.$aq.$type,$$t.$g7.e(d.d));break;default:break}}return{p1:b,p2:c}},cv:function(a,b,c){a.ad().p(this.an,this.j());var d;if($l(b,null)){d=b.value().toString();a.ad().h("dpi",d)}if($l(c,null)){d=$$t.$g7.g(c.value());a.ad().h("rotWithShape",d)}},b5:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},cw:function(a){a.ad().p(this.ap,this.j())},b6:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},cx:function(a){a.ad().p(this.aq,this.j())},b7:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},cy:function(a){a.ad().p(this.ar,this.j())},b8:function(a,b){b=true;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"preferRelativeResize":b=$$t.$g7.e(c.d);break;default:break}}return{p1:b}},cz:function(a,b){a.ad().p(this.as,this.j());var c;if(b!=true){c=$$t.$g7.g(b);a.ad().h("preferRelativeResize",c)}},b9:function(a,b,c,d,e,f){var g=$$t.$iv.g5(a,this.at,b,c,d,e,f);b=g.p2;c=g.p3;d=g.p4;e=g.p5;f=g.p6;return{p1:b,p2:c,p3:d,p4:e,p5:f}},c0:function(a,b,c,d,e,f){$$t.$iv.j7(a,this.at,b,c,d,e,f)},ca:function(a,b){b=false;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"txBox":b=$$t.$g7.e(c.d);break;default:break}}return{p1:b}},c1:function(a,b){a.ad().p(this.au,this.j());var c;if(b!=false){c=$$t.$g7.g(b);a.ad().h("txBox",c)}},cc:function(a,b,c){b=null;c=false;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"macro":b=d.d;break;case"fPublished":c=$$t.$g7.e(d.d);break;default:break}}return{p1:b,p2:c}},c3:function(a,b,c){a.ad().p(this.av,this.j());var d;d=b;$$t.$iw.da(a,d);if(c!=false){d=$$t.$g7.g(c);a.ad().h("fPublished",d)}},cd:function(a,b,c,d,e,f,g,h,i,j,k){b=false;c=false;d=false;e=false;f=false;g=false;h=false;i=false;j=false;k=false;var m=a.ab().u.getEnumerator();while(m.moveNext()){var l=m.current();switch(l.a.e(a.d())){case"noGrp":b=$$t.$g7.e(l.d);break;case"noSelect":c=$$t.$g7.e(l.d);break;case"noRot":d=$$t.$g7.e(l.d);break;case"noChangeAspect":e=$$t.$g7.e(l.d);break;case"noMove":f=$$t.$g7.e(l.d);break;case"noResize":g=$$t.$g7.e(l.d);break;case"noEditPoints":h=$$t.$g7.e(l.d);break;case"noAdjustHandles":i=$$t.$g7.e(l.d);break;case"noChangeArrowheads":j=$$t.$g7.e(l.d);break;case"noChangeShapeType":k=$$t.$g7.e(l.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k}},c4:function(a,b,c,d,e,f,g,h,i,j,k){a.ad().p(this.aw,this.j());var l;if(b!=false){l=$$t.$g7.g(b);a.ad().h("noGrp",l)}if(c!=false){l=$$t.$g7.g(c);a.ad().h("noSelect",l)}if(d!=false){l=$$t.$g7.g(d);a.ad().h("noRot",l)}if(e!=false){l=$$t.$g7.g(e);a.ad().h("noChangeAspect",l)}if(f!=false){l=$$t.$g7.g(f);a.ad().h("noMove",l)}if(g!=false){l=$$t.$g7.g(g);a.ad().h("noResize",l)}if(h!=false){l=$$t.$g7.g(h);a.ad().h("noEditPoints",l)}if(i!=false){l=$$t.$g7.g(i);a.ad().h("noAdjustHandles",l)}if(j!=false){l=$$t.$g7.g(j);a.ad().h("noChangeArrowheads",l)}if(k!=false){l=$$t.$g7.g(k);a.ad().h("noChangeShapeType",l)}},ce:function(a,b,c){var d=this.cb(a,this.ay,b,c);b=d.p2;c=d.p3;return{p1:b,p2:c}},c5:function(a,b,c){this.c2(a,this.ay,b,c)},cf:function(a,b,c){b=null;c=false;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"macro":b=d.d;break;case"fPublished":c=$$t.$g7.e(d.d);break;default:break}}return{p1:b,p2:c}},c6:function(a,b,c){a.ad().p(this.a3,this.j());var d;d=b;$$t.$iw.da(a,d);if(c!=false){d=$$t.$g7.g(c);a.ad().h("fPublished",d)}},cg:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},c7:function(a){a.ad().p(this.a4,this.j())},ch:function(a,b,c,d,e,f,g,h){b=false;c=false;d=false;e=false;f=false;g=false;h=false;var j=a.ab().u.getEnumerator();while(j.moveNext()){var i=j.current();switch(i.a.e(a.d())){case"noGrp":b=$$t.$g7.e(i.d);break;case"noUngrp":c=$$t.$g7.e(i.d);break;case"noSelect":d=$$t.$g7.e(i.d);break;case"noRot":e=$$t.$g7.e(i.d);break;case"noChangeAspect":f=$$t.$g7.e(i.d);break;case"noMove":g=$$t.$g7.e(i.d);break;case"noResize":h=$$t.$g7.e(i.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h}},c8:function(a,b,c,d,e,f,g,h){a.ad().p(this.a5,this.j());var i;if(b!=false){i=$$t.$g7.g(b);a.ad().h("noGrp",i)}if(c!=false){i=$$t.$g7.g(c);a.ad().h("noUngrp",i)}if(d!=false){i=$$t.$g7.g(d);a.ad().h("noSelect",i)}if(e!=false){i=$$t.$g7.g(e);a.ad().h("noRot",i)}if(f!=false){i=$$t.$g7.g(f);a.ad().h("noChangeAspect",i)}if(g!=false){i=$$t.$g7.g(g);a.ad().h("noMove",i)}if(h!=false){i=$$t.$g7.g(h);a.ad().h("noResize",i)}},ci:function(a,b){b=$m($$t.$f8.$type,null);var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"bwMode":b=$m($$t.$f8.$type,$$t.$i9.b($$t.$f8.$type,c.d,null));break;default:break}}return{p1:b}},c9:function(a,b){a.ad().p(this.a6,this.j());var c;if($l(b,null)){c=$$t.$i9.f($$t.$f8.$type,b.value());a.ad().h("bwMode",c)}},cj:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},db:function(a){a.ad().p(this.bn,this.j())},ck:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},dc:function(a){a.ad().p(this.bo,this.j())},cl:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},dd:function(a){a.ad().p(this.bp,this.j())},cm:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},de:function(a){a.ad().p(this.bq,this.j())},cn:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},df:function(a){a.ad().p(this.br,this.j())},co:function(a,b,c){b="";c=false;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"macro":b=d.d;break;case"fPublished":c=$$t.$g7.e(d.d);break;default:break}}return{p1:b,p2:c}},dg:function(a,b,c){a.ad().p(this.bs,this.j());var d;d=b;$$t.$iw.da(a,d);if(c!=false){d=$$t.$g7.g(c);a.ad().h("fPublished",d)}},cp:function(a,b,c,d,e){b=null;c=null;d=true;e=false;var g=a.ab().u.getEnumerator();while(g.moveNext()){var f=g.current();switch(f.a.e(a.d())){case"macro":b=f.d;break;case"textlink":c=f.d;break;case"fLocksText":d=$$t.$g7.e(f.d);break;case"fPublished":e=$$t.$g7.e(f.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e}},dh:function(a,b,c,d,e){a.ad().p(this.bw,this.j());var f;f=b;$$t.$iw.da(a,f);f=c;a.ad().h("textlink",f);if(d!=true){f=$$t.$g7.g(d);a.ad().h("fLocksText",f)}if(e!=false){f=$$t.$g7.g(e);a.ad().h("fPublished",f)}},cq:function(a,b){b=$m($$t.$f8.$type,null);var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"bwMode":b=$m($$t.$f8.$type,$$t.$i9.b($$t.$f8.$type,c.d,null));break;default:break}}return{p1:b}},di:function(a,b){a.ad().p(this.bx,this.j());var c;if($l(b,null)){c=$$t.$i9.f($$t.$f8.$type,b.value());a.ad().h("bwMode",c)}},cr:function(a,b,c){var d=this.cb(a,this.by,b,c);b=d.p2;c=d.p3;return{p1:b,p2:c}},dj:function(a,b,c){this.c2(a,this.by,b,c)},cs:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},dk:function(a){a.ad().p(this.bz,this.j())},ct:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},dl:function(a){a.ad().p(this.b1,this.j())},cu:function(a,b,c,d){b=$$v.$cc.a(0);c=false;d=false;var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case"rot":b=$$v.$cc.b(e.d);break;case"flipH":c=$$t.$g7.e(e.d);break;case"flipV":d=$$t.$g7.e(e.d);break;default:break}}return{p1:b,p2:c,p3:d}},dm:function(a,b,c,d){a.ad().p(this.b3,this.j());var e;if(b.l()!=0){e=b.toString();a.ad().h("rot",e)}if(c!=false){e=$$t.$g7.g(c);a.ad().h("flipH",e)}if(d!=false){e=$$t.$g7.g(d);a.ad().h("flipV",e)}},ba:function(){},bb:function(){},$type:new $.ig.Type("DrawingNamespaceDefinitionBase",$$t.$i9.$type)},true);$c("EmptyNamespace:ix","XmlNamespaceDefinitionBase",{init:function(){$$t.$i9.init.call(this)},i:function(a){return String.empty()},j:function(){return String.empty()},ap:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},aq:function(a,b,c){a.ad().o("xml");var d=a.d()._conformance();a.ad().l($$t.$i7.an,false);a.ad().l($$t.$i6.an,false)},$type:new $.ig.Type("EmptyNamespace",$$t.$i9.$type)},true);$c("IGOfficeExtensions:iy","XmlNamespaceDefinitionBase",{init:function(){$$t.$i9.init.call(this)},i:function(a){return $$t.$iy.ar},j:function(){return"ig"},$type:new $.ig.Type("IGOfficeExtensions",$$t.$i9.$type)},true);$c("MarkupCompatibility2006:iz","XmlNamespaceDefinitionBase",{init:function(){$$t.$i9.init.call(this)},i:function(a){return $$t.$iz.at},j:function(){return"mc"},av:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},ay:function(a){a.ad().p($$t.$iz.ap,"mc")},aw:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"Requires":b=c.d;break;default:break}}return{p1:b}},az:function(a,b){$$t.$iz.a0(a,$.ig.util.stringJoin1(String," ",$$5.$e.o($$t.$i9.$type,String,b,function(c){return c.j()})))},a0:function(a,b){a.ad().p($$t.$iz.aq,"mc");var c;c=b;a.ad().h("Requires",c)},ax:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},a1:function(a){a.ad().p($$t.$iz.ar,"mc")},$type:new $.ig.Type("MarkupCompatibility2006",$$t.$i9.$type)},true);$c("OfficeDocumentDocPropsVTypes:i0","XmlNamespaceDefinitionBase",{init:function(){$$t.$i9.init.call(this)},i:function(a){switch(a){case 0:return $$t.$i0.a1;case 1:return $$t.$i0.a0;default:return $$t.$i0.a1}},j:function(){return"vt"},bt:function(a,b){var c=$$t.$i4.o(a,$$t.$i0.at,b);b=c.p2;return{p1:b}},cf:function(a,b){$$t.$i4.ac(a,$$t.$i0.at,"vt",b)},bu:function(a,b){var c=$$t.$i4.o(a,$$t.$i0.ao,b);b=c.p2;return{p1:b}},cg:function(a,b){$$t.$i4.ac(a,$$t.$i0.ao,"vt",b)},bv:function(a,b){var c=$$t.$i4.m(a,$$t.$i0.au,b);b=c.p2;return{p1:b}},ch:function(a,b){$$t.$i4.aa(a,$$t.$i0.au,"vt",b)},bw:function(a,b){var c=$$t.$i4.t(a,$$t.$i0.av,b);b=c.p2;return{p1:b}},ci:function(a,b){$$t.$i4.ah(a,$$t.$i0.av,"vt",b)},bx:function(a,b){var c=$$t.$i4.r(a,$$t.$i0.aw,b);b=c.p2;return{p1:b}},cj:function(a,b){$$t.$i4.af(a,$$t.$i0.aw,"vt",b)},by:function(a,b){var c=$$t.$i4.s(a,$$t.$i0.ax,b);b=c.p2;return{p1:b}},ck:function(a,b){$$t.$i4.ag(a,$$t.$i0.ax,"vt",b)},bz:function(a,b){var c=$$t.$i4.r(a,$$t.$i0.ap,b);b=c.p2;return{p1:b}},cl:function(a,b){$$t.$i4.af(a,$$t.$i0.ap,"vt",b)},b0:function(a,b){var c=$$t.$i4.u(a,$$t.$i0.ay,b,0);b=c.p2;return{p1:b}},cm:function(a,b){$$t.$i4.ai(a,$$t.$i0.ay,"vt",b,null,0)},b1:function(a,b){var c=$$t.$i4.u(a,$$t.$i0.az,b,0);b=c.p2;return{p1:b}},cn:function(a,b){$$t.$i4.ai(a,$$t.$i0.az,"vt",b,null,0)},b2:function(a,b){var c=$$t.$i4.q(a,$$t.$i0.a2,b);b=c.p2;return{p1:b}},co:function(a,b){$$t.$i4.ae(a,$$t.$i0.a2,"vt",b)},b3:function(a,b){var c=$$t.$i4.p(a,$$t.$i0.a3,b);b=c.p2;return{p1:b}},cp:function(a,b){$$t.$i4.ad(a,$$t.$i0.a3,"vt",b)},b4:function(a,b){var c=$$t.$i4.v(a,$$t.$i0.a5,b);b=c.p2;return{p1:b}},cq:function(a,b){$$t.$i4.aj(a,$$t.$i0.a5,"vt",b)},b5:function(a,b){var c=$$t.$i4.y(a,$$t.$i0.a6,b);b=c.p2;return{p1:b}},cr:function(a,b){$$t.$i4.am(a,$$t.$i0.a6,"vt",b)},b6:function(a,b){var c=$$t.$i4.w(a,$$t.$i0.a7,b);b=c.p2;return{p1:b}},cs:function(a,b){$$t.$i4.ak(a,$$t.$i0.a7,"vt",b)},b7:function(a,b){var c=$$t.$i4.x(a,$$t.$i0.a8,b);b=c.p2;return{p1:b}},ct:function(a,b){$$t.$i4.al(a,$$t.$i0.a8,"vt",b)},b8:function(a,b){var c=$$t.$i4.w(a,$$t.$i0.a7,b);b=c.p2;return{p1:b}},cu:function(a,b){$$t.$i4.ak(a,$$t.$i0.a7,"vt",b)},b9:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},cv:function(a){a.ad().p($$t.$i0.a9,"vt")},ca:function(a,b,c){b=0;c=0;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"baseType":b=$$t.$i9.b($$t.$ik.$type,d.d,b);break;case"size":c=$.ig.util.parseUInt32_1(d.d,$$0.$cg.invariantCulture());break;default:break}}return{p1:b,p2:c}},cw:function(a,b,c){a.ad().p($$t.$i0.ba,"vt");var d;d=$$t.$i9.f($$t.$ik.$type,b);a.ad().h("baseType",d);d=c.toString();a.ad().h("size",d)},bb:function(a){var b=a.s().a($$t.$i2.$type);if(b==null){return}var c;var d=$$t.$i0.bu(a,c);c=d.p1;b.setValue(c,a.ab().ab)},bc:function(a){var b=a.s().a($$t.$i2.$type);if(b==null){return}var c;var d=$$t.$i0.bu(a,c);c=d.p1;b.setValue(c,a.ab().ab)},bd:function(a){var b=a.s().a($$t.$i2.$type);if(b==null){return}var c;var d=$$t.$i0.bv(a,c);c=d.p1;b.setValue(c,a.ab().ab)},be:function(a){var b=a.s().a($$t.$i2.$type);if(b==null){return}var c;var d=$$t.$i0.bw(a,c);c=d.p1;b.setValue(c,a.ab().ab)},bf:function(a){var b=a.s().a($$t.$i2.$type);if(b==null){return}var c;var d=$$t.$i0.bx(a,c);c=d.p1;b.setValue(c,a.ab().ab)},bg:function(a){var b=a.s().a($$t.$i2.$type);if(b==null){return}var c;var d=$$t.$i0.by(a,c);c=d.p1;b.setValue(c,a.ab().ab)},bh:function(a){var b=a.s().a($$t.$i2.$type);if(b==null){return}var c;var d=$$t.$i0.bz(a,c);c=d.p1;b.setValue(c,a.ab().ab)},bi:function(a){var b=a.s().a($$t.$i2.$type);if(b==null){return}var c;var d=$$t.$i0.b0(a,c);c=d.p1;b.setValue(c,a.ab().ab)},bj:function(a){var b=a.s().a($$t.$i2.$type);if(b==null){return}var c;var d=$$t.$i0.b1(a,c);c=d.p1;b.setValue(c,a.ab().ab)},bk:function(a){var b=a.s().a($$t.$i2.$type);if(b==null){return}var c;var d=$$t.$i0.b2(a,c);c=d.p1;b.setValue(c,a.ab().ab)},bl:function(a){var b=a.s().a($$t.$i2.$type);if(b==null){return}var c;var d=$$t.$i0.b3(a,c);c=d.p1;b.setValue(c,a.ab().ab)},bm:function(a){var b=a.s().a($$t.$i2.$type);if(b==null){return}var c;var d=$$t.$i0.b4(a,c);c=d.p1;b.setValue(c,a.ab().ab)},bn:function(a){var b=a.s().a($$t.$i2.$type);if(b==null){return}var c;var d=$$t.$i0.b5(a,c);c=d.p1;b.setValue(c,a.ab().ab)},bo:function(a){var b=a.s().a($$t.$i2.$type);if(b==null){return}var c;var d=$$t.$i0.b6(a,c);c=d.p1;b.setValue(c,a.ab().ab)},bp:function(a){var b=a.s().a($$t.$i2.$type);if(b==null){return}var c;var d=$$t.$i0.b7(a,c);c=d.p1;b.setValue(c,a.ab().ab)},bq:function(a){var b=a.s().a($$t.$i2.$type);if(b==null){return}var c;var d=$$t.$i0.b8(a,c);c=d.p1;b.setValue(c,a.ab().ab)},br:function(a){var b=a.s().a($$t.$i2.$type);if(b==null){return}var c=new $$t.i3(b,a.ab().ab);a.s().j(c)},bs:function(a){var b;var c;var d=$$t.$i0.ca(a,b,c);b=d.p1;c=d.p2;var e=new $$t.i1(0,c,b);a.s().j(e)},cb:function(a){a.ax($$t.$i0.at,$$t.$i0.bb);a.ax($$t.$i0.ao,$$t.$i0.bc);a.ax($$t.$i0.au,$$t.$i0.bd);a.ax($$t.$i0.av,$$t.$i0.be);a.ax($$t.$i0.aw,$$t.$i0.bf);a.ax($$t.$i0.ax,$$t.$i0.bg);a.ax($$t.$i0.ap,$$t.$i0.bh);a.ax($$t.$i0.ay,$$t.$i0.bi);a.ax($$t.$i0.az,$$t.$i0.bj);a.ax($$t.$i0.a2,$$t.$i0.bk);a.ax($$t.$i0.a3,$$t.$i0.bl);a.ax($$t.$i0.a5,$$t.$i0.bm);a.ax($$t.$i0.a6,$$t.$i0.bn);a.ax($$t.$i0.a7,$$t.$i0.bo);a.ax($$t.$i0.a8,$$t.$i0.bp);a.ax($$t.$i0.ar,$$t.$i0.bq);a.ax($$t.$i0.a9,$$t.$i0.br);a.ax($$t.$i0.ba,$$t.$i0.bs)},cc:function(a,b){var c=$b(String,b);if(c!=null){$$t.$i0.cm(a,c)}else if(typeof b==="number"){$$t.$i0.cj(a,$h(b))}else if(typeof b==="number"){$$t.$i0.ch(a,$h(b))}else if(typeof b==="number"){$$t.$i0.ci(a,$h(b))}else if(typeof b==="number"){$$t.$i0.ck(a,$h(b))}else if(typeof b==="number"){$$t.$i0.cq(a,$h(b))}else if(typeof b==="number"){$$t.$i0.cr(a,$h(b))}else if(typeof b==="number"){$$t.$i0.cs(a,$h(b))}else if(typeof b==="number"){$$t.$i0.ct(a,$h(b))}else if(typeof b==="number"){$$t.$i0.co(a,b)}else if(typeof b==="number"){$$t.$i0.cp(a,b)}else if(typeof b==="number"){$$t.$i0.cg(a,b)}else{return}a.ad().k()},cd:function(a,b){$$t.$i0.cv(a);$$t.$i0.cc(a,b);a.ad().k()},ce:function(a,b){$$t.$i0.cw(a,b._baseType,$i(b._elements.length));if(b._baseType==0){$$v.$aq.am($.ig.$op.$type,b._elements,function(c){$$t.$i0.cd(a,c)})}else{$$v.$aq.am($.ig.$op.$type,b._elements,function(c){$$t.$i0.cc(a,c)})}a.ad().k()},$type:new $.ig.Type("OfficeDocumentDocPropsVTypes",$$t.$i9.$type)},true);$c("IVariantValueContainer:i2","Object",{$type:new $.ig.Type("IVariantValueContainer",null)},true);$c("OfficeDocumentDocPropsVTypes_VariantPlaceholder:i3","Object",{a:null,b:0,init:function(a,b){$.ig.$op.init.call(this);this.a=a;this.b=b},setValue:function(a,b){this.a.setValue(a,this.b)},$type:new $.ig.Type("OfficeDocumentDocPropsVTypes_VariantPlaceholder",$.ig.$ot,[$$t.$i2.$type])},true);$c("CT_Vector:i1","Object",{_baseType:0,_elements:null,init:function(a,b,c){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$.ig.$op.init.call(this);this._baseType=c;
this._elements=new Array(b)},init1:function(a,b,c){$.ig.$op.init.call(this);this._baseType=c;this._elements=b.toArray()},setValue:function(a,b){this._elements[b]=a},$type:new $.ig.Type("CT_Vector",$.ig.$ot,[$$t.$i2.$type])},true);$c("OfficeDocumentExtendedProperties:i4","XmlNamespaceDefinitionBase",{init:function(){$$t.$i9.init.call(this)},i:function(a){switch(a){case 0:return $$t.$i4.a4;case 1:return $$t.$i4.a3;default:return $$t.$i4.a4}},j:function(){return null},bh:function(a,b){var c=$$t.$i4.u(a,$$t.$i4.ap,b,0);b=c.p2;return{p1:b}},b8:function(a,b){$$t.$i4.ai(a,$$t.$i4.ap,null,b,null,0)},bi:function(a,b){var c=$$t.$i4.u(a,$$t.$i4.aq,b,0);b=c.p2;return{p1:b}},b9:function(a,b){$$t.$i4.ai(a,$$t.$i4.aq,null,b,null,0)},bj:function(a,b){var c=$$t.$i4.r(a,$$t.$i4.ar,b);b=c.p2;return{p1:b}},ca:function(a,b){$$t.$i4.af(a,$$t.$i4.ar,null,b)},bk:function(a,b){var c=$$t.$i4.r(a,$$t.$i4.as,b);b=c.p2;return{p1:b}},cb:function(a,b){$$t.$i4.af(a,$$t.$i4.as,null,b)},bl:function(a,b){var c=$$t.$i4.u(a,$$t.$i4.at,b,0);b=c.p2;return{p1:b}},cc:function(a,b){$$t.$i4.ai(a,$$t.$i4.at,null,b,null,0)},bm:function(a,b){var c=$$t.$i4.r(a,$$t.$i4.au,b);b=c.p2;return{p1:b}},cd:function(a,b){$$t.$i4.af(a,$$t.$i4.au,null,b)},bn:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},ce:function(a){a.ad().p($$t.$i4.av,null)},bo:function(a,b){var c=$$t.$i4.r(a,$$t.$i4.aw,b);b=c.p2;return{p1:b}},cf:function(a,b){$$t.$i4.af(a,$$t.$i4.aw,null,b)},bp:function(a,b){var c=$$t.$i4.u(a,$$t.$i4.ax,b,0);b=c.p2;return{p1:b}},cg:function(a,b){$$t.$i4.ai(a,$$t.$i4.ax,null,b,null,0)},bq:function(a,b){var c=$$t.$i4.l(a,$$t.$i4.ay,b);b=c.p2;return{p1:b}},ch:function(a,b){$$t.$i4.z(a,$$t.$i4.ay,null,b)},br:function(a,b){var c=$$t.$i4.r(a,$$t.$i4.az,b);b=c.p2;return{p1:b}},ci:function(a,b){$$t.$i4.af(a,$$t.$i4.az,null,b)},bs:function(a,b){var c=$$t.$i4.l(a,$$t.$i4.a0,b);b=c.p2;return{p1:b}},cj:function(a,b){$$t.$i4.z(a,$$t.$i4.a0,null,b)},bt:function(a,b){var c=$$t.$i4.u(a,$$t.$i4.a1,b,0);b=c.p2;return{p1:b}},ck:function(a,b){$$t.$i4.ai(a,$$t.$i4.a1,null,b,null,0)},bu:function(a,b){var c=$$t.$i4.r(a,$$t.$i4.a2,b);b=c.p2;return{p1:b}},cl:function(a,b){$$t.$i4.af(a,$$t.$i4.a2,null,b)},bv:function(a,b){var c=$$t.$i4.r(a,$$t.$i4.a5,b);b=c.p2;return{p1:b}},cm:function(a,b){$$t.$i4.af(a,$$t.$i4.a5,null,b)},bw:function(a,b){var c=$$t.$i4.r(a,$$t.$i4.a6,b);b=c.p2;return{p1:b}},cn:function(a,b){$$t.$i4.af(a,$$t.$i4.a6,null,b)},bx:function(a,b){var c=$$t.$i4.r(a,$$t.$i4.a7,b);b=c.p2;return{p1:b}},co:function(a,b){$$t.$i4.af(a,$$t.$i4.a7,null,b)},by:function(a,b){var c=$$t.$i4.u(a,$$t.$i4.a8,b,0);b=c.p2;return{p1:b}},cp:function(a,b){$$t.$i4.ai(a,$$t.$i4.a8,null,b,null,0)},bz:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},cq:function(a){a.ad().p($$t.$i4.a9,null);var b=a.d()._conformance();a.ad().l($$t.$i4.an,false);a.ad().l($$t.$i0.an,false)},b0:function(a,b){var c=$$t.$i4.l(a,$$t.$i4.ba,b);b=c.p2;return{p1:b}},cr:function(a,b){$$t.$i4.z(a,$$t.$i4.ba,null,b)},b1:function(a,b){var c=$$t.$i4.l(a,$$t.$i4.bb,b);b=c.p2;return{p1:b}},cs:function(a,b){$$t.$i4.z(a,$$t.$i4.bb,null,b)},b2:function(a,b){var c=$$t.$i4.r(a,$$t.$i4.bc,b);b=c.p2;return{p1:b}},b7:function(a,b){$$t.$i4.af(a,$$t.$i4.bc,null,b)},b3:function(a,b){var c=$$t.$i4.u(a,$$t.$i4.bd,b,0);b=c.p2;return{p1:b}},ct:function(a,b){$$t.$i4.ai(a,$$t.$i4.bd,null,b,null,0)},b4:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},cu:function(a){a.ad().p($$t.$i4.be,null)},b5:function(a,b){var c=$$t.$i4.r(a,$$t.$i4.bf,b);b=c.p2;return{p1:b}},cv:function(a,b){$$t.$i4.af(a,$$t.$i4.bf,null,b)},b6:function(a,b){var c=$$t.$i4.r(a,$$t.$i4.bg,b);b=c.p2;return{p1:b}},cw:function(a,b){$$t.$i4.af(a,$$t.$i4.bg,null,b)},$type:new $.ig.Type("OfficeDocumentExtendedProperties",$$t.$i9.$type)},true);$c("OfficeDocumentRelationships:i5","XmlNamespaceDefinitionBase",{init:function(){$$t.$i9.init.call(this)},i:function(a){switch(a){case 0:return $$t.$i5.au;case 1:return $$t.$i5.at;default:return $$t.$i5.au}},j:function(){return"r"},$type:new $.ig.Type("OfficeDocumentRelationships",$$t.$i9.$type)},true);$c("OfficeNamespace:i6","XmlNamespaceDefinitionBase",{init:function(){$$t.$i9.init.call(this)},i:function(a){switch(a){case 0:case 1:return"urn:schemas-microsoft-com:office:office";default:return"urn:schemas-microsoft-com:office:office"}},j:function(){return"o"},ch:function(a,b,c){b=$m($$t.$gm.$type,null);c=null;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"urn:schemas-microsoft-com:vml/ext":b=$m($$t.$gm.$type,$$t.$i9.b($$t.$gm.$type,d.d,null));break;case"data":c=d.d;break;default:break}}return{p1:b,p2:c}},ck:function(a,b,c){a.ad().p($$t.$i6.br,"o");var d;if($l(b,null)){d=$$t.$i9.f($$t.$gm.$type,b.value());a.ad().h("urn:schemas-microsoft-com:vml/ext",d)}d=c;a.ad().h("data",d)},ci:function(a,b,c,d,e,f,g,h,i,j,k,l,m){b=$m($$t.$gm.$type,null);c=$m($$0.$aq.$type,null);d=$m($$0.$aq.$type,null);e=$m($$0.$aq.$type,null);f=$m($$0.$aq.$type,null);g=$m($$0.$aq.$type,null);h=$m($$0.$aq.$type,null);i=$m($$0.$aq.$type,null);j=$m($$0.$aq.$type,null);k=$m($$0.$aq.$type,null);l=$m($$0.$aq.$type,null);m=$m($$0.$aq.$type,null);var o=a.ab().u.getEnumerator();while(o.moveNext()){var n=o.current();switch(n.a.e(a.d())){case"urn:schemas-microsoft-com:vml/ext":b=$m($$t.$gm.$type,$$t.$i9.b($$t.$gm.$type,n.d,null));break;case"position":c=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(n.d)));break;case"selection":d=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(n.d)));break;case"grouping":e=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(n.d)));break;case"ungrouping":f=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(n.d)));break;case"rotation":g=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(n.d)));break;case"cropping":h=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(n.d)));break;case"verticies":i=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(n.d)));break;case"adjusthandles":j=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(n.d)));break;case"text":k=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(n.d)));break;case"aspectratio":l=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(n.d)));break;case"shapetype":m=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(n.d)));break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m}},cl:function(a,b,c,d,e,f,g,h,i,j,k,l,m){a.ad().p($$t.$i6.ao,"o");var n;if($l(b,null)){n=$$t.$i9.f($$t.$gm.$type,b.value());a.ad().h("urn:schemas-microsoft-com:vml/ext",n)}if($l(c,null)){n=$$t.$ic.k($$t.$ic.b(c.value()));a.ad().h("position",n)}if($l(d,null)){n=$$t.$ic.k($$t.$ic.b(d.value()));a.ad().h("selection",n)}if($l(e,null)){n=$$t.$ic.k($$t.$ic.b(e.value()));a.ad().h("grouping",n)}if($l(f,null)){n=$$t.$ic.k($$t.$ic.b(f.value()));a.ad().h("ungrouping",n)}if($l(g,null)){n=$$t.$ic.k($$t.$ic.b(g.value()));a.ad().h("rotation",n)}if($l(h,null)){n=$$t.$ic.k($$t.$ic.b(h.value()));a.ad().h("cropping",n)}if($l(i,null)){n=$$t.$ic.k($$t.$ic.b(i.value()));a.ad().h("verticies",n)}if($l(j,null)){n=$$t.$ic.k($$t.$ic.b(j.value()));a.ad().h("adjusthandles",n)}if($l(k,null)){n=$$t.$ic.k($$t.$ic.b(k.value()));a.ad().h("text",n)}if($l(l,null)){n=$$t.$ic.k($$t.$ic.b(l.value()));a.ad().h("aspectratio",n)}if($l(m,null)){n=$$t.$ic.k($$t.$ic.b(m.value()));a.ad().h("shapetype",n)}},cj:function(a,b){b=$m($$t.$gm.$type,null);var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"urn:schemas-microsoft-com:vml/ext":b=$m($$t.$gm.$type,$$t.$i9.b($$t.$gm.$type,c.d,null));break;default:break}}return{p1:b}},cm:function(a,b){a.ad().p($$t.$i6.b6,"o");var c;if($l(b,null)){c=$$t.$i9.f($$t.$gm.$type,b.value());a.ad().h("urn:schemas-microsoft-com:vml/ext",c)}},$type:new $.ig.Type("OfficeNamespace",$$t.$i9.$type)},true);$c("VmlNamespace:i7","XmlNamespaceDefinitionBase",{init:function(){$$t.$i9.init.call(this)},i:function(a){switch(a){case 0:case 1:return"urn:schemas-microsoft-com:vml";default:return"urn:schemas-microsoft-com:vml"}},j:function(){return"v"},dn:function(a,b,c){b=$m($$0.$v.$type,null);c=$m($$0.$v.$type,null);var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"startAngle":b=$m($$0.$v.$type,$.ig.util.parseNumber(d.d,$$0.$cg.invariantCulture()));break;case"endAngle":c=$m($$0.$v.$type,$.ig.util.parseNumber(d.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b,p2:c}},dx:function(a,b,c){a.ad().p("urn:schemas-microsoft-com:vml/arc","v");var d;if($l(b,null)){d=b.value().toString1($$0.$cg.invariantCulture());a.ad().h("startAngle",d)}if($l(c,null)){d=c.value().toString1($$0.$cg.invariantCulture());a.ad().h("endAngle",d)}},dp:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab){b=null;c=$m($$t.$go.$type,null);d=$m($$0.$aq.$type,null);e=null;f=null;g=null;h=null;i=null;j=null;k=null;l=null;m=null;n=$m($$t.$gy.$type,null);o=null;p=$m($$0.$v.$type,null);q=$m($$0.$aq.$type,null);r=null;s=null;t=null;u=$m($$t.$gn.$type,null);v=$m($$0.$aq.$type,null);w=null;x=null;y=$m($$0.$aq.$type,null);z=$m($$0.$aq.$type,null);aa=null;ab=null;var ad=a.ab().u.getEnumerator();while(ad.moveNext()){var ac=ad.current();switch(ac.a.e(a.d())){case"id":b=ac.d;break;case"type":c=$m($$t.$go.$type,$$t.$i9.b($$t.$go.$type,ac.d,null));break;case"on":d=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(ac.d)));break;case"color":e=ac.d;break;case"opacity":f=ac.d;break;case"color2":g=ac.d;break;case"src":h=ac.d;break;case $$t.$i6.bn:i=ac.d;break;case $$t.$i6.at:j=ac.d;break;case"size":k=ac.d;break;case"origin":l=ac.d;break;case"position":m=ac.d;break;case"aspect":n=$m($$t.$gy.$type,$$t.$i9.b($$t.$gy.$type,ac.d,null));break;case"colors":o=ac.d;break;case"angle":p=$m($$0.$v.$type,$.ig.util.parseNumber(ac.d,$$0.$cg.invariantCulture()));break;case"alignshape":q=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(ac.d)));break;case"focus":r=ac.d;break;case"focussize":s=ac.d;break;case"focusposition":t=ac.d;break;case"method":u=$m($$t.$gn.$type,$$t.$i9.b($$t.$gn.$type,ac.d,null));break;case $$t.$i6.bc:v=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(ac.d)));break;case $$t.$i6.cc:w=ac.d;break;case $$t.$i6.bz:x=ac.d;break;case"recolor":y=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(ac.d)));break;case"rotate":z=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(ac.d)));break;case $$t.$i5.ar:aa=ac.d;break;case $$t.$i6.b3:ab=ac.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n,p14:o,p15:p,p16:q,p17:r,p18:s,p19:t,p20:u,p21:v,p22:w,p23:x,p24:y,p25:z,p26:aa,p27:ab}},dy:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab){a.ad().p("urn:schemas-microsoft-com:vml/fill","v");var ac;ac=b;a.ad().h("id",ac);if($l(c,null)){ac=$$t.$i9.f($$t.$go.$type,c.value());a.ad().h("type",ac)}if($l(d,null)){ac=$$t.$ic.k($$t.$ic.b(d.value()));a.ad().h("on",ac)}ac=e;a.ad().h("color",ac);ac=f;a.ad().h("opacity",ac);ac=g;a.ad().h("color2",ac);ac=h;a.ad().h("src",ac);ac=i;a.ad().h($$t.$i6.bn,ac);ac=j;a.ad().h($$t.$i6.at,ac);ac=k;a.ad().h("size",ac);ac=l;a.ad().h("origin",ac);ac=m;a.ad().h("position",ac);if($l(n,null)){ac=$$t.$i9.f($$t.$gy.$type,n.value());a.ad().h("aspect",ac)}ac=o;a.ad().h("colors",ac);if($l(p,null)){ac=p.value().toString1($$0.$cg.invariantCulture());a.ad().h("angle",ac)}if($l(q,null)){ac=$$t.$ic.k($$t.$ic.b(q.value()));a.ad().h("alignshape",ac)}ac=r;a.ad().h("focus",ac);ac=s;a.ad().h("focussize",ac);ac=t;a.ad().h("focusposition",ac);if($l(u,null)){ac=$$t.$i9.f($$t.$gn.$type,u.value());a.ad().h("method",ac)}if($l(v,null)){ac=$$t.$ic.k($$t.$ic.b(v.value()));a.ad().h($$t.$i6.bc,ac)}ac=w;a.ad().h($$t.$i6.cc,ac);ac=x;a.ad().h($$t.$i6.bz,ac);if($l(y,null)){ac=$$t.$ic.k($$t.$ic.b(y.value()));a.ad().h("recolor",ac)}if($l(z,null)){ac=$$t.$ic.k($$t.$ic.b(z.value()));a.ad().h("rotate",ac)}ac=aa;a.ad().h($$t.$i5.ar,ac);ac=ab;a.ad().h($$t.$i6.b3,ac)},dq:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){b=null;c=null;d=null;e=null;f=null;g=null;h=null;i=null;j=null;k=$m($$0.$aq.$type,null);l=$m($$0.$aq.$type,null);m=null;n=null;o=null;p=null;q=null;r=null;s=$m($$0.$a8.$type,null);t=$m($$0.$aq.$type,null);u=$m($$0.$a8.$type,null);v=null;w=null;x=null;y=null;var aa=a.ab().u.getEnumerator();while(aa.moveNext()){var z=aa.current();switch(z.a.e(a.d())){case"id":b=z.d;break;case"src":c=z.d;break;case"cropleft":d=z.d;break;case"croptop":e=z.d;break;case"cropright":f=z.d;break;case"cropbottom":g=z.d;break;case"gain":h=z.d;break;case"blacklevel":i=z.d;break;case"gamma":j=z.d;break;case"grayscale":k=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(z.d)));break;case"bilevel":l=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(z.d)));break;case"chromakey":m=z.d;break;case"embosscolor":n=z.d;break;case"recolortarget":o=z.d;break;case $$t.$i6.bn:p=z.d;break;case $$t.$i6.at:q=z.d;break;case $$t.$i6.cc:r=z.d;break;case $$t.$i6.bx:s=$m($$0.$a8.$type,$ak(z.d,$$0.$cg.invariantCulture()));break;case $$t.$i6.bc:t=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(z.d)));break;case $$t.$i6.bt:u=$m($$0.$a8.$type,$ak(z.d,$$0.$cg.invariantCulture()));break;case $$t.$i6.b3:v=z.d;break;case $$t.$i5.ar:w=z.d;break;case $$t.$i5.av:x=z.d;break;case $$t.$i5.aq:y=z.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n,p14:o,p15:p,p16:q,p17:r,p18:s,p19:t,p20:u,p21:v,p22:w,p23:x,p24:y}},dz:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){a.ad().p("urn:schemas-microsoft-com:vml/imagedata","v");var z;z=b;a.ad().h("id",z);z=c;a.ad().h("src",z);z=d;a.ad().h("cropleft",z);z=e;a.ad().h("croptop",z);z=f;a.ad().h("cropright",z);z=g;a.ad().h("cropbottom",z);z=h;a.ad().h("gain",z);z=i;a.ad().h("blacklevel",z);z=j;a.ad().h("gamma",z);if($l(k,null)){z=$$t.$ic.k($$t.$ic.b(k.value()));a.ad().h("grayscale",z)}if($l(l,null)){z=$$t.$ic.k($$t.$ic.b(l.value()));a.ad().h("bilevel",z)}z=m;a.ad().h("chromakey",z);z=n;a.ad().h("embosscolor",z);z=o;a.ad().h("recolortarget",z);z=p;a.ad().h($$t.$i6.bn,z);z=q;a.ad().h($$t.$i6.at,z);z=r;a.ad().h($$t.$i6.cc,z);if($l(s,null)){z=$6(s.value(),$$0.$cg.invariantCulture());a.ad().h($$t.$i6.bx,z)}if($l(t,null)){z=$$t.$ic.k($$t.$ic.b(t.value()));a.ad().h($$t.$i6.bc,z)}if($l(u,null)){z=$6(u.value(),$$0.$cg.invariantCulture());a.ad().h($$t.$i6.bt,z)}z=v;a.ad().h($$t.$i6.b3,z);z=w;a.ad().h($$t.$i5.ar,z);z=x;a.ad().h($$t.$i5.av,z);z=y;a.ad().h($$t.$i5.aq,z)},dr:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){b=null;c=null;d=null;e=null;f=$m($$0.$aq.$type,null);g=$m($$0.$aq.$type,null);h=$m($$0.$aq.$type,null);i=$m($$0.$aq.$type,null);j=$m($$0.$aq.$type,null);k=$m($$0.$aq.$type,null);l=$m($$0.$aq.$type,null);m=$m($$t.$gf.$type,null);n=null;o=null;p=$m($$0.$aq.$type,null);var r=a.ab().u.getEnumerator();while(r.moveNext()){var q=r.current();switch(q.a.e(a.d())){case"id":b=q.d;break;case"v":c=q.d;break;case"limo":d=q.d;break;case"textboxrect":e=q.d;break;case"fillok":f=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(q.d)));break;case"strokeok":g=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(q.d)));break;case"shadowok":h=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(q.d)));break;case"arrowok":i=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(q.d)));break;case"gradientshapeok":j=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(q.d)));break;case"textpathok":k=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(q.d)));break;case"insetpenok":l=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(q.d)));break;case $$t.$i6.a9:m=$m($$t.$gf.$type,$$t.$i9.b($$t.$gf.$type,q.d,null));break;case $$t.$i6.a7:n=q.d;break;case $$t.$i6.a6:o=q.d;break;case $$t.$i6.bh:p=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(q.d)));break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n,p14:o,p15:p}},d0:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){a.ad().p("urn:schemas-microsoft-com:vml/path","v");var q;q=b;a.ad().h("id",q);q=c;a.ad().h("v",q);q=d;a.ad().h("limo",q);q=e;a.ad().h("textboxrect",q);if($l(f,null)){q=$$t.$ic.k($$t.$ic.b(f.value()));a.ad().h("fillok",q)}if($l(g,null)){q=$$t.$ic.k($$t.$ic.b(g.value()));a.ad().h("strokeok",q)}if($l(h,null)){q=$$t.$ic.k($$t.$ic.b(h.value()));a.ad().h("shadowok",q)}if($l(i,null)){q=$$t.$ic.k($$t.$ic.b(i.value()));a.ad().h("arrowok",q)}if($l(j,null)){q=$$t.$ic.k($$t.$ic.b(j.value()));a.ad().h("gradientshapeok",q)}if($l(k,null)){q=$$t.$ic.k($$t.$ic.b(k.value()));a.ad().h("textpathok",q)}if($l(l,null)){q=$$t.$ic.k($$t.$ic.b(l.value()));a.ad().h("insetpenok",q)}if($l(m,null)){q=$$t.$i9.f($$t.$gf.$type,m.value());a.ad().h($$t.$i6.a9,q)}q=n;a.ad().h($$t.$i6.a7,q);q=o;a.ad().h($$t.$i6.a6,q);if($l(p,null)){q=$$t.$ic.k($$t.$ic.b(p.value()));a.ad().h($$t.$i6.bh,q)}},ds:function(a,b,c,d,e,f,g,h,i,j,k,l){b=null;c=$m($$0.$aq.$type,null);d=$m($$t.$hl.$type,null);e=$m($$0.$aq.$type,null);f=null;g=null;h=null;i=null;j=null;k=null;l=null;var n=a.ab().u.getEnumerator();while(n.moveNext()){var m=n.current();switch(m.a.e(a.d())){case"id":b=m.d;break;case"on":c=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(m.d)));break;case"type":d=$m($$t.$hl.$type,$$t.$i9.b($$t.$hl.$type,m.d,null));break;case"obscured":e=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(m.d)));break;case"color":f=m.d;break;case"opacity":g=m.d;break;case"offset":h=m.d;break;case"color2":i=m.d;break;case"offset2":j=m.d;break;case"origin":k=m.d;break;case"matrix":l=m.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l}},d1:function(a,b,c,d,e,f,g,h,i,j,k,l){a.ad().p("urn:schemas-microsoft-com:vml/shadow","v");var m;m=b;a.ad().h("id",m);if($l(c,null)){m=$$t.$ic.k($$t.$ic.b(c.value()));a.ad().h("on",m)}if($l(d,null)){m=$$t.$i9.f($$t.$hl.$type,d.value());a.ad().h("type",m)}if($l(e,null)){m=$$t.$ic.k($$t.$ic.b(e.value()));a.ad().h("obscured",m)}m=f;a.ad().h("color",m);m=g;a.ad().h("opacity",m);m=h;a.ad().h("offset",m);m=i;a.ad().h("color2",m);m=j;a.ad().h("offset2",m);m=k;a.ad().h("origin",m);m=l;a.ad().h("matrix",m)},dt:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,a0,a1,a2,a3,a4,a5,a6){b=null;c=null;d=null;e=null;f=null;g=null;h=null;i=null;j=null;k=null;l=$m($$0.$aq.$type,null);m=null;n=$m($$0.$aq.$type,null);o=null;p=$m($$0.$aq.$type,null);q=$m($$0.$aq.$type,null);r=$m($$0.$aq.$type,null);s=$m($$0.$aq.$type,null);t=$m($$0.$aq.$type,null);u=$m($$0.$aq.$type,null);v=$m($$0.$aq.$type,null);w=$m($$0.$a8.$type,null);x=$m($$t.$gx.$type,null);y=$m($$0.$aq.$type,null);z=$m($$0.$aq.$type,null);aa=$m($$0.$aq.$type,null);ab=null;ac=null;ad=null;ae=null;af=null;ag=null;ah=null;ai=$m($$t.$gz.$type,null);aj=null;ak=$m($$0.$aq.$type,null);al=null;am=null;an=$m($$0.$aq.$type,null);ao=null;ap=null;aq=$m($$0.$aq.$type,null);ar=$m($$0.$a8.$type,null);as=$m($$t.$ge.$type,null);at=$m($$t.$ga.$type,null);au=$m($$t.$ga.$type,null);av=$m($$t.$ga.$type,null);aw=$m($$0.$aq.$type,null);ax=$m($$0.$aq.$type,null);ay=$m($$0.$aq.$type,null);az=$m($$0.$aq.$type,null);a0=$m($$0.$aq.$type,null);a1=$m($$0.$aq.$type,null);a2=null;a3=null;a4=null;a5=null;a6=null;var a8=a.ab().u.getEnumerator();while(a8.moveNext()){var a7=a8.current();switch(a7.a.e(a.d())){case"id":b=a7.d;break;case"style":c=a7.d;break;case"href":d=a7.d;break;case"target":e=a7.d;break;case"class":f=a7.d;break;case"title":g=a7.d;break;case"alt":h=a7.d;break;case"coordsize":i=a7.d;break;case"coordorigin":j=a7.d;break;case"wrapcoords":k=a7.d;break;case"print":l=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a7.d)));break;case $$t.$i6.b9:m=a7.d;break;case $$t.$i6.by:n=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a7.d)));break;case $$t.$i6.b2:o=a7.d;break;case $$t.$i6.bg:p=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a7.d)));break;case $$t.$i6.a0:q=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a7.d)));break;case $$t.$i6.cf:r=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a7.d)));break;case $$t.$i6.az:s=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a7.d)));break;case $$t.$i6.bl:t=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a7.d)));break;case $$t.$i6.bq:u=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a7.d)));break;case $$t.$i6.bo:v=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a7.d)));break;case $$t.$i6.bp:w=$m($$0.$a8.$type,$ak(a7.d,$$0.$cg.invariantCulture()));break;case $$t.$i6.bm:x=$m($$t.$gx.$type,$$t.$i9.b($$t.$gx.$type,a7.d,null));break;case $$t.$i6.ar:y=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a7.d)));break;case $$t.$i6.as:z=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a7.d)));break;case $$t.$i6.ce:aa=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a7.d)));break;case"bordertopcolor":ab=a7.d;break;case"borderleftcolor":ac=a7.d;break;case"borderbottomcolor":ad=a7.d;break;case"borderrightcolor":ae=a7.d;break;case $$t.$i6.bd:af=a7.d;break;case $$t.$i6.bf:ag=a7.d;break;case $$t.$i6.be:ah=a7.d;break;case $$t.$i6.bs:ai=$m($$t.$gz.$type,$$t.$i9.b($$t.$gz.$type,a7.d,null));break;case"chromakey":aj=a7.d;break;case"filled":ak=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a7.d)));break;case"fillcolor":al=a7.d;break;case"opacity":am=a7.d;break;case"stroked":an=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a7.d)));break;case"strokecolor":ao=a7.d;break;case"strokeweight":ap=a7.d;break;case"insetpen":aq=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a7.d)));break;case $$t.$i6.ca:ar=$m($$0.$a8.$type,$ak(a7.d,$$0.$cg.invariantCulture()));break;case $$t.$i6.a8:as=$m($$t.$ge.$type,$$t.$i9.b($$t.$ge.$type,a7.d,null));break;case"bwmode":at=$m($$t.$ga.$type,$$t.$i9.b($$t.$ga.$type,a7.d,null));break;case"bwpure":au=$m($$t.$ga.$type,$$t.$i9.b($$t.$ga.$type,a7.d,null));break;case"bwnormal":av=$m($$t.$ga.$type,$$t.$i9.b($$t.$ga.$type,a7.d,null));break;case $$t.$i6.bi:aw=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a7.d)));break;case $$t.$i6.bw:ax=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a7.d)));break;case $$t.$i6.bv:ay=$m($$0.$aq.$type,$$t.$id.d(a7.d));break;case $$t.$i6.b1:az=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a7.d)));break;case $$t.$i6.a5:a0=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a7.d)));break;case $$t.$i6.a4:a1=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a7.d)));break;case"type":a2=a7.d;break;case"adj":a3=a7.d;break;case"path":a4=a7.d;break;case"gfxdata":a5=a7.d;break;case"equationxml":a6=a7.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n,p14:o,p15:p,p16:q,p17:r,p18:s,p19:t,p20:u,p21:v,p22:w,p23:x,p24:y,p25:z,p26:aa,p27:ab,p28:ac,p29:ad,p30:ae,p31:af,p32:ag,p33:ah,p34:ai,p35:aj,p36:ak,p37:al,p38:am,p39:an,p40:ao,p41:ap,p42:aq,p43:ar,p44:as,p45:at,p46:au,p47:av,p48:aw,p49:ax,p50:ay,p51:az,p52:a0,p53:a1,p54:a2,p55:a3,p56:a4,p57:a5,p58:a6}},d2:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,a0,a1,a2,a3,a4,a5,a6){a.ad().p("urn:schemas-microsoft-com:vml/shape","v");var a7;a7=b;a.ad().h("id",a7);a7=c;a.ad().h("style",a7);a7=d;a.ad().h("href",a7);a7=e;a.ad().h("target",a7);a7=f;a.ad().h("class",a7);a7=g;a.ad().h("title",a7);a7=h;a.ad().h("alt",a7);a7=i;a.ad().h("coordsize",a7);a7=j;a.ad().h("coordorigin",a7);a7=k;a.ad().h("wrapcoords",a7);if($l(l,null)){a7=$$t.$ic.k($$t.$ic.b(l.value()));a.ad().h("print",a7)}a7=m;a.ad().h($$t.$i6.b9,a7);if($l(n,null)){a7=$$t.$ic.k($$t.$ic.b(n.value()));a.ad().h($$t.$i6.by,a7)}a7=o;a.ad().h($$t.$i6.b2,a7);if($l(p,null)){a7=$$t.$ic.k($$t.$ic.b(p.value()));a.ad().h($$t.$i6.bg,a7)}if($l(q,null)){a7=$$t.$ic.k($$t.$ic.b(q.value()));a.ad().h($$t.$i6.a0,a7)}if($l(r,null)){a7=$$t.$ic.k($$t.$ic.b(r.value()));a.ad().h($$t.$i6.cf,a7)}if($l(s,null)){a7=$$t.$ic.k($$t.$ic.b(s.value()));a.ad().h($$t.$i6.az,a7)}if($l(t,null)){a7=$$t.$ic.k($$t.$ic.b(t.value()));a.ad().h($$t.$i6.bl,a7)}if($l(u,null)){a7=$$t.$ic.k($$t.$ic.b(u.value()));a.ad().h($$t.$i6.bq,a7)}if($l(v,null)){a7=$$t.$ic.k($$t.$ic.b(v.value()));a.ad().h($$t.$i6.bo,a7)}if($l(w,null)){a7=$6(w.value(),$$0.$cg.invariantCulture());a.ad().h($$t.$i6.bp,a7)}if($l(x,null)){a7=$$t.$i9.f($$t.$gx.$type,x.value());a.ad().h($$t.$i6.bm,a7)}if($l(y,null)){a7=$$t.$ic.k($$t.$ic.b(y.value()));a.ad().h($$t.$i6.ar,a7)}if($l(z,null)){a7=$$t.$ic.k($$t.$ic.b(z.value()));a.ad().h($$t.$i6.as,a7)}if($l(aa,null)){a7=$$t.$ic.k($$t.$ic.b(aa.value()));a.ad().h($$t.$i6.ce,a7)}a7=ab;a.ad().h("bordertopcolor",a7);a7=ac;a.ad().h("borderleftcolor",a7);a7=ad;a.ad().h("borderbottomcolor",a7);a7=ae;a.ad().h("borderrightcolor",a7);a7=af;a.ad().h($$t.$i6.bd,a7);a7=ag;a.ad().h($$t.$i6.bf,a7);a7=ah;a.ad().h($$t.$i6.be,a7);if($l(ai,null)){a7=$$t.$i9.f($$t.$gz.$type,ai.value());a.ad().h($$t.$i6.bs,a7)}a7=aj;a.ad().h("chromakey",a7);if($l(ak,null)){a7=$$t.$ic.k($$t.$ic.b(ak.value()));a.ad().h("filled",a7)}a7=al;a.ad().h("fillcolor",a7);a7=am;a.ad().h("opacity",a7);if($l(an,null)){a7=$$t.$ic.k($$t.$ic.b(an.value()));a.ad().h("stroked",a7)}a7=ao;a.ad().h("strokecolor",a7);a7=ap;a.ad().h("strokeweight",a7);if($l(aq,null)){a7=$$t.$ic.k($$t.$ic.b(aq.value()));a.ad().h("insetpen",a7)}if($l(ar,null)){a7=$6(ar.value(),$$0.$cg.invariantCulture());a.ad().h($$t.$i6.ca,a7)}if($l(as,null)){a7=$$t.$i9.f($$t.$ge.$type,as.value());a.ad().h($$t.$i6.a8,a7)}if($l(at,null)){a7=$$t.$i9.f($$t.$ga.$type,at.value());a.ad().h("bwmode",a7)}if($l(au,null)){a7=$$t.$i9.f($$t.$ga.$type,au.value());a.ad().h("bwpure",a7)}if($l(av,null)){a7=$$t.$i9.f($$t.$ga.$type,av.value());a.ad().h("bwnormal",a7)}if($l(aw,null)){a7=$$t.$ic.k($$t.$ic.b(aw.value()));a.ad().h($$t.$i6.bi,a7)}if($l(ax,null)){a7=$$t.$ic.k($$t.$ic.b(ax.value()));a.ad().h($$t.$i6.bw,a7)}if($l(ay,null)){a7=$$t.$id.f(ay.value());a.ad().h($$t.$i6.bv,a7)}if($l(az,null)){a7=$$t.$ic.k($$t.$ic.b(az.value()));a.ad().h($$t.$i6.b1,a7)}if($l(a0,null)){a7=$$t.$ic.k($$t.$ic.b(a0.value()));a.ad().h($$t.$i6.a5,a7)}if($l(a1,null)){a7=$$t.$ic.k($$t.$ic.b(a1.value()));a.ad().h($$t.$i6.a4,a7)}a7=a2;a.ad().h("type",a7);a7=a3;a.ad().h("adj",a7);a7=a4;a.ad().h("path",a7);a7=a5;a.ad().h("gfxdata",a7);a7=a6;a.ad().h("equationxml",a7)},du:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,a0,a1,a2,a3,a4){b=null;c=null;d=null;e=null;f=null;g=null;h=null;i=null;j=null;k=null;l=$m($$0.$aq.$type,null);m=null;n=$m($$0.$aq.$type,null);o=null;p=$m($$0.$aq.$type,null);q=$m($$0.$aq.$type,null);r=$m($$0.$aq.$type,null);s=$m($$0.$aq.$type,null);t=$m($$0.$aq.$type,null);u=$m($$0.$aq.$type,null);v=$m($$0.$aq.$type,null);w=$m($$0.$a8.$type,null);x=$m($$t.$gx.$type,null);y=$m($$0.$aq.$type,null);z=$m($$0.$aq.$type,null);aa=$m($$0.$aq.$type,null);ab=null;ac=null;ad=null;ae=null;af=null;ag=null;ah=null;ai=$m($$t.$gz.$type,null);aj=null;ak=$m($$0.$aq.$type,null);al=null;am=null;an=$m($$0.$aq.$type,null);ao=null;ap=null;aq=$m($$0.$aq.$type,null);ar=$m($$0.$a8.$type,null);as=$m($$t.$ge.$type,null);at=$m($$t.$ga.$type,null);au=$m($$t.$ga.$type,null);av=$m($$t.$ga.$type,null);aw=$m($$0.$aq.$type,null);ax=$m($$0.$aq.$type,null);ay=$m($$0.$aq.$type,null);az=$m($$0.$aq.$type,null);a0=$m($$0.$aq.$type,null);a1=$m($$0.$aq.$type,null);a2=null;a3=null;a4=null;var a6=a.ab().u.getEnumerator();while(a6.moveNext()){var a5=a6.current();switch(a5.a.e(a.d())){case"id":b=a5.d;break;case"style":c=a5.d;break;case"href":d=a5.d;break;case"target":e=a5.d;break;case"class":f=a5.d;break;case"title":g=a5.d;break;case"alt":h=a5.d;break;case"coordsize":i=a5.d;break;case"coordorigin":j=a5.d;break;case"wrapcoords":k=a5.d;break;case"print":l=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a5.d)));break;case $$t.$i6.b9:m=a5.d;break;case $$t.$i6.by:n=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a5.d)));break;case $$t.$i6.b2:o=a5.d;break;case $$t.$i6.bg:p=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a5.d)));break;case $$t.$i6.a0:q=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a5.d)));break;case $$t.$i6.cf:r=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a5.d)));break;case $$t.$i6.az:s=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a5.d)));break;case $$t.$i6.bl:t=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a5.d)));break;case $$t.$i6.bq:u=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a5.d)));break;case $$t.$i6.bo:v=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a5.d)));break;case $$t.$i6.bp:w=$m($$0.$a8.$type,$ak(a5.d,$$0.$cg.invariantCulture()));break;case $$t.$i6.bm:x=$m($$t.$gx.$type,$$t.$i9.b($$t.$gx.$type,a5.d,null));break;case $$t.$i6.ar:y=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a5.d)));break;case $$t.$i6.as:z=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a5.d)));break;case $$t.$i6.ce:aa=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a5.d)));break;case"bordertopcolor":ab=a5.d;break;case"borderleftcolor":ac=a5.d;break;case"borderbottomcolor":ad=a5.d;break;case"borderrightcolor":ae=a5.d;break;case $$t.$i6.bd:af=a5.d;break;case $$t.$i6.bf:ag=a5.d;break;case $$t.$i6.be:ah=a5.d;break;case $$t.$i6.bs:ai=$m($$t.$gz.$type,$$t.$i9.b($$t.$gz.$type,a5.d,null));break;case"chromakey":aj=a5.d;break;case"filled":ak=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a5.d)));break;case"fillcolor":al=a5.d;break;case"opacity":am=a5.d;break;case"stroked":an=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a5.d)));break;case"strokecolor":ao=a5.d;break;case"strokeweight":ap=a5.d;break;case"insetpen":aq=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a5.d)));break;case $$t.$i6.ca:ar=$m($$0.$a8.$type,$ak(a5.d,$$0.$cg.invariantCulture()));break;case $$t.$i6.a8:as=$m($$t.$ge.$type,$$t.$i9.b($$t.$ge.$type,a5.d,null));break;case"bwmode":at=$m($$t.$ga.$type,$$t.$i9.b($$t.$ga.$type,a5.d,null));break;case"bwpure":au=$m($$t.$ga.$type,$$t.$i9.b($$t.$ga.$type,a5.d,null));break;case"bwnormal":av=$m($$t.$ga.$type,$$t.$i9.b($$t.$ga.$type,a5.d,null));break;case $$t.$i6.bi:aw=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a5.d)));break;case $$t.$i6.bw:ax=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a5.d)));break;case $$t.$i6.bv:ay=$m($$0.$aq.$type,$$t.$id.d(a5.d));break;case $$t.$i6.b1:az=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a5.d)));break;case $$t.$i6.a5:a0=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a5.d)));break;case $$t.$i6.a4:a1=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(a5.d)));break;case"adj":a2=a5.d;break;case"path":a3=a5.d;break;case"master":a4=a5.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n,p14:o,p15:p,p16:q,p17:r,p18:s,p19:t,p20:u,p21:v,p22:w,p23:x,p24:y,p25:z,p26:aa,p27:ab,p28:ac,p29:ad,p30:ae,p31:af,p32:ag,p33:ah,p34:ai,p35:aj,p36:ak,p37:al,p38:am,p39:an,p40:ao,p41:ap,p42:aq,p43:ar,p44:as,p45:at,p46:au,p47:av,p48:aw,p49:ax,p50:ay,p51:az,p52:a0,p53:a1,p54:a2,p55:a3,p56:a4}},d3:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,a0,a1,a2,a3,a4){a.ad().p("urn:schemas-microsoft-com:vml/shapetype","v");var a5;a5=b;a.ad().h("id",a5);a5=c;a.ad().h("style",a5);a5=d;a.ad().h("href",a5);a5=e;a.ad().h("target",a5);a5=f;a.ad().h("class",a5);a5=g;a.ad().h("title",a5);a5=h;a.ad().h("alt",a5);a5=i;a.ad().h("coordsize",a5);a5=j;a.ad().h("coordorigin",a5);a5=k;a.ad().h("wrapcoords",a5);if($l(l,null)){a5=$$t.$ic.k($$t.$ic.b(l.value()));a.ad().h("print",a5)}a5=m;a.ad().h($$t.$i6.b9,a5);if($l(n,null)){a5=$$t.$ic.k($$t.$ic.b(n.value()));a.ad().h($$t.$i6.by,a5)}a5=o;a.ad().h($$t.$i6.b2,a5);if($l(p,null)){a5=$$t.$ic.k($$t.$ic.b(p.value()));a.ad().h($$t.$i6.bg,a5)}if($l(q,null)){a5=$$t.$ic.k($$t.$ic.b(q.value()));a.ad().h($$t.$i6.a0,a5)}if($l(r,null)){a5=$$t.$ic.k($$t.$ic.b(r.value()));a.ad().h($$t.$i6.cf,a5)}if($l(s,null)){a5=$$t.$ic.k($$t.$ic.b(s.value()));a.ad().h($$t.$i6.az,a5)}if($l(t,null)){a5=$$t.$ic.k($$t.$ic.b(t.value()));a.ad().h($$t.$i6.bl,a5)}if($l(u,null)){a5=$$t.$ic.k($$t.$ic.b(u.value()));a.ad().h($$t.$i6.bq,a5)}if($l(v,null)){a5=$$t.$ic.k($$t.$ic.b(v.value()));a.ad().h($$t.$i6.bo,a5)}if($l(w,null)){a5=$6(w.value(),$$0.$cg.invariantCulture());a.ad().h($$t.$i6.bp,a5)}if($l(x,null)){a5=$$t.$i9.f($$t.$gx.$type,x.value());a.ad().h($$t.$i6.bm,a5)}if($l(y,null)){a5=$$t.$ic.k($$t.$ic.b(y.value()));a.ad().h($$t.$i6.ar,a5)}if($l(z,null)){a5=$$t.$ic.k($$t.$ic.b(z.value()));a.ad().h($$t.$i6.as,a5)}if($l(aa,null)){a5=$$t.$ic.k($$t.$ic.b(aa.value()));a.ad().h($$t.$i6.ce,a5)}a5=ab;a.ad().h("bordertopcolor",a5);a5=ac;a.ad().h("borderleftcolor",a5);a5=ad;a.ad().h("borderbottomcolor",a5);a5=ae;a.ad().h("borderrightcolor",a5);a5=af;a.ad().h($$t.$i6.bd,a5);a5=ag;a.ad().h($$t.$i6.bf,a5);a5=ah;a.ad().h($$t.$i6.be,a5);if($l(ai,null)){a5=$$t.$i9.f($$t.$gz.$type,ai.value());a.ad().h($$t.$i6.bs,a5)}a5=aj;a.ad().h("chromakey",a5);if($l(ak,null)){a5=$$t.$ic.k($$t.$ic.b(ak.value()));a.ad().h("filled",a5)}a5=al;a.ad().h("fillcolor",a5);a5=am;a.ad().h("opacity",a5);if($l(an,null)){a5=$$t.$ic.k($$t.$ic.b(an.value()));
a.ad().h("stroked",a5)}a5=ao;a.ad().h("strokecolor",a5);a5=ap;a.ad().h("strokeweight",a5);if($l(aq,null)){a5=$$t.$ic.k($$t.$ic.b(aq.value()));a.ad().h("insetpen",a5)}if($l(ar,null)){a5=$6(ar.value(),$$0.$cg.invariantCulture());a.ad().h($$t.$i6.ca,a5)}if($l(as,null)){a5=$$t.$i9.f($$t.$ge.$type,as.value());a.ad().h($$t.$i6.a8,a5)}if($l(at,null)){a5=$$t.$i9.f($$t.$ga.$type,at.value());a.ad().h("bwmode",a5)}if($l(au,null)){a5=$$t.$i9.f($$t.$ga.$type,au.value());a.ad().h("bwpure",a5)}if($l(av,null)){a5=$$t.$i9.f($$t.$ga.$type,av.value());a.ad().h("bwnormal",a5)}if($l(aw,null)){a5=$$t.$ic.k($$t.$ic.b(aw.value()));a.ad().h($$t.$i6.bi,a5)}if($l(ax,null)){a5=$$t.$ic.k($$t.$ic.b(ax.value()));a.ad().h($$t.$i6.bw,a5)}if($l(ay,null)){a5=$$t.$id.f(ay.value());a.ad().h($$t.$i6.bv,a5)}if($l(az,null)){a5=$$t.$ic.k($$t.$ic.b(az.value()));a.ad().h($$t.$i6.b1,a5)}if($l(a0,null)){a5=$$t.$ic.k($$t.$ic.b(a0.value()));a.ad().h($$t.$i6.a5,a5)}if($l(a1,null)){a5=$$t.$ic.k($$t.$ic.b(a1.value()));a.ad().h($$t.$i6.a4,a5)}a5=a2;a.ad().h("adj",a5);a5=a3;a.ad().h("path",a5);a5=a4;a.ad().h("master",a5)},dv:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad){b=null;c=$m($$0.$aq.$type,null);d=null;e=null;f=null;g=$m($$t.$ht.$type,null);h=$m($$0.$v.$type,null);i=$m($$t.$hs.$type,null);j=$m($$t.$hr.$type,null);k=null;l=$m($$t.$go.$type,null);m=null;n=$m($$t.$gy.$type,null);o=null;p=$m($$0.$aq.$type,null);q=null;r=$m($$t.$hp.$type,null);s=$m($$t.$hq.$type,null);t=$m($$t.$ho.$type,null);u=$m($$t.$hp.$type,null);v=$m($$t.$hq.$type,null);w=$m($$t.$ho.$type,null);x=null;y=null;z=null;aa=$m($$0.$aq.$type,null);ab=null;ac=$m($$0.$aq.$type,null);ad=null;var af=a.ab().u.getEnumerator();while(af.moveNext()){var ae=af.current();switch(ae.a.e(a.d())){case"id":b=ae.d;break;case"on":c=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(ae.d)));break;case"weight":d=ae.d;break;case"color":e=ae.d;break;case"opacity":f=ae.d;break;case"linestyle":g=$m($$t.$ht.$type,$$t.$i9.b($$t.$ht.$type,ae.d,null));break;case"miterlimit":h=$m($$0.$v.$type,$.ig.util.parseNumber(ae.d,$$0.$cg.invariantCulture()));break;case"joinstyle":i=$m($$t.$hs.$type,$$t.$i9.b($$t.$hs.$type,ae.d,null));break;case"endcap":j=$m($$t.$hr.$type,$$t.$i9.b($$t.$hr.$type,ae.d,null));break;case"dashstyle":k=ae.d;break;case"filltype":l=$m($$t.$go.$type,$$t.$i9.b($$t.$go.$type,ae.d,null));break;case"src":m=ae.d;break;case"imageaspect":n=$m($$t.$gy.$type,$$t.$i9.b($$t.$gy.$type,ae.d,null));break;case"imagesize":o=ae.d;break;case"imagealignshape":p=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(ae.d)));break;case"color2":q=ae.d;break;case"startarrow":r=$m($$t.$hp.$type,$$t.$i9.b($$t.$hp.$type,ae.d,null));break;case"startarrowwidth":s=$m($$t.$hq.$type,$$t.$i9.b($$t.$hq.$type,ae.d,null));break;case"startarrowlength":t=$m($$t.$ho.$type,$$t.$i9.b($$t.$ho.$type,ae.d,null));break;case"endarrow":u=$m($$t.$hp.$type,$$t.$i9.b($$t.$hp.$type,ae.d,null));break;case"endarrowwidth":v=$m($$t.$hq.$type,$$t.$i9.b($$t.$hq.$type,ae.d,null));break;case"endarrowlength":w=$m($$t.$ho.$type,$$t.$i9.b($$t.$ho.$type,ae.d,null));break;case $$t.$i6.bn:x=ae.d;break;case $$t.$i6.at:y=ae.d;break;case $$t.$i6.cc:z=ae.d;break;case $$t.$i6.bi:aa=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(ae.d)));break;case $$t.$i5.ar:ab=ae.d;break;case"insetpen":ac=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(ae.d)));break;case $$t.$i6.b3:ad=ae.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n,p14:o,p15:p,p16:q,p17:r,p18:s,p19:t,p20:u,p21:v,p22:w,p23:x,p24:y,p25:z,p26:aa,p27:ab,p28:ac,p29:ad}},d4:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad){a.ad().p("urn:schemas-microsoft-com:vml/stroke","v");var ae;ae=b;a.ad().h("id",ae);if($l(c,null)){ae=$$t.$ic.k($$t.$ic.b(c.value()));a.ad().h("on",ae)}ae=d;a.ad().h("weight",ae);ae=e;a.ad().h("color",ae);ae=f;a.ad().h("opacity",ae);if($l(g,null)){ae=$$t.$i9.f($$t.$ht.$type,g.value());a.ad().h("linestyle",ae)}if($l(h,null)){ae=h.value().toString1($$0.$cg.invariantCulture());a.ad().h("miterlimit",ae)}if($l(i,null)){ae=$$t.$i9.f($$t.$hs.$type,i.value());a.ad().h("joinstyle",ae)}if($l(j,null)){ae=$$t.$i9.f($$t.$hr.$type,j.value());a.ad().h("endcap",ae)}ae=k;a.ad().h("dashstyle",ae);if($l(l,null)){ae=$$t.$i9.f($$t.$go.$type,l.value());a.ad().h("filltype",ae)}ae=m;a.ad().h("src",ae);if($l(n,null)){ae=$$t.$i9.f($$t.$gy.$type,n.value());a.ad().h("imageaspect",ae)}ae=o;a.ad().h("imagesize",ae);if($l(p,null)){ae=$$t.$ic.k($$t.$ic.b(p.value()));a.ad().h("imagealignshape",ae)}ae=q;a.ad().h("color2",ae);if($l(r,null)){ae=$$t.$i9.f($$t.$hp.$type,r.value());a.ad().h("startarrow",ae)}if($l(s,null)){ae=$$t.$i9.f($$t.$hq.$type,s.value());a.ad().h("startarrowwidth",ae)}if($l(t,null)){ae=$$t.$i9.f($$t.$ho.$type,t.value());a.ad().h("startarrowlength",ae)}if($l(u,null)){ae=$$t.$i9.f($$t.$hp.$type,u.value());a.ad().h("endarrow",ae)}if($l(v,null)){ae=$$t.$i9.f($$t.$hq.$type,v.value());a.ad().h("endarrowwidth",ae)}if($l(w,null)){ae=$$t.$i9.f($$t.$ho.$type,w.value());a.ad().h("endarrowlength",ae)}ae=x;a.ad().h($$t.$i6.bn,ae);ae=y;a.ad().h($$t.$i6.at,ae);ae=z;a.ad().h($$t.$i6.cc,ae);if($l(aa,null)){ae=$$t.$ic.k($$t.$ic.b(aa.value()));a.ad().h($$t.$i6.bi,ae)}ae=ab;a.ad().h($$t.$i5.ar,ae);if($l(ac,null)){ae=$$t.$ic.k($$t.$ic.b(ac.value()));a.ad().h("insetpen",ae)}ae=ad;a.ad().h($$t.$i6.b3,ae)},dw:function(a,b,c,d,e,f){b=null;c=null;d=null;e=$m($$0.$aq.$type,null);f=$m($$t.$gz.$type,null);var h=a.ab().u.getEnumerator();while(h.moveNext()){var g=h.current();switch(g.a.e(a.d())){case"id":b=g.d;break;case"style":c=g.d;break;case"inset":d=g.d;break;case $$t.$i6.b8:e=$m($$0.$aq.$type,$$t.$ic.g($$t.$ic.d(g.d)));break;case $$t.$i6.bs:f=$m($$t.$gz.$type,$$t.$i9.b($$t.$gz.$type,g.d,null));break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f}},d5:function(a,b,c,d,e,f){a.ad().p("urn:schemas-microsoft-com:vml/textbox","v");var g;g=b;a.ad().h("id",g);g=c;a.ad().h("style",g);g=d;a.ad().h("inset",g);if($l(e,null)){g=$$t.$ic.k($$t.$ic.b(e.value()));a.ad().h($$t.$i6.b8,g)}if($l(f,null)){g=$$t.$i9.f($$t.$gz.$type,f.value());a.ad().h($$t.$i6.bs,g)}},$type:new $.ig.Type("VmlNamespace",$$t.$i9.$type)},true);$c("XmlNamespace:i8","XmlNamespaceDefinitionBase",{init:function(){$$t.$i9.init.call(this)},i:function(a){switch(a){case 0:case 1:return"http://www.w3.org/XML/1998/namespace";default:return"http://www.w3.org/XML/1998/namespace"}},j:function(){return"xml"},as:function(a){a.i("xml","space","http://www.w3.org/XML/1998/namespace","preserve")},$type:new $.ig.Type("XmlNamespace",$$t.$i9.$type)},true);$c("XmlSchemaInstance:jb","XmlNamespaceDefinitionBase",{init:function(){$$t.$i9.init.call(this)},i:function(a){switch(a){case 0:case 1:return $$t.$jb.ap;default:return $$t.$jb.ap}},j:function(){return"xsi"},$type:new $.ig.Type("XmlSchemaInstance",$$t.$i9.$type)},true);$c("EG_Anchor:f","Object",{init:function(){$.ig.$op.init.call(this)},_a:null,b:function($tArg,$tResult,a,b){},$type:new $.ig.Type("EG_Anchor",$.ig.$ot)},true);$c("CT_AbsoluteAnchor:b","EG_Anchor",{init:function(){$$t.$f.init.call(this)},_c:null,_d:null,b:function($tArg,$tResult,a,b){return a._visitCT_AbsoluteAnchor$i(this,b)},$type:new $.ig.Type("CT_AbsoluteAnchor",$$t.$f.$type)},true);$c("CT_AnchorClientData:c","Object",{init:function(){$.ig.$op.init.call(this)},_a:false,_b:false,$type:new $.ig.Type("CT_AnchorClientData",$.ig.$ot)},true);$c("CT_OneCellAnchor:d","EG_Anchor",{init:function(){$$t.$f.init.call(this)},_d:null,_c:null,b:function($tArg,$tResult,a,b){return a._visitCT_OneCellAnchor$i(this,b)},$type:new $.ig.Type("CT_OneCellAnchor",$$t.$f.$type)},true);$c("CT_TwoCellAnchor:e","EG_Anchor",{init:function(){$$t.$f.init.call(this)},_e:0,_c:null,_d:null,b:function($tArg,$tResult,a,b){return a._visitCT_TwoCellAnchor$i(this,b)},$type:new $.ig.Type("CT_TwoCellAnchor",$$t.$f.$type)},true);$c("IEG_AnchorVisitor$2:g","Object",{$type:new $.ig.Type("IEG_AnchorVisitor$2",null)},true);$c("ExcelDocumentManager:h","OfficeDocumentManager",{init:function(a,b,c,d){$$t.$fu.init.call(this,a,b,c,d)},_application:function(){return 0},_z:function(){if(this._isLoading()==false){return 0}var b=this._b().getRelationships().getEnumerator();while(b.moveNext()){var a=b.current();switch(a.relationshipType()){case $$t.$bj.a5:return 0;case $$t.$bj.a4:return 1}}return 0},_initialize:function(){$$t.$fu._initialize.call(this);this._bj($$t.$aw.dn);this._bj($$t.$ay.an);this._bj($$t.$ax.an);this._bj($$t.$a0.ao);this._bj($$t.$az.an);this._bk($$t.$je.y,true);this._bk($$t.$jl.y,true);this._bk($$t.$jq.y,true);this._bk($$t.$js.y,true);this._bk($$t.$ju.y,true);this._bk($$t.$jz.y,true);this._bk($$t.$j2.y,true)},_drawingPropertiesNamespace:function(){return $$t.$aw.dn},_getExternalLinkPathRelationshipType:function(){switch(this._conformance()){case 0:return $$t.$h._bo;case 1:return $$t.$h._bn;default:return $$t.$h._bo}},_getHyperlinkRelationshipType:function(){switch(this._conformance()){case 0:return $$t.$h._bt;case 1:return $$t.$h._bs;default:return $$t.$h._bt}},_getOleObjectRelationshipType:function(){switch(this._conformance()){case 0:return $$t.$h._bv;case 1:return $$t.$h._bu;default:return $$t.$h._bv}},$type:new $.ig.Type("ExcelDocumentManager",$$t.$fu.$type)},true);$c("XLOpenXmlUtilities:i","Object",{init:function(){$.ig.$op.init.call(this)},a:function(a){var t1=a;L0:while(true){switch(t1){case 0:return"b";case 1:return"d";case 2:return"n";case 3:return"e";case 4:return"s";case 5:return"str";case 6:return"inlineStr";default:t1=5;continue L0}break}},$type:new $.ig.Type("XLOpenXmlUtilities",$.ig.$ot)},true);$c("CT_Marker:j","Object",{init:function(){this._a=new $$v.cd;this._b=new $$v.cd;$.ig.$op.init.call(this)},_c:0,_a:null,_d:0,_b:null,$type:new $.ig.Type("CT_Marker",$.ig.$ot)},true);$c("ST_Guid:aa","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}this.d=new $$6.i;$$0.$bh.init.call(this)},d:null,init1:function(a,b){this.d=new $$6.i;$$0.$bh.init.call(this);this.d=b},c:function(a){return $$t.$aa.a(new $$6.i(3,a))},toString:function(){return this.d.toString2("B").toLocaleUpperCase($$0.$cg.invariantCulture())},a:function(a){return new $$t.aa(1,a)},h:function(a){if(!a.hasValue()){return $m($$t.$aa.$type,null)}return $m($$t.$aa.$type,$$t.$aa.a(a.value()))},e:function(a){return a.d},g:function(a){if(!a.hasValue()){return $m($$6.$i.$type,null)}return $m($$6.$i.$type,$$t.$aa.e(a.value()))},$type:new $.ig.Type("ST_Guid",$$0.$bh.$type)},true);$c("CalcChainPartManager:a1","XmlPartManagerBase",{init:function(){$$t.$j3.init.call(this)},m:function(){return $$t.$a1.a1},n:function(a){switch(a){case 0:return"/xl/calcChain.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$a1.a4;case 1:return $$t.$a1.a3;default:return $$t.$a1.a4}},g:function(){return false},$type:new $.ig.Type("CalcChainPartManager",$$t.$j3.$type)},true);$c("ChartColorStylePartManager:a2","PartManagerBase",{init:function(){$$t.$jt.init.call(this)},m:function(){return $$t.$a2.s},n:function(a){switch(a){case 0:return"/xl/charts/colors.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$a2.u;case 1:return $$t.$a2.t;default:return $$t.$a2.u}},g:function(){return true},$type:new $.ig.Type("ChartColorStylePartManager",$$t.$jt.$type)},true);$c("ChartPartManager:a3","PartManagerBase",{init:function(){$$t.$jt.init.call(this)},m:function(){return $$t.$a3.s},n:function(a){switch(a){case 0:return"/xl/charts/chart.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$a3.u;case 1:return $$t.$a3.t;default:return $$t.$a3.u}},g:function(){return true},$type:new $.ig.Type("ChartPartManager",$$t.$jt.$type)},true);$c("ChartStylePartManager:a4","PartManagerBase",{init:function(){$$t.$jt.init.call(this)},m:function(){return $$t.$a4.s},n:function(a){switch(a){case 0:return"/xl/charts/style.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$a4.u;case 1:return $$t.$a4.t;default:return $$t.$a4.u}},g:function(){return true},$type:new $.ig.Type("ChartStylePartManager",$$t.$jt.$type)},true);$c("ChartUserShapePartManager:a5","PartManagerBase",{init:function(){$$t.$jt.init.call(this)},m:function(){return $$t.$a5.s},n:function(a){switch(a){case 0:return"/xl/drawings/drawing.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$a5.u;case 1:return $$t.$a5.t;default:return $$t.$a5.u}},g:function(){return true},$type:new $.ig.Type("ChartUserShapePartManager",$$t.$jt.$type)},true);$c("CommentsPartManager:a6","XmlPartManagerBase",{init:function(){$$t.$j3.init.call(this)},m:function(){return $$t.$a6.a2},n:function(a){switch(a){case 0:return"/xl/comments.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$a6.a4;case 1:return $$t.$a6.a3;default:return $$t.$a6.a4}},g:function(){return true},$type:new $.ig.Type("CommentsPartManager",$$t.$j3.$type)},true);$c("ConnectionsPartManager:a7","XmlPartManagerBase",{init:function(){$$t.$j3.init.call(this)},m:function(){return $$t.$a7.a1},n:function(a){switch(a){case 0:return"/xl/connections.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$a7.a4;case 1:return $$t.$a7.a3;default:return $$t.$a7.a4}},g:function(){return false},$type:new $.ig.Type("ConnectionsPartManager",$$t.$j3.$type)},true);$c("CtrlPropPartManager:a8","PartManagerBase",{init:function(){$$t.$jt.init.call(this)},m:function(){return $$t.$a8.s},n:function(a){switch(a){case 0:return"/xl/ctrlProp.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$a8.u;case 1:return $$t.$a8.t;default:return $$t.$a8.u}},g:function(){return false},$type:new $.ig.Type("CtrlPropPartManager",$$t.$jt.$type)},true);$c("DrawingPartManager:a9","XmlPartManagerBase",{init:function(){$$t.$j3.init.call(this)},m:function(){return $$t.$a9.a2},n:function(a){switch(a){case 0:return"/xl/drawings/drawing.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$a9.a4;case 1:return $$t.$a9.a3;default:return $$t.$a9.a4}},g:function(){return true},$type:new $.ig.Type("DrawingPartManager",$$t.$j3.$type)},true);$c("ExternalLinkPartManager:ba","XmlPartManagerBase",{init:function(){$$t.$j3.init.call(this)},m:function(){return $$t.$ba.a2},n:function(a){switch(a){case 0:return"/xl/externalLinks/externalLink.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$ba.a4;case 1:return $$t.$ba.a3;default:return $$t.$ba.a4}},g:function(){return true},$type:new $.ig.Type("ExternalLinkPartManager",$$t.$j3.$type)},true);$c("PivotCacheDefinitionPartManager:bb","XmlPartManagerBase",{init:function(){$$t.$j3.init.call(this)},m:function(){return $$t.$bb.a2},n:function(a){switch(a){case 0:return"/xl/pivotCache/pivotCacheDefinition.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$bb.a4;case 1:return $$t.$bb.a3;default:return $$t.$bb.a4}},g:function(){return true},$type:new $.ig.Type("PivotCacheDefinitionPartManager",$$t.$j3.$type)},true);$c("PivotCacheRecordsPartManager:bc","XmlPartManagerBase",{init:function(){$$t.$j3.init.call(this)},m:function(){return $$t.$bc.a2},n:function(a){switch(a){case 0:return"/xl/pivotCache/pivotCacheDefinition.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$bc.a4;case 1:return $$t.$bc.a3;default:return $$t.$bc.a4}},g:function(){return true},$type:new $.ig.Type("PivotCacheRecordsPartManager",$$t.$j3.$type)},true);$c("PivotTablePartManager:bd","XmlPartManagerBase",{init:function(){$$t.$j3.init.call(this)},m:function(){return $$t.$bd.a2},n:function(a){switch(a){case 0:return"/xl/pivotTables/pivotTable.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$bd.a4;case 1:return $$t.$bd.a3;default:return $$t.$bd.a4}},g:function(){return true},$type:new $.ig.Type("PivotTablePartManager",$$t.$j3.$type)},true);$c("SharedStringsPartManager:be","XmlPartManagerBase",{init:function(){$$t.$j3.init.call(this)},m:function(){return $$t.$be.a1},n:function(a){switch(a){case 0:return"/xl/sharedStrings.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$be.a4;case 1:return $$t.$be.a3;default:return $$t.$be.a4}},g:function(){return false},$type:new $.ig.Type("SharedStringsPartManager",$$t.$j3.$type)},true);$c("SlicerCachePartManager:bf","XmlPartManagerBase",{init:function(){$$t.$j3.init.call(this)},m:function(){return $$t.$bf.a2},n:function(a){switch(a){case 0:return"/xl/slicerCaches/slicerCache.xml";default:return null}},o:function(a){switch(a){case 0:case 1:return $$t.$bf.a3;default:return $$t.$bf.a3}},g:function(){return true},$type:new $.ig.Type("SlicerCachePartManager",$$t.$j3.$type)},true);$c("SlicerPartManager:bg","XmlPartManagerBase",{init:function(){$$t.$j3.init.call(this)},m:function(){return"application/vnd.ms-excel.slicer+xml"},n:function(a){switch(a){case 0:return"/xl/slicers/slicer.xml";default:return null}},o:function(a){switch(a){case 0:case 1:return $$t.$bg.a3;default:return $$t.$bg.a3}},g:function(){return true},$type:new $.ig.Type("SlicerPartManager",$$t.$j3.$type)},true);$c("ExcelStylesPartManager:bh","XmlPartManagerBase",{init:function(){$$t.$j3.init.call(this)},m:function(){return $$t.$bh.a1},n:function(a){switch(a){case 0:return"/xl/styles.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$bh.a4;case 1:return $$t.$bh.a3;default:return $$t.$bh.a4}},g:function(){return false},$type:new $.ig.Type("ExcelStylesPartManager",$$t.$j3.$type)},true);$c("TablePartManager:bi","XmlPartManagerBase",{init:function(){$$t.$j3.init.call(this)},m:function(){return $$t.$bi.a2},n:function(a){switch(a){case 0:return"/xl/tables/table.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$bi.a4;case 1:return $$t.$bi.a3;default:return $$t.$bi.a4}},g:function(){return true},$type:new $.ig.Type("TablePartManager",$$t.$j3.$type)},true);$c("WorkbookPartManagerBase:bj","XmlPartManagerBase",{init:function(){$$t.$j3.init.call(this)},n:function(a){switch(a){case 0:return"/xl/workbook.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$bj.a5;case 1:return $$t.$bj.a4;default:return $$t.$bj.a5}},g:function(){return false},$type:new $.ig.Type("WorkbookPartManagerBase",$$t.$j3.$type)},true);$c("WorksheetPartManager:bk","XmlPartManagerBase",{init:function(){$$t.$j3.init.call(this)},m:function(){return $$t.$bk.a2},n:function(a){switch(a){case 0:return"/xl/worksheets/sheet.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$bk.a4;case 1:return $$t.$bk.a3;default:return $$t.$bk.a4}},g:function(){return true},$type:new $.ig.Type("WorksheetPartManager",$$t.$j3.$type)},true);$c("DrawingMLSpreadsheetDrawing:aw","DrawingNamespaceDefinitionBase",{init:function(){$$t.$iw.init.call(this)},j:function(){return"xdr"},ba:function(){return $$t.$aw.dq},bb:function(){return $$t.$aw.dr},eh:function(a,b){var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){default:break}}},ew:function(a,b){a.ad().p(b,"xdr")},eo:function(a,b,c){var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){default:break}}c=$$v.$cd.h(a.ab().ad);return{p2:c}},e3:function(a,b,c){a.ad().p(b,"xdr");a.ad().u(c.toString())},ed:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},es:function(a){a.ad().p($$t.$aw.ds,"xdr")},ee:function(a,b,c){b=true;c=true;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"fLocksWithSheet":b=$$t.$g7.e(d.d);break;case"fPrintsWithSheet":c=$$t.$g7.e(d.d);break;default:break}}return{p1:b,p2:c}},et:function(a,b,c){a.ad().p($$t.$aw.dt,"xdr");var d;if(b!=true){d=$$t.$g7.g(b);a.ad().h("fLocksWithSheet",d)}if(c!=true){d=$$t.$g7.g(c);a.ad().h("fPrintsWithSheet",d)}},ef:function(a,b){var c=$$t.$aw.r(a,$$t.$aw.du,b);b=c.p2;return{p1:b}},eu:function(a,b){$$t.$aw.af(a,$$t.$aw.du,"xdr",b)},eg:function(a,b){var c=$$t.$aw.eo(a,$$t.$aw.dv,b);b=c.p2;return{p1:b}},ev:function(a,b){$$t.$aw.e3(a,$$t.$aw.dv,b)},ei:function(a,b,c){var d=$$t.$iv.hb(a,$$t.$aw.dy,b,c);b=d.p2;c=d.p3;return{p1:b,p2:c}},ex:function(a,b,c){$$t.$iv.kd(a,$$t.$aw.dy,b,c)},ej:function(a){},ey:function(a){$$t.$aw.ew(a,$$t.$aw.d1)},ek:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},ez:function(a){a.ad().p($$t.$aw.d4,"xdr")},el:function(a,b,c){var d=$$t.$iv.g7(a,$$t.$aw.d6,b,c);b=d.p2;c=d.p3;return{p1:b,p2:c}},e0:function(a,b,c){$$t.$iv.j9(a,$$t.$aw.d6,b,c)},em:function(a,b){var c=$$t.$aw.r(a,$$t.$aw.d7,b);b=c.p2;return{p1:b}},e1:function(a,b){$$t.$aw.af(a,$$t.$aw.d7,"xdr",b)},en:function(a,b){var c=$$t.$aw.eo(a,$$t.$aw.d8,b);b=c.p2;return{p1:b}},e2:function(a,b){$$t.$aw.e3(a,$$t.$aw.d8,b)},ep:function(a){},e4:function(a){$$t.$aw.ew(a,$$t.$aw.ea)},eq:function(a,b){b=0;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"editAs":b=$$t.$i9.b($$t.$x.$type,c.d,b);break;default:break}}return{p1:b}},e5:function(a,b){a.ad().p($$t.$aw.eb,"xdr");var c;if(b!=0){c=$$t.$i9.f($$t.$x.$type,b);a.ad().h("editAs",c)}},er:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},e6:function(a){a.ad().p($$t.$aw.ec,"xdr");var b=a.d()._conformance();a.ad().l($$t.$iv.an,false);a.ad().l($$t.$aw.dn,false)},$type:new $.ig.Type("DrawingMLSpreadsheetDrawing",$$t.$iw.$type)},true);$c("Excel2006Main:ax","XmlNamespaceDefinitionBase",{init:function(){$$t.$i9.init.call(this)},i:function(a){switch(a){case 0:case 1:return $$t.$ax.aq;default:return $$t.$ax.aq}},j:function(){return"xm"},as:function(a,b){var c=$$t.$a0.u(a,$$t.$ax.ap,b,0);b=c.p2;return{p1:b}},au:function(a,b){$$t.$a0.ai(a,$$t.$ax.ap,"xm",b,null,0)},at:function(a,b){var c=$$t.$a0.u(a,$$t.$ax.ar,b,0);b=c.p2;return{p1:b}},av:function(a,b){$$t.$a0.ai(a,$$t.$ax.ar,"xm",b,null,0)},$type:new $.ig.Type("Excel2006Main",$$t.$i9.$type)},true);$c("ExcelNamespace:ay","XmlNamespaceDefinitionBase",{init:function(){$$t.$i9.init.call(this)},i:function(a){switch(a){case 0:case 1:return"urn:schemas-microsoft-com:office:excel";default:return"urn:schemas-microsoft-com:office:excel"}},j:function(){return"x"},cz:function(a,b,c){var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){default:break}}c=$$t.$id.d(a.ab().ad);return{p2:c}},d8:function(a,b,c,d){a.ad().p(b,c);var e=$$t.$id.f(d);if(String.isNullOrEmpty(e)==false){a.ad().u(e)}},by:function(a,b){var c=$$t.$ay.u(a,$$t.$ay.ap,b,0);b=c.p2;return{p1:b}},c6:function(a,b){$$t.$ay.ai(a,$$t.$ay.ap,"x",b,null,0)},bz:function(a,b){var c=$$t.$ay.cz(a,$$t.$ay.aq,b);b=c.p2;return{p1:b}},c7:function(a,b){$$t.$ay.d8(a,$$t.$ay.aq,"x",b)},b0:function(a,b){var c=$$t.$ay.cz(a,$$t.$ay.ar,b);b=c.p2;return{p1:b}},c8:function(a,b){$$t.$ay.d8(a,$$t.$ay.ar,"x",b)},b1:function(a,b){var c=$$t.$ay.cz(a,$$t.$ay.as,b);b=c.p2;return{p1:b}},c9:function(a,b){$$t.$ay.d8(a,$$t.$ay.as,"x",b)},b2:function(a,b){var c=$$t.$ay.cz(a,$$t.$ay.at,b);b=c.p2;return{p1:b}},da:function(a,b){$$t.$ay.d8(a,$$t.$ay.at,"x",b)},b3:function(a,b){var c=$$t.$ay.cz(a,$$t.$ay.au,b);b=c.p2;return{p1:b}},db:function(a,b){$$t.$ay.d8(a,$$t.$ay.au,"x",b)},b4:function(a,b){var c=$$t.$ay.cz(a,$$t.$ay.av,b);b=c.p2;return{p1:b}},dc:function(a,b){$$t.$ay.d8(a,$$t.$ay.av,"x",b)},b5:function(a,b){var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){default:break}}b=$$t.$i9.b($$t.$gb.$type,a.ab().ad,null);return{p1:b}},dd:function(a,b){a.ad().p($$t.$ay.aw,"x");a.ad().u($$t.$i9.f($$t.$gb.$type,b))},b6:function(a,b){var c=$$t.$ay.r(a,$$t.$ay.ax,b);b=c.p2;return{p1:b}},de:function(a,b){$$t.$ay.af(a,$$t.$ay.ax,"x",b)},b7:function(a,b){b=0;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"ObjectType":b=$$t.$i9.b($$t.$ad.$type,c.d,b);break;default:break}}return{p1:b}},df:function(a,b){a.ad().p($$t.$ay.ay,"x");var c;c=$$t.$i9.f($$t.$ad.$type,b);a.ad().h("ObjectType",c)},b8:function(a,b){var c=$$t.$ay.cz(a,$$t.$ay.az,b);b=c.p2;return{p1:b}},dg:function(a,b){$$t.$ay.d8(a,$$t.$ay.az,"x",b)},b9:function(a,b){var c=$$t.$ay.cz(a,$$t.$ay.a0,b);b=c.p2;return{p1:b}},dh:function(a,b){$$t.$ay.d8(a,$$t.$ay.a0,"x",b)},ca:function(a,b){var c=$$t.$ay.r(a,$$t.$ay.a1,b);b=c.p2;return{p1:b}},di:function(a,b){$$t.$ay.af(a,$$t.$ay.a1,"x",b)},cb:function(a,b){var c=$$t.$ay.cz(a,$$t.$ay.a2,b);b=c.p2;return{p1:b}},dj:function(a,b){$$t.$ay.d8(a,$$t.$ay.a2,"x",b)},cc:function(a,b){var c=$$t.$ay.cz(a,$$t.$ay.a3,b);b=c.p2;return{p1:b}},dk:function(a,b){$$t.$ay.d8(a,$$t.$ay.a3,"x",b)},cd:function(a,b){var c=$$t.$ay.cz(a,$$t.$ay.a4,b);b=c.p2;return{p1:b}},dl:function(a,b){$$t.$ay.d8(a,$$t.$ay.a4,"x",b)},ce:function(a,b){var c=$$t.$ay.cz(a,$$t.$ay.a5,b);b=c.p2;return{p1:b}},dm:function(a,b){$$t.$ay.d8(a,$$t.$ay.a5,"x",b)},cf:function(a,b){var c=$$t.$ay.cz(a,$$t.$ay.a6,b);b=c.p2;return{p1:b}},dn:function(a,b){$$t.$ay.d8(a,$$t.$ay.a6,"x",b)},cg:function(a,b){var c=$$t.$ay.cz(a,$$t.$ay.a7,b);b=c.p2;return{p1:b}},dp:function(a,b){$$t.$ay.d8(a,$$t.$ay.a7,"x",b)},ch:function(a,b){var c=$$t.$ay.u(a,$$t.$ay.a8,b,0);b=c.p2;return{p1:b}},dq:function(a,b){$$t.$ay.ai(a,$$t.$ay.a8,"x",b,null,0)},ci:function(a,b){var c=$$t.$ay.u(a,$$t.$ay.a9,b,0);b=c.p2;return{p1:b}},dr:function(a,b){$$t.$ay.ai(a,$$t.$ay.a9,"x",b,null,0)},cj:function(a,b){var c=$$t.$ay.cz(a,$$t.$ay.ba,b);b=c.p2;return{p1:b}},ds:function(a,b){$$t.$ay.d8(a,$$t.$ay.ba,"x",b)},ck:function(a,b){var c=$$t.$ay.cz(a,$$t.$ay.bb,b);b=c.p2;return{p1:b}},dt:function(a,b){$$t.$ay.d8(a,$$t.$ay.bb,"x",b)},cl:function(a,b){var c=$$t.$ay.cz(a,$$t.$ay.bc,b);b=c.p2;return{p1:b}},du:function(a,b){$$t.$ay.d8(a,$$t.$ay.bc,"x",b)},cn:function(a,b){var c=$$t.$ay.cz(a,$$t.$ay.be,b);b=c.p2;return{p1:b}},dw:function(a,b){$$t.$ay.d8(a,$$t.$ay.be,"x",b)},cm:function(a,b){var c=$$t.$ay.cz(a,$$t.$ay.bd,b);b=c.p2;return{p1:b}},dv:function(a,b){$$t.$ay.d8(a,$$t.$ay.bd,"x",b)},co:function(a,b){var c=$$t.$ay.cz(a,$$t.$ay.bf,b);b=c.p2;return{p1:b}},dx:function(a,b){$$t.$ay.d8(a,$$t.$ay.bf,"x",b)},cp:function(a,b){var c=$$t.$ay.cz(a,$$t.$ay.bg,b);b=c.p2;return{p1:b}},dy:function(a,b){$$t.$ay.d8(a,$$t.$ay.bg,"x",b)},cq:function(a,b){var c=$$t.$ay.cz(a,$$t.$ay.bh,b);b=c.p2;return{p1:b}},dz:function(a,b){$$t.$ay.d8(a,$$t.$ay.bh,"x",b)},cs:function(a,b){var c=$$t.$ay.cz(a,$$t.$ay.bj,b);b=c.p2;return{p1:b}},d1:function(a,b){$$t.$ay.d8(a,$$t.$ay.bj,"x",b)},cr:function(a,b){var c=$$t.$ay.cz(a,$$t.$ay.bk,b);b=c.p2;return{p1:b}},d0:function(a,b){$$t.$ay.d8(a,$$t.$ay.bk,"x",b)},ct:function(a,b){var c=$$t.$ay.cz(a,$$t.$ay.bm,b);b=c.p2;return{p1:b}},d2:function(a,b){$$t.$ay.d8(a,$$t.$ay.bm,"x",b)},cu:function(a,b){var c=$$t.$ay.cz(a,$$t.$ay.bn,b);b=c.p2;return{p1:b}},d3:function(a,b){$$t.$ay.d8(a,$$t.$ay.bn,"x",b)},cv:function(a,b){var c=$$t.$ay.r(a,$$t.$ay.bo,b);b=c.p2;return{p1:b}},d4:function(a,b){$$t.$ay.af(a,$$t.$ay.bo,"x",b)},cw:function(a,b){var c=$$t.$ay.cz(a,$$t.$ay.bp,b);b=c.p2;return{p1:b}},d5:function(a,b){$$t.$ay.d8(a,$$t.$ay.bp,"x",b)},cx:function(a,b){var c=$$t.$ay.cz(a,$$t.$ay.bq,b);b=c.p2;return{p1:b}},d6:function(a,b){$$t.$ay.d8(a,$$t.$ay.bq,"x",b)},cy:function(a,b){var c=$$t.$ay.cz(a,$$t.$ay.br,b);b=c.p2;return{p1:b}},d7:function(a,b){$$t.$ay.d8(a,$$t.$ay.br,"x",b)},c0:function(a,b){var c=$$t.$ay.u(a,$$t.$ay.bs,b,0);b=c.p2;return{p1:b}},d9:function(a,b){$$t.$ay.ai(a,$$t.$ay.bs,"x",b,null,0)},c1:function(a,b){var c=$$t.$ay.u(a,$$t.$ay.bt,b,0);b=c.p2;return{p1:b}},ea:function(a,b){$$t.$ay.ai(a,$$t.$ay.bt,"x",b,null,0)},c2:function(a,b){var c=$$t.$ay.cz(a,$$t.$ay.bu,b);b=c.p2;return{p1:b}},eb:function(a,b){$$t.$ay.d8(a,$$t.$ay.bu,"x",b)},c5:function(a,b){var c=$$t.$ay.cz(a,$$t.$ay.bx,b);b=c.p2;return{p1:b}},ee:function(a,b){$$t.$ay.d8(a,$$t.$ay.bx,"x",b)},c3:function(a,b){var c=$$t.$ay.cz(a,$$t.$ay.bv,b);b=c.p2;return{p1:b}},ec:function(a,b){$$t.$ay.d8(a,$$t.$ay.bv,"x",b)},c4:function(a,b){var c=$$t.$ay.cz(a,$$t.$ay.bw,b);b=c.p2;return{p1:b}},ed:function(a,b){$$t.$ay.d8(a,$$t.$ay.bw,"x",b)},$type:new $.ig.Type("ExcelNamespace",$$t.$i9.$type)},true);$c("SpreadsheetML2009Main:az","XmlNamespaceDefinitionBase",{init:function(){$$t.$i9.init.call(this)},i:function(a){switch(a){case 0:case 1:return $$t.$az.bt;default:return $$t.$az.bt}},j:function(){return"x14"},cm:function(a,b,c,d,e,f,g,h,i,j,k,l,m){b=0;c=0;d=0;e=0;f=false;g=false;h=false;i=false;j=null;k=null;l=null;m=null;var o=a.ab().u.getEnumerator();while(o.moveNext()){var n=o.current();switch(n.a.e(a.d())){case"type":b=$$t.$i9.b($$t.$w.$type,n.d,b);break;case"errorStyle":c=$$t.$i9.b($$t.$t.$type,n.d,c);break;case"imeMode":d=$$t.$i9.b($$t.$u.$type,n.d,d);break;case"operator":e=$$t.$i9.b($$t.$v.$type,n.d,e);break;case"allowBlank":f=$$t.$g7.e(n.d);break;case"showDropDown":g=$$t.$g7.e(n.d);break;case"showInputMessage":h=$$t.$g7.e(n.d);break;case"showErrorMessage":i=$$t.$g7.e(n.d);break;case"errorTitle":j=n.d;break;case"error":k=n.d;break;case"promptTitle":l=n.d;break;case"prompt":m=n.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m}},c4:function(a,b,c,d,e,f,g,h,i,j,k,l,m){a.ad().p($$t.$az.a5,"x14");var n;if(b!=0){n=$$t.$i9.f($$t.$w.$type,b);a.ad().h("type",n)}if(c!=0){n=$$t.$i9.f($$t.$t.$type,c);a.ad().h("errorStyle",n)}if(d!=0){n=$$t.$i9.f($$t.$u.$type,d);a.ad().h("imeMode",n)}if(e!=0){n=$$t.$i9.f($$t.$v.$type,e);a.ad().h("operator",n)}if(f!=false){n=$$t.$g7.g(f);a.ad().h("allowBlank",n)}if(g!=false){n=$$t.$g7.g(g);a.ad().h("showDropDown",n)}if(h!=false){n=$$t.$g7.g(h);a.ad().h("showInputMessage",n)}if(i!=false){n=$$t.$g7.g(i);a.ad().h("showErrorMessage",n)}n=j;a.ad().h("errorTitle",n);n=k;a.ad().h("error",n);n=l;a.ad().h("promptTitle",n);n=m;a.ad().h("prompt",n)},cn:function(a,b,c,d,e){b=false;c=$m($$0.$be.$type,null);d=$m($$0.$be.$type,null);e=$m($$0.$be.$type,null);var g=a.ab().u.getEnumerator();while(g.moveNext()){var f=g.current();switch(f.a.e(a.d())){case"disablePrompts":b=$$t.$g7.e(f.d);break;case"xWindow":c=$m($$0.$be.$type,$.ig.util.parseUInt32_1(f.d,$$0.$cg.invariantCulture()));break;case"yWindow":d=$m($$0.$be.$type,$.ig.util.parseUInt32_1(f.d,$$0.$cg.invariantCulture()));break;case"count":e=$m($$0.$be.$type,$.ig.util.parseUInt32_1(f.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b,p2:c,p3:d,p4:e}},c5:function(a,b,c,d,e){a.ad().p($$t.$az.a6,"x14");var f;if(b!=false){f=$$t.$g7.g(b);a.ad().h("disablePrompts",f)}if($l(c,null)){f=c.value().toString();a.ad().h("xWindow",f)}if($l(d,null)){f=d.value().toString();a.ad().h("yWindow",f)}if($l(e,null)){f=e.value().toString();a.ad().h("count",f)}},co:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},c6:function(a){a.ad().p($$t.$az.bg,"x14")},cp:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},c7:function(a){a.ad().p($$t.$az.bh,"x14")},cq:function(a,b){var c=$$t.$a0.u(a,$$t.$az.bo,b,0);b=c.p2;return{p1:b}},c8:function(a,b){$$t.$a0.ai(a,$$t.$az.bo,$$t.$az.bt,b,null,0)},c2:function(a){a.ad().p($$t.$az.a1,"x14")},ck:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case $$t.$az.bo:b=c.d;break}}return{p1:b}},c1:function(a,b,c){a.ad().p($$t.$az.a0,"x14");var d;if(String.isNullOrEmpty(b)==false){d=b;a.ad().i("xmlns","xm",null,d)}if(c.hasValue()&&c.value()){d=$$t.$g7.g(c.value());a.ad().h("pivot",d)}},c0:function(a){a.ad().p($$t.$az.az,"x14")},cy:function(a,b,c,d,e,f,g){var h=$m($$0.$be.$type,null);var i=$m($$0.$aq.$type,null);var j=$m($$0.$aq.$type,null);var k=$m($$0.$aq.$type,null);var l=null;var m=$m($$t.$ap.$type,null);var n=$m($$0.$be.$type,null);var o=$m($$0.$aw.$type,null);var p=$m($$0.$aq.$type,null);$$t.$a0.zg(a,$$t.$az.aw,c,h,d,e,i,j,k,f,l,m,n,o,p,b,g)},cj:function(a,b,c,d){var e=$$t.$a0.t3(a,$$t.$az.ax,b,c,d);b=e.p2;c=e.p3;d=e.p4;return{p1:b,p2:c,p3:d}},cz:function(a,b,c){a.ad().p($$t.$az.ax,"x14");var d;d=$$t.$i9.f($$t.$q.$type,b);a.ad().h("type",d);if(c!=true){d=$$t.$g7.g(c);a.ad().h("gte",d)}},cl:function(a,b,c,d,e,f,g,h,i,j){b=$m($$0.$be.$type,null);c=$m($$0.$be.$type,null);d=$m($$0.$aq.$type,null);e=$m($$0.$aq.$type,null);f=$m($$0.$aq.$type,null);
g=$m($$t.$au.$type,null);h=$m($$0.$aq.$type,null);i=$m($$0.$aq.$type,null);j=$m($$t.$av.$type,null);var l=a.ab().u.getEnumerator();while(l.moveNext()){var k=l.current();switch(k.a.e(a.d())){case"minLength":c=$m($$0.$be.$type,$.ig.util.parseUInt32_1(k.d,$$0.$cg.invariantCulture()));break;case"maxLength":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(k.d,$$0.$cg.invariantCulture()));break;case"showValue":d=$m($$0.$aq.$type,$$t.$g7.e(k.d));break;case"border":e=$m($$0.$aq.$type,$$t.$g7.e(k.d));break;case"gradient":f=$m($$0.$aq.$type,$$t.$g7.e(k.d));break;case"direction":g=$m($$t.$au.$type,$$t.$i9.b($$t.$au.$type,k.d,null));break;case"negativeBarColorSameAsPositive":h=$m($$0.$aq.$type,$$t.$g7.e(k.d));break;case"negativeBarBorderColorSameAsPositive":i=$m($$0.$aq.$type,$$t.$g7.e(k.d));break;case"axisPosition":j=$m($$t.$av.$type,$$t.$i9.b($$t.$av.$type,k.d,null));break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j}},c3:function(a,b,c,d,e,f,g,h,i,j){a.ad().p($$t.$az.a4,"x14");var k;if(b.hasValue()){k=b.value().toString();a.ad().h("minLength",k)}if(c.hasValue()){k=c.value().toString();a.ad().h("maxLength",k)}if(d.hasValue()&&d.value()!=true){k=$$t.$g7.g(d.value());a.ad().h("showValue",k)}if(e.hasValue()&&e.value()){k=$$t.$g7.g(e.value());a.ad().h("border",k)}if(f.hasValue()&&f.value()!=true){k=$$t.$g7.g(f.value());a.ad().h("gradient",k)}if(g.hasValue()&&g.value()!=0){k=$$t.$i9.f($$t.$au.$type,g.value());a.ad().h("direction",k)}if(h.hasValue()&&h.value()!=false){k=$$t.$g7.g(h.value());a.ad().h("negativeBarColorSameAsPositive",k)}if(i.hasValue()&&i.value()!=true){k=$$t.$g7.g(i.value());a.ad().h("negativeBarBorderColorSameAsPositive",k)}if(j.hasValue()&&j.value()!=0){k=$$t.$i9.f($$t.$av.$type,j.value());a.ad().h("axisPosition",k)}},ci:function(a,b,c){b=3;c=0;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"iconSet":b=$$t.$i9.b($$v.$cl.$type,d.d,null);break;case"iconId":c=$.ig.util.parseUInt32_1(d.d,null);break}}return{p1:b,p2:c}},cx:function(a,b,c){a.ad().p($$t.$az.av,"x14");var d;d=$$t.$i9.f($$v.$cl.$type,b);a.ad().h("iconSet",d);d=c.toString();a.ad().h("iconId",d)},cr:function(a,b,c,d,e){b=null;c=false;d=false;e=false;var g=a.ab().u.getEnumerator();while(g.moveNext()){var f=g.current();switch(f.a.e(a.d())){case"name":b=f.d;break;case"icon":c=$$t.$g7.e(f.d);break;case"advise":d=$$t.$g7.e(f.d);break;case"preferPic":e=$$t.$g7.e(f.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e}},c9:function(a,b,c,d,e){a.ad().p($$t.$az.by,"x14");var f;f=b;a.ad().h("name",f);if(c!=false){f=$$t.$g7.g(c);a.ad().h("icon",f)}if(d!=false){f=$$t.$g7.g(d);a.ad().h("advise",f)}if(e!=false){f=$$t.$g7.g(e);a.ad().h("preferPic",f)}},cs:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},da:function(a){a.ad().p($$t.$az.b0,"x14")},cv:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case $$t.$i5.ar:b=c.d;break;default:break}}return{p1:b}},dd:function(a,b){a.ad().p($$t.$az.b8,"x14");var c;c=b;a.ad().h($$t.$i5.ar,c)},ct:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case $$t.$i5.ar:b=c.d;break;default:break}}return{p1:b}},db:function(a,b){a.ad().p($$t.$az.b9,"x14");var c;c=b;a.ad().h($$t.$i5.ar,c)},cu:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},dc:function(a){a.ad().p($$t.$az.ca,"x14")},cw:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},de:function(a){a.ad().p($$t.$az.cc,"x14")},$type:new $.ig.Type("SpreadsheetML2009Main",$$t.$i9.$type)},true);$c("SpreadsheetMLMain:a0","XmlNamespaceDefinitionBase",{init:function(){$$t.$i9.init.call(this)},i:function(a){switch(a){case 0:return $$t.$a0.le;case 1:return $$t.$a0.ld;default:return $$t.$a0.le}},j:function(){return null},tg:function(a,b,c,d){if(a==null){a=new $$6.aj(1,b.length)}a.m(b,d,c-d);d=c+1;return{p0:a,p3:d}},hd:function(a){if(a==null){return null}var b=null;var c=0;for(var d=0;d<a.length;d++){var e=a.charAt(d);if(e=="_"){if(a.length<=d+6||a.charAt(d+1)!="x"||a.charAt(d+6)!="_"){continue}if($$v.$aq.d(a.charAt(d+2))==false||$$v.$aq.d(a.charAt(d+3))==false||$$v.$aq.d(a.charAt(d+4))==false||$$v.$aq.d(a.charAt(d+5))==false){continue}var f=$$t.$a0.tg(b,a,d,c);b=f.p0;c=f.p3;b.l("_x005F_")}if(e.charCodeAt(0)==9||e.charCodeAt(0)==10||e.charCodeAt(0)==13||32<=e.charCodeAt(0)&&e.charCodeAt(0)<=55295||57344<=e.charCodeAt(0)&&e.charCodeAt(0)<=65533){continue}if(65535<=e.charCodeAt(0)){continue}var g=$$t.$a0.tg(b,a,d,c);b=g.p0;c=g.p3;b.q("_x{0:X4}_",e.charCodeAt(0))}if(c==0){return a}var h=$$t.$a0.tg(b,a,a.length,c);b=h.p0;c=h.p3;return b.toString()},rt:function(a,b){if(a==null){return null}var c=null;var d=0;for(var e=0;e<a.length;e++){var f=a.charAt(e);if(f!="_"){if(b){if(f=="\n"){var g=$$t.$a0.tg(c,a,e,d);c=g.p0;d=g.p3}else if(f=="\r"){var h=$$t.$a0.tg(c,a,e,d);c=h.p0;d=h.p3;if(e+1<a.length&&a.charAt(e+1)=="\n"){e++;d++}}}continue}if(a.length<=e+6||a.charAt(e+1)!="x"||a.charAt(e+6)!="_"){continue}var i=a.substr(e+2,4);var j;if(function(){var k=$8(i,515,$$0.$cg.invariantCulture(),j);j=k.p3;return k.ret}()==false){continue}var k=$$t.$a0.tg(c,a,e,d);c=k.p0;d=k.p3;c.h($u(j));e+=6;d+=6}if(d==0){return a}var l=$$t.$a0.tg(c,a,a.length,d);c=l.p0;d=l.p3;return c.toString()},ui:function(a,b,c){c=true;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"val":c=$$t.$g7.e(d.d);break;default:break}}return{p2:c}},zx:function(a,b,c){a.ad().p(b,null);var d;if(c!=true){d=$$t.$g7.g(c);a.ad().h("val",d)}},uj:function(a,b,c){c=0;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"style":c=$$t.$i9.b($$t.$k.$type,d.d,c);break;default:break}}return{p2:c}},zy:function(a,b,c){a.ad().p(b,null);var d;if(c!=0){d=$$t.$i9.f($$t.$k.$type,c);a.ad().h("style",d)}},uk:function(a,b,c,d,e,f,g){c=$m($$0.$aq.$type,null);d=$m($$0.$be.$type,null);e=$m($$t.$ii.$type,null);f=$m($$0.$be.$type,null);g=0;var i=a.ab().u.getEnumerator();while(i.moveNext()){var h=i.current();switch(h.a.e(a.d())){case"auto":c=$m($$0.$aq.$type,$$t.$g7.e(h.d));break;case"indexed":d=$m($$0.$be.$type,$.ig.util.parseUInt32_1(h.d,$$0.$cg.invariantCulture()));break;case"rgb":e=$m($$t.$ii.$type,$$t.$ii.d(h.d));break;case"theme":f=$m($$0.$be.$type,$.ig.util.parseUInt32_1(h.d,$$0.$cg.invariantCulture()));break;case"tint":g=$ak(h.d,$$0.$cg.invariantCulture());break;default:break}}return{p2:c,p3:d,p4:e,p5:f,p6:g}},zz:function(a,b,c,d,e,f,g){a.ad().p(b,null);var h;if($l(c,null)){h=$$t.$g7.g(c.value());a.ad().h("auto",h)}if($l(d,null)){h=d.value().toString();a.ad().h("indexed",h)}if($l(e,null)){h=e.value().toString();a.ad().h("rgb",h)}if($l(f,null)){h=f.value().toString();a.ad().h("theme",h)}if(g!=0){h=g.toString();a.ad().h("tint",h)}},ul:function(a,b,c){var d=$$t.$a0.u(a,b,c,0);c=d.p2;return{p2:c}},z0:function(a,b,c){$$t.$a0.ai(a,b,null,c,null,0)},um:function(a,b,c,d){c=0;d=0;var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case"count":c=$.ig.util.parseUInt32_1(e.d,$$0.$cg.invariantCulture());break;case"manualBreakCount":d=$.ig.util.parseUInt32_1(e.d,$$0.$cg.invariantCulture());break;default:break}}return{p2:c,p3:d}},z1:function(a,b,c,d){a.ad().p(b,null);var e;if(c!=0){e=c.toString();a.ad().h("count",e)}if(d!=0){e=d.toString();a.ad().h("manualBreakCount",e)}},un:function(a,b,c,d){d=false;var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case"array":d=$$t.$g7.e(e.d);break;default:break}}c=a.ab().ad;return{p2:c,p3:d}},z2:function(a,b,c,d){a.ad().p(b,null);var e;if(d!=false){e=$$t.$g7.g(d);a.ad().h("array",e)}a.ad().u(c)},th:function(a,b,c,d,e,f,g,h,i,j){b=$m($$t.$ab.$type,null);c=$m($$t.$as.$type,null);d=$m($$0.$be.$type,null);e=false;f=$m($$0.$be.$type,null);g=$m($$0.$aw.$type,null);h=false;i=false;j=$m($$0.$be.$type,null);var l=a.ab().u.getEnumerator();while(l.moveNext()){var k=l.current();switch(k.a.e(a.d())){case"horizontal":b=$m($$t.$ab.$type,$$t.$i9.b($$t.$ab.$type,k.d,null));break;case"vertical":c=$m($$t.$as.$type,$$t.$i9.b($$t.$as.$type,k.d,null));break;case"textRotation":d=$m($$0.$be.$type,$.ig.util.parseUInt32_1(k.d,$$0.$cg.invariantCulture()));break;case"wrapText":e=$$t.$g7.e(k.d);break;case"indent":f=$m($$0.$be.$type,$.ig.util.parseUInt32_1(k.d,$$0.$cg.invariantCulture()));break;case"relativeIndent":g=$m($$0.$aw.$type,$aa(k.d,$$0.$cg.invariantCulture()));break;case"justifyLastLine":h=$$t.$g7.e(k.d);break;case"shrinkToFit":i=$$t.$g7.e(k.d);break;case"readingOrder":j=$m($$0.$be.$type,$.ig.util.parseUInt32_1(k.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j}},yw:function(a,b,c,d,e,f,g,h,i,j){a.ad().p($$t.$a0.cj,null);var k;if($l(b,null)){k=$$t.$i9.f($$t.$ab.$type,b.value());a.ad().h("horizontal",k)}if($l(c,null)){k=$$t.$i9.f($$t.$as.$type,c.value());a.ad().h("vertical",k)}if($l(d,null)){k=d.value().toString();a.ad().h("textRotation",k)}if(e!=false){k=$$t.$g7.g(e);a.ad().h("wrapText",k)}if($l(f,null)){k=f.value().toString();a.ad().h("indent",k)}if($l(g,null)){k=g.value().toString();a.ad().h("relativeIndent",k)}if(h!=false){k=$$t.$g7.g(h);a.ad().h("justifyLastLine",k)}if(i!=false){k=$$t.$g7.g(i);a.ad().h("shrinkToFit",k)}if($l(j,null)){k=j.value().toString();a.ad().h("readingOrder",k)}},ti:function(a,b,c){b=false;c=false;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"moveWithCells":b=$$t.$g7.e(d.d);break;case"sizeWithCells":c=$$t.$g7.e(d.d);break;default:break}}return{p1:b,p2:c}},yx:function(a,b,c){a.ad().p($$t.$a0.co,null);var d;if(b!=false){d=$$t.$g7.g(b);a.ad().h("moveWithCells",d)}if(c!=false){d=$$t.$g7.g(c);a.ad().h("sizeWithCells",d)}},tj:function(a,b){var c=$$t.$a0.u(a,$$t.$a0.cz,b,0);b=c.p2;return{p1:b}},yy:function(a,b){$$t.$a0.ai(a,$$t.$a0.cz,null,b,null,0)},tk:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},yz:function(a){a.ad().p($$t.$a0.c1,null)},tl:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"ref":b=c.d;break;default:break}}return{p1:b}},y0:function(a,b){a.ad().p($$t.$a0.c5,null);var c;c=b;a.ad().h("ref",c)},tm:function(a,b){var c=$$t.$a0.ui(a,$$t.$a0.dc,b);b=c.p2;return{p1:b}},y1:function(a,b){$$t.$a0.zx(a,$$t.$a0.dc,b)},tn:function(a,b,c,d,e,f){var g=$$t.$a0.uk(a,$$t.$a0.dg,b,c,d,e,f);b=g.p2;c=g.p3;d=g.p4;e=g.p5;f=g.p6;return{p1:b,p2:c,p3:d,p4:e,p5:f}},y2:function(a,b,c,d,e,f){$$t.$a0.zz(a,$$t.$a0.dg,b,c,d,e,f)},to:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},y3:function(a){a.ad().p($$t.$a0.dj,null)},tp:function(a,b,c,d){b=false;c=false;d=true;var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case"diagonalUp":b=$$t.$g7.e(e.d);break;case"diagonalDown":c=$$t.$g7.e(e.d);break;case"outline":d=$$t.$g7.e(e.d);break;default:break}}return{p1:b,p2:c,p3:d}},y4:function(a,b,c,d){a.ad().p($$t.$a0.dk,null);var e;if(b!=false){e=$$t.$g7.g(b);a.ad().h("diagonalUp",e)}if(c!=false){e=$$t.$g7.g(c);a.ad().h("diagonalDown",e)}if(d!=true){e=$$t.$g7.g(d);a.ad().h("outline",e)}},tq:function(a,b){b=$m($$0.$be.$type,null);var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"count":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(c.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b}},y5:function(a,b){a.ad().p($$t.$a0.dm,null);var c;if($l(b,null)){c=b.value().toString();a.ad().h("count",c)}},tr:function(a,b){var c=$$t.$a0.uj(a,$$t.$a0.dn,b);b=c.p2;return{p1:b}},y6:function(a,b){$$t.$a0.zy(a,$$t.$a0.dn,b)},ts:function(a,b,c,d,e,f){b=0;c=0;d=0;e=false;f=false;var h=a.ab().u.getEnumerator();while(h.moveNext()){var g=h.current();switch(g.a.e(a.d())){case"id":b=$.ig.util.parseUInt32_1(g.d,$$0.$cg.invariantCulture());break;case"min":c=$.ig.util.parseUInt32_1(g.d,$$0.$cg.invariantCulture());break;case"max":d=$.ig.util.parseUInt32_1(g.d,$$0.$cg.invariantCulture());break;case"man":e=$$t.$g7.e(g.d);break;case"pt":f=$$t.$g7.e(g.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f}},y7:function(a,b,c,d,e,f){a.ad().p($$t.$a0.dq,null);var g;if(b!=0){g=b.toString();a.ad().h("id",g)}if(c!=0){g=c.toString();a.ad().h("min",g)}if(d!=0){g=d.toString();a.ad().h("max",g)}if(e!=false){g=$$t.$g7.g(e);a.ad().h("man",g)}if(f!=false){g=$$t.$g7.g(f);a.ad().h("pt",g)}},tt:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b=$m($$0.$be.$type,null);c=1;d=false;e=0;f=false;g=100;h=.001;i=true;j=true;k=true;l=true;m=$m($$0.$be.$type,null);n=$m($$0.$aq.$type,null);var p=a.ab().u.getEnumerator();while(p.moveNext()){var o=p.current();switch(o.a.e(a.d())){case"calcId":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(o.d,$$0.$cg.invariantCulture()));break;case"calcMode":c=$$t.$i9.b($$t.$l.$type,o.d,c);break;case"fullCalcOnLoad":d=$$t.$g7.e(o.d);break;case"refMode":e=$$t.$i9.b($$t.$ak.$type,o.d,e);break;case"iterate":f=$$t.$g7.e(o.d);break;case"iterateCount":g=$.ig.util.parseUInt32_1(o.d,$$0.$cg.invariantCulture());break;case"iterateDelta":h=$ak(o.d,$$0.$cg.invariantCulture());break;case"fullPrecision":i=$$t.$g7.e(o.d);break;case"calcCompleted":j=$$t.$g7.e(o.d);break;case"calcOnSave":k=$$t.$g7.e(o.d);break;case"concurrentCalc":l=$$t.$g7.e(o.d);break;case"concurrentManualCount":m=$m($$0.$be.$type,$.ig.util.parseUInt32_1(o.d,$$0.$cg.invariantCulture()));break;case"forceFullCalc":n=$m($$0.$aq.$type,$$t.$g7.e(o.d));break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n}},y8:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){a.ad().p($$t.$a0.d0,null);var o;if($l(b,null)){o=b.value().toString();a.ad().h("calcId",o)}if(c!=1){o=$$t.$i9.f($$t.$l.$type,c);a.ad().h("calcMode",o)}if(d!=false){o=$$t.$g7.g(d);a.ad().h("fullCalcOnLoad",o)}if(e!=0){o=$$t.$i9.f($$t.$ak.$type,e);a.ad().h("refMode",o)}if(f!=false){o=$$t.$g7.g(f);a.ad().h("iterate",o)}if(g!=100){o=g.toString();a.ad().h("iterateCount",o)}if(h!=.001){o=h.toString();a.ad().h("iterateDelta",o)}if(i!=true){o=$$t.$g7.g(i);a.ad().h("fullPrecision",o)}if(j!=true){o=$$t.$g7.g(j);a.ad().h("calcCompleted",o)}if(k!=true){o=$$t.$g7.g(k);a.ad().h("calcOnSave",o)}if(l!=true){o=$$t.$g7.g(l);a.ad().h("concurrentCalc",o)}if($l(m,null)){o=m.value().toString();a.ad().h("concurrentManualCount",o)}if($l(n,null)){o=$$t.$g7.g(n.value());a.ad().h("forceFullCalc",o)}},tu:function(a,b,c){var d=$$t.$a0.un(a,$$t.$a0.d1,b,c);b=d.p2;c=d.p3;return{p1:b,p2:c}},y9:function(a,b,c){$$t.$a0.z2(a,$$t.$a0.d1,b,c)},tv:function(a,b,c,d,e,f,g){b=null;c=0;d=2;e=0;f=0;g=false;var i=a.ab().u.getEnumerator();while(i.moveNext()){var h=i.current();switch(h.a.e(a.d())){case"r":b=h.d;break;case"s":c=$.ig.util.parseUInt32_1(h.d,$$0.$cg.invariantCulture());break;case"t":d=$$t.$a0.aq(h.d);break;case"cm":e=$.ig.util.parseUInt32_1(h.d,$$0.$cg.invariantCulture());break;case"vm":f=$.ig.util.parseUInt32_1(h.d,$$0.$cg.invariantCulture());break;case"ph":g=$$t.$g7.e(h.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g}},aq:function(a){switch(a){case"b":return 0;case"d":return 1;case"e":return 3;case"n":return 2;case"s":return 4;case"str":return 5;case"inlineStr":return 6;default:return 2}},za:function(a,b,c,d,e,f,g){a.ad().r("c");a.ad().j("r",b);if(c!=0){a.ad().j("s",c.toString())}if(d!=2){a.ad().j("t",$$t.$i.a(d))}if(e!=0){a.ad().j("cm",e.toString())}if(f!=0){a.ad().j("vm",f.toString())}if(g!=false){a.ad().j("ph",$$t.$g7.g(g))}},tw:function(a,b,c,d){b=null;c=2;d=0;var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case"r":b=e.d;break;case"t":c=$$t.$i9.b($$v.$ci.$type,e.d,c);break;case"vm":d=$.ig.util.parseUInt32_1(e.d,$$0.$cg.invariantCulture());break;default:break}}return{p1:b,p2:c,p3:d}},zb:function(a,b,c,d){a.ad().p($$t.$a0.d4,null);var e;e=b;a.ad().h("r",e);if(c!=2){e=$$t.$i.a(c);a.ad().h("t",e)}if(d!=0){e=d.toString();a.ad().h("vm",e)}},tx:function(a,b,c,d,e,f,g){c=null;b=0;d=$m($$0.$be.$type,null);e=$m($$0.$be.$type,null);f=false;g=false;var i=a.ab().u.getEnumerator();while(i.moveNext()){var h=i.current();switch(h.a.e(a.d())){case"name":c=$$t.$a0.rt(h.d,false);break;case"xfId":b=$.ig.util.parseUInt32_1(h.d,$$0.$cg.invariantCulture());break;case"builtinId":d=$m($$0.$be.$type,$.ig.util.parseUInt32_1(h.d,$$0.$cg.invariantCulture()));break;case"iLevel":e=$m($$0.$be.$type,$.ig.util.parseUInt32_1(h.d,$$0.$cg.invariantCulture()));break;case"hidden":f=$$t.$g7.e(h.d);break;case"customBuiltin":g=$$t.$g7.e(h.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g}},zc:function(a,b,c,d,e,f,g){a.ad().p($$t.$a0.d7,null);var h;h=$$t.$a0.hd(c);a.ad().h("name",h);h=b.toString();a.ad().h("xfId",h);if($l(d,null)){h=d.value().toString();a.ad().h("builtinId",h)}if($l(e,null)){h=e.value().toString();a.ad().h("iLevel",h)}if(f!=false){h=$$t.$g7.g(f);a.ad().h("hidden",h)}if(g!=false){h=$$t.$g7.g(g);a.ad().h("customBuiltin",h)}},ty:function(a,b){b=$m($$0.$be.$type,null);var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"count":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(c.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b}},zd:function(a,b){a.ad().p($$t.$a0.d8,null);var c;if($l(b,null)){c=b.value().toString();a.ad().h("count",c)}},tz:function(a,b){b=$m($$0.$be.$type,null);var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"count":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(c.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b}},ze:function(a,b){a.ad().p($$t.$a0.d9,null);var c;if($l(b,null)){c=b.value().toString();a.ad().h("count",c)}},t0:function(a,b){b=$m($$0.$be.$type,null);var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"count":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(c.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b}},zf:function(a,b){a.ad().p($$t.$a0.ea,null);var c;if($l(b,null)){c=b.value().toString();a.ad().h("count",c)}},t1:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){c=$m($$t.$p.$type,null);d=$m($$0.$be.$type,null);e=$m($$0.$aw.$type,null);f=$m($$0.$aq.$type,null);g=true;h=false;i=false;j=$m($$t.$s.$type,null);k=null;l=$m($$t.$ap.$type,null);m=$m($$0.$be.$type,null);n=$m($$0.$aw.$type,null);o=false;p=null;q=$m($$0.$aq.$type,null);var s=a.ab().u.getEnumerator();while(s.moveNext()){var r=s.current();var t1=r.a.e(a.d());L0:while(true){switch(t1){case"type":c=$m($$t.$p.$type,$$t.$i9.b($$t.$p.$type,r.d,null));break;case"dxfId":d=$m($$0.$be.$type,$.ig.util.parseUInt32_1(r.d,$$0.$cg.invariantCulture()));break;case"priority":e=$m($$0.$aw.$type,$aa(r.d,$$0.$cg.invariantCulture()));break;case"stopIfTrue":f=$m($$0.$aq.$type,$$t.$g7.e(r.d));break;case"aboveAverage":g=$$t.$g7.e(r.d);break;case"activePresent":if(b!=$$t.$az.aw){t1=void 0;continue L0}q=$m($$0.$aq.$type,$$t.$g7.e(r.d));break;case"percent":h=$$t.$g7.e(r.d);break;case"bottom":i=$$t.$g7.e(r.d);break;case"operator":j=$m($$t.$s.$type,$$t.$i9.b($$t.$s.$type,r.d,null));break;case"text":k=r.d;break;case"timePeriod":l=$m($$t.$ap.$type,$$t.$i9.b($$t.$ap.$type,r.d,null));break;case"rank":m=$m($$0.$be.$type,$.ig.util.parseUInt32_1(r.d,$$0.$cg.invariantCulture()));break;case"stdDev":n=$m($$0.$aw.$type,$aa(r.d,$$0.$cg.invariantCulture()));break;case"equalAverage":o=$$t.$g7.e(r.d);break;case"id":if(b!=$$t.$az.aw){t1=void 0;continue L0}p=r.d;break;default:break}break}}return{p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n,p14:o,p15:p,p16:q}},zg:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){a.ad().p(b,null);var r;if($l(c,null)){r=$$t.$i9.f($$t.$p.$type,c.value());a.ad().h("type",r)}if($l(d,null)){r=d.value().toString();a.ad().h("dxfId",r)}if(e!=0){r=e.toString();a.ad().h("priority",r)}if(f!=false){r=$$t.$g7.g(f);a.ad().h("stopIfTrue",r)}if(g.hasValue()){r=$$t.$g7.g(g.value());a.ad().h("aboveAverage",r)}if(h.hasValue()){r=$$t.$g7.g(h.value());a.ad().h("percent",r)}if(i.hasValue()){r=$$t.$g7.g(i.value());a.ad().h("bottom",r)}if($l(j,null)){r=$$t.$i9.f($$t.$s.$type,j.value());a.ad().h("operator",r)}r=k;a.ad().h("text",r);if($l(l,null)){r=$$t.$i9.f($$t.$ap.$type,l.value());a.ad().h("timePeriod",r)}if($l(m,null)){r=m.value().toString();a.ad().h("rank",r)}if($l(n,null)){r=n.value().toString();a.ad().h("stdDev",r)}if(o.hasValue()){r=$$t.$g7.g(o.hasValue());a.ad().h("equalAverage",r)}if(String.isNullOrEmpty(p)==false){r=p;a.ad().h("id",r)}if(q.hasValue()&&q.value()){if(b!=$$t.$az.aw){}r=$$t.$g7.g(q.value());a.ad().h("activePresent",r)}},t2:function(a,b,c,d){var e=$$t.$a0.t3(a,$$t.$a0.eg,b,c,d);b=e.p2;c=e.p3;d=e.p4;return{p1:b,p2:c,p3:d}},t3:function(a,b,c,d,e){c=0;d=null;e=true;var g=a.ab().u.getEnumerator();while(g.moveNext()){var f=g.current();switch(f.a.e(a.d())){case"type":c=$$t.$i9.b($$t.$q.$type,f.d,c);break;case"val":d=f.d;break;case"gte":e=$$t.$g7.e(f.d);break;default:break}}return{p2:c,p3:d,p4:e}},zh:function(a,b,c,d){a.ad().p($$t.$a0.eg,null);var e;e=$$t.$i9.f($$t.$q.$type,b);a.ad().h("type",e);e=c;a.ad().h("val",e);if(d!=true){e=$$t.$g7.g(d);a.ad().h("gte",e)}},t4:function(a,b,c){var d=$$t.$a0.um(a,$$t.$a0.ep,b,c);b=d.p2;c=d.p3;return{p1:b,p2:c}},zi:function(a,b,c){$$t.$a0.z1(a,$$t.$a0.ep,b,c)},t5:function(a,b,c,d,e,f,g,h,i,j,k){b=0;c=0;d=$m(Number,null);e=0;f=false;g=false;h=false;i=false;j=0;k=false;var m=a.ab().u.getEnumerator();while(m.moveNext()){var l=m.current();switch(l.a.e(a.d())){case"min":b=$.ig.util.parseUInt32_1(l.d,$$0.$cg.invariantCulture());break;case"max":c=$.ig.util.parseUInt32_1(l.d,$$0.$cg.invariantCulture());break;case"width":d=$m(Number,$ak(l.d,$$0.$cg.invariantCulture()));break;case"style":e=$.ig.util.parseUInt32_1(l.d,$$0.$cg.invariantCulture());break;case"hidden":f=$$t.$g7.e(l.d);break;case"bestFit":g=$$t.$g7.e(l.d);break;case"customWidth":h=$$t.$g7.e(l.d);break;case"phonetic":i=$$t.$g7.e(l.d);break;case"outlineLevel":j=$ae(l.d,$$0.$cg.invariantCulture());break;case"collapsed":k=$$t.$g7.e(l.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k}},zj:function(a,b,c,d,e,f,g,h,i,j,k){a.ad().p($$t.$a0.eo,null);var l;l=b.toString();a.ad().h("min",l);l=c.toString();a.ad().h("max",l);if($l(d,null)){l=d.value().toString();a.ad().h("width",l)}if(e!=0){l=e.toString();a.ad().h("style",l)}if(f!=false){l=$$t.$g7.g(f);a.ad().h("hidden",l)}if(g!=false){l=$$t.$g7.g(g);a.ad().h("bestFit",l)}if(h!=false){l=$$t.$g7.g(h);a.ad().h("customWidth",l)}if(i!=false){l=$$t.$g7.g(i);a.ad().h("phonetic",l)}if(j!=0){l=j.toString();a.ad().h("outlineLevel",l)}if(k!=false){l=$$t.$g7.g(k);a.ad().h("collapsed",l)}},t6:function(a,b,c,d,e,f){var g=$$t.$a0.uk(a,$$t.$a0.es,b,c,d,e,f);b=g.p2;c=g.p3;d=g.p4;e=g.p5;f=g.p6;return{p1:b,p2:c,p3:d,p4:e,p5:f}},zk:function(a,b,c,d,e,f){$$t.$a0.zz(a,$$t.$a0.es,b,c,d,e,f)},t7:function(a,b,c){b=$m($$0.$be.$type,null);c=true;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"dxfId":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(d.d,$$0.$cg.invariantCulture()));break;case"cellColor":c=$$t.$g7.e(d.d);break;default:break}}return{p1:b,p2:c}},zl:function(a,b,c){a.ad().p($$t.$a0.et,null);var d;if($l(b,null)){d=b.value().toString();a.ad().h("dxfId",d)}d=$$t.$g7.g(c);a.ad().h("cellColor",d)},zm:function(a){a.ad().p($$t.$a0.ew,null)},t8:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},zn:function(a){a.ad().p($$t.$a0.ev,null)},t9:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},zo:function(a){a.ad().p($$t.$a0.ex,null)},ua:function(a,b,c,d,e){b=null;c=0;d=$m($$t.$aa.$type,null);e=$m($$0.$be.$type,null);var g=a.ab().u.getEnumerator();while(g.moveNext()){var f=g.current();switch(f.a.e(a.d())){case"ref":b=f.d;break;case"authorId":c=$.ig.util.parseUInt32_1(f.d,$$0.$cg.invariantCulture());break;case"guid":d=$m($$t.$aa.$type,$$t.$aa.c(f.d));break;case"shapeId":e=$m($$0.$be.$type,$.ig.util.parseUInt32_1(f.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b,p2:c,p3:d,p4:e}},zp:function(a,b,c,d,e){a.ad().p($$t.$a0.ez,null);var f;f=b;a.ad().h("ref",f);f=c.toString();a.ad().h("authorId",f);if($l(d,null)){f=d.value().toString();a.ad().h("guid",f)}if($l(e,null)){f=e.value().toString();a.ad().h("shapeId",f)}},ub:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},zq:function(a){a.ad().p($$t.$a0.e1,null)},uc:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},zr:function(a){a.ad().p($$t.$a0.e2,null)},ud:function(a,b){var c=$$t.$a0.ui(a,$$t.$a0.e5,b);b=c.p2;return{p1:b}},zs:function(a,b){$$t.$a0.zx(a,$$t.$a0.e5,b)},ue:function(a,b,c){b=null;c=false;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"sqref":b=$$t.$i9.e(String,d.d,function(f){return f});break;case"pivot":c=$$t.$g7.e(d.d);break;default:break}}return{p1:b,p2:c}},zt:function(a,b,c){a.ad().p($$t.$a0.e6,null);var d;if(b!=null){d=$.ig.util.stringJoin1(String," ",b);a.ad().h("sqref",d)}if(c!=false){d=$$t.$g7.g(c);a.ad().h("pivot",d)}},uf:function(a,b,c,d){b=0;c=null;d=null;var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case"shapeId":b=$.ig.util.parseUInt32_1(e.d,$$0.$cg.invariantCulture());break;case $$t.$i5.ar:c=e.d;break;case"name":d=e.d;break;default:break}}return{p1:b,p2:c,p3:d}},zu:function(a,b,c,d){a.ad().p($$t.$a0.e9,null);var e;e=b.toString();a.ad().h("shapeId",e);e=c;a.ad().h($$t.$i5.ar,e);e=d;a.ad().h("name",e)},ug:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){b=true;c=true;d=true;e=false;f=false;g=false;h=true;i=true;j=true;k=null;l=null;m=null;n=null;o="pict";p=null;var r=a.ab().u.getEnumerator();while(r.moveNext()){var q=r.current();switch(q.a.e(a.d())){case"locked":b=$$t.$g7.e(q.d);break;case"defaultSize":c=$$t.$g7.e(q.d);break;case"print":d=$$t.$g7.e(q.d);break;case"disabled":e=$$t.$g7.e(q.d);break;case"recalcAlways":f=$$t.$g7.e(q.d);break;case"uiObject":g=$$t.$g7.e(q.d);break;case"autoFill":h=$$t.$g7.e(q.d);break;case"autoLine":i=$$t.$g7.e(q.d);break;case"autoPict":j=$$t.$g7.e(q.d);break;case"macro":k=q.d;break;case"altText":l=q.d;break;case"linkedCell":m=q.d;break;case"listFillRange":n=q.d;break;case"cf":o=q.d;break;case $$t.$i5.ar:p=q.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n,p14:o,p15:p}},zv:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){a.ad().p($$t.$a0.fa,null);var q;if(b!=true){q=$$t.$g7.g(b);a.ad().h("locked",q)}if(c!=true){q=$$t.$g7.g(c);a.ad().h("defaultSize",q)}if(d!=true){q=$$t.$g7.g(d);a.ad().h("print",q)}if(e!=false){q=$$t.$g7.g(e);a.ad().h("disabled",q)}if(f!=false){q=$$t.$g7.g(f);a.ad().h("recalcAlways",q)}if(g!=false){q=$$t.$g7.g(g);a.ad().h("uiObject",q)}if(h!=true){q=$$t.$g7.g(h);a.ad().h("autoFill",q)}if(i!=true){q=$$t.$g7.g(i);a.ad().h("autoLine",q)}if(j!=true){q=$$t.$g7.g(j);a.ad().h("autoPict",q)}q=k;$$t.$iw.da(a,q);q=l;a.ad().h("altText",q);q=m;a.ad().h("linkedCell",q);q=n;a.ad().h("listFillRange",q);q=o;a.ad().h("cf",q);q=p;a.ad().h($$t.$i5.ar,q)},uh:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},zw:function(a){a.ad().p($$t.$a0.fb,null)},uo:function(a,b,c){c=2;b=null;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"operator":c=$$t.$i9.b($$v.$cm.$type,d.d,c);break;case"val":b=d.d;break;default:break}}return{p1:b,p2:c}},z3:function(a,b,c){a.ad().p($$t.$a0.fg,null);var d;if(c!=2){d=$$t.$i9.f($$v.$cm.$type,c);a.ad().h("operator",d)}d=b;a.ad().h("val",d)},up:function(a,b){b=false;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"and":b=$$t.$g7.e(c.d);break;default:break}}return{p1:b}},z4:function(a,b){a.ad().p($$t.$a0.fh,null);var c;if(b!=false){c=$$t.$g7.g(b);a.ad().h("and",c)}},uq:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){b=new $$t.aa;c=100;d=64;e=false;f=false;g=true;h=true;i=true;j=true;k=false;l=false;m=false;n=false;o=false;p=false;q=0;r=false;s=0;t=true;u=null;var w=a.ab().u.getEnumerator();while(w.moveNext()){var v=w.current();switch(v.a.e(a.d())){case"guid":b=$$t.$aa.c(v.d);break;case"scale":c=$.ig.util.parseUInt32_1(v.d,$$0.$cg.invariantCulture());break;case"colorId":d=$.ig.util.parseUInt32_1(v.d,$$0.$cg.invariantCulture());break;case"showPageBreaks":e=$$t.$g7.e(v.d);break;case"showFormulas":f=$$t.$g7.e(v.d);break;case"showGridLines":g=$$t.$g7.e(v.d);break;case"showRowCol":h=$$t.$g7.e(v.d);break;case"outlineSymbols":i=$$t.$g7.e(v.d);break;case"zeroValues":j=$$t.$g7.e(v.d);break;case"fitToPage":k=$$t.$g7.e(v.d);break;case"printArea":l=$$t.$g7.e(v.d);break;case"filter":m=$$t.$g7.e(v.d);break;case"showAutoFilter":n=$$t.$g7.e(v.d);break;case"hiddenRows":o=$$t.$g7.e(v.d);break;case"hiddenColumns":p=$$t.$g7.e(v.d);break;case"state":q=$$t.$i9.b($$t.$al.$type,v.d,q);break;case"filterUnique":r=$$t.$g7.e(v.d);break;case"view":s=$$t.$i9.b($$t.$am.$type,v.d,s);break;case"showRuler":t=$$t.$g7.e(v.d);break;case"topLeftCell":u=v.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n,p14:o,p15:p,p16:q,p17:r,p18:s,p19:t,p20:u}},z5:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){a.ad().p($$t.$a0.fm,null);var v;v=b.toString();a.ad().h("guid",v);if(c!=100){v=c.toString();a.ad().h("scale",v)}if(d!=64){v=d.toString();a.ad().h("colorId",v)}if(e!=false){v=$$t.$g7.g(e);a.ad().h("showPageBreaks",v)}if(f!=false){v=$$t.$g7.g(f);a.ad().h("showFormulas",v)}if(g!=true){v=$$t.$g7.g(g);a.ad().h("showGridLines",v)}if(h!=true){v=$$t.$g7.g(h);a.ad().h("showRowCol",v)}if(i!=true){v=$$t.$g7.g(i);a.ad().h("outlineSymbols",v)}if(j!=true){v=$$t.$g7.g(j);a.ad().h("zeroValues",v)}if(k!=false){v=$$t.$g7.g(k);a.ad().h("fitToPage",v)}if(l!=false){v=$$t.$g7.g(l);a.ad().h("printArea",v)}if(m!=false){v=$$t.$g7.g(m);a.ad().h("filter",v)}if(n!=false){v=$$t.$g7.g(n);a.ad().h("showAutoFilter",v)}if(o!=false){v=$$t.$g7.g(o);a.ad().h("hiddenRows",v)}if(p!=false){v=$$t.$g7.g(p);a.ad().h("hiddenColumns",v)}if(q!=0){v=$$t.$i9.f($$t.$al.$type,q);a.ad().h("state",v)}if(r!=false){v=$$t.$g7.g(r);a.ad().h("filterUnique",v)}if(s!=0){v=$$t.$i9.f($$t.$am.$type,s);a.ad().h("view",v)}if(t!=true){v=$$t.$g7.g(t);a.ad().h("showRuler",v)}v=u;a.ad().h("topLeftCell",v)},ur:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},z6:function(a){a.ad().p($$t.$a0.fn,null)},us:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){b=null;c=new $$t.aa;g=false;h=$m($$0.$be.$type,null);i=false;j=false;k=false;l=true;m=true;n=false;o=false;p=true;q=true;r=true;s=0;t=0;e=0;f=0;u=600;d=0;v=true;w=true;x=1;y=0;var aa=a.ab().u.getEnumerator();while(aa.moveNext()){var z=aa.current();switch(z.a.e(a.d())){case"name":b=z.d;break;case"guid":c=$$t.$aa.c(z.d);break;case"autoUpdate":g=$$t.$g7.e(z.d);break;case"mergeInterval":h=$m($$0.$be.$type,$.ig.util.parseUInt32_1(z.d,$$0.$cg.invariantCulture()));break;case"changesSavedWin":i=$$t.$g7.e(z.d);break;case"onlySync":j=$$t.$g7.e(z.d);break;case"personalView":k=$$t.$g7.e(z.d);break;case"includePrintSettings":l=$$t.$g7.e(z.d);break;case"includeHiddenRowCol":m=$$t.$g7.e(z.d);break;case"maximized":n=$$t.$g7.e(z.d);break;case"minimized":o=$$t.$g7.e(z.d);break;case"showHorizontalScroll":p=$$t.$g7.e(z.d);break;case"showVerticalScroll":q=$$t.$g7.e(z.d);break;case"showSheetTabs":r=$$t.$g7.e(z.d);break;case"xWindow":s=$aa(z.d,$$0.$cg.invariantCulture());break;case"yWindow":t=$aa(z.d,$$0.$cg.invariantCulture());break;case"windowWidth":e=$.ig.util.parseUInt32_1(z.d,$$0.$cg.invariantCulture());break;case"windowHeight":f=$.ig.util.parseUInt32_1(z.d,$$0.$cg.invariantCulture());break;case"tabRatio":u=$.ig.util.parseUInt32_1(z.d,$$0.$cg.invariantCulture());
break;case"activeSheetId":d=$.ig.util.parseUInt32_1(z.d,$$0.$cg.invariantCulture());break;case"showFormulaBar":v=$$t.$g7.e(z.d);break;case"showStatusbar":w=$$t.$g7.e(z.d);break;case"showComments":x=$$t.$i9.b($$t.$r.$type,z.d,x);break;case"showObjects":y=$$t.$i9.b($$t.$ac.$type,z.d,y);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n,p14:o,p15:p,p16:q,p17:r,p18:s,p19:t,p20:u,p21:v,p22:w,p23:x,p24:y}},z7:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){a.ad().p($$t.$a0.fp,null);var z;z=b;a.ad().h("name",z);z=c.toString();a.ad().h("guid",z);if(g!=false){z=$$t.$g7.g(g);a.ad().h("autoUpdate",z)}if($l(h,null)){z=h.value().toString();a.ad().h("mergeInterval",z)}if(i!=false){z=$$t.$g7.g(i);a.ad().h("changesSavedWin",z)}if(j!=false){z=$$t.$g7.g(j);a.ad().h("onlySync",z)}if(k!=false){z=$$t.$g7.g(k);a.ad().h("personalView",z)}if(l!=true){z=$$t.$g7.g(l);a.ad().h("includePrintSettings",z)}if(m!=true){z=$$t.$g7.g(m);a.ad().h("includeHiddenRowCol",z)}if(n!=false){z=$$t.$g7.g(n);a.ad().h("maximized",z)}if(o!=false){z=$$t.$g7.g(o);a.ad().h("minimized",z)}if(p!=true){z=$$t.$g7.g(p);a.ad().h("showHorizontalScroll",z)}if(q!=true){z=$$t.$g7.g(q);a.ad().h("showVerticalScroll",z)}if(r!=true){z=$$t.$g7.g(r);a.ad().h("showSheetTabs",z)}if(s!=0){z=s.toString();a.ad().h("xWindow",z)}if(t!=0){z=t.toString();a.ad().h("yWindow",z)}z=e.toString();a.ad().h("windowWidth",z);z=f.toString();a.ad().h("windowHeight",z);if(u!=600){z=u.toString();a.ad().h("tabRatio",z)}z=d.toString();a.ad().h("activeSheetId",z);if(v!=true){z=$$t.$g7.g(v);a.ad().h("showFormulaBar",z)}if(w!=true){z=$$t.$g7.g(w);a.ad().h("showStatusbar",z)}if(x!=1){z=$$t.$i9.f($$t.$r.$type,x);a.ad().h("showComments",z)}if(y!=0){z=$$t.$i9.f($$t.$ac.$type,y);a.ad().h("showObjects",z)}},ut:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},z8:function(a){a.ad().p($$t.$a0.fq,null)},uu:function(a,b,c,d){c=$m($$0.$be.$type,null);b=$m($$0.$be.$type,null);d=$m($$0.$aq.$type,null);var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case"minLength":c=$m($$0.$be.$type,$.ig.util.parseUInt32_1(e.d,$$0.$cg.invariantCulture()));break;case"maxLength":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(e.d,$$0.$cg.invariantCulture()));break;case"showValue":d=$m($$0.$aq.$type,$$t.$g7.e(e.d));break;default:break}}return{p1:b,p2:c,p3:d}},z9:function(a,b,c,d){a.ad().p($$t.$a0.fr,null);var e;if(b.hasValue()){e=b.value().toString();a.ad().h("minLength",e)}if(c.hasValue()){e=c.value().toString();a.ad().h("maxLength",e)}if(d.hasValue()){e=$$t.$g7.g(d.value());a.ad().h("showValue",e)}},uv:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o;var p=$$t.$a0.uw(a,o,c,d,e,f,g,h,i,j,k,l,m,n);o=p.p1;c=p.p2;d=p.p3;e=p.p4;f=p.p5;g=p.p6;h=p.p7;i=p.p8;j=p.p9;k=p.p10;l=p.p11;m=p.p12;n=p.p13;b=$$t.$i9.e(String,o,function(q){return q});return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n}},aaa:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){$$t.$a0.aab(a,b==null?null:$.ig.util.stringJoin1(String," ",b),c,d,e,f,g,h,i,j,k,l,m,n)},uw:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b=null;c=0;d=0;e=0;f=0;g=false;h=false;i=false;j=false;k=null;l=null;m=null;n=null;var p=a.ab().u.getEnumerator();while(p.moveNext()){var o=p.current();switch(o.a.e(a.d())){case"sqref":b=o.d;break;case"type":c=$$t.$i9.b($$t.$w.$type,o.d,c);break;case"errorStyle":d=$$t.$i9.b($$t.$t.$type,o.d,d);break;case"imeMode":e=$$t.$i9.b($$t.$u.$type,o.d,e);break;case"operator":f=$$t.$i9.b($$t.$v.$type,o.d,f);break;case"allowBlank":g=$$t.$g7.e(o.d);break;case"showDropDown":h=$$t.$g7.e(o.d);break;case"showInputMessage":i=$$t.$g7.e(o.d);break;case"showErrorMessage":j=$$t.$g7.e(o.d);break;case"errorTitle":k=o.d;break;case"error":l=o.d;break;case"promptTitle":m=o.d;break;case"prompt":n=o.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n}},aab:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){a.ad().p($$t.$a0.fu,null);var o;o=b;a.ad().h("sqref",o);if(c!=0){o=$$t.$i9.f($$t.$w.$type,c);a.ad().h("type",o)}if(d!=0){o=$$t.$i9.f($$t.$t.$type,d);a.ad().h("errorStyle",o)}if(e!=0){o=$$t.$i9.f($$t.$u.$type,e);a.ad().h("imeMode",o)}if(f!=0){o=$$t.$i9.f($$t.$v.$type,f);a.ad().h("operator",o)}if(g!=false){o=$$t.$g7.g(g);a.ad().h("allowBlank",o)}if(h!=false){o=$$t.$g7.g(h);a.ad().h("showDropDown",o)}if(i!=false){o=$$t.$g7.g(i);a.ad().h("showInputMessage",o)}if(j!=false){o=$$t.$g7.g(j);a.ad().h("showErrorMessage",o)}o=k;a.ad().h("errorTitle",o);o=l;a.ad().h("error",o);o=m;a.ad().h("promptTitle",o);o=n;a.ad().h("prompt",o)},ux:function(a,b,c,d,e){b=false;c=$m($$0.$be.$type,null);d=$m($$0.$be.$type,null);e=$m($$0.$be.$type,null);var g=a.ab().u.getEnumerator();while(g.moveNext()){var f=g.current();switch(f.a.e(a.d())){case"disablePrompts":b=$$t.$g7.e(f.d);break;case"xWindow":c=$m($$0.$be.$type,$.ig.util.parseUInt32_1(f.d,$$0.$cg.invariantCulture()));break;case"yWindow":d=$m($$0.$be.$type,$.ig.util.parseUInt32_1(f.d,$$0.$cg.invariantCulture()));break;case"count":e=$m($$0.$be.$type,$.ig.util.parseUInt32_1(f.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b,p2:c,p3:d,p4:e}},aac:function(a,b,c,d,e){a.ad().p($$t.$a0.fv,null);var f;if(b!=false){f=$$t.$g7.g(b);a.ad().h("disablePrompts",f)}if($l(c,null)){f=c.value().toString();a.ad().h("xWindow",f)}if($l(d,null)){f=d.value().toString();a.ad().h("yWindow",f)}if($l(e,null)){f=e.value().toString();a.ad().h("count",f)}},uy:function(a,b,c,d,e,f,g,h){c=0;d=$m($$0.$bd.$type,null);e=$m($$0.$bd.$type,null);f=$m($$0.$bd.$type,null);g=$m($$0.$bd.$type,null);h=$m($$0.$bd.$type,null);b=0;var j=a.ab().u.getEnumerator();while(j.moveNext()){var i=j.current();switch(i.a.e(a.d())){case"year":c=$.ig.util.parseUInt16_1(i.d,$$0.$cg.invariantCulture());break;case"month":d=$m($$0.$bd.$type,$.ig.util.parseUInt16_1(i.d,$$0.$cg.invariantCulture()));break;case"day":e=$m($$0.$bd.$type,$.ig.util.parseUInt16_1(i.d,$$0.$cg.invariantCulture()));break;case"hour":f=$m($$0.$bd.$type,$.ig.util.parseUInt16_1(i.d,$$0.$cg.invariantCulture()));break;case"minute":g=$m($$0.$bd.$type,$.ig.util.parseUInt16_1(i.d,$$0.$cg.invariantCulture()));break;case"second":h=$m($$0.$bd.$type,$.ig.util.parseUInt16_1(i.d,$$0.$cg.invariantCulture()));break;case"dateTimeGrouping":b=$$t.$i9.b($$v.$cj.$type,i.d,b);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h}},aad:function(a,b,c,d,e,f,g,h){a.ad().p($$t.$a0.fy,null);var i;i=c.toString();a.ad().h("year",i);if($l(d,null)){i=d.value().toString();a.ad().h("month",i)}if($l(e,null)){i=e.value().toString();a.ad().h("day",i)}if($l(f,null)){i=f.value().toString();a.ad().h("hour",i)}if($l(g,null)){i=g.value().toString();a.ad().h("minute",i)}if($l(h,null)){i=h.value().toString();a.ad().h("second",i)}i=$$t.$i9.f($$v.$cj.$type,b);a.ad().h("dateTimeGrouping",i)},uz:function(a,b,c,d,e){b=null;c=false;d=false;e=false;var g=a.ab().u.getEnumerator();while(g.moveNext()){var f=g.current();switch(f.a.e(a.d())){case"name":b=f.d;break;case"ole":c=$$t.$g7.e(f.d);break;case"advise":d=$$t.$g7.e(f.d);break;case"preferPic":e=$$t.$g7.e(f.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e}},aae:function(a,b,c,d,e){a.ad().p($$t.$a0.f1,null);var f;f=b;a.ad().h("name",f);if(c!=false){f=$$t.$g7.g(c);a.ad().h("ole",f)}if(d!=false){f=$$t.$g7.g(d);a.ad().h("advise",f)}if(e!=false){f=$$t.$g7.g(e);a.ad().h("preferPic",f)}},u0:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},aaf:function(a){a.ad().p($$t.$a0.f2,null)},u1:function(a,b,c){b=null;c=null;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"ddeService":b=d.d;break;case"ddeTopic":c=d.d;break;default:break}}return{p1:b,p2:c}},aag:function(a,b,c){a.ad().p($$t.$a0.f3,null);var d;d=b;a.ad().h("ddeService",d);d=c;a.ad().h("ddeTopic",d)},u3:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){c=null;d=null;e=null;f=null;g=null;h=null;i=$m($$0.$be.$type,null);j=false;k=false;l=false;m=false;n=$m($$0.$be.$type,null);o=null;p=false;q=false;var s=a.ab().u.getEnumerator();while(s.moveNext()){var r=s.current();switch(r.a.e(a.d())){case"name":c=r.d;break;case"comment":d=r.d;break;case"customMenu":e=r.d;break;case"description":f=r.d;break;case"help":g=r.d;break;case"statusBar":h=r.d;break;case"localSheetId":i=$m($$0.$be.$type,$.ig.util.parseUInt32_1(r.d,$$0.$cg.invariantCulture()));break;case"hidden":j=$$t.$g7.e(r.d);break;case"function":k=$$t.$g7.e(r.d);break;case"vbProcedure":l=$$t.$g7.e(r.d);break;case"xlm":m=$$t.$g7.e(r.d);break;case"functionGroupId":n=$m($$0.$be.$type,$.ig.util.parseUInt32_1(r.d,$$0.$cg.invariantCulture()));break;case"shortcutKey":o=r.d;break;case"publishToServer":p=$$t.$g7.e(r.d);break;case"workbookParameter":q=$$t.$g7.e(r.d);break;default:break}}b=$$t.$a0.rt(a.ab().ad,true);return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n,p14:o,p15:p,p16:q}},aai:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){a.ad().p($$t.$a0.gd,null);var r;r=c;a.ad().h("name",r);if(d!=null){r=d;a.ad().h("comment",r)}if(e!=null){r=e;a.ad().h("customMenu",r)}if(f!=null){r=f;a.ad().h("description",r)}if(g!=null){r=g;a.ad().h("help",r)}if(h!=null){r=h;a.ad().h("statusBar",r)}if($l(i,null)){r=i.value().toString();a.ad().h("localSheetId",r)}if(j!=false){r=$$t.$g7.g(j);a.ad().h("hidden",r)}if(k!=false){r=$$t.$g7.g(k);a.ad().h("function",r)}if(l!=false){r=$$t.$g7.g(l);a.ad().h("vbProcedure",r)}if(m!=false){r=$$t.$g7.g(m);a.ad().h("xlm",r)}if($l(n,null)){r=n.value().toString();a.ad().h("functionGroupId",r)}if(o!=null){r=o;a.ad().h("shortcutKey",r)}if(p!=false){r=$$t.$g7.g(p);a.ad().h("publishToServer",r)}if(q!=false){r=$$t.$g7.g(q);a.ad().h("workbookParameter",r)}if(b!=null){a.ad().u($$t.$a0.hd(b))}},u2:function(a,b,c,d){b=null;c=null;d=$m($$0.$be.$type,null);var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case"name":b=e.d;break;case"refersTo":c=e.d;break;case"sheetId":d=$m($$0.$be.$type,$.ig.util.parseUInt32_1(e.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b,p2:c,p3:d}},aah:function(a,b,c,d){a.ad().p($$t.$a0.gd,null);var e;e=b;a.ad().h("name",e);e=c;a.ad().h("refersTo",e);if($l(d,null)){e=d.value().toString();a.ad().h("sheetId",e)}},u4:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},aaj:function(a){a.ad().p($$t.$a0.ge,null)},u5:function(a,b){var c=$$t.$a0.uj(a,$$t.$a0.gn,b);b=c.p2;return{p1:b}},aak:function(a,b){$$t.$a0.zy(a,$$t.$a0.gn,b)},u6:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"ref":b=c.d;break;default:break}}return{p1:b}},aal:function(a,b){a.ad().p($$t.$a0.gs,null);var c;c=b;a.ad().h("ref",c)},u7:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case $$t.$i5.ar:b=c.d;break;default:break}}return{p1:b}},aam:function(a,b){a.ad().p($$t.$a0.gy,null);var c;c=b;a.ad().h($$t.$i5.ar,c)},u8:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){b=null;c=$m($$0.$be.$type,null);d=$m($$0.$be.$type,null);e=$m($$0.$be.$type,null);f=$m($$0.$be.$type,null);g=$m($$0.$be.$type,null);h=$m($$0.$be.$type,null);i=$m($$0.$be.$type,null);j=$m($$0.$be.$type,null);k=$m($$0.$be.$type,null);l=$m($$0.$be.$type,null);m=$m($$0.$be.$type,null);n=$m($$0.$be.$type,null);o=$m($$0.$be.$type,null);p=$m($$0.$be.$type,null);q=$m($$0.$be.$type,null);r=$m($$0.$be.$type,null);s=$m($$0.$be.$type,null);t=$m($$0.$be.$type,null);var v=a.ab().u.getEnumerator();while(v.moveNext()){var u=v.current();switch(u.a.e(a.d())){case $$t.$i5.ar:b=u.d;break;case"lho":c=$m($$0.$be.$type,$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture()));break;case"lhe":d=$m($$0.$be.$type,$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture()));break;case"lhf":e=$m($$0.$be.$type,$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture()));break;case"cho":f=$m($$0.$be.$type,$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture()));break;case"che":g=$m($$0.$be.$type,$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture()));break;case"chf":h=$m($$0.$be.$type,$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture()));break;case"rho":i=$m($$0.$be.$type,$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture()));break;case"rhe":j=$m($$0.$be.$type,$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture()));break;case"rhf":k=$m($$0.$be.$type,$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture()));break;case"lfo":l=$m($$0.$be.$type,$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture()));break;case"lfe":m=$m($$0.$be.$type,$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture()));break;case"lff":n=$m($$0.$be.$type,$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture()));break;case"cfo":o=$m($$0.$be.$type,$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture()));break;case"cfe":p=$m($$0.$be.$type,$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture()));break;case"cff":q=$m($$0.$be.$type,$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture()));break;case"rfo":r=$m($$0.$be.$type,$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture()));break;case"rfe":s=$m($$0.$be.$type,$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture()));break;case"rff":t=$m($$0.$be.$type,$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n,p14:o,p15:p,p16:q,p17:r,p18:s,p19:t}},aan:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){a.ad().p($$t.$a0.gz,null);var u;u=b;a.ad().h($$t.$i5.ar,u);if($l(c,null)){u=c.value().toString();a.ad().h("lho",u)}if($l(d,null)){u=d.value().toString();a.ad().h("lhe",u)}if($l(e,null)){u=e.value().toString();a.ad().h("lhf",u)}if($l(f,null)){u=f.value().toString();a.ad().h("cho",u)}if($l(g,null)){u=g.value().toString();a.ad().h("che",u)}if($l(h,null)){u=h.value().toString();a.ad().h("chf",u)}if($l(i,null)){u=i.value().toString();a.ad().h("rho",u)}if($l(j,null)){u=j.value().toString();a.ad().h("rhe",u)}if($l(k,null)){u=k.value().toString();a.ad().h("rhf",u)}if($l(l,null)){u=l.value().toString();a.ad().h("lfo",u)}if($l(m,null)){u=m.value().toString();a.ad().h("lfe",u)}if($l(n,null)){u=n.value().toString();a.ad().h("lff",u)}if($l(o,null)){u=o.value().toString();a.ad().h("cfo",u)}if($l(p,null)){u=p.value().toString();a.ad().h("cfe",u)}if($l(q,null)){u=q.value().toString();a.ad().h("cff",u)}if($l(r,null)){u=r.value().toString();a.ad().h("rfo",u)}if($l(s,null)){u=s.value().toString();a.ad().h("rfe",u)}if($l(t,null)){u=t.value().toString();a.ad().h("rff",u)}},u9:function(a,b){var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){default:break}}},aao:function(a,b){a.ad().p(b,null)},va:function(a,b){b=$m($$0.$be.$type,null);var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"count":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(c.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b}},aap:function(a,b){a.ad().p($$t.$a0.g4,null);var c;if($l(b,null)){c=b.value().toString();a.ad().h("count",c)}},vb:function(a,b,c,d){b=0;c=$m(Number,null);d=$m(Number,null);var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case"type":b=$$t.$i9.b($$v.$ck.$type,e.d,b);break;case"val":c=$m(Number,$ak(e.d,$$0.$cg.invariantCulture()));break;case"maxVal":d=$m(Number,$ak(e.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b,p2:c,p3:d}},aaq:function(a,b,c,d){a.ad().p($$t.$a0.g5,null);var e;e=$$t.$i9.f($$v.$ck.$type,b);a.ad().h("type",e);if($l(c,null)){e=c.value().toString();a.ad().h("val",e)}if($l(d,null)){e=d.value().toString();a.ad().h("maxVal",e)}},vc:function(a,b,c,d,e){b=0;c=$m(Number,null);d=$m($$0.$s.$type,null);e=$m($$0.$s.$type,null);var g=a.ab().u.getEnumerator();while(g.moveNext()){var f=g.current();switch(f.a.e(a.d())){case"type":b=$$t.$i9.b($$v.$ck.$type,f.d,b);break;case"val":c=$m(Number,$ak(f.d,$$0.$cg.invariantCulture()));break;case"valIso":d=$m($$0.$s.$type,$$0.$s.parse(f.d,$$0.$cg.invariantCulture()));break;case"maxValIso":e=$m($$0.$s.$type,$$0.$s.parse(f.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b,p2:c,p3:d,p4:e}},aar:function(a,b,c,d,e){a.ad().p($$t.$a0.g5,null);var f;f=$$t.$i9.f($$v.$ck.$type,b);a.ad().h("type",f);if($l(c,null)){f=c.value().toString();a.ad().h("val",f)}if($l(d,null)){f=$.ig.Date.prototype.toString(d.value(),$$0.$cg.invariantCulture());a.ad().h("valIso",f)}if($l(e,null)){f=$.ig.Date.prototype.toString(e.value(),$$0.$cg.invariantCulture());a.ad().h("maxValIso",f)}},vd:function(a,b){var c=$$t.$a0.uj(a,$$t.$a0.g7,b);b=c.p2;return{p1:b}},aas:function(a,b){$$t.$a0.zy(a,$$t.$a0.g7,b)},ve:function(a,b){var c=$$t.$a0.u(a,$$t.$a0.he,b,0);b=c.p2;return{p1:b}},aat:function(a,b){$$t.$a0.ai(a,$$t.$a0.he,null,b,null,0)},vf:function(a,b){var c=$$t.$a0.u(a,$$t.$a0.hf,b,0);b=c.p2;return{p1:b}},aau:function(a,b){$$t.$a0.ai(a,$$t.$a0.hf,null,b,null,0)},vg:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"uri":b=c.d;break;default:break}}return{p1:b}},aav:function(a,b,c){a.ad().p($$t.$a0.hg,null);var d;d=b;a.ad().h("uri",d);if(String.isNullOrEmpty(c)==false){d=c;a.ad().i("xmlns","x14",null,d)}},vh:function(a,b){var c=$$t.$a0.ui(a,$$t.$a0.hh,b);b=c.p2;return{p1:b}},aaw:function(a,b){$$t.$a0.zx(a,$$t.$a0.hh,b)},vi:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case $$t.$i5.ar:b=c.d;break;default:break}}return{p1:b}},aax:function(a,b){a.ad().p($$t.$a0.hi,null);var c;c=b;a.ad().h($$t.$i5.ar,c)},vj:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},aay:function(a){a.ad().p($$t.$a0.hj,null);var b=a.d()._conformance();a.ad().l($$t.$a0.ao,false)},vk:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case $$t.$i5.ar:b=c.d;break;default:break}}return{p1:b}},aaz:function(a,b){a.ad().p($$t.$a0.hk,null);var c;c=b;a.ad().h($$t.$i5.ar,c)},vl:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},aa0:function(a){a.ad().p($$t.$a0.hl,null)},vm:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},aa1:function(a){a.ad().p($$t.$a0.hm,null)},vn:function(a,b){b=0;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"val":b=$aa(c.d,$$0.$cg.invariantCulture());break;default:break}}return{p1:b}},aa2:function(a,b){a.ad().p($$t.$a0.hp,null);var c;c=b.toString();a.ad().h("val",c)},vo:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b=0;c=false;d=null;e=false;f=false;g=false;h=false;i=null;j=null;k=false;l=$m($$0.$be.$type,null);m=false;var o=false;var q=a.ab().u.getEnumerator();while(q.moveNext()){var p=q.current();switch(p.a.e(a.d())){case"t":b=$$t.$i9.b($$t.$o.$type,p.d,b);break;case"aca":c=$$t.$g7.e(p.d);break;case"ref":d=p.d;break;case"dt2D":e=$$t.$g7.e(p.d);break;case"dtr":f=$$t.$g7.e(p.d);break;case"del1":g=$$t.$g7.e(p.d);break;case"del2":h=$$t.$g7.e(p.d);break;case"r1":i=p.d;break;case"r2":j=p.d;break;case"ca":k=$$t.$g7.e(p.d);break;case"si":l=$m($$0.$be.$type,$.ig.util.parseUInt32_1(p.d,$$0.$cg.invariantCulture()));break;case"bx":m=$$t.$g7.e(p.d);break;case $$t.$i8.ar:o=p.d=="preserve";break;default:break}}n=a.ab().ad;if(n!=null&&o==false){n=n.trim([])}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n}},aa3:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){a.ad().p($$t.$a0.ho,null);var o;if(c!=0){o=$$t.$i9.f($$t.$o.$type,c);a.ad().h("t",o)}if(d!=false){o=$$t.$g7.g(d);a.ad().h("aca",o)}o=e;a.ad().h("ref",o);if(f!=false){o=$$t.$g7.g(f);a.ad().h("dt2D",o)}if(g!=false){o=$$t.$g7.g(g);a.ad().h("dtr",o)}if(h!=false){o=$$t.$g7.g(h);a.ad().h("del1",o)}if(i!=false){o=$$t.$g7.g(i);a.ad().h("del2",o)}o=j;a.ad().h("r1",o);o=k;a.ad().h("r2",o);if(l!=false){o=$$t.$g7.g(l);a.ad().h("ca",o)}if($l(m,null)){o=m.value().toString();a.ad().h("si",o)}if(n!=false){o=$$t.$g7.g(n);a.ad().h("bx",o)}if(b!=null){if(String.isNullOrEmpty(b)==false){if(/\s/i.test(b.charAt(0))||/\s/i.test(b.charAt(b.length-1))){$$t.$i8.as(a.ad())}}a.ad().u(b)}},vp:function(a,b,c,d,e,f){var g=$$t.$a0.uk(a,$$t.$a0.hq,b,c,d,e,f);b=g.p2;c=g.p3;d=g.p4;e=g.p5;f=g.p6;return{p1:b,p2:c,p3:d,p4:e,p5:f}},aa4:function(a,b,c,d,e,f){$$t.$a0.zz(a,$$t.$a0.hq,b,c,d,e,f)},vr:function(a,b,c,d){c=false;b=null;d=0;var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case"readOnlyRecommended":c=$$t.$g7.e(e.d);break;case"userName":b=e.d;break;case"reservationPassword":d=$$t.$ij.d(e.d);break;default:break}}return{p1:b,p2:c,p3:d}},aa6:function(a,b,c,d){a.ad().p($$t.$a0.hr,null);var e;if(c!=false){e=$$t.$g7.g(c);a.ad().h("readOnlyRecommended",e)}e=b;a.ad().h("userName",e);e=new $$t.ij(1,d).toString();a.ad().h("reservationPassword",e)},vq:function(a,b,c,d,e,f,g){c=false;b=null;d=null;e=null;f=null;g=$m($$0.$be.$type,null);var i=a.ab().u.getEnumerator();while(i.moveNext()){var h=i.current();switch(h.a.e(a.d())){case"readOnlyRecommended":c=$$t.$g7.e(h.d);break;case"userName":b=h.d;break;case"algorithmName":d=h.d;break;case"hashValue":e=$$6.$g.fromBase64String(h.d);break;case"saltValue":f=$$6.$g.fromBase64String(h.d);break;case"spinCount":g=$m($$0.$be.$type,$.ig.util.parseUInt32_1(h.d,null));break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g}},aa5:function(a,b,c,d,e,f,g){a.ad().p($$t.$a0.hr,null);var h;if(c!=false){h=$$t.$g7.g(c);a.ad().h("readOnlyRecommended",h)}h=b;a.ad().h("userName",h);h=d;a.ad().h("algorithmName",h);if(e!=null){h=$$6.$g.toBase64String(e);a.ad().h("hashValue",h)}if(f!=null){h=$$6.$g.toBase64String(f);a.ad().h("saltValue",h)}if($l(g,null)){h=g.value().toString();a.ad().h("spinCount",h)}},vs:function(a,b,c,d,e,f){b=null;c=null;d=null;e=null;f=null;var h=a.ab().u.getEnumerator();while(h.moveNext()){var g=h.current();switch(g.a.e(a.d())){case"appName":b=g.d;break;case"lastEdited":c=g.d;break;case"lowestEdited":d=g.d;break;case"rupBuild":e=g.d;break;case"codeName":f=g.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f}},aa7:function(a,b,c,d,e,f){a.ad().p($$t.$a0.hs,null);var g;g=b;a.ad().h("appName",g);g=c;a.ad().h("lastEdited",g);g=d;a.ad().h("lowestEdited",g);g=e;a.ad().h("rupBuild",g);g=f;a.ad().h("codeName",g)},vt:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},aa8:function(a){a.ad().p($$t.$a0.ht,null)},vu:function(a,b){b=$m($$0.$be.$type,null);var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"count":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(c.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b}},aa9:function(a,b){a.ad().p($$t.$a0.hv,null);var c;if($l(b,null)){c=b.value().toString();a.ad().h("count",c)}},vv:function(a,b,c,d){b=0;c=false;d=true;var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case"colId":b=$.ig.util.parseUInt32_1(e.d,$$0.$cg.invariantCulture());break;case"hiddenButton":c=$$t.$g7.e(e.d);break;case"showButton":d=$$t.$g7.e(e.d);break;default:break}}return{p1:b,p2:c,p3:d}},aba:function(a,b,c,d){a.ad().p($$t.$a0.hy,null);var e;e=b.toString();a.ad().h("colId",e);if(c!=false){e=$$t.$g7.g(c);a.ad().h("hiddenButton",e)}if(d!=true){e=$$t.$g7.g(d);a.ad().h("showButton",e)}},vw:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"val":b=c.d;break;default:break}}return{p1:b}},abb:function(a,b){a.ad().p($$t.$a0.hw,null);var c;c=b;a.ad().h("val",c)},vx:function(a,b,c){b=false;c=10;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"blank":b=$$t.$g7.e(d.d);break;case"calendarType":c=$$t.$i9.b($$t.$m.$type,d.d,c);break;default:break}}return{p1:b,p2:c}},abc:function(a,b,c){a.ad().p($$t.$a0.h1,null);var d;if(b!=false){d=$$t.$g7.g(b);a.ad().h("blank",d)}if(c!=10){d=$$t.$i9.f($$t.$m.$type,c);a.ad().h("calendarType",d)}},vy:function(a,b){var c=$$t.$a0.u(a,$$t.$a0.h4,b,0);b=c.p2;return{p1:b}},abd:function(a,b){$$t.$a0.ai(a,$$t.$a0.h4,null,b,null,0)},vz:function(a,b){var c=$$t.$a0.u(a,$$t.$a0.h5,b,0);b=c.p2;return{p1:b}},abe:function(a,b){$$t.$a0.ai(a,$$t.$a0.h5,null,b,null,0)},v0:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},abf:function(a){a.ad().p($$t.$a0.ib,null)},v1:function(a,b){b=$m($$0.$be.$type,null);var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"count":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(c.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b}},abg:function(a,b){a.ad().p($$t.$a0.id,null);var c;if($l(b,null)){c=b.value().toString();a.ad().h("count",c)}},v4:function(a,b){var c=$$t.$a0.ul(a,$$t.$a0.io,b);b=c.p2;return{p1:b}},abj:function(a,b){$$t.$a0.z0(a,$$t.$a0.io,b)},v2:function(a,b){var c=$$t.$a0.ul(a,$$t.$a0.ip,b);b=c.p2;return{p1:b}},abh:function(a,b){$$t.$a0.z0(a,$$t.$a0.ip,b)},v3:function(a,b){var c=$$t.$a0.ul(a,$$t.$a0.iq,b);b=c.p2;return{p1:b}},abi:function(a,b){$$t.$a0.z0(a,$$t.$a0.iq,b)},v5:function(a,b,c,d,e,f,g){b=0;c=0;d=0;e=0;f=0;g=0;var i=a.ab().u.getEnumerator();while(i.moveNext()){var h=i.current();switch(h.a.e(a.d())){case"type":b=$$t.$i9.b($$t.$z.$type,h.d,b);break;case"degree":c=$ak(h.d,$$0.$cg.invariantCulture());break;case"left":d=$ak(h.d,$$0.$cg.invariantCulture());break;case"right":e=$ak(h.d,$$0.$cg.invariantCulture());break;case"top":f=$ak(h.d,$$0.$cg.invariantCulture());break;case"bottom":g=$ak(h.d,$$0.$cg.invariantCulture());break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g}},abk:function(a,b,c,d,e,f,g){a.ad().p($$t.$a0.iv,null);var h;if(b!=0){h=$$t.$i9.f($$t.$z.$type,b);a.ad().h("type",h)}if(c!=0){h=c.toString();a.ad().h("degree",h)}if(d!=0){h=d.toString();a.ad().h("left",h)}if(e!=0){h=e.toString();a.ad().h("right",h)}if(f!=0){h=f.toString();a.ad().h("top",h)}if(g!=0){h=g.toString();a.ad().h("bottom",h)}},v6:function(a,b,c,d,e){b=false;c=false;d=true;e=true;var g=a.ab().u.getEnumerator();while(g.moveNext()){var f=g.current();switch(f.a.e(a.d())){case"differentOddEven":b=$$t.$g7.e(f.d);break;case"differentFirst":c=$$t.$g7.e(f.d);break;case"scaleWithDoc":d=$$t.$g7.e(f.d);break;case"alignWithMargins":e=$$t.$g7.e(f.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e}},abl:function(a,b,c,d,e){a.ad().p($$t.$a0.i2,null);var f;if(b!=false){f=$$t.$g7.g(b);a.ad().h("differentOddEven",f)}if(c!=false){f=$$t.$g7.g(c);a.ad().h("differentFirst",f)}if(d!=true){f=$$t.$g7.g(d);a.ad().h("scaleWithDoc",f)}if(e!=true){f=$$t.$g7.g(e);a.ad().h("alignWithMargins",f)}},v7:function(a,b){var c=$$t.$a0.uj(a,$$t.$a0.je,b);b=c.p2;return{p1:b}},abm:function(a,b){$$t.$a0.zy(a,$$t.$a0.je,b)},v8:function(a,b,c,d,e,f){b=null;c=null;d=null;e=null;f=null;var h=a.ab().u.getEnumerator();while(h.moveNext()){var g=h.current();switch(g.a.e(a.d())){case"ref":b=g.d;break;case $$t.$i5.ar:c=g.d;break;case"location":d=g.d;break;case"tooltip":e=g.d;break;case"display":f=g.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f}},abn:function(a,b,c,d,e,f){a.ad().p($$t.$a0.jk,null);var g;g=b;a.ad().h("ref",g);g=c;a.ad().h($$t.$i5.ar,g);g=d;a.ad().h("location",g);g=e;a.ad().h("tooltip",g);g=f;a.ad().h("display",g)},v9:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},abo:function(a){a.ad().p($$t.$a0.jl,null)},wa:function(a,b,c){b=0;c=$m($$0.$be.$type,null);var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"iconSet":b=$$t.$i9.b($$v.$cl.$type,d.d,b);break;case"iconId":c=$m($$0.$be.$type,$.ig.util.parseUInt32_1(d.d,$$0.$cg.invariantCulture()));break;default:break}}if(b<=16){}return{p1:b,p2:c}},abp:function(a,b,c){if(b<=16){$$t.$a0.abq(a,$$t.$a0.jo,null,b,c)}else{a.ad().g([new $$t.bl(0,$$t.$az.an,function(){$$t.$a0.abq(a,$$t.$az.bk,null,b,c)})],function(){$$t.$a0.z4(a,false);$$t.$a0.z3(a,"",2);a.ad().k();$$t.$a0.z3(a," ",5);a.ad().k();a.ad().k()})}},abq:function(a,b,c,d,e){a.ad().p(b,c);var f;f=$$t.$i9.f($$v.$cl.$type,d);a.ad().h("iconSet",f);if($l(e,null)){f=e.value().toString();a.ad().h("iconId",f)}a.ad().k()},wb:function(a,b,c,d,e,f){b=3;c=true;d=false;e=$m($$0.$aq.$type,null);f=false;var h=a.ab().u.getEnumerator();while(h.moveNext()){var g=h.current();switch(g.a.e(a.d())){case"iconSet":b=$$t.$i9.b($$v.$cl.$type,g.d,b);break;case"percent":c=$$t.$g7.e(g.d);break;case"reverse":d=$$t.$g7.e(g.d);break;case"showValue":e=$m($$0.$aq.$type,$$t.$g7.e(g.d));break;case"custom":f=$$t.$g7.e(g.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f}},abr:function(a,b,c,d,e,f,g){a.ad().p(b,null);var h;if(c.hasValue()&&c.value()!=3){h=$$t.$i9.f($$v.$cl.$type,c.value());a.ad().h("iconSet",h)}if(d.hasValue()&&d.value()==false){h=$$t.$g7.g(d.value());a.ad().h("percent",h)}if(e.hasValue()&&e.value()){h=$$t.$g7.g(e.value());a.ad().h("reverse",h)}if(f.hasValue()&&f.value()==false){h=$$t.$g7.g(f.value());a.ad().h("showValue",h)}if(g.hasValue()&&g.value()){h=$$t.$g7.g(f.value());a.ad().h("custom",h)}},wc:function(a,b){var c=$$t.$a0.ui(a,$$t.$a0.jm,b);b=c.p2;return{p1:b}},abs:function(a,b){$$t.$a0.zx(a,$$t.$a0.jm,b)},wd:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},abt:function(a){a.ad().p($$t.$a0.jz,null)},we:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},abu:function(a){a.ad().p($$t.$a0.b7,null)},wf:function(a,b){var c=$$t.$a0.uj(a,$$t.$a0.ka,b);b=c.p2;return{p1:b}},abv:function(a,b){$$t.$a0.zy(a,$$t.$a0.ka,b)},wg:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case $$t.$i5.ar:b=c.d;break;default:break}}return{p1:b}},abw:function(a,b){a.ad().p($$t.$a0.kc,null);var c;c=b;a.ad().h($$t.$i5.ar,c)},wh:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case $$t.$i5.ar:b=c.d;break;default:break}}return{p1:b}},abx:function(a,b){a.ad().p($$t.$a0.kd,null);var c;c=b;a.ad().h($$t.$i5.ar,c)},wi:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"ref":b=c.d;break;default:break}}return{p1:b}},aby:function(a,b){a.ad().p($$t.$a0.k2,null);var c;c=b;a.ad().h("ref",c)},wj:function(a,b){b=$m($$0.$be.$type,null);var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"count":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(c.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b}},abz:function(a,b){a.ad().p($$t.$a0.k3,null);var c;if($l(b,null)){c=b.value().toString();a.ad().h("count",c)}},wk:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"val":b=c.d;break;default:break}}return{p1:b}},ab0:function(a,b){a.ad().p($$t.$a0.lb,null);var c;c=b;a.ad().h("val",c)},wl:function(a,b,c){b=0;c=null;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"numFmtId":b=$.ig.util.parseUInt32_1(d.d,$$0.$cg.invariantCulture());break;case"formatCode":c=d.d;break;default:break}}return{p1:b,p2:c}},ab1:function(a,b,c){a.ad().p($$t.$a0.lf,null);var d;d=b.toString();a.ad().h("numFmtId",d);d=c;a.ad().h("formatCode",d)},wm:function(a,b){b=$m($$0.$be.$type,null);var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"count":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(c.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b}},ab2:function(a,b){a.ad().p($$t.$a0.lh,null);var c;if($l(b,null)){c=b.value().toString();a.ad().h("count",c)}},wn:function(a,b){var c=$$t.$a0.u(a,$$t.$a0.lj,b,0);b=c.p2;return{p1:b}},ab3:function(a,b){$$t.$a0.ai(a,$$t.$a0.lj,null,b,null,0)},wo:function(a,b){
var c=$$t.$a0.u(a,$$t.$a0.lk,b,0);b=c.p2;return{p1:b}},ab4:function(a,b){$$t.$a0.ai(a,$$t.$a0.lk,null,b,null,0)},wp:function(a,b,c,d,e){b=null;c=false;d=false;e=false;var g=a.ab().u.getEnumerator();while(g.moveNext()){var f=g.current();switch(f.a.e(a.d())){case"name":b=f.d;break;case"icon":c=$$t.$g7.e(f.d);break;case"advise":d=$$t.$g7.e(f.d);break;case"preferPic":e=$$t.$g7.e(f.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e}},ab5:function(a,b,c,d,e){a.ad().p($$t.$a0.lm,null);var f;f=b;a.ad().h("name",f);if(c!=false){f=$$t.$g7.g(c);a.ad().h("icon",f)}if(d!=false){f=$$t.$g7.g(d);a.ad().h("advise",f)}if(e!=false){f=$$t.$g7.g(e);a.ad().h("preferPic",f)}},wq:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},ab6:function(a){a.ad().p($$t.$a0.ln,null)},wr:function(a,b,c){b=null;c=null;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case $$t.$i5.ar:b=d.d;break;case"progId":c=d.d;break;default:break}}return{p1:b,p2:c}},ab7:function(a,b,c){a.ad().p($$t.$a0.lo,null);var d;d=b;a.ad().h($$t.$i5.ar,d);d=c;a.ad().h("progId",d)},ws:function(a,b){var c=$$t.$a0.ui(a,$$t.$a0.ls,b);b=c.p2;return{p1:b}},ab8:function(a,b){$$t.$a0.zx(a,$$t.$a0.ls,b)},wt:function(a,b,c,d,e){b=false;c=true;d=true;e=true;var g=a.ab().u.getEnumerator();while(g.moveNext()){var f=g.current();switch(f.a.e(a.d())){case"applyStyles":b=$$t.$g7.e(f.d);break;case"summaryBelow":c=$$t.$g7.e(f.d);break;case"summaryRight":d=$$t.$g7.e(f.d);break;case"showOutlineSymbols":e=$$t.$g7.e(f.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e}},ab9:function(a,b,c,d,e){a.ad().p($$t.$a0.lx,null);var f;if(b!=false){f=$$t.$g7.g(b);a.ad().h("applyStyles",f)}if(c!=true){f=$$t.$g7.g(c);a.ad().h("summaryBelow",f)}if(d!=true){f=$$t.$g7.g(d);a.ad().h("summaryRight",f)}if(e!=true){f=$$t.$g7.g(e);a.ad().h("showOutlineSymbols",f)}},wu:function(a,b,c,d,e,f,g){b=0;c=0;d=0;e=0;f=0;g=0;var i=a.ab().u.getEnumerator();while(i.moveNext()){var h=i.current();switch(h.a.e(a.d())){case"left":b=$ak(h.d,$$0.$cg.invariantCulture());break;case"right":c=$ak(h.d,$$0.$cg.invariantCulture());break;case"top":d=$ak(h.d,$$0.$cg.invariantCulture());break;case"bottom":e=$ak(h.d,$$0.$cg.invariantCulture());break;case"header":f=$ak(h.d,$$0.$cg.invariantCulture());break;case"footer":g=$ak(h.d,$$0.$cg.invariantCulture());break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g}},aca:function(a,b,c,d,e,f,g){a.ad().p($$t.$a0.lz,null);var h;h=b.toString();a.ad().h("left",h);h=c.toString();a.ad().h("right",h);h=d.toString();a.ad().h("top",h);h=e.toString();a.ad().h("bottom",h);h=f.toString();a.ad().h("header",h);h=g.toString();a.ad().h("footer",h)},wv:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){b=1;c=null;d=null;e=100;f=1;g=1;h=1;i=0;j=0;k=true;l=false;m=false;n=0;o=false;p=0;q=600;r=600;s=1;t=null;var v=a.ab().u.getEnumerator();while(v.moveNext()){var u=v.current();switch(u.a.e(a.d())){case"paperSize":b=$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture());break;case"paperHeight":c=u.d;break;case"paperWidth":d=u.d;break;case"scale":e=$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture());break;case"firstPageNumber":f=$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture());break;case"fitToWidth":g=$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture());break;case"fitToHeight":h=$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture());break;case"pageOrder":i=$$t.$i9.b($$t.$af.$type,u.d,i);break;case"orientation":j=$$t.$i9.b($$t.$ae.$type,u.d,j);break;case"usePrinterDefaults":k=$$t.$g7.e(u.d);break;case"blackAndWhite":l=$$t.$g7.e(u.d);break;case"draft":m=$$t.$g7.e(u.d);break;case"cellComments":n=$$t.$i9.b($$t.$n.$type,u.d,n);break;case"useFirstPageNumber":o=$$t.$g7.e(u.d);break;case"errors":p=$$t.$i9.b($$t.$aj.$type,u.d,p);break;case"horizontalDpi":q=$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture());break;case"verticalDpi":r=$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture());break;case"copies":s=$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture());break;case $$t.$i5.ar:t=u.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n,p14:o,p15:p,p16:q,p17:r,p18:s,p19:t}},acb:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){a.ad().p($$t.$a0.l1,null);var u;if(b!=1){u=b.toString();a.ad().h("paperSize",u)}if(c!=null){u=c;a.ad().h("paperHeight",u)}if(d!=null){u=d;a.ad().h("paperWidth",u)}if(e!=100){u=e.toString();a.ad().h("scale",u)}if(f!=1){u=f.toString();a.ad().h("firstPageNumber",u)}if(g!=1){u=g.toString();a.ad().h("fitToWidth",u)}if(h!=1){u=h.toString();a.ad().h("fitToHeight",u)}if(i!=0){u=$$t.$i9.f($$t.$af.$type,i);a.ad().h("pageOrder",u)}if(j!=0){u=$$t.$i9.f($$t.$ae.$type,j);a.ad().h("orientation",u)}if(k!=true){u=$$t.$g7.g(k);a.ad().h("usePrinterDefaults",u)}if(l!=false){u=$$t.$g7.g(l);a.ad().h("blackAndWhite",u)}if(m!=false){u=$$t.$g7.g(m);a.ad().h("draft",u)}if(n!=0){u=$$t.$i9.f($$t.$n.$type,n);a.ad().h("cellComments",u)}if(o!=false){u=$$t.$g7.g(o);a.ad().h("useFirstPageNumber",u)}if(p!=0){u=$$t.$i9.f($$t.$aj.$type,p);a.ad().h("errors",u)}if(q!=600){u=q.toString();a.ad().h("horizontalDpi",u)}if(r!=600){u=r.toString();a.ad().h("verticalDpi",u)}if(s!=1){u=s.toString();a.ad().h("copies",u)}if(t!=null){u=t;a.ad().h($$t.$i5.ar,u)}},ww:function(a,b,c){b=true;c=false;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"autoPageBreaks":b=$$t.$g7.e(d.d);break;case"fitToPage":c=$$t.$g7.e(d.d);break;default:break}}return{p1:b,p2:c}},acc:function(a,b,c){a.ad().p($$t.$a0.l2,null);var d;if(b!=true){d=$$t.$g7.g(b);a.ad().h("autoPageBreaks",d)}if(c!=false){d=$$t.$g7.g(c);a.ad().h("fitToPage",d)}},wx:function(a,b,c,d,e,f){b=0;c=0;d=null;e=3;f=0;var h=a.ab().u.getEnumerator();while(h.moveNext()){var g=h.current();switch(g.a.e(a.d())){case"xSplit":b=$ak(g.d,$$0.$cg.invariantCulture());break;case"ySplit":c=$ak(g.d,$$0.$cg.invariantCulture());break;case"topLeftCell":d=g.d;break;case"activePane":e=$$t.$i9.b($$t.$ag.$type,g.d,e);break;case"state":f=$$t.$i9.b($$t.$ah.$type,g.d,f);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f}},acd:function(a,b,c,d,e,f){a.ad().p($$t.$a0.l3,null);var g;if(b!=0){g=b.toString();a.ad().h("xSplit",g)}if(c!=0){g=c.toString();a.ad().h("ySplit",g)}g=d;a.ad().h("topLeftCell",g);if(e!=3){g=$$t.$i9.f($$t.$ag.$type,e);a.ad().h("activePane",g)}if(f!=0){g=$$t.$i9.f($$t.$ah.$type,f);a.ad().h("state",g)}},wy:function(a,b){b=$m($$t.$ai.$type,null);var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"patternType":b=$m($$t.$ai.$type,$$t.$i9.b($$t.$ai.$type,c.d,null));break;default:break}}return{p1:b}},ace:function(a,b){a.ad().p($$t.$a0.l9,null);var c;if($l(b,null)){c=$$t.$i9.f($$t.$ai.$type,b.value());a.ad().h("patternType",c)}},wz:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case $$t.$i5.ar:b=c.d;break;default:break}}return{p1:b}},acf:function(a,b){a.ad().p($$t.$a0.mf,null);var c;c=b;a.ad().h($$t.$i5.ar,c)},w0:function(a,b,c){b=0;c=null;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"cacheId":b=$.ig.util.parseUInt32_1(d.d,$$0.$cg.invariantCulture());break;case $$t.$i5.ar:c=d.d;break;default:break}}return{p1:b,p2:c}},acg:function(a,b,c){a.ad().p($$t.$a0.mi,null);var d;d=b.toString();a.ad().h("cacheId",d);d=c;a.ad().h($$t.$i5.ar,d)},w1:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},ach:function(a){a.ad().p($$t.$a0.mj,null)},w2:function(a,b,c,d,e,f){b=false;c=false;d=false;e=false;f=true;var h=a.ab().u.getEnumerator();while(h.moveNext()){var g=h.current();switch(g.a.e(a.d())){case"horizontalCentered":b=$$t.$g7.e(g.d);break;case"verticalCentered":c=$$t.$g7.e(g.d);break;case"headings":d=$$t.$g7.e(g.d);break;case"gridLines":e=$$t.$g7.e(g.d);break;case"gridLinesSet":f=$$t.$g7.e(g.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f}},aci:function(a,b,c,d,e,f){a.ad().p($$t.$a0.mq,null);var g;if(b!=false){g=$$t.$g7.g(b);a.ad().h("horizontalCentered",g)}if(c!=false){g=$$t.$g7.g(c);a.ad().h("verticalCentered",g)}if(d!=false){g=$$t.$g7.g(d);a.ad().h("headings",g)}if(e!=false){g=$$t.$g7.g(e);a.ad().h("gridLines",g)}if(f!=true){g=$$t.$g7.g(f);a.ad().h("gridLinesSet",g)}},w3:function(a,b,c,d,e){b=null;c=null;d=null;e=$m($$t.$ij.$type,null);var g=a.ab().u.getEnumerator();while(g.moveNext()){var f=g.current();switch(f.a.e(a.d())){case"password":e=$m($$t.$ij.$type,$$t.$ij.b(f.d));break;case"sqref":c=f.d;break;case"name":d=f.d;break;case"securityDescriptor":b=f.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e}},w4:function(a,b,c,d,e,f,g,h){b=null;c=null;d=null;e=null;f=null;g=null;h=$m($$0.$be.$type,null);var j=a.ab().u.getEnumerator();while(j.moveNext()){var i=j.current();switch(i.a.e(a.d())){case"algorithmName":e=i.d;break;case"hashValue":f=i.d;break;case"saltValue":g=i.d;break;case"spinCount":h=$m($$0.$be.$type,$.ig.util.parseUInt32_1(i.d,$$0.$cg.invariantCulture()));break;case"sqref":c=i.d;break;case"name":d=i.d;break;case"securityDescriptor":b=i.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h}},acj:function(a,b,c,d,e){a.ad().p($$t.$a0.mw,null);var f;if($l(e,null)){f=e.value().toString();a.ad().h("password",f)}f=c;a.ad().h("sqref",f);f=d;a.ad().h("name",f);if(!String.isNullOrEmpty(b)){f=b;a.ad().h("securityDescriptor",f)}},ack:function(a,b,c,d,e,f,g,h){a.ad().p($$t.$a0.mw,null);var i;if(!String.isNullOrEmpty(b)){i=b;a.ad().h("securityDescriptor",i)}i=c;a.ad().h("sqref",i);i=d;a.ad().h("name",i);if(!String.isNullOrEmpty(e)){i=e;a.ad().h("algorithmName",i)}if(!String.isNullOrEmpty(f)){i=f;a.ad().h("hashValue",i)}if(!String.isNullOrEmpty(g)){i=g;a.ad().h("saltValue",i)}if($l(h,null)){i=h.value().toString();a.ad().h("spinCount",i)}},w5:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},acl:function(a){a.ad().p($$t.$a0.mx,null)},w6:function(a,b,c){b=$m($$0.$aq.$type,null);c=$m($$0.$aq.$type,null);var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"locked":b=$m($$0.$aq.$type,$$t.$g7.e(d.d));break;case"hidden":c=$m($$0.$aq.$type,$$t.$g7.e(d.d));break;default:break}}return{p1:b,p2:c}},acm:function(a,b,c){a.ad().p($$t.$a0.my,null);var d;if($l(b,null)){d=$$t.$g7.g(b.value());a.ad().h("locked",d)}if($l(c,null)){d=$$t.$g7.g(c.value());a.ad().h("hidden",d)}},w7:function(a){},acn:function(a){a.ad().p($$t.$a0.m5,null)},w8:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"val":b=c.d;break;default:break}}return{p1:b}},aco:function(a,b){a.ad().p($$t.$a0.nt,null);var c;c=b;a.ad().h("val",c)},w9:function(a,b){b=$m($$t.$ii.$type,null);var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"rgb":b=$m($$t.$ii.$type,$$t.$ii.d(c.d));break;default:break}}return{p1:b}},acp:function(a,b){a.ad().p($$t.$a0.nv,null);var c;if($l(b,null)){c=b.value().toString();a.ad().h("rgb",c)}},xa:function(a,b){var c=$$t.$a0.uj(a,$$t.$a0.nz,b);b=c.p2;return{p1:b}},acq:function(a,b){$$t.$a0.zy(a,$$t.$a0.nz,b)},xb:function(a,b,c){var d=$$t.$a0.um(a,$$t.$a0.n3,b,c);b=d.p2;c=d.p3;return{p1:b,p2:c}},acr:function(a,b,c){$$t.$a0.z1(a,$$t.$a0.n3,b,c)},xd:function(a,b){b=0;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"r":b=$.ig.util.parseUInt32_1(c.d,$$0.$cg.invariantCulture());break;default:break}}return{p1:b}},act:function(a,b){a.ad().p($$t.$a0.n2,null);var c;c=b.toString();a.ad().h("r",c)},xc:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b=$m($$0.$be.$type,null);c=null;d=0;e=false;f=$m(Number,null);g=false;h=false;i=0;j=false;k=false;l=false;m=false;var p=a.ab().u.getEnumerator();while(p.moveNext()){var o=p.current();switch(o.a.e(a.d())){case"r":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(o.d,$$0.$cg.invariantCulture()));break;case"spans":if(n==false){c=$$t.$i9.e(String,o.d,function(q){return q})}break;case"s":d=$.ig.util.parseUInt32_1(o.d,$$0.$cg.invariantCulture());break;case"customFormat":e=$$t.$g7.e(o.d);break;case"ht":f=$m(Number,$ak(o.d,$$0.$cg.invariantCulture()));break;case"hidden":g=$$t.$g7.e(o.d);break;case"customHeight":h=$$t.$g7.e(o.d);break;case"outlineLevel":i=$ae(o.d,$$0.$cg.invariantCulture());break;case"collapsed":j=$$t.$g7.e(o.d);break;case"thickTop":k=$$t.$g7.e(o.d);break;case"thickBot":l=$$t.$g7.e(o.d);break;case"ph":m=$$t.$g7.e(o.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m}},acs:function(a,b,c,d,e,f,g,h,i,j,k,l,m){a.ad().p($$t.$a0.n2,null);var n;if($l(b,null)){n=b.value().toString();a.ad().h("r",n)}if(c!=null){n=$.ig.util.stringJoin1(String," ",c);a.ad().h("spans",n)}if(d!=0){n=d.toString();a.ad().h("s",n)}if(e!=false){n=$$t.$g7.g(e);a.ad().h("customFormat",n)}if($l(f,null)){n=f.value().toString();a.ad().h("ht",n)}if(g!=false){n=$$t.$g7.g(g);a.ad().h("hidden",n)}if(h!=false){n=$$t.$g7.g(h);a.ad().h("customHeight",n)}if(i!=0){n=i.toString();a.ad().h("outlineLevel",n)}if(j!=false){n=$$t.$g7.g(j);a.ad().h("collapsed",n)}if(k!=false){n=$$t.$g7.g(k);a.ad().h("thickTop",n)}if(l!=false){n=$$t.$g7.g(l);a.ad().h("thickBot",n)}if(m!=false){n=$$t.$g7.g(m);a.ad().h("ph",n)}},xe:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},acu:function(a){a.ad().p($$t.$a0.n4,null)},xf:function(a,b){b=0;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"val":b=$$t.$i9.b($$t.$y.$type,c.d,b);break;default:break}}return{p1:b}},acv:function(a,b){a.ad().p($$t.$a0.oc,null);var c;c=$$t.$i9.f($$t.$y.$type,b);a.ad().h("val",c)},xg:function(a,b,c,d,e){b=3;c=null;d=0;e=null;var g=a.ab().u.getEnumerator();while(g.moveNext()){var f=g.current();switch(f.a.e(a.d())){case"pane":b=$$t.$i9.b($$t.$ag.$type,f.d,b);break;case"activeCell":c=f.d;break;case"activeCellId":d=$.ig.util.parseUInt32_1(f.d,$$0.$cg.invariantCulture());break;case"sqref":e=$$t.$i9.e(String,f.d,function(h){return h});break;default:break}}return{p1:b,p2:c,p3:d,p4:e}},acw:function(a,b,c,d,e){a.ad().p($$t.$a0.of,null);var f;if(b!=3){f=$$t.$i9.f($$t.$ag.$type,b);a.ad().h("pane",f)}f=c;a.ad().h("activeCell",f);if(d!=0){f=d.toString();a.ad().h("activeCellId",f)}if(e!=null){f=$.ig.util.stringJoin1(String," ",e);a.ad().h("sqref",f)}},xh:function(a,b){var c=$$t.$a0.ui(a,$$t.$a0.oi,b);b=c.p2;return{p1:b}},acx:function(a,b){$$t.$a0.zx(a,$$t.$a0.oi,b)},xi:function(a,b){b=false;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"fullCalcOnLoad":b=$$t.$g7.e(c.d);break;default:break}}return{p1:b}},acy:function(a,b){a.ad().p($$t.$a0.om,null);var c;if(b!=false){c=$$t.$g7.g(b);a.ad().h("fullCalcOnLoad",c)}},xj:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},acz:function(a){a.ad().p($$t.$a0.on,null)},xk:function(a,b,c){b=0;c=false;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"sheetId":b=$.ig.util.parseUInt32_1(d.d,$$0.$cg.invariantCulture());break;case"refreshError":c=$$t.$g7.e(d.d);break;default:break}}return{p1:b,p2:c}},ac0:function(a,b,c){a.ad().p($$t.$a0.on,null);var d;d=b.toString();a.ad().h("sheetId",d);if(c!=false){d=$$t.$g7.g(c);a.ad().h("refreshError",d)}},xl:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},ac1:function(a){a.ad().p($$t.$a0.oo,null)},xm:function(a,b,c,d,e){b=null;c=0;d=0;e=null;var g=a.ab().u.getEnumerator();while(g.moveNext()){var f=g.current();switch(f.a.e(a.d())){case"name":b=f.d;break;case"sheetId":c=$.ig.util.parseUInt32_1(f.d,$$0.$cg.invariantCulture());break;case"state":d=$$t.$i9.b($$t.$al.$type,f.d,d);break;case $$t.$i5.ar:e=f.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e}},ac2:function(a,b,c,d,e){a.ad().p($$t.$a0.ok,null);var f;f=b;a.ad().h("name",f);f=c.toString();a.ad().h("sheetId",f);if(d!=0){f=$$t.$i9.f($$t.$al.$type,d);a.ad().h("state",f)}f=e;a.ad().h($$t.$i5.ar,f)},xn:function(a,b,c,d,e,f,g,h,i,j){c=8;d=$m(Number,null);b=0;e=false;f=false;g=false;h=false;i=0;j=0;var l=a.ab().u.getEnumerator();while(l.moveNext()){var k=l.current();switch(k.a.e(a.d())){case"baseColWidth":c=$.ig.util.parseUInt32_1(k.d,$$0.$cg.invariantCulture());break;case"defaultColWidth":d=$m(Number,$ak(k.d,$$0.$cg.invariantCulture()));break;case"defaultRowHeight":b=$ak(k.d,$$0.$cg.invariantCulture());break;case"customHeight":e=$$t.$g7.e(k.d);break;case"zeroHeight":f=$$t.$g7.e(k.d);break;case"thickTop":g=$$t.$g7.e(k.d);break;case"thickBottom":h=$$t.$g7.e(k.d);break;case"outlineLevelRow":i=$ae(k.d,$$0.$cg.invariantCulture());break;case"outlineLevelCol":j=$ae(k.d,$$0.$cg.invariantCulture());break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j}},ac3:function(a,b,c,d,e,f,g,h,i,j){a.ad().p($$t.$a0.op,null);var k;if(c!=8){k=c.toString();a.ad().h("baseColWidth",k)}if($l(d,null)){k=d.value().toString();a.ad().h("defaultColWidth",k)}k=b.toString();a.ad().h("defaultRowHeight",k);if(e!=false){k=$$t.$g7.g(e);a.ad().h("customHeight",k)}if(f!=false){k=$$t.$g7.g(f);a.ad().h("zeroHeight",k)}if(g!=false){k=$$t.$g7.g(g);a.ad().h("thickTop",k)}if(h!=false){k=$$t.$g7.g(h);a.ad().h("thickBottom",k)}if(i!=0){k=i.toString();a.ad().h("outlineLevelRow",k)}if(j!=0){k=j.toString();a.ad().h("outlineLevelCol",k)}},xo:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"val":b=c.d;break;default:break}}return{p1:b}},ac4:function(a,b){a.ad().p($$t.$a0.or,null);var c;c=b;a.ad().h("val",c)},xp:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},ac5:function(a){a.ad().p($$t.$a0.os,null)},xq:function(a,b,c,d,e,f,g,h,i,j){b=false;c=false;d=null;e=false;f=false;g=true;h=null;i=false;j=true;var l=a.ab().u.getEnumerator();while(l.moveNext()){var k=l.current();switch(k.a.e(a.d())){case"syncHorizontal":b=$$t.$g7.e(k.d);break;case"syncVertical":c=$$t.$g7.e(k.d);break;case"syncRef":d=k.d;break;case"transitionEvaluation":e=$$t.$g7.e(k.d);break;case"transitionEntry":f=$$t.$g7.e(k.d);break;case"published":g=$$t.$g7.e(k.d);break;case"codeName":h=k.d;break;case"filterMode":i=$$t.$g7.e(k.d);break;case"enableFormatConditionsCalculation":j=$$t.$g7.e(k.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j}},ac6:function(a,b,c,d,e,f,g,h,i,j){a.ad().p($$t.$a0.ot,null);var k;if(b!=false){k=$$t.$g7.g(b);a.ad().h("syncHorizontal",k)}if(c!=false){k=$$t.$g7.g(c);a.ad().h("syncVertical",k)}k=d;a.ad().h("syncRef",k);if(e!=false){k=$$t.$g7.g(e);a.ad().h("transitionEvaluation",k)}if(f!=false){k=$$t.$g7.g(f);a.ad().h("transitionEntry",k)}if(g!=true){k=$$t.$g7.g(g);a.ad().h("published",k)}k=h;a.ad().h("codeName",k);if(i!=false){k=$$t.$g7.g(i);a.ad().h("filterMode",k)}if(j!=true){k=$$t.$g7.g(j);a.ad().h("enableFormatConditionsCalculation",k)}},xr:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){b=$m($$t.$ij.$type,null);c=false;d=false;e=false;f=true;g=true;h=true;i=true;j=true;k=true;l=true;m=true;n=false;o=true;p=true;q=true;r=false;var t=a.ab().u.getEnumerator();while(t.moveNext()){var s=t.current();switch(s.a.e(a.d())){case"password":b=$m($$t.$ij.$type,$$t.$ij.b(s.d));break;case"sheet":c=$$t.$g7.e(s.d);break;case"objects":d=$$t.$g7.e(s.d);break;case"scenarios":e=$$t.$g7.e(s.d);break;case"formatCells":f=$$t.$g7.e(s.d);break;case"formatColumns":g=$$t.$g7.e(s.d);break;case"formatRows":h=$$t.$g7.e(s.d);break;case"insertColumns":i=$$t.$g7.e(s.d);break;case"insertRows":j=$$t.$g7.e(s.d);break;case"insertHyperlinks":k=$$t.$g7.e(s.d);break;case"deleteColumns":l=$$t.$g7.e(s.d);break;case"deleteRows":m=$$t.$g7.e(s.d);break;case"selectLockedCells":n=$$t.$g7.e(s.d);break;case"sort":o=$$t.$g7.e(s.d);break;case"autoFilter":p=$$t.$g7.e(s.d);break;case"pivotTables":q=$$t.$g7.e(s.d);break;case"selectUnlockedCells":r=$$t.$g7.e(s.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n,p14:o,p15:p,p16:q,p17:r}},ac7:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){a.ad().p($$t.$a0.ou,null);var s;if($l(b,null)){s=b.value().toString();a.ad().h("password",s)}if(c!=false){s=$$t.$g7.g(c);a.ad().h("sheet",s);if(d!=false){s=$$t.$g7.g(d);a.ad().h("objects",s)}if(e!=false){s=$$t.$g7.g(e);a.ad().h("scenarios",s)}}if(f!=true){s=$$t.$g7.g(f);a.ad().h("formatCells",s)}if(g!=true){s=$$t.$g7.g(g);a.ad().h("formatColumns",s)}if(h!=true){s=$$t.$g7.g(h);a.ad().h("formatRows",s)}if(i!=true){s=$$t.$g7.g(i);a.ad().h("insertColumns",s)}if(j!=true){s=$$t.$g7.g(j);a.ad().h("insertRows",s)}if(k!=true){s=$$t.$g7.g(k);a.ad().h("insertHyperlinks",s)}if(l!=true){s=$$t.$g7.g(l);a.ad().h("deleteColumns",s)}if(m!=true){s=$$t.$g7.g(m);a.ad().h("deleteRows",s)}if(n!=false){s=$$t.$g7.g(n);a.ad().h("selectLockedCells",s)}if(o!=true){s=$$t.$g7.g(o);a.ad().h("sort",s)}if(p!=true){s=$$t.$g7.g(p);a.ad().h("autoFilter",s)}if(q!=true){s=$$t.$g7.g(q);a.ad().h("pivotTables",s)}if(r!=false){s=$$t.$g7.g(r);a.ad().h("selectUnlockedCells",s)}},b3:function(a){if(a.d()._conformance()==1){return true}var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){case"algorithmName":case"hashValue":case"saltValue":case"spinCount":return true;case"password":return false}}return false},xs:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){b=null;c=null;d=null;e=$m($$0.$be.$type,null);f=false;g=false;h=false;i=true;j=true;k=true;l=true;m=true;n=true;o=true;p=true;q=false;r=true;s=true;t=true;u=false;var w=a.ab().u.getEnumerator();while(w.moveNext()){var v=w.current();switch(v.a.e(a.d())){case"algorithmName":b=v.d;break;case"hashValue":c=v.d;break;case"saltValue":d=v.d;break;case"spinCount":e=$m($$0.$be.$type,$.ig.util.parseUInt32_1(v.d,$$0.$cg.invariantCulture()));break;case"sheet":f=$$t.$g7.e(v.d);break;case"objects":g=$$t.$g7.e(v.d);break;case"scenarios":h=$$t.$g7.e(v.d);break;case"formatCells":i=$$t.$g7.e(v.d);break;case"formatColumns":j=$$t.$g7.e(v.d);break;case"formatRows":k=$$t.$g7.e(v.d);break;case"insertColumns":l=$$t.$g7.e(v.d);break;case"insertRows":m=$$t.$g7.e(v.d);break;case"insertHyperlinks":n=$$t.$g7.e(v.d);break;case"deleteColumns":o=$$t.$g7.e(v.d);break;case"deleteRows":p=$$t.$g7.e(v.d);break;case"selectLockedCells":q=$$t.$g7.e(v.d);break;case"sort":r=$$t.$g7.e(v.d);break;case"autoFilter":s=$$t.$g7.e(v.d);break;case"pivotTables":t=$$t.$g7.e(v.d);break;case"selectUnlockedCells":u=$$t.$g7.e(v.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n,p14:o,p15:p,p16:q,p17:r,p18:s,p19:t,p20:u}},ac8:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){a.ad().p($$t.$a0.ou,null);var v;v=b;a.ad().h("algorithmName",v);v=c;a.ad().h("hashValue",v);v=d;a.ad().h("saltValue",v);if($l(e,null)){v=e.value().toString();a.ad().h("spinCount",v)}if(f!=false){v=$$t.$g7.g(f);a.ad().h("sheet",v)}if(g!=false){v=$$t.$g7.g(g);a.ad().h("objects",v)}if(h!=false){v=$$t.$g7.g(h);a.ad().h("scenarios",v)}if(i!=true){v=$$t.$g7.g(i);a.ad().h("formatCells",v)}if(j!=true){v=$$t.$g7.g(j);a.ad().h("formatColumns",v)}if(k!=true){v=$$t.$g7.g(k);a.ad().h("formatRows",v)}if(l!=true){v=$$t.$g7.g(l);a.ad().h("insertColumns",v)}if(m!=true){v=$$t.$g7.g(m);a.ad().h("insertRows",v)}if(n!=true){v=$$t.$g7.g(n);a.ad().h("insertHyperlinks",v)}if(o!=true){v=$$t.$g7.g(o);a.ad().h("deleteColumns",v)}if(p!=true){v=$$t.$g7.g(p);a.ad().h("deleteRows",v)}if(q!=false){v=$$t.$g7.g(q);a.ad().h("selectLockedCells",v)}if(r!=true){v=$$t.$g7.g(r);a.ad().h("sort",v)}if(s!=true){v=$$t.$g7.g(s);a.ad().h("autoFilter",v)}if(t!=true){v=$$t.$g7.g(t);a.ad().h("pivotTables",v)}if(u!=false){v=$$t.$g7.g(u);a.ad().h("selectUnlockedCells",v)}},xt:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},ac9:function(a){a.ad().p($$t.$a0.ov,null)},xu:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){c=false;d=false;e=true;f=true;g=true;h=false;i=false;j=true;k=true;l=true;m=true;n=0;o=null;p=64;q=100;r=0;s=0;t=0;b=0;var v=a.ab().u.getEnumerator();while(v.moveNext()){var u=v.current();switch(u.a.e(a.d())){case"windowProtection":c=$$t.$g7.e(u.d);break;case"showFormulas":d=$$t.$g7.e(u.d);break;case"showGridLines":e=$$t.$g7.e(u.d);break;case"showRowColHeaders":f=$$t.$g7.e(u.d);break;case"showZeros":g=$$t.$g7.e(u.d);break;case"rightToLeft":h=$$t.$g7.e(u.d);break;case"tabSelected":i=$$t.$g7.e(u.d);break;case"showRuler":j=$$t.$g7.e(u.d);break;case"showOutlineSymbols":k=$$t.$g7.e(u.d);break;case"defaultGridColor":l=$$t.$g7.e(u.d);break;case"showWhiteSpace":m=$$t.$g7.e(u.d);break;case"view":n=$$t.$i9.b($$t.$am.$type,u.d,n);break;case"topLeftCell":o=u.d;break;case"colorId":p=$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture());break;case"zoomScale":q=$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture());break;case"zoomScaleNormal":r=$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture());break;case"zoomScaleSheetLayoutView":s=$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture());break;case"zoomScalePageLayoutView":t=$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture());break;case"workbookViewId":b=$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture());break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n,p14:o,p15:p,p16:q,p17:r,p18:s,p19:t}},ada:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){a.ad().p($$t.$a0.ow,null);var u;if(c!=false){u=$$t.$g7.g(c);a.ad().h("windowProtection",u)}if(d!=false){u=$$t.$g7.g(d);a.ad().h("showFormulas",u)}if(e!=true){u=$$t.$g7.g(e);a.ad().h("showGridLines",u)}if(f!=true){u=$$t.$g7.g(f);a.ad().h("showRowColHeaders",u)}if(g!=true){u=$$t.$g7.g(g);a.ad().h("showZeros",u)}if(h!=false){u=$$t.$g7.g(h);a.ad().h("rightToLeft",u)}if(i!=false){u=$$t.$g7.g(i);a.ad().h("tabSelected",u)}if(j!=true){u=$$t.$g7.g(j);a.ad().h("showRuler",u)}if(k!=true){u=$$t.$g7.g(k);a.ad().h("showOutlineSymbols",u)}if(l!=true){u=$$t.$g7.g(l);a.ad().h("defaultGridColor",u)}if(m!=true){u=$$t.$g7.g(m);a.ad().h("showWhiteSpace",u)}if(n!=0){u=$$t.$i9.f($$t.$am.$type,n);a.ad().h("view",u)}u=o;a.ad().h("topLeftCell",u);if(p!=64){u=p.toString();a.ad().h("colorId",u)}if(q!=100){u=q.toString();a.ad().h("zoomScale",u)}if(r!=0){u=r.toString();a.ad().h("zoomScaleNormal",u)}if(s!=0){u=s.toString();a.ad().h("zoomScaleSheetLayoutView",u)}if(t!=0){u=t.toString();a.ad().h("zoomScalePageLayoutView",u)}u=b.toString();a.ad().h("workbookViewId",u)},xv:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},adb:function(a){a.ad().p($$t.$a0.ox,null)},xw:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},adc:function(a){a.ad().p($$t.$a0.pt,null)},xx:function(a,b,c,d,e,f,g,h){c=false;d=0;b=null;e=null;f=$m($$0.$be.$type,null);g=0;h=$m($$0.$be.$type,null);var j=a.ab().u.getEnumerator();while(j.moveNext()){var i=j.current();switch(i.a.e(a.d())){case"descending":c=$$t.$g7.e(i.d);break;case"sortBy":d=$$t.$i9.b($$v.$cn.$type,i.d,d);break;case"ref":b=i.d;break;case"customList":e=i.d;break;case"dxfId":f=$m($$0.$be.$type,$.ig.util.parseUInt32_1(i.d,$$0.$cg.invariantCulture()));break;case"iconSet":g=$$t.$i9.b($$v.$cl.$type,i.d,g);break;case"iconId":h=$m($$0.$be.$type,$.ig.util.parseUInt32_1(i.d,$$0.$cg.invariantCulture()));break;default:break}}if(g<=16){}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h}},add:function(a,b,c,d,e,f,g,h){if(g<=16){$$t.$a0.ade(a,$$t.$a0.pz,null,b,c,d,e,f,g,h)}else{a.ad().g([new $$t.bl(0,$$t.$az.an,function(){$$t.$a0.ade(a,$$t.$az.ce,null,b,c,d,e,f,g,h)})],null)}},ade:function(a,b,c,d,e,f,g,h,i,j){a.ad().p(b,c);var k;if(e!=false){k=$$t.$g7.g(e);a.ad().h("descending",k)}if(f!=0){k=$$t.$i9.f($$v.$cn.$type,f);a.ad().h("sortBy",k)}k=d;a.ad().h("ref",k);k=g;a.ad().h("customList",k);if($l(h,null)){k=h.value().toString();a.ad().h("dxfId",k)}if(i!=0){k=$$t.$i9.f($$v.$cl.$type,i);a.ad().h("iconSet",k)}if($l(j,null)){k=j.value().toString();a.ad().h("iconId",k)}a.ad().k()},xy:function(a,b,c,d,e){c=false;d=false;e=0;b=null;var g=a.ab().u.getEnumerator();while(g.moveNext()){var f=g.current();switch(f.a.e(a.d())){case"columnSort":c=$$t.$g7.e(f.d);break;case"caseSensitive":d=$$t.$g7.e(f.d);break;case"sortMethod":e=$$t.$i9.b($$t.$an.$type,f.d,e);break;case"ref":b=f.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e}},adf:function(a,b,c,d,e){a.ad().p($$t.$a0.p1,null);var f;if(c!=false){f=$$t.$g7.g(c);a.ad().h("columnSort",f)}if(d!=false){f=$$t.$g7.g(d);a.ad().h("caseSensitive",f)}if(e!=0){f=$$t.$i9.f($$t.$an.$type,e);a.ad().h("sortMethod",f)}f=b;a.ad().h("ref",f)},xz:function(a,b,c){b=$m($$0.$be.$type,null);c=$m($$0.$be.$type,null);var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"count":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(d.d,$$0.$cg.invariantCulture()));break;case"uniqueCount":c=$m($$0.$be.$type,$.ig.util.parseUInt32_1(d.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b,p2:c}},adg:function(a,b,c){a.ad().p($$t.$a0.p5,null);var d;if($l(b,null)){d=b.value().toString();a.ad().h("count",d)}if($l(c,null)){d=c.value().toString();a.ad().h("uniqueCount",d)}},x0:function(a,b){var c=$$t.$a0.uj(a,$$t.$a0.p6,b);b=c.p2;return{p1:b}},adh:function(a,b){$$t.$a0.zy(a,$$t.$a0.p6,b)},x1:function(a,b){b=0;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"position":b=$ak(c.d,$$0.$cg.invariantCulture());break;default:break}}return{p1:b}},adi:function(a,b){a.ad().p($$t.$a0.qa,null);var c;c=b.toString();a.ad().h("position",c)},x2:function(a,b){var c=$$t.$a0.ui(a,$$t.$a0.qc,b);b=c.p2;return{p1:b}},adj:function(a,b){$$t.$a0.zx(a,$$t.$a0.qc,b)},x3:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},adk:function(a){a.ad().p($$t.$a0.qe,null);var b=a.d()._conformance();a.ad().l($$t.$a0.ao,false)},x4:function(a,b){b=0;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"val":b=$ak(c.d,$$0.$cg.invariantCulture());break;default:break}}return{p1:b}},adl:function(a,b){a.ad().p($$t.$a0.qk,null);var c;c=b.toString();a.ad().h("val",c)},x5:function(a,b,c,d,e,f){var g=$$t.$a0.uk(a,$$t.$a0.qn,b,c,d,e,f);b=g.p2;c=g.p3;d=g.p4;e=g.p5;f=g.p6;return{p1:b,p2:c,p3:d,p4:e,p5:f}},adm:function(a,b,c,d,e,f){$$t.$a0.zz(a,$$t.$a0.qn,b,c,d,e,f)},x6:function(a,b,c,d,e,f,g,h,i,j,k,l,m){b=0;c=null;d=null;e=0;f=null;g=$m($$0.$be.$type,null);h=$m($$0.$be.$type,null);i=$m($$0.$be.$type,null);j=$m($$0.$be.$type,null);k=null;l=null;m=null;var o=a.ab().u.getEnumerator();while(o.moveNext()){var n=o.current();switch(n.a.e(a.d())){case"id":b=$.ig.util.parseUInt32_1(n.d,$$0.$cg.invariantCulture());break;case"uniqueName":c=n.d;break;case"name":d=n.d;break;case"totalsRowFunction":e=$$t.$i9.b($$v.$cp.$type,n.d,e);break;case"totalsRowLabel":f=n.d;break;case"queryTableFieldId":g=$m($$0.$be.$type,$.ig.util.parseUInt32_1(n.d,$$0.$cg.invariantCulture()));break;case"headerRowDxfId":h=$m($$0.$be.$type,$.ig.util.parseUInt32_1(n.d,$$0.$cg.invariantCulture()));break;case"dataDxfId":i=$m($$0.$be.$type,$.ig.util.parseUInt32_1(n.d,$$0.$cg.invariantCulture()));break;case"totalsRowDxfId":j=$m($$0.$be.$type,$.ig.util.parseUInt32_1(n.d,$$0.$cg.invariantCulture()));break;case"headerRowCellStyle":k=n.d;break;case"dataCellStyle":l=n.d;break;case"totalsRowCellStyle":m=n.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m}},adn:function(a,b,c,d,e,f,g,h,i,j,k,l,m){a.ad().p($$t.$a0.qr,null);var n;n=b.toString();a.ad().h("id",n);n=c;a.ad().h("uniqueName",n);n=d;a.ad().h("name",n);if(e!=0){n=$$t.$i9.f($$v.$cp.$type,e);a.ad().h("totalsRowFunction",n)}n=f;a.ad().h("totalsRowLabel",n);if($l(g,null)){n=g.value().toString();a.ad().h("queryTableFieldId",n)}if($l(h,null)){n=h.value().toString();a.ad().h("headerRowDxfId",n);
}if($l(i,null)){n=i.value().toString();a.ad().h("dataDxfId",n)}if($l(j,null)){n=j.value().toString();a.ad().h("totalsRowDxfId",n)}n=k;a.ad().h("headerRowCellStyle",n);n=l;a.ad().h("dataCellStyle",n);n=m;a.ad().h("totalsRowCellStyle",n)},x7:function(a,b){b=$m($$0.$be.$type,null);var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"count":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(c.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b}},ado:function(a,b){a.ad().p($$t.$a0.qs,null);var c;if($l(b,null)){c=b.value().toString();a.ad().h("count",c)}},x8:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){b=0;c=null;d=null;e=null;f=null;g=0;h=1;i=false;j=false;k=0;l=true;m=false;n=$m($$0.$be.$type,null);o=$m($$0.$be.$type,null);p=$m($$0.$be.$type,null);q=$m($$0.$be.$type,null);r=$m($$0.$be.$type,null);s=$m($$0.$be.$type,null);t=null;u=null;v=null;w=$m($$0.$be.$type,null);var y=a.ab().u.getEnumerator();while(y.moveNext()){var x=y.current();switch(x.a.e(a.d())){case"id":b=$.ig.util.parseUInt32_1(x.d,$$0.$cg.invariantCulture());break;case"name":c=x.d;break;case"displayName":d=x.d;break;case"comment":e=x.d;break;case"ref":f=x.d;break;case"tableType":g=$$t.$i9.b($$t.$ao.$type,x.d,g);break;case"headerRowCount":h=$.ig.util.parseUInt32_1(x.d,$$0.$cg.invariantCulture());break;case"insertRow":i=$$t.$g7.e(x.d);break;case"insertRowShift":j=$$t.$g7.e(x.d);break;case"totalsRowCount":k=$.ig.util.parseUInt32_1(x.d,$$0.$cg.invariantCulture());break;case"totalsRowShown":l=$$t.$g7.e(x.d);break;case"published":m=$$t.$g7.e(x.d);break;case"headerRowDxfId":n=$m($$0.$be.$type,$.ig.util.parseUInt32_1(x.d,$$0.$cg.invariantCulture()));break;case"dataDxfId":o=$m($$0.$be.$type,$.ig.util.parseUInt32_1(x.d,$$0.$cg.invariantCulture()));break;case"totalsRowDxfId":p=$m($$0.$be.$type,$.ig.util.parseUInt32_1(x.d,$$0.$cg.invariantCulture()));break;case"headerRowBorderDxfId":q=$m($$0.$be.$type,$.ig.util.parseUInt32_1(x.d,$$0.$cg.invariantCulture()));break;case"tableBorderDxfId":r=$m($$0.$be.$type,$.ig.util.parseUInt32_1(x.d,$$0.$cg.invariantCulture()));break;case"totalsRowBorderDxfId":s=$m($$0.$be.$type,$.ig.util.parseUInt32_1(x.d,$$0.$cg.invariantCulture()));break;case"headerRowCellStyle":t=x.d;break;case"dataCellStyle":u=x.d;break;case"totalsRowCellStyle":v=x.d;break;case"connectionId":w=$m($$0.$be.$type,$.ig.util.parseUInt32_1(x.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n,p14:o,p15:p,p16:q,p17:r,p18:s,p19:t,p20:u,p21:v,p22:w}},adp:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){a.ad().p($$t.$a0.qo,null);var x;x=b.toString();a.ad().h("id",x);x=c;a.ad().h("name",x);x=d;a.ad().h("displayName",x);x=e;a.ad().h("comment",x);x=f;a.ad().h("ref",x);if(g!=0){x=$$t.$i9.f($$t.$ao.$type,g);a.ad().h("tableType",x)}if(h!=1){x=h.toString();a.ad().h("headerRowCount",x)}if(i!=false){x=$$t.$g7.g(i);a.ad().h("insertRow",x)}if(j!=false){x=$$t.$g7.g(j);a.ad().h("insertRowShift",x)}if(k!=0){x=k.toString();a.ad().h("totalsRowCount",x)}if(l!=true){x=$$t.$g7.g(l);a.ad().h("totalsRowShown",x)}if(m!=false){x=$$t.$g7.g(m);a.ad().h("published",x)}if($l(n,null)){x=n.value().toString();a.ad().h("headerRowDxfId",x)}if($l(o,null)){x=o.value().toString();a.ad().h("dataDxfId",x)}if($l(p,null)){x=p.value().toString();a.ad().h("totalsRowDxfId",x)}if($l(q,null)){x=q.value().toString();a.ad().h("headerRowBorderDxfId",x)}if($l(r,null)){x=r.value().toString();a.ad().h("tableBorderDxfId",x)}if($l(s,null)){x=s.value().toString();a.ad().h("totalsRowBorderDxfId",x)}x=t;a.ad().h("headerRowCellStyle",x);x=u;a.ad().h("dataCellStyle",x);x=v;a.ad().h("totalsRowCellStyle",x);if($l(w,null)){x=w.value().toString();a.ad().h("connectionId",x)}},x9:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case $$t.$i5.ar:b=c.d;break;default:break}}return{p1:b}},adq:function(a,b){a.ad().p($$t.$a0.qt,null);var c;c=b;a.ad().h($$t.$i5.ar,c)},ya:function(a,b){b=$m($$0.$be.$type,null);var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"count":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(c.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b}},adr:function(a,b){a.ad().p($$t.$a0.qu,null);var c;if($l(b,null)){c=b.value().toString();a.ad().h("count",c)}},yb:function(a,b,c,d,e){b=null;c=true;d=true;e=$m($$0.$be.$type,null);var g=a.ab().u.getEnumerator();while(g.moveNext()){var f=g.current();switch(f.a.e(a.d())){case"name":b=f.d;break;case"pivot":c=$$t.$g7.e(f.d);break;case"table":d=$$t.$g7.e(f.d);break;case"count":e=$m($$0.$be.$type,$.ig.util.parseUInt32_1(f.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b,p2:c,p3:d,p4:e}},ads:function(a,b,c,d,e){a.ad().p($$t.$a0.qv,null);var f;f=b;a.ad().h("name",f);if(c!=true){f=$$t.$g7.g(c);a.ad().h("pivot",f)}if(d!=true){f=$$t.$g7.g(d);a.ad().h("table",f)}if($l(e,null)){f=e.value().toString();a.ad().h("count",f)}},yc:function(a,b,c,d){b=0;c=1;d=$m($$0.$be.$type,null);var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case"type":b=$$t.$i9.b($$v.$co.$type,e.d,b);break;case"size":c=$.ig.util.parseUInt32_1(e.d,$$0.$cg.invariantCulture());break;case"dxfId":d=$m($$0.$be.$type,$.ig.util.parseUInt32_1(e.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b,p2:c,p3:d}},adt:function(a,b,c,d){a.ad().p($$t.$a0.qw,null);var e;e=$$t.$i9.f($$v.$co.$type,b);a.ad().h("type",e);if(c!=1){e=c.toString();a.ad().h("size",e)}if($l(d,null)){e=d.value().toString();a.ad().h("dxfId",e)}},yd:function(a,b,c,d,e,f){b=null;c=$m($$0.$aq.$type,null);d=$m($$0.$aq.$type,null);e=$m($$0.$aq.$type,null);f=$m($$0.$aq.$type,null);var h=a.ab().u.getEnumerator();while(h.moveNext()){var g=h.current();switch(g.a.e(a.d())){case"name":b=g.d;break;case"showFirstColumn":c=$m($$0.$aq.$type,$$t.$g7.e(g.d));break;case"showLastColumn":d=$m($$0.$aq.$type,$$t.$g7.e(g.d));break;case"showRowStripes":e=$m($$0.$aq.$type,$$t.$g7.e(g.d));break;case"showColumnStripes":f=$m($$0.$aq.$type,$$t.$g7.e(g.d));break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f}},adu:function(a,b,c,d,e,f){a.ad().p($$t.$a0.qx,null);var g;g=b;a.ad().h("name",g);if($l(c,null)){g=$$t.$g7.g(c.value());a.ad().h("showFirstColumn",g)}if($l(d,null)){g=$$t.$g7.g(d.value());a.ad().h("showLastColumn",g)}if($l(e,null)){g=$$t.$g7.g(e.value());a.ad().h("showRowStripes",g)}if($l(f,null)){g=$$t.$g7.g(f.value());a.ad().h("showColumnStripes",g)}},ye:function(a,b,c,d){b=$m($$0.$be.$type,null);c=null;d=null;var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case"count":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(e.d,$$0.$cg.invariantCulture()));break;case"defaultTableStyle":c=e.d;break;case"defaultPivotStyle":d=e.d;break;default:break}}return{p1:b,p2:c,p3:d}},adv:function(a,b,c,d){a.ad().p($$t.$a0.qy,null);var e;if($l(b,null)){e=b.value().toString();a.ad().h("count",e)}e=c;a.ad().h("defaultTableStyle",e);e=d;a.ad().h("defaultPivotStyle",e)},yf:function(a,b){var c=$$t.$a0.u(a,$$t.$a0.ql,b,0);b=c.p2;b=$$t.$a0.rt(b,false);return{p1:b}},adw:function(a,b){b=$$t.$a0.hd(b);$$t.$a0.ai(a,$$t.$a0.ql,null,b,null,0)},yg:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},adx:function(a){a.ad().p($$t.$a0.q2,null)},yi:function(a,b){var c=$$t.$a0.uj(a,$$t.$a0.rc,b);b=c.p2;return{p1:b}},adz:function(a,b){$$t.$a0.zy(a,$$t.$a0.rc,b)},yh:function(a,b,c,d,e){c=true;d=false;b=0;e=$m(Number,null);var g=a.ab().u.getEnumerator();while(g.moveNext()){var f=g.current();switch(f.a.e(a.d())){case"top":c=$$t.$g7.e(f.d);break;case"percent":d=$$t.$g7.e(f.d);break;case"val":b=$ak(f.d,$$0.$cg.invariantCulture());break;case"filterVal":e=$m(Number,$ak(f.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b,p2:c,p3:d,p4:e}},ady:function(a,b,c,d,e){a.ad().p($$t.$a0.re,null);var f;if(c!=true){f=$$t.$g7.g(c);a.ad().h("top",f)}if(d!=false){f=$$t.$g7.g(d);a.ad().h("percent",f)}f=b.toString();a.ad().h("val",f);if($l(e,null)){f=e.value().toString();a.ad().h("filterVal",f)}},yj:function(a,b,c){var d=$$t.$a0.un(a,$$t.$a0.rk,b,c);b=d.p2;c=d.p3;return{p1:b,p2:c}},ad0:function(a,b,c){$$t.$a0.z2(a,$$t.$a0.rk,b,c)},yk:function(a,b){b=0;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"val":b=$$t.$i9.b($$t.$aq.$type,c.d,b);break;default:break}}return{p1:b}},ad1:function(a,b){a.ad().p($$t.$a0.rr,null);var c;if(b!=0){c=$$t.$i9.f($$t.$aq.$type,b);a.ad().h("val",c)}},yl:function(a,b){var c=$$t.$a0.u(a,$$t.$a0.r1,b,0);b=c.p2;return{p1:b}},ad2:function(a,b){$$t.$a0.ai(a,$$t.$a0.r1,null,b,null,0)},ad3:function(a,b,c){a.ad().r("v");if(c){$$t.$i8.as(a.ad())}a.ad().u(b)},ym:function(a,b){b=0;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"val":b=$$t.$i9.b($$t.$il.$type,c.d,b);break;default:break}}return{p1:b}},ad4:function(a,b){a.ad().p($$t.$a0.r5,null);var c;c=$$t.$i9.f($$t.$il.$type,b);a.ad().h("val",c)},yn:function(a,b){var c=$$t.$a0.uj(a,$$t.$a0.r6,b);b=c.p2;return{p1:b}},ad5:function(a,b){$$t.$a0.zy(a,$$t.$a0.r6,b)},yo:function(a,b){b=0;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"conformance":b=$$t.$i9.b($$t.$gd.$type,c.d,b);break;default:break}}return{p1:b}},ad6:function(a,b){a.ad().p($$t.$a0.sh,null);a.ad().l($$t.$i5.an,false);a.ad().l($$t.$a0.ao,false);var c=$$t.$i9.g($$t.$gd.$type,b,0,false);a.ad().h("conformance",c)},yp:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){b=false;c=0;d=true;e=false;f=false;g=true;h=false;i=true;j=0;k=null;l=false;m=false;n=false;o=false;p=false;q=true;r=false;s=$m($$0.$be.$type,null);t=true;var v=a.ab().u.getEnumerator();while(v.moveNext()){var u=v.current();switch(u.a.e(a.d())){case"date1904":b=$$t.$g7.e(u.d);break;case"showObjects":c=$$t.$i9.b($$t.$ac.$type,u.d,c);break;case"showBorderUnselectedTables":d=$$t.$g7.e(u.d);break;case"filterPrivacy":e=$$t.$g7.e(u.d);break;case"promptedSolutions":f=$$t.$g7.e(u.d);break;case"showInkAnnotation":g=$$t.$g7.e(u.d);break;case"backupFile":h=$$t.$g7.e(u.d);break;case"saveExternalLinkValues":i=$$t.$g7.e(u.d);break;case"updateLinks":j=$$t.$i9.b($$t.$ar.$type,u.d,j);break;case"codeName":k=u.d;break;case"hidePivotFieldList":l=$$t.$g7.e(u.d);break;case"showPivotChartFilter":m=$$t.$g7.e(u.d);break;case"allowRefreshQuery":n=$$t.$g7.e(u.d);break;case"publishItems":o=$$t.$g7.e(u.d);break;case"checkCompatibility":p=$$t.$g7.e(u.d);break;case"autoCompressPictures":q=$$t.$g7.e(u.d);break;case"refreshAllConnections":r=$$t.$g7.e(u.d);break;case"defaultThemeVersion":s=$m($$0.$be.$type,$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture()));break;case"dateCompatibility":t=$$t.$g7.e(u.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n,p14:o,p15:p,p16:q,p17:r,p18:s,p19:t}},ad7:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){a.ad().p($$t.$a0.sm,null);var u;if(b!=false){u=$$t.$g7.g(b);a.ad().h("date1904",u)}if(c!=0){u=$$t.$i9.f($$t.$ac.$type,c);a.ad().h("showObjects",u)}if(d!=true){u=$$t.$g7.g(d);a.ad().h("showBorderUnselectedTables",u)}if(e!=false){u=$$t.$g7.g(e);a.ad().h("filterPrivacy",u)}if(f!=false){u=$$t.$g7.g(f);a.ad().h("promptedSolutions",u)}if(g!=true){u=$$t.$g7.g(g);a.ad().h("showInkAnnotation",u)}if(h!=false){u=$$t.$g7.g(h);a.ad().h("backupFile",u)}if(i!=true){u=$$t.$g7.g(i);a.ad().h("saveExternalLinkValues",u)}if(j!=0){u=$$t.$i9.f($$t.$ar.$type,j);a.ad().h("updateLinks",u)}if(k!=null){u=k;a.ad().h("codeName",u)}if(l!=false){u=$$t.$g7.g(l);a.ad().h("hidePivotFieldList",u)}if(m!=false){u=$$t.$g7.g(m);a.ad().h("showPivotChartFilter",u)}if(n!=false){u=$$t.$g7.g(n);a.ad().h("allowRefreshQuery",u)}if(o!=false){u=$$t.$g7.g(o);a.ad().h("publishItems",u)}if(p!=false){u=$$t.$g7.g(p);a.ad().h("checkCompatibility",u)}if(q!=true){u=$$t.$g7.g(q);a.ad().h("autoCompressPictures",u)}if(r!=false){u=$$t.$g7.g(r);a.ad().h("refreshAllConnections",u)}if($l(s,null)){u=s.value().toString();a.ad().h("defaultThemeVersion",u)}if(t!=true){u=$$t.$g7.g(t);a.ad().h("dateCompatibility",u)}},yq:function(a,b,c,d,e,f){b=false;c=false;d=false;e=$m($$0.$bd.$type,null);f=$m($$0.$bd.$type,null);var h=a.ab().u.getEnumerator();while(h.moveNext()){var g=h.current();switch(g.a.e(a.d())){case"lockStructure":b=$$t.$g7.e(g.d);break;case"lockWindows":c=$$t.$g7.e(g.d);break;case"lockRevision":d=$$t.$g7.e(g.d);break;case"workbookPassword":e=$m($$0.$bd.$type,$$t.$ij.d(g.d));break;case"revisionsPassword":f=$m($$0.$bd.$type,$$t.$ij.d(g.d));break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f}},ad8:function(a,b,c,d,e,f){a.ad().p($$t.$a0.sn,null);var g;if(b!=false){g=$$t.$g7.g(b);a.ad().h("lockStructure",g)}if(c!=false){g=$$t.$g7.g(c);a.ad().h("lockWindows",g)}if(d!=false){g=$$t.$g7.g(d);a.ad().h("lockRevision",g)}if($l(f,null)){g=new $$t.ij(1,f.value()).toString();a.ad().h("revisionsPassword",g)}if($l(e,null)){g=new $$t.ij(1,e.value()).toString();a.ad().h("workbookPassword",g)}},yr:function(a,b,c,d,e,f,g,h,i,j,k,l){b=false;c=false;d=false;e=null;f=null;g=null;h=$m($$0.$be.$type,null);i=null;j=null;k=null;l=$m($$0.$be.$type,null);var n=a.ab().u.getEnumerator();while(n.moveNext()){var m=n.current();switch(m.a.e(a.d())){case"lockStructure":b=$$t.$g7.e(m.d);break;case"lockWindows":c=$$t.$g7.e(m.d);break;case"lockRevision":d=$$t.$g7.e(m.d);break;case"revisionsAlgorithmName":e=m.d;break;case"revisionsHashValue":f=m.d;break;case"revisionsSaltValue":g=m.d;break;case"revisionsSpinCount":h=$m($$0.$be.$type,$.ig.util.parseUInt32_1(m.d,$$0.$cg.invariantCulture()));break;case"workbookAlgorithmName":i=m.d;break;case"workbookHashValue":j=m.d;break;case"workbookSaltValue":k=m.d;break;case"workbookSpinCount":l=$m($$0.$be.$type,$.ig.util.parseUInt32_1(m.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l}},ad9:function(a,b,c,d,e,f,g,h,i,j,k,l){a.ad().p($$t.$a0.sn,null);var m;if(b!=false){m=$$t.$g7.g(b);a.ad().h("lockStructure",m)}if(c!=false){m=$$t.$g7.g(c);a.ad().h("lockWindows",m)}if(d!=false){m=$$t.$g7.g(d);a.ad().h("lockRevision",m)}if(e!=null){m=e;a.ad().h("revisionsAlgorithmName",m)}if(f!=null){m=f.toString();a.ad().h("revisionsHashValue",m)}if(g!=null){m=g.toString();a.ad().h("revisionsSaltValue",m)}if($l(h,null)){m=h.value().toString();a.ad().h("revisionsSpinCount",m)}if(i!=null){m=i;a.ad().h("workbookAlgorithmName",m)}if(j!=null){m=j.toString();a.ad().h("workbookHashValue",m)}if(k!=null){m=k.toString();a.ad().h("workbookSaltValue",m)}if($l(l,null)){m=l.value().toString();a.ad().h("workbookSpinCount",m)}},ys:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b=0;c=false;d=true;e=true;f=true;g=$m($$0.$aw.$type,null);h=$m($$0.$aw.$type,null);i=$m($$0.$be.$type,null);j=$m($$0.$be.$type,null);k=600;l=0;m=0;n=true;var p=a.ab().u.getEnumerator();while(p.moveNext()){var o=p.current();switch(o.a.e(a.d())){case"visibility":b=$$t.$i9.b($$t.$at.$type,o.d,b);break;case"minimized":c=$$t.$g7.e(o.d);break;case"showHorizontalScroll":d=$$t.$g7.e(o.d);break;case"showVerticalScroll":e=$$t.$g7.e(o.d);break;case"showSheetTabs":f=$$t.$g7.e(o.d);break;case"xWindow":g=$m($$0.$aw.$type,$aa(o.d,$$0.$cg.invariantCulture()));break;case"yWindow":h=$m($$0.$aw.$type,$aa(o.d,$$0.$cg.invariantCulture()));break;case"windowWidth":i=$m($$0.$be.$type,$.ig.util.parseUInt32_1(o.d,$$0.$cg.invariantCulture()));break;case"windowHeight":j=$m($$0.$be.$type,$.ig.util.parseUInt32_1(o.d,$$0.$cg.invariantCulture()));break;case"tabRatio":k=$.ig.util.parseUInt32_1(o.d,$$0.$cg.invariantCulture());break;case"firstSheet":l=$.ig.util.parseUInt32_1(o.d,$$0.$cg.invariantCulture());break;case"activeTab":m=$.ig.util.parseUInt32_1(o.d,$$0.$cg.invariantCulture());break;case"autoFilterDateGrouping":n=$$t.$g7.e(o.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n}},aea:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){a.ad().p($$t.$a0.sq,null);var o;if(b!=0){o=$$t.$i9.f($$t.$at.$type,b);a.ad().h("visibility",o)}if(c!=false){o=$$t.$g7.g(c);a.ad().h("minimized",o)}if(d!=true){o=$$t.$g7.g(d);a.ad().h("showHorizontalScroll",o)}if(e!=true){o=$$t.$g7.g(e);a.ad().h("showVerticalScroll",o)}if(f!=true){o=$$t.$g7.g(f);a.ad().h("showSheetTabs",o)}if($l(g,null)){o=g.value().toString();a.ad().h("xWindow",o)}if($l(h,null)){o=h.value().toString();a.ad().h("yWindow",o)}if($l(i,null)){o=i.value().toString();a.ad().h("windowWidth",o)}if($l(j,null)){o=j.value().toString();a.ad().h("windowHeight",o)}if(k!=600){o=k.toString();a.ad().h("tabRatio",o)}if(l!=0){o=l.toString();a.ad().h("firstSheet",o)}if(m!=0){o=m.toString();a.ad().h("activeTab",o)}if(n!=true){o=$$t.$g7.g(n);a.ad().h("autoFilterDateGrouping",o)}},yt:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},aeb:function(a){a.ad().p($$t.$a0.ss,null);var b=a.d()._conformance();a.ad().l($$t.$i5.an,false);a.ad().l($$t.$a0.ao,false)},yu:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b=$m($$0.$be.$type,null);c=$m($$0.$be.$type,null);d=$m($$0.$be.$type,null);e=$m($$0.$be.$type,null);f=$m($$0.$be.$type,null);g=false;h=false;i=$m($$0.$aq.$type,null);j=$m($$0.$aq.$type,null);k=$m($$0.$aq.$type,null);l=$m($$0.$aq.$type,null);m=$m($$0.$aq.$type,null);n=$m($$0.$aq.$type,null);var p=a.ab().u.getEnumerator();while(p.moveNext()){var o=p.current();switch(o.a.e(a.d())){case"numFmtId":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(o.d,$$0.$cg.invariantCulture()));break;case"fontId":c=$m($$0.$be.$type,$.ig.util.parseUInt32_1(o.d,$$0.$cg.invariantCulture()));break;case"fillId":d=$m($$0.$be.$type,$.ig.util.parseUInt32_1(o.d,$$0.$cg.invariantCulture()));break;case"borderId":e=$m($$0.$be.$type,$.ig.util.parseUInt32_1(o.d,$$0.$cg.invariantCulture()));break;case"xfId":f=$m($$0.$be.$type,$.ig.util.parseUInt32_1(o.d,$$0.$cg.invariantCulture()));break;case"quotePrefix":g=$$t.$g7.e(o.d);break;case"pivotButton":h=$$t.$g7.e(o.d);break;case"applyNumberFormat":i=$m($$0.$aq.$type,$$t.$g7.e(o.d));break;case"applyFont":j=$m($$0.$aq.$type,$$t.$g7.e(o.d));break;case"applyFill":k=$m($$0.$aq.$type,$$t.$g7.e(o.d));break;case"applyBorder":l=$m($$0.$aq.$type,$$t.$g7.e(o.d));break;case"applyAlignment":m=$m($$0.$aq.$type,$$t.$g7.e(o.d));break;case"applyProtection":n=$m($$0.$aq.$type,$$t.$g7.e(o.d));break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n}},aec:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){a.ad().p($$t.$a0.sv,null);var o;if($l(b,null)){o=b.value().toString();a.ad().h("numFmtId",o)}if($l(c,null)){o=c.value().toString();a.ad().h("fontId",o)}if($l(d,null)){o=d.value().toString();a.ad().h("fillId",o)}if($l(e,null)){o=e.value().toString();a.ad().h("borderId",o)}if($l(f,null)){o=f.value().toString();a.ad().h("xfId",o)}if(g!=false){o=$$t.$g7.g(g);a.ad().h("quotePrefix",o)}if(h!=false){o=$$t.$g7.g(h);a.ad().h("pivotButton",o)}if($l(i,null)){o=$$t.$g7.g(i.value());a.ad().h("applyNumberFormat",o)}if($l(j,null)){o=$$t.$g7.g(j.value());a.ad().h("applyFont",o)}if($l(k,null)){o=$$t.$g7.g(k.value());a.ad().h("applyFill",o)}if($l(l,null)){o=$$t.$g7.g(l.value());a.ad().h("applyBorder",o)}if($l(m,null)){o=$$t.$g7.g(m.value());a.ad().h("applyAlignment",o)}if($l(n,null)){o=$$t.$g7.g(n.value());a.ad().h("applyProtection",o)}},yv:function(a,b,c,d,e){b=0;c=null;e=false;d=null;var g=a.ab().u.getEnumerator();while(g.moveNext()){var f=g.current();switch(f.a.e(a.d())){case"mapId":b=$.ig.util.parseUInt32_1(f.d,$$0.$cg.invariantCulture());break;case"xpath":c=f.d;break;case"denormalized":e=$$t.$g7.e(f.d);break;case"xmlDataType":d=f.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e}},aed:function(a,b,c,d,e){a.ad().p($$t.$a0.sy,null);var f;f=b.toString();a.ad().h("mapId",f);f=c;a.ad().h("xpath",f);if(e!=false){f=$$t.$g7.g(e);a.ad().h("denormalized",f)}f=d;a.ad().h("xmlDataType",f)},$type:new $.ig.Type("SpreadsheetMLMain",$$t.$i9.$type)},true);$c("UnknownElementCache___GetDescendants__IteratorClass:fy","Object",{_i:0,_c:null,_g:null,_e:null,_h:null,_f:null,_k:null,___3__strictElementName:null,_b:null,___3__documentManager:null,___4__this:null,init:function(a){$.ig.$op.init.call(this);this._i=a},_l:function(){this._i=-1;if(this._g!=null){this._g.dispose()}},_m:function(){this._i=1;if(this._h!=null){this._h.dispose()}},moveNext:function(){var __hasError__=false;try{while(this._i>=0){switch(this._i){case 0:this._i=1;this._g=this.___4__this.k().getEnumerator();this._i=2;break;case 2:this._i=1;if(this._g.moveNext()){this._e=this._g.current();if(this._e.b().e(this._b)==this._k){this._c=this._e;this._i=3;return true}this._i=3;break}this._l();break;case 3:this._i=4;this._h=this._e.g(this._k,this._b).getEnumerator();this._i=5;break;case 5:this._i=4;if(this._h.moveNext()){this._f=this._h.current();this._c=this._f;this._i=5;return true}this._m();this._i=2;break}}}catch(a){__hasError__=true;throw a}finally{if(__hasError__){this.dispose()}}return false},getEnumerator:function(){var d__;if(this._i==-2){this._i=0;d__=this}else{d__=new $$t.fy(0);d__.___4__this=this.___4__this}d__._k=this.___3__strictElementName;d__._b=this.___3__documentManager;return d__},reset:function(){throw new $$0.r(1)},dispose:function(){switch(this._i){case 1:case 2:case 3:this._l();break;case 4:case 5:try{this._m()}finally{this._l()}break}},current:function(){return this._c},current1:function(){return this._c},$type:new $.ig.Type("UnknownElementCache___GetDescendants__IteratorClass",$.ig.$ot,[$$0.$bx.$type.specialize($$t.$fx.$type),$$0.$bu.$type,$$0.$by.$type.specialize($$t.$fx.$type),$$0.$bv.$type,$$0.$au.$type])},true);$$t.$a.b="InfragisticsWPF4"+".Documents.Core_OPENXML"+".v18.1";$$t.$a.a="Documents Core OpenXml Library for "+"Javascript";$$t.$ki.a=[8364,129,8218,402,8222,8230,8224,8225,710,8240,352,8249,338,141,381,143,144,8216,8217,8220,8221,8226,8211,8212,732,8482,353,8250,339,157,382,376];$$t.$kx.v=" \r\n\t";$$t.$kx.s=" \r\n\t|,)";$$t.$kx.q=" \r\n\t>";$$t.$kx.p=" \r\n\t,&|()?+*";$$t.$kx.t=" \t\r\n>";$$t.$k4._ce=" \t\r\n><";$$t.$k4._cv=" \t\r\n=/><";$$t.$k4._cb=" \t\r\n='\"/>";$$t.$k4._cc=" \t\r\n>";$$t.$k4._cd="\t\r\n[<>";$$t.$k4._ch=" \t\r\n>";$$t.$k4._cl=" \t\r\n?";$$t.$kb._q="http://schemas.openxmlformats.org/package/2006/content-types";$$t.$kd.d="application/vnd.openxmlformats-package.relationships+xml";$$t.$kd.b="http://schemas.openxmlformats.org/package/2006/content-types";$$t.$ke.c="http://schemas.openxmlformats.org/package/2006/relationships";$$t.$ke.a=[$$t.$ke.c];$$t.$kg.z=null;$$t.$kg.ab=null;$$t.$kg.ad=null;$$t.$kg.x=null;$$t.$kg.v=null;$$t.$fu._a8="http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink";$$t.$fu._a7="http://purl.oclc.org/ooxml/officeDocument/relationships/hyperlink";$$t.$fu._relationshipIdPrefix="rId";$$t.$fw.a=new $$t.fw(0);$$t.$gi.a=new $$t.gi(0);$$t.$gv.a=new $$t.gv(0);$$t.$gu.a=new $$t.gu;$$t.$ih.a=new $$t.ih(0);$$t.$g5.a=new $$t.g5(0);$$t.$g7.a=new $$t.g7(1,false);$$t.$g7.c=new $$t.g7(1,true);$$t.$ic.a=new $$t.ic(1,false);$$t.$ic.e=new $$t.ic(1,true);$$t.$id.a=new $$t.id(1,false);$$t.$id.b=new $$t.id(1,true);$$t.$ig.a=new $$t.ig(0);$$t.$ii.a=new $$t.ii(0);$$t.$ij.a=new $$t.ij(0);$$t.$jc.u="http://schemas.microsoft.com/office/2006/relationships/activeXControlBinary";$$t.$jc.t="http://schemas.microsoft.com/office/2006/relationships/activeXControlBinary";$$t.$jd.u="http://schemas.openxmlformats.org/officeDocument/2006/relationships/control";$$t.$jd.t="http://purl.oclc.org/ooxml/officeDocument/relationships/control";$$t.$jr.x="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image";$$t.$jr.w="http://purl.oclc.org/ooxml/officeDocument/relationships/image";$$t.$je.y=new $$t.je(false);$$t.$je.z=new $$t.je(true);$$t.$jf.a1="application/vnd.openxmlformats-package.core-properties+xml";$$t.$jf.a4="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties";$$t.$jf.a3="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties";$$t.$jg.u="http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml";$$t.$jg.t="http://purl.oclc.org/ooxml/officeDocument/relationships/customXml";$$t.$jh.s="application/vnd.openxmlformats-officedocument.customXmlProperties+xml";$$t.$jh.u="http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps";$$t.$jh.t="http://purl.oclc.org/ooxml/officeDocument/relationships/customXmlProps";$$t.$ji.a1="application/vnd.ms-office.DrsDownRev+xml";$$t.$ji.a3="http://schemas.microsoft.com/office/2006/relationships/downRev";$$t.$jk.instance=new $$t.jk;$$t.$jl.y=new $$t.jl;$$t.$jm.a1="application/vnd.openxmlformats-officedocument.extended-properties+xml";$$t.$jm.a4="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties";$$t.$jm.a3="http://purl.oclc.org/ooxml/officeDocument/relationships/extendedProperties";$$t.$jo.a5="http://schemas.microsoft.com/office/2006/relationships/ui/extensibility";$$t.$jo.a3=new $$t.jo;$$t.$jp.a5="http://schemas.microsoft.com/office/2007/relationships/ui/extensibility";$$t.$jp.a3=new $$t.jp;$$t.$jq.y=new $$t.jq;$$t.$js.y=new $$t.js;$$t.$ju.y=new $$t.ju;$$t.$jv.a2="application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings";$$t.$jv.a3="application/vnd.openxmlformats-officedocument.wordprocessingml.printerSettings";$$t.$jv.a5="http://schemas.openxmlformats.org/officeDocument/2006/relationships/printerSettings";$$t.$jv.a4="http://purl.oclc.org/ooxml/officeDocument/relationships/printerSettings";$$t.$jx.a1="application/vnd.openxmlformats-officedocument.themeManager+xml";$$t.$jx.a4="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument";$$t.$jx.a3="http://purl.oclc.org/ooxml/officeDocument/relationships/officeDocument";$$t.$jy.a5="application/vnd.openxmlformats-officedocument.theme+xml";$$t.$jy.a7="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme";$$t.$jy.a6="http://purl.oclc.org/ooxml/officeDocument/relationships/theme";$$t.$jz.y=new $$t.jz;$$t.$j0.u="http://schemas.microsoft.com/office/2006/relationships/vbaProject";$$t.$j1.a5="application/vnd.openxmlformats-officedocument.vmlDrawing";$$t.$j1.a6="http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing";$$t.$j2.y=new $$t.j2;$$t.$i9.a=[" ","\r","\n","\t"];$$t.$io.au="http://schemas.openxmlformats.org/package/2006/metadata/core-properties";$$t.$io.ap=$$t.$io.au+"/category";$$t.$io.aq=$$t.$io.au+"/contentStatus";$$t.$io.ar=$$t.$io.au+"/coreProperties";$$t.$io.as=$$t.$io.au+"/keywords";$$t.$io.at=$$t.$io.au+"/lastModifiedBy";$$t.$io.av=$$t.$io.au+"/revision";$$t.$io.aw=$$t.$io.au+"/version";$$t.$io.an=new $$t.io;$$t.$ip.an=new $$t.ip;$$t.$iq.aq="http://purl.org/dc/elements/1.1/"+"description";$$t.$iq.an=new $$t.iq;$$t.$ir.an=new $$t.ir;$$t.$is.ap="http://schemas.microsoft.com/office/drawing/2010/main";$$t.$is.an=new $$t.is;$$t.$it.ar="http://schemas.microsoft.com/office/drawing/2010/slicer";$$t.$it.as=$$t.$it.ar+"/slicer";$$t.$it.an=new $$t.it;$$t.$iu.ar="http://schemas.openxmlformats.org/drawingml/2006/chart";$$t.$iu.aq="http://purl.oclc.org/ooxml/drawingml/chart";$$t.$iu.ap=$$t.$iu.aq+"/chart";$$t.$iu.an=new $$t.iu;$$t.$iv.d3="http://schemas.openxmlformats.org/drawingml/2006/main";$$t.$iv.d2="http://purl.oclc.org/ooxml/drawingml/main";$$t.$iv.aq=$$t.$iv.d2+"/accent1";$$t.$iv.ar=$$t.$iv.d2+"/accent2";$$t.$iv.as=$$t.$iv.d2+"/accent3";$$t.$iv.at=$$t.$iv.d2+"/accent4";$$t.$iv.au=$$t.$iv.d2+"/accent5";$$t.$iv.av=$$t.$iv.d2+"/accent6";$$t.$iv.ay=$$t.$iv.d2+"/alpha";$$t.$iv.az=$$t.$iv.d2+"/alphaMod";$$t.$iv.a0=$$t.$iv.d2+"/alphaOff";$$t.$iv.a4=$$t.$iv.d2+"/avLst";$$t.$iv.a8=$$t.$iv.d2+"/blip";$$t.$iv.a9=$$t.$iv.d2+"/blipFill";$$t.$iv.ba=$$t.$iv.d2+"/blue";$$t.$iv.bb=$$t.$iv.d2+"/blueMod";$$t.$iv.bc=$$t.$iv.d2+"/blueOff";$$t.$iv.be=$$t.$iv.d2+"/bodyPr";$$t.$iv.bh=$$t.$iv.d2+"/chExt";$$t.$iv.bi=$$t.$iv.d2+"/chOff";$$t.$iv.bj=$$t.$iv.d2+"/clrScheme";$$t.$iv.bl=$$t.$iv.d2+"/comp";$$t.$iv.bn=$$t.$iv.d2+"/cs";$$t.$iv.bp=$$t.$iv.d2+"/custClr";$$t.$iv.bq=$$t.$iv.d2+"/custClrLst";$$t.$iv.br=$$t.$iv.d2+"/custGeom";$$t.$iv.bx=$$t.$iv.d2+"/dk1";$$t.$iv.by=$$t.$iv.d2+"/dk2";$$t.$iv.b0=$$t.$iv.d2+"/ea";$$t.$iv.b2=$$t.$iv.d2+"/effectRef";$$t.$iv.b5=$$t.$iv.d2+"/ext";$$t.$iv.b6=$$t.$iv.d2+"/extLst";$$t.$iv.b7=$$t.$iv.d2+"/extraClrScheme";$$t.$iv.b8=$$t.$iv.d2+"/extraClrSchemeLst";$$t.$iv.b9=$$t.$iv.d2+"/fillRect";$$t.$iv.ca=$$t.$iv.d2+"/fillRef";$$t.$iv.ce=$$t.$iv.d2+"/fmtScheme";$$t.$iv.cf=$$t.$iv.d2+"/folHlink";$$t.$iv.cg=$$t.$iv.d2+"/font";$$t.$iv.ci=$$t.$iv.d2+"/fontRef";$$t.$iv.cj=$$t.$iv.d2+"/fontScheme";$$t.$iv.cm=$$t.$iv.d2+"/gd";$$t.$iv.cn=$$t.$iv.d2+"/graphic";$$t.$iv.co=$$t.$iv.d2+"/graphicData";$$t.$iv.cp=$$t.$iv.d2+"/graphicFrameLocks";$$t.$iv.cq=$$t.$iv.d2+"/gray";$$t.$iv.cr=$$t.$iv.d2+"/green";$$t.$iv.cs=$$t.$iv.d2+"/greenMod";$$t.$iv.ct=$$t.$iv.d2+"/greenOff";$$t.$iv.cu=$$t.$iv.d2+"/grpFill";$$t.$iv.cw=$$t.$iv.d2+"/headEnd";$$t.$iv.c0=$$t.$iv.d2+"/hlink";$$t.$iv.c1=$$t.$iv.d2+"/hlinkClick";$$t.$iv.c3=$$t.$iv.d2+"/hue";$$t.$iv.c4=$$t.$iv.d2+"/hueMod";$$t.$iv.c5=$$t.$iv.d2+"/hueOff";$$t.$iv.da=$$t.$iv.d2+"/inv";$$t.$iv.dj=$$t.$iv.d2+"/latin";$$t.$iv.dn=$$t.$iv.d2+"/ln";$$t.$iv.dp=$$t.$iv.d2+"/lnRef";$$t.$iv.dq=$$t.$iv.d2+"/lstStyle";$$t.$iv.dr=$$t.$iv.d2+"/lt1";$$t.$iv.ds=$$t.$iv.d2+"/lt2";$$t.$iv.dt=$$t.$iv.d2+"/lum";$$t.$iv.du=$$t.$iv.d2+"/lumMod";$$t.$iv.dv=$$t.$iv.d2+"/lumOff";$$t.$iv.dx=$$t.$iv.d2+"/majorFont";$$t.$iv.d0=$$t.$iv.d2+"/minorFont";$$t.$iv.eb=$$t.$iv.d2+"/noFill";$$t.$iv.el=$$t.$iv.d2+"/objectDefaults";$$t.$iv.em=$$t.$iv.d2+"/off";$$t.$iv.en=$$t.$iv.d2+"/p";$$t.$iv.ep=$$t.$iv.d2+"/picLocks";$$t.$iv.er=$$t.$iv.d2+"/pPr";$$t.$iv.et=$$t.$iv.d2+"/prstGeom";$$t.$iv.eu=$$t.$iv.d2+"/r";$$t.$iv.ew=$$t.$iv.d2+"/red";$$t.$iv.ex=$$t.$iv.d2+"/redMod";$$t.$iv.ey=$$t.$iv.d2+"/redOff";$$t.$iv.e2=$$t.$iv.d2+"/rPr";$$t.$iv.e5=$$t.$iv.d2+"/sat";$$t.$iv.e6=$$t.$iv.d2+"/satMod";$$t.$iv.e7=$$t.$iv.d2+"/satOff";$$t.$iv.e8=$$t.$iv.d2+"/schemeClr";$$t.$iv.fa=$$t.$iv.d2+"/shade";$$t.$iv.fd=$$t.$iv.d2+"/solidFill";$$t.$iv.fh=$$t.$iv.d2+"/spLocks";$$t.$iv.fi=$$t.$iv.d2+"/srcRect";$$t.$iv.fj=$$t.$iv.d2+"/srgbClr";$$t.$iv.fk=$$t.$iv.d2+"/stretch";$$t.$iv.fo=$$t.$iv.d2+"/sysClr";$$t.$iv.fq=$$t.$iv.d2+"/t";$$t.$iv.fs=$$t.$iv.d2+"/tailEnd";$$t.$iv.fu=$$t.$iv.d2+"/theme";$$t.$iv.fv=$$t.$iv.d2+"/themeElements";$$t.$iv.fw=$$t.$iv.d2+"/themeManager";$$t.$iv.fy=$$t.$iv.d2+"/tint";$$t.$iv.ge=$$t.$iv.d2+"/xfrm";$$t.$iv.an=new $$t.iv;$$t.$ix.an=new $$t.ix;$$t.$iy.ar="http://schemas.infragistics.com/officeExtensions";$$t.$iy.ap=$$t.$iy.ar+"/isSupported";$$t.$iy.aq=$$t.$iy.ar+"/listId";$$t.$iy.as=$$t.$iy.ar+"/nodeId";$$t.$iy.at=$$t.$iy.ar+"/unclosedParagraph";$$t.$iy.an=new $$t.iy;$$t.$iz.at="http://schemas.openxmlformats.org/markup-compatibility/2006";$$t.$iz.ap=$$t.$iz.at+"/AlternateContent";$$t.$iz.aq=$$t.$iz.at+"/Choice";$$t.$iz.ar=$$t.$iz.at+"/Fallback";$$t.$iz.as=$$t.$iz.at+"/Ignorable";$$t.$iz.an=new $$t.iz;$$t.$i0.a1="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes";$$t.$i0.a0="http://purl.oclc.org/ooxml/officeDocument/docPropsVTypes";$$t.$i0.at=$$t.$i0.a0+"/cy";$$t.$i0.ao=$$t.$i0.a0+"/decimal";$$t.$i0.au=$$t.$i0.a0+"/i1";$$t.$i0.av=$$t.$i0.a0+"/i2";$$t.$i0.aw=$$t.$i0.a0+"/i4";$$t.$i0.ax=$$t.$i0.a0+"/i8";$$t.$i0.ap=$$t.$i0.a0+"/int";$$t.$i0.a2=$$t.$i0.a0+"/r4";$$t.$i0.a3=$$t.$i0.a0+"/r8";$$t.$i0.a5=$$t.$i0.a0+"/ui1";$$t.$i0.a6=$$t.$i0.a0+"/ui2";$$t.$i0.a7=$$t.$i0.a0+"/ui4";$$t.$i0.a8=$$t.$i0.a0+"/ui8";$$t.$i0.ar=$$t.$i0.a0+"/uint";$$t.$i0.ay=$$t.$i0.a0+"/lpstr";$$t.$i0.az=$$t.$i0.a0+"/lpwstr";$$t.$i0.a9=$$t.$i0.a0+"/variant";$$t.$i0.ba=$$t.$i0.a0+"/vector";$$t.$i0.an=new $$t.i0;$$t.$i4.a4="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties";$$t.$i4.a3="http://purl.oclc.org/ooxml/officeDocument/extendedProperties";$$t.$i4.ap=$$t.$i4.a3+"/Application";$$t.$i4.aq=$$t.$i4.a3+"/AppVersion";$$t.$i4.ar=$$t.$i4.a3+"/Characters";$$t.$i4.as=$$t.$i4.a3+"/CharactersWithSpaces";$$t.$i4.at=$$t.$i4.a3+"/Company";$$t.$i4.au=$$t.$i4.a3+"/DocSecurity";$$t.$i4.av=$$t.$i4.a3+"/HeadingPairs";
$$t.$i4.aw=$$t.$i4.a3+"/HiddenSlides";$$t.$i4.ax=$$t.$i4.a3+"/HyperlinkBase";$$t.$i4.ay=$$t.$i4.a3+"/HyperlinksChanged";$$t.$i4.az=$$t.$i4.a3+"/Lines";$$t.$i4.a0=$$t.$i4.a3+"/LinksUpToDate";$$t.$i4.a1=$$t.$i4.a3+"/Manager";$$t.$i4.a2=$$t.$i4.a3+"/MMClips";$$t.$i4.a5=$$t.$i4.a3+"/Notes";$$t.$i4.a6=$$t.$i4.a3+"/Pages";$$t.$i4.a7=$$t.$i4.a3+"/Paragraphs";$$t.$i4.a9=$$t.$i4.a3+"/Properties";$$t.$i4.a8=$$t.$i4.a3+"/PresentationFormat";$$t.$i4.ba=$$t.$i4.a3+"/ScaleCrop";$$t.$i4.bb=$$t.$i4.a3+"/SharedDoc";$$t.$i4.bc=$$t.$i4.a3+"/Slides";$$t.$i4.bd=$$t.$i4.a3+"/Template";$$t.$i4.be=$$t.$i4.a3+"/TitlesOfParts";$$t.$i4.bf=$$t.$i4.a3+"/TotalTime";$$t.$i4.bg=$$t.$i4.a3+"/Words";$$t.$i4.an=new $$t.i4;$$t.$i5.au="http://schemas.openxmlformats.org/officeDocument/2006/relationships";$$t.$i5.at="http://purl.oclc.org/ooxml/officeDocument/relationships";$$t.$i5.ap=$$t.$i5.at+"/embed";$$t.$i5.aq=$$t.$i5.at+"/href";$$t.$i5.ar=$$t.$i5.at+"/id";$$t.$i5.as=$$t.$i5.at+"/link";$$t.$i5.av=$$t.$i5.at+"/pict";$$t.$i5.an=new $$t.i5;$$t.$i6.br="urn:schemas-microsoft-com:office:office"+"/idmap";$$t.$i6.ao="urn:schemas-microsoft-com:office:office"+"/lock";$$t.$i6.b6="urn:schemas-microsoft-com:office:office"+"/shapelayout";$$t.$i6.ar="urn:schemas-microsoft-com:office:office"+"/allowincell";$$t.$i6.at="urn:schemas-microsoft-com:office:office"+"/althref";$$t.$i6.as="urn:schemas-microsoft-com:office:office"+"/allowoverlap";$$t.$i6.a1="urn:schemas-microsoft-com:office:office"+"/bwmode";$$t.$i6.a2="urn:schemas-microsoft-com:office:office"+"/bwnormal";$$t.$i6.a3="urn:schemas-microsoft-com:office:office"+"/bwpure";$$t.$i6.av="urn:schemas-microsoft-com:office:office"+"/borderbottomcolor";$$t.$i6.aw="urn:schemas-microsoft-com:office:office"+"/borderleftcolor";$$t.$i6.ax="urn:schemas-microsoft-com:office:office"+"/borderrightcolor";$$t.$i6.ay="urn:schemas-microsoft-com:office:office"+"/bordertopcolor";$$t.$i6.az="urn:schemas-microsoft-com:office:office"+"/bullet";$$t.$i6.a0="urn:schemas-microsoft-com:office:office"+"/button";$$t.$i6.a4="urn:schemas-microsoft-com:office:office"+"/clip";$$t.$i6.a5="urn:schemas-microsoft-com:office:office"+"/cliptowrap";$$t.$i6.a6="urn:schemas-microsoft-com:office:office"+"/connectangles";$$t.$i6.a7="urn:schemas-microsoft-com:office:office"+"/connectlocs";$$t.$i6.a8="urn:schemas-microsoft-com:office:office"+"/connectortype";$$t.$i6.a9="urn:schemas-microsoft-com:office:office"+"/connecttype";$$t.$i6.bc="urn:schemas-microsoft-com:office:office"+"/detectmouseclick";$$t.$i6.bd="urn:schemas-microsoft-com:office:office"+"/dgmlayout";$$t.$i6.be="urn:schemas-microsoft-com:office:office"+"/dgmlayoutmru";$$t.$i6.bf="urn:schemas-microsoft-com:office:office"+"/dgmnodekind";$$t.$i6.bg="urn:schemas-microsoft-com:office:office"+"/doubleclicknotify";$$t.$i6.bh="urn:schemas-microsoft-com:office:office"+"/extrusionok";$$t.$i6.bi="urn:schemas-microsoft-com:office:office"+"/forcedash";$$t.$i6.bj="urn:schemas-microsoft-com:office:office"+"/gfxdata";$$t.$i6.bl="urn:schemas-microsoft-com:office:office"+"/hr";$$t.$i6.bm="urn:schemas-microsoft-com:office:office"+"/hralign";$$t.$i6.bn="urn:schemas-microsoft-com:office:office"+"/href";$$t.$i6.bo="urn:schemas-microsoft-com:office:office"+"/hrnoshade";$$t.$i6.bp="urn:schemas-microsoft-com:office:office"+"/hrpct";$$t.$i6.bq="urn:schemas-microsoft-com:office:office"+"/hrstd";$$t.$i6.bs="urn:schemas-microsoft-com:office:office"+"/insetmode";$$t.$i6.bt="urn:schemas-microsoft-com:office:office"+"/movie";$$t.$i6.bv="urn:schemas-microsoft-com:office:office"+"/ole";$$t.$i6.bw="urn:schemas-microsoft-com:office:office"+"/oleicon";$$t.$i6.bx="urn:schemas-microsoft-com:office:office"+"/oleid";$$t.$i6.by="urn:schemas-microsoft-com:office:office"+"/oned";$$t.$i6.bz="urn:schemas-microsoft-com:office:office"+"/opacity2";$$t.$i6.b1="urn:schemas-microsoft-com:office:office"+"/preferrelative";$$t.$i6.b2="urn:schemas-microsoft-com:office:office"+"/regroupid";$$t.$i6.b3="urn:schemas-microsoft-com:office:office"+"/relid";$$t.$i6.b8="urn:schemas-microsoft-com:office:office"+"/singleclick";$$t.$i6.b9="urn:schemas-microsoft-com:office:office"+"/spid";$$t.$i6.ca="urn:schemas-microsoft-com:office:office"+"/spt";$$t.$i6.cc="urn:schemas-microsoft-com:office:office"+"/title";$$t.$i6.ce="urn:schemas-microsoft-com:office:office"+"/userdrawn";$$t.$i6.cf="urn:schemas-microsoft-com:office:office"+"/userhidden";$$t.$i6.an=new $$t.i6;$$t.$i7.aw="urn:schemas-microsoft-com:vml"+"/background";$$t.$i7.an=new $$t.i7;$$t.$i8.ap="http://www.w3.org/XML/1998/namespace"+"/lang";$$t.$i8.ar="http://www.w3.org/XML/1998/namespace"+"/space";$$t.$i8.an=new $$t.i8;$$t.$jb.ap="http://www.w3.org/2001/XMLSchema-instance";$$t.$jb.aq=$$t.$jb.ap+"/type";$$t.$jb.an=new $$t.jb;$$t.$h._bo="http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath";$$t.$h._bn="http://purl.oclc.org/ooxml/officeDocument/relationships/externalLinkPath";$$t.$h._bt="http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink";$$t.$h._bs="http://purl.oclc.org/ooxml/officeDocument/relationships/hyperlink";$$t.$h._bv="http://schemas.openxmlformats.org/officeDocument/2006/relationships/oleObject";$$t.$h._bu="http://purl.oclc.org/ooxml/officeDocument/relationships/oleObject";$$t.$a1.a1="application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml";$$t.$a1.a4="http://schemas.openxmlformats.org/officeDocument/2006/relationships/calcChain";$$t.$a1.a3="http://purl.oclc.org/ooxml/officeDocument/relationships/calcChain";$$t.$a2.s="application/vnd.ms-office.chartcolorstyle+xml";$$t.$a2.u="http://schemas.microsoft.com/office/2011/relationships/chartColorStyle";$$t.$a2.t="http://schemas.microsoft.com/office/2011/relationships/chartColorStyle";$$t.$a3.s="application/vnd.openxmlformats-officedocument.drawingml.chart+xml";$$t.$a3.u="http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart";$$t.$a3.t="http://purl.oclc.org/ooxml/officeDocument/relationships/chart";$$t.$a4.s="application/vnd.ms-office.chartstyle+xml";$$t.$a4.u="http://schemas.microsoft.com/office/2011/relationships/chartStyle";$$t.$a4.t="http://schemas.microsoft.com/office/2011/relationships/chartStyle";$$t.$a5.s="application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml";$$t.$a5.u="http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartUserShapes";$$t.$a5.t="http://purl.oclc.org/ooxml/officeDocument/relationships/chart";$$t.$a6.a2="application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml";$$t.$a6.a4="http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments";$$t.$a6.a3="http://purl.oclc.org/ooxml/officeDocument/relationships/comments";$$t.$a7.a1="application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml";$$t.$a7.a4="http://schemas.openxmlformats.org/officeDocument/2006/relationships/connections";$$t.$a7.a3="http://purl.oclc.org/ooxml/officeDocument/relationships/connections";$$t.$a8.s="application/vnd.ms-excel.controlproperties+xml";$$t.$a8.u="http://schemas.openxmlformats.org/officeDocument/2006/relationships/ctrlProp";$$t.$a8.t="http://schemas.openxmlformats.org/officeDocument/2006/relationships/ctrlProp";$$t.$a9.a2="application/vnd.openxmlformats-officedocument.drawing+xml";$$t.$a9.a4="http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing";$$t.$a9.a3="http://purl.oclc.org/ooxml/officeDocument/relationships/drawing";$$t.$ba.a2="application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml";$$t.$ba.a4="http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink";$$t.$ba.a3="http://purl.oclc.org/ooxml/officeDocument/relationships/externalLink";$$t.$bb.a2="application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml";$$t.$bb.a4="http://schemas.openxmlformats.org/officeDocument/2006/relationships/pivotCacheDefinition";$$t.$bb.a3="http://purl.oclc.org/ooxml/officeDocument/relationships/pivotCacheDefinition";$$t.$bc.a2="application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml";$$t.$bc.a4="http://schemas.openxmlformats.org/officeDocument/2006/relationships/pivotCacheRecords";$$t.$bc.a3="http://purl.oclc.org/ooxml/officeDocument/relationships/pivotCacheRecords";$$t.$bd.a2="application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml";$$t.$bd.a4="http://schemas.openxmlformats.org/officeDocument/2006/relationships/pivotTable";$$t.$bd.a3="http://purl.oclc.org/ooxml/officeDocument/relationships/pivotTable";$$t.$be.a1="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml";$$t.$be.a4="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings";$$t.$be.a3="http://purl.oclc.org/ooxml/officeDocument/relationships/sharedStrings";$$t.$bf.a2="application/vnd.ms-excel.slicerCache+xml";$$t.$bf.a3="http://schemas.microsoft.com/office/2007/relationships/slicerCache";$$t.$bg.a3="http://schemas.microsoft.com/office/2007/relationships/slicer";$$t.$bh.a1="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml";$$t.$bh.a4="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles";$$t.$bh.a3="http://purl.oclc.org/ooxml/officeDocument/relationships/styles";$$t.$bi.a2="application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml";$$t.$bi.a4="http://schemas.openxmlformats.org/officeDocument/2006/relationships/table";$$t.$bi.a3="http://purl.oclc.org/ooxml/officeDocument/relationships/table";$$t.$bj.a2="application/vnd.ms-excel.template.macroEnabled.main+xml";$$t.$bj.a3="application/vnd.ms-excel.sheet.macroEnabled.main+xml";$$t.$bj.a6="application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml";$$t.$bj.a7="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml";$$t.$bj.a5="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument";$$t.$bj.a4="http://purl.oclc.org/ooxml/officeDocument/relationships/officeDocument";$$t.$bk.a2="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml";$$t.$bk.a4="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet";$$t.$bk.a3="http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet";$$t.$aw.dr="http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing";$$t.$aw.dq="http://purl.oclc.org/ooxml/drawingml/spreadsheetDrawing";$$t.$aw.ds=$$t.$aw.dq+"/absoluteAnchor";$$t.$aw.dt=$$t.$aw.dq+"/clientData";$$t.$aw.du=$$t.$aw.dq+"/col";$$t.$aw.dv=$$t.$aw.dq+"/colOff";$$t.$aw.dy=$$t.$aw.dq+"/ext";$$t.$aw.d1=$$t.$aw.dq+"/from";$$t.$aw.d4=$$t.$aw.dq+"/oneCellAnchor";$$t.$aw.d6=$$t.$aw.dq+"/pos";$$t.$aw.d7=$$t.$aw.dq+"/row";$$t.$aw.d8=$$t.$aw.dq+"/rowOff";$$t.$aw.ea=$$t.$aw.dq+"/to";$$t.$aw.eb=$$t.$aw.dq+"/twoCellAnchor";$$t.$aw.ec=$$t.$aw.dq+"/wsDr";$$t.$aw.dw=$$t.$aw.dq+"/cxnSp";$$t.$aw.d2=$$t.$aw.dq+"/graphicFrame";$$t.$aw.d3=$$t.$aw.dq+"/grpSp";$$t.$aw.d5=$$t.$aw.dq+"/pic";$$t.$aw.d9=$$t.$aw.dq+"/sp";$$t.$aw.dn=new $$t.aw;$$t.$ax.aq="http://schemas.microsoft.com/office/excel/2006/main";$$t.$ax.ap=$$t.$ax.aq+"/f";$$t.$ax.ar=$$t.$ax.aq+"/sqref";$$t.$ax.an=new $$t.ax;$$t.$ay.ap="urn:schemas-microsoft-com:office:excel"+"/Anchor";$$t.$ay.aq="urn:schemas-microsoft-com:office:excel"+"/AutoFill";$$t.$ay.ar="urn:schemas-microsoft-com:office:excel"+"/AutoLine";$$t.$ay.as="urn:schemas-microsoft-com:office:excel"+"/AutoPict";$$t.$ay.at="urn:schemas-microsoft-com:office:excel"+"/AutoScale";$$t.$ay.au="urn:schemas-microsoft-com:office:excel"+"/Camera";$$t.$ay.av="urn:schemas-microsoft-com:office:excel"+"/Cancel";$$t.$ay.aw="urn:schemas-microsoft-com:office:excel"+"/CF";$$t.$ay.ax="urn:schemas-microsoft-com:office:excel"+"/Checked";$$t.$ay.ay="urn:schemas-microsoft-com:office:excel"+"/ClientData";$$t.$ay.az="urn:schemas-microsoft-com:office:excel"+"/ColHidden";$$t.$ay.a0="urn:schemas-microsoft-com:office:excel"+"/Colored";$$t.$ay.a1="urn:schemas-microsoft-com:office:excel"+"/Column";$$t.$ay.a2="urn:schemas-microsoft-com:office:excel"+"/DDE";$$t.$ay.a3="urn:schemas-microsoft-com:office:excel"+"/Default";$$t.$ay.a4="urn:schemas-microsoft-com:office:excel"+"/DefaultSize";$$t.$ay.a5="urn:schemas-microsoft-com:office:excel"+"/Disabled";$$t.$ay.a6="urn:schemas-microsoft-com:office:excel"+"/Dismiss";$$t.$ay.a7="urn:schemas-microsoft-com:office:excel"+"/FirstButton";$$t.$ay.a8="urn:schemas-microsoft-com:office:excel"+"/FmlaLink";$$t.$ay.a9="urn:schemas-microsoft-com:office:excel"+"/FmlaMacro";$$t.$ay.ba="urn:schemas-microsoft-com:office:excel"+"/Help";$$t.$ay.bb="urn:schemas-microsoft-com:office:excel"+"/Horiz";$$t.$ay.bc="urn:schemas-microsoft-com:office:excel"+"/JustLastX";$$t.$ay.be="urn:schemas-microsoft-com:office:excel"+"/LockText";$$t.$ay.bd="urn:schemas-microsoft-com:office:excel"+"/Locked";$$t.$ay.bf="urn:schemas-microsoft-com:office:excel"+"/MapOCX";$$t.$ay.bg="urn:schemas-microsoft-com:office:excel"+"/MoveWithCells";$$t.$ay.bh="urn:schemas-microsoft-com:office:excel"+"/MultiLine";$$t.$ay.bj="urn:schemas-microsoft-com:office:excel"+"/NoThreeD";$$t.$ay.bk="urn:schemas-microsoft-com:office:excel"+"/NoThreeD2";$$t.$ay.bm="urn:schemas-microsoft-com:office:excel"+"/PrintObject";$$t.$ay.bn="urn:schemas-microsoft-com:office:excel"+"/RecalcAlways";$$t.$ay.bo="urn:schemas-microsoft-com:office:excel"+"/Row";$$t.$ay.bp="urn:schemas-microsoft-com:office:excel"+"/RowHidden";$$t.$ay.bq="urn:schemas-microsoft-com:office:excel"+"/SecretEdit";$$t.$ay.br="urn:schemas-microsoft-com:office:excel"+"/SizeWithCells";$$t.$ay.bs="urn:schemas-microsoft-com:office:excel"+"/TextHAlign";$$t.$ay.bt="urn:schemas-microsoft-com:office:excel"+"/TextVAlign";$$t.$ay.bu="urn:schemas-microsoft-com:office:excel"+"/UIObj";$$t.$ay.bx="urn:schemas-microsoft-com:office:excel"+"/VScroll";$$t.$ay.bv="urn:schemas-microsoft-com:office:excel"+"/ValidIds";$$t.$ay.bw="urn:schemas-microsoft-com:office:excel"+"/Visible";$$t.$ay.an=new $$t.ay;$$t.$az.bt="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main";$$t.$az.ar=$$t.$az.bt+"/axisColor";$$t.$az.au=$$t.$az.bt+"/borderColor";$$t.$az.a0=$$t.$az.bt+"/conditionalFormatting";$$t.$az.a1=$$t.$az.bt+"/conditionalFormattings";$$t.$az.av=$$t.$az.bt+"/cfIcon";$$t.$az.aw=$$t.$az.bt+"/cfRule";$$t.$az.ax=$$t.$az.bt+"/cfvo";$$t.$az.ay=$$t.$az.bt+"/color";$$t.$az.az=$$t.$az.bt+"/colorScale";$$t.$az.a4=$$t.$az.bt+"/dataBar";$$t.$az.a5=$$t.$az.bt+"/dataValidation";$$t.$az.a6=$$t.$az.bt+"/dataValidations";$$t.$az.ba=$$t.$az.bt+"/dxf";$$t.$az.bf=$$t.$az.bt+"/fillColor";$$t.$az.bg=$$t.$az.bt+"/formula1";$$t.$az.bh=$$t.$az.bt+"/formula2";$$t.$az.bk=$$t.$az.bt+"/iconFilter";$$t.$az.bm=$$t.$az.bt+"/iconSet";$$t.$az.bo=$$t.$az.bt+"/id";$$t.$az.bw=$$t.$az.bt+"/negativeBorderColor";$$t.$az.bx=$$t.$az.bt+"/negativeFillColor";$$t.$az.by=$$t.$az.bt+"/oleItem";$$t.$az.b0=$$t.$az.bt+"/pivotCaches";$$t.$az.b8=$$t.$az.bt+"/slicer";$$t.$az.b9=$$t.$az.bt+"/slicerCache";$$t.$az.ca=$$t.$az.bt+"/slicerCaches";$$t.$az.cc=$$t.$az.bt+"/slicerList";$$t.$az.ce=$$t.$az.bt+"/sortCondition";$$t.$az.an=new $$t.az;$$t.$a0.le="http://schemas.openxmlformats.org/spreadsheetml/2006/main";$$t.$a0.ld="http://purl.oclc.org/ooxml/spreadsheetml/main";$$t.$a0.cj=$$t.$a0.ld+"/alignment";$$t.$a0.co=$$t.$a0.ld+"/anchor";$$t.$a0.cz=$$t.$a0.ld+"/author";$$t.$a0.c1=$$t.$a0.ld+"/authors";$$t.$a0.c5=$$t.$a0.ld+"/autoFilter";$$t.$a0.dc=$$t.$a0.ld+"/b";$$t.$a0.dg=$$t.$a0.ld+"/bgColor";$$t.$a0.dj=$$t.$a0.ld+"/bookViews";$$t.$a0.dk=$$t.$a0.ld+"/border";$$t.$a0.dm=$$t.$a0.ld+"/borders";$$t.$a0.dn=$$t.$a0.ld+"/bottom";$$t.$a0.dq=$$t.$a0.ld+"/brk";$$t.$a0.dt=$$t.$a0.ld+"/c";$$t.$a0.d0=$$t.$a0.ld+"/calcPr";$$t.$a0.d1=$$t.$a0.ld+"/calculatedColumnFormula";$$t.$a0.d4=$$t.$a0.ld+"/cell";$$t.$a0.d7=$$t.$a0.ld+"/cellStyle";$$t.$a0.d8=$$t.$a0.ld+"/cellStyles";$$t.$a0.d9=$$t.$a0.ld+"/cellStyleXfs";$$t.$a0.ea=$$t.$a0.ld+"/cellXfs";$$t.$a0.ef=$$t.$a0.ld+"/cfRule";$$t.$a0.eg=$$t.$a0.ld+"/cfvo";$$t.$a0.eo=$$t.$a0.ld+"/col";$$t.$a0.ep=$$t.$a0.ld+"/colBreaks";$$t.$a0.es=$$t.$a0.ld+"/color";$$t.$a0.ew=$$t.$a0.ld+"/colorScale";$$t.$a0.et=$$t.$a0.ld+"/colorFilter";$$t.$a0.ev=$$t.$a0.ld+"/colors";$$t.$a0.ex=$$t.$a0.ld+"/cols";$$t.$a0.ez=$$t.$a0.ld+"/comment";$$t.$a0.e1=$$t.$a0.ld+"/commentList";$$t.$a0.e2=$$t.$a0.ld+"/comments";$$t.$a0.e5=$$t.$a0.ld+"/condense";$$t.$a0.e6=$$t.$a0.ld+"/conditionalFormatting";$$t.$a0.e9=$$t.$a0.ld+"/control";$$t.$a0.fa=$$t.$a0.ld+"/controlPr";$$t.$a0.fb=$$t.$a0.ld+"/controls";$$t.$a0.fg=$$t.$a0.ld+"/customFilter";$$t.$a0.fh=$$t.$a0.ld+"/customFilters";$$t.$a0.fm=$$t.$a0.ld+"/customSheetView";$$t.$a0.fn=$$t.$a0.ld+"/customSheetViews";$$t.$a0.fp=$$t.$a0.ld+"/customWorkbookView";$$t.$a0.fq=$$t.$a0.ld+"/customWorkbookViews";$$t.$a0.fr=$$t.$a0.ld+"/dataBar";$$t.$a0.fu=$$t.$a0.ld+"/dataValidation";$$t.$a0.fv=$$t.$a0.ld+"/dataValidations";$$t.$a0.fy=$$t.$a0.ld+"/dateGroupItem";$$t.$a0.f1=$$t.$a0.ld+"/ddeItem";$$t.$a0.f2=$$t.$a0.ld+"/ddeItems";$$t.$a0.f3=$$t.$a0.ld+"/ddeLink";$$t.$a0.gd=$$t.$a0.ld+"/definedName";$$t.$a0.ge=$$t.$a0.ld+"/definedNames";$$t.$a0.gn=$$t.$a0.ld+"/diagonal";$$t.$a0.gs=$$t.$a0.ld+"/dimension";$$t.$a0.gy=$$t.$a0.ld+"/drawing";$$t.$a0.gz=$$t.$a0.ld+"/drawingHF";$$t.$a0.g2=$$t.$a0.ld+"/dxf";$$t.$a0.g4=$$t.$a0.ld+"/dxfs";$$t.$a0.g5=$$t.$a0.ld+"/dynamicFilter";$$t.$a0.g7=$$t.$a0.ld+"/end";$$t.$a0.he=$$t.$a0.ld+"/evenFooter";$$t.$a0.hf=$$t.$a0.ld+"/evenHeader";$$t.$a0.hg=$$t.$a0.ld+"/ext";$$t.$a0.hh=$$t.$a0.ld+"/extend";$$t.$a0.hi=$$t.$a0.ld+"/externalBook";$$t.$a0.hj=$$t.$a0.ld+"/externalLink";$$t.$a0.hk=$$t.$a0.ld+"/externalReference";$$t.$a0.hl=$$t.$a0.ld+"/externalReferences";$$t.$a0.hm=$$t.$a0.ld+"/extLst";$$t.$a0.ho=$$t.$a0.ld+"/f";$$t.$a0.hp=$$t.$a0.ld+"/family";$$t.$a0.hq=$$t.$a0.ld+"/fgColor";$$t.$a0.hr=$$t.$a0.ld+"/fileSharing";$$t.$a0.hs=$$t.$a0.ld+"/fileVersion";$$t.$a0.ht=$$t.$a0.ld+"/fill";$$t.$a0.hv=$$t.$a0.ld+"/fills";$$t.$a0.hw=$$t.$a0.ld+"/filter";$$t.$a0.hy=$$t.$a0.ld+"/filterColumn";$$t.$a0.h1=$$t.$a0.ld+"/filters";$$t.$a0.h4=$$t.$a0.ld+"/firstFooter";$$t.$a0.h5=$$t.$a0.ld+"/firstHeader";$$t.$a0.ib=$$t.$a0.ld+"/font";$$t.$a0.id=$$t.$a0.ld+"/fonts";$$t.$a0.ih=$$t.$a0.ld+"/format";$$t.$a0.im=$$t.$a0.ld+"/formats";$$t.$a0.io=$$t.$a0.ld+"/formula";$$t.$a0.ip=$$t.$a0.ld+"/formula1";$$t.$a0.iq=$$t.$a0.ld+"/formula2";$$t.$a0.iv=$$t.$a0.ld+"/gradientFill";$$t.$a0.i2=$$t.$a0.ld+"/headerFooter";$$t.$a0.je=$$t.$a0.ld+"/horizontal";$$t.$a0.jk=$$t.$a0.ld+"/hyperlink";$$t.$a0.jl=$$t.$a0.ld+"/hyperlinks";$$t.$a0.jm=$$t.$a0.ld+"/i";$$t.$a0.jo=$$t.$a0.ld+"/iconFilter";$$t.$a0.jq=$$t.$a0.ld+"/iconSet";$$t.$a0.jz=$$t.$a0.ld+"/indexedColors";$$t.$a0.b7=$$t.$a0.ld+"/is";$$t.$a0.ka=$$t.$a0.ld+"/left";$$t.$a0.kc=$$t.$a0.ld+"/legacyDrawing";$$t.$a0.kd=$$t.$a0.ld+"/legacyDrawingHF";$$t.$a0.k2=$$t.$a0.ld+"/mergeCell";$$t.$a0.k3=$$t.$a0.ld+"/mergeCells";$$t.$a0.lb=$$t.$a0.ld+"/name";$$t.$a0.lf=$$t.$a0.ld+"/numFmt";$$t.$a0.lh=$$t.$a0.ld+"/numFmts";$$t.$a0.lj=$$t.$a0.ld+"/oddFooter";$$t.$a0.lk=$$t.$a0.ld+"/oddHeader";$$t.$a0.lm=$$t.$a0.ld+"/oleItem";$$t.$a0.ln=$$t.$a0.ld+"/oleItems";$$t.$a0.lo=$$t.$a0.ld+"/oleLink";$$t.$a0.ls=$$t.$a0.ld+"/outline";$$t.$a0.lx=$$t.$a0.ld+"/outlinePr";$$t.$a0.lz=$$t.$a0.ld+"/pageMargins";$$t.$a0.l1=$$t.$a0.ld+"/pageSetup";$$t.$a0.l2=$$t.$a0.ld+"/pageSetUpPr";$$t.$a0.l3=$$t.$a0.ld+"/pane";$$t.$a0.l9=$$t.$a0.ld+"/patternFill";$$t.$a0.mf=$$t.$a0.ld+"/picture";$$t.$a0.mi=$$t.$a0.ld+"/pivotCache";$$t.$a0.mj=$$t.$a0.ld+"/pivotCaches";$$t.$a0.mk=$$t.$a0.ld+"/pivotTableDefinition";$$t.$a0.mq=$$t.$a0.ld+"/printOptions";$$t.$a0.mw=$$t.$a0.ld+"/protectedRange";$$t.$a0.mx=$$t.$a0.ld+"/protectedRanges";$$t.$a0.my=$$t.$a0.ld+"/protection";$$t.$a0.m5=$$t.$a0.ld+"/r";$$t.$a0.nt=$$t.$a0.ld+"/rFont";$$t.$a0.nv=$$t.$a0.ld+"/rgbColor";$$t.$a0.nz=$$t.$a0.ld+"/right";$$t.$a0.n2=$$t.$a0.ld+"/row";$$t.$a0.n3=$$t.$a0.ld+"/rowBreaks";$$t.$a0.n4=$$t.$a0.ld+"/rPr";$$t.$a0.oc=$$t.$a0.ld+"/scheme";$$t.$a0.of=$$t.$a0.ld+"/selection";$$t.$a0.ok=$$t.$a0.ld+"/sheet";$$t.$a0.om=$$t.$a0.ld+"/sheetCalcPr";$$t.$a0.on=$$t.$a0.ld+"/sheetData";$$t.$a0.oo=$$t.$a0.ld+"/sheetDataSet";$$t.$a0.op=$$t.$a0.ld+"/sheetFormatPr";$$t.$a0.or=$$t.$a0.ld+"/sheetName";$$t.$a0.os=$$t.$a0.ld+"/sheetNames";$$t.$a0.ot=$$t.$a0.ld+"/sheetPr";$$t.$a0.ou=$$t.$a0.ld+"/sheetProtection";$$t.$a0.ov=$$t.$a0.ld+"/sheets";$$t.$a0.ow=$$t.$a0.ld+"/sheetView";$$t.$a0.ox=$$t.$a0.ld+"/sheetViews";$$t.$a0.oi=$$t.$a0.ld+"/shadow";$$t.$a0.pt=$$t.$a0.ld+"/si";$$t.$a0.pz=$$t.$a0.ld+"/sortCondition";$$t.$a0.p1=$$t.$a0.ld+"/sortState";$$t.$a0.p5=$$t.$a0.ld+"/sst";$$t.$a0.p6=$$t.$a0.ld+"/start";$$t.$a0.qa=$$t.$a0.ld+"/stop";$$t.$a0.qc=$$t.$a0.ld+"/strike";$$t.$a0.qe=$$t.$a0.ld+"/styleSheet";$$t.$a0.qk=$$t.$a0.ld+"/sz";$$t.$a0.ql=$$t.$a0.ld+"/t";$$t.$a0.qn=$$t.$a0.ld+"/tabColor";$$t.$a0.qo=$$t.$a0.ld+"/table";$$t.$a0.qr=$$t.$a0.ld+"/tableColumn";$$t.$a0.qs=$$t.$a0.ld+"/tableColumns";$$t.$a0.qt=$$t.$a0.ld+"/tablePart";$$t.$a0.qu=$$t.$a0.ld+"/tableParts";$$t.$a0.qv=$$t.$a0.ld+"/tableStyle";$$t.$a0.qw=$$t.$a0.ld+"/tableStyleElement";$$t.$a0.qx=$$t.$a0.ld+"/tableStyleInfo";$$t.$a0.qy=$$t.$a0.ld+"/tableStyles";$$t.$a0.q2=$$t.$a0.ld+"/text";$$t.$a0.rc=$$t.$a0.ld+"/top";$$t.$a0.re=$$t.$a0.ld+"/top10";$$t.$a0.rk=$$t.$a0.ld+"/totalsRowFormula";$$t.$a0.rr=$$t.$a0.ld+"/u";$$t.$a0.r1=$$t.$a0.ld+"/v";$$t.$a0.r5=$$t.$a0.ld+"/vertAlign";$$t.$a0.r6=$$t.$a0.ld+"/vertical";$$t.$a0.sh=$$t.$a0.ld+"/workbook";$$t.$a0.sm=$$t.$a0.ld+"/workbookPr";$$t.$a0.sn=$$t.$a0.ld+"/workbookProtection";$$t.$a0.sq=$$t.$a0.ld+"/workbookView";$$t.$a0.ss=$$t.$a0.ld+"/worksheet";$$t.$a0.sv=$$t.$a0.ld+"/xf";$$t.$a0.sy=$$t.$a0.ld+"/xmlColumnPr";$$t.$a0.ao=new $$t.a0;if($.ig.documentsCore){$.ig.documentsCore._isNamespace=true}});

/*!
JSZip - A Javascript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2014 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/master/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/master/LICENSE
*/
!function(e){var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.JSZip=e()}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
    'use strict';
    // private property
    var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    
    
    // public method for encoding
    exports.encode = function(input, utf8) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
    
        while (i < input.length) {
    
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
    
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
    
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            }
            else if (isNaN(chr3)) {
                enc4 = 64;
            }
    
            output = output + _keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
    
        }
    
        return output;
    };
    
    // public method for decoding
    exports.decode = function(input, utf8) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
    
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    
        while (i < input.length) {
    
            enc1 = _keyStr.indexOf(input.charAt(i++));
            enc2 = _keyStr.indexOf(input.charAt(i++));
            enc3 = _keyStr.indexOf(input.charAt(i++));
            enc4 = _keyStr.indexOf(input.charAt(i++));
    
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
    
            output = output + String.fromCharCode(chr1);
    
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
    
        }
    
        return output;
    
    };
    
    },{}],2:[function(_dereq_,module,exports){
    'use strict';
    function CompressedObject() {
        this.compressedSize = 0;
        this.uncompressedSize = 0;
        this.crc32 = 0;
        this.compressionMethod = null;
        this.compressedContent = null;
    }
    
    CompressedObject.prototype = {
        /**
         * Return the decompressed content in an unspecified format.
         * The format will depend on the decompressor.
         * @return {Object} the decompressed content.
         */
        getContent: function() {
            return null; // see implementation
        },
        /**
         * Return the compressed content in an unspecified format.
         * The format will depend on the compressed conten source.
         * @return {Object} the compressed content.
         */
        getCompressedContent: function() {
            return null; // see implementation
        }
    };
    module.exports = CompressedObject;
    
    },{}],3:[function(_dereq_,module,exports){
    'use strict';
    exports.STORE = {
        magic: "\x00\x00",
        compress: function(content) {
            return content; // no compression
        },
        uncompress: function(content) {
            return content; // no compression
        },
        compressInputType: null,
        uncompressInputType: null
    };
    exports.DEFLATE = _dereq_('./flate');
    
    },{"./flate":8}],4:[function(_dereq_,module,exports){
    'use strict';
    
    var utils = _dereq_('./utils');
    
    var table = [
        0x00000000, 0x77073096, 0xEE0E612C, 0x990951BA,
        0x076DC419, 0x706AF48F, 0xE963A535, 0x9E6495A3,
        0x0EDB8832, 0x79DCB8A4, 0xE0D5E91E, 0x97D2D988,
        0x09B64C2B, 0x7EB17CBD, 0xE7B82D07, 0x90BF1D91,
        0x1DB71064, 0x6AB020F2, 0xF3B97148, 0x84BE41DE,
        0x1ADAD47D, 0x6DDDE4EB, 0xF4D4B551, 0x83D385C7,
        0x136C9856, 0x646BA8C0, 0xFD62F97A, 0x8A65C9EC,
        0x14015C4F, 0x63066CD9, 0xFA0F3D63, 0x8D080DF5,
        0x3B6E20C8, 0x4C69105E, 0xD56041E4, 0xA2677172,
        0x3C03E4D1, 0x4B04D447, 0xD20D85FD, 0xA50AB56B,
        0x35B5A8FA, 0x42B2986C, 0xDBBBC9D6, 0xACBCF940,
        0x32D86CE3, 0x45DF5C75, 0xDCD60DCF, 0xABD13D59,
        0x26D930AC, 0x51DE003A, 0xC8D75180, 0xBFD06116,
        0x21B4F4B5, 0x56B3C423, 0xCFBA9599, 0xB8BDA50F,
        0x2802B89E, 0x5F058808, 0xC60CD9B2, 0xB10BE924,
        0x2F6F7C87, 0x58684C11, 0xC1611DAB, 0xB6662D3D,
        0x76DC4190, 0x01DB7106, 0x98D220BC, 0xEFD5102A,
        0x71B18589, 0x06B6B51F, 0x9FBFE4A5, 0xE8B8D433,
        0x7807C9A2, 0x0F00F934, 0x9609A88E, 0xE10E9818,
        0x7F6A0DBB, 0x086D3D2D, 0x91646C97, 0xE6635C01,
        0x6B6B51F4, 0x1C6C6162, 0x856530D8, 0xF262004E,
        0x6C0695ED, 0x1B01A57B, 0x8208F4C1, 0xF50FC457,
        0x65B0D9C6, 0x12B7E950, 0x8BBEB8EA, 0xFCB9887C,
        0x62DD1DDF, 0x15DA2D49, 0x8CD37CF3, 0xFBD44C65,
        0x4DB26158, 0x3AB551CE, 0xA3BC0074, 0xD4BB30E2,
        0x4ADFA541, 0x3DD895D7, 0xA4D1C46D, 0xD3D6F4FB,
        0x4369E96A, 0x346ED9FC, 0xAD678846, 0xDA60B8D0,
        0x44042D73, 0x33031DE5, 0xAA0A4C5F, 0xDD0D7CC9,
        0x5005713C, 0x270241AA, 0xBE0B1010, 0xC90C2086,
        0x5768B525, 0x206F85B3, 0xB966D409, 0xCE61E49F,
        0x5EDEF90E, 0x29D9C998, 0xB0D09822, 0xC7D7A8B4,
        0x59B33D17, 0x2EB40D81, 0xB7BD5C3B, 0xC0BA6CAD,
        0xEDB88320, 0x9ABFB3B6, 0x03B6E20C, 0x74B1D29A,
        0xEAD54739, 0x9DD277AF, 0x04DB2615, 0x73DC1683,
        0xE3630B12, 0x94643B84, 0x0D6D6A3E, 0x7A6A5AA8,
        0xE40ECF0B, 0x9309FF9D, 0x0A00AE27, 0x7D079EB1,
        0xF00F9344, 0x8708A3D2, 0x1E01F268, 0x6906C2FE,
        0xF762575D, 0x806567CB, 0x196C3671, 0x6E6B06E7,
        0xFED41B76, 0x89D32BE0, 0x10DA7A5A, 0x67DD4ACC,
        0xF9B9DF6F, 0x8EBEEFF9, 0x17B7BE43, 0x60B08ED5,
        0xD6D6A3E8, 0xA1D1937E, 0x38D8C2C4, 0x4FDFF252,
        0xD1BB67F1, 0xA6BC5767, 0x3FB506DD, 0x48B2364B,
        0xD80D2BDA, 0xAF0A1B4C, 0x36034AF6, 0x41047A60,
        0xDF60EFC3, 0xA867DF55, 0x316E8EEF, 0x4669BE79,
        0xCB61B38C, 0xBC66831A, 0x256FD2A0, 0x5268E236,
        0xCC0C7795, 0xBB0B4703, 0x220216B9, 0x5505262F,
        0xC5BA3BBE, 0xB2BD0B28, 0x2BB45A92, 0x5CB36A04,
        0xC2D7FFA7, 0xB5D0CF31, 0x2CD99E8B, 0x5BDEAE1D,
        0x9B64C2B0, 0xEC63F226, 0x756AA39C, 0x026D930A,
        0x9C0906A9, 0xEB0E363F, 0x72076785, 0x05005713,
        0x95BF4A82, 0xE2B87A14, 0x7BB12BAE, 0x0CB61B38,
        0x92D28E9B, 0xE5D5BE0D, 0x7CDCEFB7, 0x0BDBDF21,
        0x86D3D2D4, 0xF1D4E242, 0x68DDB3F8, 0x1FDA836E,
        0x81BE16CD, 0xF6B9265B, 0x6FB077E1, 0x18B74777,
        0x88085AE6, 0xFF0F6A70, 0x66063BCA, 0x11010B5C,
        0x8F659EFF, 0xF862AE69, 0x616BFFD3, 0x166CCF45,
        0xA00AE278, 0xD70DD2EE, 0x4E048354, 0x3903B3C2,
        0xA7672661, 0xD06016F7, 0x4969474D, 0x3E6E77DB,
        0xAED16A4A, 0xD9D65ADC, 0x40DF0B66, 0x37D83BF0,
        0xA9BCAE53, 0xDEBB9EC5, 0x47B2CF7F, 0x30B5FFE9,
        0xBDBDF21C, 0xCABAC28A, 0x53B39330, 0x24B4A3A6,
        0xBAD03605, 0xCDD70693, 0x54DE5729, 0x23D967BF,
        0xB3667A2E, 0xC4614AB8, 0x5D681B02, 0x2A6F2B94,
        0xB40BBE37, 0xC30C8EA1, 0x5A05DF1B, 0x2D02EF8D
    ];
    
    /**
     *
     *  Javascript crc32
     *  http://www.webtoolkit.info/
     *
     */
    module.exports = function crc32(input, crc) {
        if (typeof input === "undefined" || !input.length) {
            return 0;
        }
    
        var isArray = utils.getTypeOf(input) !== "string";
    
        if (typeof(crc) == "undefined") {
            crc = 0;
        }
        var x = 0;
        var y = 0;
        var b = 0;
    
        crc = crc ^ (-1);
        for (var i = 0, iTop = input.length; i < iTop; i++) {
            b = isArray ? input[i] : input.charCodeAt(i);
            y = (crc ^ b) & 0xFF;
            x = table[y];
            crc = (crc >>> 8) ^ x;
        }
    
        return crc ^ (-1);
    };
    // vim: set shiftwidth=4 softtabstop=4:
    
    },{"./utils":19}],5:[function(_dereq_,module,exports){
    'use strict';
    var utils = _dereq_('./utils');
    
    function DataReader(data) {
        this.data = null; // type : see implementation
        this.length = 0;
        this.index = 0;
    }
    DataReader.prototype = {
        /**
         * Check that the offset will not go too far.
         * @param {string} offset the additional offset to check.
         * @throws {Error} an Error if the offset is out of bounds.
         */
        checkOffset: function(offset) {
            this.checkIndex(this.index + offset);
        },
        /**
         * Check that the specifed index will not be too far.
         * @param {string} newIndex the index to check.
         * @throws {Error} an Error if the index is out of bounds.
         */
        checkIndex: function(newIndex) {
            if (this.length < newIndex || newIndex < 0) {
                throw new Error("End of data reached (data length = " + this.length + ", asked index = " + (newIndex) + "). Corrupted zip ?");
            }
        },
        /**
         * Change the index.
         * @param {number} newIndex The new index.
         * @throws {Error} if the new index is out of the data.
         */
        setIndex: function(newIndex) {
            this.checkIndex(newIndex);
            this.index = newIndex;
        },
        /**
         * Skip the next n bytes.
         * @param {number} n the number of bytes to skip.
         * @throws {Error} if the new index is out of the data.
         */
        skip: function(n) {
            this.setIndex(this.index + n);
        },
        /**
         * Get the byte at the specified index.
         * @param {number} i the index to use.
         * @return {number} a byte.
         */
        byteAt: function(i) {
            // see implementations
        },
        /**
         * Get the next number with a given byte size.
         * @param {number} size the number of bytes to read.
         * @return {number} the corresponding number.
         */
        readInt: function(size) {
            var result = 0,
                i;
            this.checkOffset(size);
            for (i = this.index + size - 1; i >= this.index; i--) {
                result = (result << 8) + this.byteAt(i);
            }
            this.index += size;
            return result;
        },
        /**
         * Get the next string with a given byte size.
         * @param {number} size the number of bytes to read.
         * @return {string} the corresponding string.
         */
        readString: function(size) {
            return utils.transformTo("string", this.readData(size));
        },
        /**
         * Get raw data without conversion, <size> bytes.
         * @param {number} size the number of bytes to read.
         * @return {Object} the raw data, implementation specific.
         */
        readData: function(size) {
            // see implementations
        },
        /**
         * Find the last occurence of a zip signature (4 bytes).
         * @param {string} sig the signature to find.
         * @return {number} the index of the last occurence, -1 if not found.
         */
        lastIndexOfSignature: function(sig) {
            // see implementations
        },
        /**
         * Get the next date.
         * @return {Date} the date.
         */
        readDate: function() {
            var dostime = this.readInt(4);
            return new Date(
            ((dostime >> 25) & 0x7f) + 1980, // year
            ((dostime >> 21) & 0x0f) - 1, // month
            (dostime >> 16) & 0x1f, // day
            (dostime >> 11) & 0x1f, // hour
            (dostime >> 5) & 0x3f, // minute
            (dostime & 0x1f) << 1); // second
        }
    };
    module.exports = DataReader;
    
    },{"./utils":19}],6:[function(_dereq_,module,exports){
    'use strict';
    exports.base64 = false;
    exports.binary = false;
    exports.dir = false;
    exports.date = null;
    exports.compression = null;
    exports.comment = null;
    
    },{}],7:[function(_dereq_,module,exports){
    'use strict';
    var utils = _dereq_('./utils');
    
    /**
     * @deprecated
     * This function will be removed in a future version without replacement.
     */
    exports.string2binary = function(str) {
        return utils.string2binary(str);
    };
    
    /**
     * @deprecated
     * This function will be removed in a future version without replacement.
     */
    exports.string2Uint8Array = function(str) {
        return utils.transformTo("uint8array", str);
    };
    
    /**
     * @deprecated
     * This function will be removed in a future version without replacement.
     */
    exports.uint8Array2String = function(array) {
        return utils.transformTo("string", array);
    };
    
    /**
     * @deprecated
     * This function will be removed in a future version without replacement.
     */
    exports.string2Blob = function(str) {
        var buffer = utils.transformTo("arraybuffer", str);
        return utils.arrayBuffer2Blob(buffer);
    };
    
    /**
     * @deprecated
     * This function will be removed in a future version without replacement.
     */
    exports.arrayBuffer2Blob = function(buffer) {
        return utils.arrayBuffer2Blob(buffer);
    };
    
    /**
     * @deprecated
     * This function will be removed in a future version without replacement.
     */
    exports.transformTo = function(outputType, input) {
        return utils.transformTo(outputType, input);
    };
    
    /**
     * @deprecated
     * This function will be removed in a future version without replacement.
     */
    exports.getTypeOf = function(input) {
        return utils.getTypeOf(input);
    };
    
    /**
     * @deprecated
     * This function will be removed in a future version without replacement.
     */
    exports.checkSupport = function(type) {
        return utils.checkSupport(type);
    };
    
    /**
     * @deprecated
     * This value will be removed in a future version without replacement.
     */
    exports.MAX_VALUE_16BITS = utils.MAX_VALUE_16BITS;
    
    /**
     * @deprecated
     * This value will be removed in a future version without replacement.
     */
    exports.MAX_VALUE_32BITS = utils.MAX_VALUE_32BITS;
    
    
    /**
     * @deprecated
     * This function will be removed in a future version without replacement.
     */
    exports.pretty = function(str) {
        return utils.pretty(str);
    };
    
    /**
     * @deprecated
     * This function will be removed in a future version without replacement.
     */
    exports.findCompression = function(compressionMethod) {
        return utils.findCompression(compressionMethod);
    };
    
    /**
     * @deprecated
     * This function will be removed in a future version without replacement.
     */
    exports.isRegExp = function (object) {
        return utils.isRegExp(object);
    };
    
    
    },{"./utils":19}],8:[function(_dereq_,module,exports){
    'use strict';
    var USE_TYPEDARRAY = (typeof Uint8Array !== 'undefined') && (typeof Uint16Array !== 'undefined') && (typeof Uint32Array !== 'undefined');
    
    var pako = _dereq_("pako");
    exports.uncompressInputType = USE_TYPEDARRAY ? "uint8array" : "array";
    exports.compressInputType = USE_TYPEDARRAY ? "uint8array" : "array";
    
    exports.magic = "\x08\x00";
    exports.compress = function(input) {
        return pako.deflateRaw(input);
    };
    exports.uncompress =  function(input) {
        return pako.inflateRaw(input);
    };
    
    // TODO: Can this stay modified or do I need to keep the original?
    exports.ungzip = function (input) {
        return pako.ungzip(input);
    };
    
    
    },{"pako":24}],9:[function(_dereq_,module,exports){
    'use strict';
    
    var base64 = _dereq_('./base64');
    
    /**
    Usage:
       zip = new JSZip();
       zip.file("hello.txt", "Hello, World!").file("tempfile", "nothing");
       zip.folder("images").file("smile.gif", base64Data, {base64: true});
       zip.file("Xmas.txt", "Ho ho ho !", {date : new Date("December 25, 2007 00:00:01")});
       zip.remove("tempfile");
    
       base64zip = zip.generate();
    
    **/
    
    /**
     * Representation a of zip file in js
     * @constructor
     * @param {String=|ArrayBuffer=|Uint8Array=} data the data to load, if any (optional).
     * @param {Object=} options the options for creating this objects (optional).
     */
    function JSZip(data, options) {
        // if this constructor is used without `new`, it adds `new` before itself:
        if(!(this instanceof JSZip)) return new JSZip(data, options);
        
        // object containing the files :
        // {
        //   "folder/" : {...},
        //   "folder/data.txt" : {...}
        // }
        this.files = {};
    
        this.comment = null;
    
        // Where we are in the hierarchy
        this.root = "";
        if (data) {
            this.load(data, options);
        }
        this.clone = function() {
            var newObj = new JSZip();
            for (var i in this) {
                if (typeof this[i] !== "function") {
                    newObj[i] = this[i];
                }
            }
            return newObj;
        };
    }
    JSZip.prototype = _dereq_('./object');
    JSZip.prototype.load = _dereq_('./load');
    JSZip.support = _dereq_('./support');
    JSZip.defaults = _dereq_('./defaults');
    
    /**
     * @deprecated
     * This namespace will be removed in a future version without replacement.
     */
    JSZip.utils = _dereq_('./deprecatedPublicUtils');
    
    JSZip.base64 = {
        /**
         * @deprecated
         * This method will be removed in a future version without replacement.
         */
        encode : function(input) {
            return base64.encode(input);
        },
        /**
         * @deprecated
         * This method will be removed in a future version without replacement.
         */
        decode : function(input) {
            return base64.decode(input);
        }
    };
    JSZip.compressions = _dereq_('./compressions');
    module.exports = JSZip;
    
    },{"./base64":1,"./compressions":3,"./defaults":6,"./deprecatedPublicUtils":7,"./load":10,"./object":11,"./support":15}],10:[function(_dereq_,module,exports){
    'use strict';
    var base64 = _dereq_('./base64');
    var ZipEntries = _dereq_('./zipEntries');
    module.exports = function(data, options) {
        var files, zipEntries, i, input;
        options = options || {};
        if (options.base64) {
            data = base64.decode(data);
        }
    
        zipEntries = new ZipEntries(data, options);
        files = zipEntries.files;
        for (i = 0; i < files.length; i++) {
            input = files[i];
            this.file(input.fileName, input.decompressed, {
                binary: true,
                optimizedBinaryString: true,
                date: input.date,
                dir: input.dir,
                comment : input.fileComment.length ? input.fileComment : null
            });
        }
        if (zipEntries.zipComment.length) {
            this.comment = zipEntries.zipComment;
        }
    
        return this;
    };
    
    },{"./base64":1,"./zipEntries":20}],11:[function(_dereq_,module,exports){
    'use strict';
    var support = _dereq_('./support');
    var utils = _dereq_('./utils');
    var crc32 = _dereq_('./crc32');
    var signature = _dereq_('./signature');
    var defaults = _dereq_('./defaults');
    var base64 = _dereq_('./base64');
    var compressions = _dereq_('./compressions');
    var CompressedObject = _dereq_('./compressedObject');
    var nodeBuffer = _dereq_('./nodeBuffer');
    var utf8 = _dereq_('./utf8');
    var StringWriter = _dereq_('./stringWriter');
    var Uint8ArrayWriter = _dereq_('./uint8ArrayWriter');
    
    var textEncoder;
    if (support.uint8array && typeof TextEncoder === "function") {
        textEncoder = new TextEncoder("utf-8");
    }
    
    /**
     * Returns the raw data of a ZipObject, decompress the content if necessary.
     * @param {ZipObject} file the file to use.
     * @return {String|ArrayBuffer|Uint8Array|Buffer} the data.
     */
    var getRawData = function(file) {
        if (file._data instanceof CompressedObject) {
            file._data = file._data.getContent();
            file.options.binary = true;
            file.options.base64 = false;
    
            if (utils.getTypeOf(file._data) === "uint8array") {
                var copy = file._data;
                // when reading an arraybuffer, the CompressedObject mechanism will keep it and subarray() a Uint8Array.
                // if we request a file in the same format, we might get the same Uint8Array or its ArrayBuffer (the original zip file).
                file._data = new Uint8Array(copy.length);
                // with an empty Uint8Array, Opera fails with a "Offset larger than array size"
                if (copy.length !== 0) {
                    file._data.set(copy, 0);
                }
            }
        }
        return file._data;
    };
    
    /**
     * Returns the data of a ZipObject in a binary form. If the content is an unicode string, encode it.
     * @param {ZipObject} file the file to use.
     * @return {String|ArrayBuffer|Uint8Array|Buffer} the data.
     */
    var getBinaryData = function(file) {
        var result = getRawData(file),
            type = utils.getTypeOf(result);
        if (type === "string") {
            if (!file.options.binary) {
                // unicode text !
                // unicode string => binary string is a painful process, check if we can avoid it.
                if (textEncoder) {
                    return textEncoder.encode(result);
                }
                if (support.nodebuffer) {
                    return nodeBuffer(result, "utf-8");
                }
            }
            return file.asBinary();
        }
        return result;
    };
    
    /**
     * Transform this._data into a string.
     * @param {function} filter a function String -> String, applied if not null on the result.
     * @return {String} the string representing this._data.
     */
    var dataToString = function(asUTF8) {
        var result = getRawData(this);
        if (result === null || typeof result === "undefined") {
            return "";
        }
        // if the data is a base64 string, we decode it before checking the encoding !
        if (this.options.base64) {
            result = base64.decode(result);
        }
        if (asUTF8 && this.options.binary) {
            // JSZip.prototype.utf8decode supports arrays as input
            // skip to array => string step, utf8decode will do it.
            result = out.utf8decode(result);
        }
        else {
            // no utf8 transformation, do the array => string step.
            result = utils.transformTo("string", result);
        }
    
        if (!asUTF8 && !this.options.binary) {
            result = utils.transformTo("string", out.utf8encode(result));
        }
        return result;
    };
    /**
     * A simple object representing a file in the zip file.
     * @constructor
     * @param {string} name the name of the file
     * @param {String|ArrayBuffer|Uint8Array|Buffer} data the data
     * @param {Object} options the options of the file
     */
    var ZipObject = function(name, data, options) {
        this.name = name;
        this.dir = options.dir;
        this.date = options.date;
        this.comment = options.comment;
    
        this._data = data;
        this.options = options;
    
        /*
         * This object contains initial values for dir and date.
         * With them, we can check if the user changed the deprecated metadata in
         * `ZipObject#options` or not.
         */
        this._initialMetadata = {
          dir : options.dir,
          date : options.date
        };
    };
    
    ZipObject.prototype = {
        /**
         * Return the content as UTF8 string.
         * @return {string} the UTF8 string.
         */
        asText: function() {
            return dataToString.call(this, true);
        },
        /**
         * Returns the binary content.
         * @return {string} the content as binary.
         */
        asBinary: function() {
            return dataToString.call(this, false);
        },
        /**
         * Returns the content as a nodejs Buffer.
         * @return {Buffer} the content as a Buffer.
         */
        asNodeBuffer: function() {
            var result = getBinaryData(this);
            return utils.transformTo("nodebuffer", result);
        },
        /**
         * Returns the content as an Uint8Array.
         * @return {Uint8Array} the content as an Uint8Array.
         */
        asUint8Array: function() {
            var result = getBinaryData(this);
            return utils.transformTo("uint8array", result);
        },
        /**
         * Returns the content as an ArrayBuffer.
         * @return {ArrayBuffer} the content as an ArrayBufer.
         */
        asArrayBuffer: function() {
            return this.asUint8Array().buffer;
        }
    };
    
    /**
     * Transform an integer into a string in hexadecimal.
     * @private
     * @param {number} dec the number to convert.
     * @param {number} bytes the number of bytes to generate.
     * @returns {string} the result.
     */
    var decToHex = function(dec, bytes) {
        var hex = "",
            i;
        for (i = 0; i < bytes; i++) {
            hex += String.fromCharCode(dec & 0xff);
            dec = dec >>> 8;
        }
        return hex;
    };
    
    /**
     * Merge the objects passed as parameters into a new one.
     * @private
     * @param {...Object} var_args All objects to merge.
     * @return {Object} a new object with the data of the others.
     */
    var extend = function() {
        var result = {}, i, attr;
        for (i = 0; i < arguments.length; i++) { // arguments is not enumerable in some browsers
            for (attr in arguments[i]) {
                if (arguments[i].hasOwnProperty(attr) && typeof result[attr] === "undefined") {
                    result[attr] = arguments[i][attr];
                }
            }
        }
        return result;
    };
    
    /**
     * Transforms the (incomplete) options from the user into the complete
     * set of options to create a file.
     * @private
     * @param {Object} o the options from the user.
     * @return {Object} the complete set of options.
     */
    var prepareFileAttrs = function(o) {
        o = o || {};
        if (o.base64 === true && (o.binary === null || o.binary === undefined)) {
            o.binary = true;
        }
        o = extend(o, defaults);
        o.date = o.date || new Date();
        if (o.compression !== null) o.compression = o.compression.toUpperCase();
    
        return o;
    };
    
    /**
     * Add a file in the current folder.
     * @private
     * @param {string} name the name of the file
     * @param {String|ArrayBuffer|Uint8Array|Buffer} data the data of the file
     * @param {Object} o the options of the file
     * @return {Object} the new file.
     */
    var fileAdd = function(name, data, o) {
        // be sure sub folders exist
        var dataType = utils.getTypeOf(data);
    
        o = prepareFileAttrs(o);
    
        if (o.dir || data === null || typeof data === "undefined") {
            o.base64 = false;
            o.binary = false;
            data = null;
        }
        else if (dataType === "string") {
            if (o.binary && !o.base64) {
                // optimizedBinaryString == true means that the file has already been filtered with a 0xFF mask
                if (o.optimizedBinaryString !== true) {
                    // this is a string, not in a base64 format.
                    // Be sure that this is a correct "binary string"
                    data = utils.string2binary(data);
                }
            }
        }
        else { // arraybuffer, uint8array, ...
            o.base64 = false;
            o.binary = true;
    
            if (!dataType && !(data instanceof CompressedObject)) {
                throw new Error("The data of '" + name + "' is in an unsupported format !");
            }
    
            // special case : it's way easier to work with Uint8Array than with ArrayBuffer
            if (dataType === "arraybuffer") {
                data = utils.transformTo("uint8array", data);
            }
        }
    
        var object = new ZipObject(name, data, o);
        this.files[name] = object;
        return object;
    };
    
    /**
     * Add a (sub) folder in the current folder.
     * @private
     * @param {string} name the folder's name
     * @return {Object} the new folder.
     */
    var folderAdd = function(name) {
        // Check the name ends with a /
        if (name.slice(-1) != "/") {
            name += "/"; // IE doesn't like substr(-1)
        }
    
        // Does this folder already exist?
        if (!this.files[name]) {
            fileAdd.call(this, name, null, {
                dir: true
            });
        }
        return this.files[name];
    };
    
    /**
     * Generate a JSZip.CompressedObject for a given zipOject.
     * @param {ZipObject} file the object to read.
     * @param {JSZip.compression} compression the compression to use.
     * @return {JSZip.CompressedObject} the compressed result.
     */
    var generateCompressedObjectFrom = function(file, compression) {
        var result = new CompressedObject(),
            content;
    
        // the data has not been decompressed, we might reuse things !
        if (file._data instanceof CompressedObject) {
            result.uncompressedSize = file._data.uncompressedSize;
            result.crc32 = file._data.crc32;
    
            if (result.uncompressedSize === 0 || file.dir) {
                compression = compressions['STORE'];
                result.compressedContent = "";
                result.crc32 = 0;
            }
            else if (file._data.compressionMethod === compression.magic) {
                result.compressedContent = file._data.getCompressedContent();
            }
            else {
                content = file._data.getContent();
                // need to decompress / recompress
                result.compressedContent = compression.compress(utils.transformTo(compression.compressInputType, content));
            }
        }
        else {
            // have uncompressed data
            content = getBinaryData(file);
            if (!content || content.length === 0 || file.dir) {
                compression = compressions['STORE'];
                content = "";
            }
            result.uncompressedSize = content.length;
            result.crc32 = crc32(content);
            result.compressedContent = compression.compress(utils.transformTo(compression.compressInputType, content));
        }
    
        result.compressedSize = result.compressedContent.length;
        result.compressionMethod = compression.magic;
    
        return result;
    };
    
    /**
     * Generate the various parts used in the construction of the final zip file.
     * @param {string} name the file name.
     * @param {ZipObject} file the file content.
     * @param {JSZip.CompressedObject} compressedObject the compressed object.
     * @param {number} offset the current offset from the start of the zip file.
     * @return {object} the zip parts.
     */
    var generateZipParts = function(name, file, compressedObject, offset) {
        var data = compressedObject.compressedContent,
            utfEncodedFileName = utils.transformTo("string", utf8.utf8encode(file.name)),
            comment = file.comment || "",
            utfEncodedComment = utils.transformTo("string", utf8.utf8encode(comment)),
            useUTF8ForFileName = utfEncodedFileName.length !== file.name.length,
            useUTF8ForComment = utfEncodedComment.length !== comment.length,
            o = file.options,
            dosTime,
            dosDate,
            extraFields = "",
            unicodePathExtraField = "",
            unicodeCommentExtraField = "",
            dir, date;
    
    
        // handle the deprecated options.dir
        if (file._initialMetadata.dir !== file.dir) {
            dir = file.dir;
        } else {
            dir = o.dir;
        }
    
        // handle the deprecated options.date
        if(file._initialMetadata.date !== file.date) {
            date = file.date;
        } else {
            date = o.date;
        }
    
        // date
        // @see http://www.delorie.com/djgpp/doc/rbinter/it/52/13.html
        // @see http://www.delorie.com/djgpp/doc/rbinter/it/65/16.html
        // @see http://www.delorie.com/djgpp/doc/rbinter/it/66/16.html
    
        dosTime = date.getHours();
        dosTime = dosTime << 6;
        dosTime = dosTime | date.getMinutes();
        dosTime = dosTime << 5;
        dosTime = dosTime | date.getSeconds() / 2;
    
        dosDate = date.getFullYear() - 1980;
        dosDate = dosDate << 4;
        dosDate = dosDate | (date.getMonth() + 1);
        dosDate = dosDate << 5;
        dosDate = dosDate | date.getDate();
    
        if (useUTF8ForFileName) {
            // set the unicode path extra field. unzip needs at least one extra
            // field to correctly handle unicode path, so using the path is as good
            // as any other information. This could improve the situation with
            // other archive managers too.
            // This field is usually used without the utf8 flag, with a non
            // unicode path in the header (winrar, winzip). This helps (a bit)
            // with the messy Windows' default compressed folders feature but
            // breaks on p7zip which doesn't seek the unicode path extra field.
            // So for now, UTF-8 everywhere !
            unicodePathExtraField =
                // Version
                decToHex(1, 1) +
                // NameCRC32
                decToHex(crc32(utfEncodedFileName), 4) +
                // UnicodeName
                utfEncodedFileName;
    
            extraFields +=
                // Info-ZIP Unicode Path Extra Field
                "\x75\x70" +
                // size
                decToHex(unicodePathExtraField.length, 2) +
                // content
                unicodePathExtraField;
        }
    
        if(useUTF8ForComment) {
    
            unicodeCommentExtraField =
                // Version
                decToHex(1, 1) +
                // CommentCRC32
                decToHex(this.crc32(utfEncodedComment), 4) +
                // UnicodeName
                utfEncodedComment;
    
            extraFields +=
                // Info-ZIP Unicode Path Extra Field
                "\x75\x63" +
                // size
                decToHex(unicodeCommentExtraField.length, 2) +
                // content
                unicodeCommentExtraField;
        }
    
        var header = "";
    
        // version needed to extract
        header += "\x0A\x00";
        // general purpose bit flag
        // set bit 11 if utf8
        header += (useUTF8ForFileName || useUTF8ForComment) ? "\x00\x08" : "\x00\x00";
        // compression method
        header += compressedObject.compressionMethod;
        // last mod file time
        header += decToHex(dosTime, 2);
        // last mod file date
        header += decToHex(dosDate, 2);
        // crc-32
        header += decToHex(compressedObject.crc32, 4);
        // compressed size
        header += decToHex(compressedObject.compressedSize, 4);
        // uncompressed size
        header += decToHex(compressedObject.uncompressedSize, 4);
        // file name length
        header += decToHex(utfEncodedFileName.length, 2);
        // extra field length
        header += decToHex(extraFields.length, 2);
    
    
        var fileRecord = signature.LOCAL_FILE_HEADER + header + utfEncodedFileName + extraFields;
    
        var dirRecord = signature.CENTRAL_FILE_HEADER +
        // version made by (00: DOS)
        "\x14\x00" +
        // file header (common to file and central directory)
        header +
        // file comment length
        decToHex(utfEncodedComment.length, 2) +
        // disk number start
        "\x00\x00" +
        // internal file attributes TODO
        "\x00\x00" +
        // external file attributes
        (dir === true ? "\x10\x00\x00\x00" : "\x00\x00\x00\x00") +
        // relative offset of local header
        decToHex(offset, 4) +
        // file name
        utfEncodedFileName +
        // extra field
        extraFields +
        // file comment
        utfEncodedComment;
    
        return {
            fileRecord: fileRecord,
            dirRecord: dirRecord,
            compressedObject: compressedObject
        };
    };
    
    
    // return the actual prototype of JSZip
    var out = {
        /**
         * Read an existing zip and merge the data in the current JSZip object.
         * The implementation is in jszip-load.js, don't forget to include it.
         * @param {String|ArrayBuffer|Uint8Array|Buffer} stream  The stream to load
         * @param {Object} options Options for loading the stream.
         *  options.base64 : is the stream in base64 ? default : false
         * @return {JSZip} the current JSZip object
         */
        load: function(stream, options) {
            throw new Error("Load method is not defined. Is the file jszip-load.js included ?");
        },
    
        /**
         * Filter nested files/folders with the specified function.
         * @param {Function} search the predicate to use :
         * function (relativePath, file) {...}
         * It takes 2 arguments : the relative path and the file.
         * @return {Array} An array of matching elements.
         */
        filter: function(search) {
            var result = [],
                filename, relativePath, file, fileClone;
            for (filename in this.files) {
                if (!this.files.hasOwnProperty(filename)) {
                    continue;
                }
                file = this.files[filename];
                // return a new object, don't let the user mess with our internal objects :)
                fileClone = new ZipObject(file.name, file._data, extend(file.options));
                relativePath = filename.slice(this.root.length, filename.length);
                if (filename.slice(0, this.root.length) === this.root && // the file is in the current root
                search(relativePath, fileClone)) { // and the file matches the function
                    result.push(fileClone);
                }
            }
            return result;
        },
    
        /**
         * Add a file to the zip file, or search a file.
         * @param   {string|RegExp} name The name of the file to add (if data is defined),
         * the name of the file to find (if no data) or a regex to match files.
         * @param   {String|ArrayBuffer|Uint8Array|Buffer} data  The file data, either raw or base64 encoded
         * @param   {Object} o     File options
         * @return  {JSZip|Object|Array} this JSZip object (when adding a file),
         * a file (when searching by string) or an array of files (when searching by regex).
         */
        file: function(name, data, o) {
            if (arguments.length === 1) {
                if (utils.isRegExp(name)) {
                    var regexp = name;
                    return this.filter(function(relativePath, file) {
                        return !file.dir && regexp.test(relativePath);
                    });
                }
                else { // text
                    return this.filter(function(relativePath, file) {
                        return !file.dir && relativePath === name;
                    })[0] || null;
                }
            }
            else { // more than one argument : we have data !
                name = this.root + name;
                fileAdd.call(this, name, data, o);
            }
            return this;
        },
    
        /**
         * Add a directory to the zip file, or search.
         * @param   {String|RegExp} arg The name of the directory to add, or a regex to search folders.
         * @return  {JSZip} an object with the new directory as the root, or an array containing matching folders.
         */
        folder: function(arg) {
            if (!arg) {
                return this;
            }
    
            if (utils.isRegExp(arg)) {
                return this.filter(function(relativePath, file) {
                    return file.dir && arg.test(relativePath);
                });
            }
    
            // else, name is a new folder
            var name = this.root + arg;
            var newFolder = folderAdd.call(this, name);
    
            // Allow chaining by returning a new object with this folder as the root
            var ret = this.clone();
            ret.root = newFolder.name;
            return ret;
        },
    
        /**
         * Delete a file, or a directory and all sub-files, from the zip
         * @param {string} name the name of the file to delete
         * @return {JSZip} this JSZip object
         */
        remove: function(name) {
            name = this.root + name;
            var file = this.files[name];
            if (!file) {
                // Look for any folders
                if (name.slice(-1) != "/") {
                    name += "/";
                }
                file = this.files[name];
            }
    
            if (file && !file.dir) {
                // file
                delete this.files[name];
            } else {
                // maybe a folder, delete recursively
                var kids = this.filter(function(relativePath, file) {
                    return file.name.slice(0, name.length) === name;
                });
                for (var i = 0; i < kids.length; i++) {
                    delete this.files[kids[i].name];
                }
            }
    
            return this;
        },
    
        /**
         * Generate the complete zip file
         * @param {Object} options the options to generate the zip file :
         * - base64, (deprecated, use type instead) true to generate base64.
         * - compression, "STORE" by default.
         * - type, "base64" by default. Values are : string, base64, uint8array, arraybuffer, blob.
         * @return {String|Uint8Array|ArrayBuffer|Buffer|Blob} the zip file
         */
        generate: function(options) {
            options = extend(options || {}, {
                base64: true,
                compression: "STORE",
                type: "base64",
                comment: null
            });
    
            utils.checkSupport(options.type);
    
            var zipData = [],
                localDirLength = 0,
                centralDirLength = 0,
                writer, i,
                utfEncodedComment = utils.transformTo("string", this.utf8encode(options.comment || this.comment || ""));
    
            // first, generate all the zip parts.
            for (var name in this.files) {
                if (!this.files.hasOwnProperty(name)) {
                    continue;
                }
                var file = this.files[name];
    
                var compressionName = file.options.compression || options.compression.toUpperCase();
                var compression = compressions[compressionName];
                if (!compression) {
                    throw new Error(compressionName + " is not a valid compression method !");
                }
    
                var compressedObject = generateCompressedObjectFrom.call(this, file, compression);
    
                var zipPart = generateZipParts.call(this, name, file, compressedObject, localDirLength);
                localDirLength += zipPart.fileRecord.length + compressedObject.compressedSize;
                centralDirLength += zipPart.dirRecord.length;
                zipData.push(zipPart);
            }
    
            var dirEnd = "";
    
            // end of central dir signature
            dirEnd = signature.CENTRAL_DIRECTORY_END +
            // number of this disk
            "\x00\x00" +
            // number of the disk with the start of the central directory
            "\x00\x00" +
            // total number of entries in the central directory on this disk
            decToHex(zipData.length, 2) +
            // total number of entries in the central directory
            decToHex(zipData.length, 2) +
            // size of the central directory   4 bytes
            decToHex(centralDirLength, 4) +
            // offset of start of central directory with respect to the starting disk number
            decToHex(localDirLength, 4) +
            // .ZIP file comment length
            decToHex(utfEncodedComment.length, 2) +
            // .ZIP file comment
            utfEncodedComment;
    
    
            // we have all the parts (and the total length)
            // time to create a writer !
            var typeName = options.type.toLowerCase();
            if(typeName==="uint8array"||typeName==="arraybuffer"||typeName==="blob"||typeName==="nodebuffer") {
                writer = new Uint8ArrayWriter(localDirLength + centralDirLength + dirEnd.length);
            }else{
                writer = new StringWriter(localDirLength + centralDirLength + dirEnd.length);
            }
    
            for (i = 0; i < zipData.length; i++) {
                writer.append(zipData[i].fileRecord);
                writer.append(zipData[i].compressedObject.compressedContent);
            }
            for (i = 0; i < zipData.length; i++) {
                writer.append(zipData[i].dirRecord);
            }
    
            writer.append(dirEnd);
    
            var zip = writer.finalize();
    
    
    
            switch(options.type.toLowerCase()) {
                // case "zip is an Uint8Array"
                case "uint8array" :
                case "arraybuffer" :
                case "nodebuffer" :
                   return utils.transformTo(options.type.toLowerCase(), zip);
                case "blob" :
                   return utils.arrayBuffer2Blob(utils.transformTo("arraybuffer", zip));
                // case "zip is a string"
                case "base64" :
                   return (options.base64) ? base64.encode(zip) : zip;
                default : // case "string" :
                   return zip;
             }
          
        },
    
        /**
         * @deprecated
         * This method will be removed in a future version without replacement.
         */
        crc32: function (input, crc) {
            return crc32(input, crc);
        },
    
        /**
         * @deprecated
         * This method will be removed in a future version without replacement.
         */
        utf8encode: function (string) {
            return utils.transformTo("string", utf8.utf8encode(string));
        },
    
        /**
         * @deprecated
         * This method will be removed in a future version without replacement.
         */
        utf8decode: function (input) {
            return utf8.utf8decode(input);
        }
    };
    module.exports = out;
    
    },{"./base64":1,"./compressedObject":2,"./compressions":3,"./crc32":4,"./defaults":6,"./nodeBuffer":22,"./signature":12,"./stringWriter":14,"./support":15,"./uint8ArrayWriter":17,"./utf8":18,"./utils":19}],12:[function(_dereq_,module,exports){
    'use strict';
    exports.LOCAL_FILE_HEADER = "PK\x03\x04";
    exports.CENTRAL_FILE_HEADER = "PK\x01\x02";
    exports.CENTRAL_DIRECTORY_END = "PK\x05\x06";
    exports.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x06\x07";
    exports.ZIP64_CENTRAL_DIRECTORY_END = "PK\x06\x06";
    exports.DATA_DESCRIPTOR = "PK\x07\x08";
    
    },{}],13:[function(_dereq_,module,exports){
    'use strict';
    var DataReader = _dereq_('./dataReader');
    var utils = _dereq_('./utils');
    
    function StringReader(data, optimizedBinaryString) {
        this.data = data;
        if (!optimizedBinaryString) {
            this.data = utils.string2binary(this.data);
        }
        this.length = this.data.length;
        this.index = 0;
    }
    StringReader.prototype = new DataReader();
    /**
     * @see DataReader.byteAt
     */
    StringReader.prototype.byteAt = function(i) {
        return this.data.charCodeAt(i);
    };
    /**
     * @see DataReader.lastIndexOfSignature
     */
    StringReader.prototype.lastIndexOfSignature = function(sig) {
        return this.data.lastIndexOf(sig);
    };
    /**
     * @see DataReader.readData
     */
    StringReader.prototype.readData = function(size) {
        this.checkOffset(size);
        // this will work because the constructor applied the "& 0xff" mask.
        var result = this.data.slice(this.index, this.index + size);
        this.index += size;
        return result;
    };
    module.exports = StringReader;
    
    },{"./dataReader":5,"./utils":19}],14:[function(_dereq_,module,exports){
    'use strict';
    
    var utils = _dereq_('./utils');
    
    /**
     * An object to write any content to a string.
     * @constructor
     */
    var StringWriter = function() {
        this.data = [];
    };
    StringWriter.prototype = {
        /**
         * Append any content to the current string.
         * @param {Object} input the content to add.
         */
        append: function(input) {
            input = utils.transformTo("string", input);
            this.data.push(input);
        },
        /**
         * Finalize the construction an return the result.
         * @return {string} the generated string.
         */
        finalize: function() {
            return this.data.join("");
        }
    };
    
    module.exports = StringWriter;
    
    },{"./utils":19}],15:[function(_dereq_,module,exports){
    (function (process){
    'use strict';
    exports.base64 = true;
    exports.array = true;
    exports.string = true;
    exports.arraybuffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined";
    // contains true if JSZip can read/generate nodejs Buffer, false otherwise, aka checks if we arn't in a browser.
    exports.nodebuffer = !process.browser;
    // contains true if JSZip can read/generate Uint8Array, false otherwise.
    exports.uint8array = typeof Uint8Array !== "undefined";
    
    if (typeof ArrayBuffer === "undefined") {
        exports.blob = false;
    }
    else {
        var buffer = new ArrayBuffer(0);
        try {
            exports.blob = new Blob([buffer], {
                type: "application/zip"
            }).size === 0;
        }
        catch (e) {
            try {
                var Builder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
                var builder = new Builder();
                builder.append(buffer);
                exports.blob = builder.getBlob('application/zip').size === 0;
            }
            catch (e) {
                exports.blob = false;
            }
        }
    }
    
    }).call(this,_dereq_("FWaASH"))
    },{"FWaASH":23}],16:[function(_dereq_,module,exports){
    'use strict';
    var DataReader = _dereq_('./dataReader');
    
    function Uint8ArrayReader(data) {
        if (data) {
            this.data = data;
            this.length = this.data.length;
            this.index = 0;
        }
    }
    Uint8ArrayReader.prototype = new DataReader();
    /**
     * @see DataReader.byteAt
     */
    Uint8ArrayReader.prototype.byteAt = function(i) {
        return this.data[i];
    };
    /**
     * @see DataReader.lastIndexOfSignature
     */
    Uint8ArrayReader.prototype.lastIndexOfSignature = function(sig) {
        var sig0 = sig.charCodeAt(0),
            sig1 = sig.charCodeAt(1),
            sig2 = sig.charCodeAt(2),
            sig3 = sig.charCodeAt(3);
        for (var i = this.length - 4; i >= 0; --i) {
            if (this.data[i] === sig0 && this.data[i + 1] === sig1 && this.data[i + 2] === sig2 && this.data[i + 3] === sig3) {
                return i;
            }
        }
    
        return -1;
    };
    /**
     * @see DataReader.readData
     */
    Uint8ArrayReader.prototype.readData = function(size) {
        this.checkOffset(size);
        if(size === 0) {
            // in IE10, when using subarray(idx, idx), we get the array [0x00] instead of [].
            return new Uint8Array(0);
        }
        var result = this.data.subarray(this.index, this.index + size);
        this.index += size;
        return result;
    };
    module.exports = Uint8ArrayReader;
    
    },{"./dataReader":5}],17:[function(_dereq_,module,exports){
    'use strict';
    
    var utils = _dereq_('./utils');
    
    /**
     * An object to write any content to an Uint8Array.
     * @constructor
     * @param {number} length The length of the array.
     */
    var Uint8ArrayWriter = function(length) {
        this.data = new Uint8Array(length);
        this.index = 0;
    };
    Uint8ArrayWriter.prototype = {
        /**
         * Append any content to the current array.
         * @param {Object} input the content to add.
         */
        append: function(input) {
            if (input.length !== 0) {
                // with an empty Uint8Array, Opera fails with a "Offset larger than array size"
                input = utils.transformTo("uint8array", input);
                this.data.set(input, this.index);
                this.index += input.length;
            }
        },
        /**
         * Finalize the construction an return the result.
         * @return {Uint8Array} the generated array.
         */
        finalize: function() {
            return this.data;
        }
    };
    
    module.exports = Uint8ArrayWriter;
    
    },{"./utils":19}],18:[function(_dereq_,module,exports){
    'use strict';
    
    var utils = _dereq_('./utils');
    var support = _dereq_('./support');
    var nodeBuffer = _dereq_('./nodeBuffer');
    
    var textEncoder, textDecoder;
    if (
        support.uint8array &&
        typeof TextEncoder === "function" &&
        typeof TextDecoder === "function"
    ) {
        textEncoder = new TextEncoder("utf-8");
        textDecoder = new TextDecoder("utf-8");
    }
    
    /**
     * The following functions come from pako, from pako/lib/utils/strings
     * released under the MIT license, see pako https://github.com/nodeca/pako/
     */
    
    // Table with utf8 lengths (calculated by first byte of sequence)
    // Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
    // because max possible codepoint is 0x10ffff
    var _utf8len = new Array(256);
    for (var i=0; i<256; i++) {
      _utf8len[i] = (i >= 252 ? 6 : i >= 248 ? 5 : i >= 240 ? 4 : i >= 224 ? 3 : i >= 192 ? 2 : 1);
    }
    _utf8len[254]=_utf8len[254]=1; // Invalid sequence start
    
    // convert string to array (typed, when possible)
    var string2buf = function (str) {
        var buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;
    
        // count binary size
        for (m_pos = 0; m_pos < str_len; m_pos++) {
            c = str.charCodeAt(m_pos);
            if ((c & 0xfc00) === 0xd800 && (m_pos+1 < str_len)) {
                c2 = str.charCodeAt(m_pos+1);
                if ((c2 & 0xfc00) === 0xdc00) {
                    c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
                    m_pos++;
                }
            }
            buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
        }
    
        // allocate buffer
        if (support.uint8array) {
            buf = new Uint8Array(buf_len);
        } else {
            buf = new Array(buf_len);
        }
    
        // convert
        for (i=0, m_pos = 0; i < buf_len; m_pos++) {
            c = str.charCodeAt(m_pos);
            if ((c & 0xfc00) === 0xd800 && (m_pos+1 < str_len)) {
                c2 = str.charCodeAt(m_pos+1);
                if ((c2 & 0xfc00) === 0xdc00) {
                    c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
                    m_pos++;
                }
            }
            if (c < 0x80) {
                /* one byte */
                buf[i++] = c;
            } else if (c < 0x800) {
                /* two bytes */
                buf[i++] = 0xC0 | (c >>> 6);
                buf[i++] = 0x80 | (c & 0x3f);
            } else if (c < 0x10000) {
                /* three bytes */
                buf[i++] = 0xE0 | (c >>> 12);
                buf[i++] = 0x80 | (c >>> 6 & 0x3f);
                buf[i++] = 0x80 | (c & 0x3f);
            } else {
                /* four bytes */
                buf[i++] = 0xf0 | (c >>> 18);
                buf[i++] = 0x80 | (c >>> 12 & 0x3f);
                buf[i++] = 0x80 | (c >>> 6 & 0x3f);
                buf[i++] = 0x80 | (c & 0x3f);
            }
        }
    
        return buf;
    };
    
    // Calculate max possible position in utf8 buffer,
    // that will not break sequence. If that's not possible
    // - (very small limits) return max size as is.
    //
    // buf[] - utf8 bytes array
    // max   - length limit (mandatory);
    var utf8border = function(buf, max) {
        var pos;
    
        max = max || buf.length;
        if (max > buf.length) { max = buf.length; }
    
        // go back from last position, until start of sequence found
        pos = max-1;
        while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) { pos--; }
    
        // Fuckup - very small and broken sequence,
        // return max, because we should return something anyway.
        if (pos < 0) { return max; }
    
        // If we came to start of buffer - that means vuffer is too small,
        // return max too.
        if (pos === 0) { return max; }
    
        return (pos + _utf8len[buf[pos]] > max) ? pos : max;
    };
    
    // convert array to string
    var buf2string = function (buf) {
        var str, i, out, c, c_len;
        var len = buf.length;
    
        // Reserve max possible length (2 words per char)
        // NB: by unknown reasons, Array is significantly faster for
        //     String.fromCharCode.apply than Uint16Array.
        var utf16buf = new Array(len*2);
    
        for (out=0, i=0; i<len;) {
            c = buf[i++];
            // quick process ascii
            if (c < 0x80) { utf16buf[out++] = c; continue; }
    
            c_len = _utf8len[c];
            // skip 5 & 6 byte codes
            if (c_len > 4) { utf16buf[out++] = 0xfffd; i += c_len-1; continue; }
    
            // apply mask on first byte
            c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
            // join the rest
            while (c_len > 1 && i < len) {
                c = (c << 6) | (buf[i++] & 0x3f);
                c_len--;
            }
    
            // terminated by end of string?
            if (c_len > 1) { utf16buf[out++] = 0xfffd; continue; }
    
            if (c < 0x10000) {
                utf16buf[out++] = c;
            } else {
                c -= 0x10000;
                utf16buf[out++] = 0xd800 | ((c >> 10) & 0x3ff);
                utf16buf[out++] = 0xdc00 | (c & 0x3ff);
            }
        }
    
        // shrinkBuf(utf16buf, out)
        if (utf16buf.length !== out) {
            if(utf16buf.subarray) {
                utf16buf = utf16buf.subarray(0, out);
            } else {
                utf16buf.length = out;
            }
        }
    
        // return String.fromCharCode.apply(null, utf16buf);
        return utils.applyFromCharCode(utf16buf);
    };
    
    
    // That's all for the pako functions.
    
    
    /**
     * Transform a javascript string into an array (typed if possible) of bytes,
     * UTF-8 encoded.
     * @param {String} str the string to encode
     * @return {Array|Uint8Array|Buffer} the UTF-8 encoded string.
     */
    exports.utf8encode = function utf8encode(str) {
        // TextEncoder + Uint8Array to binary string is faster than checking every bytes on long strings.
        // http://jsperf.com/utf8encode-vs-textencoder
        // On short strings (file names for example), the TextEncoder API is (currently) slower.
        if (textEncoder) {
            return textEncoder.encode(str);
        }
        if (support.nodebuffer) {
            return nodeBuffer(str, "utf-8");
        }
    
        return string2buf(str);
    };
    
    
    /**
     * Transform a bytes array (or a representation) representing an UTF-8 encoded
     * string into a javascript string.
     * @param {Array|Uint8Array|Buffer} buf the data de decode
     * @return {String} the decoded string.
     */
    exports.utf8decode = function utf8decode(buf) {
        // check if we can use the TextDecoder API
        // see http://encoding.spec.whatwg.org/#api
        if (textDecoder) {
            return textDecoder.decode(
                utils.transformTo("uint8array", buf)
            );
        }
        if (support.nodebuffer) {
            return utils.transformTo("nodebuffer", buf).toString("utf-8");
        }
    
        buf = utils.transformTo(support.uint8array ? "uint8array" : "array", buf);
    
        // return buf2string(buf);
        // Chrome prefers to work with "small" chunks of data
        // for the method buf2string.
        // Firefox and Chrome has their own shortcut, IE doesn't seem to really care.
        var result = [], k = 0, len = buf.length, chunk = 65536;
        while (k < len) {
            var nextBoundary = utf8border(buf, Math.min(k + chunk, len));
            if (support.uint8array) {
                result.push(buf2string(buf.subarray(k, nextBoundary)));
            } else {
                result.push(buf2string(buf.slice(k, nextBoundary)));
            }
            k = nextBoundary;
        }
        return result.join("");
    
    };
    // vim: set shiftwidth=4 softtabstop=4:
    
    },{"./nodeBuffer":22,"./support":15,"./utils":19}],19:[function(_dereq_,module,exports){
    'use strict';
    var support = _dereq_('./support');
    var compressions = _dereq_('./compressions');
    var nodeBuffer = _dereq_('./nodeBuffer');
    /**
     * Convert a string to a "binary string" : a string containing only char codes between 0 and 255.
     * @param {string} str the string to transform.
     * @return {String} the binary string.
     */
    exports.string2binary = function(str) {
        var result = "";
        for (var i = 0; i < str.length; i++) {
            result += String.fromCharCode(str.charCodeAt(i) & 0xff);
        }
        return result;
    };
    exports.arrayBuffer2Blob = function(buffer) {
        exports.checkSupport("blob");
    
        try {
            // Blob constructor
            return new Blob([buffer], {
                type: "application/zip"
            });
        }
        catch (e) {
    
            try {
                // deprecated, browser only, old way
                var Builder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
                var builder = new Builder();
                builder.append(buffer);
                return builder.getBlob('application/zip');
            }
            catch (e) {
    
                // well, fuck ?!
                throw new Error("Bug : can't construct the Blob.");
            }
        }
    
    
    };
    /**
     * The identity function.
     * @param {Object} input the input.
     * @return {Object} the same input.
     */
    function identity(input) {
        return input;
    }
    
    /**
     * Fill in an array with a string.
     * @param {String} str the string to use.
     * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to fill in (will be mutated).
     * @return {Array|ArrayBuffer|Uint8Array|Buffer} the updated array.
     */
    function stringToArrayLike(str, array) {
        for (var i = 0; i < str.length; ++i) {
            array[i] = str.charCodeAt(i) & 0xFF;
        }
        return array;
    }
    
    /**
     * Transform an array-like object to a string.
     * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to transform.
     * @return {String} the result.
     */
    function arrayLikeToString(array) {
        // Performances notes :
        // --------------------
        // String.fromCharCode.apply(null, array) is the fastest, see
        // see http://jsperf.com/converting-a-uint8array-to-a-string/2
        // but the stack is limited (and we can get huge arrays !).
        //
        // result += String.fromCharCode(array[i]); generate too many strings !
        //
        // This code is inspired by http://jsperf.com/arraybuffer-to-string-apply-performance/2
        var chunk = 65536;
        var result = [],
            len = array.length,
            type = exports.getTypeOf(array),
            k = 0,
            canUseApply = true;
          try {
             switch(type) {
                case "uint8array":
                   String.fromCharCode.apply(null, new Uint8Array(0));
                   break;
                case "nodebuffer":
                   String.fromCharCode.apply(null, nodeBuffer(0));
                   break;
             }
          } catch(e) {
             canUseApply = false;
          }
    
          // no apply : slow and painful algorithm
          // default browser on android 4.*
          if (!canUseApply) {
             var resultStr = "";
             for(var i = 0; i < array.length;i++) {
                resultStr += String.fromCharCode(array[i]);
             }
        return resultStr;
        }
        while (k < len && chunk > 1) {
            try {
                if (type === "array" || type === "nodebuffer") {
                    result.push(String.fromCharCode.apply(null, array.slice(k, Math.min(k + chunk, len))));
                }
                else {
                    result.push(String.fromCharCode.apply(null, array.subarray(k, Math.min(k + chunk, len))));
                }
                k += chunk;
            }
            catch (e) {
                chunk = Math.floor(chunk / 2);
            }
        }
        return result.join("");
    }
    
    exports.applyFromCharCode = arrayLikeToString;
    
    
    /**
     * Copy the data from an array-like to an other array-like.
     * @param {Array|ArrayBuffer|Uint8Array|Buffer} arrayFrom the origin array.
     * @param {Array|ArrayBuffer|Uint8Array|Buffer} arrayTo the destination array which will be mutated.
     * @return {Array|ArrayBuffer|Uint8Array|Buffer} the updated destination array.
     */
    function arrayLikeToArrayLike(arrayFrom, arrayTo) {
        for (var i = 0; i < arrayFrom.length; i++) {
            arrayTo[i] = arrayFrom[i];
        }
        return arrayTo;
    }
    
    // a matrix containing functions to transform everything into everything.
    var transform = {};
    
    // string to ?
    transform["string"] = {
        "string": identity,
        "array": function(input) {
            return stringToArrayLike(input, new Array(input.length));
        },
        "arraybuffer": function(input) {
            return transform["string"]["uint8array"](input).buffer;
        },
        "uint8array": function(input) {
            return stringToArrayLike(input, new Uint8Array(input.length));
        },
        "nodebuffer": function(input) {
            return stringToArrayLike(input, nodeBuffer(input.length));
        }
    };
    
    // array to ?
    transform["array"] = {
        "string": arrayLikeToString,
        "array": identity,
        "arraybuffer": function(input) {
            return (new Uint8Array(input)).buffer;
        },
        "uint8array": function(input) {
            return new Uint8Array(input);
        },
        "nodebuffer": function(input) {
            return nodeBuffer(input);
        }
    };
    
    // arraybuffer to ?
    transform["arraybuffer"] = {
        "string": function(input) {
            return arrayLikeToString(new Uint8Array(input));
        },
        "array": function(input) {
            return arrayLikeToArrayLike(new Uint8Array(input), new Array(input.byteLength));
        },
        "arraybuffer": identity,
        "uint8array": function(input) {
            return new Uint8Array(input);
        },
        "nodebuffer": function(input) {
            return nodeBuffer(new Uint8Array(input));
        }
    };
    
    // uint8array to ?
    transform["uint8array"] = {
        "string": arrayLikeToString,
        "array": function(input) {
            return arrayLikeToArrayLike(input, new Array(input.length));
        },
        "arraybuffer": function(input) {
            return input.buffer;
        },
        "uint8array": identity,
        "nodebuffer": function(input) {
            return nodeBuffer(input);
        }
    };
    
    // nodebuffer to ?
    transform["nodebuffer"] = {
        "string": arrayLikeToString,
        "array": function(input) {
            return arrayLikeToArrayLike(input, new Array(input.length));
        },
        "arraybuffer": function(input) {
            return transform["nodebuffer"]["uint8array"](input).buffer;
        },
        "uint8array": function(input) {
            return arrayLikeToArrayLike(input, new Uint8Array(input.length));
        },
        "nodebuffer": identity
    };
    
    /**
     * Transform an input into any type.
     * The supported output type are : string, array, uint8array, arraybuffer, nodebuffer.
     * If no output type is specified, the unmodified input will be returned.
     * @param {String} outputType the output type.
     * @param {String|Array|ArrayBuffer|Uint8Array|Buffer} input the input to convert.
     * @throws {Error} an Error if the browser doesn't support the requested output type.
     */
    exports.transformTo = function(outputType, input) {
        if (!input) {
            // undefined, null, etc
            // an empty string won't harm.
            input = "";
        }
        if (!outputType) {
            return input;
        }
        exports.checkSupport(outputType);
        var inputType = exports.getTypeOf(input);
        var result = transform[inputType][outputType](input);
        return result;
    };
    
    /**
     * Return the type of the input.
     * The type will be in a format valid for JSZip.utils.transformTo : string, array, uint8array, arraybuffer.
     * @param {Object} input the input to identify.
     * @return {String} the (lowercase) type of the input.
     */
    exports.getTypeOf = function(input) {
        if (typeof input === "string") {
            return "string";
        }
        if (Object.prototype.toString.call(input) === "[object Array]") {
            return "array";
        }
        if (support.nodebuffer && nodeBuffer.test(input)) {
            return "nodebuffer";
        }
        if (support.uint8array && (input instanceof Uint8Array || Object.prototype.toString.call(input) === "[object Uint8Array]")) {
            return "uint8array";
        }
        if (support.arraybuffer && (input instanceof ArrayBuffer || Object.prototype.toString.call(input) === "[object ArrayBuffer]")) {
            return "arraybuffer";
        }
    };
    
    /**
     * Throw an exception if the type is not supported.
     * @param {String} type the type to check.
     * @throws {Error} an Error if the browser doesn't support the requested type.
     */
    exports.checkSupport = function(type) {
        var supported = support[type.toLowerCase()];
        if (!supported) {
            throw new Error(type + " is not supported by this browser");
        }
    };
    exports.MAX_VALUE_16BITS = 65535;
    exports.MAX_VALUE_32BITS = -1; // well, "\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF" is parsed as -1
    
    /**
     * Prettify a string read as binary.
     * @param {string} str the string to prettify.
     * @return {string} a pretty string.
     */
    exports.pretty = function(str) {
        var res = '',
            code, i;
        for (i = 0; i < (str || "").length; i++) {
            code = str.charCodeAt(i);
            res += '\\x' + (code < 16 ? "0" : "") + code.toString(16).toUpperCase();
        }
        return res;
    };
    
    /**
     * Find a compression registered in JSZip.
     * @param {string} compressionMethod the method magic to find.
     * @return {Object|null} the JSZip compression object, null if none found.
     */
    exports.findCompression = function(compressionMethod) {
        for (var method in compressions) {
            if (!compressions.hasOwnProperty(method)) {
                continue;
            }
            if (compressions[method].magic === compressionMethod) {
                return compressions[method];
            }
        }
        return null;
    };
    /**
    * Cross-window, cross-Node-context regular expression detection
    * @param  {Object}  object Anything
    * @return {Boolean}        true if the object is a regular expression,
    * false otherwise
    */
    exports.isRegExp = function (object) {
        return Object.prototype.toString.call(object) === "[object RegExp]";
    };
    
    
    },{"./compressions":3,"./nodeBuffer":22,"./support":15}],20:[function(_dereq_,module,exports){
    'use strict';
    var StringReader = _dereq_('./stringReader');
    var NodeBufferReader = _dereq_('./nodeBufferReader');
    var Uint8ArrayReader = _dereq_('./uint8ArrayReader');
    var utils = _dereq_('./utils');
    var sig = _dereq_('./signature');
    var ZipEntry = _dereq_('./zipEntry');
    var support = _dereq_('./support');
    var jszipProto = _dereq_('./object');
    //  class ZipEntries {{{
    /**
     * All the entries in the zip file.
     * @constructor
     * @param {String|ArrayBuffer|Uint8Array} data the binary stream to load.
     * @param {Object} loadOptions Options for loading the stream.
     */
    function ZipEntries(data, loadOptions) {
        this.files = [];
        this.loadOptions = loadOptions;
        if (data) {
            this.load(data);
        }
    }
    ZipEntries.prototype = {
        /**
         * Check that the reader is on the speficied signature.
         * @param {string} expectedSignature the expected signature.
         * @throws {Error} if it is an other signature.
         */
        checkSignature: function(expectedSignature) {
            var signature = this.reader.readString(4);
            if (signature !== expectedSignature) {
                throw new Error("Corrupted zip or bug : unexpected signature " + "(" + utils.pretty(signature) + ", expected " + utils.pretty(expectedSignature) + ")");
            }
        },
        /**
         * Read the end of the central directory.
         */
        readBlockEndOfCentral: function() {
            this.diskNumber = this.reader.readInt(2);
            this.diskWithCentralDirStart = this.reader.readInt(2);
            this.centralDirRecordsOnThisDisk = this.reader.readInt(2);
            this.centralDirRecords = this.reader.readInt(2);
            this.centralDirSize = this.reader.readInt(4);
            this.centralDirOffset = this.reader.readInt(4);
    
            this.zipCommentLength = this.reader.readInt(2);
            // warning : the encoding depends of the system locale
            // On a linux machine with LANG=en_US.utf8, this field is utf8 encoded.
            // On a windows machine, this field is encoded with the localized windows code page.
            this.zipComment = this.reader.readString(this.zipCommentLength);
            // To get consistent behavior with the generation part, we will assume that
            // this is utf8 encoded.
            this.zipComment = jszipProto.utf8decode(this.zipComment);
        },
        /**
         * Read the end of the Zip 64 central directory.
         * Not merged with the method readEndOfCentral :
         * The end of central can coexist with its Zip64 brother,
         * I don't want to read the wrong number of bytes !
         */
        readBlockZip64EndOfCentral: function() {
            this.zip64EndOfCentralSize = this.reader.readInt(8);
            this.versionMadeBy = this.reader.readString(2);
            this.versionNeeded = this.reader.readInt(2);
            this.diskNumber = this.reader.readInt(4);
            this.diskWithCentralDirStart = this.reader.readInt(4);
            this.centralDirRecordsOnThisDisk = this.reader.readInt(8);
            this.centralDirRecords = this.reader.readInt(8);
            this.centralDirSize = this.reader.readInt(8);
            this.centralDirOffset = this.reader.readInt(8);
    
            this.zip64ExtensibleData = {};
            var extraDataSize = this.zip64EndOfCentralSize - 44,
                index = 0,
                extraFieldId,
                extraFieldLength,
                extraFieldValue;
            while (index < extraDataSize) {
                extraFieldId = this.reader.readInt(2);
                extraFieldLength = this.reader.readInt(4);
                extraFieldValue = this.reader.readString(extraFieldLength);
                this.zip64ExtensibleData[extraFieldId] = {
                    id: extraFieldId,
                    length: extraFieldLength,
                    value: extraFieldValue
                };
            }
        },
        /**
         * Read the end of the Zip 64 central directory locator.
         */
        readBlockZip64EndOfCentralLocator: function() {
            this.diskWithZip64CentralDirStart = this.reader.readInt(4);
            this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8);
            this.disksCount = this.reader.readInt(4);
            if (this.disksCount > 1) {
                throw new Error("Multi-volumes zip are not supported");
            }
        },
        /**
         * Read the local files, based on the offset read in the central part.
         */
        readLocalFiles: function() {
            var i, file;
            for (i = 0; i < this.files.length; i++) {
                file = this.files[i];
                this.reader.setIndex(file.localHeaderOffset);
                this.checkSignature(sig.LOCAL_FILE_HEADER);
                file.readLocalPart(this.reader);
                file.handleUTF8();
            }
        },
        /**
         * Read the central directory.
         */
        readCentralDir: function() {
            var file;
    
            this.reader.setIndex(this.centralDirOffset);
            while (this.reader.readString(4) === sig.CENTRAL_FILE_HEADER) {
                file = new ZipEntry({
                    zip64: this.zip64
                }, this.loadOptions);
                file.readCentralPart(this.reader);
                this.files.push(file);
            }
        },
        /**
         * Read the end of central directory.
         */
        readEndOfCentral: function() {
            var offset = this.reader.lastIndexOfSignature(sig.CENTRAL_DIRECTORY_END);
            if (offset === -1) {
                throw new Error("Corrupted zip : can't find end of central directory");
            }
            this.reader.setIndex(offset);
            this.checkSignature(sig.CENTRAL_DIRECTORY_END);
            this.readBlockEndOfCentral();
    
    
            /* extract from the zip spec :
                4)  If one of the fields in the end of central directory
                    record is too small to hold required data, the field
                    should be set to -1 (0xFFFF or 0xFFFFFFFF) and the
                    ZIP64 format record should be created.
                5)  The end of central directory record and the
                    Zip64 end of central directory locator record must
                    reside on the same disk when splitting or spanning
                    an archive.
             */
            if (this.diskNumber === utils.MAX_VALUE_16BITS || this.diskWithCentralDirStart === utils.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === utils.MAX_VALUE_16BITS || this.centralDirRecords === utils.MAX_VALUE_16BITS || this.centralDirSize === utils.MAX_VALUE_32BITS || this.centralDirOffset === utils.MAX_VALUE_32BITS) {
                this.zip64 = true;
    
                /*
                Warning : the zip64 extension is supported, but ONLY if the 64bits integer read from
                the zip file can fit into a 32bits integer. This cannot be solved : Javascript represents
                all numbers as 64-bit double precision IEEE 754 floating point numbers.
                So, we have 53bits for integers and bitwise operations treat everything as 32bits.
                see https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/Bitwise_Operators
                and http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf section 8.5
                */
    
                // should look for a zip64 EOCD locator
                offset = this.reader.lastIndexOfSignature(sig.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
                if (offset === -1) {
                    throw new Error("Corrupted zip : can't find the ZIP64 end of central directory locator");
                }
                this.reader.setIndex(offset);
                this.checkSignature(sig.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
                this.readBlockZip64EndOfCentralLocator();
    
                // now the zip64 EOCD record
                this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir);
                this.checkSignature(sig.ZIP64_CENTRAL_DIRECTORY_END);
                this.readBlockZip64EndOfCentral();
            }
        },
        prepareReader: function(data) {
            var type = utils.getTypeOf(data);
            if (type === "string" && !support.uint8array) {
                this.reader = new StringReader(data, this.loadOptions.optimizedBinaryString);
            }
            else if (type === "nodebuffer") {
                this.reader = new NodeBufferReader(data);
            }
            else {
                this.reader = new Uint8ArrayReader(utils.transformTo("uint8array", data));
            }
        },
        /**
         * Read a zip file and create ZipEntries.
         * @param {String|ArrayBuffer|Uint8Array|Buffer} data the binary string representing a zip file.
         */
        load: function(data) {
            this.prepareReader(data);
            this.readEndOfCentral();
            this.readCentralDir();
            this.readLocalFiles();
        }
    };
    // }}} end of ZipEntries
    module.exports = ZipEntries;
    
    },{"./nodeBufferReader":22,"./object":11,"./signature":12,"./stringReader":13,"./support":15,"./uint8ArrayReader":16,"./utils":19,"./zipEntry":21}],21:[function(_dereq_,module,exports){
    'use strict';
    var StringReader = _dereq_('./stringReader');
    var utils = _dereq_('./utils');
    var CompressedObject = _dereq_('./compressedObject');
    var jszipProto = _dereq_('./object');
    // class ZipEntry {{{
    /**
     * An entry in the zip file.
     * @constructor
     * @param {Object} options Options of the current file.
     * @param {Object} loadOptions Options for loading the stream.
     */
    function ZipEntry(options, loadOptions) {
        this.options = options;
        this.loadOptions = loadOptions;
    }
    ZipEntry.prototype = {
        /**
         * say if the file is encrypted.
         * @return {boolean} true if the file is encrypted, false otherwise.
         */
        isEncrypted: function() {
            // bit 1 is set
            return (this.bitFlag & 0x0001) === 0x0001;
        },
        /**
         * say if the file has utf-8 filename/comment.
         * @return {boolean} true if the filename/comment is in utf-8, false otherwise.
         */
        useUTF8: function() {
            // bit 11 is set
            return (this.bitFlag & 0x0800) === 0x0800;
        },
        /**
         * Prepare the function used to generate the compressed content from this ZipFile.
         * @param {DataReader} reader the reader to use.
         * @param {number} from the offset from where we should read the data.
         * @param {number} length the length of the data to read.
         * @return {Function} the callback to get the compressed content (the type depends of the DataReader class).
         */
        prepareCompressedContent: function(reader, from, length) {
            return function() {
                var previousIndex = reader.index;
                reader.setIndex(from);
                var compressedFileData = reader.readData(length);
                reader.setIndex(previousIndex);
    
                return compressedFileData;
            };
        },
        /**
         * Prepare the function used to generate the uncompressed content from this ZipFile.
         * @param {DataReader} reader the reader to use.
         * @param {number} from the offset from where we should read the data.
         * @param {number} length the length of the data to read.
         * @param {JSZip.compression} compression the compression used on this file.
         * @param {number} uncompressedSize the uncompressed size to expect.
         * @return {Function} the callback to get the uncompressed content (the type depends of the DataReader class).
         */
        prepareContent: function(reader, from, length, compression, uncompressedSize) {
            return function() {
    
                var compressedFileData = utils.transformTo(compression.uncompressInputType, this.getCompressedContent());
                var uncompressedFileData = compression.uncompress(compressedFileData);
    
                if (uncompressedFileData.length !== uncompressedSize) {
                    throw new Error("Bug : uncompressed data size mismatch");
                }
    
                return uncompressedFileData;
            };
        },
        /**
         * Read the local part of a zip file and add the info in this object.
         * @param {DataReader} reader the reader to use.
         */
        readLocalPart: function(reader) {
            var compression, localExtraFieldsLength;
    
            // we already know everything from the central dir !
            // If the central dir data are false, we are doomed.
            // On the bright side, the local part is scary  : zip64, data descriptors, both, etc.
            // The less data we get here, the more reliable this should be.
            // Let's skip the whole header and dash to the data !
            reader.skip(22);
            // in some zip created on windows, the filename stored in the central dir contains \ instead of /.
            // Strangely, the filename here is OK.
            // I would love to treat these zip files as corrupted (see http://www.info-zip.org/FAQ.html#backslashes
            // or APPNOTE#4.4.17.1, "All slashes MUST be forward slashes '/'") but there are a lot of bad zip generators...
            // Search "unzip mismatching "local" filename continuing with "central" filename version" on
            // the internet.
            //
            // I think I see the logic here : the central directory is used to display
            // content and the local directory is used to extract the files. Mixing / and \
            // may be used to display \ to windows users and use / when extracting the files.
            // Unfortunately, this lead also to some issues : http://seclists.org/fulldisclosure/2009/Sep/394
            this.fileNameLength = reader.readInt(2);
            localExtraFieldsLength = reader.readInt(2); // can't be sure this will be the same as the central dir
            this.fileName = reader.readString(this.fileNameLength);
            reader.skip(localExtraFieldsLength);
    
            if (this.compressedSize == -1 || this.uncompressedSize == -1) {
                throw new Error("Bug or corrupted zip : didn't get enough informations from the central directory " + "(compressedSize == -1 || uncompressedSize == -1)");
            }
    
            compression = utils.findCompression(this.compressionMethod);
            if (compression === null) { // no compression found
                throw new Error("Corrupted zip : compression " + utils.pretty(this.compressionMethod) + " unknown (inner file : " + this.fileName + ")");
            }
            this.decompressed = new CompressedObject();
            this.decompressed.compressedSize = this.compressedSize;
            this.decompressed.uncompressedSize = this.uncompressedSize;
            this.decompressed.crc32 = this.crc32;
            this.decompressed.compressionMethod = this.compressionMethod;
            this.decompressed.getCompressedContent = this.prepareCompressedContent(reader, reader.index, this.compressedSize, compression);
            this.decompressed.getContent = this.prepareContent(reader, reader.index, this.compressedSize, compression, this.uncompressedSize);
    
            // we need to compute the crc32...
            if (this.loadOptions.checkCRC32) {
                this.decompressed = utils.transformTo("string", this.decompressed.getContent());
                if (jszipProto.crc32(this.decompressed) !== this.crc32) {
                    throw new Error("Corrupted zip : CRC32 mismatch");
                }
            }
        },
    
        /**
         * Read the central part of a zip file and add the info in this object.
         * @param {DataReader} reader the reader to use.
         */
        readCentralPart: function(reader) {
            this.versionMadeBy = reader.readString(2);
            this.versionNeeded = reader.readInt(2);
            this.bitFlag = reader.readInt(2);
            this.compressionMethod = reader.readString(2);
            this.date = reader.readDate();
            this.crc32 = reader.readInt(4);
            this.compressedSize = reader.readInt(4);
            this.uncompressedSize = reader.readInt(4);
            this.fileNameLength = reader.readInt(2);
            this.extraFieldsLength = reader.readInt(2);
            this.fileCommentLength = reader.readInt(2);
            this.diskNumberStart = reader.readInt(2);
            this.internalFileAttributes = reader.readInt(2);
            this.externalFileAttributes = reader.readInt(4);
            this.localHeaderOffset = reader.readInt(4);
    
            if (this.isEncrypted()) {
                throw new Error("Encrypted zip are not supported");
            }
    
            this.fileName = reader.readString(this.fileNameLength);
            this.readExtraFields(reader);
            this.parseZIP64ExtraField(reader);
            this.fileComment = reader.readString(this.fileCommentLength);
    
            // warning, this is true only for zip with madeBy == DOS (plateform dependent feature)
            this.dir = this.externalFileAttributes & 0x00000010 ? true : false;
        },
        /**
         * Parse the ZIP64 extra field and merge the info in the current ZipEntry.
         * @param {DataReader} reader the reader to use.
         */
        parseZIP64ExtraField: function(reader) {
    
            if (!this.extraFields[0x0001]) {
                return;
            }
    
            // should be something, preparing the extra reader
            var extraReader = new StringReader(this.extraFields[0x0001].value);
    
            // I really hope that these 64bits integer can fit in 32 bits integer, because js
            // won't let us have more.
            if (this.uncompressedSize === utils.MAX_VALUE_32BITS) {
                this.uncompressedSize = extraReader.readInt(8);
            }
            if (this.compressedSize === utils.MAX_VALUE_32BITS) {
                this.compressedSize = extraReader.readInt(8);
            }
            if (this.localHeaderOffset === utils.MAX_VALUE_32BITS) {
                this.localHeaderOffset = extraReader.readInt(8);
            }
            if (this.diskNumberStart === utils.MAX_VALUE_32BITS) {
                this.diskNumberStart = extraReader.readInt(4);
            }
        },
        /**
         * Read the central part of a zip file and add the info in this object.
         * @param {DataReader} reader the reader to use.
         */
        readExtraFields: function(reader) {
            var start = reader.index,
                extraFieldId,
                extraFieldLength,
                extraFieldValue;
    
            this.extraFields = this.extraFields || {};
    
            while (reader.index < start + this.extraFieldsLength) {
                extraFieldId = reader.readInt(2);
                extraFieldLength = reader.readInt(2);
                extraFieldValue = reader.readString(extraFieldLength);
    
                this.extraFields[extraFieldId] = {
                    id: extraFieldId,
                    length: extraFieldLength,
                    value: extraFieldValue
                };
            }
        },
        /**
         * Apply an UTF8 transformation if needed.
         */
        handleUTF8: function() {
            if (this.useUTF8()) {
                this.fileName = jszipProto.utf8decode(this.fileName);
                this.fileComment = jszipProto.utf8decode(this.fileComment);
            } else {
                var upath = this.findExtraFieldUnicodePath();
                if (upath !== null) {
                    this.fileName = upath;
                }
                var ucomment = this.findExtraFieldUnicodeComment();
                if (ucomment !== null) {
                    this.fileComment = ucomment;
                }
            }
        },
    
        /**
         * Find the unicode path declared in the extra field, if any.
         * @return {String} the unicode path, null otherwise.
         */
        findExtraFieldUnicodePath: function() {
            var upathField = this.extraFields[0x7075];
            if (upathField) {
                var extraReader = new StringReader(upathField.value);
    
                // wrong version
                if (extraReader.readInt(1) !== 1) {
                    return null;
                }
    
                // the crc of the filename changed, this field is out of date.
                if (jszipProto.crc32(this.fileName) !== extraReader.readInt(4)) {
                    return null;
                }
    
                return jszipProto.utf8decode(extraReader.readString(upathField.length - 5));
            }
            return null;
        },
    
        /**
         * Find the unicode comment declared in the extra field, if any.
         * @return {String} the unicode comment, null otherwise.
         */
        findExtraFieldUnicodeComment: function() {
            var ucommentField = this.extraFields[0x6375];
            if (ucommentField) {
                var extraReader = new StringReader(ucommentField.value);
    
                // wrong version
                if (extraReader.readInt(1) !== 1) {
                    return null;
                }
    
                // the crc of the comment changed, this field is out of date.
                if (jszipProto.crc32(this.fileComment) !== extraReader.readInt(4)) {
                    return null;
                }
    
                return jszipProto.utf8decode(extraReader.readString(ucommentField.length - 5));
            }
            return null;
        }
    };
    module.exports = ZipEntry;
    
    },{"./compressedObject":2,"./object":11,"./stringReader":13,"./utils":19}],22:[function(_dereq_,module,exports){
    
    },{}],23:[function(_dereq_,module,exports){
    // shim for using process in browser
    
    var process = module.exports = {};
    
    process.nextTick = (function () {
        var canSetImmediate = typeof window !== 'undefined'
        && window.setImmediate;
        var canPost = typeof window !== 'undefined'
        && window.postMessage && window.addEventListener
        ;
    
        if (canSetImmediate) {
            return function (f) { return window.setImmediate(f) };
        }
    
        if (canPost) {
            var queue = [];
            window.addEventListener('message', function (ev) {
                var source = ev.source;
                if ((source === window || source === null) && ev.data === 'process-tick') {
                    ev.stopPropagation();
                    if (queue.length > 0) {
                        var fn = queue.shift();
                        fn();
                    }
                }
            }, true);
    
            return function nextTick(fn) {
                queue.push(fn);
                window.postMessage('process-tick', '*');
            };
        }
    
        return function nextTick(fn) {
            setTimeout(fn, 0);
        };
    })();
    
    process.title = 'browser';
    process.browser = true;
    process.env = {};
    process.argv = [];
    
    function noop() {}
    
    process.on = noop;
    process.addListener = noop;
    process.once = noop;
    process.off = noop;
    process.removeListener = noop;
    process.removeAllListeners = noop;
    process.emit = noop;
    
    process.binding = function (name) {
        throw new Error('process.binding is not supported');
    }
    
    // TODO(shtylman)
    process.cwd = function () { return '/' };
    process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
    };
    
    },{}],24:[function(_dereq_,module,exports){
    // Top level file is just a mixin of submodules & constants
    'use strict';
    
    var assign    = _dereq_('./lib/utils/common').assign;
    
    var deflate   = _dereq_('./lib/deflate');
    var inflate   = _dereq_('./lib/inflate');
    var constants = _dereq_('./lib/zlib/constants');
    
    var pako = {};
    
    assign(pako, deflate, inflate, constants);
    
    module.exports = pako;
    },{"./lib/deflate":25,"./lib/inflate":26,"./lib/utils/common":27,"./lib/zlib/constants":30}],25:[function(_dereq_,module,exports){
    'use strict';
    
    
    var zlib_deflate = _dereq_('./zlib/deflate.js');
    var utils = _dereq_('./utils/common');
    var strings = _dereq_('./utils/strings');
    var msg = _dereq_('./zlib/messages');
    var zstream = _dereq_('./zlib/zstream');
    
    
    /* Public constants ==========================================================*/
    /* ===========================================================================*/
    
    var Z_NO_FLUSH      = 0;
    var Z_FINISH        = 4;
    
    var Z_OK            = 0;
    var Z_STREAM_END    = 1;
    
    var Z_DEFAULT_COMPRESSION = -1;
    
    var Z_DEFAULT_STRATEGY    = 0;
    
    var Z_DEFLATED  = 8;
    
    /* ===========================================================================*/
    
    
    /**
     * class Deflate
     *
     * Generic JS-style wrapper for zlib calls. If you don't need
     * streaming behaviour - use more simple functions: [[deflate]],
     * [[deflateRaw]] and [[gzip]].
     **/
    
    /* internal
     * Deflate.chunks -> Array
     *
     * Chunks of output data, if [[Deflate#onData]] not overriden.
     **/
    
    /**
     * Deflate.result -> Uint8Array|Array
     *
     * Compressed result, generated by default [[Deflate#onData]]
     * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
     * (call [[Deflate#push]] with `Z_FINISH` / `true` param).
     **/
    
    /**
     * Deflate.err -> Number
     *
     * Error code after deflate finished. 0 (Z_OK) on success.
     * You will not need it in real life, because deflate errors
     * are possible only on wrong options or bad `onData` / `onEnd`
     * custom handlers.
     **/
    
    /**
     * Deflate.msg -> String
     *
     * Error message, if [[Deflate.err]] != 0
     **/
    
    
    /**
     * new Deflate(options)
     * - options (Object): zlib deflate options.
     *
     * Creates new deflator instance with specified params. Throws exception
     * on bad params. Supported options:
     *
     * - `level`
     * - `windowBits`
     * - `memLevel`
     * - `strategy`
     *
     * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
     * for more information on these.
     *
     * Additional options, for internal needs:
     *
     * - `chunkSize` - size of generated data chunks (16K by default)
     * - `raw` (Boolean) - do raw deflate
     * - `gzip` (Boolean) - create gzip wrapper
     * - `to` (String) - if equal to 'string', then result will be "binary string"
     *    (each char code [0..255])
     * - `header` (Object) - custom header for gzip
     *   - `text` (Boolean) - true if compressed data believed to be text
     *   - `time` (Number) - modification time, unix timestamp
     *   - `os` (Number) - operation system code
     *   - `extra` (Array) - array of bytes with extra data (max 65536)
     *   - `name` (String) - file name (binary string)
     *   - `comment` (String) - comment (binary string)
     *   - `hcrc` (Boolean) - true if header crc should be added
     *
     * ##### Example:
     *
     * ```javascript
     * var pako = require('pako')
     *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
     *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
     *
     * var deflate = new pako.Deflate({ level: 3});
     *
     * deflate.push(chunk1, false);
     * deflate.push(chunk2, true);  // true -> last chunk
     *
     * if (deflate.err) { throw new Error(deflate.err); }
     *
     * console.log(deflate.result);
     * ```
     **/
    var Deflate = function(options) {
    
      this.options = utils.assign({
        level: Z_DEFAULT_COMPRESSION,
        method: Z_DEFLATED,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: Z_DEFAULT_STRATEGY,
        to: ''
      }, options || {});
    
      var opt = this.options;
    
      if (opt.raw && (opt.windowBits > 0)) {
        opt.windowBits = -opt.windowBits;
      }
    
      else if (opt.gzip && (opt.windowBits > 0) && (opt.windowBits < 16)) {
        opt.windowBits += 16;
      }
    
      this.err    = 0;      // error code, if happens (0 = Z_OK)
      this.msg    = '';     // error message
      this.ended  = false;  // used to avoid multiple onEnd() calls
      this.chunks = [];     // chunks of compressed data
    
      this.strm = new zstream();
      this.strm.avail_out = 0;
    
      var status = zlib_deflate.deflateInit2(
        this.strm,
        opt.level,
        opt.method,
        opt.windowBits,
        opt.memLevel,
        opt.strategy
      );
    
      if (status !== Z_OK) {
        throw new Error(msg[status]);
      }
    
      if (opt.header) {
        zlib_deflate.deflateSetHeader(this.strm, opt.header);
      }
    };
    
    /**
     * Deflate#push(data[, mode]) -> Boolean
     * - data (Uint8Array|Array|String): input data. Strings will be converted to
     *   utf8 byte sequence.
     * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
     *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` meansh Z_FINISH.
     *
     * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
     * new compressed chunks. Returns `true` on success. The last data block must have
     * mode Z_FINISH (or `true`). That flush internal pending buffers and call
     * [[Deflate#onEnd]].
     *
     * On fail call [[Deflate#onEnd]] with error code and return false.
     *
     * We strongly recommend to use `Uint8Array` on input for best speed (output
     * array format is detected automatically). Also, don't skip last param and always
     * use the same type in your code (boolean or number). That will improve JS speed.
     *
     * For regular `Array`-s make sure all elements are [0..255].
     *
     * ##### Example
     *
     * ```javascript
     * push(chunk, false); // push one of data chunks
     * ...
     * push(chunk, true);  // push last chunk
     * ```
     **/
    Deflate.prototype.push = function(data, mode) {
      var strm = this.strm;
      var chunkSize = this.options.chunkSize;
      var status, _mode;
    
      if (this.ended) { return false; }
    
      _mode = (mode === ~~mode) ? mode : ((mode === true) ? Z_FINISH : Z_NO_FLUSH);
    
      // Convert data if needed
      if (typeof data === 'string') {
        // If we need to compress text, change encoding to utf8.
        strm.input = strings.string2buf(data);
      } else {
        strm.input = data;
      }
    
      strm.next_in = 0;
      strm.avail_in = strm.input.length;
    
      do {
        if (strm.avail_out === 0) {
          strm.output = new utils.Buf8(chunkSize);
          strm.next_out = 0;
          strm.avail_out = chunkSize;
        }
        status = zlib_deflate.deflate(strm, _mode);    /* no bad return value */
    
        if (status !== Z_STREAM_END && status !== Z_OK) {
          this.onEnd(status);
          this.ended = true;
          return false;
        }
        if (strm.avail_out === 0 || (strm.avail_in === 0 && _mode === Z_FINISH)) {
          if (this.options.to === 'string') {
            this.onData(strings.buf2binstring(utils.shrinkBuf(strm.output, strm.next_out)));
          } else {
            this.onData(utils.shrinkBuf(strm.output, strm.next_out));
          }
        }
      } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== Z_STREAM_END);
    
      // Finalize on the last chunk.
      if (_mode === Z_FINISH) {
        status = zlib_deflate.deflateEnd(this.strm);
        this.onEnd(status);
        this.ended = true;
        return status === Z_OK;
      }
    
      return true;
    };
    
    
    /**
     * Deflate#onData(chunk) -> Void
     * - chunk (Uint8Array|Array|String): ouput data. Type of array depends
     *   on js engine support. When string output requested, each chunk
     *   will be string.
     *
     * By default, stores data blocks in `chunks[]` property and glue
     * those in `onEnd`. Override this handler, if you need another behaviour.
     **/
    Deflate.prototype.onData = function(chunk) {
      this.chunks.push(chunk);
    };
    
    
    /**
     * Deflate#onEnd(status) -> Void
     * - status (Number): deflate status. 0 (Z_OK) on success,
     *   other if not.
     *
     * Called once after you tell deflate that input stream complete
     * or error happenned. By default - join collected chunks,
     * free memory and fill `results` / `err` properties.
     **/
    Deflate.prototype.onEnd = function(status) {
      // On success - join
      if (status === Z_OK) {
        if (this.options.to === 'string') {
          this.result = this.chunks.join('');
        } else {
          this.result = utils.flattenChunks(this.chunks);
        }
      }
      this.chunks = [];
      this.err = status;
      this.msg = this.strm.msg;
    };
    
    
    /**
     * deflate(data[, options]) -> Uint8Array|Array|String
     * - data (Uint8Array|Array|String): input data to compress.
     * - options (Object): zlib deflate options.
     *
     * Compress `data` with deflate alrorythm and `options`.
     *
     * Supported options are:
     *
     * - level
     * - windowBits
     * - memLevel
     * - strategy
     *
     * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
     * for more information on these.
     *
     * Sugar (options):
     *
     * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
     *   negative windowBits implicitly.
     * - `to` (String) - if equal to 'string', then result will be "binary string"
     *    (each char code [0..255])
     *
     * ##### Example:
     *
     * ```javascript
     * var pako = require('pako')
     *   , data = Uint8Array([1,2,3,4,5,6,7,8,9]);
     *
     * console.log(pako.deflate(data));
     * ```
     **/
    function deflate(input, options) {
      var deflator = new Deflate(options);
    
      deflator.push(input, true);
    
      // That will never happens, if you don't cheat with options :)
      if (deflator.err) { throw deflator.msg; }
    
      return deflator.result;
    }
    
    
    /**
     * deflateRaw(data[, options]) -> Uint8Array|Array|String
     * - data (Uint8Array|Array|String): input data to compress.
     * - options (Object): zlib deflate options.
     *
     * The same as [[deflate]], but creates raw data, without wrapper
     * (header and adler32 crc).
     **/
    function deflateRaw(input, options) {
      options = options || {};
      options.raw = true;
      return deflate(input, options);
    }
    
    
    /**
     * gzip(data[, options]) -> Uint8Array|Array|String
     * - data (Uint8Array|Array|String): input data to compress.
     * - options (Object): zlib deflate options.
     *
     * The same as [[deflate]], but create gzip wrapper instead of
     * deflate one.
     **/
    function gzip(input, options) {
      options = options || {};
      options.gzip = true;
      return deflate(input, options);
    }
    
    
    exports.Deflate = Deflate;
    exports.deflate = deflate;
    exports.deflateRaw = deflateRaw;
    exports.gzip = gzip;
    },{"./utils/common":27,"./utils/strings":28,"./zlib/deflate.js":32,"./zlib/messages":37,"./zlib/zstream":39}],26:[function(_dereq_,module,exports){
    'use strict';
    
    
    var zlib_inflate = _dereq_('./zlib/inflate.js');
    var utils = _dereq_('./utils/common');
    var strings = _dereq_('./utils/strings');
    var c = _dereq_('./zlib/constants');
    var msg = _dereq_('./zlib/messages');
    var zstream = _dereq_('./zlib/zstream');
    var gzheader = _dereq_('./zlib/gzheader');
    
    
    /**
     * class Inflate
     *
     * Generic JS-style wrapper for zlib calls. If you don't need
     * streaming behaviour - use more simple functions: [[inflate]]
     * and [[inflateRaw]].
     **/
    
    /* internal
     * inflate.chunks -> Array
     *
     * Chunks of output data, if [[Inflate#onData]] not overriden.
     **/
    
    /**
     * Inflate.result -> Uint8Array|Array|String
     *
     * Uncompressed result, generated by default [[Inflate#onData]]
     * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
     * (call [[Inflate#push]] with `Z_FINISH` / `true` param).
     **/
    
    /**
     * Inflate.err -> Number
     *
     * Error code after inflate finished. 0 (Z_OK) on success.
     * Should be checked if broken data possible.
     **/
    
    /**
     * Inflate.msg -> String
     *
     * Error message, if [[Inflate.err]] != 0
     **/
    
    
    /**
     * new Inflate(options)
     * - options (Object): zlib inflate options.
     *
     * Creates new inflator instance with specified params. Throws exception
     * on bad params. Supported options:
     *
     * - `windowBits`
     *
     * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
     * for more information on these.
     *
     * Additional options, for internal needs:
     *
     * - `chunkSize` - size of generated data chunks (16K by default)
     * - `raw` (Boolean) - do raw inflate
     * - `to` (String) - if equal to 'string', then result will be converted
     *   from utf8 to utf16 (javascript) string. When string output requested,
     *   chunk length can differ from `chunkSize`, depending on content.
     *
     * By default, when no options set, autodetect deflate/gzip data format via
     * wrapper header.
     *
     * ##### Example:
     *
     * ```javascript
     * var pako = require('pako')
     *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
     *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
     *
     * var inflate = new pako.Inflate({ level: 3});
     *
     * inflate.push(chunk1, false);
     * inflate.push(chunk2, true);  // true -> last chunk
     *
     * if (inflate.err) { throw new Error(inflate.err); }
     *
     * console.log(inflate.result);
     * ```
     **/
    var Inflate = function(options) {
    
      this.options = utils.assign({
        chunkSize: 16384,
        windowBits: 0,
        to: ''
      }, options || {});
    
      var opt = this.options;
    
      // Force window size for `raw` data, if not set directly,
      // because we have no header for autodetect.
      if (opt.raw && (opt.windowBits >= 0) && (opt.windowBits < 16)) {
        opt.windowBits = -opt.windowBits;
        if (opt.windowBits === 0) { opt.windowBits = -15; }
      }
    
      // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate
      if ((opt.windowBits >= 0) && (opt.windowBits < 16) &&
          !(options && options.windowBits)) {
        opt.windowBits += 32;
      }
    
      // Gzip header has no info about windows size, we can do autodetect only
      // for deflate. So, if window size not set, force it to max when gzip possible
      if ((opt.windowBits > 15) && (opt.windowBits < 48)) {
        // bit 3 (16) -> gzipped data
        // bit 4 (32) -> autodetect gzip/deflate
        if ((opt.windowBits & 15) === 0) {
          opt.windowBits |= 15;
        }
      }
    
      this.err    = 0;      // error code, if happens (0 = Z_OK)
      this.msg    = '';     // error message
      this.ended  = false;  // used to avoid multiple onEnd() calls
      this.chunks = [];     // chunks of compressed data
    
      this.strm   = new zstream();
      this.strm.avail_out = 0;
    
      var status  = zlib_inflate.inflateInit2(
        this.strm,
        opt.windowBits
      );
    
      if (status !== c.Z_OK) {
        throw new Error(msg[status]);
      }
    
      this.header = new gzheader();
    
      zlib_inflate.inflateGetHeader(this.strm, this.header);
    };
    
    /**
     * Inflate#push(data[, mode]) -> Boolean
     * - data (Uint8Array|Array|String): input data
     * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
     *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` meansh Z_FINISH.
     *
     * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
     * new output chunks. Returns `true` on success. The last data block must have
     * mode Z_FINISH (or `true`). That flush internal pending buffers and call
     * [[Inflate#onEnd]].
     *
     * On fail call [[Inflate#onEnd]] with error code and return false.
     *
     * We strongly recommend to use `Uint8Array` on input for best speed (output
     * format is detected automatically). Also, don't skip last param and always
     * use the same type in your code (boolean or number). That will improve JS speed.
     *
     * For regular `Array`-s make sure all elements are [0..255].
     *
     * ##### Example
     *
     * ```javascript
     * push(chunk, false); // push one of data chunks
     * ...
     * push(chunk, true);  // push last chunk
     * ```
     **/
    Inflate.prototype.push = function(data, mode) {
      var strm = this.strm;
      var chunkSize = this.options.chunkSize;
      var status, _mode;
      var next_out_utf8, tail, utf8str;
    
      if (this.ended) { return false; }
      _mode = (mode === ~~mode) ? mode : ((mode === true) ? c.Z_FINISH : c.Z_NO_FLUSH);
    
      // Convert data if needed
      if (typeof data === 'string') {
        // Only binary strings can be decompressed on practice
        strm.input = strings.binstring2buf(data);
      } else {
        strm.input = data;
      }
    
      strm.next_in = 0;
      strm.avail_in = strm.input.length;
    
      do {
        if (strm.avail_out === 0) {
          strm.output = new utils.Buf8(chunkSize);
          strm.next_out = 0;
          strm.avail_out = chunkSize;
        }
    
        status = zlib_inflate.inflate(strm, c.Z_NO_FLUSH);    /* no bad return value */
    
        if (status !== c.Z_STREAM_END && status !== c.Z_OK) {
          this.onEnd(status);
          this.ended = true;
          return false;
        }
    
        if (strm.next_out) {
          if (strm.avail_out === 0 || status === c.Z_STREAM_END || (strm.avail_in === 0 && _mode === c.Z_FINISH)) {
    
            if (this.options.to === 'string') {
    
              next_out_utf8 = strings.utf8border(strm.output, strm.next_out);
    
              tail = strm.next_out - next_out_utf8;
              utf8str = strings.buf2string(strm.output, next_out_utf8);
    
              // move tail
              strm.next_out = tail;
              strm.avail_out = chunkSize - tail;
              if (tail) { utils.arraySet(strm.output, strm.output, next_out_utf8, tail, 0); }
    
              this.onData(utf8str);
    
            } else {
              this.onData(utils.shrinkBuf(strm.output, strm.next_out));
            }
          }
        }
      } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== c.Z_STREAM_END);
    
      if (status === c.Z_STREAM_END) {
        _mode = c.Z_FINISH;
      }
      // Finalize on the last chunk.
      if (_mode === c.Z_FINISH) {
        status = zlib_inflate.inflateEnd(this.strm);
        this.onEnd(status);
        this.ended = true;
        return status === c.Z_OK;
      }
    
      return true;
    };
    
    
    /**
     * Inflate#onData(chunk) -> Void
     * - chunk (Uint8Array|Array|String): ouput data. Type of array depends
     *   on js engine support. When string output requested, each chunk
     *   will be string.
     *
     * By default, stores data blocks in `chunks[]` property and glue
     * those in `onEnd`. Override this handler, if you need another behaviour.
     **/
    Inflate.prototype.onData = function(chunk) {
      this.chunks.push(chunk);
    };
    
    
    /**
     * Inflate#onEnd(status) -> Void
     * - status (Number): inflate status. 0 (Z_OK) on success,
     *   other if not.
     *
     * Called once after you tell inflate that input stream complete
     * or error happenned. By default - join collected chunks,
     * free memory and fill `results` / `err` properties.
     **/
    Inflate.prototype.onEnd = function(status) {
      // On success - join
      if (status === c.Z_OK) {
        if (this.options.to === 'string') {
          // Glue & convert here, until we teach pako to send
          // utf8 alligned strings to onData
          this.result = this.chunks.join('');
        } else {
          this.result = utils.flattenChunks(this.chunks);
        }
      }
      this.chunks = [];
      this.err = status;
      this.msg = this.strm.msg;
    };
    
    
    /**
     * inflate(data[, options]) -> Uint8Array|Array|String
     * - data (Uint8Array|Array|String): input data to decompress.
     * - options (Object): zlib inflate options.
     *
     * Decompress `data` with inflate/ungzip and `options`. Autodetect
     * format via wrapper header by default. That's why we don't provide
     * separate `ungzip` method.
     *
     * Supported options are:
     *
     * - windowBits
     *
     * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
     * for more information.
     *
     * Sugar (options):
     *
     * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
     *   negative windowBits implicitly.
     * - `to` (String) - if equal to 'string', then result will be converted
     *   from utf8 to utf16 (javascript) string. When string output requested,
     *   chunk length can differ from `chunkSize`, depending on content.
     *
     *
     * ##### Example:
     *
     * ```javascript
     * var pako = require('pako')
     *   , input = pako.deflate([1,2,3,4,5,6,7,8,9])
     *   , output;
     *
     * try {
     *   output = pako.inflate(input);
     * } catch (err)
     *   console.log(err);
     * }
     * ```
     **/
    function inflate(input, options) {
      var inflator = new Inflate(options);
    
      inflator.push(input, true);
    
      // That will never happens, if you don't cheat with options :)
      if (inflator.err) { throw inflator.msg; }
    
      return inflator.result;
    }
    
    
    /**
     * inflateRaw(data[, options]) -> Uint8Array|Array|String
     * - data (Uint8Array|Array|String): input data to decompress.
     * - options (Object): zlib inflate options.
     *
     * The same as [[inflate]], but creates raw data, without wrapper
     * (header and adler32 crc).
     **/
    function inflateRaw(input, options) {
      options = options || {};
      options.raw = true;
      return inflate(input, options);
    }
    
    
    /**
     * ungzip(data[, options]) -> Uint8Array|Array|String
     * - data (Uint8Array|Array|String): input data to decompress.
     * - options (Object): zlib inflate options.
     *
     * Just shortcut to [[inflate]], because it autodetects format
     * by header.content. Done for convenience.
     **/
    
    
    exports.Inflate = Inflate;
    exports.inflate = inflate;
    exports.inflateRaw = inflateRaw;
    exports.ungzip  = inflate;
    
    },{"./utils/common":27,"./utils/strings":28,"./zlib/constants":30,"./zlib/gzheader":33,"./zlib/inflate.js":35,"./zlib/messages":37,"./zlib/zstream":39}],27:[function(_dereq_,module,exports){
    'use strict';
    
    
    var TYPED_OK =  (typeof Uint8Array !== 'undefined') &&
                    (typeof Uint16Array !== 'undefined') &&
                    (typeof Int32Array !== 'undefined');
    
    
    exports.assign = function (obj /*from1, from2, from3, ...*/) {
      var sources = Array.prototype.slice.call(arguments, 1);
      while (sources.length) {
        var source = sources.shift();
        if (!source) { continue; }
    
        if (typeof(source) !== 'object') {
          throw new TypeError(source + 'must be non-object');
        }
    
        for (var p in source) {
          if (source.hasOwnProperty(p)) {
            obj[p] = source[p];
          }
        }
      }
    
      return obj;
    };
    
    
    // reduce buffer size, avoiding mem copy
    exports.shrinkBuf = function (buf, size) {
      if (buf.length === size) { return buf; }
      if (buf.subarray) { return buf.subarray(0, size); }
      buf.length = size;
      return buf;
    };
    
    
    var fnTyped = {
      arraySet: function (dest, src, src_offs, len, dest_offs) {
        if (src.subarray && dest.subarray) {
          dest.set(src.subarray(src_offs, src_offs+len), dest_offs);
          return;
        }
        // Fallback to ordinary array
        for(var i=0; i<len; i++) {
          dest[dest_offs + i] = src[src_offs + i];
        }
      },
      // Join array of chunks to single array.
      flattenChunks: function(chunks) {
        var i, l, len, pos, chunk, result;
    
        // calculate data length
        len = 0;
        for (i=0, l=chunks.length; i<l; i++) {
          len += chunks[i].length;
        }
    
        // join chunks
        result = new Uint8Array(len);
        pos = 0;
        for (i=0, l=chunks.length; i<l; i++) {
          chunk = chunks[i];
          result.set(chunk, pos);
          pos += chunk.length;
        }
    
        return result;
      }
    };
    
    var fnUntyped = {
      arraySet: function (dest, src, src_offs, len, dest_offs) {
        for(var i=0; i<len; i++) {
          dest[dest_offs + i] = src[src_offs + i];
        }
      },
      // Join array of chunks to single array.
      flattenChunks: function(chunks) {
        return [].concat.apply([], chunks);
      }
    };
    
    
    // Enable/Disable typed arrays use, for testing
    //
    exports.setTyped = function (on) {
      if (on) {
        exports.Buf8  = Uint8Array;
        exports.Buf16 = Uint16Array;
        exports.Buf32 = Int32Array;
        exports.assign(exports, fnTyped);
      } else {
        exports.Buf8  = Array;
        exports.Buf16 = Array;
        exports.Buf32 = Array;
        exports.assign(exports, fnUntyped);
      }
    };
    
    exports.setTyped(TYPED_OK);
    },{}],28:[function(_dereq_,module,exports){
    // String encode/decode helpers
    'use strict';
    
    
    var utils = _dereq_('./common');
    
    
    // Quick check if we can use fast array to bin string conversion
    //
    // - apply(Array) can fail on Android 2.2
    // - apply(Uint8Array) can fail on iOS 5.1 Safary
    //
    var STR_APPLY_OK = true;
    var STR_APPLY_UIA_OK = true;
    
    try { String.fromCharCode.apply(null, [0]); } catch(__) { STR_APPLY_OK = false; }
    try { String.fromCharCode.apply(null, new Uint8Array(1)); } catch(__) { STR_APPLY_UIA_OK = false; }
    
    
    // Table with utf8 lengths (calculated by first byte of sequence)
    // Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
    // because max possible codepoint is 0x10ffff
    var _utf8len = new utils.Buf8(256);
    for (var i=0; i<256; i++) {
      _utf8len[i] = (i >= 252 ? 6 : i >= 248 ? 5 : i >= 240 ? 4 : i >= 224 ? 3 : i >= 192 ? 2 : 1);
    }
    _utf8len[254]=_utf8len[254]=1; // Invalid sequence start
    
    
    // convert string to array (typed, when possible)
    exports.string2buf = function (str) {
      var buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;
    
      // count binary size
      for (m_pos = 0; m_pos < str_len; m_pos++) {
        c = str.charCodeAt(m_pos);
        if ((c & 0xfc00) === 0xd800 && (m_pos+1 < str_len)) {
          c2 = str.charCodeAt(m_pos+1);
          if ((c2 & 0xfc00) === 0xdc00) {
            c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
            m_pos++;
          }
        }
        buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
      }
    
      // allocate buffer
      buf = new utils.Buf8(buf_len);
    
      // convert
      for (i=0, m_pos = 0; i < buf_len; m_pos++) {
        c = str.charCodeAt(m_pos);
        if ((c & 0xfc00) === 0xd800 && (m_pos+1 < str_len)) {
          c2 = str.charCodeAt(m_pos+1);
          if ((c2 & 0xfc00) === 0xdc00) {
            c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
            m_pos++;
          }
        }
        if (c < 0x80) {
          /* one byte */
          buf[i++] = c;
        } else if (c < 0x800) {
          /* two bytes */
          buf[i++] = 0xC0 | (c >>> 6);
          buf[i++] = 0x80 | (c & 0x3f);
        } else if (c < 0x10000) {
          /* three bytes */
          buf[i++] = 0xE0 | (c >>> 12);
          buf[i++] = 0x80 | (c >>> 6 & 0x3f);
          buf[i++] = 0x80 | (c & 0x3f);
        } else {
          /* four bytes */
          buf[i++] = 0xf0 | (c >>> 18);
          buf[i++] = 0x80 | (c >>> 12 & 0x3f);
          buf[i++] = 0x80 | (c >>> 6 & 0x3f);
          buf[i++] = 0x80 | (c & 0x3f);
        }
      }
    
      return buf;
    };
    
    // Helper (used in 2 places)
    function buf2binstring(buf, len) {
      // use fallback for big arrays to avoid stack overflow
      if (len < 65537) {
        if ((buf.subarray && STR_APPLY_UIA_OK) || (!buf.subarray && STR_APPLY_OK)) {
          return String.fromCharCode.apply(null, utils.shrinkBuf(buf, len));
        }
      }
    
      var result = '';
      for(var i=0; i < len; i++) {
        result += String.fromCharCode(buf[i]);
      }
      return result;
    }
    
    
    // Convert byte array to binary string
    exports.buf2binstring = function(buf) {
      return buf2binstring(buf, buf.length);
    };
    
    
    // Convert binary string (typed, when possible)
    exports.binstring2buf = function(str) {
      var buf = new utils.Buf8(str.length);
      for(var i=0, len=buf.length; i < len; i++) {
        buf[i] = str.charCodeAt(i);
      }
      return buf;
    };
    
    
    // convert array to string
    exports.buf2string = function (buf, max) {
      var i, out, c, c_len;
      var len = max || buf.length;
    
      // Reserve max possible length (2 words per char)
      // NB: by unknown reasons, Array is significantly faster for
      //     String.fromCharCode.apply than Uint16Array.
      var utf16buf = new Array(len*2);
    
      for (out=0, i=0; i<len;) {
        c = buf[i++];
        // quick process ascii
        if (c < 0x80) { utf16buf[out++] = c; continue; }
    
        c_len = _utf8len[c];
        // skip 5 & 6 byte codes
        if (c_len > 4) { utf16buf[out++] = 0xfffd; i += c_len-1; continue; }
    
        // apply mask on first byte
        c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
        // join the rest
        while (c_len > 1 && i < len) {
          c = (c << 6) | (buf[i++] & 0x3f);
          c_len--;
        }
    
        // terminated by end of string?
        if (c_len > 1) { utf16buf[out++] = 0xfffd; continue; }
    
        if (c < 0x10000) {
          utf16buf[out++] = c;
        } else {
          c -= 0x10000;
          utf16buf[out++] = 0xd800 | ((c >> 10) & 0x3ff);
          utf16buf[out++] = 0xdc00 | (c & 0x3ff);
        }
      }
    
      return buf2binstring(utf16buf, out);
    };
    
    
    // Calculate max possible position in utf8 buffer,
    // that will not break sequence. If that's not possible
    // - (very small limits) return max size as is.
    //
    // buf[] - utf8 bytes array
    // max   - length limit (mandatory);
    exports.utf8border = function(buf, max) {
      var pos;
    
      max = max || buf.length;
      if (max > buf.length) { max = buf.length; }
    
      // go back from last position, until start of sequence found
      pos = max-1;
      while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) { pos--; }
    
      // Fuckup - very small and broken sequence,
      // return max, because we should return something anyway.
      if (pos < 0) { return max; }
    
      // If we came to start of buffer - that means vuffer is too small,
      // return max too.
      if (pos === 0) { return max; }
    
      return (pos + _utf8len[buf[pos]] > max) ? pos : max;
    };
    
    },{"./common":27}],29:[function(_dereq_,module,exports){
    'use strict';
    
    // Note: adler32 takes 12% for level 0 and 2% for level 6.
    // It doesn't worth to make additional optimizationa as in original.
    // Small size is preferable.
    
    function adler32(adler, buf, len, pos) {
      var s1 = (adler & 0xffff) |0
        , s2 = ((adler >>> 16) & 0xffff) |0
        , n = 0;
    
      while (len !== 0) {
        // Set limit ~ twice less than 5552, to keep
        // s2 in 31-bits, because we force signed ints.
        // in other case %= will fail.
        n = len > 2000 ? 2000 : len;
        len -= n;
    
        do {
          s1 = (s1 + buf[pos++]) |0;
          s2 = (s2 + s1) |0;
        } while (--n);
    
        s1 %= 65521;
        s2 %= 65521;
      }
    
      return (s1 | (s2 << 16)) |0;
    }
    
    
    module.exports = adler32;
    },{}],30:[function(_dereq_,module,exports){
    module.exports = {
    
      /* Allowed flush values; see deflate() and inflate() below for details */
      Z_NO_FLUSH:         0,
      Z_PARTIAL_FLUSH:    1,
      Z_SYNC_FLUSH:       2,
      Z_FULL_FLUSH:       3,
      Z_FINISH:           4,
      Z_BLOCK:            5,
      Z_TREES:            6,
    
      /* Return codes for the compression/decompression functions. Negative values
      * are errors, positive values are used for special but normal events.
      */
      Z_OK:               0,
      Z_STREAM_END:       1,
      Z_NEED_DICT:        2,
      Z_ERRNO:           -1,
      Z_STREAM_ERROR:    -2,
      Z_DATA_ERROR:      -3,
      //Z_MEM_ERROR:     -4,
      Z_BUF_ERROR:       -5,
      //Z_VERSION_ERROR: -6,
    
      /* compression levels */
      Z_NO_COMPRESSION:         0,
      Z_BEST_SPEED:             1,
      Z_BEST_COMPRESSION:       9,
      Z_DEFAULT_COMPRESSION:   -1,
    
    
      Z_FILTERED:               1,
      Z_HUFFMAN_ONLY:           2,
      Z_RLE:                    3,
      Z_FIXED:                  4,
      Z_DEFAULT_STRATEGY:       0,
    
      /* Possible values of the data_type field (though see inflate()) */
      Z_BINARY:                 0,
      Z_TEXT:                   1,
      //Z_ASCII:                1, // = Z_TEXT (deprecated)
      Z_UNKNOWN:                2,
    
      /* The deflate compression method */
      Z_DEFLATED:               8
      //Z_NULL:                 null // Use -1 or null inline, depending on var type
    };
    },{}],31:[function(_dereq_,module,exports){
    'use strict';
    
    // Note: we can't get significant speed boost here.
    // So write code to minimize size - no pregenerated tables
    // and array tools dependencies.
    
    
    // Use ordinary array, since untyped makes no boost here
    function makeTable() {
      var c, table = [];
    
      for(var n =0; n < 256; n++){
        c = n;
        for(var k =0; k < 8; k++){
          c = ((c&1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
        }
        table[n] = c;
      }
    
      return table;
    }
    
    // Create table on load. Just 255 signed longs. Not a problem.
    var crcTable = makeTable();
    
    
    function crc32(crc, buf, len, pos) {
      var t = crcTable
        , end = pos + len;
    
      crc = crc ^ (-1);
    
      for (var i = pos; i < end; i++ ) {
        crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 0xFF];
      }
    
      return (crc ^ (-1)); // >>> 0;
    }
    
    
    module.exports = crc32;
    },{}],32:[function(_dereq_,module,exports){
    'use strict';
    
    var utils   = _dereq_('../utils/common');
    var trees   = _dereq_('./trees');
    var adler32 = _dereq_('./adler32');
    var crc32   = _dereq_('./crc32');
    var msg   = _dereq_('./messages');
    
    /* Public constants ==========================================================*/
    /* ===========================================================================*/
    
    
    /* Allowed flush values; see deflate() and inflate() below for details */
    var Z_NO_FLUSH      = 0;
    var Z_PARTIAL_FLUSH = 1;
    //var Z_SYNC_FLUSH    = 2;
    var Z_FULL_FLUSH    = 3;
    var Z_FINISH        = 4;
    var Z_BLOCK         = 5;
    //var Z_TREES         = 6;
    
    
    /* Return codes for the compression/decompression functions. Negative values
     * are errors, positive values are used for special but normal events.
     */
    var Z_OK            = 0;
    var Z_STREAM_END    = 1;
    //var Z_NEED_DICT     = 2;
    //var Z_ERRNO         = -1;
    var Z_STREAM_ERROR  = -2;
    var Z_DATA_ERROR    = -3;
    //var Z_MEM_ERROR     = -4;
    var Z_BUF_ERROR     = -5;
    //var Z_VERSION_ERROR = -6;
    
    
    /* compression levels */
    //var Z_NO_COMPRESSION      = 0;
    //var Z_BEST_SPEED          = 1;
    //var Z_BEST_COMPRESSION    = 9;
    var Z_DEFAULT_COMPRESSION = -1;
    
    
    var Z_FILTERED            = 1;
    var Z_HUFFMAN_ONLY        = 2;
    var Z_RLE                 = 3;
    var Z_FIXED               = 4;
    var Z_DEFAULT_STRATEGY    = 0;
    
    /* Possible values of the data_type field (though see inflate()) */
    //var Z_BINARY              = 0;
    //var Z_TEXT                = 1;
    //var Z_ASCII               = 1; // = Z_TEXT
    var Z_UNKNOWN             = 2;
    
    
    /* The deflate compression method */
    var Z_DEFLATED  = 8;
    
    /*============================================================================*/
    
    
    var MAX_MEM_LEVEL = 9;
    /* Maximum value for memLevel in deflateInit2 */
    var MAX_WBITS = 15;
    /* 32K LZ77 window */
    var DEF_MEM_LEVEL = 8;
    
    
    var LENGTH_CODES  = 29;
    /* number of length codes, not counting the special END_BLOCK code */
    var LITERALS      = 256;
    /* number of literal bytes 0..255 */
    var L_CODES       = LITERALS + 1 + LENGTH_CODES;
    /* number of Literal or Length codes, including the END_BLOCK code */
    var D_CODES       = 30;
    /* number of distance codes */
    var BL_CODES      = 19;
    /* number of codes used to transfer the bit lengths */
    var HEAP_SIZE     = 2*L_CODES + 1;
    /* maximum heap size */
    var MAX_BITS  = 15;
    /* All codes must not exceed MAX_BITS bits */
    
    var MIN_MATCH = 3;
    var MAX_MATCH = 258;
    var MIN_LOOKAHEAD = (MAX_MATCH + MIN_MATCH + 1);
    
    var PRESET_DICT = 0x20;
    
    var INIT_STATE = 42;
    var EXTRA_STATE = 69;
    var NAME_STATE = 73;
    var COMMENT_STATE = 91;
    var HCRC_STATE = 103;
    var BUSY_STATE = 113;
    var FINISH_STATE = 666;
    
    var BS_NEED_MORE      = 1; /* block not completed, need more input or more output */
    var BS_BLOCK_DONE     = 2; /* block flush performed */
    var BS_FINISH_STARTED = 3; /* finish started, need only more output at next deflate */
    var BS_FINISH_DONE    = 4; /* finish done, accept no more input or output */
    
    var OS_CODE = 0x03; // Unix :) . Don't detect, use this default.
    
    function err(strm, errorCode) {
      strm.msg = msg[errorCode];
      return errorCode;
    }
    
    function rank(f) {
      return ((f) << 1) - ((f) > 4 ? 9 : 0);
    }
    
    function zero(buf) { var len = buf.length; while (--len >= 0) { buf[len] = 0; } }
    
    
    /* =========================================================================
     * Flush as much pending output as possible. All deflate() output goes
     * through this function so some applications may wish to modify it
     * to avoid allocating a large strm->output buffer and copying into it.
     * (See also read_buf()).
     */
    function flush_pending(strm) {
      var s = strm.state;
    
      //_tr_flush_bits(s);
      var len = s.pending;
      if (len > strm.avail_out) {
        len = strm.avail_out;
      }
      if (len === 0) { return; }
    
      utils.arraySet(strm.output, s.pending_buf, s.pending_out, len, strm.next_out);
      strm.next_out += len;
      s.pending_out += len;
      strm.total_out += len;
      strm.avail_out -= len;
      s.pending -= len;
      if (s.pending === 0) {
        s.pending_out = 0;
      }
    }
    
    
    function flush_block_only (s, last) {
      trees._tr_flush_block(s, (s.block_start >= 0 ? s.block_start : -1), s.strstart - s.block_start, last);
      s.block_start = s.strstart;
      flush_pending(s.strm);
    }
    
    
    function put_byte(s, b) {
      s.pending_buf[s.pending++] = b;
    }
    
    
    /* =========================================================================
     * Put a short in the pending buffer. The 16-bit value is put in MSB order.
     * IN assertion: the stream state is correct and there is enough room in
     * pending_buf.
     */
    function putShortMSB(s, b) {
    //  put_byte(s, (Byte)(b >> 8));
    //  put_byte(s, (Byte)(b & 0xff));
      s.pending_buf[s.pending++] = (b >>> 8) & 0xff;
      s.pending_buf[s.pending++] = b & 0xff;
    }
    
    
    /* ===========================================================================
     * Read a new buffer from the current input stream, update the adler32
     * and total number of bytes read.  All deflate() input goes through
     * this function so some applications may wish to modify it to avoid
     * allocating a large strm->input buffer and copying from it.
     * (See also flush_pending()).
     */
    function read_buf(strm, buf, start, size) {
      var len = strm.avail_in;
    
      if (len > size) { len = size; }
      if (len === 0) { return 0; }
    
      strm.avail_in -= len;
    
      utils.arraySet(buf, strm.input, strm.next_in, len, start);
      if (strm.state.wrap === 1) {
        strm.adler = adler32(strm.adler, buf, len, start);
      }
    
      else if (strm.state.wrap === 2) {
        strm.adler = crc32(strm.adler, buf, len, start);
      }
    
      strm.next_in += len;
      strm.total_in += len;
    
      return len;
    }
    
    
    /* ===========================================================================
     * Set match_start to the longest match starting at the given string and
     * return its length. Matches shorter or equal to prev_length are discarded,
     * in which case the result is equal to prev_length and match_start is
     * garbage.
     * IN assertions: cur_match is the head of the hash chain for the current
     *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
     * OUT assertion: the match length is not greater than s->lookahead.
     */
    function longest_match(s, cur_match) {
      var chain_length = s.max_chain_length;      /* max hash chain length */
      var scan = s.strstart; /* current string */
      var match;                       /* matched string */
      var len;                           /* length of current match */
      var best_len = s.prev_length;              /* best match length so far */
      var nice_match = s.nice_match;             /* stop if match long enough */
      var limit = (s.strstart > (s.w_size - MIN_LOOKAHEAD)) ?
          s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0/*NIL*/;
    
      var _win = s.window; // shortcut
    
      var wmask = s.w_mask;
      var prev  = s.prev;
    
      /* Stop when cur_match becomes <= limit. To simplify the code,
       * we prevent matches with the string of window index 0.
       */
    
      var strend = s.strstart + MAX_MATCH;
      var scan_end1  = _win[scan + best_len - 1];
      var scan_end   = _win[scan + best_len];
    
      /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
       * It is easy to get rid of this optimization if necessary.
       */
      // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");
    
      /* Do not waste too much time if we already have a good match: */
      if (s.prev_length >= s.good_match) {
        chain_length >>= 2;
      }
      /* Do not look for matches beyond the end of the input. This is necessary
       * to make deflate deterministic.
       */
      if (nice_match > s.lookahead) { nice_match = s.lookahead; }
    
      // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");
    
      do {
        // Assert(cur_match < s->strstart, "no future");
        match = cur_match;
    
        /* Skip to next match if the match length cannot increase
         * or if the match length is less than 2.  Note that the checks below
         * for insufficient lookahead only occur occasionally for performance
         * reasons.  Therefore uninitialized memory will be accessed, and
         * conditional jumps will be made that depend on those values.
         * However the length of the match is limited to the lookahead, so
         * the output of deflate is not affected by the uninitialized values.
         */
    
        if (_win[match + best_len]     !== scan_end  ||
            _win[match + best_len - 1] !== scan_end1 ||
            _win[match]                !== _win[scan] ||
            _win[++match]              !== _win[scan + 1]) {
          continue;
        }
    
        /* The check at best_len-1 can be removed because it will be made
         * again later. (This heuristic is not always a win.)
         * It is not necessary to compare scan[2] and match[2] since they
         * are always equal when the other bytes match, given that
         * the hash keys are equal and that HASH_BITS >= 8.
         */
        scan += 2;
        match++;
        // Assert(*scan == *match, "match[2]?");
    
        /* We check for insufficient lookahead only every 8th comparison;
         * the 256th check will be made at strstart+258.
         */
        do {
          /*jshint noempty:false*/
        } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
                 _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
                 _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
                 _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
                 scan < strend);
    
        // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");
    
        len = MAX_MATCH - (strend - scan);
        scan = strend - MAX_MATCH;
    
        if (len > best_len) {
          s.match_start = cur_match;
          best_len = len;
          if (len >= nice_match) {
            break;
          }
          scan_end1  = _win[scan + best_len - 1];
          scan_end   = _win[scan + best_len];
        }
      } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);
    
      if (best_len <= s.lookahead) {
        return best_len;
      }
      return s.lookahead;
    }
    
    
    /* ===========================================================================
     * Fill the window when the lookahead becomes insufficient.
     * Updates strstart and lookahead.
     *
     * IN assertion: lookahead < MIN_LOOKAHEAD
     * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
     *    At least one byte has been read, or avail_in == 0; reads are
     *    performed for at least two bytes (required for the zip translate_eol
     *    option -- not supported here).
     */
    function fill_window(s) {
      var _w_size = s.w_size;
      var p, n, m, more, str;
    
      //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");
    
      do {
        more = s.window_size - s.lookahead - s.strstart;
    
        // JS ints have 32 bit, block below not needed
        /* Deal with !@#$% 64K limit: */
        //if (sizeof(int) <= 2) {
        //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
        //        more = wsize;
        //
        //  } else if (more == (unsigned)(-1)) {
        //        /* Very unlikely, but possible on 16 bit machine if
        //         * strstart == 0 && lookahead == 1 (input done a byte at time)
        //         */
        //        more--;
        //    }
        //}
    
    
        /* If the window is almost full and there is insufficient lookahead,
         * move the upper half to the lower one to make room in the upper half.
         */
        if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {
    
          utils.arraySet(s.window, s.window, _w_size, _w_size, 0);
          s.match_start -= _w_size;
          s.strstart -= _w_size;
          /* we now have strstart >= MAX_DIST */
          s.block_start -= _w_size;
    
          /* Slide the hash table (could be avoided with 32 bit values
           at the expense of memory usage). We slide even when level == 0
           to keep the hash table consistent if we switch back to level > 0
           later. (Using level 0 permanently is not an optimal usage of
           zlib, so we don't care about this pathological case.)
           */
    
          n = s.hash_size;
          p = n;
          do {
            m = s.head[--p];
            s.head[p] = (m >= _w_size ? m - _w_size : 0);
          } while (--n);
    
          n = _w_size;
          p = n;
          do {
            m = s.prev[--p];
            s.prev[p] = (m >= _w_size ? m - _w_size : 0);
            /* If n is not on any hash chain, prev[n] is garbage but
             * its value will never be used.
             */
          } while (--n);
    
          more += _w_size;
        }
        if (s.strm.avail_in === 0) {
          break;
        }
    
        /* If there was no sliding:
         *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
         *    more == window_size - lookahead - strstart
         * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
         * => more >= window_size - 2*WSIZE + 2
         * In the BIG_MEM or MMAP case (not yet supported),
         *   window_size == input_size + MIN_LOOKAHEAD  &&
         *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
         * Otherwise, window_size == 2*WSIZE so more >= 2.
         * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
         */
        //Assert(more >= 2, "more < 2");
        n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
        s.lookahead += n;
    
        /* Initialize the hash value now that we have some input: */
        if (s.lookahead + s.insert >= MIN_MATCH) {
          str = s.strstart - s.insert;
          s.ins_h = s.window[str];
    
          /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */
          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + 1]) & s.hash_mask;
    //#if MIN_MATCH != 3
    //        Call update_hash() MIN_MATCH-3 more times
    //#endif
          while (s.insert) {
            /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
            s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + MIN_MATCH-1]) & s.hash_mask;
    
            s.prev[str & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = str;
            str++;
            s.insert--;
            if (s.lookahead + s.insert < MIN_MATCH) {
              break;
            }
          }
        }
        /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
         * but this is not important since only literal bytes will be emitted.
         */
    
      } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);
    
      /* If the WIN_INIT bytes after the end of the current data have never been
       * written, then zero those bytes in order to avoid memory check reports of
       * the use of uninitialized (or uninitialised as Julian writes) bytes by
       * the longest match routines.  Update the high water mark for the next
       * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
       * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
       */
    //  if (s.high_water < s.window_size) {
    //    var curr = s.strstart + s.lookahead;
    //    var init = 0;
    //
    //    if (s.high_water < curr) {
    //      /* Previous high water mark below current data -- zero WIN_INIT
    //       * bytes or up to end of window, whichever is less.
    //       */
    //      init = s.window_size - curr;
    //      if (init > WIN_INIT)
    //        init = WIN_INIT;
    //      zmemzero(s->window + curr, (unsigned)init);
    //      s->high_water = curr + init;
    //    }
    //    else if (s->high_water < (ulg)curr + WIN_INIT) {
    //      /* High water mark at or above current data, but below current data
    //       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
    //       * to end of window, whichever is less.
    //       */
    //      init = (ulg)curr + WIN_INIT - s->high_water;
    //      if (init > s->window_size - s->high_water)
    //        init = s->window_size - s->high_water;
    //      zmemzero(s->window + s->high_water, (unsigned)init);
    //      s->high_water += init;
    //    }
    //  }
    //
    //  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
    //    "not enough room for search");
    }
    
    /* ===========================================================================
     * Copy without compression as much as possible from the input stream, return
     * the current block state.
     * This function does not insert new strings in the dictionary since
     * uncompressible data is probably not useful. This function is used
     * only for the level=0 compression option.
     * NOTE: this function should be optimized to avoid extra copying from
     * window to pending_buf.
     */
    function deflate_stored(s, flush) {
      /* Stored blocks are limited to 0xffff bytes, pending_buf is limited
       * to pending_buf_size, and each stored block has a 5 byte header:
       */
      var max_block_size = 0xffff;
    
      if (max_block_size > s.pending_buf_size - 5) {
        max_block_size = s.pending_buf_size - 5;
      }
    
      /* Copy as much as possible from input to output: */
      for (;;) {
        /* Fill the window as much as possible: */
        if (s.lookahead <= 1) {
    
          //Assert(s->strstart < s->w_size+MAX_DIST(s) ||
          //  s->block_start >= (long)s->w_size, "slide too late");
    //      if (!(s.strstart < s.w_size + (s.w_size - MIN_LOOKAHEAD) ||
    //        s.block_start >= s.w_size)) {
    //        throw  new Error("slide too late");
    //      }
    
          fill_window(s);
          if (s.lookahead === 0 && flush === Z_NO_FLUSH) {
            return BS_NEED_MORE;
          }
    
          if (s.lookahead === 0) {
            break;
          }
          /* flush the current block */
        }
        //Assert(s->block_start >= 0L, "block gone");
    //    if (s.block_start < 0) throw new Error("block gone");
    
        s.strstart += s.lookahead;
        s.lookahead = 0;
    
        /* Emit a stored block if pending_buf will be full: */
        var max_start = s.block_start + max_block_size;
    
        if (s.strstart === 0 || s.strstart >= max_start) {
          /* strstart == 0 is possible when wraparound on 16-bit machine */
          s.lookahead = s.strstart - max_start;
          s.strstart = max_start;
          /*** FLUSH_BLOCK(s, 0); ***/
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
          /***/
    
    
        }
        /* Flush if we may have to slide, otherwise block_start may become
         * negative and the data will be gone:
         */
        if (s.strstart - s.block_start >= (s.w_size - MIN_LOOKAHEAD)) {
          /*** FLUSH_BLOCK(s, 0); ***/
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
          /***/
        }
      }
    
      s.insert = 0;
    
      if (flush === Z_FINISH) {
        /*** FLUSH_BLOCK(s, 1); ***/
        flush_block_only(s, true);
        if (s.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        /***/
        return BS_FINISH_DONE;
      }
    
      if (s.strstart > s.block_start) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/
      }
    
      return BS_NEED_MORE;
    }
    
    /* ===========================================================================
     * Compress as much as possible from the input stream, return the current
     * block state.
     * This function does not perform lazy evaluation of matches and inserts
     * new strings in the dictionary only for unmatched strings or for short
     * matches. It is used only for the fast compression options.
     */
    function deflate_fast(s, flush) {
      var hash_head;        /* head of the hash chain */
      var bflush;           /* set if current block must be flushed */
    
      for (;;) {
        /* Make sure that we always have enough lookahead, except
         * at the end of the input file. We need MAX_MATCH bytes
         * for the next match, plus MIN_MATCH bytes to insert the
         * string following the next match.
         */
        if (s.lookahead < MIN_LOOKAHEAD) {
          fill_window(s);
          if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
            return BS_NEED_MORE;
          }
          if (s.lookahead === 0) {
            break; /* flush the current block */
          }
        }
    
        /* Insert the string window[strstart .. strstart+2] in the
         * dictionary, and set hash_head to the head of the hash chain:
         */
        hash_head = 0/*NIL*/;
        if (s.lookahead >= MIN_MATCH) {
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
        }
    
        /* Find the longest match, discarding those <= prev_length.
         * At this point we have always match_length < MIN_MATCH
         */
        if (hash_head !== 0/*NIL*/ && ((s.strstart - hash_head) <= (s.w_size - MIN_LOOKAHEAD))) {
          /* To simplify the code, we prevent matches with the string
           * of window index 0 (in particular we have to avoid a match
           * of the string with itself at the start of the input file).
           */
          s.match_length = longest_match(s, hash_head);
          /* longest_match() sets match_start */
        }
        if (s.match_length >= MIN_MATCH) {
          // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only
    
          /*** _tr_tally_dist(s, s.strstart - s.match_start,
                         s.match_length - MIN_MATCH, bflush); ***/
          bflush = trees._tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);
    
          s.lookahead -= s.match_length;
    
          /* Insert new strings in the hash table only if the match length
           * is not too large. This saves time but degrades compression.
           */
          if (s.match_length <= s.max_lazy_match/*max_insert_length*/ && s.lookahead >= MIN_MATCH) {
            s.match_length--; /* string at strstart already in table */
            do {
              s.strstart++;
              /*** INSERT_STRING(s, s.strstart, hash_head); ***/
              s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
              hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
              s.head[s.ins_h] = s.strstart;
              /***/
              /* strstart never exceeds WSIZE-MAX_MATCH, so there are
               * always MIN_MATCH bytes ahead.
               */
            } while (--s.match_length !== 0);
            s.strstart++;
          } else
          {
            s.strstart += s.match_length;
            s.match_length = 0;
            s.ins_h = s.window[s.strstart];
            /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */
            s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + 1]) & s.hash_mask;
    
    //#if MIN_MATCH != 3
    //                Call UPDATE_HASH() MIN_MATCH-3 more times
    //#endif
            /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
             * matter since it will be recomputed at next deflate call.
             */
          }
        } else {
          /* No match, output a literal byte */
          //Tracevv((stderr,"%c", s.window[s.strstart]));
          /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
          bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
    
          s.lookahead--;
          s.strstart++;
        }
        if (bflush) {
          /*** FLUSH_BLOCK(s, 0); ***/
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
          /***/
        }
      }
      s.insert = ((s.strstart < (MIN_MATCH-1)) ? s.strstart : MIN_MATCH-1);
      if (flush === Z_FINISH) {
        /*** FLUSH_BLOCK(s, 1); ***/
        flush_block_only(s, true);
        if (s.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        /***/
        return BS_FINISH_DONE;
      }
      if (s.last_lit) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/
      }
      return BS_BLOCK_DONE;
    }
    
    /* ===========================================================================
     * Same as above, but achieves better compression. We use a lazy
     * evaluation for matches: a match is finally adopted only if there is
     * no better match at the next window position.
     */
    function deflate_slow(s, flush) {
      var hash_head;          /* head of hash chain */
      var bflush;              /* set if current block must be flushed */
    
      var max_insert;
    
      /* Process the input block. */
      for (;;) {
        /* Make sure that we always have enough lookahead, except
         * at the end of the input file. We need MAX_MATCH bytes
         * for the next match, plus MIN_MATCH bytes to insert the
         * string following the next match.
         */
        if (s.lookahead < MIN_LOOKAHEAD) {
          fill_window(s);
          if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
            return BS_NEED_MORE;
          }
          if (s.lookahead === 0) { break; } /* flush the current block */
        }
    
        /* Insert the string window[strstart .. strstart+2] in the
         * dictionary, and set hash_head to the head of the hash chain:
         */
        hash_head = 0/*NIL*/;
        if (s.lookahead >= MIN_MATCH) {
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
        }
    
        /* Find the longest match, discarding those <= prev_length.
         */
        s.prev_length = s.match_length;
        s.prev_match = s.match_start;
        s.match_length = MIN_MATCH-1;
    
        if (hash_head !== 0/*NIL*/ && s.prev_length < s.max_lazy_match &&
            s.strstart - hash_head <= (s.w_size-MIN_LOOKAHEAD)/*MAX_DIST(s)*/) {
          /* To simplify the code, we prevent matches with the string
           * of window index 0 (in particular we have to avoid a match
           * of the string with itself at the start of the input file).
           */
          s.match_length = longest_match(s, hash_head);
          /* longest_match() sets match_start */
    
          if (s.match_length <= 5 &&
             (s.strategy === Z_FILTERED || (s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096/*TOO_FAR*/))) {
    
            /* If prev_match is also MIN_MATCH, match_start is garbage
             * but we will ignore the current match anyway.
             */
            s.match_length = MIN_MATCH-1;
          }
        }
        /* If there was a match at the previous step and the current
         * match is not better, output the previous match:
         */
        if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
          max_insert = s.strstart + s.lookahead - MIN_MATCH;
          /* Do not insert strings in hash table beyond this. */
    
          //check_match(s, s.strstart-1, s.prev_match, s.prev_length);
    
          /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                         s.prev_length - MIN_MATCH, bflush);***/
          bflush = trees._tr_tally(s, s.strstart - 1- s.prev_match, s.prev_length - MIN_MATCH);
          /* Insert in hash table all strings up to the end of the match.
           * strstart-1 and strstart are already inserted. If there is not
           * enough lookahead, the last two strings are not inserted in
           * the hash table.
           */
          s.lookahead -= s.prev_length-1;
          s.prev_length -= 2;
          do {
            if (++s.strstart <= max_insert) {
              /*** INSERT_STRING(s, s.strstart, hash_head); ***/
              s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
              hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
              s.head[s.ins_h] = s.strstart;
              /***/
            }
          } while (--s.prev_length !== 0);
          s.match_available = 0;
          s.match_length = MIN_MATCH-1;
          s.strstart++;
    
          if (bflush) {
            /*** FLUSH_BLOCK(s, 0); ***/
            flush_block_only(s, false);
            if (s.strm.avail_out === 0) {
              return BS_NEED_MORE;
            }
            /***/
          }
    
        } else if (s.match_available) {
          /* If there was no match at the previous position, output a
           * single literal. If there was a match but the current match
           * is longer, truncate the previous match to a single literal.
           */
          //Tracevv((stderr,"%c", s->window[s->strstart-1]));
          /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
          bflush = trees._tr_tally(s, 0, s.window[s.strstart-1]);
    
          if (bflush) {
            /*** FLUSH_BLOCK_ONLY(s, 0) ***/
            flush_block_only(s, false);
            /***/
          }
          s.strstart++;
          s.lookahead--;
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        } else {
          /* There is no previous match to compare with, wait for
           * the next step to decide.
           */
          s.match_available = 1;
          s.strstart++;
          s.lookahead--;
        }
      }
      //Assert (flush != Z_NO_FLUSH, "no flush?");
      if (s.match_available) {
        //Tracevv((stderr,"%c", s->window[s->strstart-1]));
        /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
        bflush = trees._tr_tally(s, 0, s.window[s.strstart-1]);
    
        s.match_available = 0;
      }
      s.insert = s.strstart < MIN_MATCH-1 ? s.strstart : MIN_MATCH-1;
      if (flush === Z_FINISH) {
        /*** FLUSH_BLOCK(s, 1); ***/
        flush_block_only(s, true);
        if (s.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        /***/
        return BS_FINISH_DONE;
      }
      if (s.last_lit) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/
      }
    
      return BS_BLOCK_DONE;
    }
    
    
    /* ===========================================================================
     * For Z_RLE, simply look for runs of bytes, generate matches only of distance
     * one.  Do not maintain a hash table.  (It will be regenerated if this run of
     * deflate switches away from Z_RLE.)
     */
    function deflate_rle(s, flush) {
      var bflush;            /* set if current block must be flushed */
      var prev;              /* byte at distance one to match */
      var scan, strend;      /* scan goes up to strend for length of run */
    
      var _win = s.window;
    
      for (;;) {
        /* Make sure that we always have enough lookahead, except
         * at the end of the input file. We need MAX_MATCH bytes
         * for the longest run, plus one for the unrolled loop.
         */
        if (s.lookahead <= MAX_MATCH) {
          fill_window(s);
          if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH) {
            return BS_NEED_MORE;
          }
          if (s.lookahead === 0) { break; } /* flush the current block */
        }
    
        /* See how many times the previous byte repeats */
        s.match_length = 0;
        if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
          scan = s.strstart - 1;
          prev = _win[scan];
          if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
            strend = s.strstart + MAX_MATCH;
            do {
              /*jshint noempty:false*/
            } while (prev === _win[++scan] && prev === _win[++scan] &&
                     prev === _win[++scan] && prev === _win[++scan] &&
                     prev === _win[++scan] && prev === _win[++scan] &&
                     prev === _win[++scan] && prev === _win[++scan] &&
                     scan < strend);
            s.match_length = MAX_MATCH - (strend - scan);
            if (s.match_length > s.lookahead) {
              s.match_length = s.lookahead;
            }
          }
          //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");
        }
    
        /* Emit match if have run of MIN_MATCH or longer, else emit literal */
        if (s.match_length >= MIN_MATCH) {
          //check_match(s, s.strstart, s.strstart - 1, s.match_length);
    
          /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/
          bflush = trees._tr_tally(s, 1, s.match_length - MIN_MATCH);
    
          s.lookahead -= s.match_length;
          s.strstart += s.match_length;
          s.match_length = 0;
        } else {
          /* No match, output a literal byte */
          //Tracevv((stderr,"%c", s->window[s->strstart]));
          /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
          bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
    
          s.lookahead--;
          s.strstart++;
        }
        if (bflush) {
          /*** FLUSH_BLOCK(s, 0); ***/
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
          /***/
        }
      }
      s.insert = 0;
      if (flush === Z_FINISH) {
        /*** FLUSH_BLOCK(s, 1); ***/
        flush_block_only(s, true);
        if (s.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        /***/
        return BS_FINISH_DONE;
      }
      if (s.last_lit) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/
      }
      return BS_BLOCK_DONE;
    }
    
    /* ===========================================================================
     * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
     * (It will be regenerated if this run of deflate switches away from Huffman.)
     */
    function deflate_huff(s, flush) {
      var bflush;             /* set if current block must be flushed */
    
      for (;;) {
        /* Make sure that we have a literal to write. */
        if (s.lookahead === 0) {
          fill_window(s);
          if (s.lookahead === 0) {
            if (flush === Z_NO_FLUSH) {
              return BS_NEED_MORE;
            }
            break;      /* flush the current block */
          }
        }
    
        /* Output a literal byte */
        s.match_length = 0;
        //Tracevv((stderr,"%c", s->window[s->strstart]));
        /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
        bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
        s.lookahead--;
        s.strstart++;
        if (bflush) {
          /*** FLUSH_BLOCK(s, 0); ***/
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
          /***/
        }
      }
      s.insert = 0;
      if (flush === Z_FINISH) {
        /*** FLUSH_BLOCK(s, 1); ***/
        flush_block_only(s, true);
        if (s.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        /***/
        return BS_FINISH_DONE;
      }
      if (s.last_lit) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/
      }
      return BS_BLOCK_DONE;
    }
    
    /* Values for max_lazy_match, good_match and max_chain_length, depending on
     * the desired pack level (0..9). The values given below have been tuned to
     * exclude worst case performance for pathological files. Better values may be
     * found for specific files.
     */
    var Config = function (good_length, max_lazy, nice_length, max_chain, func) {
      this.good_length = good_length;
      this.max_lazy = max_lazy;
      this.nice_length = nice_length;
      this.max_chain = max_chain;
      this.func = func;
    };
    
    var configuration_table;
    
    configuration_table = [
      /*      good lazy nice chain */
      new Config(0, 0, 0, 0, deflate_stored),          /* 0 store only */
      new Config(4, 4, 8, 4, deflate_fast),            /* 1 max speed, no lazy matches */
      new Config(4, 5, 16, 8, deflate_fast),           /* 2 */
      new Config(4, 6, 32, 32, deflate_fast),          /* 3 */
    
      new Config(4, 4, 16, 16, deflate_slow),          /* 4 lazy matches */
      new Config(8, 16, 32, 32, deflate_slow),         /* 5 */
      new Config(8, 16, 128, 128, deflate_slow),       /* 6 */
      new Config(8, 32, 128, 256, deflate_slow),       /* 7 */
      new Config(32, 128, 258, 1024, deflate_slow),    /* 8 */
      new Config(32, 258, 258, 4096, deflate_slow)     /* 9 max compression */
    ];
    
    
    /* ===========================================================================
     * Initialize the "longest match" routines for a new zlib stream
     */
    function lm_init(s) {
      s.window_size = 2 * s.w_size;
    
      /*** CLEAR_HASH(s); ***/
      zero(s.head); // Fill with NIL (= 0);
    
      /* Set the default configuration parameters:
       */
      s.max_lazy_match = configuration_table[s.level].max_lazy;
      s.good_match = configuration_table[s.level].good_length;
      s.nice_match = configuration_table[s.level].nice_length;
      s.max_chain_length = configuration_table[s.level].max_chain;
    
      s.strstart = 0;
      s.block_start = 0;
      s.lookahead = 0;
      s.insert = 0;
      s.match_length = s.prev_length = MIN_MATCH - 1;
      s.match_available = 0;
      s.ins_h = 0;
    }
    
    
    function DeflateState() {
      this.strm = null;            /* pointer back to this zlib stream */
      this.status = 0;            /* as the name implies */
      this.pending_buf = null;      /* output still pending */
      this.pending_buf_size = 0;  /* size of pending_buf */
      this.pending_out = 0;       /* next pending byte to output to the stream */
      this.pending = 0;           /* nb of bytes in the pending buffer */
      this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
      this.gzhead = null;         /* gzip header information to write */
      this.gzindex = 0;           /* where in extra, name, or comment */
      this.method = Z_DEFLATED; /* can only be DEFLATED */
      this.last_flush = -1;   /* value of flush param for previous deflate call */
    
      this.w_size = 0;  /* LZ77 window size (32K by default) */
      this.w_bits = 0;  /* log2(w_size)  (8..16) */
      this.w_mask = 0;  /* w_size - 1 */
    
      this.window = null;
      /* Sliding window. Input bytes are read into the second half of the window,
       * and move to the first half later to keep a dictionary of at least wSize
       * bytes. With this organization, matches are limited to a distance of
       * wSize-MAX_MATCH bytes, but this ensures that IO is always
       * performed with a length multiple of the block size.
       */
    
      this.window_size = 0;
      /* Actual size of window: 2*wSize, except when the user input buffer
       * is directly used as sliding window.
       */
    
      this.prev = null;
      /* Link to older string with same hash index. To limit the size of this
       * array to 64K, this link is maintained only for the last 32K strings.
       * An index in this array is thus a window index modulo 32K.
       */
    
      this.head = null;   /* Heads of the hash chains or NIL. */
    
      this.ins_h = 0;       /* hash index of string to be inserted */
      this.hash_size = 0;   /* number of elements in hash table */
      this.hash_bits = 0;   /* log2(hash_size) */
      this.hash_mask = 0;   /* hash_size-1 */
    
      this.hash_shift = 0;
      /* Number of bits by which ins_h must be shifted at each input
       * step. It must be such that after MIN_MATCH steps, the oldest
       * byte no longer takes part in the hash key, that is:
       *   hash_shift * MIN_MATCH >= hash_bits
       */
    
      this.block_start = 0;
      /* Window position at the beginning of the current output block. Gets
       * negative when the window is moved backwards.
       */
    
      this.match_length = 0;      /* length of best match */
      this.prev_match = 0;        /* previous match */
      this.match_available = 0;   /* set if previous match exists */
      this.strstart = 0;          /* start of string to insert */
      this.match_start = 0;       /* start of matching string */
      this.lookahead = 0;         /* number of valid bytes ahead in window */
    
      this.prev_length = 0;
      /* Length of the best match at previous step. Matches not greater than this
       * are discarded. This is used in the lazy match evaluation.
       */
    
      this.max_chain_length = 0;
      /* To speed up deflation, hash chains are never searched beyond this
       * length.  A higher limit improves compression ratio but degrades the
       * speed.
       */
    
      this.max_lazy_match = 0;
      /* Attempt to find a better match only when the current match is strictly
       * smaller than this value. This mechanism is used only for compression
       * levels >= 4.
       */
      // That's alias to max_lazy_match, don't use directly
      //this.max_insert_length = 0;
      /* Insert new strings in the hash table only if the match length is not
       * greater than this length. This saves time but degrades compression.
       * max_insert_length is used only for compression levels <= 3.
       */
    
      this.level = 0;     /* compression level (1..9) */
      this.strategy = 0;  /* favor or force Huffman coding*/
    
      this.good_match = 0;
      /* Use a faster search when the previous match is longer than this */
    
      this.nice_match = 0; /* Stop searching when current match exceeds this */
    
                  /* used by trees.c: */
    
      /* Didn't use ct_data typedef below to suppress compiler warning */
    
      // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
      // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
      // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */
    
      // Use flat array of DOUBLE size, with interleaved fata,
      // because JS does not support effective
      this.dyn_ltree  = new utils.Buf16(HEAP_SIZE * 2);
      this.dyn_dtree  = new utils.Buf16((2*D_CODES+1) * 2);
      this.bl_tree    = new utils.Buf16((2*BL_CODES+1) * 2);
      zero(this.dyn_ltree);
      zero(this.dyn_dtree);
      zero(this.bl_tree);
    
      this.l_desc   = null;         /* desc. for literal tree */
      this.d_desc   = null;         /* desc. for distance tree */
      this.bl_desc  = null;         /* desc. for bit length tree */
    
      //ush bl_count[MAX_BITS+1];
      this.bl_count = new utils.Buf16(MAX_BITS+1);
      /* number of codes at each bit length for an optimal tree */
    
      //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
      this.heap = new utils.Buf16(2*L_CODES+1);  /* heap used to build the Huffman trees */
      zero(this.heap);
    
      this.heap_len = 0;               /* number of elements in the heap */
      this.heap_max = 0;               /* element of largest frequency */
      /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
       * The same heap array is used to build all trees.
       */
    
      this.depth = new utils.Buf16(2*L_CODES+1); //uch depth[2*L_CODES+1];
      zero(this.depth);
      /* Depth of each subtree used as tie breaker for trees of equal frequency
       */
    
      this.l_buf = 0;          /* buffer index for literals or lengths */
    
      this.lit_bufsize = 0;
      /* Size of match buffer for literals/lengths.  There are 4 reasons for
       * limiting lit_bufsize to 64K:
       *   - frequencies can be kept in 16 bit counters
       *   - if compression is not successful for the first block, all input
       *     data is still in the window so we can still emit a stored block even
       *     when input comes from standard input.  (This can also be done for
       *     all blocks if lit_bufsize is not greater than 32K.)
       *   - if compression is not successful for a file smaller than 64K, we can
       *     even emit a stored file instead of a stored block (saving 5 bytes).
       *     This is applicable only for zip (not gzip or zlib).
       *   - creating new Huffman trees less frequently may not provide fast
       *     adaptation to changes in the input data statistics. (Take for
       *     example a binary file with poorly compressible code followed by
       *     a highly compressible string table.) Smaller buffer sizes give
       *     fast adaptation but have of course the overhead of transmitting
       *     trees more frequently.
       *   - I can't count above 4
       */
    
      this.last_lit = 0;      /* running index in l_buf */
    
      this.d_buf = 0;
      /* Buffer index for distances. To simplify the code, d_buf and l_buf have
       * the same number of elements. To use different lengths, an extra flag
       * array would be necessary.
       */
    
      this.opt_len = 0;       /* bit length of current block with optimal trees */
      this.static_len = 0;    /* bit length of current block with static trees */
      this.matches = 0;       /* number of string matches in current block */
      this.insert = 0;        /* bytes at end of window left to insert */
    
    
      this.bi_buf = 0;
      /* Output buffer. bits are inserted starting at the bottom (least
       * significant bits).
       */
      this.bi_valid = 0;
      /* Number of valid bits in bi_buf.  All bits above the last valid bit
       * are always zero.
       */
    
      // Used for window memory init. We safely ignore it for JS. That makes
      // sense only for pointers and memory check tools.
      //this.high_water = 0;
      /* High water mark offset in window for initialized bytes -- bytes above
       * this are set to zero in order to avoid memory check warnings when
       * longest match routines access bytes past the input.  This is then
       * updated to the new high water mark.
       */
    }
    
    
    function deflateResetKeep(strm) {
      var s;
    
      if (!strm || !strm.state) {
        return err(strm, Z_STREAM_ERROR);
      }
    
      strm.total_in = strm.total_out = 0;
      strm.data_type = Z_UNKNOWN;
    
      s = strm.state;
      s.pending = 0;
      s.pending_out = 0;
    
      if (s.wrap < 0) {
        s.wrap = -s.wrap;
        /* was made negative by deflate(..., Z_FINISH); */
      }
      s.status = (s.wrap ? INIT_STATE : BUSY_STATE);
      strm.adler = (s.wrap === 2) ?
        0  // crc32(0, Z_NULL, 0)
      :
        1; // adler32(0, Z_NULL, 0)
      s.last_flush = Z_NO_FLUSH;
      trees._tr_init(s);
      return Z_OK;
    }
    
    
    function deflateReset(strm) {
      var ret = deflateResetKeep(strm);
      if (ret === Z_OK) {
        lm_init(strm.state);
      }
      return ret;
    }
    
    
    function deflateSetHeader(strm, head) {
      if (!strm || !strm.state) { return Z_STREAM_ERROR; }
      if (strm.state.wrap !== 2) { return Z_STREAM_ERROR; }
      strm.state.gzhead = head;
      return Z_OK;
    }
    
    
    function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
      if (!strm) { // === Z_NULL
        return Z_STREAM_ERROR;
      }
      var wrap = 1;
    
      if (level === Z_DEFAULT_COMPRESSION) {
        level = 6;
      }
    
      if (windowBits < 0) { /* suppress zlib wrapper */
        wrap = 0;
        windowBits = -windowBits;
      }
    
      else if (windowBits > 15) {
        wrap = 2;           /* write gzip wrapper instead */
        windowBits -= 16;
      }
    
    
      if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED ||
        windowBits < 8 || windowBits > 15 || level < 0 || level > 9 ||
        strategy < 0 || strategy > Z_FIXED) {
        return err(strm, Z_STREAM_ERROR);
      }
    
    
      if (windowBits === 8) {
        windowBits = 9;
      }
      /* until 256-byte window bug fixed */
    
      var s = new DeflateState();
    
      strm.state = s;
      s.strm = strm;
    
      s.wrap = wrap;
      s.gzhead = null;
      s.w_bits = windowBits;
      s.w_size = 1 << s.w_bits;
      s.w_mask = s.w_size - 1;
    
      s.hash_bits = memLevel + 7;
      s.hash_size = 1 << s.hash_bits;
      s.hash_mask = s.hash_size - 1;
      s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);
    
      s.window = new utils.Buf8(s.w_size * 2);
      s.head = new utils.Buf16(s.hash_size);
      s.prev = new utils.Buf16(s.w_size);
    
      // Don't need mem init magic for JS.
      //s.high_water = 0;  /* nothing written to s->window yet */
    
      s.lit_bufsize = 1 << (memLevel + 6); /* 16K elements by default */
    
      s.pending_buf_size = s.lit_bufsize * 4;
      s.pending_buf = new utils.Buf8(s.pending_buf_size);
    
      s.d_buf = s.lit_bufsize >> 1;
      s.l_buf = (1 + 2) * s.lit_bufsize;
    
      s.level = level;
      s.strategy = strategy;
      s.method = method;
    
      return deflateReset(strm);
    }
    
    function deflateInit(strm, level) {
      return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
    }
    
    
    function deflate(strm, flush) {
      var old_flush, s;
      var beg, val; // for gzip header write only
    
      if (!strm || !strm.state ||
        flush > Z_BLOCK || flush < 0) {
        return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
      }
    
      s = strm.state;
    
      if (!strm.output ||
          (!strm.input && strm.avail_in !== 0) ||
          (s.status === FINISH_STATE && flush !== Z_FINISH)) {
        return err(strm, (strm.avail_out === 0) ? Z_BUF_ERROR : Z_STREAM_ERROR);
      }
    
      s.strm = strm; /* just in case */
      old_flush = s.last_flush;
      s.last_flush = flush;
    
      /* Write the header */
      if (s.status === INIT_STATE) {
    
        if (s.wrap === 2) { // GZIP header
          strm.adler = 0;  //crc32(0L, Z_NULL, 0);
          put_byte(s, 31);
          put_byte(s, 139);
          put_byte(s, 8);
          if (!s.gzhead) { // s->gzhead == Z_NULL
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, s.level === 9 ? 2 :
                        (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                         4 : 0));
            put_byte(s, OS_CODE);
            s.status = BUSY_STATE;
          }
          else {
            put_byte(s, (s.gzhead.text ? 1 : 0) +
                        (s.gzhead.hcrc ? 2 : 0) +
                        (!s.gzhead.extra ? 0 : 4) +
                        (!s.gzhead.name ? 0 : 8) +
                        (!s.gzhead.comment ? 0 : 16)
                    );
            put_byte(s, s.gzhead.time & 0xff);
            put_byte(s, (s.gzhead.time >> 8) & 0xff);
            put_byte(s, (s.gzhead.time >> 16) & 0xff);
            put_byte(s, (s.gzhead.time >> 24) & 0xff);
            put_byte(s, s.level === 9 ? 2 :
                        (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                         4 : 0));
            put_byte(s, s.gzhead.os & 0xff);
            if (s.gzhead.extra && s.gzhead.extra.length) {
              put_byte(s, s.gzhead.extra.length & 0xff);
              put_byte(s, (s.gzhead.extra.length >> 8) & 0xff);
            }
            if (s.gzhead.hcrc) {
              strm.adler = crc32(strm.adler, s.pending_buf, s.pending, 0);
            }
            s.gzindex = 0;
            s.status = EXTRA_STATE;
          }
        }
        else // DEFLATE header
        {
          var header = (Z_DEFLATED + ((s.w_bits - 8) << 4)) << 8;
          var level_flags = -1;
    
          if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
            level_flags = 0;
          } else if (s.level < 6) {
            level_flags = 1;
          } else if (s.level === 6) {
            level_flags = 2;
          } else {
            level_flags = 3;
          }
          header |= (level_flags << 6);
          if (s.strstart !== 0) { header |= PRESET_DICT; }
          header += 31 - (header % 31);
    
          s.status = BUSY_STATE;
          putShortMSB(s, header);
    
          /* Save the adler32 of the preset dictionary: */
          if (s.strstart !== 0) {
            putShortMSB(s, strm.adler >>> 16);
            putShortMSB(s, strm.adler & 0xffff);
          }
          strm.adler = 1; // adler32(0L, Z_NULL, 0);
        }
      }
    
    //#ifdef GZIP
      if (s.status === EXTRA_STATE) {
        if (s.gzhead.extra/* != Z_NULL*/) {
          beg = s.pending;  /* start of bytes to update crc */
    
          while (s.gzindex < (s.gzhead.extra.length & 0xffff)) {
            if (s.pending === s.pending_buf_size) {
              if (s.gzhead.hcrc && s.pending > beg) {
                strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
              }
              flush_pending(strm);
              beg = s.pending;
              if (s.pending === s.pending_buf_size) {
                break;
              }
            }
            put_byte(s, s.gzhead.extra[s.gzindex] & 0xff);
            s.gzindex++;
          }
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          if (s.gzindex === s.gzhead.extra.length) {
            s.gzindex = 0;
            s.status = NAME_STATE;
          }
        }
        else {
          s.status = NAME_STATE;
        }
      }
      if (s.status === NAME_STATE) {
        if (s.gzhead.name/* != Z_NULL*/) {
          beg = s.pending;  /* start of bytes to update crc */
          //int val;
    
          do {
            if (s.pending === s.pending_buf_size) {
              if (s.gzhead.hcrc && s.pending > beg) {
                strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
              }
              flush_pending(strm);
              beg = s.pending;
              if (s.pending === s.pending_buf_size) {
                val = 1;
                break;
              }
            }
            // JS specific: little magic to add zero terminator to end of string
            if (s.gzindex < s.gzhead.name.length) {
              val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
            } else {
              val = 0;
            }
            put_byte(s, val);
          } while (val !== 0);
    
          if (s.gzhead.hcrc && s.pending > beg){
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          if (val === 0) {
            s.gzindex = 0;
            s.status = COMMENT_STATE;
          }
        }
        else {
          s.status = COMMENT_STATE;
        }
      }
      if (s.status === COMMENT_STATE) {
        if (s.gzhead.comment/* != Z_NULL*/) {
          beg = s.pending;  /* start of bytes to update crc */
          //int val;
    
          do {
            if (s.pending === s.pending_buf_size) {
              if (s.gzhead.hcrc && s.pending > beg) {
                strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
              }
              flush_pending(strm);
              beg = s.pending;
              if (s.pending === s.pending_buf_size) {
                val = 1;
                break;
              }
            }
            // JS specific: little magic to add zero terminator to end of string
            if (s.gzindex < s.gzhead.comment.length) {
              val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
            } else {
              val = 0;
            }
            put_byte(s, val);
          } while (val !== 0);
    
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          if (val === 0) {
            s.status = HCRC_STATE;
          }
        }
        else {
          s.status = HCRC_STATE;
        }
      }
      if (s.status === HCRC_STATE) {
        if (s.gzhead.hcrc) {
          if (s.pending + 2 > s.pending_buf_size) {
            flush_pending(strm);
          }
          if (s.pending + 2 <= s.pending_buf_size) {
            put_byte(s, strm.adler & 0xff);
            put_byte(s, (strm.adler >> 8) & 0xff);
            strm.adler = 0; //crc32(0L, Z_NULL, 0);
            s.status = BUSY_STATE;
          }
        }
        else {
          s.status = BUSY_STATE;
        }
      }
    //#endif
    
      /* Flush as much pending output as possible */
      if (s.pending !== 0) {
        flush_pending(strm);
        if (strm.avail_out === 0) {
          /* Since avail_out is 0, deflate will be called again with
           * more output space, but possibly with both pending and
           * avail_in equal to zero. There won't be anything to do,
           * but this is not an error situation so make sure we
           * return OK instead of BUF_ERROR at next call of deflate:
           */
          s.last_flush = -1;
          return Z_OK;
        }
    
        /* Make sure there is something to do and avoid duplicate consecutive
         * flushes. For repeated and useless calls with Z_FINISH, we keep
         * returning Z_STREAM_END instead of Z_BUF_ERROR.
         */
      } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) &&
        flush !== Z_FINISH) {
        return err(strm, Z_BUF_ERROR);
      }
    
      /* User must not provide more input after the first FINISH: */
      if (s.status === FINISH_STATE && strm.avail_in !== 0) {
        return err(strm, Z_BUF_ERROR);
      }
    
      /* Start a new block or continue the current one.
       */
      if (strm.avail_in !== 0 || s.lookahead !== 0 ||
        (flush !== Z_NO_FLUSH && s.status !== FINISH_STATE)) {
        var bstate = (s.strategy === Z_HUFFMAN_ONLY) ? deflate_huff(s, flush) :
          (s.strategy === Z_RLE ? deflate_rle(s, flush) :
            configuration_table[s.level].func(s, flush));
    
        if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
          s.status = FINISH_STATE;
        }
        if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
          if (strm.avail_out === 0) {
            s.last_flush = -1;
            /* avoid BUF_ERROR next call, see above */
          }
          return Z_OK;
          /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
           * of deflate should use the same flush parameter to make sure
           * that the flush is complete. So we don't have to output an
           * empty block here, this will be done at next call. This also
           * ensures that for a very small output buffer, we emit at most
           * one empty block.
           */
        }
        if (bstate === BS_BLOCK_DONE) {
          if (flush === Z_PARTIAL_FLUSH) {
            trees._tr_align(s);
          }
          else if (flush !== Z_BLOCK) { /* FULL_FLUSH or SYNC_FLUSH */
    
            trees._tr_stored_block(s, 0, 0, false);
            /* For a full flush, this empty block will be recognized
             * as a special marker by inflate_sync().
             */
            if (flush === Z_FULL_FLUSH) {
              /*** CLEAR_HASH(s); ***/             /* forget history */
              zero(s.head); // Fill with NIL (= 0);
    
              if (s.lookahead === 0) {
                s.strstart = 0;
                s.block_start = 0;
                s.insert = 0;
              }
            }
          }
          flush_pending(strm);
          if (strm.avail_out === 0) {
            s.last_flush = -1; /* avoid BUF_ERROR at next call, see above */
            return Z_OK;
          }
        }
      }
      //Assert(strm->avail_out > 0, "bug2");
      //if (strm.avail_out <= 0) { throw new Error("bug2");}
    
      if (flush !== Z_FINISH) { return Z_OK; }
      if (s.wrap <= 0) { return Z_STREAM_END; }
    
      /* Write the trailer */
      if (s.wrap === 2) {
        put_byte(s, strm.adler & 0xff);
        put_byte(s, (strm.adler >> 8) & 0xff);
        put_byte(s, (strm.adler >> 16) & 0xff);
        put_byte(s, (strm.adler >> 24) & 0xff);
        put_byte(s, strm.total_in & 0xff);
        put_byte(s, (strm.total_in >> 8) & 0xff);
        put_byte(s, (strm.total_in >> 16) & 0xff);
        put_byte(s, (strm.total_in >> 24) & 0xff);
      }
      else
      {
        putShortMSB(s, strm.adler >>> 16);
        putShortMSB(s, strm.adler & 0xffff);
      }
    
      flush_pending(strm);
      /* If avail_out is zero, the application will call deflate again
       * to flush the rest.
       */
      if (s.wrap > 0) { s.wrap = -s.wrap; }
      /* write the trailer only once! */
      return s.pending !== 0 ? Z_OK : Z_STREAM_END;
    }
    
    function deflateEnd(strm) {
      var status;
    
      if (!strm/*== Z_NULL*/ || !strm.state/*== Z_NULL*/) {
        return Z_STREAM_ERROR;
      }
    
      status = strm.state.status;
      if (status !== INIT_STATE &&
        status !== EXTRA_STATE &&
        status !== NAME_STATE &&
        status !== COMMENT_STATE &&
        status !== HCRC_STATE &&
        status !== BUSY_STATE &&
        status !== FINISH_STATE
      ) {
        return err(strm, Z_STREAM_ERROR);
      }
    
      strm.state = null;
    
      return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
    }
    
    /* =========================================================================
     * Copy the source state to the destination state
     */
    //function deflateCopy(dest, source) {
    //
    //}
    
    exports.deflateInit = deflateInit;
    exports.deflateInit2 = deflateInit2;
    exports.deflateReset = deflateReset;
    exports.deflateResetKeep = deflateResetKeep;
    exports.deflateSetHeader = deflateSetHeader;
    exports.deflate = deflate;
    exports.deflateEnd = deflateEnd;
    exports.deflateInfo = 'pako deflate (from Nodeca project)';
    
    /* Not implemented
    exports.deflateBound = deflateBound;
    exports.deflateCopy = deflateCopy;
    exports.deflateSetDictionary = deflateSetDictionary;
    exports.deflateParams = deflateParams;
    exports.deflatePending = deflatePending;
    exports.deflatePrime = deflatePrime;
    exports.deflateTune = deflateTune;
    */
    },{"../utils/common":27,"./adler32":29,"./crc32":31,"./messages":37,"./trees":38}],33:[function(_dereq_,module,exports){
    'use strict';
    
    
    function GZheader() {
      /* true if compressed data believed to be text */
      this.text       = 0;
      /* modification time */
      this.time       = 0;
      /* extra flags (not used when writing a gzip file) */
      this.xflags     = 0;
      /* operating system */
      this.os         = 0;
      /* pointer to extra field or Z_NULL if none */
      this.extra      = null;
      /* extra field length (valid if extra != Z_NULL) */
      this.extra_len  = 0; // Actually, we don't need it in JS,
                           // but leave for few code modifications
    
      //
      // Setup limits is not necessary because in js we should not preallocate memory 
      // for inflate use constant limit in 65536 bytes
      //
    
      /* space at extra (only when reading header) */
      // this.extra_max  = 0;
      /* pointer to zero-terminated file name or Z_NULL */
      this.name       = '';
      /* space at name (only when reading header) */
      // this.name_max   = 0;
      /* pointer to zero-terminated comment or Z_NULL */
      this.comment    = '';
      /* space at comment (only when reading header) */
      // this.comm_max   = 0;
      /* true if there was or will be a header crc */
      this.hcrc       = 0;
      /* true when done reading gzip header (not used when writing a gzip file) */
      this.done       = false;
    }
    
    module.exports = GZheader;
    },{}],34:[function(_dereq_,module,exports){
    'use strict';
    
    // See state defs from inflate.js
    var BAD = 30;       /* got a data error -- remain here until reset */
    var TYPE = 12;      /* i: waiting for type bits, including last-flag bit */
    
    /*
       Decode literal, length, and distance codes and write out the resulting
       literal and match bytes until either not enough input or output is
       available, an end-of-block is encountered, or a data error is encountered.
       When large enough input and output buffers are supplied to inflate(), for
       example, a 16K input buffer and a 64K output buffer, more than 95% of the
       inflate execution time is spent in this routine.
    
       Entry assumptions:
    
            state.mode === LEN
            strm.avail_in >= 6
            strm.avail_out >= 258
            start >= strm.avail_out
            state.bits < 8
    
       On return, state.mode is one of:
    
            LEN -- ran out of enough output space or enough available input
            TYPE -- reached end of block code, inflate() to interpret next block
            BAD -- error in block data
    
       Notes:
    
        - The maximum input bits used by a length/distance pair is 15 bits for the
          length code, 5 bits for the length extra, 15 bits for the distance code,
          and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
          Therefore if strm.avail_in >= 6, then there is enough input to avoid
          checking for available input while decoding.
    
        - The maximum bytes that a single length/distance pair can output is 258
          bytes, which is the maximum length that can be coded.  inflate_fast()
          requires strm.avail_out >= 258 for each loop to avoid checking for
          output space.
     */
    module.exports = function inflate_fast(strm, start) {
      var state;
      var _in;                    /* local strm.input */
      var last;                   /* have enough input while in < last */
      var _out;                   /* local strm.output */
      var beg;                    /* inflate()'s initial strm.output */
      var end;                    /* while out < end, enough space available */
    //#ifdef INFLATE_STRICT
      var dmax;                   /* maximum distance from zlib header */
    //#endif
      var wsize;                  /* window size or zero if not using window */
      var whave;                  /* valid bytes in the window */
      var wnext;                  /* window write index */
      var window;                 /* allocated sliding window, if wsize != 0 */
      var hold;                   /* local strm.hold */
      var bits;                   /* local strm.bits */
      var lcode;                  /* local strm.lencode */
      var dcode;                  /* local strm.distcode */
      var lmask;                  /* mask for first level of length codes */
      var dmask;                  /* mask for first level of distance codes */
      var here;                   /* retrieved table entry */
      var op;                     /* code bits, operation, extra bits, or */
                                  /*  window position, window bytes to copy */
      var len;                    /* match length, unused bytes */
      var dist;                   /* match distance */
      var from;                   /* where to copy match from */
      var from_source;
    
    
      var input, output; // JS specific, because we have no pointers
    
      /* copy state to local variables */
      state = strm.state;
      //here = state.here;
      _in = strm.next_in;
      input = strm.input;
      last = _in + (strm.avail_in - 5);
      _out = strm.next_out;
      output = strm.output;
      beg = _out - (start - strm.avail_out);
      end = _out + (strm.avail_out - 257);
    //#ifdef INFLATE_STRICT
      dmax = state.dmax;
    //#endif
      wsize = state.wsize;
      whave = state.whave;
      wnext = state.wnext;
      window = state.window;
      hold = state.hold;
      bits = state.bits;
      lcode = state.lencode;
      dcode = state.distcode;
      lmask = (1 << state.lenbits) - 1;
      dmask = (1 << state.distbits) - 1;
    
    
      /* decode literals and length/distances until end-of-block or not enough
         input data or output space */
    
      top:
      do {
        if (bits < 15) {
          hold += input[_in++] << bits;
          bits += 8;
          hold += input[_in++] << bits;
          bits += 8;
        }
    
        here = lcode[hold & lmask];
    
        dolen:
        for (;;) { // Goto emulation
          op = here >>> 24/*here.bits*/;
          hold >>>= op;
          bits -= op;
          op = (here >>> 16) & 0xff/*here.op*/;
          if (op === 0) {                          /* literal */
            //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
            //        "inflate:         literal '%c'\n" :
            //        "inflate:         literal 0x%02x\n", here.val));
            output[_out++] = here & 0xffff/*here.val*/;
          }
          else if (op & 16) {                     /* length base */
            len = here & 0xffff/*here.val*/;
            op &= 15;                           /* number of extra bits */
            if (op) {
              if (bits < op) {
                hold += input[_in++] << bits;
                bits += 8;
              }
              len += hold & ((1 << op) - 1);
              hold >>>= op;
              bits -= op;
            }
            //Tracevv((stderr, "inflate:         length %u\n", len));
            if (bits < 15) {
              hold += input[_in++] << bits;
              bits += 8;
              hold += input[_in++] << bits;
              bits += 8;
            }
            here = dcode[hold & dmask];
    
            dodist:
            for (;;) { // goto emulation
              op = here >>> 24/*here.bits*/;
              hold >>>= op;
              bits -= op;
              op = (here >>> 16) & 0xff/*here.op*/;
    
              if (op & 16) {                      /* distance base */
                dist = here & 0xffff/*here.val*/;
                op &= 15;                       /* number of extra bits */
                if (bits < op) {
                  hold += input[_in++] << bits;
                  bits += 8;
                  if (bits < op) {
                    hold += input[_in++] << bits;
                    bits += 8;
                  }
                }
                dist += hold & ((1 << op) - 1);
    //#ifdef INFLATE_STRICT
                if (dist > dmax) {
                  strm.msg = 'invalid distance too far back';
                  state.mode = BAD;
                  break top;
                }
    //#endif
                hold >>>= op;
                bits -= op;
                //Tracevv((stderr, "inflate:         distance %u\n", dist));
                op = _out - beg;                /* max distance in output */
                if (dist > op) {                /* see if copy from window */
                  op = dist - op;               /* distance back in window */
                  if (op > whave) {
                    if (state.sane) {
                      strm.msg = 'invalid distance too far back';
                      state.mode = BAD;
                      break top;
                    }
    
    // (!) This block is disabled in zlib defailts,
    // don't enable it for binary compatibility
    //#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
    //                if (len <= op - whave) {
    //                  do {
    //                    output[_out++] = 0;
    //                  } while (--len);
    //                  continue top;
    //                }
    //                len -= op - whave;
    //                do {
    //                  output[_out++] = 0;
    //                } while (--op > whave);
    //                if (op === 0) {
    //                  from = _out - dist;
    //                  do {
    //                    output[_out++] = output[from++];
    //                  } while (--len);
    //                  continue top;
    //                }
    //#endif
                  }
                  from = 0; // window index
                  from_source = window;
                  if (wnext === 0) {           /* very common case */
                    from += wsize - op;
                    if (op < len) {         /* some from window */
                      len -= op;
                      do {
                        output[_out++] = window[from++];
                      } while (--op);
                      from = _out - dist;  /* rest from output */
                      from_source = output;
                    }
                  }
                  else if (wnext < op) {      /* wrap around window */
                    from += wsize + wnext - op;
                    op -= wnext;
                    if (op < len) {         /* some from end of window */
                      len -= op;
                      do {
                        output[_out++] = window[from++];
                      } while (--op);
                      from = 0;
                      if (wnext < len) {  /* some from start of window */
                        op = wnext;
                        len -= op;
                        do {
                          output[_out++] = window[from++];
                        } while (--op);
                        from = _out - dist;      /* rest from output */
                        from_source = output;
                      }
                    }
                  }
                  else {                      /* contiguous in window */
                    from += wnext - op;
                    if (op < len) {         /* some from window */
                      len -= op;
                      do {
                        output[_out++] = window[from++];
                      } while (--op);
                      from = _out - dist;  /* rest from output */
                      from_source = output;
                    }
                  }
                  while (len > 2) {
                    output[_out++] = from_source[from++];
                    output[_out++] = from_source[from++];
                    output[_out++] = from_source[from++];
                    len -= 3;
                  }
                  if (len) {
                    output[_out++] = from_source[from++];
                    if (len > 1) {
                      output[_out++] = from_source[from++];
                    }
                  }
                }
                else {
                  from = _out - dist;          /* copy direct from output */
                  do {                        /* minimum length is three */
                    output[_out++] = output[from++];
                    output[_out++] = output[from++];
                    output[_out++] = output[from++];
                    len -= 3;
                  } while (len > 2);
                  if (len) {
                    output[_out++] = output[from++];
                    if (len > 1) {
                      output[_out++] = output[from++];
                    }
                  }
                }
              }
              else if ((op & 64) === 0) {          /* 2nd level distance code */
                here = dcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
                continue dodist;
              }
              else {
                strm.msg = 'invalid distance code';
                state.mode = BAD;
                break top;
              }
    
              break; // need to emulate goto via "continue"
            }
          }
          else if ((op & 64) === 0) {              /* 2nd level length code */
            here = lcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
            continue dolen;
          }
          else if (op & 32) {                     /* end-of-block */
            //Tracevv((stderr, "inflate:         end of block\n"));
            state.mode = TYPE;
            break top;
          }
          else {
            strm.msg = 'invalid literal/length code';
            state.mode = BAD;
            break top;
          }
    
          break; // need to emulate goto via "continue"
        }
      } while (_in < last && _out < end);
    
      /* return unused bytes (on entry, bits < 8, so in won't go too far back) */
      len = bits >> 3;
      _in -= len;
      bits -= len << 3;
      hold &= (1 << bits) - 1;
    
      /* update state and return */
      strm.next_in = _in;
      strm.next_out = _out;
      strm.avail_in = (_in < last ? 5 + (last - _in) : 5 - (_in - last));
      strm.avail_out = (_out < end ? 257 + (end - _out) : 257 - (_out - end));
      state.hold = hold;
      state.bits = bits;
      return;
    };
    
    },{}],35:[function(_dereq_,module,exports){
    'use strict';
    
    
    var utils = _dereq_('../utils/common');
    var adler32 = _dereq_('./adler32');
    var crc32   = _dereq_('./crc32');
    var inflate_fast = _dereq_('./inffast');
    var inflate_table = _dereq_('./inftrees');
    
    var CODES = 0;
    var LENS = 1;
    var DISTS = 2;
    
    /* Public constants ==========================================================*/
    /* ===========================================================================*/
    
    
    /* Allowed flush values; see deflate() and inflate() below for details */
    //var Z_NO_FLUSH      = 0;
    //var Z_PARTIAL_FLUSH = 1;
    //var Z_SYNC_FLUSH    = 2;
    //var Z_FULL_FLUSH    = 3;
    var Z_FINISH        = 4;
    var Z_BLOCK         = 5;
    var Z_TREES         = 6;
    
    
    /* Return codes for the compression/decompression functions. Negative values
     * are errors, positive values are used for special but normal events.
     */
    var Z_OK            = 0;
    var Z_STREAM_END    = 1;
    var Z_NEED_DICT     = 2;
    //var Z_ERRNO         = -1;
    var Z_STREAM_ERROR  = -2;
    var Z_DATA_ERROR    = -3;
    var Z_MEM_ERROR     = -4;
    var Z_BUF_ERROR     = -5;
    //var Z_VERSION_ERROR = -6;
    
    /* The deflate compression method */
    var Z_DEFLATED  = 8;
    
    
    /* STATES ====================================================================*/
    /* ===========================================================================*/
    
    
    var    HEAD = 1;       /* i: waiting for magic header */
    var    FLAGS = 2;      /* i: waiting for method and flags (gzip) */
    var    TIME = 3;       /* i: waiting for modification time (gzip) */
    var    OS = 4;         /* i: waiting for extra flags and operating system (gzip) */
    var    EXLEN = 5;      /* i: waiting for extra length (gzip) */
    var    EXTRA = 6;      /* i: waiting for extra bytes (gzip) */
    var    NAME = 7;       /* i: waiting for end of file name (gzip) */
    var    COMMENT = 8;    /* i: waiting for end of comment (gzip) */
    var    HCRC = 9;       /* i: waiting for header crc (gzip) */
    var    DICTID = 10;    /* i: waiting for dictionary check value */
    var    DICT = 11;      /* waiting for inflateSetDictionary() call */
    var        TYPE = 12;      /* i: waiting for type bits, including last-flag bit */
    var        TYPEDO = 13;    /* i: same, but skip check to exit inflate on new block */
    var        STORED = 14;    /* i: waiting for stored size (length and complement) */
    var        COPY_ = 15;     /* i/o: same as COPY below, but only first time in */
    var        COPY = 16;      /* i/o: waiting for input or output to copy stored block */
    var        TABLE = 17;     /* i: waiting for dynamic block table lengths */
    var        LENLENS = 18;   /* i: waiting for code length code lengths */
    var        CODELENS = 19;  /* i: waiting for length/lit and distance code lengths */
    var            LEN_ = 20;      /* i: same as LEN below, but only first time in */
    var            LEN = 21;       /* i: waiting for length/lit/eob code */
    var            LENEXT = 22;    /* i: waiting for length extra bits */
    var            DIST = 23;      /* i: waiting for distance code */
    var            DISTEXT = 24;   /* i: waiting for distance extra bits */
    var            MATCH = 25;     /* o: waiting for output space to copy string */
    var            LIT = 26;       /* o: waiting for output space to write literal */
    var    CHECK = 27;     /* i: waiting for 32-bit check value */
    var    LENGTH = 28;    /* i: waiting for 32-bit length (gzip) */
    var    DONE = 29;      /* finished check, done -- remain here until reset */
    var    BAD = 30;       /* got a data error -- remain here until reset */
    var    MEM = 31;       /* got an inflate() memory error -- remain here until reset */
    var    SYNC = 32;      /* looking for synchronization bytes to restart inflate() */
    
    /* ===========================================================================*/
    
    
    
    var ENOUGH_LENS = 852;
    var ENOUGH_DISTS = 592;
    //var ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);
    
    var MAX_WBITS = 15;
    /* 32K LZ77 window */
    var DEF_WBITS = MAX_WBITS;
    
    
    function ZSWAP32(q) {
      return  (((q >>> 24) & 0xff) +
              ((q >>> 8) & 0xff00) +
              ((q & 0xff00) << 8) +
              ((q & 0xff) << 24));
    }
    
    
    function InflateState() {
      this.mode = 0;             /* current inflate mode */
      this.last = false;          /* true if processing last block */
      this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
      this.havedict = false;      /* true if dictionary provided */
      this.flags = 0;             /* gzip header method and flags (0 if zlib) */
      this.dmax = 0;              /* zlib header max distance (INFLATE_STRICT) */
      this.check = 0;             /* protected copy of check value */
      this.total = 0;             /* protected copy of output count */
      // TODO: may be {}
      this.head = null;           /* where to save gzip header information */
    
      /* sliding window */
      this.wbits = 0;             /* log base 2 of requested window size */
      this.wsize = 0;             /* window size or zero if not using window */
      this.whave = 0;             /* valid bytes in the window */
      this.wnext = 0;             /* window write index */
      this.window = null;         /* allocated sliding window, if needed */
    
      /* bit accumulator */
      this.hold = 0;              /* input bit accumulator */
      this.bits = 0;              /* number of bits in "in" */
    
      /* for string and stored block copying */
      this.length = 0;            /* literal or length of data to copy */
      this.offset = 0;            /* distance back to copy string from */
    
      /* for table and code decoding */
      this.extra = 0;             /* extra bits needed */
    
      /* fixed and dynamic code tables */
      this.lencode = null;          /* starting table for length/literal codes */
      this.distcode = null;         /* starting table for distance codes */
      this.lenbits = 0;           /* index bits for lencode */
      this.distbits = 0;          /* index bits for distcode */
    
      /* dynamic table building */
      this.ncode = 0;             /* number of code length code lengths */
      this.nlen = 0;              /* number of length code lengths */
      this.ndist = 0;             /* number of distance code lengths */
      this.have = 0;              /* number of code lengths in lens[] */
      this.next = null;              /* next available space in codes[] */
    
      this.lens = new utils.Buf16(320); /* temporary storage for code lengths */
      this.work = new utils.Buf16(288); /* work area for code table building */
    
      /*
       because we don't have pointers in js, we use lencode and distcode directly
       as buffers so we don't need codes
      */
      //this.codes = new utils.Buf32(ENOUGH);       /* space for code tables */
      this.lendyn = null;              /* dynamic table for length/literal codes (JS specific) */
      this.distdyn = null;             /* dynamic table for distance codes (JS specific) */
      this.sane = 0;                   /* if false, allow invalid distance too far */
      this.back = 0;                   /* bits back of last unprocessed length/lit */
      this.was = 0;                    /* initial length of match */
    }
    
    function inflateResetKeep(strm) {
      var state;
    
      if (!strm || !strm.state) { return Z_STREAM_ERROR; }
      state = strm.state;
      strm.total_in = strm.total_out = state.total = 0;
      strm.msg = ''; /*Z_NULL*/
      if (state.wrap) {       /* to support ill-conceived Java test suite */
        strm.adler = state.wrap & 1;
      }
      state.mode = HEAD;
      state.last = 0;
      state.havedict = 0;
      state.dmax = 32768;
      state.head = null/*Z_NULL*/;
      state.hold = 0;
      state.bits = 0;
      //state.lencode = state.distcode = state.next = state.codes;
      state.lencode = state.lendyn = new utils.Buf32(ENOUGH_LENS);
      state.distcode = state.distdyn = new utils.Buf32(ENOUGH_DISTS);
    
      state.sane = 1;
      state.back = -1;
      //Tracev((stderr, "inflate: reset\n"));
      return Z_OK;
    }
    
    function inflateReset(strm) {
      var state;
    
      if (!strm || !strm.state) { return Z_STREAM_ERROR; }
      state = strm.state;
      state.wsize = 0;
      state.whave = 0;
      state.wnext = 0;
      return inflateResetKeep(strm);
    
    }
    
    function inflateReset2(strm, windowBits) {
      var wrap;
      var state;
    
      /* get the state */
      if (!strm || !strm.state) { return Z_STREAM_ERROR; }
      state = strm.state;
    
      /* extract wrap request from windowBits parameter */
      if (windowBits < 0) {
        wrap = 0;
        windowBits = -windowBits;
      }
      else {
        wrap = (windowBits >> 4) + 1;
        if (windowBits < 48) {
          windowBits &= 15;
        }
      }
    
      /* set number of window bits, free window if different */
      if (windowBits && (windowBits < 8 || windowBits > 15)) {
        return Z_STREAM_ERROR;
      }
      if (state.window !== null && state.wbits !== windowBits) {
        state.window = null;
      }
    
      /* update state and reset the rest of it */
      state.wrap = wrap;
      state.wbits = windowBits;
      return inflateReset(strm);
    }
    
    function inflateInit2(strm, windowBits) {
      var ret;
      var state;
    
      if (!strm) { return Z_STREAM_ERROR; }
      //strm.msg = Z_NULL;                 /* in case we return an error */
    
      state = new InflateState();
    
      //if (state === Z_NULL) return Z_MEM_ERROR;
      //Tracev((stderr, "inflate: allocated\n"));
      strm.state = state;
      state.window = null/*Z_NULL*/;
      ret = inflateReset2(strm, windowBits);
      if (ret !== Z_OK) {
        strm.state = null/*Z_NULL*/;
      }
      return ret;
    }
    
    function inflateInit(strm) {
      return inflateInit2(strm, DEF_WBITS);
    }
    
    
    /*
     Return state with length and distance decoding tables and index sizes set to
     fixed code decoding.  Normally this returns fixed tables from inffixed.h.
     If BUILDFIXED is defined, then instead this routine builds the tables the
     first time it's called, and returns those tables the first time and
     thereafter.  This reduces the size of the code by about 2K bytes, in
     exchange for a little execution time.  However, BUILDFIXED should not be
     used for threaded applications, since the rewriting of the tables and virgin
     may not be thread-safe.
     */
    var virgin = true;
    
    var lenfix, distfix; // We have no pointers in JS, so keep tables separate
    
    function fixedtables(state) {
      /* build fixed huffman tables if first call (may not be thread safe) */
      if (virgin) {
        var sym;
    
        lenfix = new utils.Buf32(512);
        distfix = new utils.Buf32(32);
    
        /* literal/length table */
        sym = 0;
        while (sym < 144) { state.lens[sym++] = 8; }
        while (sym < 256) { state.lens[sym++] = 9; }
        while (sym < 280) { state.lens[sym++] = 7; }
        while (sym < 288) { state.lens[sym++] = 8; }
    
        inflate_table(LENS,  state.lens, 0, 288, lenfix,   0, state.work, {bits: 9});
    
        /* distance table */
        sym = 0;
        while (sym < 32) { state.lens[sym++] = 5; }
    
        inflate_table(DISTS, state.lens, 0, 32,   distfix, 0, state.work, {bits: 5});
    
        /* do this just once */
        virgin = false;
      }
    
      state.lencode = lenfix;
      state.lenbits = 9;
      state.distcode = distfix;
      state.distbits = 5;
    }
    
    
    /*
     Update the window with the last wsize (normally 32K) bytes written before
     returning.  If window does not exist yet, create it.  This is only called
     when a window is already in use, or when output has been written during this
     inflate call, but the end of the deflate stream has not been reached yet.
     It is also called to create a window for dictionary data when a dictionary
     is loaded.
    
     Providing output buffers larger than 32K to inflate() should provide a speed
     advantage, since only the last 32K of output is copied to the sliding window
     upon return from inflate(), and since all distances after the first 32K of
     output will fall in the output data, making match copies simpler and faster.
     The advantage may be dependent on the size of the processor's data caches.
     */
    function updatewindow(strm, src, end, copy) {
      var dist;
      var state = strm.state;
    
      /* if it hasn't been done already, allocate space for the window */
      if (state.window === null) {
        state.wsize = 1 << state.wbits;
        state.wnext = 0;
        state.whave = 0;
    
        state.window = new utils.Buf8(state.wsize);
      }
    
      /* copy state->wsize or less output bytes into the circular window */
      if (copy >= state.wsize) {
        utils.arraySet(state.window,src, end - state.wsize, state.wsize, 0);
        state.wnext = 0;
        state.whave = state.wsize;
      }
      else {
        dist = state.wsize - state.wnext;
        if (dist > copy) {
          dist = copy;
        }
        //zmemcpy(state->window + state->wnext, end - copy, dist);
        utils.arraySet(state.window,src, end - copy, dist, state.wnext);
        copy -= dist;
        if (copy) {
          //zmemcpy(state->window, end - copy, copy);
          utils.arraySet(state.window,src, end - copy, copy, 0);
          state.wnext = copy;
          state.whave = state.wsize;
        }
        else {
          state.wnext += dist;
          if (state.wnext === state.wsize) { state.wnext = 0; }
          if (state.whave < state.wsize) { state.whave += dist; }
        }
      }
      return 0;
    }
    
    function inflate(strm, flush) {
      var state;
      var input, output;          // input/output buffers
      var next;                   /* next input INDEX */
      var put;                    /* next output INDEX */
      var have, left;             /* available input and output */
      var hold;                   /* bit buffer */
      var bits;                   /* bits in bit buffer */
      var _in, _out;              /* save starting available input and output */
      var copy;                   /* number of stored or match bytes to copy */
      var from;                   /* where to copy match bytes from */
      var from_source;
      var here = 0;               /* current decoding table entry */
      var here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
      //var last;                   /* parent table entry */
      var last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
      var len;                    /* length to copy for repeats, bits to drop */
      var ret;                    /* return code */
      var hbuf = new utils.Buf8(4);    /* buffer for gzip header crc calculation */
      var opts;
    
      var n; // temporary var for NEED_BITS
    
      var order = /* permutation of code lengths */
        [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
    
    
      if (!strm || !strm.state || !strm.output ||
          (!strm.input && strm.avail_in !== 0)) {
        return Z_STREAM_ERROR;
      }
    
      state = strm.state;
      if (state.mode === TYPE) { state.mode = TYPEDO; }    /* skip check */
    
    
      //--- LOAD() ---
      put = strm.next_out;
      output = strm.output;
      left = strm.avail_out;
      next = strm.next_in;
      input = strm.input;
      have = strm.avail_in;
      hold = state.hold;
      bits = state.bits;
      //---
    
      _in = have;
      _out = left;
      ret = Z_OK;
    
      inf_leave: // goto emulation
      for (;;) {
        switch (state.mode) {
        case HEAD:
          if (state.wrap === 0) {
            state.mode = TYPEDO;
            break;
          }
          //=== NEEDBITS(16);
          while (bits < 16) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if ((state.wrap & 2) && hold === 0x8b1f) {  /* gzip header */
            state.check = 0/*crc32(0L, Z_NULL, 0)*/;
            //=== CRC2(state.check, hold);
            hbuf[0] = hold & 0xff;
            hbuf[1] = (hold >>> 8) & 0xff;
            state.check = crc32(state.check, hbuf, 2, 0);
            //===//
    
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            state.mode = FLAGS;
            break;
          }
          state.flags = 0;           /* expect zlib header */
          if (state.head) {
            state.head.done = false;
          }
          if (!(state.wrap & 1) ||   /* check if zlib header allowed */
            (((hold & 0xff)/*BITS(8)*/ << 8) + (hold >> 8)) % 31) {
            strm.msg = 'incorrect header check';
            state.mode = BAD;
            break;
          }
          if ((hold & 0x0f)/*BITS(4)*/ !== Z_DEFLATED) {
            strm.msg = 'unknown compression method';
            state.mode = BAD;
            break;
          }
          //--- DROPBITS(4) ---//
          hold >>>= 4;
          bits -= 4;
          //---//
          len = (hold & 0x0f)/*BITS(4)*/ + 8;
          if (state.wbits === 0) {
            state.wbits = len;
          }
          else if (len > state.wbits) {
            strm.msg = 'invalid window size';
            state.mode = BAD;
            break;
          }
          state.dmax = 1 << len;
          //Tracev((stderr, "inflate:   zlib header ok\n"));
          strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
          state.mode = hold & 0x200 ? DICTID : TYPE;
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          break;
        case FLAGS:
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.flags = hold;
          if ((state.flags & 0xff) !== Z_DEFLATED) {
            strm.msg = 'unknown compression method';
            state.mode = BAD;
            break;
          }
          if (state.flags & 0xe000) {
            strm.msg = 'unknown header flags set';
            state.mode = BAD;
            break;
          }
          if (state.head) {
            state.head.text = ((hold >> 8) & 1);
          }
          if (state.flags & 0x0200) {
            //=== CRC2(state.check, hold);
            hbuf[0] = hold & 0xff;
            hbuf[1] = (hold >>> 8) & 0xff;
            state.check = crc32(state.check, hbuf, 2, 0);
            //===//
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          state.mode = TIME;
          /* falls through */
        case TIME:
          //=== NEEDBITS(32); */
          while (bits < 32) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if (state.head) {
            state.head.time = hold;
          }
          if (state.flags & 0x0200) {
            //=== CRC4(state.check, hold)
            hbuf[0] = hold & 0xff;
            hbuf[1] = (hold >>> 8) & 0xff;
            hbuf[2] = (hold >>> 16) & 0xff;
            hbuf[3] = (hold >>> 24) & 0xff;
            state.check = crc32(state.check, hbuf, 4, 0);
            //===
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          state.mode = OS;
          /* falls through */
        case OS:
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if (state.head) {
            state.head.xflags = (hold & 0xff);
            state.head.os = (hold >> 8);
          }
          if (state.flags & 0x0200) {
            //=== CRC2(state.check, hold);
            hbuf[0] = hold & 0xff;
            hbuf[1] = (hold >>> 8) & 0xff;
            state.check = crc32(state.check, hbuf, 2, 0);
            //===//
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          state.mode = EXLEN;
          /* falls through */
        case EXLEN:
          if (state.flags & 0x0400) {
            //=== NEEDBITS(16); */
            while (bits < 16) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            state.length = hold;
            if (state.head) {
              state.head.extra_len = hold;
            }
            if (state.flags & 0x0200) {
              //=== CRC2(state.check, hold);
              hbuf[0] = hold & 0xff;
              hbuf[1] = (hold >>> 8) & 0xff;
              state.check = crc32(state.check, hbuf, 2, 0);
              //===//
            }
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
          }
          else if (state.head) {
            state.head.extra = null/*Z_NULL*/;
          }
          state.mode = EXTRA;
          /* falls through */
        case EXTRA:
          if (state.flags & 0x0400) {
            copy = state.length;
            if (copy > have) { copy = have; }
            if (copy) {
              if (state.head) {
                len = state.head.extra_len - state.length;
                if (!state.head.extra) {
                  // Use untyped array for more conveniend processing later
                  state.head.extra = new Array(state.head.extra_len);
                }
                utils.arraySet(
                  state.head.extra,
                  input,
                  next,
                  // extra field is limited to 65536 bytes
                  // - no need for additional size check
                  copy,
                  /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                  len
                );
                //zmemcpy(state.head.extra + len, next,
                //        len + copy > state.head.extra_max ?
                //        state.head.extra_max - len : copy);
              }
              if (state.flags & 0x0200) {
                state.check = crc32(state.check, input, copy, next);
              }
              have -= copy;
              next += copy;
              state.length -= copy;
            }
            if (state.length) { break inf_leave; }
          }
          state.length = 0;
          state.mode = NAME;
          /* falls through */
        case NAME:
          if (state.flags & 0x0800) {
            if (have === 0) { break inf_leave; }
            copy = 0;
            do {
              // TODO: 2 or 1 bytes?
              len = input[next + copy++];
              /* use constant limit because in js we should not preallocate memory */
              if (state.head && len &&
                  (state.length < 65536 /*state.head.name_max*/)) {
                state.head.name += String.fromCharCode(len);
              }
            } while (len && copy < have);
    
            if (state.flags & 0x0200) {
              state.check = crc32(state.check, input, copy, next);
            }
            have -= copy;
            next += copy;
            if (len) { break inf_leave; }
          }
          else if (state.head) {
            state.head.name = null;
          }
          state.length = 0;
          state.mode = COMMENT;
          /* falls through */
        case COMMENT:
          if (state.flags & 0x1000) {
            if (have === 0) { break inf_leave; }
            copy = 0;
            do {
              len = input[next + copy++];
              /* use constant limit because in js we should not preallocate memory */
              if (state.head && len &&
                  (state.length < 65536 /*state.head.comm_max*/)) {
                state.head.comment += String.fromCharCode(len);
              }
            } while (len && copy < have);
            if (state.flags & 0x0200) {
              state.check = crc32(state.check, input, copy, next);
            }
            have -= copy;
            next += copy;
            if (len) { break inf_leave; }
          }
          else if (state.head) {
            state.head.comment = null;
          }
          state.mode = HCRC;
          /* falls through */
        case HCRC:
          if (state.flags & 0x0200) {
            //=== NEEDBITS(16); */
            while (bits < 16) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            if (hold !== (state.check & 0xffff)) {
              strm.msg = 'header crc mismatch';
              state.mode = BAD;
              break;
            }
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
          }
          if (state.head) {
            state.head.hcrc = ((state.flags >> 9) & 1);
            state.head.done = true;
          }
          strm.adler = state.check = 0 /*crc32(0L, Z_NULL, 0)*/;
          state.mode = TYPE;
          break;
        case DICTID:
          //=== NEEDBITS(32); */
          while (bits < 32) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          strm.adler = state.check = ZSWAP32(hold);
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          state.mode = DICT;
          /* falls through */
        case DICT:
          if (state.havedict === 0) {
            //--- RESTORE() ---
            strm.next_out = put;
            strm.avail_out = left;
            strm.next_in = next;
            strm.avail_in = have;
            state.hold = hold;
            state.bits = bits;
            //---
            return Z_NEED_DICT;
          }
          strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
          state.mode = TYPE;
          /* falls through */
        case TYPE:
          if (flush === Z_BLOCK || flush === Z_TREES) { break inf_leave; }
          /* falls through */
        case TYPEDO:
          if (state.last) {
            //--- BYTEBITS() ---//
            hold >>>= bits & 7;
            bits -= bits & 7;
            //---//
            state.mode = CHECK;
            break;
          }
          //=== NEEDBITS(3); */
          while (bits < 3) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.last = (hold & 0x01)/*BITS(1)*/;
          //--- DROPBITS(1) ---//
          hold >>>= 1;
          bits -= 1;
          //---//
    
          switch ((hold & 0x03)/*BITS(2)*/) {
          case 0:                             /* stored block */
            //Tracev((stderr, "inflate:     stored block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = STORED;
            break;
          case 1:                             /* fixed block */
            fixedtables(state);
            //Tracev((stderr, "inflate:     fixed codes block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = LEN_;             /* decode codes */
            if (flush === Z_TREES) {
              //--- DROPBITS(2) ---//
              hold >>>= 2;
              bits -= 2;
              //---//
              break inf_leave;
            }
            break;
          case 2:                             /* dynamic block */
            //Tracev((stderr, "inflate:     dynamic codes block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = TABLE;
            break;
          case 3:
            strm.msg = 'invalid block type';
            state.mode = BAD;
          }
          //--- DROPBITS(2) ---//
          hold >>>= 2;
          bits -= 2;
          //---//
          break;
        case STORED:
          //--- BYTEBITS() ---// /* go to byte boundary */
          hold >>>= bits & 7;
          bits -= bits & 7;
          //---//
          //=== NEEDBITS(32); */
          while (bits < 32) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if ((hold & 0xffff) !== ((hold >>> 16) ^ 0xffff)) {
            strm.msg = 'invalid stored block lengths';
            state.mode = BAD;
            break;
          }
          state.length = hold & 0xffff;
          //Tracev((stderr, "inflate:       stored length %u\n",
          //        state.length));
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          state.mode = COPY_;
          if (flush === Z_TREES) { break inf_leave; }
          /* falls through */
        case COPY_:
          state.mode = COPY;
          /* falls through */
        case COPY:
          copy = state.length;
          if (copy) {
            if (copy > have) { copy = have; }
            if (copy > left) { copy = left; }
            if (copy === 0) { break inf_leave; }
            //--- zmemcpy(put, next, copy); ---
            utils.arraySet(output, input, next, copy, put);
            //---//
            have -= copy;
            next += copy;
            left -= copy;
            put += copy;
            state.length -= copy;
            break;
          }
          //Tracev((stderr, "inflate:       stored end\n"));
          state.mode = TYPE;
          break;
        case TABLE:
          //=== NEEDBITS(14); */
          while (bits < 14) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.nlen = (hold & 0x1f)/*BITS(5)*/ + 257;
          //--- DROPBITS(5) ---//
          hold >>>= 5;
          bits -= 5;
          //---//
          state.ndist = (hold & 0x1f)/*BITS(5)*/ + 1;
          //--- DROPBITS(5) ---//
          hold >>>= 5;
          bits -= 5;
          //---//
          state.ncode = (hold & 0x0f)/*BITS(4)*/ + 4;
          //--- DROPBITS(4) ---//
          hold >>>= 4;
          bits -= 4;
          //---//
    //#ifndef PKZIP_BUG_WORKAROUND
          if (state.nlen > 286 || state.ndist > 30) {
            strm.msg = 'too many length or distance symbols';
            state.mode = BAD;
            break;
          }
    //#endif
          //Tracev((stderr, "inflate:       table sizes ok\n"));
          state.have = 0;
          state.mode = LENLENS;
          /* falls through */
        case LENLENS:
          while (state.have < state.ncode) {
            //=== NEEDBITS(3);
            while (bits < 3) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            state.lens[order[state.have++]] = (hold & 0x07);//BITS(3);
            //--- DROPBITS(3) ---//
            hold >>>= 3;
            bits -= 3;
            //---//
          }
          while (state.have < 19) {
            state.lens[order[state.have++]] = 0;
          }
          // We have separate tables & no pointers. 2 commented lines below not needed.
          //state.next = state.codes;
          //state.lencode = state.next;
          // Switch to use dynamic table
          state.lencode = state.lendyn;
          state.lenbits = 7;
    
          opts = {bits: state.lenbits};
          ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
          state.lenbits = opts.bits;
    
          if (ret) {
            strm.msg = 'invalid code lengths set';
            state.mode = BAD;
            break;
          }
          //Tracev((stderr, "inflate:       code lengths ok\n"));
          state.have = 0;
          state.mode = CODELENS;
          /* falls through */
        case CODELENS:
          while (state.have < state.nlen + state.ndist) {
            for (;;) {
              here = state.lencode[hold & ((1 << state.lenbits) - 1)];/*BITS(state.lenbits)*/
              here_bits = here >>> 24;
              here_op = (here >>> 16) & 0xff;
              here_val = here & 0xffff;
    
              if ((here_bits) <= bits) { break; }
              //--- PULLBYTE() ---//
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
              //---//
            }
            if (here_val < 16) {
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              state.lens[state.have++] = here_val;
            }
            else {
              if (here_val === 16) {
                //=== NEEDBITS(here.bits + 2);
                n = here_bits + 2;
                while (bits < n) {
                  if (have === 0) { break inf_leave; }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                //===//
                //--- DROPBITS(here.bits) ---//
                hold >>>= here_bits;
                bits -= here_bits;
                //---//
                if (state.have === 0) {
                  strm.msg = 'invalid bit length repeat';
                  state.mode = BAD;
                  break;
                }
                len = state.lens[state.have - 1];
                copy = 3 + (hold & 0x03);//BITS(2);
                //--- DROPBITS(2) ---//
                hold >>>= 2;
                bits -= 2;
                //---//
              }
              else if (here_val === 17) {
                //=== NEEDBITS(here.bits + 3);
                n = here_bits + 3;
                while (bits < n) {
                  if (have === 0) { break inf_leave; }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                //===//
                //--- DROPBITS(here.bits) ---//
                hold >>>= here_bits;
                bits -= here_bits;
                //---//
                len = 0;
                copy = 3 + (hold & 0x07);//BITS(3);
                //--- DROPBITS(3) ---//
                hold >>>= 3;
                bits -= 3;
                //---//
              }
              else {
                //=== NEEDBITS(here.bits + 7);
                n = here_bits + 7;
                while (bits < n) {
                  if (have === 0) { break inf_leave; }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                //===//
                //--- DROPBITS(here.bits) ---//
                hold >>>= here_bits;
                bits -= here_bits;
                //---//
                len = 0;
                copy = 11 + (hold & 0x7f);//BITS(7);
                //--- DROPBITS(7) ---//
                hold >>>= 7;
                bits -= 7;
                //---//
              }
              if (state.have + copy > state.nlen + state.ndist) {
                strm.msg = 'invalid bit length repeat';
                state.mode = BAD;
                break;
              }
              while (copy--) {
                state.lens[state.have++] = len;
              }
            }
          }
    
          /* handle error breaks in while */
          if (state.mode === BAD) { break; }
    
          /* check for end-of-block code (better have one) */
          if (state.lens[256] === 0) {
            strm.msg = 'invalid code -- missing end-of-block';
            state.mode = BAD;
            break;
          }
    
          /* build code tables -- note: do not change the lenbits or distbits
             values here (9 and 6) without reading the comments in inftrees.h
             concerning the ENOUGH constants, which depend on those values */
          state.lenbits = 9;
    
          opts = {bits: state.lenbits};
          ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
          // We have separate tables & no pointers. 2 commented lines below not needed.
          // state.next_index = opts.table_index;
          state.lenbits = opts.bits;
          // state.lencode = state.next;
    
          if (ret) {
            strm.msg = 'invalid literal/lengths set';
            state.mode = BAD;
            break;
          }
    
          state.distbits = 6;
          //state.distcode.copy(state.codes);
          // Switch to use dynamic table
          state.distcode = state.distdyn;
          opts = {bits: state.distbits};
          ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
          // We have separate tables & no pointers. 2 commented lines below not needed.
          // state.next_index = opts.table_index;
          state.distbits = opts.bits;
          // state.distcode = state.next;
    
          if (ret) {
            strm.msg = 'invalid distances set';
            state.mode = BAD;
            break;
          }
          //Tracev((stderr, 'inflate:       codes ok\n'));
          state.mode = LEN_;
          if (flush === Z_TREES) { break inf_leave; }
          /* falls through */
        case LEN_:
          state.mode = LEN;
          /* falls through */
        case LEN:
          if (have >= 6 && left >= 258) {
            //--- RESTORE() ---
            strm.next_out = put;
            strm.avail_out = left;
            strm.next_in = next;
            strm.avail_in = have;
            state.hold = hold;
            state.bits = bits;
            //---
            inflate_fast(strm, _out);
            //--- LOAD() ---
            put = strm.next_out;
            output = strm.output;
            left = strm.avail_out;
            next = strm.next_in;
            input = strm.input;
            have = strm.avail_in;
            hold = state.hold;
            bits = state.bits;
            //---
    
            if (state.mode === TYPE) {
              state.back = -1;
            }
            break;
          }
          state.back = 0;
          for (;;) {
            here = state.lencode[hold & ((1 << state.lenbits) -1)];  /*BITS(state.lenbits)*/
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;
    
            if (here_bits <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          if (here_op && (here_op & 0xf0) === 0) {
            last_bits = here_bits;
            last_op = here_op;
            last_val = here_val;
            for (;;) {
              here = state.lencode[last_val +
                      ((hold & ((1 << (last_bits + last_op)) -1))/*BITS(last.bits + last.op)*/ >> last_bits)];
              here_bits = here >>> 24;
              here_op = (here >>> 16) & 0xff;
              here_val = here & 0xffff;
    
              if ((last_bits + here_bits) <= bits) { break; }
              //--- PULLBYTE() ---//
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
              //---//
            }
            //--- DROPBITS(last.bits) ---//
            hold >>>= last_bits;
            bits -= last_bits;
            //---//
            state.back += last_bits;
          }
          //--- DROPBITS(here.bits) ---//
          hold >>>= here_bits;
          bits -= here_bits;
          //---//
          state.back += here_bits;
          state.length = here_val;
          if (here_op === 0) {
            //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
            //        "inflate:         literal '%c'\n" :
            //        "inflate:         literal 0x%02x\n", here.val));
            state.mode = LIT;
            break;
          }
          if (here_op & 32) {
            //Tracevv((stderr, "inflate:         end of block\n"));
            state.back = -1;
            state.mode = TYPE;
            break;
          }
          if (here_op & 64) {
            strm.msg = 'invalid literal/length code';
            state.mode = BAD;
            break;
          }
          state.extra = here_op & 15;
          state.mode = LENEXT;
          /* falls through */
        case LENEXT:
          if (state.extra) {
            //=== NEEDBITS(state.extra);
            n = state.extra;
            while (bits < n) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            state.length += hold & ((1 << state.extra) -1)/*BITS(state.extra)*/;
            //--- DROPBITS(state.extra) ---//
            hold >>>= state.extra;
            bits -= state.extra;
            //---//
            state.back += state.extra;
          }
          //Tracevv((stderr, "inflate:         length %u\n", state.length));
          state.was = state.length;
          state.mode = DIST;
          /* falls through */
        case DIST:
          for (;;) {
            here = state.distcode[hold & ((1 << state.distbits) -1)];/*BITS(state.distbits)*/
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;
    
            if ((here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          if ((here_op & 0xf0) === 0) {
            last_bits = here_bits;
            last_op = here_op;
            last_val = here_val;
            for (;;) {
              here = state.distcode[last_val +
                      ((hold & ((1 << (last_bits + last_op)) -1))/*BITS(last.bits + last.op)*/ >> last_bits)];
              here_bits = here >>> 24;
              here_op = (here >>> 16) & 0xff;
              here_val = here & 0xffff;
    
              if ((last_bits + here_bits) <= bits) { break; }
              //--- PULLBYTE() ---//
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
              //---//
            }
            //--- DROPBITS(last.bits) ---//
            hold >>>= last_bits;
            bits -= last_bits;
            //---//
            state.back += last_bits;
          }
          //--- DROPBITS(here.bits) ---//
          hold >>>= here_bits;
          bits -= here_bits;
          //---//
          state.back += here_bits;
          if (here_op & 64) {
            strm.msg = 'invalid distance code';
            state.mode = BAD;
            break;
          }
          state.offset = here_val;
          state.extra = (here_op) & 15;
          state.mode = DISTEXT;
          /* falls through */
        case DISTEXT:
          if (state.extra) {
            //=== NEEDBITS(state.extra);
            n = state.extra;
            while (bits < n) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            state.offset += hold & ((1 << state.extra) -1)/*BITS(state.extra)*/;
            //--- DROPBITS(state.extra) ---//
            hold >>>= state.extra;
            bits -= state.extra;
            //---//
            state.back += state.extra;
          }
    //#ifdef INFLATE_STRICT
          if (state.offset > state.dmax) {
            strm.msg = 'invalid distance too far back';
            state.mode = BAD;
            break;
          }
    //#endif
          //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
          state.mode = MATCH;
          /* falls through */
        case MATCH:
          if (left === 0) { break inf_leave; }
          copy = _out - left;
          if (state.offset > copy) {         /* copy from window */
            copy = state.offset - copy;
            if (copy > state.whave) {
              if (state.sane) {
                strm.msg = 'invalid distance too far back';
                state.mode = BAD;
                break;
              }
    // (!) This block is disabled in zlib defailts,
    // don't enable it for binary compatibility
    //#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
    //          Trace((stderr, "inflate.c too far\n"));
    //          copy -= state.whave;
    //          if (copy > state.length) { copy = state.length; }
    //          if (copy > left) { copy = left; }
    //          left -= copy;
    //          state.length -= copy;
    //          do {
    //            output[put++] = 0;
    //          } while (--copy);
    //          if (state.length === 0) { state.mode = LEN; }
    //          break;
    //#endif
            }
            if (copy > state.wnext) {
              copy -= state.wnext;
              from = state.wsize - copy;
            }
            else {
              from = state.wnext - copy;
            }
            if (copy > state.length) { copy = state.length; }
            from_source = state.window;
          }
          else {                              /* copy from output */
            from_source = output;
            from = put - state.offset;
            copy = state.length;
          }
          if (copy > left) { copy = left; }
          left -= copy;
          state.length -= copy;
          do {
            output[put++] = from_source[from++];
          } while (--copy);
          if (state.length === 0) { state.mode = LEN; }
          break;
        case LIT:
          if (left === 0) { break inf_leave; }
          output[put++] = state.length;
          left--;
          state.mode = LEN;
          break;
        case CHECK:
          if (state.wrap) {
            //=== NEEDBITS(32);
            while (bits < 32) {
              if (have === 0) { break inf_leave; }
              have--;
              // Use '|' insdead of '+' to make sure that result is signed
              hold |= input[next++] << bits;
              bits += 8;
            }
            //===//
            _out -= left;
            strm.total_out += _out;
            state.total += _out;
            if (_out) {
              strm.adler = state.check =
                  /*UPDATE(state.check, put - _out, _out);*/
                  (state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out));
    
            }
            _out = left;
            // NB: crc32 stored as signed 32-bit int, ZSWAP32 returns signed too
            if ((state.flags ? hold : ZSWAP32(hold)) !== state.check) {
              strm.msg = 'incorrect data check';
              state.mode = BAD;
              break;
            }
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            //Tracev((stderr, "inflate:   check matches trailer\n"));
          }
          state.mode = LENGTH;
          /* falls through */
        case LENGTH:
          if (state.wrap && state.flags) {
            //=== NEEDBITS(32);
            while (bits < 32) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            if (hold !== (state.total & 0xffffffff)) {
              strm.msg = 'incorrect length check';
              state.mode = BAD;
              break;
            }
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            //Tracev((stderr, "inflate:   length matches trailer\n"));
          }
          state.mode = DONE;
          /* falls through */
        case DONE:
          ret = Z_STREAM_END;
          break inf_leave;
        case BAD:
          ret = Z_DATA_ERROR;
          break inf_leave;
        case MEM:
          return Z_MEM_ERROR;
        case SYNC:
          /* falls through */
        default:
          return Z_STREAM_ERROR;
        }
      }
    
      // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"
    
      /*
         Return from inflate(), updating the total counts and the check value.
         If there was no progress during the inflate() call, return a buffer
         error.  Call updatewindow() to create and/or update the window state.
         Note: a memory error from inflate() is non-recoverable.
       */
    
      //--- RESTORE() ---
      strm.next_out = put;
      strm.avail_out = left;
      strm.next_in = next;
      strm.avail_in = have;
      state.hold = hold;
      state.bits = bits;
      //---
    
      if (state.wsize || (_out !== strm.avail_out && state.mode < BAD &&
                          (state.mode < CHECK || flush !== Z_FINISH))) {
        if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
          state.mode = MEM;
          return Z_MEM_ERROR;
        }
      }
      _in -= strm.avail_in;
      _out -= strm.avail_out;
      strm.total_in += _in;
      strm.total_out += _out;
      state.total += _out;
      if (state.wrap && _out) {
        strm.adler = state.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
          (state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out));
      }
      strm.data_type = state.bits + (state.last ? 64 : 0) +
                        (state.mode === TYPE ? 128 : 0) +
                        (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
      if (((_in === 0 && _out === 0) || flush === Z_FINISH) && ret === Z_OK) {
        ret = Z_BUF_ERROR;
      }
      return ret;
    }
    
    function inflateEnd(strm) {
    
      if (!strm || !strm.state /*|| strm->zfree == (free_func)0*/) {
        return Z_STREAM_ERROR;
      }
    
      var state = strm.state;
      if (state.window) {
        state.window = null;
      }
      strm.state = null;
      return Z_OK;
    }
    
    function inflateGetHeader(strm, head) {
      var state;
    
      /* check state */
      if (!strm || !strm.state) { return Z_STREAM_ERROR; }
      state = strm.state;
      if ((state.wrap & 2) === 0) { return Z_STREAM_ERROR; }
    
      /* save header structure */
      state.head = head;
      head.done = false;
      return Z_OK;
    }
    
    
    exports.inflateReset = inflateReset;
    exports.inflateReset2 = inflateReset2;
    exports.inflateResetKeep = inflateResetKeep;
    exports.inflateInit = inflateInit;
    exports.inflateInit2 = inflateInit2;
    exports.inflate = inflate;
    exports.inflateEnd = inflateEnd;
    exports.inflateGetHeader = inflateGetHeader;
    exports.inflateInfo = 'pako inflate (from Nodeca project)';
    
    /* Not implemented
    exports.inflateCopy = inflateCopy;
    exports.inflateGetDictionary = inflateGetDictionary;
    exports.inflateMark = inflateMark;
    exports.inflatePrime = inflatePrime;
    exports.inflateSetDictionary = inflateSetDictionary;
    exports.inflateSync = inflateSync;
    exports.inflateSyncPoint = inflateSyncPoint;
    exports.inflateUndermine = inflateUndermine;
    */
    },{"../utils/common":27,"./adler32":29,"./crc32":31,"./inffast":34,"./inftrees":36}],36:[function(_dereq_,module,exports){
    'use strict';
    
    
    var utils = _dereq_('../utils/common');
    
    var MAXBITS = 15;
    var ENOUGH_LENS = 852;
    var ENOUGH_DISTS = 592;
    //var ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);
    
    var CODES = 0;
    var LENS = 1;
    var DISTS = 2;
    
    var lbase = [ /* Length codes 257..285 base */
      3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
      35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0
    ];
    
    var lext = [ /* Length codes 257..285 extra */
      16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
      19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78
    ];
    
    var dbase = [ /* Distance codes 0..29 base */
      1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
      257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
      8193, 12289, 16385, 24577, 0, 0
    ];
    
    var dext = [ /* Distance codes 0..29 extra */
      16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
      23, 23, 24, 24, 25, 25, 26, 26, 27, 27,
      28, 28, 29, 29, 64, 64
    ];
    
    module.exports = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts)
    {
      var bits = opts.bits;
          //here = opts.here; /* table entry for duplication */
    
      var len = 0;               /* a code's length in bits */
      var sym = 0;               /* index of code symbols */
      var min = 0, max = 0;          /* minimum and maximum code lengths */
      var root = 0;              /* number of index bits for root table */
      var curr = 0;              /* number of index bits for current table */
      var drop = 0;              /* code bits to drop for sub-table */
      var left = 0;                   /* number of prefix codes available */
      var used = 0;              /* code entries in table used */
      var huff = 0;              /* Huffman code */
      var incr;              /* for incrementing code, index */
      var fill;              /* index for replicating entries */
      var low;               /* low bits for current root entry */
      var mask;              /* mask for low root bits */
      var next;             /* next available space in table */
      var base = null;     /* base value table to use */
      var base_index = 0;
    //  var shoextra;    /* extra bits table to use */
      var end;                    /* use base and extra for symbol > end */
      var count = new utils.Buf16(MAXBITS+1); //[MAXBITS+1];    /* number of codes of each length */
      var offs = new utils.Buf16(MAXBITS+1); //[MAXBITS+1];     /* offsets in table for each length */
      var extra = null;
      var extra_index = 0;
    
      var here_bits, here_op, here_val;
    
      /*
       Process a set of code lengths to create a canonical Huffman code.  The
       code lengths are lens[0..codes-1].  Each length corresponds to the
       symbols 0..codes-1.  The Huffman code is generated by first sorting the
       symbols by length from short to long, and retaining the symbol order
       for codes with equal lengths.  Then the code starts with all zero bits
       for the first code of the shortest length, and the codes are integer
       increments for the same length, and zeros are appended as the length
       increases.  For the deflate format, these bits are stored backwards
       from their more natural integer increment ordering, and so when the
       decoding tables are built in the large loop below, the integer codes
       are incremented backwards.
    
       This routine assumes, but does not check, that all of the entries in
       lens[] are in the range 0..MAXBITS.  The caller must assure this.
       1..MAXBITS is interpreted as that code length.  zero means that that
       symbol does not occur in this code.
    
       The codes are sorted by computing a count of codes for each length,
       creating from that a table of starting indices for each length in the
       sorted table, and then entering the symbols in order in the sorted
       table.  The sorted table is work[], with that space being provided by
       the caller.
    
       The length counts are used for other purposes as well, i.e. finding
       the minimum and maximum length codes, determining if there are any
       codes at all, checking for a valid set of lengths, and looking ahead
       at length counts to determine sub-table sizes when building the
       decoding tables.
       */
    
      /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */
      for (len = 0; len <= MAXBITS; len++) {
        count[len] = 0;
      }
      for (sym = 0; sym < codes; sym++) {
        count[lens[lens_index + sym]]++;
      }
    
      /* bound code lengths, force root to be within code lengths */
      root = bits;
      for (max = MAXBITS; max >= 1; max--) {
        if (count[max] !== 0) { break; }
      }
      if (root > max) {
        root = max;
      }
      if (max === 0) {                     /* no symbols to code at all */
        //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
        //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
        //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
        table[table_index++] = (1 << 24) | (64 << 16) | 0;
    
    
        //table.op[opts.table_index] = 64;
        //table.bits[opts.table_index] = 1;
        //table.val[opts.table_index++] = 0;
        table[table_index++] = (1 << 24) | (64 << 16) | 0;
    
        opts.bits = 1;
        return 0;     /* no symbols, but wait for decoding to report error */
      }
      for (min = 1; min < max; min++) {
        if (count[min] !== 0) { break; }
      }
      if (root < min) {
        root = min;
      }
    
      /* check for an over-subscribed or incomplete set of lengths */
      left = 1;
      for (len = 1; len <= MAXBITS; len++) {
        left <<= 1;
        left -= count[len];
        if (left < 0) {
          return -1;
        }        /* over-subscribed */
      }
      if (left > 0 && (type === CODES || max !== 1)) {
        return -1;                      /* incomplete set */
      }
    
      /* generate offsets into symbol table for each length for sorting */
      offs[1] = 0;
      for (len = 1; len < MAXBITS; len++) {
        offs[len + 1] = offs[len] + count[len];
      }
    
      /* sort symbols by length, by symbol order within each length */
      for (sym = 0; sym < codes; sym++) {
        if (lens[lens_index + sym] !== 0) {
          work[offs[lens[lens_index + sym]]++] = sym;
        }
      }
    
      /*
       Create and fill in decoding tables.  In this loop, the table being
       filled is at next and has curr index bits.  The code being used is huff
       with length len.  That code is converted to an index by dropping drop
       bits off of the bottom.  For codes where len is less than drop + curr,
       those top drop + curr - len bits are incremented through all values to
       fill the table with replicated entries.
    
       root is the number of index bits for the root table.  When len exceeds
       root, sub-tables are created pointed to by the root entry with an index
       of the low root bits of huff.  This is saved in low to check for when a
       new sub-table should be started.  drop is zero when the root table is
       being filled, and drop is root when sub-tables are being filled.
    
       When a new sub-table is needed, it is necessary to look ahead in the
       code lengths to determine what size sub-table is needed.  The length
       counts are used for this, and so count[] is decremented as codes are
       entered in the tables.
    
       used keeps track of how many table entries have been allocated from the
       provided *table space.  It is checked for LENS and DIST tables against
       the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
       the initial root table size constants.  See the comments in inftrees.h
       for more information.
    
       sym increments through all symbols, and the loop terminates when
       all codes of length max, i.e. all codes, have been processed.  This
       routine permits incomplete codes, so another loop after this one fills
       in the rest of the decoding tables with invalid code markers.
       */
    
      /* set up for code type */
      switch (type) {
        case CODES:
          base = extra = work;    /* dummy value--not used */
          end = 19;
          break;
        case LENS:
          base = lbase;
          base_index -= 257;
          extra = lext;
          extra_index -= 257;
          end = 256;
          break;
        default:            /* DISTS */
          base = dbase;
          extra = dext;
          end = -1;
      }
    
      /* initialize opts for loop */
      huff = 0;                   /* starting code */
      sym = 0;                    /* starting code symbol */
      len = min;                  /* starting code length */
      next = table_index;              /* current table to fill in */
      curr = root;                /* current table index bits */
      drop = 0;                   /* current bits to drop from code for index */
      low = -1;                   /* trigger new sub-table when len > root */
      used = 1 << root;          /* use root table entries */
      mask = used - 1;            /* mask for comparing low */
    
      /* check available table space */
      if ((type === LENS && used > ENOUGH_LENS) ||
        (type === DISTS && used > ENOUGH_DISTS)) {
        return 1;
      }
    
      var i=0;
      /* process all codes and make table entries */
      for (;;) {
        i++;
        /* create table entry */
        here_bits = len - drop;
        if (work[sym] < end) {
          here_op = 0;
          here_val = work[sym];
        }
        else if (work[sym] > end) {
          here_op = extra[extra_index + work[sym]];
          here_val = base[base_index + work[sym]];
        }
        else {
          here_op = 32 + 64;         /* end of block */
          here_val = 0;
        }
    
        /* replicate for those indices with low len bits equal to huff */
        incr = 1 << (len - drop);
        fill = 1 << curr;
        min = fill;                 /* save offset to next table */
        do {
          fill -= incr;
          table[next + (huff >> drop) + fill] = (here_bits << 24) | (here_op << 16) | here_val |0;
        } while (fill !== 0);
    
        /* backwards increment the len-bit code huff */
        incr = 1 << (len - 1);
        while (huff & incr) {
          incr >>= 1;
        }
        if (incr !== 0) {
          huff &= incr - 1;
          huff += incr;
        } else {
          huff = 0;
        }
    
        /* go to next symbol, update count, len */
        sym++;
        if (--(count[len]) === 0) {
          if (len === max) { break; }
          len = lens[lens_index + work[sym]];
        }
    
        /* create new sub-table if needed */
        if (len > root && (huff & mask) !== low) {
          /* if first time, transition to sub-tables */
          if (drop === 0) {
            drop = root;
          }
    
          /* increment past last table */
          next += min;            /* here min is 1 << curr */
    
          /* determine length of next table */
          curr = len - drop;
          left = 1 << curr;
          while (curr + drop < max) {
            left -= count[curr + drop];
            if (left <= 0) { break; }
            curr++;
            left <<= 1;
          }
    
          /* check for enough space */
          used += 1 << curr;
          if ((type === LENS && used > ENOUGH_LENS) ||
            (type === DISTS && used > ENOUGH_DISTS)) {
            return 1;
          }
    
          /* point entry in root table to sub-table */
          low = huff & mask;
          /*table.op[low] = curr;
          table.bits[low] = root;
          table.val[low] = next - opts.table_index;*/
          table[low] = (root << 24) | (curr << 16) | (next - table_index) |0;
        }
      }
    
      /* fill in remaining table entry if code is incomplete (guaranteed to have
       at most one remaining entry, since if the code is incomplete, the
       maximum code length that was allowed to get this far is one bit) */
      if (huff !== 0) {
        //table.op[next + huff] = 64;            /* invalid code marker */
        //table.bits[next + huff] = len - drop;
        //table.val[next + huff] = 0;
        table[next + huff] = ((len - drop) << 24) | (64 << 16) |0;
      }
    
      /* set return parameters */
      //opts.table_index += used;
      opts.bits = root;
      return 0;
    };
    },{"../utils/common":27}],37:[function(_dereq_,module,exports){
    'use strict';
    
    module.exports = {
      '2':    'need dictionary',     /* Z_NEED_DICT       2  */
      '1':    'stream end',          /* Z_STREAM_END      1  */
      '0':    '',                    /* Z_OK              0  */
      '-1':   'file error',          /* Z_ERRNO         (-1) */
      '-2':   'stream error',        /* Z_STREAM_ERROR  (-2) */
      '-3':   'data error',          /* Z_DATA_ERROR    (-3) */
      '-4':   'insufficient memory', /* Z_MEM_ERROR     (-4) */
      '-5':   'buffer error',        /* Z_BUF_ERROR     (-5) */
      '-6':   'incompatible version' /* Z_VERSION_ERROR (-6) */
    };
    },{}],38:[function(_dereq_,module,exports){
    'use strict';
    
    
    var utils = _dereq_('../utils/common');
    
    /* Public constants ==========================================================*/
    /* ===========================================================================*/
    
    
    //var Z_FILTERED          = 1;
    //var Z_HUFFMAN_ONLY      = 2;
    //var Z_RLE               = 3;
    var Z_FIXED               = 4;
    //var Z_DEFAULT_STRATEGY  = 0;
    
    /* Possible values of the data_type field (though see inflate()) */
    var Z_BINARY              = 0;
    var Z_TEXT                = 1;
    //var Z_ASCII             = 1; // = Z_TEXT
    var Z_UNKNOWN             = 2;
    
    /*============================================================================*/
    
    
    function zero(buf) { var len = buf.length; while (--len >= 0) { buf[len] = 0; } }
    
    // From zutil.h
    
    var STORED_BLOCK = 0;
    var STATIC_TREES = 1;
    var DYN_TREES    = 2;
    /* The three kinds of block type */
    
    var MIN_MATCH    = 3;
    var MAX_MATCH    = 258;
    /* The minimum and maximum match lengths */
    
    // From deflate.h
    /* ===========================================================================
     * Internal compression state.
     */
    
    var LENGTH_CODES  = 29;
    /* number of length codes, not counting the special END_BLOCK code */
    
    var LITERALS      = 256;
    /* number of literal bytes 0..255 */
    
    var L_CODES       = LITERALS + 1 + LENGTH_CODES;
    /* number of Literal or Length codes, including the END_BLOCK code */
    
    var D_CODES       = 30;
    /* number of distance codes */
    
    var BL_CODES      = 19;
    /* number of codes used to transfer the bit lengths */
    
    var HEAP_SIZE     = 2*L_CODES + 1;
    /* maximum heap size */
    
    var MAX_BITS      = 15;
    /* All codes must not exceed MAX_BITS bits */
    
    var Buf_size      = 16;
    /* size of bit buffer in bi_buf */
    
    
    /* ===========================================================================
     * Constants
     */
    
    var MAX_BL_BITS = 7;
    /* Bit length codes must not exceed MAX_BL_BITS bits */
    
    var END_BLOCK   = 256;
    /* end of block literal code */
    
    var REP_3_6     = 16;
    /* repeat previous bit length 3-6 times (2 bits of repeat count) */
    
    var REPZ_3_10   = 17;
    /* repeat a zero length 3-10 times  (3 bits of repeat count) */
    
    var REPZ_11_138 = 18;
    /* repeat a zero length 11-138 times  (7 bits of repeat count) */
    
    var extra_lbits =   /* extra bits for each length code */
      [0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0];
    
    var extra_dbits =   /* extra bits for each distance code */
      [0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];
    
    var extra_blbits =  /* extra bits for each bit length code */
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7];
    
    var bl_order =
      [16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];
    /* The lengths of the bit length codes are sent in order of decreasing
     * probability, to avoid transmitting the lengths for unused bit length codes.
     */
    
    /* ===========================================================================
     * Local data. These are initialized only once.
     */
    
    // We pre-fill arrays with 0 to avoid uninitialized gaps
    
    var DIST_CODE_LEN = 512; /* see definition of array dist_code below */
    
    // !!!! Use flat array insdead of structure, Freq = i*2, Len = i*2+1
    var static_ltree  = new Array((L_CODES+2) * 2);
    zero(static_ltree);
    /* The static literal tree. Since the bit lengths are imposed, there is no
     * need for the L_CODES extra codes used during heap construction. However
     * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
     * below).
     */
    
    var static_dtree  = new Array(D_CODES * 2);
    zero(static_dtree);
    /* The static distance tree. (Actually a trivial tree since all codes use
     * 5 bits.)
     */
    
    var _dist_code    = new Array(DIST_CODE_LEN);
    zero(_dist_code);
    /* Distance codes. The first 256 values correspond to the distances
     * 3 .. 258, the last 256 values correspond to the top 8 bits of
     * the 15 bit distances.
     */
    
    var _length_code  = new Array(MAX_MATCH-MIN_MATCH+1);
    zero(_length_code);
    /* length code for each normalized match length (0 == MIN_MATCH) */
    
    var base_length   = new Array(LENGTH_CODES);
    zero(base_length);
    /* First normalized length for each code (0 = MIN_MATCH) */
    
    var base_dist     = new Array(D_CODES);
    zero(base_dist);
    /* First normalized distance for each code (0 = distance of 1) */
    
    
    var StaticTreeDesc = function (static_tree, extra_bits, extra_base, elems, max_length) {
    
      this.static_tree  = static_tree;  /* static tree or NULL */
      this.extra_bits   = extra_bits;   /* extra bits for each code or NULL */
      this.extra_base   = extra_base;   /* base index for extra_bits */
      this.elems        = elems;        /* max number of elements in the tree */
      this.max_length   = max_length;   /* max bit length for the codes */
    
      // show if `static_tree` has data or dummy - needed for monomorphic objects
      this.has_stree    = static_tree && static_tree.length;
    };
    
    
    var static_l_desc;
    var static_d_desc;
    var static_bl_desc;
    
    
    var TreeDesc = function(dyn_tree, stat_desc) {
      this.dyn_tree = dyn_tree;     /* the dynamic tree */
      this.max_code = 0;            /* largest code with non zero frequency */
      this.stat_desc = stat_desc;   /* the corresponding static tree */
    };
    
    
    
    function d_code(dist) {
      return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
    }
    
    
    /* ===========================================================================
     * Output a short LSB first on the stream.
     * IN assertion: there is enough room in pendingBuf.
     */
    function put_short (s, w) {
    //    put_byte(s, (uch)((w) & 0xff));
    //    put_byte(s, (uch)((ush)(w) >> 8));
      s.pending_buf[s.pending++] = (w) & 0xff;
      s.pending_buf[s.pending++] = (w >>> 8) & 0xff;
    }
    
    
    /* ===========================================================================
     * Send a value on a given number of bits.
     * IN assertion: length <= 16 and value fits in length bits.
     */
    function send_bits(s, value, length) {
      if (s.bi_valid > (Buf_size - length)) {
        s.bi_buf |= (value << s.bi_valid) & 0xffff;
        put_short(s, s.bi_buf);
        s.bi_buf = value >> (Buf_size - s.bi_valid);
        s.bi_valid += length - Buf_size;
      } else {
        s.bi_buf |= (value << s.bi_valid) & 0xffff;
        s.bi_valid += length;
      }
    }
    
    
    function send_code(s, c, tree) {
      send_bits(s, tree[c*2]/*.Code*/, tree[c*2 + 1]/*.Len*/);
    }
    
    
    /* ===========================================================================
     * Reverse the first len bits of a code, using straightforward code (a faster
     * method would use a table)
     * IN assertion: 1 <= len <= 15
     */
    function bi_reverse(code, len) {
      var res = 0;
      do {
        res |= code & 1;
        code >>>= 1;
        res <<= 1;
      } while (--len > 0);
      return res >>> 1;
    }
    
    
    /* ===========================================================================
     * Flush the bit buffer, keeping at most 7 bits in it.
     */
    function bi_flush(s) {
      if (s.bi_valid === 16) {
        put_short(s, s.bi_buf);
        s.bi_buf = 0;
        s.bi_valid = 0;
    
      } else if (s.bi_valid >= 8) {
        s.pending_buf[s.pending++] = s.bi_buf & 0xff;
        s.bi_buf >>= 8;
        s.bi_valid -= 8;
      }
    }
    
    
    /* ===========================================================================
     * Compute the optimal bit lengths for a tree and update the total bit length
     * for the current block.
     * IN assertion: the fields freq and dad are set, heap[heap_max] and
     *    above are the tree nodes sorted by increasing frequency.
     * OUT assertions: the field len is set to the optimal bit length, the
     *     array bl_count contains the frequencies for each bit length.
     *     The length opt_len is updated; static_len is also updated if stree is
     *     not null.
     */
    function gen_bitlen(s, desc)
    //    deflate_state *s;
    //    tree_desc *desc;    /* the tree descriptor */
    {
      var tree            = desc.dyn_tree;
      var max_code        = desc.max_code;
      var stree           = desc.stat_desc.static_tree;
      var has_stree       = desc.stat_desc.has_stree;
      var extra           = desc.stat_desc.extra_bits;
      var base            = desc.stat_desc.extra_base;
      var max_length      = desc.stat_desc.max_length;
      var h;              /* heap index */
      var n, m;           /* iterate over the tree elements */
      var bits;           /* bit length */
      var xbits;          /* extra bits */
      var f;              /* frequency */
      var overflow = 0;   /* number of elements with bit length too large */
    
      for (bits = 0; bits <= MAX_BITS; bits++) {
        s.bl_count[bits] = 0;
      }
    
      /* In a first pass, compute the optimal bit lengths (which may
       * overflow in the case of the bit length tree).
       */
      tree[s.heap[s.heap_max]*2 + 1]/*.Len*/ = 0; /* root of the heap */
    
      for (h = s.heap_max+1; h < HEAP_SIZE; h++) {
        n = s.heap[h];
        bits = tree[tree[n*2 +1]/*.Dad*/ * 2 + 1]/*.Len*/ + 1;
        if (bits > max_length) {
          bits = max_length;
          overflow++;
        }
        tree[n*2 + 1]/*.Len*/ = bits;
        /* We overwrite tree[n].Dad which is no longer needed */
    
        if (n > max_code) { continue; } /* not a leaf node */
    
        s.bl_count[bits]++;
        xbits = 0;
        if (n >= base) {
          xbits = extra[n-base];
        }
        f = tree[n * 2]/*.Freq*/;
        s.opt_len += f * (bits + xbits);
        if (has_stree) {
          s.static_len += f * (stree[n*2 + 1]/*.Len*/ + xbits);
        }
      }
      if (overflow === 0) { return; }
    
      // Trace((stderr,"\nbit length overflow\n"));
      /* This happens for example on obj2 and pic of the Calgary corpus */
    
      /* Find the first bit length which could increase: */
      do {
        bits = max_length-1;
        while (s.bl_count[bits] === 0) { bits--; }
        s.bl_count[bits]--;      /* move one leaf down the tree */
        s.bl_count[bits+1] += 2; /* move one overflow item as its brother */
        s.bl_count[max_length]--;
        /* The brother of the overflow item also moves one step up,
         * but this does not affect bl_count[max_length]
         */
        overflow -= 2;
      } while (overflow > 0);
    
      /* Now recompute all bit lengths, scanning in increasing frequency.
       * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
       * lengths instead of fixing only the wrong ones. This idea is taken
       * from 'ar' written by Haruhiko Okumura.)
       */
      for (bits = max_length; bits !== 0; bits--) {
        n = s.bl_count[bits];
        while (n !== 0) {
          m = s.heap[--h];
          if (m > max_code) { continue; }
          if (tree[m*2 + 1]/*.Len*/ !== bits) {
            // Trace((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
            s.opt_len += (bits - tree[m*2 + 1]/*.Len*/)*tree[m*2]/*.Freq*/;
            tree[m*2 + 1]/*.Len*/ = bits;
          }
          n--;
        }
      }
    }
    
    
    /* ===========================================================================
     * Generate the codes for a given tree and bit counts (which need not be
     * optimal).
     * IN assertion: the array bl_count contains the bit length statistics for
     * the given tree and the field len is set for all tree elements.
     * OUT assertion: the field code is set for all tree elements of non
     *     zero code length.
     */
    function gen_codes(tree, max_code, bl_count)
    //    ct_data *tree;             /* the tree to decorate */
    //    int max_code;              /* largest code with non zero frequency */
    //    ushf *bl_count;            /* number of codes at each bit length */
    {
      var next_code = new Array(MAX_BITS+1); /* next code value for each bit length */
      var code = 0;              /* running code value */
      var bits;                  /* bit index */
      var n;                     /* code index */
    
      /* The distribution counts are first used to generate the code values
       * without bit reversal.
       */
      for (bits = 1; bits <= MAX_BITS; bits++) {
        next_code[bits] = code = (code + bl_count[bits-1]) << 1;
      }
      /* Check that the bit counts in bl_count are consistent. The last code
       * must be all ones.
       */
      //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
      //        "inconsistent bit counts");
      //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));
    
      for (n = 0;  n <= max_code; n++) {
        var len = tree[n*2 + 1]/*.Len*/;
        if (len === 0) { continue; }
        /* Now reverse the bits */
        tree[n*2]/*.Code*/ = bi_reverse(next_code[len]++, len);
    
        //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
        //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
      }
    }
    
    
    /* ===========================================================================
     * Initialize the various 'constant' tables.
     */
    function tr_static_init() {
      var n;        /* iterates over tree elements */
      var bits;     /* bit counter */
      var length;   /* length value */
      var code;     /* code value */
      var dist;     /* distance index */
      var bl_count = new Array(MAX_BITS+1);
      /* number of codes at each bit length for an optimal tree */
    
      // do check in _tr_init()
      //if (static_init_done) return;
    
      /* For some embedded targets, global variables are not initialized: */
    /*#ifdef NO_INIT_GLOBAL_POINTERS
      static_l_desc.static_tree = static_ltree;
      static_l_desc.extra_bits = extra_lbits;
      static_d_desc.static_tree = static_dtree;
      static_d_desc.extra_bits = extra_dbits;
      static_bl_desc.extra_bits = extra_blbits;
    #endif*/
    
      /* Initialize the mapping length (0..255) -> length code (0..28) */
      length = 0;
      for (code = 0; code < LENGTH_CODES-1; code++) {
        base_length[code] = length;
        for (n = 0; n < (1<<extra_lbits[code]); n++) {
          _length_code[length++] = code;
        }
      }
      //Assert (length == 256, "tr_static_init: length != 256");
      /* Note that the length 255 (match length 258) can be represented
       * in two different ways: code 284 + 5 bits or code 285, so we
       * overwrite length_code[255] to use the best encoding:
       */
      _length_code[length-1] = code;
    
      /* Initialize the mapping dist (0..32K) -> dist code (0..29) */
      dist = 0;
      for (code = 0 ; code < 16; code++) {
        base_dist[code] = dist;
        for (n = 0; n < (1<<extra_dbits[code]); n++) {
          _dist_code[dist++] = code;
        }
      }
      //Assert (dist == 256, "tr_static_init: dist != 256");
      dist >>= 7; /* from now on, all distances are divided by 128 */
      for ( ; code < D_CODES; code++) {
        base_dist[code] = dist << 7;
        for (n = 0; n < (1<<(extra_dbits[code]-7)); n++) {
          _dist_code[256 + dist++] = code;
        }
      }
      //Assert (dist == 256, "tr_static_init: 256+dist != 512");
    
      /* Construct the codes of the static literal tree */
      for (bits = 0; bits <= MAX_BITS; bits++) {
        bl_count[bits] = 0;
      }
    
      n = 0;
      while (n <= 143) {
        static_ltree[n*2 + 1]/*.Len*/ = 8;
        n++;
        bl_count[8]++;
      }
      while (n <= 255) {
        static_ltree[n*2 + 1]/*.Len*/ = 9;
        n++;
        bl_count[9]++;
      }
      while (n <= 279) {
        static_ltree[n*2 + 1]/*.Len*/ = 7;
        n++;
        bl_count[7]++;
      }
      while (n <= 287) {
        static_ltree[n*2 + 1]/*.Len*/ = 8;
        n++;
        bl_count[8]++;
      }
      /* Codes 286 and 287 do not exist, but we must include them in the
       * tree construction to get a canonical Huffman tree (longest code
       * all ones)
       */
      gen_codes(static_ltree, L_CODES+1, bl_count);
    
      /* The static distance tree is trivial: */
      for (n = 0; n < D_CODES; n++) {
        static_dtree[n*2 + 1]/*.Len*/ = 5;
        static_dtree[n*2]/*.Code*/ = bi_reverse(n, 5);
      }
    
      // Now data ready and we can init static trees
      static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS+1, L_CODES, MAX_BITS);
      static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0,          D_CODES, MAX_BITS);
      static_bl_desc =new StaticTreeDesc(new Array(0), extra_blbits, 0,         BL_CODES, MAX_BL_BITS);
    
      //static_init_done = true;
    }
    
    
    /* ===========================================================================
     * Initialize a new block.
     */
    function init_block(s) {
      var n; /* iterates over tree elements */
    
      /* Initialize the trees. */
      for (n = 0; n < L_CODES;  n++) { s.dyn_ltree[n*2]/*.Freq*/ = 0; }
      for (n = 0; n < D_CODES;  n++) { s.dyn_dtree[n*2]/*.Freq*/ = 0; }
      for (n = 0; n < BL_CODES; n++) { s.bl_tree[n*2]/*.Freq*/ = 0; }
    
      s.dyn_ltree[END_BLOCK*2]/*.Freq*/ = 1;
      s.opt_len = s.static_len = 0;
      s.last_lit = s.matches = 0;
    }
    
    
    /* ===========================================================================
     * Flush the bit buffer and align the output on a byte boundary
     */
    function bi_windup(s)
    {
      if (s.bi_valid > 8) {
        put_short(s, s.bi_buf);
      } else if (s.bi_valid > 0) {
        //put_byte(s, (Byte)s->bi_buf);
        s.pending_buf[s.pending++] = s.bi_buf;
      }
      s.bi_buf = 0;
      s.bi_valid = 0;
    }
    
    /* ===========================================================================
     * Copy a stored block, storing first the length and its
     * one's complement if requested.
     */
    function copy_block(s, buf, len, header)
    //DeflateState *s;
    //charf    *buf;    /* the input data */
    //unsigned len;     /* its length */
    //int      header;  /* true if block header must be written */
    {
      bi_windup(s);        /* align on byte boundary */
    
      if (header) {
        put_short(s, len);
        put_short(s, ~len);
      }
    //  while (len--) {
    //    put_byte(s, *buf++);
    //  }
      utils.arraySet(s.pending_buf, s.window, buf, len, s.pending);
      s.pending += len;
    }
    
    /* ===========================================================================
     * Compares to subtrees, using the tree depth as tie breaker when
     * the subtrees have equal frequency. This minimizes the worst case length.
     */
    function smaller(tree, n, m, depth) {
      var _n2 = n*2;
      var _m2 = m*2;
      return (tree[_n2]/*.Freq*/ < tree[_m2]/*.Freq*/ ||
             (tree[_n2]/*.Freq*/ === tree[_m2]/*.Freq*/ && depth[n] <= depth[m]));
    }
    
    /* ===========================================================================
     * Restore the heap property by moving down the tree starting at node k,
     * exchanging a node with the smallest of its two sons if necessary, stopping
     * when the heap property is re-established (each father smaller than its
     * two sons).
     */
    function pqdownheap(s, tree, k)
    //    deflate_state *s;
    //    ct_data *tree;  /* the tree to restore */
    //    int k;               /* node to move down */
    {
      var v = s.heap[k];
      var j = k << 1;  /* left son of k */
      while (j <= s.heap_len) {
        /* Set j to the smallest of the two sons: */
        if (j < s.heap_len &&
          smaller(tree, s.heap[j+1], s.heap[j], s.depth)) {
          j++;
        }
        /* Exit if v is smaller than both sons */
        if (smaller(tree, v, s.heap[j], s.depth)) { break; }
    
        /* Exchange v with the smallest son */
        s.heap[k] = s.heap[j];
        k = j;
    
        /* And continue down the tree, setting j to the left son of k */
        j <<= 1;
      }
      s.heap[k] = v;
    }
    
    
    // inlined manually
    // var SMALLEST = 1;
    
    /* ===========================================================================
     * Send the block data compressed using the given Huffman trees
     */
    function compress_block(s, ltree, dtree)
    //    deflate_state *s;
    //    const ct_data *ltree; /* literal tree */
    //    const ct_data *dtree; /* distance tree */
    {
      var dist;           /* distance of matched string */
      var lc;             /* match length or unmatched char (if dist == 0) */
      var lx = 0;         /* running index in l_buf */
      var code;           /* the code to send */
      var extra;          /* number of extra bits to send */
    
      if (s.last_lit !== 0) {
        do {
          dist = (s.pending_buf[s.d_buf + lx*2] << 8) | (s.pending_buf[s.d_buf + lx*2 + 1]);
          lc = s.pending_buf[s.l_buf + lx];
          lx++;
    
          if (dist === 0) {
            send_code(s, lc, ltree); /* send a literal byte */
            //Tracecv(isgraph(lc), (stderr," '%c' ", lc));
          } else {
            /* Here, lc is the match length - MIN_MATCH */
            code = _length_code[lc];
            send_code(s, code+LITERALS+1, ltree); /* send the length code */
            extra = extra_lbits[code];
            if (extra !== 0) {
              lc -= base_length[code];
              send_bits(s, lc, extra);       /* send the extra length bits */
            }
            dist--; /* dist is now the match distance - 1 */
            code = d_code(dist);
            //Assert (code < D_CODES, "bad d_code");
    
            send_code(s, code, dtree);       /* send the distance code */
            extra = extra_dbits[code];
            if (extra !== 0) {
              dist -= base_dist[code];
              send_bits(s, dist, extra);   /* send the extra distance bits */
            }
          } /* literal or match pair ? */
    
          /* Check that the overlay between pending_buf and d_buf+l_buf is ok: */
          //Assert((uInt)(s->pending) < s->lit_bufsize + 2*lx,
          //       "pendingBuf overflow");
    
        } while (lx < s.last_lit);
      }
    
      send_code(s, END_BLOCK, ltree);
    }
    
    
    /* ===========================================================================
     * Construct one Huffman tree and assigns the code bit strings and lengths.
     * Update the total bit length for the current block.
     * IN assertion: the field freq is set for all tree elements.
     * OUT assertions: the fields len and code are set to the optimal bit length
     *     and corresponding code. The length opt_len is updated; static_len is
     *     also updated if stree is not null. The field max_code is set.
     */
    function build_tree(s, desc)
    //    deflate_state *s;
    //    tree_desc *desc; /* the tree descriptor */
    {
      var tree     = desc.dyn_tree;
      var stree    = desc.stat_desc.static_tree;
      var has_stree = desc.stat_desc.has_stree;
      var elems    = desc.stat_desc.elems;
      var n, m;          /* iterate over heap elements */
      var max_code = -1; /* largest code with non zero frequency */
      var node;          /* new node being created */
    
      /* Construct the initial heap, with least frequent element in
       * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
       * heap[0] is not used.
       */
      s.heap_len = 0;
      s.heap_max = HEAP_SIZE;
    
      for (n = 0; n < elems; n++) {
        if (tree[n * 2]/*.Freq*/ !== 0) {
          s.heap[++s.heap_len] = max_code = n;
          s.depth[n] = 0;
    
        } else {
          tree[n*2 + 1]/*.Len*/ = 0;
        }
      }
    
      /* The pkzip format requires that at least one distance code exists,
       * and that at least one bit should be sent even if there is only one
       * possible code. So to avoid special checks later on we force at least
       * two codes of non zero frequency.
       */
      while (s.heap_len < 2) {
        node = s.heap[++s.heap_len] = (max_code < 2 ? ++max_code : 0);
        tree[node * 2]/*.Freq*/ = 1;
        s.depth[node] = 0;
        s.opt_len--;
    
        if (has_stree) {
          s.static_len -= stree[node*2 + 1]/*.Len*/;
        }
        /* node is 0 or 1 so it does not have extra bits */
      }
      desc.max_code = max_code;
    
      /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
       * establish sub-heaps of increasing lengths:
       */
      for (n = (s.heap_len >> 1/*int /2*/); n >= 1; n--) { pqdownheap(s, tree, n); }
    
      /* Construct the Huffman tree by repeatedly combining the least two
       * frequent nodes.
       */
      node = elems;              /* next internal node of the tree */
      do {
        //pqremove(s, tree, n);  /* n = node of least frequency */
        /*** pqremove ***/
        n = s.heap[1/*SMALLEST*/];
        s.heap[1/*SMALLEST*/] = s.heap[s.heap_len--];
        pqdownheap(s, tree, 1/*SMALLEST*/);
        /***/
    
        m = s.heap[1/*SMALLEST*/]; /* m = node of next least frequency */
    
        s.heap[--s.heap_max] = n; /* keep the nodes sorted by frequency */
        s.heap[--s.heap_max] = m;
    
        /* Create a new node father of n and m */
        tree[node * 2]/*.Freq*/ = tree[n * 2]/*.Freq*/ + tree[m * 2]/*.Freq*/;
        s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
        tree[n*2 + 1]/*.Dad*/ = tree[m*2 + 1]/*.Dad*/ = node;
    
        /* and insert the new node in the heap */
        s.heap[1/*SMALLEST*/] = node++;
        pqdownheap(s, tree, 1/*SMALLEST*/);
    
      } while (s.heap_len >= 2);
    
      s.heap[--s.heap_max] = s.heap[1/*SMALLEST*/];
    
      /* At this point, the fields freq and dad are set. We can now
       * generate the bit lengths.
       */
      gen_bitlen(s, desc);
    
      /* The field len is now set, we can generate the bit codes */
      gen_codes(tree, max_code, s.bl_count);
    }
    
    
    /* ===========================================================================
     * Scan a literal or distance tree to determine the frequencies of the codes
     * in the bit length tree.
     */
    function scan_tree(s, tree, max_code)
    //    deflate_state *s;
    //    ct_data *tree;   /* the tree to be scanned */
    //    int max_code;    /* and its largest code of non zero frequency */
    {
      var n;                     /* iterates over all tree elements */
      var prevlen = -1;          /* last emitted length */
      var curlen;                /* length of current code */
    
      var nextlen = tree[0*2 + 1]/*.Len*/; /* length of next code */
    
      var count = 0;             /* repeat count of the current code */
      var max_count = 7;         /* max repeat count */
      var min_count = 4;         /* min repeat count */
    
      if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
      }
      tree[(max_code+1)*2 + 1]/*.Len*/ = 0xffff; /* guard */
    
      for (n = 0; n <= max_code; n++) {
        curlen = nextlen;
        nextlen = tree[(n+1)*2 + 1]/*.Len*/;
    
        if (++count < max_count && curlen === nextlen) {
          continue;
    
        } else if (count < min_count) {
          s.bl_tree[curlen * 2]/*.Freq*/ += count;
    
        } else if (curlen !== 0) {
    
          if (curlen !== prevlen) { s.bl_tree[curlen * 2]/*.Freq*/++; }
          s.bl_tree[REP_3_6*2]/*.Freq*/++;
    
        } else if (count <= 10) {
          s.bl_tree[REPZ_3_10*2]/*.Freq*/++;
    
        } else {
          s.bl_tree[REPZ_11_138*2]/*.Freq*/++;
        }
    
        count = 0;
        prevlen = curlen;
    
        if (nextlen === 0) {
          max_count = 138;
          min_count = 3;
    
        } else if (curlen === nextlen) {
          max_count = 6;
          min_count = 3;
    
        } else {
          max_count = 7;
          min_count = 4;
        }
      }
    }
    
    
    /* ===========================================================================
     * Send a literal or distance tree in compressed form, using the codes in
     * bl_tree.
     */
    function send_tree(s, tree, max_code)
    //    deflate_state *s;
    //    ct_data *tree; /* the tree to be scanned */
    //    int max_code;       /* and its largest code of non zero frequency */
    {
      var n;                     /* iterates over all tree elements */
      var prevlen = -1;          /* last emitted length */
      var curlen;                /* length of current code */
    
      var nextlen = tree[0*2 + 1]/*.Len*/; /* length of next code */
    
      var count = 0;             /* repeat count of the current code */
      var max_count = 7;         /* max repeat count */
      var min_count = 4;         /* min repeat count */
    
      /* tree[max_code+1].Len = -1; */  /* guard already set */
      if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
      }
    
      for (n = 0; n <= max_code; n++) {
        curlen = nextlen;
        nextlen = tree[(n+1)*2 + 1]/*.Len*/;
    
        if (++count < max_count && curlen === nextlen) {
          continue;
    
        } else if (count < min_count) {
          do { send_code(s, curlen, s.bl_tree); } while (--count !== 0);
    
        } else if (curlen !== 0) {
          if (curlen !== prevlen) {
            send_code(s, curlen, s.bl_tree);
            count--;
          }
          //Assert(count >= 3 && count <= 6, " 3_6?");
          send_code(s, REP_3_6, s.bl_tree);
          send_bits(s, count-3, 2);
    
        } else if (count <= 10) {
          send_code(s, REPZ_3_10, s.bl_tree);
          send_bits(s, count-3, 3);
    
        } else {
          send_code(s, REPZ_11_138, s.bl_tree);
          send_bits(s, count-11, 7);
        }
    
        count = 0;
        prevlen = curlen;
        if (nextlen === 0) {
          max_count = 138;
          min_count = 3;
    
        } else if (curlen === nextlen) {
          max_count = 6;
          min_count = 3;
    
        } else {
          max_count = 7;
          min_count = 4;
        }
      }
    }
    
    
    /* ===========================================================================
     * Construct the Huffman tree for the bit lengths and return the index in
     * bl_order of the last bit length code to send.
     */
    function build_bl_tree(s) {
      var max_blindex;  /* index of last bit length code of non zero freq */
    
      /* Determine the bit length frequencies for literal and distance trees */
      scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
      scan_tree(s, s.dyn_dtree, s.d_desc.max_code);
    
      /* Build the bit length tree: */
      build_tree(s, s.bl_desc);
      /* opt_len now includes the length of the tree representations, except
       * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
       */
    
      /* Determine the number of bit length codes to send. The pkzip format
       * requires that at least 4 bit length codes be sent. (appnote.txt says
       * 3 but the actual value used is 4.)
       */
      for (max_blindex = BL_CODES-1; max_blindex >= 3; max_blindex--) {
        if (s.bl_tree[bl_order[max_blindex]*2 + 1]/*.Len*/ !== 0) {
          break;
        }
      }
      /* Update opt_len to include the bit length tree and counts */
      s.opt_len += 3*(max_blindex+1) + 5+5+4;
      //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
      //        s->opt_len, s->static_len));
    
      return max_blindex;
    }
    
    
    /* ===========================================================================
     * Send the header for a block using dynamic Huffman trees: the counts, the
     * lengths of the bit length codes, the literal tree and the distance tree.
     * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
     */
    function send_all_trees(s, lcodes, dcodes, blcodes)
    //    deflate_state *s;
    //    int lcodes, dcodes, blcodes; /* number of codes for each tree */
    {
      var rank;                    /* index in bl_order */
    
      //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
      //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
      //        "too many codes");
      //Tracev((stderr, "\nbl counts: "));
      send_bits(s, lcodes-257, 5); /* not +255 as stated in appnote.txt */
      send_bits(s, dcodes-1,   5);
      send_bits(s, blcodes-4,  4); /* not -3 as stated in appnote.txt */
      for (rank = 0; rank < blcodes; rank++) {
        //Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
        send_bits(s, s.bl_tree[bl_order[rank]*2 + 1]/*.Len*/, 3);
      }
      //Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));
    
      send_tree(s, s.dyn_ltree, lcodes-1); /* literal tree */
      //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));
    
      send_tree(s, s.dyn_dtree, dcodes-1); /* distance tree */
      //Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
    }
    
    
    /* ===========================================================================
     * Check if the data type is TEXT or BINARY, using the following algorithm:
     * - TEXT if the two conditions below are satisfied:
     *    a) There are no non-portable control characters belonging to the
     *       "black list" (0..6, 14..25, 28..31).
     *    b) There is at least one printable character belonging to the
     *       "white list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
     * - BINARY otherwise.
     * - The following partially-portable control characters form a
     *   "gray list" that is ignored in this detection algorithm:
     *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
     * IN assertion: the fields Freq of dyn_ltree are set.
     */
    function detect_data_type(s) {
      /* black_mask is the bit mask of black-listed bytes
       * set bits 0..6, 14..25, and 28..31
       * 0xf3ffc07f = binary 11110011111111111100000001111111
       */
      var black_mask = 0xf3ffc07f;
      var n;
    
      /* Check for non-textual ("black-listed") bytes. */
      for (n = 0; n <= 31; n++, black_mask >>>= 1) {
        if ((black_mask & 1) && (s.dyn_ltree[n*2]/*.Freq*/ !== 0)) {
          return Z_BINARY;
        }
      }
    
      /* Check for textual ("white-listed") bytes. */
      if (s.dyn_ltree[9 * 2]/*.Freq*/ !== 0 || s.dyn_ltree[10 * 2]/*.Freq*/ !== 0 ||
          s.dyn_ltree[13 * 2]/*.Freq*/ !== 0) {
        return Z_TEXT;
      }
      for (n = 32; n < LITERALS; n++) {
        if (s.dyn_ltree[n * 2]/*.Freq*/ !== 0) {
          return Z_TEXT;
        }
      }
    
      /* There are no "black-listed" or "white-listed" bytes:
       * this stream either is empty or has tolerated ("gray-listed") bytes only.
       */
      return Z_BINARY;
    }
    
    
    var static_init_done = false;
    
    /* ===========================================================================
     * Initialize the tree data structures for a new zlib stream.
     */
    function _tr_init(s)
    {
    
      if (!static_init_done) {
        tr_static_init();
        static_init_done = true;
      }
    
      s.l_desc  = new TreeDesc(s.dyn_ltree, static_l_desc);
      s.d_desc  = new TreeDesc(s.dyn_dtree, static_d_desc);
      s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);
    
      s.bi_buf = 0;
      s.bi_valid = 0;
    
      /* Initialize the first block of the first file: */
      init_block(s);
    }
    
    
    /* ===========================================================================
     * Send a stored block
     */
    function _tr_stored_block(s, buf, stored_len, last)
    //DeflateState *s;
    //charf *buf;       /* input block */
    //ulg stored_len;   /* length of input block */
    //int last;         /* one if this is the last block for a file */
    {
      send_bits(s, (STORED_BLOCK<<1)+(last ? 1 : 0), 3);    /* send block type */
      copy_block(s, buf, stored_len, true); /* with header */
    }
    
    
    /* ===========================================================================
     * Send one empty static block to give enough lookahead for inflate.
     * This takes 10 bits, of which 7 may remain in the bit buffer.
     */
    function _tr_align(s) {
      send_bits(s, STATIC_TREES<<1, 3);
      send_code(s, END_BLOCK, static_ltree);
      bi_flush(s);
    }
    
    
    /* ===========================================================================
     * Determine the best encoding for the current block: dynamic trees, static
     * trees or store, and output the encoded block to the zip file.
     */
    function _tr_flush_block(s, buf, stored_len, last)
    //DeflateState *s;
    //charf *buf;       /* input block, or NULL if too old */
    //ulg stored_len;   /* length of input block */
    //int last;         /* one if this is the last block for a file */
    {
      var opt_lenb, static_lenb;  /* opt_len and static_len in bytes */
      var max_blindex = 0;        /* index of last bit length code of non zero freq */
    
      /* Build the Huffman trees unless a stored block is forced */
      if (s.level > 0) {
    
        /* Check if the file is binary or text */
        if (s.strm.data_type === Z_UNKNOWN) {
          s.strm.data_type = detect_data_type(s);
        }
    
        /* Construct the literal and distance trees */
        build_tree(s, s.l_desc);
        // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
        //        s->static_len));
    
        build_tree(s, s.d_desc);
        // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
        //        s->static_len));
        /* At this point, opt_len and static_len are the total bit lengths of
         * the compressed block data, excluding the tree representations.
         */
    
        /* Build the bit length tree for the above two trees, and get the index
         * in bl_order of the last bit length code to send.
         */
        max_blindex = build_bl_tree(s);
    
        /* Determine the best encoding. Compute the block lengths in bytes. */
        opt_lenb = (s.opt_len+3+7) >>> 3;
        static_lenb = (s.static_len+3+7) >>> 3;
    
        // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
        //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
        //        s->last_lit));
    
        if (static_lenb <= opt_lenb) { opt_lenb = static_lenb; }
    
      } else {
        // Assert(buf != (char*)0, "lost buf");
        opt_lenb = static_lenb = stored_len + 5; /* force a stored block */
      }
    
      if ((stored_len+4 <= opt_lenb) && (buf !== -1)) {
        /* 4: two words for the lengths */
    
        /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
         * Otherwise we can't have processed more than WSIZE input bytes since
         * the last block flush, because compression would have been
         * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
         * transform a block into a stored block.
         */
        _tr_stored_block(s, buf, stored_len, last);
    
      } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {
    
        send_bits(s, (STATIC_TREES<<1) + (last ? 1 : 0), 3);
        compress_block(s, static_ltree, static_dtree);
    
      } else {
        send_bits(s, (DYN_TREES<<1) + (last ? 1 : 0), 3);
        send_all_trees(s, s.l_desc.max_code+1, s.d_desc.max_code+1, max_blindex+1);
        compress_block(s, s.dyn_ltree, s.dyn_dtree);
      }
      // Assert (s->compressed_len == s->bits_sent, "bad compressed size");
      /* The above check is made mod 2^32, for files larger than 512 MB
       * and uLong implemented on 32 bits.
       */
      init_block(s);
    
      if (last) {
        bi_windup(s);
      }
      // Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
      //       s->compressed_len-7*last));
    }
    
    /* ===========================================================================
     * Save the match info and tally the frequency counts. Return true if
     * the current block must be flushed.
     */
    function _tr_tally(s, dist, lc)
    //    deflate_state *s;
    //    unsigned dist;  /* distance of matched string */
    //    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */
    {
      //var out_length, in_length, dcode;
    
      s.pending_buf[s.d_buf + s.last_lit * 2]     = (dist >>> 8) & 0xff;
      s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 0xff;
    
      s.pending_buf[s.l_buf + s.last_lit] = lc & 0xff;
      s.last_lit++;
    
      if (dist === 0) {
        /* lc is the unmatched char */
        s.dyn_ltree[lc*2]/*.Freq*/++;
      } else {
        s.matches++;
        /* Here, lc is the match length - MIN_MATCH */
        dist--;             /* dist = match distance - 1 */
        //Assert((ush)dist < (ush)MAX_DIST(s) &&
        //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
        //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");
    
        s.dyn_ltree[(_length_code[lc]+LITERALS+1) * 2]/*.Freq*/++;
        s.dyn_dtree[d_code(dist) * 2]/*.Freq*/++;
      }
    
    // (!) This block is disabled in zlib defailts,
    // don't enable it for binary compatibility
    
    //#ifdef TRUNCATE_BLOCK
    //  /* Try to guess if it is profitable to stop the current block here */
    //  if ((s.last_lit & 0x1fff) === 0 && s.level > 2) {
    //    /* Compute an upper bound for the compressed length */
    //    out_length = s.last_lit*8;
    //    in_length = s.strstart - s.block_start;
    //
    //    for (dcode = 0; dcode < D_CODES; dcode++) {
    //      out_length += s.dyn_dtree[dcode*2]/*.Freq*/ * (5 + extra_dbits[dcode]);
    //    }
    //    out_length >>>= 3;
    //    //Tracev((stderr,"\nlast_lit %u, in %ld, out ~%ld(%ld%%) ",
    //    //       s->last_lit, in_length, out_length,
    //    //       100L - out_length*100L/in_length));
    //    if (s.matches < (s.last_lit>>1)/*int /2*/ && out_length < (in_length>>1)/*int /2*/) {
    //      return true;
    //    }
    //  }
    //#endif
    
      return (s.last_lit === s.lit_bufsize-1);
      /* We avoid equality with lit_bufsize because of wraparound at 64K
       * on 16 bit machines and because stored blocks are restricted to
       * 64K-1 bytes.
       */
    }
    
    exports._tr_init  = _tr_init;
    exports._tr_stored_block = _tr_stored_block;
    exports._tr_flush_block  = _tr_flush_block;
    exports._tr_tally = _tr_tally;
    exports._tr_align = _tr_align;
    },{"../utils/common":27}],39:[function(_dereq_,module,exports){
    'use strict';
    
    
    function ZStream() {
      /* next input byte */
      this.input = null; // JS specific, because we have no pointers
      this.next_in = 0;
      /* number of bytes available at input */
      this.avail_in = 0;
      /* total number of input bytes read so far */
      this.total_in = 0;
      /* next output byte should be put there */
      this.output = null; // JS specific, because we have no pointers
      this.next_out = 0;
      /* remaining free space at output */
      this.avail_out = 0;
      /* total number of bytes output so far */
      this.total_out = 0;
      /* last error message, NULL if no error */
      this.msg = ''/*Z_NULL*/;
      /* not visible by applications */
      this.state = null;
      /* best guess about the data type: binary or text */
      this.data_type = 2/*Z_UNKNOWN*/;
      /* adler32 value of the uncompressed data */
      this.adler = 0;
    }
    
    module.exports = ZStream;
    },{}]},{},[9])
    (9)
    });