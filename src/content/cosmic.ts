import { createBucketClient } from '@cosmicjs/sdk'

const cosmicCMSClient = createBucketClient({
  bucketSlug: import.meta.env.PUBLIC_COSMIC_BUCKET_SLUG,
  readKey: import.meta.env.PUBLIC_COSMIC_READ_KEY,
})

export const getAllProducts = async (category = 'all-products') => {

  // TODO: Add category filter to query
  const query = {
    type: 'products',
  }

  console.log(query)
  
  const products = await cosmicCMSClient.objects.find(query)

  // TODO: Implement this filter in the query itself
  if (category !== 'all-products') {
    return products.objects.filter((product: any) => product.metadata.category.key === category.slice(0, -1))
  }

  return products.objects
}