/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module basic-styles/blank/blankediting
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import AttributeCommand from '../attributecommand';

const BLANK = 'blank';

/**
 * The blank editing feature.
 *
 * It registers the `'blank'` command, the <kbd>Ctrl+Shift+X</kbd> keystroke and introduces the
 * `blanksthrough` attribute in the model which renders to the view
 * as a `<s>` element.
 *
 * @extends module:core/plugin~Plugin
 */
export default class BlankEditing extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'BlankEditing';
	}

	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;

		// Allow blank attribute on text nodes.
		editor.model.schema.extend( '$text', { allowAttributes: BLANK } );
		editor.model.schema.setAttributeProperties( BLANK, {
			isFormatting: true,
			copyOnEnter: true
		} );

		editor.conversion.attributeToElement( {
			model: BLANK,
			view: 's',
			// upcastAlso: [
			// 	'del',
			// 	'strike',
			// 	{
			// 		styles: {
			// 			'text-decoration': 'line-through'
			// 		}
			// 	}
			// ]
		} );

		// Create blank command.
		editor.commands.add( BLANK, new AttributeCommand( editor, BLANK ) );

		// Set the Ctrl+Shift+X keystroke.
		// editor.keystrokes.set( 'CTRL+SHIFT+X', 'blank' );
	}
}
