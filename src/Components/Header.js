import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
  padding: var(--padding);

  gap: var(--gap);

  border-bottom: 1px solid var(--light-alt-color);
`

const InfoWrapper = styled.section`
  width: 70%;

  & p {
    margin-top:1rem;
  }
`

function Header() {
  return (
    <HeaderWrapper>
      <h1>2023 yılı Milletvekili hesaplayıcı - D'Hondt Sistemi</h1>
      <InfoWrapper>
        <p>Programa vekil sayısını girin ve her parti için tahmini oy sayısını girin. "Hesapla" butonuna tıklayın ve D'Hondt sistemi ile hesaplanmış sonuçları görün.</p>
        <p>Yüzde değerleri girilebilir, ancak vekil sayısı tam sayı olacağı için 1 vekil sapması olabilir. Kesin sonuçlar için oy sayısı veya küsüratlı yüzde değerleri kullanılmalıdır.</p>
      </InfoWrapper>
    </HeaderWrapper>
  );
}

export default Header;
