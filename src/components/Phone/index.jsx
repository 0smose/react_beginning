import React from 'react';

class Phone extends React.Component {
    render() {
        let {phone} = this.props;

        return (
            
                <a href={`callto:${phone}`} className='btn btn-primary'>Appeler</a>
          
        )
    }

}

export default Phone;