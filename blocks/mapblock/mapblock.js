import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls } from '@wordpress/block-editor';
import { TextControl, TextareaControl, PanelBody } from '@wordpress/components';

registerBlockType('celtisorg/googlemap', {
     title: 'Celtis Google Map',
     icon: 'location',
     category: 'common',
     parent: 'omnifseupdt/guidesdestsec',
     attributes: {
          apiKey: {
               type: 'string',
               default: ''
          },
          lat: {
               type: 'string',
               default: ''
          },
          lng: {
               type: 'string',
               default: ''
          },
          zoom: {
               type: 'string',
               default: ''
          },
          coordinates: {
               type: 'string',
               default: '' // Leave default as an empty string
          }
     },
     edit: (props) => {
          const { attributes: { apiKey, lat, lng, zoom, coordinates }, setAttributes } = props;

          return (
               <>
                    <InspectorControls>
                         <PanelBody title="Map Settings">
                              <TextControl
                                   label="API Key"
                                   value={apiKey}
                                   onChange={(value) => setAttributes({ apiKey: value })}
                              />
                              <TextControl
                                   label="Latitude"
                                   value={lat}
                                   onChange={(value) => setAttributes({ lat: value })}
                              />
                              <TextControl
                                   label="Longitude"
                                   value={lng}
                                   onChange={(value) => setAttributes({ lng: value })}
                              />
                              <TextControl
                                   label="Zoom"
                                   value={zoom}
                                   onChange={(value) => setAttributes({ zoom: value })}
                              />
                              <TextareaControl
                                   label="Polygon Coordinates"
                                   value={coordinates}
                                   onChange={(value) => setAttributes({ coordinates: value })}
                                   help="Enter coordinates as comma-separated latitude and longitude pairs, each pair on a new line."
                              />
                         </PanelBody>
                    </InspectorControls>
                    <div
                         id="guidesmap"
                         className={props.className}
                         data-api-key={apiKey}
                         data-lat={lat}
                         data-lng={lng}
                         data-zoom={zoom}
                         data-coordinates={coordinates}
                    >
                         Loading map...
                    </div>
               </>
          );
     },
     save: (props) => {
          const { apiKey, lat, lng, zoom, coordinates } = props.attributes;

          return (
               <div
                    id="guidesmap"
                    className={props.className}
                    data-api-key={apiKey}
                    data-lat={lat}
                    data-lng={lng}
                    data-zoom={zoom}
                    data-coordinates={coordinates}
               >
                    Loading map...
               </div>
          );
     }
});
