import { FC } from 'react';
import Link from 'next/link';
import styled from 'styled/styled';
import { PromosDataType } from 'types/promo';
import PromoCard from 'components/promoPage/promoCard/promoCard';

const StyledPromos = styled.div`
  padding-top: 170px;
  display: flex;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.screens.tablet}) {
    padding-top: 100px;
  }
  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    padding-top: 25px;
  }
  .promo {
    margin: 70px 0 160px 0;
    width: 100%;
    max-width: 1340px;
    padding: 0 30px;
    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      margin: 30px 0 0px 0;
      max-width: 990px;
      padding: 0 20px;
    }
    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      margin: 25px 0 60px 0;
      max-width: 660px;
      padding: 0 10px;
    }
  }
  .promo__title {
    ${({ theme }) => theme.typography.text80x80};
    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text30x30};
    }
    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      ${({ theme }) => theme.typography.text16x20Bold};
      order: 1;
      margin-top: 30px;
    }
  }
  .promo__wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .promo__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  .promo__link {
    color: #000000;
    width: calc(50% - 20px);
    margin-left: 20px;
    margin-top: 40px;
    &:nth-of-type(2n + 1) {
      margin-left: 0;
    }
    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      width: calc(50% - 20px);
      margin-top: 30px;
    }
    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      width: 100%;
    }
    margin-left: 0;
  }
`;

interface PromosLayoutProps {
  promos: PromosDataType[];
}

export const PromosLayout: FC<PromosLayoutProps> = ({ promos }) => (
  <StyledPromos>
    <div className="promo">
      <div className="promo__top">
        <p className="promo__title">Акции</p>
      </div>
      <div className="promo__wrapper">
        {promos.map(({ color, pic_path, name, position, slug }, i) => (
          <Link key={i} href="/promo/[slug]" as={`/promo/${slug}`}>
            <a className="promo__link">
              <PromoCard
                background={color}
                backgroundImage={pic_path}
                title={name}
                bgPosition={position}
              />
            </a>
          </Link>
        ))}
      </div>
    </div>
  </StyledPromos>
);

export default PromosLayout;
