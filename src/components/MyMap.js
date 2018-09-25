import React from 'react';

class MyMap extends React.Component{      

    render() {
        return (
        <div id='map'>

            {this.props.coord.lat && <p>Latitude : {this.props.coord.lat}</p>}
            {this.props.coord.lon && <p>Longitude : {this.props.coord.lon}</p>}           

        </div>
        );

    }
}



export default MyMap;