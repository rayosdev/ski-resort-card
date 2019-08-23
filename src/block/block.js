/**
 * BLOCK: ski-resort-card
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'cgb/block-ski-resort-card', {
	title: __( 'Ski Resort Card' ),
	icon: 'location-alt', 
	category: 'widgets',
	keywords: [
		__( 'ski-resort-card — CGB Block' ),
		__( 'Ski' ),
	],

	edit: ( props ) => {
		// Creates a <p class='wp-block-cgb-block-ski-resort-card'></p>.
		return null
	},

	save: () => {
		return null
	},
} );
