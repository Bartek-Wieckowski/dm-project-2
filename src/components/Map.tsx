'use client';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export default function Map() {
  return (
    <MapContainer preferCanvas={true} center={[52.14, 22.30]} zoom={11} scrollWheelZoom={true} style={{ height: '400px', width: '600px' }}>
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[52.14, 22.30]}>
        <Popup>
          This Marker icon is displayed correctly with <i>leaflet-defaulticon-compatibility</i>.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
