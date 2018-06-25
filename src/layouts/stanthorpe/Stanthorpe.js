import React from 'react'
import { AccountData, ContractData, ContractForm } from 'drizzle-react-components'
import { LoadingContainer } from 'drizzle-react-components'
import { Image } from 'semantic-ui-react'


const Stanthorpe = () => (
    <main className="container">
        <div className="pure-g">
            <div className="pure-u-1-1 header">
                <h1>Stanthrope Network Plans</h1>
                <p>Here are the current Network plans</p>
                <Image src='https://content.screencast.com/users/tommycp2/folders/Snagit/media/2ec2c7dc-069e-4acd-a06d-ba6ef20b972d/2018-06-25_20-28-44.png' fluid />

                <br /><br />
                <h4>Community Connection Fee: $20,000 AUD (payable in dCom Tokens.</h4>
                <br />
            </div>

        </div>

        <div>
            <p>asdfasd</p>
        </div>

        <LoadingContainer>
            <div className="pure-u-1-1">
                <h2>Current Ether</h2>
                <AccountData accountIndex="0" units="ether" precision="3" />

                <br /><br />
            </div>
        </LoadingContainer>

        <div>
            <p>asdfasd</p>
        </div>
    </main>
)

export default Stanthorpe