import { createBucketClient } from '@cosmicjs/sdk'

const cosmicCMSClient = createBucketClient({
  bucketSlug: import.meta.env.PUBLIC_COSMIC_BUCKET_SLUG,
  readKey: import.meta.env.PUBLIC_COSMIC_READ_KEY,
})

export const getAllProducts = async () => {
  const products = await cosmicCMSClient.objects.find({
    type: 'products'
  })

  return products.objects
}