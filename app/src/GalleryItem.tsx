import GalleryImage from './GalleryImage';
import GalleryCaption from './GalleryCaption';

export default function GalleryItem({ galleryItem }) {
	return (
	<div className="gallery__item">
		<GalleryImage src={galleryItem.src} />
		<GalleryCaption caption={galleryItem.caption} />
	</div>);
}