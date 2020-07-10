/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module list/mcqoptionsui
 */

import { createUIComponent } from './utils';
import mcqOptionsIcon from '../theme/icons/mcqoptions.svg';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

/**
 * The to-do list UI feature. It introduces the `'mcqOptions'` button that
 * allows to convert elements to and from to-do list items and to indent or outdent them.
 *
 * @extends module:core/plugin~Plugin
 */
export default class McqOptionsUI extends Plugin {
	/**
	 * @inheritDoc
	 */
	init() {
		const t = this.editor.t;

		createUIComponent( this.editor, 'mcqOptions', t( 'MCQ Options' ), mcqOptionsIcon );
	}
}
