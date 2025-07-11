import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  year: string;
  category: string;
}

interface PhotoGalleryProps {
  images: GalleryImage[];
  categories: string[];
  years: string[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ images, categories, years }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>(images);

  useEffect(() => {
    setFilteredImages(
      images.filter((image) => {
        const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
        const matchesYear = selectedYear === 'all' || image.year === selectedYear;
        return matchesCategory && matchesYear;
      })
    );
  }, [selectedCategory, selectedYear, images]);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  };

  return (
    <div className="w-full" onKeyDown={handleKeyDown}>
      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-4">
        <div className="w-full md:w-auto">
          <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-1">
            Catégorie
          </label>
          <select
            id="category-filter"
            className="w-full md:w-48 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">Toutes les catégories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full md:w-auto">
          <label htmlFor="year-filter" className="block text-sm font-medium text-gray-700 mb-1">
            Année
          </label>
          <select
            id="year-filter"
            className="w-full md:w-48 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="all">Toutes les années</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Gallery Grid */}
      {filteredImages.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
              onClick={() => openLightbox(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-white text-sm font-medium bg-black bg-opacity-60 p-2 rounded">
                    {image.alt}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">
            Aucune image ne correspond à vos filtres. Essayez d'autres filtres.
          </p>
        </div>
      )}

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <div
            className="max-w-5xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors"
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <div className="mt-4 text-white">
              <p className="text-lg font-medium">{selectedImage.alt}</p>
              <div className="flex gap-2 mt-2">
                <span className="bg-teal-500 text-white text-xs px-2 py-1 rounded">
                  {selectedImage.year}
                </span>
                <span className="bg-gray-700 text-white text-xs px-2 py-1 rounded">
                  {selectedImage.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;