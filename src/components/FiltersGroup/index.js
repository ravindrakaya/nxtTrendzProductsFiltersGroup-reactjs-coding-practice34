import {IoIosSearch} from 'react-icons/io'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    changeCategory,
    changeRating,
    activeCategoryId,
    activeRatingId,
    changeSearchInput,
    searchInput,
    clearFilters,
    enterSearchInput,
  } = props

  const onChangeSearchInput = event => {
    changeSearchInput(event.target.value)
  }

  const onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  return (
    <div className="filters-group-container">
      <div className="search-input-container">
        <input
          type="search"
          value={searchInput}
          className="search-input"
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <IoIosSearch />
      </div>
      <h1 className="categories-heading">Category</h1>
      <ul className="category-list-container">
        {categoryOptions.map(eachItem => {
          const onClickCategoryItem = () => changeCategory(eachItem.categoryId)
          const isActive = eachItem.categoryId === activeCategoryId
          const categoryClsName = isActive
            ? `category-name active-category-name`
            : `category-name`

          return (
            <li
              key={eachItem.categoryId}
              className="category-list-item"
              onClick={onClickCategoryItem}
            >
              <p className={categoryClsName}>{eachItem.name}</p>
            </li>
          )
        })}
      </ul>
      <h1 className="rating-heading">Rating</h1>
      <ul className="rating-list-container">
        {ratingsList.map(eachItem => {
          const onClickRatingItem = () => changeRating(eachItem.ratingId)
          const isActive = eachItem.ratingId === activeRatingId
          const ratingClsName = isActive ? `and-up active-rating` : `and-up`
          return (
            <li
              key={eachItem.ratingId}
              className="rating-list-item"
              onClick={onClickRatingItem}
            >
              <img
                src={eachItem.imageUrl}
                className="rating-img"
                alt={`rating ${eachItem.ratingId}`}
              />
              <p className={ratingClsName}>& up</p>
            </li>
          )
        })}
      </ul>
      <button type="button" className="clear-filter-btn" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
