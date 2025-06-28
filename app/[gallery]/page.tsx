import Gallery from '../src/Gallery';

export default function Page() {
	return (
    <div>
      <h1 className="text-lg">Gallery Home</h1>
      <Gallery galleryItems={[{ src: '/logo.png'}] }/>
    </div>
    )

}