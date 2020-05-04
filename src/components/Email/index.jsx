import React from 'react';


class Email extends React.Component {
    render() {
     let {lenom, leprenom} = this.props
     return (
        <a href={`mailto:${lenom.toLowerCase()}.${leprenom.toLowerCase()}@gmail.com`} className='btn btn-primary mb-2'>Mail</a>


     )
    }
}

export default Email;