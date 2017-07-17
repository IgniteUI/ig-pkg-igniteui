/*!@license
* Infragistics.Web.ClientUI infragistics.documents.core_openxml.js 17.1.20171.2002
*
* Copyright (c) 2011-2017 Infragistics Inc.
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
(function(factory){if(typeof define==="function"&&define.amd){define(["./infragistics.util","./infragistics.ext_core","./infragistics.ext_collections","./infragistics.ext_collectionsExtended","./infragistics.ext_io","./infragistics.ext_text","./infragistics.xml","./infragistics.documents.core_core","./infragistics.ext_ui"],factory)}else{factory(igRoot)}})(function($){$.ig=$.ig||{};var $$t={};$.ig.globalDefs=$.ig.globalDefs||{};$.ig.globalDefs.$$ae=$$t;$$0=$.ig.globalDefs.$$0;$$4=$.ig.globalDefs.$$4;$$5=$.ig.globalDefs.$$5;$$7=$.ig.globalDefs.$$7;$$8=$.ig.globalDefs.$$8;$$2=$.ig.globalDefs.$$2;$$v=$.ig.globalDefs.$$v;$$6=$.ig.globalDefs.$$6;$$a=$.ig.globalDefs.$$a;$.ig.$currDefinitions=$$t;$.ig.util.bulkDefine(["CT_AbsoluteAnchor:b","CT_OneCellAnchor:d","CT_TwoCellAnchor:e","EG_Anchor:f","IEG_AnchorVisitor$2:g","AlternateContentChoice:bg","AttributeValue:bh","CT_GraphicalObject:bi","AlternateGraphicalObjectContent:bj","CT_BlipFillProperties:bo","CT_Connector:bu","CT_CustomGeometry2D:bx","CT_DashStopList:bz","CT_GraphicalObjectData:b6","CT_GraphicalObjectFrame:b7","CT_GroupFillProperties:cb","CT_GroupShape:cd","CT_LineJoinBevel:cj","CT_LineJoinMiterProperties:ck","CT_LineJoinRound:cl","CT_NoFillProperties:cn","CT_Path2DArcTo:cw","CT_Path2DClose:cx","CT_Path2DCubicBezierTo:cy","CT_Path2DLineTo:cz","CT_Path2DMoveTo:c1","CT_Path2DQuadBezierTo:c2","CT_Picture:c4","CT_PresetGeometry2D:db","CT_PresetLineDashProperties:dc","CT_RegularTextRun:dd","CT_SchemeColor:dg","CT_Shape:dh","CT_SolidFillProperties:dp","CT_SRgbColor:dq","CT_StretchInfoProperties:dr","CT_SysColor:dt","CT_TileInfoProperties:d1","EG_ColorChoice:d3","IEG_ColorChoice:d4","IEG_ColorChoiceVisitor$2:d5","IEG_ColorTransform:d6","IEG_ColorTransformVisitor$2:d7","IEG_FillModeProperties:d8","IEG_FillModePropertiesVisitor$2:d9","IEG_FillProperties:ea","IEG_FillPropertiesVisitor$2:eb","IEG_Geometry:ec","IEG_GeometryVisitor$2:ed","IEG_LineDashProperties:ee","IEG_LineDashPropertiesVisitor$2:ef","IEG_LineFillProperties:eg","IEG_LineFillPropertiesVisitor$2:eh","IEG_LineJoinProperties:ei","IEG_LineJoinPropertiesVisitor$2:ej","IEG_TextRun:ek","IEG_TextRunVisitor$2:el","IGraphicalObjectContent:em","IGraphicalObjectContentVisitor$2:en","IAdjustHandle:eo","IPath2DCommand:ep","IPath2DCommandVisitor$2:eq","ICT_ShapePropertiesOwner:er","ICT_ShapeStyleOwner:es","IShapesOwner:et","ColorTransform_Alpha:eu","ColorTransform_AlphaOff:ev","ColorTransform_AlphaMod:ew","ColorTransform_Blue:ex","ColorTransform_BlueOff:ey","ColorTransform_BlueMod:ez","ColorTransform_Comp:e0","ColorTransform_Gray:e1","ColorTransform_Green:e2","ColorTransform_GreenOff:e3","ColorTransform_GreenMod:e4","ColorTransform_Hue:e5","ColorTransform_HueOff:e6","ColorTransform_HueMod:e7","ColorTransform_Inv:e8","ColorTransform_Lum:e9","ColorTransform_LumOff:fa","ColorTransform_LumMod:fb","ColorTransform_Red:fc","ColorTransform_RedOff:fd","ColorTransform_RedMod:fe","ColorTransform_Sat:ff","ColorTransform_SatOff:fg","ColorTransform_SatMod:fh","ColorTransform_Shade:fi","ColorTransform_Tint:fj","ElementLoadCallbacks:fk","OfficeDocumentManager:fp","QualifiedNameInfo:fr","UnknownElementCache:fs","UnknownElementCache___GetDescendants__IteratorClass:ft","UnknownStructure:fu","XmlReadManager:fv","XmlWriteManager:ih","CoreProperties:ii","DcDcmiType:ij","DcElements:ik","DcTerms:il","Drawing2010Main:im","Drawing2010Slicer:io","DrawingMLChart:ip","DrawingMLMain:iq","DrawingNamespaceDefinitionBase:ir","EmptyNamespace:is","IGOfficeExtensions:it","MarkupCompatibility2006:iu","OfficeDocumentDocPropsVTypes:iv","IVariantValueContainer:ix","OfficeDocumentExtendedProperties:iz","OfficeDocumentRelationships:i0","OfficeNamespace:i1","VmlNamespace:i2","XmlNamespace:i3","XmlNamespaceDefinitionBase:i4","XmlSchemaInstance:i6","OfficeExtensibilityPartManagerBase:ji","Office2007ExtensibilityPartManager:jj","Office2010ExtensibilityPartManager:jk","PartManagerBase:jo","RoundTripDataPartManager:jr","ThemePartManager:js","XmlPartManagerBase:jx","PackagePart:j4","Package:j5","ContentTypesWriter:j7","ElementDecl:kh","ContentModel:kj","Group:km","SgmlDtd:kr"]);var $a=$.ig.intDivide,$b=$.ig.util.cast,$c=$.ig.util.defType,$d=$.ig.util.defEnum,$e=$.ig.util.getBoxIfEnum,$f=$.ig.util.getDefaultValue,$g=$.ig.util.getEnumValue,$h=$.ig.util.getValue,$i=$.ig.util.intSToU,$j=$.ig.util.nullableEquals,$k=$.ig.util.nullableIsNull,$l=$.ig.util.nullableNotEquals,$m=$.ig.util.toNullable,$n=$.ig.util.toString$1,$o=$.ig.util.u32BitwiseAnd,$p=$.ig.util.u32BitwiseOr,$q=$.ig.util.u32BitwiseXor,$r=$.ig.util.u32LS,$s=$.ig.util.unwrapNullable,$t=$.ig.util.wrapNullable,$u=String.fromCharCode,$v=$.ig.util.castObjTo$t,$w=$.ig.util.compare,$x=$.ig.util.replace,$y=$.ig.util.stringFormat,$z=$.ig.util.stringFormat1,$0=$.ig.util.stringFormat2,$1=$.ig.util.stringCompare1,$2=$.ig.util.stringCompare2,$3=$.ig.util.stringCompare3,$4=$.ig.util.isDigit,$5=$.ig.util.isDigit1,$6=$.ig.util.isLetter,$7=$.ig.util.isNumber,$8=$.ig.util.isLetterOrDigit,$9=$.ig.util.isLower,$aa=$.ig.util.toLowerCase,$ab=$.ig.util.toUpperCase,$ac=$.ig.util.equalsSimple,$ad=$.ig.util.compareSimple,$ae=$.ig.util.numberToString,$af=$.ig.util.tryParseInt32_1,$ag=$.ig.util.tryParseInt32_2,$ah=$.ig.util.intToString1,$ai=$.ig.util.parseInt32_1,$aj=$.ig.util.parseInt32_2,$ak=$.ig.util.tryParseNumber,$al=$.ig.util.tryParseNumber1,$am=$.ig.util.numberToString1,$an=$.ig.util.parseNumber,$ao=$.ig.util.intToString,$ap=$.ig.util.parseUInt8_1,$aq=$.ig.util.parseUInt8_2,$ar=$.ig.util.parseBool,$as=$.ig.util.tryParseBool;$d("ST_Visibility:at",false,false,{visible:0,hidden:1,veryHidden:2});$d("ST_VerticalAlignment:as",false,false,{top:0,center:1,bottom:2,justify:3,distributed:4});$d("ST_UpdateLinks:ar",false,false,{userSet:0,never:1,always:2});$d("ST_UnderlineValues:aq",false,false,{_single:0,_double:1,singleAccounting:2,doubleAccounting:3,none:4});$d("ST_TimePeriod:ap",false,false,{today:0,yesterday:1,tomorrow:2,last7Days:3,thisMonth:4,lastMonth:5,nextMonth:6,thisWeek:7,lastWeek:8,nextWeek:9});$d("ST_TableType:ao",false,false,{worksheet:0,xml:1,queryTable:2});$d("ST_SortMethod:an",false,false,{none:0,pinYin:1,stroke:2});$d("ST_SheetViewType:am",false,false,{normal:0,pageBreakPreview:1,pageLayout:2});$d("ST_SheetState:al",false,false,{visible:0,hidden:1,veryHidden:2});$d("ST_RefMode:ak",false,false,{A1:0,R1C1:1});$d("ST_PrintError:aj",false,false,{displayed:0,blank:1,dash:2,NA:3});$d("ST_PatternType:ai",false,false,{none:0,solid:1,mediumGray:2,darkGray:3,lightGray:4,darkHorizontal:5,darkVertical:6,darkDown:7,darkUp:8,darkGrid:9,darkTrellis:10,lightHorizontal:11,lightVertical:12,lightDown:13,lightUp:14,lightGrid:15,lightTrellis:16,gray125:17,gray0625:18});$d("ST_PaneState:ah",false,false,{split:0,frozen:1,frozenSplit:2});$d("ST_Pane:ag",false,false,{bottomRight:0,topRight:1,bottomLeft:2,topLeft:3});$d("ST_PageOrder:af",false,false,{downThenOver:0,overThenDown:1});$d("ST_Orientation:ae",false,false,{_default:0,portrait:1,landscape:2});$d("ST_ObjectType:ad",false,false,{Button:0,Checkbox:1,Dialog:2,Drop:3,Edit:4,GBox:5,Label:6,LineA:7,List:8,Movie:9,Note:10,Pict:11,Radio:12,RectA:13,Scroll:14,Spin:15,Shape:16,Group:17,Rect:18});$d("ST_Objects:ac",false,false,{all:0,placeholders:1,none:2});$d("ST_HorizontalAlignment:ab",false,false,{general:0,left:1,center:2,right:3,fill:4,justify:5,centerContinuous:6,distributed:7});$d("ST_GradientType:z",false,false,{linear:0,path:1});$d("ST_FontScheme:y",false,false,{none:0,major:1,minor:2});$d("ST_EditAs:x",false,false,{twoCell:0,oneCell:1,absolute:2});$d("ST_DataValidationType:w",false,false,{none:0,whole:1,_decimal:2,list:3,date:4,time:5,textLength:6,custom:7});$d("ST_DataValidationOperator:v",false,false,{between:0,notBetween:1,equal:2,notEqual:3,lessThan:4,lessThanOrEqual:5,greaterThan:6,greaterThanOrEqual:7});$d("ST_DataValidationImeMode:u",false,false,{noControl:0,off:1,on:2,disabled:3,hiragana:4,fullKatakana:5,halfKatakana:6,fullAlpha:7,halfAlpha:8,fullHangul:9,halfHangul:10});$d("ST_DataValidationErrorStyle:t",false,false,{stop:0,warning:1,information:2});$d("ST_ConditionalFormattingOperator:s",false,false,{lessThan:0,lessThanOrEqual:1,equal:2,notEqual:3,greaterThanOrEqual:4,greaterThan:5,between:6,notBetween:7,containsText:8,notContains:9,beginsWith:10,endsWith:11});$d("ST_Comments:r",false,false,{commNone:0,commIndicator:1,commIndAndComment:2});$d("ST_CfvoType:q",false,false,{num:0,percent:1,max:2,min:3,formula:4,percentile:5});$d("ST_CfType:p",false,false,{expression:0,cellIs:1,colorScale:2,dataBar:3,iconSet:4,top10:5,uniqueValues:6,duplicateValues:7,containsText:8,notContainsText:9,beginsWith:10,endsWith:11,containsBlanks:12,notContainsBlanks:13,containsErrors:14,notContainsErrors:15,timePeriod:16,aboveAverage:17});$d("ST_CellFormulaType:o",false,false,{normal:0,array:1,dataTable:2,shared:3});$d("ST_CellComments:n",false,false,{none:0,asDisplayed:1,atEnd:2});$d("ST_CalendarType:m",false,false,{gregorian:0,gregorianArabic:1,gregorianMeFrench:2,gregorianUs:3,gregorianXlitEnglish:4,gregorianXlitFrench:5,hebrew:6,hijri:7,japan:8,korea:9,none:10,saka:11,taiwan:12,thai:13});$d("ST_CalcMode:l",false,false,{manual:0,auto:1,autoNoTable:2});$d("ST_BorderStyle:k",false,false,{none:0,thin:1,medium:2,dashed:3,dotted:4,thick:5,_double:6,hair:7,mediumDashed:8,dashDot:9,mediumDashDot:10,dashDotDot:11,mediumDashDotDot:12,slantDashDot:13});$d("XmlNamespaceDefinitionBase_PreserveSpaceMode:i5",true,false,{None:0,HonorLeadingWhitespace:2,HonorTrailingWhitespace:4,HonorBoth:6});$d("ST_VerticalAlignRun:ig",false,false,{baseline:0,superscript:1,subscript:2});$d("ST_VectorBaseType:ie",false,false,{variant:0,i1:1,i2:2,i4:3,i8:4,ui1:5,ui2:6,ui4:7,ui8:8,r4:9,r8:10,lpstr:11,lpwstr:12,bstr:13,date:14,filetime:15,_bool:16,cy:17,error:18,clsid:19});$d("ST_TileFlipMode:h6",false,false,{none:0,x:1,y:2,xy:3});$d("ST_TextWrappingType:h5",false,false,{none:0,square:1});$d("ST_TextVertOverflowType:h4",false,false,{overflow:0,ellipsis:1,clip:2});$d("ST_TextVerticalType:h3",false,false,{horz:0,vert:1,vert270:2,wordArtVert:3,eaVert:4,mongolianVert:5,wordArtVertRtl:6});$d("ST_TextUnderlineType:h2",false,false,{none:0,words:1,sng:2,dbl:3,heavy:4,dotted:5,dottedHeavy:6,dash:7,dashHeavy:8,dashLong:9,dashLongHeavy:10,dotDash:11,dotDashHeavy:12,dotDotDash:13,dotDotDashHeavy:14,wavy:15,wavyHeavy:16,wavyDbl:17});$d("ST_TextStrikeType:h1",false,false,{noStrike:0,sngStrike:1,dblStrike:2});$d("ST_TextHorzOverflowType:hv",false,false,{overflow:0,clip:1});$d("ST_TextFontAlignType:ht",false,false,{auto:0,t:1,ctr:2,_base:3,b:4});$d("ST_TextCapsType:hs",false,false,{none:0,small:1,all:2});$d("ST_TextAnchoringType:hr",false,false,{t:0,ctr:1,b:2,just:3,dist:4});$d("ST_TextAlignType:hq",false,false,{l:0,ctr:1,r:2,just:3,justLow:4,dist:5,thaiDist:6});$d("ST_SystemColorVal:hp",false,false,{activeBorder:0,activeCaption:1,captionText:2,appWorkspace:3,btnFace:4,_3dDkShadow:5,btnShadow:6,_3dLight:7,btnHighlight:8,btnText:9,background:10,gradientActiveCaption:11,gradientInactiveCaption:12,grayText:13,highlight:14,highlightText:15,hotLight:16,inactiveBorder:17,inactiveCaption:18,inactiveCaptionText:19,infoText:20,infoBk:21,menu:22,menuBar:23,menuHighlight:24,menuText:25,scrollBar:26,window:27,windowFrame:28,windowText:29});$d("ST_StrokeLineStyle:ho",false,false,{single:0,thinThin:1,thinThick:2,thickThin:3,thickBetweenThin:4});$d("ST_StrokeJoinStyle:hn",false,false,{round:0,bevel:1,miter:2});$d("ST_StrokeEndCap:hm",false,false,{flat:0,square:1,round:2});$d("ST_StrokeArrowWidth:hl",false,false,{narrow:0,medium:1,wide:2});$d("ST_StrokeArrowType:hk",false,false,{none:0,block:1,classic:2,oval:3,diamond:4,open:5});$d("ST_StrokeArrowLength:hj",false,false,{_short:0,medium:1,_long:2});$d("ST_ShadowType:hg",false,false,{single:0,_double:1,emboss:2,perspective:3});$d("ST_SchemeColorVal:hf",false,false,{bg1:0,tx1:1,bg2:2,tx2:3,accent1:4,accent2:5,accent3:6,accent4:7,accent5:8,accent6:9,hlink:10,folHlink:11,phClr:12,dk1:13,lt1:14,dk2:15,lt2:16});$d("ST_RectAlignment:he",false,false,{tl:0,t:1,tr:2,l:3,ctr:4,r:5,bl:6,b:7,br:8});$d("ST_PresetPatternVal:hd",false,false,{pct5:0,pct10:1,pct20:2,pct25:3,pct30:4,pct40:5,pct50:6,pct60:7,pct70:8,pct75:9,pct80:10,pct90:11,horz:12,vert:13,ltHorz:14,ltVert:15,dkHorz:16,dkVert:17,narHorz:18,narVert:19,dashHorz:20,dashVert:21,cross:22,dnDiag:23,upDiag:24,ltDnDiag:25,ltUpDiag:26,dkDnDiag:27,dkUpDiag:28,wdDnDiag:29,wdUpDiag:30,dashDnDiag:31,dashUpDiag:32,diagCross:33,smCheck:34,lgCheck:35,smGrid:36,lgGrid:37,dotGrid:38,smConfetti:39,lgConfetti:40,horzBrick:41,diagBrick:42,solidDmnd:43,openDmnd:44,dotDmnd:45,plaid:46,sphere:47,weave:48,divot:49,shingle:50,wave:51,trellis:52,zigZag:53});$d("ST_PresetLineDashVal:hc",false,false,{solid:0,dot:1,dash:2,lgDash:3,dashDot:4,lgDashDot:5,lgDashDotDot:6,sysDash:7,sysDot:8,sysDashDot:9,sysDashDotDot:10});$d("ST_PenAlignment:g5",false,false,{ctr:0,_in:1});$d("ST_PathFillMode:g4",false,false,{none:0,norm:1,lighten:2,lightenLess:3,darken:4,darkenLess:5});$d("ST_LineEndType:gy",false,false,{none:0,triangle:1,stealth:2,diamond:3,oval:4,arrow:5});$d("ST_LineEndWidth:gx",false,false,{sm:0,med:1,lg:2});$d("ST_LineEndLength:gw",false,false,{sm:0,med:1,lg:2});$d("ST_LineCap:gv",false,false,{rnd:0,sq:1,flat:2});$d("ST_InsetMode:gu",false,false,{auto:0,custom:1});$d("ST_ImageAspect:gt",false,false,{ignore:0,atMost:1,atLeast:2});$d("ST_HrAlign:gs",false,false,{left:0,right:1,center:2});$d("ST_FontCollectionIndex:gm",false,false,{major:0,minor:1,none:2});$d("ST_FillType:gj",false,false,{gradientCenter:0,solid:1,pattern:2,tile:3,frame:4,gradientUnscaled:5,gradientRadial:6,gradient:7,background:8});$d("ST_FillMethod:gi",false,false,{none:0,linear:1,sigma:2,any:3,linearsigma:4});$d("ST_Ext:gh",false,false,{view:0,edit:1,backwardCompatible:2});$d("ST_ConnectType:ga",false,false,{none:0,rect:1,segments:2,custom:3});$d("ST_ConnectorType:f9",false,false,{none:0,straight:1,elbow:2,curved:3});$d("ST_ConformanceClass:f8",false,false,{transitional:0,strict:1});$d("ST_CompoundLine:f7",false,false,{sng:0,dbl:1,thickThin:2,thinThick:3,tri:4});$d("ST_CF:f6",false,false,{PictOld:0,Pict:1,Bitmap:2,PictPrint:3,PictScreen:4});$d("ST_BWMode:f5",false,false,{color:0,auto:1,grayScale:2,lightGrayscale:3,inverseGray:4,grayOutline:5,highContrast:6,black:7,white:8,hide:9,undrawn:10,blackTextAndLines:11});$d("ST_BlipCompression:f4",false,false,{none:0,email:1,hqprint:2,print:3,screen:4});$d("ST_BlackWhiteMode:f3",false,false,{clr:0,auto:1,gray:2,ltGray:3,invGray:4,grayWhite:5,blackGray:6,blackWhite:7,black:8,white:9,hidden:10});$d("XmlReadManager_AlternateContentStatus:fx",false,false,{NotInAlternateContent:0,InAlternateContentPendingAcceptableChoice:1,InAlternateContentChoiceAccepted:2});$d("UnknownElementAction:fo",false,false,{Ignore:0,CacheXml:1,CacheStructure:2,LoadChildrenNormally:3});$d("ShapeType:fn",false,false,{NotPrimitive:0,Rectangle:1,RoundRectangle:2,Ellipse:3,Diamond:4,IsocelesTriangle:5,RightTriangle:6,Parallelogram:7,Trapezoid:8,Hexagon:9,Octagon:10,Plus:11,Star:12,Arrow:13,ThickArrow:14,HomePlate:15,Cube:16,Balloon:17,Seal:18,Arc:19,Line:20,Plaque:21,Can:22,Donut:23,TextSimple:24,TextOctagon:25,TextHexagon:26,TextCurve:27,TextWave:28,TextRing:29,TextOnCurve:30,TextOnRing:31,StraightConnector1:32,BentConnector2:33,BentConnector3:34,BentConnector4:35,BentConnector5:36,CurvedConnector2:37,CurvedConnector3:38,CurvedConnector4:39,CurvedConnector5:40,Callout1:41,Callout2:42,Callout3:43,AccentCallout1:44,AccentCallout2:45,AccentCallout3:46,BorderCallout1:47,BorderCallout2:48,BorderCallout3:49,AccentBorderCallout1:50,AccentBorderCallout2:51,AccentBorderCallout3:52,Ribbon:53,Ribbon2:54,Chevron:55,Pentagon:56,NoSmoking:57,Seal8:58,Seal16:59,Seal32:60,WedgeRectCallout:61,WedgeRRectCallout:62,WedgeEllipseCallout:63,Wave:64,FoldedCorner:65,LeftArrow:66,DownArrow:67,UpArrow:68,LeftRightArrow:69,UpDownArrow:70,IrregularSeal1:71,IrregularSeal2:72,LightningBolt:73,Heart:74,PictureFrame:75,QuadArrow:76,LeftArrowCallout:77,RightArrowCallout:78,UpArrowCallout:79,DownArrowCallout:80,LeftRightArrowCallout:81,UpDownArrowCallout:82,QuadArrowCallout:83,Bevel:84,LeftBracket:85,RightBracket:86,LeftBrace:87,RightBrace:88,LeftUpArrow:89,BentUpArrow:90,BentArrow:91,Seal24:92,StripedRightArrow:93,NotchedRightArrow:94,BlockArc:95,SmileyFace:96,VerticalScroll:97,HorizontalScroll:98,CircularArrow:99,NotchedCircularArrow:100,UturnArrow:101,CurvedRightArrow:102,CurvedLeftArrow:103,CurvedUpArrow:104,CurvedDownArrow:105,CloudCallout:106,EllipseRibbon:107,EllipseRibbon2:108,FlowChartProcess:109,FlowChartDecision:110,FlowChartInputOutput:111,FlowChartPredefinedProcess:112,FlowChartInternalStorage:113,FlowChartDocument:114,FlowChartMultidocument:115,FlowChartTerminator:116,FlowChartPreparation:117,FlowChartManualInput:118,FlowChartManualOperation:119,FlowChartConnector:120,FlowChartPunchedCard:121,FlowChartPunchedTape:122,FlowChartSummingJunction:123,FlowChartOr:124,FlowChartCollate:125,FlowChartSort:126,FlowChartExtract:127,FlowChartMerge:128,FlowChartOfflineStorage:129,FlowChartOnlineStorage:130,FlowChartMagneticTape:131,FlowChartMagneticDisk:132,FlowChartMagneticDrum:133,FlowChartDisplay:134,FlowChartDelay:135,TextPlainText:136,TextStop:137,TextTriangle:138,TextTriangleInverted:139,TextChevron:140,TextChevronInverted:141,TextRingInside:142,TextRingOutside:143,TextArchUpCurve:144,TextArchDownCurve:145,TextCircleCurve:146,TextButtonCurve:147,TextArchUpPour:148,TextArchDownPour:149,TextCirclePour:150,TextButtonPour:151,TextCurveUp:152,TextCurveDown:153,TextCascadeUp:154,TextCascadeDown:155,TextWave1:156,TextWave2:157,TextWave3:158,TextWave4:159,TextInflate:160,TextDeflate:161,TextInflateBottom:162,TextDeflateBottom:163,TextInflateTop:164,TextDeflateTop:165,TextDeflateInflate:166,TextDeflateInflateDeflate:167,TextFadeRight:168,TextFadeLeft:169,TextFadeUp:170,TextFadeDown:171,TextSlantUp:172,TextSlantDown:173,TextCanUp:174,TextCanDown:175,FlowChartAlternateProcess:176,FlowChartOffpageConnector:177,Callout90:178,AccentCallout90:179,BorderCallout90:180,AccentBorderCallout90:181,LeftRightUpArrow:182,Sun:183,Moon:184,BracketPair:185,BracePair:186,Seal4:187,DoubleWave:188,ActionButtonBlank:189,ActionButtonHome:190,ActionButtonHelp:191,ActionButtonInformation:192,ActionButtonForwardNext:193,ActionButtonBackPrevious:194,ActionButtonEnd:195,ActionButtonBeginning:196,ActionButtonReturn:197,ActionButtonDocument:198,ActionButtonSound:199,ActionButtonMovie:200,HostControl:201,TextBox:202});$d("OverwriteRoundTripDataResult:fm",false,false,{NothingWritten:0,ElementStartWritten:1,ElementAndDescendantsWritten:2});$d("OfficeApplication:fl",false,false,{Excel:0,Word:1,PowerPoint:2});$d("State:kx",false,false,{Initial:0,Markup:1,EndTag:2,Attr:3,AttrValue:4,Text:5,PartialTag:6,AutoClose:7,CData:8,PartialText:9,PseudoStartTag:10,Eof:11});$d("CaseFolding:kt",false,false,{None:0,ToUpper:1,ToLower:2});$d("AttributePresence:ko",false,false,{DEFAULT:0,FIXED:1,REQUIRED:2,IMPLIED:3});$d("AttributeType:kn",false,false,{DEFAULT:0,CDATA:1,ENTITY:2,ENTITIES:3,ID:4,IDREF:5,IDREFS:6,NAME:7,NAMES:8,NMTOKEN:9,NMTOKENS:10,NUMBER:11,NUMBERS:12,NUTOKEN:13,NUTOKENS:14,NOTATION:15,ENUMERATION:16});$d("Occurrence:kl",false,false,{Required:0,Optional:1,ZeroOrMore:2,OneOrMore:3});$d("GroupType:kk",false,false,{None:0,And:1,Or:2,Sequence:3});$d("DeclaredContent:ki",false,false,{"Default:$default":0,CDATA:1,RCDATA:2,EMPTY:3});$d("LiteralType:kb",false,false,{CDATA:0,SDATA:1,PI:2});$c("AssemblyRef:a","Object",{init:function(){$.ig.$op.init.call(this)},$type:new $.ig.Type("AssemblyRef",$.ig.$ot)},true);$c("Entity:kc","Object",{v:null,u:null,e:false,w:null,aa:null,t:null,c:0,b:null,d:false,n:0,j:"\0",g:false,ab:null,ad:null,q:null,h:false,p:0,m:0,init:function(a,b,c,d,e){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break;case 2:this.init2.apply(this,arguments);break}return}$.ig.$op.init.call(this);this.u=b;this.w=c;this.aa=d;this.v=e;this.d=b!=null&&$$t.$ks.a(b,"html")},init1:function(a,b,c){$.ig.$op.init.call(this);this.u=b;this.t=c;this.e=true},init2:function(a,b,c,d,e){$.ig.$op.init.call(this);this.u=b;this.e=true;this.q=d;this.ad=c;this.v=e;this.d=$1(b,"html",$$v.$ao.e())==0},ae:function(){if(this.ad!=null){return this.ad}else if(this.b!=null){return this.b.ae()}return null},o:function(){return this.m-this.p+1},k:function(){var a=$u(this.q.b());if(a.charCodeAt(0)==0){a=" "}this.m++;if(a.charCodeAt(0)==10){this.g=true;this.p=this.m+1;this.n++}else if(a==" "||a=="	"){this.g=true;if(this.j.charCodeAt(0)==13){this.p=this.m;this.n++}}else if(a.charCodeAt(0)==13){this.g=true}else{this.g=false;if(this.j.charCodeAt(0)==13){this.n++;this.p=this.m}}this.j=a;return a},ak:function(a,b){this.b=a;if(a!=null){this.d=a.d}this.n=1;if(this.e){if(this.t!=null){this.q=new $$2.ba(this.t)}}else if(this.aa==null){this.aj("Unresolvable entity '{0}'",this.u)}else{this.aj("Unresolvable entity '{0}'",this.u)}},ac:function(){return this.ab},af:function(){if(this.h){this.q.i()}},l:function(){var a=this.j;while(a!="￿"&&(a==" "||a=="\r"||a=="\n"||a=="	")){a=this.k()}return a},z:function(a,b,c){a.c(0);var d=this.j;if(c&&d!="_"&&!$6(d)){throw new $$0.n(1,$y("Invalid name start character '{0}'",d))}while(d!="￿"&&b.indexOf(d)<0){if(!c||d=="_"||d=="."||d=="-"||d==":"||$8(d)){a.h(d)}else{throw new $$0.n(1,$y("Invalid name character '{0}'",d))}d=this.k()}return a.toString()},x:function(a,b){a.c(0);var c=this.k();while(c!="￿"&&c!=b){if(c=="&"){c=this.k();if(c=="#"){var d=this.s();a.l(d);c=this.j}else{a.h("&");a.h(c);c=this.k()}}else{a.h(c);c=this.k()}}this.k();return a.toString()},y:function(a,b,c){if(a!=null){a.c(0)}var d=this.n;var e=this.k();var f=0;var g=c.charAt(f);while(e!="￿"){if(e==g){f++;if(f>=c.length){break}g=c.charAt(f)}else if(f>0){var h=f-1;var i=0;while(h>=0&&i==0){if(c.charAt(h)==e){var j=1;while(h-j>=0){if(c.charAt(h-j)!=c.charAt(f-j)){break}j++}if(j>h){i=h+1}}else{h--}}if(a!=null){h=h<0?1:0;for(var k=0;k<=f-i-h;k++){a.h(c.charAt(k))}if(h>0){a.h(e)}}f=i;g=c.charAt(i)}else{if(a!=null){a.h(e)}}e=this.k()}if(e.charCodeAt(0)==0){this.ai(b+" starting on line {0} was never closed",d)}this.k();if(a!=null){return a.toString()}return""},s:function(){var a=this.k();var b=0;if(a=="x"){a=this.k();for(;a!="￿"&&a!=";";a=this.k()){var c=0;if(a.charCodeAt(0)>="0".charCodeAt(0)&&a.charCodeAt(0)<="9".charCodeAt(0)){c=a.charCodeAt(0)-"0".charCodeAt(0)}else if(a.charCodeAt(0)>="a".charCodeAt(0)&&a.charCodeAt(0)<="f".charCodeAt(0)){c=a.charCodeAt(0)-"a".charCodeAt(0)+10}else if(a.charCodeAt(0)>="A".charCodeAt(0)&&a.charCodeAt(0)<="F".charCodeAt(0)){c=a.charCodeAt(0)-"A".charCodeAt(0)+10}else{break}b=b*16+c}}else{for(;a!="￿"&&a!=";";a=this.k()){if(a.charCodeAt(0)>="0".charCodeAt(0)&&a.charCodeAt(0)<="9".charCodeAt(0)){b=b*10+(a.charCodeAt(0)-"0".charCodeAt(0))}else{break}}}if(a.charCodeAt(0)==0){this.ah("Premature {0} parsing entity reference",a)}else if(a==";"){this.k()}if(this.d&&b>=128&b<=159){var d=$$t.$kc.a.length;var e=b-128;var f=$$t.$kc.a[e];return $$6.$g.h(f).toString()}return $$6.$g.h(b).toString()},ag:function(a){throw new $$0.n(1,a)},ah:function(a,b){var c=b=="￿"?"EOF":$$0.$as.toString1(b);throw new $$0.n(1,$y(a,c))},ai:function(a,b){throw new $$0.n(1,$y(a,b))},aj:function(a,b){throw new $$0.n(1,$y(a,b))},r:function(){var a=this;var b=new $$6.aj(0);while(a!=null){var c;if(a.e){c=$y("\nReferenced on line {0}, position {1} of internal entity '{2}'",a.n,a.o(),a.u)}else{c=$z("\nReferenced on line {0}, position {1} of '{2}' entity at [{3}]",[a.n,a.o(),a.u,a.ae().absolutePath()])}b.l(c);a=a.b}return b.toString()},f:function(a){return a=="CDATA"||a=="SDATA"||a=="PI"},al:function(a){switch(a){case"CDATA":this.c=0;break;case"SDATA":this.c=1;break;case"PI":this.c=2;break}},$type:new $.ig.Type("Entity",$.ig.$ot)},true);$c("HtmlStream:kd","TextReader",{_x:null,_l:null,_r:0,_s:0,_ah:null,_ae:null,_k:null,_v:0,_q:0,init:function(a,b){var $self=this;$$7.$g.init.call(this);if(b==null){b=$$8.$a.uTF8()}if(!a.canSeek()){a=this._w(a)}this._x=a;this._l=new Array(16384);this._s=a.read(this._l,0,4);this._k=new Array(16384);this._ae=function(){var c=$$t.$kd._ad($self._l,$self._r,$self._s);$self._r=c.p1;return c.ret}();var c=this._r;if(this._ae==null){this._ae=b.getDecoder();this._s+=a.read(this._l,4,16384-4);this._aj();var d=this._af();if(d!=null){this._ae=d}}this._x.seek(0,0);this._q=this._v=0;if(c>0){a.read(this._l,0,c)}this._r=this._s=0},_ai:function(){return this._ah},_w:function(a){var b=1e5;var c=new Array(b);var d;var e=new $$7.e(0);while((d=a.read(c,0,b))>0){e.write(c,0,d)}e.seek(0,0);a.dispose();return e},_aj:function(){if(this._q>0){if(this._q<this._v){$.ig.util.arrayCopy1(this._k,this._q,this._k,0,this._v-this._q)}this._v-=this._q;this._q=0}var a=this._ae.a(this._l,this._r,this._s-this._r);var b=this._k.length-this._v;if(b<a){var c=new Array(this._k.length+a);$.ig.util.arrayCopy1(this._k,this._q,c,0,this._v-this._q);this._k=c}this._v=this._q+this._ae.c(this._l,this._r,this._s-this._r,this._k,this._q);this._r=this._s},_ad:function(a,b,c){if(4<=c-b){var d=$p($p($p($r(a[b+0],24),$r(a[b+1],16)),$r(a[b+2],8)),a[b+3]);var t1=d;L0:while(true){switch(t1){case 4278189823:b+=4;return{ret:new $$t.kf,p1:b};case 4294901758:b+=4;return{ret:new $$t.kg,p1:b};case 1006632960:t1=4278189823;continue L0;case 60:t1=4294901758;continue L0}break}d>>>=8;if(d==15711167){b+=3;return{ret:$$8.$a.uTF8().getDecoder(),p1:b}}d>>>=8;var t1=d;L0:while(true){switch(t1){case 65279:b+=2;return{ret:$$8.$b.bigEndianUnicode().getDecoder(),p1:b};case 65534:b+=2;return{ret:new $$8.b(1,false,false).getDecoder(),p1:b};case 15360:t1=65279;continue L0;case 60:t1=65534;continue L0}break}}return{ret:null,p1:b}},_t:function(){if(this._q<this._v){return this._k[this._q++].charCodeAt(0)}return-1},_p:function(){var a=this._t();if(a!=-1){this._q--}return a},_m:function(a){var b=this._p();if(b!=a.charAt(0).charCodeAt(0)){return false}for(var c=0,d=a.length;b!=-1&&c<d;c++){b=this._t();var e=a.charAt(c);if(b!=e.charCodeAt(0)){return false}}return true},_an:function(){var a=$u(this._p());while(a==" "||a=="	"||a=="\r"||a=="\n"){var b=this._q;a=$u(this._t());if(a!=" "&&a!="	"&&a!="\r"&&a!="\n"){this._q=b}}},_ab:function(){var a=this._p();if(a=="'".charCodeAt(0)||a=='"'.charCodeAt(0)){this._t();var b=this._q;var c=this._t();while(c!=-1&&c!=a){c=this._t()}return this._q>b?$.ig.util.createString3(this._k,b,this._q-b-1):""}return null},_z:function(a){this._an();var b=this._ac();if(a==b){this._an();if(this._m("=")){this._an();return this._ab()}}return null},_aa:function(a){this._an();a=this._ac();if(a!=null){this._an();if(this._m("=")){this._an();return{ret:this._ab(),p0:a}}}return{ret:null,p0:a}},_am:function(a){var b=this._t();var c=0;var d=a.length;while(c<d&&b!=-1){if(a.charAt(c).charCodeAt(0)==b){c++;if(c==d){break}}else{c=0}b=this._t()}},_af:function(){var a=null;if(this._m("<?xml")){var b=this._z("version");if(b!=null){var c=this._z("encoding");if(c!=null){try{var d=$$8.$a.getEncoding(c);if(d!=null){this._ah=d;return d.getDecoder()}}catch(e){}}this._am(">")}}if(a==null){return this._ag()}return null},_ag:function(){var $self=this;var a=this._t();while(a!=-1){var b=$u(a);if(b=="<"){var c=this._ac();if(c!=null&&$$t.$ks.a(c,"meta")){var d=null;var e=null;while(true){var f=function(){var g=$self._aa(c);c=g.p0;return g.ret}();if(c==null){break}if($$t.$ks.a(c,"http-equiv")){d=f}else if($$t.$ks.a(c,"content")){e=f}}if(d!=null&&$$t.$ks.a(d,"content-type")&&e!=null){var g=e.indexOf("charset");if(g>=0){g=e.indexOf("=",g);if(g>=0){g++;var h=e.indexOf(";",g);if(h<0){h=e.length}var i=e.substr(g,h-g).trim([]);try{var j=$$8.$a.getEncoding(i);this._ah=j;return j.getDecoder()}catch(k){}}}}}}a=this._t()}return null},_ac:function(){var a=this._p();if(a==-1){return null}var b=$u(a);var c=this._q;while(this._q<this._v-1&&($8(b)||b=="-"||b=="_"||b==":")){b=this._k[++this._q]}if(c==this._q){return null}return $.ig.util.createString3(this._k,c,this._q-c)},_al:function(){var a=$u(this._p());while(this._q<this._v-1&&(a==" "||a=="\r"||a=="\n")){a=this._k[++this._q]}},_ak:function(a){var b=$u(this._p());while(this._q<this._v-1&&b!=a){b=this._k[++this._q]}},_y:function(){this._ak("=");if(this._q<this._v){this._q++;this._al();if(this._q<this._v){var a=this._k[this._q];this._q++;var b=this._q;this._ak(a);if(this._q<this._v){var c=$.ig.util.createString3(this._k,b,this._q-b);this._q++;return c}}}return null},a:function(){var a=this.b();if(a!=-1){this._q--}return a},b:function(){if(this._q==this._v){this._s=this._x.read(this._l,0,this._l.length);this._r=0;if(this._s==0){return-1}this._aj()}if(this._q<this._v){return this._k[this._q++].charCodeAt(0)}return-1},c:function(a,b,c){if(this._q==this._v){this._s=this._x.read(this._l,0,this._l.length);this._r=0;if(this._s==0){return-1}this._aj()}if(this._q<this._v){c=Math.min(this._v-this._q,c);$.ig.util.arrayCopy1(this._k,this._q,a,b,c);this._q+=c;return c}return 0},d:function(a,b,c){return this.c(a,b,c)},_u:function(a,b,c){var d=0;var e=this._t();while(e!=-1){a[d+b]=$u(e);d++;if(d+b==c){break}if(e=="\r".charCodeAt(0)){if(this._p()=="\n".charCodeAt(0)){e=this._t();a[d+b]=$u(e);d++}break}else if(e=="\n".charCodeAt(0)){break}e=this._t()}return d},h:function(){var a=new Array(1e5);var b=0;var c=new $$6.aj(0);while((b=this.c(a,0,a.length))>0){c.g(a,0,b)}return c.toString()},dispose1:function(a){if(a){this._x.dispose()}},$type:new $.ig.Type("HtmlStream",$$7.$g.$type)},true);$c("Ucs4Decoder:ke","Decoder",{init:function(){this._g=new Array(4);this._j=0;$$8.$e.init.call(this)},_g:null,_j:0,a:function(a,b,c){return $a(c+this._j,4)},_i:function(a,b,c,d,e){},c:function(a,b,c,d,e){var f=this._j;if(this._j>0){for(;f<4;f++){this._g[f]=a[b];b++;c--}f=1;this._i(this._g,0,4,d,e);e++}else{f=0}f=this._i(a,b,c,d,e)+f;var g=(this._j+c)%4;c+=b;b=c-g;this._j=0;if(b>=0){for(;b<c;b++){this._g[this._j]=a[b];this._j++}}return f},_h:function(a){var b,c;b=55232+(a>>>10);c=$p(56320,a&1023);return $u(c<<8|b)},$type:new $.ig.Type("Ucs4Decoder",$$8.$e.$type)},true);$c("Ucs4DecoderBigEngian:kf","Ucs4Decoder",{init:function(){$$t.$ke.init.call(this)},_i:function(a,b,c,d,e){var f;var g,h;c+=b;for(g=b,h=e;g+3<c;){f=$i(a[g+3]<<24|a[g+2]<<16|a[g+1]<<8|a[g]);if(f>1114111){throw new $$0.n(1,"Invalid character 0x"+$ah(f,"x",null)+" in encoding")}else if(f>65535){d[h]=this._h(f);h++}else{if(f>=55296&&f<=57343){throw new $$0.n(1,"Invalid character 0x"+$ah(f,"x",null)+" in encoding")}else{d[h]=$u(f)}}h++;g+=4}return h-e},$type:new $.ig.Type("Ucs4DecoderBigEngian",$$t.$ke.$type)},true);$c("Ucs4DecoderLittleEndian:kg","Ucs4Decoder",{init:function(){$$t.$ke.init.call(this)},_i:function(a,b,c,d,e){var f;var g,h;c+=b;for(g=b,h=e;g+3<c;){f=$i(a[g]<<24|a[g+1]<<16|a[g+2]<<8|a[g+3]);if(f>1114111){throw new $$0.n(1,"Invalid character 0x"+$ah(f,"x",null)+" in encoding")}else if(f>65535){d[h]=this._h(f);h++}else{if(f>=55296&&f<=57343){throw new $$0.n(1,"Invalid character 0x"+$ah(f,"x",null)+" in encoding")}else{d[h]=$u(f)}}h++;g+=4}return h-e},$type:new $.ig.Type("Ucs4DecoderLittleEndian",$$t.$ke.$type)},true);$c("ElementDecl:kh","Object",{init:function(a,b,c,d,e,f){$.ig.$op.init.call(this);this.i=a;this.h=b;this.g=c;this.e=d;this.b=e;this.a=f},i:null,h:false,g:false,e:null,b:null,a:null,d:null,c:function(a){return this.d._item(a.toUpperCase())},j:function(a){if(this.d==null){this.d=a}else{var c=a.getEnumerator();while(c.moveNext()){var b=c.current();if(this.d._item(b.f)==null){this.d._add(b)}}}},f:function(a,b){if(this.a!=null){var e=this.a;for(var d=0;d<e.length;d++){var c=e[d];if(c==a){return false}}}if(this.b!=null){var h=this.b;for(var g=0;g<h.length;g++){var f=h[g];if(f==a){return true}}}return this.e.c(a,b)},$type:new $.ig.Type("ElementDecl",$.ig.$ot)},true);$c("ContentModel:kj","Object",{a:0,d:0,b:null,init:function(){$.ig.$op.init.call(this);this.b=new $$t.km(null)},i:function(){this.b=new $$t.km(this.b);this.d++},e:function(){if(this.d==0){return-1}this.d--;this.b.a.i(this.b);this.b=this.b.a;return this.d},h:function(a){this.b.k(a)},f:function(a){this.b.h(a)},g:function(a){this.b.j(a)},j:function(a){switch(a){case"EMPTY":this.a=3;break;case"RCDATA":this.a=2;break;case"CDATA":this.a=1;break;default:throw new $$0.n(1,$y("Declared content type '{0}' is not supported",a))
}},c:function(a,b){if(this.a!=0){return false}return this.b.d(a,b)},$type:new $.ig.Type("ContentModel",$.ig.$ot)},true);$c("Group:km","Object",{a:null,g:null,b:0,c:0,e:false,f:function(){return this.e&&this.g.count()==0},init:function(a){$.ig.$op.init.call(this);this.a=a;this.g=new $$4.w($.ig.$op.$type,0);this.b=0;this.c=0},i:function(a){this.g.add1(a)},k:function(a){if(a=="#PCDATA"){this.e=true}else{this.g.add1(a)}},h:function(a){if(!this.e&&this.g.count()==0){throw new $$0.n(1,$y("Missing token before connector '{0}'.",a))}var b=0;switch(a){case",":b=3;break;case"|":b=2;break;case"&":b=1;break}if(this.b!=0&&this.b!=b){throw new $$0.n(1,$y("Connector '{0}' is inconsistent with {1} group.",a,$$t.$kk.$getName(this.b)))}this.b=b},j:function(a){var b=0;switch(a){case"?":b=1;break;case"+":b=3;break;case"*":b=2;break}this.c=b},d:function(a,b){var d=this.g.getEnumerator();while(d.moveNext()){var c=d.current();if(typeof c==="string"){if(c==a){return true}}}var f=this.g.getEnumerator();while(f.moveNext()){var e=f.current();if(typeof e==="string"){var g=e;var h=b.d(g);if(h!=null){if(h.h){if(h.f(a,b)){return true}}}}else{var i=e;if(i.d(a,b)){return true}}}return false},$type:new $.ig.Type("Group",$.ig.$ot)},true);$c("AttDef:kp","Object",{f:null,c:0,a:null,e:null,b:0,init:function(a){$.ig.$op.init.call(this);this.f=a},g:function(a){switch(a){case"CDATA":this.c=1;break;case"ENTITY":this.c=2;break;case"ENTITIES":this.c=3;break;case"ID":this.c=4;break;case"IDREF":this.c=5;break;case"IDREFS":this.c=6;break;case"NAME":this.c=7;break;case"NAMES":this.c=8;break;case"NMTOKEN":this.c=9;break;case"NMTOKENS":this.c=10;break;case"NUMBER":this.c=11;break;case"NUMBERS":this.c=12;break;case"NUTOKEN":this.c=13;break;case"NUTOKENS":this.c=14;break;default:throw new $$0.n(1,"Attribute type '"+a+"' is not supported")}},d:function(a){var b=true;if(a=="FIXED"){this.b=1}else if(a=="REQUIRED"){this.b=2;b=false}else if(a=="IMPLIED"){this.b=3;b=false}else{throw new $$0.n(1,$y("Attribute value '{0}' not supported",a))}return b},$type:new $.ig.Type("AttDef",$.ig.$ot)},true);$c("AttList:kq","Object",{_b:null,init:function(){$.ig.$op.init.call(this);this._b=new $$4.g(String,$$t.$kp.$type,0)},_add:function(a){this._b.add(a.f,a)},_item:function(a){return this._b.item(a)},getEnumerator:function(){return this._b.values().getEnumerator()},$type:new $.ig.Type("AttList",$.ig.$ot,[$$0.$bu.$type])},true);$c("SgmlDtd:kr","Object",{r:null,m:null,o:null,n:null,w:null,e:null,am:null,init:function(a,b){$.ig.$op.init.call(this);this.am=b;this.r=a;this.m=new $$4.g(String,$$t.$kh.$type,0);this.o=new $$4.g(String,$$t.$kc.$type,0);this.n=new $$4.g(String,$$t.$kc.$type,0);this.w=new $$6.aj(0)},an:function(){return this.am},j:function(a,b,c,d,e,f,g){var h=new $$t.kr(b,g);if(d!=null&&d!=""){h.al(a,new $$t.kc(0,h.r,c,d,f))}if(e!=null&&e!=""){h.al(a,new $$t.kc(1,b,e))}try{h.x()}catch(i){throw new $$0.n(1,i.message()+h.e.r())}return h},i:function(a,b,c,d,e,f,g){var h=new $$t.kr(b,g);h.al(a,new $$t.kc(2,h.r,a,d,f));if(e!=null&&e!=""){h.al(a,new $$t.kc(1,b,e))}try{h.x()}catch(i){throw new $$0.n(1,i.message()+h.e.r())}return h},f:function(a){return this.n.item(a)},d:function(a){return this.m.item(a.toUpperCase())},al:function(a,b){b.ak(this.e,a);this.e=b;this.e.k()},ak:function(){if(this.e!=null){this.e.af()}if(this.e.b!=null){this.e=this.e.b}else{this.e=null}},x:function(){var a=this.e.j;while(true){switch(a){case"￿":this.ak();if(this.e==null){return}a=this.e.j;break;case" ":case"\n":case"\r":case"	":a=this.e.k();break;case"<":this.ah();a=this.e.k();break;case"%":var b=this.h($$t.$kr.v);try{this.al(this.e.ae(),b)}catch(c){}a=this.e.j;break;default:this.e.ah("Unexpected character '{0}'",a);break}}},ah:function(){var a=this.e.k();if(a!="!"){this.e.ag("Found '{0}', but expecing declaration starting with '<!'");return}a=this.e.k();if(a=="-"){a=this.e.k();if(a!="-"){this.e.ah("Expecting comment '<!--' but found {0}",a)}this.e.y(this.w,"Comment","-->")}else if(a=="["){this.ag()}else{var b=this.e.z(this.w,$$t.$kr.v,true);switch(b){case"ENTITY":this.ad();break;case"ELEMENT":this.ac();break;case"ATTLIST":this.z();break;default:this.e.aj("Invalid declaration '<!{0}'.  Expecting 'ENTITY', 'ELEMENT' or 'ATTLIST'.",b);break}}},l:function(){var a=this.e.j;while(a=="-"){a=this.k(true)}return a},k:function(a){var b=this.e.n;var c=this.e.k();if(a&&c!="-"){this.e.ah("Expecting comment delimiter '--' but found {0}",c)}this.e.y(this.w,"Markup Comment","--");return this.e.l()},ag:function(){this.e.k();var a=this.u("[");if(a=="INCLUDE"){this.af()}else if(a=="IGNORE"){this.ae()}else{this.e.aj("Unsupported marked section type '{0}'",a)}},af:function(){throw new $$6.q(1,"Include Section")},ae:function(){var a=this.e.n;var b=this.e.l();if(b!="["){this.e.ah("Expecting '[' but found {0}",b)}this.e.y(this.w,"Conditional Section","]]>")},u:function(a){var b=this.e.l();if(b=="%"){var c=this.h(a);b=this.e.j;if(!c.e){throw new $$0.r(0,"External parameter entity resolution")}return c.t.trim([])}else{return this.e.z(this.w,a,true)}},h:function(a){var b=this.e.k();var c=this.e.z(this.w,";"+a,false);c=this.am.b(c);if(this.e.j==";"){this.e.k()}var d=this.g(c);return d},g:function(a){var b=this.o.item(a);if(b==null){this.e.aj("Reference to undefined parameter entity '{0}'",a)}return b},ad:function(){var a=this.e.l();var b=a=="%";if(b){this.e.k();a=this.e.l()}var c=this.e.z(this.w,$$t.$kr.v,true);c=this.am.b(c);a=this.e.l();var d=null;if(a=='"'||a=="'"){var e=this.e.x(this.w,a);d=new $$t.kc(1,c,e)}else{var f=null;var g=null;var h=this.e.z(this.w,$$t.$kr.v,true);if($$t.$kc.f(h)){a=this.e.l();var i=this.e.x(this.w,a);d=new $$t.kc(1,c,i);d.al(h)}else{g=h;if(g=="PUBLIC"){a=this.e.l();if(a=='"'||a=="'"){f=this.e.x(this.w,a)}else{this.e.ah("Expecting public identifier literal but found '{0}'",a)}}else if(g!="SYSTEM"){this.e.aj("Invalid external identifier '{0}'.  Expecing 'PUBLIC' or 'SYSTEM'.",g)}var j=null;a=this.e.l();if(a=='"'||a=="'"){j=this.e.x(this.w,a)}else if(a!=">"){this.e.ah("Expecting system identifier literal but found '{0}'",a)}d=new $$t.kc(0,c,f,j,this.e.v)}}a=this.e.l();if(a=="-"){a=this.l()}if(a!=">"){this.e.ah("Expecting end of entity declaration '>' but found '{0}'",a)}if(b){this.o.add(d.u,d)}else{this.n.add(d.u,d)}},ac:function(){var a=this.e.l();var b=this.a(a,true);a=$$0.$as.toUpper1(this.e.l());var c=false;var d=false;if(a=="O"||a=="-"){c=a=="O";this.e.k();a=$$0.$as.toUpper1(this.e.l());if(a=="O"||a=="-"){d=a=="O";a=this.e.k()}}a=this.e.l();var e=this.c(a);a=this.e.l();var f=null;var g=null;if(a=="-"){a=this.e.k();if(a=="("){f=this.a(a,true);a=this.e.l()}else if(a=="-"){a=this.k(false)}else{this.e.ah("Invalid syntax at '{0}'",a)}}if(a=="-"){a=this.l()}if(a=="+"){a=this.e.k();if(a!="("){this.e.ah("Expecting inclusions name group",a)}g=this.a(a,true);a=this.e.l()}if(a=="-"){a=this.l()}if(a!=">"){this.e.ah("Expecting end of ELEMENT declaration '>' but found '{0}'",a)}for(var i=0;i<b.length;i++){var h=b[i];var j=h.toUpperCase();j=this.am.b(h);this.m.add(j,new $$t.kh(j,c,d,e,g,f))}},a:function(a,b){var c=new $$4.w(String,0);if(a=="("){a=this.e.k();a=this.e.l();while(a!=")"){a=this.e.l();if(a=="%"){var d=this.h($$t.$kr.s);this.al(this.e.ae(),d);this.aj(c,b);this.ak();a=this.e.j}else{var e=this.e.z(this.w,$$t.$kr.s,b);e=e.toUpperCase();var f=this.am.b(e);c.add(f)}a=this.e.l();if(a=="|"||a==","){a=this.e.k()}}this.e.k()}else{var g=this.e.z(this.w,$$t.$kr.v,b);g=g.toUpperCase();g=this.am.b(g);c.add(g)}return c.toArray()},aj:function(a,b){var c=this.e.j;c=this.e.l();while(c!="￿"){var d;if(c=="%"){var e=this.h($$t.$kr.s);this.al(this.e.ae(),e);this.aj(a,b);this.ak();c=this.e.j}else{d=this.e.z(this.w,$$t.$kr.s,true);d=d.toUpperCase();d=this.am.b(d);a.add(d)}c=this.e.l();if(c=="|"){c=this.e.k();c=this.e.l()}}},c:function(a){var b=new $$t.kj;if(a=="("){this.e.k();this.ai(")",b);a=this.e.k();if(a=="?"||a=="+"||a=="*"){b.g(a);this.e.k()}}else if(a=="%"){var c=this.h($$t.$kr.q);this.al(this.e.ae(),c);b=this.c(this.e.j);this.ak()}else{var d=this.u($$t.$kr.q);b.j(d)}return b},ai:function(a,b){var c=b.d;var d=this.e.j;d=this.e.l();while(d!=a||b.d>c){if(d=="￿"){this.e.ag("Content Model was not closed")}if(d=="%"){var e=this.h($$t.$kr.p);this.al(this.e.ae(),e);this.ai("￿",b);this.ak();d=this.e.l()}else if(d=="("){b.i();this.e.k();d=this.e.l()}else if(d==")"){d=this.e.k();if(d=="*"||d=="+"||d=="?"){b.g(d);d=this.e.k()}if(b.e()<c){this.e.ag("Parameter entity cannot close a paren outside it's own scope")}d=this.e.l()}else if(d==","||d=="|"||d=="&"){b.f(d);this.e.k();d=this.e.l()}else{var f;if(d=="#"){d=this.e.k();f="#"+this.e.z(this.w,$$t.$kr.p,true)}else{f=this.e.z(this.w,$$t.$kr.p,true)}f=f.toUpperCase();f=this.am.b(f);d=this.e.j;if(d=="?"||d=="+"||d=="*"){b.i();b.h(f);b.g(d);b.e();this.e.k();d=this.e.l()}else{b.h(f);d=this.e.l()}}}},z:function(){var a=this.e.l();var b=this.a(a,true);var c=new $$t.kq;this.aa(c,">");for(var e=0;e<b.length;e++){var d=b[e];var f=this.m.item(d);if(f==null){this.e.aj("ATTLIST references undefined ELEMENT {0}",d)}f.j(c)}},aa:function(a,b){var c=this.e.l();while(c!=b){if(c=="%"){var d=this.h($$t.$kr.t);this.al(this.e.ae(),d);this.aa(a,"￿");this.ak();c=this.e.l()}else if(c=="-"){c=this.l()}else{var e=this.b(c);a._add(e)}c=this.e.l()}},b:function(a){a=this.e.l();var b=this.u($$t.$kr.v);b=b.toUpperCase();b=this.am.b(b);var c=new $$t.kp(b);a=this.e.l();if(a=="-"){a=this.l()}this.ab(a,c);a=this.e.l();if(a=="-"){a=this.l()}this.y(a,c);a=this.e.l();if(a=="-"){a=this.l()}return c},ab:function(a,b){if(a=="%"){var c=this.h($$t.$kr.v);this.al(this.e.ae(),c);this.ab(this.e.j,b);this.ak();a=this.e.j;return}if(a=="("){b.a=this.a(a,false);b.c=16}else{var d=this.u($$t.$kr.v);if(d=="NOTATION"){a=this.e.l();if(a!="("){this.e.ah("Expecting name group '(', but found '{0}'",a)}b.c=15;b.a=this.a(a,true)}else{b.g(d)}}},y:function(a,b){if(a=="%"){var c=this.h($$t.$kr.v);this.al(this.e.ae(),c);this.y(this.e.j,b);this.ak();a=this.e.j;return}var d=true;if(a=="#"){this.e.k();var e=this.e.z(this.w,$$t.$kr.v,true);d=b.d(e);a=this.e.l()}if(d){if(a=="'"||a=='"'){var f=this.e.x(this.w,a);b.e=f;a=this.e.l()}else{var g=this.e.z(this.w,$$t.$kr.v,false);g=g.toUpperCase();g=this.am.b(g);b.e=g;a=this.e.l()}}},$type:new $.ig.Type("SgmlDtd",$.ig.$ot)},true);$c("StringUtilitiesSgml:ks","Object",{init:function(){$.ig.$op.init.call(this)},a:function(a,b){return $1(a,b,$$v.$ao.e())==0},$type:new $.ig.Type("StringUtilitiesSgml",$.ig.$ot)},true);$c("HWStack:ku","Object",{a:null,e:0,b:0,d:0,init:function(a){$.ig.$op.init.call(this);this.d=a},c:function(a){if(arguments.length===1){this.b=a;return a}else{return this.b}},f:function(){return this.e},item:function(a,b){if(arguments.length===2){this.a[a]=b;return b}else{return a>=0&&a<this.e?this.a[a]:null}},h:function(){this.b--;if(this.b>0){return this.a[this.b-1]}return null},i:function(){if(this.b==this.e){var a=this.e+this.d;var b=new Array(a);if(this.a!=null){$.ig.util.arrayCopy2(this.a,b,this.e)}this.e=a;this.a=b}return this.a[this.b++]},j:function(a){this.a[a]=null;$.ig.util.arrayCopy1(this.a,a+1,this.a,a,this.b-a-1);this.b--},$type:new $.ig.Type("HWStack",$.ig.$ot)},true);$c("Attribute:kv","Object",{init:function(){$.ig.$op.init.call(this)},e:null,a:null,c:"\0",d:null,g:function(a,b,c){this.e=a;this.d=b;this.c=c;this.a=null},f:function(a){if(arguments.length===1){this.d=a;return a}else{if(this.d!=null){return this.d}if(this.a!=null){return this.a.e}return null}},b:function(){return this.d==null},$type:new $.ig.Type("Attribute",$.ig.$ot)},true);$c("Node:kw","Object",{init:function(){this.d=new $$t.ku(10);$.ig.$op.init.call(this)},p:0,k:null,q:0,l:null,f:false,j:null,c:null,e:0,g:false,d:null,o:function(a,b,c){this.k=c;this.j=a;this.p=b;this.q=0;this.l=null;this.f=true;this.d.c(0);this.c=null},a:function(a,b,c,d){var e;for(var f=0,g=this.d.c();f<g;f++){e=this.d.item(f);if(d&&$1(e.e,a,1)==0){return null}else if(e.e==a){return null}}e=this.d.i();if(e==null){e=new $$t.kv;this.d.item(this.d.c()-1,e)}e.g(a,b,c);return e},n:function(a){for(var b=0,c=this.d.c();b<c;b++){var d=this.d.item(b);if(d.e==a){this.d.j(b);return}}},m:function(a){for(var b=0,c=a.d.c();b<c;b++){var d=a.d.item(b);var e=this.a(d.e,d.f(),d.c,false);e.a=d.a}},h:function(){return this.d.c()},i:function(a){for(var b=0,c=this.d.c();b<c;b++){var d=this.d.item(b);if(d.e==a){return b}}return-1},b:function(a){if(a>=0&&a<this.d.c()){var b=this.d.item(a);return b}return null},$type:new $.ig.Type("Node",$.ig.$ot)},true);$c("SgmlReader:ky","XmlReader",{_bk:null,_bc:null,_bm:0,_dh:null,_b2:"\0",_ca:null,_be:null,_bg:null,_a9:null,_b3:0,_c0:null,_cz:null,_cy:null,_b9:null,_bn:false,_bf:null,_b4:0,_b5:0,_bo:false,_cp:null,_ci:null,_bd:null,_cm:null,_b6:null,_ct:null,_cn:null,_cs:null,_cf:null,_de:0,_bb:0,_b0:false,_dg:null,init:function(){this._bb=0;this._b0=true;$$2.$al.init.call(this);this.c2();this._dh=new $$2.u;this._dg=new $$2.ae(this._dh)},_bl:function(a){if(arguments.length===1){this._bk=a;return a}else{this._c3(this._c0);return this._bk}},_c3:function(a){if(this._bk==null){if(this._bk!=null&&this._bk.r!=null){switch(this._ba()){case 1:this._cp=this._bk.r.toUpperCase();break;case 2:this._cp=this._bk.r.toLowerCase();break;default:this._cp=this._bk.r;break}this._bo=$$t.$ks.a(this._bk.r,"html")}}},_cg:function(a){if(arguments.length===1){this._cf=a;return a}else{return this._cf}},_co:function(a){if(arguments.length===1){this._cn=a;return a}else{return this._cn}},_cu:function(a){if(arguments.length===1){this._ct=a;return a}else{return this._ct}},_ck:function(a){if(arguments.length===1){this._cs=a;return a}else{return this._cs}},_b7:function(a){if(arguments.length===1){this._b6=a;this.c2();return a}else{return this._b6}},_cw:function(a){if(arguments.length===1){this._cm=a;return a}else{return this._cm}},_c9:function(a){this._c0=new $$6.x(0,a)},_cj:function(a){if(arguments.length===1){this._ci=a;this.c2();if(this._c0==null){if(this._ci.indexOf("://")>0){this._c0=new $$6.x(0,this._ci)}}return a}else{return this._ci}},_b1:function(a){if(arguments.length===1){this._b0=a;return a}else{return this._b0}},_ba:function(a){if(arguments.length===1){this._bb=a;return a}else{return this._bb}},_b8:function(a){if(arguments.length===1){this._b9=a;return a}else{return this._b9}},_c4:function(a,b){if(this._b8()!=null){var c=$z(a,b);if(this._bd!=this._bc){c=c+"    "+this._bc.r();this._bd=this._bc;this._b8().an("### Error:"+c)}else{var d="";if(this._bc.ae()!=null){d=this._bc.ae().absolutePath()}this._b8().an("### Error in "+d+"#"+this._bc.u+", line "+this._bc.n+", position "+this._bc.o()+": "+c)}}},_c5:function(a,b){this._c4(a,[b.toString()])},c2:function(){this._bm=0;this._be=new $$t.ku(10);this._bg=this._bi(null,9,null);this._bg.f=false;this._cz=new $$6.aj(0);this._cy=new $$6.aj(0);this._b4=0;this._bc=null;this._b2="\0";this._ca=null;this._a9=null;this._b3=0;this._bf=null;this._b5=0;this._bn=false},_bi:function(a,b,c){var d=this._be.i();if(d==null){d=new $$t.kw;this._be.item(this._be.c()-1,d)}d.o(a,b,c);this._bg=d;return d},_da:function(){var a=this._be.c()-1;if(a>0){var b=this._be.item(a-1);this._be.item(a-1,this._be.item(a));this._be.item(a,b)}},_bh:function(a){var b=this._bi(a.j,a.p,a.k);b.c=a.c;b.f=a.f;b.q=a.q;b.l=a.l;b.e=a.e;b.m(a);this._bg=b;return b},_c8:function(){if(this._be.c()>1){this._bg=this._be.h()}},_bj:function(){var a=this._be.c()-1;if(a>0){return this._be.item(a)}return null},a7:function(){if(this._bm==3){return 2}else if(this._bm==4){return 3}else if(this._bm==2||this._bm==7){return 15}return this._bg.p},ai:function(){var a=null;if(this._bm==3){a=this._a9.e}else if(this._bm==4){a=null}else{a=this._bg.j}return a},ag:function(){var a=this.ai();var b=this.ak();if(b.length!=0){return a.substr(b.length+1)}return a},aj:function(){if(this._bm==3&&$$t.$ks.a(this._a9.e,"xmlns")){return"http://www.w3.org/2000/xmlns/"}var a=this.ak();switch(a){case"xmlns":return"http://www.w3.org/2000/xmlns/";case"xml":return"http://www.w3.org/XML/1998/namespace";case"":return String.empty();default:return this.ah(a)}},ak:function(){var a=this.ai();if(a==null){return String.empty()}var b=a.indexOf(":");if(b<0){return String.empty()}return a.substr(0,b)},f:function(){if(this._bm==3||this._bm==4){return true}return this._bg.k!=null},ar:function(){if(this._bm==3||this._bm==4){return this._a9.f()}return this._bg.k},x:function(){if(this._bm==3){return this._be.c()}else if(this._bm==4){return this._be.c()+1}return this._be.c()-1},z:function(){return this._c0==null?"":this._c0.absoluteUri()},i:function(){if(this._bm==1||this._bm==3||this._bm==4){return this._bg.f}return false},h:function(){if(this._bm==3||this._bm==4){return this._a9.b()}return false},v:function(){if(this._a9!=null){return this._a9.c}return"\0"},a8:function(){for(var a=this._be.c()-1;a>1;a--){var b=this._be.item(a);var c=b.q;if(c!=0){return c}}return 0},as:function(){for(var a=this._be.c()-1;a>1;a--){var b=this._be.item(a);var c=b.l;if(c!=null){return c}}return String.empty()},_df:function(a){if(arguments.length===1){this._de=a;return a}else{return this._de}},w:function(){if(this._bm==3||this._bm==4){return 0}if(this._bg.p==1||this._bg.p==10){return this._bg.h()}return 0},ab:function(a){if(this._bm!=3&&this._bm!=4){var b=this._bg.i(a);if(b>=0){return this.aa(b)}}return null},ac:function(a,b){return this.ab(a)},aa:function(a){if(this._bm!=3&&this._bm!=4){var b=this._bg.b(a);if(b!=null){return b.f()}}throw new $$6.o(0)},item:function(a){return this.aa(a)},item1:function(a){return this.ab(a)},item2:function(a,b){return this.ac(a,b)},o:function(a){var b=this._bg.i(a);if(b>=0){this.aw(b);return true}return false},p:function(a,b){return this.o(a)},aw:function(a){var b=this._bg.b(a);if(b!=null){this._b3=a;this._a9=b;if(this._bm!=3){this._bg.e=this._bm}this._bm=3;return}throw new $$6.o(0)},r:function(){if(this._bg.h()>0){this.aw(0);return true}return false},s:function(){if(this._bm!=3&&this._bm!=4){return this.r()}if(this._b3<this._bg.h()-1){this.aw(this._b3+1);return true}return false},q:function(){if(this._bm==3||this._bm==4){this._bm=this._bg.e;this._a9=null;return true}return this._bg.p==1},_bp:function(){return this._bo},_cx:function(){if(this._bc==null){this._c6()}return this._bc.ac()},_c6:function(){this._c3(this._c0);if(this._cj()!=null){this._bc=new $$t.kc(0,"#document",null,this._ci,this._cm)}else if(this._b6!=null){this._bc=new $$t.kc(2,"#document",null,this._b6,this._cm)}else{throw new $$6.p(1,"You must specify input either via Href or InputStream properties")}this._bc.d=this._bp();this._bc.ak(null,this._c0);if(this._bc.ae()!=null){this._c0=this._bc.ae()}if(this._bc.d&&this._bk==null){this._cf="HTML";this._c3(this._c0)}},t:function(){if(this._bc==null){this._c6()}var a=this._bm;if(this._bg.g){this._bg.g=false;this._bg=this._bj();this._bm=this._bg.e;return true}var b=false;while(!b){var t1=this._bm;L0:while(true){switch(t1){case 0:this._bm=1;this._bc.k();t1=1;continue L0;case 11:if(this._bc.b!=null){this._bc.af();this._bc=this._bc.b}else{return false}break;case 2:if(this._ca==this._bg.j){this._c8();this._bm=1;t1=1;continue L0}this._c8();b=true;break;case 1:if(this._bg.f){this._c8()}var c=this._bg;b=this._bv();break;case 6:this._c8();this._bm=1;b=this._by(this._b2);break;case 10:b=this._bx("<");break;case 7:this._c8();if(this._be.c()<=this._b4){this._bm=1;if(this._bf!=null){this._bh(this._bf);this._bf=null;this._bm=1}else if(this._bg.p==9){this._bm=11;t1=11;continue L0}}b=true;break;case 8:b=this._br();break;case 3:t1=4;continue L0;case 4:this._bm=1;t1=1;continue L0;case 5:this._c8();t1=1;continue L0;case 9:if(this._bz(this._bc.j,false)){this._bg.p=13}b=true;break}break}if(b&&this._bg.p==13&&this._de==2){b=false}if(!b&&this._bm==11&&this._be.c()>1){this._b4=1;this._bm=7;this._bg=this._bj();return true}}if(!this._bn&&(this.a7()==1||this.a7()==3||this.a7()==4)){this._bn=true;if(this._bp()&&(this.a7()!=1||$1(this.ag(),"html",$$v.$ao.e())!=0)){this._bg.e=this._bm;var d=this._bi("html",1,null);this._da();this._bg=d;d.g=true;d.f=false;this._bm=1}return true}return true},_bv:function(){var a=this._bc.j;if(a=="<"){a=this._bc.k();return this._by(a)}else if(a!="￿"){if(this._bg.c!=null&&this._bg.c.e.a==1){this._b2="\0";this._bm=8;return false}else if(this._bz(a,true)){this._bg.p=13}return true}this._bm=11;return false},_by:function(a){if(a=="%"){return this._bq()}if(a=="!"){a=this._bc.k();if(a=="-"){return this._bs()}else if(a=="["){return this._bt()}else if(a!="_"&&!$6(a)){var b=this._bc.y(this._cz,"Recovering",">");this._c4("Ignoring invalid markup '<!"+b+">",[]);return false}else{var c=this._bc.z(this._cz,$$t.$ky._ce,false);if(c=="DOCTYPE"){this._c7();if(this.ab("SYSTEM")==null&&this.ab("PUBLIC")!=null){this._bg.a("SYSTEM","",'"',this._bb==0)}if(this._b0){return false}else{this._bg.p=10;return true}}else{this._c4("Invalid declaration '<!{0}...'.  Expecting '<!DOCTYPE' only.",[c]);this._bc.y(null,"Recovering",">");return false}}}else if(a=="?"){this._bc.k();return this._bw()}else if(a=="/"){return this._bu()}else{return this._bx(a)}},_cr:function(a){var b=this._bc.z(this._cz,a,false);switch(this._bb){case 1:b=b.toUpperCase();break;case 2:b=b.toLowerCase();break}return this._dh.b(b)},_bx:function(a){var b=null;if(this._bm!=10){if($$t.$ky._cv.indexOf(a)>=0){this._cz.c(0);this._cz.h("<");this._bm=9;return false}b=this._cr($$t.$ky._cv)}else{this._bm=1}var c=this._bi(b,1,null);c.f=false;this._db(c);a=this._bc.l();this._dg.pushScope();while(a!="￿"&&a!=">"){if(a=="/"){this._dg.popScope();c.f=true;a=this._bc.k();if(a!=">"){this._c5("Expected empty start tag '/>' sequence instead of '{0}'",a);this._bc.y(null,"Recovering",">");return false}break}else if(a=="<"){this._c4("Start tag '{0}' is missing '>'",[b]);break}var d=this._cr($$t.$ky._cb);a=this._bc.l();if(d==","||d=="="||d==":"||d==";"){continue}var e=null;var f="\0";if(a=="="||a=='"'||a=="'"){if(a=="="){this._bc.k();a=this._bc.l()}if(a=="'"||a=='"'){f=a;e=this._cq(this._cz,a)}else if(a!=">"){var g=$$t.$ky._cc;e=this._bc.z(this._cz,g,false)}}if(d.length>0){var h=c.a(d,e,f,this._bb==0);if(h==null){this._c4("Duplicate attribute '{0}' ignored",[d])}else{this._dc(c,h);if(h.e.startsWith1("xmlns:",$$v.$ao.e())){var i=h.e.substr(6);this._dg.addNamespace(i,h.f())}}}a=this._bc.l()}if(a=="￿"){this._bc.aj("Unexpected EOF parsing start tag '{0}'",b)}else if(a==">"){this._bc.k()}if(this.x()==1){if(this._b5==1){this._bm=11;return false}this._b5++}this._dd(c);return true},_bu:function(){this._dg.popScope();this._bm=2;this._bc.k();var a=this._cr($$t.$ky._cv);var b=this._bc.l();if(b!=">"){this._c5("Expected empty start tag '/>' sequence instead of '{0}'",b);this._bc.y(null,"Recovering",">")}this._bc.k();this._ca=a;var c=this._bb==0;this._bg=this._be.item(this._be.c()-1);for(var d=this._be.c()-1;d>0;d--){var e=this._be.item(d);if(c&&$1(e.j,a,1)==0){this._ca=e.j;return true}else if(e.j==a){return true}}this._c4("No matching start tag for '</{0}>'",[a]);this._bm=1;return false},_bq:function(){var a="<%"+this._bc.y(this._cz,"AspNet","%>")+"%>";this._bi(null,4,a);return true},_bs:function(){var a=this._bc.k();if(a!="-"){this._c5("Expecting comment '<!--' but found {0}",a);this._bc.y(null,"Comment",">");return false}var b=this._bc.y(this._cz,"Comment","-->");var c=b.indexOf("--");while(c>=0){var d=c+2;while(d<b.length&&b.charAt(d)=="-"){d++}if(c>0){b=b.substr(0,c-1)+"-"+b.substr(d)}else{b="-"+b.substr(d)}c=b.indexOf("--")}if(b.length>0&&b.charAt(b.length-1)=="-"){b+=" "}this._bi(null,8,b);return true},_bt:function(){var a=this._bc.k();a=this._bc.l();var b=this._bc.z(this._cz,$$t.$ky._cd,false);if(b!="CDATA"){this._c4("Expecting CDATA but found '{0}'",[b]);this._bc.y(null,"CDATA",">");return false}a=this._bc.l();if(a!="["){this._c5("Expecting '[' but found '{0}'",a);this._bc.y(null,"CDATA",">");return false}var c=this._bc.y(this._cz,"CDATA","]]>");this._bi(null,4,c);return true},_c7:function(){var a=this._bc.l();var b=this._cr($$t.$ky._ch);this._bi(b,10,null);a=this._bc.l();if(a!=">"){var c="";var d="";var e="";if(a!="["){var f=this._bc.z(this._cz,$$t.$ky._ch,false);if(f=="PUBLIC"){a=this._bc.l();if(a=='"'||a=="'"){d=this._bc.x(this._cz,a);this._bg.a(f,d,a,this._bb==0)}}else if(f!="SYSTEM"){this._c4("Unexpected token in DOCTYPE '{0}'",[f]);this._bc.y(null,"DOCTYPE",">")}a=this._bc.l();if(a=='"'||a=="'"){f=this._dh.b("SYSTEM");e=this._bc.x(this._cz,a);this._bg.a(f,e,a,this._bb==0)}a=this._bc.l()}if(a=="["){c=this._bc.y(this._cz,"Internal Subset","]");this._bg.k=c}a=this._bc.l();if(a!=">"){this._c5("Expecting end of DOCTYPE tag, but found '{0}'",a);this._bc.y(null,"DOCTYPE",">")}if(this._bk==null){this._cf=b;this._cn=d;this._ct=e;this._cs=c;this._c3(this._bc.ae())}}this._bc.k()},_bw:function(){var a=this._bc.z(this._cz,$$t.$ky._cl,false);var b=null;if(this._bc.j!="?"){b=this._bc.y(this._cz,"Processing Instruction",">")}else{b=this._bc.y(this._cz,"Processing Instruction",">")}if(a!="xml"){this._bi(this._dh.b(a),7,b);return true}return false},_bz:function(a,b){var c=!b||this._bc.g;if(b){this._cz.c(0)}this._bm=5;while(a!="￿"){if(a=="<"){a=this._bc.k();if(a=="/"||a=="!"||a=="?"||$6(a)){this._bm=6;this._b2=a;break}else{this._cz.h("<");this._cz.h(a);c=false;a=this._bc.k()}}else if(a=="&"){this._c1(this._cz,"<");c=false;a=this._bc.j}else{if(!this._bc.g){c=false}this._cz.h(a);a=this._bc.k()}}var d=this._cz.toString();this._bi(null,3,d);return c},_cq:function(a,b){a.c(0);var c=this._bc.k();while(c!="￿"&&c!=b){if(c=="&"){this._c1(this._cz,b);c=this._bc.j}else{a.h(c);c=this._bc.k()}}this._bc.k();return a.toString()},_br:function(){var a=this._bc.g;this._cz.c(0);var b=this._bc.j;if(this._b2!="\0"){this._c8();switch(this._b2){case"!":this._b2=" ";return this._bs();case"?":this._b2=" ";return this._bw();case"/":this._bm=2;return true;case" ":break}}else{b=this._bc.k()}while(b!="￿"){if(b=="<"){b=this._bc.k();if(b=="!"){b=this._bc.k();if(b=="-"){if(a){this._b2=" ";return this._bs()}else{this._b2="!";break}}else{this._cz.h("<");this._cz.h("!");this._cz.h(b);a=false}}else if(b=="?"){this._bc.k();if(a){this._b2=" ";return this._bw()}else{this._b2="?";break}}else if(b=="/"){var c=this._cz.toString();if(this._bu()&&this._ca==this._bg.j){if(a||c==""){return true}else{this._b2="/";this._cz.c(0);this._cz.l(c);this._bm=8;break}}else{this._cz.c(0);this._cz.l(c);this._cz.l("</"+this._ca+">");a=false}}else{this._cz.h("<");this._cz.h(b);a=false}}else{if(!this._bc.g&&a){a=false}this._cz.h(b)}b=this._bc.k()}var d=this._cz.toString();this._bi(null,4,d);if(this._b2=="\0"){this._b2=" "}return true},_c1:function(a,b){var c=this._bc.k();if(c=="#"){var d=this._bc.s();a.l(d);c=this._bc.j}else{this._cy.c(0);while(c!="￿"&&($6(c)||c=="_"||c=="-")){this._cy.h(c);c=this._bc.k()}var e=this._cy.toString();if(this._bk!=null&&e!=""){var f=this._bk.f(e);if(f!=null){if(f.e){a.l(f.t);if(c!=b){c=this._bc.k()}return}else{var g=new $$t.kc(0,e,f.w,f.aa,this._bc.v);f.ak(this._bc,new $$6.x(0,f.aa));this._bc=g;this._bc.k();return}}else{this._c4("Undefined entity '{0}'",[e])}}a.l("&");a.l(e);if(c!=b){a.h(c);c=this._bc.k()}}},d:function(){return this._bm==11},au:function(){this.disposeCore(true)},disposeCore:function(a){if(a){if(this._bc!=null){this._bc.af();this._bc=null}if(this._b9!=null){this._b9.i();this._b9=null}}},a3:function(){if(this._bm==0){return 0}else if(this._bm==11){return 3}return 1},aq:function(){if(this._bg.p==1){this._cz.c(0);while(this.t()){switch(this.a7()){case 4:case 14:case 13:case 3:this._cz.l(this._bg.k);break;default:return this._cz.toString()}}return this._cz.toString()}return this._bg.k},ao:function(){var a=new $$2.bb(0);{var b=new $$2.ax(1,a);try{switch(this.a7()){case 1:this.t();while(!this.d()&&this.a7()!=15){b.ac(this,true)}this.t();break;case 2:a.v(this.ar());break;default:break}}finally{if(b!=null){b.dispose()}}}return a.toString()},ap:function(){var a=new $$2.bb(0);{var b=new $$2.ax(1,a);try{b.ac(this,true)}finally{if(b!=null){b.dispose()}}}return a.toString()},a5:function(){return this._dh},ah:function(a){return this._dg.lookupNamespace(a)},a1:function(){throw new $$6.p(1,"Not on an entity reference.")},u:function(){if(this._bm==3){this._bm=4;return true}else if(this._bm==4){return false}throw new $$6.p(1,"Not on an attribute.")},_db:function(a){if(this._bk!=null){var b=this._bk.d(a.j);if(b!=null){a.c=b;if(b.e.a==3){a.f=true}}}},_dc:function(a,b){var c=a.c;if(c!=null){var d=c.c(b.e);if(d!=null){b.a=d}}},_dd:function(a){if(this._bk!=null){var b=this._dh.b(a.j.toUpperCase());var c=0;var d=this._be.c()-2;if(a.c!=null){for(c=d;c>0;c--){var e=this._be.item(c);if(e.f){continue}var f=e.c;if(f!=null){if(f.i==this._bk.r){break}if(f.f(b,this._bk)){break}else if(!f.g){break}}else{break}}}if(c==0){}else if(c<d){var g=this._be.item(d);if(c==d-1&&b==g.j){}else{var h="";for(var i=d;i>=c+1;i--){if(h!=""){h+=","}var j=this._be.item(i);h+="<"+j.j+">"}this._c4("Element '{0}' not allowed inside '{1}', closing {2}.",[b,g.j,h])}this._bm=7;this._bf=a;this._c8();this._b4=c+1}}},$type:new $.ig.Type("SgmlReader",$$2.$al.$type)},true);$c("OverrideContentTypePart:jy","Object",{b:null,a:null,init:function(a,b){$.ig.$op.init.call(this);this.a=a;this.b=b!=null?b:a.contentType()},$package:function(){return this.a.$package()},uri:function(){return this.a.uri()},contentType:function(){return this.b},getStream:function(a,b){return this.a.getStream(a,b)},createRelationship:function(a,b,c,d){return this.a.createRelationship(a,b,c,d)},getRelationships:function(){return this.a.getRelationships()},getRelationship:function(a){return this.a.getRelationship(a)},$type:new $.ig.Type("OverrideContentTypePart",$.ig.$ot,[$$v.$az.$type])},true);$c("ZipFile:jz","Object",{a:null,c:null,init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}this.a=new $$4.w($$t.$j0.$type,0);$.ig.$op.init.call(this);this.c=new JSZip},init1:function(a,b){this.a=new $$4.w($$t.$j0.$type,0);$.ig.$op.init.call(this);this.c=new JSZip;var c=null;var d=$b($$7.$e.$type,b);if(d!=null){c=d.getBuffer();if(c.length!=b.length()){c=null}}if(c==null){c=new Array(b.length());b.read(c,0,c.length)}this.c.load(c);var e=$.ig.util.getArrayOfValues(this.c.files);for(var f=0;f<e.length;f++){this.a.add(new $$t.j0(0,e[f]))}},b:function(){return this.a},d:function(a){var c=this.a.getEnumerator();while(c.moveNext()){var b=c.current();var d=b.f;if(d.charAt(0)=="/"){d=d.substr(1)}if(b.b){this.c.folder(d)}else{var e=new Array(b.d.length());b.d.position(0);b.d.read(e,0,e.length);this.c.file(d,e)}}var f=JSZip.support.uint8array?"uint8array":"array";var g=this.c.generate({type:f,compression:"DEFLATE"});a.write(g,0,g.length)},$type:new $.ig.Type("ZipFile",$.ig.$ot)},true);$c("ZipEntry:j0","Object",{e:null,b:false,f:null,d:null,init:function(a,b){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$.ig.$op.init.call(this);this.e=b;this.b=this.e.dir;this.f=this.e.name},init1:function(a,b,c){$.ig.$op.init.call(this);this.f=b;this.d=c},a:function(a,b,c){return new $$t.j0(1,$x($$7.$b.combine1(b,a),"\\","/"),c)},c:function(){if(this.e!=null){if(JSZip.support.uint8array){return new $$7.e(2,this.e.asUint8Array())}return new $$7.e(2,this.e.asBinary())}return this.d},$type:new $.ig.Type("ZipEntry",$.ig.$ot)},true);$c("PackagePartExposedStream:j1","Stream",{_o:null,init:function(a){$$0.$dg.init.call(this);this._o=a},canRead:function(){return this._o.canRead()},canSeek:function(){return this._o.canSeek()},canWrite:function(){return this._o.canWrite()},flush:function(){this._o.flush()},length:function(){return this._o.length()},position:function(a){if(arguments.length===1){this._o.position(a);return a}else{return this._o.position()}},read:function(a,b,c){return this._o.read(a,b,c)},seek:function(a,b){return this._o.seek(a,b)},setLength:function(a){this._o.setLength(a)},write:function(a,b,c){this._o.write(a,b,c)},$type:new $.ig.Type("PackagePartExposedStream",$$0.$dg.$type)},true);$c("PackageRelationship:j2","Object",{init:function(a,b,c,d,e){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$t.$j2.init1.call(this,1,new $$6.x(1,"/",2),b,c,d,e)},init1:function(a,b,c,d,e,f){$.ig.$op.init.call(this);this.sourceUri(b);this.targetMode(d);
this.targetUri(c);this.id(f);this.relationshipType(e)},_sourceUri:null,sourceUri:function(a){if(arguments.length===1){this._sourceUri=a;return a}else{return this._sourceUri}},_targetUri:null,targetUri:function(a){if(arguments.length===1){this._targetUri=a;return a}else{return this._targetUri}},_id:null,id:function(a){if(arguments.length===1){this._id=a;return a}else{return this._id}},_relationshipType:null,relationshipType:function(a){if(arguments.length===1){this._relationshipType=a;return a}else{return this._relationshipType}},_targetMode:0,targetMode:function(a){if(arguments.length===1){this._targetMode=a;return a}else{return this._targetMode}},$type:new $.ig.Type("PackageRelationship",$.ig.$ot,[$$v.$a1.$type])},true);$c("InvalidTargetPackageRelationship:j3","PackageRelationship",{init:function(a,b,c,d,e){$$t.$j2.init1.call(this,1,a,null,c,d,e);this.targetString(b)},targetUri:function(a){if(arguments.length===1){$$t.$j2.targetUri.call(this,a);return a}else{if(this.targetString()!=null&&$$t.$j2.targetUri.call(this)==null){this.targetUri(new $$6.x(1,this.targetString(),0))}return $$t.$j2.targetUri.call(this)}},_targetString:null,targetString:function(a){if(arguments.length===1){this._targetString=a;return a}else{return this._targetString}},$type:new $.ig.Type("InvalidTargetPackageRelationship",$$t.$j2.$type,[$$v.$a3.$type])},true);$c("PackagePart:j4","Object",{e:null,c:null,init:function(a,b,c){this.c=null;$.ig.$op.init.call(this);this.e=new $$7.e(0);this.$package(a);this.uri(b);this.contentType(c);var d=$b($$t.$j5.$type,this.$package());if(d==null){throw new $$6.d(2,"The expected type for package parameter is type of Package.","package")}if(d.__l==2){var e=$$7.$b.getFileName(b.toString());var f=$$7.$b.getDirectoryName(b.toString());f=$x(f,"\\","/");this._b=$$t.$j0.a(e,f,new $$7.e(0));d.__c.b().add(this._b)}},_$package:null,$package:function(a){if(arguments.length===1){this._$package=a;return a}else{return this._$package}},_uri:null,uri:function(a){if(arguments.length===1){this._uri=a;return a}else{return this._uri}},_contentType:null,contentType:function(a){if(arguments.length===1){this._contentType=a;return a}else{return this._contentType}},_b:null,getStream:function(a,b){return new $$t.j1(this._b.c())},createRelationship:function(a,b,c,d){var e=new $$t.j2(1,this.uri(),a,b,c,d);return this.a(e)},createExternalRelationship:function(a,b,c){var d;if(function(){var e=$$6.$x.tryCreate(a,0,d);d=e.p2;return e.ret}()){return this.createRelationship(d,1,b,c)}var e=new $$t.j3(this.uri(),a,1,b,c);return this.a(e)},a:function(a){if(this.c==null){this.c=new $$4.g(String,$$v.$a1.$type,1,1)}if(this.c.count()==0){var b=$$7.$b.getFileName(this.uri().toString())+".rels";var c=$$7.$b.getDirectoryName(this.uri().toString())+"/_rels";if(c.charAt(0)=="\\"){c=c.substr(1)}var d=$$t.$j0.a(b,c,this.e);this.$package().__c.b().add(d)}this.c.add(a.id(),a);return a},getRelationships:function(){this.j();return this.c.values()},getRelationship:function(a){this.j();var b=null;var c=this.c.tryGetValue(a,b);b=c.p1;return b},d:function(){return this.getRelationships()},i:function(){var a=$x($$7.$b.getDirectoryName($$t.$j9.fixDirectoryPath(this.uri().toString())),"\\","/");var b=$$7.$b.getFileName(this.uri().toString());var c=this.$package();var d=c.__c;var e=a+"/_rels/"+b+".rels";if(d!=null&&c.__l==3){var f=$$5.$e.u($$t.$j0.$type,d.b(),function(g){return g.f==e});if($$5.$e.aj($$t.$j0.$type,f)!=1){return}c.__b=$$5.$e.ad($$t.$j0.$type,f);this.e=c.__b.c();{var g=new $$2.ar(1,this.e);try{while(g.t()){if(g.l()&&g.ai()=="Relationship"){if(g.e()){var h=g.ab("TargetMode");var i=g.ab("Target");var j=g.ab("Id");var k=g.ab("Type");var l=0;if(String.isNullOrEmpty(h)==false){l=$g($.ig.$ep.parse($$v.$a2.$type,h,true))}var m=new $$t.j2(1,this.uri(),new $$6.x(1,i,0),l,k,j);this.c.add(j,m)}}}}finally{if(g!=null){g.dispose()}}}}},j:function(){if(this.c==null){this.c=new $$4.g(String,$$v.$a1.$type,0);if(this.$package().__l==3){this.i()}}},$type:new $.ig.Type("PackagePart",$.ig.$ot,[$$v.$az.$type,$$v.$a0.$type])},true);$c("Package:j5","Object",{_d:false,_e:false,_n:null,_o:null,_m:null,_h:null,_k:null,_f:null,_g:null,init:function(a,b){this._f=new $$4.g(String,String,2,$$6.$t.ordinalIgnoreCase);this._g=new $$4.g(String,String,2,$$6.$t.ordinalIgnoreCase);$.ig.$op.init.call(this);this.__l=b;if(b==3){a.position(0);this.__c=new $$t.jz(1,a)}else{this._n=a;this.__c=new $$t.jz(0)}},_j:function(){return this._k},_i:function(){return this._h},__l:0,__c:null,__b:null,__a:null,createPart:function(a,b){if(!this._d){this._ae()}var c=new $$t.j4(this,a,b);this._g.add(a.toString(),b);if(this.partExists(a)){this._h.item(a.originalString(),c)}else{this._h.add(a.originalString(),c)}return c},createRelationship:function(a,b,c,d){if(!this._e){this._af()}var e=new $$t.j2(0,a,b,c,d);this._k.add(e);return e},getRelationships:function(){if(this._k==null){this._k=new $$4.w($$v.$a1.$type,0);this._ac()}return this._k},getPart:function(a){var b=null;if(this.partExists(a)){b=this._h.item(a.originalString())}return b},getParts:function(){if(this._h==null){if(this.__l==3){if(this._h==null){this._ad()}}else{this._h=new $$4.g(String,$$t.$j4.$type,0)}}return this._h.values()},getRelationship:function(a){this._af();return $$5.$e.af($$v.$a1.$type,$$5.$e.u($$v.$a1.$type,this._k,function(b){return b.id()==a}))},_v:function(a){if(this._g.containsKey(a)){return this._g.item(a)}var b=$$7.$b.getExtension(a).substr(1);if(this._f.containsKey(b)){return this._f.item(b)}return null},_ad:function(){this._h=new $$4.g(String,$$t.$j4.$type,0);var a=$$5.$e.ad($$t.$j0.$type,$$5.$e.u($$t.$j0.$type,this.__c.b(),function(b){return b.f=="[Content_Types].xml"}));{var b=a.c();try{{var c=new $$2.ar(1,b);try{while(c.t()){if(c.l()&&c.ai()=="Types"){while(c.t()){if(c.l()){if(c.ai()=="Override"){var d=c.ab("PartName");var e=c.ab("ContentType");if(!this._g.containsKey(d)){this._g.add(d,e)}}else if(c.ai()=="Default"){var f=c.ab("Extension");var g=c.ab("ContentType");if(!this._f.containsKey(f)){this._f.add(f,g)}}}}}}}finally{if(c!=null){c.dispose()}}}}finally{if(b!=null){b.dispose()}}}var i=$$5.$e.u($$t.$j0.$type,this.__c.b(),function(j){return j.f!="[Content_Types].xml"&&!j.b}).getEnumerator();while(i.moveNext()){var h=i.current();var j="/"+h.f;var k=this._v(j);var l=new $$t.j4(this,new $$6.x(1,j,2),k);l._b=h;this._h.add(l.uri().originalString(),l)}},_ac:function(){if(this.__c!=null&&this.__l==3){this.__b=$$5.$e.ad($$t.$j0.$type,$$5.$e.u($$t.$j0.$type,this.__c.b(),function(a){return a.f=="_rels/.rels"}));var a=this.__b.c();this._o=a;{var b=new $$2.ar(1,a);try{while(b.t()){if(b.l()&&b.ai()=="Relationship"){if(b.e()){var c=b.ab("TargetMode");var d=b.ab("Id");var e=b.ab("Type");var f=b.ab("Target");var g=0;if(String.isNullOrEmpty(c)==false){g=$g($.ig.$ep.parse($$v.$a2.$type,c,true))}var h=new $$t.j2(1,new $$6.x(1,"/",2),new $$6.x(1,f,0),g,e,d);this._k.add(h)}}}}finally{if(b!=null){b.dispose()}}}}},partExists:function(a){if(this._h==null){this._ad()}return this._h.containsKey(a.originalString())},dispose:function(){if(this.__l==2){if(this._o!=null){$$t.$j8.j(this._j(),this._o)}if(this._h!=null){var b=this._h.values().getEnumerator();while(b.moveNext()){var a=b.current();if(a.e!=null){$$t.$j8.j(a.d(),a.e)}}}if(this._m!=null){$$t.$j7.j(this,this._m)}if(this._n!=null){this.__c.d(this._n)}}},_ae:function(){this._m=new $$7.e(0);this.__a=$$t.$j0.a("[Content_Types].xml","/",this._m);this.__c.b().add(this.__a);if(this._h==null){this._h=new $$4.g(String,$$t.$j4.$type,0)}this._d=true},_af:function(){this._o=new $$7.e(0);this.__b=$$t.$j0.a(".rels","/_rels",this._o);this.__c.b().add(this.__b);if(this._k==null){this._k=new $$4.w($$v.$a1.$type,0)}this._e=true},$type:new $.ig.Type("Package",$.ig.$ot,[$$v.$ay.$type])},true);$c("PackageFactory:j6","Object",{init:function(){$.ig.$op.init.call(this)},open:function(a,b){a=typeof a==="string"?$.ig.util.b64toUint8Array(a):a;a=$b($$0.$dg.$type,a)?a:new $$7.e(2,a);return new $$t.j5(a,b)},$type:new $.ig.Type("PackageFactory",$.ig.$ot,[$$v.$ax.$type])},true);$c("ContentTypesWriter:j7","Object",{init:function(){$.ig.$op.init.call(this)},k:function(a,b,c){a.an("Default",$$t.$j7.b);a.h("Extension",c);a.h("ContentType",b);a.v()},l:function(a,b,c){a.an("Override",$$t.$j7.b);a.h("PartName",c);a.h("ContentType",b);a.v()},j:function(a,b){{var c=new $$2.ax(0,b,$$8.$a.uTF8());try{c.ad("xml",'version="1.0" encoding="UTF-8" standalone="yes"');c.an("Types",$$t.$j7.b);$$t.$j7.k(c,$$t.$j7.d,"rels");$$t.$j7.k(c,"application/xml","xml");var e=a._g.getEnumerator();while(e.moveNext()){var d=e.current();$$t.$j7.l(c,d.value(),d.key())}c.v()}finally{if(c!=null){c.dispose()}}}},$type:new $.ig.Type("ContentTypesWriter",$.ig.$ot)},true);$c("RelationshipsWriter:j8","Object",{init:function(){$.ig.$op.init.call(this)},j:function(a,b){{var c=new $$2.ax(0,b,$$8.$a.uTF8());try{c.ad("xml",'version="1.0" encoding="UTF-8" standalone="yes"');c.an("Relationships",$$t.$j8.c);var e=a.getEnumerator();while(e.moveNext()){var d=e.current();c.an("Relationship",$$t.$j8.c);c.h("Id",d.id());c.h("Type",d.relationshipType());if(d.targetMode()==1){c.h("Target",d.targetUri().originalString());c.h("TargetMode","External")}else{c.h("Target",$$t.$j9.fixDirectoryPath(d.targetUri().toString()))}c.v()}c.v()}finally{if(c!=null){c.dispose()}}}},$type:new $.ig.Type("RelationshipsWriter",$.ig.$ot)},true);$c("DocCoreExtensions:j9","Object",{init:function(){$.ig.$op.init.call(this)},fixDirectoryPath:function(a){if(a.startsWith("\\")){return a.substr(1)}if(a.startsWith("/")){return a.substr(1)}return a},$type:new $.ig.Type("DocCoreExtensions",$.ig.$ot)},true);$c("PackageUtilities:ka","Object",{init:function(){$.ig.$op.init.call(this)},j:function(a,b){if(b.startsWith(".."+"/")){return $$t.$ka.j($$t.$ka.n(a),b.substr(3))}var c=a.length>0&&a.charAt(a.length-1)=="/";var d=b.length>0&&b.charAt(0)=="/";if(d){return b}if(c^d){return a+b}if(c){return a+b.substr(1)}return a+"/"+b},ag:function(a,b){var c=a.toString();var d=b.toString();return $$v.$ap.b($$t.$ka.j(c,d))},a:function(a,b){if(b){return new $$t.j5(a,3)}return new $$t.j5(a,2)},k:function(a){var b=$.ig.Date.prototype.toUniversalTime(a);return $.ig.Date.prototype.toStringFormat(b,"s",null)+"Z"},m:function(a){var b=$$t.$ka.n(a);var c=$$t.$ka.o(a);var d=$$t.$ka.j(b,"_rels");var e=c+".rels";return $$t.$ka.j(d,e)},n:function(a){var b=a.lastIndexOf("/");if(b<0){return a}return a.substr(0,b)},ah:function(a){return new $$6.x(1,$$t.$ka.n(a.toString()),2)},o:function(a){var b=a.lastIndexOf("/");if(b<0){return a}return a.substr(b+1)},e:function(a){if(a==null||a.length!=3||a.charAt(0)!="%"){$$t.$ka.al("The value passed to GetPercentEncodedValue was not expoected: "+a);return 0}try{return $$6.$g.f(a.substr(1),16)}catch(b){$$t.$ka.al("The value passed to GetPercentEncodedValue was not expoected: "+a);return 0}},ai:function(a,b){return $$t.$ka.aj(a,b,"/")},aj:function(a,b,c){var d=$$t.$ka.q(a.toString(),b.toString(),"/",false);return $$v.$ap.b(d)},p:function(a,b){return $$t.$ka.q(a,b,"/",false)},q:function(a,b,c,d){var e=$$t.$ka.h(a,c);var f=$$t.$ka.h(b,c);for(var g=0;g<e.count()-1&&g<f.count();g++){if(e.__inner[g]==f.__inner[g]){e.removeAt(g);f.removeAt(g);g--;continue}else{if(d){var h=$$t.$ka.w().g(b,String.empty());return $x(h,c,"/")}else{for(var i=0;i<e.count()-1;i++){f.insert(0,"..")}}break}}var j=new $$6.aj(0);var l=f.getEnumerator();while(l.moveNext()){var k=l.current();if(c!="/"){j.l($x(k,c,"/"))}else{j.l(k)}j.h("/")}j.y(j.c()-1,1);return j.toString()},g:function(a){return $$t.$ka.h(a,"/")},h:function(a,b){if(String.isNullOrEmpty(a)){return new $$4.w(String,0)}return new $$4.w(String,1,a.split(b))},ak:function(a){var b=$$t.$ka.ah(a.sourceUri());var c=$$t.$ka.ag(b,a.targetUri());return c},b:function(a){var b=$$t.$ka.g(a);if(b.count()==0){return false}if(b.__inner[0].length!=0){return false}for(var c=1;c<b.count();c++){if($$t.$ka.d(b.__inner[c])==false){return false}}return true},c:function(a){return $$t.$ka.b(a.toString())},d:function(a){if(String.isNullOrEmpty(a)){return false}if(a.charAt(a.length-1)=="."){return false}var b=$$t.$ka.ae().i(a);if(b.i()==false||b.d()!=a.length){return false}var c=$$t.$ka.aa().i(a);while(c.i()){var d=$$t.$ka.e(c.g());var e=$$6.$g.g(d);switch(e){case"\\":case"/":return false}var f=e.toString();if($$t.$ka.ac().i(f).i()){return false}c=c.o()}return true},i:function(a){if(a.endsWith("Z",0)==false){$$t.$ka.al("The date format was not correct.");return $$0.$s.now()}a=a.substr(0,a.length-1);try{var b=$.ig.Date.prototype.parseExact(a,"s",null);return $.ig.Date.prototype.toLocalTime(b)}catch(c){$$t.$ka.al("Error occurred while parsing the date in W3CDTF format: "+a);return $$0.$s.now()}},aa:function(){if($$t.$ka.z==null){$$t.$ka.z=new $$8.l(1,"%[0-9A-F]{2}",8|1)}return $$t.$ka.z},ac:function(){if($$t.$ka.ab==null){$$t.$ka.ab=new $$8.l(1,"[\\-\\._~0-9A-Z]",8|1)}return $$t.$ka.ab},ae:function(){if($$t.$ka.ad==null){$$t.$ka.ad=new $$8.l(1,"([:@\\-\\._~!$&'()*+,;=0-9A-Z]|(%[0-9A-F]{2}))*",8|1)}return $$t.$ka.ad},y:function(){if($$t.$ka.x==null){$$t.$ka.x=new $$8.l(1,"[^.]",8|1)}return $$t.$ka.x},w:function(){if($$t.$ka.v==null){$$t.$ka.v=new $$8.l(1,"\\w:",8)}return $$t.$ka.v},al:function(a){},$type:new $.ig.Type("PackageUtilities",$.ig.$ot)},true);$c("AlternateContentChoice:bg","Object",{_a:null,_b:null,init:function(a,b,c){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$t.$bg.init1.call(this,1,[b],c)},init1:function(a,b,c){$.ig.$op.init.call(this);this._a=c;this._b=b},$type:new $.ig.Type("AlternateContentChoice",$.ig.$ot)},true);$c("AttributeValue:bh","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break;case 2:this.init2.apply(this,arguments);break}return}$$0.$bh.init.call(this)},a:null,d:null,init1:function(a,b,c,d,e){$$0.$bh.init.call(this);this.a=new $$t.fr(1,b,c,d);this.d=e},init2:function(a,b,c){$$0.$bh.init.call(this);this.a=b;this.d=c},toString:function(){return this.a.toString()+'="'+this.d+'"'},e:function(a,b,c,d){this.a.i(a,b,c);this.d=d},b:function(){return this.a.c()},c:function(){if(this.a.g=="http://www.w3.org/2000/xmlns/"){if(this.a.f=="xmlns"||this.a.h=="xmlns"){return true}}return false},$type:new $.ig.Type("AttributeValue",$$0.$bh.$type)},true);$c("CT_GraphicalObject:bi","Object",{init:function(){$.ig.$op.init.call(this)},_a:null,$type:new $.ig.Type("CT_GraphicalObject",$.ig.$ot)},true);$c("IGraphicalObjectContent:em","Object",{$type:new $.ig.Type("IGraphicalObjectContent",null)},true);$c("AlternateGraphicalObjectContent:bj","Object",{init:function(){$.ig.$op.init.call(this)},_b:null,_a:null,accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitAlternateGraphicalObjectContent$i(this,b)},getStrictElementName:function(a){return $$t.$iu.ap},$type:new $.ig.Type("AlternateGraphicalObjectContent",$.ig.$ot,[$$t.$em.$type])},true);$c("CT_AdjustHandleList:bk","Object",{init:function(){this.a=new $$4.w($$t.$eo.$type,0);$.ig.$op.init.call(this)},a:null,b:function(){return this.a},$type:new $.ig.Type("CT_AdjustHandleList",$.ig.$ot)},true);$c("CT_AdjPoint2D:bl","Object",{init:function(){this._a=new $$t.f2;this._b=new $$t.f2;$.ig.$op.init.call(this)},_a:null,_b:null,$type:new $.ig.Type("CT_AdjPoint2D",$.ig.$ot)},true);$c("CT_Angle:bm","Object",{init:function(){this._a=new $$v.cc;$.ig.$op.init.call(this)},_a:null,$type:new $.ig.Type("CT_Angle",$.ig.$ot)},true);$c("CT_Blip:bn","Object",{init:function(){$.ig.$op.init.call(this)},_a:0,_b:null,_c:null,$type:new $.ig.Type("CT_Blip",$.ig.$ot)},true);$c("IEG_FillProperties:ea","Object",{$type:new $.ig.Type("IEG_FillProperties",null)},true);$c("CT_BlipFillProperties:bo","Object",{init:function(){$.ig.$op.init.call(this)},_a:null,_d:$m($$0.$be.$type,null),_c:null,_e:$m($$0.$aq.$type,null),_b:null,accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_BlipFillProperties$i(this,b)},$type:new $.ig.Type("CT_BlipFillProperties",$.ig.$ot,[$$t.$ea.$type])},true);$c("CT_Color:bp","Object",{init:function(){$.ig.$op.init.call(this)},_a:null,$type:new $.ig.Type("CT_Color",$.ig.$ot)},true);$c("CT_ComplementTransform:bq","Object",{init:function(){$.ig.$op.init.call(this)},$type:new $.ig.Type("CT_ComplementTransform",$.ig.$ot)},true);$c("CT_Connection:br","Object",{init:function(){$.ig.$op.init.call(this)},_a:0,_b:0,$type:new $.ig.Type("CT_Connection",$.ig.$ot)},true);$c("CT_ConnectionSite:bs","Object",{init:function(){this._b=new $$t.f1;$.ig.$op.init.call(this)},_a:null,_b:null,$type:new $.ig.Type("CT_ConnectionSite",$.ig.$ot)},true);$c("CT_ConnectionSiteList:bt","Object",{init:function(){this.a=new $$4.w($$t.$bs.$type,0);$.ig.$op.init.call(this)},a:null,b:function(){return this.a},$type:new $.ig.Type("CT_ConnectionSiteList",$.ig.$ot)},true);$c("ICT_ShapePropertiesOwner:er","Object",{$type:new $.ig.Type("ICT_ShapePropertiesOwner",null)},true);$c("ICT_ShapeStyleOwner:es","Object",{$type:new $.ig.Type("ICT_ShapeStyleOwner",null)},true);$c("CT_Connector:bu","Object",{init:function(){$.ig.$op.init.call(this)},_b:false,_c:null,_a:null,_spPr:null,spPr:function(a){if(arguments.length===1){this._spPr=a;return a}else{return this._spPr}},_style:null,style:function(a){if(arguments.length===1){this._style=a;return a}else{return this._style}},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_Connector$i(this,b)},getStrictElementName:function(a){return a._s().av},$type:new $.ig.Type("CT_Connector",$.ig.$ot,[$$t.$em.$type,$$t.$er.$type,$$t.$es.$type])},true);$c("CT_ConnectorLocking:bv","Object",{init:function(){$.ig.$op.init.call(this)},_f:false,_j:false,_i:false,_c:false,_g:false,_h:false,_e:false,_a:false,_b:false,_d:false,$type:new $.ig.Type("CT_ConnectorLocking",$.ig.$ot)},true);$c("CT_NonVisualBase:co","Object",{init:function(){$.ig.$op.init.call(this)},_a:null,$type:new $.ig.Type("CT_NonVisualBase",$.ig.$ot)},true);$c("CT_ConnectorNonVisual:bw","CT_NonVisualBase",{init:function(){$$t.$co.init.call(this)},_b:null,$type:new $.ig.Type("CT_ConnectorNonVisual",$$t.$co.$type)},true);$c("IEG_Geometry:ec","Object",{$type:new $.ig.Type("IEG_Geometry",null)},true);$c("CT_CustomGeometry2D:bx","Object",{init:function(){$.ig.$op.init.call(this)},_c:null,_d:null,_a:null,_b:null,_e:null,_f:null,accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_CustomGeometry2D$i(this,b)},$type:new $.ig.Type("CT_CustomGeometry2D",$.ig.$ot,[$$t.$ec.$type])},true);$c("CT_DashStop:by","Object",{init:function(){this._a=new $$t.ha;this._b=new $$t.ha;$.ig.$op.init.call(this)},_a:null,_b:null,$type:new $.ig.Type("CT_DashStop",$.ig.$ot)},true);$c("IEG_LineDashProperties:ee","Object",{$type:new $.ig.Type("IEG_LineDashProperties",null)},true);$c("CT_DashStopList:bz","Object",{init:function(){this.a=new $$4.w($$t.$by.$type,0);$.ig.$op.init.call(this)},a:null,b:function(){return this.a},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_DashStopList$i(this,b)},$type:new $.ig.Type("CT_DashStopList",$.ig.$ot,[$$t.$ee.$type])},true);$c("CT_EmbeddedWAVAudioFile:b0","Object",{init:function(){$.ig.$op.init.call(this);this._b=""},_a:null,_b:null,$type:new $.ig.Type("CT_EmbeddedWAVAudioFile",$.ig.$ot)},true);$c("CT_FixedPercentage:b1","Object",{init:function(){this._a=new $$t.gl;$.ig.$op.init.call(this)},_a:null,$type:new $.ig.Type("CT_FixedPercentage",$.ig.$ot)},true);$c("CT_FontReference:b2","Object",{init:function(){$.ig.$op.init.call(this)},_a:null,_b:0,$type:new $.ig.Type("CT_FontReference",$.ig.$ot)},true);$c("CT_GeomGuide:b3","Object",{init:function(){$.ig.$op.init.call(this)},_a:null,_b:null,$type:new $.ig.Type("CT_GeomGuide",$.ig.$ot)},true);$c("CT_GeomGuideList:b4","Object",{init:function(){this.a=new $$4.w($$t.$b3.$type,0);$.ig.$op.init.call(this)},a:null,b:function(){return this.a},$type:new $.ig.Type("CT_GeomGuideList",$.ig.$ot)},true);$c("CT_GeomRect:b5","Object",{init:function(){this._b=new $$t.f2;this._d=new $$t.f2;this._c=new $$t.f2;this._a=new $$t.f2;$.ig.$op.init.call(this)},_b:null,_d:null,_c:null,_a:null,$type:new $.ig.Type("CT_GeomRect",$.ig.$ot)},true);$c("IShapesOwner:et","Object",{$type:new $.ig.Type("IShapesOwner",null)},true);$c("CT_GraphicalObjectData:b6","Object",{init:function(){$.ig.$op.init.call(this)},a:null,b:function(a){if(arguments.length===1){this.a=a;return a}else{if(this.a==null){this.a=new $$4.w($$6.$u.$type.specialize(String,$.ig.$op.$type),0)}return this.a}},_c:null,addShape:function(a,b){this.b().add($$6.$w.a(String,$.ig.$op.$type,b.getStrictElementName(a),b))},$type:new $.ig.Type("CT_GraphicalObjectData",$.ig.$ot,[$$t.$et.$type])},true);$c("CT_GraphicalObjectFrame:b7","Object",{init:function(){$.ig.$op.init.call(this)},_d:false,_a:null,_e:null,_b:null,_c:null,accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_GraphicalObjectFrame$i(this,b)},getStrictElementName:function(a){return a._s().a3},$type:new $.ig.Type("CT_GraphicalObjectFrame",$.ig.$ot,[$$t.$em.$type])},true);$c("CT_GraphicalObjectFrameLocking:b8","Object",{init:function(){$.ig.$op.init.call(this)},_c:false,_b:false,_f:false,_a:false,_d:false,_e:false,$type:new $.ig.Type("CT_GraphicalObjectFrameLocking",$.ig.$ot)},true);$c("CT_GraphicalObjectFrameNonVisual:b9","CT_NonVisualBase",{init:function(){$$t.$co.init.call(this)},_b:null,$type:new $.ig.Type("CT_GraphicalObjectFrameNonVisual",$$t.$co.$type)},true);$c("CT_GrayscaleTransform:ca","Object",{init:function(){$.ig.$op.init.call(this)},$type:new $.ig.Type("CT_GrayscaleTransform",$.ig.$ot)},true);$c("CT_GroupFillProperties:cb","Object",{init:function(){$.ig.$op.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_GroupFillProperties$i(this,b)},$type:new $.ig.Type("CT_GroupFillProperties",$.ig.$ot,[$$t.$ea.$type])},true);$c("CT_GroupLocking:cc","Object",{init:function(){$.ig.$op.init.call(this)},_b:false,_g:false,_f:false,_e:false,_a:false,_c:false,_d:false,$type:new $.ig.Type("CT_GroupLocking",$.ig.$ot)},true);$c("CT_GroupShape:cd","Object",{init:function(){this.c=new $$4.w($$t.$em.$type,0);$.ig.$op.init.call(this)},_b:null,_a:null,c:null,d:function(){return this.c},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_GroupShape$i(this,b)},getStrictElementName:function(a){return a._s().a4},addShape:function(a,b){this.d().add(b)},$type:new $.ig.Type("CT_GroupShape",$.ig.$ot,[$$t.$em.$type,$$t.$et.$type])},true);$c("CT_GroupShapeNonVisual:ce","CT_NonVisualBase",{init:function(){$$t.$co.init.call(this)},_b:null,$type:new $.ig.Type("CT_GroupShapeNonVisual",$$t.$co.$type)},true);$c("CT_ShapePropertiesBase:dl","Object",{init:function(){$.ig.$op.init.call(this)},_b:$m($$t.$f3.$type,null),_a:null,$type:new $.ig.Type("CT_ShapePropertiesBase",$.ig.$ot)},true);$c("CT_GroupShapeProperties:cf","CT_ShapePropertiesBase",{init:function(){$$t.$dl.init.call(this)},_c:null,$type:new $.ig.Type("CT_GroupShapeProperties",$$t.$dl.$type)},true);$c("CT_Hyperlink:cg","Object",{init:function(){$.ig.$op.init.call(this);this._g="";this._e="";this._h="";this._i="";this._d=true},_e:null,_b:false,_c:false,_d:false,_f:null,_g:null,_a:null,_h:null,_i:null,$type:new $.ig.Type("CT_Hyperlink",$.ig.$ot)},true);$c("CT_InverseTransform:ch","Object",{init:function(){$.ig.$op.init.call(this)},$type:new $.ig.Type("CT_InverseTransform",$.ig.$ot)},true);$c("CT_LineEndProperties:ci","Object",{init:function(){$.ig.$op.init.call(this)},_a:$m($$t.$gw.$type,null),_b:$m($$t.$gy.$type,null),_c:$m($$t.$gx.$type,null),$type:new $.ig.Type("CT_LineEndProperties",$.ig.$ot)},true);$c("IEG_LineJoinProperties:ei","Object",{$type:new $.ig.Type("IEG_LineJoinProperties",null)},true);$c("CT_LineJoinBevel:cj","Object",{init:function(){$.ig.$op.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_LineJoinBevel$i(this,b)},$type:new $.ig.Type("CT_LineJoinBevel",$.ig.$ot,[$$t.$ei.$type])},true);$c("ST_PositivePercentage:ha","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}this.a=new $$t.g6;$$0.$bh.init.call(this)},a:null,init1:function(a,b){this.a=new $$t.g6;$$0.$bh.init.call(this);$$v.$aq.au($$t.$ha.$type,$$t.$g6.k(b),"value",0,1.7976931348623157e308);this.a=b},equals:function(a){var b=$m($$t.$ha.$type,$b($$t.$ha.$type,a));if($$t.$ha.j(b,$m($$t.$ha.$type,null))){return false}return $$t.$ha.g(this,b.getValueOrDefault())},getHashCode:function(){return this.a.getHashCode()},toString:function(){return this.s(1)},s:function(a){return this.a.p(a)},f:function(a,b){var c=$$t.$ha.r(a,b);if($$t.$ha.j(c,$m($$t.$ha.$type,null))){return c.getValueOrDefault()}throw $$v.$aq.m($$t.$ha.$type,a)},r:function(a,b){return $$t.$ha.q($$t.$g6.o(a,b))},g:function(a,b){return $$t.$g6.d(a.a,b.a)},h:function(a,b){if(!a.hasValue()){return!b.hasValue()}else if(!b.hasValue()){return false}return $$t.$ha.g(a.value(),b.value())},i:function(a,b){return!$$t.$ha.g(a,b)},j:function(a,b){if(!a.hasValue()){return b.hasValue()}else if(!b.hasValue()){return true}return $$t.$ha.i(a.value(),b.value())},d:function(a){return new $$t.ha(1,a)},q:function(a){if(!a.hasValue()){return $m($$t.$ha.$type,null)}return $m($$t.$ha.$type,$$t.$ha.d(a.value()))},b:function(a){return a.a},p:function(a){if(!a.hasValue()){return $m($$t.$g6.$type,null)}return $m($$t.$g6.$type,$$t.$ha.b(a.value()))},m:function(a){return $$t.$g6.k(a.a)},o:function(a){if(!a.hasValue()){return $m(Number,null)}return $m(Number,$$t.$ha.m(a.value()))},$type:new $.ig.Type("ST_PositivePercentage",$$0.$bh.$type)},true);$c("CT_LineJoinMiterProperties:ck","Object",{init:function(){$.ig.$op.init.call(this)},_a:$m($$t.$ha.$type,null),accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_LineJoinMiterProperties$i(this,b)},$type:new $.ig.Type("CT_LineJoinMiterProperties",$.ig.$ot,[$$t.$ei.$type])},true);$c("CT_LineJoinRound:cl","Object",{init:function(){$.ig.$op.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_LineJoinRound$i(this,b)},$type:new $.ig.Type("CT_LineJoinRound",$.ig.$ot,[$$t.$ei.$type])},true);$c("ST_LineWidth:gz","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}this.a=new $$t.gc;$$0.$bh.init.call(this)},a:null,init1:function(a,b){this.a=new $$t.gc;$$0.$bh.init.call(this);$$v.$aq.au($$t.$gz.$type,$$t.$gc.e(b),"value",0,20116800);this.a=b},equals:function(a){var b=$m($$t.$gz.$type,$b($$t.$gz.$type,a));if($$t.$gz.j(b,$m($$t.$gz.$type,null))){return false}return $$t.$gz.g(this,b.getValueOrDefault())},getHashCode:function(){return this.a.getHashCode()},toString:function(){return this.a.toString()},f:function(a){var b=$$t.$gz.t(a);if($$t.$gz.j(b,$m($$t.$gz.$type,null))){return b.getValueOrDefault()}throw $$v.$aq.m($$t.$gz.$type,a)},t:function(a){return $$t.$gz.s($$t.$gc.j(a))},g:function(a,b){return $$t.$gc.e(a.a)==$$t.$gc.e(b.a)},h:function(a,b){if(!a.hasValue()){return!b.hasValue()}else if(!b.hasValue()){return false}return $$t.$gz.g(a.value(),b.value())},i:function(a,b){return!$$t.$gz.g(a,b)},j:function(a,b){if(!a.hasValue()){return b.hasValue()}else if(!b.hasValue()){return true}return $$t.$gz.i(a.value(),b.value())},d:function(a){return new $$t.gz(1,a)},s:function(a){if(!a.hasValue()){return $m($$t.$gz.$type,null)}return $m($$t.$gz.$type,$$t.$gz.d(a.value()))},b:function(a){return a.a},r:function(a){if(!a.hasValue()){return $m($$t.$gc.$type,null)}return $m($$t.$gc.$type,$$t.$gz.b(a.value()))},m:function(a){return $$t.$gc.e(a.a)},q:function(a){if(!a.hasValue()){return $m($$0.$aw.$type,null)}return $m($$0.$aw.$type,$$t.$gz.m(a.value()))},$type:new $.ig.Type("ST_LineWidth",$$0.$bh.$type)},true);$c("CT_LineProperties:cm","Object",{init:function(){$.ig.$op.init.call(this)},_f:$m($$t.$g5.$type,null),_g:$m($$t.$gv.$type,null),_h:$m($$t.$f7.$type,null),_d:null,_a:null,_c:null,_e:null,_b:null,_i:$m($$t.$gz.$type,null),$type:new $.ig.Type("CT_LineProperties",$.ig.$ot)},true);$c("IEG_LineFillProperties:eg","Object",{$type:new $.ig.Type("IEG_LineFillProperties",null)},true);$c("CT_NoFillProperties:cn","Object",{init:function(){$.ig.$op.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_NoFillProperties$i(this,b)},accept$21:function(visitor,argument){return this._accept$21$i.apply(this,arguments)},_accept$21$i:function($tArg,$tResult,a,b){return a._visitCT_NoFillProperties$i(this,b)},$type:new $.ig.Type("CT_NoFillProperties",$.ig.$ot,[$$t.$ea.$type,$$t.$eg.$type])},true);$c("CT_NonVisualConnectorProperties:cp","Object",{init:function(){$.ig.$op.init.call(this)},_c:null,_a:null,_b:null,$type:new $.ig.Type("CT_NonVisualConnectorProperties",$.ig.$ot)},true);$c("CT_NonVisualDrawingProps:cq","Object",{init:function(){this._c=new $$t.gf;$.ig.$op.init.call(this)},_e:null,_d:false,_a:null,_b:null,_c:null,_f:null,_g:null,$type:new $.ig.Type("CT_NonVisualDrawingProps",$.ig.$ot)},true);$c("CT_NonVisualGraphicFrameProperties:cr","Object",{init:function(){$.ig.$op.init.call(this)},_a:null,$type:new $.ig.Type("CT_NonVisualGraphicFrameProperties",$.ig.$ot)},true);$c("CT_NonVisualGroupDrawingShapeProps:cs","Object",{init:function(){$.ig.$op.init.call(this)},_a:null,$type:new $.ig.Type("CT_NonVisualGroupDrawingShapeProps",$.ig.$ot)},true);$c("CT_NonVisualPictureProperties:ct","Object",{init:function(){$.ig.$op.init.call(this);this._b=true},_a:null,_b:false,$type:new $.ig.Type("CT_NonVisualPictureProperties",$.ig.$ot)},true);$c("CT_NonVisualDrawingShapeProps:cu","Object",{init:function(){$.ig.$op.init.call(this)},_a:null,_b:false,$type:new $.ig.Type("CT_NonVisualDrawingShapeProps",$.ig.$ot)},true);$c("CT_Path2D:cv","Object",{init:function(){this.a=new $$4.w($$t.$ep.$type,0);$.ig.$op.init.call(this)},a:null,b:function(){return this.a},_g:$m($$v.$b7.$type,null),_e:$m($$v.$b7.$type,null),_d:$m($$t.$g4.$type,null),_f:$m($$0.$aq.$type,null),_c:$m($$0.$aq.$type,null),$type:new $.ig.Type("CT_Path2D",$.ig.$ot)},true);$c("IPath2DCommand:ep","Object",{$type:new $.ig.Type("IPath2DCommand",null)},true);$c("CT_Path2DArcTo:cw","Object",{init:function(){this._d=new $$t.f2;this._c=new $$t.f2;this._a=new $$t.f1;this._b=new $$t.f1;$.ig.$op.init.call(this)},_d:null,_c:null,_a:null,_b:null,accept$2:function(visitor,argument){arguments[1]=arguments[1]!==void 0?arguments[1]:null;return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_Path2DArcTo$i(this,b)},$type:new $.ig.Type("CT_Path2DArcTo",$.ig.$ot,[$$t.$ep.$type])},true);$c("CT_Path2DClose:cx","Object",{init:function(){$.ig.$op.init.call(this)},accept$2:function(visitor,argument){arguments[1]=arguments[1]!==void 0?arguments[1]:null;return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_Path2DClose$i(this,b)},$type:new $.ig.Type("CT_Path2DClose",$.ig.$ot,[$$t.$ep.$type])},true);$c("CT_Path2DCubicBezierTo:cy","Object",{init:function(){$.ig.$op.init.call(this)},_a:null,_b:null,_c:null,accept$2:function(visitor,argument){arguments[1]=arguments[1]!==void 0?arguments[1]:null;return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_Path2DCubicBezierTo$i(this,b)},$type:new $.ig.Type("CT_Path2DCubicBezierTo",$.ig.$ot,[$$t.$ep.$type])},true);$c("CT_Path2DLineTo:cz","Object",{init:function(){$.ig.$op.init.call(this)
},_a:null,accept$2:function(visitor,argument){arguments[1]=arguments[1]!==void 0?arguments[1]:null;return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_Path2DLineTo$i(this,b)},$type:new $.ig.Type("CT_Path2DLineTo",$.ig.$ot,[$$t.$ep.$type])},true);$c("CT_Path2DList:c0","Object",{init:function(){this.a=new $$4.w($$t.$cv.$type,0);$.ig.$op.init.call(this)},a:null,b:function(){return this.a},$type:new $.ig.Type("CT_Path2DList",$.ig.$ot)},true);$c("CT_Path2DMoveTo:c1","Object",{init:function(){$.ig.$op.init.call(this)},_a:null,accept$2:function(visitor,argument){arguments[1]=arguments[1]!==void 0?arguments[1]:null;return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_Path2DMoveTo$i(this,b)},$type:new $.ig.Type("CT_Path2DMoveTo",$.ig.$ot,[$$t.$ep.$type])},true);$c("CT_Path2DQuadBezierTo:c2","Object",{init:function(){$.ig.$op.init.call(this)},_a:null,_b:null,accept$2:function(visitor,argument){arguments[1]=arguments[1]!==void 0?arguments[1]:null;return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_Path2DQuadBezierTo$i(this,b)},$type:new $.ig.Type("CT_Path2DQuadBezierTo",$.ig.$ot,[$$t.$ep.$type])},true);$c("CT_Percentage:c3","Object",{init:function(){this._a=new $$t.g6;$.ig.$op.init.call(this)},_a:null,$type:new $.ig.Type("CT_Percentage",$.ig.$ot)},true);$c("CT_Picture:c4","Object",{init:function(){$.ig.$op.init.call(this)},_a:null,_c:false,_d:null,_b:null,_spPr:null,spPr:function(a){if(arguments.length===1){this._spPr=a;return a}else{return this._spPr}},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_Picture$i(this,b)},getStrictElementName:function(a){return a._s().bs},$type:new $.ig.Type("CT_Picture",$.ig.$ot,[$$t.$em.$type,$$t.$er.$type])},true);$c("CT_PictureLocking:c5","Object",{init:function(){$.ig.$op.init.call(this)},_a:false,_b:false,_c:false,_d:false,_e:false,_f:false,_g:false,_h:false,_i:false,_j:false,_k:false,$type:new $.ig.Type("CT_PictureLocking",$.ig.$ot)},true);$c("CT_PictureNonVisual:c6","CT_NonVisualBase",{init:function(){$$t.$co.init.call(this)},_b:null,$type:new $.ig.Type("CT_PictureNonVisual",$$t.$co.$type)},true);$c("ST_GeomGuideName:gn","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},a:null,init1:function(a,b){$$0.$bh.init.call(this);this.a=b},$type:new $.ig.Type("ST_GeomGuideName",$$0.$bh.$type)},true);$c("ST_AdjCoordinate:f2","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break;case 2:this.init2.apply(this,arguments);break}return}$$0.$bh.init.call(this)},b:$m($$v.$cd.$type,null),c:$m($$t.$gn.$type,null),init1:function(a,b){$$0.$bh.init.call(this);this.b=$m($$v.$cd.$type,null);this.c=$m($$t.$gn.$type,new $$t.gn(1,b))},init2:function(a,b){$$0.$bh.init.call(this);this.b=$m($$v.$cd.$type,b);this.c=$m($$t.$gn.$type,null)},e:function(){return this.c},d:function(){return this.b},a:function(a){var b=$$v.$cd.s(a);if($l(b,null)){return new $$t.f2(2,b.value())}return new $$t.f2(1,a)},$type:new $.ig.Type("ST_AdjCoordinate",$$0.$bh.$type)},true);$c("ST_AdjAngle:f1","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break;case 2:this.init2.apply(this,arguments);break}return}$$0.$bh.init.call(this)},b:$m($$v.$cc.$type,null),c:$m($$t.$gn.$type,null),init1:function(a,b){$$0.$bh.init.call(this);this.b=$m($$v.$cc.$type,null);this.c=$m($$t.$gn.$type,new $$t.gn(1,b))},init2:function(a,b){$$0.$bh.init.call(this);this.b=$m($$v.$cc.$type,b);this.c=$m($$t.$gn.$type,null)},e:function(){return this.c},d:function(){return this.b},a:function(a){var b=$$v.$cc.k(a);if(b.hasValue()){return new $$t.f1(2,b.value())}return new $$t.f1(1,a)},$type:new $.ig.Type("ST_AdjAngle",$$0.$bh.$type)},true);$c("IAdjustHandle:eo","Object",{$type:new $.ig.Type("IAdjustHandle",null)},true);$c("CT_PolarAdjustHandle:c7","Object",{init:function(){$.ig.$op.init.call(this)},_a:null,_c:$m($$t.$gn.$type,null),_g:$m($$t.$f2.$type,null),_e:$m($$t.$f2.$type,null),_b:$m($$t.$gn.$type,null),_f:$m($$t.$f1.$type,null),_d:$m($$t.$f1.$type,null),$type:new $.ig.Type("CT_PolarAdjustHandle",$.ig.$ot,[$$t.$eo.$type])},true);$c("CT_PositiveFixedAngle:c8","Object",{init:function(){this._a=new $$t.g8;$.ig.$op.init.call(this)},_a:null,$type:new $.ig.Type("CT_PositiveFixedAngle",$.ig.$ot)},true);$c("CT_PositiveFixedPercentage:c9","Object",{init:function(){this._a=new $$t.g9;$.ig.$op.init.call(this)},_a:null,$type:new $.ig.Type("CT_PositiveFixedPercentage",$.ig.$ot)},true);$c("CT_PositivePercentage:da","Object",{init:function(){this._a=new $$t.ha;$.ig.$op.init.call(this)},_a:null,$type:new $.ig.Type("CT_PositivePercentage",$.ig.$ot)},true);$c("CT_PresetGeometry2D:db","Object",{init:function(){$.ig.$op.init.call(this)},_a:null,_b:0,accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_PresetGeometry2D$i(this,b)},$type:new $.ig.Type("CT_PresetGeometry2D",$.ig.$ot,[$$t.$ec.$type])},true);$c("CT_PresetLineDashProperties:dc","Object",{init:function(){$.ig.$op.init.call(this)},_a:$m($$t.$hc.$type,null),accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_PresetLineDashProperties$i(this,b)},$type:new $.ig.Type("CT_PresetLineDashProperties",$.ig.$ot,[$$t.$ee.$type])},true);$c("IEG_TextRun:ek","Object",{$type:new $.ig.Type("IEG_TextRun",null)},true);$c("CT_RegularTextRun:dd","Object",{init:function(){$.ig.$op.init.call(this)},_a:null,_b:null,accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_RegularTextRun$i(this,b)},$type:new $.ig.Type("CT_RegularTextRun",$.ig.$ot,[$$t.$ek.$type])},true);$c("CT_RelId:de","Object",{init:function(){$.ig.$op.init.call(this)},_a:null,$type:new $.ig.Type("CT_RelId",$.ig.$ot)},true);$c("CT_RelativeRect:df","Object",{init:function(){this._a=new $$t.g6;this._b=new $$t.g6;this._c=new $$t.g6;this._d=new $$t.g6;$.ig.$op.init.call(this)},_a:null,_b:null,_c:null,_d:null,e:function(){return $$t.$g6.d(this._a,$$t.$g6.a(0))||$$t.$g6.d(this._b,$$t.$g6.a(0))||$$t.$g6.d(this._c,$$t.$g6.a(0))||$$t.$g6.d(this._d,$$t.$g6.a(0))},$type:new $.ig.Type("CT_RelativeRect",$.ig.$ot)},true);$c("IEG_ColorChoice:d4","Object",{$type:new $.ig.Type("IEG_ColorChoice",null)},true);$c("EG_ColorChoice:d3","Object",{init:function(){this.a=new $$4.w($$t.$d6.$type,0);$.ig.$op.init.call(this)},accept$2:function(visitor,argument){arguments[1]=arguments[1]!==void 0?arguments[1]:null;return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){},a:null,b:function(){return this.a},$type:new $.ig.Type("EG_ColorChoice",$.ig.$ot,[$$t.$d4.$type])},true);$c("CT_SchemeColor:dg","EG_ColorChoice",{init:function(){$$t.$d3.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_SchemeColor$i(this,b)},_c:0,$type:new $.ig.Type("CT_SchemeColor",$$t.$d3.$type,[$$t.$d4.$type])},true);$c("CT_Shape:dh","Object",{init:function(){$.ig.$op.init.call(this)},_c:false,_d:false,_e:null,_f:null,_a:null,_spPr:null,spPr:function(a){if(arguments.length===1){this._spPr=a;return a}else{return this._spPr}},_style:null,style:function(a){if(arguments.length===1){this._style=a;return a}else{return this._style}},_b:null,accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_Shape$i(this,b)},getStrictElementName:function(a){return a._s().bw},$type:new $.ig.Type("CT_Shape",$.ig.$ot,[$$t.$em.$type,$$t.$er.$type,$$t.$es.$type])},true);$c("CT_ShapeLocking:di","Object",{init:function(){$.ig.$op.init.call(this)},_f:false,_j:false,_i:false,_c:false,_g:false,_h:false,_e:false,_a:false,_b:false,_d:false,_k:false,$type:new $.ig.Type("CT_ShapeLocking",$.ig.$ot)},true);$c("CT_ShapeNonVisual:dj","CT_NonVisualBase",{init:function(){$$t.$co.init.call(this)},_b:null,$type:new $.ig.Type("CT_ShapeNonVisual",$$t.$co.$type)},true);$c("CT_ShapeProperties:dk","CT_ShapePropertiesBase",{init:function(){$$t.$dl.init.call(this)},_e:null,_c:null,_d:null,$type:new $.ig.Type("CT_ShapeProperties",$$t.$dl.$type)},true);$c("CT_ShapeStyle:dm","Object",{init:function(){$.ig.$op.init.call(this)},_c:null,_b:null,_d:null,_a:null,$type:new $.ig.Type("CT_ShapeStyle",$.ig.$ot)},true);$c("CT_Slicer:dn","Object",{init:function(){$.ig.$op.init.call(this)},_a:null,$type:new $.ig.Type("CT_Slicer",$.ig.$ot)},true);$c("CT_SolidFillProperties:dp","Object",{init:function(){$.ig.$op.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_SolidFillProperties$i(this,b)},accept$21:function(visitor,argument){return this._accept$21$i.apply(this,arguments)},_accept$21$i:function($tArg,$tResult,a,b){return a._visitCT_SolidFillProperties$i(this,b)},_a:null,$type:new $.ig.Type("CT_SolidFillProperties",$.ig.$ot,[$$t.$ea.$type,$$t.$eg.$type])},true);$c("CT_SRgbColor:dq","EG_ColorChoice",{init:function(){this._c=new $$t.gq;$$t.$d3.init.call(this)},accept$2:function(visitor,argument){arguments[1]=arguments[1]!==void 0?arguments[1]:null;return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_SRgbColor$i(this,b)},_c:null,$type:new $.ig.Type("CT_SRgbColor",$$t.$d3.$type,[$$t.$d4.$type])},true);$c("IEG_FillModeProperties:d8","Object",{$type:new $.ig.Type("IEG_FillModeProperties",null)},true);$c("CT_StretchInfoProperties:dr","Object",{init:function(){$.ig.$op.init.call(this)},_a:null,accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_StretchInfoProperties$i(this,b)},$type:new $.ig.Type("CT_StretchInfoProperties",$.ig.$ot,[$$t.$d8.$type])},true);$c("CT_StyleMatrixReference:ds","Object",{init:function(){$.ig.$op.init.call(this)},_a:null,_b:0,$type:new $.ig.Type("CT_StyleMatrixReference",$.ig.$ot)},true);$c("CT_SysColor:dt","EG_ColorChoice",{init:function(){this._c=new $$t.gq;$$t.$d3.init.call(this)},accept$2:function(visitor,argument){arguments[1]=arguments[1]!==void 0?arguments[1]:null;return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_SysColor$i(this,b)},_c:null,_d:0,$type:new $.ig.Type("CT_SysColor",$$t.$d3.$type,[$$t.$d4.$type])},true);$c("CT_TextBody:du","Object",{init:function(){this.c=new $$4.w($$t.$dz.$type,0);$.ig.$op.init.call(this)},_a:null,_b:null,c:null,d:function(){return this.c},$type:new $.ig.Type("CT_TextBody",$.ig.$ot)},true);$c("ST_Coordinate32Unqualified:gc","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},d:0,init1:function(a,b){$$0.$bh.init.call(this);this.d=b},g:function(){return this.d},c:function(a){return $$t.$gc.a($aj(a,7,$$0.$cg.invariantCulture()))},j:function(a){var b;if(function(){var c=$ag(a,7,$$0.$cg.invariantCulture(),b);b=c.p3;return c.ret}()){return $m($$t.$gc.$type,$$t.$gc.a(b))}return $m($$t.$gc.$type,null)},toString:function(){return this.d.toString()},e:function(a){return a.d},h:function(a){if(!a.hasValue()){return $m($$0.$aw.$type,null)}return $m($$0.$aw.$type,$$t.$gc.e(a.value()))},a:function(a){return new $$t.gc(1,a)},i:function(a){if(!a.hasValue()){return $m($$t.$gc.$type,null)}return $m($$t.$gc.$type,$$t.$gc.a(a.value()))},$type:new $.ig.Type("ST_Coordinate32Unqualified",$$0.$bh.$type)},true);$c("ST_Coordinate32:gb","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break;case 2:this.init2.apply(this,arguments);break}return}$$0.$bh.init.call(this)},k:$m($$t.$gc.$type,null),l:$m($$v.$cg.$type,null),init1:function(a,b){$$0.$bh.init.call(this);this.k=$m($$t.$gc.$type,b);this.l=$m($$v.$cg.$type,null)},init2:function(a,b){$$0.$bh.init.call(this);this.k=$m($$t.$gc.$type,null);this.l=$m($$v.$cg.$type,b)},j:function(){if($l(this.k,null)){return this.k.value().g()}if($$v.$cg.f(this.l,$m($$v.$cg.$type,null))){return this.l.value().m()}return 0},g:function(a){var b=$$t.$gb.q(a);if($l(b,null)){return b.getValueOrDefault()}throw $$v.$aq.m($$t.$gb.$type,a)},q:function(a){var b=$$t.$gc.j(a);if($l(b,null)){return $m($$t.$gb.$type,$$t.$gb.b(b.getValueOrDefault()))}var c=$$v.$cg.o(a);if($$v.$cg.f(c,$m($$v.$cg.$type,null))){return $m($$t.$gb.$type,$$t.$gb.c(c.getValueOrDefault()))}return $m($$t.$gb.$type,null)},toString:function(){if($l(this.k,null)){return this.k.getValueOrDefault().toString()}if($$v.$cg.f(this.l,$m($$v.$cg.$type,null))){return this.l.getValueOrDefault().toString()}return String.empty()},a:function(a){return new $$t.gb(1,$$t.$gc.a(a))},n:function(a){if(!a.hasValue()){return $m($$t.$gb.$type,null)}return $m($$t.$gb.$type,$$t.$gb.a(a.value()))},b:function(a){return new $$t.gb(1,a)},o:function(a){if(!a.hasValue()){return $m($$t.$gb.$type,null)}return $m($$t.$gb.$type,$$t.$gb.b(a.value()))},h:function(a){return a.k.value()},m:function(a){if(!a.hasValue()){return $m($$t.$gc.$type,null)}return $m($$t.$gc.$type,$$t.$gb.h(a.value()))},c:function(a){return new $$t.gb(2,a)},p:function(a){if(!a.hasValue()){return $m($$t.$gb.$type,null)}return $m($$t.$gb.$type,$$t.$gb.c(a.value()))},$type:new $.ig.Type("ST_Coordinate32",$$0.$bh.$type)},true);$c("CT_TextBodyProperties:dv","CT_TextBodyPropertiesBase",{init:function(){$$v.$b9.init.call(this)},_d:$m($$t.$hr.$type,null),_e:$m($$0.$aq.$type,null),_f:$m($$t.$gb.$type,null),_g:$m($$0.$aq.$type,null),_h:$m($$0.$aq.$type,null),_i:$m($$0.$aq.$type,null),_j:$m($$t.$gb.$type,null),_k:$m($$0.$aw.$type,null),_l:$m($$0.$aq.$type,null),_m:$m($$t.$gb.$type,null),_n:$m($$0.$aw.$type,null),_o:$m($$0.$aw.$type,null),_p:$m($$t.$hv.$type,null),_c:false,_q:$m($$t.$h4.$type,null),_r:$m($$t.$h5.$type,null),_s:$m($$t.$gb.$type,null),_t:$m($$t.$h3.$type,null),b:function(a){var b=null;if(a!=null){b=$b($$t.$dv.$type,a);if(b==null){b=new $$t.dv;b._a=a._a}}return b||new $$t.dv},$type:new $.ig.Type("CT_TextBodyProperties",$$v.$b9.$type)},true);$c("ST_TextPointUnqualified:h0","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},d:0,init1:function(a,b){$$0.$bh.init.call(this);$$v.$aq.au($$t.$h0.$type,b,"value",-4e5,4e5);this.d=b},c:function(a){return $$t.$h0.a($aj(a,7,$$0.$cg.invariantCulture()))},i:function(a){var b;if(function(){var c=$ag(a,7,$$0.$cg.invariantCulture(),b);b=c.p3;return c.ret}()){return $m($$t.$h0.$type,$$t.$h0.a(b))}return $m($$t.$h0.$type,null)},toString:function(){return this.d.toString()},e:function(a){return a.d},g:function(a){if(!a.hasValue()){return $m($$0.$aw.$type,null)}return $m($$0.$aw.$type,$$t.$h0.e(a.value()))},a:function(a){return new $$t.h0(1,a)},h:function(a){if(!a.hasValue()){return $m($$t.$h0.$type,null)}return $m($$t.$h0.$type,$$t.$h0.a(a.value()))},$type:new $.ig.Type("ST_TextPointUnqualified",$$0.$bh.$type)},true);$c("ST_TextPoint:hz","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break;case 2:this.init2.apply(this,arguments);break}return}$$0.$bh.init.call(this)},b:$m($$t.$h0.$type,null),c:$m($$v.$cg.$type,null),init1:function(a,b){$$0.$bh.init.call(this);this.b=$m($$t.$h0.$type,b);this.c=$m($$v.$cg.$type,null)},init2:function(a,b){$$0.$bh.init.call(this);this.b=$m($$t.$h0.$type,null);this.c=$m($$v.$cg.$type,b)},toString:function(){if($l(this.b,null)){return this.b.toString()}if($$v.$cg.f(this.c,$m($$v.$cg.$type,null))){return this.c.toString()}return String.empty()},a:function(a){var b=$$t.$h0.i(a);if($l(b,null)){return new $$t.hz(1,b.value())}var c=$$v.$cg.o(a);if($$v.$cg.f(c,$m($$v.$cg.$type,null))){return new $$t.hz(2,c.value())}throw $$v.$aq.m($$t.$hz.$type,a)},$type:new $.ig.Type("ST_TextPoint",$$0.$bh.$type)},true);$c("ST_Percentage:g6","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},j:0,init1:function(a,b){$$0.$bh.init.call(this);this.j=b},equals:function(a){var b=$m($$t.$g6.$type,$b($$t.$g6.$type,a));if($$t.$g6.g(b,$m($$t.$g6.$type,null))){return false}return $$t.$g6.d(this,b.getValueOrDefault())},getHashCode:function(){return this.j},toString:function(){return this.p(1)},p:function(a){var t1=a;L0:while(true){switch(t1){case 0:return $.ig.truncate($$v.$aq.i(this.j*1e3)).toString();case 1:return $ae(this.j,$$0.$cg.invariantCulture())+"%";default:t1=0;continue L0}break}},c:function(a,b){var c=$$t.$g6.o(a,b);if($$t.$g6.g(c,$m($$t.$g6.$type,null))){return c.getValueOrDefault()}throw $$v.$aq.m($$t.$g6.$type,a)},o:function(a,b){if(String.isNullOrEmpty(a)){return $m($$t.$g6.$type,null)}var t1=b;L0:while(true){switch(t1){case 0:{if(a.charAt(a.length-1)=="%"){t1=1;continue L0}var c;if(function(){var d=$ag(a,7,$$0.$cg.invariantCulture(),c);c=d.p3;return d.ret}()==false){return $m($$t.$g6.$type,null)}return $m($$t.$g6.$type,new $$t.g6(1,c/1e3))}case 1:{if(a.charAt(a.length-1)!="%"){t1=0;continue L0}var d;if(function(){var e=$al(a.substr(0,a.length-1),$$0.$ce.floatNumber|64,$$0.$cg.invariantCulture(),d);d=e.p3;return e.ret}()==false){return $m($$t.$g6.$type,null)}return $m($$t.$g6.$type,$$t.$g6.a(d))}default:return $m($$t.$g6.$type,null)}break}},d:function(a,b){return a.j==b.j},e:function(a,b){if(!a.hasValue()){return!b.hasValue()}else if(!b.hasValue()){return false}return $$t.$g6.d(a.value(),b.value())},f:function(a,b){return!$$t.$g6.d(a,b)},g:function(a,b){if(!a.hasValue()){return b.hasValue()}else if(!b.hasValue()){return true}return $$t.$g6.f(a.value(),b.value())},a:function(a){return new $$t.g6(1,a)},n:function(a){if(!a.hasValue()){return $m($$t.$g6.$type,null)}return $m($$t.$g6.$type,$$t.$g6.a(a.value()))},k:function(a){return a.j},m:function(a){if(!a.hasValue()){return $m(Number,null)}return $m(Number,$$t.$g6.k(a.value()))},$type:new $.ig.Type("ST_Percentage",$$0.$bh.$type)},true);$c("CT_TextCharacterProperties:dw","Object",{init:function(){$.ig.$op.init.call(this)},cloneShallow:function(){return this.memberwiseClone()},_a:null,_f:null,_e:null,_d:null,_c:null,_o:$m($$0.$aq.$type,null),_x:null,_v:null,_t:$m($$0.$aw.$type,null),_j:$m($$0.$aq.$type,null),_m:$m($$0.$aq.$type,null),_u:$m($$t.$h2.$type,null),_s:$m($$t.$h1.$type,null),_n:$m($$0.$aw.$type,null),_l:$m($$t.$hs.$type,null),_r:$m($$t.$hz.$type,null),_q:$m($$0.$aq.$type,null),_k:$m($$t.$g6.$type,null),_p:$m($$0.$aq.$type,null),_g:false,_h:false,_i:false,_y:0,_w:null,$type:new $.ig.Type("CT_TextCharacterProperties",$.ig.$ot,[$$v.$ar.$type])},true);$c("CT_TextFont:dx","Object",{init:function(){$.ig.$op.init.call(this)},_d:null,_a:null,_b:$m($$0.$a6.$type,null),_c:0,$type:new $.ig.Type("CT_TextFont",$.ig.$ot)},true);$c("CT_TextListStyle:dy","Object",{init:function(){$.ig.$op.init.call(this)},$type:new $.ig.Type("CT_TextListStyle",$.ig.$ot)},true);$c("CT_TextParagraph:dz","Object",{init:function(){this.b=new $$4.w($$t.$ek.$type,0);$.ig.$op.init.call(this)},_a:null,b:null,c:function(){return this.b},$type:new $.ig.Type("CT_TextParagraph",$.ig.$ot)},true);$c("ST_TextMargin:hy","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},d:0,init1:function(a,b){$$0.$bh.init.call(this);$$v.$aq.au($$t.$hy.$type,b,"value",0,51206400);this.d=b},c:function(a){return $$t.$hy.a($aj(a,7,$$0.$cg.invariantCulture()))},i:function(a){var b;if(function(){var c=$ag(a,7,$$0.$cg.invariantCulture(),b);b=c.p3;return c.ret}()){return $m($$t.$hy.$type,$$t.$hy.a(b))}return $m($$t.$hy.$type,null)},toString:function(){return this.d.toString()},e:function(a){return a.d},g:function(a){if(!a.hasValue()){return $m($$0.$aw.$type,null)}return $m($$0.$aw.$type,$$t.$hy.e(a.value()))},a:function(a){return new $$t.hy(1,a)},h:function(a){if(!a.hasValue()){return $m($$t.$hy.$type,null)}return $m($$t.$hy.$type,$$t.$hy.a(a.value()))},$type:new $.ig.Type("ST_TextMargin",$$0.$bh.$type)},true);$c("ST_TextIndentLevelType:hx","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},d:0,init1:function(a,b){$$0.$bh.init.call(this);$$v.$aq.au($$t.$hx.$type,b,"value",0,8);this.d=b},c:function(a){return $$t.$hx.a($aj(a,7,$$0.$cg.invariantCulture()))},i:function(a){var b;if(function(){var c=$ag(a,7,$$0.$cg.invariantCulture(),b);b=c.p3;return c.ret}()){return $m($$t.$hx.$type,$$t.$hx.a(b))}return $m($$t.$hx.$type,null)},toString:function(){return this.d.toString()},e:function(a){return a.d},g:function(a){if(!a.hasValue()){return $m($$0.$aw.$type,null)}return $m($$0.$aw.$type,$$t.$hx.e(a.value()))},a:function(a){return new $$t.hx(1,a)},h:function(a){if(!a.hasValue()){return $m($$t.$hx.$type,null)}return $m($$t.$hx.$type,$$t.$hx.a(a.value()))},$type:new $.ig.Type("ST_TextIndentLevelType",$$0.$bh.$type)},true);$c("ST_TextIndent:hw","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},d:0,init1:function(a,b){$$0.$bh.init.call(this);$$v.$aq.au($$t.$hw.$type,b,"value",-51206400,51206400);this.d=b},c:function(a){return $$t.$hw.a($aj(a,7,$$0.$cg.invariantCulture()))},i:function(a){var b;if(function(){var c=$ag(a,7,$$0.$cg.invariantCulture(),b);b=c.p3;return c.ret}()){return $m($$t.$hw.$type,$$t.$hw.a(b))}return $m($$t.$hw.$type,null)},toString:function(){return this.d.toString()},e:function(a){return a.d},g:function(a){if(!a.hasValue()){return $m($$0.$aw.$type,null)}return $m($$0.$aw.$type,$$t.$hw.e(a.value()))},a:function(a){return new $$t.hw(1,a)},h:function(a){if(!a.hasValue()){return $m($$t.$hw.$type,null)}return $m($$t.$hw.$type,$$t.$hw.a(a.value()))},$type:new $.ig.Type("ST_TextIndent",$$0.$bh.$type)},true);$c("CT_TextParagraphProperties:d0","Object",{init:function(){$.ig.$op.init.call(this)},_i:$m($$t.$hy.$type,null),_j:$m($$t.$hy.$type,null),_h:$m($$t.$hx.$type,null),_f:$m($$t.$hw.$type,null),_a:$m($$t.$hq.$type,null),_b:$m($$t.$gb.$type,null),_k:$m($$0.$aq.$type,null),_c:$m($$0.$aq.$type,null),_d:$m($$t.$ht.$type,null),_g:$m($$0.$aq.$type,null),_e:$m($$0.$aq.$type,null),$type:new $.ig.Type("CT_TextParagraphProperties",$.ig.$ot)},true);$c("CT_TileInfoProperties:d1","Object",{init:function(){$.ig.$op.init.call(this)},_a:$m($$t.$he.$type,null),_b:$m($$t.$h6.$type,null),_c:$m($$t.$g6.$type,null),_d:$m($$t.$g6.$type,null),_e:$m($$v.$cd.$type,null),_f:$m($$v.$cd.$type,null),accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitCT_TileInfoProperties$i(this,b)},$type:new $.ig.Type("CT_TileInfoProperties",$.ig.$ot,[$$t.$d8.$type])},true);$c("CT_XYAdjustHandle:d2","Object",{init:function(){$.ig.$op.init.call(this)},_a:null,_b:$m($$t.$gn.$type,null),_f:$m($$t.$f2.$type,null),_d:$m($$t.$f2.$type,null),_c:$m($$t.$gn.$type,null),_g:$m($$t.$f2.$type,null),_e:$m($$t.$f2.$type,null),$type:new $.ig.Type("CT_XYAdjustHandle",$.ig.$ot,[$$t.$eo.$type])},true);$c("IEG_ColorChoiceVisitor$2:d5","Object",{$type:new $.ig.Type("IEG_ColorChoiceVisitor$2",null)},true);$c("IEG_ColorTransform:d6","Object",{$type:new $.ig.Type("IEG_ColorTransform",null)},true);$c("IEG_ColorTransformVisitor$2:d7","Object",{$type:new $.ig.Type("IEG_ColorTransformVisitor$2",null)},true);$c("IEG_FillModePropertiesVisitor$2:d9","Object",{$type:new $.ig.Type("IEG_FillModePropertiesVisitor$2",null)},true);$c("IEG_FillPropertiesVisitor$2:eb","Object",{$type:new $.ig.Type("IEG_FillPropertiesVisitor$2",null)},true);$c("IEG_GeometryVisitor$2:ed","Object",{$type:new $.ig.Type("IEG_GeometryVisitor$2",null)},true);$c("IEG_LineDashPropertiesVisitor$2:ef","Object",{$type:new $.ig.Type("IEG_LineDashPropertiesVisitor$2",null)},true);$c("IEG_LineFillPropertiesVisitor$2:eh","Object",{$type:new $.ig.Type("IEG_LineFillPropertiesVisitor$2",null)},true);$c("IEG_LineJoinPropertiesVisitor$2:ej","Object",{$type:new $.ig.Type("IEG_LineJoinPropertiesVisitor$2",null)},true);$c("IEG_TextRunVisitor$2:el","Object",{$type:new $.ig.Type("IEG_TextRunVisitor$2",null)},true);$c("IGraphicalObjectContentVisitor$2:en","Object",{$type:new $.ig.Type("IGraphicalObjectContentVisitor$2",null)},true);$c("IPath2DCommandVisitor$2:eq","Object",{$type:new $.ig.Type("IPath2DCommandVisitor$2",null)},true);$c("ColorTransform_Alpha:eu","CT_PositiveFixedPercentage",{init:function(){$$t.$c9.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_Alpha$i(this,b)},$type:new $.ig.Type("ColorTransform_Alpha",$$t.$c9.$type,[$$t.$d6.$type])},true);$c("ColorTransform_AlphaOff:ev","CT_FixedPercentage",{init:function(){$$t.$b1.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_AlphaOff$i(this,b)},$type:new $.ig.Type("ColorTransform_AlphaOff",$$t.$b1.$type,[$$t.$d6.$type])},true);$c("ColorTransform_AlphaMod:ew","CT_PositivePercentage",{init:function(){$$t.$da.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_AlphaMod$i(this,b)},$type:new $.ig.Type("ColorTransform_AlphaMod",$$t.$da.$type,[$$t.$d6.$type])},true);$c("ColorTransform_Blue:ex","CT_Percentage",{init:function(){$$t.$c3.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_Blue$i(this,b)},$type:new $.ig.Type("ColorTransform_Blue",$$t.$c3.$type,[$$t.$d6.$type])},true);$c("ColorTransform_BlueOff:ey","CT_Percentage",{init:function(){$$t.$c3.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_BlueOff$i(this,b)},$type:new $.ig.Type("ColorTransform_BlueOff",$$t.$c3.$type,[$$t.$d6.$type])},true);$c("ColorTransform_BlueMod:ez","CT_Percentage",{init:function(){$$t.$c3.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_BlueMod$i(this,b)},$type:new $.ig.Type("ColorTransform_BlueMod",$$t.$c3.$type,[$$t.$d6.$type])},true);$c("ColorTransform_Comp:e0","CT_ComplementTransform",{init:function(){$$t.$bq.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_Comp$i(this,b)},$type:new $.ig.Type("ColorTransform_Comp",$$t.$bq.$type,[$$t.$d6.$type])},true);$c("ColorTransform_Gray:e1","CT_GrayscaleTransform",{init:function(){$$t.$ca.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_Gray$i(this,b)},$type:new $.ig.Type("ColorTransform_Gray",$$t.$ca.$type,[$$t.$d6.$type])},true);$c("ColorTransform_Green:e2","CT_Percentage",{init:function(){$$t.$c3.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_Green$i(this,b)},$type:new $.ig.Type("ColorTransform_Green",$$t.$c3.$type,[$$t.$d6.$type])},true);$c("ColorTransform_GreenOff:e3","CT_Percentage",{init:function(){$$t.$c3.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_GreenOff$i(this,b)},$type:new $.ig.Type("ColorTransform_GreenOff",$$t.$c3.$type,[$$t.$d6.$type])},true);$c("ColorTransform_GreenMod:e4","CT_Percentage",{init:function(){$$t.$c3.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_GreenMod$i(this,b)},$type:new $.ig.Type("ColorTransform_GreenMod",$$t.$c3.$type,[$$t.$d6.$type])},true);$c("ColorTransform_Hue:e5","CT_PositiveFixedAngle",{init:function(){$$t.$c8.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_Hue$i(this,b)},$type:new $.ig.Type("ColorTransform_Hue",$$t.$c8.$type,[$$t.$d6.$type])},true);$c("ColorTransform_HueOff:e6","CT_Angle",{init:function(){$$t.$bm.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_HueOff$i(this,b)},$type:new $.ig.Type("ColorTransform_HueOff",$$t.$bm.$type,[$$t.$d6.$type])},true);$c("ColorTransform_HueMod:e7","CT_PositivePercentage",{init:function(){$$t.$da.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_HueMod$i(this,b)},$type:new $.ig.Type("ColorTransform_HueMod",$$t.$da.$type,[$$t.$d6.$type])},true);$c("ColorTransform_Inv:e8","CT_InverseTransform",{init:function(){$$t.$ch.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_Inv$i(this,b)},$type:new $.ig.Type("ColorTransform_Inv",$$t.$ch.$type,[$$t.$d6.$type])},true);$c("ColorTransform_Lum:e9","CT_Percentage",{init:function(){$$t.$c3.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_Lum$i(this,b)},$type:new $.ig.Type("ColorTransform_Lum",$$t.$c3.$type,[$$t.$d6.$type])},true);$c("ColorTransform_LumOff:fa","CT_Percentage",{init:function(){$$t.$c3.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_LumOff$i(this,b)},$type:new $.ig.Type("ColorTransform_LumOff",$$t.$c3.$type,[$$t.$d6.$type])},true);$c("ColorTransform_LumMod:fb","CT_Percentage",{init:function(){$$t.$c3.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_LumMod$i(this,b)},$type:new $.ig.Type("ColorTransform_LumMod",$$t.$c3.$type,[$$t.$d6.$type])},true);$c("ColorTransform_Red:fc","CT_Percentage",{init:function(){$$t.$c3.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_Red$i(this,b)},$type:new $.ig.Type("ColorTransform_Red",$$t.$c3.$type,[$$t.$d6.$type])},true);$c("ColorTransform_RedOff:fd","CT_Percentage",{init:function(){$$t.$c3.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_RedOff$i(this,b)},$type:new $.ig.Type("ColorTransform_RedOff",$$t.$c3.$type,[$$t.$d6.$type])},true);$c("ColorTransform_RedMod:fe","CT_Percentage",{init:function(){$$t.$c3.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_RedMod$i(this,b)},$type:new $.ig.Type("ColorTransform_RedMod",$$t.$c3.$type,[$$t.$d6.$type])},true);$c("ColorTransform_Sat:ff","CT_Percentage",{init:function(){$$t.$c3.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_Sat$i(this,b)
},$type:new $.ig.Type("ColorTransform_Sat",$$t.$c3.$type,[$$t.$d6.$type])},true);$c("ColorTransform_SatOff:fg","CT_Percentage",{init:function(){$$t.$c3.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_SatOff$i(this,b)},$type:new $.ig.Type("ColorTransform_SatOff",$$t.$c3.$type,[$$t.$d6.$type])},true);$c("ColorTransform_SatMod:fh","CT_Percentage",{init:function(){$$t.$c3.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_SatMod$i(this,b)},$type:new $.ig.Type("ColorTransform_SatMod",$$t.$c3.$type,[$$t.$d6.$type])},true);$c("ColorTransform_Shade:fi","CT_PositiveFixedPercentage",{init:function(){$$t.$c9.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_Shade$i(this,b)},$type:new $.ig.Type("ColorTransform_Shade",$$t.$c9.$type,[$$t.$d6.$type])},true);$c("ColorTransform_Tint:fj","CT_PositiveFixedPercentage",{init:function(){$$t.$c9.init.call(this)},accept$2:function(visitor,argument){return this._accept$2$i.apply(this,arguments)},_accept$2$i:function($tArg,$tResult,a,b){return a._visitColorTransform_Tint$i(this,b)},$type:new $.ig.Type("ColorTransform_Tint",$$t.$c9.$type,[$$t.$d6.$type])},true);$c("ElementLoadCallbacks:fk","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},b:null,a:null,init1:function(a,b,c){$$0.$bh.init.call(this);this.b=b;this.a=c},c:function(){return this.b==null&&this.a==null},$type:new $.ig.Type("ElementLoadCallbacks",$$0.$bh.$type)},true);$c("OfficeDocumentManager:fp","Object",{_c:null,_ao:$m($$t.$f8.$type,null),_aa:false,_ai:null,_ak:null,_af:null,_al:null,_ap:null,_ag:null,_ah:null,_x:null,_a:null,_an:null,_h:null,_i:null,init:function(a,b,c,d){$.ig.$op.init.call(this);this._ai=new $$4.p(String,0);this._ak=new $$4.z($$v.$az.$type);this._af=new $$4.g(String,$.ig.$op.$type,0);this._al=new $$4.z($$t.$fq.$type);this._al.push(new $$t.fq);this._ap={};this._ag=new $$4.g(String,$$t.$jo.$type,0);this._ah=new $$4.g(String,$$t.$jo.$type,0);this._ao=d;this._aa=c;this._an=b;if(a!=null&&this._an!=null){this._a=a.open(this._an,this._aa?3:2)}},dispose:function(){this.disposeCore(true)},_aw:function(a,b){return this._ax(a,b.o(this._y()))},_ax:function(a,b){return this._ay(a,b,0,null)},_av:function(a,b){return this._ay(a,b,1,null)},_au:function(a,b){var c;if(function(){var d=$$v.$ap.a(a,c);c=d.p1;return d.ret}()){return this._av(c,b)}return this._ay(null,b,1,a)},_j:function(a,b,c){var d=a.n(this._u());if(a.g()){d=this._a2(d,a.h()==false,false)}return this._k(a,d,b,c)},_k:function(a,b,c,d){var $self=this;var e=$$v.$ap.b(b);var f;if(d!=null&&this._ad(d)){f=d;this._a9(e,a.o(this._y()),0,f,null)}else{f=this._ay(e,a.o(this._y()),0,null)}var g=this._c;return $$v.$o.g($$6.$u.$type.specialize($$6.$x.$type,String),$$v.$h.h(function(){if(g!=null){$self._ak.push(g)}var h=$self._a.createPart(e,a.m());$self._c=h;$self._al.push(new $$t.fq);return $$v.$o.a($$v.$h.n($$0.$dg.$type,h.getStream(2,2),function(i){var j=a.e($self,i);return j.b(c)}),function(){$self._al.pop();$self._af.add(b,c)},0)},function(){if(g!=null){$self._ak.pop()}$self._c=g}),function(){return $$6.$w.a($$6.$x.$type,String,e,f)},0)},_l:function(a,b,c,d){if(b==null){return null}var e=this._v(a);if(e==null){return null}return this._k(e,b,c,d)},_a1:function(){if(this._an==null){return null}return $$v.$aq.x(this._an)},_t:function(a){return this._ap[a]||null},_e:function(a){return this._b().getPart(a)},_aq:function(a){return this._as(a.uri().toString())},_ar:function(a){var b=$$t.$ka.ak(a).originalString();return this._as(b)},_a8:function(a){var c=this._af.getEnumerator();while(c.moveNext()){var b=c.current();if($.ig.$op.equalsStatic(b.value(),a)){return $$v.$ap.b(b.key())}}return null},_at:function(a){var b=this._g(a);if(b==null){return null}if(b.targetMode()==1){if($b($$v.$a3.$type,b)!==null){return b.targetString()}return b.targetUri()}return this._ar(b)},_g:function(a){return this._c!=null?this._c.getRelationship(a):this._a.getRelationship(a)},_f:function(a){var c=this._aj().getEnumerator();while(c.moveNext()){var b=c.current();if(this._ar(b)==a){return b}}return null},_a3:function(a,b){var c=a;var d=c==0?1:0;var f=this._ah.getEnumerator();while(f.moveNext()){var e=f.current();var g=e.value().o(d);var h=e.value().o(c);if(g==b||b==h){return h}}return null},_bc:function(){this._bf($$t.$i3.an);this._bf($$t.$i2.an);this._bf($$t.$ii.an);this._bf($$t.$ij.an);this._bf($$t.$ik.an);this._bf($$t.$il.an);this._bf($$t.$im.an);this._bf($$t.$io.an);this._bf($$t.$ip.an);this._bf($$t.$iq.an);this._bf($$t.$is.an);this._bf($$t.$iu.an);this._bf($$t.$iv.an);this._bf($$t.$iz.an);this._bf($$t.$i0.an);this._bf($$t.$i1.an);this._bf($$t.$i6.an);this._bf($$t.$it.an);var a=this._s();if(a!=null){this._bf(a)}if($j(this._ao,null)){this._ao=$m($$t.$f8.$type,this._z())}},_ac:function(a){return this._ap[a]!=null},_m:function(){this._bc();return this._n()},_be:function(){},_a7:function(a){var b=this._t(a);if(b!=null){a=b.i(1)}return a},_q:function(){var $self=this;this._bc();return $$v.$o.c($$v.$o.c(this._r(),function(){return $$v.$h.g($self._h!=null,function(){return $self._j($$t.$jj.a3,null,null)},null)},0),function(){return $$v.$h.g($self._i!=null,function(){return $self._j($$t.$jk.a3,null,null)},null)},0)},_bi:function(a){this._ao=$m($$t.$f8.$type,a)},disposeCore:function(a){if(this._a!=null){this._a.dispose();this._a=null}},_z:function(){},_n:function(){var $self=this;return $$v.$o.f($$0.$aq.$type,this._p(null,null,this._a.getRelationships(),false),function(a){var b=$$v.$o.m($$0.$aq.$type,a);return $$v.$h.g($self._x!=null&&$self.__ae==false,function(){var c=$self._a2($self._x.n($self._u()),false,true);var d=null;return $$v.$h.g($self._ai.contains(c)==false&&function(){var e=$$6.$x.tryCreate(c,2,d);d=e.p2;return e.ret}()&&$self._a.partExists(d),function(){return $self._o($self._a.getPart(d),null)},null)},null)},0)},_bd:function(a){this._be()},_bf:function(a){this._ap[a.i(1)]=a;this._ap[a.i(0)]=a},_bg:function(a,b){if(b){this._ag.item(a.m(),a)}this._ah.item(a.o(this._y()),a);var c=$b($$t.$js.$type,a);if(c!=null){this._x=c}},_r:function(){},_ay:function(a,b,c,d){var e;var f=this._al.peek();e=$$t.$fp._az(f.b());this._a9(a,b,c,e,d);return e},_a9:function(a,b,c,d,e){this._al.peek().c();var f;if(c==0){if(this._c==null){var g=new $$6.x(1,"/".toString(),0);f=$$t.$ka.ai(g,a)}else{f=$$t.$ka.ai(this._c.uri(),a)}}else{if(a==null&&e!=null){var h=$b($$v.$a0.$type,this._c);if(h!=null){h.createExternalRelationship(e,b,d);return}}f=a}if(this._c==null){this._a.createRelationship(f,c,b,d)}else{this._c.createRelationship(f,c,b,d)}},_az:function(a){return"rId"+(a+1).toString()},_aj:function(){if(this._c!=null){return this._c.getRelationships()}return this._a.getRelationships()},_a0:function(){switch(this._y()){case 0:return $$t.$fp._a5;case 1:return $$t.$fp._a4;default:return $$t.$fp._a5}},_a2:function(a,b,c){var d=new $$4.p(String,2,$$v.$ao.c());if(c==false&&b){var f=this._a.getParts().getEnumerator();while(f.moveNext()){var e=f.current();var g=e.uri().toString();var h=$$7.$b.getExtension(g);var i=g.substr(0,g.length-h.length);d.add(i)}}var j=$$7.$b.getExtension(a);var k=a.substr(0,a.length-j.length);var l=1;while(true){if(b){var m=k+l;if(c||d.contains(m)==false){m+=j;return m}}else{var n=k+l+j;if(c||this._a.partExists($$v.$ap.b(n))==false){return n}}l++}},_as:function(a){var b;var c=this._af.tryGetValue(a,b);b=c.p1;return b},_v:function(a){var b;var c=this._ag.tryGetValue(a,b);b=c.p1;return b},_w:function(a){var b;var c=this._ah.tryGetValue(a,b);b=c.p1;return b},_ad:function(a){var c=this._aj().getEnumerator();while(c.moveNext()){var b=c.current();if(b.id()==a){return false}}return true},_o:function(a,b){var $self=this;if(b==null){b=this._v(a.contentType())}var c=a.getRelationships();var d=a.uri().toString();if(this._ai.add(d)==false){return null}var e=null;var f=null;return $$v.$o.f($$0.$aq.$type,this._p(a,b,c,false),function(g){var h=$$v.$o.m($$0.$aq.$type,g);return $$v.$o.a($$v.$o.c($$v.$h.g(b!=null,function(){var i=$self._c;return $$v.$h.h(function(){$self._c=a;return $$v.$h.n($$0.$dg.$type,a.getStream(3,1),function(j){f=b.e($self,j);return $$v.$o.e($.ig.$op.$type,f.a(),function(k){e=$$v.$o.m($.ig.$op.$type,k)},0)})},function(){$self._c=i})},function(){$self._bd(a);return null}),function(){if(e!=null){$self._af.item(d,e)}return $$v.$h.g(h,function(){return $self._p(a,b,c,true)},null)},0),function(){if(f!=null){f.q()}},0)},0)},_p:function(a,b,c,d){var $self=this;var e=false;return $$v.$o.g($$0.$aq.$type,$$v.$h.h(function(){if(a!=null){$self._ak.push(a)}var f=$self._bh(b,c);c=f.p1;return $$v.$h.d($$v.$a1.$type,c,function(g){if(g.relationshipType()==$self._a0()){return null}switch(g.targetMode()){case 0:{if(b!=null){var h=$self._w(g.relationshipType());var i=h!=null&&b.i(h);if(d!=i){e=true;return null}}var j=$$t.$ka.ak(g);var k=$self._a.getPart(j);var l=null;if(b!=null){l=b.f(k,g)}if(l==null&&k!=null&&k.contentType()=="application/xml"){var m=$self._w(g.relationshipType());if(m!=null&&m.m()!=k.contentType()){k=new $$t.jy(k,m.m())}l=m}return $self._o(k,l)}case 1:break;default:break}return null})},function(){if(a!=null){$self._ak.pop()}}),function(){return e},0)},_bh:function(a,b){if(a==null){return{p1:b}}var c=a.j();if(c==null){return{p1:b}}var d=new $$4.g(String,$$0.$aw.$type,0);var f=c.getEnumerator();while(f.moveNext()){var e=f.current();d.add(e.key().o(this._y()),e.value())}var g=new $$4.w($$v.$a1.$type,1,b);g.sort2(function(h,i){var j;var k=function(){var l=d.tryGetValue(h.relationshipType(),j);j=l.p1;return l.ret}();var l;var m=function(){var n=d.tryGetValue(i.relationshipType(),l);l=n.p1;return n.ret}();if(k==false&&m==false){return 0}else if(k&&m==false){return-1}else if(k==false&&m){return 1}return $ad(j,l)});b=g;return{p1:b}},_d:function(){return this._c},_u:function(){},_y:function(){return this._ao.getValueOrDefault1(0)},_ab:function(){return this._aa},__ae:false,_am:function(){return this._ak},_s:function(){},_b:function(){return this._a},$type:new $.ig.Type("OfficeDocumentManager",$.ig.$ot,[$$0.$au.$type])},true);$c("OfficeDocumentManager_PartRelationshipCounter:fq","Object",{a:0,init:function(){$.ig.$op.init.call(this)},c:function(){this.a++},b:function(){return this.a},$type:new $.ig.Type("OfficeDocumentManager_PartRelationshipCounter",$.ig.$ot)},true);$c("QualifiedNameInfo:fr","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},h:null,g:null,f:null,init1:function(a,b,c,d){$$0.$bh.init.call(this);if(b==String.empty()){b=null}this.h=b;this.g=c;this.f=d},toString:function(){if(this.h!=null){return this.h+":"+this.f}return this.f},d:function(a,b){if(String.isNullOrEmpty(a)){return b}var c;if(a.charAt(a.length-1)!="/"){a+="/"}c=a+b;return c},e:function(a){if(this.g==null){return this.f}if(a==null){return $$t.$fr.d(this.g,this.f)}return $$t.$fr.d(a._a7(this.g),this.f)},i:function(a,b,c){if(a==String.empty()){a=null}this.h=a;this.g=b;this.f=c},b:function(a){if(this.g==null){return this}if(a==null){return this}return new $$t.fr(1,this.h,a._a7(this.g),this.f)},c:function(){return this.f==null},$type:new $.ig.Type("QualifiedNameInfo",$$0.$bh.$type)},true);$c("UnknownElementCache:fs","Object",{h:null,i:null,a:null,m:null,o:null,init:function(a,b){this.a=new $$t.fr;$.ig.$op.init.call(this);this.a=a;this.o=b},l:function(a,b){var d=this.j().getEnumerator();while(d.moveNext()){var c=d.current();if(c.a.e(b)==a){return $m($$t.$bh.$type,c)}}return $m($$t.$bh.$type,null)},c:function(a,b){return $$5.$e.ag($$t.$fs.$type,this.k(),function(c){return c.b().e(b)==a})},f:function(a,b){return $$5.$e.u($$t.$fs.$type,this.k(),function(c){return c.b().e(b)==a})},g:function(a,b){var d__=new $$t.ft(-2);d__.___4__this=this;d__.___3__strictElementName=a;d__.___3__documentManager=b;return d__},j:function(){if(this.h==null){this.h=new $$4.w($$t.$bh.$type,0)}return this.h},d:function(){return this.h!=null&&this.h.count()!=0},k:function(){if(this.i==null){this.i=new $$4.w($$t.$fs.$type,0)}return this.i},e:function(){return this.i!=null&&this.i.count()!=0},b:function(){return this.a},n:function(a){if(arguments.length===1){this.m=a;return a}else{return this.m}},p:function(a){if(arguments.length===1){this.o=a;return a}else{return this.o}},$type:new $.ig.Type("UnknownElementCache",$.ig.$ot)},true);$c("UnknownStructure:fu","Object",{a:null,init:function(a){$.ig.$op.init.call(this);this.a=a},b:function(){return this.a},$type:new $.ig.Type("UnknownStructure",$.ig.$ot)},true);$c("XmlReadManager:fv","Object",{u:null,ab:0,k:null,ad:null,v:null,z:0,m:null,b:null,i:null,j:null,ao:null,aa:0,w:null,x:null,a:null,y:0,init:function(a,b){this.k=new $$t.fr;this.w=new $$4.z($$t.$fz.$type);this.x=new $$4.z($$t.$f0.$type);this.a=[];this.y=0;$.ig.$op.init.call(this);this.v=new $$4.z($$t.$fw.$type);this.u=new $$4.w($$t.$bh.$type,0);this.z=-1;this.b=new Array(16);this.i=a.d();this.j=a;this.ao=b},q:function(a){for(var b=0;b<=this.z;b++){if(this.b[b].a(a)){return true}}return false},r:function(a){if(this.w.count()>0){var b=this.w.peek();if(a==b.b.e(this.i)){return true}}return false},d:function(){this.aa=0;return this.f(this.w.count(),0,0,false,false)},f:function(a,b,c,d,e){var $self=this;var f=new $$t.fz;if(d){f=this.w.pop()}else{f=new $$t.fz;f.h=b;f.c=c}var g=null;while(true){if(e==true){e=false}else{if(this.ao.a7()==15){if(this.w.count()==a){break}f=this.w.pop();e=true;continue}f.b=this.l();if(f.b.c()){if(this.w.count()==a){break}f=this.w.pop();e=true;continue}this.al();f.f=true;f.g=true;f.e=false;g=f.b.e(this.i);var h=null;switch(g){case $$t.$iu.ap:return $$v.$o.c(this.c(f.b,f.h),function(){if(f.g&&$self.ao.t()==false){if($self.w.count()==a){return null}f=$self.w.pop();e=true}else{if(f.f){f.h++}$self.ak()}$self.w.push(f);return $$v.$i.d(function(){return $self.f(a,f.h,f.c,true,e)},2)},0);case $$t.$iu.aq:h=this.g(f.b,f.h,f.c);break;case $$t.$iu.ar:h=this.h(f.b,f.h,f.c);break;default:f.e=true;break}if(h!=null){return $$v.$o.f($$0.$aq.$type,h,function(i){if($$v.$o.m($$0.$aq.$type,i)==false){f.f=false;f.g=false}else{f.c=2}if(f.g&&$self.ao.t()==false){if($self.w.count()==a){return null}f=$self.w.pop();e=true}else{if(f.f){f.h++}$self.ak()}$self.w.push(f);return $$v.$i.d(function(){return $self.f(a,f.h,f.c,true,e)},2)},0)}if(f.e){var i=false;f.a=this.j.x(g);if(f.a.c()){if(this.t(f.b,f.h)){f.g=false;i=true}}if(!i){var j=this.ao.i();this.am(f.b,false,false);f.d=j;if(f.a.b!=null){this.k=f.b;this.ab=f.h;f.a.b(this.j)}if(f.d==false){if(this.j.ah(f.b.e(this.i))){if(this.b[this.z].b){return $$v.$o.c($$v.$o.a(this.e(this.x.count(),false,false),function(){if(f.e){if(f.a.a!=null){$self.k=f.b;$self.ab=f.h;f.a.a($self.j)}}},0),function(){$self.w.push(f);return $$v.$i.d(function(){return $self.f(a,f.h,f.c,true,e)},2)},0)}else{this.w.push(f);f=new $$t.fz;f.h=0;f.c=0;continue}}else{while(this.ao.a7()!=15){this.ao.a2()}}}}}}if(f.e){if(f.a.a!=null){this.k=f.b;this.ab=f.h;f.a.a(this.j)}}if(f.g&&this.ao.t()==false){if(this.w.count()==a){break}f=this.w.pop();e=true;continue}if(f.f){f.h++}this.ak();this.aa++;if(1e3<this.aa){this.aa=0;this.w.push(f);return $$v.$i.d(function(){return $self.f(a,f.h,f.c,true,e)},2)}}return null},e:function(a,b,c){var $self=this;var d=b?this.x.pop():new $$t.f0;var e=null;while(true){if(c==false){if(this.ao.a7()==15){if(this.x.count()==a){break}d=this.x.pop();c=true;continue}d.b=this.l();if(d.b.c()){if(this.x.count()==a){break}d=this.x.pop();c=true;continue}this.al();e=d.b.e(this.i)}if(c==false&&e==$$t.$iu.ap){return $$v.$o.c(this.c(d.b,0),function(){if($self.ao.t()==false){if($self.x.count()==a){return null}d=$self.x.pop();c=true}else{d.c++;$self.ak()}$self.x.push(d);return $$v.$i.d(function(){return $self.e(a,true,c)},2)},0)}else{if(c){c=false}else{d.a=this.j.x(e);var f=this.ao.i();this.am(d.b,false,false);if(d.a.b!=null){this.k=d.b;this.ab=d.c;d.a.b(this.j)}if(f==false){this.x.push(d);d=new $$t.f0;continue}}if(d.a.a!=null){this.k=d.b;this.ab=d.c;d.a.a(this.j)}}if(this.ao.t()==false){if(this.x.count()==a){break}d=this.x.pop();c=true;continue}d.c++;this.ak();if(1e3<++this.aa){this.aa=0;this.x.push(d);return $$v.$i.d(function(){return $self.e(a,true,c)},2)}}return null},ae:function(a){return this.ao.ah(a)},aj:function(){if(this.v.count()==0){return}this.v.peek().a=true},an:function(){this.b[this.z].b=true},ah:function(a,b){for(var c=0;c<b.length;c++){var d=this.ae(b[c]);if(d!=null){a.add(d)}}},c:function(a,b){var c=this.ao.i();this.am(a,false,false);this.k=a;this.ab=b;if(c==false){return this.f(this.w.count(),b,1,false,false)}return null},o:function(a,b){b=this.ao.i();this.am(a,true,true);var c=new $$t.fs(a,this.ad);if(this.u.count()!=0){c.j().addRange(this.u)}return{ret:c,p1:b}},p:function(a,b){var $self=this;this.al();var c;var d=function(){var e=$self.o(a,c);c=e.p1;return e.ret}();var e=this.j.w(a);if(e.b!=null){this.k=a;this.ab=b;this.m=d;e.b(this.j);this.m=null}if(c==false){if(this.j.ah(a.e(this.i))){this.ai(d)}else{while(this.ao.a7()!=15){this.ao.a2()}}}if(e.a!=null){this.k=a;this.ab=b;this.m=d;e.a(this.j);this.m=null}this.j.at(d);this.ak();return d},ai:function(a){var b=0;while(this.ao.a7()!=15){var c=this.l();if(c.c()){break}a.k().add(this.p(c,b));if(this.ao.t()==false){break}b++}},t:function(a,b){var c=a.e(this.i);var d=this.j.z(c);var t1=d;L0:while(true){switch(t1){case 0:this.ao.a2();return true;case 1:{var e=this.ao.ap();this.j.av(e);return true}case 2:{var f=this.p(a,b);var g=new $$t.fu(f);this.j.au(g);this.ao.t();return true}case 3:return false;default:t1=0;continue L0}break}},l:function(){switch(this.ao.a7()){case 1:return new $$t.fr(1,this.ao.ak(),this.ao.aj(),this.ao.ag());case 2:break;case 15:case 14:case 3:case 0:break;case 17:case 13:case 8:{do{this.ao.t()}while(this.ao.a7()==13||this.ao.a7()==17||this.ao.a7()==8);return this.l()}default:break}return $$t.$fr.a},ak:function(){this.j.s().i(this.b[this.z].e,this.b[this.z].f);this.b[this.z]=null;this.z--},al:function(){this.z++;while(this.b.length<=this.z){var a=new Array(this.b.length*2);$.ig.util.arrayCopy2(this.b,a,this.b.length);this.b=a}this.b[this.z]=new $$t.fy(1,this)},am:function(a,b,c){this.y=0;this.u.clear();this.ad=null;var d=this.ao.i();if(this.ao.r()){do{var e=this.ao.aj();if(b==false&&e=="http://www.w3.org/2000/xmlns/"){if(this.ao.ag()=="xmlns"||this.ao.ak()=="xmlns"){continue}}var f=new $$t.bh;if(c){f=new $$t.bh(1,this.ao.ak(),e,this.ao.ag(),this.ao.ar())}else if(this.y<this.a.length){f=this.a[this.y++];f.e(this.ao.ak(),e,this.ao.ag(),this.ao.ar())}else{f=new $$t.bh(1,this.ao.ak(),e,this.ao.ag(),this.ao.ar());this.a.push(f);this.y++}if(f.a.f=="Ignorable"&&f.a.e(this.i)==$$t.$iu.as){this.ah(this.b[this.z].d(),$.ig.util.stringSplit(f.d,[" "],1));continue}this.u.add(f)}while(this.ao.s());this.ao.q()}if(d==false&&this.ao.t()){if(this.ao.a7()==13&&a.f=="t"&&a.e(this.i)==$$t.$iq.fp){this.ad=this.ao.ar()}else{while(this.ao.a7()==13){this.ao.t()}if(this.ao.a7()==14||this.ao.a7()==3){this.ad=this.ao.ar();this.ao.t()}}}},ag:function(a){var b=a.indexOf(":");if(b<0){return a}var c=a.substr(0,b);var d=a.substr(b+1);var e=this.ae(c);var f=new $$t.fr(1,c,e,d);return f.e(this.i)},g:function(a,b,c){var $self=this;if(c!=1){this.ao.a2();return $$v.$i.g($$0.$aq.$type,false)}var d=this.ao.i();this.am(a,false,false);this.k=a;this.ab=b;var e;var f=$$t.$iu.aw(this.j,e);e=f.p1;if(this.j.ag(e)==false){while(this.ao.a7()==1){this.ao.a2();if(this.ao.a7()==13){this.ao.a2()}}if(this.ao.t()==false){}return $$v.$i.g($$0.$aq.$type,false)}var g=true;return $$v.$o.g($$0.$aq.$type,$$v.$h.g(d==false,function(){$self.v.push(new $$t.fw);var h=$self.f($self.w.count(),0,0,false,false);var i=$self.v.pop();if(i.a){if($self.ao.t()==false){}g=false}return h},null),function(){return g},0)},h:function(a,b,c){var $self=this;if(c!=1){this.ao.a2();return $$v.$i.g($$0.$aq.$type,false)}var d=this.ao.i();this.am(a,false,false);this.k=a;this.ab=b;return $$v.$o.g($$0.$aq.$type,$$v.$h.g(d==false,function(){return $self.f($self.w.count(),0,0,false,false)},null),function(){return true},0)},n:function(){return this.m},s:function(){return this.v.count()!=0},af:function(){return this.ao.aj()},$type:new $.ig.Type("XmlReadManager",$.ig.$ot)},true);$c("XmlReadManager_AlternateContentChoiceContext:fw","Object",{init:function(){$.ig.$op.init.call(this)},a:false,$type:new $.ig.Type("XmlReadManager_AlternateContentChoiceContext",$.ig.$ot)},true);$c("XmlReadManager_ElementContext:fy","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},e:0,f:null,c:null,b:false,init1:function(a,b){$$0.$bh.init.call(this);this.e=b.j.s().e();this.f=b.j.s().f();this.b=false;this.c=null},a:function(a){return this.c!=null&&this.c.contains(a)},d:function(){if(this.c==null){this.c=new $$4.p(String,0)}return this.c},$type:new $.ig.Type("XmlReadManager_ElementContext",$$0.$bh.$type)},true);$c("XmlReadManager_LoadChildContext:fz","ValueType",{init:function(){this.b=new $$t.fr;this.a=new $$t.fk;$$0.$bh.init.call(this)},h:0,c:0,b:null,a:null,g:false,f:false,e:false,d:false,$type:new $.ig.Type("XmlReadManager_LoadChildContext",$$0.$bh.$type)},true);$c("XmlReadManager_LoadFastContext:f0","ValueType",{init:function(){this.b=new $$t.fr;this.a=new $$t.fk;$$0.$bh.init.call(this)},c:0,b:null,a:null,$type:new $.ig.Type("XmlReadManager_LoadFastContext",$$0.$bh.$type)},true);$c("ST_DecimalNumber:gd","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},e:0,init1:function(a,b){$$0.$bh.init.call(this);this.e=b},d:function(a){return $$t.$gd.b($ai(a,$$0.$cg.invariantCulture()))},j:function(a){var b;if(function(){var c=$ag(a,7|4,$$0.$cg.invariantCulture(),b);b=c.p3;return c.ret}()){return $m($$t.$gd.$type,$$t.$gd.b(b))}return $m($$t.$gd.$type,null)},toString:function(){return this.e.toString()},f:function(a){return a.e},h:function(a){if(!a.hasValue()){return $m($$0.$aw.$type,null)}return $m($$0.$aw.$type,$$t.$gd.f(a.value()))},b:function(a){return new $$t.gd(1,a)},i:function(a){if(!a.hasValue()){return $m($$t.$gd.$type,null)}return $m($$t.$gd.$type,$$t.$gd.b(a.value()))},$type:new $.ig.Type("ST_DecimalNumber",$$0.$bh.$type)},true);$c("ST_DecimalNumberOrPercent:ge","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}this.a=new $$t.g6;$$0.$bh.init.call(this)},b:false,a:null,init1:function(a,b,c){this.a=new $$t.g6;$$0.$bh.init.call(this);this.b=c;this.a=b},equals:function(a){var b=$m($$t.$ge.$type,$b($$t.$ge.$type,a));if($$t.$ge.f(b,$m($$t.$ge.$type,null))){return false}return $$t.$ge.c(this,b.getValueOrDefault())},getHashCode:function(){return this.a.getHashCode()},toString:function(){return this.k(0)},k:function(a){if(this.b){return $$t.$g6.k(this.a).toString()}return this.a.p(a)},i:function(a){a=this.b;return{ret:$$t.$g6.k(this.a),p0:a}},j:function(a,b){var c=$$t.$gd.j(a);if($l(c,null)){return $m($$t.$ge.$type,new $$t.ge(1,new $$t.g6(1,$$t.$gd.f(c.getValueOrDefault())),true))}var d=$$t.$g6.o(a,b);if($$t.$g6.g(d,$m($$t.$g6.$type,null))){return $m($$t.$ge.$type,new $$t.ge(1,d.getValueOrDefault(),false))}return $m($$t.$ge.$type,null)},c:function(a,b){return $$t.$g6.d(a.a,b.a)},d:function(a,b){if(!a.hasValue()){return!b.hasValue()}else if(!b.hasValue()){return false}return $$t.$ge.c(a.value(),b.value())},e:function(a,b){return!$$t.$ge.c(a,b)},f:function(a,b){if(!a.hasValue()){return b.hasValue()}else if(!b.hasValue()){return true}return $$t.$ge.e(a.value(),b.value())},$type:new $.ig.Type("ST_DecimalNumberOrPercent",$$0.$bh.$type)},true);$c("ST_DrawingElementId:gf","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},g:0,init1:function(a,b){$$0.$bh.init.call(this);this.g=b},c:function(a){return $$t.$gf.a($.ig.util.parseUInt32_2(a,7,$$0.$cg.invariantCulture()))},f:function(a){var b;if(function(){var c=$.ig.util.tryParseUInt32_2(a,7,$$0.$cg.invariantCulture(),b);b=c.p3;return c.ret}()){return $m($$t.$gf.$type,$$t.$gf.a(b))}return $m($$t.$gf.$type,null)},toString:function(){return this.g.toString()},h:function(a){return a.g},e:function(a){if(!a.hasValue()){return $m($$0.$be.$type,null)}return $m($$0.$be.$type,$$t.$gf.h(a.value()))},a:function(a){return new $$t.gf(1,a)},d:function(a){if(!a.hasValue()){return $m($$t.$gf.$type,null)}return $m($$t.$gf.$type,$$t.$gf.a(a.value()))},$type:new $.ig.Type("ST_DrawingElementId",$$0.$bh.$type)},true);$c("ST_EighthPointMeasure:gg","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}this.d=new $$t.ib;$$0.$bh.init.call(this)},d:null,init1:function(a,b){this.d=new $$t.ib;$$0.$bh.init.call(this);this.d=b},equals:function(a){var b=$m($$t.$gg.$type,$b($$t.$gg.$type,a));if($$t.$gg.j(b,$m($$t.$gg.$type,null))){return false}return $$t.$gg.g(this,b.getValueOrDefault())},getHashCode:function(){return this.d.getHashCode()},toString:function(){return this.d.toString()},c:function(a){var b=$$t.$gg.p(a);if($$t.$gg.j(b,$m($$t.$gg.$type,null))){return b.getValueOrDefault()}throw $$v.$aq.m($$t.$gg.$type,a)},p:function(a){var b=$$t.$ib.f(a);if($l(b,null)){return $m($$t.$gg.$type,$$t.$gg.a(b.getValueOrDefault()))}return $m($$t.$gg.$type,null)},g:function(a,b){return $$t.$ib.h(a.d)==$$t.$ib.h(b.d)},h:function(a,b){if(!a.hasValue()){return!b.hasValue()}else if(!b.hasValue()){return false}return $$t.$gg.g(a.value(),b.value())},i:function(a,b){return!$$t.$gg.g(a,b)},j:function(a,b){if(!a.hasValue()){return b.hasValue()}else if(!b.hasValue()){return true}return $$t.$gg.i(a.value(),b.value())},a:function(a){return new $$t.gg(1,a)},m:function(a){if(!a.hasValue()){return $m($$t.$gg.$type,null)}return $m($$t.$gg.$type,$$t.$gg.a(a.value()))},e:function(a){return a.d},n:function(a){if(!a.hasValue()){return $m($$t.$ib.$type,null)}return $m($$t.$ib.$type,$$t.$gg.e(a.value()))},q:function(a){return $$t.$ib.h(a.d)},o:function(a){if(!a.hasValue()){return $m($$0.$bf.$type,null)}return $m($$0.$bf.$type,$$t.$gg.q(a.value()))},$type:new $.ig.Type("ST_EighthPointMeasure",$$0.$bh.$type)},true);$c("ST_FixedAngle:gk","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}this.a=new $$v.cc;$$0.$bh.init.call(this)},a:null,init1:function(a,b){this.a=new $$v.cc;$$0.$bh.init.call(this);$$v.$aq.au($$t.$gk.$type,b.l(),"value",-54e5,54e5);this.a=b},equals:function(a){var b=$m($$t.$gk.$type,$b($$t.$gk.$type,a));if($$t.$gk.k(b,$m($$t.$gk.$type,null))){return false}return $$t.$gk.h(this,b.getValueOrDefault())},getHashCode:function(){return this.a.getHashCode()},toString:function(){return this.a.toString()},d:function(a){return $$t.$gk.e($$v.$cc.a(a))},g:function(a){var b=$$t.$gk.r(a);if($$t.$gk.k(b,$m($$t.$gk.$type,null))){return b.getValueOrDefault()}throw $$v.$aq.m($$t.$gk.$type,a)},s:function(){return this.a.l()},r:function(a){return $$t.$gk.q($$v.$cc.k(a))},h:function(a,b){return $$v.$cc.c(a.a,b.a)},i:function(a,b){if(!a.hasValue()){return!b.hasValue()}else if(!b.hasValue()){return false}return $$t.$gk.h(a.value(),b.value())},j:function(a,b){return!$$t.$gk.h(a,b)},k:function(a,b){if(!a.hasValue()){return b.hasValue()}else if(!b.hasValue()){return true}return $$t.$gk.j(a.value(),b.value())},e:function(a){return new $$t.gk(1,a)},q:function(a){if(!a.hasValue()){return $m($$t.$gk.$type,null)}return $m($$t.$gk.$type,$$t.$gk.e(a.value()))},b:function(a){return a.a},p:function(a){if(!a.hasValue()){return $m($$v.$cc.$type,null)}return $m($$v.$cc.$type,$$t.$gk.b(a.value()))},$type:new $.ig.Type("ST_FixedAngle",$$0.$bh.$type)},true);$c("ST_FixedPercentage:gl","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}this.d=new $$t.g6;$$0.$bh.init.call(this)},d:null,init1:function(a,b){this.d=new $$t.g6;$$0.$bh.init.call(this);$$v.$aq.au($$t.$gl.$type,$$t.$g6.k(b),"value",-100,100);this.d=b},equals:function(a){var b=$m($$t.$gl.$type,$b($$t.$gl.$type,a));if($$t.$gl.j(b,$m($$t.$gl.$type,null))){return false}return $$t.$gl.g(this,b.getValueOrDefault())},getHashCode:function(){return this.d.getHashCode()},toString:function(){return this.s(1)},s:function(a){return this.d.p(a)},c:function(a,b){var c=$$t.$gl.r(a,b);if($$t.$gl.j(c,$m($$t.$gl.$type,null))){return c.getValueOrDefault()}throw $$v.$aq.m($$t.$gl.$type,a)},r:function(a,b){return $$t.$gl.p($$t.$g6.o(a,b))},g:function(a,b){return $$t.$g6.d(a.d,b.d)},h:function(a,b){if(!a.hasValue()){return!b.hasValue()}else if(!b.hasValue()){return false}return $$t.$gl.g(a.value(),b.value())},i:function(a,b){return!$$t.$gl.g(a,b)},j:function(a,b){if(!a.hasValue()){return b.hasValue()}else if(!b.hasValue()){return true}return $$t.$gl.i(a.value(),b.value())},a:function(a){return new $$t.gl(1,a)},p:function(a){if(!a.hasValue()){return $m($$t.$gl.$type,null)}return $m($$t.$gl.$type,$$t.$gl.a(a.value()))},e:function(a){return a.d},q:function(a){if(!a.hasValue()){return $m($$t.$g6.$type,null)}return $m($$t.$g6.$type,$$t.$gl.e(a.value()))},m:function(a){return $$t.$g6.k(a.d)},o:function(a){if(!a.hasValue()){return $m(Number,null)}return $m(Number,$$t.$gl.m(a.value()))},$type:new $.ig.Type("ST_FixedPercentage",$$0.$bh.$type)},true);$c("ST_HexColorRGB:gq","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break;case 2:this.init2.apply(this,arguments);break}return}$$0.$bh.init.call(this)},m:0,l:0,k:0,init1:function(a,b){$$t.$gq.init2.call(this,2,b.o(),b.n(),b.m())},init2:function(a,b,c,d){$$0.$bh.init.call(this);this.m=b;this.l=c;this.k=d},equals:function(a){var b=$m($$t.$gq.$type,$b($$t.$gq.$type,a));if($$t.$gq.h(b,$m($$t.$gq.$type,null))){return false}return $$t.$gq.e(this,b.getValueOrDefault())},getHashCode:function(){return this.m<<16|this.l<<8|this.k},d:function(a){var b=$$t.$gq.p(a);if($$t.$gq.h(b,$m($$t.$gq.$type,null))){return b.getValueOrDefault()}throw $$v.$aq.m($$t.$gq.$type,a)},p:function(a){var b;if(function(){var c=$ag(a,515,$$0.$cg.invariantCulture(),b);b=c.p3;return c.ret}()==false){return $m($$t.$gq.$type,null)}var c=(b&16711680)>>16;var d=(b&65280)>>8;var e=(b&255)>>0;return $m($$t.$gq.$type,new $$t.gq(2,c,d,e))},toString:function(){return $ah(this.m,"X2",$$0.$cg.invariantCulture())+$ah(this.l,"X2",$$0.$cg.invariantCulture())+$ah(this.k,"X2",$$0.$cg.invariantCulture())},q:function(){return $$a.$aw.u(255,this.m,this.l,this.k)},e:function(a,b){return a.k==b.k&&a.l==b.l&&a.m==b.m},f:function(a,b){if(!a.hasValue()){return!b.hasValue()}else if(!b.hasValue()){return false}return $$t.$gq.e(a.value(),b.value())},g:function(a,b){return!$$t.$gq.e(a,b)},h:function(a,b){if(!a.hasValue()){return b.hasValue()}else if(!b.hasValue()){return true}return $$t.$gq.g(a.value(),b.value())},r:function(a){return a.q()},n:function(a){if(!a.hasValue()){return $m($$a.$aw.$type,null)}return $m($$a.$aw.$type,$$t.$gq.r(a.value()))},b:function(a){return new $$t.gq(2,a.o(),a.n(),a.m())},o:function(a){if(!a.hasValue()){return $m($$t.$gq.$type,null)}return $m($$t.$gq.$type,$$t.$gq.b(a.value()))},$type:new $.ig.Type("ST_HexColorRGB",$$0.$bh.$type)},true);$c("ST_HexColorAuto:gp","ValueType",{init:function(){$$0.$bh.init.call(this)},equals:function(a){var b=$m($$t.$gp.$type,$b($$t.$gp.$type,a));if($$t.$gp.f(b,$m($$t.$gp.$type,null))){return false}return $$t.$gp.c(this,b.getValueOrDefault())},getHashCode:function(){return 0},b:function(a){var b=$$t.$gp.i(a);if($$t.$gp.f(b,$m($$t.$gp.$type,null))){return b.getValueOrDefault()}throw $$v.$aq.m($$t.$gp.$type,a)},i:function(a){if(a=="auto"){return $m($$t.$gp.$type,$$t.$gp.a)}return $m($$t.$gp.$type,null)},toString:function(){return"auto"},c:function(a,b){return true},d:function(a,b){if(!a.hasValue()){return!b.hasValue()}else if(!b.hasValue()){return false}return $$t.$gp.c(a.value(),b.value())},e:function(a,b){return false
},f:function(a,b){if(!a.hasValue()){return b.hasValue()}else if(!b.hasValue()){return true}return $$t.$gp.e(a.value(),b.value())},$type:new $.ig.Type("ST_HexColorAuto",$$0.$bh.$type)},true);$c("ST_HexColor:go","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break;case 2:this.init2.apply(this,arguments);break}return}$$0.$bh.init.call(this)},p:$m($$t.$gq.$type,null),q:$m($$t.$gp.$type,null),init1:function(a,b){$$0.$bh.init.call(this);this.p=$m($$t.$gq.$type,b);this.q=$m($$t.$gp.$type,null)},init2:function(a,b){$$0.$bh.init.call(this);this.p=$m($$t.$gq.$type,null);this.q=$m($$t.$gp.$type,b)},equals:function(a){var b=$m($$t.$go.$type,$b($$t.$go.$type,a));if($$t.$go.m(b,$m($$t.$go.$type,null))){return false}return $$t.$go.j(this,b.getValueOrDefault())},getHashCode:function(){if($$t.$gq.h(this.p,$m($$t.$gq.$type,null))){return this.p.value().getHashCode()}if($$t.$gp.f(this.q,$m($$t.$gp.$type,null))){return this.q.value().getHashCode()}return 0},e:function(a){var b=$$t.$go.u(a);if($$t.$go.m(b,$m($$t.$go.$type,null))){return b.getValueOrDefault()}throw $$v.$aq.m($$t.$go.$type,a)},u:function(a){var b=$$t.$gp.i(a);if($$t.$gp.f(b,$m($$t.$gp.$type,null))){return $m($$t.$go.$type,$$t.$go.a(b.getValueOrDefault()))}var c=$$t.$gq.p(a);if($$t.$gq.h(c,$m($$t.$gq.$type,null))){return $m($$t.$go.$type,$$t.$go.b(c.getValueOrDefault()))}return $m($$t.$go.$type,null)},toString:function(){if($$t.$gq.h(this.p,$m($$t.$gq.$type,null))){return this.p.getValueOrDefault().toString()}if($$t.$gp.f(this.q,$m($$t.$gp.$type,null))){return this.q.getValueOrDefault().toString()}return String.empty()},h:function(){return $$t.$gp.f(this.q,$m($$t.$gp.$type,null))},i:function(){return $$t.$gq.h(this.p,$m($$t.$gq.$type,null))},j:function(a,b){return $$t.$gq.f(a.p,b.p)&&$$t.$gp.d(a.q,b.q)},k:function(a,b){if(!a.hasValue()){return!b.hasValue()}else if(!b.hasValue()){return false}return $$t.$go.j(a.value(),b.value())},l:function(a,b){return!$$t.$go.j(a,b)},m:function(a,b){if(!a.hasValue()){return b.hasValue()}else if(!b.hasValue()){return true}return $$t.$go.l(a.value(),b.value())},b:function(a){return new $$t.go(1,a)},t:function(a){if(!a.hasValue()){return $m($$t.$go.$type,null)}return $m($$t.$go.$type,$$t.$go.b(a.value()))},f:function(a){return a.p.value()},r:function(a){if(!a.hasValue()){return $m($$t.$gq.$type,null)}return $m($$t.$gq.$type,$$t.$go.f(a.value()))},a:function(a){return new $$t.go(2,a)},s:function(a){if(!a.hasValue()){return $m($$t.$go.$type,null)}return $m($$t.$go.$type,$$t.$go.a(a.value()))},$type:new $.ig.Type("ST_HexColor",$$0.$bh.$type)},true);$c("ST_PositiveUniversalMeasure:hb","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},b:0,c:0,init1:function(a,b,c){$$0.$bh.init.call(this);this.c=b;this.b=c},toString:function(){return $$v.$cg.p(this.c,this.b)},d:function(){return $$v.$cg.l(this.c,this.b)},a:function(a){var b=$$t.$hb.e(a);if($l(b,null)){return b.getValueOrDefault()}throw $$v.$aq.m($$t.$hb.$type,a)},e:function(a){var b;var c;if(function(){var d=$$v.$cg.i(a,b,c);b=d.p1;c=d.p2;return d.ret}()==false){return $m($$t.$hb.$type,null)}return $m($$t.$hb.$type,new $$t.hb(1,b,c))},$type:new $.ig.Type("ST_PositiveUniversalMeasure",$$0.$bh.$type)},true);$c("ST_UnsignedDecimalNumber:ib","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},g:0,init1:function(a,b){$$0.$bh.init.call(this);this.g=b},f:function(a){var b;if(function(){var c=$.ig.util.tryParseUInt64_2(a,7|4,$$0.$cg.invariantCulture(),b);b=c.p3;return c.ret}()){return $m($$t.$ib.$type,$$t.$ib.b(b))}return $m($$t.$ib.$type,null)},toString:function(){return this.g.toString()},h:function(a){return a.g},e:function(a){if(!a.hasValue()){return $m($$0.$bf.$type,null)}return $m($$0.$bf.$type,$$t.$ib.h(a.value()))},b:function(a){return new $$t.ib(1,a)},d:function(a){if(!a.hasValue()){return $m($$t.$ib.$type,null)}return $m($$t.$ib.$type,$$t.$ib.b(a.value()))},$type:new $.ig.Type("ST_UnsignedDecimalNumber",$$0.$bh.$type)},true);$c("ST_HpsMeasure:gr","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break;case 2:this.init2.apply(this,arguments);break;case 3:this.init3.apply(this,arguments);break}return}$$0.$bh.init.call(this)},g:$m($$t.$hb.$type,null),h:$m($$t.$ib.$type,null),init1:function(a,b){$$t.$gr.init2.call(this,2,new $$t.hb(1,b,3))},init2:function(a,b){$$0.$bh.init.call(this);this.g=$m($$t.$hb.$type,b);this.h=$m($$t.$ib.$type,null)},init3:function(a,b){$$0.$bh.init.call(this);this.g=$m($$t.$hb.$type,null);this.h=$m($$t.$ib.$type,b)},toString:function(){if($l(this.g,null)){return this.g.getValueOrDefault().toString()}if($l(this.h,null)){return this.h.getValueOrDefault().toString()}return String.empty()},f:function(){if($l(this.g,null)){return this.g.getValueOrDefault().d()}if($l(this.h,null)){return $$t.$ib.h(this.h.getValueOrDefault())*10}return 0},e:function(a){var b=$$t.$gr.k(a);if($l(b,null)){return b.getValueOrDefault()}throw $$v.$aq.m($$t.$gr.$type,a)},k:function(a){var b=$$t.$hb.e(a);if($l(b,null)){return $m($$t.$gr.$type,$$t.$gr.a(b.getValueOrDefault()))}var c=$$t.$ib.f(a);if($l(c,null)){return $m($$t.$gr.$type,$$t.$gr.b(c.getValueOrDefault()))}return $m($$t.$gr.$type,null)},a:function(a){return new $$t.gr(2,a)},i:function(a){if(!a.hasValue()){return $m($$t.$gr.$type,null)}return $m($$t.$gr.$type,$$t.$gr.a(a.value()))},b:function(a){return new $$t.gr(3,a)},j:function(a){if(!a.hasValue()){return $m($$t.$gr.$type,null)}return $m($$t.$gr.$type,$$t.$gr.b(a.value()))},$type:new $.ig.Type("ST_HpsMeasure",$$0.$bh.$type)},true);$c("ST_LongHexNumber:g0","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},e:0,init1:function(a,b){$$0.$bh.init.call(this);this.e=b},d:function(a){return $$t.$g0.b($aj(a,515,$$0.$cg.invariantCulture()))},toString:function(){return $ah(this.e,"X8",$$0.$cg.invariantCulture())},b:function(a){return new $$t.g0(1,a)},f:function(a){if(!a.hasValue()){return $m($$t.$g0.$type,null)}return $m($$t.$g0.$type,$$t.$g0.b(a.value()))},$type:new $.ig.Type("ST_LongHexNumber",$$0.$bh.$type)},true);$c("ST_MeasurementOrPercent:g1","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break;case 2:this.init2.apply(this,arguments);break}return}$$0.$bh.init.call(this)},m:$m($$t.$ge.$type,null),n:$m($$v.$cg.$type,null),init1:function(a,b){$$0.$bh.init.call(this);this.m=$m($$t.$ge.$type,b);this.n=$m($$v.$cg.$type,null)},init2:function(a,b){$$0.$bh.init.call(this);this.m=$m($$t.$ge.$type,null);this.n=$m($$v.$cg.$type,b)},equals:function(a){var b=$m($$t.$g1.$type,$b($$t.$g1.$type,a));if($$t.$g1.j(b,$m($$t.$g1.$type,null))){return false}return $$t.$g1.g(this,b.getValueOrDefault())},getHashCode:function(){if($$t.$ge.f(this.m,$m($$t.$ge.$type,null))){return this.m.getValueOrDefault().getHashCode()}if($$v.$cg.f(this.n,$m($$v.$cg.$type,null))){return this.n.getValueOrDefault().getHashCode()<<1}return 0},toString:function(){return this.r(1)},r:function(a){if($$t.$ge.f(this.m,$m($$t.$ge.$type,null))){return this.m.getValueOrDefault().k(a)}if($$v.$cg.f(this.n,$m($$v.$cg.$type,null))){return this.n.getValueOrDefault().toString()}return String.empty()},o:function(a){var $self=this;if($$t.$ge.f(this.m,$m($$t.$ge.$type,null))){return{ret:$m(Number,function(){var b=$self.m.getValueOrDefault().i(a);a=b.p0;return b.ret}()),p0:a}}a=true;if($$v.$cg.f(this.n,$m($$v.$cg.$type,null))){return{ret:this.n.getValueOrDefault().n(),p0:a}}return{ret:$m(Number,null),p0:a}},e:function(a,b){var c=$$t.$ge.j(a,b);if($$t.$ge.f(c,$m($$t.$ge.$type,null))){return $$t.$g1.a(c.getValueOrDefault())}var d=$$v.$cg.o(a);if($$v.$cg.f(d,$m($$v.$cg.$type,null))){return $$t.$g1.b(d.getValueOrDefault())}throw $$v.$aq.m($$t.$g1.$type,a)},f:function(){return $$v.$cg.f(this.n,$m($$v.$cg.$type,null))},g:function(a,b){if($$t.$ge.f(a.m,b.m)){return false}if(!a.n.hasValue()){return!b.n.hasValue()}if(!b.n.hasValue()){return false}return $$v.$cg.b(a.n.value(),b.n.value())},h:function(a,b){if(!a.hasValue()){return!b.hasValue()}else if(!b.hasValue()){return false}return $$t.$g1.g(a.value(),b.value())},i:function(a,b){return!$$t.$g1.g(a,b)},j:function(a,b){if(!a.hasValue()){return b.hasValue()}else if(!b.hasValue()){return true}return $$t.$g1.i(a.value(),b.value())},a:function(a){return new $$t.g1(1,a)},p:function(a){if(!a.hasValue()){return $m($$t.$g1.$type,null)}return $m($$t.$g1.$type,$$t.$g1.a(a.value()))},b:function(a){return new $$t.g1(2,a)},q:function(a){if(!a.hasValue()){return $m($$t.$g1.$type,null)}return $m($$t.$g1.$type,$$t.$g1.b(a.value()))},$type:new $.ig.Type("ST_MeasurementOrPercent",$$0.$bh.$type)},true);$c("ST_OnOff:g2","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},d:false,init1:function(a,b){$$0.$bh.init.call(this);this.d=b},e:function(a){switch(a){case"1":return true;case"0":return false}return $ar(a)},toString:function(){return this.d?"1":"0"},g:function(a){return a?"1":"0"},b:function(a){return a?$$t.$g2.c:$$t.$g2.a},f:function(){return this.d},$type:new $.ig.Type("ST_OnOff",$$0.$bh.$type)},true);$c("ST_Panose:g3","Object",{a:null,init:function(a){$.ig.$op.init.call(this);this.a=a},toString:function(){return String.concat($$5.$e.o($$0.$ar.$type,String,this.a,function(a){return $ah(a,"X2",$$0.$cg.invariantCulture())}))},b:function(a){var b=new Array($a(a.length,2));for(var c=0;c<b.length;c++){var d=a.charAt(c*2);var e=a.charAt(c*2+1);b[c]=$$v.$aq.q(d)<<4|$$v.$aq.q(e)}return new $$t.g3(b)},$type:new $.ig.Type("ST_Panose",$.ig.$ot)},true);$c("ST_PointMeasure:g7","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}this.d=new $$t.ib;$$0.$bh.init.call(this)},d:null,init1:function(a,b){this.d=new $$t.ib;$$0.$bh.init.call(this);this.d=b},equals:function(a){var b=$m($$t.$g7.$type,$b($$t.$g7.$type,a));if($$t.$g7.j(b,$m($$t.$g7.$type,null))){return false}return $$t.$g7.g(this,b.getValueOrDefault())},getHashCode:function(){return this.d.getHashCode()},toString:function(){return this.d.toString()},c:function(a){var b=$$t.$g7.p(a);if($$t.$g7.j(b,$m($$t.$g7.$type,null))){return b.getValueOrDefault()}throw $$v.$aq.m($$t.$g7.$type,a)},p:function(a){var b=$$t.$ib.f(a);if($l(b,null)){return $m($$t.$g7.$type,$$t.$g7.a(b.getValueOrDefault()))}return $m($$t.$g7.$type,null)},g:function(a,b){return $$t.$ib.h(a.d)==$$t.$ib.h(b.d)},h:function(a,b){if(!a.hasValue()){return!b.hasValue()}else if(!b.hasValue()){return false}return $$t.$g7.g(a.value(),b.value())},i:function(a,b){return!$$t.$g7.g(a,b)},j:function(a,b){if(!a.hasValue()){return b.hasValue()}else if(!b.hasValue()){return true}return $$t.$g7.i(a.value(),b.value())},a:function(a){return new $$t.g7(1,a)},m:function(a){if(!a.hasValue()){return $m($$t.$g7.$type,null)}return $m($$t.$g7.$type,$$t.$g7.a(a.value()))},e:function(a){return a.d},n:function(a){if(!a.hasValue()){return $m($$t.$ib.$type,null)}return $m($$t.$ib.$type,$$t.$g7.e(a.value()))},q:function(a){return $$t.$ib.h(a.d)},o:function(a){if(!a.hasValue()){return $m($$0.$bf.$type,null)}return $m($$0.$bf.$type,$$t.$g7.q(a.value()))},$type:new $.ig.Type("ST_PointMeasure",$$0.$bh.$type)},true);$c("ST_PositiveFixedAngle:g8","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}this.a=new $$v.cc;$$0.$bh.init.call(this)},a:null,init1:function(a,b){this.a=new $$v.cc;$$0.$bh.init.call(this);$$v.$aq.au($$t.$g8.$type,b.l(),"value",0,216e5);this.a=b},equals:function(a){var b=$m($$t.$g8.$type,$b($$t.$g8.$type,a));if($$t.$g8.k(b,$m($$t.$g8.$type,null))){return false}return $$t.$g8.h(this,b.getValueOrDefault())},getHashCode:function(){return this.a.getHashCode()},toString:function(){return this.a.toString()},d:function(a){return $$t.$g8.e($$v.$cc.a(a))},q:function(){return this.a.l()},g:function(a){var b=$$t.$g8.p(a);if($$t.$g8.k(b,$m($$t.$g8.$type,null))){return b.getValueOrDefault()}throw $$v.$aq.m($$t.$g8.$type,a)},p:function(a){return $$t.$g8.o($$v.$cc.k(a))},h:function(a,b){return $$v.$cc.c(a.a,b.a)},i:function(a,b){if(!a.hasValue()){return!b.hasValue()}else if(!b.hasValue()){return false}return $$t.$g8.h(a.value(),b.value())},j:function(a,b){return!$$t.$g8.h(a,b)},k:function(a,b){if(!a.hasValue()){return b.hasValue()}else if(!b.hasValue()){return true}return $$t.$g8.j(a.value(),b.value())},e:function(a){return new $$t.g8(1,a)},o:function(a){if(!a.hasValue()){return $m($$t.$g8.$type,null)}return $m($$t.$g8.$type,$$t.$g8.e(a.value()))},b:function(a){return a.a},n:function(a){if(!a.hasValue()){return $m($$v.$cc.$type,null)}return $m($$v.$cc.$type,$$t.$g8.b(a.value()))},$type:new $.ig.Type("ST_PositiveFixedAngle",$$0.$bh.$type)},true);$c("ST_PositiveFixedPercentage:g9","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}this.a=new $$t.g6;$$0.$bh.init.call(this)},a:null,init1:function(a,b){this.a=new $$t.g6;$$0.$bh.init.call(this);$$v.$aq.au($$t.$g9.$type,$$t.$g6.k(b),"value",0,100);this.a=b},equals:function(a){var b=$m($$t.$g9.$type,$b($$t.$g9.$type,a));if($$t.$g9.j(b,$m($$t.$g9.$type,null))){return false}return $$t.$g9.g(this,b.getValueOrDefault())},getHashCode:function(){return this.a.getHashCode()},toString:function(){return this.s(1)},s:function(a){return this.a.p(a)},f:function(a,b){var c=$$t.$g9.r(a,b);if($$t.$g9.j(c,$m($$t.$g9.$type,null))){return c.getValueOrDefault()}throw $$v.$aq.m($$t.$g9.$type,a)},r:function(a,b){return $$t.$g9.q($$t.$g6.o(a,b))},g:function(a,b){return $$t.$g6.d(a.a,b.a)},h:function(a,b){if(!a.hasValue()){return!b.hasValue()}else if(!b.hasValue()){return false}return $$t.$g9.g(a.value(),b.value())},i:function(a,b){return!$$t.$g9.g(a,b)},j:function(a,b){if(!a.hasValue()){return b.hasValue()}else if(!b.hasValue()){return true}return $$t.$g9.i(a.value(),b.value())},d:function(a){return new $$t.g9(1,a)},q:function(a){if(!a.hasValue()){return $m($$t.$g9.$type,null)}return $m($$t.$g9.$type,$$t.$g9.d(a.value()))},b:function(a){return a.a},p:function(a){if(!a.hasValue()){return $m($$t.$g6.$type,null)}return $m($$t.$g6.$type,$$t.$g9.b(a.value()))},m:function(a){return $$t.$g6.k(a.a)},o:function(a){if(!a.hasValue()){return $m(Number,null)}return $m(Number,$$t.$g9.m(a.value()))},$type:new $.ig.Type("ST_PositiveFixedPercentage",$$0.$bh.$type)},true);$c("ST_SignedHpsMeasure:hh","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break;case 2:this.init2.apply(this,arguments);break}return}$$0.$bh.init.call(this)},c:$m($$0.$aw.$type,null),d:$m($$v.$cg.$type,null),init1:function(a,b){$$0.$bh.init.call(this);this.c=$m($$0.$aw.$type,$.ig.truncate(b*2));this.d=$m($$v.$cg.$type,null)},init2:function(a,b){$$0.$bh.init.call(this);this.c=$m($$0.$aw.$type,null);this.d=$m($$v.$cg.$type,b)},toString:function(){if($l(this.c,null)){return this.c.value().toString()}if($$v.$cg.f(this.d,$m($$v.$cg.$type,null))){return this.d.toString()}return String.empty()},b:function(){if($l(this.c,null)){return this.c.value()*10}if($$v.$cg.f(this.d,$m($$v.$cg.$type,null))){return this.d.value().k()}return 0},a:function(a){var b;if(function(){var c=$ag(a,7,$$0.$cg.invariantCulture(),b);b=c.p3;return c.ret}()){return new $$t.hh(1,$a(b,2))}var c=$$v.$cg.o(a);if($$v.$cg.f(c,$m($$v.$cg.$type,null))){return new $$t.hh(2,c.value())}throw $$v.$aq.m($$t.$hh.$type,a)},$type:new $.ig.Type("ST_SignedHpsMeasure",$$0.$bh.$type)},true);$c("ST_SignedTwipsMeasure:hi","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break;case 2:this.init2.apply(this,arguments);break;case 3:this.init3.apply(this,arguments);break}return}$$0.$bh.init.call(this)},c:$m($$0.$aw.$type,null),d:$m($$v.$cg.$type,null),init1:function(a,b){$$t.$hi.init2.call(this,2,$.ig.truncate(b))},init2:function(a,b){$$0.$bh.init.call(this);this.c=$m($$0.$aw.$type,b);this.d=$m($$v.$cg.$type,null)},init3:function(a,b){$$0.$bh.init.call(this);this.c=$m($$0.$aw.$type,null);this.d=$m($$v.$cg.$type,b)},toString:function(){if($l(this.c,null)){return this.c.value().toString()}if($$v.$cg.f(this.d,$m($$v.$cg.$type,null))){return this.d.toString()}return String.empty()},b:function(){if($l(this.c,null)){return this.c.value()}if($$v.$cg.f(this.d,$m($$v.$cg.$type,null))){return this.d.value().k()}return 0},a:function(a){var b;if(function(){var c=$ag(a,7,$$0.$cg.invariantCulture(),b);b=c.p3;return c.ret}()){return new $$t.hi(2,b)}var c=$$v.$cg.o(a);if($$v.$cg.f(c,$m($$v.$cg.$type,null))){return new $$t.hi(3,c.value())}throw $$v.$aq.m($$t.$hi.$type,a)},$type:new $.ig.Type("ST_SignedTwipsMeasure",$$0.$bh.$type)},true);$c("ST_TextFontSize:hu","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},d:0,init1:function(a,b){$$0.$bh.init.call(this);$$v.$aq.au($$t.$hu.$type,b,"value",100,4e5);this.d=b},c:function(a){return $$t.$hu.a($aj(a,7,$$0.$cg.invariantCulture()))},i:function(a){var b;if(function(){var c=$ag(a,7,$$0.$cg.invariantCulture(),b);b=c.p3;return c.ret}()){return $m($$t.$hu.$type,$$t.$hu.a(b))}return $m($$t.$hu.$type,null)},toString:function(){return this.d.toString()},e:function(a){return a.d},g:function(a){if(!a.hasValue()){return $m($$0.$aw.$type,null)}return $m($$0.$aw.$type,$$t.$hu.e(a.value()))},a:function(a){return new $$t.hu(1,a)},h:function(a){if(!a.hasValue()){return $m($$t.$hu.$type,null)}return $m($$t.$hu.$type,$$t.$hu.a(a.value()))},$type:new $.ig.Type("ST_TextFontSize",$$0.$bh.$type)},true);$c("ST_TrueFalse:h7","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},f:false,init1:function(a,b){$$0.$bh.init.call(this);this.f=b},d:function(a){switch(a){case"t":return $$t.$h7.b(true);case"f":return $$t.$h7.b(false)}return $$t.$h7.b($ar(a))},toString:function(){return this.f?"t":"f"},k:function(a){return a.toString()},g:function(a){return a.f},i:function(a){if(!a.hasValue()){return $m($$0.$aq.$type,null)}return $m($$0.$aq.$type,$$t.$h7.g(a.value()))},b:function(a){return new $$t.h7(1,a)},j:function(a){if(!a.hasValue()){return $m($$t.$h7.$type,null)}return $m($$t.$h7.$type,$$t.$h7.b(a.value()))},$type:new $.ig.Type("ST_TrueFalse",$$0.$bh.$type)},true);$c("ST_TrueFalseBlank:h8","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},c:false,init1:function(a,b){$$0.$bh.init.call(this);this.c=b},d:function(a){if(String.isNullOrEmpty(a)){return true}switch(a){case"t":case"True":return true;case"f":case"False":return false}throw $$v.$aq.m($$t.$h8.$type,a)},toString:function(){if(this.c){return String.empty()}return"False"},e:function(a){return a.toString()},f:function(a){return(a?$$t.$h8.b:$$t.$h8.a).toString()},$type:new $.ig.Type("ST_TrueFalseBlank",$$0.$bh.$type)},true);$c("ST_TwipsMeasure:h9","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break;case 2:this.init2.apply(this,arguments);break;case 3:this.init3.apply(this,arguments);break}return}$$0.$bh.init.call(this)},c:$m($$t.$ib.$type,null),d:$m($$t.$hb.$type,null),init1:function(a,b){$$t.$h9.init2.call(this,2,$$t.$ib.b($.ig.truncate($$v.$aq.i(b))))},init2:function(a,b){$$0.$bh.init.call(this);this.c=$m($$t.$ib.$type,b);this.d=$m($$t.$hb.$type,null)},init3:function(a,b){$$0.$bh.init.call(this);this.c=$m($$t.$ib.$type,null);this.d=$m($$t.$hb.$type,b)},toString:function(){if($l(this.c,null)){return this.c.value().toString()}if($l(this.d,null)){return this.d.value().toString()}return String.empty()},b:function(){if($l(this.c,null)){return $$t.$ib.h(this.c.value())}if($l(this.d,null)){return this.d.value().d()}return 0},a:function(a){var b=$$t.$ib.f(a);if($l(b,null)){return new $$t.h9(2,b.value())}var c=$$t.$hb.e(a);if($l(c,null)){return new $$t.h9(3,c.value())}throw $$v.$aq.m($$t.$h9.$type,a)},$type:new $.ig.Type("ST_TwipsMeasure",$$0.$bh.$type)},true);$c("ST_UcharHexNumber:ia","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},e:0,init1:function(a,b){$$0.$bh.init.call(this);this.e=b},d:function(a){return $$t.$ia.b($aq(a,515,$$0.$cg.invariantCulture()))},toString:function(){return $ah(this.e,"X2",$$0.$cg.invariantCulture())},b:function(a){return new $$t.ia(1,a)},i:function(a){if(!a.hasValue()){return $m($$t.$ia.$type,null)}return $m($$t.$ia.$type,$$t.$ia.b(a.value()))},f:function(a){return a.e},h:function(a){if(!a.hasValue()){return $m($$0.$ar.$type,null)}return $m($$0.$ar.$type,$$t.$ia.f(a.value()))},$type:new $.ig.Type("ST_UcharHexNumber",$$0.$bh.$type)},true);$c("ST_UnsignedIntHex:ic","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},g:0,init1:function(a,b){$$0.$bh.init.call(this);this.g=b},d:function(a){return $$t.$ic.b($.ig.util.parseUInt32_2(a,515,$$0.$cg.invariantCulture()))},toString:function(){return $ah(this.g,"X8",$$0.$cg.invariantCulture())},b:function(a){return new $$t.ic(1,a)},e:function(a){if(!a.hasValue()){return $m($$t.$ic.$type,null)}return $m($$t.$ic.$type,$$t.$ic.b(a.value()))},h:function(a){return a.g},f:function(a){if(!a.hasValue()){return $m($$0.$be.$type,null)}return $m($$0.$be.$type,$$t.$ic.h(a.value()))},$type:new $.ig.Type("ST_UnsignedIntHex",$$0.$bh.$type)},true);$c("ST_UnsignedShortHex:id","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$bh.init.call(this)},c:0,init1:function(a,b){$$0.$bh.init.call(this);this.c=b},d:function(a){return $.ig.util.parseUInt16_2(a,515,$$0.$cg.invariantCulture())},b:function(a){return new $$t.id(1,$$t.$id.d(a))},toString:function(){return $ah(this.c,"X4",$$0.$cg.invariantCulture())},e:function(){return this.c},$type:new $.ig.Type("ST_UnsignedShortHex",$$0.$bh.$type)},true);$c("XmlWriteManager:ih","Object",{a:null,c:null,b:null,w:null,init:function(a,b){$.ig.$op.init.call(this);this.c=new $$4.w(String,0);this.a=a.d();this.b=a;this.w=b},d:function(a){return this.w.a(a.i(this.a._y()))},e:function(a,b,c,d){var e=a.lastIndexOf("/");if(e<0){c=a;d="";b=String.empty();return{p1:b,p2:c,p3:d}}c=a.substr(e+1);d=a.substr(0,e);if(this.a._y()!=1){var f=this.a._t(d);if(f!=null){d=f.i(this.a._y())}}b=this.w.a(d);if(String.isNullOrEmpty(b)){var g=d+"/";b=this.w.a(g);if(String.isNullOrEmpty(b)==false){d=g}}return{p1:b,p2:c,p3:d}},f:function(){if(this.c.count()==0){return}this.l($$t.$iu.an,false);this.h($$t.$iu.as,$.ig.util.stringJoin1(String," ",this.c));this.c.clear()},g:function(a,b){var $self=this;var c=new $$4.p($$t.$i4.$type,0);var e=a.getEnumerator();while(e.moveNext()){var d=e.current();var g=$$5.$e.u($$t.$i4.$type,d._b,function(h){return $self.d(h)==null}).getEnumerator();while(g.moveNext()){var f=g.current();c.add(f)}}$$t.$iu.ay(this.b);var i=c.getEnumerator();while(i.moveNext()){var h=i.current();this.l(h,false)}var k=a.getEnumerator();while(k.moveNext()){var j=k.current();$$t.$iu.az(this.b,j._b);j._a();this.k()}if(b!=null){$$t.$iu.a1(this.b);b();this.k()}this.k()},h:function(a,b){if(b==null){return}var c;var d;var e;var f=this.e(a,c,d,e);c=f.p1;d=f.p2;e=f.p3;this.i(c,d,e,b)},i:function(a,b,c,d){this.w.j(a,b,c,d)},j:function(a,b){this.w.h(a,b)},k:function(){this.f();this.w.v()},o:function(a){this.p(a,null)},p:function(a,b){var c;var d;var e;var f=this.e(a,c,d,e);c=f.p1;d=f.p2;e=f.p3;this.q(c!=null?c:b,d,e)},q:function(a,b,c){this.f();this.w.ao(a,b,c)},r:function(a){this.w.am(a)},l:function(a,b){this.m(a.j(),a.i(this.a._y()),b)},m:function(a,b,c){var d=b;if(this.a._y()!=1){var e=this.a._t(b);if(e!=null){d=e.i(this.a._y())}}this.w.j("xmlns",a,"http://www.w3.org/2000/xmlns/",d);if(c){this.c.add(a)}},n:function(a){this.f();this.w.ah(a)},t:function(a){this.f();var b=new $$4.z($$t.$fs.$type);this.s(a.b(),b)},s:function(a,b){var c=this.b.y(a,b);var t1=c;L0:while(true){switch(t1){case 0:{var d=a.b().b(this.a);this.q(d.h,d.f,d.g);if(a.d()){var f=a.j().getEnumerator();while(f.moveNext()){var e=f.current();var g=e.a.b(this.a);this.i(g.h,g.f,g.g,e.d)}}if(a.p()!=null){this.u(a.p())}}t1=1;continue L0;case 1:{if(a.e()){b.push(a);var i=a.k().getEnumerator();while(i.moveNext()){var h=i.current();this.s(h,b)}b.pop()}this.k()}break;case 2:break;default:t1=0;continue L0}break}},u:function(a){this.f();this.w.ap(a)},v:function(a,b,c){this.f();var d=new $$6.aj(2,'version="'+a+'"');if(b.length>0){d.l(' encoding="');d.l(b);d.l('"')}if(c.length>0){d.l(' standalone="');d.l(c);d.l('"')}var e=d.toString();this.w.ad("xml",e)},$type:new $.ig.Type("XmlWriteManager",$.ig.$ot)},true);$c("PartManagerBase:jo","Object",{c:null,k:null,init:function(){$.ig.$op.init.call(this)},a:function(){},b:function(a){},e:function(a,b){var c=this.memberwiseClone();c.k=b;c.c=a;c.p();return c},j:function(){return null},n:function(a){},f:function(a,b){return null},o:function(a){},p:function(){},q:function(){},i:function(a){return false},m:function(){},d:function(){return this.c},g:function(){},h:function(){return true},l:function(a){if(arguments.length===1){this.k=a;return a}else{return this.k}},$type:new $.ig.Type("PartManagerBase",$.ig.$ot)},true);$c("ActiveXBinaryPartManager:i7","PartManagerBase",{init:function(){$$t.$jo.init.call(this)},m:function(){return"application/vnd.ms-office.activeX"},n:function(a){switch(a){case 0:return"/xl/activeX.bin";default:return null}},o:function(a){switch(a){case 0:return $$t.$i7.u;case 1:return $$t.$i7.t;default:return $$t.$i7.u}},g:function(){return true},$type:new $.ig.Type("ActiveXBinaryPartManager",$$t.$jo.$type)},true);$c("ActiveXPartManager:i8","PartManagerBase",{init:function(){$$t.$jo.init.call(this)},m:function(){return"application/vnd.ms-office.activeX+xml"},n:function(a){switch(a){case 0:return"/xl/activeX.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$i8.u;case 1:return $$t.$i8.t;default:return $$t.$i8.u}},g:function(){return true},$type:new $.ig.Type("ActiveXPartManager",$$t.$jo.$type)},true);$c("ImagePartManagerBase:jm","PartManagerBase",{init:function(){$$t.$jo.init.call(this)},n:function(a){switch(a){case 0:return this.s();case 1:return this.u();case 2:return this.t();default:return null}},o:function(a){return $$t.$jm.v(a)},g:function(){return true},a:function(){return $$v.$i.g($.ig.$op.$type,new $$v.ak(1,this.r(this.d()._d().uri().toString()),this.l()))},h:function(){return false},b:function(a){var b=$b($$v.$ak.$type,a);if(b!=null){b.f(this.l())}return null},s:function(){},t:function(){},u:function(){},r:function(a){},v:function(a){switch(a){case 0:return $$t.$jm.x;case 1:return $$t.$jm.w;default:return $$t.$jm.x}},$type:new $.ig.Type("ImagePartManagerBase",$$t.$jo.$type)},true);$c("BmpPartManager:i9","ImagePartManagerBase",{aa:false,init:function(a){$$t.$jm.init.call(this);this.aa=a},s:function(){return this.aa?"/xl/media/image.dib":"/xl/media/image.bmp"},t:function(){return this.aa?"/ppt/media/image.dib":"/ppt/media/image.bmp"},u:function(){return this.aa?"/word/media/image.dib":"/word/media/image.bmp"},m:function(){return"image/bmp"},r:function(a){var b=$$7.$b.getExtension(a);if(b.toLowerCase()==".dib"){return $$v.$cq.b}return $$v.$cq.a},$type:new $.ig.Type("BmpPartManager",$$t.$jm.$type)},true);$c("XmlPartManagerBase:jx","PartManagerBase",{r:null,al:null,ak:0,aa:null,ac:null,init:function(){this.v=new $$t.fk(0);$$t.$jo.init.call(this);this.al={}},p:function(){$$t.$jo.p.call(this);var a=this.al;this.al={};for(p in a){if(a.hasOwnProperty(p)){this.al[p]=a[p]}}},a:function(){var $self=this;return $$v.$h.i($.ig.$op.$type,function(){$self.r=new $$v.ai;return $self.t()},function(){$self.r=null;$self.aa=null})},b:function(a){var $self=this;this.r=new $$v.ai;if(a!=null){this.r.j(a)}return $$v.$h.n($$2.$a2.$type,this.a0(),function(b){$self.ac=new $$t.ih($self,b);if($self.ai()){$self.ac.v("1.0","UTF-8","yes")}return $self.u(a)})},ar:function(){this.ak++},as:function(){this.ak--;if(this.ak==0){this._ae=false}},aq:function(a){},w:function(a){return this.x(a.e(this.d()))},v:null,x:function(a){return this.al[a]||this.v},z:function(a){this.d()._be();return 0},at:function(a){},au:function(a){},av:function(a){},aw:function(a,b){switch(a){case $$t.$iu.ap:case $$t.$iu.aq:case $$t.$iu.ar:return}var c=this.al[a];var d=c?new $$t.fk(1,c.b,b):new $$t.fk(1,null,b);this.al[a]=d},ax:function(a,b){switch(a){case $$t.$iu.ap:case $$t.$iu.aq:case $$t.$iu.ar:return}var c=this.al[a];var d=c?new $$t.fk(1,b,c.a):new $$t.fk(1,b,null);this.al[a]=d},ag:function(a){if(String.isNullOrEmpty(a)){return true}var b=a.split(" ");for(var d=0;d<b.length;d++){var c=b[d];var e=this.aa.ae(c);if(String.isNullOrEmpty(e)){continue}if(this.d()._ac(e)==false){return false}}return true},ah:function(a){return this.s().c()==false},y:function(a,b){return 0},ay:function(a){var b=this.aa.k.e(this.d())},az:function(){return new $$2.ar(1,this.l())},a0:function(){return new $$2.ax(0,this.l(),$$8.$a.uTF8())},t:function(){var $self=this;return $$v.$o.g($.ig.$op.$type,$$v.$h.n($$2.$al.$type,this.az(),function(a){return $$v.$h.g(a.t(),function(){$self.aa=new $$t.fv($self,a);return $self.aa.d()},null)}),function(){return $self._am},0)},u:function(a){},s:function(){return this.r},_am:null,_ae:false,af:function(){return this.ak!=0},ai:function(){return true},ab:function(){return this.aa},ad:function(){return this.ac},$type:new $.ig.Type("XmlPartManagerBase",$$t.$jo.$type)},true);$c("CorePropertiesPartManager:ja","XmlPartManagerBase",{init:function(){$$t.$jx.init.call(this)},m:function(){return $$t.$ja.a1},n:function(a){return"/docProps/core.xml"},o:function(a){switch(a){case 0:return $$t.$ja.a4;case 1:return $$t.$ja.a3;default:return $$t.$ja.a4}},g:function(){return false},$type:new $.ig.Type("CorePropertiesPartManager",$$t.$jx.$type)},true);$c("CustomXmlItemPartManager:jb","PartManagerBase",{init:function(){$$t.$jo.init.call(this)},m:function(){return"application/xml"},n:function(a){switch(a){case 0:return"/customXml/item.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$jb.u;case 1:return $$t.$jb.t;default:return $$t.$jb.u}},g:function(){return true},$type:new $.ig.Type("CustomXmlItemPartManager",$$t.$jo.$type)},true);$c("CustomXmlItemPropsPartManager:jc","PartManagerBase",{init:function(){$$t.$jo.init.call(this)},m:function(){return $$t.$jc.s},n:function(a){switch(a){case 0:return"/customXml/itemProps.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$jc.u;case 1:return $$t.$jc.t;default:return $$t.$jc.u}},g:function(){return true},$type:new $.ig.Type("CustomXmlItemPropsPartManager",$$t.$jo.$type)},true);$c("DownRevPartManager:jd","XmlPartManagerBase",{init:function(){$$t.$jx.init.call(this)},m:function(){return $$t.$jd.a1},n:function(a){return"/drs/downrev.xml"},o:function(a){switch(a){case 0:return $$t.$jd.a3;case 1:return $$t.$jd.a3;default:return $$t.$jd.a3}},g:function(){return false},$type:new $.ig.Type("DownRevPartManager",$$t.$jx.$type)},true);$c("DrawingPartManagerHelpers:je","Object",{init:function(){$.ig.$op.init.call(this)},a:function(a,b){var c=a.s().a($$t.$bp.$type);if(c!=null){c._a=b;return}var d=a.s().a($$t.$dp.$type);if(d!=null){d._a=b;return}var e=a.s().a($$t.$ds.$type);if(e!=null){e._a=b;return}var f=a.s().a($$t.$b2.$type);if(f!=null){f._a=b;return}},b:function($t,a,b){var c=$b($$t.$cm.$type,a.s().f());if(c!=null){c._d=b;return}var d=$b($$t.$dl.$type,a.s().f());if(d!=null){d._a=b;return}var e=$b($$t.$dw.$type,a.s().f());if(e!=null){e._f=b;return}},c:function($t,a,b){var c=$b($$t.$dl.$type,a.s().f());if(c!=null){c._a=b;return}},g:function(a){var b=a.s().a($$t.$db.$type);if(b==null){return}var c=new $$t.b4;b._a=c;a.s().j(c)},d:function(a){var b=a.s().a($$t.$d3.$type);if(b==null){return}var c=new $$t.g9;var d=$$t.$iq.gl(a,c);c=d.p1;b.b().add(function(){var $ret=new $$t.eu;$ret._a=c;return $ret}())},e:function(a){var b=a.s().a($$t.$d3.$type);if(b==null){return}var c=new $$t.ha;var d=$$t.$iq.gm(a,c);c=d.p1;b.b().add(function(){var $ret=new $$t.ew;
$ret._a=c;return $ret}())},f:function(a){var b=a.s().a($$t.$d3.$type);if(b==null){return}var c=new $$t.gl;var d=$$t.$iq.gn(a,c);c=d.p1;b.b().add(function(){var $ret=new $$t.ev;$ret._a=c;return $ret}())},h:function(a){var b=a.s().a($$t.$bo.$type);if(b==null){return}var c;var d;var e;var f=$$t.$iq.gp(a,c,d,e);c=f.p1;d=f.p2;e=f.p3;var g=function(){var $ret=new $$t.bn;$ret._b=c;$ret._c=d;$ret._a=e;return $ret}();b._a=g;a.s().j(g)},i:function(a){var b=a.s().a($$t.$c4.$type);if(b!=null){var c;var d;var e=a.d()._s().b4(a,c,d);c=e.p1;d=e.p2;var f=function(){var $ret=new $$t.bo;$ret._d=c;$ret._e=d;return $ret}();b._a=f;a.s().j(f);return}else{var g;var h;var i=$$t.$iq.gq(a,g,h);g=i.p1;h=i.p2;var j=function(){var $ret=new $$t.bo;$ret._d=g;$ret._e=h;return $ret}();$$t.$je.c($$t.$bo.$type,a,j);a.s().j(j)}},j:function(a){var b=a.s().a($$t.$d3.$type);if(b==null){return}var c=new $$t.g6;var d=$$t.$iq.gr(a,c);c=d.p1;b.b().add(function(){var $ret=new $$t.ex;$ret._a=c;return $ret}())},k:function(a){var b=a.s().a($$t.$d3.$type);if(b==null){return}var c=new $$t.g6;var d=$$t.$iq.gs(a,c);c=d.p1;b.b().add(function(){var $ret=new $$t.ez;$ret._a=c;return $ret}())},l:function(a){var b=a.s().a($$t.$d3.$type);if(b==null){return}var c=new $$t.g6;var d=$$t.$iq.gt(a,c);c=d.p1;b.b().add(function(){var $ret=new $$t.ey;$ret._a=c;return $ret}())},m:function(a){var b=a.s().a($$t.$du.$type);if(b==null){return}var c;var d;var e;var f;var g;var h;var i;var j;var k;var l;var m;var n;var o;var p;var q;var r;var s;var t;var u;var v=$$t.$iq.gu(a,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u);c=v.p1;d=v.p2;e=v.p3;f=v.p4;g=v.p5;h=v.p6;i=v.p7;j=v.p8;k=v.p9;l=v.p10;m=v.p11;n=v.p12;o=v.p13;p=v.p14;q=v.p15;r=v.p16;s=v.p17;t=v.p18;u=v.p19;b._a=function(){var $ret=new $$t.dv;$ret._n=c;$ret._l=d;$ret._q=e;$ret._p=f;$ret._t=g;$ret._r=h;$ret._j=i;$ret._s=j;$ret._m=k;$ret._f=l;$ret._k=m;$ret._o=n;$ret._a=o;$ret._i=p;$ret._d=q;$ret._e=r;$ret._h=s;$ret._c=t;$ret._g=u;return $ret}();a.s().j(b._a)},n:function(a){var b=a.s().a($$t.$b6.$type);if(b==null){return}var c;var d=$$t.$ip.as(a,c);c=d.p1;b.b().add($$6.$w.a(String,$.ig.$op.$type,$$t.$ip.ap,function(){var $ret=new $$t.de;$ret._a=c;return $ret}()))},o:function(a){var b=a.s().a($$v.$b5.$type);if(b==null){return}var c=new $$v.b7;var d=new $$v.b7;var e=$$t.$iq.gv(a,c,d);c=e.p1;d=e.p2;var f=function(){var $ret=new $$v.b8;$ret._a=c;$ret._b=d;return $ret}();b._g=f;a.s().j(f)},p:function(a){var b=a.s().a($$v.$b5.$type);if(b==null){return}var c=new $$v.cd;var d=new $$v.cd;var e=$$t.$iq.gw(a,c,d);c=e.p1;d=e.p2;var f=function(){var $ret=new $$v.b6;$ret._a=c;$ret._b=d;return $ret}();b._f=f;a.s().j(f)},q:function(a){var b=a.s().a($$t.$bw.$type);if(b==null){return}var c=new $$t.cp;b._b=c;a.s().j(c)},r:function(a){var b=a.s().a($$t.$b9.$type);if(b==null){return}var c=new $$t.cr;b._b=c;a.s().j(c)},s:function(a){var b=a.s().a($$t.$ce.$type);if(b==null){return}var c=new $$t.cs;b._b=c;a.s().j(c)},t:function(a){var b=a.s().a($$t.$c6.$type);if(b==null){return}var c;var d=a.d()._s().b8(a,c);c=d.p1;var e=function(){var $ret=new $$t.ct;$ret._b=c;return $ret}();b._b=e;a.s().j(e)},u:function(a){var b=a.s().a($$t.$co.$type);if(b==null){return}var c=new $$t.gf;var d;var e;var f;var g;var h=a.d()._s().b9(a,c,d,e,f,g);c=h.p1;d=h.p2;e=h.p3;f=h.p4;g=h.p5;var i=function(){var $ret=new $$t.cq;$ret._c=c;$ret._f=d;$ret._e=e;$ret._d=f;$ret._g=g;return $ret}();b._a=i;a.s().j(i)},v:function(a){var b=a.s().a($$t.$dj.$type);if(b==null){return}var c;var d=a.d()._s().ca(a,c);c=d.p1;var e=function(){var $ret=new $$t.cu;$ret._b=c;return $ret}();b._b=e;a.s().j(e)},y:function(a){var b=a.s().a($$t.$et.$type);var c;var d;var e=a.d()._s().cc(a,c,d);c=e.p1;d=e.p2;var f=function(){var $ret=new $$t.bu;$ret._c=c;$ret._b=d;return $ret}();if(b!=null){b.addShape(a.d(),f)}a.s().j(f)},w:function(a){var b=a.s().a($$t.$d3.$type);if(b==null){return}b.b().add(new $$t.e0)},x:function(a){var b=a.s().a($$t.$dw.$type);if(b==null){return}var c;var d;var e;var f;var g=$$t.$iq.gz(a,c,d,e,f);c=g.p1;d=g.p2;e=g.p3;f=g.p4;var h=function(){var $ret=new $$t.dx;$ret._d=c;$ret._a=d;$ret._b=e;$ret._c=f;return $ret}();b._c=h;a.s().j(h)},z:function(a){var b=a.s().a($$t.$cp.$type);if(b==null){return}var c;var d;var e;var f;var g;var h;var i;var j;var k;var l;var m=a.d()._s().cd(a,c,d,e,f,g,h,i,j,k,l);c=m.p1;d=m.p2;e=m.p3;f=m.p4;g=m.p5;h=m.p6;i=m.p7;j=m.p8;k=m.p9;l=m.p10;var n=function(){var $ret=new $$t.bv;$ret._f=c;$ret._j=d;$ret._i=e;$ret._c=f;$ret._g=g;$ret._h=h;$ret._e=i;$ret._a=j;$ret._b=k;$ret._d=l;return $ret}();b._c=n;a.s().j(n)},aa:function(a){var b=a.s().a($$t.$dw.$type);if(b==null){return}var c;var d;var e;var f;var g=$$t.$iq.hi(a,c,d,e,f);c=g.p1;d=g.p2;e=g.p3;f=g.p4;var h=function(){var $ret=new $$t.dx;$ret._d=c;$ret._a=d;$ret._b=e;$ret._c=f;return $ret}();b._d=h;a.s().j(h)},ab:function(a){var b=a.s().a($$t.$dm.$type);if(b==null){return}var c;var d=$$t.$iq.hj(a,c);c=d.p1;var e=function(){var $ret=new $$t.ds;$ret._b=c;return $ret}();b._b=e;a.s().j(e)},ac:function(a){var b=a.s().a($$t.$cp.$type);if(b==null){return}var c;var d;var e=a.d()._s().ce(a,c,d);c=e.p1;d=e.p2;var f=function(){var $ret=new $$t.br;$ret._a=c;$ret._b=d;return $ret}();b._a=f;a.s().j(f)},ad:function(a){var b=a.s().a($$v.$ca.$type);if(b==null){return}var c=new $$v.b7;var d=new $$v.b7;var e=$$t.$iq.hk(a,c,d);c=e.p1;d=e.p2;var f=function(){var $ret=new $$v.b8;$ret._a=c;$ret._b=d;return $ret}();b._b=f;a.s().j(f)},ae:function(a){a.s().j($$v.$cb.a)},af:function(a){var b=a.s().a($$t.$dr.$type);if(b==null){return}var c=new $$t.g6;var d=new $$t.g6;var e=new $$t.g6;var f=new $$t.g6;var g=$$t.$iq.ho(a,c,d,e,f);c=g.p1;d=g.p2;e=g.p3;f=g.p4;var h=function(){var $ret=new $$t.df;$ret._b=c;$ret._d=d;$ret._c=e;$ret._a=f;return $ret}();b._a=h;a.s().j(h)},ag:function(a){var b=a.s().a($$t.$dm.$type);if(b==null){return}var c;var d=$$t.$iq.hp(a,c);c=d.p1;var e=function(){var $ret=new $$t.ds;$ret._b=c;return $ret}();b._c=e;a.s().j(e)},ah:function(a){var b=a.s().a($$t.$dm.$type);if(b==null){return}var c;var d=$$t.$iq.hs(a,c);c=d.p1;var e=function(){var $ret=new $$t.b2;$ret._b=c;return $ret}();b._a=e;a.s().j(e)},ai:function(a){var b=a.s().a($$t.$b4.$type);if(b==null){return}var c;var d;var e=$$t.$iq.hu(a,c,d);c=e.p1;d=e.p2;var f=function(){var $ret=new $$t.b3;$ret._b=c;$ret._a=d;return $ret}();b.b().add(f);a.s().j(f)},ak:function(a){var b=a.s().a($$t.$b7.$type);var c=new $$t.bi;if(b!=null){b._a=c}a.s().j(c)},aj:function(a){var b=a.s().a($$t.$bi.$type);if(b==null){return}var c;var d=$$t.$iq.hv(a,c);c=d.p1;var e=function(){var $ret=new $$t.b6;$ret._c=c;return $ret}();b._a=e;a.s().j(e)},al:function(a){var b=a.s().a($$t.$et.$type);var c;var d;var e=a.d()._s().cf(a,c,d);c=e.p1;d=e.p2;var f=function(){var $ret=new $$t.b7;$ret._e=c;$ret._d=d;return $ret}();if(b!=null){b.addShape(a.d(),f)}a.s().j(f)},am:function(a){var b=$$5.$e.ag($$t.$bh.$type,a.ab().u,function(c){return c.a.e(a.d())==$$t.$it.ap});if(b.d==null||$$t.$g2.e(b.d)==false){a.d()._be()}},an:function(a){var b=a.s().a($$t.$d3.$type);if(b==null){return}b.b().add(new $$t.e1)},ao:function(a){var b=a.s().a($$t.$d3.$type);if(b==null){return}var c=new $$t.g6;var d=$$t.$iq.hz(a,c);c=d.p1;b.b().add(function(){var $ret=new $$t.e2;$ret._a=c;return $ret}())},ap:function(a){var b=a.s().a($$t.$d3.$type);if(b==null){return}var c=new $$t.g6;var d=$$t.$iq.h0(a,c);c=d.p1;b.b().add(function(){var $ret=new $$t.e4;$ret._a=c;return $ret}())},aq:function(a){var b=a.s().a($$t.$d3.$type);if(b==null){return}var c=new $$t.g6;var d=$$t.$iq.h1(a,c);c=d.p1;b.b().add(function(){var $ret=new $$t.e3;$ret._a=c;return $ret}())},ar:function(a){var b=new $$t.cb;$$t.$je.c($$t.$cb.$type,a,b);a.s().j(b)},as:function(a){var b=a.s().a($$t.$et.$type);var c=new $$t.cd;if(b!=null){b.addShape(a.d(),c)}a.s().j(c)},at:function(a){var b=a.s().a($$t.$cs.$type);if(b==null){return}var c;var d;var e;var f;var g;var h;var i;var j=a.d()._s().ch(a,c,d,e,f,g,h,i);c=j.p1;d=j.p2;e=j.p3;f=j.p4;g=j.p5;h=j.p6;i=j.p7;var k=function(){var $ret=new $$t.cc;$ret._b=c;$ret._g=d;$ret._f=e;$ret._e=f;$ret._a=g;$ret._c=h;$ret._d=i;return $ret}();b._a=k;a.s().j(k)},au:function(a){var b=a.s().a($$t.$cd.$type);if(b==null){return}var c;var d=a.d()._s().ci(a,c);c=d.p1;var e=function(){var $ret=new $$t.cf;$ret._b=c;return $ret}();b._b=e;a.s().j(e)},av:function(a){var b=a.s().a($$t.$cm.$type);if(b==null){return}var c;var d;var e;var f=$$t.$iq.h3(a,c,d,e);c=f.p1;d=f.p2;e=f.p3;var g=function(){var $ret=new $$t.ci;$ret._b=c;$ret._c=d;$ret._a=e;return $ret}();b._a=g;a.s().j(g)},aw:function(a){var b=a.s().a($$t.$d3.$type);if(b==null){return}var c=new $$t.g8;var d=$$t.$iq.h6(a,c);c=d.p1;b.b().add(function(){var $ret=new $$t.e5;$ret._a=c;return $ret}())},ax:function(a){var b=a.s().a($$t.$d3.$type);if(b==null){return}var c=new $$t.ha;var d=$$t.$iq.h7(a,c);c=d.p1;b.b().add(function(){var $ret=new $$t.e7;$ret._a=c;return $ret}())},ay:function(a){var b=a.s().a($$t.$d3.$type);if(b==null){return}var c=new $$v.cc;var d=$$t.$iq.h8(a,c);c=d.p1;b.b().add(function(){var $ret=new $$t.e6;$ret._a=c;return $ret}())},az:function(a){var b=a.s().a($$t.$d3.$type);if(b==null){return}b.b().add(new $$t.e8)},a0:function(a){var b=a.s().a($$t.$dw.$type);if(b==null){return}var c;var d;var e;var f;var g=$$t.$iq.ia(a,c,d,e,f);c=g.p1;d=g.p2;e=g.p3;f=g.p4;var h=function(){var $ret=new $$t.dx;$ret._d=c;$ret._a=d;$ret._b=e;$ret._c=f;return $ret}();b._e=h;a.s().j(h)},a1:function(a){var b=a.s().a($$t.$dk.$type);if(b==null){return}var c;var d;var e;var f;var g=$$t.$iq.ib(a,c,d,e,f);c=g.p1;d=g.p2;e=g.p3;f=g.p4;var h=function(){var $ret=new $$t.cm;$ret._i=c;$ret._g=d;$ret._h=e;$ret._f=f;return $ret}();b._c=h;a.s().j(h)},a2:function(a){var b=a.s().a($$t.$dm.$type);if(b==null){return}var c;var d=$$t.$iq.ic(a,c);c=d.p1;var e=function(){var $ret=new $$t.ds;$ret._b=c;return $ret}();b._d=e;a.s().j(e)},a3:function(a){var b=a.s().a($$t.$d3.$type);if(b==null){return}var c=new $$t.g6;var d=$$t.$iq.ih(a,c);c=d.p1;b.b().add(function(){var $ret=new $$t.e9;$ret._a=c;return $ret}())},a4:function(a){var b=a.s().a($$t.$d3.$type);if(b==null){return}var c=new $$t.g6;var d=$$t.$iq.ii(a,c);c=d.p1;b.b().add(function(){var $ret=new $$t.fb;$ret._a=c;return $ret}())},a5:function(a){var b=a.s().a($$t.$d3.$type);if(b==null){return}var c=new $$t.g6;var d=$$t.$iq.ij(a,c);c=d.p1;b.b().add(function(){var $ret=new $$t.fa;$ret._a=c;return $ret}())},a6:function(a){var b=new $$t.cn;$$t.$je.b($$t.$cn.$type,a,b);a.s().j(b)},a7:function(a){var b=a.s().a($$t.$bu.$type);if(b==null){return}var c=new $$t.bw;b._a=c;a.s().j(c)},a8:function(a){var b=a.s().a($$t.$b7.$type);if(b==null){return}var c=new $$t.b9;b._b=c;a.s().j(c)},a9:function(a){var b=a.s().a($$t.$cd.$type);if(b==null){return}var c=new $$t.ce;b._a=c;a.s().j(c)},ba:function(a){var b=a.s().a($$t.$c4.$type);if(b==null){return}var c=new $$t.c6;b._b=c;a.s().j(c)},bb:function(a){var b=a.s().a($$t.$dh.$type);if(b==null){return}var c=new $$t.dj;b._a=c;a.s().j(c)},bc:function(a){var b=a.s().a($$v.$ca.$type);if(b==null){return}var c=new $$v.cd;var d=new $$v.cd;var e=$$t.$iq.ip(a,c,d);c=e.p1;d=e.p2;var f=function(){var $ret=new $$v.b6;$ret._a=c;$ret._b=d;return $ret}();b._a=f;a.s().j(f)},bd:function(a){var b=a.s().a($$t.$du.$type);if(b==null){return}var c=new $$t.dz;b.d().add(c);a.s().j(c)},be:function(a){var b=a.s().a($$t.$et.$type);var c;var d;var e=a.d()._s().co(a,c,d);c=e.p1;d=e.p2;var f=function(){var $ret=new $$t.c4;$ret._d=c;$ret._c=d;return $ret}();if(b!=null){b.addShape(a.d(),f)}a.s().j(f)},bf:function(a){var b=a.s().a($$t.$ct.$type);if(b==null){return}var c;var d;var e;var f;var g;var h;var i;var j;var k;var l;var m;var n=$$t.$iq.ir(a,c,d,e,f,g,h,i,j,k,l,m);c=n.p1;d=n.p2;e=n.p3;f=n.p4;g=n.p5;h=n.p6;i=n.p7;j=n.p8;k=n.p9;l=n.p10;m=n.p11;var o=function(){var $ret=new $$t.c5;$ret._g=c;$ret._k=d;$ret._j=e;$ret._c=f;$ret._h=g;$ret._i=h;$ret._f=i;$ret._a=j;$ret._b=k;$ret._d=l;$ret._e=m;return $ret}();b._a=o;a.s().j(o)},bg:function(a){var b=a.s().a($$t.$dz.$type);if(b==null){return}var c;var d;var e;var f;var g;var h;var i;var j;var k;var l;var m;var n=$$t.$iq.is(a,c,d,e,f,g,h,i,j,k,l,m);c=n.p1;d=n.p2;e=n.p3;f=n.p4;g=n.p5;h=n.p6;i=n.p7;j=n.p8;k=n.p9;l=n.p10;m=n.p11;var o=function(){var $ret=new $$t.d0;$ret._i=c;$ret._j=d;$ret._h=e;$ret._f=f;$ret._a=g;$ret._b=h;$ret._k=i;$ret._c=j;$ret._d=k;$ret._g=l;$ret._e=m;return $ret}();b._a=o;a.s().j(o)},bh:function(a){var b=a.s().a($$t.$dk.$type);if(b==null){return}var c;var d=$$t.$iq.it(a,c);c=d.p1;var e=function(){var $ret=new $$t.db;$ret._b=c;return $ret}();b._e=e;a.s().j(e)},bi:function(a){var b=a.s().a($$t.$d3.$type);if(b==null){return}var c=new $$t.g6;var d=$$t.$iq.iu(a,c);c=d.p1;b.b().add(function(){var $ret=new $$t.fc;$ret._a=c;return $ret}())},bj:function(a){var b=a.s().a($$t.$d3.$type);if(b==null){return}var c=new $$t.g6;var d=$$t.$iq.iv(a,c);c=d.p1;b.b().add(function(){var $ret=new $$t.fe;$ret._a=c;return $ret}())},bk:function(a){var b=a.s().a($$t.$d3.$type);if(b==null){return}var c=new $$t.g6;var d=$$t.$iq.iw(a,c);c=d.p1;b.b().add(function(){var $ret=new $$t.fd;$ret._a=c;return $ret}())},bl:function(a){var b=a.s().a($$t.$dz.$type);if(b==null){return}var c=new $$t.dd;b.c().add(c);a.s().j(c)},bm:function(a){var b=a.s().a($$t.$dd.$type);if(b==null){return}var c;var d;var e;var f;var g;var h;var i;var j;var k;var l;var m;var n;var o;var p;var q;var r;var s;var t;var u;var v=$$t.$iq.iy(a,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u);c=v.p1;d=v.p2;e=v.p3;f=v.p4;g=v.p5;h=v.p6;i=v.p7;j=v.p8;k=v.p9;l=v.p10;m=v.p11;n=v.p12;o=v.p13;p=v.p14;q=v.p15;r=v.p16;s=v.p17;t=v.p18;u=v.p19;var w=function(){var $ret=new $$t.dw;$ret._o=c;$ret._x=d;$ret._v=e;$ret._t=$$t.$hu.g(f);$ret._j=g;$ret._m=h;$ret._u=i;$ret._s=j;$ret._n=k;$ret._l=l;$ret._r=m;$ret._q=n;$ret._k=o;$ret._p=p;$ret._g=q;$ret._h=r;$ret._i=s;$ret._y=t;$ret._w=u;return $ret}();b._a=w;a.s().j(w)},bn:function(a){var b=a.s().a($$t.$d3.$type);if(b==null){return}var c=new $$t.g6;var d=$$t.$iq.iz(a,c);c=d.p1;b.b().add(function(){var $ret=new $$t.ff;$ret._a=c;return $ret}())},bo:function(a){var b=a.s().a($$t.$d3.$type);if(b==null){return}var c=new $$t.g6;var d=$$t.$iq.i0(a,c);c=d.p1;b.b().add(function(){var $ret=new $$t.fh;$ret._a=c;return $ret}())},bp:function(a){var b=a.s().a($$t.$d3.$type);if(b==null){return}var c=new $$t.g6;var d=$$t.$iq.i1(a,c);c=d.p1;b.b().add(function(){var $ret=new $$t.fg;$ret._a=c;return $ret}())},bq:function(a){var b;var c=$$t.$iq.i2(a,b);b=c.p1;var d=function(){var $ret=new $$t.dg;$ret._c=b;return $ret}();a.s().j(d);$$t.$je.a(a,d)},br:function(a){var b=a.s().a($$t.$d3.$type);if(b==null){return}var c=new $$t.g9;var d=$$t.$iq.i3(a,c);c=d.p1;b.b().add(function(){var $ret=new $$t.fi;$ret._a=c;return $ret}())},bs:function(a){var b=a.s().a($$t.$b6.$type);if(b==null){return}var c;var d=$$t.$io.at(a,c);c=d.p1;b.b().add($$6.$w.a(String,$.ig.$op.$type,$$t.$io.as,function(){var $ret=new $$t.dn;$ret._a=c;return $ret}()))},bt:function(a){var b=new $$t.dp;$$t.$je.b($$t.$dp.$type,a,b);a.s().j(b)},bu:function(a){var b=a.s().a($$t.$et.$type);var c;var d;var e;var f;var g=a.d()._s().cp(a,c,d,e,f);c=g.p1;d=g.p2;e=g.p3;f=g.p4;var h=function(){var $ret=new $$t.dh;$ret._e=c;$ret._f=d;$ret._c=e;$ret._d=f;return $ret}();if(b!=null){b.addShape(a.d(),h)}a.s().j(h)},bv:function(a){var b=a.s().a($$t.$cu.$type);if(b==null){return}var c;var d;var e;var f;var g;var h;var i;var j;var k;var l;var m;var n=$$t.$iq.i5(a,c,d,e,f,g,h,i,j,k,l,m);c=n.p1;d=n.p2;e=n.p3;f=n.p4;g=n.p5;h=n.p6;i=n.p7;j=n.p8;k=n.p9;l=n.p10;m=n.p11;var o=function(){var $ret=new $$t.di;$ret._f=c;$ret._j=d;$ret._i=e;$ret._c=f;$ret._g=g;$ret._h=h;$ret._e=i;$ret._a=j;$ret._b=k;$ret._d=l;$ret._k=m;return $ret}();b._a=o;a.s().j(o)},bw:function(a){var b=a.s().a($$t.$er.$type);if(b==null){return}var c;var d=a.d()._s().cq(a,c);c=d.p1;var e=function(){var $ret=new $$t.dk;$ret._b=c;return $ret}();b.spPr(e);a.s().j(e)},bx:function(a){var b=a.s().a($$t.$bo.$type);if(b==null){return}var c=new $$t.g6;var d=new $$t.g6;var e=new $$t.g6;var f=new $$t.g6;var g=$$t.$iq.i6(a,c,d,e,f);c=g.p1;d=g.p2;e=g.p3;f=g.p4;var h=function(){var $ret=new $$t.df;$ret._b=c;$ret._d=d;$ret._c=e;$ret._a=f;return $ret}();b._b=h;a.s().j(h)},by:function(a){var b=new $$t.gq;var c=$$t.$iq.i7(a,b);b=c.p1;var d=function(){var $ret=new $$t.dq;$ret._c=b;return $ret}();a.s().j(d);$$t.$je.a(a,d)},bz:function(a){var b=a.s().a($$t.$cp.$type);if(b==null){return}var c;var d;var e=a.d()._s().cr(a,c,d);c=e.p1;d=e.p2;var f=function(){var $ret=new $$t.br;$ret._a=c;$ret._b=d;return $ret}();b._b=f;a.s().j(f)},b0:function(a){var b=a.s().a($$t.$bo.$type);if(b==null){return}var c=new $$t.dr;b._c=c;a.s().j(c)},b1:function(a){var b=a.s().a($$t.$es.$type);if(b==null){return}var c=new $$t.dm;b.style(c);a.s().j(c)},b2:function(a){var b;var c=new $$t.gq;var d=$$t.$iq.i9(a,b,c);b=d.p1;c=d.p2;var e=function(){var $ret=new $$t.dt;$ret._d=b;$ret._c=c;return $ret}();a.s().j(e);$$t.$je.a(a,e)},b3:function(a){var b=a.s().a($$t.$cm.$type);if(b==null){return}var c;var d;var e;var f=$$t.$iq.ja(a,c,d,e);c=f.p1;d=f.p2;e=f.p3;var g=function(){var $ret=new $$t.ci;$ret._b=c;$ret._c=d;$ret._a=e;return $ret}();b._b=g;a.s().j(g)},b4:function(a){var b=a.s().a($$t.$dd.$type);if(b==null){return}var c;var d=$$t.$iq.jb(a,c);c=d.p1;b._b=c!=null?c:String.empty()},b5:function(a){var b=a.s().a($$t.$d3.$type);if(b==null){return}var c=new $$t.g9;var d=$$t.$iq.jf(a,c);c=d.p1;b.b().add(function(){var $ret=new $$t.fj;$ret._a=c;return $ret}())},b6:function(a){var b=a.s().a($$t.$dh.$type);if(b==null){return}var c=new $$t.du;b._b=c;a.s().j(c)},b7:function(a){var b=new $$v.cc;var c;var d;var e=a.s().a($$t.$b7.$type);if(e!=null){var f=a.d()._s().cu(a,b,c,d);b=f.p1;c=f.p2;d=f.p3;var g=function(){var $ret=new $$v.ca;$ret._c=b;$ret._d=c;$ret._e=d;return $ret}();e._c=g;a.s().j(g);return}var h=$$t.$iq.jg(a,b,c,d);b=h.p1;c=h.p2;d=h.p3;var i=a.s().a($$t.$dk.$type);if(i!=null){var j=function(){var $ret=new $$v.ca;$ret._c=b;$ret._d=c;$ret._e=d;return $ret}();i._d=j;a.s().j(j);return}var k=a.s().a($$t.$cf.$type);if(k!=null){var l=function(){var $ret=new $$v.b5;$ret._c=b;$ret._d=c;$ret._e=d;return $ret}();k._c=l;a.s().j(l);return}},b8:function(a){a.ax($$t.$iq.ay,$$t.$je.d);a.ax($$t.$iq.az,$$t.$je.e);a.ax($$t.$iq.a0,$$t.$je.f);a.ax($$t.$iq.a4,$$t.$je.g);a.ax($$t.$iq.a8,$$t.$je.h);a.ax($$t.$iq.a9,$$t.$je.i);a.ax($$t.$iq.ba,$$t.$je.j);a.ax($$t.$iq.bb,$$t.$je.k);a.ax($$t.$iq.bc,$$t.$je.l);a.ax($$t.$iq.be,$$t.$je.m);a.ax($$t.$iq.bh,$$t.$je.o);a.ax($$t.$iq.bi,$$t.$je.p);a.ax($$t.$iq.bl,$$t.$je.w);a.ax($$t.$iq.bn,$$t.$je.x);a.ax($$t.$iq.bz,$$t.$je.aa);a.ax($$t.$iq.b1,$$t.$je.ab);a.ax($$t.$iq.b4,$$t.$je.ad);a.ax($$t.$iq.b5,$$t.$je.ae);a.ax($$t.$iq.b8,$$t.$je.af);a.ax($$t.$iq.b9,$$t.$je.ag);a.ax($$t.$iq.ch,$$t.$je.ah);a.ax($$t.$iq.cl,$$t.$je.ai);a.ax($$t.$iq.cm,$$t.$je.ak);a.ax($$t.$iq.cn,$$t.$je.aj);a.ax($$t.$iq.co,$$t.$je.am);a.ax($$t.$iq.cp,$$t.$je.an);a.ax($$t.$iq.cq,$$t.$je.ao);a.ax($$t.$iq.cr,$$t.$je.ap);a.ax($$t.$iq.cs,$$t.$je.aq);a.ax($$t.$iq.ct,$$t.$je.ar);a.ax($$t.$iq.cv,$$t.$je.av);a.ax($$t.$iq.c2,$$t.$je.aw);a.ax($$t.$iq.c3,$$t.$je.ax);a.ax($$t.$iq.c4,$$t.$je.ay);a.ax($$t.$iq.c9,$$t.$je.az);a.ax($$t.$iq.di,$$t.$je.a0);a.ax($$t.$iq.dm,$$t.$je.a1);a.ax($$t.$iq.dn,$$t.$je.a2);a.ax($$t.$iq.ds,$$t.$je.a3);a.ax($$t.$iq.dt,$$t.$je.a4);a.ax($$t.$iq.du,$$t.$je.a5);a.ax($$t.$iq.ea,$$t.$je.a6);a.ax($$t.$iq.el,$$t.$je.bc);a.ax($$t.$iq.em,$$t.$je.bd);a.ax($$t.$iq.eo,$$t.$je.bf);a.ax($$t.$iq.eq,$$t.$je.bg);a.ax($$t.$iq.es,$$t.$je.bh);a.ax($$t.$iq.et,$$t.$je.bl);a.ax($$t.$iq.ev,$$t.$je.bi);a.ax($$t.$iq.ew,$$t.$je.bj);a.ax($$t.$iq.ex,$$t.$je.bk);a.ax($$t.$iq.e1,$$t.$je.bm);a.ax($$t.$iq.e4,$$t.$je.bn);a.ax($$t.$iq.e5,$$t.$je.bo);a.ax($$t.$iq.e6,$$t.$je.bp);a.ax($$t.$iq.e7,$$t.$je.bq);a.ax($$t.$iq.e9,$$t.$je.br);a.ax($$t.$iq.fc,$$t.$je.bt);a.ax($$t.$iq.fg,$$t.$je.bv);a.ax($$t.$iq.fh,$$t.$je.bx);a.ax($$t.$iq.fi,$$t.$je.by);a.ax($$t.$iq.fj,$$t.$je.b0);a.ax($$t.$iq.fn,$$t.$je.b2);a.ax($$t.$iq.fp,$$t.$je.b4);a.ax($$t.$iq.fr,$$t.$je.b3);a.ax($$t.$iq.fx,$$t.$je.b5);a.ax($$t.$iq.gd,$$t.$je.b7);a.ax($$t.$ip.ap,$$t.$je.n);a.ax($$t.$io.as,$$t.$je.bs);var b=a.d()._s();if(b!=null){a.ax(b.an,$$t.$je.i);a.ax(b.ap,$$t.$je.q);a.ax(b.aq,$$t.$je.r);a.ax(b.ar,$$t.$je.s);a.ax(b.as,$$t.$je.t);a.ax(b.at,$$t.$je.u);a.ax(b.au,$$t.$je.v);a.ax(b.av,$$t.$je.y);a.ax(b.aw,$$t.$je.z);a.ax(b.ay,$$t.$je.ac);a.ax(b.a3,$$t.$je.al);a.ax(b.a4,$$t.$je.as);a.ax(b.a5,$$t.$je.at);a.ax(b.a6,$$t.$je.au);a.ax(b.bn,$$t.$je.a7);a.ax(b.bo,$$t.$je.a8);a.ax(b.bp,$$t.$je.a9);a.ax(b.bq,$$t.$je.ba);a.ax(b.br,$$t.$je.bb);a.ax(b.bs,$$t.$je.be);a.ax(b.bw,$$t.$je.bu);a.ax(b.bx,$$t.$je.bw);a.ax(b.by,$$t.$je.bz);a.ax(b.bz,$$t.$je.b1);a.ax(b.b1,$$t.$je.b6);a.ax(b.b3,$$t.$je.b7)}},b9:function(a,b){if(b==null){return}$$t.$iq.jn(a,b._a);a.ad().k()},ca:function(a,b){if(b==null){return}$$t.$iq.jo(a,b._a);a.ad().k()},cb:function(a,b){if(b==null){return}$$t.$iq.jp(a,b._a);a.ad().k()},cc:function(a,b){if(b==null){return}a.ad().g($$5.$e.o($$6.$u.$type.specialize(Array,$$t.$em.$type),$$t.$bg.$type,b._b,function(c){return new $$t.bg(1,c._a,function(){c._b._accept$2$i($$t.$jx.$type,$$0.$aq.$type,$$t.$jf.a,a)})}),b._a==null?null:function(){b._a._accept$2$i($$t.$jx.$type,$$0.$aq.$type,$$t.$jf.a,a)})},cd:function(a,b){if(b==null){return}$$t.$iq.jq(a);b.b().forEach(function(c){$$t.$je.c5(a,c)});a.ad().k()},ce:function(a,b){if(b==null){return}$$t.$iq.jr(a,b._b,b._c,b._a);a.ad().k()},cf:function(a,b,c){if(b==null){return}if(c){a.d()._s().cv(a,$j(b._d,0)?$m($$0.$be.$type,null):b._d,$j(b._e,false)?$m($$0.$aq.$type,null):b._e)}else{$$t.$iq.js(a,$j(b._d,0)?$m($$0.$be.$type,null):b._d,$j(b._e,false)?$m($$0.$aq.$type,null):b._e)}$$t.$je.ce(a,b._a);$$t.$je.el(a,b._b);if(b._c!=null){b._c._accept$2$i($$t.$jx.$type,$$0.$aq.$type,$$t.$jf.a,a)}a.ad().k()},cg:function(a,b){if(b==null){return}$$t.$iq.jt(a,b._a);a.ad().k()},ch:function(a,b){if(b==null){return}$$t.$iq.ju(a,b._a);a.ad().k()},ci:function(a,b){if(b==null){return}$$t.$iq.jv(a,b._a);a.ad().k()},cj:function(a,b){if(b==null){return}$$t.$iq.jw(a,b._n,b._l,b._q,b._p,b._t,b._r,b._j,b._s,b._m,b._f,b._k,b._o,b._a,b._i,b._d,b._e,b._h,b._c,b._g);a.ad().k()},ck:function(a,b){if(b==null){return}$$t.$iq.jx(a,b._a,b._b);a.ad().k()},cl:function(a,b){if(b==null){return}$$t.$iq.jy(a,b._a,b._b);a.ad().k()},cm:function(a,b){if(b==null){return}a.d()._s().cw(a);$$t.$je.cx(a,b._c);$$t.$je.en(a,b._b);$$t.$je.c0(a,b._a);a.ad().k()},cn:function(a,b){if(b==null){return}a.d()._s().cx(a);$$t.$je.db(a,b._a);a.ad().k()},co:function(a,b){if(b==null){return}a.d()._s().cy(a);$$t.$je.dh(a,b._a);a.ad().k()},cp:function(a,b){if(b==null){return}a.d()._s().cz(a,b._b);$$t.$je.d4(a,b._a);a.ad().k()},cq:function(a,b){if(b==null){return}a.d()._s().c0(a,b._c,b._f,b._e,b._d,b._g);a.ad().k()},cr:function(a,b){if(b==null){return}a.d()._s().c1(a,b._b);$$t.$je.ej(a,b._a);a.ad().k()},cs:function(a,b){if(b==null){return}$$t.$iq.j0(a);a.ad().k()},ct:function(a,b){if(b==null){return}$$t.$iq.j1(a,b._d,b._a,b._b,b._c);a.ad().k()},cu:function(a,b,c){if(b==null){return}c(a,b._b,b._c,b._a);a.ad().k()},cv:function(a,b,c){if(b==null){return}c(a,b._b,b._d,b._c,b._a);a.ad().k()},cw:function(a,b){if(b==null){return}a.d()._s().c3(a,null,false);$$t.$je.dw(a,b._a);$$t.$je.ek(a,b.spPr());$$t.$je.ep(a,b.style());a.ad().k()},cx:function(a,b){if(b==null){return}a.d()._s().c4(a,b._f,b._j,b._i,b._c,b._g,b._h,b._e,b._a,b._b,b._d);a.ad().k()},cy:function(a,b){if(b==null){return}$$t.$iq.kk(a,b._d,b._a,b._b,b._c);a.ad().k()},cz:function(a,b){if(b==null){return}$$t.$iq.kl(a,b._b);if(b._a!=null){b._a._accept$2$i($$t.$jx.$type,$$0.$aq.$type,$$t.$jf.a,a)}a.ad().k()},c0:function(a,b){if(b==null){return}a.d()._s().c5(a,b._a,b._b);a.ad().k()},c1:function(a,b){if(b==null){return}$$t.$iq.km(a,b._a,b._b);a.ad().k()},c2:function(a,b){$$t.$je.cv(a,b,$$t.$iq.kq)},c3:function(a,b){if(b==null){return}$$t.$iq.kr(a,b._b);if(b._a!=null){b._a._accept$2$i($$t.$jx.$type,$$0.$aq.$type,$$t.$jf.a,a)}a.ad().k()},c4:function(a,b){if(b==null){return}$$t.$iq.ku(a,b._b);if(b._a!=null){b._a._accept$2$i($$t.$jx.$type,$$0.$aq.$type,$$t.$jf.a,a)}a.ad().k()},c5:function(a,b){if(b==null){return}$$t.$iq.kw(a,b._b,b._a);a.ad().k()},c7:function(a,b){var c=$b($$t.$em.$type,b._b);if(c!=null){c._accept$2$i($$t.$jx.$type,$$0.$aq.$type,$$t.$jf.a,a);return}var d=$b($$t.$de.$type,b._b);if(d!=null){switch(b._a){case $$t.$ip.ap:$$t.$ip.at(a,d._a);a.ad().k();break;default:break}return}var e=$b($$t.$dn.$type,b._b);if(e!=null){switch(b._a){case $$t.$io.as:$$t.$io.au(a,e._a);a.ad().k();break;default:break}return}},c8:function(a,b){if(b==null){return}$$t.$iq.kx(a,b._c);b.b().forEach(function(c){$$t.$je.c7(a,c)});a.ad().k()},c9:function(a,b){if(b==null){return}$$t.$iq.ky(a);$$t.$je.c8(a,b._a);a.ad().k()},da:function(a,b){if(b==null){return}a.d()._s().c6(a,b._e,b._d);$$t.$je.dx(a,b._b);$$t.$je.ev(a,b._c,a.d()._s().dm.runOn(a.d()._s()));$$t.$je.c9(a,b._a);a.ad().k()},db:function(a,b){if(b==null){return}$$t.$iq.kz(a,b._c,b._b,b._f,b._a,b._d,b._e);a.ad().k()},dc:function(a,b){if(b==null){return}$$t.$iq.k0(a);a.ad().k()},dd:function(a,b){if(b==null){return}$$t.$iq.k1(a,b._a);a.ad().k()},de:function(a,b){if(b==null){return}$$t.$iq.k2(a,b._a);a.ad().k()},df:function(a,b){if(b==null){return}$$t.$iq.k3(a,b._a);a.ad().k()},dg:function(a,b){if(b==null){return}a.d()._s().c7(a);$$t.$je.dy(a,b._a);$$t.$je.di(a,b._b);b.d().forEach(function(c){c._accept$2$i($$t.$jx.$type,$$0.$aq.$type,$$t.$jf.a,a)});a.ad().k()},dh:function(a,b){if(b==null){return}a.d()._s().c8(a,b._b,b._g,b._f,b._e,b._a,b._c,b._d);a.ad().k()},di:function(a,b){if(b==null){return}a.d()._s().c9(a,b._b);$$t.$je.eu(a,b._c);if(b._a!=null){b._a._accept$2$i($$t.$jx.$type,$$0.$aq.$type,$$t.$jf.a,a)}a.ad().k()},dj:function(a,b){$$t.$je.cu(a,b,$$t.$iq.k5)},dk:function(a,b){if(b==null){return}$$t.$iq.k8(a,b._a);a.ad().k()},dl:function(a,b){if(b==null){return}$$t.$iq.k9(a,b._a);a.ad().k()},dm:function(a,b){if(b==null){return}$$t.$iq.la(a,b._a);a.ad().k()},dn:function(a,b){if(b==null){return}$$t.$iq.lb(a);a.ad().k()},dp:function(a,b){if(b==null){return}$$t.$iq.lc(a,b._d,b._a,b._b,b._c);a.ad().k()},dq:function(a,b){if(b==null){return}$$t.$iq.ld(a,b._i,b._g,b._h,b._f);if(b._d!=null){b._d._accept$2$i($$t.$jx.$type,$$0.$aq.$type,$$t.$jf.a,a)}if(b._c!=null){b._c._accept$2$i($$t.$jx.$type,$$0.$aq.$type,$$t.$jf.a,a)}if(b._e!=null){b._e._accept$2$i($$t.$jx.$type,$$0.$aq.$type,$$t.$jf.a,a)}$$t.$je.dj(a,b._a);$$t.$je.er(a,b._b);a.ad().k()},dr:function(a,b){if(b==null){return}$$t.$iq.le(a,b._b);if(b._a!=null){b._a._accept$2$i($$t.$jx.$type,$$0.$aq.$type,$$t.$jf.a,a)}a.ad().k()},ds:function(a,b){if(b==null){return}$$t.$iq.li(a,b._a);a.ad().k()},dt:function(a,b){if(b==null){return}$$t.$iq.lj(a,b._a);a.ad().k()},du:function(a,b){if(b==null){return}$$t.$iq.lk(a,b._a);a.ad().k()},dv:function(a,b){if(b==null){return}$$t.$iq.ln(a);a.ad().k()},dw:function(a,b){if(b==null){return}a.d()._s().db(a);$$t.$je.cq(a,b._a);$$t.$je.cm(a,b._b);a.ad().k()},dx:function(a,b){if(b==null){return}a.d()._s().dc(a);$$t.$je.cq(a,b._a);$$t.$je.cn(a,b._b);a.ad().k()},dy:function(a,b){if(b==null){return}a.d()._s().dd(a);$$t.$je.cq(a,b._a);$$t.$je.co(a,b._b);a.ad().k()},dz:function(a,b){if(b==null){return}a.d()._s().de(a);$$t.$je.cq(a,b._a);$$t.$je.cp(a,b._b);a.ad().k()},d0:function(a,b){if(b==null){return}a.d()._s().df(a);$$t.$je.cq(a,b._a);$$t.$je.cr(a,b._b);a.ad().k()},d1:function(a,b){if(b==null){return}$$t.$iq.lp(a,b._a,b._b);a.ad().k()},d2:function(a,b){if(b==null){return}$$t.$iq.lq(a);$$t.$je.d5(a,b._a);b.c().forEach(function(c){c._accept$2$i($$t.$jx.$type,$$0.$aq.$type,$$t.$jf.a,a)});a.ad().k()},d3:function(a,b){if(b==null){return}a.d()._s().dg(a,"",false);$$t.$je.dz(a,b._b);$$t.$je.cf(a,b._a,true);$$t.$je.ek(a,b.spPr());a.ad().k()},d4:function(a,b){if(b==null){return}$$t.$iq.lr(a,b._g,b._k,b._j,b._c,b._h,b._i,b._f,b._a,b._b,b._d,b._e);a.ad().k()},d5:function(a,b){if(b==null){return}$$t.$iq.ls(a,b._i,b._j,b._h,b._f,b._a,b._b,b._k,b._c,b._d,b._g,b._e);a.ad().k()},d6:function(a,b){if(b==null){return}$$t.$iq.lt(a,b._b);$$t.$je.cd(a,b._a);a.ad().k()},d7:function(a,b){if(b==null){return}$$t.$iq.lu(a,b._a);a.ad().k()},d8:function(a,b){if(b==null){return}$$t.$iq.lv(a,b._a);a.ad().k()},d9:function(a,b){if(b==null){return}$$t.$iq.lw(a,b._a);a.ad().k()},ea:function(a,b){if(b==null){return}$$t.$iq.lx(a);$$t.$je.eb(a,b._a);$$t.$iq.mb(a,b._b);a.ad().k();a.ad().k()},eb:function(a,b){if(b==null){return}$$t.$iq.ly(a,b._o,b._x,b._v,$$t.$hu.h(b._t),b._j,b._m,b._u,b._s,b._n,b._l,b._r,b._q,b._k,b._p,b._g,b._h,b._i,b._y,b._w);$$t.$je.dq(a,b._a);if(b._f!=null){b._f._accept$2$i($$t.$jx.$type,$$0.$aq.$type,$$t.$jf.a,a)}$$t.$je.dp(a,b._e);$$t.$je.cy(a,b._d);$$t.$je.ct(a,b._c);a.ad().k()},ec:function(a,b){if(b==null){return}$$t.$iq.lz(a,b._a);a.ad().k()},ed:function(a,b){if(b==null){return}$$t.$iq.l0(a,b._a);a.ad().k()},ee:function(a,b){if(b==null){return}$$t.$iq.l1(a,b._a);a.ad().k()},ef:function(a,b){if(b==null){return}$$t.$iq.l2(a,b._c);b.b().forEach(function(c){c._accept$2$i($$t.$jx.$type,$$0.$aq.$type,$$t.$jf.a,a)});a.ad().k()},c6:function(a,b){if(b==null){return}b._accept$2$i($$t.$jx.$type,$$0.$aq.$type,$$t.$jf.a,a)},eh:function(a,b){if(b==null){return}$$t.$iq.l4(a);if(b._a!=null){b._a._accept$2$i($$t.$jx.$type,$$0.$aq.$type,$$t.$jf.a,a)}a.ad().k()},ei:function(a,b){if(b==null){return}a.d()._s().dh(a,null,null,true,false);$$t.$je.d0(a,b._a);$$t.$je.ek(a,b.spPr());$$t.$je.ep(a,b.style());$$t.$je.et(a,b._b);a.ad().k()},ej:function(a,b){if(b==null){return}$$t.$iq.l5(a,b._f,b._j,b._i,b._c,b._g,b._h,b._e,b._a,b._b,b._d,b._k);a.ad().k()},ek:function(a,b){if(b==null){return}a.d()._s().di(a,b._b);$$t.$je.ev(a,b._d,$$t.$iq.mg);if(b._e!=null){b._e._accept$2$i($$t.$jx.$type,$$0.$aq.$type,$$t.$jf.a,a)}if(b._a!=null){b._a._accept$2$i($$t.$jx.$type,$$0.$aq.$type,$$t.$jf.a,a)}$$t.$je.dq(a,b._c);a.ad().k()},el:function(a,b){$$t.$je.cv(a,b,$$t.$iq.l6)},eg:function(a,b){if(b==null){return}$$t.$iq.l3(a,b._a);a.ad().k()},em:function(a,b){if(b==null){return}$$t.$iq.l7(a,b._c);b.b().forEach(function(c){c._accept$2$i($$t.$jx.$type,$$0.$aq.$type,$$t.$jf.a,a)});a.ad().k()},en:function(a,b){if(b==null){return}a.d()._s().dj(a,b._a,b._b);a.ad().k()},eo:function(a,b){if(b==null){return}$$t.$iq.l8(a);$$t.$je.c2(a,b._a);a.ad().k()},ep:function(a,b){if(b==null){return}a.d()._s().dk(a);$$t.$je.dr(a,b._d);$$t.$je.c3(a,b._c);$$t.$je.cz(a,b._b);$$t.$je.c4(a,b._a);a.ad().k()},eq:function(a,b){if(b==null){return}$$t.$iq.l9(a,b._d,b._c);b.b().forEach(function(c){c._accept$2$i($$t.$jx.$type,$$0.$aq.$type,$$t.$jf.a,a)});a.ad().k()},er:function(a,b){$$t.$je.cu(a,b,$$t.$iq.ma)},es:function(a,b){if(b==null){return}$$t.$iq.mf(a,b._a);a.ad().k()},et:function(a,b){if(b==null){return}a.d()._s().dl(a);$$t.$je.cj(a,b._a);b.d().forEach(function(c){$$t.$je.d2(a,c)});a.ad().k()},ev:function(a,b,c){if(b==null){return}c(a,b._c,b._d,b._e);$$t.$je.d1(a,b._a);$$t.$je.c1(a,b._b);a.ad().k()},eu:function(a,b){if(b==null){return}$$t.$iq.mg(a,b._c,b._d,b._e);$$t.$je.d1(a,b._a);$$t.$je.c1(a,b._b);$$t.$je.cl(a,b._f);$$t.$je.ck(a,b._g);a.ad().k()},$type:new $.ig.Type("DrawingPartManagerHelpers",$.ig.$ot)},true);$c("DrawingPartManagerHelpers_DrawingSerializationHelper:jf","Object",{init:function(){$.ig.$op.init.call(this)},visitCT_SchemeColor:function(value,partManager){return this._visitCT_SchemeColor$i.apply(this,arguments)},_visitCT_SchemeColor$i:function(a,b){$$t.$je.ef(b,a);return true},visitCT_SRgbColor:function(value,partManager){return this._visitCT_SRgbColor$i.apply(this,arguments)},_visitCT_SRgbColor$i:function(a,b){$$t.$je.em(b,a);return true},visitCT_SysColor:function(value,partManager){return this._visitCT_SysColor$i.apply(this,arguments)},_visitCT_SysColor$i:function(a,b){$$t.$je.eq(b,a);return true},visitColorTransform_Alpha:function(value,partManager){return this._visitColorTransform_Alpha$i.apply(this,arguments)},_visitColorTransform_Alpha$i:function(a,b){$$t.$je.b9(b,a);return false},visitColorTransform_AlphaMod:function(value,partManager){return this._visitColorTransform_AlphaMod$i.apply(this,arguments)},_visitColorTransform_AlphaMod$i:function(a,b){$$t.$je.ca(b,a);return false},visitColorTransform_AlphaOff:function(value,partManager){return this._visitColorTransform_AlphaOff$i.apply(this,arguments)
},_visitColorTransform_AlphaOff$i:function(a,b){$$t.$je.cb(b,a);return false},visitColorTransform_Blue:function(value,partManager){return this._visitColorTransform_Blue$i.apply(this,arguments)},_visitColorTransform_Blue$i:function(a,b){$$t.$je.cg(b,a);return false},visitColorTransform_BlueMod:function(value,partManager){return this._visitColorTransform_BlueMod$i.apply(this,arguments)},_visitColorTransform_BlueMod$i:function(a,b){$$t.$je.ch(b,a);return false},visitColorTransform_BlueOff:function(value,partManager){return this._visitColorTransform_BlueOff$i.apply(this,arguments)},_visitColorTransform_BlueOff$i:function(a,b){$$t.$je.ci(b,a);return false},visitColorTransform_Comp:function(value,partManager){return this._visitColorTransform_Comp$i.apply(this,arguments)},_visitColorTransform_Comp$i:function(a,b){$$t.$je.cs(b,a);return false},visitColorTransform_Gray:function(value,partManager){return this._visitColorTransform_Gray$i.apply(this,arguments)},_visitColorTransform_Gray$i:function(a,b){$$t.$je.dc(b,a);return false},visitColorTransform_Green:function(value,partManager){return this._visitColorTransform_Green$i.apply(this,arguments)},_visitColorTransform_Green$i:function(a,b){$$t.$je.dd(b,a);return false},visitColorTransform_GreenMod:function(value,partManager){return this._visitColorTransform_GreenMod$i.apply(this,arguments)},_visitColorTransform_GreenMod$i:function(a,b){$$t.$je.de(b,a);return false},visitColorTransform_GreenOff:function(value,partManager){return this._visitColorTransform_GreenOff$i.apply(this,arguments)},_visitColorTransform_GreenOff$i:function(a,b){$$t.$je.df(b,a);return false},visitColorTransform_Hue:function(value,partManager){return this._visitColorTransform_Hue$i.apply(this,arguments)},_visitColorTransform_Hue$i:function(a,b){$$t.$je.dk(b,a);return false},visitColorTransform_HueMod:function(value,partManager){return this._visitColorTransform_HueMod$i.apply(this,arguments)},_visitColorTransform_HueMod$i:function(a,b){$$t.$je.dl(b,a);return false},visitColorTransform_HueOff:function(value,partManager){return this._visitColorTransform_HueOff$i.apply(this,arguments)},_visitColorTransform_HueOff$i:function(a,b){$$t.$je.dm(b,a);return false},visitColorTransform_Inv:function(value,partManager){return this._visitColorTransform_Inv$i.apply(this,arguments)},_visitColorTransform_Inv$i:function(a,b){$$t.$je.dn(b,a);return false},visitColorTransform_Lum:function(value,partManager){return this._visitColorTransform_Lum$i.apply(this,arguments)},_visitColorTransform_Lum$i:function(a,b){$$t.$je.ds(b,a);return false},visitColorTransform_LumMod:function(value,partManager){return this._visitColorTransform_LumMod$i.apply(this,arguments)},_visitColorTransform_LumMod$i:function(a,b){$$t.$je.dt(b,a);return false},visitColorTransform_LumOff:function(value,partManager){return this._visitColorTransform_LumOff$i.apply(this,arguments)},_visitColorTransform_LumOff$i:function(a,b){$$t.$je.du(b,a);return false},visitColorTransform_Red:function(value,partManager){return this._visitColorTransform_Red$i.apply(this,arguments)},_visitColorTransform_Red$i:function(a,b){$$t.$je.d7(b,a);return false},visitColorTransform_RedMod:function(value,partManager){return this._visitColorTransform_RedMod$i.apply(this,arguments)},_visitColorTransform_RedMod$i:function(a,b){$$t.$je.d8(b,a);return false},visitColorTransform_RedOff:function(value,partManager){return this._visitColorTransform_RedOff$i.apply(this,arguments)},_visitColorTransform_RedOff$i:function(a,b){$$t.$je.d9(b,a);return false},visitColorTransform_Sat:function(value,partManager){return this._visitColorTransform_Sat$i.apply(this,arguments)},_visitColorTransform_Sat$i:function(a,b){$$t.$je.ec(b,a);return false},visitColorTransform_SatMod:function(value,partManager){return this._visitColorTransform_SatMod$i.apply(this,arguments)},_visitColorTransform_SatMod$i:function(a,b){$$t.$je.ed(b,a);return false},visitColorTransform_SatOff:function(value,partManager){return this._visitColorTransform_SatOff$i.apply(this,arguments)},_visitColorTransform_SatOff$i:function(a,b){$$t.$je.ee(b,a);return false},visitColorTransform_Shade:function(value,partManager){return this._visitColorTransform_Shade$i.apply(this,arguments)},_visitColorTransform_Shade$i:function(a,b){$$t.$je.eg(b,a);return false},visitColorTransform_Tint:function(value,partManager){return this._visitColorTransform_Tint$i.apply(this,arguments)},_visitColorTransform_Tint$i:function(a,b){$$t.$je.es(b,a);return false},visitCT_StretchInfoProperties:function(value,partManager){return this._visitCT_StretchInfoProperties$i.apply(this,arguments)},_visitCT_StretchInfoProperties$i:function(a,b){$$t.$je.eo(b,a);return true},visitCT_TileInfoProperties:function(value,partManager){return this._visitCT_TileInfoProperties$i.apply(this,arguments)},_visitCT_TileInfoProperties$i:function(a,b){return true},visitCT_BlipFillProperties:function(value,partManager){return this._visitCT_BlipFillProperties$i.apply(this,arguments)},_visitCT_BlipFillProperties$i:function(a,b){$$t.$je.cf(b,a,false);return true},visitCT_GroupFillProperties:function(value,partManager){return this._visitCT_GroupFillProperties$i.apply(this,arguments)},_visitCT_GroupFillProperties$i:function(a,b){return true},visitCT_NoFillProperties:function(value,partManager){return this._visitCT_NoFillProperties$i.apply(this,arguments)},_visitCT_NoFillProperties$i:function(a,b){$$t.$je.dv(b,a);return true},visitCT_SolidFillProperties:function(value,partManager){return this._visitCT_SolidFillProperties$i.apply(this,arguments)},_visitCT_SolidFillProperties$i:function(a,b){$$t.$je.eh(b,a);return true},visitCT_PresetGeometry2D:function(value,partManager){return this._visitCT_PresetGeometry2D$i.apply(this,arguments)},_visitCT_PresetGeometry2D$i:function(a,b){$$t.$je.d6(b,a);return true},visitCT_CustomGeometry2D:function(value,partManager){return this._visitCT_CustomGeometry2D$i.apply(this,arguments)},_visitCT_CustomGeometry2D$i:function(a,b){return false},visitCT_DashStopList:function(value,partManager){return this._visitCT_DashStopList$i.apply(this,arguments)},_visitCT_DashStopList$i:function(a,b){return true},visitCT_PresetLineDashProperties:function(value,partManager){return this._visitCT_PresetLineDashProperties$i.apply(this,arguments)},_visitCT_PresetLineDashProperties$i:function(a,b){return true},visitCT_NoFillProperties1:function(value,partManager){return this._visitCT_NoFillProperties1$i.apply(this,arguments)},_visitCT_NoFillProperties1$i:function(a,b){$$t.$je.dv(b,a);return true},visitCT_SolidFillProperties1:function(value,partManager){return this._visitCT_SolidFillProperties1$i.apply(this,arguments)},_visitCT_SolidFillProperties1$i:function(a,b){$$t.$je.eh(b,a);return true},visitCT_LineJoinBevel:function(value,partManager){return this._visitCT_LineJoinBevel$i.apply(this,arguments)},_visitCT_LineJoinBevel$i:function(a,b){return true},visitCT_LineJoinMiterProperties:function(value,partManager){return this._visitCT_LineJoinMiterProperties$i.apply(this,arguments)},_visitCT_LineJoinMiterProperties$i:function(a,b){return true},visitCT_LineJoinRound:function(value,partManager){return this._visitCT_LineJoinRound$i.apply(this,arguments)},_visitCT_LineJoinRound$i:function(a,b){return true},visitCT_RegularTextRun:function(value,partManager){return this._visitCT_RegularTextRun$i.apply(this,arguments)},_visitCT_RegularTextRun$i:function(a,b){$$t.$je.ea(b,a);return true},visitAlternateGraphicalObjectContent:function(value,partManager){return this._visitAlternateGraphicalObjectContent$i.apply(this,arguments)},_visitAlternateGraphicalObjectContent$i:function(a,b){$$t.$je.cc(b,a);return true},visitCT_Connector:function(value,partManager){return this._visitCT_Connector$i.apply(this,arguments)},_visitCT_Connector$i:function(a,b){$$t.$je.cw(b,a);return true},visitCT_GraphicalObjectFrame:function(value,partManager){return this._visitCT_GraphicalObjectFrame$i.apply(this,arguments)},_visitCT_GraphicalObjectFrame$i:function(a,b){$$t.$je.da(b,a);return true},visitCT_GroupShape:function(value,partManager){return this._visitCT_GroupShape$i.apply(this,arguments)},_visitCT_GroupShape$i:function(a,b){$$t.$je.dg(b,a);return true},visitCT_Picture:function(value,partManager){return this._visitCT_Picture$i.apply(this,arguments)},_visitCT_Picture$i:function(a,b){$$t.$je.d3(b,a);return true},visitCT_Shape:function(value,partManager){return this._visitCT_Shape$i.apply(this,arguments)},_visitCT_Shape$i:function(a,b){$$t.$je.ei(b,a);return true},$type:new $.ig.Type("DrawingPartManagerHelpers_DrawingSerializationHelper",$.ig.$ot,[$$t.$d5.$type.specialize($$t.$jx.$type,$$0.$aq.$type),$$t.$d7.$type.specialize($$t.$jx.$type,$$0.$aq.$type),$$t.$d9.$type.specialize($$t.$jx.$type,$$0.$aq.$type),$$t.$eb.$type.specialize($$t.$jx.$type,$$0.$aq.$type),$$t.$ed.$type.specialize($$t.$jx.$type,$$0.$aq.$type),$$t.$ef.$type.specialize($$t.$jx.$type,$$0.$aq.$type),$$t.$eh.$type.specialize($$t.$jx.$type,$$0.$aq.$type),$$t.$ej.$type.specialize($$t.$jx.$type,$$0.$aq.$type),$$t.$el.$type.specialize($$t.$jx.$type,$$0.$aq.$type),$$t.$en.$type.specialize($$t.$jx.$type,$$0.$aq.$type)])},true);$c("EmfPartManager:jg","ImagePartManagerBase",{init:function(){$$t.$jm.init.call(this)},s:function(){return"/xl/media/image.emf"},t:function(){return"/ppt/media/image.emf"},u:function(){return"/word/media/image.emf"},m:function(){return"image/x-emf"},r:function(a){return $$v.$cq.c},$type:new $.ig.Type("EmfPartManager",$$t.$jm.$type)},true);$c("ExtendedPropertiesPartManager:jh","XmlPartManagerBase",{init:function(){$$t.$jx.init.call(this)},m:function(){return $$t.$jh.a1},n:function(a){return"/docProps/app.xml"},o:function(a){switch(a){case 0:return $$t.$jh.a4;case 1:return $$t.$jh.a3;default:return $$t.$jh.a4}},g:function(){return false},$type:new $.ig.Type("ExtendedPropertiesPartManager",$$t.$jx.$type)},true);$c("OfficeExtensibilityPartManagerBase:ji","XmlPartManagerBase",{init:function(){$$t.$jx.init.call(this)},m:function(){return"application/xml"},g:function(){return false},f:function(a,b){var c=$$t.$ka.ak(b);return new $$t.jr(a.contentType(),c.toString(),b.relationshipType(),this.d())},a:function(){var a=$$t.$jr.r(this.d(),this.l(),this.m());this.a1(a);return $$v.$i.g($.ig.$op.$type,a)},b:function(a){var b=this.a1();if(b==null){return null}return $$t.$jr.s(b,this.d(),this.l(),true)},u:function(a){throw new $$6.q(0)},a1:function(a){},$type:new $.ig.Type("OfficeExtensibilityPartManagerBase",$$t.$jx.$type)},true);$c("Office2007ExtensibilityPartManager:jj","OfficeExtensibilityPartManagerBase",{init:function(){$$t.$ji.init.call(this)},a1:function(a){if(arguments.length===1){this.d()._h=a;return a}else{return this.d()._h}},n:function(a){return"/customUI/customUI.xml"},o:function(a){switch(a){case 0:case 1:return $$t.$jj.a5;default:return $$t.$jj.a5}},$type:new $.ig.Type("Office2007ExtensibilityPartManager",$$t.$ji.$type)},true);$c("Office2010ExtensibilityPartManager:jk","OfficeExtensibilityPartManagerBase",{init:function(){$$t.$ji.init.call(this)},a1:function(a){if(arguments.length===1){this.d()._i=a;return a}else{return this.d()._i}},n:function(a){return"/customUI/customUI14.xml"},o:function(a){switch(a){case 0:case 1:return $$t.$jk.a5;default:return $$t.$jk.a5}},$type:new $.ig.Type("Office2010ExtensibilityPartManager",$$t.$ji.$type)},true);$c("GifPartManager:jl","ImagePartManagerBase",{init:function(){$$t.$jm.init.call(this)},s:function(){return"/xl/media/image.gif"},t:function(){return"/ppt/media/image.gif"},u:function(){return"/word/media/image.gif"},m:function(){return"image/gif"},r:function(a){return $$v.$cq.d},$type:new $.ig.Type("GifPartManager",$$t.$jm.$type)},true);$c("JpegPartManager:jn","ImagePartManagerBase",{init:function(){$$t.$jm.init.call(this)},s:function(){return"/xl/media/image.jpeg"},t:function(){return"/ppt/media/image.jpeg"},u:function(){return"/word/media/image.jpeg"},m:function(){return"image/jpeg"},r:function(a){return $$v.$cq.e},$type:new $.ig.Type("JpegPartManager",$$t.$jm.$type)},true);$c("PngPartManager:jp","ImagePartManagerBase",{init:function(){$$t.$jm.init.call(this)},s:function(){return"/xl/media/image.png"},t:function(){return"/ppt/media/image.png"},u:function(){return"/word/media/image.png"},m:function(){return"image/png"},r:function(a){return $$v.$cq.f},$type:new $.ig.Type("PngPartManager",$$t.$jm.$type)},true);$c("PrinterSettingsPartManager:jq","XmlPartManagerBase",{init:function(){$$t.$jx.init.call(this)},n:function(a){switch(a){case 0:return"/xl"+"/printerSettings/printerSettings.bin";default:return null}},o:function(a){switch(a){case 0:return $$t.$jq.a5;case 1:return $$t.$jq.a4;default:return $$t.$jq.a5}},g:function(){return true},a:function(){return $$v.$i.g($.ig.$op.$type,new $$v.ah($$v.$aq.c(this.l())))},b:function(a){var b=$b($$v.$ah.$type,a);if(b==null){return null}this.l().write(b.a,0,b.a.length);return null},u:function(a){throw new $$6.p(0)},$type:new $.ig.Type("PrinterSettingsPartManager",$$t.$jx.$type)},true);$c("RoundTripDataPartManager:jr","PartManagerBase",{u:null,v:null,w:null,t:null,init:function(a,b,c,d){$$t.$jo.init.call(this);this.u=a;this.v=b;this.w=c;this.t=d},a:function(){return $$v.$i.g($.ig.$op.$type,new $$v.ah($$v.$aq.c(this.l())))},b:function(a){var b=$b($$v.$ah.$type,a);if(b==null){return null}this.l().write(b.a,0,b.a.length);return null},n:function(a){return this.v},o:function(a){return this.t._a3(a,this.w)},m:function(){return this.u},g:function(){return false},r:function(a,b,c){var d=new $$v.al(c,a._d().uri().toString(),$$v.$aq.c(b));var f=a._d().getRelationships().getEnumerator();while(f.moveNext()){var e=f.current();if(e.targetMode()!=0){continue}var g=$b($$v.$ah.$type,a._ar(e));if(g==null){continue}var h=$$t.$ka.ak(e);var i=a._e(h);var j=$$t.$ka.ak(e).toString();d.c.add(function(){var $ret=new $$v.am;$ret.b=i.contentType();$ret.d=e.id();$ret.a=g;$ret.e=e.relationshipType();$ret.c=h.toString();return $ret}())}return d},s:function(a,b,c,d){return $$v.$o.a($$v.$h.d($$v.$am.$type,a.c,function(e){if(d){var f=function(g){return g!=null?g:e.e}(b._a3(b._y(),e.e));var g=new $$t.jr(e.b,e.c,f,b);return b._j(g,e.a,e.d)}return $$v.$o.e($$6.$u.$type.specialize($$6.$x.$type,String),b._l(e.b,e.c,e.a,e.d),function(h){},0)}),function(){c.write(a.a,0,a.a.length)},0)},$type:new $.ig.Type("RoundTripDataPartManager",$$t.$jo.$type)},true);$c("ThemePartManager:js","XmlPartManagerBase",{a1:false,init:function(a){$$t.$jx.init.call(this);this.a1=a},m:function(){return $$t.$js.a5},n:function(a){if(this.a1){switch(a){case 1:return"/theme/theme/theme.xml";default:return null}}else{switch(a){case 0:return"/xl/theme/theme.xml";case 1:return"/word/theme/theme.xml";default:return null}}},o:function(a){switch(a){case 0:return $$t.$js.a7;case 1:return $$t.$js.a6;default:return $$t.$js.a7}},g:function(){return true},a:function(){this.d().__ae=true;return $$t.$jx.a.call(this)},$type:new $.ig.Type("ThemePartManager",$$t.$jx.$type)},true);$c("TiffPartManager:jt","ImagePartManagerBase",{init:function(){$$t.$jm.init.call(this)},s:function(){return"/xl/media/image.tiff"},t:function(){return"/ppt/media/image.tiff"},u:function(){return"/word/media/image.tiff"},m:function(){return"image/tiff"},r:function(a){return $$v.$cq.g},$type:new $.ig.Type("TiffPartManager",$$t.$jm.$type)},true);$c("VbaProjectPartManager:ju","PartManagerBase",{init:function(){$$t.$jo.init.call(this)},m:function(){return"application/vnd.ms-office.vbaProject"},n:function(a){switch(a){case 0:return"/xl/vbaProject.bin";case 1:return"/word/vbaProject.bin";default:return null}},o:function(a){switch(a){case 0:return $$t.$ju.u;case 1:return $$t.$ju.u;default:return $$t.$ju.u}},g:function(){return false},$type:new $.ig.Type("VbaProjectPartManager",$$t.$jo.$type)},true);$c("VmlDrawingPartManager:jv","XmlPartManagerBase",{a1:false,init:function(a){$$t.$jx.init.call(this);this.a1=a},m:function(){return $$t.$jv.a5},az:function(){var $self=this;return function(){var $ret=new $$t.ky;$ret._b7(new $$7.f($self.l()));return $ret}()},n:function(a){if(this.a1){switch(a){case 1:return"/theme/drawings/vmlDrawing.vml";default:return null}}else{switch(a){case 0:return"/xl/drawings/vmlDrawing.vml";case 1:return"/word/drawings/vmlDrawing.vml";default:return null}}},o:function(a){switch(a){case 0:case 1:return $$t.$jv.a6;default:return $$t.$jv.a6}},g:function(){return true},$type:new $.ig.Type("VmlDrawingPartManager",$$t.$jx.$type)},true);$c("WmfPartManager:jw","ImagePartManagerBase",{init:function(){$$t.$jm.init.call(this)},s:function(){return"/xl/media/image.wmf"},t:function(){return"/ppt/media/image.wmf"},u:function(){return"/word/media/image.wmf"},m:function(){return"image/x-wmf"},r:function(a){return $$v.$cq.h},$type:new $.ig.Type("WmfPartManager",$$t.$jm.$type)},true);$c("XmlNamespaceDefinitionBase:i4","Object",{init:function(){$.ig.$op.init.call(this)},i:function(a){},j:function(){},k:function(a,b){},g:function($t,a,b,c){if(c==false&&$$4.$l.defaultEqualityComparerValue($t).equalsC(a,b)){return null}return $$t.$i4.f($t,a)},f:function($t,value_){var a=$t;if(a==$$t.$gi.$type&&$.ig.$op.equalsStatic($e($t,value_),$$t.$gi.getBox(4))){return"linear sigma"}var b=$n($t,value_);if(b.charAt(0)=="_"){return b.substr(1)}return b},h:function(a){var b=a.lastIndexOf("/");if(b<0){return a}return a.substr(b+1)},b:function($t,a,b){if(String.isNullOrEmpty(a)){return b}var c=false;switch(a){case"continue":case"decimal":case"default":case"double":case"fixed":case"long":case"short":c=true;break;case"linear sigma":a=$$t.$gi.$getName(4);break;default:if("0".charCodeAt(0)<=a.charAt(0).charCodeAt(0)&&a.charAt(0).charCodeAt(0)<="9".charCodeAt(0)){c=true}break}var d;if(c==false&&function(){var e=$.ig.$ep.tryParse$1($t,a,false,d);d=e.p2;return e.ret}()){return d}if(function(){var e=$.ig.$ep.tryParse$1($t,"_"+a,false,d);d=e.p2;return e.ret}()){return d}return b},c:function($t,a,b,c){if(String.isNullOrEmpty(a.d)){return b}return c(a.d)},e:function($t,a,b){var c=new $$4.w($t,0);var d=-1;for(var e=0;e<a.length;e++){switch(a.charAt(e)){case" ":case"	":case"\r":case"\n":if(d!=-1){c.add(b(a.substr(d,e-d)));d=-1}break;default:if(d==-1){d=e}break}}if(d!=-1){c.add(b(a.substr(d)))}return c},l:function(a,b,c){var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){default:break}}if(function(){var f=$as(a.ab().ad,c);c=f.p1;return f.ret}()==false){c=$$t.$g2.e(a.ab().ad)}return{p2:c}},z:function(a,b,c,d){a.ad().p(b,c);a.ad().u(d.toString().toLowerCase())},m:function(a,b,c){var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){default:break}}c=$.ig.util.parseInt8_1(a.ab().ad,$$0.$cg.invariantCulture());return{p2:c}},aa:function(a,b,c,d){a.ad().p(b,c);a.ad().u(d.toString())},n:function(a,b,c){var d=null;var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case $$t.$i6.aq:d=a.ab().ag(e.d);break;default:break}}c=$$t.$ka.i(a.ab().ad);return{p2:c}},ab:function(a,b,c,d){a.ad().p(b,c);var e=new $$t.fr(1,$$t.$il.an.j(),$$t.$il.an.i(a.d()._y()),$$t.$i4.h("http://purl.org/dc/terms/W3CDTF"));a.ad().h($$t.$i6.aq,e.toString());a.ad().u($$t.$ka.k(d))},o:function(a,b,c){var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){default:break}}c=$.ig.util.parseNumber(a.ab().ad,$$0.$cg.invariantCulture());return{p2:c}},ac:function(a,b,c,d){a.ad().p(b,c);a.ad().u(d.toString1($$0.$cg.invariantCulture()))},p:function(a,b,c){var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){default:break}}c=$an(a.ab().ad,$$0.$cg.invariantCulture());return{p2:c}},ad:function(a,b,c,d){a.ad().p(b,c);a.ad().u($ae(d,$$0.$cg.invariantCulture()))},q:function(a,b,c){var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){default:break}}c=$an(a.ab().ad,$$0.$cg.invariantCulture());return{p2:c}},ae:function(a,b,c,d){a.ad().p(b,c);a.ad().u($ae(d,$$0.$cg.invariantCulture()))},r:function(a,b,c){var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){default:break}}c=$ai(a.ab().ad,$$0.$cg.invariantCulture());return{p2:c}},af:function(a,b,c,d){a.ad().p(b,c);a.ad().u(d.toString())},s:function(a,b,c){var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){default:break}}c=$.ig.util.parseInt64_1(a.ab().ad,$$0.$cg.invariantCulture());return{p2:c}},ag:function(a,b,c,d){a.ad().p(b,c);a.ad().u(d.toString())},t:function(a,b,c){var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){default:break}}c=$.ig.util.parseInt16_1(a.ab().ad,$$0.$cg.invariantCulture());return{p2:c}},ah:function(a,b,c,d){a.ad().p(b,c);a.ad().u(d.toString())},d:function(a){switch(a){case" ":case"\r":case"\n":case"	":return true;default:return false}},u:function(a,b,c,d){var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case $$t.$i3.ar:if(e.d=="preserve"){d=6}break;default:break}}c=a.ab().ad;if(c!=null){if((d&2)==0){c=c.trimStart($$t.$i4.a)}if((d&4)==0&&String.isNullOrWhiteSpace(c)==false){c=c.trimEnd($$t.$i4.a)}}return{p2:c}},ai:function(a,b,c,d,e,f){a.ad().p(b,c);if(f!=6){if(String.isNullOrEmpty(d)==false){if($$t.$i4.d(d.charAt(0))&&(f&2)==0||$$t.$i4.d(d.charAt(d.length-1))&&(f&4)==0){$$t.$i3.as(a.ad())}}}if(e!=null){e()}a.ad().u(d)},v:function(a,b,c){var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){default:break}}c=$ap(a.ab().ad,$$0.$cg.invariantCulture());return{p2:c}},aj:function(a,b,c,d){a.ad().p(b,c);a.ad().u(d.toString())},w:function(a,b,c){var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){default:break}}c=$.ig.util.parseUInt32_1(a.ab().ad,$$0.$cg.invariantCulture());return{p2:c}},ak:function(a,b,c,d){a.ad().p(b,c);a.ad().u(d.toString())},x:function(a,b,c){var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){default:break}}c=$.ig.util.parseUInt64_1(a.ab().ad,$$0.$cg.invariantCulture());return{p2:c}},al:function(a,b,c,d){a.ad().p(b,c);a.ad().u(d.toString())},y:function(a,b,c){var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){default:break}}c=$.ig.util.parseUInt16_1(a.ab().ad,$$0.$cg.invariantCulture());return{p2:c}},am:function(a,b,c,d){a.ad().p(b,c);a.ad().u(d.toString())},$type:new $.ig.Type("XmlNamespaceDefinitionBase",$.ig.$ot)},true);$c("CoreProperties:ii","XmlNamespaceDefinitionBase",{init:function(){$$t.$i4.init.call(this)},i:function(a){switch(a){case 0:case 1:return $$t.$ii.au;default:return $$t.$ii.au}},j:function(){return"cp"},ax:function(a,b){var c=$$t.$ii.u(a,$$t.$ii.ap,b,6);b=c.p2;return{p1:b}},a4:function(a,b){$$t.$ii.ai(a,$$t.$ii.ap,"cp",b,null,6)},ay:function(a,b){var c=$$t.$ii.u(a,$$t.$ii.aq,b,6);b=c.p2;return{p1:b}},a5:function(a,b){$$t.$ii.ai(a,$$t.$ii.aq,"cp",b,null,6)},az:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},a6:function(a){a.ad().p($$t.$ii.ar,"cp");var b=a.d()._y();a.ad().l($$t.$ii.an,false);a.ad().l($$t.$ik.an,false);a.ad().l($$t.$il.an,false);a.ad().l($$t.$ij.an,false);a.ad().l($$t.$i6.an,false)},a0:function(a,b,c){b=null;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case $$t.$i3.ap:b=d.d;break;default:break}}c=a.ab().ad;return{p1:b,p2:c}},a7:function(a,b,c){a.ad().p($$t.$ii.as,"cp");var d;d=b;a.ad().h($$t.$i3.ap,d);a.ad().u(c)},a1:function(a,b){var c=$$t.$ii.u(a,$$t.$ii.at,b,0);b=c.p2;return{p1:b}},a8:function(a,b){$$t.$ii.ai(a,$$t.$ii.at,"cp",b,null,0)},a2:function(a,b){var c=$$t.$ii.u(a,$$t.$ii.av,b,0);b=c.p2;return{p1:b}},a9:function(a,b){$$t.$ii.ai(a,$$t.$ii.av,"cp",b,null,0)},a3:function(a,b){var c=$$t.$ii.u(a,$$t.$ii.aw,b,0);b=c.p2;return{p1:b}},ba:function(a,b){$$t.$ii.ai(a,$$t.$ii.aw,"cp",b,null,0)},$type:new $.ig.Type("CoreProperties",$$t.$i4.$type)},true);$c("DcDcmiType:ij","XmlNamespaceDefinitionBase",{init:function(){$$t.$i4.init.call(this)},i:function(a){switch(a){case 0:case 1:return"http://purl.org/dc/dcmitype/";default:return"http://purl.org/dc/dcmitype/"}},j:function(){return"dcmitype"},$type:new $.ig.Type("DcDcmiType",$$t.$i4.$type)},true);$c("DcElements:ik","XmlNamespaceDefinitionBase",{init:function(){$$t.$i4.init.call(this)},i:function(a){switch(a){case 0:case 1:return"http://purl.org/dc/elements/1.1/";default:return"http://purl.org/dc/elements/1.1/"}},j:function(){return"dc"},au:function(a,b){var c=$$t.$ii.u(a,"http://purl.org/dc/elements/1.1/creator",b,0);b=c.p2;return{p1:b}},ay:function(a,b){$$t.$ii.ai(a,"http://purl.org/dc/elements/1.1/creator","dc",b,null,0)},av:function(a,b){var c=$$t.$ii.u(a,$$t.$ik.aq,b,6);b=c.p2;return{p1:b}},az:function(a,b){$$t.$ii.ai(a,$$t.$ik.aq,"dc",b,null,6)},aw:function(a,b){var c=$$t.$ii.u(a,"http://purl.org/dc/elements/1.1/subject",b,6);b=c.p2;return{p1:b}},a0:function(a,b){$$t.$ii.ai(a,"http://purl.org/dc/elements/1.1/subject","dc",b,null,6)},ax:function(a,b){var c=$$t.$ii.u(a,"http://purl.org/dc/elements/1.1/title",b,6);b=c.p2;return{p1:b}},a1:function(a,b){$$t.$ii.ai(a,"http://purl.org/dc/elements/1.1/title","dc",b,null,6)},$type:new $.ig.Type("DcElements",$$t.$i4.$type)},true);$c("DcTerms:il","XmlNamespaceDefinitionBase",{init:function(){$$t.$i4.init.call(this)},i:function(a){switch(a){case 0:case 1:return"http://purl.org/dc/terms/";default:return"http://purl.org/dc/terms/"}},j:function(){return"dcterms"},at:function(a,b){var c=$$t.$ii.n(a,"http://purl.org/dc/terms/created",b);b=c.p2;return{p1:b}},av:function(a,b){$$t.$ii.ab(a,"http://purl.org/dc/terms/created","dcterms",b)},au:function(a,b){var c=$$t.$ii.n(a,"http://purl.org/dc/terms/modified",b);b=c.p2;return{p1:b}},aw:function(a,b){$$t.$ii.ab(a,"http://purl.org/dc/terms/modified","dcterms",b)},$type:new $.ig.Type("DcTerms",$$t.$i4.$type)},true);$c("Drawing2010Main:im","XmlNamespaceDefinitionBase",{init:function(){$$t.$i4.init.call(this)},i:function(a){switch(a){case 0:case 1:return $$t.$im.ap;default:return $$t.$im.ap}},j:function(){return"a14"},$type:new $.ig.Type("Drawing2010Main",$$t.$i4.$type)},true);$c("Drawing2010Slicer:io","XmlNamespaceDefinitionBase",{init:function(){$$t.$i4.init.call(this)},i:function(a){switch(a){case 0:case 1:return $$t.$io.ar;default:return $$t.$io.ar}},j:function(){return"sle"},at:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"name":b=c.d;break;default:break}}return{p1:b}},au:function(a,b){a.ad().p($$t.$io.as,"sle");var c;c=b;a.ad().h("name",c)},$type:new $.ig.Type("Drawing2010Slicer",$$t.$i4.$type)},true);$c("DrawingMLChart:ip","XmlNamespaceDefinitionBase",{init:function(){$$t.$i4.init.call(this)},i:function(a){switch(a){case 0:return $$t.$ip.ar;case 1:return $$t.$ip.aq;default:return $$t.$ip.ar}},j:function(){return"c"},as:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case $$t.$i0.ar:b=c.d;break;default:break}}return{p1:b}},at:function(a,b){a.ad().p($$t.$ip.ap,"c");a.ad().l($$t.$ip.an,false);a.ad().l($$t.$i0.an,false);var c;c=b;a.ad().h($$t.$i0.ar,c)},$type:new $.ig.Type("DrawingMLChart",$$t.$i4.$type)},true);$c("DrawingMLMain:iq","XmlNamespaceDefinitionBase",{init:function(){$$t.$i4.init.call(this)},i:function(a){switch(a){case 0:return $$t.$iq.d2;case 1:return $$t.$iq.d1;default:return $$t.$iq.d2}},j:function(){return"a"},g0:function(a,b,c){c=$$v.$cc.a(0);var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"val":c=$$v.$cc.b(d.d);break;default:break}}return{p2:c}},j2:function(a,b,c){a.ad().p(b,"a");var d;d=c.toString();a.ad().h("val",d)},g1:function(a,b){var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){default:break}}},j3:function(a,b){a.ad().p(b,"a")},g2:function(a,b,c){c=new $$t.gl;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"val":c=$$t.$gl.c(d.d,a.d()._y());break;default:break}}return{p2:c}},j4:function(a,b,c){a.ad().p(b,"a");var d;d=c.s(a.d()._y());a.ad().h("val",d)},g3:function(a,b,c,d,e){c=$m($$t.$gy.$type,null);d=$m($$t.$gx.$type,null);e=$m($$t.$gw.$type,null);var g=a.ab().u.getEnumerator();while(g.moveNext()){var f=g.current();switch(f.a.e(a.d())){case"type":c=$m($$t.$gy.$type,$$t.$i4.b($$t.$gy.$type,f.d,null));break;case"w":d=$m($$t.$gx.$type,$$t.$i4.b($$t.$gx.$type,f.d,null));break;case"len":e=$m($$t.$gw.$type,$$t.$i4.b($$t.$gw.$type,f.d,null));break;default:break}}return{p2:c,p3:d,p4:e}},j5:function(a,b,c,d,e){a.ad().p(b,"a");var f;if($l(c,null)){f=$$t.$i4.f($$t.$gy.$type,c.value());a.ad().h("type",f)}if($l(d,null)){f=$$t.$i4.f($$t.$gx.$type,d.value());a.ad().h("w",f)}if($l(e,null)){f=$$t.$i4.f($$t.$gw.$type,e.value());a.ad().h("len",f)}},g4:function(a,b,c,d,e,f,g){c=new $$t.gf;d=null;e=null;f=false;g=null;var i=a.ab().u.getEnumerator();while(i.moveNext()){var h=i.current();switch(h.a.e(a.d())){case"id":c=$$t.$gf.c(h.d);break;case"name":d=h.d;break;case"descr":e=h.d;break;case"hidden":f=$$t.$g2.e(h.d);break;case"title":g=h.d;break;default:break}}return{p2:c,p3:d,p4:e,p5:f,p6:g}},j6:function(a,b,c,d,e,f,g){a.ad().p(b,"a");var h;h=c.toString();a.ad().h("id",h);h=d;a.ad().h("name",h);h=e;a.ad().h("descr",h);if(f!=false){h=$$t.$g2.g(f);a.ad().h("hidden",h)}h=g;a.ad().h("title",h)},g5:function(a,b,c){c=new $$t.g6;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"val":c=$$t.$g6.c(d.d,a.d()._y());break;default:break}}return{p2:c}},j7:function(a,b,c){a.ad().p(b,"a");var d;d=c.p(a.d()._y());a.ad().h("val",d)},g6:function(a,b,c,d){c=new $$v.cd;d=new $$v.cd;var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case"x":c=$$v.$cd.h(e.d);break;case"y":d=$$v.$cd.h(e.d);break;default:break}}return{p2:c,p3:d}},j8:function(a,b,c,d){a.ad().p(b,"a");var e;e=c.toString();a.ad().h("x",e);e=d.toString();a.ad().h("y",e)},g7:function(a,b,c){c=$$t.$g8.e($$v.$cc.a(0));var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"val":c=$$t.$g8.g(d.d);break;default:break}}return{p2:c}},j9:function(a,b,c){a.ad().p(b,"a");var d;d=c.toString();a.ad().h("val",d)},g8:function(a,b,c){c=new $$t.g9;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"val":c=$$t.$g9.f(d.d,a.d()._y());break;default:break}}return{p2:c}},ka:function(a,b,c){a.ad().p(b,"a");var d;d=c.s(a.d()._y());a.ad().h("val",d)},g9:function(a,b,c){c=new $$t.ha;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"val":c=$$t.$ha.f(d.d,a.d()._y());break;default:break}}return{p2:c}},kb:function(a,b,c){a.ad().p(b,"a");var d;d=c.s(a.d()._y());a.ad().h("val",d)},ha:function(a,b,c,d){c=new $$v.b7;d=new $$v.b7;var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case"cx":c=$$v.$b7.c(e.d);break;case"cy":d=$$v.$b7.c(e.d);break;default:break}}return{p2:c,p3:d}},kc:function(a,b,c,d){a.ad().p(b,"a");var e;e=c.toString();a.ad().h("cx",e);e=d.toString();a.ad().h("cy",e)},hb:function(a,b,c,d,e,f){c=$$t.$g6.a(0);d=$$t.$g6.a(0);e=$$t.$g6.a(0);f=$$t.$g6.a(0);var g=a.d()._y();var i=a.ab().u.getEnumerator();while(i.moveNext()){var h=i.current();switch(h.a.e(a.d())){case"l":c=$$t.$g6.c(h.d,g);break;case"t":d=$$t.$g6.c(h.d,g);break;case"r":e=$$t.$g6.c(h.d,g);break;case"b":f=$$t.$g6.c(h.d,g);break;default:break}}return{p2:c,p3:d,p4:e,p5:f}},kd:function(a,b,c,d,e,f){a.ad().p(b,"a");var g;var h=a.d()._y();if($$t.$g6.f(c,$$t.$g6.a(0))){g=c.p(h);a.ad().h("l",g)}if($$t.$g6.f(d,$$t.$g6.a(0))){g=d.p(h);a.ad().h("t",g)}if($$t.$g6.f(e,$$t.$g6.a(0))){g=e.p(h);a.ad().h("r",g)}if($$t.$g6.f(f,$$t.$g6.a(0))){g=f.p(h);a.ad().h("b",g)}},hc:function(a,b,c){c=0;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"idx":c=$.ig.util.parseUInt32_1(d.d,$$0.$cg.invariantCulture());break;default:break}}return{p2:c}},ke:function(a,b,c){a.ad().p(b,"a");var d;d=c.toString();
a.ad().h("idx",d)},hd:function(a,b,c,d,e,f){c=null;d=null;e=$m($$0.$a6.$type,null);f=1;var h=a.ab().u.getEnumerator();while(h.moveNext()){var g=h.current();switch(g.a.e(a.d())){case"typeface":c=g.d;break;case"panose":d=$$t.$g3.b(g.d);break;case"pitchFamily":e=$m($$0.$a6.$type,$.ig.util.parseInt8_1(g.d,$$0.$cg.invariantCulture()));break;case"charset":f=$.ig.util.parseInt8_1(g.d,$$0.$cg.invariantCulture());break;default:break}}return{p2:c,p3:d,p4:e,p5:f}},kf:function(a,b,c,d,e,f){a.ad().p(b,"a");var g;g=c!=null?c:"";a.ad().h("typeface",g);if(d!=null){g=d.toString();a.ad().h("panose",g)}if($l(e,null)){g=e.value().toString();a.ad().h("pitchFamily",g)}if(f!=1){g=f.toString();a.ad().h("charset",g)}},gf:function(a){},jh:function(a){$$t.$iq.j3(a,$$t.$iq.aq)},gg:function(a){},ji:function(a){$$t.$iq.j3(a,$$t.$iq.ar)},gh:function(a){},jj:function(a){$$t.$iq.j3(a,$$t.$iq.as)},gi:function(a){},jk:function(a){$$t.$iq.j3(a,$$t.$iq.at)},gj:function(a){},jl:function(a){$$t.$iq.j3(a,$$t.$iq.au)},gk:function(a){},jm:function(a){$$t.$iq.j3(a,$$t.$iq.av)},gl:function(a,b){var c=$$t.$iq.g8(a,$$t.$iq.ay,b);b=c.p2;return{p1:b}},jn:function(a,b){$$t.$iq.ka(a,$$t.$iq.ay,b)},gm:function(a,b){var c=$$t.$iq.g9(a,$$t.$iq.az,b);b=c.p2;return{p1:b}},jo:function(a,b){$$t.$iq.kb(a,$$t.$iq.az,b)},gn:function(a,b){var c=$$t.$iq.g2(a,$$t.$iq.a0,b);b=c.p2;return{p1:b}},jp:function(a,b){$$t.$iq.j4(a,$$t.$iq.a0,b)},go:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},jq:function(a){a.ad().p($$t.$iq.a4,"a")},gp:function(a,b,c,d){b=null;c=null;d=0;var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case $$t.$i0.ap:b=e.d;break;case $$t.$i0.as:c=e.d;break;case"cstate":d=$$t.$i4.b($$t.$f4.$type,e.d,d);break;default:break}}return{p1:b,p2:c,p3:d}},jr:function(a,b,c,d){a.ad().p($$t.$iq.a8,"a");var e;e=b;a.ad().h($$t.$i0.ap,e);e=c;a.ad().h($$t.$i0.as,e);if(d!=0){e=$$t.$i4.f($$t.$f4.$type,d);a.ad().h("cstate",e)}},gq:function(a,b,c){b=$m($$0.$be.$type,null);c=$m($$0.$aq.$type,null);var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"dpi":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(d.d,$$0.$cg.invariantCulture()));break;case"rotWithShape":c=$m($$0.$aq.$type,$$t.$g2.e(d.d));break;default:break}}return{p1:b,p2:c}},js:function(a,b,c){a.ad().p($$t.$iq.a9,"a");var d;if($l(b,null)){d=b.value().toString();a.ad().h("dpi",d)}if($l(c,null)){d=$$t.$g2.g(c.value());a.ad().h("rotWithShape",d)}},gr:function(a,b){var c=$$t.$iq.g5(a,$$t.$iq.ba,b);b=c.p2;return{p1:b}},jt:function(a,b){$$t.$iq.j7(a,$$t.$iq.ba,b)},gs:function(a,b){var c=$$t.$iq.g5(a,$$t.$iq.bb,b);b=c.p2;return{p1:b}},ju:function(a,b){$$t.$iq.j7(a,$$t.$iq.bb,b)},gt:function(a,b){var c=$$t.$iq.g5(a,$$t.$iq.bc,b);b=c.p2;return{p1:b}},jv:function(a,b){$$t.$iq.j7(a,$$t.$iq.bc,b)},gu:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){b=$m($$0.$aw.$type,null);c=$m($$0.$aq.$type,null);d=$m($$t.$h4.$type,null);e=$m($$t.$hv.$type,null);f=$m($$t.$h3.$type,null);g=$m($$t.$h5.$type,null);h=$m($$t.$gb.$type,null);i=$m($$t.$gb.$type,null);j=$m($$t.$gb.$type,null);k=$m($$t.$gb.$type,null);l=$m($$0.$aw.$type,null);m=$m($$0.$aw.$type,null);n=$m($$0.$aq.$type,null);o=$m($$0.$aq.$type,null);p=$m($$t.$hr.$type,null);q=$m($$0.$aq.$type,null);r=$m($$0.$aq.$type,null);s=false;t=$m($$0.$aq.$type,null);var v=a.ab().u.getEnumerator();while(v.moveNext()){var u=v.current();switch(u.a.e(a.d())){case"rot":b=$m($$0.$aw.$type,$ai(u.d,$$0.$cg.invariantCulture()));break;case"spcFirstLastPara":c=$m($$0.$aq.$type,$$t.$g2.e(u.d));break;case"vertOverflow":d=$m($$t.$h4.$type,$$t.$i4.b($$t.$h4.$type,u.d,null));break;case"horzOverflow":e=$m($$t.$hv.$type,$$t.$i4.b($$t.$hv.$type,u.d,null));break;case"vert":f=$m($$t.$h3.$type,$$t.$i4.b($$t.$h3.$type,u.d,null));break;case"wrap":g=$m($$t.$h5.$type,$$t.$i4.b($$t.$h5.$type,u.d,null));break;case"lIns":h=$m($$t.$gb.$type,$$t.$gb.g(u.d));break;case"tIns":i=$m($$t.$gb.$type,$$t.$gb.g(u.d));break;case"rIns":j=$m($$t.$gb.$type,$$t.$gb.g(u.d));break;case"bIns":k=$m($$t.$gb.$type,$$t.$gb.g(u.d));break;case"numCol":l=$m($$0.$aw.$type,$ai(u.d,$$0.$cg.invariantCulture()));break;case"spcCol":m=$m($$0.$aw.$type,$ai(u.d,$$0.$cg.invariantCulture()));break;case"rtlCol":n=$m($$0.$aq.$type,$$t.$g2.e(u.d));break;case"fromWordArt":o=$m($$0.$aq.$type,$$t.$g2.e(u.d));break;case"anchor":p=$m($$t.$hr.$type,$$t.$i4.b($$t.$hr.$type,u.d,null));break;case"anchorCtr":q=$m($$0.$aq.$type,$$t.$g2.e(u.d));break;case"forceAA":r=$m($$0.$aq.$type,$$t.$g2.e(u.d));break;case"upright":s=$$t.$g2.e(u.d);break;case"compatLnSpc":t=$m($$0.$aq.$type,$$t.$g2.e(u.d));break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n,p14:o,p15:p,p16:q,p17:r,p18:s,p19:t}},jw:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){a.ad().p($$t.$iq.be,"a");var u;if($l(b,null)){u=b.value().toString();a.ad().h("rot",u)}if($l(c,null)){u=$$t.$g2.g(c.value());a.ad().h("spcFirstLastPara",u)}if($l(d,null)){u=$$t.$i4.f($$t.$h4.$type,d.value());a.ad().h("vertOverflow",u)}if($l(e,null)){u=$$t.$i4.f($$t.$hv.$type,e.value());a.ad().h("horzOverflow",u)}if($l(f,null)){u=$$t.$i4.f($$t.$h3.$type,f.value());a.ad().h("vert",u)}if($l(g,null)){u=$$t.$i4.f($$t.$h5.$type,g.value());a.ad().h("wrap",u)}if($l(h,null)){u=h.value().toString();a.ad().h("lIns",u)}if($l(i,null)){u=i.value().toString();a.ad().h("tIns",u)}if($l(j,null)){u=j.value().toString();a.ad().h("rIns",u)}if($l(k,null)){u=k.value().toString();a.ad().h("bIns",u)}if($l(l,null)){u=l.value().toString();a.ad().h("numCol",u)}if($l(m,null)){u=m.value().toString();a.ad().h("spcCol",u)}if($l(n,null)){u=$$t.$g2.g(n.value());a.ad().h("rtlCol",u)}if($l(o,null)){u=$$t.$g2.g(o.value());a.ad().h("fromWordArt",u)}if($l(p,null)){u=$$t.$i4.f($$t.$hr.$type,p.value());a.ad().h("anchor",u)}if($l(q,null)){u=$$t.$g2.g(q.value());a.ad().h("anchorCtr",u)}if($l(r,null)){u=$$t.$g2.g(r.value());a.ad().h("forceAA",u)}if(s!=false){u=$$t.$g2.g(s);a.ad().h("upright",u)}if($l(t,null)){u=$$t.$g2.g(t.value());a.ad().h("compatLnSpc",u)}},gv:function(a,b,c){var d=$$t.$iq.ha(a,$$t.$iq.bh,b,c);b=d.p2;c=d.p3;return{p1:b,p2:c}},jx:function(a,b,c){$$t.$iq.kc(a,$$t.$iq.bh,b,c)},gw:function(a,b,c){var d=$$t.$iq.g6(a,$$t.$iq.bi,b,c);b=d.p2;c=d.p3;return{p1:b,p2:c}},jy:function(a,b,c){$$t.$iq.j8(a,$$t.$iq.bi,b,c)},gx:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"name":b=c.d;break;default:break}}return{p1:b}},jz:function(a,b){a.ad().p($$t.$iq.bj,"a");var c;c=b;a.ad().h("name",c)},gy:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},j0:function(a){a.ad().p($$t.$iq.bl,"a")},gz:function(a,b,c,d,e){var f=$$t.$iq.hd(a,$$t.$iq.bn,b,c,d,e);b=f.p2;c=f.p3;d=f.p4;e=f.p5;return{p1:b,p2:c,p3:d,p4:e}},j1:function(a,b,c,d,e){$$t.$iq.kf(a,$$t.$iq.bn,b,c,d,e)},he:function(a,b){b="";var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"name":b=c.d;break;default:break}}return{p1:b}},kg:function(a,b){a.ad().p($$t.$iq.bp,"a");var c;if(b!=""){c=b;a.ad().h("name",c)}},hf:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},kh:function(a){a.ad().p($$t.$iq.bq,"a")},hg:function(a){},ki:function(a){$$t.$iq.j3(a,$$t.$iq.bw)},hh:function(a){},kj:function(a){$$t.$iq.j3(a,$$t.$iq.bx)},hi:function(a,b,c,d,e){var f=$$t.$iq.hd(a,$$t.$iq.bz,b,c,d,e);b=f.p2;c=f.p3;d=f.p4;e=f.p5;return{p1:b,p2:c,p3:d,p4:e}},kk:function(a,b,c,d,e){$$t.$iq.kf(a,$$t.$iq.bz,b,c,d,e)},hj:function(a,b){var c=$$t.$iq.hc(a,$$t.$iq.b1,b);b=c.p2;return{p1:b}},kl:function(a,b){$$t.$iq.ke(a,$$t.$iq.b1,b)},hk:function(a,b,c){var d=$$t.$iq.ha(a,$$t.$iq.b4,b,c);b=d.p2;c=d.p3;return{p1:b,p2:c}},km:function(a,b,c){$$t.$iq.kc(a,$$t.$iq.b4,b,c)},hl:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},kn:function(a){a.ad().p($$t.$iq.b5,"a")},hm:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},ko:function(a){a.ad().p($$t.$iq.b6,"a")},hn:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},kp:function(a){a.ad().p($$t.$iq.b7,"a")},ho:function(a,b,c,d,e){var f=$$t.$iq.hb(a,$$t.$iq.b8,b,c,d,e);b=f.p2;c=f.p3;d=f.p4;e=f.p5;return{p1:b,p2:c,p3:d,p4:e}},kq:function(a,b,c,d,e){$$t.$iq.kd(a,$$t.$iq.b8,b,c,d,e)},hp:function(a,b){var c=$$t.$iq.hc(a,$$t.$iq.b9,b);b=c.p2;return{p1:b}},kr:function(a,b){$$t.$iq.ke(a,$$t.$iq.b9,b)},hq:function(a){},ks:function(a){$$t.$iq.j3(a,$$t.$iq.ce)},hr:function(a,b,c){b=null;c=null;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"script":b=d.d;break;case"typeface":c=d.d;break;default:break}}return{p1:b,p2:c}},kt:function(a,b,c){a.ad().p($$t.$iq.cf,"a");var d;d=b;a.ad().h("script",d);d=c;a.ad().h("typeface",d)},hs:function(a,b){b=0;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"idx":b=$$t.$i4.b($$t.$gm.$type,c.d,b);break;default:break}}return{p1:b}},ku:function(a,b){a.ad().p($$t.$iq.ch,"a");var c;c=$$t.$i4.f($$t.$gm.$type,b);a.ad().h("idx",c)},ht:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"name":b=c.d;break;default:break}}return{p1:b}},kv:function(a,b){a.ad().p($$t.$iq.ci,"a");var c;c=b;a.ad().h("name",c)},hu:function(a,b,c){b=null;c=null;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"name":b=d.d;break;case"fmla":c=d.d;break;default:break}}return{p1:b,p2:c}},kw:function(a,b,c){a.ad().p($$t.$iq.cl,"a");var d;d=b;a.ad().h("name",d);d=c;a.ad().h("fmla",d)},hv:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"uri":b=c.d;break;default:break}}return{p1:b}},kx:function(a,b){a.ad().p($$t.$iq.cn,"a");var c;c=b;a.ad().h("uri",c)},hw:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},ky:function(a){a.ad().p($$t.$iq.cm,"a")},hx:function(a,b,c,d,e,f,g){b=false;c=false;d=false;e=false;f=false;g=false;var i=a.ab().u.getEnumerator();while(i.moveNext()){var h=i.current();switch(h.a.e(a.d())){case"noGrp":b=$$t.$g2.e(h.d);break;case"noDrilldown":c=$$t.$g2.e(h.d);break;case"noSelect":d=$$t.$g2.e(h.d);break;case"noChangeAspect":e=$$t.$g2.e(h.d);break;case"noMove":f=$$t.$g2.e(h.d);break;case"noResize":g=$$t.$g2.e(h.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g}},kz:function(a,b,c,d,e,f,g){a.ad().p($$t.$iq.co,"a");var h;if(b!=false){h=$$t.$g2.g(b);a.ad().h("noGrp",h)}if(c!=false){h=$$t.$g2.g(c);a.ad().h("noDrilldown",h)}if(d!=false){h=$$t.$g2.g(d);a.ad().h("noSelect",h)}if(e!=false){h=$$t.$g2.g(e);a.ad().h("noChangeAspect",h)}if(f!=false){h=$$t.$g2.g(f);a.ad().h("noMove",h)}if(g!=false){h=$$t.$g2.g(g);a.ad().h("noResize",h)}},hy:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},k0:function(a){a.ad().p($$t.$iq.cp,"a")},hz:function(a,b){var c=$$t.$iq.g5(a,$$t.$iq.cq,b);b=c.p2;return{p1:b}},k1:function(a,b){$$t.$iq.j7(a,$$t.$iq.cq,b)},h0:function(a,b){var c=$$t.$iq.g5(a,$$t.$iq.cr,b);b=c.p2;return{p1:b}},k2:function(a,b){$$t.$iq.j7(a,$$t.$iq.cr,b)},h1:function(a,b){var c=$$t.$iq.g5(a,$$t.$iq.cs,b);b=c.p2;return{p1:b}},k3:function(a,b){$$t.$iq.j7(a,$$t.$iq.cs,b)},h2:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},k4:function(a){a.ad().p($$t.$iq.ct,"a")},h3:function(a,b,c,d){var e=$$t.$iq.g3(a,$$t.$iq.cv,b,c,d);b=e.p2;c=e.p3;d=e.p4;return{p1:b,p2:c,p3:d}},k5:function(a,b,c,d){$$t.$iq.j5(a,$$t.$iq.cv,b,c,d)},h4:function(a,b,c,d,e,f,g,h,i){b=null;c="";d="";e="";f="";g=true;h=false;i=false;var k=a.ab().u.getEnumerator();while(k.moveNext()){var j=k.current();switch(j.a.e(a.d())){case $$t.$i0.ar:b=j.d;break;case"invalidUrl":c=j.d;break;case"action":d=j.d;break;case"tgtFrame":e=j.d;break;case"tooltip":f=j.d;break;case"history":g=$$t.$g2.e(j.d);break;case"highlightClick":h=$$t.$g2.e(j.d);break;case"endSnd":i=$$t.$g2.e(j.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i}},k6:function(a,b,c,d,e,f,g,h,i){a.ad().p($$t.$iq.c0,"a");var j;j=b;a.ad().h($$t.$i0.ar,j);j=c;a.ad().h("invalidUrl",j);j=d;a.ad().h("action",j);j=e;a.ad().h("tgtFrame",j);j=f;a.ad().h("tooltip",j);if(g!=true){j=$$t.$g2.g(g);a.ad().h("history",j)}if(h!=false){j=$$t.$g2.g(h);a.ad().h("highlightClick",j)}if(i!=false){j=$$t.$g2.g(i);a.ad().h("endSnd",j)}},h5:function(a){},k7:function(a){$$t.$iq.j3(a,$$t.$iq.cz)},h6:function(a,b){var c=$$t.$iq.g7(a,$$t.$iq.c2,b);b=c.p2;return{p1:b}},k8:function(a,b){$$t.$iq.j9(a,$$t.$iq.c2,b)},h7:function(a,b){var c=$$t.$iq.g9(a,$$t.$iq.c3,b);b=c.p2;return{p1:b}},k9:function(a,b){$$t.$iq.kb(a,$$t.$iq.c3,b)},h8:function(a,b){var c=$$t.$iq.g0(a,$$t.$iq.c4,b);b=c.p2;return{p1:b}},la:function(a,b){$$t.$iq.j2(a,$$t.$iq.c4,b)},h9:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},lb:function(a){a.ad().p($$t.$iq.c9,"a")},ia:function(a,b,c,d,e){var f=$$t.$iq.hd(a,$$t.$iq.di,b,c,d,e);b=f.p2;c=f.p3;d=f.p4;e=f.p5;return{p1:b,p2:c,p3:d,p4:e}},lc:function(a,b,c,d,e){$$t.$iq.kf(a,$$t.$iq.di,b,c,d,e)},ib:function(a,b,c,d,e){b=$m($$t.$gz.$type,null);c=$m($$t.$gv.$type,null);d=$m($$t.$f7.$type,null);e=$m($$t.$g5.$type,null);var g=a.ab().u.getEnumerator();while(g.moveNext()){var f=g.current();switch(f.a.e(a.d())){case"w":b=$m($$t.$gz.$type,$$t.$gz.f(f.d));break;case"cap":c=$m($$t.$gv.$type,$$t.$i4.b($$t.$gv.$type,f.d,null));break;case"cmpd":d=$m($$t.$f7.$type,$$t.$i4.b($$t.$f7.$type,f.d,null));break;case"algn":e=$m($$t.$g5.$type,$$t.$i4.b($$t.$g5.$type,f.d,null));break;default:break}}return{p1:b,p2:c,p3:d,p4:e}},ld:function(a,b,c,d,e){a.ad().p($$t.$iq.dm,"a");var f;if($$t.$gz.j(b,$m($$t.$gz.$type,null))){f=b.toString();a.ad().h("w",f)}if($l(c,null)){f=$$t.$i4.f($$t.$gv.$type,c.value());a.ad().h("cap",f)}if($l(d,null)){f=$$t.$i4.f($$t.$f7.$type,d.value());a.ad().h("cmpd",f)}if($l(e,null)){f=$$t.$i4.f($$t.$g5.$type,e.value());a.ad().h("algn",f)}},ic:function(a,b){var c=$$t.$iq.hc(a,$$t.$iq.dn,b);b=c.p2;return{p1:b}},le:function(a,b){$$t.$iq.ke(a,$$t.$iq.dn,b)},id:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},lf:function(a){a.ad().p($$t.$iq.dp,"a")},ie:function(a){},lg:function(a){$$t.$iq.j3(a,$$t.$iq.dq)},ig:function(a){},lh:function(a){$$t.$iq.j3(a,$$t.$iq.dr)},ih:function(a,b){var c=$$t.$iq.g5(a,$$t.$iq.ds,b);b=c.p2;return{p1:b}},li:function(a,b){$$t.$iq.j7(a,$$t.$iq.ds,b)},ii:function(a,b){var c=$$t.$iq.g5(a,$$t.$iq.dt,b);b=c.p2;return{p1:b}},lj:function(a,b){$$t.$iq.j7(a,$$t.$iq.dt,b)},ij:function(a,b){var c=$$t.$iq.g5(a,$$t.$iq.du,b);b=c.p2;return{p1:b}},lk:function(a,b){$$t.$iq.j7(a,$$t.$iq.du,b)},ik:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},ll:function(a){a.ad().p($$t.$iq.dw,"a")},il:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},lm:function(a){a.ad().p($$t.$iq.dz,"a")},im:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},ln:function(a){a.ad().p($$t.$iq.ea,"a")},io:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},lo:function(a){a.ad().p($$t.$iq.ek,"a")},ip:function(a,b,c){var d=$$t.$iq.g6(a,$$t.$iq.el,b,c);b=d.p2;c=d.p3;return{p1:b,p2:c}},lp:function(a,b,c){$$t.$iq.j8(a,$$t.$iq.el,b,c)},iq:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},lq:function(a){a.ad().p($$t.$iq.em,"a")},ir:function(a,b,c,d,e,f,g,h,i,j,k,l){b=false;c=false;d=false;e=false;f=false;g=false;h=false;i=false;j=false;k=false;l=false;var n=a.ab().u.getEnumerator();while(n.moveNext()){var m=n.current();switch(m.a.e(a.d())){case"noGrp":b=$$t.$g2.e(m.d);break;case"noSelect":c=$$t.$g2.e(m.d);break;case"noRot":d=$$t.$g2.e(m.d);break;case"noChangeAspect":e=$$t.$g2.e(m.d);break;case"noMove":f=$$t.$g2.e(m.d);break;case"noResize":g=$$t.$g2.e(m.d);break;case"noEditPoints":h=$$t.$g2.e(m.d);break;case"noAdjustHandles":i=$$t.$g2.e(m.d);break;case"noChangeArrowheads":j=$$t.$g2.e(m.d);break;case"noChangeShapeType":k=$$t.$g2.e(m.d);break;case"noCrop":l=$$t.$g2.e(m.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l}},lr:function(a,b,c,d,e,f,g,h,i,j,k,l){a.ad().p($$t.$iq.eo,"a");var m;if(b!=false){m=$$t.$g2.g(b);a.ad().h("noGrp",m)}if(c!=false){m=$$t.$g2.g(c);a.ad().h("noSelect",m)}if(d!=false){m=$$t.$g2.g(d);a.ad().h("noRot",m)}if(e!=false){m=$$t.$g2.g(e);a.ad().h("noChangeAspect",m)}if(f!=false){m=$$t.$g2.g(f);a.ad().h("noMove",m)}if(g!=false){m=$$t.$g2.g(g);a.ad().h("noResize",m)}if(h!=false){m=$$t.$g2.g(h);a.ad().h("noEditPoints",m)}if(i!=false){m=$$t.$g2.g(i);a.ad().h("noAdjustHandles",m)}if(j!=false){m=$$t.$g2.g(j);a.ad().h("noChangeArrowheads",m)}if(k!=false){m=$$t.$g2.g(k);a.ad().h("noChangeShapeType",m)}if(l!=false){m=$$t.$g2.g(l);a.ad().h("noCrop",m)}},is:function(a,b,c,d,e,f,g,h,i,j,k,l){b=$m($$t.$hy.$type,null);c=$m($$t.$hy.$type,null);d=$m($$t.$hx.$type,null);e=$m($$t.$hw.$type,null);f=$m($$t.$hq.$type,null);g=$m($$t.$gb.$type,null);h=$m($$0.$aq.$type,null);i=$m($$0.$aq.$type,null);j=$m($$t.$ht.$type,null);k=$m($$0.$aq.$type,null);l=$m($$0.$aq.$type,null);var n=a.ab().u.getEnumerator();while(n.moveNext()){var m=n.current();switch(m.a.e(a.d())){case"marL":b=$m($$t.$hy.$type,$$t.$hy.c(m.d));break;case"marR":c=$m($$t.$hy.$type,$$t.$hy.c(m.d));break;case"lvl":d=$m($$t.$hx.$type,$$t.$hx.c(m.d));break;case"indent":e=$m($$t.$hw.$type,$$t.$hw.c(m.d));break;case"algn":f=$m($$t.$hq.$type,$$t.$i4.b($$t.$hq.$type,m.d,null));break;case"defTabSz":g=$m($$t.$gb.$type,$$t.$gb.g(m.d));break;case"rtl":h=$m($$0.$aq.$type,$$t.$g2.e(m.d));break;case"eaLnBrk":i=$m($$0.$aq.$type,$$t.$g2.e(m.d));break;case"fontAlgn":j=$m($$t.$ht.$type,$$t.$i4.b($$t.$ht.$type,m.d,null));break;case"latinLnBrk":k=$m($$0.$aq.$type,$$t.$g2.e(m.d));break;case"hangingPunct":l=$m($$0.$aq.$type,$$t.$g2.e(m.d));break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l}},ls:function(a,b,c,d,e,f,g,h,i,j,k,l){a.ad().p($$t.$iq.eq,"a");var m;if($l(b,null)){m=b.value().toString();a.ad().h("marL",m)}if($l(c,null)){m=c.value().toString();a.ad().h("marR",m)}if($l(d,null)){m=d.value().toString();a.ad().h("lvl",m)}if($l(e,null)){m=e.value().toString();a.ad().h("indent",m)}if($l(f,null)){m=$$t.$i4.f($$t.$hq.$type,f.value());a.ad().h("algn",m)}if($l(g,null)){m=g.value().toString();a.ad().h("defTabSz",m)}if($l(h,null)){m=$$t.$g2.g(h.value());a.ad().h("rtl",m)}if($l(i,null)){m=$$t.$g2.g(i.value());a.ad().h("eaLnBrk",m)}if($l(j,null)){m=$$t.$i4.f($$t.$ht.$type,j.value());a.ad().h("fontAlgn",m)}if($l(k,null)){m=$$t.$g2.g(k.value());a.ad().h("latinLnBrk",m)}if($l(l,null)){m=$$t.$g2.g(l.value());a.ad().h("hangingPunct",m)}},it:function(a,b){b=0;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"prst":b=$$t.$i4.b($$v.$cf.$type,c.d,b);break;default:break}}return{p1:b}},lt:function(a,b){a.ad().p($$t.$iq.es,"a");var c;c=$$t.$i4.f($$v.$cf.$type,b);a.ad().h("prst",c)},iu:function(a,b){var c=$$t.$iq.g5(a,$$t.$iq.ev,b);b=c.p2;return{p1:b}},lu:function(a,b){$$t.$iq.j7(a,$$t.$iq.ev,b)},iv:function(a,b){var c=$$t.$iq.g5(a,$$t.$iq.ew,b);b=c.p2;return{p1:b}},lv:function(a,b){$$t.$iq.j7(a,$$t.$iq.ew,b)},iw:function(a,b){var c=$$t.$iq.g5(a,$$t.$iq.ex,b);b=c.p2;return{p1:b}},lw:function(a,b){$$t.$iq.j7(a,$$t.$iq.ex,b)},ix:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},lx:function(a){a.ad().p($$t.$iq.et,"a")},iy:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){b=$m($$0.$aq.$type,null);c=null;d=null;e=$m($$t.$hu.$type,null);f=$m($$0.$aq.$type,null);g=$m($$0.$aq.$type,null);h=$m($$t.$h2.$type,null);i=$m($$t.$h1.$type,null);j=$m($$0.$aw.$type,null);k=$m($$t.$hs.$type,null);l=$m($$t.$hz.$type,null);m=$m($$0.$aq.$type,null);n=$m($$t.$g6.$type,null);o=$m($$0.$aq.$type,null);p=true;q=false;r=true;s=0;t=null;var v=a.ab().u.getEnumerator();while(v.moveNext()){var u=v.current();switch(u.a.e(a.d())){case"kumimoji":b=$m($$0.$aq.$type,$$t.$g2.e(u.d));break;case"lang":c=u.d;break;case"altLang":d=u.d;break;case"sz":e=$m($$t.$hu.$type,$$t.$hu.c(u.d));break;case"b":f=$m($$0.$aq.$type,$$t.$g2.e(u.d));break;case"i":g=$m($$0.$aq.$type,$$t.$g2.e(u.d));break;case"u":h=$m($$t.$h2.$type,$$t.$i4.b($$t.$h2.$type,u.d,null));break;case"strike":i=$m($$t.$h1.$type,$$t.$i4.b($$t.$h1.$type,u.d,null));break;case"kern":j=$m($$0.$aw.$type,$ai(u.d,$$0.$cg.invariantCulture()));break;case"cap":k=$m($$t.$hs.$type,$$t.$i4.b($$t.$hs.$type,u.d,null));break;case"spc":l=$m($$t.$hz.$type,$$t.$hz.a(u.d));break;case"normalizeH":m=$m($$0.$aq.$type,$$t.$g2.e(u.d));break;case"baseline":n=$m($$t.$g6.$type,$$t.$g6.c(u.d,a.d()._y()));break;case"noProof":o=$m($$0.$aq.$type,$$t.$g2.e(u.d));break;case"dirty":p=$$t.$g2.e(u.d);break;case"err":q=$$t.$g2.e(u.d);break;case"smtClean":r=$$t.$g2.e(u.d);break;case"smtId":s=$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture());break;case"bmk":t=u.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n,p14:o,p15:p,p16:q,p17:r,p18:s,p19:t}},ly:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){a.ad().p($$t.$iq.e1,"a");var u;if($l(b,null)){u=$$t.$g2.g(b.value());a.ad().h("kumimoji",u)}u=c;a.ad().h("lang",u);u=d;a.ad().h("altLang",u);if($l(e,null)){u=e.value().toString();a.ad().h("sz",u)}if($l(f,null)){u=$$t.$g2.g(f.value());a.ad().h("b",u)}if($l(g,null)){u=$$t.$g2.g(g.value());a.ad().h("i",u)}if($l(h,null)){u=$$t.$i4.f($$t.$h2.$type,h.value());a.ad().h("u",u)}if($l(i,null)){u=$$t.$i4.f($$t.$h1.$type,i.value());a.ad().h("strike",u)}if($l(j,null)){u=j.value().toString();a.ad().h("kern",u)}if($l(k,null)){u=$$t.$i4.f($$t.$hs.$type,k.value());a.ad().h("cap",u)}if($l(l,null)){u=l.value().toString();a.ad().h("spc",u)}if($l(m,null)){u=$$t.$g2.g(m.value());a.ad().h("normalizeH",u)}if($$t.$g6.g(n,$m($$t.$g6.$type,null))){u=n.value().p(a.d()._y());a.ad().h("baseline",u)}if($l(o,null)){u=$$t.$g2.g(o.value());a.ad().h("noProof",u)}if(p!=true){u=$$t.$g2.g(p);a.ad().h("dirty",u)}if(q!=false){u=$$t.$g2.g(q);a.ad().h("err",u)}if(r!=true){u=$$t.$g2.g(r);a.ad().h("smtClean",u)}if(s!=0){u=s.toString();a.ad().h("smtId",u)}u=t;a.ad().h("bmk",u)},iz:function(a,b){var c=$$t.$iq.g5(a,$$t.$iq.e4,b);b=c.p2;return{p1:b}},lz:function(a,b){$$t.$iq.j7(a,$$t.$iq.e4,b)},i0:function(a,b){var c=$$t.$iq.g5(a,$$t.$iq.e5,b);b=c.p2;return{p1:b}},l0:function(a,b){$$t.$iq.j7(a,$$t.$iq.e5,b)},i1:function(a,b){var c=$$t.$iq.g5(a,$$t.$iq.e6,b);b=c.p2;return{p1:b}},l1:function(a,b){$$t.$iq.j7(a,$$t.$iq.e6,b)},i2:function(a,b){b=0;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"val":b=$$t.$i4.b($$t.$hf.$type,c.d,b);break;default:break}}return{p1:b}},l2:function(a,b){a.ad().p($$t.$iq.e7,"a");var c;c=$$t.$i4.f($$t.$hf.$type,b);a.ad().h("val",c)},i3:function(a,b){var c=$$t.$iq.g8(a,$$t.$iq.e9,b);b=c.p2;return{p1:b}},l3:function(a,b){$$t.$iq.ka(a,$$t.$iq.e9,b)},i4:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},l4:function(a){a.ad().p($$t.$iq.fc,"a")},i5:function(a,b,c,d,e,f,g,h,i,j,k,l){b=false;c=false;d=false;e=false;f=false;g=false;h=false;i=false;j=false;k=false;l=false;var n=a.ab().u.getEnumerator();while(n.moveNext()){var m=n.current();switch(m.a.e(a.d())){case"noGrp":b=$$t.$g2.e(m.d);break;case"noSelect":c=$$t.$g2.e(m.d);break;case"noRot":d=$$t.$g2.e(m.d);break;case"noChangeAspect":e=$$t.$g2.e(m.d);break;case"noMove":f=$$t.$g2.e(m.d);break;case"noResize":g=$$t.$g2.e(m.d);break;case"noEditPoints":h=$$t.$g2.e(m.d);break;case"noAdjustHandles":i=$$t.$g2.e(m.d);break;case"noChangeArrowheads":j=$$t.$g2.e(m.d);break;case"noChangeShapeType":k=$$t.$g2.e(m.d);break;case"noTextEdit":l=$$t.$g2.e(m.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l}},l5:function(a,b,c,d,e,f,g,h,i,j,k,l){a.ad().p($$t.$iq.fg,"a");var m;if(b!=false){m=$$t.$g2.g(b);a.ad().h("noGrp",m)}if(c!=false){m=$$t.$g2.g(c);a.ad().h("noSelect",m)}if(d!=false){m=$$t.$g2.g(d);a.ad().h("noRot",m)}if(e!=false){m=$$t.$g2.g(e);a.ad().h("noChangeAspect",m)}if(f!=false){m=$$t.$g2.g(f);a.ad().h("noMove",m)}if(g!=false){m=$$t.$g2.g(g);a.ad().h("noResize",m)}if(h!=false){m=$$t.$g2.g(h);a.ad().h("noEditPoints",m)}if(i!=false){m=$$t.$g2.g(i);a.ad().h("noAdjustHandles",m)}if(j!=false){m=$$t.$g2.g(j);a.ad().h("noChangeArrowheads",m)}if(k!=false){m=$$t.$g2.g(k);a.ad().h("noChangeShapeType",m)}if(l!=false){m=$$t.$g2.g(l);a.ad().h("noTextEdit",m)}},i6:function(a,b,c,d,e){var f=$$t.$iq.hb(a,$$t.$iq.fh,b,c,d,e);b=f.p2;c=f.p3;d=f.p4;e=f.p5;return{p1:b,p2:c,p3:d,p4:e}},l6:function(a,b,c,d,e){$$t.$iq.kd(a,$$t.$iq.fh,b,c,d,e)},i7:function(a,b){b=$$t.$gq.a;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"val":b=$$t.$gq.d(c.d);break;default:break}}return{p1:b}},l7:function(a,b){a.ad().p($$t.$iq.fi,"a");var c;c=b.toString();a.ad().h("val",c)},i8:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},l8:function(a){a.ad().p($$t.$iq.fj,"a")},i9:function(a,b,c){b=0;c=$$t.$gq.a;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"val":b=$$t.$i4.b($$t.$hp.$type,d.d,b);break;case"lastClr":c=$$t.$gq.d(d.d);break;default:break}}return{p1:b,p2:c}},l9:function(a,b,c){a.ad().p($$t.$iq.fn,"a");var d;d=$$t.$i4.f($$t.$hp.$type,b);a.ad().h("val",d);d=c.toString();a.ad().h("lastClr",d)},ja:function(a,b,c,d){var e=$$t.$iq.g3(a,$$t.$iq.fr,b,c,d);b=e.p2;c=e.p3;d=e.p4;return{p1:b,p2:c,p3:d}},ma:function(a,b,c,d){$$t.$iq.j5(a,$$t.$iq.fr,b,c,d)},jb:function(a,b){var c=$$t.$ii.u(a,$$t.$iq.fp,b,6);b=c.p2;return{p1:b}},mb:function(a,b){$$t.$ii.ai(a,$$t.$iq.fp,"a",b,null,6)},jc:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"name":b=c.d;break;default:break}}return{p1:b}},mc:function(a,b){a.ad().p($$t.$iq.ft,"a");var c;c=b;a.ad().h("name",c);a.ad().l($$t.$it.an,true)},jd:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},md:function(a){a.ad().p($$t.$iq.fu,"a")},je:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},me:function(a){a.ad().p($$t.$iq.fv,"a")},jf:function(a,b){var c=$$t.$iq.g8(a,$$t.$iq.fx,b);b=c.p2;return{p1:b}},mf:function(a,b){$$t.$iq.ka(a,$$t.$iq.fx,b)},jg:function(a,b,c,d){b=$$v.$cc.a(0);c=false;d=false;var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case"rot":b=$$v.$cc.b(e.d);break;case"flipH":c=$$t.$g2.e(e.d);break;case"flipV":d=$$t.$g2.e(e.d);break;default:break}}return{p1:b,p2:c,p3:d}},mg:function(a,b,c,d){a.ad().p($$t.$iq.gd,"a");var e;if(b.l()!=0){e=b.toString();a.ad().h("rot",e)}if(c!=false){e=$$t.$g2.g(c);a.ad().h("flipH",e)}if(d!=false){e=$$t.$g2.g(d);a.ad().h("flipV",e)}},$type:new $.ig.Type("DrawingMLMain",$$t.$i4.$type)},true);$c("DrawingNamespaceDefinitionBase:ir","XmlNamespaceDefinitionBase",{an:null,ap:null,aq:null,ar:null,as:null,at:null,au:null,av:null,aw:null,ay:null,a3:null,a4:null,a5:null,a6:null,bn:null,bo:null,bp:null,bq:null,br:null,bs:null,bw:null,bx:null,by:null,bz:null,b1:null,b3:null,init:function(){$$t.$i4.init.call(this);this.an=this.ba()+"/blipFill";this.ap=this.ba()+"/cNvCxnSpPr";this.aq=this.ba()+"/cNvGraphicFramePr";this.ar=this.ba()+"/cNvGrpSpPr";this.as=this.ba()+"/cNvPicPr";this.at=this.ba()+"/cNvPr";this.au=this.ba()+"/cNvSpPr";this.av=this.ba()+"/cxnSp";this.aw=this.ba()+"/cxnSpLocks";this.ay=this.ba()+"/endCxn";this.a3=this.ba()+"/graphicFrame";this.a4=this.ba()+"/grpSp";this.a5=this.ba()+"/grpSpLocks";this.a6=this.ba()+"/grpSpPr";this.bn=this.ba()+"/nvCxnSpPr";this.bo=this.ba()+"/nvGraphicFramePr";this.bp=this.ba()+"/nvGrpSpPr";this.bq=this.ba()+"/nvPicPr";this.br=this.ba()+"/nvSpPr";this.bs=this.ba()+"/pic";this.bw=this.ba()+"/sp";this.bx=this.ba()+"/spPr";this.by=this.ba()+"/stCxn";this.bz=this.ba()+"/style";this.b1=this.ba()+"/txBody";this.b3=this.ba()+"/xfrm"},i:function(a){switch(a){case 0:return this.bb();case 1:return this.ba();default:return this.bb()}},cb:function(a,b,c,d){c=0;d=0;var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case"id":c=$.ig.util.parseUInt32_1(e.d,$$0.$cg.invariantCulture());break;case"idx":d=$.ig.util.parseUInt32_1(e.d,$$0.$cg.invariantCulture());break;default:break}}return{p2:c,p3:d}},c2:function(a,b,c,d){a.ad().p(b,this.j());var e;if(c!=0){e=c.toString();a.ad().h("id",e)}if(d!=0){e=d.toString();a.ad().h("idx",e)}},da:function(a,b){if(String.isNullOrEmpty(b)){return}$$t.$ir.da(a,b)},b4:function(a,b,c){b=$m($$0.$be.$type,null);c=$m($$0.$aq.$type,null);var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"dpi":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(d.d,$$0.$cg.invariantCulture()));break;case"rotWithShape":c=$m($$0.$aq.$type,$$t.$g2.e(d.d));break;default:break}}return{p1:b,p2:c}},cv:function(a,b,c){a.ad().p(this.an,this.j());var d;if($l(b,null)){d=b.value().toString();a.ad().h("dpi",d)}if($l(c,null)){d=$$t.$g2.g(c.value());a.ad().h("rotWithShape",d)}},b5:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},cw:function(a){a.ad().p(this.ap,this.j())},b6:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},cx:function(a){a.ad().p(this.aq,this.j())},b7:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},cy:function(a){a.ad().p(this.ar,this.j())},b8:function(a,b){b=true;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"preferRelativeResize":b=$$t.$g2.e(c.d);break;default:break}}return{p1:b}},cz:function(a,b){a.ad().p(this.as,this.j());var c;if(b!=true){c=$$t.$g2.g(b);a.ad().h("preferRelativeResize",c)}},b9:function(a,b,c,d,e,f){var g=$$t.$iq.g4(a,this.at,b,c,d,e,f);b=g.p2;c=g.p3;d=g.p4;e=g.p5;f=g.p6;return{p1:b,p2:c,p3:d,p4:e,p5:f}},c0:function(a,b,c,d,e,f){$$t.$iq.j6(a,this.at,b,c,d,e,f)},ca:function(a,b){b=false;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"txBox":b=$$t.$g2.e(c.d);break;default:break}}return{p1:b}},c1:function(a,b){a.ad().p(this.au,this.j());var c;if(b!=false){c=$$t.$g2.g(b);a.ad().h("txBox",c)}},cc:function(a,b,c){b=null;c=false;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"macro":b=d.d;break;case"fPublished":c=$$t.$g2.e(d.d);break;default:break}}return{p1:b,p2:c}},c3:function(a,b,c){a.ad().p(this.av,this.j());var d;d=b;$$t.$ir.da(a,d);if(c!=false){d=$$t.$g2.g(c);a.ad().h("fPublished",d)}},cd:function(a,b,c,d,e,f,g,h,i,j,k){b=false;c=false;d=false;e=false;f=false;g=false;h=false;i=false;j=false;k=false;var m=a.ab().u.getEnumerator();while(m.moveNext()){var l=m.current();switch(l.a.e(a.d())){case"noGrp":b=$$t.$g2.e(l.d);break;case"noSelect":c=$$t.$g2.e(l.d);break;case"noRot":d=$$t.$g2.e(l.d);break;case"noChangeAspect":e=$$t.$g2.e(l.d);break;case"noMove":f=$$t.$g2.e(l.d);break;case"noResize":g=$$t.$g2.e(l.d);break;case"noEditPoints":h=$$t.$g2.e(l.d);break;case"noAdjustHandles":i=$$t.$g2.e(l.d);break;case"noChangeArrowheads":j=$$t.$g2.e(l.d);
break;case"noChangeShapeType":k=$$t.$g2.e(l.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k}},c4:function(a,b,c,d,e,f,g,h,i,j,k){a.ad().p(this.aw,this.j());var l;if(b!=false){l=$$t.$g2.g(b);a.ad().h("noGrp",l)}if(c!=false){l=$$t.$g2.g(c);a.ad().h("noSelect",l)}if(d!=false){l=$$t.$g2.g(d);a.ad().h("noRot",l)}if(e!=false){l=$$t.$g2.g(e);a.ad().h("noChangeAspect",l)}if(f!=false){l=$$t.$g2.g(f);a.ad().h("noMove",l)}if(g!=false){l=$$t.$g2.g(g);a.ad().h("noResize",l)}if(h!=false){l=$$t.$g2.g(h);a.ad().h("noEditPoints",l)}if(i!=false){l=$$t.$g2.g(i);a.ad().h("noAdjustHandles",l)}if(j!=false){l=$$t.$g2.g(j);a.ad().h("noChangeArrowheads",l)}if(k!=false){l=$$t.$g2.g(k);a.ad().h("noChangeShapeType",l)}},ce:function(a,b,c){var d=this.cb(a,this.ay,b,c);b=d.p2;c=d.p3;return{p1:b,p2:c}},c5:function(a,b,c){this.c2(a,this.ay,b,c)},cf:function(a,b,c){b=null;c=false;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"macro":b=d.d;break;case"fPublished":c=$$t.$g2.e(d.d);break;default:break}}return{p1:b,p2:c}},c6:function(a,b,c){a.ad().p(this.a3,this.j());var d;d=b;$$t.$ir.da(a,d);if(c!=false){d=$$t.$g2.g(c);a.ad().h("fPublished",d)}},cg:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},c7:function(a){a.ad().p(this.a4,this.j())},ch:function(a,b,c,d,e,f,g,h){b=false;c=false;d=false;e=false;f=false;g=false;h=false;var j=a.ab().u.getEnumerator();while(j.moveNext()){var i=j.current();switch(i.a.e(a.d())){case"noGrp":b=$$t.$g2.e(i.d);break;case"noUngrp":c=$$t.$g2.e(i.d);break;case"noSelect":d=$$t.$g2.e(i.d);break;case"noRot":e=$$t.$g2.e(i.d);break;case"noChangeAspect":f=$$t.$g2.e(i.d);break;case"noMove":g=$$t.$g2.e(i.d);break;case"noResize":h=$$t.$g2.e(i.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h}},c8:function(a,b,c,d,e,f,g,h){a.ad().p(this.a5,this.j());var i;if(b!=false){i=$$t.$g2.g(b);a.ad().h("noGrp",i)}if(c!=false){i=$$t.$g2.g(c);a.ad().h("noUngrp",i)}if(d!=false){i=$$t.$g2.g(d);a.ad().h("noSelect",i)}if(e!=false){i=$$t.$g2.g(e);a.ad().h("noRot",i)}if(f!=false){i=$$t.$g2.g(f);a.ad().h("noChangeAspect",i)}if(g!=false){i=$$t.$g2.g(g);a.ad().h("noMove",i)}if(h!=false){i=$$t.$g2.g(h);a.ad().h("noResize",i)}},ci:function(a,b){b=$m($$t.$f3.$type,null);var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"bwMode":b=$m($$t.$f3.$type,$$t.$i4.b($$t.$f3.$type,c.d,null));break;default:break}}return{p1:b}},c9:function(a,b){a.ad().p(this.a6,this.j());var c;if($l(b,null)){c=$$t.$i4.f($$t.$f3.$type,b.value());a.ad().h("bwMode",c)}},cj:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},db:function(a){a.ad().p(this.bn,this.j())},ck:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},dc:function(a){a.ad().p(this.bo,this.j())},cl:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},dd:function(a){a.ad().p(this.bp,this.j())},cm:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},de:function(a){a.ad().p(this.bq,this.j())},cn:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},df:function(a){a.ad().p(this.br,this.j())},co:function(a,b,c){b="";c=false;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"macro":b=d.d;break;case"fPublished":c=$$t.$g2.e(d.d);break;default:break}}return{p1:b,p2:c}},dg:function(a,b,c){a.ad().p(this.bs,this.j());var d;d=b;$$t.$ir.da(a,d);if(c!=false){d=$$t.$g2.g(c);a.ad().h("fPublished",d)}},cp:function(a,b,c,d,e){b=null;c=null;d=true;e=false;var g=a.ab().u.getEnumerator();while(g.moveNext()){var f=g.current();switch(f.a.e(a.d())){case"macro":b=f.d;break;case"textlink":c=f.d;break;case"fLocksText":d=$$t.$g2.e(f.d);break;case"fPublished":e=$$t.$g2.e(f.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e}},dh:function(a,b,c,d,e){a.ad().p(this.bw,this.j());var f;f=b;$$t.$ir.da(a,f);f=c;a.ad().h("textlink",f);if(d!=true){f=$$t.$g2.g(d);a.ad().h("fLocksText",f)}if(e!=false){f=$$t.$g2.g(e);a.ad().h("fPublished",f)}},cq:function(a,b){b=$m($$t.$f3.$type,null);var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"bwMode":b=$m($$t.$f3.$type,$$t.$i4.b($$t.$f3.$type,c.d,null));break;default:break}}return{p1:b}},di:function(a,b){a.ad().p(this.bx,this.j());var c;if($l(b,null)){c=$$t.$i4.f($$t.$f3.$type,b.value());a.ad().h("bwMode",c)}},cr:function(a,b,c){var d=this.cb(a,this.by,b,c);b=d.p2;c=d.p3;return{p1:b,p2:c}},dj:function(a,b,c){this.c2(a,this.by,b,c)},cs:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},dk:function(a){a.ad().p(this.bz,this.j())},ct:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},dl:function(a){a.ad().p(this.b1,this.j())},cu:function(a,b,c,d){b=$$v.$cc.a(0);c=false;d=false;var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case"rot":b=$$v.$cc.b(e.d);break;case"flipH":c=$$t.$g2.e(e.d);break;case"flipV":d=$$t.$g2.e(e.d);break;default:break}}return{p1:b,p2:c,p3:d}},dm:function(a,b,c,d){a.ad().p(this.b3,this.j());var e;if(b.l()!=0){e=b.toString();a.ad().h("rot",e)}if(c!=false){e=$$t.$g2.g(c);a.ad().h("flipH",e)}if(d!=false){e=$$t.$g2.g(d);a.ad().h("flipV",e)}},ba:function(){},bb:function(){},$type:new $.ig.Type("DrawingNamespaceDefinitionBase",$$t.$i4.$type)},true);$c("EmptyNamespace:is","XmlNamespaceDefinitionBase",{init:function(){$$t.$i4.init.call(this)},i:function(a){return String.empty()},j:function(){return String.empty()},ap:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},aq:function(a,b,c){a.ad().o("xml");var d=a.d()._y();a.ad().l($$t.$i2.an,false);a.ad().l($$t.$i1.an,false)},$type:new $.ig.Type("EmptyNamespace",$$t.$i4.$type)},true);$c("IGOfficeExtensions:it","XmlNamespaceDefinitionBase",{init:function(){$$t.$i4.init.call(this)},i:function(a){return $$t.$it.ar},j:function(){return"ig"},$type:new $.ig.Type("IGOfficeExtensions",$$t.$i4.$type)},true);$c("MarkupCompatibility2006:iu","XmlNamespaceDefinitionBase",{init:function(){$$t.$i4.init.call(this)},i:function(a){return $$t.$iu.at},j:function(){return"mc"},av:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},ay:function(a){a.ad().p($$t.$iu.ap,"mc")},aw:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"Requires":b=c.d;break;default:break}}return{p1:b}},az:function(a,b){$$t.$iu.a0(a,$.ig.util.stringJoin1(String," ",$$5.$e.o($$t.$i4.$type,String,b,function(c){return c.j()})))},a0:function(a,b){a.ad().p($$t.$iu.aq,"mc");var c;c=b;a.ad().h("Requires",c)},ax:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},a1:function(a){a.ad().p($$t.$iu.ar,"mc")},$type:new $.ig.Type("MarkupCompatibility2006",$$t.$i4.$type)},true);$c("OfficeDocumentDocPropsVTypes:iv","XmlNamespaceDefinitionBase",{init:function(){$$t.$i4.init.call(this)},i:function(a){switch(a){case 0:return $$t.$iv.a1;case 1:return $$t.$iv.a0;default:return $$t.$iv.a1}},j:function(){return"vt"},bt:function(a,b){var c=$$t.$iz.o(a,$$t.$iv.at,b);b=c.p2;return{p1:b}},cf:function(a,b){$$t.$iz.ac(a,$$t.$iv.at,"vt",b)},bu:function(a,b){var c=$$t.$iz.o(a,$$t.$iv.ao,b);b=c.p2;return{p1:b}},cg:function(a,b){$$t.$iz.ac(a,$$t.$iv.ao,"vt",b)},bv:function(a,b){var c=$$t.$iz.m(a,$$t.$iv.au,b);b=c.p2;return{p1:b}},ch:function(a,b){$$t.$iz.aa(a,$$t.$iv.au,"vt",b)},bw:function(a,b){var c=$$t.$iz.t(a,$$t.$iv.av,b);b=c.p2;return{p1:b}},ci:function(a,b){$$t.$iz.ah(a,$$t.$iv.av,"vt",b)},bx:function(a,b){var c=$$t.$iz.r(a,$$t.$iv.aw,b);b=c.p2;return{p1:b}},cj:function(a,b){$$t.$iz.af(a,$$t.$iv.aw,"vt",b)},by:function(a,b){var c=$$t.$iz.s(a,$$t.$iv.ax,b);b=c.p2;return{p1:b}},ck:function(a,b){$$t.$iz.ag(a,$$t.$iv.ax,"vt",b)},bz:function(a,b){var c=$$t.$iz.r(a,$$t.$iv.ap,b);b=c.p2;return{p1:b}},cl:function(a,b){$$t.$iz.af(a,$$t.$iv.ap,"vt",b)},b0:function(a,b){var c=$$t.$iz.u(a,$$t.$iv.ay,b,0);b=c.p2;return{p1:b}},cm:function(a,b){$$t.$iz.ai(a,$$t.$iv.ay,"vt",b,null,0)},b1:function(a,b){var c=$$t.$iz.u(a,$$t.$iv.az,b,0);b=c.p2;return{p1:b}},cn:function(a,b){$$t.$iz.ai(a,$$t.$iv.az,"vt",b,null,0)},b2:function(a,b){var c=$$t.$iz.q(a,$$t.$iv.a2,b);b=c.p2;return{p1:b}},co:function(a,b){$$t.$iz.ae(a,$$t.$iv.a2,"vt",b)},b3:function(a,b){var c=$$t.$iz.p(a,$$t.$iv.a3,b);b=c.p2;return{p1:b}},cp:function(a,b){$$t.$iz.ad(a,$$t.$iv.a3,"vt",b)},b4:function(a,b){var c=$$t.$iz.v(a,$$t.$iv.a5,b);b=c.p2;return{p1:b}},cq:function(a,b){$$t.$iz.aj(a,$$t.$iv.a5,"vt",b)},b5:function(a,b){var c=$$t.$iz.y(a,$$t.$iv.a6,b);b=c.p2;return{p1:b}},cr:function(a,b){$$t.$iz.am(a,$$t.$iv.a6,"vt",b)},b6:function(a,b){var c=$$t.$iz.w(a,$$t.$iv.a7,b);b=c.p2;return{p1:b}},cs:function(a,b){$$t.$iz.ak(a,$$t.$iv.a7,"vt",b)},b7:function(a,b){var c=$$t.$iz.x(a,$$t.$iv.a8,b);b=c.p2;return{p1:b}},ct:function(a,b){$$t.$iz.al(a,$$t.$iv.a8,"vt",b)},b8:function(a,b){var c=$$t.$iz.w(a,$$t.$iv.a7,b);b=c.p2;return{p1:b}},cu:function(a,b){$$t.$iz.ak(a,$$t.$iv.a7,"vt",b)},b9:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},cv:function(a){a.ad().p($$t.$iv.a9,"vt")},ca:function(a,b,c){b=0;c=0;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"baseType":b=$$t.$i4.b($$t.$ie.$type,d.d,b);break;case"size":c=$.ig.util.parseUInt32_1(d.d,$$0.$cg.invariantCulture());break;default:break}}return{p1:b,p2:c}},cw:function(a,b,c){a.ad().p($$t.$iv.ba,"vt");var d;d=$$t.$i4.f($$t.$ie.$type,b);a.ad().h("baseType",d);d=c.toString();a.ad().h("size",d)},bb:function(a){var b=a.s().a($$t.$ix.$type);if(b==null){return}var c;var d=$$t.$iv.bu(a,c);c=d.p1;b.setValue(c,a.ab().ab)},bc:function(a){var b=a.s().a($$t.$ix.$type);if(b==null){return}var c;var d=$$t.$iv.bu(a,c);c=d.p1;b.setValue(c,a.ab().ab)},bd:function(a){var b=a.s().a($$t.$ix.$type);if(b==null){return}var c;var d=$$t.$iv.bv(a,c);c=d.p1;b.setValue(c,a.ab().ab)},be:function(a){var b=a.s().a($$t.$ix.$type);if(b==null){return}var c;var d=$$t.$iv.bw(a,c);c=d.p1;b.setValue(c,a.ab().ab)},bf:function(a){var b=a.s().a($$t.$ix.$type);if(b==null){return}var c;var d=$$t.$iv.bx(a,c);c=d.p1;b.setValue(c,a.ab().ab)},bg:function(a){var b=a.s().a($$t.$ix.$type);if(b==null){return}var c;var d=$$t.$iv.by(a,c);c=d.p1;b.setValue(c,a.ab().ab)},bh:function(a){var b=a.s().a($$t.$ix.$type);if(b==null){return}var c;var d=$$t.$iv.bz(a,c);c=d.p1;b.setValue(c,a.ab().ab)},bi:function(a){var b=a.s().a($$t.$ix.$type);if(b==null){return}var c;var d=$$t.$iv.b0(a,c);c=d.p1;b.setValue(c,a.ab().ab)},bj:function(a){var b=a.s().a($$t.$ix.$type);if(b==null){return}var c;var d=$$t.$iv.b1(a,c);c=d.p1;b.setValue(c,a.ab().ab)},bk:function(a){var b=a.s().a($$t.$ix.$type);if(b==null){return}var c;var d=$$t.$iv.b2(a,c);c=d.p1;b.setValue(c,a.ab().ab)},bl:function(a){var b=a.s().a($$t.$ix.$type);if(b==null){return}var c;var d=$$t.$iv.b3(a,c);c=d.p1;b.setValue(c,a.ab().ab)},bm:function(a){var b=a.s().a($$t.$ix.$type);if(b==null){return}var c;var d=$$t.$iv.b4(a,c);c=d.p1;b.setValue(c,a.ab().ab)},bn:function(a){var b=a.s().a($$t.$ix.$type);if(b==null){return}var c;var d=$$t.$iv.b5(a,c);c=d.p1;b.setValue(c,a.ab().ab)},bo:function(a){var b=a.s().a($$t.$ix.$type);if(b==null){return}var c;var d=$$t.$iv.b6(a,c);c=d.p1;b.setValue(c,a.ab().ab)},bp:function(a){var b=a.s().a($$t.$ix.$type);if(b==null){return}var c;var d=$$t.$iv.b7(a,c);c=d.p1;b.setValue(c,a.ab().ab)},bq:function(a){var b=a.s().a($$t.$ix.$type);if(b==null){return}var c;var d=$$t.$iv.b8(a,c);c=d.p1;b.setValue(c,a.ab().ab)},br:function(a){var b=a.s().a($$t.$ix.$type);if(b==null){return}var c=new $$t.iy(b,a.ab().ab);a.s().j(c)},bs:function(a){var b;var c;var d=$$t.$iv.ca(a,b,c);b=d.p1;c=d.p2;var e=new $$t.iw(0,c,b);a.s().j(e)},cb:function(a){a.ax($$t.$iv.at,$$t.$iv.bb);a.ax($$t.$iv.ao,$$t.$iv.bc);a.ax($$t.$iv.au,$$t.$iv.bd);a.ax($$t.$iv.av,$$t.$iv.be);a.ax($$t.$iv.aw,$$t.$iv.bf);a.ax($$t.$iv.ax,$$t.$iv.bg);a.ax($$t.$iv.ap,$$t.$iv.bh);a.ax($$t.$iv.ay,$$t.$iv.bi);a.ax($$t.$iv.az,$$t.$iv.bj);a.ax($$t.$iv.a2,$$t.$iv.bk);a.ax($$t.$iv.a3,$$t.$iv.bl);a.ax($$t.$iv.a5,$$t.$iv.bm);a.ax($$t.$iv.a6,$$t.$iv.bn);a.ax($$t.$iv.a7,$$t.$iv.bo);a.ax($$t.$iv.a8,$$t.$iv.bp);a.ax($$t.$iv.ar,$$t.$iv.bq);a.ax($$t.$iv.a9,$$t.$iv.br);a.ax($$t.$iv.ba,$$t.$iv.bs)},cc:function(a,b){var c=$b(String,b);if(c!=null){$$t.$iv.cm(a,c)}else if(typeof b==="number"){$$t.$iv.cj(a,$h(b))}else if(typeof b==="number"){$$t.$iv.ch(a,$h(b))}else if(typeof b==="number"){$$t.$iv.ci(a,$h(b))}else if(typeof b==="number"){$$t.$iv.ck(a,$h(b))}else if(typeof b==="number"){$$t.$iv.cq(a,$h(b))}else if(typeof b==="number"){$$t.$iv.cr(a,$h(b))}else if(typeof b==="number"){$$t.$iv.cs(a,$h(b))}else if(typeof b==="number"){$$t.$iv.ct(a,$h(b))}else if(typeof b==="number"){$$t.$iv.co(a,b)}else if(typeof b==="number"){$$t.$iv.cp(a,b)}else if(typeof b==="number"){$$t.$iv.cg(a,b)}else{return}a.ad().k()},cd:function(a,b){$$t.$iv.cv(a);$$t.$iv.cc(a,b);a.ad().k()},ce:function(a,b){$$t.$iv.cw(a,b.b,$i(b.a.length));if(b.b==0){$$v.$aq.am($.ig.$op.$type,b.a,function(c){$$t.$iv.cd(a,c)})}else{$$v.$aq.am($.ig.$op.$type,b.a,function(c){$$t.$iv.cc(a,c)})}a.ad().k()},$type:new $.ig.Type("OfficeDocumentDocPropsVTypes",$$t.$i4.$type)},true);$c("IVariantValueContainer:ix","Object",{$type:new $.ig.Type("IVariantValueContainer",null)},true);$c("OfficeDocumentDocPropsVTypes_VariantPlaceholder:iy","Object",{a:null,b:0,init:function(a,b){$.ig.$op.init.call(this);this.a=a;this.b=b},setValue:function(a,b){this.a.setValue(a,this.b)},$type:new $.ig.Type("OfficeDocumentDocPropsVTypes_VariantPlaceholder",$.ig.$ot,[$$t.$ix.$type])},true);$c("CT_Vector:iw","Object",{b:0,a:null,init:function(a,b,c){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$.ig.$op.init.call(this);this.b=c;this.a=new Array(b)},init1:function(a,b,c){$.ig.$op.init.call(this);this.b=c;this.a=b.toArray()},setValue:function(a,b){this.a[b]=a},$type:new $.ig.Type("CT_Vector",$.ig.$ot,[$$t.$ix.$type])},true);$c("OfficeDocumentExtendedProperties:iz","XmlNamespaceDefinitionBase",{init:function(){$$t.$i4.init.call(this)},i:function(a){switch(a){case 0:return $$t.$iz.a4;case 1:return $$t.$iz.a3;default:return $$t.$iz.a4}},j:function(){return null},bh:function(a,b){var c=$$t.$iz.u(a,$$t.$iz.ap,b,0);b=c.p2;return{p1:b}},b8:function(a,b){$$t.$iz.ai(a,$$t.$iz.ap,null,b,null,0)},bi:function(a,b){var c=$$t.$iz.u(a,$$t.$iz.aq,b,0);b=c.p2;return{p1:b}},b9:function(a,b){$$t.$iz.ai(a,$$t.$iz.aq,null,b,null,0)},bj:function(a,b){var c=$$t.$iz.r(a,$$t.$iz.ar,b);b=c.p2;return{p1:b}},ca:function(a,b){$$t.$iz.af(a,$$t.$iz.ar,null,b)},bk:function(a,b){var c=$$t.$iz.r(a,$$t.$iz.as,b);b=c.p2;return{p1:b}},cb:function(a,b){$$t.$iz.af(a,$$t.$iz.as,null,b)},bl:function(a,b){var c=$$t.$iz.u(a,$$t.$iz.at,b,0);b=c.p2;return{p1:b}},cc:function(a,b){$$t.$iz.ai(a,$$t.$iz.at,null,b,null,0)},bm:function(a,b){var c=$$t.$iz.r(a,$$t.$iz.au,b);b=c.p2;return{p1:b}},cd:function(a,b){$$t.$iz.af(a,$$t.$iz.au,null,b)},bn:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},ce:function(a){a.ad().p($$t.$iz.av,null)},bo:function(a,b){var c=$$t.$iz.r(a,$$t.$iz.aw,b);b=c.p2;return{p1:b}},cf:function(a,b){$$t.$iz.af(a,$$t.$iz.aw,null,b)},bp:function(a,b){var c=$$t.$iz.u(a,$$t.$iz.ax,b,0);b=c.p2;return{p1:b}},cg:function(a,b){$$t.$iz.ai(a,$$t.$iz.ax,null,b,null,0)},bq:function(a,b){var c=$$t.$iz.l(a,$$t.$iz.ay,b);b=c.p2;return{p1:b}},ch:function(a,b){$$t.$iz.z(a,$$t.$iz.ay,null,b)},br:function(a,b){var c=$$t.$iz.r(a,$$t.$iz.az,b);b=c.p2;return{p1:b}},ci:function(a,b){$$t.$iz.af(a,$$t.$iz.az,null,b)},bs:function(a,b){var c=$$t.$iz.l(a,$$t.$iz.a0,b);b=c.p2;return{p1:b}},cj:function(a,b){$$t.$iz.z(a,$$t.$iz.a0,null,b)},bt:function(a,b){var c=$$t.$iz.u(a,$$t.$iz.a1,b,0);b=c.p2;return{p1:b}},ck:function(a,b){$$t.$iz.ai(a,$$t.$iz.a1,null,b,null,0)},bu:function(a,b){var c=$$t.$iz.r(a,$$t.$iz.a2,b);b=c.p2;return{p1:b}},cl:function(a,b){$$t.$iz.af(a,$$t.$iz.a2,null,b)},bv:function(a,b){var c=$$t.$iz.r(a,$$t.$iz.a5,b);b=c.p2;return{p1:b}},cm:function(a,b){$$t.$iz.af(a,$$t.$iz.a5,null,b)},bw:function(a,b){var c=$$t.$iz.r(a,$$t.$iz.a6,b);b=c.p2;return{p1:b}},cn:function(a,b){$$t.$iz.af(a,$$t.$iz.a6,null,b)},bx:function(a,b){var c=$$t.$iz.r(a,$$t.$iz.a7,b);b=c.p2;return{p1:b}},co:function(a,b){$$t.$iz.af(a,$$t.$iz.a7,null,b)},by:function(a,b){var c=$$t.$iz.u(a,$$t.$iz.a8,b,0);b=c.p2;return{p1:b}},cp:function(a,b){$$t.$iz.ai(a,$$t.$iz.a8,null,b,null,0)},bz:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},cq:function(a){a.ad().p($$t.$iz.a9,null);var b=a.d()._y();a.ad().l($$t.$iz.an,false);a.ad().l($$t.$iv.an,false)},b0:function(a,b){var c=$$t.$iz.l(a,$$t.$iz.ba,b);b=c.p2;return{p1:b}},cr:function(a,b){$$t.$iz.z(a,$$t.$iz.ba,null,b)},b1:function(a,b){var c=$$t.$iz.l(a,$$t.$iz.bb,b);b=c.p2;return{p1:b}},cs:function(a,b){$$t.$iz.z(a,$$t.$iz.bb,null,b)},b2:function(a,b){var c=$$t.$iz.r(a,$$t.$iz.bc,b);b=c.p2;return{p1:b}},b7:function(a,b){$$t.$iz.af(a,$$t.$iz.bc,null,b)},b3:function(a,b){var c=$$t.$iz.u(a,$$t.$iz.bd,b,0);b=c.p2;return{p1:b}},ct:function(a,b){$$t.$iz.ai(a,$$t.$iz.bd,null,b,null,0)},b4:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},cu:function(a){a.ad().p($$t.$iz.be,null)},b5:function(a,b){var c=$$t.$iz.r(a,$$t.$iz.bf,b);b=c.p2;return{p1:b}},cv:function(a,b){$$t.$iz.af(a,$$t.$iz.bf,null,b)},b6:function(a,b){var c=$$t.$iz.r(a,$$t.$iz.bg,b);b=c.p2;return{p1:b}},cw:function(a,b){$$t.$iz.af(a,$$t.$iz.bg,null,b)},$type:new $.ig.Type("OfficeDocumentExtendedProperties",$$t.$i4.$type)},true);$c("OfficeDocumentRelationships:i0","XmlNamespaceDefinitionBase",{init:function(){$$t.$i4.init.call(this)},i:function(a){switch(a){case 0:return $$t.$i0.au;case 1:return $$t.$i0.at;default:return $$t.$i0.au}},j:function(){return"r"},$type:new $.ig.Type("OfficeDocumentRelationships",$$t.$i4.$type)},true);$c("OfficeNamespace:i1","XmlNamespaceDefinitionBase",{init:function(){$$t.$i4.init.call(this)},i:function(a){switch(a){case 0:case 1:return"urn:schemas-microsoft-com:office:office";default:return"urn:schemas-microsoft-com:office:office"}},j:function(){return"o"},ch:function(a,b,c){b=$m($$t.$gh.$type,null);c=null;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"urn:schemas-microsoft-com:vml/ext":b=$m($$t.$gh.$type,$$t.$i4.b($$t.$gh.$type,d.d,null));break;case"data":c=d.d;break;default:break}}return{p1:b,p2:c}},ck:function(a,b,c){a.ad().p($$t.$i1.br,"o");var d;if($l(b,null)){d=$$t.$i4.f($$t.$gh.$type,b.value());a.ad().h("urn:schemas-microsoft-com:vml/ext",d)}d=c;a.ad().h("data",d)},ci:function(a,b,c,d,e,f,g,h,i,j,k,l,m){b=$m($$t.$gh.$type,null);c=$m($$0.$aq.$type,null);d=$m($$0.$aq.$type,null);e=$m($$0.$aq.$type,null);f=$m($$0.$aq.$type,null);g=$m($$0.$aq.$type,null);h=$m($$0.$aq.$type,null);i=$m($$0.$aq.$type,null);j=$m($$0.$aq.$type,null);k=$m($$0.$aq.$type,null);l=$m($$0.$aq.$type,null);m=$m($$0.$aq.$type,null);var o=a.ab().u.getEnumerator();while(o.moveNext()){var n=o.current();switch(n.a.e(a.d())){case"urn:schemas-microsoft-com:vml/ext":b=$m($$t.$gh.$type,$$t.$i4.b($$t.$gh.$type,n.d,null));break;case"position":c=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(n.d)));break;case"selection":d=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(n.d)));break;case"grouping":e=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(n.d)));break;case"ungrouping":f=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(n.d)));break;case"rotation":g=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(n.d)));break;case"cropping":h=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(n.d)));break;case"verticies":i=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(n.d)));break;case"adjusthandles":j=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(n.d)));break;case"text":k=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(n.d)));break;case"aspectratio":l=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(n.d)));break;case"shapetype":m=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(n.d)));break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m}},cl:function(a,b,c,d,e,f,g,h,i,j,k,l,m){a.ad().p($$t.$i1.ao,"o");var n;if($l(b,null)){n=$$t.$i4.f($$t.$gh.$type,b.value());a.ad().h("urn:schemas-microsoft-com:vml/ext",n)}if($l(c,null)){n=$$t.$h7.k($$t.$h7.b(c.value()));a.ad().h("position",n)}if($l(d,null)){n=$$t.$h7.k($$t.$h7.b(d.value()));a.ad().h("selection",n)}if($l(e,null)){n=$$t.$h7.k($$t.$h7.b(e.value()));a.ad().h("grouping",n)}if($l(f,null)){n=$$t.$h7.k($$t.$h7.b(f.value()));a.ad().h("ungrouping",n)}if($l(g,null)){n=$$t.$h7.k($$t.$h7.b(g.value()));a.ad().h("rotation",n)}if($l(h,null)){n=$$t.$h7.k($$t.$h7.b(h.value()));a.ad().h("cropping",n)}if($l(i,null)){n=$$t.$h7.k($$t.$h7.b(i.value()));a.ad().h("verticies",n)}if($l(j,null)){n=$$t.$h7.k($$t.$h7.b(j.value()));a.ad().h("adjusthandles",n)}if($l(k,null)){n=$$t.$h7.k($$t.$h7.b(k.value()));a.ad().h("text",n)}if($l(l,null)){n=$$t.$h7.k($$t.$h7.b(l.value()));a.ad().h("aspectratio",n)}if($l(m,null)){n=$$t.$h7.k($$t.$h7.b(m.value()));a.ad().h("shapetype",n)}},cj:function(a,b){b=$m($$t.$gh.$type,null);var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"urn:schemas-microsoft-com:vml/ext":b=$m($$t.$gh.$type,$$t.$i4.b($$t.$gh.$type,c.d,null));break;default:break}}return{p1:b}},cm:function(a,b){a.ad().p($$t.$i1.b6,"o");var c;if($l(b,null)){c=$$t.$i4.f($$t.$gh.$type,b.value());a.ad().h("urn:schemas-microsoft-com:vml/ext",c)}},$type:new $.ig.Type("OfficeNamespace",$$t.$i4.$type)},true);$c("VmlNamespace:i2","XmlNamespaceDefinitionBase",{init:function(){$$t.$i4.init.call(this)},i:function(a){switch(a){case 0:case 1:return"urn:schemas-microsoft-com:vml";default:return"urn:schemas-microsoft-com:vml"}},j:function(){return"v"},dn:function(a,b,c){b=$m($$0.$v.$type,null);c=$m($$0.$v.$type,null);var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"startAngle":b=$m($$0.$v.$type,$.ig.util.parseNumber(d.d,$$0.$cg.invariantCulture()));break;case"endAngle":c=$m($$0.$v.$type,$.ig.util.parseNumber(d.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b,p2:c}},dx:function(a,b,c){a.ad().p("urn:schemas-microsoft-com:vml/arc","v");var d;if($l(b,null)){d=b.value().toString1($$0.$cg.invariantCulture());a.ad().h("startAngle",d)}if($l(c,null)){d=c.value().toString1($$0.$cg.invariantCulture());a.ad().h("endAngle",d)}},dp:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab){b=null;c=$m($$t.$gj.$type,null);d=$m($$0.$aq.$type,null);e=null;f=null;g=null;h=null;i=null;j=null;k=null;l=null;m=null;n=$m($$t.$gt.$type,null);o=null;p=$m($$0.$v.$type,null);q=$m($$0.$aq.$type,null);r=null;s=null;t=null;u=$m($$t.$gi.$type,null);v=$m($$0.$aq.$type,null);w=null;x=null;y=$m($$0.$aq.$type,null);z=$m($$0.$aq.$type,null);aa=null;ab=null;var ad=a.ab().u.getEnumerator();while(ad.moveNext()){var ac=ad.current();switch(ac.a.e(a.d())){case"id":b=ac.d;break;case"type":c=$m($$t.$gj.$type,$$t.$i4.b($$t.$gj.$type,ac.d,null));break;case"on":d=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(ac.d)));break;case"color":e=ac.d;break;case"opacity":f=ac.d;break;case"color2":g=ac.d;break;case"src":h=ac.d;break;case $$t.$i1.bn:i=ac.d;break;case $$t.$i1.at:j=ac.d;break;case"size":k=ac.d;break;case"origin":l=ac.d;break;case"position":m=ac.d;break;case"aspect":n=$m($$t.$gt.$type,$$t.$i4.b($$t.$gt.$type,ac.d,null));break;case"colors":o=ac.d;break;case"angle":p=$m($$0.$v.$type,$.ig.util.parseNumber(ac.d,$$0.$cg.invariantCulture()));break;case"alignshape":q=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(ac.d)));break;case"focus":r=ac.d;break;case"focussize":s=ac.d;break;case"focusposition":t=ac.d;break;case"method":u=$m($$t.$gi.$type,$$t.$i4.b($$t.$gi.$type,ac.d,null));break;case $$t.$i1.bc:v=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(ac.d)));break;case $$t.$i1.cc:w=ac.d;break;case $$t.$i1.bz:x=ac.d;break;case"recolor":y=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(ac.d)));break;case"rotate":z=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(ac.d)));break;case $$t.$i0.ar:aa=ac.d;break;case $$t.$i1.b3:ab=ac.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n,p14:o,p15:p,p16:q,p17:r,p18:s,p19:t,p20:u,p21:v,p22:w,p23:x,p24:y,p25:z,p26:aa,p27:ab}},dy:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab){a.ad().p("urn:schemas-microsoft-com:vml/fill","v");var ac;ac=b;a.ad().h("id",ac);if($l(c,null)){ac=$$t.$i4.f($$t.$gj.$type,c.value());a.ad().h("type",ac)}if($l(d,null)){ac=$$t.$h7.k($$t.$h7.b(d.value()));a.ad().h("on",ac)}ac=e;a.ad().h("color",ac);ac=f;a.ad().h("opacity",ac);ac=g;a.ad().h("color2",ac);ac=h;a.ad().h("src",ac);ac=i;a.ad().h($$t.$i1.bn,ac);ac=j;a.ad().h($$t.$i1.at,ac);ac=k;a.ad().h("size",ac);ac=l;a.ad().h("origin",ac);ac=m;a.ad().h("position",ac);if($l(n,null)){ac=$$t.$i4.f($$t.$gt.$type,n.value());a.ad().h("aspect",ac)}ac=o;a.ad().h("colors",ac);if($l(p,null)){ac=p.value().toString1($$0.$cg.invariantCulture());a.ad().h("angle",ac)}if($l(q,null)){ac=$$t.$h7.k($$t.$h7.b(q.value()));a.ad().h("alignshape",ac)}ac=r;a.ad().h("focus",ac);ac=s;a.ad().h("focussize",ac);ac=t;a.ad().h("focusposition",ac);if($l(u,null)){ac=$$t.$i4.f($$t.$gi.$type,u.value());a.ad().h("method",ac)}if($l(v,null)){ac=$$t.$h7.k($$t.$h7.b(v.value()));a.ad().h($$t.$i1.bc,ac)}ac=w;a.ad().h($$t.$i1.cc,ac);ac=x;a.ad().h($$t.$i1.bz,ac);if($l(y,null)){ac=$$t.$h7.k($$t.$h7.b(y.value()));a.ad().h("recolor",ac)}if($l(z,null)){ac=$$t.$h7.k($$t.$h7.b(z.value()));a.ad().h("rotate",ac)}ac=aa;a.ad().h($$t.$i0.ar,ac);ac=ab;a.ad().h($$t.$i1.b3,ac)},dq:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){b=null;c=null;d=null;e=null;f=null;g=null;h=null;i=null;j=null;k=$m($$0.$aq.$type,null);l=$m($$0.$aq.$type,null);m=null;n=null;o=null;p=null;q=null;r=null;s=$m($$0.$a8.$type,null);t=$m($$0.$aq.$type,null);u=$m($$0.$a8.$type,null);v=null;w=null;x=null;y=null;var aa=a.ab().u.getEnumerator();while(aa.moveNext()){var z=aa.current();switch(z.a.e(a.d())){case"id":b=z.d;break;case"src":c=z.d;break;case"cropleft":d=z.d;break;case"croptop":e=z.d;break;case"cropright":f=z.d;break;case"cropbottom":g=z.d;break;case"gain":h=z.d;break;case"blacklevel":i=z.d;break;case"gamma":j=z.d;break;case"grayscale":k=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(z.d)));break;case"bilevel":l=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(z.d)));break;case"chromakey":m=z.d;break;case"embosscolor":n=z.d;break;case"recolortarget":o=z.d;break;case $$t.$i1.bn:p=z.d;break;case $$t.$i1.at:q=z.d;break;case $$t.$i1.cc:r=z.d;break;case $$t.$i1.bx:s=$m($$0.$a8.$type,$an(z.d,$$0.$cg.invariantCulture()));break;case $$t.$i1.bc:t=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(z.d)));break;case $$t.$i1.bt:u=$m($$0.$a8.$type,$an(z.d,$$0.$cg.invariantCulture()));break;case $$t.$i1.b3:v=z.d;break;case $$t.$i0.ar:w=z.d;break;case $$t.$i0.av:x=z.d;break;case $$t.$i0.aq:y=z.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n,p14:o,p15:p,p16:q,p17:r,p18:s,p19:t,p20:u,p21:v,p22:w,p23:x,p24:y}},dz:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){a.ad().p("urn:schemas-microsoft-com:vml/imagedata","v");var z;z=b;a.ad().h("id",z);z=c;a.ad().h("src",z);z=d;a.ad().h("cropleft",z);z=e;a.ad().h("croptop",z);z=f;a.ad().h("cropright",z);z=g;a.ad().h("cropbottom",z);z=h;a.ad().h("gain",z);z=i;a.ad().h("blacklevel",z);z=j;a.ad().h("gamma",z);if($l(k,null)){z=$$t.$h7.k($$t.$h7.b(k.value()));a.ad().h("grayscale",z)}if($l(l,null)){z=$$t.$h7.k($$t.$h7.b(l.value()));a.ad().h("bilevel",z)}z=m;a.ad().h("chromakey",z);z=n;a.ad().h("embosscolor",z);z=o;a.ad().h("recolortarget",z);z=p;a.ad().h($$t.$i1.bn,z);z=q;a.ad().h($$t.$i1.at,z);z=r;a.ad().h($$t.$i1.cc,z);if($l(s,null)){z=$ae(s.value(),$$0.$cg.invariantCulture());a.ad().h($$t.$i1.bx,z)}if($l(t,null)){z=$$t.$h7.k($$t.$h7.b(t.value()));a.ad().h($$t.$i1.bc,z)}if($l(u,null)){z=$ae(u.value(),$$0.$cg.invariantCulture());a.ad().h($$t.$i1.bt,z)}z=v;a.ad().h($$t.$i1.b3,z);z=w;a.ad().h($$t.$i0.ar,z);z=x;a.ad().h($$t.$i0.av,z);z=y;a.ad().h($$t.$i0.aq,z)},dr:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){b=null;c=null;d=null;e=null;f=$m($$0.$aq.$type,null);g=$m($$0.$aq.$type,null);h=$m($$0.$aq.$type,null);i=$m($$0.$aq.$type,null);j=$m($$0.$aq.$type,null);k=$m($$0.$aq.$type,null);l=$m($$0.$aq.$type,null);m=$m($$t.$ga.$type,null);n=null;o=null;p=$m($$0.$aq.$type,null);var r=a.ab().u.getEnumerator();while(r.moveNext()){var q=r.current();switch(q.a.e(a.d())){case"id":b=q.d;break;case"v":c=q.d;break;case"limo":d=q.d;break;case"textboxrect":e=q.d;break;case"fillok":f=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(q.d)));break;case"strokeok":g=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(q.d)));break;case"shadowok":h=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(q.d)));break;case"arrowok":i=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(q.d)));break;case"gradientshapeok":j=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(q.d)));break;case"textpathok":k=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(q.d)));break;case"insetpenok":l=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(q.d)));break;case $$t.$i1.a9:m=$m($$t.$ga.$type,$$t.$i4.b($$t.$ga.$type,q.d,null));break;case $$t.$i1.a7:n=q.d;break;case $$t.$i1.a6:o=q.d;break;case $$t.$i1.bh:p=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(q.d)));break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n,p14:o,p15:p}},d0:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){a.ad().p("urn:schemas-microsoft-com:vml/path","v");var q;q=b;a.ad().h("id",q);q=c;a.ad().h("v",q);q=d;a.ad().h("limo",q);q=e;a.ad().h("textboxrect",q);if($l(f,null)){q=$$t.$h7.k($$t.$h7.b(f.value()));a.ad().h("fillok",q)}if($l(g,null)){q=$$t.$h7.k($$t.$h7.b(g.value()));a.ad().h("strokeok",q)}if($l(h,null)){q=$$t.$h7.k($$t.$h7.b(h.value()));a.ad().h("shadowok",q)}if($l(i,null)){q=$$t.$h7.k($$t.$h7.b(i.value()));a.ad().h("arrowok",q)}if($l(j,null)){q=$$t.$h7.k($$t.$h7.b(j.value()));a.ad().h("gradientshapeok",q)}if($l(k,null)){q=$$t.$h7.k($$t.$h7.b(k.value()));a.ad().h("textpathok",q)}if($l(l,null)){q=$$t.$h7.k($$t.$h7.b(l.value()));a.ad().h("insetpenok",q)}if($l(m,null)){q=$$t.$i4.f($$t.$ga.$type,m.value());a.ad().h($$t.$i1.a9,q)}q=n;a.ad().h($$t.$i1.a7,q);q=o;a.ad().h($$t.$i1.a6,q);if($l(p,null)){q=$$t.$h7.k($$t.$h7.b(p.value()));a.ad().h($$t.$i1.bh,q)}},ds:function(a,b,c,d,e,f,g,h,i,j,k,l){b=null;c=$m($$0.$aq.$type,null);d=$m($$t.$hg.$type,null);e=$m($$0.$aq.$type,null);f=null;g=null;h=null;i=null;j=null;k=null;l=null;var n=a.ab().u.getEnumerator();while(n.moveNext()){var m=n.current();switch(m.a.e(a.d())){case"id":b=m.d;break;case"on":c=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(m.d)));break;case"type":d=$m($$t.$hg.$type,$$t.$i4.b($$t.$hg.$type,m.d,null));break;case"obscured":e=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(m.d)));break;case"color":f=m.d;break;case"opacity":g=m.d;break;case"offset":h=m.d;break;case"color2":i=m.d;break;case"offset2":j=m.d;break;case"origin":k=m.d;break;case"matrix":l=m.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l}},d1:function(a,b,c,d,e,f,g,h,i,j,k,l){a.ad().p("urn:schemas-microsoft-com:vml/shadow","v");var m;m=b;a.ad().h("id",m);if($l(c,null)){m=$$t.$h7.k($$t.$h7.b(c.value()));a.ad().h("on",m)}if($l(d,null)){m=$$t.$i4.f($$t.$hg.$type,d.value());a.ad().h("type",m)}if($l(e,null)){m=$$t.$h7.k($$t.$h7.b(e.value()));a.ad().h("obscured",m)}m=f;a.ad().h("color",m);m=g;a.ad().h("opacity",m);m=h;a.ad().h("offset",m);m=i;a.ad().h("color2",m);m=j;a.ad().h("offset2",m);m=k;a.ad().h("origin",m);m=l;a.ad().h("matrix",m)},dt:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,a0,a1,a2,a3,a4,a5,a6){b=null;
c=null;d=null;e=null;f=null;g=null;h=null;i=null;j=null;k=null;l=$m($$0.$aq.$type,null);m=null;n=$m($$0.$aq.$type,null);o=null;p=$m($$0.$aq.$type,null);q=$m($$0.$aq.$type,null);r=$m($$0.$aq.$type,null);s=$m($$0.$aq.$type,null);t=$m($$0.$aq.$type,null);u=$m($$0.$aq.$type,null);v=$m($$0.$aq.$type,null);w=$m($$0.$a8.$type,null);x=$m($$t.$gs.$type,null);y=$m($$0.$aq.$type,null);z=$m($$0.$aq.$type,null);aa=$m($$0.$aq.$type,null);ab=null;ac=null;ad=null;ae=null;af=null;ag=null;ah=null;ai=$m($$t.$gu.$type,null);aj=null;ak=$m($$0.$aq.$type,null);al=null;am=null;an=$m($$0.$aq.$type,null);ao=null;ap=null;aq=$m($$0.$aq.$type,null);ar=$m($$0.$a8.$type,null);as=$m($$t.$f9.$type,null);at=$m($$t.$f5.$type,null);au=$m($$t.$f5.$type,null);av=$m($$t.$f5.$type,null);aw=$m($$0.$aq.$type,null);ax=$m($$0.$aq.$type,null);ay=$m($$0.$aq.$type,null);az=$m($$0.$aq.$type,null);a0=$m($$0.$aq.$type,null);a1=$m($$0.$aq.$type,null);a2=null;a3=null;a4=null;a5=null;a6=null;var a8=a.ab().u.getEnumerator();while(a8.moveNext()){var a7=a8.current();switch(a7.a.e(a.d())){case"id":b=a7.d;break;case"style":c=a7.d;break;case"href":d=a7.d;break;case"target":e=a7.d;break;case"class":f=a7.d;break;case"title":g=a7.d;break;case"alt":h=a7.d;break;case"coordsize":i=a7.d;break;case"coordorigin":j=a7.d;break;case"wrapcoords":k=a7.d;break;case"print":l=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a7.d)));break;case $$t.$i1.b9:m=a7.d;break;case $$t.$i1.by:n=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a7.d)));break;case $$t.$i1.b2:o=a7.d;break;case $$t.$i1.bg:p=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a7.d)));break;case $$t.$i1.a0:q=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a7.d)));break;case $$t.$i1.cf:r=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a7.d)));break;case $$t.$i1.az:s=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a7.d)));break;case $$t.$i1.bl:t=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a7.d)));break;case $$t.$i1.bq:u=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a7.d)));break;case $$t.$i1.bo:v=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a7.d)));break;case $$t.$i1.bp:w=$m($$0.$a8.$type,$an(a7.d,$$0.$cg.invariantCulture()));break;case $$t.$i1.bm:x=$m($$t.$gs.$type,$$t.$i4.b($$t.$gs.$type,a7.d,null));break;case $$t.$i1.ar:y=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a7.d)));break;case $$t.$i1.as:z=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a7.d)));break;case $$t.$i1.ce:aa=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a7.d)));break;case"bordertopcolor":ab=a7.d;break;case"borderleftcolor":ac=a7.d;break;case"borderbottomcolor":ad=a7.d;break;case"borderrightcolor":ae=a7.d;break;case $$t.$i1.bd:af=a7.d;break;case $$t.$i1.bf:ag=a7.d;break;case $$t.$i1.be:ah=a7.d;break;case $$t.$i1.bs:ai=$m($$t.$gu.$type,$$t.$i4.b($$t.$gu.$type,a7.d,null));break;case"chromakey":aj=a7.d;break;case"filled":ak=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a7.d)));break;case"fillcolor":al=a7.d;break;case"opacity":am=a7.d;break;case"stroked":an=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a7.d)));break;case"strokecolor":ao=a7.d;break;case"strokeweight":ap=a7.d;break;case"insetpen":aq=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a7.d)));break;case $$t.$i1.ca:ar=$m($$0.$a8.$type,$an(a7.d,$$0.$cg.invariantCulture()));break;case $$t.$i1.a8:as=$m($$t.$f9.$type,$$t.$i4.b($$t.$f9.$type,a7.d,null));break;case"bwmode":at=$m($$t.$f5.$type,$$t.$i4.b($$t.$f5.$type,a7.d,null));break;case"bwpure":au=$m($$t.$f5.$type,$$t.$i4.b($$t.$f5.$type,a7.d,null));break;case"bwnormal":av=$m($$t.$f5.$type,$$t.$i4.b($$t.$f5.$type,a7.d,null));break;case $$t.$i1.bi:aw=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a7.d)));break;case $$t.$i1.bw:ax=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a7.d)));break;case $$t.$i1.bv:ay=$m($$0.$aq.$type,$$t.$h8.d(a7.d));break;case $$t.$i1.b1:az=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a7.d)));break;case $$t.$i1.a5:a0=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a7.d)));break;case $$t.$i1.a4:a1=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a7.d)));break;case"type":a2=a7.d;break;case"adj":a3=a7.d;break;case"path":a4=a7.d;break;case"gfxdata":a5=a7.d;break;case"equationxml":a6=a7.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n,p14:o,p15:p,p16:q,p17:r,p18:s,p19:t,p20:u,p21:v,p22:w,p23:x,p24:y,p25:z,p26:aa,p27:ab,p28:ac,p29:ad,p30:ae,p31:af,p32:ag,p33:ah,p34:ai,p35:aj,p36:ak,p37:al,p38:am,p39:an,p40:ao,p41:ap,p42:aq,p43:ar,p44:as,p45:at,p46:au,p47:av,p48:aw,p49:ax,p50:ay,p51:az,p52:a0,p53:a1,p54:a2,p55:a3,p56:a4,p57:a5,p58:a6}},d2:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,a0,a1,a2,a3,a4,a5,a6){a.ad().p("urn:schemas-microsoft-com:vml/shape","v");var a7;a7=b;a.ad().h("id",a7);a7=c;a.ad().h("style",a7);a7=d;a.ad().h("href",a7);a7=e;a.ad().h("target",a7);a7=f;a.ad().h("class",a7);a7=g;a.ad().h("title",a7);a7=h;a.ad().h("alt",a7);a7=i;a.ad().h("coordsize",a7);a7=j;a.ad().h("coordorigin",a7);a7=k;a.ad().h("wrapcoords",a7);if($l(l,null)){a7=$$t.$h7.k($$t.$h7.b(l.value()));a.ad().h("print",a7)}a7=m;a.ad().h($$t.$i1.b9,a7);if($l(n,null)){a7=$$t.$h7.k($$t.$h7.b(n.value()));a.ad().h($$t.$i1.by,a7)}a7=o;a.ad().h($$t.$i1.b2,a7);if($l(p,null)){a7=$$t.$h7.k($$t.$h7.b(p.value()));a.ad().h($$t.$i1.bg,a7)}if($l(q,null)){a7=$$t.$h7.k($$t.$h7.b(q.value()));a.ad().h($$t.$i1.a0,a7)}if($l(r,null)){a7=$$t.$h7.k($$t.$h7.b(r.value()));a.ad().h($$t.$i1.cf,a7)}if($l(s,null)){a7=$$t.$h7.k($$t.$h7.b(s.value()));a.ad().h($$t.$i1.az,a7)}if($l(t,null)){a7=$$t.$h7.k($$t.$h7.b(t.value()));a.ad().h($$t.$i1.bl,a7)}if($l(u,null)){a7=$$t.$h7.k($$t.$h7.b(u.value()));a.ad().h($$t.$i1.bq,a7)}if($l(v,null)){a7=$$t.$h7.k($$t.$h7.b(v.value()));a.ad().h($$t.$i1.bo,a7)}if($l(w,null)){a7=$ae(w.value(),$$0.$cg.invariantCulture());a.ad().h($$t.$i1.bp,a7)}if($l(x,null)){a7=$$t.$i4.f($$t.$gs.$type,x.value());a.ad().h($$t.$i1.bm,a7)}if($l(y,null)){a7=$$t.$h7.k($$t.$h7.b(y.value()));a.ad().h($$t.$i1.ar,a7)}if($l(z,null)){a7=$$t.$h7.k($$t.$h7.b(z.value()));a.ad().h($$t.$i1.as,a7)}if($l(aa,null)){a7=$$t.$h7.k($$t.$h7.b(aa.value()));a.ad().h($$t.$i1.ce,a7)}a7=ab;a.ad().h("bordertopcolor",a7);a7=ac;a.ad().h("borderleftcolor",a7);a7=ad;a.ad().h("borderbottomcolor",a7);a7=ae;a.ad().h("borderrightcolor",a7);a7=af;a.ad().h($$t.$i1.bd,a7);a7=ag;a.ad().h($$t.$i1.bf,a7);a7=ah;a.ad().h($$t.$i1.be,a7);if($l(ai,null)){a7=$$t.$i4.f($$t.$gu.$type,ai.value());a.ad().h($$t.$i1.bs,a7)}a7=aj;a.ad().h("chromakey",a7);if($l(ak,null)){a7=$$t.$h7.k($$t.$h7.b(ak.value()));a.ad().h("filled",a7)}a7=al;a.ad().h("fillcolor",a7);a7=am;a.ad().h("opacity",a7);if($l(an,null)){a7=$$t.$h7.k($$t.$h7.b(an.value()));a.ad().h("stroked",a7)}a7=ao;a.ad().h("strokecolor",a7);a7=ap;a.ad().h("strokeweight",a7);if($l(aq,null)){a7=$$t.$h7.k($$t.$h7.b(aq.value()));a.ad().h("insetpen",a7)}if($l(ar,null)){a7=$ae(ar.value(),$$0.$cg.invariantCulture());a.ad().h($$t.$i1.ca,a7)}if($l(as,null)){a7=$$t.$i4.f($$t.$f9.$type,as.value());a.ad().h($$t.$i1.a8,a7)}if($l(at,null)){a7=$$t.$i4.f($$t.$f5.$type,at.value());a.ad().h("bwmode",a7)}if($l(au,null)){a7=$$t.$i4.f($$t.$f5.$type,au.value());a.ad().h("bwpure",a7)}if($l(av,null)){a7=$$t.$i4.f($$t.$f5.$type,av.value());a.ad().h("bwnormal",a7)}if($l(aw,null)){a7=$$t.$h7.k($$t.$h7.b(aw.value()));a.ad().h($$t.$i1.bi,a7)}if($l(ax,null)){a7=$$t.$h7.k($$t.$h7.b(ax.value()));a.ad().h($$t.$i1.bw,a7)}if($l(ay,null)){a7=$$t.$h8.f(ay.value());a.ad().h($$t.$i1.bv,a7)}if($l(az,null)){a7=$$t.$h7.k($$t.$h7.b(az.value()));a.ad().h($$t.$i1.b1,a7)}if($l(a0,null)){a7=$$t.$h7.k($$t.$h7.b(a0.value()));a.ad().h($$t.$i1.a5,a7)}if($l(a1,null)){a7=$$t.$h7.k($$t.$h7.b(a1.value()));a.ad().h($$t.$i1.a4,a7)}a7=a2;a.ad().h("type",a7);a7=a3;a.ad().h("adj",a7);a7=a4;a.ad().h("path",a7);a7=a5;a.ad().h("gfxdata",a7);a7=a6;a.ad().h("equationxml",a7)},du:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,a0,a1,a2,a3,a4){b=null;c=null;d=null;e=null;f=null;g=null;h=null;i=null;j=null;k=null;l=$m($$0.$aq.$type,null);m=null;n=$m($$0.$aq.$type,null);o=null;p=$m($$0.$aq.$type,null);q=$m($$0.$aq.$type,null);r=$m($$0.$aq.$type,null);s=$m($$0.$aq.$type,null);t=$m($$0.$aq.$type,null);u=$m($$0.$aq.$type,null);v=$m($$0.$aq.$type,null);w=$m($$0.$a8.$type,null);x=$m($$t.$gs.$type,null);y=$m($$0.$aq.$type,null);z=$m($$0.$aq.$type,null);aa=$m($$0.$aq.$type,null);ab=null;ac=null;ad=null;ae=null;af=null;ag=null;ah=null;ai=$m($$t.$gu.$type,null);aj=null;ak=$m($$0.$aq.$type,null);al=null;am=null;an=$m($$0.$aq.$type,null);ao=null;ap=null;aq=$m($$0.$aq.$type,null);ar=$m($$0.$a8.$type,null);as=$m($$t.$f9.$type,null);at=$m($$t.$f5.$type,null);au=$m($$t.$f5.$type,null);av=$m($$t.$f5.$type,null);aw=$m($$0.$aq.$type,null);ax=$m($$0.$aq.$type,null);ay=$m($$0.$aq.$type,null);az=$m($$0.$aq.$type,null);a0=$m($$0.$aq.$type,null);a1=$m($$0.$aq.$type,null);a2=null;a3=null;a4=null;var a6=a.ab().u.getEnumerator();while(a6.moveNext()){var a5=a6.current();switch(a5.a.e(a.d())){case"id":b=a5.d;break;case"style":c=a5.d;break;case"href":d=a5.d;break;case"target":e=a5.d;break;case"class":f=a5.d;break;case"title":g=a5.d;break;case"alt":h=a5.d;break;case"coordsize":i=a5.d;break;case"coordorigin":j=a5.d;break;case"wrapcoords":k=a5.d;break;case"print":l=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a5.d)));break;case $$t.$i1.b9:m=a5.d;break;case $$t.$i1.by:n=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a5.d)));break;case $$t.$i1.b2:o=a5.d;break;case $$t.$i1.bg:p=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a5.d)));break;case $$t.$i1.a0:q=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a5.d)));break;case $$t.$i1.cf:r=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a5.d)));break;case $$t.$i1.az:s=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a5.d)));break;case $$t.$i1.bl:t=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a5.d)));break;case $$t.$i1.bq:u=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a5.d)));break;case $$t.$i1.bo:v=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a5.d)));break;case $$t.$i1.bp:w=$m($$0.$a8.$type,$an(a5.d,$$0.$cg.invariantCulture()));break;case $$t.$i1.bm:x=$m($$t.$gs.$type,$$t.$i4.b($$t.$gs.$type,a5.d,null));break;case $$t.$i1.ar:y=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a5.d)));break;case $$t.$i1.as:z=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a5.d)));break;case $$t.$i1.ce:aa=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a5.d)));break;case"bordertopcolor":ab=a5.d;break;case"borderleftcolor":ac=a5.d;break;case"borderbottomcolor":ad=a5.d;break;case"borderrightcolor":ae=a5.d;break;case $$t.$i1.bd:af=a5.d;break;case $$t.$i1.bf:ag=a5.d;break;case $$t.$i1.be:ah=a5.d;break;case $$t.$i1.bs:ai=$m($$t.$gu.$type,$$t.$i4.b($$t.$gu.$type,a5.d,null));break;case"chromakey":aj=a5.d;break;case"filled":ak=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a5.d)));break;case"fillcolor":al=a5.d;break;case"opacity":am=a5.d;break;case"stroked":an=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a5.d)));break;case"strokecolor":ao=a5.d;break;case"strokeweight":ap=a5.d;break;case"insetpen":aq=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a5.d)));break;case $$t.$i1.ca:ar=$m($$0.$a8.$type,$an(a5.d,$$0.$cg.invariantCulture()));break;case $$t.$i1.a8:as=$m($$t.$f9.$type,$$t.$i4.b($$t.$f9.$type,a5.d,null));break;case"bwmode":at=$m($$t.$f5.$type,$$t.$i4.b($$t.$f5.$type,a5.d,null));break;case"bwpure":au=$m($$t.$f5.$type,$$t.$i4.b($$t.$f5.$type,a5.d,null));break;case"bwnormal":av=$m($$t.$f5.$type,$$t.$i4.b($$t.$f5.$type,a5.d,null));break;case $$t.$i1.bi:aw=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a5.d)));break;case $$t.$i1.bw:ax=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a5.d)));break;case $$t.$i1.bv:ay=$m($$0.$aq.$type,$$t.$h8.d(a5.d));break;case $$t.$i1.b1:az=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a5.d)));break;case $$t.$i1.a5:a0=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a5.d)));break;case $$t.$i1.a4:a1=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(a5.d)));break;case"adj":a2=a5.d;break;case"path":a3=a5.d;break;case"master":a4=a5.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n,p14:o,p15:p,p16:q,p17:r,p18:s,p19:t,p20:u,p21:v,p22:w,p23:x,p24:y,p25:z,p26:aa,p27:ab,p28:ac,p29:ad,p30:ae,p31:af,p32:ag,p33:ah,p34:ai,p35:aj,p36:ak,p37:al,p38:am,p39:an,p40:ao,p41:ap,p42:aq,p43:ar,p44:as,p45:at,p46:au,p47:av,p48:aw,p49:ax,p50:ay,p51:az,p52:a0,p53:a1,p54:a2,p55:a3,p56:a4}},d3:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,a0,a1,a2,a3,a4){a.ad().p("urn:schemas-microsoft-com:vml/shapetype","v");var a5;a5=b;a.ad().h("id",a5);a5=c;a.ad().h("style",a5);a5=d;a.ad().h("href",a5);a5=e;a.ad().h("target",a5);a5=f;a.ad().h("class",a5);a5=g;a.ad().h("title",a5);a5=h;a.ad().h("alt",a5);a5=i;a.ad().h("coordsize",a5);a5=j;a.ad().h("coordorigin",a5);a5=k;a.ad().h("wrapcoords",a5);if($l(l,null)){a5=$$t.$h7.k($$t.$h7.b(l.value()));a.ad().h("print",a5)}a5=m;a.ad().h($$t.$i1.b9,a5);if($l(n,null)){a5=$$t.$h7.k($$t.$h7.b(n.value()));a.ad().h($$t.$i1.by,a5)}a5=o;a.ad().h($$t.$i1.b2,a5);if($l(p,null)){a5=$$t.$h7.k($$t.$h7.b(p.value()));a.ad().h($$t.$i1.bg,a5)}if($l(q,null)){a5=$$t.$h7.k($$t.$h7.b(q.value()));a.ad().h($$t.$i1.a0,a5)}if($l(r,null)){a5=$$t.$h7.k($$t.$h7.b(r.value()));a.ad().h($$t.$i1.cf,a5)}if($l(s,null)){a5=$$t.$h7.k($$t.$h7.b(s.value()));a.ad().h($$t.$i1.az,a5)}if($l(t,null)){a5=$$t.$h7.k($$t.$h7.b(t.value()));a.ad().h($$t.$i1.bl,a5)}if($l(u,null)){a5=$$t.$h7.k($$t.$h7.b(u.value()));a.ad().h($$t.$i1.bq,a5)}if($l(v,null)){a5=$$t.$h7.k($$t.$h7.b(v.value()));a.ad().h($$t.$i1.bo,a5)}if($l(w,null)){a5=$ae(w.value(),$$0.$cg.invariantCulture());a.ad().h($$t.$i1.bp,a5)}if($l(x,null)){a5=$$t.$i4.f($$t.$gs.$type,x.value());a.ad().h($$t.$i1.bm,a5)}if($l(y,null)){a5=$$t.$h7.k($$t.$h7.b(y.value()));a.ad().h($$t.$i1.ar,a5)}if($l(z,null)){a5=$$t.$h7.k($$t.$h7.b(z.value()));a.ad().h($$t.$i1.as,a5)}if($l(aa,null)){a5=$$t.$h7.k($$t.$h7.b(aa.value()));a.ad().h($$t.$i1.ce,a5)}a5=ab;a.ad().h("bordertopcolor",a5);a5=ac;a.ad().h("borderleftcolor",a5);a5=ad;a.ad().h("borderbottomcolor",a5);a5=ae;a.ad().h("borderrightcolor",a5);a5=af;a.ad().h($$t.$i1.bd,a5);a5=ag;a.ad().h($$t.$i1.bf,a5);a5=ah;a.ad().h($$t.$i1.be,a5);if($l(ai,null)){a5=$$t.$i4.f($$t.$gu.$type,ai.value());a.ad().h($$t.$i1.bs,a5)}a5=aj;a.ad().h("chromakey",a5);if($l(ak,null)){a5=$$t.$h7.k($$t.$h7.b(ak.value()));a.ad().h("filled",a5)}a5=al;a.ad().h("fillcolor",a5);a5=am;a.ad().h("opacity",a5);if($l(an,null)){a5=$$t.$h7.k($$t.$h7.b(an.value()));a.ad().h("stroked",a5)}a5=ao;a.ad().h("strokecolor",a5);a5=ap;a.ad().h("strokeweight",a5);if($l(aq,null)){a5=$$t.$h7.k($$t.$h7.b(aq.value()));a.ad().h("insetpen",a5)}if($l(ar,null)){a5=$ae(ar.value(),$$0.$cg.invariantCulture());a.ad().h($$t.$i1.ca,a5)}if($l(as,null)){a5=$$t.$i4.f($$t.$f9.$type,as.value());a.ad().h($$t.$i1.a8,a5)}if($l(at,null)){a5=$$t.$i4.f($$t.$f5.$type,at.value());a.ad().h("bwmode",a5)}if($l(au,null)){a5=$$t.$i4.f($$t.$f5.$type,au.value());a.ad().h("bwpure",a5)}if($l(av,null)){a5=$$t.$i4.f($$t.$f5.$type,av.value());a.ad().h("bwnormal",a5)}if($l(aw,null)){a5=$$t.$h7.k($$t.$h7.b(aw.value()));a.ad().h($$t.$i1.bi,a5)}if($l(ax,null)){a5=$$t.$h7.k($$t.$h7.b(ax.value()));a.ad().h($$t.$i1.bw,a5)}if($l(ay,null)){a5=$$t.$h8.f(ay.value());a.ad().h($$t.$i1.bv,a5)}if($l(az,null)){a5=$$t.$h7.k($$t.$h7.b(az.value()));a.ad().h($$t.$i1.b1,a5)}if($l(a0,null)){a5=$$t.$h7.k($$t.$h7.b(a0.value()));a.ad().h($$t.$i1.a5,a5)}if($l(a1,null)){a5=$$t.$h7.k($$t.$h7.b(a1.value()));a.ad().h($$t.$i1.a4,a5)}a5=a2;a.ad().h("adj",a5);a5=a3;a.ad().h("path",a5);a5=a4;a.ad().h("master",a5)},dv:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad){b=null;c=$m($$0.$aq.$type,null);d=null;e=null;f=null;g=$m($$t.$ho.$type,null);h=$m($$0.$v.$type,null);i=$m($$t.$hn.$type,null);j=$m($$t.$hm.$type,null);k=null;l=$m($$t.$gj.$type,null);m=null;n=$m($$t.$gt.$type,null);o=null;p=$m($$0.$aq.$type,null);q=null;r=$m($$t.$hk.$type,null);s=$m($$t.$hl.$type,null);t=$m($$t.$hj.$type,null);u=$m($$t.$hk.$type,null);v=$m($$t.$hl.$type,null);w=$m($$t.$hj.$type,null);x=null;y=null;z=null;aa=$m($$0.$aq.$type,null);ab=null;ac=$m($$0.$aq.$type,null);ad=null;var af=a.ab().u.getEnumerator();while(af.moveNext()){var ae=af.current();switch(ae.a.e(a.d())){case"id":b=ae.d;break;case"on":c=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(ae.d)));break;case"weight":d=ae.d;break;case"color":e=ae.d;break;case"opacity":f=ae.d;break;case"linestyle":g=$m($$t.$ho.$type,$$t.$i4.b($$t.$ho.$type,ae.d,null));break;case"miterlimit":h=$m($$0.$v.$type,$.ig.util.parseNumber(ae.d,$$0.$cg.invariantCulture()));break;case"joinstyle":i=$m($$t.$hn.$type,$$t.$i4.b($$t.$hn.$type,ae.d,null));break;case"endcap":j=$m($$t.$hm.$type,$$t.$i4.b($$t.$hm.$type,ae.d,null));break;case"dashstyle":k=ae.d;break;case"filltype":l=$m($$t.$gj.$type,$$t.$i4.b($$t.$gj.$type,ae.d,null));break;case"src":m=ae.d;break;case"imageaspect":n=$m($$t.$gt.$type,$$t.$i4.b($$t.$gt.$type,ae.d,null));break;case"imagesize":o=ae.d;break;case"imagealignshape":p=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(ae.d)));break;case"color2":q=ae.d;break;case"startarrow":r=$m($$t.$hk.$type,$$t.$i4.b($$t.$hk.$type,ae.d,null));break;case"startarrowwidth":s=$m($$t.$hl.$type,$$t.$i4.b($$t.$hl.$type,ae.d,null));break;case"startarrowlength":t=$m($$t.$hj.$type,$$t.$i4.b($$t.$hj.$type,ae.d,null));break;case"endarrow":u=$m($$t.$hk.$type,$$t.$i4.b($$t.$hk.$type,ae.d,null));break;case"endarrowwidth":v=$m($$t.$hl.$type,$$t.$i4.b($$t.$hl.$type,ae.d,null));break;case"endarrowlength":w=$m($$t.$hj.$type,$$t.$i4.b($$t.$hj.$type,ae.d,null));break;case $$t.$i1.bn:x=ae.d;break;case $$t.$i1.at:y=ae.d;break;case $$t.$i1.cc:z=ae.d;break;case $$t.$i1.bi:aa=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(ae.d)));break;case $$t.$i0.ar:ab=ae.d;break;case"insetpen":ac=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(ae.d)));break;case $$t.$i1.b3:ad=ae.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n,p14:o,p15:p,p16:q,p17:r,p18:s,p19:t,p20:u,p21:v,p22:w,p23:x,p24:y,p25:z,p26:aa,p27:ab,p28:ac,p29:ad}},d4:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad){a.ad().p("urn:schemas-microsoft-com:vml/stroke","v");var ae;ae=b;a.ad().h("id",ae);if($l(c,null)){ae=$$t.$h7.k($$t.$h7.b(c.value()));a.ad().h("on",ae)}ae=d;a.ad().h("weight",ae);ae=e;a.ad().h("color",ae);ae=f;a.ad().h("opacity",ae);if($l(g,null)){ae=$$t.$i4.f($$t.$ho.$type,g.value());a.ad().h("linestyle",ae)}if($l(h,null)){ae=h.value().toString1($$0.$cg.invariantCulture());a.ad().h("miterlimit",ae)}if($l(i,null)){ae=$$t.$i4.f($$t.$hn.$type,i.value());a.ad().h("joinstyle",ae)}if($l(j,null)){ae=$$t.$i4.f($$t.$hm.$type,j.value());a.ad().h("endcap",ae)}ae=k;a.ad().h("dashstyle",ae);if($l(l,null)){ae=$$t.$i4.f($$t.$gj.$type,l.value());a.ad().h("filltype",ae)}ae=m;a.ad().h("src",ae);if($l(n,null)){ae=$$t.$i4.f($$t.$gt.$type,n.value());a.ad().h("imageaspect",ae)}ae=o;a.ad().h("imagesize",ae);if($l(p,null)){ae=$$t.$h7.k($$t.$h7.b(p.value()));a.ad().h("imagealignshape",ae)}ae=q;a.ad().h("color2",ae);if($l(r,null)){ae=$$t.$i4.f($$t.$hk.$type,r.value());a.ad().h("startarrow",ae)}if($l(s,null)){ae=$$t.$i4.f($$t.$hl.$type,s.value());a.ad().h("startarrowwidth",ae)}if($l(t,null)){ae=$$t.$i4.f($$t.$hj.$type,t.value());a.ad().h("startarrowlength",ae)}if($l(u,null)){ae=$$t.$i4.f($$t.$hk.$type,u.value());a.ad().h("endarrow",ae)}if($l(v,null)){ae=$$t.$i4.f($$t.$hl.$type,v.value());a.ad().h("endarrowwidth",ae)}if($l(w,null)){ae=$$t.$i4.f($$t.$hj.$type,w.value());a.ad().h("endarrowlength",ae)}ae=x;a.ad().h($$t.$i1.bn,ae);ae=y;a.ad().h($$t.$i1.at,ae);ae=z;a.ad().h($$t.$i1.cc,ae);if($l(aa,null)){ae=$$t.$h7.k($$t.$h7.b(aa.value()));a.ad().h($$t.$i1.bi,ae)}ae=ab;a.ad().h($$t.$i0.ar,ae);if($l(ac,null)){ae=$$t.$h7.k($$t.$h7.b(ac.value()));a.ad().h("insetpen",ae)}ae=ad;a.ad().h($$t.$i1.b3,ae)},dw:function(a,b,c,d,e,f){b=null;c=null;d=null;e=$m($$0.$aq.$type,null);f=$m($$t.$gu.$type,null);var h=a.ab().u.getEnumerator();while(h.moveNext()){var g=h.current();switch(g.a.e(a.d())){case"id":b=g.d;break;case"style":c=g.d;break;case"inset":d=g.d;break;case $$t.$i1.b8:e=$m($$0.$aq.$type,$$t.$h7.g($$t.$h7.d(g.d)));break;case $$t.$i1.bs:f=$m($$t.$gu.$type,$$t.$i4.b($$t.$gu.$type,g.d,null));break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f}},d5:function(a,b,c,d,e,f){a.ad().p("urn:schemas-microsoft-com:vml/textbox","v");var g;g=b;a.ad().h("id",g);g=c;a.ad().h("style",g);g=d;a.ad().h("inset",g);if($l(e,null)){g=$$t.$h7.k($$t.$h7.b(e.value()));a.ad().h($$t.$i1.b8,g)}if($l(f,null)){g=$$t.$i4.f($$t.$gu.$type,f.value());a.ad().h($$t.$i1.bs,g)}},$type:new $.ig.Type("VmlNamespace",$$t.$i4.$type)},true);$c("XmlNamespace:i3","XmlNamespaceDefinitionBase",{init:function(){$$t.$i4.init.call(this)},i:function(a){switch(a){case 0:case 1:return"http://www.w3.org/XML/1998/namespace";default:return"http://www.w3.org/XML/1998/namespace"}},j:function(){return"xml"},as:function(a){a.i("xml","space","http://www.w3.org/XML/1998/namespace","preserve")},$type:new $.ig.Type("XmlNamespace",$$t.$i4.$type)},true);$c("XmlSchemaInstance:i6","XmlNamespaceDefinitionBase",{init:function(){$$t.$i4.init.call(this)},i:function(a){switch(a){case 0:case 1:return $$t.$i6.ap;default:return $$t.$i6.ap}},j:function(){return"xsi"},$type:new $.ig.Type("XmlSchemaInstance",$$t.$i4.$type)},true);$c("EG_Anchor:f","Object",{init:function(){$.ig.$op.init.call(this)},_a:null,b:function($tArg,$tResult,a,b){},$type:new $.ig.Type("EG_Anchor",$.ig.$ot)},true);$c("CT_AbsoluteAnchor:b","EG_Anchor",{init:function(){$$t.$f.init.call(this)},_c:null,_d:null,b:function($tArg,$tResult,a,b){return a._visitCT_AbsoluteAnchor$i(this,b)},$type:new $.ig.Type("CT_AbsoluteAnchor",$$t.$f.$type)},true);$c("CT_AnchorClientData:c","Object",{init:function(){$.ig.$op.init.call(this)},_a:false,_b:false,$type:new $.ig.Type("CT_AnchorClientData",$.ig.$ot)},true);$c("CT_OneCellAnchor:d","EG_Anchor",{init:function(){$$t.$f.init.call(this)},_d:null,_c:null,b:function($tArg,$tResult,a,b){return a._visitCT_OneCellAnchor$i(this,b)},$type:new $.ig.Type("CT_OneCellAnchor",$$t.$f.$type)},true);$c("CT_TwoCellAnchor:e","EG_Anchor",{init:function(){$$t.$f.init.call(this)},_e:0,_c:null,_d:null,b:function($tArg,$tResult,a,b){return a._visitCT_TwoCellAnchor$i(this,b)},$type:new $.ig.Type("CT_TwoCellAnchor",$$t.$f.$type)},true);$c("IEG_AnchorVisitor$2:g","Object",{$type:new $.ig.Type("IEG_AnchorVisitor$2",null)},true);$c("ExcelDocumentManager:h","OfficeDocumentManager",{init:function(a,b,c,d){$$t.$fp.init.call(this,a,b,c,d)},_u:function(){return 0},_z:function(){if(this._ab()==false){return 0}var b=this._b().getRelationships().getEnumerator();while(b.moveNext()){var a=b.current();switch(a.relationshipType()){case $$t.$be.a5:return 0;case $$t.$be.a4:return 1}}return 0},_bc:function(){$$t.$fp._bc.call(this);this._bf($$t.$au.dn);this._bf($$t.$aw.an);this._bf($$t.$av.an);this._bf($$t.$ay.ao);this._bf($$t.$ax.an);this._bg($$t.$i9.y,true);this._bg($$t.$jg.y,true);this._bg($$t.$jl.y,true);this._bg($$t.$jn.y,true);this._bg($$t.$jp.y,true);this._bg($$t.$jt.y,true);this._bg($$t.$jw.y,true)},_s:function(){return $$t.$au.dn},_bl:function(){switch(this._y()){case 0:return $$t.$h._bk;case 1:return $$t.$h._bj;default:return $$t.$h._bk}},_bm:function(){switch(this._y()){case 0:return $$t.$h._bp;case 1:return $$t.$h._bo;default:return $$t.$h._bp}},_bn:function(){switch(this._y()){case 0:return $$t.$h._br;case 1:return $$t.$h._bq;default:return $$t.$h._br}},$type:new $.ig.Type("ExcelDocumentManager",$$t.$fp.$type)},true);$c("XLOpenXmlUtilities:i","Object",{init:function(){$.ig.$op.init.call(this)},a:function(a){var t1=a;L0:while(true){switch(t1){case 0:return"b";case 1:return"d";case 2:return"n";case 3:return"e";case 4:return"s";case 5:return"str";case 6:return"inlineStr";default:t1=5;continue L0}break}},$type:new $.ig.Type("XLOpenXmlUtilities",$.ig.$ot)},true);$c("CT_Marker:j","Object",{init:function(){this._a=new $$v.cd;this._b=new $$v.cd;$.ig.$op.init.call(this)},_c:0,_a:null,_d:0,_b:null,$type:new $.ig.Type("CT_Marker",$.ig.$ot)},true);$c("ST_Guid:aa","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}this.d=new $$6.i;$$0.$bh.init.call(this)},d:null,init1:function(a,b){this.d=new $$6.i;$$0.$bh.init.call(this);this.d=b},c:function(a){return $$t.$aa.a(new $$6.i(3,a))},toString:function(){return this.d.toString2("B").toLocaleUpperCase($$0.$cg.invariantCulture())},a:function(a){return new $$t.aa(1,a)},h:function(a){if(!a.hasValue()){return $m($$t.$aa.$type,null)}return $m($$t.$aa.$type,$$t.$aa.a(a.value()))},e:function(a){return a.d},g:function(a){if(!a.hasValue()){return $m($$6.$i.$type,null)}return $m($$6.$i.$type,$$t.$aa.e(a.value()))},$type:new $.ig.Type("ST_Guid",$$0.$bh.$type)},true);$c("CalcChainPartManager:az","XmlPartManagerBase",{init:function(){$$t.$jx.init.call(this)},m:function(){return $$t.$az.a1},n:function(a){switch(a){case 0:return"/xl/calcChain.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$az.a4;case 1:return $$t.$az.a3;default:return $$t.$az.a4}},g:function(){return false},$type:new $.ig.Type("CalcChainPartManager",$$t.$jx.$type)},true);$c("ChartPartManager:a0","PartManagerBase",{init:function(){$$t.$jo.init.call(this)},m:function(){return $$t.$a0.s},n:function(a){switch(a){case 0:return"/xl/charts/chart.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$a0.u;case 1:return $$t.$a0.t;default:return $$t.$a0.u}},g:function(){return true},$type:new $.ig.Type("ChartPartManager",$$t.$jo.$type)},true);$c("CommentsPartManager:a1","XmlPartManagerBase",{init:function(){$$t.$jx.init.call(this)},m:function(){return $$t.$a1.a2},n:function(a){switch(a){case 0:return"/xl/comments.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$a1.a4;case 1:return $$t.$a1.a3;default:return $$t.$a1.a4}},g:function(){return true},$type:new $.ig.Type("CommentsPartManager",$$t.$jx.$type)},true);$c("ConnectionsPartManager:a2","XmlPartManagerBase",{init:function(){$$t.$jx.init.call(this)},m:function(){return $$t.$a2.a1},n:function(a){switch(a){case 0:return"/xl/connections.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$a2.a4;case 1:return $$t.$a2.a3;default:return $$t.$a2.a4}},g:function(){return false},$type:new $.ig.Type("ConnectionsPartManager",$$t.$jx.$type)},true);$c("CtrlPropPartManager:a3","PartManagerBase",{init:function(){$$t.$jo.init.call(this)},m:function(){return $$t.$a3.s},n:function(a){switch(a){case 0:return"/xl/ctrlProp.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$a3.u;case 1:return $$t.$a3.t;default:return $$t.$a3.u}},g:function(){return false},$type:new $.ig.Type("CtrlPropPartManager",$$t.$jo.$type)},true);$c("DrawingPartManager:a4","XmlPartManagerBase",{init:function(){$$t.$jx.init.call(this)},m:function(){return $$t.$a4.a2},n:function(a){switch(a){case 0:return"/xl/drawings/drawing.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$a4.a4;case 1:return $$t.$a4.a3;default:return $$t.$a4.a4}},g:function(){return true},$type:new $.ig.Type("DrawingPartManager",$$t.$jx.$type)},true);$c("ExternalLinkPartManager:a5","XmlPartManagerBase",{init:function(){$$t.$jx.init.call(this)},m:function(){return $$t.$a5.a2},n:function(a){switch(a){case 0:return"/xl/externalLinks/externalLink.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$a5.a4;case 1:return $$t.$a5.a3;default:return $$t.$a5.a4}},g:function(){return true},$type:new $.ig.Type("ExternalLinkPartManager",$$t.$jx.$type)},true);$c("PivotCacheDefinitionPartManager:a6","XmlPartManagerBase",{init:function(){$$t.$jx.init.call(this)},m:function(){return $$t.$a6.a2},n:function(a){switch(a){case 0:return"/xl/pivotCache/pivotCacheDefinition.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$a6.a4;case 1:return $$t.$a6.a3;default:return $$t.$a6.a4}},g:function(){return true},$type:new $.ig.Type("PivotCacheDefinitionPartManager",$$t.$jx.$type)},true);$c("PivotCacheRecordsPartManager:a7","XmlPartManagerBase",{init:function(){$$t.$jx.init.call(this)},m:function(){return $$t.$a7.a2},n:function(a){switch(a){case 0:return"/xl/pivotCache/pivotCacheDefinition.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$a7.a4;case 1:return $$t.$a7.a3;default:return $$t.$a7.a4}},g:function(){return true},$type:new $.ig.Type("PivotCacheRecordsPartManager",$$t.$jx.$type)},true);$c("PivotTablePartManager:a8","XmlPartManagerBase",{init:function(){$$t.$jx.init.call(this)},m:function(){return $$t.$a8.a2},n:function(a){switch(a){case 0:return"/xl/pivotTables/pivotTable.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$a8.a4;case 1:return $$t.$a8.a3;default:return $$t.$a8.a4}},g:function(){return true},$type:new $.ig.Type("PivotTablePartManager",$$t.$jx.$type)},true);$c("SharedStringsPartManager:a9","XmlPartManagerBase",{init:function(){$$t.$jx.init.call(this)},m:function(){return $$t.$a9.a1},n:function(a){switch(a){case 0:return"/xl/sharedStrings.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$a9.a4;case 1:return $$t.$a9.a3;default:return $$t.$a9.a4}},g:function(){return false},$type:new $.ig.Type("SharedStringsPartManager",$$t.$jx.$type)},true);$c("SlicerCachePartManager:ba","XmlPartManagerBase",{init:function(){$$t.$jx.init.call(this)},m:function(){return $$t.$ba.a2},n:function(a){switch(a){case 0:return"/xl/slicerCaches/slicerCache.xml";default:return null}},o:function(a){switch(a){case 0:case 1:return $$t.$ba.a3;default:return $$t.$ba.a3}},g:function(){return true},$type:new $.ig.Type("SlicerCachePartManager",$$t.$jx.$type)},true);$c("SlicerPartManager:bb","XmlPartManagerBase",{init:function(){$$t.$jx.init.call(this)},m:function(){return"application/vnd.ms-excel.slicer+xml"},n:function(a){switch(a){case 0:return"/xl/slicers/slicer.xml";default:return null}},o:function(a){switch(a){case 0:case 1:return $$t.$bb.a3;default:return $$t.$bb.a3}},g:function(){return true},$type:new $.ig.Type("SlicerPartManager",$$t.$jx.$type)},true);$c("ExcelStylesPartManager:bc","XmlPartManagerBase",{init:function(){$$t.$jx.init.call(this)},m:function(){return $$t.$bc.a1},n:function(a){switch(a){case 0:return"/xl/styles.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$bc.a4;case 1:return $$t.$bc.a3;default:return $$t.$bc.a4}},g:function(){return false},$type:new $.ig.Type("ExcelStylesPartManager",$$t.$jx.$type)},true);$c("TablePartManager:bd","XmlPartManagerBase",{init:function(){$$t.$jx.init.call(this)},m:function(){return $$t.$bd.a2},n:function(a){switch(a){case 0:return"/xl/tables/table.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$bd.a4;case 1:return $$t.$bd.a3;default:return $$t.$bd.a4}},g:function(){return true},$type:new $.ig.Type("TablePartManager",$$t.$jx.$type)},true);$c("WorkbookPartManagerBase:be","XmlPartManagerBase",{init:function(){$$t.$jx.init.call(this)},n:function(a){switch(a){case 0:return"/xl/workbook.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$be.a5;case 1:return $$t.$be.a4;default:return $$t.$be.a5}},g:function(){return false},$type:new $.ig.Type("WorkbookPartManagerBase",$$t.$jx.$type)},true);$c("WorksheetPartManager:bf","XmlPartManagerBase",{init:function(){$$t.$jx.init.call(this)},m:function(){return $$t.$bf.a2},n:function(a){switch(a){case 0:return"/xl/worksheets/sheet.xml";default:return null}},o:function(a){switch(a){case 0:return $$t.$bf.a4;case 1:return $$t.$bf.a3;default:return $$t.$bf.a4}},g:function(){return true},$type:new $.ig.Type("WorksheetPartManager",$$t.$jx.$type)},true);$c("DrawingMLSpreadsheetDrawing:au","DrawingNamespaceDefinitionBase",{init:function(){$$t.$ir.init.call(this)},j:function(){return"xdr"},ba:function(){return $$t.$au.dq},bb:function(){return $$t.$au.dr},eh:function(a,b){var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){default:break}}},ew:function(a,b){a.ad().p(b,"xdr")},eo:function(a,b,c){var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){default:break}}c=$$v.$cd.h(a.ab().ad);return{p2:c}},e3:function(a,b,c){a.ad().p(b,"xdr");a.ad().u(c.toString())},ed:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},es:function(a){a.ad().p($$t.$au.ds,"xdr")},ee:function(a,b,c){b=true;
c=true;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"fLocksWithSheet":b=$$t.$g2.e(d.d);break;case"fPrintsWithSheet":c=$$t.$g2.e(d.d);break;default:break}}return{p1:b,p2:c}},et:function(a,b,c){a.ad().p($$t.$au.dt,"xdr");var d;if(b!=true){d=$$t.$g2.g(b);a.ad().h("fLocksWithSheet",d)}if(c!=true){d=$$t.$g2.g(c);a.ad().h("fPrintsWithSheet",d)}},ef:function(a,b){var c=$$t.$au.r(a,$$t.$au.du,b);b=c.p2;return{p1:b}},eu:function(a,b){$$t.$au.af(a,$$t.$au.du,"xdr",b)},eg:function(a,b){var c=$$t.$au.eo(a,$$t.$au.dv,b);b=c.p2;return{p1:b}},ev:function(a,b){$$t.$au.e3(a,$$t.$au.dv,b)},ei:function(a,b,c){var d=$$t.$iq.ha(a,$$t.$au.dy,b,c);b=d.p2;c=d.p3;return{p1:b,p2:c}},ex:function(a,b,c){$$t.$iq.kc(a,$$t.$au.dy,b,c)},ej:function(a){},ey:function(a){$$t.$au.ew(a,$$t.$au.d1)},ek:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},ez:function(a){a.ad().p($$t.$au.d4,"xdr")},el:function(a,b,c){var d=$$t.$iq.g6(a,$$t.$au.d6,b,c);b=d.p2;c=d.p3;return{p1:b,p2:c}},e0:function(a,b,c){$$t.$iq.j8(a,$$t.$au.d6,b,c)},em:function(a,b){var c=$$t.$au.r(a,$$t.$au.d7,b);b=c.p2;return{p1:b}},e1:function(a,b){$$t.$au.af(a,$$t.$au.d7,"xdr",b)},en:function(a,b){var c=$$t.$au.eo(a,$$t.$au.d8,b);b=c.p2;return{p1:b}},e2:function(a,b){$$t.$au.e3(a,$$t.$au.d8,b)},ep:function(a){},e4:function(a){$$t.$au.ew(a,$$t.$au.ea)},eq:function(a,b){b=0;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"editAs":b=$$t.$i4.b($$t.$x.$type,c.d,b);break;default:break}}return{p1:b}},e5:function(a,b){a.ad().p($$t.$au.eb,"xdr");var c;if(b!=0){c=$$t.$i4.f($$t.$x.$type,b);a.ad().h("editAs",c)}},er:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},e6:function(a){a.ad().p($$t.$au.ec,"xdr");var b=a.d()._y();a.ad().l($$t.$iq.an,false);a.ad().l($$t.$au.dn,false)},$type:new $.ig.Type("DrawingMLSpreadsheetDrawing",$$t.$ir.$type)},true);$c("Excel2006Main:av","XmlNamespaceDefinitionBase",{init:function(){$$t.$i4.init.call(this)},i:function(a){switch(a){case 0:case 1:return $$t.$av.aq;default:return $$t.$av.aq}},j:function(){return"xm"},as:function(a,b){var c=$$t.$ay.u(a,$$t.$av.ap,b,0);b=c.p2;return{p1:b}},au:function(a,b){$$t.$ay.ai(a,$$t.$av.ap,"xm",b,null,0)},at:function(a,b){var c=$$t.$ay.u(a,$$t.$av.ar,b,0);b=c.p2;return{p1:b}},av:function(a,b){$$t.$ay.ai(a,$$t.$av.ar,"xm",b,null,0)},$type:new $.ig.Type("Excel2006Main",$$t.$i4.$type)},true);$c("ExcelNamespace:aw","XmlNamespaceDefinitionBase",{init:function(){$$t.$i4.init.call(this)},i:function(a){switch(a){case 0:case 1:return"urn:schemas-microsoft-com:office:excel";default:return"urn:schemas-microsoft-com:office:excel"}},j:function(){return"x"},cz:function(a,b,c){var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){default:break}}c=$$t.$h8.d(a.ab().ad);return{p2:c}},d8:function(a,b,c,d){a.ad().p(b,c);var e=$$t.$h8.f(d);if(String.isNullOrEmpty(e)==false){a.ad().u(e)}},by:function(a,b){var c=$$t.$aw.u(a,$$t.$aw.ap,b,0);b=c.p2;return{p1:b}},c6:function(a,b){$$t.$aw.ai(a,$$t.$aw.ap,"x",b,null,0)},bz:function(a,b){var c=$$t.$aw.cz(a,$$t.$aw.aq,b);b=c.p2;return{p1:b}},c7:function(a,b){$$t.$aw.d8(a,$$t.$aw.aq,"x",b)},b0:function(a,b){var c=$$t.$aw.cz(a,$$t.$aw.ar,b);b=c.p2;return{p1:b}},c8:function(a,b){$$t.$aw.d8(a,$$t.$aw.ar,"x",b)},b1:function(a,b){var c=$$t.$aw.cz(a,$$t.$aw.as,b);b=c.p2;return{p1:b}},c9:function(a,b){$$t.$aw.d8(a,$$t.$aw.as,"x",b)},b2:function(a,b){var c=$$t.$aw.cz(a,$$t.$aw.at,b);b=c.p2;return{p1:b}},da:function(a,b){$$t.$aw.d8(a,$$t.$aw.at,"x",b)},b3:function(a,b){var c=$$t.$aw.cz(a,$$t.$aw.au,b);b=c.p2;return{p1:b}},db:function(a,b){$$t.$aw.d8(a,$$t.$aw.au,"x",b)},b4:function(a,b){var c=$$t.$aw.cz(a,$$t.$aw.av,b);b=c.p2;return{p1:b}},dc:function(a,b){$$t.$aw.d8(a,$$t.$aw.av,"x",b)},b5:function(a,b){var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){default:break}}b=$$t.$i4.b($$t.$f6.$type,a.ab().ad,null);return{p1:b}},dd:function(a,b){a.ad().p($$t.$aw.aw,"x");a.ad().u($$t.$i4.f($$t.$f6.$type,b))},b6:function(a,b){var c=$$t.$aw.r(a,$$t.$aw.ax,b);b=c.p2;return{p1:b}},de:function(a,b){$$t.$aw.af(a,$$t.$aw.ax,"x",b)},b7:function(a,b){b=0;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"ObjectType":b=$$t.$i4.b($$t.$ad.$type,c.d,b);break;default:break}}return{p1:b}},df:function(a,b){a.ad().p($$t.$aw.ay,"x");var c;c=$$t.$i4.f($$t.$ad.$type,b);a.ad().h("ObjectType",c)},b8:function(a,b){var c=$$t.$aw.cz(a,$$t.$aw.az,b);b=c.p2;return{p1:b}},dg:function(a,b){$$t.$aw.d8(a,$$t.$aw.az,"x",b)},b9:function(a,b){var c=$$t.$aw.cz(a,$$t.$aw.a0,b);b=c.p2;return{p1:b}},dh:function(a,b){$$t.$aw.d8(a,$$t.$aw.a0,"x",b)},ca:function(a,b){var c=$$t.$aw.r(a,$$t.$aw.a1,b);b=c.p2;return{p1:b}},di:function(a,b){$$t.$aw.af(a,$$t.$aw.a1,"x",b)},cb:function(a,b){var c=$$t.$aw.cz(a,$$t.$aw.a2,b);b=c.p2;return{p1:b}},dj:function(a,b){$$t.$aw.d8(a,$$t.$aw.a2,"x",b)},cc:function(a,b){var c=$$t.$aw.cz(a,$$t.$aw.a3,b);b=c.p2;return{p1:b}},dk:function(a,b){$$t.$aw.d8(a,$$t.$aw.a3,"x",b)},cd:function(a,b){var c=$$t.$aw.cz(a,$$t.$aw.a4,b);b=c.p2;return{p1:b}},dl:function(a,b){$$t.$aw.d8(a,$$t.$aw.a4,"x",b)},ce:function(a,b){var c=$$t.$aw.cz(a,$$t.$aw.a5,b);b=c.p2;return{p1:b}},dm:function(a,b){$$t.$aw.d8(a,$$t.$aw.a5,"x",b)},cf:function(a,b){var c=$$t.$aw.cz(a,$$t.$aw.a6,b);b=c.p2;return{p1:b}},dn:function(a,b){$$t.$aw.d8(a,$$t.$aw.a6,"x",b)},cg:function(a,b){var c=$$t.$aw.cz(a,$$t.$aw.a7,b);b=c.p2;return{p1:b}},dp:function(a,b){$$t.$aw.d8(a,$$t.$aw.a7,"x",b)},ch:function(a,b){var c=$$t.$aw.u(a,$$t.$aw.a8,b,0);b=c.p2;return{p1:b}},dq:function(a,b){$$t.$aw.ai(a,$$t.$aw.a8,"x",b,null,0)},ci:function(a,b){var c=$$t.$aw.u(a,$$t.$aw.a9,b,0);b=c.p2;return{p1:b}},dr:function(a,b){$$t.$aw.ai(a,$$t.$aw.a9,"x",b,null,0)},cj:function(a,b){var c=$$t.$aw.cz(a,$$t.$aw.ba,b);b=c.p2;return{p1:b}},ds:function(a,b){$$t.$aw.d8(a,$$t.$aw.ba,"x",b)},ck:function(a,b){var c=$$t.$aw.cz(a,$$t.$aw.bb,b);b=c.p2;return{p1:b}},dt:function(a,b){$$t.$aw.d8(a,$$t.$aw.bb,"x",b)},cl:function(a,b){var c=$$t.$aw.cz(a,$$t.$aw.bc,b);b=c.p2;return{p1:b}},du:function(a,b){$$t.$aw.d8(a,$$t.$aw.bc,"x",b)},cn:function(a,b){var c=$$t.$aw.cz(a,$$t.$aw.be,b);b=c.p2;return{p1:b}},dw:function(a,b){$$t.$aw.d8(a,$$t.$aw.be,"x",b)},cm:function(a,b){var c=$$t.$aw.cz(a,$$t.$aw.bd,b);b=c.p2;return{p1:b}},dv:function(a,b){$$t.$aw.d8(a,$$t.$aw.bd,"x",b)},co:function(a,b){var c=$$t.$aw.cz(a,$$t.$aw.bf,b);b=c.p2;return{p1:b}},dx:function(a,b){$$t.$aw.d8(a,$$t.$aw.bf,"x",b)},cp:function(a,b){var c=$$t.$aw.cz(a,$$t.$aw.bg,b);b=c.p2;return{p1:b}},dy:function(a,b){$$t.$aw.d8(a,$$t.$aw.bg,"x",b)},cq:function(a,b){var c=$$t.$aw.cz(a,$$t.$aw.bh,b);b=c.p2;return{p1:b}},dz:function(a,b){$$t.$aw.d8(a,$$t.$aw.bh,"x",b)},cs:function(a,b){var c=$$t.$aw.cz(a,$$t.$aw.bj,b);b=c.p2;return{p1:b}},d1:function(a,b){$$t.$aw.d8(a,$$t.$aw.bj,"x",b)},cr:function(a,b){var c=$$t.$aw.cz(a,$$t.$aw.bk,b);b=c.p2;return{p1:b}},d0:function(a,b){$$t.$aw.d8(a,$$t.$aw.bk,"x",b)},ct:function(a,b){var c=$$t.$aw.cz(a,$$t.$aw.bm,b);b=c.p2;return{p1:b}},d2:function(a,b){$$t.$aw.d8(a,$$t.$aw.bm,"x",b)},cu:function(a,b){var c=$$t.$aw.cz(a,$$t.$aw.bn,b);b=c.p2;return{p1:b}},d3:function(a,b){$$t.$aw.d8(a,$$t.$aw.bn,"x",b)},cv:function(a,b){var c=$$t.$aw.r(a,$$t.$aw.bo,b);b=c.p2;return{p1:b}},d4:function(a,b){$$t.$aw.af(a,$$t.$aw.bo,"x",b)},cw:function(a,b){var c=$$t.$aw.cz(a,$$t.$aw.bp,b);b=c.p2;return{p1:b}},d5:function(a,b){$$t.$aw.d8(a,$$t.$aw.bp,"x",b)},cx:function(a,b){var c=$$t.$aw.cz(a,$$t.$aw.bq,b);b=c.p2;return{p1:b}},d6:function(a,b){$$t.$aw.d8(a,$$t.$aw.bq,"x",b)},cy:function(a,b){var c=$$t.$aw.cz(a,$$t.$aw.br,b);b=c.p2;return{p1:b}},d7:function(a,b){$$t.$aw.d8(a,$$t.$aw.br,"x",b)},c0:function(a,b){var c=$$t.$aw.u(a,$$t.$aw.bs,b,0);b=c.p2;return{p1:b}},d9:function(a,b){$$t.$aw.ai(a,$$t.$aw.bs,"x",b,null,0)},c1:function(a,b){var c=$$t.$aw.u(a,$$t.$aw.bt,b,0);b=c.p2;return{p1:b}},ea:function(a,b){$$t.$aw.ai(a,$$t.$aw.bt,"x",b,null,0)},c2:function(a,b){var c=$$t.$aw.cz(a,$$t.$aw.bu,b);b=c.p2;return{p1:b}},eb:function(a,b){$$t.$aw.d8(a,$$t.$aw.bu,"x",b)},c5:function(a,b){var c=$$t.$aw.cz(a,$$t.$aw.bx,b);b=c.p2;return{p1:b}},ee:function(a,b){$$t.$aw.d8(a,$$t.$aw.bx,"x",b)},c3:function(a,b){var c=$$t.$aw.cz(a,$$t.$aw.bv,b);b=c.p2;return{p1:b}},ec:function(a,b){$$t.$aw.d8(a,$$t.$aw.bv,"x",b)},c4:function(a,b){var c=$$t.$aw.cz(a,$$t.$aw.bw,b);b=c.p2;return{p1:b}},ed:function(a,b){$$t.$aw.d8(a,$$t.$aw.bw,"x",b)},$type:new $.ig.Type("ExcelNamespace",$$t.$i4.$type)},true);$c("SpreadsheetML2009Main:ax","XmlNamespaceDefinitionBase",{init:function(){$$t.$i4.init.call(this)},i:function(a){switch(a){case 0:case 1:return $$t.$ax.a4;default:return $$t.$ax.a4}},j:function(){return"x14"},bo:function(a,b,c,d,e,f,g,h,i,j,k,l,m){b=0;c=0;d=0;e=0;f=false;g=false;h=false;i=false;j=null;k=null;l=null;m=null;var o=a.ab().u.getEnumerator();while(o.moveNext()){var n=o.current();switch(n.a.e(a.d())){case"type":b=$$t.$i4.b($$t.$w.$type,n.d,b);break;case"errorStyle":c=$$t.$i4.b($$t.$t.$type,n.d,c);break;case"imeMode":d=$$t.$i4.b($$t.$u.$type,n.d,d);break;case"operator":e=$$t.$i4.b($$t.$v.$type,n.d,e);break;case"allowBlank":f=$$t.$g2.e(n.d);break;case"showDropDown":g=$$t.$g2.e(n.d);break;case"showInputMessage":h=$$t.$g2.e(n.d);break;case"showErrorMessage":i=$$t.$g2.e(n.d);break;case"errorTitle":j=n.d;break;case"error":k=n.d;break;case"promptTitle":l=n.d;break;case"prompt":m=n.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m}},by:function(a,b,c,d,e,f,g,h,i,j,k,l,m){a.ad().p($$t.$ax.as,"x14");var n;if(b!=0){n=$$t.$i4.f($$t.$w.$type,b);a.ad().h("type",n)}if(c!=0){n=$$t.$i4.f($$t.$t.$type,c);a.ad().h("errorStyle",n)}if(d!=0){n=$$t.$i4.f($$t.$u.$type,d);a.ad().h("imeMode",n)}if(e!=0){n=$$t.$i4.f($$t.$v.$type,e);a.ad().h("operator",n)}if(f!=false){n=$$t.$g2.g(f);a.ad().h("allowBlank",n)}if(g!=false){n=$$t.$g2.g(g);a.ad().h("showDropDown",n)}if(h!=false){n=$$t.$g2.g(h);a.ad().h("showInputMessage",n)}if(i!=false){n=$$t.$g2.g(i);a.ad().h("showErrorMessage",n)}n=j;a.ad().h("errorTitle",n);n=k;a.ad().h("error",n);n=l;a.ad().h("promptTitle",n);n=m;a.ad().h("prompt",n)},bp:function(a,b,c,d,e){b=false;c=$m($$0.$be.$type,null);d=$m($$0.$be.$type,null);e=$m($$0.$be.$type,null);var g=a.ab().u.getEnumerator();while(g.moveNext()){var f=g.current();switch(f.a.e(a.d())){case"disablePrompts":b=$$t.$g2.e(f.d);break;case"xWindow":c=$m($$0.$be.$type,$.ig.util.parseUInt32_1(f.d,$$0.$cg.invariantCulture()));break;case"yWindow":d=$m($$0.$be.$type,$.ig.util.parseUInt32_1(f.d,$$0.$cg.invariantCulture()));break;case"count":e=$m($$0.$be.$type,$.ig.util.parseUInt32_1(f.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b,p2:c,p3:d,p4:e}},bz:function(a,b,c,d,e){a.ad().p($$t.$ax.at,"x14");var f;if(b!=false){f=$$t.$g2.g(b);a.ad().h("disablePrompts",f)}if($l(c,null)){f=c.value().toString();a.ad().h("xWindow",f)}if($l(d,null)){f=d.value().toString();a.ad().h("yWindow",f)}if($l(e,null)){f=e.value().toString();a.ad().h("count",f)}},bq:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},b0:function(a){a.ad().p($$t.$ax.az,"x14")},br:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},b1:function(a){a.ad().p($$t.$ax.a0,"x14")},bs:function(a,b,c,d,e){b=null;c=false;d=false;e=false;var g=a.ab().u.getEnumerator();while(g.moveNext()){var f=g.current();switch(f.a.e(a.d())){case"name":b=f.d;break;case"icon":c=$$t.$g2.e(f.d);break;case"advise":d=$$t.$g2.e(f.d);break;case"preferPic":e=$$t.$g2.e(f.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e}},b2:function(a,b,c,d,e){a.ad().p($$t.$ax.a5,"x14");var f;f=b;a.ad().h("name",f);if(c!=false){f=$$t.$g2.g(c);a.ad().h("icon",f)}if(d!=false){f=$$t.$g2.g(d);a.ad().h("advise",f)}if(e!=false){f=$$t.$g2.g(e);a.ad().h("preferPic",f)}},bt:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},b3:function(a){a.ad().p($$t.$ax.a7,"x14")},bw:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case $$t.$i0.ar:b=c.d;break;default:break}}return{p1:b}},b6:function(a,b){a.ad().p($$t.$ax.bf,"x14");var c;c=b;a.ad().h($$t.$i0.ar,c)},bu:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case $$t.$i0.ar:b=c.d;break;default:break}}return{p1:b}},b4:function(a,b){a.ad().p($$t.$ax.bg,"x14");var c;c=b;a.ad().h($$t.$i0.ar,c)},bv:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},b5:function(a){a.ad().p($$t.$ax.bh,"x14")},bx:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},b7:function(a){a.ad().p($$t.$ax.bj,"x14")},$type:new $.ig.Type("SpreadsheetML2009Main",$$t.$i4.$type)},true);$c("SpreadsheetMLMain:ay","XmlNamespaceDefinitionBase",{init:function(){$$t.$i4.init.call(this)},i:function(a){switch(a){case 0:return $$t.$ay.k1;case 1:return $$t.$ay.k0;default:return $$t.$ay.k1}},j:function(){return null},sz:function(a,b,c,d){if(a==null){a=new $$6.aj(1,b.length)}a.m(b,d,c-d);d=c+1;return{p0:a,p3:d}},g4:function(a){if(a==null){return null}var b=null;var c=0;for(var d=0;d<a.length;d++){var e=a.charAt(d);if(e=="_"){if(a.length<=d+6||a.charAt(d+1)!="x"||a.charAt(d+6)!="_"){continue}if($$v.$aq.d(a.charAt(d+2))==false||$$v.$aq.d(a.charAt(d+3))==false||$$v.$aq.d(a.charAt(d+4))==false||$$v.$aq.d(a.charAt(d+5))==false){continue}var f=$$t.$ay.sz(b,a,d,c);b=f.p0;c=f.p3;b.l("_x005F_")}if(e.charCodeAt(0)==9||e.charCodeAt(0)==10||e.charCodeAt(0)==13||32<=e.charCodeAt(0)&&e.charCodeAt(0)<=55295||57344<=e.charCodeAt(0)&&e.charCodeAt(0)<=65533){continue}if(65535<=e.charCodeAt(0)){continue}var g=$$t.$ay.sz(b,a,d,c);b=g.p0;c=g.p3;b.q("_x{0:X4}_",e.charCodeAt(0))}if(c==0){return a}var h=$$t.$ay.sz(b,a,a.length,c);b=h.p0;c=h.p3;return b.toString()},rd:function(a,b){if(a==null){return null}var c=null;var d=0;for(var e=0;e<a.length;e++){var f=a.charAt(e);if(f!="_"){if(b){if(f=="\n"){var g=$$t.$ay.sz(c,a,e,d);c=g.p0;d=g.p3}else if(f=="\r"){var h=$$t.$ay.sz(c,a,e,d);c=h.p0;d=h.p3;if(e+1<a.length&&a.charAt(e+1)=="\n"){e++;d++}}}continue}if(a.length<=e+6||a.charAt(e+1)!="x"||a.charAt(e+6)!="_"){continue}var i=a.substr(e+2,4);var j;if(function(){var k=$ag(i,515,$$0.$cg.invariantCulture(),j);j=k.p3;return k.ret}()==false){continue}var k=$$t.$ay.sz(c,a,e,d);c=k.p0;d=k.p3;c.h($u(j));e+=6;d+=6}if(d==0){return a}var l=$$t.$ay.sz(c,a,a.length,d);c=l.p0;d=l.p3;return c.toString()},t0:function(a,b,c){c=true;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"val":c=$$t.$g2.e(d.d);break;default:break}}return{p2:c}},y9:function(a,b,c){a.ad().p(b,null);var d;if(c!=true){d=$$t.$g2.g(c);a.ad().h("val",d)}},t1:function(a,b,c){c=0;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"style":c=$$t.$i4.b($$t.$k.$type,d.d,c);break;default:break}}return{p2:c}},za:function(a,b,c){a.ad().p(b,null);var d;if(c!=0){d=$$t.$i4.f($$t.$k.$type,c);a.ad().h("style",d)}},t2:function(a,b,c,d,e,f,g){c=$m($$0.$aq.$type,null);d=$m($$0.$be.$type,null);e=$m($$t.$ic.$type,null);f=$m($$0.$be.$type,null);g=0;var i=a.ab().u.getEnumerator();while(i.moveNext()){var h=i.current();switch(h.a.e(a.d())){case"auto":c=$m($$0.$aq.$type,$$t.$g2.e(h.d));break;case"indexed":d=$m($$0.$be.$type,$.ig.util.parseUInt32_1(h.d,$$0.$cg.invariantCulture()));break;case"rgb":e=$m($$t.$ic.$type,$$t.$ic.d(h.d));break;case"theme":f=$m($$0.$be.$type,$.ig.util.parseUInt32_1(h.d,$$0.$cg.invariantCulture()));break;case"tint":g=$an(h.d,$$0.$cg.invariantCulture());break;default:break}}return{p2:c,p3:d,p4:e,p5:f,p6:g}},zb:function(a,b,c,d,e,f,g){a.ad().p(b,null);var h;if($l(c,null)){h=$$t.$g2.g(c.value());a.ad().h("auto",h)}if($l(d,null)){h=d.value().toString();a.ad().h("indexed",h)}if($l(e,null)){h=e.value().toString();a.ad().h("rgb",h)}if($l(f,null)){h=f.value().toString();a.ad().h("theme",h)}if(g!=0){h=g.toString();a.ad().h("tint",h)}},t3:function(a,b,c){var d=$$t.$ay.u(a,b,c,0);c=d.p2;return{p2:c}},zc:function(a,b,c){$$t.$ay.ai(a,b,null,c,null,0)},t4:function(a,b,c,d){c=0;d=0;var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case"count":c=$.ig.util.parseUInt32_1(e.d,$$0.$cg.invariantCulture());break;case"manualBreakCount":d=$.ig.util.parseUInt32_1(e.d,$$0.$cg.invariantCulture());break;default:break}}return{p2:c,p3:d}},zd:function(a,b,c,d){a.ad().p(b,null);var e;if(c!=0){e=c.toString();a.ad().h("count",e)}if(d!=0){e=d.toString();a.ad().h("manualBreakCount",e)}},t5:function(a,b,c,d){d=false;var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case"array":d=$$t.$g2.e(e.d);break;default:break}}c=a.ab().ad;return{p2:c,p3:d}},ze:function(a,b,c,d){a.ad().p(b,null);var e;if(d!=false){e=$$t.$g2.g(d);a.ad().h("array",e)}a.ad().u(c)},s0:function(a,b,c,d,e,f,g,h,i,j){b=$m($$t.$ab.$type,null);c=$m($$t.$as.$type,null);d=$m($$0.$be.$type,null);e=false;f=$m($$0.$be.$type,null);g=$m($$0.$aw.$type,null);h=false;i=false;j=$m($$0.$be.$type,null);var l=a.ab().u.getEnumerator();while(l.moveNext()){var k=l.current();switch(k.a.e(a.d())){case"horizontal":b=$m($$t.$ab.$type,$$t.$i4.b($$t.$ab.$type,k.d,null));break;case"vertical":c=$m($$t.$as.$type,$$t.$i4.b($$t.$as.$type,k.d,null));break;case"textRotation":d=$m($$0.$be.$type,$.ig.util.parseUInt32_1(k.d,$$0.$cg.invariantCulture()));break;case"wrapText":e=$$t.$g2.e(k.d);break;case"indent":f=$m($$0.$be.$type,$.ig.util.parseUInt32_1(k.d,$$0.$cg.invariantCulture()));break;case"relativeIndent":g=$m($$0.$aw.$type,$ai(k.d,$$0.$cg.invariantCulture()));break;case"justifyLastLine":h=$$t.$g2.e(k.d);break;case"shrinkToFit":i=$$t.$g2.e(k.d);break;case"readingOrder":j=$m($$0.$be.$type,$.ig.util.parseUInt32_1(k.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j}},x9:function(a,b,c,d,e,f,g,h,i,j){a.ad().p($$t.$ay.ci,null);var k;if($l(b,null)){k=$$t.$i4.f($$t.$ab.$type,b.value());a.ad().h("horizontal",k)}if($l(c,null)){k=$$t.$i4.f($$t.$as.$type,c.value());a.ad().h("vertical",k)}if($l(d,null)){k=d.value().toString();a.ad().h("textRotation",k)}if(e!=false){k=$$t.$g2.g(e);a.ad().h("wrapText",k)}if($l(f,null)){k=f.value().toString();a.ad().h("indent",k)}if($l(g,null)){k=g.value().toString();a.ad().h("relativeIndent",k)}if(h!=false){k=$$t.$g2.g(h);a.ad().h("justifyLastLine",k)}if(i!=false){k=$$t.$g2.g(i);a.ad().h("shrinkToFit",k)}if($l(j,null)){k=j.value().toString();a.ad().h("readingOrder",k)}},s1:function(a,b,c){b=false;c=false;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"moveWithCells":b=$$t.$g2.e(d.d);break;case"sizeWithCells":c=$$t.$g2.e(d.d);break;default:break}}return{p1:b,p2:c}},ya:function(a,b,c){a.ad().p($$t.$ay.cn,null);var d;if(b!=false){d=$$t.$g2.g(b);a.ad().h("moveWithCells",d)}if(c!=false){d=$$t.$g2.g(c);a.ad().h("sizeWithCells",d)}},s2:function(a,b){var c=$$t.$ay.u(a,$$t.$ay.cy,b,0);b=c.p2;return{p1:b}},yb:function(a,b){$$t.$ay.ai(a,$$t.$ay.cy,null,b,null,0)},s3:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},yc:function(a){a.ad().p($$t.$ay.c0,null)},s4:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"ref":b=c.d;break;default:break}}return{p1:b}},yd:function(a,b){a.ad().p($$t.$ay.c4,null);var c;c=b;a.ad().h("ref",c)},s5:function(a,b){var c=$$t.$ay.t0(a,$$t.$ay.db,b);b=c.p2;return{p1:b}},ye:function(a,b){$$t.$ay.y9(a,$$t.$ay.db,b)},s6:function(a,b,c,d,e,f){var g=$$t.$ay.t2(a,$$t.$ay.df,b,c,d,e,f);b=g.p2;c=g.p3;d=g.p4;e=g.p5;f=g.p6;return{p1:b,p2:c,p3:d,p4:e,p5:f}},yf:function(a,b,c,d,e,f){$$t.$ay.zb(a,$$t.$ay.df,b,c,d,e,f)},s7:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},yg:function(a){a.ad().p($$t.$ay.di,null)},s8:function(a,b,c,d){b=false;c=false;d=true;var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case"diagonalUp":b=$$t.$g2.e(e.d);break;case"diagonalDown":c=$$t.$g2.e(e.d);break;case"outline":d=$$t.$g2.e(e.d);break;default:break}}return{p1:b,p2:c,p3:d}},yh:function(a,b,c,d){a.ad().p($$t.$ay.dj,null);var e;if(b!=false){e=$$t.$g2.g(b);a.ad().h("diagonalUp",e)}if(c!=false){e=$$t.$g2.g(c);a.ad().h("diagonalDown",e)}if(d!=true){e=$$t.$g2.g(d);a.ad().h("outline",e)}},s9:function(a,b){b=$m($$0.$be.$type,null);var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"count":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(c.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b}},yi:function(a,b){a.ad().p($$t.$ay.dl,null);var c;if($l(b,null)){c=b.value().toString();a.ad().h("count",c)}},ta:function(a,b){var c=$$t.$ay.t1(a,$$t.$ay.dm,b);b=c.p2;return{p1:b}},yj:function(a,b){$$t.$ay.za(a,$$t.$ay.dm,b)},tb:function(a,b,c,d,e,f){b=0;c=0;d=0;e=false;f=false;var h=a.ab().u.getEnumerator();while(h.moveNext()){var g=h.current();switch(g.a.e(a.d())){case"id":b=$.ig.util.parseUInt32_1(g.d,$$0.$cg.invariantCulture());break;case"min":c=$.ig.util.parseUInt32_1(g.d,$$0.$cg.invariantCulture());break;case"max":d=$.ig.util.parseUInt32_1(g.d,$$0.$cg.invariantCulture());break;case"man":e=$$t.$g2.e(g.d);break;case"pt":f=$$t.$g2.e(g.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f}},yk:function(a,b,c,d,e,f){a.ad().p($$t.$ay.dp,null);var g;if(b!=0){g=b.toString();a.ad().h("id",g)}if(c!=0){g=c.toString();a.ad().h("min",g)}if(d!=0){g=d.toString();a.ad().h("max",g)}if(e!=false){g=$$t.$g2.g(e);a.ad().h("man",g)}if(f!=false){g=$$t.$g2.g(f);a.ad().h("pt",g)}},tc:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b=$m($$0.$be.$type,null);c=1;d=false;e=0;f=false;g=100;h=.001;i=true;j=true;k=true;l=true;m=$m($$0.$be.$type,null);n=$m($$0.$aq.$type,null);var p=a.ab().u.getEnumerator();while(p.moveNext()){var o=p.current();switch(o.a.e(a.d())){case"calcId":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(o.d,$$0.$cg.invariantCulture()));break;case"calcMode":c=$$t.$i4.b($$t.$l.$type,o.d,c);break;case"fullCalcOnLoad":d=$$t.$g2.e(o.d);break;case"refMode":e=$$t.$i4.b($$t.$ak.$type,o.d,e);break;case"iterate":f=$$t.$g2.e(o.d);break;case"iterateCount":g=$.ig.util.parseUInt32_1(o.d,$$0.$cg.invariantCulture());break;case"iterateDelta":h=$an(o.d,$$0.$cg.invariantCulture());break;case"fullPrecision":i=$$t.$g2.e(o.d);break;case"calcCompleted":j=$$t.$g2.e(o.d);break;case"calcOnSave":k=$$t.$g2.e(o.d);break;case"concurrentCalc":l=$$t.$g2.e(o.d);break;case"concurrentManualCount":m=$m($$0.$be.$type,$.ig.util.parseUInt32_1(o.d,$$0.$cg.invariantCulture()));break;case"forceFullCalc":n=$m($$0.$aq.$type,$$t.$g2.e(o.d));break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n}},yl:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){a.ad().p($$t.$ay.dz,null);var o;if($l(b,null)){o=b.value().toString();a.ad().h("calcId",o)}if(c!=1){o=$$t.$i4.f($$t.$l.$type,c);a.ad().h("calcMode",o)}if(d!=false){o=$$t.$g2.g(d);a.ad().h("fullCalcOnLoad",o)}if(e!=0){o=$$t.$i4.f($$t.$ak.$type,e);a.ad().h("refMode",o)}if(f!=false){o=$$t.$g2.g(f);a.ad().h("iterate",o)}if(g!=100){o=g.toString();a.ad().h("iterateCount",o)}if(h!=.001){o=h.toString();a.ad().h("iterateDelta",o)}if(i!=true){o=$$t.$g2.g(i);a.ad().h("fullPrecision",o)}if(j!=true){o=$$t.$g2.g(j);a.ad().h("calcCompleted",o)}if(k!=true){o=$$t.$g2.g(k);a.ad().h("calcOnSave",o)}if(l!=true){o=$$t.$g2.g(l);a.ad().h("concurrentCalc",o)}if($l(m,null)){o=m.value().toString();a.ad().h("concurrentManualCount",o)}if($l(n,null)){o=$$t.$g2.g(n.value());a.ad().h("forceFullCalc",o)}},td:function(a,b,c){var d=$$t.$ay.t5(a,$$t.$ay.d0,b,c);b=d.p2;c=d.p3;return{p1:b,p2:c}},ym:function(a,b,c){$$t.$ay.ze(a,$$t.$ay.d0,b,c)},te:function(a,b,c,d,e,f,g){b=null;c=0;d=2;e=0;f=0;g=false;var i=a.ab().u.getEnumerator();while(i.moveNext()){var h=i.current();switch(h.a.e(a.d())){case"r":b=h.d;break;case"s":c=$.ig.util.parseUInt32_1(h.d,$$0.$cg.invariantCulture());break;case"t":d=$$t.$ay.aq(h.d);break;case"cm":e=$.ig.util.parseUInt32_1(h.d,$$0.$cg.invariantCulture());break;case"vm":f=$.ig.util.parseUInt32_1(h.d,$$0.$cg.invariantCulture());break;case"ph":g=$$t.$g2.e(h.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g}},aq:function(a){switch(a){case"b":return 0;case"d":return 1;case"e":return 3;case"n":return 2;case"s":return 4;case"str":return 5;case"inlineStr":return 6;default:return 2}},yn:function(a,b,c,d,e,f,g){a.ad().r("c");a.ad().j("r",b);if(c!=0){a.ad().j("s",c.toString())}if(d!=2){a.ad().j("t",$$t.$i.a(d))}if(e!=0){a.ad().j("cm",e.toString())}if(f!=0){a.ad().j("vm",f.toString())}if(g!=false){a.ad().j("ph",$$t.$g2.g(g))}},tf:function(a,b,c,d){b=null;c=2;d=0;var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case"r":b=e.d;break;case"t":c=$$t.$i4.b($$v.$ci.$type,e.d,c);break;case"vm":d=$.ig.util.parseUInt32_1(e.d,$$0.$cg.invariantCulture());break;default:break}}return{p1:b,p2:c,p3:d}},yo:function(a,b,c,d){a.ad().p($$t.$ay.d3,null);var e;e=b;a.ad().h("r",e);if(c!=2){e=$$t.$i.a(c);a.ad().h("t",e)}if(d!=0){e=d.toString();a.ad().h("vm",e)}},tg:function(a,b,c,d,e,f,g){c=null;b=0;d=$m($$0.$be.$type,null);e=$m($$0.$be.$type,null);f=false;g=false;var i=a.ab().u.getEnumerator();while(i.moveNext()){var h=i.current();switch(h.a.e(a.d())){case"name":c=$$t.$ay.rd(h.d,false);break;case"xfId":b=$.ig.util.parseUInt32_1(h.d,$$0.$cg.invariantCulture());break;case"builtinId":d=$m($$0.$be.$type,$.ig.util.parseUInt32_1(h.d,$$0.$cg.invariantCulture()));break;case"iLevel":e=$m($$0.$be.$type,$.ig.util.parseUInt32_1(h.d,$$0.$cg.invariantCulture()));break;case"hidden":f=$$t.$g2.e(h.d);break;case"customBuiltin":g=$$t.$g2.e(h.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g}},yp:function(a,b,c,d,e,f,g){a.ad().p($$t.$ay.d6,null);var h;h=$$t.$ay.g4(c);a.ad().h("name",h);h=b.toString();a.ad().h("xfId",h);if($l(d,null)){h=d.value().toString();a.ad().h("builtinId",h)}if($l(e,null)){h=e.value().toString();a.ad().h("iLevel",h)}if(f!=false){h=$$t.$g2.g(f);a.ad().h("hidden",h)}if(g!=false){h=$$t.$g2.g(g);a.ad().h("customBuiltin",h)}},th:function(a,b){b=$m($$0.$be.$type,null);var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"count":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(c.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b}},yq:function(a,b){a.ad().p($$t.$ay.d7,null);var c;if($l(b,null)){c=b.value().toString();a.ad().h("count",c)}},ti:function(a,b){b=$m($$0.$be.$type,null);var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"count":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(c.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b}},yr:function(a,b){a.ad().p($$t.$ay.d8,null);var c;if($l(b,null)){c=b.value().toString();a.ad().h("count",c)}},tj:function(a,b){b=$m($$0.$be.$type,null);var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"count":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(c.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b}},ys:function(a,b){a.ad().p($$t.$ay.d9,null);var c;if($l(b,null)){c=b.value().toString();a.ad().h("count",c)}},tk:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b=$m($$t.$p.$type,null);c=$m($$0.$be.$type,null);d=0;e=false;f=true;g=false;h=false;i=$m($$t.$s.$type,null);j=null;k=$m($$t.$ap.$type,null);l=$m($$0.$be.$type,null);m=$m($$0.$aw.$type,null);n=false;var p=a.ab().u.getEnumerator();while(p.moveNext()){var o=p.current();switch(o.a.e(a.d())){case"type":b=$m($$t.$p.$type,$$t.$i4.b($$t.$p.$type,o.d,null));break;case"dxfId":c=$m($$0.$be.$type,$.ig.util.parseUInt32_1(o.d,$$0.$cg.invariantCulture()));break;case"priority":d=$ai(o.d,$$0.$cg.invariantCulture());break;case"stopIfTrue":e=$$t.$g2.e(o.d);break;case"aboveAverage":f=$$t.$g2.e(o.d);break;case"percent":g=$$t.$g2.e(o.d);break;case"bottom":h=$$t.$g2.e(o.d);break;case"operator":i=$m($$t.$s.$type,$$t.$i4.b($$t.$s.$type,o.d,null));break;case"text":j=o.d;break;case"timePeriod":k=$m($$t.$ap.$type,$$t.$i4.b($$t.$ap.$type,o.d,null));break;case"rank":l=$m($$0.$be.$type,$.ig.util.parseUInt32_1(o.d,$$0.$cg.invariantCulture()));break;case"stdDev":m=$m($$0.$aw.$type,$ai(o.d,$$0.$cg.invariantCulture()));break;case"equalAverage":n=$$t.$g2.e(o.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n}},yt:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){a.ad().p($$t.$ay.ee,null);var o;if($l(b,null)){o=$$t.$i4.f($$t.$p.$type,b.value());a.ad().h("type",o)}if($l(c,null)){o=c.value().toString();a.ad().h("dxfId",o)}if(d!=0){o=d.toString();a.ad().h("priority",o)}if(e!=false){o=$$t.$g2.g(e);a.ad().h("stopIfTrue",o)}if(f!=true){o=$$t.$g2.g(f);a.ad().h("aboveAverage",o)}if(g!=false){o=$$t.$g2.g(g);a.ad().h("percent",o)}if(h!=false){o=$$t.$g2.g(h);a.ad().h("bottom",o)}if($l(i,null)){o=$$t.$i4.f($$t.$s.$type,i.value());a.ad().h("operator",o)}o=j;a.ad().h("text",o);if($l(k,null)){o=$$t.$i4.f($$t.$ap.$type,k.value());a.ad().h("timePeriod",o)}if($l(l,null)){o=l.value().toString();a.ad().h("rank",o)}if($l(m,null)){o=m.value().toString();a.ad().h("stdDev",o)}if(n!=false){o=$$t.$g2.g(n);a.ad().h("equalAverage",o)}},tl:function(a,b,c,d){b=0;c=null;d=true;var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case"type":b=$$t.$i4.b($$t.$q.$type,e.d,b);break;case"val":c=e.d;break;case"gte":d=$$t.$g2.e(e.d);break;default:break}}return{p1:b,p2:c,p3:d}},yu:function(a,b,c,d){a.ad().p($$t.$ay.ef,null);var e;if(b!=0){e=$$t.$i4.f($$t.$q.$type,b);a.ad().h("type",e)}e=c;a.ad().h("val",e);if(d!=true){e=$$t.$g2.g(d);a.ad().h("gte",e)}},tm:function(a,b,c){var d=$$t.$ay.t4(a,$$t.$ay.eo,b,c);b=d.p2;c=d.p3;return{p1:b,p2:c}},yv:function(a,b,c){$$t.$ay.zd(a,$$t.$ay.eo,b,c)},tn:function(a,b,c,d,e,f,g,h,i,j,k){b=0;c=0;d=$m(Number,null);e=0;f=false;g=false;h=false;i=false;j=0;k=false;var m=a.ab().u.getEnumerator();while(m.moveNext()){var l=m.current();switch(l.a.e(a.d())){case"min":b=$.ig.util.parseUInt32_1(l.d,$$0.$cg.invariantCulture());break;case"max":c=$.ig.util.parseUInt32_1(l.d,$$0.$cg.invariantCulture());break;case"width":d=$m(Number,$an(l.d,$$0.$cg.invariantCulture()));break;case"style":e=$.ig.util.parseUInt32_1(l.d,$$0.$cg.invariantCulture());break;case"hidden":f=$$t.$g2.e(l.d);break;case"bestFit":g=$$t.$g2.e(l.d);break;case"customWidth":h=$$t.$g2.e(l.d);break;case"phonetic":i=$$t.$g2.e(l.d);break;case"outlineLevel":j=$ap(l.d,$$0.$cg.invariantCulture());break;case"collapsed":k=$$t.$g2.e(l.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k}},yw:function(a,b,c,d,e,f,g,h,i,j,k){a.ad().p($$t.$ay.en,null);var l;l=b.toString();a.ad().h("min",l);l=c.toString();a.ad().h("max",l);if($l(d,null)){l=d.value().toString();a.ad().h("width",l)}if(e!=0){l=e.toString();a.ad().h("style",l)}if(f!=false){l=$$t.$g2.g(f);a.ad().h("hidden",l)}if(g!=false){l=$$t.$g2.g(g);a.ad().h("bestFit",l)}if(h!=false){l=$$t.$g2.g(h);a.ad().h("customWidth",l)}if(i!=false){l=$$t.$g2.g(i);a.ad().h("phonetic",l)}if(j!=0){l=j.toString();a.ad().h("outlineLevel",l)}if(k!=false){l=$$t.$g2.g(k);a.ad().h("collapsed",l)}},to:function(a,b,c,d,e,f){var g=$$t.$ay.t2(a,$$t.$ay.er,b,c,d,e,f);b=g.p2;c=g.p3;d=g.p4;e=g.p5;f=g.p6;return{p1:b,p2:c,p3:d,p4:e,p5:f}},yx:function(a,b,c,d,e,f){$$t.$ay.zb(a,$$t.$ay.er,b,c,d,e,f)},tp:function(a,b,c){b=$m($$0.$be.$type,null);c=true;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"dxfId":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(d.d,$$0.$cg.invariantCulture()));break;case"cellColor":c=$$t.$g2.e(d.d);break;default:break}}return{p1:b,p2:c}},yy:function(a,b,c){a.ad().p($$t.$ay.es,null);
var d;if($l(b,null)){d=b.value().toString();a.ad().h("dxfId",d)}d=$$t.$g2.g(c);a.ad().h("cellColor",d)},tq:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},yz:function(a){a.ad().p($$t.$ay.eu,null)},tr:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},y0:function(a){a.ad().p($$t.$ay.ev,null)},ts:function(a,b,c,d,e){b=null;c=0;d=$m($$t.$aa.$type,null);e=$m($$0.$be.$type,null);var g=a.ab().u.getEnumerator();while(g.moveNext()){var f=g.current();switch(f.a.e(a.d())){case"ref":b=f.d;break;case"authorId":c=$.ig.util.parseUInt32_1(f.d,$$0.$cg.invariantCulture());break;case"guid":d=$m($$t.$aa.$type,$$t.$aa.c(f.d));break;case"shapeId":e=$m($$0.$be.$type,$.ig.util.parseUInt32_1(f.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b,p2:c,p3:d,p4:e}},y1:function(a,b,c,d,e){a.ad().p($$t.$ay.ex,null);var f;f=b;a.ad().h("ref",f);f=c.toString();a.ad().h("authorId",f);if($l(d,null)){f=d.value().toString();a.ad().h("guid",f)}if($l(e,null)){f=e.value().toString();a.ad().h("shapeId",f)}},tt:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},y2:function(a){a.ad().p($$t.$ay.ez,null)},tu:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},y3:function(a){a.ad().p($$t.$ay.e0,null)},tv:function(a,b){var c=$$t.$ay.t0(a,$$t.$ay.e3,b);b=c.p2;return{p1:b}},y4:function(a,b){$$t.$ay.y9(a,$$t.$ay.e3,b)},tw:function(a,b,c){b=null;c=false;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"sqref":b=$$t.$i4.e(String,d.d,function(f){return f});break;case"pivot":c=$$t.$g2.e(d.d);break;default:break}}return{p1:b,p2:c}},y5:function(a,b,c){a.ad().p($$t.$ay.e4,null);var d;if(b!=null){d=$.ig.util.stringJoin1(String," ",b);a.ad().h("sqref",d)}if(c!=false){d=$$t.$g2.g(c);a.ad().h("pivot",d)}},tx:function(a,b,c,d){b=0;c=null;d=null;var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case"shapeId":b=$.ig.util.parseUInt32_1(e.d,$$0.$cg.invariantCulture());break;case $$t.$i0.ar:c=e.d;break;case"name":d=e.d;break;default:break}}return{p1:b,p2:c,p3:d}},y6:function(a,b,c,d){a.ad().p($$t.$ay.e7,null);var e;e=b.toString();a.ad().h("shapeId",e);e=c;a.ad().h($$t.$i0.ar,e);e=d;a.ad().h("name",e)},ty:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){b=true;c=true;d=true;e=false;f=false;g=false;h=true;i=true;j=true;k=null;l=null;m=null;n=null;o="pict";p=null;var r=a.ab().u.getEnumerator();while(r.moveNext()){var q=r.current();switch(q.a.e(a.d())){case"locked":b=$$t.$g2.e(q.d);break;case"defaultSize":c=$$t.$g2.e(q.d);break;case"print":d=$$t.$g2.e(q.d);break;case"disabled":e=$$t.$g2.e(q.d);break;case"recalcAlways":f=$$t.$g2.e(q.d);break;case"uiObject":g=$$t.$g2.e(q.d);break;case"autoFill":h=$$t.$g2.e(q.d);break;case"autoLine":i=$$t.$g2.e(q.d);break;case"autoPict":j=$$t.$g2.e(q.d);break;case"macro":k=q.d;break;case"altText":l=q.d;break;case"linkedCell":m=q.d;break;case"listFillRange":n=q.d;break;case"cf":o=q.d;break;case $$t.$i0.ar:p=q.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n,p14:o,p15:p}},y7:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){a.ad().p($$t.$ay.e8,null);var q;if(b!=true){q=$$t.$g2.g(b);a.ad().h("locked",q)}if(c!=true){q=$$t.$g2.g(c);a.ad().h("defaultSize",q)}if(d!=true){q=$$t.$g2.g(d);a.ad().h("print",q)}if(e!=false){q=$$t.$g2.g(e);a.ad().h("disabled",q)}if(f!=false){q=$$t.$g2.g(f);a.ad().h("recalcAlways",q)}if(g!=false){q=$$t.$g2.g(g);a.ad().h("uiObject",q)}if(h!=true){q=$$t.$g2.g(h);a.ad().h("autoFill",q)}if(i!=true){q=$$t.$g2.g(i);a.ad().h("autoLine",q)}if(j!=true){q=$$t.$g2.g(j);a.ad().h("autoPict",q)}q=k;$$t.$ir.da(a,q);q=l;a.ad().h("altText",q);q=m;a.ad().h("linkedCell",q);q=n;a.ad().h("listFillRange",q);q=o;a.ad().h("cf",q);q=p;a.ad().h($$t.$i0.ar,q)},tz:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},y8:function(a){a.ad().p($$t.$ay.e9,null)},t6:function(a,b,c){c=2;b=null;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"operator":c=$$t.$i4.b($$v.$cm.$type,d.d,c);break;case"val":b=d.d;break;default:break}}return{p1:b,p2:c}},zf:function(a,b,c){a.ad().p($$t.$ay.fd,null);var d;if(c!=2){d=$$t.$i4.f($$v.$cm.$type,c);a.ad().h("operator",d)}d=b;a.ad().h("val",d)},t7:function(a,b){b=false;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"and":b=$$t.$g2.e(c.d);break;default:break}}return{p1:b}},zg:function(a,b){a.ad().p($$t.$ay.fe,null);var c;if(b!=false){c=$$t.$g2.g(b);a.ad().h("and",c)}},t8:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){b=new $$t.aa;c=100;d=64;e=false;f=false;g=true;h=true;i=true;j=true;k=false;l=false;m=false;n=false;o=false;p=false;q=0;r=false;s=0;t=true;u=null;var w=a.ab().u.getEnumerator();while(w.moveNext()){var v=w.current();switch(v.a.e(a.d())){case"guid":b=$$t.$aa.c(v.d);break;case"scale":c=$.ig.util.parseUInt32_1(v.d,$$0.$cg.invariantCulture());break;case"colorId":d=$.ig.util.parseUInt32_1(v.d,$$0.$cg.invariantCulture());break;case"showPageBreaks":e=$$t.$g2.e(v.d);break;case"showFormulas":f=$$t.$g2.e(v.d);break;case"showGridLines":g=$$t.$g2.e(v.d);break;case"showRowCol":h=$$t.$g2.e(v.d);break;case"outlineSymbols":i=$$t.$g2.e(v.d);break;case"zeroValues":j=$$t.$g2.e(v.d);break;case"fitToPage":k=$$t.$g2.e(v.d);break;case"printArea":l=$$t.$g2.e(v.d);break;case"filter":m=$$t.$g2.e(v.d);break;case"showAutoFilter":n=$$t.$g2.e(v.d);break;case"hiddenRows":o=$$t.$g2.e(v.d);break;case"hiddenColumns":p=$$t.$g2.e(v.d);break;case"state":q=$$t.$i4.b($$t.$al.$type,v.d,q);break;case"filterUnique":r=$$t.$g2.e(v.d);break;case"view":s=$$t.$i4.b($$t.$am.$type,v.d,s);break;case"showRuler":t=$$t.$g2.e(v.d);break;case"topLeftCell":u=v.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n,p14:o,p15:p,p16:q,p17:r,p18:s,p19:t,p20:u}},zh:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){a.ad().p($$t.$ay.fj,null);var v;v=b.toString();a.ad().h("guid",v);if(c!=100){v=c.toString();a.ad().h("scale",v)}if(d!=64){v=d.toString();a.ad().h("colorId",v)}if(e!=false){v=$$t.$g2.g(e);a.ad().h("showPageBreaks",v)}if(f!=false){v=$$t.$g2.g(f);a.ad().h("showFormulas",v)}if(g!=true){v=$$t.$g2.g(g);a.ad().h("showGridLines",v)}if(h!=true){v=$$t.$g2.g(h);a.ad().h("showRowCol",v)}if(i!=true){v=$$t.$g2.g(i);a.ad().h("outlineSymbols",v)}if(j!=true){v=$$t.$g2.g(j);a.ad().h("zeroValues",v)}if(k!=false){v=$$t.$g2.g(k);a.ad().h("fitToPage",v)}if(l!=false){v=$$t.$g2.g(l);a.ad().h("printArea",v)}if(m!=false){v=$$t.$g2.g(m);a.ad().h("filter",v)}if(n!=false){v=$$t.$g2.g(n);a.ad().h("showAutoFilter",v)}if(o!=false){v=$$t.$g2.g(o);a.ad().h("hiddenRows",v)}if(p!=false){v=$$t.$g2.g(p);a.ad().h("hiddenColumns",v)}if(q!=0){v=$$t.$i4.f($$t.$al.$type,q);a.ad().h("state",v)}if(r!=false){v=$$t.$g2.g(r);a.ad().h("filterUnique",v)}if(s!=0){v=$$t.$i4.f($$t.$am.$type,s);a.ad().h("view",v)}if(t!=true){v=$$t.$g2.g(t);a.ad().h("showRuler",v)}v=u;a.ad().h("topLeftCell",v)},t9:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},zi:function(a){a.ad().p($$t.$ay.fk,null)},ua:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){b=null;c=new $$t.aa;g=false;h=$m($$0.$be.$type,null);i=false;j=false;k=false;l=true;m=true;n=false;o=false;p=true;q=true;r=true;s=0;t=0;e=0;f=0;u=600;d=0;v=true;w=true;x=1;y=0;var aa=a.ab().u.getEnumerator();while(aa.moveNext()){var z=aa.current();switch(z.a.e(a.d())){case"name":b=z.d;break;case"guid":c=$$t.$aa.c(z.d);break;case"autoUpdate":g=$$t.$g2.e(z.d);break;case"mergeInterval":h=$m($$0.$be.$type,$.ig.util.parseUInt32_1(z.d,$$0.$cg.invariantCulture()));break;case"changesSavedWin":i=$$t.$g2.e(z.d);break;case"onlySync":j=$$t.$g2.e(z.d);break;case"personalView":k=$$t.$g2.e(z.d);break;case"includePrintSettings":l=$$t.$g2.e(z.d);break;case"includeHiddenRowCol":m=$$t.$g2.e(z.d);break;case"maximized":n=$$t.$g2.e(z.d);break;case"minimized":o=$$t.$g2.e(z.d);break;case"showHorizontalScroll":p=$$t.$g2.e(z.d);break;case"showVerticalScroll":q=$$t.$g2.e(z.d);break;case"showSheetTabs":r=$$t.$g2.e(z.d);break;case"xWindow":s=$ai(z.d,$$0.$cg.invariantCulture());break;case"yWindow":t=$ai(z.d,$$0.$cg.invariantCulture());break;case"windowWidth":e=$.ig.util.parseUInt32_1(z.d,$$0.$cg.invariantCulture());break;case"windowHeight":f=$.ig.util.parseUInt32_1(z.d,$$0.$cg.invariantCulture());break;case"tabRatio":u=$.ig.util.parseUInt32_1(z.d,$$0.$cg.invariantCulture());break;case"activeSheetId":d=$.ig.util.parseUInt32_1(z.d,$$0.$cg.invariantCulture());break;case"showFormulaBar":v=$$t.$g2.e(z.d);break;case"showStatusbar":w=$$t.$g2.e(z.d);break;case"showComments":x=$$t.$i4.b($$t.$r.$type,z.d,x);break;case"showObjects":y=$$t.$i4.b($$t.$ac.$type,z.d,y);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n,p14:o,p15:p,p16:q,p17:r,p18:s,p19:t,p20:u,p21:v,p22:w,p23:x,p24:y}},zj:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){a.ad().p($$t.$ay.fm,null);var z;z=b;a.ad().h("name",z);z=c.toString();a.ad().h("guid",z);if(g!=false){z=$$t.$g2.g(g);a.ad().h("autoUpdate",z)}if($l(h,null)){z=h.value().toString();a.ad().h("mergeInterval",z)}if(i!=false){z=$$t.$g2.g(i);a.ad().h("changesSavedWin",z)}if(j!=false){z=$$t.$g2.g(j);a.ad().h("onlySync",z)}if(k!=false){z=$$t.$g2.g(k);a.ad().h("personalView",z)}if(l!=true){z=$$t.$g2.g(l);a.ad().h("includePrintSettings",z)}if(m!=true){z=$$t.$g2.g(m);a.ad().h("includeHiddenRowCol",z)}if(n!=false){z=$$t.$g2.g(n);a.ad().h("maximized",z)}if(o!=false){z=$$t.$g2.g(o);a.ad().h("minimized",z)}if(p!=true){z=$$t.$g2.g(p);a.ad().h("showHorizontalScroll",z)}if(q!=true){z=$$t.$g2.g(q);a.ad().h("showVerticalScroll",z)}if(r!=true){z=$$t.$g2.g(r);a.ad().h("showSheetTabs",z)}if(s!=0){z=s.toString();a.ad().h("xWindow",z)}if(t!=0){z=t.toString();a.ad().h("yWindow",z)}z=e.toString();a.ad().h("windowWidth",z);z=f.toString();a.ad().h("windowHeight",z);if(u!=600){z=u.toString();a.ad().h("tabRatio",z)}z=d.toString();a.ad().h("activeSheetId",z);if(v!=true){z=$$t.$g2.g(v);a.ad().h("showFormulaBar",z)}if(w!=true){z=$$t.$g2.g(w);a.ad().h("showStatusbar",z)}if(x!=1){z=$$t.$i4.f($$t.$r.$type,x);a.ad().h("showComments",z)}if(y!=0){z=$$t.$i4.f($$t.$ac.$type,y);a.ad().h("showObjects",z)}},ub:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},zk:function(a){a.ad().p($$t.$ay.fn,null)},uc:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o;var p=$$t.$ay.ud(a,o,c,d,e,f,g,h,i,j,k,l,m,n);o=p.p1;c=p.p2;d=p.p3;e=p.p4;f=p.p5;g=p.p6;h=p.p7;i=p.p8;j=p.p9;k=p.p10;l=p.p11;m=p.p12;n=p.p13;b=$$t.$i4.e(String,o,function(q){return q});return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n}},zl:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){$$t.$ay.zm(a,b==null?null:$.ig.util.stringJoin1(String," ",b),c,d,e,f,g,h,i,j,k,l,m,n)},ud:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b=null;c=0;d=0;e=0;f=0;g=false;h=false;i=false;j=false;k=null;l=null;m=null;n=null;var p=a.ab().u.getEnumerator();while(p.moveNext()){var o=p.current();switch(o.a.e(a.d())){case"sqref":b=o.d;break;case"type":c=$$t.$i4.b($$t.$w.$type,o.d,c);break;case"errorStyle":d=$$t.$i4.b($$t.$t.$type,o.d,d);break;case"imeMode":e=$$t.$i4.b($$t.$u.$type,o.d,e);break;case"operator":f=$$t.$i4.b($$t.$v.$type,o.d,f);break;case"allowBlank":g=$$t.$g2.e(o.d);break;case"showDropDown":h=$$t.$g2.e(o.d);break;case"showInputMessage":i=$$t.$g2.e(o.d);break;case"showErrorMessage":j=$$t.$g2.e(o.d);break;case"errorTitle":k=o.d;break;case"error":l=o.d;break;case"promptTitle":m=o.d;break;case"prompt":n=o.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n}},zm:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){a.ad().p($$t.$ay.fq,null);var o;o=b;a.ad().h("sqref",o);if(c!=0){o=$$t.$i4.f($$t.$w.$type,c);a.ad().h("type",o)}if(d!=0){o=$$t.$i4.f($$t.$t.$type,d);a.ad().h("errorStyle",o)}if(e!=0){o=$$t.$i4.f($$t.$u.$type,e);a.ad().h("imeMode",o)}if(f!=0){o=$$t.$i4.f($$t.$v.$type,f);a.ad().h("operator",o)}if(g!=false){o=$$t.$g2.g(g);a.ad().h("allowBlank",o)}if(h!=false){o=$$t.$g2.g(h);a.ad().h("showDropDown",o)}if(i!=false){o=$$t.$g2.g(i);a.ad().h("showInputMessage",o)}if(j!=false){o=$$t.$g2.g(j);a.ad().h("showErrorMessage",o)}o=k;a.ad().h("errorTitle",o);o=l;a.ad().h("error",o);o=m;a.ad().h("promptTitle",o);o=n;a.ad().h("prompt",o)},ue:function(a,b,c,d,e){b=false;c=$m($$0.$be.$type,null);d=$m($$0.$be.$type,null);e=$m($$0.$be.$type,null);var g=a.ab().u.getEnumerator();while(g.moveNext()){var f=g.current();switch(f.a.e(a.d())){case"disablePrompts":b=$$t.$g2.e(f.d);break;case"xWindow":c=$m($$0.$be.$type,$.ig.util.parseUInt32_1(f.d,$$0.$cg.invariantCulture()));break;case"yWindow":d=$m($$0.$be.$type,$.ig.util.parseUInt32_1(f.d,$$0.$cg.invariantCulture()));break;case"count":e=$m($$0.$be.$type,$.ig.util.parseUInt32_1(f.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b,p2:c,p3:d,p4:e}},zn:function(a,b,c,d,e){a.ad().p($$t.$ay.fr,null);var f;if(b!=false){f=$$t.$g2.g(b);a.ad().h("disablePrompts",f)}if($l(c,null)){f=c.value().toString();a.ad().h("xWindow",f)}if($l(d,null)){f=d.value().toString();a.ad().h("yWindow",f)}if($l(e,null)){f=e.value().toString();a.ad().h("count",f)}},uf:function(a,b,c,d,e,f,g,h){c=0;d=$m($$0.$bd.$type,null);e=$m($$0.$bd.$type,null);f=$m($$0.$bd.$type,null);g=$m($$0.$bd.$type,null);h=$m($$0.$bd.$type,null);b=0;var j=a.ab().u.getEnumerator();while(j.moveNext()){var i=j.current();switch(i.a.e(a.d())){case"year":c=$.ig.util.parseUInt16_1(i.d,$$0.$cg.invariantCulture());break;case"month":d=$m($$0.$bd.$type,$.ig.util.parseUInt16_1(i.d,$$0.$cg.invariantCulture()));break;case"day":e=$m($$0.$bd.$type,$.ig.util.parseUInt16_1(i.d,$$0.$cg.invariantCulture()));break;case"hour":f=$m($$0.$bd.$type,$.ig.util.parseUInt16_1(i.d,$$0.$cg.invariantCulture()));break;case"minute":g=$m($$0.$bd.$type,$.ig.util.parseUInt16_1(i.d,$$0.$cg.invariantCulture()));break;case"second":h=$m($$0.$bd.$type,$.ig.util.parseUInt16_1(i.d,$$0.$cg.invariantCulture()));break;case"dateTimeGrouping":b=$$t.$i4.b($$v.$cj.$type,i.d,b);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h}},zo:function(a,b,c,d,e,f,g,h){a.ad().p($$t.$ay.fu,null);var i;i=c.toString();a.ad().h("year",i);if($l(d,null)){i=d.value().toString();a.ad().h("month",i)}if($l(e,null)){i=e.value().toString();a.ad().h("day",i)}if($l(f,null)){i=f.value().toString();a.ad().h("hour",i)}if($l(g,null)){i=g.value().toString();a.ad().h("minute",i)}if($l(h,null)){i=h.value().toString();a.ad().h("second",i)}i=$$t.$i4.f($$v.$cj.$type,b);a.ad().h("dateTimeGrouping",i)},uh:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){c=null;d=null;e=null;f=null;g=null;h=null;i=$m($$0.$be.$type,null);j=false;k=false;l=false;m=false;n=$m($$0.$be.$type,null);o=null;p=false;q=false;var s=a.ab().u.getEnumerator();while(s.moveNext()){var r=s.current();switch(r.a.e(a.d())){case"name":c=r.d;break;case"comment":d=r.d;break;case"customMenu":e=r.d;break;case"description":f=r.d;break;case"help":g=r.d;break;case"statusBar":h=r.d;break;case"localSheetId":i=$m($$0.$be.$type,$.ig.util.parseUInt32_1(r.d,$$0.$cg.invariantCulture()));break;case"hidden":j=$$t.$g2.e(r.d);break;case"function":k=$$t.$g2.e(r.d);break;case"vbProcedure":l=$$t.$g2.e(r.d);break;case"xlm":m=$$t.$g2.e(r.d);break;case"functionGroupId":n=$m($$0.$be.$type,$.ig.util.parseUInt32_1(r.d,$$0.$cg.invariantCulture()));break;case"shortcutKey":o=r.d;break;case"publishToServer":p=$$t.$g2.e(r.d);break;case"workbookParameter":q=$$t.$g2.e(r.d);break;default:break}}b=$$t.$ay.rd(a.ab().ad,true);return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n,p14:o,p15:p,p16:q}},zq:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){a.ad().p($$t.$ay.f4,null);var r;r=c;a.ad().h("name",r);if(d!=null){r=d;a.ad().h("comment",r)}if(e!=null){r=e;a.ad().h("customMenu",r)}if(f!=null){r=f;a.ad().h("description",r)}if(g!=null){r=g;a.ad().h("help",r)}if(h!=null){r=h;a.ad().h("statusBar",r)}if($l(i,null)){r=i.value().toString();a.ad().h("localSheetId",r)}if(j!=false){r=$$t.$g2.g(j);a.ad().h("hidden",r)}if(k!=false){r=$$t.$g2.g(k);a.ad().h("function",r)}if(l!=false){r=$$t.$g2.g(l);a.ad().h("vbProcedure",r)}if(m!=false){r=$$t.$g2.g(m);a.ad().h("xlm",r)}if($l(n,null)){r=n.value().toString();a.ad().h("functionGroupId",r)}if(o!=null){r=o;a.ad().h("shortcutKey",r)}if(p!=false){r=$$t.$g2.g(p);a.ad().h("publishToServer",r)}if(q!=false){r=$$t.$g2.g(q);a.ad().h("workbookParameter",r)}if(b!=null){a.ad().u($$t.$ay.g4(b))}},ug:function(a,b,c,d){b=null;c=null;d=$m($$0.$be.$type,null);var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case"name":b=e.d;break;case"refersTo":c=e.d;break;case"sheetId":d=$m($$0.$be.$type,$.ig.util.parseUInt32_1(e.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b,p2:c,p3:d}},zp:function(a,b,c,d){a.ad().p($$t.$ay.f4,null);var e;e=b;a.ad().h("name",e);e=c;a.ad().h("refersTo",e);if($l(d,null)){e=d.value().toString();a.ad().h("sheetId",e)}},ui:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},zr:function(a){a.ad().p($$t.$ay.f5,null)},uj:function(a,b){var c=$$t.$ay.t1(a,$$t.$ay.ge,b);b=c.p2;return{p1:b}},zs:function(a,b){$$t.$ay.za(a,$$t.$ay.ge,b)},uk:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"ref":b=c.d;break;default:break}}return{p1:b}},zt:function(a,b){a.ad().p($$t.$ay.gj,null);var c;c=b;a.ad().h("ref",c)},ul:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case $$t.$i0.ar:b=c.d;break;default:break}}return{p1:b}},zu:function(a,b){a.ad().p($$t.$ay.gp,null);var c;c=b;a.ad().h($$t.$i0.ar,c)},um:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){b=null;c=$m($$0.$be.$type,null);d=$m($$0.$be.$type,null);e=$m($$0.$be.$type,null);f=$m($$0.$be.$type,null);g=$m($$0.$be.$type,null);h=$m($$0.$be.$type,null);i=$m($$0.$be.$type,null);j=$m($$0.$be.$type,null);k=$m($$0.$be.$type,null);l=$m($$0.$be.$type,null);m=$m($$0.$be.$type,null);n=$m($$0.$be.$type,null);o=$m($$0.$be.$type,null);p=$m($$0.$be.$type,null);q=$m($$0.$be.$type,null);r=$m($$0.$be.$type,null);s=$m($$0.$be.$type,null);t=$m($$0.$be.$type,null);var v=a.ab().u.getEnumerator();while(v.moveNext()){var u=v.current();switch(u.a.e(a.d())){case $$t.$i0.ar:b=u.d;break;case"lho":c=$m($$0.$be.$type,$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture()));break;case"lhe":d=$m($$0.$be.$type,$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture()));break;case"lhf":e=$m($$0.$be.$type,$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture()));break;case"cho":f=$m($$0.$be.$type,$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture()));break;case"che":g=$m($$0.$be.$type,$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture()));break;case"chf":h=$m($$0.$be.$type,$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture()));break;case"rho":i=$m($$0.$be.$type,$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture()));break;case"rhe":j=$m($$0.$be.$type,$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture()));break;case"rhf":k=$m($$0.$be.$type,$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture()));break;case"lfo":l=$m($$0.$be.$type,$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture()));break;case"lfe":m=$m($$0.$be.$type,$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture()));break;case"lff":n=$m($$0.$be.$type,$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture()));break;case"cfo":o=$m($$0.$be.$type,$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture()));break;case"cfe":p=$m($$0.$be.$type,$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture()));break;case"cff":q=$m($$0.$be.$type,$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture()));break;case"rfo":r=$m($$0.$be.$type,$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture()));break;case"rfe":s=$m($$0.$be.$type,$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture()));break;case"rff":t=$m($$0.$be.$type,$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n,p14:o,p15:p,p16:q,p17:r,p18:s,p19:t}},zv:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){a.ad().p($$t.$ay.gq,null);var u;u=b;a.ad().h($$t.$i0.ar,u);if($l(c,null)){u=c.value().toString();a.ad().h("lho",u)}if($l(d,null)){u=d.value().toString();a.ad().h("lhe",u)}if($l(e,null)){u=e.value().toString();a.ad().h("lhf",u)}if($l(f,null)){u=f.value().toString();a.ad().h("cho",u)}if($l(g,null)){u=g.value().toString();a.ad().h("che",u)}if($l(h,null)){u=h.value().toString();a.ad().h("chf",u)}if($l(i,null)){u=i.value().toString();a.ad().h("rho",u)}if($l(j,null)){u=j.value().toString();a.ad().h("rhe",u)}if($l(k,null)){u=k.value().toString();a.ad().h("rhf",u)}if($l(l,null)){u=l.value().toString();a.ad().h("lfo",u)}if($l(m,null)){u=m.value().toString();a.ad().h("lfe",u)}if($l(n,null)){u=n.value().toString();a.ad().h("lff",u)}if($l(o,null)){u=o.value().toString();a.ad().h("cfo",u)}if($l(p,null)){u=p.value().toString();a.ad().h("cfe",u)}if($l(q,null)){u=q.value().toString();a.ad().h("cff",u)}if($l(r,null)){u=r.value().toString();a.ad().h("rfo",u)}if($l(s,null)){u=s.value().toString();a.ad().h("rfe",u)}if($l(t,null)){u=t.value().toString();a.ad().h("rff",u)}},un:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},zw:function(a){a.ad().p($$t.$ay.gt,null)},uo:function(a,b){b=$m($$0.$be.$type,null);var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"count":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(c.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b}},zx:function(a,b){a.ad().p($$t.$ay.gv,null);var c;if($l(b,null)){c=b.value().toString();a.ad().h("count",c)}},up:function(a,b,c,d){b=0;c=$m(Number,null);d=$m(Number,null);var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case"type":b=$$t.$i4.b($$v.$ck.$type,e.d,b);break;case"val":c=$m(Number,$an(e.d,$$0.$cg.invariantCulture()));break;case"maxVal":d=$m(Number,$an(e.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b,p2:c,p3:d}},zy:function(a,b,c,d){a.ad().p($$t.$ay.gw,null);var e;e=$$t.$i4.f($$v.$ck.$type,b);a.ad().h("type",e);if($l(c,null)){e=c.value().toString();a.ad().h("val",e)}if($l(d,null)){e=d.value().toString();a.ad().h("maxVal",e)}},uq:function(a,b,c,d,e){b=0;c=$m(Number,null);d=$m($$0.$s.$type,null);e=$m($$0.$s.$type,null);var g=a.ab().u.getEnumerator();while(g.moveNext()){var f=g.current();switch(f.a.e(a.d())){case"type":b=$$t.$i4.b($$v.$ck.$type,f.d,b);break;case"val":c=$m(Number,$an(f.d,$$0.$cg.invariantCulture()));break;case"valIso":d=$m($$0.$s.$type,$$0.$s.parse(f.d,$$0.$cg.invariantCulture()));break;case"maxValIso":e=$m($$0.$s.$type,$$0.$s.parse(f.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b,p2:c,p3:d,p4:e}},zz:function(a,b,c,d,e){a.ad().p($$t.$ay.gw,null);var f;f=$$t.$i4.f($$v.$ck.$type,b);a.ad().h("type",f);if($l(c,null)){f=c.value().toString();a.ad().h("val",f)}if($l(d,null)){f=$.ig.Date.prototype.toString(d.value(),$$0.$cg.invariantCulture());a.ad().h("valIso",f)}if($l(e,null)){f=$.ig.Date.prototype.toString(e.value(),$$0.$cg.invariantCulture());a.ad().h("maxValIso",f)}},ur:function(a,b){var c=$$t.$ay.t1(a,$$t.$ay.gy,b);b=c.p2;return{p1:b}},z0:function(a,b){$$t.$ay.za(a,$$t.$ay.gy,b)},us:function(a,b){var c=$$t.$ay.u(a,$$t.$ay.g5,b,0);b=c.p2;return{p1:b}},z1:function(a,b){$$t.$ay.ai(a,$$t.$ay.g5,null,b,null,0)},ut:function(a,b){var c=$$t.$ay.u(a,$$t.$ay.g6,b,0);b=c.p2;return{p1:b}},z2:function(a,b){$$t.$ay.ai(a,$$t.$ay.g6,null,b,null,0)},uu:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"uri":b=c.d;break;default:break}}return{p1:b}},z3:function(a,b){a.ad().p($$t.$ay.g7,null);var c;c=b;a.ad().h("uri",c)},uv:function(a,b){var c=$$t.$ay.t0(a,$$t.$ay.g8,b);b=c.p2;return{p1:b}},z4:function(a,b){$$t.$ay.y9(a,$$t.$ay.g8,b)},uw:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case $$t.$i0.ar:b=c.d;break;default:break}}return{p1:b}},z5:function(a,b){a.ad().p($$t.$ay.g9,null);var c;c=b;a.ad().h($$t.$i0.ar,c)},ux:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},z6:function(a){a.ad().p($$t.$ay.ha,null);var b=a.d()._y();a.ad().l($$t.$ay.ao,false)},uy:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case $$t.$i0.ar:b=c.d;break;default:break}}return{p1:b}},z7:function(a,b){a.ad().p($$t.$ay.hb,null);var c;c=b;a.ad().h($$t.$i0.ar,c)},uz:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},z8:function(a){a.ad().p($$t.$ay.hc,null)},u0:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},z9:function(a){a.ad().p($$t.$ay.hd,null)},u1:function(a,b){b=0;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"val":b=$ai(c.d,$$0.$cg.invariantCulture());break;default:break}}return{p1:b}},aaa:function(a,b){a.ad().p($$t.$ay.hf,null);var c;c=b.toString();a.ad().h("val",c)},u2:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b=0;c=false;d=null;e=false;f=false;g=false;h=false;i=null;j=null;k=false;l=$m($$0.$be.$type,null);m=false;var o=false;var q=a.ab().u.getEnumerator();while(q.moveNext()){var p=q.current();switch(p.a.e(a.d())){case"t":b=$$t.$i4.b($$t.$o.$type,p.d,b);break;case"aca":c=$$t.$g2.e(p.d);break;case"ref":d=p.d;break;case"dt2D":e=$$t.$g2.e(p.d);break;case"dtr":f=$$t.$g2.e(p.d);break;case"del1":g=$$t.$g2.e(p.d);break;case"del2":h=$$t.$g2.e(p.d);break;case"r1":i=p.d;break;case"r2":j=p.d;break;case"ca":k=$$t.$g2.e(p.d);break;case"si":l=$m($$0.$be.$type,$.ig.util.parseUInt32_1(p.d,$$0.$cg.invariantCulture()));break;case"bx":m=$$t.$g2.e(p.d);break;case $$t.$i3.ar:o=p.d=="preserve";break;default:break}}n=a.ab().ad;if(n!=null&&o==false){n=n.trim([])}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n}},aab:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){a.ad().p($$t.$ay.he,null);var o;if(c!=0){o=$$t.$i4.f($$t.$o.$type,c);a.ad().h("t",o)}if(d!=false){o=$$t.$g2.g(d);a.ad().h("aca",o)}o=e;a.ad().h("ref",o);if(f!=false){o=$$t.$g2.g(f);a.ad().h("dt2D",o)}if(g!=false){o=$$t.$g2.g(g);a.ad().h("dtr",o)}if(h!=false){o=$$t.$g2.g(h);a.ad().h("del1",o)}if(i!=false){o=$$t.$g2.g(i);a.ad().h("del2",o)}o=j;a.ad().h("r1",o);o=k;a.ad().h("r2",o);if(l!=false){o=$$t.$g2.g(l);a.ad().h("ca",o)}if($l(m,null)){o=m.value().toString();a.ad().h("si",o)}if(n!=false){o=$$t.$g2.g(n);a.ad().h("bx",o)}if(b!=null){if(String.isNullOrEmpty(b)==false){if(/\s/i.test(b.charAt(0))||/\s/i.test(b.charAt(b.length-1))){$$t.$i3.as(a.ad())}}a.ad().u(b)}},u3:function(a,b,c,d,e,f){var g=$$t.$ay.t2(a,$$t.$ay.hg,b,c,d,e,f);b=g.p2;c=g.p3;d=g.p4;e=g.p5;f=g.p6;return{p1:b,p2:c,p3:d,p4:e,p5:f}},aac:function(a,b,c,d,e,f){$$t.$ay.zb(a,$$t.$ay.hg,b,c,d,e,f)},u5:function(a,b,c,d){c=false;b=null;d=0;var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case"readOnlyRecommended":c=$$t.$g2.e(e.d);break;case"userName":b=e.d;break;case"reservationPassword":d=$$t.$id.d(e.d);break;default:break}}return{p1:b,p2:c,p3:d}},aae:function(a,b,c,d){a.ad().p($$t.$ay.hh,null);var e;if(c!=false){e=$$t.$g2.g(c);a.ad().h("readOnlyRecommended",e)}e=b;a.ad().h("userName",e);e=new $$t.id(1,d).toString();a.ad().h("reservationPassword",e)},u4:function(a,b,c,d,e,f,g){c=false;b=null;d=null;e=null;f=null;g=$m($$0.$be.$type,null);var i=a.ab().u.getEnumerator();while(i.moveNext()){var h=i.current();switch(h.a.e(a.d())){case"readOnlyRecommended":c=$$t.$g2.e(h.d);break;case"userName":b=h.d;break;case"algorithmName":d=h.d;break;case"hashValue":e=$$6.$g.a(h.d);break;case"saltValue":f=$$6.$g.a(h.d);break;case"spinCount":g=$m($$0.$be.$type,$.ig.util.parseUInt32_1(h.d,null));break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g}},aad:function(a,b,c,d,e,f,g){a.ad().p($$t.$ay.hh,null);var h;if(c!=false){h=$$t.$g2.g(c);a.ad().h("readOnlyRecommended",h)}h=b;a.ad().h("userName",h);h=d;a.ad().h("algorithmName",h);if(e!=null){h=$$6.$g.y(e);a.ad().h("hashValue",h)}if(f!=null){h=$$6.$g.y(f);a.ad().h("saltValue",h)}if($l(g,null)){h=g.value().toString();a.ad().h("spinCount",h)}},u6:function(a,b,c,d,e,f){b=null;c=null;d=null;e=null;f=null;var h=a.ab().u.getEnumerator();while(h.moveNext()){var g=h.current();switch(g.a.e(a.d())){case"appName":b=g.d;break;case"lastEdited":c=g.d;break;case"lowestEdited":d=g.d;break;case"rupBuild":e=g.d;break;case"codeName":f=g.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f}},aaf:function(a,b,c,d,e,f){a.ad().p($$t.$ay.hi,null);var g;g=b;a.ad().h("appName",g);g=c;a.ad().h("lastEdited",g);g=d;a.ad().h("lowestEdited",g);g=e;a.ad().h("rupBuild",g);g=f;a.ad().h("codeName",g)},u7:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},aag:function(a){a.ad().p($$t.$ay.hj,null)},u8:function(a,b){b=$m($$0.$be.$type,null);var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"count":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(c.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b}},aah:function(a,b){a.ad().p($$t.$ay.hl,null);var c;if($l(b,null)){c=b.value().toString();a.ad().h("count",c)}},u9:function(a,b,c,d){b=0;c=false;d=true;var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case"colId":b=$.ig.util.parseUInt32_1(e.d,$$0.$cg.invariantCulture());break;case"hiddenButton":c=$$t.$g2.e(e.d);break;case"showButton":d=$$t.$g2.e(e.d);break;default:break}}return{p1:b,p2:c,p3:d}},aai:function(a,b,c,d){a.ad().p($$t.$ay.ho,null);var e;e=b.toString();a.ad().h("colId",e);if(c!=false){e=$$t.$g2.g(c);a.ad().h("hiddenButton",e)}if(d!=true){e=$$t.$g2.g(d);a.ad().h("showButton",e)}},va:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"val":b=c.d;break;default:break}}return{p1:b}},aaj:function(a,b){a.ad().p($$t.$ay.hm,null);var c;c=b;a.ad().h("val",c)},vb:function(a,b,c){b=false;c=10;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"blank":b=$$t.$g2.e(d.d);break;case"calendarType":c=$$t.$i4.b($$t.$m.$type,d.d,c);break;default:break}}return{p1:b,p2:c}},aak:function(a,b,c){a.ad().p($$t.$ay.hr,null);var d;if(b!=false){d=$$t.$g2.g(b);a.ad().h("blank",d)}if(c!=10){d=$$t.$i4.f($$t.$m.$type,c);a.ad().h("calendarType",d)}},vc:function(a,b){var c=$$t.$ay.u(a,$$t.$ay.hu,b,0);b=c.p2;return{p1:b}},aal:function(a,b){$$t.$ay.ai(a,$$t.$ay.hu,null,b,null,0)},vd:function(a,b){var c=$$t.$ay.u(a,$$t.$ay.hv,b,0);b=c.p2;return{p1:b}},aam:function(a,b){$$t.$ay.ai(a,$$t.$ay.hv,null,b,null,0)},ve:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},aan:function(a){a.ad().p($$t.$ay.h1,null)},vf:function(a,b){b=$m($$0.$be.$type,null);var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"count":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(c.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b}},aao:function(a,b){a.ad().p($$t.$ay.h3,null);var c;if($l(b,null)){c=b.value().toString();a.ad().h("count",c)}},vi:function(a,b){var c=$$t.$ay.t3(a,$$t.$ay.ic,b);b=c.p2;return{p1:b}},aar:function(a,b){$$t.$ay.zc(a,$$t.$ay.ic,b)},vg:function(a,b){var c=$$t.$ay.t3(a,$$t.$ay.id,b);b=c.p2;return{p1:b}},aap:function(a,b){$$t.$ay.zc(a,$$t.$ay.id,b)},vh:function(a,b){var c=$$t.$ay.t3(a,$$t.$ay.ie,b);b=c.p2;return{p1:b}
},aaq:function(a,b){$$t.$ay.zc(a,$$t.$ay.ie,b)},vj:function(a,b,c,d,e,f,g){b=0;c=0;d=0;e=0;f=0;g=0;var i=a.ab().u.getEnumerator();while(i.moveNext()){var h=i.current();switch(h.a.e(a.d())){case"type":b=$$t.$i4.b($$t.$z.$type,h.d,b);break;case"degree":c=$an(h.d,$$0.$cg.invariantCulture());break;case"left":d=$an(h.d,$$0.$cg.invariantCulture());break;case"right":e=$an(h.d,$$0.$cg.invariantCulture());break;case"top":f=$an(h.d,$$0.$cg.invariantCulture());break;case"bottom":g=$an(h.d,$$0.$cg.invariantCulture());break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g}},aas:function(a,b,c,d,e,f,g){a.ad().p($$t.$ay.ik,null);var h;if(b!=0){h=$$t.$i4.f($$t.$z.$type,b);a.ad().h("type",h)}if(c!=0){h=c.toString();a.ad().h("degree",h)}if(d!=0){h=d.toString();a.ad().h("left",h)}if(e!=0){h=e.toString();a.ad().h("right",h)}if(f!=0){h=f.toString();a.ad().h("top",h)}if(g!=0){h=g.toString();a.ad().h("bottom",h)}},vk:function(a,b,c,d,e){b=false;c=false;d=true;e=true;var g=a.ab().u.getEnumerator();while(g.moveNext()){var f=g.current();switch(f.a.e(a.d())){case"differentOddEven":b=$$t.$g2.e(f.d);break;case"differentFirst":c=$$t.$g2.e(f.d);break;case"scaleWithDoc":d=$$t.$g2.e(f.d);break;case"alignWithMargins":e=$$t.$g2.e(f.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e}},aat:function(a,b,c,d,e){a.ad().p($$t.$ay.is,null);var f;if(b!=false){f=$$t.$g2.g(b);a.ad().h("differentOddEven",f)}if(c!=false){f=$$t.$g2.g(c);a.ad().h("differentFirst",f)}if(d!=true){f=$$t.$g2.g(d);a.ad().h("scaleWithDoc",f)}if(e!=true){f=$$t.$g2.g(e);a.ad().h("alignWithMargins",f)}},vl:function(a,b){var c=$$t.$ay.t1(a,$$t.$ay.i4,b);b=c.p2;return{p1:b}},aau:function(a,b){$$t.$ay.za(a,$$t.$ay.i4,b)},vm:function(a,b,c,d,e,f){b=null;c=null;d=null;e=null;f=null;var h=a.ab().u.getEnumerator();while(h.moveNext()){var g=h.current();switch(g.a.e(a.d())){case"ref":b=g.d;break;case $$t.$i0.ar:c=g.d;break;case"location":d=g.d;break;case"tooltip":e=g.d;break;case"display":f=g.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f}},aav:function(a,b,c,d,e,f){a.ad().p($$t.$ay.ja,null);var g;g=b;a.ad().h("ref",g);g=c;a.ad().h($$t.$i0.ar,g);g=d;a.ad().h("location",g);g=e;a.ad().h("tooltip",g);g=f;a.ad().h("display",g)},vn:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},aaw:function(a){a.ad().p($$t.$ay.jb,null)},vo:function(a,b,c){b=0;c=$m($$0.$be.$type,null);var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"iconSet":b=$$t.$i4.b($$v.$cl.$type,d.d,b);break;case"iconId":c=$m($$0.$be.$type,$.ig.util.parseUInt32_1(d.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b,p2:c}},aax:function(a,b,c){a.ad().p($$t.$ay.je,null);var d;d=$$t.$i4.f($$v.$cl.$type,b);a.ad().h("iconSet",d);if($l(c,null)){d=c.value().toString();a.ad().h("iconId",d)}},vp:function(a,b){var c=$$t.$ay.t0(a,$$t.$ay.jc,b);b=c.p2;return{p1:b}},aay:function(a,b){$$t.$ay.y9(a,$$t.$ay.jc,b)},vq:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},aaz:function(a){a.ad().p($$t.$ay.jo,null)},vr:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},aa0:function(a){a.ad().p($$t.$ay.b7,null)},vs:function(a,b){var c=$$t.$ay.t1(a,$$t.$ay.jz,b);b=c.p2;return{p1:b}},aa1:function(a,b){$$t.$ay.za(a,$$t.$ay.jz,b)},vt:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case $$t.$i0.ar:b=c.d;break;default:break}}return{p1:b}},aa2:function(a,b){a.ad().p($$t.$ay.j1,null);var c;c=b;a.ad().h($$t.$i0.ar,c)},vu:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case $$t.$i0.ar:b=c.d;break;default:break}}return{p1:b}},aa3:function(a,b){a.ad().p($$t.$ay.j2,null);var c;c=b;a.ad().h($$t.$i0.ar,c)},vv:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"ref":b=c.d;break;default:break}}return{p1:b}},aa4:function(a,b){a.ad().p($$t.$ay.kq,null);var c;c=b;a.ad().h("ref",c)},vw:function(a,b){b=$m($$0.$be.$type,null);var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"count":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(c.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b}},aa5:function(a,b){a.ad().p($$t.$ay.kr,null);var c;if($l(b,null)){c=b.value().toString();a.ad().h("count",c)}},vx:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"val":b=c.d;break;default:break}}return{p1:b}},aa6:function(a,b){a.ad().p($$t.$ay.ky,null);var c;c=b;a.ad().h("val",c)},vy:function(a,b,c){b=0;c=null;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"numFmtId":b=$.ig.util.parseUInt32_1(d.d,$$0.$cg.invariantCulture());break;case"formatCode":c=d.d;break;default:break}}return{p1:b,p2:c}},aa7:function(a,b,c){a.ad().p($$t.$ay.k2,null);var d;d=b.toString();a.ad().h("numFmtId",d);d=c;a.ad().h("formatCode",d)},vz:function(a,b){b=$m($$0.$be.$type,null);var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"count":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(c.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b}},aa8:function(a,b){a.ad().p($$t.$ay.k4,null);var c;if($l(b,null)){c=b.value().toString();a.ad().h("count",c)}},v0:function(a,b){var c=$$t.$ay.u(a,$$t.$ay.k6,b,0);b=c.p2;return{p1:b}},aa9:function(a,b){$$t.$ay.ai(a,$$t.$ay.k6,null,b,null,0)},v1:function(a,b){var c=$$t.$ay.u(a,$$t.$ay.k7,b,0);b=c.p2;return{p1:b}},aba:function(a,b){$$t.$ay.ai(a,$$t.$ay.k7,null,b,null,0)},v2:function(a,b,c,d,e){b=null;c=false;d=false;e=false;var g=a.ab().u.getEnumerator();while(g.moveNext()){var f=g.current();switch(f.a.e(a.d())){case"name":b=f.d;break;case"icon":c=$$t.$g2.e(f.d);break;case"advise":d=$$t.$g2.e(f.d);break;case"preferPic":e=$$t.$g2.e(f.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e}},abb:function(a,b,c,d,e){a.ad().p($$t.$ay.k8,null);var f;f=b;a.ad().h("name",f);if(c!=false){f=$$t.$g2.g(c);a.ad().h("icon",f)}if(d!=false){f=$$t.$g2.g(d);a.ad().h("advise",f)}if(e!=false){f=$$t.$g2.g(e);a.ad().h("preferPic",f)}},v3:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},abc:function(a){a.ad().p($$t.$ay.k9,null)},v4:function(a,b,c){b=null;c=null;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case $$t.$i0.ar:b=d.d;break;case"progId":c=d.d;break;default:break}}return{p1:b,p2:c}},abd:function(a,b,c){a.ad().p($$t.$ay.la,null);var d;d=b;a.ad().h($$t.$i0.ar,d);d=c;a.ad().h("progId",d)},v5:function(a,b){var c=$$t.$ay.t0(a,$$t.$ay.le,b);b=c.p2;return{p1:b}},abe:function(a,b){$$t.$ay.y9(a,$$t.$ay.le,b)},v6:function(a,b,c,d,e){b=false;c=true;d=true;e=true;var g=a.ab().u.getEnumerator();while(g.moveNext()){var f=g.current();switch(f.a.e(a.d())){case"applyStyles":b=$$t.$g2.e(f.d);break;case"summaryBelow":c=$$t.$g2.e(f.d);break;case"summaryRight":d=$$t.$g2.e(f.d);break;case"showOutlineSymbols":e=$$t.$g2.e(f.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e}},abf:function(a,b,c,d,e){a.ad().p($$t.$ay.lj,null);var f;if(b!=false){f=$$t.$g2.g(b);a.ad().h("applyStyles",f)}if(c!=true){f=$$t.$g2.g(c);a.ad().h("summaryBelow",f)}if(d!=true){f=$$t.$g2.g(d);a.ad().h("summaryRight",f)}if(e!=true){f=$$t.$g2.g(e);a.ad().h("showOutlineSymbols",f)}},v7:function(a,b,c,d,e,f,g){b=0;c=0;d=0;e=0;f=0;g=0;var i=a.ab().u.getEnumerator();while(i.moveNext()){var h=i.current();switch(h.a.e(a.d())){case"left":b=$an(h.d,$$0.$cg.invariantCulture());break;case"right":c=$an(h.d,$$0.$cg.invariantCulture());break;case"top":d=$an(h.d,$$0.$cg.invariantCulture());break;case"bottom":e=$an(h.d,$$0.$cg.invariantCulture());break;case"header":f=$an(h.d,$$0.$cg.invariantCulture());break;case"footer":g=$an(h.d,$$0.$cg.invariantCulture());break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g}},abg:function(a,b,c,d,e,f,g){a.ad().p($$t.$ay.ll,null);var h;h=b.toString();a.ad().h("left",h);h=c.toString();a.ad().h("right",h);h=d.toString();a.ad().h("top",h);h=e.toString();a.ad().h("bottom",h);h=f.toString();a.ad().h("header",h);h=g.toString();a.ad().h("footer",h)},v8:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){b=1;c=null;d=null;e=100;f=1;g=1;h=1;i=0;j=0;k=true;l=false;m=false;n=0;o=false;p=0;q=600;r=600;s=1;t=null;var v=a.ab().u.getEnumerator();while(v.moveNext()){var u=v.current();switch(u.a.e(a.d())){case"paperSize":b=$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture());break;case"paperHeight":c=u.d;break;case"paperWidth":d=u.d;break;case"scale":e=$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture());break;case"firstPageNumber":f=$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture());break;case"fitToWidth":g=$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture());break;case"fitToHeight":h=$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture());break;case"pageOrder":i=$$t.$i4.b($$t.$af.$type,u.d,i);break;case"orientation":j=$$t.$i4.b($$t.$ae.$type,u.d,j);break;case"usePrinterDefaults":k=$$t.$g2.e(u.d);break;case"blackAndWhite":l=$$t.$g2.e(u.d);break;case"draft":m=$$t.$g2.e(u.d);break;case"cellComments":n=$$t.$i4.b($$t.$n.$type,u.d,n);break;case"useFirstPageNumber":o=$$t.$g2.e(u.d);break;case"errors":p=$$t.$i4.b($$t.$aj.$type,u.d,p);break;case"horizontalDpi":q=$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture());break;case"verticalDpi":r=$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture());break;case"copies":s=$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture());break;case $$t.$i0.ar:t=u.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n,p14:o,p15:p,p16:q,p17:r,p18:s,p19:t}},abh:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){a.ad().p($$t.$ay.ln,null);var u;if(b!=1){u=b.toString();a.ad().h("paperSize",u)}if(c!=null){u=c;a.ad().h("paperHeight",u)}if(d!=null){u=d;a.ad().h("paperWidth",u)}if(e!=100){u=e.toString();a.ad().h("scale",u)}if(f!=1){u=f.toString();a.ad().h("firstPageNumber",u)}if(g!=1){u=g.toString();a.ad().h("fitToWidth",u)}if(h!=1){u=h.toString();a.ad().h("fitToHeight",u)}if(i!=0){u=$$t.$i4.f($$t.$af.$type,i);a.ad().h("pageOrder",u)}if(j!=0){u=$$t.$i4.f($$t.$ae.$type,j);a.ad().h("orientation",u)}if(k!=true){u=$$t.$g2.g(k);a.ad().h("usePrinterDefaults",u)}if(l!=false){u=$$t.$g2.g(l);a.ad().h("blackAndWhite",u)}if(m!=false){u=$$t.$g2.g(m);a.ad().h("draft",u)}if(n!=0){u=$$t.$i4.f($$t.$n.$type,n);a.ad().h("cellComments",u)}if(o!=false){u=$$t.$g2.g(o);a.ad().h("useFirstPageNumber",u)}if(p!=0){u=$$t.$i4.f($$t.$aj.$type,p);a.ad().h("errors",u)}if(q!=600){u=q.toString();a.ad().h("horizontalDpi",u)}if(r!=600){u=r.toString();a.ad().h("verticalDpi",u)}if(s!=1){u=s.toString();a.ad().h("copies",u)}if(t!=null){u=t;a.ad().h($$t.$i0.ar,u)}},v9:function(a,b,c){b=true;c=false;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"autoPageBreaks":b=$$t.$g2.e(d.d);break;case"fitToPage":c=$$t.$g2.e(d.d);break;default:break}}return{p1:b,p2:c}},abi:function(a,b,c){a.ad().p($$t.$ay.lo,null);var d;if(b!=true){d=$$t.$g2.g(b);a.ad().h("autoPageBreaks",d)}if(c!=false){d=$$t.$g2.g(c);a.ad().h("fitToPage",d)}},wa:function(a,b,c,d,e,f){b=0;c=0;d=null;e=3;f=0;var h=a.ab().u.getEnumerator();while(h.moveNext()){var g=h.current();switch(g.a.e(a.d())){case"xSplit":b=$an(g.d,$$0.$cg.invariantCulture());break;case"ySplit":c=$an(g.d,$$0.$cg.invariantCulture());break;case"topLeftCell":d=g.d;break;case"activePane":e=$$t.$i4.b($$t.$ag.$type,g.d,e);break;case"state":f=$$t.$i4.b($$t.$ah.$type,g.d,f);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f}},abj:function(a,b,c,d,e,f){a.ad().p($$t.$ay.lp,null);var g;if(b!=0){g=b.toString();a.ad().h("xSplit",g)}if(c!=0){g=c.toString();a.ad().h("ySplit",g)}g=d;a.ad().h("topLeftCell",g);if(e!=3){g=$$t.$i4.f($$t.$ag.$type,e);a.ad().h("activePane",g)}if(f!=0){g=$$t.$i4.f($$t.$ah.$type,f);a.ad().h("state",g)}},wb:function(a,b){b=$m($$t.$ai.$type,null);var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"patternType":b=$m($$t.$ai.$type,$$t.$i4.b($$t.$ai.$type,c.d,null));break;default:break}}return{p1:b}},abk:function(a,b){a.ad().p($$t.$ay.lv,null);var c;if($l(b,null)){c=$$t.$i4.f($$t.$ai.$type,b.value());a.ad().h("patternType",c)}},wc:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case $$t.$i0.ar:b=c.d;break;default:break}}return{p1:b}},abl:function(a,b){a.ad().p($$t.$ay.l1,null);var c;c=b;a.ad().h($$t.$i0.ar,c)},wd:function(a,b,c){b=0;c=null;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"cacheId":b=$.ig.util.parseUInt32_1(d.d,$$0.$cg.invariantCulture());break;case $$t.$i0.ar:c=d.d;break;default:break}}return{p1:b,p2:c}},abm:function(a,b,c){a.ad().p($$t.$ay.l4,null);var d;d=b.toString();a.ad().h("cacheId",d);d=c;a.ad().h($$t.$i0.ar,d)},we:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},abn:function(a){a.ad().p($$t.$ay.l5,null)},wf:function(a,b,c,d,e,f){b=false;c=false;d=false;e=false;f=true;var h=a.ab().u.getEnumerator();while(h.moveNext()){var g=h.current();switch(g.a.e(a.d())){case"horizontalCentered":b=$$t.$g2.e(g.d);break;case"verticalCentered":c=$$t.$g2.e(g.d);break;case"headings":d=$$t.$g2.e(g.d);break;case"gridLines":e=$$t.$g2.e(g.d);break;case"gridLinesSet":f=$$t.$g2.e(g.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f}},abo:function(a,b,c,d,e,f){a.ad().p($$t.$ay.mc,null);var g;if(b!=false){g=$$t.$g2.g(b);a.ad().h("horizontalCentered",g)}if(c!=false){g=$$t.$g2.g(c);a.ad().h("verticalCentered",g)}if(d!=false){g=$$t.$g2.g(d);a.ad().h("headings",g)}if(e!=false){g=$$t.$g2.g(e);a.ad().h("gridLines",g)}if(f!=true){g=$$t.$g2.g(f);a.ad().h("gridLinesSet",g)}},wg:function(a,b,c,d,e){b=null;c=null;d=null;e=$m($$t.$id.$type,null);var g=a.ab().u.getEnumerator();while(g.moveNext()){var f=g.current();switch(f.a.e(a.d())){case"password":e=$m($$t.$id.$type,$$t.$id.b(f.d));break;case"sqref":c=f.d;break;case"name":d=f.d;break;case"securityDescriptor":b=f.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e}},wh:function(a,b,c,d,e,f,g,h){b=null;c=null;d=null;e=null;f=null;g=null;h=$m($$0.$be.$type,null);var j=a.ab().u.getEnumerator();while(j.moveNext()){var i=j.current();switch(i.a.e(a.d())){case"algorithmName":e=i.d;break;case"hashValue":f=i.d;break;case"saltValue":g=i.d;break;case"spinCount":h=$m($$0.$be.$type,$.ig.util.parseUInt32_1(i.d,$$0.$cg.invariantCulture()));break;case"sqref":c=i.d;break;case"name":d=i.d;break;case"securityDescriptor":b=i.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h}},abp:function(a,b,c,d,e){a.ad().p($$t.$ay.mi,null);var f;if($l(e,null)){f=e.value().toString();a.ad().h("password",f)}f=c;a.ad().h("sqref",f);f=d;a.ad().h("name",f);if(!String.isNullOrEmpty(b)){f=b;a.ad().h("securityDescriptor",f)}},abq:function(a,b,c,d,e,f,g,h){a.ad().p($$t.$ay.mi,null);var i;if(!String.isNullOrEmpty(b)){i=b;a.ad().h("securityDescriptor",i)}i=c;a.ad().h("sqref",i);i=d;a.ad().h("name",i);if(!String.isNullOrEmpty(e)){i=e;a.ad().h("algorithmName",i)}if(!String.isNullOrEmpty(f)){i=f;a.ad().h("hashValue",i)}if(!String.isNullOrEmpty(g)){i=g;a.ad().h("saltValue",i)}if($l(h,null)){i=h.value().toString();a.ad().h("spinCount",i)}},wi:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},abr:function(a){a.ad().p($$t.$ay.mj,null)},wj:function(a,b,c){b=$m($$0.$aq.$type,null);c=$m($$0.$aq.$type,null);var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"locked":b=$m($$0.$aq.$type,$$t.$g2.e(d.d));break;case"hidden":c=$m($$0.$aq.$type,$$t.$g2.e(d.d));break;default:break}}return{p1:b,p2:c}},abs:function(a,b,c){a.ad().p($$t.$ay.mk,null);var d;if($l(b,null)){d=$$t.$g2.g(b.value());a.ad().h("locked",d)}if($l(c,null)){d=$$t.$g2.g(c.value());a.ad().h("hidden",d)}},wk:function(a){},abt:function(a){a.ad().p($$t.$ay.mr,null)},wl:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"val":b=c.d;break;default:break}}return{p1:b}},abu:function(a,b){a.ad().p($$t.$ay.ne,null);var c;c=b;a.ad().h("val",c)},wm:function(a,b){b=$m($$t.$ic.$type,null);var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"rgb":b=$m($$t.$ic.$type,$$t.$ic.d(c.d));break;default:break}}return{p1:b}},abv:function(a,b){a.ad().p($$t.$ay.ng,null);var c;if($l(b,null)){c=b.value().toString();a.ad().h("rgb",c)}},wn:function(a,b){var c=$$t.$ay.t1(a,$$t.$ay.nk,b);b=c.p2;return{p1:b}},abw:function(a,b){$$t.$ay.za(a,$$t.$ay.nk,b)},wo:function(a,b,c){var d=$$t.$ay.t4(a,$$t.$ay.no,b,c);b=d.p2;c=d.p3;return{p1:b,p2:c}},abx:function(a,b,c){$$t.$ay.zd(a,$$t.$ay.no,b,c)},wq:function(a,b){b=0;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"r":b=$.ig.util.parseUInt32_1(c.d,$$0.$cg.invariantCulture());break;default:break}}return{p1:b}},abz:function(a,b){a.ad().p($$t.$ay.nn,null);var c;c=b.toString();a.ad().h("r",c)},wp:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b=$m($$0.$be.$type,null);c=null;d=0;e=false;f=$m(Number,null);g=false;h=false;i=0;j=false;k=false;l=false;m=false;var p=a.ab().u.getEnumerator();while(p.moveNext()){var o=p.current();switch(o.a.e(a.d())){case"r":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(o.d,$$0.$cg.invariantCulture()));break;case"spans":if(n==false){c=$$t.$i4.e(String,o.d,function(q){return q})}break;case"s":d=$.ig.util.parseUInt32_1(o.d,$$0.$cg.invariantCulture());break;case"customFormat":e=$$t.$g2.e(o.d);break;case"ht":f=$m(Number,$an(o.d,$$0.$cg.invariantCulture()));break;case"hidden":g=$$t.$g2.e(o.d);break;case"customHeight":h=$$t.$g2.e(o.d);break;case"outlineLevel":i=$ap(o.d,$$0.$cg.invariantCulture());break;case"collapsed":j=$$t.$g2.e(o.d);break;case"thickTop":k=$$t.$g2.e(o.d);break;case"thickBot":l=$$t.$g2.e(o.d);break;case"ph":m=$$t.$g2.e(o.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m}},aby:function(a,b,c,d,e,f,g,h,i,j,k,l,m){a.ad().p($$t.$ay.nn,null);var n;if($l(b,null)){n=b.value().toString();a.ad().h("r",n)}if(c!=null){n=$.ig.util.stringJoin1(String," ",c);a.ad().h("spans",n)}if(d!=0){n=d.toString();a.ad().h("s",n)}if(e!=false){n=$$t.$g2.g(e);a.ad().h("customFormat",n)}if($l(f,null)){n=f.value().toString();a.ad().h("ht",n)}if(g!=false){n=$$t.$g2.g(g);a.ad().h("hidden",n)}if(h!=false){n=$$t.$g2.g(h);a.ad().h("customHeight",n)}if(i!=0){n=i.toString();a.ad().h("outlineLevel",n)}if(j!=false){n=$$t.$g2.g(j);a.ad().h("collapsed",n)}if(k!=false){n=$$t.$g2.g(k);a.ad().h("thickTop",n)}if(l!=false){n=$$t.$g2.g(l);a.ad().h("thickBot",n)}if(m!=false){n=$$t.$g2.g(m);a.ad().h("ph",n)}},wr:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},ab0:function(a){a.ad().p($$t.$ay.np,null)},ws:function(a,b){b=0;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"val":b=$$t.$i4.b($$t.$y.$type,c.d,b);break;default:break}}return{p1:b}},ab1:function(a,b){a.ad().p($$t.$ay.nx,null);var c;c=$$t.$i4.f($$t.$y.$type,b);a.ad().h("val",c)},wt:function(a,b,c,d,e){b=3;c=null;d=0;e=null;var g=a.ab().u.getEnumerator();while(g.moveNext()){var f=g.current();switch(f.a.e(a.d())){case"pane":b=$$t.$i4.b($$t.$ag.$type,f.d,b);break;case"activeCell":c=f.d;break;case"activeCellId":d=$.ig.util.parseUInt32_1(f.d,$$0.$cg.invariantCulture());break;case"sqref":e=$$t.$i4.e(String,f.d,function(h){return h});break;default:break}}return{p1:b,p2:c,p3:d,p4:e}},ab2:function(a,b,c,d,e){a.ad().p($$t.$ay.n0,null);var f;if(b!=3){f=$$t.$i4.f($$t.$ag.$type,b);a.ad().h("pane",f)}f=c;a.ad().h("activeCell",f);if(d!=0){f=d.toString();a.ad().h("activeCellId",f)}if(e!=null){f=$.ig.util.stringJoin1(String," ",e);a.ad().h("sqref",f)}},wu:function(a,b){var c=$$t.$ay.t0(a,$$t.$ay.n3,b);b=c.p2;return{p1:b}},ab3:function(a,b){$$t.$ay.y9(a,$$t.$ay.n3,b)},wv:function(a,b){b=false;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"fullCalcOnLoad":b=$$t.$g2.e(c.d);break;default:break}}return{p1:b}},ab4:function(a,b){a.ad().p($$t.$ay.n7,null);var c;if(b!=false){c=$$t.$g2.g(b);a.ad().h("fullCalcOnLoad",c)}},ww:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},ab5:function(a){a.ad().p($$t.$ay.n8,null)},wx:function(a,b,c){b=0;c=false;var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"sheetId":b=$.ig.util.parseUInt32_1(d.d,$$0.$cg.invariantCulture());break;case"refreshError":c=$$t.$g2.e(d.d);break;default:break}}return{p1:b,p2:c}},ab6:function(a,b,c){a.ad().p($$t.$ay.n8,null);var d;d=b.toString();a.ad().h("sheetId",d);if(c!=false){d=$$t.$g2.g(c);a.ad().h("refreshError",d)}},wy:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},ab7:function(a){a.ad().p($$t.$ay.n9,null)},wz:function(a,b,c,d,e){b=null;c=0;d=0;e=null;var g=a.ab().u.getEnumerator();while(g.moveNext()){var f=g.current();switch(f.a.e(a.d())){case"name":b=f.d;break;case"sheetId":c=$.ig.util.parseUInt32_1(f.d,$$0.$cg.invariantCulture());break;case"state":d=$$t.$i4.b($$t.$al.$type,f.d,d);break;case $$t.$i0.ar:e=f.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e}},ab8:function(a,b,c,d,e){a.ad().p($$t.$ay.n5,null);var f;f=b;a.ad().h("name",f);f=c.toString();a.ad().h("sheetId",f);if(d!=0){f=$$t.$i4.f($$t.$al.$type,d);a.ad().h("state",f)}f=e;a.ad().h($$t.$i0.ar,f)},w0:function(a,b,c,d,e,f,g,h,i,j){c=8;d=$m(Number,null);b=0;e=false;f=false;g=false;h=false;i=0;j=0;var l=a.ab().u.getEnumerator();while(l.moveNext()){var k=l.current();switch(k.a.e(a.d())){case"baseColWidth":c=$.ig.util.parseUInt32_1(k.d,$$0.$cg.invariantCulture());break;case"defaultColWidth":d=$m(Number,$an(k.d,$$0.$cg.invariantCulture()));break;case"defaultRowHeight":b=$an(k.d,$$0.$cg.invariantCulture());break;case"customHeight":e=$$t.$g2.e(k.d);break;case"zeroHeight":f=$$t.$g2.e(k.d);break;case"thickTop":g=$$t.$g2.e(k.d);break;case"thickBottom":h=$$t.$g2.e(k.d);break;case"outlineLevelRow":i=$ap(k.d,$$0.$cg.invariantCulture());break;case"outlineLevelCol":j=$ap(k.d,$$0.$cg.invariantCulture());break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j}},ab9:function(a,b,c,d,e,f,g,h,i,j){a.ad().p($$t.$ay.oa,null);var k;if(c!=8){k=c.toString();a.ad().h("baseColWidth",k)}if($l(d,null)){k=d.value().toString();a.ad().h("defaultColWidth",k)}k=b.toString();a.ad().h("defaultRowHeight",k);if(e!=false){k=$$t.$g2.g(e);a.ad().h("customHeight",k)}if(f!=false){k=$$t.$g2.g(f);a.ad().h("zeroHeight",k)}if(g!=false){k=$$t.$g2.g(g);a.ad().h("thickTop",k)}if(h!=false){k=$$t.$g2.g(h);a.ad().h("thickBottom",k)}if(i!=0){k=i.toString();a.ad().h("outlineLevelRow",k)}if(j!=0){k=j.toString();a.ad().h("outlineLevelCol",k)}},w1:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"val":b=c.d;break;default:break}}return{p1:b}},aca:function(a,b){a.ad().p($$t.$ay.oc,null);var c;c=b;a.ad().h("val",c)},w2:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},acb:function(a){a.ad().p($$t.$ay.od,null)},w3:function(a,b,c,d,e,f,g,h,i,j){b=false;c=false;d=null;e=false;f=false;g=true;h=null;i=false;j=true;var l=a.ab().u.getEnumerator();while(l.moveNext()){var k=l.current();switch(k.a.e(a.d())){case"syncHorizontal":b=$$t.$g2.e(k.d);break;case"syncVertical":c=$$t.$g2.e(k.d);break;case"syncRef":d=k.d;break;case"transitionEvaluation":e=$$t.$g2.e(k.d);break;case"transitionEntry":f=$$t.$g2.e(k.d);break;case"published":g=$$t.$g2.e(k.d);break;case"codeName":h=k.d;break;case"filterMode":i=$$t.$g2.e(k.d);break;case"enableFormatConditionsCalculation":j=$$t.$g2.e(k.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j}},acc:function(a,b,c,d,e,f,g,h,i,j){a.ad().p($$t.$ay.oe,null);var k;if(b!=false){k=$$t.$g2.g(b);a.ad().h("syncHorizontal",k)}if(c!=false){k=$$t.$g2.g(c);a.ad().h("syncVertical",k)}k=d;a.ad().h("syncRef",k);if(e!=false){k=$$t.$g2.g(e);a.ad().h("transitionEvaluation",k)}if(f!=false){k=$$t.$g2.g(f);a.ad().h("transitionEntry",k)}if(g!=true){k=$$t.$g2.g(g);a.ad().h("published",k)}k=h;a.ad().h("codeName",k);if(i!=false){k=$$t.$g2.g(i);a.ad().h("filterMode",k)}if(j!=true){k=$$t.$g2.g(j);a.ad().h("enableFormatConditionsCalculation",k)}},w4:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){b=$m($$t.$id.$type,null);c=false;d=false;e=false;f=true;g=true;h=true;i=true;j=true;k=true;l=true;m=true;n=false;o=true;p=true;q=true;r=false;var t=a.ab().u.getEnumerator();while(t.moveNext()){var s=t.current();switch(s.a.e(a.d())){case"password":b=$m($$t.$id.$type,$$t.$id.b(s.d));break;case"sheet":c=$$t.$g2.e(s.d);break;case"objects":d=$$t.$g2.e(s.d);break;case"scenarios":e=$$t.$g2.e(s.d);break;case"formatCells":f=$$t.$g2.e(s.d);break;case"formatColumns":g=$$t.$g2.e(s.d);break;case"formatRows":h=$$t.$g2.e(s.d);break;case"insertColumns":i=$$t.$g2.e(s.d);break;case"insertRows":j=$$t.$g2.e(s.d);break;case"insertHyperlinks":k=$$t.$g2.e(s.d);break;case"deleteColumns":l=$$t.$g2.e(s.d);break;case"deleteRows":m=$$t.$g2.e(s.d);break;case"selectLockedCells":n=$$t.$g2.e(s.d);break;case"sort":o=$$t.$g2.e(s.d);break;case"autoFilter":p=$$t.$g2.e(s.d);break;case"pivotTables":q=$$t.$g2.e(s.d);break;case"selectUnlockedCells":r=$$t.$g2.e(s.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n,p14:o,p15:p,p16:q,p17:r}},acd:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){a.ad().p($$t.$ay.of,null);var s;if($l(b,null)){s=b.value().toString();a.ad().h("password",s)}if(c!=false){s=$$t.$g2.g(c);a.ad().h("sheet",s);if(d!=false){s=$$t.$g2.g(d);a.ad().h("objects",s)}if(e!=false){s=$$t.$g2.g(e);a.ad().h("scenarios",s)}}if(f!=true){s=$$t.$g2.g(f);a.ad().h("formatCells",s)}if(g!=true){s=$$t.$g2.g(g);a.ad().h("formatColumns",s)}if(h!=true){s=$$t.$g2.g(h);a.ad().h("formatRows",s)}if(i!=true){s=$$t.$g2.g(i);a.ad().h("insertColumns",s)}if(j!=true){s=$$t.$g2.g(j);a.ad().h("insertRows",s)}if(k!=true){s=$$t.$g2.g(k);a.ad().h("insertHyperlinks",s)}if(l!=true){s=$$t.$g2.g(l);a.ad().h("deleteColumns",s)}if(m!=true){s=$$t.$g2.g(m);a.ad().h("deleteRows",s)}if(n!=false){s=$$t.$g2.g(n);a.ad().h("selectLockedCells",s)}if(o!=true){s=$$t.$g2.g(o);a.ad().h("sort",s)}if(p!=true){s=$$t.$g2.g(p);a.ad().h("autoFilter",s)}if(q!=true){s=$$t.$g2.g(q);a.ad().h("pivotTables",s)}if(r!=false){s=$$t.$g2.g(r);a.ad().h("selectUnlockedCells",s)}},b3:function(a){if(a.d()._y()==1){return true}var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){case"algorithmName":case"hashValue":case"saltValue":case"spinCount":return true;case"password":return false}}return false},w5:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){b=null;c=null;d=null;e=$m($$0.$be.$type,null);f=false;g=false;h=false;i=true;j=true;k=true;l=true;m=true;n=true;o=true;p=true;q=false;r=true;s=true;t=true;u=false;var w=a.ab().u.getEnumerator();while(w.moveNext()){var v=w.current();switch(v.a.e(a.d())){case"algorithmName":b=v.d;break;case"hashValue":c=v.d;break;case"saltValue":d=v.d;break;case"spinCount":e=$m($$0.$be.$type,$.ig.util.parseUInt32_1(v.d,$$0.$cg.invariantCulture()));break;case"sheet":f=$$t.$g2.e(v.d);break;case"objects":g=$$t.$g2.e(v.d);break;case"scenarios":h=$$t.$g2.e(v.d);break;case"formatCells":i=$$t.$g2.e(v.d);break;case"formatColumns":j=$$t.$g2.e(v.d);break;case"formatRows":k=$$t.$g2.e(v.d);break;case"insertColumns":l=$$t.$g2.e(v.d);break;case"insertRows":m=$$t.$g2.e(v.d);break;case"insertHyperlinks":n=$$t.$g2.e(v.d);break;case"deleteColumns":o=$$t.$g2.e(v.d);break;case"deleteRows":p=$$t.$g2.e(v.d);break;case"selectLockedCells":q=$$t.$g2.e(v.d);break;case"sort":r=$$t.$g2.e(v.d);break;case"autoFilter":s=$$t.$g2.e(v.d);break;case"pivotTables":t=$$t.$g2.e(v.d);break;case"selectUnlockedCells":u=$$t.$g2.e(v.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n,p14:o,p15:p,p16:q,p17:r,p18:s,p19:t,p20:u}},ace:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){a.ad().p($$t.$ay.of,null);var v;v=b;a.ad().h("algorithmName",v);v=c;a.ad().h("hashValue",v);v=d;a.ad().h("saltValue",v);if($l(e,null)){v=e.value().toString();a.ad().h("spinCount",v)}if(f!=false){v=$$t.$g2.g(f);a.ad().h("sheet",v)}if(g!=false){v=$$t.$g2.g(g);a.ad().h("objects",v)}if(h!=false){v=$$t.$g2.g(h);a.ad().h("scenarios",v)}if(i!=true){v=$$t.$g2.g(i);a.ad().h("formatCells",v)}if(j!=true){v=$$t.$g2.g(j);a.ad().h("formatColumns",v)}if(k!=true){v=$$t.$g2.g(k);a.ad().h("formatRows",v)}if(l!=true){v=$$t.$g2.g(l);a.ad().h("insertColumns",v)}if(m!=true){v=$$t.$g2.g(m);a.ad().h("insertRows",v)}if(n!=true){v=$$t.$g2.g(n);a.ad().h("insertHyperlinks",v)}if(o!=true){v=$$t.$g2.g(o);a.ad().h("deleteColumns",v)}if(p!=true){v=$$t.$g2.g(p);a.ad().h("deleteRows",v)}if(q!=false){v=$$t.$g2.g(q);a.ad().h("selectLockedCells",v)}if(r!=true){v=$$t.$g2.g(r);a.ad().h("sort",v)}if(s!=true){v=$$t.$g2.g(s);a.ad().h("autoFilter",v)}if(t!=true){v=$$t.$g2.g(t);a.ad().h("pivotTables",v)}if(u!=false){v=$$t.$g2.g(u);a.ad().h("selectUnlockedCells",v)}},w6:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},acf:function(a){a.ad().p($$t.$ay.og,null)},w7:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){c=false;d=false;e=true;f=true;g=true;h=false;i=false;j=true;k=true;l=true;m=true;n=0;o=null;p=64;q=100;r=0;s=0;t=0;b=0;var v=a.ab().u.getEnumerator();while(v.moveNext()){var u=v.current();switch(u.a.e(a.d())){case"windowProtection":c=$$t.$g2.e(u.d);break;case"showFormulas":d=$$t.$g2.e(u.d);break;case"showGridLines":e=$$t.$g2.e(u.d);break;case"showRowColHeaders":f=$$t.$g2.e(u.d);break;case"showZeros":g=$$t.$g2.e(u.d);break;case"rightToLeft":h=$$t.$g2.e(u.d);break;case"tabSelected":i=$$t.$g2.e(u.d);break;case"showRuler":j=$$t.$g2.e(u.d);break;case"showOutlineSymbols":k=$$t.$g2.e(u.d);break;case"defaultGridColor":l=$$t.$g2.e(u.d);break;case"showWhiteSpace":m=$$t.$g2.e(u.d);break;case"view":n=$$t.$i4.b($$t.$am.$type,u.d,n);break;case"topLeftCell":o=u.d;break;case"colorId":p=$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture());break;case"zoomScale":q=$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture());break;case"zoomScaleNormal":r=$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture());break;case"zoomScaleSheetLayoutView":s=$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture());break;case"zoomScalePageLayoutView":t=$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture());break;case"workbookViewId":b=$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture());break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n,p14:o,p15:p,p16:q,p17:r,p18:s,p19:t}},acg:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){a.ad().p($$t.$ay.oh,null);var u;if(c!=false){u=$$t.$g2.g(c);a.ad().h("windowProtection",u)}if(d!=false){u=$$t.$g2.g(d);a.ad().h("showFormulas",u)}if(e!=true){u=$$t.$g2.g(e);a.ad().h("showGridLines",u)}if(f!=true){u=$$t.$g2.g(f);a.ad().h("showRowColHeaders",u)}if(g!=true){u=$$t.$g2.g(g);a.ad().h("showZeros",u)}if(h!=false){u=$$t.$g2.g(h);a.ad().h("rightToLeft",u)}if(i!=false){u=$$t.$g2.g(i);a.ad().h("tabSelected",u)}if(j!=true){u=$$t.$g2.g(j);a.ad().h("showRuler",u)}if(k!=true){u=$$t.$g2.g(k);a.ad().h("showOutlineSymbols",u)}if(l!=true){u=$$t.$g2.g(l);a.ad().h("defaultGridColor",u)}if(m!=true){u=$$t.$g2.g(m);a.ad().h("showWhiteSpace",u)}if(n!=0){u=$$t.$i4.f($$t.$am.$type,n);a.ad().h("view",u)}u=o;a.ad().h("topLeftCell",u);if(p!=64){u=p.toString();a.ad().h("colorId",u)}if(q!=100){u=q.toString();a.ad().h("zoomScale",u)}if(r!=0){u=r.toString();a.ad().h("zoomScaleNormal",u)
}if(s!=0){u=s.toString();a.ad().h("zoomScaleSheetLayoutView",u)}if(t!=0){u=t.toString();a.ad().h("zoomScalePageLayoutView",u)}u=b.toString();a.ad().h("workbookViewId",u)},w8:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},ach:function(a){a.ad().p($$t.$ay.oi,null)},w9:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},aci:function(a){a.ad().p($$t.$ay.pd,null)},xa:function(a,b,c,d,e,f,g,h){c=false;d=0;b=null;e=null;f=$m($$0.$be.$type,null);g=0;h=$m($$0.$be.$type,null);var j=a.ab().u.getEnumerator();while(j.moveNext()){var i=j.current();switch(i.a.e(a.d())){case"descending":c=$$t.$g2.e(i.d);break;case"sortBy":d=$$t.$i4.b($$v.$cn.$type,i.d,d);break;case"ref":b=i.d;break;case"customList":e=i.d;break;case"dxfId":f=$m($$0.$be.$type,$.ig.util.parseUInt32_1(i.d,$$0.$cg.invariantCulture()));break;case"iconSet":g=$$t.$i4.b($$v.$cl.$type,i.d,g);break;case"iconId":h=$m($$0.$be.$type,$.ig.util.parseUInt32_1(i.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h}},acj:function(a,b,c,d,e,f,g,h){a.ad().p($$t.$ay.pj,null);var i;if(c!=false){i=$$t.$g2.g(c);a.ad().h("descending",i)}if(d!=0){i=$$t.$i4.f($$v.$cn.$type,d);a.ad().h("sortBy",i)}i=b;a.ad().h("ref",i);i=e;a.ad().h("customList",i);if($l(f,null)){i=f.value().toString();a.ad().h("dxfId",i)}if(g!=0){i=$$t.$i4.f($$v.$cl.$type,g);a.ad().h("iconSet",i)}if($l(h,null)){i=h.value().toString();a.ad().h("iconId",i)}},xb:function(a,b,c,d,e){c=false;d=false;e=0;b=null;var g=a.ab().u.getEnumerator();while(g.moveNext()){var f=g.current();switch(f.a.e(a.d())){case"columnSort":c=$$t.$g2.e(f.d);break;case"caseSensitive":d=$$t.$g2.e(f.d);break;case"sortMethod":e=$$t.$i4.b($$t.$an.$type,f.d,e);break;case"ref":b=f.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e}},ack:function(a,b,c,d,e){a.ad().p($$t.$ay.pl,null);var f;if(c!=false){f=$$t.$g2.g(c);a.ad().h("columnSort",f)}if(d!=false){f=$$t.$g2.g(d);a.ad().h("caseSensitive",f)}if(e!=0){f=$$t.$i4.f($$t.$an.$type,e);a.ad().h("sortMethod",f)}f=b;a.ad().h("ref",f)},xc:function(a,b,c){b=$m($$0.$be.$type,null);c=$m($$0.$be.$type,null);var e=a.ab().u.getEnumerator();while(e.moveNext()){var d=e.current();switch(d.a.e(a.d())){case"count":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(d.d,$$0.$cg.invariantCulture()));break;case"uniqueCount":c=$m($$0.$be.$type,$.ig.util.parseUInt32_1(d.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b,p2:c}},acl:function(a,b,c){a.ad().p($$t.$ay.pp,null);var d;if($l(b,null)){d=b.value().toString();a.ad().h("count",d)}if($l(c,null)){d=c.value().toString();a.ad().h("uniqueCount",d)}},xd:function(a,b){var c=$$t.$ay.t1(a,$$t.$ay.pq,b);b=c.p2;return{p1:b}},acm:function(a,b){$$t.$ay.za(a,$$t.$ay.pq,b)},xe:function(a,b){b=0;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"position":b=$an(c.d,$$0.$cg.invariantCulture());break;default:break}}return{p1:b}},acn:function(a,b){a.ad().p($$t.$ay.pu,null);var c;c=b.toString();a.ad().h("position",c)},xf:function(a,b){var c=$$t.$ay.t0(a,$$t.$ay.pw,b);b=c.p2;return{p1:b}},aco:function(a,b){$$t.$ay.y9(a,$$t.$ay.pw,b)},xg:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},acp:function(a){a.ad().p($$t.$ay.py,null);var b=a.d()._y();a.ad().l($$t.$ay.ao,false)},xh:function(a,b){b=0;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"val":b=$an(c.d,$$0.$cg.invariantCulture());break;default:break}}return{p1:b}},acq:function(a,b){a.ad().p($$t.$ay.p4,null);var c;c=b.toString();a.ad().h("val",c)},xi:function(a,b,c,d,e,f){var g=$$t.$ay.t2(a,$$t.$ay.p7,b,c,d,e,f);b=g.p2;c=g.p3;d=g.p4;e=g.p5;f=g.p6;return{p1:b,p2:c,p3:d,p4:e,p5:f}},acr:function(a,b,c,d,e,f){$$t.$ay.zb(a,$$t.$ay.p7,b,c,d,e,f)},xj:function(a,b,c,d,e,f,g,h,i,j,k,l,m){b=0;c=null;d=null;e=0;f=null;g=$m($$0.$be.$type,null);h=$m($$0.$be.$type,null);i=$m($$0.$be.$type,null);j=$m($$0.$be.$type,null);k=null;l=null;m=null;var o=a.ab().u.getEnumerator();while(o.moveNext()){var n=o.current();switch(n.a.e(a.d())){case"id":b=$.ig.util.parseUInt32_1(n.d,$$0.$cg.invariantCulture());break;case"uniqueName":c=n.d;break;case"name":d=n.d;break;case"totalsRowFunction":e=$$t.$i4.b($$v.$cp.$type,n.d,e);break;case"totalsRowLabel":f=n.d;break;case"queryTableFieldId":g=$m($$0.$be.$type,$.ig.util.parseUInt32_1(n.d,$$0.$cg.invariantCulture()));break;case"headerRowDxfId":h=$m($$0.$be.$type,$.ig.util.parseUInt32_1(n.d,$$0.$cg.invariantCulture()));break;case"dataDxfId":i=$m($$0.$be.$type,$.ig.util.parseUInt32_1(n.d,$$0.$cg.invariantCulture()));break;case"totalsRowDxfId":j=$m($$0.$be.$type,$.ig.util.parseUInt32_1(n.d,$$0.$cg.invariantCulture()));break;case"headerRowCellStyle":k=n.d;break;case"dataCellStyle":l=n.d;break;case"totalsRowCellStyle":m=n.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m}},acs:function(a,b,c,d,e,f,g,h,i,j,k,l,m){a.ad().p($$t.$ay.qb,null);var n;n=b.toString();a.ad().h("id",n);n=c;a.ad().h("uniqueName",n);n=d;a.ad().h("name",n);if(e!=0){n=$$t.$i4.f($$v.$cp.$type,e);a.ad().h("totalsRowFunction",n)}n=f;a.ad().h("totalsRowLabel",n);if($l(g,null)){n=g.value().toString();a.ad().h("queryTableFieldId",n)}if($l(h,null)){n=h.value().toString();a.ad().h("headerRowDxfId",n)}if($l(i,null)){n=i.value().toString();a.ad().h("dataDxfId",n)}if($l(j,null)){n=j.value().toString();a.ad().h("totalsRowDxfId",n)}n=k;a.ad().h("headerRowCellStyle",n);n=l;a.ad().h("dataCellStyle",n);n=m;a.ad().h("totalsRowCellStyle",n)},xk:function(a,b){b=$m($$0.$be.$type,null);var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"count":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(c.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b}},act:function(a,b){a.ad().p($$t.$ay.qc,null);var c;if($l(b,null)){c=b.value().toString();a.ad().h("count",c)}},xl:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){b=0;c=null;d=null;e=null;f=null;g=0;h=1;i=false;j=false;k=0;l=true;m=false;n=$m($$0.$be.$type,null);o=$m($$0.$be.$type,null);p=$m($$0.$be.$type,null);q=$m($$0.$be.$type,null);r=$m($$0.$be.$type,null);s=$m($$0.$be.$type,null);t=null;u=null;v=null;w=$m($$0.$be.$type,null);var y=a.ab().u.getEnumerator();while(y.moveNext()){var x=y.current();switch(x.a.e(a.d())){case"id":b=$.ig.util.parseUInt32_1(x.d,$$0.$cg.invariantCulture());break;case"name":c=x.d;break;case"displayName":d=x.d;break;case"comment":e=x.d;break;case"ref":f=x.d;break;case"tableType":g=$$t.$i4.b($$t.$ao.$type,x.d,g);break;case"headerRowCount":h=$.ig.util.parseUInt32_1(x.d,$$0.$cg.invariantCulture());break;case"insertRow":i=$$t.$g2.e(x.d);break;case"insertRowShift":j=$$t.$g2.e(x.d);break;case"totalsRowCount":k=$.ig.util.parseUInt32_1(x.d,$$0.$cg.invariantCulture());break;case"totalsRowShown":l=$$t.$g2.e(x.d);break;case"published":m=$$t.$g2.e(x.d);break;case"headerRowDxfId":n=$m($$0.$be.$type,$.ig.util.parseUInt32_1(x.d,$$0.$cg.invariantCulture()));break;case"dataDxfId":o=$m($$0.$be.$type,$.ig.util.parseUInt32_1(x.d,$$0.$cg.invariantCulture()));break;case"totalsRowDxfId":p=$m($$0.$be.$type,$.ig.util.parseUInt32_1(x.d,$$0.$cg.invariantCulture()));break;case"headerRowBorderDxfId":q=$m($$0.$be.$type,$.ig.util.parseUInt32_1(x.d,$$0.$cg.invariantCulture()));break;case"tableBorderDxfId":r=$m($$0.$be.$type,$.ig.util.parseUInt32_1(x.d,$$0.$cg.invariantCulture()));break;case"totalsRowBorderDxfId":s=$m($$0.$be.$type,$.ig.util.parseUInt32_1(x.d,$$0.$cg.invariantCulture()));break;case"headerRowCellStyle":t=x.d;break;case"dataCellStyle":u=x.d;break;case"totalsRowCellStyle":v=x.d;break;case"connectionId":w=$m($$0.$be.$type,$.ig.util.parseUInt32_1(x.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n,p14:o,p15:p,p16:q,p17:r,p18:s,p19:t,p20:u,p21:v,p22:w}},acu:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){a.ad().p($$t.$ay.p8,null);var x;x=b.toString();a.ad().h("id",x);x=c;a.ad().h("name",x);x=d;a.ad().h("displayName",x);x=e;a.ad().h("comment",x);x=f;a.ad().h("ref",x);if(g!=0){x=$$t.$i4.f($$t.$ao.$type,g);a.ad().h("tableType",x)}if(h!=1){x=h.toString();a.ad().h("headerRowCount",x)}if(i!=false){x=$$t.$g2.g(i);a.ad().h("insertRow",x)}if(j!=false){x=$$t.$g2.g(j);a.ad().h("insertRowShift",x)}if(k!=0){x=k.toString();a.ad().h("totalsRowCount",x)}if(l!=true){x=$$t.$g2.g(l);a.ad().h("totalsRowShown",x)}if(m!=false){x=$$t.$g2.g(m);a.ad().h("published",x)}if($l(n,null)){x=n.value().toString();a.ad().h("headerRowDxfId",x)}if($l(o,null)){x=o.value().toString();a.ad().h("dataDxfId",x)}if($l(p,null)){x=p.value().toString();a.ad().h("totalsRowDxfId",x)}if($l(q,null)){x=q.value().toString();a.ad().h("headerRowBorderDxfId",x)}if($l(r,null)){x=r.value().toString();a.ad().h("tableBorderDxfId",x)}if($l(s,null)){x=s.value().toString();a.ad().h("totalsRowBorderDxfId",x)}x=t;a.ad().h("headerRowCellStyle",x);x=u;a.ad().h("dataCellStyle",x);x=v;a.ad().h("totalsRowCellStyle",x);if($l(w,null)){x=w.value().toString();a.ad().h("connectionId",x)}},xm:function(a,b){b=null;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case $$t.$i0.ar:b=c.d;break;default:break}}return{p1:b}},acv:function(a,b){a.ad().p($$t.$ay.qd,null);var c;c=b;a.ad().h($$t.$i0.ar,c)},xn:function(a,b){b=$m($$0.$be.$type,null);var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"count":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(c.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b}},acw:function(a,b){a.ad().p($$t.$ay.qe,null);var c;if($l(b,null)){c=b.value().toString();a.ad().h("count",c)}},xo:function(a,b,c,d,e){b=null;c=true;d=true;e=$m($$0.$be.$type,null);var g=a.ab().u.getEnumerator();while(g.moveNext()){var f=g.current();switch(f.a.e(a.d())){case"name":b=f.d;break;case"pivot":c=$$t.$g2.e(f.d);break;case"table":d=$$t.$g2.e(f.d);break;case"count":e=$m($$0.$be.$type,$.ig.util.parseUInt32_1(f.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b,p2:c,p3:d,p4:e}},acx:function(a,b,c,d,e){a.ad().p($$t.$ay.qf,null);var f;f=b;a.ad().h("name",f);if(c!=true){f=$$t.$g2.g(c);a.ad().h("pivot",f)}if(d!=true){f=$$t.$g2.g(d);a.ad().h("table",f)}if($l(e,null)){f=e.value().toString();a.ad().h("count",f)}},xp:function(a,b,c,d){b=0;c=1;d=$m($$0.$be.$type,null);var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case"type":b=$$t.$i4.b($$v.$co.$type,e.d,b);break;case"size":c=$.ig.util.parseUInt32_1(e.d,$$0.$cg.invariantCulture());break;case"dxfId":d=$m($$0.$be.$type,$.ig.util.parseUInt32_1(e.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b,p2:c,p3:d}},acy:function(a,b,c,d){a.ad().p($$t.$ay.qg,null);var e;e=$$t.$i4.f($$v.$co.$type,b);a.ad().h("type",e);if(c!=1){e=c.toString();a.ad().h("size",e)}if($l(d,null)){e=d.value().toString();a.ad().h("dxfId",e)}},xq:function(a,b,c,d,e,f){b=null;c=$m($$0.$aq.$type,null);d=$m($$0.$aq.$type,null);e=$m($$0.$aq.$type,null);f=$m($$0.$aq.$type,null);var h=a.ab().u.getEnumerator();while(h.moveNext()){var g=h.current();switch(g.a.e(a.d())){case"name":b=g.d;break;case"showFirstColumn":c=$m($$0.$aq.$type,$$t.$g2.e(g.d));break;case"showLastColumn":d=$m($$0.$aq.$type,$$t.$g2.e(g.d));break;case"showRowStripes":e=$m($$0.$aq.$type,$$t.$g2.e(g.d));break;case"showColumnStripes":f=$m($$0.$aq.$type,$$t.$g2.e(g.d));break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f}},acz:function(a,b,c,d,e,f){a.ad().p($$t.$ay.qh,null);var g;g=b;a.ad().h("name",g);if($l(c,null)){g=$$t.$g2.g(c.value());a.ad().h("showFirstColumn",g)}if($l(d,null)){g=$$t.$g2.g(d.value());a.ad().h("showLastColumn",g)}if($l(e,null)){g=$$t.$g2.g(e.value());a.ad().h("showRowStripes",g)}if($l(f,null)){g=$$t.$g2.g(f.value());a.ad().h("showColumnStripes",g)}},xr:function(a,b,c,d){b=$m($$0.$be.$type,null);c=null;d=null;var f=a.ab().u.getEnumerator();while(f.moveNext()){var e=f.current();switch(e.a.e(a.d())){case"count":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(e.d,$$0.$cg.invariantCulture()));break;case"defaultTableStyle":c=e.d;break;case"defaultPivotStyle":d=e.d;break;default:break}}return{p1:b,p2:c,p3:d}},ac0:function(a,b,c,d){a.ad().p($$t.$ay.qi,null);var e;if($l(b,null)){e=b.value().toString();a.ad().h("count",e)}e=c;a.ad().h("defaultTableStyle",e);e=d;a.ad().h("defaultPivotStyle",e)},xs:function(a,b){var c=$$t.$ay.u(a,$$t.$ay.p5,b,0);b=c.p2;b=$$t.$ay.rd(b,false);return{p1:b}},ac1:function(a,b){b=$$t.$ay.g4(b);$$t.$ay.ai(a,$$t.$ay.p5,null,b,null,0)},xt:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},ac2:function(a){a.ad().p($$t.$ay.qm,null)},xv:function(a,b){var c=$$t.$ay.t1(a,$$t.$ay.qw,b);b=c.p2;return{p1:b}},ac4:function(a,b){$$t.$ay.za(a,$$t.$ay.qw,b)},xu:function(a,b,c,d,e){c=true;d=false;b=0;e=$m(Number,null);var g=a.ab().u.getEnumerator();while(g.moveNext()){var f=g.current();switch(f.a.e(a.d())){case"top":c=$$t.$g2.e(f.d);break;case"percent":d=$$t.$g2.e(f.d);break;case"val":b=$an(f.d,$$0.$cg.invariantCulture());break;case"filterVal":e=$m(Number,$an(f.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b,p2:c,p3:d,p4:e}},ac3:function(a,b,c,d,e){a.ad().p($$t.$ay.qy,null);var f;if(c!=true){f=$$t.$g2.g(c);a.ad().h("top",f)}if(d!=false){f=$$t.$g2.g(d);a.ad().h("percent",f)}f=b.toString();a.ad().h("val",f);if($l(e,null)){f=e.value().toString();a.ad().h("filterVal",f)}},xw:function(a,b,c){var d=$$t.$ay.t5(a,$$t.$ay.q4,b,c);b=d.p2;c=d.p3;return{p1:b,p2:c}},ac5:function(a,b,c){$$t.$ay.ze(a,$$t.$ay.q4,b,c)},xx:function(a,b){b=0;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"val":b=$$t.$i4.b($$t.$aq.$type,c.d,b);break;default:break}}return{p1:b}},ac6:function(a,b){a.ad().p($$t.$ay.rb,null);var c;if(b!=0){c=$$t.$i4.f($$t.$aq.$type,b);a.ad().h("val",c)}},xy:function(a,b){var c=$$t.$ay.u(a,$$t.$ay.rl,b,0);b=c.p2;return{p1:b}},ac7:function(a,b){$$t.$ay.ai(a,$$t.$ay.rl,null,b,null,0)},ac8:function(a,b){a.ad().r("v");a.ad().u(b)},xz:function(a,b){b=0;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"val":b=$$t.$i4.b($$t.$ig.$type,c.d,b);break;default:break}}return{p1:b}},ac9:function(a,b){a.ad().p($$t.$ay.rp,null);var c;c=$$t.$i4.f($$t.$ig.$type,b);a.ad().h("val",c)},x0:function(a,b){var c=$$t.$ay.t1(a,$$t.$ay.rq,b);b=c.p2;return{p1:b}},ada:function(a,b){$$t.$ay.za(a,$$t.$ay.rq,b)},x1:function(a,b){b=0;var d=a.ab().u.getEnumerator();while(d.moveNext()){var c=d.current();switch(c.a.e(a.d())){case"conformance":b=$$t.$i4.b($$t.$f8.$type,c.d,b);break;default:break}}return{p1:b}},adb:function(a,b){a.ad().p($$t.$ay.r1,null);a.ad().l($$t.$i0.an,false);a.ad().l($$t.$ay.ao,false);var c=$$t.$i4.g($$t.$f8.$type,b,0,false);a.ad().h("conformance",c)},x2:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){b=false;c=0;d=true;e=false;f=false;g=true;h=false;i=true;j=0;k=null;l=false;m=false;n=false;o=false;p=false;q=true;r=false;s=$m($$0.$be.$type,null);t=true;var v=a.ab().u.getEnumerator();while(v.moveNext()){var u=v.current();switch(u.a.e(a.d())){case"date1904":b=$$t.$g2.e(u.d);break;case"showObjects":c=$$t.$i4.b($$t.$ac.$type,u.d,c);break;case"showBorderUnselectedTables":d=$$t.$g2.e(u.d);break;case"filterPrivacy":e=$$t.$g2.e(u.d);break;case"promptedSolutions":f=$$t.$g2.e(u.d);break;case"showInkAnnotation":g=$$t.$g2.e(u.d);break;case"backupFile":h=$$t.$g2.e(u.d);break;case"saveExternalLinkValues":i=$$t.$g2.e(u.d);break;case"updateLinks":j=$$t.$i4.b($$t.$ar.$type,u.d,j);break;case"codeName":k=u.d;break;case"hidePivotFieldList":l=$$t.$g2.e(u.d);break;case"showPivotChartFilter":m=$$t.$g2.e(u.d);break;case"allowRefreshQuery":n=$$t.$g2.e(u.d);break;case"publishItems":o=$$t.$g2.e(u.d);break;case"checkCompatibility":p=$$t.$g2.e(u.d);break;case"autoCompressPictures":q=$$t.$g2.e(u.d);break;case"refreshAllConnections":r=$$t.$g2.e(u.d);break;case"defaultThemeVersion":s=$m($$0.$be.$type,$.ig.util.parseUInt32_1(u.d,$$0.$cg.invariantCulture()));break;case"dateCompatibility":t=$$t.$g2.e(u.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n,p14:o,p15:p,p16:q,p17:r,p18:s,p19:t}},adc:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){a.ad().p($$t.$ay.r6,null);var u;if(b!=false){u=$$t.$g2.g(b);a.ad().h("date1904",u)}if(c!=0){u=$$t.$i4.f($$t.$ac.$type,c);a.ad().h("showObjects",u)}if(d!=true){u=$$t.$g2.g(d);a.ad().h("showBorderUnselectedTables",u)}if(e!=false){u=$$t.$g2.g(e);a.ad().h("filterPrivacy",u)}if(f!=false){u=$$t.$g2.g(f);a.ad().h("promptedSolutions",u)}if(g!=true){u=$$t.$g2.g(g);a.ad().h("showInkAnnotation",u)}if(h!=false){u=$$t.$g2.g(h);a.ad().h("backupFile",u)}if(i!=true){u=$$t.$g2.g(i);a.ad().h("saveExternalLinkValues",u)}if(j!=0){u=$$t.$i4.f($$t.$ar.$type,j);a.ad().h("updateLinks",u)}if(k!=null){u=k;a.ad().h("codeName",u)}if(l!=false){u=$$t.$g2.g(l);a.ad().h("hidePivotFieldList",u)}if(m!=false){u=$$t.$g2.g(m);a.ad().h("showPivotChartFilter",u)}if(n!=false){u=$$t.$g2.g(n);a.ad().h("allowRefreshQuery",u)}if(o!=false){u=$$t.$g2.g(o);a.ad().h("publishItems",u)}if(p!=false){u=$$t.$g2.g(p);a.ad().h("checkCompatibility",u)}if(q!=true){u=$$t.$g2.g(q);a.ad().h("autoCompressPictures",u)}if(r!=false){u=$$t.$g2.g(r);a.ad().h("refreshAllConnections",u)}if($l(s,null)){u=s.value().toString();a.ad().h("defaultThemeVersion",u)}if(t!=true){u=$$t.$g2.g(t);a.ad().h("dateCompatibility",u)}},x3:function(a,b,c,d,e,f){b=false;c=false;d=false;e=$m($$0.$bd.$type,null);f=$m($$0.$bd.$type,null);var h=a.ab().u.getEnumerator();while(h.moveNext()){var g=h.current();switch(g.a.e(a.d())){case"lockStructure":b=$$t.$g2.e(g.d);break;case"lockWindows":c=$$t.$g2.e(g.d);break;case"lockRevision":d=$$t.$g2.e(g.d);break;case"workbookPassword":e=$m($$0.$bd.$type,$$t.$id.d(g.d));break;case"revisionsPassword":f=$m($$0.$bd.$type,$$t.$id.d(g.d));break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f}},add:function(a,b,c,d,e,f){a.ad().p($$t.$ay.r7,null);var g;if(b!=false){g=$$t.$g2.g(b);a.ad().h("lockStructure",g)}if(c!=false){g=$$t.$g2.g(c);a.ad().h("lockWindows",g)}if(d!=false){g=$$t.$g2.g(d);a.ad().h("lockRevision",g)}if($l(f,null)){g=new $$t.id(1,f.value()).toString();a.ad().h("revisionsPassword",g)}if($l(e,null)){g=new $$t.id(1,e.value()).toString();a.ad().h("workbookPassword",g)}},x4:function(a,b,c,d,e,f,g,h,i,j,k,l){b=false;c=false;d=false;e=null;f=null;g=null;h=$m($$0.$be.$type,null);i=null;j=null;k=null;l=$m($$0.$be.$type,null);var n=a.ab().u.getEnumerator();while(n.moveNext()){var m=n.current();switch(m.a.e(a.d())){case"lockStructure":b=$$t.$g2.e(m.d);break;case"lockWindows":c=$$t.$g2.e(m.d);break;case"lockRevision":d=$$t.$g2.e(m.d);break;case"revisionsAlgorithmName":e=m.d;break;case"revisionsHashValue":f=m.d;break;case"revisionsSaltValue":g=m.d;break;case"revisionsSpinCount":h=$m($$0.$be.$type,$.ig.util.parseUInt32_1(m.d,$$0.$cg.invariantCulture()));break;case"workbookAlgorithmName":i=m.d;break;case"workbookHashValue":j=m.d;break;case"workbookSaltValue":k=m.d;break;case"workbookSpinCount":l=$m($$0.$be.$type,$.ig.util.parseUInt32_1(m.d,$$0.$cg.invariantCulture()));break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l}},ade:function(a,b,c,d,e,f,g,h,i,j,k,l){a.ad().p($$t.$ay.r7,null);var m;if(b!=false){m=$$t.$g2.g(b);a.ad().h("lockStructure",m)}if(c!=false){m=$$t.$g2.g(c);a.ad().h("lockWindows",m)}if(d!=false){m=$$t.$g2.g(d);a.ad().h("lockRevision",m)}if(e!=null){m=e;a.ad().h("revisionsAlgorithmName",m)}if(f!=null){m=f.toString();a.ad().h("revisionsHashValue",m)}if(g!=null){m=g.toString();a.ad().h("revisionsSaltValue",m)}if($l(h,null)){m=h.value().toString();a.ad().h("revisionsSpinCount",m)}if(i!=null){m=i;a.ad().h("workbookAlgorithmName",m)}if(j!=null){m=j.toString();a.ad().h("workbookHashValue",m)}if(k!=null){m=k.toString();a.ad().h("workbookSaltValue",m)}if($l(l,null)){m=l.value().toString();a.ad().h("workbookSpinCount",m)}},x5:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b=0;c=false;d=true;e=true;f=true;g=$m($$0.$aw.$type,null);h=$m($$0.$aw.$type,null);i=$m($$0.$be.$type,null);j=$m($$0.$be.$type,null);k=600;l=0;m=0;n=true;var p=a.ab().u.getEnumerator();while(p.moveNext()){var o=p.current();switch(o.a.e(a.d())){case"visibility":b=$$t.$i4.b($$t.$at.$type,o.d,b);break;case"minimized":c=$$t.$g2.e(o.d);break;case"showHorizontalScroll":d=$$t.$g2.e(o.d);break;case"showVerticalScroll":e=$$t.$g2.e(o.d);break;case"showSheetTabs":f=$$t.$g2.e(o.d);break;case"xWindow":g=$m($$0.$aw.$type,$ai(o.d,$$0.$cg.invariantCulture()));break;case"yWindow":h=$m($$0.$aw.$type,$ai(o.d,$$0.$cg.invariantCulture()));break;case"windowWidth":i=$m($$0.$be.$type,$.ig.util.parseUInt32_1(o.d,$$0.$cg.invariantCulture()));break;case"windowHeight":j=$m($$0.$be.$type,$.ig.util.parseUInt32_1(o.d,$$0.$cg.invariantCulture()));break;case"tabRatio":k=$.ig.util.parseUInt32_1(o.d,$$0.$cg.invariantCulture());break;case"firstSheet":l=$.ig.util.parseUInt32_1(o.d,$$0.$cg.invariantCulture());break;case"activeTab":m=$.ig.util.parseUInt32_1(o.d,$$0.$cg.invariantCulture());break;case"autoFilterDateGrouping":n=$$t.$g2.e(o.d);break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n}},adf:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){a.ad().p($$t.$ay.sa,null);var o;if(b!=0){o=$$t.$i4.f($$t.$at.$type,b);a.ad().h("visibility",o)}if(c!=false){o=$$t.$g2.g(c);a.ad().h("minimized",o)}if(d!=true){o=$$t.$g2.g(d);a.ad().h("showHorizontalScroll",o)}if(e!=true){o=$$t.$g2.g(e);a.ad().h("showVerticalScroll",o)}if(f!=true){o=$$t.$g2.g(f);a.ad().h("showSheetTabs",o)}if($l(g,null)){o=g.value().toString();a.ad().h("xWindow",o)}if($l(h,null)){o=h.value().toString();a.ad().h("yWindow",o)}if($l(i,null)){o=i.value().toString();a.ad().h("windowWidth",o)}if($l(j,null)){o=j.value().toString();a.ad().h("windowHeight",o)}if(k!=600){o=k.toString();a.ad().h("tabRatio",o)}if(l!=0){o=l.toString();a.ad().h("firstSheet",o)}if(m!=0){o=m.toString();a.ad().h("activeTab",o)}if(n!=true){o=$$t.$g2.g(n);a.ad().h("autoFilterDateGrouping",o)}},x6:function(a){var c=a.ab().u.getEnumerator();while(c.moveNext()){var b=c.current();switch(b.a.e(a.d())){default:break}}},adg:function(a){a.ad().p($$t.$ay.sc,null);var b=a.d()._y();a.ad().l($$t.$i0.an,false);a.ad().l($$t.$ay.ao,false)},x7:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b=$m($$0.$be.$type,null);c=$m($$0.$be.$type,null);d=$m($$0.$be.$type,null);e=$m($$0.$be.$type,null);f=$m($$0.$be.$type,null);g=false;h=false;i=$m($$0.$aq.$type,null);j=$m($$0.$aq.$type,null);k=$m($$0.$aq.$type,null);l=$m($$0.$aq.$type,null);m=$m($$0.$aq.$type,null);n=$m($$0.$aq.$type,null);var p=a.ab().u.getEnumerator();while(p.moveNext()){var o=p.current();switch(o.a.e(a.d())){case"numFmtId":b=$m($$0.$be.$type,$.ig.util.parseUInt32_1(o.d,$$0.$cg.invariantCulture()));break;case"fontId":c=$m($$0.$be.$type,$.ig.util.parseUInt32_1(o.d,$$0.$cg.invariantCulture()));break;case"fillId":d=$m($$0.$be.$type,$.ig.util.parseUInt32_1(o.d,$$0.$cg.invariantCulture()));break;case"borderId":e=$m($$0.$be.$type,$.ig.util.parseUInt32_1(o.d,$$0.$cg.invariantCulture()));break;case"xfId":f=$m($$0.$be.$type,$.ig.util.parseUInt32_1(o.d,$$0.$cg.invariantCulture()));break;case"quotePrefix":g=$$t.$g2.e(o.d);break;case"pivotButton":h=$$t.$g2.e(o.d);break;case"applyNumberFormat":i=$m($$0.$aq.$type,$$t.$g2.e(o.d));break;case"applyFont":j=$m($$0.$aq.$type,$$t.$g2.e(o.d));break;case"applyFill":k=$m($$0.$aq.$type,$$t.$g2.e(o.d));break;case"applyBorder":l=$m($$0.$aq.$type,$$t.$g2.e(o.d));break;case"applyAlignment":m=$m($$0.$aq.$type,$$t.$g2.e(o.d));break;case"applyProtection":n=$m($$0.$aq.$type,$$t.$g2.e(o.d));break;default:break}}return{p1:b,p2:c,p3:d,p4:e,p5:f,p6:g,p7:h,p8:i,p9:j,p10:k,p11:l,p12:m,p13:n}},adh:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){a.ad().p($$t.$ay.se,null);var o;if($l(b,null)){o=b.value().toString();a.ad().h("numFmtId",o)}if($l(c,null)){o=c.value().toString();a.ad().h("fontId",o)}if($l(d,null)){o=d.value().toString();a.ad().h("fillId",o)}if($l(e,null)){o=e.value().toString();a.ad().h("borderId",o)}if($l(f,null)){o=f.value().toString();a.ad().h("xfId",o)}if(g!=false){o=$$t.$g2.g(g);a.ad().h("quotePrefix",o)}if(h!=false){o=$$t.$g2.g(h);a.ad().h("pivotButton",o)}if($l(i,null)){o=$$t.$g2.g(i.value());a.ad().h("applyNumberFormat",o)}if($l(j,null)){o=$$t.$g2.g(j.value());a.ad().h("applyFont",o)}if($l(k,null)){o=$$t.$g2.g(k.value());a.ad().h("applyFill",o)}if($l(l,null)){o=$$t.$g2.g(l.value());a.ad().h("applyBorder",o)}if($l(m,null)){o=$$t.$g2.g(m.value());a.ad().h("applyAlignment",o)}if($l(n,null)){o=$$t.$g2.g(n.value());a.ad().h("applyProtection",o)}},x8:function(a,b,c,d,e){b=0;c=null;e=false;d=null;var g=a.ab().u.getEnumerator();while(g.moveNext()){var f=g.current();switch(f.a.e(a.d())){case"mapId":b=$.ig.util.parseUInt32_1(f.d,$$0.$cg.invariantCulture());break;case"xpath":c=f.d;break;case"denormalized":e=$$t.$g2.e(f.d);break;case"xmlDataType":d=f.d;break;default:break}}return{p1:b,p2:c,p3:d,p4:e}},adi:function(a,b,c,d,e){a.ad().p($$t.$ay.sh,null);var f;f=b.toString();a.ad().h("mapId",f);f=c;a.ad().h("xpath",f);if(e!=false){f=$$t.$g2.g(e);a.ad().h("denormalized",f)}f=d;a.ad().h("xmlDataType",f)},$type:new $.ig.Type("SpreadsheetMLMain",$$t.$i4.$type)},true);$c("UnknownElementCache___GetDescendants__IteratorClass:ft","Object",{_i:0,_c:null,_g:null,_e:null,_h:null,_f:null,_k:null,___3__strictElementName:null,_b:null,___3__documentManager:null,___4__this:null,init:function(a){$.ig.$op.init.call(this);this._i=a},_l:function(){this._i=-1;if(this._g!=null){this._g.dispose()}},_m:function(){this._i=1;if(this._h!=null){this._h.dispose()}},moveNext:function(){var __hasError__=false;try{while(this._i>=0){switch(this._i){case 0:this._i=1;this._g=this.___4__this.k().getEnumerator();this._i=2;break;case 2:this._i=1;if(this._g.moveNext()){this._e=this._g.current();if(this._e.b().e(this._b)==this._k){this._c=this._e;this._i=3;return true}this._i=3;break}this._l();break;case 3:this._i=4;this._h=this._e.g(this._k,this._b).getEnumerator();this._i=5;break;case 5:this._i=4;if(this._h.moveNext()){this._f=this._h.current();this._c=this._f;this._i=5;return true}this._m();this._i=2;break}}}catch(a){__hasError__=true;throw a}finally{if(__hasError__){this.dispose()}}return false},getEnumerator:function(){var d__;if(this._i==-2){this._i=0;d__=this}else{d__=new $$t.ft(0);d__.___4__this=this.___4__this}d__._k=this.___3__strictElementName;d__._b=this.___3__documentManager;return d__},reset:function(){throw new $$0.r(1)},dispose:function(){switch(this._i){case 1:case 2:case 3:this._l();break;case 4:case 5:try{this._m()}finally{this._l()}break}},current:function(){return this._c},current1:function(){return this._c},$type:new $.ig.Type("UnknownElementCache___GetDescendants__IteratorClass",$.ig.$ot,[$$0.$bx.$type.specialize($$t.$fs.$type),$$0.$bu.$type,$$0.$by.$type.specialize($$t.$fs.$type),$$0.$bv.$type,$$0.$au.$type])},true);$$t.$a.b="InfragisticsWPF4"+".Documents.Core_OPENXML"+".v17.1";$$t.$a.a="Documents Core OpenXml Library for "+"Javascript";$$t.$kc.i=$u(65535);$$t.$kc.a=[8364,129,8218,402,8222,8230,8224,8225,710,8240,352,8249,338,141,381,143,144,8216,8217,8220,8221,8226,8211,8212,732,8482,353,8250,339,157,382,376];$$t.$kd._n=16384;$$t.$kd._o=-1;$$t.$kr.v=" \r\n	";$$t.$kr.s=" \r\n	|,)";$$t.$kr.q=" \r\n	>";$$t.$kr.p=" \r\n	,&|()?+*";$$t.$kr.t=" 	\r\n>";$$t.$ky._ce=" 	\r\n><";$$t.$ky._cv=" 	\r\n=/><";$$t.$ky._cb=" 	\r\n='\"/>";$$t.$ky._cc=" 	\r\n>";$$t.$ky._cd="	\r\n[<>";$$t.$ky._ch=" 	\r\n>";$$t.$ky._cl=" 	\r\n?";$$t.$j4.f="Relationship";$$t.$j4.h="/_rels";$$t.$j4.g=".rels";$$t.$j5._y="Relationship";$$t.$j5._q="http://schemas.openxmlformats.org/package/2006/content-types";$$t.$j5._ab="Types";$$t.$j5._w="Override";$$t.$j5._t="Default";$$t.$j5._p="ContentType";$$t.$j5._x="PartName";$$t.$j5._u="Extension";$$t.$j5._s="/";$$t.$j5._r="[Content_Types].xml";$$t.$j5._aa="/_rels";$$t.$j5._z=".rels";$$t.$j7.d="application/vnd.openxmlformats-package.relationships+xml";$$t.$j7.e="application/xml";$$t.$j7.b="http://schemas.openxmlformats.org/package/2006/content-types";$$t.$j7.i="Types";$$t.$j7.c="Default";$$t.$j7.g="Override";$$t.$j7.a="ContentType";$$t.$j7.h="PartName";$$t.$j7.f="Extension";$$t.$j8.b="Id";$$t.$j8.c="http://schemas.openxmlformats.org/package/2006/relationships";$$t.$j8.d="Relationships";$$t.$j8.e="Relationship";$$t.$j8.f="Target";$$t.$j8.g="TargetMode";$$t.$j8.h="Type";$$t.$j8.i="xml:base";$$t.$j8.a=[$$t.$j8.c];$$t.$ka.r="..";$$t.$ka.t="_rels";$$t.$ka.u=".rels";$$t.$ka.f="/";$$t.$ka.s="rId";$$t.$ka.l="application/xml";$$t.$ka.af=8;$$t.$ka.z=null;$$t.$ka.ab=null;$$t.$ka.ad=null;$$t.$ka.x=null;$$t.$ka.v=null;$$t.$gz.p=0;$$t.$gz.o=20116800;$$t.$fp._a5="http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink";$$t.$fp._a4="http://purl.oclc.org/ooxml/officeDocument/relationships/hyperlink";$$t.$fp._a6="rId";$$t.$fr.a=new $$t.fr(0);$$t.$fv.ac=1e3;$$t.$gd.a=new $$t.gd(0);$$t.$gk.o=-54e5;$$t.$gk.n=54e5;$$t.$gq.a=new $$t.gq(0);$$t.$gp.a=new $$t.gp;$$t.$ib.a=new $$t.ib(0);$$t.$g0.a=new $$t.g0(0);$$t.$g2.a=new $$t.g2(1,false);$$t.$g2.c=new $$t.g2(1,true);$$t.$h7.a=new $$t.h7(1,false);$$t.$h7.e=new $$t.h7(1,true);$$t.$h8.a=new $$t.h8(1,false);$$t.$h8.b=new $$t.h8(1,true);$$t.$ia.a=new $$t.ia(0);$$t.$ic.a=new $$t.ic(0);$$t.$id.a=new $$t.id(0);$$t.$i7.r="/xl/activeX.bin";$$t.$i7.s="application/vnd.ms-office.activeX";$$t.$i7.u="http://schemas.microsoft.com/office/2006/relationships/activeXControlBinary";$$t.$i7.t="http://schemas.microsoft.com/office/2006/relationships/activeXControlBinary";$$t.$i8.r="/xl/activeX.xml";$$t.$i8.s="application/vnd.ms-office.activeX+xml";$$t.$i8.u="http://schemas.openxmlformats.org/officeDocument/2006/relationships/control";$$t.$i8.t="http://purl.oclc.org/ooxml/officeDocument/relationships/control";$$t.$jm.x="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image";$$t.$jm.w="http://purl.oclc.org/ooxml/officeDocument/relationships/image";$$t.$i9.ah="image/bmp";$$t.$i9.ae="/xl/media/image.bmp";$$t.$i9.af="/ppt/media/image.bmp";$$t.$i9.ag="/word/media/image.bmp";$$t.$i9.ab="/xl/media/image.dib";$$t.$i9.ac="/ppt/media/image.dib";$$t.$i9.ad="/word/media/image.dib";$$t.$i9.y=new $$t.i9(false);$$t.$i9.z=new $$t.i9(true);$$t.$jx.ao="xmlns";$$t.$jx.an="http://www.w3.org/2000/xmlns/";$$t.$jx.ap="/";$$t.$jx.aj="/";$$t.$ja.a1="application/vnd.openxmlformats-package.core-properties+xml";$$t.$ja.a2="/docProps/core.xml";$$t.$ja.a4="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties";$$t.$ja.a3="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties";$$t.$jb.r="/customXml/item.xml";$$t.$jb.s="application/xml";$$t.$jb.u="http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml";$$t.$jb.t="http://purl.oclc.org/ooxml/officeDocument/relationships/customXml";$$t.$jc.r="/customXml/itemProps.xml";$$t.$jc.s="application/vnd.openxmlformats-officedocument.customXmlProperties+xml";$$t.$jc.u="http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps";$$t.$jc.t="http://purl.oclc.org/ooxml/officeDocument/relationships/customXmlProps";$$t.$jd.a1="application/vnd.ms-office.DrsDownRev+xml";$$t.$jd.a2="/drs/downrev.xml";$$t.$jd.a3="http://schemas.microsoft.com/office/2006/relationships/downRev";$$t.$jf.a=new $$t.jf;$$t.$jg.ac="image/x-emf";$$t.$jg.z="/xl/media/image.emf";$$t.$jg.aa="/ppt/media/image.emf";$$t.$jg.ab="/word/media/image.emf";$$t.$jg.y=new $$t.jg;$$t.$jh.a1="application/vnd.openxmlformats-officedocument.extended-properties+xml";$$t.$jh.a2="/docProps/app.xml";$$t.$jh.a4="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties";$$t.$jh.a3="http://purl.oclc.org/ooxml/officeDocument/relationships/extendedProperties";$$t.$ji.a2="application/xml";$$t.$jj.a4="/customUI/customUI.xml";$$t.$jj.a5="http://schemas.microsoft.com/office/2006/relationships/ui/extensibility";$$t.$jj.a3=new $$t.jj;$$t.$jk.a4="/customUI/customUI14.xml";
$$t.$jk.a5="http://schemas.microsoft.com/office/2007/relationships/ui/extensibility";$$t.$jk.a3=new $$t.jk;$$t.$jl.ac="image/gif";$$t.$jl.z="/xl/media/image.gif";$$t.$jl.aa="/ppt/media/image.gif";$$t.$jl.ab="/word/media/image.gif";$$t.$jl.y=new $$t.jl;$$t.$jn.ac="image/jpeg";$$t.$jn.z="/xl/media/image.jpeg";$$t.$jn.aa="/ppt/media/image.jpeg";$$t.$jn.ab="/word/media/image.jpeg";$$t.$jn.y=new $$t.jn;$$t.$jp.ac="image/png";$$t.$jp.z="/xl/media/image.png";$$t.$jp.aa="/ppt/media/image.png";$$t.$jp.ab="/word/media/image.png";$$t.$jp.y=new $$t.jp;$$t.$jq.a2="application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings";$$t.$jq.a3="application/vnd.openxmlformats-officedocument.wordprocessingml.printerSettings";$$t.$jq.a1="/printerSettings/printerSettings.bin";$$t.$jq.a5="http://schemas.openxmlformats.org/officeDocument/2006/relationships/printerSettings";$$t.$jq.a4="http://purl.oclc.org/ooxml/officeDocument/relationships/printerSettings";$$t.$js.a5="application/vnd.openxmlformats-officedocument.theme+xml";$$t.$js.a2="/xl/theme/theme.xml";$$t.$js.a3="/word/theme/theme.xml";$$t.$js.a4="/theme/theme/theme.xml";$$t.$js.a7="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme";$$t.$js.a6="http://purl.oclc.org/ooxml/officeDocument/relationships/theme";$$t.$jt.ac="image/tiff";$$t.$jt.z="/xl/media/image.tiff";$$t.$jt.aa="/ppt/media/image.tiff";$$t.$jt.ab="/word/media/image.tiff";$$t.$jt.y=new $$t.jt;$$t.$ju.r="application/vnd.ms-office.vbaProject";$$t.$ju.s="/xl/vbaProject.bin";$$t.$ju.t="/word/vbaProject.bin";$$t.$ju.u="http://schemas.microsoft.com/office/2006/relationships/vbaProject";$$t.$jv.a5="application/vnd.openxmlformats-officedocument.vmlDrawing";$$t.$jv.a2="/xl/drawings/vmlDrawing.vml";$$t.$jv.a3="/word/drawings/vmlDrawing.vml";$$t.$jv.a4="/theme/drawings/vmlDrawing.vml";$$t.$jv.a6="http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing";$$t.$jw.ac="image/x-wmf";$$t.$jw.z="/xl/media/image.wmf";$$t.$jw.aa="/ppt/media/image.wmf";$$t.$jw.ab="/word/media/image.wmf";$$t.$jw.y=new $$t.jw;$$t.$i4.a=[" ","\r","\n","	"];$$t.$ii.au="http://schemas.openxmlformats.org/package/2006/metadata/core-properties";$$t.$ii.ao="cp";$$t.$ii.ap=$$t.$ii.au+"/category";$$t.$ii.aq=$$t.$ii.au+"/contentStatus";$$t.$ii.ar=$$t.$ii.au+"/coreProperties";$$t.$ii.as=$$t.$ii.au+"/keywords";$$t.$ii.at=$$t.$ii.au+"/lastModifiedBy";$$t.$ii.av=$$t.$ii.au+"/revision";$$t.$ii.aw=$$t.$ii.au+"/version";$$t.$ii.an=new $$t.ii;$$t.$ij.ap="http://purl.org/dc/dcmitype/";$$t.$ij.ao="dcmitype";$$t.$ij.an=new $$t.ij;$$t.$ik.ar="http://purl.org/dc/elements/1.1/";$$t.$ik.ao="dc";$$t.$ik.ap="http://purl.org/dc/elements/1.1/"+"creator";$$t.$ik.aq="http://purl.org/dc/elements/1.1/"+"description";$$t.$ik.as="http://purl.org/dc/elements/1.1/"+"subject";$$t.$ik.at="http://purl.org/dc/elements/1.1/"+"title";$$t.$ik.an=new $$t.ik;$$t.$il.ar="http://purl.org/dc/terms/";$$t.$il.ao="dcterms";$$t.$il.ap="http://purl.org/dc/terms/"+"created";$$t.$il.aq="http://purl.org/dc/terms/"+"modified";$$t.$il.as="http://purl.org/dc/terms/"+"W3CDTF";$$t.$il.an=new $$t.il;$$t.$im.ap="http://schemas.microsoft.com/office/drawing/2010/main";$$t.$im.ao="a14";$$t.$im.an=new $$t.im;$$t.$io.ao=1;$$t.$io.ar="http://schemas.microsoft.com/office/drawing/2010/slicer";$$t.$io.ap="sle";$$t.$io.as=$$t.$io.ar+"/slicer";$$t.$io.aq="name";$$t.$io.an=new $$t.io;$$t.$ip.ar="http://schemas.openxmlformats.org/drawingml/2006/chart";$$t.$ip.aq="http://purl.oclc.org/ooxml/drawingml/chart";$$t.$ip.ao="c";$$t.$ip.ap=$$t.$ip.aq+"/chart";$$t.$ip.an=new $$t.ip;$$t.$iq.ao=1;$$t.$iq.d2="http://schemas.openxmlformats.org/drawingml/2006/main";$$t.$iq.d1="http://purl.oclc.org/ooxml/drawingml/main";$$t.$iq.ap="a";$$t.$iq.aq=$$t.$iq.d1+"/accent1";$$t.$iq.ar=$$t.$iq.d1+"/accent2";$$t.$iq.as=$$t.$iq.d1+"/accent3";$$t.$iq.at=$$t.$iq.d1+"/accent4";$$t.$iq.au=$$t.$iq.d1+"/accent5";$$t.$iq.av=$$t.$iq.d1+"/accent6";$$t.$iq.ay=$$t.$iq.d1+"/alpha";$$t.$iq.az=$$t.$iq.d1+"/alphaMod";$$t.$iq.a0=$$t.$iq.d1+"/alphaOff";$$t.$iq.a4=$$t.$iq.d1+"/avLst";$$t.$iq.a8=$$t.$iq.d1+"/blip";$$t.$iq.a9=$$t.$iq.d1+"/blipFill";$$t.$iq.ba=$$t.$iq.d1+"/blue";$$t.$iq.bb=$$t.$iq.d1+"/blueMod";$$t.$iq.bc=$$t.$iq.d1+"/blueOff";$$t.$iq.be=$$t.$iq.d1+"/bodyPr";$$t.$iq.bh=$$t.$iq.d1+"/chExt";$$t.$iq.bi=$$t.$iq.d1+"/chOff";$$t.$iq.bj=$$t.$iq.d1+"/clrScheme";$$t.$iq.bl=$$t.$iq.d1+"/comp";$$t.$iq.bn=$$t.$iq.d1+"/cs";$$t.$iq.bp=$$t.$iq.d1+"/custClr";$$t.$iq.bq=$$t.$iq.d1+"/custClrLst";$$t.$iq.bw=$$t.$iq.d1+"/dk1";$$t.$iq.bx=$$t.$iq.d1+"/dk2";$$t.$iq.bz=$$t.$iq.d1+"/ea";$$t.$iq.b1=$$t.$iq.d1+"/effectRef";$$t.$iq.b4=$$t.$iq.d1+"/ext";$$t.$iq.b5=$$t.$iq.d1+"/extLst";$$t.$iq.b6=$$t.$iq.d1+"/extraClrScheme";$$t.$iq.b7=$$t.$iq.d1+"/extraClrSchemeLst";$$t.$iq.b8=$$t.$iq.d1+"/fillRect";$$t.$iq.b9=$$t.$iq.d1+"/fillRef";$$t.$iq.cd=$$t.$iq.d1+"/fmtScheme";$$t.$iq.ce=$$t.$iq.d1+"/folHlink";$$t.$iq.cf=$$t.$iq.d1+"/font";$$t.$iq.ch=$$t.$iq.d1+"/fontRef";$$t.$iq.ci=$$t.$iq.d1+"/fontScheme";$$t.$iq.cl=$$t.$iq.d1+"/gd";$$t.$iq.cm=$$t.$iq.d1+"/graphic";$$t.$iq.cn=$$t.$iq.d1+"/graphicData";$$t.$iq.co=$$t.$iq.d1+"/graphicFrameLocks";$$t.$iq.cp=$$t.$iq.d1+"/gray";$$t.$iq.cq=$$t.$iq.d1+"/green";$$t.$iq.cr=$$t.$iq.d1+"/greenMod";$$t.$iq.cs=$$t.$iq.d1+"/greenOff";$$t.$iq.ct=$$t.$iq.d1+"/grpFill";$$t.$iq.cv=$$t.$iq.d1+"/headEnd";$$t.$iq.cz=$$t.$iq.d1+"/hlink";$$t.$iq.c0=$$t.$iq.d1+"/hlinkClick";$$t.$iq.c2=$$t.$iq.d1+"/hue";$$t.$iq.c3=$$t.$iq.d1+"/hueMod";$$t.$iq.c4=$$t.$iq.d1+"/hueOff";$$t.$iq.c9=$$t.$iq.d1+"/inv";$$t.$iq.di=$$t.$iq.d1+"/latin";$$t.$iq.dm=$$t.$iq.d1+"/ln";$$t.$iq.dn=$$t.$iq.d1+"/lnRef";$$t.$iq.dp=$$t.$iq.d1+"/lstStyle";$$t.$iq.dq=$$t.$iq.d1+"/lt1";$$t.$iq.dr=$$t.$iq.d1+"/lt2";$$t.$iq.ds=$$t.$iq.d1+"/lum";$$t.$iq.dt=$$t.$iq.d1+"/lumMod";$$t.$iq.du=$$t.$iq.d1+"/lumOff";$$t.$iq.dw=$$t.$iq.d1+"/majorFont";$$t.$iq.dz=$$t.$iq.d1+"/minorFont";$$t.$iq.ea=$$t.$iq.d1+"/noFill";$$t.$iq.ek=$$t.$iq.d1+"/objectDefaults";$$t.$iq.el=$$t.$iq.d1+"/off";$$t.$iq.em=$$t.$iq.d1+"/p";$$t.$iq.eo=$$t.$iq.d1+"/picLocks";$$t.$iq.eq=$$t.$iq.d1+"/pPr";$$t.$iq.es=$$t.$iq.d1+"/prstGeom";$$t.$iq.et=$$t.$iq.d1+"/r";$$t.$iq.ev=$$t.$iq.d1+"/red";$$t.$iq.ew=$$t.$iq.d1+"/redMod";$$t.$iq.ex=$$t.$iq.d1+"/redOff";$$t.$iq.e1=$$t.$iq.d1+"/rPr";$$t.$iq.e4=$$t.$iq.d1+"/sat";$$t.$iq.e5=$$t.$iq.d1+"/satMod";$$t.$iq.e6=$$t.$iq.d1+"/satOff";$$t.$iq.e7=$$t.$iq.d1+"/schemeClr";$$t.$iq.e9=$$t.$iq.d1+"/shade";$$t.$iq.fc=$$t.$iq.d1+"/solidFill";$$t.$iq.fg=$$t.$iq.d1+"/spLocks";$$t.$iq.fh=$$t.$iq.d1+"/srcRect";$$t.$iq.fi=$$t.$iq.d1+"/srgbClr";$$t.$iq.fj=$$t.$iq.d1+"/stretch";$$t.$iq.fn=$$t.$iq.d1+"/sysClr";$$t.$iq.fp=$$t.$iq.d1+"/t";$$t.$iq.fr=$$t.$iq.d1+"/tailEnd";$$t.$iq.ft=$$t.$iq.d1+"/theme";$$t.$iq.fu=$$t.$iq.d1+"/themeElements";$$t.$iq.fv=$$t.$iq.d1+"/themeManager";$$t.$iq.fx=$$t.$iq.d1+"/tint";$$t.$iq.gd=$$t.$iq.d1+"/xfrm";$$t.$iq.aw="action";$$t.$iq.ax="algn";$$t.$iq.a1="altLang";$$t.$iq.a2="anchor";$$t.$iq.a3="anchorCtr";$$t.$iq.a5="b";$$t.$iq.a6="baseline";$$t.$iq.a7="bIns";$$t.$iq.bd="bmk";$$t.$iq.bf="cap";$$t.$iq.bg="charset";$$t.$iq.bk="cmpd";$$t.$iq.bm="compatLnSpc";$$t.$iq.bo="cstate";$$t.$iq.br="cx";$$t.$iq.bs="cy";$$t.$iq.bt="defTabSz";$$t.$iq.bu="descr";$$t.$iq.bv="dirty";$$t.$iq.by="dpi";$$t.$iq.b0="eaLnBrk";$$t.$iq.b2="endSnd";$$t.$iq.b3="err";$$t.$iq.ca="flipH";$$t.$iq.cb="flipV";$$t.$iq.cc="fmla";$$t.$iq.cg="fontAlgn";$$t.$iq.cj="forceAA";$$t.$iq.ck="fromWordArt";$$t.$iq.cu="hangingPunct";$$t.$iq.cw="hidden";$$t.$iq.cx="highlightClick";$$t.$iq.cy="history";$$t.$iq.c1="horzOverflow";$$t.$iq.c5="i";$$t.$iq.c6="id";$$t.$iq.c7="idx";$$t.$iq.c8="indent";$$t.$iq.da="invalidUrl";$$t.$iq.db="kern";$$t.$iq.dc="kumimoji";$$t.$iq.dd="kx";$$t.$iq.de="ky";$$t.$iq.df="l";$$t.$iq.dg="lang";$$t.$iq.dh="lastClr";$$t.$iq.dj="latinLnBrk";$$t.$iq.dk="len";$$t.$iq.dl="lIns";$$t.$iq.dv="lvl";$$t.$iq.dx="marL";$$t.$iq.dy="marR";$$t.$iq.d0="name";$$t.$iq.d3="noAdjustHandles";$$t.$iq.d4="noChangeArrowheads";$$t.$iq.d5="noChangeAspect";$$t.$iq.d6="noChangeShapeType";$$t.$iq.d7="noCrop";$$t.$iq.d8="noDrilldown";$$t.$iq.d9="noEditPoints";$$t.$iq.eb="noGrp";$$t.$iq.ec="noMove";$$t.$iq.ed="noProof";$$t.$iq.ee="noResize";$$t.$iq.ef="normalizeH";$$t.$iq.eg="noRot";$$t.$iq.eh="noSelect";$$t.$iq.ei="noTextEdit";$$t.$iq.ej="numCol";$$t.$iq.en="panose";$$t.$iq.ep="pitchFamily";$$t.$iq.er="prst";$$t.$iq.eu="r";$$t.$iq.ey="rIns";$$t.$iq.ez="rot";$$t.$iq.e0="rotWithShape";$$t.$iq.e2="rtl";$$t.$iq.e3="rtlCol";$$t.$iq.e8="script";$$t.$iq.fa="smtClean";$$t.$iq.fb="smtId";$$t.$iq.fd="spc";$$t.$iq.fe="spcCol";$$t.$iq.ff="spcFirstLastPara";$$t.$iq.fk="strike";$$t.$iq.fl="sx";$$t.$iq.fm="sy";$$t.$iq.fo="sz";$$t.$iq.fq="t";$$t.$iq.fs="tgtFrame";$$t.$iq.fw="tIns";$$t.$iq.fy="title";$$t.$iq.fz="tooltip";$$t.$iq.f0="tx";$$t.$iq.f1="ty";$$t.$iq.f2="type";$$t.$iq.f3="typeface";$$t.$iq.f4="u";$$t.$iq.f5="upright";$$t.$iq.f6="uri";$$t.$iq.f7="val";$$t.$iq.f8="vert";$$t.$iq.f9="vertOverflow";$$t.$iq.ga="w";$$t.$iq.gb="wrap";$$t.$iq.gc="x";$$t.$iq.ge="y";$$t.$iq.an=new $$t.iq;$$t.$ir.ao="bwMode";$$t.$ir.ax="dpi";$$t.$ir.az="flipH";$$t.$ir.a0="flipV";$$t.$ir.a1="fLocksText";$$t.$ir.a2="fPublished";$$t.$ir.a7="id";$$t.$ir.a8="idx";$$t.$ir.a9="macro";$$t.$ir.bc="noAdjustHandles";$$t.$ir.bd="noChangeArrowheads";$$t.$ir.be="noChangeAspect";$$t.$ir.bf="noChangeShapeType";$$t.$ir.bg="noEditPoints";$$t.$ir.bh="noGrp";$$t.$ir.bi="noMove";$$t.$ir.bj="noResize";$$t.$ir.bk="noRot";$$t.$ir.bl="noSelect";$$t.$ir.bm="noUngrp";$$t.$ir.bt="preferRelativeResize";$$t.$ir.bu="rot";$$t.$ir.bv="rotWithShape";$$t.$ir.b0="textlink";$$t.$ir.b2="txBox";$$t.$is.ao="xml";$$t.$is.an=new $$t.is;$$t.$it.ar="http://schemas.infragistics.com/officeExtensions";$$t.$it.ao="ig";$$t.$it.ap=$$t.$it.ar+"/isSupported";$$t.$it.aq=$$t.$it.ar+"/listId";$$t.$it.as=$$t.$it.ar+"/nodeId";$$t.$it.at=$$t.$it.ar+"/unclosedParagraph";$$t.$it.an=new $$t.it;$$t.$iu.at="http://schemas.openxmlformats.org/markup-compatibility/2006";$$t.$iu.ao="mc";$$t.$iu.ap=$$t.$iu.at+"/AlternateContent";$$t.$iu.aq=$$t.$iu.at+"/Choice";$$t.$iu.ar=$$t.$iu.at+"/Fallback";$$t.$iu.as=$$t.$iu.at+"/Ignorable";$$t.$iu.au="Requires";$$t.$iu.an=new $$t.iu;$$t.$iv.a1="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes";$$t.$iv.a0="http://purl.oclc.org/ooxml/officeDocument/docPropsVTypes";$$t.$iv.aq="vt";$$t.$iv.at=$$t.$iv.a0+"/cy";$$t.$iv.ao=$$t.$iv.a0+"/decimal";$$t.$iv.au=$$t.$iv.a0+"/i1";$$t.$iv.av=$$t.$iv.a0+"/i2";$$t.$iv.aw=$$t.$iv.a0+"/i4";$$t.$iv.ax=$$t.$iv.a0+"/i8";$$t.$iv.ap=$$t.$iv.a0+"/int";$$t.$iv.a2=$$t.$iv.a0+"/r4";$$t.$iv.a3=$$t.$iv.a0+"/r8";$$t.$iv.a5=$$t.$iv.a0+"/ui1";$$t.$iv.a6=$$t.$iv.a0+"/ui2";$$t.$iv.a7=$$t.$iv.a0+"/ui4";$$t.$iv.a8=$$t.$iv.a0+"/ui8";$$t.$iv.ar=$$t.$iv.a0+"/uint";$$t.$iv.ay=$$t.$iv.a0+"/lpstr";$$t.$iv.az=$$t.$iv.a0+"/lpwstr";$$t.$iv.a9=$$t.$iv.a0+"/variant";$$t.$iv.ba=$$t.$iv.a0+"/vector";$$t.$iv.as="baseType";$$t.$iv.a4="size";$$t.$iv.an=new $$t.iv;$$t.$iz.a4="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties";$$t.$iz.a3="http://purl.oclc.org/ooxml/officeDocument/extendedProperties";$$t.$iz.ao=null;$$t.$iz.ap=$$t.$iz.a3+"/Application";$$t.$iz.aq=$$t.$iz.a3+"/AppVersion";$$t.$iz.ar=$$t.$iz.a3+"/Characters";$$t.$iz.as=$$t.$iz.a3+"/CharactersWithSpaces";$$t.$iz.at=$$t.$iz.a3+"/Company";$$t.$iz.au=$$t.$iz.a3+"/DocSecurity";$$t.$iz.av=$$t.$iz.a3+"/HeadingPairs";$$t.$iz.aw=$$t.$iz.a3+"/HiddenSlides";$$t.$iz.ax=$$t.$iz.a3+"/HyperlinkBase";$$t.$iz.ay=$$t.$iz.a3+"/HyperlinksChanged";$$t.$iz.az=$$t.$iz.a3+"/Lines";$$t.$iz.a0=$$t.$iz.a3+"/LinksUpToDate";$$t.$iz.a1=$$t.$iz.a3+"/Manager";$$t.$iz.a2=$$t.$iz.a3+"/MMClips";$$t.$iz.a5=$$t.$iz.a3+"/Notes";$$t.$iz.a6=$$t.$iz.a3+"/Pages";$$t.$iz.a7=$$t.$iz.a3+"/Paragraphs";$$t.$iz.a9=$$t.$iz.a3+"/Properties";$$t.$iz.a8=$$t.$iz.a3+"/PresentationFormat";$$t.$iz.ba=$$t.$iz.a3+"/ScaleCrop";$$t.$iz.bb=$$t.$iz.a3+"/SharedDoc";$$t.$iz.bc=$$t.$iz.a3+"/Slides";$$t.$iz.bd=$$t.$iz.a3+"/Template";$$t.$iz.be=$$t.$iz.a3+"/TitlesOfParts";$$t.$iz.bf=$$t.$iz.a3+"/TotalTime";$$t.$iz.bg=$$t.$iz.a3+"/Words";$$t.$iz.an=new $$t.iz;$$t.$i0.au="http://schemas.openxmlformats.org/officeDocument/2006/relationships";$$t.$i0.at="http://purl.oclc.org/ooxml/officeDocument/relationships";$$t.$i0.ao="r";$$t.$i0.ap=$$t.$i0.at+"/embed";$$t.$i0.aq=$$t.$i0.at+"/href";$$t.$i0.ar=$$t.$i0.at+"/id";$$t.$i0.as=$$t.$i0.at+"/link";$$t.$i0.av=$$t.$i0.at+"/pict";$$t.$i0.an=new $$t.i0;$$t.$i1.bu="urn:schemas-microsoft-com:office:office";$$t.$i1.ap="o";$$t.$i1.br="urn:schemas-microsoft-com:office:office"+"/idmap";$$t.$i1.ao="urn:schemas-microsoft-com:office:office"+"/lock";$$t.$i1.b6="urn:schemas-microsoft-com:office:office"+"/shapelayout";$$t.$i1.aq="adjusthandles";$$t.$i1.au="aspectratio";$$t.$i1.ba="cropping";$$t.$i1.bb="data";$$t.$i1.bk="grouping";$$t.$i1.b0="position";$$t.$i1.b4="rotation";$$t.$i1.b5="selection";$$t.$i1.b7="shapetype";$$t.$i1.cb="text";$$t.$i1.cd="ungrouping";$$t.$i1.cg="verticies";$$t.$i1.ar="urn:schemas-microsoft-com:office:office"+"/allowincell";$$t.$i1.at="urn:schemas-microsoft-com:office:office"+"/althref";$$t.$i1.as="urn:schemas-microsoft-com:office:office"+"/allowoverlap";$$t.$i1.a1="urn:schemas-microsoft-com:office:office"+"/bwmode";$$t.$i1.a2="urn:schemas-microsoft-com:office:office"+"/bwnormal";$$t.$i1.a3="urn:schemas-microsoft-com:office:office"+"/bwpure";$$t.$i1.av="urn:schemas-microsoft-com:office:office"+"/borderbottomcolor";$$t.$i1.aw="urn:schemas-microsoft-com:office:office"+"/borderleftcolor";$$t.$i1.ax="urn:schemas-microsoft-com:office:office"+"/borderrightcolor";$$t.$i1.ay="urn:schemas-microsoft-com:office:office"+"/bordertopcolor";$$t.$i1.az="urn:schemas-microsoft-com:office:office"+"/bullet";$$t.$i1.a0="urn:schemas-microsoft-com:office:office"+"/button";$$t.$i1.a4="urn:schemas-microsoft-com:office:office"+"/clip";$$t.$i1.a5="urn:schemas-microsoft-com:office:office"+"/cliptowrap";$$t.$i1.a6="urn:schemas-microsoft-com:office:office"+"/connectangles";$$t.$i1.a7="urn:schemas-microsoft-com:office:office"+"/connectlocs";$$t.$i1.a8="urn:schemas-microsoft-com:office:office"+"/connectortype";$$t.$i1.a9="urn:schemas-microsoft-com:office:office"+"/connecttype";$$t.$i1.bc="urn:schemas-microsoft-com:office:office"+"/detectmouseclick";$$t.$i1.bd="urn:schemas-microsoft-com:office:office"+"/dgmlayout";$$t.$i1.be="urn:schemas-microsoft-com:office:office"+"/dgmlayoutmru";$$t.$i1.bf="urn:schemas-microsoft-com:office:office"+"/dgmnodekind";$$t.$i1.bg="urn:schemas-microsoft-com:office:office"+"/doubleclicknotify";$$t.$i1.bh="urn:schemas-microsoft-com:office:office"+"/extrusionok";$$t.$i1.bi="urn:schemas-microsoft-com:office:office"+"/forcedash";$$t.$i1.bj="urn:schemas-microsoft-com:office:office"+"/gfxdata";$$t.$i1.bl="urn:schemas-microsoft-com:office:office"+"/hr";$$t.$i1.bm="urn:schemas-microsoft-com:office:office"+"/hralign";$$t.$i1.bn="urn:schemas-microsoft-com:office:office"+"/href";$$t.$i1.bo="urn:schemas-microsoft-com:office:office"+"/hrnoshade";$$t.$i1.bp="urn:schemas-microsoft-com:office:office"+"/hrpct";$$t.$i1.bq="urn:schemas-microsoft-com:office:office"+"/hrstd";$$t.$i1.bs="urn:schemas-microsoft-com:office:office"+"/insetmode";$$t.$i1.bt="urn:schemas-microsoft-com:office:office"+"/movie";$$t.$i1.bv="urn:schemas-microsoft-com:office:office"+"/ole";$$t.$i1.bw="urn:schemas-microsoft-com:office:office"+"/oleicon";$$t.$i1.bx="urn:schemas-microsoft-com:office:office"+"/oleid";$$t.$i1.by="urn:schemas-microsoft-com:office:office"+"/oned";$$t.$i1.bz="urn:schemas-microsoft-com:office:office"+"/opacity2";$$t.$i1.b1="urn:schemas-microsoft-com:office:office"+"/preferrelative";$$t.$i1.b2="urn:schemas-microsoft-com:office:office"+"/regroupid";$$t.$i1.b3="urn:schemas-microsoft-com:office:office"+"/relid";$$t.$i1.b8="urn:schemas-microsoft-com:office:office"+"/singleclick";$$t.$i1.b9="urn:schemas-microsoft-com:office:office"+"/spid";$$t.$i1.ca="urn:schemas-microsoft-com:office:office"+"/spt";$$t.$i1.cc="urn:schemas-microsoft-com:office:office"+"/title";$$t.$i1.ce="urn:schemas-microsoft-com:office:office"+"/userdrawn";$$t.$i1.cf="urn:schemas-microsoft-com:office:office"+"/userhidden";$$t.$i1.an=new $$t.i1;$$t.$i2.cj="urn:schemas-microsoft-com:vml";$$t.$i2.ao="v";$$t.$i2.at="urn:schemas-microsoft-com:vml"+"/arc";$$t.$i2.aw="urn:schemas-microsoft-com:vml"+"/background";$$t.$i2.bq="urn:schemas-microsoft-com:vml"+"/fill";$$t.$i2.b7="urn:schemas-microsoft-com:vml"+"/imagedata";$$t.$i2.cq="urn:schemas-microsoft-com:vml"+"/path";$$t.$i2.cx="urn:schemas-microsoft-com:vml"+"/shadow";$$t.$i2.cz="urn:schemas-microsoft-com:vml"+"/shape";$$t.$i2.c0="urn:schemas-microsoft-com:vml"+"/shapetype";$$t.$i2.c7="urn:schemas-microsoft-com:vml"+"/stroke";$$t.$i2.df="urn:schemas-microsoft-com:vml"+"/textbox";$$t.$i2.ap="adj";$$t.$i2.aq="alignshape";$$t.$i2.as="angle";$$t.$i2.au="arrowok";$$t.$i2.av="aspect";$$t.$i2.ar="alt";$$t.$i2.ax="bilevel";$$t.$i2.ay="blacklevel";$$t.$i2.az="borderbottomcolor";$$t.$i2.a0="borderleftcolor";$$t.$i2.a1="borderrightcolor";$$t.$i2.a2="bordertopcolor";$$t.$i2.a3="bwmode";$$t.$i2.a4="bwnormal";$$t.$i2.a5="bwpure";$$t.$i2.a6="chromakey";$$t.$i2.a7="class";$$t.$i2.a8="color";$$t.$i2.a9="color2";$$t.$i2.ba="colors";$$t.$i2.bb="coordorigin";$$t.$i2.bc="coordsize";$$t.$i2.bd="cropbottom";$$t.$i2.be="cropleft";$$t.$i2.bf="cropright";$$t.$i2.bg="croptop";$$t.$i2.bh="dashstyle";$$t.$i2.bi="embosscolor";$$t.$i2.bj="endAngle";$$t.$i2.bk="endarrow";$$t.$i2.bl="endarrowlength";$$t.$i2.bm="endarrowwidth";$$t.$i2.bn="endcap";$$t.$i2.bo="equationxml";$$t.$i2.br="fillcolor";$$t.$i2.bs="filled";$$t.$i2.bt="fillok";$$t.$i2.bu="filltype";$$t.$i2.bv="focus";$$t.$i2.bw="focusposition";$$t.$i2.bx="focussize";$$t.$i2.by="gain";$$t.$i2.bz="gamma";$$t.$i2.b0="gfxdata";$$t.$i2.b1="gradientshapeok";$$t.$i2.b2="grayscale";$$t.$i2.b3="href";$$t.$i2.b4="id";$$t.$i2.b5="imagealignshape";$$t.$i2.b6="imageaspect";$$t.$i2.b8="imagesize";$$t.$i2.b9="inset";$$t.$i2.ca="insetpen";$$t.$i2.cb="insetpenok";$$t.$i2.cc="joinstyle";$$t.$i2.cd="limo";$$t.$i2.ce="linestyle";$$t.$i2.cf="master";$$t.$i2.cg="matrix";$$t.$i2.ch="method";$$t.$i2.ci="miterlimit";$$t.$i2.ck="obscured";$$t.$i2.cl="offset";$$t.$i2.cm="offset2";$$t.$i2.cn="on";$$t.$i2.co="opacity";$$t.$i2.cp="origin";$$t.$i2.cr="path";$$t.$i2.cs="position";$$t.$i2.ct="print";$$t.$i2.cu="recolor";$$t.$i2.cv="recolortarget";$$t.$i2.cw="rotate";$$t.$i2.cy="shadowok";$$t.$i2.c1="size";$$t.$i2.c2="src";$$t.$i2.c3="startAngle";$$t.$i2.c4="startarrow";$$t.$i2.c5="startarrowlength";$$t.$i2.c6="startarrowwidth";$$t.$i2.c8="strokecolor";$$t.$i2.c9="stroked";$$t.$i2.da="strokeok";$$t.$i2.db="strokeweight";$$t.$i2.dc="style";$$t.$i2.dd="target";$$t.$i2.de="targetscreensize";$$t.$i2.dg="textboxrect";$$t.$i2.dh="textpathok";$$t.$i2.di="title";$$t.$i2.dj="type";$$t.$i2.dl="weight";$$t.$i2.dm="wrapcoords";$$t.$i2.dk="v";$$t.$i2.bp="urn:schemas-microsoft-com:vml"+"/ext";$$t.$i2.an=new $$t.i2;$$t.$i3.aq="http://www.w3.org/XML/1998/namespace";$$t.$i3.ao="xml";$$t.$i3.ap="http://www.w3.org/XML/1998/namespace"+"/lang";$$t.$i3.ar="http://www.w3.org/XML/1998/namespace"+"/space";$$t.$i3.an=new $$t.i3;$$t.$i6.ap="http://www.w3.org/2001/XMLSchema-instance";$$t.$i6.ao="xsi";$$t.$i6.aq=$$t.$i6.ap+"/type";$$t.$i6.an=new $$t.i6;$$t.$h._bk="http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath";$$t.$h._bj="http://purl.oclc.org/ooxml/officeDocument/relationships/externalLinkPath";$$t.$h._bp="http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink";$$t.$h._bo="http://purl.oclc.org/ooxml/officeDocument/relationships/hyperlink";$$t.$h._br="http://schemas.openxmlformats.org/officeDocument/2006/relationships/oleObject";$$t.$h._bq="http://purl.oclc.org/ooxml/officeDocument/relationships/oleObject";$$t.$az.a1="application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml";$$t.$az.a2="/xl/calcChain.xml";$$t.$az.a4="http://schemas.openxmlformats.org/officeDocument/2006/relationships/calcChain";$$t.$az.a3="http://purl.oclc.org/ooxml/officeDocument/relationships/calcChain";$$t.$a0.r="/xl/charts/chart.xml";$$t.$a0.s="application/vnd.openxmlformats-officedocument.drawingml.chart+xml";$$t.$a0.u="http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart";$$t.$a0.t="http://purl.oclc.org/ooxml/officeDocument/relationships/chart";$$t.$a1.a1="/xl/comments.xml";$$t.$a1.a2="application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml";$$t.$a1.a4="http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments";$$t.$a1.a3="http://purl.oclc.org/ooxml/officeDocument/relationships/comments";$$t.$a2.a1="application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml";$$t.$a2.a2="/xl/connections.xml";$$t.$a2.a4="http://schemas.openxmlformats.org/officeDocument/2006/relationships/connections";$$t.$a2.a3="http://purl.oclc.org/ooxml/officeDocument/relationships/connections";$$t.$a3.r="/xl/ctrlProp.xml";$$t.$a3.s="application/vnd.ms-excel.controlproperties+xml";$$t.$a3.u="http://schemas.openxmlformats.org/officeDocument/2006/relationships/ctrlProp";$$t.$a3.t="http://schemas.openxmlformats.org/officeDocument/2006/relationships/ctrlProp";$$t.$a4.a1="/xl/drawings/drawing.xml";$$t.$a4.a2="application/vnd.openxmlformats-officedocument.drawing+xml";$$t.$a4.a4="http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing";$$t.$a4.a3="http://purl.oclc.org/ooxml/officeDocument/relationships/drawing";$$t.$a5.a1="/xl/externalLinks/externalLink.xml";$$t.$a5.a2="application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml";$$t.$a5.a4="http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink";$$t.$a5.a3="http://purl.oclc.org/ooxml/officeDocument/relationships/externalLink";$$t.$a6.a1="/xl/pivotCache/pivotCacheDefinition.xml";$$t.$a6.a2="application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml";$$t.$a6.a4="http://schemas.openxmlformats.org/officeDocument/2006/relationships/pivotCacheDefinition";$$t.$a6.a3="http://purl.oclc.org/ooxml/officeDocument/relationships/pivotCacheDefinition";$$t.$a7.a1="/xl/pivotCache/pivotCacheDefinition.xml";$$t.$a7.a2="application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml";$$t.$a7.a4="http://schemas.openxmlformats.org/officeDocument/2006/relationships/pivotCacheRecords";$$t.$a7.a3="http://purl.oclc.org/ooxml/officeDocument/relationships/pivotCacheRecords";$$t.$a8.a1="/xl/pivotTables/pivotTable.xml";$$t.$a8.a2="application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml";$$t.$a8.a4="http://schemas.openxmlformats.org/officeDocument/2006/relationships/pivotTable";$$t.$a8.a3="http://purl.oclc.org/ooxml/officeDocument/relationships/pivotTable";$$t.$a9.a1="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml";$$t.$a9.a2="/xl/sharedStrings.xml";$$t.$a9.a4="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings";$$t.$a9.a3="http://purl.oclc.org/ooxml/officeDocument/relationships/sharedStrings";$$t.$ba.a1="/xl/slicerCaches/slicerCache.xml";$$t.$ba.a2="application/vnd.ms-excel.slicerCache+xml";$$t.$ba.a3="http://schemas.microsoft.com/office/2007/relationships/slicerCache";$$t.$bb.a1="/xl/slicers/slicer.xml";$$t.$bb.a2="application/vnd.ms-excel.slicer+xml";$$t.$bb.a3="http://schemas.microsoft.com/office/2007/relationships/slicer";$$t.$bc.a1="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml";$$t.$bc.a2="/xl/styles.xml";$$t.$bc.a4="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles";$$t.$bc.a3="http://purl.oclc.org/ooxml/officeDocument/relationships/styles";$$t.$bd.a1="/xl/tables/table.xml";$$t.$bd.a2="application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml";$$t.$bd.a4="http://schemas.openxmlformats.org/officeDocument/2006/relationships/table";$$t.$bd.a3="http://purl.oclc.org/ooxml/officeDocument/relationships/table";$$t.$be.a2="application/vnd.ms-excel.template.macroEnabled.main+xml";$$t.$be.a3="application/vnd.ms-excel.sheet.macroEnabled.main+xml";$$t.$be.a6="application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml";$$t.$be.a7="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml";$$t.$be.a1="/xl/workbook.xml";$$t.$be.a5="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument";$$t.$be.a4="http://purl.oclc.org/ooxml/officeDocument/relationships/officeDocument";$$t.$bf.a1="/xl/worksheets/sheet.xml";$$t.$bf.a2="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml";$$t.$bf.a4="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet";$$t.$bf.a3="http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet";$$t.$au.dr="http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing";$$t.$au.dq="http://purl.oclc.org/ooxml/drawingml/spreadsheetDrawing";$$t.$au.dp="xdr";$$t.$au.ds=$$t.$au.dq+"/absoluteAnchor";$$t.$au.dt=$$t.$au.dq+"/clientData";$$t.$au.du=$$t.$au.dq+"/col";$$t.$au.dv=$$t.$au.dq+"/colOff";$$t.$au.dy=$$t.$au.dq+"/ext";$$t.$au.d1=$$t.$au.dq+"/from";$$t.$au.d4=$$t.$au.dq+"/oneCellAnchor";$$t.$au.d6=$$t.$au.dq+"/pos";$$t.$au.d7=$$t.$au.dq+"/row";$$t.$au.d8=$$t.$au.dq+"/rowOff";$$t.$au.ea=$$t.$au.dq+"/to";$$t.$au.eb=$$t.$au.dq+"/twoCellAnchor";$$t.$au.ec=$$t.$au.dq+"/wsDr";$$t.$au.dw=$$t.$au.dq+"/cxnSp";$$t.$au.d2=$$t.$au.dq+"/graphicFrame";$$t.$au.d3=$$t.$au.dq+"/grpSp";$$t.$au.d5=$$t.$au.dq+"/pic";$$t.$au.d9=$$t.$au.dq+"/sp";$$t.$au.dx="editAs";$$t.$au.dz="fLocksWithSheet";$$t.$au.d0="fPrintsWithSheet";$$t.$au.dn=new $$t.au;$$t.$av.aq="http://schemas.microsoft.com/office/excel/2006/main";$$t.$av.ao="xm";$$t.$av.ap=$$t.$av.aq+"/f";$$t.$av.ar=$$t.$av.aq+"/sqref";$$t.$av.an=new $$t.av;$$t.$aw.bi="urn:schemas-microsoft-com:office:excel";$$t.$aw.ao="x";$$t.$aw.ap="urn:schemas-microsoft-com:office:excel"+"/Anchor";$$t.$aw.aq="urn:schemas-microsoft-com:office:excel"+"/AutoFill";$$t.$aw.ar="urn:schemas-microsoft-com:office:excel"+"/AutoLine";$$t.$aw.as="urn:schemas-microsoft-com:office:excel"+"/AutoPict";$$t.$aw.at="urn:schemas-microsoft-com:office:excel"+"/AutoScale";$$t.$aw.au="urn:schemas-microsoft-com:office:excel"+"/Camera";$$t.$aw.av="urn:schemas-microsoft-com:office:excel"+"/Cancel";$$t.$aw.aw="urn:schemas-microsoft-com:office:excel"+"/CF";$$t.$aw.ax="urn:schemas-microsoft-com:office:excel"+"/Checked";$$t.$aw.ay="urn:schemas-microsoft-com:office:excel"+"/ClientData";$$t.$aw.az="urn:schemas-microsoft-com:office:excel"+"/ColHidden";$$t.$aw.a0="urn:schemas-microsoft-com:office:excel"+"/Colored";$$t.$aw.a1="urn:schemas-microsoft-com:office:excel"+"/Column";$$t.$aw.a2="urn:schemas-microsoft-com:office:excel"+"/DDE";$$t.$aw.a3="urn:schemas-microsoft-com:office:excel"+"/Default";$$t.$aw.a4="urn:schemas-microsoft-com:office:excel"+"/DefaultSize";$$t.$aw.a5="urn:schemas-microsoft-com:office:excel"+"/Disabled";$$t.$aw.a6="urn:schemas-microsoft-com:office:excel"+"/Dismiss";$$t.$aw.a7="urn:schemas-microsoft-com:office:excel"+"/FirstButton";$$t.$aw.a8="urn:schemas-microsoft-com:office:excel"+"/FmlaLink";$$t.$aw.a9="urn:schemas-microsoft-com:office:excel"+"/FmlaMacro";$$t.$aw.ba="urn:schemas-microsoft-com:office:excel"+"/Help";$$t.$aw.bb="urn:schemas-microsoft-com:office:excel"+"/Horiz";$$t.$aw.bc="urn:schemas-microsoft-com:office:excel"+"/JustLastX";$$t.$aw.be="urn:schemas-microsoft-com:office:excel"+"/LockText";$$t.$aw.bd="urn:schemas-microsoft-com:office:excel"+"/Locked";$$t.$aw.bf="urn:schemas-microsoft-com:office:excel"+"/MapOCX";$$t.$aw.bg="urn:schemas-microsoft-com:office:excel"+"/MoveWithCells";$$t.$aw.bh="urn:schemas-microsoft-com:office:excel"+"/MultiLine";$$t.$aw.bj="urn:schemas-microsoft-com:office:excel"+"/NoThreeD";$$t.$aw.bk="urn:schemas-microsoft-com:office:excel"+"/NoThreeD2";$$t.$aw.bm="urn:schemas-microsoft-com:office:excel"+"/PrintObject";$$t.$aw.bn="urn:schemas-microsoft-com:office:excel"+"/RecalcAlways";$$t.$aw.bo="urn:schemas-microsoft-com:office:excel"+"/Row";$$t.$aw.bp="urn:schemas-microsoft-com:office:excel"+"/RowHidden";$$t.$aw.bq="urn:schemas-microsoft-com:office:excel"+"/SecretEdit";$$t.$aw.br="urn:schemas-microsoft-com:office:excel"+"/SizeWithCells";$$t.$aw.bs="urn:schemas-microsoft-com:office:excel"+"/TextHAlign";$$t.$aw.bt="urn:schemas-microsoft-com:office:excel"+"/TextVAlign";$$t.$aw.bu="urn:schemas-microsoft-com:office:excel"+"/UIObj";$$t.$aw.bx="urn:schemas-microsoft-com:office:excel"+"/VScroll";$$t.$aw.bv="urn:schemas-microsoft-com:office:excel"+"/ValidIds";$$t.$aw.bw="urn:schemas-microsoft-com:office:excel"+"/Visible";$$t.$aw.bl="ObjectType";$$t.$aw.an=new $$t.aw;$$t.$ax.a4="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main";$$t.$ax.ao="x14";$$t.$ax.as=$$t.$ax.a4+"/dataValidation";$$t.$ax.at=$$t.$ax.a4+"/dataValidations";$$t.$ax.az=$$t.$ax.a4+"/formula1";$$t.$ax.a0=$$t.$ax.a4+"/formula2";$$t.$ax.a5=$$t.$ax.a4+"/oleItem";$$t.$ax.a7=$$t.$ax.a4+"/pivotCaches";$$t.$ax.bf=$$t.$ax.a4+"/slicer";$$t.$ax.bg=$$t.$ax.a4+"/slicerCache";$$t.$ax.bh=$$t.$ax.a4+"/slicerCaches";$$t.$ax.bj=$$t.$ax.a4+"/slicerList";$$t.$ax.ap="advise";$$t.$ax.aq="allowBlank";$$t.$ax.ar="count";$$t.$ax.av="disablePrompts";$$t.$ax.aw="error";$$t.$ax.ax="errorStyle";$$t.$ax.ay="errorTitle";$$t.$ax.a1="icon";$$t.$ax.a2="imeMode";$$t.$ax.a3="name";$$t.$ax.a6="operator";$$t.$ax.a9="preferPic";$$t.$ax.ba="prompt";$$t.$ax.bb="promptTitle";$$t.$ax.bc="showDropDown";$$t.$ax.bd="showErrorMessage";$$t.$ax.be="showInputMessage";$$t.$ax.bl="type";$$t.$ax.bm="xWindow";$$t.$ax.bn="yWindow";$$t.$ax.au="{CCE6A557-97BC-4b89-ADB6-D9C93CAAB3DF}";$$t.$ax.bi="{BBE1A952-AA13-448e-AADC-164F8A28A991}";$$t.$ax.bk="{A8765BA9-456A-4dab-B4F3-ACF838C121DE}";$$t.$ax.a8="{876F7934-8845-4945-9796-88D515C7AA90}";$$t.$ax.an=new $$t.ax;$$t.$ay.k1="http://schemas.openxmlformats.org/spreadsheetml/2006/main";$$t.$ay.k0="http://purl.oclc.org/ooxml/spreadsheetml/main";$$t.$ay.b8=null;$$t.$ay.ci=$$t.$ay.k0+"/alignment";$$t.$ay.cn=$$t.$ay.k0+"/anchor";$$t.$ay.cy=$$t.$ay.k0+"/author";$$t.$ay.c0=$$t.$ay.k0+"/authors";$$t.$ay.c4=$$t.$ay.k0+"/autoFilter";$$t.$ay.db=$$t.$ay.k0+"/b";$$t.$ay.df=$$t.$ay.k0+"/bgColor";$$t.$ay.di=$$t.$ay.k0+"/bookViews";$$t.$ay.dj=$$t.$ay.k0+"/border";$$t.$ay.dl=$$t.$ay.k0+"/borders";$$t.$ay.dm=$$t.$ay.k0+"/bottom";$$t.$ay.dp=$$t.$ay.k0+"/brk";$$t.$ay.ds=$$t.$ay.k0+"/c";$$t.$ay.dz=$$t.$ay.k0+"/calcPr";$$t.$ay.d0=$$t.$ay.k0+"/calculatedColumnFormula";$$t.$ay.d3=$$t.$ay.k0+"/cell";$$t.$ay.d6=$$t.$ay.k0+"/cellStyle";$$t.$ay.d7=$$t.$ay.k0+"/cellStyles";$$t.$ay.d8=$$t.$ay.k0+"/cellStyleXfs";$$t.$ay.d9=$$t.$ay.k0+"/cellXfs";$$t.$ay.ee=$$t.$ay.k0+"/cfRule";$$t.$ay.ef=$$t.$ay.k0+"/cfvo";$$t.$ay.en=$$t.$ay.k0+"/col";$$t.$ay.eo=$$t.$ay.k0+"/colBreaks";$$t.$ay.er=$$t.$ay.k0+"/color";$$t.$ay.es=$$t.$ay.k0+"/colorFilter";$$t.$ay.eu=$$t.$ay.k0+"/colors";$$t.$ay.ev=$$t.$ay.k0+"/cols";$$t.$ay.ex=$$t.$ay.k0+"/comment";$$t.$ay.ez=$$t.$ay.k0+"/commentList";$$t.$ay.e0=$$t.$ay.k0+"/comments";$$t.$ay.e3=$$t.$ay.k0+"/condense";$$t.$ay.e4=$$t.$ay.k0+"/conditionalFormatting";$$t.$ay.e7=$$t.$ay.k0+"/control";$$t.$ay.e8=$$t.$ay.k0+"/controlPr";$$t.$ay.e9=$$t.$ay.k0+"/controls";$$t.$ay.fd=$$t.$ay.k0+"/customFilter";$$t.$ay.fe=$$t.$ay.k0+"/customFilters";$$t.$ay.fj=$$t.$ay.k0+"/customSheetView";$$t.$ay.fk=$$t.$ay.k0+"/customSheetViews";$$t.$ay.fm=$$t.$ay.k0+"/customWorkbookView";$$t.$ay.fn=$$t.$ay.k0+"/customWorkbookViews";$$t.$ay.fq=$$t.$ay.k0+"/dataValidation";$$t.$ay.fr=$$t.$ay.k0+"/dataValidations";$$t.$ay.fu=$$t.$ay.k0+"/dateGroupItem";$$t.$ay.f4=$$t.$ay.k0+"/definedName";$$t.$ay.f5=$$t.$ay.k0+"/definedNames";$$t.$ay.ge=$$t.$ay.k0+"/diagonal";$$t.$ay.gj=$$t.$ay.k0+"/dimension";$$t.$ay.gp=$$t.$ay.k0+"/drawing";$$t.$ay.gq=$$t.$ay.k0+"/drawingHF";$$t.$ay.gt=$$t.$ay.k0+"/dxf";$$t.$ay.gv=$$t.$ay.k0+"/dxfs";$$t.$ay.gw=$$t.$ay.k0+"/dynamicFilter";$$t.$ay.gy=$$t.$ay.k0+"/end";$$t.$ay.g5=$$t.$ay.k0+"/evenFooter";$$t.$ay.g6=$$t.$ay.k0+"/evenHeader";$$t.$ay.g7=$$t.$ay.k0+"/ext";$$t.$ay.g8=$$t.$ay.k0+"/extend";$$t.$ay.g9=$$t.$ay.k0+"/externalBook";$$t.$ay.ha=$$t.$ay.k0+"/externalLink";$$t.$ay.hb=$$t.$ay.k0+"/externalReference";$$t.$ay.hc=$$t.$ay.k0+"/externalReferences";$$t.$ay.hd=$$t.$ay.k0+"/extLst";
$$t.$ay.he=$$t.$ay.k0+"/f";$$t.$ay.hf=$$t.$ay.k0+"/family";$$t.$ay.hg=$$t.$ay.k0+"/fgColor";$$t.$ay.hh=$$t.$ay.k0+"/fileSharing";$$t.$ay.hi=$$t.$ay.k0+"/fileVersion";$$t.$ay.hj=$$t.$ay.k0+"/fill";$$t.$ay.hl=$$t.$ay.k0+"/fills";$$t.$ay.hm=$$t.$ay.k0+"/filter";$$t.$ay.ho=$$t.$ay.k0+"/filterColumn";$$t.$ay.hr=$$t.$ay.k0+"/filters";$$t.$ay.hu=$$t.$ay.k0+"/firstFooter";$$t.$ay.hv=$$t.$ay.k0+"/firstHeader";$$t.$ay.h1=$$t.$ay.k0+"/font";$$t.$ay.h3=$$t.$ay.k0+"/fonts";$$t.$ay.h6=$$t.$ay.k0+"/format";$$t.$ay.ib=$$t.$ay.k0+"/formats";$$t.$ay.ic=$$t.$ay.k0+"/formula";$$t.$ay.id=$$t.$ay.k0+"/formula1";$$t.$ay.ie=$$t.$ay.k0+"/formula2";$$t.$ay.ik=$$t.$ay.k0+"/gradientFill";$$t.$ay.is=$$t.$ay.k0+"/headerFooter";$$t.$ay.i4=$$t.$ay.k0+"/horizontal";$$t.$ay.ja=$$t.$ay.k0+"/hyperlink";$$t.$ay.jb=$$t.$ay.k0+"/hyperlinks";$$t.$ay.jc=$$t.$ay.k0+"/i";$$t.$ay.je=$$t.$ay.k0+"/iconFilter";$$t.$ay.jo=$$t.$ay.k0+"/indexedColors";$$t.$ay.b7=$$t.$ay.k0+"/is";$$t.$ay.jz=$$t.$ay.k0+"/left";$$t.$ay.j1=$$t.$ay.k0+"/legacyDrawing";$$t.$ay.j2=$$t.$ay.k0+"/legacyDrawingHF";$$t.$ay.kq=$$t.$ay.k0+"/mergeCell";$$t.$ay.kr=$$t.$ay.k0+"/mergeCells";$$t.$ay.ky=$$t.$ay.k0+"/name";$$t.$ay.k2=$$t.$ay.k0+"/numFmt";$$t.$ay.k4=$$t.$ay.k0+"/numFmts";$$t.$ay.k6=$$t.$ay.k0+"/oddFooter";$$t.$ay.k7=$$t.$ay.k0+"/oddHeader";$$t.$ay.k8=$$t.$ay.k0+"/oleItem";$$t.$ay.k9=$$t.$ay.k0+"/oleItems";$$t.$ay.la=$$t.$ay.k0+"/oleLink";$$t.$ay.le=$$t.$ay.k0+"/outline";$$t.$ay.lj=$$t.$ay.k0+"/outlinePr";$$t.$ay.ll=$$t.$ay.k0+"/pageMargins";$$t.$ay.ln=$$t.$ay.k0+"/pageSetup";$$t.$ay.lo=$$t.$ay.k0+"/pageSetUpPr";$$t.$ay.lp=$$t.$ay.k0+"/pane";$$t.$ay.lv=$$t.$ay.k0+"/patternFill";$$t.$ay.l1=$$t.$ay.k0+"/picture";$$t.$ay.l4=$$t.$ay.k0+"/pivotCache";$$t.$ay.l5=$$t.$ay.k0+"/pivotCaches";$$t.$ay.l6=$$t.$ay.k0+"/pivotTableDefinition";$$t.$ay.mc=$$t.$ay.k0+"/printOptions";$$t.$ay.mi=$$t.$ay.k0+"/protectedRange";$$t.$ay.mj=$$t.$ay.k0+"/protectedRanges";$$t.$ay.mk=$$t.$ay.k0+"/protection";$$t.$ay.mr=$$t.$ay.k0+"/r";$$t.$ay.ne=$$t.$ay.k0+"/rFont";$$t.$ay.ng=$$t.$ay.k0+"/rgbColor";$$t.$ay.nk=$$t.$ay.k0+"/right";$$t.$ay.nn=$$t.$ay.k0+"/row";$$t.$ay.no=$$t.$ay.k0+"/rowBreaks";$$t.$ay.np=$$t.$ay.k0+"/rPr";$$t.$ay.nx=$$t.$ay.k0+"/scheme";$$t.$ay.n0=$$t.$ay.k0+"/selection";$$t.$ay.n5=$$t.$ay.k0+"/sheet";$$t.$ay.n7=$$t.$ay.k0+"/sheetCalcPr";$$t.$ay.n8=$$t.$ay.k0+"/sheetData";$$t.$ay.n9=$$t.$ay.k0+"/sheetDataSet";$$t.$ay.oa=$$t.$ay.k0+"/sheetFormatPr";$$t.$ay.oc=$$t.$ay.k0+"/sheetName";$$t.$ay.od=$$t.$ay.k0+"/sheetNames";$$t.$ay.oe=$$t.$ay.k0+"/sheetPr";$$t.$ay.of=$$t.$ay.k0+"/sheetProtection";$$t.$ay.og=$$t.$ay.k0+"/sheets";$$t.$ay.oh=$$t.$ay.k0+"/sheetView";$$t.$ay.oi=$$t.$ay.k0+"/sheetViews";$$t.$ay.n3=$$t.$ay.k0+"/shadow";$$t.$ay.pd=$$t.$ay.k0+"/si";$$t.$ay.pj=$$t.$ay.k0+"/sortCondition";$$t.$ay.pl=$$t.$ay.k0+"/sortState";$$t.$ay.pp=$$t.$ay.k0+"/sst";$$t.$ay.pq=$$t.$ay.k0+"/start";$$t.$ay.pu=$$t.$ay.k0+"/stop";$$t.$ay.pw=$$t.$ay.k0+"/strike";$$t.$ay.py=$$t.$ay.k0+"/styleSheet";$$t.$ay.p4=$$t.$ay.k0+"/sz";$$t.$ay.p5=$$t.$ay.k0+"/t";$$t.$ay.p7=$$t.$ay.k0+"/tabColor";$$t.$ay.p8=$$t.$ay.k0+"/table";$$t.$ay.qb=$$t.$ay.k0+"/tableColumn";$$t.$ay.qc=$$t.$ay.k0+"/tableColumns";$$t.$ay.qd=$$t.$ay.k0+"/tablePart";$$t.$ay.qe=$$t.$ay.k0+"/tableParts";$$t.$ay.qf=$$t.$ay.k0+"/tableStyle";$$t.$ay.qg=$$t.$ay.k0+"/tableStyleElement";$$t.$ay.qh=$$t.$ay.k0+"/tableStyleInfo";$$t.$ay.qi=$$t.$ay.k0+"/tableStyles";$$t.$ay.qm=$$t.$ay.k0+"/text";$$t.$ay.qw=$$t.$ay.k0+"/top";$$t.$ay.qy=$$t.$ay.k0+"/top10";$$t.$ay.q4=$$t.$ay.k0+"/totalsRowFormula";$$t.$ay.rb=$$t.$ay.k0+"/u";$$t.$ay.rl=$$t.$ay.k0+"/v";$$t.$ay.rp=$$t.$ay.k0+"/vertAlign";$$t.$ay.rq=$$t.$ay.k0+"/vertical";$$t.$ay.r1=$$t.$ay.k0+"/workbook";$$t.$ay.r6=$$t.$ay.k0+"/workbookPr";$$t.$ay.r7=$$t.$ay.k0+"/workbookProtection";$$t.$ay.sa=$$t.$ay.k0+"/workbookView";$$t.$ay.sc=$$t.$ay.k0+"/worksheet";$$t.$ay.se=$$t.$ay.k0+"/xf";$$t.$ay.sh=$$t.$ay.k0+"/xmlColumnPr";$$t.$ay.b9="aboveAverage";$$t.$ay.ca="aca";$$t.$ay.cb="activeCell";$$t.$ay.cc="activeCellId";$$t.$ay.cd="activePane";$$t.$ay.ce="activeSheetId";$$t.$ay.cf="activeTab";$$t.$ay.cg="advise";$$t.$ay.ch="algorithmName";$$t.$ay.cj="alignWithMargins";$$t.$ay.ck="allowBlank";$$t.$ay.cl="allowRefreshQuery";$$t.$ay.cm="altText";$$t.$ay.co="and";$$t.$ay.cp="applyAlignment";$$t.$ay.cq="applyBorder";$$t.$ay.cr="applyFill";$$t.$ay.cs="applyFont";$$t.$ay.ct="applyNumberFormat";$$t.$ay.cu="applyProtection";$$t.$ay.cv="applyStyles";$$t.$ay.cw="appName";$$t.$ay.cx="array";$$t.$ay.cz="authorId";$$t.$ay.c1="auto";$$t.$ay.c2="autoCompressPictures";$$t.$ay.c3="autoFill";$$t.$ay.c5="autoFilter";$$t.$ay.c6="autoFilterDateGrouping";$$t.$ay.c7="autoLine";$$t.$ay.c8="autoPageBreaks";$$t.$ay.c9="autoPict";$$t.$ay.da="autoUpdate";$$t.$ay.dc="backupFile";$$t.$ay.dd="baseColWidth";$$t.$ay.de="bestFit";$$t.$ay.dg="blackAndWhite";$$t.$ay.dh="blank";$$t.$ay.dk="borderId";$$t.$ay.dn="bottom";$$t.$ay.dq="builtinId";$$t.$ay.dr="bx";$$t.$ay.dt="ca";$$t.$ay.du="cacheId";$$t.$ay.dv="calcCompleted";$$t.$ay.dw="calcId";$$t.$ay.dx="calcMode";$$t.$ay.dy="calcOnSave";$$t.$ay.d1="calendarType";$$t.$ay.d2="caseSensitive";$$t.$ay.d5="cellComments";$$t.$ay.d4="cellColor";$$t.$ay.ea="cf";$$t.$ay.eb="cfe";$$t.$ay.ec="cff";$$t.$ay.ed="cfo";$$t.$ay.eg="changesSavedWin";$$t.$ay.eh="che";$$t.$ay.ei="checkCompatibility";$$t.$ay.ej="chf";$$t.$ay.ek="cho";$$t.$ay.el="cm";$$t.$ay.em="codeName";$$t.$ay.ep="colId";$$t.$ay.eq="collapsed";$$t.$ay.et="colorId";$$t.$ay.ew="columnSort";$$t.$ay.ey="comment";$$t.$ay.e1="concurrentCalc";$$t.$ay.e2="concurrentManualCount";$$t.$ay.e5="conformance";$$t.$ay.e6="connectionId";$$t.$ay.fa="copies";$$t.$ay.fb="count";$$t.$ay.fc="customBuiltin";$$t.$ay.ff="customFormat";$$t.$ay.fg="customHeight";$$t.$ay.fh="customList";$$t.$ay.fi="customMenu";$$t.$ay.fl="customWidth";$$t.$ay.fo="dataCellStyle";$$t.$ay.fp="dataDxfId";$$t.$ay.fs="date1904";$$t.$ay.ft="dateCompatibility";$$t.$ay.fv="dateTimeGrouping";$$t.$ay.fw="day";$$t.$ay.fx="defaultColWidth";$$t.$ay.fy="defaultGridColor";$$t.$ay.fz="defaultPivotStyle";$$t.$ay.f0="defaultRowHeight";$$t.$ay.f1="defaultSize";$$t.$ay.f2="defaultTableStyle";$$t.$ay.f3="defaultThemeVersion";$$t.$ay.f6="degree";$$t.$ay.f7="del1";$$t.$ay.f8="del2";$$t.$ay.f9="deleteColumns";$$t.$ay.ga="deleteRows";$$t.$ay.gb="denormalized";$$t.$ay.gc="descending";$$t.$ay.gd="description";$$t.$ay.gf="diagonalDown";$$t.$ay.gg="diagonalUp";$$t.$ay.gh="differentFirst";$$t.$ay.gi="differentOddEven";$$t.$ay.gk="disabled";$$t.$ay.gl="disablePrompts";$$t.$ay.gm="display";$$t.$ay.gn="displayName";$$t.$ay.go="draft";$$t.$ay.gr="dt2D";$$t.$ay.gs="dtr";$$t.$ay.gu="dxfId";$$t.$ay.gx="enableFormatConditionsCalculation";$$t.$ay.gz="equalAverage";$$t.$ay.g0="error";$$t.$ay.g1="errors";$$t.$ay.g2="errorStyle";$$t.$ay.g3="errorTitle";$$t.$ay.hk="fillId";$$t.$ay.hn="filter";$$t.$ay.hp="filterMode";$$t.$ay.hq="filterPrivacy";$$t.$ay.hs="filterUnique";$$t.$ay.ht="filterVal";$$t.$ay.hw="firstPageNumber";$$t.$ay.hx="firstSheet";$$t.$ay.hy="fitToHeight";$$t.$ay.hz="fitToPage";$$t.$ay.h0="fitToWidth";$$t.$ay.h2="fontId";$$t.$ay.h4="footer";$$t.$ay.h5="forceFullCalc";$$t.$ay.h7="formatCells";$$t.$ay.h8="formatCode";$$t.$ay.h9="formatColumns";$$t.$ay.ia="formatRows";$$t.$ay.ig="fullCalcOnLoad";$$t.$ay.ih="fullPrecision";$$t.$ay.ii="function";$$t.$ay.ij="functionGroupId";$$t.$ay.il="gridLines";$$t.$ay.im="gridLinesSet";$$t.$ay.io="gte";$$t.$ay.ip="guid";$$t.$ay.iq="hashValue";$$t.$ay.ir="header";$$t.$ay.it="headerRowBorderDxfId";$$t.$ay.iu="headerRowCellStyle";$$t.$ay.iv="headerRowCount";$$t.$ay.iw="headerRowDxfId";$$t.$ay.ix="headings";$$t.$ay.iy="help";$$t.$ay.iz="hidden";$$t.$ay.i0="hiddenButton";$$t.$ay.i1="hiddenColumns";$$t.$ay.i2="hiddenRows";$$t.$ay.i3="hidePivotFieldList";$$t.$ay.i5="horizontal";$$t.$ay.i6="horizontalCentered";$$t.$ay.i7="horizontalDpi";$$t.$ay.i8="hour";$$t.$ay.i9="ht";$$t.$ay.jd="icon";$$t.$ay.jf="iconId";$$t.$ay.jg="iconSet";$$t.$ay.jh="id";$$t.$ay.ji="iLevel";$$t.$ay.jj="imeMode";$$t.$ay.jk="includeHiddenRowCol";$$t.$ay.jl="includePrintSettings";$$t.$ay.jm="indent";$$t.$ay.jn="indexed";$$t.$ay.jp="insertColumns";$$t.$ay.jq="insertHyperlinks";$$t.$ay.jr="insertRow";$$t.$ay.js="insertRows";$$t.$ay.jt="insertRowShift";$$t.$ay.ju="iterate";$$t.$ay.jv="iterateCount";$$t.$ay.jw="iterateDelta";$$t.$ay.jx="justifyLastLine";$$t.$ay.jy="lastEdited";$$t.$ay.j0="left";$$t.$ay.j3="lfe";$$t.$ay.j4="lff";$$t.$ay.j5="lfo";$$t.$ay.j6="lhe";$$t.$ay.j7="lhf";$$t.$ay.j8="lho";$$t.$ay.j9="linkedCell";$$t.$ay.ka="listFillRange";$$t.$ay.kb="localSheetId";$$t.$ay.kc="location";$$t.$ay.kd="locked";$$t.$ay.ke="lockRevision";$$t.$ay.kf="lockStructure";$$t.$ay.kg="lockWindows";$$t.$ay.kh="lowestEdited";$$t.$ay.ki="macro";$$t.$ay.kj="man";$$t.$ay.kk="manualBreakCount";$$t.$ay.kl="mapId";$$t.$ay.km="max";$$t.$ay.kn="maximized";$$t.$ay.ko="maxVal";$$t.$ay.kp="maxValIso";$$t.$ay.ks="mergeInterval";$$t.$ay.kt="min";$$t.$ay.ku="minimized";$$t.$ay.kv="minute";$$t.$ay.kw="month";$$t.$ay.kx="moveWithCells";$$t.$ay.kz="name";$$t.$ay.k3="numFmtId";$$t.$ay.k5="objects";$$t.$ay.lb="onlySync";$$t.$ay.lc="operator";$$t.$ay.ld="orientation";$$t.$ay.lf="outline";$$t.$ay.lg="outlineLevel";$$t.$ay.lh="outlineLevelCol";$$t.$ay.li="outlineLevelRow";$$t.$ay.lk="outlineSymbols";$$t.$ay.lm="pageOrder";$$t.$ay.lq="pane";$$t.$ay.lr="paperHeight";$$t.$ay.ls="paperSize";$$t.$ay.lt="paperWidth";$$t.$ay.lu="password";$$t.$ay.lw="patternType";$$t.$ay.lx="percent";$$t.$ay.ly="personalView";$$t.$ay.lz="ph";$$t.$ay.l0="phonetic";$$t.$ay.l2="pivot";$$t.$ay.l3="pivotButton";$$t.$ay.l7="pivotTables";$$t.$ay.l8="position";$$t.$ay.l9="preferPic";$$t.$ay.ma="print";$$t.$ay.mb="printArea";$$t.$ay.md="priority";$$t.$ay.me="progId";$$t.$ay.mf="prompt";$$t.$ay.mg="promptedSolutions";$$t.$ay.mh="promptTitle";$$t.$ay.ml="pt";$$t.$ay.mm="published";$$t.$ay.mn="publishItems";$$t.$ay.mo="publishToServer";$$t.$ay.mp="queryTableFieldId";$$t.$ay.mq="quotePrefix";$$t.$ay.ms="r";$$t.$ay.mt="r1";$$t.$ay.mu="r2";$$t.$ay.mv="rank";$$t.$ay.mw="readingOrder";$$t.$ay.mx="readOnlyRecommended";$$t.$ay.my="recalcAlways";$$t.$ay.m4="relativeIndent";$$t.$ay.mz="ref";$$t.$ay.m0="refersTo";$$t.$ay.m3="refreshError";$$t.$ay.m1="refMode";$$t.$ay.m2="refreshAllConnections";$$t.$ay.m5="reservationPassword";$$t.$ay.m6="revisionsAlgorithmName";$$t.$ay.m7="revisionsHashValue";$$t.$ay.m8="revisionsPassword";$$t.$ay.m9="revisionsSaltValue";$$t.$ay.na="revisionsSpinCount";$$t.$ay.nb="rfe";$$t.$ay.nc="rff";$$t.$ay.nd="rfo";$$t.$ay.nf="rgb";$$t.$ay.nh="rhe";$$t.$ay.ni="rhf";$$t.$ay.nj="rho";$$t.$ay.nl="right";$$t.$ay.nm="rightToLeft";$$t.$ay.nq="rupBuild";$$t.$ay.nr="s";$$t.$ay.ns="saltValue";$$t.$ay.nt="saveExternalLinkValues";$$t.$ay.nu="scale";$$t.$ay.nv="scaleWithDoc";$$t.$ay.nw="scenarios";$$t.$ay.ny="second";$$t.$ay.nz="securityDescriptor";$$t.$ay.n1="selectLockedCells";$$t.$ay.n2="selectUnlockedCells";$$t.$ay.n6="sheet";$$t.$ay.n4="shapeId";$$t.$ay.ob="sheetId";$$t.$ay.oj="shortcutKey";$$t.$ay.ok="showAutoFilter";$$t.$ay.ol="showBorderUnselectedTables";$$t.$ay.om="showButton";$$t.$ay.on="showColumnStripes";$$t.$ay.oo="showComments";$$t.$ay.op="showDropDown";$$t.$ay.oq="showErrorMessage";$$t.$ay.or="showFirstColumn";$$t.$ay.os="showFormulaBar";$$t.$ay.ot="showFormulas";$$t.$ay.ou="showGridLines";$$t.$ay.ov="showHorizontalScroll";$$t.$ay.ow="showInkAnnotation";$$t.$ay.ox="showInputMessage";$$t.$ay.oy="showLastColumn";$$t.$ay.oz="showObjects";$$t.$ay.o0="showOutlineSymbols";$$t.$ay.o1="showPageBreaks";$$t.$ay.o2="showPivotChartFilter";$$t.$ay.o3="showRowCol";$$t.$ay.o4="showRowColHeaders";$$t.$ay.o5="showRowStripes";$$t.$ay.o6="showRuler";$$t.$ay.o7="showSheetTabs";$$t.$ay.o8="showStatusbar";$$t.$ay.o9="showVerticalScroll";$$t.$ay.pa="showWhiteSpace";$$t.$ay.pb="showZeros";$$t.$ay.pc="shrinkToFit";$$t.$ay.pe="si";$$t.$ay.pf="size";$$t.$ay.pg="sizeWithCells";$$t.$ay.ph="sort";$$t.$ay.pi="sortBy";$$t.$ay.pk="sortMethod";$$t.$ay.pm="spans";$$t.$ay.pn="spinCount";$$t.$ay.po="sqref";$$t.$ay.pr="state";$$t.$ay.ps="statusBar";$$t.$ay.pt="stdDev";$$t.$ay.pv="stopIfTrue";$$t.$ay.px="style";$$t.$ay.pz="summaryBelow";$$t.$ay.p0="summaryRight";$$t.$ay.p1="syncHorizontal";$$t.$ay.p2="syncRef";$$t.$ay.p3="syncVertical";$$t.$ay.p6="t";$$t.$ay.p9="table";$$t.$ay.qa="tableBorderDxfId";$$t.$ay.qj="tableType";$$t.$ay.qk="tabRatio";$$t.$ay.ql="tabSelected";$$t.$ay.qn="text";$$t.$ay.qo="textRotation";$$t.$ay.qp="theme";$$t.$ay.qq="thickBot";$$t.$ay.qr="thickBottom";$$t.$ay.qs="thickTop";$$t.$ay.qt="timePeriod";$$t.$ay.qu="tint";$$t.$ay.qv="tooltip";$$t.$ay.qx="top";$$t.$ay.qz="topLeftCell";$$t.$ay.q0="totalsRowBorderDxfId";$$t.$ay.q1="totalsRowCellStyle";$$t.$ay.q2="totalsRowCount";$$t.$ay.q3="totalsRowDxfId";$$t.$ay.q5="totalsRowFunction";$$t.$ay.q6="totalsRowLabel";$$t.$ay.q7="totalsRowShown";$$t.$ay.q8="transitionEntry";$$t.$ay.q9="transitionEvaluation";$$t.$ay.ra="type";$$t.$ay.rc="uiObject";$$t.$ay.re="uniqueCount";$$t.$ay.rf="uniqueName";$$t.$ay.rg="updateLinks";$$t.$ay.rh="uri";$$t.$ay.ri="useFirstPageNumber";$$t.$ay.rj="usePrinterDefaults";$$t.$ay.rk="userName";$$t.$ay.ro="vbProcedure";$$t.$ay.rm="val";$$t.$ay.rn="valIso";$$t.$ay.rr="vertical";$$t.$ay.rs="verticalCentered";$$t.$ay.rt="verticalDpi";$$t.$ay.ru="view";$$t.$ay.rv="visibility";$$t.$ay.rw="vm";$$t.$ay.rx="width";$$t.$ay.ry="windowHeight";$$t.$ay.rz="windowProtection";$$t.$ay.r0="windowWidth";$$t.$ay.r2="workbookAlgorithmName";$$t.$ay.r3="workbookHashValue";$$t.$ay.r4="workbookParameter";$$t.$ay.r5="workbookPassword";$$t.$ay.r8="workbookSaltValue";$$t.$ay.r9="workbookSpinCount";$$t.$ay.sb="workbookViewId";$$t.$ay.sd="wrapText";$$t.$ay.sf="xfId";$$t.$ay.sg="xlm";$$t.$ay.si="xmlDataType";$$t.$ay.sj="xpath";$$t.$ay.sk="xSplit";$$t.$ay.sl="xWindow";$$t.$ay.sm="year";$$t.$ay.sn="ySplit";$$t.$ay.so="yWindow";$$t.$ay.sp="zeroHeight";$$t.$ay.sq="zeroValues";$$t.$ay.sr="zoomScale";$$t.$ay.ss="zoomScaleNormal";$$t.$ay.st="zoomScalePageLayoutView";$$t.$ay.su="zoomScaleSheetLayoutView";$$t.$ay.an=0;$$t.$ay.bk=false;$$t.$ay.bu=true;$$t.$ay.bz=true;$$t.$ay.as=0;$$t.$ay.bx=true;$$t.$ay.sy=600;$$t.$ay.ap=1;$$t.$ay.a8=false;$$t.$ay.at=0;$$t.$ay.bf=false;$$t.$ay.sx=100;$$t.$ay.b4=.001;$$t.$ay.a9=true;$$t.$ay.a1=true;$$t.$ay.a2=true;$$t.$ay.a5=true;$$t.$ay.az=false;$$t.$ay.a3=false;$$t.$ay.bl=false;$$t.$ay.bm=false;$$t.$ay.be=true;$$t.$ay.bd=true;$$t.$ay.bj=false;$$t.$ay.b5=0;$$t.$ay.b6=0;$$t.$ay.bt=true;$$t.$ay.by=true;$$t.$ay.ar=1;$$t.$ay.bb=false;$$t.$ay.ba=false;$$t.$ay.b0=false;$$t.$ay.b2=false;$$t.$ay.bp=false;$$t.$ay.b1=false;$$t.$ay.a6=false;$$t.$ay.bs=true;$$t.$ay.a7=false;$$t.$ay.bn=false;$$t.$ay.bv=true;$$t.$ay.a0=false;$$t.$ay.br=true;$$t.$ay.au=0;$$t.$ay.bc=false;$$t.$ay.bw=false;$$t.$ay.aw=false;$$t.$ay.bo=false;$$t.$ay.a4=false;$$t.$ay.ax=true;$$t.$ay.bq=false;$$t.$ay.bh=false;$$t.$ay.bi=false;$$t.$ay.bg=false;$$t.$ay.av=0;$$t.$ay.sw=0;$$t.$ay.sv=0;$$t.$ay.ay=true;$$t.$ay.ao=new $$t.ay;if($.ig.documentsCore){$.ig.documentsCore._isNamespace=true}});

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
    // if this constructor is used without `new`, it adds `new` before itself:
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