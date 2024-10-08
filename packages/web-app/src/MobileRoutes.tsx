import type { Location } from 'history'
import type { ReactNode } from 'react'
import { Component } from 'react'
import type { RouteComponentProps } from 'react-router'
import { Redirect, Route, Switch, withRouter } from 'react-router'
import { getStore } from './Store'
import { MobilePageNotFound } from './components'
import { MobileAccountSummaryContainer } from './modules/account-views-mobile'
import { MobileEarningSummaryContainer } from './modules/earn-views-mobile'
import { PasskeyDeletePageContainer } from './modules/passkey-delete'
import { PasskeySetupPageContainer, isPasskeyFeatureEnabled } from './modules/passkey-setup'
import { PasskeySuccessPageContainer } from './modules/passkey-success'
import { BackupCodesPageContainer } from './modules/backup-codes/BackupCodesPageContainer'
import { RewardDetailsContainer } from './modules/reward-views'

class _Routes extends Component<RouteComponentProps> {
  store = getStore()
  public override render(): ReactNode {
    const { location } = this.props

    const currentLocation =
      (location.state as { currentLocation: Location | undefined } | undefined)?.currentLocation || location
    return (
      <>
        <Switch location={currentLocation}>
          <Route exact path="/earn/summary" component={MobileEarningSummaryContainer} />
          <Route path="/account/summary" component={MobileAccountSummaryContainer} />
          <Route exact path="/rewards/:id" component={RewardDetailsContainer} />
          <Redirect exact from="/account/summary" to="/account/summary" />
          {isPasskeyFeatureEnabled && (
            <Route exact path="/account/passkey/setup" component={PasskeySetupPageContainer} />
          )}
          {isPasskeyFeatureEnabled && (
            <Route exact path="/account/passkey/success" component={PasskeySuccessPageContainer} />
          )}
          {isPasskeyFeatureEnabled && (
            <Route exact path="/account/passkey/delete/:id" component={PasskeyDeletePageContainer} />
          )}
          {isPasskeyFeatureEnabled && (
            <Route path="/account/backup-codes" exact component={BackupCodesPageContainer} />
          )}
          <Route component={MobilePageNotFound} />
        </Switch>
      </>
    )
  }
}

export const MobileRoutes = withRouter(_Routes)
