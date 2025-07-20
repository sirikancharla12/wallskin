

import { Link, useParams, useSearchParams } from "react-router-dom"
import { useEffect, useState, useRef } from "react"
import wallpapersData from "../data/wallpapers.json"
import curtains from "../data/curtains.json"
import blinds from "../data/blinds.json"

import Card from "../ui/Card"
import AnimationContainer from "../ui/AnimationContainer"
import { Filter, SortAsc, ChevronDown, X } from "lucide-react"


export default function AllProducts() {
  const { category } = useParams()
  const allProducts = [...wallpapersData, ...curtains, ...blinds];
  console.log(allProducts)
  const [searchParams, setSearchParams] = useSearchParams()
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(16)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const filterRef = useRef<HTMLDivElement>(null)

  const sortParam = searchParams.get("sort") || ""
  const tagFilter = searchParams.get("tag") || ""
  const minPrice = Number(searchParams.get("minPrice")) || 0
  const maxPrice = Number(searchParams.get("maxPrice")) || Number.POSITIVE_INFINITY

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth
      setItemsPerPage(width < 640 ? 8 : 16)
    }

    updateItemsPerPage()
    window.addEventListener("resize", updateItemsPerPage)
    return () => window.removeEventListener("resize", updateItemsPerPage)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [searchParams])

