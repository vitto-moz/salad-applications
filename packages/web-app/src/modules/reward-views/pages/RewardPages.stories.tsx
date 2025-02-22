import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import { BrowseRewardsPage, RewardDetailsPage } from '.'
import { generateResults, generateRewards } from '../components/RewardComponents.stories'

storiesOf('Modules/Reward Pages/Reward Details Page', module)
  .add('complete reward (in cart)', () => {
    let reward = generateRewards(1)[0]
    return (
      <RewardDetailsPage
        reward={reward}
        onRedeem={action('redeem')}
        isInCart={true}
        onAddToCart={action('add to cart')}
        onRemoveFromCart={action('remove from cart')}
        requiresMinecraftUsername={boolean('Requires Minecraft Username', false)}
        requiresPayPalAccount={boolean('Requires PayPal Account', false)}
        trackDisabledBuyNowClick={action('Tracks Disabled Button Click')}
      />
    )
  })
  .add('complete reward (not in cart)', () => {
    let reward = generateRewards(1)[0]
    return (
      <RewardDetailsPage
        reward={reward}
        onRedeem={action('redeem')}
        isInCart={false}
        onAddToCart={action('add to cart')}
        onRemoveFromCart={action('remove from cart')}
        requiresMinecraftUsername={boolean('Requires Minecraft Username', false)}
        requiresPayPalAccount={boolean('Requires PayPal Account', false)}
        trackDisabledBuyNowClick={action('Tracks Disabled Button Click')}
      />
    )
  })

storiesOf('Modules/Reward Pages/Browse Rewards Page', module)
  .add('with rewards (n=1)', () => {
    let results = generateResults(1)
    return (
      <BrowseRewardsPage
        results={results}
        onBack={action('back')}
        onClickReward={action('Reward Item Clicked Event')}
      />
    )
  })
  .add('with rewards (n=4)', () => {
    let results = generateResults(4)
    return (
      <BrowseRewardsPage
        results={results}
        onBack={action('back')}
        onClickReward={action('Reward Item Clicked Event')}
      />
    )
  })
  .add('with rewards (n=10)', () => {
    let results = generateResults(10)
    return (
      <BrowseRewardsPage
        results={results}
        onBack={action('back')}
        onClickReward={action('Reward Item Clicked Event')}
      />
    )
  })
  .add('with rewards & title (n=50)', () => {
    let results = generateResults(50)
    return (
      <BrowseRewardsPage
        title={'Amazing Games'}
        results={results}
        onBack={action('back')}
        onClickReward={action('Reward Item Clicked Event')}
      />
    )
  })
  .add('no rewards w/ title', () => {
    return (
      <BrowseRewardsPage
        title={'Amazing Games'}
        results={undefined}
        onBack={action('back')}
        onClickReward={action('Reward Item Clicked Event')}
      />
    )
  })
  .add('no rewards (undefined)', () => {
    return (
      <BrowseRewardsPage
        results={undefined}
        onBack={action('back')}
        onClickReward={action('Reward Item Clicked Event')}
      />
    )
  })
  .add('no rewards (empty)', () => {
    return (
      <BrowseRewardsPage results={[]} onBack={action('back')} onClickReward={action('Reward Item Clicked Event')} />
    )
  })
  .add('with title', () => {
    return (
      <BrowseRewardsPage
        title={'Amazing Games'}
        results={[]}
        onBack={action('back')}
        onClickReward={action('Reward Item Clicked Event')}
      />
    )
  })
  .add('no title', () => {
    return (
      <BrowseRewardsPage
        title={undefined}
        results={[]}
        onBack={action('back')}
        onClickReward={action('Reward Item Clicked Event')}
      />
    )
  })
