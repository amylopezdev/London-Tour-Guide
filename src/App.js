import { useState, useEffect } from 'react';
import data from './data'

export const App = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [categories, setCategories] = useState([]);

  const allCategories = [
    "all",
    ...new Set(data.map((place) => place.category))
  ];

  useEffect(() => {
    setCategories(allCategories);
    setSelectedCategory("all")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterItems = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section className="App">
      <header>
        <h1>Calandra's Guide to London</h1>
      </header>
      <div className="category-filter">
        <label htmlFor="category-select" style={{ opacity: '0' }}>Categories</label>
        <select name="category-select" onChange={(e) => filterItems(e.target.value)}>
          {categories.map((category, index) => {
            return (
              <option key={index} value={category}>{category}</option>
            );
          })}
        </select>
      </div>
      <main>
        {data
          .filter((place) => {
            if (selectedCategory === "all") return true;
            return place.category === selectedCategory;
          })
          .map((place) => {
            const { id, title, subtitle, description, budget, images, tags, website, address } = place;
            return (
              <article key={id} className="place">
                <h2 className="title">{title}</h2>
                <h3 className="subtitle">{subtitle}</h3>
                <div className="images">
                  {images.map((image, index) => (
                    <img key={index} src={image} alt="" />
                  ))}
                </div>
                {description && <p className="description">{description}</p>}
                <div className="flex">
                  <ul className="details">
                    <li>
                      <span>Budget:</span>
                      {budget > 0 ? "£".repeat(budget) : "free entry"}
                    </li>
                    {website && (
                      <li>
                        <a href={website}>
                          Website
                        </a>
                      </li>
                    )}
                    <li>
                      {address && <a href={`https://www.google.com/maps?q=${address}`}>Directions</a>}
                    </li>
                  </ul>
                  <ul className="tags">
                    {tags.map((tag, index) => {
                      return (
                        <li key={index} className="tag">
                          <span>#</span>
                          {tag}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </article>
            )
          })}
      </main>
    </section>
  )
}

export default App;
