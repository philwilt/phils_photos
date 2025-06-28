import react from 'react';

export default function GalleryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<div className="gallery">{children}</div>);
}