const filteredWallpapers = allProducts.filter((item) => {
    const matchesCategory =
  !category || category.toLowerCase() === "all" || item.category?.toLowerCase() === category.toLowerCase();

  const matchesTag = tagFilter ? item.specialities?.includes(tagFilter) : true
  const matchesPrice = item.price >= minPrice && item.price <= maxPrice
  return matchesCategory && matchesTag && matchesPrice
})



  if (sortParam === "price-asc") {
    filteredWallpapers.sort((a, b) => a.price - b.price)
  } else if (sortParam === "price-desc") {
    filteredWallpapers.sort((a, b) => b.price - a.price)
  } else if (sortParam === "title") {
    filteredWallpapers.sort((a, b) => a.title.localeCompare(b.title))
  } 

  const totalPages = Math.ceil(filteredWallpapers.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentItems = filteredWallpapers.slice(startIndex, startIndex + itemsPerPage)

  const groupedItems = []
  for (let i = 0; i < currentItems.length; i += 4) {
    groupedItems.push(currentItems.slice(i, i + 4))
  }

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handleParamChange = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams)
    if (value) {
      newParams.set(key, value)
    } else {
      newParams.delete(key)
    }
    setSearchParams(newParams)
  }

  const clearAllFilters = () => {
    setSearchParams({})
    setCurrentPage(1)
    setIsFilterOpen(false)
  }

  const hasActiveFilters = tagFilter || minPrice !== 0 || maxPrice !== Number.POSITIVE_INFINITY || sortParam

  const getFilterDisplayText = () => {
    const filters = []
    if (tagFilter) filters.push(tagFilter.charAt(0).toUpperCase() + tagFilter.slice(1))
    if (minPrice !== 0 || maxPrice !== Number.POSITIVE_INFINITY) {
      const priceText = `₹${minPrice || 0} - ₹${maxPrice === Number.POSITIVE_INFINITY ? "∞" : maxPrice}`
      filters.push(priceText)
    }
    return filters.length > 0 ? filters.join(", ") : "All Filters"
  }





  return (
    <section className="mx-4 sm:mx-10 my-16">
      {/* Header + Breadcrumb */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
        <div className="mb-6 lg:mb-0 mt-10">
            <div className="flex items-center gap-4 mb-3">
                  <Link
     to="/"
    className="text-2xl  hover:bg-soft-pink text-gray-800 font-medium px-3 py-1.5 rounded-md transition"
  >
  &lt;
  </Link>
  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 capitalize">
 All Products
</h1>


</div>

       
          <div className="text-sm text-gray-600 mt-2 flex items-center">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span className="capitalize">All</span>



          </div>
          <p className="text-sm text-gray-500 mt-1">
            {filteredWallpapers.length} products  found
          </p>
        </div>

        {/* Filter + Sort Controls */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Custom Filter Dropdown */}
          <div className="relative" ref={filterRef}>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`flex items-center justify-between gap-3 px-4 py-2.5 border rounded-lg text-sm font-medium transition-all duration-200 min-w-[200px] ${
                hasActiveFilters
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
              }`}
            >
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span className="truncate">{getFilterDisplayText()}</span>
              </div>
              <ChevronDown className={`h-4 w-4 transition-transform ${isFilterOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Content */}
            {isFilterOpen && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                {/* Section 1: Tag Filters */}
                <div className="p-4 border-b border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Filter by Category</h3>
                  <div className="space-y-2">
                    {[
                      { value: "", label: "All Categories" },
                      { value: "bestseller", label: "Bestseller" },
                      { value: "featured", label: "Featured" },
                      { value: "popular", label: "Popular" },
                    ].map((option) => (
                      <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="tagFilter"
                          value={option.value}
                          checked={tagFilter === option.value}
                          onChange={(e) => handleParamChange("tag", e.target.value)}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-gray-900">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Section 2: Price Range */}
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Price Range</h3>
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <label className="block text-xs text-gray-600 mb-1">Min Price</label>
                      <input
                        type="number"
                        placeholder="0"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        value={minPrice !== 0 ? minPrice : ""}
                        onChange={(e) => handleParamChange("minPrice", e.target.value)}
                      />
                    </div>
                    <div className="text-gray-400 mt-5">-</div>
                    <div className="flex-1">
                      <label className="block text-xs text-gray-600 mb-1">Max Price</label>
                      <input
                        type="number"
                        placeholder="∞"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        value={maxPrice !== Number.POSITIVE_INFINITY ? maxPrice : ""}
                        onChange={(e) => handleParamChange("maxPrice", e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-4 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={clearAllFilters}
                    disabled={!hasActiveFilters}
                    className="text-sm text-gray-600 hover:text-gray-800 disabled:text-gray-400 disabled:cursor-not-allowed"
                  >
                    Clear all
                  </button>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <SortAsc className="h-4 w-4 text-gray-500" />
            <select
              value={sortParam}
              onChange={(e) => handleParamChange("sort", e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none min-w-[160px]"
            >
              <option value="">Default Sort</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="title">Title (A-Z)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <span className="text-sm text-gray-600">Active filters:</span>
          {tagFilter && (
            <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
              {tagFilter.charAt(0).toUpperCase() + tagFilter.slice(1)}
              <X className="h-3 w-3 cursor-pointer hover:text-blue-900" onClick={() => handleParamChange("tag", "")} />
            </span>
          )}
          {minPrice !== 0 && (
            <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
              Min: ₹{minPrice}
              <X
                className="h-3 w-3 cursor-pointer hover:text-green-900"
                onClick={() => handleParamChange("minPrice", "")}
              />
            </span>
          )}
          {maxPrice !== Number.POSITIVE_INFINITY && (
            <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
              Max: ₹{maxPrice}
              <X
                className="h-3 w-3 cursor-pointer hover:text-green-900"
                onClick={() => handleParamChange("maxPrice", "")}
              />
            </span>
          )}
          {sortParam && (
            <span className="inline-flex items-center gap-1 bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">
              {sortParam === "price-asc" && "Price: Low to High"}
              {sortParam === "price-desc" && "Price: High to Low"}
              {sortParam === "title" && "Title (A-Z)"}
              <X
                className="h-3 w-3 cursor-pointer hover:text-purple-900"
                onClick={() => handleParamChange("sort", "")}
              />
            </span>
          )}
        </div>
      )}

      {/* Wallpapers */}
      {filteredWallpapers.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Filter className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No wallpapers found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your filters to see more results.</p>
          <button
            onClick={clearAllFilters}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-6">
            {groupedItems.map((group, idx) => (
              <AnimationContainer key={idx}>
                <div className="flex flex-wrap gap-4 justify-start">
                  {group.map((item) => (
                    <Card
                      key={item.id}
                      title={item.title}
                      price={item.price}
                      originalPrice={item.originalPrice}
                      image={item.image}
                      category={item.category}
                    />
                  ))}
                </div>
              </AnimationContainer>
            ))}
          </div>

      <div className="flex justify-center mt-12 gap-2 flex-wrap">
  <button
    disabled={currentPage === 1}
    onClick={() => goToPage(currentPage - 1)}
    className="relative overflow-hidden group px-4 py-1.5 border border-fancy text-fancy-color text-sm rounded transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
  >
    <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
      ← Previous
    </span>
    <span className="absolute inset-0 bg-fancy-color scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 z-0 rounded"></span>
  </button>

  {[...Array(totalPages)].map((_, index) => {
    const pageNum = index + 1;
    const showPage =
      pageNum === 1 ||
      pageNum === totalPages ||
      (pageNum >= currentPage - 1 && pageNum <= currentPage + 1);

    if (!showPage && pageNum === 2 && currentPage > 4) {
      return (
        <span key={index} className="px-2 text-gray-400">
          ...
        </span>
      );
    }

    if (!showPage && pageNum === totalPages - 1 && currentPage < totalPages - 3) {
      return (
        <span key={index} className="px-2 text-gray-400">
          ...
        </span>
      );
    }

    if (!showPage) return null;

    const isActive = currentPage === pageNum;

    return (
      <button
        key={index}
        onClick={() => goToPage(pageNum)}
        className={`relative overflow-hidden group w-10 h-10 border text-sm font-medium rounded transition-all duration-300 ${
          isActive
            ? "border-fancy text-white bg-fancy-color"
            : "border-fancy text-fancy-color"
        }`}
      >
        <span
          className={`relative z-10 transition-colors duration-300 ${
            !isActive ? "group-hover:text-white" : ""
          }`}
        >
          {pageNum}
        </span>
        {!isActive && (
          <span className="absolute inset-0 bg-fancy-color scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 z-0 rounded"></span>
        )}
      </button>
    );
  })}

  <button
    disabled={currentPage === totalPages}
    onClick={() => goToPage(currentPage + 1)}
    className="relative overflow-hidden group px-4 py-1.5 border border-fancy text-fancy-color text-sm rounded transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
  >
    <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
      Next →
    </span>
    <span className="absolute inset-0 bg-fancy-color scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 z-0 rounded"></span>
  </button>
</div>

          
        </>
      )}
    </section>
  )
}
