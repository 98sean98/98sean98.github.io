import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  alignLeft: {
    textAlign: 'left',
  },
  alignCenter: {
    textAlign: 'center',
  },
  section: {
    margin: `${theme.spacing(1)}px auto`,
  },
}));

export const Details = ({ shouldAlignCenter }) => {
  const classes = useStyles();

  return (
    <Container className={classes.alignLeft}>
      <div className={classes.section}>
        <Typography variant={'h4'}>Smart Laundry System</Typography>
        <Typography variant={'caption'}>
          <Link href={'https://rctech.club'}>RC Tech Club</Link> Project (Summer 2019)
        </Typography>
      </div>

      <div className={classes.section}>
        <Typography variant={'body1'} gutterBottom>
          Let's just agree that HKU's residential halls' laundry machines are dinosaurs; on far too
          many occasions hallmates have been frustrated by fully occupied machines after they spent
          precious time hauling their laundry from their rooms to the laundry rooms, which are
          normally situated in the highest floor of the flat. This needs to change, because, as
          students, we are too busy for anything.
        </Typography>
        <Typography variant={'body1'} gutterBottom>
          This is where RC Tech club came together to modernise our machines by connecting it to the
          internet! In short, we have made an IoT device that would inform us the operating status
          of each machine. With this infrastructure installed, hallmates can now easily check the
          status at our beautifully curated website.
        </Typography>
        <Typography variant={'body2'} gutterBottom>
          Credits to my roommate{' '}
          <Link href={'https://www.linkedin.com/in/jaehun-lee-8b2a07193/'}>Jae Hun</Link> for the
          footage.
        </Typography>
        <Typography variant={'body2'} gutterBottom>
          Key takeaway: some hallmates were really grateful
        </Typography>
      </div>

      <div className={clsx(classes.section, shouldAlignCenter && classes.alignCenter)}>
        <Button
          variant={'outlined'}
          color={'primary'}
          size={'small'}
          disableElevation
          href={'https://sls.rctech.club'}>
          check out the website
        </Button>
      </div>
    </Container>
  );
};
