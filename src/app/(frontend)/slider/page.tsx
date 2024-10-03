import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const Item = ({ title }: { title: string }) => (
  <>
    <h2 className="text-center text-2xl p-4 rounded-md bg-neutral-800">{title}</h2>
  </>
)

const Page = async () => {
  const payload = await getPayloadHMR({ config: configPromise })
  const slider = await payload.findByID({
    collection: 'slider',
    id: 1,
    draft: false,
  })

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <Carousel
          opts={{
            align: 'start',
          }}
          className="w-full max-w-sm"
        >
          <CarouselContent>
            {slider.slider?.map((item) => {
              return (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                  <Item title={item.title ?? 'slajd'} />
                </CarouselItem>
              )
            })}
            <CarouselItem></CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  )
}

export default Page
