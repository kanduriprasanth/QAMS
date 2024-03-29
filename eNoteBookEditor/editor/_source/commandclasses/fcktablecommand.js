﻿/*
 * FCKPastePlainTextCommand Class: represents the
 * "Paste as Plain Text" command.
 */

var FCKTableCommand = function( command )
{
	this.Name = command ;
}

FCKTableCommand.prototype.Execute = function()
{
	FCKUndo.SaveUndoStep() ;

	if ( ! FCKBrowserInfo.IsGecko )
	{
		switch ( this.Name )
		{
			case 'TableMergeRight' :
				return FCKTableHandler.MergeRight() ;
			case 'TableMergeDown' :
				return FCKTableHandler.MergeDown() ;
		}
	}

	switch ( this.Name )
	{
		case 'TableInsertRowAfter' :
			return FCKTableHandler.InsertRow( false ) ;
		case 'TableInsertRowBefore' :
			return FCKTableHandler.InsertRow( true ) ;
		case 'TableDeleteRows' :
			return FCKTableHandler.DeleteRows() ;
		case 'TableInsertColumnAfter' :
			return FCKTableHandler.InsertColumn( false ) ;
		case 'TableInsertColumnBefore' :
			return FCKTableHandler.InsertColumn( true ) ;
		case 'TableDeleteColumns' :
			return FCKTableHandler.DeleteColumns() ;
		case 'TableInsertCellAfter' :
			return FCKTableHandler.InsertCell( null, false ) ;
		case 'TableInsertCellBefore' :
			return FCKTableHandler.InsertCell( null, true ) ;
		case 'TableDeleteCells' :
			return FCKTableHandler.DeleteCells() ;
		case 'TableMergeCells' :
			return FCKTableHandler.MergeCells() ;
		case 'TableHorizontalSplitCell' :
			return FCKTableHandler.HorizontalSplitCell() ;
		case 'TableVerticalSplitCell' :
			return FCKTableHandler.VerticalSplitCell() ;
		case 'TableDelete' :
			return FCKTableHandler.DeleteTable() ;
		default :
			return alert( FCKLang.UnknownCommand.replace( /%1/g, this.Name ) ) ;
	}
}

FCKTableCommand.prototype.GetState = function()
{
	if ( FCK.EditorDocument != null && FCKSelection.HasAncestorNode( 'TABLE' ) )
	{
		switch ( this.Name )
		{
			case 'TableHorizontalSplitCell' :
			case 'TableVerticalSplitCell' :
				if ( FCKTableHandler.GetSelectedCells().length == 1 )
					return FCK_TRISTATE_OFF ;
				else
					return FCK_TRISTATE_DISABLED ;
			case 'TableMergeCells' :
				if ( FCKTableHandler.CheckIsSelectionRectangular()
						&& FCKTableHandler.GetSelectedCells().length > 1 )
					return FCK_TRISTATE_OFF ;
				else
					return FCK_TRISTATE_DISABLED ;
			case 'TableMergeRight' :
				return FCKTableHandler.GetMergeRightTarget() ? FCK_TRISTATE_OFF : FCK_TRISTATE_DISABLED ;
			case 'TableMergeDown' :
				return FCKTableHandler.GetMergeDownTarget() ? FCK_TRISTATE_OFF : FCK_TRISTATE_DISABLED ;
			default :
				return FCK_TRISTATE_OFF ;
		}
	}
	else
		return FCK_TRISTATE_DISABLED;
}
