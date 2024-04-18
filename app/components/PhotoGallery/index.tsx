
import BlurImage from "./BlurImage";


const images = [
  '/images/pic_01.jpg',
  '/images/pic_02.jpg',
  '/images/pic_03.jpg',
  '/images/pic_04.jpg',
  '/images/pic_05.jpg',
  '/images/pic_06.jpg',
  '/images/pic_07.jpg',
  '/images/pic_08.jpg',
  '/images/pic_09.jpg',
  '/images/pic_10.jpg',
  '/images/pic_11.jpg',
  '/images/pic_12.jpg',
  '/images/pic_13.jpg',
  '/images/pic_14.jpg',
  '/images/pic_15.jpg',
  '/images/pic_16.jpg',
  '/images/pic_17.jpg',
  '/images/pic_18.jpg',
  '/images/pic_19.jpg',
  '/images/pic_20.jpg',
  '/images/pic_21.jpg',
]
export default function PhotoGallery() {

  return (
    <div className="grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
      {
        images.map(image=>( <BlurImage key={image} src={image}/>))
      }     
    </div>
  )
}
