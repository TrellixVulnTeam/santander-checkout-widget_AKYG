import type { FC } from 'react';
import { Grid } from 'semantic-ui-react';
import { useAppSelector } from 'redux/redux-hooks';
import type {
  Theme,
  Translations,
  PaymentDetailsState,
} from 'types/global-types';
import { useCalulate } from 'utils/custom-hooks';

interface Props {
  translations: Translations,
  theme: Theme
}

const Footer:FC<Props> = ({
  translations,
  theme,
}): JSX.Element => {
  const {
    selectedAmount,
    loanAmount,
    nomInterestRate,
    termFee,
    startupFee,
  }: PaymentDetailsState = useAppSelector(({ paymentDetails }) => paymentDetails);

  const resumeFontSize = `${(Number(theme.headerFontSize.split('px')[0]) - 1)}px`;

  const {
    fixedTotalAmount,
    fixedTotalCost,
    effectiveInterestRate,
  } = useCalulate({
    selectedAmount,
    loanAmount,
    nomInterestRate,
    startupFee,
    termFee,
  });

  return (
    <Grid.Row columns={1} textAlign="left">
      <Grid.Column>
        <p style={{ fontSize: resumeFontSize }}>
          { translations.inTotal }: { fixedTotalAmount } | { translations.effectiveInterestRate }:
          <span> { effectiveInterestRate }% | { translations.cost }: { fixedTotalCost } </span>
        </p>
        <p style={{
          fontSize: theme.footerFontSize,
          marginTop: '-10px',
        }}
        >
          { translations.footer }
        </p>
      </Grid.Column>
    </Grid.Row>
  );
};

export default Footer;
