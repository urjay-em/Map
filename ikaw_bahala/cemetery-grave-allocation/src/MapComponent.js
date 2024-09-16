import React from "react";
import { MapContainer, TileLayer, Polygon, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const blocks = [
  {
    name: "Block A",
    coordinates: [
      [9.835735, 118.737881],
      [9.834208, 118.734141],
      [9.831807, 118.735149],
      [9.833566, 118.738910],
    ],
  },
  {
    name: "Block B",
    coordinates: [
      [9.833533, 118.738921],
      [9.831655, 118.735021],
      [9.828852, 118.736127],
      [9.831548, 118.738824],
      [9.830108, 118.740454],
      [9.830127, 118.740642],
    ],
  },
];

const MapComponent = () => {
  return (
    <MapContainer
      center={[9.834675, 118.737176]} // Your specified coordinates
      zoom={18} // Adjust the zoom level as needed
      style={{ height: "100vh", width: "100%" }}
    >
      {/* OpenStreetMap Default Tile Layer */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Adding Blocks (Cemetery Grave Allocation) */}
      {blocks.map((block, index) => (
        <Polygon key={index} positions={block.coordinates} color="purple">
          <Popup>{block.name}</Popup>
        </Polygon>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
