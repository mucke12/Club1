import type { NextPage } from 'next';
import Head from 'next/head';

import BankFillIcon from 'remixicon-react/BankFillIcon';
import PlayLineIcon from 'remixicon-react/PlayLineIcon';
import ArrowRightFillIcon from 'remixicon-react/ArrowRightFillIcon';

import { OverviewLayout } from 'layouts/OverviewLayout';
import { PageIntroBlock } from 'layouts/Blocks/PageIntroBlock';
import { IntroBlock } from 'layouts/Blocks/IntroBlock';
import { TimelineBlock } from 'layouts/Blocks/TimelineBlock';
import { ArticleBlock } from 'layouts/Blocks/ArticleBlock';
import { UseCaseBlock } from 'layouts/Blocks/UseCaseBlock';
import { ParticipantsBlock } from 'layouts/Blocks/ParticipantsBlock';
import { MetricsBlock } from 'layouts/Blocks/MetricsBlock';
import { SolutionsBlock } from 'layouts/Blocks/SolutionsBlock';
import { ImageBlock } from 'layouts/Blocks/ImageBlock';

import { Grid } from 'components/Grid';
import { Button } from 'components/Button';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <OverviewLayout
        title="Origintrail Club"
        description="Generated by create next app"
      >
        <OverviewLayout.Header
          CallToAction={<Button label="Donate" Icon={BankFillIcon} />}
        />
        <OverviewLayout.Content>
          <Grid>
            <Grid.Item>
              <PageIntroBlock>
                <PageIntroBlock.Content>
                  <PageIntroBlock.Title>
                    The world’s first Decentralized Knowledge Graph️
                  </PageIntroBlock.Title>
                  <PageIntroBlock.Description>
                    OriginTrail is a neutral web3 protocol in which you can
                    organize your most important assets making them discoverable
                    and verifiable using a groundbreaking decentralized
                    knowledge graph.
                  </PageIntroBlock.Description>
                  <PageIntroBlock.Actions>
                    <PageIntroBlock.Action
                      label="How it works"
                      Icon={PlayLineIcon}
                    />
                  </PageIntroBlock.Actions>
                </PageIntroBlock.Content>
                <PageIntroBlock.Image
                  src="/home/introduction.jpg"
                  alt="The world’s first Decentralized Knowledge Graph️"
                />
              </PageIntroBlock>
            </Grid.Item>
            <Grid.Item>
              <MetricsBlock>
                <MetricsBlock.Category label="Market">
                  <MetricsBlock.Title>Metrics</MetricsBlock.Title>
                  <MetricsBlock.Action
                    label="Dashboard"
                    Icon={ArrowRightFillIcon}
                  />
                  <MetricsBlock.Metrics>
                    <MetricsBlock.Metric
                      icon="/metrics/metric-1.png"
                      value={184000000}
                      label="Total Market Cap"
                      currency="USD"
                      style="currency"
                    />
                    <MetricsBlock.Metric
                      icon="/metrics/metric-1.png"
                      value={0.97}
                      label="Price"
                      currency="USD"
                      style="currency"
                    />
                    <MetricsBlock.Metric
                      icon="/metrics/metric-1.png"
                      value={500000000}
                      label="Max Supply"
                    />
                  </MetricsBlock.Metrics>
                </MetricsBlock.Category>
                <MetricsBlock.Category label="Network">
                  <MetricsBlock.Title>Metrics</MetricsBlock.Title>
                  <MetricsBlock.Action
                    label="Dashboard"
                    Icon={ArrowRightFillIcon}
                  />
                  <MetricsBlock.Metrics>
                    <MetricsBlock.Metric
                      icon="/metrics/metric-1.png"
                      value={60000000}
                      label="Total Graph Size (TGS)"
                    />
                    <MetricsBlock.Metric
                      icon="/metrics/metric-1.png"
                      value={21000}
                      label="Total Datasets Published"
                    />
                    <MetricsBlock.Metric
                      icon="/metrics/metric-1.png"
                      value={9000000}
                      label="Total Tokens Staked"
                    />
                  </MetricsBlock.Metrics>
                </MetricsBlock.Category>
              </MetricsBlock>
            </Grid.Item>
            <Grid.Group>
              <Grid.Item>
                <IntroBlock>
                  <IntroBlock.Subtitle>
                    Harnessing Neutrality, Inclusiveness & Usability
                  </IntroBlock.Subtitle>
                  <IntroBlock.Title>
                    Helping the world unlock the true potential of data assets
                  </IntroBlock.Title>
                  <IntroBlock.Description>
                    Organize, discover and verify anything - from physical to
                    digital assets like supply chain items to Art, Diplomas,
                    Certificates, NFTs, DeFi and more. The Decentralized
                    Knowledge Graph allows the worlds’ data assets to be
                    structured, linked, persistent and understandable.
                  </IntroBlock.Description>
                  <IntroBlock.Action
                    label="Why OriginTrail?"
                    Icon={ArrowRightFillIcon}
                  />
                </IntroBlock>
              </Grid.Item>
              <Grid.Item>
                <SolutionsBlock>
                  <SolutionsBlock.Case>
                    <SolutionsBlock.Problem>
                      <SolutionsBlock.Image
                        src="/solutions/solution-1.png"
                        alt="Poor data interoperability"
                      />
                      <SolutionsBlock.Title>
                        Poor data interoperability
                      </SolutionsBlock.Title>
                      <SolutionsBlock.Description>
                        Data silos and low data interoperability create major
                        technical challenges for providers that want to build
                        collaborative applications, especially for organisations
                        that want to establish end-to-end supply chain
                        transparency.
                      </SolutionsBlock.Description>
                    </SolutionsBlock.Problem>
                    <SolutionsBlock.Solution>
                      <SolutionsBlock.Image
                        src="/solutions/solution-1.png"
                        alt="Seamless connection of data"
                      />
                      <SolutionsBlock.Title>
                        Seamless connection of data
                      </SolutionsBlock.Title>
                      <SolutionsBlock.Description>
                        Origintrail is built on globally recognized GS1 and W3C
                        standards which allow for efficient alignment of data
                        from multiple data sources. It enables seamless and
                        automatic data connection and interoperability between
                        legacy (ERP) systems.
                      </SolutionsBlock.Description>
                    </SolutionsBlock.Solution>
                  </SolutionsBlock.Case>
                  <SolutionsBlock.Case>
                    <SolutionsBlock.Problem>
                      <SolutionsBlock.Image
                        src="/solutions/solution-2.png"
                        alt="Cost and scalability of blockchains"
                      />
                      <SolutionsBlock.Title>
                        Cost and scalability of blockchains
                      </SolutionsBlock.Title>
                      <SolutionsBlock.Description>
                        Existing blockchain solutions are expensive when it
                        comes to data operations and lack adequate database
                        properties. Any solution wishing to integrate blockchain
                        needs to overcome the problem of handling interoperable
                        data and the high cost.
                      </SolutionsBlock.Description>
                    </SolutionsBlock.Problem>
                    <SolutionsBlock.Solution>
                      <SolutionsBlock.Image
                        src="/solutions/solution-2.png"
                        alt="Infinitly scalable and cost efficient"
                      />
                      <SolutionsBlock.Title>
                        Infinitly scalable and cost efficient
                      </SolutionsBlock.Title>
                      <SolutionsBlock.Description>
                        Origintrail does all the heavy lifting off-chain by
                        leveraging powerfull graph data structures which allow
                        for high flexibility and (inter)connectivity of data.
                        Its open-source nature enables easy and efficient
                        deployment.
                      </SolutionsBlock.Description>
                    </SolutionsBlock.Solution>
                  </SolutionsBlock.Case>
                  <SolutionsBlock.Case>
                    <SolutionsBlock.Problem>
                      <SolutionsBlock.Image
                        src="/solutions/solution-3.png"
                        alt="Data tampering and centralization"
                      />
                      <SolutionsBlock.Title>
                        Data tampering and centralization
                      </SolutionsBlock.Title>
                      <SolutionsBlock.Description>
                        Current attempts to overcome data silos are done by
                        aggregating data in a centralized way, prompting
                        concerns about data integrity and omitting
                        accountability. Centralisation also allows for possible
                        data tampering and collusion between parties.
                      </SolutionsBlock.Description>
                    </SolutionsBlock.Problem>
                    <SolutionsBlock.Solution>
                      <SolutionsBlock.Image
                        src="/solutions/solution-3.png"
                        alt="Seamless connection of data"
                      />
                      <SolutionsBlock.Title>
                        Seamless connection of data
                      </SolutionsBlock.Title>
                      <SolutionsBlock.Description>
                        Origintrail harnasses the power of blockchain to create
                        a tamper-proof &ldquo;fingerprint&rdquo; (a
                        cryptographic hash) which is used to prove that data has
                        not been modified in any way. Origintrail is being built
                        to support many different blockchain implementations.
                      </SolutionsBlock.Description>
                    </SolutionsBlock.Solution>
                  </SolutionsBlock.Case>
                  <SolutionsBlock.Case>
                    <SolutionsBlock.Problem>
                      <SolutionsBlock.Image
                        src="/solutions/solution-4.png"
                        alt="Sensitive data protection"
                      />
                      <SolutionsBlock.Title>
                        Sensitive data protection
                      </SolutionsBlock.Title>
                      <SolutionsBlock.Description>
                        Companies are often reluctant to exchange data across
                        their supply chains or other companies as they are
                        concerned this might undermine their competitive
                        position. Exchange of data is often enforced by power
                        asymmetry or done because of regulatory reasons.{' '}
                      </SolutionsBlock.Description>
                    </SolutionsBlock.Problem>
                    <SolutionsBlock.Solution>
                      <SolutionsBlock.Image
                        src="/solutions/solution-4.png"
                        alt="Privacy by default"
                      />
                      <SolutionsBlock.Title>
                        Privacy by default
                      </SolutionsBlock.Title>
                      <SolutionsBlock.Description>
                        Data creators can set the data to be public or private,
                        have data expire after a certain amount of time, or have
                        that data (or parts of it) shared only with appropriate
                        parties. Sensitive data is protected using
                        “zero-knowledge” encryptions methods.{' '}
                      </SolutionsBlock.Description>
                    </SolutionsBlock.Solution>
                  </SolutionsBlock.Case>
                </SolutionsBlock>
              </Grid.Item>
            </Grid.Group>
            <Grid.Group>
              <Grid.Item>
                <IntroBlock align="left">
                  <IntroBlock.Subtitle>
                    A blockchain agnostic, multi-chain protocol
                  </IntroBlock.Subtitle>
                  <IntroBlock.Title>
                    The data backbone of web3, build for global use
                  </IntroBlock.Title>
                  <IntroBlock.Description>
                    OrginTrail protocol has been used to create robust
                    decentralized applications in nearly every industry
                  </IntroBlock.Description>
                </IntroBlock>
              </Grid.Item>
              <Grid.Item>
                <UseCaseBlock>
                  <UseCaseBlock.Case>
                    <UseCaseBlock.Title>Supply Chains</UseCaseBlock.Title>
                    <UseCaseBlock.Description>
                      Vivamus magna justo, lacinia eget consectetur sed,
                      convallis at tellus.
                    </UseCaseBlock.Description>
                    <UseCaseBlock.Image
                      src="/use-cases/use-case-1.png"
                      alt="Supply Chains"
                    />
                  </UseCaseBlock.Case>
                  <UseCaseBlock.Case>
                    <UseCaseBlock.Title>Non Fungible Tokens</UseCaseBlock.Title>
                    <UseCaseBlock.Description>
                      Vivamus magna justo, lacinia eget consectetur sed,
                      convallis at tellus.
                    </UseCaseBlock.Description>
                    <UseCaseBlock.Image
                      src="/use-cases/use-case-3.png"
                      alt="Non Fungible Tokens"
                    />
                  </UseCaseBlock.Case>
                  <UseCaseBlock.Case>
                    <UseCaseBlock.Title>
                      Decentralized Finance
                    </UseCaseBlock.Title>
                    <UseCaseBlock.Description>
                      Vivamus magna justo, lacinia eget consectetur sed,
                      convallis at tellus.
                    </UseCaseBlock.Description>
                    <UseCaseBlock.Image
                      src="/use-cases/use-case-2.png"
                      alt="Decentralized Finance"
                    />
                  </UseCaseBlock.Case>
                  <UseCaseBlock.Case>
                    <UseCaseBlock.Title>Data Marketplace</UseCaseBlock.Title>
                    <UseCaseBlock.Description>
                      Vivamus magna justo, lacinia eget consectetur sed,
                      convallis at tellus.
                    </UseCaseBlock.Description>
                    <UseCaseBlock.Image
                      src="/use-cases/use-case-1.png"
                      alt="Data Marketplace"
                    />
                  </UseCaseBlock.Case>
                  <UseCaseBlock.Case>
                    <UseCaseBlock.Title>
                      Cetifications & Compliance
                    </UseCaseBlock.Title>
                    <UseCaseBlock.Description>
                      Vivamus magna justo, lacinia eget consectetur sed,
                      convallis at tellus.
                    </UseCaseBlock.Description>
                    <UseCaseBlock.Image
                      src="/use-cases/use-case-3.png"
                      alt="Cetifications & Compliance"
                    />
                  </UseCaseBlock.Case>
                  <UseCaseBlock.Case>
                    <UseCaseBlock.Title>
                      Logistics & Transportation
                    </UseCaseBlock.Title>
                    <UseCaseBlock.Description>
                      Vivamus magna justo, lacinia eget consectetur sed,
                      convallis at tellus.
                    </UseCaseBlock.Description>
                    <UseCaseBlock.Image
                      src="/use-cases/use-case-2.png"
                      alt="Logistics & Transportation"
                    />
                  </UseCaseBlock.Case>
                  <UseCaseBlock.Case>
                    <UseCaseBlock.Title>
                      Pharmaceutical Industry
                    </UseCaseBlock.Title>
                    <UseCaseBlock.Description>
                      Vivamus magna justo, lacinia eget consectetur sed,
                      convallis at tellus.
                    </UseCaseBlock.Description>
                    <UseCaseBlock.Image
                      src="/use-cases/use-case-1.png"
                      alt="Pharmaceutical Industry"
                    />
                  </UseCaseBlock.Case>
                  <UseCaseBlock.Case>
                    <UseCaseBlock.Title>
                      Personal Data Management
                    </UseCaseBlock.Title>
                    <UseCaseBlock.Description>
                      Vivamus magna justo, lacinia eget consectetur sed,
                      convallis at tellus.
                    </UseCaseBlock.Description>
                    <UseCaseBlock.Image
                      src="/use-cases/use-case-3.png"
                      alt="Personal Data Management"
                    />
                  </UseCaseBlock.Case>
                </UseCaseBlock>
              </Grid.Item>
            </Grid.Group>
            <Grid.Group>
              <Grid.Item>
                <ImageBlock src="/home/image-1.png" alt="Helping the world unlock the true potential of data assets" />
              </Grid.Item>
              <Grid.Item>
                <IntroBlock>
                  <IntroBlock.Subtitle>
                    A blockchain agnostic, multi-chain protocol
                  </IntroBlock.Subtitle>
                  <IntroBlock.Title>
                    A global and permissionless network of nodes
                  </IntroBlock.Title>
                  <IntroBlock.Description>
                    The OriginTrail Decentralized Network (ODN) is a global
                    peer-to-peer network that is permissionless and
                    decentralized. The protocol combines knowledge graph and
                    blockchain technology and is build with interoperability and
                    global standards in mind.
                  </IntroBlock.Description>
                  <IntroBlock.Action
                    label="How it works"
                    Icon={ArrowRightFillIcon}
                  />
                </IntroBlock>
              </Grid.Item>
              <Grid.Item>
                <TimelineBlock>
                  <TimelineBlock.Event
                    date={new Date(2018, 11, 7)}
                    title="Ethereum"
                    icon="/blockchain-timeline/ethereum.svg"
                  />
                  <TimelineBlock.Event
                    date={new Date(2021, 2, 23)}
                    title="Xdai"
                    icon="/blockchain-timeline/xdai.svg"
                  />
                  <TimelineBlock.Event
                    date={new Date(2021, 7, 26)}
                    title="Polygon"
                    icon="/blockchain-timeline/polygon.svg"
                  />
                  <TimelineBlock.Event
                    title="Polkadot"
                    icon="/blockchain-timeline/polkadot.svg"
                  />
                </TimelineBlock>
              </Grid.Item>
              <Grid.Item>
                <ArticleBlock>
                  <ArticleBlock.Content>
                    <ArticleBlock.Subtitle>
                      A self-sustaining, incentiviced network
                    </ArticleBlock.Subtitle>
                    <ArticleBlock.Title>
                      The four network participants
                    </ArticleBlock.Title>
                    <ArticleBlock.Description>
                      The $TRAC token is a means of compensation between data
                      creators, data holders, and data consumers. It uses an
                      innovative staking system to keep all parties honest.
                      Nodes are therefore incentivized for performing consensus
                      checks and delivering data on demand.
                    </ArticleBlock.Description>
                    <ArticleBlock.Action
                      label="Token Utility"
                      Icon={ArrowRightFillIcon}
                    />
                  </ArticleBlock.Content>
                  <ArticleBlock.Image
                    src="/home/network-participants.jpg"
                    alt="The four network participants"
                  />
                </ArticleBlock>
              </Grid.Item>
              <Grid.Item>
                <ParticipantsBlock>
                  <ParticipantsBlock.Participant>
                    <ParticipantsBlock.Image
                      src="/participants/participant-1.png"
                      alt="Data Providers"
                    />
                    <ParticipantsBlock.Title>
                      Data Providers
                    </ParticipantsBlock.Title>
                    <ParticipantsBlock.Description>
                      An entity that publishes ERP or other data to the
                      OriginTrail Decentralized Network (ODN)
                    </ParticipantsBlock.Description>
                  </ParticipantsBlock.Participant>
                  <ParticipantsBlock.Participant>
                    <ParticipantsBlock.Image
                      src="/participants/participant-1.png"
                      alt="Data Creators"
                    />
                    <ParticipantsBlock.Title>
                      Data Creators
                    </ParticipantsBlock.Title>
                    <ParticipantsBlock.Description>
                      An entity that is responsible for correctly importing the
                      data from the data provider
                    </ParticipantsBlock.Description>
                  </ParticipantsBlock.Participant>
                  <ParticipantsBlock.Participant>
                    <ParticipantsBlock.Image
                      src="/participants/participant-1.png"
                      alt="Data Holders"
                    />
                    <ParticipantsBlock.Title>
                      Data Holders
                    </ParticipantsBlock.Title>
                    <ParticipantsBlock.Description>
                      An entity that commits to storing and holding the data for
                      a certain period of time
                    </ParticipantsBlock.Description>
                  </ParticipantsBlock.Participant>
                  <ParticipantsBlock.Participant>
                    <ParticipantsBlock.Image
                      src="/participants/participant-1.png"
                      alt="Data Viewers"
                    />
                    <ParticipantsBlock.Title>
                      Data Viewers
                    </ParticipantsBlock.Title>
                    <ParticipantsBlock.Description>
                      An entity that requests data from any of the available
                      nodes in the ODN network
                    </ParticipantsBlock.Description>
                  </ParticipantsBlock.Participant>
                </ParticipantsBlock>
              </Grid.Item>
            </Grid.Group>
            <Grid.Group>
              <Grid.Item>
                <IntroBlock>
                  <IntroBlock.Subtitle>
                    Harnessing Neutrality, Inclusiveness & Usability
                  </IntroBlock.Subtitle>
                  <IntroBlock.Title>
                    Helping the world unlock the true potential of data assets
                  </IntroBlock.Title>
                  <IntroBlock.Description>
                    Organize, discover and verify anything - from physical to
                    digital assets like supply chain items to Art, Diplomas,
                    Certificates, NFTs, DeFi and more. The Decentralized
                    Knowledge Graph allows the worlds’ data assets to be
                    structured, linked, persistent and understandable.
                  </IntroBlock.Description>
                  <IntroBlock.Action
                    label="How it works"
                    Icon={ArrowRightFillIcon}
                  />
                </IntroBlock>
              </Grid.Item>
              <Grid.Item>Products</Grid.Item>
              <Grid.Item>Quotes</Grid.Item>
              <Grid.Item>Companies</Grid.Item>
            </Grid.Group>
            <Grid.Group>
              <Grid.Item>
                <IntroBlock>
                  <IntroBlock.Subtitle>Tracers unite!</IntroBlock.Subtitle>
                  <IntroBlock.Title>
                    Join our vibrant community today
                  </IntroBlock.Title>
                  <IntroBlock.Description>
                    OriginTrail is not a company. It is an ecosystem in which
                    everyone can contribute. We are connected on so many levels.
                    Let’s collaborate, learn, contribute, and spread the word.
                    Together.
                  </IntroBlock.Description>
                </IntroBlock>
              </Grid.Item>
              <Grid.Item>Socials</Grid.Item>
            </Grid.Group>
          </Grid>
        </OverviewLayout.Content>
        <OverviewLayout.Footer />
      </OverviewLayout>
    </>
  );
};

export default Home;
