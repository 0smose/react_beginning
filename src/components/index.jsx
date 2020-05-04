import React from 'react';
import faker from 'faker'
import Client from 'components/Client'
import Email from 'components/Email'
import Phone from 'components/Phone'

class Clients extends React.Component {
    render() {
      faker.locale ="fr";
      let clientList = [];
      let i = 0;
  
      for (i; i < 10; i++) {
        let client = {
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          phone: faker.phone.phoneNumber(),
          job: faker.name.jobType(), 
          img: faker.image.avatar()
        };
        clientList.push(client);
      }
  
      let clients = clientList.map((client) => (
          <>
         <div className="container mb-5"> 
            <div className="row">
                <div className="col col-6 mx-auto">
                    <div className="card">
                        <Client firstName={client.firstName} lastName={client.lastName} phoneNumber={client.phone} job={client.job} img={client.img}/>
                        <div className='row pl-3'>
                            <div className="col col-3 ">
                                <Email lenom={client.firstName} leprenom={client.lastName}/>
                            </div>
                            <div className="col col-9">
                                <Phone phone={client.phone} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
      ));
  
      return <>
      {clients}
      </>;
    }
  }
export default Clients;