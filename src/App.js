import ProductCard from './components/productCard';
import NavBar from './components/navBar';
import SearchBar from './components/searchBar';
import AboutUs from './components/aboutUs';
import './index.css'
import './navBar.css'
import './searchBar.css'
import './categoryBar.css'
import productData from './components/productData';
import CategoryData from './components/categoryData';
import companyData from './components/companyData'
import CompanyCard from './components/companyCard';

function App() {
  const productIds = Object.keys(productData);
  const companyIds = Object.keys(companyData);
  const categoryIds = Object.keys(CategoryData);

  return (
    <div className="App">
      <NavBar />  
      <SearchBar />
      <div class="itemBar">
        <p>Popular Items</p>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {productIds.map((productId) => (
          <ProductCard key={productId} productId={productId} />
        ))}
      </div>
      <div class="itemBar">
        <p>Top-rated products</p>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {productIds.map((productId) => (
          <ProductCard key={productId} productId={productId} />
        ))}
      </div>
      <div class="itemBar">
        <p>Newest release product</p>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {productIds.map((productId) => (
          <ProductCard key={productId} productId={productId} />
        ))}
      </div>
      <div class="itemBar">
        <p>Categories</p>
      </div>
      {/* <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {categoryIds.map((CategoryId) => (
          <CategoryBar key={CategoryId} CategoryId={CategoryId} />
        ))}
      </div> */}
      <div class="itemBar">
        <p>Companies</p>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {companyIds.map((companyId) => (
          <CompanyCard key={companyId} companyId={companyId} />
        ))}
      </div>
      <AboutUs/>
    </div>
  );
}

export default App;
