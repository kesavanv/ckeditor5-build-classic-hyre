/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module list/mcqoptions
 */

import McqOptionsEditing from './mcqoptionsediting';
import McqOptionsUI from './mcqoptionsui';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import '../theme/mcqoptions.css';

/**
 * The to-do list feature.
 *
 * This is a "glue" plugin that loads the {@link module:list/mcqoptionsediting~McqOptionsEditing to-do list editing feature}
 * and the {@link module:list/mcqoptionsui~McqOptionsUI to-do list UI feature}.
 *
 * @extends module:core/plugin~Plugin
 */
export default class McqOptions extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ McqOptionsEditing, McqOptionsUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'McqOptions';
	}
}
