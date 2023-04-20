function Header() {
  return (
    <header>
      <h1>2023 yılı Milletvekili hesabı - D'Hondt Sistemi</h1>
      <div id="info-container">
        <p>Programa vekil sayısını girin ve her parti için tahmini oy sayısını girin. "Hesapla" butonuna tıklayın ve D'Hondt sistemi ile hesaplanmış sonuçları görün. "Temizle" butonuna tıklayarak formu sıfırlayabilirsiniz.</p>
        <p>Yüzde değerleri girilebilir, ancak vekil sayısı tam sayı olacağı için 1 vekil sapması olabilir. Kesin sonuçlar için oy sayısı veya detaylı yüzde değerleri kullanılmalıdır.</p>
      </div>
    </header>
  );
}

export default Header;
