import React from 'react';
import GalleryItem from '../src/GalleryItem';

export default function Gallery({
  galleryItems,
}: Readonly<{
  galleryItems: object[];
}>) {
  return (
    <>
      <div className="gallery">
        { galleryItems.forEach((galleryItem: object[]) => {
          return (<GalleryItem src={galleryItem.src} />);
        })
      }
      </div>
    </>
  );
}
