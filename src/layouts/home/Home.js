import React, { Component } from 'react'
import { AccountData, ContractData, ContractForm } from 'drizzle-react-components'
import logo from '../../logo.png'
import { LoadingContainer } from 'drizzle-react-components'
import { Button } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'



class Home extends Component {
  render() {
    return (
      <LoadingContainer>
        <main className="container">
          <div>
            <Button>Click Here</Button>
            <br />
            <Button>Click Here</Button>

            <Header size='huge'>Welcome to a system where you don't have to blidly trust us</Header>
            <h1></h1>

            <p>Hey we are actively trying to solve the worlds connectivity needs, and we believe the solution to solving connectivey firmly lies in the adoption blockchain technology.</p>

            <p>To learn how this system works, and why you don't need to trust our word, we like to invite you to execute your furst Smart Contract.</p>

            <p>In order to execute your first smart contract, you will need to buy some Ethereum.  </p>
            <p>The steps below will show you how to buy Ethereum tokens, and then put them into this system.</p>

            <Header size='medium'>What you can Expect</Header>


            <p>The steps below will show you how to buy Ethereum tokens, and then use them to execute a transaction.</p>

            <ol>
              <li>Purchase bitcoin and convert to Ether at CoinTree.com.au</li>
              <li>Install MetaMask Chrome Extension</li>
              <li>Generate Wallet</li>
              <li>Send Ether to MetaMask Account</li>
              <li>Execute your first transaction below.</li>
            </ol>
            <h1>FORM HERE</h1>





          </div>

          <div className="pure-g">
            <div className="pure-u-1-1 header">
              <img src={logo} alt="drizzle-logo" />
              <h1>Drizzle Examples</h1>
              <p>Examples of how to get started with Drizzle in various situations.</p>

              <br /><br />
            </div>

            <div className="pure-u-1-1">
              <h2>Active Account</h2>
              <AccountData accountIndex="0" units="ether" precision="3" />

              <br /><br />
            </div>

            <div className="pure-u-1-1">
              <h2>SimpleStorage</h2>
              <p>This shows a simple ContractData component with no arguments, along with a form to set its value.</p>
              <p><strong>Stored Value</strong>: <ContractData contract="SimpleStorage" method="storedData" /></p>
              <ContractForm contract="SimpleStorage" method="set" />

              <br /><br />
            </div>

            <div className="pure-u-1-1">
              <h2>TutorialToken</h2>
              <p>Here we have a form with custom, friendly labels. Also note the token symbol will not display a loading indicator. We've suppressed it with the <code>hideIndicator</code> prop because we know this variable is constant.</p>
              <p><strong>Total Supply</strong>: <ContractData contract="TutorialToken" method="totalSupply" methodArgs={[{ from: this.props.accounts[0] }]} /> <ContractData contract="TutorialToken" method="symbol" hideIndicator /></p>
              <p><strong>My Balance</strong>: <ContractData contract="TutorialToken" method="balanceOf" methodArgs={[this.props.accounts[0]]} /></p>
              <h3>Send Tokens</h3>
              <ContractForm contract="TutorialToken" method="transfer" labels={['To Address', 'Amount to Send']} />

              <br /><br />
            </div>

            <div className="pure-u-1-1">
              <h2>ComplexStorage</h2>
              <p>Finally this contract shows data types with additional considerations. Note in the code the strings below are converted from bytes to UTF-8 strings and the device data struct is iterated as a list.</p>
              <p><strong>String 1</strong>: <ContractData contract="ComplexStorage" method="string1" toUtf8 /></p>
              <p><strong>String 2</strong>: <ContractData contract="ComplexStorage" method="string2" toUtf8 /></p>
              <strong>Single Device Data</strong>: <ContractData contract="ComplexStorage" method="singleDD" />

              <br /><br />
            </div>
          </div>
        </main>
      </LoadingContainer>
    )
  }
}

export default Home
