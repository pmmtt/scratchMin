// Imports
import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks, useBlockProps, PlainText, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { Button } from "@wordpress/components";

// Icon Definition
const celtisIcon = (
	<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
		<path fill="#ffcd00" d="M92.53,146.81c19.58-2.88,54.35-13.93,82.89-28.41,2.97-8.93,4.58-18.47,4.58-28.4C180,40.29,139.71,0,90,0S0,40.29,0,90c0,15.03,3.69,29.2,10.21,41.66,24.85,13.11,47.82,20.23,82.33,15.15Z" />
		<g>
			<path fill="#1590cd" d="M20.02,146.59c16.5,20.38,41.71,33.41,69.98,33.41s54.5-13.56,70.97-34.66c-20.09,8.5-41.04,13.18-61.74,14.27-30.22,1.55-54.91-2.97-79.21-13.02Z" />
			<path fill="#fff" d="M92.53,146.81c-34.5,5.08-57.47-2.04-82.33-15.15,2.78,5.31,6.07,10.31,9.82,14.94,24.29,10.05,48.99,14.57,79.21,13.02,20.71-1.09,41.66-5.77,61.74-14.27,6.25-8.01,11.18-17.1,14.45-26.94-28.54,14.48-63.31,25.53-82.89,28.41Z" />
		</g>
		<path fill="#316195" d="M111.14,36.99c-10.95,4.32-20.95,10.01-20.95,10.01c9.24,9.56,3.85,14.33,3.85,14.33c-7.85-14.33-45.09-10.33-45.09-10.33C5.69,48.54,1.67,35.77,1.67,35.77c24.03,6.93,53.73,4,53.73,4c-3.23-4-11.07-4.47-11.07-4.47c5.39-4.62,20.16-4.92,20.16-4.92l3.08,5.39c3.08,0,10.3,2.61,10.3,2.61c4.94-5.68,32.03-12.01,32.03-12.01c14.47-1.69,22.47-9.69,22.47-9.69c3.08,11.69-21.23,20.31-21.23,20.31Z" />
	</svg>
);

const CELTIS_TABACCORDSNGL_TEMPLATE = [
	[
		"core/group",
		{
			className: "tab-content",
			"aria-labelledby": "tab-content-1",
			"aria-hidden": "true",
		},
	],
];

// Register Block
registerBlockType("celorgscratch/toggletab", {
	title: "Toggle Tab",
	icon: celtisIcon,
	category: "celtis-custom-category",
	parent: ["celorgscratch/togglegroup"],
	attributes: {
		headline: {
			type: "string",
			default: "",
		},
		byline: {
			type: "string",
			default: "",
		},
		align: {
			type: "string",
			default: "center",
		},
		ariaLabel: {
			type: "string",
			default: __("Button", "text-domain"),
		},
		backgroundImage: {
			type: "string",
			default: "", // Holds the background image URL
		},
	},
	edit: (props) => {
		const { attributes, setAttributes } = props;
		const blockProps = useBlockProps();
		const maxChars = 35;

		const onLabelChange = (field, value) => {
			if (value.length <= maxChars) {
				setAttributes({ [field]: value });
			}
		};

		return (
			<div {...blockProps} className="single-tab-wrap toggle-tab-single" role="tablist">
				<button
					{...blockProps}
					style={{
						backgroundImage: `url(${attributes.backgroundImage})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				>
					<PlainText
						tagName="p"
						className="h3 headline"
						placeholder={__("Headline", "text-domain")}
						value={attributes.headline}
						onChange={(value) => onLabelChange("headline", value)}
						style={{ textAlign: attributes.align }}
						aria-label={attributes.headline || attributes.ariaLabel}
					/>
					<PlainText
						tagName="p"
						className="byline"
						placeholder={__("Byline", "text-domain")}
						value={attributes.byline}
						onChange={(value) => onLabelChange("byline", value)}
						style={{ textAlign: attributes.align }}
						aria-label={attributes.byline || attributes.ariaLabel}
					/>
				</button>

				<MediaUploadCheck>
					<MediaUpload
						onSelect={(media) => setAttributes({ backgroundImage: media.url })}
						allowedTypes={["image"]}
						render={({ open }) => (
							<Button onClick={open} className="button">
								{__("Select Background Image", "text-domain")}
							</Button>
						)}
					/>
				</MediaUploadCheck>

				<InnerBlocks template={[["core/group", {}]]} />
			</div>
		);
	},
	save: (props) => {
		const { attributes } = props;
		const blockProps = useBlockProps.save();
		const setTabClass = attributes.headline.toLowerCase().replace(/[^a-z0-9-]/g, "-");

		return (
			<div {...blockProps} id={setTabClass} className={`single-tab-wrap toggle-tab-single content-${setTabClass}`} role="tablist">
				<button
					id={`tab-${setTabClass}-button`}
					aria-controls={`panel-${setTabClass}-content`}
					aria-expanded="false"
					aria-label={attributes.ariaLabel || attributes.headline}
					style={{
						backgroundImage: `url(${attributes.backgroundImage})`
					}}
				>
					<div className="toggle_button_wrap">
						<span className="h3">{attributes.headline || __("Button", "text-domain")}</span>
						<span className="byline">{attributes.byline}</span>
					</div>
				</button>
				<div id={`panel-${setTabClass}-content`} className="tab-content" role="tabpanel" aria-hidden="true" aria-labelledby={`tab-${setTabClass}-button`}>
					<InnerBlocks.Content />
				</div>
			</div>
		);
	},
});
