/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module basic-styles/blank
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import BlankEditing from './blank/blankediting';
import BlankUI from './blank/blankui';

import '../theme/blank.css';

/**
 * The blank feature.
 *
 * For a detailed overview check the {@glink features/basic-styles Basic styles feature documentation}
 * and the {@glink api/basic-styles package page}.
 *
 * This is a "glue" plugin which loads the {@link module:basic-styles/blank/blankediting~BlankEditing} and
 * {@link module:basic-styles/blank/blankui~BlankUI} plugins.
 *
 * @extends module:core/plugin~Plugin
 */
export default class Blank extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ BlankEditing, BlankUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'Blank';
	}
}
