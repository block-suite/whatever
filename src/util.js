export const ASPECT_RATIOS = [
	// Common video resolutions.
	{ ratio: '2.33', className: 'wp-embed-aspect-21-9' },
	{ ratio: '2.00', className: 'wp-embed-aspect-18-9' },
	{ ratio: '1.78', className: 'wp-embed-aspect-16-9' },
	{ ratio: '1.33', className: 'wp-embed-aspect-4-3' },
	// Vertical video and instagram square video support.
	{ ratio: '1.00', className: 'wp-embed-aspect-1-1' },
	{ ratio: '0.56', className: 'wp-embed-aspect-9-16' },
	{ ratio: '0.50', className: 'wp-embed-aspect-1-2' },
];

/**
 * Returns class names with any relevant responsive aspect ratio names.
 *
 * This function is borrowed from the `core/embed` block.
 *
 * @param {string}  html               The preview HTML that possibly contains an iframe with width and height set.
 * @param {string}  existingClassNames Any existing class names.
 * @return {string} Deduped class names.
 */
export function getClassNames( html, existingClassNames = '' ) {
	const previewDocument = document.implementation.createHTMLDocument( '' );
	previewDocument.body.innerHTML = html;
	const iframe = previewDocument.body.querySelector( 'iframe' );

	// If we have a fixed aspect iframe, and it's a responsive embed block.
	if ( iframe && iframe.height && iframe.width ) {
		const aspectRatio = ( iframe.width / iframe.height ).toFixed( 2 );
		// Given the actual aspect ratio, find the widest ratio to support it.
		for (
			let ratioIndex = 0;
			ratioIndex < ASPECT_RATIOS.length;
			ratioIndex++
		) {
			const potentialRatio = ASPECT_RATIOS[ ratioIndex ];
			if ( aspectRatio >= potentialRatio.ratio ) {
				return [
					existingClassNames,
					potentialRatio.className,
					'wp-has-aspect-ratio',
				].join( ' ' );
			}
		}
	}

	return existingClassNames;
}
