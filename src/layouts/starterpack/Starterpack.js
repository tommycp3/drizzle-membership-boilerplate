import React, { Component } from 'react'
import { Accordion, Icon, List } from 'semantic-ui-react'

export default class Starterpack extends Component {
    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state

        return (

            <div className="container" >
                <h2>Welcome to The Anatomy of Consensus (AOC)</h2>
                <p>The best no fluff education system that teaches you the power of blockchain by using it.</p>

                <h4>What is Consensus?</h4>
                <p>Consensus is when two parties come together on an ongoing shared agreement on a specific topic or course of action.</p>

                <p>This is a very important process because it's how we can get:</p>

                <List bulleted>
                    <List.Item>Governments to trust each other (preventing wars)</List.Item>
                    <List.Item>Governments departments to trust each other</List.Item>
                    <List.Item>Banks to trust each other</List.Item>
                    <List.Item>Mend the devide between corporations, government and citizens</List.Item>
                    <List.Item>And enable divine human beings to trust each other without the need for a middle man</List.Item>
                </List>

                <p>Fundamentally we are dealing with the erosion of trust in our fragile society.</p>
                <br />

                <h4>What is the purpose of this system?</h4>
                <p>The purpose of this system is purely educational and designed to demonstrate how blockchain technology can be used to rebuild trust in our socitey, moving towards a socity that flourishes and works for all parties once again.</p>
                <p>Oftentimes it's hard to describe new paradigm shifts and far more effective experiencing the process which is why as you explore this site we offer to take you by the hand and guide you through the process of understanding the Anatomy of Consensus (AOC) through the eyes of this humanity saving blockchain technology where you are empowered to interact with the ethereum blockchain global computing network.</p>
                <br />

                <h4>What can I expect?</h4>
                <p>You will get a hands on experience executing transactions with the new web 3.0 (the web of trust).</p>
                <p>As you step through this process we will take you behind the scenes of this educational expeirence and show you how to explore the ethereum transactions that power this process.</p>
                <p>You will be relieved to find out, this educational journey is very direct and to the point.</p>
                <p>Due to the transparent nature of blockchain embeded in the protocol level of the ethereum there is no point wasting your time with fluff and no point trying to sell you anything. If you like the future of what blockchain stands for then it will make sense to learn more.</p>
                <br />

                <h4>How do I get started?</h4>
                <p>Good question, simply follow the steps below to aquire some ether (the token used to power smart contrcts) and then below you will be able to enter into a smart contract that gives you access to the Blockchain Starter Pack where we will teach you:</p>
                <List bulleted>
                    <List.Item>How to monitor all the transactions of this system</List.Item>
                    <List.Item>Delve deeper in helping you understand how blockchain technology is so appropriate for our evolving society</List.Item>
                    <List.Item>Teach you how protect youself against hackers</List.Item>
                    <List.Item>and give you a list of options on how you can participate in this global infrastructure upgrade.</List.Item>
                </List>
                <br />




                <h3>How to to get access to AOC starter pack</h3>
                <Accordion fluid styled>
                    <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                        <Icon name='dropdown' />
                        1. Create an account at <a target="_blank" href="http://www.cointree.com.au">CoinTree</a>
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                        <p>In Australia <a target="_blank" href="http://www.cointree.com.au">CoinTree</a> is a site that allows you to convert AUD to cryptocurrencies.</p>
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                        <Icon name='dropdown' />
                        2. Acquire some bitcoin with a Cash Deposit (fastest way)
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 1}>
                        <p>
                            There are many breeds of dogs. Each breed varies in size and temperament. Owners often
                            select a breed of dog that they find to be compatible with their own lifestyle and
                            desires from a companion.
                    </p>
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                        <Icon name='dropdown' />
                        3. Convert Bitcoin to Ether
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 2}>
                        <p>
                            Three common ways for a prospective owner to acquire a dog is from pet shops, private
                            owners, or shelters.
                        </p>
                        <p>
                            A pet shop may be the most convenient way to buy a dog. Buying a dog from a private
                            owner allows you to assess the pedigree and upbringing of your dog before choosing to
                            take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog
                            who may not find one so readily.
                        </p>
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
                        <Icon name='dropdown' />
                        4. Setup Your MetaMask Wallet
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 3}>
                        <p>
                            Three common ways for a prospective owner to acquire a dog is from pet shops, private
                            owners, or shelters.
                        </p>
                        <p>
                            A pet shop may be the most convenient way to buy a dog. Buying a dog from a private
                            owner allows you to assess the pedigree and upbringing of your dog before choosing to
                            take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog
                            who may not find one so readily.
                        </p>
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick}>
                        <Icon name='dropdown' />
                        5. Send Ether to your new MetaMask account
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 4}>
                        <p>
                            Three common ways for a prospective owner to acquire a dog is from pet shops, private
                            owners, or shelters.
                        </p>
                        <p>
                            A pet shop may be the most convenient way to buy a dog. Buying a dog from a private
                            owner allows you to assess the pedigree and upbringing of your dog before choosing to
                            take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog
                            who may not find one so readily.
                        </p>
                    </Accordion.Content>
                </Accordion>

            </div >
        )
    }
}