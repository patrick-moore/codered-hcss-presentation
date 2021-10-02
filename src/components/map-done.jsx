import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapPins from './map-pin';

export const Map = ({ onClick, data }) => {
    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: 29.749907,
        longitude: -95.358421,
        zoom: 12
    });

    return <ReactMapGL {...viewport}
        onViewportChange={nextViewport => setViewport(nextViewport)}>
        <MapPins onClick={onClick} data={data} />
    </ReactMapGL>
}