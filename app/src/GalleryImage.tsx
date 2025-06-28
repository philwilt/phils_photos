import Image from "next/image";

export default function GalleryImage({src}):  {
	return (
		<div className="gallery__item__image">
			<Image
            className="rounded-md"
            src={src}
            alt="Plentiphil logo"
            width={180}
            height={38}
	        />
		</div>);
}