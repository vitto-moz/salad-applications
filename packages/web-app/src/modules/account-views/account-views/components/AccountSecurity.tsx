import { faEye, faKey, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Text } from '@saladtechnologies/garden-components'
import type CSS from 'csstype'
import moment from 'moment'
import { useEffect, type FC } from 'react'
import type { WithStyles } from 'react-jss'
import withStyles from 'react-jss'
import { useMediaQuery } from 'react-responsive'
import { mobileSize } from '../../../../components'
import type { Passkey } from '../../../passkey-setup'

const styles: () => Record<string, CSS.Properties> = () => ({
  accountSecurityWrapper: {
    flex: 1,
    marginTop: '32px',
    maxWidth: '400px',
  },
  accountSecurityContent: {
    paddingTop: '32px',
  },
  passkeysDescription: {
    paddingTop: '16px',
  },
  sectionWrapper: {
    paddingTop: '32px',
    width: '100%',
  },
  buttonIcon: {
    position: 'relative',
    top: '-3px',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: '14px',
  },
  sectionTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '150px',
  },
  passkeysList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  passkeysListItem: {
    marginTop: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  deletePasskeyIcon: {
    cursor: 'pointer',
  },
  passkeyName: {
    width: '200px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
})

const passkeysAmountLimit = 30

interface Props extends WithStyles<typeof styles> {
  passkeys: Passkey[]
  withBackupCodes: boolean
  onAddPasskeyClick: () => void
  onDeletePasskeyClick: (passkeyId: string) => void
  onViewBackupCodesClick: () => void
  fetchPasskeys: () => void
}

const _AccountSecurity: FC<Props> = ({
  classes,
  passkeys,
  withBackupCodes,
  onAddPasskeyClick,
  onDeletePasskeyClick,
  onViewBackupCodesClick,
  fetchPasskeys,
}) => {
  const passkeysAmount = passkeys.length
  const isAddPasskeyAvailable = passkeysAmount < passkeysAmountLimit
  const isTabletOrMobile = useMediaQuery({ query: `(max-width: ${mobileSize}px)` })

  useEffect(() => {
    fetchPasskeys()
  }, [fetchPasskeys])

  return (
    <div className={classes.accountSecurityWrapper}>
      <Text variant="baseXL">Account Security</Text>
      <div className={classes.accountSecurityContent}>
        <Text variant="baseL">Passkeys</Text>
        <div className={classes.passkeysDescription}>
          <Text variant="baseS">
            Passkeys are a convenient and secure way to access your online accounts. They replace passwords and
            two-factor authentication codes and are quickly becoming the standard way to secure online accounts.
          </Text>
        </div>
        <div className={classes.sectionWrapper}>
          <div className={classes.sectionHeader}>
            <div className={classes.sectionTitle}>
              <Text variant="baseM">Your Passkeys</Text>
              <Text variant="baseXS">
                ({passkeysAmount}/{passkeysAmountLimit})
              </Text>
            </div>
            {isAddPasskeyAvailable && (
              <Button
                onClick={onAddPasskeyClick}
                variant={isTabletOrMobile ? 'secondary' : 'primary'}
                size="small"
                label="Add a Passkey"
                leadingIcon={<FontAwesomeIcon icon={faKey} className={classes.buttonIcon} />}
              />
            )}
          </div>
          <div className={classes.passkeysList}></div>
          {passkeys.map((passkey) => {
            return (
              <div className={classes.passkeysListItem} key={passkey.id}>
                <Text variant="baseS" className={classes.passkeyName}>
                  {passkey.displayName}
                </Text>
                <Text variant="baseS">{moment(passkey.createdAt).format('MMMM DD, YYYY')}</Text>
                <FontAwesomeIcon
                  icon={faTrashCan}
                  className={classes.deletePasskeyIcon}
                  onClick={() => onDeletePasskeyClick(passkey.id)}
                />
              </div>
            )
          })}
        </div>
        {withBackupCodes && (
          <div className={classes.sectionWrapper}>
            <div className={classes.sectionHeader}>
              <div className={classes.sectionTitle}>
                <Text variant="baseM">Backup Codes</Text>
              </div>
            </div>
            <Button
              onClick={onViewBackupCodesClick}
              variant={isTabletOrMobile ? 'secondary' : 'primary'}
              size="small"
              width={210}
              label="View Backup Codes"
              leadingIcon={<FontAwesomeIcon icon={faEye} className={classes.buttonIcon} />}
            />
            <div className={classes.passkeysDescription}>
              <Text variant="baseS">
                Backup codes are single-use codes that will allow you to take actions that would require your passkey
                when you don’t have access to your passkeys.
              </Text>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export const AccountSecurity = withStyles(styles)(_AccountSecurity)
