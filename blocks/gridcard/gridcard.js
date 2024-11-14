import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks, BlockControls, URLInput } from "@wordpress/block-editor";
import { ToolbarGroup, ToolbarButton } from "@wordpress/components";
import { useState } from "@wordpress/element";
import { useSelect } from "@wordpress/data";

registerBlockType("celorgscratch/gridcard", {
	title: "Grid Card",
	category: "layout",
	parent: ["celorgscratch/cardgrid"],
	attributes: {
		url: {
			type: "string",
			default: "",
		},
		parentImageCards: {
			type: "string",
			default: "",
		},
	},
	supports: {
		color: {
			text: false,
			link: true,
			background: true,
		},
	},
	edit: function (props) {
		const { attributes, setAttributes, clientId } = props;
		const [isURLInputVisible, setURLInputVisibility] = useState(false);

		// Check parent attributes in editor to determine grid type
		const parentAttributes = useSelect(
			(select) => {
				const parentBlockId = select("core/block-editor").getBlockParents(clientId)[0];
				return parentBlockId ? select("core/block-editor").getBlock(parentBlockId)?.attributes : {};
			},
			[clientId],
		);
		const isImageQuickLinks = parentAttributes?.imageCards === "image-quick-links";
		const isGridWidthCard = parentAttributes?.imageCards === "grid-width-card";
		const isCarouselCard = parentAttributes?.imageCards === "carousel-card";

		// Update parentImageCards attribute based on parent block
		const newParentImageCards = isImageQuickLinks ? "image-quick-links" : isGridWidthCard ? "grid-width-card" : isCarouselCard ? "carousel-card" : "";
		if (attributes.parentImageCards !== newParentImageCards) {
			setAttributes({ parentImageCards: newParentImageCards });
		}

		return (
			<div className="grid_card">
				{/* Only show URL input toolbar if grid-width-card and carousel-card are NOT selected */}
				{!isGridWidthCard && !isCarouselCard && (
					<>
						<BlockControls>
							<ToolbarGroup>
								<ToolbarButton icon="admin-links" label="Add URL" onClick={() => setURLInputVisibility(!isURLInputVisible)} />
							</ToolbarGroup>
						</BlockControls>
						{isURLInputVisible && (
							<div className="url-input-popup">
								<URLInput value={attributes.url} onChange={(newURL) => setAttributes({ url: newURL })} autoFocus={false} />
							</div>
						)}
						<InnerBlocks
							allowedBlocks={["core/image", "core/paragraph", "core/button"]}
							template={[
								["core/image", {}],
								[
									"core/group",
									{ className: "card-content" },
									[
										["core/paragraph", { placeholder: "Card Headline", className: "h4" }],
										// Conditionally add Card Byline if not in Image Quick Links
										...(!isImageQuickLinks ? [["core/paragraph", { placeholder: "Card Byline", className: "card_byline" }]] : []),
										// Add a button with URL only if in grid-width-card mode
										...(isGridWidthCard ? [["core/button", { text: "Read More", url: attributes.url }]] : []),
									],
								],
							]}
							templateLock="all"
						/>
					</>
				)}
				{isGridWidthCard && (
					<InnerBlocks
						allowedBlocks={["core/image", "core/paragraph", "core/button"]}
						template={[
							["core/image", {}],
							[
								"core/group",
								{ className: "card-content" },
								[
									["core/paragraph", { placeholder: "Card Headline", className: "h4" }],
									// Conditionally add Card Byline if not in Image Quick Links
									...(!isImageQuickLinks ? [["core/paragraph", { placeholder: "Card Byline", className: "card_byline" }]] : []),
									// Add a button with URL only if in grid-width-card mode
									...(isGridWidthCard ? [["core/button", { text: "Read More", url: attributes.url }]] : []),
								],
							],
						]}
						templateLock="all"
					/>
				)}
				{isCarouselCard && (
					<InnerBlocks
						allowedBlocks={["core/image", "core/paragraph", "core/button"]}
						template={[
							["core/image", {}],
							[
								"core/group",
								{ className: "card-content" },
								[
									["core/paragraph", { placeholder: "Card Headline", className: "h4" }],
									// Conditionally add Card Byline if not in Image Quick Links
									...(!isImageQuickLinks ? [["core/paragraph", { placeholder: "Card Byline", className: "card_byline" }]] : []),
									// Add a button with URL only if in carousel-card mode
									...(isCarouselCard ? [["core/button", { text: "Read More", url: attributes.url }]] : []),
								],
							],
						]}
						templateLock="all"
					/>
				)}
			</div>
		);
	},
	save: function ({ attributes }) {
		const isGridWidthCard = attributes.parentImageCards === "grid-width-card";
		const isCarouselCard = attributes.parentImageCards === "carousel-card";

		// Render without <a> wrapper if grid-width-card or carousel-card is selected
		if (isGridWidthCard || isCarouselCard) {
			return (
				<div className="grid_card">
					<InnerBlocks.Content />
				</div>
			);
		}

		// For other modes, wrap the entire block in <a> with href set to attributes.url
		return (
			<a href={attributes.url} className="grid_card">
				<InnerBlocks.Content />
			</a>
		);
	},
});
