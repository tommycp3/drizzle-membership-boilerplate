import React from 'react'
import { AccountData, ContractData, ContractForm } from 'drizzle-react-components'
import { LoadingContainer } from 'drizzle-react-components'


const Stanthorpe = () => (
        <main className="container">
            <div className="pure-g">
                <div className="pure-u-1-1 header">
                    <h1>Stanthrope Network Plans</h1>
                    <p>Here are the current Network plans</p>

                    <br /><br />
                </div>

                <LoadingContainer>
                    <div className="pure-u-1-1">
                        <h2>Current Ether</h2>
                        <AccountData accountIndex="0" units="ether" precision="3" />

                        <br /><br />
                    </div>
                </LoadingContainer>

            </div>
        </main>
)

export default Stanthorpe