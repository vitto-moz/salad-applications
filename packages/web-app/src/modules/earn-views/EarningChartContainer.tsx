import { connect } from '../../connect'
import type { RootStore } from '../../Store'
import { EarningChart } from './components/EarningChart'

const mapStoreToProps = (store: RootStore): any => ({
  earningHistory: store.balance.earningsHistory,
  daysShowing: store.balance.getDaysShowingEarnings,
})

export const EarningChartContainer = connect(mapStoreToProps, EarningChart)
