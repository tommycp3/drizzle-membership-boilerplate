import React from 'react'
import { AccountData, ContractData, ContractForm } from 'drizzle-react-components'
import { LoadingContainer } from 'drizzle-react-components'


const Transparency = () => (
        <main className="container">
            <div className="pure-g">
                <div className="pure-u-1-1 header">
                    <h1>Transparency</h1>
                    <p>Here is where you can find the Etherem Account that manages the ETH to this system on Etherscan.</p>

                    <br /><br />
                </div>

                <LoadingContainer>
                    <div className="pure-u-1-1">
                        <h2>Active Account</h2>
                        <AccountData accountIndex="0" units="ether" precision="3" />

                        <br /><br />
                    </div>
                </LoadingContainer>

            </div>
        </main>
)

export default Transparency