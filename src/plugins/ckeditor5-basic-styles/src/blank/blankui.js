/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module basic-styles/blank/blankui
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

// import blankIcon from '../../theme/icons/blank.svg';

const BLANK = 'blank';

/**
 * The blank UI feature. It introduces the Blank button.
 *
 * @extends module:core/plugin~Plugin
 */
export default class BlankUI extends Plugin {
	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;
		const t = editor.t;

		// Add blank button to feature components.
		editor.ui.componentFactory.add( BLANK, locale => {
			const command = editor.commands.get( BLANK );
			const view = new ButtonView( locale );

			view.set( {
				label: t( 'Blank' ),
				// icon: blankIcon,
				// keystroke: 'CTRL+SHIFT+X',
				withText: true,
				tooltip: true,
				isToggleable: true
			} );

			view.bind( 'isOn', 'isEnabled' ).to( command, 'value', 'isEnabled' );

			// Execute command.
			this.listenTo( view, 'execute', () => {
				editor.execute( BLANK );
				editor.editing.view.focus();
			} );

			return view;
		} );
	}
}
