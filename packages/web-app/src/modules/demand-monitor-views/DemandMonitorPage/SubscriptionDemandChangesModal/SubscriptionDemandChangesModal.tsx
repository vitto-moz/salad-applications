import type CSS from 'csstype'
import type { WithStyles } from 'react-jss'
import withStyles from 'react-jss'
import type { SaladTheme } from '../../../../SaladTheme'
import { ModalWithOverlay } from '../../../../components/ModalWithOverlay'
import saladBackgroundUrl from './assets/background.png'

const styles: (theme: SaladTheme) => Record<string, CSS.Properties> = (theme: SaladTheme) => ({
  modalWrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    maxWidth: '700px',
    '@media (min-width: 812px)': {
      width: '700px',
      maxWidth: 'none',
    },
  },
  modalContent: {
    position: 'relative',
    width: '80%',
    display: 'flex',
    backgroundColor: theme.darkBlue,
    padding: '48px 64px 72px 24px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    boxSizing: 'border-box',
    '@media (max-width: 812px)': {
      padding: '24px 16px 36px 16px',
      width: '100%',
    },
  },
  title: {
    color: theme.green,
    fontWeight: 700,
    display: 'flex',
    flexDirection: 'column',
    fontSize: '28px',
    '@media (max-width: 812px)': {
      fontSize: '20px',
    },
  },
  subtitle: {
    color: theme.green,
    fontWeight: 700,
    display: 'flex',
    flexDirection: 'column',
    fontSize: '16px',
    margin: '0px',
    marginTop: '24px',
  },
  description: {
    color: 'white',
    fontWeight: 400,
    fontSize: '14px',
    margin: '0px',
    width: '100%',
  },
  link: {
    color: theme.green,
    fontWeight: 400,
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  saladImageWrapper: {
    position: 'relative',
    height: '500px',
    width: '35%',
    '@media (max-width: 812px)': {
      display: 'none',
    },
  },
  saladImage: {
    position: 'absolute',
    top: '0px',
    right: '0px',
    width: '100%',
    height: '100%',
    backgroundImage: `url(${saladBackgroundUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  },
  closeIcon: {
    position: 'absolute',
    right: '16px',
    top: '16px',
    color: theme.lightGreen,
    width: '16px',
    height: '16px',
    cursor: 'pointer',
  },
  controlsWrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '500px',
    marginTop: '24px',
  },
  dropdownWrapper: {
    position: 'absolute',
    top: '0px',
    left: '0px',
  },
  dropdown: {
    position: 'fixed',
  },
  continueButtonWrapper: {
    marginLeft: '260px',
  },
  subscriptionFormWrapper: {
    // transform: 'scale(0.8)',
    // transformOrigin: 'top left',
    color: theme.darkBlue,
    backgroundColor: theme.white,
    width: '500px',
    '@media (max-width: 812px)': {
      width: '100%',
    },
  },
})

const formHtml = `<div id="mc_embed_shell">
<link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
<style type="text/css">
#mc_embed_signup{background:#fff; false;clear:left; font:14px Helvetica,Arial,sans-serif; width: '100%'; color: 'black'}
/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. /
</style>
<div id="mc_embed_signup">
<form action="https://salad.us19.list-manage.com/subscribe/post?u=dee959e4ca8934a51c2b00168&amp;id=6c59d68b36&amp;f_id=00da36e3f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
<div id="mc_embed_signup_scroll"><h2>Subscribe</h2>
<div class="indicates-required"><span class="asterisk"></span> indicates required</div>
<div class="mc-field-group"><label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value=""></div><div class="mc-field-group input-group"><strong>Demand Alerts </strong><ul><li><input type="checkbox" name="group[78328][1]" id="mce-group[78328]-78328-0" value=""><label for="mce-group[78328]-78328-0">NVIDIA RTX 4080 @ High Demand</label></li><li><input type="checkbox" name="group[78328][2]" id="mce-group[78328]-78328-1" value=""><label for="mce-group[78328]-78328-1">NVIDIA RTX 4080 @ Moderate Demand</label></li><li><input type="checkbox" name="group[78328][4]" id="mce-group[78328]-78328-2" value=""><label for="mce-group[78328]-78328-2">NVIDIA RTX 4080 @ Low Demand</label></li></ul></div>
<div id="mce-responses" class="clear">
<div class="response" id="mce-error-response" style="display: none;"></div>
<div class="response" id="mce-success-response" style="display: none;"></div>
</div><div aria-hidden="true" style="position: absolute; left: -5000px;"><input type="text" name="b_dee959e4ca8934a51c2b00168_6c59d68b36" tabindex="-1" value=""></div><div class="clear"><input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe"></div>
</div>
</form>
</div>
<script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script><script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';}(jQuery));var $mcj = jQuery.noConflict(true);</script></div>`

interface Props extends WithStyles<typeof styles> {
  className?: string
  onCloseClick: () => void
}

const _SubscriptionDemandChangesModal = ({ classes, onCloseClick }: Props) => {
  return (
    <ModalWithOverlay onCloseClick={onCloseClick}>
      <div className={classes.modalWrapper}>
        <div className={classes.saladImageWrapper}>
          <div className={classes.saladImage} />
        </div>
        <div className={classes.modalContent}>
          <h1 className={classes.title}>Get Notified Of Demand Changes</h1>
          <div className={classes.subscriptionFormWrapper} dangerouslySetInnerHTML={{ __html: formHtml }}></div>
        </div>
      </div>
    </ModalWithOverlay>
  )
}

export const SubscriptionDemandChangesModal = withStyles(styles)(_SubscriptionDemandChangesModal)
